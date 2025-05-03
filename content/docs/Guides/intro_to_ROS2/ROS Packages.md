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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSMPZ5O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDXiNpJErDrAvLkrnfztftmUlsU86QCuWVBFmDFRSl00AiAl8ztia8PXEnPr7N07VkR8VZZ2gUCID5n6n6i%2BtnIfWyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUC%2BwBr0%2F6ImWtovKtwDlZI3Tj2f8SrdQWr5sk5%2B2KrN6ofgdM3bJ6Q7xnGTD7N%2FsHQPgXCpZgnInNL5%2BKAKhQkA%2B0rWDt6s8eT5mS%2B9RB5dL%2Fj5EjhhUATdfCUBa1cHoN6s559Sbv2xeGpanfZ9Sg0BdAa0HZIoSd1cWhUftym5sv7t3UoY9mMf2krjSJCHc6OXbqwPhh3PakLvSWUomXiEtn5nJTM54NikyJjfPy0fC3xCDc%2FCoIk4ZXhRG3FEpQU2ySvmsSpmuJtqpd5EDZPaVaOXv2O4cj2urUJaqooa0ZXoSFAX9UMHdMu%2B%2BOhxdoZDe5k59HEXY6b%2B1OyyYRPQqRgy9XmySufSt%2F6V2tx%2BYfwa%2Bjr6e%2FbFE%2B444Z7QXotR8QIEoPdvrdJFyd0UT5kwh4Ny0iqgbw7B8cXtMM3LyKGYFYF%2FOH2PsTrN3FbaDSZEZ47CUhHb0hvYi%2BrMm8BOoDBg3IvaeVLw%2FD5D6bbYlJYLe168bltXOlyxd8fwWV0VHyXTLYQ7gR61xOUsjsJPraoW4%2Fc1dK6LAMcGWvbdeQAvd1J4LRDHqpbbB6VC3arecRnnPhJCuzTCqczcNvMHU8VlUKM0nJy2MOyFrpOjb0R1si2%2BkdMJGOFROQty6M7%2B%2Brti3LxZn%2FAwvprawAY6pgE3hhXAlYExUOpfeuIx4N1jsodLxZYvBOj5skOKjfZ16pGhwLR01C3EWrXEBy0K284OJwubc8PjUMLoZLbDcHYh4OPU38XfZ9HwLSPK6se72bYBtLZlTG%2B6wW2Lok4VPKmoZ4nWMytwACreAvrB7uF4laGWRsJOQoaspjvLErjgpz7vv5wjv%2Bocd41rMWp1Y0DX5VGXpQJ7qWUVcYOwB8dmqirdnIYV&X-Amz-Signature=9331a8b9bc5dcb6d07ac99d33379b2fee59e00336c1fe2e66d6010bacd65e726&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSMPZ5O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDXiNpJErDrAvLkrnfztftmUlsU86QCuWVBFmDFRSl00AiAl8ztia8PXEnPr7N07VkR8VZZ2gUCID5n6n6i%2BtnIfWyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUC%2BwBr0%2F6ImWtovKtwDlZI3Tj2f8SrdQWr5sk5%2B2KrN6ofgdM3bJ6Q7xnGTD7N%2FsHQPgXCpZgnInNL5%2BKAKhQkA%2B0rWDt6s8eT5mS%2B9RB5dL%2Fj5EjhhUATdfCUBa1cHoN6s559Sbv2xeGpanfZ9Sg0BdAa0HZIoSd1cWhUftym5sv7t3UoY9mMf2krjSJCHc6OXbqwPhh3PakLvSWUomXiEtn5nJTM54NikyJjfPy0fC3xCDc%2FCoIk4ZXhRG3FEpQU2ySvmsSpmuJtqpd5EDZPaVaOXv2O4cj2urUJaqooa0ZXoSFAX9UMHdMu%2B%2BOhxdoZDe5k59HEXY6b%2B1OyyYRPQqRgy9XmySufSt%2F6V2tx%2BYfwa%2Bjr6e%2FbFE%2B444Z7QXotR8QIEoPdvrdJFyd0UT5kwh4Ny0iqgbw7B8cXtMM3LyKGYFYF%2FOH2PsTrN3FbaDSZEZ47CUhHb0hvYi%2BrMm8BOoDBg3IvaeVLw%2FD5D6bbYlJYLe168bltXOlyxd8fwWV0VHyXTLYQ7gR61xOUsjsJPraoW4%2Fc1dK6LAMcGWvbdeQAvd1J4LRDHqpbbB6VC3arecRnnPhJCuzTCqczcNvMHU8VlUKM0nJy2MOyFrpOjb0R1si2%2BkdMJGOFROQty6M7%2B%2Brti3LxZn%2FAwvprawAY6pgE3hhXAlYExUOpfeuIx4N1jsodLxZYvBOj5skOKjfZ16pGhwLR01C3EWrXEBy0K284OJwubc8PjUMLoZLbDcHYh4OPU38XfZ9HwLSPK6se72bYBtLZlTG%2B6wW2Lok4VPKmoZ4nWMytwACreAvrB7uF4laGWRsJOQoaspjvLErjgpz7vv5wjv%2Bocd41rMWp1Y0DX5VGXpQJ7qWUVcYOwB8dmqirdnIYV&X-Amz-Signature=5a06a2b010cf82a9927cbe12c356f0f6f8687e3e5b2b0eb665ecc760d308ed21&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSMPZ5O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDXiNpJErDrAvLkrnfztftmUlsU86QCuWVBFmDFRSl00AiAl8ztia8PXEnPr7N07VkR8VZZ2gUCID5n6n6i%2BtnIfWyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUC%2BwBr0%2F6ImWtovKtwDlZI3Tj2f8SrdQWr5sk5%2B2KrN6ofgdM3bJ6Q7xnGTD7N%2FsHQPgXCpZgnInNL5%2BKAKhQkA%2B0rWDt6s8eT5mS%2B9RB5dL%2Fj5EjhhUATdfCUBa1cHoN6s559Sbv2xeGpanfZ9Sg0BdAa0HZIoSd1cWhUftym5sv7t3UoY9mMf2krjSJCHc6OXbqwPhh3PakLvSWUomXiEtn5nJTM54NikyJjfPy0fC3xCDc%2FCoIk4ZXhRG3FEpQU2ySvmsSpmuJtqpd5EDZPaVaOXv2O4cj2urUJaqooa0ZXoSFAX9UMHdMu%2B%2BOhxdoZDe5k59HEXY6b%2B1OyyYRPQqRgy9XmySufSt%2F6V2tx%2BYfwa%2Bjr6e%2FbFE%2B444Z7QXotR8QIEoPdvrdJFyd0UT5kwh4Ny0iqgbw7B8cXtMM3LyKGYFYF%2FOH2PsTrN3FbaDSZEZ47CUhHb0hvYi%2BrMm8BOoDBg3IvaeVLw%2FD5D6bbYlJYLe168bltXOlyxd8fwWV0VHyXTLYQ7gR61xOUsjsJPraoW4%2Fc1dK6LAMcGWvbdeQAvd1J4LRDHqpbbB6VC3arecRnnPhJCuzTCqczcNvMHU8VlUKM0nJy2MOyFrpOjb0R1si2%2BkdMJGOFROQty6M7%2B%2Brti3LxZn%2FAwvprawAY6pgE3hhXAlYExUOpfeuIx4N1jsodLxZYvBOj5skOKjfZ16pGhwLR01C3EWrXEBy0K284OJwubc8PjUMLoZLbDcHYh4OPU38XfZ9HwLSPK6se72bYBtLZlTG%2B6wW2Lok4VPKmoZ4nWMytwACreAvrB7uF4laGWRsJOQoaspjvLErjgpz7vv5wjv%2Bocd41rMWp1Y0DX5VGXpQJ7qWUVcYOwB8dmqirdnIYV&X-Amz-Signature=efd4d98ecb0732d85f30592ceb7333b27b46454931dcf12d83f72195001120fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSMPZ5O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDXiNpJErDrAvLkrnfztftmUlsU86QCuWVBFmDFRSl00AiAl8ztia8PXEnPr7N07VkR8VZZ2gUCID5n6n6i%2BtnIfWyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUC%2BwBr0%2F6ImWtovKtwDlZI3Tj2f8SrdQWr5sk5%2B2KrN6ofgdM3bJ6Q7xnGTD7N%2FsHQPgXCpZgnInNL5%2BKAKhQkA%2B0rWDt6s8eT5mS%2B9RB5dL%2Fj5EjhhUATdfCUBa1cHoN6s559Sbv2xeGpanfZ9Sg0BdAa0HZIoSd1cWhUftym5sv7t3UoY9mMf2krjSJCHc6OXbqwPhh3PakLvSWUomXiEtn5nJTM54NikyJjfPy0fC3xCDc%2FCoIk4ZXhRG3FEpQU2ySvmsSpmuJtqpd5EDZPaVaOXv2O4cj2urUJaqooa0ZXoSFAX9UMHdMu%2B%2BOhxdoZDe5k59HEXY6b%2B1OyyYRPQqRgy9XmySufSt%2F6V2tx%2BYfwa%2Bjr6e%2FbFE%2B444Z7QXotR8QIEoPdvrdJFyd0UT5kwh4Ny0iqgbw7B8cXtMM3LyKGYFYF%2FOH2PsTrN3FbaDSZEZ47CUhHb0hvYi%2BrMm8BOoDBg3IvaeVLw%2FD5D6bbYlJYLe168bltXOlyxd8fwWV0VHyXTLYQ7gR61xOUsjsJPraoW4%2Fc1dK6LAMcGWvbdeQAvd1J4LRDHqpbbB6VC3arecRnnPhJCuzTCqczcNvMHU8VlUKM0nJy2MOyFrpOjb0R1si2%2BkdMJGOFROQty6M7%2B%2Brti3LxZn%2FAwvprawAY6pgE3hhXAlYExUOpfeuIx4N1jsodLxZYvBOj5skOKjfZ16pGhwLR01C3EWrXEBy0K284OJwubc8PjUMLoZLbDcHYh4OPU38XfZ9HwLSPK6se72bYBtLZlTG%2B6wW2Lok4VPKmoZ4nWMytwACreAvrB7uF4laGWRsJOQoaspjvLErjgpz7vv5wjv%2Bocd41rMWp1Y0DX5VGXpQJ7qWUVcYOwB8dmqirdnIYV&X-Amz-Signature=20873bac7c433bb9ed9f60cbd2c70bef0305236915694178edfa2d4da56829fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSMPZ5O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDXiNpJErDrAvLkrnfztftmUlsU86QCuWVBFmDFRSl00AiAl8ztia8PXEnPr7N07VkR8VZZ2gUCID5n6n6i%2BtnIfWyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUC%2BwBr0%2F6ImWtovKtwDlZI3Tj2f8SrdQWr5sk5%2B2KrN6ofgdM3bJ6Q7xnGTD7N%2FsHQPgXCpZgnInNL5%2BKAKhQkA%2B0rWDt6s8eT5mS%2B9RB5dL%2Fj5EjhhUATdfCUBa1cHoN6s559Sbv2xeGpanfZ9Sg0BdAa0HZIoSd1cWhUftym5sv7t3UoY9mMf2krjSJCHc6OXbqwPhh3PakLvSWUomXiEtn5nJTM54NikyJjfPy0fC3xCDc%2FCoIk4ZXhRG3FEpQU2ySvmsSpmuJtqpd5EDZPaVaOXv2O4cj2urUJaqooa0ZXoSFAX9UMHdMu%2B%2BOhxdoZDe5k59HEXY6b%2B1OyyYRPQqRgy9XmySufSt%2F6V2tx%2BYfwa%2Bjr6e%2FbFE%2B444Z7QXotR8QIEoPdvrdJFyd0UT5kwh4Ny0iqgbw7B8cXtMM3LyKGYFYF%2FOH2PsTrN3FbaDSZEZ47CUhHb0hvYi%2BrMm8BOoDBg3IvaeVLw%2FD5D6bbYlJYLe168bltXOlyxd8fwWV0VHyXTLYQ7gR61xOUsjsJPraoW4%2Fc1dK6LAMcGWvbdeQAvd1J4LRDHqpbbB6VC3arecRnnPhJCuzTCqczcNvMHU8VlUKM0nJy2MOyFrpOjb0R1si2%2BkdMJGOFROQty6M7%2B%2Brti3LxZn%2FAwvprawAY6pgE3hhXAlYExUOpfeuIx4N1jsodLxZYvBOj5skOKjfZ16pGhwLR01C3EWrXEBy0K284OJwubc8PjUMLoZLbDcHYh4OPU38XfZ9HwLSPK6se72bYBtLZlTG%2B6wW2Lok4VPKmoZ4nWMytwACreAvrB7uF4laGWRsJOQoaspjvLErjgpz7vv5wjv%2Bocd41rMWp1Y0DX5VGXpQJ7qWUVcYOwB8dmqirdnIYV&X-Amz-Signature=62a9ebdacfb15bbc07cf15c710fb08c1191fba3ef82ab1ab3ac004e15e363f43&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSMPZ5O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDXiNpJErDrAvLkrnfztftmUlsU86QCuWVBFmDFRSl00AiAl8ztia8PXEnPr7N07VkR8VZZ2gUCID5n6n6i%2BtnIfWyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUC%2BwBr0%2F6ImWtovKtwDlZI3Tj2f8SrdQWr5sk5%2B2KrN6ofgdM3bJ6Q7xnGTD7N%2FsHQPgXCpZgnInNL5%2BKAKhQkA%2B0rWDt6s8eT5mS%2B9RB5dL%2Fj5EjhhUATdfCUBa1cHoN6s559Sbv2xeGpanfZ9Sg0BdAa0HZIoSd1cWhUftym5sv7t3UoY9mMf2krjSJCHc6OXbqwPhh3PakLvSWUomXiEtn5nJTM54NikyJjfPy0fC3xCDc%2FCoIk4ZXhRG3FEpQU2ySvmsSpmuJtqpd5EDZPaVaOXv2O4cj2urUJaqooa0ZXoSFAX9UMHdMu%2B%2BOhxdoZDe5k59HEXY6b%2B1OyyYRPQqRgy9XmySufSt%2F6V2tx%2BYfwa%2Bjr6e%2FbFE%2B444Z7QXotR8QIEoPdvrdJFyd0UT5kwh4Ny0iqgbw7B8cXtMM3LyKGYFYF%2FOH2PsTrN3FbaDSZEZ47CUhHb0hvYi%2BrMm8BOoDBg3IvaeVLw%2FD5D6bbYlJYLe168bltXOlyxd8fwWV0VHyXTLYQ7gR61xOUsjsJPraoW4%2Fc1dK6LAMcGWvbdeQAvd1J4LRDHqpbbB6VC3arecRnnPhJCuzTCqczcNvMHU8VlUKM0nJy2MOyFrpOjb0R1si2%2BkdMJGOFROQty6M7%2B%2Brti3LxZn%2FAwvprawAY6pgE3hhXAlYExUOpfeuIx4N1jsodLxZYvBOj5skOKjfZ16pGhwLR01C3EWrXEBy0K284OJwubc8PjUMLoZLbDcHYh4OPU38XfZ9HwLSPK6se72bYBtLZlTG%2B6wW2Lok4VPKmoZ4nWMytwACreAvrB7uF4laGWRsJOQoaspjvLErjgpz7vv5wjv%2Bocd41rMWp1Y0DX5VGXpQJ7qWUVcYOwB8dmqirdnIYV&X-Amz-Signature=b5f68b93f621359e92d94430c0933a853c8f4f7d18ca537b5c21901bb0dc59c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSMPZ5O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDXiNpJErDrAvLkrnfztftmUlsU86QCuWVBFmDFRSl00AiAl8ztia8PXEnPr7N07VkR8VZZ2gUCID5n6n6i%2BtnIfWyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUC%2BwBr0%2F6ImWtovKtwDlZI3Tj2f8SrdQWr5sk5%2B2KrN6ofgdM3bJ6Q7xnGTD7N%2FsHQPgXCpZgnInNL5%2BKAKhQkA%2B0rWDt6s8eT5mS%2B9RB5dL%2Fj5EjhhUATdfCUBa1cHoN6s559Sbv2xeGpanfZ9Sg0BdAa0HZIoSd1cWhUftym5sv7t3UoY9mMf2krjSJCHc6OXbqwPhh3PakLvSWUomXiEtn5nJTM54NikyJjfPy0fC3xCDc%2FCoIk4ZXhRG3FEpQU2ySvmsSpmuJtqpd5EDZPaVaOXv2O4cj2urUJaqooa0ZXoSFAX9UMHdMu%2B%2BOhxdoZDe5k59HEXY6b%2B1OyyYRPQqRgy9XmySufSt%2F6V2tx%2BYfwa%2Bjr6e%2FbFE%2B444Z7QXotR8QIEoPdvrdJFyd0UT5kwh4Ny0iqgbw7B8cXtMM3LyKGYFYF%2FOH2PsTrN3FbaDSZEZ47CUhHb0hvYi%2BrMm8BOoDBg3IvaeVLw%2FD5D6bbYlJYLe168bltXOlyxd8fwWV0VHyXTLYQ7gR61xOUsjsJPraoW4%2Fc1dK6LAMcGWvbdeQAvd1J4LRDHqpbbB6VC3arecRnnPhJCuzTCqczcNvMHU8VlUKM0nJy2MOyFrpOjb0R1si2%2BkdMJGOFROQty6M7%2B%2Brti3LxZn%2FAwvprawAY6pgE3hhXAlYExUOpfeuIx4N1jsodLxZYvBOj5skOKjfZ16pGhwLR01C3EWrXEBy0K284OJwubc8PjUMLoZLbDcHYh4OPU38XfZ9HwLSPK6se72bYBtLZlTG%2B6wW2Lok4VPKmoZ4nWMytwACreAvrB7uF4laGWRsJOQoaspjvLErjgpz7vv5wjv%2Bocd41rMWp1Y0DX5VGXpQJ7qWUVcYOwB8dmqirdnIYV&X-Amz-Signature=75f15aa9fd67425308cf960ad750a169b35a88c55d8e77ddb59af3dd507d0279&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
