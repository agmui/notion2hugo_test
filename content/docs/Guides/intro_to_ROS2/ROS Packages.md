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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPOICUQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdIapVDJFZQJz9V67Y6%2FNOYN8%2F2xvjbx1pBYzzsPckKAiBfKCBNLBld3d7gmq1bsVDK3rqsoF7CQzh84J2OyQnOZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMHKEYLDtngEFktJ9TKtwD14wcg2H7NU9Dajkd21A8Ydt4syGkRPMSDO7pkgWLyZk7hQgKjVz0JlklfBrffLNKMj0FmA4xqwb270qwGGa%2FuNOkdEdR4EcQw3MKjkS7Z62WrYiuG18ZE2ZlXjRoWZwHg9nGc4Da9RIYfRj4baC0tpoWXV%2Fdu9fwHG%2B3PBKASAMxMzdvRD2N%2B%2Fr5V1y%2BXejJ7%2BBHcYdVMFDJTzuPVIwzpAat1z%2BdyjTCM%2BWayVPzFTiEDvwkekIoZg9neuzEzD%2BqVxbQkzwly6%2ByMXA7lFclSDzN149wBPzFJn35GRoS4Tz8RnZ05WGMVbosAAspQzlIQtIzaamkSfau3Nc%2FFJECrCzTxXRc6iEKODftmgpQo0KPl6Xr45qli8rjUbAuMsyGaHpRbt3aPv6p4ONnZa8jUdqz8%2B2Mm876V7ULpGp5fDO2WVWZxfskbtxA%2BHjg%2BX5QJR%2FMS7Gv5ySdL0GoK17oliSiPjz5%2F7iCV9sclhxZ7ytdHcBpWDQHMEl0AHppJ15cj%2FENds7cDSGO80Y8Nv2UUfGYgQZxwQ8DR6GNrWZRtP55CCWRpJeoYVfmmkaN6pUX0%2FPKnW9qaIyC9PJo%2B9YDYd42Ub2W4%2FjMLclYsiEBj6DuLexPu%2FTl6YVK7EAwgMyDvQY6pgGuN47cz7A99X6gz77SgXvatP5bQz%2BZriQALRsR6e7c4ONW2cnS5DCNsaa2VLKk%2FPgeoLzp2mTlNisY%2Fl90kwHxj0ePRizQiXca5uglMgFDB9%2FEwM6eDHMb5mwywKSL6Tb2%2FJplPyJLlpi%2FqZIGr0U0IYKsR3V9r5fNyzmBzi6nZjR1%2FhmHiL%2FisOa%2F8YrQHh4fnifLwoQsPdMwOICBFpWqQhiinwu8&X-Amz-Signature=f7cd5c88fa2332a6fcce9d5d207843f931d2b6def5a9c57079071ff8c3926c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPOICUQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdIapVDJFZQJz9V67Y6%2FNOYN8%2F2xvjbx1pBYzzsPckKAiBfKCBNLBld3d7gmq1bsVDK3rqsoF7CQzh84J2OyQnOZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMHKEYLDtngEFktJ9TKtwD14wcg2H7NU9Dajkd21A8Ydt4syGkRPMSDO7pkgWLyZk7hQgKjVz0JlklfBrffLNKMj0FmA4xqwb270qwGGa%2FuNOkdEdR4EcQw3MKjkS7Z62WrYiuG18ZE2ZlXjRoWZwHg9nGc4Da9RIYfRj4baC0tpoWXV%2Fdu9fwHG%2B3PBKASAMxMzdvRD2N%2B%2Fr5V1y%2BXejJ7%2BBHcYdVMFDJTzuPVIwzpAat1z%2BdyjTCM%2BWayVPzFTiEDvwkekIoZg9neuzEzD%2BqVxbQkzwly6%2ByMXA7lFclSDzN149wBPzFJn35GRoS4Tz8RnZ05WGMVbosAAspQzlIQtIzaamkSfau3Nc%2FFJECrCzTxXRc6iEKODftmgpQo0KPl6Xr45qli8rjUbAuMsyGaHpRbt3aPv6p4ONnZa8jUdqz8%2B2Mm876V7ULpGp5fDO2WVWZxfskbtxA%2BHjg%2BX5QJR%2FMS7Gv5ySdL0GoK17oliSiPjz5%2F7iCV9sclhxZ7ytdHcBpWDQHMEl0AHppJ15cj%2FENds7cDSGO80Y8Nv2UUfGYgQZxwQ8DR6GNrWZRtP55CCWRpJeoYVfmmkaN6pUX0%2FPKnW9qaIyC9PJo%2B9YDYd42Ub2W4%2FjMLclYsiEBj6DuLexPu%2FTl6YVK7EAwgMyDvQY6pgGuN47cz7A99X6gz77SgXvatP5bQz%2BZriQALRsR6e7c4ONW2cnS5DCNsaa2VLKk%2FPgeoLzp2mTlNisY%2Fl90kwHxj0ePRizQiXca5uglMgFDB9%2FEwM6eDHMb5mwywKSL6Tb2%2FJplPyJLlpi%2FqZIGr0U0IYKsR3V9r5fNyzmBzi6nZjR1%2FhmHiL%2FisOa%2F8YrQHh4fnifLwoQsPdMwOICBFpWqQhiinwu8&X-Amz-Signature=22638b51cac2991219beb3928365355c0a76852303de29219390e1824d8288ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPOICUQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdIapVDJFZQJz9V67Y6%2FNOYN8%2F2xvjbx1pBYzzsPckKAiBfKCBNLBld3d7gmq1bsVDK3rqsoF7CQzh84J2OyQnOZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMHKEYLDtngEFktJ9TKtwD14wcg2H7NU9Dajkd21A8Ydt4syGkRPMSDO7pkgWLyZk7hQgKjVz0JlklfBrffLNKMj0FmA4xqwb270qwGGa%2FuNOkdEdR4EcQw3MKjkS7Z62WrYiuG18ZE2ZlXjRoWZwHg9nGc4Da9RIYfRj4baC0tpoWXV%2Fdu9fwHG%2B3PBKASAMxMzdvRD2N%2B%2Fr5V1y%2BXejJ7%2BBHcYdVMFDJTzuPVIwzpAat1z%2BdyjTCM%2BWayVPzFTiEDvwkekIoZg9neuzEzD%2BqVxbQkzwly6%2ByMXA7lFclSDzN149wBPzFJn35GRoS4Tz8RnZ05WGMVbosAAspQzlIQtIzaamkSfau3Nc%2FFJECrCzTxXRc6iEKODftmgpQo0KPl6Xr45qli8rjUbAuMsyGaHpRbt3aPv6p4ONnZa8jUdqz8%2B2Mm876V7ULpGp5fDO2WVWZxfskbtxA%2BHjg%2BX5QJR%2FMS7Gv5ySdL0GoK17oliSiPjz5%2F7iCV9sclhxZ7ytdHcBpWDQHMEl0AHppJ15cj%2FENds7cDSGO80Y8Nv2UUfGYgQZxwQ8DR6GNrWZRtP55CCWRpJeoYVfmmkaN6pUX0%2FPKnW9qaIyC9PJo%2B9YDYd42Ub2W4%2FjMLclYsiEBj6DuLexPu%2FTl6YVK7EAwgMyDvQY6pgGuN47cz7A99X6gz77SgXvatP5bQz%2BZriQALRsR6e7c4ONW2cnS5DCNsaa2VLKk%2FPgeoLzp2mTlNisY%2Fl90kwHxj0ePRizQiXca5uglMgFDB9%2FEwM6eDHMb5mwywKSL6Tb2%2FJplPyJLlpi%2FqZIGr0U0IYKsR3V9r5fNyzmBzi6nZjR1%2FhmHiL%2FisOa%2F8YrQHh4fnifLwoQsPdMwOICBFpWqQhiinwu8&X-Amz-Signature=959ac9935aed3bc2534c3c4a643c5a9d82f8365d4e0c84f710c289419f5b6e13&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPOICUQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdIapVDJFZQJz9V67Y6%2FNOYN8%2F2xvjbx1pBYzzsPckKAiBfKCBNLBld3d7gmq1bsVDK3rqsoF7CQzh84J2OyQnOZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMHKEYLDtngEFktJ9TKtwD14wcg2H7NU9Dajkd21A8Ydt4syGkRPMSDO7pkgWLyZk7hQgKjVz0JlklfBrffLNKMj0FmA4xqwb270qwGGa%2FuNOkdEdR4EcQw3MKjkS7Z62WrYiuG18ZE2ZlXjRoWZwHg9nGc4Da9RIYfRj4baC0tpoWXV%2Fdu9fwHG%2B3PBKASAMxMzdvRD2N%2B%2Fr5V1y%2BXejJ7%2BBHcYdVMFDJTzuPVIwzpAat1z%2BdyjTCM%2BWayVPzFTiEDvwkekIoZg9neuzEzD%2BqVxbQkzwly6%2ByMXA7lFclSDzN149wBPzFJn35GRoS4Tz8RnZ05WGMVbosAAspQzlIQtIzaamkSfau3Nc%2FFJECrCzTxXRc6iEKODftmgpQo0KPl6Xr45qli8rjUbAuMsyGaHpRbt3aPv6p4ONnZa8jUdqz8%2B2Mm876V7ULpGp5fDO2WVWZxfskbtxA%2BHjg%2BX5QJR%2FMS7Gv5ySdL0GoK17oliSiPjz5%2F7iCV9sclhxZ7ytdHcBpWDQHMEl0AHppJ15cj%2FENds7cDSGO80Y8Nv2UUfGYgQZxwQ8DR6GNrWZRtP55CCWRpJeoYVfmmkaN6pUX0%2FPKnW9qaIyC9PJo%2B9YDYd42Ub2W4%2FjMLclYsiEBj6DuLexPu%2FTl6YVK7EAwgMyDvQY6pgGuN47cz7A99X6gz77SgXvatP5bQz%2BZriQALRsR6e7c4ONW2cnS5DCNsaa2VLKk%2FPgeoLzp2mTlNisY%2Fl90kwHxj0ePRizQiXca5uglMgFDB9%2FEwM6eDHMb5mwywKSL6Tb2%2FJplPyJLlpi%2FqZIGr0U0IYKsR3V9r5fNyzmBzi6nZjR1%2FhmHiL%2FisOa%2F8YrQHh4fnifLwoQsPdMwOICBFpWqQhiinwu8&X-Amz-Signature=fbcb71176f6edd519636e4fc1ec835f441f0429a5442fd4b8f32ab6952fc4dad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPOICUQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdIapVDJFZQJz9V67Y6%2FNOYN8%2F2xvjbx1pBYzzsPckKAiBfKCBNLBld3d7gmq1bsVDK3rqsoF7CQzh84J2OyQnOZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMHKEYLDtngEFktJ9TKtwD14wcg2H7NU9Dajkd21A8Ydt4syGkRPMSDO7pkgWLyZk7hQgKjVz0JlklfBrffLNKMj0FmA4xqwb270qwGGa%2FuNOkdEdR4EcQw3MKjkS7Z62WrYiuG18ZE2ZlXjRoWZwHg9nGc4Da9RIYfRj4baC0tpoWXV%2Fdu9fwHG%2B3PBKASAMxMzdvRD2N%2B%2Fr5V1y%2BXejJ7%2BBHcYdVMFDJTzuPVIwzpAat1z%2BdyjTCM%2BWayVPzFTiEDvwkekIoZg9neuzEzD%2BqVxbQkzwly6%2ByMXA7lFclSDzN149wBPzFJn35GRoS4Tz8RnZ05WGMVbosAAspQzlIQtIzaamkSfau3Nc%2FFJECrCzTxXRc6iEKODftmgpQo0KPl6Xr45qli8rjUbAuMsyGaHpRbt3aPv6p4ONnZa8jUdqz8%2B2Mm876V7ULpGp5fDO2WVWZxfskbtxA%2BHjg%2BX5QJR%2FMS7Gv5ySdL0GoK17oliSiPjz5%2F7iCV9sclhxZ7ytdHcBpWDQHMEl0AHppJ15cj%2FENds7cDSGO80Y8Nv2UUfGYgQZxwQ8DR6GNrWZRtP55CCWRpJeoYVfmmkaN6pUX0%2FPKnW9qaIyC9PJo%2B9YDYd42Ub2W4%2FjMLclYsiEBj6DuLexPu%2FTl6YVK7EAwgMyDvQY6pgGuN47cz7A99X6gz77SgXvatP5bQz%2BZriQALRsR6e7c4ONW2cnS5DCNsaa2VLKk%2FPgeoLzp2mTlNisY%2Fl90kwHxj0ePRizQiXca5uglMgFDB9%2FEwM6eDHMb5mwywKSL6Tb2%2FJplPyJLlpi%2FqZIGr0U0IYKsR3V9r5fNyzmBzi6nZjR1%2FhmHiL%2FisOa%2F8YrQHh4fnifLwoQsPdMwOICBFpWqQhiinwu8&X-Amz-Signature=7d6da0731d54ac27cb0af72a8892c21349fb5f5d3b4dc6812434b7e42f97829f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPOICUQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdIapVDJFZQJz9V67Y6%2FNOYN8%2F2xvjbx1pBYzzsPckKAiBfKCBNLBld3d7gmq1bsVDK3rqsoF7CQzh84J2OyQnOZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMHKEYLDtngEFktJ9TKtwD14wcg2H7NU9Dajkd21A8Ydt4syGkRPMSDO7pkgWLyZk7hQgKjVz0JlklfBrffLNKMj0FmA4xqwb270qwGGa%2FuNOkdEdR4EcQw3MKjkS7Z62WrYiuG18ZE2ZlXjRoWZwHg9nGc4Da9RIYfRj4baC0tpoWXV%2Fdu9fwHG%2B3PBKASAMxMzdvRD2N%2B%2Fr5V1y%2BXejJ7%2BBHcYdVMFDJTzuPVIwzpAat1z%2BdyjTCM%2BWayVPzFTiEDvwkekIoZg9neuzEzD%2BqVxbQkzwly6%2ByMXA7lFclSDzN149wBPzFJn35GRoS4Tz8RnZ05WGMVbosAAspQzlIQtIzaamkSfau3Nc%2FFJECrCzTxXRc6iEKODftmgpQo0KPl6Xr45qli8rjUbAuMsyGaHpRbt3aPv6p4ONnZa8jUdqz8%2B2Mm876V7ULpGp5fDO2WVWZxfskbtxA%2BHjg%2BX5QJR%2FMS7Gv5ySdL0GoK17oliSiPjz5%2F7iCV9sclhxZ7ytdHcBpWDQHMEl0AHppJ15cj%2FENds7cDSGO80Y8Nv2UUfGYgQZxwQ8DR6GNrWZRtP55CCWRpJeoYVfmmkaN6pUX0%2FPKnW9qaIyC9PJo%2B9YDYd42Ub2W4%2FjMLclYsiEBj6DuLexPu%2FTl6YVK7EAwgMyDvQY6pgGuN47cz7A99X6gz77SgXvatP5bQz%2BZriQALRsR6e7c4ONW2cnS5DCNsaa2VLKk%2FPgeoLzp2mTlNisY%2Fl90kwHxj0ePRizQiXca5uglMgFDB9%2FEwM6eDHMb5mwywKSL6Tb2%2FJplPyJLlpi%2FqZIGr0U0IYKsR3V9r5fNyzmBzi6nZjR1%2FhmHiL%2FisOa%2F8YrQHh4fnifLwoQsPdMwOICBFpWqQhiinwu8&X-Amz-Signature=704a58f9fcc73b5d70fa96002d6bd977fb3e48fd0aa1a21b5468411047cafa90&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPOICUQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAdIapVDJFZQJz9V67Y6%2FNOYN8%2F2xvjbx1pBYzzsPckKAiBfKCBNLBld3d7gmq1bsVDK3rqsoF7CQzh84J2OyQnOZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMHKEYLDtngEFktJ9TKtwD14wcg2H7NU9Dajkd21A8Ydt4syGkRPMSDO7pkgWLyZk7hQgKjVz0JlklfBrffLNKMj0FmA4xqwb270qwGGa%2FuNOkdEdR4EcQw3MKjkS7Z62WrYiuG18ZE2ZlXjRoWZwHg9nGc4Da9RIYfRj4baC0tpoWXV%2Fdu9fwHG%2B3PBKASAMxMzdvRD2N%2B%2Fr5V1y%2BXejJ7%2BBHcYdVMFDJTzuPVIwzpAat1z%2BdyjTCM%2BWayVPzFTiEDvwkekIoZg9neuzEzD%2BqVxbQkzwly6%2ByMXA7lFclSDzN149wBPzFJn35GRoS4Tz8RnZ05WGMVbosAAspQzlIQtIzaamkSfau3Nc%2FFJECrCzTxXRc6iEKODftmgpQo0KPl6Xr45qli8rjUbAuMsyGaHpRbt3aPv6p4ONnZa8jUdqz8%2B2Mm876V7ULpGp5fDO2WVWZxfskbtxA%2BHjg%2BX5QJR%2FMS7Gv5ySdL0GoK17oliSiPjz5%2F7iCV9sclhxZ7ytdHcBpWDQHMEl0AHppJ15cj%2FENds7cDSGO80Y8Nv2UUfGYgQZxwQ8DR6GNrWZRtP55CCWRpJeoYVfmmkaN6pUX0%2FPKnW9qaIyC9PJo%2B9YDYd42Ub2W4%2FjMLclYsiEBj6DuLexPu%2FTl6YVK7EAwgMyDvQY6pgGuN47cz7A99X6gz77SgXvatP5bQz%2BZriQALRsR6e7c4ONW2cnS5DCNsaa2VLKk%2FPgeoLzp2mTlNisY%2Fl90kwHxj0ePRizQiXca5uglMgFDB9%2FEwM6eDHMb5mwywKSL6Tb2%2FJplPyJLlpi%2FqZIGr0U0IYKsR3V9r5fNyzmBzi6nZjR1%2FhmHiL%2FisOa%2F8YrQHh4fnifLwoQsPdMwOICBFpWqQhiinwu8&X-Amz-Signature=b9e13aeeab6253180ba6d122f2fde37613fd385b1cef49fb23a58e5f202a2339&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
