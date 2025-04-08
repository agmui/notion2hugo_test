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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLSYXYN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Ot6u1bGR5gEhKfFYoTACHxwUbx4wCL3bLjSx%2FHPTtQIgbwvu8zx20N7PmqlmbRLB56l7vLDg7rBZhFz3esgru8cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCZ5te%2FVH8MoklQiYyrcA4iqpz7a1zINDXQO4tf8AM9SBNa53xlGJlQ6n0MbjOQ27ccXHk5ElFMzXf3SHLabYlsXN7d8O4ZIAVVa9GQSm6EteiXS%2Fg147hu%2Ba%2FZ9JizIZ%2F6zwKXuC%2FtpH0AaGu0k9O4eCVaSeo0mV4x6GRdJNgcmjVZuY8K%2BpJQNcz0TeKIBnsZiAUpz4%2F0a8PRbORqoB4npxmEzT6N%2F99vbKeXsp%2BSDye2eAjsp2EH6rERfGrKPKEbroAK5d5SPSapizM3homgeQ3GEoWvDCEKMUOOokyPblp8RoZexdkQd5OPM0o5%2FzQexAr4zpUBcYQd%2F5I1JcpEkExj2K8PgYTqQh44Tmc22oAecDMAdhlLnmoBZ%2By4Xv0JecRda%2FYP8M3A3YP2u%2BMBiV2gk2e%2Bqoai9bP9RX0VC4Yx5Ts%2BLLsb8tui2qjis7RoCNGzlM1QCAuXxlzMxFlYWByIgxYplYoxr3nKeVMMZ6NzdJKvzzTkNAMi8Gc73P8T8PYcpYEJuee4mN%2Bmd3cI%2FVqI3qp%2Fk3OGuvnxxIz4PJpxzsg7BeubDvypK%2BwFU4qkAAn0FO%2BrG7%2BZ%2BVIsawXtlsC%2BR3qsDEDjLBXL5z4Q3o0Vl5w3uWMBfTwsqMbR3ZHEx38gETXhXD0afMM2J1L8GOqUBIXOfYY05AYAliHKpWtiGhFSdmeLKRbozJYXo7lnYl0iTGmN13LvPBVHOYtKnByU8%2BXH4qLmuXvOqtcazQFdHJOcQN4KT%2BJcm6%2BxiXyP2xkzjfdQ31a%2FUpy6L%2BtheGlAN8F9%2FqApVZyXNZe8%2FYweEz4B0cvXN4rsmgDBjcS3PS4UcJ94v%2F291HxjfT6QmpC1bPg7wKMWgZt9up4YbMU4qpqtp3AxM&X-Amz-Signature=04fec53566401e3b406a0d9916ad03724809f41802f83b3d82c94f7879ed6c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLSYXYN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Ot6u1bGR5gEhKfFYoTACHxwUbx4wCL3bLjSx%2FHPTtQIgbwvu8zx20N7PmqlmbRLB56l7vLDg7rBZhFz3esgru8cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCZ5te%2FVH8MoklQiYyrcA4iqpz7a1zINDXQO4tf8AM9SBNa53xlGJlQ6n0MbjOQ27ccXHk5ElFMzXf3SHLabYlsXN7d8O4ZIAVVa9GQSm6EteiXS%2Fg147hu%2Ba%2FZ9JizIZ%2F6zwKXuC%2FtpH0AaGu0k9O4eCVaSeo0mV4x6GRdJNgcmjVZuY8K%2BpJQNcz0TeKIBnsZiAUpz4%2F0a8PRbORqoB4npxmEzT6N%2F99vbKeXsp%2BSDye2eAjsp2EH6rERfGrKPKEbroAK5d5SPSapizM3homgeQ3GEoWvDCEKMUOOokyPblp8RoZexdkQd5OPM0o5%2FzQexAr4zpUBcYQd%2F5I1JcpEkExj2K8PgYTqQh44Tmc22oAecDMAdhlLnmoBZ%2By4Xv0JecRda%2FYP8M3A3YP2u%2BMBiV2gk2e%2Bqoai9bP9RX0VC4Yx5Ts%2BLLsb8tui2qjis7RoCNGzlM1QCAuXxlzMxFlYWByIgxYplYoxr3nKeVMMZ6NzdJKvzzTkNAMi8Gc73P8T8PYcpYEJuee4mN%2Bmd3cI%2FVqI3qp%2Fk3OGuvnxxIz4PJpxzsg7BeubDvypK%2BwFU4qkAAn0FO%2BrG7%2BZ%2BVIsawXtlsC%2BR3qsDEDjLBXL5z4Q3o0Vl5w3uWMBfTwsqMbR3ZHEx38gETXhXD0afMM2J1L8GOqUBIXOfYY05AYAliHKpWtiGhFSdmeLKRbozJYXo7lnYl0iTGmN13LvPBVHOYtKnByU8%2BXH4qLmuXvOqtcazQFdHJOcQN4KT%2BJcm6%2BxiXyP2xkzjfdQ31a%2FUpy6L%2BtheGlAN8F9%2FqApVZyXNZe8%2FYweEz4B0cvXN4rsmgDBjcS3PS4UcJ94v%2F291HxjfT6QmpC1bPg7wKMWgZt9up4YbMU4qpqtp3AxM&X-Amz-Signature=65c5351b85ffa3f2770ab3f1554427d66efe3945bd8723f7888f327ed889bc54&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLSYXYN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Ot6u1bGR5gEhKfFYoTACHxwUbx4wCL3bLjSx%2FHPTtQIgbwvu8zx20N7PmqlmbRLB56l7vLDg7rBZhFz3esgru8cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCZ5te%2FVH8MoklQiYyrcA4iqpz7a1zINDXQO4tf8AM9SBNa53xlGJlQ6n0MbjOQ27ccXHk5ElFMzXf3SHLabYlsXN7d8O4ZIAVVa9GQSm6EteiXS%2Fg147hu%2Ba%2FZ9JizIZ%2F6zwKXuC%2FtpH0AaGu0k9O4eCVaSeo0mV4x6GRdJNgcmjVZuY8K%2BpJQNcz0TeKIBnsZiAUpz4%2F0a8PRbORqoB4npxmEzT6N%2F99vbKeXsp%2BSDye2eAjsp2EH6rERfGrKPKEbroAK5d5SPSapizM3homgeQ3GEoWvDCEKMUOOokyPblp8RoZexdkQd5OPM0o5%2FzQexAr4zpUBcYQd%2F5I1JcpEkExj2K8PgYTqQh44Tmc22oAecDMAdhlLnmoBZ%2By4Xv0JecRda%2FYP8M3A3YP2u%2BMBiV2gk2e%2Bqoai9bP9RX0VC4Yx5Ts%2BLLsb8tui2qjis7RoCNGzlM1QCAuXxlzMxFlYWByIgxYplYoxr3nKeVMMZ6NzdJKvzzTkNAMi8Gc73P8T8PYcpYEJuee4mN%2Bmd3cI%2FVqI3qp%2Fk3OGuvnxxIz4PJpxzsg7BeubDvypK%2BwFU4qkAAn0FO%2BrG7%2BZ%2BVIsawXtlsC%2BR3qsDEDjLBXL5z4Q3o0Vl5w3uWMBfTwsqMbR3ZHEx38gETXhXD0afMM2J1L8GOqUBIXOfYY05AYAliHKpWtiGhFSdmeLKRbozJYXo7lnYl0iTGmN13LvPBVHOYtKnByU8%2BXH4qLmuXvOqtcazQFdHJOcQN4KT%2BJcm6%2BxiXyP2xkzjfdQ31a%2FUpy6L%2BtheGlAN8F9%2FqApVZyXNZe8%2FYweEz4B0cvXN4rsmgDBjcS3PS4UcJ94v%2F291HxjfT6QmpC1bPg7wKMWgZt9up4YbMU4qpqtp3AxM&X-Amz-Signature=58b0f020dd2d04da41460a4cc865e7063899eb372090560d6f9e88e26209d0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLSYXYN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Ot6u1bGR5gEhKfFYoTACHxwUbx4wCL3bLjSx%2FHPTtQIgbwvu8zx20N7PmqlmbRLB56l7vLDg7rBZhFz3esgru8cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCZ5te%2FVH8MoklQiYyrcA4iqpz7a1zINDXQO4tf8AM9SBNa53xlGJlQ6n0MbjOQ27ccXHk5ElFMzXf3SHLabYlsXN7d8O4ZIAVVa9GQSm6EteiXS%2Fg147hu%2Ba%2FZ9JizIZ%2F6zwKXuC%2FtpH0AaGu0k9O4eCVaSeo0mV4x6GRdJNgcmjVZuY8K%2BpJQNcz0TeKIBnsZiAUpz4%2F0a8PRbORqoB4npxmEzT6N%2F99vbKeXsp%2BSDye2eAjsp2EH6rERfGrKPKEbroAK5d5SPSapizM3homgeQ3GEoWvDCEKMUOOokyPblp8RoZexdkQd5OPM0o5%2FzQexAr4zpUBcYQd%2F5I1JcpEkExj2K8PgYTqQh44Tmc22oAecDMAdhlLnmoBZ%2By4Xv0JecRda%2FYP8M3A3YP2u%2BMBiV2gk2e%2Bqoai9bP9RX0VC4Yx5Ts%2BLLsb8tui2qjis7RoCNGzlM1QCAuXxlzMxFlYWByIgxYplYoxr3nKeVMMZ6NzdJKvzzTkNAMi8Gc73P8T8PYcpYEJuee4mN%2Bmd3cI%2FVqI3qp%2Fk3OGuvnxxIz4PJpxzsg7BeubDvypK%2BwFU4qkAAn0FO%2BrG7%2BZ%2BVIsawXtlsC%2BR3qsDEDjLBXL5z4Q3o0Vl5w3uWMBfTwsqMbR3ZHEx38gETXhXD0afMM2J1L8GOqUBIXOfYY05AYAliHKpWtiGhFSdmeLKRbozJYXo7lnYl0iTGmN13LvPBVHOYtKnByU8%2BXH4qLmuXvOqtcazQFdHJOcQN4KT%2BJcm6%2BxiXyP2xkzjfdQ31a%2FUpy6L%2BtheGlAN8F9%2FqApVZyXNZe8%2FYweEz4B0cvXN4rsmgDBjcS3PS4UcJ94v%2F291HxjfT6QmpC1bPg7wKMWgZt9up4YbMU4qpqtp3AxM&X-Amz-Signature=50b8230f15edb37404a2b7e210663a462c7ded61652597b38db3833bad006e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLSYXYN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Ot6u1bGR5gEhKfFYoTACHxwUbx4wCL3bLjSx%2FHPTtQIgbwvu8zx20N7PmqlmbRLB56l7vLDg7rBZhFz3esgru8cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCZ5te%2FVH8MoklQiYyrcA4iqpz7a1zINDXQO4tf8AM9SBNa53xlGJlQ6n0MbjOQ27ccXHk5ElFMzXf3SHLabYlsXN7d8O4ZIAVVa9GQSm6EteiXS%2Fg147hu%2Ba%2FZ9JizIZ%2F6zwKXuC%2FtpH0AaGu0k9O4eCVaSeo0mV4x6GRdJNgcmjVZuY8K%2BpJQNcz0TeKIBnsZiAUpz4%2F0a8PRbORqoB4npxmEzT6N%2F99vbKeXsp%2BSDye2eAjsp2EH6rERfGrKPKEbroAK5d5SPSapizM3homgeQ3GEoWvDCEKMUOOokyPblp8RoZexdkQd5OPM0o5%2FzQexAr4zpUBcYQd%2F5I1JcpEkExj2K8PgYTqQh44Tmc22oAecDMAdhlLnmoBZ%2By4Xv0JecRda%2FYP8M3A3YP2u%2BMBiV2gk2e%2Bqoai9bP9RX0VC4Yx5Ts%2BLLsb8tui2qjis7RoCNGzlM1QCAuXxlzMxFlYWByIgxYplYoxr3nKeVMMZ6NzdJKvzzTkNAMi8Gc73P8T8PYcpYEJuee4mN%2Bmd3cI%2FVqI3qp%2Fk3OGuvnxxIz4PJpxzsg7BeubDvypK%2BwFU4qkAAn0FO%2BrG7%2BZ%2BVIsawXtlsC%2BR3qsDEDjLBXL5z4Q3o0Vl5w3uWMBfTwsqMbR3ZHEx38gETXhXD0afMM2J1L8GOqUBIXOfYY05AYAliHKpWtiGhFSdmeLKRbozJYXo7lnYl0iTGmN13LvPBVHOYtKnByU8%2BXH4qLmuXvOqtcazQFdHJOcQN4KT%2BJcm6%2BxiXyP2xkzjfdQ31a%2FUpy6L%2BtheGlAN8F9%2FqApVZyXNZe8%2FYweEz4B0cvXN4rsmgDBjcS3PS4UcJ94v%2F291HxjfT6QmpC1bPg7wKMWgZt9up4YbMU4qpqtp3AxM&X-Amz-Signature=f6fbd57276ff9142783e9719d290e95163a23bfab7ee9a5ccbf8262b57999034&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLSYXYN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Ot6u1bGR5gEhKfFYoTACHxwUbx4wCL3bLjSx%2FHPTtQIgbwvu8zx20N7PmqlmbRLB56l7vLDg7rBZhFz3esgru8cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCZ5te%2FVH8MoklQiYyrcA4iqpz7a1zINDXQO4tf8AM9SBNa53xlGJlQ6n0MbjOQ27ccXHk5ElFMzXf3SHLabYlsXN7d8O4ZIAVVa9GQSm6EteiXS%2Fg147hu%2Ba%2FZ9JizIZ%2F6zwKXuC%2FtpH0AaGu0k9O4eCVaSeo0mV4x6GRdJNgcmjVZuY8K%2BpJQNcz0TeKIBnsZiAUpz4%2F0a8PRbORqoB4npxmEzT6N%2F99vbKeXsp%2BSDye2eAjsp2EH6rERfGrKPKEbroAK5d5SPSapizM3homgeQ3GEoWvDCEKMUOOokyPblp8RoZexdkQd5OPM0o5%2FzQexAr4zpUBcYQd%2F5I1JcpEkExj2K8PgYTqQh44Tmc22oAecDMAdhlLnmoBZ%2By4Xv0JecRda%2FYP8M3A3YP2u%2BMBiV2gk2e%2Bqoai9bP9RX0VC4Yx5Ts%2BLLsb8tui2qjis7RoCNGzlM1QCAuXxlzMxFlYWByIgxYplYoxr3nKeVMMZ6NzdJKvzzTkNAMi8Gc73P8T8PYcpYEJuee4mN%2Bmd3cI%2FVqI3qp%2Fk3OGuvnxxIz4PJpxzsg7BeubDvypK%2BwFU4qkAAn0FO%2BrG7%2BZ%2BVIsawXtlsC%2BR3qsDEDjLBXL5z4Q3o0Vl5w3uWMBfTwsqMbR3ZHEx38gETXhXD0afMM2J1L8GOqUBIXOfYY05AYAliHKpWtiGhFSdmeLKRbozJYXo7lnYl0iTGmN13LvPBVHOYtKnByU8%2BXH4qLmuXvOqtcazQFdHJOcQN4KT%2BJcm6%2BxiXyP2xkzjfdQ31a%2FUpy6L%2BtheGlAN8F9%2FqApVZyXNZe8%2FYweEz4B0cvXN4rsmgDBjcS3PS4UcJ94v%2F291HxjfT6QmpC1bPg7wKMWgZt9up4YbMU4qpqtp3AxM&X-Amz-Signature=1248cef89cb06c3488622d21e512ffb107e89384991a7f809f75e788be6b6461&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLSYXYN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Ot6u1bGR5gEhKfFYoTACHxwUbx4wCL3bLjSx%2FHPTtQIgbwvu8zx20N7PmqlmbRLB56l7vLDg7rBZhFz3esgru8cq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCZ5te%2FVH8MoklQiYyrcA4iqpz7a1zINDXQO4tf8AM9SBNa53xlGJlQ6n0MbjOQ27ccXHk5ElFMzXf3SHLabYlsXN7d8O4ZIAVVa9GQSm6EteiXS%2Fg147hu%2Ba%2FZ9JizIZ%2F6zwKXuC%2FtpH0AaGu0k9O4eCVaSeo0mV4x6GRdJNgcmjVZuY8K%2BpJQNcz0TeKIBnsZiAUpz4%2F0a8PRbORqoB4npxmEzT6N%2F99vbKeXsp%2BSDye2eAjsp2EH6rERfGrKPKEbroAK5d5SPSapizM3homgeQ3GEoWvDCEKMUOOokyPblp8RoZexdkQd5OPM0o5%2FzQexAr4zpUBcYQd%2F5I1JcpEkExj2K8PgYTqQh44Tmc22oAecDMAdhlLnmoBZ%2By4Xv0JecRda%2FYP8M3A3YP2u%2BMBiV2gk2e%2Bqoai9bP9RX0VC4Yx5Ts%2BLLsb8tui2qjis7RoCNGzlM1QCAuXxlzMxFlYWByIgxYplYoxr3nKeVMMZ6NzdJKvzzTkNAMi8Gc73P8T8PYcpYEJuee4mN%2Bmd3cI%2FVqI3qp%2Fk3OGuvnxxIz4PJpxzsg7BeubDvypK%2BwFU4qkAAn0FO%2BrG7%2BZ%2BVIsawXtlsC%2BR3qsDEDjLBXL5z4Q3o0Vl5w3uWMBfTwsqMbR3ZHEx38gETXhXD0afMM2J1L8GOqUBIXOfYY05AYAliHKpWtiGhFSdmeLKRbozJYXo7lnYl0iTGmN13LvPBVHOYtKnByU8%2BXH4qLmuXvOqtcazQFdHJOcQN4KT%2BJcm6%2BxiXyP2xkzjfdQ31a%2FUpy6L%2BtheGlAN8F9%2FqApVZyXNZe8%2FYweEz4B0cvXN4rsmgDBjcS3PS4UcJ94v%2F291HxjfT6QmpC1bPg7wKMWgZt9up4YbMU4qpqtp3AxM&X-Amz-Signature=5959b6204da3eec87eed6419f24824c82f4d47c28e3858a604e925ccc3ad1cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
