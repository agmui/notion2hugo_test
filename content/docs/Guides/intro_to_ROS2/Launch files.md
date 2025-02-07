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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMKF25H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDTS1o0UN3LvRnBneVg3xDlqzD6urvDZqrUrTR7ycUlXgIhAPeh57TilXLYUK%2BJlJn70OMcAUQssHTDWxJP5aVq7KdFKv8DCH8QABoMNjM3NDIzMTgzODA1IgxfDhpMpmkOBs0Ai2Yq3APgFnRZCUAdarZtBmy%2Fh0E1zSXCOVJBP8yG3xA0iHBrgpMzKxQLQaHahLfIHlXKEPkPZVAllCk3TaCy7sRBvaaQKV3EcC0G9xSQc4YaICC00GXPXcvVl9Vooc%2B7JS8uv5mp%2BWBolhyk%2BJYgjV%2FQXmzS7uEdph1MWFTGYKFfSDHK2M7sGAyaiZa7iT4FIX0HJGB104GKgKHRFGUQPXfj4HtwwTB%2ByYHsFMOw0DjNlqhACgfZsIvL73aAF3oMPaQZUMhjD05ltzA%2F8bmGgFuNosSldnnRQw0vOEOHWGxleo7EC8Z7RQhvmO2kh4kYP6Q%2B3N%2Bv8hm5Rx%2Fci7nz9TCMI3%2FWemwzr%2BQ7%2B3aanCUhL6%2FAGcJ7AqGUvZl0Czzvb8Ry3HgBvqe7a%2F4cwsYK5iykPmT1IcqseVWdpSWmGzXCZ2bSK2EUPXUTzt8zqdsGh7yn7owzMrFi4cZY7XeXdtiO9R24lKy7bdgjAqa6VtCkVTgp5MGOmJXyshUzCIFmQS0FKtNb5tCTXrWlGb2FTQGbVa35mqeKUWyLESMSa6G%2BiRRGIkO74a2s1W2PaHDz%2B2ybQxQfwCuN0%2BiASnAOES%2F68e%2FvewEbvnwSaUTwQHfHjf6THuzRuueQ77C7AUE1rzDB%2F5m9BjqkAVyFezFUOlXn2DVbTj%2Bn7lw73xJeRxwD%2FQPiF2%2BC9Fyy2XkibZgqxaV1EXHcQA%2BAAzx6YVZq8BJW0CCj%2FKaWA2u5is9Y8HZpdEuCmNQMOFzQ1GGf3CBgmA6kxk%2BqrKFzQGBlAyhdcyzbqaESlDU7lGRzfSM120ReHHCMUUEcps6x2z2o%2BJnKRUW3twe318dNKSB98PtoHquy8lMyFw7ur2GKy3bg&X-Amz-Signature=f01068a4a5ed65ad5f723c6585ee4c95099d8c16eb253ea0b9777bd8ef1fa06d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMKF25H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDTS1o0UN3LvRnBneVg3xDlqzD6urvDZqrUrTR7ycUlXgIhAPeh57TilXLYUK%2BJlJn70OMcAUQssHTDWxJP5aVq7KdFKv8DCH8QABoMNjM3NDIzMTgzODA1IgxfDhpMpmkOBs0Ai2Yq3APgFnRZCUAdarZtBmy%2Fh0E1zSXCOVJBP8yG3xA0iHBrgpMzKxQLQaHahLfIHlXKEPkPZVAllCk3TaCy7sRBvaaQKV3EcC0G9xSQc4YaICC00GXPXcvVl9Vooc%2B7JS8uv5mp%2BWBolhyk%2BJYgjV%2FQXmzS7uEdph1MWFTGYKFfSDHK2M7sGAyaiZa7iT4FIX0HJGB104GKgKHRFGUQPXfj4HtwwTB%2ByYHsFMOw0DjNlqhACgfZsIvL73aAF3oMPaQZUMhjD05ltzA%2F8bmGgFuNosSldnnRQw0vOEOHWGxleo7EC8Z7RQhvmO2kh4kYP6Q%2B3N%2Bv8hm5Rx%2Fci7nz9TCMI3%2FWemwzr%2BQ7%2B3aanCUhL6%2FAGcJ7AqGUvZl0Czzvb8Ry3HgBvqe7a%2F4cwsYK5iykPmT1IcqseVWdpSWmGzXCZ2bSK2EUPXUTzt8zqdsGh7yn7owzMrFi4cZY7XeXdtiO9R24lKy7bdgjAqa6VtCkVTgp5MGOmJXyshUzCIFmQS0FKtNb5tCTXrWlGb2FTQGbVa35mqeKUWyLESMSa6G%2BiRRGIkO74a2s1W2PaHDz%2B2ybQxQfwCuN0%2BiASnAOES%2F68e%2FvewEbvnwSaUTwQHfHjf6THuzRuueQ77C7AUE1rzDB%2F5m9BjqkAVyFezFUOlXn2DVbTj%2Bn7lw73xJeRxwD%2FQPiF2%2BC9Fyy2XkibZgqxaV1EXHcQA%2BAAzx6YVZq8BJW0CCj%2FKaWA2u5is9Y8HZpdEuCmNQMOFzQ1GGf3CBgmA6kxk%2BqrKFzQGBlAyhdcyzbqaESlDU7lGRzfSM120ReHHCMUUEcps6x2z2o%2BJnKRUW3twe318dNKSB98PtoHquy8lMyFw7ur2GKy3bg&X-Amz-Signature=d98bfd471e6317767fecc8f913f890b71fd08f19a6efa1eb3b418064be866bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMKF25H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDTS1o0UN3LvRnBneVg3xDlqzD6urvDZqrUrTR7ycUlXgIhAPeh57TilXLYUK%2BJlJn70OMcAUQssHTDWxJP5aVq7KdFKv8DCH8QABoMNjM3NDIzMTgzODA1IgxfDhpMpmkOBs0Ai2Yq3APgFnRZCUAdarZtBmy%2Fh0E1zSXCOVJBP8yG3xA0iHBrgpMzKxQLQaHahLfIHlXKEPkPZVAllCk3TaCy7sRBvaaQKV3EcC0G9xSQc4YaICC00GXPXcvVl9Vooc%2B7JS8uv5mp%2BWBolhyk%2BJYgjV%2FQXmzS7uEdph1MWFTGYKFfSDHK2M7sGAyaiZa7iT4FIX0HJGB104GKgKHRFGUQPXfj4HtwwTB%2ByYHsFMOw0DjNlqhACgfZsIvL73aAF3oMPaQZUMhjD05ltzA%2F8bmGgFuNosSldnnRQw0vOEOHWGxleo7EC8Z7RQhvmO2kh4kYP6Q%2B3N%2Bv8hm5Rx%2Fci7nz9TCMI3%2FWemwzr%2BQ7%2B3aanCUhL6%2FAGcJ7AqGUvZl0Czzvb8Ry3HgBvqe7a%2F4cwsYK5iykPmT1IcqseVWdpSWmGzXCZ2bSK2EUPXUTzt8zqdsGh7yn7owzMrFi4cZY7XeXdtiO9R24lKy7bdgjAqa6VtCkVTgp5MGOmJXyshUzCIFmQS0FKtNb5tCTXrWlGb2FTQGbVa35mqeKUWyLESMSa6G%2BiRRGIkO74a2s1W2PaHDz%2B2ybQxQfwCuN0%2BiASnAOES%2F68e%2FvewEbvnwSaUTwQHfHjf6THuzRuueQ77C7AUE1rzDB%2F5m9BjqkAVyFezFUOlXn2DVbTj%2Bn7lw73xJeRxwD%2FQPiF2%2BC9Fyy2XkibZgqxaV1EXHcQA%2BAAzx6YVZq8BJW0CCj%2FKaWA2u5is9Y8HZpdEuCmNQMOFzQ1GGf3CBgmA6kxk%2BqrKFzQGBlAyhdcyzbqaESlDU7lGRzfSM120ReHHCMUUEcps6x2z2o%2BJnKRUW3twe318dNKSB98PtoHquy8lMyFw7ur2GKy3bg&X-Amz-Signature=ab4a948822966e1e3dbe6f0a6fe27796e6d9c1d06ca8e7461a17430e9eb9efbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
