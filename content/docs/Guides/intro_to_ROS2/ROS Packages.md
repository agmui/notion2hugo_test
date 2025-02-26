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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJXB56V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGIYw0LqobeQ5qKg8nJApAAm%2BcrmU0msPHbICKSaWkIgAiBPwhy78zM19ZmrnKgPK%2F4cf5o%2B63WKuAYFs5PO2mYHsCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMmczL3GCVNEKoG%2FwHKtwDsIbuKRCttwpdPc%2BzSB6RKLCWoUglb%2FN23ZMVmrTK6BJiPirl39vQev%2FCkVQ%2FAXidsixyx8aIvtcYiDmOVJs7iE%2FjcMh9hU5w8QkyOgbRoK9IPXu5isf2vudPDhpcKvHWSuNgjh8lRP0H4TN0FLGHq9s59CDWVdD662Ic9jVdW1yrdDOwlZr%2BzkMJqJ2RPm2Wi4w8bOZ9WGcIzj%2B2GdQCE1jTevyUOhs6250w5L%2BTCN7T0uHzSTC8tQWlPksUNgHl7L53uWi3F%2B2LT5h7GMuxvYmljZD2eo%2FoeJD2QAyap1hn36xzhewZbP2rKr9LK%2BvN5b8yr9KIAEFKgN8x4Q6W9M8dqtei8hRCKA9PCOB4xYghYUFFW8S00OOauEuPb%2BPD8%2Fz3QtaBooXhmmOQzOI%2FGRyl5IeotOe3CUvnz8zpq1YniB3Z19fox8N9ZyHnKSyWfBDwSRccDz%2F0yJMMq4%2Fqfcsw5P619G1IvmTVPWwhY79o1bTMMpB01dnHadGCMk3DeMaAnjWk%2BnthIPKQItAcJUVLlU1my9IBSu9GYrKDzWY3hR1jC%2FEqDpXEW8ap0wLbv%2BVv%2BWtrPfpbkzhAm33cAuxmUBmdv5cNgc9XSso9HeMvsS56An37wicCovkwkIn8vQY6pgGQGZFkIVVe7w1%2FdeluWp1r9XpQi1rJG5PLYBKJjiedAdJIObwFGaNYYuVaZ9vTvDFUHZ4gQsJOkvng6rGbfiEs626pfxyDAB9Iz0Rh1Lx%2B2%2Bmt4akEb00z1Uv0xaRqml6paCvhsgdIDjm%2BrtdMQdF7PVJvuFp3kvBs2U72QXawD7BDhkhvkeup2WJMKA42owy82hjG8CAevTZ4vIpZRwXjYCuhOHcQ&X-Amz-Signature=c42ff58870b4ba22c37733c8a598366d1aa4ad69b6a9c0604bad1c54eb2279af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJXB56V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGIYw0LqobeQ5qKg8nJApAAm%2BcrmU0msPHbICKSaWkIgAiBPwhy78zM19ZmrnKgPK%2F4cf5o%2B63WKuAYFs5PO2mYHsCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMmczL3GCVNEKoG%2FwHKtwDsIbuKRCttwpdPc%2BzSB6RKLCWoUglb%2FN23ZMVmrTK6BJiPirl39vQev%2FCkVQ%2FAXidsixyx8aIvtcYiDmOVJs7iE%2FjcMh9hU5w8QkyOgbRoK9IPXu5isf2vudPDhpcKvHWSuNgjh8lRP0H4TN0FLGHq9s59CDWVdD662Ic9jVdW1yrdDOwlZr%2BzkMJqJ2RPm2Wi4w8bOZ9WGcIzj%2B2GdQCE1jTevyUOhs6250w5L%2BTCN7T0uHzSTC8tQWlPksUNgHl7L53uWi3F%2B2LT5h7GMuxvYmljZD2eo%2FoeJD2QAyap1hn36xzhewZbP2rKr9LK%2BvN5b8yr9KIAEFKgN8x4Q6W9M8dqtei8hRCKA9PCOB4xYghYUFFW8S00OOauEuPb%2BPD8%2Fz3QtaBooXhmmOQzOI%2FGRyl5IeotOe3CUvnz8zpq1YniB3Z19fox8N9ZyHnKSyWfBDwSRccDz%2F0yJMMq4%2Fqfcsw5P619G1IvmTVPWwhY79o1bTMMpB01dnHadGCMk3DeMaAnjWk%2BnthIPKQItAcJUVLlU1my9IBSu9GYrKDzWY3hR1jC%2FEqDpXEW8ap0wLbv%2BVv%2BWtrPfpbkzhAm33cAuxmUBmdv5cNgc9XSso9HeMvsS56An37wicCovkwkIn8vQY6pgGQGZFkIVVe7w1%2FdeluWp1r9XpQi1rJG5PLYBKJjiedAdJIObwFGaNYYuVaZ9vTvDFUHZ4gQsJOkvng6rGbfiEs626pfxyDAB9Iz0Rh1Lx%2B2%2Bmt4akEb00z1Uv0xaRqml6paCvhsgdIDjm%2BrtdMQdF7PVJvuFp3kvBs2U72QXawD7BDhkhvkeup2WJMKA42owy82hjG8CAevTZ4vIpZRwXjYCuhOHcQ&X-Amz-Signature=52f4f001ab056c73f95d28ab62f50965b6fd73a64e6b527aae5088c3d43d9b07&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJXB56V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGIYw0LqobeQ5qKg8nJApAAm%2BcrmU0msPHbICKSaWkIgAiBPwhy78zM19ZmrnKgPK%2F4cf5o%2B63WKuAYFs5PO2mYHsCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMmczL3GCVNEKoG%2FwHKtwDsIbuKRCttwpdPc%2BzSB6RKLCWoUglb%2FN23ZMVmrTK6BJiPirl39vQev%2FCkVQ%2FAXidsixyx8aIvtcYiDmOVJs7iE%2FjcMh9hU5w8QkyOgbRoK9IPXu5isf2vudPDhpcKvHWSuNgjh8lRP0H4TN0FLGHq9s59CDWVdD662Ic9jVdW1yrdDOwlZr%2BzkMJqJ2RPm2Wi4w8bOZ9WGcIzj%2B2GdQCE1jTevyUOhs6250w5L%2BTCN7T0uHzSTC8tQWlPksUNgHl7L53uWi3F%2B2LT5h7GMuxvYmljZD2eo%2FoeJD2QAyap1hn36xzhewZbP2rKr9LK%2BvN5b8yr9KIAEFKgN8x4Q6W9M8dqtei8hRCKA9PCOB4xYghYUFFW8S00OOauEuPb%2BPD8%2Fz3QtaBooXhmmOQzOI%2FGRyl5IeotOe3CUvnz8zpq1YniB3Z19fox8N9ZyHnKSyWfBDwSRccDz%2F0yJMMq4%2Fqfcsw5P619G1IvmTVPWwhY79o1bTMMpB01dnHadGCMk3DeMaAnjWk%2BnthIPKQItAcJUVLlU1my9IBSu9GYrKDzWY3hR1jC%2FEqDpXEW8ap0wLbv%2BVv%2BWtrPfpbkzhAm33cAuxmUBmdv5cNgc9XSso9HeMvsS56An37wicCovkwkIn8vQY6pgGQGZFkIVVe7w1%2FdeluWp1r9XpQi1rJG5PLYBKJjiedAdJIObwFGaNYYuVaZ9vTvDFUHZ4gQsJOkvng6rGbfiEs626pfxyDAB9Iz0Rh1Lx%2B2%2Bmt4akEb00z1Uv0xaRqml6paCvhsgdIDjm%2BrtdMQdF7PVJvuFp3kvBs2U72QXawD7BDhkhvkeup2WJMKA42owy82hjG8CAevTZ4vIpZRwXjYCuhOHcQ&X-Amz-Signature=3627a9931e6d505d57e6a632906bcd0c7354ef1568f31351fe90c89cbf905eea&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJXB56V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGIYw0LqobeQ5qKg8nJApAAm%2BcrmU0msPHbICKSaWkIgAiBPwhy78zM19ZmrnKgPK%2F4cf5o%2B63WKuAYFs5PO2mYHsCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMmczL3GCVNEKoG%2FwHKtwDsIbuKRCttwpdPc%2BzSB6RKLCWoUglb%2FN23ZMVmrTK6BJiPirl39vQev%2FCkVQ%2FAXidsixyx8aIvtcYiDmOVJs7iE%2FjcMh9hU5w8QkyOgbRoK9IPXu5isf2vudPDhpcKvHWSuNgjh8lRP0H4TN0FLGHq9s59CDWVdD662Ic9jVdW1yrdDOwlZr%2BzkMJqJ2RPm2Wi4w8bOZ9WGcIzj%2B2GdQCE1jTevyUOhs6250w5L%2BTCN7T0uHzSTC8tQWlPksUNgHl7L53uWi3F%2B2LT5h7GMuxvYmljZD2eo%2FoeJD2QAyap1hn36xzhewZbP2rKr9LK%2BvN5b8yr9KIAEFKgN8x4Q6W9M8dqtei8hRCKA9PCOB4xYghYUFFW8S00OOauEuPb%2BPD8%2Fz3QtaBooXhmmOQzOI%2FGRyl5IeotOe3CUvnz8zpq1YniB3Z19fox8N9ZyHnKSyWfBDwSRccDz%2F0yJMMq4%2Fqfcsw5P619G1IvmTVPWwhY79o1bTMMpB01dnHadGCMk3DeMaAnjWk%2BnthIPKQItAcJUVLlU1my9IBSu9GYrKDzWY3hR1jC%2FEqDpXEW8ap0wLbv%2BVv%2BWtrPfpbkzhAm33cAuxmUBmdv5cNgc9XSso9HeMvsS56An37wicCovkwkIn8vQY6pgGQGZFkIVVe7w1%2FdeluWp1r9XpQi1rJG5PLYBKJjiedAdJIObwFGaNYYuVaZ9vTvDFUHZ4gQsJOkvng6rGbfiEs626pfxyDAB9Iz0Rh1Lx%2B2%2Bmt4akEb00z1Uv0xaRqml6paCvhsgdIDjm%2BrtdMQdF7PVJvuFp3kvBs2U72QXawD7BDhkhvkeup2WJMKA42owy82hjG8CAevTZ4vIpZRwXjYCuhOHcQ&X-Amz-Signature=7c8235f8f8008cd17f4598dd4bf449c9fc3b7e31d6540ada43c22cdaa3ad3dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJXB56V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGIYw0LqobeQ5qKg8nJApAAm%2BcrmU0msPHbICKSaWkIgAiBPwhy78zM19ZmrnKgPK%2F4cf5o%2B63WKuAYFs5PO2mYHsCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMmczL3GCVNEKoG%2FwHKtwDsIbuKRCttwpdPc%2BzSB6RKLCWoUglb%2FN23ZMVmrTK6BJiPirl39vQev%2FCkVQ%2FAXidsixyx8aIvtcYiDmOVJs7iE%2FjcMh9hU5w8QkyOgbRoK9IPXu5isf2vudPDhpcKvHWSuNgjh8lRP0H4TN0FLGHq9s59CDWVdD662Ic9jVdW1yrdDOwlZr%2BzkMJqJ2RPm2Wi4w8bOZ9WGcIzj%2B2GdQCE1jTevyUOhs6250w5L%2BTCN7T0uHzSTC8tQWlPksUNgHl7L53uWi3F%2B2LT5h7GMuxvYmljZD2eo%2FoeJD2QAyap1hn36xzhewZbP2rKr9LK%2BvN5b8yr9KIAEFKgN8x4Q6W9M8dqtei8hRCKA9PCOB4xYghYUFFW8S00OOauEuPb%2BPD8%2Fz3QtaBooXhmmOQzOI%2FGRyl5IeotOe3CUvnz8zpq1YniB3Z19fox8N9ZyHnKSyWfBDwSRccDz%2F0yJMMq4%2Fqfcsw5P619G1IvmTVPWwhY79o1bTMMpB01dnHadGCMk3DeMaAnjWk%2BnthIPKQItAcJUVLlU1my9IBSu9GYrKDzWY3hR1jC%2FEqDpXEW8ap0wLbv%2BVv%2BWtrPfpbkzhAm33cAuxmUBmdv5cNgc9XSso9HeMvsS56An37wicCovkwkIn8vQY6pgGQGZFkIVVe7w1%2FdeluWp1r9XpQi1rJG5PLYBKJjiedAdJIObwFGaNYYuVaZ9vTvDFUHZ4gQsJOkvng6rGbfiEs626pfxyDAB9Iz0Rh1Lx%2B2%2Bmt4akEb00z1Uv0xaRqml6paCvhsgdIDjm%2BrtdMQdF7PVJvuFp3kvBs2U72QXawD7BDhkhvkeup2WJMKA42owy82hjG8CAevTZ4vIpZRwXjYCuhOHcQ&X-Amz-Signature=703074866ed4dbb504a9a66cab0b893b233e22c11932b9bdf3f198a51487eb7e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJXB56V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGIYw0LqobeQ5qKg8nJApAAm%2BcrmU0msPHbICKSaWkIgAiBPwhy78zM19ZmrnKgPK%2F4cf5o%2B63WKuAYFs5PO2mYHsCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMmczL3GCVNEKoG%2FwHKtwDsIbuKRCttwpdPc%2BzSB6RKLCWoUglb%2FN23ZMVmrTK6BJiPirl39vQev%2FCkVQ%2FAXidsixyx8aIvtcYiDmOVJs7iE%2FjcMh9hU5w8QkyOgbRoK9IPXu5isf2vudPDhpcKvHWSuNgjh8lRP0H4TN0FLGHq9s59CDWVdD662Ic9jVdW1yrdDOwlZr%2BzkMJqJ2RPm2Wi4w8bOZ9WGcIzj%2B2GdQCE1jTevyUOhs6250w5L%2BTCN7T0uHzSTC8tQWlPksUNgHl7L53uWi3F%2B2LT5h7GMuxvYmljZD2eo%2FoeJD2QAyap1hn36xzhewZbP2rKr9LK%2BvN5b8yr9KIAEFKgN8x4Q6W9M8dqtei8hRCKA9PCOB4xYghYUFFW8S00OOauEuPb%2BPD8%2Fz3QtaBooXhmmOQzOI%2FGRyl5IeotOe3CUvnz8zpq1YniB3Z19fox8N9ZyHnKSyWfBDwSRccDz%2F0yJMMq4%2Fqfcsw5P619G1IvmTVPWwhY79o1bTMMpB01dnHadGCMk3DeMaAnjWk%2BnthIPKQItAcJUVLlU1my9IBSu9GYrKDzWY3hR1jC%2FEqDpXEW8ap0wLbv%2BVv%2BWtrPfpbkzhAm33cAuxmUBmdv5cNgc9XSso9HeMvsS56An37wicCovkwkIn8vQY6pgGQGZFkIVVe7w1%2FdeluWp1r9XpQi1rJG5PLYBKJjiedAdJIObwFGaNYYuVaZ9vTvDFUHZ4gQsJOkvng6rGbfiEs626pfxyDAB9Iz0Rh1Lx%2B2%2Bmt4akEb00z1Uv0xaRqml6paCvhsgdIDjm%2BrtdMQdF7PVJvuFp3kvBs2U72QXawD7BDhkhvkeup2WJMKA42owy82hjG8CAevTZ4vIpZRwXjYCuhOHcQ&X-Amz-Signature=82c46456930e800e44076b5677bc6ef3fd4ce6ff214e7c24fc2cfbd29f41c5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJXB56V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGIYw0LqobeQ5qKg8nJApAAm%2BcrmU0msPHbICKSaWkIgAiBPwhy78zM19ZmrnKgPK%2F4cf5o%2B63WKuAYFs5PO2mYHsCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMmczL3GCVNEKoG%2FwHKtwDsIbuKRCttwpdPc%2BzSB6RKLCWoUglb%2FN23ZMVmrTK6BJiPirl39vQev%2FCkVQ%2FAXidsixyx8aIvtcYiDmOVJs7iE%2FjcMh9hU5w8QkyOgbRoK9IPXu5isf2vudPDhpcKvHWSuNgjh8lRP0H4TN0FLGHq9s59CDWVdD662Ic9jVdW1yrdDOwlZr%2BzkMJqJ2RPm2Wi4w8bOZ9WGcIzj%2B2GdQCE1jTevyUOhs6250w5L%2BTCN7T0uHzSTC8tQWlPksUNgHl7L53uWi3F%2B2LT5h7GMuxvYmljZD2eo%2FoeJD2QAyap1hn36xzhewZbP2rKr9LK%2BvN5b8yr9KIAEFKgN8x4Q6W9M8dqtei8hRCKA9PCOB4xYghYUFFW8S00OOauEuPb%2BPD8%2Fz3QtaBooXhmmOQzOI%2FGRyl5IeotOe3CUvnz8zpq1YniB3Z19fox8N9ZyHnKSyWfBDwSRccDz%2F0yJMMq4%2Fqfcsw5P619G1IvmTVPWwhY79o1bTMMpB01dnHadGCMk3DeMaAnjWk%2BnthIPKQItAcJUVLlU1my9IBSu9GYrKDzWY3hR1jC%2FEqDpXEW8ap0wLbv%2BVv%2BWtrPfpbkzhAm33cAuxmUBmdv5cNgc9XSso9HeMvsS56An37wicCovkwkIn8vQY6pgGQGZFkIVVe7w1%2FdeluWp1r9XpQi1rJG5PLYBKJjiedAdJIObwFGaNYYuVaZ9vTvDFUHZ4gQsJOkvng6rGbfiEs626pfxyDAB9Iz0Rh1Lx%2B2%2Bmt4akEb00z1Uv0xaRqml6paCvhsgdIDjm%2BrtdMQdF7PVJvuFp3kvBs2U72QXawD7BDhkhvkeup2WJMKA42owy82hjG8CAevTZ4vIpZRwXjYCuhOHcQ&X-Amz-Signature=6c1750d6ba57f465ef14f226ae791401b2a7ebfef571058c54d316376c89b00b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
