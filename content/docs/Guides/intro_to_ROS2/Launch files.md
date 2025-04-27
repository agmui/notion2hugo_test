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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNRNJ74W%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoG6NUBnms3P6oyu203NaO8QnAy9jd3VAnBSd%2BQwN0XAiEA9U88f4wR%2FRAiK9VJXRlh%2FOl6Frf%2BtyIQ4ZvpNHlz3Dgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDH%2FXjyrllKqaToeF%2FircA7wC0wVoYO1688M0xpm5wyJKL2Jd9UPlY1HKgoD5qTyUNm6DHhtgX%2FXWhehjzo3YAJkH0VcizptWGX6W7Bv3393NWk8s8xSNoWXLiTTdAdD4kvaPAdBvrhVRiWlMwjJ9KdRIetMDCCJv9UPwa0NtEmokVbOj3mAdr4BBfnzDrqYRVRHH0%2BLamZwclhLoXqfj66oMe9bddm%2F%2FiuddmBodxVJhmW6nhIP%2F9R2SPm%2FZNigPWLHwQefr8ZCA2HCjyRMo3RAeOGrhxHW3pEeth7VNxaSL6zkNbr0SmM3crdlCD60lULCEH7kqhf02tUPZrJwenT1hmBi07j8ZLQ0k%2FzqxuxXqQRly2A2wxP%2Bj4VciFlDZBZDE2m4pZRWgqKKLLpnyhmrRkaSXSprcOUMOcqmn2vZN61uPfnt9AjVPN51ftZGxXiKNNxvkdpW6oh6uD2hM7PjuhJOOahQjMVO%2FBhPvKE4SlIqTM5RXYtjfsI%2BEGEiFdMp%2B3a5eNFsyhxkwn%2Ba5mRUd2nkMk4w40Hm1HlZb6OG%2FqReZJyfs7ZNQ7VZUR%2FpkXG4P202odareclih7KGBD%2F6v81Yf24XUx%2BDIzBTi1gwZRohPMNFNYB9a3Co%2BQDR9zG4tcpx95lMhxmcbMOGKusAGOqUBA8jzKbVt%2B%2FOqAMymap0qK3s1ZDD6Riik7L3AhUdHNftbLI4bQwM6mIBO%2FN%2BGFc5BH8DLhDTC5DoOK7h8jvgZcD7sJ9R3124FoDoHl8otbGApKCTyjVrSYEj6LHDVIW%2BfyuBk1MAVTefjmmpQpDoPfNwFMv3kn5wWm8ZxrHz6bwgMbhBHWPZ7vIoM%2FagJVv10x1%2FsxehciB0RWIYwAuxqbZ8ivOfA&X-Amz-Signature=1ab7e8dfbab480d44f6cbddd14eb2df63d589eeef3c585eeffdc25b657a1dc11&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNRNJ74W%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoG6NUBnms3P6oyu203NaO8QnAy9jd3VAnBSd%2BQwN0XAiEA9U88f4wR%2FRAiK9VJXRlh%2FOl6Frf%2BtyIQ4ZvpNHlz3Dgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDH%2FXjyrllKqaToeF%2FircA7wC0wVoYO1688M0xpm5wyJKL2Jd9UPlY1HKgoD5qTyUNm6DHhtgX%2FXWhehjzo3YAJkH0VcizptWGX6W7Bv3393NWk8s8xSNoWXLiTTdAdD4kvaPAdBvrhVRiWlMwjJ9KdRIetMDCCJv9UPwa0NtEmokVbOj3mAdr4BBfnzDrqYRVRHH0%2BLamZwclhLoXqfj66oMe9bddm%2F%2FiuddmBodxVJhmW6nhIP%2F9R2SPm%2FZNigPWLHwQefr8ZCA2HCjyRMo3RAeOGrhxHW3pEeth7VNxaSL6zkNbr0SmM3crdlCD60lULCEH7kqhf02tUPZrJwenT1hmBi07j8ZLQ0k%2FzqxuxXqQRly2A2wxP%2Bj4VciFlDZBZDE2m4pZRWgqKKLLpnyhmrRkaSXSprcOUMOcqmn2vZN61uPfnt9AjVPN51ftZGxXiKNNxvkdpW6oh6uD2hM7PjuhJOOahQjMVO%2FBhPvKE4SlIqTM5RXYtjfsI%2BEGEiFdMp%2B3a5eNFsyhxkwn%2Ba5mRUd2nkMk4w40Hm1HlZb6OG%2FqReZJyfs7ZNQ7VZUR%2FpkXG4P202odareclih7KGBD%2F6v81Yf24XUx%2BDIzBTi1gwZRohPMNFNYB9a3Co%2BQDR9zG4tcpx95lMhxmcbMOGKusAGOqUBA8jzKbVt%2B%2FOqAMymap0qK3s1ZDD6Riik7L3AhUdHNftbLI4bQwM6mIBO%2FN%2BGFc5BH8DLhDTC5DoOK7h8jvgZcD7sJ9R3124FoDoHl8otbGApKCTyjVrSYEj6LHDVIW%2BfyuBk1MAVTefjmmpQpDoPfNwFMv3kn5wWm8ZxrHz6bwgMbhBHWPZ7vIoM%2FagJVv10x1%2FsxehciB0RWIYwAuxqbZ8ivOfA&X-Amz-Signature=a31806ce7ac029230d81e09a187f93312826dd301d1ab3e27d231d04c84b597c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNRNJ74W%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoG6NUBnms3P6oyu203NaO8QnAy9jd3VAnBSd%2BQwN0XAiEA9U88f4wR%2FRAiK9VJXRlh%2FOl6Frf%2BtyIQ4ZvpNHlz3Dgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDH%2FXjyrllKqaToeF%2FircA7wC0wVoYO1688M0xpm5wyJKL2Jd9UPlY1HKgoD5qTyUNm6DHhtgX%2FXWhehjzo3YAJkH0VcizptWGX6W7Bv3393NWk8s8xSNoWXLiTTdAdD4kvaPAdBvrhVRiWlMwjJ9KdRIetMDCCJv9UPwa0NtEmokVbOj3mAdr4BBfnzDrqYRVRHH0%2BLamZwclhLoXqfj66oMe9bddm%2F%2FiuddmBodxVJhmW6nhIP%2F9R2SPm%2FZNigPWLHwQefr8ZCA2HCjyRMo3RAeOGrhxHW3pEeth7VNxaSL6zkNbr0SmM3crdlCD60lULCEH7kqhf02tUPZrJwenT1hmBi07j8ZLQ0k%2FzqxuxXqQRly2A2wxP%2Bj4VciFlDZBZDE2m4pZRWgqKKLLpnyhmrRkaSXSprcOUMOcqmn2vZN61uPfnt9AjVPN51ftZGxXiKNNxvkdpW6oh6uD2hM7PjuhJOOahQjMVO%2FBhPvKE4SlIqTM5RXYtjfsI%2BEGEiFdMp%2B3a5eNFsyhxkwn%2Ba5mRUd2nkMk4w40Hm1HlZb6OG%2FqReZJyfs7ZNQ7VZUR%2FpkXG4P202odareclih7KGBD%2F6v81Yf24XUx%2BDIzBTi1gwZRohPMNFNYB9a3Co%2BQDR9zG4tcpx95lMhxmcbMOGKusAGOqUBA8jzKbVt%2B%2FOqAMymap0qK3s1ZDD6Riik7L3AhUdHNftbLI4bQwM6mIBO%2FN%2BGFc5BH8DLhDTC5DoOK7h8jvgZcD7sJ9R3124FoDoHl8otbGApKCTyjVrSYEj6LHDVIW%2BfyuBk1MAVTefjmmpQpDoPfNwFMv3kn5wWm8ZxrHz6bwgMbhBHWPZ7vIoM%2FagJVv10x1%2FsxehciB0RWIYwAuxqbZ8ivOfA&X-Amz-Signature=9163f9b21e4af8c36a7a8d7e9f73c6c78f581c6cac9e7c528267ad1d7372bb23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
