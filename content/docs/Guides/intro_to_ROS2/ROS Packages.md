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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDNJWYT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqy6lJsPqaCyXNqz1mLPGaV2BXtau%2BvbJj6TpZnqkIBwIgTNU3EPsOwhu8pUDG4DbNEpstESZiNiZuC9Q5PqqtapEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8ZjJIjUlzocgkxircA4W4bHsHs6FUw3UdwoVgPIQRKw74qBeVpi7jvTSMB%2F8VWI%2FNu%2BV4VG6OJopowYXlbNvXA30tTZjSnpdLfggloIY5Zr%2F4tkiLIRM7qqtz774q6eVVZv3y7TQnTYS0qFuRX4txpIgjktisjQxtjbcdVhjbd%2FQxmT%2BdMg98jW8U4X%2F5K0l9udvyjGrP3UI7qsxyUegSqKDCHDzwHEwS%2FI8lzmmBgIMvHzhOX6UckoC9r4%2BGyMx3JJJ1YBBZYcq5VDjwlqYw8BlWt0mB5WBqHTVrZvGRYq7GUgwFiuj%2FO33g0YN7rrchscjQ3URYCEA7cCDt6qKWr9S7NFurpIZv18S%2BXyWbpXOIum670e1yhdO%2FAEp5t7nM6IxYxnv%2Bd5OLWtsmoXq9FMCJMGyvt3L9lX9zyfAmX7NvJFnYndwPxkxvS0rFnNS6bmWa6e4RfSI%2BaApWeLGkEX8D3Y65uINWZ47z2wQPHFp8Zxu8IKL95jTMqJD0u7pSva8%2BojbRiviDvLq9599Hkbup%2FLFY%2BS0BUDWzr93L0gFVaV212%2FfjD%2FmmA%2BlAj69rpTAWc9C3kAwtLiQHpkw7tMqnERhTNBCy1bng41a3yHQfAF%2Fp1Sfe4UcmWZFXcue2oLKkp591%2BhkbMLPUmcIGOqUBJP5u%2B0WbKa8O5lZUmDEoGae%2F6ZR4gGHJaaBRL%2B88hL3TJVCRJSORuIVrum3kYABpUkqSUlacg7hTxDILT5M9%2FNbjgeBgD05ObJadq5%2Bo3BAhc%2Bfuiothg2rmQEoA6zIHX5BXEZ7NOvZgTjaGu%2BS71J6UFtg5dW4SkH6ZqHpdWVpjC3USv6xKAefIcbBmiWB5k1iQyacv9YE0RlO6WGIQci%2FgaUrR&X-Amz-Signature=9760479e6dc2c939790b2881a1f8cfd7182fc3f71dd20028897ea29e1fd81055&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDNJWYT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqy6lJsPqaCyXNqz1mLPGaV2BXtau%2BvbJj6TpZnqkIBwIgTNU3EPsOwhu8pUDG4DbNEpstESZiNiZuC9Q5PqqtapEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8ZjJIjUlzocgkxircA4W4bHsHs6FUw3UdwoVgPIQRKw74qBeVpi7jvTSMB%2F8VWI%2FNu%2BV4VG6OJopowYXlbNvXA30tTZjSnpdLfggloIY5Zr%2F4tkiLIRM7qqtz774q6eVVZv3y7TQnTYS0qFuRX4txpIgjktisjQxtjbcdVhjbd%2FQxmT%2BdMg98jW8U4X%2F5K0l9udvyjGrP3UI7qsxyUegSqKDCHDzwHEwS%2FI8lzmmBgIMvHzhOX6UckoC9r4%2BGyMx3JJJ1YBBZYcq5VDjwlqYw8BlWt0mB5WBqHTVrZvGRYq7GUgwFiuj%2FO33g0YN7rrchscjQ3URYCEA7cCDt6qKWr9S7NFurpIZv18S%2BXyWbpXOIum670e1yhdO%2FAEp5t7nM6IxYxnv%2Bd5OLWtsmoXq9FMCJMGyvt3L9lX9zyfAmX7NvJFnYndwPxkxvS0rFnNS6bmWa6e4RfSI%2BaApWeLGkEX8D3Y65uINWZ47z2wQPHFp8Zxu8IKL95jTMqJD0u7pSva8%2BojbRiviDvLq9599Hkbup%2FLFY%2BS0BUDWzr93L0gFVaV212%2FfjD%2FmmA%2BlAj69rpTAWc9C3kAwtLiQHpkw7tMqnERhTNBCy1bng41a3yHQfAF%2Fp1Sfe4UcmWZFXcue2oLKkp591%2BhkbMLPUmcIGOqUBJP5u%2B0WbKa8O5lZUmDEoGae%2F6ZR4gGHJaaBRL%2B88hL3TJVCRJSORuIVrum3kYABpUkqSUlacg7hTxDILT5M9%2FNbjgeBgD05ObJadq5%2Bo3BAhc%2Bfuiothg2rmQEoA6zIHX5BXEZ7NOvZgTjaGu%2BS71J6UFtg5dW4SkH6ZqHpdWVpjC3USv6xKAefIcbBmiWB5k1iQyacv9YE0RlO6WGIQci%2FgaUrR&X-Amz-Signature=d1a25f24509b1272688442180d269994677877bd88f04d3e71a663127c33fa24&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDNJWYT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqy6lJsPqaCyXNqz1mLPGaV2BXtau%2BvbJj6TpZnqkIBwIgTNU3EPsOwhu8pUDG4DbNEpstESZiNiZuC9Q5PqqtapEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8ZjJIjUlzocgkxircA4W4bHsHs6FUw3UdwoVgPIQRKw74qBeVpi7jvTSMB%2F8VWI%2FNu%2BV4VG6OJopowYXlbNvXA30tTZjSnpdLfggloIY5Zr%2F4tkiLIRM7qqtz774q6eVVZv3y7TQnTYS0qFuRX4txpIgjktisjQxtjbcdVhjbd%2FQxmT%2BdMg98jW8U4X%2F5K0l9udvyjGrP3UI7qsxyUegSqKDCHDzwHEwS%2FI8lzmmBgIMvHzhOX6UckoC9r4%2BGyMx3JJJ1YBBZYcq5VDjwlqYw8BlWt0mB5WBqHTVrZvGRYq7GUgwFiuj%2FO33g0YN7rrchscjQ3URYCEA7cCDt6qKWr9S7NFurpIZv18S%2BXyWbpXOIum670e1yhdO%2FAEp5t7nM6IxYxnv%2Bd5OLWtsmoXq9FMCJMGyvt3L9lX9zyfAmX7NvJFnYndwPxkxvS0rFnNS6bmWa6e4RfSI%2BaApWeLGkEX8D3Y65uINWZ47z2wQPHFp8Zxu8IKL95jTMqJD0u7pSva8%2BojbRiviDvLq9599Hkbup%2FLFY%2BS0BUDWzr93L0gFVaV212%2FfjD%2FmmA%2BlAj69rpTAWc9C3kAwtLiQHpkw7tMqnERhTNBCy1bng41a3yHQfAF%2Fp1Sfe4UcmWZFXcue2oLKkp591%2BhkbMLPUmcIGOqUBJP5u%2B0WbKa8O5lZUmDEoGae%2F6ZR4gGHJaaBRL%2B88hL3TJVCRJSORuIVrum3kYABpUkqSUlacg7hTxDILT5M9%2FNbjgeBgD05ObJadq5%2Bo3BAhc%2Bfuiothg2rmQEoA6zIHX5BXEZ7NOvZgTjaGu%2BS71J6UFtg5dW4SkH6ZqHpdWVpjC3USv6xKAefIcbBmiWB5k1iQyacv9YE0RlO6WGIQci%2FgaUrR&X-Amz-Signature=578ec232fc28d290a085cb044b24928c79e42231f5f2a32a92bec8f1998fbb92&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDNJWYT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqy6lJsPqaCyXNqz1mLPGaV2BXtau%2BvbJj6TpZnqkIBwIgTNU3EPsOwhu8pUDG4DbNEpstESZiNiZuC9Q5PqqtapEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8ZjJIjUlzocgkxircA4W4bHsHs6FUw3UdwoVgPIQRKw74qBeVpi7jvTSMB%2F8VWI%2FNu%2BV4VG6OJopowYXlbNvXA30tTZjSnpdLfggloIY5Zr%2F4tkiLIRM7qqtz774q6eVVZv3y7TQnTYS0qFuRX4txpIgjktisjQxtjbcdVhjbd%2FQxmT%2BdMg98jW8U4X%2F5K0l9udvyjGrP3UI7qsxyUegSqKDCHDzwHEwS%2FI8lzmmBgIMvHzhOX6UckoC9r4%2BGyMx3JJJ1YBBZYcq5VDjwlqYw8BlWt0mB5WBqHTVrZvGRYq7GUgwFiuj%2FO33g0YN7rrchscjQ3URYCEA7cCDt6qKWr9S7NFurpIZv18S%2BXyWbpXOIum670e1yhdO%2FAEp5t7nM6IxYxnv%2Bd5OLWtsmoXq9FMCJMGyvt3L9lX9zyfAmX7NvJFnYndwPxkxvS0rFnNS6bmWa6e4RfSI%2BaApWeLGkEX8D3Y65uINWZ47z2wQPHFp8Zxu8IKL95jTMqJD0u7pSva8%2BojbRiviDvLq9599Hkbup%2FLFY%2BS0BUDWzr93L0gFVaV212%2FfjD%2FmmA%2BlAj69rpTAWc9C3kAwtLiQHpkw7tMqnERhTNBCy1bng41a3yHQfAF%2Fp1Sfe4UcmWZFXcue2oLKkp591%2BhkbMLPUmcIGOqUBJP5u%2B0WbKa8O5lZUmDEoGae%2F6ZR4gGHJaaBRL%2B88hL3TJVCRJSORuIVrum3kYABpUkqSUlacg7hTxDILT5M9%2FNbjgeBgD05ObJadq5%2Bo3BAhc%2Bfuiothg2rmQEoA6zIHX5BXEZ7NOvZgTjaGu%2BS71J6UFtg5dW4SkH6ZqHpdWVpjC3USv6xKAefIcbBmiWB5k1iQyacv9YE0RlO6WGIQci%2FgaUrR&X-Amz-Signature=9d58e7095be66d82704fb6a915de7ea9ebf06286b0ed07715084ce111e05a63d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDNJWYT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqy6lJsPqaCyXNqz1mLPGaV2BXtau%2BvbJj6TpZnqkIBwIgTNU3EPsOwhu8pUDG4DbNEpstESZiNiZuC9Q5PqqtapEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8ZjJIjUlzocgkxircA4W4bHsHs6FUw3UdwoVgPIQRKw74qBeVpi7jvTSMB%2F8VWI%2FNu%2BV4VG6OJopowYXlbNvXA30tTZjSnpdLfggloIY5Zr%2F4tkiLIRM7qqtz774q6eVVZv3y7TQnTYS0qFuRX4txpIgjktisjQxtjbcdVhjbd%2FQxmT%2BdMg98jW8U4X%2F5K0l9udvyjGrP3UI7qsxyUegSqKDCHDzwHEwS%2FI8lzmmBgIMvHzhOX6UckoC9r4%2BGyMx3JJJ1YBBZYcq5VDjwlqYw8BlWt0mB5WBqHTVrZvGRYq7GUgwFiuj%2FO33g0YN7rrchscjQ3URYCEA7cCDt6qKWr9S7NFurpIZv18S%2BXyWbpXOIum670e1yhdO%2FAEp5t7nM6IxYxnv%2Bd5OLWtsmoXq9FMCJMGyvt3L9lX9zyfAmX7NvJFnYndwPxkxvS0rFnNS6bmWa6e4RfSI%2BaApWeLGkEX8D3Y65uINWZ47z2wQPHFp8Zxu8IKL95jTMqJD0u7pSva8%2BojbRiviDvLq9599Hkbup%2FLFY%2BS0BUDWzr93L0gFVaV212%2FfjD%2FmmA%2BlAj69rpTAWc9C3kAwtLiQHpkw7tMqnERhTNBCy1bng41a3yHQfAF%2Fp1Sfe4UcmWZFXcue2oLKkp591%2BhkbMLPUmcIGOqUBJP5u%2B0WbKa8O5lZUmDEoGae%2F6ZR4gGHJaaBRL%2B88hL3TJVCRJSORuIVrum3kYABpUkqSUlacg7hTxDILT5M9%2FNbjgeBgD05ObJadq5%2Bo3BAhc%2Bfuiothg2rmQEoA6zIHX5BXEZ7NOvZgTjaGu%2BS71J6UFtg5dW4SkH6ZqHpdWVpjC3USv6xKAefIcbBmiWB5k1iQyacv9YE0RlO6WGIQci%2FgaUrR&X-Amz-Signature=7e1cac703863149f4d230697fae2ac95b439df5dd47d6df30a82d900edb58fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDNJWYT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqy6lJsPqaCyXNqz1mLPGaV2BXtau%2BvbJj6TpZnqkIBwIgTNU3EPsOwhu8pUDG4DbNEpstESZiNiZuC9Q5PqqtapEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8ZjJIjUlzocgkxircA4W4bHsHs6FUw3UdwoVgPIQRKw74qBeVpi7jvTSMB%2F8VWI%2FNu%2BV4VG6OJopowYXlbNvXA30tTZjSnpdLfggloIY5Zr%2F4tkiLIRM7qqtz774q6eVVZv3y7TQnTYS0qFuRX4txpIgjktisjQxtjbcdVhjbd%2FQxmT%2BdMg98jW8U4X%2F5K0l9udvyjGrP3UI7qsxyUegSqKDCHDzwHEwS%2FI8lzmmBgIMvHzhOX6UckoC9r4%2BGyMx3JJJ1YBBZYcq5VDjwlqYw8BlWt0mB5WBqHTVrZvGRYq7GUgwFiuj%2FO33g0YN7rrchscjQ3URYCEA7cCDt6qKWr9S7NFurpIZv18S%2BXyWbpXOIum670e1yhdO%2FAEp5t7nM6IxYxnv%2Bd5OLWtsmoXq9FMCJMGyvt3L9lX9zyfAmX7NvJFnYndwPxkxvS0rFnNS6bmWa6e4RfSI%2BaApWeLGkEX8D3Y65uINWZ47z2wQPHFp8Zxu8IKL95jTMqJD0u7pSva8%2BojbRiviDvLq9599Hkbup%2FLFY%2BS0BUDWzr93L0gFVaV212%2FfjD%2FmmA%2BlAj69rpTAWc9C3kAwtLiQHpkw7tMqnERhTNBCy1bng41a3yHQfAF%2Fp1Sfe4UcmWZFXcue2oLKkp591%2BhkbMLPUmcIGOqUBJP5u%2B0WbKa8O5lZUmDEoGae%2F6ZR4gGHJaaBRL%2B88hL3TJVCRJSORuIVrum3kYABpUkqSUlacg7hTxDILT5M9%2FNbjgeBgD05ObJadq5%2Bo3BAhc%2Bfuiothg2rmQEoA6zIHX5BXEZ7NOvZgTjaGu%2BS71J6UFtg5dW4SkH6ZqHpdWVpjC3USv6xKAefIcbBmiWB5k1iQyacv9YE0RlO6WGIQci%2FgaUrR&X-Amz-Signature=d7d25b425bc2c3809b61dbe7d7959b4d01c7f0c54ebced254bb7455f32290d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDNJWYT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqy6lJsPqaCyXNqz1mLPGaV2BXtau%2BvbJj6TpZnqkIBwIgTNU3EPsOwhu8pUDG4DbNEpstESZiNiZuC9Q5PqqtapEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8ZjJIjUlzocgkxircA4W4bHsHs6FUw3UdwoVgPIQRKw74qBeVpi7jvTSMB%2F8VWI%2FNu%2BV4VG6OJopowYXlbNvXA30tTZjSnpdLfggloIY5Zr%2F4tkiLIRM7qqtz774q6eVVZv3y7TQnTYS0qFuRX4txpIgjktisjQxtjbcdVhjbd%2FQxmT%2BdMg98jW8U4X%2F5K0l9udvyjGrP3UI7qsxyUegSqKDCHDzwHEwS%2FI8lzmmBgIMvHzhOX6UckoC9r4%2BGyMx3JJJ1YBBZYcq5VDjwlqYw8BlWt0mB5WBqHTVrZvGRYq7GUgwFiuj%2FO33g0YN7rrchscjQ3URYCEA7cCDt6qKWr9S7NFurpIZv18S%2BXyWbpXOIum670e1yhdO%2FAEp5t7nM6IxYxnv%2Bd5OLWtsmoXq9FMCJMGyvt3L9lX9zyfAmX7NvJFnYndwPxkxvS0rFnNS6bmWa6e4RfSI%2BaApWeLGkEX8D3Y65uINWZ47z2wQPHFp8Zxu8IKL95jTMqJD0u7pSva8%2BojbRiviDvLq9599Hkbup%2FLFY%2BS0BUDWzr93L0gFVaV212%2FfjD%2FmmA%2BlAj69rpTAWc9C3kAwtLiQHpkw7tMqnERhTNBCy1bng41a3yHQfAF%2Fp1Sfe4UcmWZFXcue2oLKkp591%2BhkbMLPUmcIGOqUBJP5u%2B0WbKa8O5lZUmDEoGae%2F6ZR4gGHJaaBRL%2B88hL3TJVCRJSORuIVrum3kYABpUkqSUlacg7hTxDILT5M9%2FNbjgeBgD05ObJadq5%2Bo3BAhc%2Bfuiothg2rmQEoA6zIHX5BXEZ7NOvZgTjaGu%2BS71J6UFtg5dW4SkH6ZqHpdWVpjC3USv6xKAefIcbBmiWB5k1iQyacv9YE0RlO6WGIQci%2FgaUrR&X-Amz-Signature=d58b95b62b93427cc419df06a5d78ae598037841911fdd43307c8656e5b941d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
