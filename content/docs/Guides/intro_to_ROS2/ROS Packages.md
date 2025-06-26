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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQ3YJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEcu%2F%2BoxX%2FHZiypXw3udkK7Cx9GYnjv2Q27qliyZjTwiAiBi8KACPcDQzGArzB4sCACWCxhdcH5ZydshuFgTRVH5vSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRyrENCN%2B0hbhb4tQKtwDolqg7og2jc1FSnQTfVBlddjs26ZTWZM%2FOZvnyjUFpNbaXvc2J5LIENWTLjFXDGQE3qk7J7sOFzHXY7XV3lSNJMh%2Fp%2Bz1PZMzQ9zpZJpuBbahvoAiTvxayjAxZZ7%2F7AoNTYa4xDEYp%2FEgHd9sR6x1FiKj1tm6EwOmJdU%2BIeDFMczBVx8oogr0IYNDZW0CY1I94bLZbPDaxrDQpdoiAl6r%2BRNK9bXQ6DFKrZ918ZtmfN97ygAUJW990njHSek%2F6mbD4PRX%2FRIf%2FvLvdiDisxREcmnI8ZEpNphCCcrvX8hbXd5A1E7%2BupOmbx1BMwbXpXCrKjzdHboyAW%2BBi8NRkmb2G60AVM6Tmr4vAAWTDrOxQ78BI71nS1pFhD0XJkhkpEEUHM%2F71CwWCrHnE8Ei5xe9vQBexGy17POPH5NxqtRsEhZ2rADqTH8ZkV%2BE6hzwX4MeDFTTC8HWuolDlaHXCbBDOkV1wPLJU%2BcOwFS1y4c06b3WmV2P1i6vv2%2FuBXbcaSDK1aweOVCXdAe0MZs0p8rjX8tK3eqwfWSucA6MeHEE3h%2FoPW1n1lkOslvEAyMr%2BFs1GJyw1%2Fu9OIvW27fnhlRQuWTePUR826NZwCbwdXHEbU8CaQrHV5JORJk4itYw5PT2wgY6pgEg5MVy46AoYjGbRNWZt1oPnZDjkfHpaftRsSqiMrdpXuF5pXK%2FOL37m65lI2uiHDjovHUEI8pFek6%2BneeVy87xx3WeA2W9bPXZSueFlrDSZFqYbvXeSIspxvUaH%2BkgPrveYB1z4Ndfg85JkDLEQaXlwQ07iND9PSfDC%2BkcKJ8e14BWNaeI2KeSYXqqK5gAYx%2FBNlwWsV%2BbXV2vWLC%2FflJmhBP8Xee9&X-Amz-Signature=eb8f4bbfb1699b57a4fd204fac50647ac3da0543046e64671774f9f0191628e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQ3YJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEcu%2F%2BoxX%2FHZiypXw3udkK7Cx9GYnjv2Q27qliyZjTwiAiBi8KACPcDQzGArzB4sCACWCxhdcH5ZydshuFgTRVH5vSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRyrENCN%2B0hbhb4tQKtwDolqg7og2jc1FSnQTfVBlddjs26ZTWZM%2FOZvnyjUFpNbaXvc2J5LIENWTLjFXDGQE3qk7J7sOFzHXY7XV3lSNJMh%2Fp%2Bz1PZMzQ9zpZJpuBbahvoAiTvxayjAxZZ7%2F7AoNTYa4xDEYp%2FEgHd9sR6x1FiKj1tm6EwOmJdU%2BIeDFMczBVx8oogr0IYNDZW0CY1I94bLZbPDaxrDQpdoiAl6r%2BRNK9bXQ6DFKrZ918ZtmfN97ygAUJW990njHSek%2F6mbD4PRX%2FRIf%2FvLvdiDisxREcmnI8ZEpNphCCcrvX8hbXd5A1E7%2BupOmbx1BMwbXpXCrKjzdHboyAW%2BBi8NRkmb2G60AVM6Tmr4vAAWTDrOxQ78BI71nS1pFhD0XJkhkpEEUHM%2F71CwWCrHnE8Ei5xe9vQBexGy17POPH5NxqtRsEhZ2rADqTH8ZkV%2BE6hzwX4MeDFTTC8HWuolDlaHXCbBDOkV1wPLJU%2BcOwFS1y4c06b3WmV2P1i6vv2%2FuBXbcaSDK1aweOVCXdAe0MZs0p8rjX8tK3eqwfWSucA6MeHEE3h%2FoPW1n1lkOslvEAyMr%2BFs1GJyw1%2Fu9OIvW27fnhlRQuWTePUR826NZwCbwdXHEbU8CaQrHV5JORJk4itYw5PT2wgY6pgEg5MVy46AoYjGbRNWZt1oPnZDjkfHpaftRsSqiMrdpXuF5pXK%2FOL37m65lI2uiHDjovHUEI8pFek6%2BneeVy87xx3WeA2W9bPXZSueFlrDSZFqYbvXeSIspxvUaH%2BkgPrveYB1z4Ndfg85JkDLEQaXlwQ07iND9PSfDC%2BkcKJ8e14BWNaeI2KeSYXqqK5gAYx%2FBNlwWsV%2BbXV2vWLC%2FflJmhBP8Xee9&X-Amz-Signature=215f3444a0e7c7d7813d9ce6859aca356b1b267134325633fd161a863f424c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQ3YJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEcu%2F%2BoxX%2FHZiypXw3udkK7Cx9GYnjv2Q27qliyZjTwiAiBi8KACPcDQzGArzB4sCACWCxhdcH5ZydshuFgTRVH5vSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRyrENCN%2B0hbhb4tQKtwDolqg7og2jc1FSnQTfVBlddjs26ZTWZM%2FOZvnyjUFpNbaXvc2J5LIENWTLjFXDGQE3qk7J7sOFzHXY7XV3lSNJMh%2Fp%2Bz1PZMzQ9zpZJpuBbahvoAiTvxayjAxZZ7%2F7AoNTYa4xDEYp%2FEgHd9sR6x1FiKj1tm6EwOmJdU%2BIeDFMczBVx8oogr0IYNDZW0CY1I94bLZbPDaxrDQpdoiAl6r%2BRNK9bXQ6DFKrZ918ZtmfN97ygAUJW990njHSek%2F6mbD4PRX%2FRIf%2FvLvdiDisxREcmnI8ZEpNphCCcrvX8hbXd5A1E7%2BupOmbx1BMwbXpXCrKjzdHboyAW%2BBi8NRkmb2G60AVM6Tmr4vAAWTDrOxQ78BI71nS1pFhD0XJkhkpEEUHM%2F71CwWCrHnE8Ei5xe9vQBexGy17POPH5NxqtRsEhZ2rADqTH8ZkV%2BE6hzwX4MeDFTTC8HWuolDlaHXCbBDOkV1wPLJU%2BcOwFS1y4c06b3WmV2P1i6vv2%2FuBXbcaSDK1aweOVCXdAe0MZs0p8rjX8tK3eqwfWSucA6MeHEE3h%2FoPW1n1lkOslvEAyMr%2BFs1GJyw1%2Fu9OIvW27fnhlRQuWTePUR826NZwCbwdXHEbU8CaQrHV5JORJk4itYw5PT2wgY6pgEg5MVy46AoYjGbRNWZt1oPnZDjkfHpaftRsSqiMrdpXuF5pXK%2FOL37m65lI2uiHDjovHUEI8pFek6%2BneeVy87xx3WeA2W9bPXZSueFlrDSZFqYbvXeSIspxvUaH%2BkgPrveYB1z4Ndfg85JkDLEQaXlwQ07iND9PSfDC%2BkcKJ8e14BWNaeI2KeSYXqqK5gAYx%2FBNlwWsV%2BbXV2vWLC%2FflJmhBP8Xee9&X-Amz-Signature=ac38e1a51992a004299bda024909ea4d77aa0ae2d0847054fa1050418acc5472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQ3YJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEcu%2F%2BoxX%2FHZiypXw3udkK7Cx9GYnjv2Q27qliyZjTwiAiBi8KACPcDQzGArzB4sCACWCxhdcH5ZydshuFgTRVH5vSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRyrENCN%2B0hbhb4tQKtwDolqg7og2jc1FSnQTfVBlddjs26ZTWZM%2FOZvnyjUFpNbaXvc2J5LIENWTLjFXDGQE3qk7J7sOFzHXY7XV3lSNJMh%2Fp%2Bz1PZMzQ9zpZJpuBbahvoAiTvxayjAxZZ7%2F7AoNTYa4xDEYp%2FEgHd9sR6x1FiKj1tm6EwOmJdU%2BIeDFMczBVx8oogr0IYNDZW0CY1I94bLZbPDaxrDQpdoiAl6r%2BRNK9bXQ6DFKrZ918ZtmfN97ygAUJW990njHSek%2F6mbD4PRX%2FRIf%2FvLvdiDisxREcmnI8ZEpNphCCcrvX8hbXd5A1E7%2BupOmbx1BMwbXpXCrKjzdHboyAW%2BBi8NRkmb2G60AVM6Tmr4vAAWTDrOxQ78BI71nS1pFhD0XJkhkpEEUHM%2F71CwWCrHnE8Ei5xe9vQBexGy17POPH5NxqtRsEhZ2rADqTH8ZkV%2BE6hzwX4MeDFTTC8HWuolDlaHXCbBDOkV1wPLJU%2BcOwFS1y4c06b3WmV2P1i6vv2%2FuBXbcaSDK1aweOVCXdAe0MZs0p8rjX8tK3eqwfWSucA6MeHEE3h%2FoPW1n1lkOslvEAyMr%2BFs1GJyw1%2Fu9OIvW27fnhlRQuWTePUR826NZwCbwdXHEbU8CaQrHV5JORJk4itYw5PT2wgY6pgEg5MVy46AoYjGbRNWZt1oPnZDjkfHpaftRsSqiMrdpXuF5pXK%2FOL37m65lI2uiHDjovHUEI8pFek6%2BneeVy87xx3WeA2W9bPXZSueFlrDSZFqYbvXeSIspxvUaH%2BkgPrveYB1z4Ndfg85JkDLEQaXlwQ07iND9PSfDC%2BkcKJ8e14BWNaeI2KeSYXqqK5gAYx%2FBNlwWsV%2BbXV2vWLC%2FflJmhBP8Xee9&X-Amz-Signature=b206b23c15abcd287cf183ba5661214551072ddb8a3081264107ebc7aac8660f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQ3YJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEcu%2F%2BoxX%2FHZiypXw3udkK7Cx9GYnjv2Q27qliyZjTwiAiBi8KACPcDQzGArzB4sCACWCxhdcH5ZydshuFgTRVH5vSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRyrENCN%2B0hbhb4tQKtwDolqg7og2jc1FSnQTfVBlddjs26ZTWZM%2FOZvnyjUFpNbaXvc2J5LIENWTLjFXDGQE3qk7J7sOFzHXY7XV3lSNJMh%2Fp%2Bz1PZMzQ9zpZJpuBbahvoAiTvxayjAxZZ7%2F7AoNTYa4xDEYp%2FEgHd9sR6x1FiKj1tm6EwOmJdU%2BIeDFMczBVx8oogr0IYNDZW0CY1I94bLZbPDaxrDQpdoiAl6r%2BRNK9bXQ6DFKrZ918ZtmfN97ygAUJW990njHSek%2F6mbD4PRX%2FRIf%2FvLvdiDisxREcmnI8ZEpNphCCcrvX8hbXd5A1E7%2BupOmbx1BMwbXpXCrKjzdHboyAW%2BBi8NRkmb2G60AVM6Tmr4vAAWTDrOxQ78BI71nS1pFhD0XJkhkpEEUHM%2F71CwWCrHnE8Ei5xe9vQBexGy17POPH5NxqtRsEhZ2rADqTH8ZkV%2BE6hzwX4MeDFTTC8HWuolDlaHXCbBDOkV1wPLJU%2BcOwFS1y4c06b3WmV2P1i6vv2%2FuBXbcaSDK1aweOVCXdAe0MZs0p8rjX8tK3eqwfWSucA6MeHEE3h%2FoPW1n1lkOslvEAyMr%2BFs1GJyw1%2Fu9OIvW27fnhlRQuWTePUR826NZwCbwdXHEbU8CaQrHV5JORJk4itYw5PT2wgY6pgEg5MVy46AoYjGbRNWZt1oPnZDjkfHpaftRsSqiMrdpXuF5pXK%2FOL37m65lI2uiHDjovHUEI8pFek6%2BneeVy87xx3WeA2W9bPXZSueFlrDSZFqYbvXeSIspxvUaH%2BkgPrveYB1z4Ndfg85JkDLEQaXlwQ07iND9PSfDC%2BkcKJ8e14BWNaeI2KeSYXqqK5gAYx%2FBNlwWsV%2BbXV2vWLC%2FflJmhBP8Xee9&X-Amz-Signature=8659c2711b05c8c994572c900eb65efc0278aa818504d47b481edf99c145355e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQ3YJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEcu%2F%2BoxX%2FHZiypXw3udkK7Cx9GYnjv2Q27qliyZjTwiAiBi8KACPcDQzGArzB4sCACWCxhdcH5ZydshuFgTRVH5vSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRyrENCN%2B0hbhb4tQKtwDolqg7og2jc1FSnQTfVBlddjs26ZTWZM%2FOZvnyjUFpNbaXvc2J5LIENWTLjFXDGQE3qk7J7sOFzHXY7XV3lSNJMh%2Fp%2Bz1PZMzQ9zpZJpuBbahvoAiTvxayjAxZZ7%2F7AoNTYa4xDEYp%2FEgHd9sR6x1FiKj1tm6EwOmJdU%2BIeDFMczBVx8oogr0IYNDZW0CY1I94bLZbPDaxrDQpdoiAl6r%2BRNK9bXQ6DFKrZ918ZtmfN97ygAUJW990njHSek%2F6mbD4PRX%2FRIf%2FvLvdiDisxREcmnI8ZEpNphCCcrvX8hbXd5A1E7%2BupOmbx1BMwbXpXCrKjzdHboyAW%2BBi8NRkmb2G60AVM6Tmr4vAAWTDrOxQ78BI71nS1pFhD0XJkhkpEEUHM%2F71CwWCrHnE8Ei5xe9vQBexGy17POPH5NxqtRsEhZ2rADqTH8ZkV%2BE6hzwX4MeDFTTC8HWuolDlaHXCbBDOkV1wPLJU%2BcOwFS1y4c06b3WmV2P1i6vv2%2FuBXbcaSDK1aweOVCXdAe0MZs0p8rjX8tK3eqwfWSucA6MeHEE3h%2FoPW1n1lkOslvEAyMr%2BFs1GJyw1%2Fu9OIvW27fnhlRQuWTePUR826NZwCbwdXHEbU8CaQrHV5JORJk4itYw5PT2wgY6pgEg5MVy46AoYjGbRNWZt1oPnZDjkfHpaftRsSqiMrdpXuF5pXK%2FOL37m65lI2uiHDjovHUEI8pFek6%2BneeVy87xx3WeA2W9bPXZSueFlrDSZFqYbvXeSIspxvUaH%2BkgPrveYB1z4Ndfg85JkDLEQaXlwQ07iND9PSfDC%2BkcKJ8e14BWNaeI2KeSYXqqK5gAYx%2FBNlwWsV%2BbXV2vWLC%2FflJmhBP8Xee9&X-Amz-Signature=a638b596d1f85afac2120c1c9dc359ca2ede949b82cc723a48fdfcad1141bc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQ3YJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEcu%2F%2BoxX%2FHZiypXw3udkK7Cx9GYnjv2Q27qliyZjTwiAiBi8KACPcDQzGArzB4sCACWCxhdcH5ZydshuFgTRVH5vSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRyrENCN%2B0hbhb4tQKtwDolqg7og2jc1FSnQTfVBlddjs26ZTWZM%2FOZvnyjUFpNbaXvc2J5LIENWTLjFXDGQE3qk7J7sOFzHXY7XV3lSNJMh%2Fp%2Bz1PZMzQ9zpZJpuBbahvoAiTvxayjAxZZ7%2F7AoNTYa4xDEYp%2FEgHd9sR6x1FiKj1tm6EwOmJdU%2BIeDFMczBVx8oogr0IYNDZW0CY1I94bLZbPDaxrDQpdoiAl6r%2BRNK9bXQ6DFKrZ918ZtmfN97ygAUJW990njHSek%2F6mbD4PRX%2FRIf%2FvLvdiDisxREcmnI8ZEpNphCCcrvX8hbXd5A1E7%2BupOmbx1BMwbXpXCrKjzdHboyAW%2BBi8NRkmb2G60AVM6Tmr4vAAWTDrOxQ78BI71nS1pFhD0XJkhkpEEUHM%2F71CwWCrHnE8Ei5xe9vQBexGy17POPH5NxqtRsEhZ2rADqTH8ZkV%2BE6hzwX4MeDFTTC8HWuolDlaHXCbBDOkV1wPLJU%2BcOwFS1y4c06b3WmV2P1i6vv2%2FuBXbcaSDK1aweOVCXdAe0MZs0p8rjX8tK3eqwfWSucA6MeHEE3h%2FoPW1n1lkOslvEAyMr%2BFs1GJyw1%2Fu9OIvW27fnhlRQuWTePUR826NZwCbwdXHEbU8CaQrHV5JORJk4itYw5PT2wgY6pgEg5MVy46AoYjGbRNWZt1oPnZDjkfHpaftRsSqiMrdpXuF5pXK%2FOL37m65lI2uiHDjovHUEI8pFek6%2BneeVy87xx3WeA2W9bPXZSueFlrDSZFqYbvXeSIspxvUaH%2BkgPrveYB1z4Ndfg85JkDLEQaXlwQ07iND9PSfDC%2BkcKJ8e14BWNaeI2KeSYXqqK5gAYx%2FBNlwWsV%2BbXV2vWLC%2FflJmhBP8Xee9&X-Amz-Signature=fe077625506a694592331e3dc145f5fad87857dbeb598f36d7de44553d6cfd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
