---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QKJDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDLrGh5MDb7aiO10Dp3BrduklFACEGoTWGGhDCgYMEvlQIgNAm28yhySlXVrDtI%2FHA6Gc1G7r9wVi%2BDQ2mJH0E4xWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLtm6Pb59ht9wDHFPCrcA4qOG%2BDb%2F7KSuN7oCx%2FuAVe4iSzHHmiKRFgoVWbbT1DTLlJNMBVvxvdXbKOImlpwqzWI5MTOdzCNbemsAcyJ386Yu0f2uTJWoOSA%2B%2FHNP8bqrZJW5vjZLUyTubzJSyepsEHAOvscIuWcjQdo1vufBLPXwArv3HX2XzxANWhX%2B7Eg%2Bu2EA1%2Bwk5otX0P9esOY2xBs1SkMmUFMFO%2Fme54NV53APRyxEWjKlFRcVT8WtdAdp9ZzbKeroDuZgbUNk8SWVNkHd610qomSJigISGu5Iev9dU1gPRHSzNImzFSSLcQGXie5J3L4GtDsSXwVK4MDYJRu3mV8Y960jkyqYhlBY1iNKYQCn3azBWf0wEFbpH2c9Ls6IfsgpIj8fQDIWlHrbiLrhGd20l6qXHh7CLDVEaJHHuLifWdcW9McO6UDy6rfAf6BoPXIR9EnF0SbJ6lx8XRpLNGBPMrkPy58HZ43I7btNc9jdGT7KWSP%2Br6F9UCwqw5sFIrpz5UIsXYW5HYt3jDkfBZsAze9r6hBuMWJYtbWjefVnu60WxbeIsZCKLsbMaoBdbj6gi9yRWcWWcLJvezb8nc21Dgg0qtusHDvHXMMciRQOZwgJKqoOUlmPuajgOyJSCTOHz5F9by2MI3el8QGOqUB%2B5aF9OsqLRcMMLVGwHXyylE0hBsxkM16cSo92aD4SF%2Bnf%2Bt32rgIUmSCDBv3O6nVisdRtxvffbbytNTBCN%2BX848dtvJxyf0c64oF%2BEUkaGDqFt386L9DJRKNnUIhKwQtTCbTq1QUAXwygdd9S6kS9278B8cjyRyaPoWDOfMpmxb7sx9jrhkryrVrxQM0UVS2D9PaTYdMpsZa%2BNjowoRdKNI381Hq&X-Amz-Signature=435c53b27daf11b5ff3eb963abf54c03335b03b24339a32200ce1dec49e2e2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QKJDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDLrGh5MDb7aiO10Dp3BrduklFACEGoTWGGhDCgYMEvlQIgNAm28yhySlXVrDtI%2FHA6Gc1G7r9wVi%2BDQ2mJH0E4xWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLtm6Pb59ht9wDHFPCrcA4qOG%2BDb%2F7KSuN7oCx%2FuAVe4iSzHHmiKRFgoVWbbT1DTLlJNMBVvxvdXbKOImlpwqzWI5MTOdzCNbemsAcyJ386Yu0f2uTJWoOSA%2B%2FHNP8bqrZJW5vjZLUyTubzJSyepsEHAOvscIuWcjQdo1vufBLPXwArv3HX2XzxANWhX%2B7Eg%2Bu2EA1%2Bwk5otX0P9esOY2xBs1SkMmUFMFO%2Fme54NV53APRyxEWjKlFRcVT8WtdAdp9ZzbKeroDuZgbUNk8SWVNkHd610qomSJigISGu5Iev9dU1gPRHSzNImzFSSLcQGXie5J3L4GtDsSXwVK4MDYJRu3mV8Y960jkyqYhlBY1iNKYQCn3azBWf0wEFbpH2c9Ls6IfsgpIj8fQDIWlHrbiLrhGd20l6qXHh7CLDVEaJHHuLifWdcW9McO6UDy6rfAf6BoPXIR9EnF0SbJ6lx8XRpLNGBPMrkPy58HZ43I7btNc9jdGT7KWSP%2Br6F9UCwqw5sFIrpz5UIsXYW5HYt3jDkfBZsAze9r6hBuMWJYtbWjefVnu60WxbeIsZCKLsbMaoBdbj6gi9yRWcWWcLJvezb8nc21Dgg0qtusHDvHXMMciRQOZwgJKqoOUlmPuajgOyJSCTOHz5F9by2MI3el8QGOqUB%2B5aF9OsqLRcMMLVGwHXyylE0hBsxkM16cSo92aD4SF%2Bnf%2Bt32rgIUmSCDBv3O6nVisdRtxvffbbytNTBCN%2BX848dtvJxyf0c64oF%2BEUkaGDqFt386L9DJRKNnUIhKwQtTCbTq1QUAXwygdd9S6kS9278B8cjyRyaPoWDOfMpmxb7sx9jrhkryrVrxQM0UVS2D9PaTYdMpsZa%2BNjowoRdKNI381Hq&X-Amz-Signature=249006db0d070aa227afa7dbd1bf75dca4804ea429da8818f512af3e1282ec24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QKJDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDLrGh5MDb7aiO10Dp3BrduklFACEGoTWGGhDCgYMEvlQIgNAm28yhySlXVrDtI%2FHA6Gc1G7r9wVi%2BDQ2mJH0E4xWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLtm6Pb59ht9wDHFPCrcA4qOG%2BDb%2F7KSuN7oCx%2FuAVe4iSzHHmiKRFgoVWbbT1DTLlJNMBVvxvdXbKOImlpwqzWI5MTOdzCNbemsAcyJ386Yu0f2uTJWoOSA%2B%2FHNP8bqrZJW5vjZLUyTubzJSyepsEHAOvscIuWcjQdo1vufBLPXwArv3HX2XzxANWhX%2B7Eg%2Bu2EA1%2Bwk5otX0P9esOY2xBs1SkMmUFMFO%2Fme54NV53APRyxEWjKlFRcVT8WtdAdp9ZzbKeroDuZgbUNk8SWVNkHd610qomSJigISGu5Iev9dU1gPRHSzNImzFSSLcQGXie5J3L4GtDsSXwVK4MDYJRu3mV8Y960jkyqYhlBY1iNKYQCn3azBWf0wEFbpH2c9Ls6IfsgpIj8fQDIWlHrbiLrhGd20l6qXHh7CLDVEaJHHuLifWdcW9McO6UDy6rfAf6BoPXIR9EnF0SbJ6lx8XRpLNGBPMrkPy58HZ43I7btNc9jdGT7KWSP%2Br6F9UCwqw5sFIrpz5UIsXYW5HYt3jDkfBZsAze9r6hBuMWJYtbWjefVnu60WxbeIsZCKLsbMaoBdbj6gi9yRWcWWcLJvezb8nc21Dgg0qtusHDvHXMMciRQOZwgJKqoOUlmPuajgOyJSCTOHz5F9by2MI3el8QGOqUB%2B5aF9OsqLRcMMLVGwHXyylE0hBsxkM16cSo92aD4SF%2Bnf%2Bt32rgIUmSCDBv3O6nVisdRtxvffbbytNTBCN%2BX848dtvJxyf0c64oF%2BEUkaGDqFt386L9DJRKNnUIhKwQtTCbTq1QUAXwygdd9S6kS9278B8cjyRyaPoWDOfMpmxb7sx9jrhkryrVrxQM0UVS2D9PaTYdMpsZa%2BNjowoRdKNI381Hq&X-Amz-Signature=2d8bbaad72da981f16122cd0c0211779f7a650532b85a542f12e3cbca1f91d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QKJDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDLrGh5MDb7aiO10Dp3BrduklFACEGoTWGGhDCgYMEvlQIgNAm28yhySlXVrDtI%2FHA6Gc1G7r9wVi%2BDQ2mJH0E4xWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLtm6Pb59ht9wDHFPCrcA4qOG%2BDb%2F7KSuN7oCx%2FuAVe4iSzHHmiKRFgoVWbbT1DTLlJNMBVvxvdXbKOImlpwqzWI5MTOdzCNbemsAcyJ386Yu0f2uTJWoOSA%2B%2FHNP8bqrZJW5vjZLUyTubzJSyepsEHAOvscIuWcjQdo1vufBLPXwArv3HX2XzxANWhX%2B7Eg%2Bu2EA1%2Bwk5otX0P9esOY2xBs1SkMmUFMFO%2Fme54NV53APRyxEWjKlFRcVT8WtdAdp9ZzbKeroDuZgbUNk8SWVNkHd610qomSJigISGu5Iev9dU1gPRHSzNImzFSSLcQGXie5J3L4GtDsSXwVK4MDYJRu3mV8Y960jkyqYhlBY1iNKYQCn3azBWf0wEFbpH2c9Ls6IfsgpIj8fQDIWlHrbiLrhGd20l6qXHh7CLDVEaJHHuLifWdcW9McO6UDy6rfAf6BoPXIR9EnF0SbJ6lx8XRpLNGBPMrkPy58HZ43I7btNc9jdGT7KWSP%2Br6F9UCwqw5sFIrpz5UIsXYW5HYt3jDkfBZsAze9r6hBuMWJYtbWjefVnu60WxbeIsZCKLsbMaoBdbj6gi9yRWcWWcLJvezb8nc21Dgg0qtusHDvHXMMciRQOZwgJKqoOUlmPuajgOyJSCTOHz5F9by2MI3el8QGOqUB%2B5aF9OsqLRcMMLVGwHXyylE0hBsxkM16cSo92aD4SF%2Bnf%2Bt32rgIUmSCDBv3O6nVisdRtxvffbbytNTBCN%2BX848dtvJxyf0c64oF%2BEUkaGDqFt386L9DJRKNnUIhKwQtTCbTq1QUAXwygdd9S6kS9278B8cjyRyaPoWDOfMpmxb7sx9jrhkryrVrxQM0UVS2D9PaTYdMpsZa%2BNjowoRdKNI381Hq&X-Amz-Signature=4ab59277734eee33cce7cef692f4fbab2e64a3c461de350523ebfa673a8fc8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QKJDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDLrGh5MDb7aiO10Dp3BrduklFACEGoTWGGhDCgYMEvlQIgNAm28yhySlXVrDtI%2FHA6Gc1G7r9wVi%2BDQ2mJH0E4xWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLtm6Pb59ht9wDHFPCrcA4qOG%2BDb%2F7KSuN7oCx%2FuAVe4iSzHHmiKRFgoVWbbT1DTLlJNMBVvxvdXbKOImlpwqzWI5MTOdzCNbemsAcyJ386Yu0f2uTJWoOSA%2B%2FHNP8bqrZJW5vjZLUyTubzJSyepsEHAOvscIuWcjQdo1vufBLPXwArv3HX2XzxANWhX%2B7Eg%2Bu2EA1%2Bwk5otX0P9esOY2xBs1SkMmUFMFO%2Fme54NV53APRyxEWjKlFRcVT8WtdAdp9ZzbKeroDuZgbUNk8SWVNkHd610qomSJigISGu5Iev9dU1gPRHSzNImzFSSLcQGXie5J3L4GtDsSXwVK4MDYJRu3mV8Y960jkyqYhlBY1iNKYQCn3azBWf0wEFbpH2c9Ls6IfsgpIj8fQDIWlHrbiLrhGd20l6qXHh7CLDVEaJHHuLifWdcW9McO6UDy6rfAf6BoPXIR9EnF0SbJ6lx8XRpLNGBPMrkPy58HZ43I7btNc9jdGT7KWSP%2Br6F9UCwqw5sFIrpz5UIsXYW5HYt3jDkfBZsAze9r6hBuMWJYtbWjefVnu60WxbeIsZCKLsbMaoBdbj6gi9yRWcWWcLJvezb8nc21Dgg0qtusHDvHXMMciRQOZwgJKqoOUlmPuajgOyJSCTOHz5F9by2MI3el8QGOqUB%2B5aF9OsqLRcMMLVGwHXyylE0hBsxkM16cSo92aD4SF%2Bnf%2Bt32rgIUmSCDBv3O6nVisdRtxvffbbytNTBCN%2BX848dtvJxyf0c64oF%2BEUkaGDqFt386L9DJRKNnUIhKwQtTCbTq1QUAXwygdd9S6kS9278B8cjyRyaPoWDOfMpmxb7sx9jrhkryrVrxQM0UVS2D9PaTYdMpsZa%2BNjowoRdKNI381Hq&X-Amz-Signature=b63c6dd4a4fb267e67b9cca15ca05d3ec7c17f0f7f08b0192975a1239a8b0636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QKJDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDLrGh5MDb7aiO10Dp3BrduklFACEGoTWGGhDCgYMEvlQIgNAm28yhySlXVrDtI%2FHA6Gc1G7r9wVi%2BDQ2mJH0E4xWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLtm6Pb59ht9wDHFPCrcA4qOG%2BDb%2F7KSuN7oCx%2FuAVe4iSzHHmiKRFgoVWbbT1DTLlJNMBVvxvdXbKOImlpwqzWI5MTOdzCNbemsAcyJ386Yu0f2uTJWoOSA%2B%2FHNP8bqrZJW5vjZLUyTubzJSyepsEHAOvscIuWcjQdo1vufBLPXwArv3HX2XzxANWhX%2B7Eg%2Bu2EA1%2Bwk5otX0P9esOY2xBs1SkMmUFMFO%2Fme54NV53APRyxEWjKlFRcVT8WtdAdp9ZzbKeroDuZgbUNk8SWVNkHd610qomSJigISGu5Iev9dU1gPRHSzNImzFSSLcQGXie5J3L4GtDsSXwVK4MDYJRu3mV8Y960jkyqYhlBY1iNKYQCn3azBWf0wEFbpH2c9Ls6IfsgpIj8fQDIWlHrbiLrhGd20l6qXHh7CLDVEaJHHuLifWdcW9McO6UDy6rfAf6BoPXIR9EnF0SbJ6lx8XRpLNGBPMrkPy58HZ43I7btNc9jdGT7KWSP%2Br6F9UCwqw5sFIrpz5UIsXYW5HYt3jDkfBZsAze9r6hBuMWJYtbWjefVnu60WxbeIsZCKLsbMaoBdbj6gi9yRWcWWcLJvezb8nc21Dgg0qtusHDvHXMMciRQOZwgJKqoOUlmPuajgOyJSCTOHz5F9by2MI3el8QGOqUB%2B5aF9OsqLRcMMLVGwHXyylE0hBsxkM16cSo92aD4SF%2Bnf%2Bt32rgIUmSCDBv3O6nVisdRtxvffbbytNTBCN%2BX848dtvJxyf0c64oF%2BEUkaGDqFt386L9DJRKNnUIhKwQtTCbTq1QUAXwygdd9S6kS9278B8cjyRyaPoWDOfMpmxb7sx9jrhkryrVrxQM0UVS2D9PaTYdMpsZa%2BNjowoRdKNI381Hq&X-Amz-Signature=722e199ac1763cda7688f8a27dd2e57b9177af57064a03bb50c3148e919bb73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QKJDZ4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDLrGh5MDb7aiO10Dp3BrduklFACEGoTWGGhDCgYMEvlQIgNAm28yhySlXVrDtI%2FHA6Gc1G7r9wVi%2BDQ2mJH0E4xWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLtm6Pb59ht9wDHFPCrcA4qOG%2BDb%2F7KSuN7oCx%2FuAVe4iSzHHmiKRFgoVWbbT1DTLlJNMBVvxvdXbKOImlpwqzWI5MTOdzCNbemsAcyJ386Yu0f2uTJWoOSA%2B%2FHNP8bqrZJW5vjZLUyTubzJSyepsEHAOvscIuWcjQdo1vufBLPXwArv3HX2XzxANWhX%2B7Eg%2Bu2EA1%2Bwk5otX0P9esOY2xBs1SkMmUFMFO%2Fme54NV53APRyxEWjKlFRcVT8WtdAdp9ZzbKeroDuZgbUNk8SWVNkHd610qomSJigISGu5Iev9dU1gPRHSzNImzFSSLcQGXie5J3L4GtDsSXwVK4MDYJRu3mV8Y960jkyqYhlBY1iNKYQCn3azBWf0wEFbpH2c9Ls6IfsgpIj8fQDIWlHrbiLrhGd20l6qXHh7CLDVEaJHHuLifWdcW9McO6UDy6rfAf6BoPXIR9EnF0SbJ6lx8XRpLNGBPMrkPy58HZ43I7btNc9jdGT7KWSP%2Br6F9UCwqw5sFIrpz5UIsXYW5HYt3jDkfBZsAze9r6hBuMWJYtbWjefVnu60WxbeIsZCKLsbMaoBdbj6gi9yRWcWWcLJvezb8nc21Dgg0qtusHDvHXMMciRQOZwgJKqoOUlmPuajgOyJSCTOHz5F9by2MI3el8QGOqUB%2B5aF9OsqLRcMMLVGwHXyylE0hBsxkM16cSo92aD4SF%2Bnf%2Bt32rgIUmSCDBv3O6nVisdRtxvffbbytNTBCN%2BX848dtvJxyf0c64oF%2BEUkaGDqFt386L9DJRKNnUIhKwQtTCbTq1QUAXwygdd9S6kS9278B8cjyRyaPoWDOfMpmxb7sx9jrhkryrVrxQM0UVS2D9PaTYdMpsZa%2BNjowoRdKNI381Hq&X-Amz-Signature=99d5319168604977bc142d10ae99e9692fa46139cb92e662a3243949359af347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
