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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4WIJAN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8uYPPxev2X%2FzkFRl%2Bnpr1BPvBuW4bgKphNSaC1w1TAiEA12Jrf0%2FyKLMWK0IIPgKLsVKiATHruhcNRPYRNNbn6LYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Wi9gSNvIn0cpQMCrcA%2FzquwKGuS0B%2Fruh6Plp1hTGU9kJ6ZtnfxE016GGozFAX1C%2BKIlFae1FK0vaF%2BvWaK39fcXx7wE1uEIFCAMgBQ6mlmfB3ytYM1gBrdi047o1l4M4Ffr35paW91ZZASYoQFnBGXVSpDPJRraBqv%2FGyO3BAHkesWmpHRaccKm06PRuMpA2TUtjENlONUSE%2FpIiDAn64O6dvmBSvPvQyc7fuZJ6QvDvu7FlBeAbdK5x0puApB9EFte6IaKCL2bY6D69LJ2sTpPxX4nxT116kNSd0%2BxX1K%2BctCBWQZjKwawnHDQ9TardYpEFKSvbG%2BLJkbu64KpS0jkeHw83kDcsveW1muUUiXkaXLvmP4Iqr3WwyQ8bG3Z7TorVLZA%2F3IKncHiguVFK%2BLP7s9VRfHViZfGDjHr33z2j%2BQvpFXILFvEya4kW93HzwqTo8YO2%2ByxZGFUkC%2B7fdFPjn%2BIeW5wF01N%2F3YM5kc86OwV5F2qPuGN5nRyp3mA2EQK8LjVTAAB0pHuST0A9oxGGO5w3k%2F%2Bv8FN%2FmfBFd58wA5KkpO8CV81nu5C%2FVUFu4xNgLDlubxYjmXKNx8dP%2FOfRDyri406WItiyqrFifTdYZTEsdTF6FduKmsS2FVs3luhVNM4euJUyMJ7Qv8MGOqUBD9EA7Q8ffv8OeedDn9%2Bg%2BwV%2BQiYTM5dxuJO79lf1joCfg%2BUlC92rWYfYhCf4TiTEq8QSiPWSpoJGZtJa6q9gZh78kkfGwqiMDnqM0vdtjupSotoz3KGqdxm6KHezQxzKQs1GY5eNfMImTSFS5qkhLj7hU6IdBeYz1J01djX3eBOsdrs%2BNMyof45WpYPMzSZKWDCB8fSsZ433CjueujVxvAkLZvfk&X-Amz-Signature=be28e2836eb877f14393ea172f0ac01888e8bcc2fea1978afa3cc5a57e51d45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4WIJAN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8uYPPxev2X%2FzkFRl%2Bnpr1BPvBuW4bgKphNSaC1w1TAiEA12Jrf0%2FyKLMWK0IIPgKLsVKiATHruhcNRPYRNNbn6LYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Wi9gSNvIn0cpQMCrcA%2FzquwKGuS0B%2Fruh6Plp1hTGU9kJ6ZtnfxE016GGozFAX1C%2BKIlFae1FK0vaF%2BvWaK39fcXx7wE1uEIFCAMgBQ6mlmfB3ytYM1gBrdi047o1l4M4Ffr35paW91ZZASYoQFnBGXVSpDPJRraBqv%2FGyO3BAHkesWmpHRaccKm06PRuMpA2TUtjENlONUSE%2FpIiDAn64O6dvmBSvPvQyc7fuZJ6QvDvu7FlBeAbdK5x0puApB9EFte6IaKCL2bY6D69LJ2sTpPxX4nxT116kNSd0%2BxX1K%2BctCBWQZjKwawnHDQ9TardYpEFKSvbG%2BLJkbu64KpS0jkeHw83kDcsveW1muUUiXkaXLvmP4Iqr3WwyQ8bG3Z7TorVLZA%2F3IKncHiguVFK%2BLP7s9VRfHViZfGDjHr33z2j%2BQvpFXILFvEya4kW93HzwqTo8YO2%2ByxZGFUkC%2B7fdFPjn%2BIeW5wF01N%2F3YM5kc86OwV5F2qPuGN5nRyp3mA2EQK8LjVTAAB0pHuST0A9oxGGO5w3k%2F%2Bv8FN%2FmfBFd58wA5KkpO8CV81nu5C%2FVUFu4xNgLDlubxYjmXKNx8dP%2FOfRDyri406WItiyqrFifTdYZTEsdTF6FduKmsS2FVs3luhVNM4euJUyMJ7Qv8MGOqUBD9EA7Q8ffv8OeedDn9%2Bg%2BwV%2BQiYTM5dxuJO79lf1joCfg%2BUlC92rWYfYhCf4TiTEq8QSiPWSpoJGZtJa6q9gZh78kkfGwqiMDnqM0vdtjupSotoz3KGqdxm6KHezQxzKQs1GY5eNfMImTSFS5qkhLj7hU6IdBeYz1J01djX3eBOsdrs%2BNMyof45WpYPMzSZKWDCB8fSsZ433CjueujVxvAkLZvfk&X-Amz-Signature=86893965b86d4e8d9e71de12373cac7e2094f3270e57d3b6e9d434cdec412fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4WIJAN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8uYPPxev2X%2FzkFRl%2Bnpr1BPvBuW4bgKphNSaC1w1TAiEA12Jrf0%2FyKLMWK0IIPgKLsVKiATHruhcNRPYRNNbn6LYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Wi9gSNvIn0cpQMCrcA%2FzquwKGuS0B%2Fruh6Plp1hTGU9kJ6ZtnfxE016GGozFAX1C%2BKIlFae1FK0vaF%2BvWaK39fcXx7wE1uEIFCAMgBQ6mlmfB3ytYM1gBrdi047o1l4M4Ffr35paW91ZZASYoQFnBGXVSpDPJRraBqv%2FGyO3BAHkesWmpHRaccKm06PRuMpA2TUtjENlONUSE%2FpIiDAn64O6dvmBSvPvQyc7fuZJ6QvDvu7FlBeAbdK5x0puApB9EFte6IaKCL2bY6D69LJ2sTpPxX4nxT116kNSd0%2BxX1K%2BctCBWQZjKwawnHDQ9TardYpEFKSvbG%2BLJkbu64KpS0jkeHw83kDcsveW1muUUiXkaXLvmP4Iqr3WwyQ8bG3Z7TorVLZA%2F3IKncHiguVFK%2BLP7s9VRfHViZfGDjHr33z2j%2BQvpFXILFvEya4kW93HzwqTo8YO2%2ByxZGFUkC%2B7fdFPjn%2BIeW5wF01N%2F3YM5kc86OwV5F2qPuGN5nRyp3mA2EQK8LjVTAAB0pHuST0A9oxGGO5w3k%2F%2Bv8FN%2FmfBFd58wA5KkpO8CV81nu5C%2FVUFu4xNgLDlubxYjmXKNx8dP%2FOfRDyri406WItiyqrFifTdYZTEsdTF6FduKmsS2FVs3luhVNM4euJUyMJ7Qv8MGOqUBD9EA7Q8ffv8OeedDn9%2Bg%2BwV%2BQiYTM5dxuJO79lf1joCfg%2BUlC92rWYfYhCf4TiTEq8QSiPWSpoJGZtJa6q9gZh78kkfGwqiMDnqM0vdtjupSotoz3KGqdxm6KHezQxzKQs1GY5eNfMImTSFS5qkhLj7hU6IdBeYz1J01djX3eBOsdrs%2BNMyof45WpYPMzSZKWDCB8fSsZ433CjueujVxvAkLZvfk&X-Amz-Signature=0e3ff3171990d0600aa50a5067dbc69654919a7288d5d5fd970003ea229af02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4WIJAN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8uYPPxev2X%2FzkFRl%2Bnpr1BPvBuW4bgKphNSaC1w1TAiEA12Jrf0%2FyKLMWK0IIPgKLsVKiATHruhcNRPYRNNbn6LYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Wi9gSNvIn0cpQMCrcA%2FzquwKGuS0B%2Fruh6Plp1hTGU9kJ6ZtnfxE016GGozFAX1C%2BKIlFae1FK0vaF%2BvWaK39fcXx7wE1uEIFCAMgBQ6mlmfB3ytYM1gBrdi047o1l4M4Ffr35paW91ZZASYoQFnBGXVSpDPJRraBqv%2FGyO3BAHkesWmpHRaccKm06PRuMpA2TUtjENlONUSE%2FpIiDAn64O6dvmBSvPvQyc7fuZJ6QvDvu7FlBeAbdK5x0puApB9EFte6IaKCL2bY6D69LJ2sTpPxX4nxT116kNSd0%2BxX1K%2BctCBWQZjKwawnHDQ9TardYpEFKSvbG%2BLJkbu64KpS0jkeHw83kDcsveW1muUUiXkaXLvmP4Iqr3WwyQ8bG3Z7TorVLZA%2F3IKncHiguVFK%2BLP7s9VRfHViZfGDjHr33z2j%2BQvpFXILFvEya4kW93HzwqTo8YO2%2ByxZGFUkC%2B7fdFPjn%2BIeW5wF01N%2F3YM5kc86OwV5F2qPuGN5nRyp3mA2EQK8LjVTAAB0pHuST0A9oxGGO5w3k%2F%2Bv8FN%2FmfBFd58wA5KkpO8CV81nu5C%2FVUFu4xNgLDlubxYjmXKNx8dP%2FOfRDyri406WItiyqrFifTdYZTEsdTF6FduKmsS2FVs3luhVNM4euJUyMJ7Qv8MGOqUBD9EA7Q8ffv8OeedDn9%2Bg%2BwV%2BQiYTM5dxuJO79lf1joCfg%2BUlC92rWYfYhCf4TiTEq8QSiPWSpoJGZtJa6q9gZh78kkfGwqiMDnqM0vdtjupSotoz3KGqdxm6KHezQxzKQs1GY5eNfMImTSFS5qkhLj7hU6IdBeYz1J01djX3eBOsdrs%2BNMyof45WpYPMzSZKWDCB8fSsZ433CjueujVxvAkLZvfk&X-Amz-Signature=5934646359e9bcf4d26409f751cba06a69ae578da40c28f2d542918770edb2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4WIJAN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8uYPPxev2X%2FzkFRl%2Bnpr1BPvBuW4bgKphNSaC1w1TAiEA12Jrf0%2FyKLMWK0IIPgKLsVKiATHruhcNRPYRNNbn6LYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Wi9gSNvIn0cpQMCrcA%2FzquwKGuS0B%2Fruh6Plp1hTGU9kJ6ZtnfxE016GGozFAX1C%2BKIlFae1FK0vaF%2BvWaK39fcXx7wE1uEIFCAMgBQ6mlmfB3ytYM1gBrdi047o1l4M4Ffr35paW91ZZASYoQFnBGXVSpDPJRraBqv%2FGyO3BAHkesWmpHRaccKm06PRuMpA2TUtjENlONUSE%2FpIiDAn64O6dvmBSvPvQyc7fuZJ6QvDvu7FlBeAbdK5x0puApB9EFte6IaKCL2bY6D69LJ2sTpPxX4nxT116kNSd0%2BxX1K%2BctCBWQZjKwawnHDQ9TardYpEFKSvbG%2BLJkbu64KpS0jkeHw83kDcsveW1muUUiXkaXLvmP4Iqr3WwyQ8bG3Z7TorVLZA%2F3IKncHiguVFK%2BLP7s9VRfHViZfGDjHr33z2j%2BQvpFXILFvEya4kW93HzwqTo8YO2%2ByxZGFUkC%2B7fdFPjn%2BIeW5wF01N%2F3YM5kc86OwV5F2qPuGN5nRyp3mA2EQK8LjVTAAB0pHuST0A9oxGGO5w3k%2F%2Bv8FN%2FmfBFd58wA5KkpO8CV81nu5C%2FVUFu4xNgLDlubxYjmXKNx8dP%2FOfRDyri406WItiyqrFifTdYZTEsdTF6FduKmsS2FVs3luhVNM4euJUyMJ7Qv8MGOqUBD9EA7Q8ffv8OeedDn9%2Bg%2BwV%2BQiYTM5dxuJO79lf1joCfg%2BUlC92rWYfYhCf4TiTEq8QSiPWSpoJGZtJa6q9gZh78kkfGwqiMDnqM0vdtjupSotoz3KGqdxm6KHezQxzKQs1GY5eNfMImTSFS5qkhLj7hU6IdBeYz1J01djX3eBOsdrs%2BNMyof45WpYPMzSZKWDCB8fSsZ433CjueujVxvAkLZvfk&X-Amz-Signature=139cdf877c324109ee36a1ec018cdba43f583cc3e8250ef0f619b66e3cf80bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4WIJAN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8uYPPxev2X%2FzkFRl%2Bnpr1BPvBuW4bgKphNSaC1w1TAiEA12Jrf0%2FyKLMWK0IIPgKLsVKiATHruhcNRPYRNNbn6LYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Wi9gSNvIn0cpQMCrcA%2FzquwKGuS0B%2Fruh6Plp1hTGU9kJ6ZtnfxE016GGozFAX1C%2BKIlFae1FK0vaF%2BvWaK39fcXx7wE1uEIFCAMgBQ6mlmfB3ytYM1gBrdi047o1l4M4Ffr35paW91ZZASYoQFnBGXVSpDPJRraBqv%2FGyO3BAHkesWmpHRaccKm06PRuMpA2TUtjENlONUSE%2FpIiDAn64O6dvmBSvPvQyc7fuZJ6QvDvu7FlBeAbdK5x0puApB9EFte6IaKCL2bY6D69LJ2sTpPxX4nxT116kNSd0%2BxX1K%2BctCBWQZjKwawnHDQ9TardYpEFKSvbG%2BLJkbu64KpS0jkeHw83kDcsveW1muUUiXkaXLvmP4Iqr3WwyQ8bG3Z7TorVLZA%2F3IKncHiguVFK%2BLP7s9VRfHViZfGDjHr33z2j%2BQvpFXILFvEya4kW93HzwqTo8YO2%2ByxZGFUkC%2B7fdFPjn%2BIeW5wF01N%2F3YM5kc86OwV5F2qPuGN5nRyp3mA2EQK8LjVTAAB0pHuST0A9oxGGO5w3k%2F%2Bv8FN%2FmfBFd58wA5KkpO8CV81nu5C%2FVUFu4xNgLDlubxYjmXKNx8dP%2FOfRDyri406WItiyqrFifTdYZTEsdTF6FduKmsS2FVs3luhVNM4euJUyMJ7Qv8MGOqUBD9EA7Q8ffv8OeedDn9%2Bg%2BwV%2BQiYTM5dxuJO79lf1joCfg%2BUlC92rWYfYhCf4TiTEq8QSiPWSpoJGZtJa6q9gZh78kkfGwqiMDnqM0vdtjupSotoz3KGqdxm6KHezQxzKQs1GY5eNfMImTSFS5qkhLj7hU6IdBeYz1J01djX3eBOsdrs%2BNMyof45WpYPMzSZKWDCB8fSsZ433CjueujVxvAkLZvfk&X-Amz-Signature=ff9cf20a3aec0357dacfc6139cffa73efd847767ac1135f63f0c40494dfa9643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4WIJAN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8uYPPxev2X%2FzkFRl%2Bnpr1BPvBuW4bgKphNSaC1w1TAiEA12Jrf0%2FyKLMWK0IIPgKLsVKiATHruhcNRPYRNNbn6LYqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Wi9gSNvIn0cpQMCrcA%2FzquwKGuS0B%2Fruh6Plp1hTGU9kJ6ZtnfxE016GGozFAX1C%2BKIlFae1FK0vaF%2BvWaK39fcXx7wE1uEIFCAMgBQ6mlmfB3ytYM1gBrdi047o1l4M4Ffr35paW91ZZASYoQFnBGXVSpDPJRraBqv%2FGyO3BAHkesWmpHRaccKm06PRuMpA2TUtjENlONUSE%2FpIiDAn64O6dvmBSvPvQyc7fuZJ6QvDvu7FlBeAbdK5x0puApB9EFte6IaKCL2bY6D69LJ2sTpPxX4nxT116kNSd0%2BxX1K%2BctCBWQZjKwawnHDQ9TardYpEFKSvbG%2BLJkbu64KpS0jkeHw83kDcsveW1muUUiXkaXLvmP4Iqr3WwyQ8bG3Z7TorVLZA%2F3IKncHiguVFK%2BLP7s9VRfHViZfGDjHr33z2j%2BQvpFXILFvEya4kW93HzwqTo8YO2%2ByxZGFUkC%2B7fdFPjn%2BIeW5wF01N%2F3YM5kc86OwV5F2qPuGN5nRyp3mA2EQK8LjVTAAB0pHuST0A9oxGGO5w3k%2F%2Bv8FN%2FmfBFd58wA5KkpO8CV81nu5C%2FVUFu4xNgLDlubxYjmXKNx8dP%2FOfRDyri406WItiyqrFifTdYZTEsdTF6FduKmsS2FVs3luhVNM4euJUyMJ7Qv8MGOqUBD9EA7Q8ffv8OeedDn9%2Bg%2BwV%2BQiYTM5dxuJO79lf1joCfg%2BUlC92rWYfYhCf4TiTEq8QSiPWSpoJGZtJa6q9gZh78kkfGwqiMDnqM0vdtjupSotoz3KGqdxm6KHezQxzKQs1GY5eNfMImTSFS5qkhLj7hU6IdBeYz1J01djX3eBOsdrs%2BNMyof45WpYPMzSZKWDCB8fSsZ433CjueujVxvAkLZvfk&X-Amz-Signature=17b4e5e73ab19ff0440131e62ba14b79c2ae5a3a251751e3b2b4d5a101ccf63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
