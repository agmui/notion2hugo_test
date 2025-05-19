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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DSDHP6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtYEwRkbqNpsDkPphYEytLPCWevQz8TBtE13qi5H6SAiAfybRqF8TvK1ducdLEnWRWxSleXRGi8RDC41vsYTk2MCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSUUWTUkPORZUdWfKtwDnIbbYsC9ilCD8o3tA0I3%2FHL9I1FjpOJFgc8PtxG0fmzjfSBfYkWKxP93dMyaeijg%2FdVZvaOZfp2sa6r7XsuGpeSiJmufPBMZFEV%2FY7RAtDTSiikcBjKWJvnSoCa07jvY6iy4Rd0kGowDFtSItycIv%2Bn00gTKXaGt7MNK3oCVkDe4kIpaPaY5wsyRGKtDPpZlCStk8mFTnrgwEncA7boUyCZGTtFUXXKszcYm6ZrvAdKGcQTHKAg2ncsR1YLZ19KN%2BPUZhHVdj67khXxnt1kgnKnsTpvpC8evYg8VURX%2F89D%2BQ7VqRz4nXXEkiQIPOjV8WhNlyh4s5WGE0G74vxv2vDJ5qhaO1Qc49LnJfLGm9%2FzOHbqvDHu6OV6HYAuhCPPjKfHkQjWH6Kq8sBwYZEQwi9z4D6F%2BFjJH06K%2Ff7W4yF8boxUQ3UTUE6Qe0VEb4uHvzJTzHyDkztgrYNBzHGMmPtyhNX%2FaAYgGFSzU13lXPSLVuX%2B2viCswsH1oHpkPcw9%2BJr%2BrijPyrm4AWp8LBp6uDLZlOr5FFpez7sNuvOYnle1RgzCzJ%2BT4PXwkOXWeOgpC8dirwHjSToAyEMkbjXqvsrdMYisS%2BuoZgko%2FqJVw7ugku4dVQDEgjdFd5owmuypwQY6pgGBar5H1GKqf3fjMOBHl6dcpj%2BaPsaZOHat1Zrn7P8ldxqsHQJGd2NzLIzdKp1Zkfacc4t9cc4tLWeZDSW1s8KoOsK0HDf6fBr3wDK3qgKzgu7iprriu5XcGyqF2NQGqv%2Bt6hDg8H1Y9iHYcMx0xzeyIq4on1wPkdpKjmTnLuYamaoUNlqv5U2Y8oZJ8AbTFR8Bf8KKHEElMKnTKdq1xF%2Fd5lSNATCq&X-Amz-Signature=b172fd43027e9cfeb77499f1a7eef43f8982b40d78e0b8ebfd1ad29556af5226&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DSDHP6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtYEwRkbqNpsDkPphYEytLPCWevQz8TBtE13qi5H6SAiAfybRqF8TvK1ducdLEnWRWxSleXRGi8RDC41vsYTk2MCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSUUWTUkPORZUdWfKtwDnIbbYsC9ilCD8o3tA0I3%2FHL9I1FjpOJFgc8PtxG0fmzjfSBfYkWKxP93dMyaeijg%2FdVZvaOZfp2sa6r7XsuGpeSiJmufPBMZFEV%2FY7RAtDTSiikcBjKWJvnSoCa07jvY6iy4Rd0kGowDFtSItycIv%2Bn00gTKXaGt7MNK3oCVkDe4kIpaPaY5wsyRGKtDPpZlCStk8mFTnrgwEncA7boUyCZGTtFUXXKszcYm6ZrvAdKGcQTHKAg2ncsR1YLZ19KN%2BPUZhHVdj67khXxnt1kgnKnsTpvpC8evYg8VURX%2F89D%2BQ7VqRz4nXXEkiQIPOjV8WhNlyh4s5WGE0G74vxv2vDJ5qhaO1Qc49LnJfLGm9%2FzOHbqvDHu6OV6HYAuhCPPjKfHkQjWH6Kq8sBwYZEQwi9z4D6F%2BFjJH06K%2Ff7W4yF8boxUQ3UTUE6Qe0VEb4uHvzJTzHyDkztgrYNBzHGMmPtyhNX%2FaAYgGFSzU13lXPSLVuX%2B2viCswsH1oHpkPcw9%2BJr%2BrijPyrm4AWp8LBp6uDLZlOr5FFpez7sNuvOYnle1RgzCzJ%2BT4PXwkOXWeOgpC8dirwHjSToAyEMkbjXqvsrdMYisS%2BuoZgko%2FqJVw7ugku4dVQDEgjdFd5owmuypwQY6pgGBar5H1GKqf3fjMOBHl6dcpj%2BaPsaZOHat1Zrn7P8ldxqsHQJGd2NzLIzdKp1Zkfacc4t9cc4tLWeZDSW1s8KoOsK0HDf6fBr3wDK3qgKzgu7iprriu5XcGyqF2NQGqv%2Bt6hDg8H1Y9iHYcMx0xzeyIq4on1wPkdpKjmTnLuYamaoUNlqv5U2Y8oZJ8AbTFR8Bf8KKHEElMKnTKdq1xF%2Fd5lSNATCq&X-Amz-Signature=acd6ca14dd6e28ced73b5ac5f9baf044538b77c293e28550d7540c39381dcc36&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DSDHP6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtYEwRkbqNpsDkPphYEytLPCWevQz8TBtE13qi5H6SAiAfybRqF8TvK1ducdLEnWRWxSleXRGi8RDC41vsYTk2MCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSUUWTUkPORZUdWfKtwDnIbbYsC9ilCD8o3tA0I3%2FHL9I1FjpOJFgc8PtxG0fmzjfSBfYkWKxP93dMyaeijg%2FdVZvaOZfp2sa6r7XsuGpeSiJmufPBMZFEV%2FY7RAtDTSiikcBjKWJvnSoCa07jvY6iy4Rd0kGowDFtSItycIv%2Bn00gTKXaGt7MNK3oCVkDe4kIpaPaY5wsyRGKtDPpZlCStk8mFTnrgwEncA7boUyCZGTtFUXXKszcYm6ZrvAdKGcQTHKAg2ncsR1YLZ19KN%2BPUZhHVdj67khXxnt1kgnKnsTpvpC8evYg8VURX%2F89D%2BQ7VqRz4nXXEkiQIPOjV8WhNlyh4s5WGE0G74vxv2vDJ5qhaO1Qc49LnJfLGm9%2FzOHbqvDHu6OV6HYAuhCPPjKfHkQjWH6Kq8sBwYZEQwi9z4D6F%2BFjJH06K%2Ff7W4yF8boxUQ3UTUE6Qe0VEb4uHvzJTzHyDkztgrYNBzHGMmPtyhNX%2FaAYgGFSzU13lXPSLVuX%2B2viCswsH1oHpkPcw9%2BJr%2BrijPyrm4AWp8LBp6uDLZlOr5FFpez7sNuvOYnle1RgzCzJ%2BT4PXwkOXWeOgpC8dirwHjSToAyEMkbjXqvsrdMYisS%2BuoZgko%2FqJVw7ugku4dVQDEgjdFd5owmuypwQY6pgGBar5H1GKqf3fjMOBHl6dcpj%2BaPsaZOHat1Zrn7P8ldxqsHQJGd2NzLIzdKp1Zkfacc4t9cc4tLWeZDSW1s8KoOsK0HDf6fBr3wDK3qgKzgu7iprriu5XcGyqF2NQGqv%2Bt6hDg8H1Y9iHYcMx0xzeyIq4on1wPkdpKjmTnLuYamaoUNlqv5U2Y8oZJ8AbTFR8Bf8KKHEElMKnTKdq1xF%2Fd5lSNATCq&X-Amz-Signature=e85a77470997f2580c4f9357a7170e1dc8a58e46bcadb504b85fb9fa6385ddf0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DSDHP6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtYEwRkbqNpsDkPphYEytLPCWevQz8TBtE13qi5H6SAiAfybRqF8TvK1ducdLEnWRWxSleXRGi8RDC41vsYTk2MCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSUUWTUkPORZUdWfKtwDnIbbYsC9ilCD8o3tA0I3%2FHL9I1FjpOJFgc8PtxG0fmzjfSBfYkWKxP93dMyaeijg%2FdVZvaOZfp2sa6r7XsuGpeSiJmufPBMZFEV%2FY7RAtDTSiikcBjKWJvnSoCa07jvY6iy4Rd0kGowDFtSItycIv%2Bn00gTKXaGt7MNK3oCVkDe4kIpaPaY5wsyRGKtDPpZlCStk8mFTnrgwEncA7boUyCZGTtFUXXKszcYm6ZrvAdKGcQTHKAg2ncsR1YLZ19KN%2BPUZhHVdj67khXxnt1kgnKnsTpvpC8evYg8VURX%2F89D%2BQ7VqRz4nXXEkiQIPOjV8WhNlyh4s5WGE0G74vxv2vDJ5qhaO1Qc49LnJfLGm9%2FzOHbqvDHu6OV6HYAuhCPPjKfHkQjWH6Kq8sBwYZEQwi9z4D6F%2BFjJH06K%2Ff7W4yF8boxUQ3UTUE6Qe0VEb4uHvzJTzHyDkztgrYNBzHGMmPtyhNX%2FaAYgGFSzU13lXPSLVuX%2B2viCswsH1oHpkPcw9%2BJr%2BrijPyrm4AWp8LBp6uDLZlOr5FFpez7sNuvOYnle1RgzCzJ%2BT4PXwkOXWeOgpC8dirwHjSToAyEMkbjXqvsrdMYisS%2BuoZgko%2FqJVw7ugku4dVQDEgjdFd5owmuypwQY6pgGBar5H1GKqf3fjMOBHl6dcpj%2BaPsaZOHat1Zrn7P8ldxqsHQJGd2NzLIzdKp1Zkfacc4t9cc4tLWeZDSW1s8KoOsK0HDf6fBr3wDK3qgKzgu7iprriu5XcGyqF2NQGqv%2Bt6hDg8H1Y9iHYcMx0xzeyIq4on1wPkdpKjmTnLuYamaoUNlqv5U2Y8oZJ8AbTFR8Bf8KKHEElMKnTKdq1xF%2Fd5lSNATCq&X-Amz-Signature=7d6a5166464a882e75834a2234f8fb2cc3d5021b02e6a94396f804016a8818a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DSDHP6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtYEwRkbqNpsDkPphYEytLPCWevQz8TBtE13qi5H6SAiAfybRqF8TvK1ducdLEnWRWxSleXRGi8RDC41vsYTk2MCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSUUWTUkPORZUdWfKtwDnIbbYsC9ilCD8o3tA0I3%2FHL9I1FjpOJFgc8PtxG0fmzjfSBfYkWKxP93dMyaeijg%2FdVZvaOZfp2sa6r7XsuGpeSiJmufPBMZFEV%2FY7RAtDTSiikcBjKWJvnSoCa07jvY6iy4Rd0kGowDFtSItycIv%2Bn00gTKXaGt7MNK3oCVkDe4kIpaPaY5wsyRGKtDPpZlCStk8mFTnrgwEncA7boUyCZGTtFUXXKszcYm6ZrvAdKGcQTHKAg2ncsR1YLZ19KN%2BPUZhHVdj67khXxnt1kgnKnsTpvpC8evYg8VURX%2F89D%2BQ7VqRz4nXXEkiQIPOjV8WhNlyh4s5WGE0G74vxv2vDJ5qhaO1Qc49LnJfLGm9%2FzOHbqvDHu6OV6HYAuhCPPjKfHkQjWH6Kq8sBwYZEQwi9z4D6F%2BFjJH06K%2Ff7W4yF8boxUQ3UTUE6Qe0VEb4uHvzJTzHyDkztgrYNBzHGMmPtyhNX%2FaAYgGFSzU13lXPSLVuX%2B2viCswsH1oHpkPcw9%2BJr%2BrijPyrm4AWp8LBp6uDLZlOr5FFpez7sNuvOYnle1RgzCzJ%2BT4PXwkOXWeOgpC8dirwHjSToAyEMkbjXqvsrdMYisS%2BuoZgko%2FqJVw7ugku4dVQDEgjdFd5owmuypwQY6pgGBar5H1GKqf3fjMOBHl6dcpj%2BaPsaZOHat1Zrn7P8ldxqsHQJGd2NzLIzdKp1Zkfacc4t9cc4tLWeZDSW1s8KoOsK0HDf6fBr3wDK3qgKzgu7iprriu5XcGyqF2NQGqv%2Bt6hDg8H1Y9iHYcMx0xzeyIq4on1wPkdpKjmTnLuYamaoUNlqv5U2Y8oZJ8AbTFR8Bf8KKHEElMKnTKdq1xF%2Fd5lSNATCq&X-Amz-Signature=d6846e8e6acb21dd67ee6a82c2bf40660a8ac48f3dd6b8a3991258d2344cd0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DSDHP6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtYEwRkbqNpsDkPphYEytLPCWevQz8TBtE13qi5H6SAiAfybRqF8TvK1ducdLEnWRWxSleXRGi8RDC41vsYTk2MCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSUUWTUkPORZUdWfKtwDnIbbYsC9ilCD8o3tA0I3%2FHL9I1FjpOJFgc8PtxG0fmzjfSBfYkWKxP93dMyaeijg%2FdVZvaOZfp2sa6r7XsuGpeSiJmufPBMZFEV%2FY7RAtDTSiikcBjKWJvnSoCa07jvY6iy4Rd0kGowDFtSItycIv%2Bn00gTKXaGt7MNK3oCVkDe4kIpaPaY5wsyRGKtDPpZlCStk8mFTnrgwEncA7boUyCZGTtFUXXKszcYm6ZrvAdKGcQTHKAg2ncsR1YLZ19KN%2BPUZhHVdj67khXxnt1kgnKnsTpvpC8evYg8VURX%2F89D%2BQ7VqRz4nXXEkiQIPOjV8WhNlyh4s5WGE0G74vxv2vDJ5qhaO1Qc49LnJfLGm9%2FzOHbqvDHu6OV6HYAuhCPPjKfHkQjWH6Kq8sBwYZEQwi9z4D6F%2BFjJH06K%2Ff7W4yF8boxUQ3UTUE6Qe0VEb4uHvzJTzHyDkztgrYNBzHGMmPtyhNX%2FaAYgGFSzU13lXPSLVuX%2B2viCswsH1oHpkPcw9%2BJr%2BrijPyrm4AWp8LBp6uDLZlOr5FFpez7sNuvOYnle1RgzCzJ%2BT4PXwkOXWeOgpC8dirwHjSToAyEMkbjXqvsrdMYisS%2BuoZgko%2FqJVw7ugku4dVQDEgjdFd5owmuypwQY6pgGBar5H1GKqf3fjMOBHl6dcpj%2BaPsaZOHat1Zrn7P8ldxqsHQJGd2NzLIzdKp1Zkfacc4t9cc4tLWeZDSW1s8KoOsK0HDf6fBr3wDK3qgKzgu7iprriu5XcGyqF2NQGqv%2Bt6hDg8H1Y9iHYcMx0xzeyIq4on1wPkdpKjmTnLuYamaoUNlqv5U2Y8oZJ8AbTFR8Bf8KKHEElMKnTKdq1xF%2Fd5lSNATCq&X-Amz-Signature=4ac3e4b272c8e519d4ae40e7aaa37a2ef7d6d847e76116aef36fdc25f767ddc1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DSDHP6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtYEwRkbqNpsDkPphYEytLPCWevQz8TBtE13qi5H6SAiAfybRqF8TvK1ducdLEnWRWxSleXRGi8RDC41vsYTk2MCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSUUWTUkPORZUdWfKtwDnIbbYsC9ilCD8o3tA0I3%2FHL9I1FjpOJFgc8PtxG0fmzjfSBfYkWKxP93dMyaeijg%2FdVZvaOZfp2sa6r7XsuGpeSiJmufPBMZFEV%2FY7RAtDTSiikcBjKWJvnSoCa07jvY6iy4Rd0kGowDFtSItycIv%2Bn00gTKXaGt7MNK3oCVkDe4kIpaPaY5wsyRGKtDPpZlCStk8mFTnrgwEncA7boUyCZGTtFUXXKszcYm6ZrvAdKGcQTHKAg2ncsR1YLZ19KN%2BPUZhHVdj67khXxnt1kgnKnsTpvpC8evYg8VURX%2F89D%2BQ7VqRz4nXXEkiQIPOjV8WhNlyh4s5WGE0G74vxv2vDJ5qhaO1Qc49LnJfLGm9%2FzOHbqvDHu6OV6HYAuhCPPjKfHkQjWH6Kq8sBwYZEQwi9z4D6F%2BFjJH06K%2Ff7W4yF8boxUQ3UTUE6Qe0VEb4uHvzJTzHyDkztgrYNBzHGMmPtyhNX%2FaAYgGFSzU13lXPSLVuX%2B2viCswsH1oHpkPcw9%2BJr%2BrijPyrm4AWp8LBp6uDLZlOr5FFpez7sNuvOYnle1RgzCzJ%2BT4PXwkOXWeOgpC8dirwHjSToAyEMkbjXqvsrdMYisS%2BuoZgko%2FqJVw7ugku4dVQDEgjdFd5owmuypwQY6pgGBar5H1GKqf3fjMOBHl6dcpj%2BaPsaZOHat1Zrn7P8ldxqsHQJGd2NzLIzdKp1Zkfacc4t9cc4tLWeZDSW1s8KoOsK0HDf6fBr3wDK3qgKzgu7iprriu5XcGyqF2NQGqv%2Bt6hDg8H1Y9iHYcMx0xzeyIq4on1wPkdpKjmTnLuYamaoUNlqv5U2Y8oZJ8AbTFR8Bf8KKHEElMKnTKdq1xF%2Fd5lSNATCq&X-Amz-Signature=2ad1d09ad5f12c9688ca1871f3acad711bcc4528f2c8ae122ad0c830f30c8ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
