import React from "react";
import {useForm} from "react-hook-form";
import Input from "@material-ui/core/Input";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const NavLinkForm = props => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    props.history.push("/");
    console.log(data);
  };

  return (
    <div className="NavLinkForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <TextField id="standard-basic" label="年龄" style={{
              marginBottom: "20px"
            }}
            name="age"
            inputRef={register}
            placeholder="请输入年龄"
            inputProps={{
              "aria-label": "Description"
            }}/>
          <Input
            style={{
              marginBottom: "20px"
            }}
            name="name"
            inputRef={register}
            placeholder="名字"
            inputProps={{
              "aria-label": "Description"
            }}
          />
        </div>
        <Button type="submit">提交</Button>
      </form>
    </div>
  );
};

export default NavLinkForm;
