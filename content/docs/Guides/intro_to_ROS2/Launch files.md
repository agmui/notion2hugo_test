---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KF4N4VH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCfILYwCXr8MtQ1%2B836oi2Hi8U4dVoQDrfX6If%2FQyZuSwIgBmUBher8bWEolpjlI75R7xmE0KZpVYvrQrzx3Pewr%2BgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGATWmq1BnwMALVwCrcA%2BYPIg2CPVQJcOlnxxq07OvlGWjXlRCQNqvTLX2LWPXybBS16usNMzXK24BgfU3m0oY75Wb%2FsdvuNumDbd134Q6lnyfrTHbWb3N7otAwtZ2RESkvlHGNt4ubBtemS9Sb%2BZ2XeiVTMTXpK%2FgCQ7siaWit1mSN1NuW31y5FppNYPyI2Eq9K9UZ8V54ZISQBxyc1NVcVO%2FdSHCsSNyxUefOjTtD6Z9NGoO2PcXGhVcvRQ42PVecfqLJI3AKa46LPM2LPWW%2FzDcdrkoF1SpLx9L%2BApWNAjfz4QUxMc1J%2FVo4TDXiv93598gMNseSNNLqvuBkfaeiQMg%2FsCthFnz9Z85oUY3Q98HUAD67imSYuT5KSK7QHCPLDj3lH8aV4mpG0RXqiG4dvvW1u3pCGrYXX48PHPpAPQF4MvoVadFmITszqnb1m%2B6wk00JUap%2F0Xd0OVU1J8OneT6Y09MwELNbSyJJsVTpq7dCaqJLzgweT4bgzb39Oq8C2WRMcyqKSiWOVbc25yvHQS55YNXb2zOLqvcxk%2FhJzC4X5oHTg1M%2BsjQK5pyZYeEzAQ4rtJmxaDKCM1TytgeWhwGqTOjGQQSMSPIVjDYumXw1lb7W5bUP3RYsDkN1zwu%2BGp1riTdet0rUMO2foMQGOqUB2ppfrIbhUxRDxs7RNUXwCyog1wk18m22MsDqK5dwwAfZUFZtmkyuQj8RSvNGrJs2mtdBRk7m%2BaU8CWQWr%2BcSOTH6M6MzSC8K3QzieyXxQ0sRw5MO1BFbqYv%2FFQwWooUFhlp0mZJvL6xHAePG4aTwUrgyefxApauCdRKeSMKOgsbA3I6ZAp3qnC5N6sFSmMJdJJue8JwKpmTn%2BpJl7n4IVk27zmr5&X-Amz-Signature=5f32ddea82963a52f95961eb7180974cf474b7321578bf770f0e7883ff9c8e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KF4N4VH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCfILYwCXr8MtQ1%2B836oi2Hi8U4dVoQDrfX6If%2FQyZuSwIgBmUBher8bWEolpjlI75R7xmE0KZpVYvrQrzx3Pewr%2BgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGATWmq1BnwMALVwCrcA%2BYPIg2CPVQJcOlnxxq07OvlGWjXlRCQNqvTLX2LWPXybBS16usNMzXK24BgfU3m0oY75Wb%2FsdvuNumDbd134Q6lnyfrTHbWb3N7otAwtZ2RESkvlHGNt4ubBtemS9Sb%2BZ2XeiVTMTXpK%2FgCQ7siaWit1mSN1NuW31y5FppNYPyI2Eq9K9UZ8V54ZISQBxyc1NVcVO%2FdSHCsSNyxUefOjTtD6Z9NGoO2PcXGhVcvRQ42PVecfqLJI3AKa46LPM2LPWW%2FzDcdrkoF1SpLx9L%2BApWNAjfz4QUxMc1J%2FVo4TDXiv93598gMNseSNNLqvuBkfaeiQMg%2FsCthFnz9Z85oUY3Q98HUAD67imSYuT5KSK7QHCPLDj3lH8aV4mpG0RXqiG4dvvW1u3pCGrYXX48PHPpAPQF4MvoVadFmITszqnb1m%2B6wk00JUap%2F0Xd0OVU1J8OneT6Y09MwELNbSyJJsVTpq7dCaqJLzgweT4bgzb39Oq8C2WRMcyqKSiWOVbc25yvHQS55YNXb2zOLqvcxk%2FhJzC4X5oHTg1M%2BsjQK5pyZYeEzAQ4rtJmxaDKCM1TytgeWhwGqTOjGQQSMSPIVjDYumXw1lb7W5bUP3RYsDkN1zwu%2BGp1riTdet0rUMO2foMQGOqUB2ppfrIbhUxRDxs7RNUXwCyog1wk18m22MsDqK5dwwAfZUFZtmkyuQj8RSvNGrJs2mtdBRk7m%2BaU8CWQWr%2BcSOTH6M6MzSC8K3QzieyXxQ0sRw5MO1BFbqYv%2FFQwWooUFhlp0mZJvL6xHAePG4aTwUrgyefxApauCdRKeSMKOgsbA3I6ZAp3qnC5N6sFSmMJdJJue8JwKpmTn%2BpJl7n4IVk27zmr5&X-Amz-Signature=9ac04864da212ead881383f8e987cdd030972db6525da80562edefcbb67cb70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KF4N4VH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCfILYwCXr8MtQ1%2B836oi2Hi8U4dVoQDrfX6If%2FQyZuSwIgBmUBher8bWEolpjlI75R7xmE0KZpVYvrQrzx3Pewr%2BgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGATWmq1BnwMALVwCrcA%2BYPIg2CPVQJcOlnxxq07OvlGWjXlRCQNqvTLX2LWPXybBS16usNMzXK24BgfU3m0oY75Wb%2FsdvuNumDbd134Q6lnyfrTHbWb3N7otAwtZ2RESkvlHGNt4ubBtemS9Sb%2BZ2XeiVTMTXpK%2FgCQ7siaWit1mSN1NuW31y5FppNYPyI2Eq9K9UZ8V54ZISQBxyc1NVcVO%2FdSHCsSNyxUefOjTtD6Z9NGoO2PcXGhVcvRQ42PVecfqLJI3AKa46LPM2LPWW%2FzDcdrkoF1SpLx9L%2BApWNAjfz4QUxMc1J%2FVo4TDXiv93598gMNseSNNLqvuBkfaeiQMg%2FsCthFnz9Z85oUY3Q98HUAD67imSYuT5KSK7QHCPLDj3lH8aV4mpG0RXqiG4dvvW1u3pCGrYXX48PHPpAPQF4MvoVadFmITszqnb1m%2B6wk00JUap%2F0Xd0OVU1J8OneT6Y09MwELNbSyJJsVTpq7dCaqJLzgweT4bgzb39Oq8C2WRMcyqKSiWOVbc25yvHQS55YNXb2zOLqvcxk%2FhJzC4X5oHTg1M%2BsjQK5pyZYeEzAQ4rtJmxaDKCM1TytgeWhwGqTOjGQQSMSPIVjDYumXw1lb7W5bUP3RYsDkN1zwu%2BGp1riTdet0rUMO2foMQGOqUB2ppfrIbhUxRDxs7RNUXwCyog1wk18m22MsDqK5dwwAfZUFZtmkyuQj8RSvNGrJs2mtdBRk7m%2BaU8CWQWr%2BcSOTH6M6MzSC8K3QzieyXxQ0sRw5MO1BFbqYv%2FFQwWooUFhlp0mZJvL6xHAePG4aTwUrgyefxApauCdRKeSMKOgsbA3I6ZAp3qnC5N6sFSmMJdJJue8JwKpmTn%2BpJl7n4IVk27zmr5&X-Amz-Signature=09fcf70c881126e0d254a1c43f44ac83a0ded1419c4c17227f6b23cfb5cca2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
