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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MMZ7D3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKmuRhOgP0i%2F04AgzjksQLT8rjfoGL98aewvTXmuzToAiEA1aHJ%2FM8eh03uGeNvWL%2BbMNYJFNllmI6MqlGrmc%2FWzCsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDENnJBuM3Hd9%2FRzQiyrcA9l0%2BNKi7imfnpTHJV1mpknsgOD5RTztPtWeI2qaneg1nM%2BbvayO9Iof%2F%2BPC84aQiRfv1TXANQkJ6ij6cp0jPO9Xnz0wP9ZjX1Xqx4wv9sjmg%2BNY%2F6b5MpvGesAi9r6rHIZZotSoR0QbVTRbDCDC0RyeVFPZrGb0qYDVa76oaCFqcIMf%2BdBeLHhkmQFcIVAn%2F3fMMYQa3fK7f%2FYddEQu8%2FBFUPrNOApA8UKT3kXWsr0yXxM7orPjhPGln9a9q9VSoTa9eTVNqWVP%2FL5p0YY78I4FfbzeVpNxyk3H8oxm%2FwDxheyxo24s0UKfNbX%2FU8xhFlaHGuscWQkn40obuAggNTgVmiCePg6U3qo7efiacGqopHHO7ujOlaJ%2BmAuAgyZ1xi1lsTdHsyMAgumuwsnGjxjxgBoCnC9MRWJ5cM9W5evLsS2rIdp63067ScO%2FCGDHCh6Ryf3O1bdbITEBlwxzN9XACmIAkDXxmP%2FGzS1LF8EFJMVeIKqxy%2FFDbH1PytciSXypwd8javXf8BbWvnW%2B9Q6SIkNF4Y8%2BWmMM3hMvSGFsgdhmjKFVcgn7hFAbBeAo8erQL3QYe0eV9Xwr4ApXEWfImShWQHlRg9u9sCBbniv7ZYtPvOHzkLVS7H8PMMfms8AGOqUBCR4wY0QYUajxe97ZL6ZmIqscfg9jfPJeZP4riWWOMaZUp4U4wFvlUsSAL0nfqqwWGzUPDRevQy4Jl0JnZO9pMUlXZrg3wdDNTTJv%2BXPWNBTmECmTTKZYUWOhagaDjGm8NvRiecaH9FWzEMmOceNdZTADbOBbJfBzZkt4Pw87QVShzKxwu8fSDPmgiLrNUfu7ygCSy5%2BEWNA20TrmLEC%2FvSMOwahl&X-Amz-Signature=0ea3562bf44ba5931a5523d1fbab17586a5f53283b8cf6d34e4710fa89b11e36&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MMZ7D3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKmuRhOgP0i%2F04AgzjksQLT8rjfoGL98aewvTXmuzToAiEA1aHJ%2FM8eh03uGeNvWL%2BbMNYJFNllmI6MqlGrmc%2FWzCsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDENnJBuM3Hd9%2FRzQiyrcA9l0%2BNKi7imfnpTHJV1mpknsgOD5RTztPtWeI2qaneg1nM%2BbvayO9Iof%2F%2BPC84aQiRfv1TXANQkJ6ij6cp0jPO9Xnz0wP9ZjX1Xqx4wv9sjmg%2BNY%2F6b5MpvGesAi9r6rHIZZotSoR0QbVTRbDCDC0RyeVFPZrGb0qYDVa76oaCFqcIMf%2BdBeLHhkmQFcIVAn%2F3fMMYQa3fK7f%2FYddEQu8%2FBFUPrNOApA8UKT3kXWsr0yXxM7orPjhPGln9a9q9VSoTa9eTVNqWVP%2FL5p0YY78I4FfbzeVpNxyk3H8oxm%2FwDxheyxo24s0UKfNbX%2FU8xhFlaHGuscWQkn40obuAggNTgVmiCePg6U3qo7efiacGqopHHO7ujOlaJ%2BmAuAgyZ1xi1lsTdHsyMAgumuwsnGjxjxgBoCnC9MRWJ5cM9W5evLsS2rIdp63067ScO%2FCGDHCh6Ryf3O1bdbITEBlwxzN9XACmIAkDXxmP%2FGzS1LF8EFJMVeIKqxy%2FFDbH1PytciSXypwd8javXf8BbWvnW%2B9Q6SIkNF4Y8%2BWmMM3hMvSGFsgdhmjKFVcgn7hFAbBeAo8erQL3QYe0eV9Xwr4ApXEWfImShWQHlRg9u9sCBbniv7ZYtPvOHzkLVS7H8PMMfms8AGOqUBCR4wY0QYUajxe97ZL6ZmIqscfg9jfPJeZP4riWWOMaZUp4U4wFvlUsSAL0nfqqwWGzUPDRevQy4Jl0JnZO9pMUlXZrg3wdDNTTJv%2BXPWNBTmECmTTKZYUWOhagaDjGm8NvRiecaH9FWzEMmOceNdZTADbOBbJfBzZkt4Pw87QVShzKxwu8fSDPmgiLrNUfu7ygCSy5%2BEWNA20TrmLEC%2FvSMOwahl&X-Amz-Signature=bd43b3f9d88b875dbccb349280c0e691bb53f75b5504532c285aee9303c1893a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MMZ7D3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKmuRhOgP0i%2F04AgzjksQLT8rjfoGL98aewvTXmuzToAiEA1aHJ%2FM8eh03uGeNvWL%2BbMNYJFNllmI6MqlGrmc%2FWzCsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDENnJBuM3Hd9%2FRzQiyrcA9l0%2BNKi7imfnpTHJV1mpknsgOD5RTztPtWeI2qaneg1nM%2BbvayO9Iof%2F%2BPC84aQiRfv1TXANQkJ6ij6cp0jPO9Xnz0wP9ZjX1Xqx4wv9sjmg%2BNY%2F6b5MpvGesAi9r6rHIZZotSoR0QbVTRbDCDC0RyeVFPZrGb0qYDVa76oaCFqcIMf%2BdBeLHhkmQFcIVAn%2F3fMMYQa3fK7f%2FYddEQu8%2FBFUPrNOApA8UKT3kXWsr0yXxM7orPjhPGln9a9q9VSoTa9eTVNqWVP%2FL5p0YY78I4FfbzeVpNxyk3H8oxm%2FwDxheyxo24s0UKfNbX%2FU8xhFlaHGuscWQkn40obuAggNTgVmiCePg6U3qo7efiacGqopHHO7ujOlaJ%2BmAuAgyZ1xi1lsTdHsyMAgumuwsnGjxjxgBoCnC9MRWJ5cM9W5evLsS2rIdp63067ScO%2FCGDHCh6Ryf3O1bdbITEBlwxzN9XACmIAkDXxmP%2FGzS1LF8EFJMVeIKqxy%2FFDbH1PytciSXypwd8javXf8BbWvnW%2B9Q6SIkNF4Y8%2BWmMM3hMvSGFsgdhmjKFVcgn7hFAbBeAo8erQL3QYe0eV9Xwr4ApXEWfImShWQHlRg9u9sCBbniv7ZYtPvOHzkLVS7H8PMMfms8AGOqUBCR4wY0QYUajxe97ZL6ZmIqscfg9jfPJeZP4riWWOMaZUp4U4wFvlUsSAL0nfqqwWGzUPDRevQy4Jl0JnZO9pMUlXZrg3wdDNTTJv%2BXPWNBTmECmTTKZYUWOhagaDjGm8NvRiecaH9FWzEMmOceNdZTADbOBbJfBzZkt4Pw87QVShzKxwu8fSDPmgiLrNUfu7ygCSy5%2BEWNA20TrmLEC%2FvSMOwahl&X-Amz-Signature=ba5c4c56dd9f708e3fbe478b86fbb8a62515e4f05d5900f7e4485b9f54bdf448&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
