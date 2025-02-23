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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRJVIYO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1J8tU%2Frq49mYzqmf7L9HRfzVx32ccaBkigDylL4ztpAiBtsQbjuDOjTu5TgDUgqFM2XxCVJro%2BZdoUe0DujP9Whyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSWNlWQjt4VgtXRsaKtwDSEO5Al%2BW6olWzTjv2oeYfYmDIEaIoGBL5xija2vl6lXmDhbcNKOM8ANisWLP0oFE9LqWWxZG%2Fal2mVoxNGeliUEyLgsJSF1vWkwIGBTFTu%2Ba7W90y1IRL3RK7tz5RwUN9Zu2AAVPzcCOHtopnAGWX%2BxmpMp%2BZkByyj9j9PanUxMys%2F4mHumsWm%2FKQ8NLVclnLXV%2BKs8wkIbbxgB%2BABXAtwC8nsQtAQPnBIP%2Bc28RLYjK7%2Fno2iq36uQxGb%2B98Sz37r93B5MvwEmOEVfWWCW3QCH%2F6FNTaUez8YcrXp0bC4Z4OIaGJPL%2BtfUHbRhJ%2BlL%2BNaeyp8uMs40DWAZ9WcYZ%2FzrdWe9IVNH6uKSFB2hHaR%2BvrqiGOkFBtC6Ej6A5yiwHvjm8JAste00N8K7USM7N3kKOOXoGWpEyL87HvBvp5v77SGg3%2BfOqLvTjeDcX8L3s0Asm3rupGgPooFImkE8BSabLqGBb4A%2BpIpm8L1w4tP1%2FHpZfJtTrUYO7Mmhc%2FP0RaU0yBh8DZ3rFAXYszIfmomAEMWfxI%2BogvEU5BXQIVXBAbljS85HYVRbfT22CwE487%2B%2BFUHVVPgjZ1pqbnTx6TKxy2QtIrorupLbHOPeJhfVKcX3hpR569xRYPX4w36PrvQY6pgF75w4gFvlXzMIlPoH4sIOJMI8cQXP2aFQjhI6GN0Eub0AkKKCrcRJnsXB%2BcjHozl0T9wojesmH1CtiWp%2FkAPWB5UzGybeJCKrjiSo64FNrE4JZPwUW3Ll6tY4LRq1otJdLhRsE3hzoetbJ7v8p5hBIdSfiBakhWWKUSZhU9SoRRN3Qto9aeBa1mQOrR3NQgZCo0DpEPr7%2Fi3HCIpFdNKwvkpE3PfUT&X-Amz-Signature=c71c13e4a11c17bbdce5683437fd4a0aa0a844a6039ab72162d5d5a79e464d84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRJVIYO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1J8tU%2Frq49mYzqmf7L9HRfzVx32ccaBkigDylL4ztpAiBtsQbjuDOjTu5TgDUgqFM2XxCVJro%2BZdoUe0DujP9Whyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSWNlWQjt4VgtXRsaKtwDSEO5Al%2BW6olWzTjv2oeYfYmDIEaIoGBL5xija2vl6lXmDhbcNKOM8ANisWLP0oFE9LqWWxZG%2Fal2mVoxNGeliUEyLgsJSF1vWkwIGBTFTu%2Ba7W90y1IRL3RK7tz5RwUN9Zu2AAVPzcCOHtopnAGWX%2BxmpMp%2BZkByyj9j9PanUxMys%2F4mHumsWm%2FKQ8NLVclnLXV%2BKs8wkIbbxgB%2BABXAtwC8nsQtAQPnBIP%2Bc28RLYjK7%2Fno2iq36uQxGb%2B98Sz37r93B5MvwEmOEVfWWCW3QCH%2F6FNTaUez8YcrXp0bC4Z4OIaGJPL%2BtfUHbRhJ%2BlL%2BNaeyp8uMs40DWAZ9WcYZ%2FzrdWe9IVNH6uKSFB2hHaR%2BvrqiGOkFBtC6Ej6A5yiwHvjm8JAste00N8K7USM7N3kKOOXoGWpEyL87HvBvp5v77SGg3%2BfOqLvTjeDcX8L3s0Asm3rupGgPooFImkE8BSabLqGBb4A%2BpIpm8L1w4tP1%2FHpZfJtTrUYO7Mmhc%2FP0RaU0yBh8DZ3rFAXYszIfmomAEMWfxI%2BogvEU5BXQIVXBAbljS85HYVRbfT22CwE487%2B%2BFUHVVPgjZ1pqbnTx6TKxy2QtIrorupLbHOPeJhfVKcX3hpR569xRYPX4w36PrvQY6pgF75w4gFvlXzMIlPoH4sIOJMI8cQXP2aFQjhI6GN0Eub0AkKKCrcRJnsXB%2BcjHozl0T9wojesmH1CtiWp%2FkAPWB5UzGybeJCKrjiSo64FNrE4JZPwUW3Ll6tY4LRq1otJdLhRsE3hzoetbJ7v8p5hBIdSfiBakhWWKUSZhU9SoRRN3Qto9aeBa1mQOrR3NQgZCo0DpEPr7%2Fi3HCIpFdNKwvkpE3PfUT&X-Amz-Signature=9d663f7bc0c4a5d568d7c6f324ebac5e2d092ac1e8dce49586b18e4ccfc328d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRJVIYO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1J8tU%2Frq49mYzqmf7L9HRfzVx32ccaBkigDylL4ztpAiBtsQbjuDOjTu5TgDUgqFM2XxCVJro%2BZdoUe0DujP9Whyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSWNlWQjt4VgtXRsaKtwDSEO5Al%2BW6olWzTjv2oeYfYmDIEaIoGBL5xija2vl6lXmDhbcNKOM8ANisWLP0oFE9LqWWxZG%2Fal2mVoxNGeliUEyLgsJSF1vWkwIGBTFTu%2Ba7W90y1IRL3RK7tz5RwUN9Zu2AAVPzcCOHtopnAGWX%2BxmpMp%2BZkByyj9j9PanUxMys%2F4mHumsWm%2FKQ8NLVclnLXV%2BKs8wkIbbxgB%2BABXAtwC8nsQtAQPnBIP%2Bc28RLYjK7%2Fno2iq36uQxGb%2B98Sz37r93B5MvwEmOEVfWWCW3QCH%2F6FNTaUez8YcrXp0bC4Z4OIaGJPL%2BtfUHbRhJ%2BlL%2BNaeyp8uMs40DWAZ9WcYZ%2FzrdWe9IVNH6uKSFB2hHaR%2BvrqiGOkFBtC6Ej6A5yiwHvjm8JAste00N8K7USM7N3kKOOXoGWpEyL87HvBvp5v77SGg3%2BfOqLvTjeDcX8L3s0Asm3rupGgPooFImkE8BSabLqGBb4A%2BpIpm8L1w4tP1%2FHpZfJtTrUYO7Mmhc%2FP0RaU0yBh8DZ3rFAXYszIfmomAEMWfxI%2BogvEU5BXQIVXBAbljS85HYVRbfT22CwE487%2B%2BFUHVVPgjZ1pqbnTx6TKxy2QtIrorupLbHOPeJhfVKcX3hpR569xRYPX4w36PrvQY6pgF75w4gFvlXzMIlPoH4sIOJMI8cQXP2aFQjhI6GN0Eub0AkKKCrcRJnsXB%2BcjHozl0T9wojesmH1CtiWp%2FkAPWB5UzGybeJCKrjiSo64FNrE4JZPwUW3Ll6tY4LRq1otJdLhRsE3hzoetbJ7v8p5hBIdSfiBakhWWKUSZhU9SoRRN3Qto9aeBa1mQOrR3NQgZCo0DpEPr7%2Fi3HCIpFdNKwvkpE3PfUT&X-Amz-Signature=9cb63c4b5d46f70c6fba26da41df27402a611acbc0b3cc45be68451db40cc949&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRJVIYO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1J8tU%2Frq49mYzqmf7L9HRfzVx32ccaBkigDylL4ztpAiBtsQbjuDOjTu5TgDUgqFM2XxCVJro%2BZdoUe0DujP9Whyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSWNlWQjt4VgtXRsaKtwDSEO5Al%2BW6olWzTjv2oeYfYmDIEaIoGBL5xija2vl6lXmDhbcNKOM8ANisWLP0oFE9LqWWxZG%2Fal2mVoxNGeliUEyLgsJSF1vWkwIGBTFTu%2Ba7W90y1IRL3RK7tz5RwUN9Zu2AAVPzcCOHtopnAGWX%2BxmpMp%2BZkByyj9j9PanUxMys%2F4mHumsWm%2FKQ8NLVclnLXV%2BKs8wkIbbxgB%2BABXAtwC8nsQtAQPnBIP%2Bc28RLYjK7%2Fno2iq36uQxGb%2B98Sz37r93B5MvwEmOEVfWWCW3QCH%2F6FNTaUez8YcrXp0bC4Z4OIaGJPL%2BtfUHbRhJ%2BlL%2BNaeyp8uMs40DWAZ9WcYZ%2FzrdWe9IVNH6uKSFB2hHaR%2BvrqiGOkFBtC6Ej6A5yiwHvjm8JAste00N8K7USM7N3kKOOXoGWpEyL87HvBvp5v77SGg3%2BfOqLvTjeDcX8L3s0Asm3rupGgPooFImkE8BSabLqGBb4A%2BpIpm8L1w4tP1%2FHpZfJtTrUYO7Mmhc%2FP0RaU0yBh8DZ3rFAXYszIfmomAEMWfxI%2BogvEU5BXQIVXBAbljS85HYVRbfT22CwE487%2B%2BFUHVVPgjZ1pqbnTx6TKxy2QtIrorupLbHOPeJhfVKcX3hpR569xRYPX4w36PrvQY6pgF75w4gFvlXzMIlPoH4sIOJMI8cQXP2aFQjhI6GN0Eub0AkKKCrcRJnsXB%2BcjHozl0T9wojesmH1CtiWp%2FkAPWB5UzGybeJCKrjiSo64FNrE4JZPwUW3Ll6tY4LRq1otJdLhRsE3hzoetbJ7v8p5hBIdSfiBakhWWKUSZhU9SoRRN3Qto9aeBa1mQOrR3NQgZCo0DpEPr7%2Fi3HCIpFdNKwvkpE3PfUT&X-Amz-Signature=45b671b9070b1e83193d57c69907e3bd507312c9ad6e8491c25b2779df4cba5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRJVIYO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1J8tU%2Frq49mYzqmf7L9HRfzVx32ccaBkigDylL4ztpAiBtsQbjuDOjTu5TgDUgqFM2XxCVJro%2BZdoUe0DujP9Whyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSWNlWQjt4VgtXRsaKtwDSEO5Al%2BW6olWzTjv2oeYfYmDIEaIoGBL5xija2vl6lXmDhbcNKOM8ANisWLP0oFE9LqWWxZG%2Fal2mVoxNGeliUEyLgsJSF1vWkwIGBTFTu%2Ba7W90y1IRL3RK7tz5RwUN9Zu2AAVPzcCOHtopnAGWX%2BxmpMp%2BZkByyj9j9PanUxMys%2F4mHumsWm%2FKQ8NLVclnLXV%2BKs8wkIbbxgB%2BABXAtwC8nsQtAQPnBIP%2Bc28RLYjK7%2Fno2iq36uQxGb%2B98Sz37r93B5MvwEmOEVfWWCW3QCH%2F6FNTaUez8YcrXp0bC4Z4OIaGJPL%2BtfUHbRhJ%2BlL%2BNaeyp8uMs40DWAZ9WcYZ%2FzrdWe9IVNH6uKSFB2hHaR%2BvrqiGOkFBtC6Ej6A5yiwHvjm8JAste00N8K7USM7N3kKOOXoGWpEyL87HvBvp5v77SGg3%2BfOqLvTjeDcX8L3s0Asm3rupGgPooFImkE8BSabLqGBb4A%2BpIpm8L1w4tP1%2FHpZfJtTrUYO7Mmhc%2FP0RaU0yBh8DZ3rFAXYszIfmomAEMWfxI%2BogvEU5BXQIVXBAbljS85HYVRbfT22CwE487%2B%2BFUHVVPgjZ1pqbnTx6TKxy2QtIrorupLbHOPeJhfVKcX3hpR569xRYPX4w36PrvQY6pgF75w4gFvlXzMIlPoH4sIOJMI8cQXP2aFQjhI6GN0Eub0AkKKCrcRJnsXB%2BcjHozl0T9wojesmH1CtiWp%2FkAPWB5UzGybeJCKrjiSo64FNrE4JZPwUW3Ll6tY4LRq1otJdLhRsE3hzoetbJ7v8p5hBIdSfiBakhWWKUSZhU9SoRRN3Qto9aeBa1mQOrR3NQgZCo0DpEPr7%2Fi3HCIpFdNKwvkpE3PfUT&X-Amz-Signature=7f255822d8e475d22cdae30f223f54eca3d35f85c7b5557baf7f0fdf15634163&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRJVIYO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1J8tU%2Frq49mYzqmf7L9HRfzVx32ccaBkigDylL4ztpAiBtsQbjuDOjTu5TgDUgqFM2XxCVJro%2BZdoUe0DujP9Whyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSWNlWQjt4VgtXRsaKtwDSEO5Al%2BW6olWzTjv2oeYfYmDIEaIoGBL5xija2vl6lXmDhbcNKOM8ANisWLP0oFE9LqWWxZG%2Fal2mVoxNGeliUEyLgsJSF1vWkwIGBTFTu%2Ba7W90y1IRL3RK7tz5RwUN9Zu2AAVPzcCOHtopnAGWX%2BxmpMp%2BZkByyj9j9PanUxMys%2F4mHumsWm%2FKQ8NLVclnLXV%2BKs8wkIbbxgB%2BABXAtwC8nsQtAQPnBIP%2Bc28RLYjK7%2Fno2iq36uQxGb%2B98Sz37r93B5MvwEmOEVfWWCW3QCH%2F6FNTaUez8YcrXp0bC4Z4OIaGJPL%2BtfUHbRhJ%2BlL%2BNaeyp8uMs40DWAZ9WcYZ%2FzrdWe9IVNH6uKSFB2hHaR%2BvrqiGOkFBtC6Ej6A5yiwHvjm8JAste00N8K7USM7N3kKOOXoGWpEyL87HvBvp5v77SGg3%2BfOqLvTjeDcX8L3s0Asm3rupGgPooFImkE8BSabLqGBb4A%2BpIpm8L1w4tP1%2FHpZfJtTrUYO7Mmhc%2FP0RaU0yBh8DZ3rFAXYszIfmomAEMWfxI%2BogvEU5BXQIVXBAbljS85HYVRbfT22CwE487%2B%2BFUHVVPgjZ1pqbnTx6TKxy2QtIrorupLbHOPeJhfVKcX3hpR569xRYPX4w36PrvQY6pgF75w4gFvlXzMIlPoH4sIOJMI8cQXP2aFQjhI6GN0Eub0AkKKCrcRJnsXB%2BcjHozl0T9wojesmH1CtiWp%2FkAPWB5UzGybeJCKrjiSo64FNrE4JZPwUW3Ll6tY4LRq1otJdLhRsE3hzoetbJ7v8p5hBIdSfiBakhWWKUSZhU9SoRRN3Qto9aeBa1mQOrR3NQgZCo0DpEPr7%2Fi3HCIpFdNKwvkpE3PfUT&X-Amz-Signature=e4ce1683800f321c32c6c8295d18faa1bddf1a03eae7e249ffb158730a769523&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRJVIYO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1J8tU%2Frq49mYzqmf7L9HRfzVx32ccaBkigDylL4ztpAiBtsQbjuDOjTu5TgDUgqFM2XxCVJro%2BZdoUe0DujP9Whyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSWNlWQjt4VgtXRsaKtwDSEO5Al%2BW6olWzTjv2oeYfYmDIEaIoGBL5xija2vl6lXmDhbcNKOM8ANisWLP0oFE9LqWWxZG%2Fal2mVoxNGeliUEyLgsJSF1vWkwIGBTFTu%2Ba7W90y1IRL3RK7tz5RwUN9Zu2AAVPzcCOHtopnAGWX%2BxmpMp%2BZkByyj9j9PanUxMys%2F4mHumsWm%2FKQ8NLVclnLXV%2BKs8wkIbbxgB%2BABXAtwC8nsQtAQPnBIP%2Bc28RLYjK7%2Fno2iq36uQxGb%2B98Sz37r93B5MvwEmOEVfWWCW3QCH%2F6FNTaUez8YcrXp0bC4Z4OIaGJPL%2BtfUHbRhJ%2BlL%2BNaeyp8uMs40DWAZ9WcYZ%2FzrdWe9IVNH6uKSFB2hHaR%2BvrqiGOkFBtC6Ej6A5yiwHvjm8JAste00N8K7USM7N3kKOOXoGWpEyL87HvBvp5v77SGg3%2BfOqLvTjeDcX8L3s0Asm3rupGgPooFImkE8BSabLqGBb4A%2BpIpm8L1w4tP1%2FHpZfJtTrUYO7Mmhc%2FP0RaU0yBh8DZ3rFAXYszIfmomAEMWfxI%2BogvEU5BXQIVXBAbljS85HYVRbfT22CwE487%2B%2BFUHVVPgjZ1pqbnTx6TKxy2QtIrorupLbHOPeJhfVKcX3hpR569xRYPX4w36PrvQY6pgF75w4gFvlXzMIlPoH4sIOJMI8cQXP2aFQjhI6GN0Eub0AkKKCrcRJnsXB%2BcjHozl0T9wojesmH1CtiWp%2FkAPWB5UzGybeJCKrjiSo64FNrE4JZPwUW3Ll6tY4LRq1otJdLhRsE3hzoetbJ7v8p5hBIdSfiBakhWWKUSZhU9SoRRN3Qto9aeBa1mQOrR3NQgZCo0DpEPr7%2Fi3HCIpFdNKwvkpE3PfUT&X-Amz-Signature=c9de50e3bab23ec7707bd3dc317104802d59d511865a0649749656357936bad4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
