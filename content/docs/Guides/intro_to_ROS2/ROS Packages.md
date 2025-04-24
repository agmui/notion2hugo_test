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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALATNEM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbtM04h3wvjuRpXGZKlP%2BwdEQfwKxSQ%2Flp%2B1BgZeofSwIhAOcreul6oMEOtwyVHheFn2gv74n%2FYz1LEb6HaZ9%2BtUZSKv8DCBkQABoMNjM3NDIzMTgzODA1Igy1yvAutCq3N%2BVSslsq3ANus05hlOJQPcPyIVxRzQRrlRZGLHyPCQd3L3w0LwmBY0y2UGeR8llV9Wd9YPGhjbEiy6QHF%2FxnolXCz00R%2B7xNwoWfJ58rZkI0t56F%2BcJs4sdI6oPpx%2FcoiihkYpSTb999uakP9gVNQ3eyKplN%2FipYezdhNLdfKQjN6234FlUG3%2B3Takvefxj2luWyqMPtTdMvDWJGiAIP6UTu2zWLS7h%2Fge1o7q%2FQ9QgMpsfDv7ju4xD3ImSJ4S77QiXuXZ7ePE3R3k1%2BkJJaPH8NiiLtYnTw%2BVLiJmCs6zWLcQWHc2aK7a%2FH%2BIYy0AreQXe5BMDUPuIpO2LLmVAXjPIarQFnAEf7o8jmived4%2F5AzzW24EkgSU3E1Y1JlfIlPGHVKipX3cpNeoeXPJ2WSFNnoc7VNxi9aINem%2BJXjtaB1CtcZG1Dgg%2BSLAUqHa0bwU5v%2FUiLklAdiRm0vARsDJSM6z7KBURQvyVswG%2FxvbNMk8kZJBK3y%2F9tt0T21t%2FwDsowo5RS6ZlGuREuUi97tvAqgHbDOD6BtIFFbbzn%2BzwPB5vxuU%2BS%2FaL0wQ0IBM8ukWbX7ll%2FuBmZNh6af28cJdU3uW6tq7xHuGGMCArWKPKSBfw85mAnW186GrTgBi8SF1NZ%2FTCSuqnABjqkAWv%2BFm7H8d5ZD4o8skARePcjDI2Nuk3MycNjK3y4wW51p3qtu3f9LolnWFzeUW9NSOa6eUXSN1yVocCPohyu9Gu%2Bx0v0dM8hYJYun%2FEH7q%2FWwQwzC58YGXjv%2BlDzTgrwrxkSyJgnVkl%2BK2LHvn3%2Fy4xaot9FaNGodTzPXTTiIDc48tHXTiud2pjPBsGP1Ejr1JgKkDUvyoswuoOr2gsz8O%2Fib3yF&X-Amz-Signature=9bd8c8145a176703b1e99a29d5ff5de0446eedee03e2b50995fe262027d0c8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALATNEM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbtM04h3wvjuRpXGZKlP%2BwdEQfwKxSQ%2Flp%2B1BgZeofSwIhAOcreul6oMEOtwyVHheFn2gv74n%2FYz1LEb6HaZ9%2BtUZSKv8DCBkQABoMNjM3NDIzMTgzODA1Igy1yvAutCq3N%2BVSslsq3ANus05hlOJQPcPyIVxRzQRrlRZGLHyPCQd3L3w0LwmBY0y2UGeR8llV9Wd9YPGhjbEiy6QHF%2FxnolXCz00R%2B7xNwoWfJ58rZkI0t56F%2BcJs4sdI6oPpx%2FcoiihkYpSTb999uakP9gVNQ3eyKplN%2FipYezdhNLdfKQjN6234FlUG3%2B3Takvefxj2luWyqMPtTdMvDWJGiAIP6UTu2zWLS7h%2Fge1o7q%2FQ9QgMpsfDv7ju4xD3ImSJ4S77QiXuXZ7ePE3R3k1%2BkJJaPH8NiiLtYnTw%2BVLiJmCs6zWLcQWHc2aK7a%2FH%2BIYy0AreQXe5BMDUPuIpO2LLmVAXjPIarQFnAEf7o8jmived4%2F5AzzW24EkgSU3E1Y1JlfIlPGHVKipX3cpNeoeXPJ2WSFNnoc7VNxi9aINem%2BJXjtaB1CtcZG1Dgg%2BSLAUqHa0bwU5v%2FUiLklAdiRm0vARsDJSM6z7KBURQvyVswG%2FxvbNMk8kZJBK3y%2F9tt0T21t%2FwDsowo5RS6ZlGuREuUi97tvAqgHbDOD6BtIFFbbzn%2BzwPB5vxuU%2BS%2FaL0wQ0IBM8ukWbX7ll%2FuBmZNh6af28cJdU3uW6tq7xHuGGMCArWKPKSBfw85mAnW186GrTgBi8SF1NZ%2FTCSuqnABjqkAWv%2BFm7H8d5ZD4o8skARePcjDI2Nuk3MycNjK3y4wW51p3qtu3f9LolnWFzeUW9NSOa6eUXSN1yVocCPohyu9Gu%2Bx0v0dM8hYJYun%2FEH7q%2FWwQwzC58YGXjv%2BlDzTgrwrxkSyJgnVkl%2BK2LHvn3%2Fy4xaot9FaNGodTzPXTTiIDc48tHXTiud2pjPBsGP1Ejr1JgKkDUvyoswuoOr2gsz8O%2Fib3yF&X-Amz-Signature=f47f6a24ebfb91220ed83c9a2b53f43a6624f82177ff0f58902130a465364790&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALATNEM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbtM04h3wvjuRpXGZKlP%2BwdEQfwKxSQ%2Flp%2B1BgZeofSwIhAOcreul6oMEOtwyVHheFn2gv74n%2FYz1LEb6HaZ9%2BtUZSKv8DCBkQABoMNjM3NDIzMTgzODA1Igy1yvAutCq3N%2BVSslsq3ANus05hlOJQPcPyIVxRzQRrlRZGLHyPCQd3L3w0LwmBY0y2UGeR8llV9Wd9YPGhjbEiy6QHF%2FxnolXCz00R%2B7xNwoWfJ58rZkI0t56F%2BcJs4sdI6oPpx%2FcoiihkYpSTb999uakP9gVNQ3eyKplN%2FipYezdhNLdfKQjN6234FlUG3%2B3Takvefxj2luWyqMPtTdMvDWJGiAIP6UTu2zWLS7h%2Fge1o7q%2FQ9QgMpsfDv7ju4xD3ImSJ4S77QiXuXZ7ePE3R3k1%2BkJJaPH8NiiLtYnTw%2BVLiJmCs6zWLcQWHc2aK7a%2FH%2BIYy0AreQXe5BMDUPuIpO2LLmVAXjPIarQFnAEf7o8jmived4%2F5AzzW24EkgSU3E1Y1JlfIlPGHVKipX3cpNeoeXPJ2WSFNnoc7VNxi9aINem%2BJXjtaB1CtcZG1Dgg%2BSLAUqHa0bwU5v%2FUiLklAdiRm0vARsDJSM6z7KBURQvyVswG%2FxvbNMk8kZJBK3y%2F9tt0T21t%2FwDsowo5RS6ZlGuREuUi97tvAqgHbDOD6BtIFFbbzn%2BzwPB5vxuU%2BS%2FaL0wQ0IBM8ukWbX7ll%2FuBmZNh6af28cJdU3uW6tq7xHuGGMCArWKPKSBfw85mAnW186GrTgBi8SF1NZ%2FTCSuqnABjqkAWv%2BFm7H8d5ZD4o8skARePcjDI2Nuk3MycNjK3y4wW51p3qtu3f9LolnWFzeUW9NSOa6eUXSN1yVocCPohyu9Gu%2Bx0v0dM8hYJYun%2FEH7q%2FWwQwzC58YGXjv%2BlDzTgrwrxkSyJgnVkl%2BK2LHvn3%2Fy4xaot9FaNGodTzPXTTiIDc48tHXTiud2pjPBsGP1Ejr1JgKkDUvyoswuoOr2gsz8O%2Fib3yF&X-Amz-Signature=36381a5ecbd984ff7736a6e6c74e6649b28f8fd2fa1b112c24a7e582486e4aee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALATNEM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbtM04h3wvjuRpXGZKlP%2BwdEQfwKxSQ%2Flp%2B1BgZeofSwIhAOcreul6oMEOtwyVHheFn2gv74n%2FYz1LEb6HaZ9%2BtUZSKv8DCBkQABoMNjM3NDIzMTgzODA1Igy1yvAutCq3N%2BVSslsq3ANus05hlOJQPcPyIVxRzQRrlRZGLHyPCQd3L3w0LwmBY0y2UGeR8llV9Wd9YPGhjbEiy6QHF%2FxnolXCz00R%2B7xNwoWfJ58rZkI0t56F%2BcJs4sdI6oPpx%2FcoiihkYpSTb999uakP9gVNQ3eyKplN%2FipYezdhNLdfKQjN6234FlUG3%2B3Takvefxj2luWyqMPtTdMvDWJGiAIP6UTu2zWLS7h%2Fge1o7q%2FQ9QgMpsfDv7ju4xD3ImSJ4S77QiXuXZ7ePE3R3k1%2BkJJaPH8NiiLtYnTw%2BVLiJmCs6zWLcQWHc2aK7a%2FH%2BIYy0AreQXe5BMDUPuIpO2LLmVAXjPIarQFnAEf7o8jmived4%2F5AzzW24EkgSU3E1Y1JlfIlPGHVKipX3cpNeoeXPJ2WSFNnoc7VNxi9aINem%2BJXjtaB1CtcZG1Dgg%2BSLAUqHa0bwU5v%2FUiLklAdiRm0vARsDJSM6z7KBURQvyVswG%2FxvbNMk8kZJBK3y%2F9tt0T21t%2FwDsowo5RS6ZlGuREuUi97tvAqgHbDOD6BtIFFbbzn%2BzwPB5vxuU%2BS%2FaL0wQ0IBM8ukWbX7ll%2FuBmZNh6af28cJdU3uW6tq7xHuGGMCArWKPKSBfw85mAnW186GrTgBi8SF1NZ%2FTCSuqnABjqkAWv%2BFm7H8d5ZD4o8skARePcjDI2Nuk3MycNjK3y4wW51p3qtu3f9LolnWFzeUW9NSOa6eUXSN1yVocCPohyu9Gu%2Bx0v0dM8hYJYun%2FEH7q%2FWwQwzC58YGXjv%2BlDzTgrwrxkSyJgnVkl%2BK2LHvn3%2Fy4xaot9FaNGodTzPXTTiIDc48tHXTiud2pjPBsGP1Ejr1JgKkDUvyoswuoOr2gsz8O%2Fib3yF&X-Amz-Signature=8e47a554aaff38c21c3eaba4ce0ed7c0f08ef78cece0384e9fd7497f59ded84f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALATNEM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbtM04h3wvjuRpXGZKlP%2BwdEQfwKxSQ%2Flp%2B1BgZeofSwIhAOcreul6oMEOtwyVHheFn2gv74n%2FYz1LEb6HaZ9%2BtUZSKv8DCBkQABoMNjM3NDIzMTgzODA1Igy1yvAutCq3N%2BVSslsq3ANus05hlOJQPcPyIVxRzQRrlRZGLHyPCQd3L3w0LwmBY0y2UGeR8llV9Wd9YPGhjbEiy6QHF%2FxnolXCz00R%2B7xNwoWfJ58rZkI0t56F%2BcJs4sdI6oPpx%2FcoiihkYpSTb999uakP9gVNQ3eyKplN%2FipYezdhNLdfKQjN6234FlUG3%2B3Takvefxj2luWyqMPtTdMvDWJGiAIP6UTu2zWLS7h%2Fge1o7q%2FQ9QgMpsfDv7ju4xD3ImSJ4S77QiXuXZ7ePE3R3k1%2BkJJaPH8NiiLtYnTw%2BVLiJmCs6zWLcQWHc2aK7a%2FH%2BIYy0AreQXe5BMDUPuIpO2LLmVAXjPIarQFnAEf7o8jmived4%2F5AzzW24EkgSU3E1Y1JlfIlPGHVKipX3cpNeoeXPJ2WSFNnoc7VNxi9aINem%2BJXjtaB1CtcZG1Dgg%2BSLAUqHa0bwU5v%2FUiLklAdiRm0vARsDJSM6z7KBURQvyVswG%2FxvbNMk8kZJBK3y%2F9tt0T21t%2FwDsowo5RS6ZlGuREuUi97tvAqgHbDOD6BtIFFbbzn%2BzwPB5vxuU%2BS%2FaL0wQ0IBM8ukWbX7ll%2FuBmZNh6af28cJdU3uW6tq7xHuGGMCArWKPKSBfw85mAnW186GrTgBi8SF1NZ%2FTCSuqnABjqkAWv%2BFm7H8d5ZD4o8skARePcjDI2Nuk3MycNjK3y4wW51p3qtu3f9LolnWFzeUW9NSOa6eUXSN1yVocCPohyu9Gu%2Bx0v0dM8hYJYun%2FEH7q%2FWwQwzC58YGXjv%2BlDzTgrwrxkSyJgnVkl%2BK2LHvn3%2Fy4xaot9FaNGodTzPXTTiIDc48tHXTiud2pjPBsGP1Ejr1JgKkDUvyoswuoOr2gsz8O%2Fib3yF&X-Amz-Signature=7275209b0639d1782ba8daff2c63c49d18d3a79da6cb50b03bc0aa20f32e87d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALATNEM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbtM04h3wvjuRpXGZKlP%2BwdEQfwKxSQ%2Flp%2B1BgZeofSwIhAOcreul6oMEOtwyVHheFn2gv74n%2FYz1LEb6HaZ9%2BtUZSKv8DCBkQABoMNjM3NDIzMTgzODA1Igy1yvAutCq3N%2BVSslsq3ANus05hlOJQPcPyIVxRzQRrlRZGLHyPCQd3L3w0LwmBY0y2UGeR8llV9Wd9YPGhjbEiy6QHF%2FxnolXCz00R%2B7xNwoWfJ58rZkI0t56F%2BcJs4sdI6oPpx%2FcoiihkYpSTb999uakP9gVNQ3eyKplN%2FipYezdhNLdfKQjN6234FlUG3%2B3Takvefxj2luWyqMPtTdMvDWJGiAIP6UTu2zWLS7h%2Fge1o7q%2FQ9QgMpsfDv7ju4xD3ImSJ4S77QiXuXZ7ePE3R3k1%2BkJJaPH8NiiLtYnTw%2BVLiJmCs6zWLcQWHc2aK7a%2FH%2BIYy0AreQXe5BMDUPuIpO2LLmVAXjPIarQFnAEf7o8jmived4%2F5AzzW24EkgSU3E1Y1JlfIlPGHVKipX3cpNeoeXPJ2WSFNnoc7VNxi9aINem%2BJXjtaB1CtcZG1Dgg%2BSLAUqHa0bwU5v%2FUiLklAdiRm0vARsDJSM6z7KBURQvyVswG%2FxvbNMk8kZJBK3y%2F9tt0T21t%2FwDsowo5RS6ZlGuREuUi97tvAqgHbDOD6BtIFFbbzn%2BzwPB5vxuU%2BS%2FaL0wQ0IBM8ukWbX7ll%2FuBmZNh6af28cJdU3uW6tq7xHuGGMCArWKPKSBfw85mAnW186GrTgBi8SF1NZ%2FTCSuqnABjqkAWv%2BFm7H8d5ZD4o8skARePcjDI2Nuk3MycNjK3y4wW51p3qtu3f9LolnWFzeUW9NSOa6eUXSN1yVocCPohyu9Gu%2Bx0v0dM8hYJYun%2FEH7q%2FWwQwzC58YGXjv%2BlDzTgrwrxkSyJgnVkl%2BK2LHvn3%2Fy4xaot9FaNGodTzPXTTiIDc48tHXTiud2pjPBsGP1Ejr1JgKkDUvyoswuoOr2gsz8O%2Fib3yF&X-Amz-Signature=afa44a72781fc731fedcbf8ff6b8f1299909c8916fbe03c13eb59556dbf0bff0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALATNEM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbtM04h3wvjuRpXGZKlP%2BwdEQfwKxSQ%2Flp%2B1BgZeofSwIhAOcreul6oMEOtwyVHheFn2gv74n%2FYz1LEb6HaZ9%2BtUZSKv8DCBkQABoMNjM3NDIzMTgzODA1Igy1yvAutCq3N%2BVSslsq3ANus05hlOJQPcPyIVxRzQRrlRZGLHyPCQd3L3w0LwmBY0y2UGeR8llV9Wd9YPGhjbEiy6QHF%2FxnolXCz00R%2B7xNwoWfJ58rZkI0t56F%2BcJs4sdI6oPpx%2FcoiihkYpSTb999uakP9gVNQ3eyKplN%2FipYezdhNLdfKQjN6234FlUG3%2B3Takvefxj2luWyqMPtTdMvDWJGiAIP6UTu2zWLS7h%2Fge1o7q%2FQ9QgMpsfDv7ju4xD3ImSJ4S77QiXuXZ7ePE3R3k1%2BkJJaPH8NiiLtYnTw%2BVLiJmCs6zWLcQWHc2aK7a%2FH%2BIYy0AreQXe5BMDUPuIpO2LLmVAXjPIarQFnAEf7o8jmived4%2F5AzzW24EkgSU3E1Y1JlfIlPGHVKipX3cpNeoeXPJ2WSFNnoc7VNxi9aINem%2BJXjtaB1CtcZG1Dgg%2BSLAUqHa0bwU5v%2FUiLklAdiRm0vARsDJSM6z7KBURQvyVswG%2FxvbNMk8kZJBK3y%2F9tt0T21t%2FwDsowo5RS6ZlGuREuUi97tvAqgHbDOD6BtIFFbbzn%2BzwPB5vxuU%2BS%2FaL0wQ0IBM8ukWbX7ll%2FuBmZNh6af28cJdU3uW6tq7xHuGGMCArWKPKSBfw85mAnW186GrTgBi8SF1NZ%2FTCSuqnABjqkAWv%2BFm7H8d5ZD4o8skARePcjDI2Nuk3MycNjK3y4wW51p3qtu3f9LolnWFzeUW9NSOa6eUXSN1yVocCPohyu9Gu%2Bx0v0dM8hYJYun%2FEH7q%2FWwQwzC58YGXjv%2BlDzTgrwrxkSyJgnVkl%2BK2LHvn3%2Fy4xaot9FaNGodTzPXTTiIDc48tHXTiud2pjPBsGP1Ejr1JgKkDUvyoswuoOr2gsz8O%2Fib3yF&X-Amz-Signature=3b6f096418109bd1d03705c254026f1a689e30fac2e8a7894c96d4cc4462a9e1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
