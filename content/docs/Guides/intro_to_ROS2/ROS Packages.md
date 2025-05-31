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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7LI2D2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXiNC7Y%2BvbHed1bC%2F34LpxTgV5%2ByvwPCnePy6jarXIQIhAJXwbM7FdDftEOWFdKUfnE4lf%2BcAAoTf4TmiKfh0vKq0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz92%2BwS3yZ8PWj%2BoqYq3ANfY6YGLEAe5TAHzo070Yjhr3mSUwVLhyoooJsNB%2BI43m8Wjy4RzaymzqzBUK0iCPkqrMdgCBRJiP6HUkAIo53cPs%2Bceq3vcdNR90ia0JROMg6HVio4a5XoGmlF9iXsRzV%2FeyEFDIpHzT3BbiKnc8BEQHTjS8iEkuxaJNwAUDEPjopoYa%2Fy80oHnfSDTlwhUJ6uFNeVP7C9Qa%2BP7ztqmfd3yNgKh6o54KKECvS8xYNKMgk4VrGpMKs8qC4wuarKixicrzc4iVo3eORmMqMQSX9pWI6e8HkytcXOLs2a%2F5QUX964Nv4OSlu%2Fe%2BVq%2BD%2BdgLkZg4ow18QONCtOO%2FSoUcgxRW11GETcJg824QZvGNSy1ckREEym8t1bJzlMUQ5rmsCRBEBliQskB%2FzurYTgmxPOcaFn6tmHab8eo%2FDGR2XxCmdzEUPfX89IQuNlUEPzEoHnb9CV6EhNxXuinCQ8Tv2BlfuipMTigmbL4KDfC69ZGNx0FftMJcYVm1nXMDvfgTMTdKhur%2FWVHEzMTpwHkBVG9c6gOMyswXb7sKTJQaWtBcQorjIJ66i7QQcBuYKZGu1kX3PNVNVESGgzXjry3iWxOFmXCxhddvHb5ey5HYIAGbDeUbvuuTIyn2djXjC9qezBBjqkAe0kSpuF8wYG7D%2BELCzSnEyFrONmTf5eFX%2BtxWaIibLMEoXK6JeyKJaO6NL%2Ba5itHtWqatDs89P7a2F5mjfzhL8snvgUfu%2BZqJTDLrjRafWDiuqxS0BbmfgGUgOKJM3oO1aPhqOS5jrfrHnchCmrRsoWVcvOthFdnSYGNT2tvQrs8dGODsR60vPld1qTMM0PFq5SpHwcgv7foD5qTW5k7cr3PFve&X-Amz-Signature=308a5d1825525a3c3b5f31774f9380b6270ba6eb8f59918f39c3e05837d144ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7LI2D2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXiNC7Y%2BvbHed1bC%2F34LpxTgV5%2ByvwPCnePy6jarXIQIhAJXwbM7FdDftEOWFdKUfnE4lf%2BcAAoTf4TmiKfh0vKq0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz92%2BwS3yZ8PWj%2BoqYq3ANfY6YGLEAe5TAHzo070Yjhr3mSUwVLhyoooJsNB%2BI43m8Wjy4RzaymzqzBUK0iCPkqrMdgCBRJiP6HUkAIo53cPs%2Bceq3vcdNR90ia0JROMg6HVio4a5XoGmlF9iXsRzV%2FeyEFDIpHzT3BbiKnc8BEQHTjS8iEkuxaJNwAUDEPjopoYa%2Fy80oHnfSDTlwhUJ6uFNeVP7C9Qa%2BP7ztqmfd3yNgKh6o54KKECvS8xYNKMgk4VrGpMKs8qC4wuarKixicrzc4iVo3eORmMqMQSX9pWI6e8HkytcXOLs2a%2F5QUX964Nv4OSlu%2Fe%2BVq%2BD%2BdgLkZg4ow18QONCtOO%2FSoUcgxRW11GETcJg824QZvGNSy1ckREEym8t1bJzlMUQ5rmsCRBEBliQskB%2FzurYTgmxPOcaFn6tmHab8eo%2FDGR2XxCmdzEUPfX89IQuNlUEPzEoHnb9CV6EhNxXuinCQ8Tv2BlfuipMTigmbL4KDfC69ZGNx0FftMJcYVm1nXMDvfgTMTdKhur%2FWVHEzMTpwHkBVG9c6gOMyswXb7sKTJQaWtBcQorjIJ66i7QQcBuYKZGu1kX3PNVNVESGgzXjry3iWxOFmXCxhddvHb5ey5HYIAGbDeUbvuuTIyn2djXjC9qezBBjqkAe0kSpuF8wYG7D%2BELCzSnEyFrONmTf5eFX%2BtxWaIibLMEoXK6JeyKJaO6NL%2Ba5itHtWqatDs89P7a2F5mjfzhL8snvgUfu%2BZqJTDLrjRafWDiuqxS0BbmfgGUgOKJM3oO1aPhqOS5jrfrHnchCmrRsoWVcvOthFdnSYGNT2tvQrs8dGODsR60vPld1qTMM0PFq5SpHwcgv7foD5qTW5k7cr3PFve&X-Amz-Signature=ed33746333eab92a902b4edaca7bba4101132bbdd3bfa206e026c4a2e896d907&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7LI2D2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXiNC7Y%2BvbHed1bC%2F34LpxTgV5%2ByvwPCnePy6jarXIQIhAJXwbM7FdDftEOWFdKUfnE4lf%2BcAAoTf4TmiKfh0vKq0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz92%2BwS3yZ8PWj%2BoqYq3ANfY6YGLEAe5TAHzo070Yjhr3mSUwVLhyoooJsNB%2BI43m8Wjy4RzaymzqzBUK0iCPkqrMdgCBRJiP6HUkAIo53cPs%2Bceq3vcdNR90ia0JROMg6HVio4a5XoGmlF9iXsRzV%2FeyEFDIpHzT3BbiKnc8BEQHTjS8iEkuxaJNwAUDEPjopoYa%2Fy80oHnfSDTlwhUJ6uFNeVP7C9Qa%2BP7ztqmfd3yNgKh6o54KKECvS8xYNKMgk4VrGpMKs8qC4wuarKixicrzc4iVo3eORmMqMQSX9pWI6e8HkytcXOLs2a%2F5QUX964Nv4OSlu%2Fe%2BVq%2BD%2BdgLkZg4ow18QONCtOO%2FSoUcgxRW11GETcJg824QZvGNSy1ckREEym8t1bJzlMUQ5rmsCRBEBliQskB%2FzurYTgmxPOcaFn6tmHab8eo%2FDGR2XxCmdzEUPfX89IQuNlUEPzEoHnb9CV6EhNxXuinCQ8Tv2BlfuipMTigmbL4KDfC69ZGNx0FftMJcYVm1nXMDvfgTMTdKhur%2FWVHEzMTpwHkBVG9c6gOMyswXb7sKTJQaWtBcQorjIJ66i7QQcBuYKZGu1kX3PNVNVESGgzXjry3iWxOFmXCxhddvHb5ey5HYIAGbDeUbvuuTIyn2djXjC9qezBBjqkAe0kSpuF8wYG7D%2BELCzSnEyFrONmTf5eFX%2BtxWaIibLMEoXK6JeyKJaO6NL%2Ba5itHtWqatDs89P7a2F5mjfzhL8snvgUfu%2BZqJTDLrjRafWDiuqxS0BbmfgGUgOKJM3oO1aPhqOS5jrfrHnchCmrRsoWVcvOthFdnSYGNT2tvQrs8dGODsR60vPld1qTMM0PFq5SpHwcgv7foD5qTW5k7cr3PFve&X-Amz-Signature=c5d392cd56f980f1e5c5f3b93efc116a9eccb1de350b0a8131d51e9545eeb13d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7LI2D2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXiNC7Y%2BvbHed1bC%2F34LpxTgV5%2ByvwPCnePy6jarXIQIhAJXwbM7FdDftEOWFdKUfnE4lf%2BcAAoTf4TmiKfh0vKq0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz92%2BwS3yZ8PWj%2BoqYq3ANfY6YGLEAe5TAHzo070Yjhr3mSUwVLhyoooJsNB%2BI43m8Wjy4RzaymzqzBUK0iCPkqrMdgCBRJiP6HUkAIo53cPs%2Bceq3vcdNR90ia0JROMg6HVio4a5XoGmlF9iXsRzV%2FeyEFDIpHzT3BbiKnc8BEQHTjS8iEkuxaJNwAUDEPjopoYa%2Fy80oHnfSDTlwhUJ6uFNeVP7C9Qa%2BP7ztqmfd3yNgKh6o54KKECvS8xYNKMgk4VrGpMKs8qC4wuarKixicrzc4iVo3eORmMqMQSX9pWI6e8HkytcXOLs2a%2F5QUX964Nv4OSlu%2Fe%2BVq%2BD%2BdgLkZg4ow18QONCtOO%2FSoUcgxRW11GETcJg824QZvGNSy1ckREEym8t1bJzlMUQ5rmsCRBEBliQskB%2FzurYTgmxPOcaFn6tmHab8eo%2FDGR2XxCmdzEUPfX89IQuNlUEPzEoHnb9CV6EhNxXuinCQ8Tv2BlfuipMTigmbL4KDfC69ZGNx0FftMJcYVm1nXMDvfgTMTdKhur%2FWVHEzMTpwHkBVG9c6gOMyswXb7sKTJQaWtBcQorjIJ66i7QQcBuYKZGu1kX3PNVNVESGgzXjry3iWxOFmXCxhddvHb5ey5HYIAGbDeUbvuuTIyn2djXjC9qezBBjqkAe0kSpuF8wYG7D%2BELCzSnEyFrONmTf5eFX%2BtxWaIibLMEoXK6JeyKJaO6NL%2Ba5itHtWqatDs89P7a2F5mjfzhL8snvgUfu%2BZqJTDLrjRafWDiuqxS0BbmfgGUgOKJM3oO1aPhqOS5jrfrHnchCmrRsoWVcvOthFdnSYGNT2tvQrs8dGODsR60vPld1qTMM0PFq5SpHwcgv7foD5qTW5k7cr3PFve&X-Amz-Signature=5c7472461a55ed5eb9816196502a3d1762ef510317431a01e7ef83874328618e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7LI2D2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXiNC7Y%2BvbHed1bC%2F34LpxTgV5%2ByvwPCnePy6jarXIQIhAJXwbM7FdDftEOWFdKUfnE4lf%2BcAAoTf4TmiKfh0vKq0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz92%2BwS3yZ8PWj%2BoqYq3ANfY6YGLEAe5TAHzo070Yjhr3mSUwVLhyoooJsNB%2BI43m8Wjy4RzaymzqzBUK0iCPkqrMdgCBRJiP6HUkAIo53cPs%2Bceq3vcdNR90ia0JROMg6HVio4a5XoGmlF9iXsRzV%2FeyEFDIpHzT3BbiKnc8BEQHTjS8iEkuxaJNwAUDEPjopoYa%2Fy80oHnfSDTlwhUJ6uFNeVP7C9Qa%2BP7ztqmfd3yNgKh6o54KKECvS8xYNKMgk4VrGpMKs8qC4wuarKixicrzc4iVo3eORmMqMQSX9pWI6e8HkytcXOLs2a%2F5QUX964Nv4OSlu%2Fe%2BVq%2BD%2BdgLkZg4ow18QONCtOO%2FSoUcgxRW11GETcJg824QZvGNSy1ckREEym8t1bJzlMUQ5rmsCRBEBliQskB%2FzurYTgmxPOcaFn6tmHab8eo%2FDGR2XxCmdzEUPfX89IQuNlUEPzEoHnb9CV6EhNxXuinCQ8Tv2BlfuipMTigmbL4KDfC69ZGNx0FftMJcYVm1nXMDvfgTMTdKhur%2FWVHEzMTpwHkBVG9c6gOMyswXb7sKTJQaWtBcQorjIJ66i7QQcBuYKZGu1kX3PNVNVESGgzXjry3iWxOFmXCxhddvHb5ey5HYIAGbDeUbvuuTIyn2djXjC9qezBBjqkAe0kSpuF8wYG7D%2BELCzSnEyFrONmTf5eFX%2BtxWaIibLMEoXK6JeyKJaO6NL%2Ba5itHtWqatDs89P7a2F5mjfzhL8snvgUfu%2BZqJTDLrjRafWDiuqxS0BbmfgGUgOKJM3oO1aPhqOS5jrfrHnchCmrRsoWVcvOthFdnSYGNT2tvQrs8dGODsR60vPld1qTMM0PFq5SpHwcgv7foD5qTW5k7cr3PFve&X-Amz-Signature=085010a121976cae653442233c532d1ab5ee43b94ef1b0210da1e6d67a83bfce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7LI2D2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXiNC7Y%2BvbHed1bC%2F34LpxTgV5%2ByvwPCnePy6jarXIQIhAJXwbM7FdDftEOWFdKUfnE4lf%2BcAAoTf4TmiKfh0vKq0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz92%2BwS3yZ8PWj%2BoqYq3ANfY6YGLEAe5TAHzo070Yjhr3mSUwVLhyoooJsNB%2BI43m8Wjy4RzaymzqzBUK0iCPkqrMdgCBRJiP6HUkAIo53cPs%2Bceq3vcdNR90ia0JROMg6HVio4a5XoGmlF9iXsRzV%2FeyEFDIpHzT3BbiKnc8BEQHTjS8iEkuxaJNwAUDEPjopoYa%2Fy80oHnfSDTlwhUJ6uFNeVP7C9Qa%2BP7ztqmfd3yNgKh6o54KKECvS8xYNKMgk4VrGpMKs8qC4wuarKixicrzc4iVo3eORmMqMQSX9pWI6e8HkytcXOLs2a%2F5QUX964Nv4OSlu%2Fe%2BVq%2BD%2BdgLkZg4ow18QONCtOO%2FSoUcgxRW11GETcJg824QZvGNSy1ckREEym8t1bJzlMUQ5rmsCRBEBliQskB%2FzurYTgmxPOcaFn6tmHab8eo%2FDGR2XxCmdzEUPfX89IQuNlUEPzEoHnb9CV6EhNxXuinCQ8Tv2BlfuipMTigmbL4KDfC69ZGNx0FftMJcYVm1nXMDvfgTMTdKhur%2FWVHEzMTpwHkBVG9c6gOMyswXb7sKTJQaWtBcQorjIJ66i7QQcBuYKZGu1kX3PNVNVESGgzXjry3iWxOFmXCxhddvHb5ey5HYIAGbDeUbvuuTIyn2djXjC9qezBBjqkAe0kSpuF8wYG7D%2BELCzSnEyFrONmTf5eFX%2BtxWaIibLMEoXK6JeyKJaO6NL%2Ba5itHtWqatDs89P7a2F5mjfzhL8snvgUfu%2BZqJTDLrjRafWDiuqxS0BbmfgGUgOKJM3oO1aPhqOS5jrfrHnchCmrRsoWVcvOthFdnSYGNT2tvQrs8dGODsR60vPld1qTMM0PFq5SpHwcgv7foD5qTW5k7cr3PFve&X-Amz-Signature=f9c9d961f4eab50e81a451e8c4a2c51a79670a5f9529af44ae4c3917d1784a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7LI2D2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXiNC7Y%2BvbHed1bC%2F34LpxTgV5%2ByvwPCnePy6jarXIQIhAJXwbM7FdDftEOWFdKUfnE4lf%2BcAAoTf4TmiKfh0vKq0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz92%2BwS3yZ8PWj%2BoqYq3ANfY6YGLEAe5TAHzo070Yjhr3mSUwVLhyoooJsNB%2BI43m8Wjy4RzaymzqzBUK0iCPkqrMdgCBRJiP6HUkAIo53cPs%2Bceq3vcdNR90ia0JROMg6HVio4a5XoGmlF9iXsRzV%2FeyEFDIpHzT3BbiKnc8BEQHTjS8iEkuxaJNwAUDEPjopoYa%2Fy80oHnfSDTlwhUJ6uFNeVP7C9Qa%2BP7ztqmfd3yNgKh6o54KKECvS8xYNKMgk4VrGpMKs8qC4wuarKixicrzc4iVo3eORmMqMQSX9pWI6e8HkytcXOLs2a%2F5QUX964Nv4OSlu%2Fe%2BVq%2BD%2BdgLkZg4ow18QONCtOO%2FSoUcgxRW11GETcJg824QZvGNSy1ckREEym8t1bJzlMUQ5rmsCRBEBliQskB%2FzurYTgmxPOcaFn6tmHab8eo%2FDGR2XxCmdzEUPfX89IQuNlUEPzEoHnb9CV6EhNxXuinCQ8Tv2BlfuipMTigmbL4KDfC69ZGNx0FftMJcYVm1nXMDvfgTMTdKhur%2FWVHEzMTpwHkBVG9c6gOMyswXb7sKTJQaWtBcQorjIJ66i7QQcBuYKZGu1kX3PNVNVESGgzXjry3iWxOFmXCxhddvHb5ey5HYIAGbDeUbvuuTIyn2djXjC9qezBBjqkAe0kSpuF8wYG7D%2BELCzSnEyFrONmTf5eFX%2BtxWaIibLMEoXK6JeyKJaO6NL%2Ba5itHtWqatDs89P7a2F5mjfzhL8snvgUfu%2BZqJTDLrjRafWDiuqxS0BbmfgGUgOKJM3oO1aPhqOS5jrfrHnchCmrRsoWVcvOthFdnSYGNT2tvQrs8dGODsR60vPld1qTMM0PFq5SpHwcgv7foD5qTW5k7cr3PFve&X-Amz-Signature=6d22403c671372270faa171b82a5a8ec5154dfee7ce2816e317d4e4e27fed1af&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
