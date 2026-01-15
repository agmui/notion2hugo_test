---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJJCTFX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqSzbWsQAiOP3OLx%2BQBRov9pvuMTHBVaKUk56kWqyobQIhAK%2FTqyDpbjSKmi6P3xQzJWigcK9Pvm6Bs0g6vZZlUc1PKv8DCCoQABoMNjM3NDIzMTgzODA1IgxEqQoGTHrE8xORS6Uq3AP9uD8%2Bvt23%2BbKE8BSXjjmZjMNBEN457JnwPMuFyjrmN%2Fo5%2FGglfZQQOVJp29ok6nVl2s%2FEYCBN1JZQ%2FWRvKJvSUwIVyq%2B%2B7aDBfPL6ZkgiO%2F2OGr6eGyxR%2FWIrcBi9Y1XUHHX65ZSOtCiiNPcJXslus9dW2S4nHVrly4xfvngB7n5vQW0Oafy6qK5d%2BUGm6bT61ZUq%2F%2Fbo2orfpy%2Br8eVFnZrlpm0VX9i84iqf3nLV3pNgukyTVheO0mR6GXHAF3ChcN7ueJeTNYoS77ZLZVpDYJbkzkeIXzezpu2Ko6oO3%2FSNKrzW0%2BQcvZYwSPp3h4hKMjkGR2Yf8HGlperE0YYbqUU4avr2uQjHxcsQCSNPF1EqwpBLpok7ghuMSUWoX4%2FzsLSGcQQRns8MF%2B1wDQXgJjhjOdQLRYqsT4Y4GGvsEEiCzzY9cLB1Lo8imjo6ZPF79zWBNYF2dN0nmTnQvGaqUVkkHwBzx3robwXJYmtF3i%2BjX2VG3dnBLd19%2BE1PH%2FLWJ2hPDGT7NHfX5DbK8B5amkRlx4X5wgOpEogRkZjMnmXPQYCr7dcaGD%2BG3BSR9pJLe5xtyFdcutStmcK0g7bB4OTO1mbSXVvR5hl%2Bl%2FF5imSDRNANpQ01bmxADjDA%2F6DLBjqkAVVBLhqAvwGWry6T4T2wNrSJcV0Jzyu7ZS6ba%2BD6LL0EGtLO3abaBpI2TXmINwEuKkbp4O%2BPqN%2FsudLNuyj3lxGd3UWnyEq0NwOtQv1Tnir3EuBgLCak%2BchMK6m9qGFJZcWLCnMaaqhgYTLYHrWGceijdMwTDYBQbZvNJIR%2FMlDbDqSwS9P2cnvUxhdtqYR4KIChc8YdGD5VyKW59PxqLJIQF8ru&X-Amz-Signature=f2cfb6fe465541a4fada2bce6601f23a235b5bb3efef819112c9d914a8403429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJJCTFX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqSzbWsQAiOP3OLx%2BQBRov9pvuMTHBVaKUk56kWqyobQIhAK%2FTqyDpbjSKmi6P3xQzJWigcK9Pvm6Bs0g6vZZlUc1PKv8DCCoQABoMNjM3NDIzMTgzODA1IgxEqQoGTHrE8xORS6Uq3AP9uD8%2Bvt23%2BbKE8BSXjjmZjMNBEN457JnwPMuFyjrmN%2Fo5%2FGglfZQQOVJp29ok6nVl2s%2FEYCBN1JZQ%2FWRvKJvSUwIVyq%2B%2B7aDBfPL6ZkgiO%2F2OGr6eGyxR%2FWIrcBi9Y1XUHHX65ZSOtCiiNPcJXslus9dW2S4nHVrly4xfvngB7n5vQW0Oafy6qK5d%2BUGm6bT61ZUq%2F%2Fbo2orfpy%2Br8eVFnZrlpm0VX9i84iqf3nLV3pNgukyTVheO0mR6GXHAF3ChcN7ueJeTNYoS77ZLZVpDYJbkzkeIXzezpu2Ko6oO3%2FSNKrzW0%2BQcvZYwSPp3h4hKMjkGR2Yf8HGlperE0YYbqUU4avr2uQjHxcsQCSNPF1EqwpBLpok7ghuMSUWoX4%2FzsLSGcQQRns8MF%2B1wDQXgJjhjOdQLRYqsT4Y4GGvsEEiCzzY9cLB1Lo8imjo6ZPF79zWBNYF2dN0nmTnQvGaqUVkkHwBzx3robwXJYmtF3i%2BjX2VG3dnBLd19%2BE1PH%2FLWJ2hPDGT7NHfX5DbK8B5amkRlx4X5wgOpEogRkZjMnmXPQYCr7dcaGD%2BG3BSR9pJLe5xtyFdcutStmcK0g7bB4OTO1mbSXVvR5hl%2Bl%2FF5imSDRNANpQ01bmxADjDA%2F6DLBjqkAVVBLhqAvwGWry6T4T2wNrSJcV0Jzyu7ZS6ba%2BD6LL0EGtLO3abaBpI2TXmINwEuKkbp4O%2BPqN%2FsudLNuyj3lxGd3UWnyEq0NwOtQv1Tnir3EuBgLCak%2BchMK6m9qGFJZcWLCnMaaqhgYTLYHrWGceijdMwTDYBQbZvNJIR%2FMlDbDqSwS9P2cnvUxhdtqYR4KIChc8YdGD5VyKW59PxqLJIQF8ru&X-Amz-Signature=d5d9b25e4af7d77edd5a956c9b4d93ad69f38f9f5ea9ae4a0ab6e665575d9f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJJCTFX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqSzbWsQAiOP3OLx%2BQBRov9pvuMTHBVaKUk56kWqyobQIhAK%2FTqyDpbjSKmi6P3xQzJWigcK9Pvm6Bs0g6vZZlUc1PKv8DCCoQABoMNjM3NDIzMTgzODA1IgxEqQoGTHrE8xORS6Uq3AP9uD8%2Bvt23%2BbKE8BSXjjmZjMNBEN457JnwPMuFyjrmN%2Fo5%2FGglfZQQOVJp29ok6nVl2s%2FEYCBN1JZQ%2FWRvKJvSUwIVyq%2B%2B7aDBfPL6ZkgiO%2F2OGr6eGyxR%2FWIrcBi9Y1XUHHX65ZSOtCiiNPcJXslus9dW2S4nHVrly4xfvngB7n5vQW0Oafy6qK5d%2BUGm6bT61ZUq%2F%2Fbo2orfpy%2Br8eVFnZrlpm0VX9i84iqf3nLV3pNgukyTVheO0mR6GXHAF3ChcN7ueJeTNYoS77ZLZVpDYJbkzkeIXzezpu2Ko6oO3%2FSNKrzW0%2BQcvZYwSPp3h4hKMjkGR2Yf8HGlperE0YYbqUU4avr2uQjHxcsQCSNPF1EqwpBLpok7ghuMSUWoX4%2FzsLSGcQQRns8MF%2B1wDQXgJjhjOdQLRYqsT4Y4GGvsEEiCzzY9cLB1Lo8imjo6ZPF79zWBNYF2dN0nmTnQvGaqUVkkHwBzx3robwXJYmtF3i%2BjX2VG3dnBLd19%2BE1PH%2FLWJ2hPDGT7NHfX5DbK8B5amkRlx4X5wgOpEogRkZjMnmXPQYCr7dcaGD%2BG3BSR9pJLe5xtyFdcutStmcK0g7bB4OTO1mbSXVvR5hl%2Bl%2FF5imSDRNANpQ01bmxADjDA%2F6DLBjqkAVVBLhqAvwGWry6T4T2wNrSJcV0Jzyu7ZS6ba%2BD6LL0EGtLO3abaBpI2TXmINwEuKkbp4O%2BPqN%2FsudLNuyj3lxGd3UWnyEq0NwOtQv1Tnir3EuBgLCak%2BchMK6m9qGFJZcWLCnMaaqhgYTLYHrWGceijdMwTDYBQbZvNJIR%2FMlDbDqSwS9P2cnvUxhdtqYR4KIChc8YdGD5VyKW59PxqLJIQF8ru&X-Amz-Signature=d819578657a103f7bdd864de28db5cac588f12a64266282f8f07d90dab9057b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJJCTFX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqSzbWsQAiOP3OLx%2BQBRov9pvuMTHBVaKUk56kWqyobQIhAK%2FTqyDpbjSKmi6P3xQzJWigcK9Pvm6Bs0g6vZZlUc1PKv8DCCoQABoMNjM3NDIzMTgzODA1IgxEqQoGTHrE8xORS6Uq3AP9uD8%2Bvt23%2BbKE8BSXjjmZjMNBEN457JnwPMuFyjrmN%2Fo5%2FGglfZQQOVJp29ok6nVl2s%2FEYCBN1JZQ%2FWRvKJvSUwIVyq%2B%2B7aDBfPL6ZkgiO%2F2OGr6eGyxR%2FWIrcBi9Y1XUHHX65ZSOtCiiNPcJXslus9dW2S4nHVrly4xfvngB7n5vQW0Oafy6qK5d%2BUGm6bT61ZUq%2F%2Fbo2orfpy%2Br8eVFnZrlpm0VX9i84iqf3nLV3pNgukyTVheO0mR6GXHAF3ChcN7ueJeTNYoS77ZLZVpDYJbkzkeIXzezpu2Ko6oO3%2FSNKrzW0%2BQcvZYwSPp3h4hKMjkGR2Yf8HGlperE0YYbqUU4avr2uQjHxcsQCSNPF1EqwpBLpok7ghuMSUWoX4%2FzsLSGcQQRns8MF%2B1wDQXgJjhjOdQLRYqsT4Y4GGvsEEiCzzY9cLB1Lo8imjo6ZPF79zWBNYF2dN0nmTnQvGaqUVkkHwBzx3robwXJYmtF3i%2BjX2VG3dnBLd19%2BE1PH%2FLWJ2hPDGT7NHfX5DbK8B5amkRlx4X5wgOpEogRkZjMnmXPQYCr7dcaGD%2BG3BSR9pJLe5xtyFdcutStmcK0g7bB4OTO1mbSXVvR5hl%2Bl%2FF5imSDRNANpQ01bmxADjDA%2F6DLBjqkAVVBLhqAvwGWry6T4T2wNrSJcV0Jzyu7ZS6ba%2BD6LL0EGtLO3abaBpI2TXmINwEuKkbp4O%2BPqN%2FsudLNuyj3lxGd3UWnyEq0NwOtQv1Tnir3EuBgLCak%2BchMK6m9qGFJZcWLCnMaaqhgYTLYHrWGceijdMwTDYBQbZvNJIR%2FMlDbDqSwS9P2cnvUxhdtqYR4KIChc8YdGD5VyKW59PxqLJIQF8ru&X-Amz-Signature=cdf0988a59d861e0c87b6def460bba2f6df0a843121453a33048dc6d7c0bebfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJJCTFX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqSzbWsQAiOP3OLx%2BQBRov9pvuMTHBVaKUk56kWqyobQIhAK%2FTqyDpbjSKmi6P3xQzJWigcK9Pvm6Bs0g6vZZlUc1PKv8DCCoQABoMNjM3NDIzMTgzODA1IgxEqQoGTHrE8xORS6Uq3AP9uD8%2Bvt23%2BbKE8BSXjjmZjMNBEN457JnwPMuFyjrmN%2Fo5%2FGglfZQQOVJp29ok6nVl2s%2FEYCBN1JZQ%2FWRvKJvSUwIVyq%2B%2B7aDBfPL6ZkgiO%2F2OGr6eGyxR%2FWIrcBi9Y1XUHHX65ZSOtCiiNPcJXslus9dW2S4nHVrly4xfvngB7n5vQW0Oafy6qK5d%2BUGm6bT61ZUq%2F%2Fbo2orfpy%2Br8eVFnZrlpm0VX9i84iqf3nLV3pNgukyTVheO0mR6GXHAF3ChcN7ueJeTNYoS77ZLZVpDYJbkzkeIXzezpu2Ko6oO3%2FSNKrzW0%2BQcvZYwSPp3h4hKMjkGR2Yf8HGlperE0YYbqUU4avr2uQjHxcsQCSNPF1EqwpBLpok7ghuMSUWoX4%2FzsLSGcQQRns8MF%2B1wDQXgJjhjOdQLRYqsT4Y4GGvsEEiCzzY9cLB1Lo8imjo6ZPF79zWBNYF2dN0nmTnQvGaqUVkkHwBzx3robwXJYmtF3i%2BjX2VG3dnBLd19%2BE1PH%2FLWJ2hPDGT7NHfX5DbK8B5amkRlx4X5wgOpEogRkZjMnmXPQYCr7dcaGD%2BG3BSR9pJLe5xtyFdcutStmcK0g7bB4OTO1mbSXVvR5hl%2Bl%2FF5imSDRNANpQ01bmxADjDA%2F6DLBjqkAVVBLhqAvwGWry6T4T2wNrSJcV0Jzyu7ZS6ba%2BD6LL0EGtLO3abaBpI2TXmINwEuKkbp4O%2BPqN%2FsudLNuyj3lxGd3UWnyEq0NwOtQv1Tnir3EuBgLCak%2BchMK6m9qGFJZcWLCnMaaqhgYTLYHrWGceijdMwTDYBQbZvNJIR%2FMlDbDqSwS9P2cnvUxhdtqYR4KIChc8YdGD5VyKW59PxqLJIQF8ru&X-Amz-Signature=a8df1fb88141a902c05c0b69d734d2eae25c20f52a664b935afa0a3371a7ca62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJJCTFX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqSzbWsQAiOP3OLx%2BQBRov9pvuMTHBVaKUk56kWqyobQIhAK%2FTqyDpbjSKmi6P3xQzJWigcK9Pvm6Bs0g6vZZlUc1PKv8DCCoQABoMNjM3NDIzMTgzODA1IgxEqQoGTHrE8xORS6Uq3AP9uD8%2Bvt23%2BbKE8BSXjjmZjMNBEN457JnwPMuFyjrmN%2Fo5%2FGglfZQQOVJp29ok6nVl2s%2FEYCBN1JZQ%2FWRvKJvSUwIVyq%2B%2B7aDBfPL6ZkgiO%2F2OGr6eGyxR%2FWIrcBi9Y1XUHHX65ZSOtCiiNPcJXslus9dW2S4nHVrly4xfvngB7n5vQW0Oafy6qK5d%2BUGm6bT61ZUq%2F%2Fbo2orfpy%2Br8eVFnZrlpm0VX9i84iqf3nLV3pNgukyTVheO0mR6GXHAF3ChcN7ueJeTNYoS77ZLZVpDYJbkzkeIXzezpu2Ko6oO3%2FSNKrzW0%2BQcvZYwSPp3h4hKMjkGR2Yf8HGlperE0YYbqUU4avr2uQjHxcsQCSNPF1EqwpBLpok7ghuMSUWoX4%2FzsLSGcQQRns8MF%2B1wDQXgJjhjOdQLRYqsT4Y4GGvsEEiCzzY9cLB1Lo8imjo6ZPF79zWBNYF2dN0nmTnQvGaqUVkkHwBzx3robwXJYmtF3i%2BjX2VG3dnBLd19%2BE1PH%2FLWJ2hPDGT7NHfX5DbK8B5amkRlx4X5wgOpEogRkZjMnmXPQYCr7dcaGD%2BG3BSR9pJLe5xtyFdcutStmcK0g7bB4OTO1mbSXVvR5hl%2Bl%2FF5imSDRNANpQ01bmxADjDA%2F6DLBjqkAVVBLhqAvwGWry6T4T2wNrSJcV0Jzyu7ZS6ba%2BD6LL0EGtLO3abaBpI2TXmINwEuKkbp4O%2BPqN%2FsudLNuyj3lxGd3UWnyEq0NwOtQv1Tnir3EuBgLCak%2BchMK6m9qGFJZcWLCnMaaqhgYTLYHrWGceijdMwTDYBQbZvNJIR%2FMlDbDqSwS9P2cnvUxhdtqYR4KIChc8YdGD5VyKW59PxqLJIQF8ru&X-Amz-Signature=fc5f8196c50a11ecbc6fcb621ae2237ea130a03e07393126dd6ea8a13e6fbed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJJCTFX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqSzbWsQAiOP3OLx%2BQBRov9pvuMTHBVaKUk56kWqyobQIhAK%2FTqyDpbjSKmi6P3xQzJWigcK9Pvm6Bs0g6vZZlUc1PKv8DCCoQABoMNjM3NDIzMTgzODA1IgxEqQoGTHrE8xORS6Uq3AP9uD8%2Bvt23%2BbKE8BSXjjmZjMNBEN457JnwPMuFyjrmN%2Fo5%2FGglfZQQOVJp29ok6nVl2s%2FEYCBN1JZQ%2FWRvKJvSUwIVyq%2B%2B7aDBfPL6ZkgiO%2F2OGr6eGyxR%2FWIrcBi9Y1XUHHX65ZSOtCiiNPcJXslus9dW2S4nHVrly4xfvngB7n5vQW0Oafy6qK5d%2BUGm6bT61ZUq%2F%2Fbo2orfpy%2Br8eVFnZrlpm0VX9i84iqf3nLV3pNgukyTVheO0mR6GXHAF3ChcN7ueJeTNYoS77ZLZVpDYJbkzkeIXzezpu2Ko6oO3%2FSNKrzW0%2BQcvZYwSPp3h4hKMjkGR2Yf8HGlperE0YYbqUU4avr2uQjHxcsQCSNPF1EqwpBLpok7ghuMSUWoX4%2FzsLSGcQQRns8MF%2B1wDQXgJjhjOdQLRYqsT4Y4GGvsEEiCzzY9cLB1Lo8imjo6ZPF79zWBNYF2dN0nmTnQvGaqUVkkHwBzx3robwXJYmtF3i%2BjX2VG3dnBLd19%2BE1PH%2FLWJ2hPDGT7NHfX5DbK8B5amkRlx4X5wgOpEogRkZjMnmXPQYCr7dcaGD%2BG3BSR9pJLe5xtyFdcutStmcK0g7bB4OTO1mbSXVvR5hl%2Bl%2FF5imSDRNANpQ01bmxADjDA%2F6DLBjqkAVVBLhqAvwGWry6T4T2wNrSJcV0Jzyu7ZS6ba%2BD6LL0EGtLO3abaBpI2TXmINwEuKkbp4O%2BPqN%2FsudLNuyj3lxGd3UWnyEq0NwOtQv1Tnir3EuBgLCak%2BchMK6m9qGFJZcWLCnMaaqhgYTLYHrWGceijdMwTDYBQbZvNJIR%2FMlDbDqSwS9P2cnvUxhdtqYR4KIChc8YdGD5VyKW59PxqLJIQF8ru&X-Amz-Signature=0a0e5e6164488eb6690913ff5ccf38c6a262b14d0802d8bf6ec80e1da4183335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
