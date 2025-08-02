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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWR452OA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi92dZygJPjv%2F4g3zh4Se3gELcDH%2F1paEyPmRfS7XT%2BAiEAptFUuyCUfWIgDWNgHsqAIQH2YEkTnIsl3TBeN8xQDNEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIl1Wjfo%2Fxr6AFolqyrcA0DAKrLnWiCiNPGKzADOo719f3mDR7TATxpAi7IR88iQSvmDEPt4MhoQS%2F1kTqlviWX81qtXV0vpKeeW58fDnFmz%2FiLpURul%2FJxWN7VRiMslPNIFSRqt0Kqe%2Bnv%2F0QCORyeLSyLHW8pl%2FtdmAjK2KXu4MaAYDEWX0Ms9IOCQqOlwYGt6a0UWXbCOS8vtX5aJ%2Ff7quNZyYA5AtQAisSwMSUVI%2FMgIj4plL00jeNgHElwu0oYfonoRnmfzIyHWKYEbg0xI4uJqBX8GRWHMiKnErkyyLZGa4eIP%2F5XiFATGgIfuqwQ9ihskKc1MzjdwKAFTBY7j070TiBBmx1V474aguZw61aUDk8N%2B7fb82QJ6aw9BHIulug3nBNLcmrUOA4MwO6ctShL2lM8txhKqRl8oXcOLiwpQF9AihrWJb7zHpSb%2FI7YLxtreaOch4eE1%2BBfdzJ3u53IGAIWrNFLxMJQs3ZqMY2rAJBv477K6GuggwY4zBcSkBAy17OyWVcvRgRpa3TKxiLrzv8quy%2FrqQ%2BRblE5Lw3l1t6scRqzK7bizNY0aoqKFqOEz3tIeBpEz%2Bgxhb%2FMqSWXteUTuhEcxgMzq35SGMkT7EIk6aFcv%2BR0tJc8xD0VlzMNE0E9i2mTJMO%2FvtsQGOqUBWEtR7QgKBIXXVVzNJ1pjiSqQh9RaeVkhPYbdAdies5ReoLKoBDTD%2BoMNKMebSX3zj%2B%2FAz6Ygt7bsGPyua9BYNgfLHXOZyYApCDeYBwIhPWJWoZA6GI1JIcpa6XCylSUM6mkN322nPl7ehW51KyaeBLCGd4wRlpvpJ9DgN%2FFG5CTiZptHWb%2FEvkdK8%2BMip7bTbiM907WrWUb%2FrJQPkn%2BIQ0w2AZgl&X-Amz-Signature=7143eff58493bf612644b7a73c6fe2852a1081a711442cc9f9eb75fbf6cf7471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWR452OA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi92dZygJPjv%2F4g3zh4Se3gELcDH%2F1paEyPmRfS7XT%2BAiEAptFUuyCUfWIgDWNgHsqAIQH2YEkTnIsl3TBeN8xQDNEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIl1Wjfo%2Fxr6AFolqyrcA0DAKrLnWiCiNPGKzADOo719f3mDR7TATxpAi7IR88iQSvmDEPt4MhoQS%2F1kTqlviWX81qtXV0vpKeeW58fDnFmz%2FiLpURul%2FJxWN7VRiMslPNIFSRqt0Kqe%2Bnv%2F0QCORyeLSyLHW8pl%2FtdmAjK2KXu4MaAYDEWX0Ms9IOCQqOlwYGt6a0UWXbCOS8vtX5aJ%2Ff7quNZyYA5AtQAisSwMSUVI%2FMgIj4plL00jeNgHElwu0oYfonoRnmfzIyHWKYEbg0xI4uJqBX8GRWHMiKnErkyyLZGa4eIP%2F5XiFATGgIfuqwQ9ihskKc1MzjdwKAFTBY7j070TiBBmx1V474aguZw61aUDk8N%2B7fb82QJ6aw9BHIulug3nBNLcmrUOA4MwO6ctShL2lM8txhKqRl8oXcOLiwpQF9AihrWJb7zHpSb%2FI7YLxtreaOch4eE1%2BBfdzJ3u53IGAIWrNFLxMJQs3ZqMY2rAJBv477K6GuggwY4zBcSkBAy17OyWVcvRgRpa3TKxiLrzv8quy%2FrqQ%2BRblE5Lw3l1t6scRqzK7bizNY0aoqKFqOEz3tIeBpEz%2Bgxhb%2FMqSWXteUTuhEcxgMzq35SGMkT7EIk6aFcv%2BR0tJc8xD0VlzMNE0E9i2mTJMO%2FvtsQGOqUBWEtR7QgKBIXXVVzNJ1pjiSqQh9RaeVkhPYbdAdies5ReoLKoBDTD%2BoMNKMebSX3zj%2B%2FAz6Ygt7bsGPyua9BYNgfLHXOZyYApCDeYBwIhPWJWoZA6GI1JIcpa6XCylSUM6mkN322nPl7ehW51KyaeBLCGd4wRlpvpJ9DgN%2FFG5CTiZptHWb%2FEvkdK8%2BMip7bTbiM907WrWUb%2FrJQPkn%2BIQ0w2AZgl&X-Amz-Signature=c60953db9942fde0d80854be83740a922a2c56380c10c3a5cc91f4cefdd64c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWR452OA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi92dZygJPjv%2F4g3zh4Se3gELcDH%2F1paEyPmRfS7XT%2BAiEAptFUuyCUfWIgDWNgHsqAIQH2YEkTnIsl3TBeN8xQDNEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIl1Wjfo%2Fxr6AFolqyrcA0DAKrLnWiCiNPGKzADOo719f3mDR7TATxpAi7IR88iQSvmDEPt4MhoQS%2F1kTqlviWX81qtXV0vpKeeW58fDnFmz%2FiLpURul%2FJxWN7VRiMslPNIFSRqt0Kqe%2Bnv%2F0QCORyeLSyLHW8pl%2FtdmAjK2KXu4MaAYDEWX0Ms9IOCQqOlwYGt6a0UWXbCOS8vtX5aJ%2Ff7quNZyYA5AtQAisSwMSUVI%2FMgIj4plL00jeNgHElwu0oYfonoRnmfzIyHWKYEbg0xI4uJqBX8GRWHMiKnErkyyLZGa4eIP%2F5XiFATGgIfuqwQ9ihskKc1MzjdwKAFTBY7j070TiBBmx1V474aguZw61aUDk8N%2B7fb82QJ6aw9BHIulug3nBNLcmrUOA4MwO6ctShL2lM8txhKqRl8oXcOLiwpQF9AihrWJb7zHpSb%2FI7YLxtreaOch4eE1%2BBfdzJ3u53IGAIWrNFLxMJQs3ZqMY2rAJBv477K6GuggwY4zBcSkBAy17OyWVcvRgRpa3TKxiLrzv8quy%2FrqQ%2BRblE5Lw3l1t6scRqzK7bizNY0aoqKFqOEz3tIeBpEz%2Bgxhb%2FMqSWXteUTuhEcxgMzq35SGMkT7EIk6aFcv%2BR0tJc8xD0VlzMNE0E9i2mTJMO%2FvtsQGOqUBWEtR7QgKBIXXVVzNJ1pjiSqQh9RaeVkhPYbdAdies5ReoLKoBDTD%2BoMNKMebSX3zj%2B%2FAz6Ygt7bsGPyua9BYNgfLHXOZyYApCDeYBwIhPWJWoZA6GI1JIcpa6XCylSUM6mkN322nPl7ehW51KyaeBLCGd4wRlpvpJ9DgN%2FFG5CTiZptHWb%2FEvkdK8%2BMip7bTbiM907WrWUb%2FrJQPkn%2BIQ0w2AZgl&X-Amz-Signature=47cec1e699b4c55885b48e78375dc50a11fa09d6d7130600e2be39eaded8c3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
