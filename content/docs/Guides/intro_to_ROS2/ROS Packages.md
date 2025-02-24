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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=9fa8642b78f77f711d863285fce5866d9ecfb11be8847697f22b6897541c7412&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=a0ed78da234161c0cf40daf112c652c7d65f98fb97e8768d3eb6deecde370c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=527d1511fae426873173cd5fd28b09c08dcba2c726d45b3990369f6a0de8108d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=aaeabd03d5d82bf66b392f8c05afbb1ed91b662b7ad32315cae55c8d5a343992&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=4b3520b1e4860c1f8c16518a4eef62b8f8c5d0faa92771fa764ed0ec0482349a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=46c880ab632d2bc3d469eec0b4a8b2f6f8ec224242879b770034edc17fb1ebb1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=29c0d4a4c070ef6b11ba88547a14dca4d346538f69167a7699234a7718788cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
