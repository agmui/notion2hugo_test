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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQZVUV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA5k9v1qZMVHz6jSRHe0%2Fntm6KYSm5peBq7aS0JRawFIAiEAniRmpFhvuv48bKYdNyIXF%2FNhbI2TLShZga2sPLUoA%2B4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetJNNltH8DdYy5tircA6%2Fp1laZY9h5evVOncqSCvRSECcXjcP43puetNpNi3bt%2BIRlXmxaCINgwAIuul%2Fl0uXIbW3aGZvel2ESbrpgSR3yVtrk%2F2Im0sv9lqvfX74NHqlpG3wTbpupS2Zuc8MCDUu5AutLCuFspMafqHdIIJ01xqLfDS9wedP3dkpvhNhsn2i2tI%2B97Dl84MNAe%2FuHnvlMs3%2BcYd7WNeBlB2gKSG7YKd7JB4YAweYpyQrImxbnKxNdZWkq1p2LVEOc3qbpcOKSChTzNZECjD%2Bw%2BAehflBoQ8j%2FEPK4XWWifFWAhLC4k%2FLdH9RBRgUcQLAVSG3Q5PiDpNoaVnEI%2F6X2IdwZ%2FtN8Rd8DcfyXDIM74db3TwAdtbd4F%2BLXhSDLVn47B9L3ANPtnJWe9pgT%2BGveNwngtPXtxmcN4Aad6DioNSjkkGt6acgVsZo0BA5cEbZyfQzTIQfn8qrgfk6UUFcIVMx4UbbidhD6Fh8RredIinLaGqt%2FWc%2F%2BZA%2BOTM11yq4rDHY8782veMUZ2gh7gH9RsfFAtVHzVbldm9iAjHYrVVfaNoeUYqvHVTd8koWLyo44DCaNRRnzZOfta6ZdofA2WE4nWCmv6k%2BMW2EWqDCPqbu1geHxfExMkDIDUSyZ6D65MKGYn70GOqUBKzjL0mNDWMSACNEUMRdVLlDK0b4WVJilBCbQ8t8%2FFG7ag1TPk8YLIL9zSTPhLL5MxXOx7J3KjqxDdMaPXpAPqIsLMD3lrdx4j5JEyfNPnFK0iT2KNKDpYGHLGLuTYwrqCMDkS9V%2B0xOp46UPvjKothG4BT1POdFTbm%2BHZAWKj5gZhT8I%2FppvDvajfPSiD%2BKW4vjZe%2Faj15C8UDF2Ri1Dj8NjmKH1&X-Amz-Signature=71565df843c37a9f3b9535aa9ce50f13482944f4a7cb2aeb302c0f02fe14d366&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQZVUV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA5k9v1qZMVHz6jSRHe0%2Fntm6KYSm5peBq7aS0JRawFIAiEAniRmpFhvuv48bKYdNyIXF%2FNhbI2TLShZga2sPLUoA%2B4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetJNNltH8DdYy5tircA6%2Fp1laZY9h5evVOncqSCvRSECcXjcP43puetNpNi3bt%2BIRlXmxaCINgwAIuul%2Fl0uXIbW3aGZvel2ESbrpgSR3yVtrk%2F2Im0sv9lqvfX74NHqlpG3wTbpupS2Zuc8MCDUu5AutLCuFspMafqHdIIJ01xqLfDS9wedP3dkpvhNhsn2i2tI%2B97Dl84MNAe%2FuHnvlMs3%2BcYd7WNeBlB2gKSG7YKd7JB4YAweYpyQrImxbnKxNdZWkq1p2LVEOc3qbpcOKSChTzNZECjD%2Bw%2BAehflBoQ8j%2FEPK4XWWifFWAhLC4k%2FLdH9RBRgUcQLAVSG3Q5PiDpNoaVnEI%2F6X2IdwZ%2FtN8Rd8DcfyXDIM74db3TwAdtbd4F%2BLXhSDLVn47B9L3ANPtnJWe9pgT%2BGveNwngtPXtxmcN4Aad6DioNSjkkGt6acgVsZo0BA5cEbZyfQzTIQfn8qrgfk6UUFcIVMx4UbbidhD6Fh8RredIinLaGqt%2FWc%2F%2BZA%2BOTM11yq4rDHY8782veMUZ2gh7gH9RsfFAtVHzVbldm9iAjHYrVVfaNoeUYqvHVTd8koWLyo44DCaNRRnzZOfta6ZdofA2WE4nWCmv6k%2BMW2EWqDCPqbu1geHxfExMkDIDUSyZ6D65MKGYn70GOqUBKzjL0mNDWMSACNEUMRdVLlDK0b4WVJilBCbQ8t8%2FFG7ag1TPk8YLIL9zSTPhLL5MxXOx7J3KjqxDdMaPXpAPqIsLMD3lrdx4j5JEyfNPnFK0iT2KNKDpYGHLGLuTYwrqCMDkS9V%2B0xOp46UPvjKothG4BT1POdFTbm%2BHZAWKj5gZhT8I%2FppvDvajfPSiD%2BKW4vjZe%2Faj15C8UDF2Ri1Dj8NjmKH1&X-Amz-Signature=6a5b14823510198a6fc92187597671c5fc10b8b3af7a2da09ebd21fd013775fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQZVUV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA5k9v1qZMVHz6jSRHe0%2Fntm6KYSm5peBq7aS0JRawFIAiEAniRmpFhvuv48bKYdNyIXF%2FNhbI2TLShZga2sPLUoA%2B4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetJNNltH8DdYy5tircA6%2Fp1laZY9h5evVOncqSCvRSECcXjcP43puetNpNi3bt%2BIRlXmxaCINgwAIuul%2Fl0uXIbW3aGZvel2ESbrpgSR3yVtrk%2F2Im0sv9lqvfX74NHqlpG3wTbpupS2Zuc8MCDUu5AutLCuFspMafqHdIIJ01xqLfDS9wedP3dkpvhNhsn2i2tI%2B97Dl84MNAe%2FuHnvlMs3%2BcYd7WNeBlB2gKSG7YKd7JB4YAweYpyQrImxbnKxNdZWkq1p2LVEOc3qbpcOKSChTzNZECjD%2Bw%2BAehflBoQ8j%2FEPK4XWWifFWAhLC4k%2FLdH9RBRgUcQLAVSG3Q5PiDpNoaVnEI%2F6X2IdwZ%2FtN8Rd8DcfyXDIM74db3TwAdtbd4F%2BLXhSDLVn47B9L3ANPtnJWe9pgT%2BGveNwngtPXtxmcN4Aad6DioNSjkkGt6acgVsZo0BA5cEbZyfQzTIQfn8qrgfk6UUFcIVMx4UbbidhD6Fh8RredIinLaGqt%2FWc%2F%2BZA%2BOTM11yq4rDHY8782veMUZ2gh7gH9RsfFAtVHzVbldm9iAjHYrVVfaNoeUYqvHVTd8koWLyo44DCaNRRnzZOfta6ZdofA2WE4nWCmv6k%2BMW2EWqDCPqbu1geHxfExMkDIDUSyZ6D65MKGYn70GOqUBKzjL0mNDWMSACNEUMRdVLlDK0b4WVJilBCbQ8t8%2FFG7ag1TPk8YLIL9zSTPhLL5MxXOx7J3KjqxDdMaPXpAPqIsLMD3lrdx4j5JEyfNPnFK0iT2KNKDpYGHLGLuTYwrqCMDkS9V%2B0xOp46UPvjKothG4BT1POdFTbm%2BHZAWKj5gZhT8I%2FppvDvajfPSiD%2BKW4vjZe%2Faj15C8UDF2Ri1Dj8NjmKH1&X-Amz-Signature=adc6aa90affa7982b2710a377a7ba0ffb33c4fb554e28333b6d504e0de33391e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQZVUV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA5k9v1qZMVHz6jSRHe0%2Fntm6KYSm5peBq7aS0JRawFIAiEAniRmpFhvuv48bKYdNyIXF%2FNhbI2TLShZga2sPLUoA%2B4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetJNNltH8DdYy5tircA6%2Fp1laZY9h5evVOncqSCvRSECcXjcP43puetNpNi3bt%2BIRlXmxaCINgwAIuul%2Fl0uXIbW3aGZvel2ESbrpgSR3yVtrk%2F2Im0sv9lqvfX74NHqlpG3wTbpupS2Zuc8MCDUu5AutLCuFspMafqHdIIJ01xqLfDS9wedP3dkpvhNhsn2i2tI%2B97Dl84MNAe%2FuHnvlMs3%2BcYd7WNeBlB2gKSG7YKd7JB4YAweYpyQrImxbnKxNdZWkq1p2LVEOc3qbpcOKSChTzNZECjD%2Bw%2BAehflBoQ8j%2FEPK4XWWifFWAhLC4k%2FLdH9RBRgUcQLAVSG3Q5PiDpNoaVnEI%2F6X2IdwZ%2FtN8Rd8DcfyXDIM74db3TwAdtbd4F%2BLXhSDLVn47B9L3ANPtnJWe9pgT%2BGveNwngtPXtxmcN4Aad6DioNSjkkGt6acgVsZo0BA5cEbZyfQzTIQfn8qrgfk6UUFcIVMx4UbbidhD6Fh8RredIinLaGqt%2FWc%2F%2BZA%2BOTM11yq4rDHY8782veMUZ2gh7gH9RsfFAtVHzVbldm9iAjHYrVVfaNoeUYqvHVTd8koWLyo44DCaNRRnzZOfta6ZdofA2WE4nWCmv6k%2BMW2EWqDCPqbu1geHxfExMkDIDUSyZ6D65MKGYn70GOqUBKzjL0mNDWMSACNEUMRdVLlDK0b4WVJilBCbQ8t8%2FFG7ag1TPk8YLIL9zSTPhLL5MxXOx7J3KjqxDdMaPXpAPqIsLMD3lrdx4j5JEyfNPnFK0iT2KNKDpYGHLGLuTYwrqCMDkS9V%2B0xOp46UPvjKothG4BT1POdFTbm%2BHZAWKj5gZhT8I%2FppvDvajfPSiD%2BKW4vjZe%2Faj15C8UDF2Ri1Dj8NjmKH1&X-Amz-Signature=7882fc3adaa655c882fe3a53ab89df682ee6ffc4cf7afdafa8f7facd19414c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQZVUV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA5k9v1qZMVHz6jSRHe0%2Fntm6KYSm5peBq7aS0JRawFIAiEAniRmpFhvuv48bKYdNyIXF%2FNhbI2TLShZga2sPLUoA%2B4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetJNNltH8DdYy5tircA6%2Fp1laZY9h5evVOncqSCvRSECcXjcP43puetNpNi3bt%2BIRlXmxaCINgwAIuul%2Fl0uXIbW3aGZvel2ESbrpgSR3yVtrk%2F2Im0sv9lqvfX74NHqlpG3wTbpupS2Zuc8MCDUu5AutLCuFspMafqHdIIJ01xqLfDS9wedP3dkpvhNhsn2i2tI%2B97Dl84MNAe%2FuHnvlMs3%2BcYd7WNeBlB2gKSG7YKd7JB4YAweYpyQrImxbnKxNdZWkq1p2LVEOc3qbpcOKSChTzNZECjD%2Bw%2BAehflBoQ8j%2FEPK4XWWifFWAhLC4k%2FLdH9RBRgUcQLAVSG3Q5PiDpNoaVnEI%2F6X2IdwZ%2FtN8Rd8DcfyXDIM74db3TwAdtbd4F%2BLXhSDLVn47B9L3ANPtnJWe9pgT%2BGveNwngtPXtxmcN4Aad6DioNSjkkGt6acgVsZo0BA5cEbZyfQzTIQfn8qrgfk6UUFcIVMx4UbbidhD6Fh8RredIinLaGqt%2FWc%2F%2BZA%2BOTM11yq4rDHY8782veMUZ2gh7gH9RsfFAtVHzVbldm9iAjHYrVVfaNoeUYqvHVTd8koWLyo44DCaNRRnzZOfta6ZdofA2WE4nWCmv6k%2BMW2EWqDCPqbu1geHxfExMkDIDUSyZ6D65MKGYn70GOqUBKzjL0mNDWMSACNEUMRdVLlDK0b4WVJilBCbQ8t8%2FFG7ag1TPk8YLIL9zSTPhLL5MxXOx7J3KjqxDdMaPXpAPqIsLMD3lrdx4j5JEyfNPnFK0iT2KNKDpYGHLGLuTYwrqCMDkS9V%2B0xOp46UPvjKothG4BT1POdFTbm%2BHZAWKj5gZhT8I%2FppvDvajfPSiD%2BKW4vjZe%2Faj15C8UDF2Ri1Dj8NjmKH1&X-Amz-Signature=5299f20d83a65d8f97f3492450e41e8bb1dba7a59f9406b74c88ffe11acf57ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQZVUV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA5k9v1qZMVHz6jSRHe0%2Fntm6KYSm5peBq7aS0JRawFIAiEAniRmpFhvuv48bKYdNyIXF%2FNhbI2TLShZga2sPLUoA%2B4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetJNNltH8DdYy5tircA6%2Fp1laZY9h5evVOncqSCvRSECcXjcP43puetNpNi3bt%2BIRlXmxaCINgwAIuul%2Fl0uXIbW3aGZvel2ESbrpgSR3yVtrk%2F2Im0sv9lqvfX74NHqlpG3wTbpupS2Zuc8MCDUu5AutLCuFspMafqHdIIJ01xqLfDS9wedP3dkpvhNhsn2i2tI%2B97Dl84MNAe%2FuHnvlMs3%2BcYd7WNeBlB2gKSG7YKd7JB4YAweYpyQrImxbnKxNdZWkq1p2LVEOc3qbpcOKSChTzNZECjD%2Bw%2BAehflBoQ8j%2FEPK4XWWifFWAhLC4k%2FLdH9RBRgUcQLAVSG3Q5PiDpNoaVnEI%2F6X2IdwZ%2FtN8Rd8DcfyXDIM74db3TwAdtbd4F%2BLXhSDLVn47B9L3ANPtnJWe9pgT%2BGveNwngtPXtxmcN4Aad6DioNSjkkGt6acgVsZo0BA5cEbZyfQzTIQfn8qrgfk6UUFcIVMx4UbbidhD6Fh8RredIinLaGqt%2FWc%2F%2BZA%2BOTM11yq4rDHY8782veMUZ2gh7gH9RsfFAtVHzVbldm9iAjHYrVVfaNoeUYqvHVTd8koWLyo44DCaNRRnzZOfta6ZdofA2WE4nWCmv6k%2BMW2EWqDCPqbu1geHxfExMkDIDUSyZ6D65MKGYn70GOqUBKzjL0mNDWMSACNEUMRdVLlDK0b4WVJilBCbQ8t8%2FFG7ag1TPk8YLIL9zSTPhLL5MxXOx7J3KjqxDdMaPXpAPqIsLMD3lrdx4j5JEyfNPnFK0iT2KNKDpYGHLGLuTYwrqCMDkS9V%2B0xOp46UPvjKothG4BT1POdFTbm%2BHZAWKj5gZhT8I%2FppvDvajfPSiD%2BKW4vjZe%2Faj15C8UDF2Ri1Dj8NjmKH1&X-Amz-Signature=797bc760e9ab05c44f6b2567298d3313d781ed2517b3c7a78cd151ca68e588c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPQZVUV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA5k9v1qZMVHz6jSRHe0%2Fntm6KYSm5peBq7aS0JRawFIAiEAniRmpFhvuv48bKYdNyIXF%2FNhbI2TLShZga2sPLUoA%2B4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetJNNltH8DdYy5tircA6%2Fp1laZY9h5evVOncqSCvRSECcXjcP43puetNpNi3bt%2BIRlXmxaCINgwAIuul%2Fl0uXIbW3aGZvel2ESbrpgSR3yVtrk%2F2Im0sv9lqvfX74NHqlpG3wTbpupS2Zuc8MCDUu5AutLCuFspMafqHdIIJ01xqLfDS9wedP3dkpvhNhsn2i2tI%2B97Dl84MNAe%2FuHnvlMs3%2BcYd7WNeBlB2gKSG7YKd7JB4YAweYpyQrImxbnKxNdZWkq1p2LVEOc3qbpcOKSChTzNZECjD%2Bw%2BAehflBoQ8j%2FEPK4XWWifFWAhLC4k%2FLdH9RBRgUcQLAVSG3Q5PiDpNoaVnEI%2F6X2IdwZ%2FtN8Rd8DcfyXDIM74db3TwAdtbd4F%2BLXhSDLVn47B9L3ANPtnJWe9pgT%2BGveNwngtPXtxmcN4Aad6DioNSjkkGt6acgVsZo0BA5cEbZyfQzTIQfn8qrgfk6UUFcIVMx4UbbidhD6Fh8RredIinLaGqt%2FWc%2F%2BZA%2BOTM11yq4rDHY8782veMUZ2gh7gH9RsfFAtVHzVbldm9iAjHYrVVfaNoeUYqvHVTd8koWLyo44DCaNRRnzZOfta6ZdofA2WE4nWCmv6k%2BMW2EWqDCPqbu1geHxfExMkDIDUSyZ6D65MKGYn70GOqUBKzjL0mNDWMSACNEUMRdVLlDK0b4WVJilBCbQ8t8%2FFG7ag1TPk8YLIL9zSTPhLL5MxXOx7J3KjqxDdMaPXpAPqIsLMD3lrdx4j5JEyfNPnFK0iT2KNKDpYGHLGLuTYwrqCMDkS9V%2B0xOp46UPvjKothG4BT1POdFTbm%2BHZAWKj5gZhT8I%2FppvDvajfPSiD%2BKW4vjZe%2Faj15C8UDF2Ri1Dj8NjmKH1&X-Amz-Signature=af18c3fa7102d31a44efe33d951a337feb677769cc8504f6aa8c478354ee8aad&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
