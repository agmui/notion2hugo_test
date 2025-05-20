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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDQWFH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWExn2qL%2Be6X79r5IwNYyey%2BQAsWDDhkMoJf9u8G%2BNUwIgFGySEmM3e%2BJfQTpob%2FSLq1n3QMCzCpOb1e1E6%2FxDcXwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkmTCO%2Bd8cfaV4q8CrcAybayXeALyKm8IsgWcSB%2Be%2BKSzw76xIE8FyDXVl17UTTs1X%2Fyg3iTauqBA7iv%2FYSSx3FO%2F2kyMGLTz3ZKims2xXdMzRMTwIFbX2z3w1%2BjdUQj5lOpqUzPeLqKSy8IYMB018ncqYV%2FRVdkpoLMWq0AOx%2BFGj0Usw%2BYMPB1GU0fpTQDcV03Vs6un0XFZ2owpleAo6HvdwPiieBgbQl%2FiDzdZB4rTiaBBuDuzOG4rmKWShnt9lGaK0lFHUJ%2BrBpxbLKrpJE32ES06tI0MkS8aYWVDvOEcu7vjz9eNy7%2FkRcD7I8WHf37v37YRyzEhvn0%2Fh1OfLaQozXcgmIGD0sIyJKDidwDuULo8%2FkYsmhIwr%2FKGPCSWN5Zq2FBfZSTWG%2BErc%2FDtFWxXfcdah%2FMbd2VLu%2BI%2FIWt7tqplUH70KpIu5%2BtVFdXFAMSaPKftv6Pjqe4OGNQodEG0F8Z6Wow2BJuxD7GCxyX3mPynUKDVBLnPiSkZX%2BQHBvQo%2BYAYzmzZvXpigppF0xd3Sv2EUBhWpWic4siRkzx6DAp5jry6lQeCv4xkVehFT4KRC2gAH8FqlK%2Bb%2FYA%2FTs9hj9xJvb3jjCTrBx70My0mTR%2BDQUZSNV7lNn5mNQvqirL8tRw9vuL4vLMPrKr8EGOqUBuuS9axKzCGrMjEdYhJCcQUUl2rnggUK3sR6uLMlpbCu5uz1MHTt5NI%2Bh2ZNErRTNzn6u7CC5X%2BQ%2F4lcqL4OXc2o4wArHYF5A2T%2Bsy2G0SEWfROaT9e3xt4LsVN%2FNT%2ByCEZEs7BGZPh58UBv9%2BG76l60fH3dKtzORXjJPGov%2F8wsw3XGXCeUao6fWQixxSayJaGA7E0TTjm2KjOsGKJ7uC3aSItoH&X-Amz-Signature=085027adce0a67fba99274aa88fa2f8141ec93de44b8774eea536b4526e94141&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDQWFH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWExn2qL%2Be6X79r5IwNYyey%2BQAsWDDhkMoJf9u8G%2BNUwIgFGySEmM3e%2BJfQTpob%2FSLq1n3QMCzCpOb1e1E6%2FxDcXwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkmTCO%2Bd8cfaV4q8CrcAybayXeALyKm8IsgWcSB%2Be%2BKSzw76xIE8FyDXVl17UTTs1X%2Fyg3iTauqBA7iv%2FYSSx3FO%2F2kyMGLTz3ZKims2xXdMzRMTwIFbX2z3w1%2BjdUQj5lOpqUzPeLqKSy8IYMB018ncqYV%2FRVdkpoLMWq0AOx%2BFGj0Usw%2BYMPB1GU0fpTQDcV03Vs6un0XFZ2owpleAo6HvdwPiieBgbQl%2FiDzdZB4rTiaBBuDuzOG4rmKWShnt9lGaK0lFHUJ%2BrBpxbLKrpJE32ES06tI0MkS8aYWVDvOEcu7vjz9eNy7%2FkRcD7I8WHf37v37YRyzEhvn0%2Fh1OfLaQozXcgmIGD0sIyJKDidwDuULo8%2FkYsmhIwr%2FKGPCSWN5Zq2FBfZSTWG%2BErc%2FDtFWxXfcdah%2FMbd2VLu%2BI%2FIWt7tqplUH70KpIu5%2BtVFdXFAMSaPKftv6Pjqe4OGNQodEG0F8Z6Wow2BJuxD7GCxyX3mPynUKDVBLnPiSkZX%2BQHBvQo%2BYAYzmzZvXpigppF0xd3Sv2EUBhWpWic4siRkzx6DAp5jry6lQeCv4xkVehFT4KRC2gAH8FqlK%2Bb%2FYA%2FTs9hj9xJvb3jjCTrBx70My0mTR%2BDQUZSNV7lNn5mNQvqirL8tRw9vuL4vLMPrKr8EGOqUBuuS9axKzCGrMjEdYhJCcQUUl2rnggUK3sR6uLMlpbCu5uz1MHTt5NI%2Bh2ZNErRTNzn6u7CC5X%2BQ%2F4lcqL4OXc2o4wArHYF5A2T%2Bsy2G0SEWfROaT9e3xt4LsVN%2FNT%2ByCEZEs7BGZPh58UBv9%2BG76l60fH3dKtzORXjJPGov%2F8wsw3XGXCeUao6fWQixxSayJaGA7E0TTjm2KjOsGKJ7uC3aSItoH&X-Amz-Signature=691ead0060a1f452cd6a9c182c27102d8cecf174c21c2240392c34914978dfff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDQWFH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWExn2qL%2Be6X79r5IwNYyey%2BQAsWDDhkMoJf9u8G%2BNUwIgFGySEmM3e%2BJfQTpob%2FSLq1n3QMCzCpOb1e1E6%2FxDcXwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkmTCO%2Bd8cfaV4q8CrcAybayXeALyKm8IsgWcSB%2Be%2BKSzw76xIE8FyDXVl17UTTs1X%2Fyg3iTauqBA7iv%2FYSSx3FO%2F2kyMGLTz3ZKims2xXdMzRMTwIFbX2z3w1%2BjdUQj5lOpqUzPeLqKSy8IYMB018ncqYV%2FRVdkpoLMWq0AOx%2BFGj0Usw%2BYMPB1GU0fpTQDcV03Vs6un0XFZ2owpleAo6HvdwPiieBgbQl%2FiDzdZB4rTiaBBuDuzOG4rmKWShnt9lGaK0lFHUJ%2BrBpxbLKrpJE32ES06tI0MkS8aYWVDvOEcu7vjz9eNy7%2FkRcD7I8WHf37v37YRyzEhvn0%2Fh1OfLaQozXcgmIGD0sIyJKDidwDuULo8%2FkYsmhIwr%2FKGPCSWN5Zq2FBfZSTWG%2BErc%2FDtFWxXfcdah%2FMbd2VLu%2BI%2FIWt7tqplUH70KpIu5%2BtVFdXFAMSaPKftv6Pjqe4OGNQodEG0F8Z6Wow2BJuxD7GCxyX3mPynUKDVBLnPiSkZX%2BQHBvQo%2BYAYzmzZvXpigppF0xd3Sv2EUBhWpWic4siRkzx6DAp5jry6lQeCv4xkVehFT4KRC2gAH8FqlK%2Bb%2FYA%2FTs9hj9xJvb3jjCTrBx70My0mTR%2BDQUZSNV7lNn5mNQvqirL8tRw9vuL4vLMPrKr8EGOqUBuuS9axKzCGrMjEdYhJCcQUUl2rnggUK3sR6uLMlpbCu5uz1MHTt5NI%2Bh2ZNErRTNzn6u7CC5X%2BQ%2F4lcqL4OXc2o4wArHYF5A2T%2Bsy2G0SEWfROaT9e3xt4LsVN%2FNT%2ByCEZEs7BGZPh58UBv9%2BG76l60fH3dKtzORXjJPGov%2F8wsw3XGXCeUao6fWQixxSayJaGA7E0TTjm2KjOsGKJ7uC3aSItoH&X-Amz-Signature=37d6976d2c6191c39b4c03463934336562bcec41415a55ef294fd4810c3af496&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
