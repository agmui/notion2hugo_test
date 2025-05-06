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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLFVASW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYFfrrQSsHaUXssOnOfrsSbwVihRWSuoQttgbRtCJXBAiBf3SL1e%2BAUIgtFBoal9Pgwokr3It7oi%2Bhmat8PlqlQ%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6CyRBO2TJjGwAHHsKtwDzjhxmZWl5N5fgMJ79lZW%2FZFu44HbnuRw898xfooOtT30bu8j9qTeUO7qo2FPRh5T5ZS5TYIkVFqLzv2gdguknu0bJeyDunAzkcnhw8YmbbAHkXUAGMziH1QjECoEI%2F1EPvFHWyIXSUPs14RgYnqhs8vSoy4lp%2FXPTv8YJFKJ0vW7tV%2FZ14V8FdhN%2BfTq4L%2BtOhCo7QfwcF2Umzvvv7C11OQ8AE0kskusx%2B4100zJPBdK8c%2FfoQS06MsBDCxobVps%2FCQo21s3aeSUiysq5LuHM9QWD6St0232sqJqa9lPguOUuEptijESP0VWllfOeANrtorejiRtmbSbfgg5mdLqhoMRL0vv4p%2BUSBk%2FERW1eai1vdmvvlIuhdS%2FTUEGuAeGBU%2B8Drhel%2B0tdwd9ZlNB14FdrtQap9uKE2RYJDklhWCJHJzAatJwbLU%2BgzNRbdm8VzUBhrBhLIsVBYDdamuQCMPEtIFNi8matFG3pqqRaLzQzxpPkTWfGZmCY7A8CUVA8ZiSMEEXFlOzz1ld08qgI%2FpsuQq3GyOLJxFlzMjYqYL%2BhRaDNh9925PBBuIyeLPH9qhTDjxkGvDpO%2BlSYtSOST9RdHv8CShaV6W77QuR0CM7PEGEWaJaUDai79Uw9pfowAY6pgH6SWz69Vcsq9hBzOuRtEvuiSbaG0FCluZ4n6PxQj7DJO0dPD3Ehzjc4KmS%2FcJLdv2qIMUy8PSiUNbFsCNpH4B3YnYR%2BwqYSwa%2FlUlZRpfQ%2Brr1lo6Vs%2F9NXlw3c9tZ%2Big2rGlRjuWWpir7bpTVLfn4rEpqY37DJJt2rSAE286sHh7ERZrcu1NoZVvQoXXWuc51dsb1nXYp1HZonoKOd5EAf%2BsmPbRE&X-Amz-Signature=1ef5c2147050ee2b99ecb9204a65771c8e47e76a7996196b16bd51f7004d6b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLFVASW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYFfrrQSsHaUXssOnOfrsSbwVihRWSuoQttgbRtCJXBAiBf3SL1e%2BAUIgtFBoal9Pgwokr3It7oi%2Bhmat8PlqlQ%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6CyRBO2TJjGwAHHsKtwDzjhxmZWl5N5fgMJ79lZW%2FZFu44HbnuRw898xfooOtT30bu8j9qTeUO7qo2FPRh5T5ZS5TYIkVFqLzv2gdguknu0bJeyDunAzkcnhw8YmbbAHkXUAGMziH1QjECoEI%2F1EPvFHWyIXSUPs14RgYnqhs8vSoy4lp%2FXPTv8YJFKJ0vW7tV%2FZ14V8FdhN%2BfTq4L%2BtOhCo7QfwcF2Umzvvv7C11OQ8AE0kskusx%2B4100zJPBdK8c%2FfoQS06MsBDCxobVps%2FCQo21s3aeSUiysq5LuHM9QWD6St0232sqJqa9lPguOUuEptijESP0VWllfOeANrtorejiRtmbSbfgg5mdLqhoMRL0vv4p%2BUSBk%2FERW1eai1vdmvvlIuhdS%2FTUEGuAeGBU%2B8Drhel%2B0tdwd9ZlNB14FdrtQap9uKE2RYJDklhWCJHJzAatJwbLU%2BgzNRbdm8VzUBhrBhLIsVBYDdamuQCMPEtIFNi8matFG3pqqRaLzQzxpPkTWfGZmCY7A8CUVA8ZiSMEEXFlOzz1ld08qgI%2FpsuQq3GyOLJxFlzMjYqYL%2BhRaDNh9925PBBuIyeLPH9qhTDjxkGvDpO%2BlSYtSOST9RdHv8CShaV6W77QuR0CM7PEGEWaJaUDai79Uw9pfowAY6pgH6SWz69Vcsq9hBzOuRtEvuiSbaG0FCluZ4n6PxQj7DJO0dPD3Ehzjc4KmS%2FcJLdv2qIMUy8PSiUNbFsCNpH4B3YnYR%2BwqYSwa%2FlUlZRpfQ%2Brr1lo6Vs%2F9NXlw3c9tZ%2Big2rGlRjuWWpir7bpTVLfn4rEpqY37DJJt2rSAE286sHh7ERZrcu1NoZVvQoXXWuc51dsb1nXYp1HZonoKOd5EAf%2BsmPbRE&X-Amz-Signature=73ff60d6473a3433d38b0a8a557e82d0279fb1ae5b1d4639b11fd9eb5fd84a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLFVASW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYFfrrQSsHaUXssOnOfrsSbwVihRWSuoQttgbRtCJXBAiBf3SL1e%2BAUIgtFBoal9Pgwokr3It7oi%2Bhmat8PlqlQ%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6CyRBO2TJjGwAHHsKtwDzjhxmZWl5N5fgMJ79lZW%2FZFu44HbnuRw898xfooOtT30bu8j9qTeUO7qo2FPRh5T5ZS5TYIkVFqLzv2gdguknu0bJeyDunAzkcnhw8YmbbAHkXUAGMziH1QjECoEI%2F1EPvFHWyIXSUPs14RgYnqhs8vSoy4lp%2FXPTv8YJFKJ0vW7tV%2FZ14V8FdhN%2BfTq4L%2BtOhCo7QfwcF2Umzvvv7C11OQ8AE0kskusx%2B4100zJPBdK8c%2FfoQS06MsBDCxobVps%2FCQo21s3aeSUiysq5LuHM9QWD6St0232sqJqa9lPguOUuEptijESP0VWllfOeANrtorejiRtmbSbfgg5mdLqhoMRL0vv4p%2BUSBk%2FERW1eai1vdmvvlIuhdS%2FTUEGuAeGBU%2B8Drhel%2B0tdwd9ZlNB14FdrtQap9uKE2RYJDklhWCJHJzAatJwbLU%2BgzNRbdm8VzUBhrBhLIsVBYDdamuQCMPEtIFNi8matFG3pqqRaLzQzxpPkTWfGZmCY7A8CUVA8ZiSMEEXFlOzz1ld08qgI%2FpsuQq3GyOLJxFlzMjYqYL%2BhRaDNh9925PBBuIyeLPH9qhTDjxkGvDpO%2BlSYtSOST9RdHv8CShaV6W77QuR0CM7PEGEWaJaUDai79Uw9pfowAY6pgH6SWz69Vcsq9hBzOuRtEvuiSbaG0FCluZ4n6PxQj7DJO0dPD3Ehzjc4KmS%2FcJLdv2qIMUy8PSiUNbFsCNpH4B3YnYR%2BwqYSwa%2FlUlZRpfQ%2Brr1lo6Vs%2F9NXlw3c9tZ%2Big2rGlRjuWWpir7bpTVLfn4rEpqY37DJJt2rSAE286sHh7ERZrcu1NoZVvQoXXWuc51dsb1nXYp1HZonoKOd5EAf%2BsmPbRE&X-Amz-Signature=b0f3d8cb01dd92f6bc3a0247bfda4403343a0240379d25ce00735f451ae8e01c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLFVASW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYFfrrQSsHaUXssOnOfrsSbwVihRWSuoQttgbRtCJXBAiBf3SL1e%2BAUIgtFBoal9Pgwokr3It7oi%2Bhmat8PlqlQ%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6CyRBO2TJjGwAHHsKtwDzjhxmZWl5N5fgMJ79lZW%2FZFu44HbnuRw898xfooOtT30bu8j9qTeUO7qo2FPRh5T5ZS5TYIkVFqLzv2gdguknu0bJeyDunAzkcnhw8YmbbAHkXUAGMziH1QjECoEI%2F1EPvFHWyIXSUPs14RgYnqhs8vSoy4lp%2FXPTv8YJFKJ0vW7tV%2FZ14V8FdhN%2BfTq4L%2BtOhCo7QfwcF2Umzvvv7C11OQ8AE0kskusx%2B4100zJPBdK8c%2FfoQS06MsBDCxobVps%2FCQo21s3aeSUiysq5LuHM9QWD6St0232sqJqa9lPguOUuEptijESP0VWllfOeANrtorejiRtmbSbfgg5mdLqhoMRL0vv4p%2BUSBk%2FERW1eai1vdmvvlIuhdS%2FTUEGuAeGBU%2B8Drhel%2B0tdwd9ZlNB14FdrtQap9uKE2RYJDklhWCJHJzAatJwbLU%2BgzNRbdm8VzUBhrBhLIsVBYDdamuQCMPEtIFNi8matFG3pqqRaLzQzxpPkTWfGZmCY7A8CUVA8ZiSMEEXFlOzz1ld08qgI%2FpsuQq3GyOLJxFlzMjYqYL%2BhRaDNh9925PBBuIyeLPH9qhTDjxkGvDpO%2BlSYtSOST9RdHv8CShaV6W77QuR0CM7PEGEWaJaUDai79Uw9pfowAY6pgH6SWz69Vcsq9hBzOuRtEvuiSbaG0FCluZ4n6PxQj7DJO0dPD3Ehzjc4KmS%2FcJLdv2qIMUy8PSiUNbFsCNpH4B3YnYR%2BwqYSwa%2FlUlZRpfQ%2Brr1lo6Vs%2F9NXlw3c9tZ%2Big2rGlRjuWWpir7bpTVLfn4rEpqY37DJJt2rSAE286sHh7ERZrcu1NoZVvQoXXWuc51dsb1nXYp1HZonoKOd5EAf%2BsmPbRE&X-Amz-Signature=4325f14053e4274954506156f2036b7b3061d3d2f3d7b013c2e3a0762d6bf0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLFVASW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYFfrrQSsHaUXssOnOfrsSbwVihRWSuoQttgbRtCJXBAiBf3SL1e%2BAUIgtFBoal9Pgwokr3It7oi%2Bhmat8PlqlQ%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6CyRBO2TJjGwAHHsKtwDzjhxmZWl5N5fgMJ79lZW%2FZFu44HbnuRw898xfooOtT30bu8j9qTeUO7qo2FPRh5T5ZS5TYIkVFqLzv2gdguknu0bJeyDunAzkcnhw8YmbbAHkXUAGMziH1QjECoEI%2F1EPvFHWyIXSUPs14RgYnqhs8vSoy4lp%2FXPTv8YJFKJ0vW7tV%2FZ14V8FdhN%2BfTq4L%2BtOhCo7QfwcF2Umzvvv7C11OQ8AE0kskusx%2B4100zJPBdK8c%2FfoQS06MsBDCxobVps%2FCQo21s3aeSUiysq5LuHM9QWD6St0232sqJqa9lPguOUuEptijESP0VWllfOeANrtorejiRtmbSbfgg5mdLqhoMRL0vv4p%2BUSBk%2FERW1eai1vdmvvlIuhdS%2FTUEGuAeGBU%2B8Drhel%2B0tdwd9ZlNB14FdrtQap9uKE2RYJDklhWCJHJzAatJwbLU%2BgzNRbdm8VzUBhrBhLIsVBYDdamuQCMPEtIFNi8matFG3pqqRaLzQzxpPkTWfGZmCY7A8CUVA8ZiSMEEXFlOzz1ld08qgI%2FpsuQq3GyOLJxFlzMjYqYL%2BhRaDNh9925PBBuIyeLPH9qhTDjxkGvDpO%2BlSYtSOST9RdHv8CShaV6W77QuR0CM7PEGEWaJaUDai79Uw9pfowAY6pgH6SWz69Vcsq9hBzOuRtEvuiSbaG0FCluZ4n6PxQj7DJO0dPD3Ehzjc4KmS%2FcJLdv2qIMUy8PSiUNbFsCNpH4B3YnYR%2BwqYSwa%2FlUlZRpfQ%2Brr1lo6Vs%2F9NXlw3c9tZ%2Big2rGlRjuWWpir7bpTVLfn4rEpqY37DJJt2rSAE286sHh7ERZrcu1NoZVvQoXXWuc51dsb1nXYp1HZonoKOd5EAf%2BsmPbRE&X-Amz-Signature=35705f4f3feb45d1957ef3687575f52b78b79ce9e782f7f9096143494a4044f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLFVASW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYFfrrQSsHaUXssOnOfrsSbwVihRWSuoQttgbRtCJXBAiBf3SL1e%2BAUIgtFBoal9Pgwokr3It7oi%2Bhmat8PlqlQ%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6CyRBO2TJjGwAHHsKtwDzjhxmZWl5N5fgMJ79lZW%2FZFu44HbnuRw898xfooOtT30bu8j9qTeUO7qo2FPRh5T5ZS5TYIkVFqLzv2gdguknu0bJeyDunAzkcnhw8YmbbAHkXUAGMziH1QjECoEI%2F1EPvFHWyIXSUPs14RgYnqhs8vSoy4lp%2FXPTv8YJFKJ0vW7tV%2FZ14V8FdhN%2BfTq4L%2BtOhCo7QfwcF2Umzvvv7C11OQ8AE0kskusx%2B4100zJPBdK8c%2FfoQS06MsBDCxobVps%2FCQo21s3aeSUiysq5LuHM9QWD6St0232sqJqa9lPguOUuEptijESP0VWllfOeANrtorejiRtmbSbfgg5mdLqhoMRL0vv4p%2BUSBk%2FERW1eai1vdmvvlIuhdS%2FTUEGuAeGBU%2B8Drhel%2B0tdwd9ZlNB14FdrtQap9uKE2RYJDklhWCJHJzAatJwbLU%2BgzNRbdm8VzUBhrBhLIsVBYDdamuQCMPEtIFNi8matFG3pqqRaLzQzxpPkTWfGZmCY7A8CUVA8ZiSMEEXFlOzz1ld08qgI%2FpsuQq3GyOLJxFlzMjYqYL%2BhRaDNh9925PBBuIyeLPH9qhTDjxkGvDpO%2BlSYtSOST9RdHv8CShaV6W77QuR0CM7PEGEWaJaUDai79Uw9pfowAY6pgH6SWz69Vcsq9hBzOuRtEvuiSbaG0FCluZ4n6PxQj7DJO0dPD3Ehzjc4KmS%2FcJLdv2qIMUy8PSiUNbFsCNpH4B3YnYR%2BwqYSwa%2FlUlZRpfQ%2Brr1lo6Vs%2F9NXlw3c9tZ%2Big2rGlRjuWWpir7bpTVLfn4rEpqY37DJJt2rSAE286sHh7ERZrcu1NoZVvQoXXWuc51dsb1nXYp1HZonoKOd5EAf%2BsmPbRE&X-Amz-Signature=689be00e03435adb683c3478f7f95da682857531957dd82403cd949110e92eea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLFVASW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYFfrrQSsHaUXssOnOfrsSbwVihRWSuoQttgbRtCJXBAiBf3SL1e%2BAUIgtFBoal9Pgwokr3It7oi%2Bhmat8PlqlQ%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM6CyRBO2TJjGwAHHsKtwDzjhxmZWl5N5fgMJ79lZW%2FZFu44HbnuRw898xfooOtT30bu8j9qTeUO7qo2FPRh5T5ZS5TYIkVFqLzv2gdguknu0bJeyDunAzkcnhw8YmbbAHkXUAGMziH1QjECoEI%2F1EPvFHWyIXSUPs14RgYnqhs8vSoy4lp%2FXPTv8YJFKJ0vW7tV%2FZ14V8FdhN%2BfTq4L%2BtOhCo7QfwcF2Umzvvv7C11OQ8AE0kskusx%2B4100zJPBdK8c%2FfoQS06MsBDCxobVps%2FCQo21s3aeSUiysq5LuHM9QWD6St0232sqJqa9lPguOUuEptijESP0VWllfOeANrtorejiRtmbSbfgg5mdLqhoMRL0vv4p%2BUSBk%2FERW1eai1vdmvvlIuhdS%2FTUEGuAeGBU%2B8Drhel%2B0tdwd9ZlNB14FdrtQap9uKE2RYJDklhWCJHJzAatJwbLU%2BgzNRbdm8VzUBhrBhLIsVBYDdamuQCMPEtIFNi8matFG3pqqRaLzQzxpPkTWfGZmCY7A8CUVA8ZiSMEEXFlOzz1ld08qgI%2FpsuQq3GyOLJxFlzMjYqYL%2BhRaDNh9925PBBuIyeLPH9qhTDjxkGvDpO%2BlSYtSOST9RdHv8CShaV6W77QuR0CM7PEGEWaJaUDai79Uw9pfowAY6pgH6SWz69Vcsq9hBzOuRtEvuiSbaG0FCluZ4n6PxQj7DJO0dPD3Ehzjc4KmS%2FcJLdv2qIMUy8PSiUNbFsCNpH4B3YnYR%2BwqYSwa%2FlUlZRpfQ%2Brr1lo6Vs%2F9NXlw3c9tZ%2Big2rGlRjuWWpir7bpTVLfn4rEpqY37DJJt2rSAE286sHh7ERZrcu1NoZVvQoXXWuc51dsb1nXYp1HZonoKOd5EAf%2BsmPbRE&X-Amz-Signature=93813cd58f064dfca0f44c9e8f4ce5fe14550855caca8be3b3c2759fbbc4c72a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
