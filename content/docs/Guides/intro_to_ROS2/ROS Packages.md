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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJNPFQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleCC2YACP9a60CfE6iscP0oR7L5Qvc7LG3fvdjIARugIhALzGjUl4r1lxaZRpFv8Vx741p0YFsLfUunq9Pw%2FCxRC0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6sF%2F1I%2FRZrc37Agsq3ANYoM0e3g5To4OpP1VjN542K%2B0TgEQAjTM1Y9Fs7iP51vFXK7YqzeYXTqDz%2FatUu3AuXLKMWbh112X83YN9FdsDmuuTXqfW0OD9rPyzXUnlVjCLP6XmCFMBeKur0XHeJPJRvu%2BEoKZ6NouT1%2FHbOPmG6sL99FuE3aB3X%2FYHjJEsPLAPYpr8UZSR7Rj7Athc78uaGwTyNkKqW8EGO2X3on5HhVPceYDfghGBR0Wz0sDkJeh%2BM0GbUB54XOmcyJXumwVGcXqWIoqWQ5zLo1RQxDQYHqi0SKuOtPCnu3cJRS06F3sk6NzC0fOmYV6YN5AL69UugzIrBR3cgDwtXA6s4h9EEVnJg8gn0vIvfRSXN4j9R5zpP3wOmbhCjuF%2BTXaLk6GHmQQXSVyk2II5P2SPdZlky1PatfFp5oJIupbxETLm93tRTgdC1X04pjpVDlNsib4MB5PvyigHFtY77OksDQ8qHkqKptrMIeTxlwEEwIRMrw8JCz%2FJk7A239cvb2XrQVwo0Tk1hnv7LZnm%2BCn3ImGBtOBHIZxLR0jEEtvNnjXE738v9K0jeojpDUkAcketvzHIIgMHLTvzLN3JU5Hm0W%2FXwxz2VFSdy%2F0AQwO55WJh69yiayUsyx4Ue9kNWDDBnbu%2FBjqkAYwSRGKNxWJaiL5mhXkoOyT3Q1jLEFRqnH6w9tOKLgRABfU5z7Ph7wcmXOO4%2BCUqyBQ5WZ%2F1kcn0kod1GoIMNKpdCobGlFc1Ar7oiayLVk8j4Ih4w9EYbordGjdvSeenKvIlgwYbzch3GOXCM%2B%2Fbu1%2Bd96sAs4S3ypC3374kah6L7j8QSuFypROpGsJWudJmuXwe2Fi5NnLx404TiuNwhh%2B5Q6Jv&X-Amz-Signature=2322f2b976a059bb00a704aeea3a8fc22116bf91acd4a73eb11e1463f5f6abf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJNPFQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleCC2YACP9a60CfE6iscP0oR7L5Qvc7LG3fvdjIARugIhALzGjUl4r1lxaZRpFv8Vx741p0YFsLfUunq9Pw%2FCxRC0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6sF%2F1I%2FRZrc37Agsq3ANYoM0e3g5To4OpP1VjN542K%2B0TgEQAjTM1Y9Fs7iP51vFXK7YqzeYXTqDz%2FatUu3AuXLKMWbh112X83YN9FdsDmuuTXqfW0OD9rPyzXUnlVjCLP6XmCFMBeKur0XHeJPJRvu%2BEoKZ6NouT1%2FHbOPmG6sL99FuE3aB3X%2FYHjJEsPLAPYpr8UZSR7Rj7Athc78uaGwTyNkKqW8EGO2X3on5HhVPceYDfghGBR0Wz0sDkJeh%2BM0GbUB54XOmcyJXumwVGcXqWIoqWQ5zLo1RQxDQYHqi0SKuOtPCnu3cJRS06F3sk6NzC0fOmYV6YN5AL69UugzIrBR3cgDwtXA6s4h9EEVnJg8gn0vIvfRSXN4j9R5zpP3wOmbhCjuF%2BTXaLk6GHmQQXSVyk2II5P2SPdZlky1PatfFp5oJIupbxETLm93tRTgdC1X04pjpVDlNsib4MB5PvyigHFtY77OksDQ8qHkqKptrMIeTxlwEEwIRMrw8JCz%2FJk7A239cvb2XrQVwo0Tk1hnv7LZnm%2BCn3ImGBtOBHIZxLR0jEEtvNnjXE738v9K0jeojpDUkAcketvzHIIgMHLTvzLN3JU5Hm0W%2FXwxz2VFSdy%2F0AQwO55WJh69yiayUsyx4Ue9kNWDDBnbu%2FBjqkAYwSRGKNxWJaiL5mhXkoOyT3Q1jLEFRqnH6w9tOKLgRABfU5z7Ph7wcmXOO4%2BCUqyBQ5WZ%2F1kcn0kod1GoIMNKpdCobGlFc1Ar7oiayLVk8j4Ih4w9EYbordGjdvSeenKvIlgwYbzch3GOXCM%2B%2Fbu1%2Bd96sAs4S3ypC3374kah6L7j8QSuFypROpGsJWudJmuXwe2Fi5NnLx404TiuNwhh%2B5Q6Jv&X-Amz-Signature=a75da5e9e13b0609397d1396aebea5c5bec8d252da9848acf5b633337bd806dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJNPFQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleCC2YACP9a60CfE6iscP0oR7L5Qvc7LG3fvdjIARugIhALzGjUl4r1lxaZRpFv8Vx741p0YFsLfUunq9Pw%2FCxRC0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6sF%2F1I%2FRZrc37Agsq3ANYoM0e3g5To4OpP1VjN542K%2B0TgEQAjTM1Y9Fs7iP51vFXK7YqzeYXTqDz%2FatUu3AuXLKMWbh112X83YN9FdsDmuuTXqfW0OD9rPyzXUnlVjCLP6XmCFMBeKur0XHeJPJRvu%2BEoKZ6NouT1%2FHbOPmG6sL99FuE3aB3X%2FYHjJEsPLAPYpr8UZSR7Rj7Athc78uaGwTyNkKqW8EGO2X3on5HhVPceYDfghGBR0Wz0sDkJeh%2BM0GbUB54XOmcyJXumwVGcXqWIoqWQ5zLo1RQxDQYHqi0SKuOtPCnu3cJRS06F3sk6NzC0fOmYV6YN5AL69UugzIrBR3cgDwtXA6s4h9EEVnJg8gn0vIvfRSXN4j9R5zpP3wOmbhCjuF%2BTXaLk6GHmQQXSVyk2II5P2SPdZlky1PatfFp5oJIupbxETLm93tRTgdC1X04pjpVDlNsib4MB5PvyigHFtY77OksDQ8qHkqKptrMIeTxlwEEwIRMrw8JCz%2FJk7A239cvb2XrQVwo0Tk1hnv7LZnm%2BCn3ImGBtOBHIZxLR0jEEtvNnjXE738v9K0jeojpDUkAcketvzHIIgMHLTvzLN3JU5Hm0W%2FXwxz2VFSdy%2F0AQwO55WJh69yiayUsyx4Ue9kNWDDBnbu%2FBjqkAYwSRGKNxWJaiL5mhXkoOyT3Q1jLEFRqnH6w9tOKLgRABfU5z7Ph7wcmXOO4%2BCUqyBQ5WZ%2F1kcn0kod1GoIMNKpdCobGlFc1Ar7oiayLVk8j4Ih4w9EYbordGjdvSeenKvIlgwYbzch3GOXCM%2B%2Fbu1%2Bd96sAs4S3ypC3374kah6L7j8QSuFypROpGsJWudJmuXwe2Fi5NnLx404TiuNwhh%2B5Q6Jv&X-Amz-Signature=4b33efe074f3c756b388e07b5b1a7009c9af00bf147b0880197966eb72926b41&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJNPFQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleCC2YACP9a60CfE6iscP0oR7L5Qvc7LG3fvdjIARugIhALzGjUl4r1lxaZRpFv8Vx741p0YFsLfUunq9Pw%2FCxRC0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6sF%2F1I%2FRZrc37Agsq3ANYoM0e3g5To4OpP1VjN542K%2B0TgEQAjTM1Y9Fs7iP51vFXK7YqzeYXTqDz%2FatUu3AuXLKMWbh112X83YN9FdsDmuuTXqfW0OD9rPyzXUnlVjCLP6XmCFMBeKur0XHeJPJRvu%2BEoKZ6NouT1%2FHbOPmG6sL99FuE3aB3X%2FYHjJEsPLAPYpr8UZSR7Rj7Athc78uaGwTyNkKqW8EGO2X3on5HhVPceYDfghGBR0Wz0sDkJeh%2BM0GbUB54XOmcyJXumwVGcXqWIoqWQ5zLo1RQxDQYHqi0SKuOtPCnu3cJRS06F3sk6NzC0fOmYV6YN5AL69UugzIrBR3cgDwtXA6s4h9EEVnJg8gn0vIvfRSXN4j9R5zpP3wOmbhCjuF%2BTXaLk6GHmQQXSVyk2II5P2SPdZlky1PatfFp5oJIupbxETLm93tRTgdC1X04pjpVDlNsib4MB5PvyigHFtY77OksDQ8qHkqKptrMIeTxlwEEwIRMrw8JCz%2FJk7A239cvb2XrQVwo0Tk1hnv7LZnm%2BCn3ImGBtOBHIZxLR0jEEtvNnjXE738v9K0jeojpDUkAcketvzHIIgMHLTvzLN3JU5Hm0W%2FXwxz2VFSdy%2F0AQwO55WJh69yiayUsyx4Ue9kNWDDBnbu%2FBjqkAYwSRGKNxWJaiL5mhXkoOyT3Q1jLEFRqnH6w9tOKLgRABfU5z7Ph7wcmXOO4%2BCUqyBQ5WZ%2F1kcn0kod1GoIMNKpdCobGlFc1Ar7oiayLVk8j4Ih4w9EYbordGjdvSeenKvIlgwYbzch3GOXCM%2B%2Fbu1%2Bd96sAs4S3ypC3374kah6L7j8QSuFypROpGsJWudJmuXwe2Fi5NnLx404TiuNwhh%2B5Q6Jv&X-Amz-Signature=fa7cbc3840d2a77c24be57a97bd66400a2f6827978e6abfc1032b4daa4d5c918&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJNPFQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleCC2YACP9a60CfE6iscP0oR7L5Qvc7LG3fvdjIARugIhALzGjUl4r1lxaZRpFv8Vx741p0YFsLfUunq9Pw%2FCxRC0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6sF%2F1I%2FRZrc37Agsq3ANYoM0e3g5To4OpP1VjN542K%2B0TgEQAjTM1Y9Fs7iP51vFXK7YqzeYXTqDz%2FatUu3AuXLKMWbh112X83YN9FdsDmuuTXqfW0OD9rPyzXUnlVjCLP6XmCFMBeKur0XHeJPJRvu%2BEoKZ6NouT1%2FHbOPmG6sL99FuE3aB3X%2FYHjJEsPLAPYpr8UZSR7Rj7Athc78uaGwTyNkKqW8EGO2X3on5HhVPceYDfghGBR0Wz0sDkJeh%2BM0GbUB54XOmcyJXumwVGcXqWIoqWQ5zLo1RQxDQYHqi0SKuOtPCnu3cJRS06F3sk6NzC0fOmYV6YN5AL69UugzIrBR3cgDwtXA6s4h9EEVnJg8gn0vIvfRSXN4j9R5zpP3wOmbhCjuF%2BTXaLk6GHmQQXSVyk2II5P2SPdZlky1PatfFp5oJIupbxETLm93tRTgdC1X04pjpVDlNsib4MB5PvyigHFtY77OksDQ8qHkqKptrMIeTxlwEEwIRMrw8JCz%2FJk7A239cvb2XrQVwo0Tk1hnv7LZnm%2BCn3ImGBtOBHIZxLR0jEEtvNnjXE738v9K0jeojpDUkAcketvzHIIgMHLTvzLN3JU5Hm0W%2FXwxz2VFSdy%2F0AQwO55WJh69yiayUsyx4Ue9kNWDDBnbu%2FBjqkAYwSRGKNxWJaiL5mhXkoOyT3Q1jLEFRqnH6w9tOKLgRABfU5z7Ph7wcmXOO4%2BCUqyBQ5WZ%2F1kcn0kod1GoIMNKpdCobGlFc1Ar7oiayLVk8j4Ih4w9EYbordGjdvSeenKvIlgwYbzch3GOXCM%2B%2Fbu1%2Bd96sAs4S3ypC3374kah6L7j8QSuFypROpGsJWudJmuXwe2Fi5NnLx404TiuNwhh%2B5Q6Jv&X-Amz-Signature=67f3127dee950db1beb4a83a22c037937e059eca66aa507aef3c3282772661a5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJNPFQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleCC2YACP9a60CfE6iscP0oR7L5Qvc7LG3fvdjIARugIhALzGjUl4r1lxaZRpFv8Vx741p0YFsLfUunq9Pw%2FCxRC0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6sF%2F1I%2FRZrc37Agsq3ANYoM0e3g5To4OpP1VjN542K%2B0TgEQAjTM1Y9Fs7iP51vFXK7YqzeYXTqDz%2FatUu3AuXLKMWbh112X83YN9FdsDmuuTXqfW0OD9rPyzXUnlVjCLP6XmCFMBeKur0XHeJPJRvu%2BEoKZ6NouT1%2FHbOPmG6sL99FuE3aB3X%2FYHjJEsPLAPYpr8UZSR7Rj7Athc78uaGwTyNkKqW8EGO2X3on5HhVPceYDfghGBR0Wz0sDkJeh%2BM0GbUB54XOmcyJXumwVGcXqWIoqWQ5zLo1RQxDQYHqi0SKuOtPCnu3cJRS06F3sk6NzC0fOmYV6YN5AL69UugzIrBR3cgDwtXA6s4h9EEVnJg8gn0vIvfRSXN4j9R5zpP3wOmbhCjuF%2BTXaLk6GHmQQXSVyk2II5P2SPdZlky1PatfFp5oJIupbxETLm93tRTgdC1X04pjpVDlNsib4MB5PvyigHFtY77OksDQ8qHkqKptrMIeTxlwEEwIRMrw8JCz%2FJk7A239cvb2XrQVwo0Tk1hnv7LZnm%2BCn3ImGBtOBHIZxLR0jEEtvNnjXE738v9K0jeojpDUkAcketvzHIIgMHLTvzLN3JU5Hm0W%2FXwxz2VFSdy%2F0AQwO55WJh69yiayUsyx4Ue9kNWDDBnbu%2FBjqkAYwSRGKNxWJaiL5mhXkoOyT3Q1jLEFRqnH6w9tOKLgRABfU5z7Ph7wcmXOO4%2BCUqyBQ5WZ%2F1kcn0kod1GoIMNKpdCobGlFc1Ar7oiayLVk8j4Ih4w9EYbordGjdvSeenKvIlgwYbzch3GOXCM%2B%2Fbu1%2Bd96sAs4S3ypC3374kah6L7j8QSuFypROpGsJWudJmuXwe2Fi5NnLx404TiuNwhh%2B5Q6Jv&X-Amz-Signature=5c72fb646e17f6525b381572cc822eb7048c76711ac9fe1050a8878fc28a71c7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJNPFQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDleCC2YACP9a60CfE6iscP0oR7L5Qvc7LG3fvdjIARugIhALzGjUl4r1lxaZRpFv8Vx741p0YFsLfUunq9Pw%2FCxRC0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6sF%2F1I%2FRZrc37Agsq3ANYoM0e3g5To4OpP1VjN542K%2B0TgEQAjTM1Y9Fs7iP51vFXK7YqzeYXTqDz%2FatUu3AuXLKMWbh112X83YN9FdsDmuuTXqfW0OD9rPyzXUnlVjCLP6XmCFMBeKur0XHeJPJRvu%2BEoKZ6NouT1%2FHbOPmG6sL99FuE3aB3X%2FYHjJEsPLAPYpr8UZSR7Rj7Athc78uaGwTyNkKqW8EGO2X3on5HhVPceYDfghGBR0Wz0sDkJeh%2BM0GbUB54XOmcyJXumwVGcXqWIoqWQ5zLo1RQxDQYHqi0SKuOtPCnu3cJRS06F3sk6NzC0fOmYV6YN5AL69UugzIrBR3cgDwtXA6s4h9EEVnJg8gn0vIvfRSXN4j9R5zpP3wOmbhCjuF%2BTXaLk6GHmQQXSVyk2II5P2SPdZlky1PatfFp5oJIupbxETLm93tRTgdC1X04pjpVDlNsib4MB5PvyigHFtY77OksDQ8qHkqKptrMIeTxlwEEwIRMrw8JCz%2FJk7A239cvb2XrQVwo0Tk1hnv7LZnm%2BCn3ImGBtOBHIZxLR0jEEtvNnjXE738v9K0jeojpDUkAcketvzHIIgMHLTvzLN3JU5Hm0W%2FXwxz2VFSdy%2F0AQwO55WJh69yiayUsyx4Ue9kNWDDBnbu%2FBjqkAYwSRGKNxWJaiL5mhXkoOyT3Q1jLEFRqnH6w9tOKLgRABfU5z7Ph7wcmXOO4%2BCUqyBQ5WZ%2F1kcn0kod1GoIMNKpdCobGlFc1Ar7oiayLVk8j4Ih4w9EYbordGjdvSeenKvIlgwYbzch3GOXCM%2B%2Fbu1%2Bd96sAs4S3ypC3374kah6L7j8QSuFypROpGsJWudJmuXwe2Fi5NnLx404TiuNwhh%2B5Q6Jv&X-Amz-Signature=3aa1c9a021c637a3f46a2c714ba1f833ca5345f654858e38e0f04c09561cae13&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
