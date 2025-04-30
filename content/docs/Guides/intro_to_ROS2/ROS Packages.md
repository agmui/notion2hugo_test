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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHARTYME%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5aXMmRdgTBsCgkAYiHaTr%2FKlQ9yCnkbUMyyiuPLB56QIhAJpqSSY2BQmvisA2eGPXyiR%2F8lcrEnLu6mjLCa8w6KecKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQ0K9TOztSqtFNgwq3AOSIINjEdJWZnFso79%2F%2BpVd3LnIDqA2Bn8ypuNOQ1qp2RnQGi2tbQhgWXH5DUVsR%2BJpsYVEQkXd%2BV1TWMHnjdA%2F9xvouP%2BzAq%2Fe%2B%2FJAe8gJDlMgiiM1sAkaWqTPJYjCqsUwPKpsDAivbE2u%2FVP8h0dEVIupBHjkyjAYe3O1L0SD92rML%2BJ%2FtnbdC%2BVIXNpGkko1NwsoeuMyz7d56LL1tjbkfT38Q02ThT38Bx%2Bhs8vOg8dGeMZb7NiiXNJCGGmrtL6CQEi%2FNOMVgpsE023PV2sPtLObdQuK66J0qGLP86HR9tqdRN%2B9NRue4jMuGl7S5R4CYW%2Fv1N7opxALEYhNbLayjPX84s4WUy4tV2c56%2B%2FPWbyUiN%2FBZJpSU1CoJxY2q4DRqM7mqTfyf3Cflv5mzkKexIapNM7j6X31KgKPwbnZWGtdlUWOwiZaJRZYQD4XngnrPcyMgUOL4fQw5lD4J71Bz694DLiOta%2BREilR%2F4oY3qQ3VFthYV2zjg8wX0H9o4tM27ls47C22e6nWUr%2BmdAlx0eCJWsMpGXyVQFlf9uQBX5AumM8Le3wzaRrnkKieKx5FSIK9xduyouaQGBKUsQ0rLY0Zz8eo7qLve7RbagiotahyY5QSRVYl%2BE29jDA08nABjqkAceh5OU4I5ri6AtPRqXSMZ%2FaJHqZnGH7WKTiC32RtIr7%2FRYxtYq%2BwES5Z%2FoE7kSLx5%2BHUuG6fwlK0gokQwTJ5mpPImxvjxKdqmXJoPSsh%2BD%2FW4mwu%2FUncmd7WHQm4kV%2BLyHFQA3pyLQt5NVvFT5nmjzF8MrdfFY4qcLM44zxS2jP0kDveEv80JnPi%2BBHyJinGbqn%2BWVsL8W%2BWf6BIbK%2Fka%2Bs1CQC&X-Amz-Signature=524c834379819273cb03a63f4142e673ecc2af556f280e9d9d080ff4b50aebfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHARTYME%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5aXMmRdgTBsCgkAYiHaTr%2FKlQ9yCnkbUMyyiuPLB56QIhAJpqSSY2BQmvisA2eGPXyiR%2F8lcrEnLu6mjLCa8w6KecKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQ0K9TOztSqtFNgwq3AOSIINjEdJWZnFso79%2F%2BpVd3LnIDqA2Bn8ypuNOQ1qp2RnQGi2tbQhgWXH5DUVsR%2BJpsYVEQkXd%2BV1TWMHnjdA%2F9xvouP%2BzAq%2Fe%2B%2FJAe8gJDlMgiiM1sAkaWqTPJYjCqsUwPKpsDAivbE2u%2FVP8h0dEVIupBHjkyjAYe3O1L0SD92rML%2BJ%2FtnbdC%2BVIXNpGkko1NwsoeuMyz7d56LL1tjbkfT38Q02ThT38Bx%2Bhs8vOg8dGeMZb7NiiXNJCGGmrtL6CQEi%2FNOMVgpsE023PV2sPtLObdQuK66J0qGLP86HR9tqdRN%2B9NRue4jMuGl7S5R4CYW%2Fv1N7opxALEYhNbLayjPX84s4WUy4tV2c56%2B%2FPWbyUiN%2FBZJpSU1CoJxY2q4DRqM7mqTfyf3Cflv5mzkKexIapNM7j6X31KgKPwbnZWGtdlUWOwiZaJRZYQD4XngnrPcyMgUOL4fQw5lD4J71Bz694DLiOta%2BREilR%2F4oY3qQ3VFthYV2zjg8wX0H9o4tM27ls47C22e6nWUr%2BmdAlx0eCJWsMpGXyVQFlf9uQBX5AumM8Le3wzaRrnkKieKx5FSIK9xduyouaQGBKUsQ0rLY0Zz8eo7qLve7RbagiotahyY5QSRVYl%2BE29jDA08nABjqkAceh5OU4I5ri6AtPRqXSMZ%2FaJHqZnGH7WKTiC32RtIr7%2FRYxtYq%2BwES5Z%2FoE7kSLx5%2BHUuG6fwlK0gokQwTJ5mpPImxvjxKdqmXJoPSsh%2BD%2FW4mwu%2FUncmd7WHQm4kV%2BLyHFQA3pyLQt5NVvFT5nmjzF8MrdfFY4qcLM44zxS2jP0kDveEv80JnPi%2BBHyJinGbqn%2BWVsL8W%2BWf6BIbK%2Fka%2Bs1CQC&X-Amz-Signature=0a3119a2165850f996dea32a2f6bd4875ae68b56c9570b8a1362547e61f59819&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHARTYME%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5aXMmRdgTBsCgkAYiHaTr%2FKlQ9yCnkbUMyyiuPLB56QIhAJpqSSY2BQmvisA2eGPXyiR%2F8lcrEnLu6mjLCa8w6KecKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQ0K9TOztSqtFNgwq3AOSIINjEdJWZnFso79%2F%2BpVd3LnIDqA2Bn8ypuNOQ1qp2RnQGi2tbQhgWXH5DUVsR%2BJpsYVEQkXd%2BV1TWMHnjdA%2F9xvouP%2BzAq%2Fe%2B%2FJAe8gJDlMgiiM1sAkaWqTPJYjCqsUwPKpsDAivbE2u%2FVP8h0dEVIupBHjkyjAYe3O1L0SD92rML%2BJ%2FtnbdC%2BVIXNpGkko1NwsoeuMyz7d56LL1tjbkfT38Q02ThT38Bx%2Bhs8vOg8dGeMZb7NiiXNJCGGmrtL6CQEi%2FNOMVgpsE023PV2sPtLObdQuK66J0qGLP86HR9tqdRN%2B9NRue4jMuGl7S5R4CYW%2Fv1N7opxALEYhNbLayjPX84s4WUy4tV2c56%2B%2FPWbyUiN%2FBZJpSU1CoJxY2q4DRqM7mqTfyf3Cflv5mzkKexIapNM7j6X31KgKPwbnZWGtdlUWOwiZaJRZYQD4XngnrPcyMgUOL4fQw5lD4J71Bz694DLiOta%2BREilR%2F4oY3qQ3VFthYV2zjg8wX0H9o4tM27ls47C22e6nWUr%2BmdAlx0eCJWsMpGXyVQFlf9uQBX5AumM8Le3wzaRrnkKieKx5FSIK9xduyouaQGBKUsQ0rLY0Zz8eo7qLve7RbagiotahyY5QSRVYl%2BE29jDA08nABjqkAceh5OU4I5ri6AtPRqXSMZ%2FaJHqZnGH7WKTiC32RtIr7%2FRYxtYq%2BwES5Z%2FoE7kSLx5%2BHUuG6fwlK0gokQwTJ5mpPImxvjxKdqmXJoPSsh%2BD%2FW4mwu%2FUncmd7WHQm4kV%2BLyHFQA3pyLQt5NVvFT5nmjzF8MrdfFY4qcLM44zxS2jP0kDveEv80JnPi%2BBHyJinGbqn%2BWVsL8W%2BWf6BIbK%2Fka%2Bs1CQC&X-Amz-Signature=d562e280bf33c8185184bbfeefd4f186d1e4d3f73fd540b9daa47c950337773e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHARTYME%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5aXMmRdgTBsCgkAYiHaTr%2FKlQ9yCnkbUMyyiuPLB56QIhAJpqSSY2BQmvisA2eGPXyiR%2F8lcrEnLu6mjLCa8w6KecKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQ0K9TOztSqtFNgwq3AOSIINjEdJWZnFso79%2F%2BpVd3LnIDqA2Bn8ypuNOQ1qp2RnQGi2tbQhgWXH5DUVsR%2BJpsYVEQkXd%2BV1TWMHnjdA%2F9xvouP%2BzAq%2Fe%2B%2FJAe8gJDlMgiiM1sAkaWqTPJYjCqsUwPKpsDAivbE2u%2FVP8h0dEVIupBHjkyjAYe3O1L0SD92rML%2BJ%2FtnbdC%2BVIXNpGkko1NwsoeuMyz7d56LL1tjbkfT38Q02ThT38Bx%2Bhs8vOg8dGeMZb7NiiXNJCGGmrtL6CQEi%2FNOMVgpsE023PV2sPtLObdQuK66J0qGLP86HR9tqdRN%2B9NRue4jMuGl7S5R4CYW%2Fv1N7opxALEYhNbLayjPX84s4WUy4tV2c56%2B%2FPWbyUiN%2FBZJpSU1CoJxY2q4DRqM7mqTfyf3Cflv5mzkKexIapNM7j6X31KgKPwbnZWGtdlUWOwiZaJRZYQD4XngnrPcyMgUOL4fQw5lD4J71Bz694DLiOta%2BREilR%2F4oY3qQ3VFthYV2zjg8wX0H9o4tM27ls47C22e6nWUr%2BmdAlx0eCJWsMpGXyVQFlf9uQBX5AumM8Le3wzaRrnkKieKx5FSIK9xduyouaQGBKUsQ0rLY0Zz8eo7qLve7RbagiotahyY5QSRVYl%2BE29jDA08nABjqkAceh5OU4I5ri6AtPRqXSMZ%2FaJHqZnGH7WKTiC32RtIr7%2FRYxtYq%2BwES5Z%2FoE7kSLx5%2BHUuG6fwlK0gokQwTJ5mpPImxvjxKdqmXJoPSsh%2BD%2FW4mwu%2FUncmd7WHQm4kV%2BLyHFQA3pyLQt5NVvFT5nmjzF8MrdfFY4qcLM44zxS2jP0kDveEv80JnPi%2BBHyJinGbqn%2BWVsL8W%2BWf6BIbK%2Fka%2Bs1CQC&X-Amz-Signature=1bcf7f13c38e35d0c3dbb65268e377d3e5e7c981d28a54f039e2c4c69faaa426&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHARTYME%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5aXMmRdgTBsCgkAYiHaTr%2FKlQ9yCnkbUMyyiuPLB56QIhAJpqSSY2BQmvisA2eGPXyiR%2F8lcrEnLu6mjLCa8w6KecKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQ0K9TOztSqtFNgwq3AOSIINjEdJWZnFso79%2F%2BpVd3LnIDqA2Bn8ypuNOQ1qp2RnQGi2tbQhgWXH5DUVsR%2BJpsYVEQkXd%2BV1TWMHnjdA%2F9xvouP%2BzAq%2Fe%2B%2FJAe8gJDlMgiiM1sAkaWqTPJYjCqsUwPKpsDAivbE2u%2FVP8h0dEVIupBHjkyjAYe3O1L0SD92rML%2BJ%2FtnbdC%2BVIXNpGkko1NwsoeuMyz7d56LL1tjbkfT38Q02ThT38Bx%2Bhs8vOg8dGeMZb7NiiXNJCGGmrtL6CQEi%2FNOMVgpsE023PV2sPtLObdQuK66J0qGLP86HR9tqdRN%2B9NRue4jMuGl7S5R4CYW%2Fv1N7opxALEYhNbLayjPX84s4WUy4tV2c56%2B%2FPWbyUiN%2FBZJpSU1CoJxY2q4DRqM7mqTfyf3Cflv5mzkKexIapNM7j6X31KgKPwbnZWGtdlUWOwiZaJRZYQD4XngnrPcyMgUOL4fQw5lD4J71Bz694DLiOta%2BREilR%2F4oY3qQ3VFthYV2zjg8wX0H9o4tM27ls47C22e6nWUr%2BmdAlx0eCJWsMpGXyVQFlf9uQBX5AumM8Le3wzaRrnkKieKx5FSIK9xduyouaQGBKUsQ0rLY0Zz8eo7qLve7RbagiotahyY5QSRVYl%2BE29jDA08nABjqkAceh5OU4I5ri6AtPRqXSMZ%2FaJHqZnGH7WKTiC32RtIr7%2FRYxtYq%2BwES5Z%2FoE7kSLx5%2BHUuG6fwlK0gokQwTJ5mpPImxvjxKdqmXJoPSsh%2BD%2FW4mwu%2FUncmd7WHQm4kV%2BLyHFQA3pyLQt5NVvFT5nmjzF8MrdfFY4qcLM44zxS2jP0kDveEv80JnPi%2BBHyJinGbqn%2BWVsL8W%2BWf6BIbK%2Fka%2Bs1CQC&X-Amz-Signature=c9a23b5926636997bc71153a33ba778fd414dc4aea2d86936858c308fa6b1521&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHARTYME%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5aXMmRdgTBsCgkAYiHaTr%2FKlQ9yCnkbUMyyiuPLB56QIhAJpqSSY2BQmvisA2eGPXyiR%2F8lcrEnLu6mjLCa8w6KecKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQ0K9TOztSqtFNgwq3AOSIINjEdJWZnFso79%2F%2BpVd3LnIDqA2Bn8ypuNOQ1qp2RnQGi2tbQhgWXH5DUVsR%2BJpsYVEQkXd%2BV1TWMHnjdA%2F9xvouP%2BzAq%2Fe%2B%2FJAe8gJDlMgiiM1sAkaWqTPJYjCqsUwPKpsDAivbE2u%2FVP8h0dEVIupBHjkyjAYe3O1L0SD92rML%2BJ%2FtnbdC%2BVIXNpGkko1NwsoeuMyz7d56LL1tjbkfT38Q02ThT38Bx%2Bhs8vOg8dGeMZb7NiiXNJCGGmrtL6CQEi%2FNOMVgpsE023PV2sPtLObdQuK66J0qGLP86HR9tqdRN%2B9NRue4jMuGl7S5R4CYW%2Fv1N7opxALEYhNbLayjPX84s4WUy4tV2c56%2B%2FPWbyUiN%2FBZJpSU1CoJxY2q4DRqM7mqTfyf3Cflv5mzkKexIapNM7j6X31KgKPwbnZWGtdlUWOwiZaJRZYQD4XngnrPcyMgUOL4fQw5lD4J71Bz694DLiOta%2BREilR%2F4oY3qQ3VFthYV2zjg8wX0H9o4tM27ls47C22e6nWUr%2BmdAlx0eCJWsMpGXyVQFlf9uQBX5AumM8Le3wzaRrnkKieKx5FSIK9xduyouaQGBKUsQ0rLY0Zz8eo7qLve7RbagiotahyY5QSRVYl%2BE29jDA08nABjqkAceh5OU4I5ri6AtPRqXSMZ%2FaJHqZnGH7WKTiC32RtIr7%2FRYxtYq%2BwES5Z%2FoE7kSLx5%2BHUuG6fwlK0gokQwTJ5mpPImxvjxKdqmXJoPSsh%2BD%2FW4mwu%2FUncmd7WHQm4kV%2BLyHFQA3pyLQt5NVvFT5nmjzF8MrdfFY4qcLM44zxS2jP0kDveEv80JnPi%2BBHyJinGbqn%2BWVsL8W%2BWf6BIbK%2Fka%2Bs1CQC&X-Amz-Signature=2a1b69685bbce22c805a504c05dfe719410e66c2456f4f86cc8dc71dcab1dee2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHARTYME%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5aXMmRdgTBsCgkAYiHaTr%2FKlQ9yCnkbUMyyiuPLB56QIhAJpqSSY2BQmvisA2eGPXyiR%2F8lcrEnLu6mjLCa8w6KecKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYQ0K9TOztSqtFNgwq3AOSIINjEdJWZnFso79%2F%2BpVd3LnIDqA2Bn8ypuNOQ1qp2RnQGi2tbQhgWXH5DUVsR%2BJpsYVEQkXd%2BV1TWMHnjdA%2F9xvouP%2BzAq%2Fe%2B%2FJAe8gJDlMgiiM1sAkaWqTPJYjCqsUwPKpsDAivbE2u%2FVP8h0dEVIupBHjkyjAYe3O1L0SD92rML%2BJ%2FtnbdC%2BVIXNpGkko1NwsoeuMyz7d56LL1tjbkfT38Q02ThT38Bx%2Bhs8vOg8dGeMZb7NiiXNJCGGmrtL6CQEi%2FNOMVgpsE023PV2sPtLObdQuK66J0qGLP86HR9tqdRN%2B9NRue4jMuGl7S5R4CYW%2Fv1N7opxALEYhNbLayjPX84s4WUy4tV2c56%2B%2FPWbyUiN%2FBZJpSU1CoJxY2q4DRqM7mqTfyf3Cflv5mzkKexIapNM7j6X31KgKPwbnZWGtdlUWOwiZaJRZYQD4XngnrPcyMgUOL4fQw5lD4J71Bz694DLiOta%2BREilR%2F4oY3qQ3VFthYV2zjg8wX0H9o4tM27ls47C22e6nWUr%2BmdAlx0eCJWsMpGXyVQFlf9uQBX5AumM8Le3wzaRrnkKieKx5FSIK9xduyouaQGBKUsQ0rLY0Zz8eo7qLve7RbagiotahyY5QSRVYl%2BE29jDA08nABjqkAceh5OU4I5ri6AtPRqXSMZ%2FaJHqZnGH7WKTiC32RtIr7%2FRYxtYq%2BwES5Z%2FoE7kSLx5%2BHUuG6fwlK0gokQwTJ5mpPImxvjxKdqmXJoPSsh%2BD%2FW4mwu%2FUncmd7WHQm4kV%2BLyHFQA3pyLQt5NVvFT5nmjzF8MrdfFY4qcLM44zxS2jP0kDveEv80JnPi%2BBHyJinGbqn%2BWVsL8W%2BWf6BIbK%2Fka%2Bs1CQC&X-Amz-Signature=272de12cc9b62ed2665f611ed899226217ed67eb74c158506893a72581ae96f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
