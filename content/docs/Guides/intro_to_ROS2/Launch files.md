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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475T5WM7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkprqP2XpTOa97u40tQhmvRNtZ0C5HbhDuHS3HbJqS%2BAiEArP9zwkdXacDl6Dqp69Y6rRdgENxYgcXnyjrW5513YzYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJg43wIYOjcrYELm3SrcA5L0W79UtT5NeHIOh6E6TmlYkYRQqS%2B%2FkU0S4Egrgwd%2FR8Gu93DjnnZViuT6Kv5KB6w4QoGFgC%2Fj76yzR7zRq5P70wKjwKJkKgb3lrCok0bXQn4odE0CTps7qd4G%2FqZ4o0E6CbMRRXd0RG52n8eUKjN9zwFDUiaIxW7RgEdnFcAJa4ERIWcJiGUn%2FHrRXsiwdZadyHpOcm7hBZMSPIz%2Fjohc6QRDlSEaPwkjzvhsMwlqX4Ak3G4h7wdPApWE2i47RSbFZP%2FBcLPtveVTyvGOkA7Xrc7AqsjL%2BNyHawP2skqtsXWlLXw8YbvjcUCw%2FESkriD9xjluJ84%2Bmey1i651TAqbCafh3XNCZvP9vJca%2BBRpQVN016X9piUwfBDrHa%2FThogA1dTCcA2ywGF6aomnDWkpKbSv6qY6X9NBEZDeY7loFdG6gMxeGXn1yhxyxSW928lWkGZuskxd3wJBvuW%2F7jfL58oo0NYwySyyePN55BmhTH9cZ7d6IXA7IQAxoiOOHExdYuYBBnWRESUM3ECsmLKwnUT5pjhJ76Mz%2FKvef5NxhcA1UlEnA5i4vEofymT85AAsL5IwsWik5c7iuSLUjrZfc3X0EJhWNBYRejlBY1PHX9F6Tms3ISBcXLj1MLHT08EGOqUBC%2B%2FZ4TMWXKtFlsxjd1Um6auF1uIM1U4ITqSeO0vhKcGTxzSlNw839ypihvzqTh3LjGbJm%2BstwZBMiky1X5aD2V7qbNrSNDSaWEbqSx1151OGdxVH82VUWDWQLl5fSIpUojxSG%2FDu3H%2FhBDQyig9YPnr0EjwiO6KNQDMh6pgL7VBQ2fCnnaRaVX3MM%2FYp2BJl5VqGOdzQWOJphBymhUFnmUaWebkh&X-Amz-Signature=99722efee617948492194446cdaae563c27574b3b8cacabf21d5a8a9d820f064&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475T5WM7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkprqP2XpTOa97u40tQhmvRNtZ0C5HbhDuHS3HbJqS%2BAiEArP9zwkdXacDl6Dqp69Y6rRdgENxYgcXnyjrW5513YzYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJg43wIYOjcrYELm3SrcA5L0W79UtT5NeHIOh6E6TmlYkYRQqS%2B%2FkU0S4Egrgwd%2FR8Gu93DjnnZViuT6Kv5KB6w4QoGFgC%2Fj76yzR7zRq5P70wKjwKJkKgb3lrCok0bXQn4odE0CTps7qd4G%2FqZ4o0E6CbMRRXd0RG52n8eUKjN9zwFDUiaIxW7RgEdnFcAJa4ERIWcJiGUn%2FHrRXsiwdZadyHpOcm7hBZMSPIz%2Fjohc6QRDlSEaPwkjzvhsMwlqX4Ak3G4h7wdPApWE2i47RSbFZP%2FBcLPtveVTyvGOkA7Xrc7AqsjL%2BNyHawP2skqtsXWlLXw8YbvjcUCw%2FESkriD9xjluJ84%2Bmey1i651TAqbCafh3XNCZvP9vJca%2BBRpQVN016X9piUwfBDrHa%2FThogA1dTCcA2ywGF6aomnDWkpKbSv6qY6X9NBEZDeY7loFdG6gMxeGXn1yhxyxSW928lWkGZuskxd3wJBvuW%2F7jfL58oo0NYwySyyePN55BmhTH9cZ7d6IXA7IQAxoiOOHExdYuYBBnWRESUM3ECsmLKwnUT5pjhJ76Mz%2FKvef5NxhcA1UlEnA5i4vEofymT85AAsL5IwsWik5c7iuSLUjrZfc3X0EJhWNBYRejlBY1PHX9F6Tms3ISBcXLj1MLHT08EGOqUBC%2B%2FZ4TMWXKtFlsxjd1Um6auF1uIM1U4ITqSeO0vhKcGTxzSlNw839ypihvzqTh3LjGbJm%2BstwZBMiky1X5aD2V7qbNrSNDSaWEbqSx1151OGdxVH82VUWDWQLl5fSIpUojxSG%2FDu3H%2FhBDQyig9YPnr0EjwiO6KNQDMh6pgL7VBQ2fCnnaRaVX3MM%2FYp2BJl5VqGOdzQWOJphBymhUFnmUaWebkh&X-Amz-Signature=e72aeac8b5099d12dc6da5b14dbee1c80c514daf7a778791334762be8623a8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475T5WM7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkprqP2XpTOa97u40tQhmvRNtZ0C5HbhDuHS3HbJqS%2BAiEArP9zwkdXacDl6Dqp69Y6rRdgENxYgcXnyjrW5513YzYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJg43wIYOjcrYELm3SrcA5L0W79UtT5NeHIOh6E6TmlYkYRQqS%2B%2FkU0S4Egrgwd%2FR8Gu93DjnnZViuT6Kv5KB6w4QoGFgC%2Fj76yzR7zRq5P70wKjwKJkKgb3lrCok0bXQn4odE0CTps7qd4G%2FqZ4o0E6CbMRRXd0RG52n8eUKjN9zwFDUiaIxW7RgEdnFcAJa4ERIWcJiGUn%2FHrRXsiwdZadyHpOcm7hBZMSPIz%2Fjohc6QRDlSEaPwkjzvhsMwlqX4Ak3G4h7wdPApWE2i47RSbFZP%2FBcLPtveVTyvGOkA7Xrc7AqsjL%2BNyHawP2skqtsXWlLXw8YbvjcUCw%2FESkriD9xjluJ84%2Bmey1i651TAqbCafh3XNCZvP9vJca%2BBRpQVN016X9piUwfBDrHa%2FThogA1dTCcA2ywGF6aomnDWkpKbSv6qY6X9NBEZDeY7loFdG6gMxeGXn1yhxyxSW928lWkGZuskxd3wJBvuW%2F7jfL58oo0NYwySyyePN55BmhTH9cZ7d6IXA7IQAxoiOOHExdYuYBBnWRESUM3ECsmLKwnUT5pjhJ76Mz%2FKvef5NxhcA1UlEnA5i4vEofymT85AAsL5IwsWik5c7iuSLUjrZfc3X0EJhWNBYRejlBY1PHX9F6Tms3ISBcXLj1MLHT08EGOqUBC%2B%2FZ4TMWXKtFlsxjd1Um6auF1uIM1U4ITqSeO0vhKcGTxzSlNw839ypihvzqTh3LjGbJm%2BstwZBMiky1X5aD2V7qbNrSNDSaWEbqSx1151OGdxVH82VUWDWQLl5fSIpUojxSG%2FDu3H%2FhBDQyig9YPnr0EjwiO6KNQDMh6pgL7VBQ2fCnnaRaVX3MM%2FYp2BJl5VqGOdzQWOJphBymhUFnmUaWebkh&X-Amz-Signature=af945bbb224e9aee90406abf33b64936036d2d6ae2dfaf5d342b3250d0547e62&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
