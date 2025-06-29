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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPVNMTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBwOrsKzSGeonrgyvSK86HnUlTgMvljAKzKvEMFCKcBAiBLmGtyzMBbVfCAAwRvCGyWyU4D0lMOJ4i48PPN6FqXSSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrHl2WT4DiUdhOwpKtwDC%2BzoUaBt0fGErTvHAjMIHk0MyQVPPwzljWd0SMxY2SbzOlDz4DoWUkUgv0WyUM7PhQua1QhlZ01eTj4wJKFt5pCQMA%2Bli8FgQPm7OAUjn%2FW%2FHr0HbIDHNsIe3yHSBOyj3NLKaD0FtTm%2FdrLdqfjzwVwh0M2pQlKehR9TKMr3RdXU1djLw7sZn1j7dn%2FCVxl%2FoFBRhf5rqZ4LGln%2FwRPCxPOjcSjDqql0j1kR8rgXnvCjrC2QpWeTKw%2BI6TCCAoPiZpoPga1NfKk93X3OD1hRr%2F5YMKcAmBDZ4cckRaGzsLW3%2BdYGBNjN3L%2BseCDTJYDXdWMkaGH%2FVC%2FCwjKRSRXj7iXHY%2F1B0jZLFyPmzWMQuKvcPIurKhNDddsU6NPB7c7Lv08qu%2FZCYtJdHEvLTUZGzkoRiwvycErBlDU4t%2BEmIf4p80X0ayg5mzfk5VMdvc3ZVJlJq9h09IiM6UbG1M3pqujdVUde76iY0uDgGbYkU10B5AFc2n7vswulaGi0QEUPVmtndnjk6RRIgoqZnzcZH%2Fbhla3y%2BCJ63ZN0A6OmoJjpDm5KIUJNr0c9GrK2ujZddnhsqS2d2yb0uTv5AC1JcFQ37c7r191gvyo7oKrx%2BExBL8wgPiMQWVJmZ9wwtpGCwwY6pgFiSzvbmBQKpdtG144Mm7A0LzclXQQxIGMMQG2o%2BWamgO%2Fx9VovFGTRWBLsMUP4vcXq2p6T6Eo8Bp93J3q7qjB37Oi39W725EEuAjDdWSQOXOK8khveqgNPzRRnu1piF8CkxT4V%2F%2BhMyBGzFXiBB4IFechu9CO%2BIFPZWBTeW8aKV2fa2KBfz0ub0f0EMXSK3pwyImdnhX9eMfekixQQ0O03UCAqwlpQ&X-Amz-Signature=5daf90b67f5623dd6ee47b312d878a0060311318a828a1bfa963b27147d0b9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPVNMTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBwOrsKzSGeonrgyvSK86HnUlTgMvljAKzKvEMFCKcBAiBLmGtyzMBbVfCAAwRvCGyWyU4D0lMOJ4i48PPN6FqXSSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrHl2WT4DiUdhOwpKtwDC%2BzoUaBt0fGErTvHAjMIHk0MyQVPPwzljWd0SMxY2SbzOlDz4DoWUkUgv0WyUM7PhQua1QhlZ01eTj4wJKFt5pCQMA%2Bli8FgQPm7OAUjn%2FW%2FHr0HbIDHNsIe3yHSBOyj3NLKaD0FtTm%2FdrLdqfjzwVwh0M2pQlKehR9TKMr3RdXU1djLw7sZn1j7dn%2FCVxl%2FoFBRhf5rqZ4LGln%2FwRPCxPOjcSjDqql0j1kR8rgXnvCjrC2QpWeTKw%2BI6TCCAoPiZpoPga1NfKk93X3OD1hRr%2F5YMKcAmBDZ4cckRaGzsLW3%2BdYGBNjN3L%2BseCDTJYDXdWMkaGH%2FVC%2FCwjKRSRXj7iXHY%2F1B0jZLFyPmzWMQuKvcPIurKhNDddsU6NPB7c7Lv08qu%2FZCYtJdHEvLTUZGzkoRiwvycErBlDU4t%2BEmIf4p80X0ayg5mzfk5VMdvc3ZVJlJq9h09IiM6UbG1M3pqujdVUde76iY0uDgGbYkU10B5AFc2n7vswulaGi0QEUPVmtndnjk6RRIgoqZnzcZH%2Fbhla3y%2BCJ63ZN0A6OmoJjpDm5KIUJNr0c9GrK2ujZddnhsqS2d2yb0uTv5AC1JcFQ37c7r191gvyo7oKrx%2BExBL8wgPiMQWVJmZ9wwtpGCwwY6pgFiSzvbmBQKpdtG144Mm7A0LzclXQQxIGMMQG2o%2BWamgO%2Fx9VovFGTRWBLsMUP4vcXq2p6T6Eo8Bp93J3q7qjB37Oi39W725EEuAjDdWSQOXOK8khveqgNPzRRnu1piF8CkxT4V%2F%2BhMyBGzFXiBB4IFechu9CO%2BIFPZWBTeW8aKV2fa2KBfz0ub0f0EMXSK3pwyImdnhX9eMfekixQQ0O03UCAqwlpQ&X-Amz-Signature=d7b68fbde7c1602b4e8a17e72dcc0b3ceb1c74713d4b91aa74350b0d3dfa7c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPVNMTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBwOrsKzSGeonrgyvSK86HnUlTgMvljAKzKvEMFCKcBAiBLmGtyzMBbVfCAAwRvCGyWyU4D0lMOJ4i48PPN6FqXSSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrHl2WT4DiUdhOwpKtwDC%2BzoUaBt0fGErTvHAjMIHk0MyQVPPwzljWd0SMxY2SbzOlDz4DoWUkUgv0WyUM7PhQua1QhlZ01eTj4wJKFt5pCQMA%2Bli8FgQPm7OAUjn%2FW%2FHr0HbIDHNsIe3yHSBOyj3NLKaD0FtTm%2FdrLdqfjzwVwh0M2pQlKehR9TKMr3RdXU1djLw7sZn1j7dn%2FCVxl%2FoFBRhf5rqZ4LGln%2FwRPCxPOjcSjDqql0j1kR8rgXnvCjrC2QpWeTKw%2BI6TCCAoPiZpoPga1NfKk93X3OD1hRr%2F5YMKcAmBDZ4cckRaGzsLW3%2BdYGBNjN3L%2BseCDTJYDXdWMkaGH%2FVC%2FCwjKRSRXj7iXHY%2F1B0jZLFyPmzWMQuKvcPIurKhNDddsU6NPB7c7Lv08qu%2FZCYtJdHEvLTUZGzkoRiwvycErBlDU4t%2BEmIf4p80X0ayg5mzfk5VMdvc3ZVJlJq9h09IiM6UbG1M3pqujdVUde76iY0uDgGbYkU10B5AFc2n7vswulaGi0QEUPVmtndnjk6RRIgoqZnzcZH%2Fbhla3y%2BCJ63ZN0A6OmoJjpDm5KIUJNr0c9GrK2ujZddnhsqS2d2yb0uTv5AC1JcFQ37c7r191gvyo7oKrx%2BExBL8wgPiMQWVJmZ9wwtpGCwwY6pgFiSzvbmBQKpdtG144Mm7A0LzclXQQxIGMMQG2o%2BWamgO%2Fx9VovFGTRWBLsMUP4vcXq2p6T6Eo8Bp93J3q7qjB37Oi39W725EEuAjDdWSQOXOK8khveqgNPzRRnu1piF8CkxT4V%2F%2BhMyBGzFXiBB4IFechu9CO%2BIFPZWBTeW8aKV2fa2KBfz0ub0f0EMXSK3pwyImdnhX9eMfekixQQ0O03UCAqwlpQ&X-Amz-Signature=c17374a9866425544041ab7de5f76a88bf1c64a46aa20a5085b14a4872ede98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
