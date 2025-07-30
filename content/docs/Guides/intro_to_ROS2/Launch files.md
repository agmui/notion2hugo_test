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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745ZMONK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsZ%2FBXue8KQILl4r0YFd4aUXkqyTDJWpKYUQ7GtKuG8AiEAw1SU%2BK%2B%2BtUEfChgVI88tAwqdoouo6y3Vj%2FdZewPwrtwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1L5kEQsTOEg%2Fe21SrcAx6P3kTivbPv2RyvbR0cgWJ3l59QGqtrKD%2Bfy2mjxFc1T0HLF82yNLySAwBWmdCw4ycrfjRg4ZnlAR%2BUQQJi9Ym7AHK%2Bk4Dq5qZZuHNQ0bpJ0PDmntAmBOSBhpeJvHR4TVWMO%2B3C1Se2eQNRTUGBE200MKKOGbvygc4hNMcqBRZHt1g7vCoP9HiCeaVWRG9jlvb0kP7OIBVu510JcmaIRe7UFx2ZEUGWFktkSp%2FHzJGrATunQOH25Hbk%2BPC6OfXIaUQQqyooW6pBepWmD%2BIV84haUcKwkeWTYQ9JLQClWtcoVo8SnV3JtDRmaVQ1JyV1pAJmsIrjuvZzupSia9GomIPwITNJCafU7v0%2BDyW3Jz7skeHwHHHlx0XOxuHihhsmrpOA%2BCfLavNPO1kAhloExn%2BvgLQBNAT%2FJLZIl1cHjUQ%2FHo2Ti69mYiPI7qfYl5MDb2PDvu0vgkIkMYcafyp9b%2FyuWmr%2BeZiRF0dFqYrrK9iLDXy9ka4w%2FbL72CmKIQB%2FEyc8QAwGiUpYj6Wxd96lKeZmtSEnb4As391vO651QTBh%2FF2Bi8w7SOZU%2F8HaV9djLrceqn%2Fs1bKBxMS05sGsOdZSbpzGU%2F6Ti3h0Ns9RzMsAyjZhl2GZcWNH7gVvML%2BNp8QGOqUBv0dmqV%2BUBd%2BRSVqEoG9YWbTUc5550jXtgg2aDU6RFuSPfR2kZtBap96SmKWHHwyXMaRxZCRzXwatfu5Z7r2tkHL9%2Ftn9B3gwJMEBIfAW5ZVJvuP3G2be%2FJF%2BgXedN9g5ACp8OC8Anujn4XEyu5IfRMKAhuz5UXox8uhE0WMWXSwFHwnQfFJhce1IA3AIPMMhgPy7%2FEuKS%2B2cdeLO1f%2F0oAIATFyX&X-Amz-Signature=aa3892750b61fd7dcceb5e72ade49d259b2b261f1a036a8f5d546c2334a8b41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745ZMONK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsZ%2FBXue8KQILl4r0YFd4aUXkqyTDJWpKYUQ7GtKuG8AiEAw1SU%2BK%2B%2BtUEfChgVI88tAwqdoouo6y3Vj%2FdZewPwrtwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1L5kEQsTOEg%2Fe21SrcAx6P3kTivbPv2RyvbR0cgWJ3l59QGqtrKD%2Bfy2mjxFc1T0HLF82yNLySAwBWmdCw4ycrfjRg4ZnlAR%2BUQQJi9Ym7AHK%2Bk4Dq5qZZuHNQ0bpJ0PDmntAmBOSBhpeJvHR4TVWMO%2B3C1Se2eQNRTUGBE200MKKOGbvygc4hNMcqBRZHt1g7vCoP9HiCeaVWRG9jlvb0kP7OIBVu510JcmaIRe7UFx2ZEUGWFktkSp%2FHzJGrATunQOH25Hbk%2BPC6OfXIaUQQqyooW6pBepWmD%2BIV84haUcKwkeWTYQ9JLQClWtcoVo8SnV3JtDRmaVQ1JyV1pAJmsIrjuvZzupSia9GomIPwITNJCafU7v0%2BDyW3Jz7skeHwHHHlx0XOxuHihhsmrpOA%2BCfLavNPO1kAhloExn%2BvgLQBNAT%2FJLZIl1cHjUQ%2FHo2Ti69mYiPI7qfYl5MDb2PDvu0vgkIkMYcafyp9b%2FyuWmr%2BeZiRF0dFqYrrK9iLDXy9ka4w%2FbL72CmKIQB%2FEyc8QAwGiUpYj6Wxd96lKeZmtSEnb4As391vO651QTBh%2FF2Bi8w7SOZU%2F8HaV9djLrceqn%2Fs1bKBxMS05sGsOdZSbpzGU%2F6Ti3h0Ns9RzMsAyjZhl2GZcWNH7gVvML%2BNp8QGOqUBv0dmqV%2BUBd%2BRSVqEoG9YWbTUc5550jXtgg2aDU6RFuSPfR2kZtBap96SmKWHHwyXMaRxZCRzXwatfu5Z7r2tkHL9%2Ftn9B3gwJMEBIfAW5ZVJvuP3G2be%2FJF%2BgXedN9g5ACp8OC8Anujn4XEyu5IfRMKAhuz5UXox8uhE0WMWXSwFHwnQfFJhce1IA3AIPMMhgPy7%2FEuKS%2B2cdeLO1f%2F0oAIATFyX&X-Amz-Signature=593147f2eb3ec1d350aaa9dc52b008020ab648fa59e5eaccac0701003d743d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745ZMONK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsZ%2FBXue8KQILl4r0YFd4aUXkqyTDJWpKYUQ7GtKuG8AiEAw1SU%2BK%2B%2BtUEfChgVI88tAwqdoouo6y3Vj%2FdZewPwrtwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1L5kEQsTOEg%2Fe21SrcAx6P3kTivbPv2RyvbR0cgWJ3l59QGqtrKD%2Bfy2mjxFc1T0HLF82yNLySAwBWmdCw4ycrfjRg4ZnlAR%2BUQQJi9Ym7AHK%2Bk4Dq5qZZuHNQ0bpJ0PDmntAmBOSBhpeJvHR4TVWMO%2B3C1Se2eQNRTUGBE200MKKOGbvygc4hNMcqBRZHt1g7vCoP9HiCeaVWRG9jlvb0kP7OIBVu510JcmaIRe7UFx2ZEUGWFktkSp%2FHzJGrATunQOH25Hbk%2BPC6OfXIaUQQqyooW6pBepWmD%2BIV84haUcKwkeWTYQ9JLQClWtcoVo8SnV3JtDRmaVQ1JyV1pAJmsIrjuvZzupSia9GomIPwITNJCafU7v0%2BDyW3Jz7skeHwHHHlx0XOxuHihhsmrpOA%2BCfLavNPO1kAhloExn%2BvgLQBNAT%2FJLZIl1cHjUQ%2FHo2Ti69mYiPI7qfYl5MDb2PDvu0vgkIkMYcafyp9b%2FyuWmr%2BeZiRF0dFqYrrK9iLDXy9ka4w%2FbL72CmKIQB%2FEyc8QAwGiUpYj6Wxd96lKeZmtSEnb4As391vO651QTBh%2FF2Bi8w7SOZU%2F8HaV9djLrceqn%2Fs1bKBxMS05sGsOdZSbpzGU%2F6Ti3h0Ns9RzMsAyjZhl2GZcWNH7gVvML%2BNp8QGOqUBv0dmqV%2BUBd%2BRSVqEoG9YWbTUc5550jXtgg2aDU6RFuSPfR2kZtBap96SmKWHHwyXMaRxZCRzXwatfu5Z7r2tkHL9%2Ftn9B3gwJMEBIfAW5ZVJvuP3G2be%2FJF%2BgXedN9g5ACp8OC8Anujn4XEyu5IfRMKAhuz5UXox8uhE0WMWXSwFHwnQfFJhce1IA3AIPMMhgPy7%2FEuKS%2B2cdeLO1f%2F0oAIATFyX&X-Amz-Signature=b6246a2e437687a68b715fb14e84bf8891b799e03ae5f4c087ff88a255b694f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
