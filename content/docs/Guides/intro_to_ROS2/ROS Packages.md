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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=b1e8e97113530126271c3c683551f55b06e152202382a00781d50b2e2aae0d51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=aef5fadbe6adc90d667a85e6ba8585909f7554bbfea0ae2017a0aba89aa3f975&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=aad587f05c848070344071e099cc1d9c0bb2ac655ad860bdab94d0c21f14d7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=84e531b5ff38f4e6c72892f51a07f52fcb519bc9bcd775dc61832f8456426331&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=51ec47cfbb71d7309eab76e0de004c5bb1ddbe5dd0dc49b3ba2583439c1b9550&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=f492ed4541c139280e0ada327ad6b039863ba2047e7614ed71b200867cb472bd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBBTENO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFjvSceGQtzFml7TJYeNjuFBJ0UttrGXmdWPqQKogEJfAiAJjrBz%2FDt23ctzKMZvLNBoUe18e%2BoHib9bW1BQwY2ulSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5%2Fd52Xc%2BIERsgaQKtwDFzQ5HumXYqcVk35Q%2BAIjsfVgt2xxvl2DIcZlhGkVJjT9SHURTRRblXK4rLm6RBMmpTQMkvYaxXm8Ef0cgQ2pyc9xIuseN80Tev%2BV9L1%2FqdK9lJsQ93jd%2Fnqx6HPoZSUKy1zrmYmyYS4SJKJhgYWrpYnDitoNOWXHrrVmNrKYO%2BievcACniOIcBc%2BUT8qfoRlm4I8S6XgSqgDWmKTcLgumlVdkT7sbx%2FV59yhCtX79VZ0BQ2Xvor%2FY6tMFhbXwrFuEC0zF1%2BATgs62UfRIvjhRyd%2FgkV0%2FlIbvTlRRbi3GqG2wGF4ImGjWGyHKA7bYfHsQEr8c41%2FQ2ENAgibl8lrgvC6V11%2FTWbGk5auhhDoDIm3e4V6HcGIppGB4Wwp%2BE6TfqaZNqN9AMrQP6Qo57vrbq%2BgUkBiEx0%2BF%2BVJrqyZzUdV6soIjRjBZ1vgVRcPQFv9U76snNoRYWu9ZYivdy5Opa9tf40%2BEPKtEfZOVhyP60TS2Gc3cawUOh%2F%2B4lT8mHIKVJDWjeXlG5U6YrckJMgukNhayDa8zZDKI9p%2B6zIEsOXZSIvkAgvS2q%2Bb0WdSA43Wyi%2F8%2BvIPkXFk5CpA5NXc4qPlaK%2BjGW3Canj3J4EwA8wbz%2FkYyCOc5PNxa7kwlNOawAY6pgFv%2BHyUAJmc9fJV7JwIxIjDwV20Ax2iPGIj%2BLnheBb9wi0FfB5HBC9q7uSGpiIMoFuZnceq2YzDLgWEAy2t%2Fcyl30Ev2BcN8BdjlCmVzEs6c%2FZQOHcbzcja4GFDxfPuz%2BWPk4Cfar2lpfIlz5%2FrD24u4LTStdFo%2B%2FSqcowcx4e26Nb88LuE4XtzSn1BvsCD40Gfo4wXP6DcWxqw0W9UPme7qmmRSlHl&X-Amz-Signature=8221d78464d632c98a7064fc7b9274a55d82b3230be0c4bfaf1271646f6e672b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
