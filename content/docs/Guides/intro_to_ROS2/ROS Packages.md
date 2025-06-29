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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M5S5TV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FPSJx72eO1wP%2B45NkZgggMBO3fTw0%2BAyPglRHU9Z6SAiEAgfhH22mumt5FfSfhFxzS%2F2Qw64QB43ApnDfcANQYxvUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo5dYubB3wPLklJHircA8BVmWri4kR3Hz2YzV3109bzX8x%2BUsjxwlwagJ3cR2Wbmd7ebw2qY6JCxhBkUWzeWA1a0CEHfacMH7IswduXSs1IuZNuPnG9J2QYCk9uvPYmCT9Wc789IvN9%2FLqIGjG1cR5OcxEjEJ7VqLjSgoGO5lhRGAhZ%2FZfeA%2FUorobz%2BHaWSDhGO610GsGKPz1jbh2u9%2B%2BoGwbCj2Ng0fuHWTZc8BJq3XNyoe3o27x5bWTscx%2FH4IOgne%2BKQ4m86UNcKtdVjbFAssrHZT%2BExrMzk3YH3ZCxD9azWfAwOpc7sK2t8wwkC3biXIZQvhSAsRnzNRFKunwt0ZkyT4b5X6kQ3xzRTV8Z4I6ZfZlN51WJAgTsDCWYHBDgU359S2GnGxA99oOrcQTUYy9BY98dWuwR5tj2kLdf22Xh%2FIwnwAG1w80W01SjH%2BUBEFbMyGTy4LZ4pEg0pUZLk3BDqQVXar%2F4QrnHELNJ5QqifC177vnN7N6Qg%2FLqcfw3Q4TmZfAs34M93zja%2Byo77RYVQfYP0xqI%2Bgp%2BR7WD5X%2FAN8GASLlLzsVj1JX0T%2BnCaMuuvZEbtt3mTmXtWiYb6amymenW1irZALIWSkfdB5%2BjpbzSx9CKquol2Qn31XsEWahNy31shbWkMKmXgsMGOqUBlx1h4DfouACnxHeHR6yyu%2FWFjHqBgvnJG2HD8OayRksxV7E4dEbAjmGCtc%2F4JLygqRvDTApKZjbgyydwaaQ3VLEMQcJZG2dMN1UD5s8tH%2BHDY4JjyVNsEE5G7Qc4hJMBdCcMkWKu4AnMAzUqxwQXxk063mZlUckQeqgBu%2FnBIe6x29ZsKy4fpEwDLbWKXOfybgDz9SwKzmnDEIncJOnOVoqdKtTN&X-Amz-Signature=d903a25aa4e5ea31168a02b5e9548f8c671701ba216800773cd2190d2a514e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M5S5TV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FPSJx72eO1wP%2B45NkZgggMBO3fTw0%2BAyPglRHU9Z6SAiEAgfhH22mumt5FfSfhFxzS%2F2Qw64QB43ApnDfcANQYxvUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo5dYubB3wPLklJHircA8BVmWri4kR3Hz2YzV3109bzX8x%2BUsjxwlwagJ3cR2Wbmd7ebw2qY6JCxhBkUWzeWA1a0CEHfacMH7IswduXSs1IuZNuPnG9J2QYCk9uvPYmCT9Wc789IvN9%2FLqIGjG1cR5OcxEjEJ7VqLjSgoGO5lhRGAhZ%2FZfeA%2FUorobz%2BHaWSDhGO610GsGKPz1jbh2u9%2B%2BoGwbCj2Ng0fuHWTZc8BJq3XNyoe3o27x5bWTscx%2FH4IOgne%2BKQ4m86UNcKtdVjbFAssrHZT%2BExrMzk3YH3ZCxD9azWfAwOpc7sK2t8wwkC3biXIZQvhSAsRnzNRFKunwt0ZkyT4b5X6kQ3xzRTV8Z4I6ZfZlN51WJAgTsDCWYHBDgU359S2GnGxA99oOrcQTUYy9BY98dWuwR5tj2kLdf22Xh%2FIwnwAG1w80W01SjH%2BUBEFbMyGTy4LZ4pEg0pUZLk3BDqQVXar%2F4QrnHELNJ5QqifC177vnN7N6Qg%2FLqcfw3Q4TmZfAs34M93zja%2Byo77RYVQfYP0xqI%2Bgp%2BR7WD5X%2FAN8GASLlLzsVj1JX0T%2BnCaMuuvZEbtt3mTmXtWiYb6amymenW1irZALIWSkfdB5%2BjpbzSx9CKquol2Qn31XsEWahNy31shbWkMKmXgsMGOqUBlx1h4DfouACnxHeHR6yyu%2FWFjHqBgvnJG2HD8OayRksxV7E4dEbAjmGCtc%2F4JLygqRvDTApKZjbgyydwaaQ3VLEMQcJZG2dMN1UD5s8tH%2BHDY4JjyVNsEE5G7Qc4hJMBdCcMkWKu4AnMAzUqxwQXxk063mZlUckQeqgBu%2FnBIe6x29ZsKy4fpEwDLbWKXOfybgDz9SwKzmnDEIncJOnOVoqdKtTN&X-Amz-Signature=893c4b099b3bd0fa55099378d4f4d5a1e3b6561faba62599c31c3865aa9df8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M5S5TV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FPSJx72eO1wP%2B45NkZgggMBO3fTw0%2BAyPglRHU9Z6SAiEAgfhH22mumt5FfSfhFxzS%2F2Qw64QB43ApnDfcANQYxvUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo5dYubB3wPLklJHircA8BVmWri4kR3Hz2YzV3109bzX8x%2BUsjxwlwagJ3cR2Wbmd7ebw2qY6JCxhBkUWzeWA1a0CEHfacMH7IswduXSs1IuZNuPnG9J2QYCk9uvPYmCT9Wc789IvN9%2FLqIGjG1cR5OcxEjEJ7VqLjSgoGO5lhRGAhZ%2FZfeA%2FUorobz%2BHaWSDhGO610GsGKPz1jbh2u9%2B%2BoGwbCj2Ng0fuHWTZc8BJq3XNyoe3o27x5bWTscx%2FH4IOgne%2BKQ4m86UNcKtdVjbFAssrHZT%2BExrMzk3YH3ZCxD9azWfAwOpc7sK2t8wwkC3biXIZQvhSAsRnzNRFKunwt0ZkyT4b5X6kQ3xzRTV8Z4I6ZfZlN51WJAgTsDCWYHBDgU359S2GnGxA99oOrcQTUYy9BY98dWuwR5tj2kLdf22Xh%2FIwnwAG1w80W01SjH%2BUBEFbMyGTy4LZ4pEg0pUZLk3BDqQVXar%2F4QrnHELNJ5QqifC177vnN7N6Qg%2FLqcfw3Q4TmZfAs34M93zja%2Byo77RYVQfYP0xqI%2Bgp%2BR7WD5X%2FAN8GASLlLzsVj1JX0T%2BnCaMuuvZEbtt3mTmXtWiYb6amymenW1irZALIWSkfdB5%2BjpbzSx9CKquol2Qn31XsEWahNy31shbWkMKmXgsMGOqUBlx1h4DfouACnxHeHR6yyu%2FWFjHqBgvnJG2HD8OayRksxV7E4dEbAjmGCtc%2F4JLygqRvDTApKZjbgyydwaaQ3VLEMQcJZG2dMN1UD5s8tH%2BHDY4JjyVNsEE5G7Qc4hJMBdCcMkWKu4AnMAzUqxwQXxk063mZlUckQeqgBu%2FnBIe6x29ZsKy4fpEwDLbWKXOfybgDz9SwKzmnDEIncJOnOVoqdKtTN&X-Amz-Signature=1087ce85dd5bff589e9736a89aff0f63fae0ffb90fd403207884f705b21604ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M5S5TV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FPSJx72eO1wP%2B45NkZgggMBO3fTw0%2BAyPglRHU9Z6SAiEAgfhH22mumt5FfSfhFxzS%2F2Qw64QB43ApnDfcANQYxvUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo5dYubB3wPLklJHircA8BVmWri4kR3Hz2YzV3109bzX8x%2BUsjxwlwagJ3cR2Wbmd7ebw2qY6JCxhBkUWzeWA1a0CEHfacMH7IswduXSs1IuZNuPnG9J2QYCk9uvPYmCT9Wc789IvN9%2FLqIGjG1cR5OcxEjEJ7VqLjSgoGO5lhRGAhZ%2FZfeA%2FUorobz%2BHaWSDhGO610GsGKPz1jbh2u9%2B%2BoGwbCj2Ng0fuHWTZc8BJq3XNyoe3o27x5bWTscx%2FH4IOgne%2BKQ4m86UNcKtdVjbFAssrHZT%2BExrMzk3YH3ZCxD9azWfAwOpc7sK2t8wwkC3biXIZQvhSAsRnzNRFKunwt0ZkyT4b5X6kQ3xzRTV8Z4I6ZfZlN51WJAgTsDCWYHBDgU359S2GnGxA99oOrcQTUYy9BY98dWuwR5tj2kLdf22Xh%2FIwnwAG1w80W01SjH%2BUBEFbMyGTy4LZ4pEg0pUZLk3BDqQVXar%2F4QrnHELNJ5QqifC177vnN7N6Qg%2FLqcfw3Q4TmZfAs34M93zja%2Byo77RYVQfYP0xqI%2Bgp%2BR7WD5X%2FAN8GASLlLzsVj1JX0T%2BnCaMuuvZEbtt3mTmXtWiYb6amymenW1irZALIWSkfdB5%2BjpbzSx9CKquol2Qn31XsEWahNy31shbWkMKmXgsMGOqUBlx1h4DfouACnxHeHR6yyu%2FWFjHqBgvnJG2HD8OayRksxV7E4dEbAjmGCtc%2F4JLygqRvDTApKZjbgyydwaaQ3VLEMQcJZG2dMN1UD5s8tH%2BHDY4JjyVNsEE5G7Qc4hJMBdCcMkWKu4AnMAzUqxwQXxk063mZlUckQeqgBu%2FnBIe6x29ZsKy4fpEwDLbWKXOfybgDz9SwKzmnDEIncJOnOVoqdKtTN&X-Amz-Signature=7b23031be754600bf069def083aadf4a9ad77677774ac4b5d64a5a0fb74c33c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M5S5TV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FPSJx72eO1wP%2B45NkZgggMBO3fTw0%2BAyPglRHU9Z6SAiEAgfhH22mumt5FfSfhFxzS%2F2Qw64QB43ApnDfcANQYxvUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo5dYubB3wPLklJHircA8BVmWri4kR3Hz2YzV3109bzX8x%2BUsjxwlwagJ3cR2Wbmd7ebw2qY6JCxhBkUWzeWA1a0CEHfacMH7IswduXSs1IuZNuPnG9J2QYCk9uvPYmCT9Wc789IvN9%2FLqIGjG1cR5OcxEjEJ7VqLjSgoGO5lhRGAhZ%2FZfeA%2FUorobz%2BHaWSDhGO610GsGKPz1jbh2u9%2B%2BoGwbCj2Ng0fuHWTZc8BJq3XNyoe3o27x5bWTscx%2FH4IOgne%2BKQ4m86UNcKtdVjbFAssrHZT%2BExrMzk3YH3ZCxD9azWfAwOpc7sK2t8wwkC3biXIZQvhSAsRnzNRFKunwt0ZkyT4b5X6kQ3xzRTV8Z4I6ZfZlN51WJAgTsDCWYHBDgU359S2GnGxA99oOrcQTUYy9BY98dWuwR5tj2kLdf22Xh%2FIwnwAG1w80W01SjH%2BUBEFbMyGTy4LZ4pEg0pUZLk3BDqQVXar%2F4QrnHELNJ5QqifC177vnN7N6Qg%2FLqcfw3Q4TmZfAs34M93zja%2Byo77RYVQfYP0xqI%2Bgp%2BR7WD5X%2FAN8GASLlLzsVj1JX0T%2BnCaMuuvZEbtt3mTmXtWiYb6amymenW1irZALIWSkfdB5%2BjpbzSx9CKquol2Qn31XsEWahNy31shbWkMKmXgsMGOqUBlx1h4DfouACnxHeHR6yyu%2FWFjHqBgvnJG2HD8OayRksxV7E4dEbAjmGCtc%2F4JLygqRvDTApKZjbgyydwaaQ3VLEMQcJZG2dMN1UD5s8tH%2BHDY4JjyVNsEE5G7Qc4hJMBdCcMkWKu4AnMAzUqxwQXxk063mZlUckQeqgBu%2FnBIe6x29ZsKy4fpEwDLbWKXOfybgDz9SwKzmnDEIncJOnOVoqdKtTN&X-Amz-Signature=891acfb904432655254c59d8c08323f4fa807e1a14fbe60ca2020d2c7eb85b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M5S5TV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FPSJx72eO1wP%2B45NkZgggMBO3fTw0%2BAyPglRHU9Z6SAiEAgfhH22mumt5FfSfhFxzS%2F2Qw64QB43ApnDfcANQYxvUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo5dYubB3wPLklJHircA8BVmWri4kR3Hz2YzV3109bzX8x%2BUsjxwlwagJ3cR2Wbmd7ebw2qY6JCxhBkUWzeWA1a0CEHfacMH7IswduXSs1IuZNuPnG9J2QYCk9uvPYmCT9Wc789IvN9%2FLqIGjG1cR5OcxEjEJ7VqLjSgoGO5lhRGAhZ%2FZfeA%2FUorobz%2BHaWSDhGO610GsGKPz1jbh2u9%2B%2BoGwbCj2Ng0fuHWTZc8BJq3XNyoe3o27x5bWTscx%2FH4IOgne%2BKQ4m86UNcKtdVjbFAssrHZT%2BExrMzk3YH3ZCxD9azWfAwOpc7sK2t8wwkC3biXIZQvhSAsRnzNRFKunwt0ZkyT4b5X6kQ3xzRTV8Z4I6ZfZlN51WJAgTsDCWYHBDgU359S2GnGxA99oOrcQTUYy9BY98dWuwR5tj2kLdf22Xh%2FIwnwAG1w80W01SjH%2BUBEFbMyGTy4LZ4pEg0pUZLk3BDqQVXar%2F4QrnHELNJ5QqifC177vnN7N6Qg%2FLqcfw3Q4TmZfAs34M93zja%2Byo77RYVQfYP0xqI%2Bgp%2BR7WD5X%2FAN8GASLlLzsVj1JX0T%2BnCaMuuvZEbtt3mTmXtWiYb6amymenW1irZALIWSkfdB5%2BjpbzSx9CKquol2Qn31XsEWahNy31shbWkMKmXgsMGOqUBlx1h4DfouACnxHeHR6yyu%2FWFjHqBgvnJG2HD8OayRksxV7E4dEbAjmGCtc%2F4JLygqRvDTApKZjbgyydwaaQ3VLEMQcJZG2dMN1UD5s8tH%2BHDY4JjyVNsEE5G7Qc4hJMBdCcMkWKu4AnMAzUqxwQXxk063mZlUckQeqgBu%2FnBIe6x29ZsKy4fpEwDLbWKXOfybgDz9SwKzmnDEIncJOnOVoqdKtTN&X-Amz-Signature=1b5cae83e168ee0ab7f251133d40f343213ebd6aa9940d86787db45ce19e2c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4M5S5TV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FPSJx72eO1wP%2B45NkZgggMBO3fTw0%2BAyPglRHU9Z6SAiEAgfhH22mumt5FfSfhFxzS%2F2Qw64QB43ApnDfcANQYxvUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo5dYubB3wPLklJHircA8BVmWri4kR3Hz2YzV3109bzX8x%2BUsjxwlwagJ3cR2Wbmd7ebw2qY6JCxhBkUWzeWA1a0CEHfacMH7IswduXSs1IuZNuPnG9J2QYCk9uvPYmCT9Wc789IvN9%2FLqIGjG1cR5OcxEjEJ7VqLjSgoGO5lhRGAhZ%2FZfeA%2FUorobz%2BHaWSDhGO610GsGKPz1jbh2u9%2B%2BoGwbCj2Ng0fuHWTZc8BJq3XNyoe3o27x5bWTscx%2FH4IOgne%2BKQ4m86UNcKtdVjbFAssrHZT%2BExrMzk3YH3ZCxD9azWfAwOpc7sK2t8wwkC3biXIZQvhSAsRnzNRFKunwt0ZkyT4b5X6kQ3xzRTV8Z4I6ZfZlN51WJAgTsDCWYHBDgU359S2GnGxA99oOrcQTUYy9BY98dWuwR5tj2kLdf22Xh%2FIwnwAG1w80W01SjH%2BUBEFbMyGTy4LZ4pEg0pUZLk3BDqQVXar%2F4QrnHELNJ5QqifC177vnN7N6Qg%2FLqcfw3Q4TmZfAs34M93zja%2Byo77RYVQfYP0xqI%2Bgp%2BR7WD5X%2FAN8GASLlLzsVj1JX0T%2BnCaMuuvZEbtt3mTmXtWiYb6amymenW1irZALIWSkfdB5%2BjpbzSx9CKquol2Qn31XsEWahNy31shbWkMKmXgsMGOqUBlx1h4DfouACnxHeHR6yyu%2FWFjHqBgvnJG2HD8OayRksxV7E4dEbAjmGCtc%2F4JLygqRvDTApKZjbgyydwaaQ3VLEMQcJZG2dMN1UD5s8tH%2BHDY4JjyVNsEE5G7Qc4hJMBdCcMkWKu4AnMAzUqxwQXxk063mZlUckQeqgBu%2FnBIe6x29ZsKy4fpEwDLbWKXOfybgDz9SwKzmnDEIncJOnOVoqdKtTN&X-Amz-Signature=a74f74a19dd646ce7d76b9cbd9a8e5f1abaf23269dd6e47ed186009272d359eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
