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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIA37AQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTX0DJC3tAUqtNlw9C9xlWvbtVoEY6%2FIOb44z5gYAbxAIgL6mSQkHCHezmP5Qf%2Fhv5Ys0uUGzWrTnorpVtyh9hOecqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiZ7grESjCyDtSJ8ircAwBgNiY29GffGBFcRmvKb%2FZgVEEfY21%2FcGwKxbX6Y8E9m3kZ7Vu7G64w0JpEYe6HmRPhBgeWoH90LPIuY9RCUvcj38vd7QUN3o6bgLxc7BzDtHitV%2FU%2BcZJbzH%2FoV4EzSuL9zkCYCnut3P2trkE3enIBpOvuyYGcjVBUfTO9MwDAhf7N%2Bmygau4a4wLGsvhfV7zA3uf07Vqivbm%2FpG0Zq7K6z4BJ7pLZ4t163KT4NO5QyHX%2BBIz1F4WOEL%2FVuGyvz19OscNpOnH7ZEVgLXRWILDRB5MGTfy2l6HbZdJK%2BgOQfN7pqYdjmtbYdB73DifvoyqAFWWGcGZdkIrtOtZBpI0WqiEtoiVkqoYGehECu7BlhUuBCh%2F19b%2B6u7IFQWxALeOv3DBuAIFOi5D13Q%2Fh7Q1X%2BX5jSQWcoK1nTrHVeh2zux%2BIIJa%2FRL05G4LokEA%2FnTSeVMfY%2BifkJAaiiFqwImwOEAEvnl8aCSsPSmJEH4%2FSdp6wfAYtFszNOZihifKWIOT4FpNZMqXSvoEcxcw%2BPxvEU%2BfrvfhQqBnuJ3i61miwpBGFlhbTExeXkhFqyCEligMDHQ2KGzLdTr1s8u2xx8jwJCBJ%2BlpPPbKDn6es3%2FOQVA5KKCTXz7MJ1EO%2FMKiov8MGOqUBlpyrvUO5oveluC5jt9Q1LrGXWbnJKK%2BdrssRW4GdXf8Nza7jJvqMgSeE8LpWfekqvPvsOq7%2FKROaeRKnvCwFuMzr3UOUg%2BiDJAwRdzCfjXighLIaFKczPEjazr0zuwmzm%2Bo6BGdiWwJc7alUtU4NLBuNndb9yTSyrWP6wO348GyzWuinj0Q7dgQOeWb9EGptwIsW%2By0g8F3e01iRiq5GpByX6OVa&X-Amz-Signature=c75f3b49048dc4ee5453a068197ea334f7b95f19b695d04b63c66e17a4764d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIA37AQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTX0DJC3tAUqtNlw9C9xlWvbtVoEY6%2FIOb44z5gYAbxAIgL6mSQkHCHezmP5Qf%2Fhv5Ys0uUGzWrTnorpVtyh9hOecqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiZ7grESjCyDtSJ8ircAwBgNiY29GffGBFcRmvKb%2FZgVEEfY21%2FcGwKxbX6Y8E9m3kZ7Vu7G64w0JpEYe6HmRPhBgeWoH90LPIuY9RCUvcj38vd7QUN3o6bgLxc7BzDtHitV%2FU%2BcZJbzH%2FoV4EzSuL9zkCYCnut3P2trkE3enIBpOvuyYGcjVBUfTO9MwDAhf7N%2Bmygau4a4wLGsvhfV7zA3uf07Vqivbm%2FpG0Zq7K6z4BJ7pLZ4t163KT4NO5QyHX%2BBIz1F4WOEL%2FVuGyvz19OscNpOnH7ZEVgLXRWILDRB5MGTfy2l6HbZdJK%2BgOQfN7pqYdjmtbYdB73DifvoyqAFWWGcGZdkIrtOtZBpI0WqiEtoiVkqoYGehECu7BlhUuBCh%2F19b%2B6u7IFQWxALeOv3DBuAIFOi5D13Q%2Fh7Q1X%2BX5jSQWcoK1nTrHVeh2zux%2BIIJa%2FRL05G4LokEA%2FnTSeVMfY%2BifkJAaiiFqwImwOEAEvnl8aCSsPSmJEH4%2FSdp6wfAYtFszNOZihifKWIOT4FpNZMqXSvoEcxcw%2BPxvEU%2BfrvfhQqBnuJ3i61miwpBGFlhbTExeXkhFqyCEligMDHQ2KGzLdTr1s8u2xx8jwJCBJ%2BlpPPbKDn6es3%2FOQVA5KKCTXz7MJ1EO%2FMKiov8MGOqUBlpyrvUO5oveluC5jt9Q1LrGXWbnJKK%2BdrssRW4GdXf8Nza7jJvqMgSeE8LpWfekqvPvsOq7%2FKROaeRKnvCwFuMzr3UOUg%2BiDJAwRdzCfjXighLIaFKczPEjazr0zuwmzm%2Bo6BGdiWwJc7alUtU4NLBuNndb9yTSyrWP6wO348GyzWuinj0Q7dgQOeWb9EGptwIsW%2By0g8F3e01iRiq5GpByX6OVa&X-Amz-Signature=bb5120cce4dc7489c3c0df430405a0b89c184f6be3608bb0ee1366939a9d0342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIA37AQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTX0DJC3tAUqtNlw9C9xlWvbtVoEY6%2FIOb44z5gYAbxAIgL6mSQkHCHezmP5Qf%2Fhv5Ys0uUGzWrTnorpVtyh9hOecqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiZ7grESjCyDtSJ8ircAwBgNiY29GffGBFcRmvKb%2FZgVEEfY21%2FcGwKxbX6Y8E9m3kZ7Vu7G64w0JpEYe6HmRPhBgeWoH90LPIuY9RCUvcj38vd7QUN3o6bgLxc7BzDtHitV%2FU%2BcZJbzH%2FoV4EzSuL9zkCYCnut3P2trkE3enIBpOvuyYGcjVBUfTO9MwDAhf7N%2Bmygau4a4wLGsvhfV7zA3uf07Vqivbm%2FpG0Zq7K6z4BJ7pLZ4t163KT4NO5QyHX%2BBIz1F4WOEL%2FVuGyvz19OscNpOnH7ZEVgLXRWILDRB5MGTfy2l6HbZdJK%2BgOQfN7pqYdjmtbYdB73DifvoyqAFWWGcGZdkIrtOtZBpI0WqiEtoiVkqoYGehECu7BlhUuBCh%2F19b%2B6u7IFQWxALeOv3DBuAIFOi5D13Q%2Fh7Q1X%2BX5jSQWcoK1nTrHVeh2zux%2BIIJa%2FRL05G4LokEA%2FnTSeVMfY%2BifkJAaiiFqwImwOEAEvnl8aCSsPSmJEH4%2FSdp6wfAYtFszNOZihifKWIOT4FpNZMqXSvoEcxcw%2BPxvEU%2BfrvfhQqBnuJ3i61miwpBGFlhbTExeXkhFqyCEligMDHQ2KGzLdTr1s8u2xx8jwJCBJ%2BlpPPbKDn6es3%2FOQVA5KKCTXz7MJ1EO%2FMKiov8MGOqUBlpyrvUO5oveluC5jt9Q1LrGXWbnJKK%2BdrssRW4GdXf8Nza7jJvqMgSeE8LpWfekqvPvsOq7%2FKROaeRKnvCwFuMzr3UOUg%2BiDJAwRdzCfjXighLIaFKczPEjazr0zuwmzm%2Bo6BGdiWwJc7alUtU4NLBuNndb9yTSyrWP6wO348GyzWuinj0Q7dgQOeWb9EGptwIsW%2By0g8F3e01iRiq5GpByX6OVa&X-Amz-Signature=08e914e0c6542a8b7d053de9fb51f6cbaeef9f4d15ce3feee8957dcce2c3ba78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIA37AQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTX0DJC3tAUqtNlw9C9xlWvbtVoEY6%2FIOb44z5gYAbxAIgL6mSQkHCHezmP5Qf%2Fhv5Ys0uUGzWrTnorpVtyh9hOecqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiZ7grESjCyDtSJ8ircAwBgNiY29GffGBFcRmvKb%2FZgVEEfY21%2FcGwKxbX6Y8E9m3kZ7Vu7G64w0JpEYe6HmRPhBgeWoH90LPIuY9RCUvcj38vd7QUN3o6bgLxc7BzDtHitV%2FU%2BcZJbzH%2FoV4EzSuL9zkCYCnut3P2trkE3enIBpOvuyYGcjVBUfTO9MwDAhf7N%2Bmygau4a4wLGsvhfV7zA3uf07Vqivbm%2FpG0Zq7K6z4BJ7pLZ4t163KT4NO5QyHX%2BBIz1F4WOEL%2FVuGyvz19OscNpOnH7ZEVgLXRWILDRB5MGTfy2l6HbZdJK%2BgOQfN7pqYdjmtbYdB73DifvoyqAFWWGcGZdkIrtOtZBpI0WqiEtoiVkqoYGehECu7BlhUuBCh%2F19b%2B6u7IFQWxALeOv3DBuAIFOi5D13Q%2Fh7Q1X%2BX5jSQWcoK1nTrHVeh2zux%2BIIJa%2FRL05G4LokEA%2FnTSeVMfY%2BifkJAaiiFqwImwOEAEvnl8aCSsPSmJEH4%2FSdp6wfAYtFszNOZihifKWIOT4FpNZMqXSvoEcxcw%2BPxvEU%2BfrvfhQqBnuJ3i61miwpBGFlhbTExeXkhFqyCEligMDHQ2KGzLdTr1s8u2xx8jwJCBJ%2BlpPPbKDn6es3%2FOQVA5KKCTXz7MJ1EO%2FMKiov8MGOqUBlpyrvUO5oveluC5jt9Q1LrGXWbnJKK%2BdrssRW4GdXf8Nza7jJvqMgSeE8LpWfekqvPvsOq7%2FKROaeRKnvCwFuMzr3UOUg%2BiDJAwRdzCfjXighLIaFKczPEjazr0zuwmzm%2Bo6BGdiWwJc7alUtU4NLBuNndb9yTSyrWP6wO348GyzWuinj0Q7dgQOeWb9EGptwIsW%2By0g8F3e01iRiq5GpByX6OVa&X-Amz-Signature=4b8f481755856c3af99992e36daeb2b9eded999fc07b1a1d5a1200953c032334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIA37AQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTX0DJC3tAUqtNlw9C9xlWvbtVoEY6%2FIOb44z5gYAbxAIgL6mSQkHCHezmP5Qf%2Fhv5Ys0uUGzWrTnorpVtyh9hOecqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiZ7grESjCyDtSJ8ircAwBgNiY29GffGBFcRmvKb%2FZgVEEfY21%2FcGwKxbX6Y8E9m3kZ7Vu7G64w0JpEYe6HmRPhBgeWoH90LPIuY9RCUvcj38vd7QUN3o6bgLxc7BzDtHitV%2FU%2BcZJbzH%2FoV4EzSuL9zkCYCnut3P2trkE3enIBpOvuyYGcjVBUfTO9MwDAhf7N%2Bmygau4a4wLGsvhfV7zA3uf07Vqivbm%2FpG0Zq7K6z4BJ7pLZ4t163KT4NO5QyHX%2BBIz1F4WOEL%2FVuGyvz19OscNpOnH7ZEVgLXRWILDRB5MGTfy2l6HbZdJK%2BgOQfN7pqYdjmtbYdB73DifvoyqAFWWGcGZdkIrtOtZBpI0WqiEtoiVkqoYGehECu7BlhUuBCh%2F19b%2B6u7IFQWxALeOv3DBuAIFOi5D13Q%2Fh7Q1X%2BX5jSQWcoK1nTrHVeh2zux%2BIIJa%2FRL05G4LokEA%2FnTSeVMfY%2BifkJAaiiFqwImwOEAEvnl8aCSsPSmJEH4%2FSdp6wfAYtFszNOZihifKWIOT4FpNZMqXSvoEcxcw%2BPxvEU%2BfrvfhQqBnuJ3i61miwpBGFlhbTExeXkhFqyCEligMDHQ2KGzLdTr1s8u2xx8jwJCBJ%2BlpPPbKDn6es3%2FOQVA5KKCTXz7MJ1EO%2FMKiov8MGOqUBlpyrvUO5oveluC5jt9Q1LrGXWbnJKK%2BdrssRW4GdXf8Nza7jJvqMgSeE8LpWfekqvPvsOq7%2FKROaeRKnvCwFuMzr3UOUg%2BiDJAwRdzCfjXighLIaFKczPEjazr0zuwmzm%2Bo6BGdiWwJc7alUtU4NLBuNndb9yTSyrWP6wO348GyzWuinj0Q7dgQOeWb9EGptwIsW%2By0g8F3e01iRiq5GpByX6OVa&X-Amz-Signature=be3632a4dcdc825baa7f8a4c5dbcc421d67c9837ba5a56a9f76776536a6d744d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIA37AQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTX0DJC3tAUqtNlw9C9xlWvbtVoEY6%2FIOb44z5gYAbxAIgL6mSQkHCHezmP5Qf%2Fhv5Ys0uUGzWrTnorpVtyh9hOecqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiZ7grESjCyDtSJ8ircAwBgNiY29GffGBFcRmvKb%2FZgVEEfY21%2FcGwKxbX6Y8E9m3kZ7Vu7G64w0JpEYe6HmRPhBgeWoH90LPIuY9RCUvcj38vd7QUN3o6bgLxc7BzDtHitV%2FU%2BcZJbzH%2FoV4EzSuL9zkCYCnut3P2trkE3enIBpOvuyYGcjVBUfTO9MwDAhf7N%2Bmygau4a4wLGsvhfV7zA3uf07Vqivbm%2FpG0Zq7K6z4BJ7pLZ4t163KT4NO5QyHX%2BBIz1F4WOEL%2FVuGyvz19OscNpOnH7ZEVgLXRWILDRB5MGTfy2l6HbZdJK%2BgOQfN7pqYdjmtbYdB73DifvoyqAFWWGcGZdkIrtOtZBpI0WqiEtoiVkqoYGehECu7BlhUuBCh%2F19b%2B6u7IFQWxALeOv3DBuAIFOi5D13Q%2Fh7Q1X%2BX5jSQWcoK1nTrHVeh2zux%2BIIJa%2FRL05G4LokEA%2FnTSeVMfY%2BifkJAaiiFqwImwOEAEvnl8aCSsPSmJEH4%2FSdp6wfAYtFszNOZihifKWIOT4FpNZMqXSvoEcxcw%2BPxvEU%2BfrvfhQqBnuJ3i61miwpBGFlhbTExeXkhFqyCEligMDHQ2KGzLdTr1s8u2xx8jwJCBJ%2BlpPPbKDn6es3%2FOQVA5KKCTXz7MJ1EO%2FMKiov8MGOqUBlpyrvUO5oveluC5jt9Q1LrGXWbnJKK%2BdrssRW4GdXf8Nza7jJvqMgSeE8LpWfekqvPvsOq7%2FKROaeRKnvCwFuMzr3UOUg%2BiDJAwRdzCfjXighLIaFKczPEjazr0zuwmzm%2Bo6BGdiWwJc7alUtU4NLBuNndb9yTSyrWP6wO348GyzWuinj0Q7dgQOeWb9EGptwIsW%2By0g8F3e01iRiq5GpByX6OVa&X-Amz-Signature=df3156b63103b39e6d2c7ff823475d820bf6ef10aebeff5876427e4875e41e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIA37AQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTX0DJC3tAUqtNlw9C9xlWvbtVoEY6%2FIOb44z5gYAbxAIgL6mSQkHCHezmP5Qf%2Fhv5Ys0uUGzWrTnorpVtyh9hOecqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiZ7grESjCyDtSJ8ircAwBgNiY29GffGBFcRmvKb%2FZgVEEfY21%2FcGwKxbX6Y8E9m3kZ7Vu7G64w0JpEYe6HmRPhBgeWoH90LPIuY9RCUvcj38vd7QUN3o6bgLxc7BzDtHitV%2FU%2BcZJbzH%2FoV4EzSuL9zkCYCnut3P2trkE3enIBpOvuyYGcjVBUfTO9MwDAhf7N%2Bmygau4a4wLGsvhfV7zA3uf07Vqivbm%2FpG0Zq7K6z4BJ7pLZ4t163KT4NO5QyHX%2BBIz1F4WOEL%2FVuGyvz19OscNpOnH7ZEVgLXRWILDRB5MGTfy2l6HbZdJK%2BgOQfN7pqYdjmtbYdB73DifvoyqAFWWGcGZdkIrtOtZBpI0WqiEtoiVkqoYGehECu7BlhUuBCh%2F19b%2B6u7IFQWxALeOv3DBuAIFOi5D13Q%2Fh7Q1X%2BX5jSQWcoK1nTrHVeh2zux%2BIIJa%2FRL05G4LokEA%2FnTSeVMfY%2BifkJAaiiFqwImwOEAEvnl8aCSsPSmJEH4%2FSdp6wfAYtFszNOZihifKWIOT4FpNZMqXSvoEcxcw%2BPxvEU%2BfrvfhQqBnuJ3i61miwpBGFlhbTExeXkhFqyCEligMDHQ2KGzLdTr1s8u2xx8jwJCBJ%2BlpPPbKDn6es3%2FOQVA5KKCTXz7MJ1EO%2FMKiov8MGOqUBlpyrvUO5oveluC5jt9Q1LrGXWbnJKK%2BdrssRW4GdXf8Nza7jJvqMgSeE8LpWfekqvPvsOq7%2FKROaeRKnvCwFuMzr3UOUg%2BiDJAwRdzCfjXighLIaFKczPEjazr0zuwmzm%2Bo6BGdiWwJc7alUtU4NLBuNndb9yTSyrWP6wO348GyzWuinj0Q7dgQOeWb9EGptwIsW%2By0g8F3e01iRiq5GpByX6OVa&X-Amz-Signature=0d7f4fba5c4f95b4d0560ae44b2759be9f5448595f466e20e92360335a25ae36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
