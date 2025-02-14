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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLH7CYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCl1SR1hv22t25NQ%2FBe2OSu%2BbgMXBuNpVH1N24JpCvshwIgBCePs8QY0O8vx1FHWLUVhTkU%2Fr8fdPFJ%2FjO8BM2vngwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMgeqe3BcAc5xYU2qSrcA2xdy%2FM6g%2BWsxi1yJjg1x76kf9RXZOIQcLop%2FfAuo3SFtySFsoLSlipvdrZzK%2Bo95yJhQSIryFjNrdDB1IPPkOXACtlMplPYkONSrSPH7%2FaMNLztsVoffLG8FElpp5qKDrW%2BRHT7pe4BWhsRwk8X52w7sFJOB2TLRFstIpmhh0Nxv7XODNELiFKraE17r549xa22iypr9Q8b3nqqK4RlvDwqYVhu3y%2B6ULe3uU4X%2BJLavh5mW1GlXKgHemW9QE37tOb2DsAocekbM0ya2esBSNpJNvRwLsD7xEKC8lgN0OEApNN2lsL9bnjuaYlKrfz7K4BfFI02Qwlts31HwIcB8HA6OUqPbBPgZ2jqjCthYWvjOA5mUPZc97n6kc4dUeANJQd4i16VadsiNA8uhutZSgKBktV0ekUs6CYvAiqzpUFWXh7PBKlXYiClWvvBuyQs0dbcp%2F8VR0MqwTk9oaY3LOqmGyixp%2Fu%2BWMj2%2BDfOFJkZ%2BHx69uowtt%2F7hULXGGsxhRK%2F6ReWbTjRzJq4sRwAwVGXBTTbeoB8pREW6LndXUkFGxQF3wGxeOqspgPU92qTJoLIL%2Bq%2BPq4H8JyK%2FUzrRRw2KUGqyZ%2F6vP8LDtTmDX85dR8GQmBxcmuJn5QTMKixvL0GOqUBjzNv9T4nB%2BXOZUksLK5LyvAAS%2FzMg%2Ba8cnS40ey%2Bahc6htIc5NSVAMUJiFgixA%2Bq8hgMY8tRXJSuGGfUCz9qM92SpELWVzaC77gJsHhi8gautATtTJdjuXlQD84IdImLsoG13FBFhdQ4mV%2F4vVIXqWw166L8bF592jAu7NLtxxfVz%2FoDWF2T1sqG8AD2D1qzuW%2FZF27rBAydxGIbDKgVmSdutiUO&X-Amz-Signature=b89650ba58d87be6a032b1800e56b1c19d81251b7a39ce9f5446e87332b4fe29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLH7CYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCl1SR1hv22t25NQ%2FBe2OSu%2BbgMXBuNpVH1N24JpCvshwIgBCePs8QY0O8vx1FHWLUVhTkU%2Fr8fdPFJ%2FjO8BM2vngwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMgeqe3BcAc5xYU2qSrcA2xdy%2FM6g%2BWsxi1yJjg1x76kf9RXZOIQcLop%2FfAuo3SFtySFsoLSlipvdrZzK%2Bo95yJhQSIryFjNrdDB1IPPkOXACtlMplPYkONSrSPH7%2FaMNLztsVoffLG8FElpp5qKDrW%2BRHT7pe4BWhsRwk8X52w7sFJOB2TLRFstIpmhh0Nxv7XODNELiFKraE17r549xa22iypr9Q8b3nqqK4RlvDwqYVhu3y%2B6ULe3uU4X%2BJLavh5mW1GlXKgHemW9QE37tOb2DsAocekbM0ya2esBSNpJNvRwLsD7xEKC8lgN0OEApNN2lsL9bnjuaYlKrfz7K4BfFI02Qwlts31HwIcB8HA6OUqPbBPgZ2jqjCthYWvjOA5mUPZc97n6kc4dUeANJQd4i16VadsiNA8uhutZSgKBktV0ekUs6CYvAiqzpUFWXh7PBKlXYiClWvvBuyQs0dbcp%2F8VR0MqwTk9oaY3LOqmGyixp%2Fu%2BWMj2%2BDfOFJkZ%2BHx69uowtt%2F7hULXGGsxhRK%2F6ReWbTjRzJq4sRwAwVGXBTTbeoB8pREW6LndXUkFGxQF3wGxeOqspgPU92qTJoLIL%2Bq%2BPq4H8JyK%2FUzrRRw2KUGqyZ%2F6vP8LDtTmDX85dR8GQmBxcmuJn5QTMKixvL0GOqUBjzNv9T4nB%2BXOZUksLK5LyvAAS%2FzMg%2Ba8cnS40ey%2Bahc6htIc5NSVAMUJiFgixA%2Bq8hgMY8tRXJSuGGfUCz9qM92SpELWVzaC77gJsHhi8gautATtTJdjuXlQD84IdImLsoG13FBFhdQ4mV%2F4vVIXqWw166L8bF592jAu7NLtxxfVz%2FoDWF2T1sqG8AD2D1qzuW%2FZF27rBAydxGIbDKgVmSdutiUO&X-Amz-Signature=e4345747222f3732b1937a606e8cbf363210538bb63ee2971fbd64ec2981e903&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLH7CYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCl1SR1hv22t25NQ%2FBe2OSu%2BbgMXBuNpVH1N24JpCvshwIgBCePs8QY0O8vx1FHWLUVhTkU%2Fr8fdPFJ%2FjO8BM2vngwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMgeqe3BcAc5xYU2qSrcA2xdy%2FM6g%2BWsxi1yJjg1x76kf9RXZOIQcLop%2FfAuo3SFtySFsoLSlipvdrZzK%2Bo95yJhQSIryFjNrdDB1IPPkOXACtlMplPYkONSrSPH7%2FaMNLztsVoffLG8FElpp5qKDrW%2BRHT7pe4BWhsRwk8X52w7sFJOB2TLRFstIpmhh0Nxv7XODNELiFKraE17r549xa22iypr9Q8b3nqqK4RlvDwqYVhu3y%2B6ULe3uU4X%2BJLavh5mW1GlXKgHemW9QE37tOb2DsAocekbM0ya2esBSNpJNvRwLsD7xEKC8lgN0OEApNN2lsL9bnjuaYlKrfz7K4BfFI02Qwlts31HwIcB8HA6OUqPbBPgZ2jqjCthYWvjOA5mUPZc97n6kc4dUeANJQd4i16VadsiNA8uhutZSgKBktV0ekUs6CYvAiqzpUFWXh7PBKlXYiClWvvBuyQs0dbcp%2F8VR0MqwTk9oaY3LOqmGyixp%2Fu%2BWMj2%2BDfOFJkZ%2BHx69uowtt%2F7hULXGGsxhRK%2F6ReWbTjRzJq4sRwAwVGXBTTbeoB8pREW6LndXUkFGxQF3wGxeOqspgPU92qTJoLIL%2Bq%2BPq4H8JyK%2FUzrRRw2KUGqyZ%2F6vP8LDtTmDX85dR8GQmBxcmuJn5QTMKixvL0GOqUBjzNv9T4nB%2BXOZUksLK5LyvAAS%2FzMg%2Ba8cnS40ey%2Bahc6htIc5NSVAMUJiFgixA%2Bq8hgMY8tRXJSuGGfUCz9qM92SpELWVzaC77gJsHhi8gautATtTJdjuXlQD84IdImLsoG13FBFhdQ4mV%2F4vVIXqWw166L8bF592jAu7NLtxxfVz%2FoDWF2T1sqG8AD2D1qzuW%2FZF27rBAydxGIbDKgVmSdutiUO&X-Amz-Signature=6427f019b275dc911e4366f262e7b30bdea1072bd2a9d1a9187fb96daa040efd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLH7CYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCl1SR1hv22t25NQ%2FBe2OSu%2BbgMXBuNpVH1N24JpCvshwIgBCePs8QY0O8vx1FHWLUVhTkU%2Fr8fdPFJ%2FjO8BM2vngwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMgeqe3BcAc5xYU2qSrcA2xdy%2FM6g%2BWsxi1yJjg1x76kf9RXZOIQcLop%2FfAuo3SFtySFsoLSlipvdrZzK%2Bo95yJhQSIryFjNrdDB1IPPkOXACtlMplPYkONSrSPH7%2FaMNLztsVoffLG8FElpp5qKDrW%2BRHT7pe4BWhsRwk8X52w7sFJOB2TLRFstIpmhh0Nxv7XODNELiFKraE17r549xa22iypr9Q8b3nqqK4RlvDwqYVhu3y%2B6ULe3uU4X%2BJLavh5mW1GlXKgHemW9QE37tOb2DsAocekbM0ya2esBSNpJNvRwLsD7xEKC8lgN0OEApNN2lsL9bnjuaYlKrfz7K4BfFI02Qwlts31HwIcB8HA6OUqPbBPgZ2jqjCthYWvjOA5mUPZc97n6kc4dUeANJQd4i16VadsiNA8uhutZSgKBktV0ekUs6CYvAiqzpUFWXh7PBKlXYiClWvvBuyQs0dbcp%2F8VR0MqwTk9oaY3LOqmGyixp%2Fu%2BWMj2%2BDfOFJkZ%2BHx69uowtt%2F7hULXGGsxhRK%2F6ReWbTjRzJq4sRwAwVGXBTTbeoB8pREW6LndXUkFGxQF3wGxeOqspgPU92qTJoLIL%2Bq%2BPq4H8JyK%2FUzrRRw2KUGqyZ%2F6vP8LDtTmDX85dR8GQmBxcmuJn5QTMKixvL0GOqUBjzNv9T4nB%2BXOZUksLK5LyvAAS%2FzMg%2Ba8cnS40ey%2Bahc6htIc5NSVAMUJiFgixA%2Bq8hgMY8tRXJSuGGfUCz9qM92SpELWVzaC77gJsHhi8gautATtTJdjuXlQD84IdImLsoG13FBFhdQ4mV%2F4vVIXqWw166L8bF592jAu7NLtxxfVz%2FoDWF2T1sqG8AD2D1qzuW%2FZF27rBAydxGIbDKgVmSdutiUO&X-Amz-Signature=eafb114452e08eb09b1a2f2bc955a1bbc44491a58c55404f503e42bc218878e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLH7CYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCl1SR1hv22t25NQ%2FBe2OSu%2BbgMXBuNpVH1N24JpCvshwIgBCePs8QY0O8vx1FHWLUVhTkU%2Fr8fdPFJ%2FjO8BM2vngwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMgeqe3BcAc5xYU2qSrcA2xdy%2FM6g%2BWsxi1yJjg1x76kf9RXZOIQcLop%2FfAuo3SFtySFsoLSlipvdrZzK%2Bo95yJhQSIryFjNrdDB1IPPkOXACtlMplPYkONSrSPH7%2FaMNLztsVoffLG8FElpp5qKDrW%2BRHT7pe4BWhsRwk8X52w7sFJOB2TLRFstIpmhh0Nxv7XODNELiFKraE17r549xa22iypr9Q8b3nqqK4RlvDwqYVhu3y%2B6ULe3uU4X%2BJLavh5mW1GlXKgHemW9QE37tOb2DsAocekbM0ya2esBSNpJNvRwLsD7xEKC8lgN0OEApNN2lsL9bnjuaYlKrfz7K4BfFI02Qwlts31HwIcB8HA6OUqPbBPgZ2jqjCthYWvjOA5mUPZc97n6kc4dUeANJQd4i16VadsiNA8uhutZSgKBktV0ekUs6CYvAiqzpUFWXh7PBKlXYiClWvvBuyQs0dbcp%2F8VR0MqwTk9oaY3LOqmGyixp%2Fu%2BWMj2%2BDfOFJkZ%2BHx69uowtt%2F7hULXGGsxhRK%2F6ReWbTjRzJq4sRwAwVGXBTTbeoB8pREW6LndXUkFGxQF3wGxeOqspgPU92qTJoLIL%2Bq%2BPq4H8JyK%2FUzrRRw2KUGqyZ%2F6vP8LDtTmDX85dR8GQmBxcmuJn5QTMKixvL0GOqUBjzNv9T4nB%2BXOZUksLK5LyvAAS%2FzMg%2Ba8cnS40ey%2Bahc6htIc5NSVAMUJiFgixA%2Bq8hgMY8tRXJSuGGfUCz9qM92SpELWVzaC77gJsHhi8gautATtTJdjuXlQD84IdImLsoG13FBFhdQ4mV%2F4vVIXqWw166L8bF592jAu7NLtxxfVz%2FoDWF2T1sqG8AD2D1qzuW%2FZF27rBAydxGIbDKgVmSdutiUO&X-Amz-Signature=efefdb3be4cdb3851391cd44705d751fe57569b52bfdb86b44310a4b21fcabc1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLH7CYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCl1SR1hv22t25NQ%2FBe2OSu%2BbgMXBuNpVH1N24JpCvshwIgBCePs8QY0O8vx1FHWLUVhTkU%2Fr8fdPFJ%2FjO8BM2vngwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMgeqe3BcAc5xYU2qSrcA2xdy%2FM6g%2BWsxi1yJjg1x76kf9RXZOIQcLop%2FfAuo3SFtySFsoLSlipvdrZzK%2Bo95yJhQSIryFjNrdDB1IPPkOXACtlMplPYkONSrSPH7%2FaMNLztsVoffLG8FElpp5qKDrW%2BRHT7pe4BWhsRwk8X52w7sFJOB2TLRFstIpmhh0Nxv7XODNELiFKraE17r549xa22iypr9Q8b3nqqK4RlvDwqYVhu3y%2B6ULe3uU4X%2BJLavh5mW1GlXKgHemW9QE37tOb2DsAocekbM0ya2esBSNpJNvRwLsD7xEKC8lgN0OEApNN2lsL9bnjuaYlKrfz7K4BfFI02Qwlts31HwIcB8HA6OUqPbBPgZ2jqjCthYWvjOA5mUPZc97n6kc4dUeANJQd4i16VadsiNA8uhutZSgKBktV0ekUs6CYvAiqzpUFWXh7PBKlXYiClWvvBuyQs0dbcp%2F8VR0MqwTk9oaY3LOqmGyixp%2Fu%2BWMj2%2BDfOFJkZ%2BHx69uowtt%2F7hULXGGsxhRK%2F6ReWbTjRzJq4sRwAwVGXBTTbeoB8pREW6LndXUkFGxQF3wGxeOqspgPU92qTJoLIL%2Bq%2BPq4H8JyK%2FUzrRRw2KUGqyZ%2F6vP8LDtTmDX85dR8GQmBxcmuJn5QTMKixvL0GOqUBjzNv9T4nB%2BXOZUksLK5LyvAAS%2FzMg%2Ba8cnS40ey%2Bahc6htIc5NSVAMUJiFgixA%2Bq8hgMY8tRXJSuGGfUCz9qM92SpELWVzaC77gJsHhi8gautATtTJdjuXlQD84IdImLsoG13FBFhdQ4mV%2F4vVIXqWw166L8bF592jAu7NLtxxfVz%2FoDWF2T1sqG8AD2D1qzuW%2FZF27rBAydxGIbDKgVmSdutiUO&X-Amz-Signature=39ea888a6696d7ebc77d66e4c17bdd84342c9b5b9587d7ac67da676f416e6d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLH7CYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCl1SR1hv22t25NQ%2FBe2OSu%2BbgMXBuNpVH1N24JpCvshwIgBCePs8QY0O8vx1FHWLUVhTkU%2Fr8fdPFJ%2FjO8BM2vngwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMgeqe3BcAc5xYU2qSrcA2xdy%2FM6g%2BWsxi1yJjg1x76kf9RXZOIQcLop%2FfAuo3SFtySFsoLSlipvdrZzK%2Bo95yJhQSIryFjNrdDB1IPPkOXACtlMplPYkONSrSPH7%2FaMNLztsVoffLG8FElpp5qKDrW%2BRHT7pe4BWhsRwk8X52w7sFJOB2TLRFstIpmhh0Nxv7XODNELiFKraE17r549xa22iypr9Q8b3nqqK4RlvDwqYVhu3y%2B6ULe3uU4X%2BJLavh5mW1GlXKgHemW9QE37tOb2DsAocekbM0ya2esBSNpJNvRwLsD7xEKC8lgN0OEApNN2lsL9bnjuaYlKrfz7K4BfFI02Qwlts31HwIcB8HA6OUqPbBPgZ2jqjCthYWvjOA5mUPZc97n6kc4dUeANJQd4i16VadsiNA8uhutZSgKBktV0ekUs6CYvAiqzpUFWXh7PBKlXYiClWvvBuyQs0dbcp%2F8VR0MqwTk9oaY3LOqmGyixp%2Fu%2BWMj2%2BDfOFJkZ%2BHx69uowtt%2F7hULXGGsxhRK%2F6ReWbTjRzJq4sRwAwVGXBTTbeoB8pREW6LndXUkFGxQF3wGxeOqspgPU92qTJoLIL%2Bq%2BPq4H8JyK%2FUzrRRw2KUGqyZ%2F6vP8LDtTmDX85dR8GQmBxcmuJn5QTMKixvL0GOqUBjzNv9T4nB%2BXOZUksLK5LyvAAS%2FzMg%2Ba8cnS40ey%2Bahc6htIc5NSVAMUJiFgixA%2Bq8hgMY8tRXJSuGGfUCz9qM92SpELWVzaC77gJsHhi8gautATtTJdjuXlQD84IdImLsoG13FBFhdQ4mV%2F4vVIXqWw166L8bF592jAu7NLtxxfVz%2FoDWF2T1sqG8AD2D1qzuW%2FZF27rBAydxGIbDKgVmSdutiUO&X-Amz-Signature=ae1539f754b1390de601ff7631d0720db787d7bb21cc8582dbbfce59219b9f11&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
