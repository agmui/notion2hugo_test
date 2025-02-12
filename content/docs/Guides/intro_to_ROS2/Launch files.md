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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344KB42V%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzff0OYuvF5jTYQ6NwdZ%2BqVJwo5%2BIB89q0F8QVlHbAuwIhAK2Nz0CBSlMAmsaBYtTpXw4cD6qtjrGjMa4sB8H0wiG%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHiL8QlUdfqjZ99zkq3AP57PuUS1dfkqRAu5VgpuFyVet%2F%2FklkRcKaGWJ%2F%2BxFoZgRDf0FVkRMedikDNxslRRWZt8wg35murkoCOJHAfpJAXLhxUANTt1SSsdSSc07C1Tj6FLZfh9woR6guixhoHs1YSjSwOxRsJWqBw7ICxrpNWLD%2B9Nu4SCuFQJx%2FysKUEMg9ZlEjIOOv1z1BJSpoa0lfAWl3X3IRKIsbwHSCRk4vso7qQegyhov5WCHkK5S%2B1%2BhjCqlRIOViLi9A6Ga0Aa7kYLloSYHyPOCVD6WLf0gJyDjomzmSF49uGX1jFOwEDKHtbU7UEi6D5egz0VMknFy2uCZzRrx9BJLWkgy2KYEUA6JZ4VYJDfEo7t5ROtYoN0ySztcsyBugD9BqcjujTxDkXxL%2F2iAJ9LHQ4yJKPfh%2BaWhcYaUOwWRjApObjhXSomzwUJBSq9JKmCiGVmmHVz2n1Use3scY0LMnKI81XudDk0um6bUUkCSt1b2g7y5QAzL7zakClkpbGWUScHoonhcVPVRexq7OARBjK4ismUDgoKWficN10u5%2BaqXhPwwvvk91CA2try5A5e5RpuMg475cdTjla7mAN6nW%2BM9JIyt6X25qkUarAT6XsjECjxAOYuLuy7Ib9%2FPIZy8R1TDP7q%2B9BjqkAYS642vIhuYPDtKHBBjB30MtR3dVlz04uVUglEVlwyupvzMf1vbeYUi1ZyEmj3zfOYL2A7%2F9zhrD5sYuF7DU4jbF%2F0ycY%2F2XGxfe2AQ81DbuDJnGZZ5XrXCOU9HS7KRA%2FdSHb4ISTTHGWFpEvS%2FP1Wtd3t5hnpjQL%2B%2F9lFGuy%2FbCbjiUS5GpBIHaqrtStZfvmiJqaHkR3rcB8E9Pcqodu6NMHWKe&X-Amz-Signature=1b78a56f09d6d4ae5a88aced134cf28ef2a192aa9a716d7475d9b206f6bf7561&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344KB42V%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzff0OYuvF5jTYQ6NwdZ%2BqVJwo5%2BIB89q0F8QVlHbAuwIhAK2Nz0CBSlMAmsaBYtTpXw4cD6qtjrGjMa4sB8H0wiG%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHiL8QlUdfqjZ99zkq3AP57PuUS1dfkqRAu5VgpuFyVet%2F%2FklkRcKaGWJ%2F%2BxFoZgRDf0FVkRMedikDNxslRRWZt8wg35murkoCOJHAfpJAXLhxUANTt1SSsdSSc07C1Tj6FLZfh9woR6guixhoHs1YSjSwOxRsJWqBw7ICxrpNWLD%2B9Nu4SCuFQJx%2FysKUEMg9ZlEjIOOv1z1BJSpoa0lfAWl3X3IRKIsbwHSCRk4vso7qQegyhov5WCHkK5S%2B1%2BhjCqlRIOViLi9A6Ga0Aa7kYLloSYHyPOCVD6WLf0gJyDjomzmSF49uGX1jFOwEDKHtbU7UEi6D5egz0VMknFy2uCZzRrx9BJLWkgy2KYEUA6JZ4VYJDfEo7t5ROtYoN0ySztcsyBugD9BqcjujTxDkXxL%2F2iAJ9LHQ4yJKPfh%2BaWhcYaUOwWRjApObjhXSomzwUJBSq9JKmCiGVmmHVz2n1Use3scY0LMnKI81XudDk0um6bUUkCSt1b2g7y5QAzL7zakClkpbGWUScHoonhcVPVRexq7OARBjK4ismUDgoKWficN10u5%2BaqXhPwwvvk91CA2try5A5e5RpuMg475cdTjla7mAN6nW%2BM9JIyt6X25qkUarAT6XsjECjxAOYuLuy7Ib9%2FPIZy8R1TDP7q%2B9BjqkAYS642vIhuYPDtKHBBjB30MtR3dVlz04uVUglEVlwyupvzMf1vbeYUi1ZyEmj3zfOYL2A7%2F9zhrD5sYuF7DU4jbF%2F0ycY%2F2XGxfe2AQ81DbuDJnGZZ5XrXCOU9HS7KRA%2FdSHb4ISTTHGWFpEvS%2FP1Wtd3t5hnpjQL%2B%2F9lFGuy%2FbCbjiUS5GpBIHaqrtStZfvmiJqaHkR3rcB8E9Pcqodu6NMHWKe&X-Amz-Signature=16d67ed0a9dc8b0db9c481f612fb8e34f33c65de498113819ad990ff1c93640b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344KB42V%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzff0OYuvF5jTYQ6NwdZ%2BqVJwo5%2BIB89q0F8QVlHbAuwIhAK2Nz0CBSlMAmsaBYtTpXw4cD6qtjrGjMa4sB8H0wiG%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHiL8QlUdfqjZ99zkq3AP57PuUS1dfkqRAu5VgpuFyVet%2F%2FklkRcKaGWJ%2F%2BxFoZgRDf0FVkRMedikDNxslRRWZt8wg35murkoCOJHAfpJAXLhxUANTt1SSsdSSc07C1Tj6FLZfh9woR6guixhoHs1YSjSwOxRsJWqBw7ICxrpNWLD%2B9Nu4SCuFQJx%2FysKUEMg9ZlEjIOOv1z1BJSpoa0lfAWl3X3IRKIsbwHSCRk4vso7qQegyhov5WCHkK5S%2B1%2BhjCqlRIOViLi9A6Ga0Aa7kYLloSYHyPOCVD6WLf0gJyDjomzmSF49uGX1jFOwEDKHtbU7UEi6D5egz0VMknFy2uCZzRrx9BJLWkgy2KYEUA6JZ4VYJDfEo7t5ROtYoN0ySztcsyBugD9BqcjujTxDkXxL%2F2iAJ9LHQ4yJKPfh%2BaWhcYaUOwWRjApObjhXSomzwUJBSq9JKmCiGVmmHVz2n1Use3scY0LMnKI81XudDk0um6bUUkCSt1b2g7y5QAzL7zakClkpbGWUScHoonhcVPVRexq7OARBjK4ismUDgoKWficN10u5%2BaqXhPwwvvk91CA2try5A5e5RpuMg475cdTjla7mAN6nW%2BM9JIyt6X25qkUarAT6XsjECjxAOYuLuy7Ib9%2FPIZy8R1TDP7q%2B9BjqkAYS642vIhuYPDtKHBBjB30MtR3dVlz04uVUglEVlwyupvzMf1vbeYUi1ZyEmj3zfOYL2A7%2F9zhrD5sYuF7DU4jbF%2F0ycY%2F2XGxfe2AQ81DbuDJnGZZ5XrXCOU9HS7KRA%2FdSHb4ISTTHGWFpEvS%2FP1Wtd3t5hnpjQL%2B%2F9lFGuy%2FbCbjiUS5GpBIHaqrtStZfvmiJqaHkR3rcB8E9Pcqodu6NMHWKe&X-Amz-Signature=06826dc00ea74c1e6f32595895c2d7751d5144996758dec79e60a6f569e7ae5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
