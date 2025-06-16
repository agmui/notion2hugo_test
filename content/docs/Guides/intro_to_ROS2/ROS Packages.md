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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQVX2LI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBOrRCCIt4bLlb%2B8fjxQAIwlYszaOGLKpXrodJXt8sG8AiEAr9ZFddn668mJjUXTzhrjUMEDfXMpOJ41lLCQ2RKuQtcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6XobURzEP3OrH4%2FircA3JfSwZq2aP0EuNbYueGkd%2BSiYKjCzSZBfO%2F%2BIxjIb7JIDY%2BBb9qgCm1W8hAPZYK7FwcgtIORvFOnHl3h8oHv1MUUV2yKXYphFlwmsX4W0YkeXB%2BX6phvMZVUpiajIsM8gVV1KWpMR8MqG5QAgd9lftszjBEO4%2Fg3BhsCNFQwQV3kGs7SVh9Nb5exPcDTZvXcyXL1Xk4%2FVof4NgtuA2yQqXNreY%2BA8XlEncAFOXFAQ0cnVxmoLaPMWd2O8cTPhdlLrfRObti4NTSDaxFM4lSWn1VNmoxR2oAXwwi2lO3rHvpndbjIXCBGyajHq3Ia9r4eljMCjD6SlFMi37eIfm0GbqPn%2Bhckk4eFrB7RbcWtfKluwSr41WvzNlEq%2BBbqlrolFgtFRk%2FwAPLW%2FKqrrLSW4eBMpdGjprp7NhebNm%2F3BjVuzBgBLOAEdxi3cXeL3nX8xZeUPuFz4sgYAuc2BfHr7%2FyOJEUoFuC%2F%2BwVkOeTwKA6nmFIe1ZbUf1odlfjixowqZ5zqFF5o9rv3eT2AhnCaJCOo3Hj3cVOtNHZnfRnHJO8FWoUXTq5ToItngw%2F6zuSkQNEL6SwZUPanuOVexcK7D%2B3XqraHxhOnjcETQmmVk%2FsLk1CepEMn75d4hJQMKyOwsIGOqUBBheLAzgyD%2Bf%2FzsXcq8TYebZvxvsyWXsAeh8wiinVKBU8j%2BPqnGOB5K2hgCilmjs0IQlfEjSMTmbbF9483ApIfxl5fpxeaQXVS%2BF4bRbLF13MKjkKXQTXZ4PU6h5Kx9%2B78MTwfwDl6pyH3tsLk6KcqFRScLHxmaVS38vYDjJCsWLIuHPRx6M5RAlVYx%2FT9c71qsxHXseXtYiuqNOQMTxUDLIHCfTN&X-Amz-Signature=b611b89b5d23a0bf7c8c748745127897df63dfec3d06854705ba6e7282792fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQVX2LI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBOrRCCIt4bLlb%2B8fjxQAIwlYszaOGLKpXrodJXt8sG8AiEAr9ZFddn668mJjUXTzhrjUMEDfXMpOJ41lLCQ2RKuQtcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6XobURzEP3OrH4%2FircA3JfSwZq2aP0EuNbYueGkd%2BSiYKjCzSZBfO%2F%2BIxjIb7JIDY%2BBb9qgCm1W8hAPZYK7FwcgtIORvFOnHl3h8oHv1MUUV2yKXYphFlwmsX4W0YkeXB%2BX6phvMZVUpiajIsM8gVV1KWpMR8MqG5QAgd9lftszjBEO4%2Fg3BhsCNFQwQV3kGs7SVh9Nb5exPcDTZvXcyXL1Xk4%2FVof4NgtuA2yQqXNreY%2BA8XlEncAFOXFAQ0cnVxmoLaPMWd2O8cTPhdlLrfRObti4NTSDaxFM4lSWn1VNmoxR2oAXwwi2lO3rHvpndbjIXCBGyajHq3Ia9r4eljMCjD6SlFMi37eIfm0GbqPn%2Bhckk4eFrB7RbcWtfKluwSr41WvzNlEq%2BBbqlrolFgtFRk%2FwAPLW%2FKqrrLSW4eBMpdGjprp7NhebNm%2F3BjVuzBgBLOAEdxi3cXeL3nX8xZeUPuFz4sgYAuc2BfHr7%2FyOJEUoFuC%2F%2BwVkOeTwKA6nmFIe1ZbUf1odlfjixowqZ5zqFF5o9rv3eT2AhnCaJCOo3Hj3cVOtNHZnfRnHJO8FWoUXTq5ToItngw%2F6zuSkQNEL6SwZUPanuOVexcK7D%2B3XqraHxhOnjcETQmmVk%2FsLk1CepEMn75d4hJQMKyOwsIGOqUBBheLAzgyD%2Bf%2FzsXcq8TYebZvxvsyWXsAeh8wiinVKBU8j%2BPqnGOB5K2hgCilmjs0IQlfEjSMTmbbF9483ApIfxl5fpxeaQXVS%2BF4bRbLF13MKjkKXQTXZ4PU6h5Kx9%2B78MTwfwDl6pyH3tsLk6KcqFRScLHxmaVS38vYDjJCsWLIuHPRx6M5RAlVYx%2FT9c71qsxHXseXtYiuqNOQMTxUDLIHCfTN&X-Amz-Signature=0eccbcb1bb2504ff15edb137921cdaef45ecb6c3b4702c0708b38c5f6f58a781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQVX2LI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBOrRCCIt4bLlb%2B8fjxQAIwlYszaOGLKpXrodJXt8sG8AiEAr9ZFddn668mJjUXTzhrjUMEDfXMpOJ41lLCQ2RKuQtcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6XobURzEP3OrH4%2FircA3JfSwZq2aP0EuNbYueGkd%2BSiYKjCzSZBfO%2F%2BIxjIb7JIDY%2BBb9qgCm1W8hAPZYK7FwcgtIORvFOnHl3h8oHv1MUUV2yKXYphFlwmsX4W0YkeXB%2BX6phvMZVUpiajIsM8gVV1KWpMR8MqG5QAgd9lftszjBEO4%2Fg3BhsCNFQwQV3kGs7SVh9Nb5exPcDTZvXcyXL1Xk4%2FVof4NgtuA2yQqXNreY%2BA8XlEncAFOXFAQ0cnVxmoLaPMWd2O8cTPhdlLrfRObti4NTSDaxFM4lSWn1VNmoxR2oAXwwi2lO3rHvpndbjIXCBGyajHq3Ia9r4eljMCjD6SlFMi37eIfm0GbqPn%2Bhckk4eFrB7RbcWtfKluwSr41WvzNlEq%2BBbqlrolFgtFRk%2FwAPLW%2FKqrrLSW4eBMpdGjprp7NhebNm%2F3BjVuzBgBLOAEdxi3cXeL3nX8xZeUPuFz4sgYAuc2BfHr7%2FyOJEUoFuC%2F%2BwVkOeTwKA6nmFIe1ZbUf1odlfjixowqZ5zqFF5o9rv3eT2AhnCaJCOo3Hj3cVOtNHZnfRnHJO8FWoUXTq5ToItngw%2F6zuSkQNEL6SwZUPanuOVexcK7D%2B3XqraHxhOnjcETQmmVk%2FsLk1CepEMn75d4hJQMKyOwsIGOqUBBheLAzgyD%2Bf%2FzsXcq8TYebZvxvsyWXsAeh8wiinVKBU8j%2BPqnGOB5K2hgCilmjs0IQlfEjSMTmbbF9483ApIfxl5fpxeaQXVS%2BF4bRbLF13MKjkKXQTXZ4PU6h5Kx9%2B78MTwfwDl6pyH3tsLk6KcqFRScLHxmaVS38vYDjJCsWLIuHPRx6M5RAlVYx%2FT9c71qsxHXseXtYiuqNOQMTxUDLIHCfTN&X-Amz-Signature=48e0cd758ee1cc8355f7e5dd9507ab84dcb50792755352df262d4c21165d0d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQVX2LI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBOrRCCIt4bLlb%2B8fjxQAIwlYszaOGLKpXrodJXt8sG8AiEAr9ZFddn668mJjUXTzhrjUMEDfXMpOJ41lLCQ2RKuQtcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6XobURzEP3OrH4%2FircA3JfSwZq2aP0EuNbYueGkd%2BSiYKjCzSZBfO%2F%2BIxjIb7JIDY%2BBb9qgCm1W8hAPZYK7FwcgtIORvFOnHl3h8oHv1MUUV2yKXYphFlwmsX4W0YkeXB%2BX6phvMZVUpiajIsM8gVV1KWpMR8MqG5QAgd9lftszjBEO4%2Fg3BhsCNFQwQV3kGs7SVh9Nb5exPcDTZvXcyXL1Xk4%2FVof4NgtuA2yQqXNreY%2BA8XlEncAFOXFAQ0cnVxmoLaPMWd2O8cTPhdlLrfRObti4NTSDaxFM4lSWn1VNmoxR2oAXwwi2lO3rHvpndbjIXCBGyajHq3Ia9r4eljMCjD6SlFMi37eIfm0GbqPn%2Bhckk4eFrB7RbcWtfKluwSr41WvzNlEq%2BBbqlrolFgtFRk%2FwAPLW%2FKqrrLSW4eBMpdGjprp7NhebNm%2F3BjVuzBgBLOAEdxi3cXeL3nX8xZeUPuFz4sgYAuc2BfHr7%2FyOJEUoFuC%2F%2BwVkOeTwKA6nmFIe1ZbUf1odlfjixowqZ5zqFF5o9rv3eT2AhnCaJCOo3Hj3cVOtNHZnfRnHJO8FWoUXTq5ToItngw%2F6zuSkQNEL6SwZUPanuOVexcK7D%2B3XqraHxhOnjcETQmmVk%2FsLk1CepEMn75d4hJQMKyOwsIGOqUBBheLAzgyD%2Bf%2FzsXcq8TYebZvxvsyWXsAeh8wiinVKBU8j%2BPqnGOB5K2hgCilmjs0IQlfEjSMTmbbF9483ApIfxl5fpxeaQXVS%2BF4bRbLF13MKjkKXQTXZ4PU6h5Kx9%2B78MTwfwDl6pyH3tsLk6KcqFRScLHxmaVS38vYDjJCsWLIuHPRx6M5RAlVYx%2FT9c71qsxHXseXtYiuqNOQMTxUDLIHCfTN&X-Amz-Signature=0b09fe3bce3daf25f7d8ca3d406328f26f8ad764514513ef0878fd41225b1705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQVX2LI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBOrRCCIt4bLlb%2B8fjxQAIwlYszaOGLKpXrodJXt8sG8AiEAr9ZFddn668mJjUXTzhrjUMEDfXMpOJ41lLCQ2RKuQtcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6XobURzEP3OrH4%2FircA3JfSwZq2aP0EuNbYueGkd%2BSiYKjCzSZBfO%2F%2BIxjIb7JIDY%2BBb9qgCm1W8hAPZYK7FwcgtIORvFOnHl3h8oHv1MUUV2yKXYphFlwmsX4W0YkeXB%2BX6phvMZVUpiajIsM8gVV1KWpMR8MqG5QAgd9lftszjBEO4%2Fg3BhsCNFQwQV3kGs7SVh9Nb5exPcDTZvXcyXL1Xk4%2FVof4NgtuA2yQqXNreY%2BA8XlEncAFOXFAQ0cnVxmoLaPMWd2O8cTPhdlLrfRObti4NTSDaxFM4lSWn1VNmoxR2oAXwwi2lO3rHvpndbjIXCBGyajHq3Ia9r4eljMCjD6SlFMi37eIfm0GbqPn%2Bhckk4eFrB7RbcWtfKluwSr41WvzNlEq%2BBbqlrolFgtFRk%2FwAPLW%2FKqrrLSW4eBMpdGjprp7NhebNm%2F3BjVuzBgBLOAEdxi3cXeL3nX8xZeUPuFz4sgYAuc2BfHr7%2FyOJEUoFuC%2F%2BwVkOeTwKA6nmFIe1ZbUf1odlfjixowqZ5zqFF5o9rv3eT2AhnCaJCOo3Hj3cVOtNHZnfRnHJO8FWoUXTq5ToItngw%2F6zuSkQNEL6SwZUPanuOVexcK7D%2B3XqraHxhOnjcETQmmVk%2FsLk1CepEMn75d4hJQMKyOwsIGOqUBBheLAzgyD%2Bf%2FzsXcq8TYebZvxvsyWXsAeh8wiinVKBU8j%2BPqnGOB5K2hgCilmjs0IQlfEjSMTmbbF9483ApIfxl5fpxeaQXVS%2BF4bRbLF13MKjkKXQTXZ4PU6h5Kx9%2B78MTwfwDl6pyH3tsLk6KcqFRScLHxmaVS38vYDjJCsWLIuHPRx6M5RAlVYx%2FT9c71qsxHXseXtYiuqNOQMTxUDLIHCfTN&X-Amz-Signature=73ef2b9d006d9cc9254ef1bcf9e5b79c850a3bcd7c1f1b321ea6690ec9509530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQVX2LI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBOrRCCIt4bLlb%2B8fjxQAIwlYszaOGLKpXrodJXt8sG8AiEAr9ZFddn668mJjUXTzhrjUMEDfXMpOJ41lLCQ2RKuQtcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6XobURzEP3OrH4%2FircA3JfSwZq2aP0EuNbYueGkd%2BSiYKjCzSZBfO%2F%2BIxjIb7JIDY%2BBb9qgCm1W8hAPZYK7FwcgtIORvFOnHl3h8oHv1MUUV2yKXYphFlwmsX4W0YkeXB%2BX6phvMZVUpiajIsM8gVV1KWpMR8MqG5QAgd9lftszjBEO4%2Fg3BhsCNFQwQV3kGs7SVh9Nb5exPcDTZvXcyXL1Xk4%2FVof4NgtuA2yQqXNreY%2BA8XlEncAFOXFAQ0cnVxmoLaPMWd2O8cTPhdlLrfRObti4NTSDaxFM4lSWn1VNmoxR2oAXwwi2lO3rHvpndbjIXCBGyajHq3Ia9r4eljMCjD6SlFMi37eIfm0GbqPn%2Bhckk4eFrB7RbcWtfKluwSr41WvzNlEq%2BBbqlrolFgtFRk%2FwAPLW%2FKqrrLSW4eBMpdGjprp7NhebNm%2F3BjVuzBgBLOAEdxi3cXeL3nX8xZeUPuFz4sgYAuc2BfHr7%2FyOJEUoFuC%2F%2BwVkOeTwKA6nmFIe1ZbUf1odlfjixowqZ5zqFF5o9rv3eT2AhnCaJCOo3Hj3cVOtNHZnfRnHJO8FWoUXTq5ToItngw%2F6zuSkQNEL6SwZUPanuOVexcK7D%2B3XqraHxhOnjcETQmmVk%2FsLk1CepEMn75d4hJQMKyOwsIGOqUBBheLAzgyD%2Bf%2FzsXcq8TYebZvxvsyWXsAeh8wiinVKBU8j%2BPqnGOB5K2hgCilmjs0IQlfEjSMTmbbF9483ApIfxl5fpxeaQXVS%2BF4bRbLF13MKjkKXQTXZ4PU6h5Kx9%2B78MTwfwDl6pyH3tsLk6KcqFRScLHxmaVS38vYDjJCsWLIuHPRx6M5RAlVYx%2FT9c71qsxHXseXtYiuqNOQMTxUDLIHCfTN&X-Amz-Signature=821c7a86c56ec40e060c5519b8884b54f9c7749406e88497cde5172682ac51be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQVX2LI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBOrRCCIt4bLlb%2B8fjxQAIwlYszaOGLKpXrodJXt8sG8AiEAr9ZFddn668mJjUXTzhrjUMEDfXMpOJ41lLCQ2RKuQtcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6XobURzEP3OrH4%2FircA3JfSwZq2aP0EuNbYueGkd%2BSiYKjCzSZBfO%2F%2BIxjIb7JIDY%2BBb9qgCm1W8hAPZYK7FwcgtIORvFOnHl3h8oHv1MUUV2yKXYphFlwmsX4W0YkeXB%2BX6phvMZVUpiajIsM8gVV1KWpMR8MqG5QAgd9lftszjBEO4%2Fg3BhsCNFQwQV3kGs7SVh9Nb5exPcDTZvXcyXL1Xk4%2FVof4NgtuA2yQqXNreY%2BA8XlEncAFOXFAQ0cnVxmoLaPMWd2O8cTPhdlLrfRObti4NTSDaxFM4lSWn1VNmoxR2oAXwwi2lO3rHvpndbjIXCBGyajHq3Ia9r4eljMCjD6SlFMi37eIfm0GbqPn%2Bhckk4eFrB7RbcWtfKluwSr41WvzNlEq%2BBbqlrolFgtFRk%2FwAPLW%2FKqrrLSW4eBMpdGjprp7NhebNm%2F3BjVuzBgBLOAEdxi3cXeL3nX8xZeUPuFz4sgYAuc2BfHr7%2FyOJEUoFuC%2F%2BwVkOeTwKA6nmFIe1ZbUf1odlfjixowqZ5zqFF5o9rv3eT2AhnCaJCOo3Hj3cVOtNHZnfRnHJO8FWoUXTq5ToItngw%2F6zuSkQNEL6SwZUPanuOVexcK7D%2B3XqraHxhOnjcETQmmVk%2FsLk1CepEMn75d4hJQMKyOwsIGOqUBBheLAzgyD%2Bf%2FzsXcq8TYebZvxvsyWXsAeh8wiinVKBU8j%2BPqnGOB5K2hgCilmjs0IQlfEjSMTmbbF9483ApIfxl5fpxeaQXVS%2BF4bRbLF13MKjkKXQTXZ4PU6h5Kx9%2B78MTwfwDl6pyH3tsLk6KcqFRScLHxmaVS38vYDjJCsWLIuHPRx6M5RAlVYx%2FT9c71qsxHXseXtYiuqNOQMTxUDLIHCfTN&X-Amz-Signature=d2cc1b740f6cea15805fefd167d8e86ff0a9a6f39c3c7af6d13a2b4e6aafc30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
