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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHWM6RI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCKcdOUk8IHRWSSJJHuylwwrzyOLMOtvYhoNoQyo8UYXQIfdoQmOvkPd68ooXugewrdulmk9b4cZR%2ByRoL1ZZXyACqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDFW%2Bi2Ums1JUhRUKtwD0wCjIFymYQYRryI97hT9F45VvRqcsS9GyZ9x9zzS3SenRhO5j8dlJYv1TfshwitzjiXYowZ0ASkG7obpOP2Ojn8EBLQvyn9%2Bk6ICjJ6wCsKO9uOdp0YVW%2BIEyqEPHkm11bHzO1BPijqVq89YAJJYu9OnrFwRokudWW59pB0Az0ZQ5lyhlGNUXLJhSjKOYAlcH%2FIlgENtGs7GIhXquL05McHD1g8QNcUSEdxLkeWqf3GcyQroNjkoZz17mnT3kYeKn4rQj5sRP4An7gXojGBVC%2BXJ6KZHU%2BHag3ATTqapvmaxAZR%2FSaWhB9NmtZnqbPEn2Y8zN4luZmtT9kQJlmk02dxx%2Bh3AhNj5rLh88r2Xp8I1AVBESJGPjkUc5fXXQwINtOLGFP6J5dqMR4NnV6JLybVrP%2F%2BcfA7GnF8bj0W5E0jLOOcI35K0KrBPp2hEe%2BpoBtoJ0pYAZo9pKE3QXyPfamaDZAI4rpTAERP9%2FhHlSvdF9Sg8KuvK4DHAJFP%2BHf74XI%2FaOhvCs8H41yQZ6LudcKpWtCIIinKcjtIN%2BYoYNEYc9yIqag9T5c0cgEiJ2vzvZzfhOYF5qbUBjkwklv%2FKuoyzap6c8uIDeFROkpl%2FkpuUUnuqeWec9BQmdTowj8uSwwY6pgEXSpS%2BR%2Bp0%2BGbRjI%2BU6i08cvz0293EEvR5Xf7Q4bo9F4YI%2BWgjiJadkORllP67jOfXORJY8zPeM%2FLH0ygSj32UB72XDicL0oQJh2EBPFllcfgu2UZR9S3R3eP%2BZBhzccbwJWewy87mxRoeVtCCZKDcSiAw%2F5A0DeOxw98SwiYCUPz%2FGEHYur80EtruWox6BWRFUlBVKd13QsRmmx6iUsYTSvGKuyLj&X-Amz-Signature=14e7e34b4d994c3e182362cb9b2eed34b7c31740f92bd54651601863ee3ac52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHWM6RI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCKcdOUk8IHRWSSJJHuylwwrzyOLMOtvYhoNoQyo8UYXQIfdoQmOvkPd68ooXugewrdulmk9b4cZR%2ByRoL1ZZXyACqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDFW%2Bi2Ums1JUhRUKtwD0wCjIFymYQYRryI97hT9F45VvRqcsS9GyZ9x9zzS3SenRhO5j8dlJYv1TfshwitzjiXYowZ0ASkG7obpOP2Ojn8EBLQvyn9%2Bk6ICjJ6wCsKO9uOdp0YVW%2BIEyqEPHkm11bHzO1BPijqVq89YAJJYu9OnrFwRokudWW59pB0Az0ZQ5lyhlGNUXLJhSjKOYAlcH%2FIlgENtGs7GIhXquL05McHD1g8QNcUSEdxLkeWqf3GcyQroNjkoZz17mnT3kYeKn4rQj5sRP4An7gXojGBVC%2BXJ6KZHU%2BHag3ATTqapvmaxAZR%2FSaWhB9NmtZnqbPEn2Y8zN4luZmtT9kQJlmk02dxx%2Bh3AhNj5rLh88r2Xp8I1AVBESJGPjkUc5fXXQwINtOLGFP6J5dqMR4NnV6JLybVrP%2F%2BcfA7GnF8bj0W5E0jLOOcI35K0KrBPp2hEe%2BpoBtoJ0pYAZo9pKE3QXyPfamaDZAI4rpTAERP9%2FhHlSvdF9Sg8KuvK4DHAJFP%2BHf74XI%2FaOhvCs8H41yQZ6LudcKpWtCIIinKcjtIN%2BYoYNEYc9yIqag9T5c0cgEiJ2vzvZzfhOYF5qbUBjkwklv%2FKuoyzap6c8uIDeFROkpl%2FkpuUUnuqeWec9BQmdTowj8uSwwY6pgEXSpS%2BR%2Bp0%2BGbRjI%2BU6i08cvz0293EEvR5Xf7Q4bo9F4YI%2BWgjiJadkORllP67jOfXORJY8zPeM%2FLH0ygSj32UB72XDicL0oQJh2EBPFllcfgu2UZR9S3R3eP%2BZBhzccbwJWewy87mxRoeVtCCZKDcSiAw%2F5A0DeOxw98SwiYCUPz%2FGEHYur80EtruWox6BWRFUlBVKd13QsRmmx6iUsYTSvGKuyLj&X-Amz-Signature=d9dae0b55c7b78cde38df094cfcb329a8f764e69636ecd2709c1171d2292394b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHWM6RI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCKcdOUk8IHRWSSJJHuylwwrzyOLMOtvYhoNoQyo8UYXQIfdoQmOvkPd68ooXugewrdulmk9b4cZR%2ByRoL1ZZXyACqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDFW%2Bi2Ums1JUhRUKtwD0wCjIFymYQYRryI97hT9F45VvRqcsS9GyZ9x9zzS3SenRhO5j8dlJYv1TfshwitzjiXYowZ0ASkG7obpOP2Ojn8EBLQvyn9%2Bk6ICjJ6wCsKO9uOdp0YVW%2BIEyqEPHkm11bHzO1BPijqVq89YAJJYu9OnrFwRokudWW59pB0Az0ZQ5lyhlGNUXLJhSjKOYAlcH%2FIlgENtGs7GIhXquL05McHD1g8QNcUSEdxLkeWqf3GcyQroNjkoZz17mnT3kYeKn4rQj5sRP4An7gXojGBVC%2BXJ6KZHU%2BHag3ATTqapvmaxAZR%2FSaWhB9NmtZnqbPEn2Y8zN4luZmtT9kQJlmk02dxx%2Bh3AhNj5rLh88r2Xp8I1AVBESJGPjkUc5fXXQwINtOLGFP6J5dqMR4NnV6JLybVrP%2F%2BcfA7GnF8bj0W5E0jLOOcI35K0KrBPp2hEe%2BpoBtoJ0pYAZo9pKE3QXyPfamaDZAI4rpTAERP9%2FhHlSvdF9Sg8KuvK4DHAJFP%2BHf74XI%2FaOhvCs8H41yQZ6LudcKpWtCIIinKcjtIN%2BYoYNEYc9yIqag9T5c0cgEiJ2vzvZzfhOYF5qbUBjkwklv%2FKuoyzap6c8uIDeFROkpl%2FkpuUUnuqeWec9BQmdTowj8uSwwY6pgEXSpS%2BR%2Bp0%2BGbRjI%2BU6i08cvz0293EEvR5Xf7Q4bo9F4YI%2BWgjiJadkORllP67jOfXORJY8zPeM%2FLH0ygSj32UB72XDicL0oQJh2EBPFllcfgu2UZR9S3R3eP%2BZBhzccbwJWewy87mxRoeVtCCZKDcSiAw%2F5A0DeOxw98SwiYCUPz%2FGEHYur80EtruWox6BWRFUlBVKd13QsRmmx6iUsYTSvGKuyLj&X-Amz-Signature=77360e7ac14327f1b8a0a9538216b167f8ec9a66e9f9a26e20b5addae84083bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHWM6RI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCKcdOUk8IHRWSSJJHuylwwrzyOLMOtvYhoNoQyo8UYXQIfdoQmOvkPd68ooXugewrdulmk9b4cZR%2ByRoL1ZZXyACqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDFW%2Bi2Ums1JUhRUKtwD0wCjIFymYQYRryI97hT9F45VvRqcsS9GyZ9x9zzS3SenRhO5j8dlJYv1TfshwitzjiXYowZ0ASkG7obpOP2Ojn8EBLQvyn9%2Bk6ICjJ6wCsKO9uOdp0YVW%2BIEyqEPHkm11bHzO1BPijqVq89YAJJYu9OnrFwRokudWW59pB0Az0ZQ5lyhlGNUXLJhSjKOYAlcH%2FIlgENtGs7GIhXquL05McHD1g8QNcUSEdxLkeWqf3GcyQroNjkoZz17mnT3kYeKn4rQj5sRP4An7gXojGBVC%2BXJ6KZHU%2BHag3ATTqapvmaxAZR%2FSaWhB9NmtZnqbPEn2Y8zN4luZmtT9kQJlmk02dxx%2Bh3AhNj5rLh88r2Xp8I1AVBESJGPjkUc5fXXQwINtOLGFP6J5dqMR4NnV6JLybVrP%2F%2BcfA7GnF8bj0W5E0jLOOcI35K0KrBPp2hEe%2BpoBtoJ0pYAZo9pKE3QXyPfamaDZAI4rpTAERP9%2FhHlSvdF9Sg8KuvK4DHAJFP%2BHf74XI%2FaOhvCs8H41yQZ6LudcKpWtCIIinKcjtIN%2BYoYNEYc9yIqag9T5c0cgEiJ2vzvZzfhOYF5qbUBjkwklv%2FKuoyzap6c8uIDeFROkpl%2FkpuUUnuqeWec9BQmdTowj8uSwwY6pgEXSpS%2BR%2Bp0%2BGbRjI%2BU6i08cvz0293EEvR5Xf7Q4bo9F4YI%2BWgjiJadkORllP67jOfXORJY8zPeM%2FLH0ygSj32UB72XDicL0oQJh2EBPFllcfgu2UZR9S3R3eP%2BZBhzccbwJWewy87mxRoeVtCCZKDcSiAw%2F5A0DeOxw98SwiYCUPz%2FGEHYur80EtruWox6BWRFUlBVKd13QsRmmx6iUsYTSvGKuyLj&X-Amz-Signature=868f11b8a22de0d5218e9e424dd1fc2ab479fb61be09495ca23758c5ebed5674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHWM6RI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCKcdOUk8IHRWSSJJHuylwwrzyOLMOtvYhoNoQyo8UYXQIfdoQmOvkPd68ooXugewrdulmk9b4cZR%2ByRoL1ZZXyACqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDFW%2Bi2Ums1JUhRUKtwD0wCjIFymYQYRryI97hT9F45VvRqcsS9GyZ9x9zzS3SenRhO5j8dlJYv1TfshwitzjiXYowZ0ASkG7obpOP2Ojn8EBLQvyn9%2Bk6ICjJ6wCsKO9uOdp0YVW%2BIEyqEPHkm11bHzO1BPijqVq89YAJJYu9OnrFwRokudWW59pB0Az0ZQ5lyhlGNUXLJhSjKOYAlcH%2FIlgENtGs7GIhXquL05McHD1g8QNcUSEdxLkeWqf3GcyQroNjkoZz17mnT3kYeKn4rQj5sRP4An7gXojGBVC%2BXJ6KZHU%2BHag3ATTqapvmaxAZR%2FSaWhB9NmtZnqbPEn2Y8zN4luZmtT9kQJlmk02dxx%2Bh3AhNj5rLh88r2Xp8I1AVBESJGPjkUc5fXXQwINtOLGFP6J5dqMR4NnV6JLybVrP%2F%2BcfA7GnF8bj0W5E0jLOOcI35K0KrBPp2hEe%2BpoBtoJ0pYAZo9pKE3QXyPfamaDZAI4rpTAERP9%2FhHlSvdF9Sg8KuvK4DHAJFP%2BHf74XI%2FaOhvCs8H41yQZ6LudcKpWtCIIinKcjtIN%2BYoYNEYc9yIqag9T5c0cgEiJ2vzvZzfhOYF5qbUBjkwklv%2FKuoyzap6c8uIDeFROkpl%2FkpuUUnuqeWec9BQmdTowj8uSwwY6pgEXSpS%2BR%2Bp0%2BGbRjI%2BU6i08cvz0293EEvR5Xf7Q4bo9F4YI%2BWgjiJadkORllP67jOfXORJY8zPeM%2FLH0ygSj32UB72XDicL0oQJh2EBPFllcfgu2UZR9S3R3eP%2BZBhzccbwJWewy87mxRoeVtCCZKDcSiAw%2F5A0DeOxw98SwiYCUPz%2FGEHYur80EtruWox6BWRFUlBVKd13QsRmmx6iUsYTSvGKuyLj&X-Amz-Signature=893cf6cc89efb4fea58c31d091b4bf03530b6ddc3a823aa0ac592ffaa6b1017f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHWM6RI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCKcdOUk8IHRWSSJJHuylwwrzyOLMOtvYhoNoQyo8UYXQIfdoQmOvkPd68ooXugewrdulmk9b4cZR%2ByRoL1ZZXyACqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDFW%2Bi2Ums1JUhRUKtwD0wCjIFymYQYRryI97hT9F45VvRqcsS9GyZ9x9zzS3SenRhO5j8dlJYv1TfshwitzjiXYowZ0ASkG7obpOP2Ojn8EBLQvyn9%2Bk6ICjJ6wCsKO9uOdp0YVW%2BIEyqEPHkm11bHzO1BPijqVq89YAJJYu9OnrFwRokudWW59pB0Az0ZQ5lyhlGNUXLJhSjKOYAlcH%2FIlgENtGs7GIhXquL05McHD1g8QNcUSEdxLkeWqf3GcyQroNjkoZz17mnT3kYeKn4rQj5sRP4An7gXojGBVC%2BXJ6KZHU%2BHag3ATTqapvmaxAZR%2FSaWhB9NmtZnqbPEn2Y8zN4luZmtT9kQJlmk02dxx%2Bh3AhNj5rLh88r2Xp8I1AVBESJGPjkUc5fXXQwINtOLGFP6J5dqMR4NnV6JLybVrP%2F%2BcfA7GnF8bj0W5E0jLOOcI35K0KrBPp2hEe%2BpoBtoJ0pYAZo9pKE3QXyPfamaDZAI4rpTAERP9%2FhHlSvdF9Sg8KuvK4DHAJFP%2BHf74XI%2FaOhvCs8H41yQZ6LudcKpWtCIIinKcjtIN%2BYoYNEYc9yIqag9T5c0cgEiJ2vzvZzfhOYF5qbUBjkwklv%2FKuoyzap6c8uIDeFROkpl%2FkpuUUnuqeWec9BQmdTowj8uSwwY6pgEXSpS%2BR%2Bp0%2BGbRjI%2BU6i08cvz0293EEvR5Xf7Q4bo9F4YI%2BWgjiJadkORllP67jOfXORJY8zPeM%2FLH0ygSj32UB72XDicL0oQJh2EBPFllcfgu2UZR9S3R3eP%2BZBhzccbwJWewy87mxRoeVtCCZKDcSiAw%2F5A0DeOxw98SwiYCUPz%2FGEHYur80EtruWox6BWRFUlBVKd13QsRmmx6iUsYTSvGKuyLj&X-Amz-Signature=b9574ea7145b1ef3f67ac9320512be84f50e17755d0865363984a9b3fc2cfb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHWM6RI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCKcdOUk8IHRWSSJJHuylwwrzyOLMOtvYhoNoQyo8UYXQIfdoQmOvkPd68ooXugewrdulmk9b4cZR%2ByRoL1ZZXyACqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDFW%2Bi2Ums1JUhRUKtwD0wCjIFymYQYRryI97hT9F45VvRqcsS9GyZ9x9zzS3SenRhO5j8dlJYv1TfshwitzjiXYowZ0ASkG7obpOP2Ojn8EBLQvyn9%2Bk6ICjJ6wCsKO9uOdp0YVW%2BIEyqEPHkm11bHzO1BPijqVq89YAJJYu9OnrFwRokudWW59pB0Az0ZQ5lyhlGNUXLJhSjKOYAlcH%2FIlgENtGs7GIhXquL05McHD1g8QNcUSEdxLkeWqf3GcyQroNjkoZz17mnT3kYeKn4rQj5sRP4An7gXojGBVC%2BXJ6KZHU%2BHag3ATTqapvmaxAZR%2FSaWhB9NmtZnqbPEn2Y8zN4luZmtT9kQJlmk02dxx%2Bh3AhNj5rLh88r2Xp8I1AVBESJGPjkUc5fXXQwINtOLGFP6J5dqMR4NnV6JLybVrP%2F%2BcfA7GnF8bj0W5E0jLOOcI35K0KrBPp2hEe%2BpoBtoJ0pYAZo9pKE3QXyPfamaDZAI4rpTAERP9%2FhHlSvdF9Sg8KuvK4DHAJFP%2BHf74XI%2FaOhvCs8H41yQZ6LudcKpWtCIIinKcjtIN%2BYoYNEYc9yIqag9T5c0cgEiJ2vzvZzfhOYF5qbUBjkwklv%2FKuoyzap6c8uIDeFROkpl%2FkpuUUnuqeWec9BQmdTowj8uSwwY6pgEXSpS%2BR%2Bp0%2BGbRjI%2BU6i08cvz0293EEvR5Xf7Q4bo9F4YI%2BWgjiJadkORllP67jOfXORJY8zPeM%2FLH0ygSj32UB72XDicL0oQJh2EBPFllcfgu2UZR9S3R3eP%2BZBhzccbwJWewy87mxRoeVtCCZKDcSiAw%2F5A0DeOxw98SwiYCUPz%2FGEHYur80EtruWox6BWRFUlBVKd13QsRmmx6iUsYTSvGKuyLj&X-Amz-Signature=76a2876dea3c4d72a6b496e4442efa8c2f9344134e57d8fe70e2670bde67d876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
