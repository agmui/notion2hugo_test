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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSQ65W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1V4dN8sUNuI%2FHOW44Z3HUXyU1bTK52ui82IhqsVBzFwIhAOdrbXBKos0KsDLHS9jqKgga5VvuI4ElT2LGYEW0lF5BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7SKhPz87vDReYWE8q3APdeecOU2lx4yrfjY%2ByUL%2B6b9LaiGHrxzcxeXiNgOpJkDMM9qN59zsvrOXtRLjdEEFVxVBfmjVlZpRAm1k%2FPkOALn3dl1Kn5vQjuHMV5QFYco8BaqnwKedkuEq4RwOANl9FdN%2BuO7koHXdK55uaemH2OqH%2BiYderrg7NgRjq5dATaDJHr6xMHVHshMwTU2v8tw8WjH1YOY6gQ99yEC%2BfV5NCXqI2EPwIa2VUO7Rs4FwR1cu2NQThjnZ1E85S37ACYe4O3aidLV7rhTl9e593DbHqv8lvHF6n%2BGoHODqhYT3qkXZPLSxi7kDTOKJXlNZKzRR7gkCphHIQDUn5t%2FeFF732TAZ%2FLXYZET0WBap9eMquVE2nEzWn2Q2RoRgVDVdq%2FG%2FMG7WKFzAZ1C4ihFeNip5JcJVNGOem4vWseV8omK%2Br6kkDdvf32byew0KSqsTT0r9eNgG1hifYs0rvX4DCUpt1nm4%2F9Cuxvkfi4ZcXGBFOFuBD6%2BawAD7K87ZuujN7kpBeVxeD3RfVS8XuLMW%2BU6WCtr%2BkouI2Gw8Zw68MHn7qx%2B5Vp6sgFzWnjKEVoTnLR48XblREJIhkEVHQ08yjjL8KOOwMNIJCbNSWin3c1Q8guNVeekFEx5xdsL%2F7zDu4u3DBjqkAQhAf6DdGfXqsdq55Q2u4F4Aaz4fQYpc3U9G99UcJ64eLQ7ek0lqVfBW2QZ8XBn4c7slchwFMMqWmWjeu0r6YxsBfDMFdsfgX086j8coNEJ%2BTNcpJjqwIWwLmF%2BCpkKJwy41qGQmI3%2FwMg88DoSIhXomY3CY9Td8p3HL74kUODnRrFSLxt2ErDblOhdcPY8v2K4njDCkeMwf95Y%2FX5K15TvuGOnY&X-Amz-Signature=9076fd87026e385899a1b3e8ef59ad038a4c98c5d070b624f4998f1177ace263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSQ65W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1V4dN8sUNuI%2FHOW44Z3HUXyU1bTK52ui82IhqsVBzFwIhAOdrbXBKos0KsDLHS9jqKgga5VvuI4ElT2LGYEW0lF5BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7SKhPz87vDReYWE8q3APdeecOU2lx4yrfjY%2ByUL%2B6b9LaiGHrxzcxeXiNgOpJkDMM9qN59zsvrOXtRLjdEEFVxVBfmjVlZpRAm1k%2FPkOALn3dl1Kn5vQjuHMV5QFYco8BaqnwKedkuEq4RwOANl9FdN%2BuO7koHXdK55uaemH2OqH%2BiYderrg7NgRjq5dATaDJHr6xMHVHshMwTU2v8tw8WjH1YOY6gQ99yEC%2BfV5NCXqI2EPwIa2VUO7Rs4FwR1cu2NQThjnZ1E85S37ACYe4O3aidLV7rhTl9e593DbHqv8lvHF6n%2BGoHODqhYT3qkXZPLSxi7kDTOKJXlNZKzRR7gkCphHIQDUn5t%2FeFF732TAZ%2FLXYZET0WBap9eMquVE2nEzWn2Q2RoRgVDVdq%2FG%2FMG7WKFzAZ1C4ihFeNip5JcJVNGOem4vWseV8omK%2Br6kkDdvf32byew0KSqsTT0r9eNgG1hifYs0rvX4DCUpt1nm4%2F9Cuxvkfi4ZcXGBFOFuBD6%2BawAD7K87ZuujN7kpBeVxeD3RfVS8XuLMW%2BU6WCtr%2BkouI2Gw8Zw68MHn7qx%2B5Vp6sgFzWnjKEVoTnLR48XblREJIhkEVHQ08yjjL8KOOwMNIJCbNSWin3c1Q8guNVeekFEx5xdsL%2F7zDu4u3DBjqkAQhAf6DdGfXqsdq55Q2u4F4Aaz4fQYpc3U9G99UcJ64eLQ7ek0lqVfBW2QZ8XBn4c7slchwFMMqWmWjeu0r6YxsBfDMFdsfgX086j8coNEJ%2BTNcpJjqwIWwLmF%2BCpkKJwy41qGQmI3%2FwMg88DoSIhXomY3CY9Td8p3HL74kUODnRrFSLxt2ErDblOhdcPY8v2K4njDCkeMwf95Y%2FX5K15TvuGOnY&X-Amz-Signature=00da8f14a2c0aab866ee685197bc90a93ab48232ed3ae267a295ffce6e208b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSQ65W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1V4dN8sUNuI%2FHOW44Z3HUXyU1bTK52ui82IhqsVBzFwIhAOdrbXBKos0KsDLHS9jqKgga5VvuI4ElT2LGYEW0lF5BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7SKhPz87vDReYWE8q3APdeecOU2lx4yrfjY%2ByUL%2B6b9LaiGHrxzcxeXiNgOpJkDMM9qN59zsvrOXtRLjdEEFVxVBfmjVlZpRAm1k%2FPkOALn3dl1Kn5vQjuHMV5QFYco8BaqnwKedkuEq4RwOANl9FdN%2BuO7koHXdK55uaemH2OqH%2BiYderrg7NgRjq5dATaDJHr6xMHVHshMwTU2v8tw8WjH1YOY6gQ99yEC%2BfV5NCXqI2EPwIa2VUO7Rs4FwR1cu2NQThjnZ1E85S37ACYe4O3aidLV7rhTl9e593DbHqv8lvHF6n%2BGoHODqhYT3qkXZPLSxi7kDTOKJXlNZKzRR7gkCphHIQDUn5t%2FeFF732TAZ%2FLXYZET0WBap9eMquVE2nEzWn2Q2RoRgVDVdq%2FG%2FMG7WKFzAZ1C4ihFeNip5JcJVNGOem4vWseV8omK%2Br6kkDdvf32byew0KSqsTT0r9eNgG1hifYs0rvX4DCUpt1nm4%2F9Cuxvkfi4ZcXGBFOFuBD6%2BawAD7K87ZuujN7kpBeVxeD3RfVS8XuLMW%2BU6WCtr%2BkouI2Gw8Zw68MHn7qx%2B5Vp6sgFzWnjKEVoTnLR48XblREJIhkEVHQ08yjjL8KOOwMNIJCbNSWin3c1Q8guNVeekFEx5xdsL%2F7zDu4u3DBjqkAQhAf6DdGfXqsdq55Q2u4F4Aaz4fQYpc3U9G99UcJ64eLQ7ek0lqVfBW2QZ8XBn4c7slchwFMMqWmWjeu0r6YxsBfDMFdsfgX086j8coNEJ%2BTNcpJjqwIWwLmF%2BCpkKJwy41qGQmI3%2FwMg88DoSIhXomY3CY9Td8p3HL74kUODnRrFSLxt2ErDblOhdcPY8v2K4njDCkeMwf95Y%2FX5K15TvuGOnY&X-Amz-Signature=e53fcb03cf8b310246d508600291856e1e4c8e6a9262bbb865ccd937a458b4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
