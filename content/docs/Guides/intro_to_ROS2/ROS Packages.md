---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQKG36%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICaNC%2Br3Kgcq1Q46bytQthRujmo6%2BhwLkYSWmjM7OZJhAiBsNSGANpur7sHBOe8tE9zS%2FXKzAot8%2BnCzd9%2Fvh5zLsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX%2BzW1s7wikHH5ly1KtwDc8wvSZCSCmxAyY2eOmIl3s7S6jHSL7YgutfA%2F9Do1dBmRGkuOOG3etlLk3Z0ZEH2BoEphYU5O042RxRon1tfuVwFHKw3eLLOO0Q%2FLzDjdcg%2FesDCxDMyyiu6UpDSlfyYBdecE8IXaEVNwCHb89x57wOCWTnQZHaF0BtVw%2FrrfBExRJ3vUyXMVc5rVZadGcONHmczmZN0GeedrYH1yz%2FyE6pPZq09yCGdvx7HYesjjzpnBIsUFUCzK4FCAzCXfpZN2jDcwG5caW1Ae0qtZCcjD28FHierzJIqrvhfOG1ObSUMYjfzjPoSvo397PsI%2BhT%2B0aBYpIAfJ%2BgysmkcuzElbT1CYKS5%2BL1KxPnf%2FOgcb2vxpuygyB4t%2BSehEOTe48G5CfsH6J%2F2eq%2BmVv1OdunZGplZt3%2FNY105sygnd6W35hVh1gZV%2FGrCREtR4ZerqrkSZgRa4S2%2BkjFRny6jjD0WbZR1O7qMkGww69WdLVG3%2FH34XD%2BhZAg782Zx2LvZTi2mqMtpMlDzHGd5ZMqI52gPdZcy%2Bcq6AI8qtuVkerGO%2FaBl4Sq8zMOIwFs3mVZY8z%2BCi4zBBQwSw%2FmsfE%2FyuPRNmznjUDVtqxuhB84wJApGqSjVIlEin8j8HRaIczsw6OmwwwY6pgFYL0L6wZIgrJeqz%2BgOusJw%2Bgj6ZxZOopy0CEInO1tWqwmziNOEFEP71IUgCK%2FC%2BH%2BKI25cVdGIVq2aGQj1y3YPiJSY3sun2tSoYZQ0NQOF0KHjd9F7qoNz0av1PJ4vftxdaXHAtRA8B5rTZzSk75M6owMqTMeNIVsTj0DB7xNwi9bsgSVlBnWO2gAlZnyiawoNCSCN6pNm2%2Bb8UYQrNVN8TI8uf6fz&X-Amz-Signature=5f164c7411a84fc90403aab78038ad4dc5e3efc3d108b40d1799660e97bcfb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQKG36%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICaNC%2Br3Kgcq1Q46bytQthRujmo6%2BhwLkYSWmjM7OZJhAiBsNSGANpur7sHBOe8tE9zS%2FXKzAot8%2BnCzd9%2Fvh5zLsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX%2BzW1s7wikHH5ly1KtwDc8wvSZCSCmxAyY2eOmIl3s7S6jHSL7YgutfA%2F9Do1dBmRGkuOOG3etlLk3Z0ZEH2BoEphYU5O042RxRon1tfuVwFHKw3eLLOO0Q%2FLzDjdcg%2FesDCxDMyyiu6UpDSlfyYBdecE8IXaEVNwCHb89x57wOCWTnQZHaF0BtVw%2FrrfBExRJ3vUyXMVc5rVZadGcONHmczmZN0GeedrYH1yz%2FyE6pPZq09yCGdvx7HYesjjzpnBIsUFUCzK4FCAzCXfpZN2jDcwG5caW1Ae0qtZCcjD28FHierzJIqrvhfOG1ObSUMYjfzjPoSvo397PsI%2BhT%2B0aBYpIAfJ%2BgysmkcuzElbT1CYKS5%2BL1KxPnf%2FOgcb2vxpuygyB4t%2BSehEOTe48G5CfsH6J%2F2eq%2BmVv1OdunZGplZt3%2FNY105sygnd6W35hVh1gZV%2FGrCREtR4ZerqrkSZgRa4S2%2BkjFRny6jjD0WbZR1O7qMkGww69WdLVG3%2FH34XD%2BhZAg782Zx2LvZTi2mqMtpMlDzHGd5ZMqI52gPdZcy%2Bcq6AI8qtuVkerGO%2FaBl4Sq8zMOIwFs3mVZY8z%2BCi4zBBQwSw%2FmsfE%2FyuPRNmznjUDVtqxuhB84wJApGqSjVIlEin8j8HRaIczsw6OmwwwY6pgFYL0L6wZIgrJeqz%2BgOusJw%2Bgj6ZxZOopy0CEInO1tWqwmziNOEFEP71IUgCK%2FC%2BH%2BKI25cVdGIVq2aGQj1y3YPiJSY3sun2tSoYZQ0NQOF0KHjd9F7qoNz0av1PJ4vftxdaXHAtRA8B5rTZzSk75M6owMqTMeNIVsTj0DB7xNwi9bsgSVlBnWO2gAlZnyiawoNCSCN6pNm2%2Bb8UYQrNVN8TI8uf6fz&X-Amz-Signature=78ccdd9e7fc9d5d53e5a28db8edbfd1d56840d5dec2f5869cb8a5e4ba00518c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQKG36%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICaNC%2Br3Kgcq1Q46bytQthRujmo6%2BhwLkYSWmjM7OZJhAiBsNSGANpur7sHBOe8tE9zS%2FXKzAot8%2BnCzd9%2Fvh5zLsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX%2BzW1s7wikHH5ly1KtwDc8wvSZCSCmxAyY2eOmIl3s7S6jHSL7YgutfA%2F9Do1dBmRGkuOOG3etlLk3Z0ZEH2BoEphYU5O042RxRon1tfuVwFHKw3eLLOO0Q%2FLzDjdcg%2FesDCxDMyyiu6UpDSlfyYBdecE8IXaEVNwCHb89x57wOCWTnQZHaF0BtVw%2FrrfBExRJ3vUyXMVc5rVZadGcONHmczmZN0GeedrYH1yz%2FyE6pPZq09yCGdvx7HYesjjzpnBIsUFUCzK4FCAzCXfpZN2jDcwG5caW1Ae0qtZCcjD28FHierzJIqrvhfOG1ObSUMYjfzjPoSvo397PsI%2BhT%2B0aBYpIAfJ%2BgysmkcuzElbT1CYKS5%2BL1KxPnf%2FOgcb2vxpuygyB4t%2BSehEOTe48G5CfsH6J%2F2eq%2BmVv1OdunZGplZt3%2FNY105sygnd6W35hVh1gZV%2FGrCREtR4ZerqrkSZgRa4S2%2BkjFRny6jjD0WbZR1O7qMkGww69WdLVG3%2FH34XD%2BhZAg782Zx2LvZTi2mqMtpMlDzHGd5ZMqI52gPdZcy%2Bcq6AI8qtuVkerGO%2FaBl4Sq8zMOIwFs3mVZY8z%2BCi4zBBQwSw%2FmsfE%2FyuPRNmznjUDVtqxuhB84wJApGqSjVIlEin8j8HRaIczsw6OmwwwY6pgFYL0L6wZIgrJeqz%2BgOusJw%2Bgj6ZxZOopy0CEInO1tWqwmziNOEFEP71IUgCK%2FC%2BH%2BKI25cVdGIVq2aGQj1y3YPiJSY3sun2tSoYZQ0NQOF0KHjd9F7qoNz0av1PJ4vftxdaXHAtRA8B5rTZzSk75M6owMqTMeNIVsTj0DB7xNwi9bsgSVlBnWO2gAlZnyiawoNCSCN6pNm2%2Bb8UYQrNVN8TI8uf6fz&X-Amz-Signature=3f2fab3b03ad9a075b65c649f32cf01a0192236977a1bfeb8f95b72a622221ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQKG36%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICaNC%2Br3Kgcq1Q46bytQthRujmo6%2BhwLkYSWmjM7OZJhAiBsNSGANpur7sHBOe8tE9zS%2FXKzAot8%2BnCzd9%2Fvh5zLsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX%2BzW1s7wikHH5ly1KtwDc8wvSZCSCmxAyY2eOmIl3s7S6jHSL7YgutfA%2F9Do1dBmRGkuOOG3etlLk3Z0ZEH2BoEphYU5O042RxRon1tfuVwFHKw3eLLOO0Q%2FLzDjdcg%2FesDCxDMyyiu6UpDSlfyYBdecE8IXaEVNwCHb89x57wOCWTnQZHaF0BtVw%2FrrfBExRJ3vUyXMVc5rVZadGcONHmczmZN0GeedrYH1yz%2FyE6pPZq09yCGdvx7HYesjjzpnBIsUFUCzK4FCAzCXfpZN2jDcwG5caW1Ae0qtZCcjD28FHierzJIqrvhfOG1ObSUMYjfzjPoSvo397PsI%2BhT%2B0aBYpIAfJ%2BgysmkcuzElbT1CYKS5%2BL1KxPnf%2FOgcb2vxpuygyB4t%2BSehEOTe48G5CfsH6J%2F2eq%2BmVv1OdunZGplZt3%2FNY105sygnd6W35hVh1gZV%2FGrCREtR4ZerqrkSZgRa4S2%2BkjFRny6jjD0WbZR1O7qMkGww69WdLVG3%2FH34XD%2BhZAg782Zx2LvZTi2mqMtpMlDzHGd5ZMqI52gPdZcy%2Bcq6AI8qtuVkerGO%2FaBl4Sq8zMOIwFs3mVZY8z%2BCi4zBBQwSw%2FmsfE%2FyuPRNmznjUDVtqxuhB84wJApGqSjVIlEin8j8HRaIczsw6OmwwwY6pgFYL0L6wZIgrJeqz%2BgOusJw%2Bgj6ZxZOopy0CEInO1tWqwmziNOEFEP71IUgCK%2FC%2BH%2BKI25cVdGIVq2aGQj1y3YPiJSY3sun2tSoYZQ0NQOF0KHjd9F7qoNz0av1PJ4vftxdaXHAtRA8B5rTZzSk75M6owMqTMeNIVsTj0DB7xNwi9bsgSVlBnWO2gAlZnyiawoNCSCN6pNm2%2Bb8UYQrNVN8TI8uf6fz&X-Amz-Signature=2e2c347ceb31263e3cfd6586f385d27ca597ae5f6d3a5d27b29221259008a59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQKG36%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICaNC%2Br3Kgcq1Q46bytQthRujmo6%2BhwLkYSWmjM7OZJhAiBsNSGANpur7sHBOe8tE9zS%2FXKzAot8%2BnCzd9%2Fvh5zLsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX%2BzW1s7wikHH5ly1KtwDc8wvSZCSCmxAyY2eOmIl3s7S6jHSL7YgutfA%2F9Do1dBmRGkuOOG3etlLk3Z0ZEH2BoEphYU5O042RxRon1tfuVwFHKw3eLLOO0Q%2FLzDjdcg%2FesDCxDMyyiu6UpDSlfyYBdecE8IXaEVNwCHb89x57wOCWTnQZHaF0BtVw%2FrrfBExRJ3vUyXMVc5rVZadGcONHmczmZN0GeedrYH1yz%2FyE6pPZq09yCGdvx7HYesjjzpnBIsUFUCzK4FCAzCXfpZN2jDcwG5caW1Ae0qtZCcjD28FHierzJIqrvhfOG1ObSUMYjfzjPoSvo397PsI%2BhT%2B0aBYpIAfJ%2BgysmkcuzElbT1CYKS5%2BL1KxPnf%2FOgcb2vxpuygyB4t%2BSehEOTe48G5CfsH6J%2F2eq%2BmVv1OdunZGplZt3%2FNY105sygnd6W35hVh1gZV%2FGrCREtR4ZerqrkSZgRa4S2%2BkjFRny6jjD0WbZR1O7qMkGww69WdLVG3%2FH34XD%2BhZAg782Zx2LvZTi2mqMtpMlDzHGd5ZMqI52gPdZcy%2Bcq6AI8qtuVkerGO%2FaBl4Sq8zMOIwFs3mVZY8z%2BCi4zBBQwSw%2FmsfE%2FyuPRNmznjUDVtqxuhB84wJApGqSjVIlEin8j8HRaIczsw6OmwwwY6pgFYL0L6wZIgrJeqz%2BgOusJw%2Bgj6ZxZOopy0CEInO1tWqwmziNOEFEP71IUgCK%2FC%2BH%2BKI25cVdGIVq2aGQj1y3YPiJSY3sun2tSoYZQ0NQOF0KHjd9F7qoNz0av1PJ4vftxdaXHAtRA8B5rTZzSk75M6owMqTMeNIVsTj0DB7xNwi9bsgSVlBnWO2gAlZnyiawoNCSCN6pNm2%2Bb8UYQrNVN8TI8uf6fz&X-Amz-Signature=138570648272370aad78f32037d0fece3e5d75fd50cdc40264a5a31eac7b799c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQKG36%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICaNC%2Br3Kgcq1Q46bytQthRujmo6%2BhwLkYSWmjM7OZJhAiBsNSGANpur7sHBOe8tE9zS%2FXKzAot8%2BnCzd9%2Fvh5zLsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX%2BzW1s7wikHH5ly1KtwDc8wvSZCSCmxAyY2eOmIl3s7S6jHSL7YgutfA%2F9Do1dBmRGkuOOG3etlLk3Z0ZEH2BoEphYU5O042RxRon1tfuVwFHKw3eLLOO0Q%2FLzDjdcg%2FesDCxDMyyiu6UpDSlfyYBdecE8IXaEVNwCHb89x57wOCWTnQZHaF0BtVw%2FrrfBExRJ3vUyXMVc5rVZadGcONHmczmZN0GeedrYH1yz%2FyE6pPZq09yCGdvx7HYesjjzpnBIsUFUCzK4FCAzCXfpZN2jDcwG5caW1Ae0qtZCcjD28FHierzJIqrvhfOG1ObSUMYjfzjPoSvo397PsI%2BhT%2B0aBYpIAfJ%2BgysmkcuzElbT1CYKS5%2BL1KxPnf%2FOgcb2vxpuygyB4t%2BSehEOTe48G5CfsH6J%2F2eq%2BmVv1OdunZGplZt3%2FNY105sygnd6W35hVh1gZV%2FGrCREtR4ZerqrkSZgRa4S2%2BkjFRny6jjD0WbZR1O7qMkGww69WdLVG3%2FH34XD%2BhZAg782Zx2LvZTi2mqMtpMlDzHGd5ZMqI52gPdZcy%2Bcq6AI8qtuVkerGO%2FaBl4Sq8zMOIwFs3mVZY8z%2BCi4zBBQwSw%2FmsfE%2FyuPRNmznjUDVtqxuhB84wJApGqSjVIlEin8j8HRaIczsw6OmwwwY6pgFYL0L6wZIgrJeqz%2BgOusJw%2Bgj6ZxZOopy0CEInO1tWqwmziNOEFEP71IUgCK%2FC%2BH%2BKI25cVdGIVq2aGQj1y3YPiJSY3sun2tSoYZQ0NQOF0KHjd9F7qoNz0av1PJ4vftxdaXHAtRA8B5rTZzSk75M6owMqTMeNIVsTj0DB7xNwi9bsgSVlBnWO2gAlZnyiawoNCSCN6pNm2%2Bb8UYQrNVN8TI8uf6fz&X-Amz-Signature=ef65e9703d35ad7a0a63c6f7400e14c37054eb5568f7e9d3a29dd32011bc0dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGQKG36%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICaNC%2Br3Kgcq1Q46bytQthRujmo6%2BhwLkYSWmjM7OZJhAiBsNSGANpur7sHBOe8tE9zS%2FXKzAot8%2BnCzd9%2Fvh5zLsyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX%2BzW1s7wikHH5ly1KtwDc8wvSZCSCmxAyY2eOmIl3s7S6jHSL7YgutfA%2F9Do1dBmRGkuOOG3etlLk3Z0ZEH2BoEphYU5O042RxRon1tfuVwFHKw3eLLOO0Q%2FLzDjdcg%2FesDCxDMyyiu6UpDSlfyYBdecE8IXaEVNwCHb89x57wOCWTnQZHaF0BtVw%2FrrfBExRJ3vUyXMVc5rVZadGcONHmczmZN0GeedrYH1yz%2FyE6pPZq09yCGdvx7HYesjjzpnBIsUFUCzK4FCAzCXfpZN2jDcwG5caW1Ae0qtZCcjD28FHierzJIqrvhfOG1ObSUMYjfzjPoSvo397PsI%2BhT%2B0aBYpIAfJ%2BgysmkcuzElbT1CYKS5%2BL1KxPnf%2FOgcb2vxpuygyB4t%2BSehEOTe48G5CfsH6J%2F2eq%2BmVv1OdunZGplZt3%2FNY105sygnd6W35hVh1gZV%2FGrCREtR4ZerqrkSZgRa4S2%2BkjFRny6jjD0WbZR1O7qMkGww69WdLVG3%2FH34XD%2BhZAg782Zx2LvZTi2mqMtpMlDzHGd5ZMqI52gPdZcy%2Bcq6AI8qtuVkerGO%2FaBl4Sq8zMOIwFs3mVZY8z%2BCi4zBBQwSw%2FmsfE%2FyuPRNmznjUDVtqxuhB84wJApGqSjVIlEin8j8HRaIczsw6OmwwwY6pgFYL0L6wZIgrJeqz%2BgOusJw%2Bgj6ZxZOopy0CEInO1tWqwmziNOEFEP71IUgCK%2FC%2BH%2BKI25cVdGIVq2aGQj1y3YPiJSY3sun2tSoYZQ0NQOF0KHjd9F7qoNz0av1PJ4vftxdaXHAtRA8B5rTZzSk75M6owMqTMeNIVsTj0DB7xNwi9bsgSVlBnWO2gAlZnyiawoNCSCN6pNm2%2Bb8UYQrNVN8TI8uf6fz&X-Amz-Signature=be8f68def9c7ec0386f0760f7223786e47d5869f4d17006378f54d7d3be7ecf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
