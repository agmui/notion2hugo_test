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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W3OJHK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHMQiJP79cVW2FORwRh2VnNiTwRME8g6pzRYxK%2F4ZfJYAiEA3NtLHDI8ScfOc%2BnwHBEf23uDSlMR2s2AuFStxN9KPSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfx9ahyA0abs8SAeircA950kCE1A4DwcthKCLmaL0dtxSvohDbn3aqmOInCfiiy9AEbMvuae3G9e5dmyGpNJIj9Nro7senU0un4LxooA9MYt7OzeH%2BgO%2B%2BCWh%2FhjSyRnvM3C3RDNGohJ%2Fk9bah2LZW0FnY45GsYBIlgvJLMIOSgB3YrAvAErSC5Nx774gpwsYww9t8KQqO2OldXNLGWWuHH%2FcFfpwDuaFkLmyqgp0pOq7YgjBd%2B5AUPhdQSg2I5cn9HWbSGrbnFdd3NbKui9pSkyNxDO8B0sYOKzwMcw%2B6qxj%2FPmqyk491XrVEEDvSZCGR0Cthzw%2BeDkEpJIlDnUD7pQxR8L3K2WlDCSIYTMXEc1C4yLAqhzjkQTYhtvi4hBrWBfBdVt7eBtOVpIlM7KTWnGU%2B3YXGUEGHsrwfauIrAQU7aC55w%2B7OEgxt7imSWWpLQmEGNeojsu0QwmccvoW8zp8oZkOQ3ncEhjBYcIfXEV7HIozloGtNGaKa03mOENRDqjEpbxHdaP75UIIUUJa%2FqSv7DmzzPdPcyA0g%2FewYG4Pr79TV8SXKiO44NNYYRfWyqE%2BgD9bYhixCXU6Ozf4uGmf61%2FY4bJgcpnqhKNTx%2BZ%2B%2BOO4%2Bfdo9%2FqaNyWh5AvXgTPiNGyjozkc8wMM6k8b4GOqUBXdfnvqPxWmGP%2FGxUSKha8PDruOLNLN%2BM9%2B%2BRb5BpmPVulQ%2BChK%2F%2By41dshp%2B%2B2cWWkQKIVqJbh%2BfA4v1iJ6aio%2Bt8g6i3Pn%2BRFyMqaWHQYVZKoggpkgZklwjHg6jXST%2FRcz3Q%2FxhABBMbDHx0IAIpR5q%2BwwFKLqH1h%2ByaWsQuBL%2BLfkxfpwQTKsLYUWT9LXa%2FBnoj4XCvzgQDmECRNJTz2uCkr1G&X-Amz-Signature=053cfb6d70a4c41276778ebb4dab908ef6396f0bc32cfcca97309dd8cad9c1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W3OJHK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHMQiJP79cVW2FORwRh2VnNiTwRME8g6pzRYxK%2F4ZfJYAiEA3NtLHDI8ScfOc%2BnwHBEf23uDSlMR2s2AuFStxN9KPSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfx9ahyA0abs8SAeircA950kCE1A4DwcthKCLmaL0dtxSvohDbn3aqmOInCfiiy9AEbMvuae3G9e5dmyGpNJIj9Nro7senU0un4LxooA9MYt7OzeH%2BgO%2B%2BCWh%2FhjSyRnvM3C3RDNGohJ%2Fk9bah2LZW0FnY45GsYBIlgvJLMIOSgB3YrAvAErSC5Nx774gpwsYww9t8KQqO2OldXNLGWWuHH%2FcFfpwDuaFkLmyqgp0pOq7YgjBd%2B5AUPhdQSg2I5cn9HWbSGrbnFdd3NbKui9pSkyNxDO8B0sYOKzwMcw%2B6qxj%2FPmqyk491XrVEEDvSZCGR0Cthzw%2BeDkEpJIlDnUD7pQxR8L3K2WlDCSIYTMXEc1C4yLAqhzjkQTYhtvi4hBrWBfBdVt7eBtOVpIlM7KTWnGU%2B3YXGUEGHsrwfauIrAQU7aC55w%2B7OEgxt7imSWWpLQmEGNeojsu0QwmccvoW8zp8oZkOQ3ncEhjBYcIfXEV7HIozloGtNGaKa03mOENRDqjEpbxHdaP75UIIUUJa%2FqSv7DmzzPdPcyA0g%2FewYG4Pr79TV8SXKiO44NNYYRfWyqE%2BgD9bYhixCXU6Ozf4uGmf61%2FY4bJgcpnqhKNTx%2BZ%2B%2BOO4%2Bfdo9%2FqaNyWh5AvXgTPiNGyjozkc8wMM6k8b4GOqUBXdfnvqPxWmGP%2FGxUSKha8PDruOLNLN%2BM9%2B%2BRb5BpmPVulQ%2BChK%2F%2By41dshp%2B%2B2cWWkQKIVqJbh%2BfA4v1iJ6aio%2Bt8g6i3Pn%2BRFyMqaWHQYVZKoggpkgZklwjHg6jXST%2FRcz3Q%2FxhABBMbDHx0IAIpR5q%2BwwFKLqH1h%2ByaWsQuBL%2BLfkxfpwQTKsLYUWT9LXa%2FBnoj4XCvzgQDmECRNJTz2uCkr1G&X-Amz-Signature=58375e42d675a344ce615cea30be9f8d4b9b03aa547312030f371f0b4ea0990e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W3OJHK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHMQiJP79cVW2FORwRh2VnNiTwRME8g6pzRYxK%2F4ZfJYAiEA3NtLHDI8ScfOc%2BnwHBEf23uDSlMR2s2AuFStxN9KPSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfx9ahyA0abs8SAeircA950kCE1A4DwcthKCLmaL0dtxSvohDbn3aqmOInCfiiy9AEbMvuae3G9e5dmyGpNJIj9Nro7senU0un4LxooA9MYt7OzeH%2BgO%2B%2BCWh%2FhjSyRnvM3C3RDNGohJ%2Fk9bah2LZW0FnY45GsYBIlgvJLMIOSgB3YrAvAErSC5Nx774gpwsYww9t8KQqO2OldXNLGWWuHH%2FcFfpwDuaFkLmyqgp0pOq7YgjBd%2B5AUPhdQSg2I5cn9HWbSGrbnFdd3NbKui9pSkyNxDO8B0sYOKzwMcw%2B6qxj%2FPmqyk491XrVEEDvSZCGR0Cthzw%2BeDkEpJIlDnUD7pQxR8L3K2WlDCSIYTMXEc1C4yLAqhzjkQTYhtvi4hBrWBfBdVt7eBtOVpIlM7KTWnGU%2B3YXGUEGHsrwfauIrAQU7aC55w%2B7OEgxt7imSWWpLQmEGNeojsu0QwmccvoW8zp8oZkOQ3ncEhjBYcIfXEV7HIozloGtNGaKa03mOENRDqjEpbxHdaP75UIIUUJa%2FqSv7DmzzPdPcyA0g%2FewYG4Pr79TV8SXKiO44NNYYRfWyqE%2BgD9bYhixCXU6Ozf4uGmf61%2FY4bJgcpnqhKNTx%2BZ%2B%2BOO4%2Bfdo9%2FqaNyWh5AvXgTPiNGyjozkc8wMM6k8b4GOqUBXdfnvqPxWmGP%2FGxUSKha8PDruOLNLN%2BM9%2B%2BRb5BpmPVulQ%2BChK%2F%2By41dshp%2B%2B2cWWkQKIVqJbh%2BfA4v1iJ6aio%2Bt8g6i3Pn%2BRFyMqaWHQYVZKoggpkgZklwjHg6jXST%2FRcz3Q%2FxhABBMbDHx0IAIpR5q%2BwwFKLqH1h%2ByaWsQuBL%2BLfkxfpwQTKsLYUWT9LXa%2FBnoj4XCvzgQDmECRNJTz2uCkr1G&X-Amz-Signature=d50a3b4ac532f7e51b0c27bcf5dbc9155467d9de669f7e822586cb0e4935645e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W3OJHK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHMQiJP79cVW2FORwRh2VnNiTwRME8g6pzRYxK%2F4ZfJYAiEA3NtLHDI8ScfOc%2BnwHBEf23uDSlMR2s2AuFStxN9KPSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfx9ahyA0abs8SAeircA950kCE1A4DwcthKCLmaL0dtxSvohDbn3aqmOInCfiiy9AEbMvuae3G9e5dmyGpNJIj9Nro7senU0un4LxooA9MYt7OzeH%2BgO%2B%2BCWh%2FhjSyRnvM3C3RDNGohJ%2Fk9bah2LZW0FnY45GsYBIlgvJLMIOSgB3YrAvAErSC5Nx774gpwsYww9t8KQqO2OldXNLGWWuHH%2FcFfpwDuaFkLmyqgp0pOq7YgjBd%2B5AUPhdQSg2I5cn9HWbSGrbnFdd3NbKui9pSkyNxDO8B0sYOKzwMcw%2B6qxj%2FPmqyk491XrVEEDvSZCGR0Cthzw%2BeDkEpJIlDnUD7pQxR8L3K2WlDCSIYTMXEc1C4yLAqhzjkQTYhtvi4hBrWBfBdVt7eBtOVpIlM7KTWnGU%2B3YXGUEGHsrwfauIrAQU7aC55w%2B7OEgxt7imSWWpLQmEGNeojsu0QwmccvoW8zp8oZkOQ3ncEhjBYcIfXEV7HIozloGtNGaKa03mOENRDqjEpbxHdaP75UIIUUJa%2FqSv7DmzzPdPcyA0g%2FewYG4Pr79TV8SXKiO44NNYYRfWyqE%2BgD9bYhixCXU6Ozf4uGmf61%2FY4bJgcpnqhKNTx%2BZ%2B%2BOO4%2Bfdo9%2FqaNyWh5AvXgTPiNGyjozkc8wMM6k8b4GOqUBXdfnvqPxWmGP%2FGxUSKha8PDruOLNLN%2BM9%2B%2BRb5BpmPVulQ%2BChK%2F%2By41dshp%2B%2B2cWWkQKIVqJbh%2BfA4v1iJ6aio%2Bt8g6i3Pn%2BRFyMqaWHQYVZKoggpkgZklwjHg6jXST%2FRcz3Q%2FxhABBMbDHx0IAIpR5q%2BwwFKLqH1h%2ByaWsQuBL%2BLfkxfpwQTKsLYUWT9LXa%2FBnoj4XCvzgQDmECRNJTz2uCkr1G&X-Amz-Signature=977611776a34865a06a5f3258b2d2c791a0c8edb267bb8559e327a6d67da5a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W3OJHK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHMQiJP79cVW2FORwRh2VnNiTwRME8g6pzRYxK%2F4ZfJYAiEA3NtLHDI8ScfOc%2BnwHBEf23uDSlMR2s2AuFStxN9KPSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfx9ahyA0abs8SAeircA950kCE1A4DwcthKCLmaL0dtxSvohDbn3aqmOInCfiiy9AEbMvuae3G9e5dmyGpNJIj9Nro7senU0un4LxooA9MYt7OzeH%2BgO%2B%2BCWh%2FhjSyRnvM3C3RDNGohJ%2Fk9bah2LZW0FnY45GsYBIlgvJLMIOSgB3YrAvAErSC5Nx774gpwsYww9t8KQqO2OldXNLGWWuHH%2FcFfpwDuaFkLmyqgp0pOq7YgjBd%2B5AUPhdQSg2I5cn9HWbSGrbnFdd3NbKui9pSkyNxDO8B0sYOKzwMcw%2B6qxj%2FPmqyk491XrVEEDvSZCGR0Cthzw%2BeDkEpJIlDnUD7pQxR8L3K2WlDCSIYTMXEc1C4yLAqhzjkQTYhtvi4hBrWBfBdVt7eBtOVpIlM7KTWnGU%2B3YXGUEGHsrwfauIrAQU7aC55w%2B7OEgxt7imSWWpLQmEGNeojsu0QwmccvoW8zp8oZkOQ3ncEhjBYcIfXEV7HIozloGtNGaKa03mOENRDqjEpbxHdaP75UIIUUJa%2FqSv7DmzzPdPcyA0g%2FewYG4Pr79TV8SXKiO44NNYYRfWyqE%2BgD9bYhixCXU6Ozf4uGmf61%2FY4bJgcpnqhKNTx%2BZ%2B%2BOO4%2Bfdo9%2FqaNyWh5AvXgTPiNGyjozkc8wMM6k8b4GOqUBXdfnvqPxWmGP%2FGxUSKha8PDruOLNLN%2BM9%2B%2BRb5BpmPVulQ%2BChK%2F%2By41dshp%2B%2B2cWWkQKIVqJbh%2BfA4v1iJ6aio%2Bt8g6i3Pn%2BRFyMqaWHQYVZKoggpkgZklwjHg6jXST%2FRcz3Q%2FxhABBMbDHx0IAIpR5q%2BwwFKLqH1h%2ByaWsQuBL%2BLfkxfpwQTKsLYUWT9LXa%2FBnoj4XCvzgQDmECRNJTz2uCkr1G&X-Amz-Signature=d2bde31034cec2a6677abc76ba34a68b86313b9ab95417ffad17f6c015898d84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W3OJHK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHMQiJP79cVW2FORwRh2VnNiTwRME8g6pzRYxK%2F4ZfJYAiEA3NtLHDI8ScfOc%2BnwHBEf23uDSlMR2s2AuFStxN9KPSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfx9ahyA0abs8SAeircA950kCE1A4DwcthKCLmaL0dtxSvohDbn3aqmOInCfiiy9AEbMvuae3G9e5dmyGpNJIj9Nro7senU0un4LxooA9MYt7OzeH%2BgO%2B%2BCWh%2FhjSyRnvM3C3RDNGohJ%2Fk9bah2LZW0FnY45GsYBIlgvJLMIOSgB3YrAvAErSC5Nx774gpwsYww9t8KQqO2OldXNLGWWuHH%2FcFfpwDuaFkLmyqgp0pOq7YgjBd%2B5AUPhdQSg2I5cn9HWbSGrbnFdd3NbKui9pSkyNxDO8B0sYOKzwMcw%2B6qxj%2FPmqyk491XrVEEDvSZCGR0Cthzw%2BeDkEpJIlDnUD7pQxR8L3K2WlDCSIYTMXEc1C4yLAqhzjkQTYhtvi4hBrWBfBdVt7eBtOVpIlM7KTWnGU%2B3YXGUEGHsrwfauIrAQU7aC55w%2B7OEgxt7imSWWpLQmEGNeojsu0QwmccvoW8zp8oZkOQ3ncEhjBYcIfXEV7HIozloGtNGaKa03mOENRDqjEpbxHdaP75UIIUUJa%2FqSv7DmzzPdPcyA0g%2FewYG4Pr79TV8SXKiO44NNYYRfWyqE%2BgD9bYhixCXU6Ozf4uGmf61%2FY4bJgcpnqhKNTx%2BZ%2B%2BOO4%2Bfdo9%2FqaNyWh5AvXgTPiNGyjozkc8wMM6k8b4GOqUBXdfnvqPxWmGP%2FGxUSKha8PDruOLNLN%2BM9%2B%2BRb5BpmPVulQ%2BChK%2F%2By41dshp%2B%2B2cWWkQKIVqJbh%2BfA4v1iJ6aio%2Bt8g6i3Pn%2BRFyMqaWHQYVZKoggpkgZklwjHg6jXST%2FRcz3Q%2FxhABBMbDHx0IAIpR5q%2BwwFKLqH1h%2ByaWsQuBL%2BLfkxfpwQTKsLYUWT9LXa%2FBnoj4XCvzgQDmECRNJTz2uCkr1G&X-Amz-Signature=8106219e780b4df90851c135948882e0f986e7a4e65e4d60ea91b217cd235027&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W3OJHK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHMQiJP79cVW2FORwRh2VnNiTwRME8g6pzRYxK%2F4ZfJYAiEA3NtLHDI8ScfOc%2BnwHBEf23uDSlMR2s2AuFStxN9KPSkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfx9ahyA0abs8SAeircA950kCE1A4DwcthKCLmaL0dtxSvohDbn3aqmOInCfiiy9AEbMvuae3G9e5dmyGpNJIj9Nro7senU0un4LxooA9MYt7OzeH%2BgO%2B%2BCWh%2FhjSyRnvM3C3RDNGohJ%2Fk9bah2LZW0FnY45GsYBIlgvJLMIOSgB3YrAvAErSC5Nx774gpwsYww9t8KQqO2OldXNLGWWuHH%2FcFfpwDuaFkLmyqgp0pOq7YgjBd%2B5AUPhdQSg2I5cn9HWbSGrbnFdd3NbKui9pSkyNxDO8B0sYOKzwMcw%2B6qxj%2FPmqyk491XrVEEDvSZCGR0Cthzw%2BeDkEpJIlDnUD7pQxR8L3K2WlDCSIYTMXEc1C4yLAqhzjkQTYhtvi4hBrWBfBdVt7eBtOVpIlM7KTWnGU%2B3YXGUEGHsrwfauIrAQU7aC55w%2B7OEgxt7imSWWpLQmEGNeojsu0QwmccvoW8zp8oZkOQ3ncEhjBYcIfXEV7HIozloGtNGaKa03mOENRDqjEpbxHdaP75UIIUUJa%2FqSv7DmzzPdPcyA0g%2FewYG4Pr79TV8SXKiO44NNYYRfWyqE%2BgD9bYhixCXU6Ozf4uGmf61%2FY4bJgcpnqhKNTx%2BZ%2B%2BOO4%2Bfdo9%2FqaNyWh5AvXgTPiNGyjozkc8wMM6k8b4GOqUBXdfnvqPxWmGP%2FGxUSKha8PDruOLNLN%2BM9%2B%2BRb5BpmPVulQ%2BChK%2F%2By41dshp%2B%2B2cWWkQKIVqJbh%2BfA4v1iJ6aio%2Bt8g6i3Pn%2BRFyMqaWHQYVZKoggpkgZklwjHg6jXST%2FRcz3Q%2FxhABBMbDHx0IAIpR5q%2BwwFKLqH1h%2ByaWsQuBL%2BLfkxfpwQTKsLYUWT9LXa%2FBnoj4XCvzgQDmECRNJTz2uCkr1G&X-Amz-Signature=028e7aa21a5abc14372646a47e7d984d34d0a1bc35c2c6ce07c7322f437aa9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
