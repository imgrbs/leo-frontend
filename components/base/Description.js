import React from 'react';
import { Descriptions } from 'antd';


export const ApplicantDescription = ({
  educations, telNo, telno, email,
}) => (
  <Descriptions column={{ xs: 24 }} title="Informations" bordered>
    <Descriptions.Item span={3} label="Major">{educations[0].major}</Descriptions.Item>
    <Descriptions.Item label="Tel no.">{telNo || telno}</Descriptions.Item>
    <Descriptions.Item label="Email">{email}</Descriptions.Item>
  </Descriptions>
);

export const RecruiterDescription = ({
  name, telNo, telno, email,
}) => (
  <Descriptions column={{ xs: 24 }} title="Informations" bordered>
    <Descriptions.Item span={3} label="Major">{name}</Descriptions.Item>
    <Descriptions.Item label="Tel no.">{telNo || telno}</Descriptions.Item>
    <Descriptions.Item label="Email">{email}</Descriptions.Item>
  </Descriptions>
);

export default Descriptions;
