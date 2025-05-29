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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIIJGAQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECJs1BTc4alRuKlfH04LsiB1h4aAVDtq3qhqhCRDc9HAiEApyDnzp8D4j%2FlzqlwLXrbwG0xBZSZIMUWL5mlWbjt%2FjEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOic6GXnABp6lc9UpircAzpLk080IJzQdHQuRcrfPu4OOOq%2BRSMS%2FB8IP3I89dsRUu%2FOPkfkmGDZMNoA0cjoRtcwkYWuPncuyWC4uvIbBsK3igYTzS6w%2FTaO4KC4M97gEWnRjJoDR2GzIWz68zD6JtvTDVYK56F5nln4J4vnjQA1vLiXzuqpEtfU%2FIAF4AZH8JJwA59%2FwskbSz9qtMPGU9Pk%2Fbo%2FLWefwhECdDHAqHnDA7dnLlg%2FilM3inS0DXpRjrF71U7NYS%2BdsOG5yR3kmEwiKDQg2l5JoYiYWKDq4dvdh6oyZUT2EcQxG91UsrX64qgzHhigi3wH1vAjgky5xF3zGfcX3f3T3Lqi5ijKZwLxrodzfkSlHOLtNubcsUMq%2BPFv7F5rHIQmyKBSEkJsFr36sjrffARjeUBrZlppyW2DmrjjQBp5%2B1u%2FXL3%2B2k2IXxdtXa3x0xER9AAZZlva7Frwl80px6kf7ETYvIkjtrehZbcCEPJc%2FwP7TK7W0V7xVaSxqqYEwrw%2BIJbit1ArUs1v7n3m8gd1uzqYc3EXtYJVuYaj9ZNtubPvHi6QHuVk5oPAV2FlAbXQT5Ct9c%2BMp9kGsJw1fQR6GJJ4PDpL54o9hegVjOiHZ88zhmhjFJhD31aV%2BzO%2F91ruKiTtMMSz4sEGOqUBpbXIpuu8pw1wC9NVZ8LwnBFVA2R2ZzTxg4IhGEDah%2Fo%2FgYuvqruq%2BjVUJfZOEHIO0ZiIjqZXRD7vVcqDXoTg9EqNe58G4bleN4MDG8LoexMb4n%2BNYKhMAcUOlNxwLedhWN9zTWy8ZNa4D3joIB2BVLV4HGufqogmJjZObTA03nEqP5jGIWfrg%2BgN09TgFHtb7%2Fh8qpSCn2VgSpk5XA367%2Fab%2BmqI&X-Amz-Signature=5d9881df56e44796d49554d9fd9e0b7033eb80a5ac2575226a0ed157d6f675a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIIJGAQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECJs1BTc4alRuKlfH04LsiB1h4aAVDtq3qhqhCRDc9HAiEApyDnzp8D4j%2FlzqlwLXrbwG0xBZSZIMUWL5mlWbjt%2FjEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOic6GXnABp6lc9UpircAzpLk080IJzQdHQuRcrfPu4OOOq%2BRSMS%2FB8IP3I89dsRUu%2FOPkfkmGDZMNoA0cjoRtcwkYWuPncuyWC4uvIbBsK3igYTzS6w%2FTaO4KC4M97gEWnRjJoDR2GzIWz68zD6JtvTDVYK56F5nln4J4vnjQA1vLiXzuqpEtfU%2FIAF4AZH8JJwA59%2FwskbSz9qtMPGU9Pk%2Fbo%2FLWefwhECdDHAqHnDA7dnLlg%2FilM3inS0DXpRjrF71U7NYS%2BdsOG5yR3kmEwiKDQg2l5JoYiYWKDq4dvdh6oyZUT2EcQxG91UsrX64qgzHhigi3wH1vAjgky5xF3zGfcX3f3T3Lqi5ijKZwLxrodzfkSlHOLtNubcsUMq%2BPFv7F5rHIQmyKBSEkJsFr36sjrffARjeUBrZlppyW2DmrjjQBp5%2B1u%2FXL3%2B2k2IXxdtXa3x0xER9AAZZlva7Frwl80px6kf7ETYvIkjtrehZbcCEPJc%2FwP7TK7W0V7xVaSxqqYEwrw%2BIJbit1ArUs1v7n3m8gd1uzqYc3EXtYJVuYaj9ZNtubPvHi6QHuVk5oPAV2FlAbXQT5Ct9c%2BMp9kGsJw1fQR6GJJ4PDpL54o9hegVjOiHZ88zhmhjFJhD31aV%2BzO%2F91ruKiTtMMSz4sEGOqUBpbXIpuu8pw1wC9NVZ8LwnBFVA2R2ZzTxg4IhGEDah%2Fo%2FgYuvqruq%2BjVUJfZOEHIO0ZiIjqZXRD7vVcqDXoTg9EqNe58G4bleN4MDG8LoexMb4n%2BNYKhMAcUOlNxwLedhWN9zTWy8ZNa4D3joIB2BVLV4HGufqogmJjZObTA03nEqP5jGIWfrg%2BgN09TgFHtb7%2Fh8qpSCn2VgSpk5XA367%2Fab%2BmqI&X-Amz-Signature=916a6f4226c09d3a5614bddcd2627212d592fb47afd362c2efe9b5f40de78797&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIIJGAQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECJs1BTc4alRuKlfH04LsiB1h4aAVDtq3qhqhCRDc9HAiEApyDnzp8D4j%2FlzqlwLXrbwG0xBZSZIMUWL5mlWbjt%2FjEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOic6GXnABp6lc9UpircAzpLk080IJzQdHQuRcrfPu4OOOq%2BRSMS%2FB8IP3I89dsRUu%2FOPkfkmGDZMNoA0cjoRtcwkYWuPncuyWC4uvIbBsK3igYTzS6w%2FTaO4KC4M97gEWnRjJoDR2GzIWz68zD6JtvTDVYK56F5nln4J4vnjQA1vLiXzuqpEtfU%2FIAF4AZH8JJwA59%2FwskbSz9qtMPGU9Pk%2Fbo%2FLWefwhECdDHAqHnDA7dnLlg%2FilM3inS0DXpRjrF71U7NYS%2BdsOG5yR3kmEwiKDQg2l5JoYiYWKDq4dvdh6oyZUT2EcQxG91UsrX64qgzHhigi3wH1vAjgky5xF3zGfcX3f3T3Lqi5ijKZwLxrodzfkSlHOLtNubcsUMq%2BPFv7F5rHIQmyKBSEkJsFr36sjrffARjeUBrZlppyW2DmrjjQBp5%2B1u%2FXL3%2B2k2IXxdtXa3x0xER9AAZZlva7Frwl80px6kf7ETYvIkjtrehZbcCEPJc%2FwP7TK7W0V7xVaSxqqYEwrw%2BIJbit1ArUs1v7n3m8gd1uzqYc3EXtYJVuYaj9ZNtubPvHi6QHuVk5oPAV2FlAbXQT5Ct9c%2BMp9kGsJw1fQR6GJJ4PDpL54o9hegVjOiHZ88zhmhjFJhD31aV%2BzO%2F91ruKiTtMMSz4sEGOqUBpbXIpuu8pw1wC9NVZ8LwnBFVA2R2ZzTxg4IhGEDah%2Fo%2FgYuvqruq%2BjVUJfZOEHIO0ZiIjqZXRD7vVcqDXoTg9EqNe58G4bleN4MDG8LoexMb4n%2BNYKhMAcUOlNxwLedhWN9zTWy8ZNa4D3joIB2BVLV4HGufqogmJjZObTA03nEqP5jGIWfrg%2BgN09TgFHtb7%2Fh8qpSCn2VgSpk5XA367%2Fab%2BmqI&X-Amz-Signature=41ed2e6263b58aebb2a6f534e36d19e0553fb595a2fb881a8f5d8e99f5e0afce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
