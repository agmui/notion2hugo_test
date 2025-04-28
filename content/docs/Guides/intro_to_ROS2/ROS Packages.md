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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAWPESN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9%2FpRQATnmb%2Fvggu9YuFX80dxYoRUhJWQCjM%2BgdkZLIAiEA6HUmBd6tz0uMMh1iVdatXiIJ9mZfkvss%2BXkoRQlEpmEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOre5kjM61HEq0G37ircA9MvYNGtdwkRzxeoTH5GltbLDKC6Hw1smDzKpBGqdiwMRpmXVZTw2LqacQzYtKymxZNvGfpRVnbjzpyPs%2Fqd6%2F3zVxijgAn8E19gBmE%2FtRysTcElX39RYB3pI8aB5QLBWyA6Lm2%2BzkozeeIwlJCbCf62zYnEZEy%2B0MrT3xkki%2F3rmKxFw16SUHIppw7eoCOvlx8SXpthA5ekCsl83PoxqUR7sQxlJS%2B6n3uYW72pMjPqNlzubysZ5%2BMv%2BDtgxx6TPh0w1y29tUnLrX7re9uaMr7l1QxB5q2I11%2BmYOiR68EDIlZl8MIsPT4fOHrtwH7sK9Pb3h6JNPDeXp%2FhTNdn3oIMKKXKBHrczbM6nZx%2F%2Br6o6WNEQIhQCQRHjpVwiyDgJEBxEwP%2FfRXmVDp6hInJaJrjrr7EOeykZQ427zLVXEcGItG5sLBgNz52ws4U2zXi73OqV0%2BSMFjZahUnRXQIbF6YpHNr1EjAlPCebfIs9U0vCmn%2FwEcoP1FprW3JLoZf6jJuZm756VRLWobr4Jj4K1mt9EduaM2bVwwsufV5fE%2FQ9x%2BIHHcX8wW1IJiILobrCjdmLvYz%2FeYgOR7rsHilSS0lrRQXVu3U%2F49yzi8orrAvPJSWwgcGhwhCXx%2BEML%2FIvcAGOqUBJAM9QQrbL4ZnH82Q6kAHRR7e7i%2BRQgut%2FeXzqEVdijnIE3y8DYx%2FIA6xhfWzBMQuUoFqW48imHTemafVC7F5%2BcXnEI6y0gA0sOngIx4n6cahBhO%2FTRfKtjV%2FXCzwyhjkxmGtiYUpN1X3e37lzNzTG04Xvxe1RIKV%2BtSf0KYMa%2FnCyBwGG9ZueG3zLRQxsPgPrWDgLf6WDpNq2XcEkBBD%2Fvme4CEf&X-Amz-Signature=de4a138b0c24e1e4867098bb66fc239d91bee57d039094afe15d49b3597b8262&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAWPESN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9%2FpRQATnmb%2Fvggu9YuFX80dxYoRUhJWQCjM%2BgdkZLIAiEA6HUmBd6tz0uMMh1iVdatXiIJ9mZfkvss%2BXkoRQlEpmEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOre5kjM61HEq0G37ircA9MvYNGtdwkRzxeoTH5GltbLDKC6Hw1smDzKpBGqdiwMRpmXVZTw2LqacQzYtKymxZNvGfpRVnbjzpyPs%2Fqd6%2F3zVxijgAn8E19gBmE%2FtRysTcElX39RYB3pI8aB5QLBWyA6Lm2%2BzkozeeIwlJCbCf62zYnEZEy%2B0MrT3xkki%2F3rmKxFw16SUHIppw7eoCOvlx8SXpthA5ekCsl83PoxqUR7sQxlJS%2B6n3uYW72pMjPqNlzubysZ5%2BMv%2BDtgxx6TPh0w1y29tUnLrX7re9uaMr7l1QxB5q2I11%2BmYOiR68EDIlZl8MIsPT4fOHrtwH7sK9Pb3h6JNPDeXp%2FhTNdn3oIMKKXKBHrczbM6nZx%2F%2Br6o6WNEQIhQCQRHjpVwiyDgJEBxEwP%2FfRXmVDp6hInJaJrjrr7EOeykZQ427zLVXEcGItG5sLBgNz52ws4U2zXi73OqV0%2BSMFjZahUnRXQIbF6YpHNr1EjAlPCebfIs9U0vCmn%2FwEcoP1FprW3JLoZf6jJuZm756VRLWobr4Jj4K1mt9EduaM2bVwwsufV5fE%2FQ9x%2BIHHcX8wW1IJiILobrCjdmLvYz%2FeYgOR7rsHilSS0lrRQXVu3U%2F49yzi8orrAvPJSWwgcGhwhCXx%2BEML%2FIvcAGOqUBJAM9QQrbL4ZnH82Q6kAHRR7e7i%2BRQgut%2FeXzqEVdijnIE3y8DYx%2FIA6xhfWzBMQuUoFqW48imHTemafVC7F5%2BcXnEI6y0gA0sOngIx4n6cahBhO%2FTRfKtjV%2FXCzwyhjkxmGtiYUpN1X3e37lzNzTG04Xvxe1RIKV%2BtSf0KYMa%2FnCyBwGG9ZueG3zLRQxsPgPrWDgLf6WDpNq2XcEkBBD%2Fvme4CEf&X-Amz-Signature=4546842b67d536b48370ecd3b10d33012dd8c1c9cd0f0536f2e604198126a685&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAWPESN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9%2FpRQATnmb%2Fvggu9YuFX80dxYoRUhJWQCjM%2BgdkZLIAiEA6HUmBd6tz0uMMh1iVdatXiIJ9mZfkvss%2BXkoRQlEpmEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOre5kjM61HEq0G37ircA9MvYNGtdwkRzxeoTH5GltbLDKC6Hw1smDzKpBGqdiwMRpmXVZTw2LqacQzYtKymxZNvGfpRVnbjzpyPs%2Fqd6%2F3zVxijgAn8E19gBmE%2FtRysTcElX39RYB3pI8aB5QLBWyA6Lm2%2BzkozeeIwlJCbCf62zYnEZEy%2B0MrT3xkki%2F3rmKxFw16SUHIppw7eoCOvlx8SXpthA5ekCsl83PoxqUR7sQxlJS%2B6n3uYW72pMjPqNlzubysZ5%2BMv%2BDtgxx6TPh0w1y29tUnLrX7re9uaMr7l1QxB5q2I11%2BmYOiR68EDIlZl8MIsPT4fOHrtwH7sK9Pb3h6JNPDeXp%2FhTNdn3oIMKKXKBHrczbM6nZx%2F%2Br6o6WNEQIhQCQRHjpVwiyDgJEBxEwP%2FfRXmVDp6hInJaJrjrr7EOeykZQ427zLVXEcGItG5sLBgNz52ws4U2zXi73OqV0%2BSMFjZahUnRXQIbF6YpHNr1EjAlPCebfIs9U0vCmn%2FwEcoP1FprW3JLoZf6jJuZm756VRLWobr4Jj4K1mt9EduaM2bVwwsufV5fE%2FQ9x%2BIHHcX8wW1IJiILobrCjdmLvYz%2FeYgOR7rsHilSS0lrRQXVu3U%2F49yzi8orrAvPJSWwgcGhwhCXx%2BEML%2FIvcAGOqUBJAM9QQrbL4ZnH82Q6kAHRR7e7i%2BRQgut%2FeXzqEVdijnIE3y8DYx%2FIA6xhfWzBMQuUoFqW48imHTemafVC7F5%2BcXnEI6y0gA0sOngIx4n6cahBhO%2FTRfKtjV%2FXCzwyhjkxmGtiYUpN1X3e37lzNzTG04Xvxe1RIKV%2BtSf0KYMa%2FnCyBwGG9ZueG3zLRQxsPgPrWDgLf6WDpNq2XcEkBBD%2Fvme4CEf&X-Amz-Signature=7c96c45eca485b2f1a781dfaad6f48fe318ac1d59067016a0deceeed92a2be25&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAWPESN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9%2FpRQATnmb%2Fvggu9YuFX80dxYoRUhJWQCjM%2BgdkZLIAiEA6HUmBd6tz0uMMh1iVdatXiIJ9mZfkvss%2BXkoRQlEpmEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOre5kjM61HEq0G37ircA9MvYNGtdwkRzxeoTH5GltbLDKC6Hw1smDzKpBGqdiwMRpmXVZTw2LqacQzYtKymxZNvGfpRVnbjzpyPs%2Fqd6%2F3zVxijgAn8E19gBmE%2FtRysTcElX39RYB3pI8aB5QLBWyA6Lm2%2BzkozeeIwlJCbCf62zYnEZEy%2B0MrT3xkki%2F3rmKxFw16SUHIppw7eoCOvlx8SXpthA5ekCsl83PoxqUR7sQxlJS%2B6n3uYW72pMjPqNlzubysZ5%2BMv%2BDtgxx6TPh0w1y29tUnLrX7re9uaMr7l1QxB5q2I11%2BmYOiR68EDIlZl8MIsPT4fOHrtwH7sK9Pb3h6JNPDeXp%2FhTNdn3oIMKKXKBHrczbM6nZx%2F%2Br6o6WNEQIhQCQRHjpVwiyDgJEBxEwP%2FfRXmVDp6hInJaJrjrr7EOeykZQ427zLVXEcGItG5sLBgNz52ws4U2zXi73OqV0%2BSMFjZahUnRXQIbF6YpHNr1EjAlPCebfIs9U0vCmn%2FwEcoP1FprW3JLoZf6jJuZm756VRLWobr4Jj4K1mt9EduaM2bVwwsufV5fE%2FQ9x%2BIHHcX8wW1IJiILobrCjdmLvYz%2FeYgOR7rsHilSS0lrRQXVu3U%2F49yzi8orrAvPJSWwgcGhwhCXx%2BEML%2FIvcAGOqUBJAM9QQrbL4ZnH82Q6kAHRR7e7i%2BRQgut%2FeXzqEVdijnIE3y8DYx%2FIA6xhfWzBMQuUoFqW48imHTemafVC7F5%2BcXnEI6y0gA0sOngIx4n6cahBhO%2FTRfKtjV%2FXCzwyhjkxmGtiYUpN1X3e37lzNzTG04Xvxe1RIKV%2BtSf0KYMa%2FnCyBwGG9ZueG3zLRQxsPgPrWDgLf6WDpNq2XcEkBBD%2Fvme4CEf&X-Amz-Signature=8060cad6f7fa015dc9e69f31568f295d19a72764a299a1543ed5203decc5d3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAWPESN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9%2FpRQATnmb%2Fvggu9YuFX80dxYoRUhJWQCjM%2BgdkZLIAiEA6HUmBd6tz0uMMh1iVdatXiIJ9mZfkvss%2BXkoRQlEpmEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOre5kjM61HEq0G37ircA9MvYNGtdwkRzxeoTH5GltbLDKC6Hw1smDzKpBGqdiwMRpmXVZTw2LqacQzYtKymxZNvGfpRVnbjzpyPs%2Fqd6%2F3zVxijgAn8E19gBmE%2FtRysTcElX39RYB3pI8aB5QLBWyA6Lm2%2BzkozeeIwlJCbCf62zYnEZEy%2B0MrT3xkki%2F3rmKxFw16SUHIppw7eoCOvlx8SXpthA5ekCsl83PoxqUR7sQxlJS%2B6n3uYW72pMjPqNlzubysZ5%2BMv%2BDtgxx6TPh0w1y29tUnLrX7re9uaMr7l1QxB5q2I11%2BmYOiR68EDIlZl8MIsPT4fOHrtwH7sK9Pb3h6JNPDeXp%2FhTNdn3oIMKKXKBHrczbM6nZx%2F%2Br6o6WNEQIhQCQRHjpVwiyDgJEBxEwP%2FfRXmVDp6hInJaJrjrr7EOeykZQ427zLVXEcGItG5sLBgNz52ws4U2zXi73OqV0%2BSMFjZahUnRXQIbF6YpHNr1EjAlPCebfIs9U0vCmn%2FwEcoP1FprW3JLoZf6jJuZm756VRLWobr4Jj4K1mt9EduaM2bVwwsufV5fE%2FQ9x%2BIHHcX8wW1IJiILobrCjdmLvYz%2FeYgOR7rsHilSS0lrRQXVu3U%2F49yzi8orrAvPJSWwgcGhwhCXx%2BEML%2FIvcAGOqUBJAM9QQrbL4ZnH82Q6kAHRR7e7i%2BRQgut%2FeXzqEVdijnIE3y8DYx%2FIA6xhfWzBMQuUoFqW48imHTemafVC7F5%2BcXnEI6y0gA0sOngIx4n6cahBhO%2FTRfKtjV%2FXCzwyhjkxmGtiYUpN1X3e37lzNzTG04Xvxe1RIKV%2BtSf0KYMa%2FnCyBwGG9ZueG3zLRQxsPgPrWDgLf6WDpNq2XcEkBBD%2Fvme4CEf&X-Amz-Signature=350da5a2bb4d402b8b45eb2ccedc01cb4b9de0e98f52b343a222ebc7fd8dce2c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAWPESN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9%2FpRQATnmb%2Fvggu9YuFX80dxYoRUhJWQCjM%2BgdkZLIAiEA6HUmBd6tz0uMMh1iVdatXiIJ9mZfkvss%2BXkoRQlEpmEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOre5kjM61HEq0G37ircA9MvYNGtdwkRzxeoTH5GltbLDKC6Hw1smDzKpBGqdiwMRpmXVZTw2LqacQzYtKymxZNvGfpRVnbjzpyPs%2Fqd6%2F3zVxijgAn8E19gBmE%2FtRysTcElX39RYB3pI8aB5QLBWyA6Lm2%2BzkozeeIwlJCbCf62zYnEZEy%2B0MrT3xkki%2F3rmKxFw16SUHIppw7eoCOvlx8SXpthA5ekCsl83PoxqUR7sQxlJS%2B6n3uYW72pMjPqNlzubysZ5%2BMv%2BDtgxx6TPh0w1y29tUnLrX7re9uaMr7l1QxB5q2I11%2BmYOiR68EDIlZl8MIsPT4fOHrtwH7sK9Pb3h6JNPDeXp%2FhTNdn3oIMKKXKBHrczbM6nZx%2F%2Br6o6WNEQIhQCQRHjpVwiyDgJEBxEwP%2FfRXmVDp6hInJaJrjrr7EOeykZQ427zLVXEcGItG5sLBgNz52ws4U2zXi73OqV0%2BSMFjZahUnRXQIbF6YpHNr1EjAlPCebfIs9U0vCmn%2FwEcoP1FprW3JLoZf6jJuZm756VRLWobr4Jj4K1mt9EduaM2bVwwsufV5fE%2FQ9x%2BIHHcX8wW1IJiILobrCjdmLvYz%2FeYgOR7rsHilSS0lrRQXVu3U%2F49yzi8orrAvPJSWwgcGhwhCXx%2BEML%2FIvcAGOqUBJAM9QQrbL4ZnH82Q6kAHRR7e7i%2BRQgut%2FeXzqEVdijnIE3y8DYx%2FIA6xhfWzBMQuUoFqW48imHTemafVC7F5%2BcXnEI6y0gA0sOngIx4n6cahBhO%2FTRfKtjV%2FXCzwyhjkxmGtiYUpN1X3e37lzNzTG04Xvxe1RIKV%2BtSf0KYMa%2FnCyBwGG9ZueG3zLRQxsPgPrWDgLf6WDpNq2XcEkBBD%2Fvme4CEf&X-Amz-Signature=59016f580534340da688089c5d23bb8d52cc663128c70a593717df44c2b6520e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAWPESN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9%2FpRQATnmb%2Fvggu9YuFX80dxYoRUhJWQCjM%2BgdkZLIAiEA6HUmBd6tz0uMMh1iVdatXiIJ9mZfkvss%2BXkoRQlEpmEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOre5kjM61HEq0G37ircA9MvYNGtdwkRzxeoTH5GltbLDKC6Hw1smDzKpBGqdiwMRpmXVZTw2LqacQzYtKymxZNvGfpRVnbjzpyPs%2Fqd6%2F3zVxijgAn8E19gBmE%2FtRysTcElX39RYB3pI8aB5QLBWyA6Lm2%2BzkozeeIwlJCbCf62zYnEZEy%2B0MrT3xkki%2F3rmKxFw16SUHIppw7eoCOvlx8SXpthA5ekCsl83PoxqUR7sQxlJS%2B6n3uYW72pMjPqNlzubysZ5%2BMv%2BDtgxx6TPh0w1y29tUnLrX7re9uaMr7l1QxB5q2I11%2BmYOiR68EDIlZl8MIsPT4fOHrtwH7sK9Pb3h6JNPDeXp%2FhTNdn3oIMKKXKBHrczbM6nZx%2F%2Br6o6WNEQIhQCQRHjpVwiyDgJEBxEwP%2FfRXmVDp6hInJaJrjrr7EOeykZQ427zLVXEcGItG5sLBgNz52ws4U2zXi73OqV0%2BSMFjZahUnRXQIbF6YpHNr1EjAlPCebfIs9U0vCmn%2FwEcoP1FprW3JLoZf6jJuZm756VRLWobr4Jj4K1mt9EduaM2bVwwsufV5fE%2FQ9x%2BIHHcX8wW1IJiILobrCjdmLvYz%2FeYgOR7rsHilSS0lrRQXVu3U%2F49yzi8orrAvPJSWwgcGhwhCXx%2BEML%2FIvcAGOqUBJAM9QQrbL4ZnH82Q6kAHRR7e7i%2BRQgut%2FeXzqEVdijnIE3y8DYx%2FIA6xhfWzBMQuUoFqW48imHTemafVC7F5%2BcXnEI6y0gA0sOngIx4n6cahBhO%2FTRfKtjV%2FXCzwyhjkxmGtiYUpN1X3e37lzNzTG04Xvxe1RIKV%2BtSf0KYMa%2FnCyBwGG9ZueG3zLRQxsPgPrWDgLf6WDpNq2XcEkBBD%2Fvme4CEf&X-Amz-Signature=ab9473fd2aad84e4f7d5c61c60eba662b75ee85ecd75622f66aaf35c70261938&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
