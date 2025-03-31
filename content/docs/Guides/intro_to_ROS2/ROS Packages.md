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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAI4JDBJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAv2o3f2akXhPIqLGglnvFQ2kIZ%2FHEqBQHslR9%2FHkATNAiB7XCkoR4v30XoGFmDnuKjNq43C7%2F26OKogS7JPwjJ%2BSiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HwlDDFUnoZXVp%2BlKtwD02bcAC3OQ05UvLJQGA9dJPFLwYTkYJqwBH4txJwr3d9C5gy%2FP08ao17FYEa3D4E9PmiCy0DPQhSNrQ5rSV%2FsMT%2BL08eUSDIZ2rU5XgWKsGkS%2FP9W8DnvdgV97jt%2Fr39SA5LlDO%2FOIHIVYc5qzmE3rtLcUrN8nl%2Fp7QuxooV8UHPA3P9CuX1vV%2FgoKC4krdORyuUb%2FGFhZ4PjBD%2B4qguChBVyiMRX8hYnx%2BDIFqM3o%2FfMSwHpwPYx5Sld0DDiEnM4hzAwO3WQGvW7DliNuSAZJuhI3%2FhZtKrdVkL2vAi2XJrc9uGFzdd2UzQUScgL58R8C7UmI7F5USCKnmACbAKaZrxyam3QFAn4zkVwxwXeUTkXG%2F2pl1bjbpQUFqG7EOQi%2BfOQ5PZ6OsN33IEAl6aDAvGl3jasmjCavn3yXbwQ%2Bgmh7KT8nttv%2B%2BWNReNrghKHikL%2Bm%2Bbh8RaPyFKABrlwAYOear6%2F%2FTaMhsX2WOKUhL18p4fcYJMSYUAUQrRvjbG7C7e7inA5Ye6IwvTXQz4Tmzdk0zNXVDa8exYySHHdD6F62dEiKtDNtpV9u17weMEYXVcN%2BS5Wgr2z94NkY5TVsLhirq2TbLP%2Fq2%2FelDukkKU3Wkm6OI1mJnMoZYQwveeqvwY6pgHEaOyaXx67GBeeRlQr3PWP6I2MqE2%2B2%2FXHJX70kGLD9D%2FIGGhwTVkn3YP6eej447f17vfL4Ixq0E%2F8B4%2FqoPH7IoPU9sBG9PWGfyrihS5DgrnVYCY%2BaZMxsc57%2F87oWUsjgUU0QlQQB3LStimGM6YgZYfnAF111M1MdxMGFX1hhOigITYUHeCzVZ0jckB4Mpc16wX3QCQIX1C1tVWqQ9CUqJOBk4f7&X-Amz-Signature=119ab8cdd0e916ad37a91886f6210928462bf9e957b4bbe88bda4f3decad3524&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAI4JDBJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAv2o3f2akXhPIqLGglnvFQ2kIZ%2FHEqBQHslR9%2FHkATNAiB7XCkoR4v30XoGFmDnuKjNq43C7%2F26OKogS7JPwjJ%2BSiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HwlDDFUnoZXVp%2BlKtwD02bcAC3OQ05UvLJQGA9dJPFLwYTkYJqwBH4txJwr3d9C5gy%2FP08ao17FYEa3D4E9PmiCy0DPQhSNrQ5rSV%2FsMT%2BL08eUSDIZ2rU5XgWKsGkS%2FP9W8DnvdgV97jt%2Fr39SA5LlDO%2FOIHIVYc5qzmE3rtLcUrN8nl%2Fp7QuxooV8UHPA3P9CuX1vV%2FgoKC4krdORyuUb%2FGFhZ4PjBD%2B4qguChBVyiMRX8hYnx%2BDIFqM3o%2FfMSwHpwPYx5Sld0DDiEnM4hzAwO3WQGvW7DliNuSAZJuhI3%2FhZtKrdVkL2vAi2XJrc9uGFzdd2UzQUScgL58R8C7UmI7F5USCKnmACbAKaZrxyam3QFAn4zkVwxwXeUTkXG%2F2pl1bjbpQUFqG7EOQi%2BfOQ5PZ6OsN33IEAl6aDAvGl3jasmjCavn3yXbwQ%2Bgmh7KT8nttv%2B%2BWNReNrghKHikL%2Bm%2Bbh8RaPyFKABrlwAYOear6%2F%2FTaMhsX2WOKUhL18p4fcYJMSYUAUQrRvjbG7C7e7inA5Ye6IwvTXQz4Tmzdk0zNXVDa8exYySHHdD6F62dEiKtDNtpV9u17weMEYXVcN%2BS5Wgr2z94NkY5TVsLhirq2TbLP%2Fq2%2FelDukkKU3Wkm6OI1mJnMoZYQwveeqvwY6pgHEaOyaXx67GBeeRlQr3PWP6I2MqE2%2B2%2FXHJX70kGLD9D%2FIGGhwTVkn3YP6eej447f17vfL4Ixq0E%2F8B4%2FqoPH7IoPU9sBG9PWGfyrihS5DgrnVYCY%2BaZMxsc57%2F87oWUsjgUU0QlQQB3LStimGM6YgZYfnAF111M1MdxMGFX1hhOigITYUHeCzVZ0jckB4Mpc16wX3QCQIX1C1tVWqQ9CUqJOBk4f7&X-Amz-Signature=6afd33be0268df72416e2418afa0c020f3a2ee4c310398f0fbf29a76b3898f25&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAI4JDBJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAv2o3f2akXhPIqLGglnvFQ2kIZ%2FHEqBQHslR9%2FHkATNAiB7XCkoR4v30XoGFmDnuKjNq43C7%2F26OKogS7JPwjJ%2BSiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HwlDDFUnoZXVp%2BlKtwD02bcAC3OQ05UvLJQGA9dJPFLwYTkYJqwBH4txJwr3d9C5gy%2FP08ao17FYEa3D4E9PmiCy0DPQhSNrQ5rSV%2FsMT%2BL08eUSDIZ2rU5XgWKsGkS%2FP9W8DnvdgV97jt%2Fr39SA5LlDO%2FOIHIVYc5qzmE3rtLcUrN8nl%2Fp7QuxooV8UHPA3P9CuX1vV%2FgoKC4krdORyuUb%2FGFhZ4PjBD%2B4qguChBVyiMRX8hYnx%2BDIFqM3o%2FfMSwHpwPYx5Sld0DDiEnM4hzAwO3WQGvW7DliNuSAZJuhI3%2FhZtKrdVkL2vAi2XJrc9uGFzdd2UzQUScgL58R8C7UmI7F5USCKnmACbAKaZrxyam3QFAn4zkVwxwXeUTkXG%2F2pl1bjbpQUFqG7EOQi%2BfOQ5PZ6OsN33IEAl6aDAvGl3jasmjCavn3yXbwQ%2Bgmh7KT8nttv%2B%2BWNReNrghKHikL%2Bm%2Bbh8RaPyFKABrlwAYOear6%2F%2FTaMhsX2WOKUhL18p4fcYJMSYUAUQrRvjbG7C7e7inA5Ye6IwvTXQz4Tmzdk0zNXVDa8exYySHHdD6F62dEiKtDNtpV9u17weMEYXVcN%2BS5Wgr2z94NkY5TVsLhirq2TbLP%2Fq2%2FelDukkKU3Wkm6OI1mJnMoZYQwveeqvwY6pgHEaOyaXx67GBeeRlQr3PWP6I2MqE2%2B2%2FXHJX70kGLD9D%2FIGGhwTVkn3YP6eej447f17vfL4Ixq0E%2F8B4%2FqoPH7IoPU9sBG9PWGfyrihS5DgrnVYCY%2BaZMxsc57%2F87oWUsjgUU0QlQQB3LStimGM6YgZYfnAF111M1MdxMGFX1hhOigITYUHeCzVZ0jckB4Mpc16wX3QCQIX1C1tVWqQ9CUqJOBk4f7&X-Amz-Signature=61bc2c82dcdf2a838d41c5ecb2dc6f4252df9696c7738e4f9c7d9cd0c62ea889&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAI4JDBJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAv2o3f2akXhPIqLGglnvFQ2kIZ%2FHEqBQHslR9%2FHkATNAiB7XCkoR4v30XoGFmDnuKjNq43C7%2F26OKogS7JPwjJ%2BSiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HwlDDFUnoZXVp%2BlKtwD02bcAC3OQ05UvLJQGA9dJPFLwYTkYJqwBH4txJwr3d9C5gy%2FP08ao17FYEa3D4E9PmiCy0DPQhSNrQ5rSV%2FsMT%2BL08eUSDIZ2rU5XgWKsGkS%2FP9W8DnvdgV97jt%2Fr39SA5LlDO%2FOIHIVYc5qzmE3rtLcUrN8nl%2Fp7QuxooV8UHPA3P9CuX1vV%2FgoKC4krdORyuUb%2FGFhZ4PjBD%2B4qguChBVyiMRX8hYnx%2BDIFqM3o%2FfMSwHpwPYx5Sld0DDiEnM4hzAwO3WQGvW7DliNuSAZJuhI3%2FhZtKrdVkL2vAi2XJrc9uGFzdd2UzQUScgL58R8C7UmI7F5USCKnmACbAKaZrxyam3QFAn4zkVwxwXeUTkXG%2F2pl1bjbpQUFqG7EOQi%2BfOQ5PZ6OsN33IEAl6aDAvGl3jasmjCavn3yXbwQ%2Bgmh7KT8nttv%2B%2BWNReNrghKHikL%2Bm%2Bbh8RaPyFKABrlwAYOear6%2F%2FTaMhsX2WOKUhL18p4fcYJMSYUAUQrRvjbG7C7e7inA5Ye6IwvTXQz4Tmzdk0zNXVDa8exYySHHdD6F62dEiKtDNtpV9u17weMEYXVcN%2BS5Wgr2z94NkY5TVsLhirq2TbLP%2Fq2%2FelDukkKU3Wkm6OI1mJnMoZYQwveeqvwY6pgHEaOyaXx67GBeeRlQr3PWP6I2MqE2%2B2%2FXHJX70kGLD9D%2FIGGhwTVkn3YP6eej447f17vfL4Ixq0E%2F8B4%2FqoPH7IoPU9sBG9PWGfyrihS5DgrnVYCY%2BaZMxsc57%2F87oWUsjgUU0QlQQB3LStimGM6YgZYfnAF111M1MdxMGFX1hhOigITYUHeCzVZ0jckB4Mpc16wX3QCQIX1C1tVWqQ9CUqJOBk4f7&X-Amz-Signature=6cec69382695ea72b561cdd8c5cddb7b2e8af20f8aab99a8fda83ee0c4e11504&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAI4JDBJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAv2o3f2akXhPIqLGglnvFQ2kIZ%2FHEqBQHslR9%2FHkATNAiB7XCkoR4v30XoGFmDnuKjNq43C7%2F26OKogS7JPwjJ%2BSiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HwlDDFUnoZXVp%2BlKtwD02bcAC3OQ05UvLJQGA9dJPFLwYTkYJqwBH4txJwr3d9C5gy%2FP08ao17FYEa3D4E9PmiCy0DPQhSNrQ5rSV%2FsMT%2BL08eUSDIZ2rU5XgWKsGkS%2FP9W8DnvdgV97jt%2Fr39SA5LlDO%2FOIHIVYc5qzmE3rtLcUrN8nl%2Fp7QuxooV8UHPA3P9CuX1vV%2FgoKC4krdORyuUb%2FGFhZ4PjBD%2B4qguChBVyiMRX8hYnx%2BDIFqM3o%2FfMSwHpwPYx5Sld0DDiEnM4hzAwO3WQGvW7DliNuSAZJuhI3%2FhZtKrdVkL2vAi2XJrc9uGFzdd2UzQUScgL58R8C7UmI7F5USCKnmACbAKaZrxyam3QFAn4zkVwxwXeUTkXG%2F2pl1bjbpQUFqG7EOQi%2BfOQ5PZ6OsN33IEAl6aDAvGl3jasmjCavn3yXbwQ%2Bgmh7KT8nttv%2B%2BWNReNrghKHikL%2Bm%2Bbh8RaPyFKABrlwAYOear6%2F%2FTaMhsX2WOKUhL18p4fcYJMSYUAUQrRvjbG7C7e7inA5Ye6IwvTXQz4Tmzdk0zNXVDa8exYySHHdD6F62dEiKtDNtpV9u17weMEYXVcN%2BS5Wgr2z94NkY5TVsLhirq2TbLP%2Fq2%2FelDukkKU3Wkm6OI1mJnMoZYQwveeqvwY6pgHEaOyaXx67GBeeRlQr3PWP6I2MqE2%2B2%2FXHJX70kGLD9D%2FIGGhwTVkn3YP6eej447f17vfL4Ixq0E%2F8B4%2FqoPH7IoPU9sBG9PWGfyrihS5DgrnVYCY%2BaZMxsc57%2F87oWUsjgUU0QlQQB3LStimGM6YgZYfnAF111M1MdxMGFX1hhOigITYUHeCzVZ0jckB4Mpc16wX3QCQIX1C1tVWqQ9CUqJOBk4f7&X-Amz-Signature=600a78e1dacc22a5d8250276f3c83673318c6d49ab04314d2719ff41d9bc9005&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAI4JDBJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAv2o3f2akXhPIqLGglnvFQ2kIZ%2FHEqBQHslR9%2FHkATNAiB7XCkoR4v30XoGFmDnuKjNq43C7%2F26OKogS7JPwjJ%2BSiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HwlDDFUnoZXVp%2BlKtwD02bcAC3OQ05UvLJQGA9dJPFLwYTkYJqwBH4txJwr3d9C5gy%2FP08ao17FYEa3D4E9PmiCy0DPQhSNrQ5rSV%2FsMT%2BL08eUSDIZ2rU5XgWKsGkS%2FP9W8DnvdgV97jt%2Fr39SA5LlDO%2FOIHIVYc5qzmE3rtLcUrN8nl%2Fp7QuxooV8UHPA3P9CuX1vV%2FgoKC4krdORyuUb%2FGFhZ4PjBD%2B4qguChBVyiMRX8hYnx%2BDIFqM3o%2FfMSwHpwPYx5Sld0DDiEnM4hzAwO3WQGvW7DliNuSAZJuhI3%2FhZtKrdVkL2vAi2XJrc9uGFzdd2UzQUScgL58R8C7UmI7F5USCKnmACbAKaZrxyam3QFAn4zkVwxwXeUTkXG%2F2pl1bjbpQUFqG7EOQi%2BfOQ5PZ6OsN33IEAl6aDAvGl3jasmjCavn3yXbwQ%2Bgmh7KT8nttv%2B%2BWNReNrghKHikL%2Bm%2Bbh8RaPyFKABrlwAYOear6%2F%2FTaMhsX2WOKUhL18p4fcYJMSYUAUQrRvjbG7C7e7inA5Ye6IwvTXQz4Tmzdk0zNXVDa8exYySHHdD6F62dEiKtDNtpV9u17weMEYXVcN%2BS5Wgr2z94NkY5TVsLhirq2TbLP%2Fq2%2FelDukkKU3Wkm6OI1mJnMoZYQwveeqvwY6pgHEaOyaXx67GBeeRlQr3PWP6I2MqE2%2B2%2FXHJX70kGLD9D%2FIGGhwTVkn3YP6eej447f17vfL4Ixq0E%2F8B4%2FqoPH7IoPU9sBG9PWGfyrihS5DgrnVYCY%2BaZMxsc57%2F87oWUsjgUU0QlQQB3LStimGM6YgZYfnAF111M1MdxMGFX1hhOigITYUHeCzVZ0jckB4Mpc16wX3QCQIX1C1tVWqQ9CUqJOBk4f7&X-Amz-Signature=8ed9634adccd2e0222458e61e4c066b92bcad20cd86f04b1df99a3f35c5aecfe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAI4JDBJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAv2o3f2akXhPIqLGglnvFQ2kIZ%2FHEqBQHslR9%2FHkATNAiB7XCkoR4v30XoGFmDnuKjNq43C7%2F26OKogS7JPwjJ%2BSiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HwlDDFUnoZXVp%2BlKtwD02bcAC3OQ05UvLJQGA9dJPFLwYTkYJqwBH4txJwr3d9C5gy%2FP08ao17FYEa3D4E9PmiCy0DPQhSNrQ5rSV%2FsMT%2BL08eUSDIZ2rU5XgWKsGkS%2FP9W8DnvdgV97jt%2Fr39SA5LlDO%2FOIHIVYc5qzmE3rtLcUrN8nl%2Fp7QuxooV8UHPA3P9CuX1vV%2FgoKC4krdORyuUb%2FGFhZ4PjBD%2B4qguChBVyiMRX8hYnx%2BDIFqM3o%2FfMSwHpwPYx5Sld0DDiEnM4hzAwO3WQGvW7DliNuSAZJuhI3%2FhZtKrdVkL2vAi2XJrc9uGFzdd2UzQUScgL58R8C7UmI7F5USCKnmACbAKaZrxyam3QFAn4zkVwxwXeUTkXG%2F2pl1bjbpQUFqG7EOQi%2BfOQ5PZ6OsN33IEAl6aDAvGl3jasmjCavn3yXbwQ%2Bgmh7KT8nttv%2B%2BWNReNrghKHikL%2Bm%2Bbh8RaPyFKABrlwAYOear6%2F%2FTaMhsX2WOKUhL18p4fcYJMSYUAUQrRvjbG7C7e7inA5Ye6IwvTXQz4Tmzdk0zNXVDa8exYySHHdD6F62dEiKtDNtpV9u17weMEYXVcN%2BS5Wgr2z94NkY5TVsLhirq2TbLP%2Fq2%2FelDukkKU3Wkm6OI1mJnMoZYQwveeqvwY6pgHEaOyaXx67GBeeRlQr3PWP6I2MqE2%2B2%2FXHJX70kGLD9D%2FIGGhwTVkn3YP6eej447f17vfL4Ixq0E%2F8B4%2FqoPH7IoPU9sBG9PWGfyrihS5DgrnVYCY%2BaZMxsc57%2F87oWUsjgUU0QlQQB3LStimGM6YgZYfnAF111M1MdxMGFX1hhOigITYUHeCzVZ0jckB4Mpc16wX3QCQIX1C1tVWqQ9CUqJOBk4f7&X-Amz-Signature=6bf95f86fb3fd51c9bf65a5dfc0149dc3aef7e7a23e76e5de002447232108041&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
