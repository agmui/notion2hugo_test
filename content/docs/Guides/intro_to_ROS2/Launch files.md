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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQ7GPIW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDZm5QeQpCRbrBSKzcH%2FbGSdFMf4XzNVCFpW4y1WdHnSAIgaCeI7xEGekgsac9DAmO45w030mXRlkBOiV9iHG5OiYwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU1EU1E%2BwaXI4g%2FhyrcAzfRj%2FBXvI2CwymsP%2F7jBVHR0PjSGhQVp9XdTshbkDUkn9AEV93NHqURwct9NzDc8UO2RG2A52ipug0SFC6eGAm%2B93wVhkyOMoOm7XfwTQ8qDh%2BMdMB0SGdZSvArwMQHbT1d0zHhaS6Ad44k0L98rtU6shurnObIjLd8yYmEOtKmVkyB0bQrbhauaHM9VXPQuwTWG9ogCS42%2FOb0jdaKmlFotxTOtgMWwsyTmeB0rP4hb130tQzwWnJt7ZsR9rYgCvkSX091CGcv2v5Ro1vhL%2F1jWMoLxSCw827ERQgE0eITnLaOTudzJBNszpu%2BBpNBYwcsH6Yd0xg2kgJfDKutAzWDnZb1x8lVDlnxbrSnD62NSoFrt%2BxrORG%2FlIej7tLcp5oELFmasfzi3v30jn%2FkApMb6rWokV5OMJ%2B0kCyj54zWX6a0hEaF1Msq3h3VgNNKy9iLWIc3D6DfNPxPWXBpcZ9D%2BfM%2FIdlmMEd7uqP3wfmkm0%2BBZ1tFMLE9kLM7FO%2FuY05NjefvIgvUE%2ByeRcyA7TmPbeCeWBBlGno70xCTDqIxU7QAONj7N26B8TPhB%2FvL2p9BZ9XSzPZB3lNhINB89Mni1TgDEVfFVpZSZyt94W7AYKB0qsUDs3592UzgMO7XzMAGOqUBtNuMa0%2Ffh2d0sTGiw6DmHEzGSQwcJpP5lrWDsYfX%2FskSMiFPaeSwl5bBkdc%2BqO8IJ%2FG2XyPt86hCltwhVlko0k4dWNYSt7%2BFO0BB5ki4fHO2puO70s4KUY1vJHbl8T7OkT%2FsdJ%2BmNk1ivXhXbPZ%2FUG5ahO93mNl%2Bey3r0aUgCe4z13ISKJ5ClG1lSqh5gr6eIDWP9pnFfI5RxHHacO2oxuPMP%2FZm&X-Amz-Signature=a5f46cafa46b567a748e6d7089dee754dec59887a58d6f79bc9307ba00564068&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQ7GPIW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDZm5QeQpCRbrBSKzcH%2FbGSdFMf4XzNVCFpW4y1WdHnSAIgaCeI7xEGekgsac9DAmO45w030mXRlkBOiV9iHG5OiYwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU1EU1E%2BwaXI4g%2FhyrcAzfRj%2FBXvI2CwymsP%2F7jBVHR0PjSGhQVp9XdTshbkDUkn9AEV93NHqURwct9NzDc8UO2RG2A52ipug0SFC6eGAm%2B93wVhkyOMoOm7XfwTQ8qDh%2BMdMB0SGdZSvArwMQHbT1d0zHhaS6Ad44k0L98rtU6shurnObIjLd8yYmEOtKmVkyB0bQrbhauaHM9VXPQuwTWG9ogCS42%2FOb0jdaKmlFotxTOtgMWwsyTmeB0rP4hb130tQzwWnJt7ZsR9rYgCvkSX091CGcv2v5Ro1vhL%2F1jWMoLxSCw827ERQgE0eITnLaOTudzJBNszpu%2BBpNBYwcsH6Yd0xg2kgJfDKutAzWDnZb1x8lVDlnxbrSnD62NSoFrt%2BxrORG%2FlIej7tLcp5oELFmasfzi3v30jn%2FkApMb6rWokV5OMJ%2B0kCyj54zWX6a0hEaF1Msq3h3VgNNKy9iLWIc3D6DfNPxPWXBpcZ9D%2BfM%2FIdlmMEd7uqP3wfmkm0%2BBZ1tFMLE9kLM7FO%2FuY05NjefvIgvUE%2ByeRcyA7TmPbeCeWBBlGno70xCTDqIxU7QAONj7N26B8TPhB%2FvL2p9BZ9XSzPZB3lNhINB89Mni1TgDEVfFVpZSZyt94W7AYKB0qsUDs3592UzgMO7XzMAGOqUBtNuMa0%2Ffh2d0sTGiw6DmHEzGSQwcJpP5lrWDsYfX%2FskSMiFPaeSwl5bBkdc%2BqO8IJ%2FG2XyPt86hCltwhVlko0k4dWNYSt7%2BFO0BB5ki4fHO2puO70s4KUY1vJHbl8T7OkT%2FsdJ%2BmNk1ivXhXbPZ%2FUG5ahO93mNl%2Bey3r0aUgCe4z13ISKJ5ClG1lSqh5gr6eIDWP9pnFfI5RxHHacO2oxuPMP%2FZm&X-Amz-Signature=b515a7a9e35266c870fe1471fec2f52b65f2ccfcb2e54b1c371933aa7f3af373&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQ7GPIW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDZm5QeQpCRbrBSKzcH%2FbGSdFMf4XzNVCFpW4y1WdHnSAIgaCeI7xEGekgsac9DAmO45w030mXRlkBOiV9iHG5OiYwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU1EU1E%2BwaXI4g%2FhyrcAzfRj%2FBXvI2CwymsP%2F7jBVHR0PjSGhQVp9XdTshbkDUkn9AEV93NHqURwct9NzDc8UO2RG2A52ipug0SFC6eGAm%2B93wVhkyOMoOm7XfwTQ8qDh%2BMdMB0SGdZSvArwMQHbT1d0zHhaS6Ad44k0L98rtU6shurnObIjLd8yYmEOtKmVkyB0bQrbhauaHM9VXPQuwTWG9ogCS42%2FOb0jdaKmlFotxTOtgMWwsyTmeB0rP4hb130tQzwWnJt7ZsR9rYgCvkSX091CGcv2v5Ro1vhL%2F1jWMoLxSCw827ERQgE0eITnLaOTudzJBNszpu%2BBpNBYwcsH6Yd0xg2kgJfDKutAzWDnZb1x8lVDlnxbrSnD62NSoFrt%2BxrORG%2FlIej7tLcp5oELFmasfzi3v30jn%2FkApMb6rWokV5OMJ%2B0kCyj54zWX6a0hEaF1Msq3h3VgNNKy9iLWIc3D6DfNPxPWXBpcZ9D%2BfM%2FIdlmMEd7uqP3wfmkm0%2BBZ1tFMLE9kLM7FO%2FuY05NjefvIgvUE%2ByeRcyA7TmPbeCeWBBlGno70xCTDqIxU7QAONj7N26B8TPhB%2FvL2p9BZ9XSzPZB3lNhINB89Mni1TgDEVfFVpZSZyt94W7AYKB0qsUDs3592UzgMO7XzMAGOqUBtNuMa0%2Ffh2d0sTGiw6DmHEzGSQwcJpP5lrWDsYfX%2FskSMiFPaeSwl5bBkdc%2BqO8IJ%2FG2XyPt86hCltwhVlko0k4dWNYSt7%2BFO0BB5ki4fHO2puO70s4KUY1vJHbl8T7OkT%2FsdJ%2BmNk1ivXhXbPZ%2FUG5ahO93mNl%2Bey3r0aUgCe4z13ISKJ5ClG1lSqh5gr6eIDWP9pnFfI5RxHHacO2oxuPMP%2FZm&X-Amz-Signature=713b9cfb7aba2a86d3662b5235d50263db0890276d98c9762e9a00dcadbc5e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
