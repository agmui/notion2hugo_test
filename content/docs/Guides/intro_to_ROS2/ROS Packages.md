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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER2AXZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEs71gMMY9t52ktzb%2Fu0a7C88jUxFLEdZNtTE0tACnogIhALbj1D2WNwXl4E5SH5XD5JaVthpbMl58VNRh3OOgVBMGKv8DCH8QABoMNjM3NDIzMTgzODA1IgzQO4oT9GCsMDN0n3oq3APRUiEkuUKNQyocCJ2%2BvNoszEDOR6h4pd0d76iIu2QJwQA0%2B70fDSvpO9lLd9lu4%2BCY%2BHiSYQnUqfabyBOkXzQ6lTtzpGZxPsfcLqWesSase9kpLXW%2B%2BS1%2FbhhrXHkOqhow%2BW5BwI8mFf6ZRrZ5gBA2iBO4whPmMWmT6V%2F4D8A4UnXHLbVJmR1VT9nAeGowbEu1HU0bsPPsgfzR5MO3Q24toAgeWuyNhIBSwj6tosVn%2FCTHRMHyn8%2BV22dxdqVL2weu8pxx31ZvRBDvc%2BOQmZ%2FzfK4WMYUxFKgmk2aeqNrZUEOpTkgzDO%2BAOwLs%2BgxohMdj8BHQqMGrHRiyRNz8oX9t6YSXqBtsnolagJIxKoGJimvKtpghEB1KXgURugvx4ApufDn%2FY6JbdjlpIVCWzO4seA4f0dZuVLMgy5UNW8iTD6Kfp0SKiDPzibxoLQlXWbpyisVNZ9lQyPrkvJ%2BWgGwwSWHfE75UniBY0Xkrh%2BACKg5aUMRQuZlDspEaCZ%2BDkpMfQigvG7TxnmFp%2F5KmJX9coS0KyMZytCQKU8ln3r78em6d45pgf%2BDiV38ch3RW5mHVNVnmk6CqEZXJeQHN10ZPKB3Ptecwm%2BOwIlb9AREksx1d1cdo1liZXYAN3zDU7L%2FABjqkAc%2FDoJvI7FgaFImmfL3ThZVvLT8l1GBvGrWTk5snQhencYZXohXogVePaV%2BaAUa38v2F5LJKZfn1vRqzsIg1hQiL%2BvvUdiDy3ZvgysYts%2FzGceVGYalEEf2S2bbvwo90WBLMISWnErSKZq74lpdKhcIIJV3yvQQeIVQyRaJ7zhx%2BTSnsBNttD3W9He7cRLadY6hMIUca2lKLib1oLWNnBtY9J0O6&X-Amz-Signature=93e2c74b4f9511cacbb6e88f908c2fa53e380d07a09c87a12cb4077a6218e777&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER2AXZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEs71gMMY9t52ktzb%2Fu0a7C88jUxFLEdZNtTE0tACnogIhALbj1D2WNwXl4E5SH5XD5JaVthpbMl58VNRh3OOgVBMGKv8DCH8QABoMNjM3NDIzMTgzODA1IgzQO4oT9GCsMDN0n3oq3APRUiEkuUKNQyocCJ2%2BvNoszEDOR6h4pd0d76iIu2QJwQA0%2B70fDSvpO9lLd9lu4%2BCY%2BHiSYQnUqfabyBOkXzQ6lTtzpGZxPsfcLqWesSase9kpLXW%2B%2BS1%2FbhhrXHkOqhow%2BW5BwI8mFf6ZRrZ5gBA2iBO4whPmMWmT6V%2F4D8A4UnXHLbVJmR1VT9nAeGowbEu1HU0bsPPsgfzR5MO3Q24toAgeWuyNhIBSwj6tosVn%2FCTHRMHyn8%2BV22dxdqVL2weu8pxx31ZvRBDvc%2BOQmZ%2FzfK4WMYUxFKgmk2aeqNrZUEOpTkgzDO%2BAOwLs%2BgxohMdj8BHQqMGrHRiyRNz8oX9t6YSXqBtsnolagJIxKoGJimvKtpghEB1KXgURugvx4ApufDn%2FY6JbdjlpIVCWzO4seA4f0dZuVLMgy5UNW8iTD6Kfp0SKiDPzibxoLQlXWbpyisVNZ9lQyPrkvJ%2BWgGwwSWHfE75UniBY0Xkrh%2BACKg5aUMRQuZlDspEaCZ%2BDkpMfQigvG7TxnmFp%2F5KmJX9coS0KyMZytCQKU8ln3r78em6d45pgf%2BDiV38ch3RW5mHVNVnmk6CqEZXJeQHN10ZPKB3Ptecwm%2BOwIlb9AREksx1d1cdo1liZXYAN3zDU7L%2FABjqkAc%2FDoJvI7FgaFImmfL3ThZVvLT8l1GBvGrWTk5snQhencYZXohXogVePaV%2BaAUa38v2F5LJKZfn1vRqzsIg1hQiL%2BvvUdiDy3ZvgysYts%2FzGceVGYalEEf2S2bbvwo90WBLMISWnErSKZq74lpdKhcIIJV3yvQQeIVQyRaJ7zhx%2BTSnsBNttD3W9He7cRLadY6hMIUca2lKLib1oLWNnBtY9J0O6&X-Amz-Signature=47794506df2043a4f96bc9dba71a264f1946f5d39596f9ec356e558eb6ac233a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER2AXZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEs71gMMY9t52ktzb%2Fu0a7C88jUxFLEdZNtTE0tACnogIhALbj1D2WNwXl4E5SH5XD5JaVthpbMl58VNRh3OOgVBMGKv8DCH8QABoMNjM3NDIzMTgzODA1IgzQO4oT9GCsMDN0n3oq3APRUiEkuUKNQyocCJ2%2BvNoszEDOR6h4pd0d76iIu2QJwQA0%2B70fDSvpO9lLd9lu4%2BCY%2BHiSYQnUqfabyBOkXzQ6lTtzpGZxPsfcLqWesSase9kpLXW%2B%2BS1%2FbhhrXHkOqhow%2BW5BwI8mFf6ZRrZ5gBA2iBO4whPmMWmT6V%2F4D8A4UnXHLbVJmR1VT9nAeGowbEu1HU0bsPPsgfzR5MO3Q24toAgeWuyNhIBSwj6tosVn%2FCTHRMHyn8%2BV22dxdqVL2weu8pxx31ZvRBDvc%2BOQmZ%2FzfK4WMYUxFKgmk2aeqNrZUEOpTkgzDO%2BAOwLs%2BgxohMdj8BHQqMGrHRiyRNz8oX9t6YSXqBtsnolagJIxKoGJimvKtpghEB1KXgURugvx4ApufDn%2FY6JbdjlpIVCWzO4seA4f0dZuVLMgy5UNW8iTD6Kfp0SKiDPzibxoLQlXWbpyisVNZ9lQyPrkvJ%2BWgGwwSWHfE75UniBY0Xkrh%2BACKg5aUMRQuZlDspEaCZ%2BDkpMfQigvG7TxnmFp%2F5KmJX9coS0KyMZytCQKU8ln3r78em6d45pgf%2BDiV38ch3RW5mHVNVnmk6CqEZXJeQHN10ZPKB3Ptecwm%2BOwIlb9AREksx1d1cdo1liZXYAN3zDU7L%2FABjqkAc%2FDoJvI7FgaFImmfL3ThZVvLT8l1GBvGrWTk5snQhencYZXohXogVePaV%2BaAUa38v2F5LJKZfn1vRqzsIg1hQiL%2BvvUdiDy3ZvgysYts%2FzGceVGYalEEf2S2bbvwo90WBLMISWnErSKZq74lpdKhcIIJV3yvQQeIVQyRaJ7zhx%2BTSnsBNttD3W9He7cRLadY6hMIUca2lKLib1oLWNnBtY9J0O6&X-Amz-Signature=11a5ee231432e1a2f854ccd5d3cc42c3789b1bd8430dc85a11ba8f1fa6a611fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER2AXZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEs71gMMY9t52ktzb%2Fu0a7C88jUxFLEdZNtTE0tACnogIhALbj1D2WNwXl4E5SH5XD5JaVthpbMl58VNRh3OOgVBMGKv8DCH8QABoMNjM3NDIzMTgzODA1IgzQO4oT9GCsMDN0n3oq3APRUiEkuUKNQyocCJ2%2BvNoszEDOR6h4pd0d76iIu2QJwQA0%2B70fDSvpO9lLd9lu4%2BCY%2BHiSYQnUqfabyBOkXzQ6lTtzpGZxPsfcLqWesSase9kpLXW%2B%2BS1%2FbhhrXHkOqhow%2BW5BwI8mFf6ZRrZ5gBA2iBO4whPmMWmT6V%2F4D8A4UnXHLbVJmR1VT9nAeGowbEu1HU0bsPPsgfzR5MO3Q24toAgeWuyNhIBSwj6tosVn%2FCTHRMHyn8%2BV22dxdqVL2weu8pxx31ZvRBDvc%2BOQmZ%2FzfK4WMYUxFKgmk2aeqNrZUEOpTkgzDO%2BAOwLs%2BgxohMdj8BHQqMGrHRiyRNz8oX9t6YSXqBtsnolagJIxKoGJimvKtpghEB1KXgURugvx4ApufDn%2FY6JbdjlpIVCWzO4seA4f0dZuVLMgy5UNW8iTD6Kfp0SKiDPzibxoLQlXWbpyisVNZ9lQyPrkvJ%2BWgGwwSWHfE75UniBY0Xkrh%2BACKg5aUMRQuZlDspEaCZ%2BDkpMfQigvG7TxnmFp%2F5KmJX9coS0KyMZytCQKU8ln3r78em6d45pgf%2BDiV38ch3RW5mHVNVnmk6CqEZXJeQHN10ZPKB3Ptecwm%2BOwIlb9AREksx1d1cdo1liZXYAN3zDU7L%2FABjqkAc%2FDoJvI7FgaFImmfL3ThZVvLT8l1GBvGrWTk5snQhencYZXohXogVePaV%2BaAUa38v2F5LJKZfn1vRqzsIg1hQiL%2BvvUdiDy3ZvgysYts%2FzGceVGYalEEf2S2bbvwo90WBLMISWnErSKZq74lpdKhcIIJV3yvQQeIVQyRaJ7zhx%2BTSnsBNttD3W9He7cRLadY6hMIUca2lKLib1oLWNnBtY9J0O6&X-Amz-Signature=e9355d5b0798589ca018d2456edea4a38cbc8298ba7575f8aba30637bad5de05&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER2AXZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEs71gMMY9t52ktzb%2Fu0a7C88jUxFLEdZNtTE0tACnogIhALbj1D2WNwXl4E5SH5XD5JaVthpbMl58VNRh3OOgVBMGKv8DCH8QABoMNjM3NDIzMTgzODA1IgzQO4oT9GCsMDN0n3oq3APRUiEkuUKNQyocCJ2%2BvNoszEDOR6h4pd0d76iIu2QJwQA0%2B70fDSvpO9lLd9lu4%2BCY%2BHiSYQnUqfabyBOkXzQ6lTtzpGZxPsfcLqWesSase9kpLXW%2B%2BS1%2FbhhrXHkOqhow%2BW5BwI8mFf6ZRrZ5gBA2iBO4whPmMWmT6V%2F4D8A4UnXHLbVJmR1VT9nAeGowbEu1HU0bsPPsgfzR5MO3Q24toAgeWuyNhIBSwj6tosVn%2FCTHRMHyn8%2BV22dxdqVL2weu8pxx31ZvRBDvc%2BOQmZ%2FzfK4WMYUxFKgmk2aeqNrZUEOpTkgzDO%2BAOwLs%2BgxohMdj8BHQqMGrHRiyRNz8oX9t6YSXqBtsnolagJIxKoGJimvKtpghEB1KXgURugvx4ApufDn%2FY6JbdjlpIVCWzO4seA4f0dZuVLMgy5UNW8iTD6Kfp0SKiDPzibxoLQlXWbpyisVNZ9lQyPrkvJ%2BWgGwwSWHfE75UniBY0Xkrh%2BACKg5aUMRQuZlDspEaCZ%2BDkpMfQigvG7TxnmFp%2F5KmJX9coS0KyMZytCQKU8ln3r78em6d45pgf%2BDiV38ch3RW5mHVNVnmk6CqEZXJeQHN10ZPKB3Ptecwm%2BOwIlb9AREksx1d1cdo1liZXYAN3zDU7L%2FABjqkAc%2FDoJvI7FgaFImmfL3ThZVvLT8l1GBvGrWTk5snQhencYZXohXogVePaV%2BaAUa38v2F5LJKZfn1vRqzsIg1hQiL%2BvvUdiDy3ZvgysYts%2FzGceVGYalEEf2S2bbvwo90WBLMISWnErSKZq74lpdKhcIIJV3yvQQeIVQyRaJ7zhx%2BTSnsBNttD3W9He7cRLadY6hMIUca2lKLib1oLWNnBtY9J0O6&X-Amz-Signature=5d6b0e288072ffa34de54f88bdd5b54ebaeed560083413527f271754271230e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER2AXZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEs71gMMY9t52ktzb%2Fu0a7C88jUxFLEdZNtTE0tACnogIhALbj1D2WNwXl4E5SH5XD5JaVthpbMl58VNRh3OOgVBMGKv8DCH8QABoMNjM3NDIzMTgzODA1IgzQO4oT9GCsMDN0n3oq3APRUiEkuUKNQyocCJ2%2BvNoszEDOR6h4pd0d76iIu2QJwQA0%2B70fDSvpO9lLd9lu4%2BCY%2BHiSYQnUqfabyBOkXzQ6lTtzpGZxPsfcLqWesSase9kpLXW%2B%2BS1%2FbhhrXHkOqhow%2BW5BwI8mFf6ZRrZ5gBA2iBO4whPmMWmT6V%2F4D8A4UnXHLbVJmR1VT9nAeGowbEu1HU0bsPPsgfzR5MO3Q24toAgeWuyNhIBSwj6tosVn%2FCTHRMHyn8%2BV22dxdqVL2weu8pxx31ZvRBDvc%2BOQmZ%2FzfK4WMYUxFKgmk2aeqNrZUEOpTkgzDO%2BAOwLs%2BgxohMdj8BHQqMGrHRiyRNz8oX9t6YSXqBtsnolagJIxKoGJimvKtpghEB1KXgURugvx4ApufDn%2FY6JbdjlpIVCWzO4seA4f0dZuVLMgy5UNW8iTD6Kfp0SKiDPzibxoLQlXWbpyisVNZ9lQyPrkvJ%2BWgGwwSWHfE75UniBY0Xkrh%2BACKg5aUMRQuZlDspEaCZ%2BDkpMfQigvG7TxnmFp%2F5KmJX9coS0KyMZytCQKU8ln3r78em6d45pgf%2BDiV38ch3RW5mHVNVnmk6CqEZXJeQHN10ZPKB3Ptecwm%2BOwIlb9AREksx1d1cdo1liZXYAN3zDU7L%2FABjqkAc%2FDoJvI7FgaFImmfL3ThZVvLT8l1GBvGrWTk5snQhencYZXohXogVePaV%2BaAUa38v2F5LJKZfn1vRqzsIg1hQiL%2BvvUdiDy3ZvgysYts%2FzGceVGYalEEf2S2bbvwo90WBLMISWnErSKZq74lpdKhcIIJV3yvQQeIVQyRaJ7zhx%2BTSnsBNttD3W9He7cRLadY6hMIUca2lKLib1oLWNnBtY9J0O6&X-Amz-Signature=21361ba56983a7e0e11ad1626531a5ac1d92f27069ae690dd10a841b9f5dcbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER2AXZB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEs71gMMY9t52ktzb%2Fu0a7C88jUxFLEdZNtTE0tACnogIhALbj1D2WNwXl4E5SH5XD5JaVthpbMl58VNRh3OOgVBMGKv8DCH8QABoMNjM3NDIzMTgzODA1IgzQO4oT9GCsMDN0n3oq3APRUiEkuUKNQyocCJ2%2BvNoszEDOR6h4pd0d76iIu2QJwQA0%2B70fDSvpO9lLd9lu4%2BCY%2BHiSYQnUqfabyBOkXzQ6lTtzpGZxPsfcLqWesSase9kpLXW%2B%2BS1%2FbhhrXHkOqhow%2BW5BwI8mFf6ZRrZ5gBA2iBO4whPmMWmT6V%2F4D8A4UnXHLbVJmR1VT9nAeGowbEu1HU0bsPPsgfzR5MO3Q24toAgeWuyNhIBSwj6tosVn%2FCTHRMHyn8%2BV22dxdqVL2weu8pxx31ZvRBDvc%2BOQmZ%2FzfK4WMYUxFKgmk2aeqNrZUEOpTkgzDO%2BAOwLs%2BgxohMdj8BHQqMGrHRiyRNz8oX9t6YSXqBtsnolagJIxKoGJimvKtpghEB1KXgURugvx4ApufDn%2FY6JbdjlpIVCWzO4seA4f0dZuVLMgy5UNW8iTD6Kfp0SKiDPzibxoLQlXWbpyisVNZ9lQyPrkvJ%2BWgGwwSWHfE75UniBY0Xkrh%2BACKg5aUMRQuZlDspEaCZ%2BDkpMfQigvG7TxnmFp%2F5KmJX9coS0KyMZytCQKU8ln3r78em6d45pgf%2BDiV38ch3RW5mHVNVnmk6CqEZXJeQHN10ZPKB3Ptecwm%2BOwIlb9AREksx1d1cdo1liZXYAN3zDU7L%2FABjqkAc%2FDoJvI7FgaFImmfL3ThZVvLT8l1GBvGrWTk5snQhencYZXohXogVePaV%2BaAUa38v2F5LJKZfn1vRqzsIg1hQiL%2BvvUdiDy3ZvgysYts%2FzGceVGYalEEf2S2bbvwo90WBLMISWnErSKZq74lpdKhcIIJV3yvQQeIVQyRaJ7zhx%2BTSnsBNttD3W9He7cRLadY6hMIUca2lKLib1oLWNnBtY9J0O6&X-Amz-Signature=2e273782b8a8353a4e2375d717119aea2fbd0a9d7706b97e2126ea223664ea56&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
