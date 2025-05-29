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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXQ3L7P%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajSAGiGheNGTqzTAbUyfAP0F8H2AelRX8%2FeXfhoWVaAiBNeWwC4QkPCH7OlsLl%2F9fOQcyo2WVAgxm63AChl%2BfIPyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKsva%2F3palToug5vDKtwDMC1%2FGIbsynZA78DDHfQiao9mPylMx%2BHCoXjiDAaXZuOzMapZRqtr3jpFh32%2F7X4QQJJgba4kQm4ifjgL7UfzwkX2RieadrNKnjcNWQr8OWv6kLj08bQQxhL44Gi0CMqZKw2GruPOQXd1ekSifpfNm0SeljPiSCi6EJavqtZUI7cgbHCFsYtVQIQB7yvl1hGy1XbCPuuLcBAdKqM99i3Gdr7A70ChZgazpCTqFT9nAMb%2F1E762S8qbQPzcUTDKqDTIxE1u6QwngEXNO0l9P2%2BvErJdTc%2FiGyr5LBtRABsWVr5AQZ%2FRyjX20qfpIX1Ega1oMPS3QZP2q4XLDVrqm6%2BjfEKCM25O9GXZG%2FMz7IaYQcvpf6%2FmPDxFpoI35zCshDV39E89d9f8pPk4VrVGe5lINyBgGCh0T7I7maWEx6om3w3QLehIaSnybt%2BAROtkl2QBOKQZP1%2Fy%2FEJpQkaW4RF%2FjLSrV6CDJIZmOeT5EZFUZNXjZQnVXBkpwCY%2BxJk9UqoPjnO6dVtQ9d93ZT68eG6SWHLO9OeyTyb7Z11TbPl9KExk%2FjSTbfd9mWtHFd4lYweA00Tkb9zOP0zR4udxixLfPDUsxdtR0qBA2RHuKHPw3i1UMTOdNC6qJrD7YMw1YffwQY6pgFqUjELJESB%2FN0E1iY7jaFTW6A%2FyghrqO%2BWxmkUEBXD9YTB4WEy4fquGdIvPFZXT%2FXWw%2FYq%2FeV%2B8B4D0H%2Ftug8m8zXnPCSrfNpeY%2B5yqua41bEPp1t156TFo02x7JWIZb9lDV8M%2F%2B6gHkSb7kf%2FK4trHRFo68OOB%2BK%2FAjHFikYGVXveu2fkx2ja1wpuxUbdPAAe4b4PAuKqXQTV7iLIMVCI%2F68kyXJw&X-Amz-Signature=c6b5913bd2f9d9d49d67c0632146715a3a42a9892225090d5cc4f3f0a310f8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXQ3L7P%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajSAGiGheNGTqzTAbUyfAP0F8H2AelRX8%2FeXfhoWVaAiBNeWwC4QkPCH7OlsLl%2F9fOQcyo2WVAgxm63AChl%2BfIPyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKsva%2F3palToug5vDKtwDMC1%2FGIbsynZA78DDHfQiao9mPylMx%2BHCoXjiDAaXZuOzMapZRqtr3jpFh32%2F7X4QQJJgba4kQm4ifjgL7UfzwkX2RieadrNKnjcNWQr8OWv6kLj08bQQxhL44Gi0CMqZKw2GruPOQXd1ekSifpfNm0SeljPiSCi6EJavqtZUI7cgbHCFsYtVQIQB7yvl1hGy1XbCPuuLcBAdKqM99i3Gdr7A70ChZgazpCTqFT9nAMb%2F1E762S8qbQPzcUTDKqDTIxE1u6QwngEXNO0l9P2%2BvErJdTc%2FiGyr5LBtRABsWVr5AQZ%2FRyjX20qfpIX1Ega1oMPS3QZP2q4XLDVrqm6%2BjfEKCM25O9GXZG%2FMz7IaYQcvpf6%2FmPDxFpoI35zCshDV39E89d9f8pPk4VrVGe5lINyBgGCh0T7I7maWEx6om3w3QLehIaSnybt%2BAROtkl2QBOKQZP1%2Fy%2FEJpQkaW4RF%2FjLSrV6CDJIZmOeT5EZFUZNXjZQnVXBkpwCY%2BxJk9UqoPjnO6dVtQ9d93ZT68eG6SWHLO9OeyTyb7Z11TbPl9KExk%2FjSTbfd9mWtHFd4lYweA00Tkb9zOP0zR4udxixLfPDUsxdtR0qBA2RHuKHPw3i1UMTOdNC6qJrD7YMw1YffwQY6pgFqUjELJESB%2FN0E1iY7jaFTW6A%2FyghrqO%2BWxmkUEBXD9YTB4WEy4fquGdIvPFZXT%2FXWw%2FYq%2FeV%2B8B4D0H%2Ftug8m8zXnPCSrfNpeY%2B5yqua41bEPp1t156TFo02x7JWIZb9lDV8M%2F%2B6gHkSb7kf%2FK4trHRFo68OOB%2BK%2FAjHFikYGVXveu2fkx2ja1wpuxUbdPAAe4b4PAuKqXQTV7iLIMVCI%2F68kyXJw&X-Amz-Signature=aee32552bbd08dec5e6bbecc1e240bc50dedd4569aabb6368e13a95ed343ba0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXQ3L7P%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDajSAGiGheNGTqzTAbUyfAP0F8H2AelRX8%2FeXfhoWVaAiBNeWwC4QkPCH7OlsLl%2F9fOQcyo2WVAgxm63AChl%2BfIPyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKsva%2F3palToug5vDKtwDMC1%2FGIbsynZA78DDHfQiao9mPylMx%2BHCoXjiDAaXZuOzMapZRqtr3jpFh32%2F7X4QQJJgba4kQm4ifjgL7UfzwkX2RieadrNKnjcNWQr8OWv6kLj08bQQxhL44Gi0CMqZKw2GruPOQXd1ekSifpfNm0SeljPiSCi6EJavqtZUI7cgbHCFsYtVQIQB7yvl1hGy1XbCPuuLcBAdKqM99i3Gdr7A70ChZgazpCTqFT9nAMb%2F1E762S8qbQPzcUTDKqDTIxE1u6QwngEXNO0l9P2%2BvErJdTc%2FiGyr5LBtRABsWVr5AQZ%2FRyjX20qfpIX1Ega1oMPS3QZP2q4XLDVrqm6%2BjfEKCM25O9GXZG%2FMz7IaYQcvpf6%2FmPDxFpoI35zCshDV39E89d9f8pPk4VrVGe5lINyBgGCh0T7I7maWEx6om3w3QLehIaSnybt%2BAROtkl2QBOKQZP1%2Fy%2FEJpQkaW4RF%2FjLSrV6CDJIZmOeT5EZFUZNXjZQnVXBkpwCY%2BxJk9UqoPjnO6dVtQ9d93ZT68eG6SWHLO9OeyTyb7Z11TbPl9KExk%2FjSTbfd9mWtHFd4lYweA00Tkb9zOP0zR4udxixLfPDUsxdtR0qBA2RHuKHPw3i1UMTOdNC6qJrD7YMw1YffwQY6pgFqUjELJESB%2FN0E1iY7jaFTW6A%2FyghrqO%2BWxmkUEBXD9YTB4WEy4fquGdIvPFZXT%2FXWw%2FYq%2FeV%2B8B4D0H%2Ftug8m8zXnPCSrfNpeY%2B5yqua41bEPp1t156TFo02x7JWIZb9lDV8M%2F%2B6gHkSb7kf%2FK4trHRFo68OOB%2BK%2FAjHFikYGVXveu2fkx2ja1wpuxUbdPAAe4b4PAuKqXQTV7iLIMVCI%2F68kyXJw&X-Amz-Signature=d356cc4f94d9aeefba3372400f15c11164e276ef920382a469ec5fe7a365adfa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
