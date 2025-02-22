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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK35ANF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrskCmMjXtpkdc5tI04K936bTdNCsfOW8fxY6leTmG9wIgCmbyFZJfKtDLri5I%2Bxw8AkGI25StS1iumxJZJ6%2BdogAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY37NZcOYEvQR7xtyrcA02RtEupfNh1cCMfRzyqJcDyBA1F9e4p1P4rzj6NJfvfTmZxrtfWk2hA49jtBmfI64kRKKkQxmyVoqwuHVcT3fXgRB9E%2FYSv1YEGMaM5OV%2FUTx0TqhD2ZcecdhkL6ptZVfg4KKZPtDJUI7SvCJCgY1fVudEGM5Jpq9iRbxZ0r6jxbhG6iRCzp2sjTxDB3BT7l1gJbes7a6u9NjT0gu0D5CzixaYSv2TcVlm1gB8bF2RxxZHV6mqchQHJ33ffjpnC850xr2Ckd%2BIlYCQgrqSLIwCNlwU3GhZMBha526V8YXSaH89VE2eePUptlMrCyoiS7GXQy118yCcTtsnpjGK3ikS8el1zdTilP65Ivzj5qmfePX2Vfgp8581I%2FA%2FyGa9K5zMuZMF6wrWdcxPCdiOjoSBKnHU30j0pMPDcklzfxK9PRc%2FHy7Anr%2BwSaXgXWKT3C93iTUF%2FvvoPtfDll8Vy26qEZaeYIvItAjxWpaOAXcVm33MB%2BH7cV1pAfoZXeIn8KKqJg8nHoYtG%2F2nmO3wwvmRYCSBSRPrbYMRgxvP6RWm%2FTRUYPVLLZpw07QIHL0z83y1ELPhU3dFsYGhy56%2Fns13Y9s1Oc7WZn7w2toLuzD6X6bDTzUqLKdwIprQUMJa15r0GOqUBPs%2FDD7CdGNu8VG8SN7yxJsRw7i5yTVWrqlnXQ%2FVm2kXPx6%2BFmhOhb4nis2QmiuPEqhr8Kea4GStiN6F3KxuO5M3S5SL2X1Iu8at6V8UztX8uwznIkzTWoLWYklCAYkxTKFFNEe4%2BqCTopBILrzwMII1Dy%2FXVXWqCxEByJTTghGfvscWoLhw%2Fly07%2Fo0YrExxsw4zrlWDEDyqoUOYs1G1XR266qWR&X-Amz-Signature=e08c342f8e93b9c2557a6fd19d77a23b1740517627a1e1564f71a9c8a45a6b09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK35ANF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrskCmMjXtpkdc5tI04K936bTdNCsfOW8fxY6leTmG9wIgCmbyFZJfKtDLri5I%2Bxw8AkGI25StS1iumxJZJ6%2BdogAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY37NZcOYEvQR7xtyrcA02RtEupfNh1cCMfRzyqJcDyBA1F9e4p1P4rzj6NJfvfTmZxrtfWk2hA49jtBmfI64kRKKkQxmyVoqwuHVcT3fXgRB9E%2FYSv1YEGMaM5OV%2FUTx0TqhD2ZcecdhkL6ptZVfg4KKZPtDJUI7SvCJCgY1fVudEGM5Jpq9iRbxZ0r6jxbhG6iRCzp2sjTxDB3BT7l1gJbes7a6u9NjT0gu0D5CzixaYSv2TcVlm1gB8bF2RxxZHV6mqchQHJ33ffjpnC850xr2Ckd%2BIlYCQgrqSLIwCNlwU3GhZMBha526V8YXSaH89VE2eePUptlMrCyoiS7GXQy118yCcTtsnpjGK3ikS8el1zdTilP65Ivzj5qmfePX2Vfgp8581I%2FA%2FyGa9K5zMuZMF6wrWdcxPCdiOjoSBKnHU30j0pMPDcklzfxK9PRc%2FHy7Anr%2BwSaXgXWKT3C93iTUF%2FvvoPtfDll8Vy26qEZaeYIvItAjxWpaOAXcVm33MB%2BH7cV1pAfoZXeIn8KKqJg8nHoYtG%2F2nmO3wwvmRYCSBSRPrbYMRgxvP6RWm%2FTRUYPVLLZpw07QIHL0z83y1ELPhU3dFsYGhy56%2Fns13Y9s1Oc7WZn7w2toLuzD6X6bDTzUqLKdwIprQUMJa15r0GOqUBPs%2FDD7CdGNu8VG8SN7yxJsRw7i5yTVWrqlnXQ%2FVm2kXPx6%2BFmhOhb4nis2QmiuPEqhr8Kea4GStiN6F3KxuO5M3S5SL2X1Iu8at6V8UztX8uwznIkzTWoLWYklCAYkxTKFFNEe4%2BqCTopBILrzwMII1Dy%2FXVXWqCxEByJTTghGfvscWoLhw%2Fly07%2Fo0YrExxsw4zrlWDEDyqoUOYs1G1XR266qWR&X-Amz-Signature=dd70345693bd218932aa5cab0f6d642255b9bb75b3d8b9edd01bdedb856a228a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK35ANF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrskCmMjXtpkdc5tI04K936bTdNCsfOW8fxY6leTmG9wIgCmbyFZJfKtDLri5I%2Bxw8AkGI25StS1iumxJZJ6%2BdogAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY37NZcOYEvQR7xtyrcA02RtEupfNh1cCMfRzyqJcDyBA1F9e4p1P4rzj6NJfvfTmZxrtfWk2hA49jtBmfI64kRKKkQxmyVoqwuHVcT3fXgRB9E%2FYSv1YEGMaM5OV%2FUTx0TqhD2ZcecdhkL6ptZVfg4KKZPtDJUI7SvCJCgY1fVudEGM5Jpq9iRbxZ0r6jxbhG6iRCzp2sjTxDB3BT7l1gJbes7a6u9NjT0gu0D5CzixaYSv2TcVlm1gB8bF2RxxZHV6mqchQHJ33ffjpnC850xr2Ckd%2BIlYCQgrqSLIwCNlwU3GhZMBha526V8YXSaH89VE2eePUptlMrCyoiS7GXQy118yCcTtsnpjGK3ikS8el1zdTilP65Ivzj5qmfePX2Vfgp8581I%2FA%2FyGa9K5zMuZMF6wrWdcxPCdiOjoSBKnHU30j0pMPDcklzfxK9PRc%2FHy7Anr%2BwSaXgXWKT3C93iTUF%2FvvoPtfDll8Vy26qEZaeYIvItAjxWpaOAXcVm33MB%2BH7cV1pAfoZXeIn8KKqJg8nHoYtG%2F2nmO3wwvmRYCSBSRPrbYMRgxvP6RWm%2FTRUYPVLLZpw07QIHL0z83y1ELPhU3dFsYGhy56%2Fns13Y9s1Oc7WZn7w2toLuzD6X6bDTzUqLKdwIprQUMJa15r0GOqUBPs%2FDD7CdGNu8VG8SN7yxJsRw7i5yTVWrqlnXQ%2FVm2kXPx6%2BFmhOhb4nis2QmiuPEqhr8Kea4GStiN6F3KxuO5M3S5SL2X1Iu8at6V8UztX8uwznIkzTWoLWYklCAYkxTKFFNEe4%2BqCTopBILrzwMII1Dy%2FXVXWqCxEByJTTghGfvscWoLhw%2Fly07%2Fo0YrExxsw4zrlWDEDyqoUOYs1G1XR266qWR&X-Amz-Signature=3fa5f450df8d148af35df9d4d887e85bffd155d6dddb64bf00741f7f4be9ab70&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK35ANF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrskCmMjXtpkdc5tI04K936bTdNCsfOW8fxY6leTmG9wIgCmbyFZJfKtDLri5I%2Bxw8AkGI25StS1iumxJZJ6%2BdogAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY37NZcOYEvQR7xtyrcA02RtEupfNh1cCMfRzyqJcDyBA1F9e4p1P4rzj6NJfvfTmZxrtfWk2hA49jtBmfI64kRKKkQxmyVoqwuHVcT3fXgRB9E%2FYSv1YEGMaM5OV%2FUTx0TqhD2ZcecdhkL6ptZVfg4KKZPtDJUI7SvCJCgY1fVudEGM5Jpq9iRbxZ0r6jxbhG6iRCzp2sjTxDB3BT7l1gJbes7a6u9NjT0gu0D5CzixaYSv2TcVlm1gB8bF2RxxZHV6mqchQHJ33ffjpnC850xr2Ckd%2BIlYCQgrqSLIwCNlwU3GhZMBha526V8YXSaH89VE2eePUptlMrCyoiS7GXQy118yCcTtsnpjGK3ikS8el1zdTilP65Ivzj5qmfePX2Vfgp8581I%2FA%2FyGa9K5zMuZMF6wrWdcxPCdiOjoSBKnHU30j0pMPDcklzfxK9PRc%2FHy7Anr%2BwSaXgXWKT3C93iTUF%2FvvoPtfDll8Vy26qEZaeYIvItAjxWpaOAXcVm33MB%2BH7cV1pAfoZXeIn8KKqJg8nHoYtG%2F2nmO3wwvmRYCSBSRPrbYMRgxvP6RWm%2FTRUYPVLLZpw07QIHL0z83y1ELPhU3dFsYGhy56%2Fns13Y9s1Oc7WZn7w2toLuzD6X6bDTzUqLKdwIprQUMJa15r0GOqUBPs%2FDD7CdGNu8VG8SN7yxJsRw7i5yTVWrqlnXQ%2FVm2kXPx6%2BFmhOhb4nis2QmiuPEqhr8Kea4GStiN6F3KxuO5M3S5SL2X1Iu8at6V8UztX8uwznIkzTWoLWYklCAYkxTKFFNEe4%2BqCTopBILrzwMII1Dy%2FXVXWqCxEByJTTghGfvscWoLhw%2Fly07%2Fo0YrExxsw4zrlWDEDyqoUOYs1G1XR266qWR&X-Amz-Signature=571546f18c8a058a9aa832f01fb4be14c86a6160904cf31afc43e7464ba80b37&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK35ANF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrskCmMjXtpkdc5tI04K936bTdNCsfOW8fxY6leTmG9wIgCmbyFZJfKtDLri5I%2Bxw8AkGI25StS1iumxJZJ6%2BdogAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY37NZcOYEvQR7xtyrcA02RtEupfNh1cCMfRzyqJcDyBA1F9e4p1P4rzj6NJfvfTmZxrtfWk2hA49jtBmfI64kRKKkQxmyVoqwuHVcT3fXgRB9E%2FYSv1YEGMaM5OV%2FUTx0TqhD2ZcecdhkL6ptZVfg4KKZPtDJUI7SvCJCgY1fVudEGM5Jpq9iRbxZ0r6jxbhG6iRCzp2sjTxDB3BT7l1gJbes7a6u9NjT0gu0D5CzixaYSv2TcVlm1gB8bF2RxxZHV6mqchQHJ33ffjpnC850xr2Ckd%2BIlYCQgrqSLIwCNlwU3GhZMBha526V8YXSaH89VE2eePUptlMrCyoiS7GXQy118yCcTtsnpjGK3ikS8el1zdTilP65Ivzj5qmfePX2Vfgp8581I%2FA%2FyGa9K5zMuZMF6wrWdcxPCdiOjoSBKnHU30j0pMPDcklzfxK9PRc%2FHy7Anr%2BwSaXgXWKT3C93iTUF%2FvvoPtfDll8Vy26qEZaeYIvItAjxWpaOAXcVm33MB%2BH7cV1pAfoZXeIn8KKqJg8nHoYtG%2F2nmO3wwvmRYCSBSRPrbYMRgxvP6RWm%2FTRUYPVLLZpw07QIHL0z83y1ELPhU3dFsYGhy56%2Fns13Y9s1Oc7WZn7w2toLuzD6X6bDTzUqLKdwIprQUMJa15r0GOqUBPs%2FDD7CdGNu8VG8SN7yxJsRw7i5yTVWrqlnXQ%2FVm2kXPx6%2BFmhOhb4nis2QmiuPEqhr8Kea4GStiN6F3KxuO5M3S5SL2X1Iu8at6V8UztX8uwznIkzTWoLWYklCAYkxTKFFNEe4%2BqCTopBILrzwMII1Dy%2FXVXWqCxEByJTTghGfvscWoLhw%2Fly07%2Fo0YrExxsw4zrlWDEDyqoUOYs1G1XR266qWR&X-Amz-Signature=4aff389e89b6b8a8af0cd2d7c22ab4b16ec224ea949ad95eee882e7117cd5a09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK35ANF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrskCmMjXtpkdc5tI04K936bTdNCsfOW8fxY6leTmG9wIgCmbyFZJfKtDLri5I%2Bxw8AkGI25StS1iumxJZJ6%2BdogAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY37NZcOYEvQR7xtyrcA02RtEupfNh1cCMfRzyqJcDyBA1F9e4p1P4rzj6NJfvfTmZxrtfWk2hA49jtBmfI64kRKKkQxmyVoqwuHVcT3fXgRB9E%2FYSv1YEGMaM5OV%2FUTx0TqhD2ZcecdhkL6ptZVfg4KKZPtDJUI7SvCJCgY1fVudEGM5Jpq9iRbxZ0r6jxbhG6iRCzp2sjTxDB3BT7l1gJbes7a6u9NjT0gu0D5CzixaYSv2TcVlm1gB8bF2RxxZHV6mqchQHJ33ffjpnC850xr2Ckd%2BIlYCQgrqSLIwCNlwU3GhZMBha526V8YXSaH89VE2eePUptlMrCyoiS7GXQy118yCcTtsnpjGK3ikS8el1zdTilP65Ivzj5qmfePX2Vfgp8581I%2FA%2FyGa9K5zMuZMF6wrWdcxPCdiOjoSBKnHU30j0pMPDcklzfxK9PRc%2FHy7Anr%2BwSaXgXWKT3C93iTUF%2FvvoPtfDll8Vy26qEZaeYIvItAjxWpaOAXcVm33MB%2BH7cV1pAfoZXeIn8KKqJg8nHoYtG%2F2nmO3wwvmRYCSBSRPrbYMRgxvP6RWm%2FTRUYPVLLZpw07QIHL0z83y1ELPhU3dFsYGhy56%2Fns13Y9s1Oc7WZn7w2toLuzD6X6bDTzUqLKdwIprQUMJa15r0GOqUBPs%2FDD7CdGNu8VG8SN7yxJsRw7i5yTVWrqlnXQ%2FVm2kXPx6%2BFmhOhb4nis2QmiuPEqhr8Kea4GStiN6F3KxuO5M3S5SL2X1Iu8at6V8UztX8uwznIkzTWoLWYklCAYkxTKFFNEe4%2BqCTopBILrzwMII1Dy%2FXVXWqCxEByJTTghGfvscWoLhw%2Fly07%2Fo0YrExxsw4zrlWDEDyqoUOYs1G1XR266qWR&X-Amz-Signature=8eaed575a8f684618e4f2222fc6fa26294a075911af0e6c03a65f37834a565a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK35ANF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrskCmMjXtpkdc5tI04K936bTdNCsfOW8fxY6leTmG9wIgCmbyFZJfKtDLri5I%2Bxw8AkGI25StS1iumxJZJ6%2BdogAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY37NZcOYEvQR7xtyrcA02RtEupfNh1cCMfRzyqJcDyBA1F9e4p1P4rzj6NJfvfTmZxrtfWk2hA49jtBmfI64kRKKkQxmyVoqwuHVcT3fXgRB9E%2FYSv1YEGMaM5OV%2FUTx0TqhD2ZcecdhkL6ptZVfg4KKZPtDJUI7SvCJCgY1fVudEGM5Jpq9iRbxZ0r6jxbhG6iRCzp2sjTxDB3BT7l1gJbes7a6u9NjT0gu0D5CzixaYSv2TcVlm1gB8bF2RxxZHV6mqchQHJ33ffjpnC850xr2Ckd%2BIlYCQgrqSLIwCNlwU3GhZMBha526V8YXSaH89VE2eePUptlMrCyoiS7GXQy118yCcTtsnpjGK3ikS8el1zdTilP65Ivzj5qmfePX2Vfgp8581I%2FA%2FyGa9K5zMuZMF6wrWdcxPCdiOjoSBKnHU30j0pMPDcklzfxK9PRc%2FHy7Anr%2BwSaXgXWKT3C93iTUF%2FvvoPtfDll8Vy26qEZaeYIvItAjxWpaOAXcVm33MB%2BH7cV1pAfoZXeIn8KKqJg8nHoYtG%2F2nmO3wwvmRYCSBSRPrbYMRgxvP6RWm%2FTRUYPVLLZpw07QIHL0z83y1ELPhU3dFsYGhy56%2Fns13Y9s1Oc7WZn7w2toLuzD6X6bDTzUqLKdwIprQUMJa15r0GOqUBPs%2FDD7CdGNu8VG8SN7yxJsRw7i5yTVWrqlnXQ%2FVm2kXPx6%2BFmhOhb4nis2QmiuPEqhr8Kea4GStiN6F3KxuO5M3S5SL2X1Iu8at6V8UztX8uwznIkzTWoLWYklCAYkxTKFFNEe4%2BqCTopBILrzwMII1Dy%2FXVXWqCxEByJTTghGfvscWoLhw%2Fly07%2Fo0YrExxsw4zrlWDEDyqoUOYs1G1XR266qWR&X-Amz-Signature=4ae4289511f55588db4be693f836d3d4cb485cc77f57ef7f5a90e180250d6bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
