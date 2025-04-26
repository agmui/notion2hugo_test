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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CNXUUF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEFkxgKopnbC5n09rSXjTElKHCu0XCECgfUxAxUAt2IwIgRcDjb57EtMqSObndhbbgYiyaLvXAcd0Q6phTnkH8%2FREq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIWIvBnYVQtfx8qGBircA9N10hfi8PSE%2BzmtJXCeaLnSydrMj83IZIe6quEi9MeBdaRFmewZ%2F5LpMuDq8kBPUher7oMa5Igga%2FUlmjhKy1rl39H28w8afqB8X8DVGuUAHRMRW%2F%2FR3Rw7dnBXwOoWgILx%2B%2FrDoUtvRezdecXPWz4ZRnf2W7kOLedtqHr72KxrxA6eKh34bEOt1vlGofmyHwwPi5khR5LghMsP2coPUpbhVHjYYi4zp6k1oHNsBmzGsv8Pma2wOm7Q2Sf%2FzBPM9qduLQcci86461%2BbK159jA3tKCWE3vFwYrxj88kn65CsV%2Bglz5u%2FpwijQfqMf5tbZdOvysX1irsOJ%2BjgQxxITX0C97vro8GIi5Mq8iu4XG%2BdUnBCOn7%2B5fbNd7wy%2FdjxmsBJGG%2BWF5NjNP7qg8tVF5BKuELkykYoZ2ofhzG4UujY1D8dkol0Kd%2FjrYwZ07x5inZhfr1ndZNnuMoQL2aNcHivq8YqCM5MbsbRoi5ijtHN5Vy9rXwt4T2aLgNmupAskIZ8D5wOZ7dLasPw8m2MK%2FkVqefFUS5BnpzD7onPv%2BbzTJo83Q5tti%2BJKuvxRbYDKYMtZLwSS9S72Uw7UcGCvG5weV3mb1WcHXaIDcsuZhKNelYYUCHjLQjvafJEMO%2BDssAGOqUBLj%2BzwD2Qq3gWyGrJDtoMEDbg9q1PXoReNa5cqpn5fOv7p7TvaoK3VpJk7jOFSqobwRmL9ezOqFIzCdTfZtqr8pB7QPNT3%2FzeGt5GsJnYgKMCfFhm3QjsddefW3JyjGjAGJ62bUFZQr8U44OzkNeBDzEmrB%2BDjuWOb7NNkOicL7uCxL1nq0fEhB7cAE6hzeyc%2BR%2B1xAY%2BKSnnwLCTu1CgCUQUPO%2FA&X-Amz-Signature=72aeb425acd5da30bdaa26ba75790598a252ac6b59b323a9fda945cd5085e57e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CNXUUF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEFkxgKopnbC5n09rSXjTElKHCu0XCECgfUxAxUAt2IwIgRcDjb57EtMqSObndhbbgYiyaLvXAcd0Q6phTnkH8%2FREq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIWIvBnYVQtfx8qGBircA9N10hfi8PSE%2BzmtJXCeaLnSydrMj83IZIe6quEi9MeBdaRFmewZ%2F5LpMuDq8kBPUher7oMa5Igga%2FUlmjhKy1rl39H28w8afqB8X8DVGuUAHRMRW%2F%2FR3Rw7dnBXwOoWgILx%2B%2FrDoUtvRezdecXPWz4ZRnf2W7kOLedtqHr72KxrxA6eKh34bEOt1vlGofmyHwwPi5khR5LghMsP2coPUpbhVHjYYi4zp6k1oHNsBmzGsv8Pma2wOm7Q2Sf%2FzBPM9qduLQcci86461%2BbK159jA3tKCWE3vFwYrxj88kn65CsV%2Bglz5u%2FpwijQfqMf5tbZdOvysX1irsOJ%2BjgQxxITX0C97vro8GIi5Mq8iu4XG%2BdUnBCOn7%2B5fbNd7wy%2FdjxmsBJGG%2BWF5NjNP7qg8tVF5BKuELkykYoZ2ofhzG4UujY1D8dkol0Kd%2FjrYwZ07x5inZhfr1ndZNnuMoQL2aNcHivq8YqCM5MbsbRoi5ijtHN5Vy9rXwt4T2aLgNmupAskIZ8D5wOZ7dLasPw8m2MK%2FkVqefFUS5BnpzD7onPv%2BbzTJo83Q5tti%2BJKuvxRbYDKYMtZLwSS9S72Uw7UcGCvG5weV3mb1WcHXaIDcsuZhKNelYYUCHjLQjvafJEMO%2BDssAGOqUBLj%2BzwD2Qq3gWyGrJDtoMEDbg9q1PXoReNa5cqpn5fOv7p7TvaoK3VpJk7jOFSqobwRmL9ezOqFIzCdTfZtqr8pB7QPNT3%2FzeGt5GsJnYgKMCfFhm3QjsddefW3JyjGjAGJ62bUFZQr8U44OzkNeBDzEmrB%2BDjuWOb7NNkOicL7uCxL1nq0fEhB7cAE6hzeyc%2BR%2B1xAY%2BKSnnwLCTu1CgCUQUPO%2FA&X-Amz-Signature=f93f34fffdcd988af285aa866d1703e7300e89768f89347f4e380ae774eaa43a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CNXUUF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEFkxgKopnbC5n09rSXjTElKHCu0XCECgfUxAxUAt2IwIgRcDjb57EtMqSObndhbbgYiyaLvXAcd0Q6phTnkH8%2FREq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIWIvBnYVQtfx8qGBircA9N10hfi8PSE%2BzmtJXCeaLnSydrMj83IZIe6quEi9MeBdaRFmewZ%2F5LpMuDq8kBPUher7oMa5Igga%2FUlmjhKy1rl39H28w8afqB8X8DVGuUAHRMRW%2F%2FR3Rw7dnBXwOoWgILx%2B%2FrDoUtvRezdecXPWz4ZRnf2W7kOLedtqHr72KxrxA6eKh34bEOt1vlGofmyHwwPi5khR5LghMsP2coPUpbhVHjYYi4zp6k1oHNsBmzGsv8Pma2wOm7Q2Sf%2FzBPM9qduLQcci86461%2BbK159jA3tKCWE3vFwYrxj88kn65CsV%2Bglz5u%2FpwijQfqMf5tbZdOvysX1irsOJ%2BjgQxxITX0C97vro8GIi5Mq8iu4XG%2BdUnBCOn7%2B5fbNd7wy%2FdjxmsBJGG%2BWF5NjNP7qg8tVF5BKuELkykYoZ2ofhzG4UujY1D8dkol0Kd%2FjrYwZ07x5inZhfr1ndZNnuMoQL2aNcHivq8YqCM5MbsbRoi5ijtHN5Vy9rXwt4T2aLgNmupAskIZ8D5wOZ7dLasPw8m2MK%2FkVqefFUS5BnpzD7onPv%2BbzTJo83Q5tti%2BJKuvxRbYDKYMtZLwSS9S72Uw7UcGCvG5weV3mb1WcHXaIDcsuZhKNelYYUCHjLQjvafJEMO%2BDssAGOqUBLj%2BzwD2Qq3gWyGrJDtoMEDbg9q1PXoReNa5cqpn5fOv7p7TvaoK3VpJk7jOFSqobwRmL9ezOqFIzCdTfZtqr8pB7QPNT3%2FzeGt5GsJnYgKMCfFhm3QjsddefW3JyjGjAGJ62bUFZQr8U44OzkNeBDzEmrB%2BDjuWOb7NNkOicL7uCxL1nq0fEhB7cAE6hzeyc%2BR%2B1xAY%2BKSnnwLCTu1CgCUQUPO%2FA&X-Amz-Signature=e604b931431f1818ef9cc44b5684d5880eeca53383c2a02fdba69703984b0e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
