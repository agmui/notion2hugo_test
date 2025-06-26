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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5WDKZL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJFMEMCIBUFtZF2z6ztu%2BFq3w7j5nTJ%2BNcgeYNT4O2QPdW8b5BfAh8pkLY3tUqrguSrqWWxITWW6Tru8vUvNAi9CVKJl9HAKv8DCGgQABoMNjM3NDIzMTgzODA1IgyL%2FX8DXB393i2vBwwq3AMSGy4giMl%2Fswrl9PP100h3%2FQ8wysUSgwAJMdS38RfY0KBBzbiAJ5ZusgJpI3hR6GgAw%2B0nzObiTzaE48GoPZxD5cdwTCd%2Fw79KuOrXDRPEs4JWM9XkYO4Y1b0Edqt%2FcuhX2TBQSrGMBDfgYzbv5GSaglh25jfLfPj9Kr5ttYJ66kLox8Sw4yVGhqrbjaRiw5QzArsCjeKwW3hF3VRCdeZhOvbnaQEKAK4VQ6HmG7TKTdP5N%2FVQwfMOfYRDZZqLutDF0cnUWZZhikSYwjUTc%2FuOUKjDx68onCiHynQ%2BtO4h2t1e%2BkZdwSGKNjCSeGgZiThCMlwr0UQWJ4s6CSx%2FdqUFRYfesstsjnSDsMxnAuHlqtNX3yFPx34z%2BcVRyQtDK4CozdlfIRp%2FGnKUM4sstycpNNR1mKJD7zBCL9g0DrHBS0yRR8x8CpEikNHMkqxcQdOF6P6FCe887G0PBlDyjfuiVi2wdREo0i6IF1o24n6Gjq3HUe7X5ceJ5Jd%2BQtu6o1v7sguhIt1MnX3tBcbgfZf3rPDO16ucfJXrWE0pOaXe6sufiUKX5b63njsJIgiBL2zuKrNnmCGkiUEWoggT8WrMrsEzyDSuNM%2FmIAu1qtB3K55WVy%2Baqq8OxTfqRzCMoffCBjqnARvgYl0br1IucklrAQieGt6UerNx9VDOxE%2FY3oSM0p0RVwukp8TD3KkfGnHMLSFRHBOCCfjvKUuJ4pOKDngM80OioqxYdNb%2FCFBbXwqDDs6ln967o8TbQuc9TAz03CwzWqzoIwpSH1tySMNIfOl9la%2BweeZb6xQbEVHR7LufMxZ%2B5almOGHVye14DA9%2B7cJHFug63NyQss3fqxaP4j2ZIympO0BrhxnP&X-Amz-Signature=0b3f862ff199ff2f182f56b5cbbc45e5630152dde66c5f81e20396f05030446f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5WDKZL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJFMEMCIBUFtZF2z6ztu%2BFq3w7j5nTJ%2BNcgeYNT4O2QPdW8b5BfAh8pkLY3tUqrguSrqWWxITWW6Tru8vUvNAi9CVKJl9HAKv8DCGgQABoMNjM3NDIzMTgzODA1IgyL%2FX8DXB393i2vBwwq3AMSGy4giMl%2Fswrl9PP100h3%2FQ8wysUSgwAJMdS38RfY0KBBzbiAJ5ZusgJpI3hR6GgAw%2B0nzObiTzaE48GoPZxD5cdwTCd%2Fw79KuOrXDRPEs4JWM9XkYO4Y1b0Edqt%2FcuhX2TBQSrGMBDfgYzbv5GSaglh25jfLfPj9Kr5ttYJ66kLox8Sw4yVGhqrbjaRiw5QzArsCjeKwW3hF3VRCdeZhOvbnaQEKAK4VQ6HmG7TKTdP5N%2FVQwfMOfYRDZZqLutDF0cnUWZZhikSYwjUTc%2FuOUKjDx68onCiHynQ%2BtO4h2t1e%2BkZdwSGKNjCSeGgZiThCMlwr0UQWJ4s6CSx%2FdqUFRYfesstsjnSDsMxnAuHlqtNX3yFPx34z%2BcVRyQtDK4CozdlfIRp%2FGnKUM4sstycpNNR1mKJD7zBCL9g0DrHBS0yRR8x8CpEikNHMkqxcQdOF6P6FCe887G0PBlDyjfuiVi2wdREo0i6IF1o24n6Gjq3HUe7X5ceJ5Jd%2BQtu6o1v7sguhIt1MnX3tBcbgfZf3rPDO16ucfJXrWE0pOaXe6sufiUKX5b63njsJIgiBL2zuKrNnmCGkiUEWoggT8WrMrsEzyDSuNM%2FmIAu1qtB3K55WVy%2Baqq8OxTfqRzCMoffCBjqnARvgYl0br1IucklrAQieGt6UerNx9VDOxE%2FY3oSM0p0RVwukp8TD3KkfGnHMLSFRHBOCCfjvKUuJ4pOKDngM80OioqxYdNb%2FCFBbXwqDDs6ln967o8TbQuc9TAz03CwzWqzoIwpSH1tySMNIfOl9la%2BweeZb6xQbEVHR7LufMxZ%2B5almOGHVye14DA9%2B7cJHFug63NyQss3fqxaP4j2ZIympO0BrhxnP&X-Amz-Signature=d4e55a81fddb24344e49a97962d919a769635f2283c6ea76f531b77a685852cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5WDKZL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJFMEMCIBUFtZF2z6ztu%2BFq3w7j5nTJ%2BNcgeYNT4O2QPdW8b5BfAh8pkLY3tUqrguSrqWWxITWW6Tru8vUvNAi9CVKJl9HAKv8DCGgQABoMNjM3NDIzMTgzODA1IgyL%2FX8DXB393i2vBwwq3AMSGy4giMl%2Fswrl9PP100h3%2FQ8wysUSgwAJMdS38RfY0KBBzbiAJ5ZusgJpI3hR6GgAw%2B0nzObiTzaE48GoPZxD5cdwTCd%2Fw79KuOrXDRPEs4JWM9XkYO4Y1b0Edqt%2FcuhX2TBQSrGMBDfgYzbv5GSaglh25jfLfPj9Kr5ttYJ66kLox8Sw4yVGhqrbjaRiw5QzArsCjeKwW3hF3VRCdeZhOvbnaQEKAK4VQ6HmG7TKTdP5N%2FVQwfMOfYRDZZqLutDF0cnUWZZhikSYwjUTc%2FuOUKjDx68onCiHynQ%2BtO4h2t1e%2BkZdwSGKNjCSeGgZiThCMlwr0UQWJ4s6CSx%2FdqUFRYfesstsjnSDsMxnAuHlqtNX3yFPx34z%2BcVRyQtDK4CozdlfIRp%2FGnKUM4sstycpNNR1mKJD7zBCL9g0DrHBS0yRR8x8CpEikNHMkqxcQdOF6P6FCe887G0PBlDyjfuiVi2wdREo0i6IF1o24n6Gjq3HUe7X5ceJ5Jd%2BQtu6o1v7sguhIt1MnX3tBcbgfZf3rPDO16ucfJXrWE0pOaXe6sufiUKX5b63njsJIgiBL2zuKrNnmCGkiUEWoggT8WrMrsEzyDSuNM%2FmIAu1qtB3K55WVy%2Baqq8OxTfqRzCMoffCBjqnARvgYl0br1IucklrAQieGt6UerNx9VDOxE%2FY3oSM0p0RVwukp8TD3KkfGnHMLSFRHBOCCfjvKUuJ4pOKDngM80OioqxYdNb%2FCFBbXwqDDs6ln967o8TbQuc9TAz03CwzWqzoIwpSH1tySMNIfOl9la%2BweeZb6xQbEVHR7LufMxZ%2B5almOGHVye14DA9%2B7cJHFug63NyQss3fqxaP4j2ZIympO0BrhxnP&X-Amz-Signature=d714c8e2131f5d7d9cf4caef15286bfb1e0a576f854a6b76f9e1e0dd440a78a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
