import React from 'react';
import styles from './index.css';
import {FormControl,InputLabel,Input,FormHelperText}  from '@material-ui/core';
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">电子邮件</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">我们绝不会分享您的邮件地址。</FormHelperText>
        </FormControl><br/>
        <FormControl>
        <InputLabel htmlFor="my-input2">姓名</InputLabel>
        <Input id="my-input2" aria-describedby="my-helper-text2" />
        <FormHelperText id="my-helper-text2">我们绝不会分享您的邮件地址。</FormHelperText>


      </FormControl>
      <br/>
      <FormControl>
        <InputLabel htmlFor="my-input3">姓名2</InputLabel>
        <Input id="my-input3" aria-describedby="my-helper-text3" />
        <FormHelperText id="my-helper-text3">我们绝不会分享您的姓名。</FormHelperText>


      </FormControl>


    </div>
  );
}
