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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RRVJPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLV7yzvEG1T8eECiKGxg57IYrtPDRc%2FHqKfasDSzmwgIhAM2EPnrTi7mmUmKC9s18sS7xEwXPzVbUTn8YDwmse6QxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIEZeaQ0ckrPH3ppkq3APbWthLyCaR8o87XpWqJv9yKqjTo6u03le2Ex4pHpQ%2BxGQMh1FWXl1XuV0dG2GzmWLXU%2F8u77P2J3%2FRfX2IhIr0xoL4OUCH3bOFXEoY9VUunyzUxJ%2BGK%2BuL%2FkvctY3dL8%2BxznTRZbntokBf8r%2BLbE0cpENUafU0tWnMy3Qv4rfQXAulRnWhrCX2YtlZENlVts8BFF9qRQxlshpYnqqyFHx5PDZUooIMZddUqrS4fCdhkT2m%2Bk2lxF8OcIzWUcYG437Qsa%2BmDp0vveH5Ntois606v8j84DWq74cDX2pFtJM2My%2F2LpWqfT3zXpZWoHVwxf18zQZbIJByACKjajAV7TF2eYo7%2BMUkawwfwh2nl4u0b%2FPHD2iYyXCsmQXUkAO3pwvB5eWsQmgxQOelKB3NRxj8z3q9%2FIBI5N%2Bv7xXFccIuFtBBRSZ5BUZCBG0CK5qUnVUDDpHzpxXiv9zNAqx3B7BxkDblVDo3W6sZQouHvB%2BF4ixDnWiWU1UBp7dedBuLYE3i24hVCebmwmXeNRKHV6kGyX3YVIvaHxXUuf7mfiGdVtX7zUzR9ZnTeVquihjOVaMplFLKHlfMB22eTZHEKnuddQTnt0d0%2FGXHuhPlovUB707IgV8doLvKVDZ6ejD559m9BjqkAcJeTi4LKVClFQ2Iz8b96iKdxc2NoxvHLcQDhOW8RPtPWGKj%2Fkv%2Fr0A%2FP9DwTu8qbfh%2BOT4YBHR3WWddxAO%2F%2BrceZ%2BvU3Lgv%2B58jrJatRSmqAskrajX1QGiCVR8iQo9FA7mXhaOIk%2BM56rJPfyePDysMi4PZDciwq1LlrL%2F0x6yqRxpuiN2cOsCjSKMSDsO%2FXei3awl0jaGrKjjIfTdF0bJY8DC5&X-Amz-Signature=c522dbfb8c998f897250ac3cd502e58aaae5ae5f15e18b17330f4faf3c8fdf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RRVJPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLV7yzvEG1T8eECiKGxg57IYrtPDRc%2FHqKfasDSzmwgIhAM2EPnrTi7mmUmKC9s18sS7xEwXPzVbUTn8YDwmse6QxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIEZeaQ0ckrPH3ppkq3APbWthLyCaR8o87XpWqJv9yKqjTo6u03le2Ex4pHpQ%2BxGQMh1FWXl1XuV0dG2GzmWLXU%2F8u77P2J3%2FRfX2IhIr0xoL4OUCH3bOFXEoY9VUunyzUxJ%2BGK%2BuL%2FkvctY3dL8%2BxznTRZbntokBf8r%2BLbE0cpENUafU0tWnMy3Qv4rfQXAulRnWhrCX2YtlZENlVts8BFF9qRQxlshpYnqqyFHx5PDZUooIMZddUqrS4fCdhkT2m%2Bk2lxF8OcIzWUcYG437Qsa%2BmDp0vveH5Ntois606v8j84DWq74cDX2pFtJM2My%2F2LpWqfT3zXpZWoHVwxf18zQZbIJByACKjajAV7TF2eYo7%2BMUkawwfwh2nl4u0b%2FPHD2iYyXCsmQXUkAO3pwvB5eWsQmgxQOelKB3NRxj8z3q9%2FIBI5N%2Bv7xXFccIuFtBBRSZ5BUZCBG0CK5qUnVUDDpHzpxXiv9zNAqx3B7BxkDblVDo3W6sZQouHvB%2BF4ixDnWiWU1UBp7dedBuLYE3i24hVCebmwmXeNRKHV6kGyX3YVIvaHxXUuf7mfiGdVtX7zUzR9ZnTeVquihjOVaMplFLKHlfMB22eTZHEKnuddQTnt0d0%2FGXHuhPlovUB707IgV8doLvKVDZ6ejD559m9BjqkAcJeTi4LKVClFQ2Iz8b96iKdxc2NoxvHLcQDhOW8RPtPWGKj%2Fkv%2Fr0A%2FP9DwTu8qbfh%2BOT4YBHR3WWddxAO%2F%2BrceZ%2BvU3Lgv%2B58jrJatRSmqAskrajX1QGiCVR8iQo9FA7mXhaOIk%2BM56rJPfyePDysMi4PZDciwq1LlrL%2F0x6yqRxpuiN2cOsCjSKMSDsO%2FXei3awl0jaGrKjjIfTdF0bJY8DC5&X-Amz-Signature=511f933952db6c41eef0d1ef3c32d9e4ef32509ed9ed942e51049350de18349e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RRVJPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLV7yzvEG1T8eECiKGxg57IYrtPDRc%2FHqKfasDSzmwgIhAM2EPnrTi7mmUmKC9s18sS7xEwXPzVbUTn8YDwmse6QxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIEZeaQ0ckrPH3ppkq3APbWthLyCaR8o87XpWqJv9yKqjTo6u03le2Ex4pHpQ%2BxGQMh1FWXl1XuV0dG2GzmWLXU%2F8u77P2J3%2FRfX2IhIr0xoL4OUCH3bOFXEoY9VUunyzUxJ%2BGK%2BuL%2FkvctY3dL8%2BxznTRZbntokBf8r%2BLbE0cpENUafU0tWnMy3Qv4rfQXAulRnWhrCX2YtlZENlVts8BFF9qRQxlshpYnqqyFHx5PDZUooIMZddUqrS4fCdhkT2m%2Bk2lxF8OcIzWUcYG437Qsa%2BmDp0vveH5Ntois606v8j84DWq74cDX2pFtJM2My%2F2LpWqfT3zXpZWoHVwxf18zQZbIJByACKjajAV7TF2eYo7%2BMUkawwfwh2nl4u0b%2FPHD2iYyXCsmQXUkAO3pwvB5eWsQmgxQOelKB3NRxj8z3q9%2FIBI5N%2Bv7xXFccIuFtBBRSZ5BUZCBG0CK5qUnVUDDpHzpxXiv9zNAqx3B7BxkDblVDo3W6sZQouHvB%2BF4ixDnWiWU1UBp7dedBuLYE3i24hVCebmwmXeNRKHV6kGyX3YVIvaHxXUuf7mfiGdVtX7zUzR9ZnTeVquihjOVaMplFLKHlfMB22eTZHEKnuddQTnt0d0%2FGXHuhPlovUB707IgV8doLvKVDZ6ejD559m9BjqkAcJeTi4LKVClFQ2Iz8b96iKdxc2NoxvHLcQDhOW8RPtPWGKj%2Fkv%2Fr0A%2FP9DwTu8qbfh%2BOT4YBHR3WWddxAO%2F%2BrceZ%2BvU3Lgv%2B58jrJatRSmqAskrajX1QGiCVR8iQo9FA7mXhaOIk%2BM56rJPfyePDysMi4PZDciwq1LlrL%2F0x6yqRxpuiN2cOsCjSKMSDsO%2FXei3awl0jaGrKjjIfTdF0bJY8DC5&X-Amz-Signature=f6032bb61b4f3e9d7172c289b7577211bc155508195d89269cf718f4cdb4a7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RRVJPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLV7yzvEG1T8eECiKGxg57IYrtPDRc%2FHqKfasDSzmwgIhAM2EPnrTi7mmUmKC9s18sS7xEwXPzVbUTn8YDwmse6QxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIEZeaQ0ckrPH3ppkq3APbWthLyCaR8o87XpWqJv9yKqjTo6u03le2Ex4pHpQ%2BxGQMh1FWXl1XuV0dG2GzmWLXU%2F8u77P2J3%2FRfX2IhIr0xoL4OUCH3bOFXEoY9VUunyzUxJ%2BGK%2BuL%2FkvctY3dL8%2BxznTRZbntokBf8r%2BLbE0cpENUafU0tWnMy3Qv4rfQXAulRnWhrCX2YtlZENlVts8BFF9qRQxlshpYnqqyFHx5PDZUooIMZddUqrS4fCdhkT2m%2Bk2lxF8OcIzWUcYG437Qsa%2BmDp0vveH5Ntois606v8j84DWq74cDX2pFtJM2My%2F2LpWqfT3zXpZWoHVwxf18zQZbIJByACKjajAV7TF2eYo7%2BMUkawwfwh2nl4u0b%2FPHD2iYyXCsmQXUkAO3pwvB5eWsQmgxQOelKB3NRxj8z3q9%2FIBI5N%2Bv7xXFccIuFtBBRSZ5BUZCBG0CK5qUnVUDDpHzpxXiv9zNAqx3B7BxkDblVDo3W6sZQouHvB%2BF4ixDnWiWU1UBp7dedBuLYE3i24hVCebmwmXeNRKHV6kGyX3YVIvaHxXUuf7mfiGdVtX7zUzR9ZnTeVquihjOVaMplFLKHlfMB22eTZHEKnuddQTnt0d0%2FGXHuhPlovUB707IgV8doLvKVDZ6ejD559m9BjqkAcJeTi4LKVClFQ2Iz8b96iKdxc2NoxvHLcQDhOW8RPtPWGKj%2Fkv%2Fr0A%2FP9DwTu8qbfh%2BOT4YBHR3WWddxAO%2F%2BrceZ%2BvU3Lgv%2B58jrJatRSmqAskrajX1QGiCVR8iQo9FA7mXhaOIk%2BM56rJPfyePDysMi4PZDciwq1LlrL%2F0x6yqRxpuiN2cOsCjSKMSDsO%2FXei3awl0jaGrKjjIfTdF0bJY8DC5&X-Amz-Signature=4ade36f7079e0b3d545521f1a1aeb1b4dba1bda6f42ccd5e4199a6d496e02fab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RRVJPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLV7yzvEG1T8eECiKGxg57IYrtPDRc%2FHqKfasDSzmwgIhAM2EPnrTi7mmUmKC9s18sS7xEwXPzVbUTn8YDwmse6QxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIEZeaQ0ckrPH3ppkq3APbWthLyCaR8o87XpWqJv9yKqjTo6u03le2Ex4pHpQ%2BxGQMh1FWXl1XuV0dG2GzmWLXU%2F8u77P2J3%2FRfX2IhIr0xoL4OUCH3bOFXEoY9VUunyzUxJ%2BGK%2BuL%2FkvctY3dL8%2BxznTRZbntokBf8r%2BLbE0cpENUafU0tWnMy3Qv4rfQXAulRnWhrCX2YtlZENlVts8BFF9qRQxlshpYnqqyFHx5PDZUooIMZddUqrS4fCdhkT2m%2Bk2lxF8OcIzWUcYG437Qsa%2BmDp0vveH5Ntois606v8j84DWq74cDX2pFtJM2My%2F2LpWqfT3zXpZWoHVwxf18zQZbIJByACKjajAV7TF2eYo7%2BMUkawwfwh2nl4u0b%2FPHD2iYyXCsmQXUkAO3pwvB5eWsQmgxQOelKB3NRxj8z3q9%2FIBI5N%2Bv7xXFccIuFtBBRSZ5BUZCBG0CK5qUnVUDDpHzpxXiv9zNAqx3B7BxkDblVDo3W6sZQouHvB%2BF4ixDnWiWU1UBp7dedBuLYE3i24hVCebmwmXeNRKHV6kGyX3YVIvaHxXUuf7mfiGdVtX7zUzR9ZnTeVquihjOVaMplFLKHlfMB22eTZHEKnuddQTnt0d0%2FGXHuhPlovUB707IgV8doLvKVDZ6ejD559m9BjqkAcJeTi4LKVClFQ2Iz8b96iKdxc2NoxvHLcQDhOW8RPtPWGKj%2Fkv%2Fr0A%2FP9DwTu8qbfh%2BOT4YBHR3WWddxAO%2F%2BrceZ%2BvU3Lgv%2B58jrJatRSmqAskrajX1QGiCVR8iQo9FA7mXhaOIk%2BM56rJPfyePDysMi4PZDciwq1LlrL%2F0x6yqRxpuiN2cOsCjSKMSDsO%2FXei3awl0jaGrKjjIfTdF0bJY8DC5&X-Amz-Signature=0df5c2d8cf4e6d4f8f2a72da1da6eae488bc1dac156dd49d04afd4eaaf8a355d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RRVJPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLV7yzvEG1T8eECiKGxg57IYrtPDRc%2FHqKfasDSzmwgIhAM2EPnrTi7mmUmKC9s18sS7xEwXPzVbUTn8YDwmse6QxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIEZeaQ0ckrPH3ppkq3APbWthLyCaR8o87XpWqJv9yKqjTo6u03le2Ex4pHpQ%2BxGQMh1FWXl1XuV0dG2GzmWLXU%2F8u77P2J3%2FRfX2IhIr0xoL4OUCH3bOFXEoY9VUunyzUxJ%2BGK%2BuL%2FkvctY3dL8%2BxznTRZbntokBf8r%2BLbE0cpENUafU0tWnMy3Qv4rfQXAulRnWhrCX2YtlZENlVts8BFF9qRQxlshpYnqqyFHx5PDZUooIMZddUqrS4fCdhkT2m%2Bk2lxF8OcIzWUcYG437Qsa%2BmDp0vveH5Ntois606v8j84DWq74cDX2pFtJM2My%2F2LpWqfT3zXpZWoHVwxf18zQZbIJByACKjajAV7TF2eYo7%2BMUkawwfwh2nl4u0b%2FPHD2iYyXCsmQXUkAO3pwvB5eWsQmgxQOelKB3NRxj8z3q9%2FIBI5N%2Bv7xXFccIuFtBBRSZ5BUZCBG0CK5qUnVUDDpHzpxXiv9zNAqx3B7BxkDblVDo3W6sZQouHvB%2BF4ixDnWiWU1UBp7dedBuLYE3i24hVCebmwmXeNRKHV6kGyX3YVIvaHxXUuf7mfiGdVtX7zUzR9ZnTeVquihjOVaMplFLKHlfMB22eTZHEKnuddQTnt0d0%2FGXHuhPlovUB707IgV8doLvKVDZ6ejD559m9BjqkAcJeTi4LKVClFQ2Iz8b96iKdxc2NoxvHLcQDhOW8RPtPWGKj%2Fkv%2Fr0A%2FP9DwTu8qbfh%2BOT4YBHR3WWddxAO%2F%2BrceZ%2BvU3Lgv%2B58jrJatRSmqAskrajX1QGiCVR8iQo9FA7mXhaOIk%2BM56rJPfyePDysMi4PZDciwq1LlrL%2F0x6yqRxpuiN2cOsCjSKMSDsO%2FXei3awl0jaGrKjjIfTdF0bJY8DC5&X-Amz-Signature=81da82899b4585d0e33319573a591fb44b3e90a80af99fe5a5555443a88d456b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RRVJPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLV7yzvEG1T8eECiKGxg57IYrtPDRc%2FHqKfasDSzmwgIhAM2EPnrTi7mmUmKC9s18sS7xEwXPzVbUTn8YDwmse6QxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIEZeaQ0ckrPH3ppkq3APbWthLyCaR8o87XpWqJv9yKqjTo6u03le2Ex4pHpQ%2BxGQMh1FWXl1XuV0dG2GzmWLXU%2F8u77P2J3%2FRfX2IhIr0xoL4OUCH3bOFXEoY9VUunyzUxJ%2BGK%2BuL%2FkvctY3dL8%2BxznTRZbntokBf8r%2BLbE0cpENUafU0tWnMy3Qv4rfQXAulRnWhrCX2YtlZENlVts8BFF9qRQxlshpYnqqyFHx5PDZUooIMZddUqrS4fCdhkT2m%2Bk2lxF8OcIzWUcYG437Qsa%2BmDp0vveH5Ntois606v8j84DWq74cDX2pFtJM2My%2F2LpWqfT3zXpZWoHVwxf18zQZbIJByACKjajAV7TF2eYo7%2BMUkawwfwh2nl4u0b%2FPHD2iYyXCsmQXUkAO3pwvB5eWsQmgxQOelKB3NRxj8z3q9%2FIBI5N%2Bv7xXFccIuFtBBRSZ5BUZCBG0CK5qUnVUDDpHzpxXiv9zNAqx3B7BxkDblVDo3W6sZQouHvB%2BF4ixDnWiWU1UBp7dedBuLYE3i24hVCebmwmXeNRKHV6kGyX3YVIvaHxXUuf7mfiGdVtX7zUzR9ZnTeVquihjOVaMplFLKHlfMB22eTZHEKnuddQTnt0d0%2FGXHuhPlovUB707IgV8doLvKVDZ6ejD559m9BjqkAcJeTi4LKVClFQ2Iz8b96iKdxc2NoxvHLcQDhOW8RPtPWGKj%2Fkv%2Fr0A%2FP9DwTu8qbfh%2BOT4YBHR3WWddxAO%2F%2BrceZ%2BvU3Lgv%2B58jrJatRSmqAskrajX1QGiCVR8iQo9FA7mXhaOIk%2BM56rJPfyePDysMi4PZDciwq1LlrL%2F0x6yqRxpuiN2cOsCjSKMSDsO%2FXei3awl0jaGrKjjIfTdF0bJY8DC5&X-Amz-Signature=d5a06f847793c2565779ef53e756a7c594150d61c7359cf1a4173d7926690041&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
