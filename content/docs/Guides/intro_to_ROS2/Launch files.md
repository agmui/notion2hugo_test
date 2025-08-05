---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXS74PG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQClgC7MULQQj5aPaqhAK0I9TNRStFD%2F0lEBPE0FP2xHCgIgMpFxoPKxQ9HZmccuouYgBpPOQSwb8jk1X9tv7YVNLQkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLLtq5Qohiy5C1su0CrcA4QVX7Zysaj1mBjZhO53dz%2FGoDMTNuAd8ZlqueXnH73NmEi13shRd%2FpbATo5X6Uj3gAisZoahMb0adqnDXiZ%2FVvuKqrJelo1f6Pc%2BaB03NVWn7q1DnVHEGLhKbBgEulL3thn%2FkIfToNRQyJJ7UXFSOZfhZXIFRGDpxQx7%2BoCty5VkStAduiGICgQOTR1Uyrsz%2FGTlHLDnrqVy%2FGmKcYPFnIClOHcw3p2ktIvb1wXg9HNrG19sykJejK87J8OikH%2FxOegLEEFukY6y657NK1LtGLy2L8j8bE9fJhW3BjAJGYMcoG0VzQkf7pIYpdG7ChegEvPjCY3LhdLcUB3IqfujKDSPyDxpmAx8mbr3URUyqqmZM1eBnxUGAdaEUYmHJ2rZdytqQ1YboxVE5ttWTIM9Z7HniX5Vps5njp4Z%2BC4wUknHl0%2FHeIMt0i8kq9qSNjMl6l1otTyqZospA96hRUY236fZWc5O8GsjlwCatAQ2nTti8mO%2FKbZmaGaYciDH9mAlGLkUFOsykSjYOvCe6hl6bd0APP3ZNOKFPuOrJir%2BITzkGxPL%2B87umUY%2BKZ70ztBwMpKM%2B6o8W8uMZc9y7%2FfG8OxBWTJmdYgmGa%2FFjmuHxAkU01VKBX2f%2FgM8eYiMIv0xMQGOqUB9HZWZb2nQxmpvyHaYc04cuqW%2B%2FTp4pN%2FGcCePFzWHMb6L47SechW%2BlunjpJ1odcef0YGLU7lfR0yNBHrmtyrFPKiWZ2CbBobIfx2giqMqERMEVEHdINCSdJmLE2f47dGHxdkBruk5IXO0IqVn%2BftOWxtuYdXHFElHbsyz1u9RZQJ8wU7oT%2BbL9rUxSPwHfM8QSm5F89KS8%2BEPZ1vX1YLOivxbAVn&X-Amz-Signature=ecfe39b1f5e97315f5de8b77347a3506804d3905ce65d359726dbafc09d6b015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXS74PG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQClgC7MULQQj5aPaqhAK0I9TNRStFD%2F0lEBPE0FP2xHCgIgMpFxoPKxQ9HZmccuouYgBpPOQSwb8jk1X9tv7YVNLQkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLLtq5Qohiy5C1su0CrcA4QVX7Zysaj1mBjZhO53dz%2FGoDMTNuAd8ZlqueXnH73NmEi13shRd%2FpbATo5X6Uj3gAisZoahMb0adqnDXiZ%2FVvuKqrJelo1f6Pc%2BaB03NVWn7q1DnVHEGLhKbBgEulL3thn%2FkIfToNRQyJJ7UXFSOZfhZXIFRGDpxQx7%2BoCty5VkStAduiGICgQOTR1Uyrsz%2FGTlHLDnrqVy%2FGmKcYPFnIClOHcw3p2ktIvb1wXg9HNrG19sykJejK87J8OikH%2FxOegLEEFukY6y657NK1LtGLy2L8j8bE9fJhW3BjAJGYMcoG0VzQkf7pIYpdG7ChegEvPjCY3LhdLcUB3IqfujKDSPyDxpmAx8mbr3URUyqqmZM1eBnxUGAdaEUYmHJ2rZdytqQ1YboxVE5ttWTIM9Z7HniX5Vps5njp4Z%2BC4wUknHl0%2FHeIMt0i8kq9qSNjMl6l1otTyqZospA96hRUY236fZWc5O8GsjlwCatAQ2nTti8mO%2FKbZmaGaYciDH9mAlGLkUFOsykSjYOvCe6hl6bd0APP3ZNOKFPuOrJir%2BITzkGxPL%2B87umUY%2BKZ70ztBwMpKM%2B6o8W8uMZc9y7%2FfG8OxBWTJmdYgmGa%2FFjmuHxAkU01VKBX2f%2FgM8eYiMIv0xMQGOqUB9HZWZb2nQxmpvyHaYc04cuqW%2B%2FTp4pN%2FGcCePFzWHMb6L47SechW%2BlunjpJ1odcef0YGLU7lfR0yNBHrmtyrFPKiWZ2CbBobIfx2giqMqERMEVEHdINCSdJmLE2f47dGHxdkBruk5IXO0IqVn%2BftOWxtuYdXHFElHbsyz1u9RZQJ8wU7oT%2BbL9rUxSPwHfM8QSm5F89KS8%2BEPZ1vX1YLOivxbAVn&X-Amz-Signature=2a7ae3928d344e598122850f209192df4962d124e8e683e3b83f4ddfc8611933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXS74PG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQClgC7MULQQj5aPaqhAK0I9TNRStFD%2F0lEBPE0FP2xHCgIgMpFxoPKxQ9HZmccuouYgBpPOQSwb8jk1X9tv7YVNLQkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLLtq5Qohiy5C1su0CrcA4QVX7Zysaj1mBjZhO53dz%2FGoDMTNuAd8ZlqueXnH73NmEi13shRd%2FpbATo5X6Uj3gAisZoahMb0adqnDXiZ%2FVvuKqrJelo1f6Pc%2BaB03NVWn7q1DnVHEGLhKbBgEulL3thn%2FkIfToNRQyJJ7UXFSOZfhZXIFRGDpxQx7%2BoCty5VkStAduiGICgQOTR1Uyrsz%2FGTlHLDnrqVy%2FGmKcYPFnIClOHcw3p2ktIvb1wXg9HNrG19sykJejK87J8OikH%2FxOegLEEFukY6y657NK1LtGLy2L8j8bE9fJhW3BjAJGYMcoG0VzQkf7pIYpdG7ChegEvPjCY3LhdLcUB3IqfujKDSPyDxpmAx8mbr3URUyqqmZM1eBnxUGAdaEUYmHJ2rZdytqQ1YboxVE5ttWTIM9Z7HniX5Vps5njp4Z%2BC4wUknHl0%2FHeIMt0i8kq9qSNjMl6l1otTyqZospA96hRUY236fZWc5O8GsjlwCatAQ2nTti8mO%2FKbZmaGaYciDH9mAlGLkUFOsykSjYOvCe6hl6bd0APP3ZNOKFPuOrJir%2BITzkGxPL%2B87umUY%2BKZ70ztBwMpKM%2B6o8W8uMZc9y7%2FfG8OxBWTJmdYgmGa%2FFjmuHxAkU01VKBX2f%2FgM8eYiMIv0xMQGOqUB9HZWZb2nQxmpvyHaYc04cuqW%2B%2FTp4pN%2FGcCePFzWHMb6L47SechW%2BlunjpJ1odcef0YGLU7lfR0yNBHrmtyrFPKiWZ2CbBobIfx2giqMqERMEVEHdINCSdJmLE2f47dGHxdkBruk5IXO0IqVn%2BftOWxtuYdXHFElHbsyz1u9RZQJ8wU7oT%2BbL9rUxSPwHfM8QSm5F89KS8%2BEPZ1vX1YLOivxbAVn&X-Amz-Signature=02841dc6fc63e668e378b46ff5c7beba9574be7fffcd6bd024b931aa0d60da61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
