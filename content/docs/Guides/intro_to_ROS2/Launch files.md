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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7BRFT2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtWSukSdCrKmWns8%2FLbviWM9lGrrvMTo6S1n%2BtUOvSXgIgDIY6BlggNo6EN7JYc6tXjBRnzsRvOg%2Bi6ARICDon0%2BEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDB0yFMC3y0QAbichLyrcA2mNHTzA0mJZH07RLge%2BMgatwFpRPgRaYKzeCTlmbatjbxUkLiJ0Z3c08fxI6lvt%2BTXyd4VvLKt4RZMd8PVCiSGEvKCl0q3SORcbAhi4XghY3p%2BCveF%2BnW4BVLLCpxjeUoksc0aDQ9u4ckVZZ05FBQiIt93Pc9O%2FWGI0EnZZiDmymLqDuFzM8UjcUNCnQN1jo1VOkJpg72ynVTtrFFaBiRWRzKOd1i7tKtmDdzAGsy83FLjJnMwi8Wvy9gGaDRxogl8umJXfCf2RMTHHip0JXO%2FIhlAx%2BuX5lSH57RvXljGqYQkS%2Bhz5fs1IlalYHPX3oU2%2FyF72rS9jNVv6QtGPxgg%2FgeBq8aU0waOPXCKKXFBVwrN69EDn%2FDRkZt0eAP25KlleygmMDtkf6PtzSV6cLGDLJ7cTAo8FiJluMBy%2FEIYf2hjgMDHVAOyd3i56OoF2B1e%2BWQNGy0rfuJnIsnb0aokQgW3d3KjygJ7mdCP4Hzay4Wqq6WRdnh2yUKVAbK2TWWvAFVG8NLXbmjHV25w3JLjRc9bK1BzCa5Kvp2V1bBjcJvy5kwEkrrnJZCINrle9VPpFs9BtzOU0NM1AkVvzx%2B7CULljmHSwUV6CY1wHlrN8qYVD1XaifubOugHRMKqYysEGOqUBR1A5w5BsjFzBE0aWTv84PD41FChBQoyRpgOyrXuzXB1JmUg9HStIzjmwSfaHhEZMML1WWCS1RqyxLftmmM8g7EEO%2BQzOwe3JzryMsr2O4AlTH5E%2BW09XRFjupSsprk9TbNFoSsEyBoIkfkmUBzbF%2BejDO5YJpsJtRfi8qPSXFVNeqVZsGkwfBRc%2FCkAqGbu6x8nnFmbE3WjuHZhciuVgjMJyWYLW&X-Amz-Signature=7691a75c4904865155538f74710c346dd2b1f3a8e200e34db5ef2786210490fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7BRFT2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtWSukSdCrKmWns8%2FLbviWM9lGrrvMTo6S1n%2BtUOvSXgIgDIY6BlggNo6EN7JYc6tXjBRnzsRvOg%2Bi6ARICDon0%2BEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDB0yFMC3y0QAbichLyrcA2mNHTzA0mJZH07RLge%2BMgatwFpRPgRaYKzeCTlmbatjbxUkLiJ0Z3c08fxI6lvt%2BTXyd4VvLKt4RZMd8PVCiSGEvKCl0q3SORcbAhi4XghY3p%2BCveF%2BnW4BVLLCpxjeUoksc0aDQ9u4ckVZZ05FBQiIt93Pc9O%2FWGI0EnZZiDmymLqDuFzM8UjcUNCnQN1jo1VOkJpg72ynVTtrFFaBiRWRzKOd1i7tKtmDdzAGsy83FLjJnMwi8Wvy9gGaDRxogl8umJXfCf2RMTHHip0JXO%2FIhlAx%2BuX5lSH57RvXljGqYQkS%2Bhz5fs1IlalYHPX3oU2%2FyF72rS9jNVv6QtGPxgg%2FgeBq8aU0waOPXCKKXFBVwrN69EDn%2FDRkZt0eAP25KlleygmMDtkf6PtzSV6cLGDLJ7cTAo8FiJluMBy%2FEIYf2hjgMDHVAOyd3i56OoF2B1e%2BWQNGy0rfuJnIsnb0aokQgW3d3KjygJ7mdCP4Hzay4Wqq6WRdnh2yUKVAbK2TWWvAFVG8NLXbmjHV25w3JLjRc9bK1BzCa5Kvp2V1bBjcJvy5kwEkrrnJZCINrle9VPpFs9BtzOU0NM1AkVvzx%2B7CULljmHSwUV6CY1wHlrN8qYVD1XaifubOugHRMKqYysEGOqUBR1A5w5BsjFzBE0aWTv84PD41FChBQoyRpgOyrXuzXB1JmUg9HStIzjmwSfaHhEZMML1WWCS1RqyxLftmmM8g7EEO%2BQzOwe3JzryMsr2O4AlTH5E%2BW09XRFjupSsprk9TbNFoSsEyBoIkfkmUBzbF%2BejDO5YJpsJtRfi8qPSXFVNeqVZsGkwfBRc%2FCkAqGbu6x8nnFmbE3WjuHZhciuVgjMJyWYLW&X-Amz-Signature=f3fd2f1b00c9b7d7c88167c77c74ffe0f24c989d4cf121d82ecf8ea02ec587dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7BRFT2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtWSukSdCrKmWns8%2FLbviWM9lGrrvMTo6S1n%2BtUOvSXgIgDIY6BlggNo6EN7JYc6tXjBRnzsRvOg%2Bi6ARICDon0%2BEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDB0yFMC3y0QAbichLyrcA2mNHTzA0mJZH07RLge%2BMgatwFpRPgRaYKzeCTlmbatjbxUkLiJ0Z3c08fxI6lvt%2BTXyd4VvLKt4RZMd8PVCiSGEvKCl0q3SORcbAhi4XghY3p%2BCveF%2BnW4BVLLCpxjeUoksc0aDQ9u4ckVZZ05FBQiIt93Pc9O%2FWGI0EnZZiDmymLqDuFzM8UjcUNCnQN1jo1VOkJpg72ynVTtrFFaBiRWRzKOd1i7tKtmDdzAGsy83FLjJnMwi8Wvy9gGaDRxogl8umJXfCf2RMTHHip0JXO%2FIhlAx%2BuX5lSH57RvXljGqYQkS%2Bhz5fs1IlalYHPX3oU2%2FyF72rS9jNVv6QtGPxgg%2FgeBq8aU0waOPXCKKXFBVwrN69EDn%2FDRkZt0eAP25KlleygmMDtkf6PtzSV6cLGDLJ7cTAo8FiJluMBy%2FEIYf2hjgMDHVAOyd3i56OoF2B1e%2BWQNGy0rfuJnIsnb0aokQgW3d3KjygJ7mdCP4Hzay4Wqq6WRdnh2yUKVAbK2TWWvAFVG8NLXbmjHV25w3JLjRc9bK1BzCa5Kvp2V1bBjcJvy5kwEkrrnJZCINrle9VPpFs9BtzOU0NM1AkVvzx%2B7CULljmHSwUV6CY1wHlrN8qYVD1XaifubOugHRMKqYysEGOqUBR1A5w5BsjFzBE0aWTv84PD41FChBQoyRpgOyrXuzXB1JmUg9HStIzjmwSfaHhEZMML1WWCS1RqyxLftmmM8g7EEO%2BQzOwe3JzryMsr2O4AlTH5E%2BW09XRFjupSsprk9TbNFoSsEyBoIkfkmUBzbF%2BejDO5YJpsJtRfi8qPSXFVNeqVZsGkwfBRc%2FCkAqGbu6x8nnFmbE3WjuHZhciuVgjMJyWYLW&X-Amz-Signature=b0eabd8c39899b21a3ce2e19254117bbfc109851efff0b1e0c4081b7611b246e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
