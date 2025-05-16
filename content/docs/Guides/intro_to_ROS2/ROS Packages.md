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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPSSLK6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDZ7x2XFFOxo4OuH7MQGWU058GD9g09kjBT5Q14c88KwIgIyGFMLsgN4HOoYmi%2Bk5uuybDqx2Wt1aDINK6NYkBBcsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEz7nHRk5cQY2T5pfCrcA%2BCKFeuk9fYbp4cJNxcutJGMlKd041ciL45ibfu2zAmx3xZ1S37XHS2FxB%2FVNppdu5%2FBKIXTdsZSfO8T62nRkJLXy%2Fqg8Hy5B7qMpKdBgpTL9Dku6%2BbSex34jQNv0xbjUvKlnKOMpPhxPD4szl%2F8ugEewmZkGaRz0qZaaaxNojQoODJ%2FBL82hsRIu1%2BRLZo4MahrhuxfKV6nDeQm45r23i%2BV0Bufbozd8es6sbnFT0JXCFvT6US3CB82WqwLZ5gFOAnYEWkYXT7kzNbFhv0y4zs7niDIlzPEhJwtkhxxejggpGygC8TBs34xs%2BYrtLSlYEktPZk5Cx2OPGSUgvFa3Xnglq7VegNUXo%2F3tCBRX%2B5tCv328eHodKCJSMdqjOVxkliK86b1XsF991smxELm4y9Qhl00V3Zb7GeHBjhrAfFAXfwW5NHZy6N1qtAJ2thT2qYi3t8s3vZijZ%2BMKkrobamEAlSSeTIxFBh5mMwSyg9JeLiaqGQYnkovtVVhyN4OsexknifxTRvW8B2gDus4Yxxg7ot5tpMxZuLdqRaj%2FLF2LtugH4daO0E0oQWZHAZ%2BjOywbpbPSavbPxrUDj%2B0b%2Bi8hDMu3ZaoUIHIKEVIByRbbzH%2BQqRpsD5nw3IoMLf2ncEGOqUBhCizocmnK%2FzFPQzYMQcU7zB7HBrXTzAeenzomO5ZTzRlltoiCh5%2Fs8%2BLPJkNiv7Ur%2By1tf%2BUOZ%2BfUhFFoNA2tGLgq35Fr%2FZ2zO3ob90kMItaiDxDMqIpkN31SQlPkDH3XGe93192ccozp1VdyJ5vfWTnx6xpc2d8dD8jdsomOOj4kWFYQzlqe80SHoOKMO%2BJiToqri%2FV972xajMuvuX3qblS9Zr8&X-Amz-Signature=06d3ceb5d5358cb1c627952aa0dc1a34b56dec4c53e8cb63a434cb6e68b34230&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPSSLK6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDZ7x2XFFOxo4OuH7MQGWU058GD9g09kjBT5Q14c88KwIgIyGFMLsgN4HOoYmi%2Bk5uuybDqx2Wt1aDINK6NYkBBcsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEz7nHRk5cQY2T5pfCrcA%2BCKFeuk9fYbp4cJNxcutJGMlKd041ciL45ibfu2zAmx3xZ1S37XHS2FxB%2FVNppdu5%2FBKIXTdsZSfO8T62nRkJLXy%2Fqg8Hy5B7qMpKdBgpTL9Dku6%2BbSex34jQNv0xbjUvKlnKOMpPhxPD4szl%2F8ugEewmZkGaRz0qZaaaxNojQoODJ%2FBL82hsRIu1%2BRLZo4MahrhuxfKV6nDeQm45r23i%2BV0Bufbozd8es6sbnFT0JXCFvT6US3CB82WqwLZ5gFOAnYEWkYXT7kzNbFhv0y4zs7niDIlzPEhJwtkhxxejggpGygC8TBs34xs%2BYrtLSlYEktPZk5Cx2OPGSUgvFa3Xnglq7VegNUXo%2F3tCBRX%2B5tCv328eHodKCJSMdqjOVxkliK86b1XsF991smxELm4y9Qhl00V3Zb7GeHBjhrAfFAXfwW5NHZy6N1qtAJ2thT2qYi3t8s3vZijZ%2BMKkrobamEAlSSeTIxFBh5mMwSyg9JeLiaqGQYnkovtVVhyN4OsexknifxTRvW8B2gDus4Yxxg7ot5tpMxZuLdqRaj%2FLF2LtugH4daO0E0oQWZHAZ%2BjOywbpbPSavbPxrUDj%2B0b%2Bi8hDMu3ZaoUIHIKEVIByRbbzH%2BQqRpsD5nw3IoMLf2ncEGOqUBhCizocmnK%2FzFPQzYMQcU7zB7HBrXTzAeenzomO5ZTzRlltoiCh5%2Fs8%2BLPJkNiv7Ur%2By1tf%2BUOZ%2BfUhFFoNA2tGLgq35Fr%2FZ2zO3ob90kMItaiDxDMqIpkN31SQlPkDH3XGe93192ccozp1VdyJ5vfWTnx6xpc2d8dD8jdsomOOj4kWFYQzlqe80SHoOKMO%2BJiToqri%2FV972xajMuvuX3qblS9Zr8&X-Amz-Signature=6bfbae5a56ffbaab9c0788d30ed95ab3fc3ce87f8ad003b92468ea8d3f144b81&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPSSLK6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDZ7x2XFFOxo4OuH7MQGWU058GD9g09kjBT5Q14c88KwIgIyGFMLsgN4HOoYmi%2Bk5uuybDqx2Wt1aDINK6NYkBBcsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEz7nHRk5cQY2T5pfCrcA%2BCKFeuk9fYbp4cJNxcutJGMlKd041ciL45ibfu2zAmx3xZ1S37XHS2FxB%2FVNppdu5%2FBKIXTdsZSfO8T62nRkJLXy%2Fqg8Hy5B7qMpKdBgpTL9Dku6%2BbSex34jQNv0xbjUvKlnKOMpPhxPD4szl%2F8ugEewmZkGaRz0qZaaaxNojQoODJ%2FBL82hsRIu1%2BRLZo4MahrhuxfKV6nDeQm45r23i%2BV0Bufbozd8es6sbnFT0JXCFvT6US3CB82WqwLZ5gFOAnYEWkYXT7kzNbFhv0y4zs7niDIlzPEhJwtkhxxejggpGygC8TBs34xs%2BYrtLSlYEktPZk5Cx2OPGSUgvFa3Xnglq7VegNUXo%2F3tCBRX%2B5tCv328eHodKCJSMdqjOVxkliK86b1XsF991smxELm4y9Qhl00V3Zb7GeHBjhrAfFAXfwW5NHZy6N1qtAJ2thT2qYi3t8s3vZijZ%2BMKkrobamEAlSSeTIxFBh5mMwSyg9JeLiaqGQYnkovtVVhyN4OsexknifxTRvW8B2gDus4Yxxg7ot5tpMxZuLdqRaj%2FLF2LtugH4daO0E0oQWZHAZ%2BjOywbpbPSavbPxrUDj%2B0b%2Bi8hDMu3ZaoUIHIKEVIByRbbzH%2BQqRpsD5nw3IoMLf2ncEGOqUBhCizocmnK%2FzFPQzYMQcU7zB7HBrXTzAeenzomO5ZTzRlltoiCh5%2Fs8%2BLPJkNiv7Ur%2By1tf%2BUOZ%2BfUhFFoNA2tGLgq35Fr%2FZ2zO3ob90kMItaiDxDMqIpkN31SQlPkDH3XGe93192ccozp1VdyJ5vfWTnx6xpc2d8dD8jdsomOOj4kWFYQzlqe80SHoOKMO%2BJiToqri%2FV972xajMuvuX3qblS9Zr8&X-Amz-Signature=71907d389c30b901f26f2174a86c9b185d7bb67f9886bf6951fa2f3c8e52e7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPSSLK6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDZ7x2XFFOxo4OuH7MQGWU058GD9g09kjBT5Q14c88KwIgIyGFMLsgN4HOoYmi%2Bk5uuybDqx2Wt1aDINK6NYkBBcsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEz7nHRk5cQY2T5pfCrcA%2BCKFeuk9fYbp4cJNxcutJGMlKd041ciL45ibfu2zAmx3xZ1S37XHS2FxB%2FVNppdu5%2FBKIXTdsZSfO8T62nRkJLXy%2Fqg8Hy5B7qMpKdBgpTL9Dku6%2BbSex34jQNv0xbjUvKlnKOMpPhxPD4szl%2F8ugEewmZkGaRz0qZaaaxNojQoODJ%2FBL82hsRIu1%2BRLZo4MahrhuxfKV6nDeQm45r23i%2BV0Bufbozd8es6sbnFT0JXCFvT6US3CB82WqwLZ5gFOAnYEWkYXT7kzNbFhv0y4zs7niDIlzPEhJwtkhxxejggpGygC8TBs34xs%2BYrtLSlYEktPZk5Cx2OPGSUgvFa3Xnglq7VegNUXo%2F3tCBRX%2B5tCv328eHodKCJSMdqjOVxkliK86b1XsF991smxELm4y9Qhl00V3Zb7GeHBjhrAfFAXfwW5NHZy6N1qtAJ2thT2qYi3t8s3vZijZ%2BMKkrobamEAlSSeTIxFBh5mMwSyg9JeLiaqGQYnkovtVVhyN4OsexknifxTRvW8B2gDus4Yxxg7ot5tpMxZuLdqRaj%2FLF2LtugH4daO0E0oQWZHAZ%2BjOywbpbPSavbPxrUDj%2B0b%2Bi8hDMu3ZaoUIHIKEVIByRbbzH%2BQqRpsD5nw3IoMLf2ncEGOqUBhCizocmnK%2FzFPQzYMQcU7zB7HBrXTzAeenzomO5ZTzRlltoiCh5%2Fs8%2BLPJkNiv7Ur%2By1tf%2BUOZ%2BfUhFFoNA2tGLgq35Fr%2FZ2zO3ob90kMItaiDxDMqIpkN31SQlPkDH3XGe93192ccozp1VdyJ5vfWTnx6xpc2d8dD8jdsomOOj4kWFYQzlqe80SHoOKMO%2BJiToqri%2FV972xajMuvuX3qblS9Zr8&X-Amz-Signature=a0b23c4bf88701aac850258af1b8e1853d4444da84485e47b93488ee4676757e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPSSLK6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDZ7x2XFFOxo4OuH7MQGWU058GD9g09kjBT5Q14c88KwIgIyGFMLsgN4HOoYmi%2Bk5uuybDqx2Wt1aDINK6NYkBBcsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEz7nHRk5cQY2T5pfCrcA%2BCKFeuk9fYbp4cJNxcutJGMlKd041ciL45ibfu2zAmx3xZ1S37XHS2FxB%2FVNppdu5%2FBKIXTdsZSfO8T62nRkJLXy%2Fqg8Hy5B7qMpKdBgpTL9Dku6%2BbSex34jQNv0xbjUvKlnKOMpPhxPD4szl%2F8ugEewmZkGaRz0qZaaaxNojQoODJ%2FBL82hsRIu1%2BRLZo4MahrhuxfKV6nDeQm45r23i%2BV0Bufbozd8es6sbnFT0JXCFvT6US3CB82WqwLZ5gFOAnYEWkYXT7kzNbFhv0y4zs7niDIlzPEhJwtkhxxejggpGygC8TBs34xs%2BYrtLSlYEktPZk5Cx2OPGSUgvFa3Xnglq7VegNUXo%2F3tCBRX%2B5tCv328eHodKCJSMdqjOVxkliK86b1XsF991smxELm4y9Qhl00V3Zb7GeHBjhrAfFAXfwW5NHZy6N1qtAJ2thT2qYi3t8s3vZijZ%2BMKkrobamEAlSSeTIxFBh5mMwSyg9JeLiaqGQYnkovtVVhyN4OsexknifxTRvW8B2gDus4Yxxg7ot5tpMxZuLdqRaj%2FLF2LtugH4daO0E0oQWZHAZ%2BjOywbpbPSavbPxrUDj%2B0b%2Bi8hDMu3ZaoUIHIKEVIByRbbzH%2BQqRpsD5nw3IoMLf2ncEGOqUBhCizocmnK%2FzFPQzYMQcU7zB7HBrXTzAeenzomO5ZTzRlltoiCh5%2Fs8%2BLPJkNiv7Ur%2By1tf%2BUOZ%2BfUhFFoNA2tGLgq35Fr%2FZ2zO3ob90kMItaiDxDMqIpkN31SQlPkDH3XGe93192ccozp1VdyJ5vfWTnx6xpc2d8dD8jdsomOOj4kWFYQzlqe80SHoOKMO%2BJiToqri%2FV972xajMuvuX3qblS9Zr8&X-Amz-Signature=c09590f6d86369e312d1270413908dfc1dab00b9c55514dc57933269add79222&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPSSLK6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDZ7x2XFFOxo4OuH7MQGWU058GD9g09kjBT5Q14c88KwIgIyGFMLsgN4HOoYmi%2Bk5uuybDqx2Wt1aDINK6NYkBBcsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEz7nHRk5cQY2T5pfCrcA%2BCKFeuk9fYbp4cJNxcutJGMlKd041ciL45ibfu2zAmx3xZ1S37XHS2FxB%2FVNppdu5%2FBKIXTdsZSfO8T62nRkJLXy%2Fqg8Hy5B7qMpKdBgpTL9Dku6%2BbSex34jQNv0xbjUvKlnKOMpPhxPD4szl%2F8ugEewmZkGaRz0qZaaaxNojQoODJ%2FBL82hsRIu1%2BRLZo4MahrhuxfKV6nDeQm45r23i%2BV0Bufbozd8es6sbnFT0JXCFvT6US3CB82WqwLZ5gFOAnYEWkYXT7kzNbFhv0y4zs7niDIlzPEhJwtkhxxejggpGygC8TBs34xs%2BYrtLSlYEktPZk5Cx2OPGSUgvFa3Xnglq7VegNUXo%2F3tCBRX%2B5tCv328eHodKCJSMdqjOVxkliK86b1XsF991smxELm4y9Qhl00V3Zb7GeHBjhrAfFAXfwW5NHZy6N1qtAJ2thT2qYi3t8s3vZijZ%2BMKkrobamEAlSSeTIxFBh5mMwSyg9JeLiaqGQYnkovtVVhyN4OsexknifxTRvW8B2gDus4Yxxg7ot5tpMxZuLdqRaj%2FLF2LtugH4daO0E0oQWZHAZ%2BjOywbpbPSavbPxrUDj%2B0b%2Bi8hDMu3ZaoUIHIKEVIByRbbzH%2BQqRpsD5nw3IoMLf2ncEGOqUBhCizocmnK%2FzFPQzYMQcU7zB7HBrXTzAeenzomO5ZTzRlltoiCh5%2Fs8%2BLPJkNiv7Ur%2By1tf%2BUOZ%2BfUhFFoNA2tGLgq35Fr%2FZ2zO3ob90kMItaiDxDMqIpkN31SQlPkDH3XGe93192ccozp1VdyJ5vfWTnx6xpc2d8dD8jdsomOOj4kWFYQzlqe80SHoOKMO%2BJiToqri%2FV972xajMuvuX3qblS9Zr8&X-Amz-Signature=6be9ba6594ea65c48e5657babafe3d8a478c18c0ee309b64cf7eba89f9e0215f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPSSLK6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDZ7x2XFFOxo4OuH7MQGWU058GD9g09kjBT5Q14c88KwIgIyGFMLsgN4HOoYmi%2Bk5uuybDqx2Wt1aDINK6NYkBBcsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEz7nHRk5cQY2T5pfCrcA%2BCKFeuk9fYbp4cJNxcutJGMlKd041ciL45ibfu2zAmx3xZ1S37XHS2FxB%2FVNppdu5%2FBKIXTdsZSfO8T62nRkJLXy%2Fqg8Hy5B7qMpKdBgpTL9Dku6%2BbSex34jQNv0xbjUvKlnKOMpPhxPD4szl%2F8ugEewmZkGaRz0qZaaaxNojQoODJ%2FBL82hsRIu1%2BRLZo4MahrhuxfKV6nDeQm45r23i%2BV0Bufbozd8es6sbnFT0JXCFvT6US3CB82WqwLZ5gFOAnYEWkYXT7kzNbFhv0y4zs7niDIlzPEhJwtkhxxejggpGygC8TBs34xs%2BYrtLSlYEktPZk5Cx2OPGSUgvFa3Xnglq7VegNUXo%2F3tCBRX%2B5tCv328eHodKCJSMdqjOVxkliK86b1XsF991smxELm4y9Qhl00V3Zb7GeHBjhrAfFAXfwW5NHZy6N1qtAJ2thT2qYi3t8s3vZijZ%2BMKkrobamEAlSSeTIxFBh5mMwSyg9JeLiaqGQYnkovtVVhyN4OsexknifxTRvW8B2gDus4Yxxg7ot5tpMxZuLdqRaj%2FLF2LtugH4daO0E0oQWZHAZ%2BjOywbpbPSavbPxrUDj%2B0b%2Bi8hDMu3ZaoUIHIKEVIByRbbzH%2BQqRpsD5nw3IoMLf2ncEGOqUBhCizocmnK%2FzFPQzYMQcU7zB7HBrXTzAeenzomO5ZTzRlltoiCh5%2Fs8%2BLPJkNiv7Ur%2By1tf%2BUOZ%2BfUhFFoNA2tGLgq35Fr%2FZ2zO3ob90kMItaiDxDMqIpkN31SQlPkDH3XGe93192ccozp1VdyJ5vfWTnx6xpc2d8dD8jdsomOOj4kWFYQzlqe80SHoOKMO%2BJiToqri%2FV972xajMuvuX3qblS9Zr8&X-Amz-Signature=8fb7d5454e25cc5c70e3ff486bf8f0b7902de8ca138346387bf189e0cb75444a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
