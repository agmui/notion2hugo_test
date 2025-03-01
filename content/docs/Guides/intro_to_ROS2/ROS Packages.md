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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQYZWD6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDhrP4bvQpKpivZOgJAg%2Bxe5eIy2Wd4X3YOQNQhn4XWLwIhAMirAU1U%2Fdpb8dbvxbL3hlddkqpzFqcEAb4dDr9%2BzWwgKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9KjW%2BMU8Tg9P8Txkq3AMEQp5RUhrSDJo2VrjQnaBygX5MpgQhKUnB8TMLnvo8zp5zhVNKsLCTJW7RXRpjtjlmiB8pOs%2BOaLPzf%2BLQKtBzi1BnRxylKtSBe808P9Kxy8y6D9OaxyjW7Z0ujGK74%2BOcS8Kz5ADDJfQnW%2F91gPeX%2BOePCdAfk6xm3NVv947j0mBSeMoJiBcf6Auv5BbngKcLAmxMUG4chAYICFd8bq6u2UzRZkpYc%2FrSjMKUR%2Fz5Vi9ZPj6Q7dhQgMuEkf%2Bvdi2BRtJrIYItVBPN20%2F4ky9%2ByJ7gPI16IOgvbd3n4o9SmD8UQL6dZNQ4RxT1S3aGfr0%2BtHukR2sj7MkRhHhEdY7fUm0GCfgT7GKyY564pO7AKgqE254La4se5ze%2BWsbLysHs6DNPXSkvmNiPJYV1tJliqtoHYWl703Ff4ufypM1djVkfkfS0bm6xhPnx2BR7XFunUEauFhCWpgYR3WZ8IMsWYQG0vN9zd565do4yRn75BfoSp8a3Nvdm363ITYMACvP%2FrzrMw1N0whKuKQUt3JuPBNdMcb%2FHGSyHuMyIuZd54u3lxhdtNpVB6uLhJvvGldAV6biVtuBjSkJR9pkDSRs6iUAj4m%2FFTheulw7O2ZDuqQGcBfgk8z8GEwDZvjCprIu%2BBjqkAZk%2FExahKqVRO4yuTsNiIU%2FdozJkiwoKQC5Xw0F2n75M3aTTU4%2BJM8qnmcdXkz1T%2FRxZxtghlZyOhM1uWLF1pCgbVetQyyj7LCj2m13v8yqcDsDNTsA%2BLm%2FrM9q75VThoCUJMbNDHLN9FC98H2eGnLOPIeQ%2BHoFrVGfXNaYmIhBH%2FQ%2BtXlw0puEYw%2F%2FvHf7FopwtQW0YDkHj%2FetE2qt0CJgoz6tu&X-Amz-Signature=6763537141c10b9cd128e382caefe10c8d1b9eccc75c4491432501f3c54d7463&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQYZWD6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDhrP4bvQpKpivZOgJAg%2Bxe5eIy2Wd4X3YOQNQhn4XWLwIhAMirAU1U%2Fdpb8dbvxbL3hlddkqpzFqcEAb4dDr9%2BzWwgKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9KjW%2BMU8Tg9P8Txkq3AMEQp5RUhrSDJo2VrjQnaBygX5MpgQhKUnB8TMLnvo8zp5zhVNKsLCTJW7RXRpjtjlmiB8pOs%2BOaLPzf%2BLQKtBzi1BnRxylKtSBe808P9Kxy8y6D9OaxyjW7Z0ujGK74%2BOcS8Kz5ADDJfQnW%2F91gPeX%2BOePCdAfk6xm3NVv947j0mBSeMoJiBcf6Auv5BbngKcLAmxMUG4chAYICFd8bq6u2UzRZkpYc%2FrSjMKUR%2Fz5Vi9ZPj6Q7dhQgMuEkf%2Bvdi2BRtJrIYItVBPN20%2F4ky9%2ByJ7gPI16IOgvbd3n4o9SmD8UQL6dZNQ4RxT1S3aGfr0%2BtHukR2sj7MkRhHhEdY7fUm0GCfgT7GKyY564pO7AKgqE254La4se5ze%2BWsbLysHs6DNPXSkvmNiPJYV1tJliqtoHYWl703Ff4ufypM1djVkfkfS0bm6xhPnx2BR7XFunUEauFhCWpgYR3WZ8IMsWYQG0vN9zd565do4yRn75BfoSp8a3Nvdm363ITYMACvP%2FrzrMw1N0whKuKQUt3JuPBNdMcb%2FHGSyHuMyIuZd54u3lxhdtNpVB6uLhJvvGldAV6biVtuBjSkJR9pkDSRs6iUAj4m%2FFTheulw7O2ZDuqQGcBfgk8z8GEwDZvjCprIu%2BBjqkAZk%2FExahKqVRO4yuTsNiIU%2FdozJkiwoKQC5Xw0F2n75M3aTTU4%2BJM8qnmcdXkz1T%2FRxZxtghlZyOhM1uWLF1pCgbVetQyyj7LCj2m13v8yqcDsDNTsA%2BLm%2FrM9q75VThoCUJMbNDHLN9FC98H2eGnLOPIeQ%2BHoFrVGfXNaYmIhBH%2FQ%2BtXlw0puEYw%2F%2FvHf7FopwtQW0YDkHj%2FetE2qt0CJgoz6tu&X-Amz-Signature=136c98fcf556a222261f2454e0eccc3e786b4f72e63420034328c7b64cf43e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQYZWD6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDhrP4bvQpKpivZOgJAg%2Bxe5eIy2Wd4X3YOQNQhn4XWLwIhAMirAU1U%2Fdpb8dbvxbL3hlddkqpzFqcEAb4dDr9%2BzWwgKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9KjW%2BMU8Tg9P8Txkq3AMEQp5RUhrSDJo2VrjQnaBygX5MpgQhKUnB8TMLnvo8zp5zhVNKsLCTJW7RXRpjtjlmiB8pOs%2BOaLPzf%2BLQKtBzi1BnRxylKtSBe808P9Kxy8y6D9OaxyjW7Z0ujGK74%2BOcS8Kz5ADDJfQnW%2F91gPeX%2BOePCdAfk6xm3NVv947j0mBSeMoJiBcf6Auv5BbngKcLAmxMUG4chAYICFd8bq6u2UzRZkpYc%2FrSjMKUR%2Fz5Vi9ZPj6Q7dhQgMuEkf%2Bvdi2BRtJrIYItVBPN20%2F4ky9%2ByJ7gPI16IOgvbd3n4o9SmD8UQL6dZNQ4RxT1S3aGfr0%2BtHukR2sj7MkRhHhEdY7fUm0GCfgT7GKyY564pO7AKgqE254La4se5ze%2BWsbLysHs6DNPXSkvmNiPJYV1tJliqtoHYWl703Ff4ufypM1djVkfkfS0bm6xhPnx2BR7XFunUEauFhCWpgYR3WZ8IMsWYQG0vN9zd565do4yRn75BfoSp8a3Nvdm363ITYMACvP%2FrzrMw1N0whKuKQUt3JuPBNdMcb%2FHGSyHuMyIuZd54u3lxhdtNpVB6uLhJvvGldAV6biVtuBjSkJR9pkDSRs6iUAj4m%2FFTheulw7O2ZDuqQGcBfgk8z8GEwDZvjCprIu%2BBjqkAZk%2FExahKqVRO4yuTsNiIU%2FdozJkiwoKQC5Xw0F2n75M3aTTU4%2BJM8qnmcdXkz1T%2FRxZxtghlZyOhM1uWLF1pCgbVetQyyj7LCj2m13v8yqcDsDNTsA%2BLm%2FrM9q75VThoCUJMbNDHLN9FC98H2eGnLOPIeQ%2BHoFrVGfXNaYmIhBH%2FQ%2BtXlw0puEYw%2F%2FvHf7FopwtQW0YDkHj%2FetE2qt0CJgoz6tu&X-Amz-Signature=63a542179062166226af408d3675234fa883ed624b7c7d9ab7884379dd3f5e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQYZWD6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDhrP4bvQpKpivZOgJAg%2Bxe5eIy2Wd4X3YOQNQhn4XWLwIhAMirAU1U%2Fdpb8dbvxbL3hlddkqpzFqcEAb4dDr9%2BzWwgKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9KjW%2BMU8Tg9P8Txkq3AMEQp5RUhrSDJo2VrjQnaBygX5MpgQhKUnB8TMLnvo8zp5zhVNKsLCTJW7RXRpjtjlmiB8pOs%2BOaLPzf%2BLQKtBzi1BnRxylKtSBe808P9Kxy8y6D9OaxyjW7Z0ujGK74%2BOcS8Kz5ADDJfQnW%2F91gPeX%2BOePCdAfk6xm3NVv947j0mBSeMoJiBcf6Auv5BbngKcLAmxMUG4chAYICFd8bq6u2UzRZkpYc%2FrSjMKUR%2Fz5Vi9ZPj6Q7dhQgMuEkf%2Bvdi2BRtJrIYItVBPN20%2F4ky9%2ByJ7gPI16IOgvbd3n4o9SmD8UQL6dZNQ4RxT1S3aGfr0%2BtHukR2sj7MkRhHhEdY7fUm0GCfgT7GKyY564pO7AKgqE254La4se5ze%2BWsbLysHs6DNPXSkvmNiPJYV1tJliqtoHYWl703Ff4ufypM1djVkfkfS0bm6xhPnx2BR7XFunUEauFhCWpgYR3WZ8IMsWYQG0vN9zd565do4yRn75BfoSp8a3Nvdm363ITYMACvP%2FrzrMw1N0whKuKQUt3JuPBNdMcb%2FHGSyHuMyIuZd54u3lxhdtNpVB6uLhJvvGldAV6biVtuBjSkJR9pkDSRs6iUAj4m%2FFTheulw7O2ZDuqQGcBfgk8z8GEwDZvjCprIu%2BBjqkAZk%2FExahKqVRO4yuTsNiIU%2FdozJkiwoKQC5Xw0F2n75M3aTTU4%2BJM8qnmcdXkz1T%2FRxZxtghlZyOhM1uWLF1pCgbVetQyyj7LCj2m13v8yqcDsDNTsA%2BLm%2FrM9q75VThoCUJMbNDHLN9FC98H2eGnLOPIeQ%2BHoFrVGfXNaYmIhBH%2FQ%2BtXlw0puEYw%2F%2FvHf7FopwtQW0YDkHj%2FetE2qt0CJgoz6tu&X-Amz-Signature=2b446f8e222073bf7e8b98772a8e01e3bc9f1f9ea94310f912790f56c703a553&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQYZWD6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDhrP4bvQpKpivZOgJAg%2Bxe5eIy2Wd4X3YOQNQhn4XWLwIhAMirAU1U%2Fdpb8dbvxbL3hlddkqpzFqcEAb4dDr9%2BzWwgKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9KjW%2BMU8Tg9P8Txkq3AMEQp5RUhrSDJo2VrjQnaBygX5MpgQhKUnB8TMLnvo8zp5zhVNKsLCTJW7RXRpjtjlmiB8pOs%2BOaLPzf%2BLQKtBzi1BnRxylKtSBe808P9Kxy8y6D9OaxyjW7Z0ujGK74%2BOcS8Kz5ADDJfQnW%2F91gPeX%2BOePCdAfk6xm3NVv947j0mBSeMoJiBcf6Auv5BbngKcLAmxMUG4chAYICFd8bq6u2UzRZkpYc%2FrSjMKUR%2Fz5Vi9ZPj6Q7dhQgMuEkf%2Bvdi2BRtJrIYItVBPN20%2F4ky9%2ByJ7gPI16IOgvbd3n4o9SmD8UQL6dZNQ4RxT1S3aGfr0%2BtHukR2sj7MkRhHhEdY7fUm0GCfgT7GKyY564pO7AKgqE254La4se5ze%2BWsbLysHs6DNPXSkvmNiPJYV1tJliqtoHYWl703Ff4ufypM1djVkfkfS0bm6xhPnx2BR7XFunUEauFhCWpgYR3WZ8IMsWYQG0vN9zd565do4yRn75BfoSp8a3Nvdm363ITYMACvP%2FrzrMw1N0whKuKQUt3JuPBNdMcb%2FHGSyHuMyIuZd54u3lxhdtNpVB6uLhJvvGldAV6biVtuBjSkJR9pkDSRs6iUAj4m%2FFTheulw7O2ZDuqQGcBfgk8z8GEwDZvjCprIu%2BBjqkAZk%2FExahKqVRO4yuTsNiIU%2FdozJkiwoKQC5Xw0F2n75M3aTTU4%2BJM8qnmcdXkz1T%2FRxZxtghlZyOhM1uWLF1pCgbVetQyyj7LCj2m13v8yqcDsDNTsA%2BLm%2FrM9q75VThoCUJMbNDHLN9FC98H2eGnLOPIeQ%2BHoFrVGfXNaYmIhBH%2FQ%2BtXlw0puEYw%2F%2FvHf7FopwtQW0YDkHj%2FetE2qt0CJgoz6tu&X-Amz-Signature=c924cff59d3a83e99b9e2e6a7e3ced2ca01da78baa27d1d81174f1a6d2e355f4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQYZWD6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDhrP4bvQpKpivZOgJAg%2Bxe5eIy2Wd4X3YOQNQhn4XWLwIhAMirAU1U%2Fdpb8dbvxbL3hlddkqpzFqcEAb4dDr9%2BzWwgKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9KjW%2BMU8Tg9P8Txkq3AMEQp5RUhrSDJo2VrjQnaBygX5MpgQhKUnB8TMLnvo8zp5zhVNKsLCTJW7RXRpjtjlmiB8pOs%2BOaLPzf%2BLQKtBzi1BnRxylKtSBe808P9Kxy8y6D9OaxyjW7Z0ujGK74%2BOcS8Kz5ADDJfQnW%2F91gPeX%2BOePCdAfk6xm3NVv947j0mBSeMoJiBcf6Auv5BbngKcLAmxMUG4chAYICFd8bq6u2UzRZkpYc%2FrSjMKUR%2Fz5Vi9ZPj6Q7dhQgMuEkf%2Bvdi2BRtJrIYItVBPN20%2F4ky9%2ByJ7gPI16IOgvbd3n4o9SmD8UQL6dZNQ4RxT1S3aGfr0%2BtHukR2sj7MkRhHhEdY7fUm0GCfgT7GKyY564pO7AKgqE254La4se5ze%2BWsbLysHs6DNPXSkvmNiPJYV1tJliqtoHYWl703Ff4ufypM1djVkfkfS0bm6xhPnx2BR7XFunUEauFhCWpgYR3WZ8IMsWYQG0vN9zd565do4yRn75BfoSp8a3Nvdm363ITYMACvP%2FrzrMw1N0whKuKQUt3JuPBNdMcb%2FHGSyHuMyIuZd54u3lxhdtNpVB6uLhJvvGldAV6biVtuBjSkJR9pkDSRs6iUAj4m%2FFTheulw7O2ZDuqQGcBfgk8z8GEwDZvjCprIu%2BBjqkAZk%2FExahKqVRO4yuTsNiIU%2FdozJkiwoKQC5Xw0F2n75M3aTTU4%2BJM8qnmcdXkz1T%2FRxZxtghlZyOhM1uWLF1pCgbVetQyyj7LCj2m13v8yqcDsDNTsA%2BLm%2FrM9q75VThoCUJMbNDHLN9FC98H2eGnLOPIeQ%2BHoFrVGfXNaYmIhBH%2FQ%2BtXlw0puEYw%2F%2FvHf7FopwtQW0YDkHj%2FetE2qt0CJgoz6tu&X-Amz-Signature=bef115766b7900d8e17a3228cb6243f3cea59fe844a256a0bd57b3788edb990d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQYZWD6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDhrP4bvQpKpivZOgJAg%2Bxe5eIy2Wd4X3YOQNQhn4XWLwIhAMirAU1U%2Fdpb8dbvxbL3hlddkqpzFqcEAb4dDr9%2BzWwgKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9KjW%2BMU8Tg9P8Txkq3AMEQp5RUhrSDJo2VrjQnaBygX5MpgQhKUnB8TMLnvo8zp5zhVNKsLCTJW7RXRpjtjlmiB8pOs%2BOaLPzf%2BLQKtBzi1BnRxylKtSBe808P9Kxy8y6D9OaxyjW7Z0ujGK74%2BOcS8Kz5ADDJfQnW%2F91gPeX%2BOePCdAfk6xm3NVv947j0mBSeMoJiBcf6Auv5BbngKcLAmxMUG4chAYICFd8bq6u2UzRZkpYc%2FrSjMKUR%2Fz5Vi9ZPj6Q7dhQgMuEkf%2Bvdi2BRtJrIYItVBPN20%2F4ky9%2ByJ7gPI16IOgvbd3n4o9SmD8UQL6dZNQ4RxT1S3aGfr0%2BtHukR2sj7MkRhHhEdY7fUm0GCfgT7GKyY564pO7AKgqE254La4se5ze%2BWsbLysHs6DNPXSkvmNiPJYV1tJliqtoHYWl703Ff4ufypM1djVkfkfS0bm6xhPnx2BR7XFunUEauFhCWpgYR3WZ8IMsWYQG0vN9zd565do4yRn75BfoSp8a3Nvdm363ITYMACvP%2FrzrMw1N0whKuKQUt3JuPBNdMcb%2FHGSyHuMyIuZd54u3lxhdtNpVB6uLhJvvGldAV6biVtuBjSkJR9pkDSRs6iUAj4m%2FFTheulw7O2ZDuqQGcBfgk8z8GEwDZvjCprIu%2BBjqkAZk%2FExahKqVRO4yuTsNiIU%2FdozJkiwoKQC5Xw0F2n75M3aTTU4%2BJM8qnmcdXkz1T%2FRxZxtghlZyOhM1uWLF1pCgbVetQyyj7LCj2m13v8yqcDsDNTsA%2BLm%2FrM9q75VThoCUJMbNDHLN9FC98H2eGnLOPIeQ%2BHoFrVGfXNaYmIhBH%2FQ%2BtXlw0puEYw%2F%2FvHf7FopwtQW0YDkHj%2FetE2qt0CJgoz6tu&X-Amz-Signature=d0cdd577df932a3023e51c473fd1cc5cb6eeaa32c6e848985496f2123b24ede7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
