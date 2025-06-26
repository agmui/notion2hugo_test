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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3TEXVU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCduq%2FnjFjMw%2B7sFQ0rP0Jh%2F788I7CgF1C%2FSJlHtfytLwIgY%2BJwJm%2FUlKCyd%2BKc6TlfDOHD2SumrxDF02T31CelxF8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO8Gu65x%2Bz4GjToR8SrcA9Z92%2FS%2BwthjXewxfU8WxRlVTdYqyVhDyZeCXTwZmHHe9TNRJO%2FpKb%2F4twaXI8KTvZBQLWxzkCfQ31fz1q%2Bp%2FM6rmYoVs8p33SH71wled%2FSjq0LGjzyAfbJPcUVusevH1SLt4T5rcg9p1aU1LsAk%2BSMFr5QDexyJN5vtTUDiKzF9kJ2fKlFsLk4Fyoz4gdaFljutX%2BcPNf9felPocQQfruQJoQkmSZnw%2FPMiCNkr4Dry0zhfAPE7atEhHIRS%2FjJve9%2BHZuag6bhqYpU9u2qcta1VODTlC41HP8Rmyh2gUhZR5JQNZN1529NE7HpyuU8SilUKlhOltlZhlW1R9pMMILHTTRL8VxnW2EUxRHYJvYbO1nlREVZNgYoICSSfOvcS%2BvQc8BTvdua5xQY6KH2i5YPCq%2FdlNmm%2BmMgPpzMHvzDNBg4KL8izTSatAxkF6AWeIZZXnJ163Ir6au2py%2Fmy6hISG8d2Bu6Jsir1bnj2LeHj%2BH32kei%2FiW4urpc23gZwWgLtNEDoc56aIr3KhsDSV7xppm2XYRRgRbaYQ63XoSmeN5hIh7f0vqgQTlF%2Fo8I6s4a6S%2BbkrINTbZaBStwtIp6tM1eq7UNsuOSXo8lf%2BjqPeFjDH3ZESY2b2tITMKWE9sIGOqUBqFb7CLv6hhVXvhX6kEADQL3Nk3DMd3Ev%2Fb01ArvN2j7s7NKsKtXBPFDgXqhgHElZS%2Br5nYnnmwEt4uVxMwtOpOroQOScer%2FAewb0ZNVgxEzstIdpqWqzwSILQKi7%2FxlD1QsPle41tdiO8h%2B4sUmJNpiScCnjC0h7RRPosUj1DALm9CkBfQG5zGhQu0UzhKwLSQw7yIUPiYXGTcKWAtZCpSgq%2BMXl&X-Amz-Signature=ed8d38d4f8ecd97cbacef9d39632fbcc5ad5ccd20c7db09266dea2a10af60eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3TEXVU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCduq%2FnjFjMw%2B7sFQ0rP0Jh%2F788I7CgF1C%2FSJlHtfytLwIgY%2BJwJm%2FUlKCyd%2BKc6TlfDOHD2SumrxDF02T31CelxF8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO8Gu65x%2Bz4GjToR8SrcA9Z92%2FS%2BwthjXewxfU8WxRlVTdYqyVhDyZeCXTwZmHHe9TNRJO%2FpKb%2F4twaXI8KTvZBQLWxzkCfQ31fz1q%2Bp%2FM6rmYoVs8p33SH71wled%2FSjq0LGjzyAfbJPcUVusevH1SLt4T5rcg9p1aU1LsAk%2BSMFr5QDexyJN5vtTUDiKzF9kJ2fKlFsLk4Fyoz4gdaFljutX%2BcPNf9felPocQQfruQJoQkmSZnw%2FPMiCNkr4Dry0zhfAPE7atEhHIRS%2FjJve9%2BHZuag6bhqYpU9u2qcta1VODTlC41HP8Rmyh2gUhZR5JQNZN1529NE7HpyuU8SilUKlhOltlZhlW1R9pMMILHTTRL8VxnW2EUxRHYJvYbO1nlREVZNgYoICSSfOvcS%2BvQc8BTvdua5xQY6KH2i5YPCq%2FdlNmm%2BmMgPpzMHvzDNBg4KL8izTSatAxkF6AWeIZZXnJ163Ir6au2py%2Fmy6hISG8d2Bu6Jsir1bnj2LeHj%2BH32kei%2FiW4urpc23gZwWgLtNEDoc56aIr3KhsDSV7xppm2XYRRgRbaYQ63XoSmeN5hIh7f0vqgQTlF%2Fo8I6s4a6S%2BbkrINTbZaBStwtIp6tM1eq7UNsuOSXo8lf%2BjqPeFjDH3ZESY2b2tITMKWE9sIGOqUBqFb7CLv6hhVXvhX6kEADQL3Nk3DMd3Ev%2Fb01ArvN2j7s7NKsKtXBPFDgXqhgHElZS%2Br5nYnnmwEt4uVxMwtOpOroQOScer%2FAewb0ZNVgxEzstIdpqWqzwSILQKi7%2FxlD1QsPle41tdiO8h%2B4sUmJNpiScCnjC0h7RRPosUj1DALm9CkBfQG5zGhQu0UzhKwLSQw7yIUPiYXGTcKWAtZCpSgq%2BMXl&X-Amz-Signature=b81492723a240557a99273a094fc8988c8890f1c23f87f1eb90205e23b18d619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3TEXVU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCduq%2FnjFjMw%2B7sFQ0rP0Jh%2F788I7CgF1C%2FSJlHtfytLwIgY%2BJwJm%2FUlKCyd%2BKc6TlfDOHD2SumrxDF02T31CelxF8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO8Gu65x%2Bz4GjToR8SrcA9Z92%2FS%2BwthjXewxfU8WxRlVTdYqyVhDyZeCXTwZmHHe9TNRJO%2FpKb%2F4twaXI8KTvZBQLWxzkCfQ31fz1q%2Bp%2FM6rmYoVs8p33SH71wled%2FSjq0LGjzyAfbJPcUVusevH1SLt4T5rcg9p1aU1LsAk%2BSMFr5QDexyJN5vtTUDiKzF9kJ2fKlFsLk4Fyoz4gdaFljutX%2BcPNf9felPocQQfruQJoQkmSZnw%2FPMiCNkr4Dry0zhfAPE7atEhHIRS%2FjJve9%2BHZuag6bhqYpU9u2qcta1VODTlC41HP8Rmyh2gUhZR5JQNZN1529NE7HpyuU8SilUKlhOltlZhlW1R9pMMILHTTRL8VxnW2EUxRHYJvYbO1nlREVZNgYoICSSfOvcS%2BvQc8BTvdua5xQY6KH2i5YPCq%2FdlNmm%2BmMgPpzMHvzDNBg4KL8izTSatAxkF6AWeIZZXnJ163Ir6au2py%2Fmy6hISG8d2Bu6Jsir1bnj2LeHj%2BH32kei%2FiW4urpc23gZwWgLtNEDoc56aIr3KhsDSV7xppm2XYRRgRbaYQ63XoSmeN5hIh7f0vqgQTlF%2Fo8I6s4a6S%2BbkrINTbZaBStwtIp6tM1eq7UNsuOSXo8lf%2BjqPeFjDH3ZESY2b2tITMKWE9sIGOqUBqFb7CLv6hhVXvhX6kEADQL3Nk3DMd3Ev%2Fb01ArvN2j7s7NKsKtXBPFDgXqhgHElZS%2Br5nYnnmwEt4uVxMwtOpOroQOScer%2FAewb0ZNVgxEzstIdpqWqzwSILQKi7%2FxlD1QsPle41tdiO8h%2B4sUmJNpiScCnjC0h7RRPosUj1DALm9CkBfQG5zGhQu0UzhKwLSQw7yIUPiYXGTcKWAtZCpSgq%2BMXl&X-Amz-Signature=22486b55b755c26eb6736b554d8c7fc85e400806f2d2c6c136d9713a5d0d890a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3TEXVU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCduq%2FnjFjMw%2B7sFQ0rP0Jh%2F788I7CgF1C%2FSJlHtfytLwIgY%2BJwJm%2FUlKCyd%2BKc6TlfDOHD2SumrxDF02T31CelxF8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO8Gu65x%2Bz4GjToR8SrcA9Z92%2FS%2BwthjXewxfU8WxRlVTdYqyVhDyZeCXTwZmHHe9TNRJO%2FpKb%2F4twaXI8KTvZBQLWxzkCfQ31fz1q%2Bp%2FM6rmYoVs8p33SH71wled%2FSjq0LGjzyAfbJPcUVusevH1SLt4T5rcg9p1aU1LsAk%2BSMFr5QDexyJN5vtTUDiKzF9kJ2fKlFsLk4Fyoz4gdaFljutX%2BcPNf9felPocQQfruQJoQkmSZnw%2FPMiCNkr4Dry0zhfAPE7atEhHIRS%2FjJve9%2BHZuag6bhqYpU9u2qcta1VODTlC41HP8Rmyh2gUhZR5JQNZN1529NE7HpyuU8SilUKlhOltlZhlW1R9pMMILHTTRL8VxnW2EUxRHYJvYbO1nlREVZNgYoICSSfOvcS%2BvQc8BTvdua5xQY6KH2i5YPCq%2FdlNmm%2BmMgPpzMHvzDNBg4KL8izTSatAxkF6AWeIZZXnJ163Ir6au2py%2Fmy6hISG8d2Bu6Jsir1bnj2LeHj%2BH32kei%2FiW4urpc23gZwWgLtNEDoc56aIr3KhsDSV7xppm2XYRRgRbaYQ63XoSmeN5hIh7f0vqgQTlF%2Fo8I6s4a6S%2BbkrINTbZaBStwtIp6tM1eq7UNsuOSXo8lf%2BjqPeFjDH3ZESY2b2tITMKWE9sIGOqUBqFb7CLv6hhVXvhX6kEADQL3Nk3DMd3Ev%2Fb01ArvN2j7s7NKsKtXBPFDgXqhgHElZS%2Br5nYnnmwEt4uVxMwtOpOroQOScer%2FAewb0ZNVgxEzstIdpqWqzwSILQKi7%2FxlD1QsPle41tdiO8h%2B4sUmJNpiScCnjC0h7RRPosUj1DALm9CkBfQG5zGhQu0UzhKwLSQw7yIUPiYXGTcKWAtZCpSgq%2BMXl&X-Amz-Signature=a7fd2543df2141f214cba514a8aad3614e3596a570a60d78aca442e5b21c5403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3TEXVU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCduq%2FnjFjMw%2B7sFQ0rP0Jh%2F788I7CgF1C%2FSJlHtfytLwIgY%2BJwJm%2FUlKCyd%2BKc6TlfDOHD2SumrxDF02T31CelxF8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO8Gu65x%2Bz4GjToR8SrcA9Z92%2FS%2BwthjXewxfU8WxRlVTdYqyVhDyZeCXTwZmHHe9TNRJO%2FpKb%2F4twaXI8KTvZBQLWxzkCfQ31fz1q%2Bp%2FM6rmYoVs8p33SH71wled%2FSjq0LGjzyAfbJPcUVusevH1SLt4T5rcg9p1aU1LsAk%2BSMFr5QDexyJN5vtTUDiKzF9kJ2fKlFsLk4Fyoz4gdaFljutX%2BcPNf9felPocQQfruQJoQkmSZnw%2FPMiCNkr4Dry0zhfAPE7atEhHIRS%2FjJve9%2BHZuag6bhqYpU9u2qcta1VODTlC41HP8Rmyh2gUhZR5JQNZN1529NE7HpyuU8SilUKlhOltlZhlW1R9pMMILHTTRL8VxnW2EUxRHYJvYbO1nlREVZNgYoICSSfOvcS%2BvQc8BTvdua5xQY6KH2i5YPCq%2FdlNmm%2BmMgPpzMHvzDNBg4KL8izTSatAxkF6AWeIZZXnJ163Ir6au2py%2Fmy6hISG8d2Bu6Jsir1bnj2LeHj%2BH32kei%2FiW4urpc23gZwWgLtNEDoc56aIr3KhsDSV7xppm2XYRRgRbaYQ63XoSmeN5hIh7f0vqgQTlF%2Fo8I6s4a6S%2BbkrINTbZaBStwtIp6tM1eq7UNsuOSXo8lf%2BjqPeFjDH3ZESY2b2tITMKWE9sIGOqUBqFb7CLv6hhVXvhX6kEADQL3Nk3DMd3Ev%2Fb01ArvN2j7s7NKsKtXBPFDgXqhgHElZS%2Br5nYnnmwEt4uVxMwtOpOroQOScer%2FAewb0ZNVgxEzstIdpqWqzwSILQKi7%2FxlD1QsPle41tdiO8h%2B4sUmJNpiScCnjC0h7RRPosUj1DALm9CkBfQG5zGhQu0UzhKwLSQw7yIUPiYXGTcKWAtZCpSgq%2BMXl&X-Amz-Signature=53039766f8a9850fa48dce1f8269ca1d13ceb86917dceb384782d8960f7e4358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3TEXVU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCduq%2FnjFjMw%2B7sFQ0rP0Jh%2F788I7CgF1C%2FSJlHtfytLwIgY%2BJwJm%2FUlKCyd%2BKc6TlfDOHD2SumrxDF02T31CelxF8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO8Gu65x%2Bz4GjToR8SrcA9Z92%2FS%2BwthjXewxfU8WxRlVTdYqyVhDyZeCXTwZmHHe9TNRJO%2FpKb%2F4twaXI8KTvZBQLWxzkCfQ31fz1q%2Bp%2FM6rmYoVs8p33SH71wled%2FSjq0LGjzyAfbJPcUVusevH1SLt4T5rcg9p1aU1LsAk%2BSMFr5QDexyJN5vtTUDiKzF9kJ2fKlFsLk4Fyoz4gdaFljutX%2BcPNf9felPocQQfruQJoQkmSZnw%2FPMiCNkr4Dry0zhfAPE7atEhHIRS%2FjJve9%2BHZuag6bhqYpU9u2qcta1VODTlC41HP8Rmyh2gUhZR5JQNZN1529NE7HpyuU8SilUKlhOltlZhlW1R9pMMILHTTRL8VxnW2EUxRHYJvYbO1nlREVZNgYoICSSfOvcS%2BvQc8BTvdua5xQY6KH2i5YPCq%2FdlNmm%2BmMgPpzMHvzDNBg4KL8izTSatAxkF6AWeIZZXnJ163Ir6au2py%2Fmy6hISG8d2Bu6Jsir1bnj2LeHj%2BH32kei%2FiW4urpc23gZwWgLtNEDoc56aIr3KhsDSV7xppm2XYRRgRbaYQ63XoSmeN5hIh7f0vqgQTlF%2Fo8I6s4a6S%2BbkrINTbZaBStwtIp6tM1eq7UNsuOSXo8lf%2BjqPeFjDH3ZESY2b2tITMKWE9sIGOqUBqFb7CLv6hhVXvhX6kEADQL3Nk3DMd3Ev%2Fb01ArvN2j7s7NKsKtXBPFDgXqhgHElZS%2Br5nYnnmwEt4uVxMwtOpOroQOScer%2FAewb0ZNVgxEzstIdpqWqzwSILQKi7%2FxlD1QsPle41tdiO8h%2B4sUmJNpiScCnjC0h7RRPosUj1DALm9CkBfQG5zGhQu0UzhKwLSQw7yIUPiYXGTcKWAtZCpSgq%2BMXl&X-Amz-Signature=0e11a2874f60cfe6409d2fe1143f36befcf2d5e9b81d0907ea68e0d429bbd8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3TEXVU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCduq%2FnjFjMw%2B7sFQ0rP0Jh%2F788I7CgF1C%2FSJlHtfytLwIgY%2BJwJm%2FUlKCyd%2BKc6TlfDOHD2SumrxDF02T31CelxF8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO8Gu65x%2Bz4GjToR8SrcA9Z92%2FS%2BwthjXewxfU8WxRlVTdYqyVhDyZeCXTwZmHHe9TNRJO%2FpKb%2F4twaXI8KTvZBQLWxzkCfQ31fz1q%2Bp%2FM6rmYoVs8p33SH71wled%2FSjq0LGjzyAfbJPcUVusevH1SLt4T5rcg9p1aU1LsAk%2BSMFr5QDexyJN5vtTUDiKzF9kJ2fKlFsLk4Fyoz4gdaFljutX%2BcPNf9felPocQQfruQJoQkmSZnw%2FPMiCNkr4Dry0zhfAPE7atEhHIRS%2FjJve9%2BHZuag6bhqYpU9u2qcta1VODTlC41HP8Rmyh2gUhZR5JQNZN1529NE7HpyuU8SilUKlhOltlZhlW1R9pMMILHTTRL8VxnW2EUxRHYJvYbO1nlREVZNgYoICSSfOvcS%2BvQc8BTvdua5xQY6KH2i5YPCq%2FdlNmm%2BmMgPpzMHvzDNBg4KL8izTSatAxkF6AWeIZZXnJ163Ir6au2py%2Fmy6hISG8d2Bu6Jsir1bnj2LeHj%2BH32kei%2FiW4urpc23gZwWgLtNEDoc56aIr3KhsDSV7xppm2XYRRgRbaYQ63XoSmeN5hIh7f0vqgQTlF%2Fo8I6s4a6S%2BbkrINTbZaBStwtIp6tM1eq7UNsuOSXo8lf%2BjqPeFjDH3ZESY2b2tITMKWE9sIGOqUBqFb7CLv6hhVXvhX6kEADQL3Nk3DMd3Ev%2Fb01ArvN2j7s7NKsKtXBPFDgXqhgHElZS%2Br5nYnnmwEt4uVxMwtOpOroQOScer%2FAewb0ZNVgxEzstIdpqWqzwSILQKi7%2FxlD1QsPle41tdiO8h%2B4sUmJNpiScCnjC0h7RRPosUj1DALm9CkBfQG5zGhQu0UzhKwLSQw7yIUPiYXGTcKWAtZCpSgq%2BMXl&X-Amz-Signature=220540eec94d99d1fd592342ea649fc74e4f39841cc7bafd0118bee733c007e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
