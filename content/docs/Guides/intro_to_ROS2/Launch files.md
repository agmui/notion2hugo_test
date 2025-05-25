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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZFLWPK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICLEGaTTriB%2FzTHg7a%2F%2F9ONerDIKvqqCqYeCRBNSwnVoAiEA6nADyqxb6KkGDgnAYf2bLvY69Oz8%2BA4%2BDBel28K6wUEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKtzEEDdD4%2F37SqmyCrcA7DLJ00%2F91%2BNl0k8Bn7I%2FsOw3sKHsl%2BFW2RuhSZUgLF1pn3LMyyMKrXcmvP6vZUkEy7QSjgTjAM%2BaM0BGAHvx5j0iRGqjx7xgb0JJT6fpmLGCZAtD7HtRunyvCTxMayB7lJjJlqUjwKy2DQiqe22dMLsJeK0HcyPHH36l5Lxj1qVyhSvjsBov%2Bp2SPS14mlKVFZH42zG0Ry3jYnh0dRrl0fyRfgcBoPq2TiTrSE5hwwdjStY1KT8IgSqS%2FfJjqTjMmi1jGdH9VbtuE2fpgJGhk6pTcfx13qf19gSEOGL2sG2zKD7W92tGsYwcez3X22GT4XJ%2F%2Bq2OucZcDa7oXKmadtwQscfAF49Z3TwlNmzzgL6NMpmwpKPFfMOblnp9Szm1yVWBFxdj%2F0%2FpIIG%2BRzTRCTQTbAtRxz2vv1TDPrajuGKjuT3IoQYvGi8ld75b89BuEgNNxhxo9IQk7EeHYPaA6S4oVzmQRXBZRbpuc7s2tYGvGU3zFg1IO0vSwsFnVdmGYwxRer4oEQio4BB0T35hu4huV6qnmL2HC2UTpX2L%2FK51y1CCKW%2BfQM8Z2jkCgRUUbjV308n4Bq8TohKYXz%2BECWGVz1U3ESFOUt1Xm0NNNo8Pwtep3Ke2Mt%2FKgzSMPS4ysEGOqUBoYvkKBGU%2BvRVOBCQMqqd57jQLEOecguFbmzmP3CWJHh695GqFMELhvzpzmWgmdlkKhn94MdblMQVnnOj2uRhIbhPSIyioaiCHnwannZZAnlc%2F%2BcevaU%2BSbE3%2FXAoiFswU%2FMuGR5N7jQkYL2jMncdPJrb8sxDCMKdK2OCgSTlh7hGeNnnMud7s3puiYmvd45z7HcZQaXzDMw%2Bln3mQN%2FDAQxI9rhJ&X-Amz-Signature=2bf50d11446bd9678618fe9872261e595d90a113f418c23d8abb0e22314d971a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZFLWPK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICLEGaTTriB%2FzTHg7a%2F%2F9ONerDIKvqqCqYeCRBNSwnVoAiEA6nADyqxb6KkGDgnAYf2bLvY69Oz8%2BA4%2BDBel28K6wUEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKtzEEDdD4%2F37SqmyCrcA7DLJ00%2F91%2BNl0k8Bn7I%2FsOw3sKHsl%2BFW2RuhSZUgLF1pn3LMyyMKrXcmvP6vZUkEy7QSjgTjAM%2BaM0BGAHvx5j0iRGqjx7xgb0JJT6fpmLGCZAtD7HtRunyvCTxMayB7lJjJlqUjwKy2DQiqe22dMLsJeK0HcyPHH36l5Lxj1qVyhSvjsBov%2Bp2SPS14mlKVFZH42zG0Ry3jYnh0dRrl0fyRfgcBoPq2TiTrSE5hwwdjStY1KT8IgSqS%2FfJjqTjMmi1jGdH9VbtuE2fpgJGhk6pTcfx13qf19gSEOGL2sG2zKD7W92tGsYwcez3X22GT4XJ%2F%2Bq2OucZcDa7oXKmadtwQscfAF49Z3TwlNmzzgL6NMpmwpKPFfMOblnp9Szm1yVWBFxdj%2F0%2FpIIG%2BRzTRCTQTbAtRxz2vv1TDPrajuGKjuT3IoQYvGi8ld75b89BuEgNNxhxo9IQk7EeHYPaA6S4oVzmQRXBZRbpuc7s2tYGvGU3zFg1IO0vSwsFnVdmGYwxRer4oEQio4BB0T35hu4huV6qnmL2HC2UTpX2L%2FK51y1CCKW%2BfQM8Z2jkCgRUUbjV308n4Bq8TohKYXz%2BECWGVz1U3ESFOUt1Xm0NNNo8Pwtep3Ke2Mt%2FKgzSMPS4ysEGOqUBoYvkKBGU%2BvRVOBCQMqqd57jQLEOecguFbmzmP3CWJHh695GqFMELhvzpzmWgmdlkKhn94MdblMQVnnOj2uRhIbhPSIyioaiCHnwannZZAnlc%2F%2BcevaU%2BSbE3%2FXAoiFswU%2FMuGR5N7jQkYL2jMncdPJrb8sxDCMKdK2OCgSTlh7hGeNnnMud7s3puiYmvd45z7HcZQaXzDMw%2Bln3mQN%2FDAQxI9rhJ&X-Amz-Signature=f7435320901c9fcb5c4db666b06ecb1d76411eb5121b124c3159add7023b2c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZFLWPK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICLEGaTTriB%2FzTHg7a%2F%2F9ONerDIKvqqCqYeCRBNSwnVoAiEA6nADyqxb6KkGDgnAYf2bLvY69Oz8%2BA4%2BDBel28K6wUEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKtzEEDdD4%2F37SqmyCrcA7DLJ00%2F91%2BNl0k8Bn7I%2FsOw3sKHsl%2BFW2RuhSZUgLF1pn3LMyyMKrXcmvP6vZUkEy7QSjgTjAM%2BaM0BGAHvx5j0iRGqjx7xgb0JJT6fpmLGCZAtD7HtRunyvCTxMayB7lJjJlqUjwKy2DQiqe22dMLsJeK0HcyPHH36l5Lxj1qVyhSvjsBov%2Bp2SPS14mlKVFZH42zG0Ry3jYnh0dRrl0fyRfgcBoPq2TiTrSE5hwwdjStY1KT8IgSqS%2FfJjqTjMmi1jGdH9VbtuE2fpgJGhk6pTcfx13qf19gSEOGL2sG2zKD7W92tGsYwcez3X22GT4XJ%2F%2Bq2OucZcDa7oXKmadtwQscfAF49Z3TwlNmzzgL6NMpmwpKPFfMOblnp9Szm1yVWBFxdj%2F0%2FpIIG%2BRzTRCTQTbAtRxz2vv1TDPrajuGKjuT3IoQYvGi8ld75b89BuEgNNxhxo9IQk7EeHYPaA6S4oVzmQRXBZRbpuc7s2tYGvGU3zFg1IO0vSwsFnVdmGYwxRer4oEQio4BB0T35hu4huV6qnmL2HC2UTpX2L%2FK51y1CCKW%2BfQM8Z2jkCgRUUbjV308n4Bq8TohKYXz%2BECWGVz1U3ESFOUt1Xm0NNNo8Pwtep3Ke2Mt%2FKgzSMPS4ysEGOqUBoYvkKBGU%2BvRVOBCQMqqd57jQLEOecguFbmzmP3CWJHh695GqFMELhvzpzmWgmdlkKhn94MdblMQVnnOj2uRhIbhPSIyioaiCHnwannZZAnlc%2F%2BcevaU%2BSbE3%2FXAoiFswU%2FMuGR5N7jQkYL2jMncdPJrb8sxDCMKdK2OCgSTlh7hGeNnnMud7s3puiYmvd45z7HcZQaXzDMw%2Bln3mQN%2FDAQxI9rhJ&X-Amz-Signature=bfdaf32a577fed3f88f2891073cd6bdb43f448ac5690e56c57d47d776b0713b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
