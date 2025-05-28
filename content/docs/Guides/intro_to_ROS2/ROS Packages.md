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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6T4SID%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6avZ3hm6j1vOHDstdg15gFOZ5RdNEEem2i6Im2lzKrAIhANvBxPm51iA%2BNirx8X%2BtVxE3OHN5WSLm2elL%2BU899dXDKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmGhGSktxbjLte7gYq3AN4kCnQNQHL6VUqM0FT6sk5gDCwQ0m607%2BM1iOJuKn0BCc%2BjCQm8q75Izgi0VsG3PEBTHdt7u7f32RdQUltNP6v%2BhoQ6xf0WmukO5dv1lUqcPRaMUvdAutRYmgJmXOGyeEXW3BdHaG8b5du5UNKm8eSxfEy9gO4%2BBr1AWTvXsj1AREYabCgkIlisq0AHOn7X%2FB%2BDw4dnh807Qt6quE4AF717lDYRb3bDCnRutOx4bz9IlmoNYJ2F4b2YFmSFgnCl7j0T%2FlMY9ja3q8sTnfzkWXpNI8wK1vAWLtrjbY6EGT8Xh0yMHcTA%2FyhND1al2q%2FlfGL7TO5cKqwDfQmO%2FUkn2yqPkDT6ZpFN8IQMiEbSk3B3It0z%2FeuO4Ne5agHSMGCl2HQdw8pQLdZA6ST0Uut20ngDR7x4dDrlWJljiLL8Ky3WTIGrt%2FoEg8coD0YmtjRYUmZmye1Vmzuypmzg54oQvkhSPmNcInlV5U%2FAu%2B2bvT7lz%2FzUdnnwQZGklJCViMsl1701sPWyQi0C82mrM9JEsDwVfmmOD7oiFlJgqi%2BbCIMMAPUPhpI1vGcAvCK%2BqSIkb9ZcpVNh66Dn8AMvJmDJdk%2Fp2yyjJHOAf7deDyr0AiYCJ%2FCYEARtyG6Pu6UTDC9pNnBBjqkATsGIgfk3nqjxhjM2grpLMRepbPLYqJnGZQySc1AYi%2BGR2C8NTqQENBuoh8a71M1p9N%2BixNQWNGIicdEqKalTOgCu%2BKjJ13M26d45PdJ6UixfZnOBMCYoFqRjHBu%2FrYJr5mtCXvfEwRzwL0HfwQ724UEoeE9ZXzc5QL4%2BFnCIbMAN1QetAQ7ydwau3uar2XBeRAH2HJBbyHJii7%2B9%2FpNUg1ch1dG&X-Amz-Signature=8dec35bf29ed61acd1db153fa1241dcb66ccc9f5d68d2736b0651dd1c7223298&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6T4SID%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6avZ3hm6j1vOHDstdg15gFOZ5RdNEEem2i6Im2lzKrAIhANvBxPm51iA%2BNirx8X%2BtVxE3OHN5WSLm2elL%2BU899dXDKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmGhGSktxbjLte7gYq3AN4kCnQNQHL6VUqM0FT6sk5gDCwQ0m607%2BM1iOJuKn0BCc%2BjCQm8q75Izgi0VsG3PEBTHdt7u7f32RdQUltNP6v%2BhoQ6xf0WmukO5dv1lUqcPRaMUvdAutRYmgJmXOGyeEXW3BdHaG8b5du5UNKm8eSxfEy9gO4%2BBr1AWTvXsj1AREYabCgkIlisq0AHOn7X%2FB%2BDw4dnh807Qt6quE4AF717lDYRb3bDCnRutOx4bz9IlmoNYJ2F4b2YFmSFgnCl7j0T%2FlMY9ja3q8sTnfzkWXpNI8wK1vAWLtrjbY6EGT8Xh0yMHcTA%2FyhND1al2q%2FlfGL7TO5cKqwDfQmO%2FUkn2yqPkDT6ZpFN8IQMiEbSk3B3It0z%2FeuO4Ne5agHSMGCl2HQdw8pQLdZA6ST0Uut20ngDR7x4dDrlWJljiLL8Ky3WTIGrt%2FoEg8coD0YmtjRYUmZmye1Vmzuypmzg54oQvkhSPmNcInlV5U%2FAu%2B2bvT7lz%2FzUdnnwQZGklJCViMsl1701sPWyQi0C82mrM9JEsDwVfmmOD7oiFlJgqi%2BbCIMMAPUPhpI1vGcAvCK%2BqSIkb9ZcpVNh66Dn8AMvJmDJdk%2Fp2yyjJHOAf7deDyr0AiYCJ%2FCYEARtyG6Pu6UTDC9pNnBBjqkATsGIgfk3nqjxhjM2grpLMRepbPLYqJnGZQySc1AYi%2BGR2C8NTqQENBuoh8a71M1p9N%2BixNQWNGIicdEqKalTOgCu%2BKjJ13M26d45PdJ6UixfZnOBMCYoFqRjHBu%2FrYJr5mtCXvfEwRzwL0HfwQ724UEoeE9ZXzc5QL4%2BFnCIbMAN1QetAQ7ydwau3uar2XBeRAH2HJBbyHJii7%2B9%2FpNUg1ch1dG&X-Amz-Signature=53003337bee825448885a234b022a48d18c298fa33765ef1bf95f14cdc9ba7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6T4SID%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6avZ3hm6j1vOHDstdg15gFOZ5RdNEEem2i6Im2lzKrAIhANvBxPm51iA%2BNirx8X%2BtVxE3OHN5WSLm2elL%2BU899dXDKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmGhGSktxbjLte7gYq3AN4kCnQNQHL6VUqM0FT6sk5gDCwQ0m607%2BM1iOJuKn0BCc%2BjCQm8q75Izgi0VsG3PEBTHdt7u7f32RdQUltNP6v%2BhoQ6xf0WmukO5dv1lUqcPRaMUvdAutRYmgJmXOGyeEXW3BdHaG8b5du5UNKm8eSxfEy9gO4%2BBr1AWTvXsj1AREYabCgkIlisq0AHOn7X%2FB%2BDw4dnh807Qt6quE4AF717lDYRb3bDCnRutOx4bz9IlmoNYJ2F4b2YFmSFgnCl7j0T%2FlMY9ja3q8sTnfzkWXpNI8wK1vAWLtrjbY6EGT8Xh0yMHcTA%2FyhND1al2q%2FlfGL7TO5cKqwDfQmO%2FUkn2yqPkDT6ZpFN8IQMiEbSk3B3It0z%2FeuO4Ne5agHSMGCl2HQdw8pQLdZA6ST0Uut20ngDR7x4dDrlWJljiLL8Ky3WTIGrt%2FoEg8coD0YmtjRYUmZmye1Vmzuypmzg54oQvkhSPmNcInlV5U%2FAu%2B2bvT7lz%2FzUdnnwQZGklJCViMsl1701sPWyQi0C82mrM9JEsDwVfmmOD7oiFlJgqi%2BbCIMMAPUPhpI1vGcAvCK%2BqSIkb9ZcpVNh66Dn8AMvJmDJdk%2Fp2yyjJHOAf7deDyr0AiYCJ%2FCYEARtyG6Pu6UTDC9pNnBBjqkATsGIgfk3nqjxhjM2grpLMRepbPLYqJnGZQySc1AYi%2BGR2C8NTqQENBuoh8a71M1p9N%2BixNQWNGIicdEqKalTOgCu%2BKjJ13M26d45PdJ6UixfZnOBMCYoFqRjHBu%2FrYJr5mtCXvfEwRzwL0HfwQ724UEoeE9ZXzc5QL4%2BFnCIbMAN1QetAQ7ydwau3uar2XBeRAH2HJBbyHJii7%2B9%2FpNUg1ch1dG&X-Amz-Signature=65e993ac28c4f1536d1c42cc3b742ee17b8174d5c982d738a8529f2401ab5dce&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6T4SID%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6avZ3hm6j1vOHDstdg15gFOZ5RdNEEem2i6Im2lzKrAIhANvBxPm51iA%2BNirx8X%2BtVxE3OHN5WSLm2elL%2BU899dXDKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmGhGSktxbjLte7gYq3AN4kCnQNQHL6VUqM0FT6sk5gDCwQ0m607%2BM1iOJuKn0BCc%2BjCQm8q75Izgi0VsG3PEBTHdt7u7f32RdQUltNP6v%2BhoQ6xf0WmukO5dv1lUqcPRaMUvdAutRYmgJmXOGyeEXW3BdHaG8b5du5UNKm8eSxfEy9gO4%2BBr1AWTvXsj1AREYabCgkIlisq0AHOn7X%2FB%2BDw4dnh807Qt6quE4AF717lDYRb3bDCnRutOx4bz9IlmoNYJ2F4b2YFmSFgnCl7j0T%2FlMY9ja3q8sTnfzkWXpNI8wK1vAWLtrjbY6EGT8Xh0yMHcTA%2FyhND1al2q%2FlfGL7TO5cKqwDfQmO%2FUkn2yqPkDT6ZpFN8IQMiEbSk3B3It0z%2FeuO4Ne5agHSMGCl2HQdw8pQLdZA6ST0Uut20ngDR7x4dDrlWJljiLL8Ky3WTIGrt%2FoEg8coD0YmtjRYUmZmye1Vmzuypmzg54oQvkhSPmNcInlV5U%2FAu%2B2bvT7lz%2FzUdnnwQZGklJCViMsl1701sPWyQi0C82mrM9JEsDwVfmmOD7oiFlJgqi%2BbCIMMAPUPhpI1vGcAvCK%2BqSIkb9ZcpVNh66Dn8AMvJmDJdk%2Fp2yyjJHOAf7deDyr0AiYCJ%2FCYEARtyG6Pu6UTDC9pNnBBjqkATsGIgfk3nqjxhjM2grpLMRepbPLYqJnGZQySc1AYi%2BGR2C8NTqQENBuoh8a71M1p9N%2BixNQWNGIicdEqKalTOgCu%2BKjJ13M26d45PdJ6UixfZnOBMCYoFqRjHBu%2FrYJr5mtCXvfEwRzwL0HfwQ724UEoeE9ZXzc5QL4%2BFnCIbMAN1QetAQ7ydwau3uar2XBeRAH2HJBbyHJii7%2B9%2FpNUg1ch1dG&X-Amz-Signature=8350e859545ce3d92a118cf66831eab0a512a480721cf7ed0817f32be492c182&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6T4SID%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6avZ3hm6j1vOHDstdg15gFOZ5RdNEEem2i6Im2lzKrAIhANvBxPm51iA%2BNirx8X%2BtVxE3OHN5WSLm2elL%2BU899dXDKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmGhGSktxbjLte7gYq3AN4kCnQNQHL6VUqM0FT6sk5gDCwQ0m607%2BM1iOJuKn0BCc%2BjCQm8q75Izgi0VsG3PEBTHdt7u7f32RdQUltNP6v%2BhoQ6xf0WmukO5dv1lUqcPRaMUvdAutRYmgJmXOGyeEXW3BdHaG8b5du5UNKm8eSxfEy9gO4%2BBr1AWTvXsj1AREYabCgkIlisq0AHOn7X%2FB%2BDw4dnh807Qt6quE4AF717lDYRb3bDCnRutOx4bz9IlmoNYJ2F4b2YFmSFgnCl7j0T%2FlMY9ja3q8sTnfzkWXpNI8wK1vAWLtrjbY6EGT8Xh0yMHcTA%2FyhND1al2q%2FlfGL7TO5cKqwDfQmO%2FUkn2yqPkDT6ZpFN8IQMiEbSk3B3It0z%2FeuO4Ne5agHSMGCl2HQdw8pQLdZA6ST0Uut20ngDR7x4dDrlWJljiLL8Ky3WTIGrt%2FoEg8coD0YmtjRYUmZmye1Vmzuypmzg54oQvkhSPmNcInlV5U%2FAu%2B2bvT7lz%2FzUdnnwQZGklJCViMsl1701sPWyQi0C82mrM9JEsDwVfmmOD7oiFlJgqi%2BbCIMMAPUPhpI1vGcAvCK%2BqSIkb9ZcpVNh66Dn8AMvJmDJdk%2Fp2yyjJHOAf7deDyr0AiYCJ%2FCYEARtyG6Pu6UTDC9pNnBBjqkATsGIgfk3nqjxhjM2grpLMRepbPLYqJnGZQySc1AYi%2BGR2C8NTqQENBuoh8a71M1p9N%2BixNQWNGIicdEqKalTOgCu%2BKjJ13M26d45PdJ6UixfZnOBMCYoFqRjHBu%2FrYJr5mtCXvfEwRzwL0HfwQ724UEoeE9ZXzc5QL4%2BFnCIbMAN1QetAQ7ydwau3uar2XBeRAH2HJBbyHJii7%2B9%2FpNUg1ch1dG&X-Amz-Signature=4946e92385cb4f3cca635c3670cdce899aa86fc74ed4f209cbe443bd8bb898d3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6T4SID%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6avZ3hm6j1vOHDstdg15gFOZ5RdNEEem2i6Im2lzKrAIhANvBxPm51iA%2BNirx8X%2BtVxE3OHN5WSLm2elL%2BU899dXDKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmGhGSktxbjLte7gYq3AN4kCnQNQHL6VUqM0FT6sk5gDCwQ0m607%2BM1iOJuKn0BCc%2BjCQm8q75Izgi0VsG3PEBTHdt7u7f32RdQUltNP6v%2BhoQ6xf0WmukO5dv1lUqcPRaMUvdAutRYmgJmXOGyeEXW3BdHaG8b5du5UNKm8eSxfEy9gO4%2BBr1AWTvXsj1AREYabCgkIlisq0AHOn7X%2FB%2BDw4dnh807Qt6quE4AF717lDYRb3bDCnRutOx4bz9IlmoNYJ2F4b2YFmSFgnCl7j0T%2FlMY9ja3q8sTnfzkWXpNI8wK1vAWLtrjbY6EGT8Xh0yMHcTA%2FyhND1al2q%2FlfGL7TO5cKqwDfQmO%2FUkn2yqPkDT6ZpFN8IQMiEbSk3B3It0z%2FeuO4Ne5agHSMGCl2HQdw8pQLdZA6ST0Uut20ngDR7x4dDrlWJljiLL8Ky3WTIGrt%2FoEg8coD0YmtjRYUmZmye1Vmzuypmzg54oQvkhSPmNcInlV5U%2FAu%2B2bvT7lz%2FzUdnnwQZGklJCViMsl1701sPWyQi0C82mrM9JEsDwVfmmOD7oiFlJgqi%2BbCIMMAPUPhpI1vGcAvCK%2BqSIkb9ZcpVNh66Dn8AMvJmDJdk%2Fp2yyjJHOAf7deDyr0AiYCJ%2FCYEARtyG6Pu6UTDC9pNnBBjqkATsGIgfk3nqjxhjM2grpLMRepbPLYqJnGZQySc1AYi%2BGR2C8NTqQENBuoh8a71M1p9N%2BixNQWNGIicdEqKalTOgCu%2BKjJ13M26d45PdJ6UixfZnOBMCYoFqRjHBu%2FrYJr5mtCXvfEwRzwL0HfwQ724UEoeE9ZXzc5QL4%2BFnCIbMAN1QetAQ7ydwau3uar2XBeRAH2HJBbyHJii7%2B9%2FpNUg1ch1dG&X-Amz-Signature=5ea2376dc9cc7a05583fc83d9d659157aa0ae18c205d7f213b1e95568624a548&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6T4SID%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6avZ3hm6j1vOHDstdg15gFOZ5RdNEEem2i6Im2lzKrAIhANvBxPm51iA%2BNirx8X%2BtVxE3OHN5WSLm2elL%2BU899dXDKv8DCGkQABoMNjM3NDIzMTgzODA1IgzmGhGSktxbjLte7gYq3AN4kCnQNQHL6VUqM0FT6sk5gDCwQ0m607%2BM1iOJuKn0BCc%2BjCQm8q75Izgi0VsG3PEBTHdt7u7f32RdQUltNP6v%2BhoQ6xf0WmukO5dv1lUqcPRaMUvdAutRYmgJmXOGyeEXW3BdHaG8b5du5UNKm8eSxfEy9gO4%2BBr1AWTvXsj1AREYabCgkIlisq0AHOn7X%2FB%2BDw4dnh807Qt6quE4AF717lDYRb3bDCnRutOx4bz9IlmoNYJ2F4b2YFmSFgnCl7j0T%2FlMY9ja3q8sTnfzkWXpNI8wK1vAWLtrjbY6EGT8Xh0yMHcTA%2FyhND1al2q%2FlfGL7TO5cKqwDfQmO%2FUkn2yqPkDT6ZpFN8IQMiEbSk3B3It0z%2FeuO4Ne5agHSMGCl2HQdw8pQLdZA6ST0Uut20ngDR7x4dDrlWJljiLL8Ky3WTIGrt%2FoEg8coD0YmtjRYUmZmye1Vmzuypmzg54oQvkhSPmNcInlV5U%2FAu%2B2bvT7lz%2FzUdnnwQZGklJCViMsl1701sPWyQi0C82mrM9JEsDwVfmmOD7oiFlJgqi%2BbCIMMAPUPhpI1vGcAvCK%2BqSIkb9ZcpVNh66Dn8AMvJmDJdk%2Fp2yyjJHOAf7deDyr0AiYCJ%2FCYEARtyG6Pu6UTDC9pNnBBjqkATsGIgfk3nqjxhjM2grpLMRepbPLYqJnGZQySc1AYi%2BGR2C8NTqQENBuoh8a71M1p9N%2BixNQWNGIicdEqKalTOgCu%2BKjJ13M26d45PdJ6UixfZnOBMCYoFqRjHBu%2FrYJr5mtCXvfEwRzwL0HfwQ724UEoeE9ZXzc5QL4%2BFnCIbMAN1QetAQ7ydwau3uar2XBeRAH2HJBbyHJii7%2B9%2FpNUg1ch1dG&X-Amz-Signature=4e9514347efcbf58b3c580287ec1edb958526937b618f42ddda868e9465cf913&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
