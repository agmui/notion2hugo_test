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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMMEWUY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCDhp20Em1N26CEn0fWXfS0pgpGkLE0B%2Fvk1%2FaGP%2BNoEAIhAIJU0%2Fofd0X8W8ub5BvejgMIrjlSYuWyUz3j4rKhHxDxKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9zCV8MI1Tnl2G%2BhIq3AOEiwL4odSFuA%2BS1I7fEzLrBhYA0beZYTjPyCd2Zvp%2BjmSolsp1jtEMmiDOsDVsqtJY3zDTotIzKQPNQVt8YhQa25OpF8VSkCHerL8R7jELnL%2FBEjgrSIF6YXX9G5xcA%2F9lB7SN3YWQ2fD22sfR6f3F6o4th7tliGIcwgyTcqs33t5c8VffTMIYOdR%2BGr%2BTOLrBKyn30u2m%2FewNZfoqqIqwgH%2B8UGTlZXl3ZRCP%2B41TXv4lt0cJPEB643GLQILqXUeiMfUUHTu3ZCTrsukxTOYCJPeu8p2W3qN3FWkOIKmCMTfeacjcSNPv3PEFICB7H29s9blzSh4tU8uDZUDsJ73jHQSbdZ9Rlf%2FCVdVRSFngRHBOhBWlOhSIKphWTfyA%2FIALpJ0yv%2BEMQRFD2NqaWfpE1J0CUixA8j127CzJfUYAlssQYGkkZmUBaICpE4duWselbXVUtpcPVLv8edHweQjfl%2FTNBert4fWxiIU5w117BhAZZ1oTX4tlOHC8Nzmlv6EKqeF89uBl0gUAX82cvKHHMHnfIviZDVXBHefurM%2FVvgsZIm6JJAQLZ%2F%2FmwAw3ePzP%2BVjZ%2FmRWFzdVyZBxYtEcl9Tb8Xeq5fmgRHBjXTAe5vyAK6nubxq3uVJfkjDxwJa9BjqkAYvZmPwnCFR1MeTfk1UfFhGyU7qj%2FOA83gzGGjetfbTrxJNX9ZQlEcG180zWeKQXZoJ27CXJGzrJHUp%2F6RglIH%2B%2FJ2KdeFmaXej%2BsPSm2mWPppcGv%2BD4pj8Tsh4TlRw9ZSriU5kAPsiVlysAivtuuVZpQma754x%2Bxo3cVoOpBxcVp6YIGKvsHPX8FK8Z0y2zHijnpfJsZBoUGwtlG6LnfBu2xZdc&X-Amz-Signature=f799e9167a3b76117a39f1d979f30693851ab2a70625f181a204cac6195ef239&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMMEWUY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCDhp20Em1N26CEn0fWXfS0pgpGkLE0B%2Fvk1%2FaGP%2BNoEAIhAIJU0%2Fofd0X8W8ub5BvejgMIrjlSYuWyUz3j4rKhHxDxKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9zCV8MI1Tnl2G%2BhIq3AOEiwL4odSFuA%2BS1I7fEzLrBhYA0beZYTjPyCd2Zvp%2BjmSolsp1jtEMmiDOsDVsqtJY3zDTotIzKQPNQVt8YhQa25OpF8VSkCHerL8R7jELnL%2FBEjgrSIF6YXX9G5xcA%2F9lB7SN3YWQ2fD22sfR6f3F6o4th7tliGIcwgyTcqs33t5c8VffTMIYOdR%2BGr%2BTOLrBKyn30u2m%2FewNZfoqqIqwgH%2B8UGTlZXl3ZRCP%2B41TXv4lt0cJPEB643GLQILqXUeiMfUUHTu3ZCTrsukxTOYCJPeu8p2W3qN3FWkOIKmCMTfeacjcSNPv3PEFICB7H29s9blzSh4tU8uDZUDsJ73jHQSbdZ9Rlf%2FCVdVRSFngRHBOhBWlOhSIKphWTfyA%2FIALpJ0yv%2BEMQRFD2NqaWfpE1J0CUixA8j127CzJfUYAlssQYGkkZmUBaICpE4duWselbXVUtpcPVLv8edHweQjfl%2FTNBert4fWxiIU5w117BhAZZ1oTX4tlOHC8Nzmlv6EKqeF89uBl0gUAX82cvKHHMHnfIviZDVXBHefurM%2FVvgsZIm6JJAQLZ%2F%2FmwAw3ePzP%2BVjZ%2FmRWFzdVyZBxYtEcl9Tb8Xeq5fmgRHBjXTAe5vyAK6nubxq3uVJfkjDxwJa9BjqkAYvZmPwnCFR1MeTfk1UfFhGyU7qj%2FOA83gzGGjetfbTrxJNX9ZQlEcG180zWeKQXZoJ27CXJGzrJHUp%2F6RglIH%2B%2FJ2KdeFmaXej%2BsPSm2mWPppcGv%2BD4pj8Tsh4TlRw9ZSriU5kAPsiVlysAivtuuVZpQma754x%2Bxo3cVoOpBxcVp6YIGKvsHPX8FK8Z0y2zHijnpfJsZBoUGwtlG6LnfBu2xZdc&X-Amz-Signature=aba631a5512571e91caff44522565643aaf4d5cf3d565cb3b76e67d065072c32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMMEWUY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCDhp20Em1N26CEn0fWXfS0pgpGkLE0B%2Fvk1%2FaGP%2BNoEAIhAIJU0%2Fofd0X8W8ub5BvejgMIrjlSYuWyUz3j4rKhHxDxKv8DCG8QABoMNjM3NDIzMTgzODA1Igy9zCV8MI1Tnl2G%2BhIq3AOEiwL4odSFuA%2BS1I7fEzLrBhYA0beZYTjPyCd2Zvp%2BjmSolsp1jtEMmiDOsDVsqtJY3zDTotIzKQPNQVt8YhQa25OpF8VSkCHerL8R7jELnL%2FBEjgrSIF6YXX9G5xcA%2F9lB7SN3YWQ2fD22sfR6f3F6o4th7tliGIcwgyTcqs33t5c8VffTMIYOdR%2BGr%2BTOLrBKyn30u2m%2FewNZfoqqIqwgH%2B8UGTlZXl3ZRCP%2B41TXv4lt0cJPEB643GLQILqXUeiMfUUHTu3ZCTrsukxTOYCJPeu8p2W3qN3FWkOIKmCMTfeacjcSNPv3PEFICB7H29s9blzSh4tU8uDZUDsJ73jHQSbdZ9Rlf%2FCVdVRSFngRHBOhBWlOhSIKphWTfyA%2FIALpJ0yv%2BEMQRFD2NqaWfpE1J0CUixA8j127CzJfUYAlssQYGkkZmUBaICpE4duWselbXVUtpcPVLv8edHweQjfl%2FTNBert4fWxiIU5w117BhAZZ1oTX4tlOHC8Nzmlv6EKqeF89uBl0gUAX82cvKHHMHnfIviZDVXBHefurM%2FVvgsZIm6JJAQLZ%2F%2FmwAw3ePzP%2BVjZ%2FmRWFzdVyZBxYtEcl9Tb8Xeq5fmgRHBjXTAe5vyAK6nubxq3uVJfkjDxwJa9BjqkAYvZmPwnCFR1MeTfk1UfFhGyU7qj%2FOA83gzGGjetfbTrxJNX9ZQlEcG180zWeKQXZoJ27CXJGzrJHUp%2F6RglIH%2B%2FJ2KdeFmaXej%2BsPSm2mWPppcGv%2BD4pj8Tsh4TlRw9ZSriU5kAPsiVlysAivtuuVZpQma754x%2Bxo3cVoOpBxcVp6YIGKvsHPX8FK8Z0y2zHijnpfJsZBoUGwtlG6LnfBu2xZdc&X-Amz-Signature=2df706f901e3f421d340e69f0da32528ead68b6d8f98f3e3ca9eaa661d86a275&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
