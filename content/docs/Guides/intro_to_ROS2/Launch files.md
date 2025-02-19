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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQN7EYZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBiIWl7Q3aamcBARC1awbbYeoJF0sVHW9C0%2Fs59K2wCmAiAkjh0HlLFBv%2B1Nv%2FBUWfLBqFlbH%2FMtDIYiUcPwlVTO7yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLyoQTVtkZKlZCrrKtwDRHrgMXq5mnEVvX0dYGSBcmhAUZUpqIxiXtYVTaAmdiitFSC1NIcfm5FScVgWKVX1AQfan3DBArcnsXfzDL26FOFDGYXKwim1doHFHSDTpcPJLuf%2BUSYEHMWDfG5bzZ56XNUf2MP9kSYn3FMXPq1ss8h3Oqf7mgLmMe37a5e87c55rPBU67U3myUh%2FQzkPUqsNvVSks9zKgfk6aP2ALWEx0zYkTZpGu4dxg8YWc%2BnZFRcdSAJ2wcb8dVDtp1WOrBvuzAksrI8Z0Oz%2B0pe8CX%2Fm4EEgs9pQaHX9CzRglZ5Xm000G%2BLSa7wDcuTkCvbuLNls4M3%2BJ25zb8%2BS72g8EvQAC7P3q0X7CqJi%2FVGXk90dtTXQ08VUKBGM%2B139zJRrG2Sjd9W3DlVjoooA%2Fl17BGiP0G9PpkoHznMWkiQh5rLBbWpxrya04VJRrRbCwu05gs5RHaVLrvwdy6KCpqRSWqhjox6296azDZvg2UNURrvc7G8ci6Oam%2FGcQNx0Gc5jx22Dgt%2FiqPDctvlsmu0TypLzGYqNu9ySCx1VUaAFM%2FPuNzo9M%2BUGt4y4Nm%2F35gZvJdoyBPn0CCiknCu%2BZQugesRIlAI%2FzduAo58qrM42HC0zGzjtNzrvDLUMsH5o6AwsKLVvQY6pgGhGh9lZd7%2ByRiHTKfC9FL4moZpqPFa3gCviib%2BmPSBmOMlV9QsepajEo1EDcp9MIyE2YtVPtDq4p0qorbFPBoLlKCEgRKdeaKmE5bKgg5W%2BMhc4sLRBXD7bgaoLY86WTcmxTadOaAY%2BSgaE2Yv4%2BiIPRtuf%2BgI9Jvp9fuAlzVp6%2FDFzM6ffmewz%2BpD7yq9LqKJngD%2B%2BlVCAkB%2BlO5tVjJClgYIvjfF&X-Amz-Signature=73cd70cc35bc0fe5bd215a914b4d8980b1d7a7d31bfdea0d5740fa3b1cc763fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQN7EYZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBiIWl7Q3aamcBARC1awbbYeoJF0sVHW9C0%2Fs59K2wCmAiAkjh0HlLFBv%2B1Nv%2FBUWfLBqFlbH%2FMtDIYiUcPwlVTO7yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLyoQTVtkZKlZCrrKtwDRHrgMXq5mnEVvX0dYGSBcmhAUZUpqIxiXtYVTaAmdiitFSC1NIcfm5FScVgWKVX1AQfan3DBArcnsXfzDL26FOFDGYXKwim1doHFHSDTpcPJLuf%2BUSYEHMWDfG5bzZ56XNUf2MP9kSYn3FMXPq1ss8h3Oqf7mgLmMe37a5e87c55rPBU67U3myUh%2FQzkPUqsNvVSks9zKgfk6aP2ALWEx0zYkTZpGu4dxg8YWc%2BnZFRcdSAJ2wcb8dVDtp1WOrBvuzAksrI8Z0Oz%2B0pe8CX%2Fm4EEgs9pQaHX9CzRglZ5Xm000G%2BLSa7wDcuTkCvbuLNls4M3%2BJ25zb8%2BS72g8EvQAC7P3q0X7CqJi%2FVGXk90dtTXQ08VUKBGM%2B139zJRrG2Sjd9W3DlVjoooA%2Fl17BGiP0G9PpkoHznMWkiQh5rLBbWpxrya04VJRrRbCwu05gs5RHaVLrvwdy6KCpqRSWqhjox6296azDZvg2UNURrvc7G8ci6Oam%2FGcQNx0Gc5jx22Dgt%2FiqPDctvlsmu0TypLzGYqNu9ySCx1VUaAFM%2FPuNzo9M%2BUGt4y4Nm%2F35gZvJdoyBPn0CCiknCu%2BZQugesRIlAI%2FzduAo58qrM42HC0zGzjtNzrvDLUMsH5o6AwsKLVvQY6pgGhGh9lZd7%2ByRiHTKfC9FL4moZpqPFa3gCviib%2BmPSBmOMlV9QsepajEo1EDcp9MIyE2YtVPtDq4p0qorbFPBoLlKCEgRKdeaKmE5bKgg5W%2BMhc4sLRBXD7bgaoLY86WTcmxTadOaAY%2BSgaE2Yv4%2BiIPRtuf%2BgI9Jvp9fuAlzVp6%2FDFzM6ffmewz%2BpD7yq9LqKJngD%2B%2BlVCAkB%2BlO5tVjJClgYIvjfF&X-Amz-Signature=ad3eee74622bfe210bdac74958decceece369aea237a744e1ab109678a28965c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQN7EYZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBiIWl7Q3aamcBARC1awbbYeoJF0sVHW9C0%2Fs59K2wCmAiAkjh0HlLFBv%2B1Nv%2FBUWfLBqFlbH%2FMtDIYiUcPwlVTO7yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpLyoQTVtkZKlZCrrKtwDRHrgMXq5mnEVvX0dYGSBcmhAUZUpqIxiXtYVTaAmdiitFSC1NIcfm5FScVgWKVX1AQfan3DBArcnsXfzDL26FOFDGYXKwim1doHFHSDTpcPJLuf%2BUSYEHMWDfG5bzZ56XNUf2MP9kSYn3FMXPq1ss8h3Oqf7mgLmMe37a5e87c55rPBU67U3myUh%2FQzkPUqsNvVSks9zKgfk6aP2ALWEx0zYkTZpGu4dxg8YWc%2BnZFRcdSAJ2wcb8dVDtp1WOrBvuzAksrI8Z0Oz%2B0pe8CX%2Fm4EEgs9pQaHX9CzRglZ5Xm000G%2BLSa7wDcuTkCvbuLNls4M3%2BJ25zb8%2BS72g8EvQAC7P3q0X7CqJi%2FVGXk90dtTXQ08VUKBGM%2B139zJRrG2Sjd9W3DlVjoooA%2Fl17BGiP0G9PpkoHznMWkiQh5rLBbWpxrya04VJRrRbCwu05gs5RHaVLrvwdy6KCpqRSWqhjox6296azDZvg2UNURrvc7G8ci6Oam%2FGcQNx0Gc5jx22Dgt%2FiqPDctvlsmu0TypLzGYqNu9ySCx1VUaAFM%2FPuNzo9M%2BUGt4y4Nm%2F35gZvJdoyBPn0CCiknCu%2BZQugesRIlAI%2FzduAo58qrM42HC0zGzjtNzrvDLUMsH5o6AwsKLVvQY6pgGhGh9lZd7%2ByRiHTKfC9FL4moZpqPFa3gCviib%2BmPSBmOMlV9QsepajEo1EDcp9MIyE2YtVPtDq4p0qorbFPBoLlKCEgRKdeaKmE5bKgg5W%2BMhc4sLRBXD7bgaoLY86WTcmxTadOaAY%2BSgaE2Yv4%2BiIPRtuf%2BgI9Jvp9fuAlzVp6%2FDFzM6ffmewz%2BpD7yq9LqKJngD%2B%2BlVCAkB%2BlO5tVjJClgYIvjfF&X-Amz-Signature=4453a72ed97a4c9e2ab20d08d99e4c6f46381df55361f314be498bafe852ad09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
