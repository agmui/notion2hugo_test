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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KV3AJFZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCCN3oIepXfo6ffmVLmmn3IO%2BSA%2FT6CH7TtOols8t%2BhCgIhAKwDmbtTwsTXDWGFJRPUqK46ZAHQLwxTuWuETIc6TlyEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFvvf7zUncC6tknIwq3AN3%2BE44%2B7b48Mw38vUWqXbtb9CtHGRDDlJJCK3QW5sP7KvSylcNvDM2zUCDxd0%2F5Y0A6%2BAP80muLHMG63T%2FHbvt%2FT2Lt%2FW3Iew1ZES7iYHBp1uHTlyWXkT%2BaWcCsTTCiafBB4VRaUcxGH8oKk9dJ6jis5Kqk%2FjGxqmqpAx7tc%2B1qyiDhkm6g9MsW3XTUTMAvrWS3PO34Pk7DKqISR5XQVoexzeMjIIPpH6dFMs2UW5n6AFhtKu4HbJudv0JVF8USX0cXq8%2FLLqFB0ubyN9pm2G%2BNC%2FvkaJE13933Vo4%2Ff6U7NdOm2gCJHFMwtf2dF%2FEwBUB0iGfYG4EyZj8IvYfWdAGjO5LAbWTS81IY3Uj1Pbb7CoFwaYtqUBF1zmM817YhHlGchfwJZ%2B5y176BdUZPGgMiYSmv88DREWuDaICDcYIXrjJoEMjDj67j1C9m4bWN2l0srP%2BGuxrOMYcL4%2FdSjqLQTeEu0j6BuSL0o%2BvT3qsJ165CYgKVwvXsNb04JK3BD3wLOwDTdPKiBR%2BSdJbxT1gyrCtRbT9uD6lftuCUEN8e0nf1GnA6oMmXMekjnMMNLV13ASEUbSL4%2B9RITfxR%2BmrVgAm0AmvJq9nz0frYCINcs3%2Bf833NuNmmbK5ojDir4W%2BBjqkAc4dfHqEpSysiaAeeCOt24zC0Tk%2BpDHrCBB5IbVTCMLQ3b92YBd9kGfFfbY1xcJBQDDrEGh%2BnC%2BxzPjBzkf4HmJ38koh6pi%2B1xkRsTxgvbRi5vTTMzG905kt5mGIq6UHyzlnYrTZurEVMPHwIZn8gG3SK6VCDr%2ForhCI9WhJ7yS7STOkXBZF9ltbcHHrfZ8sptcNLoNtyZJpCCrz1wNdBxBQJaJV&X-Amz-Signature=c8bc5090512a96e0f34660e6b8a10c5c171c104e0493f4f25309c3b4417aa9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KV3AJFZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCCN3oIepXfo6ffmVLmmn3IO%2BSA%2FT6CH7TtOols8t%2BhCgIhAKwDmbtTwsTXDWGFJRPUqK46ZAHQLwxTuWuETIc6TlyEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFvvf7zUncC6tknIwq3AN3%2BE44%2B7b48Mw38vUWqXbtb9CtHGRDDlJJCK3QW5sP7KvSylcNvDM2zUCDxd0%2F5Y0A6%2BAP80muLHMG63T%2FHbvt%2FT2Lt%2FW3Iew1ZES7iYHBp1uHTlyWXkT%2BaWcCsTTCiafBB4VRaUcxGH8oKk9dJ6jis5Kqk%2FjGxqmqpAx7tc%2B1qyiDhkm6g9MsW3XTUTMAvrWS3PO34Pk7DKqISR5XQVoexzeMjIIPpH6dFMs2UW5n6AFhtKu4HbJudv0JVF8USX0cXq8%2FLLqFB0ubyN9pm2G%2BNC%2FvkaJE13933Vo4%2Ff6U7NdOm2gCJHFMwtf2dF%2FEwBUB0iGfYG4EyZj8IvYfWdAGjO5LAbWTS81IY3Uj1Pbb7CoFwaYtqUBF1zmM817YhHlGchfwJZ%2B5y176BdUZPGgMiYSmv88DREWuDaICDcYIXrjJoEMjDj67j1C9m4bWN2l0srP%2BGuxrOMYcL4%2FdSjqLQTeEu0j6BuSL0o%2BvT3qsJ165CYgKVwvXsNb04JK3BD3wLOwDTdPKiBR%2BSdJbxT1gyrCtRbT9uD6lftuCUEN8e0nf1GnA6oMmXMekjnMMNLV13ASEUbSL4%2B9RITfxR%2BmrVgAm0AmvJq9nz0frYCINcs3%2Bf833NuNmmbK5ojDir4W%2BBjqkAc4dfHqEpSysiaAeeCOt24zC0Tk%2BpDHrCBB5IbVTCMLQ3b92YBd9kGfFfbY1xcJBQDDrEGh%2BnC%2BxzPjBzkf4HmJ38koh6pi%2B1xkRsTxgvbRi5vTTMzG905kt5mGIq6UHyzlnYrTZurEVMPHwIZn8gG3SK6VCDr%2ForhCI9WhJ7yS7STOkXBZF9ltbcHHrfZ8sptcNLoNtyZJpCCrz1wNdBxBQJaJV&X-Amz-Signature=fddfd2709833f80627872b16ed186c0160852cd8e711a2fd3f7c6cf9dd360681&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KV3AJFZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCCN3oIepXfo6ffmVLmmn3IO%2BSA%2FT6CH7TtOols8t%2BhCgIhAKwDmbtTwsTXDWGFJRPUqK46ZAHQLwxTuWuETIc6TlyEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFvvf7zUncC6tknIwq3AN3%2BE44%2B7b48Mw38vUWqXbtb9CtHGRDDlJJCK3QW5sP7KvSylcNvDM2zUCDxd0%2F5Y0A6%2BAP80muLHMG63T%2FHbvt%2FT2Lt%2FW3Iew1ZES7iYHBp1uHTlyWXkT%2BaWcCsTTCiafBB4VRaUcxGH8oKk9dJ6jis5Kqk%2FjGxqmqpAx7tc%2B1qyiDhkm6g9MsW3XTUTMAvrWS3PO34Pk7DKqISR5XQVoexzeMjIIPpH6dFMs2UW5n6AFhtKu4HbJudv0JVF8USX0cXq8%2FLLqFB0ubyN9pm2G%2BNC%2FvkaJE13933Vo4%2Ff6U7NdOm2gCJHFMwtf2dF%2FEwBUB0iGfYG4EyZj8IvYfWdAGjO5LAbWTS81IY3Uj1Pbb7CoFwaYtqUBF1zmM817YhHlGchfwJZ%2B5y176BdUZPGgMiYSmv88DREWuDaICDcYIXrjJoEMjDj67j1C9m4bWN2l0srP%2BGuxrOMYcL4%2FdSjqLQTeEu0j6BuSL0o%2BvT3qsJ165CYgKVwvXsNb04JK3BD3wLOwDTdPKiBR%2BSdJbxT1gyrCtRbT9uD6lftuCUEN8e0nf1GnA6oMmXMekjnMMNLV13ASEUbSL4%2B9RITfxR%2BmrVgAm0AmvJq9nz0frYCINcs3%2Bf833NuNmmbK5ojDir4W%2BBjqkAc4dfHqEpSysiaAeeCOt24zC0Tk%2BpDHrCBB5IbVTCMLQ3b92YBd9kGfFfbY1xcJBQDDrEGh%2BnC%2BxzPjBzkf4HmJ38koh6pi%2B1xkRsTxgvbRi5vTTMzG905kt5mGIq6UHyzlnYrTZurEVMPHwIZn8gG3SK6VCDr%2ForhCI9WhJ7yS7STOkXBZF9ltbcHHrfZ8sptcNLoNtyZJpCCrz1wNdBxBQJaJV&X-Amz-Signature=9638093c92facdd790fa1592548a7c5ed76b68173ea1f5f32b6f244c944d20b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
