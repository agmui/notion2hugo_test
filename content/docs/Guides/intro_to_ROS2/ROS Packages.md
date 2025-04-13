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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFQHBWK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICymr3PoF9WD3Y8JnNUPlKaKxyB%2FEGD4%2B3nLQ0xKPrlUAiEA%2BUCekMjBItqPjQreIfeyfpVyWbX%2Bn9zfJs0J%2B7bRi0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BoUVhOgAeiACUb7ircA4cT1zQE48uJ7mQHcS7Dx9VmD8wjHOY4s80zjMazBmbnnFGvrnQhSybBO6xkXlwp%2FvjGtC2xCVqlGdmgDA7QmHyJmV6dtroTWKValxf3vkH3XUozzb%2FqhM7LbIOdGHeKnJZ9wLR%2BfGH3A7ZpXZzasWYJ3m9ZnXlWpzpcSgccq9xY43lqRwX1Se6jHokgQbdk3FNbfHdE4XBhw%2FkAQNiNPrRJNywAigzTqK5ESrYqLrEGeR4R2YD3QLHv1cJ7vUHcqrS7c6L%2B3FkTj3viOVsSrESihdKgPYQ7xtF3mS7cHuqqEMaFI33uu2mGbWCW%2Fkz5Okq09Iqt0j3ydDNCPvzgDvjSz0a6VUq%2FdFCoOIfxFa75IaHwiiS4S22Mw4g%2Bwl2g5xN0oqS%2BkHY4lqy36ZyP21URfXW4rtbEyTD3D9NzCsa0SspuOCjuVOvuBhKQs76tJZ0Qiz5rPiyrAE297cY8Afw0%2FuzEzBY1truYtOmv6y%2FAuDbIKeoklz39vCX%2B1OTyUhdQ3lxFeaB8qUPGH0Az5tYUkDlK9XZcPGkgFfAoYtgMSIADBcFoMEBDlMAuRe%2BrYu8bAue0mlgfibfPQ3O1lool4tHMOe0EyYn4d%2FgfF%2BS1vbOckPqd%2ByABQeVXMJO%2B7r8GOqUBwAH8ZX2EM3H4DMsPMgeQIvUtO6VzhfZ9PPjexc%2FcQ1b%2B7is9xzjIXmB0DRvPZFBr5PDPn%2BpMp8O80ThlQaL1YUv%2B06HMOuU8Cojrlev4XthLsx0I1C3ttQZypaz4h%2BBVfAdpOZ%2F7mka38cmbCudvDfPDLwuT9z1al51BrOyh0eqzJOblofz5BKBkn%2FvbFsGH%2FS%2Bu%2FX5tdmaR8RbERlGDkpWJDrle&X-Amz-Signature=1408f88224da5af9d762ccfe03c82de84e9238e9afb3638b0698cbba1ef839d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFQHBWK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICymr3PoF9WD3Y8JnNUPlKaKxyB%2FEGD4%2B3nLQ0xKPrlUAiEA%2BUCekMjBItqPjQreIfeyfpVyWbX%2Bn9zfJs0J%2B7bRi0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BoUVhOgAeiACUb7ircA4cT1zQE48uJ7mQHcS7Dx9VmD8wjHOY4s80zjMazBmbnnFGvrnQhSybBO6xkXlwp%2FvjGtC2xCVqlGdmgDA7QmHyJmV6dtroTWKValxf3vkH3XUozzb%2FqhM7LbIOdGHeKnJZ9wLR%2BfGH3A7ZpXZzasWYJ3m9ZnXlWpzpcSgccq9xY43lqRwX1Se6jHokgQbdk3FNbfHdE4XBhw%2FkAQNiNPrRJNywAigzTqK5ESrYqLrEGeR4R2YD3QLHv1cJ7vUHcqrS7c6L%2B3FkTj3viOVsSrESihdKgPYQ7xtF3mS7cHuqqEMaFI33uu2mGbWCW%2Fkz5Okq09Iqt0j3ydDNCPvzgDvjSz0a6VUq%2FdFCoOIfxFa75IaHwiiS4S22Mw4g%2Bwl2g5xN0oqS%2BkHY4lqy36ZyP21URfXW4rtbEyTD3D9NzCsa0SspuOCjuVOvuBhKQs76tJZ0Qiz5rPiyrAE297cY8Afw0%2FuzEzBY1truYtOmv6y%2FAuDbIKeoklz39vCX%2B1OTyUhdQ3lxFeaB8qUPGH0Az5tYUkDlK9XZcPGkgFfAoYtgMSIADBcFoMEBDlMAuRe%2BrYu8bAue0mlgfibfPQ3O1lool4tHMOe0EyYn4d%2FgfF%2BS1vbOckPqd%2ByABQeVXMJO%2B7r8GOqUBwAH8ZX2EM3H4DMsPMgeQIvUtO6VzhfZ9PPjexc%2FcQ1b%2B7is9xzjIXmB0DRvPZFBr5PDPn%2BpMp8O80ThlQaL1YUv%2B06HMOuU8Cojrlev4XthLsx0I1C3ttQZypaz4h%2BBVfAdpOZ%2F7mka38cmbCudvDfPDLwuT9z1al51BrOyh0eqzJOblofz5BKBkn%2FvbFsGH%2FS%2Bu%2FX5tdmaR8RbERlGDkpWJDrle&X-Amz-Signature=4ef49e6aed4a0bbd2a0c17c19d70744ce31b68e6e90aa80e6d4a1a5868b6ce68&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFQHBWK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICymr3PoF9WD3Y8JnNUPlKaKxyB%2FEGD4%2B3nLQ0xKPrlUAiEA%2BUCekMjBItqPjQreIfeyfpVyWbX%2Bn9zfJs0J%2B7bRi0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BoUVhOgAeiACUb7ircA4cT1zQE48uJ7mQHcS7Dx9VmD8wjHOY4s80zjMazBmbnnFGvrnQhSybBO6xkXlwp%2FvjGtC2xCVqlGdmgDA7QmHyJmV6dtroTWKValxf3vkH3XUozzb%2FqhM7LbIOdGHeKnJZ9wLR%2BfGH3A7ZpXZzasWYJ3m9ZnXlWpzpcSgccq9xY43lqRwX1Se6jHokgQbdk3FNbfHdE4XBhw%2FkAQNiNPrRJNywAigzTqK5ESrYqLrEGeR4R2YD3QLHv1cJ7vUHcqrS7c6L%2B3FkTj3viOVsSrESihdKgPYQ7xtF3mS7cHuqqEMaFI33uu2mGbWCW%2Fkz5Okq09Iqt0j3ydDNCPvzgDvjSz0a6VUq%2FdFCoOIfxFa75IaHwiiS4S22Mw4g%2Bwl2g5xN0oqS%2BkHY4lqy36ZyP21URfXW4rtbEyTD3D9NzCsa0SspuOCjuVOvuBhKQs76tJZ0Qiz5rPiyrAE297cY8Afw0%2FuzEzBY1truYtOmv6y%2FAuDbIKeoklz39vCX%2B1OTyUhdQ3lxFeaB8qUPGH0Az5tYUkDlK9XZcPGkgFfAoYtgMSIADBcFoMEBDlMAuRe%2BrYu8bAue0mlgfibfPQ3O1lool4tHMOe0EyYn4d%2FgfF%2BS1vbOckPqd%2ByABQeVXMJO%2B7r8GOqUBwAH8ZX2EM3H4DMsPMgeQIvUtO6VzhfZ9PPjexc%2FcQ1b%2B7is9xzjIXmB0DRvPZFBr5PDPn%2BpMp8O80ThlQaL1YUv%2B06HMOuU8Cojrlev4XthLsx0I1C3ttQZypaz4h%2BBVfAdpOZ%2F7mka38cmbCudvDfPDLwuT9z1al51BrOyh0eqzJOblofz5BKBkn%2FvbFsGH%2FS%2Bu%2FX5tdmaR8RbERlGDkpWJDrle&X-Amz-Signature=5f87823bcb0fd5273d4fa3f21108498578ff3eed71df9c80c2727c98748604f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFQHBWK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICymr3PoF9WD3Y8JnNUPlKaKxyB%2FEGD4%2B3nLQ0xKPrlUAiEA%2BUCekMjBItqPjQreIfeyfpVyWbX%2Bn9zfJs0J%2B7bRi0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BoUVhOgAeiACUb7ircA4cT1zQE48uJ7mQHcS7Dx9VmD8wjHOY4s80zjMazBmbnnFGvrnQhSybBO6xkXlwp%2FvjGtC2xCVqlGdmgDA7QmHyJmV6dtroTWKValxf3vkH3XUozzb%2FqhM7LbIOdGHeKnJZ9wLR%2BfGH3A7ZpXZzasWYJ3m9ZnXlWpzpcSgccq9xY43lqRwX1Se6jHokgQbdk3FNbfHdE4XBhw%2FkAQNiNPrRJNywAigzTqK5ESrYqLrEGeR4R2YD3QLHv1cJ7vUHcqrS7c6L%2B3FkTj3viOVsSrESihdKgPYQ7xtF3mS7cHuqqEMaFI33uu2mGbWCW%2Fkz5Okq09Iqt0j3ydDNCPvzgDvjSz0a6VUq%2FdFCoOIfxFa75IaHwiiS4S22Mw4g%2Bwl2g5xN0oqS%2BkHY4lqy36ZyP21URfXW4rtbEyTD3D9NzCsa0SspuOCjuVOvuBhKQs76tJZ0Qiz5rPiyrAE297cY8Afw0%2FuzEzBY1truYtOmv6y%2FAuDbIKeoklz39vCX%2B1OTyUhdQ3lxFeaB8qUPGH0Az5tYUkDlK9XZcPGkgFfAoYtgMSIADBcFoMEBDlMAuRe%2BrYu8bAue0mlgfibfPQ3O1lool4tHMOe0EyYn4d%2FgfF%2BS1vbOckPqd%2ByABQeVXMJO%2B7r8GOqUBwAH8ZX2EM3H4DMsPMgeQIvUtO6VzhfZ9PPjexc%2FcQ1b%2B7is9xzjIXmB0DRvPZFBr5PDPn%2BpMp8O80ThlQaL1YUv%2B06HMOuU8Cojrlev4XthLsx0I1C3ttQZypaz4h%2BBVfAdpOZ%2F7mka38cmbCudvDfPDLwuT9z1al51BrOyh0eqzJOblofz5BKBkn%2FvbFsGH%2FS%2Bu%2FX5tdmaR8RbERlGDkpWJDrle&X-Amz-Signature=09d8ff0667893c4826b480a57cca4defcccd342365f19ab16a14abb3e43fbea2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFQHBWK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICymr3PoF9WD3Y8JnNUPlKaKxyB%2FEGD4%2B3nLQ0xKPrlUAiEA%2BUCekMjBItqPjQreIfeyfpVyWbX%2Bn9zfJs0J%2B7bRi0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BoUVhOgAeiACUb7ircA4cT1zQE48uJ7mQHcS7Dx9VmD8wjHOY4s80zjMazBmbnnFGvrnQhSybBO6xkXlwp%2FvjGtC2xCVqlGdmgDA7QmHyJmV6dtroTWKValxf3vkH3XUozzb%2FqhM7LbIOdGHeKnJZ9wLR%2BfGH3A7ZpXZzasWYJ3m9ZnXlWpzpcSgccq9xY43lqRwX1Se6jHokgQbdk3FNbfHdE4XBhw%2FkAQNiNPrRJNywAigzTqK5ESrYqLrEGeR4R2YD3QLHv1cJ7vUHcqrS7c6L%2B3FkTj3viOVsSrESihdKgPYQ7xtF3mS7cHuqqEMaFI33uu2mGbWCW%2Fkz5Okq09Iqt0j3ydDNCPvzgDvjSz0a6VUq%2FdFCoOIfxFa75IaHwiiS4S22Mw4g%2Bwl2g5xN0oqS%2BkHY4lqy36ZyP21URfXW4rtbEyTD3D9NzCsa0SspuOCjuVOvuBhKQs76tJZ0Qiz5rPiyrAE297cY8Afw0%2FuzEzBY1truYtOmv6y%2FAuDbIKeoklz39vCX%2B1OTyUhdQ3lxFeaB8qUPGH0Az5tYUkDlK9XZcPGkgFfAoYtgMSIADBcFoMEBDlMAuRe%2BrYu8bAue0mlgfibfPQ3O1lool4tHMOe0EyYn4d%2FgfF%2BS1vbOckPqd%2ByABQeVXMJO%2B7r8GOqUBwAH8ZX2EM3H4DMsPMgeQIvUtO6VzhfZ9PPjexc%2FcQ1b%2B7is9xzjIXmB0DRvPZFBr5PDPn%2BpMp8O80ThlQaL1YUv%2B06HMOuU8Cojrlev4XthLsx0I1C3ttQZypaz4h%2BBVfAdpOZ%2F7mka38cmbCudvDfPDLwuT9z1al51BrOyh0eqzJOblofz5BKBkn%2FvbFsGH%2FS%2Bu%2FX5tdmaR8RbERlGDkpWJDrle&X-Amz-Signature=4d2361362a06029d26dc86bea36081b5ca5ea9f058014b1788adae02ec546009&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFQHBWK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICymr3PoF9WD3Y8JnNUPlKaKxyB%2FEGD4%2B3nLQ0xKPrlUAiEA%2BUCekMjBItqPjQreIfeyfpVyWbX%2Bn9zfJs0J%2B7bRi0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BoUVhOgAeiACUb7ircA4cT1zQE48uJ7mQHcS7Dx9VmD8wjHOY4s80zjMazBmbnnFGvrnQhSybBO6xkXlwp%2FvjGtC2xCVqlGdmgDA7QmHyJmV6dtroTWKValxf3vkH3XUozzb%2FqhM7LbIOdGHeKnJZ9wLR%2BfGH3A7ZpXZzasWYJ3m9ZnXlWpzpcSgccq9xY43lqRwX1Se6jHokgQbdk3FNbfHdE4XBhw%2FkAQNiNPrRJNywAigzTqK5ESrYqLrEGeR4R2YD3QLHv1cJ7vUHcqrS7c6L%2B3FkTj3viOVsSrESihdKgPYQ7xtF3mS7cHuqqEMaFI33uu2mGbWCW%2Fkz5Okq09Iqt0j3ydDNCPvzgDvjSz0a6VUq%2FdFCoOIfxFa75IaHwiiS4S22Mw4g%2Bwl2g5xN0oqS%2BkHY4lqy36ZyP21URfXW4rtbEyTD3D9NzCsa0SspuOCjuVOvuBhKQs76tJZ0Qiz5rPiyrAE297cY8Afw0%2FuzEzBY1truYtOmv6y%2FAuDbIKeoklz39vCX%2B1OTyUhdQ3lxFeaB8qUPGH0Az5tYUkDlK9XZcPGkgFfAoYtgMSIADBcFoMEBDlMAuRe%2BrYu8bAue0mlgfibfPQ3O1lool4tHMOe0EyYn4d%2FgfF%2BS1vbOckPqd%2ByABQeVXMJO%2B7r8GOqUBwAH8ZX2EM3H4DMsPMgeQIvUtO6VzhfZ9PPjexc%2FcQ1b%2B7is9xzjIXmB0DRvPZFBr5PDPn%2BpMp8O80ThlQaL1YUv%2B06HMOuU8Cojrlev4XthLsx0I1C3ttQZypaz4h%2BBVfAdpOZ%2F7mka38cmbCudvDfPDLwuT9z1al51BrOyh0eqzJOblofz5BKBkn%2FvbFsGH%2FS%2Bu%2FX5tdmaR8RbERlGDkpWJDrle&X-Amz-Signature=67ed3e2745e3bb7b2e5c66fd20323f11ddf11b64e430d60ae71cfbca04dfec85&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFQHBWK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICymr3PoF9WD3Y8JnNUPlKaKxyB%2FEGD4%2B3nLQ0xKPrlUAiEA%2BUCekMjBItqPjQreIfeyfpVyWbX%2Bn9zfJs0J%2B7bRi0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BoUVhOgAeiACUb7ircA4cT1zQE48uJ7mQHcS7Dx9VmD8wjHOY4s80zjMazBmbnnFGvrnQhSybBO6xkXlwp%2FvjGtC2xCVqlGdmgDA7QmHyJmV6dtroTWKValxf3vkH3XUozzb%2FqhM7LbIOdGHeKnJZ9wLR%2BfGH3A7ZpXZzasWYJ3m9ZnXlWpzpcSgccq9xY43lqRwX1Se6jHokgQbdk3FNbfHdE4XBhw%2FkAQNiNPrRJNywAigzTqK5ESrYqLrEGeR4R2YD3QLHv1cJ7vUHcqrS7c6L%2B3FkTj3viOVsSrESihdKgPYQ7xtF3mS7cHuqqEMaFI33uu2mGbWCW%2Fkz5Okq09Iqt0j3ydDNCPvzgDvjSz0a6VUq%2FdFCoOIfxFa75IaHwiiS4S22Mw4g%2Bwl2g5xN0oqS%2BkHY4lqy36ZyP21URfXW4rtbEyTD3D9NzCsa0SspuOCjuVOvuBhKQs76tJZ0Qiz5rPiyrAE297cY8Afw0%2FuzEzBY1truYtOmv6y%2FAuDbIKeoklz39vCX%2B1OTyUhdQ3lxFeaB8qUPGH0Az5tYUkDlK9XZcPGkgFfAoYtgMSIADBcFoMEBDlMAuRe%2BrYu8bAue0mlgfibfPQ3O1lool4tHMOe0EyYn4d%2FgfF%2BS1vbOckPqd%2ByABQeVXMJO%2B7r8GOqUBwAH8ZX2EM3H4DMsPMgeQIvUtO6VzhfZ9PPjexc%2FcQ1b%2B7is9xzjIXmB0DRvPZFBr5PDPn%2BpMp8O80ThlQaL1YUv%2B06HMOuU8Cojrlev4XthLsx0I1C3ttQZypaz4h%2BBVfAdpOZ%2F7mka38cmbCudvDfPDLwuT9z1al51BrOyh0eqzJOblofz5BKBkn%2FvbFsGH%2FS%2Bu%2FX5tdmaR8RbERlGDkpWJDrle&X-Amz-Signature=845a7ddf782c95817078f893df4e64d6f1812bbf93043068fd3732e6e8747500&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
