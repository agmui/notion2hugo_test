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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCAGBAW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCC0ey%2BsLCY85PIlfFUQaaW2YthbinCW86m%2Bze39upUQIgeUyoeKIGAvJf%2BOGtibXgUsxu9%2BleLKPBRJX3zLcvAhsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFnn6ED75br2mfTG6yrcA%2FlJSifuHYrKt8aq9t1Ci19hU5NS1jFHbnP488ZZamqGx8oTA5OksrHmAw%2BAerXgRWmBCwN5VIEfQ2ml0Bwn3edMRtJbNEcjPeROMAhRyEd6C6Gr%2B5gSoC3tq9as908nRcydazrSAPhdlVri1XjzBLFaaQthlyDf5wJRlPnO7SLpPLdkaXsrFx6lGVo%2BmFBNh93PZfBERAjioKXj358MGgm2hobMqm%2BVtf2AglPayLDjEUfFCwgTjGpanITfZ%2BbQXDJwSVRQHn9SfUkTR7VgF727ucvMLDN9BP3mqpM2y05BpIn0tBqzdV6Lp30LBWBRQkZe2xPsWbwNirZiTNhOynkI9FNoKmxC%2Fjkr8S24VdjmZvg6GeS7Y6X5GuO555WtQDudPpSvSeaGTDQfcKwknkhFz0WHiZMbMH3l34u6biNyoG%2Fau%2FKcbTG8m%2FH0MF2ZSwLetITk29itKBPL%2FqYQkWaOSj1RM9uqzcWOBcC6O4hbfyeIfR1cA78NypCJ9DT06M8pcZEvFdYT9wOa%2Fevqyz5RwrE399hx%2BSuYrxRyCO8O3ds145%2FbGE%2F%2FsG8lYBkopzNbDl7kVbWSq9CIoqcO1D62gC0cQ8JNjwH5lIX5sgvH07n9rByr470QqldkMIfjpcMGOqUBqrJ0E7TXYsdl7PXGu7JM7PI%2FYmBbBkMyFueZbZCJLDAarstsXaG5RvHC9l2JnDpBZnjWRdfbhYPvCnZI2Fhsb2ANeOF8m4Nt8jgs4awiZa79xLFLsySyRXPx%2BG6HUWukXOCQfGq1SdEiocuubam5QOqeqES7X0fXVz0er8CCXHWCBpXNfMf5NQ522K81hsPT95ui4E%2BZIcLLocNHaaWtjvNh%2FIIG&X-Amz-Signature=c68fea0100d66a5e3c3df6cb30e49cb0f329ffec820713e29cd021f300f81d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCAGBAW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCC0ey%2BsLCY85PIlfFUQaaW2YthbinCW86m%2Bze39upUQIgeUyoeKIGAvJf%2BOGtibXgUsxu9%2BleLKPBRJX3zLcvAhsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFnn6ED75br2mfTG6yrcA%2FlJSifuHYrKt8aq9t1Ci19hU5NS1jFHbnP488ZZamqGx8oTA5OksrHmAw%2BAerXgRWmBCwN5VIEfQ2ml0Bwn3edMRtJbNEcjPeROMAhRyEd6C6Gr%2B5gSoC3tq9as908nRcydazrSAPhdlVri1XjzBLFaaQthlyDf5wJRlPnO7SLpPLdkaXsrFx6lGVo%2BmFBNh93PZfBERAjioKXj358MGgm2hobMqm%2BVtf2AglPayLDjEUfFCwgTjGpanITfZ%2BbQXDJwSVRQHn9SfUkTR7VgF727ucvMLDN9BP3mqpM2y05BpIn0tBqzdV6Lp30LBWBRQkZe2xPsWbwNirZiTNhOynkI9FNoKmxC%2Fjkr8S24VdjmZvg6GeS7Y6X5GuO555WtQDudPpSvSeaGTDQfcKwknkhFz0WHiZMbMH3l34u6biNyoG%2Fau%2FKcbTG8m%2FH0MF2ZSwLetITk29itKBPL%2FqYQkWaOSj1RM9uqzcWOBcC6O4hbfyeIfR1cA78NypCJ9DT06M8pcZEvFdYT9wOa%2Fevqyz5RwrE399hx%2BSuYrxRyCO8O3ds145%2FbGE%2F%2FsG8lYBkopzNbDl7kVbWSq9CIoqcO1D62gC0cQ8JNjwH5lIX5sgvH07n9rByr470QqldkMIfjpcMGOqUBqrJ0E7TXYsdl7PXGu7JM7PI%2FYmBbBkMyFueZbZCJLDAarstsXaG5RvHC9l2JnDpBZnjWRdfbhYPvCnZI2Fhsb2ANeOF8m4Nt8jgs4awiZa79xLFLsySyRXPx%2BG6HUWukXOCQfGq1SdEiocuubam5QOqeqES7X0fXVz0er8CCXHWCBpXNfMf5NQ522K81hsPT95ui4E%2BZIcLLocNHaaWtjvNh%2FIIG&X-Amz-Signature=b19fdcb795c319fa390a06de4d75290fbad428d6fe7677050682d03a95c558db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCAGBAW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCC0ey%2BsLCY85PIlfFUQaaW2YthbinCW86m%2Bze39upUQIgeUyoeKIGAvJf%2BOGtibXgUsxu9%2BleLKPBRJX3zLcvAhsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFnn6ED75br2mfTG6yrcA%2FlJSifuHYrKt8aq9t1Ci19hU5NS1jFHbnP488ZZamqGx8oTA5OksrHmAw%2BAerXgRWmBCwN5VIEfQ2ml0Bwn3edMRtJbNEcjPeROMAhRyEd6C6Gr%2B5gSoC3tq9as908nRcydazrSAPhdlVri1XjzBLFaaQthlyDf5wJRlPnO7SLpPLdkaXsrFx6lGVo%2BmFBNh93PZfBERAjioKXj358MGgm2hobMqm%2BVtf2AglPayLDjEUfFCwgTjGpanITfZ%2BbQXDJwSVRQHn9SfUkTR7VgF727ucvMLDN9BP3mqpM2y05BpIn0tBqzdV6Lp30LBWBRQkZe2xPsWbwNirZiTNhOynkI9FNoKmxC%2Fjkr8S24VdjmZvg6GeS7Y6X5GuO555WtQDudPpSvSeaGTDQfcKwknkhFz0WHiZMbMH3l34u6biNyoG%2Fau%2FKcbTG8m%2FH0MF2ZSwLetITk29itKBPL%2FqYQkWaOSj1RM9uqzcWOBcC6O4hbfyeIfR1cA78NypCJ9DT06M8pcZEvFdYT9wOa%2Fevqyz5RwrE399hx%2BSuYrxRyCO8O3ds145%2FbGE%2F%2FsG8lYBkopzNbDl7kVbWSq9CIoqcO1D62gC0cQ8JNjwH5lIX5sgvH07n9rByr470QqldkMIfjpcMGOqUBqrJ0E7TXYsdl7PXGu7JM7PI%2FYmBbBkMyFueZbZCJLDAarstsXaG5RvHC9l2JnDpBZnjWRdfbhYPvCnZI2Fhsb2ANeOF8m4Nt8jgs4awiZa79xLFLsySyRXPx%2BG6HUWukXOCQfGq1SdEiocuubam5QOqeqES7X0fXVz0er8CCXHWCBpXNfMf5NQ522K81hsPT95ui4E%2BZIcLLocNHaaWtjvNh%2FIIG&X-Amz-Signature=3dec30772f75bcc24ce3029b805c54ce3daa5082b03f3d4dd338e3e628a398db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCAGBAW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCC0ey%2BsLCY85PIlfFUQaaW2YthbinCW86m%2Bze39upUQIgeUyoeKIGAvJf%2BOGtibXgUsxu9%2BleLKPBRJX3zLcvAhsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFnn6ED75br2mfTG6yrcA%2FlJSifuHYrKt8aq9t1Ci19hU5NS1jFHbnP488ZZamqGx8oTA5OksrHmAw%2BAerXgRWmBCwN5VIEfQ2ml0Bwn3edMRtJbNEcjPeROMAhRyEd6C6Gr%2B5gSoC3tq9as908nRcydazrSAPhdlVri1XjzBLFaaQthlyDf5wJRlPnO7SLpPLdkaXsrFx6lGVo%2BmFBNh93PZfBERAjioKXj358MGgm2hobMqm%2BVtf2AglPayLDjEUfFCwgTjGpanITfZ%2BbQXDJwSVRQHn9SfUkTR7VgF727ucvMLDN9BP3mqpM2y05BpIn0tBqzdV6Lp30LBWBRQkZe2xPsWbwNirZiTNhOynkI9FNoKmxC%2Fjkr8S24VdjmZvg6GeS7Y6X5GuO555WtQDudPpSvSeaGTDQfcKwknkhFz0WHiZMbMH3l34u6biNyoG%2Fau%2FKcbTG8m%2FH0MF2ZSwLetITk29itKBPL%2FqYQkWaOSj1RM9uqzcWOBcC6O4hbfyeIfR1cA78NypCJ9DT06M8pcZEvFdYT9wOa%2Fevqyz5RwrE399hx%2BSuYrxRyCO8O3ds145%2FbGE%2F%2FsG8lYBkopzNbDl7kVbWSq9CIoqcO1D62gC0cQ8JNjwH5lIX5sgvH07n9rByr470QqldkMIfjpcMGOqUBqrJ0E7TXYsdl7PXGu7JM7PI%2FYmBbBkMyFueZbZCJLDAarstsXaG5RvHC9l2JnDpBZnjWRdfbhYPvCnZI2Fhsb2ANeOF8m4Nt8jgs4awiZa79xLFLsySyRXPx%2BG6HUWukXOCQfGq1SdEiocuubam5QOqeqES7X0fXVz0er8CCXHWCBpXNfMf5NQ522K81hsPT95ui4E%2BZIcLLocNHaaWtjvNh%2FIIG&X-Amz-Signature=577287c5b7b88fe0b4c8fed2b4247613ee5d90bfcd00caf46d8e8259f13f6f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCAGBAW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCC0ey%2BsLCY85PIlfFUQaaW2YthbinCW86m%2Bze39upUQIgeUyoeKIGAvJf%2BOGtibXgUsxu9%2BleLKPBRJX3zLcvAhsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFnn6ED75br2mfTG6yrcA%2FlJSifuHYrKt8aq9t1Ci19hU5NS1jFHbnP488ZZamqGx8oTA5OksrHmAw%2BAerXgRWmBCwN5VIEfQ2ml0Bwn3edMRtJbNEcjPeROMAhRyEd6C6Gr%2B5gSoC3tq9as908nRcydazrSAPhdlVri1XjzBLFaaQthlyDf5wJRlPnO7SLpPLdkaXsrFx6lGVo%2BmFBNh93PZfBERAjioKXj358MGgm2hobMqm%2BVtf2AglPayLDjEUfFCwgTjGpanITfZ%2BbQXDJwSVRQHn9SfUkTR7VgF727ucvMLDN9BP3mqpM2y05BpIn0tBqzdV6Lp30LBWBRQkZe2xPsWbwNirZiTNhOynkI9FNoKmxC%2Fjkr8S24VdjmZvg6GeS7Y6X5GuO555WtQDudPpSvSeaGTDQfcKwknkhFz0WHiZMbMH3l34u6biNyoG%2Fau%2FKcbTG8m%2FH0MF2ZSwLetITk29itKBPL%2FqYQkWaOSj1RM9uqzcWOBcC6O4hbfyeIfR1cA78NypCJ9DT06M8pcZEvFdYT9wOa%2Fevqyz5RwrE399hx%2BSuYrxRyCO8O3ds145%2FbGE%2F%2FsG8lYBkopzNbDl7kVbWSq9CIoqcO1D62gC0cQ8JNjwH5lIX5sgvH07n9rByr470QqldkMIfjpcMGOqUBqrJ0E7TXYsdl7PXGu7JM7PI%2FYmBbBkMyFueZbZCJLDAarstsXaG5RvHC9l2JnDpBZnjWRdfbhYPvCnZI2Fhsb2ANeOF8m4Nt8jgs4awiZa79xLFLsySyRXPx%2BG6HUWukXOCQfGq1SdEiocuubam5QOqeqES7X0fXVz0er8CCXHWCBpXNfMf5NQ522K81hsPT95ui4E%2BZIcLLocNHaaWtjvNh%2FIIG&X-Amz-Signature=9b0cd70526d27ec3dacc88ead9f031dc5a945cee6105b63dfcd6194176231f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCAGBAW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCC0ey%2BsLCY85PIlfFUQaaW2YthbinCW86m%2Bze39upUQIgeUyoeKIGAvJf%2BOGtibXgUsxu9%2BleLKPBRJX3zLcvAhsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFnn6ED75br2mfTG6yrcA%2FlJSifuHYrKt8aq9t1Ci19hU5NS1jFHbnP488ZZamqGx8oTA5OksrHmAw%2BAerXgRWmBCwN5VIEfQ2ml0Bwn3edMRtJbNEcjPeROMAhRyEd6C6Gr%2B5gSoC3tq9as908nRcydazrSAPhdlVri1XjzBLFaaQthlyDf5wJRlPnO7SLpPLdkaXsrFx6lGVo%2BmFBNh93PZfBERAjioKXj358MGgm2hobMqm%2BVtf2AglPayLDjEUfFCwgTjGpanITfZ%2BbQXDJwSVRQHn9SfUkTR7VgF727ucvMLDN9BP3mqpM2y05BpIn0tBqzdV6Lp30LBWBRQkZe2xPsWbwNirZiTNhOynkI9FNoKmxC%2Fjkr8S24VdjmZvg6GeS7Y6X5GuO555WtQDudPpSvSeaGTDQfcKwknkhFz0WHiZMbMH3l34u6biNyoG%2Fau%2FKcbTG8m%2FH0MF2ZSwLetITk29itKBPL%2FqYQkWaOSj1RM9uqzcWOBcC6O4hbfyeIfR1cA78NypCJ9DT06M8pcZEvFdYT9wOa%2Fevqyz5RwrE399hx%2BSuYrxRyCO8O3ds145%2FbGE%2F%2FsG8lYBkopzNbDl7kVbWSq9CIoqcO1D62gC0cQ8JNjwH5lIX5sgvH07n9rByr470QqldkMIfjpcMGOqUBqrJ0E7TXYsdl7PXGu7JM7PI%2FYmBbBkMyFueZbZCJLDAarstsXaG5RvHC9l2JnDpBZnjWRdfbhYPvCnZI2Fhsb2ANeOF8m4Nt8jgs4awiZa79xLFLsySyRXPx%2BG6HUWukXOCQfGq1SdEiocuubam5QOqeqES7X0fXVz0er8CCXHWCBpXNfMf5NQ522K81hsPT95ui4E%2BZIcLLocNHaaWtjvNh%2FIIG&X-Amz-Signature=703223131451b15eb20bbe6bbbeca753ac5ed2de491d845698df19375927dafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCAGBAW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCC0ey%2BsLCY85PIlfFUQaaW2YthbinCW86m%2Bze39upUQIgeUyoeKIGAvJf%2BOGtibXgUsxu9%2BleLKPBRJX3zLcvAhsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFnn6ED75br2mfTG6yrcA%2FlJSifuHYrKt8aq9t1Ci19hU5NS1jFHbnP488ZZamqGx8oTA5OksrHmAw%2BAerXgRWmBCwN5VIEfQ2ml0Bwn3edMRtJbNEcjPeROMAhRyEd6C6Gr%2B5gSoC3tq9as908nRcydazrSAPhdlVri1XjzBLFaaQthlyDf5wJRlPnO7SLpPLdkaXsrFx6lGVo%2BmFBNh93PZfBERAjioKXj358MGgm2hobMqm%2BVtf2AglPayLDjEUfFCwgTjGpanITfZ%2BbQXDJwSVRQHn9SfUkTR7VgF727ucvMLDN9BP3mqpM2y05BpIn0tBqzdV6Lp30LBWBRQkZe2xPsWbwNirZiTNhOynkI9FNoKmxC%2Fjkr8S24VdjmZvg6GeS7Y6X5GuO555WtQDudPpSvSeaGTDQfcKwknkhFz0WHiZMbMH3l34u6biNyoG%2Fau%2FKcbTG8m%2FH0MF2ZSwLetITk29itKBPL%2FqYQkWaOSj1RM9uqzcWOBcC6O4hbfyeIfR1cA78NypCJ9DT06M8pcZEvFdYT9wOa%2Fevqyz5RwrE399hx%2BSuYrxRyCO8O3ds145%2FbGE%2F%2FsG8lYBkopzNbDl7kVbWSq9CIoqcO1D62gC0cQ8JNjwH5lIX5sgvH07n9rByr470QqldkMIfjpcMGOqUBqrJ0E7TXYsdl7PXGu7JM7PI%2FYmBbBkMyFueZbZCJLDAarstsXaG5RvHC9l2JnDpBZnjWRdfbhYPvCnZI2Fhsb2ANeOF8m4Nt8jgs4awiZa79xLFLsySyRXPx%2BG6HUWukXOCQfGq1SdEiocuubam5QOqeqES7X0fXVz0er8CCXHWCBpXNfMf5NQ522K81hsPT95ui4E%2BZIcLLocNHaaWtjvNh%2FIIG&X-Amz-Signature=743924eb2d42c89537b501ad66bd7b1adfc194d58db747bc318f9d25eb21f701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
