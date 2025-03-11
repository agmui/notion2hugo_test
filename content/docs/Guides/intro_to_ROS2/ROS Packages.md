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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAJNWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtQYJoZBwaQzI5ZoixwC0szO41xk5kVM6B%2BErEZQu0cwIgWpiM8%2FCbnJeB6Y50H%2F5Ba0lmcbqKA0Rm5DrruO7LA0AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkXuXwack5KgQD6CyrcA5m%2BuxKaFpBTWHMxKAjjXJunGMJFzl9%2BBzm0p0qogQP%2Fkctu9UZ5Q9BappkcWWUDtiB9PIZNgZ%2FtHtVhrjQudjUvu9j%2Fv6WLq9NRwzj5YLhi4vckUiepBHDhLrVrxFHMmy7AU48X5lPEe8M2iGUpuaKzcfSxrrKHfZ0XbUQ0NStS%2FZ6rbiA9giXqimRY2XC4UE20Z%2BVUGtxXk%2FBo49wGI721aZUmVERaKYZ3PQ8VgL%2FChlUEkfJjd3uPuEsHpueVB%2F5ZAtcZuJG5i%2FDBvHsvnX0fbJS9TTF3hQTLtlzeUjmr2ozLE1s%2FpvbgElReRSjtfpWqg4rd0V8IH%2FP5o1bRTBow1KK24g%2B%2BQ0J%2BsKTZFX4pAPzHOmU4jr2Kj5YHnNoA4TKOiTs0GqrrT4x7gersx%2FUwZ1Knz2rKRaAeHkDop9XaEnog1hLp6i8tKzoJRTZJp8wzpGpatWIqbGAD7hAGgX6H0FuIQPMaus4bjSCqBqLTz34807taNrwd%2BQSRfDj9QoJvpO5rLGDLx1fXUg1bzwzb8WN7PZRGctCkB2LweGzl%2BVw25k3hG5gmYIYqWiznCkVqO2BRB2Dh19JTxW8CIsWQl8mRTiCHypS5s4I%2BpMb%2FEb%2FjP08tMhne3q9JMKfzwb4GOqUBoa%2FWZfxGz5YMbbU4f3fIk4JDOmVDvLCQMN4R1N3wT1c3Ai07GIXibQIjfiV2cpCwSqC34jON7Ko92K6lAZz2goLAf09TifGANi6TOrgqPBlGpPLgkbO3tc%2F6JhcNuPdt7I%2FFHZC5DzkbrRHvSVl8rp6L1yXKX7LhtKOp2VTDq9IvZuoeVVBJ2SeVr%2B2Ib5Dfu%2Fg6WX23V2oWgoTFOUTdWxl5fPsB&X-Amz-Signature=8bde8505d130c95db241482fc060c15bd0db62ffa22f8aa733aec1736481024f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAJNWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtQYJoZBwaQzI5ZoixwC0szO41xk5kVM6B%2BErEZQu0cwIgWpiM8%2FCbnJeB6Y50H%2F5Ba0lmcbqKA0Rm5DrruO7LA0AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkXuXwack5KgQD6CyrcA5m%2BuxKaFpBTWHMxKAjjXJunGMJFzl9%2BBzm0p0qogQP%2Fkctu9UZ5Q9BappkcWWUDtiB9PIZNgZ%2FtHtVhrjQudjUvu9j%2Fv6WLq9NRwzj5YLhi4vckUiepBHDhLrVrxFHMmy7AU48X5lPEe8M2iGUpuaKzcfSxrrKHfZ0XbUQ0NStS%2FZ6rbiA9giXqimRY2XC4UE20Z%2BVUGtxXk%2FBo49wGI721aZUmVERaKYZ3PQ8VgL%2FChlUEkfJjd3uPuEsHpueVB%2F5ZAtcZuJG5i%2FDBvHsvnX0fbJS9TTF3hQTLtlzeUjmr2ozLE1s%2FpvbgElReRSjtfpWqg4rd0V8IH%2FP5o1bRTBow1KK24g%2B%2BQ0J%2BsKTZFX4pAPzHOmU4jr2Kj5YHnNoA4TKOiTs0GqrrT4x7gersx%2FUwZ1Knz2rKRaAeHkDop9XaEnog1hLp6i8tKzoJRTZJp8wzpGpatWIqbGAD7hAGgX6H0FuIQPMaus4bjSCqBqLTz34807taNrwd%2BQSRfDj9QoJvpO5rLGDLx1fXUg1bzwzb8WN7PZRGctCkB2LweGzl%2BVw25k3hG5gmYIYqWiznCkVqO2BRB2Dh19JTxW8CIsWQl8mRTiCHypS5s4I%2BpMb%2FEb%2FjP08tMhne3q9JMKfzwb4GOqUBoa%2FWZfxGz5YMbbU4f3fIk4JDOmVDvLCQMN4R1N3wT1c3Ai07GIXibQIjfiV2cpCwSqC34jON7Ko92K6lAZz2goLAf09TifGANi6TOrgqPBlGpPLgkbO3tc%2F6JhcNuPdt7I%2FFHZC5DzkbrRHvSVl8rp6L1yXKX7LhtKOp2VTDq9IvZuoeVVBJ2SeVr%2B2Ib5Dfu%2Fg6WX23V2oWgoTFOUTdWxl5fPsB&X-Amz-Signature=76d31705a4dffeb7d956caf01fd945e2fcb722b748f9a629d4d4619980451f02&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAJNWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtQYJoZBwaQzI5ZoixwC0szO41xk5kVM6B%2BErEZQu0cwIgWpiM8%2FCbnJeB6Y50H%2F5Ba0lmcbqKA0Rm5DrruO7LA0AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkXuXwack5KgQD6CyrcA5m%2BuxKaFpBTWHMxKAjjXJunGMJFzl9%2BBzm0p0qogQP%2Fkctu9UZ5Q9BappkcWWUDtiB9PIZNgZ%2FtHtVhrjQudjUvu9j%2Fv6WLq9NRwzj5YLhi4vckUiepBHDhLrVrxFHMmy7AU48X5lPEe8M2iGUpuaKzcfSxrrKHfZ0XbUQ0NStS%2FZ6rbiA9giXqimRY2XC4UE20Z%2BVUGtxXk%2FBo49wGI721aZUmVERaKYZ3PQ8VgL%2FChlUEkfJjd3uPuEsHpueVB%2F5ZAtcZuJG5i%2FDBvHsvnX0fbJS9TTF3hQTLtlzeUjmr2ozLE1s%2FpvbgElReRSjtfpWqg4rd0V8IH%2FP5o1bRTBow1KK24g%2B%2BQ0J%2BsKTZFX4pAPzHOmU4jr2Kj5YHnNoA4TKOiTs0GqrrT4x7gersx%2FUwZ1Knz2rKRaAeHkDop9XaEnog1hLp6i8tKzoJRTZJp8wzpGpatWIqbGAD7hAGgX6H0FuIQPMaus4bjSCqBqLTz34807taNrwd%2BQSRfDj9QoJvpO5rLGDLx1fXUg1bzwzb8WN7PZRGctCkB2LweGzl%2BVw25k3hG5gmYIYqWiznCkVqO2BRB2Dh19JTxW8CIsWQl8mRTiCHypS5s4I%2BpMb%2FEb%2FjP08tMhne3q9JMKfzwb4GOqUBoa%2FWZfxGz5YMbbU4f3fIk4JDOmVDvLCQMN4R1N3wT1c3Ai07GIXibQIjfiV2cpCwSqC34jON7Ko92K6lAZz2goLAf09TifGANi6TOrgqPBlGpPLgkbO3tc%2F6JhcNuPdt7I%2FFHZC5DzkbrRHvSVl8rp6L1yXKX7LhtKOp2VTDq9IvZuoeVVBJ2SeVr%2B2Ib5Dfu%2Fg6WX23V2oWgoTFOUTdWxl5fPsB&X-Amz-Signature=58fca5dda042225a70c88a5eabb45360772882d94a691c0c98868f8cff8d6163&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAJNWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtQYJoZBwaQzI5ZoixwC0szO41xk5kVM6B%2BErEZQu0cwIgWpiM8%2FCbnJeB6Y50H%2F5Ba0lmcbqKA0Rm5DrruO7LA0AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkXuXwack5KgQD6CyrcA5m%2BuxKaFpBTWHMxKAjjXJunGMJFzl9%2BBzm0p0qogQP%2Fkctu9UZ5Q9BappkcWWUDtiB9PIZNgZ%2FtHtVhrjQudjUvu9j%2Fv6WLq9NRwzj5YLhi4vckUiepBHDhLrVrxFHMmy7AU48X5lPEe8M2iGUpuaKzcfSxrrKHfZ0XbUQ0NStS%2FZ6rbiA9giXqimRY2XC4UE20Z%2BVUGtxXk%2FBo49wGI721aZUmVERaKYZ3PQ8VgL%2FChlUEkfJjd3uPuEsHpueVB%2F5ZAtcZuJG5i%2FDBvHsvnX0fbJS9TTF3hQTLtlzeUjmr2ozLE1s%2FpvbgElReRSjtfpWqg4rd0V8IH%2FP5o1bRTBow1KK24g%2B%2BQ0J%2BsKTZFX4pAPzHOmU4jr2Kj5YHnNoA4TKOiTs0GqrrT4x7gersx%2FUwZ1Knz2rKRaAeHkDop9XaEnog1hLp6i8tKzoJRTZJp8wzpGpatWIqbGAD7hAGgX6H0FuIQPMaus4bjSCqBqLTz34807taNrwd%2BQSRfDj9QoJvpO5rLGDLx1fXUg1bzwzb8WN7PZRGctCkB2LweGzl%2BVw25k3hG5gmYIYqWiznCkVqO2BRB2Dh19JTxW8CIsWQl8mRTiCHypS5s4I%2BpMb%2FEb%2FjP08tMhne3q9JMKfzwb4GOqUBoa%2FWZfxGz5YMbbU4f3fIk4JDOmVDvLCQMN4R1N3wT1c3Ai07GIXibQIjfiV2cpCwSqC34jON7Ko92K6lAZz2goLAf09TifGANi6TOrgqPBlGpPLgkbO3tc%2F6JhcNuPdt7I%2FFHZC5DzkbrRHvSVl8rp6L1yXKX7LhtKOp2VTDq9IvZuoeVVBJ2SeVr%2B2Ib5Dfu%2Fg6WX23V2oWgoTFOUTdWxl5fPsB&X-Amz-Signature=c12966f9b7ce7a5d8cbd6aa914b554a1f189f5caba0cad2981501cb201e88f23&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAJNWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtQYJoZBwaQzI5ZoixwC0szO41xk5kVM6B%2BErEZQu0cwIgWpiM8%2FCbnJeB6Y50H%2F5Ba0lmcbqKA0Rm5DrruO7LA0AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkXuXwack5KgQD6CyrcA5m%2BuxKaFpBTWHMxKAjjXJunGMJFzl9%2BBzm0p0qogQP%2Fkctu9UZ5Q9BappkcWWUDtiB9PIZNgZ%2FtHtVhrjQudjUvu9j%2Fv6WLq9NRwzj5YLhi4vckUiepBHDhLrVrxFHMmy7AU48X5lPEe8M2iGUpuaKzcfSxrrKHfZ0XbUQ0NStS%2FZ6rbiA9giXqimRY2XC4UE20Z%2BVUGtxXk%2FBo49wGI721aZUmVERaKYZ3PQ8VgL%2FChlUEkfJjd3uPuEsHpueVB%2F5ZAtcZuJG5i%2FDBvHsvnX0fbJS9TTF3hQTLtlzeUjmr2ozLE1s%2FpvbgElReRSjtfpWqg4rd0V8IH%2FP5o1bRTBow1KK24g%2B%2BQ0J%2BsKTZFX4pAPzHOmU4jr2Kj5YHnNoA4TKOiTs0GqrrT4x7gersx%2FUwZ1Knz2rKRaAeHkDop9XaEnog1hLp6i8tKzoJRTZJp8wzpGpatWIqbGAD7hAGgX6H0FuIQPMaus4bjSCqBqLTz34807taNrwd%2BQSRfDj9QoJvpO5rLGDLx1fXUg1bzwzb8WN7PZRGctCkB2LweGzl%2BVw25k3hG5gmYIYqWiznCkVqO2BRB2Dh19JTxW8CIsWQl8mRTiCHypS5s4I%2BpMb%2FEb%2FjP08tMhne3q9JMKfzwb4GOqUBoa%2FWZfxGz5YMbbU4f3fIk4JDOmVDvLCQMN4R1N3wT1c3Ai07GIXibQIjfiV2cpCwSqC34jON7Ko92K6lAZz2goLAf09TifGANi6TOrgqPBlGpPLgkbO3tc%2F6JhcNuPdt7I%2FFHZC5DzkbrRHvSVl8rp6L1yXKX7LhtKOp2VTDq9IvZuoeVVBJ2SeVr%2B2Ib5Dfu%2Fg6WX23V2oWgoTFOUTdWxl5fPsB&X-Amz-Signature=904fbb2b41d0640da526a6e0a3804bb7732d4a6534b802a1fe9bfc94c0781bce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAJNWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtQYJoZBwaQzI5ZoixwC0szO41xk5kVM6B%2BErEZQu0cwIgWpiM8%2FCbnJeB6Y50H%2F5Ba0lmcbqKA0Rm5DrruO7LA0AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkXuXwack5KgQD6CyrcA5m%2BuxKaFpBTWHMxKAjjXJunGMJFzl9%2BBzm0p0qogQP%2Fkctu9UZ5Q9BappkcWWUDtiB9PIZNgZ%2FtHtVhrjQudjUvu9j%2Fv6WLq9NRwzj5YLhi4vckUiepBHDhLrVrxFHMmy7AU48X5lPEe8M2iGUpuaKzcfSxrrKHfZ0XbUQ0NStS%2FZ6rbiA9giXqimRY2XC4UE20Z%2BVUGtxXk%2FBo49wGI721aZUmVERaKYZ3PQ8VgL%2FChlUEkfJjd3uPuEsHpueVB%2F5ZAtcZuJG5i%2FDBvHsvnX0fbJS9TTF3hQTLtlzeUjmr2ozLE1s%2FpvbgElReRSjtfpWqg4rd0V8IH%2FP5o1bRTBow1KK24g%2B%2BQ0J%2BsKTZFX4pAPzHOmU4jr2Kj5YHnNoA4TKOiTs0GqrrT4x7gersx%2FUwZ1Knz2rKRaAeHkDop9XaEnog1hLp6i8tKzoJRTZJp8wzpGpatWIqbGAD7hAGgX6H0FuIQPMaus4bjSCqBqLTz34807taNrwd%2BQSRfDj9QoJvpO5rLGDLx1fXUg1bzwzb8WN7PZRGctCkB2LweGzl%2BVw25k3hG5gmYIYqWiznCkVqO2BRB2Dh19JTxW8CIsWQl8mRTiCHypS5s4I%2BpMb%2FEb%2FjP08tMhne3q9JMKfzwb4GOqUBoa%2FWZfxGz5YMbbU4f3fIk4JDOmVDvLCQMN4R1N3wT1c3Ai07GIXibQIjfiV2cpCwSqC34jON7Ko92K6lAZz2goLAf09TifGANi6TOrgqPBlGpPLgkbO3tc%2F6JhcNuPdt7I%2FFHZC5DzkbrRHvSVl8rp6L1yXKX7LhtKOp2VTDq9IvZuoeVVBJ2SeVr%2B2Ib5Dfu%2Fg6WX23V2oWgoTFOUTdWxl5fPsB&X-Amz-Signature=8557d40404596b659b4fd7b516ffc33c065dcea41c832653f919411a73ae84fd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAJNWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDtQYJoZBwaQzI5ZoixwC0szO41xk5kVM6B%2BErEZQu0cwIgWpiM8%2FCbnJeB6Y50H%2F5Ba0lmcbqKA0Rm5DrruO7LA0AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkXuXwack5KgQD6CyrcA5m%2BuxKaFpBTWHMxKAjjXJunGMJFzl9%2BBzm0p0qogQP%2Fkctu9UZ5Q9BappkcWWUDtiB9PIZNgZ%2FtHtVhrjQudjUvu9j%2Fv6WLq9NRwzj5YLhi4vckUiepBHDhLrVrxFHMmy7AU48X5lPEe8M2iGUpuaKzcfSxrrKHfZ0XbUQ0NStS%2FZ6rbiA9giXqimRY2XC4UE20Z%2BVUGtxXk%2FBo49wGI721aZUmVERaKYZ3PQ8VgL%2FChlUEkfJjd3uPuEsHpueVB%2F5ZAtcZuJG5i%2FDBvHsvnX0fbJS9TTF3hQTLtlzeUjmr2ozLE1s%2FpvbgElReRSjtfpWqg4rd0V8IH%2FP5o1bRTBow1KK24g%2B%2BQ0J%2BsKTZFX4pAPzHOmU4jr2Kj5YHnNoA4TKOiTs0GqrrT4x7gersx%2FUwZ1Knz2rKRaAeHkDop9XaEnog1hLp6i8tKzoJRTZJp8wzpGpatWIqbGAD7hAGgX6H0FuIQPMaus4bjSCqBqLTz34807taNrwd%2BQSRfDj9QoJvpO5rLGDLx1fXUg1bzwzb8WN7PZRGctCkB2LweGzl%2BVw25k3hG5gmYIYqWiznCkVqO2BRB2Dh19JTxW8CIsWQl8mRTiCHypS5s4I%2BpMb%2FEb%2FjP08tMhne3q9JMKfzwb4GOqUBoa%2FWZfxGz5YMbbU4f3fIk4JDOmVDvLCQMN4R1N3wT1c3Ai07GIXibQIjfiV2cpCwSqC34jON7Ko92K6lAZz2goLAf09TifGANi6TOrgqPBlGpPLgkbO3tc%2F6JhcNuPdt7I%2FFHZC5DzkbrRHvSVl8rp6L1yXKX7LhtKOp2VTDq9IvZuoeVVBJ2SeVr%2B2Ib5Dfu%2Fg6WX23V2oWgoTFOUTdWxl5fPsB&X-Amz-Signature=cf06f9f024685f0c3eb42744c30c9e3e9620339a91a633f9d4f21a8205ad8f53&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
