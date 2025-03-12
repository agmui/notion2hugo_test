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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=20efe6ce90f68e3f7bf8606d90e6c845cd577326bc175f97aa24d3bc4da0bfad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=ae5871503eb97e745114cef2e14aa23788d6b70b4b80e59cad259fa4af292075&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=f3a268c689543b1cad7db2d1b4de4146668e8ce194e55c94bd054ee9cd9aa327&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=f6b735aa2c842336a1c2480a4cc466a62a1ac491b1738d0247d4eaa17b6015a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=9f93fdd07f1e62aef8a42a2e2c648634d659c80a532a2b9c85e604ddab64bd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=fbaefe372df3389e88a7eae5ae5c3c1075f0b2ecc0f6f40d9a0cf287d61b8269&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DAEFYF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC12aka5ChIzTQUBOw0%2Fvc45X013zMZT34yX%2Bgqkh9gbgIgYtKljNMK7RpdiAEPpRNmZwFvZidlPALJWiav%2B0xvFhkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq5%2BOfAMsN92LlDLCrcAz5XQIlkHTfSbN37AEbmlCQ7TFcliUS7jrrGZrodxM0hKu%2Fb9EQtcC8Y%2FZ%2FvD05RgeO9VXZ34aoeO%2BRlICqGbYhzWvWipZIbbq8gqS2S1xFHxAkMXwsAZK5DsQ41Q7LP6oQXSsuCF1AzFa2vZk3KQiUTxFmiwpmYHiZdPTZ8Nt6ZP4c7r4zM1B4mTYsprNWpC1XGDwurUsiqB6ctBAQhPhzG%2BfRa%2FwgeA0Cx3pX8fHjNThVxPsYdvRK0%2FjQYDSIzG3DRbKKl2BVDjgktnUPIaCOKcdcjSaCxWjT8jCPik232VOENp0xqRA0c7QEL%2BRhjmZsCPOwVmt7wSkk1LurOTlY0OxBtYSwojc4AQYEVZORkg4b6B0RGd1skMAYlDYSEn5QazLmAxd3N3HeWwFI%2F82Tpi0rWnyWZJWXEtwyi%2By396yn6eQnuv8tmjyGc2QI14S8LjEowMTkJltHOLt5WTj524sjvPgCpEzTSyMLzHMN2BjCZcDMQ4SR0Z71lLzlyFDYTkry6UAqyXcAjlig5xMvV4g9iBgwzma493bsoyWE67it6tuK%2FlnsI3vUnlas3zn2iRNqz0esban%2FFbKpsmmQ0YMOks3B6OGNON0hQnwSGhNVr9lx9tH11qbktMKjaw74GOqUBx%2FNgyX9ceCgMspIQSxwBQpEPQCcUzePH%2BRSuGxgGTVm5cyrmehA%2F9PXBsDbhzwOfhs951GvmvOlMvuoItJA6Tj%2BTa9cW0x08fK3T4qMaNEHiiGDf8zEoIAy5qcl2P7D0RiBp3Jgbxm4rxwl2uWF8Zh7yi52Nmc5BYGW0%2FN6wsTTBx%2BOFYY2Oh8dj8QXfA2g%2BwKJNYxWwNq0YPZ%2Bp1NgCklRG%2BwQ4&X-Amz-Signature=a32fdcfd553dd6a4c89ac28d89a01a1b6526b4a1087ec0b5916848d42fe20fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
