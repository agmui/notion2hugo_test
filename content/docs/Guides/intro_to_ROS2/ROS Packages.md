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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHYPGWJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2BezIM4wKrgmgtvPJBKt%2FQSyOSaGJxxXmLYpFsZF6LAiBc18JbxYqtT1UXYZrkIM2ST0vwb0JEhgoKMkpXcDhUUCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDgJ12q00bNMHDHqKtwDMTXRWa2ERSj8ehnFVwwxeuJqw5q5nVebz1kLYhO2pNWbe0YgeeD4Xr26Jc3M2aTxiF493iBP3HeXUaZE31U25MWWYFs3sZbD1z%2BbSU9zQbZ65W3kfV2fXPSuDuOj4eNsxknkzzvEii0%2Bv3id6x11phVc6aAlAEXn6AI02axMErGYE3%2Fuk3PvCpr49VEJh7b%2FjUsCPws2gjCPy98OA3RGi3agME6Y9Ybgyoh8V5IjWmfpTjNeG2nRN%2B23HMgmxTS7qN4kW5k%2FunScJl7EpCOHR45dmnln8NIU8FqM6O3Z2bIE%2Bq%2BQWPHp6FVmrUa5A1BfvSXWD0DQHboWkKTyEAiIwXdWSMmdeMgHEGcKFPWEYmfWSz7iSYGuWV4nIDn0YrUyb89XdMnu5%2BswtMr%2BX2XlJSHlWB3xJ8THjqvF9qFgt6kNh6gVZlLQ%2FwiKKq32LpOrYdnVrufdRWWXhOlOcjk4gMsHxnvWEtmO0iRvJZo0c6mAwUgf36jApDdwkFhKcTYNbhP7TjBX4SixFL0H2%2FYLdvp7bxqOFBS8LWn3V%2Frfe75AUQQIAF1w07Q5gKQ%2Byuajb0TtuOALvOdi6yxTXe2%2BT2m8xWkfFMmi214fvaSO6GRQhiSp5tOhMdgvuWQwyPicwgY6pgEbMKZC4SfvALU%2FEQsWH2AYxvzdCsj%2BAscD%2B8SF%2F0Y8sgnegad830MFiUO5UmT29g0hvSOinOGF4G17YY8%2FQW7VTyEXIXVxeG0QylpW6su34c%2Bmth6HN2e0fsigZvkwZW4lWGyVY4a4oKQxXe6FK4kZIvFkEyNC6WyKLyOY6BXUkRv6ePKiKfIkX2bv44i%2FHkkCjknK0W5tEpcHtHs0587wDf69Amvi&X-Amz-Signature=90d5f87cc9fbcc750b4a2c47589172a767275810f06f585c81db7c70afbdbb44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHYPGWJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2BezIM4wKrgmgtvPJBKt%2FQSyOSaGJxxXmLYpFsZF6LAiBc18JbxYqtT1UXYZrkIM2ST0vwb0JEhgoKMkpXcDhUUCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDgJ12q00bNMHDHqKtwDMTXRWa2ERSj8ehnFVwwxeuJqw5q5nVebz1kLYhO2pNWbe0YgeeD4Xr26Jc3M2aTxiF493iBP3HeXUaZE31U25MWWYFs3sZbD1z%2BbSU9zQbZ65W3kfV2fXPSuDuOj4eNsxknkzzvEii0%2Bv3id6x11phVc6aAlAEXn6AI02axMErGYE3%2Fuk3PvCpr49VEJh7b%2FjUsCPws2gjCPy98OA3RGi3agME6Y9Ybgyoh8V5IjWmfpTjNeG2nRN%2B23HMgmxTS7qN4kW5k%2FunScJl7EpCOHR45dmnln8NIU8FqM6O3Z2bIE%2Bq%2BQWPHp6FVmrUa5A1BfvSXWD0DQHboWkKTyEAiIwXdWSMmdeMgHEGcKFPWEYmfWSz7iSYGuWV4nIDn0YrUyb89XdMnu5%2BswtMr%2BX2XlJSHlWB3xJ8THjqvF9qFgt6kNh6gVZlLQ%2FwiKKq32LpOrYdnVrufdRWWXhOlOcjk4gMsHxnvWEtmO0iRvJZo0c6mAwUgf36jApDdwkFhKcTYNbhP7TjBX4SixFL0H2%2FYLdvp7bxqOFBS8LWn3V%2Frfe75AUQQIAF1w07Q5gKQ%2Byuajb0TtuOALvOdi6yxTXe2%2BT2m8xWkfFMmi214fvaSO6GRQhiSp5tOhMdgvuWQwyPicwgY6pgEbMKZC4SfvALU%2FEQsWH2AYxvzdCsj%2BAscD%2B8SF%2F0Y8sgnegad830MFiUO5UmT29g0hvSOinOGF4G17YY8%2FQW7VTyEXIXVxeG0QylpW6su34c%2Bmth6HN2e0fsigZvkwZW4lWGyVY4a4oKQxXe6FK4kZIvFkEyNC6WyKLyOY6BXUkRv6ePKiKfIkX2bv44i%2FHkkCjknK0W5tEpcHtHs0587wDf69Amvi&X-Amz-Signature=3b8b7bbf5a0af0f42c0c5ead05ea63b4cf610c3d6d14c73aa030a6e51a92ab0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHYPGWJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2BezIM4wKrgmgtvPJBKt%2FQSyOSaGJxxXmLYpFsZF6LAiBc18JbxYqtT1UXYZrkIM2ST0vwb0JEhgoKMkpXcDhUUCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDgJ12q00bNMHDHqKtwDMTXRWa2ERSj8ehnFVwwxeuJqw5q5nVebz1kLYhO2pNWbe0YgeeD4Xr26Jc3M2aTxiF493iBP3HeXUaZE31U25MWWYFs3sZbD1z%2BbSU9zQbZ65W3kfV2fXPSuDuOj4eNsxknkzzvEii0%2Bv3id6x11phVc6aAlAEXn6AI02axMErGYE3%2Fuk3PvCpr49VEJh7b%2FjUsCPws2gjCPy98OA3RGi3agME6Y9Ybgyoh8V5IjWmfpTjNeG2nRN%2B23HMgmxTS7qN4kW5k%2FunScJl7EpCOHR45dmnln8NIU8FqM6O3Z2bIE%2Bq%2BQWPHp6FVmrUa5A1BfvSXWD0DQHboWkKTyEAiIwXdWSMmdeMgHEGcKFPWEYmfWSz7iSYGuWV4nIDn0YrUyb89XdMnu5%2BswtMr%2BX2XlJSHlWB3xJ8THjqvF9qFgt6kNh6gVZlLQ%2FwiKKq32LpOrYdnVrufdRWWXhOlOcjk4gMsHxnvWEtmO0iRvJZo0c6mAwUgf36jApDdwkFhKcTYNbhP7TjBX4SixFL0H2%2FYLdvp7bxqOFBS8LWn3V%2Frfe75AUQQIAF1w07Q5gKQ%2Byuajb0TtuOALvOdi6yxTXe2%2BT2m8xWkfFMmi214fvaSO6GRQhiSp5tOhMdgvuWQwyPicwgY6pgEbMKZC4SfvALU%2FEQsWH2AYxvzdCsj%2BAscD%2B8SF%2F0Y8sgnegad830MFiUO5UmT29g0hvSOinOGF4G17YY8%2FQW7VTyEXIXVxeG0QylpW6su34c%2Bmth6HN2e0fsigZvkwZW4lWGyVY4a4oKQxXe6FK4kZIvFkEyNC6WyKLyOY6BXUkRv6ePKiKfIkX2bv44i%2FHkkCjknK0W5tEpcHtHs0587wDf69Amvi&X-Amz-Signature=2587f194c24d608f9609134cdc0046dbd168941ed3b1c67b930583817a51cf57&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHYPGWJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2BezIM4wKrgmgtvPJBKt%2FQSyOSaGJxxXmLYpFsZF6LAiBc18JbxYqtT1UXYZrkIM2ST0vwb0JEhgoKMkpXcDhUUCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDgJ12q00bNMHDHqKtwDMTXRWa2ERSj8ehnFVwwxeuJqw5q5nVebz1kLYhO2pNWbe0YgeeD4Xr26Jc3M2aTxiF493iBP3HeXUaZE31U25MWWYFs3sZbD1z%2BbSU9zQbZ65W3kfV2fXPSuDuOj4eNsxknkzzvEii0%2Bv3id6x11phVc6aAlAEXn6AI02axMErGYE3%2Fuk3PvCpr49VEJh7b%2FjUsCPws2gjCPy98OA3RGi3agME6Y9Ybgyoh8V5IjWmfpTjNeG2nRN%2B23HMgmxTS7qN4kW5k%2FunScJl7EpCOHR45dmnln8NIU8FqM6O3Z2bIE%2Bq%2BQWPHp6FVmrUa5A1BfvSXWD0DQHboWkKTyEAiIwXdWSMmdeMgHEGcKFPWEYmfWSz7iSYGuWV4nIDn0YrUyb89XdMnu5%2BswtMr%2BX2XlJSHlWB3xJ8THjqvF9qFgt6kNh6gVZlLQ%2FwiKKq32LpOrYdnVrufdRWWXhOlOcjk4gMsHxnvWEtmO0iRvJZo0c6mAwUgf36jApDdwkFhKcTYNbhP7TjBX4SixFL0H2%2FYLdvp7bxqOFBS8LWn3V%2Frfe75AUQQIAF1w07Q5gKQ%2Byuajb0TtuOALvOdi6yxTXe2%2BT2m8xWkfFMmi214fvaSO6GRQhiSp5tOhMdgvuWQwyPicwgY6pgEbMKZC4SfvALU%2FEQsWH2AYxvzdCsj%2BAscD%2B8SF%2F0Y8sgnegad830MFiUO5UmT29g0hvSOinOGF4G17YY8%2FQW7VTyEXIXVxeG0QylpW6su34c%2Bmth6HN2e0fsigZvkwZW4lWGyVY4a4oKQxXe6FK4kZIvFkEyNC6WyKLyOY6BXUkRv6ePKiKfIkX2bv44i%2FHkkCjknK0W5tEpcHtHs0587wDf69Amvi&X-Amz-Signature=fdf0f55af0b445c83c82a689138e247ff4c2f5d089baf2bb91d481bda8a96ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHYPGWJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2BezIM4wKrgmgtvPJBKt%2FQSyOSaGJxxXmLYpFsZF6LAiBc18JbxYqtT1UXYZrkIM2ST0vwb0JEhgoKMkpXcDhUUCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDgJ12q00bNMHDHqKtwDMTXRWa2ERSj8ehnFVwwxeuJqw5q5nVebz1kLYhO2pNWbe0YgeeD4Xr26Jc3M2aTxiF493iBP3HeXUaZE31U25MWWYFs3sZbD1z%2BbSU9zQbZ65W3kfV2fXPSuDuOj4eNsxknkzzvEii0%2Bv3id6x11phVc6aAlAEXn6AI02axMErGYE3%2Fuk3PvCpr49VEJh7b%2FjUsCPws2gjCPy98OA3RGi3agME6Y9Ybgyoh8V5IjWmfpTjNeG2nRN%2B23HMgmxTS7qN4kW5k%2FunScJl7EpCOHR45dmnln8NIU8FqM6O3Z2bIE%2Bq%2BQWPHp6FVmrUa5A1BfvSXWD0DQHboWkKTyEAiIwXdWSMmdeMgHEGcKFPWEYmfWSz7iSYGuWV4nIDn0YrUyb89XdMnu5%2BswtMr%2BX2XlJSHlWB3xJ8THjqvF9qFgt6kNh6gVZlLQ%2FwiKKq32LpOrYdnVrufdRWWXhOlOcjk4gMsHxnvWEtmO0iRvJZo0c6mAwUgf36jApDdwkFhKcTYNbhP7TjBX4SixFL0H2%2FYLdvp7bxqOFBS8LWn3V%2Frfe75AUQQIAF1w07Q5gKQ%2Byuajb0TtuOALvOdi6yxTXe2%2BT2m8xWkfFMmi214fvaSO6GRQhiSp5tOhMdgvuWQwyPicwgY6pgEbMKZC4SfvALU%2FEQsWH2AYxvzdCsj%2BAscD%2B8SF%2F0Y8sgnegad830MFiUO5UmT29g0hvSOinOGF4G17YY8%2FQW7VTyEXIXVxeG0QylpW6su34c%2Bmth6HN2e0fsigZvkwZW4lWGyVY4a4oKQxXe6FK4kZIvFkEyNC6WyKLyOY6BXUkRv6ePKiKfIkX2bv44i%2FHkkCjknK0W5tEpcHtHs0587wDf69Amvi&X-Amz-Signature=20870fbf4af9afcad61000d9406d4b99c2063da3552a769c39552b4af4646e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHYPGWJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2BezIM4wKrgmgtvPJBKt%2FQSyOSaGJxxXmLYpFsZF6LAiBc18JbxYqtT1UXYZrkIM2ST0vwb0JEhgoKMkpXcDhUUCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDgJ12q00bNMHDHqKtwDMTXRWa2ERSj8ehnFVwwxeuJqw5q5nVebz1kLYhO2pNWbe0YgeeD4Xr26Jc3M2aTxiF493iBP3HeXUaZE31U25MWWYFs3sZbD1z%2BbSU9zQbZ65W3kfV2fXPSuDuOj4eNsxknkzzvEii0%2Bv3id6x11phVc6aAlAEXn6AI02axMErGYE3%2Fuk3PvCpr49VEJh7b%2FjUsCPws2gjCPy98OA3RGi3agME6Y9Ybgyoh8V5IjWmfpTjNeG2nRN%2B23HMgmxTS7qN4kW5k%2FunScJl7EpCOHR45dmnln8NIU8FqM6O3Z2bIE%2Bq%2BQWPHp6FVmrUa5A1BfvSXWD0DQHboWkKTyEAiIwXdWSMmdeMgHEGcKFPWEYmfWSz7iSYGuWV4nIDn0YrUyb89XdMnu5%2BswtMr%2BX2XlJSHlWB3xJ8THjqvF9qFgt6kNh6gVZlLQ%2FwiKKq32LpOrYdnVrufdRWWXhOlOcjk4gMsHxnvWEtmO0iRvJZo0c6mAwUgf36jApDdwkFhKcTYNbhP7TjBX4SixFL0H2%2FYLdvp7bxqOFBS8LWn3V%2Frfe75AUQQIAF1w07Q5gKQ%2Byuajb0TtuOALvOdi6yxTXe2%2BT2m8xWkfFMmi214fvaSO6GRQhiSp5tOhMdgvuWQwyPicwgY6pgEbMKZC4SfvALU%2FEQsWH2AYxvzdCsj%2BAscD%2B8SF%2F0Y8sgnegad830MFiUO5UmT29g0hvSOinOGF4G17YY8%2FQW7VTyEXIXVxeG0QylpW6su34c%2Bmth6HN2e0fsigZvkwZW4lWGyVY4a4oKQxXe6FK4kZIvFkEyNC6WyKLyOY6BXUkRv6ePKiKfIkX2bv44i%2FHkkCjknK0W5tEpcHtHs0587wDf69Amvi&X-Amz-Signature=76af839a36fa036ba2364a1704eb8de24e1fa7ca82570518f45da98cb09acfd2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHYPGWJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2BezIM4wKrgmgtvPJBKt%2FQSyOSaGJxxXmLYpFsZF6LAiBc18JbxYqtT1UXYZrkIM2ST0vwb0JEhgoKMkpXcDhUUCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDgJ12q00bNMHDHqKtwDMTXRWa2ERSj8ehnFVwwxeuJqw5q5nVebz1kLYhO2pNWbe0YgeeD4Xr26Jc3M2aTxiF493iBP3HeXUaZE31U25MWWYFs3sZbD1z%2BbSU9zQbZ65W3kfV2fXPSuDuOj4eNsxknkzzvEii0%2Bv3id6x11phVc6aAlAEXn6AI02axMErGYE3%2Fuk3PvCpr49VEJh7b%2FjUsCPws2gjCPy98OA3RGi3agME6Y9Ybgyoh8V5IjWmfpTjNeG2nRN%2B23HMgmxTS7qN4kW5k%2FunScJl7EpCOHR45dmnln8NIU8FqM6O3Z2bIE%2Bq%2BQWPHp6FVmrUa5A1BfvSXWD0DQHboWkKTyEAiIwXdWSMmdeMgHEGcKFPWEYmfWSz7iSYGuWV4nIDn0YrUyb89XdMnu5%2BswtMr%2BX2XlJSHlWB3xJ8THjqvF9qFgt6kNh6gVZlLQ%2FwiKKq32LpOrYdnVrufdRWWXhOlOcjk4gMsHxnvWEtmO0iRvJZo0c6mAwUgf36jApDdwkFhKcTYNbhP7TjBX4SixFL0H2%2FYLdvp7bxqOFBS8LWn3V%2Frfe75AUQQIAF1w07Q5gKQ%2Byuajb0TtuOALvOdi6yxTXe2%2BT2m8xWkfFMmi214fvaSO6GRQhiSp5tOhMdgvuWQwyPicwgY6pgEbMKZC4SfvALU%2FEQsWH2AYxvzdCsj%2BAscD%2B8SF%2F0Y8sgnegad830MFiUO5UmT29g0hvSOinOGF4G17YY8%2FQW7VTyEXIXVxeG0QylpW6su34c%2Bmth6HN2e0fsigZvkwZW4lWGyVY4a4oKQxXe6FK4kZIvFkEyNC6WyKLyOY6BXUkRv6ePKiKfIkX2bv44i%2FHkkCjknK0W5tEpcHtHs0587wDf69Amvi&X-Amz-Signature=32f96d5358644eef96fb833934d9e583ec2abc15dbf5053a3be5b6104dccbb51&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
