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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2CQ5VS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCu7h4TJDbD0YJN6CLF7srVltSqmpHd2UJ209pXCWg9wIhAMGZtI73bhs2zuzOPrOALDK5qrQD2sLN7qW6Fk0Hm93rKv8DCBsQABoMNjM3NDIzMTgzODA1Igz7nvJY69dD7Fc9tcEq3AP6AnkYQ0CVH7HcdS1LpZh6GUlhyXo5uvpOfLmKpGRntBf6UPq24nHxNWOlqDrRqzyrG9gevseWWeYn1bYVJI%2FrQ%2F%2FgXxIiERs3ic%2BklLq%2Bl7lfADdBndAeL%2FJh%2Ff%2FqrwG78xMeOHMcuF1SA2fkKViIUs5famcXW3ML1VRu08Y314y4%2F2grX9hFuwZpD7BfLSeLWnR0PSai3PQX1CdUYjyfyAKHUaOhZ4zWyWIoM6l%2FjD%2FXu76DysqEbeDovXSupAfhwN7bjhTiUgsJcYc0cqg%2BwiIAsw5gAXa5np5ADjkGY5O8qkJ6EN%2Fo5GhjcWHztdFFjRFFoqj1fPBa6nlGYaE4Q9FJVnEHBrnzVzUHkCTYfUHxPiLdklgH0x3Kv4FXjKOgSTOMBsi6mjLwZeu%2BudZdUEu4c3dacp%2FWRDW1f3O%2BzGcHkJ0suSuw2VON%2BnRa%2FPMJS6A4e1bh%2BDF7okoCRXzVwkwREgjQd5kiIPjNYBFYd1KiCeE%2FwraWa8d37WMTHw7oQ1IXbfE1Op4STqh9BvzTdVCTfe4dKhILUNEYcUuM3yUuADSZmaaBe52XvUzALySb94ra9yN8WVwqtV64W7LCeUW2laGlbCAR2yvVmB965dk1NX6ymFoUTsoXYTCeuMC%2FBjqkARW%2FIO5Ml%2B%2FcAKibVPlVCoxfAhVaE%2BMvJPk%2BixvD9HVofDhIXoEJ6GnrbRHCsoCE5pBt%2BJUZEsQTsOvDKsK95uZDNNuNkx%2BzcqJMFTCsxKBsNJGnV36ZMnJXpDrYjmjgIgpKtJ0F0Izv%2FxlxLFFCsPAp3nfobLH9NezLytF%2Bz7Go57ataBSF9R6bUSwONEz299oMjV1KkIwqHx36RAPNTylEXBBs&X-Amz-Signature=b35e7c364dea7996fd2291e1a92fe6fc952ed4e49b66954d73d8b9781b7ac6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2CQ5VS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCu7h4TJDbD0YJN6CLF7srVltSqmpHd2UJ209pXCWg9wIhAMGZtI73bhs2zuzOPrOALDK5qrQD2sLN7qW6Fk0Hm93rKv8DCBsQABoMNjM3NDIzMTgzODA1Igz7nvJY69dD7Fc9tcEq3AP6AnkYQ0CVH7HcdS1LpZh6GUlhyXo5uvpOfLmKpGRntBf6UPq24nHxNWOlqDrRqzyrG9gevseWWeYn1bYVJI%2FrQ%2F%2FgXxIiERs3ic%2BklLq%2Bl7lfADdBndAeL%2FJh%2Ff%2FqrwG78xMeOHMcuF1SA2fkKViIUs5famcXW3ML1VRu08Y314y4%2F2grX9hFuwZpD7BfLSeLWnR0PSai3PQX1CdUYjyfyAKHUaOhZ4zWyWIoM6l%2FjD%2FXu76DysqEbeDovXSupAfhwN7bjhTiUgsJcYc0cqg%2BwiIAsw5gAXa5np5ADjkGY5O8qkJ6EN%2Fo5GhjcWHztdFFjRFFoqj1fPBa6nlGYaE4Q9FJVnEHBrnzVzUHkCTYfUHxPiLdklgH0x3Kv4FXjKOgSTOMBsi6mjLwZeu%2BudZdUEu4c3dacp%2FWRDW1f3O%2BzGcHkJ0suSuw2VON%2BnRa%2FPMJS6A4e1bh%2BDF7okoCRXzVwkwREgjQd5kiIPjNYBFYd1KiCeE%2FwraWa8d37WMTHw7oQ1IXbfE1Op4STqh9BvzTdVCTfe4dKhILUNEYcUuM3yUuADSZmaaBe52XvUzALySb94ra9yN8WVwqtV64W7LCeUW2laGlbCAR2yvVmB965dk1NX6ymFoUTsoXYTCeuMC%2FBjqkARW%2FIO5Ml%2B%2FcAKibVPlVCoxfAhVaE%2BMvJPk%2BixvD9HVofDhIXoEJ6GnrbRHCsoCE5pBt%2BJUZEsQTsOvDKsK95uZDNNuNkx%2BzcqJMFTCsxKBsNJGnV36ZMnJXpDrYjmjgIgpKtJ0F0Izv%2FxlxLFFCsPAp3nfobLH9NezLytF%2Bz7Go57ataBSF9R6bUSwONEz299oMjV1KkIwqHx36RAPNTylEXBBs&X-Amz-Signature=1f09e084a5fe1bf957257ca78b5eff423ec22c1344128a2d3a05172ed5c6ed91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2CQ5VS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCu7h4TJDbD0YJN6CLF7srVltSqmpHd2UJ209pXCWg9wIhAMGZtI73bhs2zuzOPrOALDK5qrQD2sLN7qW6Fk0Hm93rKv8DCBsQABoMNjM3NDIzMTgzODA1Igz7nvJY69dD7Fc9tcEq3AP6AnkYQ0CVH7HcdS1LpZh6GUlhyXo5uvpOfLmKpGRntBf6UPq24nHxNWOlqDrRqzyrG9gevseWWeYn1bYVJI%2FrQ%2F%2FgXxIiERs3ic%2BklLq%2Bl7lfADdBndAeL%2FJh%2Ff%2FqrwG78xMeOHMcuF1SA2fkKViIUs5famcXW3ML1VRu08Y314y4%2F2grX9hFuwZpD7BfLSeLWnR0PSai3PQX1CdUYjyfyAKHUaOhZ4zWyWIoM6l%2FjD%2FXu76DysqEbeDovXSupAfhwN7bjhTiUgsJcYc0cqg%2BwiIAsw5gAXa5np5ADjkGY5O8qkJ6EN%2Fo5GhjcWHztdFFjRFFoqj1fPBa6nlGYaE4Q9FJVnEHBrnzVzUHkCTYfUHxPiLdklgH0x3Kv4FXjKOgSTOMBsi6mjLwZeu%2BudZdUEu4c3dacp%2FWRDW1f3O%2BzGcHkJ0suSuw2VON%2BnRa%2FPMJS6A4e1bh%2BDF7okoCRXzVwkwREgjQd5kiIPjNYBFYd1KiCeE%2FwraWa8d37WMTHw7oQ1IXbfE1Op4STqh9BvzTdVCTfe4dKhILUNEYcUuM3yUuADSZmaaBe52XvUzALySb94ra9yN8WVwqtV64W7LCeUW2laGlbCAR2yvVmB965dk1NX6ymFoUTsoXYTCeuMC%2FBjqkARW%2FIO5Ml%2B%2FcAKibVPlVCoxfAhVaE%2BMvJPk%2BixvD9HVofDhIXoEJ6GnrbRHCsoCE5pBt%2BJUZEsQTsOvDKsK95uZDNNuNkx%2BzcqJMFTCsxKBsNJGnV36ZMnJXpDrYjmjgIgpKtJ0F0Izv%2FxlxLFFCsPAp3nfobLH9NezLytF%2Bz7Go57ataBSF9R6bUSwONEz299oMjV1KkIwqHx36RAPNTylEXBBs&X-Amz-Signature=abc3a93a305405aec004681138ce9d5a773fdec0ba8dc8887494948502f45081&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
