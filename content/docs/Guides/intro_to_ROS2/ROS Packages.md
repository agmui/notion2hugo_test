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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKDCDA4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4enHmotJHIn7jGTrIO4h5uv2n9MuUHJz%2BFjoUYhn0GQIhALPY9OHFLOfSGz9Hkp57j6JDNK8YK3%2F5z8iE04IjQsIYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiCkT2ay6SSiJpCQq3ANTxEUlT2hKGcNA8cHZfuHGZjSXAH8X5RVRDG3BYV72r%2BQkhYmDCBsMUvqO2d8JPyuM3DBvLGYjoPhsKVY8nZYJCf6UokDnbxalSkFxMFrhDpOy4t1rqOv2xC%2BEUsWLQUwqYFe4%2Fvy2BB3iR9iOm0b8WaVwMnwUrcSzU1l1G6YsXKI4OhWLN0WJkn5h6k7b08%2FLtxqIyuhq7oFYIFE3iGCpKNGZt8JESjNr2hyI4AEtTotFhG6vAUXSZOQcGT9HfHzs%2FGNOLhzXrDaiYxChozD3Z4UvVxpgno5ceYl0qnfyxaNBJIotWWDNTzfcExfLpmQP%2FfAGhGcz46UdnkmIaszpX4Sm67Al0KKsNAvJDR%2FwhUBatp94fwIE4jd6YOOZObn8g4MgOyd9U1qXTiNEwXJvpmpZsLpi9b8Yf1ZxHTf1s4jy79%2BVr%2BkYKwGN1h8BfUNKSCnml1qcDgN4qBFt8PjBzH4YSUceZUSidN%2BcpAKXLYKhQNYm14CpWLahQghquc4mFTsBPap%2BdlJP2n%2Bw%2BQsK2IpjGzZMqj%2BAYJKcP8bhhv1%2BSStDmJTezsL92XC5Amz%2BzQNIq33dOHf3D5dJ%2BvKBqCXvDNecPJOed7vVZ%2BuCHGUOp5t4qVAL4fy7NjCx%2B6%2FBBjqkAcKa2wLYwYzKpOivpwxwy6%2FlX0%2FrWfsP1q8WsLrhZ3qAWISkG4jXbGTes3o4ZRueTftSh2mX1IbiAo9r5KKhzIEL0oT64ORTVz%2BDOFK1aVseoRPzSP%2FfnFuTILzItmBg3GZ8kVG1nQ7bY7pW6UWuqYWaJ70XW53N%2FHj4izwmbNMVKUY0q9mWBfhB5dEwTQ6yaRKCteCzWswSy6qGh8iLoyDjjzV4&X-Amz-Signature=2d4fe21ff02207de4d101fbee082f0ef45a8e12a1adfb02e122960c02e4f9904&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKDCDA4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4enHmotJHIn7jGTrIO4h5uv2n9MuUHJz%2BFjoUYhn0GQIhALPY9OHFLOfSGz9Hkp57j6JDNK8YK3%2F5z8iE04IjQsIYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiCkT2ay6SSiJpCQq3ANTxEUlT2hKGcNA8cHZfuHGZjSXAH8X5RVRDG3BYV72r%2BQkhYmDCBsMUvqO2d8JPyuM3DBvLGYjoPhsKVY8nZYJCf6UokDnbxalSkFxMFrhDpOy4t1rqOv2xC%2BEUsWLQUwqYFe4%2Fvy2BB3iR9iOm0b8WaVwMnwUrcSzU1l1G6YsXKI4OhWLN0WJkn5h6k7b08%2FLtxqIyuhq7oFYIFE3iGCpKNGZt8JESjNr2hyI4AEtTotFhG6vAUXSZOQcGT9HfHzs%2FGNOLhzXrDaiYxChozD3Z4UvVxpgno5ceYl0qnfyxaNBJIotWWDNTzfcExfLpmQP%2FfAGhGcz46UdnkmIaszpX4Sm67Al0KKsNAvJDR%2FwhUBatp94fwIE4jd6YOOZObn8g4MgOyd9U1qXTiNEwXJvpmpZsLpi9b8Yf1ZxHTf1s4jy79%2BVr%2BkYKwGN1h8BfUNKSCnml1qcDgN4qBFt8PjBzH4YSUceZUSidN%2BcpAKXLYKhQNYm14CpWLahQghquc4mFTsBPap%2BdlJP2n%2Bw%2BQsK2IpjGzZMqj%2BAYJKcP8bhhv1%2BSStDmJTezsL92XC5Amz%2BzQNIq33dOHf3D5dJ%2BvKBqCXvDNecPJOed7vVZ%2BuCHGUOp5t4qVAL4fy7NjCx%2B6%2FBBjqkAcKa2wLYwYzKpOivpwxwy6%2FlX0%2FrWfsP1q8WsLrhZ3qAWISkG4jXbGTes3o4ZRueTftSh2mX1IbiAo9r5KKhzIEL0oT64ORTVz%2BDOFK1aVseoRPzSP%2FfnFuTILzItmBg3GZ8kVG1nQ7bY7pW6UWuqYWaJ70XW53N%2FHj4izwmbNMVKUY0q9mWBfhB5dEwTQ6yaRKCteCzWswSy6qGh8iLoyDjjzV4&X-Amz-Signature=57eefeaf87901b96317f585033bfee8802a51b4ae75cd6dae6d7c5fdaa70a4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKDCDA4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4enHmotJHIn7jGTrIO4h5uv2n9MuUHJz%2BFjoUYhn0GQIhALPY9OHFLOfSGz9Hkp57j6JDNK8YK3%2F5z8iE04IjQsIYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiCkT2ay6SSiJpCQq3ANTxEUlT2hKGcNA8cHZfuHGZjSXAH8X5RVRDG3BYV72r%2BQkhYmDCBsMUvqO2d8JPyuM3DBvLGYjoPhsKVY8nZYJCf6UokDnbxalSkFxMFrhDpOy4t1rqOv2xC%2BEUsWLQUwqYFe4%2Fvy2BB3iR9iOm0b8WaVwMnwUrcSzU1l1G6YsXKI4OhWLN0WJkn5h6k7b08%2FLtxqIyuhq7oFYIFE3iGCpKNGZt8JESjNr2hyI4AEtTotFhG6vAUXSZOQcGT9HfHzs%2FGNOLhzXrDaiYxChozD3Z4UvVxpgno5ceYl0qnfyxaNBJIotWWDNTzfcExfLpmQP%2FfAGhGcz46UdnkmIaszpX4Sm67Al0KKsNAvJDR%2FwhUBatp94fwIE4jd6YOOZObn8g4MgOyd9U1qXTiNEwXJvpmpZsLpi9b8Yf1ZxHTf1s4jy79%2BVr%2BkYKwGN1h8BfUNKSCnml1qcDgN4qBFt8PjBzH4YSUceZUSidN%2BcpAKXLYKhQNYm14CpWLahQghquc4mFTsBPap%2BdlJP2n%2Bw%2BQsK2IpjGzZMqj%2BAYJKcP8bhhv1%2BSStDmJTezsL92XC5Amz%2BzQNIq33dOHf3D5dJ%2BvKBqCXvDNecPJOed7vVZ%2BuCHGUOp5t4qVAL4fy7NjCx%2B6%2FBBjqkAcKa2wLYwYzKpOivpwxwy6%2FlX0%2FrWfsP1q8WsLrhZ3qAWISkG4jXbGTes3o4ZRueTftSh2mX1IbiAo9r5KKhzIEL0oT64ORTVz%2BDOFK1aVseoRPzSP%2FfnFuTILzItmBg3GZ8kVG1nQ7bY7pW6UWuqYWaJ70XW53N%2FHj4izwmbNMVKUY0q9mWBfhB5dEwTQ6yaRKCteCzWswSy6qGh8iLoyDjjzV4&X-Amz-Signature=3b83fcb69deb8e422463187b2629d0d5e36cc159bdc7a960524b4ffd34cd5fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKDCDA4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4enHmotJHIn7jGTrIO4h5uv2n9MuUHJz%2BFjoUYhn0GQIhALPY9OHFLOfSGz9Hkp57j6JDNK8YK3%2F5z8iE04IjQsIYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiCkT2ay6SSiJpCQq3ANTxEUlT2hKGcNA8cHZfuHGZjSXAH8X5RVRDG3BYV72r%2BQkhYmDCBsMUvqO2d8JPyuM3DBvLGYjoPhsKVY8nZYJCf6UokDnbxalSkFxMFrhDpOy4t1rqOv2xC%2BEUsWLQUwqYFe4%2Fvy2BB3iR9iOm0b8WaVwMnwUrcSzU1l1G6YsXKI4OhWLN0WJkn5h6k7b08%2FLtxqIyuhq7oFYIFE3iGCpKNGZt8JESjNr2hyI4AEtTotFhG6vAUXSZOQcGT9HfHzs%2FGNOLhzXrDaiYxChozD3Z4UvVxpgno5ceYl0qnfyxaNBJIotWWDNTzfcExfLpmQP%2FfAGhGcz46UdnkmIaszpX4Sm67Al0KKsNAvJDR%2FwhUBatp94fwIE4jd6YOOZObn8g4MgOyd9U1qXTiNEwXJvpmpZsLpi9b8Yf1ZxHTf1s4jy79%2BVr%2BkYKwGN1h8BfUNKSCnml1qcDgN4qBFt8PjBzH4YSUceZUSidN%2BcpAKXLYKhQNYm14CpWLahQghquc4mFTsBPap%2BdlJP2n%2Bw%2BQsK2IpjGzZMqj%2BAYJKcP8bhhv1%2BSStDmJTezsL92XC5Amz%2BzQNIq33dOHf3D5dJ%2BvKBqCXvDNecPJOed7vVZ%2BuCHGUOp5t4qVAL4fy7NjCx%2B6%2FBBjqkAcKa2wLYwYzKpOivpwxwy6%2FlX0%2FrWfsP1q8WsLrhZ3qAWISkG4jXbGTes3o4ZRueTftSh2mX1IbiAo9r5KKhzIEL0oT64ORTVz%2BDOFK1aVseoRPzSP%2FfnFuTILzItmBg3GZ8kVG1nQ7bY7pW6UWuqYWaJ70XW53N%2FHj4izwmbNMVKUY0q9mWBfhB5dEwTQ6yaRKCteCzWswSy6qGh8iLoyDjjzV4&X-Amz-Signature=178c956925b58322df2bc3b5cc4a2c6e19a7ea59d312583d49e619cbd5385070&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKDCDA4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4enHmotJHIn7jGTrIO4h5uv2n9MuUHJz%2BFjoUYhn0GQIhALPY9OHFLOfSGz9Hkp57j6JDNK8YK3%2F5z8iE04IjQsIYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiCkT2ay6SSiJpCQq3ANTxEUlT2hKGcNA8cHZfuHGZjSXAH8X5RVRDG3BYV72r%2BQkhYmDCBsMUvqO2d8JPyuM3DBvLGYjoPhsKVY8nZYJCf6UokDnbxalSkFxMFrhDpOy4t1rqOv2xC%2BEUsWLQUwqYFe4%2Fvy2BB3iR9iOm0b8WaVwMnwUrcSzU1l1G6YsXKI4OhWLN0WJkn5h6k7b08%2FLtxqIyuhq7oFYIFE3iGCpKNGZt8JESjNr2hyI4AEtTotFhG6vAUXSZOQcGT9HfHzs%2FGNOLhzXrDaiYxChozD3Z4UvVxpgno5ceYl0qnfyxaNBJIotWWDNTzfcExfLpmQP%2FfAGhGcz46UdnkmIaszpX4Sm67Al0KKsNAvJDR%2FwhUBatp94fwIE4jd6YOOZObn8g4MgOyd9U1qXTiNEwXJvpmpZsLpi9b8Yf1ZxHTf1s4jy79%2BVr%2BkYKwGN1h8BfUNKSCnml1qcDgN4qBFt8PjBzH4YSUceZUSidN%2BcpAKXLYKhQNYm14CpWLahQghquc4mFTsBPap%2BdlJP2n%2Bw%2BQsK2IpjGzZMqj%2BAYJKcP8bhhv1%2BSStDmJTezsL92XC5Amz%2BzQNIq33dOHf3D5dJ%2BvKBqCXvDNecPJOed7vVZ%2BuCHGUOp5t4qVAL4fy7NjCx%2B6%2FBBjqkAcKa2wLYwYzKpOivpwxwy6%2FlX0%2FrWfsP1q8WsLrhZ3qAWISkG4jXbGTes3o4ZRueTftSh2mX1IbiAo9r5KKhzIEL0oT64ORTVz%2BDOFK1aVseoRPzSP%2FfnFuTILzItmBg3GZ8kVG1nQ7bY7pW6UWuqYWaJ70XW53N%2FHj4izwmbNMVKUY0q9mWBfhB5dEwTQ6yaRKCteCzWswSy6qGh8iLoyDjjzV4&X-Amz-Signature=25f67bf24e33e55d7f7a57eeeef628ec1d696ee8790bbd387ce71a31e19b50ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKDCDA4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4enHmotJHIn7jGTrIO4h5uv2n9MuUHJz%2BFjoUYhn0GQIhALPY9OHFLOfSGz9Hkp57j6JDNK8YK3%2F5z8iE04IjQsIYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiCkT2ay6SSiJpCQq3ANTxEUlT2hKGcNA8cHZfuHGZjSXAH8X5RVRDG3BYV72r%2BQkhYmDCBsMUvqO2d8JPyuM3DBvLGYjoPhsKVY8nZYJCf6UokDnbxalSkFxMFrhDpOy4t1rqOv2xC%2BEUsWLQUwqYFe4%2Fvy2BB3iR9iOm0b8WaVwMnwUrcSzU1l1G6YsXKI4OhWLN0WJkn5h6k7b08%2FLtxqIyuhq7oFYIFE3iGCpKNGZt8JESjNr2hyI4AEtTotFhG6vAUXSZOQcGT9HfHzs%2FGNOLhzXrDaiYxChozD3Z4UvVxpgno5ceYl0qnfyxaNBJIotWWDNTzfcExfLpmQP%2FfAGhGcz46UdnkmIaszpX4Sm67Al0KKsNAvJDR%2FwhUBatp94fwIE4jd6YOOZObn8g4MgOyd9U1qXTiNEwXJvpmpZsLpi9b8Yf1ZxHTf1s4jy79%2BVr%2BkYKwGN1h8BfUNKSCnml1qcDgN4qBFt8PjBzH4YSUceZUSidN%2BcpAKXLYKhQNYm14CpWLahQghquc4mFTsBPap%2BdlJP2n%2Bw%2BQsK2IpjGzZMqj%2BAYJKcP8bhhv1%2BSStDmJTezsL92XC5Amz%2BzQNIq33dOHf3D5dJ%2BvKBqCXvDNecPJOed7vVZ%2BuCHGUOp5t4qVAL4fy7NjCx%2B6%2FBBjqkAcKa2wLYwYzKpOivpwxwy6%2FlX0%2FrWfsP1q8WsLrhZ3qAWISkG4jXbGTes3o4ZRueTftSh2mX1IbiAo9r5KKhzIEL0oT64ORTVz%2BDOFK1aVseoRPzSP%2FfnFuTILzItmBg3GZ8kVG1nQ7bY7pW6UWuqYWaJ70XW53N%2FHj4izwmbNMVKUY0q9mWBfhB5dEwTQ6yaRKCteCzWswSy6qGh8iLoyDjjzV4&X-Amz-Signature=21d3681aebe2c31bafe17c62f6043edfe0a1ea1f6cff40295503ad7530c3c6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKDCDA4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4enHmotJHIn7jGTrIO4h5uv2n9MuUHJz%2BFjoUYhn0GQIhALPY9OHFLOfSGz9Hkp57j6JDNK8YK3%2F5z8iE04IjQsIYKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiCkT2ay6SSiJpCQq3ANTxEUlT2hKGcNA8cHZfuHGZjSXAH8X5RVRDG3BYV72r%2BQkhYmDCBsMUvqO2d8JPyuM3DBvLGYjoPhsKVY8nZYJCf6UokDnbxalSkFxMFrhDpOy4t1rqOv2xC%2BEUsWLQUwqYFe4%2Fvy2BB3iR9iOm0b8WaVwMnwUrcSzU1l1G6YsXKI4OhWLN0WJkn5h6k7b08%2FLtxqIyuhq7oFYIFE3iGCpKNGZt8JESjNr2hyI4AEtTotFhG6vAUXSZOQcGT9HfHzs%2FGNOLhzXrDaiYxChozD3Z4UvVxpgno5ceYl0qnfyxaNBJIotWWDNTzfcExfLpmQP%2FfAGhGcz46UdnkmIaszpX4Sm67Al0KKsNAvJDR%2FwhUBatp94fwIE4jd6YOOZObn8g4MgOyd9U1qXTiNEwXJvpmpZsLpi9b8Yf1ZxHTf1s4jy79%2BVr%2BkYKwGN1h8BfUNKSCnml1qcDgN4qBFt8PjBzH4YSUceZUSidN%2BcpAKXLYKhQNYm14CpWLahQghquc4mFTsBPap%2BdlJP2n%2Bw%2BQsK2IpjGzZMqj%2BAYJKcP8bhhv1%2BSStDmJTezsL92XC5Amz%2BzQNIq33dOHf3D5dJ%2BvKBqCXvDNecPJOed7vVZ%2BuCHGUOp5t4qVAL4fy7NjCx%2B6%2FBBjqkAcKa2wLYwYzKpOivpwxwy6%2FlX0%2FrWfsP1q8WsLrhZ3qAWISkG4jXbGTes3o4ZRueTftSh2mX1IbiAo9r5KKhzIEL0oT64ORTVz%2BDOFK1aVseoRPzSP%2FfnFuTILzItmBg3GZ8kVG1nQ7bY7pW6UWuqYWaJ70XW53N%2FHj4izwmbNMVKUY0q9mWBfhB5dEwTQ6yaRKCteCzWswSy6qGh8iLoyDjjzV4&X-Amz-Signature=5aacbe3c7480895ab8f3652c57c0407f63a683a3ce2fd11a69415f7c5003944d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
