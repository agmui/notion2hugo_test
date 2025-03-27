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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AA4J6TP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fjp8O4%2FWuC0KZlA9MtQQjxXg2TSug8fY8kkv8y%2FbHWwIhAMgwXgt8BPYT7XrQRTSZp%2BPykL3%2Butw%2F0xPuDHV7NNxAKv8DCE0QABoMNjM3NDIzMTgzODA1Igwn6y2N%2Bkhw61b0amMq3AODBZwv9q6nUfHPWgxdE6yOxIrEKsVnYB9FO7bvpbiV4ADw9ym6zbJEZ%2BnmdgP8YH0k6BKK75I4LVK%2FgYui3%2BFR29QOd2eNf4oE0eR5QMS56iZyAT3D%2B5HahmUihltzZxNDVUdgbQMtgqxsVwZXdnIe%2BMMu7S8pkMyFshChyjj9hnKPDqAgG5uIK9iHCxMXV61FZARNqn1E7hoU%2BOwIXQTgTZAL6HoUe%2FYoQbfamJ8iFZtyZvx4kzD6qw4dDlLbiGHzjohbkTKXPoERoCNHhemCK2AcWJUyzzt2%2FSGIM84ZdhEnpF5ef9TBGHprwlGM5RQu%2BlmAZUpwQ6kmZvTgnNu%2BOgyUp9HyUNK%2FJTqELjZDV5krXyV0XbcVoa8z%2BqBhRmTXlnkm0XTxgQXoddX3Js1GtnMvvWo6t4S03mlgSrsjnt7U6qN4xAU73fA2bW9oVrmllidM5XKTpYa7sc2i8MJ0pUG745Ew5uGEWJrN6tqDiOtaid%2FyJ7VxrQkkacrV4AmeR75xTrTvtlC8paITHzDOhhxjL52hfekeIPBbzQvgwY5qXzqiCVHyKvXvSu9%2BaFf6y%2BZGwvEIW0EcGxw4dZkbTO2tP54HmzS16bSPKkD3NINZIs3yDbtoLAVysjCP3Za%2FBjqkAWBs4Du%2BQOJhg7yB87Do5frxB9Ru9%2BXC6sKzfZ4oOoJeBWiJhtJrBFTtRv2BPjYMQR0T9cFrNmgdi%2BKhy8Z0p%2B00SVXMwP2zpNi5kymnGb0rbbEYBB6%2FrfYxx83zD1V8kqsOMPZKIF4O2jgTJl8eof%2B09QKBDGN5RhfS2buHkFyT7T%2FcRyEoAf6tjgFo1EHcxu0GBL7zdVzG39nyqumnV%2Fg2voqB&X-Amz-Signature=a4ee9107537fca958ed50b73082442a2de6bd5b2ce73e78205e249811fb3392d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AA4J6TP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fjp8O4%2FWuC0KZlA9MtQQjxXg2TSug8fY8kkv8y%2FbHWwIhAMgwXgt8BPYT7XrQRTSZp%2BPykL3%2Butw%2F0xPuDHV7NNxAKv8DCE0QABoMNjM3NDIzMTgzODA1Igwn6y2N%2Bkhw61b0amMq3AODBZwv9q6nUfHPWgxdE6yOxIrEKsVnYB9FO7bvpbiV4ADw9ym6zbJEZ%2BnmdgP8YH0k6BKK75I4LVK%2FgYui3%2BFR29QOd2eNf4oE0eR5QMS56iZyAT3D%2B5HahmUihltzZxNDVUdgbQMtgqxsVwZXdnIe%2BMMu7S8pkMyFshChyjj9hnKPDqAgG5uIK9iHCxMXV61FZARNqn1E7hoU%2BOwIXQTgTZAL6HoUe%2FYoQbfamJ8iFZtyZvx4kzD6qw4dDlLbiGHzjohbkTKXPoERoCNHhemCK2AcWJUyzzt2%2FSGIM84ZdhEnpF5ef9TBGHprwlGM5RQu%2BlmAZUpwQ6kmZvTgnNu%2BOgyUp9HyUNK%2FJTqELjZDV5krXyV0XbcVoa8z%2BqBhRmTXlnkm0XTxgQXoddX3Js1GtnMvvWo6t4S03mlgSrsjnt7U6qN4xAU73fA2bW9oVrmllidM5XKTpYa7sc2i8MJ0pUG745Ew5uGEWJrN6tqDiOtaid%2FyJ7VxrQkkacrV4AmeR75xTrTvtlC8paITHzDOhhxjL52hfekeIPBbzQvgwY5qXzqiCVHyKvXvSu9%2BaFf6y%2BZGwvEIW0EcGxw4dZkbTO2tP54HmzS16bSPKkD3NINZIs3yDbtoLAVysjCP3Za%2FBjqkAWBs4Du%2BQOJhg7yB87Do5frxB9Ru9%2BXC6sKzfZ4oOoJeBWiJhtJrBFTtRv2BPjYMQR0T9cFrNmgdi%2BKhy8Z0p%2B00SVXMwP2zpNi5kymnGb0rbbEYBB6%2FrfYxx83zD1V8kqsOMPZKIF4O2jgTJl8eof%2B09QKBDGN5RhfS2buHkFyT7T%2FcRyEoAf6tjgFo1EHcxu0GBL7zdVzG39nyqumnV%2Fg2voqB&X-Amz-Signature=5854a7f207bd75042aba019729597e15e43c0ff6877d232aa7f16dfca7285402&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AA4J6TP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fjp8O4%2FWuC0KZlA9MtQQjxXg2TSug8fY8kkv8y%2FbHWwIhAMgwXgt8BPYT7XrQRTSZp%2BPykL3%2Butw%2F0xPuDHV7NNxAKv8DCE0QABoMNjM3NDIzMTgzODA1Igwn6y2N%2Bkhw61b0amMq3AODBZwv9q6nUfHPWgxdE6yOxIrEKsVnYB9FO7bvpbiV4ADw9ym6zbJEZ%2BnmdgP8YH0k6BKK75I4LVK%2FgYui3%2BFR29QOd2eNf4oE0eR5QMS56iZyAT3D%2B5HahmUihltzZxNDVUdgbQMtgqxsVwZXdnIe%2BMMu7S8pkMyFshChyjj9hnKPDqAgG5uIK9iHCxMXV61FZARNqn1E7hoU%2BOwIXQTgTZAL6HoUe%2FYoQbfamJ8iFZtyZvx4kzD6qw4dDlLbiGHzjohbkTKXPoERoCNHhemCK2AcWJUyzzt2%2FSGIM84ZdhEnpF5ef9TBGHprwlGM5RQu%2BlmAZUpwQ6kmZvTgnNu%2BOgyUp9HyUNK%2FJTqELjZDV5krXyV0XbcVoa8z%2BqBhRmTXlnkm0XTxgQXoddX3Js1GtnMvvWo6t4S03mlgSrsjnt7U6qN4xAU73fA2bW9oVrmllidM5XKTpYa7sc2i8MJ0pUG745Ew5uGEWJrN6tqDiOtaid%2FyJ7VxrQkkacrV4AmeR75xTrTvtlC8paITHzDOhhxjL52hfekeIPBbzQvgwY5qXzqiCVHyKvXvSu9%2BaFf6y%2BZGwvEIW0EcGxw4dZkbTO2tP54HmzS16bSPKkD3NINZIs3yDbtoLAVysjCP3Za%2FBjqkAWBs4Du%2BQOJhg7yB87Do5frxB9Ru9%2BXC6sKzfZ4oOoJeBWiJhtJrBFTtRv2BPjYMQR0T9cFrNmgdi%2BKhy8Z0p%2B00SVXMwP2zpNi5kymnGb0rbbEYBB6%2FrfYxx83zD1V8kqsOMPZKIF4O2jgTJl8eof%2B09QKBDGN5RhfS2buHkFyT7T%2FcRyEoAf6tjgFo1EHcxu0GBL7zdVzG39nyqumnV%2Fg2voqB&X-Amz-Signature=c37bebe566fc477e4c61dcdb6869279eca4ac295a4a6bedd677f85494d9d93bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
