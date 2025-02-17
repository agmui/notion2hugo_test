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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ASHXK6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDvTEuJsH82UB94HUTebRyIDCeNyrwbl0v1gJzj%2FzbBsAIgc8vlkl1HLQk36zguQ%2FvYDIXIlZ6hS1kNGf4MjyVebtUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJw01L8fNkFse%2F0TwircA%2BlJuPgsl5JMsoD78ixxvHzVS1dmKkmyn5eg1p8eIOCCEdpiuETQcMyCpqcBALmUC819svptw1jMGm6Zbb6uIfur5ooQxmhJ%2FPcq7GR71fqN%2Bk7jEsRCpjYzC5MagBZXkIHYelpDVJEqYS08Ml7p9o6xTCyT682CEECF6uBIOiMGoTXajpxZUy3sHd3w9JWGGeqMI4BLdzM%2FyhFMsoeJJzyQ%2BJh8MYc%2BJRs%2BzHf7uPafSlSkyPF3QIW%2F5JSyEm7LpND0vgPy3sUcXnpdI8RZr1958CBSj2V%2Bi3E6sxdRwzqiikKqV%2BNfNZsjRLZdMeqRDb77gYVIEO3nDABlUZqJ%2FoX5PJuB2jy20L50ujrQrTOwMNmrwJMFmMPqd0naMoaGgCuvb5QdUUEnHLlkm5k%2BYB8gS2PZLIQ3Al37RfBCFSMuoGF9mpSGYK9K4su9ZWW%2F52kl0%2FzhBtTb6k9w6WR9y0VgSeiAmjk25z8yBkY8ORuRTH6hZkMO1h22A%2Bnl4PI%2B3WEN%2B5U1IzKUcEtaGWw2mnCyc52iCSTRzIWI7ZoPObRecfG3zO73PCG%2BK6hv7lX4rGDzCKCxEdRuNTQgFxZ%2B%2FGl8WV5s0565BidO2V%2Fig7%2BZkO3qeC8uyyegZ5mnMPyUy70GOqUBidZJvaeED1PsYpqhEOHe%2F6m68yR52ejZUcP2RIV6QfQowEAj1pQa9pJNAfEED%2BMRKzP6m0%2FGkVxeI2Gcog5EW%2BYgHC7m%2BLbsFJxLVplAp59cJSggWwvBeW%2FfuPGGcsXmNn37Y2w2vFtdrKFdtD%2BTbDFaZ%2F2kvTMEADj8T4yrDXuR5UD%2FMuR3qlt%2F4vOowXWMI8Kqmc56ny%2FeVnlSt4M14fNgG%2FhZ&X-Amz-Signature=0b698b65a65b0447f437238560f03f0fedd6082a172f33dfda20dd654cd62ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ASHXK6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDvTEuJsH82UB94HUTebRyIDCeNyrwbl0v1gJzj%2FzbBsAIgc8vlkl1HLQk36zguQ%2FvYDIXIlZ6hS1kNGf4MjyVebtUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJw01L8fNkFse%2F0TwircA%2BlJuPgsl5JMsoD78ixxvHzVS1dmKkmyn5eg1p8eIOCCEdpiuETQcMyCpqcBALmUC819svptw1jMGm6Zbb6uIfur5ooQxmhJ%2FPcq7GR71fqN%2Bk7jEsRCpjYzC5MagBZXkIHYelpDVJEqYS08Ml7p9o6xTCyT682CEECF6uBIOiMGoTXajpxZUy3sHd3w9JWGGeqMI4BLdzM%2FyhFMsoeJJzyQ%2BJh8MYc%2BJRs%2BzHf7uPafSlSkyPF3QIW%2F5JSyEm7LpND0vgPy3sUcXnpdI8RZr1958CBSj2V%2Bi3E6sxdRwzqiikKqV%2BNfNZsjRLZdMeqRDb77gYVIEO3nDABlUZqJ%2FoX5PJuB2jy20L50ujrQrTOwMNmrwJMFmMPqd0naMoaGgCuvb5QdUUEnHLlkm5k%2BYB8gS2PZLIQ3Al37RfBCFSMuoGF9mpSGYK9K4su9ZWW%2F52kl0%2FzhBtTb6k9w6WR9y0VgSeiAmjk25z8yBkY8ORuRTH6hZkMO1h22A%2Bnl4PI%2B3WEN%2B5U1IzKUcEtaGWw2mnCyc52iCSTRzIWI7ZoPObRecfG3zO73PCG%2BK6hv7lX4rGDzCKCxEdRuNTQgFxZ%2B%2FGl8WV5s0565BidO2V%2Fig7%2BZkO3qeC8uyyegZ5mnMPyUy70GOqUBidZJvaeED1PsYpqhEOHe%2F6m68yR52ejZUcP2RIV6QfQowEAj1pQa9pJNAfEED%2BMRKzP6m0%2FGkVxeI2Gcog5EW%2BYgHC7m%2BLbsFJxLVplAp59cJSggWwvBeW%2FfuPGGcsXmNn37Y2w2vFtdrKFdtD%2BTbDFaZ%2F2kvTMEADj8T4yrDXuR5UD%2FMuR3qlt%2F4vOowXWMI8Kqmc56ny%2FeVnlSt4M14fNgG%2FhZ&X-Amz-Signature=8ba4fcf15322166e5d6ad8ab4c1b8ae2cf4dc9037e2e7afd38168b2e40007f00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ASHXK6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDvTEuJsH82UB94HUTebRyIDCeNyrwbl0v1gJzj%2FzbBsAIgc8vlkl1HLQk36zguQ%2FvYDIXIlZ6hS1kNGf4MjyVebtUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJw01L8fNkFse%2F0TwircA%2BlJuPgsl5JMsoD78ixxvHzVS1dmKkmyn5eg1p8eIOCCEdpiuETQcMyCpqcBALmUC819svptw1jMGm6Zbb6uIfur5ooQxmhJ%2FPcq7GR71fqN%2Bk7jEsRCpjYzC5MagBZXkIHYelpDVJEqYS08Ml7p9o6xTCyT682CEECF6uBIOiMGoTXajpxZUy3sHd3w9JWGGeqMI4BLdzM%2FyhFMsoeJJzyQ%2BJh8MYc%2BJRs%2BzHf7uPafSlSkyPF3QIW%2F5JSyEm7LpND0vgPy3sUcXnpdI8RZr1958CBSj2V%2Bi3E6sxdRwzqiikKqV%2BNfNZsjRLZdMeqRDb77gYVIEO3nDABlUZqJ%2FoX5PJuB2jy20L50ujrQrTOwMNmrwJMFmMPqd0naMoaGgCuvb5QdUUEnHLlkm5k%2BYB8gS2PZLIQ3Al37RfBCFSMuoGF9mpSGYK9K4su9ZWW%2F52kl0%2FzhBtTb6k9w6WR9y0VgSeiAmjk25z8yBkY8ORuRTH6hZkMO1h22A%2Bnl4PI%2B3WEN%2B5U1IzKUcEtaGWw2mnCyc52iCSTRzIWI7ZoPObRecfG3zO73PCG%2BK6hv7lX4rGDzCKCxEdRuNTQgFxZ%2B%2FGl8WV5s0565BidO2V%2Fig7%2BZkO3qeC8uyyegZ5mnMPyUy70GOqUBidZJvaeED1PsYpqhEOHe%2F6m68yR52ejZUcP2RIV6QfQowEAj1pQa9pJNAfEED%2BMRKzP6m0%2FGkVxeI2Gcog5EW%2BYgHC7m%2BLbsFJxLVplAp59cJSggWwvBeW%2FfuPGGcsXmNn37Y2w2vFtdrKFdtD%2BTbDFaZ%2F2kvTMEADj8T4yrDXuR5UD%2FMuR3qlt%2F4vOowXWMI8Kqmc56ny%2FeVnlSt4M14fNgG%2FhZ&X-Amz-Signature=5739c3f058feccc586d222e05e98a0a646f0491485a6f643d7794ce4ec377beb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
