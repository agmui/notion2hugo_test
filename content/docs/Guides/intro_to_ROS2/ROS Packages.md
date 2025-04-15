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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTDS2SU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1BFW23AzIh3s%2B5vAymn37xfgFLpXwprrVT9ci%2Fp9VSAiBC06uS3AXs03di7LyMldeO20WonGoC4ZUwzGxWFBw3rCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8PAImqFcLe5umrm5KtwDO62MKgUEu5kBfxuN9CzL1n50g%2BRpkSjhkQJW2jOP6FLngwH3RvUJViKwDcwAN9p4%2B6n4qOKIyT363GoEKnVcgvH9eX9OnP9PympblAT4zIU7IWldCfErlxspr3wG4h0lU749M%2FMM2VUwyzXth1CNMU2NCUuUt2Sh%2BWI7AzKiIeQjlCR18ilWK3nYRX%2FsQXNVA3CZUbEPZmReTndxzcyyYEn5F7ckmVOfsQkAHWTC4pC%2FnWh1WKmkxDf9XaxMeML1q%2BXdgR1yQkr6ZAvvwLeX6r1H69zYJYiX9gNTQOeXya2agtMkWEouvzI7j3ndWzohTOYo33nptIfnjmC1JsV%2FHc73PhG%2FDnk8MiOMAk7zkZMmbhb7%2FkAU9jfJ5CN8JKn6dfutCKlOC4eoey%2FH5zccdIUXkXe4NvDayovaT8mUBE287p%2FfZZUkuOKN5ZO7GR9LlyHq7ceaWsnVcngVNGimjhUSMedscr0nCgm7PlMQ72tz1joZeoKsCTIn3yAmA0ip8VYE5UL2WA2ZzMn3u2BZpYodHmTosA5N9mrYqe1Uj0AxH3nwiz5Hvc%2FO3pagZwICSJI5BJdhl4LADjaeDdaEJvcIcdXvY0OhmQvHYXNPnHtFtRefchoqqB%2Fhl%2BAwg9L2vwY6pgFz6NqetHIiR9pN5L9D9Trd9%2FSxSAewTD2i62LWk8QveBBPvXq7ZLcws2ybkdKGM3IErmTizAJN55qSp5jQZRKcVtdQsJ3IZZA%2Bu0rjKuuzjnGLzKQurC6Zv0Os6pXd%2BbIbzGMDxES0TOhqvWV4jNrt1pBM5XMrSINyrVl35MGJu%2B8%2Fd6a5zp9%2FdPdGHIkqSnqHSO0XzspM1HfSEaQH2k22US98Cvjx&X-Amz-Signature=42823554954c12b59e7f8eb05dfa5da01f2add68f662013b71b61fffe1193641&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTDS2SU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1BFW23AzIh3s%2B5vAymn37xfgFLpXwprrVT9ci%2Fp9VSAiBC06uS3AXs03di7LyMldeO20WonGoC4ZUwzGxWFBw3rCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8PAImqFcLe5umrm5KtwDO62MKgUEu5kBfxuN9CzL1n50g%2BRpkSjhkQJW2jOP6FLngwH3RvUJViKwDcwAN9p4%2B6n4qOKIyT363GoEKnVcgvH9eX9OnP9PympblAT4zIU7IWldCfErlxspr3wG4h0lU749M%2FMM2VUwyzXth1CNMU2NCUuUt2Sh%2BWI7AzKiIeQjlCR18ilWK3nYRX%2FsQXNVA3CZUbEPZmReTndxzcyyYEn5F7ckmVOfsQkAHWTC4pC%2FnWh1WKmkxDf9XaxMeML1q%2BXdgR1yQkr6ZAvvwLeX6r1H69zYJYiX9gNTQOeXya2agtMkWEouvzI7j3ndWzohTOYo33nptIfnjmC1JsV%2FHc73PhG%2FDnk8MiOMAk7zkZMmbhb7%2FkAU9jfJ5CN8JKn6dfutCKlOC4eoey%2FH5zccdIUXkXe4NvDayovaT8mUBE287p%2FfZZUkuOKN5ZO7GR9LlyHq7ceaWsnVcngVNGimjhUSMedscr0nCgm7PlMQ72tz1joZeoKsCTIn3yAmA0ip8VYE5UL2WA2ZzMn3u2BZpYodHmTosA5N9mrYqe1Uj0AxH3nwiz5Hvc%2FO3pagZwICSJI5BJdhl4LADjaeDdaEJvcIcdXvY0OhmQvHYXNPnHtFtRefchoqqB%2Fhl%2BAwg9L2vwY6pgFz6NqetHIiR9pN5L9D9Trd9%2FSxSAewTD2i62LWk8QveBBPvXq7ZLcws2ybkdKGM3IErmTizAJN55qSp5jQZRKcVtdQsJ3IZZA%2Bu0rjKuuzjnGLzKQurC6Zv0Os6pXd%2BbIbzGMDxES0TOhqvWV4jNrt1pBM5XMrSINyrVl35MGJu%2B8%2Fd6a5zp9%2FdPdGHIkqSnqHSO0XzspM1HfSEaQH2k22US98Cvjx&X-Amz-Signature=e95494c21b430555f4fc9b2dcc0eb91b21f019e2ec3c7823d1a75b8cbe175069&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTDS2SU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1BFW23AzIh3s%2B5vAymn37xfgFLpXwprrVT9ci%2Fp9VSAiBC06uS3AXs03di7LyMldeO20WonGoC4ZUwzGxWFBw3rCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8PAImqFcLe5umrm5KtwDO62MKgUEu5kBfxuN9CzL1n50g%2BRpkSjhkQJW2jOP6FLngwH3RvUJViKwDcwAN9p4%2B6n4qOKIyT363GoEKnVcgvH9eX9OnP9PympblAT4zIU7IWldCfErlxspr3wG4h0lU749M%2FMM2VUwyzXth1CNMU2NCUuUt2Sh%2BWI7AzKiIeQjlCR18ilWK3nYRX%2FsQXNVA3CZUbEPZmReTndxzcyyYEn5F7ckmVOfsQkAHWTC4pC%2FnWh1WKmkxDf9XaxMeML1q%2BXdgR1yQkr6ZAvvwLeX6r1H69zYJYiX9gNTQOeXya2agtMkWEouvzI7j3ndWzohTOYo33nptIfnjmC1JsV%2FHc73PhG%2FDnk8MiOMAk7zkZMmbhb7%2FkAU9jfJ5CN8JKn6dfutCKlOC4eoey%2FH5zccdIUXkXe4NvDayovaT8mUBE287p%2FfZZUkuOKN5ZO7GR9LlyHq7ceaWsnVcngVNGimjhUSMedscr0nCgm7PlMQ72tz1joZeoKsCTIn3yAmA0ip8VYE5UL2WA2ZzMn3u2BZpYodHmTosA5N9mrYqe1Uj0AxH3nwiz5Hvc%2FO3pagZwICSJI5BJdhl4LADjaeDdaEJvcIcdXvY0OhmQvHYXNPnHtFtRefchoqqB%2Fhl%2BAwg9L2vwY6pgFz6NqetHIiR9pN5L9D9Trd9%2FSxSAewTD2i62LWk8QveBBPvXq7ZLcws2ybkdKGM3IErmTizAJN55qSp5jQZRKcVtdQsJ3IZZA%2Bu0rjKuuzjnGLzKQurC6Zv0Os6pXd%2BbIbzGMDxES0TOhqvWV4jNrt1pBM5XMrSINyrVl35MGJu%2B8%2Fd6a5zp9%2FdPdGHIkqSnqHSO0XzspM1HfSEaQH2k22US98Cvjx&X-Amz-Signature=12110d19cfa1ea39bdebd267a37dcf4dca123ff13850f00a01725068eb7613da&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTDS2SU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1BFW23AzIh3s%2B5vAymn37xfgFLpXwprrVT9ci%2Fp9VSAiBC06uS3AXs03di7LyMldeO20WonGoC4ZUwzGxWFBw3rCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8PAImqFcLe5umrm5KtwDO62MKgUEu5kBfxuN9CzL1n50g%2BRpkSjhkQJW2jOP6FLngwH3RvUJViKwDcwAN9p4%2B6n4qOKIyT363GoEKnVcgvH9eX9OnP9PympblAT4zIU7IWldCfErlxspr3wG4h0lU749M%2FMM2VUwyzXth1CNMU2NCUuUt2Sh%2BWI7AzKiIeQjlCR18ilWK3nYRX%2FsQXNVA3CZUbEPZmReTndxzcyyYEn5F7ckmVOfsQkAHWTC4pC%2FnWh1WKmkxDf9XaxMeML1q%2BXdgR1yQkr6ZAvvwLeX6r1H69zYJYiX9gNTQOeXya2agtMkWEouvzI7j3ndWzohTOYo33nptIfnjmC1JsV%2FHc73PhG%2FDnk8MiOMAk7zkZMmbhb7%2FkAU9jfJ5CN8JKn6dfutCKlOC4eoey%2FH5zccdIUXkXe4NvDayovaT8mUBE287p%2FfZZUkuOKN5ZO7GR9LlyHq7ceaWsnVcngVNGimjhUSMedscr0nCgm7PlMQ72tz1joZeoKsCTIn3yAmA0ip8VYE5UL2WA2ZzMn3u2BZpYodHmTosA5N9mrYqe1Uj0AxH3nwiz5Hvc%2FO3pagZwICSJI5BJdhl4LADjaeDdaEJvcIcdXvY0OhmQvHYXNPnHtFtRefchoqqB%2Fhl%2BAwg9L2vwY6pgFz6NqetHIiR9pN5L9D9Trd9%2FSxSAewTD2i62LWk8QveBBPvXq7ZLcws2ybkdKGM3IErmTizAJN55qSp5jQZRKcVtdQsJ3IZZA%2Bu0rjKuuzjnGLzKQurC6Zv0Os6pXd%2BbIbzGMDxES0TOhqvWV4jNrt1pBM5XMrSINyrVl35MGJu%2B8%2Fd6a5zp9%2FdPdGHIkqSnqHSO0XzspM1HfSEaQH2k22US98Cvjx&X-Amz-Signature=9f8740e8a387716529e6ed793d866707ff8f85434ba27a1f6f2816d8307b529a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTDS2SU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1BFW23AzIh3s%2B5vAymn37xfgFLpXwprrVT9ci%2Fp9VSAiBC06uS3AXs03di7LyMldeO20WonGoC4ZUwzGxWFBw3rCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8PAImqFcLe5umrm5KtwDO62MKgUEu5kBfxuN9CzL1n50g%2BRpkSjhkQJW2jOP6FLngwH3RvUJViKwDcwAN9p4%2B6n4qOKIyT363GoEKnVcgvH9eX9OnP9PympblAT4zIU7IWldCfErlxspr3wG4h0lU749M%2FMM2VUwyzXth1CNMU2NCUuUt2Sh%2BWI7AzKiIeQjlCR18ilWK3nYRX%2FsQXNVA3CZUbEPZmReTndxzcyyYEn5F7ckmVOfsQkAHWTC4pC%2FnWh1WKmkxDf9XaxMeML1q%2BXdgR1yQkr6ZAvvwLeX6r1H69zYJYiX9gNTQOeXya2agtMkWEouvzI7j3ndWzohTOYo33nptIfnjmC1JsV%2FHc73PhG%2FDnk8MiOMAk7zkZMmbhb7%2FkAU9jfJ5CN8JKn6dfutCKlOC4eoey%2FH5zccdIUXkXe4NvDayovaT8mUBE287p%2FfZZUkuOKN5ZO7GR9LlyHq7ceaWsnVcngVNGimjhUSMedscr0nCgm7PlMQ72tz1joZeoKsCTIn3yAmA0ip8VYE5UL2WA2ZzMn3u2BZpYodHmTosA5N9mrYqe1Uj0AxH3nwiz5Hvc%2FO3pagZwICSJI5BJdhl4LADjaeDdaEJvcIcdXvY0OhmQvHYXNPnHtFtRefchoqqB%2Fhl%2BAwg9L2vwY6pgFz6NqetHIiR9pN5L9D9Trd9%2FSxSAewTD2i62LWk8QveBBPvXq7ZLcws2ybkdKGM3IErmTizAJN55qSp5jQZRKcVtdQsJ3IZZA%2Bu0rjKuuzjnGLzKQurC6Zv0Os6pXd%2BbIbzGMDxES0TOhqvWV4jNrt1pBM5XMrSINyrVl35MGJu%2B8%2Fd6a5zp9%2FdPdGHIkqSnqHSO0XzspM1HfSEaQH2k22US98Cvjx&X-Amz-Signature=f66a1bc18a87dc09b6633e89525563435e986e0ce3c023648be0f446630ef5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTDS2SU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1BFW23AzIh3s%2B5vAymn37xfgFLpXwprrVT9ci%2Fp9VSAiBC06uS3AXs03di7LyMldeO20WonGoC4ZUwzGxWFBw3rCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8PAImqFcLe5umrm5KtwDO62MKgUEu5kBfxuN9CzL1n50g%2BRpkSjhkQJW2jOP6FLngwH3RvUJViKwDcwAN9p4%2B6n4qOKIyT363GoEKnVcgvH9eX9OnP9PympblAT4zIU7IWldCfErlxspr3wG4h0lU749M%2FMM2VUwyzXth1CNMU2NCUuUt2Sh%2BWI7AzKiIeQjlCR18ilWK3nYRX%2FsQXNVA3CZUbEPZmReTndxzcyyYEn5F7ckmVOfsQkAHWTC4pC%2FnWh1WKmkxDf9XaxMeML1q%2BXdgR1yQkr6ZAvvwLeX6r1H69zYJYiX9gNTQOeXya2agtMkWEouvzI7j3ndWzohTOYo33nptIfnjmC1JsV%2FHc73PhG%2FDnk8MiOMAk7zkZMmbhb7%2FkAU9jfJ5CN8JKn6dfutCKlOC4eoey%2FH5zccdIUXkXe4NvDayovaT8mUBE287p%2FfZZUkuOKN5ZO7GR9LlyHq7ceaWsnVcngVNGimjhUSMedscr0nCgm7PlMQ72tz1joZeoKsCTIn3yAmA0ip8VYE5UL2WA2ZzMn3u2BZpYodHmTosA5N9mrYqe1Uj0AxH3nwiz5Hvc%2FO3pagZwICSJI5BJdhl4LADjaeDdaEJvcIcdXvY0OhmQvHYXNPnHtFtRefchoqqB%2Fhl%2BAwg9L2vwY6pgFz6NqetHIiR9pN5L9D9Trd9%2FSxSAewTD2i62LWk8QveBBPvXq7ZLcws2ybkdKGM3IErmTizAJN55qSp5jQZRKcVtdQsJ3IZZA%2Bu0rjKuuzjnGLzKQurC6Zv0Os6pXd%2BbIbzGMDxES0TOhqvWV4jNrt1pBM5XMrSINyrVl35MGJu%2B8%2Fd6a5zp9%2FdPdGHIkqSnqHSO0XzspM1HfSEaQH2k22US98Cvjx&X-Amz-Signature=3a34fee18349b4ab13e85a0570e5e071306c2dead0e46b04a6654f4b124773db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTDS2SU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1BFW23AzIh3s%2B5vAymn37xfgFLpXwprrVT9ci%2Fp9VSAiBC06uS3AXs03di7LyMldeO20WonGoC4ZUwzGxWFBw3rCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8PAImqFcLe5umrm5KtwDO62MKgUEu5kBfxuN9CzL1n50g%2BRpkSjhkQJW2jOP6FLngwH3RvUJViKwDcwAN9p4%2B6n4qOKIyT363GoEKnVcgvH9eX9OnP9PympblAT4zIU7IWldCfErlxspr3wG4h0lU749M%2FMM2VUwyzXth1CNMU2NCUuUt2Sh%2BWI7AzKiIeQjlCR18ilWK3nYRX%2FsQXNVA3CZUbEPZmReTndxzcyyYEn5F7ckmVOfsQkAHWTC4pC%2FnWh1WKmkxDf9XaxMeML1q%2BXdgR1yQkr6ZAvvwLeX6r1H69zYJYiX9gNTQOeXya2agtMkWEouvzI7j3ndWzohTOYo33nptIfnjmC1JsV%2FHc73PhG%2FDnk8MiOMAk7zkZMmbhb7%2FkAU9jfJ5CN8JKn6dfutCKlOC4eoey%2FH5zccdIUXkXe4NvDayovaT8mUBE287p%2FfZZUkuOKN5ZO7GR9LlyHq7ceaWsnVcngVNGimjhUSMedscr0nCgm7PlMQ72tz1joZeoKsCTIn3yAmA0ip8VYE5UL2WA2ZzMn3u2BZpYodHmTosA5N9mrYqe1Uj0AxH3nwiz5Hvc%2FO3pagZwICSJI5BJdhl4LADjaeDdaEJvcIcdXvY0OhmQvHYXNPnHtFtRefchoqqB%2Fhl%2BAwg9L2vwY6pgFz6NqetHIiR9pN5L9D9Trd9%2FSxSAewTD2i62LWk8QveBBPvXq7ZLcws2ybkdKGM3IErmTizAJN55qSp5jQZRKcVtdQsJ3IZZA%2Bu0rjKuuzjnGLzKQurC6Zv0Os6pXd%2BbIbzGMDxES0TOhqvWV4jNrt1pBM5XMrSINyrVl35MGJu%2B8%2Fd6a5zp9%2FdPdGHIkqSnqHSO0XzspM1HfSEaQH2k22US98Cvjx&X-Amz-Signature=6edf62c044a5dc7b10ab1beff546948e9b499a71485c79fded78af1e6473b3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
