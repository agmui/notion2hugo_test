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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4WDENS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa7OyE0fO2wJRkvx%2F6Z8s4n47CzDKgQj5WSWB%2BRQBiWAiAh4QjLsZRZjcEEL%2B3isoCIEV2kPVcUzcwIPfiRog76VyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs5YappTi206i6q1FKtwDbnvVQXi11waxCLgA3j4dK3DVielFm%2B7cFiH7eW3%2BoZeqlgLkArIRvOHzjETKeoL38m%2B3d2RFE5T6Rov5HJztLJJz25o4Y9vJCfDIITgEOTUFPHUREyRmtvZHmQspr2xHCY01K2z4L0rGCx2WFkZkXoiD%2B00UuuM07aUvqeCzjSsRyvGydcfW4MUfDKRhuReVH4lRQYmIyh5nBQVBZUal77ENPWILXvQkGj3%2Fm8X%2Ba%2FjKDtRl8rS7fa23yY4WfSPJVNt6FrH0idAam7kcDDqQB57vLUfBaeZxm3cel3gEVjx2%2BpGrWjGVAjjJui7%2BLX7AtV85O9Qpp3sN7qw0NCr%2BcE49rXXlq1h3C9pftGF48sBphUJg%2B3NQAtekg1Ii0V1pBa8Hko3zAk9KW8QLajRMkcGpwqBdZUBXwoDh3lwQnqLorequGOhXYBCDkmfdGkWpuOlN1qR5Ih1e2D%2FeSmuq0DFHmeikYGQpvDCzt7E095yU9GkvRyyBf%2B%2BddyBAUv53sW0CRimxUQTrKk0Xa8ezNGT4O18egjo4VavcJBo0FYrZaiIca0VuHIbNsJhuzx%2FCHDUqX3B8Y2n5I5ShhBD6M03IPpCDHdAtcekt3%2F4ucTrwy6qHDzkRriyQY3QwxvbjvQY6pgHEGaiOuJ4mRSxK07Q9nPT3Pq7AaseevJmmIwLw44uZgnN4wIVXXq%2Bzz5e46CV2FUGmzDMn%2B6do7Nwjp%2F1O4S6kL8usN7piwqiKs6So5zCgNHgi3TjPMVwDmKq%2BbC1bHWE7knwGB%2Fa72zZeGWp30MtzuemljqCa%2F3uSHAEF8nkkMCqkyFDE49HnrxNaWgYYHxpYi9gHX%2FSUBjcVpPhj2995tnRkoGjw&X-Amz-Signature=8a97ffc1e0de8caf7b96bf183927e0f813f8af242bda47911fe49fc499f56757&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4WDENS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa7OyE0fO2wJRkvx%2F6Z8s4n47CzDKgQj5WSWB%2BRQBiWAiAh4QjLsZRZjcEEL%2B3isoCIEV2kPVcUzcwIPfiRog76VyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs5YappTi206i6q1FKtwDbnvVQXi11waxCLgA3j4dK3DVielFm%2B7cFiH7eW3%2BoZeqlgLkArIRvOHzjETKeoL38m%2B3d2RFE5T6Rov5HJztLJJz25o4Y9vJCfDIITgEOTUFPHUREyRmtvZHmQspr2xHCY01K2z4L0rGCx2WFkZkXoiD%2B00UuuM07aUvqeCzjSsRyvGydcfW4MUfDKRhuReVH4lRQYmIyh5nBQVBZUal77ENPWILXvQkGj3%2Fm8X%2Ba%2FjKDtRl8rS7fa23yY4WfSPJVNt6FrH0idAam7kcDDqQB57vLUfBaeZxm3cel3gEVjx2%2BpGrWjGVAjjJui7%2BLX7AtV85O9Qpp3sN7qw0NCr%2BcE49rXXlq1h3C9pftGF48sBphUJg%2B3NQAtekg1Ii0V1pBa8Hko3zAk9KW8QLajRMkcGpwqBdZUBXwoDh3lwQnqLorequGOhXYBCDkmfdGkWpuOlN1qR5Ih1e2D%2FeSmuq0DFHmeikYGQpvDCzt7E095yU9GkvRyyBf%2B%2BddyBAUv53sW0CRimxUQTrKk0Xa8ezNGT4O18egjo4VavcJBo0FYrZaiIca0VuHIbNsJhuzx%2FCHDUqX3B8Y2n5I5ShhBD6M03IPpCDHdAtcekt3%2F4ucTrwy6qHDzkRriyQY3QwxvbjvQY6pgHEGaiOuJ4mRSxK07Q9nPT3Pq7AaseevJmmIwLw44uZgnN4wIVXXq%2Bzz5e46CV2FUGmzDMn%2B6do7Nwjp%2F1O4S6kL8usN7piwqiKs6So5zCgNHgi3TjPMVwDmKq%2BbC1bHWE7knwGB%2Fa72zZeGWp30MtzuemljqCa%2F3uSHAEF8nkkMCqkyFDE49HnrxNaWgYYHxpYi9gHX%2FSUBjcVpPhj2995tnRkoGjw&X-Amz-Signature=7cd9d9b98742cb66089455001f43899485f6d045eed2064e1d25698bffad08b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4WDENS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa7OyE0fO2wJRkvx%2F6Z8s4n47CzDKgQj5WSWB%2BRQBiWAiAh4QjLsZRZjcEEL%2B3isoCIEV2kPVcUzcwIPfiRog76VyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs5YappTi206i6q1FKtwDbnvVQXi11waxCLgA3j4dK3DVielFm%2B7cFiH7eW3%2BoZeqlgLkArIRvOHzjETKeoL38m%2B3d2RFE5T6Rov5HJztLJJz25o4Y9vJCfDIITgEOTUFPHUREyRmtvZHmQspr2xHCY01K2z4L0rGCx2WFkZkXoiD%2B00UuuM07aUvqeCzjSsRyvGydcfW4MUfDKRhuReVH4lRQYmIyh5nBQVBZUal77ENPWILXvQkGj3%2Fm8X%2Ba%2FjKDtRl8rS7fa23yY4WfSPJVNt6FrH0idAam7kcDDqQB57vLUfBaeZxm3cel3gEVjx2%2BpGrWjGVAjjJui7%2BLX7AtV85O9Qpp3sN7qw0NCr%2BcE49rXXlq1h3C9pftGF48sBphUJg%2B3NQAtekg1Ii0V1pBa8Hko3zAk9KW8QLajRMkcGpwqBdZUBXwoDh3lwQnqLorequGOhXYBCDkmfdGkWpuOlN1qR5Ih1e2D%2FeSmuq0DFHmeikYGQpvDCzt7E095yU9GkvRyyBf%2B%2BddyBAUv53sW0CRimxUQTrKk0Xa8ezNGT4O18egjo4VavcJBo0FYrZaiIca0VuHIbNsJhuzx%2FCHDUqX3B8Y2n5I5ShhBD6M03IPpCDHdAtcekt3%2F4ucTrwy6qHDzkRriyQY3QwxvbjvQY6pgHEGaiOuJ4mRSxK07Q9nPT3Pq7AaseevJmmIwLw44uZgnN4wIVXXq%2Bzz5e46CV2FUGmzDMn%2B6do7Nwjp%2F1O4S6kL8usN7piwqiKs6So5zCgNHgi3TjPMVwDmKq%2BbC1bHWE7knwGB%2Fa72zZeGWp30MtzuemljqCa%2F3uSHAEF8nkkMCqkyFDE49HnrxNaWgYYHxpYi9gHX%2FSUBjcVpPhj2995tnRkoGjw&X-Amz-Signature=a05df36b77fcfb301924a322af790acb693b4afbd58ca1be380cb2afbabe993c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
