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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMQNA2H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD3CozEJ4kv2%2F8wa0yy0h9nM0jWw%2BUbQ%2BMRt%2B6AOeLnAwIhAIW%2F7j3z6%2BIaaufPvhdXBpw7xzfFO0gbMVQhCRBo%2FwXBKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgrccwKMnSWHm1mHkq3AOgKVe0XPpjJYzqeZygq2DmqtBEFDAtIMNK8haa7%2FEWoQxYMCm9lZgFtNg7WIWX74sbvYQznLL%2Fz7VuWVJYcwaYOwM5CYF%2B2gwsrfXQALCe95dvW7BGBxr2nD330Mp5PBrCW5p4ObKvAj%2FeCBeu8dfcYbWNLrpR8gHF5%2FMCvz%2BHj%2F1UFD3vplSgf5th3hxlkOSX9nMrlmbFmqJjAKe%2F0wiqsZX9mdzP69xvql2k4Kb5s7GV5SW6ecS6f2Sb6FNmMouxySLM%2FmwhcneVdja9%2BecPNsSSppT8WIs3551AlAxbymVl4XMxwg7aHrABVZAFEISfw1C9aNL4UvHOXqbDspOBeUcBrk2%2FOHr42QrUHHjSuUOwC%2FaR%2FAe4WCb3%2BForl5kfxmt0m0BSweH%2Bt1lu2fn4vEPqVYWLs2HcRvLhcwZMbID2rIx%2B6GHD8IhKc%2FRSMp5uDJtMQP%2Fw0KAnHgB%2BljL0SRHOdPa9WIzfaAzGnY38O9vd0eZQ9I9oDGMkbzQKXtCgfLFRNrVyiPACcFE30u%2Fr377QDF4BBO6becwwz9AlOY%2FV%2Fq65f%2FRll2UOf4481MKd%2F8AwDPzYSkzsWlO%2FPIhQCbOAlzxiF%2Fue85Y6c6kF4E8Q3hmKtGoLJGX9XzDpysC%2BBjqkAUqGDXEel1HFrhdbUjx3TiEjnlTsHgdT1qrKjVLl0vx5%2FvU5gyEUpYElWlJhrRTof3SQ4ZTVgJg5JsIjFVRQj6VyZbsvUo5zStE0nLoaGzvcNXnrUDcM0iXH79NyOldJ6eYKEgfcU2%2F7vlJ5q8%2Blm7mn%2B5kAzPQ6P2yIOKdKqhwX052Bb8jNcoKYXmvJM0sKcFriza8Bu3vZD4UVfWFe6xIYERN%2F&X-Amz-Signature=1353f61b2b836f97c1e5c032ade32a42e5f781bb0582e3b7e0a916c19d79d695&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMQNA2H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD3CozEJ4kv2%2F8wa0yy0h9nM0jWw%2BUbQ%2BMRt%2B6AOeLnAwIhAIW%2F7j3z6%2BIaaufPvhdXBpw7xzfFO0gbMVQhCRBo%2FwXBKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgrccwKMnSWHm1mHkq3AOgKVe0XPpjJYzqeZygq2DmqtBEFDAtIMNK8haa7%2FEWoQxYMCm9lZgFtNg7WIWX74sbvYQznLL%2Fz7VuWVJYcwaYOwM5CYF%2B2gwsrfXQALCe95dvW7BGBxr2nD330Mp5PBrCW5p4ObKvAj%2FeCBeu8dfcYbWNLrpR8gHF5%2FMCvz%2BHj%2F1UFD3vplSgf5th3hxlkOSX9nMrlmbFmqJjAKe%2F0wiqsZX9mdzP69xvql2k4Kb5s7GV5SW6ecS6f2Sb6FNmMouxySLM%2FmwhcneVdja9%2BecPNsSSppT8WIs3551AlAxbymVl4XMxwg7aHrABVZAFEISfw1C9aNL4UvHOXqbDspOBeUcBrk2%2FOHr42QrUHHjSuUOwC%2FaR%2FAe4WCb3%2BForl5kfxmt0m0BSweH%2Bt1lu2fn4vEPqVYWLs2HcRvLhcwZMbID2rIx%2B6GHD8IhKc%2FRSMp5uDJtMQP%2Fw0KAnHgB%2BljL0SRHOdPa9WIzfaAzGnY38O9vd0eZQ9I9oDGMkbzQKXtCgfLFRNrVyiPACcFE30u%2Fr377QDF4BBO6becwwz9AlOY%2FV%2Fq65f%2FRll2UOf4481MKd%2F8AwDPzYSkzsWlO%2FPIhQCbOAlzxiF%2Fue85Y6c6kF4E8Q3hmKtGoLJGX9XzDpysC%2BBjqkAUqGDXEel1HFrhdbUjx3TiEjnlTsHgdT1qrKjVLl0vx5%2FvU5gyEUpYElWlJhrRTof3SQ4ZTVgJg5JsIjFVRQj6VyZbsvUo5zStE0nLoaGzvcNXnrUDcM0iXH79NyOldJ6eYKEgfcU2%2F7vlJ5q8%2Blm7mn%2B5kAzPQ6P2yIOKdKqhwX052Bb8jNcoKYXmvJM0sKcFriza8Bu3vZD4UVfWFe6xIYERN%2F&X-Amz-Signature=2792e6aa49734ec0900c5e506e3e6bbbaf073800e004d7669a32075ccf0d9303&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMQNA2H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD3CozEJ4kv2%2F8wa0yy0h9nM0jWw%2BUbQ%2BMRt%2B6AOeLnAwIhAIW%2F7j3z6%2BIaaufPvhdXBpw7xzfFO0gbMVQhCRBo%2FwXBKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgrccwKMnSWHm1mHkq3AOgKVe0XPpjJYzqeZygq2DmqtBEFDAtIMNK8haa7%2FEWoQxYMCm9lZgFtNg7WIWX74sbvYQznLL%2Fz7VuWVJYcwaYOwM5CYF%2B2gwsrfXQALCe95dvW7BGBxr2nD330Mp5PBrCW5p4ObKvAj%2FeCBeu8dfcYbWNLrpR8gHF5%2FMCvz%2BHj%2F1UFD3vplSgf5th3hxlkOSX9nMrlmbFmqJjAKe%2F0wiqsZX9mdzP69xvql2k4Kb5s7GV5SW6ecS6f2Sb6FNmMouxySLM%2FmwhcneVdja9%2BecPNsSSppT8WIs3551AlAxbymVl4XMxwg7aHrABVZAFEISfw1C9aNL4UvHOXqbDspOBeUcBrk2%2FOHr42QrUHHjSuUOwC%2FaR%2FAe4WCb3%2BForl5kfxmt0m0BSweH%2Bt1lu2fn4vEPqVYWLs2HcRvLhcwZMbID2rIx%2B6GHD8IhKc%2FRSMp5uDJtMQP%2Fw0KAnHgB%2BljL0SRHOdPa9WIzfaAzGnY38O9vd0eZQ9I9oDGMkbzQKXtCgfLFRNrVyiPACcFE30u%2Fr377QDF4BBO6becwwz9AlOY%2FV%2Fq65f%2FRll2UOf4481MKd%2F8AwDPzYSkzsWlO%2FPIhQCbOAlzxiF%2Fue85Y6c6kF4E8Q3hmKtGoLJGX9XzDpysC%2BBjqkAUqGDXEel1HFrhdbUjx3TiEjnlTsHgdT1qrKjVLl0vx5%2FvU5gyEUpYElWlJhrRTof3SQ4ZTVgJg5JsIjFVRQj6VyZbsvUo5zStE0nLoaGzvcNXnrUDcM0iXH79NyOldJ6eYKEgfcU2%2F7vlJ5q8%2Blm7mn%2B5kAzPQ6P2yIOKdKqhwX052Bb8jNcoKYXmvJM0sKcFriza8Bu3vZD4UVfWFe6xIYERN%2F&X-Amz-Signature=412e59344213aaf8ca0a42ae3265d89f59fd8ab2db87170e1e9e75e6784420da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
