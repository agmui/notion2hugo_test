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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5WJR5IL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH9Vn%2B6ADPQv094Ls2sY0APwISL3RyB7t2zZGQTiidfTAiAaIzwUHkfwUbw3akAHBbTLgUVVaW1FCb8xTByWGVoy%2FCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb9a%2BETsts9X5ELT4KtwDwwvURj67%2FtuJPgyXNAWSkGQxsWq6lycrya7Tx9Bx5k0H9yClaLK3FF06U5eMt2OMM99gMGhLHiiYDxi8105hge7YoNtY4qOm96t6Tkj7GOQ%2FrWW%2F%2Bb5B2zPob7e7GzKAglTsj9Z2G4PXvEhfGN1FUCacUPNlkpFyQNooobu3kZZgfgiyb88jIl4mwkX2OYaGL0%2By40qFpak53SzkC%2BIqWTQfqt84WyQeoCC6QXdO7e7hYQAmCg41xinGCvLa0rkPnJZbzgICfeBXul1kYiVoQnR4ir%2FHnmOslrvJTers7c7cYhKkxe%2BfYUurc5cGwZ1g3fPs%2B2iR34NK4dK4zZ6J9fZdGx5VVBIxhPc6YoyoEz%2BrRVLlMzCZpbMV9BaekQ%2BI2RuZ8GrKvT04PqbpsGlNjSYoBTU3SnDdMPPvnIKrRMMEFoXWxgKv0ti3%2F2u5hzzlhBhUA9q8yM0BMucwaKG4w7OasABliyHtCMNkmkwEy%2BVB27kAIlN7Bt%2FD%2FeRAeZlA8CybAnxHT6Su9Ntvh5%2Bbpxf3a0auuAVeuZ89W%2FgsSl6UFhaxyBy59MQOXrpvTsVtsP8mVIcNEm3nnoEfTUCwBu6tCPwkoCxQ%2B1z7LiITmfblG%2BfZ6NbawtT8AIow7svfwgY6pgEQLwkx5XE6kX49valuZ8xb5a2f9SnB4ymypPZHNQc%2FJuU6%2BYn4H7ujACAdsOgoPPe9J9P64gwcHc4sgQVZvSL93KFhcyUGSFDl%2BL6Dnla79ovNsRk5LZ%2FlyUz5wAcOgAQllx%2BvY1iP2TStex321jhJIJz1p1Z%2B5bQ8bvws0gnoMsJm7PYecB1HRmxRcRejiIS0FRJE2DeX%2Bz%2BnwOZIjFpV8zDZMPSa&X-Amz-Signature=82964ec2a0806c378ab9aedec9c6deddd949a65f74c72639353327ae57c83afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5WJR5IL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH9Vn%2B6ADPQv094Ls2sY0APwISL3RyB7t2zZGQTiidfTAiAaIzwUHkfwUbw3akAHBbTLgUVVaW1FCb8xTByWGVoy%2FCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb9a%2BETsts9X5ELT4KtwDwwvURj67%2FtuJPgyXNAWSkGQxsWq6lycrya7Tx9Bx5k0H9yClaLK3FF06U5eMt2OMM99gMGhLHiiYDxi8105hge7YoNtY4qOm96t6Tkj7GOQ%2FrWW%2F%2Bb5B2zPob7e7GzKAglTsj9Z2G4PXvEhfGN1FUCacUPNlkpFyQNooobu3kZZgfgiyb88jIl4mwkX2OYaGL0%2By40qFpak53SzkC%2BIqWTQfqt84WyQeoCC6QXdO7e7hYQAmCg41xinGCvLa0rkPnJZbzgICfeBXul1kYiVoQnR4ir%2FHnmOslrvJTers7c7cYhKkxe%2BfYUurc5cGwZ1g3fPs%2B2iR34NK4dK4zZ6J9fZdGx5VVBIxhPc6YoyoEz%2BrRVLlMzCZpbMV9BaekQ%2BI2RuZ8GrKvT04PqbpsGlNjSYoBTU3SnDdMPPvnIKrRMMEFoXWxgKv0ti3%2F2u5hzzlhBhUA9q8yM0BMucwaKG4w7OasABliyHtCMNkmkwEy%2BVB27kAIlN7Bt%2FD%2FeRAeZlA8CybAnxHT6Su9Ntvh5%2Bbpxf3a0auuAVeuZ89W%2FgsSl6UFhaxyBy59MQOXrpvTsVtsP8mVIcNEm3nnoEfTUCwBu6tCPwkoCxQ%2B1z7LiITmfblG%2BfZ6NbawtT8AIow7svfwgY6pgEQLwkx5XE6kX49valuZ8xb5a2f9SnB4ymypPZHNQc%2FJuU6%2BYn4H7ujACAdsOgoPPe9J9P64gwcHc4sgQVZvSL93KFhcyUGSFDl%2BL6Dnla79ovNsRk5LZ%2FlyUz5wAcOgAQllx%2BvY1iP2TStex321jhJIJz1p1Z%2B5bQ8bvws0gnoMsJm7PYecB1HRmxRcRejiIS0FRJE2DeX%2Bz%2BnwOZIjFpV8zDZMPSa&X-Amz-Signature=ca91d781a1629546cc1475c024410807cf4b91d1e1cf8a6b71b66a81842465f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5WJR5IL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH9Vn%2B6ADPQv094Ls2sY0APwISL3RyB7t2zZGQTiidfTAiAaIzwUHkfwUbw3akAHBbTLgUVVaW1FCb8xTByWGVoy%2FCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb9a%2BETsts9X5ELT4KtwDwwvURj67%2FtuJPgyXNAWSkGQxsWq6lycrya7Tx9Bx5k0H9yClaLK3FF06U5eMt2OMM99gMGhLHiiYDxi8105hge7YoNtY4qOm96t6Tkj7GOQ%2FrWW%2F%2Bb5B2zPob7e7GzKAglTsj9Z2G4PXvEhfGN1FUCacUPNlkpFyQNooobu3kZZgfgiyb88jIl4mwkX2OYaGL0%2By40qFpak53SzkC%2BIqWTQfqt84WyQeoCC6QXdO7e7hYQAmCg41xinGCvLa0rkPnJZbzgICfeBXul1kYiVoQnR4ir%2FHnmOslrvJTers7c7cYhKkxe%2BfYUurc5cGwZ1g3fPs%2B2iR34NK4dK4zZ6J9fZdGx5VVBIxhPc6YoyoEz%2BrRVLlMzCZpbMV9BaekQ%2BI2RuZ8GrKvT04PqbpsGlNjSYoBTU3SnDdMPPvnIKrRMMEFoXWxgKv0ti3%2F2u5hzzlhBhUA9q8yM0BMucwaKG4w7OasABliyHtCMNkmkwEy%2BVB27kAIlN7Bt%2FD%2FeRAeZlA8CybAnxHT6Su9Ntvh5%2Bbpxf3a0auuAVeuZ89W%2FgsSl6UFhaxyBy59MQOXrpvTsVtsP8mVIcNEm3nnoEfTUCwBu6tCPwkoCxQ%2B1z7LiITmfblG%2BfZ6NbawtT8AIow7svfwgY6pgEQLwkx5XE6kX49valuZ8xb5a2f9SnB4ymypPZHNQc%2FJuU6%2BYn4H7ujACAdsOgoPPe9J9P64gwcHc4sgQVZvSL93KFhcyUGSFDl%2BL6Dnla79ovNsRk5LZ%2FlyUz5wAcOgAQllx%2BvY1iP2TStex321jhJIJz1p1Z%2B5bQ8bvws0gnoMsJm7PYecB1HRmxRcRejiIS0FRJE2DeX%2Bz%2BnwOZIjFpV8zDZMPSa&X-Amz-Signature=e1d918da0355dd7fde35aae24e4ab733736b9b0e33db340b531410a0d050f903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
