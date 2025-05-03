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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K75ZMG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFul3SjzthxJRfeGi5bK%2FR1sO2jDl6GHSR2GWgzhAJ7pAiEA%2Bf8%2BKZiCpG6d8y1JIZUfwdCed8%2BDAFia%2BX9Ggt91MDEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6WPpiDycORMXP9OircA03yamKqXLRZcC%2BPxA8SNnueKejEmmIF0JghwUKmq95fwBq0NSHE6Y93yC%2B%2FvGvs59alC08BWm5Q4GIbyo0egaPSMKVF56lPNTM9Y9SwfN1UGLDiKUoLlnAUDQ1oMRI%2FhQGW2gAQmn23AREtsvaEBnHCeF7chtjRZbebu0Jkwbg5xAwnHIGIRIdkQtLDKjZb12mkvcx%2BlpSG594NRlO5towq3kG9EZuvDduP6rw2cAJTkrP1WKHFCirTcJjkN1Qf4jv6kzCGexdQQLg%2B043OvipBviQxNyRiaX0uU5JVhvIyLSVBXZ5%2BoMgVjhhud%2BGUjgeUa6tvscF%2BiCvwoCz6slW1DCbO%2FInrbiMqFjylRcfcsPM4VGaPhzDFF%2FiNIRZwN5UOX85syhGFv0RpS6mRd70xocdMTMS%2BvjXWb4OE9TH0VirjwVkbIAm4SedTiO%2BZz4mHIgpjo6hc3QNQjXOpX08PbLaxTVtxiMDX4USt6ECRs3wmw%2BhR0Bu4mZTSfuHnYf5ADkSe%2BjWD8CJKdDGlPTdKw%2FXfhFxXrivOvNbaHzEdKPRYk%2FTDRwENNhMR0jVP5UffSzRfx9AMaJz6CcZ4vFAOYAJjvAL%2B%2BVATuQzWp67u8DUyq3rdhXn7sl7DMK7e18AGOqUBak3xmD2Ao6s0vs7GN3Htu91B%2FfPwqEKfuQ4D2ZEdsfuW8E74M8aIr5pRzOkORhnYGgYPbFPNZla%2BUH1MM6i0q13iZJudJQt5K4MlPt%2FJF1dlhJpRE9elBxWHo2v9l1J%2FJe6xZ1kylhPZpqVXhfKdotCe4S2QiUBsfSqR2JiW64SX8e2BVjrRUS9HIwJniPTMJ5Wl7mbR9xDDxjGfZQ2krRfXwoyE&X-Amz-Signature=820f0b57838da8c8237775f1b9203261dc447efdafa5d7ee2c7079947c48fd11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K75ZMG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFul3SjzthxJRfeGi5bK%2FR1sO2jDl6GHSR2GWgzhAJ7pAiEA%2Bf8%2BKZiCpG6d8y1JIZUfwdCed8%2BDAFia%2BX9Ggt91MDEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6WPpiDycORMXP9OircA03yamKqXLRZcC%2BPxA8SNnueKejEmmIF0JghwUKmq95fwBq0NSHE6Y93yC%2B%2FvGvs59alC08BWm5Q4GIbyo0egaPSMKVF56lPNTM9Y9SwfN1UGLDiKUoLlnAUDQ1oMRI%2FhQGW2gAQmn23AREtsvaEBnHCeF7chtjRZbebu0Jkwbg5xAwnHIGIRIdkQtLDKjZb12mkvcx%2BlpSG594NRlO5towq3kG9EZuvDduP6rw2cAJTkrP1WKHFCirTcJjkN1Qf4jv6kzCGexdQQLg%2B043OvipBviQxNyRiaX0uU5JVhvIyLSVBXZ5%2BoMgVjhhud%2BGUjgeUa6tvscF%2BiCvwoCz6slW1DCbO%2FInrbiMqFjylRcfcsPM4VGaPhzDFF%2FiNIRZwN5UOX85syhGFv0RpS6mRd70xocdMTMS%2BvjXWb4OE9TH0VirjwVkbIAm4SedTiO%2BZz4mHIgpjo6hc3QNQjXOpX08PbLaxTVtxiMDX4USt6ECRs3wmw%2BhR0Bu4mZTSfuHnYf5ADkSe%2BjWD8CJKdDGlPTdKw%2FXfhFxXrivOvNbaHzEdKPRYk%2FTDRwENNhMR0jVP5UffSzRfx9AMaJz6CcZ4vFAOYAJjvAL%2B%2BVATuQzWp67u8DUyq3rdhXn7sl7DMK7e18AGOqUBak3xmD2Ao6s0vs7GN3Htu91B%2FfPwqEKfuQ4D2ZEdsfuW8E74M8aIr5pRzOkORhnYGgYPbFPNZla%2BUH1MM6i0q13iZJudJQt5K4MlPt%2FJF1dlhJpRE9elBxWHo2v9l1J%2FJe6xZ1kylhPZpqVXhfKdotCe4S2QiUBsfSqR2JiW64SX8e2BVjrRUS9HIwJniPTMJ5Wl7mbR9xDDxjGfZQ2krRfXwoyE&X-Amz-Signature=d6e2a37a23a22daf7381cb745e232dcfb7d0c292d71eb33423f6440085aba38a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K75ZMG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFul3SjzthxJRfeGi5bK%2FR1sO2jDl6GHSR2GWgzhAJ7pAiEA%2Bf8%2BKZiCpG6d8y1JIZUfwdCed8%2BDAFia%2BX9Ggt91MDEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6WPpiDycORMXP9OircA03yamKqXLRZcC%2BPxA8SNnueKejEmmIF0JghwUKmq95fwBq0NSHE6Y93yC%2B%2FvGvs59alC08BWm5Q4GIbyo0egaPSMKVF56lPNTM9Y9SwfN1UGLDiKUoLlnAUDQ1oMRI%2FhQGW2gAQmn23AREtsvaEBnHCeF7chtjRZbebu0Jkwbg5xAwnHIGIRIdkQtLDKjZb12mkvcx%2BlpSG594NRlO5towq3kG9EZuvDduP6rw2cAJTkrP1WKHFCirTcJjkN1Qf4jv6kzCGexdQQLg%2B043OvipBviQxNyRiaX0uU5JVhvIyLSVBXZ5%2BoMgVjhhud%2BGUjgeUa6tvscF%2BiCvwoCz6slW1DCbO%2FInrbiMqFjylRcfcsPM4VGaPhzDFF%2FiNIRZwN5UOX85syhGFv0RpS6mRd70xocdMTMS%2BvjXWb4OE9TH0VirjwVkbIAm4SedTiO%2BZz4mHIgpjo6hc3QNQjXOpX08PbLaxTVtxiMDX4USt6ECRs3wmw%2BhR0Bu4mZTSfuHnYf5ADkSe%2BjWD8CJKdDGlPTdKw%2FXfhFxXrivOvNbaHzEdKPRYk%2FTDRwENNhMR0jVP5UffSzRfx9AMaJz6CcZ4vFAOYAJjvAL%2B%2BVATuQzWp67u8DUyq3rdhXn7sl7DMK7e18AGOqUBak3xmD2Ao6s0vs7GN3Htu91B%2FfPwqEKfuQ4D2ZEdsfuW8E74M8aIr5pRzOkORhnYGgYPbFPNZla%2BUH1MM6i0q13iZJudJQt5K4MlPt%2FJF1dlhJpRE9elBxWHo2v9l1J%2FJe6xZ1kylhPZpqVXhfKdotCe4S2QiUBsfSqR2JiW64SX8e2BVjrRUS9HIwJniPTMJ5Wl7mbR9xDDxjGfZQ2krRfXwoyE&X-Amz-Signature=9e850142f2ffaebade133afdcb0b0761c8664e731408d4a06657e3528149adfe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K75ZMG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFul3SjzthxJRfeGi5bK%2FR1sO2jDl6GHSR2GWgzhAJ7pAiEA%2Bf8%2BKZiCpG6d8y1JIZUfwdCed8%2BDAFia%2BX9Ggt91MDEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6WPpiDycORMXP9OircA03yamKqXLRZcC%2BPxA8SNnueKejEmmIF0JghwUKmq95fwBq0NSHE6Y93yC%2B%2FvGvs59alC08BWm5Q4GIbyo0egaPSMKVF56lPNTM9Y9SwfN1UGLDiKUoLlnAUDQ1oMRI%2FhQGW2gAQmn23AREtsvaEBnHCeF7chtjRZbebu0Jkwbg5xAwnHIGIRIdkQtLDKjZb12mkvcx%2BlpSG594NRlO5towq3kG9EZuvDduP6rw2cAJTkrP1WKHFCirTcJjkN1Qf4jv6kzCGexdQQLg%2B043OvipBviQxNyRiaX0uU5JVhvIyLSVBXZ5%2BoMgVjhhud%2BGUjgeUa6tvscF%2BiCvwoCz6slW1DCbO%2FInrbiMqFjylRcfcsPM4VGaPhzDFF%2FiNIRZwN5UOX85syhGFv0RpS6mRd70xocdMTMS%2BvjXWb4OE9TH0VirjwVkbIAm4SedTiO%2BZz4mHIgpjo6hc3QNQjXOpX08PbLaxTVtxiMDX4USt6ECRs3wmw%2BhR0Bu4mZTSfuHnYf5ADkSe%2BjWD8CJKdDGlPTdKw%2FXfhFxXrivOvNbaHzEdKPRYk%2FTDRwENNhMR0jVP5UffSzRfx9AMaJz6CcZ4vFAOYAJjvAL%2B%2BVATuQzWp67u8DUyq3rdhXn7sl7DMK7e18AGOqUBak3xmD2Ao6s0vs7GN3Htu91B%2FfPwqEKfuQ4D2ZEdsfuW8E74M8aIr5pRzOkORhnYGgYPbFPNZla%2BUH1MM6i0q13iZJudJQt5K4MlPt%2FJF1dlhJpRE9elBxWHo2v9l1J%2FJe6xZ1kylhPZpqVXhfKdotCe4S2QiUBsfSqR2JiW64SX8e2BVjrRUS9HIwJniPTMJ5Wl7mbR9xDDxjGfZQ2krRfXwoyE&X-Amz-Signature=c13598c8fa4ee7ece6fc5a4e013c0e6fc2b6e8b8d2ec9bcc5376243db35c0a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K75ZMG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFul3SjzthxJRfeGi5bK%2FR1sO2jDl6GHSR2GWgzhAJ7pAiEA%2Bf8%2BKZiCpG6d8y1JIZUfwdCed8%2BDAFia%2BX9Ggt91MDEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6WPpiDycORMXP9OircA03yamKqXLRZcC%2BPxA8SNnueKejEmmIF0JghwUKmq95fwBq0NSHE6Y93yC%2B%2FvGvs59alC08BWm5Q4GIbyo0egaPSMKVF56lPNTM9Y9SwfN1UGLDiKUoLlnAUDQ1oMRI%2FhQGW2gAQmn23AREtsvaEBnHCeF7chtjRZbebu0Jkwbg5xAwnHIGIRIdkQtLDKjZb12mkvcx%2BlpSG594NRlO5towq3kG9EZuvDduP6rw2cAJTkrP1WKHFCirTcJjkN1Qf4jv6kzCGexdQQLg%2B043OvipBviQxNyRiaX0uU5JVhvIyLSVBXZ5%2BoMgVjhhud%2BGUjgeUa6tvscF%2BiCvwoCz6slW1DCbO%2FInrbiMqFjylRcfcsPM4VGaPhzDFF%2FiNIRZwN5UOX85syhGFv0RpS6mRd70xocdMTMS%2BvjXWb4OE9TH0VirjwVkbIAm4SedTiO%2BZz4mHIgpjo6hc3QNQjXOpX08PbLaxTVtxiMDX4USt6ECRs3wmw%2BhR0Bu4mZTSfuHnYf5ADkSe%2BjWD8CJKdDGlPTdKw%2FXfhFxXrivOvNbaHzEdKPRYk%2FTDRwENNhMR0jVP5UffSzRfx9AMaJz6CcZ4vFAOYAJjvAL%2B%2BVATuQzWp67u8DUyq3rdhXn7sl7DMK7e18AGOqUBak3xmD2Ao6s0vs7GN3Htu91B%2FfPwqEKfuQ4D2ZEdsfuW8E74M8aIr5pRzOkORhnYGgYPbFPNZla%2BUH1MM6i0q13iZJudJQt5K4MlPt%2FJF1dlhJpRE9elBxWHo2v9l1J%2FJe6xZ1kylhPZpqVXhfKdotCe4S2QiUBsfSqR2JiW64SX8e2BVjrRUS9HIwJniPTMJ5Wl7mbR9xDDxjGfZQ2krRfXwoyE&X-Amz-Signature=48ce040ac84ee3c17bce4d577963f325e038ad61077c87a858f1f59b0c8d60c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K75ZMG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFul3SjzthxJRfeGi5bK%2FR1sO2jDl6GHSR2GWgzhAJ7pAiEA%2Bf8%2BKZiCpG6d8y1JIZUfwdCed8%2BDAFia%2BX9Ggt91MDEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6WPpiDycORMXP9OircA03yamKqXLRZcC%2BPxA8SNnueKejEmmIF0JghwUKmq95fwBq0NSHE6Y93yC%2B%2FvGvs59alC08BWm5Q4GIbyo0egaPSMKVF56lPNTM9Y9SwfN1UGLDiKUoLlnAUDQ1oMRI%2FhQGW2gAQmn23AREtsvaEBnHCeF7chtjRZbebu0Jkwbg5xAwnHIGIRIdkQtLDKjZb12mkvcx%2BlpSG594NRlO5towq3kG9EZuvDduP6rw2cAJTkrP1WKHFCirTcJjkN1Qf4jv6kzCGexdQQLg%2B043OvipBviQxNyRiaX0uU5JVhvIyLSVBXZ5%2BoMgVjhhud%2BGUjgeUa6tvscF%2BiCvwoCz6slW1DCbO%2FInrbiMqFjylRcfcsPM4VGaPhzDFF%2FiNIRZwN5UOX85syhGFv0RpS6mRd70xocdMTMS%2BvjXWb4OE9TH0VirjwVkbIAm4SedTiO%2BZz4mHIgpjo6hc3QNQjXOpX08PbLaxTVtxiMDX4USt6ECRs3wmw%2BhR0Bu4mZTSfuHnYf5ADkSe%2BjWD8CJKdDGlPTdKw%2FXfhFxXrivOvNbaHzEdKPRYk%2FTDRwENNhMR0jVP5UffSzRfx9AMaJz6CcZ4vFAOYAJjvAL%2B%2BVATuQzWp67u8DUyq3rdhXn7sl7DMK7e18AGOqUBak3xmD2Ao6s0vs7GN3Htu91B%2FfPwqEKfuQ4D2ZEdsfuW8E74M8aIr5pRzOkORhnYGgYPbFPNZla%2BUH1MM6i0q13iZJudJQt5K4MlPt%2FJF1dlhJpRE9elBxWHo2v9l1J%2FJe6xZ1kylhPZpqVXhfKdotCe4S2QiUBsfSqR2JiW64SX8e2BVjrRUS9HIwJniPTMJ5Wl7mbR9xDDxjGfZQ2krRfXwoyE&X-Amz-Signature=d8e71703c0f365830884e9d7abbb635dc982ab6f694e791c4a2097b797178437&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K75ZMG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFul3SjzthxJRfeGi5bK%2FR1sO2jDl6GHSR2GWgzhAJ7pAiEA%2Bf8%2BKZiCpG6d8y1JIZUfwdCed8%2BDAFia%2BX9Ggt91MDEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6WPpiDycORMXP9OircA03yamKqXLRZcC%2BPxA8SNnueKejEmmIF0JghwUKmq95fwBq0NSHE6Y93yC%2B%2FvGvs59alC08BWm5Q4GIbyo0egaPSMKVF56lPNTM9Y9SwfN1UGLDiKUoLlnAUDQ1oMRI%2FhQGW2gAQmn23AREtsvaEBnHCeF7chtjRZbebu0Jkwbg5xAwnHIGIRIdkQtLDKjZb12mkvcx%2BlpSG594NRlO5towq3kG9EZuvDduP6rw2cAJTkrP1WKHFCirTcJjkN1Qf4jv6kzCGexdQQLg%2B043OvipBviQxNyRiaX0uU5JVhvIyLSVBXZ5%2BoMgVjhhud%2BGUjgeUa6tvscF%2BiCvwoCz6slW1DCbO%2FInrbiMqFjylRcfcsPM4VGaPhzDFF%2FiNIRZwN5UOX85syhGFv0RpS6mRd70xocdMTMS%2BvjXWb4OE9TH0VirjwVkbIAm4SedTiO%2BZz4mHIgpjo6hc3QNQjXOpX08PbLaxTVtxiMDX4USt6ECRs3wmw%2BhR0Bu4mZTSfuHnYf5ADkSe%2BjWD8CJKdDGlPTdKw%2FXfhFxXrivOvNbaHzEdKPRYk%2FTDRwENNhMR0jVP5UffSzRfx9AMaJz6CcZ4vFAOYAJjvAL%2B%2BVATuQzWp67u8DUyq3rdhXn7sl7DMK7e18AGOqUBak3xmD2Ao6s0vs7GN3Htu91B%2FfPwqEKfuQ4D2ZEdsfuW8E74M8aIr5pRzOkORhnYGgYPbFPNZla%2BUH1MM6i0q13iZJudJQt5K4MlPt%2FJF1dlhJpRE9elBxWHo2v9l1J%2FJe6xZ1kylhPZpqVXhfKdotCe4S2QiUBsfSqR2JiW64SX8e2BVjrRUS9HIwJniPTMJ5Wl7mbR9xDDxjGfZQ2krRfXwoyE&X-Amz-Signature=260e2835ca62a81d12248b8e704d93f1a95b7565c817812766a7ba1caaf70084&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
