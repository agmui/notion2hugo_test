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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOCRDEB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeOXthfWrmpuFcd1SMvtI7iK%2Fy4ODyLWCmPAbtQ0DhFAiEA8rn3Yz0bVhz2LUcG00uHuQmbNT0LBsvkxw%2FobF7Glq0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLEsXw76exAjNq%2BxByrcAz%2Fjz8Q1N8oWtz%2Bi9f7XNWdPh%2FSEy5mUzNkP65e7XFUNLmM56sk3oCpytwHG%2Fka4nYyPrIi8JXGw5uVvdyoe51Uu3o1MJ%2B4%2BA4O4O4meC4VO04dE1IieRnJto37KPngA47ijEKbDHbySwjZ4%2FQKrqaGqtIMrpFrGFmdQ7ghh%2FcnXlSleikxRNwro0yQnZEtVjLcVXEWsz7BNoBCxbyTsnbbwNR%2FQ7VQn%2FWO6s1aGVHhy45rbg1mslqL%2FP8kTOmA77aaxBlubOY%2FrMlSflAq1fOMfNn36gbeuSp1NFgKzKa3luu3optT3zUWnAioE0lH2btcD1BO4D2MshJzlo3NagbH%2B26u%2BU4%2BZijlxuA2VTHV44CHmR0JXkdlHZxWAsoAjQGA7XhfeUZD7ykMJujvcM4R0Wwu7oxaHbGnX9uTq28zEgRFxDrRqDjmLNvyWH4JbrI44wu5DbH9AGcpi8iVXkRQzJOJW%2BCnlMqYxymGcrFHehv3Gbl19UWz8C%2BX1FJKdoDowWQfrHr%2FoMzvOJStnyOl0mo6zuF32fCc21gaz5M1MFGfbH4Gg6guwq9BI2C1AZmbS1TeZQOB9UK7YtIEaweC2AIFdx%2BhbhYMnqPiLQ1Gr9bLLaEYKxFc2EnJBMKb2pL4GOqUBZGLg%2FGP%2Fvh9XP6Jcn2UFXzb9FDuT4b4SqTHPnWJZnNV7rgEwZ%2Fgo5f%2Fp1cWeM8Mvs2pWMoD4jjWc%2Fxwm7H9wEaGET7DvEKAqNXRf1r0RSjY9zbKJQXIWeKRcx7UhuxpayMEqOhpMTiUfwf9po44%2B2rllDYtuQo86aHdAYFSQZdHhy3DNoh4rEcs02L3aRLH4rg1dAnXY%2BGrr%2Bjo6N4DEdhYWqj%2Bw&X-Amz-Signature=febac40236effa3662e477aef2aaa19b2b411fa15e3b976499631ebdd209e96a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOCRDEB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeOXthfWrmpuFcd1SMvtI7iK%2Fy4ODyLWCmPAbtQ0DhFAiEA8rn3Yz0bVhz2LUcG00uHuQmbNT0LBsvkxw%2FobF7Glq0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLEsXw76exAjNq%2BxByrcAz%2Fjz8Q1N8oWtz%2Bi9f7XNWdPh%2FSEy5mUzNkP65e7XFUNLmM56sk3oCpytwHG%2Fka4nYyPrIi8JXGw5uVvdyoe51Uu3o1MJ%2B4%2BA4O4O4meC4VO04dE1IieRnJto37KPngA47ijEKbDHbySwjZ4%2FQKrqaGqtIMrpFrGFmdQ7ghh%2FcnXlSleikxRNwro0yQnZEtVjLcVXEWsz7BNoBCxbyTsnbbwNR%2FQ7VQn%2FWO6s1aGVHhy45rbg1mslqL%2FP8kTOmA77aaxBlubOY%2FrMlSflAq1fOMfNn36gbeuSp1NFgKzKa3luu3optT3zUWnAioE0lH2btcD1BO4D2MshJzlo3NagbH%2B26u%2BU4%2BZijlxuA2VTHV44CHmR0JXkdlHZxWAsoAjQGA7XhfeUZD7ykMJujvcM4R0Wwu7oxaHbGnX9uTq28zEgRFxDrRqDjmLNvyWH4JbrI44wu5DbH9AGcpi8iVXkRQzJOJW%2BCnlMqYxymGcrFHehv3Gbl19UWz8C%2BX1FJKdoDowWQfrHr%2FoMzvOJStnyOl0mo6zuF32fCc21gaz5M1MFGfbH4Gg6guwq9BI2C1AZmbS1TeZQOB9UK7YtIEaweC2AIFdx%2BhbhYMnqPiLQ1Gr9bLLaEYKxFc2EnJBMKb2pL4GOqUBZGLg%2FGP%2Fvh9XP6Jcn2UFXzb9FDuT4b4SqTHPnWJZnNV7rgEwZ%2Fgo5f%2Fp1cWeM8Mvs2pWMoD4jjWc%2Fxwm7H9wEaGET7DvEKAqNXRf1r0RSjY9zbKJQXIWeKRcx7UhuxpayMEqOhpMTiUfwf9po44%2B2rllDYtuQo86aHdAYFSQZdHhy3DNoh4rEcs02L3aRLH4rg1dAnXY%2BGrr%2Bjo6N4DEdhYWqj%2Bw&X-Amz-Signature=cdf5de43181c9de738358d5d2185b00c14b9f3a3a366e1fcce12e30c6a6c22cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOCRDEB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeOXthfWrmpuFcd1SMvtI7iK%2Fy4ODyLWCmPAbtQ0DhFAiEA8rn3Yz0bVhz2LUcG00uHuQmbNT0LBsvkxw%2FobF7Glq0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLEsXw76exAjNq%2BxByrcAz%2Fjz8Q1N8oWtz%2Bi9f7XNWdPh%2FSEy5mUzNkP65e7XFUNLmM56sk3oCpytwHG%2Fka4nYyPrIi8JXGw5uVvdyoe51Uu3o1MJ%2B4%2BA4O4O4meC4VO04dE1IieRnJto37KPngA47ijEKbDHbySwjZ4%2FQKrqaGqtIMrpFrGFmdQ7ghh%2FcnXlSleikxRNwro0yQnZEtVjLcVXEWsz7BNoBCxbyTsnbbwNR%2FQ7VQn%2FWO6s1aGVHhy45rbg1mslqL%2FP8kTOmA77aaxBlubOY%2FrMlSflAq1fOMfNn36gbeuSp1NFgKzKa3luu3optT3zUWnAioE0lH2btcD1BO4D2MshJzlo3NagbH%2B26u%2BU4%2BZijlxuA2VTHV44CHmR0JXkdlHZxWAsoAjQGA7XhfeUZD7ykMJujvcM4R0Wwu7oxaHbGnX9uTq28zEgRFxDrRqDjmLNvyWH4JbrI44wu5DbH9AGcpi8iVXkRQzJOJW%2BCnlMqYxymGcrFHehv3Gbl19UWz8C%2BX1FJKdoDowWQfrHr%2FoMzvOJStnyOl0mo6zuF32fCc21gaz5M1MFGfbH4Gg6guwq9BI2C1AZmbS1TeZQOB9UK7YtIEaweC2AIFdx%2BhbhYMnqPiLQ1Gr9bLLaEYKxFc2EnJBMKb2pL4GOqUBZGLg%2FGP%2Fvh9XP6Jcn2UFXzb9FDuT4b4SqTHPnWJZnNV7rgEwZ%2Fgo5f%2Fp1cWeM8Mvs2pWMoD4jjWc%2Fxwm7H9wEaGET7DvEKAqNXRf1r0RSjY9zbKJQXIWeKRcx7UhuxpayMEqOhpMTiUfwf9po44%2B2rllDYtuQo86aHdAYFSQZdHhy3DNoh4rEcs02L3aRLH4rg1dAnXY%2BGrr%2Bjo6N4DEdhYWqj%2Bw&X-Amz-Signature=c7c2dfc06e88684677d3aaa0b9d7dfdfddd24975034e19af66c0f59814ececeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
