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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSGUQHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoy%2F%2F0DmCrnu9pRT03iHecrlrqUY2BKLe%2BUK%2BktNbs7AIhAJ92G9ngAUj2eB8bUHroFE6fy8Y86gPW8TRwCkmhagQ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoEjd0DA857gXeATIq3AMCSonpQ6Lt0TAW78je95X7Fh4nYN%2Be6vKxCQoOo7Zk9BS2xKIz4veSwTXEZT%2BxQ6s0RA7X8zgnbdDSgsyOpEZkgQKGgXPWgHdF10EzlGXGkuf00fmKAot%2BLCaBElAl%2FWYdBQ4GhZ1s2aS26uzZijOuB0TyJqGKPbXoc852GE9JrokzsgAdmji0ydI%2BmO0kAlk9YrcQZtUE6BWCeo7xGbJ%2BWvO50ylSlICL3yI8bwGeE%2BnM%2BzdVPYAIq9LQFsS2SKtLa7nE7Uvag5Eef9exj2dJya%2BNFXcZio%2FmR9Uc9WLSU1V2lJ3azgeTyr20dGF0bwipno5%2FZuz4s5BehznQnCjzhurJWNCFwr%2FUIweAu6agc05AOvZpXwp9l0IXEJgHaglrE93ffsdiy7BqkoHEmpe4D8O%2FKhWVPW4P0OVF8fcaaLGceuTJxWnvieiGKAxVzn0r7wxpuaUjd5CrR2sglMOU0DC7%2BxUx2CaLQwLuk%2BH%2BJE5Wr0qp8KDY2AvC6MTfCCpzWfU2JqNy6A2i%2FTdoRQvdWQMfKpX4%2BgmT0RL0dkFJOVxZKIJYa%2Bw7t4v5DXUKQ0IajFhCUcsY%2BsLNo1HsgHzLDMeoNNnZWMcWmYXNrmDRmuWcZS9ly63qGiJpbTCSiKLCBjqkAdgSpPeffRQnfote8OWOF54OZKR6TQtAQSks06TbAd3rEpTZ%2BnZBH9bZBMaxMJJjgMIrr4A60aaRgE9MWf3A%2FjshpiwLVkVpTNunXEkWhhB6RHVx2rk1jf7YKHhQc1KB2TlJ7ag3BiliOWja8QQaGDtrBIAVK3OrZSh2c6XvE%2BiTJt1470DPKe6KsaHdy1%2BRcL7LODc%2BB4N02C%2FIkSEmhAC%2BkW8y&X-Amz-Signature=fd642b43b09534e6b54236e15331490bb494d37eed32072ed9a7b43a51d27e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSGUQHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoy%2F%2F0DmCrnu9pRT03iHecrlrqUY2BKLe%2BUK%2BktNbs7AIhAJ92G9ngAUj2eB8bUHroFE6fy8Y86gPW8TRwCkmhagQ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoEjd0DA857gXeATIq3AMCSonpQ6Lt0TAW78je95X7Fh4nYN%2Be6vKxCQoOo7Zk9BS2xKIz4veSwTXEZT%2BxQ6s0RA7X8zgnbdDSgsyOpEZkgQKGgXPWgHdF10EzlGXGkuf00fmKAot%2BLCaBElAl%2FWYdBQ4GhZ1s2aS26uzZijOuB0TyJqGKPbXoc852GE9JrokzsgAdmji0ydI%2BmO0kAlk9YrcQZtUE6BWCeo7xGbJ%2BWvO50ylSlICL3yI8bwGeE%2BnM%2BzdVPYAIq9LQFsS2SKtLa7nE7Uvag5Eef9exj2dJya%2BNFXcZio%2FmR9Uc9WLSU1V2lJ3azgeTyr20dGF0bwipno5%2FZuz4s5BehznQnCjzhurJWNCFwr%2FUIweAu6agc05AOvZpXwp9l0IXEJgHaglrE93ffsdiy7BqkoHEmpe4D8O%2FKhWVPW4P0OVF8fcaaLGceuTJxWnvieiGKAxVzn0r7wxpuaUjd5CrR2sglMOU0DC7%2BxUx2CaLQwLuk%2BH%2BJE5Wr0qp8KDY2AvC6MTfCCpzWfU2JqNy6A2i%2FTdoRQvdWQMfKpX4%2BgmT0RL0dkFJOVxZKIJYa%2Bw7t4v5DXUKQ0IajFhCUcsY%2BsLNo1HsgHzLDMeoNNnZWMcWmYXNrmDRmuWcZS9ly63qGiJpbTCSiKLCBjqkAdgSpPeffRQnfote8OWOF54OZKR6TQtAQSks06TbAd3rEpTZ%2BnZBH9bZBMaxMJJjgMIrr4A60aaRgE9MWf3A%2FjshpiwLVkVpTNunXEkWhhB6RHVx2rk1jf7YKHhQc1KB2TlJ7ag3BiliOWja8QQaGDtrBIAVK3OrZSh2c6XvE%2BiTJt1470DPKe6KsaHdy1%2BRcL7LODc%2BB4N02C%2FIkSEmhAC%2BkW8y&X-Amz-Signature=1e5c49f0890160c47df6200ae3a19fef35e55f9f4681b116ac450abaf375b572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSGUQHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoy%2F%2F0DmCrnu9pRT03iHecrlrqUY2BKLe%2BUK%2BktNbs7AIhAJ92G9ngAUj2eB8bUHroFE6fy8Y86gPW8TRwCkmhagQ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoEjd0DA857gXeATIq3AMCSonpQ6Lt0TAW78je95X7Fh4nYN%2Be6vKxCQoOo7Zk9BS2xKIz4veSwTXEZT%2BxQ6s0RA7X8zgnbdDSgsyOpEZkgQKGgXPWgHdF10EzlGXGkuf00fmKAot%2BLCaBElAl%2FWYdBQ4GhZ1s2aS26uzZijOuB0TyJqGKPbXoc852GE9JrokzsgAdmji0ydI%2BmO0kAlk9YrcQZtUE6BWCeo7xGbJ%2BWvO50ylSlICL3yI8bwGeE%2BnM%2BzdVPYAIq9LQFsS2SKtLa7nE7Uvag5Eef9exj2dJya%2BNFXcZio%2FmR9Uc9WLSU1V2lJ3azgeTyr20dGF0bwipno5%2FZuz4s5BehznQnCjzhurJWNCFwr%2FUIweAu6agc05AOvZpXwp9l0IXEJgHaglrE93ffsdiy7BqkoHEmpe4D8O%2FKhWVPW4P0OVF8fcaaLGceuTJxWnvieiGKAxVzn0r7wxpuaUjd5CrR2sglMOU0DC7%2BxUx2CaLQwLuk%2BH%2BJE5Wr0qp8KDY2AvC6MTfCCpzWfU2JqNy6A2i%2FTdoRQvdWQMfKpX4%2BgmT0RL0dkFJOVxZKIJYa%2Bw7t4v5DXUKQ0IajFhCUcsY%2BsLNo1HsgHzLDMeoNNnZWMcWmYXNrmDRmuWcZS9ly63qGiJpbTCSiKLCBjqkAdgSpPeffRQnfote8OWOF54OZKR6TQtAQSks06TbAd3rEpTZ%2BnZBH9bZBMaxMJJjgMIrr4A60aaRgE9MWf3A%2FjshpiwLVkVpTNunXEkWhhB6RHVx2rk1jf7YKHhQc1KB2TlJ7ag3BiliOWja8QQaGDtrBIAVK3OrZSh2c6XvE%2BiTJt1470DPKe6KsaHdy1%2BRcL7LODc%2BB4N02C%2FIkSEmhAC%2BkW8y&X-Amz-Signature=fce2e1d5277ae828b09a6ff8e56c4fe1a299c8833505c100c170543ea65d4e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSGUQHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoy%2F%2F0DmCrnu9pRT03iHecrlrqUY2BKLe%2BUK%2BktNbs7AIhAJ92G9ngAUj2eB8bUHroFE6fy8Y86gPW8TRwCkmhagQ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoEjd0DA857gXeATIq3AMCSonpQ6Lt0TAW78je95X7Fh4nYN%2Be6vKxCQoOo7Zk9BS2xKIz4veSwTXEZT%2BxQ6s0RA7X8zgnbdDSgsyOpEZkgQKGgXPWgHdF10EzlGXGkuf00fmKAot%2BLCaBElAl%2FWYdBQ4GhZ1s2aS26uzZijOuB0TyJqGKPbXoc852GE9JrokzsgAdmji0ydI%2BmO0kAlk9YrcQZtUE6BWCeo7xGbJ%2BWvO50ylSlICL3yI8bwGeE%2BnM%2BzdVPYAIq9LQFsS2SKtLa7nE7Uvag5Eef9exj2dJya%2BNFXcZio%2FmR9Uc9WLSU1V2lJ3azgeTyr20dGF0bwipno5%2FZuz4s5BehznQnCjzhurJWNCFwr%2FUIweAu6agc05AOvZpXwp9l0IXEJgHaglrE93ffsdiy7BqkoHEmpe4D8O%2FKhWVPW4P0OVF8fcaaLGceuTJxWnvieiGKAxVzn0r7wxpuaUjd5CrR2sglMOU0DC7%2BxUx2CaLQwLuk%2BH%2BJE5Wr0qp8KDY2AvC6MTfCCpzWfU2JqNy6A2i%2FTdoRQvdWQMfKpX4%2BgmT0RL0dkFJOVxZKIJYa%2Bw7t4v5DXUKQ0IajFhCUcsY%2BsLNo1HsgHzLDMeoNNnZWMcWmYXNrmDRmuWcZS9ly63qGiJpbTCSiKLCBjqkAdgSpPeffRQnfote8OWOF54OZKR6TQtAQSks06TbAd3rEpTZ%2BnZBH9bZBMaxMJJjgMIrr4A60aaRgE9MWf3A%2FjshpiwLVkVpTNunXEkWhhB6RHVx2rk1jf7YKHhQc1KB2TlJ7ag3BiliOWja8QQaGDtrBIAVK3OrZSh2c6XvE%2BiTJt1470DPKe6KsaHdy1%2BRcL7LODc%2BB4N02C%2FIkSEmhAC%2BkW8y&X-Amz-Signature=da3e7ae172c9f35057cd6d18c21da3500c487a733beb2bae1bf70c12e033acc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSGUQHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoy%2F%2F0DmCrnu9pRT03iHecrlrqUY2BKLe%2BUK%2BktNbs7AIhAJ92G9ngAUj2eB8bUHroFE6fy8Y86gPW8TRwCkmhagQ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoEjd0DA857gXeATIq3AMCSonpQ6Lt0TAW78je95X7Fh4nYN%2Be6vKxCQoOo7Zk9BS2xKIz4veSwTXEZT%2BxQ6s0RA7X8zgnbdDSgsyOpEZkgQKGgXPWgHdF10EzlGXGkuf00fmKAot%2BLCaBElAl%2FWYdBQ4GhZ1s2aS26uzZijOuB0TyJqGKPbXoc852GE9JrokzsgAdmji0ydI%2BmO0kAlk9YrcQZtUE6BWCeo7xGbJ%2BWvO50ylSlICL3yI8bwGeE%2BnM%2BzdVPYAIq9LQFsS2SKtLa7nE7Uvag5Eef9exj2dJya%2BNFXcZio%2FmR9Uc9WLSU1V2lJ3azgeTyr20dGF0bwipno5%2FZuz4s5BehznQnCjzhurJWNCFwr%2FUIweAu6agc05AOvZpXwp9l0IXEJgHaglrE93ffsdiy7BqkoHEmpe4D8O%2FKhWVPW4P0OVF8fcaaLGceuTJxWnvieiGKAxVzn0r7wxpuaUjd5CrR2sglMOU0DC7%2BxUx2CaLQwLuk%2BH%2BJE5Wr0qp8KDY2AvC6MTfCCpzWfU2JqNy6A2i%2FTdoRQvdWQMfKpX4%2BgmT0RL0dkFJOVxZKIJYa%2Bw7t4v5DXUKQ0IajFhCUcsY%2BsLNo1HsgHzLDMeoNNnZWMcWmYXNrmDRmuWcZS9ly63qGiJpbTCSiKLCBjqkAdgSpPeffRQnfote8OWOF54OZKR6TQtAQSks06TbAd3rEpTZ%2BnZBH9bZBMaxMJJjgMIrr4A60aaRgE9MWf3A%2FjshpiwLVkVpTNunXEkWhhB6RHVx2rk1jf7YKHhQc1KB2TlJ7ag3BiliOWja8QQaGDtrBIAVK3OrZSh2c6XvE%2BiTJt1470DPKe6KsaHdy1%2BRcL7LODc%2BB4N02C%2FIkSEmhAC%2BkW8y&X-Amz-Signature=f760d627a3e2a583d26af63a9103d05ef66b2e898be32d83b48deec893199e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSGUQHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoy%2F%2F0DmCrnu9pRT03iHecrlrqUY2BKLe%2BUK%2BktNbs7AIhAJ92G9ngAUj2eB8bUHroFE6fy8Y86gPW8TRwCkmhagQ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoEjd0DA857gXeATIq3AMCSonpQ6Lt0TAW78je95X7Fh4nYN%2Be6vKxCQoOo7Zk9BS2xKIz4veSwTXEZT%2BxQ6s0RA7X8zgnbdDSgsyOpEZkgQKGgXPWgHdF10EzlGXGkuf00fmKAot%2BLCaBElAl%2FWYdBQ4GhZ1s2aS26uzZijOuB0TyJqGKPbXoc852GE9JrokzsgAdmji0ydI%2BmO0kAlk9YrcQZtUE6BWCeo7xGbJ%2BWvO50ylSlICL3yI8bwGeE%2BnM%2BzdVPYAIq9LQFsS2SKtLa7nE7Uvag5Eef9exj2dJya%2BNFXcZio%2FmR9Uc9WLSU1V2lJ3azgeTyr20dGF0bwipno5%2FZuz4s5BehznQnCjzhurJWNCFwr%2FUIweAu6agc05AOvZpXwp9l0IXEJgHaglrE93ffsdiy7BqkoHEmpe4D8O%2FKhWVPW4P0OVF8fcaaLGceuTJxWnvieiGKAxVzn0r7wxpuaUjd5CrR2sglMOU0DC7%2BxUx2CaLQwLuk%2BH%2BJE5Wr0qp8KDY2AvC6MTfCCpzWfU2JqNy6A2i%2FTdoRQvdWQMfKpX4%2BgmT0RL0dkFJOVxZKIJYa%2Bw7t4v5DXUKQ0IajFhCUcsY%2BsLNo1HsgHzLDMeoNNnZWMcWmYXNrmDRmuWcZS9ly63qGiJpbTCSiKLCBjqkAdgSpPeffRQnfote8OWOF54OZKR6TQtAQSks06TbAd3rEpTZ%2BnZBH9bZBMaxMJJjgMIrr4A60aaRgE9MWf3A%2FjshpiwLVkVpTNunXEkWhhB6RHVx2rk1jf7YKHhQc1KB2TlJ7ag3BiliOWja8QQaGDtrBIAVK3OrZSh2c6XvE%2BiTJt1470DPKe6KsaHdy1%2BRcL7LODc%2BB4N02C%2FIkSEmhAC%2BkW8y&X-Amz-Signature=0c46875af8b3897a620b63cfb3d9e6bdc7fe0fdafdf7e298b56df3f761bbfcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSGUQHM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoy%2F%2F0DmCrnu9pRT03iHecrlrqUY2BKLe%2BUK%2BktNbs7AIhAJ92G9ngAUj2eB8bUHroFE6fy8Y86gPW8TRwCkmhagQ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoEjd0DA857gXeATIq3AMCSonpQ6Lt0TAW78je95X7Fh4nYN%2Be6vKxCQoOo7Zk9BS2xKIz4veSwTXEZT%2BxQ6s0RA7X8zgnbdDSgsyOpEZkgQKGgXPWgHdF10EzlGXGkuf00fmKAot%2BLCaBElAl%2FWYdBQ4GhZ1s2aS26uzZijOuB0TyJqGKPbXoc852GE9JrokzsgAdmji0ydI%2BmO0kAlk9YrcQZtUE6BWCeo7xGbJ%2BWvO50ylSlICL3yI8bwGeE%2BnM%2BzdVPYAIq9LQFsS2SKtLa7nE7Uvag5Eef9exj2dJya%2BNFXcZio%2FmR9Uc9WLSU1V2lJ3azgeTyr20dGF0bwipno5%2FZuz4s5BehznQnCjzhurJWNCFwr%2FUIweAu6agc05AOvZpXwp9l0IXEJgHaglrE93ffsdiy7BqkoHEmpe4D8O%2FKhWVPW4P0OVF8fcaaLGceuTJxWnvieiGKAxVzn0r7wxpuaUjd5CrR2sglMOU0DC7%2BxUx2CaLQwLuk%2BH%2BJE5Wr0qp8KDY2AvC6MTfCCpzWfU2JqNy6A2i%2FTdoRQvdWQMfKpX4%2BgmT0RL0dkFJOVxZKIJYa%2Bw7t4v5DXUKQ0IajFhCUcsY%2BsLNo1HsgHzLDMeoNNnZWMcWmYXNrmDRmuWcZS9ly63qGiJpbTCSiKLCBjqkAdgSpPeffRQnfote8OWOF54OZKR6TQtAQSks06TbAd3rEpTZ%2BnZBH9bZBMaxMJJjgMIrr4A60aaRgE9MWf3A%2FjshpiwLVkVpTNunXEkWhhB6RHVx2rk1jf7YKHhQc1KB2TlJ7ag3BiliOWja8QQaGDtrBIAVK3OrZSh2c6XvE%2BiTJt1470DPKe6KsaHdy1%2BRcL7LODc%2BB4N02C%2FIkSEmhAC%2BkW8y&X-Amz-Signature=f2c6cabb07764b19c7d0ac838a2514943039cd3a7463b30aa7eb99dde3b87842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
