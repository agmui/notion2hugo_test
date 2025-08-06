---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ42FQI5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIArdIyTSqIqJVs3rkK2l%2FBponpUsRBtVbDAsvwMpFdxtAiBpKEEaLDfYJc1yhHLb23YD%2BAN4YV7P8Qp3LNPRXC0cTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjpmYAzXTHQRxX6U8KtwD87lYonVQVl7wTdepoDrymVsze6Zp%2FyDXQAvZ4SesroxYvv5XsD4WoHDCCrnF8gpW7UPp4SsUHmRXXTd%2BdncsLC6mX3Gs87kFosNg7wuNxP8WuYGKgSDK1Vcx9eWi4lKzLkV%2B%2BQerzf%2Fc0cVaFoLN%2FCjJFZ7%2BpQsSw1RWTyEpoxF%2BcfqUm%2B%2BeXXyJFRwNM%2FM9NsaE4CUB8LEb0u9KXHmbl8Ys62Z7re3C25tWJPRaHn2zieLZ3TC5VUKEDOL6EPQWdTaOK%2FNYD0XLp96lAJohydGamtc0F9VMf8C7jHXtMy8S%2BFu8itGjJKa0G6NKmi7ysWhKq%2FzrYkZpbC%2BB8996d2mL4Lc4rt4sILR2JRAmzdURPpW9giC8oGVWKhsLIu4tcL15N6tSMXoQcqbVRpGZ%2BwnVTUiqd1FvlIZ3X0hcMZu5Fo6pf2F3I772xjrYxNOtWLT4OW8TTsulsvOMyaO2TUM6nG2UYbVQFioKuK1%2BSoU5hjVFwyvF1tg36sok2p9fTcjf%2B%2F22b4GJ%2BhOmv4anaYSBAE57SQ6wfvWhpVTKTftgadcWnBL0jgXYtzlT%2BtlUHeqnRzppmjVGpVlV186oC4KQkHKEfrC%2FeCLFTmZwWQnqnF8q9xxS9vU%2FAaUwk5jMxAY6pgFzy%2FivrksjS%2BTxsVlI0rYhoA74fQvK82EyajAkLdOPlNgHPzku6Xcr4JPAdhXF4ariUYMekMujDanXw4yGEzutdG00ad47dENOmpwcE8tXLc5w1EY6LTurtQvdk%2FvjEpIasQOgflWWgQkSzZPo4MwZpXnV6lssVazwPUzOndjBNaTuBsqcyb91a79sqdXf0c5DAAnhjLU8M6hGxVhJeqJNVnhZiR%2FQ&X-Amz-Signature=58187d80921337246e1aeb41c2bc7d80935432c291b365b83b50b3c9e02b6a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ42FQI5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIArdIyTSqIqJVs3rkK2l%2FBponpUsRBtVbDAsvwMpFdxtAiBpKEEaLDfYJc1yhHLb23YD%2BAN4YV7P8Qp3LNPRXC0cTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjpmYAzXTHQRxX6U8KtwD87lYonVQVl7wTdepoDrymVsze6Zp%2FyDXQAvZ4SesroxYvv5XsD4WoHDCCrnF8gpW7UPp4SsUHmRXXTd%2BdncsLC6mX3Gs87kFosNg7wuNxP8WuYGKgSDK1Vcx9eWi4lKzLkV%2B%2BQerzf%2Fc0cVaFoLN%2FCjJFZ7%2BpQsSw1RWTyEpoxF%2BcfqUm%2B%2BeXXyJFRwNM%2FM9NsaE4CUB8LEb0u9KXHmbl8Ys62Z7re3C25tWJPRaHn2zieLZ3TC5VUKEDOL6EPQWdTaOK%2FNYD0XLp96lAJohydGamtc0F9VMf8C7jHXtMy8S%2BFu8itGjJKa0G6NKmi7ysWhKq%2FzrYkZpbC%2BB8996d2mL4Lc4rt4sILR2JRAmzdURPpW9giC8oGVWKhsLIu4tcL15N6tSMXoQcqbVRpGZ%2BwnVTUiqd1FvlIZ3X0hcMZu5Fo6pf2F3I772xjrYxNOtWLT4OW8TTsulsvOMyaO2TUM6nG2UYbVQFioKuK1%2BSoU5hjVFwyvF1tg36sok2p9fTcjf%2B%2F22b4GJ%2BhOmv4anaYSBAE57SQ6wfvWhpVTKTftgadcWnBL0jgXYtzlT%2BtlUHeqnRzppmjVGpVlV186oC4KQkHKEfrC%2FeCLFTmZwWQnqnF8q9xxS9vU%2FAaUwk5jMxAY6pgFzy%2FivrksjS%2BTxsVlI0rYhoA74fQvK82EyajAkLdOPlNgHPzku6Xcr4JPAdhXF4ariUYMekMujDanXw4yGEzutdG00ad47dENOmpwcE8tXLc5w1EY6LTurtQvdk%2FvjEpIasQOgflWWgQkSzZPo4MwZpXnV6lssVazwPUzOndjBNaTuBsqcyb91a79sqdXf0c5DAAnhjLU8M6hGxVhJeqJNVnhZiR%2FQ&X-Amz-Signature=e285c52a6a6b0e097dfb235e8b9bdf0ff94d0881ed7adcf88e1423268d7eab6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ42FQI5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIArdIyTSqIqJVs3rkK2l%2FBponpUsRBtVbDAsvwMpFdxtAiBpKEEaLDfYJc1yhHLb23YD%2BAN4YV7P8Qp3LNPRXC0cTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjpmYAzXTHQRxX6U8KtwD87lYonVQVl7wTdepoDrymVsze6Zp%2FyDXQAvZ4SesroxYvv5XsD4WoHDCCrnF8gpW7UPp4SsUHmRXXTd%2BdncsLC6mX3Gs87kFosNg7wuNxP8WuYGKgSDK1Vcx9eWi4lKzLkV%2B%2BQerzf%2Fc0cVaFoLN%2FCjJFZ7%2BpQsSw1RWTyEpoxF%2BcfqUm%2B%2BeXXyJFRwNM%2FM9NsaE4CUB8LEb0u9KXHmbl8Ys62Z7re3C25tWJPRaHn2zieLZ3TC5VUKEDOL6EPQWdTaOK%2FNYD0XLp96lAJohydGamtc0F9VMf8C7jHXtMy8S%2BFu8itGjJKa0G6NKmi7ysWhKq%2FzrYkZpbC%2BB8996d2mL4Lc4rt4sILR2JRAmzdURPpW9giC8oGVWKhsLIu4tcL15N6tSMXoQcqbVRpGZ%2BwnVTUiqd1FvlIZ3X0hcMZu5Fo6pf2F3I772xjrYxNOtWLT4OW8TTsulsvOMyaO2TUM6nG2UYbVQFioKuK1%2BSoU5hjVFwyvF1tg36sok2p9fTcjf%2B%2F22b4GJ%2BhOmv4anaYSBAE57SQ6wfvWhpVTKTftgadcWnBL0jgXYtzlT%2BtlUHeqnRzppmjVGpVlV186oC4KQkHKEfrC%2FeCLFTmZwWQnqnF8q9xxS9vU%2FAaUwk5jMxAY6pgFzy%2FivrksjS%2BTxsVlI0rYhoA74fQvK82EyajAkLdOPlNgHPzku6Xcr4JPAdhXF4ariUYMekMujDanXw4yGEzutdG00ad47dENOmpwcE8tXLc5w1EY6LTurtQvdk%2FvjEpIasQOgflWWgQkSzZPo4MwZpXnV6lssVazwPUzOndjBNaTuBsqcyb91a79sqdXf0c5DAAnhjLU8M6hGxVhJeqJNVnhZiR%2FQ&X-Amz-Signature=e7a5ddb1630b1742cfab8fffdf8ae415b2f3099c8bffc3f0c22fbe4d7286c82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ42FQI5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIArdIyTSqIqJVs3rkK2l%2FBponpUsRBtVbDAsvwMpFdxtAiBpKEEaLDfYJc1yhHLb23YD%2BAN4YV7P8Qp3LNPRXC0cTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjpmYAzXTHQRxX6U8KtwD87lYonVQVl7wTdepoDrymVsze6Zp%2FyDXQAvZ4SesroxYvv5XsD4WoHDCCrnF8gpW7UPp4SsUHmRXXTd%2BdncsLC6mX3Gs87kFosNg7wuNxP8WuYGKgSDK1Vcx9eWi4lKzLkV%2B%2BQerzf%2Fc0cVaFoLN%2FCjJFZ7%2BpQsSw1RWTyEpoxF%2BcfqUm%2B%2BeXXyJFRwNM%2FM9NsaE4CUB8LEb0u9KXHmbl8Ys62Z7re3C25tWJPRaHn2zieLZ3TC5VUKEDOL6EPQWdTaOK%2FNYD0XLp96lAJohydGamtc0F9VMf8C7jHXtMy8S%2BFu8itGjJKa0G6NKmi7ysWhKq%2FzrYkZpbC%2BB8996d2mL4Lc4rt4sILR2JRAmzdURPpW9giC8oGVWKhsLIu4tcL15N6tSMXoQcqbVRpGZ%2BwnVTUiqd1FvlIZ3X0hcMZu5Fo6pf2F3I772xjrYxNOtWLT4OW8TTsulsvOMyaO2TUM6nG2UYbVQFioKuK1%2BSoU5hjVFwyvF1tg36sok2p9fTcjf%2B%2F22b4GJ%2BhOmv4anaYSBAE57SQ6wfvWhpVTKTftgadcWnBL0jgXYtzlT%2BtlUHeqnRzppmjVGpVlV186oC4KQkHKEfrC%2FeCLFTmZwWQnqnF8q9xxS9vU%2FAaUwk5jMxAY6pgFzy%2FivrksjS%2BTxsVlI0rYhoA74fQvK82EyajAkLdOPlNgHPzku6Xcr4JPAdhXF4ariUYMekMujDanXw4yGEzutdG00ad47dENOmpwcE8tXLc5w1EY6LTurtQvdk%2FvjEpIasQOgflWWgQkSzZPo4MwZpXnV6lssVazwPUzOndjBNaTuBsqcyb91a79sqdXf0c5DAAnhjLU8M6hGxVhJeqJNVnhZiR%2FQ&X-Amz-Signature=1ba44def290911e92f4fca9cacb76e096c8bf3a2d0d32d483cfbfdef00325550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ42FQI5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIArdIyTSqIqJVs3rkK2l%2FBponpUsRBtVbDAsvwMpFdxtAiBpKEEaLDfYJc1yhHLb23YD%2BAN4YV7P8Qp3LNPRXC0cTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjpmYAzXTHQRxX6U8KtwD87lYonVQVl7wTdepoDrymVsze6Zp%2FyDXQAvZ4SesroxYvv5XsD4WoHDCCrnF8gpW7UPp4SsUHmRXXTd%2BdncsLC6mX3Gs87kFosNg7wuNxP8WuYGKgSDK1Vcx9eWi4lKzLkV%2B%2BQerzf%2Fc0cVaFoLN%2FCjJFZ7%2BpQsSw1RWTyEpoxF%2BcfqUm%2B%2BeXXyJFRwNM%2FM9NsaE4CUB8LEb0u9KXHmbl8Ys62Z7re3C25tWJPRaHn2zieLZ3TC5VUKEDOL6EPQWdTaOK%2FNYD0XLp96lAJohydGamtc0F9VMf8C7jHXtMy8S%2BFu8itGjJKa0G6NKmi7ysWhKq%2FzrYkZpbC%2BB8996d2mL4Lc4rt4sILR2JRAmzdURPpW9giC8oGVWKhsLIu4tcL15N6tSMXoQcqbVRpGZ%2BwnVTUiqd1FvlIZ3X0hcMZu5Fo6pf2F3I772xjrYxNOtWLT4OW8TTsulsvOMyaO2TUM6nG2UYbVQFioKuK1%2BSoU5hjVFwyvF1tg36sok2p9fTcjf%2B%2F22b4GJ%2BhOmv4anaYSBAE57SQ6wfvWhpVTKTftgadcWnBL0jgXYtzlT%2BtlUHeqnRzppmjVGpVlV186oC4KQkHKEfrC%2FeCLFTmZwWQnqnF8q9xxS9vU%2FAaUwk5jMxAY6pgFzy%2FivrksjS%2BTxsVlI0rYhoA74fQvK82EyajAkLdOPlNgHPzku6Xcr4JPAdhXF4ariUYMekMujDanXw4yGEzutdG00ad47dENOmpwcE8tXLc5w1EY6LTurtQvdk%2FvjEpIasQOgflWWgQkSzZPo4MwZpXnV6lssVazwPUzOndjBNaTuBsqcyb91a79sqdXf0c5DAAnhjLU8M6hGxVhJeqJNVnhZiR%2FQ&X-Amz-Signature=a2284933653804bf7a251a68586788ab6b1c2a8c2e44c8054ca6f3613a327066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ42FQI5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIArdIyTSqIqJVs3rkK2l%2FBponpUsRBtVbDAsvwMpFdxtAiBpKEEaLDfYJc1yhHLb23YD%2BAN4YV7P8Qp3LNPRXC0cTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjpmYAzXTHQRxX6U8KtwD87lYonVQVl7wTdepoDrymVsze6Zp%2FyDXQAvZ4SesroxYvv5XsD4WoHDCCrnF8gpW7UPp4SsUHmRXXTd%2BdncsLC6mX3Gs87kFosNg7wuNxP8WuYGKgSDK1Vcx9eWi4lKzLkV%2B%2BQerzf%2Fc0cVaFoLN%2FCjJFZ7%2BpQsSw1RWTyEpoxF%2BcfqUm%2B%2BeXXyJFRwNM%2FM9NsaE4CUB8LEb0u9KXHmbl8Ys62Z7re3C25tWJPRaHn2zieLZ3TC5VUKEDOL6EPQWdTaOK%2FNYD0XLp96lAJohydGamtc0F9VMf8C7jHXtMy8S%2BFu8itGjJKa0G6NKmi7ysWhKq%2FzrYkZpbC%2BB8996d2mL4Lc4rt4sILR2JRAmzdURPpW9giC8oGVWKhsLIu4tcL15N6tSMXoQcqbVRpGZ%2BwnVTUiqd1FvlIZ3X0hcMZu5Fo6pf2F3I772xjrYxNOtWLT4OW8TTsulsvOMyaO2TUM6nG2UYbVQFioKuK1%2BSoU5hjVFwyvF1tg36sok2p9fTcjf%2B%2F22b4GJ%2BhOmv4anaYSBAE57SQ6wfvWhpVTKTftgadcWnBL0jgXYtzlT%2BtlUHeqnRzppmjVGpVlV186oC4KQkHKEfrC%2FeCLFTmZwWQnqnF8q9xxS9vU%2FAaUwk5jMxAY6pgFzy%2FivrksjS%2BTxsVlI0rYhoA74fQvK82EyajAkLdOPlNgHPzku6Xcr4JPAdhXF4ariUYMekMujDanXw4yGEzutdG00ad47dENOmpwcE8tXLc5w1EY6LTurtQvdk%2FvjEpIasQOgflWWgQkSzZPo4MwZpXnV6lssVazwPUzOndjBNaTuBsqcyb91a79sqdXf0c5DAAnhjLU8M6hGxVhJeqJNVnhZiR%2FQ&X-Amz-Signature=c88d06c98eb7dfcc34b311ae3e49880497cd800d5e3289cbf1f89d73b684664e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ42FQI5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIArdIyTSqIqJVs3rkK2l%2FBponpUsRBtVbDAsvwMpFdxtAiBpKEEaLDfYJc1yhHLb23YD%2BAN4YV7P8Qp3LNPRXC0cTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjpmYAzXTHQRxX6U8KtwD87lYonVQVl7wTdepoDrymVsze6Zp%2FyDXQAvZ4SesroxYvv5XsD4WoHDCCrnF8gpW7UPp4SsUHmRXXTd%2BdncsLC6mX3Gs87kFosNg7wuNxP8WuYGKgSDK1Vcx9eWi4lKzLkV%2B%2BQerzf%2Fc0cVaFoLN%2FCjJFZ7%2BpQsSw1RWTyEpoxF%2BcfqUm%2B%2BeXXyJFRwNM%2FM9NsaE4CUB8LEb0u9KXHmbl8Ys62Z7re3C25tWJPRaHn2zieLZ3TC5VUKEDOL6EPQWdTaOK%2FNYD0XLp96lAJohydGamtc0F9VMf8C7jHXtMy8S%2BFu8itGjJKa0G6NKmi7ysWhKq%2FzrYkZpbC%2BB8996d2mL4Lc4rt4sILR2JRAmzdURPpW9giC8oGVWKhsLIu4tcL15N6tSMXoQcqbVRpGZ%2BwnVTUiqd1FvlIZ3X0hcMZu5Fo6pf2F3I772xjrYxNOtWLT4OW8TTsulsvOMyaO2TUM6nG2UYbVQFioKuK1%2BSoU5hjVFwyvF1tg36sok2p9fTcjf%2B%2F22b4GJ%2BhOmv4anaYSBAE57SQ6wfvWhpVTKTftgadcWnBL0jgXYtzlT%2BtlUHeqnRzppmjVGpVlV186oC4KQkHKEfrC%2FeCLFTmZwWQnqnF8q9xxS9vU%2FAaUwk5jMxAY6pgFzy%2FivrksjS%2BTxsVlI0rYhoA74fQvK82EyajAkLdOPlNgHPzku6Xcr4JPAdhXF4ariUYMekMujDanXw4yGEzutdG00ad47dENOmpwcE8tXLc5w1EY6LTurtQvdk%2FvjEpIasQOgflWWgQkSzZPo4MwZpXnV6lssVazwPUzOndjBNaTuBsqcyb91a79sqdXf0c5DAAnhjLU8M6hGxVhJeqJNVnhZiR%2FQ&X-Amz-Signature=b1d427595dece96005d0be9b3d0e45f92354758e79abb104c7bdc8ae4c673018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
