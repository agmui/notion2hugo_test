---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=a205fc10d244fc497d9dd5f482ada39c2119442ae4dccc63e56e0cf6af3a3438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=58a05c7a7f142f50aaa8897060800190016e852613894f620414c5591f453c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=9f1a1e2d280163cfeb2b5745ff5514e7dcacbac1847d805413be05e5b74b523b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
