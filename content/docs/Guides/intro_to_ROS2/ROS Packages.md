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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQQDMXA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwlu0%2FvjkEKsWdDZrMB59rPS%2FTmpStvO%2BeVBoSvUSTvAiEAru3jr1Xg2Dou41hGrwC5Mw8xeBh9VgdwT1OIdnX87GMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPip70AOqOvgNwCRzircA2M%2BrQyj5S2JrCgkPcMnmrBSDkLMpPPQetFN5Zgkx%2B6oVEKheN6%2F85eR9dFSN47lKbYq6mguo2cpmF9DXjiabwcGnj6Roq8Pe%2FuSQ9XnG5PMqgwdJUnOlBckCyXuaDGAximhpTCyIrpp8zF%2BA%2BFaUBWBQ%2F8vgBDqYDNh17gaz1Pp%2Fw5r8cS4mVO0lky0zfCQOGHCUj2JYVqTFELaOo92GAXDy870AGpaSKzxrO81AOP7KQrl3NtwFyzD%2BT%2BOGn8pQ%2BVcKmthrxC%2FrCdOmpWRybXLDCGwwoGLN5PRQO6SmEVgQOtlF9lRGA2YkuffLMovcx1ehKSzbR2XUYnlfO6ZUl7as48lDT0eWi0ZxSV9KJ5BD3tY6J5CFNIUgSYABaI7WMvqJtKfPeu%2BOkah61K3w%2FK%2BW2Hinbdu7XcgTbfF6MkODtTSfbddBt024uR8pmOSO7t6H7Z46gb0eU7RJg0KkAzGp0GWl%2BFgAMtNOzLXvpL55exbQbomT9pAKy%2FcwdEEqKKmWatu%2BMQf%2F67RG7vetqoQR4dkit4yHbQ%2BJuVvPeDFH5%2B4IPTXtlnTLy1O3W%2BbJZk3CjNVeoIinNFVjvP4uowKX1L3M7hJhMM87ph405%2FTYov%2FfjOKjIJKzdXGMKLG%2BLwGOqUBbG5a82yDZjhIZ%2B3Cg746%2B2nigkCsWYh%2BSi6QZay0%2Bfqu0AA4R1E7FYpVKN5NiUdQUc9qKHph%2F5GxG%2Fkg5APvDZ1Ld5%2FQ9rNu0fePPTYMADBlEeFE5b%2FkA2W3d%2BECCHbLFeU4BCnBct5mUwSrQn%2FEZldjd8R%2FGdYKhVMVbiAzjh1kMkMaXlxKTgCXASUG%2Baoy%2FfmEsNAxZr2dxil4R3fdq2MDELl%2B&X-Amz-Signature=ab34aafcf49b1c053d21a10ae6e5367be9660ce4d2368b4f47257c112623e66c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQQDMXA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwlu0%2FvjkEKsWdDZrMB59rPS%2FTmpStvO%2BeVBoSvUSTvAiEAru3jr1Xg2Dou41hGrwC5Mw8xeBh9VgdwT1OIdnX87GMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPip70AOqOvgNwCRzircA2M%2BrQyj5S2JrCgkPcMnmrBSDkLMpPPQetFN5Zgkx%2B6oVEKheN6%2F85eR9dFSN47lKbYq6mguo2cpmF9DXjiabwcGnj6Roq8Pe%2FuSQ9XnG5PMqgwdJUnOlBckCyXuaDGAximhpTCyIrpp8zF%2BA%2BFaUBWBQ%2F8vgBDqYDNh17gaz1Pp%2Fw5r8cS4mVO0lky0zfCQOGHCUj2JYVqTFELaOo92GAXDy870AGpaSKzxrO81AOP7KQrl3NtwFyzD%2BT%2BOGn8pQ%2BVcKmthrxC%2FrCdOmpWRybXLDCGwwoGLN5PRQO6SmEVgQOtlF9lRGA2YkuffLMovcx1ehKSzbR2XUYnlfO6ZUl7as48lDT0eWi0ZxSV9KJ5BD3tY6J5CFNIUgSYABaI7WMvqJtKfPeu%2BOkah61K3w%2FK%2BW2Hinbdu7XcgTbfF6MkODtTSfbddBt024uR8pmOSO7t6H7Z46gb0eU7RJg0KkAzGp0GWl%2BFgAMtNOzLXvpL55exbQbomT9pAKy%2FcwdEEqKKmWatu%2BMQf%2F67RG7vetqoQR4dkit4yHbQ%2BJuVvPeDFH5%2B4IPTXtlnTLy1O3W%2BbJZk3CjNVeoIinNFVjvP4uowKX1L3M7hJhMM87ph405%2FTYov%2FfjOKjIJKzdXGMKLG%2BLwGOqUBbG5a82yDZjhIZ%2B3Cg746%2B2nigkCsWYh%2BSi6QZay0%2Bfqu0AA4R1E7FYpVKN5NiUdQUc9qKHph%2F5GxG%2Fkg5APvDZ1Ld5%2FQ9rNu0fePPTYMADBlEeFE5b%2FkA2W3d%2BECCHbLFeU4BCnBct5mUwSrQn%2FEZldjd8R%2FGdYKhVMVbiAzjh1kMkMaXlxKTgCXASUG%2Baoy%2FfmEsNAxZr2dxil4R3fdq2MDELl%2B&X-Amz-Signature=b3d4fcdbd5fd383fd1181c75a806a04b3c4691f6e2d7ff90d72483ff50426259&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQQDMXA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwlu0%2FvjkEKsWdDZrMB59rPS%2FTmpStvO%2BeVBoSvUSTvAiEAru3jr1Xg2Dou41hGrwC5Mw8xeBh9VgdwT1OIdnX87GMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPip70AOqOvgNwCRzircA2M%2BrQyj5S2JrCgkPcMnmrBSDkLMpPPQetFN5Zgkx%2B6oVEKheN6%2F85eR9dFSN47lKbYq6mguo2cpmF9DXjiabwcGnj6Roq8Pe%2FuSQ9XnG5PMqgwdJUnOlBckCyXuaDGAximhpTCyIrpp8zF%2BA%2BFaUBWBQ%2F8vgBDqYDNh17gaz1Pp%2Fw5r8cS4mVO0lky0zfCQOGHCUj2JYVqTFELaOo92GAXDy870AGpaSKzxrO81AOP7KQrl3NtwFyzD%2BT%2BOGn8pQ%2BVcKmthrxC%2FrCdOmpWRybXLDCGwwoGLN5PRQO6SmEVgQOtlF9lRGA2YkuffLMovcx1ehKSzbR2XUYnlfO6ZUl7as48lDT0eWi0ZxSV9KJ5BD3tY6J5CFNIUgSYABaI7WMvqJtKfPeu%2BOkah61K3w%2FK%2BW2Hinbdu7XcgTbfF6MkODtTSfbddBt024uR8pmOSO7t6H7Z46gb0eU7RJg0KkAzGp0GWl%2BFgAMtNOzLXvpL55exbQbomT9pAKy%2FcwdEEqKKmWatu%2BMQf%2F67RG7vetqoQR4dkit4yHbQ%2BJuVvPeDFH5%2B4IPTXtlnTLy1O3W%2BbJZk3CjNVeoIinNFVjvP4uowKX1L3M7hJhMM87ph405%2FTYov%2FfjOKjIJKzdXGMKLG%2BLwGOqUBbG5a82yDZjhIZ%2B3Cg746%2B2nigkCsWYh%2BSi6QZay0%2Bfqu0AA4R1E7FYpVKN5NiUdQUc9qKHph%2F5GxG%2Fkg5APvDZ1Ld5%2FQ9rNu0fePPTYMADBlEeFE5b%2FkA2W3d%2BECCHbLFeU4BCnBct5mUwSrQn%2FEZldjd8R%2FGdYKhVMVbiAzjh1kMkMaXlxKTgCXASUG%2Baoy%2FfmEsNAxZr2dxil4R3fdq2MDELl%2B&X-Amz-Signature=4fa034c36ec7abb48c126626eda04ebf4398a17f5302b72f0bad148cc4648f42&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQQDMXA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwlu0%2FvjkEKsWdDZrMB59rPS%2FTmpStvO%2BeVBoSvUSTvAiEAru3jr1Xg2Dou41hGrwC5Mw8xeBh9VgdwT1OIdnX87GMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPip70AOqOvgNwCRzircA2M%2BrQyj5S2JrCgkPcMnmrBSDkLMpPPQetFN5Zgkx%2B6oVEKheN6%2F85eR9dFSN47lKbYq6mguo2cpmF9DXjiabwcGnj6Roq8Pe%2FuSQ9XnG5PMqgwdJUnOlBckCyXuaDGAximhpTCyIrpp8zF%2BA%2BFaUBWBQ%2F8vgBDqYDNh17gaz1Pp%2Fw5r8cS4mVO0lky0zfCQOGHCUj2JYVqTFELaOo92GAXDy870AGpaSKzxrO81AOP7KQrl3NtwFyzD%2BT%2BOGn8pQ%2BVcKmthrxC%2FrCdOmpWRybXLDCGwwoGLN5PRQO6SmEVgQOtlF9lRGA2YkuffLMovcx1ehKSzbR2XUYnlfO6ZUl7as48lDT0eWi0ZxSV9KJ5BD3tY6J5CFNIUgSYABaI7WMvqJtKfPeu%2BOkah61K3w%2FK%2BW2Hinbdu7XcgTbfF6MkODtTSfbddBt024uR8pmOSO7t6H7Z46gb0eU7RJg0KkAzGp0GWl%2BFgAMtNOzLXvpL55exbQbomT9pAKy%2FcwdEEqKKmWatu%2BMQf%2F67RG7vetqoQR4dkit4yHbQ%2BJuVvPeDFH5%2B4IPTXtlnTLy1O3W%2BbJZk3CjNVeoIinNFVjvP4uowKX1L3M7hJhMM87ph405%2FTYov%2FfjOKjIJKzdXGMKLG%2BLwGOqUBbG5a82yDZjhIZ%2B3Cg746%2B2nigkCsWYh%2BSi6QZay0%2Bfqu0AA4R1E7FYpVKN5NiUdQUc9qKHph%2F5GxG%2Fkg5APvDZ1Ld5%2FQ9rNu0fePPTYMADBlEeFE5b%2FkA2W3d%2BECCHbLFeU4BCnBct5mUwSrQn%2FEZldjd8R%2FGdYKhVMVbiAzjh1kMkMaXlxKTgCXASUG%2Baoy%2FfmEsNAxZr2dxil4R3fdq2MDELl%2B&X-Amz-Signature=f06feae7189e89851364ef483c9f7c27adb6df92674bfa8a6b5949daead530d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQQDMXA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwlu0%2FvjkEKsWdDZrMB59rPS%2FTmpStvO%2BeVBoSvUSTvAiEAru3jr1Xg2Dou41hGrwC5Mw8xeBh9VgdwT1OIdnX87GMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPip70AOqOvgNwCRzircA2M%2BrQyj5S2JrCgkPcMnmrBSDkLMpPPQetFN5Zgkx%2B6oVEKheN6%2F85eR9dFSN47lKbYq6mguo2cpmF9DXjiabwcGnj6Roq8Pe%2FuSQ9XnG5PMqgwdJUnOlBckCyXuaDGAximhpTCyIrpp8zF%2BA%2BFaUBWBQ%2F8vgBDqYDNh17gaz1Pp%2Fw5r8cS4mVO0lky0zfCQOGHCUj2JYVqTFELaOo92GAXDy870AGpaSKzxrO81AOP7KQrl3NtwFyzD%2BT%2BOGn8pQ%2BVcKmthrxC%2FrCdOmpWRybXLDCGwwoGLN5PRQO6SmEVgQOtlF9lRGA2YkuffLMovcx1ehKSzbR2XUYnlfO6ZUl7as48lDT0eWi0ZxSV9KJ5BD3tY6J5CFNIUgSYABaI7WMvqJtKfPeu%2BOkah61K3w%2FK%2BW2Hinbdu7XcgTbfF6MkODtTSfbddBt024uR8pmOSO7t6H7Z46gb0eU7RJg0KkAzGp0GWl%2BFgAMtNOzLXvpL55exbQbomT9pAKy%2FcwdEEqKKmWatu%2BMQf%2F67RG7vetqoQR4dkit4yHbQ%2BJuVvPeDFH5%2B4IPTXtlnTLy1O3W%2BbJZk3CjNVeoIinNFVjvP4uowKX1L3M7hJhMM87ph405%2FTYov%2FfjOKjIJKzdXGMKLG%2BLwGOqUBbG5a82yDZjhIZ%2B3Cg746%2B2nigkCsWYh%2BSi6QZay0%2Bfqu0AA4R1E7FYpVKN5NiUdQUc9qKHph%2F5GxG%2Fkg5APvDZ1Ld5%2FQ9rNu0fePPTYMADBlEeFE5b%2FkA2W3d%2BECCHbLFeU4BCnBct5mUwSrQn%2FEZldjd8R%2FGdYKhVMVbiAzjh1kMkMaXlxKTgCXASUG%2Baoy%2FfmEsNAxZr2dxil4R3fdq2MDELl%2B&X-Amz-Signature=e0a77e620f84051f4d41da7074a82d63d60a24c4141073cc8dc93e8b8c796035&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQQDMXA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwlu0%2FvjkEKsWdDZrMB59rPS%2FTmpStvO%2BeVBoSvUSTvAiEAru3jr1Xg2Dou41hGrwC5Mw8xeBh9VgdwT1OIdnX87GMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPip70AOqOvgNwCRzircA2M%2BrQyj5S2JrCgkPcMnmrBSDkLMpPPQetFN5Zgkx%2B6oVEKheN6%2F85eR9dFSN47lKbYq6mguo2cpmF9DXjiabwcGnj6Roq8Pe%2FuSQ9XnG5PMqgwdJUnOlBckCyXuaDGAximhpTCyIrpp8zF%2BA%2BFaUBWBQ%2F8vgBDqYDNh17gaz1Pp%2Fw5r8cS4mVO0lky0zfCQOGHCUj2JYVqTFELaOo92GAXDy870AGpaSKzxrO81AOP7KQrl3NtwFyzD%2BT%2BOGn8pQ%2BVcKmthrxC%2FrCdOmpWRybXLDCGwwoGLN5PRQO6SmEVgQOtlF9lRGA2YkuffLMovcx1ehKSzbR2XUYnlfO6ZUl7as48lDT0eWi0ZxSV9KJ5BD3tY6J5CFNIUgSYABaI7WMvqJtKfPeu%2BOkah61K3w%2FK%2BW2Hinbdu7XcgTbfF6MkODtTSfbddBt024uR8pmOSO7t6H7Z46gb0eU7RJg0KkAzGp0GWl%2BFgAMtNOzLXvpL55exbQbomT9pAKy%2FcwdEEqKKmWatu%2BMQf%2F67RG7vetqoQR4dkit4yHbQ%2BJuVvPeDFH5%2B4IPTXtlnTLy1O3W%2BbJZk3CjNVeoIinNFVjvP4uowKX1L3M7hJhMM87ph405%2FTYov%2FfjOKjIJKzdXGMKLG%2BLwGOqUBbG5a82yDZjhIZ%2B3Cg746%2B2nigkCsWYh%2BSi6QZay0%2Bfqu0AA4R1E7FYpVKN5NiUdQUc9qKHph%2F5GxG%2Fkg5APvDZ1Ld5%2FQ9rNu0fePPTYMADBlEeFE5b%2FkA2W3d%2BECCHbLFeU4BCnBct5mUwSrQn%2FEZldjd8R%2FGdYKhVMVbiAzjh1kMkMaXlxKTgCXASUG%2Baoy%2FfmEsNAxZr2dxil4R3fdq2MDELl%2B&X-Amz-Signature=bc6a4d6dd42b821657c85b8f9ca76de6fd5cf2976696d227a791e010b36e4da0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQQDMXA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwlu0%2FvjkEKsWdDZrMB59rPS%2FTmpStvO%2BeVBoSvUSTvAiEAru3jr1Xg2Dou41hGrwC5Mw8xeBh9VgdwT1OIdnX87GMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPip70AOqOvgNwCRzircA2M%2BrQyj5S2JrCgkPcMnmrBSDkLMpPPQetFN5Zgkx%2B6oVEKheN6%2F85eR9dFSN47lKbYq6mguo2cpmF9DXjiabwcGnj6Roq8Pe%2FuSQ9XnG5PMqgwdJUnOlBckCyXuaDGAximhpTCyIrpp8zF%2BA%2BFaUBWBQ%2F8vgBDqYDNh17gaz1Pp%2Fw5r8cS4mVO0lky0zfCQOGHCUj2JYVqTFELaOo92GAXDy870AGpaSKzxrO81AOP7KQrl3NtwFyzD%2BT%2BOGn8pQ%2BVcKmthrxC%2FrCdOmpWRybXLDCGwwoGLN5PRQO6SmEVgQOtlF9lRGA2YkuffLMovcx1ehKSzbR2XUYnlfO6ZUl7as48lDT0eWi0ZxSV9KJ5BD3tY6J5CFNIUgSYABaI7WMvqJtKfPeu%2BOkah61K3w%2FK%2BW2Hinbdu7XcgTbfF6MkODtTSfbddBt024uR8pmOSO7t6H7Z46gb0eU7RJg0KkAzGp0GWl%2BFgAMtNOzLXvpL55exbQbomT9pAKy%2FcwdEEqKKmWatu%2BMQf%2F67RG7vetqoQR4dkit4yHbQ%2BJuVvPeDFH5%2B4IPTXtlnTLy1O3W%2BbJZk3CjNVeoIinNFVjvP4uowKX1L3M7hJhMM87ph405%2FTYov%2FfjOKjIJKzdXGMKLG%2BLwGOqUBbG5a82yDZjhIZ%2B3Cg746%2B2nigkCsWYh%2BSi6QZay0%2Bfqu0AA4R1E7FYpVKN5NiUdQUc9qKHph%2F5GxG%2Fkg5APvDZ1Ld5%2FQ9rNu0fePPTYMADBlEeFE5b%2FkA2W3d%2BECCHbLFeU4BCnBct5mUwSrQn%2FEZldjd8R%2FGdYKhVMVbiAzjh1kMkMaXlxKTgCXASUG%2Baoy%2FfmEsNAxZr2dxil4R3fdq2MDELl%2B&X-Amz-Signature=b1cb0de4ee97d2d942900602090765a261790123a3fd8cb0d7d1e6857f6e5bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
