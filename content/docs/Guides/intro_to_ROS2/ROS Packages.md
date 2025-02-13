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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647T4BY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFI8q%2B3K5FRslYAb%2BGq00OixYoT%2F%2FSGqqgphZI5aLGQIhALF%2F2hB3Qu2%2Bb1TXbDf3VrXWquDtNz6MRPDLk%2FoZl6LJKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiSHt8r8fU212g5Egq3ANHtEmq%2B9ltuftm4RjD9B9O2o4W6EqGb8KutfvHwPzDdWA%2BXilAJm1J687ongbgcPl0A4kW4lQ6JVSDHiUpygCv3Ngc26M4Qw592YZmHtY5llvZS7gdNufJzTB3Wo5Vg6M%2Fl8YbdOrvMecThjRWCuVSvAhYE2iwc4gau1XFKgGtQy5DY4ENxH%2Fg0sqjHQVYcaI%2F7O2bYTLbCqu%2F3I7cDEwxBqw15xVd6TQINfTHcsLPLR0bM1KA7KnRwEeD140%2BHjEYjLdYIaKezXNdWXvGr1z3A7DatbolkcevuQbXlpEV%2BcaNpVSAVuk6nyW2qiJpC%2B7bE1uyJwGvSFUUERIZtqwfrFEcOhwlAh66AFA13pce4uJy6RCmkv2lUDPqc96Dif9PeBdgAbiZ3G8xthuFa7Z2BC47XD2eGb%2BVreVH97ZmAjys7mOZ1tDUs9OcDUXp85XVWpBxzzzisVJxwZlIdrn2f9IxRdT3d%2B%2Foabz9casUzQ6QFbIoMxISYMKuIDmgORiUNoiRRDG2JZgG8IVKlLzKYhM7jbkCsX3fWWp59x4elUbPmb43W0kzZj7%2FKhaHqYO2Nz6uZeCy8T5txH4G5oCh7rsfd7WGBsHH8SZeyAgCugH7BwXSp44YEP3XiDCo5ra9BjqkAWW5BgMSQneM%2FCxiPe1cQXQt%2BjK921IR%2FgTegY2o0OMfD%2F0qOcWynHQyzTv7dsrsEC3uIM%2FEdWVj4SNUq5dAimn2L8LSivnT9B1YxWQ9gHqD8yyitirIYpTpgWt31msLUp4Lmpwt7weHs0iqroD9siROdnna5a9RPAx%2Bpz1HXWS5GSBGebR%2B1v119NM4ShzgAv2H3%2B308OwyQgzb2lHsaZcXr2CR&X-Amz-Signature=7d5236a2ca66a07815c75232aeae03a1073c069a600d3e8621a2b6d149fb6928&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647T4BY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFI8q%2B3K5FRslYAb%2BGq00OixYoT%2F%2FSGqqgphZI5aLGQIhALF%2F2hB3Qu2%2Bb1TXbDf3VrXWquDtNz6MRPDLk%2FoZl6LJKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiSHt8r8fU212g5Egq3ANHtEmq%2B9ltuftm4RjD9B9O2o4W6EqGb8KutfvHwPzDdWA%2BXilAJm1J687ongbgcPl0A4kW4lQ6JVSDHiUpygCv3Ngc26M4Qw592YZmHtY5llvZS7gdNufJzTB3Wo5Vg6M%2Fl8YbdOrvMecThjRWCuVSvAhYE2iwc4gau1XFKgGtQy5DY4ENxH%2Fg0sqjHQVYcaI%2F7O2bYTLbCqu%2F3I7cDEwxBqw15xVd6TQINfTHcsLPLR0bM1KA7KnRwEeD140%2BHjEYjLdYIaKezXNdWXvGr1z3A7DatbolkcevuQbXlpEV%2BcaNpVSAVuk6nyW2qiJpC%2B7bE1uyJwGvSFUUERIZtqwfrFEcOhwlAh66AFA13pce4uJy6RCmkv2lUDPqc96Dif9PeBdgAbiZ3G8xthuFa7Z2BC47XD2eGb%2BVreVH97ZmAjys7mOZ1tDUs9OcDUXp85XVWpBxzzzisVJxwZlIdrn2f9IxRdT3d%2B%2Foabz9casUzQ6QFbIoMxISYMKuIDmgORiUNoiRRDG2JZgG8IVKlLzKYhM7jbkCsX3fWWp59x4elUbPmb43W0kzZj7%2FKhaHqYO2Nz6uZeCy8T5txH4G5oCh7rsfd7WGBsHH8SZeyAgCugH7BwXSp44YEP3XiDCo5ra9BjqkAWW5BgMSQneM%2FCxiPe1cQXQt%2BjK921IR%2FgTegY2o0OMfD%2F0qOcWynHQyzTv7dsrsEC3uIM%2FEdWVj4SNUq5dAimn2L8LSivnT9B1YxWQ9gHqD8yyitirIYpTpgWt31msLUp4Lmpwt7weHs0iqroD9siROdnna5a9RPAx%2Bpz1HXWS5GSBGebR%2B1v119NM4ShzgAv2H3%2B308OwyQgzb2lHsaZcXr2CR&X-Amz-Signature=69bb2f2e7e06df18c42dbf90c6735e999f7d7c0d0f00820d067063d883e610e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647T4BY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFI8q%2B3K5FRslYAb%2BGq00OixYoT%2F%2FSGqqgphZI5aLGQIhALF%2F2hB3Qu2%2Bb1TXbDf3VrXWquDtNz6MRPDLk%2FoZl6LJKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiSHt8r8fU212g5Egq3ANHtEmq%2B9ltuftm4RjD9B9O2o4W6EqGb8KutfvHwPzDdWA%2BXilAJm1J687ongbgcPl0A4kW4lQ6JVSDHiUpygCv3Ngc26M4Qw592YZmHtY5llvZS7gdNufJzTB3Wo5Vg6M%2Fl8YbdOrvMecThjRWCuVSvAhYE2iwc4gau1XFKgGtQy5DY4ENxH%2Fg0sqjHQVYcaI%2F7O2bYTLbCqu%2F3I7cDEwxBqw15xVd6TQINfTHcsLPLR0bM1KA7KnRwEeD140%2BHjEYjLdYIaKezXNdWXvGr1z3A7DatbolkcevuQbXlpEV%2BcaNpVSAVuk6nyW2qiJpC%2B7bE1uyJwGvSFUUERIZtqwfrFEcOhwlAh66AFA13pce4uJy6RCmkv2lUDPqc96Dif9PeBdgAbiZ3G8xthuFa7Z2BC47XD2eGb%2BVreVH97ZmAjys7mOZ1tDUs9OcDUXp85XVWpBxzzzisVJxwZlIdrn2f9IxRdT3d%2B%2Foabz9casUzQ6QFbIoMxISYMKuIDmgORiUNoiRRDG2JZgG8IVKlLzKYhM7jbkCsX3fWWp59x4elUbPmb43W0kzZj7%2FKhaHqYO2Nz6uZeCy8T5txH4G5oCh7rsfd7WGBsHH8SZeyAgCugH7BwXSp44YEP3XiDCo5ra9BjqkAWW5BgMSQneM%2FCxiPe1cQXQt%2BjK921IR%2FgTegY2o0OMfD%2F0qOcWynHQyzTv7dsrsEC3uIM%2FEdWVj4SNUq5dAimn2L8LSivnT9B1YxWQ9gHqD8yyitirIYpTpgWt31msLUp4Lmpwt7weHs0iqroD9siROdnna5a9RPAx%2Bpz1HXWS5GSBGebR%2B1v119NM4ShzgAv2H3%2B308OwyQgzb2lHsaZcXr2CR&X-Amz-Signature=94ac7c941d3fb9066ef6eb153c10f8b977e82d076c82bff5b111c029999ed02e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647T4BY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFI8q%2B3K5FRslYAb%2BGq00OixYoT%2F%2FSGqqgphZI5aLGQIhALF%2F2hB3Qu2%2Bb1TXbDf3VrXWquDtNz6MRPDLk%2FoZl6LJKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiSHt8r8fU212g5Egq3ANHtEmq%2B9ltuftm4RjD9B9O2o4W6EqGb8KutfvHwPzDdWA%2BXilAJm1J687ongbgcPl0A4kW4lQ6JVSDHiUpygCv3Ngc26M4Qw592YZmHtY5llvZS7gdNufJzTB3Wo5Vg6M%2Fl8YbdOrvMecThjRWCuVSvAhYE2iwc4gau1XFKgGtQy5DY4ENxH%2Fg0sqjHQVYcaI%2F7O2bYTLbCqu%2F3I7cDEwxBqw15xVd6TQINfTHcsLPLR0bM1KA7KnRwEeD140%2BHjEYjLdYIaKezXNdWXvGr1z3A7DatbolkcevuQbXlpEV%2BcaNpVSAVuk6nyW2qiJpC%2B7bE1uyJwGvSFUUERIZtqwfrFEcOhwlAh66AFA13pce4uJy6RCmkv2lUDPqc96Dif9PeBdgAbiZ3G8xthuFa7Z2BC47XD2eGb%2BVreVH97ZmAjys7mOZ1tDUs9OcDUXp85XVWpBxzzzisVJxwZlIdrn2f9IxRdT3d%2B%2Foabz9casUzQ6QFbIoMxISYMKuIDmgORiUNoiRRDG2JZgG8IVKlLzKYhM7jbkCsX3fWWp59x4elUbPmb43W0kzZj7%2FKhaHqYO2Nz6uZeCy8T5txH4G5oCh7rsfd7WGBsHH8SZeyAgCugH7BwXSp44YEP3XiDCo5ra9BjqkAWW5BgMSQneM%2FCxiPe1cQXQt%2BjK921IR%2FgTegY2o0OMfD%2F0qOcWynHQyzTv7dsrsEC3uIM%2FEdWVj4SNUq5dAimn2L8LSivnT9B1YxWQ9gHqD8yyitirIYpTpgWt31msLUp4Lmpwt7weHs0iqroD9siROdnna5a9RPAx%2Bpz1HXWS5GSBGebR%2B1v119NM4ShzgAv2H3%2B308OwyQgzb2lHsaZcXr2CR&X-Amz-Signature=a447556a46456cf590b527dfcc82a2901c5437f9c9390609bc3b766b76705997&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647T4BY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFI8q%2B3K5FRslYAb%2BGq00OixYoT%2F%2FSGqqgphZI5aLGQIhALF%2F2hB3Qu2%2Bb1TXbDf3VrXWquDtNz6MRPDLk%2FoZl6LJKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiSHt8r8fU212g5Egq3ANHtEmq%2B9ltuftm4RjD9B9O2o4W6EqGb8KutfvHwPzDdWA%2BXilAJm1J687ongbgcPl0A4kW4lQ6JVSDHiUpygCv3Ngc26M4Qw592YZmHtY5llvZS7gdNufJzTB3Wo5Vg6M%2Fl8YbdOrvMecThjRWCuVSvAhYE2iwc4gau1XFKgGtQy5DY4ENxH%2Fg0sqjHQVYcaI%2F7O2bYTLbCqu%2F3I7cDEwxBqw15xVd6TQINfTHcsLPLR0bM1KA7KnRwEeD140%2BHjEYjLdYIaKezXNdWXvGr1z3A7DatbolkcevuQbXlpEV%2BcaNpVSAVuk6nyW2qiJpC%2B7bE1uyJwGvSFUUERIZtqwfrFEcOhwlAh66AFA13pce4uJy6RCmkv2lUDPqc96Dif9PeBdgAbiZ3G8xthuFa7Z2BC47XD2eGb%2BVreVH97ZmAjys7mOZ1tDUs9OcDUXp85XVWpBxzzzisVJxwZlIdrn2f9IxRdT3d%2B%2Foabz9casUzQ6QFbIoMxISYMKuIDmgORiUNoiRRDG2JZgG8IVKlLzKYhM7jbkCsX3fWWp59x4elUbPmb43W0kzZj7%2FKhaHqYO2Nz6uZeCy8T5txH4G5oCh7rsfd7WGBsHH8SZeyAgCugH7BwXSp44YEP3XiDCo5ra9BjqkAWW5BgMSQneM%2FCxiPe1cQXQt%2BjK921IR%2FgTegY2o0OMfD%2F0qOcWynHQyzTv7dsrsEC3uIM%2FEdWVj4SNUq5dAimn2L8LSivnT9B1YxWQ9gHqD8yyitirIYpTpgWt31msLUp4Lmpwt7weHs0iqroD9siROdnna5a9RPAx%2Bpz1HXWS5GSBGebR%2B1v119NM4ShzgAv2H3%2B308OwyQgzb2lHsaZcXr2CR&X-Amz-Signature=b7607a68d4879f4ce34d43bd929e9961012b2141a6ab7a28f2e536542ad899c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647T4BY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFI8q%2B3K5FRslYAb%2BGq00OixYoT%2F%2FSGqqgphZI5aLGQIhALF%2F2hB3Qu2%2Bb1TXbDf3VrXWquDtNz6MRPDLk%2FoZl6LJKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiSHt8r8fU212g5Egq3ANHtEmq%2B9ltuftm4RjD9B9O2o4W6EqGb8KutfvHwPzDdWA%2BXilAJm1J687ongbgcPl0A4kW4lQ6JVSDHiUpygCv3Ngc26M4Qw592YZmHtY5llvZS7gdNufJzTB3Wo5Vg6M%2Fl8YbdOrvMecThjRWCuVSvAhYE2iwc4gau1XFKgGtQy5DY4ENxH%2Fg0sqjHQVYcaI%2F7O2bYTLbCqu%2F3I7cDEwxBqw15xVd6TQINfTHcsLPLR0bM1KA7KnRwEeD140%2BHjEYjLdYIaKezXNdWXvGr1z3A7DatbolkcevuQbXlpEV%2BcaNpVSAVuk6nyW2qiJpC%2B7bE1uyJwGvSFUUERIZtqwfrFEcOhwlAh66AFA13pce4uJy6RCmkv2lUDPqc96Dif9PeBdgAbiZ3G8xthuFa7Z2BC47XD2eGb%2BVreVH97ZmAjys7mOZ1tDUs9OcDUXp85XVWpBxzzzisVJxwZlIdrn2f9IxRdT3d%2B%2Foabz9casUzQ6QFbIoMxISYMKuIDmgORiUNoiRRDG2JZgG8IVKlLzKYhM7jbkCsX3fWWp59x4elUbPmb43W0kzZj7%2FKhaHqYO2Nz6uZeCy8T5txH4G5oCh7rsfd7WGBsHH8SZeyAgCugH7BwXSp44YEP3XiDCo5ra9BjqkAWW5BgMSQneM%2FCxiPe1cQXQt%2BjK921IR%2FgTegY2o0OMfD%2F0qOcWynHQyzTv7dsrsEC3uIM%2FEdWVj4SNUq5dAimn2L8LSivnT9B1YxWQ9gHqD8yyitirIYpTpgWt31msLUp4Lmpwt7weHs0iqroD9siROdnna5a9RPAx%2Bpz1HXWS5GSBGebR%2B1v119NM4ShzgAv2H3%2B308OwyQgzb2lHsaZcXr2CR&X-Amz-Signature=5d817834c89bbc7a5eaf05df8d8d75b852979c17eec8dda92a33aa1e588daffe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647T4BY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFI8q%2B3K5FRslYAb%2BGq00OixYoT%2F%2FSGqqgphZI5aLGQIhALF%2F2hB3Qu2%2Bb1TXbDf3VrXWquDtNz6MRPDLk%2FoZl6LJKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiSHt8r8fU212g5Egq3ANHtEmq%2B9ltuftm4RjD9B9O2o4W6EqGb8KutfvHwPzDdWA%2BXilAJm1J687ongbgcPl0A4kW4lQ6JVSDHiUpygCv3Ngc26M4Qw592YZmHtY5llvZS7gdNufJzTB3Wo5Vg6M%2Fl8YbdOrvMecThjRWCuVSvAhYE2iwc4gau1XFKgGtQy5DY4ENxH%2Fg0sqjHQVYcaI%2F7O2bYTLbCqu%2F3I7cDEwxBqw15xVd6TQINfTHcsLPLR0bM1KA7KnRwEeD140%2BHjEYjLdYIaKezXNdWXvGr1z3A7DatbolkcevuQbXlpEV%2BcaNpVSAVuk6nyW2qiJpC%2B7bE1uyJwGvSFUUERIZtqwfrFEcOhwlAh66AFA13pce4uJy6RCmkv2lUDPqc96Dif9PeBdgAbiZ3G8xthuFa7Z2BC47XD2eGb%2BVreVH97ZmAjys7mOZ1tDUs9OcDUXp85XVWpBxzzzisVJxwZlIdrn2f9IxRdT3d%2B%2Foabz9casUzQ6QFbIoMxISYMKuIDmgORiUNoiRRDG2JZgG8IVKlLzKYhM7jbkCsX3fWWp59x4elUbPmb43W0kzZj7%2FKhaHqYO2Nz6uZeCy8T5txH4G5oCh7rsfd7WGBsHH8SZeyAgCugH7BwXSp44YEP3XiDCo5ra9BjqkAWW5BgMSQneM%2FCxiPe1cQXQt%2BjK921IR%2FgTegY2o0OMfD%2F0qOcWynHQyzTv7dsrsEC3uIM%2FEdWVj4SNUq5dAimn2L8LSivnT9B1YxWQ9gHqD8yyitirIYpTpgWt31msLUp4Lmpwt7weHs0iqroD9siROdnna5a9RPAx%2Bpz1HXWS5GSBGebR%2B1v119NM4ShzgAv2H3%2B308OwyQgzb2lHsaZcXr2CR&X-Amz-Signature=b9ce83dbcdcd0237670ba5fe49540c80e87f078ac0fa46786653dfd8e29c2203&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
