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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI754TO2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHTc6IEevdeGnjGPLpsBXeW%2FMY%2BnZ0AHQtNUq%2FI7BweSAiEAw%2BwvFaXSl6OFHSvzLhtcY%2F2FlfFV6TvUBrVL9n1mB0gq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDK5S2emvLYoS67LBayrcA7Vjzrh7R7eNQkP%2B6XDpc2dwecqJMhl8%2FWNjnFo5d37dE%2F0E4lHSdTs4hQNwO8KSsOOIBsycxRjppj%2FvT3wXVU7iCKqY51pKJMeaRkOH%2F1LTMpHJEo6WJd8Q%2Fpg0fx7g%2FeOUDLNPPl6DAkJ2zna7pJGUtyCSPS1S%2Fc3f5xB3kSQuaRp0LIXpYmaS%2BhZtjGZQEKI9b1s8lH2rWd%2BFYuABUO%2FkG5ScGIc%2FSuVIz%2BusqjR%2BeEH0OQbNlNhmo2dL45up3WifssfSsl49gXc1HW%2FDjsDLnlBhg5FigeLl3vgW6XjJsUouIE9XJGlUMWR%2F2iag3DxV4ccv3CUk6DNroap7r5SYrGXmIyuY64Iffze3bm43OVkGccpHtzHbVzCrNE9HZ5ElAjIqCpAjy7kF5Cdf1fV3iS%2BDMGII0gmrOInvresponF1FusOA1miwcNeTZ6irnYXVuFAtDhv1aVxzqvS4ktVl1H2%2B5pCZeoWNHpqsc%2BMCBHOy9%2FTYk8iNbyMr%2FE34V4PJdJiLCEx8xgqLr2m8vSaikbrsSgFgqFp0Bcb9D0Gv5mqwpCMxG4An2mFeJ7udqDLUG2%2FZK6Iu6JUctdUAVfr39mjs4X3Lr%2BOHiMKwdMttAX9KeuIzFOqqAxfMOTY7L4GOqUBYrGDm1N79kHSSJOYdEtWACmuGsKGl1dS4VwtNiw%2BNLluR3RO80kSVSWM8mUAmriCZgRJoJQCBYIxJp%2FHS2HFfDXYJRN%2BJderG8IOiu5yX54MHyOmtR2%2F27lgT3XYzuECh%2F93khxjOqzWp15HIE0DYspxExCaPoG9l32YNm3%2B2P4ouYigw%2B20A7coyLNfWYQhU84EOeDNrtivoU3vuahXjINKdxB2&X-Amz-Signature=8ea7341e32b4111fd106203faf854f90f3e3bec88c9a1f7d2873f2717a416de0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI754TO2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHTc6IEevdeGnjGPLpsBXeW%2FMY%2BnZ0AHQtNUq%2FI7BweSAiEAw%2BwvFaXSl6OFHSvzLhtcY%2F2FlfFV6TvUBrVL9n1mB0gq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDK5S2emvLYoS67LBayrcA7Vjzrh7R7eNQkP%2B6XDpc2dwecqJMhl8%2FWNjnFo5d37dE%2F0E4lHSdTs4hQNwO8KSsOOIBsycxRjppj%2FvT3wXVU7iCKqY51pKJMeaRkOH%2F1LTMpHJEo6WJd8Q%2Fpg0fx7g%2FeOUDLNPPl6DAkJ2zna7pJGUtyCSPS1S%2Fc3f5xB3kSQuaRp0LIXpYmaS%2BhZtjGZQEKI9b1s8lH2rWd%2BFYuABUO%2FkG5ScGIc%2FSuVIz%2BusqjR%2BeEH0OQbNlNhmo2dL45up3WifssfSsl49gXc1HW%2FDjsDLnlBhg5FigeLl3vgW6XjJsUouIE9XJGlUMWR%2F2iag3DxV4ccv3CUk6DNroap7r5SYrGXmIyuY64Iffze3bm43OVkGccpHtzHbVzCrNE9HZ5ElAjIqCpAjy7kF5Cdf1fV3iS%2BDMGII0gmrOInvresponF1FusOA1miwcNeTZ6irnYXVuFAtDhv1aVxzqvS4ktVl1H2%2B5pCZeoWNHpqsc%2BMCBHOy9%2FTYk8iNbyMr%2FE34V4PJdJiLCEx8xgqLr2m8vSaikbrsSgFgqFp0Bcb9D0Gv5mqwpCMxG4An2mFeJ7udqDLUG2%2FZK6Iu6JUctdUAVfr39mjs4X3Lr%2BOHiMKwdMttAX9KeuIzFOqqAxfMOTY7L4GOqUBYrGDm1N79kHSSJOYdEtWACmuGsKGl1dS4VwtNiw%2BNLluR3RO80kSVSWM8mUAmriCZgRJoJQCBYIxJp%2FHS2HFfDXYJRN%2BJderG8IOiu5yX54MHyOmtR2%2F27lgT3XYzuECh%2F93khxjOqzWp15HIE0DYspxExCaPoG9l32YNm3%2B2P4ouYigw%2B20A7coyLNfWYQhU84EOeDNrtivoU3vuahXjINKdxB2&X-Amz-Signature=d78a002cda69cee7b05e5dd8b2a729dcaa7ff35bd691dc51332caa149d10c224&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI754TO2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHTc6IEevdeGnjGPLpsBXeW%2FMY%2BnZ0AHQtNUq%2FI7BweSAiEAw%2BwvFaXSl6OFHSvzLhtcY%2F2FlfFV6TvUBrVL9n1mB0gq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDK5S2emvLYoS67LBayrcA7Vjzrh7R7eNQkP%2B6XDpc2dwecqJMhl8%2FWNjnFo5d37dE%2F0E4lHSdTs4hQNwO8KSsOOIBsycxRjppj%2FvT3wXVU7iCKqY51pKJMeaRkOH%2F1LTMpHJEo6WJd8Q%2Fpg0fx7g%2FeOUDLNPPl6DAkJ2zna7pJGUtyCSPS1S%2Fc3f5xB3kSQuaRp0LIXpYmaS%2BhZtjGZQEKI9b1s8lH2rWd%2BFYuABUO%2FkG5ScGIc%2FSuVIz%2BusqjR%2BeEH0OQbNlNhmo2dL45up3WifssfSsl49gXc1HW%2FDjsDLnlBhg5FigeLl3vgW6XjJsUouIE9XJGlUMWR%2F2iag3DxV4ccv3CUk6DNroap7r5SYrGXmIyuY64Iffze3bm43OVkGccpHtzHbVzCrNE9HZ5ElAjIqCpAjy7kF5Cdf1fV3iS%2BDMGII0gmrOInvresponF1FusOA1miwcNeTZ6irnYXVuFAtDhv1aVxzqvS4ktVl1H2%2B5pCZeoWNHpqsc%2BMCBHOy9%2FTYk8iNbyMr%2FE34V4PJdJiLCEx8xgqLr2m8vSaikbrsSgFgqFp0Bcb9D0Gv5mqwpCMxG4An2mFeJ7udqDLUG2%2FZK6Iu6JUctdUAVfr39mjs4X3Lr%2BOHiMKwdMttAX9KeuIzFOqqAxfMOTY7L4GOqUBYrGDm1N79kHSSJOYdEtWACmuGsKGl1dS4VwtNiw%2BNLluR3RO80kSVSWM8mUAmriCZgRJoJQCBYIxJp%2FHS2HFfDXYJRN%2BJderG8IOiu5yX54MHyOmtR2%2F27lgT3XYzuECh%2F93khxjOqzWp15HIE0DYspxExCaPoG9l32YNm3%2B2P4ouYigw%2B20A7coyLNfWYQhU84EOeDNrtivoU3vuahXjINKdxB2&X-Amz-Signature=bdc1f314069972c604effa70dde42958ff9b98a58103639724fced284a1a0385&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
