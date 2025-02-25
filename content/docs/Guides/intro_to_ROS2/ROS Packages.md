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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKESGWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEyptPWBpTPPhufeMEVJOAjl5MVxTmBhEDwz9Rj%2FTu2OAiEA3lRoZJHFPNGdyXTdMXqbti3M3MVwiM8YRMbr9j2LL%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFGb1PI5luqM3SlGFyrcAzJJr1ZSXScLX1BjcguVX%2FMShlO7puy1jz2IfmbMg9N14SJYlPuBRdNKtzIL3H9p56oG%2Fxyarl0qwefkOCxNzmenbZ1y0XNZWyqLgykSo5tuxD%2BMfVBIEwRSHzBwbe8Dq%2FLJG81G14wApce2KyCBAnThp1TJcyphswD%2B%2FkVpSzW2t2xU2%2FVdQl8CuVN94NLUWuqVFnxYSdL5MPwvOBZ5Q0QLrgVyZxp%2F%2Fs7GXetTvVBuPS5yZU7zYh7xW1DSV5VZ9N%2B70QAVTpZArbg9MX3fbOYt8qErpuMdgGE1AXRDNb7fAx%2FR5SFHvPS2vb%2FCS7aPTvAdrTYk3sY%2F9TaZ4QQ4BWmW9TmIgICi8n2IEnGHiaRPSV7jLMg%2F%2BJ%2BUA3hOms%2Blae91fg2FpkVkXveZekZjyA0Yd%2BIJIBbz4S5ZHeHPzP%2FwCMAXbXIqTFfs6f54iUYZApH%2BOWIYTnYCYYPBWsR0qSTVLohVYZRbAXlsDWUwG4favd7vDEe1U4LCsxYRsM0VE4YSALCPKTk48QdxO0kF3N4Fo%2B%2Fi4X8f4IaY7%2BOFOLSd9s4BIjn0kMf0FoqF5sWD6cFuLbxr358djmUi2ghoGGqEio6LFy%2BfMVR2tO%2BHQn9khLoarqcfRs9dcps4MMX59r0GOqUB8HUxNaJaHLaMytkuaHgqKDFGPNUGETlYYWf%2Fso2RWVgmcy2egRF%2B1ERJez6sZOlRsgYLzUDBmcw6WyOGK7J7j3UXBvskteXvdrSm8WkPu2otpYqNtIafYmHfLIX4MgP%2BQqyN1U18YXRpaunFY7P7L4VMZYrTj5HcD1S0T%2BohsZz7Kdeo4RPPC06GSfzbnwklwGwFwmb5in3JUxRR%2F%2BNbAEJgPnrg&X-Amz-Signature=46d8c06cbff668c7e916433d8a2a7b9710e724192a81520f1b7526c5771aacbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKESGWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEyptPWBpTPPhufeMEVJOAjl5MVxTmBhEDwz9Rj%2FTu2OAiEA3lRoZJHFPNGdyXTdMXqbti3M3MVwiM8YRMbr9j2LL%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFGb1PI5luqM3SlGFyrcAzJJr1ZSXScLX1BjcguVX%2FMShlO7puy1jz2IfmbMg9N14SJYlPuBRdNKtzIL3H9p56oG%2Fxyarl0qwefkOCxNzmenbZ1y0XNZWyqLgykSo5tuxD%2BMfVBIEwRSHzBwbe8Dq%2FLJG81G14wApce2KyCBAnThp1TJcyphswD%2B%2FkVpSzW2t2xU2%2FVdQl8CuVN94NLUWuqVFnxYSdL5MPwvOBZ5Q0QLrgVyZxp%2F%2Fs7GXetTvVBuPS5yZU7zYh7xW1DSV5VZ9N%2B70QAVTpZArbg9MX3fbOYt8qErpuMdgGE1AXRDNb7fAx%2FR5SFHvPS2vb%2FCS7aPTvAdrTYk3sY%2F9TaZ4QQ4BWmW9TmIgICi8n2IEnGHiaRPSV7jLMg%2F%2BJ%2BUA3hOms%2Blae91fg2FpkVkXveZekZjyA0Yd%2BIJIBbz4S5ZHeHPzP%2FwCMAXbXIqTFfs6f54iUYZApH%2BOWIYTnYCYYPBWsR0qSTVLohVYZRbAXlsDWUwG4favd7vDEe1U4LCsxYRsM0VE4YSALCPKTk48QdxO0kF3N4Fo%2B%2Fi4X8f4IaY7%2BOFOLSd9s4BIjn0kMf0FoqF5sWD6cFuLbxr358djmUi2ghoGGqEio6LFy%2BfMVR2tO%2BHQn9khLoarqcfRs9dcps4MMX59r0GOqUB8HUxNaJaHLaMytkuaHgqKDFGPNUGETlYYWf%2Fso2RWVgmcy2egRF%2B1ERJez6sZOlRsgYLzUDBmcw6WyOGK7J7j3UXBvskteXvdrSm8WkPu2otpYqNtIafYmHfLIX4MgP%2BQqyN1U18YXRpaunFY7P7L4VMZYrTj5HcD1S0T%2BohsZz7Kdeo4RPPC06GSfzbnwklwGwFwmb5in3JUxRR%2F%2BNbAEJgPnrg&X-Amz-Signature=39210bb666a46a6f602e5d2da861d84fc4d0bd15c411c1d8709ab5e16e5fa936&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKESGWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEyptPWBpTPPhufeMEVJOAjl5MVxTmBhEDwz9Rj%2FTu2OAiEA3lRoZJHFPNGdyXTdMXqbti3M3MVwiM8YRMbr9j2LL%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFGb1PI5luqM3SlGFyrcAzJJr1ZSXScLX1BjcguVX%2FMShlO7puy1jz2IfmbMg9N14SJYlPuBRdNKtzIL3H9p56oG%2Fxyarl0qwefkOCxNzmenbZ1y0XNZWyqLgykSo5tuxD%2BMfVBIEwRSHzBwbe8Dq%2FLJG81G14wApce2KyCBAnThp1TJcyphswD%2B%2FkVpSzW2t2xU2%2FVdQl8CuVN94NLUWuqVFnxYSdL5MPwvOBZ5Q0QLrgVyZxp%2F%2Fs7GXetTvVBuPS5yZU7zYh7xW1DSV5VZ9N%2B70QAVTpZArbg9MX3fbOYt8qErpuMdgGE1AXRDNb7fAx%2FR5SFHvPS2vb%2FCS7aPTvAdrTYk3sY%2F9TaZ4QQ4BWmW9TmIgICi8n2IEnGHiaRPSV7jLMg%2F%2BJ%2BUA3hOms%2Blae91fg2FpkVkXveZekZjyA0Yd%2BIJIBbz4S5ZHeHPzP%2FwCMAXbXIqTFfs6f54iUYZApH%2BOWIYTnYCYYPBWsR0qSTVLohVYZRbAXlsDWUwG4favd7vDEe1U4LCsxYRsM0VE4YSALCPKTk48QdxO0kF3N4Fo%2B%2Fi4X8f4IaY7%2BOFOLSd9s4BIjn0kMf0FoqF5sWD6cFuLbxr358djmUi2ghoGGqEio6LFy%2BfMVR2tO%2BHQn9khLoarqcfRs9dcps4MMX59r0GOqUB8HUxNaJaHLaMytkuaHgqKDFGPNUGETlYYWf%2Fso2RWVgmcy2egRF%2B1ERJez6sZOlRsgYLzUDBmcw6WyOGK7J7j3UXBvskteXvdrSm8WkPu2otpYqNtIafYmHfLIX4MgP%2BQqyN1U18YXRpaunFY7P7L4VMZYrTj5HcD1S0T%2BohsZz7Kdeo4RPPC06GSfzbnwklwGwFwmb5in3JUxRR%2F%2BNbAEJgPnrg&X-Amz-Signature=88f3b855ff90992b0f712d4c2d7bfd4d87b866cf9c7a745aaccffa44df5a2376&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKESGWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEyptPWBpTPPhufeMEVJOAjl5MVxTmBhEDwz9Rj%2FTu2OAiEA3lRoZJHFPNGdyXTdMXqbti3M3MVwiM8YRMbr9j2LL%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFGb1PI5luqM3SlGFyrcAzJJr1ZSXScLX1BjcguVX%2FMShlO7puy1jz2IfmbMg9N14SJYlPuBRdNKtzIL3H9p56oG%2Fxyarl0qwefkOCxNzmenbZ1y0XNZWyqLgykSo5tuxD%2BMfVBIEwRSHzBwbe8Dq%2FLJG81G14wApce2KyCBAnThp1TJcyphswD%2B%2FkVpSzW2t2xU2%2FVdQl8CuVN94NLUWuqVFnxYSdL5MPwvOBZ5Q0QLrgVyZxp%2F%2Fs7GXetTvVBuPS5yZU7zYh7xW1DSV5VZ9N%2B70QAVTpZArbg9MX3fbOYt8qErpuMdgGE1AXRDNb7fAx%2FR5SFHvPS2vb%2FCS7aPTvAdrTYk3sY%2F9TaZ4QQ4BWmW9TmIgICi8n2IEnGHiaRPSV7jLMg%2F%2BJ%2BUA3hOms%2Blae91fg2FpkVkXveZekZjyA0Yd%2BIJIBbz4S5ZHeHPzP%2FwCMAXbXIqTFfs6f54iUYZApH%2BOWIYTnYCYYPBWsR0qSTVLohVYZRbAXlsDWUwG4favd7vDEe1U4LCsxYRsM0VE4YSALCPKTk48QdxO0kF3N4Fo%2B%2Fi4X8f4IaY7%2BOFOLSd9s4BIjn0kMf0FoqF5sWD6cFuLbxr358djmUi2ghoGGqEio6LFy%2BfMVR2tO%2BHQn9khLoarqcfRs9dcps4MMX59r0GOqUB8HUxNaJaHLaMytkuaHgqKDFGPNUGETlYYWf%2Fso2RWVgmcy2egRF%2B1ERJez6sZOlRsgYLzUDBmcw6WyOGK7J7j3UXBvskteXvdrSm8WkPu2otpYqNtIafYmHfLIX4MgP%2BQqyN1U18YXRpaunFY7P7L4VMZYrTj5HcD1S0T%2BohsZz7Kdeo4RPPC06GSfzbnwklwGwFwmb5in3JUxRR%2F%2BNbAEJgPnrg&X-Amz-Signature=5e6d2229dd175aa515402551f10118e35c706dbdf0ecead4ce2e54090a5df803&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKESGWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEyptPWBpTPPhufeMEVJOAjl5MVxTmBhEDwz9Rj%2FTu2OAiEA3lRoZJHFPNGdyXTdMXqbti3M3MVwiM8YRMbr9j2LL%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFGb1PI5luqM3SlGFyrcAzJJr1ZSXScLX1BjcguVX%2FMShlO7puy1jz2IfmbMg9N14SJYlPuBRdNKtzIL3H9p56oG%2Fxyarl0qwefkOCxNzmenbZ1y0XNZWyqLgykSo5tuxD%2BMfVBIEwRSHzBwbe8Dq%2FLJG81G14wApce2KyCBAnThp1TJcyphswD%2B%2FkVpSzW2t2xU2%2FVdQl8CuVN94NLUWuqVFnxYSdL5MPwvOBZ5Q0QLrgVyZxp%2F%2Fs7GXetTvVBuPS5yZU7zYh7xW1DSV5VZ9N%2B70QAVTpZArbg9MX3fbOYt8qErpuMdgGE1AXRDNb7fAx%2FR5SFHvPS2vb%2FCS7aPTvAdrTYk3sY%2F9TaZ4QQ4BWmW9TmIgICi8n2IEnGHiaRPSV7jLMg%2F%2BJ%2BUA3hOms%2Blae91fg2FpkVkXveZekZjyA0Yd%2BIJIBbz4S5ZHeHPzP%2FwCMAXbXIqTFfs6f54iUYZApH%2BOWIYTnYCYYPBWsR0qSTVLohVYZRbAXlsDWUwG4favd7vDEe1U4LCsxYRsM0VE4YSALCPKTk48QdxO0kF3N4Fo%2B%2Fi4X8f4IaY7%2BOFOLSd9s4BIjn0kMf0FoqF5sWD6cFuLbxr358djmUi2ghoGGqEio6LFy%2BfMVR2tO%2BHQn9khLoarqcfRs9dcps4MMX59r0GOqUB8HUxNaJaHLaMytkuaHgqKDFGPNUGETlYYWf%2Fso2RWVgmcy2egRF%2B1ERJez6sZOlRsgYLzUDBmcw6WyOGK7J7j3UXBvskteXvdrSm8WkPu2otpYqNtIafYmHfLIX4MgP%2BQqyN1U18YXRpaunFY7P7L4VMZYrTj5HcD1S0T%2BohsZz7Kdeo4RPPC06GSfzbnwklwGwFwmb5in3JUxRR%2F%2BNbAEJgPnrg&X-Amz-Signature=f00de4961ed08dcd60c4d02b50923216406f09e0ede81fc1d126718225f79449&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKESGWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEyptPWBpTPPhufeMEVJOAjl5MVxTmBhEDwz9Rj%2FTu2OAiEA3lRoZJHFPNGdyXTdMXqbti3M3MVwiM8YRMbr9j2LL%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFGb1PI5luqM3SlGFyrcAzJJr1ZSXScLX1BjcguVX%2FMShlO7puy1jz2IfmbMg9N14SJYlPuBRdNKtzIL3H9p56oG%2Fxyarl0qwefkOCxNzmenbZ1y0XNZWyqLgykSo5tuxD%2BMfVBIEwRSHzBwbe8Dq%2FLJG81G14wApce2KyCBAnThp1TJcyphswD%2B%2FkVpSzW2t2xU2%2FVdQl8CuVN94NLUWuqVFnxYSdL5MPwvOBZ5Q0QLrgVyZxp%2F%2Fs7GXetTvVBuPS5yZU7zYh7xW1DSV5VZ9N%2B70QAVTpZArbg9MX3fbOYt8qErpuMdgGE1AXRDNb7fAx%2FR5SFHvPS2vb%2FCS7aPTvAdrTYk3sY%2F9TaZ4QQ4BWmW9TmIgICi8n2IEnGHiaRPSV7jLMg%2F%2BJ%2BUA3hOms%2Blae91fg2FpkVkXveZekZjyA0Yd%2BIJIBbz4S5ZHeHPzP%2FwCMAXbXIqTFfs6f54iUYZApH%2BOWIYTnYCYYPBWsR0qSTVLohVYZRbAXlsDWUwG4favd7vDEe1U4LCsxYRsM0VE4YSALCPKTk48QdxO0kF3N4Fo%2B%2Fi4X8f4IaY7%2BOFOLSd9s4BIjn0kMf0FoqF5sWD6cFuLbxr358djmUi2ghoGGqEio6LFy%2BfMVR2tO%2BHQn9khLoarqcfRs9dcps4MMX59r0GOqUB8HUxNaJaHLaMytkuaHgqKDFGPNUGETlYYWf%2Fso2RWVgmcy2egRF%2B1ERJez6sZOlRsgYLzUDBmcw6WyOGK7J7j3UXBvskteXvdrSm8WkPu2otpYqNtIafYmHfLIX4MgP%2BQqyN1U18YXRpaunFY7P7L4VMZYrTj5HcD1S0T%2BohsZz7Kdeo4RPPC06GSfzbnwklwGwFwmb5in3JUxRR%2F%2BNbAEJgPnrg&X-Amz-Signature=4939766aba0289bf4c1401024ae4f86e7a98b61b3dfc2a0b969bb64e4fc8afef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKESGWN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEyptPWBpTPPhufeMEVJOAjl5MVxTmBhEDwz9Rj%2FTu2OAiEA3lRoZJHFPNGdyXTdMXqbti3M3MVwiM8YRMbr9j2LL%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFGb1PI5luqM3SlGFyrcAzJJr1ZSXScLX1BjcguVX%2FMShlO7puy1jz2IfmbMg9N14SJYlPuBRdNKtzIL3H9p56oG%2Fxyarl0qwefkOCxNzmenbZ1y0XNZWyqLgykSo5tuxD%2BMfVBIEwRSHzBwbe8Dq%2FLJG81G14wApce2KyCBAnThp1TJcyphswD%2B%2FkVpSzW2t2xU2%2FVdQl8CuVN94NLUWuqVFnxYSdL5MPwvOBZ5Q0QLrgVyZxp%2F%2Fs7GXetTvVBuPS5yZU7zYh7xW1DSV5VZ9N%2B70QAVTpZArbg9MX3fbOYt8qErpuMdgGE1AXRDNb7fAx%2FR5SFHvPS2vb%2FCS7aPTvAdrTYk3sY%2F9TaZ4QQ4BWmW9TmIgICi8n2IEnGHiaRPSV7jLMg%2F%2BJ%2BUA3hOms%2Blae91fg2FpkVkXveZekZjyA0Yd%2BIJIBbz4S5ZHeHPzP%2FwCMAXbXIqTFfs6f54iUYZApH%2BOWIYTnYCYYPBWsR0qSTVLohVYZRbAXlsDWUwG4favd7vDEe1U4LCsxYRsM0VE4YSALCPKTk48QdxO0kF3N4Fo%2B%2Fi4X8f4IaY7%2BOFOLSd9s4BIjn0kMf0FoqF5sWD6cFuLbxr358djmUi2ghoGGqEio6LFy%2BfMVR2tO%2BHQn9khLoarqcfRs9dcps4MMX59r0GOqUB8HUxNaJaHLaMytkuaHgqKDFGPNUGETlYYWf%2Fso2RWVgmcy2egRF%2B1ERJez6sZOlRsgYLzUDBmcw6WyOGK7J7j3UXBvskteXvdrSm8WkPu2otpYqNtIafYmHfLIX4MgP%2BQqyN1U18YXRpaunFY7P7L4VMZYrTj5HcD1S0T%2BohsZz7Kdeo4RPPC06GSfzbnwklwGwFwmb5in3JUxRR%2F%2BNbAEJgPnrg&X-Amz-Signature=a4d5795d7845ad63c6df9d9666592dd60e9ab788632e8f6bf95a1372548a9cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
