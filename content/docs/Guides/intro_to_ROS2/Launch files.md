---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642B4KXYD%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCJNSh40vGziuhTWKsuPpGgI6mENJT5GNZUuZAhGPWTAiEAqhfHlmHItXM%2Bd0aWfTVFs9ilRY%2BZv%2BMm%2FcjZryK264Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKMiD%2FnNsnn17VHWgSrcA1tEojOWzTD59R%2BeLCNX8tLyQxebS8ee5d6U5w%2BhtgtKOoGyVEeagH3GUHSv1OcSwqa0xrVdQzjrFv5bwOOaOuo10i8Yfc9wc%2BvOwrjXRtxPgm6iUjyb%2FmdG5ipEMs7ImtrRss62CbZu1UKD5wgcaShE8dQyAnUSM5CaaMdxvW2bZi0hwgtioFKmGIDeg5rxRXLBDc2%2FSyg6%2BWAOkjvtK6J6k7CR%2Fp8sw7Rs70hnc5Y7lvdVSAptWgZ8gRrL5lXYGka8ddvdc%2BlZv2t8FoicDmoxqNdIr0QzKPQENDFvXGMMUd1uDboBCVqWwRRERiByij%2FiCA%2FIcdTwXRARic8Ljb%2BxCJ9LAFcUwXMs9mvD%2BpGU2TdqDiDmcUVbeCRDr65Raes5kKrB32dSu%2BoPKSy9tYaN%2F1uUQSJ%2F0tkZJtNMtGWGGK9%2FJsKJNcxfhOdTAEwOce0mqv%2BVNzyfOFGA6UPK1BXZ3Bt09giukLjmkOHq1aowE8NBlY8r36HDRwpujX2sy5bIb1uGhkjOvACVHpD6e8rnuM8IU%2FCI%2F%2FdK2QR6gqtkUCI4AlohsNPmCs73bIUEsf0qvW7pZlwJcYY0ePZhiuLwD8TuMA%2BCXtvaSfzAVSMmqXO5dyq%2FWqpl0%2FUhMIHqn8wGOqUBd5w0Ft1uxOr5KwxOYEKedSEoHyCpEPi8gafY3I6tRhXqVZdVwDLaFBUphnz6N%2FCNjk1viNsrIHR7448oTjrtvritKqmhXZVkgIKao7KbLrxruGx1ho0baDsSUB3Q5ekZxl9CIJof4%2FwmOu3YbCeB2dSBuclsqmzdLpi%2FsoFLrOfetHPnQ0CTbc%2FH%2Fv3z1VFUfG36X8m0LZl41Gn73cPyQMW%2F1CRa&X-Amz-Signature=4a95e73694fd86a3dbc23c98abb0056488a4a3ab664b6ce55f412b9ccc7bb25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642B4KXYD%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCJNSh40vGziuhTWKsuPpGgI6mENJT5GNZUuZAhGPWTAiEAqhfHlmHItXM%2Bd0aWfTVFs9ilRY%2BZv%2BMm%2FcjZryK264Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKMiD%2FnNsnn17VHWgSrcA1tEojOWzTD59R%2BeLCNX8tLyQxebS8ee5d6U5w%2BhtgtKOoGyVEeagH3GUHSv1OcSwqa0xrVdQzjrFv5bwOOaOuo10i8Yfc9wc%2BvOwrjXRtxPgm6iUjyb%2FmdG5ipEMs7ImtrRss62CbZu1UKD5wgcaShE8dQyAnUSM5CaaMdxvW2bZi0hwgtioFKmGIDeg5rxRXLBDc2%2FSyg6%2BWAOkjvtK6J6k7CR%2Fp8sw7Rs70hnc5Y7lvdVSAptWgZ8gRrL5lXYGka8ddvdc%2BlZv2t8FoicDmoxqNdIr0QzKPQENDFvXGMMUd1uDboBCVqWwRRERiByij%2FiCA%2FIcdTwXRARic8Ljb%2BxCJ9LAFcUwXMs9mvD%2BpGU2TdqDiDmcUVbeCRDr65Raes5kKrB32dSu%2BoPKSy9tYaN%2F1uUQSJ%2F0tkZJtNMtGWGGK9%2FJsKJNcxfhOdTAEwOce0mqv%2BVNzyfOFGA6UPK1BXZ3Bt09giukLjmkOHq1aowE8NBlY8r36HDRwpujX2sy5bIb1uGhkjOvACVHpD6e8rnuM8IU%2FCI%2F%2FdK2QR6gqtkUCI4AlohsNPmCs73bIUEsf0qvW7pZlwJcYY0ePZhiuLwD8TuMA%2BCXtvaSfzAVSMmqXO5dyq%2FWqpl0%2FUhMIHqn8wGOqUBd5w0Ft1uxOr5KwxOYEKedSEoHyCpEPi8gafY3I6tRhXqVZdVwDLaFBUphnz6N%2FCNjk1viNsrIHR7448oTjrtvritKqmhXZVkgIKao7KbLrxruGx1ho0baDsSUB3Q5ekZxl9CIJof4%2FwmOu3YbCeB2dSBuclsqmzdLpi%2FsoFLrOfetHPnQ0CTbc%2FH%2Fv3z1VFUfG36X8m0LZl41Gn73cPyQMW%2F1CRa&X-Amz-Signature=284d1ef921ddf553f37d39bc835189c513b6bbb6aecdb0c2923f32dc7da5eb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642B4KXYD%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCJNSh40vGziuhTWKsuPpGgI6mENJT5GNZUuZAhGPWTAiEAqhfHlmHItXM%2Bd0aWfTVFs9ilRY%2BZv%2BMm%2FcjZryK264Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKMiD%2FnNsnn17VHWgSrcA1tEojOWzTD59R%2BeLCNX8tLyQxebS8ee5d6U5w%2BhtgtKOoGyVEeagH3GUHSv1OcSwqa0xrVdQzjrFv5bwOOaOuo10i8Yfc9wc%2BvOwrjXRtxPgm6iUjyb%2FmdG5ipEMs7ImtrRss62CbZu1UKD5wgcaShE8dQyAnUSM5CaaMdxvW2bZi0hwgtioFKmGIDeg5rxRXLBDc2%2FSyg6%2BWAOkjvtK6J6k7CR%2Fp8sw7Rs70hnc5Y7lvdVSAptWgZ8gRrL5lXYGka8ddvdc%2BlZv2t8FoicDmoxqNdIr0QzKPQENDFvXGMMUd1uDboBCVqWwRRERiByij%2FiCA%2FIcdTwXRARic8Ljb%2BxCJ9LAFcUwXMs9mvD%2BpGU2TdqDiDmcUVbeCRDr65Raes5kKrB32dSu%2BoPKSy9tYaN%2F1uUQSJ%2F0tkZJtNMtGWGGK9%2FJsKJNcxfhOdTAEwOce0mqv%2BVNzyfOFGA6UPK1BXZ3Bt09giukLjmkOHq1aowE8NBlY8r36HDRwpujX2sy5bIb1uGhkjOvACVHpD6e8rnuM8IU%2FCI%2F%2FdK2QR6gqtkUCI4AlohsNPmCs73bIUEsf0qvW7pZlwJcYY0ePZhiuLwD8TuMA%2BCXtvaSfzAVSMmqXO5dyq%2FWqpl0%2FUhMIHqn8wGOqUBd5w0Ft1uxOr5KwxOYEKedSEoHyCpEPi8gafY3I6tRhXqVZdVwDLaFBUphnz6N%2FCNjk1viNsrIHR7448oTjrtvritKqmhXZVkgIKao7KbLrxruGx1ho0baDsSUB3Q5ekZxl9CIJof4%2FwmOu3YbCeB2dSBuclsqmzdLpi%2FsoFLrOfetHPnQ0CTbc%2FH%2Fv3z1VFUfG36X8m0LZl41Gn73cPyQMW%2F1CRa&X-Amz-Signature=14840dd7d1d0075274faf726e994c6a0de7b3a2eaed980848c6967796be35049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
