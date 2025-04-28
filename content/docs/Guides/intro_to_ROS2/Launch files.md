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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7QBINC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7p%2BpspWwyzr2bF%2BsFYCzNDj1Q8RDis0a2VsMoMxI%2BXAiAJXHu5I0znkN0JeXwv6Fnw954GDy8eP1vEEleJl1HcFCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMY85T%2BIVHfsiUAT2jKtwDsOO%2FC6UeF%2FKxiEe1MXdMVEQBygBY2YYq40rZcPdyd5kakRY1Y8P1rm6Qz77wwO5cjUpMt7B5E%2BygcLDHIrh20wOCMVbgfz1VyqvYhxcoJ1lwdkOpYUE0EFPbcesvdN7NHiqck80y8O%2Bx%2F%2FlOcKytlFOnJiexJo2BOPdfq9zlCdbgcd2E2ED0u9OdcCf0O4%2FC0BAmeqdWpPQoi%2FWjvwSzX0M3m%2BPmzZ%2FlCbvXZeTctwrZzV6Dq4RNxXuOr7uYkRAVVT4CAO%2BFSJuOsBktZ4UcYrlMSWEW2gj0Ok326J%2BktLMYzNhMdPuPP0RvpT4mHEITI1Sl8BCXDXqccFzd2ylB4%2F68bATqOaojqnx5sR0xqPPedzVDXJU5259C2%2FMOTnBBkQNkT2cAtAZpbKwvrrb9lj2Nm8DpMZXgHFcBKY8fJZMqSgHB2AG5cjwL0gCyaTJ8Oq7MYj6bMmsmm8qMFepJMW7Fe0ReYZB0y2iKpZoOMGcYKnWuEChRiOSrVtmcuIQ4YQ5HVHbEDyG6DQnFIhX1fBdDNdBLp0fS6HJerKyecO5ziQVUN3v%2B47FkBY0Q7XxsGdFiHpJqDuTxkzZKjJbSrUxwum6E%2F6G8rx%2Bn1Qcf%2FJ8P%2Fp%2BtWsiMlmc2Azsw6KK7wAY6pgFeKrOG1k8JGPFMkMBqiXL9nMc%2B%2BqgXxptrtWJL6n9h2ZqFtikpYgchEjMnWlOy7AfW8pOLrpeH45na12dq8%2Fj%2Bo9g%2F6Lo%2BYRW3I34QSdUQ6rHFK1Sr0uNBTmkWQDZd2mLs%2FlPHozJiRTsTuW1J4beh85N027URUVDK7IksX7ZCE%2BHQaaE5gsYOI%2FKahKIHZ6iXrRFSdZl123wTUXzn8NMjFgnmTIac&X-Amz-Signature=66ebef7d624563e386f90531e258b49ce188430a5af561a71421ef1e3ac76e60&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7QBINC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7p%2BpspWwyzr2bF%2BsFYCzNDj1Q8RDis0a2VsMoMxI%2BXAiAJXHu5I0znkN0JeXwv6Fnw954GDy8eP1vEEleJl1HcFCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMY85T%2BIVHfsiUAT2jKtwDsOO%2FC6UeF%2FKxiEe1MXdMVEQBygBY2YYq40rZcPdyd5kakRY1Y8P1rm6Qz77wwO5cjUpMt7B5E%2BygcLDHIrh20wOCMVbgfz1VyqvYhxcoJ1lwdkOpYUE0EFPbcesvdN7NHiqck80y8O%2Bx%2F%2FlOcKytlFOnJiexJo2BOPdfq9zlCdbgcd2E2ED0u9OdcCf0O4%2FC0BAmeqdWpPQoi%2FWjvwSzX0M3m%2BPmzZ%2FlCbvXZeTctwrZzV6Dq4RNxXuOr7uYkRAVVT4CAO%2BFSJuOsBktZ4UcYrlMSWEW2gj0Ok326J%2BktLMYzNhMdPuPP0RvpT4mHEITI1Sl8BCXDXqccFzd2ylB4%2F68bATqOaojqnx5sR0xqPPedzVDXJU5259C2%2FMOTnBBkQNkT2cAtAZpbKwvrrb9lj2Nm8DpMZXgHFcBKY8fJZMqSgHB2AG5cjwL0gCyaTJ8Oq7MYj6bMmsmm8qMFepJMW7Fe0ReYZB0y2iKpZoOMGcYKnWuEChRiOSrVtmcuIQ4YQ5HVHbEDyG6DQnFIhX1fBdDNdBLp0fS6HJerKyecO5ziQVUN3v%2B47FkBY0Q7XxsGdFiHpJqDuTxkzZKjJbSrUxwum6E%2F6G8rx%2Bn1Qcf%2FJ8P%2Fp%2BtWsiMlmc2Azsw6KK7wAY6pgFeKrOG1k8JGPFMkMBqiXL9nMc%2B%2BqgXxptrtWJL6n9h2ZqFtikpYgchEjMnWlOy7AfW8pOLrpeH45na12dq8%2Fj%2Bo9g%2F6Lo%2BYRW3I34QSdUQ6rHFK1Sr0uNBTmkWQDZd2mLs%2FlPHozJiRTsTuW1J4beh85N027URUVDK7IksX7ZCE%2BHQaaE5gsYOI%2FKahKIHZ6iXrRFSdZl123wTUXzn8NMjFgnmTIac&X-Amz-Signature=2524b4cc60f4d4ea14fe1ccdbb94599c58db5019d196f7634ffec4b1423c86e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7QBINC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7p%2BpspWwyzr2bF%2BsFYCzNDj1Q8RDis0a2VsMoMxI%2BXAiAJXHu5I0znkN0JeXwv6Fnw954GDy8eP1vEEleJl1HcFCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMY85T%2BIVHfsiUAT2jKtwDsOO%2FC6UeF%2FKxiEe1MXdMVEQBygBY2YYq40rZcPdyd5kakRY1Y8P1rm6Qz77wwO5cjUpMt7B5E%2BygcLDHIrh20wOCMVbgfz1VyqvYhxcoJ1lwdkOpYUE0EFPbcesvdN7NHiqck80y8O%2Bx%2F%2FlOcKytlFOnJiexJo2BOPdfq9zlCdbgcd2E2ED0u9OdcCf0O4%2FC0BAmeqdWpPQoi%2FWjvwSzX0M3m%2BPmzZ%2FlCbvXZeTctwrZzV6Dq4RNxXuOr7uYkRAVVT4CAO%2BFSJuOsBktZ4UcYrlMSWEW2gj0Ok326J%2BktLMYzNhMdPuPP0RvpT4mHEITI1Sl8BCXDXqccFzd2ylB4%2F68bATqOaojqnx5sR0xqPPedzVDXJU5259C2%2FMOTnBBkQNkT2cAtAZpbKwvrrb9lj2Nm8DpMZXgHFcBKY8fJZMqSgHB2AG5cjwL0gCyaTJ8Oq7MYj6bMmsmm8qMFepJMW7Fe0ReYZB0y2iKpZoOMGcYKnWuEChRiOSrVtmcuIQ4YQ5HVHbEDyG6DQnFIhX1fBdDNdBLp0fS6HJerKyecO5ziQVUN3v%2B47FkBY0Q7XxsGdFiHpJqDuTxkzZKjJbSrUxwum6E%2F6G8rx%2Bn1Qcf%2FJ8P%2Fp%2BtWsiMlmc2Azsw6KK7wAY6pgFeKrOG1k8JGPFMkMBqiXL9nMc%2B%2BqgXxptrtWJL6n9h2ZqFtikpYgchEjMnWlOy7AfW8pOLrpeH45na12dq8%2Fj%2Bo9g%2F6Lo%2BYRW3I34QSdUQ6rHFK1Sr0uNBTmkWQDZd2mLs%2FlPHozJiRTsTuW1J4beh85N027URUVDK7IksX7ZCE%2BHQaaE5gsYOI%2FKahKIHZ6iXrRFSdZl123wTUXzn8NMjFgnmTIac&X-Amz-Signature=dd960034aeed70bfd4c241ed7505d659837913875b7637357f764620a1ca84d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
