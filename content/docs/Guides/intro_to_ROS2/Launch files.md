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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRKEKA5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICuO1Kx1EZcyN71UGJ4u3vyNEpLj7oY9uRRu3WIR577bAiEAkAmoVa9Sx5%2Bp5pvmvB9dt%2F3qxvAQrmgZlDA8shSocH4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0msJ%2BfqMhcRndNEyrcA%2BDa3tUo8cIQt6ObfK9IYZcg40JQt%2FpYLiGVrwaDBX0djeYUFZ9IGHEDhJwYwmIWMEzWVTnOprhA0Yce253KfUEEiYejEoiWUA3CORRuQazzpH9ag9WggLh4gEJGSsBeK36%2FOZGT8HAfOnOAtqiLghLu7vendSZIhRdIak%2FN67NWYMrwn1w1bx3CGFgZNg%2F7SwoLW01mbWTt%2BqlE9rjk%2F1YVhFRU7qG%2BkNR6w9z%2BxcN3M1PcjYexXYWOpWRccqBv5%2BDxCVaol%2BGRnaaZcOgyq7pbeeUXEQPbaIzB%2Bc5eZ6LNZEzgAekpOtTugYyy4%2BTLN4h2rmB147zIJv4s%2BeTIRmxVKXl8IhQqr315OgGX58loHvpCGgjTj%2FyWWhjtYDvHMKZJVrmEM0LiY72%2BShtohvLbEXs6YVHPkakBEjj6kVEcg1eThLh9ItkxpiAAaBBbXhkV1HU9XkOq73WMYRS8NKETaXxt%2F5cr54ACuHAPcmXNq%2B8befMXubi9YEAbCBeS%2FW6d1U3MDNHFxpOtZSl4yuyy%2B3XrMhW3VhpaDbWfqENiO5YfiUVuHweJdgXCVKkbaR%2F7N%2BuZr0mMogMsNVuRh1Yd6XphTo%2BI7Lkc4NaEP6wn9AFrjcCI3c%2Bf9Fd4MLyH0cAGOqUBTRJUHxgVSKBTv6mCJbYFV1gn4LcgTFoWV3plz1kQSdvMNXCTKFTkUwlb%2B%2FnmKKtfvHrMzvLiPXtpJA1VbV7LRZPzZ%2BjWNMjHjyWgRQOuCLyu76VyCY3e55oD97cIh%2BQ0M16lZ3Iwc6fEFnK68RFprvnhAzhFUqsa4q1XYhIOX1n0LWKeocEv2uaWhz67yji1763mLHl%2Bv9DhNWwPDQorwTuVGfz%2B&X-Amz-Signature=428ad8e1f097d001de1a8bf346163c530b3e3540d9965266a10f3e29947384ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRKEKA5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICuO1Kx1EZcyN71UGJ4u3vyNEpLj7oY9uRRu3WIR577bAiEAkAmoVa9Sx5%2Bp5pvmvB9dt%2F3qxvAQrmgZlDA8shSocH4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0msJ%2BfqMhcRndNEyrcA%2BDa3tUo8cIQt6ObfK9IYZcg40JQt%2FpYLiGVrwaDBX0djeYUFZ9IGHEDhJwYwmIWMEzWVTnOprhA0Yce253KfUEEiYejEoiWUA3CORRuQazzpH9ag9WggLh4gEJGSsBeK36%2FOZGT8HAfOnOAtqiLghLu7vendSZIhRdIak%2FN67NWYMrwn1w1bx3CGFgZNg%2F7SwoLW01mbWTt%2BqlE9rjk%2F1YVhFRU7qG%2BkNR6w9z%2BxcN3M1PcjYexXYWOpWRccqBv5%2BDxCVaol%2BGRnaaZcOgyq7pbeeUXEQPbaIzB%2Bc5eZ6LNZEzgAekpOtTugYyy4%2BTLN4h2rmB147zIJv4s%2BeTIRmxVKXl8IhQqr315OgGX58loHvpCGgjTj%2FyWWhjtYDvHMKZJVrmEM0LiY72%2BShtohvLbEXs6YVHPkakBEjj6kVEcg1eThLh9ItkxpiAAaBBbXhkV1HU9XkOq73WMYRS8NKETaXxt%2F5cr54ACuHAPcmXNq%2B8befMXubi9YEAbCBeS%2FW6d1U3MDNHFxpOtZSl4yuyy%2B3XrMhW3VhpaDbWfqENiO5YfiUVuHweJdgXCVKkbaR%2F7N%2BuZr0mMogMsNVuRh1Yd6XphTo%2BI7Lkc4NaEP6wn9AFrjcCI3c%2Bf9Fd4MLyH0cAGOqUBTRJUHxgVSKBTv6mCJbYFV1gn4LcgTFoWV3plz1kQSdvMNXCTKFTkUwlb%2B%2FnmKKtfvHrMzvLiPXtpJA1VbV7LRZPzZ%2BjWNMjHjyWgRQOuCLyu76VyCY3e55oD97cIh%2BQ0M16lZ3Iwc6fEFnK68RFprvnhAzhFUqsa4q1XYhIOX1n0LWKeocEv2uaWhz67yji1763mLHl%2Bv9DhNWwPDQorwTuVGfz%2B&X-Amz-Signature=bced53b66a998bc13a4f223111a51a1ddd78eaaae699ff7c8019fca68471765c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRKEKA5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICuO1Kx1EZcyN71UGJ4u3vyNEpLj7oY9uRRu3WIR577bAiEAkAmoVa9Sx5%2Bp5pvmvB9dt%2F3qxvAQrmgZlDA8shSocH4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0msJ%2BfqMhcRndNEyrcA%2BDa3tUo8cIQt6ObfK9IYZcg40JQt%2FpYLiGVrwaDBX0djeYUFZ9IGHEDhJwYwmIWMEzWVTnOprhA0Yce253KfUEEiYejEoiWUA3CORRuQazzpH9ag9WggLh4gEJGSsBeK36%2FOZGT8HAfOnOAtqiLghLu7vendSZIhRdIak%2FN67NWYMrwn1w1bx3CGFgZNg%2F7SwoLW01mbWTt%2BqlE9rjk%2F1YVhFRU7qG%2BkNR6w9z%2BxcN3M1PcjYexXYWOpWRccqBv5%2BDxCVaol%2BGRnaaZcOgyq7pbeeUXEQPbaIzB%2Bc5eZ6LNZEzgAekpOtTugYyy4%2BTLN4h2rmB147zIJv4s%2BeTIRmxVKXl8IhQqr315OgGX58loHvpCGgjTj%2FyWWhjtYDvHMKZJVrmEM0LiY72%2BShtohvLbEXs6YVHPkakBEjj6kVEcg1eThLh9ItkxpiAAaBBbXhkV1HU9XkOq73WMYRS8NKETaXxt%2F5cr54ACuHAPcmXNq%2B8befMXubi9YEAbCBeS%2FW6d1U3MDNHFxpOtZSl4yuyy%2B3XrMhW3VhpaDbWfqENiO5YfiUVuHweJdgXCVKkbaR%2F7N%2BuZr0mMogMsNVuRh1Yd6XphTo%2BI7Lkc4NaEP6wn9AFrjcCI3c%2Bf9Fd4MLyH0cAGOqUBTRJUHxgVSKBTv6mCJbYFV1gn4LcgTFoWV3plz1kQSdvMNXCTKFTkUwlb%2B%2FnmKKtfvHrMzvLiPXtpJA1VbV7LRZPzZ%2BjWNMjHjyWgRQOuCLyu76VyCY3e55oD97cIh%2BQ0M16lZ3Iwc6fEFnK68RFprvnhAzhFUqsa4q1XYhIOX1n0LWKeocEv2uaWhz67yji1763mLHl%2Bv9DhNWwPDQorwTuVGfz%2B&X-Amz-Signature=06ab8a87238617b211da8d0300b6d1cebbe1c6c100a9e9725c30eb8824b16578&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
