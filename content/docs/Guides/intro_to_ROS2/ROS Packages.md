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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYYZDFT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt3UPDFrVSI%2FYmP4jYEWMFWehOk65%2FKLBJrFQbgUkKzAiARP7c2XPh0yJXmn9qFjgx3q%2F8YP2VhfTv5MCde2cTh9Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMjAI8eQ5%2FckZifxOUKtwDbbrpgegLfudUGtIMDfBSDtH9cdJL3rQllfxIh1fTOECGwm8MotlKqFNKaxTP0TzJC5uEkcvFa3yi0hu0sKdQUwCE9Gp2dyaYSV416xkdVawxO8xtT9UukBmc33shwFIvsVPRArg3kA8e463qchQxCLreoeqDSC3cKIrDGTV1wXBD%2B%2FyXqYC2rSFNXN7EoCoO7DcjjAtZKJ7yY325%2F%2F%2FJI22HR2LQgtUgXIdTIHQ4%2Fd7FyhzcoOzumk%2B1oe97z9Kjb30CPnO5XlpeWl2b3hBvJn8gmLmJenGF%2Fa%2BMBAjvysSVeD0VqzDaNisWfBQrUoJGm5kDMTjbNIlRJOdex1G2vFwTd7mfGUrnVkiU7a9MF%2Be%2FtZcfihVZ6s6RVd07zjA%2FJPhRA0Tw3%2Fo9WB%2FGPisLqueuI1Az9rcCKeK%2BeheqCf%2FJShsNE4jgMngi4rmhwbS21DwPwHw0EvsKHhdXBR1pkdIOywlqrPNjDy9SwYbxLboOYmwD2GBgrFz6gXS3cSX0y8ADNiELghH48vcwJzPAqcil6Yg4rwbbQgkP7b7SSy8O1GnWXfZ3EUow7oLrA3bs8Thhwc3skHwmo1CALcD5mv02EkYpRqyXtAkLFlU683ApQ%2BoOeFQZoQ6XCEswv%2FiZvwY6pgE0opT15ysB6ijPJk2LQrDcdY0YMlyYk9LaCdIoVM5ufsNWJI%2F69qUdELRuFGJytK%2F33sl8SO2bai3fEzhV3vmLAKN0fKTxqizUzeqTk5bWMYwk9a8EwO%2FnYvqdZRe7JdgQr1QPcU69keaKJ18eWZ2pORpBuvodFNgYgkO47qhT77J%2F%2F3pNU5iWyDsX13H8WcxK6pJZJJYh2v%2FVfb7aE5sRJ%2FYnqthQ&X-Amz-Signature=0674d26310d2019fb996b00ae75472eadd45a80d8a12b21d9ffdfeb5b407260c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYYZDFT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt3UPDFrVSI%2FYmP4jYEWMFWehOk65%2FKLBJrFQbgUkKzAiARP7c2XPh0yJXmn9qFjgx3q%2F8YP2VhfTv5MCde2cTh9Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMjAI8eQ5%2FckZifxOUKtwDbbrpgegLfudUGtIMDfBSDtH9cdJL3rQllfxIh1fTOECGwm8MotlKqFNKaxTP0TzJC5uEkcvFa3yi0hu0sKdQUwCE9Gp2dyaYSV416xkdVawxO8xtT9UukBmc33shwFIvsVPRArg3kA8e463qchQxCLreoeqDSC3cKIrDGTV1wXBD%2B%2FyXqYC2rSFNXN7EoCoO7DcjjAtZKJ7yY325%2F%2F%2FJI22HR2LQgtUgXIdTIHQ4%2Fd7FyhzcoOzumk%2B1oe97z9Kjb30CPnO5XlpeWl2b3hBvJn8gmLmJenGF%2Fa%2BMBAjvysSVeD0VqzDaNisWfBQrUoJGm5kDMTjbNIlRJOdex1G2vFwTd7mfGUrnVkiU7a9MF%2Be%2FtZcfihVZ6s6RVd07zjA%2FJPhRA0Tw3%2Fo9WB%2FGPisLqueuI1Az9rcCKeK%2BeheqCf%2FJShsNE4jgMngi4rmhwbS21DwPwHw0EvsKHhdXBR1pkdIOywlqrPNjDy9SwYbxLboOYmwD2GBgrFz6gXS3cSX0y8ADNiELghH48vcwJzPAqcil6Yg4rwbbQgkP7b7SSy8O1GnWXfZ3EUow7oLrA3bs8Thhwc3skHwmo1CALcD5mv02EkYpRqyXtAkLFlU683ApQ%2BoOeFQZoQ6XCEswv%2FiZvwY6pgE0opT15ysB6ijPJk2LQrDcdY0YMlyYk9LaCdIoVM5ufsNWJI%2F69qUdELRuFGJytK%2F33sl8SO2bai3fEzhV3vmLAKN0fKTxqizUzeqTk5bWMYwk9a8EwO%2FnYvqdZRe7JdgQr1QPcU69keaKJ18eWZ2pORpBuvodFNgYgkO47qhT77J%2F%2F3pNU5iWyDsX13H8WcxK6pJZJJYh2v%2FVfb7aE5sRJ%2FYnqthQ&X-Amz-Signature=68dc2cc4099571d2137d7b31ddc47bfb13e6c4be12779f9d78601fe9b87a9295&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYYZDFT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt3UPDFrVSI%2FYmP4jYEWMFWehOk65%2FKLBJrFQbgUkKzAiARP7c2XPh0yJXmn9qFjgx3q%2F8YP2VhfTv5MCde2cTh9Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMjAI8eQ5%2FckZifxOUKtwDbbrpgegLfudUGtIMDfBSDtH9cdJL3rQllfxIh1fTOECGwm8MotlKqFNKaxTP0TzJC5uEkcvFa3yi0hu0sKdQUwCE9Gp2dyaYSV416xkdVawxO8xtT9UukBmc33shwFIvsVPRArg3kA8e463qchQxCLreoeqDSC3cKIrDGTV1wXBD%2B%2FyXqYC2rSFNXN7EoCoO7DcjjAtZKJ7yY325%2F%2F%2FJI22HR2LQgtUgXIdTIHQ4%2Fd7FyhzcoOzumk%2B1oe97z9Kjb30CPnO5XlpeWl2b3hBvJn8gmLmJenGF%2Fa%2BMBAjvysSVeD0VqzDaNisWfBQrUoJGm5kDMTjbNIlRJOdex1G2vFwTd7mfGUrnVkiU7a9MF%2Be%2FtZcfihVZ6s6RVd07zjA%2FJPhRA0Tw3%2Fo9WB%2FGPisLqueuI1Az9rcCKeK%2BeheqCf%2FJShsNE4jgMngi4rmhwbS21DwPwHw0EvsKHhdXBR1pkdIOywlqrPNjDy9SwYbxLboOYmwD2GBgrFz6gXS3cSX0y8ADNiELghH48vcwJzPAqcil6Yg4rwbbQgkP7b7SSy8O1GnWXfZ3EUow7oLrA3bs8Thhwc3skHwmo1CALcD5mv02EkYpRqyXtAkLFlU683ApQ%2BoOeFQZoQ6XCEswv%2FiZvwY6pgE0opT15ysB6ijPJk2LQrDcdY0YMlyYk9LaCdIoVM5ufsNWJI%2F69qUdELRuFGJytK%2F33sl8SO2bai3fEzhV3vmLAKN0fKTxqizUzeqTk5bWMYwk9a8EwO%2FnYvqdZRe7JdgQr1QPcU69keaKJ18eWZ2pORpBuvodFNgYgkO47qhT77J%2F%2F3pNU5iWyDsX13H8WcxK6pJZJJYh2v%2FVfb7aE5sRJ%2FYnqthQ&X-Amz-Signature=604d511c2653a06788ee9ec31f969ce62752eb7d329de61751f64032436ad479&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYYZDFT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt3UPDFrVSI%2FYmP4jYEWMFWehOk65%2FKLBJrFQbgUkKzAiARP7c2XPh0yJXmn9qFjgx3q%2F8YP2VhfTv5MCde2cTh9Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMjAI8eQ5%2FckZifxOUKtwDbbrpgegLfudUGtIMDfBSDtH9cdJL3rQllfxIh1fTOECGwm8MotlKqFNKaxTP0TzJC5uEkcvFa3yi0hu0sKdQUwCE9Gp2dyaYSV416xkdVawxO8xtT9UukBmc33shwFIvsVPRArg3kA8e463qchQxCLreoeqDSC3cKIrDGTV1wXBD%2B%2FyXqYC2rSFNXN7EoCoO7DcjjAtZKJ7yY325%2F%2F%2FJI22HR2LQgtUgXIdTIHQ4%2Fd7FyhzcoOzumk%2B1oe97z9Kjb30CPnO5XlpeWl2b3hBvJn8gmLmJenGF%2Fa%2BMBAjvysSVeD0VqzDaNisWfBQrUoJGm5kDMTjbNIlRJOdex1G2vFwTd7mfGUrnVkiU7a9MF%2Be%2FtZcfihVZ6s6RVd07zjA%2FJPhRA0Tw3%2Fo9WB%2FGPisLqueuI1Az9rcCKeK%2BeheqCf%2FJShsNE4jgMngi4rmhwbS21DwPwHw0EvsKHhdXBR1pkdIOywlqrPNjDy9SwYbxLboOYmwD2GBgrFz6gXS3cSX0y8ADNiELghH48vcwJzPAqcil6Yg4rwbbQgkP7b7SSy8O1GnWXfZ3EUow7oLrA3bs8Thhwc3skHwmo1CALcD5mv02EkYpRqyXtAkLFlU683ApQ%2BoOeFQZoQ6XCEswv%2FiZvwY6pgE0opT15ysB6ijPJk2LQrDcdY0YMlyYk9LaCdIoVM5ufsNWJI%2F69qUdELRuFGJytK%2F33sl8SO2bai3fEzhV3vmLAKN0fKTxqizUzeqTk5bWMYwk9a8EwO%2FnYvqdZRe7JdgQr1QPcU69keaKJ18eWZ2pORpBuvodFNgYgkO47qhT77J%2F%2F3pNU5iWyDsX13H8WcxK6pJZJJYh2v%2FVfb7aE5sRJ%2FYnqthQ&X-Amz-Signature=291adb72b2c34f20dfc3c80448b9add329f5923692b5c45b24006b02fb59d515&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYYZDFT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt3UPDFrVSI%2FYmP4jYEWMFWehOk65%2FKLBJrFQbgUkKzAiARP7c2XPh0yJXmn9qFjgx3q%2F8YP2VhfTv5MCde2cTh9Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMjAI8eQ5%2FckZifxOUKtwDbbrpgegLfudUGtIMDfBSDtH9cdJL3rQllfxIh1fTOECGwm8MotlKqFNKaxTP0TzJC5uEkcvFa3yi0hu0sKdQUwCE9Gp2dyaYSV416xkdVawxO8xtT9UukBmc33shwFIvsVPRArg3kA8e463qchQxCLreoeqDSC3cKIrDGTV1wXBD%2B%2FyXqYC2rSFNXN7EoCoO7DcjjAtZKJ7yY325%2F%2F%2FJI22HR2LQgtUgXIdTIHQ4%2Fd7FyhzcoOzumk%2B1oe97z9Kjb30CPnO5XlpeWl2b3hBvJn8gmLmJenGF%2Fa%2BMBAjvysSVeD0VqzDaNisWfBQrUoJGm5kDMTjbNIlRJOdex1G2vFwTd7mfGUrnVkiU7a9MF%2Be%2FtZcfihVZ6s6RVd07zjA%2FJPhRA0Tw3%2Fo9WB%2FGPisLqueuI1Az9rcCKeK%2BeheqCf%2FJShsNE4jgMngi4rmhwbS21DwPwHw0EvsKHhdXBR1pkdIOywlqrPNjDy9SwYbxLboOYmwD2GBgrFz6gXS3cSX0y8ADNiELghH48vcwJzPAqcil6Yg4rwbbQgkP7b7SSy8O1GnWXfZ3EUow7oLrA3bs8Thhwc3skHwmo1CALcD5mv02EkYpRqyXtAkLFlU683ApQ%2BoOeFQZoQ6XCEswv%2FiZvwY6pgE0opT15ysB6ijPJk2LQrDcdY0YMlyYk9LaCdIoVM5ufsNWJI%2F69qUdELRuFGJytK%2F33sl8SO2bai3fEzhV3vmLAKN0fKTxqizUzeqTk5bWMYwk9a8EwO%2FnYvqdZRe7JdgQr1QPcU69keaKJ18eWZ2pORpBuvodFNgYgkO47qhT77J%2F%2F3pNU5iWyDsX13H8WcxK6pJZJJYh2v%2FVfb7aE5sRJ%2FYnqthQ&X-Amz-Signature=067537bf20c3d9047ef6d13495acfec3276c88e68e41c62ef7fe885948f6f8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYYZDFT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt3UPDFrVSI%2FYmP4jYEWMFWehOk65%2FKLBJrFQbgUkKzAiARP7c2XPh0yJXmn9qFjgx3q%2F8YP2VhfTv5MCde2cTh9Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMjAI8eQ5%2FckZifxOUKtwDbbrpgegLfudUGtIMDfBSDtH9cdJL3rQllfxIh1fTOECGwm8MotlKqFNKaxTP0TzJC5uEkcvFa3yi0hu0sKdQUwCE9Gp2dyaYSV416xkdVawxO8xtT9UukBmc33shwFIvsVPRArg3kA8e463qchQxCLreoeqDSC3cKIrDGTV1wXBD%2B%2FyXqYC2rSFNXN7EoCoO7DcjjAtZKJ7yY325%2F%2F%2FJI22HR2LQgtUgXIdTIHQ4%2Fd7FyhzcoOzumk%2B1oe97z9Kjb30CPnO5XlpeWl2b3hBvJn8gmLmJenGF%2Fa%2BMBAjvysSVeD0VqzDaNisWfBQrUoJGm5kDMTjbNIlRJOdex1G2vFwTd7mfGUrnVkiU7a9MF%2Be%2FtZcfihVZ6s6RVd07zjA%2FJPhRA0Tw3%2Fo9WB%2FGPisLqueuI1Az9rcCKeK%2BeheqCf%2FJShsNE4jgMngi4rmhwbS21DwPwHw0EvsKHhdXBR1pkdIOywlqrPNjDy9SwYbxLboOYmwD2GBgrFz6gXS3cSX0y8ADNiELghH48vcwJzPAqcil6Yg4rwbbQgkP7b7SSy8O1GnWXfZ3EUow7oLrA3bs8Thhwc3skHwmo1CALcD5mv02EkYpRqyXtAkLFlU683ApQ%2BoOeFQZoQ6XCEswv%2FiZvwY6pgE0opT15ysB6ijPJk2LQrDcdY0YMlyYk9LaCdIoVM5ufsNWJI%2F69qUdELRuFGJytK%2F33sl8SO2bai3fEzhV3vmLAKN0fKTxqizUzeqTk5bWMYwk9a8EwO%2FnYvqdZRe7JdgQr1QPcU69keaKJ18eWZ2pORpBuvodFNgYgkO47qhT77J%2F%2F3pNU5iWyDsX13H8WcxK6pJZJJYh2v%2FVfb7aE5sRJ%2FYnqthQ&X-Amz-Signature=bebce3fca42acb8a5d3629bc42db6347d5f2b7b81de31765de3bc253bda33194&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYYZDFT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt3UPDFrVSI%2FYmP4jYEWMFWehOk65%2FKLBJrFQbgUkKzAiARP7c2XPh0yJXmn9qFjgx3q%2F8YP2VhfTv5MCde2cTh9Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMjAI8eQ5%2FckZifxOUKtwDbbrpgegLfudUGtIMDfBSDtH9cdJL3rQllfxIh1fTOECGwm8MotlKqFNKaxTP0TzJC5uEkcvFa3yi0hu0sKdQUwCE9Gp2dyaYSV416xkdVawxO8xtT9UukBmc33shwFIvsVPRArg3kA8e463qchQxCLreoeqDSC3cKIrDGTV1wXBD%2B%2FyXqYC2rSFNXN7EoCoO7DcjjAtZKJ7yY325%2F%2F%2FJI22HR2LQgtUgXIdTIHQ4%2Fd7FyhzcoOzumk%2B1oe97z9Kjb30CPnO5XlpeWl2b3hBvJn8gmLmJenGF%2Fa%2BMBAjvysSVeD0VqzDaNisWfBQrUoJGm5kDMTjbNIlRJOdex1G2vFwTd7mfGUrnVkiU7a9MF%2Be%2FtZcfihVZ6s6RVd07zjA%2FJPhRA0Tw3%2Fo9WB%2FGPisLqueuI1Az9rcCKeK%2BeheqCf%2FJShsNE4jgMngi4rmhwbS21DwPwHw0EvsKHhdXBR1pkdIOywlqrPNjDy9SwYbxLboOYmwD2GBgrFz6gXS3cSX0y8ADNiELghH48vcwJzPAqcil6Yg4rwbbQgkP7b7SSy8O1GnWXfZ3EUow7oLrA3bs8Thhwc3skHwmo1CALcD5mv02EkYpRqyXtAkLFlU683ApQ%2BoOeFQZoQ6XCEswv%2FiZvwY6pgE0opT15ysB6ijPJk2LQrDcdY0YMlyYk9LaCdIoVM5ufsNWJI%2F69qUdELRuFGJytK%2F33sl8SO2bai3fEzhV3vmLAKN0fKTxqizUzeqTk5bWMYwk9a8EwO%2FnYvqdZRe7JdgQr1QPcU69keaKJ18eWZ2pORpBuvodFNgYgkO47qhT77J%2F%2F3pNU5iWyDsX13H8WcxK6pJZJJYh2v%2FVfb7aE5sRJ%2FYnqthQ&X-Amz-Signature=5467413b3142517bc224aae65686da026b7bed4021e2f1102c044d53de0532cc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
