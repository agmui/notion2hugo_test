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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBDKRY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2c71Z5tHyfc302Yfku4yk8im9WxZEIhL5GkCeKo5SLQIgdYaS2SaZoVL5gfz95R7a686Uf%2FDvTgHdGhbwBspU8xwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJNBMdiPaf3lEQqG%2FyrcA5FFmvNoF8MT51TPYTUiKdBDtzT7uVAGl2lo7flYZ6VpbyvdCLIJwFQAoLFxlQG9V3NnylV8nCQKqvq8AciQf3nyO1TrJzPdfI5VouYo6jC%2F0RE6LiITsI1oKITJpbfiQE2vj%2FuqTVtEFjU4NwmeiP9RojpBNmRC1a8Uw6GWScZ%2BeKrfnaYn4DB%2FIWd1T36zmHjSFigYWrSDRTRWfixJnKH7hW9DayVO8hWlhw%2FQciDlt192iY8JF1YKRJzjLhZRJh8NBdgaOX7Tj94eAmBtyOELeUvgf0gVyqqvFNVALWI14sT7TXm32kw%2BYBNNH3AZ3wz3H6aL7lH1IEK5bcfwoFarHUYZXuwWuuktgA9SbEUjD8G0kp2jvCEKlPJJnDhliPDO2pBfR64rT1LD3cwXwerGHGPmH%2B7QfT%2FBJ1V7aMg7034a%2BIxaM2vNoSJ9U%2FnjTZ0JbcCbUM9rnkWDma7GDSlniuM9UECHdfRAUhZMwBrKLTvRb%2FJV16uA3yiPxPPu6P0Lc6LZ%2BzdEZc9Lm3LK5lhTXIfrdgyPQ2C8%2FHzjB7otKgL08JMELickGawgMi3c%2BHhHoHmhJzZZ%2FnNdOmsdbB6hWvss%2BZON3Q2Z%2Bz5J4EhR60xcJeXFzPoQh78uMOLMx8EGOqUBoEX7bvQtP%2BlA17rFqHXG7VylT47bIf9a2Lq5rokDFjywU6w357mylQVr8YIo%2FRy8%2BiGXEazbZCKbcHRxx7x3%2B%2Fn8QoVnPLGs4AaZm9TyLLPEOOY6xbQ4YVXblQi99VAcY5gDwEc1KB%2BxtdiVeBtpOStN8iBbWmjhpdZkg3Y7ZoNlqAy09LEc4mQHEADDvbe2INJih7cNA26ZhS4IZNqsjcFVLuBx&X-Amz-Signature=fa9847eb04eafb62fab8d2157af93048229cf38844bc951fbfaed7bf04afa6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBDKRY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2c71Z5tHyfc302Yfku4yk8im9WxZEIhL5GkCeKo5SLQIgdYaS2SaZoVL5gfz95R7a686Uf%2FDvTgHdGhbwBspU8xwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJNBMdiPaf3lEQqG%2FyrcA5FFmvNoF8MT51TPYTUiKdBDtzT7uVAGl2lo7flYZ6VpbyvdCLIJwFQAoLFxlQG9V3NnylV8nCQKqvq8AciQf3nyO1TrJzPdfI5VouYo6jC%2F0RE6LiITsI1oKITJpbfiQE2vj%2FuqTVtEFjU4NwmeiP9RojpBNmRC1a8Uw6GWScZ%2BeKrfnaYn4DB%2FIWd1T36zmHjSFigYWrSDRTRWfixJnKH7hW9DayVO8hWlhw%2FQciDlt192iY8JF1YKRJzjLhZRJh8NBdgaOX7Tj94eAmBtyOELeUvgf0gVyqqvFNVALWI14sT7TXm32kw%2BYBNNH3AZ3wz3H6aL7lH1IEK5bcfwoFarHUYZXuwWuuktgA9SbEUjD8G0kp2jvCEKlPJJnDhliPDO2pBfR64rT1LD3cwXwerGHGPmH%2B7QfT%2FBJ1V7aMg7034a%2BIxaM2vNoSJ9U%2FnjTZ0JbcCbUM9rnkWDma7GDSlniuM9UECHdfRAUhZMwBrKLTvRb%2FJV16uA3yiPxPPu6P0Lc6LZ%2BzdEZc9Lm3LK5lhTXIfrdgyPQ2C8%2FHzjB7otKgL08JMELickGawgMi3c%2BHhHoHmhJzZZ%2FnNdOmsdbB6hWvss%2BZON3Q2Z%2Bz5J4EhR60xcJeXFzPoQh78uMOLMx8EGOqUBoEX7bvQtP%2BlA17rFqHXG7VylT47bIf9a2Lq5rokDFjywU6w357mylQVr8YIo%2FRy8%2BiGXEazbZCKbcHRxx7x3%2B%2Fn8QoVnPLGs4AaZm9TyLLPEOOY6xbQ4YVXblQi99VAcY5gDwEc1KB%2BxtdiVeBtpOStN8iBbWmjhpdZkg3Y7ZoNlqAy09LEc4mQHEADDvbe2INJih7cNA26ZhS4IZNqsjcFVLuBx&X-Amz-Signature=4ceb8cf5561d7f7722473d2bf59a8e6eea2cf0d11d546c9effa433a5b27fb55a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBDKRY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2c71Z5tHyfc302Yfku4yk8im9WxZEIhL5GkCeKo5SLQIgdYaS2SaZoVL5gfz95R7a686Uf%2FDvTgHdGhbwBspU8xwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJNBMdiPaf3lEQqG%2FyrcA5FFmvNoF8MT51TPYTUiKdBDtzT7uVAGl2lo7flYZ6VpbyvdCLIJwFQAoLFxlQG9V3NnylV8nCQKqvq8AciQf3nyO1TrJzPdfI5VouYo6jC%2F0RE6LiITsI1oKITJpbfiQE2vj%2FuqTVtEFjU4NwmeiP9RojpBNmRC1a8Uw6GWScZ%2BeKrfnaYn4DB%2FIWd1T36zmHjSFigYWrSDRTRWfixJnKH7hW9DayVO8hWlhw%2FQciDlt192iY8JF1YKRJzjLhZRJh8NBdgaOX7Tj94eAmBtyOELeUvgf0gVyqqvFNVALWI14sT7TXm32kw%2BYBNNH3AZ3wz3H6aL7lH1IEK5bcfwoFarHUYZXuwWuuktgA9SbEUjD8G0kp2jvCEKlPJJnDhliPDO2pBfR64rT1LD3cwXwerGHGPmH%2B7QfT%2FBJ1V7aMg7034a%2BIxaM2vNoSJ9U%2FnjTZ0JbcCbUM9rnkWDma7GDSlniuM9UECHdfRAUhZMwBrKLTvRb%2FJV16uA3yiPxPPu6P0Lc6LZ%2BzdEZc9Lm3LK5lhTXIfrdgyPQ2C8%2FHzjB7otKgL08JMELickGawgMi3c%2BHhHoHmhJzZZ%2FnNdOmsdbB6hWvss%2BZON3Q2Z%2Bz5J4EhR60xcJeXFzPoQh78uMOLMx8EGOqUBoEX7bvQtP%2BlA17rFqHXG7VylT47bIf9a2Lq5rokDFjywU6w357mylQVr8YIo%2FRy8%2BiGXEazbZCKbcHRxx7x3%2B%2Fn8QoVnPLGs4AaZm9TyLLPEOOY6xbQ4YVXblQi99VAcY5gDwEc1KB%2BxtdiVeBtpOStN8iBbWmjhpdZkg3Y7ZoNlqAy09LEc4mQHEADDvbe2INJih7cNA26ZhS4IZNqsjcFVLuBx&X-Amz-Signature=bc1112151ca843ae543d66740617e761dc8dd1f8066deaeeda65df665dc36bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBDKRY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2c71Z5tHyfc302Yfku4yk8im9WxZEIhL5GkCeKo5SLQIgdYaS2SaZoVL5gfz95R7a686Uf%2FDvTgHdGhbwBspU8xwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJNBMdiPaf3lEQqG%2FyrcA5FFmvNoF8MT51TPYTUiKdBDtzT7uVAGl2lo7flYZ6VpbyvdCLIJwFQAoLFxlQG9V3NnylV8nCQKqvq8AciQf3nyO1TrJzPdfI5VouYo6jC%2F0RE6LiITsI1oKITJpbfiQE2vj%2FuqTVtEFjU4NwmeiP9RojpBNmRC1a8Uw6GWScZ%2BeKrfnaYn4DB%2FIWd1T36zmHjSFigYWrSDRTRWfixJnKH7hW9DayVO8hWlhw%2FQciDlt192iY8JF1YKRJzjLhZRJh8NBdgaOX7Tj94eAmBtyOELeUvgf0gVyqqvFNVALWI14sT7TXm32kw%2BYBNNH3AZ3wz3H6aL7lH1IEK5bcfwoFarHUYZXuwWuuktgA9SbEUjD8G0kp2jvCEKlPJJnDhliPDO2pBfR64rT1LD3cwXwerGHGPmH%2B7QfT%2FBJ1V7aMg7034a%2BIxaM2vNoSJ9U%2FnjTZ0JbcCbUM9rnkWDma7GDSlniuM9UECHdfRAUhZMwBrKLTvRb%2FJV16uA3yiPxPPu6P0Lc6LZ%2BzdEZc9Lm3LK5lhTXIfrdgyPQ2C8%2FHzjB7otKgL08JMELickGawgMi3c%2BHhHoHmhJzZZ%2FnNdOmsdbB6hWvss%2BZON3Q2Z%2Bz5J4EhR60xcJeXFzPoQh78uMOLMx8EGOqUBoEX7bvQtP%2BlA17rFqHXG7VylT47bIf9a2Lq5rokDFjywU6w357mylQVr8YIo%2FRy8%2BiGXEazbZCKbcHRxx7x3%2B%2Fn8QoVnPLGs4AaZm9TyLLPEOOY6xbQ4YVXblQi99VAcY5gDwEc1KB%2BxtdiVeBtpOStN8iBbWmjhpdZkg3Y7ZoNlqAy09LEc4mQHEADDvbe2INJih7cNA26ZhS4IZNqsjcFVLuBx&X-Amz-Signature=a5a29e801c20bf2a5ee01e17edc58a864315bdabb513f039851939e5c1a2d5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBDKRY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2c71Z5tHyfc302Yfku4yk8im9WxZEIhL5GkCeKo5SLQIgdYaS2SaZoVL5gfz95R7a686Uf%2FDvTgHdGhbwBspU8xwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJNBMdiPaf3lEQqG%2FyrcA5FFmvNoF8MT51TPYTUiKdBDtzT7uVAGl2lo7flYZ6VpbyvdCLIJwFQAoLFxlQG9V3NnylV8nCQKqvq8AciQf3nyO1TrJzPdfI5VouYo6jC%2F0RE6LiITsI1oKITJpbfiQE2vj%2FuqTVtEFjU4NwmeiP9RojpBNmRC1a8Uw6GWScZ%2BeKrfnaYn4DB%2FIWd1T36zmHjSFigYWrSDRTRWfixJnKH7hW9DayVO8hWlhw%2FQciDlt192iY8JF1YKRJzjLhZRJh8NBdgaOX7Tj94eAmBtyOELeUvgf0gVyqqvFNVALWI14sT7TXm32kw%2BYBNNH3AZ3wz3H6aL7lH1IEK5bcfwoFarHUYZXuwWuuktgA9SbEUjD8G0kp2jvCEKlPJJnDhliPDO2pBfR64rT1LD3cwXwerGHGPmH%2B7QfT%2FBJ1V7aMg7034a%2BIxaM2vNoSJ9U%2FnjTZ0JbcCbUM9rnkWDma7GDSlniuM9UECHdfRAUhZMwBrKLTvRb%2FJV16uA3yiPxPPu6P0Lc6LZ%2BzdEZc9Lm3LK5lhTXIfrdgyPQ2C8%2FHzjB7otKgL08JMELickGawgMi3c%2BHhHoHmhJzZZ%2FnNdOmsdbB6hWvss%2BZON3Q2Z%2Bz5J4EhR60xcJeXFzPoQh78uMOLMx8EGOqUBoEX7bvQtP%2BlA17rFqHXG7VylT47bIf9a2Lq5rokDFjywU6w357mylQVr8YIo%2FRy8%2BiGXEazbZCKbcHRxx7x3%2B%2Fn8QoVnPLGs4AaZm9TyLLPEOOY6xbQ4YVXblQi99VAcY5gDwEc1KB%2BxtdiVeBtpOStN8iBbWmjhpdZkg3Y7ZoNlqAy09LEc4mQHEADDvbe2INJih7cNA26ZhS4IZNqsjcFVLuBx&X-Amz-Signature=59e8fc87c080271363675363c66cb6a8fc8a3652827b645e5b55533f2b628423&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBDKRY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2c71Z5tHyfc302Yfku4yk8im9WxZEIhL5GkCeKo5SLQIgdYaS2SaZoVL5gfz95R7a686Uf%2FDvTgHdGhbwBspU8xwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJNBMdiPaf3lEQqG%2FyrcA5FFmvNoF8MT51TPYTUiKdBDtzT7uVAGl2lo7flYZ6VpbyvdCLIJwFQAoLFxlQG9V3NnylV8nCQKqvq8AciQf3nyO1TrJzPdfI5VouYo6jC%2F0RE6LiITsI1oKITJpbfiQE2vj%2FuqTVtEFjU4NwmeiP9RojpBNmRC1a8Uw6GWScZ%2BeKrfnaYn4DB%2FIWd1T36zmHjSFigYWrSDRTRWfixJnKH7hW9DayVO8hWlhw%2FQciDlt192iY8JF1YKRJzjLhZRJh8NBdgaOX7Tj94eAmBtyOELeUvgf0gVyqqvFNVALWI14sT7TXm32kw%2BYBNNH3AZ3wz3H6aL7lH1IEK5bcfwoFarHUYZXuwWuuktgA9SbEUjD8G0kp2jvCEKlPJJnDhliPDO2pBfR64rT1LD3cwXwerGHGPmH%2B7QfT%2FBJ1V7aMg7034a%2BIxaM2vNoSJ9U%2FnjTZ0JbcCbUM9rnkWDma7GDSlniuM9UECHdfRAUhZMwBrKLTvRb%2FJV16uA3yiPxPPu6P0Lc6LZ%2BzdEZc9Lm3LK5lhTXIfrdgyPQ2C8%2FHzjB7otKgL08JMELickGawgMi3c%2BHhHoHmhJzZZ%2FnNdOmsdbB6hWvss%2BZON3Q2Z%2Bz5J4EhR60xcJeXFzPoQh78uMOLMx8EGOqUBoEX7bvQtP%2BlA17rFqHXG7VylT47bIf9a2Lq5rokDFjywU6w357mylQVr8YIo%2FRy8%2BiGXEazbZCKbcHRxx7x3%2B%2Fn8QoVnPLGs4AaZm9TyLLPEOOY6xbQ4YVXblQi99VAcY5gDwEc1KB%2BxtdiVeBtpOStN8iBbWmjhpdZkg3Y7ZoNlqAy09LEc4mQHEADDvbe2INJih7cNA26ZhS4IZNqsjcFVLuBx&X-Amz-Signature=9fd51520b338abb8da4d2ab2b5985b7b449ffe34a9b71c6cf6ac4f9ab32a35df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBDKRY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC2c71Z5tHyfc302Yfku4yk8im9WxZEIhL5GkCeKo5SLQIgdYaS2SaZoVL5gfz95R7a686Uf%2FDvTgHdGhbwBspU8xwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJNBMdiPaf3lEQqG%2FyrcA5FFmvNoF8MT51TPYTUiKdBDtzT7uVAGl2lo7flYZ6VpbyvdCLIJwFQAoLFxlQG9V3NnylV8nCQKqvq8AciQf3nyO1TrJzPdfI5VouYo6jC%2F0RE6LiITsI1oKITJpbfiQE2vj%2FuqTVtEFjU4NwmeiP9RojpBNmRC1a8Uw6GWScZ%2BeKrfnaYn4DB%2FIWd1T36zmHjSFigYWrSDRTRWfixJnKH7hW9DayVO8hWlhw%2FQciDlt192iY8JF1YKRJzjLhZRJh8NBdgaOX7Tj94eAmBtyOELeUvgf0gVyqqvFNVALWI14sT7TXm32kw%2BYBNNH3AZ3wz3H6aL7lH1IEK5bcfwoFarHUYZXuwWuuktgA9SbEUjD8G0kp2jvCEKlPJJnDhliPDO2pBfR64rT1LD3cwXwerGHGPmH%2B7QfT%2FBJ1V7aMg7034a%2BIxaM2vNoSJ9U%2FnjTZ0JbcCbUM9rnkWDma7GDSlniuM9UECHdfRAUhZMwBrKLTvRb%2FJV16uA3yiPxPPu6P0Lc6LZ%2BzdEZc9Lm3LK5lhTXIfrdgyPQ2C8%2FHzjB7otKgL08JMELickGawgMi3c%2BHhHoHmhJzZZ%2FnNdOmsdbB6hWvss%2BZON3Q2Z%2Bz5J4EhR60xcJeXFzPoQh78uMOLMx8EGOqUBoEX7bvQtP%2BlA17rFqHXG7VylT47bIf9a2Lq5rokDFjywU6w357mylQVr8YIo%2FRy8%2BiGXEazbZCKbcHRxx7x3%2B%2Fn8QoVnPLGs4AaZm9TyLLPEOOY6xbQ4YVXblQi99VAcY5gDwEc1KB%2BxtdiVeBtpOStN8iBbWmjhpdZkg3Y7ZoNlqAy09LEc4mQHEADDvbe2INJih7cNA26ZhS4IZNqsjcFVLuBx&X-Amz-Signature=088d8e77c731a0950c6b31faee1a90a6015607270e6b3408d1e2a3a7dfa29acc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
