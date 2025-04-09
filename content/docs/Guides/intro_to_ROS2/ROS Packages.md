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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZOWAG3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsi5H%2FQzZAM%2FXx1%2FKcWlazAqW9m6u1SNSTtYsgld8njQIhANM5BV01VqLAgB8jAxO6nZ0PjXPGKH8vz24bxfpkjZVQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTzoor1JuLKp14KCQq3ANivCnt7F0C0dFefl7P8TryneJ%2F7aRm0i1fSyBIAxcUGw7Ds9Li7gcapvzMLHgJYBIqdB026UxYD4SvEZSxtHnwVJnOSzDeDrFBgrV5m6QuMqV%2B1pL8zVvOWyoQT4O0be2LAi8UahA9pMUUEktMf4TIkULGdA9IKSQJ1BcuUHSLV8yVJbFPBzyQmy5arF1F%2BByaCDT2MT90pCV7ZBop4vyWKGmcwoaakYNvIzDgh52bIpFRUFd%2F3WxZnfUrZ5qJ2I3egO6eh9hin99Pe02XNTtVFPTjRdDmG4Q7UiCsa%2Fc003Y6cQftAiLw93sdYkjaEyML95WkHIAR9rpTPibNDNWmxBS7RhVr0TqKFbXWzJU%2BEomd%2FReBDOIE2vXAHilt%2BgebWd7sfPKfzqntJixQlNmj2yaLIIXU4D1BMJFYieJigS%2BsFIp%2Bwow2lIH8kaS%2B1fI6xkg8jkDz0C01zSn4Nk1MMYN7WI5c5EgRglVewZFQvNbZ%2FBAZDLkPnZlnQp4Lo6%2BV5BkvFNII%2B5Rd1FVYJJNLIi2bK85SRlZiK%2BIKxsoHIotVnKsw9ncvoit86H3ZTSqz04CjfGwS0JI3ExfTkJQR62FvLIhThMc%2FjEs%2FgDQarJCPDLVZ9G%2FqqEwlHTCLo9e%2FBjqkAYAOPrXTWZJzzA4NnazvUOfNKhIVm8vEsKOSQWUzVODRQ3yOJXRgRncnjFbrPjN9jw29rRF14D0Ain%2Fmor%2Bkx4Kd5w%2FdZl35q5%2Bt20LwZlQEIHnSVD5m4RX5kYLj%2BzuPBs6yEbY7yin64ZLNKl4k%2FNvu6%2B6KAUOnIlgiHyw5TCj7D82nWoCf3%2FJrgYB4xogzPFCtF%2FGaYHwMLRIAre2xryqTrfS6&X-Amz-Signature=f7e7cfbe51ddc058ea9de881e890df1b1894ed244e32ae94e7f8646cb405c1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZOWAG3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsi5H%2FQzZAM%2FXx1%2FKcWlazAqW9m6u1SNSTtYsgld8njQIhANM5BV01VqLAgB8jAxO6nZ0PjXPGKH8vz24bxfpkjZVQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTzoor1JuLKp14KCQq3ANivCnt7F0C0dFefl7P8TryneJ%2F7aRm0i1fSyBIAxcUGw7Ds9Li7gcapvzMLHgJYBIqdB026UxYD4SvEZSxtHnwVJnOSzDeDrFBgrV5m6QuMqV%2B1pL8zVvOWyoQT4O0be2LAi8UahA9pMUUEktMf4TIkULGdA9IKSQJ1BcuUHSLV8yVJbFPBzyQmy5arF1F%2BByaCDT2MT90pCV7ZBop4vyWKGmcwoaakYNvIzDgh52bIpFRUFd%2F3WxZnfUrZ5qJ2I3egO6eh9hin99Pe02XNTtVFPTjRdDmG4Q7UiCsa%2Fc003Y6cQftAiLw93sdYkjaEyML95WkHIAR9rpTPibNDNWmxBS7RhVr0TqKFbXWzJU%2BEomd%2FReBDOIE2vXAHilt%2BgebWd7sfPKfzqntJixQlNmj2yaLIIXU4D1BMJFYieJigS%2BsFIp%2Bwow2lIH8kaS%2B1fI6xkg8jkDz0C01zSn4Nk1MMYN7WI5c5EgRglVewZFQvNbZ%2FBAZDLkPnZlnQp4Lo6%2BV5BkvFNII%2B5Rd1FVYJJNLIi2bK85SRlZiK%2BIKxsoHIotVnKsw9ncvoit86H3ZTSqz04CjfGwS0JI3ExfTkJQR62FvLIhThMc%2FjEs%2FgDQarJCPDLVZ9G%2FqqEwlHTCLo9e%2FBjqkAYAOPrXTWZJzzA4NnazvUOfNKhIVm8vEsKOSQWUzVODRQ3yOJXRgRncnjFbrPjN9jw29rRF14D0Ain%2Fmor%2Bkx4Kd5w%2FdZl35q5%2Bt20LwZlQEIHnSVD5m4RX5kYLj%2BzuPBs6yEbY7yin64ZLNKl4k%2FNvu6%2B6KAUOnIlgiHyw5TCj7D82nWoCf3%2FJrgYB4xogzPFCtF%2FGaYHwMLRIAre2xryqTrfS6&X-Amz-Signature=65a7258c0a9253a44b53cd4f4ba73598806208260117a9fc6859b95a04283997&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZOWAG3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsi5H%2FQzZAM%2FXx1%2FKcWlazAqW9m6u1SNSTtYsgld8njQIhANM5BV01VqLAgB8jAxO6nZ0PjXPGKH8vz24bxfpkjZVQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTzoor1JuLKp14KCQq3ANivCnt7F0C0dFefl7P8TryneJ%2F7aRm0i1fSyBIAxcUGw7Ds9Li7gcapvzMLHgJYBIqdB026UxYD4SvEZSxtHnwVJnOSzDeDrFBgrV5m6QuMqV%2B1pL8zVvOWyoQT4O0be2LAi8UahA9pMUUEktMf4TIkULGdA9IKSQJ1BcuUHSLV8yVJbFPBzyQmy5arF1F%2BByaCDT2MT90pCV7ZBop4vyWKGmcwoaakYNvIzDgh52bIpFRUFd%2F3WxZnfUrZ5qJ2I3egO6eh9hin99Pe02XNTtVFPTjRdDmG4Q7UiCsa%2Fc003Y6cQftAiLw93sdYkjaEyML95WkHIAR9rpTPibNDNWmxBS7RhVr0TqKFbXWzJU%2BEomd%2FReBDOIE2vXAHilt%2BgebWd7sfPKfzqntJixQlNmj2yaLIIXU4D1BMJFYieJigS%2BsFIp%2Bwow2lIH8kaS%2B1fI6xkg8jkDz0C01zSn4Nk1MMYN7WI5c5EgRglVewZFQvNbZ%2FBAZDLkPnZlnQp4Lo6%2BV5BkvFNII%2B5Rd1FVYJJNLIi2bK85SRlZiK%2BIKxsoHIotVnKsw9ncvoit86H3ZTSqz04CjfGwS0JI3ExfTkJQR62FvLIhThMc%2FjEs%2FgDQarJCPDLVZ9G%2FqqEwlHTCLo9e%2FBjqkAYAOPrXTWZJzzA4NnazvUOfNKhIVm8vEsKOSQWUzVODRQ3yOJXRgRncnjFbrPjN9jw29rRF14D0Ain%2Fmor%2Bkx4Kd5w%2FdZl35q5%2Bt20LwZlQEIHnSVD5m4RX5kYLj%2BzuPBs6yEbY7yin64ZLNKl4k%2FNvu6%2B6KAUOnIlgiHyw5TCj7D82nWoCf3%2FJrgYB4xogzPFCtF%2FGaYHwMLRIAre2xryqTrfS6&X-Amz-Signature=a61cda3c203aea0917397749cf376f2d8c2f631419d16c4f7f4906cb043ab494&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZOWAG3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsi5H%2FQzZAM%2FXx1%2FKcWlazAqW9m6u1SNSTtYsgld8njQIhANM5BV01VqLAgB8jAxO6nZ0PjXPGKH8vz24bxfpkjZVQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTzoor1JuLKp14KCQq3ANivCnt7F0C0dFefl7P8TryneJ%2F7aRm0i1fSyBIAxcUGw7Ds9Li7gcapvzMLHgJYBIqdB026UxYD4SvEZSxtHnwVJnOSzDeDrFBgrV5m6QuMqV%2B1pL8zVvOWyoQT4O0be2LAi8UahA9pMUUEktMf4TIkULGdA9IKSQJ1BcuUHSLV8yVJbFPBzyQmy5arF1F%2BByaCDT2MT90pCV7ZBop4vyWKGmcwoaakYNvIzDgh52bIpFRUFd%2F3WxZnfUrZ5qJ2I3egO6eh9hin99Pe02XNTtVFPTjRdDmG4Q7UiCsa%2Fc003Y6cQftAiLw93sdYkjaEyML95WkHIAR9rpTPibNDNWmxBS7RhVr0TqKFbXWzJU%2BEomd%2FReBDOIE2vXAHilt%2BgebWd7sfPKfzqntJixQlNmj2yaLIIXU4D1BMJFYieJigS%2BsFIp%2Bwow2lIH8kaS%2B1fI6xkg8jkDz0C01zSn4Nk1MMYN7WI5c5EgRglVewZFQvNbZ%2FBAZDLkPnZlnQp4Lo6%2BV5BkvFNII%2B5Rd1FVYJJNLIi2bK85SRlZiK%2BIKxsoHIotVnKsw9ncvoit86H3ZTSqz04CjfGwS0JI3ExfTkJQR62FvLIhThMc%2FjEs%2FgDQarJCPDLVZ9G%2FqqEwlHTCLo9e%2FBjqkAYAOPrXTWZJzzA4NnazvUOfNKhIVm8vEsKOSQWUzVODRQ3yOJXRgRncnjFbrPjN9jw29rRF14D0Ain%2Fmor%2Bkx4Kd5w%2FdZl35q5%2Bt20LwZlQEIHnSVD5m4RX5kYLj%2BzuPBs6yEbY7yin64ZLNKl4k%2FNvu6%2B6KAUOnIlgiHyw5TCj7D82nWoCf3%2FJrgYB4xogzPFCtF%2FGaYHwMLRIAre2xryqTrfS6&X-Amz-Signature=952ba01cd6537c59867a6e9d640097d5bc4bdbc8526de48cf4b65771e3886d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZOWAG3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsi5H%2FQzZAM%2FXx1%2FKcWlazAqW9m6u1SNSTtYsgld8njQIhANM5BV01VqLAgB8jAxO6nZ0PjXPGKH8vz24bxfpkjZVQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTzoor1JuLKp14KCQq3ANivCnt7F0C0dFefl7P8TryneJ%2F7aRm0i1fSyBIAxcUGw7Ds9Li7gcapvzMLHgJYBIqdB026UxYD4SvEZSxtHnwVJnOSzDeDrFBgrV5m6QuMqV%2B1pL8zVvOWyoQT4O0be2LAi8UahA9pMUUEktMf4TIkULGdA9IKSQJ1BcuUHSLV8yVJbFPBzyQmy5arF1F%2BByaCDT2MT90pCV7ZBop4vyWKGmcwoaakYNvIzDgh52bIpFRUFd%2F3WxZnfUrZ5qJ2I3egO6eh9hin99Pe02XNTtVFPTjRdDmG4Q7UiCsa%2Fc003Y6cQftAiLw93sdYkjaEyML95WkHIAR9rpTPibNDNWmxBS7RhVr0TqKFbXWzJU%2BEomd%2FReBDOIE2vXAHilt%2BgebWd7sfPKfzqntJixQlNmj2yaLIIXU4D1BMJFYieJigS%2BsFIp%2Bwow2lIH8kaS%2B1fI6xkg8jkDz0C01zSn4Nk1MMYN7WI5c5EgRglVewZFQvNbZ%2FBAZDLkPnZlnQp4Lo6%2BV5BkvFNII%2B5Rd1FVYJJNLIi2bK85SRlZiK%2BIKxsoHIotVnKsw9ncvoit86H3ZTSqz04CjfGwS0JI3ExfTkJQR62FvLIhThMc%2FjEs%2FgDQarJCPDLVZ9G%2FqqEwlHTCLo9e%2FBjqkAYAOPrXTWZJzzA4NnazvUOfNKhIVm8vEsKOSQWUzVODRQ3yOJXRgRncnjFbrPjN9jw29rRF14D0Ain%2Fmor%2Bkx4Kd5w%2FdZl35q5%2Bt20LwZlQEIHnSVD5m4RX5kYLj%2BzuPBs6yEbY7yin64ZLNKl4k%2FNvu6%2B6KAUOnIlgiHyw5TCj7D82nWoCf3%2FJrgYB4xogzPFCtF%2FGaYHwMLRIAre2xryqTrfS6&X-Amz-Signature=a87b6f136d5800e2850351209d88b240a79f2e6311dae7c4d7a53490241cedc1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZOWAG3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsi5H%2FQzZAM%2FXx1%2FKcWlazAqW9m6u1SNSTtYsgld8njQIhANM5BV01VqLAgB8jAxO6nZ0PjXPGKH8vz24bxfpkjZVQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTzoor1JuLKp14KCQq3ANivCnt7F0C0dFefl7P8TryneJ%2F7aRm0i1fSyBIAxcUGw7Ds9Li7gcapvzMLHgJYBIqdB026UxYD4SvEZSxtHnwVJnOSzDeDrFBgrV5m6QuMqV%2B1pL8zVvOWyoQT4O0be2LAi8UahA9pMUUEktMf4TIkULGdA9IKSQJ1BcuUHSLV8yVJbFPBzyQmy5arF1F%2BByaCDT2MT90pCV7ZBop4vyWKGmcwoaakYNvIzDgh52bIpFRUFd%2F3WxZnfUrZ5qJ2I3egO6eh9hin99Pe02XNTtVFPTjRdDmG4Q7UiCsa%2Fc003Y6cQftAiLw93sdYkjaEyML95WkHIAR9rpTPibNDNWmxBS7RhVr0TqKFbXWzJU%2BEomd%2FReBDOIE2vXAHilt%2BgebWd7sfPKfzqntJixQlNmj2yaLIIXU4D1BMJFYieJigS%2BsFIp%2Bwow2lIH8kaS%2B1fI6xkg8jkDz0C01zSn4Nk1MMYN7WI5c5EgRglVewZFQvNbZ%2FBAZDLkPnZlnQp4Lo6%2BV5BkvFNII%2B5Rd1FVYJJNLIi2bK85SRlZiK%2BIKxsoHIotVnKsw9ncvoit86H3ZTSqz04CjfGwS0JI3ExfTkJQR62FvLIhThMc%2FjEs%2FgDQarJCPDLVZ9G%2FqqEwlHTCLo9e%2FBjqkAYAOPrXTWZJzzA4NnazvUOfNKhIVm8vEsKOSQWUzVODRQ3yOJXRgRncnjFbrPjN9jw29rRF14D0Ain%2Fmor%2Bkx4Kd5w%2FdZl35q5%2Bt20LwZlQEIHnSVD5m4RX5kYLj%2BzuPBs6yEbY7yin64ZLNKl4k%2FNvu6%2B6KAUOnIlgiHyw5TCj7D82nWoCf3%2FJrgYB4xogzPFCtF%2FGaYHwMLRIAre2xryqTrfS6&X-Amz-Signature=5698ac895e8b90bbb07bccc2a7966a501ca8bb84db25dbd0b6dfb42f1a3a0cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZOWAG3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsi5H%2FQzZAM%2FXx1%2FKcWlazAqW9m6u1SNSTtYsgld8njQIhANM5BV01VqLAgB8jAxO6nZ0PjXPGKH8vz24bxfpkjZVQKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTzoor1JuLKp14KCQq3ANivCnt7F0C0dFefl7P8TryneJ%2F7aRm0i1fSyBIAxcUGw7Ds9Li7gcapvzMLHgJYBIqdB026UxYD4SvEZSxtHnwVJnOSzDeDrFBgrV5m6QuMqV%2B1pL8zVvOWyoQT4O0be2LAi8UahA9pMUUEktMf4TIkULGdA9IKSQJ1BcuUHSLV8yVJbFPBzyQmy5arF1F%2BByaCDT2MT90pCV7ZBop4vyWKGmcwoaakYNvIzDgh52bIpFRUFd%2F3WxZnfUrZ5qJ2I3egO6eh9hin99Pe02XNTtVFPTjRdDmG4Q7UiCsa%2Fc003Y6cQftAiLw93sdYkjaEyML95WkHIAR9rpTPibNDNWmxBS7RhVr0TqKFbXWzJU%2BEomd%2FReBDOIE2vXAHilt%2BgebWd7sfPKfzqntJixQlNmj2yaLIIXU4D1BMJFYieJigS%2BsFIp%2Bwow2lIH8kaS%2B1fI6xkg8jkDz0C01zSn4Nk1MMYN7WI5c5EgRglVewZFQvNbZ%2FBAZDLkPnZlnQp4Lo6%2BV5BkvFNII%2B5Rd1FVYJJNLIi2bK85SRlZiK%2BIKxsoHIotVnKsw9ncvoit86H3ZTSqz04CjfGwS0JI3ExfTkJQR62FvLIhThMc%2FjEs%2FgDQarJCPDLVZ9G%2FqqEwlHTCLo9e%2FBjqkAYAOPrXTWZJzzA4NnazvUOfNKhIVm8vEsKOSQWUzVODRQ3yOJXRgRncnjFbrPjN9jw29rRF14D0Ain%2Fmor%2Bkx4Kd5w%2FdZl35q5%2Bt20LwZlQEIHnSVD5m4RX5kYLj%2BzuPBs6yEbY7yin64ZLNKl4k%2FNvu6%2B6KAUOnIlgiHyw5TCj7D82nWoCf3%2FJrgYB4xogzPFCtF%2FGaYHwMLRIAre2xryqTrfS6&X-Amz-Signature=10c2810f4dfc22467da5c043dfa63ae8e0d7d485d881a943d7c95119c320cbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
