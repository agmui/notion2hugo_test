---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACXHW23%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4ddjdNV849QmAYIJDGY%2FmbcDIT7%2FHdjsw1xKFwjw%2BPgIgP9xCX7Kiw8JufH1Ec3vkkBYuB%2FVUZefj6yJBtL2HausqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOJnMImKrFJ3VWoryrcA67PuWZbMKg09Gx%2F0hlTpW60yE0D5fgBvPqRQkjEpw5MXNA3mRnG9b%2FkcASgaWRai46IEegQ7pSVTBPyOdwWI%2Fc8DXzlmJBwRlecIzlzSLHEjOj98o%2FDhZVOW4XFNOyLxVNzNLJ80j3Bgv2O5c2DlslMqXxTlITQOKXoBF7pY7RUvC9et2%2FlwU6riDK1i6j0lnXeL8R%2FccTgtyrvhw6RK13O0xdOdcCxjtaG9VPJan2ddAWlpOQ0l2WILF%2BohxbVnEYATYL4aqMVxQbpKbD5o%2FRV8E%2BWP76JTtV2Jd5Y0%2BPINGA100r6is9B%2Fw%2BLXO%2FRAM%2F%2FmVx6iasYAzgbF1cIioamB%2B0jH7dxio%2FEqzpJ23jGczrfuaRJVHyHj9H8A3hf%2BBiErlJk1aU%2FUM204mRDlvL0sF5gPax5ReEhiJnmb5k%2FSufTcdiwsMLwq6EVclnNiE818tfhVj10fjH99XNn%2FlVMwLWK7xiztSJ6HjjLcROayurIezP7vmMBlKLS%2B5szoIHD9tohXLQAqwTi0IOKzVsJLP6fFz4%2FCE6DdxA%2FdXzT4rV%2BEcb%2FStHk5%2FA5jw54DNY5BLCkP%2FSMkaZKdIg6jScmb2lrPjx8HOnS27dSZ4zwP9HSSaizWG5kvCI1MK%2FCqcIGOqUBr1U5ff2DPcF9zlAx4PXt2DaXFog8PpyZ0gbtkE%2FSBSCxbSUis7aAyalozCruog5vZc0CSSdA4YEAHXfY%2FCuU%2BfrYtnrKihq%2B5%2Fp6h7WMpBs1vkh1GVRnUzK3n%2FHqaIyppXtwIfdfpX240TZA2w4W%2BZLWb4ryOLF8XaD0%2FTgzW6HrE5ddmIMdnrVl%2FU2fBNKPvf7aLh9JBr0ZnE3c4tj%2B9SQJ3%2FXv&X-Amz-Signature=e1fd26a4236e29bf7bf5b6d327eff20dcc686dc0e3881d774b177188553470e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACXHW23%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4ddjdNV849QmAYIJDGY%2FmbcDIT7%2FHdjsw1xKFwjw%2BPgIgP9xCX7Kiw8JufH1Ec3vkkBYuB%2FVUZefj6yJBtL2HausqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOJnMImKrFJ3VWoryrcA67PuWZbMKg09Gx%2F0hlTpW60yE0D5fgBvPqRQkjEpw5MXNA3mRnG9b%2FkcASgaWRai46IEegQ7pSVTBPyOdwWI%2Fc8DXzlmJBwRlecIzlzSLHEjOj98o%2FDhZVOW4XFNOyLxVNzNLJ80j3Bgv2O5c2DlslMqXxTlITQOKXoBF7pY7RUvC9et2%2FlwU6riDK1i6j0lnXeL8R%2FccTgtyrvhw6RK13O0xdOdcCxjtaG9VPJan2ddAWlpOQ0l2WILF%2BohxbVnEYATYL4aqMVxQbpKbD5o%2FRV8E%2BWP76JTtV2Jd5Y0%2BPINGA100r6is9B%2Fw%2BLXO%2FRAM%2F%2FmVx6iasYAzgbF1cIioamB%2B0jH7dxio%2FEqzpJ23jGczrfuaRJVHyHj9H8A3hf%2BBiErlJk1aU%2FUM204mRDlvL0sF5gPax5ReEhiJnmb5k%2FSufTcdiwsMLwq6EVclnNiE818tfhVj10fjH99XNn%2FlVMwLWK7xiztSJ6HjjLcROayurIezP7vmMBlKLS%2B5szoIHD9tohXLQAqwTi0IOKzVsJLP6fFz4%2FCE6DdxA%2FdXzT4rV%2BEcb%2FStHk5%2FA5jw54DNY5BLCkP%2FSMkaZKdIg6jScmb2lrPjx8HOnS27dSZ4zwP9HSSaizWG5kvCI1MK%2FCqcIGOqUBr1U5ff2DPcF9zlAx4PXt2DaXFog8PpyZ0gbtkE%2FSBSCxbSUis7aAyalozCruog5vZc0CSSdA4YEAHXfY%2FCuU%2BfrYtnrKihq%2B5%2Fp6h7WMpBs1vkh1GVRnUzK3n%2FHqaIyppXtwIfdfpX240TZA2w4W%2BZLWb4ryOLF8XaD0%2FTgzW6HrE5ddmIMdnrVl%2FU2fBNKPvf7aLh9JBr0ZnE3c4tj%2B9SQJ3%2FXv&X-Amz-Signature=856bb633726b7ed0e2aa266cacbbddb601e9ce7b66f3877b6c4919087efe5c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACXHW23%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4ddjdNV849QmAYIJDGY%2FmbcDIT7%2FHdjsw1xKFwjw%2BPgIgP9xCX7Kiw8JufH1Ec3vkkBYuB%2FVUZefj6yJBtL2HausqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOJnMImKrFJ3VWoryrcA67PuWZbMKg09Gx%2F0hlTpW60yE0D5fgBvPqRQkjEpw5MXNA3mRnG9b%2FkcASgaWRai46IEegQ7pSVTBPyOdwWI%2Fc8DXzlmJBwRlecIzlzSLHEjOj98o%2FDhZVOW4XFNOyLxVNzNLJ80j3Bgv2O5c2DlslMqXxTlITQOKXoBF7pY7RUvC9et2%2FlwU6riDK1i6j0lnXeL8R%2FccTgtyrvhw6RK13O0xdOdcCxjtaG9VPJan2ddAWlpOQ0l2WILF%2BohxbVnEYATYL4aqMVxQbpKbD5o%2FRV8E%2BWP76JTtV2Jd5Y0%2BPINGA100r6is9B%2Fw%2BLXO%2FRAM%2F%2FmVx6iasYAzgbF1cIioamB%2B0jH7dxio%2FEqzpJ23jGczrfuaRJVHyHj9H8A3hf%2BBiErlJk1aU%2FUM204mRDlvL0sF5gPax5ReEhiJnmb5k%2FSufTcdiwsMLwq6EVclnNiE818tfhVj10fjH99XNn%2FlVMwLWK7xiztSJ6HjjLcROayurIezP7vmMBlKLS%2B5szoIHD9tohXLQAqwTi0IOKzVsJLP6fFz4%2FCE6DdxA%2FdXzT4rV%2BEcb%2FStHk5%2FA5jw54DNY5BLCkP%2FSMkaZKdIg6jScmb2lrPjx8HOnS27dSZ4zwP9HSSaizWG5kvCI1MK%2FCqcIGOqUBr1U5ff2DPcF9zlAx4PXt2DaXFog8PpyZ0gbtkE%2FSBSCxbSUis7aAyalozCruog5vZc0CSSdA4YEAHXfY%2FCuU%2BfrYtnrKihq%2B5%2Fp6h7WMpBs1vkh1GVRnUzK3n%2FHqaIyppXtwIfdfpX240TZA2w4W%2BZLWb4ryOLF8XaD0%2FTgzW6HrE5ddmIMdnrVl%2FU2fBNKPvf7aLh9JBr0ZnE3c4tj%2B9SQJ3%2FXv&X-Amz-Signature=287970f5803773e81c21f31c23551fbb9d137db5e950dbaf2834fc970f24a96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACXHW23%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4ddjdNV849QmAYIJDGY%2FmbcDIT7%2FHdjsw1xKFwjw%2BPgIgP9xCX7Kiw8JufH1Ec3vkkBYuB%2FVUZefj6yJBtL2HausqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOJnMImKrFJ3VWoryrcA67PuWZbMKg09Gx%2F0hlTpW60yE0D5fgBvPqRQkjEpw5MXNA3mRnG9b%2FkcASgaWRai46IEegQ7pSVTBPyOdwWI%2Fc8DXzlmJBwRlecIzlzSLHEjOj98o%2FDhZVOW4XFNOyLxVNzNLJ80j3Bgv2O5c2DlslMqXxTlITQOKXoBF7pY7RUvC9et2%2FlwU6riDK1i6j0lnXeL8R%2FccTgtyrvhw6RK13O0xdOdcCxjtaG9VPJan2ddAWlpOQ0l2WILF%2BohxbVnEYATYL4aqMVxQbpKbD5o%2FRV8E%2BWP76JTtV2Jd5Y0%2BPINGA100r6is9B%2Fw%2BLXO%2FRAM%2F%2FmVx6iasYAzgbF1cIioamB%2B0jH7dxio%2FEqzpJ23jGczrfuaRJVHyHj9H8A3hf%2BBiErlJk1aU%2FUM204mRDlvL0sF5gPax5ReEhiJnmb5k%2FSufTcdiwsMLwq6EVclnNiE818tfhVj10fjH99XNn%2FlVMwLWK7xiztSJ6HjjLcROayurIezP7vmMBlKLS%2B5szoIHD9tohXLQAqwTi0IOKzVsJLP6fFz4%2FCE6DdxA%2FdXzT4rV%2BEcb%2FStHk5%2FA5jw54DNY5BLCkP%2FSMkaZKdIg6jScmb2lrPjx8HOnS27dSZ4zwP9HSSaizWG5kvCI1MK%2FCqcIGOqUBr1U5ff2DPcF9zlAx4PXt2DaXFog8PpyZ0gbtkE%2FSBSCxbSUis7aAyalozCruog5vZc0CSSdA4YEAHXfY%2FCuU%2BfrYtnrKihq%2B5%2Fp6h7WMpBs1vkh1GVRnUzK3n%2FHqaIyppXtwIfdfpX240TZA2w4W%2BZLWb4ryOLF8XaD0%2FTgzW6HrE5ddmIMdnrVl%2FU2fBNKPvf7aLh9JBr0ZnE3c4tj%2B9SQJ3%2FXv&X-Amz-Signature=c900afcda3b7a97aa7215929ea54df1488f8211b39ac121f0f3deb25d4c54f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACXHW23%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4ddjdNV849QmAYIJDGY%2FmbcDIT7%2FHdjsw1xKFwjw%2BPgIgP9xCX7Kiw8JufH1Ec3vkkBYuB%2FVUZefj6yJBtL2HausqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOJnMImKrFJ3VWoryrcA67PuWZbMKg09Gx%2F0hlTpW60yE0D5fgBvPqRQkjEpw5MXNA3mRnG9b%2FkcASgaWRai46IEegQ7pSVTBPyOdwWI%2Fc8DXzlmJBwRlecIzlzSLHEjOj98o%2FDhZVOW4XFNOyLxVNzNLJ80j3Bgv2O5c2DlslMqXxTlITQOKXoBF7pY7RUvC9et2%2FlwU6riDK1i6j0lnXeL8R%2FccTgtyrvhw6RK13O0xdOdcCxjtaG9VPJan2ddAWlpOQ0l2WILF%2BohxbVnEYATYL4aqMVxQbpKbD5o%2FRV8E%2BWP76JTtV2Jd5Y0%2BPINGA100r6is9B%2Fw%2BLXO%2FRAM%2F%2FmVx6iasYAzgbF1cIioamB%2B0jH7dxio%2FEqzpJ23jGczrfuaRJVHyHj9H8A3hf%2BBiErlJk1aU%2FUM204mRDlvL0sF5gPax5ReEhiJnmb5k%2FSufTcdiwsMLwq6EVclnNiE818tfhVj10fjH99XNn%2FlVMwLWK7xiztSJ6HjjLcROayurIezP7vmMBlKLS%2B5szoIHD9tohXLQAqwTi0IOKzVsJLP6fFz4%2FCE6DdxA%2FdXzT4rV%2BEcb%2FStHk5%2FA5jw54DNY5BLCkP%2FSMkaZKdIg6jScmb2lrPjx8HOnS27dSZ4zwP9HSSaizWG5kvCI1MK%2FCqcIGOqUBr1U5ff2DPcF9zlAx4PXt2DaXFog8PpyZ0gbtkE%2FSBSCxbSUis7aAyalozCruog5vZc0CSSdA4YEAHXfY%2FCuU%2BfrYtnrKihq%2B5%2Fp6h7WMpBs1vkh1GVRnUzK3n%2FHqaIyppXtwIfdfpX240TZA2w4W%2BZLWb4ryOLF8XaD0%2FTgzW6HrE5ddmIMdnrVl%2FU2fBNKPvf7aLh9JBr0ZnE3c4tj%2B9SQJ3%2FXv&X-Amz-Signature=ba62a0711ccc0b780cbed2fbce613290a92c8176d7dc027dda9783f93237279c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACXHW23%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4ddjdNV849QmAYIJDGY%2FmbcDIT7%2FHdjsw1xKFwjw%2BPgIgP9xCX7Kiw8JufH1Ec3vkkBYuB%2FVUZefj6yJBtL2HausqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOJnMImKrFJ3VWoryrcA67PuWZbMKg09Gx%2F0hlTpW60yE0D5fgBvPqRQkjEpw5MXNA3mRnG9b%2FkcASgaWRai46IEegQ7pSVTBPyOdwWI%2Fc8DXzlmJBwRlecIzlzSLHEjOj98o%2FDhZVOW4XFNOyLxVNzNLJ80j3Bgv2O5c2DlslMqXxTlITQOKXoBF7pY7RUvC9et2%2FlwU6riDK1i6j0lnXeL8R%2FccTgtyrvhw6RK13O0xdOdcCxjtaG9VPJan2ddAWlpOQ0l2WILF%2BohxbVnEYATYL4aqMVxQbpKbD5o%2FRV8E%2BWP76JTtV2Jd5Y0%2BPINGA100r6is9B%2Fw%2BLXO%2FRAM%2F%2FmVx6iasYAzgbF1cIioamB%2B0jH7dxio%2FEqzpJ23jGczrfuaRJVHyHj9H8A3hf%2BBiErlJk1aU%2FUM204mRDlvL0sF5gPax5ReEhiJnmb5k%2FSufTcdiwsMLwq6EVclnNiE818tfhVj10fjH99XNn%2FlVMwLWK7xiztSJ6HjjLcROayurIezP7vmMBlKLS%2B5szoIHD9tohXLQAqwTi0IOKzVsJLP6fFz4%2FCE6DdxA%2FdXzT4rV%2BEcb%2FStHk5%2FA5jw54DNY5BLCkP%2FSMkaZKdIg6jScmb2lrPjx8HOnS27dSZ4zwP9HSSaizWG5kvCI1MK%2FCqcIGOqUBr1U5ff2DPcF9zlAx4PXt2DaXFog8PpyZ0gbtkE%2FSBSCxbSUis7aAyalozCruog5vZc0CSSdA4YEAHXfY%2FCuU%2BfrYtnrKihq%2B5%2Fp6h7WMpBs1vkh1GVRnUzK3n%2FHqaIyppXtwIfdfpX240TZA2w4W%2BZLWb4ryOLF8XaD0%2FTgzW6HrE5ddmIMdnrVl%2FU2fBNKPvf7aLh9JBr0ZnE3c4tj%2B9SQJ3%2FXv&X-Amz-Signature=e735a5138440f55d3dfb617fcfd9d0b823ed6d1da3ca93b1247c09126b73f1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACXHW23%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4ddjdNV849QmAYIJDGY%2FmbcDIT7%2FHdjsw1xKFwjw%2BPgIgP9xCX7Kiw8JufH1Ec3vkkBYuB%2FVUZefj6yJBtL2HausqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOJnMImKrFJ3VWoryrcA67PuWZbMKg09Gx%2F0hlTpW60yE0D5fgBvPqRQkjEpw5MXNA3mRnG9b%2FkcASgaWRai46IEegQ7pSVTBPyOdwWI%2Fc8DXzlmJBwRlecIzlzSLHEjOj98o%2FDhZVOW4XFNOyLxVNzNLJ80j3Bgv2O5c2DlslMqXxTlITQOKXoBF7pY7RUvC9et2%2FlwU6riDK1i6j0lnXeL8R%2FccTgtyrvhw6RK13O0xdOdcCxjtaG9VPJan2ddAWlpOQ0l2WILF%2BohxbVnEYATYL4aqMVxQbpKbD5o%2FRV8E%2BWP76JTtV2Jd5Y0%2BPINGA100r6is9B%2Fw%2BLXO%2FRAM%2F%2FmVx6iasYAzgbF1cIioamB%2B0jH7dxio%2FEqzpJ23jGczrfuaRJVHyHj9H8A3hf%2BBiErlJk1aU%2FUM204mRDlvL0sF5gPax5ReEhiJnmb5k%2FSufTcdiwsMLwq6EVclnNiE818tfhVj10fjH99XNn%2FlVMwLWK7xiztSJ6HjjLcROayurIezP7vmMBlKLS%2B5szoIHD9tohXLQAqwTi0IOKzVsJLP6fFz4%2FCE6DdxA%2FdXzT4rV%2BEcb%2FStHk5%2FA5jw54DNY5BLCkP%2FSMkaZKdIg6jScmb2lrPjx8HOnS27dSZ4zwP9HSSaizWG5kvCI1MK%2FCqcIGOqUBr1U5ff2DPcF9zlAx4PXt2DaXFog8PpyZ0gbtkE%2FSBSCxbSUis7aAyalozCruog5vZc0CSSdA4YEAHXfY%2FCuU%2BfrYtnrKihq%2B5%2Fp6h7WMpBs1vkh1GVRnUzK3n%2FHqaIyppXtwIfdfpX240TZA2w4W%2BZLWb4ryOLF8XaD0%2FTgzW6HrE5ddmIMdnrVl%2FU2fBNKPvf7aLh9JBr0ZnE3c4tj%2B9SQJ3%2FXv&X-Amz-Signature=b1ea29e97ea7954af6a18c8608a1610276460e7829ef4829223e86b7344f73bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
