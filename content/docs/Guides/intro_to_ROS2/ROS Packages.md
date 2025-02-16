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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROVGMYR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD9In%2BVZTIunQKC1koyvTADnQYXEmhVNLBzOOMaspzO3gIgVUD6jN29ePI6tGTi9XYaYY3ZLVKyw3jfEH9UnzY2nugq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2FSdM3TNQbHEksUCrcA1g7zNKdyB5P5bZbv5AO%2BPGR8AUYeYYZzjsvO2Lc%2FRr8bMNnFVxTw%2Fpsv%2BT%2FICOR30WRWtOMGzb%2F3PVD0pEtXb3dO7tWOcvlMg4EwVe5OSl84ktPgWOt2OJ9HkUmMZzAbJm1c1e%2Fg0MxhFUjss0g6dLEZRsUYdQPPUSAqV%2B%2BXQwVvYXq%2BL%2FGKHDjYPuqP4urFs88%2BztvT7pOHJIdN%2B9sV5zGvcDipo250CAnnDt%2Fb0uEeL4TM8hDuxsUHLUNwRK9B1RzXf1mSO5a7gVm1ekJs81DA5s9%2BG%2Bi18DThqrJR0amkEcKAKJt0ITMB%2FeHqLoTbCnr%2FZaBeLgCxU%2FvGfBfx0iPTrGcWU4vvYRSWhObEMiG3Nr%2FPSH4wati%2FyMMvbLMu3nSiIW57yDfVEtUnC4ZihKBuMxGPrBZHpBmTc2ol3%2BKZLzldG0x4EUkSBn9UnbeCRiiPo%2B0EH86y9%2FKLUU5tfLnoHPTTTHUZiZvpci0Ruft3R3XIBhGWC1hfDyOkZvacbUrKjGHb4kOpX7THtOzs4BJwldG6%2BHs09p%2FwvmCiTBRuX3%2BFpv1eSTnNCL5uPF8G%2F15ELJuFcilpmB3JybKX09qEFSYKey4zdnkcM5l3Zkgw2CPcY%2F7mbMU9Xu%2BMM7ByL0GOqUByNbiKVgDl5qeY2MxjcA0UsR9MkSbhl%2BrUGCumx79fd3VcKO9YOD0MjlujgvEA2FiIFGvJQZ8Kndo%2BhWH92C8YZlv0rxEAZd%2Bes9LqzaRf8dJUqXUNSZaABWlNjyoWgiLpnMHDhpHFbhqScxq77oxRfK7rXKa%2BsD%2FvzTlzT%2FJX%2FTbuP2GxVBhV85Mb1hVq%2BbsIKLxS7GsdXIAlCxOSSe99HS1NTna&X-Amz-Signature=4d01a482f6e341dc16c61f6814860ae0eeb6e3250e6e7883ea2ae8ba2809c373&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROVGMYR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD9In%2BVZTIunQKC1koyvTADnQYXEmhVNLBzOOMaspzO3gIgVUD6jN29ePI6tGTi9XYaYY3ZLVKyw3jfEH9UnzY2nugq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2FSdM3TNQbHEksUCrcA1g7zNKdyB5P5bZbv5AO%2BPGR8AUYeYYZzjsvO2Lc%2FRr8bMNnFVxTw%2Fpsv%2BT%2FICOR30WRWtOMGzb%2F3PVD0pEtXb3dO7tWOcvlMg4EwVe5OSl84ktPgWOt2OJ9HkUmMZzAbJm1c1e%2Fg0MxhFUjss0g6dLEZRsUYdQPPUSAqV%2B%2BXQwVvYXq%2BL%2FGKHDjYPuqP4urFs88%2BztvT7pOHJIdN%2B9sV5zGvcDipo250CAnnDt%2Fb0uEeL4TM8hDuxsUHLUNwRK9B1RzXf1mSO5a7gVm1ekJs81DA5s9%2BG%2Bi18DThqrJR0amkEcKAKJt0ITMB%2FeHqLoTbCnr%2FZaBeLgCxU%2FvGfBfx0iPTrGcWU4vvYRSWhObEMiG3Nr%2FPSH4wati%2FyMMvbLMu3nSiIW57yDfVEtUnC4ZihKBuMxGPrBZHpBmTc2ol3%2BKZLzldG0x4EUkSBn9UnbeCRiiPo%2B0EH86y9%2FKLUU5tfLnoHPTTTHUZiZvpci0Ruft3R3XIBhGWC1hfDyOkZvacbUrKjGHb4kOpX7THtOzs4BJwldG6%2BHs09p%2FwvmCiTBRuX3%2BFpv1eSTnNCL5uPF8G%2F15ELJuFcilpmB3JybKX09qEFSYKey4zdnkcM5l3Zkgw2CPcY%2F7mbMU9Xu%2BMM7ByL0GOqUByNbiKVgDl5qeY2MxjcA0UsR9MkSbhl%2BrUGCumx79fd3VcKO9YOD0MjlujgvEA2FiIFGvJQZ8Kndo%2BhWH92C8YZlv0rxEAZd%2Bes9LqzaRf8dJUqXUNSZaABWlNjyoWgiLpnMHDhpHFbhqScxq77oxRfK7rXKa%2BsD%2FvzTlzT%2FJX%2FTbuP2GxVBhV85Mb1hVq%2BbsIKLxS7GsdXIAlCxOSSe99HS1NTna&X-Amz-Signature=dcc257b3820895dbe27a051bcbf39f5e7688742c0853d065e14d15c1e66c5256&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROVGMYR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD9In%2BVZTIunQKC1koyvTADnQYXEmhVNLBzOOMaspzO3gIgVUD6jN29ePI6tGTi9XYaYY3ZLVKyw3jfEH9UnzY2nugq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2FSdM3TNQbHEksUCrcA1g7zNKdyB5P5bZbv5AO%2BPGR8AUYeYYZzjsvO2Lc%2FRr8bMNnFVxTw%2Fpsv%2BT%2FICOR30WRWtOMGzb%2F3PVD0pEtXb3dO7tWOcvlMg4EwVe5OSl84ktPgWOt2OJ9HkUmMZzAbJm1c1e%2Fg0MxhFUjss0g6dLEZRsUYdQPPUSAqV%2B%2BXQwVvYXq%2BL%2FGKHDjYPuqP4urFs88%2BztvT7pOHJIdN%2B9sV5zGvcDipo250CAnnDt%2Fb0uEeL4TM8hDuxsUHLUNwRK9B1RzXf1mSO5a7gVm1ekJs81DA5s9%2BG%2Bi18DThqrJR0amkEcKAKJt0ITMB%2FeHqLoTbCnr%2FZaBeLgCxU%2FvGfBfx0iPTrGcWU4vvYRSWhObEMiG3Nr%2FPSH4wati%2FyMMvbLMu3nSiIW57yDfVEtUnC4ZihKBuMxGPrBZHpBmTc2ol3%2BKZLzldG0x4EUkSBn9UnbeCRiiPo%2B0EH86y9%2FKLUU5tfLnoHPTTTHUZiZvpci0Ruft3R3XIBhGWC1hfDyOkZvacbUrKjGHb4kOpX7THtOzs4BJwldG6%2BHs09p%2FwvmCiTBRuX3%2BFpv1eSTnNCL5uPF8G%2F15ELJuFcilpmB3JybKX09qEFSYKey4zdnkcM5l3Zkgw2CPcY%2F7mbMU9Xu%2BMM7ByL0GOqUByNbiKVgDl5qeY2MxjcA0UsR9MkSbhl%2BrUGCumx79fd3VcKO9YOD0MjlujgvEA2FiIFGvJQZ8Kndo%2BhWH92C8YZlv0rxEAZd%2Bes9LqzaRf8dJUqXUNSZaABWlNjyoWgiLpnMHDhpHFbhqScxq77oxRfK7rXKa%2BsD%2FvzTlzT%2FJX%2FTbuP2GxVBhV85Mb1hVq%2BbsIKLxS7GsdXIAlCxOSSe99HS1NTna&X-Amz-Signature=7ba11aad9dcd2391a0921d0d2720d268cc88faa342e7c5306ae00ffc6ff3f5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROVGMYR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD9In%2BVZTIunQKC1koyvTADnQYXEmhVNLBzOOMaspzO3gIgVUD6jN29ePI6tGTi9XYaYY3ZLVKyw3jfEH9UnzY2nugq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2FSdM3TNQbHEksUCrcA1g7zNKdyB5P5bZbv5AO%2BPGR8AUYeYYZzjsvO2Lc%2FRr8bMNnFVxTw%2Fpsv%2BT%2FICOR30WRWtOMGzb%2F3PVD0pEtXb3dO7tWOcvlMg4EwVe5OSl84ktPgWOt2OJ9HkUmMZzAbJm1c1e%2Fg0MxhFUjss0g6dLEZRsUYdQPPUSAqV%2B%2BXQwVvYXq%2BL%2FGKHDjYPuqP4urFs88%2BztvT7pOHJIdN%2B9sV5zGvcDipo250CAnnDt%2Fb0uEeL4TM8hDuxsUHLUNwRK9B1RzXf1mSO5a7gVm1ekJs81DA5s9%2BG%2Bi18DThqrJR0amkEcKAKJt0ITMB%2FeHqLoTbCnr%2FZaBeLgCxU%2FvGfBfx0iPTrGcWU4vvYRSWhObEMiG3Nr%2FPSH4wati%2FyMMvbLMu3nSiIW57yDfVEtUnC4ZihKBuMxGPrBZHpBmTc2ol3%2BKZLzldG0x4EUkSBn9UnbeCRiiPo%2B0EH86y9%2FKLUU5tfLnoHPTTTHUZiZvpci0Ruft3R3XIBhGWC1hfDyOkZvacbUrKjGHb4kOpX7THtOzs4BJwldG6%2BHs09p%2FwvmCiTBRuX3%2BFpv1eSTnNCL5uPF8G%2F15ELJuFcilpmB3JybKX09qEFSYKey4zdnkcM5l3Zkgw2CPcY%2F7mbMU9Xu%2BMM7ByL0GOqUByNbiKVgDl5qeY2MxjcA0UsR9MkSbhl%2BrUGCumx79fd3VcKO9YOD0MjlujgvEA2FiIFGvJQZ8Kndo%2BhWH92C8YZlv0rxEAZd%2Bes9LqzaRf8dJUqXUNSZaABWlNjyoWgiLpnMHDhpHFbhqScxq77oxRfK7rXKa%2BsD%2FvzTlzT%2FJX%2FTbuP2GxVBhV85Mb1hVq%2BbsIKLxS7GsdXIAlCxOSSe99HS1NTna&X-Amz-Signature=d5f739786057a19270876388687a7d7b1b6e0fc244b3d166b8049c6d20ffda56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROVGMYR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD9In%2BVZTIunQKC1koyvTADnQYXEmhVNLBzOOMaspzO3gIgVUD6jN29ePI6tGTi9XYaYY3ZLVKyw3jfEH9UnzY2nugq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2FSdM3TNQbHEksUCrcA1g7zNKdyB5P5bZbv5AO%2BPGR8AUYeYYZzjsvO2Lc%2FRr8bMNnFVxTw%2Fpsv%2BT%2FICOR30WRWtOMGzb%2F3PVD0pEtXb3dO7tWOcvlMg4EwVe5OSl84ktPgWOt2OJ9HkUmMZzAbJm1c1e%2Fg0MxhFUjss0g6dLEZRsUYdQPPUSAqV%2B%2BXQwVvYXq%2BL%2FGKHDjYPuqP4urFs88%2BztvT7pOHJIdN%2B9sV5zGvcDipo250CAnnDt%2Fb0uEeL4TM8hDuxsUHLUNwRK9B1RzXf1mSO5a7gVm1ekJs81DA5s9%2BG%2Bi18DThqrJR0amkEcKAKJt0ITMB%2FeHqLoTbCnr%2FZaBeLgCxU%2FvGfBfx0iPTrGcWU4vvYRSWhObEMiG3Nr%2FPSH4wati%2FyMMvbLMu3nSiIW57yDfVEtUnC4ZihKBuMxGPrBZHpBmTc2ol3%2BKZLzldG0x4EUkSBn9UnbeCRiiPo%2B0EH86y9%2FKLUU5tfLnoHPTTTHUZiZvpci0Ruft3R3XIBhGWC1hfDyOkZvacbUrKjGHb4kOpX7THtOzs4BJwldG6%2BHs09p%2FwvmCiTBRuX3%2BFpv1eSTnNCL5uPF8G%2F15ELJuFcilpmB3JybKX09qEFSYKey4zdnkcM5l3Zkgw2CPcY%2F7mbMU9Xu%2BMM7ByL0GOqUByNbiKVgDl5qeY2MxjcA0UsR9MkSbhl%2BrUGCumx79fd3VcKO9YOD0MjlujgvEA2FiIFGvJQZ8Kndo%2BhWH92C8YZlv0rxEAZd%2Bes9LqzaRf8dJUqXUNSZaABWlNjyoWgiLpnMHDhpHFbhqScxq77oxRfK7rXKa%2BsD%2FvzTlzT%2FJX%2FTbuP2GxVBhV85Mb1hVq%2BbsIKLxS7GsdXIAlCxOSSe99HS1NTna&X-Amz-Signature=2319f61d91fc2537762b88d78ac95e2843d3f9160f7eac4787c0086596295711&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROVGMYR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD9In%2BVZTIunQKC1koyvTADnQYXEmhVNLBzOOMaspzO3gIgVUD6jN29ePI6tGTi9XYaYY3ZLVKyw3jfEH9UnzY2nugq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2FSdM3TNQbHEksUCrcA1g7zNKdyB5P5bZbv5AO%2BPGR8AUYeYYZzjsvO2Lc%2FRr8bMNnFVxTw%2Fpsv%2BT%2FICOR30WRWtOMGzb%2F3PVD0pEtXb3dO7tWOcvlMg4EwVe5OSl84ktPgWOt2OJ9HkUmMZzAbJm1c1e%2Fg0MxhFUjss0g6dLEZRsUYdQPPUSAqV%2B%2BXQwVvYXq%2BL%2FGKHDjYPuqP4urFs88%2BztvT7pOHJIdN%2B9sV5zGvcDipo250CAnnDt%2Fb0uEeL4TM8hDuxsUHLUNwRK9B1RzXf1mSO5a7gVm1ekJs81DA5s9%2BG%2Bi18DThqrJR0amkEcKAKJt0ITMB%2FeHqLoTbCnr%2FZaBeLgCxU%2FvGfBfx0iPTrGcWU4vvYRSWhObEMiG3Nr%2FPSH4wati%2FyMMvbLMu3nSiIW57yDfVEtUnC4ZihKBuMxGPrBZHpBmTc2ol3%2BKZLzldG0x4EUkSBn9UnbeCRiiPo%2B0EH86y9%2FKLUU5tfLnoHPTTTHUZiZvpci0Ruft3R3XIBhGWC1hfDyOkZvacbUrKjGHb4kOpX7THtOzs4BJwldG6%2BHs09p%2FwvmCiTBRuX3%2BFpv1eSTnNCL5uPF8G%2F15ELJuFcilpmB3JybKX09qEFSYKey4zdnkcM5l3Zkgw2CPcY%2F7mbMU9Xu%2BMM7ByL0GOqUByNbiKVgDl5qeY2MxjcA0UsR9MkSbhl%2BrUGCumx79fd3VcKO9YOD0MjlujgvEA2FiIFGvJQZ8Kndo%2BhWH92C8YZlv0rxEAZd%2Bes9LqzaRf8dJUqXUNSZaABWlNjyoWgiLpnMHDhpHFbhqScxq77oxRfK7rXKa%2BsD%2FvzTlzT%2FJX%2FTbuP2GxVBhV85Mb1hVq%2BbsIKLxS7GsdXIAlCxOSSe99HS1NTna&X-Amz-Signature=7e4c6783c8eb064aac1f040f2f544ae758689735543637fa7e13a17b94bc7719&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROVGMYR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD9In%2BVZTIunQKC1koyvTADnQYXEmhVNLBzOOMaspzO3gIgVUD6jN29ePI6tGTi9XYaYY3ZLVKyw3jfEH9UnzY2nugq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD%2B%2FSdM3TNQbHEksUCrcA1g7zNKdyB5P5bZbv5AO%2BPGR8AUYeYYZzjsvO2Lc%2FRr8bMNnFVxTw%2Fpsv%2BT%2FICOR30WRWtOMGzb%2F3PVD0pEtXb3dO7tWOcvlMg4EwVe5OSl84ktPgWOt2OJ9HkUmMZzAbJm1c1e%2Fg0MxhFUjss0g6dLEZRsUYdQPPUSAqV%2B%2BXQwVvYXq%2BL%2FGKHDjYPuqP4urFs88%2BztvT7pOHJIdN%2B9sV5zGvcDipo250CAnnDt%2Fb0uEeL4TM8hDuxsUHLUNwRK9B1RzXf1mSO5a7gVm1ekJs81DA5s9%2BG%2Bi18DThqrJR0amkEcKAKJt0ITMB%2FeHqLoTbCnr%2FZaBeLgCxU%2FvGfBfx0iPTrGcWU4vvYRSWhObEMiG3Nr%2FPSH4wati%2FyMMvbLMu3nSiIW57yDfVEtUnC4ZihKBuMxGPrBZHpBmTc2ol3%2BKZLzldG0x4EUkSBn9UnbeCRiiPo%2B0EH86y9%2FKLUU5tfLnoHPTTTHUZiZvpci0Ruft3R3XIBhGWC1hfDyOkZvacbUrKjGHb4kOpX7THtOzs4BJwldG6%2BHs09p%2FwvmCiTBRuX3%2BFpv1eSTnNCL5uPF8G%2F15ELJuFcilpmB3JybKX09qEFSYKey4zdnkcM5l3Zkgw2CPcY%2F7mbMU9Xu%2BMM7ByL0GOqUByNbiKVgDl5qeY2MxjcA0UsR9MkSbhl%2BrUGCumx79fd3VcKO9YOD0MjlujgvEA2FiIFGvJQZ8Kndo%2BhWH92C8YZlv0rxEAZd%2Bes9LqzaRf8dJUqXUNSZaABWlNjyoWgiLpnMHDhpHFbhqScxq77oxRfK7rXKa%2BsD%2FvzTlzT%2FJX%2FTbuP2GxVBhV85Mb1hVq%2BbsIKLxS7GsdXIAlCxOSSe99HS1NTna&X-Amz-Signature=7606d11656bc9033338a233e8c3a17e17b41aed4a260e439083fe69f4d3e3450&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
