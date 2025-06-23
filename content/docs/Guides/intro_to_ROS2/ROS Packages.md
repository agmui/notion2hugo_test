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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIFOCMY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCGm4zmz1P0RdGAzbvy%2FQ5Xp9Ai9uMGGUzljeYpYkvHYAIhAOyCM2fmGBBQLWfdM12iZSGNTwD8lfMfaC%2B9pY6%2Fe3IeKv8DCBEQABoMNjM3NDIzMTgzODA1Igxloy4Nk3XUBSSfYFEq3AOYriS2WkpZ3nQWjsGSb6RrUcm%2FeOIrgOW2ikXMEQlAp9f7cNY1YR1%2Fv1LW35cfdu3BVV5n%2FuLLGdKA6mlb5uZAqhP8JC3rUfjeTooNyL95OD4%2B0UNBzlwphQ%2BB5ymYbPcpgZ7xuufeR2cEwfSylSN24bobNGcPRUXh9VH6JE3YYCv9YCA5aQaatKs1gj26j%2FqPSM6czRHBo5XvUz1lasoozXNx4viBAvWygIx3fS7UlucrXhzCWAD0xmjIC7ayawktKH30hUUaG%2BfOtKRC5H2LD01ohuPwjB82dXqC4OH3JKYmuIC5sQeEUC58jYguyXqf8N23tIskXoNq8hsvcYMC6ZkH%2BZaB%2FuhaGWwwY2hHJi3u%2Fj6uzF9mkoSy9sAEG2YZPTs127kkGfc5vELPrKOfZ%2BjmwmaVKZLlZB0WrWuIlLV5WSxsKYAg%2BFNZhcg7Ovc2OJP1LQaQMedWIpl0KamwQIqMD4Fs1X%2BJfb2pMlRqChyP3QmMwKIsRyZIimlaS3sbDi6h7gEcJRNq3%2B78gCT9oYZDbTYW3319NWZG99wn2TDKgT%2BKDYyQoEKzOJsEJe%2F%2F0HGWbeu19pLoX90G412N1Nej37pkzKyDWyr%2FZ1EmOcRoR4qq4Guh2tqz3DDsieTCBjqkAeSVHbRoRk51EvgPipC4J3N1lFeWsrtJAhca7iSY1yvup6kM3N31aRSMYqJilcaJnFwn5GJa2ZuBQfgsCEVknpgggmlg3PuSBAZeEOJUdxa7Qt%2Bt9euHiB2%2BnGP3%2Bh%2FfzW5L%2F40r7in%2B795SqDXcij%2BAgzwqAPonq8XsLyV1dSRV1eXeHdn0Qok%2Bh%2BwG%2FYw4FZSraZ7igmTAziviRklGD4D5%2BZql&X-Amz-Signature=9c41f8aa631d9c919553e7895ad3dff2e7c3bd9e7a3d342f3b39d5004e77fab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIFOCMY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCGm4zmz1P0RdGAzbvy%2FQ5Xp9Ai9uMGGUzljeYpYkvHYAIhAOyCM2fmGBBQLWfdM12iZSGNTwD8lfMfaC%2B9pY6%2Fe3IeKv8DCBEQABoMNjM3NDIzMTgzODA1Igxloy4Nk3XUBSSfYFEq3AOYriS2WkpZ3nQWjsGSb6RrUcm%2FeOIrgOW2ikXMEQlAp9f7cNY1YR1%2Fv1LW35cfdu3BVV5n%2FuLLGdKA6mlb5uZAqhP8JC3rUfjeTooNyL95OD4%2B0UNBzlwphQ%2BB5ymYbPcpgZ7xuufeR2cEwfSylSN24bobNGcPRUXh9VH6JE3YYCv9YCA5aQaatKs1gj26j%2FqPSM6czRHBo5XvUz1lasoozXNx4viBAvWygIx3fS7UlucrXhzCWAD0xmjIC7ayawktKH30hUUaG%2BfOtKRC5H2LD01ohuPwjB82dXqC4OH3JKYmuIC5sQeEUC58jYguyXqf8N23tIskXoNq8hsvcYMC6ZkH%2BZaB%2FuhaGWwwY2hHJi3u%2Fj6uzF9mkoSy9sAEG2YZPTs127kkGfc5vELPrKOfZ%2BjmwmaVKZLlZB0WrWuIlLV5WSxsKYAg%2BFNZhcg7Ovc2OJP1LQaQMedWIpl0KamwQIqMD4Fs1X%2BJfb2pMlRqChyP3QmMwKIsRyZIimlaS3sbDi6h7gEcJRNq3%2B78gCT9oYZDbTYW3319NWZG99wn2TDKgT%2BKDYyQoEKzOJsEJe%2F%2F0HGWbeu19pLoX90G412N1Nej37pkzKyDWyr%2FZ1EmOcRoR4qq4Guh2tqz3DDsieTCBjqkAeSVHbRoRk51EvgPipC4J3N1lFeWsrtJAhca7iSY1yvup6kM3N31aRSMYqJilcaJnFwn5GJa2ZuBQfgsCEVknpgggmlg3PuSBAZeEOJUdxa7Qt%2Bt9euHiB2%2BnGP3%2Bh%2FfzW5L%2F40r7in%2B795SqDXcij%2BAgzwqAPonq8XsLyV1dSRV1eXeHdn0Qok%2Bh%2BwG%2FYw4FZSraZ7igmTAziviRklGD4D5%2BZql&X-Amz-Signature=457401e9be6b0bbc653b8ba1783372fa9caadf9a25312ac80e20a8645a12bd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIFOCMY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCGm4zmz1P0RdGAzbvy%2FQ5Xp9Ai9uMGGUzljeYpYkvHYAIhAOyCM2fmGBBQLWfdM12iZSGNTwD8lfMfaC%2B9pY6%2Fe3IeKv8DCBEQABoMNjM3NDIzMTgzODA1Igxloy4Nk3XUBSSfYFEq3AOYriS2WkpZ3nQWjsGSb6RrUcm%2FeOIrgOW2ikXMEQlAp9f7cNY1YR1%2Fv1LW35cfdu3BVV5n%2FuLLGdKA6mlb5uZAqhP8JC3rUfjeTooNyL95OD4%2B0UNBzlwphQ%2BB5ymYbPcpgZ7xuufeR2cEwfSylSN24bobNGcPRUXh9VH6JE3YYCv9YCA5aQaatKs1gj26j%2FqPSM6czRHBo5XvUz1lasoozXNx4viBAvWygIx3fS7UlucrXhzCWAD0xmjIC7ayawktKH30hUUaG%2BfOtKRC5H2LD01ohuPwjB82dXqC4OH3JKYmuIC5sQeEUC58jYguyXqf8N23tIskXoNq8hsvcYMC6ZkH%2BZaB%2FuhaGWwwY2hHJi3u%2Fj6uzF9mkoSy9sAEG2YZPTs127kkGfc5vELPrKOfZ%2BjmwmaVKZLlZB0WrWuIlLV5WSxsKYAg%2BFNZhcg7Ovc2OJP1LQaQMedWIpl0KamwQIqMD4Fs1X%2BJfb2pMlRqChyP3QmMwKIsRyZIimlaS3sbDi6h7gEcJRNq3%2B78gCT9oYZDbTYW3319NWZG99wn2TDKgT%2BKDYyQoEKzOJsEJe%2F%2F0HGWbeu19pLoX90G412N1Nej37pkzKyDWyr%2FZ1EmOcRoR4qq4Guh2tqz3DDsieTCBjqkAeSVHbRoRk51EvgPipC4J3N1lFeWsrtJAhca7iSY1yvup6kM3N31aRSMYqJilcaJnFwn5GJa2ZuBQfgsCEVknpgggmlg3PuSBAZeEOJUdxa7Qt%2Bt9euHiB2%2BnGP3%2Bh%2FfzW5L%2F40r7in%2B795SqDXcij%2BAgzwqAPonq8XsLyV1dSRV1eXeHdn0Qok%2Bh%2BwG%2FYw4FZSraZ7igmTAziviRklGD4D5%2BZql&X-Amz-Signature=0d3ef473a4818ea0d7f49a15b01597d53375d43b8e9c94a052250e79764f4c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIFOCMY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCGm4zmz1P0RdGAzbvy%2FQ5Xp9Ai9uMGGUzljeYpYkvHYAIhAOyCM2fmGBBQLWfdM12iZSGNTwD8lfMfaC%2B9pY6%2Fe3IeKv8DCBEQABoMNjM3NDIzMTgzODA1Igxloy4Nk3XUBSSfYFEq3AOYriS2WkpZ3nQWjsGSb6RrUcm%2FeOIrgOW2ikXMEQlAp9f7cNY1YR1%2Fv1LW35cfdu3BVV5n%2FuLLGdKA6mlb5uZAqhP8JC3rUfjeTooNyL95OD4%2B0UNBzlwphQ%2BB5ymYbPcpgZ7xuufeR2cEwfSylSN24bobNGcPRUXh9VH6JE3YYCv9YCA5aQaatKs1gj26j%2FqPSM6czRHBo5XvUz1lasoozXNx4viBAvWygIx3fS7UlucrXhzCWAD0xmjIC7ayawktKH30hUUaG%2BfOtKRC5H2LD01ohuPwjB82dXqC4OH3JKYmuIC5sQeEUC58jYguyXqf8N23tIskXoNq8hsvcYMC6ZkH%2BZaB%2FuhaGWwwY2hHJi3u%2Fj6uzF9mkoSy9sAEG2YZPTs127kkGfc5vELPrKOfZ%2BjmwmaVKZLlZB0WrWuIlLV5WSxsKYAg%2BFNZhcg7Ovc2OJP1LQaQMedWIpl0KamwQIqMD4Fs1X%2BJfb2pMlRqChyP3QmMwKIsRyZIimlaS3sbDi6h7gEcJRNq3%2B78gCT9oYZDbTYW3319NWZG99wn2TDKgT%2BKDYyQoEKzOJsEJe%2F%2F0HGWbeu19pLoX90G412N1Nej37pkzKyDWyr%2FZ1EmOcRoR4qq4Guh2tqz3DDsieTCBjqkAeSVHbRoRk51EvgPipC4J3N1lFeWsrtJAhca7iSY1yvup6kM3N31aRSMYqJilcaJnFwn5GJa2ZuBQfgsCEVknpgggmlg3PuSBAZeEOJUdxa7Qt%2Bt9euHiB2%2BnGP3%2Bh%2FfzW5L%2F40r7in%2B795SqDXcij%2BAgzwqAPonq8XsLyV1dSRV1eXeHdn0Qok%2Bh%2BwG%2FYw4FZSraZ7igmTAziviRklGD4D5%2BZql&X-Amz-Signature=1a790cf1fdc1ea551850f83576e90675a179f3f6e1935df3a6fd0ee8a186ff1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIFOCMY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCGm4zmz1P0RdGAzbvy%2FQ5Xp9Ai9uMGGUzljeYpYkvHYAIhAOyCM2fmGBBQLWfdM12iZSGNTwD8lfMfaC%2B9pY6%2Fe3IeKv8DCBEQABoMNjM3NDIzMTgzODA1Igxloy4Nk3XUBSSfYFEq3AOYriS2WkpZ3nQWjsGSb6RrUcm%2FeOIrgOW2ikXMEQlAp9f7cNY1YR1%2Fv1LW35cfdu3BVV5n%2FuLLGdKA6mlb5uZAqhP8JC3rUfjeTooNyL95OD4%2B0UNBzlwphQ%2BB5ymYbPcpgZ7xuufeR2cEwfSylSN24bobNGcPRUXh9VH6JE3YYCv9YCA5aQaatKs1gj26j%2FqPSM6czRHBo5XvUz1lasoozXNx4viBAvWygIx3fS7UlucrXhzCWAD0xmjIC7ayawktKH30hUUaG%2BfOtKRC5H2LD01ohuPwjB82dXqC4OH3JKYmuIC5sQeEUC58jYguyXqf8N23tIskXoNq8hsvcYMC6ZkH%2BZaB%2FuhaGWwwY2hHJi3u%2Fj6uzF9mkoSy9sAEG2YZPTs127kkGfc5vELPrKOfZ%2BjmwmaVKZLlZB0WrWuIlLV5WSxsKYAg%2BFNZhcg7Ovc2OJP1LQaQMedWIpl0KamwQIqMD4Fs1X%2BJfb2pMlRqChyP3QmMwKIsRyZIimlaS3sbDi6h7gEcJRNq3%2B78gCT9oYZDbTYW3319NWZG99wn2TDKgT%2BKDYyQoEKzOJsEJe%2F%2F0HGWbeu19pLoX90G412N1Nej37pkzKyDWyr%2FZ1EmOcRoR4qq4Guh2tqz3DDsieTCBjqkAeSVHbRoRk51EvgPipC4J3N1lFeWsrtJAhca7iSY1yvup6kM3N31aRSMYqJilcaJnFwn5GJa2ZuBQfgsCEVknpgggmlg3PuSBAZeEOJUdxa7Qt%2Bt9euHiB2%2BnGP3%2Bh%2FfzW5L%2F40r7in%2B795SqDXcij%2BAgzwqAPonq8XsLyV1dSRV1eXeHdn0Qok%2Bh%2BwG%2FYw4FZSraZ7igmTAziviRklGD4D5%2BZql&X-Amz-Signature=06644eaa321065c7b0051eb959f419f66784a86994fc969bb4f03720a5bfbc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIFOCMY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCGm4zmz1P0RdGAzbvy%2FQ5Xp9Ai9uMGGUzljeYpYkvHYAIhAOyCM2fmGBBQLWfdM12iZSGNTwD8lfMfaC%2B9pY6%2Fe3IeKv8DCBEQABoMNjM3NDIzMTgzODA1Igxloy4Nk3XUBSSfYFEq3AOYriS2WkpZ3nQWjsGSb6RrUcm%2FeOIrgOW2ikXMEQlAp9f7cNY1YR1%2Fv1LW35cfdu3BVV5n%2FuLLGdKA6mlb5uZAqhP8JC3rUfjeTooNyL95OD4%2B0UNBzlwphQ%2BB5ymYbPcpgZ7xuufeR2cEwfSylSN24bobNGcPRUXh9VH6JE3YYCv9YCA5aQaatKs1gj26j%2FqPSM6czRHBo5XvUz1lasoozXNx4viBAvWygIx3fS7UlucrXhzCWAD0xmjIC7ayawktKH30hUUaG%2BfOtKRC5H2LD01ohuPwjB82dXqC4OH3JKYmuIC5sQeEUC58jYguyXqf8N23tIskXoNq8hsvcYMC6ZkH%2BZaB%2FuhaGWwwY2hHJi3u%2Fj6uzF9mkoSy9sAEG2YZPTs127kkGfc5vELPrKOfZ%2BjmwmaVKZLlZB0WrWuIlLV5WSxsKYAg%2BFNZhcg7Ovc2OJP1LQaQMedWIpl0KamwQIqMD4Fs1X%2BJfb2pMlRqChyP3QmMwKIsRyZIimlaS3sbDi6h7gEcJRNq3%2B78gCT9oYZDbTYW3319NWZG99wn2TDKgT%2BKDYyQoEKzOJsEJe%2F%2F0HGWbeu19pLoX90G412N1Nej37pkzKyDWyr%2FZ1EmOcRoR4qq4Guh2tqz3DDsieTCBjqkAeSVHbRoRk51EvgPipC4J3N1lFeWsrtJAhca7iSY1yvup6kM3N31aRSMYqJilcaJnFwn5GJa2ZuBQfgsCEVknpgggmlg3PuSBAZeEOJUdxa7Qt%2Bt9euHiB2%2BnGP3%2Bh%2FfzW5L%2F40r7in%2B795SqDXcij%2BAgzwqAPonq8XsLyV1dSRV1eXeHdn0Qok%2Bh%2BwG%2FYw4FZSraZ7igmTAziviRklGD4D5%2BZql&X-Amz-Signature=07e7ad334bb7d1c8fb3db0adc4469e8c52482d2433cd66a14459a3bbe7eb39f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIFOCMY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCGm4zmz1P0RdGAzbvy%2FQ5Xp9Ai9uMGGUzljeYpYkvHYAIhAOyCM2fmGBBQLWfdM12iZSGNTwD8lfMfaC%2B9pY6%2Fe3IeKv8DCBEQABoMNjM3NDIzMTgzODA1Igxloy4Nk3XUBSSfYFEq3AOYriS2WkpZ3nQWjsGSb6RrUcm%2FeOIrgOW2ikXMEQlAp9f7cNY1YR1%2Fv1LW35cfdu3BVV5n%2FuLLGdKA6mlb5uZAqhP8JC3rUfjeTooNyL95OD4%2B0UNBzlwphQ%2BB5ymYbPcpgZ7xuufeR2cEwfSylSN24bobNGcPRUXh9VH6JE3YYCv9YCA5aQaatKs1gj26j%2FqPSM6czRHBo5XvUz1lasoozXNx4viBAvWygIx3fS7UlucrXhzCWAD0xmjIC7ayawktKH30hUUaG%2BfOtKRC5H2LD01ohuPwjB82dXqC4OH3JKYmuIC5sQeEUC58jYguyXqf8N23tIskXoNq8hsvcYMC6ZkH%2BZaB%2FuhaGWwwY2hHJi3u%2Fj6uzF9mkoSy9sAEG2YZPTs127kkGfc5vELPrKOfZ%2BjmwmaVKZLlZB0WrWuIlLV5WSxsKYAg%2BFNZhcg7Ovc2OJP1LQaQMedWIpl0KamwQIqMD4Fs1X%2BJfb2pMlRqChyP3QmMwKIsRyZIimlaS3sbDi6h7gEcJRNq3%2B78gCT9oYZDbTYW3319NWZG99wn2TDKgT%2BKDYyQoEKzOJsEJe%2F%2F0HGWbeu19pLoX90G412N1Nej37pkzKyDWyr%2FZ1EmOcRoR4qq4Guh2tqz3DDsieTCBjqkAeSVHbRoRk51EvgPipC4J3N1lFeWsrtJAhca7iSY1yvup6kM3N31aRSMYqJilcaJnFwn5GJa2ZuBQfgsCEVknpgggmlg3PuSBAZeEOJUdxa7Qt%2Bt9euHiB2%2BnGP3%2Bh%2FfzW5L%2F40r7in%2B795SqDXcij%2BAgzwqAPonq8XsLyV1dSRV1eXeHdn0Qok%2Bh%2BwG%2FYw4FZSraZ7igmTAziviRklGD4D5%2BZql&X-Amz-Signature=9ddd0d8f21dd6768e5aeda3ccde088ef2429297fdffe8ddaad0cbc648a1ff952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
