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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SBXLPS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGN0%2FFt8h2BI6GCmzgN6lnH4FC5CeFBpuQWQchTvAa86AiAZULOHMWXHdFzkKs732z8JQiytfsUfA8iD8qNgFn7kaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDdx5i9G5q%2Fmj0CeHKtwDwOdl3O5bKYA%2FQTLu3IGTnUj8PibjsSBdUXu2N6QB%2BCKkov7EuHKyips3IXkRFbsJcdw7vYckr4bvuQ%2FBaffiJxpHyIxYnL3N1fuhD7uEcy06RkowlvpUkkxNZf8NOZ2NfCgOzqyLEdg108xQyEIabjAn8S8jHHw4IrIshLEipVSVdg%2BbnO2MISAQt%2FsV5uYN0jM883ZQDQhk6QeK77cer0xAsLeu1yLHNTlfEPeltMd%2BxF8PgYqiS58xhc3WPwwagSgxdgzMfDK29p2MDog0ATvg82oOWD%2FJKU7RZcN3uAx3b2ckHo1udeYXmQE1C%2BKfHnBYiwxDeAOe5079rcYxm4da4um9jN%2B168to2TXoiOL3bxz34KH7kEosKgK%2Bz4ixSqCE9QFZMQYbsQtKXfPOViemSlQw1f0Iy3U%2FbrXC%2B9%2Bm21lQmMsfMkHo1apER7v%2FJxj%2BO%2Bfw5SrtdunXFeqSIAsqX3lXacwMvVZ9vKDybDLF2onVEzSmwB%2Bq%2BRXeL5kEsVhQRdtja2DG56XtqFAidWgnX4WeA%2FoQxM6qyU%2BOj8%2BY41r53r1C4TCHTJpGRV07M4eVjc2F6L1wtJsvnf7ZEIK3v0PR6SUemMz%2BYF1vJU0po7LH1fRqnjzBEs8wt4j8vQY6pgFE7%2F7tM3qSYApWn%2F1%2FxN6Ev%2FupvR1KQAW9cCSjiRKl5VuLX9hd2mxIc8s0GWBBTcteii5ZH2kMuWsdS8w%2FenZ4lZ5aZKXxoWLaFjmd7WtP8J5OfjGMufmvKo5W4bosW9Gxrr6f2%2Bm%2Fq3zgEzuFhAWOlrdwdbg%2FuQmpTdanTxAfZTp%2BQLNKwdKXr%2FyHoUAExgZ37RRRNMPstBL4cSnFTYwX2j%2FEqCVn&X-Amz-Signature=270dcdb6b1edcda03e85ce9418e0f5fe41e83b39073131fdad4cc4eee565c535&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SBXLPS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGN0%2FFt8h2BI6GCmzgN6lnH4FC5CeFBpuQWQchTvAa86AiAZULOHMWXHdFzkKs732z8JQiytfsUfA8iD8qNgFn7kaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDdx5i9G5q%2Fmj0CeHKtwDwOdl3O5bKYA%2FQTLu3IGTnUj8PibjsSBdUXu2N6QB%2BCKkov7EuHKyips3IXkRFbsJcdw7vYckr4bvuQ%2FBaffiJxpHyIxYnL3N1fuhD7uEcy06RkowlvpUkkxNZf8NOZ2NfCgOzqyLEdg108xQyEIabjAn8S8jHHw4IrIshLEipVSVdg%2BbnO2MISAQt%2FsV5uYN0jM883ZQDQhk6QeK77cer0xAsLeu1yLHNTlfEPeltMd%2BxF8PgYqiS58xhc3WPwwagSgxdgzMfDK29p2MDog0ATvg82oOWD%2FJKU7RZcN3uAx3b2ckHo1udeYXmQE1C%2BKfHnBYiwxDeAOe5079rcYxm4da4um9jN%2B168to2TXoiOL3bxz34KH7kEosKgK%2Bz4ixSqCE9QFZMQYbsQtKXfPOViemSlQw1f0Iy3U%2FbrXC%2B9%2Bm21lQmMsfMkHo1apER7v%2FJxj%2BO%2Bfw5SrtdunXFeqSIAsqX3lXacwMvVZ9vKDybDLF2onVEzSmwB%2Bq%2BRXeL5kEsVhQRdtja2DG56XtqFAidWgnX4WeA%2FoQxM6qyU%2BOj8%2BY41r53r1C4TCHTJpGRV07M4eVjc2F6L1wtJsvnf7ZEIK3v0PR6SUemMz%2BYF1vJU0po7LH1fRqnjzBEs8wt4j8vQY6pgFE7%2F7tM3qSYApWn%2F1%2FxN6Ev%2FupvR1KQAW9cCSjiRKl5VuLX9hd2mxIc8s0GWBBTcteii5ZH2kMuWsdS8w%2FenZ4lZ5aZKXxoWLaFjmd7WtP8J5OfjGMufmvKo5W4bosW9Gxrr6f2%2Bm%2Fq3zgEzuFhAWOlrdwdbg%2FuQmpTdanTxAfZTp%2BQLNKwdKXr%2FyHoUAExgZ37RRRNMPstBL4cSnFTYwX2j%2FEqCVn&X-Amz-Signature=0382398e97e9a8d5dd2496e30d1e7aba638d57dc1aef058ec77d62d2e95b838d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SBXLPS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGN0%2FFt8h2BI6GCmzgN6lnH4FC5CeFBpuQWQchTvAa86AiAZULOHMWXHdFzkKs732z8JQiytfsUfA8iD8qNgFn7kaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDdx5i9G5q%2Fmj0CeHKtwDwOdl3O5bKYA%2FQTLu3IGTnUj8PibjsSBdUXu2N6QB%2BCKkov7EuHKyips3IXkRFbsJcdw7vYckr4bvuQ%2FBaffiJxpHyIxYnL3N1fuhD7uEcy06RkowlvpUkkxNZf8NOZ2NfCgOzqyLEdg108xQyEIabjAn8S8jHHw4IrIshLEipVSVdg%2BbnO2MISAQt%2FsV5uYN0jM883ZQDQhk6QeK77cer0xAsLeu1yLHNTlfEPeltMd%2BxF8PgYqiS58xhc3WPwwagSgxdgzMfDK29p2MDog0ATvg82oOWD%2FJKU7RZcN3uAx3b2ckHo1udeYXmQE1C%2BKfHnBYiwxDeAOe5079rcYxm4da4um9jN%2B168to2TXoiOL3bxz34KH7kEosKgK%2Bz4ixSqCE9QFZMQYbsQtKXfPOViemSlQw1f0Iy3U%2FbrXC%2B9%2Bm21lQmMsfMkHo1apER7v%2FJxj%2BO%2Bfw5SrtdunXFeqSIAsqX3lXacwMvVZ9vKDybDLF2onVEzSmwB%2Bq%2BRXeL5kEsVhQRdtja2DG56XtqFAidWgnX4WeA%2FoQxM6qyU%2BOj8%2BY41r53r1C4TCHTJpGRV07M4eVjc2F6L1wtJsvnf7ZEIK3v0PR6SUemMz%2BYF1vJU0po7LH1fRqnjzBEs8wt4j8vQY6pgFE7%2F7tM3qSYApWn%2F1%2FxN6Ev%2FupvR1KQAW9cCSjiRKl5VuLX9hd2mxIc8s0GWBBTcteii5ZH2kMuWsdS8w%2FenZ4lZ5aZKXxoWLaFjmd7WtP8J5OfjGMufmvKo5W4bosW9Gxrr6f2%2Bm%2Fq3zgEzuFhAWOlrdwdbg%2FuQmpTdanTxAfZTp%2BQLNKwdKXr%2FyHoUAExgZ37RRRNMPstBL4cSnFTYwX2j%2FEqCVn&X-Amz-Signature=243b7946f2278332c356000e773eb3155c2da8399aa87b3bc5c9d38dabc0ced4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SBXLPS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGN0%2FFt8h2BI6GCmzgN6lnH4FC5CeFBpuQWQchTvAa86AiAZULOHMWXHdFzkKs732z8JQiytfsUfA8iD8qNgFn7kaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDdx5i9G5q%2Fmj0CeHKtwDwOdl3O5bKYA%2FQTLu3IGTnUj8PibjsSBdUXu2N6QB%2BCKkov7EuHKyips3IXkRFbsJcdw7vYckr4bvuQ%2FBaffiJxpHyIxYnL3N1fuhD7uEcy06RkowlvpUkkxNZf8NOZ2NfCgOzqyLEdg108xQyEIabjAn8S8jHHw4IrIshLEipVSVdg%2BbnO2MISAQt%2FsV5uYN0jM883ZQDQhk6QeK77cer0xAsLeu1yLHNTlfEPeltMd%2BxF8PgYqiS58xhc3WPwwagSgxdgzMfDK29p2MDog0ATvg82oOWD%2FJKU7RZcN3uAx3b2ckHo1udeYXmQE1C%2BKfHnBYiwxDeAOe5079rcYxm4da4um9jN%2B168to2TXoiOL3bxz34KH7kEosKgK%2Bz4ixSqCE9QFZMQYbsQtKXfPOViemSlQw1f0Iy3U%2FbrXC%2B9%2Bm21lQmMsfMkHo1apER7v%2FJxj%2BO%2Bfw5SrtdunXFeqSIAsqX3lXacwMvVZ9vKDybDLF2onVEzSmwB%2Bq%2BRXeL5kEsVhQRdtja2DG56XtqFAidWgnX4WeA%2FoQxM6qyU%2BOj8%2BY41r53r1C4TCHTJpGRV07M4eVjc2F6L1wtJsvnf7ZEIK3v0PR6SUemMz%2BYF1vJU0po7LH1fRqnjzBEs8wt4j8vQY6pgFE7%2F7tM3qSYApWn%2F1%2FxN6Ev%2FupvR1KQAW9cCSjiRKl5VuLX9hd2mxIc8s0GWBBTcteii5ZH2kMuWsdS8w%2FenZ4lZ5aZKXxoWLaFjmd7WtP8J5OfjGMufmvKo5W4bosW9Gxrr6f2%2Bm%2Fq3zgEzuFhAWOlrdwdbg%2FuQmpTdanTxAfZTp%2BQLNKwdKXr%2FyHoUAExgZ37RRRNMPstBL4cSnFTYwX2j%2FEqCVn&X-Amz-Signature=1aa9d7bad16376dc83383f6e5d00ef7964c9dd6ed6d199f48bac19acb3294676&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SBXLPS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGN0%2FFt8h2BI6GCmzgN6lnH4FC5CeFBpuQWQchTvAa86AiAZULOHMWXHdFzkKs732z8JQiytfsUfA8iD8qNgFn7kaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDdx5i9G5q%2Fmj0CeHKtwDwOdl3O5bKYA%2FQTLu3IGTnUj8PibjsSBdUXu2N6QB%2BCKkov7EuHKyips3IXkRFbsJcdw7vYckr4bvuQ%2FBaffiJxpHyIxYnL3N1fuhD7uEcy06RkowlvpUkkxNZf8NOZ2NfCgOzqyLEdg108xQyEIabjAn8S8jHHw4IrIshLEipVSVdg%2BbnO2MISAQt%2FsV5uYN0jM883ZQDQhk6QeK77cer0xAsLeu1yLHNTlfEPeltMd%2BxF8PgYqiS58xhc3WPwwagSgxdgzMfDK29p2MDog0ATvg82oOWD%2FJKU7RZcN3uAx3b2ckHo1udeYXmQE1C%2BKfHnBYiwxDeAOe5079rcYxm4da4um9jN%2B168to2TXoiOL3bxz34KH7kEosKgK%2Bz4ixSqCE9QFZMQYbsQtKXfPOViemSlQw1f0Iy3U%2FbrXC%2B9%2Bm21lQmMsfMkHo1apER7v%2FJxj%2BO%2Bfw5SrtdunXFeqSIAsqX3lXacwMvVZ9vKDybDLF2onVEzSmwB%2Bq%2BRXeL5kEsVhQRdtja2DG56XtqFAidWgnX4WeA%2FoQxM6qyU%2BOj8%2BY41r53r1C4TCHTJpGRV07M4eVjc2F6L1wtJsvnf7ZEIK3v0PR6SUemMz%2BYF1vJU0po7LH1fRqnjzBEs8wt4j8vQY6pgFE7%2F7tM3qSYApWn%2F1%2FxN6Ev%2FupvR1KQAW9cCSjiRKl5VuLX9hd2mxIc8s0GWBBTcteii5ZH2kMuWsdS8w%2FenZ4lZ5aZKXxoWLaFjmd7WtP8J5OfjGMufmvKo5W4bosW9Gxrr6f2%2Bm%2Fq3zgEzuFhAWOlrdwdbg%2FuQmpTdanTxAfZTp%2BQLNKwdKXr%2FyHoUAExgZ37RRRNMPstBL4cSnFTYwX2j%2FEqCVn&X-Amz-Signature=2b680840eea81569f1694e7c07c56767040b654972cd9151e716f1a3f5bec188&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SBXLPS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGN0%2FFt8h2BI6GCmzgN6lnH4FC5CeFBpuQWQchTvAa86AiAZULOHMWXHdFzkKs732z8JQiytfsUfA8iD8qNgFn7kaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDdx5i9G5q%2Fmj0CeHKtwDwOdl3O5bKYA%2FQTLu3IGTnUj8PibjsSBdUXu2N6QB%2BCKkov7EuHKyips3IXkRFbsJcdw7vYckr4bvuQ%2FBaffiJxpHyIxYnL3N1fuhD7uEcy06RkowlvpUkkxNZf8NOZ2NfCgOzqyLEdg108xQyEIabjAn8S8jHHw4IrIshLEipVSVdg%2BbnO2MISAQt%2FsV5uYN0jM883ZQDQhk6QeK77cer0xAsLeu1yLHNTlfEPeltMd%2BxF8PgYqiS58xhc3WPwwagSgxdgzMfDK29p2MDog0ATvg82oOWD%2FJKU7RZcN3uAx3b2ckHo1udeYXmQE1C%2BKfHnBYiwxDeAOe5079rcYxm4da4um9jN%2B168to2TXoiOL3bxz34KH7kEosKgK%2Bz4ixSqCE9QFZMQYbsQtKXfPOViemSlQw1f0Iy3U%2FbrXC%2B9%2Bm21lQmMsfMkHo1apER7v%2FJxj%2BO%2Bfw5SrtdunXFeqSIAsqX3lXacwMvVZ9vKDybDLF2onVEzSmwB%2Bq%2BRXeL5kEsVhQRdtja2DG56XtqFAidWgnX4WeA%2FoQxM6qyU%2BOj8%2BY41r53r1C4TCHTJpGRV07M4eVjc2F6L1wtJsvnf7ZEIK3v0PR6SUemMz%2BYF1vJU0po7LH1fRqnjzBEs8wt4j8vQY6pgFE7%2F7tM3qSYApWn%2F1%2FxN6Ev%2FupvR1KQAW9cCSjiRKl5VuLX9hd2mxIc8s0GWBBTcteii5ZH2kMuWsdS8w%2FenZ4lZ5aZKXxoWLaFjmd7WtP8J5OfjGMufmvKo5W4bosW9Gxrr6f2%2Bm%2Fq3zgEzuFhAWOlrdwdbg%2FuQmpTdanTxAfZTp%2BQLNKwdKXr%2FyHoUAExgZ37RRRNMPstBL4cSnFTYwX2j%2FEqCVn&X-Amz-Signature=0a6e05293941a604bbc12b875db58d9a48e95da88748df6f5a8e285cf6dca673&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SBXLPS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGN0%2FFt8h2BI6GCmzgN6lnH4FC5CeFBpuQWQchTvAa86AiAZULOHMWXHdFzkKs732z8JQiytfsUfA8iD8qNgFn7kaSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDdx5i9G5q%2Fmj0CeHKtwDwOdl3O5bKYA%2FQTLu3IGTnUj8PibjsSBdUXu2N6QB%2BCKkov7EuHKyips3IXkRFbsJcdw7vYckr4bvuQ%2FBaffiJxpHyIxYnL3N1fuhD7uEcy06RkowlvpUkkxNZf8NOZ2NfCgOzqyLEdg108xQyEIabjAn8S8jHHw4IrIshLEipVSVdg%2BbnO2MISAQt%2FsV5uYN0jM883ZQDQhk6QeK77cer0xAsLeu1yLHNTlfEPeltMd%2BxF8PgYqiS58xhc3WPwwagSgxdgzMfDK29p2MDog0ATvg82oOWD%2FJKU7RZcN3uAx3b2ckHo1udeYXmQE1C%2BKfHnBYiwxDeAOe5079rcYxm4da4um9jN%2B168to2TXoiOL3bxz34KH7kEosKgK%2Bz4ixSqCE9QFZMQYbsQtKXfPOViemSlQw1f0Iy3U%2FbrXC%2B9%2Bm21lQmMsfMkHo1apER7v%2FJxj%2BO%2Bfw5SrtdunXFeqSIAsqX3lXacwMvVZ9vKDybDLF2onVEzSmwB%2Bq%2BRXeL5kEsVhQRdtja2DG56XtqFAidWgnX4WeA%2FoQxM6qyU%2BOj8%2BY41r53r1C4TCHTJpGRV07M4eVjc2F6L1wtJsvnf7ZEIK3v0PR6SUemMz%2BYF1vJU0po7LH1fRqnjzBEs8wt4j8vQY6pgFE7%2F7tM3qSYApWn%2F1%2FxN6Ev%2FupvR1KQAW9cCSjiRKl5VuLX9hd2mxIc8s0GWBBTcteii5ZH2kMuWsdS8w%2FenZ4lZ5aZKXxoWLaFjmd7WtP8J5OfjGMufmvKo5W4bosW9Gxrr6f2%2Bm%2Fq3zgEzuFhAWOlrdwdbg%2FuQmpTdanTxAfZTp%2BQLNKwdKXr%2FyHoUAExgZ37RRRNMPstBL4cSnFTYwX2j%2FEqCVn&X-Amz-Signature=a4ae060a7ec3c49960126ebb2b1f3207c8353cfae2417d5ef0086dcd3b428462&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
