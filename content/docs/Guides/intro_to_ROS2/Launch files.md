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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWMSIM2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDunTEWP9s%2F%2FiU%2F8pGmvyHQLP%2Bo%2BPFfEWscxLo98k8PgQIhANz8WPp34sBh1wLaZP4EERbQGeK8UCdhqthJ9nTdmVLTKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFW1GFxNycOehRd6wq3APODhVKG4%2BZbcR7%2B%2F4Jj7lp0CGcBv2Ar%2FAZFjhUptvQM4nS%2FBa3MqblD%2FNOG6xQkxY1dTAMrZLnsmOxwT8h%2F6U%2Fam3PBCC%2F7xkCxBzxZRy935ZqmZNiPMfFXgztEAJn3txQzJsLFVwZyEIgM7iBiN4cidvNigQlWLCb8hxi0p2XpJjqv2ThBDP4UxHcU80r7Jm3K8Csl3XbR7ocDXFjrj8X79B3q3kXkPBFvg5g7VGILBFuhvSgyjxCP2BMveGVCCELcroOJ8NIE5l2SrSkDMceLnfCDJDrqfzqGy6XIwLT6HpheM9uqFbbLE5i9wC8glm7in415PwLnMfrUs6dWJFQYLb1H%2FbotXN9Tj3mm2NilZrqUrNhc0An%2BbtUZBqIa%2Bmtxqa1zzS%2F4MO4%2B4MVSes1shMkikdVWWcWsem%2B5p%2F%2BKBQ%2B3l%2FDL7rNlVguGWZlSwW2uZpIbWqNSq9cEJnVm%2FJ2OOfPu%2BzxuUnHU2JRRuUc4l2OYMV69wBcz9N0aPmVxoWdQPH3dH2%2Bp0v28b%2BnnS6oNj2RloYFcmbkVTchAIunmpSdqU4HwgmYWuj2ygdBOEAHfi2ObZhXIhTlWgCf6FxEzeXKI9SXaHwf00hS0plFo9usNfQmymLJkPCuHDDCseC%2FBjqkAZ4P%2BN5qCfEjE%2B4jD%2FTSnkpRdEIbrgHcndccU5QAqaeonMZaalfPe6PkcWK%2BR3OshcgxtRDZRxJuDTZ2%2BBSuRF0IIwGNU4uh1oJDYgb7zJTlFYgLqO%2BQHgIeg10%2FA6Kb7PRhIcTHw1IAP73aYGmwetIWKRwOInRbRBBVT3zaC0D5MI9Em4nTr5jWvtvuZP5qMGAVc7Cs5Td%2FjvqlxRqTJ5D2x%2F9f&X-Amz-Signature=4f75cb20909d82da7961a21d34262d99dba87b8a01f150eb1fcf49d7a728899a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWMSIM2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDunTEWP9s%2F%2FiU%2F8pGmvyHQLP%2Bo%2BPFfEWscxLo98k8PgQIhANz8WPp34sBh1wLaZP4EERbQGeK8UCdhqthJ9nTdmVLTKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFW1GFxNycOehRd6wq3APODhVKG4%2BZbcR7%2B%2F4Jj7lp0CGcBv2Ar%2FAZFjhUptvQM4nS%2FBa3MqblD%2FNOG6xQkxY1dTAMrZLnsmOxwT8h%2F6U%2Fam3PBCC%2F7xkCxBzxZRy935ZqmZNiPMfFXgztEAJn3txQzJsLFVwZyEIgM7iBiN4cidvNigQlWLCb8hxi0p2XpJjqv2ThBDP4UxHcU80r7Jm3K8Csl3XbR7ocDXFjrj8X79B3q3kXkPBFvg5g7VGILBFuhvSgyjxCP2BMveGVCCELcroOJ8NIE5l2SrSkDMceLnfCDJDrqfzqGy6XIwLT6HpheM9uqFbbLE5i9wC8glm7in415PwLnMfrUs6dWJFQYLb1H%2FbotXN9Tj3mm2NilZrqUrNhc0An%2BbtUZBqIa%2Bmtxqa1zzS%2F4MO4%2B4MVSes1shMkikdVWWcWsem%2B5p%2F%2BKBQ%2B3l%2FDL7rNlVguGWZlSwW2uZpIbWqNSq9cEJnVm%2FJ2OOfPu%2BzxuUnHU2JRRuUc4l2OYMV69wBcz9N0aPmVxoWdQPH3dH2%2Bp0v28b%2BnnS6oNj2RloYFcmbkVTchAIunmpSdqU4HwgmYWuj2ygdBOEAHfi2ObZhXIhTlWgCf6FxEzeXKI9SXaHwf00hS0plFo9usNfQmymLJkPCuHDDCseC%2FBjqkAZ4P%2BN5qCfEjE%2B4jD%2FTSnkpRdEIbrgHcndccU5QAqaeonMZaalfPe6PkcWK%2BR3OshcgxtRDZRxJuDTZ2%2BBSuRF0IIwGNU4uh1oJDYgb7zJTlFYgLqO%2BQHgIeg10%2FA6Kb7PRhIcTHw1IAP73aYGmwetIWKRwOInRbRBBVT3zaC0D5MI9Em4nTr5jWvtvuZP5qMGAVc7Cs5Td%2FjvqlxRqTJ5D2x%2F9f&X-Amz-Signature=b857e72cb18ff8a5e4219202a0f90b72f3da84f10c803095af639ba868e75e77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWMSIM2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDunTEWP9s%2F%2FiU%2F8pGmvyHQLP%2Bo%2BPFfEWscxLo98k8PgQIhANz8WPp34sBh1wLaZP4EERbQGeK8UCdhqthJ9nTdmVLTKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFW1GFxNycOehRd6wq3APODhVKG4%2BZbcR7%2B%2F4Jj7lp0CGcBv2Ar%2FAZFjhUptvQM4nS%2FBa3MqblD%2FNOG6xQkxY1dTAMrZLnsmOxwT8h%2F6U%2Fam3PBCC%2F7xkCxBzxZRy935ZqmZNiPMfFXgztEAJn3txQzJsLFVwZyEIgM7iBiN4cidvNigQlWLCb8hxi0p2XpJjqv2ThBDP4UxHcU80r7Jm3K8Csl3XbR7ocDXFjrj8X79B3q3kXkPBFvg5g7VGILBFuhvSgyjxCP2BMveGVCCELcroOJ8NIE5l2SrSkDMceLnfCDJDrqfzqGy6XIwLT6HpheM9uqFbbLE5i9wC8glm7in415PwLnMfrUs6dWJFQYLb1H%2FbotXN9Tj3mm2NilZrqUrNhc0An%2BbtUZBqIa%2Bmtxqa1zzS%2F4MO4%2B4MVSes1shMkikdVWWcWsem%2B5p%2F%2BKBQ%2B3l%2FDL7rNlVguGWZlSwW2uZpIbWqNSq9cEJnVm%2FJ2OOfPu%2BzxuUnHU2JRRuUc4l2OYMV69wBcz9N0aPmVxoWdQPH3dH2%2Bp0v28b%2BnnS6oNj2RloYFcmbkVTchAIunmpSdqU4HwgmYWuj2ygdBOEAHfi2ObZhXIhTlWgCf6FxEzeXKI9SXaHwf00hS0plFo9usNfQmymLJkPCuHDDCseC%2FBjqkAZ4P%2BN5qCfEjE%2B4jD%2FTSnkpRdEIbrgHcndccU5QAqaeonMZaalfPe6PkcWK%2BR3OshcgxtRDZRxJuDTZ2%2BBSuRF0IIwGNU4uh1oJDYgb7zJTlFYgLqO%2BQHgIeg10%2FA6Kb7PRhIcTHw1IAP73aYGmwetIWKRwOInRbRBBVT3zaC0D5MI9Em4nTr5jWvtvuZP5qMGAVc7Cs5Td%2FjvqlxRqTJ5D2x%2F9f&X-Amz-Signature=c8095676383770642f68274825062195f62a2cc8ef087a5f966afd6155606c70&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
