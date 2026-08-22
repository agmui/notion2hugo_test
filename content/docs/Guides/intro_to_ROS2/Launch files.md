---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZZYTKG%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCdKzlFiuVnoggjy%2FXoodOSJ%2FxDVDZxgUySvj9SxtkjQIgEJ7sOHqovKxFmBGGL1%2FVoFQgaSsckX9WQq3YtEjxMtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMebtAXbcGFMYacvmircA3uNAd3CfhQ8tZu4FKHjBVXr8UNgKZqpZgBKCcZrxu8oFa8bfjlwXWqpP89LSmotCgn39n6SxPBCLrwrcjSMSUGNEraqKlft3eWw8Nf1Pd60%2BQKTirxEdW6iDn3FhD2M%2B%2FGUR1xEfiaEKFY9TPvoliyLRnhAGHQ5C9poidEoJCFAIudTHwpxkXkWqgvbDETVp19YV9X%2FMNbl8mlk5wP25pNON5JWQnZ%2BDmdTfglk6WVwjvXiJ5TcRJ60oUGZp58muQ1bs8T9HaKlfsVTtVyVQz%2B2h669KUlXhT7iNABn6dWuo3dvYBpIn%2B4zWuiCTv1Lk95jwV7PakUnRhq%2FC63wC7qkTgLTvCtaxOY69qj2MbkUayr7QHbKugY3vwM309jLfBwNPEySmWDIKRxlILkk3uzoGPuSCrjS61BDxNY7B7hw1m0NM6nJxWp3HNih5t3QIecKG0W8LPxxNF9PW7WS1yEewLyf7se40P7EhUU8vq2UGtYf%2B32V%2F%2B5eUi%2BkYamjyj%2F3lIl%2BAr7T5P0QZLqMLTYKTXR1IsN36dyPvQVVOUOxLwecAGXY3BPX4wcKa657AupZyT2NAPJvsnUzBy196ECH5IAOKIrA7uPIqvVx8UdLd7K4jeF9g1pdwM5cMI%2FCo9QGOqUBR0paNuena0W1EcwTshgxphT999D9e3s%2BDRfj%2BmmuT7tug53eDz9hG4%2FV5%2BMPwVzHZm8nnbNJjG2ucI8zT%2FE6IUXjJ0s6erDI6XAhdW59Z1yFakd8okNOdAodGBY1nAQo9a9QBFXqBExbTfBuxlaR7803nIRtVyqrj1tAlYy2UBIML9tD3BytcG7NwnnlnxT6HDAD%2FpmuhI6AuuMAej9CeIIIVgcF&X-Amz-Signature=5863fa9082991f61f1a82b1bc56562d553b379cff0527bc8145085f79b1a9c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZZYTKG%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCdKzlFiuVnoggjy%2FXoodOSJ%2FxDVDZxgUySvj9SxtkjQIgEJ7sOHqovKxFmBGGL1%2FVoFQgaSsckX9WQq3YtEjxMtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMebtAXbcGFMYacvmircA3uNAd3CfhQ8tZu4FKHjBVXr8UNgKZqpZgBKCcZrxu8oFa8bfjlwXWqpP89LSmotCgn39n6SxPBCLrwrcjSMSUGNEraqKlft3eWw8Nf1Pd60%2BQKTirxEdW6iDn3FhD2M%2B%2FGUR1xEfiaEKFY9TPvoliyLRnhAGHQ5C9poidEoJCFAIudTHwpxkXkWqgvbDETVp19YV9X%2FMNbl8mlk5wP25pNON5JWQnZ%2BDmdTfglk6WVwjvXiJ5TcRJ60oUGZp58muQ1bs8T9HaKlfsVTtVyVQz%2B2h669KUlXhT7iNABn6dWuo3dvYBpIn%2B4zWuiCTv1Lk95jwV7PakUnRhq%2FC63wC7qkTgLTvCtaxOY69qj2MbkUayr7QHbKugY3vwM309jLfBwNPEySmWDIKRxlILkk3uzoGPuSCrjS61BDxNY7B7hw1m0NM6nJxWp3HNih5t3QIecKG0W8LPxxNF9PW7WS1yEewLyf7se40P7EhUU8vq2UGtYf%2B32V%2F%2B5eUi%2BkYamjyj%2F3lIl%2BAr7T5P0QZLqMLTYKTXR1IsN36dyPvQVVOUOxLwecAGXY3BPX4wcKa657AupZyT2NAPJvsnUzBy196ECH5IAOKIrA7uPIqvVx8UdLd7K4jeF9g1pdwM5cMI%2FCo9QGOqUBR0paNuena0W1EcwTshgxphT999D9e3s%2BDRfj%2BmmuT7tug53eDz9hG4%2FV5%2BMPwVzHZm8nnbNJjG2ucI8zT%2FE6IUXjJ0s6erDI6XAhdW59Z1yFakd8okNOdAodGBY1nAQo9a9QBFXqBExbTfBuxlaR7803nIRtVyqrj1tAlYy2UBIML9tD3BytcG7NwnnlnxT6HDAD%2FpmuhI6AuuMAej9CeIIIVgcF&X-Amz-Signature=6c54d12bf6ee2f699ed0456c5416cc22a77244fe384f65492dfbfa631b7611bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZZYTKG%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCdKzlFiuVnoggjy%2FXoodOSJ%2FxDVDZxgUySvj9SxtkjQIgEJ7sOHqovKxFmBGGL1%2FVoFQgaSsckX9WQq3YtEjxMtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMebtAXbcGFMYacvmircA3uNAd3CfhQ8tZu4FKHjBVXr8UNgKZqpZgBKCcZrxu8oFa8bfjlwXWqpP89LSmotCgn39n6SxPBCLrwrcjSMSUGNEraqKlft3eWw8Nf1Pd60%2BQKTirxEdW6iDn3FhD2M%2B%2FGUR1xEfiaEKFY9TPvoliyLRnhAGHQ5C9poidEoJCFAIudTHwpxkXkWqgvbDETVp19YV9X%2FMNbl8mlk5wP25pNON5JWQnZ%2BDmdTfglk6WVwjvXiJ5TcRJ60oUGZp58muQ1bs8T9HaKlfsVTtVyVQz%2B2h669KUlXhT7iNABn6dWuo3dvYBpIn%2B4zWuiCTv1Lk95jwV7PakUnRhq%2FC63wC7qkTgLTvCtaxOY69qj2MbkUayr7QHbKugY3vwM309jLfBwNPEySmWDIKRxlILkk3uzoGPuSCrjS61BDxNY7B7hw1m0NM6nJxWp3HNih5t3QIecKG0W8LPxxNF9PW7WS1yEewLyf7se40P7EhUU8vq2UGtYf%2B32V%2F%2B5eUi%2BkYamjyj%2F3lIl%2BAr7T5P0QZLqMLTYKTXR1IsN36dyPvQVVOUOxLwecAGXY3BPX4wcKa657AupZyT2NAPJvsnUzBy196ECH5IAOKIrA7uPIqvVx8UdLd7K4jeF9g1pdwM5cMI%2FCo9QGOqUBR0paNuena0W1EcwTshgxphT999D9e3s%2BDRfj%2BmmuT7tug53eDz9hG4%2FV5%2BMPwVzHZm8nnbNJjG2ucI8zT%2FE6IUXjJ0s6erDI6XAhdW59Z1yFakd8okNOdAodGBY1nAQo9a9QBFXqBExbTfBuxlaR7803nIRtVyqrj1tAlYy2UBIML9tD3BytcG7NwnnlnxT6HDAD%2FpmuhI6AuuMAej9CeIIIVgcF&X-Amz-Signature=886b548db06202725bad83e49ec83536d9469d912b4a0b428b702a3080f8d8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
