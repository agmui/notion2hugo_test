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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672FGMDXN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwaVlx%2FZBjIKfgJfioF%2FTmSGJC8cYgBRRaFYd%2BRIN%2FaQIgDqN0OJqFm8Jpbe9NvcBhpKxdQ6IyJp5852ZgMTXLBp8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD0iiXyri2lBYtmnircA8Xx8OM5YvYWny1UZtmpk2ZvTbvL3r2E%2ByTO69UO7qakXkbRKijTifZCJUrCeH0OybOD23mi7h14GGTathSrk3YCL%2BZTZh%2FyAn7CnguALsTiT5GzBM8dg%2B7oiGjqNZME%2FoFKC%2FiQ66S%2BaNJ7dzPjxVbJ4y2y7TcDDmPFfkx8sbHNilU1PNeVRY%2Fek0D8CELHQwjgpqWeg8Yzr%2F2zxu86Fl6beZcigZ6fXsCG2hHAs2EBljYzIWqFba%2FGU2Uq8H3vc4oVoF1gwXjkN%2FRT5nFoEgBxglR3t8OYiNijkWBCfGz6ZRXlalFe4Vp3vJkBnAsyfi5DNnYY2iBNePwguRpfEsy%2FYIgzn10BetvRCIZUbsVP6sI5hI%2FDuwSm%2Fa%2F5rPv3gGJdMka0IbyhBrlFagw3XZFqPaXk5%2FZCFJSs0dXF1zSZZwSmHuvlwJiXFSWLYnTwdA4Szw7l4pIh%2B8oEiXr4FbDGy7eJrRgvrmbOarmCh3oK4gU6todBLnY6W9MfcEb%2BFg5b4rQYrvZuRR3XIe%2B4m8Vb7ygN2aUtfpHnJNMKzaO9tXTbhct8GmRQ2k%2BiwdqvGB85UUyz2btEWxuPh1zWlDn24WmxqL0UWsYUQ1qefaIJ4mnK76%2BKTNaFmGnbMP%2BoxcMGOqUBPWFGrt79HZ91KeKYzCD462n1QlPg8phX407aS6zV5Piy5rMkXHvmsnEe5DkZ7cZhQ6FaLt3uRateJUkCQ17xqlCZMveV4zPzD4VZTovCdZpLCXWEq6Z303BmFAuO9XN22BUHak9UBssLywIl7rVjKojnroheWDV9OSL0mX%2Bzcn58WqyKL0vZYwO0y6YvVsfY2RXAJCPyQbWfX%2FmvkVXWIwGlqKVv&X-Amz-Signature=b67f86dbe8d6afe7a755d6d806019ba949b8b0f90456e1ad4d36a1a29e348f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672FGMDXN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwaVlx%2FZBjIKfgJfioF%2FTmSGJC8cYgBRRaFYd%2BRIN%2FaQIgDqN0OJqFm8Jpbe9NvcBhpKxdQ6IyJp5852ZgMTXLBp8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD0iiXyri2lBYtmnircA8Xx8OM5YvYWny1UZtmpk2ZvTbvL3r2E%2ByTO69UO7qakXkbRKijTifZCJUrCeH0OybOD23mi7h14GGTathSrk3YCL%2BZTZh%2FyAn7CnguALsTiT5GzBM8dg%2B7oiGjqNZME%2FoFKC%2FiQ66S%2BaNJ7dzPjxVbJ4y2y7TcDDmPFfkx8sbHNilU1PNeVRY%2Fek0D8CELHQwjgpqWeg8Yzr%2F2zxu86Fl6beZcigZ6fXsCG2hHAs2EBljYzIWqFba%2FGU2Uq8H3vc4oVoF1gwXjkN%2FRT5nFoEgBxglR3t8OYiNijkWBCfGz6ZRXlalFe4Vp3vJkBnAsyfi5DNnYY2iBNePwguRpfEsy%2FYIgzn10BetvRCIZUbsVP6sI5hI%2FDuwSm%2Fa%2F5rPv3gGJdMka0IbyhBrlFagw3XZFqPaXk5%2FZCFJSs0dXF1zSZZwSmHuvlwJiXFSWLYnTwdA4Szw7l4pIh%2B8oEiXr4FbDGy7eJrRgvrmbOarmCh3oK4gU6todBLnY6W9MfcEb%2BFg5b4rQYrvZuRR3XIe%2B4m8Vb7ygN2aUtfpHnJNMKzaO9tXTbhct8GmRQ2k%2BiwdqvGB85UUyz2btEWxuPh1zWlDn24WmxqL0UWsYUQ1qefaIJ4mnK76%2BKTNaFmGnbMP%2BoxcMGOqUBPWFGrt79HZ91KeKYzCD462n1QlPg8phX407aS6zV5Piy5rMkXHvmsnEe5DkZ7cZhQ6FaLt3uRateJUkCQ17xqlCZMveV4zPzD4VZTovCdZpLCXWEq6Z303BmFAuO9XN22BUHak9UBssLywIl7rVjKojnroheWDV9OSL0mX%2Bzcn58WqyKL0vZYwO0y6YvVsfY2RXAJCPyQbWfX%2FmvkVXWIwGlqKVv&X-Amz-Signature=ed25ab48e559939de677ad7ed88b6960492c3a84ff8a231092ba446c2ab805d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672FGMDXN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwaVlx%2FZBjIKfgJfioF%2FTmSGJC8cYgBRRaFYd%2BRIN%2FaQIgDqN0OJqFm8Jpbe9NvcBhpKxdQ6IyJp5852ZgMTXLBp8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD0iiXyri2lBYtmnircA8Xx8OM5YvYWny1UZtmpk2ZvTbvL3r2E%2ByTO69UO7qakXkbRKijTifZCJUrCeH0OybOD23mi7h14GGTathSrk3YCL%2BZTZh%2FyAn7CnguALsTiT5GzBM8dg%2B7oiGjqNZME%2FoFKC%2FiQ66S%2BaNJ7dzPjxVbJ4y2y7TcDDmPFfkx8sbHNilU1PNeVRY%2Fek0D8CELHQwjgpqWeg8Yzr%2F2zxu86Fl6beZcigZ6fXsCG2hHAs2EBljYzIWqFba%2FGU2Uq8H3vc4oVoF1gwXjkN%2FRT5nFoEgBxglR3t8OYiNijkWBCfGz6ZRXlalFe4Vp3vJkBnAsyfi5DNnYY2iBNePwguRpfEsy%2FYIgzn10BetvRCIZUbsVP6sI5hI%2FDuwSm%2Fa%2F5rPv3gGJdMka0IbyhBrlFagw3XZFqPaXk5%2FZCFJSs0dXF1zSZZwSmHuvlwJiXFSWLYnTwdA4Szw7l4pIh%2B8oEiXr4FbDGy7eJrRgvrmbOarmCh3oK4gU6todBLnY6W9MfcEb%2BFg5b4rQYrvZuRR3XIe%2B4m8Vb7ygN2aUtfpHnJNMKzaO9tXTbhct8GmRQ2k%2BiwdqvGB85UUyz2btEWxuPh1zWlDn24WmxqL0UWsYUQ1qefaIJ4mnK76%2BKTNaFmGnbMP%2BoxcMGOqUBPWFGrt79HZ91KeKYzCD462n1QlPg8phX407aS6zV5Piy5rMkXHvmsnEe5DkZ7cZhQ6FaLt3uRateJUkCQ17xqlCZMveV4zPzD4VZTovCdZpLCXWEq6Z303BmFAuO9XN22BUHak9UBssLywIl7rVjKojnroheWDV9OSL0mX%2Bzcn58WqyKL0vZYwO0y6YvVsfY2RXAJCPyQbWfX%2FmvkVXWIwGlqKVv&X-Amz-Signature=44fa511a1ec952ead12bd0167aa1d8a355128f2e0846cbc3b2cc81449444c733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
