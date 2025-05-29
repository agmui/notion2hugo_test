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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2IDEFZA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuxxuapRBQibZh4Nvh9ynPuoSW8Aho3uYJvlY4SgZBVgIgY6xSRTB6xZfOqCxKeK6QGln98vaeE7ecDEEb0bxX1Q0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIv1gK4MzUEfoJT8ircA0UKttiB7KFScgse6073S5et%2Bxj6MoZPoQiZkr4O7w%2BVV18vUWU2%2Fp0zk5Pk1TDygyptxB3e21zzzFsTSeQ0EWvfkm%2BxXX9hR1YHm9LEZ%2BK9mWAZ89f9Ihb%2FMCnKnef%2F01PDUIArHUhWfsmTYb97syi8V520KKaG6XxIVIDbgy9Kuf5ceIAYXLxXqyMEa48BIHLQskJbrFnTNAwon9kaVoLi81JwJr56FKu5bbPI%2FInayEgmRSrFyD6ZPLkB4sP8do1FTD6DJNewJ1GIZFHdmH9jVRfM6OKl6FM47B6FJFOVZ3yI%2FGrXlD6g5HbGMbHZZchBgbJPe6qcOVzc0FNHPn3NqIdoDNPJSq0p2BBYo%2Bmcev9MW%2BGRFwSZ%2FlSJjIc7yVo3EcY%2FBf98DRLEoV%2FLutVv%2BrjQ9RuwMaf%2FXsLD%2BulRd85Fl5wfXpoudqEUIMdiolu%2FDS7R%2BMFYBkA5iCUHOza3IHvmwUNPWhEmC4EQXpXt31eqJaoWW3N9yVU1tkMy9g6C2fA%2F79RUpmqlrgSevpuJsmIdUrpdlJHVhgyMSDnfRvC503jpFPgBxlkbwFhu9Lq4pLNcfbLNz4Oopm28qMDyDwA%2B4pNegbCecKKAV5i%2FT%2FHDcjfyW3CHt20VMNyQ48EGOqUBcugeh4445Gs9zlSIF4pSdrB9Az7IvXT1b7%2BR0ys4%2B0QDHu2t9Pc3vcTzSD0DVgn6TL0TYCPOZ5b9KXF4Z9woz4Tj9Z1QJhpsYAD0Hs3A3Kstx3NLcySF7okM3YRmQDqEpp5JQPom0OnFGWTUCPYRbk46c4FmK0qvNHVVVZfM1PI36%2FNDGl2wyNpafRU72Z77htXyCFTqOhr5nrAs0jVZgL29eycK&X-Amz-Signature=5084a181b4b985fd4869c5f3f9ef35af5c23fddf05a1a7be1a160af22c428514&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2IDEFZA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuxxuapRBQibZh4Nvh9ynPuoSW8Aho3uYJvlY4SgZBVgIgY6xSRTB6xZfOqCxKeK6QGln98vaeE7ecDEEb0bxX1Q0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIv1gK4MzUEfoJT8ircA0UKttiB7KFScgse6073S5et%2Bxj6MoZPoQiZkr4O7w%2BVV18vUWU2%2Fp0zk5Pk1TDygyptxB3e21zzzFsTSeQ0EWvfkm%2BxXX9hR1YHm9LEZ%2BK9mWAZ89f9Ihb%2FMCnKnef%2F01PDUIArHUhWfsmTYb97syi8V520KKaG6XxIVIDbgy9Kuf5ceIAYXLxXqyMEa48BIHLQskJbrFnTNAwon9kaVoLi81JwJr56FKu5bbPI%2FInayEgmRSrFyD6ZPLkB4sP8do1FTD6DJNewJ1GIZFHdmH9jVRfM6OKl6FM47B6FJFOVZ3yI%2FGrXlD6g5HbGMbHZZchBgbJPe6qcOVzc0FNHPn3NqIdoDNPJSq0p2BBYo%2Bmcev9MW%2BGRFwSZ%2FlSJjIc7yVo3EcY%2FBf98DRLEoV%2FLutVv%2BrjQ9RuwMaf%2FXsLD%2BulRd85Fl5wfXpoudqEUIMdiolu%2FDS7R%2BMFYBkA5iCUHOza3IHvmwUNPWhEmC4EQXpXt31eqJaoWW3N9yVU1tkMy9g6C2fA%2F79RUpmqlrgSevpuJsmIdUrpdlJHVhgyMSDnfRvC503jpFPgBxlkbwFhu9Lq4pLNcfbLNz4Oopm28qMDyDwA%2B4pNegbCecKKAV5i%2FT%2FHDcjfyW3CHt20VMNyQ48EGOqUBcugeh4445Gs9zlSIF4pSdrB9Az7IvXT1b7%2BR0ys4%2B0QDHu2t9Pc3vcTzSD0DVgn6TL0TYCPOZ5b9KXF4Z9woz4Tj9Z1QJhpsYAD0Hs3A3Kstx3NLcySF7okM3YRmQDqEpp5JQPom0OnFGWTUCPYRbk46c4FmK0qvNHVVVZfM1PI36%2FNDGl2wyNpafRU72Z77htXyCFTqOhr5nrAs0jVZgL29eycK&X-Amz-Signature=01e931e7590dcff74bf8e8fadce5f4f85c2f5c319687f1ef91cb1c4c5fd70ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2IDEFZA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuxxuapRBQibZh4Nvh9ynPuoSW8Aho3uYJvlY4SgZBVgIgY6xSRTB6xZfOqCxKeK6QGln98vaeE7ecDEEb0bxX1Q0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIv1gK4MzUEfoJT8ircA0UKttiB7KFScgse6073S5et%2Bxj6MoZPoQiZkr4O7w%2BVV18vUWU2%2Fp0zk5Pk1TDygyptxB3e21zzzFsTSeQ0EWvfkm%2BxXX9hR1YHm9LEZ%2BK9mWAZ89f9Ihb%2FMCnKnef%2F01PDUIArHUhWfsmTYb97syi8V520KKaG6XxIVIDbgy9Kuf5ceIAYXLxXqyMEa48BIHLQskJbrFnTNAwon9kaVoLi81JwJr56FKu5bbPI%2FInayEgmRSrFyD6ZPLkB4sP8do1FTD6DJNewJ1GIZFHdmH9jVRfM6OKl6FM47B6FJFOVZ3yI%2FGrXlD6g5HbGMbHZZchBgbJPe6qcOVzc0FNHPn3NqIdoDNPJSq0p2BBYo%2Bmcev9MW%2BGRFwSZ%2FlSJjIc7yVo3EcY%2FBf98DRLEoV%2FLutVv%2BrjQ9RuwMaf%2FXsLD%2BulRd85Fl5wfXpoudqEUIMdiolu%2FDS7R%2BMFYBkA5iCUHOza3IHvmwUNPWhEmC4EQXpXt31eqJaoWW3N9yVU1tkMy9g6C2fA%2F79RUpmqlrgSevpuJsmIdUrpdlJHVhgyMSDnfRvC503jpFPgBxlkbwFhu9Lq4pLNcfbLNz4Oopm28qMDyDwA%2B4pNegbCecKKAV5i%2FT%2FHDcjfyW3CHt20VMNyQ48EGOqUBcugeh4445Gs9zlSIF4pSdrB9Az7IvXT1b7%2BR0ys4%2B0QDHu2t9Pc3vcTzSD0DVgn6TL0TYCPOZ5b9KXF4Z9woz4Tj9Z1QJhpsYAD0Hs3A3Kstx3NLcySF7okM3YRmQDqEpp5JQPom0OnFGWTUCPYRbk46c4FmK0qvNHVVVZfM1PI36%2FNDGl2wyNpafRU72Z77htXyCFTqOhr5nrAs0jVZgL29eycK&X-Amz-Signature=8ea5cbbc8550b1fe5cdaed54ae21979c21eb6e96366a545e4cd95fd2a0114d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
