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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIIQMG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugvoIpBnEhsnUQCtThfTYphk4bMf0gUKV1Rr00JwboAiA344SCJ0vDPEfXFoIV2%2F3yR1pDyg1VIzJRBF%2BGJH8Dtyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMqkaiur544CcnbaYKKtwDBuL%2BObvml%2Fi2UuoBls2wSI5aKJgZ%2BsVL7hnz1bwbQskD6iMAOI2ajZiAtbVoouBo%2FCICrVaUWrjVmgIo2pq8pf%2B2piOppGxpHW4RLqXB435QB2t%2Fs4iDk7Ogo7GMRVcc%2Fs%2BzV310vhW9Gy%2F8OoIbi%2FL94W5Rm5Jq8BW7tqjDqnQAGHVsm0NfDHljjX4eojraPOGwZbZA2crhpQDGPFwUSZ%2FbqrdFevShQWAFMcCTvYvIdA8p58rTVFsZEhmUmZcArKeLjwInN5kFdMuIHHfJq05nMyBbZm8Xa40FuPToLYgRfUhCzJ9ZAxOl%2B4zZ7qSlYj3EtvEb5cIxpJK%2F8k5B7oeDtE3hZGqZFW%2BCtWEJPIULw6BCdRZn9gZRHfiP6RmBxLNhQWR6zmjljUJYNptxs41qdPh4CJqLNxA0tHgjymhwbE7p2v9aaUuDtEJzsmaa6pUdOaSEL4NQaNd3egT4a%2B5aODopoES5hZYVv27SnkqMtrT6VJ0g0XF9w3zIUcFaR%2BhsOv2ZkXafyZNUmrn%2FvrRtQBj3itI7n3gjm31IC0lnXHEJu%2BJn2bvnUnKm3JnsSERAzXbvNluildpIEveAm2QcK9fuHsQhYyQGfid7468ITdkpKBTSa%2BRgBzMwxvjvwAY6pgHFtsDix8v5qBhXmaStvo3hQ10DOdTaOhjH46jgf0uOcm13SCCkOzPK%2BEAbGAnZBEkv2h%2BGD8Vpaf9IwCM%2BrR8RoyM1dQB4y%2BRnFiXb4reV5NeGVjuLFSenNIdWqc0LUgKcnuZHmWdWLhw1X2%2BB0B639shrdIYypcwCfZ16wotPJsVqlRxilh6mAovVcMGpGMArwxmvyl%2Bf4JtN7axx82xCubvlTrtQ&X-Amz-Signature=27f135c8e0f72f4a41a1b505478abbd5f7d0fbb734d4de4170f3ed959b2e0d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIIQMG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugvoIpBnEhsnUQCtThfTYphk4bMf0gUKV1Rr00JwboAiA344SCJ0vDPEfXFoIV2%2F3yR1pDyg1VIzJRBF%2BGJH8Dtyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMqkaiur544CcnbaYKKtwDBuL%2BObvml%2Fi2UuoBls2wSI5aKJgZ%2BsVL7hnz1bwbQskD6iMAOI2ajZiAtbVoouBo%2FCICrVaUWrjVmgIo2pq8pf%2B2piOppGxpHW4RLqXB435QB2t%2Fs4iDk7Ogo7GMRVcc%2Fs%2BzV310vhW9Gy%2F8OoIbi%2FL94W5Rm5Jq8BW7tqjDqnQAGHVsm0NfDHljjX4eojraPOGwZbZA2crhpQDGPFwUSZ%2FbqrdFevShQWAFMcCTvYvIdA8p58rTVFsZEhmUmZcArKeLjwInN5kFdMuIHHfJq05nMyBbZm8Xa40FuPToLYgRfUhCzJ9ZAxOl%2B4zZ7qSlYj3EtvEb5cIxpJK%2F8k5B7oeDtE3hZGqZFW%2BCtWEJPIULw6BCdRZn9gZRHfiP6RmBxLNhQWR6zmjljUJYNptxs41qdPh4CJqLNxA0tHgjymhwbE7p2v9aaUuDtEJzsmaa6pUdOaSEL4NQaNd3egT4a%2B5aODopoES5hZYVv27SnkqMtrT6VJ0g0XF9w3zIUcFaR%2BhsOv2ZkXafyZNUmrn%2FvrRtQBj3itI7n3gjm31IC0lnXHEJu%2BJn2bvnUnKm3JnsSERAzXbvNluildpIEveAm2QcK9fuHsQhYyQGfid7468ITdkpKBTSa%2BRgBzMwxvjvwAY6pgHFtsDix8v5qBhXmaStvo3hQ10DOdTaOhjH46jgf0uOcm13SCCkOzPK%2BEAbGAnZBEkv2h%2BGD8Vpaf9IwCM%2BrR8RoyM1dQB4y%2BRnFiXb4reV5NeGVjuLFSenNIdWqc0LUgKcnuZHmWdWLhw1X2%2BB0B639shrdIYypcwCfZ16wotPJsVqlRxilh6mAovVcMGpGMArwxmvyl%2Bf4JtN7axx82xCubvlTrtQ&X-Amz-Signature=474121ec1391b13cbf54f8c92f9de82675514cfb34632f14451a3e60e9980269&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIIQMG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugvoIpBnEhsnUQCtThfTYphk4bMf0gUKV1Rr00JwboAiA344SCJ0vDPEfXFoIV2%2F3yR1pDyg1VIzJRBF%2BGJH8Dtyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMqkaiur544CcnbaYKKtwDBuL%2BObvml%2Fi2UuoBls2wSI5aKJgZ%2BsVL7hnz1bwbQskD6iMAOI2ajZiAtbVoouBo%2FCICrVaUWrjVmgIo2pq8pf%2B2piOppGxpHW4RLqXB435QB2t%2Fs4iDk7Ogo7GMRVcc%2Fs%2BzV310vhW9Gy%2F8OoIbi%2FL94W5Rm5Jq8BW7tqjDqnQAGHVsm0NfDHljjX4eojraPOGwZbZA2crhpQDGPFwUSZ%2FbqrdFevShQWAFMcCTvYvIdA8p58rTVFsZEhmUmZcArKeLjwInN5kFdMuIHHfJq05nMyBbZm8Xa40FuPToLYgRfUhCzJ9ZAxOl%2B4zZ7qSlYj3EtvEb5cIxpJK%2F8k5B7oeDtE3hZGqZFW%2BCtWEJPIULw6BCdRZn9gZRHfiP6RmBxLNhQWR6zmjljUJYNptxs41qdPh4CJqLNxA0tHgjymhwbE7p2v9aaUuDtEJzsmaa6pUdOaSEL4NQaNd3egT4a%2B5aODopoES5hZYVv27SnkqMtrT6VJ0g0XF9w3zIUcFaR%2BhsOv2ZkXafyZNUmrn%2FvrRtQBj3itI7n3gjm31IC0lnXHEJu%2BJn2bvnUnKm3JnsSERAzXbvNluildpIEveAm2QcK9fuHsQhYyQGfid7468ITdkpKBTSa%2BRgBzMwxvjvwAY6pgHFtsDix8v5qBhXmaStvo3hQ10DOdTaOhjH46jgf0uOcm13SCCkOzPK%2BEAbGAnZBEkv2h%2BGD8Vpaf9IwCM%2BrR8RoyM1dQB4y%2BRnFiXb4reV5NeGVjuLFSenNIdWqc0LUgKcnuZHmWdWLhw1X2%2BB0B639shrdIYypcwCfZ16wotPJsVqlRxilh6mAovVcMGpGMArwxmvyl%2Bf4JtN7axx82xCubvlTrtQ&X-Amz-Signature=a183e19781f79380cf3f572b0fbeb3db9a96eee0e2658f42a30be057fdfed9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIIQMG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugvoIpBnEhsnUQCtThfTYphk4bMf0gUKV1Rr00JwboAiA344SCJ0vDPEfXFoIV2%2F3yR1pDyg1VIzJRBF%2BGJH8Dtyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMqkaiur544CcnbaYKKtwDBuL%2BObvml%2Fi2UuoBls2wSI5aKJgZ%2BsVL7hnz1bwbQskD6iMAOI2ajZiAtbVoouBo%2FCICrVaUWrjVmgIo2pq8pf%2B2piOppGxpHW4RLqXB435QB2t%2Fs4iDk7Ogo7GMRVcc%2Fs%2BzV310vhW9Gy%2F8OoIbi%2FL94W5Rm5Jq8BW7tqjDqnQAGHVsm0NfDHljjX4eojraPOGwZbZA2crhpQDGPFwUSZ%2FbqrdFevShQWAFMcCTvYvIdA8p58rTVFsZEhmUmZcArKeLjwInN5kFdMuIHHfJq05nMyBbZm8Xa40FuPToLYgRfUhCzJ9ZAxOl%2B4zZ7qSlYj3EtvEb5cIxpJK%2F8k5B7oeDtE3hZGqZFW%2BCtWEJPIULw6BCdRZn9gZRHfiP6RmBxLNhQWR6zmjljUJYNptxs41qdPh4CJqLNxA0tHgjymhwbE7p2v9aaUuDtEJzsmaa6pUdOaSEL4NQaNd3egT4a%2B5aODopoES5hZYVv27SnkqMtrT6VJ0g0XF9w3zIUcFaR%2BhsOv2ZkXafyZNUmrn%2FvrRtQBj3itI7n3gjm31IC0lnXHEJu%2BJn2bvnUnKm3JnsSERAzXbvNluildpIEveAm2QcK9fuHsQhYyQGfid7468ITdkpKBTSa%2BRgBzMwxvjvwAY6pgHFtsDix8v5qBhXmaStvo3hQ10DOdTaOhjH46jgf0uOcm13SCCkOzPK%2BEAbGAnZBEkv2h%2BGD8Vpaf9IwCM%2BrR8RoyM1dQB4y%2BRnFiXb4reV5NeGVjuLFSenNIdWqc0LUgKcnuZHmWdWLhw1X2%2BB0B639shrdIYypcwCfZ16wotPJsVqlRxilh6mAovVcMGpGMArwxmvyl%2Bf4JtN7axx82xCubvlTrtQ&X-Amz-Signature=3c2b239ffba2c7a67bfe2da4becda728e167d44c3764d6c4ddba1aabdc8287a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIIQMG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugvoIpBnEhsnUQCtThfTYphk4bMf0gUKV1Rr00JwboAiA344SCJ0vDPEfXFoIV2%2F3yR1pDyg1VIzJRBF%2BGJH8Dtyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMqkaiur544CcnbaYKKtwDBuL%2BObvml%2Fi2UuoBls2wSI5aKJgZ%2BsVL7hnz1bwbQskD6iMAOI2ajZiAtbVoouBo%2FCICrVaUWrjVmgIo2pq8pf%2B2piOppGxpHW4RLqXB435QB2t%2Fs4iDk7Ogo7GMRVcc%2Fs%2BzV310vhW9Gy%2F8OoIbi%2FL94W5Rm5Jq8BW7tqjDqnQAGHVsm0NfDHljjX4eojraPOGwZbZA2crhpQDGPFwUSZ%2FbqrdFevShQWAFMcCTvYvIdA8p58rTVFsZEhmUmZcArKeLjwInN5kFdMuIHHfJq05nMyBbZm8Xa40FuPToLYgRfUhCzJ9ZAxOl%2B4zZ7qSlYj3EtvEb5cIxpJK%2F8k5B7oeDtE3hZGqZFW%2BCtWEJPIULw6BCdRZn9gZRHfiP6RmBxLNhQWR6zmjljUJYNptxs41qdPh4CJqLNxA0tHgjymhwbE7p2v9aaUuDtEJzsmaa6pUdOaSEL4NQaNd3egT4a%2B5aODopoES5hZYVv27SnkqMtrT6VJ0g0XF9w3zIUcFaR%2BhsOv2ZkXafyZNUmrn%2FvrRtQBj3itI7n3gjm31IC0lnXHEJu%2BJn2bvnUnKm3JnsSERAzXbvNluildpIEveAm2QcK9fuHsQhYyQGfid7468ITdkpKBTSa%2BRgBzMwxvjvwAY6pgHFtsDix8v5qBhXmaStvo3hQ10DOdTaOhjH46jgf0uOcm13SCCkOzPK%2BEAbGAnZBEkv2h%2BGD8Vpaf9IwCM%2BrR8RoyM1dQB4y%2BRnFiXb4reV5NeGVjuLFSenNIdWqc0LUgKcnuZHmWdWLhw1X2%2BB0B639shrdIYypcwCfZ16wotPJsVqlRxilh6mAovVcMGpGMArwxmvyl%2Bf4JtN7axx82xCubvlTrtQ&X-Amz-Signature=f09c4aeac21f62a87423cc06a8f7cc416e28f4683c1c57b9c02366c93b4dd1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIIQMG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugvoIpBnEhsnUQCtThfTYphk4bMf0gUKV1Rr00JwboAiA344SCJ0vDPEfXFoIV2%2F3yR1pDyg1VIzJRBF%2BGJH8Dtyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMqkaiur544CcnbaYKKtwDBuL%2BObvml%2Fi2UuoBls2wSI5aKJgZ%2BsVL7hnz1bwbQskD6iMAOI2ajZiAtbVoouBo%2FCICrVaUWrjVmgIo2pq8pf%2B2piOppGxpHW4RLqXB435QB2t%2Fs4iDk7Ogo7GMRVcc%2Fs%2BzV310vhW9Gy%2F8OoIbi%2FL94W5Rm5Jq8BW7tqjDqnQAGHVsm0NfDHljjX4eojraPOGwZbZA2crhpQDGPFwUSZ%2FbqrdFevShQWAFMcCTvYvIdA8p58rTVFsZEhmUmZcArKeLjwInN5kFdMuIHHfJq05nMyBbZm8Xa40FuPToLYgRfUhCzJ9ZAxOl%2B4zZ7qSlYj3EtvEb5cIxpJK%2F8k5B7oeDtE3hZGqZFW%2BCtWEJPIULw6BCdRZn9gZRHfiP6RmBxLNhQWR6zmjljUJYNptxs41qdPh4CJqLNxA0tHgjymhwbE7p2v9aaUuDtEJzsmaa6pUdOaSEL4NQaNd3egT4a%2B5aODopoES5hZYVv27SnkqMtrT6VJ0g0XF9w3zIUcFaR%2BhsOv2ZkXafyZNUmrn%2FvrRtQBj3itI7n3gjm31IC0lnXHEJu%2BJn2bvnUnKm3JnsSERAzXbvNluildpIEveAm2QcK9fuHsQhYyQGfid7468ITdkpKBTSa%2BRgBzMwxvjvwAY6pgHFtsDix8v5qBhXmaStvo3hQ10DOdTaOhjH46jgf0uOcm13SCCkOzPK%2BEAbGAnZBEkv2h%2BGD8Vpaf9IwCM%2BrR8RoyM1dQB4y%2BRnFiXb4reV5NeGVjuLFSenNIdWqc0LUgKcnuZHmWdWLhw1X2%2BB0B639shrdIYypcwCfZ16wotPJsVqlRxilh6mAovVcMGpGMArwxmvyl%2Bf4JtN7axx82xCubvlTrtQ&X-Amz-Signature=65b98f8d31e6c9418abc07656cad2e874bece15c6e40b2c81d07de1eb8f2f649&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIIQMG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBugvoIpBnEhsnUQCtThfTYphk4bMf0gUKV1Rr00JwboAiA344SCJ0vDPEfXFoIV2%2F3yR1pDyg1VIzJRBF%2BGJH8Dtyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMqkaiur544CcnbaYKKtwDBuL%2BObvml%2Fi2UuoBls2wSI5aKJgZ%2BsVL7hnz1bwbQskD6iMAOI2ajZiAtbVoouBo%2FCICrVaUWrjVmgIo2pq8pf%2B2piOppGxpHW4RLqXB435QB2t%2Fs4iDk7Ogo7GMRVcc%2Fs%2BzV310vhW9Gy%2F8OoIbi%2FL94W5Rm5Jq8BW7tqjDqnQAGHVsm0NfDHljjX4eojraPOGwZbZA2crhpQDGPFwUSZ%2FbqrdFevShQWAFMcCTvYvIdA8p58rTVFsZEhmUmZcArKeLjwInN5kFdMuIHHfJq05nMyBbZm8Xa40FuPToLYgRfUhCzJ9ZAxOl%2B4zZ7qSlYj3EtvEb5cIxpJK%2F8k5B7oeDtE3hZGqZFW%2BCtWEJPIULw6BCdRZn9gZRHfiP6RmBxLNhQWR6zmjljUJYNptxs41qdPh4CJqLNxA0tHgjymhwbE7p2v9aaUuDtEJzsmaa6pUdOaSEL4NQaNd3egT4a%2B5aODopoES5hZYVv27SnkqMtrT6VJ0g0XF9w3zIUcFaR%2BhsOv2ZkXafyZNUmrn%2FvrRtQBj3itI7n3gjm31IC0lnXHEJu%2BJn2bvnUnKm3JnsSERAzXbvNluildpIEveAm2QcK9fuHsQhYyQGfid7468ITdkpKBTSa%2BRgBzMwxvjvwAY6pgHFtsDix8v5qBhXmaStvo3hQ10DOdTaOhjH46jgf0uOcm13SCCkOzPK%2BEAbGAnZBEkv2h%2BGD8Vpaf9IwCM%2BrR8RoyM1dQB4y%2BRnFiXb4reV5NeGVjuLFSenNIdWqc0LUgKcnuZHmWdWLhw1X2%2BB0B639shrdIYypcwCfZ16wotPJsVqlRxilh6mAovVcMGpGMArwxmvyl%2Bf4JtN7axx82xCubvlTrtQ&X-Amz-Signature=84f9ffa8a5ea5b9c3402e04b35934a8cc2950e503284096b79bd877f1ca99020&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
