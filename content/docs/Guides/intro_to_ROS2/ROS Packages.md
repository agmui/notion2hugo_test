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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDPBIKE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcafby3dXCGxU5P11pIFPVS4nQtpNKHX5KQeI9JVh%2BrgIgKpa%2FMmKHQ5KigYjbUMmP4cwsx2uZ48T2V85TSJKa1Zgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIkfkP7QPbdRsAajhCrcA7pYQJFJhtRYnckl2hk2dXWWqdgk5HY3M4OKkWL2qAbp0p%2FYqah%2FQKnyh%2Bhanxd1i6pCpSencwJAh12g%2BO0r5H6Se4ov2P3faHMtVohsUM%2BIhl2NcmJkObP7xhgjKfsreK44%2FzB5FZBW%2BSEI6%2FlaKRJ9JRqh0MJuVulMOQsf7aPUG0xAwB0u4lncE7WZ97HNPhjcCEWdmoLl9%2FFUb5j5m0FANmUxV6HN4tjMqVU4cL2J9itiDzdPa5LD0%2FcYwm0RL4obAcIesDkHAxZOErmV4lOhfTEXhqeWKzUOszYicDmAfBsjMiwwNSM0x46ff1zb%2FWB6tVHHWXy%2B0YI1%2B5AQY0r%2Bd1g%2FhzZ1crRQ6%2B7WGyNN2m7hMeDsBEmPmUT8zGRVK0IoGkiw%2B3Go51MpaGf5p%2B5Bfw5xx2JGgWC%2BYpWek9H6k5aMyiegloO2VP%2FvqzSMW4s%2BFAZhGyvs0eQtITP3K1Z%2Bz1QVPaFqkSHGJgGzLA2Y052%2Bz1hKjJIdvoHB65%2Bt2cboq1Qa38LoHmYVi%2Fg6Xz3Zq5r8UuDFSjkkQSbICKHSY%2FJlv%2Ba3lbjTuo%2BRFqb2IPMF9EqwZSOERgIqbrALTb2zXuIA1pUVWPbenNq04QLe7ojj8U%2F1q6USKD%2FXMK%2BT2r4GOqUBJ2vCkUcFuT6eoSjeJnmckuEXEO%2F44ar3nW3yvigxbg4vS6eNnM3c3xBXUdzqlnYFwBPMP2%2FV%2Fk4%2BNsFWeaIDRZNI%2FhM9zLr8%2B%2F23ZK5zNFFvfoMWzlhkrmic5YPqFWqLiTNi2jki4hX%2F%2Fjtxa0BKB9V%2FEcb0vdU3rasq3NIjE9Uv7JIRHpi2u76ny5ECgUSCrpZXhqAVKfDAR7ahCJpXEDrxx7nv&X-Amz-Signature=c7646f8f63d1f610b836cf5f99cc859b9fcd6fb987f8ff9897edcdd960d0ee35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDPBIKE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcafby3dXCGxU5P11pIFPVS4nQtpNKHX5KQeI9JVh%2BrgIgKpa%2FMmKHQ5KigYjbUMmP4cwsx2uZ48T2V85TSJKa1Zgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIkfkP7QPbdRsAajhCrcA7pYQJFJhtRYnckl2hk2dXWWqdgk5HY3M4OKkWL2qAbp0p%2FYqah%2FQKnyh%2Bhanxd1i6pCpSencwJAh12g%2BO0r5H6Se4ov2P3faHMtVohsUM%2BIhl2NcmJkObP7xhgjKfsreK44%2FzB5FZBW%2BSEI6%2FlaKRJ9JRqh0MJuVulMOQsf7aPUG0xAwB0u4lncE7WZ97HNPhjcCEWdmoLl9%2FFUb5j5m0FANmUxV6HN4tjMqVU4cL2J9itiDzdPa5LD0%2FcYwm0RL4obAcIesDkHAxZOErmV4lOhfTEXhqeWKzUOszYicDmAfBsjMiwwNSM0x46ff1zb%2FWB6tVHHWXy%2B0YI1%2B5AQY0r%2Bd1g%2FhzZ1crRQ6%2B7WGyNN2m7hMeDsBEmPmUT8zGRVK0IoGkiw%2B3Go51MpaGf5p%2B5Bfw5xx2JGgWC%2BYpWek9H6k5aMyiegloO2VP%2FvqzSMW4s%2BFAZhGyvs0eQtITP3K1Z%2Bz1QVPaFqkSHGJgGzLA2Y052%2Bz1hKjJIdvoHB65%2Bt2cboq1Qa38LoHmYVi%2Fg6Xz3Zq5r8UuDFSjkkQSbICKHSY%2FJlv%2Ba3lbjTuo%2BRFqb2IPMF9EqwZSOERgIqbrALTb2zXuIA1pUVWPbenNq04QLe7ojj8U%2F1q6USKD%2FXMK%2BT2r4GOqUBJ2vCkUcFuT6eoSjeJnmckuEXEO%2F44ar3nW3yvigxbg4vS6eNnM3c3xBXUdzqlnYFwBPMP2%2FV%2Fk4%2BNsFWeaIDRZNI%2FhM9zLr8%2B%2F23ZK5zNFFvfoMWzlhkrmic5YPqFWqLiTNi2jki4hX%2F%2Fjtxa0BKB9V%2FEcb0vdU3rasq3NIjE9Uv7JIRHpi2u76ny5ECgUSCrpZXhqAVKfDAR7ahCJpXEDrxx7nv&X-Amz-Signature=7beaa97ab81ce3e36a70d4dfb0100fa65a3a0f16d47a89091a21b5d39f8220f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDPBIKE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcafby3dXCGxU5P11pIFPVS4nQtpNKHX5KQeI9JVh%2BrgIgKpa%2FMmKHQ5KigYjbUMmP4cwsx2uZ48T2V85TSJKa1Zgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIkfkP7QPbdRsAajhCrcA7pYQJFJhtRYnckl2hk2dXWWqdgk5HY3M4OKkWL2qAbp0p%2FYqah%2FQKnyh%2Bhanxd1i6pCpSencwJAh12g%2BO0r5H6Se4ov2P3faHMtVohsUM%2BIhl2NcmJkObP7xhgjKfsreK44%2FzB5FZBW%2BSEI6%2FlaKRJ9JRqh0MJuVulMOQsf7aPUG0xAwB0u4lncE7WZ97HNPhjcCEWdmoLl9%2FFUb5j5m0FANmUxV6HN4tjMqVU4cL2J9itiDzdPa5LD0%2FcYwm0RL4obAcIesDkHAxZOErmV4lOhfTEXhqeWKzUOszYicDmAfBsjMiwwNSM0x46ff1zb%2FWB6tVHHWXy%2B0YI1%2B5AQY0r%2Bd1g%2FhzZ1crRQ6%2B7WGyNN2m7hMeDsBEmPmUT8zGRVK0IoGkiw%2B3Go51MpaGf5p%2B5Bfw5xx2JGgWC%2BYpWek9H6k5aMyiegloO2VP%2FvqzSMW4s%2BFAZhGyvs0eQtITP3K1Z%2Bz1QVPaFqkSHGJgGzLA2Y052%2Bz1hKjJIdvoHB65%2Bt2cboq1Qa38LoHmYVi%2Fg6Xz3Zq5r8UuDFSjkkQSbICKHSY%2FJlv%2Ba3lbjTuo%2BRFqb2IPMF9EqwZSOERgIqbrALTb2zXuIA1pUVWPbenNq04QLe7ojj8U%2F1q6USKD%2FXMK%2BT2r4GOqUBJ2vCkUcFuT6eoSjeJnmckuEXEO%2F44ar3nW3yvigxbg4vS6eNnM3c3xBXUdzqlnYFwBPMP2%2FV%2Fk4%2BNsFWeaIDRZNI%2FhM9zLr8%2B%2F23ZK5zNFFvfoMWzlhkrmic5YPqFWqLiTNi2jki4hX%2F%2Fjtxa0BKB9V%2FEcb0vdU3rasq3NIjE9Uv7JIRHpi2u76ny5ECgUSCrpZXhqAVKfDAR7ahCJpXEDrxx7nv&X-Amz-Signature=e5bf618cb6754c06c84f1a135078b1bd87594541fa20886fc718a4b56e1dd1af&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDPBIKE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcafby3dXCGxU5P11pIFPVS4nQtpNKHX5KQeI9JVh%2BrgIgKpa%2FMmKHQ5KigYjbUMmP4cwsx2uZ48T2V85TSJKa1Zgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIkfkP7QPbdRsAajhCrcA7pYQJFJhtRYnckl2hk2dXWWqdgk5HY3M4OKkWL2qAbp0p%2FYqah%2FQKnyh%2Bhanxd1i6pCpSencwJAh12g%2BO0r5H6Se4ov2P3faHMtVohsUM%2BIhl2NcmJkObP7xhgjKfsreK44%2FzB5FZBW%2BSEI6%2FlaKRJ9JRqh0MJuVulMOQsf7aPUG0xAwB0u4lncE7WZ97HNPhjcCEWdmoLl9%2FFUb5j5m0FANmUxV6HN4tjMqVU4cL2J9itiDzdPa5LD0%2FcYwm0RL4obAcIesDkHAxZOErmV4lOhfTEXhqeWKzUOszYicDmAfBsjMiwwNSM0x46ff1zb%2FWB6tVHHWXy%2B0YI1%2B5AQY0r%2Bd1g%2FhzZ1crRQ6%2B7WGyNN2m7hMeDsBEmPmUT8zGRVK0IoGkiw%2B3Go51MpaGf5p%2B5Bfw5xx2JGgWC%2BYpWek9H6k5aMyiegloO2VP%2FvqzSMW4s%2BFAZhGyvs0eQtITP3K1Z%2Bz1QVPaFqkSHGJgGzLA2Y052%2Bz1hKjJIdvoHB65%2Bt2cboq1Qa38LoHmYVi%2Fg6Xz3Zq5r8UuDFSjkkQSbICKHSY%2FJlv%2Ba3lbjTuo%2BRFqb2IPMF9EqwZSOERgIqbrALTb2zXuIA1pUVWPbenNq04QLe7ojj8U%2F1q6USKD%2FXMK%2BT2r4GOqUBJ2vCkUcFuT6eoSjeJnmckuEXEO%2F44ar3nW3yvigxbg4vS6eNnM3c3xBXUdzqlnYFwBPMP2%2FV%2Fk4%2BNsFWeaIDRZNI%2FhM9zLr8%2B%2F23ZK5zNFFvfoMWzlhkrmic5YPqFWqLiTNi2jki4hX%2F%2Fjtxa0BKB9V%2FEcb0vdU3rasq3NIjE9Uv7JIRHpi2u76ny5ECgUSCrpZXhqAVKfDAR7ahCJpXEDrxx7nv&X-Amz-Signature=84d0c2b850b1eb7934f35562532581647b28467135ce12ab09e97d2df5178cba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDPBIKE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcafby3dXCGxU5P11pIFPVS4nQtpNKHX5KQeI9JVh%2BrgIgKpa%2FMmKHQ5KigYjbUMmP4cwsx2uZ48T2V85TSJKa1Zgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIkfkP7QPbdRsAajhCrcA7pYQJFJhtRYnckl2hk2dXWWqdgk5HY3M4OKkWL2qAbp0p%2FYqah%2FQKnyh%2Bhanxd1i6pCpSencwJAh12g%2BO0r5H6Se4ov2P3faHMtVohsUM%2BIhl2NcmJkObP7xhgjKfsreK44%2FzB5FZBW%2BSEI6%2FlaKRJ9JRqh0MJuVulMOQsf7aPUG0xAwB0u4lncE7WZ97HNPhjcCEWdmoLl9%2FFUb5j5m0FANmUxV6HN4tjMqVU4cL2J9itiDzdPa5LD0%2FcYwm0RL4obAcIesDkHAxZOErmV4lOhfTEXhqeWKzUOszYicDmAfBsjMiwwNSM0x46ff1zb%2FWB6tVHHWXy%2B0YI1%2B5AQY0r%2Bd1g%2FhzZ1crRQ6%2B7WGyNN2m7hMeDsBEmPmUT8zGRVK0IoGkiw%2B3Go51MpaGf5p%2B5Bfw5xx2JGgWC%2BYpWek9H6k5aMyiegloO2VP%2FvqzSMW4s%2BFAZhGyvs0eQtITP3K1Z%2Bz1QVPaFqkSHGJgGzLA2Y052%2Bz1hKjJIdvoHB65%2Bt2cboq1Qa38LoHmYVi%2Fg6Xz3Zq5r8UuDFSjkkQSbICKHSY%2FJlv%2Ba3lbjTuo%2BRFqb2IPMF9EqwZSOERgIqbrALTb2zXuIA1pUVWPbenNq04QLe7ojj8U%2F1q6USKD%2FXMK%2BT2r4GOqUBJ2vCkUcFuT6eoSjeJnmckuEXEO%2F44ar3nW3yvigxbg4vS6eNnM3c3xBXUdzqlnYFwBPMP2%2FV%2Fk4%2BNsFWeaIDRZNI%2FhM9zLr8%2B%2F23ZK5zNFFvfoMWzlhkrmic5YPqFWqLiTNi2jki4hX%2F%2Fjtxa0BKB9V%2FEcb0vdU3rasq3NIjE9Uv7JIRHpi2u76ny5ECgUSCrpZXhqAVKfDAR7ahCJpXEDrxx7nv&X-Amz-Signature=589ad7576c099a5aaa782a09bd174fbc3c03860e8e691ddd39355b3d23409c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDPBIKE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcafby3dXCGxU5P11pIFPVS4nQtpNKHX5KQeI9JVh%2BrgIgKpa%2FMmKHQ5KigYjbUMmP4cwsx2uZ48T2V85TSJKa1Zgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIkfkP7QPbdRsAajhCrcA7pYQJFJhtRYnckl2hk2dXWWqdgk5HY3M4OKkWL2qAbp0p%2FYqah%2FQKnyh%2Bhanxd1i6pCpSencwJAh12g%2BO0r5H6Se4ov2P3faHMtVohsUM%2BIhl2NcmJkObP7xhgjKfsreK44%2FzB5FZBW%2BSEI6%2FlaKRJ9JRqh0MJuVulMOQsf7aPUG0xAwB0u4lncE7WZ97HNPhjcCEWdmoLl9%2FFUb5j5m0FANmUxV6HN4tjMqVU4cL2J9itiDzdPa5LD0%2FcYwm0RL4obAcIesDkHAxZOErmV4lOhfTEXhqeWKzUOszYicDmAfBsjMiwwNSM0x46ff1zb%2FWB6tVHHWXy%2B0YI1%2B5AQY0r%2Bd1g%2FhzZ1crRQ6%2B7WGyNN2m7hMeDsBEmPmUT8zGRVK0IoGkiw%2B3Go51MpaGf5p%2B5Bfw5xx2JGgWC%2BYpWek9H6k5aMyiegloO2VP%2FvqzSMW4s%2BFAZhGyvs0eQtITP3K1Z%2Bz1QVPaFqkSHGJgGzLA2Y052%2Bz1hKjJIdvoHB65%2Bt2cboq1Qa38LoHmYVi%2Fg6Xz3Zq5r8UuDFSjkkQSbICKHSY%2FJlv%2Ba3lbjTuo%2BRFqb2IPMF9EqwZSOERgIqbrALTb2zXuIA1pUVWPbenNq04QLe7ojj8U%2F1q6USKD%2FXMK%2BT2r4GOqUBJ2vCkUcFuT6eoSjeJnmckuEXEO%2F44ar3nW3yvigxbg4vS6eNnM3c3xBXUdzqlnYFwBPMP2%2FV%2Fk4%2BNsFWeaIDRZNI%2FhM9zLr8%2B%2F23ZK5zNFFvfoMWzlhkrmic5YPqFWqLiTNi2jki4hX%2F%2Fjtxa0BKB9V%2FEcb0vdU3rasq3NIjE9Uv7JIRHpi2u76ny5ECgUSCrpZXhqAVKfDAR7ahCJpXEDrxx7nv&X-Amz-Signature=2c8be7fdb7133659ec0c0d56d1f3ac4025e8fd5e6f2bd7bf9df1a2700e7db64a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDPBIKE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcafby3dXCGxU5P11pIFPVS4nQtpNKHX5KQeI9JVh%2BrgIgKpa%2FMmKHQ5KigYjbUMmP4cwsx2uZ48T2V85TSJKa1Zgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIkfkP7QPbdRsAajhCrcA7pYQJFJhtRYnckl2hk2dXWWqdgk5HY3M4OKkWL2qAbp0p%2FYqah%2FQKnyh%2Bhanxd1i6pCpSencwJAh12g%2BO0r5H6Se4ov2P3faHMtVohsUM%2BIhl2NcmJkObP7xhgjKfsreK44%2FzB5FZBW%2BSEI6%2FlaKRJ9JRqh0MJuVulMOQsf7aPUG0xAwB0u4lncE7WZ97HNPhjcCEWdmoLl9%2FFUb5j5m0FANmUxV6HN4tjMqVU4cL2J9itiDzdPa5LD0%2FcYwm0RL4obAcIesDkHAxZOErmV4lOhfTEXhqeWKzUOszYicDmAfBsjMiwwNSM0x46ff1zb%2FWB6tVHHWXy%2B0YI1%2B5AQY0r%2Bd1g%2FhzZ1crRQ6%2B7WGyNN2m7hMeDsBEmPmUT8zGRVK0IoGkiw%2B3Go51MpaGf5p%2B5Bfw5xx2JGgWC%2BYpWek9H6k5aMyiegloO2VP%2FvqzSMW4s%2BFAZhGyvs0eQtITP3K1Z%2Bz1QVPaFqkSHGJgGzLA2Y052%2Bz1hKjJIdvoHB65%2Bt2cboq1Qa38LoHmYVi%2Fg6Xz3Zq5r8UuDFSjkkQSbICKHSY%2FJlv%2Ba3lbjTuo%2BRFqb2IPMF9EqwZSOERgIqbrALTb2zXuIA1pUVWPbenNq04QLe7ojj8U%2F1q6USKD%2FXMK%2BT2r4GOqUBJ2vCkUcFuT6eoSjeJnmckuEXEO%2F44ar3nW3yvigxbg4vS6eNnM3c3xBXUdzqlnYFwBPMP2%2FV%2Fk4%2BNsFWeaIDRZNI%2FhM9zLr8%2B%2F23ZK5zNFFvfoMWzlhkrmic5YPqFWqLiTNi2jki4hX%2F%2Fjtxa0BKB9V%2FEcb0vdU3rasq3NIjE9Uv7JIRHpi2u76ny5ECgUSCrpZXhqAVKfDAR7ahCJpXEDrxx7nv&X-Amz-Signature=b24131d7c4affdc78d0131c57f620e31821d0313ad1933f0b08dcfbeb99a4d05&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
