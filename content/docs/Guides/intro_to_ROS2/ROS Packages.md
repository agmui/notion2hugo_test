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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFIZ2XA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoSRZRIOGFUFz%2FdDuqImXqkk0LHaee%2FndwydaDW79GaAiAkk2%2BG5nyh0n4uFcucXGHbuagkDYuQaAbwlHcD614DVyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwmTvaX4QRc%2Fn3BTKtwDDV2gwH0C1IRB791bCmkj0SNqLDIple9XhIVzGYjrfYj6ukfVaNSS686v8pXSEuLpVGJSK%2FSHAAB%2BnJARr%2FzbloR1kgI8TLBQwYL%2BOiUzs7zDWvLtw1rjhl7qusfVsLc55FhxKJ1nqXC%2B%2BhZzyAHX5DizbYtHdcGbeqa0tUCXctqNoxNf73k7eg4LmIYTWEGzi9ApyjAAgxMUWKRncMtLH1w7V4R5ARBRGL8n%2FFQl24muujDRzR%2BSdO75BT9HH70F8tV5ORauocfsZAqTZgxYNwmPWoIuGXSaVF8CYLyMNWO%2FNlhNLs871Fkj2h77fANChdAzFMBxZc9UPzyQ6lLC%2FQnF67s8YSE2ZUeEw%2BcY5L0rM4CkSQaH8akebq0EdN8Ofr%2BgI7ZFZcYw5LoyhH8Btx%2FoprDSVzEV3KqJc%2F56t%2FDUlM9g8uxEONjqZjexgQkXOFroOzC5bL7Fi8PfFVHPdTS6wVzvAmTOhOPpaIOm7%2BmRiSNuoWa5rmAcZ9WcEMcMLOA5Gb64hPmWZtr%2Bl9H3RpAbtRcZFQ7alr1Neyr4LwSg%2Bhe4UM16D27Ym85%2F1ixF8iWus7laeu17qISynNv3UPi%2BM2Mge8%2Ffbhd5k3g5Ye1gj7qheRxLd6zmEkkw3q3LwwY6pgHPGKJkLyjdVjJj5eYFkBQYjm1R2MbhBI%2FZo5KcQjlXJsA8%2Bi%2FWyeFpYr6Q1DQOR3ZXBDS%2BvjQ9PpJH7vuIkg23bm7iRZQKIkHDtWJyztZzt7K2trklNAjVbMDYDDkWfCaau7Aalb%2FYhEFzFvEXxcnv6yH0tRcCecNcFMgcMlfQy86kQrS4CsxevJB2NL9mOPWdsHUoJr9GWESeRZJwJSl9AndHydD%2B&X-Amz-Signature=24d1438c1d3b4390329441956c70310d447f867e9bf4606f8e1556aeffda0f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFIZ2XA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoSRZRIOGFUFz%2FdDuqImXqkk0LHaee%2FndwydaDW79GaAiAkk2%2BG5nyh0n4uFcucXGHbuagkDYuQaAbwlHcD614DVyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwmTvaX4QRc%2Fn3BTKtwDDV2gwH0C1IRB791bCmkj0SNqLDIple9XhIVzGYjrfYj6ukfVaNSS686v8pXSEuLpVGJSK%2FSHAAB%2BnJARr%2FzbloR1kgI8TLBQwYL%2BOiUzs7zDWvLtw1rjhl7qusfVsLc55FhxKJ1nqXC%2B%2BhZzyAHX5DizbYtHdcGbeqa0tUCXctqNoxNf73k7eg4LmIYTWEGzi9ApyjAAgxMUWKRncMtLH1w7V4R5ARBRGL8n%2FFQl24muujDRzR%2BSdO75BT9HH70F8tV5ORauocfsZAqTZgxYNwmPWoIuGXSaVF8CYLyMNWO%2FNlhNLs871Fkj2h77fANChdAzFMBxZc9UPzyQ6lLC%2FQnF67s8YSE2ZUeEw%2BcY5L0rM4CkSQaH8akebq0EdN8Ofr%2BgI7ZFZcYw5LoyhH8Btx%2FoprDSVzEV3KqJc%2F56t%2FDUlM9g8uxEONjqZjexgQkXOFroOzC5bL7Fi8PfFVHPdTS6wVzvAmTOhOPpaIOm7%2BmRiSNuoWa5rmAcZ9WcEMcMLOA5Gb64hPmWZtr%2Bl9H3RpAbtRcZFQ7alr1Neyr4LwSg%2Bhe4UM16D27Ym85%2F1ixF8iWus7laeu17qISynNv3UPi%2BM2Mge8%2Ffbhd5k3g5Ye1gj7qheRxLd6zmEkkw3q3LwwY6pgHPGKJkLyjdVjJj5eYFkBQYjm1R2MbhBI%2FZo5KcQjlXJsA8%2Bi%2FWyeFpYr6Q1DQOR3ZXBDS%2BvjQ9PpJH7vuIkg23bm7iRZQKIkHDtWJyztZzt7K2trklNAjVbMDYDDkWfCaau7Aalb%2FYhEFzFvEXxcnv6yH0tRcCecNcFMgcMlfQy86kQrS4CsxevJB2NL9mOPWdsHUoJr9GWESeRZJwJSl9AndHydD%2B&X-Amz-Signature=0ce02414fb15bb14ce33cd4f5a61a4daf8b396c78994179f3efd19548bbb75e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFIZ2XA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoSRZRIOGFUFz%2FdDuqImXqkk0LHaee%2FndwydaDW79GaAiAkk2%2BG5nyh0n4uFcucXGHbuagkDYuQaAbwlHcD614DVyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwmTvaX4QRc%2Fn3BTKtwDDV2gwH0C1IRB791bCmkj0SNqLDIple9XhIVzGYjrfYj6ukfVaNSS686v8pXSEuLpVGJSK%2FSHAAB%2BnJARr%2FzbloR1kgI8TLBQwYL%2BOiUzs7zDWvLtw1rjhl7qusfVsLc55FhxKJ1nqXC%2B%2BhZzyAHX5DizbYtHdcGbeqa0tUCXctqNoxNf73k7eg4LmIYTWEGzi9ApyjAAgxMUWKRncMtLH1w7V4R5ARBRGL8n%2FFQl24muujDRzR%2BSdO75BT9HH70F8tV5ORauocfsZAqTZgxYNwmPWoIuGXSaVF8CYLyMNWO%2FNlhNLs871Fkj2h77fANChdAzFMBxZc9UPzyQ6lLC%2FQnF67s8YSE2ZUeEw%2BcY5L0rM4CkSQaH8akebq0EdN8Ofr%2BgI7ZFZcYw5LoyhH8Btx%2FoprDSVzEV3KqJc%2F56t%2FDUlM9g8uxEONjqZjexgQkXOFroOzC5bL7Fi8PfFVHPdTS6wVzvAmTOhOPpaIOm7%2BmRiSNuoWa5rmAcZ9WcEMcMLOA5Gb64hPmWZtr%2Bl9H3RpAbtRcZFQ7alr1Neyr4LwSg%2Bhe4UM16D27Ym85%2F1ixF8iWus7laeu17qISynNv3UPi%2BM2Mge8%2Ffbhd5k3g5Ye1gj7qheRxLd6zmEkkw3q3LwwY6pgHPGKJkLyjdVjJj5eYFkBQYjm1R2MbhBI%2FZo5KcQjlXJsA8%2Bi%2FWyeFpYr6Q1DQOR3ZXBDS%2BvjQ9PpJH7vuIkg23bm7iRZQKIkHDtWJyztZzt7K2trklNAjVbMDYDDkWfCaau7Aalb%2FYhEFzFvEXxcnv6yH0tRcCecNcFMgcMlfQy86kQrS4CsxevJB2NL9mOPWdsHUoJr9GWESeRZJwJSl9AndHydD%2B&X-Amz-Signature=0ab41b83fac7ad07395cd6553a6600b0936ebe7bbdd8a65064f8a136216a59c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFIZ2XA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoSRZRIOGFUFz%2FdDuqImXqkk0LHaee%2FndwydaDW79GaAiAkk2%2BG5nyh0n4uFcucXGHbuagkDYuQaAbwlHcD614DVyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwmTvaX4QRc%2Fn3BTKtwDDV2gwH0C1IRB791bCmkj0SNqLDIple9XhIVzGYjrfYj6ukfVaNSS686v8pXSEuLpVGJSK%2FSHAAB%2BnJARr%2FzbloR1kgI8TLBQwYL%2BOiUzs7zDWvLtw1rjhl7qusfVsLc55FhxKJ1nqXC%2B%2BhZzyAHX5DizbYtHdcGbeqa0tUCXctqNoxNf73k7eg4LmIYTWEGzi9ApyjAAgxMUWKRncMtLH1w7V4R5ARBRGL8n%2FFQl24muujDRzR%2BSdO75BT9HH70F8tV5ORauocfsZAqTZgxYNwmPWoIuGXSaVF8CYLyMNWO%2FNlhNLs871Fkj2h77fANChdAzFMBxZc9UPzyQ6lLC%2FQnF67s8YSE2ZUeEw%2BcY5L0rM4CkSQaH8akebq0EdN8Ofr%2BgI7ZFZcYw5LoyhH8Btx%2FoprDSVzEV3KqJc%2F56t%2FDUlM9g8uxEONjqZjexgQkXOFroOzC5bL7Fi8PfFVHPdTS6wVzvAmTOhOPpaIOm7%2BmRiSNuoWa5rmAcZ9WcEMcMLOA5Gb64hPmWZtr%2Bl9H3RpAbtRcZFQ7alr1Neyr4LwSg%2Bhe4UM16D27Ym85%2F1ixF8iWus7laeu17qISynNv3UPi%2BM2Mge8%2Ffbhd5k3g5Ye1gj7qheRxLd6zmEkkw3q3LwwY6pgHPGKJkLyjdVjJj5eYFkBQYjm1R2MbhBI%2FZo5KcQjlXJsA8%2Bi%2FWyeFpYr6Q1DQOR3ZXBDS%2BvjQ9PpJH7vuIkg23bm7iRZQKIkHDtWJyztZzt7K2trklNAjVbMDYDDkWfCaau7Aalb%2FYhEFzFvEXxcnv6yH0tRcCecNcFMgcMlfQy86kQrS4CsxevJB2NL9mOPWdsHUoJr9GWESeRZJwJSl9AndHydD%2B&X-Amz-Signature=0434f20978fe41a9ccda55a1661c90d09401d3e8ac4544ce4a7be3881c296997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFIZ2XA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoSRZRIOGFUFz%2FdDuqImXqkk0LHaee%2FndwydaDW79GaAiAkk2%2BG5nyh0n4uFcucXGHbuagkDYuQaAbwlHcD614DVyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwmTvaX4QRc%2Fn3BTKtwDDV2gwH0C1IRB791bCmkj0SNqLDIple9XhIVzGYjrfYj6ukfVaNSS686v8pXSEuLpVGJSK%2FSHAAB%2BnJARr%2FzbloR1kgI8TLBQwYL%2BOiUzs7zDWvLtw1rjhl7qusfVsLc55FhxKJ1nqXC%2B%2BhZzyAHX5DizbYtHdcGbeqa0tUCXctqNoxNf73k7eg4LmIYTWEGzi9ApyjAAgxMUWKRncMtLH1w7V4R5ARBRGL8n%2FFQl24muujDRzR%2BSdO75BT9HH70F8tV5ORauocfsZAqTZgxYNwmPWoIuGXSaVF8CYLyMNWO%2FNlhNLs871Fkj2h77fANChdAzFMBxZc9UPzyQ6lLC%2FQnF67s8YSE2ZUeEw%2BcY5L0rM4CkSQaH8akebq0EdN8Ofr%2BgI7ZFZcYw5LoyhH8Btx%2FoprDSVzEV3KqJc%2F56t%2FDUlM9g8uxEONjqZjexgQkXOFroOzC5bL7Fi8PfFVHPdTS6wVzvAmTOhOPpaIOm7%2BmRiSNuoWa5rmAcZ9WcEMcMLOA5Gb64hPmWZtr%2Bl9H3RpAbtRcZFQ7alr1Neyr4LwSg%2Bhe4UM16D27Ym85%2F1ixF8iWus7laeu17qISynNv3UPi%2BM2Mge8%2Ffbhd5k3g5Ye1gj7qheRxLd6zmEkkw3q3LwwY6pgHPGKJkLyjdVjJj5eYFkBQYjm1R2MbhBI%2FZo5KcQjlXJsA8%2Bi%2FWyeFpYr6Q1DQOR3ZXBDS%2BvjQ9PpJH7vuIkg23bm7iRZQKIkHDtWJyztZzt7K2trklNAjVbMDYDDkWfCaau7Aalb%2FYhEFzFvEXxcnv6yH0tRcCecNcFMgcMlfQy86kQrS4CsxevJB2NL9mOPWdsHUoJr9GWESeRZJwJSl9AndHydD%2B&X-Amz-Signature=a907f4e517a4c0011b899da244fcc9ef3b823ae083c30cc197957223e80bc341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFIZ2XA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoSRZRIOGFUFz%2FdDuqImXqkk0LHaee%2FndwydaDW79GaAiAkk2%2BG5nyh0n4uFcucXGHbuagkDYuQaAbwlHcD614DVyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwmTvaX4QRc%2Fn3BTKtwDDV2gwH0C1IRB791bCmkj0SNqLDIple9XhIVzGYjrfYj6ukfVaNSS686v8pXSEuLpVGJSK%2FSHAAB%2BnJARr%2FzbloR1kgI8TLBQwYL%2BOiUzs7zDWvLtw1rjhl7qusfVsLc55FhxKJ1nqXC%2B%2BhZzyAHX5DizbYtHdcGbeqa0tUCXctqNoxNf73k7eg4LmIYTWEGzi9ApyjAAgxMUWKRncMtLH1w7V4R5ARBRGL8n%2FFQl24muujDRzR%2BSdO75BT9HH70F8tV5ORauocfsZAqTZgxYNwmPWoIuGXSaVF8CYLyMNWO%2FNlhNLs871Fkj2h77fANChdAzFMBxZc9UPzyQ6lLC%2FQnF67s8YSE2ZUeEw%2BcY5L0rM4CkSQaH8akebq0EdN8Ofr%2BgI7ZFZcYw5LoyhH8Btx%2FoprDSVzEV3KqJc%2F56t%2FDUlM9g8uxEONjqZjexgQkXOFroOzC5bL7Fi8PfFVHPdTS6wVzvAmTOhOPpaIOm7%2BmRiSNuoWa5rmAcZ9WcEMcMLOA5Gb64hPmWZtr%2Bl9H3RpAbtRcZFQ7alr1Neyr4LwSg%2Bhe4UM16D27Ym85%2F1ixF8iWus7laeu17qISynNv3UPi%2BM2Mge8%2Ffbhd5k3g5Ye1gj7qheRxLd6zmEkkw3q3LwwY6pgHPGKJkLyjdVjJj5eYFkBQYjm1R2MbhBI%2FZo5KcQjlXJsA8%2Bi%2FWyeFpYr6Q1DQOR3ZXBDS%2BvjQ9PpJH7vuIkg23bm7iRZQKIkHDtWJyztZzt7K2trklNAjVbMDYDDkWfCaau7Aalb%2FYhEFzFvEXxcnv6yH0tRcCecNcFMgcMlfQy86kQrS4CsxevJB2NL9mOPWdsHUoJr9GWESeRZJwJSl9AndHydD%2B&X-Amz-Signature=9cd77db2fb0e7e9460151935d0a0f95d15308cd7ee19550c652b051f32ead1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFIZ2XA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoSRZRIOGFUFz%2FdDuqImXqkk0LHaee%2FndwydaDW79GaAiAkk2%2BG5nyh0n4uFcucXGHbuagkDYuQaAbwlHcD614DVyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwmTvaX4QRc%2Fn3BTKtwDDV2gwH0C1IRB791bCmkj0SNqLDIple9XhIVzGYjrfYj6ukfVaNSS686v8pXSEuLpVGJSK%2FSHAAB%2BnJARr%2FzbloR1kgI8TLBQwYL%2BOiUzs7zDWvLtw1rjhl7qusfVsLc55FhxKJ1nqXC%2B%2BhZzyAHX5DizbYtHdcGbeqa0tUCXctqNoxNf73k7eg4LmIYTWEGzi9ApyjAAgxMUWKRncMtLH1w7V4R5ARBRGL8n%2FFQl24muujDRzR%2BSdO75BT9HH70F8tV5ORauocfsZAqTZgxYNwmPWoIuGXSaVF8CYLyMNWO%2FNlhNLs871Fkj2h77fANChdAzFMBxZc9UPzyQ6lLC%2FQnF67s8YSE2ZUeEw%2BcY5L0rM4CkSQaH8akebq0EdN8Ofr%2BgI7ZFZcYw5LoyhH8Btx%2FoprDSVzEV3KqJc%2F56t%2FDUlM9g8uxEONjqZjexgQkXOFroOzC5bL7Fi8PfFVHPdTS6wVzvAmTOhOPpaIOm7%2BmRiSNuoWa5rmAcZ9WcEMcMLOA5Gb64hPmWZtr%2Bl9H3RpAbtRcZFQ7alr1Neyr4LwSg%2Bhe4UM16D27Ym85%2F1ixF8iWus7laeu17qISynNv3UPi%2BM2Mge8%2Ffbhd5k3g5Ye1gj7qheRxLd6zmEkkw3q3LwwY6pgHPGKJkLyjdVjJj5eYFkBQYjm1R2MbhBI%2FZo5KcQjlXJsA8%2Bi%2FWyeFpYr6Q1DQOR3ZXBDS%2BvjQ9PpJH7vuIkg23bm7iRZQKIkHDtWJyztZzt7K2trklNAjVbMDYDDkWfCaau7Aalb%2FYhEFzFvEXxcnv6yH0tRcCecNcFMgcMlfQy86kQrS4CsxevJB2NL9mOPWdsHUoJr9GWESeRZJwJSl9AndHydD%2B&X-Amz-Signature=3abe63aa31d88e6470fffac0938d0b8bddfc7eaf9b4f4ec934387d6c30b2484f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
