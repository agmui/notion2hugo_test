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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPYY4MC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG85%2BmavnnHNJz8%2FeNAEyiR96t8XgS2wKygvfJiF9PMAiBu%2F9Xh7AoJdWoEGX4d0BEyGnBqVdaxZgPKoh4C6GPX4yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnfv5q3EysWNOPkEKtwD%2Fg0661ZD5tN3IGpnZh28%2FjcSYuAc7GZe0nzgLWWX45l8xa3wshm8Anns81dXvxskz8WTxrw%2BjXMXC060ceboD84cg44a9Wb88z1TSM3k0qcrz4eWvNsxxWWCqPrRkYYd0VDAc%2FsItAz8MqtpDHSiYqQAiqpOw4fQUfVv0iNwhzttr65i%2FzgorrfHcND%2FwG4od1352pddG0sk3GedSSDiAp7sUND7dJaTMcPXFa2%2FT5KKMOQ7t%2B85afwFj3UaPOKqPI4qnZ%2FMqq%2BcCLFPtB8w0T7SqLCOqu7oEXtr6pX0KKVTv%2Fo3D90H%2BC4h9otXE4putDOqzS2aakcx%2Bn0V4dMFl1sBqvXCm1B%2FRSt%2F5gox5CJdGu57FwdMfDl3sLUjgbefYXlhv%2BhtJNEqXD%2BQ0CPsQksYSbS9ufEXM78qHslFHEH%2BCpAskxa6FQ3bDIH9hllk%2B0cIwZv5h00bDBdUMDMvygInbrl5l6xTyBXdViTAheKHqJW%2BB8lBD6wduHBNjjuPnvYLjcEnAVwKY08IYkORMNU4mtvERV2kMEgsUnVyrSOpDxcvlMnrG2kuC80Ja1938iOWHBlo6YnrCDHfuVPsHEz7Qyna%2F5WlZSNM7xyAdbOPyK4LjEY3vJulhM4wt%2F30wwY6pgEGH3eCoFDcAPYjPJgOydG8pDRUdTodVFV8ggcqmga7LRPH6kUSbuY%2BhCo2k260ZyiP17ZR2sEk2o6XAGdh%2BVrTx4iy1dsVM%2FidKHcL6MqP2HBEoRQqb4RTGzlgFh9GLmbSMefOzQqlxArYkEg%2FvrXGfoAyHzkuCapfp0%2FS%2BhWMJ1f%2BwusIgQ0yqSyatoHZG7bDQ24jAn5t9wwlGYC7aGgJSs2FD5D9&X-Amz-Signature=5b59ebded8643b6ab3bc5ba51cabedffaaf3bd4b27ff748f4813e048cb7aca83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPYY4MC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG85%2BmavnnHNJz8%2FeNAEyiR96t8XgS2wKygvfJiF9PMAiBu%2F9Xh7AoJdWoEGX4d0BEyGnBqVdaxZgPKoh4C6GPX4yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnfv5q3EysWNOPkEKtwD%2Fg0661ZD5tN3IGpnZh28%2FjcSYuAc7GZe0nzgLWWX45l8xa3wshm8Anns81dXvxskz8WTxrw%2BjXMXC060ceboD84cg44a9Wb88z1TSM3k0qcrz4eWvNsxxWWCqPrRkYYd0VDAc%2FsItAz8MqtpDHSiYqQAiqpOw4fQUfVv0iNwhzttr65i%2FzgorrfHcND%2FwG4od1352pddG0sk3GedSSDiAp7sUND7dJaTMcPXFa2%2FT5KKMOQ7t%2B85afwFj3UaPOKqPI4qnZ%2FMqq%2BcCLFPtB8w0T7SqLCOqu7oEXtr6pX0KKVTv%2Fo3D90H%2BC4h9otXE4putDOqzS2aakcx%2Bn0V4dMFl1sBqvXCm1B%2FRSt%2F5gox5CJdGu57FwdMfDl3sLUjgbefYXlhv%2BhtJNEqXD%2BQ0CPsQksYSbS9ufEXM78qHslFHEH%2BCpAskxa6FQ3bDIH9hllk%2B0cIwZv5h00bDBdUMDMvygInbrl5l6xTyBXdViTAheKHqJW%2BB8lBD6wduHBNjjuPnvYLjcEnAVwKY08IYkORMNU4mtvERV2kMEgsUnVyrSOpDxcvlMnrG2kuC80Ja1938iOWHBlo6YnrCDHfuVPsHEz7Qyna%2F5WlZSNM7xyAdbOPyK4LjEY3vJulhM4wt%2F30wwY6pgEGH3eCoFDcAPYjPJgOydG8pDRUdTodVFV8ggcqmga7LRPH6kUSbuY%2BhCo2k260ZyiP17ZR2sEk2o6XAGdh%2BVrTx4iy1dsVM%2FidKHcL6MqP2HBEoRQqb4RTGzlgFh9GLmbSMefOzQqlxArYkEg%2FvrXGfoAyHzkuCapfp0%2FS%2BhWMJ1f%2BwusIgQ0yqSyatoHZG7bDQ24jAn5t9wwlGYC7aGgJSs2FD5D9&X-Amz-Signature=3128c231763382c2ced875178e8e1816d2c808e991e676ebaca264808a5cd66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPYY4MC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG85%2BmavnnHNJz8%2FeNAEyiR96t8XgS2wKygvfJiF9PMAiBu%2F9Xh7AoJdWoEGX4d0BEyGnBqVdaxZgPKoh4C6GPX4yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnfv5q3EysWNOPkEKtwD%2Fg0661ZD5tN3IGpnZh28%2FjcSYuAc7GZe0nzgLWWX45l8xa3wshm8Anns81dXvxskz8WTxrw%2BjXMXC060ceboD84cg44a9Wb88z1TSM3k0qcrz4eWvNsxxWWCqPrRkYYd0VDAc%2FsItAz8MqtpDHSiYqQAiqpOw4fQUfVv0iNwhzttr65i%2FzgorrfHcND%2FwG4od1352pddG0sk3GedSSDiAp7sUND7dJaTMcPXFa2%2FT5KKMOQ7t%2B85afwFj3UaPOKqPI4qnZ%2FMqq%2BcCLFPtB8w0T7SqLCOqu7oEXtr6pX0KKVTv%2Fo3D90H%2BC4h9otXE4putDOqzS2aakcx%2Bn0V4dMFl1sBqvXCm1B%2FRSt%2F5gox5CJdGu57FwdMfDl3sLUjgbefYXlhv%2BhtJNEqXD%2BQ0CPsQksYSbS9ufEXM78qHslFHEH%2BCpAskxa6FQ3bDIH9hllk%2B0cIwZv5h00bDBdUMDMvygInbrl5l6xTyBXdViTAheKHqJW%2BB8lBD6wduHBNjjuPnvYLjcEnAVwKY08IYkORMNU4mtvERV2kMEgsUnVyrSOpDxcvlMnrG2kuC80Ja1938iOWHBlo6YnrCDHfuVPsHEz7Qyna%2F5WlZSNM7xyAdbOPyK4LjEY3vJulhM4wt%2F30wwY6pgEGH3eCoFDcAPYjPJgOydG8pDRUdTodVFV8ggcqmga7LRPH6kUSbuY%2BhCo2k260ZyiP17ZR2sEk2o6XAGdh%2BVrTx4iy1dsVM%2FidKHcL6MqP2HBEoRQqb4RTGzlgFh9GLmbSMefOzQqlxArYkEg%2FvrXGfoAyHzkuCapfp0%2FS%2BhWMJ1f%2BwusIgQ0yqSyatoHZG7bDQ24jAn5t9wwlGYC7aGgJSs2FD5D9&X-Amz-Signature=47ae9209a36463ffe7f8d27f8e28d6c47e98e8739fcb044116ec151ed0fa5611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPYY4MC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG85%2BmavnnHNJz8%2FeNAEyiR96t8XgS2wKygvfJiF9PMAiBu%2F9Xh7AoJdWoEGX4d0BEyGnBqVdaxZgPKoh4C6GPX4yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnfv5q3EysWNOPkEKtwD%2Fg0661ZD5tN3IGpnZh28%2FjcSYuAc7GZe0nzgLWWX45l8xa3wshm8Anns81dXvxskz8WTxrw%2BjXMXC060ceboD84cg44a9Wb88z1TSM3k0qcrz4eWvNsxxWWCqPrRkYYd0VDAc%2FsItAz8MqtpDHSiYqQAiqpOw4fQUfVv0iNwhzttr65i%2FzgorrfHcND%2FwG4od1352pddG0sk3GedSSDiAp7sUND7dJaTMcPXFa2%2FT5KKMOQ7t%2B85afwFj3UaPOKqPI4qnZ%2FMqq%2BcCLFPtB8w0T7SqLCOqu7oEXtr6pX0KKVTv%2Fo3D90H%2BC4h9otXE4putDOqzS2aakcx%2Bn0V4dMFl1sBqvXCm1B%2FRSt%2F5gox5CJdGu57FwdMfDl3sLUjgbefYXlhv%2BhtJNEqXD%2BQ0CPsQksYSbS9ufEXM78qHslFHEH%2BCpAskxa6FQ3bDIH9hllk%2B0cIwZv5h00bDBdUMDMvygInbrl5l6xTyBXdViTAheKHqJW%2BB8lBD6wduHBNjjuPnvYLjcEnAVwKY08IYkORMNU4mtvERV2kMEgsUnVyrSOpDxcvlMnrG2kuC80Ja1938iOWHBlo6YnrCDHfuVPsHEz7Qyna%2F5WlZSNM7xyAdbOPyK4LjEY3vJulhM4wt%2F30wwY6pgEGH3eCoFDcAPYjPJgOydG8pDRUdTodVFV8ggcqmga7LRPH6kUSbuY%2BhCo2k260ZyiP17ZR2sEk2o6XAGdh%2BVrTx4iy1dsVM%2FidKHcL6MqP2HBEoRQqb4RTGzlgFh9GLmbSMefOzQqlxArYkEg%2FvrXGfoAyHzkuCapfp0%2FS%2BhWMJ1f%2BwusIgQ0yqSyatoHZG7bDQ24jAn5t9wwlGYC7aGgJSs2FD5D9&X-Amz-Signature=bffdbc9909561fccd8ca55e225eff7422f7262b6221649d41f697bf0fc8b7072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPYY4MC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG85%2BmavnnHNJz8%2FeNAEyiR96t8XgS2wKygvfJiF9PMAiBu%2F9Xh7AoJdWoEGX4d0BEyGnBqVdaxZgPKoh4C6GPX4yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnfv5q3EysWNOPkEKtwD%2Fg0661ZD5tN3IGpnZh28%2FjcSYuAc7GZe0nzgLWWX45l8xa3wshm8Anns81dXvxskz8WTxrw%2BjXMXC060ceboD84cg44a9Wb88z1TSM3k0qcrz4eWvNsxxWWCqPrRkYYd0VDAc%2FsItAz8MqtpDHSiYqQAiqpOw4fQUfVv0iNwhzttr65i%2FzgorrfHcND%2FwG4od1352pddG0sk3GedSSDiAp7sUND7dJaTMcPXFa2%2FT5KKMOQ7t%2B85afwFj3UaPOKqPI4qnZ%2FMqq%2BcCLFPtB8w0T7SqLCOqu7oEXtr6pX0KKVTv%2Fo3D90H%2BC4h9otXE4putDOqzS2aakcx%2Bn0V4dMFl1sBqvXCm1B%2FRSt%2F5gox5CJdGu57FwdMfDl3sLUjgbefYXlhv%2BhtJNEqXD%2BQ0CPsQksYSbS9ufEXM78qHslFHEH%2BCpAskxa6FQ3bDIH9hllk%2B0cIwZv5h00bDBdUMDMvygInbrl5l6xTyBXdViTAheKHqJW%2BB8lBD6wduHBNjjuPnvYLjcEnAVwKY08IYkORMNU4mtvERV2kMEgsUnVyrSOpDxcvlMnrG2kuC80Ja1938iOWHBlo6YnrCDHfuVPsHEz7Qyna%2F5WlZSNM7xyAdbOPyK4LjEY3vJulhM4wt%2F30wwY6pgEGH3eCoFDcAPYjPJgOydG8pDRUdTodVFV8ggcqmga7LRPH6kUSbuY%2BhCo2k260ZyiP17ZR2sEk2o6XAGdh%2BVrTx4iy1dsVM%2FidKHcL6MqP2HBEoRQqb4RTGzlgFh9GLmbSMefOzQqlxArYkEg%2FvrXGfoAyHzkuCapfp0%2FS%2BhWMJ1f%2BwusIgQ0yqSyatoHZG7bDQ24jAn5t9wwlGYC7aGgJSs2FD5D9&X-Amz-Signature=a023bee2a8edda6dc0ffcb5f317f9ea16b7447e0ef93814bbec0bd762fc50739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPYY4MC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG85%2BmavnnHNJz8%2FeNAEyiR96t8XgS2wKygvfJiF9PMAiBu%2F9Xh7AoJdWoEGX4d0BEyGnBqVdaxZgPKoh4C6GPX4yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnfv5q3EysWNOPkEKtwD%2Fg0661ZD5tN3IGpnZh28%2FjcSYuAc7GZe0nzgLWWX45l8xa3wshm8Anns81dXvxskz8WTxrw%2BjXMXC060ceboD84cg44a9Wb88z1TSM3k0qcrz4eWvNsxxWWCqPrRkYYd0VDAc%2FsItAz8MqtpDHSiYqQAiqpOw4fQUfVv0iNwhzttr65i%2FzgorrfHcND%2FwG4od1352pddG0sk3GedSSDiAp7sUND7dJaTMcPXFa2%2FT5KKMOQ7t%2B85afwFj3UaPOKqPI4qnZ%2FMqq%2BcCLFPtB8w0T7SqLCOqu7oEXtr6pX0KKVTv%2Fo3D90H%2BC4h9otXE4putDOqzS2aakcx%2Bn0V4dMFl1sBqvXCm1B%2FRSt%2F5gox5CJdGu57FwdMfDl3sLUjgbefYXlhv%2BhtJNEqXD%2BQ0CPsQksYSbS9ufEXM78qHslFHEH%2BCpAskxa6FQ3bDIH9hllk%2B0cIwZv5h00bDBdUMDMvygInbrl5l6xTyBXdViTAheKHqJW%2BB8lBD6wduHBNjjuPnvYLjcEnAVwKY08IYkORMNU4mtvERV2kMEgsUnVyrSOpDxcvlMnrG2kuC80Ja1938iOWHBlo6YnrCDHfuVPsHEz7Qyna%2F5WlZSNM7xyAdbOPyK4LjEY3vJulhM4wt%2F30wwY6pgEGH3eCoFDcAPYjPJgOydG8pDRUdTodVFV8ggcqmga7LRPH6kUSbuY%2BhCo2k260ZyiP17ZR2sEk2o6XAGdh%2BVrTx4iy1dsVM%2FidKHcL6MqP2HBEoRQqb4RTGzlgFh9GLmbSMefOzQqlxArYkEg%2FvrXGfoAyHzkuCapfp0%2FS%2BhWMJ1f%2BwusIgQ0yqSyatoHZG7bDQ24jAn5t9wwlGYC7aGgJSs2FD5D9&X-Amz-Signature=3ad432fdd5d4560c8998dfd0b2d413e7cc896a77262e9c2539bec1bb07cc8fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPYY4MC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG85%2BmavnnHNJz8%2FeNAEyiR96t8XgS2wKygvfJiF9PMAiBu%2F9Xh7AoJdWoEGX4d0BEyGnBqVdaxZgPKoh4C6GPX4yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnfv5q3EysWNOPkEKtwD%2Fg0661ZD5tN3IGpnZh28%2FjcSYuAc7GZe0nzgLWWX45l8xa3wshm8Anns81dXvxskz8WTxrw%2BjXMXC060ceboD84cg44a9Wb88z1TSM3k0qcrz4eWvNsxxWWCqPrRkYYd0VDAc%2FsItAz8MqtpDHSiYqQAiqpOw4fQUfVv0iNwhzttr65i%2FzgorrfHcND%2FwG4od1352pddG0sk3GedSSDiAp7sUND7dJaTMcPXFa2%2FT5KKMOQ7t%2B85afwFj3UaPOKqPI4qnZ%2FMqq%2BcCLFPtB8w0T7SqLCOqu7oEXtr6pX0KKVTv%2Fo3D90H%2BC4h9otXE4putDOqzS2aakcx%2Bn0V4dMFl1sBqvXCm1B%2FRSt%2F5gox5CJdGu57FwdMfDl3sLUjgbefYXlhv%2BhtJNEqXD%2BQ0CPsQksYSbS9ufEXM78qHslFHEH%2BCpAskxa6FQ3bDIH9hllk%2B0cIwZv5h00bDBdUMDMvygInbrl5l6xTyBXdViTAheKHqJW%2BB8lBD6wduHBNjjuPnvYLjcEnAVwKY08IYkORMNU4mtvERV2kMEgsUnVyrSOpDxcvlMnrG2kuC80Ja1938iOWHBlo6YnrCDHfuVPsHEz7Qyna%2F5WlZSNM7xyAdbOPyK4LjEY3vJulhM4wt%2F30wwY6pgEGH3eCoFDcAPYjPJgOydG8pDRUdTodVFV8ggcqmga7LRPH6kUSbuY%2BhCo2k260ZyiP17ZR2sEk2o6XAGdh%2BVrTx4iy1dsVM%2FidKHcL6MqP2HBEoRQqb4RTGzlgFh9GLmbSMefOzQqlxArYkEg%2FvrXGfoAyHzkuCapfp0%2FS%2BhWMJ1f%2BwusIgQ0yqSyatoHZG7bDQ24jAn5t9wwlGYC7aGgJSs2FD5D9&X-Amz-Signature=3ddecef2e9473b06f0e15e8768e204c1b86537459ddaa2128b6d829269056a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
