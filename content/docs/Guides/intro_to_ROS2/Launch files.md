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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56CPQB5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6zD%2Bi4u1rkeYNuFcspAUCNSGpia0SDIKshOwBk8xmAiEA0fIk6ZI%2Bl4aSQ2kKJvyhVIxBSuxfi9aDdEdfIfxZDw0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNNaHhEV5VKFqV4uKCrcA%2FXvrgxDpaCoUAT2lcVOmagf8EvNYZntR2lUj6DzLHURveiu47JMVHyLK6oE9p2l3EIpt6aNCKLO2hHgdG%2Ft0XsPjeqvCRDIgyKG4SnRB5sLKldSWUFnFKDuE3wAP7kvq7nH%2FW5iFLH%2F3XUk6YSdnuwPXJfH7E%2FnFzlY%2Br3I0LP3f8HZqFxg2pOLD4%2FU6LRNcx0Uj9Z5Kfg2g80oXU39vBd4SKZe2XM5YSm5tHtiGiC4sMYBcCj7uqc9N1XMcYVL0mMP1Epmj9R5W8ulxMAKEGaz1USH%2BtFwnPezzR7Lbswcit%2FbaznAbI%2BT4S9Ro1dKqPtu3VUFXQ%2FZlmn4JYH9xwAdIXNmjt6NJ5DC4N91mxIBmzMRbQZLM%2BvI5fe%2BJy7Z2t4IOQ7F8v2kLVdUdhrY%2B2H2eWT2TY0cGxZysJP3QfnXghtuwZuIA0PGiXQhlRhx896GkWnYFeuJVIbqJtkY2VREFi8P6JJS7eiA%2B8BD%2Bl2ZTVYjq3SxUtlhtF1YbjSoa%2FjoZqe%2BbRyph1evOIV%2Fogely5Ux%2BzYcm1SgdoBlRFfWpd3AG7aZXeZ70ynYgcCBisvkP95oAmwgVcsENrJPieFHbMjFcAX31ujiCMOoHttMbZuAl%2FAglcsix5DMMK69i8IGOqUBrsdZNQNz21%2FEm75DdJXHTuyE1MzqPDldIfpxqbosAmtiVQoYotPMjrc1gbIyG4SjbUTJyHddJPEql%2BN7c5aKBNo53uix%2FtN%2FpWUHsfmqfNSj%2FO70%2FEkj8tibt%2Fv6EyqS8YJ5RmojJunAGf0%2BrQYby24ctRpmnsEBYwzPMDcQmJzQuqjRFiFBZVfNXMOXALOiHtLaq3LysQBE%2B4iHClU68VTmEImi&X-Amz-Signature=fa39bee6007c4b68e87c11187d2e834294bc93685f0a0f2494f2b7d9fbde9362&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56CPQB5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6zD%2Bi4u1rkeYNuFcspAUCNSGpia0SDIKshOwBk8xmAiEA0fIk6ZI%2Bl4aSQ2kKJvyhVIxBSuxfi9aDdEdfIfxZDw0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNNaHhEV5VKFqV4uKCrcA%2FXvrgxDpaCoUAT2lcVOmagf8EvNYZntR2lUj6DzLHURveiu47JMVHyLK6oE9p2l3EIpt6aNCKLO2hHgdG%2Ft0XsPjeqvCRDIgyKG4SnRB5sLKldSWUFnFKDuE3wAP7kvq7nH%2FW5iFLH%2F3XUk6YSdnuwPXJfH7E%2FnFzlY%2Br3I0LP3f8HZqFxg2pOLD4%2FU6LRNcx0Uj9Z5Kfg2g80oXU39vBd4SKZe2XM5YSm5tHtiGiC4sMYBcCj7uqc9N1XMcYVL0mMP1Epmj9R5W8ulxMAKEGaz1USH%2BtFwnPezzR7Lbswcit%2FbaznAbI%2BT4S9Ro1dKqPtu3VUFXQ%2FZlmn4JYH9xwAdIXNmjt6NJ5DC4N91mxIBmzMRbQZLM%2BvI5fe%2BJy7Z2t4IOQ7F8v2kLVdUdhrY%2B2H2eWT2TY0cGxZysJP3QfnXghtuwZuIA0PGiXQhlRhx896GkWnYFeuJVIbqJtkY2VREFi8P6JJS7eiA%2B8BD%2Bl2ZTVYjq3SxUtlhtF1YbjSoa%2FjoZqe%2BbRyph1evOIV%2Fogely5Ux%2BzYcm1SgdoBlRFfWpd3AG7aZXeZ70ynYgcCBisvkP95oAmwgVcsENrJPieFHbMjFcAX31ujiCMOoHttMbZuAl%2FAglcsix5DMMK69i8IGOqUBrsdZNQNz21%2FEm75DdJXHTuyE1MzqPDldIfpxqbosAmtiVQoYotPMjrc1gbIyG4SjbUTJyHddJPEql%2BN7c5aKBNo53uix%2FtN%2FpWUHsfmqfNSj%2FO70%2FEkj8tibt%2Fv6EyqS8YJ5RmojJunAGf0%2BrQYby24ctRpmnsEBYwzPMDcQmJzQuqjRFiFBZVfNXMOXALOiHtLaq3LysQBE%2B4iHClU68VTmEImi&X-Amz-Signature=a119638253ac83d8ca32c11f55d4febc3b862e579d175637d8e24c2685d188a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56CPQB5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs6zD%2Bi4u1rkeYNuFcspAUCNSGpia0SDIKshOwBk8xmAiEA0fIk6ZI%2Bl4aSQ2kKJvyhVIxBSuxfi9aDdEdfIfxZDw0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNNaHhEV5VKFqV4uKCrcA%2FXvrgxDpaCoUAT2lcVOmagf8EvNYZntR2lUj6DzLHURveiu47JMVHyLK6oE9p2l3EIpt6aNCKLO2hHgdG%2Ft0XsPjeqvCRDIgyKG4SnRB5sLKldSWUFnFKDuE3wAP7kvq7nH%2FW5iFLH%2F3XUk6YSdnuwPXJfH7E%2FnFzlY%2Br3I0LP3f8HZqFxg2pOLD4%2FU6LRNcx0Uj9Z5Kfg2g80oXU39vBd4SKZe2XM5YSm5tHtiGiC4sMYBcCj7uqc9N1XMcYVL0mMP1Epmj9R5W8ulxMAKEGaz1USH%2BtFwnPezzR7Lbswcit%2FbaznAbI%2BT4S9Ro1dKqPtu3VUFXQ%2FZlmn4JYH9xwAdIXNmjt6NJ5DC4N91mxIBmzMRbQZLM%2BvI5fe%2BJy7Z2t4IOQ7F8v2kLVdUdhrY%2B2H2eWT2TY0cGxZysJP3QfnXghtuwZuIA0PGiXQhlRhx896GkWnYFeuJVIbqJtkY2VREFi8P6JJS7eiA%2B8BD%2Bl2ZTVYjq3SxUtlhtF1YbjSoa%2FjoZqe%2BbRyph1evOIV%2Fogely5Ux%2BzYcm1SgdoBlRFfWpd3AG7aZXeZ70ynYgcCBisvkP95oAmwgVcsENrJPieFHbMjFcAX31ujiCMOoHttMbZuAl%2FAglcsix5DMMK69i8IGOqUBrsdZNQNz21%2FEm75DdJXHTuyE1MzqPDldIfpxqbosAmtiVQoYotPMjrc1gbIyG4SjbUTJyHddJPEql%2BN7c5aKBNo53uix%2FtN%2FpWUHsfmqfNSj%2FO70%2FEkj8tibt%2Fv6EyqS8YJ5RmojJunAGf0%2BrQYby24ctRpmnsEBYwzPMDcQmJzQuqjRFiFBZVfNXMOXALOiHtLaq3LysQBE%2B4iHClU68VTmEImi&X-Amz-Signature=f896349b68eb6a8b32b2e6f367a76f8ad76b23ee8d82f44f06ddeb6e25da982e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
