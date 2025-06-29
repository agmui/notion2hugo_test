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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377UNXTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrv2Ps5YGDAZ1TwyURdfoc99%2B6ZD0NROgnOm%2FeEjqQ1AiAUjphPc2ZY5Nb5FQewpfyed25AYQ0HMJQQjW5Z9hrKwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe08jcP1axa4vsOj8KtwD0zx%2F8efjkRGmi33o6oko38GN3Oaf2kiec0wdltyBySqnJYbWolk624v7eMXjBEYx6pueuhUEL0pWbcX5bD9QJcgqZAZz2bEdI0BrilmhrN1%2FSaDSxH1YB2KVJpZJh50Jz1u385m5GT21JlRyvjC88F5x33T2Vc5uDPDS4HTKvuG%2ByAmRiP8Hv77jd249OBP7%2Ff2G4XGkH%2F75jpGVT4kgGAjLEp9nshDWw5ZyyLsnZHL5tm3loqM9tjakKBSCl9m34%2BKPCsj1CEhBwKF7s8bDpYruQu4gdDyJk77zVs3acOQXo5fryvNHwm2LJWu5yF9t7Bn3pRjNVIMj9yK6wmXtZFHosUWMNuj58AfY1inES9QwW1wYokwggfALd0OmnSyEiIKLYuY8%2BMfvTAFZubbjwE7xmvR3wv9iLPITG5tvH69ohWvK5upTvQ4dDWB5tzue%2FoIQZmnrbgk9T7S6EUEN3UGyN2RtgPYxeb6Fs3wDzBMGommOcI9i0Y50pgNnLASK%2Bj%2FCwaOAZFOg4%2Bepny%2FpIJpO83aDj%2B4FWgzXMDcdtmFpBx96PH5O%2BAKP5ydrkqleQEPjOhbWFye002t9yawzr2YPxVPm8QAXWv5%2BB99dMrOZcI3eLpYiybIaXLQwhfWAwwY6pgEoPGl%2FPgfYwTGJxI1PD2Wy9ZjCRbplhHYTPnDq8aejLLdy10TPnGEVf1PdwbTMCQW5vPJKiS0cD7qe%2BjYg4y6IMS%2BlJMjmYvVogiS%2FdlEz6nfi%2BBoevPKnTegvcvdcVvqB2EW4TClEnJsGda6sEi%2BlJ6pei5428h1E5SZhxcxiU8GyyQBiCA%2BW1ArelsjkqbqNrIov1lpK2OBhMctVmTCxYYkmGzzG&X-Amz-Signature=e87bfe6320794431263e29ae5bd72f3f1deaa08bb490faad6d3a33d01a0a4451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377UNXTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrv2Ps5YGDAZ1TwyURdfoc99%2B6ZD0NROgnOm%2FeEjqQ1AiAUjphPc2ZY5Nb5FQewpfyed25AYQ0HMJQQjW5Z9hrKwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe08jcP1axa4vsOj8KtwD0zx%2F8efjkRGmi33o6oko38GN3Oaf2kiec0wdltyBySqnJYbWolk624v7eMXjBEYx6pueuhUEL0pWbcX5bD9QJcgqZAZz2bEdI0BrilmhrN1%2FSaDSxH1YB2KVJpZJh50Jz1u385m5GT21JlRyvjC88F5x33T2Vc5uDPDS4HTKvuG%2ByAmRiP8Hv77jd249OBP7%2Ff2G4XGkH%2F75jpGVT4kgGAjLEp9nshDWw5ZyyLsnZHL5tm3loqM9tjakKBSCl9m34%2BKPCsj1CEhBwKF7s8bDpYruQu4gdDyJk77zVs3acOQXo5fryvNHwm2LJWu5yF9t7Bn3pRjNVIMj9yK6wmXtZFHosUWMNuj58AfY1inES9QwW1wYokwggfALd0OmnSyEiIKLYuY8%2BMfvTAFZubbjwE7xmvR3wv9iLPITG5tvH69ohWvK5upTvQ4dDWB5tzue%2FoIQZmnrbgk9T7S6EUEN3UGyN2RtgPYxeb6Fs3wDzBMGommOcI9i0Y50pgNnLASK%2Bj%2FCwaOAZFOg4%2Bepny%2FpIJpO83aDj%2B4FWgzXMDcdtmFpBx96PH5O%2BAKP5ydrkqleQEPjOhbWFye002t9yawzr2YPxVPm8QAXWv5%2BB99dMrOZcI3eLpYiybIaXLQwhfWAwwY6pgEoPGl%2FPgfYwTGJxI1PD2Wy9ZjCRbplhHYTPnDq8aejLLdy10TPnGEVf1PdwbTMCQW5vPJKiS0cD7qe%2BjYg4y6IMS%2BlJMjmYvVogiS%2FdlEz6nfi%2BBoevPKnTegvcvdcVvqB2EW4TClEnJsGda6sEi%2BlJ6pei5428h1E5SZhxcxiU8GyyQBiCA%2BW1ArelsjkqbqNrIov1lpK2OBhMctVmTCxYYkmGzzG&X-Amz-Signature=8cd2ad84db075e9009c71815044eb3d43cc98b4e0815bdd5ea04b346b76e0c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377UNXTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrv2Ps5YGDAZ1TwyURdfoc99%2B6ZD0NROgnOm%2FeEjqQ1AiAUjphPc2ZY5Nb5FQewpfyed25AYQ0HMJQQjW5Z9hrKwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe08jcP1axa4vsOj8KtwD0zx%2F8efjkRGmi33o6oko38GN3Oaf2kiec0wdltyBySqnJYbWolk624v7eMXjBEYx6pueuhUEL0pWbcX5bD9QJcgqZAZz2bEdI0BrilmhrN1%2FSaDSxH1YB2KVJpZJh50Jz1u385m5GT21JlRyvjC88F5x33T2Vc5uDPDS4HTKvuG%2ByAmRiP8Hv77jd249OBP7%2Ff2G4XGkH%2F75jpGVT4kgGAjLEp9nshDWw5ZyyLsnZHL5tm3loqM9tjakKBSCl9m34%2BKPCsj1CEhBwKF7s8bDpYruQu4gdDyJk77zVs3acOQXo5fryvNHwm2LJWu5yF9t7Bn3pRjNVIMj9yK6wmXtZFHosUWMNuj58AfY1inES9QwW1wYokwggfALd0OmnSyEiIKLYuY8%2BMfvTAFZubbjwE7xmvR3wv9iLPITG5tvH69ohWvK5upTvQ4dDWB5tzue%2FoIQZmnrbgk9T7S6EUEN3UGyN2RtgPYxeb6Fs3wDzBMGommOcI9i0Y50pgNnLASK%2Bj%2FCwaOAZFOg4%2Bepny%2FpIJpO83aDj%2B4FWgzXMDcdtmFpBx96PH5O%2BAKP5ydrkqleQEPjOhbWFye002t9yawzr2YPxVPm8QAXWv5%2BB99dMrOZcI3eLpYiybIaXLQwhfWAwwY6pgEoPGl%2FPgfYwTGJxI1PD2Wy9ZjCRbplhHYTPnDq8aejLLdy10TPnGEVf1PdwbTMCQW5vPJKiS0cD7qe%2BjYg4y6IMS%2BlJMjmYvVogiS%2FdlEz6nfi%2BBoevPKnTegvcvdcVvqB2EW4TClEnJsGda6sEi%2BlJ6pei5428h1E5SZhxcxiU8GyyQBiCA%2BW1ArelsjkqbqNrIov1lpK2OBhMctVmTCxYYkmGzzG&X-Amz-Signature=1bdba3861cb0f3da61acb190fddd87b734c00baf61b64a52eee1ea062918286f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377UNXTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrv2Ps5YGDAZ1TwyURdfoc99%2B6ZD0NROgnOm%2FeEjqQ1AiAUjphPc2ZY5Nb5FQewpfyed25AYQ0HMJQQjW5Z9hrKwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe08jcP1axa4vsOj8KtwD0zx%2F8efjkRGmi33o6oko38GN3Oaf2kiec0wdltyBySqnJYbWolk624v7eMXjBEYx6pueuhUEL0pWbcX5bD9QJcgqZAZz2bEdI0BrilmhrN1%2FSaDSxH1YB2KVJpZJh50Jz1u385m5GT21JlRyvjC88F5x33T2Vc5uDPDS4HTKvuG%2ByAmRiP8Hv77jd249OBP7%2Ff2G4XGkH%2F75jpGVT4kgGAjLEp9nshDWw5ZyyLsnZHL5tm3loqM9tjakKBSCl9m34%2BKPCsj1CEhBwKF7s8bDpYruQu4gdDyJk77zVs3acOQXo5fryvNHwm2LJWu5yF9t7Bn3pRjNVIMj9yK6wmXtZFHosUWMNuj58AfY1inES9QwW1wYokwggfALd0OmnSyEiIKLYuY8%2BMfvTAFZubbjwE7xmvR3wv9iLPITG5tvH69ohWvK5upTvQ4dDWB5tzue%2FoIQZmnrbgk9T7S6EUEN3UGyN2RtgPYxeb6Fs3wDzBMGommOcI9i0Y50pgNnLASK%2Bj%2FCwaOAZFOg4%2Bepny%2FpIJpO83aDj%2B4FWgzXMDcdtmFpBx96PH5O%2BAKP5ydrkqleQEPjOhbWFye002t9yawzr2YPxVPm8QAXWv5%2BB99dMrOZcI3eLpYiybIaXLQwhfWAwwY6pgEoPGl%2FPgfYwTGJxI1PD2Wy9ZjCRbplhHYTPnDq8aejLLdy10TPnGEVf1PdwbTMCQW5vPJKiS0cD7qe%2BjYg4y6IMS%2BlJMjmYvVogiS%2FdlEz6nfi%2BBoevPKnTegvcvdcVvqB2EW4TClEnJsGda6sEi%2BlJ6pei5428h1E5SZhxcxiU8GyyQBiCA%2BW1ArelsjkqbqNrIov1lpK2OBhMctVmTCxYYkmGzzG&X-Amz-Signature=a8917f0e3e6f692c8a4da27e82b572596cc806708634cfbec8d9f2fcb23421a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377UNXTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrv2Ps5YGDAZ1TwyURdfoc99%2B6ZD0NROgnOm%2FeEjqQ1AiAUjphPc2ZY5Nb5FQewpfyed25AYQ0HMJQQjW5Z9hrKwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe08jcP1axa4vsOj8KtwD0zx%2F8efjkRGmi33o6oko38GN3Oaf2kiec0wdltyBySqnJYbWolk624v7eMXjBEYx6pueuhUEL0pWbcX5bD9QJcgqZAZz2bEdI0BrilmhrN1%2FSaDSxH1YB2KVJpZJh50Jz1u385m5GT21JlRyvjC88F5x33T2Vc5uDPDS4HTKvuG%2ByAmRiP8Hv77jd249OBP7%2Ff2G4XGkH%2F75jpGVT4kgGAjLEp9nshDWw5ZyyLsnZHL5tm3loqM9tjakKBSCl9m34%2BKPCsj1CEhBwKF7s8bDpYruQu4gdDyJk77zVs3acOQXo5fryvNHwm2LJWu5yF9t7Bn3pRjNVIMj9yK6wmXtZFHosUWMNuj58AfY1inES9QwW1wYokwggfALd0OmnSyEiIKLYuY8%2BMfvTAFZubbjwE7xmvR3wv9iLPITG5tvH69ohWvK5upTvQ4dDWB5tzue%2FoIQZmnrbgk9T7S6EUEN3UGyN2RtgPYxeb6Fs3wDzBMGommOcI9i0Y50pgNnLASK%2Bj%2FCwaOAZFOg4%2Bepny%2FpIJpO83aDj%2B4FWgzXMDcdtmFpBx96PH5O%2BAKP5ydrkqleQEPjOhbWFye002t9yawzr2YPxVPm8QAXWv5%2BB99dMrOZcI3eLpYiybIaXLQwhfWAwwY6pgEoPGl%2FPgfYwTGJxI1PD2Wy9ZjCRbplhHYTPnDq8aejLLdy10TPnGEVf1PdwbTMCQW5vPJKiS0cD7qe%2BjYg4y6IMS%2BlJMjmYvVogiS%2FdlEz6nfi%2BBoevPKnTegvcvdcVvqB2EW4TClEnJsGda6sEi%2BlJ6pei5428h1E5SZhxcxiU8GyyQBiCA%2BW1ArelsjkqbqNrIov1lpK2OBhMctVmTCxYYkmGzzG&X-Amz-Signature=4ce2aa909ad3bb632412946788df75303361668319f44a8efb7e647be96eecfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377UNXTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrv2Ps5YGDAZ1TwyURdfoc99%2B6ZD0NROgnOm%2FeEjqQ1AiAUjphPc2ZY5Nb5FQewpfyed25AYQ0HMJQQjW5Z9hrKwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe08jcP1axa4vsOj8KtwD0zx%2F8efjkRGmi33o6oko38GN3Oaf2kiec0wdltyBySqnJYbWolk624v7eMXjBEYx6pueuhUEL0pWbcX5bD9QJcgqZAZz2bEdI0BrilmhrN1%2FSaDSxH1YB2KVJpZJh50Jz1u385m5GT21JlRyvjC88F5x33T2Vc5uDPDS4HTKvuG%2ByAmRiP8Hv77jd249OBP7%2Ff2G4XGkH%2F75jpGVT4kgGAjLEp9nshDWw5ZyyLsnZHL5tm3loqM9tjakKBSCl9m34%2BKPCsj1CEhBwKF7s8bDpYruQu4gdDyJk77zVs3acOQXo5fryvNHwm2LJWu5yF9t7Bn3pRjNVIMj9yK6wmXtZFHosUWMNuj58AfY1inES9QwW1wYokwggfALd0OmnSyEiIKLYuY8%2BMfvTAFZubbjwE7xmvR3wv9iLPITG5tvH69ohWvK5upTvQ4dDWB5tzue%2FoIQZmnrbgk9T7S6EUEN3UGyN2RtgPYxeb6Fs3wDzBMGommOcI9i0Y50pgNnLASK%2Bj%2FCwaOAZFOg4%2Bepny%2FpIJpO83aDj%2B4FWgzXMDcdtmFpBx96PH5O%2BAKP5ydrkqleQEPjOhbWFye002t9yawzr2YPxVPm8QAXWv5%2BB99dMrOZcI3eLpYiybIaXLQwhfWAwwY6pgEoPGl%2FPgfYwTGJxI1PD2Wy9ZjCRbplhHYTPnDq8aejLLdy10TPnGEVf1PdwbTMCQW5vPJKiS0cD7qe%2BjYg4y6IMS%2BlJMjmYvVogiS%2FdlEz6nfi%2BBoevPKnTegvcvdcVvqB2EW4TClEnJsGda6sEi%2BlJ6pei5428h1E5SZhxcxiU8GyyQBiCA%2BW1ArelsjkqbqNrIov1lpK2OBhMctVmTCxYYkmGzzG&X-Amz-Signature=623b8bafbabaa5b2ee1a61929a55c99108cf1b1b7603125cc2669354489dbf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377UNXTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrv2Ps5YGDAZ1TwyURdfoc99%2B6ZD0NROgnOm%2FeEjqQ1AiAUjphPc2ZY5Nb5FQewpfyed25AYQ0HMJQQjW5Z9hrKwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe08jcP1axa4vsOj8KtwD0zx%2F8efjkRGmi33o6oko38GN3Oaf2kiec0wdltyBySqnJYbWolk624v7eMXjBEYx6pueuhUEL0pWbcX5bD9QJcgqZAZz2bEdI0BrilmhrN1%2FSaDSxH1YB2KVJpZJh50Jz1u385m5GT21JlRyvjC88F5x33T2Vc5uDPDS4HTKvuG%2ByAmRiP8Hv77jd249OBP7%2Ff2G4XGkH%2F75jpGVT4kgGAjLEp9nshDWw5ZyyLsnZHL5tm3loqM9tjakKBSCl9m34%2BKPCsj1CEhBwKF7s8bDpYruQu4gdDyJk77zVs3acOQXo5fryvNHwm2LJWu5yF9t7Bn3pRjNVIMj9yK6wmXtZFHosUWMNuj58AfY1inES9QwW1wYokwggfALd0OmnSyEiIKLYuY8%2BMfvTAFZubbjwE7xmvR3wv9iLPITG5tvH69ohWvK5upTvQ4dDWB5tzue%2FoIQZmnrbgk9T7S6EUEN3UGyN2RtgPYxeb6Fs3wDzBMGommOcI9i0Y50pgNnLASK%2Bj%2FCwaOAZFOg4%2Bepny%2FpIJpO83aDj%2B4FWgzXMDcdtmFpBx96PH5O%2BAKP5ydrkqleQEPjOhbWFye002t9yawzr2YPxVPm8QAXWv5%2BB99dMrOZcI3eLpYiybIaXLQwhfWAwwY6pgEoPGl%2FPgfYwTGJxI1PD2Wy9ZjCRbplhHYTPnDq8aejLLdy10TPnGEVf1PdwbTMCQW5vPJKiS0cD7qe%2BjYg4y6IMS%2BlJMjmYvVogiS%2FdlEz6nfi%2BBoevPKnTegvcvdcVvqB2EW4TClEnJsGda6sEi%2BlJ6pei5428h1E5SZhxcxiU8GyyQBiCA%2BW1ArelsjkqbqNrIov1lpK2OBhMctVmTCxYYkmGzzG&X-Amz-Signature=61f6668ef8f1ee9bb1678a3790e0d198c304a4d94e661468542d943914764e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
