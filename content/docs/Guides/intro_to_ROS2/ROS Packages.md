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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOXB6Z4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9rYpqTnxpIsdCHcDZIjq%2BBoM6ozXmW8iciU%2FNdyjwAiEA20B4458%2BmalPbZxikjknpkX%2BUSubviUoHfZ4BMNHJ9IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVbl7qygDbkud1XXircAxflhO2NFnzxNOU4omxUoAWtbirr8a499NMD30qVQKuPRFD9Kl40pMAFEfJFFYCY2OGUIaPnhB%2BPROXWjkzzkWcn%2Fxn%2F4MJ7Ot8gfNRVjgitkse%2BgBDakD8YytyC8RjLfvdVFIDZ7cQt7c9hRbSzYxyGITha3Zi4661o4W6qyRKo3E9X6cTTbw8413Ou47mycKasGx2q965f0A4Kpq0Atr3NK18Z1zxyTB6JQ3cGHzX4dHSPIEY1qbo%2FUjSkjI%2BaFaVVb76hzHp%2FUsHm%2B6EXe0p9Msfd43gQGli5KCtUP9UA9OPQa7TnHlk807lGJ0o2ol3LE94KOFDtsiRvMB8rsqKN5%2BWgtsHdZDCCjqT45jzzq%2FX0OALRkYQ9vFRWYHrUYLf%2F9YPhZ6vld1hLAj90Np1sVv%2F8D5UesS3%2FzxyI6U6Ur1YqtHcuB7QXKRgBFoUEFCeN7QfHJnlLMIz40IUdf9MWHr54knI9mppM5ps70SS3HEDYMizlwmJZ4I%2FRJ5%2B83psIGZoLthIEB%2Bhno8KE064Vwo4BKUhgMV8hZjYNHc6bRKKXYkMHqDWnKyZrPugneYJiVEzLpU10r%2Fr3JOuPg46sQTkChME1vG%2BLpFOCiZQdaG6jzmjXORE8kKu2MNDaj8MGOqUByclzxTNY3D7FvBeRtih1nZtEiN0JwxvCr3hEGBZHG3KTNK%2F1b4jfhxIGDLXNfPu2jIWqhTQRvSJKt9bg%2FgrzKaksERRx70OODDp4xGOhb4V6vGTBJMQKunKJWXc13WMRsWJSWySkvz1Kva4Zpx1oinTdl4iPqGdQkTqqoV6qyX2xbf4CmeRVXGuOX7pbmhaQLmx6%2BIsTrA7T%2BQ%2BcU6hgj2K2Heuo&X-Amz-Signature=39a5d3a837e3eec75f224fd206f4fe414aa602d9e21768b8b387b91706b4e15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOXB6Z4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9rYpqTnxpIsdCHcDZIjq%2BBoM6ozXmW8iciU%2FNdyjwAiEA20B4458%2BmalPbZxikjknpkX%2BUSubviUoHfZ4BMNHJ9IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVbl7qygDbkud1XXircAxflhO2NFnzxNOU4omxUoAWtbirr8a499NMD30qVQKuPRFD9Kl40pMAFEfJFFYCY2OGUIaPnhB%2BPROXWjkzzkWcn%2Fxn%2F4MJ7Ot8gfNRVjgitkse%2BgBDakD8YytyC8RjLfvdVFIDZ7cQt7c9hRbSzYxyGITha3Zi4661o4W6qyRKo3E9X6cTTbw8413Ou47mycKasGx2q965f0A4Kpq0Atr3NK18Z1zxyTB6JQ3cGHzX4dHSPIEY1qbo%2FUjSkjI%2BaFaVVb76hzHp%2FUsHm%2B6EXe0p9Msfd43gQGli5KCtUP9UA9OPQa7TnHlk807lGJ0o2ol3LE94KOFDtsiRvMB8rsqKN5%2BWgtsHdZDCCjqT45jzzq%2FX0OALRkYQ9vFRWYHrUYLf%2F9YPhZ6vld1hLAj90Np1sVv%2F8D5UesS3%2FzxyI6U6Ur1YqtHcuB7QXKRgBFoUEFCeN7QfHJnlLMIz40IUdf9MWHr54knI9mppM5ps70SS3HEDYMizlwmJZ4I%2FRJ5%2B83psIGZoLthIEB%2Bhno8KE064Vwo4BKUhgMV8hZjYNHc6bRKKXYkMHqDWnKyZrPugneYJiVEzLpU10r%2Fr3JOuPg46sQTkChME1vG%2BLpFOCiZQdaG6jzmjXORE8kKu2MNDaj8MGOqUByclzxTNY3D7FvBeRtih1nZtEiN0JwxvCr3hEGBZHG3KTNK%2F1b4jfhxIGDLXNfPu2jIWqhTQRvSJKt9bg%2FgrzKaksERRx70OODDp4xGOhb4V6vGTBJMQKunKJWXc13WMRsWJSWySkvz1Kva4Zpx1oinTdl4iPqGdQkTqqoV6qyX2xbf4CmeRVXGuOX7pbmhaQLmx6%2BIsTrA7T%2BQ%2BcU6hgj2K2Heuo&X-Amz-Signature=18194fb645771b8746706ef2040e5585f0d84ba25b6677c1af7b9970f9d3a519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOXB6Z4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9rYpqTnxpIsdCHcDZIjq%2BBoM6ozXmW8iciU%2FNdyjwAiEA20B4458%2BmalPbZxikjknpkX%2BUSubviUoHfZ4BMNHJ9IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVbl7qygDbkud1XXircAxflhO2NFnzxNOU4omxUoAWtbirr8a499NMD30qVQKuPRFD9Kl40pMAFEfJFFYCY2OGUIaPnhB%2BPROXWjkzzkWcn%2Fxn%2F4MJ7Ot8gfNRVjgitkse%2BgBDakD8YytyC8RjLfvdVFIDZ7cQt7c9hRbSzYxyGITha3Zi4661o4W6qyRKo3E9X6cTTbw8413Ou47mycKasGx2q965f0A4Kpq0Atr3NK18Z1zxyTB6JQ3cGHzX4dHSPIEY1qbo%2FUjSkjI%2BaFaVVb76hzHp%2FUsHm%2B6EXe0p9Msfd43gQGli5KCtUP9UA9OPQa7TnHlk807lGJ0o2ol3LE94KOFDtsiRvMB8rsqKN5%2BWgtsHdZDCCjqT45jzzq%2FX0OALRkYQ9vFRWYHrUYLf%2F9YPhZ6vld1hLAj90Np1sVv%2F8D5UesS3%2FzxyI6U6Ur1YqtHcuB7QXKRgBFoUEFCeN7QfHJnlLMIz40IUdf9MWHr54knI9mppM5ps70SS3HEDYMizlwmJZ4I%2FRJ5%2B83psIGZoLthIEB%2Bhno8KE064Vwo4BKUhgMV8hZjYNHc6bRKKXYkMHqDWnKyZrPugneYJiVEzLpU10r%2Fr3JOuPg46sQTkChME1vG%2BLpFOCiZQdaG6jzmjXORE8kKu2MNDaj8MGOqUByclzxTNY3D7FvBeRtih1nZtEiN0JwxvCr3hEGBZHG3KTNK%2F1b4jfhxIGDLXNfPu2jIWqhTQRvSJKt9bg%2FgrzKaksERRx70OODDp4xGOhb4V6vGTBJMQKunKJWXc13WMRsWJSWySkvz1Kva4Zpx1oinTdl4iPqGdQkTqqoV6qyX2xbf4CmeRVXGuOX7pbmhaQLmx6%2BIsTrA7T%2BQ%2BcU6hgj2K2Heuo&X-Amz-Signature=04b0e29ef979c4d6a24d16c140c7f771f845d342ebc3748ca0ee9571e4864b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOXB6Z4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9rYpqTnxpIsdCHcDZIjq%2BBoM6ozXmW8iciU%2FNdyjwAiEA20B4458%2BmalPbZxikjknpkX%2BUSubviUoHfZ4BMNHJ9IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVbl7qygDbkud1XXircAxflhO2NFnzxNOU4omxUoAWtbirr8a499NMD30qVQKuPRFD9Kl40pMAFEfJFFYCY2OGUIaPnhB%2BPROXWjkzzkWcn%2Fxn%2F4MJ7Ot8gfNRVjgitkse%2BgBDakD8YytyC8RjLfvdVFIDZ7cQt7c9hRbSzYxyGITha3Zi4661o4W6qyRKo3E9X6cTTbw8413Ou47mycKasGx2q965f0A4Kpq0Atr3NK18Z1zxyTB6JQ3cGHzX4dHSPIEY1qbo%2FUjSkjI%2BaFaVVb76hzHp%2FUsHm%2B6EXe0p9Msfd43gQGli5KCtUP9UA9OPQa7TnHlk807lGJ0o2ol3LE94KOFDtsiRvMB8rsqKN5%2BWgtsHdZDCCjqT45jzzq%2FX0OALRkYQ9vFRWYHrUYLf%2F9YPhZ6vld1hLAj90Np1sVv%2F8D5UesS3%2FzxyI6U6Ur1YqtHcuB7QXKRgBFoUEFCeN7QfHJnlLMIz40IUdf9MWHr54knI9mppM5ps70SS3HEDYMizlwmJZ4I%2FRJ5%2B83psIGZoLthIEB%2Bhno8KE064Vwo4BKUhgMV8hZjYNHc6bRKKXYkMHqDWnKyZrPugneYJiVEzLpU10r%2Fr3JOuPg46sQTkChME1vG%2BLpFOCiZQdaG6jzmjXORE8kKu2MNDaj8MGOqUByclzxTNY3D7FvBeRtih1nZtEiN0JwxvCr3hEGBZHG3KTNK%2F1b4jfhxIGDLXNfPu2jIWqhTQRvSJKt9bg%2FgrzKaksERRx70OODDp4xGOhb4V6vGTBJMQKunKJWXc13WMRsWJSWySkvz1Kva4Zpx1oinTdl4iPqGdQkTqqoV6qyX2xbf4CmeRVXGuOX7pbmhaQLmx6%2BIsTrA7T%2BQ%2BcU6hgj2K2Heuo&X-Amz-Signature=0a3524416a43aa81e3cfea8a0d2f838d6685c4badf265b853f274030250be823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOXB6Z4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9rYpqTnxpIsdCHcDZIjq%2BBoM6ozXmW8iciU%2FNdyjwAiEA20B4458%2BmalPbZxikjknpkX%2BUSubviUoHfZ4BMNHJ9IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVbl7qygDbkud1XXircAxflhO2NFnzxNOU4omxUoAWtbirr8a499NMD30qVQKuPRFD9Kl40pMAFEfJFFYCY2OGUIaPnhB%2BPROXWjkzzkWcn%2Fxn%2F4MJ7Ot8gfNRVjgitkse%2BgBDakD8YytyC8RjLfvdVFIDZ7cQt7c9hRbSzYxyGITha3Zi4661o4W6qyRKo3E9X6cTTbw8413Ou47mycKasGx2q965f0A4Kpq0Atr3NK18Z1zxyTB6JQ3cGHzX4dHSPIEY1qbo%2FUjSkjI%2BaFaVVb76hzHp%2FUsHm%2B6EXe0p9Msfd43gQGli5KCtUP9UA9OPQa7TnHlk807lGJ0o2ol3LE94KOFDtsiRvMB8rsqKN5%2BWgtsHdZDCCjqT45jzzq%2FX0OALRkYQ9vFRWYHrUYLf%2F9YPhZ6vld1hLAj90Np1sVv%2F8D5UesS3%2FzxyI6U6Ur1YqtHcuB7QXKRgBFoUEFCeN7QfHJnlLMIz40IUdf9MWHr54knI9mppM5ps70SS3HEDYMizlwmJZ4I%2FRJ5%2B83psIGZoLthIEB%2Bhno8KE064Vwo4BKUhgMV8hZjYNHc6bRKKXYkMHqDWnKyZrPugneYJiVEzLpU10r%2Fr3JOuPg46sQTkChME1vG%2BLpFOCiZQdaG6jzmjXORE8kKu2MNDaj8MGOqUByclzxTNY3D7FvBeRtih1nZtEiN0JwxvCr3hEGBZHG3KTNK%2F1b4jfhxIGDLXNfPu2jIWqhTQRvSJKt9bg%2FgrzKaksERRx70OODDp4xGOhb4V6vGTBJMQKunKJWXc13WMRsWJSWySkvz1Kva4Zpx1oinTdl4iPqGdQkTqqoV6qyX2xbf4CmeRVXGuOX7pbmhaQLmx6%2BIsTrA7T%2BQ%2BcU6hgj2K2Heuo&X-Amz-Signature=5b96e38e827cb6c8c1f38a4952d5ef7e7b9e9994fd5886e53b01537c2b25246c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOXB6Z4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9rYpqTnxpIsdCHcDZIjq%2BBoM6ozXmW8iciU%2FNdyjwAiEA20B4458%2BmalPbZxikjknpkX%2BUSubviUoHfZ4BMNHJ9IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVbl7qygDbkud1XXircAxflhO2NFnzxNOU4omxUoAWtbirr8a499NMD30qVQKuPRFD9Kl40pMAFEfJFFYCY2OGUIaPnhB%2BPROXWjkzzkWcn%2Fxn%2F4MJ7Ot8gfNRVjgitkse%2BgBDakD8YytyC8RjLfvdVFIDZ7cQt7c9hRbSzYxyGITha3Zi4661o4W6qyRKo3E9X6cTTbw8413Ou47mycKasGx2q965f0A4Kpq0Atr3NK18Z1zxyTB6JQ3cGHzX4dHSPIEY1qbo%2FUjSkjI%2BaFaVVb76hzHp%2FUsHm%2B6EXe0p9Msfd43gQGli5KCtUP9UA9OPQa7TnHlk807lGJ0o2ol3LE94KOFDtsiRvMB8rsqKN5%2BWgtsHdZDCCjqT45jzzq%2FX0OALRkYQ9vFRWYHrUYLf%2F9YPhZ6vld1hLAj90Np1sVv%2F8D5UesS3%2FzxyI6U6Ur1YqtHcuB7QXKRgBFoUEFCeN7QfHJnlLMIz40IUdf9MWHr54knI9mppM5ps70SS3HEDYMizlwmJZ4I%2FRJ5%2B83psIGZoLthIEB%2Bhno8KE064Vwo4BKUhgMV8hZjYNHc6bRKKXYkMHqDWnKyZrPugneYJiVEzLpU10r%2Fr3JOuPg46sQTkChME1vG%2BLpFOCiZQdaG6jzmjXORE8kKu2MNDaj8MGOqUByclzxTNY3D7FvBeRtih1nZtEiN0JwxvCr3hEGBZHG3KTNK%2F1b4jfhxIGDLXNfPu2jIWqhTQRvSJKt9bg%2FgrzKaksERRx70OODDp4xGOhb4V6vGTBJMQKunKJWXc13WMRsWJSWySkvz1Kva4Zpx1oinTdl4iPqGdQkTqqoV6qyX2xbf4CmeRVXGuOX7pbmhaQLmx6%2BIsTrA7T%2BQ%2BcU6hgj2K2Heuo&X-Amz-Signature=1ab4d0051aa9436435f6eab5b17e5fb2c745b9a5b533cab84b908501489bb390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOXB6Z4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9rYpqTnxpIsdCHcDZIjq%2BBoM6ozXmW8iciU%2FNdyjwAiEA20B4458%2BmalPbZxikjknpkX%2BUSubviUoHfZ4BMNHJ9IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVbl7qygDbkud1XXircAxflhO2NFnzxNOU4omxUoAWtbirr8a499NMD30qVQKuPRFD9Kl40pMAFEfJFFYCY2OGUIaPnhB%2BPROXWjkzzkWcn%2Fxn%2F4MJ7Ot8gfNRVjgitkse%2BgBDakD8YytyC8RjLfvdVFIDZ7cQt7c9hRbSzYxyGITha3Zi4661o4W6qyRKo3E9X6cTTbw8413Ou47mycKasGx2q965f0A4Kpq0Atr3NK18Z1zxyTB6JQ3cGHzX4dHSPIEY1qbo%2FUjSkjI%2BaFaVVb76hzHp%2FUsHm%2B6EXe0p9Msfd43gQGli5KCtUP9UA9OPQa7TnHlk807lGJ0o2ol3LE94KOFDtsiRvMB8rsqKN5%2BWgtsHdZDCCjqT45jzzq%2FX0OALRkYQ9vFRWYHrUYLf%2F9YPhZ6vld1hLAj90Np1sVv%2F8D5UesS3%2FzxyI6U6Ur1YqtHcuB7QXKRgBFoUEFCeN7QfHJnlLMIz40IUdf9MWHr54knI9mppM5ps70SS3HEDYMizlwmJZ4I%2FRJ5%2B83psIGZoLthIEB%2Bhno8KE064Vwo4BKUhgMV8hZjYNHc6bRKKXYkMHqDWnKyZrPugneYJiVEzLpU10r%2Fr3JOuPg46sQTkChME1vG%2BLpFOCiZQdaG6jzmjXORE8kKu2MNDaj8MGOqUByclzxTNY3D7FvBeRtih1nZtEiN0JwxvCr3hEGBZHG3KTNK%2F1b4jfhxIGDLXNfPu2jIWqhTQRvSJKt9bg%2FgrzKaksERRx70OODDp4xGOhb4V6vGTBJMQKunKJWXc13WMRsWJSWySkvz1Kva4Zpx1oinTdl4iPqGdQkTqqoV6qyX2xbf4CmeRVXGuOX7pbmhaQLmx6%2BIsTrA7T%2BQ%2BcU6hgj2K2Heuo&X-Amz-Signature=c9112ada1361460add84751817d24402d4df782e960cf1f777b7a21a827d6487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
