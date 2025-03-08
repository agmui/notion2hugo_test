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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWY4MW6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDTrmf8%2FylU2%2BZRaOGF%2Blps7E9cCA%2BC%2B1mLXlzSjr%2BB7AIhAOzK1oPinSbKfuibq1VmmM1QoxvGLsZ7Qt1QYkMzEXZSKv8DCFkQABoMNjM3NDIzMTgzODA1Igy2ICj6L%2FTPQELXEbUq3APHsqm1tWChcYSmYBXeitC2Q7kOPvDrBhKmcyEr75z%2FgKL3OABWTcFUEeMCWHJ2AzCOe9DHjf0tebLVaRNP%2B9Mm%2Fg%2Be%2Bt3kuTg%2Fp4MTN7gUeL1lzGCxm4%2BVt1z6PKe22%2BLfKhoDzkGZn4JZtGOH1zBy2vnixwNfor9GqVj5Nu%2Fy0s1w1FRWtfm%2FS75m5d4zXkuTvYKP5FIdYBwtPjQ1f%2F3%2Fs1z2Md8XbjlrESxDaBS%2BAokZLhKejwpqXYAg4XGUJOaFaFnwni9HH52P%2F5rlC0z5Oe33VGXQvJdWVPADDzdfjSBAru7lKNimZOw8OpO2g6UsZXgb%2FtmSIJiUjLt8M6uMEIiY4I3j1Kd2qIQ6nEgQqTMC1FNBnMvz5jQJO8h%2F4JuiLDXF%2B9QSffX8ym6YxFxjabeCFIc1Ju0XgvS1p%2FXyPUXO4rp%2FVDmhqzAlUFZZXom5fxcO7W7IIqydxfqyzc50BVlaE3KjJEXxqa6v3DFA5TpZn24Nk7LFZApy1jWI9rKgHrhgpYvKpncqZ%2FBLOpM2GN%2FMTdbUJ%2B5lufpho5p8YArxAydrGEV%2B2bz986%2Bzl8hNtbASL%2FxNRGumZWFxjlzqhzBDM3PlIBRy0JleUr8PtxM9QZstzp1VjzpZNzCI7a%2B%2BBjqkAe2gnC1EUhalhOuO0i0KKlchrJHr5qyL%2BbBb7qP1FgiJJo0iw0F4e7dBBFJFzHSoCVYGaWXpTpWsTCThwaEOywu4OkYY0zommRIRYodLaB4XcXks0XvCKxaUTzyyNIJaFk2KDqafyi%2BLY2Ce4iifmVKuWfvVkAq2DUEdxf7cU7uFOzQ0qx16gb79WoBhpwcMX2XDhm24diSO8oIPMQlePJf42qQW&X-Amz-Signature=d04ed2c2b352a8924b3b6ef83b58a7bc89235f67d0f58ea53b0daf7ed38cb634&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWY4MW6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDTrmf8%2FylU2%2BZRaOGF%2Blps7E9cCA%2BC%2B1mLXlzSjr%2BB7AIhAOzK1oPinSbKfuibq1VmmM1QoxvGLsZ7Qt1QYkMzEXZSKv8DCFkQABoMNjM3NDIzMTgzODA1Igy2ICj6L%2FTPQELXEbUq3APHsqm1tWChcYSmYBXeitC2Q7kOPvDrBhKmcyEr75z%2FgKL3OABWTcFUEeMCWHJ2AzCOe9DHjf0tebLVaRNP%2B9Mm%2Fg%2Be%2Bt3kuTg%2Fp4MTN7gUeL1lzGCxm4%2BVt1z6PKe22%2BLfKhoDzkGZn4JZtGOH1zBy2vnixwNfor9GqVj5Nu%2Fy0s1w1FRWtfm%2FS75m5d4zXkuTvYKP5FIdYBwtPjQ1f%2F3%2Fs1z2Md8XbjlrESxDaBS%2BAokZLhKejwpqXYAg4XGUJOaFaFnwni9HH52P%2F5rlC0z5Oe33VGXQvJdWVPADDzdfjSBAru7lKNimZOw8OpO2g6UsZXgb%2FtmSIJiUjLt8M6uMEIiY4I3j1Kd2qIQ6nEgQqTMC1FNBnMvz5jQJO8h%2F4JuiLDXF%2B9QSffX8ym6YxFxjabeCFIc1Ju0XgvS1p%2FXyPUXO4rp%2FVDmhqzAlUFZZXom5fxcO7W7IIqydxfqyzc50BVlaE3KjJEXxqa6v3DFA5TpZn24Nk7LFZApy1jWI9rKgHrhgpYvKpncqZ%2FBLOpM2GN%2FMTdbUJ%2B5lufpho5p8YArxAydrGEV%2B2bz986%2Bzl8hNtbASL%2FxNRGumZWFxjlzqhzBDM3PlIBRy0JleUr8PtxM9QZstzp1VjzpZNzCI7a%2B%2BBjqkAe2gnC1EUhalhOuO0i0KKlchrJHr5qyL%2BbBb7qP1FgiJJo0iw0F4e7dBBFJFzHSoCVYGaWXpTpWsTCThwaEOywu4OkYY0zommRIRYodLaB4XcXks0XvCKxaUTzyyNIJaFk2KDqafyi%2BLY2Ce4iifmVKuWfvVkAq2DUEdxf7cU7uFOzQ0qx16gb79WoBhpwcMX2XDhm24diSO8oIPMQlePJf42qQW&X-Amz-Signature=c873d4295f910fcda5eb63e4046050d0a55aa59ac03cd1874b4a0bf2cd4008b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWY4MW6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDTrmf8%2FylU2%2BZRaOGF%2Blps7E9cCA%2BC%2B1mLXlzSjr%2BB7AIhAOzK1oPinSbKfuibq1VmmM1QoxvGLsZ7Qt1QYkMzEXZSKv8DCFkQABoMNjM3NDIzMTgzODA1Igy2ICj6L%2FTPQELXEbUq3APHsqm1tWChcYSmYBXeitC2Q7kOPvDrBhKmcyEr75z%2FgKL3OABWTcFUEeMCWHJ2AzCOe9DHjf0tebLVaRNP%2B9Mm%2Fg%2Be%2Bt3kuTg%2Fp4MTN7gUeL1lzGCxm4%2BVt1z6PKe22%2BLfKhoDzkGZn4JZtGOH1zBy2vnixwNfor9GqVj5Nu%2Fy0s1w1FRWtfm%2FS75m5d4zXkuTvYKP5FIdYBwtPjQ1f%2F3%2Fs1z2Md8XbjlrESxDaBS%2BAokZLhKejwpqXYAg4XGUJOaFaFnwni9HH52P%2F5rlC0z5Oe33VGXQvJdWVPADDzdfjSBAru7lKNimZOw8OpO2g6UsZXgb%2FtmSIJiUjLt8M6uMEIiY4I3j1Kd2qIQ6nEgQqTMC1FNBnMvz5jQJO8h%2F4JuiLDXF%2B9QSffX8ym6YxFxjabeCFIc1Ju0XgvS1p%2FXyPUXO4rp%2FVDmhqzAlUFZZXom5fxcO7W7IIqydxfqyzc50BVlaE3KjJEXxqa6v3DFA5TpZn24Nk7LFZApy1jWI9rKgHrhgpYvKpncqZ%2FBLOpM2GN%2FMTdbUJ%2B5lufpho5p8YArxAydrGEV%2B2bz986%2Bzl8hNtbASL%2FxNRGumZWFxjlzqhzBDM3PlIBRy0JleUr8PtxM9QZstzp1VjzpZNzCI7a%2B%2BBjqkAe2gnC1EUhalhOuO0i0KKlchrJHr5qyL%2BbBb7qP1FgiJJo0iw0F4e7dBBFJFzHSoCVYGaWXpTpWsTCThwaEOywu4OkYY0zommRIRYodLaB4XcXks0XvCKxaUTzyyNIJaFk2KDqafyi%2BLY2Ce4iifmVKuWfvVkAq2DUEdxf7cU7uFOzQ0qx16gb79WoBhpwcMX2XDhm24diSO8oIPMQlePJf42qQW&X-Amz-Signature=4cc6d1349047465e4391ddee048ccc8251867dbd39e75fdda67c979ebbe3276e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWY4MW6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDTrmf8%2FylU2%2BZRaOGF%2Blps7E9cCA%2BC%2B1mLXlzSjr%2BB7AIhAOzK1oPinSbKfuibq1VmmM1QoxvGLsZ7Qt1QYkMzEXZSKv8DCFkQABoMNjM3NDIzMTgzODA1Igy2ICj6L%2FTPQELXEbUq3APHsqm1tWChcYSmYBXeitC2Q7kOPvDrBhKmcyEr75z%2FgKL3OABWTcFUEeMCWHJ2AzCOe9DHjf0tebLVaRNP%2B9Mm%2Fg%2Be%2Bt3kuTg%2Fp4MTN7gUeL1lzGCxm4%2BVt1z6PKe22%2BLfKhoDzkGZn4JZtGOH1zBy2vnixwNfor9GqVj5Nu%2Fy0s1w1FRWtfm%2FS75m5d4zXkuTvYKP5FIdYBwtPjQ1f%2F3%2Fs1z2Md8XbjlrESxDaBS%2BAokZLhKejwpqXYAg4XGUJOaFaFnwni9HH52P%2F5rlC0z5Oe33VGXQvJdWVPADDzdfjSBAru7lKNimZOw8OpO2g6UsZXgb%2FtmSIJiUjLt8M6uMEIiY4I3j1Kd2qIQ6nEgQqTMC1FNBnMvz5jQJO8h%2F4JuiLDXF%2B9QSffX8ym6YxFxjabeCFIc1Ju0XgvS1p%2FXyPUXO4rp%2FVDmhqzAlUFZZXom5fxcO7W7IIqydxfqyzc50BVlaE3KjJEXxqa6v3DFA5TpZn24Nk7LFZApy1jWI9rKgHrhgpYvKpncqZ%2FBLOpM2GN%2FMTdbUJ%2B5lufpho5p8YArxAydrGEV%2B2bz986%2Bzl8hNtbASL%2FxNRGumZWFxjlzqhzBDM3PlIBRy0JleUr8PtxM9QZstzp1VjzpZNzCI7a%2B%2BBjqkAe2gnC1EUhalhOuO0i0KKlchrJHr5qyL%2BbBb7qP1FgiJJo0iw0F4e7dBBFJFzHSoCVYGaWXpTpWsTCThwaEOywu4OkYY0zommRIRYodLaB4XcXks0XvCKxaUTzyyNIJaFk2KDqafyi%2BLY2Ce4iifmVKuWfvVkAq2DUEdxf7cU7uFOzQ0qx16gb79WoBhpwcMX2XDhm24diSO8oIPMQlePJf42qQW&X-Amz-Signature=ca681b25e14a5afc4295a74c298e26271c21fb2ac9979fa2afb286eb808dfb5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWY4MW6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDTrmf8%2FylU2%2BZRaOGF%2Blps7E9cCA%2BC%2B1mLXlzSjr%2BB7AIhAOzK1oPinSbKfuibq1VmmM1QoxvGLsZ7Qt1QYkMzEXZSKv8DCFkQABoMNjM3NDIzMTgzODA1Igy2ICj6L%2FTPQELXEbUq3APHsqm1tWChcYSmYBXeitC2Q7kOPvDrBhKmcyEr75z%2FgKL3OABWTcFUEeMCWHJ2AzCOe9DHjf0tebLVaRNP%2B9Mm%2Fg%2Be%2Bt3kuTg%2Fp4MTN7gUeL1lzGCxm4%2BVt1z6PKe22%2BLfKhoDzkGZn4JZtGOH1zBy2vnixwNfor9GqVj5Nu%2Fy0s1w1FRWtfm%2FS75m5d4zXkuTvYKP5FIdYBwtPjQ1f%2F3%2Fs1z2Md8XbjlrESxDaBS%2BAokZLhKejwpqXYAg4XGUJOaFaFnwni9HH52P%2F5rlC0z5Oe33VGXQvJdWVPADDzdfjSBAru7lKNimZOw8OpO2g6UsZXgb%2FtmSIJiUjLt8M6uMEIiY4I3j1Kd2qIQ6nEgQqTMC1FNBnMvz5jQJO8h%2F4JuiLDXF%2B9QSffX8ym6YxFxjabeCFIc1Ju0XgvS1p%2FXyPUXO4rp%2FVDmhqzAlUFZZXom5fxcO7W7IIqydxfqyzc50BVlaE3KjJEXxqa6v3DFA5TpZn24Nk7LFZApy1jWI9rKgHrhgpYvKpncqZ%2FBLOpM2GN%2FMTdbUJ%2B5lufpho5p8YArxAydrGEV%2B2bz986%2Bzl8hNtbASL%2FxNRGumZWFxjlzqhzBDM3PlIBRy0JleUr8PtxM9QZstzp1VjzpZNzCI7a%2B%2BBjqkAe2gnC1EUhalhOuO0i0KKlchrJHr5qyL%2BbBb7qP1FgiJJo0iw0F4e7dBBFJFzHSoCVYGaWXpTpWsTCThwaEOywu4OkYY0zommRIRYodLaB4XcXks0XvCKxaUTzyyNIJaFk2KDqafyi%2BLY2Ce4iifmVKuWfvVkAq2DUEdxf7cU7uFOzQ0qx16gb79WoBhpwcMX2XDhm24diSO8oIPMQlePJf42qQW&X-Amz-Signature=c2bc73a960f70d2f4fc750780606eadeb9b31386c7c4ebc1b299167418d4e9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWY4MW6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDTrmf8%2FylU2%2BZRaOGF%2Blps7E9cCA%2BC%2B1mLXlzSjr%2BB7AIhAOzK1oPinSbKfuibq1VmmM1QoxvGLsZ7Qt1QYkMzEXZSKv8DCFkQABoMNjM3NDIzMTgzODA1Igy2ICj6L%2FTPQELXEbUq3APHsqm1tWChcYSmYBXeitC2Q7kOPvDrBhKmcyEr75z%2FgKL3OABWTcFUEeMCWHJ2AzCOe9DHjf0tebLVaRNP%2B9Mm%2Fg%2Be%2Bt3kuTg%2Fp4MTN7gUeL1lzGCxm4%2BVt1z6PKe22%2BLfKhoDzkGZn4JZtGOH1zBy2vnixwNfor9GqVj5Nu%2Fy0s1w1FRWtfm%2FS75m5d4zXkuTvYKP5FIdYBwtPjQ1f%2F3%2Fs1z2Md8XbjlrESxDaBS%2BAokZLhKejwpqXYAg4XGUJOaFaFnwni9HH52P%2F5rlC0z5Oe33VGXQvJdWVPADDzdfjSBAru7lKNimZOw8OpO2g6UsZXgb%2FtmSIJiUjLt8M6uMEIiY4I3j1Kd2qIQ6nEgQqTMC1FNBnMvz5jQJO8h%2F4JuiLDXF%2B9QSffX8ym6YxFxjabeCFIc1Ju0XgvS1p%2FXyPUXO4rp%2FVDmhqzAlUFZZXom5fxcO7W7IIqydxfqyzc50BVlaE3KjJEXxqa6v3DFA5TpZn24Nk7LFZApy1jWI9rKgHrhgpYvKpncqZ%2FBLOpM2GN%2FMTdbUJ%2B5lufpho5p8YArxAydrGEV%2B2bz986%2Bzl8hNtbASL%2FxNRGumZWFxjlzqhzBDM3PlIBRy0JleUr8PtxM9QZstzp1VjzpZNzCI7a%2B%2BBjqkAe2gnC1EUhalhOuO0i0KKlchrJHr5qyL%2BbBb7qP1FgiJJo0iw0F4e7dBBFJFzHSoCVYGaWXpTpWsTCThwaEOywu4OkYY0zommRIRYodLaB4XcXks0XvCKxaUTzyyNIJaFk2KDqafyi%2BLY2Ce4iifmVKuWfvVkAq2DUEdxf7cU7uFOzQ0qx16gb79WoBhpwcMX2XDhm24diSO8oIPMQlePJf42qQW&X-Amz-Signature=b9a7ddf46142a5f1d51f09742867cbfb1bcdfe6e4c2d321b64f3a87d03de2c19&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWY4MW6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDTrmf8%2FylU2%2BZRaOGF%2Blps7E9cCA%2BC%2B1mLXlzSjr%2BB7AIhAOzK1oPinSbKfuibq1VmmM1QoxvGLsZ7Qt1QYkMzEXZSKv8DCFkQABoMNjM3NDIzMTgzODA1Igy2ICj6L%2FTPQELXEbUq3APHsqm1tWChcYSmYBXeitC2Q7kOPvDrBhKmcyEr75z%2FgKL3OABWTcFUEeMCWHJ2AzCOe9DHjf0tebLVaRNP%2B9Mm%2Fg%2Be%2Bt3kuTg%2Fp4MTN7gUeL1lzGCxm4%2BVt1z6PKe22%2BLfKhoDzkGZn4JZtGOH1zBy2vnixwNfor9GqVj5Nu%2Fy0s1w1FRWtfm%2FS75m5d4zXkuTvYKP5FIdYBwtPjQ1f%2F3%2Fs1z2Md8XbjlrESxDaBS%2BAokZLhKejwpqXYAg4XGUJOaFaFnwni9HH52P%2F5rlC0z5Oe33VGXQvJdWVPADDzdfjSBAru7lKNimZOw8OpO2g6UsZXgb%2FtmSIJiUjLt8M6uMEIiY4I3j1Kd2qIQ6nEgQqTMC1FNBnMvz5jQJO8h%2F4JuiLDXF%2B9QSffX8ym6YxFxjabeCFIc1Ju0XgvS1p%2FXyPUXO4rp%2FVDmhqzAlUFZZXom5fxcO7W7IIqydxfqyzc50BVlaE3KjJEXxqa6v3DFA5TpZn24Nk7LFZApy1jWI9rKgHrhgpYvKpncqZ%2FBLOpM2GN%2FMTdbUJ%2B5lufpho5p8YArxAydrGEV%2B2bz986%2Bzl8hNtbASL%2FxNRGumZWFxjlzqhzBDM3PlIBRy0JleUr8PtxM9QZstzp1VjzpZNzCI7a%2B%2BBjqkAe2gnC1EUhalhOuO0i0KKlchrJHr5qyL%2BbBb7qP1FgiJJo0iw0F4e7dBBFJFzHSoCVYGaWXpTpWsTCThwaEOywu4OkYY0zommRIRYodLaB4XcXks0XvCKxaUTzyyNIJaFk2KDqafyi%2BLY2Ce4iifmVKuWfvVkAq2DUEdxf7cU7uFOzQ0qx16gb79WoBhpwcMX2XDhm24diSO8oIPMQlePJf42qQW&X-Amz-Signature=f60ae650b7ab3589adcaca2e371cf798fe492ab21401c7f26b44762fd5a37ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
