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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6YYVZL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJdBj2IZZbmSlYiAA6PJ9BZ4wd1d71sSqlvhnrD38AAIgfR1J1dVbw5G2%2Fco%2FKVUDhOD3AkqxciMGi66hBoSOwF8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbVVWsoiYaX4Pv2nSrcA6TV5K5EDS9XtfAsMRnNiyd3a5dQGceeuLF%2FoPqgTPSQkbCZ8a%2F9BxN5eM9lntx1AOC80IDIzQljHbxRsxR1j%2BD%2BaYDR%2F6Ur1gJGFbXpWf3%2B4XxGwYUotJoDdMcaagxXilI3A4CzbVqmYrwIJXmCSJO7%2BjEj8aAiJNeH7HRuv7N4Mn2JuJuH2VbVxUxKOuXPiHqNLpl41URObZvSDQFZonZWxC6qxkFuVF4ErWQrEydYBQAyaCFyherJ%2F%2B4nOgreSrM9fzRucEoZGl5KZRq7B8AvVgVJbY2xJsuSrKNZOgDQEALlu3Ydyo6DW%2BxMjFu2qbCq8MBZkaFliw54QvprmTSALZJXMWpEX4GB5tkfpRYjRYmjiSUxGw6i7s%2BDLsYhkAGplhPcy1RyQ8Uot3Il9nlHeegpHgem8p%2BdOIB4AjYLVCuGCnflGh3pfe0rwkxH0fPSz2%2F6cBiuV7VjI28EgcD5DYsryhUHUvWxLczoz1h5b5CDiT29CL55HlvdP4PJl9J1qwym9ICdk%2BlLTu7fS4q9A%2BsaIYCB8Ph3K6ShYPnuyCb%2FzPdI8vnRtcOBmdWao2sEwZ0JozRRnUstC0aB3LK2%2Bt9SyckFAGWVmFLzH%2BPOiPI%2F5XtjJfruZMt8MN6Sh78GOqUBapuCAKfccz914r6PE32RFoMyMIxV9E7GlnCQ0IapNtUKvh%2BvteJYMp%2BqXfekwD0ktbg53dgWR8vtOR3F94paGPNoS%2FkDeOBh%2F6rlAo%2F%2BlORDtC9gWQE6IXlKUsNd4kTUuZa%2Fq8IVCICCnNDPnwrG6sg%2F%2B2LJWZkCX0x7ym1ZXY9NCmnTolo1SnhRR%2FJFanATmLQ1sPRW2cWAJSE%2F5Nk7fqYSP68T&X-Amz-Signature=8cdbf8438e1988175b03cb0f67dfecc4efc0fbdc76b348e0a70dc1a1e7688ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6YYVZL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJdBj2IZZbmSlYiAA6PJ9BZ4wd1d71sSqlvhnrD38AAIgfR1J1dVbw5G2%2Fco%2FKVUDhOD3AkqxciMGi66hBoSOwF8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbVVWsoiYaX4Pv2nSrcA6TV5K5EDS9XtfAsMRnNiyd3a5dQGceeuLF%2FoPqgTPSQkbCZ8a%2F9BxN5eM9lntx1AOC80IDIzQljHbxRsxR1j%2BD%2BaYDR%2F6Ur1gJGFbXpWf3%2B4XxGwYUotJoDdMcaagxXilI3A4CzbVqmYrwIJXmCSJO7%2BjEj8aAiJNeH7HRuv7N4Mn2JuJuH2VbVxUxKOuXPiHqNLpl41URObZvSDQFZonZWxC6qxkFuVF4ErWQrEydYBQAyaCFyherJ%2F%2B4nOgreSrM9fzRucEoZGl5KZRq7B8AvVgVJbY2xJsuSrKNZOgDQEALlu3Ydyo6DW%2BxMjFu2qbCq8MBZkaFliw54QvprmTSALZJXMWpEX4GB5tkfpRYjRYmjiSUxGw6i7s%2BDLsYhkAGplhPcy1RyQ8Uot3Il9nlHeegpHgem8p%2BdOIB4AjYLVCuGCnflGh3pfe0rwkxH0fPSz2%2F6cBiuV7VjI28EgcD5DYsryhUHUvWxLczoz1h5b5CDiT29CL55HlvdP4PJl9J1qwym9ICdk%2BlLTu7fS4q9A%2BsaIYCB8Ph3K6ShYPnuyCb%2FzPdI8vnRtcOBmdWao2sEwZ0JozRRnUstC0aB3LK2%2Bt9SyckFAGWVmFLzH%2BPOiPI%2F5XtjJfruZMt8MN6Sh78GOqUBapuCAKfccz914r6PE32RFoMyMIxV9E7GlnCQ0IapNtUKvh%2BvteJYMp%2BqXfekwD0ktbg53dgWR8vtOR3F94paGPNoS%2FkDeOBh%2F6rlAo%2F%2BlORDtC9gWQE6IXlKUsNd4kTUuZa%2Fq8IVCICCnNDPnwrG6sg%2F%2B2LJWZkCX0x7ym1ZXY9NCmnTolo1SnhRR%2FJFanATmLQ1sPRW2cWAJSE%2F5Nk7fqYSP68T&X-Amz-Signature=729e64cc878be9dd166e24fcde688c53d3635b86616b27f89d50778fd601b70b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6YYVZL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJdBj2IZZbmSlYiAA6PJ9BZ4wd1d71sSqlvhnrD38AAIgfR1J1dVbw5G2%2Fco%2FKVUDhOD3AkqxciMGi66hBoSOwF8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbVVWsoiYaX4Pv2nSrcA6TV5K5EDS9XtfAsMRnNiyd3a5dQGceeuLF%2FoPqgTPSQkbCZ8a%2F9BxN5eM9lntx1AOC80IDIzQljHbxRsxR1j%2BD%2BaYDR%2F6Ur1gJGFbXpWf3%2B4XxGwYUotJoDdMcaagxXilI3A4CzbVqmYrwIJXmCSJO7%2BjEj8aAiJNeH7HRuv7N4Mn2JuJuH2VbVxUxKOuXPiHqNLpl41URObZvSDQFZonZWxC6qxkFuVF4ErWQrEydYBQAyaCFyherJ%2F%2B4nOgreSrM9fzRucEoZGl5KZRq7B8AvVgVJbY2xJsuSrKNZOgDQEALlu3Ydyo6DW%2BxMjFu2qbCq8MBZkaFliw54QvprmTSALZJXMWpEX4GB5tkfpRYjRYmjiSUxGw6i7s%2BDLsYhkAGplhPcy1RyQ8Uot3Il9nlHeegpHgem8p%2BdOIB4AjYLVCuGCnflGh3pfe0rwkxH0fPSz2%2F6cBiuV7VjI28EgcD5DYsryhUHUvWxLczoz1h5b5CDiT29CL55HlvdP4PJl9J1qwym9ICdk%2BlLTu7fS4q9A%2BsaIYCB8Ph3K6ShYPnuyCb%2FzPdI8vnRtcOBmdWao2sEwZ0JozRRnUstC0aB3LK2%2Bt9SyckFAGWVmFLzH%2BPOiPI%2F5XtjJfruZMt8MN6Sh78GOqUBapuCAKfccz914r6PE32RFoMyMIxV9E7GlnCQ0IapNtUKvh%2BvteJYMp%2BqXfekwD0ktbg53dgWR8vtOR3F94paGPNoS%2FkDeOBh%2F6rlAo%2F%2BlORDtC9gWQE6IXlKUsNd4kTUuZa%2Fq8IVCICCnNDPnwrG6sg%2F%2B2LJWZkCX0x7ym1ZXY9NCmnTolo1SnhRR%2FJFanATmLQ1sPRW2cWAJSE%2F5Nk7fqYSP68T&X-Amz-Signature=40b3ff51271e426e0223b45dc1620580e5f496689389bbbf7d07dc7c17480a31&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6YYVZL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJdBj2IZZbmSlYiAA6PJ9BZ4wd1d71sSqlvhnrD38AAIgfR1J1dVbw5G2%2Fco%2FKVUDhOD3AkqxciMGi66hBoSOwF8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbVVWsoiYaX4Pv2nSrcA6TV5K5EDS9XtfAsMRnNiyd3a5dQGceeuLF%2FoPqgTPSQkbCZ8a%2F9BxN5eM9lntx1AOC80IDIzQljHbxRsxR1j%2BD%2BaYDR%2F6Ur1gJGFbXpWf3%2B4XxGwYUotJoDdMcaagxXilI3A4CzbVqmYrwIJXmCSJO7%2BjEj8aAiJNeH7HRuv7N4Mn2JuJuH2VbVxUxKOuXPiHqNLpl41URObZvSDQFZonZWxC6qxkFuVF4ErWQrEydYBQAyaCFyherJ%2F%2B4nOgreSrM9fzRucEoZGl5KZRq7B8AvVgVJbY2xJsuSrKNZOgDQEALlu3Ydyo6DW%2BxMjFu2qbCq8MBZkaFliw54QvprmTSALZJXMWpEX4GB5tkfpRYjRYmjiSUxGw6i7s%2BDLsYhkAGplhPcy1RyQ8Uot3Il9nlHeegpHgem8p%2BdOIB4AjYLVCuGCnflGh3pfe0rwkxH0fPSz2%2F6cBiuV7VjI28EgcD5DYsryhUHUvWxLczoz1h5b5CDiT29CL55HlvdP4PJl9J1qwym9ICdk%2BlLTu7fS4q9A%2BsaIYCB8Ph3K6ShYPnuyCb%2FzPdI8vnRtcOBmdWao2sEwZ0JozRRnUstC0aB3LK2%2Bt9SyckFAGWVmFLzH%2BPOiPI%2F5XtjJfruZMt8MN6Sh78GOqUBapuCAKfccz914r6PE32RFoMyMIxV9E7GlnCQ0IapNtUKvh%2BvteJYMp%2BqXfekwD0ktbg53dgWR8vtOR3F94paGPNoS%2FkDeOBh%2F6rlAo%2F%2BlORDtC9gWQE6IXlKUsNd4kTUuZa%2Fq8IVCICCnNDPnwrG6sg%2F%2B2LJWZkCX0x7ym1ZXY9NCmnTolo1SnhRR%2FJFanATmLQ1sPRW2cWAJSE%2F5Nk7fqYSP68T&X-Amz-Signature=1aa36735b474a7f6d7673bb1c7956dab34c7f0b1a1d6d5435795b65b6c380b33&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6YYVZL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJdBj2IZZbmSlYiAA6PJ9BZ4wd1d71sSqlvhnrD38AAIgfR1J1dVbw5G2%2Fco%2FKVUDhOD3AkqxciMGi66hBoSOwF8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbVVWsoiYaX4Pv2nSrcA6TV5K5EDS9XtfAsMRnNiyd3a5dQGceeuLF%2FoPqgTPSQkbCZ8a%2F9BxN5eM9lntx1AOC80IDIzQljHbxRsxR1j%2BD%2BaYDR%2F6Ur1gJGFbXpWf3%2B4XxGwYUotJoDdMcaagxXilI3A4CzbVqmYrwIJXmCSJO7%2BjEj8aAiJNeH7HRuv7N4Mn2JuJuH2VbVxUxKOuXPiHqNLpl41URObZvSDQFZonZWxC6qxkFuVF4ErWQrEydYBQAyaCFyherJ%2F%2B4nOgreSrM9fzRucEoZGl5KZRq7B8AvVgVJbY2xJsuSrKNZOgDQEALlu3Ydyo6DW%2BxMjFu2qbCq8MBZkaFliw54QvprmTSALZJXMWpEX4GB5tkfpRYjRYmjiSUxGw6i7s%2BDLsYhkAGplhPcy1RyQ8Uot3Il9nlHeegpHgem8p%2BdOIB4AjYLVCuGCnflGh3pfe0rwkxH0fPSz2%2F6cBiuV7VjI28EgcD5DYsryhUHUvWxLczoz1h5b5CDiT29CL55HlvdP4PJl9J1qwym9ICdk%2BlLTu7fS4q9A%2BsaIYCB8Ph3K6ShYPnuyCb%2FzPdI8vnRtcOBmdWao2sEwZ0JozRRnUstC0aB3LK2%2Bt9SyckFAGWVmFLzH%2BPOiPI%2F5XtjJfruZMt8MN6Sh78GOqUBapuCAKfccz914r6PE32RFoMyMIxV9E7GlnCQ0IapNtUKvh%2BvteJYMp%2BqXfekwD0ktbg53dgWR8vtOR3F94paGPNoS%2FkDeOBh%2F6rlAo%2F%2BlORDtC9gWQE6IXlKUsNd4kTUuZa%2Fq8IVCICCnNDPnwrG6sg%2F%2B2LJWZkCX0x7ym1ZXY9NCmnTolo1SnhRR%2FJFanATmLQ1sPRW2cWAJSE%2F5Nk7fqYSP68T&X-Amz-Signature=921c1ae09d9f20d6f02c161af75a02f247b24066cbefc8f0feb6ed70e4633a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6YYVZL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJdBj2IZZbmSlYiAA6PJ9BZ4wd1d71sSqlvhnrD38AAIgfR1J1dVbw5G2%2Fco%2FKVUDhOD3AkqxciMGi66hBoSOwF8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbVVWsoiYaX4Pv2nSrcA6TV5K5EDS9XtfAsMRnNiyd3a5dQGceeuLF%2FoPqgTPSQkbCZ8a%2F9BxN5eM9lntx1AOC80IDIzQljHbxRsxR1j%2BD%2BaYDR%2F6Ur1gJGFbXpWf3%2B4XxGwYUotJoDdMcaagxXilI3A4CzbVqmYrwIJXmCSJO7%2BjEj8aAiJNeH7HRuv7N4Mn2JuJuH2VbVxUxKOuXPiHqNLpl41URObZvSDQFZonZWxC6qxkFuVF4ErWQrEydYBQAyaCFyherJ%2F%2B4nOgreSrM9fzRucEoZGl5KZRq7B8AvVgVJbY2xJsuSrKNZOgDQEALlu3Ydyo6DW%2BxMjFu2qbCq8MBZkaFliw54QvprmTSALZJXMWpEX4GB5tkfpRYjRYmjiSUxGw6i7s%2BDLsYhkAGplhPcy1RyQ8Uot3Il9nlHeegpHgem8p%2BdOIB4AjYLVCuGCnflGh3pfe0rwkxH0fPSz2%2F6cBiuV7VjI28EgcD5DYsryhUHUvWxLczoz1h5b5CDiT29CL55HlvdP4PJl9J1qwym9ICdk%2BlLTu7fS4q9A%2BsaIYCB8Ph3K6ShYPnuyCb%2FzPdI8vnRtcOBmdWao2sEwZ0JozRRnUstC0aB3LK2%2Bt9SyckFAGWVmFLzH%2BPOiPI%2F5XtjJfruZMt8MN6Sh78GOqUBapuCAKfccz914r6PE32RFoMyMIxV9E7GlnCQ0IapNtUKvh%2BvteJYMp%2BqXfekwD0ktbg53dgWR8vtOR3F94paGPNoS%2FkDeOBh%2F6rlAo%2F%2BlORDtC9gWQE6IXlKUsNd4kTUuZa%2Fq8IVCICCnNDPnwrG6sg%2F%2B2LJWZkCX0x7ym1ZXY9NCmnTolo1SnhRR%2FJFanATmLQ1sPRW2cWAJSE%2F5Nk7fqYSP68T&X-Amz-Signature=3effe8d4321f4515af862f035c7e3082fa1294b02f6998bfe44bd96d43e17ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6YYVZL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJdBj2IZZbmSlYiAA6PJ9BZ4wd1d71sSqlvhnrD38AAIgfR1J1dVbw5G2%2Fco%2FKVUDhOD3AkqxciMGi66hBoSOwF8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbVVWsoiYaX4Pv2nSrcA6TV5K5EDS9XtfAsMRnNiyd3a5dQGceeuLF%2FoPqgTPSQkbCZ8a%2F9BxN5eM9lntx1AOC80IDIzQljHbxRsxR1j%2BD%2BaYDR%2F6Ur1gJGFbXpWf3%2B4XxGwYUotJoDdMcaagxXilI3A4CzbVqmYrwIJXmCSJO7%2BjEj8aAiJNeH7HRuv7N4Mn2JuJuH2VbVxUxKOuXPiHqNLpl41URObZvSDQFZonZWxC6qxkFuVF4ErWQrEydYBQAyaCFyherJ%2F%2B4nOgreSrM9fzRucEoZGl5KZRq7B8AvVgVJbY2xJsuSrKNZOgDQEALlu3Ydyo6DW%2BxMjFu2qbCq8MBZkaFliw54QvprmTSALZJXMWpEX4GB5tkfpRYjRYmjiSUxGw6i7s%2BDLsYhkAGplhPcy1RyQ8Uot3Il9nlHeegpHgem8p%2BdOIB4AjYLVCuGCnflGh3pfe0rwkxH0fPSz2%2F6cBiuV7VjI28EgcD5DYsryhUHUvWxLczoz1h5b5CDiT29CL55HlvdP4PJl9J1qwym9ICdk%2BlLTu7fS4q9A%2BsaIYCB8Ph3K6ShYPnuyCb%2FzPdI8vnRtcOBmdWao2sEwZ0JozRRnUstC0aB3LK2%2Bt9SyckFAGWVmFLzH%2BPOiPI%2F5XtjJfruZMt8MN6Sh78GOqUBapuCAKfccz914r6PE32RFoMyMIxV9E7GlnCQ0IapNtUKvh%2BvteJYMp%2BqXfekwD0ktbg53dgWR8vtOR3F94paGPNoS%2FkDeOBh%2F6rlAo%2F%2BlORDtC9gWQE6IXlKUsNd4kTUuZa%2Fq8IVCICCnNDPnwrG6sg%2F%2B2LJWZkCX0x7ym1ZXY9NCmnTolo1SnhRR%2FJFanATmLQ1sPRW2cWAJSE%2F5Nk7fqYSP68T&X-Amz-Signature=f3d6c7adc76df8e9358a75cb880e2212016e3767aa2576ef073605c4d4385ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
