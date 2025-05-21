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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYQTE2B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDRjYeaKA3MesVaO3m9qXQFYL9bfdwjLwRYLW5vxpCT3wIgNEesiZWQ3T8SXuvk9VVdBEY20GAKbbHo9sSHUpN8JdkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQLyvtBfi0D02pPircA96GekbVIFvKfarKXbeGqRsHuaQmZo5fNiKQJ0yMPdY307QnADq1HbqJ8NaPEcOSzO4WQmprLAjv8ZqvOQ4kVu7wElu47n3jIN%2BjOdWrmXAdb5%2FQYZsxDUpSbkQVSaY6VtY2joInL12BUPFb5Pw85CrkSP97FOYWb6ZwsTyUW8dD63bnQqKYZvoY60Qr3XS6IM9TjbHSZPPaDn1bAPlQicJhd4x0b7mVWnkCugLnvecpDefSkJvj%2FrlPnmd9Cy05DfPMssfvMAMxvreRU6SFnzzGDivsmG9ld6qTM2ONj%2B7NPZAlhoLlVUXdsAEtMarhR5kRgQEcIAjaqsnLSwxoNCQ9CVMbuvUh4ZyKqAujwvbW4XLS%2BJoqFhGtSUnw2oMVSvzPFMYpPVkfsSXYLN%2FOKeZ88z%2FRyyUGJPe0XaBLRIcUfZdbTZecp1AorFmfhHZE3An8UiywcAGXnZgOM2Wo9ViW4DqRfsNmr%2BoT5xK6iqjq3%2BL0yV7he1S5vF0A8nMjpG7HgqVOAGxEc3EJ6cAsGxVbogWW4ozXIKaeS7xZB7oTwGoMTyXTckcV%2F%2FNrlR2Y7yMQN4Yfl8loa1ZG7a2Y1%2FdqlAWhzsXZHVVfYaJ882tIClAHLSS21NaJlkryMLyiuMEGOqUBkPuaD0TsgFQU3fsNbJHBkALuNuupH%2F8PMw9eB6vJRhIgZf1P6Lz6Q90xnU6AfQ4l20HowJ6h%2B3%2FjAJ8OXLef38FKMHP%2B8xUaR2pkG5SsLZk2cZi4j5cansar%2FA3%2BAFFi7OTMD4Neo%2BlsdFjKwYfwJ7i%2FCZmh8OWiH4fqHlsfRYBnLBCGbjjCqsnxMEIS1%2BUZhmufCiwXGAM4QhwACPNR6iWXnBf6&X-Amz-Signature=36076a58a6f5244f776c2bbc0caa7b1ea8e9643c7271cb2de34b5780168c1c42&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYQTE2B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDRjYeaKA3MesVaO3m9qXQFYL9bfdwjLwRYLW5vxpCT3wIgNEesiZWQ3T8SXuvk9VVdBEY20GAKbbHo9sSHUpN8JdkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQLyvtBfi0D02pPircA96GekbVIFvKfarKXbeGqRsHuaQmZo5fNiKQJ0yMPdY307QnADq1HbqJ8NaPEcOSzO4WQmprLAjv8ZqvOQ4kVu7wElu47n3jIN%2BjOdWrmXAdb5%2FQYZsxDUpSbkQVSaY6VtY2joInL12BUPFb5Pw85CrkSP97FOYWb6ZwsTyUW8dD63bnQqKYZvoY60Qr3XS6IM9TjbHSZPPaDn1bAPlQicJhd4x0b7mVWnkCugLnvecpDefSkJvj%2FrlPnmd9Cy05DfPMssfvMAMxvreRU6SFnzzGDivsmG9ld6qTM2ONj%2B7NPZAlhoLlVUXdsAEtMarhR5kRgQEcIAjaqsnLSwxoNCQ9CVMbuvUh4ZyKqAujwvbW4XLS%2BJoqFhGtSUnw2oMVSvzPFMYpPVkfsSXYLN%2FOKeZ88z%2FRyyUGJPe0XaBLRIcUfZdbTZecp1AorFmfhHZE3An8UiywcAGXnZgOM2Wo9ViW4DqRfsNmr%2BoT5xK6iqjq3%2BL0yV7he1S5vF0A8nMjpG7HgqVOAGxEc3EJ6cAsGxVbogWW4ozXIKaeS7xZB7oTwGoMTyXTckcV%2F%2FNrlR2Y7yMQN4Yfl8loa1ZG7a2Y1%2FdqlAWhzsXZHVVfYaJ882tIClAHLSS21NaJlkryMLyiuMEGOqUBkPuaD0TsgFQU3fsNbJHBkALuNuupH%2F8PMw9eB6vJRhIgZf1P6Lz6Q90xnU6AfQ4l20HowJ6h%2B3%2FjAJ8OXLef38FKMHP%2B8xUaR2pkG5SsLZk2cZi4j5cansar%2FA3%2BAFFi7OTMD4Neo%2BlsdFjKwYfwJ7i%2FCZmh8OWiH4fqHlsfRYBnLBCGbjjCqsnxMEIS1%2BUZhmufCiwXGAM4QhwACPNR6iWXnBf6&X-Amz-Signature=098f910db87cf92fcf6e8f49409656e9c65c1b12d97ce6204e75e46d78e20a52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYQTE2B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDRjYeaKA3MesVaO3m9qXQFYL9bfdwjLwRYLW5vxpCT3wIgNEesiZWQ3T8SXuvk9VVdBEY20GAKbbHo9sSHUpN8JdkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQLyvtBfi0D02pPircA96GekbVIFvKfarKXbeGqRsHuaQmZo5fNiKQJ0yMPdY307QnADq1HbqJ8NaPEcOSzO4WQmprLAjv8ZqvOQ4kVu7wElu47n3jIN%2BjOdWrmXAdb5%2FQYZsxDUpSbkQVSaY6VtY2joInL12BUPFb5Pw85CrkSP97FOYWb6ZwsTyUW8dD63bnQqKYZvoY60Qr3XS6IM9TjbHSZPPaDn1bAPlQicJhd4x0b7mVWnkCugLnvecpDefSkJvj%2FrlPnmd9Cy05DfPMssfvMAMxvreRU6SFnzzGDivsmG9ld6qTM2ONj%2B7NPZAlhoLlVUXdsAEtMarhR5kRgQEcIAjaqsnLSwxoNCQ9CVMbuvUh4ZyKqAujwvbW4XLS%2BJoqFhGtSUnw2oMVSvzPFMYpPVkfsSXYLN%2FOKeZ88z%2FRyyUGJPe0XaBLRIcUfZdbTZecp1AorFmfhHZE3An8UiywcAGXnZgOM2Wo9ViW4DqRfsNmr%2BoT5xK6iqjq3%2BL0yV7he1S5vF0A8nMjpG7HgqVOAGxEc3EJ6cAsGxVbogWW4ozXIKaeS7xZB7oTwGoMTyXTckcV%2F%2FNrlR2Y7yMQN4Yfl8loa1ZG7a2Y1%2FdqlAWhzsXZHVVfYaJ882tIClAHLSS21NaJlkryMLyiuMEGOqUBkPuaD0TsgFQU3fsNbJHBkALuNuupH%2F8PMw9eB6vJRhIgZf1P6Lz6Q90xnU6AfQ4l20HowJ6h%2B3%2FjAJ8OXLef38FKMHP%2B8xUaR2pkG5SsLZk2cZi4j5cansar%2FA3%2BAFFi7OTMD4Neo%2BlsdFjKwYfwJ7i%2FCZmh8OWiH4fqHlsfRYBnLBCGbjjCqsnxMEIS1%2BUZhmufCiwXGAM4QhwACPNR6iWXnBf6&X-Amz-Signature=d9f534e7ce9371860ce946372390eb724ec5519c6ebb8c742b9060fcade57042&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
