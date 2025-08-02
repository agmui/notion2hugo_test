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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OI2CGRT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfqeZoQyPG2Isv%2FYXsa%2F1EI1xDOmy6TJ1%2FgYaOc8FL4AIgZwECrVGQ8nF5MxnplVDPlc1T2YY22DzfXmex8vGll08q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHxy5%2BRs55tmjSUZNyrcA0okiUo1OM6BEkLxswcTnJHWJtKE5Mb1qCjsh7Pq1fmtULxRMnz6bKF9YXOU%2B3hAJfiwOYDEE7p2t1WjRj%2B2%2BOtNygepiRutX4GI2kQP%2B0e0ioyMd%2FWFZvEhbCIPAaI%2BIUTWEXWb7GkvWrLsFnsKoE1tIkYHTaUYfKnZzFnAC0SeeV11I0ymM5yp7TMSA0XP%2F0Afn5V%2B73iRGkgc6Z3byfjXussVeaRCQozSdO%2BFrczN%2FJWhQn9Infcs9ovqOBw31wpYxzivPtTs2U19hZVz3D8PbiEijD04PWPoj%2BC%2Bo5J8SuFJlqWrf71ooJU%2B8E6m6YwHie%2F3vx%2BJIEP6y8qwkp%2FLS8WtROD8fU7fsMdIHZ6pWudMW3zxc2EgRUHUriyA2fLwdRy%2BWctAL3EPh36nNBPB4owH41XM3xCntSot64Mv5C4OOQCC%2BixmO4%2FGkbvjD0FlhIv1%2FPSK5fMzjwXRlVzKLgcXKDeDiXECANNp2EWrcElUUTs8lKTvBJcUAa1m%2BnNiVSA8%2BcGRRQFiF6HISEz%2BXt1wisfMRhio3LnXv19Y22b2tSmWY5oR3fXOc7FP%2BTXi9sMqzP3Muiy8FpR%2B0IOjvNlwwORgP6zNR9sSuRM1Buo1cAmPSGXaNSsQMOPvtsQGOqUBanDAFuYYsi6zLz%2BSYRXb%2FquojoVZRUzhGMjeFd9UX3h%2BAgAVwR0Ey0cDHznTgHEhzvrhTmma8zpMlVQF5lZ4swrH51OOQXtyMWKa%2FWXBkyvqXiVyq%2Bd1fA1FJSOeGCvC5FcQxta2YbgjuvQjjphu5kTBoNg8OVF7OP766g%2FX%2F1%2FYTmsjI1lMVwcwSjdrPa4hu%2F4dayx50%2BrmzstvvRRkmTUXCp%2FR&X-Amz-Signature=fd72a0c35578f1f09bcf9fd7043e541ef85bc48e57823116e9bafb4c2a7d117a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OI2CGRT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfqeZoQyPG2Isv%2FYXsa%2F1EI1xDOmy6TJ1%2FgYaOc8FL4AIgZwECrVGQ8nF5MxnplVDPlc1T2YY22DzfXmex8vGll08q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHxy5%2BRs55tmjSUZNyrcA0okiUo1OM6BEkLxswcTnJHWJtKE5Mb1qCjsh7Pq1fmtULxRMnz6bKF9YXOU%2B3hAJfiwOYDEE7p2t1WjRj%2B2%2BOtNygepiRutX4GI2kQP%2B0e0ioyMd%2FWFZvEhbCIPAaI%2BIUTWEXWb7GkvWrLsFnsKoE1tIkYHTaUYfKnZzFnAC0SeeV11I0ymM5yp7TMSA0XP%2F0Afn5V%2B73iRGkgc6Z3byfjXussVeaRCQozSdO%2BFrczN%2FJWhQn9Infcs9ovqOBw31wpYxzivPtTs2U19hZVz3D8PbiEijD04PWPoj%2BC%2Bo5J8SuFJlqWrf71ooJU%2B8E6m6YwHie%2F3vx%2BJIEP6y8qwkp%2FLS8WtROD8fU7fsMdIHZ6pWudMW3zxc2EgRUHUriyA2fLwdRy%2BWctAL3EPh36nNBPB4owH41XM3xCntSot64Mv5C4OOQCC%2BixmO4%2FGkbvjD0FlhIv1%2FPSK5fMzjwXRlVzKLgcXKDeDiXECANNp2EWrcElUUTs8lKTvBJcUAa1m%2BnNiVSA8%2BcGRRQFiF6HISEz%2BXt1wisfMRhio3LnXv19Y22b2tSmWY5oR3fXOc7FP%2BTXi9sMqzP3Muiy8FpR%2B0IOjvNlwwORgP6zNR9sSuRM1Buo1cAmPSGXaNSsQMOPvtsQGOqUBanDAFuYYsi6zLz%2BSYRXb%2FquojoVZRUzhGMjeFd9UX3h%2BAgAVwR0Ey0cDHznTgHEhzvrhTmma8zpMlVQF5lZ4swrH51OOQXtyMWKa%2FWXBkyvqXiVyq%2Bd1fA1FJSOeGCvC5FcQxta2YbgjuvQjjphu5kTBoNg8OVF7OP766g%2FX%2F1%2FYTmsjI1lMVwcwSjdrPa4hu%2F4dayx50%2BrmzstvvRRkmTUXCp%2FR&X-Amz-Signature=76e9619837a46b49a5bfbe0a5450bab92de921fe2f0443a0ae9f2f9515adac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OI2CGRT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfqeZoQyPG2Isv%2FYXsa%2F1EI1xDOmy6TJ1%2FgYaOc8FL4AIgZwECrVGQ8nF5MxnplVDPlc1T2YY22DzfXmex8vGll08q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHxy5%2BRs55tmjSUZNyrcA0okiUo1OM6BEkLxswcTnJHWJtKE5Mb1qCjsh7Pq1fmtULxRMnz6bKF9YXOU%2B3hAJfiwOYDEE7p2t1WjRj%2B2%2BOtNygepiRutX4GI2kQP%2B0e0ioyMd%2FWFZvEhbCIPAaI%2BIUTWEXWb7GkvWrLsFnsKoE1tIkYHTaUYfKnZzFnAC0SeeV11I0ymM5yp7TMSA0XP%2F0Afn5V%2B73iRGkgc6Z3byfjXussVeaRCQozSdO%2BFrczN%2FJWhQn9Infcs9ovqOBw31wpYxzivPtTs2U19hZVz3D8PbiEijD04PWPoj%2BC%2Bo5J8SuFJlqWrf71ooJU%2B8E6m6YwHie%2F3vx%2BJIEP6y8qwkp%2FLS8WtROD8fU7fsMdIHZ6pWudMW3zxc2EgRUHUriyA2fLwdRy%2BWctAL3EPh36nNBPB4owH41XM3xCntSot64Mv5C4OOQCC%2BixmO4%2FGkbvjD0FlhIv1%2FPSK5fMzjwXRlVzKLgcXKDeDiXECANNp2EWrcElUUTs8lKTvBJcUAa1m%2BnNiVSA8%2BcGRRQFiF6HISEz%2BXt1wisfMRhio3LnXv19Y22b2tSmWY5oR3fXOc7FP%2BTXi9sMqzP3Muiy8FpR%2B0IOjvNlwwORgP6zNR9sSuRM1Buo1cAmPSGXaNSsQMOPvtsQGOqUBanDAFuYYsi6zLz%2BSYRXb%2FquojoVZRUzhGMjeFd9UX3h%2BAgAVwR0Ey0cDHznTgHEhzvrhTmma8zpMlVQF5lZ4swrH51OOQXtyMWKa%2FWXBkyvqXiVyq%2Bd1fA1FJSOeGCvC5FcQxta2YbgjuvQjjphu5kTBoNg8OVF7OP766g%2FX%2F1%2FYTmsjI1lMVwcwSjdrPa4hu%2F4dayx50%2BrmzstvvRRkmTUXCp%2FR&X-Amz-Signature=994f87124976d1691c86b4fd04ff3db567790622543c2c105d64a6478edc6f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
