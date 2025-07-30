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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POR33OR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJogVWKeL0hE7fZmBq3Mi1b7WfyV2YHWQJf76%2FyYnkgAiAGnmY1NU1S3jSMr66iwoFCrcLLMaIMxbXTYfd8CVBkDCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrONTXBSA1%2BJWD6aIKtwDr1Ko9tmdVaf2Ja4Rp6t%2Bc7lICkPCTjwWQcM3WqyqkSkCyZx9FArafjW3kKRWZBkBG5Sp3JwyEsy%2B%2BpdJ4HyToXbCB%2B1rXBcXDC2XIJsDxFMH4PgACMYun%2FtC9eVO4SBwYpAJ9UIKX13jzg4HHvYdDshrSGgfj7LM%2FbIgbjJp854PJsYI8f5gPdPrAhMH1fehqG9m1E5F97qGGU01gHTaFG02aySQC9upW5sQMFqk578CysKO%2BJ4o5d26db27L6udz8CJxmYHwLdVvZwxzjzBSMM0o125RZMX%2B0PAn63AdUIXzX2IqOP2xcb%2BaQfEsgL07ldu%2FMiicLWygXgUxF742c8I%2BsAM7%2FCEVQBZFYomuOgpG9PgJoaWI51i8aoARdIc32GvF4e5Z95RfRGnHUayKR9GehsC74MIKftJl9TTExTOtrFDW1AP0gO4%2F7Xya8wOjwVFQH4do72psIIeVrJWNnCnmjcNGYzvjRUVENKQQ5xivmFkLR72c6qpAH6ETcVos8S5YpjH8faC4rRGhMnRflLvDrCZ3QgpZNh9dzGi8ZBvJAooq4nLc8XEM%2BpBL33JsCCkuCwPFylR9BzERur3M6vrU6lkcvSgwg6lxvTIw%2FFwfhg%2By9djgEwiG%2F0w4%2FKlxAY6pgEz%2BYXpI%2BWytXu6eCt2y5KRJDGgUtyvOog3PF%2FZsPNw%2FJoFgjxiiZ2JJLtYrxdej274ydAoWsQsecr1g2%2BXmLPGhRpqiV4ZsqIqp1VnQgafAsOfzKhxO577XyKoAaa9Lj2rmC8MoSS87flWzFDSBmA5pCioRVKbwky366RAk2W8R%2FNUZmXnEb%2F2Z80JyQWaVnyvq0M4EnRAzosoIhtkiNSZJLqB5Eoj&X-Amz-Signature=fdd776352e06461885d393fa6da9144d8aae2d36622cab3ffb28837f774994bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POR33OR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJogVWKeL0hE7fZmBq3Mi1b7WfyV2YHWQJf76%2FyYnkgAiAGnmY1NU1S3jSMr66iwoFCrcLLMaIMxbXTYfd8CVBkDCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrONTXBSA1%2BJWD6aIKtwDr1Ko9tmdVaf2Ja4Rp6t%2Bc7lICkPCTjwWQcM3WqyqkSkCyZx9FArafjW3kKRWZBkBG5Sp3JwyEsy%2B%2BpdJ4HyToXbCB%2B1rXBcXDC2XIJsDxFMH4PgACMYun%2FtC9eVO4SBwYpAJ9UIKX13jzg4HHvYdDshrSGgfj7LM%2FbIgbjJp854PJsYI8f5gPdPrAhMH1fehqG9m1E5F97qGGU01gHTaFG02aySQC9upW5sQMFqk578CysKO%2BJ4o5d26db27L6udz8CJxmYHwLdVvZwxzjzBSMM0o125RZMX%2B0PAn63AdUIXzX2IqOP2xcb%2BaQfEsgL07ldu%2FMiicLWygXgUxF742c8I%2BsAM7%2FCEVQBZFYomuOgpG9PgJoaWI51i8aoARdIc32GvF4e5Z95RfRGnHUayKR9GehsC74MIKftJl9TTExTOtrFDW1AP0gO4%2F7Xya8wOjwVFQH4do72psIIeVrJWNnCnmjcNGYzvjRUVENKQQ5xivmFkLR72c6qpAH6ETcVos8S5YpjH8faC4rRGhMnRflLvDrCZ3QgpZNh9dzGi8ZBvJAooq4nLc8XEM%2BpBL33JsCCkuCwPFylR9BzERur3M6vrU6lkcvSgwg6lxvTIw%2FFwfhg%2By9djgEwiG%2F0w4%2FKlxAY6pgEz%2BYXpI%2BWytXu6eCt2y5KRJDGgUtyvOog3PF%2FZsPNw%2FJoFgjxiiZ2JJLtYrxdej274ydAoWsQsecr1g2%2BXmLPGhRpqiV4ZsqIqp1VnQgafAsOfzKhxO577XyKoAaa9Lj2rmC8MoSS87flWzFDSBmA5pCioRVKbwky366RAk2W8R%2FNUZmXnEb%2F2Z80JyQWaVnyvq0M4EnRAzosoIhtkiNSZJLqB5Eoj&X-Amz-Signature=7f72c0dbf30cda47159b4fff497cfbb976a4a13a143c436a94a9a57635fb7727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POR33OR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJogVWKeL0hE7fZmBq3Mi1b7WfyV2YHWQJf76%2FyYnkgAiAGnmY1NU1S3jSMr66iwoFCrcLLMaIMxbXTYfd8CVBkDCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrONTXBSA1%2BJWD6aIKtwDr1Ko9tmdVaf2Ja4Rp6t%2Bc7lICkPCTjwWQcM3WqyqkSkCyZx9FArafjW3kKRWZBkBG5Sp3JwyEsy%2B%2BpdJ4HyToXbCB%2B1rXBcXDC2XIJsDxFMH4PgACMYun%2FtC9eVO4SBwYpAJ9UIKX13jzg4HHvYdDshrSGgfj7LM%2FbIgbjJp854PJsYI8f5gPdPrAhMH1fehqG9m1E5F97qGGU01gHTaFG02aySQC9upW5sQMFqk578CysKO%2BJ4o5d26db27L6udz8CJxmYHwLdVvZwxzjzBSMM0o125RZMX%2B0PAn63AdUIXzX2IqOP2xcb%2BaQfEsgL07ldu%2FMiicLWygXgUxF742c8I%2BsAM7%2FCEVQBZFYomuOgpG9PgJoaWI51i8aoARdIc32GvF4e5Z95RfRGnHUayKR9GehsC74MIKftJl9TTExTOtrFDW1AP0gO4%2F7Xya8wOjwVFQH4do72psIIeVrJWNnCnmjcNGYzvjRUVENKQQ5xivmFkLR72c6qpAH6ETcVos8S5YpjH8faC4rRGhMnRflLvDrCZ3QgpZNh9dzGi8ZBvJAooq4nLc8XEM%2BpBL33JsCCkuCwPFylR9BzERur3M6vrU6lkcvSgwg6lxvTIw%2FFwfhg%2By9djgEwiG%2F0w4%2FKlxAY6pgEz%2BYXpI%2BWytXu6eCt2y5KRJDGgUtyvOog3PF%2FZsPNw%2FJoFgjxiiZ2JJLtYrxdej274ydAoWsQsecr1g2%2BXmLPGhRpqiV4ZsqIqp1VnQgafAsOfzKhxO577XyKoAaa9Lj2rmC8MoSS87flWzFDSBmA5pCioRVKbwky366RAk2W8R%2FNUZmXnEb%2F2Z80JyQWaVnyvq0M4EnRAzosoIhtkiNSZJLqB5Eoj&X-Amz-Signature=ab1d09d92b970f0ff05b662eed0e41764489a9b2696c3361cc859518344fdcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POR33OR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJogVWKeL0hE7fZmBq3Mi1b7WfyV2YHWQJf76%2FyYnkgAiAGnmY1NU1S3jSMr66iwoFCrcLLMaIMxbXTYfd8CVBkDCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrONTXBSA1%2BJWD6aIKtwDr1Ko9tmdVaf2Ja4Rp6t%2Bc7lICkPCTjwWQcM3WqyqkSkCyZx9FArafjW3kKRWZBkBG5Sp3JwyEsy%2B%2BpdJ4HyToXbCB%2B1rXBcXDC2XIJsDxFMH4PgACMYun%2FtC9eVO4SBwYpAJ9UIKX13jzg4HHvYdDshrSGgfj7LM%2FbIgbjJp854PJsYI8f5gPdPrAhMH1fehqG9m1E5F97qGGU01gHTaFG02aySQC9upW5sQMFqk578CysKO%2BJ4o5d26db27L6udz8CJxmYHwLdVvZwxzjzBSMM0o125RZMX%2B0PAn63AdUIXzX2IqOP2xcb%2BaQfEsgL07ldu%2FMiicLWygXgUxF742c8I%2BsAM7%2FCEVQBZFYomuOgpG9PgJoaWI51i8aoARdIc32GvF4e5Z95RfRGnHUayKR9GehsC74MIKftJl9TTExTOtrFDW1AP0gO4%2F7Xya8wOjwVFQH4do72psIIeVrJWNnCnmjcNGYzvjRUVENKQQ5xivmFkLR72c6qpAH6ETcVos8S5YpjH8faC4rRGhMnRflLvDrCZ3QgpZNh9dzGi8ZBvJAooq4nLc8XEM%2BpBL33JsCCkuCwPFylR9BzERur3M6vrU6lkcvSgwg6lxvTIw%2FFwfhg%2By9djgEwiG%2F0w4%2FKlxAY6pgEz%2BYXpI%2BWytXu6eCt2y5KRJDGgUtyvOog3PF%2FZsPNw%2FJoFgjxiiZ2JJLtYrxdej274ydAoWsQsecr1g2%2BXmLPGhRpqiV4ZsqIqp1VnQgafAsOfzKhxO577XyKoAaa9Lj2rmC8MoSS87flWzFDSBmA5pCioRVKbwky366RAk2W8R%2FNUZmXnEb%2F2Z80JyQWaVnyvq0M4EnRAzosoIhtkiNSZJLqB5Eoj&X-Amz-Signature=33d22fef0bbd9a6da09c0ec789323865214e8496a47ccc9d9bbf548fd5c84ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POR33OR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJogVWKeL0hE7fZmBq3Mi1b7WfyV2YHWQJf76%2FyYnkgAiAGnmY1NU1S3jSMr66iwoFCrcLLMaIMxbXTYfd8CVBkDCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrONTXBSA1%2BJWD6aIKtwDr1Ko9tmdVaf2Ja4Rp6t%2Bc7lICkPCTjwWQcM3WqyqkSkCyZx9FArafjW3kKRWZBkBG5Sp3JwyEsy%2B%2BpdJ4HyToXbCB%2B1rXBcXDC2XIJsDxFMH4PgACMYun%2FtC9eVO4SBwYpAJ9UIKX13jzg4HHvYdDshrSGgfj7LM%2FbIgbjJp854PJsYI8f5gPdPrAhMH1fehqG9m1E5F97qGGU01gHTaFG02aySQC9upW5sQMFqk578CysKO%2BJ4o5d26db27L6udz8CJxmYHwLdVvZwxzjzBSMM0o125RZMX%2B0PAn63AdUIXzX2IqOP2xcb%2BaQfEsgL07ldu%2FMiicLWygXgUxF742c8I%2BsAM7%2FCEVQBZFYomuOgpG9PgJoaWI51i8aoARdIc32GvF4e5Z95RfRGnHUayKR9GehsC74MIKftJl9TTExTOtrFDW1AP0gO4%2F7Xya8wOjwVFQH4do72psIIeVrJWNnCnmjcNGYzvjRUVENKQQ5xivmFkLR72c6qpAH6ETcVos8S5YpjH8faC4rRGhMnRflLvDrCZ3QgpZNh9dzGi8ZBvJAooq4nLc8XEM%2BpBL33JsCCkuCwPFylR9BzERur3M6vrU6lkcvSgwg6lxvTIw%2FFwfhg%2By9djgEwiG%2F0w4%2FKlxAY6pgEz%2BYXpI%2BWytXu6eCt2y5KRJDGgUtyvOog3PF%2FZsPNw%2FJoFgjxiiZ2JJLtYrxdej274ydAoWsQsecr1g2%2BXmLPGhRpqiV4ZsqIqp1VnQgafAsOfzKhxO577XyKoAaa9Lj2rmC8MoSS87flWzFDSBmA5pCioRVKbwky366RAk2W8R%2FNUZmXnEb%2F2Z80JyQWaVnyvq0M4EnRAzosoIhtkiNSZJLqB5Eoj&X-Amz-Signature=8f66f4e431e80e9ed7895ebef0fac046003dd85a0ba4c118d280844f7f306a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POR33OR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJogVWKeL0hE7fZmBq3Mi1b7WfyV2YHWQJf76%2FyYnkgAiAGnmY1NU1S3jSMr66iwoFCrcLLMaIMxbXTYfd8CVBkDCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrONTXBSA1%2BJWD6aIKtwDr1Ko9tmdVaf2Ja4Rp6t%2Bc7lICkPCTjwWQcM3WqyqkSkCyZx9FArafjW3kKRWZBkBG5Sp3JwyEsy%2B%2BpdJ4HyToXbCB%2B1rXBcXDC2XIJsDxFMH4PgACMYun%2FtC9eVO4SBwYpAJ9UIKX13jzg4HHvYdDshrSGgfj7LM%2FbIgbjJp854PJsYI8f5gPdPrAhMH1fehqG9m1E5F97qGGU01gHTaFG02aySQC9upW5sQMFqk578CysKO%2BJ4o5d26db27L6udz8CJxmYHwLdVvZwxzjzBSMM0o125RZMX%2B0PAn63AdUIXzX2IqOP2xcb%2BaQfEsgL07ldu%2FMiicLWygXgUxF742c8I%2BsAM7%2FCEVQBZFYomuOgpG9PgJoaWI51i8aoARdIc32GvF4e5Z95RfRGnHUayKR9GehsC74MIKftJl9TTExTOtrFDW1AP0gO4%2F7Xya8wOjwVFQH4do72psIIeVrJWNnCnmjcNGYzvjRUVENKQQ5xivmFkLR72c6qpAH6ETcVos8S5YpjH8faC4rRGhMnRflLvDrCZ3QgpZNh9dzGi8ZBvJAooq4nLc8XEM%2BpBL33JsCCkuCwPFylR9BzERur3M6vrU6lkcvSgwg6lxvTIw%2FFwfhg%2By9djgEwiG%2F0w4%2FKlxAY6pgEz%2BYXpI%2BWytXu6eCt2y5KRJDGgUtyvOog3PF%2FZsPNw%2FJoFgjxiiZ2JJLtYrxdej274ydAoWsQsecr1g2%2BXmLPGhRpqiV4ZsqIqp1VnQgafAsOfzKhxO577XyKoAaa9Lj2rmC8MoSS87flWzFDSBmA5pCioRVKbwky366RAk2W8R%2FNUZmXnEb%2F2Z80JyQWaVnyvq0M4EnRAzosoIhtkiNSZJLqB5Eoj&X-Amz-Signature=5444d1ff5d1a134444343a42854c97f7b9966499e1519bda3c872173dab19bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POR33OR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJogVWKeL0hE7fZmBq3Mi1b7WfyV2YHWQJf76%2FyYnkgAiAGnmY1NU1S3jSMr66iwoFCrcLLMaIMxbXTYfd8CVBkDCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrONTXBSA1%2BJWD6aIKtwDr1Ko9tmdVaf2Ja4Rp6t%2Bc7lICkPCTjwWQcM3WqyqkSkCyZx9FArafjW3kKRWZBkBG5Sp3JwyEsy%2B%2BpdJ4HyToXbCB%2B1rXBcXDC2XIJsDxFMH4PgACMYun%2FtC9eVO4SBwYpAJ9UIKX13jzg4HHvYdDshrSGgfj7LM%2FbIgbjJp854PJsYI8f5gPdPrAhMH1fehqG9m1E5F97qGGU01gHTaFG02aySQC9upW5sQMFqk578CysKO%2BJ4o5d26db27L6udz8CJxmYHwLdVvZwxzjzBSMM0o125RZMX%2B0PAn63AdUIXzX2IqOP2xcb%2BaQfEsgL07ldu%2FMiicLWygXgUxF742c8I%2BsAM7%2FCEVQBZFYomuOgpG9PgJoaWI51i8aoARdIc32GvF4e5Z95RfRGnHUayKR9GehsC74MIKftJl9TTExTOtrFDW1AP0gO4%2F7Xya8wOjwVFQH4do72psIIeVrJWNnCnmjcNGYzvjRUVENKQQ5xivmFkLR72c6qpAH6ETcVos8S5YpjH8faC4rRGhMnRflLvDrCZ3QgpZNh9dzGi8ZBvJAooq4nLc8XEM%2BpBL33JsCCkuCwPFylR9BzERur3M6vrU6lkcvSgwg6lxvTIw%2FFwfhg%2By9djgEwiG%2F0w4%2FKlxAY6pgEz%2BYXpI%2BWytXu6eCt2y5KRJDGgUtyvOog3PF%2FZsPNw%2FJoFgjxiiZ2JJLtYrxdej274ydAoWsQsecr1g2%2BXmLPGhRpqiV4ZsqIqp1VnQgafAsOfzKhxO577XyKoAaa9Lj2rmC8MoSS87flWzFDSBmA5pCioRVKbwky366RAk2W8R%2FNUZmXnEb%2F2Z80JyQWaVnyvq0M4EnRAzosoIhtkiNSZJLqB5Eoj&X-Amz-Signature=0261be8bc4837b933965ffd5f7c29331cdb31e990530006e9e7971863cab4cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
