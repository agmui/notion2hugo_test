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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGEGDHL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHsQzADoTuRo6Xq6hJcjut%2BuCUn8RZdjiAgCzOJ0RPCAiBmxb8yCXy5MbRjCP5bCKVzzAa1hAdSEVGRiAhk8Yo1zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkGKUCb75C4PvuLvAKtwDthIsMwWyFG2ODDGRdCM3jjqnDHonBeyKDI26JmEvL5xJlE7JGTbri%2BOVuq5B3vk%2Fi%2FAa2zloFocxyCEFfSMCMvyDJ2ie2NLY%2FtgczyOcK0u3cYn58uYwsMBR5u0oA0EOVNsOGXTyfiN7NL1oLo%2BjYyxUUDhIELAYE6NM3WYHYAmOcps0ZoGD2bdShiGExn1gR8DB7lejZak6uMY2%2BYY1rUJjwK16nxGrbuPY11R%2F%2BEPZ4qD3%2FnqPJudbtEjUf97PreYYgw26ZiFimvXi4Est87DmXgaAZlHD7IFU6TbFRfw80g4lkH5hnET%2FP3a43sWd2m9IPV39PDWqiOTBOw0%2F3fiXV8zwEGmwVJrniRYd%2FW%2FY6er8twId3q5PeVm8%2FjTHqsYAxJXqOuY%2FE5GFE1hjGSVHaNxLNIHZVsCjyDb6RN3COnhLA69eWgze16C3qArIDZ7NLntG7BcrH9aoIVnwrZM1fAyx9hGQW9be%2Bw%2F%2FTC2NkuYe0YQnkfYyZHYZlX%2BU0rf3Hhflt9cQYHfZxz18ARUXcetPpoYx6ThZEDNEdFee9NLRj44Bo6LJbIWCnSmFwl%2BNSz6jD%2FrLO9ZTKcZPNSDSU2httgiUpslBnH262hdPRMEKb6tFakA0pbEwmZT1vwY6pgFL6qEv76X9I2ci%2FsUTzbC8K8q0EuzxIPHe7Ffgo7hGk1TyYT9mAUkZ8NtiuUzTcvImfxaq6a2M5yO0kfhuL1gg61RlEKmzAWWBK2LJy4NJYhyLjfVS4Q9gq6vLLX4CzvRnUy2hXyeJqxcJvlzoi1bIz1YKUp9APmMxKboTFrFIeHSaGjf42HERxS7NvkP%2By1HyK68zZoEvAsYtgNGVlMNuBtArV22E&X-Amz-Signature=f492be32e057fc4887ccfc76327a4127bec5eab2eabe820c60cd8b5da414512e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGEGDHL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHsQzADoTuRo6Xq6hJcjut%2BuCUn8RZdjiAgCzOJ0RPCAiBmxb8yCXy5MbRjCP5bCKVzzAa1hAdSEVGRiAhk8Yo1zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkGKUCb75C4PvuLvAKtwDthIsMwWyFG2ODDGRdCM3jjqnDHonBeyKDI26JmEvL5xJlE7JGTbri%2BOVuq5B3vk%2Fi%2FAa2zloFocxyCEFfSMCMvyDJ2ie2NLY%2FtgczyOcK0u3cYn58uYwsMBR5u0oA0EOVNsOGXTyfiN7NL1oLo%2BjYyxUUDhIELAYE6NM3WYHYAmOcps0ZoGD2bdShiGExn1gR8DB7lejZak6uMY2%2BYY1rUJjwK16nxGrbuPY11R%2F%2BEPZ4qD3%2FnqPJudbtEjUf97PreYYgw26ZiFimvXi4Est87DmXgaAZlHD7IFU6TbFRfw80g4lkH5hnET%2FP3a43sWd2m9IPV39PDWqiOTBOw0%2F3fiXV8zwEGmwVJrniRYd%2FW%2FY6er8twId3q5PeVm8%2FjTHqsYAxJXqOuY%2FE5GFE1hjGSVHaNxLNIHZVsCjyDb6RN3COnhLA69eWgze16C3qArIDZ7NLntG7BcrH9aoIVnwrZM1fAyx9hGQW9be%2Bw%2F%2FTC2NkuYe0YQnkfYyZHYZlX%2BU0rf3Hhflt9cQYHfZxz18ARUXcetPpoYx6ThZEDNEdFee9NLRj44Bo6LJbIWCnSmFwl%2BNSz6jD%2FrLO9ZTKcZPNSDSU2httgiUpslBnH262hdPRMEKb6tFakA0pbEwmZT1vwY6pgFL6qEv76X9I2ci%2FsUTzbC8K8q0EuzxIPHe7Ffgo7hGk1TyYT9mAUkZ8NtiuUzTcvImfxaq6a2M5yO0kfhuL1gg61RlEKmzAWWBK2LJy4NJYhyLjfVS4Q9gq6vLLX4CzvRnUy2hXyeJqxcJvlzoi1bIz1YKUp9APmMxKboTFrFIeHSaGjf42HERxS7NvkP%2By1HyK68zZoEvAsYtgNGVlMNuBtArV22E&X-Amz-Signature=be2c5a900c69f8d54643df2bb9a5811e3e2faf53930315b7b220937083551bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGEGDHL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHsQzADoTuRo6Xq6hJcjut%2BuCUn8RZdjiAgCzOJ0RPCAiBmxb8yCXy5MbRjCP5bCKVzzAa1hAdSEVGRiAhk8Yo1zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkGKUCb75C4PvuLvAKtwDthIsMwWyFG2ODDGRdCM3jjqnDHonBeyKDI26JmEvL5xJlE7JGTbri%2BOVuq5B3vk%2Fi%2FAa2zloFocxyCEFfSMCMvyDJ2ie2NLY%2FtgczyOcK0u3cYn58uYwsMBR5u0oA0EOVNsOGXTyfiN7NL1oLo%2BjYyxUUDhIELAYE6NM3WYHYAmOcps0ZoGD2bdShiGExn1gR8DB7lejZak6uMY2%2BYY1rUJjwK16nxGrbuPY11R%2F%2BEPZ4qD3%2FnqPJudbtEjUf97PreYYgw26ZiFimvXi4Est87DmXgaAZlHD7IFU6TbFRfw80g4lkH5hnET%2FP3a43sWd2m9IPV39PDWqiOTBOw0%2F3fiXV8zwEGmwVJrniRYd%2FW%2FY6er8twId3q5PeVm8%2FjTHqsYAxJXqOuY%2FE5GFE1hjGSVHaNxLNIHZVsCjyDb6RN3COnhLA69eWgze16C3qArIDZ7NLntG7BcrH9aoIVnwrZM1fAyx9hGQW9be%2Bw%2F%2FTC2NkuYe0YQnkfYyZHYZlX%2BU0rf3Hhflt9cQYHfZxz18ARUXcetPpoYx6ThZEDNEdFee9NLRj44Bo6LJbIWCnSmFwl%2BNSz6jD%2FrLO9ZTKcZPNSDSU2httgiUpslBnH262hdPRMEKb6tFakA0pbEwmZT1vwY6pgFL6qEv76X9I2ci%2FsUTzbC8K8q0EuzxIPHe7Ffgo7hGk1TyYT9mAUkZ8NtiuUzTcvImfxaq6a2M5yO0kfhuL1gg61RlEKmzAWWBK2LJy4NJYhyLjfVS4Q9gq6vLLX4CzvRnUy2hXyeJqxcJvlzoi1bIz1YKUp9APmMxKboTFrFIeHSaGjf42HERxS7NvkP%2By1HyK68zZoEvAsYtgNGVlMNuBtArV22E&X-Amz-Signature=f759060d40276d19eeb26886b1c1eea613cfee77879e6d9df9c692cfc20656a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGEGDHL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHsQzADoTuRo6Xq6hJcjut%2BuCUn8RZdjiAgCzOJ0RPCAiBmxb8yCXy5MbRjCP5bCKVzzAa1hAdSEVGRiAhk8Yo1zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkGKUCb75C4PvuLvAKtwDthIsMwWyFG2ODDGRdCM3jjqnDHonBeyKDI26JmEvL5xJlE7JGTbri%2BOVuq5B3vk%2Fi%2FAa2zloFocxyCEFfSMCMvyDJ2ie2NLY%2FtgczyOcK0u3cYn58uYwsMBR5u0oA0EOVNsOGXTyfiN7NL1oLo%2BjYyxUUDhIELAYE6NM3WYHYAmOcps0ZoGD2bdShiGExn1gR8DB7lejZak6uMY2%2BYY1rUJjwK16nxGrbuPY11R%2F%2BEPZ4qD3%2FnqPJudbtEjUf97PreYYgw26ZiFimvXi4Est87DmXgaAZlHD7IFU6TbFRfw80g4lkH5hnET%2FP3a43sWd2m9IPV39PDWqiOTBOw0%2F3fiXV8zwEGmwVJrniRYd%2FW%2FY6er8twId3q5PeVm8%2FjTHqsYAxJXqOuY%2FE5GFE1hjGSVHaNxLNIHZVsCjyDb6RN3COnhLA69eWgze16C3qArIDZ7NLntG7BcrH9aoIVnwrZM1fAyx9hGQW9be%2Bw%2F%2FTC2NkuYe0YQnkfYyZHYZlX%2BU0rf3Hhflt9cQYHfZxz18ARUXcetPpoYx6ThZEDNEdFee9NLRj44Bo6LJbIWCnSmFwl%2BNSz6jD%2FrLO9ZTKcZPNSDSU2httgiUpslBnH262hdPRMEKb6tFakA0pbEwmZT1vwY6pgFL6qEv76X9I2ci%2FsUTzbC8K8q0EuzxIPHe7Ffgo7hGk1TyYT9mAUkZ8NtiuUzTcvImfxaq6a2M5yO0kfhuL1gg61RlEKmzAWWBK2LJy4NJYhyLjfVS4Q9gq6vLLX4CzvRnUy2hXyeJqxcJvlzoi1bIz1YKUp9APmMxKboTFrFIeHSaGjf42HERxS7NvkP%2By1HyK68zZoEvAsYtgNGVlMNuBtArV22E&X-Amz-Signature=698b1508b411b6ca65984bee5e3cb374d5fa6afc4e6ccfffbb848fbfad245016&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGEGDHL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHsQzADoTuRo6Xq6hJcjut%2BuCUn8RZdjiAgCzOJ0RPCAiBmxb8yCXy5MbRjCP5bCKVzzAa1hAdSEVGRiAhk8Yo1zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkGKUCb75C4PvuLvAKtwDthIsMwWyFG2ODDGRdCM3jjqnDHonBeyKDI26JmEvL5xJlE7JGTbri%2BOVuq5B3vk%2Fi%2FAa2zloFocxyCEFfSMCMvyDJ2ie2NLY%2FtgczyOcK0u3cYn58uYwsMBR5u0oA0EOVNsOGXTyfiN7NL1oLo%2BjYyxUUDhIELAYE6NM3WYHYAmOcps0ZoGD2bdShiGExn1gR8DB7lejZak6uMY2%2BYY1rUJjwK16nxGrbuPY11R%2F%2BEPZ4qD3%2FnqPJudbtEjUf97PreYYgw26ZiFimvXi4Est87DmXgaAZlHD7IFU6TbFRfw80g4lkH5hnET%2FP3a43sWd2m9IPV39PDWqiOTBOw0%2F3fiXV8zwEGmwVJrniRYd%2FW%2FY6er8twId3q5PeVm8%2FjTHqsYAxJXqOuY%2FE5GFE1hjGSVHaNxLNIHZVsCjyDb6RN3COnhLA69eWgze16C3qArIDZ7NLntG7BcrH9aoIVnwrZM1fAyx9hGQW9be%2Bw%2F%2FTC2NkuYe0YQnkfYyZHYZlX%2BU0rf3Hhflt9cQYHfZxz18ARUXcetPpoYx6ThZEDNEdFee9NLRj44Bo6LJbIWCnSmFwl%2BNSz6jD%2FrLO9ZTKcZPNSDSU2httgiUpslBnH262hdPRMEKb6tFakA0pbEwmZT1vwY6pgFL6qEv76X9I2ci%2FsUTzbC8K8q0EuzxIPHe7Ffgo7hGk1TyYT9mAUkZ8NtiuUzTcvImfxaq6a2M5yO0kfhuL1gg61RlEKmzAWWBK2LJy4NJYhyLjfVS4Q9gq6vLLX4CzvRnUy2hXyeJqxcJvlzoi1bIz1YKUp9APmMxKboTFrFIeHSaGjf42HERxS7NvkP%2By1HyK68zZoEvAsYtgNGVlMNuBtArV22E&X-Amz-Signature=5d0a39cc249dd9db53e30336578ffd7b4fd666f2af2f19044ce7fb5a8383738a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGEGDHL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHsQzADoTuRo6Xq6hJcjut%2BuCUn8RZdjiAgCzOJ0RPCAiBmxb8yCXy5MbRjCP5bCKVzzAa1hAdSEVGRiAhk8Yo1zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkGKUCb75C4PvuLvAKtwDthIsMwWyFG2ODDGRdCM3jjqnDHonBeyKDI26JmEvL5xJlE7JGTbri%2BOVuq5B3vk%2Fi%2FAa2zloFocxyCEFfSMCMvyDJ2ie2NLY%2FtgczyOcK0u3cYn58uYwsMBR5u0oA0EOVNsOGXTyfiN7NL1oLo%2BjYyxUUDhIELAYE6NM3WYHYAmOcps0ZoGD2bdShiGExn1gR8DB7lejZak6uMY2%2BYY1rUJjwK16nxGrbuPY11R%2F%2BEPZ4qD3%2FnqPJudbtEjUf97PreYYgw26ZiFimvXi4Est87DmXgaAZlHD7IFU6TbFRfw80g4lkH5hnET%2FP3a43sWd2m9IPV39PDWqiOTBOw0%2F3fiXV8zwEGmwVJrniRYd%2FW%2FY6er8twId3q5PeVm8%2FjTHqsYAxJXqOuY%2FE5GFE1hjGSVHaNxLNIHZVsCjyDb6RN3COnhLA69eWgze16C3qArIDZ7NLntG7BcrH9aoIVnwrZM1fAyx9hGQW9be%2Bw%2F%2FTC2NkuYe0YQnkfYyZHYZlX%2BU0rf3Hhflt9cQYHfZxz18ARUXcetPpoYx6ThZEDNEdFee9NLRj44Bo6LJbIWCnSmFwl%2BNSz6jD%2FrLO9ZTKcZPNSDSU2httgiUpslBnH262hdPRMEKb6tFakA0pbEwmZT1vwY6pgFL6qEv76X9I2ci%2FsUTzbC8K8q0EuzxIPHe7Ffgo7hGk1TyYT9mAUkZ8NtiuUzTcvImfxaq6a2M5yO0kfhuL1gg61RlEKmzAWWBK2LJy4NJYhyLjfVS4Q9gq6vLLX4CzvRnUy2hXyeJqxcJvlzoi1bIz1YKUp9APmMxKboTFrFIeHSaGjf42HERxS7NvkP%2By1HyK68zZoEvAsYtgNGVlMNuBtArV22E&X-Amz-Signature=2c3732992408723e23d3e9da72c7cb80fb402fa2613f2c8e8b9bb95170a47d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGEGDHL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHsQzADoTuRo6Xq6hJcjut%2BuCUn8RZdjiAgCzOJ0RPCAiBmxb8yCXy5MbRjCP5bCKVzzAa1hAdSEVGRiAhk8Yo1zir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkGKUCb75C4PvuLvAKtwDthIsMwWyFG2ODDGRdCM3jjqnDHonBeyKDI26JmEvL5xJlE7JGTbri%2BOVuq5B3vk%2Fi%2FAa2zloFocxyCEFfSMCMvyDJ2ie2NLY%2FtgczyOcK0u3cYn58uYwsMBR5u0oA0EOVNsOGXTyfiN7NL1oLo%2BjYyxUUDhIELAYE6NM3WYHYAmOcps0ZoGD2bdShiGExn1gR8DB7lejZak6uMY2%2BYY1rUJjwK16nxGrbuPY11R%2F%2BEPZ4qD3%2FnqPJudbtEjUf97PreYYgw26ZiFimvXi4Est87DmXgaAZlHD7IFU6TbFRfw80g4lkH5hnET%2FP3a43sWd2m9IPV39PDWqiOTBOw0%2F3fiXV8zwEGmwVJrniRYd%2FW%2FY6er8twId3q5PeVm8%2FjTHqsYAxJXqOuY%2FE5GFE1hjGSVHaNxLNIHZVsCjyDb6RN3COnhLA69eWgze16C3qArIDZ7NLntG7BcrH9aoIVnwrZM1fAyx9hGQW9be%2Bw%2F%2FTC2NkuYe0YQnkfYyZHYZlX%2BU0rf3Hhflt9cQYHfZxz18ARUXcetPpoYx6ThZEDNEdFee9NLRj44Bo6LJbIWCnSmFwl%2BNSz6jD%2FrLO9ZTKcZPNSDSU2httgiUpslBnH262hdPRMEKb6tFakA0pbEwmZT1vwY6pgFL6qEv76X9I2ci%2FsUTzbC8K8q0EuzxIPHe7Ffgo7hGk1TyYT9mAUkZ8NtiuUzTcvImfxaq6a2M5yO0kfhuL1gg61RlEKmzAWWBK2LJy4NJYhyLjfVS4Q9gq6vLLX4CzvRnUy2hXyeJqxcJvlzoi1bIz1YKUp9APmMxKboTFrFIeHSaGjf42HERxS7NvkP%2By1HyK68zZoEvAsYtgNGVlMNuBtArV22E&X-Amz-Signature=7b68d21bc4fb230244c15232bcfbf5c9bf1a2e629e2f96eaf51aac4482f96874&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
