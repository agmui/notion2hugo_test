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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBANTR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkR%2FISibKV474wGSRZH296N0yc0qfQkHVAbVgk%2Fx%2FILAiEAzS4%2B8QDcMGs6re22mCULHrNKKpVQtGJyRUPDtNCnSX8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BM15obbuG2%2FcbnqCrcA0VJK2e8Gev3pKcsza46OGN1Us3EeoYaDsUxIDSNWhUUZKwP6H%2BCdXa5yPyB4iESl0ZC6VIGS%2FrRdnKfMJKI9rIjWt2%2Fmsqu0S1RpFS8qijf%2FnWJ12SQbkAT%2Fg6ZMDru1Y6lEGdiavM53f5%2BzyFbi%2FEJo4ylrcVB4CrpAYMV%2B0vkHN98CDZ3kD%2F9ZY4NgE9GIfAtzT8vKqUkE3JBXCSTjNmscOfUsV3lPetBVwkyZ7D5yBoGME8K33pwRU1C2ReuEgWAgdMvITnhy0xn5gQMbI93i1wvIRXryc%2B%2FlcfEXIFI%2BZ9PPwm%2BP0PfYoHyyYQwNyB%2FFuyOvpBG9b%2Ft77QD7ZP3ovMsgUd452As2Cl5f0ppnaC9wP5Z3BNgeZa9tIrFl4r%2BereHK3D0jxKjhlvRhGj4Od7lwZvYG%2BSiAu5a6YrXhvnZ%2BN3fxo8KayMP7AFaqe8V2jUg3TEfAHTBEAFvwlrspxwW4dSn0YuSTTc%2FCgm04NfJQpEeE8C81q6o%2BHHcSFGIinZwNU%2Fd4OMKELw1wvmArDGwwg7ldbs6xZlVU5%2FZ0lSs4cjOJzs7r6hSSYncX7aJ5t9xQLGfJr8HqMxlHLtH1q1g%2FolRk1UnZAreP1jISkMYf08OMc%2FwukWMMNuW6b0GOqUB8AMEayUF8ucPy9ugWpzSgHtHlQ6jB%2Bui6jqS2q7UEG6kDcdcG9EkduqRIBbFnAzABX0C9gUecrs5zt3QyJVs7aBvMP7LVOcPH9GfB%2BZP2mjwzRTKC%2BuG%2BQ9l9oW66FLZ1xX8tBZZeckwOvhBA7TD3r5N5BMsxF9HABS8SPuQPTx5WPOu4VUfU4TItCmhzy5EPi0eHFWqs1eK0tNiYvNbprDqLRgb&X-Amz-Signature=ca75f71228ea322b18918ae76153ba4cd724568cf91bbf38722b56d4e678ba63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBANTR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkR%2FISibKV474wGSRZH296N0yc0qfQkHVAbVgk%2Fx%2FILAiEAzS4%2B8QDcMGs6re22mCULHrNKKpVQtGJyRUPDtNCnSX8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BM15obbuG2%2FcbnqCrcA0VJK2e8Gev3pKcsza46OGN1Us3EeoYaDsUxIDSNWhUUZKwP6H%2BCdXa5yPyB4iESl0ZC6VIGS%2FrRdnKfMJKI9rIjWt2%2Fmsqu0S1RpFS8qijf%2FnWJ12SQbkAT%2Fg6ZMDru1Y6lEGdiavM53f5%2BzyFbi%2FEJo4ylrcVB4CrpAYMV%2B0vkHN98CDZ3kD%2F9ZY4NgE9GIfAtzT8vKqUkE3JBXCSTjNmscOfUsV3lPetBVwkyZ7D5yBoGME8K33pwRU1C2ReuEgWAgdMvITnhy0xn5gQMbI93i1wvIRXryc%2B%2FlcfEXIFI%2BZ9PPwm%2BP0PfYoHyyYQwNyB%2FFuyOvpBG9b%2Ft77QD7ZP3ovMsgUd452As2Cl5f0ppnaC9wP5Z3BNgeZa9tIrFl4r%2BereHK3D0jxKjhlvRhGj4Od7lwZvYG%2BSiAu5a6YrXhvnZ%2BN3fxo8KayMP7AFaqe8V2jUg3TEfAHTBEAFvwlrspxwW4dSn0YuSTTc%2FCgm04NfJQpEeE8C81q6o%2BHHcSFGIinZwNU%2Fd4OMKELw1wvmArDGwwg7ldbs6xZlVU5%2FZ0lSs4cjOJzs7r6hSSYncX7aJ5t9xQLGfJr8HqMxlHLtH1q1g%2FolRk1UnZAreP1jISkMYf08OMc%2FwukWMMNuW6b0GOqUB8AMEayUF8ucPy9ugWpzSgHtHlQ6jB%2Bui6jqS2q7UEG6kDcdcG9EkduqRIBbFnAzABX0C9gUecrs5zt3QyJVs7aBvMP7LVOcPH9GfB%2BZP2mjwzRTKC%2BuG%2BQ9l9oW66FLZ1xX8tBZZeckwOvhBA7TD3r5N5BMsxF9HABS8SPuQPTx5WPOu4VUfU4TItCmhzy5EPi0eHFWqs1eK0tNiYvNbprDqLRgb&X-Amz-Signature=e1bc2280e19e6fcb336f93a7d811ef5c6161f424efe091b485794cf57a791ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBANTR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkR%2FISibKV474wGSRZH296N0yc0qfQkHVAbVgk%2Fx%2FILAiEAzS4%2B8QDcMGs6re22mCULHrNKKpVQtGJyRUPDtNCnSX8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BM15obbuG2%2FcbnqCrcA0VJK2e8Gev3pKcsza46OGN1Us3EeoYaDsUxIDSNWhUUZKwP6H%2BCdXa5yPyB4iESl0ZC6VIGS%2FrRdnKfMJKI9rIjWt2%2Fmsqu0S1RpFS8qijf%2FnWJ12SQbkAT%2Fg6ZMDru1Y6lEGdiavM53f5%2BzyFbi%2FEJo4ylrcVB4CrpAYMV%2B0vkHN98CDZ3kD%2F9ZY4NgE9GIfAtzT8vKqUkE3JBXCSTjNmscOfUsV3lPetBVwkyZ7D5yBoGME8K33pwRU1C2ReuEgWAgdMvITnhy0xn5gQMbI93i1wvIRXryc%2B%2FlcfEXIFI%2BZ9PPwm%2BP0PfYoHyyYQwNyB%2FFuyOvpBG9b%2Ft77QD7ZP3ovMsgUd452As2Cl5f0ppnaC9wP5Z3BNgeZa9tIrFl4r%2BereHK3D0jxKjhlvRhGj4Od7lwZvYG%2BSiAu5a6YrXhvnZ%2BN3fxo8KayMP7AFaqe8V2jUg3TEfAHTBEAFvwlrspxwW4dSn0YuSTTc%2FCgm04NfJQpEeE8C81q6o%2BHHcSFGIinZwNU%2Fd4OMKELw1wvmArDGwwg7ldbs6xZlVU5%2FZ0lSs4cjOJzs7r6hSSYncX7aJ5t9xQLGfJr8HqMxlHLtH1q1g%2FolRk1UnZAreP1jISkMYf08OMc%2FwukWMMNuW6b0GOqUB8AMEayUF8ucPy9ugWpzSgHtHlQ6jB%2Bui6jqS2q7UEG6kDcdcG9EkduqRIBbFnAzABX0C9gUecrs5zt3QyJVs7aBvMP7LVOcPH9GfB%2BZP2mjwzRTKC%2BuG%2BQ9l9oW66FLZ1xX8tBZZeckwOvhBA7TD3r5N5BMsxF9HABS8SPuQPTx5WPOu4VUfU4TItCmhzy5EPi0eHFWqs1eK0tNiYvNbprDqLRgb&X-Amz-Signature=6cb19c6a5b0263a080bac83b1d3890295c4e53c1dad7b7095bc514d00e86f1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBANTR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkR%2FISibKV474wGSRZH296N0yc0qfQkHVAbVgk%2Fx%2FILAiEAzS4%2B8QDcMGs6re22mCULHrNKKpVQtGJyRUPDtNCnSX8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BM15obbuG2%2FcbnqCrcA0VJK2e8Gev3pKcsza46OGN1Us3EeoYaDsUxIDSNWhUUZKwP6H%2BCdXa5yPyB4iESl0ZC6VIGS%2FrRdnKfMJKI9rIjWt2%2Fmsqu0S1RpFS8qijf%2FnWJ12SQbkAT%2Fg6ZMDru1Y6lEGdiavM53f5%2BzyFbi%2FEJo4ylrcVB4CrpAYMV%2B0vkHN98CDZ3kD%2F9ZY4NgE9GIfAtzT8vKqUkE3JBXCSTjNmscOfUsV3lPetBVwkyZ7D5yBoGME8K33pwRU1C2ReuEgWAgdMvITnhy0xn5gQMbI93i1wvIRXryc%2B%2FlcfEXIFI%2BZ9PPwm%2BP0PfYoHyyYQwNyB%2FFuyOvpBG9b%2Ft77QD7ZP3ovMsgUd452As2Cl5f0ppnaC9wP5Z3BNgeZa9tIrFl4r%2BereHK3D0jxKjhlvRhGj4Od7lwZvYG%2BSiAu5a6YrXhvnZ%2BN3fxo8KayMP7AFaqe8V2jUg3TEfAHTBEAFvwlrspxwW4dSn0YuSTTc%2FCgm04NfJQpEeE8C81q6o%2BHHcSFGIinZwNU%2Fd4OMKELw1wvmArDGwwg7ldbs6xZlVU5%2FZ0lSs4cjOJzs7r6hSSYncX7aJ5t9xQLGfJr8HqMxlHLtH1q1g%2FolRk1UnZAreP1jISkMYf08OMc%2FwukWMMNuW6b0GOqUB8AMEayUF8ucPy9ugWpzSgHtHlQ6jB%2Bui6jqS2q7UEG6kDcdcG9EkduqRIBbFnAzABX0C9gUecrs5zt3QyJVs7aBvMP7LVOcPH9GfB%2BZP2mjwzRTKC%2BuG%2BQ9l9oW66FLZ1xX8tBZZeckwOvhBA7TD3r5N5BMsxF9HABS8SPuQPTx5WPOu4VUfU4TItCmhzy5EPi0eHFWqs1eK0tNiYvNbprDqLRgb&X-Amz-Signature=aa7ac1224d2ce4cf6de585c0ca83a84b84883a9744b83bfd03afd7c37844b6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBANTR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkR%2FISibKV474wGSRZH296N0yc0qfQkHVAbVgk%2Fx%2FILAiEAzS4%2B8QDcMGs6re22mCULHrNKKpVQtGJyRUPDtNCnSX8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BM15obbuG2%2FcbnqCrcA0VJK2e8Gev3pKcsza46OGN1Us3EeoYaDsUxIDSNWhUUZKwP6H%2BCdXa5yPyB4iESl0ZC6VIGS%2FrRdnKfMJKI9rIjWt2%2Fmsqu0S1RpFS8qijf%2FnWJ12SQbkAT%2Fg6ZMDru1Y6lEGdiavM53f5%2BzyFbi%2FEJo4ylrcVB4CrpAYMV%2B0vkHN98CDZ3kD%2F9ZY4NgE9GIfAtzT8vKqUkE3JBXCSTjNmscOfUsV3lPetBVwkyZ7D5yBoGME8K33pwRU1C2ReuEgWAgdMvITnhy0xn5gQMbI93i1wvIRXryc%2B%2FlcfEXIFI%2BZ9PPwm%2BP0PfYoHyyYQwNyB%2FFuyOvpBG9b%2Ft77QD7ZP3ovMsgUd452As2Cl5f0ppnaC9wP5Z3BNgeZa9tIrFl4r%2BereHK3D0jxKjhlvRhGj4Od7lwZvYG%2BSiAu5a6YrXhvnZ%2BN3fxo8KayMP7AFaqe8V2jUg3TEfAHTBEAFvwlrspxwW4dSn0YuSTTc%2FCgm04NfJQpEeE8C81q6o%2BHHcSFGIinZwNU%2Fd4OMKELw1wvmArDGwwg7ldbs6xZlVU5%2FZ0lSs4cjOJzs7r6hSSYncX7aJ5t9xQLGfJr8HqMxlHLtH1q1g%2FolRk1UnZAreP1jISkMYf08OMc%2FwukWMMNuW6b0GOqUB8AMEayUF8ucPy9ugWpzSgHtHlQ6jB%2Bui6jqS2q7UEG6kDcdcG9EkduqRIBbFnAzABX0C9gUecrs5zt3QyJVs7aBvMP7LVOcPH9GfB%2BZP2mjwzRTKC%2BuG%2BQ9l9oW66FLZ1xX8tBZZeckwOvhBA7TD3r5N5BMsxF9HABS8SPuQPTx5WPOu4VUfU4TItCmhzy5EPi0eHFWqs1eK0tNiYvNbprDqLRgb&X-Amz-Signature=83763e224f925ebb1ef60766bda3bc54d119fc9ef6d521736b2dba875566135b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBANTR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkR%2FISibKV474wGSRZH296N0yc0qfQkHVAbVgk%2Fx%2FILAiEAzS4%2B8QDcMGs6re22mCULHrNKKpVQtGJyRUPDtNCnSX8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BM15obbuG2%2FcbnqCrcA0VJK2e8Gev3pKcsza46OGN1Us3EeoYaDsUxIDSNWhUUZKwP6H%2BCdXa5yPyB4iESl0ZC6VIGS%2FrRdnKfMJKI9rIjWt2%2Fmsqu0S1RpFS8qijf%2FnWJ12SQbkAT%2Fg6ZMDru1Y6lEGdiavM53f5%2BzyFbi%2FEJo4ylrcVB4CrpAYMV%2B0vkHN98CDZ3kD%2F9ZY4NgE9GIfAtzT8vKqUkE3JBXCSTjNmscOfUsV3lPetBVwkyZ7D5yBoGME8K33pwRU1C2ReuEgWAgdMvITnhy0xn5gQMbI93i1wvIRXryc%2B%2FlcfEXIFI%2BZ9PPwm%2BP0PfYoHyyYQwNyB%2FFuyOvpBG9b%2Ft77QD7ZP3ovMsgUd452As2Cl5f0ppnaC9wP5Z3BNgeZa9tIrFl4r%2BereHK3D0jxKjhlvRhGj4Od7lwZvYG%2BSiAu5a6YrXhvnZ%2BN3fxo8KayMP7AFaqe8V2jUg3TEfAHTBEAFvwlrspxwW4dSn0YuSTTc%2FCgm04NfJQpEeE8C81q6o%2BHHcSFGIinZwNU%2Fd4OMKELw1wvmArDGwwg7ldbs6xZlVU5%2FZ0lSs4cjOJzs7r6hSSYncX7aJ5t9xQLGfJr8HqMxlHLtH1q1g%2FolRk1UnZAreP1jISkMYf08OMc%2FwukWMMNuW6b0GOqUB8AMEayUF8ucPy9ugWpzSgHtHlQ6jB%2Bui6jqS2q7UEG6kDcdcG9EkduqRIBbFnAzABX0C9gUecrs5zt3QyJVs7aBvMP7LVOcPH9GfB%2BZP2mjwzRTKC%2BuG%2BQ9l9oW66FLZ1xX8tBZZeckwOvhBA7TD3r5N5BMsxF9HABS8SPuQPTx5WPOu4VUfU4TItCmhzy5EPi0eHFWqs1eK0tNiYvNbprDqLRgb&X-Amz-Signature=e53052069032d5d15c50982c7e38ce852d2e8d05153f273f6ad28be4fd5f9b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBANTR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkR%2FISibKV474wGSRZH296N0yc0qfQkHVAbVgk%2Fx%2FILAiEAzS4%2B8QDcMGs6re22mCULHrNKKpVQtGJyRUPDtNCnSX8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BM15obbuG2%2FcbnqCrcA0VJK2e8Gev3pKcsza46OGN1Us3EeoYaDsUxIDSNWhUUZKwP6H%2BCdXa5yPyB4iESl0ZC6VIGS%2FrRdnKfMJKI9rIjWt2%2Fmsqu0S1RpFS8qijf%2FnWJ12SQbkAT%2Fg6ZMDru1Y6lEGdiavM53f5%2BzyFbi%2FEJo4ylrcVB4CrpAYMV%2B0vkHN98CDZ3kD%2F9ZY4NgE9GIfAtzT8vKqUkE3JBXCSTjNmscOfUsV3lPetBVwkyZ7D5yBoGME8K33pwRU1C2ReuEgWAgdMvITnhy0xn5gQMbI93i1wvIRXryc%2B%2FlcfEXIFI%2BZ9PPwm%2BP0PfYoHyyYQwNyB%2FFuyOvpBG9b%2Ft77QD7ZP3ovMsgUd452As2Cl5f0ppnaC9wP5Z3BNgeZa9tIrFl4r%2BereHK3D0jxKjhlvRhGj4Od7lwZvYG%2BSiAu5a6YrXhvnZ%2BN3fxo8KayMP7AFaqe8V2jUg3TEfAHTBEAFvwlrspxwW4dSn0YuSTTc%2FCgm04NfJQpEeE8C81q6o%2BHHcSFGIinZwNU%2Fd4OMKELw1wvmArDGwwg7ldbs6xZlVU5%2FZ0lSs4cjOJzs7r6hSSYncX7aJ5t9xQLGfJr8HqMxlHLtH1q1g%2FolRk1UnZAreP1jISkMYf08OMc%2FwukWMMNuW6b0GOqUB8AMEayUF8ucPy9ugWpzSgHtHlQ6jB%2Bui6jqS2q7UEG6kDcdcG9EkduqRIBbFnAzABX0C9gUecrs5zt3QyJVs7aBvMP7LVOcPH9GfB%2BZP2mjwzRTKC%2BuG%2BQ9l9oW66FLZ1xX8tBZZeckwOvhBA7TD3r5N5BMsxF9HABS8SPuQPTx5WPOu4VUfU4TItCmhzy5EPi0eHFWqs1eK0tNiYvNbprDqLRgb&X-Amz-Signature=10d5d843a08f1bfa2bb7ed00bb929d65033d178b0df170b9f4472cc3e558c7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
