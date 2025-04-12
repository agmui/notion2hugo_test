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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCRP7LK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYsaZcAj5TAzmjNgIJjJhLHZmPne1KymnlGKck6m%2B1rwIgWEcCHblreG7INeME9y0ZJtzgM324F9cf9XTZOfTJ0OAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl0qJAPMnDbBqyNkyrcA6mgZerEO87Ou%2BtnPfD%2BAfwTOi2Agn3xEtBlRvf0RjwbzxH%2FAcliQrmG4nqNa9%2FxnwjZoNdPSyJgClR3PJUbijrA1dW6F0EyhyRHI0HSUAdV%2ByzRDLLwFPD0%2FMLoHgJCD4WthrmwH9GDn6LLnjr9PsB38Hrmsup77fnaScNX8Ix6U3acNSHm%2FcyeQbBaiB2CqHfpwvq%2BpvD%2BhdEUGV8yLBJ0d4NFXyb4LTKcxydXnZppSSA3akmXFdt%2BzI9sfDL3btCxGMbQ39ZDsgQ7pXKwLuVNbufAjgiVHz%2BHxmVY1AqWmhhccayRejDpuO6FsUYY21EomFoaKsVfsmsfhZ8X%2FCxUg48ViEQN3UzJN%2Fn4SxsSnUGAbXcYweyKm0Bk9TPXohaY0G6rKnJLkpkj%2F2JhBftlTAw0Yvg47D3ucuaXJ0lrhgmFPADU3vyOhcRnqBKaKsIVyIGsd3%2FspGXRfyS%2BCVtIdP%2F%2Bv8jiEp1D7m3Dyr7r2cOVco9u3vDOxvSV28LLekY9ZcX1krM7PbrCjIlgd9B6h5wIETHetim8uP1uS1PABQJ6bgs5tIK0udKG10JfAZ2ODimnBVm5FFjGvWEzauf643tMqksqaGon3BuCwfmc9v9vsgFZ0c8Re749MIKx678GOqUB24JDVxPnoekADeVBIXCbyz9qyHGw8FELdWg%2BAAjb%2FvRieQMGDrUGRVyUouO2umQF2HqnWRHDQM8Lx0WemuzCJteBFQTJRLRS4kqFi5uaN1jiSqSuqaG6r1vAr7Q6Hj8CQ9ao4F6ClyZUWfXeAI31teS0oG1FTIh4S%2BfGf7ynlo8PzIAm%2BfrLqMHLAbOhPibpesP%2FPpNm0a%2BIs%2FwewupO3ZIr2ioC&X-Amz-Signature=604a9b6318b9d831ae6944d3bd880635fce24e65a54cdc9e8f30ea5174b2a763&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCRP7LK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYsaZcAj5TAzmjNgIJjJhLHZmPne1KymnlGKck6m%2B1rwIgWEcCHblreG7INeME9y0ZJtzgM324F9cf9XTZOfTJ0OAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl0qJAPMnDbBqyNkyrcA6mgZerEO87Ou%2BtnPfD%2BAfwTOi2Agn3xEtBlRvf0RjwbzxH%2FAcliQrmG4nqNa9%2FxnwjZoNdPSyJgClR3PJUbijrA1dW6F0EyhyRHI0HSUAdV%2ByzRDLLwFPD0%2FMLoHgJCD4WthrmwH9GDn6LLnjr9PsB38Hrmsup77fnaScNX8Ix6U3acNSHm%2FcyeQbBaiB2CqHfpwvq%2BpvD%2BhdEUGV8yLBJ0d4NFXyb4LTKcxydXnZppSSA3akmXFdt%2BzI9sfDL3btCxGMbQ39ZDsgQ7pXKwLuVNbufAjgiVHz%2BHxmVY1AqWmhhccayRejDpuO6FsUYY21EomFoaKsVfsmsfhZ8X%2FCxUg48ViEQN3UzJN%2Fn4SxsSnUGAbXcYweyKm0Bk9TPXohaY0G6rKnJLkpkj%2F2JhBftlTAw0Yvg47D3ucuaXJ0lrhgmFPADU3vyOhcRnqBKaKsIVyIGsd3%2FspGXRfyS%2BCVtIdP%2F%2Bv8jiEp1D7m3Dyr7r2cOVco9u3vDOxvSV28LLekY9ZcX1krM7PbrCjIlgd9B6h5wIETHetim8uP1uS1PABQJ6bgs5tIK0udKG10JfAZ2ODimnBVm5FFjGvWEzauf643tMqksqaGon3BuCwfmc9v9vsgFZ0c8Re749MIKx678GOqUB24JDVxPnoekADeVBIXCbyz9qyHGw8FELdWg%2BAAjb%2FvRieQMGDrUGRVyUouO2umQF2HqnWRHDQM8Lx0WemuzCJteBFQTJRLRS4kqFi5uaN1jiSqSuqaG6r1vAr7Q6Hj8CQ9ao4F6ClyZUWfXeAI31teS0oG1FTIh4S%2BfGf7ynlo8PzIAm%2BfrLqMHLAbOhPibpesP%2FPpNm0a%2BIs%2FwewupO3ZIr2ioC&X-Amz-Signature=c75a177503262b6c1b8a410006c15fb128932b72716c3923a32d487bf37d67c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCRP7LK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYsaZcAj5TAzmjNgIJjJhLHZmPne1KymnlGKck6m%2B1rwIgWEcCHblreG7INeME9y0ZJtzgM324F9cf9XTZOfTJ0OAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl0qJAPMnDbBqyNkyrcA6mgZerEO87Ou%2BtnPfD%2BAfwTOi2Agn3xEtBlRvf0RjwbzxH%2FAcliQrmG4nqNa9%2FxnwjZoNdPSyJgClR3PJUbijrA1dW6F0EyhyRHI0HSUAdV%2ByzRDLLwFPD0%2FMLoHgJCD4WthrmwH9GDn6LLnjr9PsB38Hrmsup77fnaScNX8Ix6U3acNSHm%2FcyeQbBaiB2CqHfpwvq%2BpvD%2BhdEUGV8yLBJ0d4NFXyb4LTKcxydXnZppSSA3akmXFdt%2BzI9sfDL3btCxGMbQ39ZDsgQ7pXKwLuVNbufAjgiVHz%2BHxmVY1AqWmhhccayRejDpuO6FsUYY21EomFoaKsVfsmsfhZ8X%2FCxUg48ViEQN3UzJN%2Fn4SxsSnUGAbXcYweyKm0Bk9TPXohaY0G6rKnJLkpkj%2F2JhBftlTAw0Yvg47D3ucuaXJ0lrhgmFPADU3vyOhcRnqBKaKsIVyIGsd3%2FspGXRfyS%2BCVtIdP%2F%2Bv8jiEp1D7m3Dyr7r2cOVco9u3vDOxvSV28LLekY9ZcX1krM7PbrCjIlgd9B6h5wIETHetim8uP1uS1PABQJ6bgs5tIK0udKG10JfAZ2ODimnBVm5FFjGvWEzauf643tMqksqaGon3BuCwfmc9v9vsgFZ0c8Re749MIKx678GOqUB24JDVxPnoekADeVBIXCbyz9qyHGw8FELdWg%2BAAjb%2FvRieQMGDrUGRVyUouO2umQF2HqnWRHDQM8Lx0WemuzCJteBFQTJRLRS4kqFi5uaN1jiSqSuqaG6r1vAr7Q6Hj8CQ9ao4F6ClyZUWfXeAI31teS0oG1FTIh4S%2BfGf7ynlo8PzIAm%2BfrLqMHLAbOhPibpesP%2FPpNm0a%2BIs%2FwewupO3ZIr2ioC&X-Amz-Signature=04e3fe770df54c974d0e47efe3921ee131c5d8ea078547b76921e7c9b0a8367f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCRP7LK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYsaZcAj5TAzmjNgIJjJhLHZmPne1KymnlGKck6m%2B1rwIgWEcCHblreG7INeME9y0ZJtzgM324F9cf9XTZOfTJ0OAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl0qJAPMnDbBqyNkyrcA6mgZerEO87Ou%2BtnPfD%2BAfwTOi2Agn3xEtBlRvf0RjwbzxH%2FAcliQrmG4nqNa9%2FxnwjZoNdPSyJgClR3PJUbijrA1dW6F0EyhyRHI0HSUAdV%2ByzRDLLwFPD0%2FMLoHgJCD4WthrmwH9GDn6LLnjr9PsB38Hrmsup77fnaScNX8Ix6U3acNSHm%2FcyeQbBaiB2CqHfpwvq%2BpvD%2BhdEUGV8yLBJ0d4NFXyb4LTKcxydXnZppSSA3akmXFdt%2BzI9sfDL3btCxGMbQ39ZDsgQ7pXKwLuVNbufAjgiVHz%2BHxmVY1AqWmhhccayRejDpuO6FsUYY21EomFoaKsVfsmsfhZ8X%2FCxUg48ViEQN3UzJN%2Fn4SxsSnUGAbXcYweyKm0Bk9TPXohaY0G6rKnJLkpkj%2F2JhBftlTAw0Yvg47D3ucuaXJ0lrhgmFPADU3vyOhcRnqBKaKsIVyIGsd3%2FspGXRfyS%2BCVtIdP%2F%2Bv8jiEp1D7m3Dyr7r2cOVco9u3vDOxvSV28LLekY9ZcX1krM7PbrCjIlgd9B6h5wIETHetim8uP1uS1PABQJ6bgs5tIK0udKG10JfAZ2ODimnBVm5FFjGvWEzauf643tMqksqaGon3BuCwfmc9v9vsgFZ0c8Re749MIKx678GOqUB24JDVxPnoekADeVBIXCbyz9qyHGw8FELdWg%2BAAjb%2FvRieQMGDrUGRVyUouO2umQF2HqnWRHDQM8Lx0WemuzCJteBFQTJRLRS4kqFi5uaN1jiSqSuqaG6r1vAr7Q6Hj8CQ9ao4F6ClyZUWfXeAI31teS0oG1FTIh4S%2BfGf7ynlo8PzIAm%2BfrLqMHLAbOhPibpesP%2FPpNm0a%2BIs%2FwewupO3ZIr2ioC&X-Amz-Signature=e48853dbf701a2cfc346b7063631436beb75c825843a0ec17cab0ec4d0f90cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCRP7LK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYsaZcAj5TAzmjNgIJjJhLHZmPne1KymnlGKck6m%2B1rwIgWEcCHblreG7INeME9y0ZJtzgM324F9cf9XTZOfTJ0OAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl0qJAPMnDbBqyNkyrcA6mgZerEO87Ou%2BtnPfD%2BAfwTOi2Agn3xEtBlRvf0RjwbzxH%2FAcliQrmG4nqNa9%2FxnwjZoNdPSyJgClR3PJUbijrA1dW6F0EyhyRHI0HSUAdV%2ByzRDLLwFPD0%2FMLoHgJCD4WthrmwH9GDn6LLnjr9PsB38Hrmsup77fnaScNX8Ix6U3acNSHm%2FcyeQbBaiB2CqHfpwvq%2BpvD%2BhdEUGV8yLBJ0d4NFXyb4LTKcxydXnZppSSA3akmXFdt%2BzI9sfDL3btCxGMbQ39ZDsgQ7pXKwLuVNbufAjgiVHz%2BHxmVY1AqWmhhccayRejDpuO6FsUYY21EomFoaKsVfsmsfhZ8X%2FCxUg48ViEQN3UzJN%2Fn4SxsSnUGAbXcYweyKm0Bk9TPXohaY0G6rKnJLkpkj%2F2JhBftlTAw0Yvg47D3ucuaXJ0lrhgmFPADU3vyOhcRnqBKaKsIVyIGsd3%2FspGXRfyS%2BCVtIdP%2F%2Bv8jiEp1D7m3Dyr7r2cOVco9u3vDOxvSV28LLekY9ZcX1krM7PbrCjIlgd9B6h5wIETHetim8uP1uS1PABQJ6bgs5tIK0udKG10JfAZ2ODimnBVm5FFjGvWEzauf643tMqksqaGon3BuCwfmc9v9vsgFZ0c8Re749MIKx678GOqUB24JDVxPnoekADeVBIXCbyz9qyHGw8FELdWg%2BAAjb%2FvRieQMGDrUGRVyUouO2umQF2HqnWRHDQM8Lx0WemuzCJteBFQTJRLRS4kqFi5uaN1jiSqSuqaG6r1vAr7Q6Hj8CQ9ao4F6ClyZUWfXeAI31teS0oG1FTIh4S%2BfGf7ynlo8PzIAm%2BfrLqMHLAbOhPibpesP%2FPpNm0a%2BIs%2FwewupO3ZIr2ioC&X-Amz-Signature=82b602a63b3369de7e2643170d9f0a21920d99b97ddcbda3bab266d726b4525b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCRP7LK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYsaZcAj5TAzmjNgIJjJhLHZmPne1KymnlGKck6m%2B1rwIgWEcCHblreG7INeME9y0ZJtzgM324F9cf9XTZOfTJ0OAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl0qJAPMnDbBqyNkyrcA6mgZerEO87Ou%2BtnPfD%2BAfwTOi2Agn3xEtBlRvf0RjwbzxH%2FAcliQrmG4nqNa9%2FxnwjZoNdPSyJgClR3PJUbijrA1dW6F0EyhyRHI0HSUAdV%2ByzRDLLwFPD0%2FMLoHgJCD4WthrmwH9GDn6LLnjr9PsB38Hrmsup77fnaScNX8Ix6U3acNSHm%2FcyeQbBaiB2CqHfpwvq%2BpvD%2BhdEUGV8yLBJ0d4NFXyb4LTKcxydXnZppSSA3akmXFdt%2BzI9sfDL3btCxGMbQ39ZDsgQ7pXKwLuVNbufAjgiVHz%2BHxmVY1AqWmhhccayRejDpuO6FsUYY21EomFoaKsVfsmsfhZ8X%2FCxUg48ViEQN3UzJN%2Fn4SxsSnUGAbXcYweyKm0Bk9TPXohaY0G6rKnJLkpkj%2F2JhBftlTAw0Yvg47D3ucuaXJ0lrhgmFPADU3vyOhcRnqBKaKsIVyIGsd3%2FspGXRfyS%2BCVtIdP%2F%2Bv8jiEp1D7m3Dyr7r2cOVco9u3vDOxvSV28LLekY9ZcX1krM7PbrCjIlgd9B6h5wIETHetim8uP1uS1PABQJ6bgs5tIK0udKG10JfAZ2ODimnBVm5FFjGvWEzauf643tMqksqaGon3BuCwfmc9v9vsgFZ0c8Re749MIKx678GOqUB24JDVxPnoekADeVBIXCbyz9qyHGw8FELdWg%2BAAjb%2FvRieQMGDrUGRVyUouO2umQF2HqnWRHDQM8Lx0WemuzCJteBFQTJRLRS4kqFi5uaN1jiSqSuqaG6r1vAr7Q6Hj8CQ9ao4F6ClyZUWfXeAI31teS0oG1FTIh4S%2BfGf7ynlo8PzIAm%2BfrLqMHLAbOhPibpesP%2FPpNm0a%2BIs%2FwewupO3ZIr2ioC&X-Amz-Signature=b0568c16e7e23cbf12a29fc78164901e3e3d61d65870e01b3dbece99a00cbca3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCRP7LK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYsaZcAj5TAzmjNgIJjJhLHZmPne1KymnlGKck6m%2B1rwIgWEcCHblreG7INeME9y0ZJtzgM324F9cf9XTZOfTJ0OAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl0qJAPMnDbBqyNkyrcA6mgZerEO87Ou%2BtnPfD%2BAfwTOi2Agn3xEtBlRvf0RjwbzxH%2FAcliQrmG4nqNa9%2FxnwjZoNdPSyJgClR3PJUbijrA1dW6F0EyhyRHI0HSUAdV%2ByzRDLLwFPD0%2FMLoHgJCD4WthrmwH9GDn6LLnjr9PsB38Hrmsup77fnaScNX8Ix6U3acNSHm%2FcyeQbBaiB2CqHfpwvq%2BpvD%2BhdEUGV8yLBJ0d4NFXyb4LTKcxydXnZppSSA3akmXFdt%2BzI9sfDL3btCxGMbQ39ZDsgQ7pXKwLuVNbufAjgiVHz%2BHxmVY1AqWmhhccayRejDpuO6FsUYY21EomFoaKsVfsmsfhZ8X%2FCxUg48ViEQN3UzJN%2Fn4SxsSnUGAbXcYweyKm0Bk9TPXohaY0G6rKnJLkpkj%2F2JhBftlTAw0Yvg47D3ucuaXJ0lrhgmFPADU3vyOhcRnqBKaKsIVyIGsd3%2FspGXRfyS%2BCVtIdP%2F%2Bv8jiEp1D7m3Dyr7r2cOVco9u3vDOxvSV28LLekY9ZcX1krM7PbrCjIlgd9B6h5wIETHetim8uP1uS1PABQJ6bgs5tIK0udKG10JfAZ2ODimnBVm5FFjGvWEzauf643tMqksqaGon3BuCwfmc9v9vsgFZ0c8Re749MIKx678GOqUB24JDVxPnoekADeVBIXCbyz9qyHGw8FELdWg%2BAAjb%2FvRieQMGDrUGRVyUouO2umQF2HqnWRHDQM8Lx0WemuzCJteBFQTJRLRS4kqFi5uaN1jiSqSuqaG6r1vAr7Q6Hj8CQ9ao4F6ClyZUWfXeAI31teS0oG1FTIh4S%2BfGf7ynlo8PzIAm%2BfrLqMHLAbOhPibpesP%2FPpNm0a%2BIs%2FwewupO3ZIr2ioC&X-Amz-Signature=c3d1e54a5c8f92f1b2e4dada222eeae6ffb6796309ab934e624f4213c8925422&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
