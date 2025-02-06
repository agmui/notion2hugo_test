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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYW4ARY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAfF174EOFU9211SssMj6vea9Ol3juvqtQFKT2repIjrAiA%2Fd275pEHTIHMWL%2FdapOViqdFqje6TDjig1k%2BZ8Qh%2F3ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQnu73Etw%2BEcYXPjdKtwDFpZrxabTD%2FQ%2FryfMJ1bhkRYmXSekipC%2FkdK2vBdNQ3v8uF5YELSEWc0xKSaMdQCg6XVsnvPNACQPYsn%2FKK1YySlkFgY2kdU4s9qlbiE4cRdH%2B9R2%2B5FmEvtIEt9WHJDJ1po20YWFTP%2Fm0Vst9d8BrwAMVfIn%2BnHBfU9Ft00VzvPkHL559GKk9NlFXfVFO5mvPrVvvvt330rzQJ4%2B%2B1AFglcVRXrAIwSm1C1XvHBmtDfnddvu%2BhCBVStpAwBUDAVrC9N77%2B3gdMiXDX%2B8Trg3mcq2bLOjRiEwIivKfUpabag0%2BOKOxrVWvcl%2BqDK%2Fc%2BAPxDjX2uaIrn0m6NqGusJgwISh8%2FjJHPxT0sf230Frcbf5jk1f8jw0OT7FiXKyalxtHxjfKyVSHs5Ci4mGDD%2BX4AX%2Bfqbl%2Ba8tjO8Nt28v5A3jWD57rDv%2FOJJ6TzDvdVfQFFTPwU%2FAs4diBhNbY1Gyc0CkoKSb28DmOaZd6h80tJCus%2FZgeXQVfAPSpufG%2B6FAkNeoRTOHZ1W88OBYohB89IzznOuOWKviDiYhiP1kc1BNri%2ByB5udX7LcbjQ5h380j4wOaabHRPLrUmzDabqmytzpAAayevIsi%2Btn7pXlGVfh4NPamyQyWM6%2F8Gcwwf6UvQY6pgFiJ7qkt2qMTY6Q73p1fR3JdSKqxt7nPJbJJi3qdtKBkJLvMyEld3ensHdy6Yov2ojYyZNOX4GrqQ%2BNaqvn6Yu%2F9OXcXajBnRba1ai0w3j8ia8w7HWg1e5LZE6Bvcij77Y3rzIwIUIMUVL5FTB99613yBUann99OLP%2FzbTPizQ4os1EWcu725GO3ZOco2NzwMBCWQkW6iKAQeD9f7syb1cu125oN6ZU&X-Amz-Signature=c015032770fc72414f3be2d70c95ed84f70c1f332a3ee1b29b1b01743beccd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYW4ARY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAfF174EOFU9211SssMj6vea9Ol3juvqtQFKT2repIjrAiA%2Fd275pEHTIHMWL%2FdapOViqdFqje6TDjig1k%2BZ8Qh%2F3ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQnu73Etw%2BEcYXPjdKtwDFpZrxabTD%2FQ%2FryfMJ1bhkRYmXSekipC%2FkdK2vBdNQ3v8uF5YELSEWc0xKSaMdQCg6XVsnvPNACQPYsn%2FKK1YySlkFgY2kdU4s9qlbiE4cRdH%2B9R2%2B5FmEvtIEt9WHJDJ1po20YWFTP%2Fm0Vst9d8BrwAMVfIn%2BnHBfU9Ft00VzvPkHL559GKk9NlFXfVFO5mvPrVvvvt330rzQJ4%2B%2B1AFglcVRXrAIwSm1C1XvHBmtDfnddvu%2BhCBVStpAwBUDAVrC9N77%2B3gdMiXDX%2B8Trg3mcq2bLOjRiEwIivKfUpabag0%2BOKOxrVWvcl%2BqDK%2Fc%2BAPxDjX2uaIrn0m6NqGusJgwISh8%2FjJHPxT0sf230Frcbf5jk1f8jw0OT7FiXKyalxtHxjfKyVSHs5Ci4mGDD%2BX4AX%2Bfqbl%2Ba8tjO8Nt28v5A3jWD57rDv%2FOJJ6TzDvdVfQFFTPwU%2FAs4diBhNbY1Gyc0CkoKSb28DmOaZd6h80tJCus%2FZgeXQVfAPSpufG%2B6FAkNeoRTOHZ1W88OBYohB89IzznOuOWKviDiYhiP1kc1BNri%2ByB5udX7LcbjQ5h380j4wOaabHRPLrUmzDabqmytzpAAayevIsi%2Btn7pXlGVfh4NPamyQyWM6%2F8Gcwwf6UvQY6pgFiJ7qkt2qMTY6Q73p1fR3JdSKqxt7nPJbJJi3qdtKBkJLvMyEld3ensHdy6Yov2ojYyZNOX4GrqQ%2BNaqvn6Yu%2F9OXcXajBnRba1ai0w3j8ia8w7HWg1e5LZE6Bvcij77Y3rzIwIUIMUVL5FTB99613yBUann99OLP%2FzbTPizQ4os1EWcu725GO3ZOco2NzwMBCWQkW6iKAQeD9f7syb1cu125oN6ZU&X-Amz-Signature=fcf1ad454cd9554efec3b4133b90d3fe27f7d79b1f7d74ff14f3d80017a813b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYW4ARY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAfF174EOFU9211SssMj6vea9Ol3juvqtQFKT2repIjrAiA%2Fd275pEHTIHMWL%2FdapOViqdFqje6TDjig1k%2BZ8Qh%2F3ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQnu73Etw%2BEcYXPjdKtwDFpZrxabTD%2FQ%2FryfMJ1bhkRYmXSekipC%2FkdK2vBdNQ3v8uF5YELSEWc0xKSaMdQCg6XVsnvPNACQPYsn%2FKK1YySlkFgY2kdU4s9qlbiE4cRdH%2B9R2%2B5FmEvtIEt9WHJDJ1po20YWFTP%2Fm0Vst9d8BrwAMVfIn%2BnHBfU9Ft00VzvPkHL559GKk9NlFXfVFO5mvPrVvvvt330rzQJ4%2B%2B1AFglcVRXrAIwSm1C1XvHBmtDfnddvu%2BhCBVStpAwBUDAVrC9N77%2B3gdMiXDX%2B8Trg3mcq2bLOjRiEwIivKfUpabag0%2BOKOxrVWvcl%2BqDK%2Fc%2BAPxDjX2uaIrn0m6NqGusJgwISh8%2FjJHPxT0sf230Frcbf5jk1f8jw0OT7FiXKyalxtHxjfKyVSHs5Ci4mGDD%2BX4AX%2Bfqbl%2Ba8tjO8Nt28v5A3jWD57rDv%2FOJJ6TzDvdVfQFFTPwU%2FAs4diBhNbY1Gyc0CkoKSb28DmOaZd6h80tJCus%2FZgeXQVfAPSpufG%2B6FAkNeoRTOHZ1W88OBYohB89IzznOuOWKviDiYhiP1kc1BNri%2ByB5udX7LcbjQ5h380j4wOaabHRPLrUmzDabqmytzpAAayevIsi%2Btn7pXlGVfh4NPamyQyWM6%2F8Gcwwf6UvQY6pgFiJ7qkt2qMTY6Q73p1fR3JdSKqxt7nPJbJJi3qdtKBkJLvMyEld3ensHdy6Yov2ojYyZNOX4GrqQ%2BNaqvn6Yu%2F9OXcXajBnRba1ai0w3j8ia8w7HWg1e5LZE6Bvcij77Y3rzIwIUIMUVL5FTB99613yBUann99OLP%2FzbTPizQ4os1EWcu725GO3ZOco2NzwMBCWQkW6iKAQeD9f7syb1cu125oN6ZU&X-Amz-Signature=dc06e36c7ee689d8b3e2a65616f35e14e9317ae10d6bcd215528ba304b81b51a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYW4ARY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAfF174EOFU9211SssMj6vea9Ol3juvqtQFKT2repIjrAiA%2Fd275pEHTIHMWL%2FdapOViqdFqje6TDjig1k%2BZ8Qh%2F3ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQnu73Etw%2BEcYXPjdKtwDFpZrxabTD%2FQ%2FryfMJ1bhkRYmXSekipC%2FkdK2vBdNQ3v8uF5YELSEWc0xKSaMdQCg6XVsnvPNACQPYsn%2FKK1YySlkFgY2kdU4s9qlbiE4cRdH%2B9R2%2B5FmEvtIEt9WHJDJ1po20YWFTP%2Fm0Vst9d8BrwAMVfIn%2BnHBfU9Ft00VzvPkHL559GKk9NlFXfVFO5mvPrVvvvt330rzQJ4%2B%2B1AFglcVRXrAIwSm1C1XvHBmtDfnddvu%2BhCBVStpAwBUDAVrC9N77%2B3gdMiXDX%2B8Trg3mcq2bLOjRiEwIivKfUpabag0%2BOKOxrVWvcl%2BqDK%2Fc%2BAPxDjX2uaIrn0m6NqGusJgwISh8%2FjJHPxT0sf230Frcbf5jk1f8jw0OT7FiXKyalxtHxjfKyVSHs5Ci4mGDD%2BX4AX%2Bfqbl%2Ba8tjO8Nt28v5A3jWD57rDv%2FOJJ6TzDvdVfQFFTPwU%2FAs4diBhNbY1Gyc0CkoKSb28DmOaZd6h80tJCus%2FZgeXQVfAPSpufG%2B6FAkNeoRTOHZ1W88OBYohB89IzznOuOWKviDiYhiP1kc1BNri%2ByB5udX7LcbjQ5h380j4wOaabHRPLrUmzDabqmytzpAAayevIsi%2Btn7pXlGVfh4NPamyQyWM6%2F8Gcwwf6UvQY6pgFiJ7qkt2qMTY6Q73p1fR3JdSKqxt7nPJbJJi3qdtKBkJLvMyEld3ensHdy6Yov2ojYyZNOX4GrqQ%2BNaqvn6Yu%2F9OXcXajBnRba1ai0w3j8ia8w7HWg1e5LZE6Bvcij77Y3rzIwIUIMUVL5FTB99613yBUann99OLP%2FzbTPizQ4os1EWcu725GO3ZOco2NzwMBCWQkW6iKAQeD9f7syb1cu125oN6ZU&X-Amz-Signature=6f220610b074152a7c4edc7576559531f3509659ca6bfa87bd526b602439415b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYW4ARY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAfF174EOFU9211SssMj6vea9Ol3juvqtQFKT2repIjrAiA%2Fd275pEHTIHMWL%2FdapOViqdFqje6TDjig1k%2BZ8Qh%2F3ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQnu73Etw%2BEcYXPjdKtwDFpZrxabTD%2FQ%2FryfMJ1bhkRYmXSekipC%2FkdK2vBdNQ3v8uF5YELSEWc0xKSaMdQCg6XVsnvPNACQPYsn%2FKK1YySlkFgY2kdU4s9qlbiE4cRdH%2B9R2%2B5FmEvtIEt9WHJDJ1po20YWFTP%2Fm0Vst9d8BrwAMVfIn%2BnHBfU9Ft00VzvPkHL559GKk9NlFXfVFO5mvPrVvvvt330rzQJ4%2B%2B1AFglcVRXrAIwSm1C1XvHBmtDfnddvu%2BhCBVStpAwBUDAVrC9N77%2B3gdMiXDX%2B8Trg3mcq2bLOjRiEwIivKfUpabag0%2BOKOxrVWvcl%2BqDK%2Fc%2BAPxDjX2uaIrn0m6NqGusJgwISh8%2FjJHPxT0sf230Frcbf5jk1f8jw0OT7FiXKyalxtHxjfKyVSHs5Ci4mGDD%2BX4AX%2Bfqbl%2Ba8tjO8Nt28v5A3jWD57rDv%2FOJJ6TzDvdVfQFFTPwU%2FAs4diBhNbY1Gyc0CkoKSb28DmOaZd6h80tJCus%2FZgeXQVfAPSpufG%2B6FAkNeoRTOHZ1W88OBYohB89IzznOuOWKviDiYhiP1kc1BNri%2ByB5udX7LcbjQ5h380j4wOaabHRPLrUmzDabqmytzpAAayevIsi%2Btn7pXlGVfh4NPamyQyWM6%2F8Gcwwf6UvQY6pgFiJ7qkt2qMTY6Q73p1fR3JdSKqxt7nPJbJJi3qdtKBkJLvMyEld3ensHdy6Yov2ojYyZNOX4GrqQ%2BNaqvn6Yu%2F9OXcXajBnRba1ai0w3j8ia8w7HWg1e5LZE6Bvcij77Y3rzIwIUIMUVL5FTB99613yBUann99OLP%2FzbTPizQ4os1EWcu725GO3ZOco2NzwMBCWQkW6iKAQeD9f7syb1cu125oN6ZU&X-Amz-Signature=378be4bcf0b8261c0dde17326634a3df16d917b5a67a69345b06b45f689627b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYW4ARY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAfF174EOFU9211SssMj6vea9Ol3juvqtQFKT2repIjrAiA%2Fd275pEHTIHMWL%2FdapOViqdFqje6TDjig1k%2BZ8Qh%2F3ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQnu73Etw%2BEcYXPjdKtwDFpZrxabTD%2FQ%2FryfMJ1bhkRYmXSekipC%2FkdK2vBdNQ3v8uF5YELSEWc0xKSaMdQCg6XVsnvPNACQPYsn%2FKK1YySlkFgY2kdU4s9qlbiE4cRdH%2B9R2%2B5FmEvtIEt9WHJDJ1po20YWFTP%2Fm0Vst9d8BrwAMVfIn%2BnHBfU9Ft00VzvPkHL559GKk9NlFXfVFO5mvPrVvvvt330rzQJ4%2B%2B1AFglcVRXrAIwSm1C1XvHBmtDfnddvu%2BhCBVStpAwBUDAVrC9N77%2B3gdMiXDX%2B8Trg3mcq2bLOjRiEwIivKfUpabag0%2BOKOxrVWvcl%2BqDK%2Fc%2BAPxDjX2uaIrn0m6NqGusJgwISh8%2FjJHPxT0sf230Frcbf5jk1f8jw0OT7FiXKyalxtHxjfKyVSHs5Ci4mGDD%2BX4AX%2Bfqbl%2Ba8tjO8Nt28v5A3jWD57rDv%2FOJJ6TzDvdVfQFFTPwU%2FAs4diBhNbY1Gyc0CkoKSb28DmOaZd6h80tJCus%2FZgeXQVfAPSpufG%2B6FAkNeoRTOHZ1W88OBYohB89IzznOuOWKviDiYhiP1kc1BNri%2ByB5udX7LcbjQ5h380j4wOaabHRPLrUmzDabqmytzpAAayevIsi%2Btn7pXlGVfh4NPamyQyWM6%2F8Gcwwf6UvQY6pgFiJ7qkt2qMTY6Q73p1fR3JdSKqxt7nPJbJJi3qdtKBkJLvMyEld3ensHdy6Yov2ojYyZNOX4GrqQ%2BNaqvn6Yu%2F9OXcXajBnRba1ai0w3j8ia8w7HWg1e5LZE6Bvcij77Y3rzIwIUIMUVL5FTB99613yBUann99OLP%2FzbTPizQ4os1EWcu725GO3ZOco2NzwMBCWQkW6iKAQeD9f7syb1cu125oN6ZU&X-Amz-Signature=8df4e6510247e779968be05e817251f835a2c1e31b6d7f02cd3d4dfd9a68c073&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYW4ARY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAfF174EOFU9211SssMj6vea9Ol3juvqtQFKT2repIjrAiA%2Fd275pEHTIHMWL%2FdapOViqdFqje6TDjig1k%2BZ8Qh%2F3ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQnu73Etw%2BEcYXPjdKtwDFpZrxabTD%2FQ%2FryfMJ1bhkRYmXSekipC%2FkdK2vBdNQ3v8uF5YELSEWc0xKSaMdQCg6XVsnvPNACQPYsn%2FKK1YySlkFgY2kdU4s9qlbiE4cRdH%2B9R2%2B5FmEvtIEt9WHJDJ1po20YWFTP%2Fm0Vst9d8BrwAMVfIn%2BnHBfU9Ft00VzvPkHL559GKk9NlFXfVFO5mvPrVvvvt330rzQJ4%2B%2B1AFglcVRXrAIwSm1C1XvHBmtDfnddvu%2BhCBVStpAwBUDAVrC9N77%2B3gdMiXDX%2B8Trg3mcq2bLOjRiEwIivKfUpabag0%2BOKOxrVWvcl%2BqDK%2Fc%2BAPxDjX2uaIrn0m6NqGusJgwISh8%2FjJHPxT0sf230Frcbf5jk1f8jw0OT7FiXKyalxtHxjfKyVSHs5Ci4mGDD%2BX4AX%2Bfqbl%2Ba8tjO8Nt28v5A3jWD57rDv%2FOJJ6TzDvdVfQFFTPwU%2FAs4diBhNbY1Gyc0CkoKSb28DmOaZd6h80tJCus%2FZgeXQVfAPSpufG%2B6FAkNeoRTOHZ1W88OBYohB89IzznOuOWKviDiYhiP1kc1BNri%2ByB5udX7LcbjQ5h380j4wOaabHRPLrUmzDabqmytzpAAayevIsi%2Btn7pXlGVfh4NPamyQyWM6%2F8Gcwwf6UvQY6pgFiJ7qkt2qMTY6Q73p1fR3JdSKqxt7nPJbJJi3qdtKBkJLvMyEld3ensHdy6Yov2ojYyZNOX4GrqQ%2BNaqvn6Yu%2F9OXcXajBnRba1ai0w3j8ia8w7HWg1e5LZE6Bvcij77Y3rzIwIUIMUVL5FTB99613yBUann99OLP%2FzbTPizQ4os1EWcu725GO3ZOco2NzwMBCWQkW6iKAQeD9f7syb1cu125oN6ZU&X-Amz-Signature=736bf5839643b44aa624c5cc59fcfad06726998a69ae492fb1398a08ffd47510&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
