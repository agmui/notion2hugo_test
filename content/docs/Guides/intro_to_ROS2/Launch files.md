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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W25HBUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICho58%2BjKoHaEB2k6eQYGBPvdswpBdcd2YQZJUGVsve7AiB4iRtmQKjuU8P%2Fc30oGsh4pzvgBo1QGT07XLKyl35eECr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMxLisnb1oSTWMABBOKtwDHvegX7eX927UIWgSX41Viy9RUN0nbL4oDYPgTKK6Wav6bppV%2BLKo9xhMteqiFeiKrUf3Xb0C%2F8NyK3fwi3mYO8469kN2YO%2BoaGvX8pTAHWWe9AD0rJj5%2ForK1ETQyHhSi05YzDMoeHMjk0PpRirUJm9Bcj2XtSYrsoc6KIUgNRBs6AyylWdS1OSklF0jRQDpYokMVg1lvW0FttPQLNniUt4XB86clfU21pi2djT0WVppCXPG8nyH%2Bgp1VW%2F8ShVB0vviL8UQNJxJXMM3neOZ0%2FQupk94EpGuRThsI8d8aiO14wLd8TqJgIoem5RSW8oXbTIYEH%2FDZUsitzvdAVJ6tOcHznO%2BUSWYnZkxS%2FTYeg3f3OT5wMzRQdNQqQ6A3tQBBCxDGDnomBFSn%2FrRKO2gBRXV7sZH96oO3zn61O9SkbSoDo%2B2Kngs9Yq3W8XXqkoBR1fio%2FSOIh5PGLtzURS%2B7j3obBA6kfV1MyUYqdlC7TAPHYIp8ZH3n7uH46mr75fRrJ7jtY7xyOTxbdde761oUBpF8Evsi4ST9wIStOPNkSVXVb4pNbCt9vLQN9vSMhCx%2FFRn%2Bo0og8xvwtqeNn1O3YOIh%2FkNeMIRwL4%2B7GaSsFes6TvrCBA4k1JBgqsw5vqBwAY6pgE4WJ1FIMzOzpqMUBo7j7Nu9%2BEfcajVvIkb3ktj4Oj3UkrkHU5oZyIur1K%2Bz4yfxZjGCfpSwx4KpYhw8JtrkZRrw5nBP0nKcPHFqfj8pR3I%2BqiKV0351mEHB2VmHoDAgIsNo0z4K4P4td8aKpx2iF%2BDmG4UG84HtBEQW9vP1cqXz4MkWtN3AHaztyDKoja6ISSJbj7otV2Xum%2BCGJObtaAtVRKmWJv7&X-Amz-Signature=dbe28e3f6b98888c5a56edcbb13ef490de70d30dad126c0311b76e62df367594&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W25HBUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICho58%2BjKoHaEB2k6eQYGBPvdswpBdcd2YQZJUGVsve7AiB4iRtmQKjuU8P%2Fc30oGsh4pzvgBo1QGT07XLKyl35eECr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMxLisnb1oSTWMABBOKtwDHvegX7eX927UIWgSX41Viy9RUN0nbL4oDYPgTKK6Wav6bppV%2BLKo9xhMteqiFeiKrUf3Xb0C%2F8NyK3fwi3mYO8469kN2YO%2BoaGvX8pTAHWWe9AD0rJj5%2ForK1ETQyHhSi05YzDMoeHMjk0PpRirUJm9Bcj2XtSYrsoc6KIUgNRBs6AyylWdS1OSklF0jRQDpYokMVg1lvW0FttPQLNniUt4XB86clfU21pi2djT0WVppCXPG8nyH%2Bgp1VW%2F8ShVB0vviL8UQNJxJXMM3neOZ0%2FQupk94EpGuRThsI8d8aiO14wLd8TqJgIoem5RSW8oXbTIYEH%2FDZUsitzvdAVJ6tOcHznO%2BUSWYnZkxS%2FTYeg3f3OT5wMzRQdNQqQ6A3tQBBCxDGDnomBFSn%2FrRKO2gBRXV7sZH96oO3zn61O9SkbSoDo%2B2Kngs9Yq3W8XXqkoBR1fio%2FSOIh5PGLtzURS%2B7j3obBA6kfV1MyUYqdlC7TAPHYIp8ZH3n7uH46mr75fRrJ7jtY7xyOTxbdde761oUBpF8Evsi4ST9wIStOPNkSVXVb4pNbCt9vLQN9vSMhCx%2FFRn%2Bo0og8xvwtqeNn1O3YOIh%2FkNeMIRwL4%2B7GaSsFes6TvrCBA4k1JBgqsw5vqBwAY6pgE4WJ1FIMzOzpqMUBo7j7Nu9%2BEfcajVvIkb3ktj4Oj3UkrkHU5oZyIur1K%2Bz4yfxZjGCfpSwx4KpYhw8JtrkZRrw5nBP0nKcPHFqfj8pR3I%2BqiKV0351mEHB2VmHoDAgIsNo0z4K4P4td8aKpx2iF%2BDmG4UG84HtBEQW9vP1cqXz4MkWtN3AHaztyDKoja6ISSJbj7otV2Xum%2BCGJObtaAtVRKmWJv7&X-Amz-Signature=f980f08dcf5f5f4ce96d397f82162a6f015ea3d96449cf349ae32966a531a182&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W25HBUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICho58%2BjKoHaEB2k6eQYGBPvdswpBdcd2YQZJUGVsve7AiB4iRtmQKjuU8P%2Fc30oGsh4pzvgBo1QGT07XLKyl35eECr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMxLisnb1oSTWMABBOKtwDHvegX7eX927UIWgSX41Viy9RUN0nbL4oDYPgTKK6Wav6bppV%2BLKo9xhMteqiFeiKrUf3Xb0C%2F8NyK3fwi3mYO8469kN2YO%2BoaGvX8pTAHWWe9AD0rJj5%2ForK1ETQyHhSi05YzDMoeHMjk0PpRirUJm9Bcj2XtSYrsoc6KIUgNRBs6AyylWdS1OSklF0jRQDpYokMVg1lvW0FttPQLNniUt4XB86clfU21pi2djT0WVppCXPG8nyH%2Bgp1VW%2F8ShVB0vviL8UQNJxJXMM3neOZ0%2FQupk94EpGuRThsI8d8aiO14wLd8TqJgIoem5RSW8oXbTIYEH%2FDZUsitzvdAVJ6tOcHznO%2BUSWYnZkxS%2FTYeg3f3OT5wMzRQdNQqQ6A3tQBBCxDGDnomBFSn%2FrRKO2gBRXV7sZH96oO3zn61O9SkbSoDo%2B2Kngs9Yq3W8XXqkoBR1fio%2FSOIh5PGLtzURS%2B7j3obBA6kfV1MyUYqdlC7TAPHYIp8ZH3n7uH46mr75fRrJ7jtY7xyOTxbdde761oUBpF8Evsi4ST9wIStOPNkSVXVb4pNbCt9vLQN9vSMhCx%2FFRn%2Bo0og8xvwtqeNn1O3YOIh%2FkNeMIRwL4%2B7GaSsFes6TvrCBA4k1JBgqsw5vqBwAY6pgE4WJ1FIMzOzpqMUBo7j7Nu9%2BEfcajVvIkb3ktj4Oj3UkrkHU5oZyIur1K%2Bz4yfxZjGCfpSwx4KpYhw8JtrkZRrw5nBP0nKcPHFqfj8pR3I%2BqiKV0351mEHB2VmHoDAgIsNo0z4K4P4td8aKpx2iF%2BDmG4UG84HtBEQW9vP1cqXz4MkWtN3AHaztyDKoja6ISSJbj7otV2Xum%2BCGJObtaAtVRKmWJv7&X-Amz-Signature=b330407423e299334ad375c0b9a5dfe6da913ff8ecc6ab24185b36246090040d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
