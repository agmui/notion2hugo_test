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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOENRNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPRhT%2FlxnD1daIl1zgcMKRnZ%2B2Bme2jvpOA%2BpptwgKCgIhAL%2F9HC26ZC3TUwWBnqvSLwdObpJ7QgSSLoF5Zjj8S61rKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz31RhagM6inWfNA0sq3AO53SwvUEe7zZy3W0QuAdVWy5L3DttHuqw80bBEEURyqfnf9Zlwnk6HYB3zNqRyH6saSqLYiuirkmNYf9e7Hcuv3FnPN%2Fni3V2SH0gidfMzFydch7y2LQest%2BfbXYk%2F%2Bjw88qbafw9yzlKho6rNJ2zIyGwWqkfMD7sN%2BDpwnIEohWTlOsKBfX675SyRTH%2BkogTkAbPcbzhjDcnBQDpfBzlVcisExCF%2FgfuW%2BlBZeaHufbuuMbFx5eVRI%2BY0kTp499QHcDZdYs84HDYnldSJTUoUueIdQwAvikSXRt4TvP3I71zpaFkx7fV%2BD7ud3LsnjwffUMlLIEj0eY9ElMk6%2Bt9Y7kgdIPb9NcmIcUZK43oxAHdcLR%2FQcgaAe%2BiimrK9ZFCdJn62gOkc0gSdLM2IeX5gyULi%2FcfzWaEH6GSySei0Hc3WYiUbenPTbHht65%2B4F6PBkAyOAI0xIBExC%2FRn6jXSCkGIaQ0ZGuKE6ve73M9uItgZNrY7TURCRFvuJ5G0pAlHC4rQFjpHpmk%2B5Zh%2BJ5fZUwWOFJHig9WJ9%2Btg%2FRMlxyHrjZsfRMQMO4rwnV2gZHEpmazQjDhwtuBuGFJChKbPvGHWxopeJmia2UHr23WQk19BVehfNSa1AR70rzD69Y6%2BBjqkAQKl5H1WbFlYsEv46kq1HpL%2FtHYtkVJMAxldw7TBbOg6ARnto2Kxt6ZQtBDI04%2BD3H8GgLK7sCxb0psdHoKKGSkkDfjv4ZexE8gtsi9%2BxgPA%2F6j2uGgQMGsj%2FKWMHlRmkcTnQwby4xeluSV1yc93%2Bzc%2FEvWT6%2B%2BKGP3mtpDMNh1wi5XiGgnLZk0vIXmsRtSo9oYn3LdF8I48nqSCJD5cRHjnWRme&X-Amz-Signature=50c9a399ba8c278593ded0a5cd93b5614c6cf0518766e4bd0ffe8603c9e83957&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOENRNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPRhT%2FlxnD1daIl1zgcMKRnZ%2B2Bme2jvpOA%2BpptwgKCgIhAL%2F9HC26ZC3TUwWBnqvSLwdObpJ7QgSSLoF5Zjj8S61rKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz31RhagM6inWfNA0sq3AO53SwvUEe7zZy3W0QuAdVWy5L3DttHuqw80bBEEURyqfnf9Zlwnk6HYB3zNqRyH6saSqLYiuirkmNYf9e7Hcuv3FnPN%2Fni3V2SH0gidfMzFydch7y2LQest%2BfbXYk%2F%2Bjw88qbafw9yzlKho6rNJ2zIyGwWqkfMD7sN%2BDpwnIEohWTlOsKBfX675SyRTH%2BkogTkAbPcbzhjDcnBQDpfBzlVcisExCF%2FgfuW%2BlBZeaHufbuuMbFx5eVRI%2BY0kTp499QHcDZdYs84HDYnldSJTUoUueIdQwAvikSXRt4TvP3I71zpaFkx7fV%2BD7ud3LsnjwffUMlLIEj0eY9ElMk6%2Bt9Y7kgdIPb9NcmIcUZK43oxAHdcLR%2FQcgaAe%2BiimrK9ZFCdJn62gOkc0gSdLM2IeX5gyULi%2FcfzWaEH6GSySei0Hc3WYiUbenPTbHht65%2B4F6PBkAyOAI0xIBExC%2FRn6jXSCkGIaQ0ZGuKE6ve73M9uItgZNrY7TURCRFvuJ5G0pAlHC4rQFjpHpmk%2B5Zh%2BJ5fZUwWOFJHig9WJ9%2Btg%2FRMlxyHrjZsfRMQMO4rwnV2gZHEpmazQjDhwtuBuGFJChKbPvGHWxopeJmia2UHr23WQk19BVehfNSa1AR70rzD69Y6%2BBjqkAQKl5H1WbFlYsEv46kq1HpL%2FtHYtkVJMAxldw7TBbOg6ARnto2Kxt6ZQtBDI04%2BD3H8GgLK7sCxb0psdHoKKGSkkDfjv4ZexE8gtsi9%2BxgPA%2F6j2uGgQMGsj%2FKWMHlRmkcTnQwby4xeluSV1yc93%2Bzc%2FEvWT6%2B%2BKGP3mtpDMNh1wi5XiGgnLZk0vIXmsRtSo9oYn3LdF8I48nqSCJD5cRHjnWRme&X-Amz-Signature=db0367f88cd16824676a4eb00fc7a2ca7bad1de5aec048c27447054020e4ff6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOENRNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPRhT%2FlxnD1daIl1zgcMKRnZ%2B2Bme2jvpOA%2BpptwgKCgIhAL%2F9HC26ZC3TUwWBnqvSLwdObpJ7QgSSLoF5Zjj8S61rKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz31RhagM6inWfNA0sq3AO53SwvUEe7zZy3W0QuAdVWy5L3DttHuqw80bBEEURyqfnf9Zlwnk6HYB3zNqRyH6saSqLYiuirkmNYf9e7Hcuv3FnPN%2Fni3V2SH0gidfMzFydch7y2LQest%2BfbXYk%2F%2Bjw88qbafw9yzlKho6rNJ2zIyGwWqkfMD7sN%2BDpwnIEohWTlOsKBfX675SyRTH%2BkogTkAbPcbzhjDcnBQDpfBzlVcisExCF%2FgfuW%2BlBZeaHufbuuMbFx5eVRI%2BY0kTp499QHcDZdYs84HDYnldSJTUoUueIdQwAvikSXRt4TvP3I71zpaFkx7fV%2BD7ud3LsnjwffUMlLIEj0eY9ElMk6%2Bt9Y7kgdIPb9NcmIcUZK43oxAHdcLR%2FQcgaAe%2BiimrK9ZFCdJn62gOkc0gSdLM2IeX5gyULi%2FcfzWaEH6GSySei0Hc3WYiUbenPTbHht65%2B4F6PBkAyOAI0xIBExC%2FRn6jXSCkGIaQ0ZGuKE6ve73M9uItgZNrY7TURCRFvuJ5G0pAlHC4rQFjpHpmk%2B5Zh%2BJ5fZUwWOFJHig9WJ9%2Btg%2FRMlxyHrjZsfRMQMO4rwnV2gZHEpmazQjDhwtuBuGFJChKbPvGHWxopeJmia2UHr23WQk19BVehfNSa1AR70rzD69Y6%2BBjqkAQKl5H1WbFlYsEv46kq1HpL%2FtHYtkVJMAxldw7TBbOg6ARnto2Kxt6ZQtBDI04%2BD3H8GgLK7sCxb0psdHoKKGSkkDfjv4ZexE8gtsi9%2BxgPA%2F6j2uGgQMGsj%2FKWMHlRmkcTnQwby4xeluSV1yc93%2Bzc%2FEvWT6%2B%2BKGP3mtpDMNh1wi5XiGgnLZk0vIXmsRtSo9oYn3LdF8I48nqSCJD5cRHjnWRme&X-Amz-Signature=a3e5b2818fbf1e2c5547a5965a9580bbae447639017d6bb97970c77c37b7e90c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOENRNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPRhT%2FlxnD1daIl1zgcMKRnZ%2B2Bme2jvpOA%2BpptwgKCgIhAL%2F9HC26ZC3TUwWBnqvSLwdObpJ7QgSSLoF5Zjj8S61rKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz31RhagM6inWfNA0sq3AO53SwvUEe7zZy3W0QuAdVWy5L3DttHuqw80bBEEURyqfnf9Zlwnk6HYB3zNqRyH6saSqLYiuirkmNYf9e7Hcuv3FnPN%2Fni3V2SH0gidfMzFydch7y2LQest%2BfbXYk%2F%2Bjw88qbafw9yzlKho6rNJ2zIyGwWqkfMD7sN%2BDpwnIEohWTlOsKBfX675SyRTH%2BkogTkAbPcbzhjDcnBQDpfBzlVcisExCF%2FgfuW%2BlBZeaHufbuuMbFx5eVRI%2BY0kTp499QHcDZdYs84HDYnldSJTUoUueIdQwAvikSXRt4TvP3I71zpaFkx7fV%2BD7ud3LsnjwffUMlLIEj0eY9ElMk6%2Bt9Y7kgdIPb9NcmIcUZK43oxAHdcLR%2FQcgaAe%2BiimrK9ZFCdJn62gOkc0gSdLM2IeX5gyULi%2FcfzWaEH6GSySei0Hc3WYiUbenPTbHht65%2B4F6PBkAyOAI0xIBExC%2FRn6jXSCkGIaQ0ZGuKE6ve73M9uItgZNrY7TURCRFvuJ5G0pAlHC4rQFjpHpmk%2B5Zh%2BJ5fZUwWOFJHig9WJ9%2Btg%2FRMlxyHrjZsfRMQMO4rwnV2gZHEpmazQjDhwtuBuGFJChKbPvGHWxopeJmia2UHr23WQk19BVehfNSa1AR70rzD69Y6%2BBjqkAQKl5H1WbFlYsEv46kq1HpL%2FtHYtkVJMAxldw7TBbOg6ARnto2Kxt6ZQtBDI04%2BD3H8GgLK7sCxb0psdHoKKGSkkDfjv4ZexE8gtsi9%2BxgPA%2F6j2uGgQMGsj%2FKWMHlRmkcTnQwby4xeluSV1yc93%2Bzc%2FEvWT6%2B%2BKGP3mtpDMNh1wi5XiGgnLZk0vIXmsRtSo9oYn3LdF8I48nqSCJD5cRHjnWRme&X-Amz-Signature=c07a6e2bb719ce4e45003bf7f6cefe9d5a9d5f2892fde8f968fc313cb5ff4475&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOENRNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPRhT%2FlxnD1daIl1zgcMKRnZ%2B2Bme2jvpOA%2BpptwgKCgIhAL%2F9HC26ZC3TUwWBnqvSLwdObpJ7QgSSLoF5Zjj8S61rKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz31RhagM6inWfNA0sq3AO53SwvUEe7zZy3W0QuAdVWy5L3DttHuqw80bBEEURyqfnf9Zlwnk6HYB3zNqRyH6saSqLYiuirkmNYf9e7Hcuv3FnPN%2Fni3V2SH0gidfMzFydch7y2LQest%2BfbXYk%2F%2Bjw88qbafw9yzlKho6rNJ2zIyGwWqkfMD7sN%2BDpwnIEohWTlOsKBfX675SyRTH%2BkogTkAbPcbzhjDcnBQDpfBzlVcisExCF%2FgfuW%2BlBZeaHufbuuMbFx5eVRI%2BY0kTp499QHcDZdYs84HDYnldSJTUoUueIdQwAvikSXRt4TvP3I71zpaFkx7fV%2BD7ud3LsnjwffUMlLIEj0eY9ElMk6%2Bt9Y7kgdIPb9NcmIcUZK43oxAHdcLR%2FQcgaAe%2BiimrK9ZFCdJn62gOkc0gSdLM2IeX5gyULi%2FcfzWaEH6GSySei0Hc3WYiUbenPTbHht65%2B4F6PBkAyOAI0xIBExC%2FRn6jXSCkGIaQ0ZGuKE6ve73M9uItgZNrY7TURCRFvuJ5G0pAlHC4rQFjpHpmk%2B5Zh%2BJ5fZUwWOFJHig9WJ9%2Btg%2FRMlxyHrjZsfRMQMO4rwnV2gZHEpmazQjDhwtuBuGFJChKbPvGHWxopeJmia2UHr23WQk19BVehfNSa1AR70rzD69Y6%2BBjqkAQKl5H1WbFlYsEv46kq1HpL%2FtHYtkVJMAxldw7TBbOg6ARnto2Kxt6ZQtBDI04%2BD3H8GgLK7sCxb0psdHoKKGSkkDfjv4ZexE8gtsi9%2BxgPA%2F6j2uGgQMGsj%2FKWMHlRmkcTnQwby4xeluSV1yc93%2Bzc%2FEvWT6%2B%2BKGP3mtpDMNh1wi5XiGgnLZk0vIXmsRtSo9oYn3LdF8I48nqSCJD5cRHjnWRme&X-Amz-Signature=f8c3b47e09c5b772aefc1ee9a53689af9d53b0dba728334c59ebed6c7f66d4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOENRNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPRhT%2FlxnD1daIl1zgcMKRnZ%2B2Bme2jvpOA%2BpptwgKCgIhAL%2F9HC26ZC3TUwWBnqvSLwdObpJ7QgSSLoF5Zjj8S61rKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz31RhagM6inWfNA0sq3AO53SwvUEe7zZy3W0QuAdVWy5L3DttHuqw80bBEEURyqfnf9Zlwnk6HYB3zNqRyH6saSqLYiuirkmNYf9e7Hcuv3FnPN%2Fni3V2SH0gidfMzFydch7y2LQest%2BfbXYk%2F%2Bjw88qbafw9yzlKho6rNJ2zIyGwWqkfMD7sN%2BDpwnIEohWTlOsKBfX675SyRTH%2BkogTkAbPcbzhjDcnBQDpfBzlVcisExCF%2FgfuW%2BlBZeaHufbuuMbFx5eVRI%2BY0kTp499QHcDZdYs84HDYnldSJTUoUueIdQwAvikSXRt4TvP3I71zpaFkx7fV%2BD7ud3LsnjwffUMlLIEj0eY9ElMk6%2Bt9Y7kgdIPb9NcmIcUZK43oxAHdcLR%2FQcgaAe%2BiimrK9ZFCdJn62gOkc0gSdLM2IeX5gyULi%2FcfzWaEH6GSySei0Hc3WYiUbenPTbHht65%2B4F6PBkAyOAI0xIBExC%2FRn6jXSCkGIaQ0ZGuKE6ve73M9uItgZNrY7TURCRFvuJ5G0pAlHC4rQFjpHpmk%2B5Zh%2BJ5fZUwWOFJHig9WJ9%2Btg%2FRMlxyHrjZsfRMQMO4rwnV2gZHEpmazQjDhwtuBuGFJChKbPvGHWxopeJmia2UHr23WQk19BVehfNSa1AR70rzD69Y6%2BBjqkAQKl5H1WbFlYsEv46kq1HpL%2FtHYtkVJMAxldw7TBbOg6ARnto2Kxt6ZQtBDI04%2BD3H8GgLK7sCxb0psdHoKKGSkkDfjv4ZexE8gtsi9%2BxgPA%2F6j2uGgQMGsj%2FKWMHlRmkcTnQwby4xeluSV1yc93%2Bzc%2FEvWT6%2B%2BKGP3mtpDMNh1wi5XiGgnLZk0vIXmsRtSo9oYn3LdF8I48nqSCJD5cRHjnWRme&X-Amz-Signature=06e860e7fb0539b42e2e7c532a92b75b2b7d839ffef9986f04306384c3c24d04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOENRNS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPRhT%2FlxnD1daIl1zgcMKRnZ%2B2Bme2jvpOA%2BpptwgKCgIhAL%2F9HC26ZC3TUwWBnqvSLwdObpJ7QgSSLoF5Zjj8S61rKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz31RhagM6inWfNA0sq3AO53SwvUEe7zZy3W0QuAdVWy5L3DttHuqw80bBEEURyqfnf9Zlwnk6HYB3zNqRyH6saSqLYiuirkmNYf9e7Hcuv3FnPN%2Fni3V2SH0gidfMzFydch7y2LQest%2BfbXYk%2F%2Bjw88qbafw9yzlKho6rNJ2zIyGwWqkfMD7sN%2BDpwnIEohWTlOsKBfX675SyRTH%2BkogTkAbPcbzhjDcnBQDpfBzlVcisExCF%2FgfuW%2BlBZeaHufbuuMbFx5eVRI%2BY0kTp499QHcDZdYs84HDYnldSJTUoUueIdQwAvikSXRt4TvP3I71zpaFkx7fV%2BD7ud3LsnjwffUMlLIEj0eY9ElMk6%2Bt9Y7kgdIPb9NcmIcUZK43oxAHdcLR%2FQcgaAe%2BiimrK9ZFCdJn62gOkc0gSdLM2IeX5gyULi%2FcfzWaEH6GSySei0Hc3WYiUbenPTbHht65%2B4F6PBkAyOAI0xIBExC%2FRn6jXSCkGIaQ0ZGuKE6ve73M9uItgZNrY7TURCRFvuJ5G0pAlHC4rQFjpHpmk%2B5Zh%2BJ5fZUwWOFJHig9WJ9%2Btg%2FRMlxyHrjZsfRMQMO4rwnV2gZHEpmazQjDhwtuBuGFJChKbPvGHWxopeJmia2UHr23WQk19BVehfNSa1AR70rzD69Y6%2BBjqkAQKl5H1WbFlYsEv46kq1HpL%2FtHYtkVJMAxldw7TBbOg6ARnto2Kxt6ZQtBDI04%2BD3H8GgLK7sCxb0psdHoKKGSkkDfjv4ZexE8gtsi9%2BxgPA%2F6j2uGgQMGsj%2FKWMHlRmkcTnQwby4xeluSV1yc93%2Bzc%2FEvWT6%2B%2BKGP3mtpDMNh1wi5XiGgnLZk0vIXmsRtSo9oYn3LdF8I48nqSCJD5cRHjnWRme&X-Amz-Signature=75bb7d7196571d10c656697e3b1f19e5f77051d244c953255d088406150659fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
