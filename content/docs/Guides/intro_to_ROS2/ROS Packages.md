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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMTFJ67%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mM8r5nG0Z6Tr5D0id%2BGKaqFkx9j%2BiU3tqCsIEpBE%2BgIhAIGsKeics2TsK1y%2FhSi99OxMBLL%2F3yGp2ZW9QjjFXNXJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQiOt%2FdzaqXWXCwRkq3ANN4TukSIjefh3RVhOGt8m7DB8n054EkYzACHOzdCRR%2BBrbya0ZJJQITpLZgJP%2F0p0aqHz5DYFau1wCgfOSXkhfd3%2FjgsU2B5CQutkgVZTVRl1ZQrMwvwQjGCzH%2B5S6gxgkW6TYjyNJNuIzeOEE82qay3qbFcGARgOgc8VWUsnRJQ2aHkR91BJXhgdHvNG8QuXhPGcl0EBkgQYSn2XPgYOdoA5Iltrbl%2BBkWVMLSrLfHuL0bWcDhItonpoQbw3sRvRvTN3aJbNtlj9VFsJdcWJ9%2B6oP71YCaErKai%2B5rnc7JIbpDeLKluP4QMqfTMpEqowWjLL79GKCLCOGbme95C%2BQk83t74liaymh0gdyophRoUImGGXQ%2B6nxfbOtEP%2Bflyg0uoQXBxMN66YHCgbUc4o%2BghUvfaFvWMOBEk07G49zWacBcrPEqZay9iLyO3hCqejQX4ATntIhisk1THXzsmn%2BNjfGcBj9Pum5NW3Vl9yPmIKk08oJq%2BVKeSCgCf7vuNgZavTqpYJ1toYU%2B8rgHm%2FXofUkDoUH06utLBTybjkTwGifCqHz7jaNgyX0NrYXFzhihHGb1tShO3YDkVg2KKCvrurm84jD9%2BtbSzG1vN65djDHef%2B77%2BfTE0NOUTCZ79i9BjqkAUKPMaHBP%2Bj9czsIdTLXPDd10%2FW03UZlPZih4kS7LEf8EegH7lBqpYVl%2BC8CClg8a3dccTRqTkTP4sb%2Btf1wyjZUZVTWOfKaOo0Qp%2FNL%2BjDy7QKiN8XcJEbD8GWS0ZTqOR8QfEDLgDXS0zTLrd847WXc3YZprjT3gyiujfzWJNR9IMj9S9cxxPifWOsqA%2FZpngcgX%2F7BWnlHBJ1pvnNpFNYKbOZa&X-Amz-Signature=8c1670a4b6640f3471bd08d5de0e824d60570c98d37e34b8e8bf830f88cee10a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMTFJ67%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mM8r5nG0Z6Tr5D0id%2BGKaqFkx9j%2BiU3tqCsIEpBE%2BgIhAIGsKeics2TsK1y%2FhSi99OxMBLL%2F3yGp2ZW9QjjFXNXJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQiOt%2FdzaqXWXCwRkq3ANN4TukSIjefh3RVhOGt8m7DB8n054EkYzACHOzdCRR%2BBrbya0ZJJQITpLZgJP%2F0p0aqHz5DYFau1wCgfOSXkhfd3%2FjgsU2B5CQutkgVZTVRl1ZQrMwvwQjGCzH%2B5S6gxgkW6TYjyNJNuIzeOEE82qay3qbFcGARgOgc8VWUsnRJQ2aHkR91BJXhgdHvNG8QuXhPGcl0EBkgQYSn2XPgYOdoA5Iltrbl%2BBkWVMLSrLfHuL0bWcDhItonpoQbw3sRvRvTN3aJbNtlj9VFsJdcWJ9%2B6oP71YCaErKai%2B5rnc7JIbpDeLKluP4QMqfTMpEqowWjLL79GKCLCOGbme95C%2BQk83t74liaymh0gdyophRoUImGGXQ%2B6nxfbOtEP%2Bflyg0uoQXBxMN66YHCgbUc4o%2BghUvfaFvWMOBEk07G49zWacBcrPEqZay9iLyO3hCqejQX4ATntIhisk1THXzsmn%2BNjfGcBj9Pum5NW3Vl9yPmIKk08oJq%2BVKeSCgCf7vuNgZavTqpYJ1toYU%2B8rgHm%2FXofUkDoUH06utLBTybjkTwGifCqHz7jaNgyX0NrYXFzhihHGb1tShO3YDkVg2KKCvrurm84jD9%2BtbSzG1vN65djDHef%2B77%2BfTE0NOUTCZ79i9BjqkAUKPMaHBP%2Bj9czsIdTLXPDd10%2FW03UZlPZih4kS7LEf8EegH7lBqpYVl%2BC8CClg8a3dccTRqTkTP4sb%2Btf1wyjZUZVTWOfKaOo0Qp%2FNL%2BjDy7QKiN8XcJEbD8GWS0ZTqOR8QfEDLgDXS0zTLrd847WXc3YZprjT3gyiujfzWJNR9IMj9S9cxxPifWOsqA%2FZpngcgX%2F7BWnlHBJ1pvnNpFNYKbOZa&X-Amz-Signature=3df4df0648b0d82e5271e57b2a6ff24d4036db950fb8be096f37e206cbd0b157&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMTFJ67%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mM8r5nG0Z6Tr5D0id%2BGKaqFkx9j%2BiU3tqCsIEpBE%2BgIhAIGsKeics2TsK1y%2FhSi99OxMBLL%2F3yGp2ZW9QjjFXNXJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQiOt%2FdzaqXWXCwRkq3ANN4TukSIjefh3RVhOGt8m7DB8n054EkYzACHOzdCRR%2BBrbya0ZJJQITpLZgJP%2F0p0aqHz5DYFau1wCgfOSXkhfd3%2FjgsU2B5CQutkgVZTVRl1ZQrMwvwQjGCzH%2B5S6gxgkW6TYjyNJNuIzeOEE82qay3qbFcGARgOgc8VWUsnRJQ2aHkR91BJXhgdHvNG8QuXhPGcl0EBkgQYSn2XPgYOdoA5Iltrbl%2BBkWVMLSrLfHuL0bWcDhItonpoQbw3sRvRvTN3aJbNtlj9VFsJdcWJ9%2B6oP71YCaErKai%2B5rnc7JIbpDeLKluP4QMqfTMpEqowWjLL79GKCLCOGbme95C%2BQk83t74liaymh0gdyophRoUImGGXQ%2B6nxfbOtEP%2Bflyg0uoQXBxMN66YHCgbUc4o%2BghUvfaFvWMOBEk07G49zWacBcrPEqZay9iLyO3hCqejQX4ATntIhisk1THXzsmn%2BNjfGcBj9Pum5NW3Vl9yPmIKk08oJq%2BVKeSCgCf7vuNgZavTqpYJ1toYU%2B8rgHm%2FXofUkDoUH06utLBTybjkTwGifCqHz7jaNgyX0NrYXFzhihHGb1tShO3YDkVg2KKCvrurm84jD9%2BtbSzG1vN65djDHef%2B77%2BfTE0NOUTCZ79i9BjqkAUKPMaHBP%2Bj9czsIdTLXPDd10%2FW03UZlPZih4kS7LEf8EegH7lBqpYVl%2BC8CClg8a3dccTRqTkTP4sb%2Btf1wyjZUZVTWOfKaOo0Qp%2FNL%2BjDy7QKiN8XcJEbD8GWS0ZTqOR8QfEDLgDXS0zTLrd847WXc3YZprjT3gyiujfzWJNR9IMj9S9cxxPifWOsqA%2FZpngcgX%2F7BWnlHBJ1pvnNpFNYKbOZa&X-Amz-Signature=aa3463eda45fed4ee9709506a4a796b516564892bd34f1d06a2de4e5e71bdff7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMTFJ67%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mM8r5nG0Z6Tr5D0id%2BGKaqFkx9j%2BiU3tqCsIEpBE%2BgIhAIGsKeics2TsK1y%2FhSi99OxMBLL%2F3yGp2ZW9QjjFXNXJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQiOt%2FdzaqXWXCwRkq3ANN4TukSIjefh3RVhOGt8m7DB8n054EkYzACHOzdCRR%2BBrbya0ZJJQITpLZgJP%2F0p0aqHz5DYFau1wCgfOSXkhfd3%2FjgsU2B5CQutkgVZTVRl1ZQrMwvwQjGCzH%2B5S6gxgkW6TYjyNJNuIzeOEE82qay3qbFcGARgOgc8VWUsnRJQ2aHkR91BJXhgdHvNG8QuXhPGcl0EBkgQYSn2XPgYOdoA5Iltrbl%2BBkWVMLSrLfHuL0bWcDhItonpoQbw3sRvRvTN3aJbNtlj9VFsJdcWJ9%2B6oP71YCaErKai%2B5rnc7JIbpDeLKluP4QMqfTMpEqowWjLL79GKCLCOGbme95C%2BQk83t74liaymh0gdyophRoUImGGXQ%2B6nxfbOtEP%2Bflyg0uoQXBxMN66YHCgbUc4o%2BghUvfaFvWMOBEk07G49zWacBcrPEqZay9iLyO3hCqejQX4ATntIhisk1THXzsmn%2BNjfGcBj9Pum5NW3Vl9yPmIKk08oJq%2BVKeSCgCf7vuNgZavTqpYJ1toYU%2B8rgHm%2FXofUkDoUH06utLBTybjkTwGifCqHz7jaNgyX0NrYXFzhihHGb1tShO3YDkVg2KKCvrurm84jD9%2BtbSzG1vN65djDHef%2B77%2BfTE0NOUTCZ79i9BjqkAUKPMaHBP%2Bj9czsIdTLXPDd10%2FW03UZlPZih4kS7LEf8EegH7lBqpYVl%2BC8CClg8a3dccTRqTkTP4sb%2Btf1wyjZUZVTWOfKaOo0Qp%2FNL%2BjDy7QKiN8XcJEbD8GWS0ZTqOR8QfEDLgDXS0zTLrd847WXc3YZprjT3gyiujfzWJNR9IMj9S9cxxPifWOsqA%2FZpngcgX%2F7BWnlHBJ1pvnNpFNYKbOZa&X-Amz-Signature=f4121b24547ef358e0c6bea65e4182f343b35c55abc903318eda1697696b0c03&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMTFJ67%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mM8r5nG0Z6Tr5D0id%2BGKaqFkx9j%2BiU3tqCsIEpBE%2BgIhAIGsKeics2TsK1y%2FhSi99OxMBLL%2F3yGp2ZW9QjjFXNXJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQiOt%2FdzaqXWXCwRkq3ANN4TukSIjefh3RVhOGt8m7DB8n054EkYzACHOzdCRR%2BBrbya0ZJJQITpLZgJP%2F0p0aqHz5DYFau1wCgfOSXkhfd3%2FjgsU2B5CQutkgVZTVRl1ZQrMwvwQjGCzH%2B5S6gxgkW6TYjyNJNuIzeOEE82qay3qbFcGARgOgc8VWUsnRJQ2aHkR91BJXhgdHvNG8QuXhPGcl0EBkgQYSn2XPgYOdoA5Iltrbl%2BBkWVMLSrLfHuL0bWcDhItonpoQbw3sRvRvTN3aJbNtlj9VFsJdcWJ9%2B6oP71YCaErKai%2B5rnc7JIbpDeLKluP4QMqfTMpEqowWjLL79GKCLCOGbme95C%2BQk83t74liaymh0gdyophRoUImGGXQ%2B6nxfbOtEP%2Bflyg0uoQXBxMN66YHCgbUc4o%2BghUvfaFvWMOBEk07G49zWacBcrPEqZay9iLyO3hCqejQX4ATntIhisk1THXzsmn%2BNjfGcBj9Pum5NW3Vl9yPmIKk08oJq%2BVKeSCgCf7vuNgZavTqpYJ1toYU%2B8rgHm%2FXofUkDoUH06utLBTybjkTwGifCqHz7jaNgyX0NrYXFzhihHGb1tShO3YDkVg2KKCvrurm84jD9%2BtbSzG1vN65djDHef%2B77%2BfTE0NOUTCZ79i9BjqkAUKPMaHBP%2Bj9czsIdTLXPDd10%2FW03UZlPZih4kS7LEf8EegH7lBqpYVl%2BC8CClg8a3dccTRqTkTP4sb%2Btf1wyjZUZVTWOfKaOo0Qp%2FNL%2BjDy7QKiN8XcJEbD8GWS0ZTqOR8QfEDLgDXS0zTLrd847WXc3YZprjT3gyiujfzWJNR9IMj9S9cxxPifWOsqA%2FZpngcgX%2F7BWnlHBJ1pvnNpFNYKbOZa&X-Amz-Signature=6724bfcb392c05b7d2ce668168252c78c311c6964f5a9e2490daf3b30e769afa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMTFJ67%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mM8r5nG0Z6Tr5D0id%2BGKaqFkx9j%2BiU3tqCsIEpBE%2BgIhAIGsKeics2TsK1y%2FhSi99OxMBLL%2F3yGp2ZW9QjjFXNXJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQiOt%2FdzaqXWXCwRkq3ANN4TukSIjefh3RVhOGt8m7DB8n054EkYzACHOzdCRR%2BBrbya0ZJJQITpLZgJP%2F0p0aqHz5DYFau1wCgfOSXkhfd3%2FjgsU2B5CQutkgVZTVRl1ZQrMwvwQjGCzH%2B5S6gxgkW6TYjyNJNuIzeOEE82qay3qbFcGARgOgc8VWUsnRJQ2aHkR91BJXhgdHvNG8QuXhPGcl0EBkgQYSn2XPgYOdoA5Iltrbl%2BBkWVMLSrLfHuL0bWcDhItonpoQbw3sRvRvTN3aJbNtlj9VFsJdcWJ9%2B6oP71YCaErKai%2B5rnc7JIbpDeLKluP4QMqfTMpEqowWjLL79GKCLCOGbme95C%2BQk83t74liaymh0gdyophRoUImGGXQ%2B6nxfbOtEP%2Bflyg0uoQXBxMN66YHCgbUc4o%2BghUvfaFvWMOBEk07G49zWacBcrPEqZay9iLyO3hCqejQX4ATntIhisk1THXzsmn%2BNjfGcBj9Pum5NW3Vl9yPmIKk08oJq%2BVKeSCgCf7vuNgZavTqpYJ1toYU%2B8rgHm%2FXofUkDoUH06utLBTybjkTwGifCqHz7jaNgyX0NrYXFzhihHGb1tShO3YDkVg2KKCvrurm84jD9%2BtbSzG1vN65djDHef%2B77%2BfTE0NOUTCZ79i9BjqkAUKPMaHBP%2Bj9czsIdTLXPDd10%2FW03UZlPZih4kS7LEf8EegH7lBqpYVl%2BC8CClg8a3dccTRqTkTP4sb%2Btf1wyjZUZVTWOfKaOo0Qp%2FNL%2BjDy7QKiN8XcJEbD8GWS0ZTqOR8QfEDLgDXS0zTLrd847WXc3YZprjT3gyiujfzWJNR9IMj9S9cxxPifWOsqA%2FZpngcgX%2F7BWnlHBJ1pvnNpFNYKbOZa&X-Amz-Signature=b4ef09c81148960f58ad5922692de7b18769f214ef6cd2a3714cd9bd95edb2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMTFJ67%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mM8r5nG0Z6Tr5D0id%2BGKaqFkx9j%2BiU3tqCsIEpBE%2BgIhAIGsKeics2TsK1y%2FhSi99OxMBLL%2F3yGp2ZW9QjjFXNXJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQiOt%2FdzaqXWXCwRkq3ANN4TukSIjefh3RVhOGt8m7DB8n054EkYzACHOzdCRR%2BBrbya0ZJJQITpLZgJP%2F0p0aqHz5DYFau1wCgfOSXkhfd3%2FjgsU2B5CQutkgVZTVRl1ZQrMwvwQjGCzH%2B5S6gxgkW6TYjyNJNuIzeOEE82qay3qbFcGARgOgc8VWUsnRJQ2aHkR91BJXhgdHvNG8QuXhPGcl0EBkgQYSn2XPgYOdoA5Iltrbl%2BBkWVMLSrLfHuL0bWcDhItonpoQbw3sRvRvTN3aJbNtlj9VFsJdcWJ9%2B6oP71YCaErKai%2B5rnc7JIbpDeLKluP4QMqfTMpEqowWjLL79GKCLCOGbme95C%2BQk83t74liaymh0gdyophRoUImGGXQ%2B6nxfbOtEP%2Bflyg0uoQXBxMN66YHCgbUc4o%2BghUvfaFvWMOBEk07G49zWacBcrPEqZay9iLyO3hCqejQX4ATntIhisk1THXzsmn%2BNjfGcBj9Pum5NW3Vl9yPmIKk08oJq%2BVKeSCgCf7vuNgZavTqpYJ1toYU%2B8rgHm%2FXofUkDoUH06utLBTybjkTwGifCqHz7jaNgyX0NrYXFzhihHGb1tShO3YDkVg2KKCvrurm84jD9%2BtbSzG1vN65djDHef%2B77%2BfTE0NOUTCZ79i9BjqkAUKPMaHBP%2Bj9czsIdTLXPDd10%2FW03UZlPZih4kS7LEf8EegH7lBqpYVl%2BC8CClg8a3dccTRqTkTP4sb%2Btf1wyjZUZVTWOfKaOo0Qp%2FNL%2BjDy7QKiN8XcJEbD8GWS0ZTqOR8QfEDLgDXS0zTLrd847WXc3YZprjT3gyiujfzWJNR9IMj9S9cxxPifWOsqA%2FZpngcgX%2F7BWnlHBJ1pvnNpFNYKbOZa&X-Amz-Signature=73bd4bdd1b0c44aade52219c7d750e1a5fefc07d506e01f26c04b8cc95895a14&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
