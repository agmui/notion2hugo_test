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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QONLGZU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZtCRt1P04i0Fxa8M1BlXNakJGu0Ff9X9vPJ9603r2LgIhAJ%2FUqctPgqv0SdV9clg%2BtE7EN%2FrtWyZcACs70mG%2BkAjDKv8DCCAQABoMNjM3NDIzMTgzODA1IgyyY5qInn1irOqsa6wq3AMzoMH7IfxH%2BJ1Cp3ZY1n28ISfdaEjas1eGjnBWcgQITrMFs8sMmjRjFRRm6rQKAmIF52EaEP%2BGdTccUSJrG9zVxFm6zJbY35Z0x82DB0cOtIxbZej7xn8X7SRf%2BB6j3SRUUEWIFqtj3fqeyCIpHcxali%2FDsPUWlULX79Fiyz1cksmRcM9kDW4gLJ2SOhxYA4y8NAlcxnOYFGLXaF9f8V4nTjmlsepUA7CcVLOekAhBonngPqyP5tiPBdqan548BNF%2FR3xIE7GoUbSN%2FGNoN2CglgiT9wT%2BiZgCYLnRT7RPhigF35Dw5V%2B%2F7jDaCV9fFjmVYeAAECVXNHwX549caJvfFARreGBDx4eshksOgWCpU2TH764pwfF7QVmgS0Lk%2F4kG2o1WxJKNl3nxab7ezmJ4ZfUidvGxms6IKWZaFR9zA3ifnZMVmVmgSaYhyql4KhqGAkw6Ec1vf5vb%2FkHvPPEF7hPEVixP1YqRqJ2%2BJaVoN71XLhbVy%2FzTJd7LFqw5DoHVZAhbPFd2QEuck91hJrn3nyXetwqaJdbpz4ZOLhn0yAaAy4%2BOHBLJGK0DQTsGIVDnLt726vsu7LuwL2DgVkPyzAy4GsE%2BgKPcGKWb6eegtR0UzyvBnIzyVjVvzDCXlYW9BjqkAbkRnRkjHwgj4v6nRQXr9lZQoUTOOfl6CH3Etx%2BuvklLKdhD8qgAZeuXy43oa7lF2dpPsVNiqlrm72uLbPROiKIrYSG6uANS2LAKs%2BUX6l3xv8B65ehk5G9n%2FjdJQpaWx8bpJUQAxP0IPymEvIjZq%2BrHCCOYCkxS2TGYWBT8c9urKPQHcTCyXHuKR%2Ful7xuHsowTMQFd6yeG7oWL2kiNGFreA7aZ&X-Amz-Signature=861a627e44af6fd4d24e7c2185bc79498ebc03a90a8999affce3e5963f92b00e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QONLGZU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZtCRt1P04i0Fxa8M1BlXNakJGu0Ff9X9vPJ9603r2LgIhAJ%2FUqctPgqv0SdV9clg%2BtE7EN%2FrtWyZcACs70mG%2BkAjDKv8DCCAQABoMNjM3NDIzMTgzODA1IgyyY5qInn1irOqsa6wq3AMzoMH7IfxH%2BJ1Cp3ZY1n28ISfdaEjas1eGjnBWcgQITrMFs8sMmjRjFRRm6rQKAmIF52EaEP%2BGdTccUSJrG9zVxFm6zJbY35Z0x82DB0cOtIxbZej7xn8X7SRf%2BB6j3SRUUEWIFqtj3fqeyCIpHcxali%2FDsPUWlULX79Fiyz1cksmRcM9kDW4gLJ2SOhxYA4y8NAlcxnOYFGLXaF9f8V4nTjmlsepUA7CcVLOekAhBonngPqyP5tiPBdqan548BNF%2FR3xIE7GoUbSN%2FGNoN2CglgiT9wT%2BiZgCYLnRT7RPhigF35Dw5V%2B%2F7jDaCV9fFjmVYeAAECVXNHwX549caJvfFARreGBDx4eshksOgWCpU2TH764pwfF7QVmgS0Lk%2F4kG2o1WxJKNl3nxab7ezmJ4ZfUidvGxms6IKWZaFR9zA3ifnZMVmVmgSaYhyql4KhqGAkw6Ec1vf5vb%2FkHvPPEF7hPEVixP1YqRqJ2%2BJaVoN71XLhbVy%2FzTJd7LFqw5DoHVZAhbPFd2QEuck91hJrn3nyXetwqaJdbpz4ZOLhn0yAaAy4%2BOHBLJGK0DQTsGIVDnLt726vsu7LuwL2DgVkPyzAy4GsE%2BgKPcGKWb6eegtR0UzyvBnIzyVjVvzDCXlYW9BjqkAbkRnRkjHwgj4v6nRQXr9lZQoUTOOfl6CH3Etx%2BuvklLKdhD8qgAZeuXy43oa7lF2dpPsVNiqlrm72uLbPROiKIrYSG6uANS2LAKs%2BUX6l3xv8B65ehk5G9n%2FjdJQpaWx8bpJUQAxP0IPymEvIjZq%2BrHCCOYCkxS2TGYWBT8c9urKPQHcTCyXHuKR%2Ful7xuHsowTMQFd6yeG7oWL2kiNGFreA7aZ&X-Amz-Signature=042dc13e9ac5362c30167628954734e8dd27deb4f6ea1e435975947ef6c8447a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QONLGZU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZtCRt1P04i0Fxa8M1BlXNakJGu0Ff9X9vPJ9603r2LgIhAJ%2FUqctPgqv0SdV9clg%2BtE7EN%2FrtWyZcACs70mG%2BkAjDKv8DCCAQABoMNjM3NDIzMTgzODA1IgyyY5qInn1irOqsa6wq3AMzoMH7IfxH%2BJ1Cp3ZY1n28ISfdaEjas1eGjnBWcgQITrMFs8sMmjRjFRRm6rQKAmIF52EaEP%2BGdTccUSJrG9zVxFm6zJbY35Z0x82DB0cOtIxbZej7xn8X7SRf%2BB6j3SRUUEWIFqtj3fqeyCIpHcxali%2FDsPUWlULX79Fiyz1cksmRcM9kDW4gLJ2SOhxYA4y8NAlcxnOYFGLXaF9f8V4nTjmlsepUA7CcVLOekAhBonngPqyP5tiPBdqan548BNF%2FR3xIE7GoUbSN%2FGNoN2CglgiT9wT%2BiZgCYLnRT7RPhigF35Dw5V%2B%2F7jDaCV9fFjmVYeAAECVXNHwX549caJvfFARreGBDx4eshksOgWCpU2TH764pwfF7QVmgS0Lk%2F4kG2o1WxJKNl3nxab7ezmJ4ZfUidvGxms6IKWZaFR9zA3ifnZMVmVmgSaYhyql4KhqGAkw6Ec1vf5vb%2FkHvPPEF7hPEVixP1YqRqJ2%2BJaVoN71XLhbVy%2FzTJd7LFqw5DoHVZAhbPFd2QEuck91hJrn3nyXetwqaJdbpz4ZOLhn0yAaAy4%2BOHBLJGK0DQTsGIVDnLt726vsu7LuwL2DgVkPyzAy4GsE%2BgKPcGKWb6eegtR0UzyvBnIzyVjVvzDCXlYW9BjqkAbkRnRkjHwgj4v6nRQXr9lZQoUTOOfl6CH3Etx%2BuvklLKdhD8qgAZeuXy43oa7lF2dpPsVNiqlrm72uLbPROiKIrYSG6uANS2LAKs%2BUX6l3xv8B65ehk5G9n%2FjdJQpaWx8bpJUQAxP0IPymEvIjZq%2BrHCCOYCkxS2TGYWBT8c9urKPQHcTCyXHuKR%2Ful7xuHsowTMQFd6yeG7oWL2kiNGFreA7aZ&X-Amz-Signature=77c53cc15b68ed936442aa9cdd171824fc7534fb87d24c22bec358dd5892a2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QONLGZU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZtCRt1P04i0Fxa8M1BlXNakJGu0Ff9X9vPJ9603r2LgIhAJ%2FUqctPgqv0SdV9clg%2BtE7EN%2FrtWyZcACs70mG%2BkAjDKv8DCCAQABoMNjM3NDIzMTgzODA1IgyyY5qInn1irOqsa6wq3AMzoMH7IfxH%2BJ1Cp3ZY1n28ISfdaEjas1eGjnBWcgQITrMFs8sMmjRjFRRm6rQKAmIF52EaEP%2BGdTccUSJrG9zVxFm6zJbY35Z0x82DB0cOtIxbZej7xn8X7SRf%2BB6j3SRUUEWIFqtj3fqeyCIpHcxali%2FDsPUWlULX79Fiyz1cksmRcM9kDW4gLJ2SOhxYA4y8NAlcxnOYFGLXaF9f8V4nTjmlsepUA7CcVLOekAhBonngPqyP5tiPBdqan548BNF%2FR3xIE7GoUbSN%2FGNoN2CglgiT9wT%2BiZgCYLnRT7RPhigF35Dw5V%2B%2F7jDaCV9fFjmVYeAAECVXNHwX549caJvfFARreGBDx4eshksOgWCpU2TH764pwfF7QVmgS0Lk%2F4kG2o1WxJKNl3nxab7ezmJ4ZfUidvGxms6IKWZaFR9zA3ifnZMVmVmgSaYhyql4KhqGAkw6Ec1vf5vb%2FkHvPPEF7hPEVixP1YqRqJ2%2BJaVoN71XLhbVy%2FzTJd7LFqw5DoHVZAhbPFd2QEuck91hJrn3nyXetwqaJdbpz4ZOLhn0yAaAy4%2BOHBLJGK0DQTsGIVDnLt726vsu7LuwL2DgVkPyzAy4GsE%2BgKPcGKWb6eegtR0UzyvBnIzyVjVvzDCXlYW9BjqkAbkRnRkjHwgj4v6nRQXr9lZQoUTOOfl6CH3Etx%2BuvklLKdhD8qgAZeuXy43oa7lF2dpPsVNiqlrm72uLbPROiKIrYSG6uANS2LAKs%2BUX6l3xv8B65ehk5G9n%2FjdJQpaWx8bpJUQAxP0IPymEvIjZq%2BrHCCOYCkxS2TGYWBT8c9urKPQHcTCyXHuKR%2Ful7xuHsowTMQFd6yeG7oWL2kiNGFreA7aZ&X-Amz-Signature=85d7c6b188f74a2b8706ac12146f12b7a3e4db2d02c10833ff22aa9fd8c367e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QONLGZU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZtCRt1P04i0Fxa8M1BlXNakJGu0Ff9X9vPJ9603r2LgIhAJ%2FUqctPgqv0SdV9clg%2BtE7EN%2FrtWyZcACs70mG%2BkAjDKv8DCCAQABoMNjM3NDIzMTgzODA1IgyyY5qInn1irOqsa6wq3AMzoMH7IfxH%2BJ1Cp3ZY1n28ISfdaEjas1eGjnBWcgQITrMFs8sMmjRjFRRm6rQKAmIF52EaEP%2BGdTccUSJrG9zVxFm6zJbY35Z0x82DB0cOtIxbZej7xn8X7SRf%2BB6j3SRUUEWIFqtj3fqeyCIpHcxali%2FDsPUWlULX79Fiyz1cksmRcM9kDW4gLJ2SOhxYA4y8NAlcxnOYFGLXaF9f8V4nTjmlsepUA7CcVLOekAhBonngPqyP5tiPBdqan548BNF%2FR3xIE7GoUbSN%2FGNoN2CglgiT9wT%2BiZgCYLnRT7RPhigF35Dw5V%2B%2F7jDaCV9fFjmVYeAAECVXNHwX549caJvfFARreGBDx4eshksOgWCpU2TH764pwfF7QVmgS0Lk%2F4kG2o1WxJKNl3nxab7ezmJ4ZfUidvGxms6IKWZaFR9zA3ifnZMVmVmgSaYhyql4KhqGAkw6Ec1vf5vb%2FkHvPPEF7hPEVixP1YqRqJ2%2BJaVoN71XLhbVy%2FzTJd7LFqw5DoHVZAhbPFd2QEuck91hJrn3nyXetwqaJdbpz4ZOLhn0yAaAy4%2BOHBLJGK0DQTsGIVDnLt726vsu7LuwL2DgVkPyzAy4GsE%2BgKPcGKWb6eegtR0UzyvBnIzyVjVvzDCXlYW9BjqkAbkRnRkjHwgj4v6nRQXr9lZQoUTOOfl6CH3Etx%2BuvklLKdhD8qgAZeuXy43oa7lF2dpPsVNiqlrm72uLbPROiKIrYSG6uANS2LAKs%2BUX6l3xv8B65ehk5G9n%2FjdJQpaWx8bpJUQAxP0IPymEvIjZq%2BrHCCOYCkxS2TGYWBT8c9urKPQHcTCyXHuKR%2Ful7xuHsowTMQFd6yeG7oWL2kiNGFreA7aZ&X-Amz-Signature=ab3c724b994411943b2898bb70ce938b15982621fb7dc467c01648efb13f3bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QONLGZU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZtCRt1P04i0Fxa8M1BlXNakJGu0Ff9X9vPJ9603r2LgIhAJ%2FUqctPgqv0SdV9clg%2BtE7EN%2FrtWyZcACs70mG%2BkAjDKv8DCCAQABoMNjM3NDIzMTgzODA1IgyyY5qInn1irOqsa6wq3AMzoMH7IfxH%2BJ1Cp3ZY1n28ISfdaEjas1eGjnBWcgQITrMFs8sMmjRjFRRm6rQKAmIF52EaEP%2BGdTccUSJrG9zVxFm6zJbY35Z0x82DB0cOtIxbZej7xn8X7SRf%2BB6j3SRUUEWIFqtj3fqeyCIpHcxali%2FDsPUWlULX79Fiyz1cksmRcM9kDW4gLJ2SOhxYA4y8NAlcxnOYFGLXaF9f8V4nTjmlsepUA7CcVLOekAhBonngPqyP5tiPBdqan548BNF%2FR3xIE7GoUbSN%2FGNoN2CglgiT9wT%2BiZgCYLnRT7RPhigF35Dw5V%2B%2F7jDaCV9fFjmVYeAAECVXNHwX549caJvfFARreGBDx4eshksOgWCpU2TH764pwfF7QVmgS0Lk%2F4kG2o1WxJKNl3nxab7ezmJ4ZfUidvGxms6IKWZaFR9zA3ifnZMVmVmgSaYhyql4KhqGAkw6Ec1vf5vb%2FkHvPPEF7hPEVixP1YqRqJ2%2BJaVoN71XLhbVy%2FzTJd7LFqw5DoHVZAhbPFd2QEuck91hJrn3nyXetwqaJdbpz4ZOLhn0yAaAy4%2BOHBLJGK0DQTsGIVDnLt726vsu7LuwL2DgVkPyzAy4GsE%2BgKPcGKWb6eegtR0UzyvBnIzyVjVvzDCXlYW9BjqkAbkRnRkjHwgj4v6nRQXr9lZQoUTOOfl6CH3Etx%2BuvklLKdhD8qgAZeuXy43oa7lF2dpPsVNiqlrm72uLbPROiKIrYSG6uANS2LAKs%2BUX6l3xv8B65ehk5G9n%2FjdJQpaWx8bpJUQAxP0IPymEvIjZq%2BrHCCOYCkxS2TGYWBT8c9urKPQHcTCyXHuKR%2Ful7xuHsowTMQFd6yeG7oWL2kiNGFreA7aZ&X-Amz-Signature=445338b48b2de6fc9191f2c3d54a882dc0e4aab7436b0857fe8baa3b9ba755a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QONLGZU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZtCRt1P04i0Fxa8M1BlXNakJGu0Ff9X9vPJ9603r2LgIhAJ%2FUqctPgqv0SdV9clg%2BtE7EN%2FrtWyZcACs70mG%2BkAjDKv8DCCAQABoMNjM3NDIzMTgzODA1IgyyY5qInn1irOqsa6wq3AMzoMH7IfxH%2BJ1Cp3ZY1n28ISfdaEjas1eGjnBWcgQITrMFs8sMmjRjFRRm6rQKAmIF52EaEP%2BGdTccUSJrG9zVxFm6zJbY35Z0x82DB0cOtIxbZej7xn8X7SRf%2BB6j3SRUUEWIFqtj3fqeyCIpHcxali%2FDsPUWlULX79Fiyz1cksmRcM9kDW4gLJ2SOhxYA4y8NAlcxnOYFGLXaF9f8V4nTjmlsepUA7CcVLOekAhBonngPqyP5tiPBdqan548BNF%2FR3xIE7GoUbSN%2FGNoN2CglgiT9wT%2BiZgCYLnRT7RPhigF35Dw5V%2B%2F7jDaCV9fFjmVYeAAECVXNHwX549caJvfFARreGBDx4eshksOgWCpU2TH764pwfF7QVmgS0Lk%2F4kG2o1WxJKNl3nxab7ezmJ4ZfUidvGxms6IKWZaFR9zA3ifnZMVmVmgSaYhyql4KhqGAkw6Ec1vf5vb%2FkHvPPEF7hPEVixP1YqRqJ2%2BJaVoN71XLhbVy%2FzTJd7LFqw5DoHVZAhbPFd2QEuck91hJrn3nyXetwqaJdbpz4ZOLhn0yAaAy4%2BOHBLJGK0DQTsGIVDnLt726vsu7LuwL2DgVkPyzAy4GsE%2BgKPcGKWb6eegtR0UzyvBnIzyVjVvzDCXlYW9BjqkAbkRnRkjHwgj4v6nRQXr9lZQoUTOOfl6CH3Etx%2BuvklLKdhD8qgAZeuXy43oa7lF2dpPsVNiqlrm72uLbPROiKIrYSG6uANS2LAKs%2BUX6l3xv8B65ehk5G9n%2FjdJQpaWx8bpJUQAxP0IPymEvIjZq%2BrHCCOYCkxS2TGYWBT8c9urKPQHcTCyXHuKR%2Ful7xuHsowTMQFd6yeG7oWL2kiNGFreA7aZ&X-Amz-Signature=73a07b94a07c9e1a161b3b9e1a7a0af53f6227616ddff16a7882fb60a26a4483&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
