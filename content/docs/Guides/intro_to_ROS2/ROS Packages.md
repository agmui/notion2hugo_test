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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHBIQTP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCLQvcwN1Vxj6pQ10wSRSGjkTXRezt%2F2nVP9n7vwSrn7gIhAMSZ4O%2BtLTn70Hi%2BHiP9NmGmdcpwvbDLNc%2BoTY3JRCb3KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwosGR67vs8Ef4%2BbGwq3AMJ5qwMY%2BaLTPQarMQCFesV%2By0w7Mss26ZwuAcantEj1VqokjpVHpM0M95mKk6z2rXkcG18Gxo8w0HEshwEkF8fRDr%2FiADsF%2FljwzV0oWgBXR5OYtQLvor5G%2F1D49O6p1%2FBpxSKSWlzV2Whv%2FNrgFOME9HfQGkrArMeqVjApDxMIbd3J6dzVA190Z3GJbuZn0oJLpmU794WhVpNx1IS0Hf9g%2F7pWO7Fphm1XWtql5hSiLz9ZYEaASb7N8BBliA%2F21SBGNe78FnU%2BszdXpXCIkbW92MVXBl4Ptq0v4axuQ%2FxwAnUsQnGLcX41VXtmvg1nNqxfeSsvgN0DRqIDPHXf8r3uM5cLKuvY44sDppqLaHTiUyiA4nPZDgStrW4fIbrdLwtP3ra1zTlTqx9oCFsbdoGUgNidx0psYzQZ98Qc112OrNy8ogz8gA2MUBewv8EDR2f%2FyylfJIZCHhVmp34Nc9N5GeAoIIHZPXSOgsLGUprbjlDw6tN7pAymDdk4F4zCKDs%2Bp%2BFx64LccNeMIuR9c%2FV%2BA95Q0l9taWNZqzI1V91D8ILJsF1BkpQ%2BuE5PVZj50uDYo03Tu9PRHJhbGU9lImhc%2B5G13VEjlOZmdTPLSASE%2BfLvEt3hcbSRk%2BI2DCk%2BcbABjqkAQwCJz0v3SI%2FAd5qAPSYM9DDC1CMlEwdJqxaUMyHOKn4N39pU%2FCwWcMw5mz47qy1jFXTSTpMgSBMAokFM7hG9Q1aD2CwsX4V5ce6L4fwG1kIYbK7FmIFxDDw3CK6Ycv%2BTAxp0iojdTiJSEQfbsHZosJD6uAikD5zqBw82rBQMF%2FHibECH2%2F44k4GTwD48EYnGdAAV3xN86KVzekA8fhwmjfL7f6F&X-Amz-Signature=03c4179183c9e9271bf7560d06f3bd0caded89006f036e6649f730e55daab6af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHBIQTP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCLQvcwN1Vxj6pQ10wSRSGjkTXRezt%2F2nVP9n7vwSrn7gIhAMSZ4O%2BtLTn70Hi%2BHiP9NmGmdcpwvbDLNc%2BoTY3JRCb3KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwosGR67vs8Ef4%2BbGwq3AMJ5qwMY%2BaLTPQarMQCFesV%2By0w7Mss26ZwuAcantEj1VqokjpVHpM0M95mKk6z2rXkcG18Gxo8w0HEshwEkF8fRDr%2FiADsF%2FljwzV0oWgBXR5OYtQLvor5G%2F1D49O6p1%2FBpxSKSWlzV2Whv%2FNrgFOME9HfQGkrArMeqVjApDxMIbd3J6dzVA190Z3GJbuZn0oJLpmU794WhVpNx1IS0Hf9g%2F7pWO7Fphm1XWtql5hSiLz9ZYEaASb7N8BBliA%2F21SBGNe78FnU%2BszdXpXCIkbW92MVXBl4Ptq0v4axuQ%2FxwAnUsQnGLcX41VXtmvg1nNqxfeSsvgN0DRqIDPHXf8r3uM5cLKuvY44sDppqLaHTiUyiA4nPZDgStrW4fIbrdLwtP3ra1zTlTqx9oCFsbdoGUgNidx0psYzQZ98Qc112OrNy8ogz8gA2MUBewv8EDR2f%2FyylfJIZCHhVmp34Nc9N5GeAoIIHZPXSOgsLGUprbjlDw6tN7pAymDdk4F4zCKDs%2Bp%2BFx64LccNeMIuR9c%2FV%2BA95Q0l9taWNZqzI1V91D8ILJsF1BkpQ%2BuE5PVZj50uDYo03Tu9PRHJhbGU9lImhc%2B5G13VEjlOZmdTPLSASE%2BfLvEt3hcbSRk%2BI2DCk%2BcbABjqkAQwCJz0v3SI%2FAd5qAPSYM9DDC1CMlEwdJqxaUMyHOKn4N39pU%2FCwWcMw5mz47qy1jFXTSTpMgSBMAokFM7hG9Q1aD2CwsX4V5ce6L4fwG1kIYbK7FmIFxDDw3CK6Ycv%2BTAxp0iojdTiJSEQfbsHZosJD6uAikD5zqBw82rBQMF%2FHibECH2%2F44k4GTwD48EYnGdAAV3xN86KVzekA8fhwmjfL7f6F&X-Amz-Signature=f5588c965169f169df1e8b4e56426e978a6fe76e35d472806f7fe6cc7ff0b919&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHBIQTP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCLQvcwN1Vxj6pQ10wSRSGjkTXRezt%2F2nVP9n7vwSrn7gIhAMSZ4O%2BtLTn70Hi%2BHiP9NmGmdcpwvbDLNc%2BoTY3JRCb3KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwosGR67vs8Ef4%2BbGwq3AMJ5qwMY%2BaLTPQarMQCFesV%2By0w7Mss26ZwuAcantEj1VqokjpVHpM0M95mKk6z2rXkcG18Gxo8w0HEshwEkF8fRDr%2FiADsF%2FljwzV0oWgBXR5OYtQLvor5G%2F1D49O6p1%2FBpxSKSWlzV2Whv%2FNrgFOME9HfQGkrArMeqVjApDxMIbd3J6dzVA190Z3GJbuZn0oJLpmU794WhVpNx1IS0Hf9g%2F7pWO7Fphm1XWtql5hSiLz9ZYEaASb7N8BBliA%2F21SBGNe78FnU%2BszdXpXCIkbW92MVXBl4Ptq0v4axuQ%2FxwAnUsQnGLcX41VXtmvg1nNqxfeSsvgN0DRqIDPHXf8r3uM5cLKuvY44sDppqLaHTiUyiA4nPZDgStrW4fIbrdLwtP3ra1zTlTqx9oCFsbdoGUgNidx0psYzQZ98Qc112OrNy8ogz8gA2MUBewv8EDR2f%2FyylfJIZCHhVmp34Nc9N5GeAoIIHZPXSOgsLGUprbjlDw6tN7pAymDdk4F4zCKDs%2Bp%2BFx64LccNeMIuR9c%2FV%2BA95Q0l9taWNZqzI1V91D8ILJsF1BkpQ%2BuE5PVZj50uDYo03Tu9PRHJhbGU9lImhc%2B5G13VEjlOZmdTPLSASE%2BfLvEt3hcbSRk%2BI2DCk%2BcbABjqkAQwCJz0v3SI%2FAd5qAPSYM9DDC1CMlEwdJqxaUMyHOKn4N39pU%2FCwWcMw5mz47qy1jFXTSTpMgSBMAokFM7hG9Q1aD2CwsX4V5ce6L4fwG1kIYbK7FmIFxDDw3CK6Ycv%2BTAxp0iojdTiJSEQfbsHZosJD6uAikD5zqBw82rBQMF%2FHibECH2%2F44k4GTwD48EYnGdAAV3xN86KVzekA8fhwmjfL7f6F&X-Amz-Signature=d07dd4391c2c7c8f1c42338e47688f02d430fd9fc1ecd97365b325257724c3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHBIQTP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCLQvcwN1Vxj6pQ10wSRSGjkTXRezt%2F2nVP9n7vwSrn7gIhAMSZ4O%2BtLTn70Hi%2BHiP9NmGmdcpwvbDLNc%2BoTY3JRCb3KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwosGR67vs8Ef4%2BbGwq3AMJ5qwMY%2BaLTPQarMQCFesV%2By0w7Mss26ZwuAcantEj1VqokjpVHpM0M95mKk6z2rXkcG18Gxo8w0HEshwEkF8fRDr%2FiADsF%2FljwzV0oWgBXR5OYtQLvor5G%2F1D49O6p1%2FBpxSKSWlzV2Whv%2FNrgFOME9HfQGkrArMeqVjApDxMIbd3J6dzVA190Z3GJbuZn0oJLpmU794WhVpNx1IS0Hf9g%2F7pWO7Fphm1XWtql5hSiLz9ZYEaASb7N8BBliA%2F21SBGNe78FnU%2BszdXpXCIkbW92MVXBl4Ptq0v4axuQ%2FxwAnUsQnGLcX41VXtmvg1nNqxfeSsvgN0DRqIDPHXf8r3uM5cLKuvY44sDppqLaHTiUyiA4nPZDgStrW4fIbrdLwtP3ra1zTlTqx9oCFsbdoGUgNidx0psYzQZ98Qc112OrNy8ogz8gA2MUBewv8EDR2f%2FyylfJIZCHhVmp34Nc9N5GeAoIIHZPXSOgsLGUprbjlDw6tN7pAymDdk4F4zCKDs%2Bp%2BFx64LccNeMIuR9c%2FV%2BA95Q0l9taWNZqzI1V91D8ILJsF1BkpQ%2BuE5PVZj50uDYo03Tu9PRHJhbGU9lImhc%2B5G13VEjlOZmdTPLSASE%2BfLvEt3hcbSRk%2BI2DCk%2BcbABjqkAQwCJz0v3SI%2FAd5qAPSYM9DDC1CMlEwdJqxaUMyHOKn4N39pU%2FCwWcMw5mz47qy1jFXTSTpMgSBMAokFM7hG9Q1aD2CwsX4V5ce6L4fwG1kIYbK7FmIFxDDw3CK6Ycv%2BTAxp0iojdTiJSEQfbsHZosJD6uAikD5zqBw82rBQMF%2FHibECH2%2F44k4GTwD48EYnGdAAV3xN86KVzekA8fhwmjfL7f6F&X-Amz-Signature=2a776a52c7f2be6b6af16a28ea822504bdb274c3b56adca805253d018da5cd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHBIQTP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCLQvcwN1Vxj6pQ10wSRSGjkTXRezt%2F2nVP9n7vwSrn7gIhAMSZ4O%2BtLTn70Hi%2BHiP9NmGmdcpwvbDLNc%2BoTY3JRCb3KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwosGR67vs8Ef4%2BbGwq3AMJ5qwMY%2BaLTPQarMQCFesV%2By0w7Mss26ZwuAcantEj1VqokjpVHpM0M95mKk6z2rXkcG18Gxo8w0HEshwEkF8fRDr%2FiADsF%2FljwzV0oWgBXR5OYtQLvor5G%2F1D49O6p1%2FBpxSKSWlzV2Whv%2FNrgFOME9HfQGkrArMeqVjApDxMIbd3J6dzVA190Z3GJbuZn0oJLpmU794WhVpNx1IS0Hf9g%2F7pWO7Fphm1XWtql5hSiLz9ZYEaASb7N8BBliA%2F21SBGNe78FnU%2BszdXpXCIkbW92MVXBl4Ptq0v4axuQ%2FxwAnUsQnGLcX41VXtmvg1nNqxfeSsvgN0DRqIDPHXf8r3uM5cLKuvY44sDppqLaHTiUyiA4nPZDgStrW4fIbrdLwtP3ra1zTlTqx9oCFsbdoGUgNidx0psYzQZ98Qc112OrNy8ogz8gA2MUBewv8EDR2f%2FyylfJIZCHhVmp34Nc9N5GeAoIIHZPXSOgsLGUprbjlDw6tN7pAymDdk4F4zCKDs%2Bp%2BFx64LccNeMIuR9c%2FV%2BA95Q0l9taWNZqzI1V91D8ILJsF1BkpQ%2BuE5PVZj50uDYo03Tu9PRHJhbGU9lImhc%2B5G13VEjlOZmdTPLSASE%2BfLvEt3hcbSRk%2BI2DCk%2BcbABjqkAQwCJz0v3SI%2FAd5qAPSYM9DDC1CMlEwdJqxaUMyHOKn4N39pU%2FCwWcMw5mz47qy1jFXTSTpMgSBMAokFM7hG9Q1aD2CwsX4V5ce6L4fwG1kIYbK7FmIFxDDw3CK6Ycv%2BTAxp0iojdTiJSEQfbsHZosJD6uAikD5zqBw82rBQMF%2FHibECH2%2F44k4GTwD48EYnGdAAV3xN86KVzekA8fhwmjfL7f6F&X-Amz-Signature=6519b9a308d8dd917de7ab9e968311c91c7d1f67c08e1678db6e7bcd71dec909&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHBIQTP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCLQvcwN1Vxj6pQ10wSRSGjkTXRezt%2F2nVP9n7vwSrn7gIhAMSZ4O%2BtLTn70Hi%2BHiP9NmGmdcpwvbDLNc%2BoTY3JRCb3KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwosGR67vs8Ef4%2BbGwq3AMJ5qwMY%2BaLTPQarMQCFesV%2By0w7Mss26ZwuAcantEj1VqokjpVHpM0M95mKk6z2rXkcG18Gxo8w0HEshwEkF8fRDr%2FiADsF%2FljwzV0oWgBXR5OYtQLvor5G%2F1D49O6p1%2FBpxSKSWlzV2Whv%2FNrgFOME9HfQGkrArMeqVjApDxMIbd3J6dzVA190Z3GJbuZn0oJLpmU794WhVpNx1IS0Hf9g%2F7pWO7Fphm1XWtql5hSiLz9ZYEaASb7N8BBliA%2F21SBGNe78FnU%2BszdXpXCIkbW92MVXBl4Ptq0v4axuQ%2FxwAnUsQnGLcX41VXtmvg1nNqxfeSsvgN0DRqIDPHXf8r3uM5cLKuvY44sDppqLaHTiUyiA4nPZDgStrW4fIbrdLwtP3ra1zTlTqx9oCFsbdoGUgNidx0psYzQZ98Qc112OrNy8ogz8gA2MUBewv8EDR2f%2FyylfJIZCHhVmp34Nc9N5GeAoIIHZPXSOgsLGUprbjlDw6tN7pAymDdk4F4zCKDs%2Bp%2BFx64LccNeMIuR9c%2FV%2BA95Q0l9taWNZqzI1V91D8ILJsF1BkpQ%2BuE5PVZj50uDYo03Tu9PRHJhbGU9lImhc%2B5G13VEjlOZmdTPLSASE%2BfLvEt3hcbSRk%2BI2DCk%2BcbABjqkAQwCJz0v3SI%2FAd5qAPSYM9DDC1CMlEwdJqxaUMyHOKn4N39pU%2FCwWcMw5mz47qy1jFXTSTpMgSBMAokFM7hG9Q1aD2CwsX4V5ce6L4fwG1kIYbK7FmIFxDDw3CK6Ycv%2BTAxp0iojdTiJSEQfbsHZosJD6uAikD5zqBw82rBQMF%2FHibECH2%2F44k4GTwD48EYnGdAAV3xN86KVzekA8fhwmjfL7f6F&X-Amz-Signature=8128328f6aa8b1e41a511a39d3d25e3c738d06c760e002ce60b2d92da2b38a80&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHBIQTP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCLQvcwN1Vxj6pQ10wSRSGjkTXRezt%2F2nVP9n7vwSrn7gIhAMSZ4O%2BtLTn70Hi%2BHiP9NmGmdcpwvbDLNc%2BoTY3JRCb3KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwosGR67vs8Ef4%2BbGwq3AMJ5qwMY%2BaLTPQarMQCFesV%2By0w7Mss26ZwuAcantEj1VqokjpVHpM0M95mKk6z2rXkcG18Gxo8w0HEshwEkF8fRDr%2FiADsF%2FljwzV0oWgBXR5OYtQLvor5G%2F1D49O6p1%2FBpxSKSWlzV2Whv%2FNrgFOME9HfQGkrArMeqVjApDxMIbd3J6dzVA190Z3GJbuZn0oJLpmU794WhVpNx1IS0Hf9g%2F7pWO7Fphm1XWtql5hSiLz9ZYEaASb7N8BBliA%2F21SBGNe78FnU%2BszdXpXCIkbW92MVXBl4Ptq0v4axuQ%2FxwAnUsQnGLcX41VXtmvg1nNqxfeSsvgN0DRqIDPHXf8r3uM5cLKuvY44sDppqLaHTiUyiA4nPZDgStrW4fIbrdLwtP3ra1zTlTqx9oCFsbdoGUgNidx0psYzQZ98Qc112OrNy8ogz8gA2MUBewv8EDR2f%2FyylfJIZCHhVmp34Nc9N5GeAoIIHZPXSOgsLGUprbjlDw6tN7pAymDdk4F4zCKDs%2Bp%2BFx64LccNeMIuR9c%2FV%2BA95Q0l9taWNZqzI1V91D8ILJsF1BkpQ%2BuE5PVZj50uDYo03Tu9PRHJhbGU9lImhc%2B5G13VEjlOZmdTPLSASE%2BfLvEt3hcbSRk%2BI2DCk%2BcbABjqkAQwCJz0v3SI%2FAd5qAPSYM9DDC1CMlEwdJqxaUMyHOKn4N39pU%2FCwWcMw5mz47qy1jFXTSTpMgSBMAokFM7hG9Q1aD2CwsX4V5ce6L4fwG1kIYbK7FmIFxDDw3CK6Ycv%2BTAxp0iojdTiJSEQfbsHZosJD6uAikD5zqBw82rBQMF%2FHibECH2%2F44k4GTwD48EYnGdAAV3xN86KVzekA8fhwmjfL7f6F&X-Amz-Signature=084375fa1906f0f188e5622098a69aa044a9831328f0cf96161905d765096565&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
