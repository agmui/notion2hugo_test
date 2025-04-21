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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCJT5PP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBu3JWKNhueFv53Z28noN44gAuJ1S0ek30HWDw%2FwGHacAiEAiqJpWpGEBA8gT3ns9MAZIIbq1%2FGd1eQqxNN9kcEmazQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDJD8GC2jaekcUjiircA3LApm7W%2BwwQ2F2yGAsTSC0mvXmnsa7svqvGsmGCi1i%2FR5LNI20vfdiTnaaw5QNs8gWL4HiFYfKMOf3tJ7cNlLZcRzHkO2DZ5%2BSu9VEf5%2FwhGX2V%2FXDFcyAAzfyLyOI%2FSu6WsIazmk1OujMbsghkyxwhPL6hkimCuBzJryvmZLNPwfyvMl9vTJWIIBZpqBG8TWYwNlmQ3qeSRamQgz5ITpU0UUyJovV2QuCAPCHmBU0wuOMGgZhP7vrvg%2F7%2FHrMHmDBd%2F%2BFRHIXTLgvsMwfXsdiq7xqVz6AtQN%2B2yL%2FK1T7LJUs9MoZSdgjWIX6CqbN7IBX9rH6BOsaE%2Bv4U4N1IWI%2BwZGa6vwd1kl4%2BR2xaOHud6EE2odS%2FWx5UG%2FwQx3Ognl1Eo4xnqX7cXeyFHcIhij%2BPf85K6u1MUzJnYHfWoeMIamMwT7MCSSvQzstdlio%2Fu%2F8fFp0nqIJXDEJDFA3m1uA%2BrgeEqSb32DbMWcdT%2B6qzozZJiNlz4IA9d%2B7BM4iuBx2FhWKOsZc%2BnqNm%2BYjDB%2BNRZkS26bIBHwM8T1hweD6N6uEbguv6Kz0EOiqOiYqLTZ%2BFlL3YVnO47cllE2CHwBdoRrGpbYCB4tmpjs821s%2Bz5W3lJFRSF0vB8A7LMPSfmsAGOqUBfTdqdBLjM3LcgfksEill04hzlYa%2BaC4f0ALRLhaVPdm4Y6c8WoNOAb4l403pBcJ3xBhFIcXw4gD4TwAH9U4WSJPWDxk7Rb7J44MH%2BarBCysVzaLUG3aTsui5ndk3aRBTvbecklgvC7T5%2Fd5Ydxxbke15hYzw0d%2BHy7s%2FwQ3y2bt%2BLGKNd8PSs5agNd0d56J5fsjMk%2BuE67xAnVwWfMAq5ue3ziAD&X-Amz-Signature=21a35d3c14da4cf5abe788f7c59734413f842ee1e4426fb06dcde52b95996f60&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCJT5PP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBu3JWKNhueFv53Z28noN44gAuJ1S0ek30HWDw%2FwGHacAiEAiqJpWpGEBA8gT3ns9MAZIIbq1%2FGd1eQqxNN9kcEmazQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDJD8GC2jaekcUjiircA3LApm7W%2BwwQ2F2yGAsTSC0mvXmnsa7svqvGsmGCi1i%2FR5LNI20vfdiTnaaw5QNs8gWL4HiFYfKMOf3tJ7cNlLZcRzHkO2DZ5%2BSu9VEf5%2FwhGX2V%2FXDFcyAAzfyLyOI%2FSu6WsIazmk1OujMbsghkyxwhPL6hkimCuBzJryvmZLNPwfyvMl9vTJWIIBZpqBG8TWYwNlmQ3qeSRamQgz5ITpU0UUyJovV2QuCAPCHmBU0wuOMGgZhP7vrvg%2F7%2FHrMHmDBd%2F%2BFRHIXTLgvsMwfXsdiq7xqVz6AtQN%2B2yL%2FK1T7LJUs9MoZSdgjWIX6CqbN7IBX9rH6BOsaE%2Bv4U4N1IWI%2BwZGa6vwd1kl4%2BR2xaOHud6EE2odS%2FWx5UG%2FwQx3Ognl1Eo4xnqX7cXeyFHcIhij%2BPf85K6u1MUzJnYHfWoeMIamMwT7MCSSvQzstdlio%2Fu%2F8fFp0nqIJXDEJDFA3m1uA%2BrgeEqSb32DbMWcdT%2B6qzozZJiNlz4IA9d%2B7BM4iuBx2FhWKOsZc%2BnqNm%2BYjDB%2BNRZkS26bIBHwM8T1hweD6N6uEbguv6Kz0EOiqOiYqLTZ%2BFlL3YVnO47cllE2CHwBdoRrGpbYCB4tmpjs821s%2Bz5W3lJFRSF0vB8A7LMPSfmsAGOqUBfTdqdBLjM3LcgfksEill04hzlYa%2BaC4f0ALRLhaVPdm4Y6c8WoNOAb4l403pBcJ3xBhFIcXw4gD4TwAH9U4WSJPWDxk7Rb7J44MH%2BarBCysVzaLUG3aTsui5ndk3aRBTvbecklgvC7T5%2Fd5Ydxxbke15hYzw0d%2BHy7s%2FwQ3y2bt%2BLGKNd8PSs5agNd0d56J5fsjMk%2BuE67xAnVwWfMAq5ue3ziAD&X-Amz-Signature=0201245c819583b23dbf58a7cdbfa329ccbbe098a766d53426d9c86d06c06c49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCJT5PP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBu3JWKNhueFv53Z28noN44gAuJ1S0ek30HWDw%2FwGHacAiEAiqJpWpGEBA8gT3ns9MAZIIbq1%2FGd1eQqxNN9kcEmazQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDJD8GC2jaekcUjiircA3LApm7W%2BwwQ2F2yGAsTSC0mvXmnsa7svqvGsmGCi1i%2FR5LNI20vfdiTnaaw5QNs8gWL4HiFYfKMOf3tJ7cNlLZcRzHkO2DZ5%2BSu9VEf5%2FwhGX2V%2FXDFcyAAzfyLyOI%2FSu6WsIazmk1OujMbsghkyxwhPL6hkimCuBzJryvmZLNPwfyvMl9vTJWIIBZpqBG8TWYwNlmQ3qeSRamQgz5ITpU0UUyJovV2QuCAPCHmBU0wuOMGgZhP7vrvg%2F7%2FHrMHmDBd%2F%2BFRHIXTLgvsMwfXsdiq7xqVz6AtQN%2B2yL%2FK1T7LJUs9MoZSdgjWIX6CqbN7IBX9rH6BOsaE%2Bv4U4N1IWI%2BwZGa6vwd1kl4%2BR2xaOHud6EE2odS%2FWx5UG%2FwQx3Ognl1Eo4xnqX7cXeyFHcIhij%2BPf85K6u1MUzJnYHfWoeMIamMwT7MCSSvQzstdlio%2Fu%2F8fFp0nqIJXDEJDFA3m1uA%2BrgeEqSb32DbMWcdT%2B6qzozZJiNlz4IA9d%2B7BM4iuBx2FhWKOsZc%2BnqNm%2BYjDB%2BNRZkS26bIBHwM8T1hweD6N6uEbguv6Kz0EOiqOiYqLTZ%2BFlL3YVnO47cllE2CHwBdoRrGpbYCB4tmpjs821s%2Bz5W3lJFRSF0vB8A7LMPSfmsAGOqUBfTdqdBLjM3LcgfksEill04hzlYa%2BaC4f0ALRLhaVPdm4Y6c8WoNOAb4l403pBcJ3xBhFIcXw4gD4TwAH9U4WSJPWDxk7Rb7J44MH%2BarBCysVzaLUG3aTsui5ndk3aRBTvbecklgvC7T5%2Fd5Ydxxbke15hYzw0d%2BHy7s%2FwQ3y2bt%2BLGKNd8PSs5agNd0d56J5fsjMk%2BuE67xAnVwWfMAq5ue3ziAD&X-Amz-Signature=e2a4a79048bb090659d037b593934f1cb0a4bd7ab8b2d764ac641097812150c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
