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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBXVKHF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7fsTovbwsI74NJqX%2FArGeImrUTLdwbp4SKMngt1h7JAIgaXegKGN5OfgvAe453Davnq6rFbu2N5JRm%2Bg3nIjeUmcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE46YzfJGfKCzaSHHyrcA%2FCJqK7rH3%2F2K%2BDuWeF8haY%2BkZzjgKtqS9XtiQwaFJBFMt8GtZo6ihDUHTTot0b%2FoaQdawDiNmLtyFo5qXyjN%2BtwgXJKKLCzTmLEsOx7bYcUleMcy6r56NqR7cst3%2Fnf7QK6363Ik1rhIAVNu2AD31rB%2BcxZQ0cydxw6hhztlO%2BHtX5MmXcy%2BGOcXaYT%2BSoeAZwDKmqPLVWaGczrpQJ0au08PEDISxgOHUW1VPT6aBsSPKzCRTWzRGifNuBlEFfWcovTpbGIE5qvLFnnCaTjDextBukegTuhLszpDz%2BKhqlcSmJjdpgku70tB7hIi2G6Ug%2BwWq5Cf4fASQf6T3Jjgf4TMOAO1XLlTadzZ59NpaoLQDQWVNBlYG1AHHE%2FPtWXlzsZm3cSdWTrNQBT%2FFBus9Lv4dUvfI1FigzfPesUOy4IEdRZMZIl2AcegvzT1RwvqMPh2ZFglLTLmb26ny4YxFCyQIBCr8F67AVw7GZqQ7XTE6MuGLIOqGCXoKfb5nd%2FDSYLze4a%2Bi%2F%2FsIaqkL3fo24aO7vFHHZ5PG2ZgL7O%2FA6HMeq89SC0GDMPURtWQsn6%2FQwrwwCE8u5iMH0uGosQpyE0V4ZdGgQFjU3GlsTpp0cYMxW1a9j%2FGe0C1vsVMN7%2BvcIGOqUBgedjn5Tow%2BKORKj22oYuHWonDxzkUozFk02kYhs1S4r5yMxc6w%2Fdi6O6JzDuH85gqk54RoXwvJ8kCQyXv%2Fn5u2DFZGpKV4lb8KxEgi0alfLN0nMg5JwVltyZG4JJcsN5Pv2cGSTx8b2%2Fnn4dnPzIIM3mbgIzOxI0ruxTppfi9JEYogBz8mCMnQ01F8idYBcOlKLG66qq10g7TWz8vQONv0vuo3O7&X-Amz-Signature=d2c16ccb70e1da7d7a85ed6a5159fe7994f4d98c7a3b87914ae0b08170553b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBXVKHF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7fsTovbwsI74NJqX%2FArGeImrUTLdwbp4SKMngt1h7JAIgaXegKGN5OfgvAe453Davnq6rFbu2N5JRm%2Bg3nIjeUmcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE46YzfJGfKCzaSHHyrcA%2FCJqK7rH3%2F2K%2BDuWeF8haY%2BkZzjgKtqS9XtiQwaFJBFMt8GtZo6ihDUHTTot0b%2FoaQdawDiNmLtyFo5qXyjN%2BtwgXJKKLCzTmLEsOx7bYcUleMcy6r56NqR7cst3%2Fnf7QK6363Ik1rhIAVNu2AD31rB%2BcxZQ0cydxw6hhztlO%2BHtX5MmXcy%2BGOcXaYT%2BSoeAZwDKmqPLVWaGczrpQJ0au08PEDISxgOHUW1VPT6aBsSPKzCRTWzRGifNuBlEFfWcovTpbGIE5qvLFnnCaTjDextBukegTuhLszpDz%2BKhqlcSmJjdpgku70tB7hIi2G6Ug%2BwWq5Cf4fASQf6T3Jjgf4TMOAO1XLlTadzZ59NpaoLQDQWVNBlYG1AHHE%2FPtWXlzsZm3cSdWTrNQBT%2FFBus9Lv4dUvfI1FigzfPesUOy4IEdRZMZIl2AcegvzT1RwvqMPh2ZFglLTLmb26ny4YxFCyQIBCr8F67AVw7GZqQ7XTE6MuGLIOqGCXoKfb5nd%2FDSYLze4a%2Bi%2F%2FsIaqkL3fo24aO7vFHHZ5PG2ZgL7O%2FA6HMeq89SC0GDMPURtWQsn6%2FQwrwwCE8u5iMH0uGosQpyE0V4ZdGgQFjU3GlsTpp0cYMxW1a9j%2FGe0C1vsVMN7%2BvcIGOqUBgedjn5Tow%2BKORKj22oYuHWonDxzkUozFk02kYhs1S4r5yMxc6w%2Fdi6O6JzDuH85gqk54RoXwvJ8kCQyXv%2Fn5u2DFZGpKV4lb8KxEgi0alfLN0nMg5JwVltyZG4JJcsN5Pv2cGSTx8b2%2Fnn4dnPzIIM3mbgIzOxI0ruxTppfi9JEYogBz8mCMnQ01F8idYBcOlKLG66qq10g7TWz8vQONv0vuo3O7&X-Amz-Signature=2088068eb846b748352dfb9657338e800322b71e15d3a2689bbaf79062b82e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBXVKHF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7fsTovbwsI74NJqX%2FArGeImrUTLdwbp4SKMngt1h7JAIgaXegKGN5OfgvAe453Davnq6rFbu2N5JRm%2Bg3nIjeUmcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE46YzfJGfKCzaSHHyrcA%2FCJqK7rH3%2F2K%2BDuWeF8haY%2BkZzjgKtqS9XtiQwaFJBFMt8GtZo6ihDUHTTot0b%2FoaQdawDiNmLtyFo5qXyjN%2BtwgXJKKLCzTmLEsOx7bYcUleMcy6r56NqR7cst3%2Fnf7QK6363Ik1rhIAVNu2AD31rB%2BcxZQ0cydxw6hhztlO%2BHtX5MmXcy%2BGOcXaYT%2BSoeAZwDKmqPLVWaGczrpQJ0au08PEDISxgOHUW1VPT6aBsSPKzCRTWzRGifNuBlEFfWcovTpbGIE5qvLFnnCaTjDextBukegTuhLszpDz%2BKhqlcSmJjdpgku70tB7hIi2G6Ug%2BwWq5Cf4fASQf6T3Jjgf4TMOAO1XLlTadzZ59NpaoLQDQWVNBlYG1AHHE%2FPtWXlzsZm3cSdWTrNQBT%2FFBus9Lv4dUvfI1FigzfPesUOy4IEdRZMZIl2AcegvzT1RwvqMPh2ZFglLTLmb26ny4YxFCyQIBCr8F67AVw7GZqQ7XTE6MuGLIOqGCXoKfb5nd%2FDSYLze4a%2Bi%2F%2FsIaqkL3fo24aO7vFHHZ5PG2ZgL7O%2FA6HMeq89SC0GDMPURtWQsn6%2FQwrwwCE8u5iMH0uGosQpyE0V4ZdGgQFjU3GlsTpp0cYMxW1a9j%2FGe0C1vsVMN7%2BvcIGOqUBgedjn5Tow%2BKORKj22oYuHWonDxzkUozFk02kYhs1S4r5yMxc6w%2Fdi6O6JzDuH85gqk54RoXwvJ8kCQyXv%2Fn5u2DFZGpKV4lb8KxEgi0alfLN0nMg5JwVltyZG4JJcsN5Pv2cGSTx8b2%2Fnn4dnPzIIM3mbgIzOxI0ruxTppfi9JEYogBz8mCMnQ01F8idYBcOlKLG66qq10g7TWz8vQONv0vuo3O7&X-Amz-Signature=43f079d4e9e70f6ecccede099fc4477a7a29f2da72981c78b950695cc792230a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
