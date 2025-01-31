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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATGAUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5kpVmgM5uZTVsrYtAY4o%2FcGRn3TCwVQ7goft7POrXeAiEA30lDFoxunZWDCttnbA3xNRTk9V9R9K3%2BSwyhnRh31IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJ7ZroVG1%2FCVLbESrcAxD4lLBmVYq%2F%2FPnepGvM%2FmNxxfegw2cyouQ2K%2B%2BeD9CAE9j9Tb3GgRs55%2BqoUAcmlEYQKs%2BBh%2FeOhnI1d3L1wlX80LAewkF%2BNxFswBmIaOU%2FcbdictEvSBicv6CjBAUNV5O2qyR82GRd1nyUbUl6xARnvyQYTIprpCyvIzO%2FyVXd3JaRnv7xRZLKnbsuFTGEl9nHsKR8xq5nIIzDjv%2BdamnD%2F1vRqkZjhMAMDyXIApHwY0wP9t0HcKWhHSbuPFpujwiPt027nkdbWHLpM0XwSyggAAKgGXgPYRhyI8rX7GyEIRpzkQ0TsmRE76V45smu2PaftK%2F7OLFmsus7XvnX9%2FZKdNtsDUGLVUrMQaS6mM9YoADF02PBz4zoSgcrE00fbLfpAxSJkL65iu8wMJaza%2FWpaEloJy5T3s9IlhrjkBnd%2BAKDgCJsOzTzDg2dDjqoGEVeYbCDCoi4DaMXyuV6442%2B7QIRav67GwHY7lM%2BXEmB%2BoAa%2BGbf3VBalaE4komPJl4qsruc68cZdgL9yj6JrFEYUYxvx1asOHXa7DSsdV%2FPcQSTifzUrNCJ0JLP4RVNKAkYpxYRoW5vV4XEbfWHKFX9DRxKrXwbLRoe7so4WQx2mUU%2Bz9Zd2qnSEJtqMN%2F69LwGOqUBqEnKXodwRpn3RtRqRAMg1fkChJPXSd9SHskXN40Hm9wiLhtzJUmIode%2Fiovv6f0DPYHEZi73deO93PbEh1VqSta5k67jgv5hm1kF1v1Txgp6eDUjVrtVYxB5rIbpkKd0FEvt9dG%2BUFr2BgyzcnWLuchhqwQ0FF6XbjTfLZnZFHR0iD8zfbqF7jrpWYt42z2r7HVxn15iqPXAs8iEyaTFuKJsWD0P&X-Amz-Signature=137b521ded9c392d780cded53fc3febb375a6650b0625cbf882a7d8feb7150aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATGAUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5kpVmgM5uZTVsrYtAY4o%2FcGRn3TCwVQ7goft7POrXeAiEA30lDFoxunZWDCttnbA3xNRTk9V9R9K3%2BSwyhnRh31IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJ7ZroVG1%2FCVLbESrcAxD4lLBmVYq%2F%2FPnepGvM%2FmNxxfegw2cyouQ2K%2B%2BeD9CAE9j9Tb3GgRs55%2BqoUAcmlEYQKs%2BBh%2FeOhnI1d3L1wlX80LAewkF%2BNxFswBmIaOU%2FcbdictEvSBicv6CjBAUNV5O2qyR82GRd1nyUbUl6xARnvyQYTIprpCyvIzO%2FyVXd3JaRnv7xRZLKnbsuFTGEl9nHsKR8xq5nIIzDjv%2BdamnD%2F1vRqkZjhMAMDyXIApHwY0wP9t0HcKWhHSbuPFpujwiPt027nkdbWHLpM0XwSyggAAKgGXgPYRhyI8rX7GyEIRpzkQ0TsmRE76V45smu2PaftK%2F7OLFmsus7XvnX9%2FZKdNtsDUGLVUrMQaS6mM9YoADF02PBz4zoSgcrE00fbLfpAxSJkL65iu8wMJaza%2FWpaEloJy5T3s9IlhrjkBnd%2BAKDgCJsOzTzDg2dDjqoGEVeYbCDCoi4DaMXyuV6442%2B7QIRav67GwHY7lM%2BXEmB%2BoAa%2BGbf3VBalaE4komPJl4qsruc68cZdgL9yj6JrFEYUYxvx1asOHXa7DSsdV%2FPcQSTifzUrNCJ0JLP4RVNKAkYpxYRoW5vV4XEbfWHKFX9DRxKrXwbLRoe7so4WQx2mUU%2Bz9Zd2qnSEJtqMN%2F69LwGOqUBqEnKXodwRpn3RtRqRAMg1fkChJPXSd9SHskXN40Hm9wiLhtzJUmIode%2Fiovv6f0DPYHEZi73deO93PbEh1VqSta5k67jgv5hm1kF1v1Txgp6eDUjVrtVYxB5rIbpkKd0FEvt9dG%2BUFr2BgyzcnWLuchhqwQ0FF6XbjTfLZnZFHR0iD8zfbqF7jrpWYt42z2r7HVxn15iqPXAs8iEyaTFuKJsWD0P&X-Amz-Signature=58d93d0a70187f6557a6b67c6597bdb93fe552911b87f81fb36b7c36865a1b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATGAUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5kpVmgM5uZTVsrYtAY4o%2FcGRn3TCwVQ7goft7POrXeAiEA30lDFoxunZWDCttnbA3xNRTk9V9R9K3%2BSwyhnRh31IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJ7ZroVG1%2FCVLbESrcAxD4lLBmVYq%2F%2FPnepGvM%2FmNxxfegw2cyouQ2K%2B%2BeD9CAE9j9Tb3GgRs55%2BqoUAcmlEYQKs%2BBh%2FeOhnI1d3L1wlX80LAewkF%2BNxFswBmIaOU%2FcbdictEvSBicv6CjBAUNV5O2qyR82GRd1nyUbUl6xARnvyQYTIprpCyvIzO%2FyVXd3JaRnv7xRZLKnbsuFTGEl9nHsKR8xq5nIIzDjv%2BdamnD%2F1vRqkZjhMAMDyXIApHwY0wP9t0HcKWhHSbuPFpujwiPt027nkdbWHLpM0XwSyggAAKgGXgPYRhyI8rX7GyEIRpzkQ0TsmRE76V45smu2PaftK%2F7OLFmsus7XvnX9%2FZKdNtsDUGLVUrMQaS6mM9YoADF02PBz4zoSgcrE00fbLfpAxSJkL65iu8wMJaza%2FWpaEloJy5T3s9IlhrjkBnd%2BAKDgCJsOzTzDg2dDjqoGEVeYbCDCoi4DaMXyuV6442%2B7QIRav67GwHY7lM%2BXEmB%2BoAa%2BGbf3VBalaE4komPJl4qsruc68cZdgL9yj6JrFEYUYxvx1asOHXa7DSsdV%2FPcQSTifzUrNCJ0JLP4RVNKAkYpxYRoW5vV4XEbfWHKFX9DRxKrXwbLRoe7so4WQx2mUU%2Bz9Zd2qnSEJtqMN%2F69LwGOqUBqEnKXodwRpn3RtRqRAMg1fkChJPXSd9SHskXN40Hm9wiLhtzJUmIode%2Fiovv6f0DPYHEZi73deO93PbEh1VqSta5k67jgv5hm1kF1v1Txgp6eDUjVrtVYxB5rIbpkKd0FEvt9dG%2BUFr2BgyzcnWLuchhqwQ0FF6XbjTfLZnZFHR0iD8zfbqF7jrpWYt42z2r7HVxn15iqPXAs8iEyaTFuKJsWD0P&X-Amz-Signature=1d784f56249c1aa10ae4c6e5790279a267ef661e4ce1455fdbf2c86e67f7f23c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATGAUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5kpVmgM5uZTVsrYtAY4o%2FcGRn3TCwVQ7goft7POrXeAiEA30lDFoxunZWDCttnbA3xNRTk9V9R9K3%2BSwyhnRh31IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJ7ZroVG1%2FCVLbESrcAxD4lLBmVYq%2F%2FPnepGvM%2FmNxxfegw2cyouQ2K%2B%2BeD9CAE9j9Tb3GgRs55%2BqoUAcmlEYQKs%2BBh%2FeOhnI1d3L1wlX80LAewkF%2BNxFswBmIaOU%2FcbdictEvSBicv6CjBAUNV5O2qyR82GRd1nyUbUl6xARnvyQYTIprpCyvIzO%2FyVXd3JaRnv7xRZLKnbsuFTGEl9nHsKR8xq5nIIzDjv%2BdamnD%2F1vRqkZjhMAMDyXIApHwY0wP9t0HcKWhHSbuPFpujwiPt027nkdbWHLpM0XwSyggAAKgGXgPYRhyI8rX7GyEIRpzkQ0TsmRE76V45smu2PaftK%2F7OLFmsus7XvnX9%2FZKdNtsDUGLVUrMQaS6mM9YoADF02PBz4zoSgcrE00fbLfpAxSJkL65iu8wMJaza%2FWpaEloJy5T3s9IlhrjkBnd%2BAKDgCJsOzTzDg2dDjqoGEVeYbCDCoi4DaMXyuV6442%2B7QIRav67GwHY7lM%2BXEmB%2BoAa%2BGbf3VBalaE4komPJl4qsruc68cZdgL9yj6JrFEYUYxvx1asOHXa7DSsdV%2FPcQSTifzUrNCJ0JLP4RVNKAkYpxYRoW5vV4XEbfWHKFX9DRxKrXwbLRoe7so4WQx2mUU%2Bz9Zd2qnSEJtqMN%2F69LwGOqUBqEnKXodwRpn3RtRqRAMg1fkChJPXSd9SHskXN40Hm9wiLhtzJUmIode%2Fiovv6f0DPYHEZi73deO93PbEh1VqSta5k67jgv5hm1kF1v1Txgp6eDUjVrtVYxB5rIbpkKd0FEvt9dG%2BUFr2BgyzcnWLuchhqwQ0FF6XbjTfLZnZFHR0iD8zfbqF7jrpWYt42z2r7HVxn15iqPXAs8iEyaTFuKJsWD0P&X-Amz-Signature=4a0a11937ccfc2840c7b3556cab32f54d183d04a46ea867ba2407343b9624d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATGAUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5kpVmgM5uZTVsrYtAY4o%2FcGRn3TCwVQ7goft7POrXeAiEA30lDFoxunZWDCttnbA3xNRTk9V9R9K3%2BSwyhnRh31IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJ7ZroVG1%2FCVLbESrcAxD4lLBmVYq%2F%2FPnepGvM%2FmNxxfegw2cyouQ2K%2B%2BeD9CAE9j9Tb3GgRs55%2BqoUAcmlEYQKs%2BBh%2FeOhnI1d3L1wlX80LAewkF%2BNxFswBmIaOU%2FcbdictEvSBicv6CjBAUNV5O2qyR82GRd1nyUbUl6xARnvyQYTIprpCyvIzO%2FyVXd3JaRnv7xRZLKnbsuFTGEl9nHsKR8xq5nIIzDjv%2BdamnD%2F1vRqkZjhMAMDyXIApHwY0wP9t0HcKWhHSbuPFpujwiPt027nkdbWHLpM0XwSyggAAKgGXgPYRhyI8rX7GyEIRpzkQ0TsmRE76V45smu2PaftK%2F7OLFmsus7XvnX9%2FZKdNtsDUGLVUrMQaS6mM9YoADF02PBz4zoSgcrE00fbLfpAxSJkL65iu8wMJaza%2FWpaEloJy5T3s9IlhrjkBnd%2BAKDgCJsOzTzDg2dDjqoGEVeYbCDCoi4DaMXyuV6442%2B7QIRav67GwHY7lM%2BXEmB%2BoAa%2BGbf3VBalaE4komPJl4qsruc68cZdgL9yj6JrFEYUYxvx1asOHXa7DSsdV%2FPcQSTifzUrNCJ0JLP4RVNKAkYpxYRoW5vV4XEbfWHKFX9DRxKrXwbLRoe7so4WQx2mUU%2Bz9Zd2qnSEJtqMN%2F69LwGOqUBqEnKXodwRpn3RtRqRAMg1fkChJPXSd9SHskXN40Hm9wiLhtzJUmIode%2Fiovv6f0DPYHEZi73deO93PbEh1VqSta5k67jgv5hm1kF1v1Txgp6eDUjVrtVYxB5rIbpkKd0FEvt9dG%2BUFr2BgyzcnWLuchhqwQ0FF6XbjTfLZnZFHR0iD8zfbqF7jrpWYt42z2r7HVxn15iqPXAs8iEyaTFuKJsWD0P&X-Amz-Signature=0510def59f7fe290b2ae26ea4c759e0f8baffa07669507c597fdde1cea0f3c30&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATGAUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5kpVmgM5uZTVsrYtAY4o%2FcGRn3TCwVQ7goft7POrXeAiEA30lDFoxunZWDCttnbA3xNRTk9V9R9K3%2BSwyhnRh31IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJ7ZroVG1%2FCVLbESrcAxD4lLBmVYq%2F%2FPnepGvM%2FmNxxfegw2cyouQ2K%2B%2BeD9CAE9j9Tb3GgRs55%2BqoUAcmlEYQKs%2BBh%2FeOhnI1d3L1wlX80LAewkF%2BNxFswBmIaOU%2FcbdictEvSBicv6CjBAUNV5O2qyR82GRd1nyUbUl6xARnvyQYTIprpCyvIzO%2FyVXd3JaRnv7xRZLKnbsuFTGEl9nHsKR8xq5nIIzDjv%2BdamnD%2F1vRqkZjhMAMDyXIApHwY0wP9t0HcKWhHSbuPFpujwiPt027nkdbWHLpM0XwSyggAAKgGXgPYRhyI8rX7GyEIRpzkQ0TsmRE76V45smu2PaftK%2F7OLFmsus7XvnX9%2FZKdNtsDUGLVUrMQaS6mM9YoADF02PBz4zoSgcrE00fbLfpAxSJkL65iu8wMJaza%2FWpaEloJy5T3s9IlhrjkBnd%2BAKDgCJsOzTzDg2dDjqoGEVeYbCDCoi4DaMXyuV6442%2B7QIRav67GwHY7lM%2BXEmB%2BoAa%2BGbf3VBalaE4komPJl4qsruc68cZdgL9yj6JrFEYUYxvx1asOHXa7DSsdV%2FPcQSTifzUrNCJ0JLP4RVNKAkYpxYRoW5vV4XEbfWHKFX9DRxKrXwbLRoe7so4WQx2mUU%2Bz9Zd2qnSEJtqMN%2F69LwGOqUBqEnKXodwRpn3RtRqRAMg1fkChJPXSd9SHskXN40Hm9wiLhtzJUmIode%2Fiovv6f0DPYHEZi73deO93PbEh1VqSta5k67jgv5hm1kF1v1Txgp6eDUjVrtVYxB5rIbpkKd0FEvt9dG%2BUFr2BgyzcnWLuchhqwQ0FF6XbjTfLZnZFHR0iD8zfbqF7jrpWYt42z2r7HVxn15iqPXAs8iEyaTFuKJsWD0P&X-Amz-Signature=7647a4e34f959bb1312bdf96d7ea73fdb8de8ecf531968091869d112638a0954&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATGAUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5kpVmgM5uZTVsrYtAY4o%2FcGRn3TCwVQ7goft7POrXeAiEA30lDFoxunZWDCttnbA3xNRTk9V9R9K3%2BSwyhnRh31IEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJ7ZroVG1%2FCVLbESrcAxD4lLBmVYq%2F%2FPnepGvM%2FmNxxfegw2cyouQ2K%2B%2BeD9CAE9j9Tb3GgRs55%2BqoUAcmlEYQKs%2BBh%2FeOhnI1d3L1wlX80LAewkF%2BNxFswBmIaOU%2FcbdictEvSBicv6CjBAUNV5O2qyR82GRd1nyUbUl6xARnvyQYTIprpCyvIzO%2FyVXd3JaRnv7xRZLKnbsuFTGEl9nHsKR8xq5nIIzDjv%2BdamnD%2F1vRqkZjhMAMDyXIApHwY0wP9t0HcKWhHSbuPFpujwiPt027nkdbWHLpM0XwSyggAAKgGXgPYRhyI8rX7GyEIRpzkQ0TsmRE76V45smu2PaftK%2F7OLFmsus7XvnX9%2FZKdNtsDUGLVUrMQaS6mM9YoADF02PBz4zoSgcrE00fbLfpAxSJkL65iu8wMJaza%2FWpaEloJy5T3s9IlhrjkBnd%2BAKDgCJsOzTzDg2dDjqoGEVeYbCDCoi4DaMXyuV6442%2B7QIRav67GwHY7lM%2BXEmB%2BoAa%2BGbf3VBalaE4komPJl4qsruc68cZdgL9yj6JrFEYUYxvx1asOHXa7DSsdV%2FPcQSTifzUrNCJ0JLP4RVNKAkYpxYRoW5vV4XEbfWHKFX9DRxKrXwbLRoe7so4WQx2mUU%2Bz9Zd2qnSEJtqMN%2F69LwGOqUBqEnKXodwRpn3RtRqRAMg1fkChJPXSd9SHskXN40Hm9wiLhtzJUmIode%2Fiovv6f0DPYHEZi73deO93PbEh1VqSta5k67jgv5hm1kF1v1Txgp6eDUjVrtVYxB5rIbpkKd0FEvt9dG%2BUFr2BgyzcnWLuchhqwQ0FF6XbjTfLZnZFHR0iD8zfbqF7jrpWYt42z2r7HVxn15iqPXAs8iEyaTFuKJsWD0P&X-Amz-Signature=cffdb39c3da98f38c021d393b41c7793f06f407ea4a4d65192e238248f71acdc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
