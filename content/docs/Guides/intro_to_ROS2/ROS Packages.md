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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2LNCW7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIB1qZRZ3bjHsoZ%2FgLodgxD7wU4%2B1L1iZReNAFKcI1lHhAiBXzF38qrCJ7nDYbUNgBvVTFQ%2FJUjM8bswGv3v4HgF8cyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOX7U%2FS3hKfMvpjFKtwD6O4ZLC%2BK6XmVDSGF9KVXLDACmOHrdKBokMeYbaeweBYj3lsX3JpekDIARfauhdhfht0jaSriJuLoizfZywuHjyDMzSCKWBRKjz3345o3kBpgeht4GJoHampIBG77FyzW20yJcMe4rIzdRytBNNdsmHHRKX3C6jyaVxy%2FCNlCwzm9avEn3Sx7whka6Hyhi0gpbawVcWxVJ8ekf1Ymxpuz0hTpjeZ%2BdPKuzb2ENhRH7XqOjHcvdWtIgcP1NcfE1TguPznsldf1ypKIQo2Xm%2Fx94w7wApOyUI6BHo3KwD%2FsVfE9Ypkby2WvSooNvApOMzy6TBeiOGlFlakrACPnOtdWwT1dl3IJovvffFqwPeqDfRLaRAWBYBIaeQfKF77JPpp4dGHt57lTaVUKfYQV7tx1nBDcymcngryIENSC%2B1Ep50DjK2u1j0iB8VWDuKV3%2FxwjOB%2B7YcRAh8do57E0tE%2BhcVYLef6Wwtdtwy%2BlhFWEB9rZkVYPDFKcg6vOi7O2DLO7kSOr1%2BWjbPodk0wW9IeZ91FKj04s8f6ppo82eVwrrHQSW7wyrJfX585xHPApB26VHHK92lw%2FyZgpPHYmEgEiAG4%2BC9HqBdm4vAf1fK8it3M8mzV5xuS54%2FqAxxUwh4WFwQY6pgFplrPGIy%2FEInazJE0k9UrMqjew%2F%2BEc6OR7DvfA%2Fk%2Bh8c3GaVTXq48r5OE1%2Fwu7enlWQwYcRcvKTaQLY7GGjIoV4iVEJ4VMP3%2FoQYUa1RtPPfcOOaQd1CXlEsPOcVzAXA9qPkD%2Fnh%2F%2BjqM2aWpAtsOaCCvqCb5W1yuhKPrpTeb2sClDZidtTGZU6LNVsx2dqdxVk8MzsOjytBebhgMpj5hV%2FJy5z3xd&X-Amz-Signature=6b1d182b46dffbe2b4e347cdc94a254ee836b3f5aa1e7b171fa68ea905063890&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2LNCW7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIB1qZRZ3bjHsoZ%2FgLodgxD7wU4%2B1L1iZReNAFKcI1lHhAiBXzF38qrCJ7nDYbUNgBvVTFQ%2FJUjM8bswGv3v4HgF8cyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOX7U%2FS3hKfMvpjFKtwD6O4ZLC%2BK6XmVDSGF9KVXLDACmOHrdKBokMeYbaeweBYj3lsX3JpekDIARfauhdhfht0jaSriJuLoizfZywuHjyDMzSCKWBRKjz3345o3kBpgeht4GJoHampIBG77FyzW20yJcMe4rIzdRytBNNdsmHHRKX3C6jyaVxy%2FCNlCwzm9avEn3Sx7whka6Hyhi0gpbawVcWxVJ8ekf1Ymxpuz0hTpjeZ%2BdPKuzb2ENhRH7XqOjHcvdWtIgcP1NcfE1TguPznsldf1ypKIQo2Xm%2Fx94w7wApOyUI6BHo3KwD%2FsVfE9Ypkby2WvSooNvApOMzy6TBeiOGlFlakrACPnOtdWwT1dl3IJovvffFqwPeqDfRLaRAWBYBIaeQfKF77JPpp4dGHt57lTaVUKfYQV7tx1nBDcymcngryIENSC%2B1Ep50DjK2u1j0iB8VWDuKV3%2FxwjOB%2B7YcRAh8do57E0tE%2BhcVYLef6Wwtdtwy%2BlhFWEB9rZkVYPDFKcg6vOi7O2DLO7kSOr1%2BWjbPodk0wW9IeZ91FKj04s8f6ppo82eVwrrHQSW7wyrJfX585xHPApB26VHHK92lw%2FyZgpPHYmEgEiAG4%2BC9HqBdm4vAf1fK8it3M8mzV5xuS54%2FqAxxUwh4WFwQY6pgFplrPGIy%2FEInazJE0k9UrMqjew%2F%2BEc6OR7DvfA%2Fk%2Bh8c3GaVTXq48r5OE1%2Fwu7enlWQwYcRcvKTaQLY7GGjIoV4iVEJ4VMP3%2FoQYUa1RtPPfcOOaQd1CXlEsPOcVzAXA9qPkD%2Fnh%2F%2BjqM2aWpAtsOaCCvqCb5W1yuhKPrpTeb2sClDZidtTGZU6LNVsx2dqdxVk8MzsOjytBebhgMpj5hV%2FJy5z3xd&X-Amz-Signature=3b7ebeab5b2da5632c2288bfc615a0abab97e2c6687224eb19ff1424b9595fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2LNCW7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIB1qZRZ3bjHsoZ%2FgLodgxD7wU4%2B1L1iZReNAFKcI1lHhAiBXzF38qrCJ7nDYbUNgBvVTFQ%2FJUjM8bswGv3v4HgF8cyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOX7U%2FS3hKfMvpjFKtwD6O4ZLC%2BK6XmVDSGF9KVXLDACmOHrdKBokMeYbaeweBYj3lsX3JpekDIARfauhdhfht0jaSriJuLoizfZywuHjyDMzSCKWBRKjz3345o3kBpgeht4GJoHampIBG77FyzW20yJcMe4rIzdRytBNNdsmHHRKX3C6jyaVxy%2FCNlCwzm9avEn3Sx7whka6Hyhi0gpbawVcWxVJ8ekf1Ymxpuz0hTpjeZ%2BdPKuzb2ENhRH7XqOjHcvdWtIgcP1NcfE1TguPznsldf1ypKIQo2Xm%2Fx94w7wApOyUI6BHo3KwD%2FsVfE9Ypkby2WvSooNvApOMzy6TBeiOGlFlakrACPnOtdWwT1dl3IJovvffFqwPeqDfRLaRAWBYBIaeQfKF77JPpp4dGHt57lTaVUKfYQV7tx1nBDcymcngryIENSC%2B1Ep50DjK2u1j0iB8VWDuKV3%2FxwjOB%2B7YcRAh8do57E0tE%2BhcVYLef6Wwtdtwy%2BlhFWEB9rZkVYPDFKcg6vOi7O2DLO7kSOr1%2BWjbPodk0wW9IeZ91FKj04s8f6ppo82eVwrrHQSW7wyrJfX585xHPApB26VHHK92lw%2FyZgpPHYmEgEiAG4%2BC9HqBdm4vAf1fK8it3M8mzV5xuS54%2FqAxxUwh4WFwQY6pgFplrPGIy%2FEInazJE0k9UrMqjew%2F%2BEc6OR7DvfA%2Fk%2Bh8c3GaVTXq48r5OE1%2Fwu7enlWQwYcRcvKTaQLY7GGjIoV4iVEJ4VMP3%2FoQYUa1RtPPfcOOaQd1CXlEsPOcVzAXA9qPkD%2Fnh%2F%2BjqM2aWpAtsOaCCvqCb5W1yuhKPrpTeb2sClDZidtTGZU6LNVsx2dqdxVk8MzsOjytBebhgMpj5hV%2FJy5z3xd&X-Amz-Signature=1455effde9cc52399954f73fa979b1edadf4677e8e2678e7400ba11fb34af130&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2LNCW7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIB1qZRZ3bjHsoZ%2FgLodgxD7wU4%2B1L1iZReNAFKcI1lHhAiBXzF38qrCJ7nDYbUNgBvVTFQ%2FJUjM8bswGv3v4HgF8cyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOX7U%2FS3hKfMvpjFKtwD6O4ZLC%2BK6XmVDSGF9KVXLDACmOHrdKBokMeYbaeweBYj3lsX3JpekDIARfauhdhfht0jaSriJuLoizfZywuHjyDMzSCKWBRKjz3345o3kBpgeht4GJoHampIBG77FyzW20yJcMe4rIzdRytBNNdsmHHRKX3C6jyaVxy%2FCNlCwzm9avEn3Sx7whka6Hyhi0gpbawVcWxVJ8ekf1Ymxpuz0hTpjeZ%2BdPKuzb2ENhRH7XqOjHcvdWtIgcP1NcfE1TguPznsldf1ypKIQo2Xm%2Fx94w7wApOyUI6BHo3KwD%2FsVfE9Ypkby2WvSooNvApOMzy6TBeiOGlFlakrACPnOtdWwT1dl3IJovvffFqwPeqDfRLaRAWBYBIaeQfKF77JPpp4dGHt57lTaVUKfYQV7tx1nBDcymcngryIENSC%2B1Ep50DjK2u1j0iB8VWDuKV3%2FxwjOB%2B7YcRAh8do57E0tE%2BhcVYLef6Wwtdtwy%2BlhFWEB9rZkVYPDFKcg6vOi7O2DLO7kSOr1%2BWjbPodk0wW9IeZ91FKj04s8f6ppo82eVwrrHQSW7wyrJfX585xHPApB26VHHK92lw%2FyZgpPHYmEgEiAG4%2BC9HqBdm4vAf1fK8it3M8mzV5xuS54%2FqAxxUwh4WFwQY6pgFplrPGIy%2FEInazJE0k9UrMqjew%2F%2BEc6OR7DvfA%2Fk%2Bh8c3GaVTXq48r5OE1%2Fwu7enlWQwYcRcvKTaQLY7GGjIoV4iVEJ4VMP3%2FoQYUa1RtPPfcOOaQd1CXlEsPOcVzAXA9qPkD%2Fnh%2F%2BjqM2aWpAtsOaCCvqCb5W1yuhKPrpTeb2sClDZidtTGZU6LNVsx2dqdxVk8MzsOjytBebhgMpj5hV%2FJy5z3xd&X-Amz-Signature=79fe12c8d2740626aea3d6bd696eb1719dea3066b2d0cdbeccf2c9c2516b8a95&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2LNCW7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIB1qZRZ3bjHsoZ%2FgLodgxD7wU4%2B1L1iZReNAFKcI1lHhAiBXzF38qrCJ7nDYbUNgBvVTFQ%2FJUjM8bswGv3v4HgF8cyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOX7U%2FS3hKfMvpjFKtwD6O4ZLC%2BK6XmVDSGF9KVXLDACmOHrdKBokMeYbaeweBYj3lsX3JpekDIARfauhdhfht0jaSriJuLoizfZywuHjyDMzSCKWBRKjz3345o3kBpgeht4GJoHampIBG77FyzW20yJcMe4rIzdRytBNNdsmHHRKX3C6jyaVxy%2FCNlCwzm9avEn3Sx7whka6Hyhi0gpbawVcWxVJ8ekf1Ymxpuz0hTpjeZ%2BdPKuzb2ENhRH7XqOjHcvdWtIgcP1NcfE1TguPznsldf1ypKIQo2Xm%2Fx94w7wApOyUI6BHo3KwD%2FsVfE9Ypkby2WvSooNvApOMzy6TBeiOGlFlakrACPnOtdWwT1dl3IJovvffFqwPeqDfRLaRAWBYBIaeQfKF77JPpp4dGHt57lTaVUKfYQV7tx1nBDcymcngryIENSC%2B1Ep50DjK2u1j0iB8VWDuKV3%2FxwjOB%2B7YcRAh8do57E0tE%2BhcVYLef6Wwtdtwy%2BlhFWEB9rZkVYPDFKcg6vOi7O2DLO7kSOr1%2BWjbPodk0wW9IeZ91FKj04s8f6ppo82eVwrrHQSW7wyrJfX585xHPApB26VHHK92lw%2FyZgpPHYmEgEiAG4%2BC9HqBdm4vAf1fK8it3M8mzV5xuS54%2FqAxxUwh4WFwQY6pgFplrPGIy%2FEInazJE0k9UrMqjew%2F%2BEc6OR7DvfA%2Fk%2Bh8c3GaVTXq48r5OE1%2Fwu7enlWQwYcRcvKTaQLY7GGjIoV4iVEJ4VMP3%2FoQYUa1RtPPfcOOaQd1CXlEsPOcVzAXA9qPkD%2Fnh%2F%2BjqM2aWpAtsOaCCvqCb5W1yuhKPrpTeb2sClDZidtTGZU6LNVsx2dqdxVk8MzsOjytBebhgMpj5hV%2FJy5z3xd&X-Amz-Signature=f93437471236818c12761ff4064aa2fd7e7c817f2083d4b1188222f877dce108&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2LNCW7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIB1qZRZ3bjHsoZ%2FgLodgxD7wU4%2B1L1iZReNAFKcI1lHhAiBXzF38qrCJ7nDYbUNgBvVTFQ%2FJUjM8bswGv3v4HgF8cyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOX7U%2FS3hKfMvpjFKtwD6O4ZLC%2BK6XmVDSGF9KVXLDACmOHrdKBokMeYbaeweBYj3lsX3JpekDIARfauhdhfht0jaSriJuLoizfZywuHjyDMzSCKWBRKjz3345o3kBpgeht4GJoHampIBG77FyzW20yJcMe4rIzdRytBNNdsmHHRKX3C6jyaVxy%2FCNlCwzm9avEn3Sx7whka6Hyhi0gpbawVcWxVJ8ekf1Ymxpuz0hTpjeZ%2BdPKuzb2ENhRH7XqOjHcvdWtIgcP1NcfE1TguPznsldf1ypKIQo2Xm%2Fx94w7wApOyUI6BHo3KwD%2FsVfE9Ypkby2WvSooNvApOMzy6TBeiOGlFlakrACPnOtdWwT1dl3IJovvffFqwPeqDfRLaRAWBYBIaeQfKF77JPpp4dGHt57lTaVUKfYQV7tx1nBDcymcngryIENSC%2B1Ep50DjK2u1j0iB8VWDuKV3%2FxwjOB%2B7YcRAh8do57E0tE%2BhcVYLef6Wwtdtwy%2BlhFWEB9rZkVYPDFKcg6vOi7O2DLO7kSOr1%2BWjbPodk0wW9IeZ91FKj04s8f6ppo82eVwrrHQSW7wyrJfX585xHPApB26VHHK92lw%2FyZgpPHYmEgEiAG4%2BC9HqBdm4vAf1fK8it3M8mzV5xuS54%2FqAxxUwh4WFwQY6pgFplrPGIy%2FEInazJE0k9UrMqjew%2F%2BEc6OR7DvfA%2Fk%2Bh8c3GaVTXq48r5OE1%2Fwu7enlWQwYcRcvKTaQLY7GGjIoV4iVEJ4VMP3%2FoQYUa1RtPPfcOOaQd1CXlEsPOcVzAXA9qPkD%2Fnh%2F%2BjqM2aWpAtsOaCCvqCb5W1yuhKPrpTeb2sClDZidtTGZU6LNVsx2dqdxVk8MzsOjytBebhgMpj5hV%2FJy5z3xd&X-Amz-Signature=6f76f5e67624d1f36bb8e1ecf7d2f07f389a5f432bdf857b851e88bcbdc313b4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2LNCW7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIB1qZRZ3bjHsoZ%2FgLodgxD7wU4%2B1L1iZReNAFKcI1lHhAiBXzF38qrCJ7nDYbUNgBvVTFQ%2FJUjM8bswGv3v4HgF8cyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuOX7U%2FS3hKfMvpjFKtwD6O4ZLC%2BK6XmVDSGF9KVXLDACmOHrdKBokMeYbaeweBYj3lsX3JpekDIARfauhdhfht0jaSriJuLoizfZywuHjyDMzSCKWBRKjz3345o3kBpgeht4GJoHampIBG77FyzW20yJcMe4rIzdRytBNNdsmHHRKX3C6jyaVxy%2FCNlCwzm9avEn3Sx7whka6Hyhi0gpbawVcWxVJ8ekf1Ymxpuz0hTpjeZ%2BdPKuzb2ENhRH7XqOjHcvdWtIgcP1NcfE1TguPznsldf1ypKIQo2Xm%2Fx94w7wApOyUI6BHo3KwD%2FsVfE9Ypkby2WvSooNvApOMzy6TBeiOGlFlakrACPnOtdWwT1dl3IJovvffFqwPeqDfRLaRAWBYBIaeQfKF77JPpp4dGHt57lTaVUKfYQV7tx1nBDcymcngryIENSC%2B1Ep50DjK2u1j0iB8VWDuKV3%2FxwjOB%2B7YcRAh8do57E0tE%2BhcVYLef6Wwtdtwy%2BlhFWEB9rZkVYPDFKcg6vOi7O2DLO7kSOr1%2BWjbPodk0wW9IeZ91FKj04s8f6ppo82eVwrrHQSW7wyrJfX585xHPApB26VHHK92lw%2FyZgpPHYmEgEiAG4%2BC9HqBdm4vAf1fK8it3M8mzV5xuS54%2FqAxxUwh4WFwQY6pgFplrPGIy%2FEInazJE0k9UrMqjew%2F%2BEc6OR7DvfA%2Fk%2Bh8c3GaVTXq48r5OE1%2Fwu7enlWQwYcRcvKTaQLY7GGjIoV4iVEJ4VMP3%2FoQYUa1RtPPfcOOaQd1CXlEsPOcVzAXA9qPkD%2Fnh%2F%2BjqM2aWpAtsOaCCvqCb5W1yuhKPrpTeb2sClDZidtTGZU6LNVsx2dqdxVk8MzsOjytBebhgMpj5hV%2FJy5z3xd&X-Amz-Signature=65ba0395c143798195d13f71d3dc9b10ccb5ba8d02015cb769fc03e12d142e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
