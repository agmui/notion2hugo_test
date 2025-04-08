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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE4JX7H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWygrgiU8%2FIeJLTdNgHmvjY%2F%2B8g8CAI%2FmmPq4tcBqqQIgQdA8qw7H5b8IWQq2vWN8SWlIGv%2FpLYR2%2FzVVGR%2F40Wkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDB%2F%2F3LjtFGwkwy2GCrcA7e%2BmIQs2XQokbyREpJptupn1SXFUEeUnUrMLH0DHCWbZvDrYlqGIiLj9L1eaam0qtzPnB6HuNYNUbbATiKGudZHULk3kN2Rx0t3DcSKiaRjJqg16EMHo26h4lMRf7QdKDqsTrwUQtPGtkNy%2BV7BAvLhRjFXuDzBO%2FbMWbFKhLQl5jffTZyu5LxQZ%2Fv0apJdRSeyT6S%2F3ErgBKbkNLTp0uI8LU710yR2bCqQHc0JXvsTppknL4qthODuWR6tWatm8D28BEaFDcWCGyXjYv4QbkjnZxyHF0ZQsrEftq5TeKGHZbBgnuGKQsnCFVIoenzVMi3wHFcosx6wQ40n%2FA4KjLbAWyclk9IvP0tK0puGRJHXIe%2FdspdlT4k0qTUz6db9LqC9a76r%2B31QLi8E3YSOk62txQBkLa51tRhNeILqjuhT0iVWTmWXy91%2BqneCEmCY3rdZ%2BeZpngcVuil5qx0U3SdFZRU91FkxNgECKOwjF%2FYdUNY573aTejTEDgebGi%2FQ%2BN4cwFlmmcd2pd6pOlXP3LKgwRZ%2F6sEoUBcBa%2BrInkLvV6fqh9IAA4U%2BRHs52q7LoUUEETYeEmTiRTOysRAFqfRGwGOHddtr610FWqc9xGyWhs2nLM8hfkjdsaCGMJ7x078GOqUB3zxfDUnf7BeyE5WAWeAMVG9DOwGmIs1GOzCiwMs%2BHGB8ceUDPy0ieAvY1sE0IKsNv6XjzsxLPASOMZkzfJ1PbvONLeUX0USMAIs8XIegvzt5LGGBUm2bayinmmGBBpZXPZVOmHdgMYhioFCsb3hmi%2B8CRJnf8LMGtbTwGaNMK7r%2FjYFt9G10NMyJDTPhhKmeh4An4MAS4x4uU%2F9cK2bzITV9VaUt&X-Amz-Signature=e8b7caab4e5f01566d32b31b2359b891e198cfa226251d35bb2fdfd7a6990f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE4JX7H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWygrgiU8%2FIeJLTdNgHmvjY%2F%2B8g8CAI%2FmmPq4tcBqqQIgQdA8qw7H5b8IWQq2vWN8SWlIGv%2FpLYR2%2FzVVGR%2F40Wkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDB%2F%2F3LjtFGwkwy2GCrcA7e%2BmIQs2XQokbyREpJptupn1SXFUEeUnUrMLH0DHCWbZvDrYlqGIiLj9L1eaam0qtzPnB6HuNYNUbbATiKGudZHULk3kN2Rx0t3DcSKiaRjJqg16EMHo26h4lMRf7QdKDqsTrwUQtPGtkNy%2BV7BAvLhRjFXuDzBO%2FbMWbFKhLQl5jffTZyu5LxQZ%2Fv0apJdRSeyT6S%2F3ErgBKbkNLTp0uI8LU710yR2bCqQHc0JXvsTppknL4qthODuWR6tWatm8D28BEaFDcWCGyXjYv4QbkjnZxyHF0ZQsrEftq5TeKGHZbBgnuGKQsnCFVIoenzVMi3wHFcosx6wQ40n%2FA4KjLbAWyclk9IvP0tK0puGRJHXIe%2FdspdlT4k0qTUz6db9LqC9a76r%2B31QLi8E3YSOk62txQBkLa51tRhNeILqjuhT0iVWTmWXy91%2BqneCEmCY3rdZ%2BeZpngcVuil5qx0U3SdFZRU91FkxNgECKOwjF%2FYdUNY573aTejTEDgebGi%2FQ%2BN4cwFlmmcd2pd6pOlXP3LKgwRZ%2F6sEoUBcBa%2BrInkLvV6fqh9IAA4U%2BRHs52q7LoUUEETYeEmTiRTOysRAFqfRGwGOHddtr610FWqc9xGyWhs2nLM8hfkjdsaCGMJ7x078GOqUB3zxfDUnf7BeyE5WAWeAMVG9DOwGmIs1GOzCiwMs%2BHGB8ceUDPy0ieAvY1sE0IKsNv6XjzsxLPASOMZkzfJ1PbvONLeUX0USMAIs8XIegvzt5LGGBUm2bayinmmGBBpZXPZVOmHdgMYhioFCsb3hmi%2B8CRJnf8LMGtbTwGaNMK7r%2FjYFt9G10NMyJDTPhhKmeh4An4MAS4x4uU%2F9cK2bzITV9VaUt&X-Amz-Signature=928e0694b761a896b29d0e84dc7a9590293de8c92f72e05fd6fabed64a1f75c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE4JX7H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWygrgiU8%2FIeJLTdNgHmvjY%2F%2B8g8CAI%2FmmPq4tcBqqQIgQdA8qw7H5b8IWQq2vWN8SWlIGv%2FpLYR2%2FzVVGR%2F40Wkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDB%2F%2F3LjtFGwkwy2GCrcA7e%2BmIQs2XQokbyREpJptupn1SXFUEeUnUrMLH0DHCWbZvDrYlqGIiLj9L1eaam0qtzPnB6HuNYNUbbATiKGudZHULk3kN2Rx0t3DcSKiaRjJqg16EMHo26h4lMRf7QdKDqsTrwUQtPGtkNy%2BV7BAvLhRjFXuDzBO%2FbMWbFKhLQl5jffTZyu5LxQZ%2Fv0apJdRSeyT6S%2F3ErgBKbkNLTp0uI8LU710yR2bCqQHc0JXvsTppknL4qthODuWR6tWatm8D28BEaFDcWCGyXjYv4QbkjnZxyHF0ZQsrEftq5TeKGHZbBgnuGKQsnCFVIoenzVMi3wHFcosx6wQ40n%2FA4KjLbAWyclk9IvP0tK0puGRJHXIe%2FdspdlT4k0qTUz6db9LqC9a76r%2B31QLi8E3YSOk62txQBkLa51tRhNeILqjuhT0iVWTmWXy91%2BqneCEmCY3rdZ%2BeZpngcVuil5qx0U3SdFZRU91FkxNgECKOwjF%2FYdUNY573aTejTEDgebGi%2FQ%2BN4cwFlmmcd2pd6pOlXP3LKgwRZ%2F6sEoUBcBa%2BrInkLvV6fqh9IAA4U%2BRHs52q7LoUUEETYeEmTiRTOysRAFqfRGwGOHddtr610FWqc9xGyWhs2nLM8hfkjdsaCGMJ7x078GOqUB3zxfDUnf7BeyE5WAWeAMVG9DOwGmIs1GOzCiwMs%2BHGB8ceUDPy0ieAvY1sE0IKsNv6XjzsxLPASOMZkzfJ1PbvONLeUX0USMAIs8XIegvzt5LGGBUm2bayinmmGBBpZXPZVOmHdgMYhioFCsb3hmi%2B8CRJnf8LMGtbTwGaNMK7r%2FjYFt9G10NMyJDTPhhKmeh4An4MAS4x4uU%2F9cK2bzITV9VaUt&X-Amz-Signature=020f4dbda4a42afc3b1ff4cef9f0780790c88e02ed625dacd27468539970664f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE4JX7H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWygrgiU8%2FIeJLTdNgHmvjY%2F%2B8g8CAI%2FmmPq4tcBqqQIgQdA8qw7H5b8IWQq2vWN8SWlIGv%2FpLYR2%2FzVVGR%2F40Wkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDB%2F%2F3LjtFGwkwy2GCrcA7e%2BmIQs2XQokbyREpJptupn1SXFUEeUnUrMLH0DHCWbZvDrYlqGIiLj9L1eaam0qtzPnB6HuNYNUbbATiKGudZHULk3kN2Rx0t3DcSKiaRjJqg16EMHo26h4lMRf7QdKDqsTrwUQtPGtkNy%2BV7BAvLhRjFXuDzBO%2FbMWbFKhLQl5jffTZyu5LxQZ%2Fv0apJdRSeyT6S%2F3ErgBKbkNLTp0uI8LU710yR2bCqQHc0JXvsTppknL4qthODuWR6tWatm8D28BEaFDcWCGyXjYv4QbkjnZxyHF0ZQsrEftq5TeKGHZbBgnuGKQsnCFVIoenzVMi3wHFcosx6wQ40n%2FA4KjLbAWyclk9IvP0tK0puGRJHXIe%2FdspdlT4k0qTUz6db9LqC9a76r%2B31QLi8E3YSOk62txQBkLa51tRhNeILqjuhT0iVWTmWXy91%2BqneCEmCY3rdZ%2BeZpngcVuil5qx0U3SdFZRU91FkxNgECKOwjF%2FYdUNY573aTejTEDgebGi%2FQ%2BN4cwFlmmcd2pd6pOlXP3LKgwRZ%2F6sEoUBcBa%2BrInkLvV6fqh9IAA4U%2BRHs52q7LoUUEETYeEmTiRTOysRAFqfRGwGOHddtr610FWqc9xGyWhs2nLM8hfkjdsaCGMJ7x078GOqUB3zxfDUnf7BeyE5WAWeAMVG9DOwGmIs1GOzCiwMs%2BHGB8ceUDPy0ieAvY1sE0IKsNv6XjzsxLPASOMZkzfJ1PbvONLeUX0USMAIs8XIegvzt5LGGBUm2bayinmmGBBpZXPZVOmHdgMYhioFCsb3hmi%2B8CRJnf8LMGtbTwGaNMK7r%2FjYFt9G10NMyJDTPhhKmeh4An4MAS4x4uU%2F9cK2bzITV9VaUt&X-Amz-Signature=ec8911342dc8717da29ddbe8e60a1116c68266c980e267c0e301930b47c827ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE4JX7H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWygrgiU8%2FIeJLTdNgHmvjY%2F%2B8g8CAI%2FmmPq4tcBqqQIgQdA8qw7H5b8IWQq2vWN8SWlIGv%2FpLYR2%2FzVVGR%2F40Wkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDB%2F%2F3LjtFGwkwy2GCrcA7e%2BmIQs2XQokbyREpJptupn1SXFUEeUnUrMLH0DHCWbZvDrYlqGIiLj9L1eaam0qtzPnB6HuNYNUbbATiKGudZHULk3kN2Rx0t3DcSKiaRjJqg16EMHo26h4lMRf7QdKDqsTrwUQtPGtkNy%2BV7BAvLhRjFXuDzBO%2FbMWbFKhLQl5jffTZyu5LxQZ%2Fv0apJdRSeyT6S%2F3ErgBKbkNLTp0uI8LU710yR2bCqQHc0JXvsTppknL4qthODuWR6tWatm8D28BEaFDcWCGyXjYv4QbkjnZxyHF0ZQsrEftq5TeKGHZbBgnuGKQsnCFVIoenzVMi3wHFcosx6wQ40n%2FA4KjLbAWyclk9IvP0tK0puGRJHXIe%2FdspdlT4k0qTUz6db9LqC9a76r%2B31QLi8E3YSOk62txQBkLa51tRhNeILqjuhT0iVWTmWXy91%2BqneCEmCY3rdZ%2BeZpngcVuil5qx0U3SdFZRU91FkxNgECKOwjF%2FYdUNY573aTejTEDgebGi%2FQ%2BN4cwFlmmcd2pd6pOlXP3LKgwRZ%2F6sEoUBcBa%2BrInkLvV6fqh9IAA4U%2BRHs52q7LoUUEETYeEmTiRTOysRAFqfRGwGOHddtr610FWqc9xGyWhs2nLM8hfkjdsaCGMJ7x078GOqUB3zxfDUnf7BeyE5WAWeAMVG9DOwGmIs1GOzCiwMs%2BHGB8ceUDPy0ieAvY1sE0IKsNv6XjzsxLPASOMZkzfJ1PbvONLeUX0USMAIs8XIegvzt5LGGBUm2bayinmmGBBpZXPZVOmHdgMYhioFCsb3hmi%2B8CRJnf8LMGtbTwGaNMK7r%2FjYFt9G10NMyJDTPhhKmeh4An4MAS4x4uU%2F9cK2bzITV9VaUt&X-Amz-Signature=f5c8c14818f55eb41dc431b89aeced4ee9c917c2ca69ee1358787bad94a4e71d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE4JX7H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWygrgiU8%2FIeJLTdNgHmvjY%2F%2B8g8CAI%2FmmPq4tcBqqQIgQdA8qw7H5b8IWQq2vWN8SWlIGv%2FpLYR2%2FzVVGR%2F40Wkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDB%2F%2F3LjtFGwkwy2GCrcA7e%2BmIQs2XQokbyREpJptupn1SXFUEeUnUrMLH0DHCWbZvDrYlqGIiLj9L1eaam0qtzPnB6HuNYNUbbATiKGudZHULk3kN2Rx0t3DcSKiaRjJqg16EMHo26h4lMRf7QdKDqsTrwUQtPGtkNy%2BV7BAvLhRjFXuDzBO%2FbMWbFKhLQl5jffTZyu5LxQZ%2Fv0apJdRSeyT6S%2F3ErgBKbkNLTp0uI8LU710yR2bCqQHc0JXvsTppknL4qthODuWR6tWatm8D28BEaFDcWCGyXjYv4QbkjnZxyHF0ZQsrEftq5TeKGHZbBgnuGKQsnCFVIoenzVMi3wHFcosx6wQ40n%2FA4KjLbAWyclk9IvP0tK0puGRJHXIe%2FdspdlT4k0qTUz6db9LqC9a76r%2B31QLi8E3YSOk62txQBkLa51tRhNeILqjuhT0iVWTmWXy91%2BqneCEmCY3rdZ%2BeZpngcVuil5qx0U3SdFZRU91FkxNgECKOwjF%2FYdUNY573aTejTEDgebGi%2FQ%2BN4cwFlmmcd2pd6pOlXP3LKgwRZ%2F6sEoUBcBa%2BrInkLvV6fqh9IAA4U%2BRHs52q7LoUUEETYeEmTiRTOysRAFqfRGwGOHddtr610FWqc9xGyWhs2nLM8hfkjdsaCGMJ7x078GOqUB3zxfDUnf7BeyE5WAWeAMVG9DOwGmIs1GOzCiwMs%2BHGB8ceUDPy0ieAvY1sE0IKsNv6XjzsxLPASOMZkzfJ1PbvONLeUX0USMAIs8XIegvzt5LGGBUm2bayinmmGBBpZXPZVOmHdgMYhioFCsb3hmi%2B8CRJnf8LMGtbTwGaNMK7r%2FjYFt9G10NMyJDTPhhKmeh4An4MAS4x4uU%2F9cK2bzITV9VaUt&X-Amz-Signature=933e09450b2b7568bc958ec15946a146b53e6cb0187b71c818c578c543ad358f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE4JX7H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWygrgiU8%2FIeJLTdNgHmvjY%2F%2B8g8CAI%2FmmPq4tcBqqQIgQdA8qw7H5b8IWQq2vWN8SWlIGv%2FpLYR2%2FzVVGR%2F40Wkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDB%2F%2F3LjtFGwkwy2GCrcA7e%2BmIQs2XQokbyREpJptupn1SXFUEeUnUrMLH0DHCWbZvDrYlqGIiLj9L1eaam0qtzPnB6HuNYNUbbATiKGudZHULk3kN2Rx0t3DcSKiaRjJqg16EMHo26h4lMRf7QdKDqsTrwUQtPGtkNy%2BV7BAvLhRjFXuDzBO%2FbMWbFKhLQl5jffTZyu5LxQZ%2Fv0apJdRSeyT6S%2F3ErgBKbkNLTp0uI8LU710yR2bCqQHc0JXvsTppknL4qthODuWR6tWatm8D28BEaFDcWCGyXjYv4QbkjnZxyHF0ZQsrEftq5TeKGHZbBgnuGKQsnCFVIoenzVMi3wHFcosx6wQ40n%2FA4KjLbAWyclk9IvP0tK0puGRJHXIe%2FdspdlT4k0qTUz6db9LqC9a76r%2B31QLi8E3YSOk62txQBkLa51tRhNeILqjuhT0iVWTmWXy91%2BqneCEmCY3rdZ%2BeZpngcVuil5qx0U3SdFZRU91FkxNgECKOwjF%2FYdUNY573aTejTEDgebGi%2FQ%2BN4cwFlmmcd2pd6pOlXP3LKgwRZ%2F6sEoUBcBa%2BrInkLvV6fqh9IAA4U%2BRHs52q7LoUUEETYeEmTiRTOysRAFqfRGwGOHddtr610FWqc9xGyWhs2nLM8hfkjdsaCGMJ7x078GOqUB3zxfDUnf7BeyE5WAWeAMVG9DOwGmIs1GOzCiwMs%2BHGB8ceUDPy0ieAvY1sE0IKsNv6XjzsxLPASOMZkzfJ1PbvONLeUX0USMAIs8XIegvzt5LGGBUm2bayinmmGBBpZXPZVOmHdgMYhioFCsb3hmi%2B8CRJnf8LMGtbTwGaNMK7r%2FjYFt9G10NMyJDTPhhKmeh4An4MAS4x4uU%2F9cK2bzITV9VaUt&X-Amz-Signature=8798bff3eaafc1273b7f95ee09fd0be5d474e76eac1b34cf1d1a3e3f0cc3cd88&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
