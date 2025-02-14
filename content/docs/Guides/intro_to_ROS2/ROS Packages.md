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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYQXQ47%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc09JztrZ2QwEjAAZhbtwqpKyyALvfTf92T57GQxiLgIhAJcfBH5glDmdYfaIQYedtZoOFPFVB74xwRxeZ7%2FRBtUgKv8DCCQQABoMNjM3NDIzMTgzODA1IgypSyZAWbSHmmOW7Pwq3AN4Jhn%2FqTyHOkLEQOVQQ0HZiFt7Ary1cNsZbcovqTkbA5LQukZUObJ9wWx50ng3GtuRlZhXZCcp7zcLSPwzoEnJY1jaASGKvFeQaNJ%2B7f%2FKpgYmKEfji8IppOqhbIRh7fDsSLJFp%2BmLFhmO5xgiPxwYmVzmol1%2Bv2QzemjXnjiyRZgy58A5rvhygNuVhdpKwizbE28D%2F3GXDbf%2Bm1HGLsZIX0ZFeXakMVkhK%2BN5K7wqkLZZKnrtSBvzr7b5uojhn4rYo1YGVRKx%2FXj50vvL%2BYcm5hePFtc%2BVGwuqaWSW0XZc2gsAL5%2BNHUQIBfAbJ9Fyro5os3TlT9fnKFbb4z8kRTIHcEZJl8lgoQ8XbK6R%2BwpG9JSZTk0W07bjwIAm9hBg6QQzhD6C1CNVsP%2FoD9scIewpYCVJtT0BvF65dXSeb6jP4d2KkmcPFJunvKoyF5FyaUBGlqCLVCoqgvs69xlzZ%2BmUQz9ymtGjJ%2BU0TFgukGFWbbpl8G0F%2FTJVeMAU2FTSz9OWkFbTtBCODG9%2BJVUbnwy4FYLjzKFtK31vWljHGKA6RWxzM7YLHWdUHaOzp0QIoCRc7%2FsRUHOXOK7ylB3D2bCOPHmaHTSl%2FubIHuJc3g5%2F3eFexO6c22uI2RbAjDO6rq9BjqkAavyLxQid8YWXH8U%2BrQeDAMGopOQPcWmkljCRtLoYpI3YE3vAiOInkKs1H80KTXyONiCampjk%2Fq42Wc8i94C3bC6zyTleolPH25RjPMRW1cjuOCBTQp4bzr92y%2F0bBUTB9Z53segHVRmiLWSHqbZ3WstGCx5FjWTRjGt4xzWHBqqfpKG6kSLIrmKWMirYOv8Ku5Znhn3qf9IrhVd5hZ2DLI2yOhV&X-Amz-Signature=17e6a57a4cd45fe980ffbb476e0c6ecf9e938e0b4c3e7e4665a42d412a83db38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYQXQ47%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc09JztrZ2QwEjAAZhbtwqpKyyALvfTf92T57GQxiLgIhAJcfBH5glDmdYfaIQYedtZoOFPFVB74xwRxeZ7%2FRBtUgKv8DCCQQABoMNjM3NDIzMTgzODA1IgypSyZAWbSHmmOW7Pwq3AN4Jhn%2FqTyHOkLEQOVQQ0HZiFt7Ary1cNsZbcovqTkbA5LQukZUObJ9wWx50ng3GtuRlZhXZCcp7zcLSPwzoEnJY1jaASGKvFeQaNJ%2B7f%2FKpgYmKEfji8IppOqhbIRh7fDsSLJFp%2BmLFhmO5xgiPxwYmVzmol1%2Bv2QzemjXnjiyRZgy58A5rvhygNuVhdpKwizbE28D%2F3GXDbf%2Bm1HGLsZIX0ZFeXakMVkhK%2BN5K7wqkLZZKnrtSBvzr7b5uojhn4rYo1YGVRKx%2FXj50vvL%2BYcm5hePFtc%2BVGwuqaWSW0XZc2gsAL5%2BNHUQIBfAbJ9Fyro5os3TlT9fnKFbb4z8kRTIHcEZJl8lgoQ8XbK6R%2BwpG9JSZTk0W07bjwIAm9hBg6QQzhD6C1CNVsP%2FoD9scIewpYCVJtT0BvF65dXSeb6jP4d2KkmcPFJunvKoyF5FyaUBGlqCLVCoqgvs69xlzZ%2BmUQz9ymtGjJ%2BU0TFgukGFWbbpl8G0F%2FTJVeMAU2FTSz9OWkFbTtBCODG9%2BJVUbnwy4FYLjzKFtK31vWljHGKA6RWxzM7YLHWdUHaOzp0QIoCRc7%2FsRUHOXOK7ylB3D2bCOPHmaHTSl%2FubIHuJc3g5%2F3eFexO6c22uI2RbAjDO6rq9BjqkAavyLxQid8YWXH8U%2BrQeDAMGopOQPcWmkljCRtLoYpI3YE3vAiOInkKs1H80KTXyONiCampjk%2Fq42Wc8i94C3bC6zyTleolPH25RjPMRW1cjuOCBTQp4bzr92y%2F0bBUTB9Z53segHVRmiLWSHqbZ3WstGCx5FjWTRjGt4xzWHBqqfpKG6kSLIrmKWMirYOv8Ku5Znhn3qf9IrhVd5hZ2DLI2yOhV&X-Amz-Signature=79d998e73217ebef5649cfc79ba06a5386ba86dcd3d14da041ab0bc3d53f3467&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYQXQ47%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc09JztrZ2QwEjAAZhbtwqpKyyALvfTf92T57GQxiLgIhAJcfBH5glDmdYfaIQYedtZoOFPFVB74xwRxeZ7%2FRBtUgKv8DCCQQABoMNjM3NDIzMTgzODA1IgypSyZAWbSHmmOW7Pwq3AN4Jhn%2FqTyHOkLEQOVQQ0HZiFt7Ary1cNsZbcovqTkbA5LQukZUObJ9wWx50ng3GtuRlZhXZCcp7zcLSPwzoEnJY1jaASGKvFeQaNJ%2B7f%2FKpgYmKEfji8IppOqhbIRh7fDsSLJFp%2BmLFhmO5xgiPxwYmVzmol1%2Bv2QzemjXnjiyRZgy58A5rvhygNuVhdpKwizbE28D%2F3GXDbf%2Bm1HGLsZIX0ZFeXakMVkhK%2BN5K7wqkLZZKnrtSBvzr7b5uojhn4rYo1YGVRKx%2FXj50vvL%2BYcm5hePFtc%2BVGwuqaWSW0XZc2gsAL5%2BNHUQIBfAbJ9Fyro5os3TlT9fnKFbb4z8kRTIHcEZJl8lgoQ8XbK6R%2BwpG9JSZTk0W07bjwIAm9hBg6QQzhD6C1CNVsP%2FoD9scIewpYCVJtT0BvF65dXSeb6jP4d2KkmcPFJunvKoyF5FyaUBGlqCLVCoqgvs69xlzZ%2BmUQz9ymtGjJ%2BU0TFgukGFWbbpl8G0F%2FTJVeMAU2FTSz9OWkFbTtBCODG9%2BJVUbnwy4FYLjzKFtK31vWljHGKA6RWxzM7YLHWdUHaOzp0QIoCRc7%2FsRUHOXOK7ylB3D2bCOPHmaHTSl%2FubIHuJc3g5%2F3eFexO6c22uI2RbAjDO6rq9BjqkAavyLxQid8YWXH8U%2BrQeDAMGopOQPcWmkljCRtLoYpI3YE3vAiOInkKs1H80KTXyONiCampjk%2Fq42Wc8i94C3bC6zyTleolPH25RjPMRW1cjuOCBTQp4bzr92y%2F0bBUTB9Z53segHVRmiLWSHqbZ3WstGCx5FjWTRjGt4xzWHBqqfpKG6kSLIrmKWMirYOv8Ku5Znhn3qf9IrhVd5hZ2DLI2yOhV&X-Amz-Signature=84cfa064a586e42db9e78801a2f7fce4a988603a7b390c3647fcd9d2bd3d1068&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYQXQ47%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc09JztrZ2QwEjAAZhbtwqpKyyALvfTf92T57GQxiLgIhAJcfBH5glDmdYfaIQYedtZoOFPFVB74xwRxeZ7%2FRBtUgKv8DCCQQABoMNjM3NDIzMTgzODA1IgypSyZAWbSHmmOW7Pwq3AN4Jhn%2FqTyHOkLEQOVQQ0HZiFt7Ary1cNsZbcovqTkbA5LQukZUObJ9wWx50ng3GtuRlZhXZCcp7zcLSPwzoEnJY1jaASGKvFeQaNJ%2B7f%2FKpgYmKEfji8IppOqhbIRh7fDsSLJFp%2BmLFhmO5xgiPxwYmVzmol1%2Bv2QzemjXnjiyRZgy58A5rvhygNuVhdpKwizbE28D%2F3GXDbf%2Bm1HGLsZIX0ZFeXakMVkhK%2BN5K7wqkLZZKnrtSBvzr7b5uojhn4rYo1YGVRKx%2FXj50vvL%2BYcm5hePFtc%2BVGwuqaWSW0XZc2gsAL5%2BNHUQIBfAbJ9Fyro5os3TlT9fnKFbb4z8kRTIHcEZJl8lgoQ8XbK6R%2BwpG9JSZTk0W07bjwIAm9hBg6QQzhD6C1CNVsP%2FoD9scIewpYCVJtT0BvF65dXSeb6jP4d2KkmcPFJunvKoyF5FyaUBGlqCLVCoqgvs69xlzZ%2BmUQz9ymtGjJ%2BU0TFgukGFWbbpl8G0F%2FTJVeMAU2FTSz9OWkFbTtBCODG9%2BJVUbnwy4FYLjzKFtK31vWljHGKA6RWxzM7YLHWdUHaOzp0QIoCRc7%2FsRUHOXOK7ylB3D2bCOPHmaHTSl%2FubIHuJc3g5%2F3eFexO6c22uI2RbAjDO6rq9BjqkAavyLxQid8YWXH8U%2BrQeDAMGopOQPcWmkljCRtLoYpI3YE3vAiOInkKs1H80KTXyONiCampjk%2Fq42Wc8i94C3bC6zyTleolPH25RjPMRW1cjuOCBTQp4bzr92y%2F0bBUTB9Z53segHVRmiLWSHqbZ3WstGCx5FjWTRjGt4xzWHBqqfpKG6kSLIrmKWMirYOv8Ku5Znhn3qf9IrhVd5hZ2DLI2yOhV&X-Amz-Signature=8ac8ca7a1c0af538f5067b03bb9ace81077fd74b49102987461320d6c4f95568&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYQXQ47%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc09JztrZ2QwEjAAZhbtwqpKyyALvfTf92T57GQxiLgIhAJcfBH5glDmdYfaIQYedtZoOFPFVB74xwRxeZ7%2FRBtUgKv8DCCQQABoMNjM3NDIzMTgzODA1IgypSyZAWbSHmmOW7Pwq3AN4Jhn%2FqTyHOkLEQOVQQ0HZiFt7Ary1cNsZbcovqTkbA5LQukZUObJ9wWx50ng3GtuRlZhXZCcp7zcLSPwzoEnJY1jaASGKvFeQaNJ%2B7f%2FKpgYmKEfji8IppOqhbIRh7fDsSLJFp%2BmLFhmO5xgiPxwYmVzmol1%2Bv2QzemjXnjiyRZgy58A5rvhygNuVhdpKwizbE28D%2F3GXDbf%2Bm1HGLsZIX0ZFeXakMVkhK%2BN5K7wqkLZZKnrtSBvzr7b5uojhn4rYo1YGVRKx%2FXj50vvL%2BYcm5hePFtc%2BVGwuqaWSW0XZc2gsAL5%2BNHUQIBfAbJ9Fyro5os3TlT9fnKFbb4z8kRTIHcEZJl8lgoQ8XbK6R%2BwpG9JSZTk0W07bjwIAm9hBg6QQzhD6C1CNVsP%2FoD9scIewpYCVJtT0BvF65dXSeb6jP4d2KkmcPFJunvKoyF5FyaUBGlqCLVCoqgvs69xlzZ%2BmUQz9ymtGjJ%2BU0TFgukGFWbbpl8G0F%2FTJVeMAU2FTSz9OWkFbTtBCODG9%2BJVUbnwy4FYLjzKFtK31vWljHGKA6RWxzM7YLHWdUHaOzp0QIoCRc7%2FsRUHOXOK7ylB3D2bCOPHmaHTSl%2FubIHuJc3g5%2F3eFexO6c22uI2RbAjDO6rq9BjqkAavyLxQid8YWXH8U%2BrQeDAMGopOQPcWmkljCRtLoYpI3YE3vAiOInkKs1H80KTXyONiCampjk%2Fq42Wc8i94C3bC6zyTleolPH25RjPMRW1cjuOCBTQp4bzr92y%2F0bBUTB9Z53segHVRmiLWSHqbZ3WstGCx5FjWTRjGt4xzWHBqqfpKG6kSLIrmKWMirYOv8Ku5Znhn3qf9IrhVd5hZ2DLI2yOhV&X-Amz-Signature=a5db159fd95944d090316473d56f6bc0f6614ddbe7c37f72bcf7fc2eb740fae6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYQXQ47%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc09JztrZ2QwEjAAZhbtwqpKyyALvfTf92T57GQxiLgIhAJcfBH5glDmdYfaIQYedtZoOFPFVB74xwRxeZ7%2FRBtUgKv8DCCQQABoMNjM3NDIzMTgzODA1IgypSyZAWbSHmmOW7Pwq3AN4Jhn%2FqTyHOkLEQOVQQ0HZiFt7Ary1cNsZbcovqTkbA5LQukZUObJ9wWx50ng3GtuRlZhXZCcp7zcLSPwzoEnJY1jaASGKvFeQaNJ%2B7f%2FKpgYmKEfji8IppOqhbIRh7fDsSLJFp%2BmLFhmO5xgiPxwYmVzmol1%2Bv2QzemjXnjiyRZgy58A5rvhygNuVhdpKwizbE28D%2F3GXDbf%2Bm1HGLsZIX0ZFeXakMVkhK%2BN5K7wqkLZZKnrtSBvzr7b5uojhn4rYo1YGVRKx%2FXj50vvL%2BYcm5hePFtc%2BVGwuqaWSW0XZc2gsAL5%2BNHUQIBfAbJ9Fyro5os3TlT9fnKFbb4z8kRTIHcEZJl8lgoQ8XbK6R%2BwpG9JSZTk0W07bjwIAm9hBg6QQzhD6C1CNVsP%2FoD9scIewpYCVJtT0BvF65dXSeb6jP4d2KkmcPFJunvKoyF5FyaUBGlqCLVCoqgvs69xlzZ%2BmUQz9ymtGjJ%2BU0TFgukGFWbbpl8G0F%2FTJVeMAU2FTSz9OWkFbTtBCODG9%2BJVUbnwy4FYLjzKFtK31vWljHGKA6RWxzM7YLHWdUHaOzp0QIoCRc7%2FsRUHOXOK7ylB3D2bCOPHmaHTSl%2FubIHuJc3g5%2F3eFexO6c22uI2RbAjDO6rq9BjqkAavyLxQid8YWXH8U%2BrQeDAMGopOQPcWmkljCRtLoYpI3YE3vAiOInkKs1H80KTXyONiCampjk%2Fq42Wc8i94C3bC6zyTleolPH25RjPMRW1cjuOCBTQp4bzr92y%2F0bBUTB9Z53segHVRmiLWSHqbZ3WstGCx5FjWTRjGt4xzWHBqqfpKG6kSLIrmKWMirYOv8Ku5Znhn3qf9IrhVd5hZ2DLI2yOhV&X-Amz-Signature=1628e39b456fb6c12604889cccfaa6530f98bcc43d23c15c1b189783b0798215&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYQXQ47%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc09JztrZ2QwEjAAZhbtwqpKyyALvfTf92T57GQxiLgIhAJcfBH5glDmdYfaIQYedtZoOFPFVB74xwRxeZ7%2FRBtUgKv8DCCQQABoMNjM3NDIzMTgzODA1IgypSyZAWbSHmmOW7Pwq3AN4Jhn%2FqTyHOkLEQOVQQ0HZiFt7Ary1cNsZbcovqTkbA5LQukZUObJ9wWx50ng3GtuRlZhXZCcp7zcLSPwzoEnJY1jaASGKvFeQaNJ%2B7f%2FKpgYmKEfji8IppOqhbIRh7fDsSLJFp%2BmLFhmO5xgiPxwYmVzmol1%2Bv2QzemjXnjiyRZgy58A5rvhygNuVhdpKwizbE28D%2F3GXDbf%2Bm1HGLsZIX0ZFeXakMVkhK%2BN5K7wqkLZZKnrtSBvzr7b5uojhn4rYo1YGVRKx%2FXj50vvL%2BYcm5hePFtc%2BVGwuqaWSW0XZc2gsAL5%2BNHUQIBfAbJ9Fyro5os3TlT9fnKFbb4z8kRTIHcEZJl8lgoQ8XbK6R%2BwpG9JSZTk0W07bjwIAm9hBg6QQzhD6C1CNVsP%2FoD9scIewpYCVJtT0BvF65dXSeb6jP4d2KkmcPFJunvKoyF5FyaUBGlqCLVCoqgvs69xlzZ%2BmUQz9ymtGjJ%2BU0TFgukGFWbbpl8G0F%2FTJVeMAU2FTSz9OWkFbTtBCODG9%2BJVUbnwy4FYLjzKFtK31vWljHGKA6RWxzM7YLHWdUHaOzp0QIoCRc7%2FsRUHOXOK7ylB3D2bCOPHmaHTSl%2FubIHuJc3g5%2F3eFexO6c22uI2RbAjDO6rq9BjqkAavyLxQid8YWXH8U%2BrQeDAMGopOQPcWmkljCRtLoYpI3YE3vAiOInkKs1H80KTXyONiCampjk%2Fq42Wc8i94C3bC6zyTleolPH25RjPMRW1cjuOCBTQp4bzr92y%2F0bBUTB9Z53segHVRmiLWSHqbZ3WstGCx5FjWTRjGt4xzWHBqqfpKG6kSLIrmKWMirYOv8Ku5Znhn3qf9IrhVd5hZ2DLI2yOhV&X-Amz-Signature=19a0e646193a421ff8ed96ba1231906bb68d6ad3854097f5908e8f83bb9c3cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
