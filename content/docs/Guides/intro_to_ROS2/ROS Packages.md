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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDG4AEU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBkQ3HxSozBGO7%2FZHXObif9i90JBJjzp1%2F401%2FjTrBK7AiEAiQE549aAFcnGlDxwD1js1PXffeief8OgMSaAhc8y3eEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKFhgeyTgG9gfH6yHyrcAxzPMAkgvdlPijE%2F5%2BqNL9pnnAXSZ9c6lxSh1WNX80Gd45lmu98tE3rt4Dco0XWwaMgmEMxvsF%2BKrtEps0Xl4lzu%2FwRB2hWpYZeQqivkHOcGDslJ7XqL6EFIuq6hmxkOjbXUHSti4lK86PTY1lijbubouQ3YBagvFpUx26SElLegKPPu%2FsiUbr%2F1%2FeTv6aUngwZLTuTrTWOjaE5qs2cAWnB30J51FpEQl%2BUgERgNGkBLY8LSFkCYwc%2Fg899PapTKFql4WSpXxsdob3AnfVDGEIHPD4QWvk2OVCcS0t%2FL0eGSHS31HLHIXR3CqEzEDMH2CqfCd1rW8yesFdWuo9Be0LAbNNwmq%2BZUCltaC%2BjrbUHYmFHu8cRhMxJwZ6p4LWHv%2ByhBDQ3fH8jwIoMk%2F8iYUJsuipmD2MBOiA2v3S%2BTmhZa%2FyHo3ox%2FXufwXw2COU%2BRrB1UtNO0XYR3RNSYQLWKEUOYd0r9A7eQpUSOItkB19plVZwzd4DoQmp8Ra7Fxb4iZ0mhH9hnxdRE5Mi258TVvNhRhmwY8ps0rfL8owe%2FbaLgFhQLHV9aRFuwWcO6DeRMUXqb%2BCW2Gm1itfNCslP6a0Djl3sbvDLTPVhJdBDgm5zok4L9gYQWQ5%2BxA7roMMOgl8EGOqUBUPywm3wB89Q68SwKfs0P1sXNVEKfB0ss%2BxEriedcG7ai8v1y5plse%2FPbbv8XLubnKhVYgF6KM0UcoHyD9ZZTRwt39ytI%2B9S%2B1gP96Ae7QL1%2BfztvQeDiMcVzzhz%2FUrm0ejkWZMaFcBdXDJH4%2BwR1y479KqlIsr%2Fk%2BDaKz3SKiOxAJtDZ8wWXnkFQxlY8DUuXxcN%2Bq5E6DG1jZmJYVuR7mkBGTKUL&X-Amz-Signature=ddf4748ca3041660dea2fe3d822506e1a1e03c3ba4d348c62de2a9fbe6d975f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDG4AEU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBkQ3HxSozBGO7%2FZHXObif9i90JBJjzp1%2F401%2FjTrBK7AiEAiQE549aAFcnGlDxwD1js1PXffeief8OgMSaAhc8y3eEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKFhgeyTgG9gfH6yHyrcAxzPMAkgvdlPijE%2F5%2BqNL9pnnAXSZ9c6lxSh1WNX80Gd45lmu98tE3rt4Dco0XWwaMgmEMxvsF%2BKrtEps0Xl4lzu%2FwRB2hWpYZeQqivkHOcGDslJ7XqL6EFIuq6hmxkOjbXUHSti4lK86PTY1lijbubouQ3YBagvFpUx26SElLegKPPu%2FsiUbr%2F1%2FeTv6aUngwZLTuTrTWOjaE5qs2cAWnB30J51FpEQl%2BUgERgNGkBLY8LSFkCYwc%2Fg899PapTKFql4WSpXxsdob3AnfVDGEIHPD4QWvk2OVCcS0t%2FL0eGSHS31HLHIXR3CqEzEDMH2CqfCd1rW8yesFdWuo9Be0LAbNNwmq%2BZUCltaC%2BjrbUHYmFHu8cRhMxJwZ6p4LWHv%2ByhBDQ3fH8jwIoMk%2F8iYUJsuipmD2MBOiA2v3S%2BTmhZa%2FyHo3ox%2FXufwXw2COU%2BRrB1UtNO0XYR3RNSYQLWKEUOYd0r9A7eQpUSOItkB19plVZwzd4DoQmp8Ra7Fxb4iZ0mhH9hnxdRE5Mi258TVvNhRhmwY8ps0rfL8owe%2FbaLgFhQLHV9aRFuwWcO6DeRMUXqb%2BCW2Gm1itfNCslP6a0Djl3sbvDLTPVhJdBDgm5zok4L9gYQWQ5%2BxA7roMMOgl8EGOqUBUPywm3wB89Q68SwKfs0P1sXNVEKfB0ss%2BxEriedcG7ai8v1y5plse%2FPbbv8XLubnKhVYgF6KM0UcoHyD9ZZTRwt39ytI%2B9S%2B1gP96Ae7QL1%2BfztvQeDiMcVzzhz%2FUrm0ejkWZMaFcBdXDJH4%2BwR1y479KqlIsr%2Fk%2BDaKz3SKiOxAJtDZ8wWXnkFQxlY8DUuXxcN%2Bq5E6DG1jZmJYVuR7mkBGTKUL&X-Amz-Signature=9d9dbe1594e1a335a59c820e53929a31c4cd1a4a06399f709c6ff7e9c03528e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDG4AEU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBkQ3HxSozBGO7%2FZHXObif9i90JBJjzp1%2F401%2FjTrBK7AiEAiQE549aAFcnGlDxwD1js1PXffeief8OgMSaAhc8y3eEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKFhgeyTgG9gfH6yHyrcAxzPMAkgvdlPijE%2F5%2BqNL9pnnAXSZ9c6lxSh1WNX80Gd45lmu98tE3rt4Dco0XWwaMgmEMxvsF%2BKrtEps0Xl4lzu%2FwRB2hWpYZeQqivkHOcGDslJ7XqL6EFIuq6hmxkOjbXUHSti4lK86PTY1lijbubouQ3YBagvFpUx26SElLegKPPu%2FsiUbr%2F1%2FeTv6aUngwZLTuTrTWOjaE5qs2cAWnB30J51FpEQl%2BUgERgNGkBLY8LSFkCYwc%2Fg899PapTKFql4WSpXxsdob3AnfVDGEIHPD4QWvk2OVCcS0t%2FL0eGSHS31HLHIXR3CqEzEDMH2CqfCd1rW8yesFdWuo9Be0LAbNNwmq%2BZUCltaC%2BjrbUHYmFHu8cRhMxJwZ6p4LWHv%2ByhBDQ3fH8jwIoMk%2F8iYUJsuipmD2MBOiA2v3S%2BTmhZa%2FyHo3ox%2FXufwXw2COU%2BRrB1UtNO0XYR3RNSYQLWKEUOYd0r9A7eQpUSOItkB19plVZwzd4DoQmp8Ra7Fxb4iZ0mhH9hnxdRE5Mi258TVvNhRhmwY8ps0rfL8owe%2FbaLgFhQLHV9aRFuwWcO6DeRMUXqb%2BCW2Gm1itfNCslP6a0Djl3sbvDLTPVhJdBDgm5zok4L9gYQWQ5%2BxA7roMMOgl8EGOqUBUPywm3wB89Q68SwKfs0P1sXNVEKfB0ss%2BxEriedcG7ai8v1y5plse%2FPbbv8XLubnKhVYgF6KM0UcoHyD9ZZTRwt39ytI%2B9S%2B1gP96Ae7QL1%2BfztvQeDiMcVzzhz%2FUrm0ejkWZMaFcBdXDJH4%2BwR1y479KqlIsr%2Fk%2BDaKz3SKiOxAJtDZ8wWXnkFQxlY8DUuXxcN%2Bq5E6DG1jZmJYVuR7mkBGTKUL&X-Amz-Signature=775071985d3d567c38fd51bcfef10ce87a626b5a89ccf8307cd46683a4d987fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDG4AEU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBkQ3HxSozBGO7%2FZHXObif9i90JBJjzp1%2F401%2FjTrBK7AiEAiQE549aAFcnGlDxwD1js1PXffeief8OgMSaAhc8y3eEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKFhgeyTgG9gfH6yHyrcAxzPMAkgvdlPijE%2F5%2BqNL9pnnAXSZ9c6lxSh1WNX80Gd45lmu98tE3rt4Dco0XWwaMgmEMxvsF%2BKrtEps0Xl4lzu%2FwRB2hWpYZeQqivkHOcGDslJ7XqL6EFIuq6hmxkOjbXUHSti4lK86PTY1lijbubouQ3YBagvFpUx26SElLegKPPu%2FsiUbr%2F1%2FeTv6aUngwZLTuTrTWOjaE5qs2cAWnB30J51FpEQl%2BUgERgNGkBLY8LSFkCYwc%2Fg899PapTKFql4WSpXxsdob3AnfVDGEIHPD4QWvk2OVCcS0t%2FL0eGSHS31HLHIXR3CqEzEDMH2CqfCd1rW8yesFdWuo9Be0LAbNNwmq%2BZUCltaC%2BjrbUHYmFHu8cRhMxJwZ6p4LWHv%2ByhBDQ3fH8jwIoMk%2F8iYUJsuipmD2MBOiA2v3S%2BTmhZa%2FyHo3ox%2FXufwXw2COU%2BRrB1UtNO0XYR3RNSYQLWKEUOYd0r9A7eQpUSOItkB19plVZwzd4DoQmp8Ra7Fxb4iZ0mhH9hnxdRE5Mi258TVvNhRhmwY8ps0rfL8owe%2FbaLgFhQLHV9aRFuwWcO6DeRMUXqb%2BCW2Gm1itfNCslP6a0Djl3sbvDLTPVhJdBDgm5zok4L9gYQWQ5%2BxA7roMMOgl8EGOqUBUPywm3wB89Q68SwKfs0P1sXNVEKfB0ss%2BxEriedcG7ai8v1y5plse%2FPbbv8XLubnKhVYgF6KM0UcoHyD9ZZTRwt39ytI%2B9S%2B1gP96Ae7QL1%2BfztvQeDiMcVzzhz%2FUrm0ejkWZMaFcBdXDJH4%2BwR1y479KqlIsr%2Fk%2BDaKz3SKiOxAJtDZ8wWXnkFQxlY8DUuXxcN%2Bq5E6DG1jZmJYVuR7mkBGTKUL&X-Amz-Signature=1a52605f7c3b5f999917d1ec29a956d210cb8975d504304fb59c17f8c229106d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDG4AEU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBkQ3HxSozBGO7%2FZHXObif9i90JBJjzp1%2F401%2FjTrBK7AiEAiQE549aAFcnGlDxwD1js1PXffeief8OgMSaAhc8y3eEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKFhgeyTgG9gfH6yHyrcAxzPMAkgvdlPijE%2F5%2BqNL9pnnAXSZ9c6lxSh1WNX80Gd45lmu98tE3rt4Dco0XWwaMgmEMxvsF%2BKrtEps0Xl4lzu%2FwRB2hWpYZeQqivkHOcGDslJ7XqL6EFIuq6hmxkOjbXUHSti4lK86PTY1lijbubouQ3YBagvFpUx26SElLegKPPu%2FsiUbr%2F1%2FeTv6aUngwZLTuTrTWOjaE5qs2cAWnB30J51FpEQl%2BUgERgNGkBLY8LSFkCYwc%2Fg899PapTKFql4WSpXxsdob3AnfVDGEIHPD4QWvk2OVCcS0t%2FL0eGSHS31HLHIXR3CqEzEDMH2CqfCd1rW8yesFdWuo9Be0LAbNNwmq%2BZUCltaC%2BjrbUHYmFHu8cRhMxJwZ6p4LWHv%2ByhBDQ3fH8jwIoMk%2F8iYUJsuipmD2MBOiA2v3S%2BTmhZa%2FyHo3ox%2FXufwXw2COU%2BRrB1UtNO0XYR3RNSYQLWKEUOYd0r9A7eQpUSOItkB19plVZwzd4DoQmp8Ra7Fxb4iZ0mhH9hnxdRE5Mi258TVvNhRhmwY8ps0rfL8owe%2FbaLgFhQLHV9aRFuwWcO6DeRMUXqb%2BCW2Gm1itfNCslP6a0Djl3sbvDLTPVhJdBDgm5zok4L9gYQWQ5%2BxA7roMMOgl8EGOqUBUPywm3wB89Q68SwKfs0P1sXNVEKfB0ss%2BxEriedcG7ai8v1y5plse%2FPbbv8XLubnKhVYgF6KM0UcoHyD9ZZTRwt39ytI%2B9S%2B1gP96Ae7QL1%2BfztvQeDiMcVzzhz%2FUrm0ejkWZMaFcBdXDJH4%2BwR1y479KqlIsr%2Fk%2BDaKz3SKiOxAJtDZ8wWXnkFQxlY8DUuXxcN%2Bq5E6DG1jZmJYVuR7mkBGTKUL&X-Amz-Signature=bb7afdfb4b4f9c4bd65a0f309faa70df4c296e3811d0e42a2159043790f7293b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDG4AEU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBkQ3HxSozBGO7%2FZHXObif9i90JBJjzp1%2F401%2FjTrBK7AiEAiQE549aAFcnGlDxwD1js1PXffeief8OgMSaAhc8y3eEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKFhgeyTgG9gfH6yHyrcAxzPMAkgvdlPijE%2F5%2BqNL9pnnAXSZ9c6lxSh1WNX80Gd45lmu98tE3rt4Dco0XWwaMgmEMxvsF%2BKrtEps0Xl4lzu%2FwRB2hWpYZeQqivkHOcGDslJ7XqL6EFIuq6hmxkOjbXUHSti4lK86PTY1lijbubouQ3YBagvFpUx26SElLegKPPu%2FsiUbr%2F1%2FeTv6aUngwZLTuTrTWOjaE5qs2cAWnB30J51FpEQl%2BUgERgNGkBLY8LSFkCYwc%2Fg899PapTKFql4WSpXxsdob3AnfVDGEIHPD4QWvk2OVCcS0t%2FL0eGSHS31HLHIXR3CqEzEDMH2CqfCd1rW8yesFdWuo9Be0LAbNNwmq%2BZUCltaC%2BjrbUHYmFHu8cRhMxJwZ6p4LWHv%2ByhBDQ3fH8jwIoMk%2F8iYUJsuipmD2MBOiA2v3S%2BTmhZa%2FyHo3ox%2FXufwXw2COU%2BRrB1UtNO0XYR3RNSYQLWKEUOYd0r9A7eQpUSOItkB19plVZwzd4DoQmp8Ra7Fxb4iZ0mhH9hnxdRE5Mi258TVvNhRhmwY8ps0rfL8owe%2FbaLgFhQLHV9aRFuwWcO6DeRMUXqb%2BCW2Gm1itfNCslP6a0Djl3sbvDLTPVhJdBDgm5zok4L9gYQWQ5%2BxA7roMMOgl8EGOqUBUPywm3wB89Q68SwKfs0P1sXNVEKfB0ss%2BxEriedcG7ai8v1y5plse%2FPbbv8XLubnKhVYgF6KM0UcoHyD9ZZTRwt39ytI%2B9S%2B1gP96Ae7QL1%2BfztvQeDiMcVzzhz%2FUrm0ejkWZMaFcBdXDJH4%2BwR1y479KqlIsr%2Fk%2BDaKz3SKiOxAJtDZ8wWXnkFQxlY8DUuXxcN%2Bq5E6DG1jZmJYVuR7mkBGTKUL&X-Amz-Signature=cbf162d2e97ef1a4dcc83092c070bf465361657966ab18a59d3c335882abf98f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDG4AEU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBkQ3HxSozBGO7%2FZHXObif9i90JBJjzp1%2F401%2FjTrBK7AiEAiQE549aAFcnGlDxwD1js1PXffeief8OgMSaAhc8y3eEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKFhgeyTgG9gfH6yHyrcAxzPMAkgvdlPijE%2F5%2BqNL9pnnAXSZ9c6lxSh1WNX80Gd45lmu98tE3rt4Dco0XWwaMgmEMxvsF%2BKrtEps0Xl4lzu%2FwRB2hWpYZeQqivkHOcGDslJ7XqL6EFIuq6hmxkOjbXUHSti4lK86PTY1lijbubouQ3YBagvFpUx26SElLegKPPu%2FsiUbr%2F1%2FeTv6aUngwZLTuTrTWOjaE5qs2cAWnB30J51FpEQl%2BUgERgNGkBLY8LSFkCYwc%2Fg899PapTKFql4WSpXxsdob3AnfVDGEIHPD4QWvk2OVCcS0t%2FL0eGSHS31HLHIXR3CqEzEDMH2CqfCd1rW8yesFdWuo9Be0LAbNNwmq%2BZUCltaC%2BjrbUHYmFHu8cRhMxJwZ6p4LWHv%2ByhBDQ3fH8jwIoMk%2F8iYUJsuipmD2MBOiA2v3S%2BTmhZa%2FyHo3ox%2FXufwXw2COU%2BRrB1UtNO0XYR3RNSYQLWKEUOYd0r9A7eQpUSOItkB19plVZwzd4DoQmp8Ra7Fxb4iZ0mhH9hnxdRE5Mi258TVvNhRhmwY8ps0rfL8owe%2FbaLgFhQLHV9aRFuwWcO6DeRMUXqb%2BCW2Gm1itfNCslP6a0Djl3sbvDLTPVhJdBDgm5zok4L9gYQWQ5%2BxA7roMMOgl8EGOqUBUPywm3wB89Q68SwKfs0P1sXNVEKfB0ss%2BxEriedcG7ai8v1y5plse%2FPbbv8XLubnKhVYgF6KM0UcoHyD9ZZTRwt39ytI%2B9S%2B1gP96Ae7QL1%2BfztvQeDiMcVzzhz%2FUrm0ejkWZMaFcBdXDJH4%2BwR1y479KqlIsr%2Fk%2BDaKz3SKiOxAJtDZ8wWXnkFQxlY8DUuXxcN%2Bq5E6DG1jZmJYVuR7mkBGTKUL&X-Amz-Signature=d563fa7bb351c3c91d899b4ab75d3da9c8af299991bb7cbd88c078fe8b8afc02&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
