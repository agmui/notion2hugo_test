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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQJ7F3M%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBLDILPjkTYVjHbq71EU0WKIC0N%2BzfvWzA953uJ30g1HAiBvPwBQJfyluCCoGtdGrowwy%2B3vGdvnowNJDzfVAcr%2FDiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFZHEUVMsFBcYknAKtwDjjGWGpA5SI6%2FX50S100I13TNTONKD%2FuOA6S%2Bt03yabijbNAgb5mtk7ChizehLLMbYnpOwYpWkEl%2F1gF1XFMmtubzcOr%2F0GwGzi77avhvilWJcH3UdvHcz052ky9ZSW8ORHgc%2BVpwnPaSTxo7Uyt1MzEgYnIs%2Bhjkp%2FKUYEFRmGcN3KlQ%2BtiKaWx5z10v8AMyqYYwUwPPFOg2HtvsMHRWSfg5iWERZMfYPuunNjU5tKEvm%2F0w7SyjCnvtPsVe7YcDtSZd8Mn8%2BA5RZPJLFUu5zdjrA2FnGOLMWYVXFydHZSm8jNYPNoh6Cw7BZvlDsx9QS447ikPs61wEf4NdwivRwxmtd%2FBhU6MRD7w7uxOwGcZe88yT2HZP5lNE%2BuLUrpJ53YPuDbesAMZM0fut7Gc%2B3pFvmD2ADzAC3CF0w%2F9U620bi0QivuaMB7ZSvSdSoCfYU%2BjVo90OyHd142Iq1LHEFfFhT3TqAz9IfiJDYxUt%2BnU8gVXTqpClhZ93eeChAKLqPIIDo2PnJNAOij88YGxp14fnxgB%2BHUVyt3aHZA0GzX3pwqLu2h8VdAzVnHkIaZ0G8rYfKOP8r14tf6MzumWz2Yq0g%2FMNV2Osr9ypqmGKv95XY4oseDnSQ9PmGXUw88S8wQY6pgGF0PZ7FspK5wPq7ygaPhgqx5JJoobWJJucoWjcwp5vvqj%2BbMKFAO80gP4eXMfkPjlUiDXFhzDkl8DU0DllF%2FiUwB1otj6jZYrFaF4iKNIgkkVKPO8IJmWjsGIQrpXlkE1Nfs5RIVBuCSi8%2FlWVdnIH9pRLAzygkT43kTeh1MXCl1sL6CnuzpR9JQ%2FyHuQiQCOiHSNKUPCEcj414jKdhy3b4sVssBHr&X-Amz-Signature=1a043726a6a817ad237fffd0c788c07354b9148a55b238dd0c4a0df33d955784&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQJ7F3M%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBLDILPjkTYVjHbq71EU0WKIC0N%2BzfvWzA953uJ30g1HAiBvPwBQJfyluCCoGtdGrowwy%2B3vGdvnowNJDzfVAcr%2FDiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFZHEUVMsFBcYknAKtwDjjGWGpA5SI6%2FX50S100I13TNTONKD%2FuOA6S%2Bt03yabijbNAgb5mtk7ChizehLLMbYnpOwYpWkEl%2F1gF1XFMmtubzcOr%2F0GwGzi77avhvilWJcH3UdvHcz052ky9ZSW8ORHgc%2BVpwnPaSTxo7Uyt1MzEgYnIs%2Bhjkp%2FKUYEFRmGcN3KlQ%2BtiKaWx5z10v8AMyqYYwUwPPFOg2HtvsMHRWSfg5iWERZMfYPuunNjU5tKEvm%2F0w7SyjCnvtPsVe7YcDtSZd8Mn8%2BA5RZPJLFUu5zdjrA2FnGOLMWYVXFydHZSm8jNYPNoh6Cw7BZvlDsx9QS447ikPs61wEf4NdwivRwxmtd%2FBhU6MRD7w7uxOwGcZe88yT2HZP5lNE%2BuLUrpJ53YPuDbesAMZM0fut7Gc%2B3pFvmD2ADzAC3CF0w%2F9U620bi0QivuaMB7ZSvSdSoCfYU%2BjVo90OyHd142Iq1LHEFfFhT3TqAz9IfiJDYxUt%2BnU8gVXTqpClhZ93eeChAKLqPIIDo2PnJNAOij88YGxp14fnxgB%2BHUVyt3aHZA0GzX3pwqLu2h8VdAzVnHkIaZ0G8rYfKOP8r14tf6MzumWz2Yq0g%2FMNV2Osr9ypqmGKv95XY4oseDnSQ9PmGXUw88S8wQY6pgGF0PZ7FspK5wPq7ygaPhgqx5JJoobWJJucoWjcwp5vvqj%2BbMKFAO80gP4eXMfkPjlUiDXFhzDkl8DU0DllF%2FiUwB1otj6jZYrFaF4iKNIgkkVKPO8IJmWjsGIQrpXlkE1Nfs5RIVBuCSi8%2FlWVdnIH9pRLAzygkT43kTeh1MXCl1sL6CnuzpR9JQ%2FyHuQiQCOiHSNKUPCEcj414jKdhy3b4sVssBHr&X-Amz-Signature=b19ec931dfd1bd45449ed44b5598ac798fce8571ecb9c459bf15d1015306e6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQJ7F3M%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBLDILPjkTYVjHbq71EU0WKIC0N%2BzfvWzA953uJ30g1HAiBvPwBQJfyluCCoGtdGrowwy%2B3vGdvnowNJDzfVAcr%2FDiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFZHEUVMsFBcYknAKtwDjjGWGpA5SI6%2FX50S100I13TNTONKD%2FuOA6S%2Bt03yabijbNAgb5mtk7ChizehLLMbYnpOwYpWkEl%2F1gF1XFMmtubzcOr%2F0GwGzi77avhvilWJcH3UdvHcz052ky9ZSW8ORHgc%2BVpwnPaSTxo7Uyt1MzEgYnIs%2Bhjkp%2FKUYEFRmGcN3KlQ%2BtiKaWx5z10v8AMyqYYwUwPPFOg2HtvsMHRWSfg5iWERZMfYPuunNjU5tKEvm%2F0w7SyjCnvtPsVe7YcDtSZd8Mn8%2BA5RZPJLFUu5zdjrA2FnGOLMWYVXFydHZSm8jNYPNoh6Cw7BZvlDsx9QS447ikPs61wEf4NdwivRwxmtd%2FBhU6MRD7w7uxOwGcZe88yT2HZP5lNE%2BuLUrpJ53YPuDbesAMZM0fut7Gc%2B3pFvmD2ADzAC3CF0w%2F9U620bi0QivuaMB7ZSvSdSoCfYU%2BjVo90OyHd142Iq1LHEFfFhT3TqAz9IfiJDYxUt%2BnU8gVXTqpClhZ93eeChAKLqPIIDo2PnJNAOij88YGxp14fnxgB%2BHUVyt3aHZA0GzX3pwqLu2h8VdAzVnHkIaZ0G8rYfKOP8r14tf6MzumWz2Yq0g%2FMNV2Osr9ypqmGKv95XY4oseDnSQ9PmGXUw88S8wQY6pgGF0PZ7FspK5wPq7ygaPhgqx5JJoobWJJucoWjcwp5vvqj%2BbMKFAO80gP4eXMfkPjlUiDXFhzDkl8DU0DllF%2FiUwB1otj6jZYrFaF4iKNIgkkVKPO8IJmWjsGIQrpXlkE1Nfs5RIVBuCSi8%2FlWVdnIH9pRLAzygkT43kTeh1MXCl1sL6CnuzpR9JQ%2FyHuQiQCOiHSNKUPCEcj414jKdhy3b4sVssBHr&X-Amz-Signature=f0402b34f5db1f2c73fe533b213005612c2b82e6331804c1ba24c9d1ebba14f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
