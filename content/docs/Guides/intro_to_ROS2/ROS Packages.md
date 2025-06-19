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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXAAHMS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkH%2BvpAAYqq8kyAj%2Fn3ETsgjM8OB6UkDEToltZgLg9bAiB7xgBNVietKhPr2jj7LCEy3fPW5yuCSjKQ6PmJ89S%2FuSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8X6OAZVKBgLlpp6KtwDF8Hvsj%2BiGsOlmeI5sP4sk1JMX3v%2Be3gsTS6%2BNbZ9LhdKpzok4AlJ%2BwYApN0xeFM5lZs8gd02fyiT0BoesZIk3wGk9W4meyNyb%2B94l1BRZ7FjjB3Jk1Jz7K6SGuN7j3PgP%2BOC2EN7FGxY17Xn3MlAime3Ufb8gtxIRI%2Fvd%2FDZZJKWKcEUQ%2BLxKjNSWhdbCpMnSvqmI3NnU%2F%2Fg16iLjRgljgrSNxD%2FWUq8uirfUmjPS2b7JbDxdlRRNJh%2BA5im3Ucg2nIleyql3vBF%2Be9DOCKl9XVOkWOk7%2BIgvvELnZwHcFWaH30saR%2BFGiJQ2vLLgbr6rJNtnNV6EN6iKoIMkAHrd%2FM2tz53Ld4A0QDaHsRJc6iV9UPw%2F7%2FdmN0qb7ICO7DT6ioAf%2Brj50N8RRtrJBdxrnCMDmy%2BGQE56AHcPMpVu4fhIjn9rBpJN34tkHdnYHLeJPj692KOjyGf8t8rBIg4xBgLfTPFgrHuHhnk%2BivLLXJiGWcqOTW%2FaV9WMbsztZcHBYfCfDbNuiqL%2Ft3MK0BLZHRwBcf0pSvwRi5LlvgMAQrI8oIdz7vOmCmy2g%2BFKmvgR%2Bn%2Bz4lo%2FOxedmz71SfOid297JPF8pClQrPH0s4p2MwsVsomR%2FA%2BTjHlrLow8N7QwgY6pgFErPOqq5S4EH8PESLBDx2QFGAwJPwblIsu0Jy4yBBO4tmtCyMMlhuJfsvnFq8%2BfUVfL9NA14V2B0NzpkobIZxppAKCm%2FwGH2GkImAjb7ixhsL69w2oB39BUvKeC1or24S0fb1%2Fo7KPUiSI4AT0xzI%2FRVU7q8JcfpvKUyRtiLp4scRZ0vStZuXrBnvwIdIllcqUpukSWbp7JkRrs7uHPTlYmIxm65s1&X-Amz-Signature=38e4438ac287d2408edfe7aac23bb2da848287a27efc4002a1b689f2c8689c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXAAHMS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkH%2BvpAAYqq8kyAj%2Fn3ETsgjM8OB6UkDEToltZgLg9bAiB7xgBNVietKhPr2jj7LCEy3fPW5yuCSjKQ6PmJ89S%2FuSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8X6OAZVKBgLlpp6KtwDF8Hvsj%2BiGsOlmeI5sP4sk1JMX3v%2Be3gsTS6%2BNbZ9LhdKpzok4AlJ%2BwYApN0xeFM5lZs8gd02fyiT0BoesZIk3wGk9W4meyNyb%2B94l1BRZ7FjjB3Jk1Jz7K6SGuN7j3PgP%2BOC2EN7FGxY17Xn3MlAime3Ufb8gtxIRI%2Fvd%2FDZZJKWKcEUQ%2BLxKjNSWhdbCpMnSvqmI3NnU%2F%2Fg16iLjRgljgrSNxD%2FWUq8uirfUmjPS2b7JbDxdlRRNJh%2BA5im3Ucg2nIleyql3vBF%2Be9DOCKl9XVOkWOk7%2BIgvvELnZwHcFWaH30saR%2BFGiJQ2vLLgbr6rJNtnNV6EN6iKoIMkAHrd%2FM2tz53Ld4A0QDaHsRJc6iV9UPw%2F7%2FdmN0qb7ICO7DT6ioAf%2Brj50N8RRtrJBdxrnCMDmy%2BGQE56AHcPMpVu4fhIjn9rBpJN34tkHdnYHLeJPj692KOjyGf8t8rBIg4xBgLfTPFgrHuHhnk%2BivLLXJiGWcqOTW%2FaV9WMbsztZcHBYfCfDbNuiqL%2Ft3MK0BLZHRwBcf0pSvwRi5LlvgMAQrI8oIdz7vOmCmy2g%2BFKmvgR%2Bn%2Bz4lo%2FOxedmz71SfOid297JPF8pClQrPH0s4p2MwsVsomR%2FA%2BTjHlrLow8N7QwgY6pgFErPOqq5S4EH8PESLBDx2QFGAwJPwblIsu0Jy4yBBO4tmtCyMMlhuJfsvnFq8%2BfUVfL9NA14V2B0NzpkobIZxppAKCm%2FwGH2GkImAjb7ixhsL69w2oB39BUvKeC1or24S0fb1%2Fo7KPUiSI4AT0xzI%2FRVU7q8JcfpvKUyRtiLp4scRZ0vStZuXrBnvwIdIllcqUpukSWbp7JkRrs7uHPTlYmIxm65s1&X-Amz-Signature=89cb7206b1ce0a1351ba66e3582acbfb80cf48af5aa18cb8ae8edeeccecc5a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXAAHMS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkH%2BvpAAYqq8kyAj%2Fn3ETsgjM8OB6UkDEToltZgLg9bAiB7xgBNVietKhPr2jj7LCEy3fPW5yuCSjKQ6PmJ89S%2FuSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8X6OAZVKBgLlpp6KtwDF8Hvsj%2BiGsOlmeI5sP4sk1JMX3v%2Be3gsTS6%2BNbZ9LhdKpzok4AlJ%2BwYApN0xeFM5lZs8gd02fyiT0BoesZIk3wGk9W4meyNyb%2B94l1BRZ7FjjB3Jk1Jz7K6SGuN7j3PgP%2BOC2EN7FGxY17Xn3MlAime3Ufb8gtxIRI%2Fvd%2FDZZJKWKcEUQ%2BLxKjNSWhdbCpMnSvqmI3NnU%2F%2Fg16iLjRgljgrSNxD%2FWUq8uirfUmjPS2b7JbDxdlRRNJh%2BA5im3Ucg2nIleyql3vBF%2Be9DOCKl9XVOkWOk7%2BIgvvELnZwHcFWaH30saR%2BFGiJQ2vLLgbr6rJNtnNV6EN6iKoIMkAHrd%2FM2tz53Ld4A0QDaHsRJc6iV9UPw%2F7%2FdmN0qb7ICO7DT6ioAf%2Brj50N8RRtrJBdxrnCMDmy%2BGQE56AHcPMpVu4fhIjn9rBpJN34tkHdnYHLeJPj692KOjyGf8t8rBIg4xBgLfTPFgrHuHhnk%2BivLLXJiGWcqOTW%2FaV9WMbsztZcHBYfCfDbNuiqL%2Ft3MK0BLZHRwBcf0pSvwRi5LlvgMAQrI8oIdz7vOmCmy2g%2BFKmvgR%2Bn%2Bz4lo%2FOxedmz71SfOid297JPF8pClQrPH0s4p2MwsVsomR%2FA%2BTjHlrLow8N7QwgY6pgFErPOqq5S4EH8PESLBDx2QFGAwJPwblIsu0Jy4yBBO4tmtCyMMlhuJfsvnFq8%2BfUVfL9NA14V2B0NzpkobIZxppAKCm%2FwGH2GkImAjb7ixhsL69w2oB39BUvKeC1or24S0fb1%2Fo7KPUiSI4AT0xzI%2FRVU7q8JcfpvKUyRtiLp4scRZ0vStZuXrBnvwIdIllcqUpukSWbp7JkRrs7uHPTlYmIxm65s1&X-Amz-Signature=55add4bbc8f63462b39d5d7292c1e894d9520a0700e95fb1b17c32f1ce1404c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXAAHMS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkH%2BvpAAYqq8kyAj%2Fn3ETsgjM8OB6UkDEToltZgLg9bAiB7xgBNVietKhPr2jj7LCEy3fPW5yuCSjKQ6PmJ89S%2FuSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8X6OAZVKBgLlpp6KtwDF8Hvsj%2BiGsOlmeI5sP4sk1JMX3v%2Be3gsTS6%2BNbZ9LhdKpzok4AlJ%2BwYApN0xeFM5lZs8gd02fyiT0BoesZIk3wGk9W4meyNyb%2B94l1BRZ7FjjB3Jk1Jz7K6SGuN7j3PgP%2BOC2EN7FGxY17Xn3MlAime3Ufb8gtxIRI%2Fvd%2FDZZJKWKcEUQ%2BLxKjNSWhdbCpMnSvqmI3NnU%2F%2Fg16iLjRgljgrSNxD%2FWUq8uirfUmjPS2b7JbDxdlRRNJh%2BA5im3Ucg2nIleyql3vBF%2Be9DOCKl9XVOkWOk7%2BIgvvELnZwHcFWaH30saR%2BFGiJQ2vLLgbr6rJNtnNV6EN6iKoIMkAHrd%2FM2tz53Ld4A0QDaHsRJc6iV9UPw%2F7%2FdmN0qb7ICO7DT6ioAf%2Brj50N8RRtrJBdxrnCMDmy%2BGQE56AHcPMpVu4fhIjn9rBpJN34tkHdnYHLeJPj692KOjyGf8t8rBIg4xBgLfTPFgrHuHhnk%2BivLLXJiGWcqOTW%2FaV9WMbsztZcHBYfCfDbNuiqL%2Ft3MK0BLZHRwBcf0pSvwRi5LlvgMAQrI8oIdz7vOmCmy2g%2BFKmvgR%2Bn%2Bz4lo%2FOxedmz71SfOid297JPF8pClQrPH0s4p2MwsVsomR%2FA%2BTjHlrLow8N7QwgY6pgFErPOqq5S4EH8PESLBDx2QFGAwJPwblIsu0Jy4yBBO4tmtCyMMlhuJfsvnFq8%2BfUVfL9NA14V2B0NzpkobIZxppAKCm%2FwGH2GkImAjb7ixhsL69w2oB39BUvKeC1or24S0fb1%2Fo7KPUiSI4AT0xzI%2FRVU7q8JcfpvKUyRtiLp4scRZ0vStZuXrBnvwIdIllcqUpukSWbp7JkRrs7uHPTlYmIxm65s1&X-Amz-Signature=a1907f14493433f74ada84f7948d4172654e6d3cafb86198c358a5aaa4baf975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXAAHMS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkH%2BvpAAYqq8kyAj%2Fn3ETsgjM8OB6UkDEToltZgLg9bAiB7xgBNVietKhPr2jj7LCEy3fPW5yuCSjKQ6PmJ89S%2FuSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8X6OAZVKBgLlpp6KtwDF8Hvsj%2BiGsOlmeI5sP4sk1JMX3v%2Be3gsTS6%2BNbZ9LhdKpzok4AlJ%2BwYApN0xeFM5lZs8gd02fyiT0BoesZIk3wGk9W4meyNyb%2B94l1BRZ7FjjB3Jk1Jz7K6SGuN7j3PgP%2BOC2EN7FGxY17Xn3MlAime3Ufb8gtxIRI%2Fvd%2FDZZJKWKcEUQ%2BLxKjNSWhdbCpMnSvqmI3NnU%2F%2Fg16iLjRgljgrSNxD%2FWUq8uirfUmjPS2b7JbDxdlRRNJh%2BA5im3Ucg2nIleyql3vBF%2Be9DOCKl9XVOkWOk7%2BIgvvELnZwHcFWaH30saR%2BFGiJQ2vLLgbr6rJNtnNV6EN6iKoIMkAHrd%2FM2tz53Ld4A0QDaHsRJc6iV9UPw%2F7%2FdmN0qb7ICO7DT6ioAf%2Brj50N8RRtrJBdxrnCMDmy%2BGQE56AHcPMpVu4fhIjn9rBpJN34tkHdnYHLeJPj692KOjyGf8t8rBIg4xBgLfTPFgrHuHhnk%2BivLLXJiGWcqOTW%2FaV9WMbsztZcHBYfCfDbNuiqL%2Ft3MK0BLZHRwBcf0pSvwRi5LlvgMAQrI8oIdz7vOmCmy2g%2BFKmvgR%2Bn%2Bz4lo%2FOxedmz71SfOid297JPF8pClQrPH0s4p2MwsVsomR%2FA%2BTjHlrLow8N7QwgY6pgFErPOqq5S4EH8PESLBDx2QFGAwJPwblIsu0Jy4yBBO4tmtCyMMlhuJfsvnFq8%2BfUVfL9NA14V2B0NzpkobIZxppAKCm%2FwGH2GkImAjb7ixhsL69w2oB39BUvKeC1or24S0fb1%2Fo7KPUiSI4AT0xzI%2FRVU7q8JcfpvKUyRtiLp4scRZ0vStZuXrBnvwIdIllcqUpukSWbp7JkRrs7uHPTlYmIxm65s1&X-Amz-Signature=d1d71a2688d67cc7d0dc0b7b8c28d2ae087cd546fa322de63f3cb6b6f1927460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXAAHMS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkH%2BvpAAYqq8kyAj%2Fn3ETsgjM8OB6UkDEToltZgLg9bAiB7xgBNVietKhPr2jj7LCEy3fPW5yuCSjKQ6PmJ89S%2FuSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8X6OAZVKBgLlpp6KtwDF8Hvsj%2BiGsOlmeI5sP4sk1JMX3v%2Be3gsTS6%2BNbZ9LhdKpzok4AlJ%2BwYApN0xeFM5lZs8gd02fyiT0BoesZIk3wGk9W4meyNyb%2B94l1BRZ7FjjB3Jk1Jz7K6SGuN7j3PgP%2BOC2EN7FGxY17Xn3MlAime3Ufb8gtxIRI%2Fvd%2FDZZJKWKcEUQ%2BLxKjNSWhdbCpMnSvqmI3NnU%2F%2Fg16iLjRgljgrSNxD%2FWUq8uirfUmjPS2b7JbDxdlRRNJh%2BA5im3Ucg2nIleyql3vBF%2Be9DOCKl9XVOkWOk7%2BIgvvELnZwHcFWaH30saR%2BFGiJQ2vLLgbr6rJNtnNV6EN6iKoIMkAHrd%2FM2tz53Ld4A0QDaHsRJc6iV9UPw%2F7%2FdmN0qb7ICO7DT6ioAf%2Brj50N8RRtrJBdxrnCMDmy%2BGQE56AHcPMpVu4fhIjn9rBpJN34tkHdnYHLeJPj692KOjyGf8t8rBIg4xBgLfTPFgrHuHhnk%2BivLLXJiGWcqOTW%2FaV9WMbsztZcHBYfCfDbNuiqL%2Ft3MK0BLZHRwBcf0pSvwRi5LlvgMAQrI8oIdz7vOmCmy2g%2BFKmvgR%2Bn%2Bz4lo%2FOxedmz71SfOid297JPF8pClQrPH0s4p2MwsVsomR%2FA%2BTjHlrLow8N7QwgY6pgFErPOqq5S4EH8PESLBDx2QFGAwJPwblIsu0Jy4yBBO4tmtCyMMlhuJfsvnFq8%2BfUVfL9NA14V2B0NzpkobIZxppAKCm%2FwGH2GkImAjb7ixhsL69w2oB39BUvKeC1or24S0fb1%2Fo7KPUiSI4AT0xzI%2FRVU7q8JcfpvKUyRtiLp4scRZ0vStZuXrBnvwIdIllcqUpukSWbp7JkRrs7uHPTlYmIxm65s1&X-Amz-Signature=7106a8b47d51eb305520fbe11510e24f21858c936efdd0f86f33dc6702d1767a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXAAHMS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkH%2BvpAAYqq8kyAj%2Fn3ETsgjM8OB6UkDEToltZgLg9bAiB7xgBNVietKhPr2jj7LCEy3fPW5yuCSjKQ6PmJ89S%2FuSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8X6OAZVKBgLlpp6KtwDF8Hvsj%2BiGsOlmeI5sP4sk1JMX3v%2Be3gsTS6%2BNbZ9LhdKpzok4AlJ%2BwYApN0xeFM5lZs8gd02fyiT0BoesZIk3wGk9W4meyNyb%2B94l1BRZ7FjjB3Jk1Jz7K6SGuN7j3PgP%2BOC2EN7FGxY17Xn3MlAime3Ufb8gtxIRI%2Fvd%2FDZZJKWKcEUQ%2BLxKjNSWhdbCpMnSvqmI3NnU%2F%2Fg16iLjRgljgrSNxD%2FWUq8uirfUmjPS2b7JbDxdlRRNJh%2BA5im3Ucg2nIleyql3vBF%2Be9DOCKl9XVOkWOk7%2BIgvvELnZwHcFWaH30saR%2BFGiJQ2vLLgbr6rJNtnNV6EN6iKoIMkAHrd%2FM2tz53Ld4A0QDaHsRJc6iV9UPw%2F7%2FdmN0qb7ICO7DT6ioAf%2Brj50N8RRtrJBdxrnCMDmy%2BGQE56AHcPMpVu4fhIjn9rBpJN34tkHdnYHLeJPj692KOjyGf8t8rBIg4xBgLfTPFgrHuHhnk%2BivLLXJiGWcqOTW%2FaV9WMbsztZcHBYfCfDbNuiqL%2Ft3MK0BLZHRwBcf0pSvwRi5LlvgMAQrI8oIdz7vOmCmy2g%2BFKmvgR%2Bn%2Bz4lo%2FOxedmz71SfOid297JPF8pClQrPH0s4p2MwsVsomR%2FA%2BTjHlrLow8N7QwgY6pgFErPOqq5S4EH8PESLBDx2QFGAwJPwblIsu0Jy4yBBO4tmtCyMMlhuJfsvnFq8%2BfUVfL9NA14V2B0NzpkobIZxppAKCm%2FwGH2GkImAjb7ixhsL69w2oB39BUvKeC1or24S0fb1%2Fo7KPUiSI4AT0xzI%2FRVU7q8JcfpvKUyRtiLp4scRZ0vStZuXrBnvwIdIllcqUpukSWbp7JkRrs7uHPTlYmIxm65s1&X-Amz-Signature=d1d236644c48f13f8d77c9d27d94ed977936362b7e647ac356379483e1b9e27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
