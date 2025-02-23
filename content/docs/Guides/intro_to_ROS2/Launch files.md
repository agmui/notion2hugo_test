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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HT53ODI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzSSYOQDka7gWF%2FIw2mZHuGv2P9NtrgEBJkIZWRoOOwIgdJ%2BunRH3Uy4X8n4Vlfujd0%2FntuMyp6jj5R8cLJo4zocq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGytRCEes7JsUBQuSyrcA7S9MRGpgDTp3gzLF0iogZ4%2BLyiPyGy40NEAj0bg4nQAyX93JngfuvCRAK%2FR6ioy5HsLWVa5GxTva%2BOUcy%2BOoO3qQbrUQYW2O71vDgr8HmZIWhY%2FQTDkea2CoNA8mffHYpdJsMNWxy%2B8NI1P73P9KCxX%2FSRX5peof4rOX6GyHaHIrCejH0EIR%2FRFh2kHFkpexuMg%2BqjAu8Z2wJ2YC%2BFxOLJzcCzS6t%2ByrWumwoS2iE1rCYWsI284U2%2Fp9NVq934xF%2Bjq1pJOnH4e4d6oZcOkcu8vJpuW%2Bv4RjxQnN6qzH%2FEU6Glejf5nAqWqK3i2a%2FYyarkQ0QKDhvQQKnFnI%2BnT4Ue9ynKN3wf%2BrY68r90Oi%2BwEXIxleCvooX%2FibdFzhrrcS2S5SfOxb6SmxHfZ6SYiAi10rMzWkJGhwYxwXFf4VRgL61Z2QcxcYnxKggrUkwptsnD0Meo%2BCVrssm1kTCcK0dMQtGBJpvPespKBu0pOCjmaWQa6XS%2BvQUvRwS3BZbVxmpwk9CNJQ7cI8iL0RU%2Fo9ZZDGvYjA70AU5bTMgryDNHJlyobCas7IiXUjpCGwMs8%2BYB28v4EzcmNRvPgvcTQzjA3OOV%2FiU7QTHv61BSxrZFQuggC1GvNN52a3RQZMIKp670GOqUBOlQwncoDgftTxoHmO%2BqZBL0bYFHxMARL7knNoFMJ78dGjrFoknrlC8wgl2v5kA2E15o7QTCkzBZtmpKhVy7CLBBgrSAuozu4uS9z3ytZLjJsJyOilu0R0cuCqw65cQQJ1F1Ti59ESFla8ZtX3HqhbK5CEmTqm974Rrn4UM8PLHXPOph21cDylisgOIalOlSqpPKwbNu10a3npSv8jF4S6rJ3XAUK&X-Amz-Signature=e9917501701be31451a227ba032fbcd4158c4b3264f580380208e23d43b3abf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HT53ODI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzSSYOQDka7gWF%2FIw2mZHuGv2P9NtrgEBJkIZWRoOOwIgdJ%2BunRH3Uy4X8n4Vlfujd0%2FntuMyp6jj5R8cLJo4zocq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGytRCEes7JsUBQuSyrcA7S9MRGpgDTp3gzLF0iogZ4%2BLyiPyGy40NEAj0bg4nQAyX93JngfuvCRAK%2FR6ioy5HsLWVa5GxTva%2BOUcy%2BOoO3qQbrUQYW2O71vDgr8HmZIWhY%2FQTDkea2CoNA8mffHYpdJsMNWxy%2B8NI1P73P9KCxX%2FSRX5peof4rOX6GyHaHIrCejH0EIR%2FRFh2kHFkpexuMg%2BqjAu8Z2wJ2YC%2BFxOLJzcCzS6t%2ByrWumwoS2iE1rCYWsI284U2%2Fp9NVq934xF%2Bjq1pJOnH4e4d6oZcOkcu8vJpuW%2Bv4RjxQnN6qzH%2FEU6Glejf5nAqWqK3i2a%2FYyarkQ0QKDhvQQKnFnI%2BnT4Ue9ynKN3wf%2BrY68r90Oi%2BwEXIxleCvooX%2FibdFzhrrcS2S5SfOxb6SmxHfZ6SYiAi10rMzWkJGhwYxwXFf4VRgL61Z2QcxcYnxKggrUkwptsnD0Meo%2BCVrssm1kTCcK0dMQtGBJpvPespKBu0pOCjmaWQa6XS%2BvQUvRwS3BZbVxmpwk9CNJQ7cI8iL0RU%2Fo9ZZDGvYjA70AU5bTMgryDNHJlyobCas7IiXUjpCGwMs8%2BYB28v4EzcmNRvPgvcTQzjA3OOV%2FiU7QTHv61BSxrZFQuggC1GvNN52a3RQZMIKp670GOqUBOlQwncoDgftTxoHmO%2BqZBL0bYFHxMARL7knNoFMJ78dGjrFoknrlC8wgl2v5kA2E15o7QTCkzBZtmpKhVy7CLBBgrSAuozu4uS9z3ytZLjJsJyOilu0R0cuCqw65cQQJ1F1Ti59ESFla8ZtX3HqhbK5CEmTqm974Rrn4UM8PLHXPOph21cDylisgOIalOlSqpPKwbNu10a3npSv8jF4S6rJ3XAUK&X-Amz-Signature=7540a172b1093d5fd2429eeb5d84309d2a96988adf8b7f202d5dea63bfad8a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HT53ODI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzSSYOQDka7gWF%2FIw2mZHuGv2P9NtrgEBJkIZWRoOOwIgdJ%2BunRH3Uy4X8n4Vlfujd0%2FntuMyp6jj5R8cLJo4zocq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGytRCEes7JsUBQuSyrcA7S9MRGpgDTp3gzLF0iogZ4%2BLyiPyGy40NEAj0bg4nQAyX93JngfuvCRAK%2FR6ioy5HsLWVa5GxTva%2BOUcy%2BOoO3qQbrUQYW2O71vDgr8HmZIWhY%2FQTDkea2CoNA8mffHYpdJsMNWxy%2B8NI1P73P9KCxX%2FSRX5peof4rOX6GyHaHIrCejH0EIR%2FRFh2kHFkpexuMg%2BqjAu8Z2wJ2YC%2BFxOLJzcCzS6t%2ByrWumwoS2iE1rCYWsI284U2%2Fp9NVq934xF%2Bjq1pJOnH4e4d6oZcOkcu8vJpuW%2Bv4RjxQnN6qzH%2FEU6Glejf5nAqWqK3i2a%2FYyarkQ0QKDhvQQKnFnI%2BnT4Ue9ynKN3wf%2BrY68r90Oi%2BwEXIxleCvooX%2FibdFzhrrcS2S5SfOxb6SmxHfZ6SYiAi10rMzWkJGhwYxwXFf4VRgL61Z2QcxcYnxKggrUkwptsnD0Meo%2BCVrssm1kTCcK0dMQtGBJpvPespKBu0pOCjmaWQa6XS%2BvQUvRwS3BZbVxmpwk9CNJQ7cI8iL0RU%2Fo9ZZDGvYjA70AU5bTMgryDNHJlyobCas7IiXUjpCGwMs8%2BYB28v4EzcmNRvPgvcTQzjA3OOV%2FiU7QTHv61BSxrZFQuggC1GvNN52a3RQZMIKp670GOqUBOlQwncoDgftTxoHmO%2BqZBL0bYFHxMARL7knNoFMJ78dGjrFoknrlC8wgl2v5kA2E15o7QTCkzBZtmpKhVy7CLBBgrSAuozu4uS9z3ytZLjJsJyOilu0R0cuCqw65cQQJ1F1Ti59ESFla8ZtX3HqhbK5CEmTqm974Rrn4UM8PLHXPOph21cDylisgOIalOlSqpPKwbNu10a3npSv8jF4S6rJ3XAUK&X-Amz-Signature=a0f44084f91076f28f0d5bd379f4b98ef66fb6a6947a488e26e39ff8e85ec043&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
