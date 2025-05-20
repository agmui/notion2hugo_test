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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ3UTMH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOX9bywlxSeJyCZ19pab4MfzgFZndzqFFzxV0ckApRcAiEA3AuQDgreaPJ6ipdWZIlVTxXE8zCLIzQ2TBT2HfdAwuIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXQ0wf%2F7EfX%2B5X45SrcA%2FqUIq3lfdTN2PFavgTQNphMI%2F%2B06hplBUR3upsC7Hz%2FZ8P2Gb2%2BN00J8md%2B1HmRT7uYYOIeHJ5uCMkJTdD8P8aBcsy7Pv5x3LlihWIFky0R%2BsJ6UQIBLYjI89qvom1cJpZsqL3QabbvnvEvYIyKSoljl2wb4RfHh9iVWDuUq%2BcMab%2B4WFo0sELRHUzcgEv%2BdhlrekMS3gz4sXaBbxr3bxq5%2F9gFFZNoYDTOUoNcKZzvKxDwWXHG4GIWfHJT4vUiemISJ4jftTWN%2BYxNL%2Fh5q%2Fo%2F%2FPZqcpX8H2AzXT9AGT1RuxppYUatXOb9peozPVCKYr2qzxtWAZkeoKsBGq5qgjLY%2FIvOJSCxX63snwWEYM8Mpo7gqvNukis5CMW0EXxkxk0IKmWJcPGUUUcxSEZuoDNrsUvIK%2FkqNzaB%2BsbeWT%2BUhGPfVyhW8J5nnmXlCrNOKMKwaUwlGkxYC00Ohr6k1gQtCNj59ClVoXqO0Fa3QU6bOQomn1BcBmeISK%2FyXDOz4hjsUw45xSi%2FfegXVwMrFZJ%2FgEIBp754ANmZeRvtAuB7AjQJen3HpeEC4CPCdIVY8cLnmbh0wuHL6d7tqV%2FwPrhq7MzEB2VtdzmqDPfUTZZ0Ypxncu2dGqz5DQ02MKjLs8EGOqUBkOTMtzRPbc6Ar%2FvuDyIKu5rrisKybRpkdpiQkduEcTGfEBAtHy5b9OfFkiGeXXCQ3tEa0ZbR8legn5DWiw4ybk8xCK81T0yg9vk1bWmN0%2FmK2%2BlbYYWzWikAKsVkhHDKrhSNIlFmF2%2BMiIny9qVT3R20%2FiH0e%2F9pf%2FOLXy4TSrVSAWTWXIjUn4hOIAXE%2FjiuoNicESNXB25k7cCWUVRU0oK%2BQIjS&X-Amz-Signature=0a1eda2eca597777ed300521aabfb8882a14ad8cf85554a7debe84fc7e0402e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ3UTMH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOX9bywlxSeJyCZ19pab4MfzgFZndzqFFzxV0ckApRcAiEA3AuQDgreaPJ6ipdWZIlVTxXE8zCLIzQ2TBT2HfdAwuIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXQ0wf%2F7EfX%2B5X45SrcA%2FqUIq3lfdTN2PFavgTQNphMI%2F%2B06hplBUR3upsC7Hz%2FZ8P2Gb2%2BN00J8md%2B1HmRT7uYYOIeHJ5uCMkJTdD8P8aBcsy7Pv5x3LlihWIFky0R%2BsJ6UQIBLYjI89qvom1cJpZsqL3QabbvnvEvYIyKSoljl2wb4RfHh9iVWDuUq%2BcMab%2B4WFo0sELRHUzcgEv%2BdhlrekMS3gz4sXaBbxr3bxq5%2F9gFFZNoYDTOUoNcKZzvKxDwWXHG4GIWfHJT4vUiemISJ4jftTWN%2BYxNL%2Fh5q%2Fo%2F%2FPZqcpX8H2AzXT9AGT1RuxppYUatXOb9peozPVCKYr2qzxtWAZkeoKsBGq5qgjLY%2FIvOJSCxX63snwWEYM8Mpo7gqvNukis5CMW0EXxkxk0IKmWJcPGUUUcxSEZuoDNrsUvIK%2FkqNzaB%2BsbeWT%2BUhGPfVyhW8J5nnmXlCrNOKMKwaUwlGkxYC00Ohr6k1gQtCNj59ClVoXqO0Fa3QU6bOQomn1BcBmeISK%2FyXDOz4hjsUw45xSi%2FfegXVwMrFZJ%2FgEIBp754ANmZeRvtAuB7AjQJen3HpeEC4CPCdIVY8cLnmbh0wuHL6d7tqV%2FwPrhq7MzEB2VtdzmqDPfUTZZ0Ypxncu2dGqz5DQ02MKjLs8EGOqUBkOTMtzRPbc6Ar%2FvuDyIKu5rrisKybRpkdpiQkduEcTGfEBAtHy5b9OfFkiGeXXCQ3tEa0ZbR8legn5DWiw4ybk8xCK81T0yg9vk1bWmN0%2FmK2%2BlbYYWzWikAKsVkhHDKrhSNIlFmF2%2BMiIny9qVT3R20%2FiH0e%2F9pf%2FOLXy4TSrVSAWTWXIjUn4hOIAXE%2FjiuoNicESNXB25k7cCWUVRU0oK%2BQIjS&X-Amz-Signature=14208d7ee6f8b236adde3569c45e73145cfb0ba27383d7bda16d41476d3ae349&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ3UTMH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOX9bywlxSeJyCZ19pab4MfzgFZndzqFFzxV0ckApRcAiEA3AuQDgreaPJ6ipdWZIlVTxXE8zCLIzQ2TBT2HfdAwuIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXQ0wf%2F7EfX%2B5X45SrcA%2FqUIq3lfdTN2PFavgTQNphMI%2F%2B06hplBUR3upsC7Hz%2FZ8P2Gb2%2BN00J8md%2B1HmRT7uYYOIeHJ5uCMkJTdD8P8aBcsy7Pv5x3LlihWIFky0R%2BsJ6UQIBLYjI89qvom1cJpZsqL3QabbvnvEvYIyKSoljl2wb4RfHh9iVWDuUq%2BcMab%2B4WFo0sELRHUzcgEv%2BdhlrekMS3gz4sXaBbxr3bxq5%2F9gFFZNoYDTOUoNcKZzvKxDwWXHG4GIWfHJT4vUiemISJ4jftTWN%2BYxNL%2Fh5q%2Fo%2F%2FPZqcpX8H2AzXT9AGT1RuxppYUatXOb9peozPVCKYr2qzxtWAZkeoKsBGq5qgjLY%2FIvOJSCxX63snwWEYM8Mpo7gqvNukis5CMW0EXxkxk0IKmWJcPGUUUcxSEZuoDNrsUvIK%2FkqNzaB%2BsbeWT%2BUhGPfVyhW8J5nnmXlCrNOKMKwaUwlGkxYC00Ohr6k1gQtCNj59ClVoXqO0Fa3QU6bOQomn1BcBmeISK%2FyXDOz4hjsUw45xSi%2FfegXVwMrFZJ%2FgEIBp754ANmZeRvtAuB7AjQJen3HpeEC4CPCdIVY8cLnmbh0wuHL6d7tqV%2FwPrhq7MzEB2VtdzmqDPfUTZZ0Ypxncu2dGqz5DQ02MKjLs8EGOqUBkOTMtzRPbc6Ar%2FvuDyIKu5rrisKybRpkdpiQkduEcTGfEBAtHy5b9OfFkiGeXXCQ3tEa0ZbR8legn5DWiw4ybk8xCK81T0yg9vk1bWmN0%2FmK2%2BlbYYWzWikAKsVkhHDKrhSNIlFmF2%2BMiIny9qVT3R20%2FiH0e%2F9pf%2FOLXy4TSrVSAWTWXIjUn4hOIAXE%2FjiuoNicESNXB25k7cCWUVRU0oK%2BQIjS&X-Amz-Signature=566a9b1aa96142d2b6a5f19a410d15772f27af7a0f4d954bbfccc779206dde3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
