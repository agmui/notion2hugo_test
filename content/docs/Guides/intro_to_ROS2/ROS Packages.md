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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2PBS26%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIZv1hj7Hqaz%2FTel%2FZXLA27jVFQ7MA2F5LSuZYdFDGQIgOuaZgAeV%2FgGVA9LxajrKcNE5qmcUlhsnSTZTWZ%2BdeGIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJU3SAJX%2BD0sMfXO6SrcA29xqTk%2B7S%2FNInUGxvClmcDsq7yuIlKYdhtMMTfYvZahy6zG%2FxxiMu2mIsFqLNiRh2kwydjcrat5%2Fhyw8RE%2FX0i%2B%2FIkqOz5wCAOfunFLiv7WHDlOGKAvnudGsFVp2XVZGSZBGeHZwS8nCG9kI6CgL6UJ1i2qVhuwyUE5tE7vnRL4ycPr6p%2FHLwFIxcnk3U5wYpgWCdVxObV1JiIdvqSA%2FgEJ4E1P2oFscaGTRshozIABegptYavFYm3ZYF4Av9gdq01lmOIwMgQV%2FJnULCq9X3bz5Xg%2BDOKRMUy0GwBdNjCHRyVWBQmYOBJp1nci%2FPZvW2Myi2P%2FgalYzrw%2F48MTMi4abFwDmmjhJh%2FttXClU0a1MLg9Rh1VRY51sUhV42Zp9O5KOG56F4S95n4rRhVZMwfaeC8PNdzc5SyJ5MqFLuNnRnE%2FszMVfCZKWM%2F0Uc2RtjqPeUcelMRhmjDo%2BJEaRB5KY0ZVW0V0ssHfaQdAyqSQAzJyY0apMwyBnD98ZZYnGQO2xxiehxh5e042oVvBFBJqRVuIhnvNuEd6LPXOljW0%2BwpqXPFltdOp%2BHwKI7NvORqOGAcLPel11vPUDUZgikCvyvBmHKi%2F2oAxVX8xusWB%2FxJVeNYq5AIS4s7AMMOlyr8GOqUBqymowPknKCyiuZuA2U0PLM91Vtg3sWtbRcf%2FPztDnWhqDU%2FGXtzCfEoQcWE5JyOCyaY5ud732rqzHsz05c57sWJqoJYmx%2BSmeOwsfmX%2FnPcjEc9rjYMfUpBkuRnuRtPd7uz5WJImZ81m2JXKIWg0NSCiuTZZKXI2nm1sGauzPvrPmcfjYJDrZ3DZkyi8uPal7cb2TICpYkTmxyD4igvyLQZEc3RX&X-Amz-Signature=c2dac7db85fdca590e421b0a445420b2432b060056af6222b0b8a6763e87bf18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2PBS26%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIZv1hj7Hqaz%2FTel%2FZXLA27jVFQ7MA2F5LSuZYdFDGQIgOuaZgAeV%2FgGVA9LxajrKcNE5qmcUlhsnSTZTWZ%2BdeGIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJU3SAJX%2BD0sMfXO6SrcA29xqTk%2B7S%2FNInUGxvClmcDsq7yuIlKYdhtMMTfYvZahy6zG%2FxxiMu2mIsFqLNiRh2kwydjcrat5%2Fhyw8RE%2FX0i%2B%2FIkqOz5wCAOfunFLiv7WHDlOGKAvnudGsFVp2XVZGSZBGeHZwS8nCG9kI6CgL6UJ1i2qVhuwyUE5tE7vnRL4ycPr6p%2FHLwFIxcnk3U5wYpgWCdVxObV1JiIdvqSA%2FgEJ4E1P2oFscaGTRshozIABegptYavFYm3ZYF4Av9gdq01lmOIwMgQV%2FJnULCq9X3bz5Xg%2BDOKRMUy0GwBdNjCHRyVWBQmYOBJp1nci%2FPZvW2Myi2P%2FgalYzrw%2F48MTMi4abFwDmmjhJh%2FttXClU0a1MLg9Rh1VRY51sUhV42Zp9O5KOG56F4S95n4rRhVZMwfaeC8PNdzc5SyJ5MqFLuNnRnE%2FszMVfCZKWM%2F0Uc2RtjqPeUcelMRhmjDo%2BJEaRB5KY0ZVW0V0ssHfaQdAyqSQAzJyY0apMwyBnD98ZZYnGQO2xxiehxh5e042oVvBFBJqRVuIhnvNuEd6LPXOljW0%2BwpqXPFltdOp%2BHwKI7NvORqOGAcLPel11vPUDUZgikCvyvBmHKi%2F2oAxVX8xusWB%2FxJVeNYq5AIS4s7AMMOlyr8GOqUBqymowPknKCyiuZuA2U0PLM91Vtg3sWtbRcf%2FPztDnWhqDU%2FGXtzCfEoQcWE5JyOCyaY5ud732rqzHsz05c57sWJqoJYmx%2BSmeOwsfmX%2FnPcjEc9rjYMfUpBkuRnuRtPd7uz5WJImZ81m2JXKIWg0NSCiuTZZKXI2nm1sGauzPvrPmcfjYJDrZ3DZkyi8uPal7cb2TICpYkTmxyD4igvyLQZEc3RX&X-Amz-Signature=3faa9672cbcc8e8001b7ded7040a9eb54ea2d24952c608f8836334075a66770b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2PBS26%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIZv1hj7Hqaz%2FTel%2FZXLA27jVFQ7MA2F5LSuZYdFDGQIgOuaZgAeV%2FgGVA9LxajrKcNE5qmcUlhsnSTZTWZ%2BdeGIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJU3SAJX%2BD0sMfXO6SrcA29xqTk%2B7S%2FNInUGxvClmcDsq7yuIlKYdhtMMTfYvZahy6zG%2FxxiMu2mIsFqLNiRh2kwydjcrat5%2Fhyw8RE%2FX0i%2B%2FIkqOz5wCAOfunFLiv7WHDlOGKAvnudGsFVp2XVZGSZBGeHZwS8nCG9kI6CgL6UJ1i2qVhuwyUE5tE7vnRL4ycPr6p%2FHLwFIxcnk3U5wYpgWCdVxObV1JiIdvqSA%2FgEJ4E1P2oFscaGTRshozIABegptYavFYm3ZYF4Av9gdq01lmOIwMgQV%2FJnULCq9X3bz5Xg%2BDOKRMUy0GwBdNjCHRyVWBQmYOBJp1nci%2FPZvW2Myi2P%2FgalYzrw%2F48MTMi4abFwDmmjhJh%2FttXClU0a1MLg9Rh1VRY51sUhV42Zp9O5KOG56F4S95n4rRhVZMwfaeC8PNdzc5SyJ5MqFLuNnRnE%2FszMVfCZKWM%2F0Uc2RtjqPeUcelMRhmjDo%2BJEaRB5KY0ZVW0V0ssHfaQdAyqSQAzJyY0apMwyBnD98ZZYnGQO2xxiehxh5e042oVvBFBJqRVuIhnvNuEd6LPXOljW0%2BwpqXPFltdOp%2BHwKI7NvORqOGAcLPel11vPUDUZgikCvyvBmHKi%2F2oAxVX8xusWB%2FxJVeNYq5AIS4s7AMMOlyr8GOqUBqymowPknKCyiuZuA2U0PLM91Vtg3sWtbRcf%2FPztDnWhqDU%2FGXtzCfEoQcWE5JyOCyaY5ud732rqzHsz05c57sWJqoJYmx%2BSmeOwsfmX%2FnPcjEc9rjYMfUpBkuRnuRtPd7uz5WJImZ81m2JXKIWg0NSCiuTZZKXI2nm1sGauzPvrPmcfjYJDrZ3DZkyi8uPal7cb2TICpYkTmxyD4igvyLQZEc3RX&X-Amz-Signature=b4c64fd34169920d839989a770ee830f612e735584e47574db884cd84f3abc94&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2PBS26%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIZv1hj7Hqaz%2FTel%2FZXLA27jVFQ7MA2F5LSuZYdFDGQIgOuaZgAeV%2FgGVA9LxajrKcNE5qmcUlhsnSTZTWZ%2BdeGIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJU3SAJX%2BD0sMfXO6SrcA29xqTk%2B7S%2FNInUGxvClmcDsq7yuIlKYdhtMMTfYvZahy6zG%2FxxiMu2mIsFqLNiRh2kwydjcrat5%2Fhyw8RE%2FX0i%2B%2FIkqOz5wCAOfunFLiv7WHDlOGKAvnudGsFVp2XVZGSZBGeHZwS8nCG9kI6CgL6UJ1i2qVhuwyUE5tE7vnRL4ycPr6p%2FHLwFIxcnk3U5wYpgWCdVxObV1JiIdvqSA%2FgEJ4E1P2oFscaGTRshozIABegptYavFYm3ZYF4Av9gdq01lmOIwMgQV%2FJnULCq9X3bz5Xg%2BDOKRMUy0GwBdNjCHRyVWBQmYOBJp1nci%2FPZvW2Myi2P%2FgalYzrw%2F48MTMi4abFwDmmjhJh%2FttXClU0a1MLg9Rh1VRY51sUhV42Zp9O5KOG56F4S95n4rRhVZMwfaeC8PNdzc5SyJ5MqFLuNnRnE%2FszMVfCZKWM%2F0Uc2RtjqPeUcelMRhmjDo%2BJEaRB5KY0ZVW0V0ssHfaQdAyqSQAzJyY0apMwyBnD98ZZYnGQO2xxiehxh5e042oVvBFBJqRVuIhnvNuEd6LPXOljW0%2BwpqXPFltdOp%2BHwKI7NvORqOGAcLPel11vPUDUZgikCvyvBmHKi%2F2oAxVX8xusWB%2FxJVeNYq5AIS4s7AMMOlyr8GOqUBqymowPknKCyiuZuA2U0PLM91Vtg3sWtbRcf%2FPztDnWhqDU%2FGXtzCfEoQcWE5JyOCyaY5ud732rqzHsz05c57sWJqoJYmx%2BSmeOwsfmX%2FnPcjEc9rjYMfUpBkuRnuRtPd7uz5WJImZ81m2JXKIWg0NSCiuTZZKXI2nm1sGauzPvrPmcfjYJDrZ3DZkyi8uPal7cb2TICpYkTmxyD4igvyLQZEc3RX&X-Amz-Signature=675f8a008b45adb525e7b73c28a58195b3b2d19a4658fd7edc511e9b0fbbf2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2PBS26%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIZv1hj7Hqaz%2FTel%2FZXLA27jVFQ7MA2F5LSuZYdFDGQIgOuaZgAeV%2FgGVA9LxajrKcNE5qmcUlhsnSTZTWZ%2BdeGIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJU3SAJX%2BD0sMfXO6SrcA29xqTk%2B7S%2FNInUGxvClmcDsq7yuIlKYdhtMMTfYvZahy6zG%2FxxiMu2mIsFqLNiRh2kwydjcrat5%2Fhyw8RE%2FX0i%2B%2FIkqOz5wCAOfunFLiv7WHDlOGKAvnudGsFVp2XVZGSZBGeHZwS8nCG9kI6CgL6UJ1i2qVhuwyUE5tE7vnRL4ycPr6p%2FHLwFIxcnk3U5wYpgWCdVxObV1JiIdvqSA%2FgEJ4E1P2oFscaGTRshozIABegptYavFYm3ZYF4Av9gdq01lmOIwMgQV%2FJnULCq9X3bz5Xg%2BDOKRMUy0GwBdNjCHRyVWBQmYOBJp1nci%2FPZvW2Myi2P%2FgalYzrw%2F48MTMi4abFwDmmjhJh%2FttXClU0a1MLg9Rh1VRY51sUhV42Zp9O5KOG56F4S95n4rRhVZMwfaeC8PNdzc5SyJ5MqFLuNnRnE%2FszMVfCZKWM%2F0Uc2RtjqPeUcelMRhmjDo%2BJEaRB5KY0ZVW0V0ssHfaQdAyqSQAzJyY0apMwyBnD98ZZYnGQO2xxiehxh5e042oVvBFBJqRVuIhnvNuEd6LPXOljW0%2BwpqXPFltdOp%2BHwKI7NvORqOGAcLPel11vPUDUZgikCvyvBmHKi%2F2oAxVX8xusWB%2FxJVeNYq5AIS4s7AMMOlyr8GOqUBqymowPknKCyiuZuA2U0PLM91Vtg3sWtbRcf%2FPztDnWhqDU%2FGXtzCfEoQcWE5JyOCyaY5ud732rqzHsz05c57sWJqoJYmx%2BSmeOwsfmX%2FnPcjEc9rjYMfUpBkuRnuRtPd7uz5WJImZ81m2JXKIWg0NSCiuTZZKXI2nm1sGauzPvrPmcfjYJDrZ3DZkyi8uPal7cb2TICpYkTmxyD4igvyLQZEc3RX&X-Amz-Signature=9ae734cb82d0045324d8d175674714a1c4587ebe4ccd7b41a8839ebb05985d72&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2PBS26%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIZv1hj7Hqaz%2FTel%2FZXLA27jVFQ7MA2F5LSuZYdFDGQIgOuaZgAeV%2FgGVA9LxajrKcNE5qmcUlhsnSTZTWZ%2BdeGIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJU3SAJX%2BD0sMfXO6SrcA29xqTk%2B7S%2FNInUGxvClmcDsq7yuIlKYdhtMMTfYvZahy6zG%2FxxiMu2mIsFqLNiRh2kwydjcrat5%2Fhyw8RE%2FX0i%2B%2FIkqOz5wCAOfunFLiv7WHDlOGKAvnudGsFVp2XVZGSZBGeHZwS8nCG9kI6CgL6UJ1i2qVhuwyUE5tE7vnRL4ycPr6p%2FHLwFIxcnk3U5wYpgWCdVxObV1JiIdvqSA%2FgEJ4E1P2oFscaGTRshozIABegptYavFYm3ZYF4Av9gdq01lmOIwMgQV%2FJnULCq9X3bz5Xg%2BDOKRMUy0GwBdNjCHRyVWBQmYOBJp1nci%2FPZvW2Myi2P%2FgalYzrw%2F48MTMi4abFwDmmjhJh%2FttXClU0a1MLg9Rh1VRY51sUhV42Zp9O5KOG56F4S95n4rRhVZMwfaeC8PNdzc5SyJ5MqFLuNnRnE%2FszMVfCZKWM%2F0Uc2RtjqPeUcelMRhmjDo%2BJEaRB5KY0ZVW0V0ssHfaQdAyqSQAzJyY0apMwyBnD98ZZYnGQO2xxiehxh5e042oVvBFBJqRVuIhnvNuEd6LPXOljW0%2BwpqXPFltdOp%2BHwKI7NvORqOGAcLPel11vPUDUZgikCvyvBmHKi%2F2oAxVX8xusWB%2FxJVeNYq5AIS4s7AMMOlyr8GOqUBqymowPknKCyiuZuA2U0PLM91Vtg3sWtbRcf%2FPztDnWhqDU%2FGXtzCfEoQcWE5JyOCyaY5ud732rqzHsz05c57sWJqoJYmx%2BSmeOwsfmX%2FnPcjEc9rjYMfUpBkuRnuRtPd7uz5WJImZ81m2JXKIWg0NSCiuTZZKXI2nm1sGauzPvrPmcfjYJDrZ3DZkyi8uPal7cb2TICpYkTmxyD4igvyLQZEc3RX&X-Amz-Signature=73b7a27a6b7b47cfc4223c4aa01812908c7f1ebb96c3a6764ca05c51ce09463b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2PBS26%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIZv1hj7Hqaz%2FTel%2FZXLA27jVFQ7MA2F5LSuZYdFDGQIgOuaZgAeV%2FgGVA9LxajrKcNE5qmcUlhsnSTZTWZ%2BdeGIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJU3SAJX%2BD0sMfXO6SrcA29xqTk%2B7S%2FNInUGxvClmcDsq7yuIlKYdhtMMTfYvZahy6zG%2FxxiMu2mIsFqLNiRh2kwydjcrat5%2Fhyw8RE%2FX0i%2B%2FIkqOz5wCAOfunFLiv7WHDlOGKAvnudGsFVp2XVZGSZBGeHZwS8nCG9kI6CgL6UJ1i2qVhuwyUE5tE7vnRL4ycPr6p%2FHLwFIxcnk3U5wYpgWCdVxObV1JiIdvqSA%2FgEJ4E1P2oFscaGTRshozIABegptYavFYm3ZYF4Av9gdq01lmOIwMgQV%2FJnULCq9X3bz5Xg%2BDOKRMUy0GwBdNjCHRyVWBQmYOBJp1nci%2FPZvW2Myi2P%2FgalYzrw%2F48MTMi4abFwDmmjhJh%2FttXClU0a1MLg9Rh1VRY51sUhV42Zp9O5KOG56F4S95n4rRhVZMwfaeC8PNdzc5SyJ5MqFLuNnRnE%2FszMVfCZKWM%2F0Uc2RtjqPeUcelMRhmjDo%2BJEaRB5KY0ZVW0V0ssHfaQdAyqSQAzJyY0apMwyBnD98ZZYnGQO2xxiehxh5e042oVvBFBJqRVuIhnvNuEd6LPXOljW0%2BwpqXPFltdOp%2BHwKI7NvORqOGAcLPel11vPUDUZgikCvyvBmHKi%2F2oAxVX8xusWB%2FxJVeNYq5AIS4s7AMMOlyr8GOqUBqymowPknKCyiuZuA2U0PLM91Vtg3sWtbRcf%2FPztDnWhqDU%2FGXtzCfEoQcWE5JyOCyaY5ud732rqzHsz05c57sWJqoJYmx%2BSmeOwsfmX%2FnPcjEc9rjYMfUpBkuRnuRtPd7uz5WJImZ81m2JXKIWg0NSCiuTZZKXI2nm1sGauzPvrPmcfjYJDrZ3DZkyi8uPal7cb2TICpYkTmxyD4igvyLQZEc3RX&X-Amz-Signature=31e06542bb99d9792ba5b0ed7c1b80e2fe4dd7b3699001c5322dd27cdfe834e6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
