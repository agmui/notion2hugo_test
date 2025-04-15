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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3H3VHL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrEoqd58KHKH8owU0JmePjMLvZdAeYVXUK7ZYSb074CAIhANkYgxaY5x7mvpPVZ1DAQ%2BBB%2FziN9dPvIFf%2BaDaZ1DKZKv8DCDEQABoMNjM3NDIzMTgzODA1Igws3USpnhezANB5jXcq3APJDZVt7HGX6gGeTCPoAgEjh5yw593e318T5RjFRh9bKRaTN84o4cmgRuDqSyOXzsDQTvnR%2BUjtmHlda0FTdSqGwUmzvzE%2BoWWlrNAdNRXgoJJcKdPG5gNrIoSppKN6B0REQcC7oQN9szi3Z6xrgax2jAfe2a7QezxGIoGgqatvAWPYnRBZeG2EPt3iiR%2BKNqVlRe%2BVq7hRUKp%2Bv1X61A%2BXBHesH1PoH98VQC%2FU1pxq4AeUt7qkvwCfm9y%2BEXJM%2BN6B95n0nQH%2FasTnyVyF%2F3Ftr5%2FJyID1djmeAirUAMbDPa16ae2cbzvXcy8YIB07DhXxRGypuZI%2Fpy%2BqwIxzLl2F6gJ%2F%2FwgftlFBpw7PUZcZV9HRjSJ4yQGD8VOTxbcgezV9kJgXZFvrBEPpoPfvdru%2B9VNwOeg%2BFEXkHxC6s0gZOquppb26ZwFtWm0uC0ZP3q5eCcjq7ZnMl5X6LHjDk7p5Jq%2BNx2%2BLjWOUE63hWBI7SVQew0z4jNqjwRWZZyAHH8os4uzvAArOzS%2FypbsZTUxvyQxWUPIxy9mwI2MH0SL5MpUQZKjVUUHwrZtXzFF%2FcrwME3Mw%2BkjAJeCqPGpijvCfEoIMuLNow1GEbztdNU5e3B4IcwVeX3ZhqF6DgTD5hPq%2FBjqkAdSrIxoqdC11VcGtg3ylMEmuSZmJ5M9Ijg1Al748BPHEL2M%2BRDqnVsEWX3%2F3%2BCjA3iVbUL3sQkKPu3q7i3fJmm2k3V8ovc6JWpnHx9Jaea4Yd9w65Kg5PR%2ByeR0X%2F982Mr1JiGSmzeuBlgnxlTpqrbqJWx4z0rCHWBEp8xzzaLSR6%2FQ%2FvWCA%2FRZ%2BRj7VXysslrpZjAokeWBdR6UI368qasBG4WDm&X-Amz-Signature=372f58cf5f328f96c7b895cb25c0b678ff3290b4dc213d9aab36c6718b2aa1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3H3VHL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrEoqd58KHKH8owU0JmePjMLvZdAeYVXUK7ZYSb074CAIhANkYgxaY5x7mvpPVZ1DAQ%2BBB%2FziN9dPvIFf%2BaDaZ1DKZKv8DCDEQABoMNjM3NDIzMTgzODA1Igws3USpnhezANB5jXcq3APJDZVt7HGX6gGeTCPoAgEjh5yw593e318T5RjFRh9bKRaTN84o4cmgRuDqSyOXzsDQTvnR%2BUjtmHlda0FTdSqGwUmzvzE%2BoWWlrNAdNRXgoJJcKdPG5gNrIoSppKN6B0REQcC7oQN9szi3Z6xrgax2jAfe2a7QezxGIoGgqatvAWPYnRBZeG2EPt3iiR%2BKNqVlRe%2BVq7hRUKp%2Bv1X61A%2BXBHesH1PoH98VQC%2FU1pxq4AeUt7qkvwCfm9y%2BEXJM%2BN6B95n0nQH%2FasTnyVyF%2F3Ftr5%2FJyID1djmeAirUAMbDPa16ae2cbzvXcy8YIB07DhXxRGypuZI%2Fpy%2BqwIxzLl2F6gJ%2F%2FwgftlFBpw7PUZcZV9HRjSJ4yQGD8VOTxbcgezV9kJgXZFvrBEPpoPfvdru%2B9VNwOeg%2BFEXkHxC6s0gZOquppb26ZwFtWm0uC0ZP3q5eCcjq7ZnMl5X6LHjDk7p5Jq%2BNx2%2BLjWOUE63hWBI7SVQew0z4jNqjwRWZZyAHH8os4uzvAArOzS%2FypbsZTUxvyQxWUPIxy9mwI2MH0SL5MpUQZKjVUUHwrZtXzFF%2FcrwME3Mw%2BkjAJeCqPGpijvCfEoIMuLNow1GEbztdNU5e3B4IcwVeX3ZhqF6DgTD5hPq%2FBjqkAdSrIxoqdC11VcGtg3ylMEmuSZmJ5M9Ijg1Al748BPHEL2M%2BRDqnVsEWX3%2F3%2BCjA3iVbUL3sQkKPu3q7i3fJmm2k3V8ovc6JWpnHx9Jaea4Yd9w65Kg5PR%2ByeR0X%2F982Mr1JiGSmzeuBlgnxlTpqrbqJWx4z0rCHWBEp8xzzaLSR6%2FQ%2FvWCA%2FRZ%2BRj7VXysslrpZjAokeWBdR6UI368qasBG4WDm&X-Amz-Signature=ef47bafa7c2101b598efd92778aed6308d2929e961bca952ddcd3da05d766955&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3H3VHL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrEoqd58KHKH8owU0JmePjMLvZdAeYVXUK7ZYSb074CAIhANkYgxaY5x7mvpPVZ1DAQ%2BBB%2FziN9dPvIFf%2BaDaZ1DKZKv8DCDEQABoMNjM3NDIzMTgzODA1Igws3USpnhezANB5jXcq3APJDZVt7HGX6gGeTCPoAgEjh5yw593e318T5RjFRh9bKRaTN84o4cmgRuDqSyOXzsDQTvnR%2BUjtmHlda0FTdSqGwUmzvzE%2BoWWlrNAdNRXgoJJcKdPG5gNrIoSppKN6B0REQcC7oQN9szi3Z6xrgax2jAfe2a7QezxGIoGgqatvAWPYnRBZeG2EPt3iiR%2BKNqVlRe%2BVq7hRUKp%2Bv1X61A%2BXBHesH1PoH98VQC%2FU1pxq4AeUt7qkvwCfm9y%2BEXJM%2BN6B95n0nQH%2FasTnyVyF%2F3Ftr5%2FJyID1djmeAirUAMbDPa16ae2cbzvXcy8YIB07DhXxRGypuZI%2Fpy%2BqwIxzLl2F6gJ%2F%2FwgftlFBpw7PUZcZV9HRjSJ4yQGD8VOTxbcgezV9kJgXZFvrBEPpoPfvdru%2B9VNwOeg%2BFEXkHxC6s0gZOquppb26ZwFtWm0uC0ZP3q5eCcjq7ZnMl5X6LHjDk7p5Jq%2BNx2%2BLjWOUE63hWBI7SVQew0z4jNqjwRWZZyAHH8os4uzvAArOzS%2FypbsZTUxvyQxWUPIxy9mwI2MH0SL5MpUQZKjVUUHwrZtXzFF%2FcrwME3Mw%2BkjAJeCqPGpijvCfEoIMuLNow1GEbztdNU5e3B4IcwVeX3ZhqF6DgTD5hPq%2FBjqkAdSrIxoqdC11VcGtg3ylMEmuSZmJ5M9Ijg1Al748BPHEL2M%2BRDqnVsEWX3%2F3%2BCjA3iVbUL3sQkKPu3q7i3fJmm2k3V8ovc6JWpnHx9Jaea4Yd9w65Kg5PR%2ByeR0X%2F982Mr1JiGSmzeuBlgnxlTpqrbqJWx4z0rCHWBEp8xzzaLSR6%2FQ%2FvWCA%2FRZ%2BRj7VXysslrpZjAokeWBdR6UI368qasBG4WDm&X-Amz-Signature=b8bc9285c85bb5c99a7dc94af661a70652e570c3434eafc26166e0f220c0b3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3H3VHL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrEoqd58KHKH8owU0JmePjMLvZdAeYVXUK7ZYSb074CAIhANkYgxaY5x7mvpPVZ1DAQ%2BBB%2FziN9dPvIFf%2BaDaZ1DKZKv8DCDEQABoMNjM3NDIzMTgzODA1Igws3USpnhezANB5jXcq3APJDZVt7HGX6gGeTCPoAgEjh5yw593e318T5RjFRh9bKRaTN84o4cmgRuDqSyOXzsDQTvnR%2BUjtmHlda0FTdSqGwUmzvzE%2BoWWlrNAdNRXgoJJcKdPG5gNrIoSppKN6B0REQcC7oQN9szi3Z6xrgax2jAfe2a7QezxGIoGgqatvAWPYnRBZeG2EPt3iiR%2BKNqVlRe%2BVq7hRUKp%2Bv1X61A%2BXBHesH1PoH98VQC%2FU1pxq4AeUt7qkvwCfm9y%2BEXJM%2BN6B95n0nQH%2FasTnyVyF%2F3Ftr5%2FJyID1djmeAirUAMbDPa16ae2cbzvXcy8YIB07DhXxRGypuZI%2Fpy%2BqwIxzLl2F6gJ%2F%2FwgftlFBpw7PUZcZV9HRjSJ4yQGD8VOTxbcgezV9kJgXZFvrBEPpoPfvdru%2B9VNwOeg%2BFEXkHxC6s0gZOquppb26ZwFtWm0uC0ZP3q5eCcjq7ZnMl5X6LHjDk7p5Jq%2BNx2%2BLjWOUE63hWBI7SVQew0z4jNqjwRWZZyAHH8os4uzvAArOzS%2FypbsZTUxvyQxWUPIxy9mwI2MH0SL5MpUQZKjVUUHwrZtXzFF%2FcrwME3Mw%2BkjAJeCqPGpijvCfEoIMuLNow1GEbztdNU5e3B4IcwVeX3ZhqF6DgTD5hPq%2FBjqkAdSrIxoqdC11VcGtg3ylMEmuSZmJ5M9Ijg1Al748BPHEL2M%2BRDqnVsEWX3%2F3%2BCjA3iVbUL3sQkKPu3q7i3fJmm2k3V8ovc6JWpnHx9Jaea4Yd9w65Kg5PR%2ByeR0X%2F982Mr1JiGSmzeuBlgnxlTpqrbqJWx4z0rCHWBEp8xzzaLSR6%2FQ%2FvWCA%2FRZ%2BRj7VXysslrpZjAokeWBdR6UI368qasBG4WDm&X-Amz-Signature=b043b9a7ba9506be5b02ae3d8a4df6748619ddb4c00c6dcf9cbe5796d7367a69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3H3VHL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrEoqd58KHKH8owU0JmePjMLvZdAeYVXUK7ZYSb074CAIhANkYgxaY5x7mvpPVZ1DAQ%2BBB%2FziN9dPvIFf%2BaDaZ1DKZKv8DCDEQABoMNjM3NDIzMTgzODA1Igws3USpnhezANB5jXcq3APJDZVt7HGX6gGeTCPoAgEjh5yw593e318T5RjFRh9bKRaTN84o4cmgRuDqSyOXzsDQTvnR%2BUjtmHlda0FTdSqGwUmzvzE%2BoWWlrNAdNRXgoJJcKdPG5gNrIoSppKN6B0REQcC7oQN9szi3Z6xrgax2jAfe2a7QezxGIoGgqatvAWPYnRBZeG2EPt3iiR%2BKNqVlRe%2BVq7hRUKp%2Bv1X61A%2BXBHesH1PoH98VQC%2FU1pxq4AeUt7qkvwCfm9y%2BEXJM%2BN6B95n0nQH%2FasTnyVyF%2F3Ftr5%2FJyID1djmeAirUAMbDPa16ae2cbzvXcy8YIB07DhXxRGypuZI%2Fpy%2BqwIxzLl2F6gJ%2F%2FwgftlFBpw7PUZcZV9HRjSJ4yQGD8VOTxbcgezV9kJgXZFvrBEPpoPfvdru%2B9VNwOeg%2BFEXkHxC6s0gZOquppb26ZwFtWm0uC0ZP3q5eCcjq7ZnMl5X6LHjDk7p5Jq%2BNx2%2BLjWOUE63hWBI7SVQew0z4jNqjwRWZZyAHH8os4uzvAArOzS%2FypbsZTUxvyQxWUPIxy9mwI2MH0SL5MpUQZKjVUUHwrZtXzFF%2FcrwME3Mw%2BkjAJeCqPGpijvCfEoIMuLNow1GEbztdNU5e3B4IcwVeX3ZhqF6DgTD5hPq%2FBjqkAdSrIxoqdC11VcGtg3ylMEmuSZmJ5M9Ijg1Al748BPHEL2M%2BRDqnVsEWX3%2F3%2BCjA3iVbUL3sQkKPu3q7i3fJmm2k3V8ovc6JWpnHx9Jaea4Yd9w65Kg5PR%2ByeR0X%2F982Mr1JiGSmzeuBlgnxlTpqrbqJWx4z0rCHWBEp8xzzaLSR6%2FQ%2FvWCA%2FRZ%2BRj7VXysslrpZjAokeWBdR6UI368qasBG4WDm&X-Amz-Signature=f4634a5b0a4385aca36bf216a8f9a891547e0fa02f819c6d5c2a2b86e8c7a8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3H3VHL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrEoqd58KHKH8owU0JmePjMLvZdAeYVXUK7ZYSb074CAIhANkYgxaY5x7mvpPVZ1DAQ%2BBB%2FziN9dPvIFf%2BaDaZ1DKZKv8DCDEQABoMNjM3NDIzMTgzODA1Igws3USpnhezANB5jXcq3APJDZVt7HGX6gGeTCPoAgEjh5yw593e318T5RjFRh9bKRaTN84o4cmgRuDqSyOXzsDQTvnR%2BUjtmHlda0FTdSqGwUmzvzE%2BoWWlrNAdNRXgoJJcKdPG5gNrIoSppKN6B0REQcC7oQN9szi3Z6xrgax2jAfe2a7QezxGIoGgqatvAWPYnRBZeG2EPt3iiR%2BKNqVlRe%2BVq7hRUKp%2Bv1X61A%2BXBHesH1PoH98VQC%2FU1pxq4AeUt7qkvwCfm9y%2BEXJM%2BN6B95n0nQH%2FasTnyVyF%2F3Ftr5%2FJyID1djmeAirUAMbDPa16ae2cbzvXcy8YIB07DhXxRGypuZI%2Fpy%2BqwIxzLl2F6gJ%2F%2FwgftlFBpw7PUZcZV9HRjSJ4yQGD8VOTxbcgezV9kJgXZFvrBEPpoPfvdru%2B9VNwOeg%2BFEXkHxC6s0gZOquppb26ZwFtWm0uC0ZP3q5eCcjq7ZnMl5X6LHjDk7p5Jq%2BNx2%2BLjWOUE63hWBI7SVQew0z4jNqjwRWZZyAHH8os4uzvAArOzS%2FypbsZTUxvyQxWUPIxy9mwI2MH0SL5MpUQZKjVUUHwrZtXzFF%2FcrwME3Mw%2BkjAJeCqPGpijvCfEoIMuLNow1GEbztdNU5e3B4IcwVeX3ZhqF6DgTD5hPq%2FBjqkAdSrIxoqdC11VcGtg3ylMEmuSZmJ5M9Ijg1Al748BPHEL2M%2BRDqnVsEWX3%2F3%2BCjA3iVbUL3sQkKPu3q7i3fJmm2k3V8ovc6JWpnHx9Jaea4Yd9w65Kg5PR%2ByeR0X%2F982Mr1JiGSmzeuBlgnxlTpqrbqJWx4z0rCHWBEp8xzzaLSR6%2FQ%2FvWCA%2FRZ%2BRj7VXysslrpZjAokeWBdR6UI368qasBG4WDm&X-Amz-Signature=77d27793f231c3704128d2c3bcd1ef5e8429099b7542672ffa9abb6d52129a31&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3H3VHL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrEoqd58KHKH8owU0JmePjMLvZdAeYVXUK7ZYSb074CAIhANkYgxaY5x7mvpPVZ1DAQ%2BBB%2FziN9dPvIFf%2BaDaZ1DKZKv8DCDEQABoMNjM3NDIzMTgzODA1Igws3USpnhezANB5jXcq3APJDZVt7HGX6gGeTCPoAgEjh5yw593e318T5RjFRh9bKRaTN84o4cmgRuDqSyOXzsDQTvnR%2BUjtmHlda0FTdSqGwUmzvzE%2BoWWlrNAdNRXgoJJcKdPG5gNrIoSppKN6B0REQcC7oQN9szi3Z6xrgax2jAfe2a7QezxGIoGgqatvAWPYnRBZeG2EPt3iiR%2BKNqVlRe%2BVq7hRUKp%2Bv1X61A%2BXBHesH1PoH98VQC%2FU1pxq4AeUt7qkvwCfm9y%2BEXJM%2BN6B95n0nQH%2FasTnyVyF%2F3Ftr5%2FJyID1djmeAirUAMbDPa16ae2cbzvXcy8YIB07DhXxRGypuZI%2Fpy%2BqwIxzLl2F6gJ%2F%2FwgftlFBpw7PUZcZV9HRjSJ4yQGD8VOTxbcgezV9kJgXZFvrBEPpoPfvdru%2B9VNwOeg%2BFEXkHxC6s0gZOquppb26ZwFtWm0uC0ZP3q5eCcjq7ZnMl5X6LHjDk7p5Jq%2BNx2%2BLjWOUE63hWBI7SVQew0z4jNqjwRWZZyAHH8os4uzvAArOzS%2FypbsZTUxvyQxWUPIxy9mwI2MH0SL5MpUQZKjVUUHwrZtXzFF%2FcrwME3Mw%2BkjAJeCqPGpijvCfEoIMuLNow1GEbztdNU5e3B4IcwVeX3ZhqF6DgTD5hPq%2FBjqkAdSrIxoqdC11VcGtg3ylMEmuSZmJ5M9Ijg1Al748BPHEL2M%2BRDqnVsEWX3%2F3%2BCjA3iVbUL3sQkKPu3q7i3fJmm2k3V8ovc6JWpnHx9Jaea4Yd9w65Kg5PR%2ByeR0X%2F982Mr1JiGSmzeuBlgnxlTpqrbqJWx4z0rCHWBEp8xzzaLSR6%2FQ%2FvWCA%2FRZ%2BRj7VXysslrpZjAokeWBdR6UI368qasBG4WDm&X-Amz-Signature=ac3e7b78a7647920898c0eb326699e911b88e9f58759499a8f6ddb6998b446f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
