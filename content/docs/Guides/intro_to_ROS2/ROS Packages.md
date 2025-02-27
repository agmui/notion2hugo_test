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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V37Q3GF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDyWNjKTBwWxjJYzqmkQ1j9SxrTM0ZUo0hcjneTVqpv9AiARYS8cXrFXMDAASlKNcTDV4f7IjMsnvuIk22qauywIiyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGne%2BM123Gpi34QbcKtwDNGcHLtZcFrlUnzQCF5ImdV4y9Z6xRtQz01pAk7F1JYIshciTvnwYbOx%2BM%2BzCn2BKIBN%2FLYiGZRMGnfeFwOsAKhKFRY%2BF%2BFguLZ7aTLryqJwlcmWor67qPpRdIoBfkwtCiIGpPV6bSc17J7cyUjyYyVT7cy3lDA068c%2Bhzpco0HF8c%2FAoHDsNSsaUpwyeyWp9%2B5Pr1E%2F2bSZv3ikaHqf2fvQO1rFBuh9tSKabiEVUP7dr6LNwlaYk88Avuxy6mIrGVdQgrBeMTQ6s8%2FXb8XW%2F0ZJGAiol6j6cq7OdhAUJusVVNwIPUATUA7cNQJkQhoxxGqmnMl25fjJ1tvsQjqiC7WqW4oEL54woTjrfh4ST0wn%2Fh9NWsNllXa2nbLMnXNw7QoBeISxOks39IrXVObic439gvCJT9icSkYVO863WV%2BLWBKybBE2sC0sB32CuV45MBOUE0sdbDx6%2BkoShoHkDHEgmIArvA5d8IbYZfkWv3KIiqaenssajEmPqx9HOXcIhVFMFkS5uF86ecMooLOcxKb6pumpqMipt1tlbbzHzbnmhA5%2FmwdDYh%2BnN5LN7O1Rx9wD0kX303Pcd%2F6MyZgi1TCGEGOXVRqLC%2F%2Fa2zCBtaaulgFn8h1qcbqL1qaAw7fCCvgY6pgFqtXkF9x3I%2BZIvmExZkZltgmOTgxlrAv5x93Fi5WeItb0MaJfLHix4Fm%2FrN1MeAoFS44%2Fbhdkm5G9MkaaAvm12Cvj7Kyp2coN9k1T%2BkBQfKwdC%2Bvsw8Znp4FFs8nb2H4qOd9zuHdAT%2FFG7jM8PQU1iaBg0hH09A%2FsjHnylBYu%2FEy77J7Jn7XKnUjtxGKRnraeySzVfnedXIzSoNeu1qQX7w0uFq%2Fe2&X-Amz-Signature=b25fd658769f2fec323274fb9a89cf9bd7038b225e886dd2fd7605f1b41a354e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V37Q3GF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDyWNjKTBwWxjJYzqmkQ1j9SxrTM0ZUo0hcjneTVqpv9AiARYS8cXrFXMDAASlKNcTDV4f7IjMsnvuIk22qauywIiyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGne%2BM123Gpi34QbcKtwDNGcHLtZcFrlUnzQCF5ImdV4y9Z6xRtQz01pAk7F1JYIshciTvnwYbOx%2BM%2BzCn2BKIBN%2FLYiGZRMGnfeFwOsAKhKFRY%2BF%2BFguLZ7aTLryqJwlcmWor67qPpRdIoBfkwtCiIGpPV6bSc17J7cyUjyYyVT7cy3lDA068c%2Bhzpco0HF8c%2FAoHDsNSsaUpwyeyWp9%2B5Pr1E%2F2bSZv3ikaHqf2fvQO1rFBuh9tSKabiEVUP7dr6LNwlaYk88Avuxy6mIrGVdQgrBeMTQ6s8%2FXb8XW%2F0ZJGAiol6j6cq7OdhAUJusVVNwIPUATUA7cNQJkQhoxxGqmnMl25fjJ1tvsQjqiC7WqW4oEL54woTjrfh4ST0wn%2Fh9NWsNllXa2nbLMnXNw7QoBeISxOks39IrXVObic439gvCJT9icSkYVO863WV%2BLWBKybBE2sC0sB32CuV45MBOUE0sdbDx6%2BkoShoHkDHEgmIArvA5d8IbYZfkWv3KIiqaenssajEmPqx9HOXcIhVFMFkS5uF86ecMooLOcxKb6pumpqMipt1tlbbzHzbnmhA5%2FmwdDYh%2BnN5LN7O1Rx9wD0kX303Pcd%2F6MyZgi1TCGEGOXVRqLC%2F%2Fa2zCBtaaulgFn8h1qcbqL1qaAw7fCCvgY6pgFqtXkF9x3I%2BZIvmExZkZltgmOTgxlrAv5x93Fi5WeItb0MaJfLHix4Fm%2FrN1MeAoFS44%2Fbhdkm5G9MkaaAvm12Cvj7Kyp2coN9k1T%2BkBQfKwdC%2Bvsw8Znp4FFs8nb2H4qOd9zuHdAT%2FFG7jM8PQU1iaBg0hH09A%2FsjHnylBYu%2FEy77J7Jn7XKnUjtxGKRnraeySzVfnedXIzSoNeu1qQX7w0uFq%2Fe2&X-Amz-Signature=c72676393af694ae127293e4b0137ffd5574d6c60b3b359b3f75d9fd089cef2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V37Q3GF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDyWNjKTBwWxjJYzqmkQ1j9SxrTM0ZUo0hcjneTVqpv9AiARYS8cXrFXMDAASlKNcTDV4f7IjMsnvuIk22qauywIiyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGne%2BM123Gpi34QbcKtwDNGcHLtZcFrlUnzQCF5ImdV4y9Z6xRtQz01pAk7F1JYIshciTvnwYbOx%2BM%2BzCn2BKIBN%2FLYiGZRMGnfeFwOsAKhKFRY%2BF%2BFguLZ7aTLryqJwlcmWor67qPpRdIoBfkwtCiIGpPV6bSc17J7cyUjyYyVT7cy3lDA068c%2Bhzpco0HF8c%2FAoHDsNSsaUpwyeyWp9%2B5Pr1E%2F2bSZv3ikaHqf2fvQO1rFBuh9tSKabiEVUP7dr6LNwlaYk88Avuxy6mIrGVdQgrBeMTQ6s8%2FXb8XW%2F0ZJGAiol6j6cq7OdhAUJusVVNwIPUATUA7cNQJkQhoxxGqmnMl25fjJ1tvsQjqiC7WqW4oEL54woTjrfh4ST0wn%2Fh9NWsNllXa2nbLMnXNw7QoBeISxOks39IrXVObic439gvCJT9icSkYVO863WV%2BLWBKybBE2sC0sB32CuV45MBOUE0sdbDx6%2BkoShoHkDHEgmIArvA5d8IbYZfkWv3KIiqaenssajEmPqx9HOXcIhVFMFkS5uF86ecMooLOcxKb6pumpqMipt1tlbbzHzbnmhA5%2FmwdDYh%2BnN5LN7O1Rx9wD0kX303Pcd%2F6MyZgi1TCGEGOXVRqLC%2F%2Fa2zCBtaaulgFn8h1qcbqL1qaAw7fCCvgY6pgFqtXkF9x3I%2BZIvmExZkZltgmOTgxlrAv5x93Fi5WeItb0MaJfLHix4Fm%2FrN1MeAoFS44%2Fbhdkm5G9MkaaAvm12Cvj7Kyp2coN9k1T%2BkBQfKwdC%2Bvsw8Znp4FFs8nb2H4qOd9zuHdAT%2FFG7jM8PQU1iaBg0hH09A%2FsjHnylBYu%2FEy77J7Jn7XKnUjtxGKRnraeySzVfnedXIzSoNeu1qQX7w0uFq%2Fe2&X-Amz-Signature=24dbfb7cb6aff11fd383fc76c3ff27af97ef6433a1a8558b0a79787be7057746&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V37Q3GF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDyWNjKTBwWxjJYzqmkQ1j9SxrTM0ZUo0hcjneTVqpv9AiARYS8cXrFXMDAASlKNcTDV4f7IjMsnvuIk22qauywIiyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGne%2BM123Gpi34QbcKtwDNGcHLtZcFrlUnzQCF5ImdV4y9Z6xRtQz01pAk7F1JYIshciTvnwYbOx%2BM%2BzCn2BKIBN%2FLYiGZRMGnfeFwOsAKhKFRY%2BF%2BFguLZ7aTLryqJwlcmWor67qPpRdIoBfkwtCiIGpPV6bSc17J7cyUjyYyVT7cy3lDA068c%2Bhzpco0HF8c%2FAoHDsNSsaUpwyeyWp9%2B5Pr1E%2F2bSZv3ikaHqf2fvQO1rFBuh9tSKabiEVUP7dr6LNwlaYk88Avuxy6mIrGVdQgrBeMTQ6s8%2FXb8XW%2F0ZJGAiol6j6cq7OdhAUJusVVNwIPUATUA7cNQJkQhoxxGqmnMl25fjJ1tvsQjqiC7WqW4oEL54woTjrfh4ST0wn%2Fh9NWsNllXa2nbLMnXNw7QoBeISxOks39IrXVObic439gvCJT9icSkYVO863WV%2BLWBKybBE2sC0sB32CuV45MBOUE0sdbDx6%2BkoShoHkDHEgmIArvA5d8IbYZfkWv3KIiqaenssajEmPqx9HOXcIhVFMFkS5uF86ecMooLOcxKb6pumpqMipt1tlbbzHzbnmhA5%2FmwdDYh%2BnN5LN7O1Rx9wD0kX303Pcd%2F6MyZgi1TCGEGOXVRqLC%2F%2Fa2zCBtaaulgFn8h1qcbqL1qaAw7fCCvgY6pgFqtXkF9x3I%2BZIvmExZkZltgmOTgxlrAv5x93Fi5WeItb0MaJfLHix4Fm%2FrN1MeAoFS44%2Fbhdkm5G9MkaaAvm12Cvj7Kyp2coN9k1T%2BkBQfKwdC%2Bvsw8Znp4FFs8nb2H4qOd9zuHdAT%2FFG7jM8PQU1iaBg0hH09A%2FsjHnylBYu%2FEy77J7Jn7XKnUjtxGKRnraeySzVfnedXIzSoNeu1qQX7w0uFq%2Fe2&X-Amz-Signature=4177f0a557a1febda1b186d0aadc4580b46c43c1939930d21910641b3998f3d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V37Q3GF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDyWNjKTBwWxjJYzqmkQ1j9SxrTM0ZUo0hcjneTVqpv9AiARYS8cXrFXMDAASlKNcTDV4f7IjMsnvuIk22qauywIiyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGne%2BM123Gpi34QbcKtwDNGcHLtZcFrlUnzQCF5ImdV4y9Z6xRtQz01pAk7F1JYIshciTvnwYbOx%2BM%2BzCn2BKIBN%2FLYiGZRMGnfeFwOsAKhKFRY%2BF%2BFguLZ7aTLryqJwlcmWor67qPpRdIoBfkwtCiIGpPV6bSc17J7cyUjyYyVT7cy3lDA068c%2Bhzpco0HF8c%2FAoHDsNSsaUpwyeyWp9%2B5Pr1E%2F2bSZv3ikaHqf2fvQO1rFBuh9tSKabiEVUP7dr6LNwlaYk88Avuxy6mIrGVdQgrBeMTQ6s8%2FXb8XW%2F0ZJGAiol6j6cq7OdhAUJusVVNwIPUATUA7cNQJkQhoxxGqmnMl25fjJ1tvsQjqiC7WqW4oEL54woTjrfh4ST0wn%2Fh9NWsNllXa2nbLMnXNw7QoBeISxOks39IrXVObic439gvCJT9icSkYVO863WV%2BLWBKybBE2sC0sB32CuV45MBOUE0sdbDx6%2BkoShoHkDHEgmIArvA5d8IbYZfkWv3KIiqaenssajEmPqx9HOXcIhVFMFkS5uF86ecMooLOcxKb6pumpqMipt1tlbbzHzbnmhA5%2FmwdDYh%2BnN5LN7O1Rx9wD0kX303Pcd%2F6MyZgi1TCGEGOXVRqLC%2F%2Fa2zCBtaaulgFn8h1qcbqL1qaAw7fCCvgY6pgFqtXkF9x3I%2BZIvmExZkZltgmOTgxlrAv5x93Fi5WeItb0MaJfLHix4Fm%2FrN1MeAoFS44%2Fbhdkm5G9MkaaAvm12Cvj7Kyp2coN9k1T%2BkBQfKwdC%2Bvsw8Znp4FFs8nb2H4qOd9zuHdAT%2FFG7jM8PQU1iaBg0hH09A%2FsjHnylBYu%2FEy77J7Jn7XKnUjtxGKRnraeySzVfnedXIzSoNeu1qQX7w0uFq%2Fe2&X-Amz-Signature=e1434be4a1d67cc84cd5207286a2bb0ff1b5d9fbef8ab22ba872b91a3bc3c3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V37Q3GF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDyWNjKTBwWxjJYzqmkQ1j9SxrTM0ZUo0hcjneTVqpv9AiARYS8cXrFXMDAASlKNcTDV4f7IjMsnvuIk22qauywIiyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGne%2BM123Gpi34QbcKtwDNGcHLtZcFrlUnzQCF5ImdV4y9Z6xRtQz01pAk7F1JYIshciTvnwYbOx%2BM%2BzCn2BKIBN%2FLYiGZRMGnfeFwOsAKhKFRY%2BF%2BFguLZ7aTLryqJwlcmWor67qPpRdIoBfkwtCiIGpPV6bSc17J7cyUjyYyVT7cy3lDA068c%2Bhzpco0HF8c%2FAoHDsNSsaUpwyeyWp9%2B5Pr1E%2F2bSZv3ikaHqf2fvQO1rFBuh9tSKabiEVUP7dr6LNwlaYk88Avuxy6mIrGVdQgrBeMTQ6s8%2FXb8XW%2F0ZJGAiol6j6cq7OdhAUJusVVNwIPUATUA7cNQJkQhoxxGqmnMl25fjJ1tvsQjqiC7WqW4oEL54woTjrfh4ST0wn%2Fh9NWsNllXa2nbLMnXNw7QoBeISxOks39IrXVObic439gvCJT9icSkYVO863WV%2BLWBKybBE2sC0sB32CuV45MBOUE0sdbDx6%2BkoShoHkDHEgmIArvA5d8IbYZfkWv3KIiqaenssajEmPqx9HOXcIhVFMFkS5uF86ecMooLOcxKb6pumpqMipt1tlbbzHzbnmhA5%2FmwdDYh%2BnN5LN7O1Rx9wD0kX303Pcd%2F6MyZgi1TCGEGOXVRqLC%2F%2Fa2zCBtaaulgFn8h1qcbqL1qaAw7fCCvgY6pgFqtXkF9x3I%2BZIvmExZkZltgmOTgxlrAv5x93Fi5WeItb0MaJfLHix4Fm%2FrN1MeAoFS44%2Fbhdkm5G9MkaaAvm12Cvj7Kyp2coN9k1T%2BkBQfKwdC%2Bvsw8Znp4FFs8nb2H4qOd9zuHdAT%2FFG7jM8PQU1iaBg0hH09A%2FsjHnylBYu%2FEy77J7Jn7XKnUjtxGKRnraeySzVfnedXIzSoNeu1qQX7w0uFq%2Fe2&X-Amz-Signature=cb2f7cf09159e832b8e7b0899c3e915bf4f0c35e8bc22cc4d6300c269297b208&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V37Q3GF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDyWNjKTBwWxjJYzqmkQ1j9SxrTM0ZUo0hcjneTVqpv9AiARYS8cXrFXMDAASlKNcTDV4f7IjMsnvuIk22qauywIiyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGne%2BM123Gpi34QbcKtwDNGcHLtZcFrlUnzQCF5ImdV4y9Z6xRtQz01pAk7F1JYIshciTvnwYbOx%2BM%2BzCn2BKIBN%2FLYiGZRMGnfeFwOsAKhKFRY%2BF%2BFguLZ7aTLryqJwlcmWor67qPpRdIoBfkwtCiIGpPV6bSc17J7cyUjyYyVT7cy3lDA068c%2Bhzpco0HF8c%2FAoHDsNSsaUpwyeyWp9%2B5Pr1E%2F2bSZv3ikaHqf2fvQO1rFBuh9tSKabiEVUP7dr6LNwlaYk88Avuxy6mIrGVdQgrBeMTQ6s8%2FXb8XW%2F0ZJGAiol6j6cq7OdhAUJusVVNwIPUATUA7cNQJkQhoxxGqmnMl25fjJ1tvsQjqiC7WqW4oEL54woTjrfh4ST0wn%2Fh9NWsNllXa2nbLMnXNw7QoBeISxOks39IrXVObic439gvCJT9icSkYVO863WV%2BLWBKybBE2sC0sB32CuV45MBOUE0sdbDx6%2BkoShoHkDHEgmIArvA5d8IbYZfkWv3KIiqaenssajEmPqx9HOXcIhVFMFkS5uF86ecMooLOcxKb6pumpqMipt1tlbbzHzbnmhA5%2FmwdDYh%2BnN5LN7O1Rx9wD0kX303Pcd%2F6MyZgi1TCGEGOXVRqLC%2F%2Fa2zCBtaaulgFn8h1qcbqL1qaAw7fCCvgY6pgFqtXkF9x3I%2BZIvmExZkZltgmOTgxlrAv5x93Fi5WeItb0MaJfLHix4Fm%2FrN1MeAoFS44%2Fbhdkm5G9MkaaAvm12Cvj7Kyp2coN9k1T%2BkBQfKwdC%2Bvsw8Znp4FFs8nb2H4qOd9zuHdAT%2FFG7jM8PQU1iaBg0hH09A%2FsjHnylBYu%2FEy77J7Jn7XKnUjtxGKRnraeySzVfnedXIzSoNeu1qQX7w0uFq%2Fe2&X-Amz-Signature=94c47cff7ddc42303b6de61192500623ef35cdfa07fb2121aabf37d5e36a00aa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
