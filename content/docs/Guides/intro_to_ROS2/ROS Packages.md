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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDG3FXU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDz8W8VoPT6BHwidhXXYlQUjs7ddc4yP5k67%2Fav6cnrNgIgau1UakzgUP%2FImh9cCDuX4mIv%2Bm2qGC0kPgXOiqC6XosqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx3xMQHZcEqZvnuXSrcA6%2B6AFXI9Y9aFk9I6f8UtMHFKrji4cN1l6F%2Bon52wyNqFPai7t5EU5A2mgNN9V1hL3n7HVYrvPR5BhQQK2JJbEbn5kROTkxTdWf%2FFJUkK3565tASZ2IZUuazuC9zfKCX86sqRjtXN0%2FuGConYuvi9U3QN0A0syz%2BSbP6Smd9Tu1ObMCTbWENQVqYG%2BR%2FehPv5kvoO1tNkLjgrfZSHVGL3QqgmiPM8HWCM3uH1xAnNIKgnPb9NV8Tk%2FAEo7vfdZTCztVe7kQ32ncK8GqsrYk8OLNuDzh9PTbZ5vDXeskh35xt4d8urYjvtYKW6N3G4qNLASRLJJRCPqs6tq9gC6jGnWRx2X9wz62NVbBz4mMKQkpMJRTOwKteUvMuP8zSucYc%2B5FHsEZnKImFu%2FN7BIPXzMdMaXB%2F34D0aaactkOif%2Ft2rDO0p1KQwz91N5lyMM4saxfC07L12olFKYdveeSeljcYHoXTABF9L7eUV%2FrcIMPxEW83X%2B06lbea6QNZlffXIhc0Eyv13O2IakVxbzGESjlJovSrWXcYKKVPxRWc9HUdzO6QyFJzPdgeI6FPEibync4G8Uy%2FY2YGUIf1OHUjI0Ngo4GLf5PvByUKo2s0MA72%2BH6VKFB0WGEjeimYMJbVib4GOqUBIeWXcAryFPUawEJ6MD5KPhdir8ib%2FCVt7noL0m8UZESLLWhTN2xr4YA1n96Fz8PhuhRr8WqXG97jqPm1i%2B0t3OUdP6AopM%2Bi3ucyxnVLtHeLGjLVCq8tk3q2%2F7nulFgr9IJng6uJFg4XFiedasJ66G%2BQnbp8GKlKoyXVCd0BdqXyHQOOxFvaNfYfVbCIvgamUxsJviRxRdgiYE%2FHCmU1jLrwSNa1&X-Amz-Signature=bdeaaa6c787cf8536e478fccea5384d2fae20c065170200ee07e5c5fe767c762&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDG3FXU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDz8W8VoPT6BHwidhXXYlQUjs7ddc4yP5k67%2Fav6cnrNgIgau1UakzgUP%2FImh9cCDuX4mIv%2Bm2qGC0kPgXOiqC6XosqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx3xMQHZcEqZvnuXSrcA6%2B6AFXI9Y9aFk9I6f8UtMHFKrji4cN1l6F%2Bon52wyNqFPai7t5EU5A2mgNN9V1hL3n7HVYrvPR5BhQQK2JJbEbn5kROTkxTdWf%2FFJUkK3565tASZ2IZUuazuC9zfKCX86sqRjtXN0%2FuGConYuvi9U3QN0A0syz%2BSbP6Smd9Tu1ObMCTbWENQVqYG%2BR%2FehPv5kvoO1tNkLjgrfZSHVGL3QqgmiPM8HWCM3uH1xAnNIKgnPb9NV8Tk%2FAEo7vfdZTCztVe7kQ32ncK8GqsrYk8OLNuDzh9PTbZ5vDXeskh35xt4d8urYjvtYKW6N3G4qNLASRLJJRCPqs6tq9gC6jGnWRx2X9wz62NVbBz4mMKQkpMJRTOwKteUvMuP8zSucYc%2B5FHsEZnKImFu%2FN7BIPXzMdMaXB%2F34D0aaactkOif%2Ft2rDO0p1KQwz91N5lyMM4saxfC07L12olFKYdveeSeljcYHoXTABF9L7eUV%2FrcIMPxEW83X%2B06lbea6QNZlffXIhc0Eyv13O2IakVxbzGESjlJovSrWXcYKKVPxRWc9HUdzO6QyFJzPdgeI6FPEibync4G8Uy%2FY2YGUIf1OHUjI0Ngo4GLf5PvByUKo2s0MA72%2BH6VKFB0WGEjeimYMJbVib4GOqUBIeWXcAryFPUawEJ6MD5KPhdir8ib%2FCVt7noL0m8UZESLLWhTN2xr4YA1n96Fz8PhuhRr8WqXG97jqPm1i%2B0t3OUdP6AopM%2Bi3ucyxnVLtHeLGjLVCq8tk3q2%2F7nulFgr9IJng6uJFg4XFiedasJ66G%2BQnbp8GKlKoyXVCd0BdqXyHQOOxFvaNfYfVbCIvgamUxsJviRxRdgiYE%2FHCmU1jLrwSNa1&X-Amz-Signature=986940fea650cdeac4702ce844d342e86fc1547cc10f66f2ee8864a5f84b70a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDG3FXU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDz8W8VoPT6BHwidhXXYlQUjs7ddc4yP5k67%2Fav6cnrNgIgau1UakzgUP%2FImh9cCDuX4mIv%2Bm2qGC0kPgXOiqC6XosqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx3xMQHZcEqZvnuXSrcA6%2B6AFXI9Y9aFk9I6f8UtMHFKrji4cN1l6F%2Bon52wyNqFPai7t5EU5A2mgNN9V1hL3n7HVYrvPR5BhQQK2JJbEbn5kROTkxTdWf%2FFJUkK3565tASZ2IZUuazuC9zfKCX86sqRjtXN0%2FuGConYuvi9U3QN0A0syz%2BSbP6Smd9Tu1ObMCTbWENQVqYG%2BR%2FehPv5kvoO1tNkLjgrfZSHVGL3QqgmiPM8HWCM3uH1xAnNIKgnPb9NV8Tk%2FAEo7vfdZTCztVe7kQ32ncK8GqsrYk8OLNuDzh9PTbZ5vDXeskh35xt4d8urYjvtYKW6N3G4qNLASRLJJRCPqs6tq9gC6jGnWRx2X9wz62NVbBz4mMKQkpMJRTOwKteUvMuP8zSucYc%2B5FHsEZnKImFu%2FN7BIPXzMdMaXB%2F34D0aaactkOif%2Ft2rDO0p1KQwz91N5lyMM4saxfC07L12olFKYdveeSeljcYHoXTABF9L7eUV%2FrcIMPxEW83X%2B06lbea6QNZlffXIhc0Eyv13O2IakVxbzGESjlJovSrWXcYKKVPxRWc9HUdzO6QyFJzPdgeI6FPEibync4G8Uy%2FY2YGUIf1OHUjI0Ngo4GLf5PvByUKo2s0MA72%2BH6VKFB0WGEjeimYMJbVib4GOqUBIeWXcAryFPUawEJ6MD5KPhdir8ib%2FCVt7noL0m8UZESLLWhTN2xr4YA1n96Fz8PhuhRr8WqXG97jqPm1i%2B0t3OUdP6AopM%2Bi3ucyxnVLtHeLGjLVCq8tk3q2%2F7nulFgr9IJng6uJFg4XFiedasJ66G%2BQnbp8GKlKoyXVCd0BdqXyHQOOxFvaNfYfVbCIvgamUxsJviRxRdgiYE%2FHCmU1jLrwSNa1&X-Amz-Signature=4e1a7bf19f966487a55ec03232a01d5f01484e9588ceb3d09907a36f3ab38c09&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDG3FXU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDz8W8VoPT6BHwidhXXYlQUjs7ddc4yP5k67%2Fav6cnrNgIgau1UakzgUP%2FImh9cCDuX4mIv%2Bm2qGC0kPgXOiqC6XosqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx3xMQHZcEqZvnuXSrcA6%2B6AFXI9Y9aFk9I6f8UtMHFKrji4cN1l6F%2Bon52wyNqFPai7t5EU5A2mgNN9V1hL3n7HVYrvPR5BhQQK2JJbEbn5kROTkxTdWf%2FFJUkK3565tASZ2IZUuazuC9zfKCX86sqRjtXN0%2FuGConYuvi9U3QN0A0syz%2BSbP6Smd9Tu1ObMCTbWENQVqYG%2BR%2FehPv5kvoO1tNkLjgrfZSHVGL3QqgmiPM8HWCM3uH1xAnNIKgnPb9NV8Tk%2FAEo7vfdZTCztVe7kQ32ncK8GqsrYk8OLNuDzh9PTbZ5vDXeskh35xt4d8urYjvtYKW6N3G4qNLASRLJJRCPqs6tq9gC6jGnWRx2X9wz62NVbBz4mMKQkpMJRTOwKteUvMuP8zSucYc%2B5FHsEZnKImFu%2FN7BIPXzMdMaXB%2F34D0aaactkOif%2Ft2rDO0p1KQwz91N5lyMM4saxfC07L12olFKYdveeSeljcYHoXTABF9L7eUV%2FrcIMPxEW83X%2B06lbea6QNZlffXIhc0Eyv13O2IakVxbzGESjlJovSrWXcYKKVPxRWc9HUdzO6QyFJzPdgeI6FPEibync4G8Uy%2FY2YGUIf1OHUjI0Ngo4GLf5PvByUKo2s0MA72%2BH6VKFB0WGEjeimYMJbVib4GOqUBIeWXcAryFPUawEJ6MD5KPhdir8ib%2FCVt7noL0m8UZESLLWhTN2xr4YA1n96Fz8PhuhRr8WqXG97jqPm1i%2B0t3OUdP6AopM%2Bi3ucyxnVLtHeLGjLVCq8tk3q2%2F7nulFgr9IJng6uJFg4XFiedasJ66G%2BQnbp8GKlKoyXVCd0BdqXyHQOOxFvaNfYfVbCIvgamUxsJviRxRdgiYE%2FHCmU1jLrwSNa1&X-Amz-Signature=50e53a6e4bfd9fd30ecfcb05ec2b171d46fc1668309e87c9e479cd714aebf188&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDG3FXU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDz8W8VoPT6BHwidhXXYlQUjs7ddc4yP5k67%2Fav6cnrNgIgau1UakzgUP%2FImh9cCDuX4mIv%2Bm2qGC0kPgXOiqC6XosqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx3xMQHZcEqZvnuXSrcA6%2B6AFXI9Y9aFk9I6f8UtMHFKrji4cN1l6F%2Bon52wyNqFPai7t5EU5A2mgNN9V1hL3n7HVYrvPR5BhQQK2JJbEbn5kROTkxTdWf%2FFJUkK3565tASZ2IZUuazuC9zfKCX86sqRjtXN0%2FuGConYuvi9U3QN0A0syz%2BSbP6Smd9Tu1ObMCTbWENQVqYG%2BR%2FehPv5kvoO1tNkLjgrfZSHVGL3QqgmiPM8HWCM3uH1xAnNIKgnPb9NV8Tk%2FAEo7vfdZTCztVe7kQ32ncK8GqsrYk8OLNuDzh9PTbZ5vDXeskh35xt4d8urYjvtYKW6N3G4qNLASRLJJRCPqs6tq9gC6jGnWRx2X9wz62NVbBz4mMKQkpMJRTOwKteUvMuP8zSucYc%2B5FHsEZnKImFu%2FN7BIPXzMdMaXB%2F34D0aaactkOif%2Ft2rDO0p1KQwz91N5lyMM4saxfC07L12olFKYdveeSeljcYHoXTABF9L7eUV%2FrcIMPxEW83X%2B06lbea6QNZlffXIhc0Eyv13O2IakVxbzGESjlJovSrWXcYKKVPxRWc9HUdzO6QyFJzPdgeI6FPEibync4G8Uy%2FY2YGUIf1OHUjI0Ngo4GLf5PvByUKo2s0MA72%2BH6VKFB0WGEjeimYMJbVib4GOqUBIeWXcAryFPUawEJ6MD5KPhdir8ib%2FCVt7noL0m8UZESLLWhTN2xr4YA1n96Fz8PhuhRr8WqXG97jqPm1i%2B0t3OUdP6AopM%2Bi3ucyxnVLtHeLGjLVCq8tk3q2%2F7nulFgr9IJng6uJFg4XFiedasJ66G%2BQnbp8GKlKoyXVCd0BdqXyHQOOxFvaNfYfVbCIvgamUxsJviRxRdgiYE%2FHCmU1jLrwSNa1&X-Amz-Signature=b38ca5c8b2c8f566276afdaae5bf78d2f09bd00ff00b0246273efc74481cd3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDG3FXU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDz8W8VoPT6BHwidhXXYlQUjs7ddc4yP5k67%2Fav6cnrNgIgau1UakzgUP%2FImh9cCDuX4mIv%2Bm2qGC0kPgXOiqC6XosqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx3xMQHZcEqZvnuXSrcA6%2B6AFXI9Y9aFk9I6f8UtMHFKrji4cN1l6F%2Bon52wyNqFPai7t5EU5A2mgNN9V1hL3n7HVYrvPR5BhQQK2JJbEbn5kROTkxTdWf%2FFJUkK3565tASZ2IZUuazuC9zfKCX86sqRjtXN0%2FuGConYuvi9U3QN0A0syz%2BSbP6Smd9Tu1ObMCTbWENQVqYG%2BR%2FehPv5kvoO1tNkLjgrfZSHVGL3QqgmiPM8HWCM3uH1xAnNIKgnPb9NV8Tk%2FAEo7vfdZTCztVe7kQ32ncK8GqsrYk8OLNuDzh9PTbZ5vDXeskh35xt4d8urYjvtYKW6N3G4qNLASRLJJRCPqs6tq9gC6jGnWRx2X9wz62NVbBz4mMKQkpMJRTOwKteUvMuP8zSucYc%2B5FHsEZnKImFu%2FN7BIPXzMdMaXB%2F34D0aaactkOif%2Ft2rDO0p1KQwz91N5lyMM4saxfC07L12olFKYdveeSeljcYHoXTABF9L7eUV%2FrcIMPxEW83X%2B06lbea6QNZlffXIhc0Eyv13O2IakVxbzGESjlJovSrWXcYKKVPxRWc9HUdzO6QyFJzPdgeI6FPEibync4G8Uy%2FY2YGUIf1OHUjI0Ngo4GLf5PvByUKo2s0MA72%2BH6VKFB0WGEjeimYMJbVib4GOqUBIeWXcAryFPUawEJ6MD5KPhdir8ib%2FCVt7noL0m8UZESLLWhTN2xr4YA1n96Fz8PhuhRr8WqXG97jqPm1i%2B0t3OUdP6AopM%2Bi3ucyxnVLtHeLGjLVCq8tk3q2%2F7nulFgr9IJng6uJFg4XFiedasJ66G%2BQnbp8GKlKoyXVCd0BdqXyHQOOxFvaNfYfVbCIvgamUxsJviRxRdgiYE%2FHCmU1jLrwSNa1&X-Amz-Signature=cec4f8b62790c9dc1e806c990190964e1c4fd7a99940af067bffd5aeb5e9cbe5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDG3FXU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDz8W8VoPT6BHwidhXXYlQUjs7ddc4yP5k67%2Fav6cnrNgIgau1UakzgUP%2FImh9cCDuX4mIv%2Bm2qGC0kPgXOiqC6XosqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx3xMQHZcEqZvnuXSrcA6%2B6AFXI9Y9aFk9I6f8UtMHFKrji4cN1l6F%2Bon52wyNqFPai7t5EU5A2mgNN9V1hL3n7HVYrvPR5BhQQK2JJbEbn5kROTkxTdWf%2FFJUkK3565tASZ2IZUuazuC9zfKCX86sqRjtXN0%2FuGConYuvi9U3QN0A0syz%2BSbP6Smd9Tu1ObMCTbWENQVqYG%2BR%2FehPv5kvoO1tNkLjgrfZSHVGL3QqgmiPM8HWCM3uH1xAnNIKgnPb9NV8Tk%2FAEo7vfdZTCztVe7kQ32ncK8GqsrYk8OLNuDzh9PTbZ5vDXeskh35xt4d8urYjvtYKW6N3G4qNLASRLJJRCPqs6tq9gC6jGnWRx2X9wz62NVbBz4mMKQkpMJRTOwKteUvMuP8zSucYc%2B5FHsEZnKImFu%2FN7BIPXzMdMaXB%2F34D0aaactkOif%2Ft2rDO0p1KQwz91N5lyMM4saxfC07L12olFKYdveeSeljcYHoXTABF9L7eUV%2FrcIMPxEW83X%2B06lbea6QNZlffXIhc0Eyv13O2IakVxbzGESjlJovSrWXcYKKVPxRWc9HUdzO6QyFJzPdgeI6FPEibync4G8Uy%2FY2YGUIf1OHUjI0Ngo4GLf5PvByUKo2s0MA72%2BH6VKFB0WGEjeimYMJbVib4GOqUBIeWXcAryFPUawEJ6MD5KPhdir8ib%2FCVt7noL0m8UZESLLWhTN2xr4YA1n96Fz8PhuhRr8WqXG97jqPm1i%2B0t3OUdP6AopM%2Bi3ucyxnVLtHeLGjLVCq8tk3q2%2F7nulFgr9IJng6uJFg4XFiedasJ66G%2BQnbp8GKlKoyXVCd0BdqXyHQOOxFvaNfYfVbCIvgamUxsJviRxRdgiYE%2FHCmU1jLrwSNa1&X-Amz-Signature=88cf12b3f573b2e7338966365162c30866f5eac9d2882a48d75f5c32c22a9d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
