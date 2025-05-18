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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3GWXO7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5%2FCCQbES5Zcy3G9lgGOn2AIS%2ByKOKcMCv8yJb2Ju3QAiEA0WVsgl1uhzCx3d9bD0YtgUqoTcWgmWqP1r1ONy1XRckq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvMh12kkdsO8at66yrcAxwXlbnZQQqwC4o90HtAj0VRZZxoW6pVnqyRNR9IKJ1oH3DHRkzd9RVA4kgzQIXQaS%2FbD9xEDfjvxuZ%2Bhr3Eirsi39ZWSTOfWSzkgEq7PGbo%2BsNZ%2F0sLdijh1mNh1whm9ROW86VEh6sRRVwblif4ajM7zHM7pC4WZJyd64ozut7cjLdy8xnpQww5B%2B21ms95ffNwVzWeNkZlXtHMXKzAO96WlWRugxgsMlOT7OJYMNa5Qg1kqMabHL399JtZcbHDfw%2BulfIrn9BiR9zv7aOaPO0Zxz4TFXlymkCzQVTvbVzDLy7BU0d8ga61e0NFSUtfuNiRgvIX3r9OFWmMeTlmm86tKBbSCiqhSpSsA9ek8cbHylcyfyjj2Yw4cFv2do2dR4HfryafADnEquLx8n4D5svanK9SLTTF2Cmag6EgKKius8VUVNgv1o6iwv9iIvituIFiFnStjOlzgN6Ihz53cYkVott9tOJjEa86mEu%2BiWmLT%2FBNl53tjOSP0qZKaIyWSUGHXFR0XY0Jq5SXLO23uaRvkPlS5vIn7UUz%2FH4dq0EsjrVF3ifmHyF5lvxRye%2BOvw8a0lthOdA5CBBKsgAtEl%2FYvUAfvenkq%2FyjM4X2kxUFO4XeZk6SLjVVywD2MNrnqMEGOqUBdWTOOeqnZSMaCSikJKMxRuWLAM1pl46zn2cner%2Bc%2FHyfufihzlktfm7di1waClnRmijv2%2FB9HGdXF%2BjJ%2Br25IXamS7%2FfdMohws3rO%2FjRNQFSZMiHMB10xOcxIi7OHsI5YBSnmnQQvNqs2qI0fUC8%2FITD83yqOyPqIgJyCKhhOLrQazp%2BPZWnua0tY%2Fv%2BT3w5GgSbUDUStNHZh%2BypjynkfoUfmxSo&X-Amz-Signature=f847d1df8ad4d5f5865efa26f6da3b68b28ba24a435389b7e09113fe59f52112&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3GWXO7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5%2FCCQbES5Zcy3G9lgGOn2AIS%2ByKOKcMCv8yJb2Ju3QAiEA0WVsgl1uhzCx3d9bD0YtgUqoTcWgmWqP1r1ONy1XRckq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvMh12kkdsO8at66yrcAxwXlbnZQQqwC4o90HtAj0VRZZxoW6pVnqyRNR9IKJ1oH3DHRkzd9RVA4kgzQIXQaS%2FbD9xEDfjvxuZ%2Bhr3Eirsi39ZWSTOfWSzkgEq7PGbo%2BsNZ%2F0sLdijh1mNh1whm9ROW86VEh6sRRVwblif4ajM7zHM7pC4WZJyd64ozut7cjLdy8xnpQww5B%2B21ms95ffNwVzWeNkZlXtHMXKzAO96WlWRugxgsMlOT7OJYMNa5Qg1kqMabHL399JtZcbHDfw%2BulfIrn9BiR9zv7aOaPO0Zxz4TFXlymkCzQVTvbVzDLy7BU0d8ga61e0NFSUtfuNiRgvIX3r9OFWmMeTlmm86tKBbSCiqhSpSsA9ek8cbHylcyfyjj2Yw4cFv2do2dR4HfryafADnEquLx8n4D5svanK9SLTTF2Cmag6EgKKius8VUVNgv1o6iwv9iIvituIFiFnStjOlzgN6Ihz53cYkVott9tOJjEa86mEu%2BiWmLT%2FBNl53tjOSP0qZKaIyWSUGHXFR0XY0Jq5SXLO23uaRvkPlS5vIn7UUz%2FH4dq0EsjrVF3ifmHyF5lvxRye%2BOvw8a0lthOdA5CBBKsgAtEl%2FYvUAfvenkq%2FyjM4X2kxUFO4XeZk6SLjVVywD2MNrnqMEGOqUBdWTOOeqnZSMaCSikJKMxRuWLAM1pl46zn2cner%2Bc%2FHyfufihzlktfm7di1waClnRmijv2%2FB9HGdXF%2BjJ%2Br25IXamS7%2FfdMohws3rO%2FjRNQFSZMiHMB10xOcxIi7OHsI5YBSnmnQQvNqs2qI0fUC8%2FITD83yqOyPqIgJyCKhhOLrQazp%2BPZWnua0tY%2Fv%2BT3w5GgSbUDUStNHZh%2BypjynkfoUfmxSo&X-Amz-Signature=73ed56628538854068a3d567b3411095b4c72dd2c2b3c7bb758e2aef043887fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3GWXO7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5%2FCCQbES5Zcy3G9lgGOn2AIS%2ByKOKcMCv8yJb2Ju3QAiEA0WVsgl1uhzCx3d9bD0YtgUqoTcWgmWqP1r1ONy1XRckq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvMh12kkdsO8at66yrcAxwXlbnZQQqwC4o90HtAj0VRZZxoW6pVnqyRNR9IKJ1oH3DHRkzd9RVA4kgzQIXQaS%2FbD9xEDfjvxuZ%2Bhr3Eirsi39ZWSTOfWSzkgEq7PGbo%2BsNZ%2F0sLdijh1mNh1whm9ROW86VEh6sRRVwblif4ajM7zHM7pC4WZJyd64ozut7cjLdy8xnpQww5B%2B21ms95ffNwVzWeNkZlXtHMXKzAO96WlWRugxgsMlOT7OJYMNa5Qg1kqMabHL399JtZcbHDfw%2BulfIrn9BiR9zv7aOaPO0Zxz4TFXlymkCzQVTvbVzDLy7BU0d8ga61e0NFSUtfuNiRgvIX3r9OFWmMeTlmm86tKBbSCiqhSpSsA9ek8cbHylcyfyjj2Yw4cFv2do2dR4HfryafADnEquLx8n4D5svanK9SLTTF2Cmag6EgKKius8VUVNgv1o6iwv9iIvituIFiFnStjOlzgN6Ihz53cYkVott9tOJjEa86mEu%2BiWmLT%2FBNl53tjOSP0qZKaIyWSUGHXFR0XY0Jq5SXLO23uaRvkPlS5vIn7UUz%2FH4dq0EsjrVF3ifmHyF5lvxRye%2BOvw8a0lthOdA5CBBKsgAtEl%2FYvUAfvenkq%2FyjM4X2kxUFO4XeZk6SLjVVywD2MNrnqMEGOqUBdWTOOeqnZSMaCSikJKMxRuWLAM1pl46zn2cner%2Bc%2FHyfufihzlktfm7di1waClnRmijv2%2FB9HGdXF%2BjJ%2Br25IXamS7%2FfdMohws3rO%2FjRNQFSZMiHMB10xOcxIi7OHsI5YBSnmnQQvNqs2qI0fUC8%2FITD83yqOyPqIgJyCKhhOLrQazp%2BPZWnua0tY%2Fv%2BT3w5GgSbUDUStNHZh%2BypjynkfoUfmxSo&X-Amz-Signature=ccfdcec9da2ce9a47573613d98c53a3542f4d0e9a98f8e710419076ce86813fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3GWXO7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5%2FCCQbES5Zcy3G9lgGOn2AIS%2ByKOKcMCv8yJb2Ju3QAiEA0WVsgl1uhzCx3d9bD0YtgUqoTcWgmWqP1r1ONy1XRckq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvMh12kkdsO8at66yrcAxwXlbnZQQqwC4o90HtAj0VRZZxoW6pVnqyRNR9IKJ1oH3DHRkzd9RVA4kgzQIXQaS%2FbD9xEDfjvxuZ%2Bhr3Eirsi39ZWSTOfWSzkgEq7PGbo%2BsNZ%2F0sLdijh1mNh1whm9ROW86VEh6sRRVwblif4ajM7zHM7pC4WZJyd64ozut7cjLdy8xnpQww5B%2B21ms95ffNwVzWeNkZlXtHMXKzAO96WlWRugxgsMlOT7OJYMNa5Qg1kqMabHL399JtZcbHDfw%2BulfIrn9BiR9zv7aOaPO0Zxz4TFXlymkCzQVTvbVzDLy7BU0d8ga61e0NFSUtfuNiRgvIX3r9OFWmMeTlmm86tKBbSCiqhSpSsA9ek8cbHylcyfyjj2Yw4cFv2do2dR4HfryafADnEquLx8n4D5svanK9SLTTF2Cmag6EgKKius8VUVNgv1o6iwv9iIvituIFiFnStjOlzgN6Ihz53cYkVott9tOJjEa86mEu%2BiWmLT%2FBNl53tjOSP0qZKaIyWSUGHXFR0XY0Jq5SXLO23uaRvkPlS5vIn7UUz%2FH4dq0EsjrVF3ifmHyF5lvxRye%2BOvw8a0lthOdA5CBBKsgAtEl%2FYvUAfvenkq%2FyjM4X2kxUFO4XeZk6SLjVVywD2MNrnqMEGOqUBdWTOOeqnZSMaCSikJKMxRuWLAM1pl46zn2cner%2Bc%2FHyfufihzlktfm7di1waClnRmijv2%2FB9HGdXF%2BjJ%2Br25IXamS7%2FfdMohws3rO%2FjRNQFSZMiHMB10xOcxIi7OHsI5YBSnmnQQvNqs2qI0fUC8%2FITD83yqOyPqIgJyCKhhOLrQazp%2BPZWnua0tY%2Fv%2BT3w5GgSbUDUStNHZh%2BypjynkfoUfmxSo&X-Amz-Signature=dd5ba7d29ea7c8872433e3bd12069981ecdad288cb31e1f8893ed2d6ef349b52&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3GWXO7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5%2FCCQbES5Zcy3G9lgGOn2AIS%2ByKOKcMCv8yJb2Ju3QAiEA0WVsgl1uhzCx3d9bD0YtgUqoTcWgmWqP1r1ONy1XRckq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvMh12kkdsO8at66yrcAxwXlbnZQQqwC4o90HtAj0VRZZxoW6pVnqyRNR9IKJ1oH3DHRkzd9RVA4kgzQIXQaS%2FbD9xEDfjvxuZ%2Bhr3Eirsi39ZWSTOfWSzkgEq7PGbo%2BsNZ%2F0sLdijh1mNh1whm9ROW86VEh6sRRVwblif4ajM7zHM7pC4WZJyd64ozut7cjLdy8xnpQww5B%2B21ms95ffNwVzWeNkZlXtHMXKzAO96WlWRugxgsMlOT7OJYMNa5Qg1kqMabHL399JtZcbHDfw%2BulfIrn9BiR9zv7aOaPO0Zxz4TFXlymkCzQVTvbVzDLy7BU0d8ga61e0NFSUtfuNiRgvIX3r9OFWmMeTlmm86tKBbSCiqhSpSsA9ek8cbHylcyfyjj2Yw4cFv2do2dR4HfryafADnEquLx8n4D5svanK9SLTTF2Cmag6EgKKius8VUVNgv1o6iwv9iIvituIFiFnStjOlzgN6Ihz53cYkVott9tOJjEa86mEu%2BiWmLT%2FBNl53tjOSP0qZKaIyWSUGHXFR0XY0Jq5SXLO23uaRvkPlS5vIn7UUz%2FH4dq0EsjrVF3ifmHyF5lvxRye%2BOvw8a0lthOdA5CBBKsgAtEl%2FYvUAfvenkq%2FyjM4X2kxUFO4XeZk6SLjVVywD2MNrnqMEGOqUBdWTOOeqnZSMaCSikJKMxRuWLAM1pl46zn2cner%2Bc%2FHyfufihzlktfm7di1waClnRmijv2%2FB9HGdXF%2BjJ%2Br25IXamS7%2FfdMohws3rO%2FjRNQFSZMiHMB10xOcxIi7OHsI5YBSnmnQQvNqs2qI0fUC8%2FITD83yqOyPqIgJyCKhhOLrQazp%2BPZWnua0tY%2Fv%2BT3w5GgSbUDUStNHZh%2BypjynkfoUfmxSo&X-Amz-Signature=308dbccb6bcdb4a34718c383d2cf2f1df7d005ea60a20a05e984b04fdf2e4342&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3GWXO7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5%2FCCQbES5Zcy3G9lgGOn2AIS%2ByKOKcMCv8yJb2Ju3QAiEA0WVsgl1uhzCx3d9bD0YtgUqoTcWgmWqP1r1ONy1XRckq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvMh12kkdsO8at66yrcAxwXlbnZQQqwC4o90HtAj0VRZZxoW6pVnqyRNR9IKJ1oH3DHRkzd9RVA4kgzQIXQaS%2FbD9xEDfjvxuZ%2Bhr3Eirsi39ZWSTOfWSzkgEq7PGbo%2BsNZ%2F0sLdijh1mNh1whm9ROW86VEh6sRRVwblif4ajM7zHM7pC4WZJyd64ozut7cjLdy8xnpQww5B%2B21ms95ffNwVzWeNkZlXtHMXKzAO96WlWRugxgsMlOT7OJYMNa5Qg1kqMabHL399JtZcbHDfw%2BulfIrn9BiR9zv7aOaPO0Zxz4TFXlymkCzQVTvbVzDLy7BU0d8ga61e0NFSUtfuNiRgvIX3r9OFWmMeTlmm86tKBbSCiqhSpSsA9ek8cbHylcyfyjj2Yw4cFv2do2dR4HfryafADnEquLx8n4D5svanK9SLTTF2Cmag6EgKKius8VUVNgv1o6iwv9iIvituIFiFnStjOlzgN6Ihz53cYkVott9tOJjEa86mEu%2BiWmLT%2FBNl53tjOSP0qZKaIyWSUGHXFR0XY0Jq5SXLO23uaRvkPlS5vIn7UUz%2FH4dq0EsjrVF3ifmHyF5lvxRye%2BOvw8a0lthOdA5CBBKsgAtEl%2FYvUAfvenkq%2FyjM4X2kxUFO4XeZk6SLjVVywD2MNrnqMEGOqUBdWTOOeqnZSMaCSikJKMxRuWLAM1pl46zn2cner%2Bc%2FHyfufihzlktfm7di1waClnRmijv2%2FB9HGdXF%2BjJ%2Br25IXamS7%2FfdMohws3rO%2FjRNQFSZMiHMB10xOcxIi7OHsI5YBSnmnQQvNqs2qI0fUC8%2FITD83yqOyPqIgJyCKhhOLrQazp%2BPZWnua0tY%2Fv%2BT3w5GgSbUDUStNHZh%2BypjynkfoUfmxSo&X-Amz-Signature=d72e15a1910f1babedd33bc1862859d0cedaaa73c65df273e1bc9024b008afbf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3GWXO7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5%2FCCQbES5Zcy3G9lgGOn2AIS%2ByKOKcMCv8yJb2Ju3QAiEA0WVsgl1uhzCx3d9bD0YtgUqoTcWgmWqP1r1ONy1XRckq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvMh12kkdsO8at66yrcAxwXlbnZQQqwC4o90HtAj0VRZZxoW6pVnqyRNR9IKJ1oH3DHRkzd9RVA4kgzQIXQaS%2FbD9xEDfjvxuZ%2Bhr3Eirsi39ZWSTOfWSzkgEq7PGbo%2BsNZ%2F0sLdijh1mNh1whm9ROW86VEh6sRRVwblif4ajM7zHM7pC4WZJyd64ozut7cjLdy8xnpQww5B%2B21ms95ffNwVzWeNkZlXtHMXKzAO96WlWRugxgsMlOT7OJYMNa5Qg1kqMabHL399JtZcbHDfw%2BulfIrn9BiR9zv7aOaPO0Zxz4TFXlymkCzQVTvbVzDLy7BU0d8ga61e0NFSUtfuNiRgvIX3r9OFWmMeTlmm86tKBbSCiqhSpSsA9ek8cbHylcyfyjj2Yw4cFv2do2dR4HfryafADnEquLx8n4D5svanK9SLTTF2Cmag6EgKKius8VUVNgv1o6iwv9iIvituIFiFnStjOlzgN6Ihz53cYkVott9tOJjEa86mEu%2BiWmLT%2FBNl53tjOSP0qZKaIyWSUGHXFR0XY0Jq5SXLO23uaRvkPlS5vIn7UUz%2FH4dq0EsjrVF3ifmHyF5lvxRye%2BOvw8a0lthOdA5CBBKsgAtEl%2FYvUAfvenkq%2FyjM4X2kxUFO4XeZk6SLjVVywD2MNrnqMEGOqUBdWTOOeqnZSMaCSikJKMxRuWLAM1pl46zn2cner%2Bc%2FHyfufihzlktfm7di1waClnRmijv2%2FB9HGdXF%2BjJ%2Br25IXamS7%2FfdMohws3rO%2FjRNQFSZMiHMB10xOcxIi7OHsI5YBSnmnQQvNqs2qI0fUC8%2FITD83yqOyPqIgJyCKhhOLrQazp%2BPZWnua0tY%2Fv%2BT3w5GgSbUDUStNHZh%2BypjynkfoUfmxSo&X-Amz-Signature=b6f4c9fbbfe644db11bd49cc84bc51f219004d795c87a330e35f69ea80991875&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
