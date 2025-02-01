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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YT2IBA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBavSv%2FU7SsbQtudspIlI4T3Tien5n47c2luST%2FxAC46AiEA9bkm8Nh3n%2B4bLw5RmCR%2BwEGEsNgoyUuGQCb%2BpdMn2icqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnnFtRX3OO%2B5MqI6ircA9FCsw6%2BRQbkBdYhlhMBfo8kV3GGlm0UIZlceZOQj8a7lJ%2FVAAepZ%2Bi%2F5QVpogaXzuJHXyKg5ZHCi6A6w4G8p8oYrCFMy9pDfPZV7NilTHyqPZadElx8B5jqWXgJTx%2FZPm8CvTCrFzW6VpkT27xTbAd3QFriZkqXKBtagqTzcfr2AZsXJ83P01FFxKjPEHGzDhQpevNv%2BBjTMKQs2QGXFOBnOazWaZkssBydAaEUXbVo9V2YlJH3xi%2FvSUXxkkSjeu%2FKgmNOH5r4rpS8qIrM2cUy5acuRSm5iNTL5IvuC%2FXBlppAdAzbs8YHWwIXgtOyZGxJddLOf0GQPultQ9MqocBkIDnWOxOXKxvO%2FmtOSg%2FqnoOi7WfjTobjA4BSv0o6VTqYwEr7T9mtbet1CEm3KZ8Eob5ciC1n3lov0%2Bi%2FMsX1MZlYhlAx0Xve9TCB0mN4gTRCB9LUFZAvHjio5odu%2FVf%2B9KvVF%2FodC%2F05m72tOAhiDdiyI0vJU7oNNlsVT4JxSWwTrwIPMWzOfAa59lAbudKjWXmOvDOe32hDnI9Jogzjt63XGZOU0VDPwmficrgm%2BDLnf8s6W2iR5K3yqdJl7KY56vAje1sFPy3Y7GV2VlsEJuezRL0%2Fn9Jsz5cFMJqV%2BrwGOqUB67f%2B2wGcFrY8fCHAhAYuy%2BHEVFAhE9HmMRP%2FJOZ%2B7%2B0JdWKB5vrw3oZXJN6%2ByYh4n4T0hfgOANCc%2BDdSqMApZGgV19un%2FWGZaEwaskI%2Fs7%2FJ79uAtY40bRb5alx5PqSwR2mUZPn7Wi9Uf9YJhehdMnSZdzmxRbNTDwCDD9QchtQ31sYCE4SRHM7Zr0xoO3XwKGjY7xetzBkRhl8RrgzpYcW6pKWH&X-Amz-Signature=76310f49111c8fb60e4e319be32b4a35598efb723ad5b5b746568815b100ba54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YT2IBA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBavSv%2FU7SsbQtudspIlI4T3Tien5n47c2luST%2FxAC46AiEA9bkm8Nh3n%2B4bLw5RmCR%2BwEGEsNgoyUuGQCb%2BpdMn2icqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnnFtRX3OO%2B5MqI6ircA9FCsw6%2BRQbkBdYhlhMBfo8kV3GGlm0UIZlceZOQj8a7lJ%2FVAAepZ%2Bi%2F5QVpogaXzuJHXyKg5ZHCi6A6w4G8p8oYrCFMy9pDfPZV7NilTHyqPZadElx8B5jqWXgJTx%2FZPm8CvTCrFzW6VpkT27xTbAd3QFriZkqXKBtagqTzcfr2AZsXJ83P01FFxKjPEHGzDhQpevNv%2BBjTMKQs2QGXFOBnOazWaZkssBydAaEUXbVo9V2YlJH3xi%2FvSUXxkkSjeu%2FKgmNOH5r4rpS8qIrM2cUy5acuRSm5iNTL5IvuC%2FXBlppAdAzbs8YHWwIXgtOyZGxJddLOf0GQPultQ9MqocBkIDnWOxOXKxvO%2FmtOSg%2FqnoOi7WfjTobjA4BSv0o6VTqYwEr7T9mtbet1CEm3KZ8Eob5ciC1n3lov0%2Bi%2FMsX1MZlYhlAx0Xve9TCB0mN4gTRCB9LUFZAvHjio5odu%2FVf%2B9KvVF%2FodC%2F05m72tOAhiDdiyI0vJU7oNNlsVT4JxSWwTrwIPMWzOfAa59lAbudKjWXmOvDOe32hDnI9Jogzjt63XGZOU0VDPwmficrgm%2BDLnf8s6W2iR5K3yqdJl7KY56vAje1sFPy3Y7GV2VlsEJuezRL0%2Fn9Jsz5cFMJqV%2BrwGOqUB67f%2B2wGcFrY8fCHAhAYuy%2BHEVFAhE9HmMRP%2FJOZ%2B7%2B0JdWKB5vrw3oZXJN6%2ByYh4n4T0hfgOANCc%2BDdSqMApZGgV19un%2FWGZaEwaskI%2Fs7%2FJ79uAtY40bRb5alx5PqSwR2mUZPn7Wi9Uf9YJhehdMnSZdzmxRbNTDwCDD9QchtQ31sYCE4SRHM7Zr0xoO3XwKGjY7xetzBkRhl8RrgzpYcW6pKWH&X-Amz-Signature=6ccc4bff0acda72108f3e9bb0fc10cd10f8c2c03b6012e677405b71280523ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YT2IBA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBavSv%2FU7SsbQtudspIlI4T3Tien5n47c2luST%2FxAC46AiEA9bkm8Nh3n%2B4bLw5RmCR%2BwEGEsNgoyUuGQCb%2BpdMn2icqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnnFtRX3OO%2B5MqI6ircA9FCsw6%2BRQbkBdYhlhMBfo8kV3GGlm0UIZlceZOQj8a7lJ%2FVAAepZ%2Bi%2F5QVpogaXzuJHXyKg5ZHCi6A6w4G8p8oYrCFMy9pDfPZV7NilTHyqPZadElx8B5jqWXgJTx%2FZPm8CvTCrFzW6VpkT27xTbAd3QFriZkqXKBtagqTzcfr2AZsXJ83P01FFxKjPEHGzDhQpevNv%2BBjTMKQs2QGXFOBnOazWaZkssBydAaEUXbVo9V2YlJH3xi%2FvSUXxkkSjeu%2FKgmNOH5r4rpS8qIrM2cUy5acuRSm5iNTL5IvuC%2FXBlppAdAzbs8YHWwIXgtOyZGxJddLOf0GQPultQ9MqocBkIDnWOxOXKxvO%2FmtOSg%2FqnoOi7WfjTobjA4BSv0o6VTqYwEr7T9mtbet1CEm3KZ8Eob5ciC1n3lov0%2Bi%2FMsX1MZlYhlAx0Xve9TCB0mN4gTRCB9LUFZAvHjio5odu%2FVf%2B9KvVF%2FodC%2F05m72tOAhiDdiyI0vJU7oNNlsVT4JxSWwTrwIPMWzOfAa59lAbudKjWXmOvDOe32hDnI9Jogzjt63XGZOU0VDPwmficrgm%2BDLnf8s6W2iR5K3yqdJl7KY56vAje1sFPy3Y7GV2VlsEJuezRL0%2Fn9Jsz5cFMJqV%2BrwGOqUB67f%2B2wGcFrY8fCHAhAYuy%2BHEVFAhE9HmMRP%2FJOZ%2B7%2B0JdWKB5vrw3oZXJN6%2ByYh4n4T0hfgOANCc%2BDdSqMApZGgV19un%2FWGZaEwaskI%2Fs7%2FJ79uAtY40bRb5alx5PqSwR2mUZPn7Wi9Uf9YJhehdMnSZdzmxRbNTDwCDD9QchtQ31sYCE4SRHM7Zr0xoO3XwKGjY7xetzBkRhl8RrgzpYcW6pKWH&X-Amz-Signature=6a060713e4cb137759bcb577f004d4ab089035fe455a007abb3cfeee19259cee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YT2IBA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBavSv%2FU7SsbQtudspIlI4T3Tien5n47c2luST%2FxAC46AiEA9bkm8Nh3n%2B4bLw5RmCR%2BwEGEsNgoyUuGQCb%2BpdMn2icqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnnFtRX3OO%2B5MqI6ircA9FCsw6%2BRQbkBdYhlhMBfo8kV3GGlm0UIZlceZOQj8a7lJ%2FVAAepZ%2Bi%2F5QVpogaXzuJHXyKg5ZHCi6A6w4G8p8oYrCFMy9pDfPZV7NilTHyqPZadElx8B5jqWXgJTx%2FZPm8CvTCrFzW6VpkT27xTbAd3QFriZkqXKBtagqTzcfr2AZsXJ83P01FFxKjPEHGzDhQpevNv%2BBjTMKQs2QGXFOBnOazWaZkssBydAaEUXbVo9V2YlJH3xi%2FvSUXxkkSjeu%2FKgmNOH5r4rpS8qIrM2cUy5acuRSm5iNTL5IvuC%2FXBlppAdAzbs8YHWwIXgtOyZGxJddLOf0GQPultQ9MqocBkIDnWOxOXKxvO%2FmtOSg%2FqnoOi7WfjTobjA4BSv0o6VTqYwEr7T9mtbet1CEm3KZ8Eob5ciC1n3lov0%2Bi%2FMsX1MZlYhlAx0Xve9TCB0mN4gTRCB9LUFZAvHjio5odu%2FVf%2B9KvVF%2FodC%2F05m72tOAhiDdiyI0vJU7oNNlsVT4JxSWwTrwIPMWzOfAa59lAbudKjWXmOvDOe32hDnI9Jogzjt63XGZOU0VDPwmficrgm%2BDLnf8s6W2iR5K3yqdJl7KY56vAje1sFPy3Y7GV2VlsEJuezRL0%2Fn9Jsz5cFMJqV%2BrwGOqUB67f%2B2wGcFrY8fCHAhAYuy%2BHEVFAhE9HmMRP%2FJOZ%2B7%2B0JdWKB5vrw3oZXJN6%2ByYh4n4T0hfgOANCc%2BDdSqMApZGgV19un%2FWGZaEwaskI%2Fs7%2FJ79uAtY40bRb5alx5PqSwR2mUZPn7Wi9Uf9YJhehdMnSZdzmxRbNTDwCDD9QchtQ31sYCE4SRHM7Zr0xoO3XwKGjY7xetzBkRhl8RrgzpYcW6pKWH&X-Amz-Signature=bfccb244ad98fdfbe3f02e1cfacca70b276da44e35b9a6fabc812a40dea4a9b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YT2IBA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBavSv%2FU7SsbQtudspIlI4T3Tien5n47c2luST%2FxAC46AiEA9bkm8Nh3n%2B4bLw5RmCR%2BwEGEsNgoyUuGQCb%2BpdMn2icqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnnFtRX3OO%2B5MqI6ircA9FCsw6%2BRQbkBdYhlhMBfo8kV3GGlm0UIZlceZOQj8a7lJ%2FVAAepZ%2Bi%2F5QVpogaXzuJHXyKg5ZHCi6A6w4G8p8oYrCFMy9pDfPZV7NilTHyqPZadElx8B5jqWXgJTx%2FZPm8CvTCrFzW6VpkT27xTbAd3QFriZkqXKBtagqTzcfr2AZsXJ83P01FFxKjPEHGzDhQpevNv%2BBjTMKQs2QGXFOBnOazWaZkssBydAaEUXbVo9V2YlJH3xi%2FvSUXxkkSjeu%2FKgmNOH5r4rpS8qIrM2cUy5acuRSm5iNTL5IvuC%2FXBlppAdAzbs8YHWwIXgtOyZGxJddLOf0GQPultQ9MqocBkIDnWOxOXKxvO%2FmtOSg%2FqnoOi7WfjTobjA4BSv0o6VTqYwEr7T9mtbet1CEm3KZ8Eob5ciC1n3lov0%2Bi%2FMsX1MZlYhlAx0Xve9TCB0mN4gTRCB9LUFZAvHjio5odu%2FVf%2B9KvVF%2FodC%2F05m72tOAhiDdiyI0vJU7oNNlsVT4JxSWwTrwIPMWzOfAa59lAbudKjWXmOvDOe32hDnI9Jogzjt63XGZOU0VDPwmficrgm%2BDLnf8s6W2iR5K3yqdJl7KY56vAje1sFPy3Y7GV2VlsEJuezRL0%2Fn9Jsz5cFMJqV%2BrwGOqUB67f%2B2wGcFrY8fCHAhAYuy%2BHEVFAhE9HmMRP%2FJOZ%2B7%2B0JdWKB5vrw3oZXJN6%2ByYh4n4T0hfgOANCc%2BDdSqMApZGgV19un%2FWGZaEwaskI%2Fs7%2FJ79uAtY40bRb5alx5PqSwR2mUZPn7Wi9Uf9YJhehdMnSZdzmxRbNTDwCDD9QchtQ31sYCE4SRHM7Zr0xoO3XwKGjY7xetzBkRhl8RrgzpYcW6pKWH&X-Amz-Signature=74592b4fb57291ff14791f816e629fc8d28b5915e185943c6b5ef98832f226ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YT2IBA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBavSv%2FU7SsbQtudspIlI4T3Tien5n47c2luST%2FxAC46AiEA9bkm8Nh3n%2B4bLw5RmCR%2BwEGEsNgoyUuGQCb%2BpdMn2icqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnnFtRX3OO%2B5MqI6ircA9FCsw6%2BRQbkBdYhlhMBfo8kV3GGlm0UIZlceZOQj8a7lJ%2FVAAepZ%2Bi%2F5QVpogaXzuJHXyKg5ZHCi6A6w4G8p8oYrCFMy9pDfPZV7NilTHyqPZadElx8B5jqWXgJTx%2FZPm8CvTCrFzW6VpkT27xTbAd3QFriZkqXKBtagqTzcfr2AZsXJ83P01FFxKjPEHGzDhQpevNv%2BBjTMKQs2QGXFOBnOazWaZkssBydAaEUXbVo9V2YlJH3xi%2FvSUXxkkSjeu%2FKgmNOH5r4rpS8qIrM2cUy5acuRSm5iNTL5IvuC%2FXBlppAdAzbs8YHWwIXgtOyZGxJddLOf0GQPultQ9MqocBkIDnWOxOXKxvO%2FmtOSg%2FqnoOi7WfjTobjA4BSv0o6VTqYwEr7T9mtbet1CEm3KZ8Eob5ciC1n3lov0%2Bi%2FMsX1MZlYhlAx0Xve9TCB0mN4gTRCB9LUFZAvHjio5odu%2FVf%2B9KvVF%2FodC%2F05m72tOAhiDdiyI0vJU7oNNlsVT4JxSWwTrwIPMWzOfAa59lAbudKjWXmOvDOe32hDnI9Jogzjt63XGZOU0VDPwmficrgm%2BDLnf8s6W2iR5K3yqdJl7KY56vAje1sFPy3Y7GV2VlsEJuezRL0%2Fn9Jsz5cFMJqV%2BrwGOqUB67f%2B2wGcFrY8fCHAhAYuy%2BHEVFAhE9HmMRP%2FJOZ%2B7%2B0JdWKB5vrw3oZXJN6%2ByYh4n4T0hfgOANCc%2BDdSqMApZGgV19un%2FWGZaEwaskI%2Fs7%2FJ79uAtY40bRb5alx5PqSwR2mUZPn7Wi9Uf9YJhehdMnSZdzmxRbNTDwCDD9QchtQ31sYCE4SRHM7Zr0xoO3XwKGjY7xetzBkRhl8RrgzpYcW6pKWH&X-Amz-Signature=e8ce9eeb385a6add28c2f7f57e91deda357d162c4859a816616a61d265d81435&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YT2IBA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBavSv%2FU7SsbQtudspIlI4T3Tien5n47c2luST%2FxAC46AiEA9bkm8Nh3n%2B4bLw5RmCR%2BwEGEsNgoyUuGQCb%2BpdMn2icqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnnFtRX3OO%2B5MqI6ircA9FCsw6%2BRQbkBdYhlhMBfo8kV3GGlm0UIZlceZOQj8a7lJ%2FVAAepZ%2Bi%2F5QVpogaXzuJHXyKg5ZHCi6A6w4G8p8oYrCFMy9pDfPZV7NilTHyqPZadElx8B5jqWXgJTx%2FZPm8CvTCrFzW6VpkT27xTbAd3QFriZkqXKBtagqTzcfr2AZsXJ83P01FFxKjPEHGzDhQpevNv%2BBjTMKQs2QGXFOBnOazWaZkssBydAaEUXbVo9V2YlJH3xi%2FvSUXxkkSjeu%2FKgmNOH5r4rpS8qIrM2cUy5acuRSm5iNTL5IvuC%2FXBlppAdAzbs8YHWwIXgtOyZGxJddLOf0GQPultQ9MqocBkIDnWOxOXKxvO%2FmtOSg%2FqnoOi7WfjTobjA4BSv0o6VTqYwEr7T9mtbet1CEm3KZ8Eob5ciC1n3lov0%2Bi%2FMsX1MZlYhlAx0Xve9TCB0mN4gTRCB9LUFZAvHjio5odu%2FVf%2B9KvVF%2FodC%2F05m72tOAhiDdiyI0vJU7oNNlsVT4JxSWwTrwIPMWzOfAa59lAbudKjWXmOvDOe32hDnI9Jogzjt63XGZOU0VDPwmficrgm%2BDLnf8s6W2iR5K3yqdJl7KY56vAje1sFPy3Y7GV2VlsEJuezRL0%2Fn9Jsz5cFMJqV%2BrwGOqUB67f%2B2wGcFrY8fCHAhAYuy%2BHEVFAhE9HmMRP%2FJOZ%2B7%2B0JdWKB5vrw3oZXJN6%2ByYh4n4T0hfgOANCc%2BDdSqMApZGgV19un%2FWGZaEwaskI%2Fs7%2FJ79uAtY40bRb5alx5PqSwR2mUZPn7Wi9Uf9YJhehdMnSZdzmxRbNTDwCDD9QchtQ31sYCE4SRHM7Zr0xoO3XwKGjY7xetzBkRhl8RrgzpYcW6pKWH&X-Amz-Signature=ff315e7e293d5171a27353c147fb3f4fddd97bb9db1de79af59c5f319d20cd41&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
