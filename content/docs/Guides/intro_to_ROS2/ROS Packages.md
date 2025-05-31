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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIITWC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBup9X6j5oJiOoPFmPDTPINBDi0K%2Bmjnxt7aVqs0TAIOAiBZDlZuIteFuGhBQoM0Yuh3cMpgxUkZ88w2Q8%2FlkKAg9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F0PizBsVkVAgWt6KtwDncwFqPGST6Hl1zhRCg7oyDrYl%2F6ZoSDytg%2BGOtpN3jpONer%2Fag767VtEvTobvJYm9xvfqxvVtW%2BNfZXwjvFgy4e1wyu9sRcTOjjOJSlwISSY3M%2FgW7NvzjemE0uRvSLWqZMS7kSeYxykCkABMQyk23uA%2F975hhSdvtOXLN1FSxL7pqYiYYNlMSsJjk5SzBKY0EcSAy%2BXqIhLwCjvLyqT2frgtOU%2BF1qVqcPA6iHuUys2%2B7eoNYI0IIE4AAwkr1rH%2FEfp00o83BtjirYShEwzHuJKghbvclTE2VNq4SWYZIKciCD1cZCumXAupIxcJHLPNBspNQ3LSs%2BeiHjf1KAZunOrH%2B4i3WNBXWMTW9MjzbOC6miL0vZH%2B0uZTIaw3T1McGuVtd%2BDgQnT0GE043O52SQBvffXvh7VSuB0W9iVBabAYQB6k4b9B4pKo1pZ2L%2B%2FKyyFyw0fLbSpoQyqnCJBF%2FDp5Xfdf8vrQ7ijjBWZPa2xI8lFYy1WmjTkZKPmtRfW4j4QVjBHwgZqjEoJ5uwnsBRzPo0oNW5kR2RJEZDeXPtiCEDrvi6BsvLcn%2BrqPB95uMZLGQ74DnvA81E2TPYlXEXMSyIHdRVcli3CI9N0dd6FwXBcy6FBdg615nQwjLPqwQY6pgH672FJ9U76RX%2FqbeY5GNUhrHZta90Vjel4YAyp5McVZkdflE%2F1An3Y0KbH0aY%2Ffltc1%2BlfCtKRH03N1eMO2%2FD%2F2ykMqPQEp8MSj1583h4Ewn3lL4z3k7q6JwiS69kxFxHCvVU3eQUgYFL2aoN3igcFbiyyfF3mlv2eGt%2Fw2H0kiWBDZfPYRei6YGjPSZqlV19%2B4AOE2V2VBeqISvVOSak8DsFzS1H8&X-Amz-Signature=6358f7197e8fa13188cefb5a529fa05a69b25ed178e73367268584a4b43a2958&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIITWC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBup9X6j5oJiOoPFmPDTPINBDi0K%2Bmjnxt7aVqs0TAIOAiBZDlZuIteFuGhBQoM0Yuh3cMpgxUkZ88w2Q8%2FlkKAg9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F0PizBsVkVAgWt6KtwDncwFqPGST6Hl1zhRCg7oyDrYl%2F6ZoSDytg%2BGOtpN3jpONer%2Fag767VtEvTobvJYm9xvfqxvVtW%2BNfZXwjvFgy4e1wyu9sRcTOjjOJSlwISSY3M%2FgW7NvzjemE0uRvSLWqZMS7kSeYxykCkABMQyk23uA%2F975hhSdvtOXLN1FSxL7pqYiYYNlMSsJjk5SzBKY0EcSAy%2BXqIhLwCjvLyqT2frgtOU%2BF1qVqcPA6iHuUys2%2B7eoNYI0IIE4AAwkr1rH%2FEfp00o83BtjirYShEwzHuJKghbvclTE2VNq4SWYZIKciCD1cZCumXAupIxcJHLPNBspNQ3LSs%2BeiHjf1KAZunOrH%2B4i3WNBXWMTW9MjzbOC6miL0vZH%2B0uZTIaw3T1McGuVtd%2BDgQnT0GE043O52SQBvffXvh7VSuB0W9iVBabAYQB6k4b9B4pKo1pZ2L%2B%2FKyyFyw0fLbSpoQyqnCJBF%2FDp5Xfdf8vrQ7ijjBWZPa2xI8lFYy1WmjTkZKPmtRfW4j4QVjBHwgZqjEoJ5uwnsBRzPo0oNW5kR2RJEZDeXPtiCEDrvi6BsvLcn%2BrqPB95uMZLGQ74DnvA81E2TPYlXEXMSyIHdRVcli3CI9N0dd6FwXBcy6FBdg615nQwjLPqwQY6pgH672FJ9U76RX%2FqbeY5GNUhrHZta90Vjel4YAyp5McVZkdflE%2F1An3Y0KbH0aY%2Ffltc1%2BlfCtKRH03N1eMO2%2FD%2F2ykMqPQEp8MSj1583h4Ewn3lL4z3k7q6JwiS69kxFxHCvVU3eQUgYFL2aoN3igcFbiyyfF3mlv2eGt%2Fw2H0kiWBDZfPYRei6YGjPSZqlV19%2B4AOE2V2VBeqISvVOSak8DsFzS1H8&X-Amz-Signature=a4f47150644492a7534ecbf94c45938c00048452fd6067099464b0c6ab4ee348&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIITWC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBup9X6j5oJiOoPFmPDTPINBDi0K%2Bmjnxt7aVqs0TAIOAiBZDlZuIteFuGhBQoM0Yuh3cMpgxUkZ88w2Q8%2FlkKAg9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F0PizBsVkVAgWt6KtwDncwFqPGST6Hl1zhRCg7oyDrYl%2F6ZoSDytg%2BGOtpN3jpONer%2Fag767VtEvTobvJYm9xvfqxvVtW%2BNfZXwjvFgy4e1wyu9sRcTOjjOJSlwISSY3M%2FgW7NvzjemE0uRvSLWqZMS7kSeYxykCkABMQyk23uA%2F975hhSdvtOXLN1FSxL7pqYiYYNlMSsJjk5SzBKY0EcSAy%2BXqIhLwCjvLyqT2frgtOU%2BF1qVqcPA6iHuUys2%2B7eoNYI0IIE4AAwkr1rH%2FEfp00o83BtjirYShEwzHuJKghbvclTE2VNq4SWYZIKciCD1cZCumXAupIxcJHLPNBspNQ3LSs%2BeiHjf1KAZunOrH%2B4i3WNBXWMTW9MjzbOC6miL0vZH%2B0uZTIaw3T1McGuVtd%2BDgQnT0GE043O52SQBvffXvh7VSuB0W9iVBabAYQB6k4b9B4pKo1pZ2L%2B%2FKyyFyw0fLbSpoQyqnCJBF%2FDp5Xfdf8vrQ7ijjBWZPa2xI8lFYy1WmjTkZKPmtRfW4j4QVjBHwgZqjEoJ5uwnsBRzPo0oNW5kR2RJEZDeXPtiCEDrvi6BsvLcn%2BrqPB95uMZLGQ74DnvA81E2TPYlXEXMSyIHdRVcli3CI9N0dd6FwXBcy6FBdg615nQwjLPqwQY6pgH672FJ9U76RX%2FqbeY5GNUhrHZta90Vjel4YAyp5McVZkdflE%2F1An3Y0KbH0aY%2Ffltc1%2BlfCtKRH03N1eMO2%2FD%2F2ykMqPQEp8MSj1583h4Ewn3lL4z3k7q6JwiS69kxFxHCvVU3eQUgYFL2aoN3igcFbiyyfF3mlv2eGt%2Fw2H0kiWBDZfPYRei6YGjPSZqlV19%2B4AOE2V2VBeqISvVOSak8DsFzS1H8&X-Amz-Signature=a60eba61963d6a7781adfe6cb03ce96db7f39b5d813dc6f05030559104b47bff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIITWC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBup9X6j5oJiOoPFmPDTPINBDi0K%2Bmjnxt7aVqs0TAIOAiBZDlZuIteFuGhBQoM0Yuh3cMpgxUkZ88w2Q8%2FlkKAg9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F0PizBsVkVAgWt6KtwDncwFqPGST6Hl1zhRCg7oyDrYl%2F6ZoSDytg%2BGOtpN3jpONer%2Fag767VtEvTobvJYm9xvfqxvVtW%2BNfZXwjvFgy4e1wyu9sRcTOjjOJSlwISSY3M%2FgW7NvzjemE0uRvSLWqZMS7kSeYxykCkABMQyk23uA%2F975hhSdvtOXLN1FSxL7pqYiYYNlMSsJjk5SzBKY0EcSAy%2BXqIhLwCjvLyqT2frgtOU%2BF1qVqcPA6iHuUys2%2B7eoNYI0IIE4AAwkr1rH%2FEfp00o83BtjirYShEwzHuJKghbvclTE2VNq4SWYZIKciCD1cZCumXAupIxcJHLPNBspNQ3LSs%2BeiHjf1KAZunOrH%2B4i3WNBXWMTW9MjzbOC6miL0vZH%2B0uZTIaw3T1McGuVtd%2BDgQnT0GE043O52SQBvffXvh7VSuB0W9iVBabAYQB6k4b9B4pKo1pZ2L%2B%2FKyyFyw0fLbSpoQyqnCJBF%2FDp5Xfdf8vrQ7ijjBWZPa2xI8lFYy1WmjTkZKPmtRfW4j4QVjBHwgZqjEoJ5uwnsBRzPo0oNW5kR2RJEZDeXPtiCEDrvi6BsvLcn%2BrqPB95uMZLGQ74DnvA81E2TPYlXEXMSyIHdRVcli3CI9N0dd6FwXBcy6FBdg615nQwjLPqwQY6pgH672FJ9U76RX%2FqbeY5GNUhrHZta90Vjel4YAyp5McVZkdflE%2F1An3Y0KbH0aY%2Ffltc1%2BlfCtKRH03N1eMO2%2FD%2F2ykMqPQEp8MSj1583h4Ewn3lL4z3k7q6JwiS69kxFxHCvVU3eQUgYFL2aoN3igcFbiyyfF3mlv2eGt%2Fw2H0kiWBDZfPYRei6YGjPSZqlV19%2B4AOE2V2VBeqISvVOSak8DsFzS1H8&X-Amz-Signature=486a67ffe06eb4eba382879331c3520c14c214e4a577995de13ba2567abba430&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIITWC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBup9X6j5oJiOoPFmPDTPINBDi0K%2Bmjnxt7aVqs0TAIOAiBZDlZuIteFuGhBQoM0Yuh3cMpgxUkZ88w2Q8%2FlkKAg9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F0PizBsVkVAgWt6KtwDncwFqPGST6Hl1zhRCg7oyDrYl%2F6ZoSDytg%2BGOtpN3jpONer%2Fag767VtEvTobvJYm9xvfqxvVtW%2BNfZXwjvFgy4e1wyu9sRcTOjjOJSlwISSY3M%2FgW7NvzjemE0uRvSLWqZMS7kSeYxykCkABMQyk23uA%2F975hhSdvtOXLN1FSxL7pqYiYYNlMSsJjk5SzBKY0EcSAy%2BXqIhLwCjvLyqT2frgtOU%2BF1qVqcPA6iHuUys2%2B7eoNYI0IIE4AAwkr1rH%2FEfp00o83BtjirYShEwzHuJKghbvclTE2VNq4SWYZIKciCD1cZCumXAupIxcJHLPNBspNQ3LSs%2BeiHjf1KAZunOrH%2B4i3WNBXWMTW9MjzbOC6miL0vZH%2B0uZTIaw3T1McGuVtd%2BDgQnT0GE043O52SQBvffXvh7VSuB0W9iVBabAYQB6k4b9B4pKo1pZ2L%2B%2FKyyFyw0fLbSpoQyqnCJBF%2FDp5Xfdf8vrQ7ijjBWZPa2xI8lFYy1WmjTkZKPmtRfW4j4QVjBHwgZqjEoJ5uwnsBRzPo0oNW5kR2RJEZDeXPtiCEDrvi6BsvLcn%2BrqPB95uMZLGQ74DnvA81E2TPYlXEXMSyIHdRVcli3CI9N0dd6FwXBcy6FBdg615nQwjLPqwQY6pgH672FJ9U76RX%2FqbeY5GNUhrHZta90Vjel4YAyp5McVZkdflE%2F1An3Y0KbH0aY%2Ffltc1%2BlfCtKRH03N1eMO2%2FD%2F2ykMqPQEp8MSj1583h4Ewn3lL4z3k7q6JwiS69kxFxHCvVU3eQUgYFL2aoN3igcFbiyyfF3mlv2eGt%2Fw2H0kiWBDZfPYRei6YGjPSZqlV19%2B4AOE2V2VBeqISvVOSak8DsFzS1H8&X-Amz-Signature=c3e4609f0924d701c78bb35987b46c771d60486a9c14451f3126e3f44c6b09c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIITWC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBup9X6j5oJiOoPFmPDTPINBDi0K%2Bmjnxt7aVqs0TAIOAiBZDlZuIteFuGhBQoM0Yuh3cMpgxUkZ88w2Q8%2FlkKAg9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F0PizBsVkVAgWt6KtwDncwFqPGST6Hl1zhRCg7oyDrYl%2F6ZoSDytg%2BGOtpN3jpONer%2Fag767VtEvTobvJYm9xvfqxvVtW%2BNfZXwjvFgy4e1wyu9sRcTOjjOJSlwISSY3M%2FgW7NvzjemE0uRvSLWqZMS7kSeYxykCkABMQyk23uA%2F975hhSdvtOXLN1FSxL7pqYiYYNlMSsJjk5SzBKY0EcSAy%2BXqIhLwCjvLyqT2frgtOU%2BF1qVqcPA6iHuUys2%2B7eoNYI0IIE4AAwkr1rH%2FEfp00o83BtjirYShEwzHuJKghbvclTE2VNq4SWYZIKciCD1cZCumXAupIxcJHLPNBspNQ3LSs%2BeiHjf1KAZunOrH%2B4i3WNBXWMTW9MjzbOC6miL0vZH%2B0uZTIaw3T1McGuVtd%2BDgQnT0GE043O52SQBvffXvh7VSuB0W9iVBabAYQB6k4b9B4pKo1pZ2L%2B%2FKyyFyw0fLbSpoQyqnCJBF%2FDp5Xfdf8vrQ7ijjBWZPa2xI8lFYy1WmjTkZKPmtRfW4j4QVjBHwgZqjEoJ5uwnsBRzPo0oNW5kR2RJEZDeXPtiCEDrvi6BsvLcn%2BrqPB95uMZLGQ74DnvA81E2TPYlXEXMSyIHdRVcli3CI9N0dd6FwXBcy6FBdg615nQwjLPqwQY6pgH672FJ9U76RX%2FqbeY5GNUhrHZta90Vjel4YAyp5McVZkdflE%2F1An3Y0KbH0aY%2Ffltc1%2BlfCtKRH03N1eMO2%2FD%2F2ykMqPQEp8MSj1583h4Ewn3lL4z3k7q6JwiS69kxFxHCvVU3eQUgYFL2aoN3igcFbiyyfF3mlv2eGt%2Fw2H0kiWBDZfPYRei6YGjPSZqlV19%2B4AOE2V2VBeqISvVOSak8DsFzS1H8&X-Amz-Signature=d31b88f8479f018ae99be5785f22584a109da39f15b8894bfb3b4ab36476af1a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIITWC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBup9X6j5oJiOoPFmPDTPINBDi0K%2Bmjnxt7aVqs0TAIOAiBZDlZuIteFuGhBQoM0Yuh3cMpgxUkZ88w2Q8%2FlkKAg9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F0PizBsVkVAgWt6KtwDncwFqPGST6Hl1zhRCg7oyDrYl%2F6ZoSDytg%2BGOtpN3jpONer%2Fag767VtEvTobvJYm9xvfqxvVtW%2BNfZXwjvFgy4e1wyu9sRcTOjjOJSlwISSY3M%2FgW7NvzjemE0uRvSLWqZMS7kSeYxykCkABMQyk23uA%2F975hhSdvtOXLN1FSxL7pqYiYYNlMSsJjk5SzBKY0EcSAy%2BXqIhLwCjvLyqT2frgtOU%2BF1qVqcPA6iHuUys2%2B7eoNYI0IIE4AAwkr1rH%2FEfp00o83BtjirYShEwzHuJKghbvclTE2VNq4SWYZIKciCD1cZCumXAupIxcJHLPNBspNQ3LSs%2BeiHjf1KAZunOrH%2B4i3WNBXWMTW9MjzbOC6miL0vZH%2B0uZTIaw3T1McGuVtd%2BDgQnT0GE043O52SQBvffXvh7VSuB0W9iVBabAYQB6k4b9B4pKo1pZ2L%2B%2FKyyFyw0fLbSpoQyqnCJBF%2FDp5Xfdf8vrQ7ijjBWZPa2xI8lFYy1WmjTkZKPmtRfW4j4QVjBHwgZqjEoJ5uwnsBRzPo0oNW5kR2RJEZDeXPtiCEDrvi6BsvLcn%2BrqPB95uMZLGQ74DnvA81E2TPYlXEXMSyIHdRVcli3CI9N0dd6FwXBcy6FBdg615nQwjLPqwQY6pgH672FJ9U76RX%2FqbeY5GNUhrHZta90Vjel4YAyp5McVZkdflE%2F1An3Y0KbH0aY%2Ffltc1%2BlfCtKRH03N1eMO2%2FD%2F2ykMqPQEp8MSj1583h4Ewn3lL4z3k7q6JwiS69kxFxHCvVU3eQUgYFL2aoN3igcFbiyyfF3mlv2eGt%2Fw2H0kiWBDZfPYRei6YGjPSZqlV19%2B4AOE2V2VBeqISvVOSak8DsFzS1H8&X-Amz-Signature=f77c8e154706af256277a226d6677e9ec3758e7419e739a8e03608006255a63b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
