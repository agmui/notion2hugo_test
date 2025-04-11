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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX45GWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICt1cDT0WXpv69fBxXPhvDLiZ4R6xmvjMK3NSqzkaj5oAiEAqcF9ml%2FH%2BDu%2Bj%2FVOkeFKcsTHEr%2Bukd7USF3BJ060nxgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf19xTRqlxn%2BlSCAircA7ao3h8iYarM2FbrJvwlQKppiuFojAV4p2J91gAK0JynblCt0TgVgKjd4TZffvm2E2Weyg%2FmYCkbBJeiaVyaODhyaHXZUIxvSswj%2BYsI8ocdb97%2F75Lfd4nkop3ChIOVcUKqvf9S4eyAleUBSpuprix3i3dktCJ7sQ0kEu9tnbVGPS56nqEJSc2%2BRs%2F2ungfwCr%2FXX%2B2mR708zVg12hbzQqU7oVru8oa93%2FvHRE%2BISENhJDDJqqQlkzpxWTWFommAbDM%2B5UkZrrmNCLBlRjIYhyWl9ctUv%2BCebDoolw%2B7rNl1jVrKkZM7pNiZZvA9BXdTSvH2JEnBKft0ZAbc37CbFSnEliUZXH0LdvmOujV2k6VM%2FeMplFIJfHjRXmg9tBV8ZKCIZokW52u8z2e%2Bcy%2FHHTAjrnRVjAg50brow5L5R19t9%2BI0Ns9dS0YdyaoxAvAGKYXaqepZm4ncqA0ICMDIasAe1P%2B%2FYOp0EkqznqADA3ju7vZphaJzYlgG078XE%2BYNFRSBD%2BlYvpjNpTb8%2Bmw3WPRHVJnjOOwjrAzuyN2NYc35PKb2TFGKtUf4WWdWJLNbBPMJk4K3lLiPaBq6SH6z0PoqgibPxRPDjeFzC1EwoC3f8Vhnd2dNaZH5vF6MKi85r8GOqUBruc0eYhl3J1Uh%2BWWyKrq%2Bhzwwp93QHo%2BO6M6FnWrBVKV749y%2FDpfmIsAlJnqXlHq9%2F877jQ3PgFfz2T5eFrhi%2B2vH4CErzTnuW4gQTaJVClH19DSqcz6XYtKSYGorsfp4P7ejnk0K5YvpuYjjJ51q7fvV3psGCdhZXxAr1ApeNKY0u0xkm4CUUV2MoBxY%2Fo1gA9j9ctx6OImW0ZXIiuZ%2FtfOnLBK&X-Amz-Signature=0e47bb4de8c06ac5827a277cf08c84959e4055167137c293794d16d8f1d86525&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX45GWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICt1cDT0WXpv69fBxXPhvDLiZ4R6xmvjMK3NSqzkaj5oAiEAqcF9ml%2FH%2BDu%2Bj%2FVOkeFKcsTHEr%2Bukd7USF3BJ060nxgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf19xTRqlxn%2BlSCAircA7ao3h8iYarM2FbrJvwlQKppiuFojAV4p2J91gAK0JynblCt0TgVgKjd4TZffvm2E2Weyg%2FmYCkbBJeiaVyaODhyaHXZUIxvSswj%2BYsI8ocdb97%2F75Lfd4nkop3ChIOVcUKqvf9S4eyAleUBSpuprix3i3dktCJ7sQ0kEu9tnbVGPS56nqEJSc2%2BRs%2F2ungfwCr%2FXX%2B2mR708zVg12hbzQqU7oVru8oa93%2FvHRE%2BISENhJDDJqqQlkzpxWTWFommAbDM%2B5UkZrrmNCLBlRjIYhyWl9ctUv%2BCebDoolw%2B7rNl1jVrKkZM7pNiZZvA9BXdTSvH2JEnBKft0ZAbc37CbFSnEliUZXH0LdvmOujV2k6VM%2FeMplFIJfHjRXmg9tBV8ZKCIZokW52u8z2e%2Bcy%2FHHTAjrnRVjAg50brow5L5R19t9%2BI0Ns9dS0YdyaoxAvAGKYXaqepZm4ncqA0ICMDIasAe1P%2B%2FYOp0EkqznqADA3ju7vZphaJzYlgG078XE%2BYNFRSBD%2BlYvpjNpTb8%2Bmw3WPRHVJnjOOwjrAzuyN2NYc35PKb2TFGKtUf4WWdWJLNbBPMJk4K3lLiPaBq6SH6z0PoqgibPxRPDjeFzC1EwoC3f8Vhnd2dNaZH5vF6MKi85r8GOqUBruc0eYhl3J1Uh%2BWWyKrq%2Bhzwwp93QHo%2BO6M6FnWrBVKV749y%2FDpfmIsAlJnqXlHq9%2F877jQ3PgFfz2T5eFrhi%2B2vH4CErzTnuW4gQTaJVClH19DSqcz6XYtKSYGorsfp4P7ejnk0K5YvpuYjjJ51q7fvV3psGCdhZXxAr1ApeNKY0u0xkm4CUUV2MoBxY%2Fo1gA9j9ctx6OImW0ZXIiuZ%2FtfOnLBK&X-Amz-Signature=8c5417b9cb3c37f74791348e1f04993e211aed6f73dec54ccce8cfc202e85437&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX45GWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICt1cDT0WXpv69fBxXPhvDLiZ4R6xmvjMK3NSqzkaj5oAiEAqcF9ml%2FH%2BDu%2Bj%2FVOkeFKcsTHEr%2Bukd7USF3BJ060nxgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf19xTRqlxn%2BlSCAircA7ao3h8iYarM2FbrJvwlQKppiuFojAV4p2J91gAK0JynblCt0TgVgKjd4TZffvm2E2Weyg%2FmYCkbBJeiaVyaODhyaHXZUIxvSswj%2BYsI8ocdb97%2F75Lfd4nkop3ChIOVcUKqvf9S4eyAleUBSpuprix3i3dktCJ7sQ0kEu9tnbVGPS56nqEJSc2%2BRs%2F2ungfwCr%2FXX%2B2mR708zVg12hbzQqU7oVru8oa93%2FvHRE%2BISENhJDDJqqQlkzpxWTWFommAbDM%2B5UkZrrmNCLBlRjIYhyWl9ctUv%2BCebDoolw%2B7rNl1jVrKkZM7pNiZZvA9BXdTSvH2JEnBKft0ZAbc37CbFSnEliUZXH0LdvmOujV2k6VM%2FeMplFIJfHjRXmg9tBV8ZKCIZokW52u8z2e%2Bcy%2FHHTAjrnRVjAg50brow5L5R19t9%2BI0Ns9dS0YdyaoxAvAGKYXaqepZm4ncqA0ICMDIasAe1P%2B%2FYOp0EkqznqADA3ju7vZphaJzYlgG078XE%2BYNFRSBD%2BlYvpjNpTb8%2Bmw3WPRHVJnjOOwjrAzuyN2NYc35PKb2TFGKtUf4WWdWJLNbBPMJk4K3lLiPaBq6SH6z0PoqgibPxRPDjeFzC1EwoC3f8Vhnd2dNaZH5vF6MKi85r8GOqUBruc0eYhl3J1Uh%2BWWyKrq%2Bhzwwp93QHo%2BO6M6FnWrBVKV749y%2FDpfmIsAlJnqXlHq9%2F877jQ3PgFfz2T5eFrhi%2B2vH4CErzTnuW4gQTaJVClH19DSqcz6XYtKSYGorsfp4P7ejnk0K5YvpuYjjJ51q7fvV3psGCdhZXxAr1ApeNKY0u0xkm4CUUV2MoBxY%2Fo1gA9j9ctx6OImW0ZXIiuZ%2FtfOnLBK&X-Amz-Signature=e2ebb364f27b8645fccc2fe874b209a3377e5160fab0e8727e78db5a531f78a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX45GWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICt1cDT0WXpv69fBxXPhvDLiZ4R6xmvjMK3NSqzkaj5oAiEAqcF9ml%2FH%2BDu%2Bj%2FVOkeFKcsTHEr%2Bukd7USF3BJ060nxgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf19xTRqlxn%2BlSCAircA7ao3h8iYarM2FbrJvwlQKppiuFojAV4p2J91gAK0JynblCt0TgVgKjd4TZffvm2E2Weyg%2FmYCkbBJeiaVyaODhyaHXZUIxvSswj%2BYsI8ocdb97%2F75Lfd4nkop3ChIOVcUKqvf9S4eyAleUBSpuprix3i3dktCJ7sQ0kEu9tnbVGPS56nqEJSc2%2BRs%2F2ungfwCr%2FXX%2B2mR708zVg12hbzQqU7oVru8oa93%2FvHRE%2BISENhJDDJqqQlkzpxWTWFommAbDM%2B5UkZrrmNCLBlRjIYhyWl9ctUv%2BCebDoolw%2B7rNl1jVrKkZM7pNiZZvA9BXdTSvH2JEnBKft0ZAbc37CbFSnEliUZXH0LdvmOujV2k6VM%2FeMplFIJfHjRXmg9tBV8ZKCIZokW52u8z2e%2Bcy%2FHHTAjrnRVjAg50brow5L5R19t9%2BI0Ns9dS0YdyaoxAvAGKYXaqepZm4ncqA0ICMDIasAe1P%2B%2FYOp0EkqznqADA3ju7vZphaJzYlgG078XE%2BYNFRSBD%2BlYvpjNpTb8%2Bmw3WPRHVJnjOOwjrAzuyN2NYc35PKb2TFGKtUf4WWdWJLNbBPMJk4K3lLiPaBq6SH6z0PoqgibPxRPDjeFzC1EwoC3f8Vhnd2dNaZH5vF6MKi85r8GOqUBruc0eYhl3J1Uh%2BWWyKrq%2Bhzwwp93QHo%2BO6M6FnWrBVKV749y%2FDpfmIsAlJnqXlHq9%2F877jQ3PgFfz2T5eFrhi%2B2vH4CErzTnuW4gQTaJVClH19DSqcz6XYtKSYGorsfp4P7ejnk0K5YvpuYjjJ51q7fvV3psGCdhZXxAr1ApeNKY0u0xkm4CUUV2MoBxY%2Fo1gA9j9ctx6OImW0ZXIiuZ%2FtfOnLBK&X-Amz-Signature=f98435eef5f5dc4ea860c37d40d64735e16bf9356789c90e1f4ef33e758e9572&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX45GWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICt1cDT0WXpv69fBxXPhvDLiZ4R6xmvjMK3NSqzkaj5oAiEAqcF9ml%2FH%2BDu%2Bj%2FVOkeFKcsTHEr%2Bukd7USF3BJ060nxgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf19xTRqlxn%2BlSCAircA7ao3h8iYarM2FbrJvwlQKppiuFojAV4p2J91gAK0JynblCt0TgVgKjd4TZffvm2E2Weyg%2FmYCkbBJeiaVyaODhyaHXZUIxvSswj%2BYsI8ocdb97%2F75Lfd4nkop3ChIOVcUKqvf9S4eyAleUBSpuprix3i3dktCJ7sQ0kEu9tnbVGPS56nqEJSc2%2BRs%2F2ungfwCr%2FXX%2B2mR708zVg12hbzQqU7oVru8oa93%2FvHRE%2BISENhJDDJqqQlkzpxWTWFommAbDM%2B5UkZrrmNCLBlRjIYhyWl9ctUv%2BCebDoolw%2B7rNl1jVrKkZM7pNiZZvA9BXdTSvH2JEnBKft0ZAbc37CbFSnEliUZXH0LdvmOujV2k6VM%2FeMplFIJfHjRXmg9tBV8ZKCIZokW52u8z2e%2Bcy%2FHHTAjrnRVjAg50brow5L5R19t9%2BI0Ns9dS0YdyaoxAvAGKYXaqepZm4ncqA0ICMDIasAe1P%2B%2FYOp0EkqznqADA3ju7vZphaJzYlgG078XE%2BYNFRSBD%2BlYvpjNpTb8%2Bmw3WPRHVJnjOOwjrAzuyN2NYc35PKb2TFGKtUf4WWdWJLNbBPMJk4K3lLiPaBq6SH6z0PoqgibPxRPDjeFzC1EwoC3f8Vhnd2dNaZH5vF6MKi85r8GOqUBruc0eYhl3J1Uh%2BWWyKrq%2Bhzwwp93QHo%2BO6M6FnWrBVKV749y%2FDpfmIsAlJnqXlHq9%2F877jQ3PgFfz2T5eFrhi%2B2vH4CErzTnuW4gQTaJVClH19DSqcz6XYtKSYGorsfp4P7ejnk0K5YvpuYjjJ51q7fvV3psGCdhZXxAr1ApeNKY0u0xkm4CUUV2MoBxY%2Fo1gA9j9ctx6OImW0ZXIiuZ%2FtfOnLBK&X-Amz-Signature=41fb1879eba093bee6e3cd8aa7cba13d13be83cd00cfbbd87e8ce001b982eb76&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX45GWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICt1cDT0WXpv69fBxXPhvDLiZ4R6xmvjMK3NSqzkaj5oAiEAqcF9ml%2FH%2BDu%2Bj%2FVOkeFKcsTHEr%2Bukd7USF3BJ060nxgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf19xTRqlxn%2BlSCAircA7ao3h8iYarM2FbrJvwlQKppiuFojAV4p2J91gAK0JynblCt0TgVgKjd4TZffvm2E2Weyg%2FmYCkbBJeiaVyaODhyaHXZUIxvSswj%2BYsI8ocdb97%2F75Lfd4nkop3ChIOVcUKqvf9S4eyAleUBSpuprix3i3dktCJ7sQ0kEu9tnbVGPS56nqEJSc2%2BRs%2F2ungfwCr%2FXX%2B2mR708zVg12hbzQqU7oVru8oa93%2FvHRE%2BISENhJDDJqqQlkzpxWTWFommAbDM%2B5UkZrrmNCLBlRjIYhyWl9ctUv%2BCebDoolw%2B7rNl1jVrKkZM7pNiZZvA9BXdTSvH2JEnBKft0ZAbc37CbFSnEliUZXH0LdvmOujV2k6VM%2FeMplFIJfHjRXmg9tBV8ZKCIZokW52u8z2e%2Bcy%2FHHTAjrnRVjAg50brow5L5R19t9%2BI0Ns9dS0YdyaoxAvAGKYXaqepZm4ncqA0ICMDIasAe1P%2B%2FYOp0EkqznqADA3ju7vZphaJzYlgG078XE%2BYNFRSBD%2BlYvpjNpTb8%2Bmw3WPRHVJnjOOwjrAzuyN2NYc35PKb2TFGKtUf4WWdWJLNbBPMJk4K3lLiPaBq6SH6z0PoqgibPxRPDjeFzC1EwoC3f8Vhnd2dNaZH5vF6MKi85r8GOqUBruc0eYhl3J1Uh%2BWWyKrq%2Bhzwwp93QHo%2BO6M6FnWrBVKV749y%2FDpfmIsAlJnqXlHq9%2F877jQ3PgFfz2T5eFrhi%2B2vH4CErzTnuW4gQTaJVClH19DSqcz6XYtKSYGorsfp4P7ejnk0K5YvpuYjjJ51q7fvV3psGCdhZXxAr1ApeNKY0u0xkm4CUUV2MoBxY%2Fo1gA9j9ctx6OImW0ZXIiuZ%2FtfOnLBK&X-Amz-Signature=f4e5f9cc140cdc62794987d7c8b7616f3745a57454438f7fb432c7b4bf019650&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX45GWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICt1cDT0WXpv69fBxXPhvDLiZ4R6xmvjMK3NSqzkaj5oAiEAqcF9ml%2FH%2BDu%2Bj%2FVOkeFKcsTHEr%2Bukd7USF3BJ060nxgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf19xTRqlxn%2BlSCAircA7ao3h8iYarM2FbrJvwlQKppiuFojAV4p2J91gAK0JynblCt0TgVgKjd4TZffvm2E2Weyg%2FmYCkbBJeiaVyaODhyaHXZUIxvSswj%2BYsI8ocdb97%2F75Lfd4nkop3ChIOVcUKqvf9S4eyAleUBSpuprix3i3dktCJ7sQ0kEu9tnbVGPS56nqEJSc2%2BRs%2F2ungfwCr%2FXX%2B2mR708zVg12hbzQqU7oVru8oa93%2FvHRE%2BISENhJDDJqqQlkzpxWTWFommAbDM%2B5UkZrrmNCLBlRjIYhyWl9ctUv%2BCebDoolw%2B7rNl1jVrKkZM7pNiZZvA9BXdTSvH2JEnBKft0ZAbc37CbFSnEliUZXH0LdvmOujV2k6VM%2FeMplFIJfHjRXmg9tBV8ZKCIZokW52u8z2e%2Bcy%2FHHTAjrnRVjAg50brow5L5R19t9%2BI0Ns9dS0YdyaoxAvAGKYXaqepZm4ncqA0ICMDIasAe1P%2B%2FYOp0EkqznqADA3ju7vZphaJzYlgG078XE%2BYNFRSBD%2BlYvpjNpTb8%2Bmw3WPRHVJnjOOwjrAzuyN2NYc35PKb2TFGKtUf4WWdWJLNbBPMJk4K3lLiPaBq6SH6z0PoqgibPxRPDjeFzC1EwoC3f8Vhnd2dNaZH5vF6MKi85r8GOqUBruc0eYhl3J1Uh%2BWWyKrq%2Bhzwwp93QHo%2BO6M6FnWrBVKV749y%2FDpfmIsAlJnqXlHq9%2F877jQ3PgFfz2T5eFrhi%2B2vH4CErzTnuW4gQTaJVClH19DSqcz6XYtKSYGorsfp4P7ejnk0K5YvpuYjjJ51q7fvV3psGCdhZXxAr1ApeNKY0u0xkm4CUUV2MoBxY%2Fo1gA9j9ctx6OImW0ZXIiuZ%2FtfOnLBK&X-Amz-Signature=b7d69b7e8703933a67cba537c8cdb43803cf061920ddf0228628e2b9837dfe8a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
