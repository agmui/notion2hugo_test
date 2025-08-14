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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTTVWF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpVnWPRN%2BPLKnIsqrUNz3f9zkC5apGKnjdlgUy7Zw27AiEAgKnIpxWR3DU%2Be7StE4ZGV5xDMNhYZ7xJWKis7UEqouAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOakss%2BEC03Ee2hDNyrcA5XdRcforeOUmbn3O7BMU33UxFrKrtdksLT3e2%2BE46RCZpvHbrYoTC%2BLHkPIN4mWtMm1%2FCINgvF%2Fwg6o4Kf2JJsr32xdGvSjndXRuDzwi%2Fk0TuAzpyGkZKxQF4V0lLJKTPs94NQe3n%2BrT2PEw5HIS4PXlUQB7RJs7r%2B1pQ%2FjDKaoWHhbP418TyxLb8q8yvXDE%2FHpSay8jkUuskdVj1FCMIzZk0F5ogWW1UnDkoZyHqhyGW%2BUMy2qOHqqESG4WBRklFjvrLcaaR8im%2BiseERxlaZYMfuXAFkWkbTDEmybhJeibZofhF0nm6AOh1er1Urx3MOJ4eVKfQ3SgaQyG5EnvOxxy86IFoaHQJIk1qjRC2k5Psr6PhEsvMLOFlxijRRsElInsIzy0MuHIYP2CoILqkvws4lYGtoD4CQgZPsy9CkO2xFKrQwkLV36wBmwtQVEsPVAwZ8FNqqO7mCw%2FZQJkz2uUWITxDNtU24sm2bVIskU6thM5K0LnyNDq2rCYHtOl7C5%2FFH8P5Z4Xq7JivLiTC8QdtFAPkZ1rO1KS76aWJWt6OKUoK2vmurhuE92ysPhumy1pUQ5UvcT85P9gQC0rJ48X4I2E1myQRFvFSUJcY4nxIpSBJcnObu43YViMIq69cQGOqUBYAK2CAicPO3sw%2F%2FpZTNlTSvK%2Be9Fyoi1xuFwZ7QPvbaCA1gN9yi1wzlfSUo839iJygssKqKkv5kTDmfkryD26z%2FHneqVQXTCbBPhZnBpN86zA6dJTTAdjwWcOf4Jx8MB6cCf2NR%2BL9qoeYMRuTtxvIwy0Oyf2i4TlRlHaIqr%2F1GvoAkDsiM%2FG7WLhpMYXB7dHVHwQV%2F2jHipwdi1M3rgNwb46w%2By&X-Amz-Signature=47bf04b44c0889985c51eec880efdce8cdff38eed34bf102c385dd89af5f84c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTTVWF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpVnWPRN%2BPLKnIsqrUNz3f9zkC5apGKnjdlgUy7Zw27AiEAgKnIpxWR3DU%2Be7StE4ZGV5xDMNhYZ7xJWKis7UEqouAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOakss%2BEC03Ee2hDNyrcA5XdRcforeOUmbn3O7BMU33UxFrKrtdksLT3e2%2BE46RCZpvHbrYoTC%2BLHkPIN4mWtMm1%2FCINgvF%2Fwg6o4Kf2JJsr32xdGvSjndXRuDzwi%2Fk0TuAzpyGkZKxQF4V0lLJKTPs94NQe3n%2BrT2PEw5HIS4PXlUQB7RJs7r%2B1pQ%2FjDKaoWHhbP418TyxLb8q8yvXDE%2FHpSay8jkUuskdVj1FCMIzZk0F5ogWW1UnDkoZyHqhyGW%2BUMy2qOHqqESG4WBRklFjvrLcaaR8im%2BiseERxlaZYMfuXAFkWkbTDEmybhJeibZofhF0nm6AOh1er1Urx3MOJ4eVKfQ3SgaQyG5EnvOxxy86IFoaHQJIk1qjRC2k5Psr6PhEsvMLOFlxijRRsElInsIzy0MuHIYP2CoILqkvws4lYGtoD4CQgZPsy9CkO2xFKrQwkLV36wBmwtQVEsPVAwZ8FNqqO7mCw%2FZQJkz2uUWITxDNtU24sm2bVIskU6thM5K0LnyNDq2rCYHtOl7C5%2FFH8P5Z4Xq7JivLiTC8QdtFAPkZ1rO1KS76aWJWt6OKUoK2vmurhuE92ysPhumy1pUQ5UvcT85P9gQC0rJ48X4I2E1myQRFvFSUJcY4nxIpSBJcnObu43YViMIq69cQGOqUBYAK2CAicPO3sw%2F%2FpZTNlTSvK%2Be9Fyoi1xuFwZ7QPvbaCA1gN9yi1wzlfSUo839iJygssKqKkv5kTDmfkryD26z%2FHneqVQXTCbBPhZnBpN86zA6dJTTAdjwWcOf4Jx8MB6cCf2NR%2BL9qoeYMRuTtxvIwy0Oyf2i4TlRlHaIqr%2F1GvoAkDsiM%2FG7WLhpMYXB7dHVHwQV%2F2jHipwdi1M3rgNwb46w%2By&X-Amz-Signature=eed80d2a6af7136470f25c50aa4c9f6a48a9c12329f5a2df286bc1d923e6dfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTTVWF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpVnWPRN%2BPLKnIsqrUNz3f9zkC5apGKnjdlgUy7Zw27AiEAgKnIpxWR3DU%2Be7StE4ZGV5xDMNhYZ7xJWKis7UEqouAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOakss%2BEC03Ee2hDNyrcA5XdRcforeOUmbn3O7BMU33UxFrKrtdksLT3e2%2BE46RCZpvHbrYoTC%2BLHkPIN4mWtMm1%2FCINgvF%2Fwg6o4Kf2JJsr32xdGvSjndXRuDzwi%2Fk0TuAzpyGkZKxQF4V0lLJKTPs94NQe3n%2BrT2PEw5HIS4PXlUQB7RJs7r%2B1pQ%2FjDKaoWHhbP418TyxLb8q8yvXDE%2FHpSay8jkUuskdVj1FCMIzZk0F5ogWW1UnDkoZyHqhyGW%2BUMy2qOHqqESG4WBRklFjvrLcaaR8im%2BiseERxlaZYMfuXAFkWkbTDEmybhJeibZofhF0nm6AOh1er1Urx3MOJ4eVKfQ3SgaQyG5EnvOxxy86IFoaHQJIk1qjRC2k5Psr6PhEsvMLOFlxijRRsElInsIzy0MuHIYP2CoILqkvws4lYGtoD4CQgZPsy9CkO2xFKrQwkLV36wBmwtQVEsPVAwZ8FNqqO7mCw%2FZQJkz2uUWITxDNtU24sm2bVIskU6thM5K0LnyNDq2rCYHtOl7C5%2FFH8P5Z4Xq7JivLiTC8QdtFAPkZ1rO1KS76aWJWt6OKUoK2vmurhuE92ysPhumy1pUQ5UvcT85P9gQC0rJ48X4I2E1myQRFvFSUJcY4nxIpSBJcnObu43YViMIq69cQGOqUBYAK2CAicPO3sw%2F%2FpZTNlTSvK%2Be9Fyoi1xuFwZ7QPvbaCA1gN9yi1wzlfSUo839iJygssKqKkv5kTDmfkryD26z%2FHneqVQXTCbBPhZnBpN86zA6dJTTAdjwWcOf4Jx8MB6cCf2NR%2BL9qoeYMRuTtxvIwy0Oyf2i4TlRlHaIqr%2F1GvoAkDsiM%2FG7WLhpMYXB7dHVHwQV%2F2jHipwdi1M3rgNwb46w%2By&X-Amz-Signature=9996ddd1352e748654844146addc0dbc1645684a54bedfd5b4908c9e6391ed45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
