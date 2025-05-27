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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW6WW53%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD49ep1TDVLaagHFC1pNZuTbqXmZ9cnQPzRYeruEoBHiQIgPqbN05ha0qZQFE5pDUM9dA%2F%2BULgJfPSV8KitqGGDWDAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDN01wr5YmROIayQExSrcA%2FUT8hqFS98ynrdBmSKRc7LFpE1D%2FhDGr72BoFzXrYZZCkHxqh%2BHydsgZRjBAlBkMmFwuooYdMcmjeRlZ1Cnc6NFF5Akkx0Fvz06jpQGMgZGeDL7QjyKUl48VOy1KKCAd0Bl8lDgxmgvlpD%2BWsIexmIyHz0wo1NlpLAm8Sn7UFUPdqcKwY%2BNuPf14VQ%2FpR0t4z00l5v8cXxyQsmMmeHo9IfQVI1QFXcgNLw6jtGc%2BX5Tp20eUKH%2BTyPsUN7zrKX9NqmW6CJSOXdlR2pO2Bkvd9sPr0h5jZSTqFMBzTw1A12Vrkf7jfk4xupAsYquA%2BKbq9YzWXK8AuOy1wGO1jAQfIhrm8sFGKQ5Osng19uUM0pmCg8R4ugMAClWVgv%2Fthc4vDpyBWHHRVeElmCb9uS1zpskqLUBQmxde3mbYiFTMDZeCkOWsAPvWllInwss9InNJLY53%2FgS1T01PEkmKC4b%2BffPu3PdrAXOU3qJpEowePkWIneAptMTKbM8JYgixi0%2BMIpiiigrTwyUdmqJc1hSsLR604Jok2Il3bq0U37jeu2zs2JRl1rTvLdmvqSb4cTIdkri9kv6BeHNXD4oTJvVwyt7gJg4H5osc6lmuWXRVI13ozJlaGllINdF1X5cMIXV1sEGOqUBna8nS6Ajg71WHs9utVqSqwbM7hceedun0o84Upbeqq4QFAKzy1%2BgPpuwE%2FOSw6ZvaLr3XjhJ1E%2F1zPXj0DH0opeFu5fvky53I0Lo7uLS8dMfLcP%2Bx9HWi3wwDSQVMDJYt%2FsP9cB6QeWdwkQjLMmdftFE%2FyKMFnAIDKBFrPdmZF5BpPwWGttIiTGTx%2F6%2BVI5jhW0fCHJMfm8IrQeMHpDBKm2l3mHp&X-Amz-Signature=46c9f10d487a538ffb4139e5f9f0591447bf43f8221cf66d4b72d9b234658178&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW6WW53%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD49ep1TDVLaagHFC1pNZuTbqXmZ9cnQPzRYeruEoBHiQIgPqbN05ha0qZQFE5pDUM9dA%2F%2BULgJfPSV8KitqGGDWDAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDN01wr5YmROIayQExSrcA%2FUT8hqFS98ynrdBmSKRc7LFpE1D%2FhDGr72BoFzXrYZZCkHxqh%2BHydsgZRjBAlBkMmFwuooYdMcmjeRlZ1Cnc6NFF5Akkx0Fvz06jpQGMgZGeDL7QjyKUl48VOy1KKCAd0Bl8lDgxmgvlpD%2BWsIexmIyHz0wo1NlpLAm8Sn7UFUPdqcKwY%2BNuPf14VQ%2FpR0t4z00l5v8cXxyQsmMmeHo9IfQVI1QFXcgNLw6jtGc%2BX5Tp20eUKH%2BTyPsUN7zrKX9NqmW6CJSOXdlR2pO2Bkvd9sPr0h5jZSTqFMBzTw1A12Vrkf7jfk4xupAsYquA%2BKbq9YzWXK8AuOy1wGO1jAQfIhrm8sFGKQ5Osng19uUM0pmCg8R4ugMAClWVgv%2Fthc4vDpyBWHHRVeElmCb9uS1zpskqLUBQmxde3mbYiFTMDZeCkOWsAPvWllInwss9InNJLY53%2FgS1T01PEkmKC4b%2BffPu3PdrAXOU3qJpEowePkWIneAptMTKbM8JYgixi0%2BMIpiiigrTwyUdmqJc1hSsLR604Jok2Il3bq0U37jeu2zs2JRl1rTvLdmvqSb4cTIdkri9kv6BeHNXD4oTJvVwyt7gJg4H5osc6lmuWXRVI13ozJlaGllINdF1X5cMIXV1sEGOqUBna8nS6Ajg71WHs9utVqSqwbM7hceedun0o84Upbeqq4QFAKzy1%2BgPpuwE%2FOSw6ZvaLr3XjhJ1E%2F1zPXj0DH0opeFu5fvky53I0Lo7uLS8dMfLcP%2Bx9HWi3wwDSQVMDJYt%2FsP9cB6QeWdwkQjLMmdftFE%2FyKMFnAIDKBFrPdmZF5BpPwWGttIiTGTx%2F6%2BVI5jhW0fCHJMfm8IrQeMHpDBKm2l3mHp&X-Amz-Signature=aca8291af812227e8a5f3e83c589be289ee4c03adaf3a0fa584c406e43174819&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW6WW53%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD49ep1TDVLaagHFC1pNZuTbqXmZ9cnQPzRYeruEoBHiQIgPqbN05ha0qZQFE5pDUM9dA%2F%2BULgJfPSV8KitqGGDWDAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDN01wr5YmROIayQExSrcA%2FUT8hqFS98ynrdBmSKRc7LFpE1D%2FhDGr72BoFzXrYZZCkHxqh%2BHydsgZRjBAlBkMmFwuooYdMcmjeRlZ1Cnc6NFF5Akkx0Fvz06jpQGMgZGeDL7QjyKUl48VOy1KKCAd0Bl8lDgxmgvlpD%2BWsIexmIyHz0wo1NlpLAm8Sn7UFUPdqcKwY%2BNuPf14VQ%2FpR0t4z00l5v8cXxyQsmMmeHo9IfQVI1QFXcgNLw6jtGc%2BX5Tp20eUKH%2BTyPsUN7zrKX9NqmW6CJSOXdlR2pO2Bkvd9sPr0h5jZSTqFMBzTw1A12Vrkf7jfk4xupAsYquA%2BKbq9YzWXK8AuOy1wGO1jAQfIhrm8sFGKQ5Osng19uUM0pmCg8R4ugMAClWVgv%2Fthc4vDpyBWHHRVeElmCb9uS1zpskqLUBQmxde3mbYiFTMDZeCkOWsAPvWllInwss9InNJLY53%2FgS1T01PEkmKC4b%2BffPu3PdrAXOU3qJpEowePkWIneAptMTKbM8JYgixi0%2BMIpiiigrTwyUdmqJc1hSsLR604Jok2Il3bq0U37jeu2zs2JRl1rTvLdmvqSb4cTIdkri9kv6BeHNXD4oTJvVwyt7gJg4H5osc6lmuWXRVI13ozJlaGllINdF1X5cMIXV1sEGOqUBna8nS6Ajg71WHs9utVqSqwbM7hceedun0o84Upbeqq4QFAKzy1%2BgPpuwE%2FOSw6ZvaLr3XjhJ1E%2F1zPXj0DH0opeFu5fvky53I0Lo7uLS8dMfLcP%2Bx9HWi3wwDSQVMDJYt%2FsP9cB6QeWdwkQjLMmdftFE%2FyKMFnAIDKBFrPdmZF5BpPwWGttIiTGTx%2F6%2BVI5jhW0fCHJMfm8IrQeMHpDBKm2l3mHp&X-Amz-Signature=b83d1169cf0cd8f68afe63dd50f74d61599573c8ab79717455bba902d689a37a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
