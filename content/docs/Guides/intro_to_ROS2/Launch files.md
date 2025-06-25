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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2KALIG%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDyNOd0aPPFhf049mH9S1YSih9NhmVcYrBLnKgQtprCrAiBjgaZHZxcdsetHqaukBOhiuS%2B2ACOMKO7rRH6ZlZkG0Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMnfpbdmRG8mKpMNg6KtwDUXDdqpHDLhVYmUCv3dgGPihAERtqx2TWvs6imDZunkMZr8fJNpHeHJ8oxBADXG9dgirY5yHsazvg9PdzlyJrPM3tVelDfKFGPKX%2BKlvROCV0TY3pTXiHjkYtn0NaDmDccRmSK1papNt%2FexTrBGYTNodIbzh%2F95RcsNiK8wDdRsR3RifGgBFxJOywlQcDvNkeYvIxb%2BcIZyq1g83rJC9J5hWVQhSQqyE2oZGldOTa3HmroU5LObUrY55fi%2FDsYuIwIOu9twVsGJzIdD5li87tLRTzM380OnmYxAsW%2FXV%2BKLb9jiOhtiYBslU8SFLuD%2Bo19xn03gWezsjEOFPXooh8tSnODZeLslw8lRtrQFjagLtfjM903m3HF8AMTcg3JZ5veFRdFyblduSINwO1eYRMzp%2B68v6LyoyC83pScyQbg%2FiN1JgAwxpG4BfzGEa9SH2ydKPZ%2FXe6Me0NQP%2F%2FABpO5J3%2FEt1EA7SLtKtZvrzfdVezKOjPdEuJOXDHMu9Rq77TYdfenTf%2Bc294g0Iw5JSPKSHwbGhxpKKSAdzJO%2FU7Nt20wgCm1TRu5SKAFhPIFkjIQnKMRidXRivKZ%2Fz4gPkSGm8rZ0m11mGcETjR7hWqbneOwbhNs2LEbL4lLjUwmZDvwgY6pgHwaYb%2FDOhszr%2F196FgLrqI0EAeHVePlj0oyljgSadcbILGLFcQtUoCDh%2FiFCleQI5UBB8VpD33jEt5rXgsWnBhFtVVP7tR7agKM8cwh1mMU7iaF0efmxDeupDUpMYgDOwoKprtQ%2Fwb5590aLGPVJJsAgHfX68Agzx%2FLLFCSSroGNmvROS77XKWJKaLI4lN%2BFqaxTRZHvtKh41QsUKsrOfwGRFQIQFB&X-Amz-Signature=b17b0829b6806d6f16e2491c78fa14b62a14abdf37f4e27f0cd6a6e608aa36e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2KALIG%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDyNOd0aPPFhf049mH9S1YSih9NhmVcYrBLnKgQtprCrAiBjgaZHZxcdsetHqaukBOhiuS%2B2ACOMKO7rRH6ZlZkG0Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMnfpbdmRG8mKpMNg6KtwDUXDdqpHDLhVYmUCv3dgGPihAERtqx2TWvs6imDZunkMZr8fJNpHeHJ8oxBADXG9dgirY5yHsazvg9PdzlyJrPM3tVelDfKFGPKX%2BKlvROCV0TY3pTXiHjkYtn0NaDmDccRmSK1papNt%2FexTrBGYTNodIbzh%2F95RcsNiK8wDdRsR3RifGgBFxJOywlQcDvNkeYvIxb%2BcIZyq1g83rJC9J5hWVQhSQqyE2oZGldOTa3HmroU5LObUrY55fi%2FDsYuIwIOu9twVsGJzIdD5li87tLRTzM380OnmYxAsW%2FXV%2BKLb9jiOhtiYBslU8SFLuD%2Bo19xn03gWezsjEOFPXooh8tSnODZeLslw8lRtrQFjagLtfjM903m3HF8AMTcg3JZ5veFRdFyblduSINwO1eYRMzp%2B68v6LyoyC83pScyQbg%2FiN1JgAwxpG4BfzGEa9SH2ydKPZ%2FXe6Me0NQP%2F%2FABpO5J3%2FEt1EA7SLtKtZvrzfdVezKOjPdEuJOXDHMu9Rq77TYdfenTf%2Bc294g0Iw5JSPKSHwbGhxpKKSAdzJO%2FU7Nt20wgCm1TRu5SKAFhPIFkjIQnKMRidXRivKZ%2Fz4gPkSGm8rZ0m11mGcETjR7hWqbneOwbhNs2LEbL4lLjUwmZDvwgY6pgHwaYb%2FDOhszr%2F196FgLrqI0EAeHVePlj0oyljgSadcbILGLFcQtUoCDh%2FiFCleQI5UBB8VpD33jEt5rXgsWnBhFtVVP7tR7agKM8cwh1mMU7iaF0efmxDeupDUpMYgDOwoKprtQ%2Fwb5590aLGPVJJsAgHfX68Agzx%2FLLFCSSroGNmvROS77XKWJKaLI4lN%2BFqaxTRZHvtKh41QsUKsrOfwGRFQIQFB&X-Amz-Signature=30d3dca2c29eff78562d0045d369bea2158025d46718497b39e3c7ffa6976b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2KALIG%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDyNOd0aPPFhf049mH9S1YSih9NhmVcYrBLnKgQtprCrAiBjgaZHZxcdsetHqaukBOhiuS%2B2ACOMKO7rRH6ZlZkG0Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMnfpbdmRG8mKpMNg6KtwDUXDdqpHDLhVYmUCv3dgGPihAERtqx2TWvs6imDZunkMZr8fJNpHeHJ8oxBADXG9dgirY5yHsazvg9PdzlyJrPM3tVelDfKFGPKX%2BKlvROCV0TY3pTXiHjkYtn0NaDmDccRmSK1papNt%2FexTrBGYTNodIbzh%2F95RcsNiK8wDdRsR3RifGgBFxJOywlQcDvNkeYvIxb%2BcIZyq1g83rJC9J5hWVQhSQqyE2oZGldOTa3HmroU5LObUrY55fi%2FDsYuIwIOu9twVsGJzIdD5li87tLRTzM380OnmYxAsW%2FXV%2BKLb9jiOhtiYBslU8SFLuD%2Bo19xn03gWezsjEOFPXooh8tSnODZeLslw8lRtrQFjagLtfjM903m3HF8AMTcg3JZ5veFRdFyblduSINwO1eYRMzp%2B68v6LyoyC83pScyQbg%2FiN1JgAwxpG4BfzGEa9SH2ydKPZ%2FXe6Me0NQP%2F%2FABpO5J3%2FEt1EA7SLtKtZvrzfdVezKOjPdEuJOXDHMu9Rq77TYdfenTf%2Bc294g0Iw5JSPKSHwbGhxpKKSAdzJO%2FU7Nt20wgCm1TRu5SKAFhPIFkjIQnKMRidXRivKZ%2Fz4gPkSGm8rZ0m11mGcETjR7hWqbneOwbhNs2LEbL4lLjUwmZDvwgY6pgHwaYb%2FDOhszr%2F196FgLrqI0EAeHVePlj0oyljgSadcbILGLFcQtUoCDh%2FiFCleQI5UBB8VpD33jEt5rXgsWnBhFtVVP7tR7agKM8cwh1mMU7iaF0efmxDeupDUpMYgDOwoKprtQ%2Fwb5590aLGPVJJsAgHfX68Agzx%2FLLFCSSroGNmvROS77XKWJKaLI4lN%2BFqaxTRZHvtKh41QsUKsrOfwGRFQIQFB&X-Amz-Signature=b934471910a84c5e006e4fd5c5d37813c14460cff668b9815fae41506c5627c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
