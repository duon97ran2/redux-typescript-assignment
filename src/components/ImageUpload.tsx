import React from 'react'
import { Upload, Modal, Form, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';
import axios from 'axios';

type Props = { imageList: UploadFile<any>[] }


const ImageUpload = (props: Props) => {
  const [previewVisible, setPreviewVisible] = React.useState<boolean>(false);
  const [previewImage, setPreviewImage] = React.useState<string>('');
  const [previewTitle, setPreviewTitle] = React.useState<string>('');
  const [fileList, setFileList] = React.useState<Array<UploadFile>>(props.imageList);
  // function getBase64(file: any) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });
  // }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ margin: 8 }}>Upload</div>
    </div >
  )
  const dummyrequest = async (options: any) => {
    const { file, onSuccess, onError, onProgress } = options;
    const url = "https://api.cloudinary.com/v1_1/duongtaph13276/image/upload";
    const preset = "z8ujiqif";
    const formData = new FormData();
    formData.append("upload_preset", preset);
    formData.append("file", file);
    try {
      const { data } = await axios.post(url, formData, {
        headers: {
          "content-type": "application/x-www-formencoded",
          'X-Requested-With': 'XMLHttpRequest'
        },
        onUploadProgress: e => {
          onProgress({ percent: (e.loaded / e.total) * 100 })
        }
      });
      file.url = data.url;
      onSuccess("ok");
    } catch (error) {
      onError({ error });
    }
  }
  const accepts = ["image/gif", "image/jpeg", "image/png"]
  const handleChange = ({ fileList, file }) => {
    const extensionFile = accepts.map((item) => item.split("image/")[1]);
    if (file.size / 1024 / 1024 > 2) {
      message.error("Image must be less than 2MB");
      return;
    } else if (!accepts.includes(file.type)) {
      message.error(`Image must be in these types of extension: ${extensionFile.join(", ")}`);
      return;
    }
    setFileList(fileList);
    console.log(fileList);
  };
  const handleCancel = () => {
    setPreviewVisible(false);
  }
  const handlePreview = async (file: any) => {
    setPreviewVisible(true);
    setPreviewImage(file.url);
    setPreviewTitle(file.name);
  };
  React.useEffect(() => {
    setFileList(props.imageList);
  }, [props.imageList])

  return (<>
    <Form.Item name='image' rules={[{ required: true }]} style={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
      <Upload listType='picture-card' fileList={fileList} customRequest={dummyrequest} maxCount={8} onChange={handleChange} onPreview={handlePreview}>
        {fileList.length >= 8 ? null : uploadButton}

      </Upload>
    </Form.Item>
    <Modal
      visible={previewVisible}
      title={previewTitle}
      footer={null}
      onCancel={handleCancel}
    >
      <img src={previewImage} style={{ width: '100%' }} alt={previewTitle} />
    </Modal></>
  )
}

export default ImageUpload