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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN324Z5O%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICRpPSKL2CsFwchXGwvdvYbjDGWkzw3EgIdseswyMakaAiAJZ1KAyuRc6SOZz5fd2LI9uP8BTx%2F6FswP2Rlvst09vSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHtfT6ct15QlgUp8TKtwDBsyXUSluGdgbGWKGxcekwYBQ6f%2FGurql1FdmmaxsFvfyKaWoS71XXs1QMd1J%2FY%2FmTH6IhDqt%2FDYrwQ0p0tRf41kNUhBrMIbf6A%2F5A%2BEK2R4nFZQeeW0tPY%2BSWvJ5pREpAh60%2FmX27M3FXlxmZd7%2BAOcO2%2B5yCLGK7nQDYBWfLPMQyG6AlkX%2Ft%2Fac4nsEsJXHLNjPBI4jsVR9q7SiaFQTpmgsNs15kTeDcuKQm1wGrSH5LwG130oq2W4qXEShDr2AQx2xXPBJ%2BQPuicF6ty8Ggo4TnywOL9sbpoG3GeVwv5q2aYvhCtDpbJlyYR2lwBCp1WQZhSCKv98728dUufbClP%2By93%2FqhneK1K7754d15TIDth5e5M4CkHIzZ8XTe92dsEk78Mh5oiHKW985%2Br1pjwxi1MBzOnob2NpLxBc07VKJAezndM8HFqE0wkLhlJtAVv%2F3VkZ9%2FsJBXkI%2FAAZj0G4GCMXjgqO3aOkEigvpw2z4PBaH9MtU6HodxhxWJ96cBf1yRwQJeSIqmu2J5IuAQtlZJiQKwGhU0i%2BIsVUdYS4%2Fe3pEBxuOehOb11COdaIdi51rKh59uyRY7NggfNi1EdhcDrS%2FFhaD8ZCpKB1xuPO%2BphkltsB444Sfs8swmvyYwQY6pgFmjZLePEKUydV6DA4E%2BOqNaKzKAF2mp6QAzdl%2BZPwYwBWxYI%2BL9M0HZShhN%2FRwGknIXzmzW00yZdBeTz%2BA%2FpHPNsRy8gSWoCgx7Or6F%2BBCo4YGsHZybHZ%2FIvdBHti%2BGyI5%2B%2F2tFIFLqVWbbD6KjRuSCnTOMTVHOWslTl6aTzk2wH6%2Fft%2BLs6eOwf9TdQFO4oSvaUnd9zliDhpU6FESN2vVuc5YHZDZ&X-Amz-Signature=20f85d3eafc8bf95c374a66ae14caae655f0994ebd305ea95824311f0703bedc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN324Z5O%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICRpPSKL2CsFwchXGwvdvYbjDGWkzw3EgIdseswyMakaAiAJZ1KAyuRc6SOZz5fd2LI9uP8BTx%2F6FswP2Rlvst09vSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHtfT6ct15QlgUp8TKtwDBsyXUSluGdgbGWKGxcekwYBQ6f%2FGurql1FdmmaxsFvfyKaWoS71XXs1QMd1J%2FY%2FmTH6IhDqt%2FDYrwQ0p0tRf41kNUhBrMIbf6A%2F5A%2BEK2R4nFZQeeW0tPY%2BSWvJ5pREpAh60%2FmX27M3FXlxmZd7%2BAOcO2%2B5yCLGK7nQDYBWfLPMQyG6AlkX%2Ft%2Fac4nsEsJXHLNjPBI4jsVR9q7SiaFQTpmgsNs15kTeDcuKQm1wGrSH5LwG130oq2W4qXEShDr2AQx2xXPBJ%2BQPuicF6ty8Ggo4TnywOL9sbpoG3GeVwv5q2aYvhCtDpbJlyYR2lwBCp1WQZhSCKv98728dUufbClP%2By93%2FqhneK1K7754d15TIDth5e5M4CkHIzZ8XTe92dsEk78Mh5oiHKW985%2Br1pjwxi1MBzOnob2NpLxBc07VKJAezndM8HFqE0wkLhlJtAVv%2F3VkZ9%2FsJBXkI%2FAAZj0G4GCMXjgqO3aOkEigvpw2z4PBaH9MtU6HodxhxWJ96cBf1yRwQJeSIqmu2J5IuAQtlZJiQKwGhU0i%2BIsVUdYS4%2Fe3pEBxuOehOb11COdaIdi51rKh59uyRY7NggfNi1EdhcDrS%2FFhaD8ZCpKB1xuPO%2BphkltsB444Sfs8swmvyYwQY6pgFmjZLePEKUydV6DA4E%2BOqNaKzKAF2mp6QAzdl%2BZPwYwBWxYI%2BL9M0HZShhN%2FRwGknIXzmzW00yZdBeTz%2BA%2FpHPNsRy8gSWoCgx7Or6F%2BBCo4YGsHZybHZ%2FIvdBHti%2BGyI5%2B%2F2tFIFLqVWbbD6KjRuSCnTOMTVHOWslTl6aTzk2wH6%2Fft%2BLs6eOwf9TdQFO4oSvaUnd9zliDhpU6FESN2vVuc5YHZDZ&X-Amz-Signature=c09d6e710f03d371a6ecd641f41784bc4f55413e5fcc2db6cc64908799a80ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN324Z5O%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICRpPSKL2CsFwchXGwvdvYbjDGWkzw3EgIdseswyMakaAiAJZ1KAyuRc6SOZz5fd2LI9uP8BTx%2F6FswP2Rlvst09vSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHtfT6ct15QlgUp8TKtwDBsyXUSluGdgbGWKGxcekwYBQ6f%2FGurql1FdmmaxsFvfyKaWoS71XXs1QMd1J%2FY%2FmTH6IhDqt%2FDYrwQ0p0tRf41kNUhBrMIbf6A%2F5A%2BEK2R4nFZQeeW0tPY%2BSWvJ5pREpAh60%2FmX27M3FXlxmZd7%2BAOcO2%2B5yCLGK7nQDYBWfLPMQyG6AlkX%2Ft%2Fac4nsEsJXHLNjPBI4jsVR9q7SiaFQTpmgsNs15kTeDcuKQm1wGrSH5LwG130oq2W4qXEShDr2AQx2xXPBJ%2BQPuicF6ty8Ggo4TnywOL9sbpoG3GeVwv5q2aYvhCtDpbJlyYR2lwBCp1WQZhSCKv98728dUufbClP%2By93%2FqhneK1K7754d15TIDth5e5M4CkHIzZ8XTe92dsEk78Mh5oiHKW985%2Br1pjwxi1MBzOnob2NpLxBc07VKJAezndM8HFqE0wkLhlJtAVv%2F3VkZ9%2FsJBXkI%2FAAZj0G4GCMXjgqO3aOkEigvpw2z4PBaH9MtU6HodxhxWJ96cBf1yRwQJeSIqmu2J5IuAQtlZJiQKwGhU0i%2BIsVUdYS4%2Fe3pEBxuOehOb11COdaIdi51rKh59uyRY7NggfNi1EdhcDrS%2FFhaD8ZCpKB1xuPO%2BphkltsB444Sfs8swmvyYwQY6pgFmjZLePEKUydV6DA4E%2BOqNaKzKAF2mp6QAzdl%2BZPwYwBWxYI%2BL9M0HZShhN%2FRwGknIXzmzW00yZdBeTz%2BA%2FpHPNsRy8gSWoCgx7Or6F%2BBCo4YGsHZybHZ%2FIvdBHti%2BGyI5%2B%2F2tFIFLqVWbbD6KjRuSCnTOMTVHOWslTl6aTzk2wH6%2Fft%2BLs6eOwf9TdQFO4oSvaUnd9zliDhpU6FESN2vVuc5YHZDZ&X-Amz-Signature=907878fb57664d63b901794ab4c94751fdb30027ddc0d41b185b7c1d3b99ddd9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
