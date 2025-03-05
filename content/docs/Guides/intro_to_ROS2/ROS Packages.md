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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=2f6740206a587ec199d21765c03444428129c8ff76e0ab6629adf379daedf4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=d53f04efca1232d22da7d8f275ec09923641ea8bba8c635d98f9a9746ae981a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=f17b267a6d6b3d7470fc5c426129d982bcd5dad96f4881ff124b46915616ee6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=004f73cbda72687c2413bea763670752de04ad1416b36eccaf627e82a70bbd7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=48c20e7e4b3f99af43521f6fb6d6793de690dde7a2f5baeaa7ea1cd7779b05b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=5fa1d443a0894b8c7f0f1a99224143ee9e21e91dadbe16b0a046025241cf8843&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=46e34c5d30e99f6e26d0b41c468af00378034d1bdc130d7e18dfbf39c5ef3698&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
