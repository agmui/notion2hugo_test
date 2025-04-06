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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3UQ45A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICc%2Fn42BkC9vTpgX4AqernBF4DezH6SunlTwKeheeDH7AiEA0dBIP9wGhdLUO11g5v5jjltL2YpXOp5NHriC9rHc7Ecq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAWIS7aWA7OCaFJvdSrcAzu9ldKmQa6iZmYBvsj%2FsG18gFGZrVdTYbKE%2B4msX2xNA9w552aqs16qyl4zgr2Nv89DoGU51krRBtXkNTgp7BvrggpuM4vFd2DjnSLV899CYLP8EWDXFHdWSDd4uSI%2BlPomC2BMBsVPCvppf%2F4rKmDgVNX%2BtJLGN%2Bz2J1uHJyjJCouS39io3vwlqkHQIlKj3xT2IDDH%2FikOkmjbQfnbAabn4CUBun6yNHv%2FVg6XdKNu8Etqu2MCq8hsJe4d1dHy3x9Vta153lLPjbaTZ0U0882%2BWvfb3F59xKlGDLAl9WN6w6o2Hm0i4FoTRRDbumi7lRTqEvaYSIUE2NiN04hdORibffhiyA3waYvX38lZRUjJMvdex3fE4XsuJaziq1jHtKP5MM2J3u4IQtp%2FmHhGQA1%2FZRRJxR9b7PZoRVQZVJxAa0PoAohuFaP8sPOYJPN%2BJZKMaaVnlM1Y1sZWVX8HUNI631VRXB0Bnmz1ZKL4sX6e7OXRJDtbSt8iE2XEXlfKhACydTHI24Q36NMdjbDj1RvjZ89QhbWjXgGJvspFeTvD5hgIwjYX8DOfbQuD2d1Op3jA%2BHVknPayz3XmZ7P6rLqivYRGpgAK%2BT2bFIOFl6baIKD6WuR6Sli2T2FOMLXAyL8GOqUBYjW3DjId4jL%2FMn8C75gYuRP5201kVIWjMng2Iv5knEvGLDzFJf8JnfIAFd8AXnj8OGTXQtJTh2rKQGUz7nh5xzWBrQO%2FsRS3npRopqAEf0pEbHaOXrCkmv3f7gxdYxxxYfR6YP31Mo5VjRThtK7Ocj%2FBcSEe2wBI%2FX4YZRF6NkoRw8PtG%2F%2BavoDnjVD6yctPXZVu17kPziFZYhvOZWAKjWZtoFul&X-Amz-Signature=b7e83d4d0c0982deaefadeecd277045a95991b824b85b11c2c9466b5e8b1b3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3UQ45A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICc%2Fn42BkC9vTpgX4AqernBF4DezH6SunlTwKeheeDH7AiEA0dBIP9wGhdLUO11g5v5jjltL2YpXOp5NHriC9rHc7Ecq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAWIS7aWA7OCaFJvdSrcAzu9ldKmQa6iZmYBvsj%2FsG18gFGZrVdTYbKE%2B4msX2xNA9w552aqs16qyl4zgr2Nv89DoGU51krRBtXkNTgp7BvrggpuM4vFd2DjnSLV899CYLP8EWDXFHdWSDd4uSI%2BlPomC2BMBsVPCvppf%2F4rKmDgVNX%2BtJLGN%2Bz2J1uHJyjJCouS39io3vwlqkHQIlKj3xT2IDDH%2FikOkmjbQfnbAabn4CUBun6yNHv%2FVg6XdKNu8Etqu2MCq8hsJe4d1dHy3x9Vta153lLPjbaTZ0U0882%2BWvfb3F59xKlGDLAl9WN6w6o2Hm0i4FoTRRDbumi7lRTqEvaYSIUE2NiN04hdORibffhiyA3waYvX38lZRUjJMvdex3fE4XsuJaziq1jHtKP5MM2J3u4IQtp%2FmHhGQA1%2FZRRJxR9b7PZoRVQZVJxAa0PoAohuFaP8sPOYJPN%2BJZKMaaVnlM1Y1sZWVX8HUNI631VRXB0Bnmz1ZKL4sX6e7OXRJDtbSt8iE2XEXlfKhACydTHI24Q36NMdjbDj1RvjZ89QhbWjXgGJvspFeTvD5hgIwjYX8DOfbQuD2d1Op3jA%2BHVknPayz3XmZ7P6rLqivYRGpgAK%2BT2bFIOFl6baIKD6WuR6Sli2T2FOMLXAyL8GOqUBYjW3DjId4jL%2FMn8C75gYuRP5201kVIWjMng2Iv5knEvGLDzFJf8JnfIAFd8AXnj8OGTXQtJTh2rKQGUz7nh5xzWBrQO%2FsRS3npRopqAEf0pEbHaOXrCkmv3f7gxdYxxxYfR6YP31Mo5VjRThtK7Ocj%2FBcSEe2wBI%2FX4YZRF6NkoRw8PtG%2F%2BavoDnjVD6yctPXZVu17kPziFZYhvOZWAKjWZtoFul&X-Amz-Signature=6b9dcef4054ee399f700a4a7ad431405b59c147c78021b54913490c027706520&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3UQ45A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICc%2Fn42BkC9vTpgX4AqernBF4DezH6SunlTwKeheeDH7AiEA0dBIP9wGhdLUO11g5v5jjltL2YpXOp5NHriC9rHc7Ecq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAWIS7aWA7OCaFJvdSrcAzu9ldKmQa6iZmYBvsj%2FsG18gFGZrVdTYbKE%2B4msX2xNA9w552aqs16qyl4zgr2Nv89DoGU51krRBtXkNTgp7BvrggpuM4vFd2DjnSLV899CYLP8EWDXFHdWSDd4uSI%2BlPomC2BMBsVPCvppf%2F4rKmDgVNX%2BtJLGN%2Bz2J1uHJyjJCouS39io3vwlqkHQIlKj3xT2IDDH%2FikOkmjbQfnbAabn4CUBun6yNHv%2FVg6XdKNu8Etqu2MCq8hsJe4d1dHy3x9Vta153lLPjbaTZ0U0882%2BWvfb3F59xKlGDLAl9WN6w6o2Hm0i4FoTRRDbumi7lRTqEvaYSIUE2NiN04hdORibffhiyA3waYvX38lZRUjJMvdex3fE4XsuJaziq1jHtKP5MM2J3u4IQtp%2FmHhGQA1%2FZRRJxR9b7PZoRVQZVJxAa0PoAohuFaP8sPOYJPN%2BJZKMaaVnlM1Y1sZWVX8HUNI631VRXB0Bnmz1ZKL4sX6e7OXRJDtbSt8iE2XEXlfKhACydTHI24Q36NMdjbDj1RvjZ89QhbWjXgGJvspFeTvD5hgIwjYX8DOfbQuD2d1Op3jA%2BHVknPayz3XmZ7P6rLqivYRGpgAK%2BT2bFIOFl6baIKD6WuR6Sli2T2FOMLXAyL8GOqUBYjW3DjId4jL%2FMn8C75gYuRP5201kVIWjMng2Iv5knEvGLDzFJf8JnfIAFd8AXnj8OGTXQtJTh2rKQGUz7nh5xzWBrQO%2FsRS3npRopqAEf0pEbHaOXrCkmv3f7gxdYxxxYfR6YP31Mo5VjRThtK7Ocj%2FBcSEe2wBI%2FX4YZRF6NkoRw8PtG%2F%2BavoDnjVD6yctPXZVu17kPziFZYhvOZWAKjWZtoFul&X-Amz-Signature=2c7dc7e6bfd59760a4c0e7194dd186133b0d2506f0c4de74d59221c3e5e1397d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
