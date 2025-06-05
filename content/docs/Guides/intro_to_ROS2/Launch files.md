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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDSEMUW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDfElzvzINUUtRCqDFHFqVb2G5FSe8kpIi0KUaEqqX5ogIgcK4TLtvaP8nxs3ED3T2ZEEjq4aieWMPETa0%2BkWB%2FUbgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDDFfzO2pQFsCUIl8CrcA6E02xXq5hmaWN9jTkWgDtBAO%2FpYSOBijEak1WwEfarG88AUHHugiyNeVutES7oWnpzeyBNQ%2FDMhI3asQMkoimVw5RlZZnwpA0zbwap2YQIFGF46mAv1K6pxpeD9mD6R6g5WxZOV9SXfDLnZrb05DKTMGef%2F%2B5eFZ6MxNjS82cPc9fmGtewf3nLDAMVMISOuhfRnWOhcpOP1HHp5dPxRoMeZzxJJ%2FAt5L%2Fd%2BG9vLJSSd7vczjEzZ3WTreIv3YFZhXrutW8OYpWIQNYh4oRnvCKVnKCZbvfghzQwWuTPFiKfa0626cgYQBkFcNoA%2F41QuW6WjwHR0Vx6i1cea5lYsNfunZu3WBSqyDJat6lpsbHVKL6SfFj1XzCGMTXNaFkabctA4icfyG9%2Bou9wQ1QZ1QwFbsU4zhhO3CKqKED%2FBY3J9B4eTDiDrF5r%2B9m5bUCFeYdEgyE1qMU3wep3mLvovUsTBLmjcshs7F26kKkb6sqxIDQx5xYLP1ROlb3FbYIW01Wm%2FYMtSn1NbQxN1xD0PPsR45oJ3zijddVg%2FpuWfyeesSbkdvdrNP7fjXmZrwg8LqRO4jkJb360GMsivmP4mPaJTrVXlqy5faOAP6c8ODxhZIcUeVdZd3rydBYOQMO%2FmhsIGOqUBCdjUG3WTh%2FSCfMRxbuU2U2iB6p2s1GYaf2wi3ovpgwG87SwjkLv5IUKTsPdOBzF83LhxsK8QQ7Ym1pdOuh6w93Vh%2FK6UJyKtnh6qSclbk6z75k3tmyI2mShG8drqBxaot7UthcWP%2B9Mo0GMJtbt7wuRo9BmSn%2BD3LjHyt8ueKJ34HbMvCHrkt6UsbOvFS4W5oVb1P67PiFKauaH7qrQc%2FTGK29cR&X-Amz-Signature=ec1cc787779a70b12a38e70f20967751cfe3f8eb3a32399ebb6d53dd263f435d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDSEMUW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDfElzvzINUUtRCqDFHFqVb2G5FSe8kpIi0KUaEqqX5ogIgcK4TLtvaP8nxs3ED3T2ZEEjq4aieWMPETa0%2BkWB%2FUbgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDDFfzO2pQFsCUIl8CrcA6E02xXq5hmaWN9jTkWgDtBAO%2FpYSOBijEak1WwEfarG88AUHHugiyNeVutES7oWnpzeyBNQ%2FDMhI3asQMkoimVw5RlZZnwpA0zbwap2YQIFGF46mAv1K6pxpeD9mD6R6g5WxZOV9SXfDLnZrb05DKTMGef%2F%2B5eFZ6MxNjS82cPc9fmGtewf3nLDAMVMISOuhfRnWOhcpOP1HHp5dPxRoMeZzxJJ%2FAt5L%2Fd%2BG9vLJSSd7vczjEzZ3WTreIv3YFZhXrutW8OYpWIQNYh4oRnvCKVnKCZbvfghzQwWuTPFiKfa0626cgYQBkFcNoA%2F41QuW6WjwHR0Vx6i1cea5lYsNfunZu3WBSqyDJat6lpsbHVKL6SfFj1XzCGMTXNaFkabctA4icfyG9%2Bou9wQ1QZ1QwFbsU4zhhO3CKqKED%2FBY3J9B4eTDiDrF5r%2B9m5bUCFeYdEgyE1qMU3wep3mLvovUsTBLmjcshs7F26kKkb6sqxIDQx5xYLP1ROlb3FbYIW01Wm%2FYMtSn1NbQxN1xD0PPsR45oJ3zijddVg%2FpuWfyeesSbkdvdrNP7fjXmZrwg8LqRO4jkJb360GMsivmP4mPaJTrVXlqy5faOAP6c8ODxhZIcUeVdZd3rydBYOQMO%2FmhsIGOqUBCdjUG3WTh%2FSCfMRxbuU2U2iB6p2s1GYaf2wi3ovpgwG87SwjkLv5IUKTsPdOBzF83LhxsK8QQ7Ym1pdOuh6w93Vh%2FK6UJyKtnh6qSclbk6z75k3tmyI2mShG8drqBxaot7UthcWP%2B9Mo0GMJtbt7wuRo9BmSn%2BD3LjHyt8ueKJ34HbMvCHrkt6UsbOvFS4W5oVb1P67PiFKauaH7qrQc%2FTGK29cR&X-Amz-Signature=f145ded0b6933b2d06ce2047c7e971963f85d46d64443d85d233822bca1ee6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDSEMUW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDfElzvzINUUtRCqDFHFqVb2G5FSe8kpIi0KUaEqqX5ogIgcK4TLtvaP8nxs3ED3T2ZEEjq4aieWMPETa0%2BkWB%2FUbgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDDFfzO2pQFsCUIl8CrcA6E02xXq5hmaWN9jTkWgDtBAO%2FpYSOBijEak1WwEfarG88AUHHugiyNeVutES7oWnpzeyBNQ%2FDMhI3asQMkoimVw5RlZZnwpA0zbwap2YQIFGF46mAv1K6pxpeD9mD6R6g5WxZOV9SXfDLnZrb05DKTMGef%2F%2B5eFZ6MxNjS82cPc9fmGtewf3nLDAMVMISOuhfRnWOhcpOP1HHp5dPxRoMeZzxJJ%2FAt5L%2Fd%2BG9vLJSSd7vczjEzZ3WTreIv3YFZhXrutW8OYpWIQNYh4oRnvCKVnKCZbvfghzQwWuTPFiKfa0626cgYQBkFcNoA%2F41QuW6WjwHR0Vx6i1cea5lYsNfunZu3WBSqyDJat6lpsbHVKL6SfFj1XzCGMTXNaFkabctA4icfyG9%2Bou9wQ1QZ1QwFbsU4zhhO3CKqKED%2FBY3J9B4eTDiDrF5r%2B9m5bUCFeYdEgyE1qMU3wep3mLvovUsTBLmjcshs7F26kKkb6sqxIDQx5xYLP1ROlb3FbYIW01Wm%2FYMtSn1NbQxN1xD0PPsR45oJ3zijddVg%2FpuWfyeesSbkdvdrNP7fjXmZrwg8LqRO4jkJb360GMsivmP4mPaJTrVXlqy5faOAP6c8ODxhZIcUeVdZd3rydBYOQMO%2FmhsIGOqUBCdjUG3WTh%2FSCfMRxbuU2U2iB6p2s1GYaf2wi3ovpgwG87SwjkLv5IUKTsPdOBzF83LhxsK8QQ7Ym1pdOuh6w93Vh%2FK6UJyKtnh6qSclbk6z75k3tmyI2mShG8drqBxaot7UthcWP%2B9Mo0GMJtbt7wuRo9BmSn%2BD3LjHyt8ueKJ34HbMvCHrkt6UsbOvFS4W5oVb1P67PiFKauaH7qrQc%2FTGK29cR&X-Amz-Signature=529bd40293538bee1d2c58331ff0b4922b75515ef3e3beac8ff27673f108f9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
