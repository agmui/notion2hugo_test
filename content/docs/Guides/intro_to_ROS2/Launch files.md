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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4TUE7M%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICeUODMrJSTfpKYLQZhS0U%2Fls88yWhp60MHv7E%2BFjTSCAiEAmoyKOLfyWCl%2BC3eJg53PLYv8qQYJRdnmE7arnUcu%2FA0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLjK0GTVjQlKrU9H8SrcA%2FiUS08OVVYadTZrodfoym0X6f59obK3wYB8qAmTWmg9cfgJRK0PGl%2F6wcVmAG3IX9NLKCfKHikEJNYhUo%2FbayFUCqu7YntGLcienFsGV2DROSmgFO76diCtTB97FOqEk%2BFhPhXVdG%2BICm8K8oT82U2AU85rRjw8xwC4yQ4C0maKncQpp9MnJi1qNMsx%2F%2B5FttJHEhZOF6IhOnSQDYHRa%2BanhgMUY2tzKJDfAKtqS9x0C2l834%2Fl6pStUUsNAGu8MuHu6hSq8JZ1gsORRKRqi724B3wNqi1mL0DHw9l%2FD4qhWcacsJG9PEp4XuACg2T3Z11%2FJyucYromrqiNzz1Nggppljobb4aUrvyrio2zIaKEBUykMqP6ikBLTDpxNsIpjU9tBxZP4lXmiH2HX7Q4CaaH3po8BT5EqaYa9yD5zngFh%2Bd5iHxdPM%2FwOxNtrF0oEuf0O7vWaFOsDs4pNk3Hy6nFOZErPmjl3R8RAXdnrnN9YwxoC3yxcTUCChbrQvJ7%2FvGUG%2BXVIBdwxdK6XW5VfHGLzbFitKcFJwR5o7hI7C%2BYNc7CKkC4QcanPt2BT4FY0Db40pHnso6x%2Fp40fuGLqTr1QHWPj%2Fx0y5bvWO%2BmKDmTI6%2BclLCTn4x7GIvQMO7F6sIGOqUBsdJz48%2B1WDt5YbBnPef2LfwAQEgpzIPSE%2FfzecynQOHivQh%2FF8CoeCREjMhlqLtDAOkNkv1Js8%2FhgRdbQwJ9X2VZN2GYUAIEpZ0uyUX1Sc4CzC%2BqMS0O7nvCpDhtKcWcLtauc4vSIQ7pMXjVyscSdp7tS4dS%2FLnoGq%2FWCqfdPdc3gcqp1PqUUfCM532wcHbfDpXVaS0gSvns4U95OecBVI6419zc&X-Amz-Signature=242f23e23a9bdb1866f8410be91a718549de2c5ec2d7beeb50d6b3b33ea95848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4TUE7M%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICeUODMrJSTfpKYLQZhS0U%2Fls88yWhp60MHv7E%2BFjTSCAiEAmoyKOLfyWCl%2BC3eJg53PLYv8qQYJRdnmE7arnUcu%2FA0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLjK0GTVjQlKrU9H8SrcA%2FiUS08OVVYadTZrodfoym0X6f59obK3wYB8qAmTWmg9cfgJRK0PGl%2F6wcVmAG3IX9NLKCfKHikEJNYhUo%2FbayFUCqu7YntGLcienFsGV2DROSmgFO76diCtTB97FOqEk%2BFhPhXVdG%2BICm8K8oT82U2AU85rRjw8xwC4yQ4C0maKncQpp9MnJi1qNMsx%2F%2B5FttJHEhZOF6IhOnSQDYHRa%2BanhgMUY2tzKJDfAKtqS9x0C2l834%2Fl6pStUUsNAGu8MuHu6hSq8JZ1gsORRKRqi724B3wNqi1mL0DHw9l%2FD4qhWcacsJG9PEp4XuACg2T3Z11%2FJyucYromrqiNzz1Nggppljobb4aUrvyrio2zIaKEBUykMqP6ikBLTDpxNsIpjU9tBxZP4lXmiH2HX7Q4CaaH3po8BT5EqaYa9yD5zngFh%2Bd5iHxdPM%2FwOxNtrF0oEuf0O7vWaFOsDs4pNk3Hy6nFOZErPmjl3R8RAXdnrnN9YwxoC3yxcTUCChbrQvJ7%2FvGUG%2BXVIBdwxdK6XW5VfHGLzbFitKcFJwR5o7hI7C%2BYNc7CKkC4QcanPt2BT4FY0Db40pHnso6x%2Fp40fuGLqTr1QHWPj%2Fx0y5bvWO%2BmKDmTI6%2BclLCTn4x7GIvQMO7F6sIGOqUBsdJz48%2B1WDt5YbBnPef2LfwAQEgpzIPSE%2FfzecynQOHivQh%2FF8CoeCREjMhlqLtDAOkNkv1Js8%2FhgRdbQwJ9X2VZN2GYUAIEpZ0uyUX1Sc4CzC%2BqMS0O7nvCpDhtKcWcLtauc4vSIQ7pMXjVyscSdp7tS4dS%2FLnoGq%2FWCqfdPdc3gcqp1PqUUfCM532wcHbfDpXVaS0gSvns4U95OecBVI6419zc&X-Amz-Signature=0b37f36e5adbcfad96342db47aca6416066685bac2069675f4733fd6887e80e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4TUE7M%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICeUODMrJSTfpKYLQZhS0U%2Fls88yWhp60MHv7E%2BFjTSCAiEAmoyKOLfyWCl%2BC3eJg53PLYv8qQYJRdnmE7arnUcu%2FA0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLjK0GTVjQlKrU9H8SrcA%2FiUS08OVVYadTZrodfoym0X6f59obK3wYB8qAmTWmg9cfgJRK0PGl%2F6wcVmAG3IX9NLKCfKHikEJNYhUo%2FbayFUCqu7YntGLcienFsGV2DROSmgFO76diCtTB97FOqEk%2BFhPhXVdG%2BICm8K8oT82U2AU85rRjw8xwC4yQ4C0maKncQpp9MnJi1qNMsx%2F%2B5FttJHEhZOF6IhOnSQDYHRa%2BanhgMUY2tzKJDfAKtqS9x0C2l834%2Fl6pStUUsNAGu8MuHu6hSq8JZ1gsORRKRqi724B3wNqi1mL0DHw9l%2FD4qhWcacsJG9PEp4XuACg2T3Z11%2FJyucYromrqiNzz1Nggppljobb4aUrvyrio2zIaKEBUykMqP6ikBLTDpxNsIpjU9tBxZP4lXmiH2HX7Q4CaaH3po8BT5EqaYa9yD5zngFh%2Bd5iHxdPM%2FwOxNtrF0oEuf0O7vWaFOsDs4pNk3Hy6nFOZErPmjl3R8RAXdnrnN9YwxoC3yxcTUCChbrQvJ7%2FvGUG%2BXVIBdwxdK6XW5VfHGLzbFitKcFJwR5o7hI7C%2BYNc7CKkC4QcanPt2BT4FY0Db40pHnso6x%2Fp40fuGLqTr1QHWPj%2Fx0y5bvWO%2BmKDmTI6%2BclLCTn4x7GIvQMO7F6sIGOqUBsdJz48%2B1WDt5YbBnPef2LfwAQEgpzIPSE%2FfzecynQOHivQh%2FF8CoeCREjMhlqLtDAOkNkv1Js8%2FhgRdbQwJ9X2VZN2GYUAIEpZ0uyUX1Sc4CzC%2BqMS0O7nvCpDhtKcWcLtauc4vSIQ7pMXjVyscSdp7tS4dS%2FLnoGq%2FWCqfdPdc3gcqp1PqUUfCM532wcHbfDpXVaS0gSvns4U95OecBVI6419zc&X-Amz-Signature=3e00f5664c5e4931af75d48cef7a850dd9046d680becf9639094cbd59c9afeac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
