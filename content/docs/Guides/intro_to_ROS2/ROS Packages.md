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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HUFENO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2BWO3DsoRZeTwTgTaONxVHv5pKlwWc8%2F2PEDSpaedKAiEA0rKHbFPvfthCyePGdUc8X7mbxaeJui%2BWpmESH%2FjlR6Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNfEwdyMrH8ZTMTaoyrcA5qx76yqZzYoJ%2B7abcbwom3dAhdyQ8%2Bj%2FBpPA71C%2Bdi1hE5GOAv7DPS33NXRiSJJ1%2BJjLyNONSptflqtCVsFwzMdZUUCzl7Y1lYt2IpZmJpT%2BXqo044B4nTjDygiSoj6FR5q%2BmW0VTK0DULU5O%2ByIHr%2BZvNEGmLXISL4VgImUjzVPYI3qThDJZxKYFmxqN3ISrPpXtTPw6B2vDhqKTwwOJHf93pZxQY7Zu9slN3%2F9CpETdDcVXCqu5fFKp6LmSR%2FX6eI2YGIrOx4ZAdi7u0dQdMSPsdhci2TG2igZSeMsVYBj1eeRPWhwX3%2FtRWmSZeSO9T2Wh7k6rLLJyt%2BSssHwYKUj5Yio%2F%2FzMOHguKiSFS9dlm2uYaK6bhy8hv3OLrdJI2zU4Ml%2FrDd2qRLpiY5u8yVMXOo7F3pMfU2uFukdlXb5ssB50cl%2B7nZH%2FaGMUsmgQCriHoU7njYK7U4rAreq1kIegpnQ46e5mX1cWL56Tg1gl%2Bu2H8zkKnFHSwnVx%2FjIqkDy7amr96ent8EIJJIL7fwaG%2FM8JnQbwIuTCGgaRF0nRDfoewlY5Lb3BpYfZLzDmM2klNoaTF2X5FBrlQgrC15Uo8YH%2F82oCVzJBnv6H13ba3qIbaEiixBbzuysMNPK2b4GOqUB7pZ2a5XAbgQmY6zxwrFWZkz6ogVTewTNO1cBgqYR9S96h0RbeWqbDbuOh%2F5csYUrTZgROvkQQDSVADyC%2Bx7XnYQsB284FtnVt%2BkSiGx7H0%2B%2B60%2BgTDj%2FTJayr70TOyk3PFy7eQIc3kLa6AHYC6ZmGwuzNbNkMIFUEKCuQL11C1bl4%2FVTE5j6DK4YRPYiXbTMRHzuZlLWyVFnJVQ0XjAI13j5ukk0&X-Amz-Signature=3d7630e6a1f3c39d491746fd3b18b252ea9f6beca2f6b31f5534e227d25d22be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HUFENO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2BWO3DsoRZeTwTgTaONxVHv5pKlwWc8%2F2PEDSpaedKAiEA0rKHbFPvfthCyePGdUc8X7mbxaeJui%2BWpmESH%2FjlR6Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNfEwdyMrH8ZTMTaoyrcA5qx76yqZzYoJ%2B7abcbwom3dAhdyQ8%2Bj%2FBpPA71C%2Bdi1hE5GOAv7DPS33NXRiSJJ1%2BJjLyNONSptflqtCVsFwzMdZUUCzl7Y1lYt2IpZmJpT%2BXqo044B4nTjDygiSoj6FR5q%2BmW0VTK0DULU5O%2ByIHr%2BZvNEGmLXISL4VgImUjzVPYI3qThDJZxKYFmxqN3ISrPpXtTPw6B2vDhqKTwwOJHf93pZxQY7Zu9slN3%2F9CpETdDcVXCqu5fFKp6LmSR%2FX6eI2YGIrOx4ZAdi7u0dQdMSPsdhci2TG2igZSeMsVYBj1eeRPWhwX3%2FtRWmSZeSO9T2Wh7k6rLLJyt%2BSssHwYKUj5Yio%2F%2FzMOHguKiSFS9dlm2uYaK6bhy8hv3OLrdJI2zU4Ml%2FrDd2qRLpiY5u8yVMXOo7F3pMfU2uFukdlXb5ssB50cl%2B7nZH%2FaGMUsmgQCriHoU7njYK7U4rAreq1kIegpnQ46e5mX1cWL56Tg1gl%2Bu2H8zkKnFHSwnVx%2FjIqkDy7amr96ent8EIJJIL7fwaG%2FM8JnQbwIuTCGgaRF0nRDfoewlY5Lb3BpYfZLzDmM2klNoaTF2X5FBrlQgrC15Uo8YH%2F82oCVzJBnv6H13ba3qIbaEiixBbzuysMNPK2b4GOqUB7pZ2a5XAbgQmY6zxwrFWZkz6ogVTewTNO1cBgqYR9S96h0RbeWqbDbuOh%2F5csYUrTZgROvkQQDSVADyC%2Bx7XnYQsB284FtnVt%2BkSiGx7H0%2B%2B60%2BgTDj%2FTJayr70TOyk3PFy7eQIc3kLa6AHYC6ZmGwuzNbNkMIFUEKCuQL11C1bl4%2FVTE5j6DK4YRPYiXbTMRHzuZlLWyVFnJVQ0XjAI13j5ukk0&X-Amz-Signature=0072269db1e81cabd99992e6ae7dcd9ee961a29617ea0a2fd4fee81a388ac417&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HUFENO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2BWO3DsoRZeTwTgTaONxVHv5pKlwWc8%2F2PEDSpaedKAiEA0rKHbFPvfthCyePGdUc8X7mbxaeJui%2BWpmESH%2FjlR6Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNfEwdyMrH8ZTMTaoyrcA5qx76yqZzYoJ%2B7abcbwom3dAhdyQ8%2Bj%2FBpPA71C%2Bdi1hE5GOAv7DPS33NXRiSJJ1%2BJjLyNONSptflqtCVsFwzMdZUUCzl7Y1lYt2IpZmJpT%2BXqo044B4nTjDygiSoj6FR5q%2BmW0VTK0DULU5O%2ByIHr%2BZvNEGmLXISL4VgImUjzVPYI3qThDJZxKYFmxqN3ISrPpXtTPw6B2vDhqKTwwOJHf93pZxQY7Zu9slN3%2F9CpETdDcVXCqu5fFKp6LmSR%2FX6eI2YGIrOx4ZAdi7u0dQdMSPsdhci2TG2igZSeMsVYBj1eeRPWhwX3%2FtRWmSZeSO9T2Wh7k6rLLJyt%2BSssHwYKUj5Yio%2F%2FzMOHguKiSFS9dlm2uYaK6bhy8hv3OLrdJI2zU4Ml%2FrDd2qRLpiY5u8yVMXOo7F3pMfU2uFukdlXb5ssB50cl%2B7nZH%2FaGMUsmgQCriHoU7njYK7U4rAreq1kIegpnQ46e5mX1cWL56Tg1gl%2Bu2H8zkKnFHSwnVx%2FjIqkDy7amr96ent8EIJJIL7fwaG%2FM8JnQbwIuTCGgaRF0nRDfoewlY5Lb3BpYfZLzDmM2klNoaTF2X5FBrlQgrC15Uo8YH%2F82oCVzJBnv6H13ba3qIbaEiixBbzuysMNPK2b4GOqUB7pZ2a5XAbgQmY6zxwrFWZkz6ogVTewTNO1cBgqYR9S96h0RbeWqbDbuOh%2F5csYUrTZgROvkQQDSVADyC%2Bx7XnYQsB284FtnVt%2BkSiGx7H0%2B%2B60%2BgTDj%2FTJayr70TOyk3PFy7eQIc3kLa6AHYC6ZmGwuzNbNkMIFUEKCuQL11C1bl4%2FVTE5j6DK4YRPYiXbTMRHzuZlLWyVFnJVQ0XjAI13j5ukk0&X-Amz-Signature=3fd0f1192ccbe28638b20ebc16857271e5e7d8efc10985f488c21a6ef9be3116&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HUFENO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2BWO3DsoRZeTwTgTaONxVHv5pKlwWc8%2F2PEDSpaedKAiEA0rKHbFPvfthCyePGdUc8X7mbxaeJui%2BWpmESH%2FjlR6Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNfEwdyMrH8ZTMTaoyrcA5qx76yqZzYoJ%2B7abcbwom3dAhdyQ8%2Bj%2FBpPA71C%2Bdi1hE5GOAv7DPS33NXRiSJJ1%2BJjLyNONSptflqtCVsFwzMdZUUCzl7Y1lYt2IpZmJpT%2BXqo044B4nTjDygiSoj6FR5q%2BmW0VTK0DULU5O%2ByIHr%2BZvNEGmLXISL4VgImUjzVPYI3qThDJZxKYFmxqN3ISrPpXtTPw6B2vDhqKTwwOJHf93pZxQY7Zu9slN3%2F9CpETdDcVXCqu5fFKp6LmSR%2FX6eI2YGIrOx4ZAdi7u0dQdMSPsdhci2TG2igZSeMsVYBj1eeRPWhwX3%2FtRWmSZeSO9T2Wh7k6rLLJyt%2BSssHwYKUj5Yio%2F%2FzMOHguKiSFS9dlm2uYaK6bhy8hv3OLrdJI2zU4Ml%2FrDd2qRLpiY5u8yVMXOo7F3pMfU2uFukdlXb5ssB50cl%2B7nZH%2FaGMUsmgQCriHoU7njYK7U4rAreq1kIegpnQ46e5mX1cWL56Tg1gl%2Bu2H8zkKnFHSwnVx%2FjIqkDy7amr96ent8EIJJIL7fwaG%2FM8JnQbwIuTCGgaRF0nRDfoewlY5Lb3BpYfZLzDmM2klNoaTF2X5FBrlQgrC15Uo8YH%2F82oCVzJBnv6H13ba3qIbaEiixBbzuysMNPK2b4GOqUB7pZ2a5XAbgQmY6zxwrFWZkz6ogVTewTNO1cBgqYR9S96h0RbeWqbDbuOh%2F5csYUrTZgROvkQQDSVADyC%2Bx7XnYQsB284FtnVt%2BkSiGx7H0%2B%2B60%2BgTDj%2FTJayr70TOyk3PFy7eQIc3kLa6AHYC6ZmGwuzNbNkMIFUEKCuQL11C1bl4%2FVTE5j6DK4YRPYiXbTMRHzuZlLWyVFnJVQ0XjAI13j5ukk0&X-Amz-Signature=c595275c93fce46dd966aea395c883c20a42a99ea453d99a51f7c8c5dea08b46&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HUFENO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2BWO3DsoRZeTwTgTaONxVHv5pKlwWc8%2F2PEDSpaedKAiEA0rKHbFPvfthCyePGdUc8X7mbxaeJui%2BWpmESH%2FjlR6Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNfEwdyMrH8ZTMTaoyrcA5qx76yqZzYoJ%2B7abcbwom3dAhdyQ8%2Bj%2FBpPA71C%2Bdi1hE5GOAv7DPS33NXRiSJJ1%2BJjLyNONSptflqtCVsFwzMdZUUCzl7Y1lYt2IpZmJpT%2BXqo044B4nTjDygiSoj6FR5q%2BmW0VTK0DULU5O%2ByIHr%2BZvNEGmLXISL4VgImUjzVPYI3qThDJZxKYFmxqN3ISrPpXtTPw6B2vDhqKTwwOJHf93pZxQY7Zu9slN3%2F9CpETdDcVXCqu5fFKp6LmSR%2FX6eI2YGIrOx4ZAdi7u0dQdMSPsdhci2TG2igZSeMsVYBj1eeRPWhwX3%2FtRWmSZeSO9T2Wh7k6rLLJyt%2BSssHwYKUj5Yio%2F%2FzMOHguKiSFS9dlm2uYaK6bhy8hv3OLrdJI2zU4Ml%2FrDd2qRLpiY5u8yVMXOo7F3pMfU2uFukdlXb5ssB50cl%2B7nZH%2FaGMUsmgQCriHoU7njYK7U4rAreq1kIegpnQ46e5mX1cWL56Tg1gl%2Bu2H8zkKnFHSwnVx%2FjIqkDy7amr96ent8EIJJIL7fwaG%2FM8JnQbwIuTCGgaRF0nRDfoewlY5Lb3BpYfZLzDmM2klNoaTF2X5FBrlQgrC15Uo8YH%2F82oCVzJBnv6H13ba3qIbaEiixBbzuysMNPK2b4GOqUB7pZ2a5XAbgQmY6zxwrFWZkz6ogVTewTNO1cBgqYR9S96h0RbeWqbDbuOh%2F5csYUrTZgROvkQQDSVADyC%2Bx7XnYQsB284FtnVt%2BkSiGx7H0%2B%2B60%2BgTDj%2FTJayr70TOyk3PFy7eQIc3kLa6AHYC6ZmGwuzNbNkMIFUEKCuQL11C1bl4%2FVTE5j6DK4YRPYiXbTMRHzuZlLWyVFnJVQ0XjAI13j5ukk0&X-Amz-Signature=221d76dc0ea237a10584dc19277298f7ed9bd7a6039cb03523a557e5ff1d7de0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HUFENO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2BWO3DsoRZeTwTgTaONxVHv5pKlwWc8%2F2PEDSpaedKAiEA0rKHbFPvfthCyePGdUc8X7mbxaeJui%2BWpmESH%2FjlR6Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNfEwdyMrH8ZTMTaoyrcA5qx76yqZzYoJ%2B7abcbwom3dAhdyQ8%2Bj%2FBpPA71C%2Bdi1hE5GOAv7DPS33NXRiSJJ1%2BJjLyNONSptflqtCVsFwzMdZUUCzl7Y1lYt2IpZmJpT%2BXqo044B4nTjDygiSoj6FR5q%2BmW0VTK0DULU5O%2ByIHr%2BZvNEGmLXISL4VgImUjzVPYI3qThDJZxKYFmxqN3ISrPpXtTPw6B2vDhqKTwwOJHf93pZxQY7Zu9slN3%2F9CpETdDcVXCqu5fFKp6LmSR%2FX6eI2YGIrOx4ZAdi7u0dQdMSPsdhci2TG2igZSeMsVYBj1eeRPWhwX3%2FtRWmSZeSO9T2Wh7k6rLLJyt%2BSssHwYKUj5Yio%2F%2FzMOHguKiSFS9dlm2uYaK6bhy8hv3OLrdJI2zU4Ml%2FrDd2qRLpiY5u8yVMXOo7F3pMfU2uFukdlXb5ssB50cl%2B7nZH%2FaGMUsmgQCriHoU7njYK7U4rAreq1kIegpnQ46e5mX1cWL56Tg1gl%2Bu2H8zkKnFHSwnVx%2FjIqkDy7amr96ent8EIJJIL7fwaG%2FM8JnQbwIuTCGgaRF0nRDfoewlY5Lb3BpYfZLzDmM2klNoaTF2X5FBrlQgrC15Uo8YH%2F82oCVzJBnv6H13ba3qIbaEiixBbzuysMNPK2b4GOqUB7pZ2a5XAbgQmY6zxwrFWZkz6ogVTewTNO1cBgqYR9S96h0RbeWqbDbuOh%2F5csYUrTZgROvkQQDSVADyC%2Bx7XnYQsB284FtnVt%2BkSiGx7H0%2B%2B60%2BgTDj%2FTJayr70TOyk3PFy7eQIc3kLa6AHYC6ZmGwuzNbNkMIFUEKCuQL11C1bl4%2FVTE5j6DK4YRPYiXbTMRHzuZlLWyVFnJVQ0XjAI13j5ukk0&X-Amz-Signature=e3b0c718edf8a3ef55f3a3fb57377a73a4c9c776fe00a8186110e234c32ccdf3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HUFENO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX%2BWO3DsoRZeTwTgTaONxVHv5pKlwWc8%2F2PEDSpaedKAiEA0rKHbFPvfthCyePGdUc8X7mbxaeJui%2BWpmESH%2FjlR6Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNfEwdyMrH8ZTMTaoyrcA5qx76yqZzYoJ%2B7abcbwom3dAhdyQ8%2Bj%2FBpPA71C%2Bdi1hE5GOAv7DPS33NXRiSJJ1%2BJjLyNONSptflqtCVsFwzMdZUUCzl7Y1lYt2IpZmJpT%2BXqo044B4nTjDygiSoj6FR5q%2BmW0VTK0DULU5O%2ByIHr%2BZvNEGmLXISL4VgImUjzVPYI3qThDJZxKYFmxqN3ISrPpXtTPw6B2vDhqKTwwOJHf93pZxQY7Zu9slN3%2F9CpETdDcVXCqu5fFKp6LmSR%2FX6eI2YGIrOx4ZAdi7u0dQdMSPsdhci2TG2igZSeMsVYBj1eeRPWhwX3%2FtRWmSZeSO9T2Wh7k6rLLJyt%2BSssHwYKUj5Yio%2F%2FzMOHguKiSFS9dlm2uYaK6bhy8hv3OLrdJI2zU4Ml%2FrDd2qRLpiY5u8yVMXOo7F3pMfU2uFukdlXb5ssB50cl%2B7nZH%2FaGMUsmgQCriHoU7njYK7U4rAreq1kIegpnQ46e5mX1cWL56Tg1gl%2Bu2H8zkKnFHSwnVx%2FjIqkDy7amr96ent8EIJJIL7fwaG%2FM8JnQbwIuTCGgaRF0nRDfoewlY5Lb3BpYfZLzDmM2klNoaTF2X5FBrlQgrC15Uo8YH%2F82oCVzJBnv6H13ba3qIbaEiixBbzuysMNPK2b4GOqUB7pZ2a5XAbgQmY6zxwrFWZkz6ogVTewTNO1cBgqYR9S96h0RbeWqbDbuOh%2F5csYUrTZgROvkQQDSVADyC%2Bx7XnYQsB284FtnVt%2BkSiGx7H0%2B%2B60%2BgTDj%2FTJayr70TOyk3PFy7eQIc3kLa6AHYC6ZmGwuzNbNkMIFUEKCuQL11C1bl4%2FVTE5j6DK4YRPYiXbTMRHzuZlLWyVFnJVQ0XjAI13j5ukk0&X-Amz-Signature=1ded5e1741f5dea2dbe59684e29535602d4a1a317416889db45ec8b2b041cf22&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
