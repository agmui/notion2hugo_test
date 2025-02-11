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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7KQ6GO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaHsf58X0wPMwzKD90nfZWZKXFvXovEWrPQNHPBOxYxAIgIMT%2BuleVyj6VKG4fBdZQW9a2EpGtQZlAFMwG9FDZfXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBsaudW%2BW%2FeUU%2BqaCrcAwBYyAKZ8aBzGalOwy7JMMw9L8zTK%2FkfE4%2FzS7d%2F9eiogAfJ%2FP9BuIitkLC8rkKQixsuq1lvt4YkGYWYlPuMqjBVMICQPhNNl4Llrf5FU2jqqt6VeSCHzUZ4e%2Bn6xiIQNThkQssjqKrDlOqhvzlHXfcBCnRQFFSkkCVn0XT9H7bFinmEPU0WSOjfCzSInNdPMri%2FeESkMD9%2B0OZ5lqw%2Bpnx6ZCEVnk1m7gW0nxobFjVJ6seivpCzVDfpZsNqlNM7GnG%2FXMHwGNJht6To8yWuCq1erkcXIL%2BpyrmYywKFKhFucJjrCeeHXe6cfJc6Qa5ZqQW5yt619llkFQy%2BpX84mZNyMiLJJzZVuqq917DWRVR4MU%2BniXSqsX3v%2B2tkNd6Hd3uEll%2FMDcMoY95VDmQ%2B9NftJsigtZE5MXYR2CqHV6fXx48BcPdKhulmZLltx5NoKOkimxF%2FA4YKEDsUZ7dAZSMyTss5jgYfOz3aIHQwSxZ%2BXijOcSFtIVO0zTJTWy1mMPd7o99O8aqRamLUA%2B2BHW5FyPB%2FBlJbOIiH2r4LgeuH7nbuW7iwvk6XZg3fKxAyKaTIxSBy8BYiSpCl1UjFDmpUw6D%2F3wtqs7riUiJIyRpdrB%2F9MeOl146x1XxTMMylrb0GOqUBbKT3HeyEAe%2BVErm6zKdAWrG8srMocyhzYLc7EPoqyZv9ksMi4oT7jyfIxaodL5YWjKsRWEW5qUw2sqz1k3NKlnV0gGAKYvK2Wy6n0vrixz5ROGZutAKF1Q0spJRIZAKW5qeeMvMJK3baOHOk4gpPx9Qb9wLlQWcYdxfFNzcSRL8QkIDxU3xVQbe6OC88JCyVlZDN1C06Ic5CtrbCMtXzZUB8RiW4&X-Amz-Signature=2a4082dc45275afd18d0aa0016ecbff298e40a4be1e0ae6e2f2ecb44f80baf87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7KQ6GO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaHsf58X0wPMwzKD90nfZWZKXFvXovEWrPQNHPBOxYxAIgIMT%2BuleVyj6VKG4fBdZQW9a2EpGtQZlAFMwG9FDZfXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBsaudW%2BW%2FeUU%2BqaCrcAwBYyAKZ8aBzGalOwy7JMMw9L8zTK%2FkfE4%2FzS7d%2F9eiogAfJ%2FP9BuIitkLC8rkKQixsuq1lvt4YkGYWYlPuMqjBVMICQPhNNl4Llrf5FU2jqqt6VeSCHzUZ4e%2Bn6xiIQNThkQssjqKrDlOqhvzlHXfcBCnRQFFSkkCVn0XT9H7bFinmEPU0WSOjfCzSInNdPMri%2FeESkMD9%2B0OZ5lqw%2Bpnx6ZCEVnk1m7gW0nxobFjVJ6seivpCzVDfpZsNqlNM7GnG%2FXMHwGNJht6To8yWuCq1erkcXIL%2BpyrmYywKFKhFucJjrCeeHXe6cfJc6Qa5ZqQW5yt619llkFQy%2BpX84mZNyMiLJJzZVuqq917DWRVR4MU%2BniXSqsX3v%2B2tkNd6Hd3uEll%2FMDcMoY95VDmQ%2B9NftJsigtZE5MXYR2CqHV6fXx48BcPdKhulmZLltx5NoKOkimxF%2FA4YKEDsUZ7dAZSMyTss5jgYfOz3aIHQwSxZ%2BXijOcSFtIVO0zTJTWy1mMPd7o99O8aqRamLUA%2B2BHW5FyPB%2FBlJbOIiH2r4LgeuH7nbuW7iwvk6XZg3fKxAyKaTIxSBy8BYiSpCl1UjFDmpUw6D%2F3wtqs7riUiJIyRpdrB%2F9MeOl146x1XxTMMylrb0GOqUBbKT3HeyEAe%2BVErm6zKdAWrG8srMocyhzYLc7EPoqyZv9ksMi4oT7jyfIxaodL5YWjKsRWEW5qUw2sqz1k3NKlnV0gGAKYvK2Wy6n0vrixz5ROGZutAKF1Q0spJRIZAKW5qeeMvMJK3baOHOk4gpPx9Qb9wLlQWcYdxfFNzcSRL8QkIDxU3xVQbe6OC88JCyVlZDN1C06Ic5CtrbCMtXzZUB8RiW4&X-Amz-Signature=4b49be8ef97625d20b9c83f81f52cfd18bc640db7154a91484779b43b09870e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7KQ6GO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaHsf58X0wPMwzKD90nfZWZKXFvXovEWrPQNHPBOxYxAIgIMT%2BuleVyj6VKG4fBdZQW9a2EpGtQZlAFMwG9FDZfXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBsaudW%2BW%2FeUU%2BqaCrcAwBYyAKZ8aBzGalOwy7JMMw9L8zTK%2FkfE4%2FzS7d%2F9eiogAfJ%2FP9BuIitkLC8rkKQixsuq1lvt4YkGYWYlPuMqjBVMICQPhNNl4Llrf5FU2jqqt6VeSCHzUZ4e%2Bn6xiIQNThkQssjqKrDlOqhvzlHXfcBCnRQFFSkkCVn0XT9H7bFinmEPU0WSOjfCzSInNdPMri%2FeESkMD9%2B0OZ5lqw%2Bpnx6ZCEVnk1m7gW0nxobFjVJ6seivpCzVDfpZsNqlNM7GnG%2FXMHwGNJht6To8yWuCq1erkcXIL%2BpyrmYywKFKhFucJjrCeeHXe6cfJc6Qa5ZqQW5yt619llkFQy%2BpX84mZNyMiLJJzZVuqq917DWRVR4MU%2BniXSqsX3v%2B2tkNd6Hd3uEll%2FMDcMoY95VDmQ%2B9NftJsigtZE5MXYR2CqHV6fXx48BcPdKhulmZLltx5NoKOkimxF%2FA4YKEDsUZ7dAZSMyTss5jgYfOz3aIHQwSxZ%2BXijOcSFtIVO0zTJTWy1mMPd7o99O8aqRamLUA%2B2BHW5FyPB%2FBlJbOIiH2r4LgeuH7nbuW7iwvk6XZg3fKxAyKaTIxSBy8BYiSpCl1UjFDmpUw6D%2F3wtqs7riUiJIyRpdrB%2F9MeOl146x1XxTMMylrb0GOqUBbKT3HeyEAe%2BVErm6zKdAWrG8srMocyhzYLc7EPoqyZv9ksMi4oT7jyfIxaodL5YWjKsRWEW5qUw2sqz1k3NKlnV0gGAKYvK2Wy6n0vrixz5ROGZutAKF1Q0spJRIZAKW5qeeMvMJK3baOHOk4gpPx9Qb9wLlQWcYdxfFNzcSRL8QkIDxU3xVQbe6OC88JCyVlZDN1C06Ic5CtrbCMtXzZUB8RiW4&X-Amz-Signature=1e76cc956e7d94dc110b29bce3cf3a7a7367b036731ddb3e19d7965e8e892183&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7KQ6GO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaHsf58X0wPMwzKD90nfZWZKXFvXovEWrPQNHPBOxYxAIgIMT%2BuleVyj6VKG4fBdZQW9a2EpGtQZlAFMwG9FDZfXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBsaudW%2BW%2FeUU%2BqaCrcAwBYyAKZ8aBzGalOwy7JMMw9L8zTK%2FkfE4%2FzS7d%2F9eiogAfJ%2FP9BuIitkLC8rkKQixsuq1lvt4YkGYWYlPuMqjBVMICQPhNNl4Llrf5FU2jqqt6VeSCHzUZ4e%2Bn6xiIQNThkQssjqKrDlOqhvzlHXfcBCnRQFFSkkCVn0XT9H7bFinmEPU0WSOjfCzSInNdPMri%2FeESkMD9%2B0OZ5lqw%2Bpnx6ZCEVnk1m7gW0nxobFjVJ6seivpCzVDfpZsNqlNM7GnG%2FXMHwGNJht6To8yWuCq1erkcXIL%2BpyrmYywKFKhFucJjrCeeHXe6cfJc6Qa5ZqQW5yt619llkFQy%2BpX84mZNyMiLJJzZVuqq917DWRVR4MU%2BniXSqsX3v%2B2tkNd6Hd3uEll%2FMDcMoY95VDmQ%2B9NftJsigtZE5MXYR2CqHV6fXx48BcPdKhulmZLltx5NoKOkimxF%2FA4YKEDsUZ7dAZSMyTss5jgYfOz3aIHQwSxZ%2BXijOcSFtIVO0zTJTWy1mMPd7o99O8aqRamLUA%2B2BHW5FyPB%2FBlJbOIiH2r4LgeuH7nbuW7iwvk6XZg3fKxAyKaTIxSBy8BYiSpCl1UjFDmpUw6D%2F3wtqs7riUiJIyRpdrB%2F9MeOl146x1XxTMMylrb0GOqUBbKT3HeyEAe%2BVErm6zKdAWrG8srMocyhzYLc7EPoqyZv9ksMi4oT7jyfIxaodL5YWjKsRWEW5qUw2sqz1k3NKlnV0gGAKYvK2Wy6n0vrixz5ROGZutAKF1Q0spJRIZAKW5qeeMvMJK3baOHOk4gpPx9Qb9wLlQWcYdxfFNzcSRL8QkIDxU3xVQbe6OC88JCyVlZDN1C06Ic5CtrbCMtXzZUB8RiW4&X-Amz-Signature=c7b1d1d558c0eac5288a178a6abd0fe2739fa960abbac2841f37b656320fc81a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7KQ6GO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaHsf58X0wPMwzKD90nfZWZKXFvXovEWrPQNHPBOxYxAIgIMT%2BuleVyj6VKG4fBdZQW9a2EpGtQZlAFMwG9FDZfXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBsaudW%2BW%2FeUU%2BqaCrcAwBYyAKZ8aBzGalOwy7JMMw9L8zTK%2FkfE4%2FzS7d%2F9eiogAfJ%2FP9BuIitkLC8rkKQixsuq1lvt4YkGYWYlPuMqjBVMICQPhNNl4Llrf5FU2jqqt6VeSCHzUZ4e%2Bn6xiIQNThkQssjqKrDlOqhvzlHXfcBCnRQFFSkkCVn0XT9H7bFinmEPU0WSOjfCzSInNdPMri%2FeESkMD9%2B0OZ5lqw%2Bpnx6ZCEVnk1m7gW0nxobFjVJ6seivpCzVDfpZsNqlNM7GnG%2FXMHwGNJht6To8yWuCq1erkcXIL%2BpyrmYywKFKhFucJjrCeeHXe6cfJc6Qa5ZqQW5yt619llkFQy%2BpX84mZNyMiLJJzZVuqq917DWRVR4MU%2BniXSqsX3v%2B2tkNd6Hd3uEll%2FMDcMoY95VDmQ%2B9NftJsigtZE5MXYR2CqHV6fXx48BcPdKhulmZLltx5NoKOkimxF%2FA4YKEDsUZ7dAZSMyTss5jgYfOz3aIHQwSxZ%2BXijOcSFtIVO0zTJTWy1mMPd7o99O8aqRamLUA%2B2BHW5FyPB%2FBlJbOIiH2r4LgeuH7nbuW7iwvk6XZg3fKxAyKaTIxSBy8BYiSpCl1UjFDmpUw6D%2F3wtqs7riUiJIyRpdrB%2F9MeOl146x1XxTMMylrb0GOqUBbKT3HeyEAe%2BVErm6zKdAWrG8srMocyhzYLc7EPoqyZv9ksMi4oT7jyfIxaodL5YWjKsRWEW5qUw2sqz1k3NKlnV0gGAKYvK2Wy6n0vrixz5ROGZutAKF1Q0spJRIZAKW5qeeMvMJK3baOHOk4gpPx9Qb9wLlQWcYdxfFNzcSRL8QkIDxU3xVQbe6OC88JCyVlZDN1C06Ic5CtrbCMtXzZUB8RiW4&X-Amz-Signature=b1c055b149f7afcca6e9b2a80ebcaa4ec636fa6b17530c04a5ea6a46d1472790&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7KQ6GO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaHsf58X0wPMwzKD90nfZWZKXFvXovEWrPQNHPBOxYxAIgIMT%2BuleVyj6VKG4fBdZQW9a2EpGtQZlAFMwG9FDZfXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBsaudW%2BW%2FeUU%2BqaCrcAwBYyAKZ8aBzGalOwy7JMMw9L8zTK%2FkfE4%2FzS7d%2F9eiogAfJ%2FP9BuIitkLC8rkKQixsuq1lvt4YkGYWYlPuMqjBVMICQPhNNl4Llrf5FU2jqqt6VeSCHzUZ4e%2Bn6xiIQNThkQssjqKrDlOqhvzlHXfcBCnRQFFSkkCVn0XT9H7bFinmEPU0WSOjfCzSInNdPMri%2FeESkMD9%2B0OZ5lqw%2Bpnx6ZCEVnk1m7gW0nxobFjVJ6seivpCzVDfpZsNqlNM7GnG%2FXMHwGNJht6To8yWuCq1erkcXIL%2BpyrmYywKFKhFucJjrCeeHXe6cfJc6Qa5ZqQW5yt619llkFQy%2BpX84mZNyMiLJJzZVuqq917DWRVR4MU%2BniXSqsX3v%2B2tkNd6Hd3uEll%2FMDcMoY95VDmQ%2B9NftJsigtZE5MXYR2CqHV6fXx48BcPdKhulmZLltx5NoKOkimxF%2FA4YKEDsUZ7dAZSMyTss5jgYfOz3aIHQwSxZ%2BXijOcSFtIVO0zTJTWy1mMPd7o99O8aqRamLUA%2B2BHW5FyPB%2FBlJbOIiH2r4LgeuH7nbuW7iwvk6XZg3fKxAyKaTIxSBy8BYiSpCl1UjFDmpUw6D%2F3wtqs7riUiJIyRpdrB%2F9MeOl146x1XxTMMylrb0GOqUBbKT3HeyEAe%2BVErm6zKdAWrG8srMocyhzYLc7EPoqyZv9ksMi4oT7jyfIxaodL5YWjKsRWEW5qUw2sqz1k3NKlnV0gGAKYvK2Wy6n0vrixz5ROGZutAKF1Q0spJRIZAKW5qeeMvMJK3baOHOk4gpPx9Qb9wLlQWcYdxfFNzcSRL8QkIDxU3xVQbe6OC88JCyVlZDN1C06Ic5CtrbCMtXzZUB8RiW4&X-Amz-Signature=b0b54e14af74980bd3c17d71aae02031b0a0a2ead68808aa4b51a7c27e659e7f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7KQ6GO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaHsf58X0wPMwzKD90nfZWZKXFvXovEWrPQNHPBOxYxAIgIMT%2BuleVyj6VKG4fBdZQW9a2EpGtQZlAFMwG9FDZfXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBsaudW%2BW%2FeUU%2BqaCrcAwBYyAKZ8aBzGalOwy7JMMw9L8zTK%2FkfE4%2FzS7d%2F9eiogAfJ%2FP9BuIitkLC8rkKQixsuq1lvt4YkGYWYlPuMqjBVMICQPhNNl4Llrf5FU2jqqt6VeSCHzUZ4e%2Bn6xiIQNThkQssjqKrDlOqhvzlHXfcBCnRQFFSkkCVn0XT9H7bFinmEPU0WSOjfCzSInNdPMri%2FeESkMD9%2B0OZ5lqw%2Bpnx6ZCEVnk1m7gW0nxobFjVJ6seivpCzVDfpZsNqlNM7GnG%2FXMHwGNJht6To8yWuCq1erkcXIL%2BpyrmYywKFKhFucJjrCeeHXe6cfJc6Qa5ZqQW5yt619llkFQy%2BpX84mZNyMiLJJzZVuqq917DWRVR4MU%2BniXSqsX3v%2B2tkNd6Hd3uEll%2FMDcMoY95VDmQ%2B9NftJsigtZE5MXYR2CqHV6fXx48BcPdKhulmZLltx5NoKOkimxF%2FA4YKEDsUZ7dAZSMyTss5jgYfOz3aIHQwSxZ%2BXijOcSFtIVO0zTJTWy1mMPd7o99O8aqRamLUA%2B2BHW5FyPB%2FBlJbOIiH2r4LgeuH7nbuW7iwvk6XZg3fKxAyKaTIxSBy8BYiSpCl1UjFDmpUw6D%2F3wtqs7riUiJIyRpdrB%2F9MeOl146x1XxTMMylrb0GOqUBbKT3HeyEAe%2BVErm6zKdAWrG8srMocyhzYLc7EPoqyZv9ksMi4oT7jyfIxaodL5YWjKsRWEW5qUw2sqz1k3NKlnV0gGAKYvK2Wy6n0vrixz5ROGZutAKF1Q0spJRIZAKW5qeeMvMJK3baOHOk4gpPx9Qb9wLlQWcYdxfFNzcSRL8QkIDxU3xVQbe6OC88JCyVlZDN1C06Ic5CtrbCMtXzZUB8RiW4&X-Amz-Signature=88246598409372c9adb83c0274a0e73b0b1a4f6e2427edd2ad665bef43b65b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
