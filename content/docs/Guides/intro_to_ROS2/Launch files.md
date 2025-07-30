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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRZJ6TR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWGqyGjm5eo680mGVlhNYtABzHkTm%2FLiLLWzn4mYZ6MwIgbbZI%2BefPCmRi729JeygOtyrc7bekNdpgrcUD7AKJYu8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDggRvDwKSAKXycf%2FCrcA1eOfndSD%2FyAK2s6y8t%2FVkZHzkLJRwh9L%2FgTEytcKp9Kd4aePHQM4qak6hcSaAZrhT6QdFS%2FHaNWH3TN0xvd5nynUNrzHrofVKD4egrgyj%2B%2FLjVKRfSa3wkl47%2BkFSZFWSrDGEjK8%2B5GdG%2FbmtiJ3JhQIJqE%2FTttMepXnZSElmEaAB16RFSVT95qRiRoz3B0tsbS1LURAcDMv1xt4Uwac%2BwhmBq5OWG%2BcKuX%2BxIFh%2FNonY1dgWqd7Oakd3q2wek7rNnf7bZLy0I2P6uDsituL6NxPzpaxSJXY4SpnGdPTbg9HY0RrwD6NeIyy4MeQIak0IxOp7JIjsaMC%2Fk3jocy2N53VVCPpKuiT7dmXHf6XiKgix0uPGxBXxgBvz%2BEEHcy4iUaIOQK9WxIFHB99fxGjc3Qm%2FvR7ycqeEBumDOSMwrXHRTZdLOHu8pc3s0vLZjWyQ0begQWs3JlsjR4yFbLgJywqE3l2ru7brson7R9XRU5yCJDlhgE9t00tapuyxfrOkG7xH%2FUcg6kYq%2FRPwwwYrNjtjfAxcruTSNMYc%2BotYdwYuKlCkBr1xEpXBX9nsJrRbaPCqHXCq9PBt2MQNG6%2Fay98SIX5JGRr8zo4fr%2FI5%2FAXN4w1%2BA4qfHDCbioMNbwp8QGOqUBIJOkOoiMy0G9FNINuB4DzkWm9PD%2FpbS4f95bCb58R6pHt%2Bl3kXfAb9k%2FMH5kLE49Uwri2vAnONnynn%2B16WFEAyba4d04kgFppYxQK6ougSkx8Y2Z8q3GtfZfhPn5Jg7jGTxsn7BAfZNrzTivAX8SvpB4OkAcqpqgiPfPxtnGwKWxCtfUdz3awlGc6QG%2BK8CCAZigkWsLrUb9YSYt40i68nHVfmMb&X-Amz-Signature=d9a0fac939ac116d5b5f54cd17192719299c8141026aeda008f22da9316b9445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRZJ6TR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWGqyGjm5eo680mGVlhNYtABzHkTm%2FLiLLWzn4mYZ6MwIgbbZI%2BefPCmRi729JeygOtyrc7bekNdpgrcUD7AKJYu8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDggRvDwKSAKXycf%2FCrcA1eOfndSD%2FyAK2s6y8t%2FVkZHzkLJRwh9L%2FgTEytcKp9Kd4aePHQM4qak6hcSaAZrhT6QdFS%2FHaNWH3TN0xvd5nynUNrzHrofVKD4egrgyj%2B%2FLjVKRfSa3wkl47%2BkFSZFWSrDGEjK8%2B5GdG%2FbmtiJ3JhQIJqE%2FTttMepXnZSElmEaAB16RFSVT95qRiRoz3B0tsbS1LURAcDMv1xt4Uwac%2BwhmBq5OWG%2BcKuX%2BxIFh%2FNonY1dgWqd7Oakd3q2wek7rNnf7bZLy0I2P6uDsituL6NxPzpaxSJXY4SpnGdPTbg9HY0RrwD6NeIyy4MeQIak0IxOp7JIjsaMC%2Fk3jocy2N53VVCPpKuiT7dmXHf6XiKgix0uPGxBXxgBvz%2BEEHcy4iUaIOQK9WxIFHB99fxGjc3Qm%2FvR7ycqeEBumDOSMwrXHRTZdLOHu8pc3s0vLZjWyQ0begQWs3JlsjR4yFbLgJywqE3l2ru7brson7R9XRU5yCJDlhgE9t00tapuyxfrOkG7xH%2FUcg6kYq%2FRPwwwYrNjtjfAxcruTSNMYc%2BotYdwYuKlCkBr1xEpXBX9nsJrRbaPCqHXCq9PBt2MQNG6%2Fay98SIX5JGRr8zo4fr%2FI5%2FAXN4w1%2BA4qfHDCbioMNbwp8QGOqUBIJOkOoiMy0G9FNINuB4DzkWm9PD%2FpbS4f95bCb58R6pHt%2Bl3kXfAb9k%2FMH5kLE49Uwri2vAnONnynn%2B16WFEAyba4d04kgFppYxQK6ougSkx8Y2Z8q3GtfZfhPn5Jg7jGTxsn7BAfZNrzTivAX8SvpB4OkAcqpqgiPfPxtnGwKWxCtfUdz3awlGc6QG%2BK8CCAZigkWsLrUb9YSYt40i68nHVfmMb&X-Amz-Signature=1232b9e23b6a3b71782bbe0a9b214e762279dc55218bd67f3f7728f61e941779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRZJ6TR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWGqyGjm5eo680mGVlhNYtABzHkTm%2FLiLLWzn4mYZ6MwIgbbZI%2BefPCmRi729JeygOtyrc7bekNdpgrcUD7AKJYu8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDggRvDwKSAKXycf%2FCrcA1eOfndSD%2FyAK2s6y8t%2FVkZHzkLJRwh9L%2FgTEytcKp9Kd4aePHQM4qak6hcSaAZrhT6QdFS%2FHaNWH3TN0xvd5nynUNrzHrofVKD4egrgyj%2B%2FLjVKRfSa3wkl47%2BkFSZFWSrDGEjK8%2B5GdG%2FbmtiJ3JhQIJqE%2FTttMepXnZSElmEaAB16RFSVT95qRiRoz3B0tsbS1LURAcDMv1xt4Uwac%2BwhmBq5OWG%2BcKuX%2BxIFh%2FNonY1dgWqd7Oakd3q2wek7rNnf7bZLy0I2P6uDsituL6NxPzpaxSJXY4SpnGdPTbg9HY0RrwD6NeIyy4MeQIak0IxOp7JIjsaMC%2Fk3jocy2N53VVCPpKuiT7dmXHf6XiKgix0uPGxBXxgBvz%2BEEHcy4iUaIOQK9WxIFHB99fxGjc3Qm%2FvR7ycqeEBumDOSMwrXHRTZdLOHu8pc3s0vLZjWyQ0begQWs3JlsjR4yFbLgJywqE3l2ru7brson7R9XRU5yCJDlhgE9t00tapuyxfrOkG7xH%2FUcg6kYq%2FRPwwwYrNjtjfAxcruTSNMYc%2BotYdwYuKlCkBr1xEpXBX9nsJrRbaPCqHXCq9PBt2MQNG6%2Fay98SIX5JGRr8zo4fr%2FI5%2FAXN4w1%2BA4qfHDCbioMNbwp8QGOqUBIJOkOoiMy0G9FNINuB4DzkWm9PD%2FpbS4f95bCb58R6pHt%2Bl3kXfAb9k%2FMH5kLE49Uwri2vAnONnynn%2B16WFEAyba4d04kgFppYxQK6ougSkx8Y2Z8q3GtfZfhPn5Jg7jGTxsn7BAfZNrzTivAX8SvpB4OkAcqpqgiPfPxtnGwKWxCtfUdz3awlGc6QG%2BK8CCAZigkWsLrUb9YSYt40i68nHVfmMb&X-Amz-Signature=f4d65350e9a03022ec28672d1cf6b5e0c7e0ce89c0112b9a16e6ed9136a981a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
