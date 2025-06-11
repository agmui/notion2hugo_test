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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN4WHQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6tjsfi8vviGE05ShtOt9BnJalrGkTlAOgxx3GfbyIgIgLEc5V5x73iL29lMMP6nrf8I%2F1%2BakDCVCBegSVqJ8ogAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoThBYu5EaMB0M9JircA5K7HiisqRTba2aJJf9UCwHol9nLEND2J9ujSJNTtjErrVG7RMegTqpvMuza47RyWcmDVCb3HPEk1%2BFtsMZhLd3nDR2BYpvJOUNC%2B4EDyVIuDECIauG9w%2B%2BQ61guyotE4mK0mFuZvbrf%2Bi697Dmhkm%2BiPoyfqPEQpfTcamfuppSyQvrZXjGXkbXg6EyHad%2FXlhx8p2K%2FH3rqFdC15jaXhDXRqwLjghn4F4iQvF2wn1fQGHph5HAB9VYCpuOhOhTFkj2nOCEVUiy3zatx1UPls4mTwFfkrbzgph47GjlSpMQwKDrfLwpiRU1Lted%2FXqksiA5DzmB7CdOHflL76uA%2FwaCXPlM7h6TpPjfRucsBv80%2BOCUxBAiy4JQ3Qflat3iJBF1FJJcB7Djsa9vyu7akmAqnBBgtZWn1OvX2lJ0ixutMlU%2FG9jezHatQh%2FRhT6d%2Be0mE2d3%2BSubQ4SRd%2FDVGagal%2BC8xudf4HQT%2F3iDCnXzSB%2F%2BWl0%2FYVZ5kDJ36LZZk8fwE3eZxvKaX0OdGLODutqwV1ZUOXbVpZHAZGYrOKgYCjJyCjHcDJm9oOQ7jEAnagRS8a3jIVW3OvCl9xLeApCurAzOecczeX1OxXLlUobY05kKQPqfJY3cJUwUaMMa3pcIGOqUBZwTE3GVct9%2BHAkNlSLNA5KP7idkZq%2FbRyT9fi9fQL5L7ya7i8LKHYX0qJHt%2B7IUjC2zIY8h%2B1ufpYf4jgqf%2B3tbpjwsAfSKvpv95HcmU1nck1DJTTqmWdHoRM5dAT4Aj9MxgLaOCWgYyMSUBcOOLnmKPdo7RePup5n4JtGBNdAQJBzjJktCiFvAHr70ip%2BtQD4Cniz%2BA80Iq%2FmMmqbMMqF89i8YW&X-Amz-Signature=ac3d5fb654dd9f28d3fa3e2219ff634454fa9b4b23f256bea90f45e429221095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN4WHQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6tjsfi8vviGE05ShtOt9BnJalrGkTlAOgxx3GfbyIgIgLEc5V5x73iL29lMMP6nrf8I%2F1%2BakDCVCBegSVqJ8ogAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoThBYu5EaMB0M9JircA5K7HiisqRTba2aJJf9UCwHol9nLEND2J9ujSJNTtjErrVG7RMegTqpvMuza47RyWcmDVCb3HPEk1%2BFtsMZhLd3nDR2BYpvJOUNC%2B4EDyVIuDECIauG9w%2B%2BQ61guyotE4mK0mFuZvbrf%2Bi697Dmhkm%2BiPoyfqPEQpfTcamfuppSyQvrZXjGXkbXg6EyHad%2FXlhx8p2K%2FH3rqFdC15jaXhDXRqwLjghn4F4iQvF2wn1fQGHph5HAB9VYCpuOhOhTFkj2nOCEVUiy3zatx1UPls4mTwFfkrbzgph47GjlSpMQwKDrfLwpiRU1Lted%2FXqksiA5DzmB7CdOHflL76uA%2FwaCXPlM7h6TpPjfRucsBv80%2BOCUxBAiy4JQ3Qflat3iJBF1FJJcB7Djsa9vyu7akmAqnBBgtZWn1OvX2lJ0ixutMlU%2FG9jezHatQh%2FRhT6d%2Be0mE2d3%2BSubQ4SRd%2FDVGagal%2BC8xudf4HQT%2F3iDCnXzSB%2F%2BWl0%2FYVZ5kDJ36LZZk8fwE3eZxvKaX0OdGLODutqwV1ZUOXbVpZHAZGYrOKgYCjJyCjHcDJm9oOQ7jEAnagRS8a3jIVW3OvCl9xLeApCurAzOecczeX1OxXLlUobY05kKQPqfJY3cJUwUaMMa3pcIGOqUBZwTE3GVct9%2BHAkNlSLNA5KP7idkZq%2FbRyT9fi9fQL5L7ya7i8LKHYX0qJHt%2B7IUjC2zIY8h%2B1ufpYf4jgqf%2B3tbpjwsAfSKvpv95HcmU1nck1DJTTqmWdHoRM5dAT4Aj9MxgLaOCWgYyMSUBcOOLnmKPdo7RePup5n4JtGBNdAQJBzjJktCiFvAHr70ip%2BtQD4Cniz%2BA80Iq%2FmMmqbMMqF89i8YW&X-Amz-Signature=52e81db18329e93c77140adb6d699af95f09522f2e1403fe22ed0323e1fa27c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN4WHQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6tjsfi8vviGE05ShtOt9BnJalrGkTlAOgxx3GfbyIgIgLEc5V5x73iL29lMMP6nrf8I%2F1%2BakDCVCBegSVqJ8ogAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoThBYu5EaMB0M9JircA5K7HiisqRTba2aJJf9UCwHol9nLEND2J9ujSJNTtjErrVG7RMegTqpvMuza47RyWcmDVCb3HPEk1%2BFtsMZhLd3nDR2BYpvJOUNC%2B4EDyVIuDECIauG9w%2B%2BQ61guyotE4mK0mFuZvbrf%2Bi697Dmhkm%2BiPoyfqPEQpfTcamfuppSyQvrZXjGXkbXg6EyHad%2FXlhx8p2K%2FH3rqFdC15jaXhDXRqwLjghn4F4iQvF2wn1fQGHph5HAB9VYCpuOhOhTFkj2nOCEVUiy3zatx1UPls4mTwFfkrbzgph47GjlSpMQwKDrfLwpiRU1Lted%2FXqksiA5DzmB7CdOHflL76uA%2FwaCXPlM7h6TpPjfRucsBv80%2BOCUxBAiy4JQ3Qflat3iJBF1FJJcB7Djsa9vyu7akmAqnBBgtZWn1OvX2lJ0ixutMlU%2FG9jezHatQh%2FRhT6d%2Be0mE2d3%2BSubQ4SRd%2FDVGagal%2BC8xudf4HQT%2F3iDCnXzSB%2F%2BWl0%2FYVZ5kDJ36LZZk8fwE3eZxvKaX0OdGLODutqwV1ZUOXbVpZHAZGYrOKgYCjJyCjHcDJm9oOQ7jEAnagRS8a3jIVW3OvCl9xLeApCurAzOecczeX1OxXLlUobY05kKQPqfJY3cJUwUaMMa3pcIGOqUBZwTE3GVct9%2BHAkNlSLNA5KP7idkZq%2FbRyT9fi9fQL5L7ya7i8LKHYX0qJHt%2B7IUjC2zIY8h%2B1ufpYf4jgqf%2B3tbpjwsAfSKvpv95HcmU1nck1DJTTqmWdHoRM5dAT4Aj9MxgLaOCWgYyMSUBcOOLnmKPdo7RePup5n4JtGBNdAQJBzjJktCiFvAHr70ip%2BtQD4Cniz%2BA80Iq%2FmMmqbMMqF89i8YW&X-Amz-Signature=7ae9e12805e3a38b4cb6fb18051b7ff0a15ba4e2d42b3ff7ccd11405676d9e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN4WHQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6tjsfi8vviGE05ShtOt9BnJalrGkTlAOgxx3GfbyIgIgLEc5V5x73iL29lMMP6nrf8I%2F1%2BakDCVCBegSVqJ8ogAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoThBYu5EaMB0M9JircA5K7HiisqRTba2aJJf9UCwHol9nLEND2J9ujSJNTtjErrVG7RMegTqpvMuza47RyWcmDVCb3HPEk1%2BFtsMZhLd3nDR2BYpvJOUNC%2B4EDyVIuDECIauG9w%2B%2BQ61guyotE4mK0mFuZvbrf%2Bi697Dmhkm%2BiPoyfqPEQpfTcamfuppSyQvrZXjGXkbXg6EyHad%2FXlhx8p2K%2FH3rqFdC15jaXhDXRqwLjghn4F4iQvF2wn1fQGHph5HAB9VYCpuOhOhTFkj2nOCEVUiy3zatx1UPls4mTwFfkrbzgph47GjlSpMQwKDrfLwpiRU1Lted%2FXqksiA5DzmB7CdOHflL76uA%2FwaCXPlM7h6TpPjfRucsBv80%2BOCUxBAiy4JQ3Qflat3iJBF1FJJcB7Djsa9vyu7akmAqnBBgtZWn1OvX2lJ0ixutMlU%2FG9jezHatQh%2FRhT6d%2Be0mE2d3%2BSubQ4SRd%2FDVGagal%2BC8xudf4HQT%2F3iDCnXzSB%2F%2BWl0%2FYVZ5kDJ36LZZk8fwE3eZxvKaX0OdGLODutqwV1ZUOXbVpZHAZGYrOKgYCjJyCjHcDJm9oOQ7jEAnagRS8a3jIVW3OvCl9xLeApCurAzOecczeX1OxXLlUobY05kKQPqfJY3cJUwUaMMa3pcIGOqUBZwTE3GVct9%2BHAkNlSLNA5KP7idkZq%2FbRyT9fi9fQL5L7ya7i8LKHYX0qJHt%2B7IUjC2zIY8h%2B1ufpYf4jgqf%2B3tbpjwsAfSKvpv95HcmU1nck1DJTTqmWdHoRM5dAT4Aj9MxgLaOCWgYyMSUBcOOLnmKPdo7RePup5n4JtGBNdAQJBzjJktCiFvAHr70ip%2BtQD4Cniz%2BA80Iq%2FmMmqbMMqF89i8YW&X-Amz-Signature=5f545c8e55321bcfc95b2aeefa3162c06e13482bfbf850a15d1b46ae28719588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN4WHQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6tjsfi8vviGE05ShtOt9BnJalrGkTlAOgxx3GfbyIgIgLEc5V5x73iL29lMMP6nrf8I%2F1%2BakDCVCBegSVqJ8ogAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoThBYu5EaMB0M9JircA5K7HiisqRTba2aJJf9UCwHol9nLEND2J9ujSJNTtjErrVG7RMegTqpvMuza47RyWcmDVCb3HPEk1%2BFtsMZhLd3nDR2BYpvJOUNC%2B4EDyVIuDECIauG9w%2B%2BQ61guyotE4mK0mFuZvbrf%2Bi697Dmhkm%2BiPoyfqPEQpfTcamfuppSyQvrZXjGXkbXg6EyHad%2FXlhx8p2K%2FH3rqFdC15jaXhDXRqwLjghn4F4iQvF2wn1fQGHph5HAB9VYCpuOhOhTFkj2nOCEVUiy3zatx1UPls4mTwFfkrbzgph47GjlSpMQwKDrfLwpiRU1Lted%2FXqksiA5DzmB7CdOHflL76uA%2FwaCXPlM7h6TpPjfRucsBv80%2BOCUxBAiy4JQ3Qflat3iJBF1FJJcB7Djsa9vyu7akmAqnBBgtZWn1OvX2lJ0ixutMlU%2FG9jezHatQh%2FRhT6d%2Be0mE2d3%2BSubQ4SRd%2FDVGagal%2BC8xudf4HQT%2F3iDCnXzSB%2F%2BWl0%2FYVZ5kDJ36LZZk8fwE3eZxvKaX0OdGLODutqwV1ZUOXbVpZHAZGYrOKgYCjJyCjHcDJm9oOQ7jEAnagRS8a3jIVW3OvCl9xLeApCurAzOecczeX1OxXLlUobY05kKQPqfJY3cJUwUaMMa3pcIGOqUBZwTE3GVct9%2BHAkNlSLNA5KP7idkZq%2FbRyT9fi9fQL5L7ya7i8LKHYX0qJHt%2B7IUjC2zIY8h%2B1ufpYf4jgqf%2B3tbpjwsAfSKvpv95HcmU1nck1DJTTqmWdHoRM5dAT4Aj9MxgLaOCWgYyMSUBcOOLnmKPdo7RePup5n4JtGBNdAQJBzjJktCiFvAHr70ip%2BtQD4Cniz%2BA80Iq%2FmMmqbMMqF89i8YW&X-Amz-Signature=150f63dc123f362a753e8f5a9d0d4e432bfc5bf4d1256132a6af7beaa65d1047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN4WHQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6tjsfi8vviGE05ShtOt9BnJalrGkTlAOgxx3GfbyIgIgLEc5V5x73iL29lMMP6nrf8I%2F1%2BakDCVCBegSVqJ8ogAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoThBYu5EaMB0M9JircA5K7HiisqRTba2aJJf9UCwHol9nLEND2J9ujSJNTtjErrVG7RMegTqpvMuza47RyWcmDVCb3HPEk1%2BFtsMZhLd3nDR2BYpvJOUNC%2B4EDyVIuDECIauG9w%2B%2BQ61guyotE4mK0mFuZvbrf%2Bi697Dmhkm%2BiPoyfqPEQpfTcamfuppSyQvrZXjGXkbXg6EyHad%2FXlhx8p2K%2FH3rqFdC15jaXhDXRqwLjghn4F4iQvF2wn1fQGHph5HAB9VYCpuOhOhTFkj2nOCEVUiy3zatx1UPls4mTwFfkrbzgph47GjlSpMQwKDrfLwpiRU1Lted%2FXqksiA5DzmB7CdOHflL76uA%2FwaCXPlM7h6TpPjfRucsBv80%2BOCUxBAiy4JQ3Qflat3iJBF1FJJcB7Djsa9vyu7akmAqnBBgtZWn1OvX2lJ0ixutMlU%2FG9jezHatQh%2FRhT6d%2Be0mE2d3%2BSubQ4SRd%2FDVGagal%2BC8xudf4HQT%2F3iDCnXzSB%2F%2BWl0%2FYVZ5kDJ36LZZk8fwE3eZxvKaX0OdGLODutqwV1ZUOXbVpZHAZGYrOKgYCjJyCjHcDJm9oOQ7jEAnagRS8a3jIVW3OvCl9xLeApCurAzOecczeX1OxXLlUobY05kKQPqfJY3cJUwUaMMa3pcIGOqUBZwTE3GVct9%2BHAkNlSLNA5KP7idkZq%2FbRyT9fi9fQL5L7ya7i8LKHYX0qJHt%2B7IUjC2zIY8h%2B1ufpYf4jgqf%2B3tbpjwsAfSKvpv95HcmU1nck1DJTTqmWdHoRM5dAT4Aj9MxgLaOCWgYyMSUBcOOLnmKPdo7RePup5n4JtGBNdAQJBzjJktCiFvAHr70ip%2BtQD4Cniz%2BA80Iq%2FmMmqbMMqF89i8YW&X-Amz-Signature=13ab4cbf0eec9a2c3a4e9fa44f23cb1c7ad156da7d8aa754f1f5a3538fbd03ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN4WHQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6tjsfi8vviGE05ShtOt9BnJalrGkTlAOgxx3GfbyIgIgLEc5V5x73iL29lMMP6nrf8I%2F1%2BakDCVCBegSVqJ8ogAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoThBYu5EaMB0M9JircA5K7HiisqRTba2aJJf9UCwHol9nLEND2J9ujSJNTtjErrVG7RMegTqpvMuza47RyWcmDVCb3HPEk1%2BFtsMZhLd3nDR2BYpvJOUNC%2B4EDyVIuDECIauG9w%2B%2BQ61guyotE4mK0mFuZvbrf%2Bi697Dmhkm%2BiPoyfqPEQpfTcamfuppSyQvrZXjGXkbXg6EyHad%2FXlhx8p2K%2FH3rqFdC15jaXhDXRqwLjghn4F4iQvF2wn1fQGHph5HAB9VYCpuOhOhTFkj2nOCEVUiy3zatx1UPls4mTwFfkrbzgph47GjlSpMQwKDrfLwpiRU1Lted%2FXqksiA5DzmB7CdOHflL76uA%2FwaCXPlM7h6TpPjfRucsBv80%2BOCUxBAiy4JQ3Qflat3iJBF1FJJcB7Djsa9vyu7akmAqnBBgtZWn1OvX2lJ0ixutMlU%2FG9jezHatQh%2FRhT6d%2Be0mE2d3%2BSubQ4SRd%2FDVGagal%2BC8xudf4HQT%2F3iDCnXzSB%2F%2BWl0%2FYVZ5kDJ36LZZk8fwE3eZxvKaX0OdGLODutqwV1ZUOXbVpZHAZGYrOKgYCjJyCjHcDJm9oOQ7jEAnagRS8a3jIVW3OvCl9xLeApCurAzOecczeX1OxXLlUobY05kKQPqfJY3cJUwUaMMa3pcIGOqUBZwTE3GVct9%2BHAkNlSLNA5KP7idkZq%2FbRyT9fi9fQL5L7ya7i8LKHYX0qJHt%2B7IUjC2zIY8h%2B1ufpYf4jgqf%2B3tbpjwsAfSKvpv95HcmU1nck1DJTTqmWdHoRM5dAT4Aj9MxgLaOCWgYyMSUBcOOLnmKPdo7RePup5n4JtGBNdAQJBzjJktCiFvAHr70ip%2BtQD4Cniz%2BA80Iq%2FmMmqbMMqF89i8YW&X-Amz-Signature=17abaca40cdb6b5de2df38d2fcb0486619c38f257133d505a8319677560d62bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
