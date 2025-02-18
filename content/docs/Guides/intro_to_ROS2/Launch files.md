---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAU6BP2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBkXW1Ffj5fDyfFDsc5fn7wlKfwONeY1OdqxR55QLwmvAiAliKHntjqQNV8rAP2pfvHAEhI7jzoADLg4eytPv5ojmyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcgqDDNNWeybCWQ8KtwDQn1FHMfKd9Gr8prWD44BFAuL2OL76etJYp00AXAAVDzg0rbIUQ5mfoVc0UnDpUS6WhQO7xueCYEVjaHs3rZcIsb20iB21s%2Fc8hmo5VidsC1dRqFrCf8JWGMONQcswnnV73xN0k25kJTEGhKybIRj9Rs5bf2G1lCCSL2wALhrXJIz8OYLq2%2Bo4oE0intuXj9FsEaxcnU3Q92%2Bz%2F5QELuVKp8xrEUcZYq1Yn4phb4uvmzwyMyP%2FvSHvSDtG8LSggq8ETIdsuEUfigtpdl39Jr4fcQh3qnE2a1%2F5i%2F2vgbaJf7HNrxY1Ke8HjvkZ%2F7%2FVuGMWcxGpLEfHxse7Ao6odm2RdxMa6YjLQbt6TvpzZMQ5lyrjnuyLNTls8Z3IZvqVrFasEf8mnT1C0VDxQAnbN5ITLzklnqfrgGeNAwjf1j33XbGROPp%2BIFoJ1UjPRhLolyiAQ%2BLWxNw%2F%2FeNnSrkopPHIrBlumcFRBj4rFgLMRcXtRPzkakA9elTJMFlG1ULViM30SADqebpH7AYv2WZPNKFE70tbaIGd56H9neN1uH2mCCls6f3i7E7wD2ZjZ7HbdcyvYCUvscvG5sADvqTfxqmZxBcAXRjuOJVCsT3fXw45TqovHZd7laNn%2BVemNYwv5TSvQY6pgFV8lT3gEXZTGY%2BjSZ3MvGEXvs7lP2%2BnnGhu%2B4Ph06Qi06G6j2BZXSjEAFFhqiHDNqy7kXW4KR9pLmVba0TOB0oMMsYw%2BCZc74yVPWWyL4EBmppy5PRR%2FZ3yD0ZZA2%2FpIQW14q0f9JC7C9ZBKBtnmqY05T1B8TJ%2FGTex8uXlpetq23JrNpE%2Fs0MfZFW0HxEQbt5hOaEBTrCwFZw1rd5V7OKuInE7QTw&X-Amz-Signature=e5595c14bde2a3fc7c61c1f8a7b06a5534cef0708b1d0a6f9ee6b967490a6f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAU6BP2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBkXW1Ffj5fDyfFDsc5fn7wlKfwONeY1OdqxR55QLwmvAiAliKHntjqQNV8rAP2pfvHAEhI7jzoADLg4eytPv5ojmyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcgqDDNNWeybCWQ8KtwDQn1FHMfKd9Gr8prWD44BFAuL2OL76etJYp00AXAAVDzg0rbIUQ5mfoVc0UnDpUS6WhQO7xueCYEVjaHs3rZcIsb20iB21s%2Fc8hmo5VidsC1dRqFrCf8JWGMONQcswnnV73xN0k25kJTEGhKybIRj9Rs5bf2G1lCCSL2wALhrXJIz8OYLq2%2Bo4oE0intuXj9FsEaxcnU3Q92%2Bz%2F5QELuVKp8xrEUcZYq1Yn4phb4uvmzwyMyP%2FvSHvSDtG8LSggq8ETIdsuEUfigtpdl39Jr4fcQh3qnE2a1%2F5i%2F2vgbaJf7HNrxY1Ke8HjvkZ%2F7%2FVuGMWcxGpLEfHxse7Ao6odm2RdxMa6YjLQbt6TvpzZMQ5lyrjnuyLNTls8Z3IZvqVrFasEf8mnT1C0VDxQAnbN5ITLzklnqfrgGeNAwjf1j33XbGROPp%2BIFoJ1UjPRhLolyiAQ%2BLWxNw%2F%2FeNnSrkopPHIrBlumcFRBj4rFgLMRcXtRPzkakA9elTJMFlG1ULViM30SADqebpH7AYv2WZPNKFE70tbaIGd56H9neN1uH2mCCls6f3i7E7wD2ZjZ7HbdcyvYCUvscvG5sADvqTfxqmZxBcAXRjuOJVCsT3fXw45TqovHZd7laNn%2BVemNYwv5TSvQY6pgFV8lT3gEXZTGY%2BjSZ3MvGEXvs7lP2%2BnnGhu%2B4Ph06Qi06G6j2BZXSjEAFFhqiHDNqy7kXW4KR9pLmVba0TOB0oMMsYw%2BCZc74yVPWWyL4EBmppy5PRR%2FZ3yD0ZZA2%2FpIQW14q0f9JC7C9ZBKBtnmqY05T1B8TJ%2FGTex8uXlpetq23JrNpE%2Fs0MfZFW0HxEQbt5hOaEBTrCwFZw1rd5V7OKuInE7QTw&X-Amz-Signature=524c8c394378fa2c34eb35209f5d50afc9142211fc2138980818c6fe331a2ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAU6BP2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBkXW1Ffj5fDyfFDsc5fn7wlKfwONeY1OdqxR55QLwmvAiAliKHntjqQNV8rAP2pfvHAEhI7jzoADLg4eytPv5ojmyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcgqDDNNWeybCWQ8KtwDQn1FHMfKd9Gr8prWD44BFAuL2OL76etJYp00AXAAVDzg0rbIUQ5mfoVc0UnDpUS6WhQO7xueCYEVjaHs3rZcIsb20iB21s%2Fc8hmo5VidsC1dRqFrCf8JWGMONQcswnnV73xN0k25kJTEGhKybIRj9Rs5bf2G1lCCSL2wALhrXJIz8OYLq2%2Bo4oE0intuXj9FsEaxcnU3Q92%2Bz%2F5QELuVKp8xrEUcZYq1Yn4phb4uvmzwyMyP%2FvSHvSDtG8LSggq8ETIdsuEUfigtpdl39Jr4fcQh3qnE2a1%2F5i%2F2vgbaJf7HNrxY1Ke8HjvkZ%2F7%2FVuGMWcxGpLEfHxse7Ao6odm2RdxMa6YjLQbt6TvpzZMQ5lyrjnuyLNTls8Z3IZvqVrFasEf8mnT1C0VDxQAnbN5ITLzklnqfrgGeNAwjf1j33XbGROPp%2BIFoJ1UjPRhLolyiAQ%2BLWxNw%2F%2FeNnSrkopPHIrBlumcFRBj4rFgLMRcXtRPzkakA9elTJMFlG1ULViM30SADqebpH7AYv2WZPNKFE70tbaIGd56H9neN1uH2mCCls6f3i7E7wD2ZjZ7HbdcyvYCUvscvG5sADvqTfxqmZxBcAXRjuOJVCsT3fXw45TqovHZd7laNn%2BVemNYwv5TSvQY6pgFV8lT3gEXZTGY%2BjSZ3MvGEXvs7lP2%2BnnGhu%2B4Ph06Qi06G6j2BZXSjEAFFhqiHDNqy7kXW4KR9pLmVba0TOB0oMMsYw%2BCZc74yVPWWyL4EBmppy5PRR%2FZ3yD0ZZA2%2FpIQW14q0f9JC7C9ZBKBtnmqY05T1B8TJ%2FGTex8uXlpetq23JrNpE%2Fs0MfZFW0HxEQbt5hOaEBTrCwFZw1rd5V7OKuInE7QTw&X-Amz-Signature=b40a44c9af86ffd11fdc520cf7e6f7881e69ebc4eded55fae5de0d9aeac303ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
