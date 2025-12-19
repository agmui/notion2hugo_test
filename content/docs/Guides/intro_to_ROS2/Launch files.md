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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FKTTED%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7qYQ76y%2BQpjQihn9S%2BP39POQQhvLu95QdVWquR3uOAIhAMmfzVCupmOKFL%2BFL3AJov75hlbN1k8ZHMwP0nuux8gLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPIdHdKQ73MwVQFfMq3AOpf9Rl8l48HbX5sicoE6YoTpkY4PTn3ueLGh7AxBB9awhmLLDAkhdnKqFLse9H1ENZ0BucPhFOQ3b1djs1BZx8wlOS5FdR8VlWkEI6HHKkX5azoXAWIDhmZI3YzeHmVtdFdZPWpbmilVteHa4SrY3bugBc3z8Nfaw0DA6zKa9wuyVxW0VRgqKOyT3agxqELNOgGrmOfyZlYstfViA%2FBPjOCX24GPU9ZZZ50P3M8clwO4PZRnz%2BSvrCHmlFcFW3OTJMvfttE53Ex5LmZG4pNpP872IdZzhDBqwSxxQyU5Cag5q8zDbrzC0yQKXkbvWwxA7SYbQcRpRT00FMdbe3P6Te76j5Vej4W%2F9KELCYJy3IC%2FqLFu%2BukpNVpm4tTDZYtoUxTheIRjB5DBBqnSdnnl3%2F7Q9R0nMP1vrwo8ZwebIudZH%2Fk73IB9Nw5Dx1ZWPlrK0XcISTMeg7P0b4FZxV3RB%2B1B%2BGj7Og2KtCGwaH6rbFeBmUARAUotmg05DAuqIfEBqwNXLiXYBihkcDk9%2BkC0PP6sUHmF%2BIkgeQMq5RdApaaPIq6VfT0xCc7y%2F38rZT5LCNEEYdw5UsQrO2QCaLL%2FLfJDcRBOX%2F4a4hZ2mLpH3VDNh%2Bjty7hhY6k%2BUCGTDRx5LKBjqkAUJJtNy3vsR3x9%2F6aXl%2BGI8eMgpMsoEsMTQdc%2F0U%2Bte4IJgCEXTyfFJBR05ge0qQuwdw1IWzYWQuuNNhplrOOyf1IxsaaTBcAPq6glmG53ecyl%2FjJu0KECyxFk9QE29fRnKLk7t%2FMafMaWfyIdAQsp2SKkjKTsJSBKQkPMhIVg6MHyy0v6jH2NWBf2NuHNv5%2B8fPyVJ0YWV7szoHTCdJGx7ievBc&X-Amz-Signature=d8fe57afb34ba124565d57d032e8600d2307a6386c7439149e97392d1a706d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FKTTED%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7qYQ76y%2BQpjQihn9S%2BP39POQQhvLu95QdVWquR3uOAIhAMmfzVCupmOKFL%2BFL3AJov75hlbN1k8ZHMwP0nuux8gLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPIdHdKQ73MwVQFfMq3AOpf9Rl8l48HbX5sicoE6YoTpkY4PTn3ueLGh7AxBB9awhmLLDAkhdnKqFLse9H1ENZ0BucPhFOQ3b1djs1BZx8wlOS5FdR8VlWkEI6HHKkX5azoXAWIDhmZI3YzeHmVtdFdZPWpbmilVteHa4SrY3bugBc3z8Nfaw0DA6zKa9wuyVxW0VRgqKOyT3agxqELNOgGrmOfyZlYstfViA%2FBPjOCX24GPU9ZZZ50P3M8clwO4PZRnz%2BSvrCHmlFcFW3OTJMvfttE53Ex5LmZG4pNpP872IdZzhDBqwSxxQyU5Cag5q8zDbrzC0yQKXkbvWwxA7SYbQcRpRT00FMdbe3P6Te76j5Vej4W%2F9KELCYJy3IC%2FqLFu%2BukpNVpm4tTDZYtoUxTheIRjB5DBBqnSdnnl3%2F7Q9R0nMP1vrwo8ZwebIudZH%2Fk73IB9Nw5Dx1ZWPlrK0XcISTMeg7P0b4FZxV3RB%2B1B%2BGj7Og2KtCGwaH6rbFeBmUARAUotmg05DAuqIfEBqwNXLiXYBihkcDk9%2BkC0PP6sUHmF%2BIkgeQMq5RdApaaPIq6VfT0xCc7y%2F38rZT5LCNEEYdw5UsQrO2QCaLL%2FLfJDcRBOX%2F4a4hZ2mLpH3VDNh%2Bjty7hhY6k%2BUCGTDRx5LKBjqkAUJJtNy3vsR3x9%2F6aXl%2BGI8eMgpMsoEsMTQdc%2F0U%2Bte4IJgCEXTyfFJBR05ge0qQuwdw1IWzYWQuuNNhplrOOyf1IxsaaTBcAPq6glmG53ecyl%2FjJu0KECyxFk9QE29fRnKLk7t%2FMafMaWfyIdAQsp2SKkjKTsJSBKQkPMhIVg6MHyy0v6jH2NWBf2NuHNv5%2B8fPyVJ0YWV7szoHTCdJGx7ievBc&X-Amz-Signature=76560bd878feba5a9a47f69664cd004f19e46815b48845cd633ce2d5dfaa4d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FKTTED%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7qYQ76y%2BQpjQihn9S%2BP39POQQhvLu95QdVWquR3uOAIhAMmfzVCupmOKFL%2BFL3AJov75hlbN1k8ZHMwP0nuux8gLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPIdHdKQ73MwVQFfMq3AOpf9Rl8l48HbX5sicoE6YoTpkY4PTn3ueLGh7AxBB9awhmLLDAkhdnKqFLse9H1ENZ0BucPhFOQ3b1djs1BZx8wlOS5FdR8VlWkEI6HHKkX5azoXAWIDhmZI3YzeHmVtdFdZPWpbmilVteHa4SrY3bugBc3z8Nfaw0DA6zKa9wuyVxW0VRgqKOyT3agxqELNOgGrmOfyZlYstfViA%2FBPjOCX24GPU9ZZZ50P3M8clwO4PZRnz%2BSvrCHmlFcFW3OTJMvfttE53Ex5LmZG4pNpP872IdZzhDBqwSxxQyU5Cag5q8zDbrzC0yQKXkbvWwxA7SYbQcRpRT00FMdbe3P6Te76j5Vej4W%2F9KELCYJy3IC%2FqLFu%2BukpNVpm4tTDZYtoUxTheIRjB5DBBqnSdnnl3%2F7Q9R0nMP1vrwo8ZwebIudZH%2Fk73IB9Nw5Dx1ZWPlrK0XcISTMeg7P0b4FZxV3RB%2B1B%2BGj7Og2KtCGwaH6rbFeBmUARAUotmg05DAuqIfEBqwNXLiXYBihkcDk9%2BkC0PP6sUHmF%2BIkgeQMq5RdApaaPIq6VfT0xCc7y%2F38rZT5LCNEEYdw5UsQrO2QCaLL%2FLfJDcRBOX%2F4a4hZ2mLpH3VDNh%2Bjty7hhY6k%2BUCGTDRx5LKBjqkAUJJtNy3vsR3x9%2F6aXl%2BGI8eMgpMsoEsMTQdc%2F0U%2Bte4IJgCEXTyfFJBR05ge0qQuwdw1IWzYWQuuNNhplrOOyf1IxsaaTBcAPq6glmG53ecyl%2FjJu0KECyxFk9QE29fRnKLk7t%2FMafMaWfyIdAQsp2SKkjKTsJSBKQkPMhIVg6MHyy0v6jH2NWBf2NuHNv5%2B8fPyVJ0YWV7szoHTCdJGx7ievBc&X-Amz-Signature=8e326d877af6c91175c96145617b4669a320b27f0ea090b92613e3cc6bc83f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
