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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627Q7QWYQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDgnLv3Wz9q6enVn3WKAyxg7tBvx%2Byd4xiHqzoM2TCcDwIgGxwfR6HiHCwxXjZsbXrcC05KZSQH%2FDZOISz0g3ZiJYMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIkbD%2BRprU6IsA8BtSrcAz87P23%2FXZhK1oo8Rp%2F%2Byzw4d4%2FI2b%2BPB0tW66WWPx5w6faShYp%2F3QDZnl9BbxdlWWdFouHW3cfBzJREzqZAgI9ilKK8UzqzOcnDUfMzMlPZget8QyYPANsBkTtjci6z%2FqCzxMUrem7PLwLWuyQdAcpgVbFE4zd9InNZb52Hc%2FinGhIyWlDNluAxLHMD0Rfn0mZf7oandEObmBBW%2FGuPBckA7SN3iZz%2Fpg%2FfK2n1ZQPOakhl4kB245Lmlks5%2FR6mfherP%2F66ughSUDgqBL4bAM%2FYV3fk40twNSc7CcA%2Bh3Y9u5G06she36sx%2Bf0Fj2PyNuuIFrLNgZ7%2FEJIBfvKdiUpZjJ5yf1ikfRYzbdZQx8RusEG%2BFUlGWKEqDrKAhyrRCoxAWKcvm5rvE6qIJ7sFG%2BNwI5EtPLLsyO3kYht64py%2BH%2FMQUNZLj3A4GnX9%2FXiJCpW0%2F%2B0pknc%2BB1ujuwEXmpeIc9ZcTpbYyt6icVoyYMZhyevrM7gKX8rIhwSN9%2Bn1KWtAy56PAz2q%2BIwLU5NKyMnd9BRO6znPNGcGW9P%2BTifdqZc5Ic9AO%2FSYNjbrUnsP6%2B0DRVYnvgt5d%2Fp1JY14FqRHe07%2FwqbgcA1%2F81IWYeaIcXCb4rfkDxgvCA8zMObysr4GOqUBh%2FQceDj4eKZ0tF5Py0kHZxahYl4PZm%2FLjv1WMUmp9aJEkUS%2BDmVUvCzk5du5w6qT2im%2B8yJI%2B0shgWkwZRIfX0AVyz60M6TjKPSvYszVeCM3eII7xDhlEGi9%2Ffvop1XQNrgAI3z3PcH4BwpAoKsdLtXary6G91l2%2FtTXyBmwCQtTQxh8hJ8ELSN7gl3fC%2FtV3CjkPaDlIsfBwpaFlHtvJLGaX2Xr&X-Amz-Signature=d3c145deb5b9358c604e0f8202d8ec537579e5b17e935fc929177e5d80ea4354&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627Q7QWYQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDgnLv3Wz9q6enVn3WKAyxg7tBvx%2Byd4xiHqzoM2TCcDwIgGxwfR6HiHCwxXjZsbXrcC05KZSQH%2FDZOISz0g3ZiJYMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIkbD%2BRprU6IsA8BtSrcAz87P23%2FXZhK1oo8Rp%2F%2Byzw4d4%2FI2b%2BPB0tW66WWPx5w6faShYp%2F3QDZnl9BbxdlWWdFouHW3cfBzJREzqZAgI9ilKK8UzqzOcnDUfMzMlPZget8QyYPANsBkTtjci6z%2FqCzxMUrem7PLwLWuyQdAcpgVbFE4zd9InNZb52Hc%2FinGhIyWlDNluAxLHMD0Rfn0mZf7oandEObmBBW%2FGuPBckA7SN3iZz%2Fpg%2FfK2n1ZQPOakhl4kB245Lmlks5%2FR6mfherP%2F66ughSUDgqBL4bAM%2FYV3fk40twNSc7CcA%2Bh3Y9u5G06she36sx%2Bf0Fj2PyNuuIFrLNgZ7%2FEJIBfvKdiUpZjJ5yf1ikfRYzbdZQx8RusEG%2BFUlGWKEqDrKAhyrRCoxAWKcvm5rvE6qIJ7sFG%2BNwI5EtPLLsyO3kYht64py%2BH%2FMQUNZLj3A4GnX9%2FXiJCpW0%2F%2B0pknc%2BB1ujuwEXmpeIc9ZcTpbYyt6icVoyYMZhyevrM7gKX8rIhwSN9%2Bn1KWtAy56PAz2q%2BIwLU5NKyMnd9BRO6znPNGcGW9P%2BTifdqZc5Ic9AO%2FSYNjbrUnsP6%2B0DRVYnvgt5d%2Fp1JY14FqRHe07%2FwqbgcA1%2F81IWYeaIcXCb4rfkDxgvCA8zMObysr4GOqUBh%2FQceDj4eKZ0tF5Py0kHZxahYl4PZm%2FLjv1WMUmp9aJEkUS%2BDmVUvCzk5du5w6qT2im%2B8yJI%2B0shgWkwZRIfX0AVyz60M6TjKPSvYszVeCM3eII7xDhlEGi9%2Ffvop1XQNrgAI3z3PcH4BwpAoKsdLtXary6G91l2%2FtTXyBmwCQtTQxh8hJ8ELSN7gl3fC%2FtV3CjkPaDlIsfBwpaFlHtvJLGaX2Xr&X-Amz-Signature=965204924287810d218beba5127e2c2826096c3812cd4dd4526f469ca2e090d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627Q7QWYQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDgnLv3Wz9q6enVn3WKAyxg7tBvx%2Byd4xiHqzoM2TCcDwIgGxwfR6HiHCwxXjZsbXrcC05KZSQH%2FDZOISz0g3ZiJYMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIkbD%2BRprU6IsA8BtSrcAz87P23%2FXZhK1oo8Rp%2F%2Byzw4d4%2FI2b%2BPB0tW66WWPx5w6faShYp%2F3QDZnl9BbxdlWWdFouHW3cfBzJREzqZAgI9ilKK8UzqzOcnDUfMzMlPZget8QyYPANsBkTtjci6z%2FqCzxMUrem7PLwLWuyQdAcpgVbFE4zd9InNZb52Hc%2FinGhIyWlDNluAxLHMD0Rfn0mZf7oandEObmBBW%2FGuPBckA7SN3iZz%2Fpg%2FfK2n1ZQPOakhl4kB245Lmlks5%2FR6mfherP%2F66ughSUDgqBL4bAM%2FYV3fk40twNSc7CcA%2Bh3Y9u5G06she36sx%2Bf0Fj2PyNuuIFrLNgZ7%2FEJIBfvKdiUpZjJ5yf1ikfRYzbdZQx8RusEG%2BFUlGWKEqDrKAhyrRCoxAWKcvm5rvE6qIJ7sFG%2BNwI5EtPLLsyO3kYht64py%2BH%2FMQUNZLj3A4GnX9%2FXiJCpW0%2F%2B0pknc%2BB1ujuwEXmpeIc9ZcTpbYyt6icVoyYMZhyevrM7gKX8rIhwSN9%2Bn1KWtAy56PAz2q%2BIwLU5NKyMnd9BRO6znPNGcGW9P%2BTifdqZc5Ic9AO%2FSYNjbrUnsP6%2B0DRVYnvgt5d%2Fp1JY14FqRHe07%2FwqbgcA1%2F81IWYeaIcXCb4rfkDxgvCA8zMObysr4GOqUBh%2FQceDj4eKZ0tF5Py0kHZxahYl4PZm%2FLjv1WMUmp9aJEkUS%2BDmVUvCzk5du5w6qT2im%2B8yJI%2B0shgWkwZRIfX0AVyz60M6TjKPSvYszVeCM3eII7xDhlEGi9%2Ffvop1XQNrgAI3z3PcH4BwpAoKsdLtXary6G91l2%2FtTXyBmwCQtTQxh8hJ8ELSN7gl3fC%2FtV3CjkPaDlIsfBwpaFlHtvJLGaX2Xr&X-Amz-Signature=3be11de0f1de7ae6fd8e91dc4274f550b9d9cad2ef482a61ef1ebd749da3298b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
