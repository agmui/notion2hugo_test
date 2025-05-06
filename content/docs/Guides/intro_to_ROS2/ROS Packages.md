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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNZ7GFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaKN5tP3ZfG%2FT9LwHG9GhRLdEz%2FqS%2BB1wcEh1y0hdhXgIhAOcUnhaPLa7cngLwLJkqqwQSIdtEU%2BAp2qoGE87zWqJaKv8DCEAQABoMNjM3NDIzMTgzODA1IgwRXkdOXpBtxqi%2BYD0q3ANmg7AklK44w4woz3tXUmYRFmK75v3w3aOucKymbA%2F5CPybyxMci1QAItMyEAXJO5JXv%2BpFms0hEWnFQ7AyAe4H%2BOffYQlPjzBHQS799dXNlHHjGbseGqpwkPN5D5r8VhV%2B3EIDFUuVw0un1YHAF6Ctt2U3A0mBY%2FH3dxaBUoL%2Bp0%2BpoAUNdwPNj9UcDO7ua2Fjgv%2FE%2Fc7vcNvViWS7o9lE7aq4dSzjncWCPxldLECrcMaPsBVIOjxrcCg0QefUcmrmmVubiNMVjzRk6uxr16I1zEWxttFbKUmM5PEGIIRRIFpifpA8YAm7sxAREIOeX1dMHZfYB4kzTtlV3OroRiFQ%2BO7Va2adu8v7s5ZCy6E%2B84hEU8tqSzjC47TS%2B3pHtS%2F9FTYhIXIkWt2HzRV5pDpDmbw7ML6tQRNEqfZLtIorninof%2BtmjWtY9e1iPjnbjVOp89xt93toFuwhSiYf1pTj0RuGbkGFMDHBZ5pgSxAM4rs39g%2F%2BMMGFLmxSjopQcS%2FzWiltT45fLXP8NS9hS3b%2B1ctgs1n4AVqpHdNBpiG1s3CBKG0uQ7xpVCF6O0s3JCpENGGgeR8hRd6czdDkG76CtdE7ZZVFpmwKQMwQohlvePBOH0haTJBlp05QbDC88ObABjqkAUoYxVqdwWWocsVP5VnhOD2YyP7xEmNTZigwddYzQxuymIbSiv5WTcor6prL%2FNkl46d69yx0zE%2FcDl9eY4FmQd9pP%2B7%2Fx9aYOHy6KYDGp9UvWEu427EZUOZByGdJQrBdMal3JuPPYu%2BucHGO8Cq8olb%2FUqtzKOFG6p%2BJO%2BohcjYAsIxAUUawk6ayg9Xd9rHqtXFhm2jvHX5EQTOlOny6I7epFghk&X-Amz-Signature=2cad806865af211a99d4805564ed55733906f24887d1f2a017162a7003709701&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNZ7GFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaKN5tP3ZfG%2FT9LwHG9GhRLdEz%2FqS%2BB1wcEh1y0hdhXgIhAOcUnhaPLa7cngLwLJkqqwQSIdtEU%2BAp2qoGE87zWqJaKv8DCEAQABoMNjM3NDIzMTgzODA1IgwRXkdOXpBtxqi%2BYD0q3ANmg7AklK44w4woz3tXUmYRFmK75v3w3aOucKymbA%2F5CPybyxMci1QAItMyEAXJO5JXv%2BpFms0hEWnFQ7AyAe4H%2BOffYQlPjzBHQS799dXNlHHjGbseGqpwkPN5D5r8VhV%2B3EIDFUuVw0un1YHAF6Ctt2U3A0mBY%2FH3dxaBUoL%2Bp0%2BpoAUNdwPNj9UcDO7ua2Fjgv%2FE%2Fc7vcNvViWS7o9lE7aq4dSzjncWCPxldLECrcMaPsBVIOjxrcCg0QefUcmrmmVubiNMVjzRk6uxr16I1zEWxttFbKUmM5PEGIIRRIFpifpA8YAm7sxAREIOeX1dMHZfYB4kzTtlV3OroRiFQ%2BO7Va2adu8v7s5ZCy6E%2B84hEU8tqSzjC47TS%2B3pHtS%2F9FTYhIXIkWt2HzRV5pDpDmbw7ML6tQRNEqfZLtIorninof%2BtmjWtY9e1iPjnbjVOp89xt93toFuwhSiYf1pTj0RuGbkGFMDHBZ5pgSxAM4rs39g%2F%2BMMGFLmxSjopQcS%2FzWiltT45fLXP8NS9hS3b%2B1ctgs1n4AVqpHdNBpiG1s3CBKG0uQ7xpVCF6O0s3JCpENGGgeR8hRd6czdDkG76CtdE7ZZVFpmwKQMwQohlvePBOH0haTJBlp05QbDC88ObABjqkAUoYxVqdwWWocsVP5VnhOD2YyP7xEmNTZigwddYzQxuymIbSiv5WTcor6prL%2FNkl46d69yx0zE%2FcDl9eY4FmQd9pP%2B7%2Fx9aYOHy6KYDGp9UvWEu427EZUOZByGdJQrBdMal3JuPPYu%2BucHGO8Cq8olb%2FUqtzKOFG6p%2BJO%2BohcjYAsIxAUUawk6ayg9Xd9rHqtXFhm2jvHX5EQTOlOny6I7epFghk&X-Amz-Signature=5e6de12226783c3aaeb1f7e44350a7b244e31bc9079c5b243af022121d5584f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNZ7GFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaKN5tP3ZfG%2FT9LwHG9GhRLdEz%2FqS%2BB1wcEh1y0hdhXgIhAOcUnhaPLa7cngLwLJkqqwQSIdtEU%2BAp2qoGE87zWqJaKv8DCEAQABoMNjM3NDIzMTgzODA1IgwRXkdOXpBtxqi%2BYD0q3ANmg7AklK44w4woz3tXUmYRFmK75v3w3aOucKymbA%2F5CPybyxMci1QAItMyEAXJO5JXv%2BpFms0hEWnFQ7AyAe4H%2BOffYQlPjzBHQS799dXNlHHjGbseGqpwkPN5D5r8VhV%2B3EIDFUuVw0un1YHAF6Ctt2U3A0mBY%2FH3dxaBUoL%2Bp0%2BpoAUNdwPNj9UcDO7ua2Fjgv%2FE%2Fc7vcNvViWS7o9lE7aq4dSzjncWCPxldLECrcMaPsBVIOjxrcCg0QefUcmrmmVubiNMVjzRk6uxr16I1zEWxttFbKUmM5PEGIIRRIFpifpA8YAm7sxAREIOeX1dMHZfYB4kzTtlV3OroRiFQ%2BO7Va2adu8v7s5ZCy6E%2B84hEU8tqSzjC47TS%2B3pHtS%2F9FTYhIXIkWt2HzRV5pDpDmbw7ML6tQRNEqfZLtIorninof%2BtmjWtY9e1iPjnbjVOp89xt93toFuwhSiYf1pTj0RuGbkGFMDHBZ5pgSxAM4rs39g%2F%2BMMGFLmxSjopQcS%2FzWiltT45fLXP8NS9hS3b%2B1ctgs1n4AVqpHdNBpiG1s3CBKG0uQ7xpVCF6O0s3JCpENGGgeR8hRd6czdDkG76CtdE7ZZVFpmwKQMwQohlvePBOH0haTJBlp05QbDC88ObABjqkAUoYxVqdwWWocsVP5VnhOD2YyP7xEmNTZigwddYzQxuymIbSiv5WTcor6prL%2FNkl46d69yx0zE%2FcDl9eY4FmQd9pP%2B7%2Fx9aYOHy6KYDGp9UvWEu427EZUOZByGdJQrBdMal3JuPPYu%2BucHGO8Cq8olb%2FUqtzKOFG6p%2BJO%2BohcjYAsIxAUUawk6ayg9Xd9rHqtXFhm2jvHX5EQTOlOny6I7epFghk&X-Amz-Signature=0509a092e012d5d0e69c097f4a27b3c50e44fd436d4c14db241990e3bc9f5711&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNZ7GFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaKN5tP3ZfG%2FT9LwHG9GhRLdEz%2FqS%2BB1wcEh1y0hdhXgIhAOcUnhaPLa7cngLwLJkqqwQSIdtEU%2BAp2qoGE87zWqJaKv8DCEAQABoMNjM3NDIzMTgzODA1IgwRXkdOXpBtxqi%2BYD0q3ANmg7AklK44w4woz3tXUmYRFmK75v3w3aOucKymbA%2F5CPybyxMci1QAItMyEAXJO5JXv%2BpFms0hEWnFQ7AyAe4H%2BOffYQlPjzBHQS799dXNlHHjGbseGqpwkPN5D5r8VhV%2B3EIDFUuVw0un1YHAF6Ctt2U3A0mBY%2FH3dxaBUoL%2Bp0%2BpoAUNdwPNj9UcDO7ua2Fjgv%2FE%2Fc7vcNvViWS7o9lE7aq4dSzjncWCPxldLECrcMaPsBVIOjxrcCg0QefUcmrmmVubiNMVjzRk6uxr16I1zEWxttFbKUmM5PEGIIRRIFpifpA8YAm7sxAREIOeX1dMHZfYB4kzTtlV3OroRiFQ%2BO7Va2adu8v7s5ZCy6E%2B84hEU8tqSzjC47TS%2B3pHtS%2F9FTYhIXIkWt2HzRV5pDpDmbw7ML6tQRNEqfZLtIorninof%2BtmjWtY9e1iPjnbjVOp89xt93toFuwhSiYf1pTj0RuGbkGFMDHBZ5pgSxAM4rs39g%2F%2BMMGFLmxSjopQcS%2FzWiltT45fLXP8NS9hS3b%2B1ctgs1n4AVqpHdNBpiG1s3CBKG0uQ7xpVCF6O0s3JCpENGGgeR8hRd6czdDkG76CtdE7ZZVFpmwKQMwQohlvePBOH0haTJBlp05QbDC88ObABjqkAUoYxVqdwWWocsVP5VnhOD2YyP7xEmNTZigwddYzQxuymIbSiv5WTcor6prL%2FNkl46d69yx0zE%2FcDl9eY4FmQd9pP%2B7%2Fx9aYOHy6KYDGp9UvWEu427EZUOZByGdJQrBdMal3JuPPYu%2BucHGO8Cq8olb%2FUqtzKOFG6p%2BJO%2BohcjYAsIxAUUawk6ayg9Xd9rHqtXFhm2jvHX5EQTOlOny6I7epFghk&X-Amz-Signature=5d436eedb558b41e9da99c1187816c83d6aba1d123cc7979f576c42ccaa4c7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNZ7GFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaKN5tP3ZfG%2FT9LwHG9GhRLdEz%2FqS%2BB1wcEh1y0hdhXgIhAOcUnhaPLa7cngLwLJkqqwQSIdtEU%2BAp2qoGE87zWqJaKv8DCEAQABoMNjM3NDIzMTgzODA1IgwRXkdOXpBtxqi%2BYD0q3ANmg7AklK44w4woz3tXUmYRFmK75v3w3aOucKymbA%2F5CPybyxMci1QAItMyEAXJO5JXv%2BpFms0hEWnFQ7AyAe4H%2BOffYQlPjzBHQS799dXNlHHjGbseGqpwkPN5D5r8VhV%2B3EIDFUuVw0un1YHAF6Ctt2U3A0mBY%2FH3dxaBUoL%2Bp0%2BpoAUNdwPNj9UcDO7ua2Fjgv%2FE%2Fc7vcNvViWS7o9lE7aq4dSzjncWCPxldLECrcMaPsBVIOjxrcCg0QefUcmrmmVubiNMVjzRk6uxr16I1zEWxttFbKUmM5PEGIIRRIFpifpA8YAm7sxAREIOeX1dMHZfYB4kzTtlV3OroRiFQ%2BO7Va2adu8v7s5ZCy6E%2B84hEU8tqSzjC47TS%2B3pHtS%2F9FTYhIXIkWt2HzRV5pDpDmbw7ML6tQRNEqfZLtIorninof%2BtmjWtY9e1iPjnbjVOp89xt93toFuwhSiYf1pTj0RuGbkGFMDHBZ5pgSxAM4rs39g%2F%2BMMGFLmxSjopQcS%2FzWiltT45fLXP8NS9hS3b%2B1ctgs1n4AVqpHdNBpiG1s3CBKG0uQ7xpVCF6O0s3JCpENGGgeR8hRd6czdDkG76CtdE7ZZVFpmwKQMwQohlvePBOH0haTJBlp05QbDC88ObABjqkAUoYxVqdwWWocsVP5VnhOD2YyP7xEmNTZigwddYzQxuymIbSiv5WTcor6prL%2FNkl46d69yx0zE%2FcDl9eY4FmQd9pP%2B7%2Fx9aYOHy6KYDGp9UvWEu427EZUOZByGdJQrBdMal3JuPPYu%2BucHGO8Cq8olb%2FUqtzKOFG6p%2BJO%2BohcjYAsIxAUUawk6ayg9Xd9rHqtXFhm2jvHX5EQTOlOny6I7epFghk&X-Amz-Signature=2239cb22a11e0e959aa44b6eee43bd9207b2bd466d81f19b31489431ffe76719&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNZ7GFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaKN5tP3ZfG%2FT9LwHG9GhRLdEz%2FqS%2BB1wcEh1y0hdhXgIhAOcUnhaPLa7cngLwLJkqqwQSIdtEU%2BAp2qoGE87zWqJaKv8DCEAQABoMNjM3NDIzMTgzODA1IgwRXkdOXpBtxqi%2BYD0q3ANmg7AklK44w4woz3tXUmYRFmK75v3w3aOucKymbA%2F5CPybyxMci1QAItMyEAXJO5JXv%2BpFms0hEWnFQ7AyAe4H%2BOffYQlPjzBHQS799dXNlHHjGbseGqpwkPN5D5r8VhV%2B3EIDFUuVw0un1YHAF6Ctt2U3A0mBY%2FH3dxaBUoL%2Bp0%2BpoAUNdwPNj9UcDO7ua2Fjgv%2FE%2Fc7vcNvViWS7o9lE7aq4dSzjncWCPxldLECrcMaPsBVIOjxrcCg0QefUcmrmmVubiNMVjzRk6uxr16I1zEWxttFbKUmM5PEGIIRRIFpifpA8YAm7sxAREIOeX1dMHZfYB4kzTtlV3OroRiFQ%2BO7Va2adu8v7s5ZCy6E%2B84hEU8tqSzjC47TS%2B3pHtS%2F9FTYhIXIkWt2HzRV5pDpDmbw7ML6tQRNEqfZLtIorninof%2BtmjWtY9e1iPjnbjVOp89xt93toFuwhSiYf1pTj0RuGbkGFMDHBZ5pgSxAM4rs39g%2F%2BMMGFLmxSjopQcS%2FzWiltT45fLXP8NS9hS3b%2B1ctgs1n4AVqpHdNBpiG1s3CBKG0uQ7xpVCF6O0s3JCpENGGgeR8hRd6czdDkG76CtdE7ZZVFpmwKQMwQohlvePBOH0haTJBlp05QbDC88ObABjqkAUoYxVqdwWWocsVP5VnhOD2YyP7xEmNTZigwddYzQxuymIbSiv5WTcor6prL%2FNkl46d69yx0zE%2FcDl9eY4FmQd9pP%2B7%2Fx9aYOHy6KYDGp9UvWEu427EZUOZByGdJQrBdMal3JuPPYu%2BucHGO8Cq8olb%2FUqtzKOFG6p%2BJO%2BohcjYAsIxAUUawk6ayg9Xd9rHqtXFhm2jvHX5EQTOlOny6I7epFghk&X-Amz-Signature=3fcffc1001b7ad6d8860a999b141528f3a907a313e458b079193a50a468a866e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNZ7GFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaKN5tP3ZfG%2FT9LwHG9GhRLdEz%2FqS%2BB1wcEh1y0hdhXgIhAOcUnhaPLa7cngLwLJkqqwQSIdtEU%2BAp2qoGE87zWqJaKv8DCEAQABoMNjM3NDIzMTgzODA1IgwRXkdOXpBtxqi%2BYD0q3ANmg7AklK44w4woz3tXUmYRFmK75v3w3aOucKymbA%2F5CPybyxMci1QAItMyEAXJO5JXv%2BpFms0hEWnFQ7AyAe4H%2BOffYQlPjzBHQS799dXNlHHjGbseGqpwkPN5D5r8VhV%2B3EIDFUuVw0un1YHAF6Ctt2U3A0mBY%2FH3dxaBUoL%2Bp0%2BpoAUNdwPNj9UcDO7ua2Fjgv%2FE%2Fc7vcNvViWS7o9lE7aq4dSzjncWCPxldLECrcMaPsBVIOjxrcCg0QefUcmrmmVubiNMVjzRk6uxr16I1zEWxttFbKUmM5PEGIIRRIFpifpA8YAm7sxAREIOeX1dMHZfYB4kzTtlV3OroRiFQ%2BO7Va2adu8v7s5ZCy6E%2B84hEU8tqSzjC47TS%2B3pHtS%2F9FTYhIXIkWt2HzRV5pDpDmbw7ML6tQRNEqfZLtIorninof%2BtmjWtY9e1iPjnbjVOp89xt93toFuwhSiYf1pTj0RuGbkGFMDHBZ5pgSxAM4rs39g%2F%2BMMGFLmxSjopQcS%2FzWiltT45fLXP8NS9hS3b%2B1ctgs1n4AVqpHdNBpiG1s3CBKG0uQ7xpVCF6O0s3JCpENGGgeR8hRd6czdDkG76CtdE7ZZVFpmwKQMwQohlvePBOH0haTJBlp05QbDC88ObABjqkAUoYxVqdwWWocsVP5VnhOD2YyP7xEmNTZigwddYzQxuymIbSiv5WTcor6prL%2FNkl46d69yx0zE%2FcDl9eY4FmQd9pP%2B7%2Fx9aYOHy6KYDGp9UvWEu427EZUOZByGdJQrBdMal3JuPPYu%2BucHGO8Cq8olb%2FUqtzKOFG6p%2BJO%2BohcjYAsIxAUUawk6ayg9Xd9rHqtXFhm2jvHX5EQTOlOny6I7epFghk&X-Amz-Signature=98020ec6b65a302220594cdd8b7d84a35d97cb367371338c71b039aba8052efe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
