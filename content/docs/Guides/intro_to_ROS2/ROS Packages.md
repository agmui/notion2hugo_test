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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPYTJLS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAr4%2Fh70Nd7N8CVg3dzQZrDJJx1eHPOJLjvzIcwochGAAiEA%2F2WTQr22EiCdlI02iIsw0mPi0H5qLOtmM9y28ERGLIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLqi%2Bifwk51AsEf%2BnSrcA%2Bp9RiREhrIYTf%2FRuBV1eXcTAz4eodg0jberX2CvBcaa72S1lJOGWtnj7PB1uRCea7HuoeAguC%2FN2jxuXT5exwL9atyenEQbVv3kKuVJnVQNarfBlDeV8%2FyT9DIVkHw0Zh4hbpSN08GKIN0CitBTvZUSu3teJg1aJBQG8bPytkLfbcW%2FcJI%2BDAQ8r%2B1o5hR2WbTb2KLAhPhDOwyX0Zmmzkm6d4FpRi%2BbE5omoaMilENTmeSyTrqto4KTggO3LsEUlzEfd72xdYz2%2FEVfgL96JOHfkMa6BgngHZ2X3yWRzI7GrwTGBOwdf1x2YNzklj%2BUiX7hcGu8cdGUFIhbsqUfksDKnrObntsxAy9A9Kt2pUvMc2SlDsjtXyfAyq6L2URy5TR5zqt3hBY2CvonEhtII5vyqzrRJAl13dlMNFiUkeTwM9dNPFr0R5b7KKMQ6Kfmz2VjGfYOz%2BpoSG%2Fw85%2FnK7DeuYxMmnLn5kItmcEmvCllVCQqtWjGpay80ekISNZlNr1xS4gZJkO5WaWptA8hxXGI69wbzmzSdqSmYC2J8TTrbSJsVIn9h3SQezXaFnQWIYjDJAwh4YAAgn1SyBDUwceRUkUjgifQfGPMhuUREBLfAsV72E9KEP6nnnAHMMeb9cIGOqUBVSNVEfGCuVALbdk2y2jxsOYMURNHQJ%2F555qSk3WoOD5YSuhapf76pZEeCYgP%2Bs8oZ%2F25KV8pnP563bidBC6pR%2B%2FksP9E2EwdRyf4U%2BA0bORhSHuFGzV%2FauAw8ZsvIdcLcMeOpwaJqzfmmOHRITijlGUmuIXtFw1QT4vFfu7uxZujtvahLjhkMFsZPuPdVAiQn%2F7WzFPyWER3Y3cu831ABstu4fnr&X-Amz-Signature=8b8a4ed8157ba6674309e85d818b9e6cf0fc7b7017a00cda64c3db62e7f69740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPYTJLS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAr4%2Fh70Nd7N8CVg3dzQZrDJJx1eHPOJLjvzIcwochGAAiEA%2F2WTQr22EiCdlI02iIsw0mPi0H5qLOtmM9y28ERGLIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLqi%2Bifwk51AsEf%2BnSrcA%2Bp9RiREhrIYTf%2FRuBV1eXcTAz4eodg0jberX2CvBcaa72S1lJOGWtnj7PB1uRCea7HuoeAguC%2FN2jxuXT5exwL9atyenEQbVv3kKuVJnVQNarfBlDeV8%2FyT9DIVkHw0Zh4hbpSN08GKIN0CitBTvZUSu3teJg1aJBQG8bPytkLfbcW%2FcJI%2BDAQ8r%2B1o5hR2WbTb2KLAhPhDOwyX0Zmmzkm6d4FpRi%2BbE5omoaMilENTmeSyTrqto4KTggO3LsEUlzEfd72xdYz2%2FEVfgL96JOHfkMa6BgngHZ2X3yWRzI7GrwTGBOwdf1x2YNzklj%2BUiX7hcGu8cdGUFIhbsqUfksDKnrObntsxAy9A9Kt2pUvMc2SlDsjtXyfAyq6L2URy5TR5zqt3hBY2CvonEhtII5vyqzrRJAl13dlMNFiUkeTwM9dNPFr0R5b7KKMQ6Kfmz2VjGfYOz%2BpoSG%2Fw85%2FnK7DeuYxMmnLn5kItmcEmvCllVCQqtWjGpay80ekISNZlNr1xS4gZJkO5WaWptA8hxXGI69wbzmzSdqSmYC2J8TTrbSJsVIn9h3SQezXaFnQWIYjDJAwh4YAAgn1SyBDUwceRUkUjgifQfGPMhuUREBLfAsV72E9KEP6nnnAHMMeb9cIGOqUBVSNVEfGCuVALbdk2y2jxsOYMURNHQJ%2F555qSk3WoOD5YSuhapf76pZEeCYgP%2Bs8oZ%2F25KV8pnP563bidBC6pR%2B%2FksP9E2EwdRyf4U%2BA0bORhSHuFGzV%2FauAw8ZsvIdcLcMeOpwaJqzfmmOHRITijlGUmuIXtFw1QT4vFfu7uxZujtvahLjhkMFsZPuPdVAiQn%2F7WzFPyWER3Y3cu831ABstu4fnr&X-Amz-Signature=42dd17cb68abce1c51ed7df28f54d5e7f8b76ee3acced0fc2cf500a8dd953d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPYTJLS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAr4%2Fh70Nd7N8CVg3dzQZrDJJx1eHPOJLjvzIcwochGAAiEA%2F2WTQr22EiCdlI02iIsw0mPi0H5qLOtmM9y28ERGLIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLqi%2Bifwk51AsEf%2BnSrcA%2Bp9RiREhrIYTf%2FRuBV1eXcTAz4eodg0jberX2CvBcaa72S1lJOGWtnj7PB1uRCea7HuoeAguC%2FN2jxuXT5exwL9atyenEQbVv3kKuVJnVQNarfBlDeV8%2FyT9DIVkHw0Zh4hbpSN08GKIN0CitBTvZUSu3teJg1aJBQG8bPytkLfbcW%2FcJI%2BDAQ8r%2B1o5hR2WbTb2KLAhPhDOwyX0Zmmzkm6d4FpRi%2BbE5omoaMilENTmeSyTrqto4KTggO3LsEUlzEfd72xdYz2%2FEVfgL96JOHfkMa6BgngHZ2X3yWRzI7GrwTGBOwdf1x2YNzklj%2BUiX7hcGu8cdGUFIhbsqUfksDKnrObntsxAy9A9Kt2pUvMc2SlDsjtXyfAyq6L2URy5TR5zqt3hBY2CvonEhtII5vyqzrRJAl13dlMNFiUkeTwM9dNPFr0R5b7KKMQ6Kfmz2VjGfYOz%2BpoSG%2Fw85%2FnK7DeuYxMmnLn5kItmcEmvCllVCQqtWjGpay80ekISNZlNr1xS4gZJkO5WaWptA8hxXGI69wbzmzSdqSmYC2J8TTrbSJsVIn9h3SQezXaFnQWIYjDJAwh4YAAgn1SyBDUwceRUkUjgifQfGPMhuUREBLfAsV72E9KEP6nnnAHMMeb9cIGOqUBVSNVEfGCuVALbdk2y2jxsOYMURNHQJ%2F555qSk3WoOD5YSuhapf76pZEeCYgP%2Bs8oZ%2F25KV8pnP563bidBC6pR%2B%2FksP9E2EwdRyf4U%2BA0bORhSHuFGzV%2FauAw8ZsvIdcLcMeOpwaJqzfmmOHRITijlGUmuIXtFw1QT4vFfu7uxZujtvahLjhkMFsZPuPdVAiQn%2F7WzFPyWER3Y3cu831ABstu4fnr&X-Amz-Signature=0970225e8856a4ebfe8b49af57dccd4477738cd8b3d0367e4931a8b3486d9306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPYTJLS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAr4%2Fh70Nd7N8CVg3dzQZrDJJx1eHPOJLjvzIcwochGAAiEA%2F2WTQr22EiCdlI02iIsw0mPi0H5qLOtmM9y28ERGLIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLqi%2Bifwk51AsEf%2BnSrcA%2Bp9RiREhrIYTf%2FRuBV1eXcTAz4eodg0jberX2CvBcaa72S1lJOGWtnj7PB1uRCea7HuoeAguC%2FN2jxuXT5exwL9atyenEQbVv3kKuVJnVQNarfBlDeV8%2FyT9DIVkHw0Zh4hbpSN08GKIN0CitBTvZUSu3teJg1aJBQG8bPytkLfbcW%2FcJI%2BDAQ8r%2B1o5hR2WbTb2KLAhPhDOwyX0Zmmzkm6d4FpRi%2BbE5omoaMilENTmeSyTrqto4KTggO3LsEUlzEfd72xdYz2%2FEVfgL96JOHfkMa6BgngHZ2X3yWRzI7GrwTGBOwdf1x2YNzklj%2BUiX7hcGu8cdGUFIhbsqUfksDKnrObntsxAy9A9Kt2pUvMc2SlDsjtXyfAyq6L2URy5TR5zqt3hBY2CvonEhtII5vyqzrRJAl13dlMNFiUkeTwM9dNPFr0R5b7KKMQ6Kfmz2VjGfYOz%2BpoSG%2Fw85%2FnK7DeuYxMmnLn5kItmcEmvCllVCQqtWjGpay80ekISNZlNr1xS4gZJkO5WaWptA8hxXGI69wbzmzSdqSmYC2J8TTrbSJsVIn9h3SQezXaFnQWIYjDJAwh4YAAgn1SyBDUwceRUkUjgifQfGPMhuUREBLfAsV72E9KEP6nnnAHMMeb9cIGOqUBVSNVEfGCuVALbdk2y2jxsOYMURNHQJ%2F555qSk3WoOD5YSuhapf76pZEeCYgP%2Bs8oZ%2F25KV8pnP563bidBC6pR%2B%2FksP9E2EwdRyf4U%2BA0bORhSHuFGzV%2FauAw8ZsvIdcLcMeOpwaJqzfmmOHRITijlGUmuIXtFw1QT4vFfu7uxZujtvahLjhkMFsZPuPdVAiQn%2F7WzFPyWER3Y3cu831ABstu4fnr&X-Amz-Signature=2e63d770a37c23e9d76fe0a405df5df5297c2a4e2996719c7bbe5b696e6030a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPYTJLS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAr4%2Fh70Nd7N8CVg3dzQZrDJJx1eHPOJLjvzIcwochGAAiEA%2F2WTQr22EiCdlI02iIsw0mPi0H5qLOtmM9y28ERGLIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLqi%2Bifwk51AsEf%2BnSrcA%2Bp9RiREhrIYTf%2FRuBV1eXcTAz4eodg0jberX2CvBcaa72S1lJOGWtnj7PB1uRCea7HuoeAguC%2FN2jxuXT5exwL9atyenEQbVv3kKuVJnVQNarfBlDeV8%2FyT9DIVkHw0Zh4hbpSN08GKIN0CitBTvZUSu3teJg1aJBQG8bPytkLfbcW%2FcJI%2BDAQ8r%2B1o5hR2WbTb2KLAhPhDOwyX0Zmmzkm6d4FpRi%2BbE5omoaMilENTmeSyTrqto4KTggO3LsEUlzEfd72xdYz2%2FEVfgL96JOHfkMa6BgngHZ2X3yWRzI7GrwTGBOwdf1x2YNzklj%2BUiX7hcGu8cdGUFIhbsqUfksDKnrObntsxAy9A9Kt2pUvMc2SlDsjtXyfAyq6L2URy5TR5zqt3hBY2CvonEhtII5vyqzrRJAl13dlMNFiUkeTwM9dNPFr0R5b7KKMQ6Kfmz2VjGfYOz%2BpoSG%2Fw85%2FnK7DeuYxMmnLn5kItmcEmvCllVCQqtWjGpay80ekISNZlNr1xS4gZJkO5WaWptA8hxXGI69wbzmzSdqSmYC2J8TTrbSJsVIn9h3SQezXaFnQWIYjDJAwh4YAAgn1SyBDUwceRUkUjgifQfGPMhuUREBLfAsV72E9KEP6nnnAHMMeb9cIGOqUBVSNVEfGCuVALbdk2y2jxsOYMURNHQJ%2F555qSk3WoOD5YSuhapf76pZEeCYgP%2Bs8oZ%2F25KV8pnP563bidBC6pR%2B%2FksP9E2EwdRyf4U%2BA0bORhSHuFGzV%2FauAw8ZsvIdcLcMeOpwaJqzfmmOHRITijlGUmuIXtFw1QT4vFfu7uxZujtvahLjhkMFsZPuPdVAiQn%2F7WzFPyWER3Y3cu831ABstu4fnr&X-Amz-Signature=16985fa975e14417494efe01e72b3be63cd5873d2e439c18c0e5a7eb46fcba8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPYTJLS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAr4%2Fh70Nd7N8CVg3dzQZrDJJx1eHPOJLjvzIcwochGAAiEA%2F2WTQr22EiCdlI02iIsw0mPi0H5qLOtmM9y28ERGLIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLqi%2Bifwk51AsEf%2BnSrcA%2Bp9RiREhrIYTf%2FRuBV1eXcTAz4eodg0jberX2CvBcaa72S1lJOGWtnj7PB1uRCea7HuoeAguC%2FN2jxuXT5exwL9atyenEQbVv3kKuVJnVQNarfBlDeV8%2FyT9DIVkHw0Zh4hbpSN08GKIN0CitBTvZUSu3teJg1aJBQG8bPytkLfbcW%2FcJI%2BDAQ8r%2B1o5hR2WbTb2KLAhPhDOwyX0Zmmzkm6d4FpRi%2BbE5omoaMilENTmeSyTrqto4KTggO3LsEUlzEfd72xdYz2%2FEVfgL96JOHfkMa6BgngHZ2X3yWRzI7GrwTGBOwdf1x2YNzklj%2BUiX7hcGu8cdGUFIhbsqUfksDKnrObntsxAy9A9Kt2pUvMc2SlDsjtXyfAyq6L2URy5TR5zqt3hBY2CvonEhtII5vyqzrRJAl13dlMNFiUkeTwM9dNPFr0R5b7KKMQ6Kfmz2VjGfYOz%2BpoSG%2Fw85%2FnK7DeuYxMmnLn5kItmcEmvCllVCQqtWjGpay80ekISNZlNr1xS4gZJkO5WaWptA8hxXGI69wbzmzSdqSmYC2J8TTrbSJsVIn9h3SQezXaFnQWIYjDJAwh4YAAgn1SyBDUwceRUkUjgifQfGPMhuUREBLfAsV72E9KEP6nnnAHMMeb9cIGOqUBVSNVEfGCuVALbdk2y2jxsOYMURNHQJ%2F555qSk3WoOD5YSuhapf76pZEeCYgP%2Bs8oZ%2F25KV8pnP563bidBC6pR%2B%2FksP9E2EwdRyf4U%2BA0bORhSHuFGzV%2FauAw8ZsvIdcLcMeOpwaJqzfmmOHRITijlGUmuIXtFw1QT4vFfu7uxZujtvahLjhkMFsZPuPdVAiQn%2F7WzFPyWER3Y3cu831ABstu4fnr&X-Amz-Signature=131b59a82699988fe5444078d14bb02d17b6e633437bd46e934afef0ddf0f7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPYTJLS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAr4%2Fh70Nd7N8CVg3dzQZrDJJx1eHPOJLjvzIcwochGAAiEA%2F2WTQr22EiCdlI02iIsw0mPi0H5qLOtmM9y28ERGLIAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLqi%2Bifwk51AsEf%2BnSrcA%2Bp9RiREhrIYTf%2FRuBV1eXcTAz4eodg0jberX2CvBcaa72S1lJOGWtnj7PB1uRCea7HuoeAguC%2FN2jxuXT5exwL9atyenEQbVv3kKuVJnVQNarfBlDeV8%2FyT9DIVkHw0Zh4hbpSN08GKIN0CitBTvZUSu3teJg1aJBQG8bPytkLfbcW%2FcJI%2BDAQ8r%2B1o5hR2WbTb2KLAhPhDOwyX0Zmmzkm6d4FpRi%2BbE5omoaMilENTmeSyTrqto4KTggO3LsEUlzEfd72xdYz2%2FEVfgL96JOHfkMa6BgngHZ2X3yWRzI7GrwTGBOwdf1x2YNzklj%2BUiX7hcGu8cdGUFIhbsqUfksDKnrObntsxAy9A9Kt2pUvMc2SlDsjtXyfAyq6L2URy5TR5zqt3hBY2CvonEhtII5vyqzrRJAl13dlMNFiUkeTwM9dNPFr0R5b7KKMQ6Kfmz2VjGfYOz%2BpoSG%2Fw85%2FnK7DeuYxMmnLn5kItmcEmvCllVCQqtWjGpay80ekISNZlNr1xS4gZJkO5WaWptA8hxXGI69wbzmzSdqSmYC2J8TTrbSJsVIn9h3SQezXaFnQWIYjDJAwh4YAAgn1SyBDUwceRUkUjgifQfGPMhuUREBLfAsV72E9KEP6nnnAHMMeb9cIGOqUBVSNVEfGCuVALbdk2y2jxsOYMURNHQJ%2F555qSk3WoOD5YSuhapf76pZEeCYgP%2Bs8oZ%2F25KV8pnP563bidBC6pR%2B%2FksP9E2EwdRyf4U%2BA0bORhSHuFGzV%2FauAw8ZsvIdcLcMeOpwaJqzfmmOHRITijlGUmuIXtFw1QT4vFfu7uxZujtvahLjhkMFsZPuPdVAiQn%2F7WzFPyWER3Y3cu831ABstu4fnr&X-Amz-Signature=632f99f2168bf788d1e130fe5cda997aa71c7093b6eb9c1f1a35f5c7c295fa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
