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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=55642d897e80603131f8b3296a1d3e94aec06a8fb0522ca1ad8d4077b0fd6701&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=82d480b110c7497068def84c8e9b88a330ed4a174ea14c567ba9ee97de692463&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=fdbacaaf7df28ef262a07de6701fede1fb5b559ef5c8bfe4bcacc9cdf1112dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=1f304d6ed016b78e4e2ec69a33765d7ed605a62f9adb402b8be1c5792ee40b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=ea2085cb173930e404d0a26db3dac5aab95e7cb9fde021571ca16f718caaf1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=bf35d1854c848e75922f9756af868e0e6d280db64e8f7ef486de9ac22653b251&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OW2I2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDO2u%2BFt02vne4vkiP7nlHU7NR%2FPwCfYH%2F8BJK5wGTcAwIgYoLFUg67jFz%2B%2BXaNsr4QDQDb4j%2FWslKi%2BbvzZNMZWi4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEviZMyBQiRxzgG%2BkircA9OYYKaKHaBxn5bLTn3CbAL7G7OwsBTmL6R1SP22LirpE8GIost5YSMT6tvKBG6Zdx3bVnPWxEFrFaWLWBCMFqXMNXzuiOngF0ZHk2mBlFO1XDNMk3YULFmKeCYXE617chqYrXEMvnhP3baFrBvqOBetJoe9UG0rH4FBAcVFAgTdyBeUBqtGnpHLTPM8PSANQCXqDoErHAsdkUjIX5DPxAe%2F68Q%2B9vDv3MRRl4%2FodPcLSNegN6ka4LP6N45HHw%2F3RjplGUQRCvEEXVimkbtrvptF3N2hFGJi63sRzyCx%2BSblSo3i12FY%2FQAVhjNfcIl6%2BqTa5Vfn8aSTJJgEAqfGpx1z1KOOkDZ2nukiuH%2BkjudNoZ5KhB1GWqNvL%2Bc%2Fd4ixYroqJETB0Rs0uvJ5yVkK%2FIvjz0xWoBb9n6d2WFHXK%2FA%2Fn%2B8LZIW6pgtekMQI2YIthr5oKz3KjGL8BX%2FUZ8fXb3ulRPxtZj3pR6ClvokmM7MrlkqPa6%2FisimOa%2FAgIoz0WMgVImYidtsQtBVqXHC0FCxNdcU0wduZXcjva0A9ts36%2FdMwpHEL2h1lWYoniLI1KbQjNEuR%2FrRnSB75bBwfvM6FVmwjHzarH0V%2FBYoCVn5luKGrRdPCeEonnx5yMMygx70GOqUBNkb7uu5iFKTKwFYJ341hOTrLsBMxR38lJDn7m6TP0%2FDbRC9ztAfTqQVNJ9dqzdPQIuE0U8xLOzhbd1mUoTcwIdUyhif7gsaxGv%2FTTkThpX%2B5RgNj8QV7ee1UKiXJAGWOuU0dc5YFZxnaELBU9r1mryViS7Tz%2BwjtozogDjx7p5WHML0f4qMbWhoFsUPeirJZDn7nmoS4VHlOuRHDcGsvtRKQIiQ9&X-Amz-Signature=97991622e41c8e8dd93acb15b2ccd1944e47ed710f95b86715a58cf589e7b750&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
