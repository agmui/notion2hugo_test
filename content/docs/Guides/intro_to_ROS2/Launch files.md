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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQ7ABQX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfMpqlx46TxnnSFYaYQ6mpNIoWM0PHC9r40OmR4WuAJwIhAIbQpcg0jI3i3BqW7LxViYglH8wPyZBg7%2BR9FTj%2FHXTaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi0LGK3YM4wFh9EYEq3AOVcOLizJJXHyFQoKZ4y9o%2F%2FvKpm6iN0EBDrZQojFOR23fISPDbCPxQWurR5JxmC7g2JCqdYeobZvrINTzjxfE1fbGmhRuB9S6R60nbofTM4z7xpU46XMFXAF17IiHX1Pw6z%2BvOw%2BJshAg164qhe9mgKgKQvUAiVUIf5XzHTfZHefFQVGUHZQ76nSn3t2nx59wTCevgvySybHfaIQ0U8V66XPwLupnieBNi1960Z4QPjHkyYERC%2FoojKa6oUzrBTXbWqNTrynyfeR3OOVhNMttADjxDi%2BmA4%2Ff3AttW5waNpscvjFs85HrjgQXwXRiZEqn1akn5ZZMG2ifkH4n7bP8eM%2FD6eqyGJPlQht%2FKRBRFdj5y9OfL8lkFr7RA07F7hcSfyg2NYAP1%2B4%2BGkb8OwXzVecDNy4VH6vxrkhvqc8sShubuGStV3fr8ioD%2F9QdpGBtT5uAGN3cm66Cm9fh3hkWf6Nl83nciyu1fanuiOvGP6QUKSFOYUD8pAZx8XQbY%2BOasflhsAHx72%2FLWlMgyJJtS9cmGbkVRDbA7VFzh67748mY77YuDK%2BVX%2BM7CMGiy%2FQ0QROuvDIRZ5RRiRjddn2Nu64uS026I2hcpMb6nRhs%2BTFsuO%2FZlRt609DhmnTDDwd2%2FBjqkAT7w53eQb4lVZpG83otVqBTXP64yay53LVao2Xe1Lvg3q4hbOxR74IsBUK54gZs8o8AfY%2BGIf2bHMq1UlAS%2F%2FIcK5sHp62Shhm5VhQLzlu1yOT92%2F2yDxkkRvzIxUR98iYI6sYrMo1LEkM1s60Y%2FrX2DP3%2BbN9tIiaSbKI5LZP3TBCDvSkmzRN2FoE7YGqPO23%2F350LxQWO2fXKQENEQ8FUekx%2Ba&X-Amz-Signature=11635b34d5cff2f2321c7f378b0ad7654de0e5d80462291b410d26e2ad8ac6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQ7ABQX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfMpqlx46TxnnSFYaYQ6mpNIoWM0PHC9r40OmR4WuAJwIhAIbQpcg0jI3i3BqW7LxViYglH8wPyZBg7%2BR9FTj%2FHXTaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi0LGK3YM4wFh9EYEq3AOVcOLizJJXHyFQoKZ4y9o%2F%2FvKpm6iN0EBDrZQojFOR23fISPDbCPxQWurR5JxmC7g2JCqdYeobZvrINTzjxfE1fbGmhRuB9S6R60nbofTM4z7xpU46XMFXAF17IiHX1Pw6z%2BvOw%2BJshAg164qhe9mgKgKQvUAiVUIf5XzHTfZHefFQVGUHZQ76nSn3t2nx59wTCevgvySybHfaIQ0U8V66XPwLupnieBNi1960Z4QPjHkyYERC%2FoojKa6oUzrBTXbWqNTrynyfeR3OOVhNMttADjxDi%2BmA4%2Ff3AttW5waNpscvjFs85HrjgQXwXRiZEqn1akn5ZZMG2ifkH4n7bP8eM%2FD6eqyGJPlQht%2FKRBRFdj5y9OfL8lkFr7RA07F7hcSfyg2NYAP1%2B4%2BGkb8OwXzVecDNy4VH6vxrkhvqc8sShubuGStV3fr8ioD%2F9QdpGBtT5uAGN3cm66Cm9fh3hkWf6Nl83nciyu1fanuiOvGP6QUKSFOYUD8pAZx8XQbY%2BOasflhsAHx72%2FLWlMgyJJtS9cmGbkVRDbA7VFzh67748mY77YuDK%2BVX%2BM7CMGiy%2FQ0QROuvDIRZ5RRiRjddn2Nu64uS026I2hcpMb6nRhs%2BTFsuO%2FZlRt609DhmnTDDwd2%2FBjqkAT7w53eQb4lVZpG83otVqBTXP64yay53LVao2Xe1Lvg3q4hbOxR74IsBUK54gZs8o8AfY%2BGIf2bHMq1UlAS%2F%2FIcK5sHp62Shhm5VhQLzlu1yOT92%2F2yDxkkRvzIxUR98iYI6sYrMo1LEkM1s60Y%2FrX2DP3%2BbN9tIiaSbKI5LZP3TBCDvSkmzRN2FoE7YGqPO23%2F350LxQWO2fXKQENEQ8FUekx%2Ba&X-Amz-Signature=f41ae6a5b5364ac9769fe654c2dbc4cf9a272cb9ddcca368cf3c903af7f8e874&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQ7ABQX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCfMpqlx46TxnnSFYaYQ6mpNIoWM0PHC9r40OmR4WuAJwIhAIbQpcg0jI3i3BqW7LxViYglH8wPyZBg7%2BR9FTj%2FHXTaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi0LGK3YM4wFh9EYEq3AOVcOLizJJXHyFQoKZ4y9o%2F%2FvKpm6iN0EBDrZQojFOR23fISPDbCPxQWurR5JxmC7g2JCqdYeobZvrINTzjxfE1fbGmhRuB9S6R60nbofTM4z7xpU46XMFXAF17IiHX1Pw6z%2BvOw%2BJshAg164qhe9mgKgKQvUAiVUIf5XzHTfZHefFQVGUHZQ76nSn3t2nx59wTCevgvySybHfaIQ0U8V66XPwLupnieBNi1960Z4QPjHkyYERC%2FoojKa6oUzrBTXbWqNTrynyfeR3OOVhNMttADjxDi%2BmA4%2Ff3AttW5waNpscvjFs85HrjgQXwXRiZEqn1akn5ZZMG2ifkH4n7bP8eM%2FD6eqyGJPlQht%2FKRBRFdj5y9OfL8lkFr7RA07F7hcSfyg2NYAP1%2B4%2BGkb8OwXzVecDNy4VH6vxrkhvqc8sShubuGStV3fr8ioD%2F9QdpGBtT5uAGN3cm66Cm9fh3hkWf6Nl83nciyu1fanuiOvGP6QUKSFOYUD8pAZx8XQbY%2BOasflhsAHx72%2FLWlMgyJJtS9cmGbkVRDbA7VFzh67748mY77YuDK%2BVX%2BM7CMGiy%2FQ0QROuvDIRZ5RRiRjddn2Nu64uS026I2hcpMb6nRhs%2BTFsuO%2FZlRt609DhmnTDDwd2%2FBjqkAT7w53eQb4lVZpG83otVqBTXP64yay53LVao2Xe1Lvg3q4hbOxR74IsBUK54gZs8o8AfY%2BGIf2bHMq1UlAS%2F%2FIcK5sHp62Shhm5VhQLzlu1yOT92%2F2yDxkkRvzIxUR98iYI6sYrMo1LEkM1s60Y%2FrX2DP3%2BbN9tIiaSbKI5LZP3TBCDvSkmzRN2FoE7YGqPO23%2F350LxQWO2fXKQENEQ8FUekx%2Ba&X-Amz-Signature=96f6fb7617fd2b39334106bdc1dc865f52e5b25144a4b7f24bf1fc90e1af533d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
