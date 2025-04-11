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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHXK3YW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCS%2FDXTnmxLg5oPkJvvOWsM9EeuUl%2BCtSmBY6ITwAVURQIgKjBXzbgftNusPnSh%2FRvTDZ2PdJTcPNBbpxi%2Fejtw0i0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe97CzkHrYd6AimKSrcA8OwUYQIDQoPqUFYD1piYy3rEPyVkDjiEDxPU0uXdMIXPLCK%2F8moQbnGNX7x2eYg3QdYWSFUGm5E7qJ8Qia6dPKi%2FvPbr5OIWmigsUvd5wSxF5rRfISg0y9lUGSqjYRxMbpkcyM6k17Ylwszoq%2B9UBsotTfAGHrP3WOCC6%2B0wVqpzry0jyWHzZ4%2FzrOMYwcuQd74dXcZQWCNo51TmBfmwR0g9wsyMMI%2BSTQwRtH7kTSsT1bPos%2BrnyEoFZ%2FpaDUYwTYK5aGIZdqGny6f7cL1eCum6YWmGwd2IH5DVryzlLYwcpzSWbhCBFgSsvgm2V3TqUGhunycOR4SDMHMu300exM0zljR8VzT3kok9oJtdWCR8q6uBYwlZhGCcHEXimfZhTDXLTnyKjzB29oD340%2FaxKmAlyPRt3W6m74Yt69prExGTGiXsgN9Qi%2FPTEyU7bBEwqW4bGmkNEnc4DZa%2BQc00NHl%2FlJq8un4inNFntqKuoQuC%2F7ZmMFhLqhRE6aDYhD%2FiGujE%2B%2BCby1vIWTDJ2F1UiMOU4%2FIpr1t5F%2B2fUcvcraasDhhf5e8%2B6l02%2BtFoPReftAISQHGBHq2oM9FBIb8jWnLW%2Bw8Ymm5y4bkMpKnPxQnC6vkqCA7ANWAuAcMKvd4r8GOqUBWnylWRZ5MJhNfjsFTOxOyT8IgTBPE6%2FEjkEhvRi9SWM6J8kcxL5ZEg5N1ifG271%2BCK1vc6K%2FTZPVe4Atc5%2FgzoE%2FBYyiNsUmfMH495Ha0x0wU%2BsmXq3NZaeGvRQ5gr96ZnfMY3DnZZTw8c4Vy1sim5pA%2BL4Ff78kXyxRCHSEUF7dvm7hslEhk5WXkGE0nQ1Mjqh9LDLbq9xK8IfA3RcgppGvJmsy&X-Amz-Signature=5e6bed0f83c3947d3987b1d82549e3db00b3fc5de4d95564a201e9a223d8fd13&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHXK3YW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCS%2FDXTnmxLg5oPkJvvOWsM9EeuUl%2BCtSmBY6ITwAVURQIgKjBXzbgftNusPnSh%2FRvTDZ2PdJTcPNBbpxi%2Fejtw0i0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe97CzkHrYd6AimKSrcA8OwUYQIDQoPqUFYD1piYy3rEPyVkDjiEDxPU0uXdMIXPLCK%2F8moQbnGNX7x2eYg3QdYWSFUGm5E7qJ8Qia6dPKi%2FvPbr5OIWmigsUvd5wSxF5rRfISg0y9lUGSqjYRxMbpkcyM6k17Ylwszoq%2B9UBsotTfAGHrP3WOCC6%2B0wVqpzry0jyWHzZ4%2FzrOMYwcuQd74dXcZQWCNo51TmBfmwR0g9wsyMMI%2BSTQwRtH7kTSsT1bPos%2BrnyEoFZ%2FpaDUYwTYK5aGIZdqGny6f7cL1eCum6YWmGwd2IH5DVryzlLYwcpzSWbhCBFgSsvgm2V3TqUGhunycOR4SDMHMu300exM0zljR8VzT3kok9oJtdWCR8q6uBYwlZhGCcHEXimfZhTDXLTnyKjzB29oD340%2FaxKmAlyPRt3W6m74Yt69prExGTGiXsgN9Qi%2FPTEyU7bBEwqW4bGmkNEnc4DZa%2BQc00NHl%2FlJq8un4inNFntqKuoQuC%2F7ZmMFhLqhRE6aDYhD%2FiGujE%2B%2BCby1vIWTDJ2F1UiMOU4%2FIpr1t5F%2B2fUcvcraasDhhf5e8%2B6l02%2BtFoPReftAISQHGBHq2oM9FBIb8jWnLW%2Bw8Ymm5y4bkMpKnPxQnC6vkqCA7ANWAuAcMKvd4r8GOqUBWnylWRZ5MJhNfjsFTOxOyT8IgTBPE6%2FEjkEhvRi9SWM6J8kcxL5ZEg5N1ifG271%2BCK1vc6K%2FTZPVe4Atc5%2FgzoE%2FBYyiNsUmfMH495Ha0x0wU%2BsmXq3NZaeGvRQ5gr96ZnfMY3DnZZTw8c4Vy1sim5pA%2BL4Ff78kXyxRCHSEUF7dvm7hslEhk5WXkGE0nQ1Mjqh9LDLbq9xK8IfA3RcgppGvJmsy&X-Amz-Signature=a01a52348a79193b7aa81b6d332dc142c0816229726835d64c6668afdc90da46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHXK3YW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCS%2FDXTnmxLg5oPkJvvOWsM9EeuUl%2BCtSmBY6ITwAVURQIgKjBXzbgftNusPnSh%2FRvTDZ2PdJTcPNBbpxi%2Fejtw0i0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe97CzkHrYd6AimKSrcA8OwUYQIDQoPqUFYD1piYy3rEPyVkDjiEDxPU0uXdMIXPLCK%2F8moQbnGNX7x2eYg3QdYWSFUGm5E7qJ8Qia6dPKi%2FvPbr5OIWmigsUvd5wSxF5rRfISg0y9lUGSqjYRxMbpkcyM6k17Ylwszoq%2B9UBsotTfAGHrP3WOCC6%2B0wVqpzry0jyWHzZ4%2FzrOMYwcuQd74dXcZQWCNo51TmBfmwR0g9wsyMMI%2BSTQwRtH7kTSsT1bPos%2BrnyEoFZ%2FpaDUYwTYK5aGIZdqGny6f7cL1eCum6YWmGwd2IH5DVryzlLYwcpzSWbhCBFgSsvgm2V3TqUGhunycOR4SDMHMu300exM0zljR8VzT3kok9oJtdWCR8q6uBYwlZhGCcHEXimfZhTDXLTnyKjzB29oD340%2FaxKmAlyPRt3W6m74Yt69prExGTGiXsgN9Qi%2FPTEyU7bBEwqW4bGmkNEnc4DZa%2BQc00NHl%2FlJq8un4inNFntqKuoQuC%2F7ZmMFhLqhRE6aDYhD%2FiGujE%2B%2BCby1vIWTDJ2F1UiMOU4%2FIpr1t5F%2B2fUcvcraasDhhf5e8%2B6l02%2BtFoPReftAISQHGBHq2oM9FBIb8jWnLW%2Bw8Ymm5y4bkMpKnPxQnC6vkqCA7ANWAuAcMKvd4r8GOqUBWnylWRZ5MJhNfjsFTOxOyT8IgTBPE6%2FEjkEhvRi9SWM6J8kcxL5ZEg5N1ifG271%2BCK1vc6K%2FTZPVe4Atc5%2FgzoE%2FBYyiNsUmfMH495Ha0x0wU%2BsmXq3NZaeGvRQ5gr96ZnfMY3DnZZTw8c4Vy1sim5pA%2BL4Ff78kXyxRCHSEUF7dvm7hslEhk5WXkGE0nQ1Mjqh9LDLbq9xK8IfA3RcgppGvJmsy&X-Amz-Signature=70b40ca297c6fca5d0ace61edccf5c6356a94d8885069c86f433bb9dbfb0d719&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
