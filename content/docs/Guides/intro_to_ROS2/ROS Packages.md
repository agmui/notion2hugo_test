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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV2UMZA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnFMbAIJMr527tH7Dv%2BArLwv4huv%2Fqmv7RremE64aIzwIhALTMX0YgSuq7HMnu%2B1JBN%2FG9jDQl4VmNPtMU393dsE8aKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdhiW4ZjNmyMKFzgq3AMW3upU3rKybprJDuhZu2CM1gaVKbbAgtwY7WjpLWjjERvxObcztXazMWy6GHjfADhJTcXp4CXCcFvWEQ0BFF31PcIsK60D4wSS2UabYLRcMC4OMCpFSa4bx503Wx9GrlcvAhjT0efKmF372U0Mie4IM6Q3ULsxZBD5z5yoQzrGD71McJYlAhZjlc9z2OUQgNYBbnBI4L%2BjobstSGjuCW8o81DQkHtb0foG1OzxXZObFfn46jW48c5WK8yxMvW3%2B11T7frDYBjJGhCMjjAp3v0Rt9YxFR35mwLp8W%2BUZI86kmLZaBymKitxgS%2F2egRZaubwQIaP0tQZXZcu%2B7LeDbdzdJWv2KDIVJOUP84ObfwNZo3ftW%2BH6RIZgb48tIk5yrqSQIriO6hUFB428FvKeo6BkU8GSeZfbyu2NT%2BX9kjOSjwDOpE0CQrCLJzwb31wfykeurRuV9RZfAndSupyJMiwr5EC26XXF8Y19nXxAWSoNiSqcg6Uvt1YCBUMeX%2BODb%2B5Ai3Rr3FIAA1uHgCmRUkWVRUPH6XO%2FmmFnfWG%2FrJ0vjm8K23gjgCaoNjLeS9mxdOTFNNG6ulf86LEFfIwoxUyQlHUgMaHJP%2Bf8dFPM6uyfOKIR2f9mnkQpuYDsDDI%2B8vCBjqkAUUgauahq%2Ft%2Fl7qqQ9CIMpcMaB9r8zPnkZEvfnuXoWtB1LMHjIVWP2zApZQi6Snmny8jsBB%2F4dipX2irNPZf2aKsXun8aOLE7uwVwMPBNWZ3g2k0cIkGRwRXmWGFY53nE273qS%2BUkbC%2FyZuevvGFVrJ5PEcnKK3OpU2HmlCFwXX4WuZsJjg4izt%2Bu3hS2HcBSKPqAGfxFAjfDBsXSgYNX4ZDgWdN&X-Amz-Signature=d6957fe23206c6186dbca4e064ea61d0191d6e86c6d229738bc6dc7e12e9f15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV2UMZA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnFMbAIJMr527tH7Dv%2BArLwv4huv%2Fqmv7RremE64aIzwIhALTMX0YgSuq7HMnu%2B1JBN%2FG9jDQl4VmNPtMU393dsE8aKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdhiW4ZjNmyMKFzgq3AMW3upU3rKybprJDuhZu2CM1gaVKbbAgtwY7WjpLWjjERvxObcztXazMWy6GHjfADhJTcXp4CXCcFvWEQ0BFF31PcIsK60D4wSS2UabYLRcMC4OMCpFSa4bx503Wx9GrlcvAhjT0efKmF372U0Mie4IM6Q3ULsxZBD5z5yoQzrGD71McJYlAhZjlc9z2OUQgNYBbnBI4L%2BjobstSGjuCW8o81DQkHtb0foG1OzxXZObFfn46jW48c5WK8yxMvW3%2B11T7frDYBjJGhCMjjAp3v0Rt9YxFR35mwLp8W%2BUZI86kmLZaBymKitxgS%2F2egRZaubwQIaP0tQZXZcu%2B7LeDbdzdJWv2KDIVJOUP84ObfwNZo3ftW%2BH6RIZgb48tIk5yrqSQIriO6hUFB428FvKeo6BkU8GSeZfbyu2NT%2BX9kjOSjwDOpE0CQrCLJzwb31wfykeurRuV9RZfAndSupyJMiwr5EC26XXF8Y19nXxAWSoNiSqcg6Uvt1YCBUMeX%2BODb%2B5Ai3Rr3FIAA1uHgCmRUkWVRUPH6XO%2FmmFnfWG%2FrJ0vjm8K23gjgCaoNjLeS9mxdOTFNNG6ulf86LEFfIwoxUyQlHUgMaHJP%2Bf8dFPM6uyfOKIR2f9mnkQpuYDsDDI%2B8vCBjqkAUUgauahq%2Ft%2Fl7qqQ9CIMpcMaB9r8zPnkZEvfnuXoWtB1LMHjIVWP2zApZQi6Snmny8jsBB%2F4dipX2irNPZf2aKsXun8aOLE7uwVwMPBNWZ3g2k0cIkGRwRXmWGFY53nE273qS%2BUkbC%2FyZuevvGFVrJ5PEcnKK3OpU2HmlCFwXX4WuZsJjg4izt%2Bu3hS2HcBSKPqAGfxFAjfDBsXSgYNX4ZDgWdN&X-Amz-Signature=2593294c14e58dd0e7824b3247be30e73cf89cde686ff0eba55b63fe67a73cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV2UMZA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnFMbAIJMr527tH7Dv%2BArLwv4huv%2Fqmv7RremE64aIzwIhALTMX0YgSuq7HMnu%2B1JBN%2FG9jDQl4VmNPtMU393dsE8aKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdhiW4ZjNmyMKFzgq3AMW3upU3rKybprJDuhZu2CM1gaVKbbAgtwY7WjpLWjjERvxObcztXazMWy6GHjfADhJTcXp4CXCcFvWEQ0BFF31PcIsK60D4wSS2UabYLRcMC4OMCpFSa4bx503Wx9GrlcvAhjT0efKmF372U0Mie4IM6Q3ULsxZBD5z5yoQzrGD71McJYlAhZjlc9z2OUQgNYBbnBI4L%2BjobstSGjuCW8o81DQkHtb0foG1OzxXZObFfn46jW48c5WK8yxMvW3%2B11T7frDYBjJGhCMjjAp3v0Rt9YxFR35mwLp8W%2BUZI86kmLZaBymKitxgS%2F2egRZaubwQIaP0tQZXZcu%2B7LeDbdzdJWv2KDIVJOUP84ObfwNZo3ftW%2BH6RIZgb48tIk5yrqSQIriO6hUFB428FvKeo6BkU8GSeZfbyu2NT%2BX9kjOSjwDOpE0CQrCLJzwb31wfykeurRuV9RZfAndSupyJMiwr5EC26XXF8Y19nXxAWSoNiSqcg6Uvt1YCBUMeX%2BODb%2B5Ai3Rr3FIAA1uHgCmRUkWVRUPH6XO%2FmmFnfWG%2FrJ0vjm8K23gjgCaoNjLeS9mxdOTFNNG6ulf86LEFfIwoxUyQlHUgMaHJP%2Bf8dFPM6uyfOKIR2f9mnkQpuYDsDDI%2B8vCBjqkAUUgauahq%2Ft%2Fl7qqQ9CIMpcMaB9r8zPnkZEvfnuXoWtB1LMHjIVWP2zApZQi6Snmny8jsBB%2F4dipX2irNPZf2aKsXun8aOLE7uwVwMPBNWZ3g2k0cIkGRwRXmWGFY53nE273qS%2BUkbC%2FyZuevvGFVrJ5PEcnKK3OpU2HmlCFwXX4WuZsJjg4izt%2Bu3hS2HcBSKPqAGfxFAjfDBsXSgYNX4ZDgWdN&X-Amz-Signature=01c3a4f6e8cbb13151850201ee6c12711bc4c6ae32e9e0bb56e56836d63a9301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV2UMZA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnFMbAIJMr527tH7Dv%2BArLwv4huv%2Fqmv7RremE64aIzwIhALTMX0YgSuq7HMnu%2B1JBN%2FG9jDQl4VmNPtMU393dsE8aKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdhiW4ZjNmyMKFzgq3AMW3upU3rKybprJDuhZu2CM1gaVKbbAgtwY7WjpLWjjERvxObcztXazMWy6GHjfADhJTcXp4CXCcFvWEQ0BFF31PcIsK60D4wSS2UabYLRcMC4OMCpFSa4bx503Wx9GrlcvAhjT0efKmF372U0Mie4IM6Q3ULsxZBD5z5yoQzrGD71McJYlAhZjlc9z2OUQgNYBbnBI4L%2BjobstSGjuCW8o81DQkHtb0foG1OzxXZObFfn46jW48c5WK8yxMvW3%2B11T7frDYBjJGhCMjjAp3v0Rt9YxFR35mwLp8W%2BUZI86kmLZaBymKitxgS%2F2egRZaubwQIaP0tQZXZcu%2B7LeDbdzdJWv2KDIVJOUP84ObfwNZo3ftW%2BH6RIZgb48tIk5yrqSQIriO6hUFB428FvKeo6BkU8GSeZfbyu2NT%2BX9kjOSjwDOpE0CQrCLJzwb31wfykeurRuV9RZfAndSupyJMiwr5EC26XXF8Y19nXxAWSoNiSqcg6Uvt1YCBUMeX%2BODb%2B5Ai3Rr3FIAA1uHgCmRUkWVRUPH6XO%2FmmFnfWG%2FrJ0vjm8K23gjgCaoNjLeS9mxdOTFNNG6ulf86LEFfIwoxUyQlHUgMaHJP%2Bf8dFPM6uyfOKIR2f9mnkQpuYDsDDI%2B8vCBjqkAUUgauahq%2Ft%2Fl7qqQ9CIMpcMaB9r8zPnkZEvfnuXoWtB1LMHjIVWP2zApZQi6Snmny8jsBB%2F4dipX2irNPZf2aKsXun8aOLE7uwVwMPBNWZ3g2k0cIkGRwRXmWGFY53nE273qS%2BUkbC%2FyZuevvGFVrJ5PEcnKK3OpU2HmlCFwXX4WuZsJjg4izt%2Bu3hS2HcBSKPqAGfxFAjfDBsXSgYNX4ZDgWdN&X-Amz-Signature=004b3819cca0e9aa769b28d19226cd05b977c71dfe01d64a9ae95944a5dcfa3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV2UMZA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnFMbAIJMr527tH7Dv%2BArLwv4huv%2Fqmv7RremE64aIzwIhALTMX0YgSuq7HMnu%2B1JBN%2FG9jDQl4VmNPtMU393dsE8aKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdhiW4ZjNmyMKFzgq3AMW3upU3rKybprJDuhZu2CM1gaVKbbAgtwY7WjpLWjjERvxObcztXazMWy6GHjfADhJTcXp4CXCcFvWEQ0BFF31PcIsK60D4wSS2UabYLRcMC4OMCpFSa4bx503Wx9GrlcvAhjT0efKmF372U0Mie4IM6Q3ULsxZBD5z5yoQzrGD71McJYlAhZjlc9z2OUQgNYBbnBI4L%2BjobstSGjuCW8o81DQkHtb0foG1OzxXZObFfn46jW48c5WK8yxMvW3%2B11T7frDYBjJGhCMjjAp3v0Rt9YxFR35mwLp8W%2BUZI86kmLZaBymKitxgS%2F2egRZaubwQIaP0tQZXZcu%2B7LeDbdzdJWv2KDIVJOUP84ObfwNZo3ftW%2BH6RIZgb48tIk5yrqSQIriO6hUFB428FvKeo6BkU8GSeZfbyu2NT%2BX9kjOSjwDOpE0CQrCLJzwb31wfykeurRuV9RZfAndSupyJMiwr5EC26XXF8Y19nXxAWSoNiSqcg6Uvt1YCBUMeX%2BODb%2B5Ai3Rr3FIAA1uHgCmRUkWVRUPH6XO%2FmmFnfWG%2FrJ0vjm8K23gjgCaoNjLeS9mxdOTFNNG6ulf86LEFfIwoxUyQlHUgMaHJP%2Bf8dFPM6uyfOKIR2f9mnkQpuYDsDDI%2B8vCBjqkAUUgauahq%2Ft%2Fl7qqQ9CIMpcMaB9r8zPnkZEvfnuXoWtB1LMHjIVWP2zApZQi6Snmny8jsBB%2F4dipX2irNPZf2aKsXun8aOLE7uwVwMPBNWZ3g2k0cIkGRwRXmWGFY53nE273qS%2BUkbC%2FyZuevvGFVrJ5PEcnKK3OpU2HmlCFwXX4WuZsJjg4izt%2Bu3hS2HcBSKPqAGfxFAjfDBsXSgYNX4ZDgWdN&X-Amz-Signature=34f2b8be2af5e5690748a998c5275fa00142bec38cde0042a7a5569c09de019e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV2UMZA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnFMbAIJMr527tH7Dv%2BArLwv4huv%2Fqmv7RremE64aIzwIhALTMX0YgSuq7HMnu%2B1JBN%2FG9jDQl4VmNPtMU393dsE8aKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdhiW4ZjNmyMKFzgq3AMW3upU3rKybprJDuhZu2CM1gaVKbbAgtwY7WjpLWjjERvxObcztXazMWy6GHjfADhJTcXp4CXCcFvWEQ0BFF31PcIsK60D4wSS2UabYLRcMC4OMCpFSa4bx503Wx9GrlcvAhjT0efKmF372U0Mie4IM6Q3ULsxZBD5z5yoQzrGD71McJYlAhZjlc9z2OUQgNYBbnBI4L%2BjobstSGjuCW8o81DQkHtb0foG1OzxXZObFfn46jW48c5WK8yxMvW3%2B11T7frDYBjJGhCMjjAp3v0Rt9YxFR35mwLp8W%2BUZI86kmLZaBymKitxgS%2F2egRZaubwQIaP0tQZXZcu%2B7LeDbdzdJWv2KDIVJOUP84ObfwNZo3ftW%2BH6RIZgb48tIk5yrqSQIriO6hUFB428FvKeo6BkU8GSeZfbyu2NT%2BX9kjOSjwDOpE0CQrCLJzwb31wfykeurRuV9RZfAndSupyJMiwr5EC26XXF8Y19nXxAWSoNiSqcg6Uvt1YCBUMeX%2BODb%2B5Ai3Rr3FIAA1uHgCmRUkWVRUPH6XO%2FmmFnfWG%2FrJ0vjm8K23gjgCaoNjLeS9mxdOTFNNG6ulf86LEFfIwoxUyQlHUgMaHJP%2Bf8dFPM6uyfOKIR2f9mnkQpuYDsDDI%2B8vCBjqkAUUgauahq%2Ft%2Fl7qqQ9CIMpcMaB9r8zPnkZEvfnuXoWtB1LMHjIVWP2zApZQi6Snmny8jsBB%2F4dipX2irNPZf2aKsXun8aOLE7uwVwMPBNWZ3g2k0cIkGRwRXmWGFY53nE273qS%2BUkbC%2FyZuevvGFVrJ5PEcnKK3OpU2HmlCFwXX4WuZsJjg4izt%2Bu3hS2HcBSKPqAGfxFAjfDBsXSgYNX4ZDgWdN&X-Amz-Signature=1a5edc28bf92cb92f382a442dba78e183df5fa7361c5de8b4576c00f32dd9167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV2UMZA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnFMbAIJMr527tH7Dv%2BArLwv4huv%2Fqmv7RremE64aIzwIhALTMX0YgSuq7HMnu%2B1JBN%2FG9jDQl4VmNPtMU393dsE8aKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdhiW4ZjNmyMKFzgq3AMW3upU3rKybprJDuhZu2CM1gaVKbbAgtwY7WjpLWjjERvxObcztXazMWy6GHjfADhJTcXp4CXCcFvWEQ0BFF31PcIsK60D4wSS2UabYLRcMC4OMCpFSa4bx503Wx9GrlcvAhjT0efKmF372U0Mie4IM6Q3ULsxZBD5z5yoQzrGD71McJYlAhZjlc9z2OUQgNYBbnBI4L%2BjobstSGjuCW8o81DQkHtb0foG1OzxXZObFfn46jW48c5WK8yxMvW3%2B11T7frDYBjJGhCMjjAp3v0Rt9YxFR35mwLp8W%2BUZI86kmLZaBymKitxgS%2F2egRZaubwQIaP0tQZXZcu%2B7LeDbdzdJWv2KDIVJOUP84ObfwNZo3ftW%2BH6RIZgb48tIk5yrqSQIriO6hUFB428FvKeo6BkU8GSeZfbyu2NT%2BX9kjOSjwDOpE0CQrCLJzwb31wfykeurRuV9RZfAndSupyJMiwr5EC26XXF8Y19nXxAWSoNiSqcg6Uvt1YCBUMeX%2BODb%2B5Ai3Rr3FIAA1uHgCmRUkWVRUPH6XO%2FmmFnfWG%2FrJ0vjm8K23gjgCaoNjLeS9mxdOTFNNG6ulf86LEFfIwoxUyQlHUgMaHJP%2Bf8dFPM6uyfOKIR2f9mnkQpuYDsDDI%2B8vCBjqkAUUgauahq%2Ft%2Fl7qqQ9CIMpcMaB9r8zPnkZEvfnuXoWtB1LMHjIVWP2zApZQi6Snmny8jsBB%2F4dipX2irNPZf2aKsXun8aOLE7uwVwMPBNWZ3g2k0cIkGRwRXmWGFY53nE273qS%2BUkbC%2FyZuevvGFVrJ5PEcnKK3OpU2HmlCFwXX4WuZsJjg4izt%2Bu3hS2HcBSKPqAGfxFAjfDBsXSgYNX4ZDgWdN&X-Amz-Signature=edb404a184ec0f9c97826ad23d9fd17682c376536a2bd15cf37fc1729788a5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
