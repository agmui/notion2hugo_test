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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424767TP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCOjzFqFMGY0ZLJalaYCplf7RCsy2o48xDxFRUbqpcnewIhANM1YTnPYxcV6o1Brbzj9RrdQi%2Bkfx0S4JhgvXea0zlLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc7Ph2OxADpNSRzagq3AN8N8etOR5VdIZe0TJoZuBaLfp%2Fctw9U4EIll7%2B3g0OdYA6CFQtpi419DmsFuuXeJwnR%2B9zcdVdOVcIk82WC15yCa5j6zcPqDSYKWaroJT4cpSDv0d4%2BBSF6eCdUMb0EfwiEbzb0EE87t1Hz2niTKYMRMdBUeo5tsnzoB0P4wFXVIe8tPyfhjLXMy5iFbECcuXP5NaiYegDSTV7WMvn5RrTyPq48trvkBMZHFwdAMFsCvFmapsqm1%2F0Gdrqi6PYhQl8nBlvxpBCiCmRk9rUpFAL8b84be5JTS6qDz1gYYedk8N%2BOBVl3U2Bbjr5T22MxLsg5WFI5az3vOUWfvWfG%2BQTQSI5DyFK0L9aBNV2mQjnmQ9iEWC38c0lxSpeYTSj6eCh%2F5L0XSzWKouvXEyOrMeiN8Ypg7OQjw34XhG0hf59XOBkFdN74PFdv678OZsRdkia0gyT5zf00JDSGvv88HNu1WRwJ6hNOHzG5XG0fvvuQVUVZDUE6pnqNwrhJ3LtyNUabaezudLxRWYGpnlBaHX9D0JFRWhBagDMrCo85CpjvTKb5hOhyMizccY5turAAQnx2ysC83kL5LlezYGOVzyPDlAEJcoHPMX%2BcP8QNDiy2F2VF9E%2BCVsvKEWrAzCJi96%2FBjqkAbkDo7W6ov7df6SUic6m966B9b4bhIvXWXOUnfl%2F6JBqNUqwrhV%2F5t9m40yF0SgNzEpfk2bI9O%2FdyoiT5exSx2WXGIsW7EZ6IBYeZ6amMckiNUQn5lGoR%2FkUabyV0FMEdqB%2BlgjYLWqanMLW8yKjHw%2Beod25FPgDI0%2F5pczVNnmmycLeos1E5jL6BDiYaVV9pJ3nqDiobRcuxJ5v7bl%2Ft%2Bb9TT2E&X-Amz-Signature=9a891b7ad9e32888b980500c8d8595fe161cc9b536bf109e53eacf71e0cfaf86&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424767TP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCOjzFqFMGY0ZLJalaYCplf7RCsy2o48xDxFRUbqpcnewIhANM1YTnPYxcV6o1Brbzj9RrdQi%2Bkfx0S4JhgvXea0zlLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc7Ph2OxADpNSRzagq3AN8N8etOR5VdIZe0TJoZuBaLfp%2Fctw9U4EIll7%2B3g0OdYA6CFQtpi419DmsFuuXeJwnR%2B9zcdVdOVcIk82WC15yCa5j6zcPqDSYKWaroJT4cpSDv0d4%2BBSF6eCdUMb0EfwiEbzb0EE87t1Hz2niTKYMRMdBUeo5tsnzoB0P4wFXVIe8tPyfhjLXMy5iFbECcuXP5NaiYegDSTV7WMvn5RrTyPq48trvkBMZHFwdAMFsCvFmapsqm1%2F0Gdrqi6PYhQl8nBlvxpBCiCmRk9rUpFAL8b84be5JTS6qDz1gYYedk8N%2BOBVl3U2Bbjr5T22MxLsg5WFI5az3vOUWfvWfG%2BQTQSI5DyFK0L9aBNV2mQjnmQ9iEWC38c0lxSpeYTSj6eCh%2F5L0XSzWKouvXEyOrMeiN8Ypg7OQjw34XhG0hf59XOBkFdN74PFdv678OZsRdkia0gyT5zf00JDSGvv88HNu1WRwJ6hNOHzG5XG0fvvuQVUVZDUE6pnqNwrhJ3LtyNUabaezudLxRWYGpnlBaHX9D0JFRWhBagDMrCo85CpjvTKb5hOhyMizccY5turAAQnx2ysC83kL5LlezYGOVzyPDlAEJcoHPMX%2BcP8QNDiy2F2VF9E%2BCVsvKEWrAzCJi96%2FBjqkAbkDo7W6ov7df6SUic6m966B9b4bhIvXWXOUnfl%2F6JBqNUqwrhV%2F5t9m40yF0SgNzEpfk2bI9O%2FdyoiT5exSx2WXGIsW7EZ6IBYeZ6amMckiNUQn5lGoR%2FkUabyV0FMEdqB%2BlgjYLWqanMLW8yKjHw%2Beod25FPgDI0%2F5pczVNnmmycLeos1E5jL6BDiYaVV9pJ3nqDiobRcuxJ5v7bl%2Ft%2Bb9TT2E&X-Amz-Signature=b0683b99c6bf068f8248f9e5338cd1eee71531be3613865e6acbb4ffb52b539f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424767TP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCOjzFqFMGY0ZLJalaYCplf7RCsy2o48xDxFRUbqpcnewIhANM1YTnPYxcV6o1Brbzj9RrdQi%2Bkfx0S4JhgvXea0zlLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc7Ph2OxADpNSRzagq3AN8N8etOR5VdIZe0TJoZuBaLfp%2Fctw9U4EIll7%2B3g0OdYA6CFQtpi419DmsFuuXeJwnR%2B9zcdVdOVcIk82WC15yCa5j6zcPqDSYKWaroJT4cpSDv0d4%2BBSF6eCdUMb0EfwiEbzb0EE87t1Hz2niTKYMRMdBUeo5tsnzoB0P4wFXVIe8tPyfhjLXMy5iFbECcuXP5NaiYegDSTV7WMvn5RrTyPq48trvkBMZHFwdAMFsCvFmapsqm1%2F0Gdrqi6PYhQl8nBlvxpBCiCmRk9rUpFAL8b84be5JTS6qDz1gYYedk8N%2BOBVl3U2Bbjr5T22MxLsg5WFI5az3vOUWfvWfG%2BQTQSI5DyFK0L9aBNV2mQjnmQ9iEWC38c0lxSpeYTSj6eCh%2F5L0XSzWKouvXEyOrMeiN8Ypg7OQjw34XhG0hf59XOBkFdN74PFdv678OZsRdkia0gyT5zf00JDSGvv88HNu1WRwJ6hNOHzG5XG0fvvuQVUVZDUE6pnqNwrhJ3LtyNUabaezudLxRWYGpnlBaHX9D0JFRWhBagDMrCo85CpjvTKb5hOhyMizccY5turAAQnx2ysC83kL5LlezYGOVzyPDlAEJcoHPMX%2BcP8QNDiy2F2VF9E%2BCVsvKEWrAzCJi96%2FBjqkAbkDo7W6ov7df6SUic6m966B9b4bhIvXWXOUnfl%2F6JBqNUqwrhV%2F5t9m40yF0SgNzEpfk2bI9O%2FdyoiT5exSx2WXGIsW7EZ6IBYeZ6amMckiNUQn5lGoR%2FkUabyV0FMEdqB%2BlgjYLWqanMLW8yKjHw%2Beod25FPgDI0%2F5pczVNnmmycLeos1E5jL6BDiYaVV9pJ3nqDiobRcuxJ5v7bl%2Ft%2Bb9TT2E&X-Amz-Signature=56df2ebb45d6eb976a501bee305b8ebd3ee3b0ff4c4fc3006d5c5d5998501655&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
