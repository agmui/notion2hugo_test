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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHOUQUV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDxbrtlgWfiCDaMeCgQ1EEFLHyHYI6JnQ%2BUamU69EWPvQIhAKsLkV%2BJCQzQzbQIbB5loye1URGvf8iODBjwL%2Fb8S2lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYO1%2BB3vBnx4rUv84q3AOvmVeYEPdZBRZsv6X4pgJ9xxwpvf9PVGZZuuWBeJgY5oTptmJZ5o%2F7zD5WELBRfnTudj3iWcDzFh%2FjuP7fvFQld5hx%2F6re8nCrJNuqzkgjwwDDbWpFoRJ409j1p9l9Po6ezAJIC47QvHFt24sNo94TOT7qVkpZkGA17Zm8gMVfBS8YHi9KrhGrKB6AMXTE6IimAjbD5WfrISoqMdXZNPeELynhwrtiwAKX%2FlVhcxk2nGUFw4VrHWoDgQzyNkpEcUTUuXKJk6l%2FIYH9zWjbHmuJLXKA229%2FxIWAPO1GwXAqDVWV6NZYXs0tLzLzcG%2Bj84q%2BMMz0moiCMOFUeEv6B2LOEgvOmAEYPKXjQmOgfg7WVrwS71yM0zbaDd83%2FUY1z30IkmKM%2B6VDqeJSd72iOAv%2BGCVYLx1SuIgOSepSZgZVDw5f4XImhdJ2la1KGyrgshKQYUF4PJe2EGAdyZU5NynpVBn8M2z3WLs%2FqdKepfpbDTzpEi9xVnYHXZNSVnlpWqKD7JlpEWf9wilvkyNw7WuI638NqWGbSPTKJN59jrmVnQ1PRQyozPc%2Ftf8pOQezMJTel%2BI4Cv8Db45HnSPdbat6P4hwu0woDiuaOhCsM0RRdtrUlcIl%2Fh4PbJHUGTD8k7XCBjqkAT7pjwkm4lCZ6YSJA6RCdlyW09OgfcpcR6mZQwNie1LHbaG2l%2Btnyaku6DvZKNco2j%2BsOOQA71GN%2Br7PAdvsOywzn06bdklO60gRo%2BAGD4zQ8L%2BBcetul3eJ81TuHNTq0U48uEsPCbODYVXzOMmh0R5XoZq22h%2B8K4GQVIOUDnDzKposS4pZpk6Fb%2B7ZLgL1osnm59MqFyxTmH%2Fnh66bH0klIG6g&X-Amz-Signature=46e5b1f88550f6fba345b445e8b1a93d87fa7bd6ecbd3a406b02dc8a655388b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHOUQUV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDxbrtlgWfiCDaMeCgQ1EEFLHyHYI6JnQ%2BUamU69EWPvQIhAKsLkV%2BJCQzQzbQIbB5loye1URGvf8iODBjwL%2Fb8S2lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYO1%2BB3vBnx4rUv84q3AOvmVeYEPdZBRZsv6X4pgJ9xxwpvf9PVGZZuuWBeJgY5oTptmJZ5o%2F7zD5WELBRfnTudj3iWcDzFh%2FjuP7fvFQld5hx%2F6re8nCrJNuqzkgjwwDDbWpFoRJ409j1p9l9Po6ezAJIC47QvHFt24sNo94TOT7qVkpZkGA17Zm8gMVfBS8YHi9KrhGrKB6AMXTE6IimAjbD5WfrISoqMdXZNPeELynhwrtiwAKX%2FlVhcxk2nGUFw4VrHWoDgQzyNkpEcUTUuXKJk6l%2FIYH9zWjbHmuJLXKA229%2FxIWAPO1GwXAqDVWV6NZYXs0tLzLzcG%2Bj84q%2BMMz0moiCMOFUeEv6B2LOEgvOmAEYPKXjQmOgfg7WVrwS71yM0zbaDd83%2FUY1z30IkmKM%2B6VDqeJSd72iOAv%2BGCVYLx1SuIgOSepSZgZVDw5f4XImhdJ2la1KGyrgshKQYUF4PJe2EGAdyZU5NynpVBn8M2z3WLs%2FqdKepfpbDTzpEi9xVnYHXZNSVnlpWqKD7JlpEWf9wilvkyNw7WuI638NqWGbSPTKJN59jrmVnQ1PRQyozPc%2Ftf8pOQezMJTel%2BI4Cv8Db45HnSPdbat6P4hwu0woDiuaOhCsM0RRdtrUlcIl%2Fh4PbJHUGTD8k7XCBjqkAT7pjwkm4lCZ6YSJA6RCdlyW09OgfcpcR6mZQwNie1LHbaG2l%2Btnyaku6DvZKNco2j%2BsOOQA71GN%2Br7PAdvsOywzn06bdklO60gRo%2BAGD4zQ8L%2BBcetul3eJ81TuHNTq0U48uEsPCbODYVXzOMmh0R5XoZq22h%2B8K4GQVIOUDnDzKposS4pZpk6Fb%2B7ZLgL1osnm59MqFyxTmH%2Fnh66bH0klIG6g&X-Amz-Signature=798842337b32944d6ae736b88d92f518f3b2102824b0a976ece84d6ea5e0c855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHOUQUV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDxbrtlgWfiCDaMeCgQ1EEFLHyHYI6JnQ%2BUamU69EWPvQIhAKsLkV%2BJCQzQzbQIbB5loye1URGvf8iODBjwL%2Fb8S2lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYO1%2BB3vBnx4rUv84q3AOvmVeYEPdZBRZsv6X4pgJ9xxwpvf9PVGZZuuWBeJgY5oTptmJZ5o%2F7zD5WELBRfnTudj3iWcDzFh%2FjuP7fvFQld5hx%2F6re8nCrJNuqzkgjwwDDbWpFoRJ409j1p9l9Po6ezAJIC47QvHFt24sNo94TOT7qVkpZkGA17Zm8gMVfBS8YHi9KrhGrKB6AMXTE6IimAjbD5WfrISoqMdXZNPeELynhwrtiwAKX%2FlVhcxk2nGUFw4VrHWoDgQzyNkpEcUTUuXKJk6l%2FIYH9zWjbHmuJLXKA229%2FxIWAPO1GwXAqDVWV6NZYXs0tLzLzcG%2Bj84q%2BMMz0moiCMOFUeEv6B2LOEgvOmAEYPKXjQmOgfg7WVrwS71yM0zbaDd83%2FUY1z30IkmKM%2B6VDqeJSd72iOAv%2BGCVYLx1SuIgOSepSZgZVDw5f4XImhdJ2la1KGyrgshKQYUF4PJe2EGAdyZU5NynpVBn8M2z3WLs%2FqdKepfpbDTzpEi9xVnYHXZNSVnlpWqKD7JlpEWf9wilvkyNw7WuI638NqWGbSPTKJN59jrmVnQ1PRQyozPc%2Ftf8pOQezMJTel%2BI4Cv8Db45HnSPdbat6P4hwu0woDiuaOhCsM0RRdtrUlcIl%2Fh4PbJHUGTD8k7XCBjqkAT7pjwkm4lCZ6YSJA6RCdlyW09OgfcpcR6mZQwNie1LHbaG2l%2Btnyaku6DvZKNco2j%2BsOOQA71GN%2Br7PAdvsOywzn06bdklO60gRo%2BAGD4zQ8L%2BBcetul3eJ81TuHNTq0U48uEsPCbODYVXzOMmh0R5XoZq22h%2B8K4GQVIOUDnDzKposS4pZpk6Fb%2B7ZLgL1osnm59MqFyxTmH%2Fnh66bH0klIG6g&X-Amz-Signature=4cbf681a18e02537fb5ab40538d31333b9f3c5c9819e5b57be8f4e3621380bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHOUQUV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDxbrtlgWfiCDaMeCgQ1EEFLHyHYI6JnQ%2BUamU69EWPvQIhAKsLkV%2BJCQzQzbQIbB5loye1URGvf8iODBjwL%2Fb8S2lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYO1%2BB3vBnx4rUv84q3AOvmVeYEPdZBRZsv6X4pgJ9xxwpvf9PVGZZuuWBeJgY5oTptmJZ5o%2F7zD5WELBRfnTudj3iWcDzFh%2FjuP7fvFQld5hx%2F6re8nCrJNuqzkgjwwDDbWpFoRJ409j1p9l9Po6ezAJIC47QvHFt24sNo94TOT7qVkpZkGA17Zm8gMVfBS8YHi9KrhGrKB6AMXTE6IimAjbD5WfrISoqMdXZNPeELynhwrtiwAKX%2FlVhcxk2nGUFw4VrHWoDgQzyNkpEcUTUuXKJk6l%2FIYH9zWjbHmuJLXKA229%2FxIWAPO1GwXAqDVWV6NZYXs0tLzLzcG%2Bj84q%2BMMz0moiCMOFUeEv6B2LOEgvOmAEYPKXjQmOgfg7WVrwS71yM0zbaDd83%2FUY1z30IkmKM%2B6VDqeJSd72iOAv%2BGCVYLx1SuIgOSepSZgZVDw5f4XImhdJ2la1KGyrgshKQYUF4PJe2EGAdyZU5NynpVBn8M2z3WLs%2FqdKepfpbDTzpEi9xVnYHXZNSVnlpWqKD7JlpEWf9wilvkyNw7WuI638NqWGbSPTKJN59jrmVnQ1PRQyozPc%2Ftf8pOQezMJTel%2BI4Cv8Db45HnSPdbat6P4hwu0woDiuaOhCsM0RRdtrUlcIl%2Fh4PbJHUGTD8k7XCBjqkAT7pjwkm4lCZ6YSJA6RCdlyW09OgfcpcR6mZQwNie1LHbaG2l%2Btnyaku6DvZKNco2j%2BsOOQA71GN%2Br7PAdvsOywzn06bdklO60gRo%2BAGD4zQ8L%2BBcetul3eJ81TuHNTq0U48uEsPCbODYVXzOMmh0R5XoZq22h%2B8K4GQVIOUDnDzKposS4pZpk6Fb%2B7ZLgL1osnm59MqFyxTmH%2Fnh66bH0klIG6g&X-Amz-Signature=87e9e3b1e5cf9b0b35787c68ca556503f6e1e84436bb9c1937f859da6744bf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHOUQUV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDxbrtlgWfiCDaMeCgQ1EEFLHyHYI6JnQ%2BUamU69EWPvQIhAKsLkV%2BJCQzQzbQIbB5loye1URGvf8iODBjwL%2Fb8S2lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYO1%2BB3vBnx4rUv84q3AOvmVeYEPdZBRZsv6X4pgJ9xxwpvf9PVGZZuuWBeJgY5oTptmJZ5o%2F7zD5WELBRfnTudj3iWcDzFh%2FjuP7fvFQld5hx%2F6re8nCrJNuqzkgjwwDDbWpFoRJ409j1p9l9Po6ezAJIC47QvHFt24sNo94TOT7qVkpZkGA17Zm8gMVfBS8YHi9KrhGrKB6AMXTE6IimAjbD5WfrISoqMdXZNPeELynhwrtiwAKX%2FlVhcxk2nGUFw4VrHWoDgQzyNkpEcUTUuXKJk6l%2FIYH9zWjbHmuJLXKA229%2FxIWAPO1GwXAqDVWV6NZYXs0tLzLzcG%2Bj84q%2BMMz0moiCMOFUeEv6B2LOEgvOmAEYPKXjQmOgfg7WVrwS71yM0zbaDd83%2FUY1z30IkmKM%2B6VDqeJSd72iOAv%2BGCVYLx1SuIgOSepSZgZVDw5f4XImhdJ2la1KGyrgshKQYUF4PJe2EGAdyZU5NynpVBn8M2z3WLs%2FqdKepfpbDTzpEi9xVnYHXZNSVnlpWqKD7JlpEWf9wilvkyNw7WuI638NqWGbSPTKJN59jrmVnQ1PRQyozPc%2Ftf8pOQezMJTel%2BI4Cv8Db45HnSPdbat6P4hwu0woDiuaOhCsM0RRdtrUlcIl%2Fh4PbJHUGTD8k7XCBjqkAT7pjwkm4lCZ6YSJA6RCdlyW09OgfcpcR6mZQwNie1LHbaG2l%2Btnyaku6DvZKNco2j%2BsOOQA71GN%2Br7PAdvsOywzn06bdklO60gRo%2BAGD4zQ8L%2BBcetul3eJ81TuHNTq0U48uEsPCbODYVXzOMmh0R5XoZq22h%2B8K4GQVIOUDnDzKposS4pZpk6Fb%2B7ZLgL1osnm59MqFyxTmH%2Fnh66bH0klIG6g&X-Amz-Signature=cae8527be994817aeb182403aebd25ca5704a36ef86e69eb2fd0e2d974a05336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHOUQUV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDxbrtlgWfiCDaMeCgQ1EEFLHyHYI6JnQ%2BUamU69EWPvQIhAKsLkV%2BJCQzQzbQIbB5loye1URGvf8iODBjwL%2Fb8S2lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYO1%2BB3vBnx4rUv84q3AOvmVeYEPdZBRZsv6X4pgJ9xxwpvf9PVGZZuuWBeJgY5oTptmJZ5o%2F7zD5WELBRfnTudj3iWcDzFh%2FjuP7fvFQld5hx%2F6re8nCrJNuqzkgjwwDDbWpFoRJ409j1p9l9Po6ezAJIC47QvHFt24sNo94TOT7qVkpZkGA17Zm8gMVfBS8YHi9KrhGrKB6AMXTE6IimAjbD5WfrISoqMdXZNPeELynhwrtiwAKX%2FlVhcxk2nGUFw4VrHWoDgQzyNkpEcUTUuXKJk6l%2FIYH9zWjbHmuJLXKA229%2FxIWAPO1GwXAqDVWV6NZYXs0tLzLzcG%2Bj84q%2BMMz0moiCMOFUeEv6B2LOEgvOmAEYPKXjQmOgfg7WVrwS71yM0zbaDd83%2FUY1z30IkmKM%2B6VDqeJSd72iOAv%2BGCVYLx1SuIgOSepSZgZVDw5f4XImhdJ2la1KGyrgshKQYUF4PJe2EGAdyZU5NynpVBn8M2z3WLs%2FqdKepfpbDTzpEi9xVnYHXZNSVnlpWqKD7JlpEWf9wilvkyNw7WuI638NqWGbSPTKJN59jrmVnQ1PRQyozPc%2Ftf8pOQezMJTel%2BI4Cv8Db45HnSPdbat6P4hwu0woDiuaOhCsM0RRdtrUlcIl%2Fh4PbJHUGTD8k7XCBjqkAT7pjwkm4lCZ6YSJA6RCdlyW09OgfcpcR6mZQwNie1LHbaG2l%2Btnyaku6DvZKNco2j%2BsOOQA71GN%2Br7PAdvsOywzn06bdklO60gRo%2BAGD4zQ8L%2BBcetul3eJ81TuHNTq0U48uEsPCbODYVXzOMmh0R5XoZq22h%2B8K4GQVIOUDnDzKposS4pZpk6Fb%2B7ZLgL1osnm59MqFyxTmH%2Fnh66bH0klIG6g&X-Amz-Signature=54eefbc30d0eb7ae107a19777f2f867c853c231927de6cd32e47990625aecde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHOUQUV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDxbrtlgWfiCDaMeCgQ1EEFLHyHYI6JnQ%2BUamU69EWPvQIhAKsLkV%2BJCQzQzbQIbB5loye1URGvf8iODBjwL%2Fb8S2lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYO1%2BB3vBnx4rUv84q3AOvmVeYEPdZBRZsv6X4pgJ9xxwpvf9PVGZZuuWBeJgY5oTptmJZ5o%2F7zD5WELBRfnTudj3iWcDzFh%2FjuP7fvFQld5hx%2F6re8nCrJNuqzkgjwwDDbWpFoRJ409j1p9l9Po6ezAJIC47QvHFt24sNo94TOT7qVkpZkGA17Zm8gMVfBS8YHi9KrhGrKB6AMXTE6IimAjbD5WfrISoqMdXZNPeELynhwrtiwAKX%2FlVhcxk2nGUFw4VrHWoDgQzyNkpEcUTUuXKJk6l%2FIYH9zWjbHmuJLXKA229%2FxIWAPO1GwXAqDVWV6NZYXs0tLzLzcG%2Bj84q%2BMMz0moiCMOFUeEv6B2LOEgvOmAEYPKXjQmOgfg7WVrwS71yM0zbaDd83%2FUY1z30IkmKM%2B6VDqeJSd72iOAv%2BGCVYLx1SuIgOSepSZgZVDw5f4XImhdJ2la1KGyrgshKQYUF4PJe2EGAdyZU5NynpVBn8M2z3WLs%2FqdKepfpbDTzpEi9xVnYHXZNSVnlpWqKD7JlpEWf9wilvkyNw7WuI638NqWGbSPTKJN59jrmVnQ1PRQyozPc%2Ftf8pOQezMJTel%2BI4Cv8Db45HnSPdbat6P4hwu0woDiuaOhCsM0RRdtrUlcIl%2Fh4PbJHUGTD8k7XCBjqkAT7pjwkm4lCZ6YSJA6RCdlyW09OgfcpcR6mZQwNie1LHbaG2l%2Btnyaku6DvZKNco2j%2BsOOQA71GN%2Br7PAdvsOywzn06bdklO60gRo%2BAGD4zQ8L%2BBcetul3eJ81TuHNTq0U48uEsPCbODYVXzOMmh0R5XoZq22h%2B8K4GQVIOUDnDzKposS4pZpk6Fb%2B7ZLgL1osnm59MqFyxTmH%2Fnh66bH0klIG6g&X-Amz-Signature=985ceaa82e3717d6510417fdf60ee5a3b93f8898008547f5bbd916d14e25a83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
