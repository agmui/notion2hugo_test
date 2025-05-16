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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX52HOJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06JSRqJzebKrh%2BC4or0gVhJEw%2FaVJQcObV2Kl5eObdgIgStYURqYMw%2FGQEp6vMNVSYGLJ27Bd4sWQIiYRtsgz%2Bt4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5NPv%2BypV3Fx5u0nCrcA%2Fma89mFWaIUwec7NFyRgHbeXdtHgIOysrqIjoesvwg6vQlH4rUv7BQjVRAmOlP4t2Hu1VlNUv9SlWY2900phJ5ZR%2BbSEaCj6TS3LTC89ESh07wyLGGPP%2F96kH3zQoUE7WTraCzl2jm6Lb7JtEhNg46LruW%2FG6DaLrTr8KPSr06D52k4pPyHF4jHCQBZM%2BVYqMbEFh2NWICfYIHot%2BzmPhJiSVjGvVb92rORQzBSt5XYojbzHOVwLIBJo72vgnD0Iqkd%2BMMjL6fT%2BVGuWNZGQUw6HH5JaiZwKbQJoSBpI%2FWvsd7P5DSd02IYtk5A7Rut14rzEEJLYqQw%2BuApalHAvEaSqiy8K2HxitcyKjlsMAi6owe%2FZX0eFBLILgmaXXJhdouAduAGXnyLUZDSI%2BiIXxORW0byTpEUO8RxOP%2F2tPiNlrp0L0%2FT879zKXCKW7FaACYyosHAJdURggojep5%2BxEP4QNJ55ty5G1JOtsGqCxoEFmIBTdgYyqh7fgYy%2Fpzru8ybfxBdLadzY42dhdxoxkznfQQEyKnF5i2G9S%2FTDBK%2Bq2IYhdlBtmE3ndyRUsuUidZRkzlyoO5CEbo2qhPHLEH8df0Gf%2BBcWq0IrNa5zD6DImETw5%2FrEct5Tu0yMPb9mcEGOqUBMnkhJsztcLqkP0dq86K%2FplsVWZXe1tNQLl71dx7o3naOh18jxhnzwhsmGeaXfQwW9y0ZycCKplXR7rTIRPHy%2BggkiaYGz4MKTceubJZUyOxHDumsIO8GwA4HTqWt1HttlJ5AIFiFwg6AmeF6%2Fs7z674dK3n3LdcStxU6rGGoNdrs0W8YbuN6m8oTm8nPBzdaTymBprTixlsXH0o2uM5Ww0cxvPqK&X-Amz-Signature=a45dc375be3d9bbd91f146a24e7fa0fa5a28ad9f1337322b45cc9c635c330909&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX52HOJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06JSRqJzebKrh%2BC4or0gVhJEw%2FaVJQcObV2Kl5eObdgIgStYURqYMw%2FGQEp6vMNVSYGLJ27Bd4sWQIiYRtsgz%2Bt4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5NPv%2BypV3Fx5u0nCrcA%2Fma89mFWaIUwec7NFyRgHbeXdtHgIOysrqIjoesvwg6vQlH4rUv7BQjVRAmOlP4t2Hu1VlNUv9SlWY2900phJ5ZR%2BbSEaCj6TS3LTC89ESh07wyLGGPP%2F96kH3zQoUE7WTraCzl2jm6Lb7JtEhNg46LruW%2FG6DaLrTr8KPSr06D52k4pPyHF4jHCQBZM%2BVYqMbEFh2NWICfYIHot%2BzmPhJiSVjGvVb92rORQzBSt5XYojbzHOVwLIBJo72vgnD0Iqkd%2BMMjL6fT%2BVGuWNZGQUw6HH5JaiZwKbQJoSBpI%2FWvsd7P5DSd02IYtk5A7Rut14rzEEJLYqQw%2BuApalHAvEaSqiy8K2HxitcyKjlsMAi6owe%2FZX0eFBLILgmaXXJhdouAduAGXnyLUZDSI%2BiIXxORW0byTpEUO8RxOP%2F2tPiNlrp0L0%2FT879zKXCKW7FaACYyosHAJdURggojep5%2BxEP4QNJ55ty5G1JOtsGqCxoEFmIBTdgYyqh7fgYy%2Fpzru8ybfxBdLadzY42dhdxoxkznfQQEyKnF5i2G9S%2FTDBK%2Bq2IYhdlBtmE3ndyRUsuUidZRkzlyoO5CEbo2qhPHLEH8df0Gf%2BBcWq0IrNa5zD6DImETw5%2FrEct5Tu0yMPb9mcEGOqUBMnkhJsztcLqkP0dq86K%2FplsVWZXe1tNQLl71dx7o3naOh18jxhnzwhsmGeaXfQwW9y0ZycCKplXR7rTIRPHy%2BggkiaYGz4MKTceubJZUyOxHDumsIO8GwA4HTqWt1HttlJ5AIFiFwg6AmeF6%2Fs7z674dK3n3LdcStxU6rGGoNdrs0W8YbuN6m8oTm8nPBzdaTymBprTixlsXH0o2uM5Ww0cxvPqK&X-Amz-Signature=e82d4c34ea56c2e5d24b5cfe01aab60e596398db237dc7ea29a1fadf086808d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX52HOJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06JSRqJzebKrh%2BC4or0gVhJEw%2FaVJQcObV2Kl5eObdgIgStYURqYMw%2FGQEp6vMNVSYGLJ27Bd4sWQIiYRtsgz%2Bt4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5NPv%2BypV3Fx5u0nCrcA%2Fma89mFWaIUwec7NFyRgHbeXdtHgIOysrqIjoesvwg6vQlH4rUv7BQjVRAmOlP4t2Hu1VlNUv9SlWY2900phJ5ZR%2BbSEaCj6TS3LTC89ESh07wyLGGPP%2F96kH3zQoUE7WTraCzl2jm6Lb7JtEhNg46LruW%2FG6DaLrTr8KPSr06D52k4pPyHF4jHCQBZM%2BVYqMbEFh2NWICfYIHot%2BzmPhJiSVjGvVb92rORQzBSt5XYojbzHOVwLIBJo72vgnD0Iqkd%2BMMjL6fT%2BVGuWNZGQUw6HH5JaiZwKbQJoSBpI%2FWvsd7P5DSd02IYtk5A7Rut14rzEEJLYqQw%2BuApalHAvEaSqiy8K2HxitcyKjlsMAi6owe%2FZX0eFBLILgmaXXJhdouAduAGXnyLUZDSI%2BiIXxORW0byTpEUO8RxOP%2F2tPiNlrp0L0%2FT879zKXCKW7FaACYyosHAJdURggojep5%2BxEP4QNJ55ty5G1JOtsGqCxoEFmIBTdgYyqh7fgYy%2Fpzru8ybfxBdLadzY42dhdxoxkznfQQEyKnF5i2G9S%2FTDBK%2Bq2IYhdlBtmE3ndyRUsuUidZRkzlyoO5CEbo2qhPHLEH8df0Gf%2BBcWq0IrNa5zD6DImETw5%2FrEct5Tu0yMPb9mcEGOqUBMnkhJsztcLqkP0dq86K%2FplsVWZXe1tNQLl71dx7o3naOh18jxhnzwhsmGeaXfQwW9y0ZycCKplXR7rTIRPHy%2BggkiaYGz4MKTceubJZUyOxHDumsIO8GwA4HTqWt1HttlJ5AIFiFwg6AmeF6%2Fs7z674dK3n3LdcStxU6rGGoNdrs0W8YbuN6m8oTm8nPBzdaTymBprTixlsXH0o2uM5Ww0cxvPqK&X-Amz-Signature=fac7352acf354f6bba220361e616f39d6d5080350443acda4167a4d1bf4df9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX52HOJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06JSRqJzebKrh%2BC4or0gVhJEw%2FaVJQcObV2Kl5eObdgIgStYURqYMw%2FGQEp6vMNVSYGLJ27Bd4sWQIiYRtsgz%2Bt4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5NPv%2BypV3Fx5u0nCrcA%2Fma89mFWaIUwec7NFyRgHbeXdtHgIOysrqIjoesvwg6vQlH4rUv7BQjVRAmOlP4t2Hu1VlNUv9SlWY2900phJ5ZR%2BbSEaCj6TS3LTC89ESh07wyLGGPP%2F96kH3zQoUE7WTraCzl2jm6Lb7JtEhNg46LruW%2FG6DaLrTr8KPSr06D52k4pPyHF4jHCQBZM%2BVYqMbEFh2NWICfYIHot%2BzmPhJiSVjGvVb92rORQzBSt5XYojbzHOVwLIBJo72vgnD0Iqkd%2BMMjL6fT%2BVGuWNZGQUw6HH5JaiZwKbQJoSBpI%2FWvsd7P5DSd02IYtk5A7Rut14rzEEJLYqQw%2BuApalHAvEaSqiy8K2HxitcyKjlsMAi6owe%2FZX0eFBLILgmaXXJhdouAduAGXnyLUZDSI%2BiIXxORW0byTpEUO8RxOP%2F2tPiNlrp0L0%2FT879zKXCKW7FaACYyosHAJdURggojep5%2BxEP4QNJ55ty5G1JOtsGqCxoEFmIBTdgYyqh7fgYy%2Fpzru8ybfxBdLadzY42dhdxoxkznfQQEyKnF5i2G9S%2FTDBK%2Bq2IYhdlBtmE3ndyRUsuUidZRkzlyoO5CEbo2qhPHLEH8df0Gf%2BBcWq0IrNa5zD6DImETw5%2FrEct5Tu0yMPb9mcEGOqUBMnkhJsztcLqkP0dq86K%2FplsVWZXe1tNQLl71dx7o3naOh18jxhnzwhsmGeaXfQwW9y0ZycCKplXR7rTIRPHy%2BggkiaYGz4MKTceubJZUyOxHDumsIO8GwA4HTqWt1HttlJ5AIFiFwg6AmeF6%2Fs7z674dK3n3LdcStxU6rGGoNdrs0W8YbuN6m8oTm8nPBzdaTymBprTixlsXH0o2uM5Ww0cxvPqK&X-Amz-Signature=ea0a24f110f2e75967dc285f65a178fcae48fe352b6c067bedc59a0fe7f52f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX52HOJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06JSRqJzebKrh%2BC4or0gVhJEw%2FaVJQcObV2Kl5eObdgIgStYURqYMw%2FGQEp6vMNVSYGLJ27Bd4sWQIiYRtsgz%2Bt4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5NPv%2BypV3Fx5u0nCrcA%2Fma89mFWaIUwec7NFyRgHbeXdtHgIOysrqIjoesvwg6vQlH4rUv7BQjVRAmOlP4t2Hu1VlNUv9SlWY2900phJ5ZR%2BbSEaCj6TS3LTC89ESh07wyLGGPP%2F96kH3zQoUE7WTraCzl2jm6Lb7JtEhNg46LruW%2FG6DaLrTr8KPSr06D52k4pPyHF4jHCQBZM%2BVYqMbEFh2NWICfYIHot%2BzmPhJiSVjGvVb92rORQzBSt5XYojbzHOVwLIBJo72vgnD0Iqkd%2BMMjL6fT%2BVGuWNZGQUw6HH5JaiZwKbQJoSBpI%2FWvsd7P5DSd02IYtk5A7Rut14rzEEJLYqQw%2BuApalHAvEaSqiy8K2HxitcyKjlsMAi6owe%2FZX0eFBLILgmaXXJhdouAduAGXnyLUZDSI%2BiIXxORW0byTpEUO8RxOP%2F2tPiNlrp0L0%2FT879zKXCKW7FaACYyosHAJdURggojep5%2BxEP4QNJ55ty5G1JOtsGqCxoEFmIBTdgYyqh7fgYy%2Fpzru8ybfxBdLadzY42dhdxoxkznfQQEyKnF5i2G9S%2FTDBK%2Bq2IYhdlBtmE3ndyRUsuUidZRkzlyoO5CEbo2qhPHLEH8df0Gf%2BBcWq0IrNa5zD6DImETw5%2FrEct5Tu0yMPb9mcEGOqUBMnkhJsztcLqkP0dq86K%2FplsVWZXe1tNQLl71dx7o3naOh18jxhnzwhsmGeaXfQwW9y0ZycCKplXR7rTIRPHy%2BggkiaYGz4MKTceubJZUyOxHDumsIO8GwA4HTqWt1HttlJ5AIFiFwg6AmeF6%2Fs7z674dK3n3LdcStxU6rGGoNdrs0W8YbuN6m8oTm8nPBzdaTymBprTixlsXH0o2uM5Ww0cxvPqK&X-Amz-Signature=82f2f6034b1c17a590d6768c34e55495e4d66e009d35307a9a05b7043d6deffa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX52HOJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06JSRqJzebKrh%2BC4or0gVhJEw%2FaVJQcObV2Kl5eObdgIgStYURqYMw%2FGQEp6vMNVSYGLJ27Bd4sWQIiYRtsgz%2Bt4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5NPv%2BypV3Fx5u0nCrcA%2Fma89mFWaIUwec7NFyRgHbeXdtHgIOysrqIjoesvwg6vQlH4rUv7BQjVRAmOlP4t2Hu1VlNUv9SlWY2900phJ5ZR%2BbSEaCj6TS3LTC89ESh07wyLGGPP%2F96kH3zQoUE7WTraCzl2jm6Lb7JtEhNg46LruW%2FG6DaLrTr8KPSr06D52k4pPyHF4jHCQBZM%2BVYqMbEFh2NWICfYIHot%2BzmPhJiSVjGvVb92rORQzBSt5XYojbzHOVwLIBJo72vgnD0Iqkd%2BMMjL6fT%2BVGuWNZGQUw6HH5JaiZwKbQJoSBpI%2FWvsd7P5DSd02IYtk5A7Rut14rzEEJLYqQw%2BuApalHAvEaSqiy8K2HxitcyKjlsMAi6owe%2FZX0eFBLILgmaXXJhdouAduAGXnyLUZDSI%2BiIXxORW0byTpEUO8RxOP%2F2tPiNlrp0L0%2FT879zKXCKW7FaACYyosHAJdURggojep5%2BxEP4QNJ55ty5G1JOtsGqCxoEFmIBTdgYyqh7fgYy%2Fpzru8ybfxBdLadzY42dhdxoxkznfQQEyKnF5i2G9S%2FTDBK%2Bq2IYhdlBtmE3ndyRUsuUidZRkzlyoO5CEbo2qhPHLEH8df0Gf%2BBcWq0IrNa5zD6DImETw5%2FrEct5Tu0yMPb9mcEGOqUBMnkhJsztcLqkP0dq86K%2FplsVWZXe1tNQLl71dx7o3naOh18jxhnzwhsmGeaXfQwW9y0ZycCKplXR7rTIRPHy%2BggkiaYGz4MKTceubJZUyOxHDumsIO8GwA4HTqWt1HttlJ5AIFiFwg6AmeF6%2Fs7z674dK3n3LdcStxU6rGGoNdrs0W8YbuN6m8oTm8nPBzdaTymBprTixlsXH0o2uM5Ww0cxvPqK&X-Amz-Signature=bc371e4c334fa7819ca1e0abbb95babdd3f994eef9e8fc4e6468ae7e9d9bd5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX52HOJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06JSRqJzebKrh%2BC4or0gVhJEw%2FaVJQcObV2Kl5eObdgIgStYURqYMw%2FGQEp6vMNVSYGLJ27Bd4sWQIiYRtsgz%2Bt4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5NPv%2BypV3Fx5u0nCrcA%2Fma89mFWaIUwec7NFyRgHbeXdtHgIOysrqIjoesvwg6vQlH4rUv7BQjVRAmOlP4t2Hu1VlNUv9SlWY2900phJ5ZR%2BbSEaCj6TS3LTC89ESh07wyLGGPP%2F96kH3zQoUE7WTraCzl2jm6Lb7JtEhNg46LruW%2FG6DaLrTr8KPSr06D52k4pPyHF4jHCQBZM%2BVYqMbEFh2NWICfYIHot%2BzmPhJiSVjGvVb92rORQzBSt5XYojbzHOVwLIBJo72vgnD0Iqkd%2BMMjL6fT%2BVGuWNZGQUw6HH5JaiZwKbQJoSBpI%2FWvsd7P5DSd02IYtk5A7Rut14rzEEJLYqQw%2BuApalHAvEaSqiy8K2HxitcyKjlsMAi6owe%2FZX0eFBLILgmaXXJhdouAduAGXnyLUZDSI%2BiIXxORW0byTpEUO8RxOP%2F2tPiNlrp0L0%2FT879zKXCKW7FaACYyosHAJdURggojep5%2BxEP4QNJ55ty5G1JOtsGqCxoEFmIBTdgYyqh7fgYy%2Fpzru8ybfxBdLadzY42dhdxoxkznfQQEyKnF5i2G9S%2FTDBK%2Bq2IYhdlBtmE3ndyRUsuUidZRkzlyoO5CEbo2qhPHLEH8df0Gf%2BBcWq0IrNa5zD6DImETw5%2FrEct5Tu0yMPb9mcEGOqUBMnkhJsztcLqkP0dq86K%2FplsVWZXe1tNQLl71dx7o3naOh18jxhnzwhsmGeaXfQwW9y0ZycCKplXR7rTIRPHy%2BggkiaYGz4MKTceubJZUyOxHDumsIO8GwA4HTqWt1HttlJ5AIFiFwg6AmeF6%2Fs7z674dK3n3LdcStxU6rGGoNdrs0W8YbuN6m8oTm8nPBzdaTymBprTixlsXH0o2uM5Ww0cxvPqK&X-Amz-Signature=da0e53d46f427a35c6e9276782d1d3bd950813aa9fd71170c669eddd8869fbb5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
