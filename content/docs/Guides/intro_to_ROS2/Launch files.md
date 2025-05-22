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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3FAK7I%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDPUaVUGsdJww4gzNDulWibLo35gtbbeJzk%2Bs1xfCQnaQIgPJdUZDPH8AykiORurLj2chBAcQ7PyGXcyD%2BuK9fIVrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhnHk8ic8cdLfBjlyrcA5qjRT7ADbnHSgDFHjIkIiiTtVhsQ0%2FBkgCFz9bZ%2F5mSgAq2Ibcuh8hj4OHrYfXiV838JrsJCAcEK0qSb5KetxJOE5YrgEFtJH9QuCTIGoH3aYvenvU4evGmC4M5kpa7Dz7l28K1tYfck4%2FvxW9zzZjamqfwgf%2BDFlMFZtKiwRniPTeBK1OB1n%2B%2BOYqQW%2FNl%2FWnN5d2t1YwFNm8kkpQUd%2BierO5L0A0kVczHSlJP7aN%2Ft%2F4PHvVO5iSU%2B%2FKmqi45H1709NRQtg8Ju3FNyTXnlfa8K%2Bc13Y9n83Wve5x2CrLMMY27QA2eQSxZiafjLURE8xCN2P%2F%2Bdq2kTzHDJQojlYAuXS7X7Hyollm6VeOAC3QodqsLq8xXlPS1cng6mLlrrB6zWmjflCw7wH5PHpMJGRwrqCUaiQHZH3%2F5bnZZpwvr00u20C8AQgO57up8ynGmyr%2FILd5LAXWMcchTPU22pSmCugNsUMS3Bz75bbdR2Ipp8mhz0%2BthYiLbQRfQMzYq7%2B5slTLUC4e6tOR8GVzorNUyu0huXb3a4BL%2Be0Kq3P2blp6SYuClWXRHayfS4t8zfIrd8rFIb%2B1iMQKCRA8sPZfmBbkGNJyPVA1wB3Na2Dkbn769FipWlCzRmBNqMJ%2F4usEGOqUBQ820PiqE06yxMnuyIt0amAiq7iJbMQWK2QRqZHLOlHG9Dko6dV87WC%2F2%2BmAQH14KBEhTuwGsAmasH8PAlnL0sWa99pPJQ9x3QNARaXtIxz1x%2FLNZ7CNwZlBCNQ%2FkbtjW5PO4FoNEjykOBhMQF0nye4PQhR9FeDelT9jmhpRBwFNXM8CDnZ8mH%2FMhY%2BblsBssWbDFCDiE3qHgmJArz2mtDwgKdA4O&X-Amz-Signature=44876f7c4198671f3f4e66dddbafefbd355e8e90f84e4b34557c4eac4e4befa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3FAK7I%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDPUaVUGsdJww4gzNDulWibLo35gtbbeJzk%2Bs1xfCQnaQIgPJdUZDPH8AykiORurLj2chBAcQ7PyGXcyD%2BuK9fIVrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhnHk8ic8cdLfBjlyrcA5qjRT7ADbnHSgDFHjIkIiiTtVhsQ0%2FBkgCFz9bZ%2F5mSgAq2Ibcuh8hj4OHrYfXiV838JrsJCAcEK0qSb5KetxJOE5YrgEFtJH9QuCTIGoH3aYvenvU4evGmC4M5kpa7Dz7l28K1tYfck4%2FvxW9zzZjamqfwgf%2BDFlMFZtKiwRniPTeBK1OB1n%2B%2BOYqQW%2FNl%2FWnN5d2t1YwFNm8kkpQUd%2BierO5L0A0kVczHSlJP7aN%2Ft%2F4PHvVO5iSU%2B%2FKmqi45H1709NRQtg8Ju3FNyTXnlfa8K%2Bc13Y9n83Wve5x2CrLMMY27QA2eQSxZiafjLURE8xCN2P%2F%2Bdq2kTzHDJQojlYAuXS7X7Hyollm6VeOAC3QodqsLq8xXlPS1cng6mLlrrB6zWmjflCw7wH5PHpMJGRwrqCUaiQHZH3%2F5bnZZpwvr00u20C8AQgO57up8ynGmyr%2FILd5LAXWMcchTPU22pSmCugNsUMS3Bz75bbdR2Ipp8mhz0%2BthYiLbQRfQMzYq7%2B5slTLUC4e6tOR8GVzorNUyu0huXb3a4BL%2Be0Kq3P2blp6SYuClWXRHayfS4t8zfIrd8rFIb%2B1iMQKCRA8sPZfmBbkGNJyPVA1wB3Na2Dkbn769FipWlCzRmBNqMJ%2F4usEGOqUBQ820PiqE06yxMnuyIt0amAiq7iJbMQWK2QRqZHLOlHG9Dko6dV87WC%2F2%2BmAQH14KBEhTuwGsAmasH8PAlnL0sWa99pPJQ9x3QNARaXtIxz1x%2FLNZ7CNwZlBCNQ%2FkbtjW5PO4FoNEjykOBhMQF0nye4PQhR9FeDelT9jmhpRBwFNXM8CDnZ8mH%2FMhY%2BblsBssWbDFCDiE3qHgmJArz2mtDwgKdA4O&X-Amz-Signature=f1f83530eea063b0c18f270b3cd8a8887c28084601b4dd540b4414bda96afec2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3FAK7I%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDPUaVUGsdJww4gzNDulWibLo35gtbbeJzk%2Bs1xfCQnaQIgPJdUZDPH8AykiORurLj2chBAcQ7PyGXcyD%2BuK9fIVrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhnHk8ic8cdLfBjlyrcA5qjRT7ADbnHSgDFHjIkIiiTtVhsQ0%2FBkgCFz9bZ%2F5mSgAq2Ibcuh8hj4OHrYfXiV838JrsJCAcEK0qSb5KetxJOE5YrgEFtJH9QuCTIGoH3aYvenvU4evGmC4M5kpa7Dz7l28K1tYfck4%2FvxW9zzZjamqfwgf%2BDFlMFZtKiwRniPTeBK1OB1n%2B%2BOYqQW%2FNl%2FWnN5d2t1YwFNm8kkpQUd%2BierO5L0A0kVczHSlJP7aN%2Ft%2F4PHvVO5iSU%2B%2FKmqi45H1709NRQtg8Ju3FNyTXnlfa8K%2Bc13Y9n83Wve5x2CrLMMY27QA2eQSxZiafjLURE8xCN2P%2F%2Bdq2kTzHDJQojlYAuXS7X7Hyollm6VeOAC3QodqsLq8xXlPS1cng6mLlrrB6zWmjflCw7wH5PHpMJGRwrqCUaiQHZH3%2F5bnZZpwvr00u20C8AQgO57up8ynGmyr%2FILd5LAXWMcchTPU22pSmCugNsUMS3Bz75bbdR2Ipp8mhz0%2BthYiLbQRfQMzYq7%2B5slTLUC4e6tOR8GVzorNUyu0huXb3a4BL%2Be0Kq3P2blp6SYuClWXRHayfS4t8zfIrd8rFIb%2B1iMQKCRA8sPZfmBbkGNJyPVA1wB3Na2Dkbn769FipWlCzRmBNqMJ%2F4usEGOqUBQ820PiqE06yxMnuyIt0amAiq7iJbMQWK2QRqZHLOlHG9Dko6dV87WC%2F2%2BmAQH14KBEhTuwGsAmasH8PAlnL0sWa99pPJQ9x3QNARaXtIxz1x%2FLNZ7CNwZlBCNQ%2FkbtjW5PO4FoNEjykOBhMQF0nye4PQhR9FeDelT9jmhpRBwFNXM8CDnZ8mH%2FMhY%2BblsBssWbDFCDiE3qHgmJArz2mtDwgKdA4O&X-Amz-Signature=9e1f0ed94435210e53f3a8b5025547f63c84e5c9ea61992ec65a949a156dcd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
