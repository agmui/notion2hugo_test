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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GZUEYU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC6ksyKqYt1qMWjF%2F1jTs%2BKUrv36sKXNSO%2B2w%2BL4OwQkgIgEl4aWtjvok9wbVek2mVYBFnGZI6B%2Fk3e98%2BATjoC%2BkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI99G4iqqaVYhXtoaCrcA69ghJUGY%2BK%2FlQQRj74O%2B6LWqcMFaBqdL%2BLRtuszsujRo04zrpjvC8nhEQbw5gRZ7Wq9b1cIqyhIi5rd1nsod3VyuUm3Qxm2TqUwk%2FiJZGxRuQN2h3vcGlwf5FCKb2%2Fc34u93tdq9f9m%2BWs%2BtGUln8OCW6s%2FhFS3Nr85527QKbYovxUnizNafejH%2Bdkm4i1KE0OlReSpsXUvo86j9aRZ%2FAszj8U0wjLZ8pczJU1xmb59wE7KMN665V52hdo3WnVzD1aPvwbTvOoB2YQNg5U8aL4XVQPBkhtvnRekyPidU0hgZ2dAsbMSdWZ5gNHXrujOq8STOdPzYW0RLblBYGAsBQGOXxdietGKtLcPKuV8zN4g6S3CDxQ8v%2Fp2JUGOytHG9A2C2fS48npz5wlD%2B3PXZF1ixxCf3rgWXgB62vKFXZRgrfOKWGX5TfEEXlLQuojxDzlRbNEiQU7efUP9Ur14Vt7PuTAvEhbTqBq%2F6gNbFDtST9srAEfni21nvEAlExJUC9tPJTG8y50X3ZQ%2FG4vEkL6accrIuBkFSgUAg0IQHzRAMsb6t2IN09Z%2BL8swXVLfrrQMVrzewq5vV8ngN0Elkwi0ae3AIFMKmCDan52o9nCie50q4WAkJcoqncaQMJ%2FcuL4GOqUBPebJCj4RFjgpOdGV%2BTmAnRMECKacP4%2FaychB%2F%2BXnKyyhXkSShHQRLsXbKrlcPLg3%2FT4w6to%2F3EthPefDeIcnPOy7fc90uu7p8TRSL9AALHXFKJ6%2BCxqPzYrwunr3B679etbEMJ5%2FgelAiM7YKiLsxnmPMdSycwQd1sBF0bQRplMPtgbMN42NSWcKvDfDu1Vg3%2BKFawxIiJeIMWNEj2tYEIiQrMAB&X-Amz-Signature=d64ec0050dfcb691cfe61243b85590e060a3372bd6c5e3d256dac6023c17d2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GZUEYU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC6ksyKqYt1qMWjF%2F1jTs%2BKUrv36sKXNSO%2B2w%2BL4OwQkgIgEl4aWtjvok9wbVek2mVYBFnGZI6B%2Fk3e98%2BATjoC%2BkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI99G4iqqaVYhXtoaCrcA69ghJUGY%2BK%2FlQQRj74O%2B6LWqcMFaBqdL%2BLRtuszsujRo04zrpjvC8nhEQbw5gRZ7Wq9b1cIqyhIi5rd1nsod3VyuUm3Qxm2TqUwk%2FiJZGxRuQN2h3vcGlwf5FCKb2%2Fc34u93tdq9f9m%2BWs%2BtGUln8OCW6s%2FhFS3Nr85527QKbYovxUnizNafejH%2Bdkm4i1KE0OlReSpsXUvo86j9aRZ%2FAszj8U0wjLZ8pczJU1xmb59wE7KMN665V52hdo3WnVzD1aPvwbTvOoB2YQNg5U8aL4XVQPBkhtvnRekyPidU0hgZ2dAsbMSdWZ5gNHXrujOq8STOdPzYW0RLblBYGAsBQGOXxdietGKtLcPKuV8zN4g6S3CDxQ8v%2Fp2JUGOytHG9A2C2fS48npz5wlD%2B3PXZF1ixxCf3rgWXgB62vKFXZRgrfOKWGX5TfEEXlLQuojxDzlRbNEiQU7efUP9Ur14Vt7PuTAvEhbTqBq%2F6gNbFDtST9srAEfni21nvEAlExJUC9tPJTG8y50X3ZQ%2FG4vEkL6accrIuBkFSgUAg0IQHzRAMsb6t2IN09Z%2BL8swXVLfrrQMVrzewq5vV8ngN0Elkwi0ae3AIFMKmCDan52o9nCie50q4WAkJcoqncaQMJ%2FcuL4GOqUBPebJCj4RFjgpOdGV%2BTmAnRMECKacP4%2FaychB%2F%2BXnKyyhXkSShHQRLsXbKrlcPLg3%2FT4w6to%2F3EthPefDeIcnPOy7fc90uu7p8TRSL9AALHXFKJ6%2BCxqPzYrwunr3B679etbEMJ5%2FgelAiM7YKiLsxnmPMdSycwQd1sBF0bQRplMPtgbMN42NSWcKvDfDu1Vg3%2BKFawxIiJeIMWNEj2tYEIiQrMAB&X-Amz-Signature=8e0e144627905db24b4861b179ec1554a64b946a2bd8dc9f6d30c20c6c7a5a00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7GZUEYU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC6ksyKqYt1qMWjF%2F1jTs%2BKUrv36sKXNSO%2B2w%2BL4OwQkgIgEl4aWtjvok9wbVek2mVYBFnGZI6B%2Fk3e98%2BATjoC%2BkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI99G4iqqaVYhXtoaCrcA69ghJUGY%2BK%2FlQQRj74O%2B6LWqcMFaBqdL%2BLRtuszsujRo04zrpjvC8nhEQbw5gRZ7Wq9b1cIqyhIi5rd1nsod3VyuUm3Qxm2TqUwk%2FiJZGxRuQN2h3vcGlwf5FCKb2%2Fc34u93tdq9f9m%2BWs%2BtGUln8OCW6s%2FhFS3Nr85527QKbYovxUnizNafejH%2Bdkm4i1KE0OlReSpsXUvo86j9aRZ%2FAszj8U0wjLZ8pczJU1xmb59wE7KMN665V52hdo3WnVzD1aPvwbTvOoB2YQNg5U8aL4XVQPBkhtvnRekyPidU0hgZ2dAsbMSdWZ5gNHXrujOq8STOdPzYW0RLblBYGAsBQGOXxdietGKtLcPKuV8zN4g6S3CDxQ8v%2Fp2JUGOytHG9A2C2fS48npz5wlD%2B3PXZF1ixxCf3rgWXgB62vKFXZRgrfOKWGX5TfEEXlLQuojxDzlRbNEiQU7efUP9Ur14Vt7PuTAvEhbTqBq%2F6gNbFDtST9srAEfni21nvEAlExJUC9tPJTG8y50X3ZQ%2FG4vEkL6accrIuBkFSgUAg0IQHzRAMsb6t2IN09Z%2BL8swXVLfrrQMVrzewq5vV8ngN0Elkwi0ae3AIFMKmCDan52o9nCie50q4WAkJcoqncaQMJ%2FcuL4GOqUBPebJCj4RFjgpOdGV%2BTmAnRMECKacP4%2FaychB%2F%2BXnKyyhXkSShHQRLsXbKrlcPLg3%2FT4w6to%2F3EthPefDeIcnPOy7fc90uu7p8TRSL9AALHXFKJ6%2BCxqPzYrwunr3B679etbEMJ5%2FgelAiM7YKiLsxnmPMdSycwQd1sBF0bQRplMPtgbMN42NSWcKvDfDu1Vg3%2BKFawxIiJeIMWNEj2tYEIiQrMAB&X-Amz-Signature=0821d51e1839ad2d5459c06608de090eab5f0836fe11dcef5d6023afa0231551&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
