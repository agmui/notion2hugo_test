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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4OXCN4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDGd7lFGpGRzsgiZMZs6Dk9zzP%2F02J%2BeRdL%2FsLJcpOdeAIhAKhvjiYKq7dZh8cKr4CEC6q%2Bz%2BlAavioEiMSKv%2BAhIUZKv8DCGkQABoMNjM3NDIzMTgzODA1IgyTWs0kS6mdCJvUfn4q3APwlUEFrV68D8A2y1gbXtyCGWB0gbnjqFXZByui7Ql2ik9ubOSKto8sQNQWUYHC4URvb4LlHBppNax6dTf0HXgat2fZmLcxJFWf8htaMLGFSWq9eCv0fmZJ6cZ3naBEbOSbbszxSX4Gk1l1y7FpN8OXSUxq394maO3Wadph0tB9dmAPn57ENUddAp5l%2BaLIDhC%2FTYgiorJ7YAdVoSRhr0hZmCsF7u%2FHwHj7rVyh32Z3afI4%2BgIzd73u4%2BvP131zGyYCPp8rjhCSqSjwcK%2FFXlN6BKCebyIsalY%2FSe3UhmQUucTKT1yqI%2BS2D7U%2FyJ6eC33woFPRBkenVnIhejO30rG5fDIqWSdola5k%2FKLZuzG6WWxu3aXw31fxC3EU9qcS9Y6l%2BmHt4suetmWst%2FkKi41cJgTiYN9llsZQwPhzkXiR9ssyIQ6E0gPxQF6uqG90lqKolRekGVK4SFS0aBXqYS1Jd5lZgiDGiVKtHD7vcZ8pd8H6DTYeWVaAPqBEonEzPYEstUHFg8BBGzC6hDaRmvwEZMtCyG%2B1Jth9B%2FT1ys%2By0etrRNYP9p1rO4MmF3CqXuI0kIHxnVaCXewijrTXUZ%2Fk9BY3dEMmyCXND6U7JXzvuqd5jdhpehtYE2UA7DDhgMq9BjqkAeRHIl%2FGi9vsOdhduVKag2603OSzXeis%2Fm5cfgyMFpZM76xo5zwEu2LTPynFzCWx3BJ6hFypuENVR9TWg7pEHlmcEYPPyCN9CvKW8XTwe%2BDOiLPY0McB0QHs1DojAqqgeX3zFMeyEcm5kaUhFvAbd%2FqxHpdg0YCjX42BqEzBBA4UdBKdFhIToSbT4PuWb9sEHA970lPonMtWZwymy6REKzUt%2FIqJ&X-Amz-Signature=1d00456746f83e7c0cfd35433988bf5a54f2a4c7ce38324d1f6823327a7cf11f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4OXCN4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDGd7lFGpGRzsgiZMZs6Dk9zzP%2F02J%2BeRdL%2FsLJcpOdeAIhAKhvjiYKq7dZh8cKr4CEC6q%2Bz%2BlAavioEiMSKv%2BAhIUZKv8DCGkQABoMNjM3NDIzMTgzODA1IgyTWs0kS6mdCJvUfn4q3APwlUEFrV68D8A2y1gbXtyCGWB0gbnjqFXZByui7Ql2ik9ubOSKto8sQNQWUYHC4URvb4LlHBppNax6dTf0HXgat2fZmLcxJFWf8htaMLGFSWq9eCv0fmZJ6cZ3naBEbOSbbszxSX4Gk1l1y7FpN8OXSUxq394maO3Wadph0tB9dmAPn57ENUddAp5l%2BaLIDhC%2FTYgiorJ7YAdVoSRhr0hZmCsF7u%2FHwHj7rVyh32Z3afI4%2BgIzd73u4%2BvP131zGyYCPp8rjhCSqSjwcK%2FFXlN6BKCebyIsalY%2FSe3UhmQUucTKT1yqI%2BS2D7U%2FyJ6eC33woFPRBkenVnIhejO30rG5fDIqWSdola5k%2FKLZuzG6WWxu3aXw31fxC3EU9qcS9Y6l%2BmHt4suetmWst%2FkKi41cJgTiYN9llsZQwPhzkXiR9ssyIQ6E0gPxQF6uqG90lqKolRekGVK4SFS0aBXqYS1Jd5lZgiDGiVKtHD7vcZ8pd8H6DTYeWVaAPqBEonEzPYEstUHFg8BBGzC6hDaRmvwEZMtCyG%2B1Jth9B%2FT1ys%2By0etrRNYP9p1rO4MmF3CqXuI0kIHxnVaCXewijrTXUZ%2Fk9BY3dEMmyCXND6U7JXzvuqd5jdhpehtYE2UA7DDhgMq9BjqkAeRHIl%2FGi9vsOdhduVKag2603OSzXeis%2Fm5cfgyMFpZM76xo5zwEu2LTPynFzCWx3BJ6hFypuENVR9TWg7pEHlmcEYPPyCN9CvKW8XTwe%2BDOiLPY0McB0QHs1DojAqqgeX3zFMeyEcm5kaUhFvAbd%2FqxHpdg0YCjX42BqEzBBA4UdBKdFhIToSbT4PuWb9sEHA970lPonMtWZwymy6REKzUt%2FIqJ&X-Amz-Signature=b7df5d0615955ac57e4116ddb82405c8d96aa066676e6ffed92c7ee1db5bc466&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4OXCN4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDGd7lFGpGRzsgiZMZs6Dk9zzP%2F02J%2BeRdL%2FsLJcpOdeAIhAKhvjiYKq7dZh8cKr4CEC6q%2Bz%2BlAavioEiMSKv%2BAhIUZKv8DCGkQABoMNjM3NDIzMTgzODA1IgyTWs0kS6mdCJvUfn4q3APwlUEFrV68D8A2y1gbXtyCGWB0gbnjqFXZByui7Ql2ik9ubOSKto8sQNQWUYHC4URvb4LlHBppNax6dTf0HXgat2fZmLcxJFWf8htaMLGFSWq9eCv0fmZJ6cZ3naBEbOSbbszxSX4Gk1l1y7FpN8OXSUxq394maO3Wadph0tB9dmAPn57ENUddAp5l%2BaLIDhC%2FTYgiorJ7YAdVoSRhr0hZmCsF7u%2FHwHj7rVyh32Z3afI4%2BgIzd73u4%2BvP131zGyYCPp8rjhCSqSjwcK%2FFXlN6BKCebyIsalY%2FSe3UhmQUucTKT1yqI%2BS2D7U%2FyJ6eC33woFPRBkenVnIhejO30rG5fDIqWSdola5k%2FKLZuzG6WWxu3aXw31fxC3EU9qcS9Y6l%2BmHt4suetmWst%2FkKi41cJgTiYN9llsZQwPhzkXiR9ssyIQ6E0gPxQF6uqG90lqKolRekGVK4SFS0aBXqYS1Jd5lZgiDGiVKtHD7vcZ8pd8H6DTYeWVaAPqBEonEzPYEstUHFg8BBGzC6hDaRmvwEZMtCyG%2B1Jth9B%2FT1ys%2By0etrRNYP9p1rO4MmF3CqXuI0kIHxnVaCXewijrTXUZ%2Fk9BY3dEMmyCXND6U7JXzvuqd5jdhpehtYE2UA7DDhgMq9BjqkAeRHIl%2FGi9vsOdhduVKag2603OSzXeis%2Fm5cfgyMFpZM76xo5zwEu2LTPynFzCWx3BJ6hFypuENVR9TWg7pEHlmcEYPPyCN9CvKW8XTwe%2BDOiLPY0McB0QHs1DojAqqgeX3zFMeyEcm5kaUhFvAbd%2FqxHpdg0YCjX42BqEzBBA4UdBKdFhIToSbT4PuWb9sEHA970lPonMtWZwymy6REKzUt%2FIqJ&X-Amz-Signature=325d0c5b8c7ad174a5fb4fff0a37b7ae8132eb2b4276e73680aeb90fc6776e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4OXCN4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDGd7lFGpGRzsgiZMZs6Dk9zzP%2F02J%2BeRdL%2FsLJcpOdeAIhAKhvjiYKq7dZh8cKr4CEC6q%2Bz%2BlAavioEiMSKv%2BAhIUZKv8DCGkQABoMNjM3NDIzMTgzODA1IgyTWs0kS6mdCJvUfn4q3APwlUEFrV68D8A2y1gbXtyCGWB0gbnjqFXZByui7Ql2ik9ubOSKto8sQNQWUYHC4URvb4LlHBppNax6dTf0HXgat2fZmLcxJFWf8htaMLGFSWq9eCv0fmZJ6cZ3naBEbOSbbszxSX4Gk1l1y7FpN8OXSUxq394maO3Wadph0tB9dmAPn57ENUddAp5l%2BaLIDhC%2FTYgiorJ7YAdVoSRhr0hZmCsF7u%2FHwHj7rVyh32Z3afI4%2BgIzd73u4%2BvP131zGyYCPp8rjhCSqSjwcK%2FFXlN6BKCebyIsalY%2FSe3UhmQUucTKT1yqI%2BS2D7U%2FyJ6eC33woFPRBkenVnIhejO30rG5fDIqWSdola5k%2FKLZuzG6WWxu3aXw31fxC3EU9qcS9Y6l%2BmHt4suetmWst%2FkKi41cJgTiYN9llsZQwPhzkXiR9ssyIQ6E0gPxQF6uqG90lqKolRekGVK4SFS0aBXqYS1Jd5lZgiDGiVKtHD7vcZ8pd8H6DTYeWVaAPqBEonEzPYEstUHFg8BBGzC6hDaRmvwEZMtCyG%2B1Jth9B%2FT1ys%2By0etrRNYP9p1rO4MmF3CqXuI0kIHxnVaCXewijrTXUZ%2Fk9BY3dEMmyCXND6U7JXzvuqd5jdhpehtYE2UA7DDhgMq9BjqkAeRHIl%2FGi9vsOdhduVKag2603OSzXeis%2Fm5cfgyMFpZM76xo5zwEu2LTPynFzCWx3BJ6hFypuENVR9TWg7pEHlmcEYPPyCN9CvKW8XTwe%2BDOiLPY0McB0QHs1DojAqqgeX3zFMeyEcm5kaUhFvAbd%2FqxHpdg0YCjX42BqEzBBA4UdBKdFhIToSbT4PuWb9sEHA970lPonMtWZwymy6REKzUt%2FIqJ&X-Amz-Signature=be649177c3a0e75447f0623dca4d90c5af5818a95ce85c96dc20e8e80d256813&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4OXCN4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDGd7lFGpGRzsgiZMZs6Dk9zzP%2F02J%2BeRdL%2FsLJcpOdeAIhAKhvjiYKq7dZh8cKr4CEC6q%2Bz%2BlAavioEiMSKv%2BAhIUZKv8DCGkQABoMNjM3NDIzMTgzODA1IgyTWs0kS6mdCJvUfn4q3APwlUEFrV68D8A2y1gbXtyCGWB0gbnjqFXZByui7Ql2ik9ubOSKto8sQNQWUYHC4URvb4LlHBppNax6dTf0HXgat2fZmLcxJFWf8htaMLGFSWq9eCv0fmZJ6cZ3naBEbOSbbszxSX4Gk1l1y7FpN8OXSUxq394maO3Wadph0tB9dmAPn57ENUddAp5l%2BaLIDhC%2FTYgiorJ7YAdVoSRhr0hZmCsF7u%2FHwHj7rVyh32Z3afI4%2BgIzd73u4%2BvP131zGyYCPp8rjhCSqSjwcK%2FFXlN6BKCebyIsalY%2FSe3UhmQUucTKT1yqI%2BS2D7U%2FyJ6eC33woFPRBkenVnIhejO30rG5fDIqWSdola5k%2FKLZuzG6WWxu3aXw31fxC3EU9qcS9Y6l%2BmHt4suetmWst%2FkKi41cJgTiYN9llsZQwPhzkXiR9ssyIQ6E0gPxQF6uqG90lqKolRekGVK4SFS0aBXqYS1Jd5lZgiDGiVKtHD7vcZ8pd8H6DTYeWVaAPqBEonEzPYEstUHFg8BBGzC6hDaRmvwEZMtCyG%2B1Jth9B%2FT1ys%2By0etrRNYP9p1rO4MmF3CqXuI0kIHxnVaCXewijrTXUZ%2Fk9BY3dEMmyCXND6U7JXzvuqd5jdhpehtYE2UA7DDhgMq9BjqkAeRHIl%2FGi9vsOdhduVKag2603OSzXeis%2Fm5cfgyMFpZM76xo5zwEu2LTPynFzCWx3BJ6hFypuENVR9TWg7pEHlmcEYPPyCN9CvKW8XTwe%2BDOiLPY0McB0QHs1DojAqqgeX3zFMeyEcm5kaUhFvAbd%2FqxHpdg0YCjX42BqEzBBA4UdBKdFhIToSbT4PuWb9sEHA970lPonMtWZwymy6REKzUt%2FIqJ&X-Amz-Signature=4406a5ef638b5bd343640cef8b1b617f79ede399bdb3cb95aeca46c3bfeec862&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4OXCN4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDGd7lFGpGRzsgiZMZs6Dk9zzP%2F02J%2BeRdL%2FsLJcpOdeAIhAKhvjiYKq7dZh8cKr4CEC6q%2Bz%2BlAavioEiMSKv%2BAhIUZKv8DCGkQABoMNjM3NDIzMTgzODA1IgyTWs0kS6mdCJvUfn4q3APwlUEFrV68D8A2y1gbXtyCGWB0gbnjqFXZByui7Ql2ik9ubOSKto8sQNQWUYHC4URvb4LlHBppNax6dTf0HXgat2fZmLcxJFWf8htaMLGFSWq9eCv0fmZJ6cZ3naBEbOSbbszxSX4Gk1l1y7FpN8OXSUxq394maO3Wadph0tB9dmAPn57ENUddAp5l%2BaLIDhC%2FTYgiorJ7YAdVoSRhr0hZmCsF7u%2FHwHj7rVyh32Z3afI4%2BgIzd73u4%2BvP131zGyYCPp8rjhCSqSjwcK%2FFXlN6BKCebyIsalY%2FSe3UhmQUucTKT1yqI%2BS2D7U%2FyJ6eC33woFPRBkenVnIhejO30rG5fDIqWSdola5k%2FKLZuzG6WWxu3aXw31fxC3EU9qcS9Y6l%2BmHt4suetmWst%2FkKi41cJgTiYN9llsZQwPhzkXiR9ssyIQ6E0gPxQF6uqG90lqKolRekGVK4SFS0aBXqYS1Jd5lZgiDGiVKtHD7vcZ8pd8H6DTYeWVaAPqBEonEzPYEstUHFg8BBGzC6hDaRmvwEZMtCyG%2B1Jth9B%2FT1ys%2By0etrRNYP9p1rO4MmF3CqXuI0kIHxnVaCXewijrTXUZ%2Fk9BY3dEMmyCXND6U7JXzvuqd5jdhpehtYE2UA7DDhgMq9BjqkAeRHIl%2FGi9vsOdhduVKag2603OSzXeis%2Fm5cfgyMFpZM76xo5zwEu2LTPynFzCWx3BJ6hFypuENVR9TWg7pEHlmcEYPPyCN9CvKW8XTwe%2BDOiLPY0McB0QHs1DojAqqgeX3zFMeyEcm5kaUhFvAbd%2FqxHpdg0YCjX42BqEzBBA4UdBKdFhIToSbT4PuWb9sEHA970lPonMtWZwymy6REKzUt%2FIqJ&X-Amz-Signature=0ebf78fad6b62ab94f9b403689c61221ec2386eb8c974929efb3409aba677771&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4OXCN4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDGd7lFGpGRzsgiZMZs6Dk9zzP%2F02J%2BeRdL%2FsLJcpOdeAIhAKhvjiYKq7dZh8cKr4CEC6q%2Bz%2BlAavioEiMSKv%2BAhIUZKv8DCGkQABoMNjM3NDIzMTgzODA1IgyTWs0kS6mdCJvUfn4q3APwlUEFrV68D8A2y1gbXtyCGWB0gbnjqFXZByui7Ql2ik9ubOSKto8sQNQWUYHC4URvb4LlHBppNax6dTf0HXgat2fZmLcxJFWf8htaMLGFSWq9eCv0fmZJ6cZ3naBEbOSbbszxSX4Gk1l1y7FpN8OXSUxq394maO3Wadph0tB9dmAPn57ENUddAp5l%2BaLIDhC%2FTYgiorJ7YAdVoSRhr0hZmCsF7u%2FHwHj7rVyh32Z3afI4%2BgIzd73u4%2BvP131zGyYCPp8rjhCSqSjwcK%2FFXlN6BKCebyIsalY%2FSe3UhmQUucTKT1yqI%2BS2D7U%2FyJ6eC33woFPRBkenVnIhejO30rG5fDIqWSdola5k%2FKLZuzG6WWxu3aXw31fxC3EU9qcS9Y6l%2BmHt4suetmWst%2FkKi41cJgTiYN9llsZQwPhzkXiR9ssyIQ6E0gPxQF6uqG90lqKolRekGVK4SFS0aBXqYS1Jd5lZgiDGiVKtHD7vcZ8pd8H6DTYeWVaAPqBEonEzPYEstUHFg8BBGzC6hDaRmvwEZMtCyG%2B1Jth9B%2FT1ys%2By0etrRNYP9p1rO4MmF3CqXuI0kIHxnVaCXewijrTXUZ%2Fk9BY3dEMmyCXND6U7JXzvuqd5jdhpehtYE2UA7DDhgMq9BjqkAeRHIl%2FGi9vsOdhduVKag2603OSzXeis%2Fm5cfgyMFpZM76xo5zwEu2LTPynFzCWx3BJ6hFypuENVR9TWg7pEHlmcEYPPyCN9CvKW8XTwe%2BDOiLPY0McB0QHs1DojAqqgeX3zFMeyEcm5kaUhFvAbd%2FqxHpdg0YCjX42BqEzBBA4UdBKdFhIToSbT4PuWb9sEHA970lPonMtWZwymy6REKzUt%2FIqJ&X-Amz-Signature=6ac1c6f318b2b0edad33a4ed03119d56ab92319c3ab07cea15a04afd2ac9eab6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
