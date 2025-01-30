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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4DVZQK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkX7EWJ%2F9nswPSFe8pL21DLSU4ghPy7cvS9NOlopZNAiAYl9odBZHEvWMLgZM3Kw%2Fkge%2Bzn9V2Y%2FSGwF2C84TQ6yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeIldMblQuSE8a%2FXKtwDBZKNiMTBEOmgI5vDnEJOGA8wN0evLCugohAOmvi0FKXLOLy7KTHiKe0nZ7VcV%2Bb04sOQQGKFNFClIefVWcwuRTZx2cVwhFqmFvfbg8hZqQ5T2EI2mDpa6HGg%2B7g9AROLjtJGU9nffvVAApH3gCr3qZlqWDWRLVLNMLua1vyoXiUvg%2B60KkQt0%2BG5r8J44zGuFqt5uwBaeePXNvcRxXky4kTxE4PIeab0dMCDkTSxnDQi%2BNEFknguRtS3xhgjj5Fo28BlQWE5fxdS56eh5wKJpwZW%2BQU0snUfsj2ExwVRGkLrgHc56xg6JVFLI4ccnF6EmWJ%2FLiIY2z27su2EC%2BmQVyz4eFIdUdLPGUDzM30cZyoIufz6ZbznibJ9kLqyG%2F913YOCtCsy%2B%2B6U0SJ%2BGB6%2BzjPbJDDI2loN3dwK%2BhFTOmVcQOwkM1M9ata2s84WH%2BRHNe6sWfz%2Fzig2IuOcRzNLGYebN9P349r4Eqrug2OrJg86TopwKwtRsRPCzcPO5KA%2F06pQaDzHjuaREUllBAwt2zYCCPEGnjpCjjAY99vyqFVgn3VjkbKQ54yNeH5Nayo7Vygef%2FUOgyEUTyu0fKMlidBBNzv8dBrA1MuVAWhQa%2F33RMFmqjGBLm2%2B4kgwjLTrvAY6pgFXChW1GdCwOBDoUN5PNsyysl1%2Fd85w%2BlMVRVGDi5HZ0pMy8JtAW1f4SSiINLSv4OsC5T1N8iujsD22trY2CqcpRvT%2B9sLA9THYxfSJOScE89JkjGTCbrL%2Bq7MezU5mapf%2BNhsbRsMZzRnUDFQzjbAsRXsWPj3ITrg%2FrmRDuc%2BjMF0LVDQ7Xri%2FPWeRUaTo5kuXXLEivc27mM0Xhrf3Smybvo4bm2Lx&X-Amz-Signature=53c870b37cadb7423cb8ecca8a6a3d76f40e71d7bab02536ad29f8889fbb6274&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4DVZQK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkX7EWJ%2F9nswPSFe8pL21DLSU4ghPy7cvS9NOlopZNAiAYl9odBZHEvWMLgZM3Kw%2Fkge%2Bzn9V2Y%2FSGwF2C84TQ6yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeIldMblQuSE8a%2FXKtwDBZKNiMTBEOmgI5vDnEJOGA8wN0evLCugohAOmvi0FKXLOLy7KTHiKe0nZ7VcV%2Bb04sOQQGKFNFClIefVWcwuRTZx2cVwhFqmFvfbg8hZqQ5T2EI2mDpa6HGg%2B7g9AROLjtJGU9nffvVAApH3gCr3qZlqWDWRLVLNMLua1vyoXiUvg%2B60KkQt0%2BG5r8J44zGuFqt5uwBaeePXNvcRxXky4kTxE4PIeab0dMCDkTSxnDQi%2BNEFknguRtS3xhgjj5Fo28BlQWE5fxdS56eh5wKJpwZW%2BQU0snUfsj2ExwVRGkLrgHc56xg6JVFLI4ccnF6EmWJ%2FLiIY2z27su2EC%2BmQVyz4eFIdUdLPGUDzM30cZyoIufz6ZbznibJ9kLqyG%2F913YOCtCsy%2B%2B6U0SJ%2BGB6%2BzjPbJDDI2loN3dwK%2BhFTOmVcQOwkM1M9ata2s84WH%2BRHNe6sWfz%2Fzig2IuOcRzNLGYebN9P349r4Eqrug2OrJg86TopwKwtRsRPCzcPO5KA%2F06pQaDzHjuaREUllBAwt2zYCCPEGnjpCjjAY99vyqFVgn3VjkbKQ54yNeH5Nayo7Vygef%2FUOgyEUTyu0fKMlidBBNzv8dBrA1MuVAWhQa%2F33RMFmqjGBLm2%2B4kgwjLTrvAY6pgFXChW1GdCwOBDoUN5PNsyysl1%2Fd85w%2BlMVRVGDi5HZ0pMy8JtAW1f4SSiINLSv4OsC5T1N8iujsD22trY2CqcpRvT%2B9sLA9THYxfSJOScE89JkjGTCbrL%2Bq7MezU5mapf%2BNhsbRsMZzRnUDFQzjbAsRXsWPj3ITrg%2FrmRDuc%2BjMF0LVDQ7Xri%2FPWeRUaTo5kuXXLEivc27mM0Xhrf3Smybvo4bm2Lx&X-Amz-Signature=c477952135c487815d8a20bf0c735ac73431156f3e9cc3c7a8bf74bd0759d3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4DVZQK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkX7EWJ%2F9nswPSFe8pL21DLSU4ghPy7cvS9NOlopZNAiAYl9odBZHEvWMLgZM3Kw%2Fkge%2Bzn9V2Y%2FSGwF2C84TQ6yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeIldMblQuSE8a%2FXKtwDBZKNiMTBEOmgI5vDnEJOGA8wN0evLCugohAOmvi0FKXLOLy7KTHiKe0nZ7VcV%2Bb04sOQQGKFNFClIefVWcwuRTZx2cVwhFqmFvfbg8hZqQ5T2EI2mDpa6HGg%2B7g9AROLjtJGU9nffvVAApH3gCr3qZlqWDWRLVLNMLua1vyoXiUvg%2B60KkQt0%2BG5r8J44zGuFqt5uwBaeePXNvcRxXky4kTxE4PIeab0dMCDkTSxnDQi%2BNEFknguRtS3xhgjj5Fo28BlQWE5fxdS56eh5wKJpwZW%2BQU0snUfsj2ExwVRGkLrgHc56xg6JVFLI4ccnF6EmWJ%2FLiIY2z27su2EC%2BmQVyz4eFIdUdLPGUDzM30cZyoIufz6ZbznibJ9kLqyG%2F913YOCtCsy%2B%2B6U0SJ%2BGB6%2BzjPbJDDI2loN3dwK%2BhFTOmVcQOwkM1M9ata2s84WH%2BRHNe6sWfz%2Fzig2IuOcRzNLGYebN9P349r4Eqrug2OrJg86TopwKwtRsRPCzcPO5KA%2F06pQaDzHjuaREUllBAwt2zYCCPEGnjpCjjAY99vyqFVgn3VjkbKQ54yNeH5Nayo7Vygef%2FUOgyEUTyu0fKMlidBBNzv8dBrA1MuVAWhQa%2F33RMFmqjGBLm2%2B4kgwjLTrvAY6pgFXChW1GdCwOBDoUN5PNsyysl1%2Fd85w%2BlMVRVGDi5HZ0pMy8JtAW1f4SSiINLSv4OsC5T1N8iujsD22trY2CqcpRvT%2B9sLA9THYxfSJOScE89JkjGTCbrL%2Bq7MezU5mapf%2BNhsbRsMZzRnUDFQzjbAsRXsWPj3ITrg%2FrmRDuc%2BjMF0LVDQ7Xri%2FPWeRUaTo5kuXXLEivc27mM0Xhrf3Smybvo4bm2Lx&X-Amz-Signature=d11b698d6f1bc46d90cefff2717bc5582d5a2af21e9668286367a135bccdc9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4DVZQK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkX7EWJ%2F9nswPSFe8pL21DLSU4ghPy7cvS9NOlopZNAiAYl9odBZHEvWMLgZM3Kw%2Fkge%2Bzn9V2Y%2FSGwF2C84TQ6yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeIldMblQuSE8a%2FXKtwDBZKNiMTBEOmgI5vDnEJOGA8wN0evLCugohAOmvi0FKXLOLy7KTHiKe0nZ7VcV%2Bb04sOQQGKFNFClIefVWcwuRTZx2cVwhFqmFvfbg8hZqQ5T2EI2mDpa6HGg%2B7g9AROLjtJGU9nffvVAApH3gCr3qZlqWDWRLVLNMLua1vyoXiUvg%2B60KkQt0%2BG5r8J44zGuFqt5uwBaeePXNvcRxXky4kTxE4PIeab0dMCDkTSxnDQi%2BNEFknguRtS3xhgjj5Fo28BlQWE5fxdS56eh5wKJpwZW%2BQU0snUfsj2ExwVRGkLrgHc56xg6JVFLI4ccnF6EmWJ%2FLiIY2z27su2EC%2BmQVyz4eFIdUdLPGUDzM30cZyoIufz6ZbznibJ9kLqyG%2F913YOCtCsy%2B%2B6U0SJ%2BGB6%2BzjPbJDDI2loN3dwK%2BhFTOmVcQOwkM1M9ata2s84WH%2BRHNe6sWfz%2Fzig2IuOcRzNLGYebN9P349r4Eqrug2OrJg86TopwKwtRsRPCzcPO5KA%2F06pQaDzHjuaREUllBAwt2zYCCPEGnjpCjjAY99vyqFVgn3VjkbKQ54yNeH5Nayo7Vygef%2FUOgyEUTyu0fKMlidBBNzv8dBrA1MuVAWhQa%2F33RMFmqjGBLm2%2B4kgwjLTrvAY6pgFXChW1GdCwOBDoUN5PNsyysl1%2Fd85w%2BlMVRVGDi5HZ0pMy8JtAW1f4SSiINLSv4OsC5T1N8iujsD22trY2CqcpRvT%2B9sLA9THYxfSJOScE89JkjGTCbrL%2Bq7MezU5mapf%2BNhsbRsMZzRnUDFQzjbAsRXsWPj3ITrg%2FrmRDuc%2BjMF0LVDQ7Xri%2FPWeRUaTo5kuXXLEivc27mM0Xhrf3Smybvo4bm2Lx&X-Amz-Signature=7a04dd7f3c307cf696514a16c5bf5b0e625310ceeb40f2134f7b2f4169b8a2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4DVZQK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkX7EWJ%2F9nswPSFe8pL21DLSU4ghPy7cvS9NOlopZNAiAYl9odBZHEvWMLgZM3Kw%2Fkge%2Bzn9V2Y%2FSGwF2C84TQ6yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeIldMblQuSE8a%2FXKtwDBZKNiMTBEOmgI5vDnEJOGA8wN0evLCugohAOmvi0FKXLOLy7KTHiKe0nZ7VcV%2Bb04sOQQGKFNFClIefVWcwuRTZx2cVwhFqmFvfbg8hZqQ5T2EI2mDpa6HGg%2B7g9AROLjtJGU9nffvVAApH3gCr3qZlqWDWRLVLNMLua1vyoXiUvg%2B60KkQt0%2BG5r8J44zGuFqt5uwBaeePXNvcRxXky4kTxE4PIeab0dMCDkTSxnDQi%2BNEFknguRtS3xhgjj5Fo28BlQWE5fxdS56eh5wKJpwZW%2BQU0snUfsj2ExwVRGkLrgHc56xg6JVFLI4ccnF6EmWJ%2FLiIY2z27su2EC%2BmQVyz4eFIdUdLPGUDzM30cZyoIufz6ZbznibJ9kLqyG%2F913YOCtCsy%2B%2B6U0SJ%2BGB6%2BzjPbJDDI2loN3dwK%2BhFTOmVcQOwkM1M9ata2s84WH%2BRHNe6sWfz%2Fzig2IuOcRzNLGYebN9P349r4Eqrug2OrJg86TopwKwtRsRPCzcPO5KA%2F06pQaDzHjuaREUllBAwt2zYCCPEGnjpCjjAY99vyqFVgn3VjkbKQ54yNeH5Nayo7Vygef%2FUOgyEUTyu0fKMlidBBNzv8dBrA1MuVAWhQa%2F33RMFmqjGBLm2%2B4kgwjLTrvAY6pgFXChW1GdCwOBDoUN5PNsyysl1%2Fd85w%2BlMVRVGDi5HZ0pMy8JtAW1f4SSiINLSv4OsC5T1N8iujsD22trY2CqcpRvT%2B9sLA9THYxfSJOScE89JkjGTCbrL%2Bq7MezU5mapf%2BNhsbRsMZzRnUDFQzjbAsRXsWPj3ITrg%2FrmRDuc%2BjMF0LVDQ7Xri%2FPWeRUaTo5kuXXLEivc27mM0Xhrf3Smybvo4bm2Lx&X-Amz-Signature=41ec6c1a137defbcf81195d2c2efb925f870eea24fcc17fc5a2c699dd2444b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4DVZQK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkX7EWJ%2F9nswPSFe8pL21DLSU4ghPy7cvS9NOlopZNAiAYl9odBZHEvWMLgZM3Kw%2Fkge%2Bzn9V2Y%2FSGwF2C84TQ6yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeIldMblQuSE8a%2FXKtwDBZKNiMTBEOmgI5vDnEJOGA8wN0evLCugohAOmvi0FKXLOLy7KTHiKe0nZ7VcV%2Bb04sOQQGKFNFClIefVWcwuRTZx2cVwhFqmFvfbg8hZqQ5T2EI2mDpa6HGg%2B7g9AROLjtJGU9nffvVAApH3gCr3qZlqWDWRLVLNMLua1vyoXiUvg%2B60KkQt0%2BG5r8J44zGuFqt5uwBaeePXNvcRxXky4kTxE4PIeab0dMCDkTSxnDQi%2BNEFknguRtS3xhgjj5Fo28BlQWE5fxdS56eh5wKJpwZW%2BQU0snUfsj2ExwVRGkLrgHc56xg6JVFLI4ccnF6EmWJ%2FLiIY2z27su2EC%2BmQVyz4eFIdUdLPGUDzM30cZyoIufz6ZbznibJ9kLqyG%2F913YOCtCsy%2B%2B6U0SJ%2BGB6%2BzjPbJDDI2loN3dwK%2BhFTOmVcQOwkM1M9ata2s84WH%2BRHNe6sWfz%2Fzig2IuOcRzNLGYebN9P349r4Eqrug2OrJg86TopwKwtRsRPCzcPO5KA%2F06pQaDzHjuaREUllBAwt2zYCCPEGnjpCjjAY99vyqFVgn3VjkbKQ54yNeH5Nayo7Vygef%2FUOgyEUTyu0fKMlidBBNzv8dBrA1MuVAWhQa%2F33RMFmqjGBLm2%2B4kgwjLTrvAY6pgFXChW1GdCwOBDoUN5PNsyysl1%2Fd85w%2BlMVRVGDi5HZ0pMy8JtAW1f4SSiINLSv4OsC5T1N8iujsD22trY2CqcpRvT%2B9sLA9THYxfSJOScE89JkjGTCbrL%2Bq7MezU5mapf%2BNhsbRsMZzRnUDFQzjbAsRXsWPj3ITrg%2FrmRDuc%2BjMF0LVDQ7Xri%2FPWeRUaTo5kuXXLEivc27mM0Xhrf3Smybvo4bm2Lx&X-Amz-Signature=93668cc9dd440edf522066322cb83c08bbc93dfe11df0ceabd488d2c17e3ba44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4DVZQK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FkX7EWJ%2F9nswPSFe8pL21DLSU4ghPy7cvS9NOlopZNAiAYl9odBZHEvWMLgZM3Kw%2Fkge%2Bzn9V2Y%2FSGwF2C84TQ6yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeIldMblQuSE8a%2FXKtwDBZKNiMTBEOmgI5vDnEJOGA8wN0evLCugohAOmvi0FKXLOLy7KTHiKe0nZ7VcV%2Bb04sOQQGKFNFClIefVWcwuRTZx2cVwhFqmFvfbg8hZqQ5T2EI2mDpa6HGg%2B7g9AROLjtJGU9nffvVAApH3gCr3qZlqWDWRLVLNMLua1vyoXiUvg%2B60KkQt0%2BG5r8J44zGuFqt5uwBaeePXNvcRxXky4kTxE4PIeab0dMCDkTSxnDQi%2BNEFknguRtS3xhgjj5Fo28BlQWE5fxdS56eh5wKJpwZW%2BQU0snUfsj2ExwVRGkLrgHc56xg6JVFLI4ccnF6EmWJ%2FLiIY2z27su2EC%2BmQVyz4eFIdUdLPGUDzM30cZyoIufz6ZbznibJ9kLqyG%2F913YOCtCsy%2B%2B6U0SJ%2BGB6%2BzjPbJDDI2loN3dwK%2BhFTOmVcQOwkM1M9ata2s84WH%2BRHNe6sWfz%2Fzig2IuOcRzNLGYebN9P349r4Eqrug2OrJg86TopwKwtRsRPCzcPO5KA%2F06pQaDzHjuaREUllBAwt2zYCCPEGnjpCjjAY99vyqFVgn3VjkbKQ54yNeH5Nayo7Vygef%2FUOgyEUTyu0fKMlidBBNzv8dBrA1MuVAWhQa%2F33RMFmqjGBLm2%2B4kgwjLTrvAY6pgFXChW1GdCwOBDoUN5PNsyysl1%2Fd85w%2BlMVRVGDi5HZ0pMy8JtAW1f4SSiINLSv4OsC5T1N8iujsD22trY2CqcpRvT%2B9sLA9THYxfSJOScE89JkjGTCbrL%2Bq7MezU5mapf%2BNhsbRsMZzRnUDFQzjbAsRXsWPj3ITrg%2FrmRDuc%2BjMF0LVDQ7Xri%2FPWeRUaTo5kuXXLEivc27mM0Xhrf3Smybvo4bm2Lx&X-Amz-Signature=8fd78f010f8e9ea5364f070dd196dcb2a29efec1986356ac45ce1ba085ae4e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
