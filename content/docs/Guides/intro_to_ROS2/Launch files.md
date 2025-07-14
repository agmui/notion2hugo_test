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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CDIJKW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDW1ZDHEMOeZVVyGuLqzUHpzru0IR1ZJWt6eTSOf5j8lQIgX%2BvUmoweMeu3D4mE74eeJMUB0rtV3VHv%2FmYbGfg5BToq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL2P93ig%2FlxpH5oj%2FircAwi6hjt2Wesyefdr8Jj2R6l7SHY3V%2BOW2DD0jNSn6PbM1OscaEw59WuMoGNDEMN4Q0El0hZpseNbbG6QS0Ev8TIqXLVUlOSIkILWIEVGetYy2bTD7BuHmX4Xg0TeT3GMlF6i%2BoQs0ilHbtQn5NAvcd1DkNZ92xBmiXY3EwKnRjMvEikmIbnNJXLDNM0sJQ4i4Hw76YVbkCwF8P1kyJ280ytUY58cxZd8R35xM0fP6aMH8E%2BSJvZHBY6hllSfciifbmGHRpP413dGsJXIMyOiK%2FIaI%2BCo28QKW%2Faasq1%2FPap6WgUl1CJltS%2FMmOePYrGZdiUK12aWm7%2Fb6MsL8DvbhiGGb0ApHWZU3mjfzVKXQGLCuw3kjAMWnpVzAyUl4tQIsJd0NkoTaUGlpcjiZCK%2BtinOSThpC7lD6o2HlYHIkLet0eaQsZ8JxygSFquvHSKOCxhKuB7Ekwh7aDynXWoVsbi7Wl6IeZfPLGqADZxFOzlhIQv4D%2F2ECMWmoZKQxWTN1jsrMkhyjNuKeDAhoiVAzf2JAKrmEG1RjjlpmZ89fFYBgH86OGoBQBb5AAW4xY0q3sasrDNVjXO6TummJkrLQzZyZjSAZRW6v6Kpevpl0Gg6Tv98eMY8Ci4Q4hBvMOmw0sMGOqUBxbsAA3gqXKrvFFx5Rwmcdnks%2Fdkig5QV45zClfNLJCv1bNq70kOStzxgaaXhFpMF5jl%2BnaneW4EhPrUjyPz%2BPQwntPXhZGn%2Bzi67QdV%2F6J6Q52WwrkPUbeyyLuOXUVRIEhubBafT%2BK8IIV7lRmrnZP8UcG50MG5lfunAgAmjhoGFNd7rbo%2BITyOQ3u9Tb0PXVpRfRg5vIiuS1lDXEIQZ%2F1X8PBPd&X-Amz-Signature=9f5aaefec8d8a7083aea5e518c044bf17da6ef3a7d31e7199aa5de134a5120ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CDIJKW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDW1ZDHEMOeZVVyGuLqzUHpzru0IR1ZJWt6eTSOf5j8lQIgX%2BvUmoweMeu3D4mE74eeJMUB0rtV3VHv%2FmYbGfg5BToq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL2P93ig%2FlxpH5oj%2FircAwi6hjt2Wesyefdr8Jj2R6l7SHY3V%2BOW2DD0jNSn6PbM1OscaEw59WuMoGNDEMN4Q0El0hZpseNbbG6QS0Ev8TIqXLVUlOSIkILWIEVGetYy2bTD7BuHmX4Xg0TeT3GMlF6i%2BoQs0ilHbtQn5NAvcd1DkNZ92xBmiXY3EwKnRjMvEikmIbnNJXLDNM0sJQ4i4Hw76YVbkCwF8P1kyJ280ytUY58cxZd8R35xM0fP6aMH8E%2BSJvZHBY6hllSfciifbmGHRpP413dGsJXIMyOiK%2FIaI%2BCo28QKW%2Faasq1%2FPap6WgUl1CJltS%2FMmOePYrGZdiUK12aWm7%2Fb6MsL8DvbhiGGb0ApHWZU3mjfzVKXQGLCuw3kjAMWnpVzAyUl4tQIsJd0NkoTaUGlpcjiZCK%2BtinOSThpC7lD6o2HlYHIkLet0eaQsZ8JxygSFquvHSKOCxhKuB7Ekwh7aDynXWoVsbi7Wl6IeZfPLGqADZxFOzlhIQv4D%2F2ECMWmoZKQxWTN1jsrMkhyjNuKeDAhoiVAzf2JAKrmEG1RjjlpmZ89fFYBgH86OGoBQBb5AAW4xY0q3sasrDNVjXO6TummJkrLQzZyZjSAZRW6v6Kpevpl0Gg6Tv98eMY8Ci4Q4hBvMOmw0sMGOqUBxbsAA3gqXKrvFFx5Rwmcdnks%2Fdkig5QV45zClfNLJCv1bNq70kOStzxgaaXhFpMF5jl%2BnaneW4EhPrUjyPz%2BPQwntPXhZGn%2Bzi67QdV%2F6J6Q52WwrkPUbeyyLuOXUVRIEhubBafT%2BK8IIV7lRmrnZP8UcG50MG5lfunAgAmjhoGFNd7rbo%2BITyOQ3u9Tb0PXVpRfRg5vIiuS1lDXEIQZ%2F1X8PBPd&X-Amz-Signature=0dd4a9da6284d9dc7a60005721c4cd12b6692966e45c0a586164f00b9e5933b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CDIJKW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDW1ZDHEMOeZVVyGuLqzUHpzru0IR1ZJWt6eTSOf5j8lQIgX%2BvUmoweMeu3D4mE74eeJMUB0rtV3VHv%2FmYbGfg5BToq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL2P93ig%2FlxpH5oj%2FircAwi6hjt2Wesyefdr8Jj2R6l7SHY3V%2BOW2DD0jNSn6PbM1OscaEw59WuMoGNDEMN4Q0El0hZpseNbbG6QS0Ev8TIqXLVUlOSIkILWIEVGetYy2bTD7BuHmX4Xg0TeT3GMlF6i%2BoQs0ilHbtQn5NAvcd1DkNZ92xBmiXY3EwKnRjMvEikmIbnNJXLDNM0sJQ4i4Hw76YVbkCwF8P1kyJ280ytUY58cxZd8R35xM0fP6aMH8E%2BSJvZHBY6hllSfciifbmGHRpP413dGsJXIMyOiK%2FIaI%2BCo28QKW%2Faasq1%2FPap6WgUl1CJltS%2FMmOePYrGZdiUK12aWm7%2Fb6MsL8DvbhiGGb0ApHWZU3mjfzVKXQGLCuw3kjAMWnpVzAyUl4tQIsJd0NkoTaUGlpcjiZCK%2BtinOSThpC7lD6o2HlYHIkLet0eaQsZ8JxygSFquvHSKOCxhKuB7Ekwh7aDynXWoVsbi7Wl6IeZfPLGqADZxFOzlhIQv4D%2F2ECMWmoZKQxWTN1jsrMkhyjNuKeDAhoiVAzf2JAKrmEG1RjjlpmZ89fFYBgH86OGoBQBb5AAW4xY0q3sasrDNVjXO6TummJkrLQzZyZjSAZRW6v6Kpevpl0Gg6Tv98eMY8Ci4Q4hBvMOmw0sMGOqUBxbsAA3gqXKrvFFx5Rwmcdnks%2Fdkig5QV45zClfNLJCv1bNq70kOStzxgaaXhFpMF5jl%2BnaneW4EhPrUjyPz%2BPQwntPXhZGn%2Bzi67QdV%2F6J6Q52WwrkPUbeyyLuOXUVRIEhubBafT%2BK8IIV7lRmrnZP8UcG50MG5lfunAgAmjhoGFNd7rbo%2BITyOQ3u9Tb0PXVpRfRg5vIiuS1lDXEIQZ%2F1X8PBPd&X-Amz-Signature=4969dbb0171aab7c207dbb1e0d683b36bb217c25d7851e0c7b728d974b88b0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
