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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDYD7OO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCkHgY5nEhcrRXfbDHZvVBuBDYGarsusfI2%2FzdeTkY03QIgFi7SIsInBGdS%2Biq2XdkG8O2QS8O%2Bu5LcOJesFbmhG5IqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BtOP2jhJWBl684AircA5Rwn6QZC9j8%2Bv1%2FhtsXgxuMEpBPH5ThcddU9k8objbzEUyem%2FeBMysUF7bj549ePcMA%2FLwdPINbHqrHVr%2FRpF0QB1%2F%2BpohvhuylBb5PX44BFWW8Vag5XPuUCl%2F8Wj3GB9jJ1vOz8JUAK6KSmG%2B%2F1tNdUZaYNsTCjZO6hY3yp9X67nzMT%2BhVdrfa8U3PgFziuUFmiWgO2RXJU%2FwcSU8YL%2BQ2zuzWSzGnTri5zd%2BRw3hxLyAd5uxZp59tzJexn2HpI%2FxnOGeefYAUsr8aIhkchI45graxFKbPp2AdHMCpQjoO%2BtYLYw35Ykx%2F91Yo1AYmiH7HYBoAKH5LfeOWixYssDhd%2FU1RyYto7TK7vTQ8zwXjfil4ueY0Tr9TU05cnfZVGdGKrEidpCqFduP7SlF0%2BBPXFX05ZHpgjkH1UDHUq0ESBb077xk%2F4Ch5EJSD0jPLBdO5taMcv1abVdio%2BQiJRQK2mzHa1sAu0IN0EFU8icVDC6A4f47k2mtI%2B1oB7jnszcYe2UOuWpe8tTjVcOMAilKfN8T3ww1FxMV3N9rZx8jQc7BAIqOggDKq8H7Jf81TmGWqCCYBvfT88yOXx3SMWA5ghjhKfm1gDzyH21lXTm8ajESt4C7ypLHTGZJaMJ7m774GOqUBpXvZLJlIOtzHPYmYZuggpd9LDAKRCOTSf21NwnbkEQWxRNNICAul7Q47cMffYpHOqNlvYbfJIMXj7CmumFEl5ebbTIlw7PLNFQiIMzE0IF%2FuhW6DpxqtzUK3x0QnIHGFYyrzJw2d7A0zjpfy5njYJzhC9X1Zas7BwTbG%2FhWIrZj5zgX23dWwlX1FYBLm0aP4%2BfSeZIguMWiveopNfKkhLRJfKoVo&X-Amz-Signature=b55a3f0b8fc25d86544fb703f920d166cffcf417e1028966535a52b4114931d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDYD7OO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCkHgY5nEhcrRXfbDHZvVBuBDYGarsusfI2%2FzdeTkY03QIgFi7SIsInBGdS%2Biq2XdkG8O2QS8O%2Bu5LcOJesFbmhG5IqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BtOP2jhJWBl684AircA5Rwn6QZC9j8%2Bv1%2FhtsXgxuMEpBPH5ThcddU9k8objbzEUyem%2FeBMysUF7bj549ePcMA%2FLwdPINbHqrHVr%2FRpF0QB1%2F%2BpohvhuylBb5PX44BFWW8Vag5XPuUCl%2F8Wj3GB9jJ1vOz8JUAK6KSmG%2B%2F1tNdUZaYNsTCjZO6hY3yp9X67nzMT%2BhVdrfa8U3PgFziuUFmiWgO2RXJU%2FwcSU8YL%2BQ2zuzWSzGnTri5zd%2BRw3hxLyAd5uxZp59tzJexn2HpI%2FxnOGeefYAUsr8aIhkchI45graxFKbPp2AdHMCpQjoO%2BtYLYw35Ykx%2F91Yo1AYmiH7HYBoAKH5LfeOWixYssDhd%2FU1RyYto7TK7vTQ8zwXjfil4ueY0Tr9TU05cnfZVGdGKrEidpCqFduP7SlF0%2BBPXFX05ZHpgjkH1UDHUq0ESBb077xk%2F4Ch5EJSD0jPLBdO5taMcv1abVdio%2BQiJRQK2mzHa1sAu0IN0EFU8icVDC6A4f47k2mtI%2B1oB7jnszcYe2UOuWpe8tTjVcOMAilKfN8T3ww1FxMV3N9rZx8jQc7BAIqOggDKq8H7Jf81TmGWqCCYBvfT88yOXx3SMWA5ghjhKfm1gDzyH21lXTm8ajESt4C7ypLHTGZJaMJ7m774GOqUBpXvZLJlIOtzHPYmYZuggpd9LDAKRCOTSf21NwnbkEQWxRNNICAul7Q47cMffYpHOqNlvYbfJIMXj7CmumFEl5ebbTIlw7PLNFQiIMzE0IF%2FuhW6DpxqtzUK3x0QnIHGFYyrzJw2d7A0zjpfy5njYJzhC9X1Zas7BwTbG%2FhWIrZj5zgX23dWwlX1FYBLm0aP4%2BfSeZIguMWiveopNfKkhLRJfKoVo&X-Amz-Signature=5001216044add0c48dc8804d09241200653e1a11a8213cae4f543170f8ae6593&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKDYD7OO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCkHgY5nEhcrRXfbDHZvVBuBDYGarsusfI2%2FzdeTkY03QIgFi7SIsInBGdS%2Biq2XdkG8O2QS8O%2Bu5LcOJesFbmhG5IqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BtOP2jhJWBl684AircA5Rwn6QZC9j8%2Bv1%2FhtsXgxuMEpBPH5ThcddU9k8objbzEUyem%2FeBMysUF7bj549ePcMA%2FLwdPINbHqrHVr%2FRpF0QB1%2F%2BpohvhuylBb5PX44BFWW8Vag5XPuUCl%2F8Wj3GB9jJ1vOz8JUAK6KSmG%2B%2F1tNdUZaYNsTCjZO6hY3yp9X67nzMT%2BhVdrfa8U3PgFziuUFmiWgO2RXJU%2FwcSU8YL%2BQ2zuzWSzGnTri5zd%2BRw3hxLyAd5uxZp59tzJexn2HpI%2FxnOGeefYAUsr8aIhkchI45graxFKbPp2AdHMCpQjoO%2BtYLYw35Ykx%2F91Yo1AYmiH7HYBoAKH5LfeOWixYssDhd%2FU1RyYto7TK7vTQ8zwXjfil4ueY0Tr9TU05cnfZVGdGKrEidpCqFduP7SlF0%2BBPXFX05ZHpgjkH1UDHUq0ESBb077xk%2F4Ch5EJSD0jPLBdO5taMcv1abVdio%2BQiJRQK2mzHa1sAu0IN0EFU8icVDC6A4f47k2mtI%2B1oB7jnszcYe2UOuWpe8tTjVcOMAilKfN8T3ww1FxMV3N9rZx8jQc7BAIqOggDKq8H7Jf81TmGWqCCYBvfT88yOXx3SMWA5ghjhKfm1gDzyH21lXTm8ajESt4C7ypLHTGZJaMJ7m774GOqUBpXvZLJlIOtzHPYmYZuggpd9LDAKRCOTSf21NwnbkEQWxRNNICAul7Q47cMffYpHOqNlvYbfJIMXj7CmumFEl5ebbTIlw7PLNFQiIMzE0IF%2FuhW6DpxqtzUK3x0QnIHGFYyrzJw2d7A0zjpfy5njYJzhC9X1Zas7BwTbG%2FhWIrZj5zgX23dWwlX1FYBLm0aP4%2BfSeZIguMWiveopNfKkhLRJfKoVo&X-Amz-Signature=d53142a5f493b9f1e0a3a65dddd7757ff5b97a83ea8d86ed8e783ea7988dd8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
