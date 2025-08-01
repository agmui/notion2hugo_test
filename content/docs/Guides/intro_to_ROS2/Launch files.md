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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6PVNYF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmaMcs62L5Dbt2oi4%2FnI1OtCb1mzCUwtk6M155sBuymAIgM3bF6bKV13D37q2aIdfmQ2QajS8GEFYpoy2gAX5q5ZwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4H8i9uP92gNeHoryrcAz8WTto%2B%2FdskLpACPg4mybsyXXh9o%2FphtIlDCwTxVVqrL0iRMKWJbrRRL5XZam7fZOAcNM%2FBc6E99%2FaWOOV4rI%2BddJvVyX7BlQTr1yrSkZKTZL79lgX8XgFZJFbttKKK7tdmQEPScvBvAJCK98nGx9g6MquuVNcQwm1roFwwPsMRKKHVi%2FSpi6ZkxlALKr1tKAC8RU4Eg6VBdD2Pkpa5R9pLeTicPJ4UkxpK4GfIfey3%2BPUGJyr4YzWWQ8nKyFU9phSRhmJw8RNP5lhfAI4yAkVTjMNq6b8Xrgi4mYhk9GjZsGJuzSQz%2FwGQBxwFrcYFjkzfYme5WCTW78kel6Ur2yJE%2B6aL0f4lr8IJzHQCniPJnZNAOhhFtedLTeO6H%2BOZ42m6Ezi9BFGMHXljh%2FYO9X411k%2BRXKRZTp1sYRIrXAVIOH4YLUdvBuf%2Bt5PZ2GzesSgOvZdlQ%2B%2BXG3h4qIzfDNPcLc%2FzCZyukksO2%2FWi9juBKtW1vLfexZpRz7y8mcKPwKCfzJmqXbmz12iB8MkbBk4l1sxSDEL1kyJ6h9EKW5ONagrrPQp9PHji8b3rd%2FVscgRqP%2BP3JnuCKCGyc%2B8bbIAoJNlx7xh4bMlvz%2F2taeAaMcpCoph%2BZd0BFIM%2BMO%2B%2FscQGOqUB7ckg5kEa3P0VrDHiz%2BYNCxqSHFn2iGgOrTlp3WFiTpTsL%2Fq86kTKIyZzrEV3ylq4hh2dHagQa4BDbQ%2FePrfi5L0jJ3hlxAOQYiYf0XRuZdDXRRxW4KRCYlujXLhGPcdXYmPcKJ1swf%2FLeFpSfPe8TxZ3Xlm1Z8U2tlqfHqYSkR70Zu1L78Lm8c%2FJCcKMxfMbQCPWKeB7oLSU38KyOfx%2BG6YrPIdT&X-Amz-Signature=1ad7ded0f256647a0fbc99f987667fd19638e82c17e16859645ff5ab3a93b0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6PVNYF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmaMcs62L5Dbt2oi4%2FnI1OtCb1mzCUwtk6M155sBuymAIgM3bF6bKV13D37q2aIdfmQ2QajS8GEFYpoy2gAX5q5ZwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4H8i9uP92gNeHoryrcAz8WTto%2B%2FdskLpACPg4mybsyXXh9o%2FphtIlDCwTxVVqrL0iRMKWJbrRRL5XZam7fZOAcNM%2FBc6E99%2FaWOOV4rI%2BddJvVyX7BlQTr1yrSkZKTZL79lgX8XgFZJFbttKKK7tdmQEPScvBvAJCK98nGx9g6MquuVNcQwm1roFwwPsMRKKHVi%2FSpi6ZkxlALKr1tKAC8RU4Eg6VBdD2Pkpa5R9pLeTicPJ4UkxpK4GfIfey3%2BPUGJyr4YzWWQ8nKyFU9phSRhmJw8RNP5lhfAI4yAkVTjMNq6b8Xrgi4mYhk9GjZsGJuzSQz%2FwGQBxwFrcYFjkzfYme5WCTW78kel6Ur2yJE%2B6aL0f4lr8IJzHQCniPJnZNAOhhFtedLTeO6H%2BOZ42m6Ezi9BFGMHXljh%2FYO9X411k%2BRXKRZTp1sYRIrXAVIOH4YLUdvBuf%2Bt5PZ2GzesSgOvZdlQ%2B%2BXG3h4qIzfDNPcLc%2FzCZyukksO2%2FWi9juBKtW1vLfexZpRz7y8mcKPwKCfzJmqXbmz12iB8MkbBk4l1sxSDEL1kyJ6h9EKW5ONagrrPQp9PHji8b3rd%2FVscgRqP%2BP3JnuCKCGyc%2B8bbIAoJNlx7xh4bMlvz%2F2taeAaMcpCoph%2BZd0BFIM%2BMO%2B%2FscQGOqUB7ckg5kEa3P0VrDHiz%2BYNCxqSHFn2iGgOrTlp3WFiTpTsL%2Fq86kTKIyZzrEV3ylq4hh2dHagQa4BDbQ%2FePrfi5L0jJ3hlxAOQYiYf0XRuZdDXRRxW4KRCYlujXLhGPcdXYmPcKJ1swf%2FLeFpSfPe8TxZ3Xlm1Z8U2tlqfHqYSkR70Zu1L78Lm8c%2FJCcKMxfMbQCPWKeB7oLSU38KyOfx%2BG6YrPIdT&X-Amz-Signature=b202da304b3f437957ca1543a508e2ce9f877f4487d06867f7642394231569e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6PVNYF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmaMcs62L5Dbt2oi4%2FnI1OtCb1mzCUwtk6M155sBuymAIgM3bF6bKV13D37q2aIdfmQ2QajS8GEFYpoy2gAX5q5ZwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4H8i9uP92gNeHoryrcAz8WTto%2B%2FdskLpACPg4mybsyXXh9o%2FphtIlDCwTxVVqrL0iRMKWJbrRRL5XZam7fZOAcNM%2FBc6E99%2FaWOOV4rI%2BddJvVyX7BlQTr1yrSkZKTZL79lgX8XgFZJFbttKKK7tdmQEPScvBvAJCK98nGx9g6MquuVNcQwm1roFwwPsMRKKHVi%2FSpi6ZkxlALKr1tKAC8RU4Eg6VBdD2Pkpa5R9pLeTicPJ4UkxpK4GfIfey3%2BPUGJyr4YzWWQ8nKyFU9phSRhmJw8RNP5lhfAI4yAkVTjMNq6b8Xrgi4mYhk9GjZsGJuzSQz%2FwGQBxwFrcYFjkzfYme5WCTW78kel6Ur2yJE%2B6aL0f4lr8IJzHQCniPJnZNAOhhFtedLTeO6H%2BOZ42m6Ezi9BFGMHXljh%2FYO9X411k%2BRXKRZTp1sYRIrXAVIOH4YLUdvBuf%2Bt5PZ2GzesSgOvZdlQ%2B%2BXG3h4qIzfDNPcLc%2FzCZyukksO2%2FWi9juBKtW1vLfexZpRz7y8mcKPwKCfzJmqXbmz12iB8MkbBk4l1sxSDEL1kyJ6h9EKW5ONagrrPQp9PHji8b3rd%2FVscgRqP%2BP3JnuCKCGyc%2B8bbIAoJNlx7xh4bMlvz%2F2taeAaMcpCoph%2BZd0BFIM%2BMO%2B%2FscQGOqUB7ckg5kEa3P0VrDHiz%2BYNCxqSHFn2iGgOrTlp3WFiTpTsL%2Fq86kTKIyZzrEV3ylq4hh2dHagQa4BDbQ%2FePrfi5L0jJ3hlxAOQYiYf0XRuZdDXRRxW4KRCYlujXLhGPcdXYmPcKJ1swf%2FLeFpSfPe8TxZ3Xlm1Z8U2tlqfHqYSkR70Zu1L78Lm8c%2FJCcKMxfMbQCPWKeB7oLSU38KyOfx%2BG6YrPIdT&X-Amz-Signature=a880e6b71a426ad59bdc0f810f92d06386f0291594efbfb645f90603df0ae640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
