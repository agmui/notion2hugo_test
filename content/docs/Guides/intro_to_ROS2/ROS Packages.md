---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFG5ZBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1jPpCUBgZ8xITTYTkq0l%2BzLl79US7Flu2UaUn3JWCZAiEA1xTYHPmwHUS4WtceK3TGF2nZL%2BSOBZKX3%2BtiVrhpvnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqSKn6vpu42hRAKjircA5g7OIUzrEoGu0cXEn4r2Wf6h0yOVd4lDrIV16%2B0jOby47iyL3ELSPvLdLZkG8Dog4GC8zkQVnC%2Fn%2FRn0wtXIKXOxrOPuNfmEh%2FMmwysXLM3lOSZy1pleKZNy2nmMGjFL5vceJovDiy5RU4TLcNUZ%2B2vxFcTnzMv68fNh4udJPdjm4Gf2S3qYTl9sgYzvykT7cxfdrK%2FE%2FkoMPG3lgKrtTasT555u3Xh49ZMitjS0Y8cwc%2B55gYMnzgUiW3Zwly93ZTrLDb3t1iwASaNz4i2jrrVtM5yDj5%2FIVnEVKmgpjQaEUZoiY7gHRDmgcBtanxVw4vNPWFJ0PJxetXiq8PLZ0eQal8eLQxgwGgCeeDY0iJ4NoZd8BuIl9joJr%2F8bHrAbR5I3lSqXCvV%2BRFwRBKcS%2BfIt2Wbk1YqW6fQ%2FCmPEYnmqy8l43Vgj2tQ4GL6IXpbkeyovTyIjwGQqdCNdPwmmRXtE0sDJb%2BZq6d0Qf4lDwdMU5DceCMdy921jS9ILZXoTYtd5KGD4fC16IbRjXcGCbZhJV%2FmyyMgNzZp3DQR8huyTOEGRkEnBi3dFWWeFWqvLZjjCQby%2Foq9eHjsR0cINxtB63FMKi%2Fj4FRaQzu%2BOgz3R4ZPWein%2Fvn0WQlTMM%2BS3cMGOqUBJHkSek0%2Bk5ZLeD3mH0zo1dogw2TTbKkWLgooA3W3A7OdxX%2FZmSD0RIxCBCWSFBFW%2BfXzh28GRDlGzwjLamunbfP119JpZewaLoLSegz7DYeiDZ0oWHrf%2F6yg%2F%2FNCiKaoL3uUugMLj0EIVsCD8z1q%2BDzBfBATZeKvGFzSwoZ6XcLdTOV6%2FuYuiAy1JA4uth1VXxGwZL%2FiRHU%2FXN%2BZ%2BOiNXQ48XY97&X-Amz-Signature=30b6c1d26e074b3e8bb4dbb5304a90980f64ba95327eec719214554c74c3ddb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFG5ZBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1jPpCUBgZ8xITTYTkq0l%2BzLl79US7Flu2UaUn3JWCZAiEA1xTYHPmwHUS4WtceK3TGF2nZL%2BSOBZKX3%2BtiVrhpvnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqSKn6vpu42hRAKjircA5g7OIUzrEoGu0cXEn4r2Wf6h0yOVd4lDrIV16%2B0jOby47iyL3ELSPvLdLZkG8Dog4GC8zkQVnC%2Fn%2FRn0wtXIKXOxrOPuNfmEh%2FMmwysXLM3lOSZy1pleKZNy2nmMGjFL5vceJovDiy5RU4TLcNUZ%2B2vxFcTnzMv68fNh4udJPdjm4Gf2S3qYTl9sgYzvykT7cxfdrK%2FE%2FkoMPG3lgKrtTasT555u3Xh49ZMitjS0Y8cwc%2B55gYMnzgUiW3Zwly93ZTrLDb3t1iwASaNz4i2jrrVtM5yDj5%2FIVnEVKmgpjQaEUZoiY7gHRDmgcBtanxVw4vNPWFJ0PJxetXiq8PLZ0eQal8eLQxgwGgCeeDY0iJ4NoZd8BuIl9joJr%2F8bHrAbR5I3lSqXCvV%2BRFwRBKcS%2BfIt2Wbk1YqW6fQ%2FCmPEYnmqy8l43Vgj2tQ4GL6IXpbkeyovTyIjwGQqdCNdPwmmRXtE0sDJb%2BZq6d0Qf4lDwdMU5DceCMdy921jS9ILZXoTYtd5KGD4fC16IbRjXcGCbZhJV%2FmyyMgNzZp3DQR8huyTOEGRkEnBi3dFWWeFWqvLZjjCQby%2Foq9eHjsR0cINxtB63FMKi%2Fj4FRaQzu%2BOgz3R4ZPWein%2Fvn0WQlTMM%2BS3cMGOqUBJHkSek0%2Bk5ZLeD3mH0zo1dogw2TTbKkWLgooA3W3A7OdxX%2FZmSD0RIxCBCWSFBFW%2BfXzh28GRDlGzwjLamunbfP119JpZewaLoLSegz7DYeiDZ0oWHrf%2F6yg%2F%2FNCiKaoL3uUugMLj0EIVsCD8z1q%2BDzBfBATZeKvGFzSwoZ6XcLdTOV6%2FuYuiAy1JA4uth1VXxGwZL%2FiRHU%2FXN%2BZ%2BOiNXQ48XY97&X-Amz-Signature=0128628e633b6a2d0ee7fd85a5deef68e8fad1cf0b2ca2d87b873827d8023f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFG5ZBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1jPpCUBgZ8xITTYTkq0l%2BzLl79US7Flu2UaUn3JWCZAiEA1xTYHPmwHUS4WtceK3TGF2nZL%2BSOBZKX3%2BtiVrhpvnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqSKn6vpu42hRAKjircA5g7OIUzrEoGu0cXEn4r2Wf6h0yOVd4lDrIV16%2B0jOby47iyL3ELSPvLdLZkG8Dog4GC8zkQVnC%2Fn%2FRn0wtXIKXOxrOPuNfmEh%2FMmwysXLM3lOSZy1pleKZNy2nmMGjFL5vceJovDiy5RU4TLcNUZ%2B2vxFcTnzMv68fNh4udJPdjm4Gf2S3qYTl9sgYzvykT7cxfdrK%2FE%2FkoMPG3lgKrtTasT555u3Xh49ZMitjS0Y8cwc%2B55gYMnzgUiW3Zwly93ZTrLDb3t1iwASaNz4i2jrrVtM5yDj5%2FIVnEVKmgpjQaEUZoiY7gHRDmgcBtanxVw4vNPWFJ0PJxetXiq8PLZ0eQal8eLQxgwGgCeeDY0iJ4NoZd8BuIl9joJr%2F8bHrAbR5I3lSqXCvV%2BRFwRBKcS%2BfIt2Wbk1YqW6fQ%2FCmPEYnmqy8l43Vgj2tQ4GL6IXpbkeyovTyIjwGQqdCNdPwmmRXtE0sDJb%2BZq6d0Qf4lDwdMU5DceCMdy921jS9ILZXoTYtd5KGD4fC16IbRjXcGCbZhJV%2FmyyMgNzZp3DQR8huyTOEGRkEnBi3dFWWeFWqvLZjjCQby%2Foq9eHjsR0cINxtB63FMKi%2Fj4FRaQzu%2BOgz3R4ZPWein%2Fvn0WQlTMM%2BS3cMGOqUBJHkSek0%2Bk5ZLeD3mH0zo1dogw2TTbKkWLgooA3W3A7OdxX%2FZmSD0RIxCBCWSFBFW%2BfXzh28GRDlGzwjLamunbfP119JpZewaLoLSegz7DYeiDZ0oWHrf%2F6yg%2F%2FNCiKaoL3uUugMLj0EIVsCD8z1q%2BDzBfBATZeKvGFzSwoZ6XcLdTOV6%2FuYuiAy1JA4uth1VXxGwZL%2FiRHU%2FXN%2BZ%2BOiNXQ48XY97&X-Amz-Signature=24a01c78c9e56f22141fce0bbf917cdce11c45967f61a98404c4cce8cd17866b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFG5ZBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1jPpCUBgZ8xITTYTkq0l%2BzLl79US7Flu2UaUn3JWCZAiEA1xTYHPmwHUS4WtceK3TGF2nZL%2BSOBZKX3%2BtiVrhpvnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqSKn6vpu42hRAKjircA5g7OIUzrEoGu0cXEn4r2Wf6h0yOVd4lDrIV16%2B0jOby47iyL3ELSPvLdLZkG8Dog4GC8zkQVnC%2Fn%2FRn0wtXIKXOxrOPuNfmEh%2FMmwysXLM3lOSZy1pleKZNy2nmMGjFL5vceJovDiy5RU4TLcNUZ%2B2vxFcTnzMv68fNh4udJPdjm4Gf2S3qYTl9sgYzvykT7cxfdrK%2FE%2FkoMPG3lgKrtTasT555u3Xh49ZMitjS0Y8cwc%2B55gYMnzgUiW3Zwly93ZTrLDb3t1iwASaNz4i2jrrVtM5yDj5%2FIVnEVKmgpjQaEUZoiY7gHRDmgcBtanxVw4vNPWFJ0PJxetXiq8PLZ0eQal8eLQxgwGgCeeDY0iJ4NoZd8BuIl9joJr%2F8bHrAbR5I3lSqXCvV%2BRFwRBKcS%2BfIt2Wbk1YqW6fQ%2FCmPEYnmqy8l43Vgj2tQ4GL6IXpbkeyovTyIjwGQqdCNdPwmmRXtE0sDJb%2BZq6d0Qf4lDwdMU5DceCMdy921jS9ILZXoTYtd5KGD4fC16IbRjXcGCbZhJV%2FmyyMgNzZp3DQR8huyTOEGRkEnBi3dFWWeFWqvLZjjCQby%2Foq9eHjsR0cINxtB63FMKi%2Fj4FRaQzu%2BOgz3R4ZPWein%2Fvn0WQlTMM%2BS3cMGOqUBJHkSek0%2Bk5ZLeD3mH0zo1dogw2TTbKkWLgooA3W3A7OdxX%2FZmSD0RIxCBCWSFBFW%2BfXzh28GRDlGzwjLamunbfP119JpZewaLoLSegz7DYeiDZ0oWHrf%2F6yg%2F%2FNCiKaoL3uUugMLj0EIVsCD8z1q%2BDzBfBATZeKvGFzSwoZ6XcLdTOV6%2FuYuiAy1JA4uth1VXxGwZL%2FiRHU%2FXN%2BZ%2BOiNXQ48XY97&X-Amz-Signature=92ac1ebe63883313c54bb9f4023d900bf1389cf6e5e95a1c7b121b1c367aec28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFG5ZBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1jPpCUBgZ8xITTYTkq0l%2BzLl79US7Flu2UaUn3JWCZAiEA1xTYHPmwHUS4WtceK3TGF2nZL%2BSOBZKX3%2BtiVrhpvnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqSKn6vpu42hRAKjircA5g7OIUzrEoGu0cXEn4r2Wf6h0yOVd4lDrIV16%2B0jOby47iyL3ELSPvLdLZkG8Dog4GC8zkQVnC%2Fn%2FRn0wtXIKXOxrOPuNfmEh%2FMmwysXLM3lOSZy1pleKZNy2nmMGjFL5vceJovDiy5RU4TLcNUZ%2B2vxFcTnzMv68fNh4udJPdjm4Gf2S3qYTl9sgYzvykT7cxfdrK%2FE%2FkoMPG3lgKrtTasT555u3Xh49ZMitjS0Y8cwc%2B55gYMnzgUiW3Zwly93ZTrLDb3t1iwASaNz4i2jrrVtM5yDj5%2FIVnEVKmgpjQaEUZoiY7gHRDmgcBtanxVw4vNPWFJ0PJxetXiq8PLZ0eQal8eLQxgwGgCeeDY0iJ4NoZd8BuIl9joJr%2F8bHrAbR5I3lSqXCvV%2BRFwRBKcS%2BfIt2Wbk1YqW6fQ%2FCmPEYnmqy8l43Vgj2tQ4GL6IXpbkeyovTyIjwGQqdCNdPwmmRXtE0sDJb%2BZq6d0Qf4lDwdMU5DceCMdy921jS9ILZXoTYtd5KGD4fC16IbRjXcGCbZhJV%2FmyyMgNzZp3DQR8huyTOEGRkEnBi3dFWWeFWqvLZjjCQby%2Foq9eHjsR0cINxtB63FMKi%2Fj4FRaQzu%2BOgz3R4ZPWein%2Fvn0WQlTMM%2BS3cMGOqUBJHkSek0%2Bk5ZLeD3mH0zo1dogw2TTbKkWLgooA3W3A7OdxX%2FZmSD0RIxCBCWSFBFW%2BfXzh28GRDlGzwjLamunbfP119JpZewaLoLSegz7DYeiDZ0oWHrf%2F6yg%2F%2FNCiKaoL3uUugMLj0EIVsCD8z1q%2BDzBfBATZeKvGFzSwoZ6XcLdTOV6%2FuYuiAy1JA4uth1VXxGwZL%2FiRHU%2FXN%2BZ%2BOiNXQ48XY97&X-Amz-Signature=e91cebb8940a02cc5d16a45b4dc7fdd4232bfef1ae724c3c74ff64ea2deb6f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFG5ZBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1jPpCUBgZ8xITTYTkq0l%2BzLl79US7Flu2UaUn3JWCZAiEA1xTYHPmwHUS4WtceK3TGF2nZL%2BSOBZKX3%2BtiVrhpvnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqSKn6vpu42hRAKjircA5g7OIUzrEoGu0cXEn4r2Wf6h0yOVd4lDrIV16%2B0jOby47iyL3ELSPvLdLZkG8Dog4GC8zkQVnC%2Fn%2FRn0wtXIKXOxrOPuNfmEh%2FMmwysXLM3lOSZy1pleKZNy2nmMGjFL5vceJovDiy5RU4TLcNUZ%2B2vxFcTnzMv68fNh4udJPdjm4Gf2S3qYTl9sgYzvykT7cxfdrK%2FE%2FkoMPG3lgKrtTasT555u3Xh49ZMitjS0Y8cwc%2B55gYMnzgUiW3Zwly93ZTrLDb3t1iwASaNz4i2jrrVtM5yDj5%2FIVnEVKmgpjQaEUZoiY7gHRDmgcBtanxVw4vNPWFJ0PJxetXiq8PLZ0eQal8eLQxgwGgCeeDY0iJ4NoZd8BuIl9joJr%2F8bHrAbR5I3lSqXCvV%2BRFwRBKcS%2BfIt2Wbk1YqW6fQ%2FCmPEYnmqy8l43Vgj2tQ4GL6IXpbkeyovTyIjwGQqdCNdPwmmRXtE0sDJb%2BZq6d0Qf4lDwdMU5DceCMdy921jS9ILZXoTYtd5KGD4fC16IbRjXcGCbZhJV%2FmyyMgNzZp3DQR8huyTOEGRkEnBi3dFWWeFWqvLZjjCQby%2Foq9eHjsR0cINxtB63FMKi%2Fj4FRaQzu%2BOgz3R4ZPWein%2Fvn0WQlTMM%2BS3cMGOqUBJHkSek0%2Bk5ZLeD3mH0zo1dogw2TTbKkWLgooA3W3A7OdxX%2FZmSD0RIxCBCWSFBFW%2BfXzh28GRDlGzwjLamunbfP119JpZewaLoLSegz7DYeiDZ0oWHrf%2F6yg%2F%2FNCiKaoL3uUugMLj0EIVsCD8z1q%2BDzBfBATZeKvGFzSwoZ6XcLdTOV6%2FuYuiAy1JA4uth1VXxGwZL%2FiRHU%2FXN%2BZ%2BOiNXQ48XY97&X-Amz-Signature=7be675c85f9c2ff3f01d032eb747289cbc6216b39b8e661d891c83b27bb6a34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFG5ZBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1jPpCUBgZ8xITTYTkq0l%2BzLl79US7Flu2UaUn3JWCZAiEA1xTYHPmwHUS4WtceK3TGF2nZL%2BSOBZKX3%2BtiVrhpvnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqSKn6vpu42hRAKjircA5g7OIUzrEoGu0cXEn4r2Wf6h0yOVd4lDrIV16%2B0jOby47iyL3ELSPvLdLZkG8Dog4GC8zkQVnC%2Fn%2FRn0wtXIKXOxrOPuNfmEh%2FMmwysXLM3lOSZy1pleKZNy2nmMGjFL5vceJovDiy5RU4TLcNUZ%2B2vxFcTnzMv68fNh4udJPdjm4Gf2S3qYTl9sgYzvykT7cxfdrK%2FE%2FkoMPG3lgKrtTasT555u3Xh49ZMitjS0Y8cwc%2B55gYMnzgUiW3Zwly93ZTrLDb3t1iwASaNz4i2jrrVtM5yDj5%2FIVnEVKmgpjQaEUZoiY7gHRDmgcBtanxVw4vNPWFJ0PJxetXiq8PLZ0eQal8eLQxgwGgCeeDY0iJ4NoZd8BuIl9joJr%2F8bHrAbR5I3lSqXCvV%2BRFwRBKcS%2BfIt2Wbk1YqW6fQ%2FCmPEYnmqy8l43Vgj2tQ4GL6IXpbkeyovTyIjwGQqdCNdPwmmRXtE0sDJb%2BZq6d0Qf4lDwdMU5DceCMdy921jS9ILZXoTYtd5KGD4fC16IbRjXcGCbZhJV%2FmyyMgNzZp3DQR8huyTOEGRkEnBi3dFWWeFWqvLZjjCQby%2Foq9eHjsR0cINxtB63FMKi%2Fj4FRaQzu%2BOgz3R4ZPWein%2Fvn0WQlTMM%2BS3cMGOqUBJHkSek0%2Bk5ZLeD3mH0zo1dogw2TTbKkWLgooA3W3A7OdxX%2FZmSD0RIxCBCWSFBFW%2BfXzh28GRDlGzwjLamunbfP119JpZewaLoLSegz7DYeiDZ0oWHrf%2F6yg%2F%2FNCiKaoL3uUugMLj0EIVsCD8z1q%2BDzBfBATZeKvGFzSwoZ6XcLdTOV6%2FuYuiAy1JA4uth1VXxGwZL%2FiRHU%2FXN%2BZ%2BOiNXQ48XY97&X-Amz-Signature=2b50e2306a76e7e030d88d36a71aa445e9f014b4bbcd714fdbae2cf5e318a319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
