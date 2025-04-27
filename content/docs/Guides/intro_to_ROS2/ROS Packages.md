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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGGIUYZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHT9kJ3UO%2FJmOtHpJUGutNwLxT0xVPibvA4pRnWeQEQIgUYj0ZjL%2Fl8dz5JMUroR5nWkU4axQlVOrlsbCwCqXVMwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKak07auy0AyDJe6CrcA2%2BTB87tnG%2FXH5c%2BmXdn3st9DkAWK6wEX5QXtoq8m1EWrXCIXpq5tEOU7y8Xf4B192EkSOxRTnUwvo%2BJfChEBMDyUm0hpZyOHsdY%2B5rAEKMpbFZJfbWyJjDuzyqb%2FN%2BRwUJLqZysaSGFGKsvETzxK9RrY%2F9irpJw9suoUM9WZSlW09rTeB5qmdzoNPoUZ65WUSNqGTMSoPQM0kiFtTi%2FlTk0oN2FCB29lBkp8B3aQVPNLmyPltalXgSfffkCwRGVymld24azAmPq3BqXXVTg%2FRFaLIOdL0fSq%2FbppVX73HHcSRyAxjy5hr2YlOeUG7%2F9jaAoenprNmv8uCs1yFFaObrex4QPy4WPZ4dKT6%2F270Z0jFEt5f6yaCE7YB8Rw1zrIjlbFt3vlUc3pG7sTM742z688%2Fr9vFV0K2HeuxiGLCN9sHhrDD459%2FmAaLL2Nh8jWJLnAtBPD6Zs1w%2FHDd3x1HPDN9wKQF%2BmMw%2FHh67uYQEJ53KwT3e0mzVjf3PNBKTlMe3j%2BNSQ9vTrMaCTXiAS9%2BXrIPB5qNB0g9bnPxrbI7Kj65y8M7LghAL45RarIoljw2dKuTYNP3FTv1l1XYJd%2BqYAaML7MAl9dAWBL12oTP4VtdBynaR7O4wgWl1FMN%2B%2FtcAGOqUBSaD0pJ9qdYrePl1Mti33H4LEiy5c196voQH9otr508kGMy5kyVYfztMKNU%2BXq9kMEXLMR5Bi%2FnPjTueAX%2F6Pev%2B94gGrOuA0qDEmeV%2B89LTXhEBQ2pVFOUxOAM3%2BsA83xZ8ThhCY9IoyAkNZGtpwDLLO2Sv%2Bk%2FgMK8pz3jMhoMuHm5SvUGfeDSJdTIWSAvVS5QHXzJ8tK2tKORkTe6p5ymPaweD%2B&X-Amz-Signature=e4ea13ca0ef8503cc977dcdc81763ee698eab09bfff69117d9767aa4e2bb3465&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGGIUYZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHT9kJ3UO%2FJmOtHpJUGutNwLxT0xVPibvA4pRnWeQEQIgUYj0ZjL%2Fl8dz5JMUroR5nWkU4axQlVOrlsbCwCqXVMwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKak07auy0AyDJe6CrcA2%2BTB87tnG%2FXH5c%2BmXdn3st9DkAWK6wEX5QXtoq8m1EWrXCIXpq5tEOU7y8Xf4B192EkSOxRTnUwvo%2BJfChEBMDyUm0hpZyOHsdY%2B5rAEKMpbFZJfbWyJjDuzyqb%2FN%2BRwUJLqZysaSGFGKsvETzxK9RrY%2F9irpJw9suoUM9WZSlW09rTeB5qmdzoNPoUZ65WUSNqGTMSoPQM0kiFtTi%2FlTk0oN2FCB29lBkp8B3aQVPNLmyPltalXgSfffkCwRGVymld24azAmPq3BqXXVTg%2FRFaLIOdL0fSq%2FbppVX73HHcSRyAxjy5hr2YlOeUG7%2F9jaAoenprNmv8uCs1yFFaObrex4QPy4WPZ4dKT6%2F270Z0jFEt5f6yaCE7YB8Rw1zrIjlbFt3vlUc3pG7sTM742z688%2Fr9vFV0K2HeuxiGLCN9sHhrDD459%2FmAaLL2Nh8jWJLnAtBPD6Zs1w%2FHDd3x1HPDN9wKQF%2BmMw%2FHh67uYQEJ53KwT3e0mzVjf3PNBKTlMe3j%2BNSQ9vTrMaCTXiAS9%2BXrIPB5qNB0g9bnPxrbI7Kj65y8M7LghAL45RarIoljw2dKuTYNP3FTv1l1XYJd%2BqYAaML7MAl9dAWBL12oTP4VtdBynaR7O4wgWl1FMN%2B%2FtcAGOqUBSaD0pJ9qdYrePl1Mti33H4LEiy5c196voQH9otr508kGMy5kyVYfztMKNU%2BXq9kMEXLMR5Bi%2FnPjTueAX%2F6Pev%2B94gGrOuA0qDEmeV%2B89LTXhEBQ2pVFOUxOAM3%2BsA83xZ8ThhCY9IoyAkNZGtpwDLLO2Sv%2Bk%2FgMK8pz3jMhoMuHm5SvUGfeDSJdTIWSAvVS5QHXzJ8tK2tKORkTe6p5ymPaweD%2B&X-Amz-Signature=13917ccd2c18deb18109616a91889598efb2ab1c42ce7f629829025b7215e11f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGGIUYZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHT9kJ3UO%2FJmOtHpJUGutNwLxT0xVPibvA4pRnWeQEQIgUYj0ZjL%2Fl8dz5JMUroR5nWkU4axQlVOrlsbCwCqXVMwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKak07auy0AyDJe6CrcA2%2BTB87tnG%2FXH5c%2BmXdn3st9DkAWK6wEX5QXtoq8m1EWrXCIXpq5tEOU7y8Xf4B192EkSOxRTnUwvo%2BJfChEBMDyUm0hpZyOHsdY%2B5rAEKMpbFZJfbWyJjDuzyqb%2FN%2BRwUJLqZysaSGFGKsvETzxK9RrY%2F9irpJw9suoUM9WZSlW09rTeB5qmdzoNPoUZ65WUSNqGTMSoPQM0kiFtTi%2FlTk0oN2FCB29lBkp8B3aQVPNLmyPltalXgSfffkCwRGVymld24azAmPq3BqXXVTg%2FRFaLIOdL0fSq%2FbppVX73HHcSRyAxjy5hr2YlOeUG7%2F9jaAoenprNmv8uCs1yFFaObrex4QPy4WPZ4dKT6%2F270Z0jFEt5f6yaCE7YB8Rw1zrIjlbFt3vlUc3pG7sTM742z688%2Fr9vFV0K2HeuxiGLCN9sHhrDD459%2FmAaLL2Nh8jWJLnAtBPD6Zs1w%2FHDd3x1HPDN9wKQF%2BmMw%2FHh67uYQEJ53KwT3e0mzVjf3PNBKTlMe3j%2BNSQ9vTrMaCTXiAS9%2BXrIPB5qNB0g9bnPxrbI7Kj65y8M7LghAL45RarIoljw2dKuTYNP3FTv1l1XYJd%2BqYAaML7MAl9dAWBL12oTP4VtdBynaR7O4wgWl1FMN%2B%2FtcAGOqUBSaD0pJ9qdYrePl1Mti33H4LEiy5c196voQH9otr508kGMy5kyVYfztMKNU%2BXq9kMEXLMR5Bi%2FnPjTueAX%2F6Pev%2B94gGrOuA0qDEmeV%2B89LTXhEBQ2pVFOUxOAM3%2BsA83xZ8ThhCY9IoyAkNZGtpwDLLO2Sv%2Bk%2FgMK8pz3jMhoMuHm5SvUGfeDSJdTIWSAvVS5QHXzJ8tK2tKORkTe6p5ymPaweD%2B&X-Amz-Signature=853200ea183948bc4bc985d2b4e447a188725e6966a51402f100d0a4200b0cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGGIUYZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHT9kJ3UO%2FJmOtHpJUGutNwLxT0xVPibvA4pRnWeQEQIgUYj0ZjL%2Fl8dz5JMUroR5nWkU4axQlVOrlsbCwCqXVMwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKak07auy0AyDJe6CrcA2%2BTB87tnG%2FXH5c%2BmXdn3st9DkAWK6wEX5QXtoq8m1EWrXCIXpq5tEOU7y8Xf4B192EkSOxRTnUwvo%2BJfChEBMDyUm0hpZyOHsdY%2B5rAEKMpbFZJfbWyJjDuzyqb%2FN%2BRwUJLqZysaSGFGKsvETzxK9RrY%2F9irpJw9suoUM9WZSlW09rTeB5qmdzoNPoUZ65WUSNqGTMSoPQM0kiFtTi%2FlTk0oN2FCB29lBkp8B3aQVPNLmyPltalXgSfffkCwRGVymld24azAmPq3BqXXVTg%2FRFaLIOdL0fSq%2FbppVX73HHcSRyAxjy5hr2YlOeUG7%2F9jaAoenprNmv8uCs1yFFaObrex4QPy4WPZ4dKT6%2F270Z0jFEt5f6yaCE7YB8Rw1zrIjlbFt3vlUc3pG7sTM742z688%2Fr9vFV0K2HeuxiGLCN9sHhrDD459%2FmAaLL2Nh8jWJLnAtBPD6Zs1w%2FHDd3x1HPDN9wKQF%2BmMw%2FHh67uYQEJ53KwT3e0mzVjf3PNBKTlMe3j%2BNSQ9vTrMaCTXiAS9%2BXrIPB5qNB0g9bnPxrbI7Kj65y8M7LghAL45RarIoljw2dKuTYNP3FTv1l1XYJd%2BqYAaML7MAl9dAWBL12oTP4VtdBynaR7O4wgWl1FMN%2B%2FtcAGOqUBSaD0pJ9qdYrePl1Mti33H4LEiy5c196voQH9otr508kGMy5kyVYfztMKNU%2BXq9kMEXLMR5Bi%2FnPjTueAX%2F6Pev%2B94gGrOuA0qDEmeV%2B89LTXhEBQ2pVFOUxOAM3%2BsA83xZ8ThhCY9IoyAkNZGtpwDLLO2Sv%2Bk%2FgMK8pz3jMhoMuHm5SvUGfeDSJdTIWSAvVS5QHXzJ8tK2tKORkTe6p5ymPaweD%2B&X-Amz-Signature=2c25a584c9e62b25b8f5130673ae232b2bea834dc5cb394e1682c6771af7328d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGGIUYZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHT9kJ3UO%2FJmOtHpJUGutNwLxT0xVPibvA4pRnWeQEQIgUYj0ZjL%2Fl8dz5JMUroR5nWkU4axQlVOrlsbCwCqXVMwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKak07auy0AyDJe6CrcA2%2BTB87tnG%2FXH5c%2BmXdn3st9DkAWK6wEX5QXtoq8m1EWrXCIXpq5tEOU7y8Xf4B192EkSOxRTnUwvo%2BJfChEBMDyUm0hpZyOHsdY%2B5rAEKMpbFZJfbWyJjDuzyqb%2FN%2BRwUJLqZysaSGFGKsvETzxK9RrY%2F9irpJw9suoUM9WZSlW09rTeB5qmdzoNPoUZ65WUSNqGTMSoPQM0kiFtTi%2FlTk0oN2FCB29lBkp8B3aQVPNLmyPltalXgSfffkCwRGVymld24azAmPq3BqXXVTg%2FRFaLIOdL0fSq%2FbppVX73HHcSRyAxjy5hr2YlOeUG7%2F9jaAoenprNmv8uCs1yFFaObrex4QPy4WPZ4dKT6%2F270Z0jFEt5f6yaCE7YB8Rw1zrIjlbFt3vlUc3pG7sTM742z688%2Fr9vFV0K2HeuxiGLCN9sHhrDD459%2FmAaLL2Nh8jWJLnAtBPD6Zs1w%2FHDd3x1HPDN9wKQF%2BmMw%2FHh67uYQEJ53KwT3e0mzVjf3PNBKTlMe3j%2BNSQ9vTrMaCTXiAS9%2BXrIPB5qNB0g9bnPxrbI7Kj65y8M7LghAL45RarIoljw2dKuTYNP3FTv1l1XYJd%2BqYAaML7MAl9dAWBL12oTP4VtdBynaR7O4wgWl1FMN%2B%2FtcAGOqUBSaD0pJ9qdYrePl1Mti33H4LEiy5c196voQH9otr508kGMy5kyVYfztMKNU%2BXq9kMEXLMR5Bi%2FnPjTueAX%2F6Pev%2B94gGrOuA0qDEmeV%2B89LTXhEBQ2pVFOUxOAM3%2BsA83xZ8ThhCY9IoyAkNZGtpwDLLO2Sv%2Bk%2FgMK8pz3jMhoMuHm5SvUGfeDSJdTIWSAvVS5QHXzJ8tK2tKORkTe6p5ymPaweD%2B&X-Amz-Signature=e742a6f3858cd2464ae7b9656c1af89a96e6ccdf715873beefb8d5624f7cfa09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGGIUYZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHT9kJ3UO%2FJmOtHpJUGutNwLxT0xVPibvA4pRnWeQEQIgUYj0ZjL%2Fl8dz5JMUroR5nWkU4axQlVOrlsbCwCqXVMwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKak07auy0AyDJe6CrcA2%2BTB87tnG%2FXH5c%2BmXdn3st9DkAWK6wEX5QXtoq8m1EWrXCIXpq5tEOU7y8Xf4B192EkSOxRTnUwvo%2BJfChEBMDyUm0hpZyOHsdY%2B5rAEKMpbFZJfbWyJjDuzyqb%2FN%2BRwUJLqZysaSGFGKsvETzxK9RrY%2F9irpJw9suoUM9WZSlW09rTeB5qmdzoNPoUZ65WUSNqGTMSoPQM0kiFtTi%2FlTk0oN2FCB29lBkp8B3aQVPNLmyPltalXgSfffkCwRGVymld24azAmPq3BqXXVTg%2FRFaLIOdL0fSq%2FbppVX73HHcSRyAxjy5hr2YlOeUG7%2F9jaAoenprNmv8uCs1yFFaObrex4QPy4WPZ4dKT6%2F270Z0jFEt5f6yaCE7YB8Rw1zrIjlbFt3vlUc3pG7sTM742z688%2Fr9vFV0K2HeuxiGLCN9sHhrDD459%2FmAaLL2Nh8jWJLnAtBPD6Zs1w%2FHDd3x1HPDN9wKQF%2BmMw%2FHh67uYQEJ53KwT3e0mzVjf3PNBKTlMe3j%2BNSQ9vTrMaCTXiAS9%2BXrIPB5qNB0g9bnPxrbI7Kj65y8M7LghAL45RarIoljw2dKuTYNP3FTv1l1XYJd%2BqYAaML7MAl9dAWBL12oTP4VtdBynaR7O4wgWl1FMN%2B%2FtcAGOqUBSaD0pJ9qdYrePl1Mti33H4LEiy5c196voQH9otr508kGMy5kyVYfztMKNU%2BXq9kMEXLMR5Bi%2FnPjTueAX%2F6Pev%2B94gGrOuA0qDEmeV%2B89LTXhEBQ2pVFOUxOAM3%2BsA83xZ8ThhCY9IoyAkNZGtpwDLLO2Sv%2Bk%2FgMK8pz3jMhoMuHm5SvUGfeDSJdTIWSAvVS5QHXzJ8tK2tKORkTe6p5ymPaweD%2B&X-Amz-Signature=e86899143579eba054e50b174a89379143a6890b17d0291068a3803a3a57e408&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGGIUYZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKHT9kJ3UO%2FJmOtHpJUGutNwLxT0xVPibvA4pRnWeQEQIgUYj0ZjL%2Fl8dz5JMUroR5nWkU4axQlVOrlsbCwCqXVMwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFKak07auy0AyDJe6CrcA2%2BTB87tnG%2FXH5c%2BmXdn3st9DkAWK6wEX5QXtoq8m1EWrXCIXpq5tEOU7y8Xf4B192EkSOxRTnUwvo%2BJfChEBMDyUm0hpZyOHsdY%2B5rAEKMpbFZJfbWyJjDuzyqb%2FN%2BRwUJLqZysaSGFGKsvETzxK9RrY%2F9irpJw9suoUM9WZSlW09rTeB5qmdzoNPoUZ65WUSNqGTMSoPQM0kiFtTi%2FlTk0oN2FCB29lBkp8B3aQVPNLmyPltalXgSfffkCwRGVymld24azAmPq3BqXXVTg%2FRFaLIOdL0fSq%2FbppVX73HHcSRyAxjy5hr2YlOeUG7%2F9jaAoenprNmv8uCs1yFFaObrex4QPy4WPZ4dKT6%2F270Z0jFEt5f6yaCE7YB8Rw1zrIjlbFt3vlUc3pG7sTM742z688%2Fr9vFV0K2HeuxiGLCN9sHhrDD459%2FmAaLL2Nh8jWJLnAtBPD6Zs1w%2FHDd3x1HPDN9wKQF%2BmMw%2FHh67uYQEJ53KwT3e0mzVjf3PNBKTlMe3j%2BNSQ9vTrMaCTXiAS9%2BXrIPB5qNB0g9bnPxrbI7Kj65y8M7LghAL45RarIoljw2dKuTYNP3FTv1l1XYJd%2BqYAaML7MAl9dAWBL12oTP4VtdBynaR7O4wgWl1FMN%2B%2FtcAGOqUBSaD0pJ9qdYrePl1Mti33H4LEiy5c196voQH9otr508kGMy5kyVYfztMKNU%2BXq9kMEXLMR5Bi%2FnPjTueAX%2F6Pev%2B94gGrOuA0qDEmeV%2B89LTXhEBQ2pVFOUxOAM3%2BsA83xZ8ThhCY9IoyAkNZGtpwDLLO2Sv%2Bk%2FgMK8pz3jMhoMuHm5SvUGfeDSJdTIWSAvVS5QHXzJ8tK2tKORkTe6p5ymPaweD%2B&X-Amz-Signature=1e9f4d8bcad132cc6ba06e3641c87958a3d532336a3e5cff8c4785033aaed698&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
