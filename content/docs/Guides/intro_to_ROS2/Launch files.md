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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AQT7OR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0WCWCfTHqA9Vkld3ZMhHtSogaBq87Jcp4LoiT43h9lAiB2%2FB3t40dcGWQArlxcDCAcGtr6jb%2FfdRw%2BBRjiBYuwGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0LsN%2F%2Bhv9wrNPCUpKtwDpLfWdE%2BPv8N%2FxPtUfLLxmBggJO1eCAl26IEtoSXrZm%2FrgZHj2NDdZn34avb1VTeXyxeHr1TC%2FyqS43xWdFLRXJo3ByLR1tMqetxE78DDMIZa93Vpc1Ra23V5jgAXcHeuzcK3QmqSpj1S6zn%2FdkZYmnYYP7NfEkjxOMo1DUE%2BsCO96sM6JPk274JHWeU%2Fn3C8QqAzOANwghoFEl%2FFVd740Ywr9IgGBUMLtIDgbCEvWqoRP%2F7lArff0FnuUFqg%2BG5a70dRJnTzRX7lxpAiGlb31TjNwidtIgLC7k7cur%2FL2QbtS13eOebzMaI30WNAbaJsGfsonxSHSHF0cDKLO3l1K4LyM0%2FCQK0H0A5JQVb7qAGhZGHyqV2pJUvRb3YhLhp%2BuvILsE1ijlQN4o1MwLVc1yhUX6m%2BOpQwLUP63skZFQebCSeMh9lE%2FfTcgBMbtwlhAMcUcUYxqdpl13halMja4wSnAwz01hb5lQbBfyMUDhbwedKvHJYztJpw2SFZcsp%2ByU4kLjpUwwPV7%2FKgN8rQKAqm22ZSSXXFRk%2BgUacwomqOyCvYlYBetuF0uYlXG%2FxDIQAc0%2FzXXkwZZuOkZ35AK7cypGPVru3Ks0vblAXQ4avJEWIFCm%2BoyUP%2FNIgw26y9vwY6pgE3csKA51cnB%2B%2F1Lq8l5I%2F9BPubJaafICbRf6esfr%2FORRLxXuCxnlvu2rCDokJVysH%2FW36qvM77%2FQqhY8mjpuSYWL%2FmEIlokOsMYGTcK6k9UlfhfBDgHeBT7UgaHXlOCj3peNkxoW7%2FpZ7nlrqTLo0Eu0%2B3jn%2F0n1F0mPRirV0JA3NbWhT%2B7YpN3gh9ZqovNrH4y7L1hP1cUpPlzIEBvuu4xYsAEZ3F&X-Amz-Signature=a8556bbedf82adbf3fcbc82d9de214e44add7d67872939befb05b6e50d0ed7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AQT7OR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0WCWCfTHqA9Vkld3ZMhHtSogaBq87Jcp4LoiT43h9lAiB2%2FB3t40dcGWQArlxcDCAcGtr6jb%2FfdRw%2BBRjiBYuwGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0LsN%2F%2Bhv9wrNPCUpKtwDpLfWdE%2BPv8N%2FxPtUfLLxmBggJO1eCAl26IEtoSXrZm%2FrgZHj2NDdZn34avb1VTeXyxeHr1TC%2FyqS43xWdFLRXJo3ByLR1tMqetxE78DDMIZa93Vpc1Ra23V5jgAXcHeuzcK3QmqSpj1S6zn%2FdkZYmnYYP7NfEkjxOMo1DUE%2BsCO96sM6JPk274JHWeU%2Fn3C8QqAzOANwghoFEl%2FFVd740Ywr9IgGBUMLtIDgbCEvWqoRP%2F7lArff0FnuUFqg%2BG5a70dRJnTzRX7lxpAiGlb31TjNwidtIgLC7k7cur%2FL2QbtS13eOebzMaI30WNAbaJsGfsonxSHSHF0cDKLO3l1K4LyM0%2FCQK0H0A5JQVb7qAGhZGHyqV2pJUvRb3YhLhp%2BuvILsE1ijlQN4o1MwLVc1yhUX6m%2BOpQwLUP63skZFQebCSeMh9lE%2FfTcgBMbtwlhAMcUcUYxqdpl13halMja4wSnAwz01hb5lQbBfyMUDhbwedKvHJYztJpw2SFZcsp%2ByU4kLjpUwwPV7%2FKgN8rQKAqm22ZSSXXFRk%2BgUacwomqOyCvYlYBetuF0uYlXG%2FxDIQAc0%2FzXXkwZZuOkZ35AK7cypGPVru3Ks0vblAXQ4avJEWIFCm%2BoyUP%2FNIgw26y9vwY6pgE3csKA51cnB%2B%2F1Lq8l5I%2F9BPubJaafICbRf6esfr%2FORRLxXuCxnlvu2rCDokJVysH%2FW36qvM77%2FQqhY8mjpuSYWL%2FmEIlokOsMYGTcK6k9UlfhfBDgHeBT7UgaHXlOCj3peNkxoW7%2FpZ7nlrqTLo0Eu0%2B3jn%2F0n1F0mPRirV0JA3NbWhT%2B7YpN3gh9ZqovNrH4y7L1hP1cUpPlzIEBvuu4xYsAEZ3F&X-Amz-Signature=e969c44cdabb5ca0f0db232ee5961463893824b69ce16aa6270052bf91553496&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AQT7OR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0WCWCfTHqA9Vkld3ZMhHtSogaBq87Jcp4LoiT43h9lAiB2%2FB3t40dcGWQArlxcDCAcGtr6jb%2FfdRw%2BBRjiBYuwGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0LsN%2F%2Bhv9wrNPCUpKtwDpLfWdE%2BPv8N%2FxPtUfLLxmBggJO1eCAl26IEtoSXrZm%2FrgZHj2NDdZn34avb1VTeXyxeHr1TC%2FyqS43xWdFLRXJo3ByLR1tMqetxE78DDMIZa93Vpc1Ra23V5jgAXcHeuzcK3QmqSpj1S6zn%2FdkZYmnYYP7NfEkjxOMo1DUE%2BsCO96sM6JPk274JHWeU%2Fn3C8QqAzOANwghoFEl%2FFVd740Ywr9IgGBUMLtIDgbCEvWqoRP%2F7lArff0FnuUFqg%2BG5a70dRJnTzRX7lxpAiGlb31TjNwidtIgLC7k7cur%2FL2QbtS13eOebzMaI30WNAbaJsGfsonxSHSHF0cDKLO3l1K4LyM0%2FCQK0H0A5JQVb7qAGhZGHyqV2pJUvRb3YhLhp%2BuvILsE1ijlQN4o1MwLVc1yhUX6m%2BOpQwLUP63skZFQebCSeMh9lE%2FfTcgBMbtwlhAMcUcUYxqdpl13halMja4wSnAwz01hb5lQbBfyMUDhbwedKvHJYztJpw2SFZcsp%2ByU4kLjpUwwPV7%2FKgN8rQKAqm22ZSSXXFRk%2BgUacwomqOyCvYlYBetuF0uYlXG%2FxDIQAc0%2FzXXkwZZuOkZ35AK7cypGPVru3Ks0vblAXQ4avJEWIFCm%2BoyUP%2FNIgw26y9vwY6pgE3csKA51cnB%2B%2F1Lq8l5I%2F9BPubJaafICbRf6esfr%2FORRLxXuCxnlvu2rCDokJVysH%2FW36qvM77%2FQqhY8mjpuSYWL%2FmEIlokOsMYGTcK6k9UlfhfBDgHeBT7UgaHXlOCj3peNkxoW7%2FpZ7nlrqTLo0Eu0%2B3jn%2F0n1F0mPRirV0JA3NbWhT%2B7YpN3gh9ZqovNrH4y7L1hP1cUpPlzIEBvuu4xYsAEZ3F&X-Amz-Signature=c86a2b8c69f32d20f0bdf1618de5b29d139823a54de7213e7dbd66a49a3dd557&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
