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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRL5CTAE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD72CCaGVI93bFIEnA%2BXL6p3Jg3Po5O6bHJB3BqYG6HYwIgP%2F9Hp2EeiYcpfs0QhHYG%2F4743%2BZNXFcVS8bKHZJ2emcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPSEfIZfecpgwKqgyrcA4XHGqm%2F9IMnAtOROUu85iHrkScNNaceItGcmPi8zEePYJ3o9VpikVW6sFpaxvUAb3hH%2FveFj%2BbQQKC%2Fgz0T63LaRTgWZ6Ip8hP2qvjzrNN5xhuG1qvtMHh6N7Ha8djO6mApXloCZM5gxvnhwcwU4YiuW0JIdp044KvHYhQHSXudNztQ1bzIVMqkJvQQXL%2FrZFFCig7hkb7ytMXpSyKXxZ2BaYEa%2BCncDbksuTD%2FB7A5aKNnct1698NJb62TxKs0PnlHWVV8QP%2F%2FqiECcGRfizOUGZrd1EQ3Ez%2Bp9v4q4EA%2BO7PkHJ70Vqp%2Bdbp5RVnzwWUG0HUQv0W9bVNhRlGMHBVDuwV6IAaO0T3wSptIUJxEvAHhBrdy7RZZtXmVflTC0xQ9doRqpjbbRL%2BcQ%2FD0Sy2iD0%2BGjmkWKkSIiiv5H%2FPbjDNVazVR1pKtxJYAp9r3iT3eGu%2B%2BKKxbWEVKBNaIR46lChMLld3vJy10Q7%2FuSPzvTCItTpjsvO1uUp%2BmsP5xZwOxza4P3kqPMw7zPsmo%2FipIjmAebeFh5YhW%2Fbhs%2FID%2BeLc%2FU5lapFM9TnIEpBjZg2D7iV8Ds4vbvRVAJROdHNnSJKx682GUYRE76RB2OlpXXnTWM677M2PjoOaJMODt7LwGOqUBntR3HXi7ZXPbZpJjKoKzs32jNhDTpF2WCY8YbGVNn1ni8ZeRJPOYLGf1Q9oOcGp21fEcLhS10kQuGU62FuDAuToOEyQskYY5pmhitjZNf7taNm4D%2Fv4uNEsAw4RrXwv8%2BbpKBV7ckGb%2Fe414ulvq1ZnRyaTnUrJI3naXBu31o%2F42DIKXaF99FwNT2%2BZheOpr8yqZAzcF5EipqGvrKcV1F17SbxG0&X-Amz-Signature=e78ff02d906ceb73dd09d144e6fd9f07eb2ebe569d1099c0bc80de87a661b694&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRL5CTAE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD72CCaGVI93bFIEnA%2BXL6p3Jg3Po5O6bHJB3BqYG6HYwIgP%2F9Hp2EeiYcpfs0QhHYG%2F4743%2BZNXFcVS8bKHZJ2emcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPSEfIZfecpgwKqgyrcA4XHGqm%2F9IMnAtOROUu85iHrkScNNaceItGcmPi8zEePYJ3o9VpikVW6sFpaxvUAb3hH%2FveFj%2BbQQKC%2Fgz0T63LaRTgWZ6Ip8hP2qvjzrNN5xhuG1qvtMHh6N7Ha8djO6mApXloCZM5gxvnhwcwU4YiuW0JIdp044KvHYhQHSXudNztQ1bzIVMqkJvQQXL%2FrZFFCig7hkb7ytMXpSyKXxZ2BaYEa%2BCncDbksuTD%2FB7A5aKNnct1698NJb62TxKs0PnlHWVV8QP%2F%2FqiECcGRfizOUGZrd1EQ3Ez%2Bp9v4q4EA%2BO7PkHJ70Vqp%2Bdbp5RVnzwWUG0HUQv0W9bVNhRlGMHBVDuwV6IAaO0T3wSptIUJxEvAHhBrdy7RZZtXmVflTC0xQ9doRqpjbbRL%2BcQ%2FD0Sy2iD0%2BGjmkWKkSIiiv5H%2FPbjDNVazVR1pKtxJYAp9r3iT3eGu%2B%2BKKxbWEVKBNaIR46lChMLld3vJy10Q7%2FuSPzvTCItTpjsvO1uUp%2BmsP5xZwOxza4P3kqPMw7zPsmo%2FipIjmAebeFh5YhW%2Fbhs%2FID%2BeLc%2FU5lapFM9TnIEpBjZg2D7iV8Ds4vbvRVAJROdHNnSJKx682GUYRE76RB2OlpXXnTWM677M2PjoOaJMODt7LwGOqUBntR3HXi7ZXPbZpJjKoKzs32jNhDTpF2WCY8YbGVNn1ni8ZeRJPOYLGf1Q9oOcGp21fEcLhS10kQuGU62FuDAuToOEyQskYY5pmhitjZNf7taNm4D%2Fv4uNEsAw4RrXwv8%2BbpKBV7ckGb%2Fe414ulvq1ZnRyaTnUrJI3naXBu31o%2F42DIKXaF99FwNT2%2BZheOpr8yqZAzcF5EipqGvrKcV1F17SbxG0&X-Amz-Signature=e199d7bf67660fd24ab8550e3e740a60b4d064dd1ef8f620264fd68d99a4c692&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRL5CTAE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD72CCaGVI93bFIEnA%2BXL6p3Jg3Po5O6bHJB3BqYG6HYwIgP%2F9Hp2EeiYcpfs0QhHYG%2F4743%2BZNXFcVS8bKHZJ2emcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPSEfIZfecpgwKqgyrcA4XHGqm%2F9IMnAtOROUu85iHrkScNNaceItGcmPi8zEePYJ3o9VpikVW6sFpaxvUAb3hH%2FveFj%2BbQQKC%2Fgz0T63LaRTgWZ6Ip8hP2qvjzrNN5xhuG1qvtMHh6N7Ha8djO6mApXloCZM5gxvnhwcwU4YiuW0JIdp044KvHYhQHSXudNztQ1bzIVMqkJvQQXL%2FrZFFCig7hkb7ytMXpSyKXxZ2BaYEa%2BCncDbksuTD%2FB7A5aKNnct1698NJb62TxKs0PnlHWVV8QP%2F%2FqiECcGRfizOUGZrd1EQ3Ez%2Bp9v4q4EA%2BO7PkHJ70Vqp%2Bdbp5RVnzwWUG0HUQv0W9bVNhRlGMHBVDuwV6IAaO0T3wSptIUJxEvAHhBrdy7RZZtXmVflTC0xQ9doRqpjbbRL%2BcQ%2FD0Sy2iD0%2BGjmkWKkSIiiv5H%2FPbjDNVazVR1pKtxJYAp9r3iT3eGu%2B%2BKKxbWEVKBNaIR46lChMLld3vJy10Q7%2FuSPzvTCItTpjsvO1uUp%2BmsP5xZwOxza4P3kqPMw7zPsmo%2FipIjmAebeFh5YhW%2Fbhs%2FID%2BeLc%2FU5lapFM9TnIEpBjZg2D7iV8Ds4vbvRVAJROdHNnSJKx682GUYRE76RB2OlpXXnTWM677M2PjoOaJMODt7LwGOqUBntR3HXi7ZXPbZpJjKoKzs32jNhDTpF2WCY8YbGVNn1ni8ZeRJPOYLGf1Q9oOcGp21fEcLhS10kQuGU62FuDAuToOEyQskYY5pmhitjZNf7taNm4D%2Fv4uNEsAw4RrXwv8%2BbpKBV7ckGb%2Fe414ulvq1ZnRyaTnUrJI3naXBu31o%2F42DIKXaF99FwNT2%2BZheOpr8yqZAzcF5EipqGvrKcV1F17SbxG0&X-Amz-Signature=6f69346d076409598c81abd5565a22bb7a88a1ff86e921ed4ad935b3362e4fea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
