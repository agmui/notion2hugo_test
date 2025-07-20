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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2A5SGT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtCBrrQFSSFr9C616IiOBw1tYk%2F8LK9t%2B8onnzN%2BUHJwIgSF4fAo%2BuMoybAlwBYNTqxPCOWPnveprF%2FHZxVGtZaJUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwACkAYSSuoxuEZzSrcA15u%2Fqj5KBAQ1V5Qhd9fLOdZl3FXs5VFP9%2F8EWa%2FdMLaV2yYWEdBLL51xljBzPyejkuFfUEDf1wqmFduhQFnMTV4TQy7M%2B9Qavs6u1xjvGNqzoLRWkYd%2F0L9V3Gtpb7KWkSCcWlmkH0u%2FQBZ44JKHQi8nhF8lnUDygrY4UZEDtXGnCnbuBK7u22l3DotyJR%2Fp9rZ9MToyvnMUYF4wauAWhWoO6Irm%2BCnIk0PnKfaaJUJY2%2FHyt3Alyxd9WYcvvHdVoWC4rWrlVXj5wE4dx3UfdWbCTtQ1%2B93dyw3i0cf2GP6UeGLjQOda3QBBAL3cqMGgvdB%2Fz5zWAIgnbFT21I6J%2F59qmZ0CW51dhkcNq9DHen5QLBVax4snBoebquUs8Gp15Y%2B8f8rPSCxw1VL1xHC9UD%2FT0O%2B03fXNJPpBoi7yU01BbvJbIRzzWlG6adNStvDB5Vhwc127OFBDC4345hpN%2Bu%2F8%2FMcBdE8U%2BTd1BqztpR4pfWeG8Spg5w7bBnFzD8ETuJNP2QOnhR0VonEVZqzowvoVMucVrbmedIVcJ%2BLHcs08ORwlgAfp7VYx4BBvV2TQwUaHgcY4kZOJD5IUGkPkIuVcRTpCQgJxzYgicW%2FN55vCzT%2Fk9GZaNsol0qQMNC38sMGOqUBWMzx95NG3xzlYAjhtDhy%2Bc5q8RQi80Uju8LfWPcHd0gWC1FIdJWCOot%2BJp%2BX6whG1tiAxuq8lmrICIwbcEsB623p6%2FgksozSwo1kg0NUM0rO8VgIMkBDukQ%2FC0OWMXTVd1ATq%2F33krVHCNRfIU16vl62W7rHgI8b9WIqa0qrWRSX%2F4p9Hy6JhWc4l57J8M1sYo22%2FTEp1w%2FcAGmo3l%2B9x10Gjjkt&X-Amz-Signature=9ea0178deeffbf23e6af9554f964711a6045e2c4e37a330a2cb6a4c8819ce1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2A5SGT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtCBrrQFSSFr9C616IiOBw1tYk%2F8LK9t%2B8onnzN%2BUHJwIgSF4fAo%2BuMoybAlwBYNTqxPCOWPnveprF%2FHZxVGtZaJUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwACkAYSSuoxuEZzSrcA15u%2Fqj5KBAQ1V5Qhd9fLOdZl3FXs5VFP9%2F8EWa%2FdMLaV2yYWEdBLL51xljBzPyejkuFfUEDf1wqmFduhQFnMTV4TQy7M%2B9Qavs6u1xjvGNqzoLRWkYd%2F0L9V3Gtpb7KWkSCcWlmkH0u%2FQBZ44JKHQi8nhF8lnUDygrY4UZEDtXGnCnbuBK7u22l3DotyJR%2Fp9rZ9MToyvnMUYF4wauAWhWoO6Irm%2BCnIk0PnKfaaJUJY2%2FHyt3Alyxd9WYcvvHdVoWC4rWrlVXj5wE4dx3UfdWbCTtQ1%2B93dyw3i0cf2GP6UeGLjQOda3QBBAL3cqMGgvdB%2Fz5zWAIgnbFT21I6J%2F59qmZ0CW51dhkcNq9DHen5QLBVax4snBoebquUs8Gp15Y%2B8f8rPSCxw1VL1xHC9UD%2FT0O%2B03fXNJPpBoi7yU01BbvJbIRzzWlG6adNStvDB5Vhwc127OFBDC4345hpN%2Bu%2F8%2FMcBdE8U%2BTd1BqztpR4pfWeG8Spg5w7bBnFzD8ETuJNP2QOnhR0VonEVZqzowvoVMucVrbmedIVcJ%2BLHcs08ORwlgAfp7VYx4BBvV2TQwUaHgcY4kZOJD5IUGkPkIuVcRTpCQgJxzYgicW%2FN55vCzT%2Fk9GZaNsol0qQMNC38sMGOqUBWMzx95NG3xzlYAjhtDhy%2Bc5q8RQi80Uju8LfWPcHd0gWC1FIdJWCOot%2BJp%2BX6whG1tiAxuq8lmrICIwbcEsB623p6%2FgksozSwo1kg0NUM0rO8VgIMkBDukQ%2FC0OWMXTVd1ATq%2F33krVHCNRfIU16vl62W7rHgI8b9WIqa0qrWRSX%2F4p9Hy6JhWc4l57J8M1sYo22%2FTEp1w%2FcAGmo3l%2B9x10Gjjkt&X-Amz-Signature=f4be6f3c83b1ac0fc5bc2e4d8b7b41aeae582e37908e66525839fcacbc078a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2A5SGT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtCBrrQFSSFr9C616IiOBw1tYk%2F8LK9t%2B8onnzN%2BUHJwIgSF4fAo%2BuMoybAlwBYNTqxPCOWPnveprF%2FHZxVGtZaJUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwACkAYSSuoxuEZzSrcA15u%2Fqj5KBAQ1V5Qhd9fLOdZl3FXs5VFP9%2F8EWa%2FdMLaV2yYWEdBLL51xljBzPyejkuFfUEDf1wqmFduhQFnMTV4TQy7M%2B9Qavs6u1xjvGNqzoLRWkYd%2F0L9V3Gtpb7KWkSCcWlmkH0u%2FQBZ44JKHQi8nhF8lnUDygrY4UZEDtXGnCnbuBK7u22l3DotyJR%2Fp9rZ9MToyvnMUYF4wauAWhWoO6Irm%2BCnIk0PnKfaaJUJY2%2FHyt3Alyxd9WYcvvHdVoWC4rWrlVXj5wE4dx3UfdWbCTtQ1%2B93dyw3i0cf2GP6UeGLjQOda3QBBAL3cqMGgvdB%2Fz5zWAIgnbFT21I6J%2F59qmZ0CW51dhkcNq9DHen5QLBVax4snBoebquUs8Gp15Y%2B8f8rPSCxw1VL1xHC9UD%2FT0O%2B03fXNJPpBoi7yU01BbvJbIRzzWlG6adNStvDB5Vhwc127OFBDC4345hpN%2Bu%2F8%2FMcBdE8U%2BTd1BqztpR4pfWeG8Spg5w7bBnFzD8ETuJNP2QOnhR0VonEVZqzowvoVMucVrbmedIVcJ%2BLHcs08ORwlgAfp7VYx4BBvV2TQwUaHgcY4kZOJD5IUGkPkIuVcRTpCQgJxzYgicW%2FN55vCzT%2Fk9GZaNsol0qQMNC38sMGOqUBWMzx95NG3xzlYAjhtDhy%2Bc5q8RQi80Uju8LfWPcHd0gWC1FIdJWCOot%2BJp%2BX6whG1tiAxuq8lmrICIwbcEsB623p6%2FgksozSwo1kg0NUM0rO8VgIMkBDukQ%2FC0OWMXTVd1ATq%2F33krVHCNRfIU16vl62W7rHgI8b9WIqa0qrWRSX%2F4p9Hy6JhWc4l57J8M1sYo22%2FTEp1w%2FcAGmo3l%2B9x10Gjjkt&X-Amz-Signature=b7d7b39531d0fa1fd3dfb1dc69cec543defc4a2dddd840f6adca15f3e611beed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2A5SGT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtCBrrQFSSFr9C616IiOBw1tYk%2F8LK9t%2B8onnzN%2BUHJwIgSF4fAo%2BuMoybAlwBYNTqxPCOWPnveprF%2FHZxVGtZaJUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwACkAYSSuoxuEZzSrcA15u%2Fqj5KBAQ1V5Qhd9fLOdZl3FXs5VFP9%2F8EWa%2FdMLaV2yYWEdBLL51xljBzPyejkuFfUEDf1wqmFduhQFnMTV4TQy7M%2B9Qavs6u1xjvGNqzoLRWkYd%2F0L9V3Gtpb7KWkSCcWlmkH0u%2FQBZ44JKHQi8nhF8lnUDygrY4UZEDtXGnCnbuBK7u22l3DotyJR%2Fp9rZ9MToyvnMUYF4wauAWhWoO6Irm%2BCnIk0PnKfaaJUJY2%2FHyt3Alyxd9WYcvvHdVoWC4rWrlVXj5wE4dx3UfdWbCTtQ1%2B93dyw3i0cf2GP6UeGLjQOda3QBBAL3cqMGgvdB%2Fz5zWAIgnbFT21I6J%2F59qmZ0CW51dhkcNq9DHen5QLBVax4snBoebquUs8Gp15Y%2B8f8rPSCxw1VL1xHC9UD%2FT0O%2B03fXNJPpBoi7yU01BbvJbIRzzWlG6adNStvDB5Vhwc127OFBDC4345hpN%2Bu%2F8%2FMcBdE8U%2BTd1BqztpR4pfWeG8Spg5w7bBnFzD8ETuJNP2QOnhR0VonEVZqzowvoVMucVrbmedIVcJ%2BLHcs08ORwlgAfp7VYx4BBvV2TQwUaHgcY4kZOJD5IUGkPkIuVcRTpCQgJxzYgicW%2FN55vCzT%2Fk9GZaNsol0qQMNC38sMGOqUBWMzx95NG3xzlYAjhtDhy%2Bc5q8RQi80Uju8LfWPcHd0gWC1FIdJWCOot%2BJp%2BX6whG1tiAxuq8lmrICIwbcEsB623p6%2FgksozSwo1kg0NUM0rO8VgIMkBDukQ%2FC0OWMXTVd1ATq%2F33krVHCNRfIU16vl62W7rHgI8b9WIqa0qrWRSX%2F4p9Hy6JhWc4l57J8M1sYo22%2FTEp1w%2FcAGmo3l%2B9x10Gjjkt&X-Amz-Signature=c56adf3def2a700c3ed3445b8af3394758592728ffd03ce6baf5a37fce1ffc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2A5SGT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtCBrrQFSSFr9C616IiOBw1tYk%2F8LK9t%2B8onnzN%2BUHJwIgSF4fAo%2BuMoybAlwBYNTqxPCOWPnveprF%2FHZxVGtZaJUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwACkAYSSuoxuEZzSrcA15u%2Fqj5KBAQ1V5Qhd9fLOdZl3FXs5VFP9%2F8EWa%2FdMLaV2yYWEdBLL51xljBzPyejkuFfUEDf1wqmFduhQFnMTV4TQy7M%2B9Qavs6u1xjvGNqzoLRWkYd%2F0L9V3Gtpb7KWkSCcWlmkH0u%2FQBZ44JKHQi8nhF8lnUDygrY4UZEDtXGnCnbuBK7u22l3DotyJR%2Fp9rZ9MToyvnMUYF4wauAWhWoO6Irm%2BCnIk0PnKfaaJUJY2%2FHyt3Alyxd9WYcvvHdVoWC4rWrlVXj5wE4dx3UfdWbCTtQ1%2B93dyw3i0cf2GP6UeGLjQOda3QBBAL3cqMGgvdB%2Fz5zWAIgnbFT21I6J%2F59qmZ0CW51dhkcNq9DHen5QLBVax4snBoebquUs8Gp15Y%2B8f8rPSCxw1VL1xHC9UD%2FT0O%2B03fXNJPpBoi7yU01BbvJbIRzzWlG6adNStvDB5Vhwc127OFBDC4345hpN%2Bu%2F8%2FMcBdE8U%2BTd1BqztpR4pfWeG8Spg5w7bBnFzD8ETuJNP2QOnhR0VonEVZqzowvoVMucVrbmedIVcJ%2BLHcs08ORwlgAfp7VYx4BBvV2TQwUaHgcY4kZOJD5IUGkPkIuVcRTpCQgJxzYgicW%2FN55vCzT%2Fk9GZaNsol0qQMNC38sMGOqUBWMzx95NG3xzlYAjhtDhy%2Bc5q8RQi80Uju8LfWPcHd0gWC1FIdJWCOot%2BJp%2BX6whG1tiAxuq8lmrICIwbcEsB623p6%2FgksozSwo1kg0NUM0rO8VgIMkBDukQ%2FC0OWMXTVd1ATq%2F33krVHCNRfIU16vl62W7rHgI8b9WIqa0qrWRSX%2F4p9Hy6JhWc4l57J8M1sYo22%2FTEp1w%2FcAGmo3l%2B9x10Gjjkt&X-Amz-Signature=16750a146bf4a1d5f2e8fc62588cb814ec1d309ce1959093e5f195c6de362a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2A5SGT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtCBrrQFSSFr9C616IiOBw1tYk%2F8LK9t%2B8onnzN%2BUHJwIgSF4fAo%2BuMoybAlwBYNTqxPCOWPnveprF%2FHZxVGtZaJUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwACkAYSSuoxuEZzSrcA15u%2Fqj5KBAQ1V5Qhd9fLOdZl3FXs5VFP9%2F8EWa%2FdMLaV2yYWEdBLL51xljBzPyejkuFfUEDf1wqmFduhQFnMTV4TQy7M%2B9Qavs6u1xjvGNqzoLRWkYd%2F0L9V3Gtpb7KWkSCcWlmkH0u%2FQBZ44JKHQi8nhF8lnUDygrY4UZEDtXGnCnbuBK7u22l3DotyJR%2Fp9rZ9MToyvnMUYF4wauAWhWoO6Irm%2BCnIk0PnKfaaJUJY2%2FHyt3Alyxd9WYcvvHdVoWC4rWrlVXj5wE4dx3UfdWbCTtQ1%2B93dyw3i0cf2GP6UeGLjQOda3QBBAL3cqMGgvdB%2Fz5zWAIgnbFT21I6J%2F59qmZ0CW51dhkcNq9DHen5QLBVax4snBoebquUs8Gp15Y%2B8f8rPSCxw1VL1xHC9UD%2FT0O%2B03fXNJPpBoi7yU01BbvJbIRzzWlG6adNStvDB5Vhwc127OFBDC4345hpN%2Bu%2F8%2FMcBdE8U%2BTd1BqztpR4pfWeG8Spg5w7bBnFzD8ETuJNP2QOnhR0VonEVZqzowvoVMucVrbmedIVcJ%2BLHcs08ORwlgAfp7VYx4BBvV2TQwUaHgcY4kZOJD5IUGkPkIuVcRTpCQgJxzYgicW%2FN55vCzT%2Fk9GZaNsol0qQMNC38sMGOqUBWMzx95NG3xzlYAjhtDhy%2Bc5q8RQi80Uju8LfWPcHd0gWC1FIdJWCOot%2BJp%2BX6whG1tiAxuq8lmrICIwbcEsB623p6%2FgksozSwo1kg0NUM0rO8VgIMkBDukQ%2FC0OWMXTVd1ATq%2F33krVHCNRfIU16vl62W7rHgI8b9WIqa0qrWRSX%2F4p9Hy6JhWc4l57J8M1sYo22%2FTEp1w%2FcAGmo3l%2B9x10Gjjkt&X-Amz-Signature=069483abfe9a5e91692be685f339d8506b9da6f0721380519d809fb83f1ca9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2A5SGT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtCBrrQFSSFr9C616IiOBw1tYk%2F8LK9t%2B8onnzN%2BUHJwIgSF4fAo%2BuMoybAlwBYNTqxPCOWPnveprF%2FHZxVGtZaJUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwACkAYSSuoxuEZzSrcA15u%2Fqj5KBAQ1V5Qhd9fLOdZl3FXs5VFP9%2F8EWa%2FdMLaV2yYWEdBLL51xljBzPyejkuFfUEDf1wqmFduhQFnMTV4TQy7M%2B9Qavs6u1xjvGNqzoLRWkYd%2F0L9V3Gtpb7KWkSCcWlmkH0u%2FQBZ44JKHQi8nhF8lnUDygrY4UZEDtXGnCnbuBK7u22l3DotyJR%2Fp9rZ9MToyvnMUYF4wauAWhWoO6Irm%2BCnIk0PnKfaaJUJY2%2FHyt3Alyxd9WYcvvHdVoWC4rWrlVXj5wE4dx3UfdWbCTtQ1%2B93dyw3i0cf2GP6UeGLjQOda3QBBAL3cqMGgvdB%2Fz5zWAIgnbFT21I6J%2F59qmZ0CW51dhkcNq9DHen5QLBVax4snBoebquUs8Gp15Y%2B8f8rPSCxw1VL1xHC9UD%2FT0O%2B03fXNJPpBoi7yU01BbvJbIRzzWlG6adNStvDB5Vhwc127OFBDC4345hpN%2Bu%2F8%2FMcBdE8U%2BTd1BqztpR4pfWeG8Spg5w7bBnFzD8ETuJNP2QOnhR0VonEVZqzowvoVMucVrbmedIVcJ%2BLHcs08ORwlgAfp7VYx4BBvV2TQwUaHgcY4kZOJD5IUGkPkIuVcRTpCQgJxzYgicW%2FN55vCzT%2Fk9GZaNsol0qQMNC38sMGOqUBWMzx95NG3xzlYAjhtDhy%2Bc5q8RQi80Uju8LfWPcHd0gWC1FIdJWCOot%2BJp%2BX6whG1tiAxuq8lmrICIwbcEsB623p6%2FgksozSwo1kg0NUM0rO8VgIMkBDukQ%2FC0OWMXTVd1ATq%2F33krVHCNRfIU16vl62W7rHgI8b9WIqa0qrWRSX%2F4p9Hy6JhWc4l57J8M1sYo22%2FTEp1w%2FcAGmo3l%2B9x10Gjjkt&X-Amz-Signature=b2a9e1e0977ba05f318df88bb1b3b7677ce56c3e431a3f7fcbd791aecc227073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
