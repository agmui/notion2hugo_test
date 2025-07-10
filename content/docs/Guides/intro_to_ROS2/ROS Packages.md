---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD6ZJP5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3e%2Bw34sylgJf193DEvLh%2BrX%2FfM7BI96OTyUnoWJ%2FkpQIhAOJZHNbWHrdq1HHoU%2BmaOZQX4GGUNatPvBU6R0%2Fc6YojKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz06Qu6htW10eEJoWoq3AOAWe%2FBGnINJsTHOokYZ%2FOu3cEpCaUy2NIjGUulKt5CV3pIo6EkEPIpjhX8NQ1XvL4r7rR0UEOE9xyZFglo7M1RzaYeGeG3MyiqxOEsrZKnnunl3p6SC1ib1qpWxHKZcklaFSNamak8UcEVRB8ix9HuP1m0iHvCW5CPkOkCz6TzgMgFfTeXHG%2BIHStKojLTNl3mlzocoFsLbkx6F9KetrZGq2Pz5boVzitoO%2BFjWXP0lZ%2BPMi7aaLuKwQPiQXFRSHG4YEMaR1KbBnlIjbiBdTc4i7GzmV9W%2BAekTKq4XZpkW0iIiIxQX8UtcdGs7X3VI%2BsL3zqfEDD52hlwJYV6LhUuCDH7eCSU55mQU3f0VHDV%2FFG%2FUpI5lnWL0wraWmF7tQVNoaPDfL0rTjhTQZs%2FnZc0a%2FefwEHCEIzfmrz5g6w5zFF4k6W7BvYPuePjGyenkUCTO0qLeKP8WRoJu4MgX%2Fel94KI71c%2FQu7TgfZirgtdh4ZqkLHIY5MrugV2qSc2blcbhml2IPVGCia5viSuVmOZpxmfoAFRdx3Fc9vA642JkpWBb7jqIdFawq1sctnYytT0U4cezrPKA7YRpgyiFSNuvNsC1hZlLszcWfzugEgF8AgUjc2EmtLs3ymdXDC5orzDBjqkAblr23588tfU0Y605bXwYIPxWI%2FTOSMa7DPWXcMWzlcW1GBlzOLKsBx8UZE4MCwLAiBFC1JTvjd8qTczhR6was13ddg9dSjqMg%2BehZJ0fNtorkpusiWDPu0oHJlWZPSQISX4%2FgyXoAZKKk%2FgNrEnWGVfdbR3HWG6v9IP6Gj4jcu7EMoGHdgcS3zFFDW2W1SnKdALdiwXfY6PAKYUSSce2Qsowksm&X-Amz-Signature=e022c8244e30738b7aeb67377e49e6bffbd34719bbb6bdf2d6f0cec00ab2db17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD6ZJP5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3e%2Bw34sylgJf193DEvLh%2BrX%2FfM7BI96OTyUnoWJ%2FkpQIhAOJZHNbWHrdq1HHoU%2BmaOZQX4GGUNatPvBU6R0%2Fc6YojKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz06Qu6htW10eEJoWoq3AOAWe%2FBGnINJsTHOokYZ%2FOu3cEpCaUy2NIjGUulKt5CV3pIo6EkEPIpjhX8NQ1XvL4r7rR0UEOE9xyZFglo7M1RzaYeGeG3MyiqxOEsrZKnnunl3p6SC1ib1qpWxHKZcklaFSNamak8UcEVRB8ix9HuP1m0iHvCW5CPkOkCz6TzgMgFfTeXHG%2BIHStKojLTNl3mlzocoFsLbkx6F9KetrZGq2Pz5boVzitoO%2BFjWXP0lZ%2BPMi7aaLuKwQPiQXFRSHG4YEMaR1KbBnlIjbiBdTc4i7GzmV9W%2BAekTKq4XZpkW0iIiIxQX8UtcdGs7X3VI%2BsL3zqfEDD52hlwJYV6LhUuCDH7eCSU55mQU3f0VHDV%2FFG%2FUpI5lnWL0wraWmF7tQVNoaPDfL0rTjhTQZs%2FnZc0a%2FefwEHCEIzfmrz5g6w5zFF4k6W7BvYPuePjGyenkUCTO0qLeKP8WRoJu4MgX%2Fel94KI71c%2FQu7TgfZirgtdh4ZqkLHIY5MrugV2qSc2blcbhml2IPVGCia5viSuVmOZpxmfoAFRdx3Fc9vA642JkpWBb7jqIdFawq1sctnYytT0U4cezrPKA7YRpgyiFSNuvNsC1hZlLszcWfzugEgF8AgUjc2EmtLs3ymdXDC5orzDBjqkAblr23588tfU0Y605bXwYIPxWI%2FTOSMa7DPWXcMWzlcW1GBlzOLKsBx8UZE4MCwLAiBFC1JTvjd8qTczhR6was13ddg9dSjqMg%2BehZJ0fNtorkpusiWDPu0oHJlWZPSQISX4%2FgyXoAZKKk%2FgNrEnWGVfdbR3HWG6v9IP6Gj4jcu7EMoGHdgcS3zFFDW2W1SnKdALdiwXfY6PAKYUSSce2Qsowksm&X-Amz-Signature=461e0ca2f239378a25bb9c535812522dd96d4499271409095ff6c9ae2906d20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD6ZJP5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3e%2Bw34sylgJf193DEvLh%2BrX%2FfM7BI96OTyUnoWJ%2FkpQIhAOJZHNbWHrdq1HHoU%2BmaOZQX4GGUNatPvBU6R0%2Fc6YojKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz06Qu6htW10eEJoWoq3AOAWe%2FBGnINJsTHOokYZ%2FOu3cEpCaUy2NIjGUulKt5CV3pIo6EkEPIpjhX8NQ1XvL4r7rR0UEOE9xyZFglo7M1RzaYeGeG3MyiqxOEsrZKnnunl3p6SC1ib1qpWxHKZcklaFSNamak8UcEVRB8ix9HuP1m0iHvCW5CPkOkCz6TzgMgFfTeXHG%2BIHStKojLTNl3mlzocoFsLbkx6F9KetrZGq2Pz5boVzitoO%2BFjWXP0lZ%2BPMi7aaLuKwQPiQXFRSHG4YEMaR1KbBnlIjbiBdTc4i7GzmV9W%2BAekTKq4XZpkW0iIiIxQX8UtcdGs7X3VI%2BsL3zqfEDD52hlwJYV6LhUuCDH7eCSU55mQU3f0VHDV%2FFG%2FUpI5lnWL0wraWmF7tQVNoaPDfL0rTjhTQZs%2FnZc0a%2FefwEHCEIzfmrz5g6w5zFF4k6W7BvYPuePjGyenkUCTO0qLeKP8WRoJu4MgX%2Fel94KI71c%2FQu7TgfZirgtdh4ZqkLHIY5MrugV2qSc2blcbhml2IPVGCia5viSuVmOZpxmfoAFRdx3Fc9vA642JkpWBb7jqIdFawq1sctnYytT0U4cezrPKA7YRpgyiFSNuvNsC1hZlLszcWfzugEgF8AgUjc2EmtLs3ymdXDC5orzDBjqkAblr23588tfU0Y605bXwYIPxWI%2FTOSMa7DPWXcMWzlcW1GBlzOLKsBx8UZE4MCwLAiBFC1JTvjd8qTczhR6was13ddg9dSjqMg%2BehZJ0fNtorkpusiWDPu0oHJlWZPSQISX4%2FgyXoAZKKk%2FgNrEnWGVfdbR3HWG6v9IP6Gj4jcu7EMoGHdgcS3zFFDW2W1SnKdALdiwXfY6PAKYUSSce2Qsowksm&X-Amz-Signature=eb1505d1a3626a1daaebbe16de578d469ba45435d1a78a99694687ed4d9abed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD6ZJP5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3e%2Bw34sylgJf193DEvLh%2BrX%2FfM7BI96OTyUnoWJ%2FkpQIhAOJZHNbWHrdq1HHoU%2BmaOZQX4GGUNatPvBU6R0%2Fc6YojKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz06Qu6htW10eEJoWoq3AOAWe%2FBGnINJsTHOokYZ%2FOu3cEpCaUy2NIjGUulKt5CV3pIo6EkEPIpjhX8NQ1XvL4r7rR0UEOE9xyZFglo7M1RzaYeGeG3MyiqxOEsrZKnnunl3p6SC1ib1qpWxHKZcklaFSNamak8UcEVRB8ix9HuP1m0iHvCW5CPkOkCz6TzgMgFfTeXHG%2BIHStKojLTNl3mlzocoFsLbkx6F9KetrZGq2Pz5boVzitoO%2BFjWXP0lZ%2BPMi7aaLuKwQPiQXFRSHG4YEMaR1KbBnlIjbiBdTc4i7GzmV9W%2BAekTKq4XZpkW0iIiIxQX8UtcdGs7X3VI%2BsL3zqfEDD52hlwJYV6LhUuCDH7eCSU55mQU3f0VHDV%2FFG%2FUpI5lnWL0wraWmF7tQVNoaPDfL0rTjhTQZs%2FnZc0a%2FefwEHCEIzfmrz5g6w5zFF4k6W7BvYPuePjGyenkUCTO0qLeKP8WRoJu4MgX%2Fel94KI71c%2FQu7TgfZirgtdh4ZqkLHIY5MrugV2qSc2blcbhml2IPVGCia5viSuVmOZpxmfoAFRdx3Fc9vA642JkpWBb7jqIdFawq1sctnYytT0U4cezrPKA7YRpgyiFSNuvNsC1hZlLszcWfzugEgF8AgUjc2EmtLs3ymdXDC5orzDBjqkAblr23588tfU0Y605bXwYIPxWI%2FTOSMa7DPWXcMWzlcW1GBlzOLKsBx8UZE4MCwLAiBFC1JTvjd8qTczhR6was13ddg9dSjqMg%2BehZJ0fNtorkpusiWDPu0oHJlWZPSQISX4%2FgyXoAZKKk%2FgNrEnWGVfdbR3HWG6v9IP6Gj4jcu7EMoGHdgcS3zFFDW2W1SnKdALdiwXfY6PAKYUSSce2Qsowksm&X-Amz-Signature=39f821a71f2c69b565e75f38a85737c508508e196cf6c04350614d6437c0b31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD6ZJP5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3e%2Bw34sylgJf193DEvLh%2BrX%2FfM7BI96OTyUnoWJ%2FkpQIhAOJZHNbWHrdq1HHoU%2BmaOZQX4GGUNatPvBU6R0%2Fc6YojKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz06Qu6htW10eEJoWoq3AOAWe%2FBGnINJsTHOokYZ%2FOu3cEpCaUy2NIjGUulKt5CV3pIo6EkEPIpjhX8NQ1XvL4r7rR0UEOE9xyZFglo7M1RzaYeGeG3MyiqxOEsrZKnnunl3p6SC1ib1qpWxHKZcklaFSNamak8UcEVRB8ix9HuP1m0iHvCW5CPkOkCz6TzgMgFfTeXHG%2BIHStKojLTNl3mlzocoFsLbkx6F9KetrZGq2Pz5boVzitoO%2BFjWXP0lZ%2BPMi7aaLuKwQPiQXFRSHG4YEMaR1KbBnlIjbiBdTc4i7GzmV9W%2BAekTKq4XZpkW0iIiIxQX8UtcdGs7X3VI%2BsL3zqfEDD52hlwJYV6LhUuCDH7eCSU55mQU3f0VHDV%2FFG%2FUpI5lnWL0wraWmF7tQVNoaPDfL0rTjhTQZs%2FnZc0a%2FefwEHCEIzfmrz5g6w5zFF4k6W7BvYPuePjGyenkUCTO0qLeKP8WRoJu4MgX%2Fel94KI71c%2FQu7TgfZirgtdh4ZqkLHIY5MrugV2qSc2blcbhml2IPVGCia5viSuVmOZpxmfoAFRdx3Fc9vA642JkpWBb7jqIdFawq1sctnYytT0U4cezrPKA7YRpgyiFSNuvNsC1hZlLszcWfzugEgF8AgUjc2EmtLs3ymdXDC5orzDBjqkAblr23588tfU0Y605bXwYIPxWI%2FTOSMa7DPWXcMWzlcW1GBlzOLKsBx8UZE4MCwLAiBFC1JTvjd8qTczhR6was13ddg9dSjqMg%2BehZJ0fNtorkpusiWDPu0oHJlWZPSQISX4%2FgyXoAZKKk%2FgNrEnWGVfdbR3HWG6v9IP6Gj4jcu7EMoGHdgcS3zFFDW2W1SnKdALdiwXfY6PAKYUSSce2Qsowksm&X-Amz-Signature=b79b31437ebe85756355393ea9463a8ffaaa668dd49a18e5e7d1265033d0a2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD6ZJP5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3e%2Bw34sylgJf193DEvLh%2BrX%2FfM7BI96OTyUnoWJ%2FkpQIhAOJZHNbWHrdq1HHoU%2BmaOZQX4GGUNatPvBU6R0%2Fc6YojKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz06Qu6htW10eEJoWoq3AOAWe%2FBGnINJsTHOokYZ%2FOu3cEpCaUy2NIjGUulKt5CV3pIo6EkEPIpjhX8NQ1XvL4r7rR0UEOE9xyZFglo7M1RzaYeGeG3MyiqxOEsrZKnnunl3p6SC1ib1qpWxHKZcklaFSNamak8UcEVRB8ix9HuP1m0iHvCW5CPkOkCz6TzgMgFfTeXHG%2BIHStKojLTNl3mlzocoFsLbkx6F9KetrZGq2Pz5boVzitoO%2BFjWXP0lZ%2BPMi7aaLuKwQPiQXFRSHG4YEMaR1KbBnlIjbiBdTc4i7GzmV9W%2BAekTKq4XZpkW0iIiIxQX8UtcdGs7X3VI%2BsL3zqfEDD52hlwJYV6LhUuCDH7eCSU55mQU3f0VHDV%2FFG%2FUpI5lnWL0wraWmF7tQVNoaPDfL0rTjhTQZs%2FnZc0a%2FefwEHCEIzfmrz5g6w5zFF4k6W7BvYPuePjGyenkUCTO0qLeKP8WRoJu4MgX%2Fel94KI71c%2FQu7TgfZirgtdh4ZqkLHIY5MrugV2qSc2blcbhml2IPVGCia5viSuVmOZpxmfoAFRdx3Fc9vA642JkpWBb7jqIdFawq1sctnYytT0U4cezrPKA7YRpgyiFSNuvNsC1hZlLszcWfzugEgF8AgUjc2EmtLs3ymdXDC5orzDBjqkAblr23588tfU0Y605bXwYIPxWI%2FTOSMa7DPWXcMWzlcW1GBlzOLKsBx8UZE4MCwLAiBFC1JTvjd8qTczhR6was13ddg9dSjqMg%2BehZJ0fNtorkpusiWDPu0oHJlWZPSQISX4%2FgyXoAZKKk%2FgNrEnWGVfdbR3HWG6v9IP6Gj4jcu7EMoGHdgcS3zFFDW2W1SnKdALdiwXfY6PAKYUSSce2Qsowksm&X-Amz-Signature=d8d13cd0336467ebb6f54efa186d250e9957a75979f4c99f3d832bbd378c1f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD6ZJP5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3e%2Bw34sylgJf193DEvLh%2BrX%2FfM7BI96OTyUnoWJ%2FkpQIhAOJZHNbWHrdq1HHoU%2BmaOZQX4GGUNatPvBU6R0%2Fc6YojKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz06Qu6htW10eEJoWoq3AOAWe%2FBGnINJsTHOokYZ%2FOu3cEpCaUy2NIjGUulKt5CV3pIo6EkEPIpjhX8NQ1XvL4r7rR0UEOE9xyZFglo7M1RzaYeGeG3MyiqxOEsrZKnnunl3p6SC1ib1qpWxHKZcklaFSNamak8UcEVRB8ix9HuP1m0iHvCW5CPkOkCz6TzgMgFfTeXHG%2BIHStKojLTNl3mlzocoFsLbkx6F9KetrZGq2Pz5boVzitoO%2BFjWXP0lZ%2BPMi7aaLuKwQPiQXFRSHG4YEMaR1KbBnlIjbiBdTc4i7GzmV9W%2BAekTKq4XZpkW0iIiIxQX8UtcdGs7X3VI%2BsL3zqfEDD52hlwJYV6LhUuCDH7eCSU55mQU3f0VHDV%2FFG%2FUpI5lnWL0wraWmF7tQVNoaPDfL0rTjhTQZs%2FnZc0a%2FefwEHCEIzfmrz5g6w5zFF4k6W7BvYPuePjGyenkUCTO0qLeKP8WRoJu4MgX%2Fel94KI71c%2FQu7TgfZirgtdh4ZqkLHIY5MrugV2qSc2blcbhml2IPVGCia5viSuVmOZpxmfoAFRdx3Fc9vA642JkpWBb7jqIdFawq1sctnYytT0U4cezrPKA7YRpgyiFSNuvNsC1hZlLszcWfzugEgF8AgUjc2EmtLs3ymdXDC5orzDBjqkAblr23588tfU0Y605bXwYIPxWI%2FTOSMa7DPWXcMWzlcW1GBlzOLKsBx8UZE4MCwLAiBFC1JTvjd8qTczhR6was13ddg9dSjqMg%2BehZJ0fNtorkpusiWDPu0oHJlWZPSQISX4%2FgyXoAZKKk%2FgNrEnWGVfdbR3HWG6v9IP6Gj4jcu7EMoGHdgcS3zFFDW2W1SnKdALdiwXfY6PAKYUSSce2Qsowksm&X-Amz-Signature=7f8784bd449de4d439b182369aecbe51268c32c0d3be1c9525bcddb701aeb3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
