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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIANOW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2KuugH3kfXOIXbu%2ByqKkRZ%2Fe%2FNfU0mB3G5Jsc7KkdgIgUvACY%2BmkSdoU6wYjZ3A80gcqZ1Jd%2FqLnSmqQE%2FPin%2BYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMFRZDiVcYdwuYh27ircA4EEhPn5npJ3BIUI%2BkJsX3l6EwZfuOjXyQKwrOrrteLy3IDo0yvMgny98IIC3oiRrmf1tO9yE61RvLDkxEG2uhI7qPuzwG2VnjcQdIz9F%2FDnQ3BFUdMAY0Uy6na1WQUnBRkGqzjZA8p2AojhNQ%2F5Trxapb%2FO7mU02%2BJF1yK4B2%2BNSRudWpFH3JK%2F31e9mBHvYbLn0eKOPh2dhfvMQeGxdrH7JQBFUQdNPTNm%2Bzfz2KLZnGgQGvLdcl1PWhJ%2FvCpDRxT%2FcIu7FeV9%2BFuw3gJ6xgcws%2F5TaoNOSVILcbN61CoSPB4%2BcxShjZf4Irr4TS4F%2F1Ha%2BPJpAqq95aQ1mdf6ztMoktOCQSbPgySkR%2Fjx3AH7EyRcb6amMzaQEDymyTuAlDPPfFrYXyYIQDkowStgAxzjdq%2FWCS2TCtuenfofUyj0N8ObHQ3vSVUG%2BeTuLQboT5%2F%2FqMHPoa3DxWchHPzv0iy%2FOjmyPRRKj67nxDAMbKWPW3Gwj1TyXuJW%2B9CcEwrq8UYJKWp5U5vyVKQQ1lRNSj2g7u6RruyL5kNY%2FniSRTnOjvw7UssdOd4U7NXzlcJ2DmAWgKq7lctN5M1yb4aMbJUg38BU1%2FND%2FhJvMRBnysKIY9wvNzZ9yLgHwEDCMO%2Bcu8QGOqUBAyM5k3PCY%2BODMwGFoIe0SFI9l1Caz%2B8aBJL9KX3vq%2Bu3Jh0rSm1jnX8aOD339me%2BrdodGzlXw0Y78QuIO5nhyf%2FRxxRe5Y1Oqetd9u3%2FEUJmIenit8ruvpEr%2Ff5ddJTCIWjjlkx%2F8nmI4bFB70fQo74UnnXecVXJBn77PBvstO6%2F%2FBq4OgwMd3CG%2BfjcwQ3%2FXdX2iun6SHQR5W3Iq0EKTQF7IVJf&X-Amz-Signature=07c1e7736b2d2b86975fd8c5173cb5b7e367760c8beea428bd9a5a07537ec533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIANOW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2KuugH3kfXOIXbu%2ByqKkRZ%2Fe%2FNfU0mB3G5Jsc7KkdgIgUvACY%2BmkSdoU6wYjZ3A80gcqZ1Jd%2FqLnSmqQE%2FPin%2BYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMFRZDiVcYdwuYh27ircA4EEhPn5npJ3BIUI%2BkJsX3l6EwZfuOjXyQKwrOrrteLy3IDo0yvMgny98IIC3oiRrmf1tO9yE61RvLDkxEG2uhI7qPuzwG2VnjcQdIz9F%2FDnQ3BFUdMAY0Uy6na1WQUnBRkGqzjZA8p2AojhNQ%2F5Trxapb%2FO7mU02%2BJF1yK4B2%2BNSRudWpFH3JK%2F31e9mBHvYbLn0eKOPh2dhfvMQeGxdrH7JQBFUQdNPTNm%2Bzfz2KLZnGgQGvLdcl1PWhJ%2FvCpDRxT%2FcIu7FeV9%2BFuw3gJ6xgcws%2F5TaoNOSVILcbN61CoSPB4%2BcxShjZf4Irr4TS4F%2F1Ha%2BPJpAqq95aQ1mdf6ztMoktOCQSbPgySkR%2Fjx3AH7EyRcb6amMzaQEDymyTuAlDPPfFrYXyYIQDkowStgAxzjdq%2FWCS2TCtuenfofUyj0N8ObHQ3vSVUG%2BeTuLQboT5%2F%2FqMHPoa3DxWchHPzv0iy%2FOjmyPRRKj67nxDAMbKWPW3Gwj1TyXuJW%2B9CcEwrq8UYJKWp5U5vyVKQQ1lRNSj2g7u6RruyL5kNY%2FniSRTnOjvw7UssdOd4U7NXzlcJ2DmAWgKq7lctN5M1yb4aMbJUg38BU1%2FND%2FhJvMRBnysKIY9wvNzZ9yLgHwEDCMO%2Bcu8QGOqUBAyM5k3PCY%2BODMwGFoIe0SFI9l1Caz%2B8aBJL9KX3vq%2Bu3Jh0rSm1jnX8aOD339me%2BrdodGzlXw0Y78QuIO5nhyf%2FRxxRe5Y1Oqetd9u3%2FEUJmIenit8ruvpEr%2Ff5ddJTCIWjjlkx%2F8nmI4bFB70fQo74UnnXecVXJBn77PBvstO6%2F%2FBq4OgwMd3CG%2BfjcwQ3%2FXdX2iun6SHQR5W3Iq0EKTQF7IVJf&X-Amz-Signature=793a41918153063422addb9731926fb7d29d077eef6e7490454b978cd6c13ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIANOW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2KuugH3kfXOIXbu%2ByqKkRZ%2Fe%2FNfU0mB3G5Jsc7KkdgIgUvACY%2BmkSdoU6wYjZ3A80gcqZ1Jd%2FqLnSmqQE%2FPin%2BYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMFRZDiVcYdwuYh27ircA4EEhPn5npJ3BIUI%2BkJsX3l6EwZfuOjXyQKwrOrrteLy3IDo0yvMgny98IIC3oiRrmf1tO9yE61RvLDkxEG2uhI7qPuzwG2VnjcQdIz9F%2FDnQ3BFUdMAY0Uy6na1WQUnBRkGqzjZA8p2AojhNQ%2F5Trxapb%2FO7mU02%2BJF1yK4B2%2BNSRudWpFH3JK%2F31e9mBHvYbLn0eKOPh2dhfvMQeGxdrH7JQBFUQdNPTNm%2Bzfz2KLZnGgQGvLdcl1PWhJ%2FvCpDRxT%2FcIu7FeV9%2BFuw3gJ6xgcws%2F5TaoNOSVILcbN61CoSPB4%2BcxShjZf4Irr4TS4F%2F1Ha%2BPJpAqq95aQ1mdf6ztMoktOCQSbPgySkR%2Fjx3AH7EyRcb6amMzaQEDymyTuAlDPPfFrYXyYIQDkowStgAxzjdq%2FWCS2TCtuenfofUyj0N8ObHQ3vSVUG%2BeTuLQboT5%2F%2FqMHPoa3DxWchHPzv0iy%2FOjmyPRRKj67nxDAMbKWPW3Gwj1TyXuJW%2B9CcEwrq8UYJKWp5U5vyVKQQ1lRNSj2g7u6RruyL5kNY%2FniSRTnOjvw7UssdOd4U7NXzlcJ2DmAWgKq7lctN5M1yb4aMbJUg38BU1%2FND%2FhJvMRBnysKIY9wvNzZ9yLgHwEDCMO%2Bcu8QGOqUBAyM5k3PCY%2BODMwGFoIe0SFI9l1Caz%2B8aBJL9KX3vq%2Bu3Jh0rSm1jnX8aOD339me%2BrdodGzlXw0Y78QuIO5nhyf%2FRxxRe5Y1Oqetd9u3%2FEUJmIenit8ruvpEr%2Ff5ddJTCIWjjlkx%2F8nmI4bFB70fQo74UnnXecVXJBn77PBvstO6%2F%2FBq4OgwMd3CG%2BfjcwQ3%2FXdX2iun6SHQR5W3Iq0EKTQF7IVJf&X-Amz-Signature=5b03631e2adc78011b5c2cac7407c5f3b09a4f81ab54958a785f8eb832ec3d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIANOW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2KuugH3kfXOIXbu%2ByqKkRZ%2Fe%2FNfU0mB3G5Jsc7KkdgIgUvACY%2BmkSdoU6wYjZ3A80gcqZ1Jd%2FqLnSmqQE%2FPin%2BYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMFRZDiVcYdwuYh27ircA4EEhPn5npJ3BIUI%2BkJsX3l6EwZfuOjXyQKwrOrrteLy3IDo0yvMgny98IIC3oiRrmf1tO9yE61RvLDkxEG2uhI7qPuzwG2VnjcQdIz9F%2FDnQ3BFUdMAY0Uy6na1WQUnBRkGqzjZA8p2AojhNQ%2F5Trxapb%2FO7mU02%2BJF1yK4B2%2BNSRudWpFH3JK%2F31e9mBHvYbLn0eKOPh2dhfvMQeGxdrH7JQBFUQdNPTNm%2Bzfz2KLZnGgQGvLdcl1PWhJ%2FvCpDRxT%2FcIu7FeV9%2BFuw3gJ6xgcws%2F5TaoNOSVILcbN61CoSPB4%2BcxShjZf4Irr4TS4F%2F1Ha%2BPJpAqq95aQ1mdf6ztMoktOCQSbPgySkR%2Fjx3AH7EyRcb6amMzaQEDymyTuAlDPPfFrYXyYIQDkowStgAxzjdq%2FWCS2TCtuenfofUyj0N8ObHQ3vSVUG%2BeTuLQboT5%2F%2FqMHPoa3DxWchHPzv0iy%2FOjmyPRRKj67nxDAMbKWPW3Gwj1TyXuJW%2B9CcEwrq8UYJKWp5U5vyVKQQ1lRNSj2g7u6RruyL5kNY%2FniSRTnOjvw7UssdOd4U7NXzlcJ2DmAWgKq7lctN5M1yb4aMbJUg38BU1%2FND%2FhJvMRBnysKIY9wvNzZ9yLgHwEDCMO%2Bcu8QGOqUBAyM5k3PCY%2BODMwGFoIe0SFI9l1Caz%2B8aBJL9KX3vq%2Bu3Jh0rSm1jnX8aOD339me%2BrdodGzlXw0Y78QuIO5nhyf%2FRxxRe5Y1Oqetd9u3%2FEUJmIenit8ruvpEr%2Ff5ddJTCIWjjlkx%2F8nmI4bFB70fQo74UnnXecVXJBn77PBvstO6%2F%2FBq4OgwMd3CG%2BfjcwQ3%2FXdX2iun6SHQR5W3Iq0EKTQF7IVJf&X-Amz-Signature=dcc48be03e4e8c59f25e9a572268a2fdc7a19ce9a4c73c12510a88d7310f3984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIANOW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2KuugH3kfXOIXbu%2ByqKkRZ%2Fe%2FNfU0mB3G5Jsc7KkdgIgUvACY%2BmkSdoU6wYjZ3A80gcqZ1Jd%2FqLnSmqQE%2FPin%2BYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMFRZDiVcYdwuYh27ircA4EEhPn5npJ3BIUI%2BkJsX3l6EwZfuOjXyQKwrOrrteLy3IDo0yvMgny98IIC3oiRrmf1tO9yE61RvLDkxEG2uhI7qPuzwG2VnjcQdIz9F%2FDnQ3BFUdMAY0Uy6na1WQUnBRkGqzjZA8p2AojhNQ%2F5Trxapb%2FO7mU02%2BJF1yK4B2%2BNSRudWpFH3JK%2F31e9mBHvYbLn0eKOPh2dhfvMQeGxdrH7JQBFUQdNPTNm%2Bzfz2KLZnGgQGvLdcl1PWhJ%2FvCpDRxT%2FcIu7FeV9%2BFuw3gJ6xgcws%2F5TaoNOSVILcbN61CoSPB4%2BcxShjZf4Irr4TS4F%2F1Ha%2BPJpAqq95aQ1mdf6ztMoktOCQSbPgySkR%2Fjx3AH7EyRcb6amMzaQEDymyTuAlDPPfFrYXyYIQDkowStgAxzjdq%2FWCS2TCtuenfofUyj0N8ObHQ3vSVUG%2BeTuLQboT5%2F%2FqMHPoa3DxWchHPzv0iy%2FOjmyPRRKj67nxDAMbKWPW3Gwj1TyXuJW%2B9CcEwrq8UYJKWp5U5vyVKQQ1lRNSj2g7u6RruyL5kNY%2FniSRTnOjvw7UssdOd4U7NXzlcJ2DmAWgKq7lctN5M1yb4aMbJUg38BU1%2FND%2FhJvMRBnysKIY9wvNzZ9yLgHwEDCMO%2Bcu8QGOqUBAyM5k3PCY%2BODMwGFoIe0SFI9l1Caz%2B8aBJL9KX3vq%2Bu3Jh0rSm1jnX8aOD339me%2BrdodGzlXw0Y78QuIO5nhyf%2FRxxRe5Y1Oqetd9u3%2FEUJmIenit8ruvpEr%2Ff5ddJTCIWjjlkx%2F8nmI4bFB70fQo74UnnXecVXJBn77PBvstO6%2F%2FBq4OgwMd3CG%2BfjcwQ3%2FXdX2iun6SHQR5W3Iq0EKTQF7IVJf&X-Amz-Signature=3059837cb6ad95f3c153a6d086eb7385921ba920f8c38600a5825e578952c60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIANOW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2KuugH3kfXOIXbu%2ByqKkRZ%2Fe%2FNfU0mB3G5Jsc7KkdgIgUvACY%2BmkSdoU6wYjZ3A80gcqZ1Jd%2FqLnSmqQE%2FPin%2BYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMFRZDiVcYdwuYh27ircA4EEhPn5npJ3BIUI%2BkJsX3l6EwZfuOjXyQKwrOrrteLy3IDo0yvMgny98IIC3oiRrmf1tO9yE61RvLDkxEG2uhI7qPuzwG2VnjcQdIz9F%2FDnQ3BFUdMAY0Uy6na1WQUnBRkGqzjZA8p2AojhNQ%2F5Trxapb%2FO7mU02%2BJF1yK4B2%2BNSRudWpFH3JK%2F31e9mBHvYbLn0eKOPh2dhfvMQeGxdrH7JQBFUQdNPTNm%2Bzfz2KLZnGgQGvLdcl1PWhJ%2FvCpDRxT%2FcIu7FeV9%2BFuw3gJ6xgcws%2F5TaoNOSVILcbN61CoSPB4%2BcxShjZf4Irr4TS4F%2F1Ha%2BPJpAqq95aQ1mdf6ztMoktOCQSbPgySkR%2Fjx3AH7EyRcb6amMzaQEDymyTuAlDPPfFrYXyYIQDkowStgAxzjdq%2FWCS2TCtuenfofUyj0N8ObHQ3vSVUG%2BeTuLQboT5%2F%2FqMHPoa3DxWchHPzv0iy%2FOjmyPRRKj67nxDAMbKWPW3Gwj1TyXuJW%2B9CcEwrq8UYJKWp5U5vyVKQQ1lRNSj2g7u6RruyL5kNY%2FniSRTnOjvw7UssdOd4U7NXzlcJ2DmAWgKq7lctN5M1yb4aMbJUg38BU1%2FND%2FhJvMRBnysKIY9wvNzZ9yLgHwEDCMO%2Bcu8QGOqUBAyM5k3PCY%2BODMwGFoIe0SFI9l1Caz%2B8aBJL9KX3vq%2Bu3Jh0rSm1jnX8aOD339me%2BrdodGzlXw0Y78QuIO5nhyf%2FRxxRe5Y1Oqetd9u3%2FEUJmIenit8ruvpEr%2Ff5ddJTCIWjjlkx%2F8nmI4bFB70fQo74UnnXecVXJBn77PBvstO6%2F%2FBq4OgwMd3CG%2BfjcwQ3%2FXdX2iun6SHQR5W3Iq0EKTQF7IVJf&X-Amz-Signature=1cb9c1518648158388521ed2bf8212cd17109f8b10c2ca061b631c1fdc283cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIANOW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2KuugH3kfXOIXbu%2ByqKkRZ%2Fe%2FNfU0mB3G5Jsc7KkdgIgUvACY%2BmkSdoU6wYjZ3A80gcqZ1Jd%2FqLnSmqQE%2FPin%2BYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMFRZDiVcYdwuYh27ircA4EEhPn5npJ3BIUI%2BkJsX3l6EwZfuOjXyQKwrOrrteLy3IDo0yvMgny98IIC3oiRrmf1tO9yE61RvLDkxEG2uhI7qPuzwG2VnjcQdIz9F%2FDnQ3BFUdMAY0Uy6na1WQUnBRkGqzjZA8p2AojhNQ%2F5Trxapb%2FO7mU02%2BJF1yK4B2%2BNSRudWpFH3JK%2F31e9mBHvYbLn0eKOPh2dhfvMQeGxdrH7JQBFUQdNPTNm%2Bzfz2KLZnGgQGvLdcl1PWhJ%2FvCpDRxT%2FcIu7FeV9%2BFuw3gJ6xgcws%2F5TaoNOSVILcbN61CoSPB4%2BcxShjZf4Irr4TS4F%2F1Ha%2BPJpAqq95aQ1mdf6ztMoktOCQSbPgySkR%2Fjx3AH7EyRcb6amMzaQEDymyTuAlDPPfFrYXyYIQDkowStgAxzjdq%2FWCS2TCtuenfofUyj0N8ObHQ3vSVUG%2BeTuLQboT5%2F%2FqMHPoa3DxWchHPzv0iy%2FOjmyPRRKj67nxDAMbKWPW3Gwj1TyXuJW%2B9CcEwrq8UYJKWp5U5vyVKQQ1lRNSj2g7u6RruyL5kNY%2FniSRTnOjvw7UssdOd4U7NXzlcJ2DmAWgKq7lctN5M1yb4aMbJUg38BU1%2FND%2FhJvMRBnysKIY9wvNzZ9yLgHwEDCMO%2Bcu8QGOqUBAyM5k3PCY%2BODMwGFoIe0SFI9l1Caz%2B8aBJL9KX3vq%2Bu3Jh0rSm1jnX8aOD339me%2BrdodGzlXw0Y78QuIO5nhyf%2FRxxRe5Y1Oqetd9u3%2FEUJmIenit8ruvpEr%2Ff5ddJTCIWjjlkx%2F8nmI4bFB70fQo74UnnXecVXJBn77PBvstO6%2F%2FBq4OgwMd3CG%2BfjcwQ3%2FXdX2iun6SHQR5W3Iq0EKTQF7IVJf&X-Amz-Signature=8f4b74574965c23211f0b4ffea82fbd567ef45ce9e93bf2574b68f5c96a862d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
