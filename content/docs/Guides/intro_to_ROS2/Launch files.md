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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7D5DNY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmDHb3w8eNhYdWLQYKXO44IER%2BTM6NI8vD9rNMHLtvEAiAT8YlATN6GhefoZDtOsRWZlODCTiBktIBL0vujzj25nyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM8wNpQbcbX9rLiM33KtwDsXVSi8qcMZhISeyqIjNWKHKlX3M11oc6ym3nuQXGJY87DCMCfKeHZQAST5ORoW%2BixBgfdaa4PIfDq63rBC8SVA5F%2FfkUsZD%2BfN%2FL9em39qkRZvvQ7ngvyz81xKiniH4DKnkUzpvd6pxSgGuYQMBpYE5IkFNbN7tPCEb0PPs3ASlknfdjVKW0wsEf26CQMmAVbM74ApY00bG8biByWLt52PByW4yE0a4tDpQJQ9v9DhT4U4mfeVkyryhjXuNuN3ebGLV9s%2Flmgs7Ib7DXDcpdUiX9Gkbsai3ZN%2FodwdpYntM2qmZ5HXTBMZB6ljv0XlmicCjnvoXcJNTIdoDF2tNdJ5g4aZfKyPwu5skkXMfA3Znve4U%2FD1Ou%2Fso6OcYCkBoMLwJ9QUM8IaKC5ZtxDKpqqkdVDrDoo5UHY%2BvIVOrOG%2Fd%2FD1UibA45ki7aVhM20MrlYH5uhQsLZwioTGmS5P2VIkHbmNqti7uCz%2BeNqdkut5GB7Z5McYf93gbbMQoDBB8EaeNOsxw61Y9zCPBkq%2FLFLyWeXUC8c%2FW%2BFeCFJutvKC1M47Sc68FSDzmIU%2BbZ1VfqfFh9FQD1YawLEb2nAEdiGCiznHLRfj4ZF0VRrbEQdB9VNEVM%2BPdtuyvWsMMw78%2F6wQY6pgFIChyX2rDnbS9PNtgSuVe9%2FYQ20uLNe8n9rSxvPmQwwEOLah7wwnI%2FXPNzOLKQxPMuzNNy7T0Tw0RRn5OUsbdtlei1PraWrweEEXSzhzwCt%2BKhDSugcuLz2xQrmhQfeCBy6x0wCGjl%2Bt%2BC9V1rb7cSisRAGr21mm6ISpihO%2BJ%2BYYb7ya%2FmJG3ysXQLmmmooPQn7TzN9phmtnBIfDoroXPpjx%2FXkj6Q&X-Amz-Signature=38bf26ce43c3bc552875567a75de6995ebdd9ad05e4f6959af0ef53e3336267a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7D5DNY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmDHb3w8eNhYdWLQYKXO44IER%2BTM6NI8vD9rNMHLtvEAiAT8YlATN6GhefoZDtOsRWZlODCTiBktIBL0vujzj25nyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM8wNpQbcbX9rLiM33KtwDsXVSi8qcMZhISeyqIjNWKHKlX3M11oc6ym3nuQXGJY87DCMCfKeHZQAST5ORoW%2BixBgfdaa4PIfDq63rBC8SVA5F%2FfkUsZD%2BfN%2FL9em39qkRZvvQ7ngvyz81xKiniH4DKnkUzpvd6pxSgGuYQMBpYE5IkFNbN7tPCEb0PPs3ASlknfdjVKW0wsEf26CQMmAVbM74ApY00bG8biByWLt52PByW4yE0a4tDpQJQ9v9DhT4U4mfeVkyryhjXuNuN3ebGLV9s%2Flmgs7Ib7DXDcpdUiX9Gkbsai3ZN%2FodwdpYntM2qmZ5HXTBMZB6ljv0XlmicCjnvoXcJNTIdoDF2tNdJ5g4aZfKyPwu5skkXMfA3Znve4U%2FD1Ou%2Fso6OcYCkBoMLwJ9QUM8IaKC5ZtxDKpqqkdVDrDoo5UHY%2BvIVOrOG%2Fd%2FD1UibA45ki7aVhM20MrlYH5uhQsLZwioTGmS5P2VIkHbmNqti7uCz%2BeNqdkut5GB7Z5McYf93gbbMQoDBB8EaeNOsxw61Y9zCPBkq%2FLFLyWeXUC8c%2FW%2BFeCFJutvKC1M47Sc68FSDzmIU%2BbZ1VfqfFh9FQD1YawLEb2nAEdiGCiznHLRfj4ZF0VRrbEQdB9VNEVM%2BPdtuyvWsMMw78%2F6wQY6pgFIChyX2rDnbS9PNtgSuVe9%2FYQ20uLNe8n9rSxvPmQwwEOLah7wwnI%2FXPNzOLKQxPMuzNNy7T0Tw0RRn5OUsbdtlei1PraWrweEEXSzhzwCt%2BKhDSugcuLz2xQrmhQfeCBy6x0wCGjl%2Bt%2BC9V1rb7cSisRAGr21mm6ISpihO%2BJ%2BYYb7ya%2FmJG3ysXQLmmmooPQn7TzN9phmtnBIfDoroXPpjx%2FXkj6Q&X-Amz-Signature=b99b43508bec648bdb877c9e84a90fb0c61f88ac3402785fa8451eaed19f67a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7D5DNY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAmDHb3w8eNhYdWLQYKXO44IER%2BTM6NI8vD9rNMHLtvEAiAT8YlATN6GhefoZDtOsRWZlODCTiBktIBL0vujzj25nyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM8wNpQbcbX9rLiM33KtwDsXVSi8qcMZhISeyqIjNWKHKlX3M11oc6ym3nuQXGJY87DCMCfKeHZQAST5ORoW%2BixBgfdaa4PIfDq63rBC8SVA5F%2FfkUsZD%2BfN%2FL9em39qkRZvvQ7ngvyz81xKiniH4DKnkUzpvd6pxSgGuYQMBpYE5IkFNbN7tPCEb0PPs3ASlknfdjVKW0wsEf26CQMmAVbM74ApY00bG8biByWLt52PByW4yE0a4tDpQJQ9v9DhT4U4mfeVkyryhjXuNuN3ebGLV9s%2Flmgs7Ib7DXDcpdUiX9Gkbsai3ZN%2FodwdpYntM2qmZ5HXTBMZB6ljv0XlmicCjnvoXcJNTIdoDF2tNdJ5g4aZfKyPwu5skkXMfA3Znve4U%2FD1Ou%2Fso6OcYCkBoMLwJ9QUM8IaKC5ZtxDKpqqkdVDrDoo5UHY%2BvIVOrOG%2Fd%2FD1UibA45ki7aVhM20MrlYH5uhQsLZwioTGmS5P2VIkHbmNqti7uCz%2BeNqdkut5GB7Z5McYf93gbbMQoDBB8EaeNOsxw61Y9zCPBkq%2FLFLyWeXUC8c%2FW%2BFeCFJutvKC1M47Sc68FSDzmIU%2BbZ1VfqfFh9FQD1YawLEb2nAEdiGCiznHLRfj4ZF0VRrbEQdB9VNEVM%2BPdtuyvWsMMw78%2F6wQY6pgFIChyX2rDnbS9PNtgSuVe9%2FYQ20uLNe8n9rSxvPmQwwEOLah7wwnI%2FXPNzOLKQxPMuzNNy7T0Tw0RRn5OUsbdtlei1PraWrweEEXSzhzwCt%2BKhDSugcuLz2xQrmhQfeCBy6x0wCGjl%2Bt%2BC9V1rb7cSisRAGr21mm6ISpihO%2BJ%2BYYb7ya%2FmJG3ysXQLmmmooPQn7TzN9phmtnBIfDoroXPpjx%2FXkj6Q&X-Amz-Signature=87248aa953feaa695dfef1f886c3b0928f3493d841e82f9201490e6754acc1be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
