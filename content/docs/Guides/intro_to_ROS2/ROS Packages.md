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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRBCZ5X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5k%2FIJxfsnK77cAJ4EV7JasXQaaFg3aGuRoj9DC5%2F5AiEAxcT%2BDtgQQqi2rJEEPx7aTwamAu23dijkIPr1%2F96wXZYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJhOyPpl95h87gnA5yrcAxDJNxWYof3oKOPHPWTnTEGasWTu71zqaNhKY3raX0lqXrw%2Bl7bz%2BVu7W6YbljoTyofj7HGllR8nbYGujHWGMyDSeP5BTmXyE8edFdERC4Z3j3jXOKJk3l8UDIVgOp9i8O2rwx0swdrEeIaLJ7eWjDzwIr5yVGIHBOmMj7kFp7WVOuAL7UrVjBJxxAJh2nPQ4vij3rvsiNi4ybWEqZNosumwHldiQpmBFwXjXNGjJxe50y0TwDma%2BcNPTXYzIAxAM06qtNN9nhjoC5TXsVA17ILGbSrzptWsQ9XDyGJS%2F6aMyXm8WJKx4MyCIoPt3H%2BKu8q%2BxV18%2FgV%2FkpoRnM8TwRZdNeFxjyq%2Biy4rbBQ0TA39c573oJ2Fa13NVL79V8wvrU%2BMgsS7TErVjyZNFeatv2wyIPHTW2YT6atk%2FvMfAAcPrPX8Mvcz%2B9AK3WxFccPKXxo0pfRE%2FS%2FB64PlX9h3ALlugk0PoFY1PxYMW2eYelXpm7R4JJ4Bso71B0U%2Fn9AMMVA7zdkKZwJDunCtuM7qZ1yjQ0DfRgbQMl5EILrxaJH4isp%2FhTWJ7brH4zRmRBOmDbk3qx1rKlh7U2AQec3YH%2BETo%2F1WoxiRgcJ5wmZ2DBwVJ6c8lwin06iYzMaiMNHmhMAGOqUBgVAtllxHdnQ3neZuvdRyZznIFNdcoND03v9fA1g5r4uugKEFHNywxx6Z0b5%2Bx%2BBlHrqqgN0Muf3xnk18QkI4p3A4cWXpr3AF%2FeAtHLOsxgi47SN6G2KZ%2FfEeAGg8KCXFGPcylsx72JLBYz9tuL9rt9E0eD2zQ598A40fu%2BoqGymBISqw7Pkbty6RHHgNWXsXP6pbnWq6ZChv7dWCMzwuI3TzDX0o&X-Amz-Signature=0f4cad416940e192b16f382e3658dcaee317018fd4795a3304d13807144067cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRBCZ5X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5k%2FIJxfsnK77cAJ4EV7JasXQaaFg3aGuRoj9DC5%2F5AiEAxcT%2BDtgQQqi2rJEEPx7aTwamAu23dijkIPr1%2F96wXZYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJhOyPpl95h87gnA5yrcAxDJNxWYof3oKOPHPWTnTEGasWTu71zqaNhKY3raX0lqXrw%2Bl7bz%2BVu7W6YbljoTyofj7HGllR8nbYGujHWGMyDSeP5BTmXyE8edFdERC4Z3j3jXOKJk3l8UDIVgOp9i8O2rwx0swdrEeIaLJ7eWjDzwIr5yVGIHBOmMj7kFp7WVOuAL7UrVjBJxxAJh2nPQ4vij3rvsiNi4ybWEqZNosumwHldiQpmBFwXjXNGjJxe50y0TwDma%2BcNPTXYzIAxAM06qtNN9nhjoC5TXsVA17ILGbSrzptWsQ9XDyGJS%2F6aMyXm8WJKx4MyCIoPt3H%2BKu8q%2BxV18%2FgV%2FkpoRnM8TwRZdNeFxjyq%2Biy4rbBQ0TA39c573oJ2Fa13NVL79V8wvrU%2BMgsS7TErVjyZNFeatv2wyIPHTW2YT6atk%2FvMfAAcPrPX8Mvcz%2B9AK3WxFccPKXxo0pfRE%2FS%2FB64PlX9h3ALlugk0PoFY1PxYMW2eYelXpm7R4JJ4Bso71B0U%2Fn9AMMVA7zdkKZwJDunCtuM7qZ1yjQ0DfRgbQMl5EILrxaJH4isp%2FhTWJ7brH4zRmRBOmDbk3qx1rKlh7U2AQec3YH%2BETo%2F1WoxiRgcJ5wmZ2DBwVJ6c8lwin06iYzMaiMNHmhMAGOqUBgVAtllxHdnQ3neZuvdRyZznIFNdcoND03v9fA1g5r4uugKEFHNywxx6Z0b5%2Bx%2BBlHrqqgN0Muf3xnk18QkI4p3A4cWXpr3AF%2FeAtHLOsxgi47SN6G2KZ%2FfEeAGg8KCXFGPcylsx72JLBYz9tuL9rt9E0eD2zQ598A40fu%2BoqGymBISqw7Pkbty6RHHgNWXsXP6pbnWq6ZChv7dWCMzwuI3TzDX0o&X-Amz-Signature=d7c90ca5a07052265c2115db94e4fb7dcb3179ae8f0fccdeb259310076154c37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRBCZ5X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5k%2FIJxfsnK77cAJ4EV7JasXQaaFg3aGuRoj9DC5%2F5AiEAxcT%2BDtgQQqi2rJEEPx7aTwamAu23dijkIPr1%2F96wXZYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJhOyPpl95h87gnA5yrcAxDJNxWYof3oKOPHPWTnTEGasWTu71zqaNhKY3raX0lqXrw%2Bl7bz%2BVu7W6YbljoTyofj7HGllR8nbYGujHWGMyDSeP5BTmXyE8edFdERC4Z3j3jXOKJk3l8UDIVgOp9i8O2rwx0swdrEeIaLJ7eWjDzwIr5yVGIHBOmMj7kFp7WVOuAL7UrVjBJxxAJh2nPQ4vij3rvsiNi4ybWEqZNosumwHldiQpmBFwXjXNGjJxe50y0TwDma%2BcNPTXYzIAxAM06qtNN9nhjoC5TXsVA17ILGbSrzptWsQ9XDyGJS%2F6aMyXm8WJKx4MyCIoPt3H%2BKu8q%2BxV18%2FgV%2FkpoRnM8TwRZdNeFxjyq%2Biy4rbBQ0TA39c573oJ2Fa13NVL79V8wvrU%2BMgsS7TErVjyZNFeatv2wyIPHTW2YT6atk%2FvMfAAcPrPX8Mvcz%2B9AK3WxFccPKXxo0pfRE%2FS%2FB64PlX9h3ALlugk0PoFY1PxYMW2eYelXpm7R4JJ4Bso71B0U%2Fn9AMMVA7zdkKZwJDunCtuM7qZ1yjQ0DfRgbQMl5EILrxaJH4isp%2FhTWJ7brH4zRmRBOmDbk3qx1rKlh7U2AQec3YH%2BETo%2F1WoxiRgcJ5wmZ2DBwVJ6c8lwin06iYzMaiMNHmhMAGOqUBgVAtllxHdnQ3neZuvdRyZznIFNdcoND03v9fA1g5r4uugKEFHNywxx6Z0b5%2Bx%2BBlHrqqgN0Muf3xnk18QkI4p3A4cWXpr3AF%2FeAtHLOsxgi47SN6G2KZ%2FfEeAGg8KCXFGPcylsx72JLBYz9tuL9rt9E0eD2zQ598A40fu%2BoqGymBISqw7Pkbty6RHHgNWXsXP6pbnWq6ZChv7dWCMzwuI3TzDX0o&X-Amz-Signature=24721eef327bbedc446af044f1169b13db7c0385a4bcaeee067ca548094ca380&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRBCZ5X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5k%2FIJxfsnK77cAJ4EV7JasXQaaFg3aGuRoj9DC5%2F5AiEAxcT%2BDtgQQqi2rJEEPx7aTwamAu23dijkIPr1%2F96wXZYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJhOyPpl95h87gnA5yrcAxDJNxWYof3oKOPHPWTnTEGasWTu71zqaNhKY3raX0lqXrw%2Bl7bz%2BVu7W6YbljoTyofj7HGllR8nbYGujHWGMyDSeP5BTmXyE8edFdERC4Z3j3jXOKJk3l8UDIVgOp9i8O2rwx0swdrEeIaLJ7eWjDzwIr5yVGIHBOmMj7kFp7WVOuAL7UrVjBJxxAJh2nPQ4vij3rvsiNi4ybWEqZNosumwHldiQpmBFwXjXNGjJxe50y0TwDma%2BcNPTXYzIAxAM06qtNN9nhjoC5TXsVA17ILGbSrzptWsQ9XDyGJS%2F6aMyXm8WJKx4MyCIoPt3H%2BKu8q%2BxV18%2FgV%2FkpoRnM8TwRZdNeFxjyq%2Biy4rbBQ0TA39c573oJ2Fa13NVL79V8wvrU%2BMgsS7TErVjyZNFeatv2wyIPHTW2YT6atk%2FvMfAAcPrPX8Mvcz%2B9AK3WxFccPKXxo0pfRE%2FS%2FB64PlX9h3ALlugk0PoFY1PxYMW2eYelXpm7R4JJ4Bso71B0U%2Fn9AMMVA7zdkKZwJDunCtuM7qZ1yjQ0DfRgbQMl5EILrxaJH4isp%2FhTWJ7brH4zRmRBOmDbk3qx1rKlh7U2AQec3YH%2BETo%2F1WoxiRgcJ5wmZ2DBwVJ6c8lwin06iYzMaiMNHmhMAGOqUBgVAtllxHdnQ3neZuvdRyZznIFNdcoND03v9fA1g5r4uugKEFHNywxx6Z0b5%2Bx%2BBlHrqqgN0Muf3xnk18QkI4p3A4cWXpr3AF%2FeAtHLOsxgi47SN6G2KZ%2FfEeAGg8KCXFGPcylsx72JLBYz9tuL9rt9E0eD2zQ598A40fu%2BoqGymBISqw7Pkbty6RHHgNWXsXP6pbnWq6ZChv7dWCMzwuI3TzDX0o&X-Amz-Signature=d2ac5b6a9fc71efb811552969d339e8435f9b7471685c7502a58722574c39f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRBCZ5X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5k%2FIJxfsnK77cAJ4EV7JasXQaaFg3aGuRoj9DC5%2F5AiEAxcT%2BDtgQQqi2rJEEPx7aTwamAu23dijkIPr1%2F96wXZYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJhOyPpl95h87gnA5yrcAxDJNxWYof3oKOPHPWTnTEGasWTu71zqaNhKY3raX0lqXrw%2Bl7bz%2BVu7W6YbljoTyofj7HGllR8nbYGujHWGMyDSeP5BTmXyE8edFdERC4Z3j3jXOKJk3l8UDIVgOp9i8O2rwx0swdrEeIaLJ7eWjDzwIr5yVGIHBOmMj7kFp7WVOuAL7UrVjBJxxAJh2nPQ4vij3rvsiNi4ybWEqZNosumwHldiQpmBFwXjXNGjJxe50y0TwDma%2BcNPTXYzIAxAM06qtNN9nhjoC5TXsVA17ILGbSrzptWsQ9XDyGJS%2F6aMyXm8WJKx4MyCIoPt3H%2BKu8q%2BxV18%2FgV%2FkpoRnM8TwRZdNeFxjyq%2Biy4rbBQ0TA39c573oJ2Fa13NVL79V8wvrU%2BMgsS7TErVjyZNFeatv2wyIPHTW2YT6atk%2FvMfAAcPrPX8Mvcz%2B9AK3WxFccPKXxo0pfRE%2FS%2FB64PlX9h3ALlugk0PoFY1PxYMW2eYelXpm7R4JJ4Bso71B0U%2Fn9AMMVA7zdkKZwJDunCtuM7qZ1yjQ0DfRgbQMl5EILrxaJH4isp%2FhTWJ7brH4zRmRBOmDbk3qx1rKlh7U2AQec3YH%2BETo%2F1WoxiRgcJ5wmZ2DBwVJ6c8lwin06iYzMaiMNHmhMAGOqUBgVAtllxHdnQ3neZuvdRyZznIFNdcoND03v9fA1g5r4uugKEFHNywxx6Z0b5%2Bx%2BBlHrqqgN0Muf3xnk18QkI4p3A4cWXpr3AF%2FeAtHLOsxgi47SN6G2KZ%2FfEeAGg8KCXFGPcylsx72JLBYz9tuL9rt9E0eD2zQ598A40fu%2BoqGymBISqw7Pkbty6RHHgNWXsXP6pbnWq6ZChv7dWCMzwuI3TzDX0o&X-Amz-Signature=aa12c81bd9e21e4e29efc6d72b06473fa9c3e72348b1182605f628631f836b50&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRBCZ5X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5k%2FIJxfsnK77cAJ4EV7JasXQaaFg3aGuRoj9DC5%2F5AiEAxcT%2BDtgQQqi2rJEEPx7aTwamAu23dijkIPr1%2F96wXZYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJhOyPpl95h87gnA5yrcAxDJNxWYof3oKOPHPWTnTEGasWTu71zqaNhKY3raX0lqXrw%2Bl7bz%2BVu7W6YbljoTyofj7HGllR8nbYGujHWGMyDSeP5BTmXyE8edFdERC4Z3j3jXOKJk3l8UDIVgOp9i8O2rwx0swdrEeIaLJ7eWjDzwIr5yVGIHBOmMj7kFp7WVOuAL7UrVjBJxxAJh2nPQ4vij3rvsiNi4ybWEqZNosumwHldiQpmBFwXjXNGjJxe50y0TwDma%2BcNPTXYzIAxAM06qtNN9nhjoC5TXsVA17ILGbSrzptWsQ9XDyGJS%2F6aMyXm8WJKx4MyCIoPt3H%2BKu8q%2BxV18%2FgV%2FkpoRnM8TwRZdNeFxjyq%2Biy4rbBQ0TA39c573oJ2Fa13NVL79V8wvrU%2BMgsS7TErVjyZNFeatv2wyIPHTW2YT6atk%2FvMfAAcPrPX8Mvcz%2B9AK3WxFccPKXxo0pfRE%2FS%2FB64PlX9h3ALlugk0PoFY1PxYMW2eYelXpm7R4JJ4Bso71B0U%2Fn9AMMVA7zdkKZwJDunCtuM7qZ1yjQ0DfRgbQMl5EILrxaJH4isp%2FhTWJ7brH4zRmRBOmDbk3qx1rKlh7U2AQec3YH%2BETo%2F1WoxiRgcJ5wmZ2DBwVJ6c8lwin06iYzMaiMNHmhMAGOqUBgVAtllxHdnQ3neZuvdRyZznIFNdcoND03v9fA1g5r4uugKEFHNywxx6Z0b5%2Bx%2BBlHrqqgN0Muf3xnk18QkI4p3A4cWXpr3AF%2FeAtHLOsxgi47SN6G2KZ%2FfEeAGg8KCXFGPcylsx72JLBYz9tuL9rt9E0eD2zQ598A40fu%2BoqGymBISqw7Pkbty6RHHgNWXsXP6pbnWq6ZChv7dWCMzwuI3TzDX0o&X-Amz-Signature=e0e62c33c4ac0e67f8510d270721a702120917e515d2f9bb9ea496b0cc712e61&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PRBCZ5X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5k%2FIJxfsnK77cAJ4EV7JasXQaaFg3aGuRoj9DC5%2F5AiEAxcT%2BDtgQQqi2rJEEPx7aTwamAu23dijkIPr1%2F96wXZYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJhOyPpl95h87gnA5yrcAxDJNxWYof3oKOPHPWTnTEGasWTu71zqaNhKY3raX0lqXrw%2Bl7bz%2BVu7W6YbljoTyofj7HGllR8nbYGujHWGMyDSeP5BTmXyE8edFdERC4Z3j3jXOKJk3l8UDIVgOp9i8O2rwx0swdrEeIaLJ7eWjDzwIr5yVGIHBOmMj7kFp7WVOuAL7UrVjBJxxAJh2nPQ4vij3rvsiNi4ybWEqZNosumwHldiQpmBFwXjXNGjJxe50y0TwDma%2BcNPTXYzIAxAM06qtNN9nhjoC5TXsVA17ILGbSrzptWsQ9XDyGJS%2F6aMyXm8WJKx4MyCIoPt3H%2BKu8q%2BxV18%2FgV%2FkpoRnM8TwRZdNeFxjyq%2Biy4rbBQ0TA39c573oJ2Fa13NVL79V8wvrU%2BMgsS7TErVjyZNFeatv2wyIPHTW2YT6atk%2FvMfAAcPrPX8Mvcz%2B9AK3WxFccPKXxo0pfRE%2FS%2FB64PlX9h3ALlugk0PoFY1PxYMW2eYelXpm7R4JJ4Bso71B0U%2Fn9AMMVA7zdkKZwJDunCtuM7qZ1yjQ0DfRgbQMl5EILrxaJH4isp%2FhTWJ7brH4zRmRBOmDbk3qx1rKlh7U2AQec3YH%2BETo%2F1WoxiRgcJ5wmZ2DBwVJ6c8lwin06iYzMaiMNHmhMAGOqUBgVAtllxHdnQ3neZuvdRyZznIFNdcoND03v9fA1g5r4uugKEFHNywxx6Z0b5%2Bx%2BBlHrqqgN0Muf3xnk18QkI4p3A4cWXpr3AF%2FeAtHLOsxgi47SN6G2KZ%2FfEeAGg8KCXFGPcylsx72JLBYz9tuL9rt9E0eD2zQ598A40fu%2BoqGymBISqw7Pkbty6RHHgNWXsXP6pbnWq6ZChv7dWCMzwuI3TzDX0o&X-Amz-Signature=84dc6d5e19a40adc959361c226bcbc5b28f6916f8b312d5203d945cb6b98531b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
