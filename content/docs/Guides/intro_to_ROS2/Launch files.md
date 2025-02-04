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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF63ZDS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDauFOmb92fbFLZPKPlFeVuPUJ8SN6WrqsJx0dI79Jx9AIhAIdPx49ucOKMiv7R%2F5l%2B7zAWSCSoIFRBloL1ljVVWNNpKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2FGnpd3XqcESGdSLYq3AM2n80rXTt8Jie5itg5Idj92E0%2FMktcs9atD%2FY7Ogtrd5U2vrPwqJjQZjzjYyR1EeXlDIb9XWw%2Fr5ZQ7U70YinZCgLQ0w2Tp934LAhuDEkgiO%2B18qoXZZpsrFlIJXfDBBgGvCEFeZHzTMHEbBk9Zh4g9bNPJ6ZvdSJ%2FI0yukp%2BjG%2FRnogYHdSOhD3T%2Fjwx%2BjeHinWvNsH%2F022ZJAJTsu7xNj0hICDSSkm5vDU2YIGnFkDknd66MluaD0fPTY4ZZT6L7NX%2F528lg0uIxrjb%2F30TuE0TWIVa%2FOcKCIRqdmFI5mYJWN86cq4%2FwitPcxUrBTyFi3IHG%2FNhPoENosRZyUGM6rbomlOyf%2BEyIjzT7KPpUGIjQS0fERkBF984MJXHUBmrsC%2BoBoXEtOQfG2wtO2rtpkJeFguCH0zStiwOeKudN3GJdk8TDz%2FkDFzwHS7WCykMkUa6hNAtfDai41R4fqOPaH6J%2FhDICJS8T0PsEAWWV2JTcGUhtKW1Ylsgn61h%2FFQQ3iSY7RkrdRkg9c59XT608QHPojQ3%2FOFowtbZWMxiWO6D%2BL0YWhiKRALwXk20e84yv5u%2BqQdudi7RiGSnoNihG6WmUShVvhtMwupOhk8LYrGegafafozxaFp4qbTDEr4e9BjqkActjgz0%2BVty7Y4wIPfRL%2BEI4JThzzQGl2lyGOpM23EaZxjpB189V4I0zdt06rm%2BF2rh7EDUGvRkj4bMkWjyHfiGRKTKN1rkfMs79EwXjds8AaZr9hcgLzJqSxnkluXvr5JkdOKJGz0VUTs2TSjvpNPekEccWGJcYVIfShJHRGg6o7lw08lSIIzxJATVGDyMnlHbQDKmM6XRReQ6ExzrScegu1WF9&X-Amz-Signature=c7e55a11c4575371a992072676a918c70e11321702f3f0e68f48885fc181903e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF63ZDS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDauFOmb92fbFLZPKPlFeVuPUJ8SN6WrqsJx0dI79Jx9AIhAIdPx49ucOKMiv7R%2F5l%2B7zAWSCSoIFRBloL1ljVVWNNpKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2FGnpd3XqcESGdSLYq3AM2n80rXTt8Jie5itg5Idj92E0%2FMktcs9atD%2FY7Ogtrd5U2vrPwqJjQZjzjYyR1EeXlDIb9XWw%2Fr5ZQ7U70YinZCgLQ0w2Tp934LAhuDEkgiO%2B18qoXZZpsrFlIJXfDBBgGvCEFeZHzTMHEbBk9Zh4g9bNPJ6ZvdSJ%2FI0yukp%2BjG%2FRnogYHdSOhD3T%2Fjwx%2BjeHinWvNsH%2F022ZJAJTsu7xNj0hICDSSkm5vDU2YIGnFkDknd66MluaD0fPTY4ZZT6L7NX%2F528lg0uIxrjb%2F30TuE0TWIVa%2FOcKCIRqdmFI5mYJWN86cq4%2FwitPcxUrBTyFi3IHG%2FNhPoENosRZyUGM6rbomlOyf%2BEyIjzT7KPpUGIjQS0fERkBF984MJXHUBmrsC%2BoBoXEtOQfG2wtO2rtpkJeFguCH0zStiwOeKudN3GJdk8TDz%2FkDFzwHS7WCykMkUa6hNAtfDai41R4fqOPaH6J%2FhDICJS8T0PsEAWWV2JTcGUhtKW1Ylsgn61h%2FFQQ3iSY7RkrdRkg9c59XT608QHPojQ3%2FOFowtbZWMxiWO6D%2BL0YWhiKRALwXk20e84yv5u%2BqQdudi7RiGSnoNihG6WmUShVvhtMwupOhk8LYrGegafafozxaFp4qbTDEr4e9BjqkActjgz0%2BVty7Y4wIPfRL%2BEI4JThzzQGl2lyGOpM23EaZxjpB189V4I0zdt06rm%2BF2rh7EDUGvRkj4bMkWjyHfiGRKTKN1rkfMs79EwXjds8AaZr9hcgLzJqSxnkluXvr5JkdOKJGz0VUTs2TSjvpNPekEccWGJcYVIfShJHRGg6o7lw08lSIIzxJATVGDyMnlHbQDKmM6XRReQ6ExzrScegu1WF9&X-Amz-Signature=4610db28b0b01511622cbf0a98565e1e446cd933098fc5b3b0bf3f0eebef735b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF63ZDS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDauFOmb92fbFLZPKPlFeVuPUJ8SN6WrqsJx0dI79Jx9AIhAIdPx49ucOKMiv7R%2F5l%2B7zAWSCSoIFRBloL1ljVVWNNpKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2FGnpd3XqcESGdSLYq3AM2n80rXTt8Jie5itg5Idj92E0%2FMktcs9atD%2FY7Ogtrd5U2vrPwqJjQZjzjYyR1EeXlDIb9XWw%2Fr5ZQ7U70YinZCgLQ0w2Tp934LAhuDEkgiO%2B18qoXZZpsrFlIJXfDBBgGvCEFeZHzTMHEbBk9Zh4g9bNPJ6ZvdSJ%2FI0yukp%2BjG%2FRnogYHdSOhD3T%2Fjwx%2BjeHinWvNsH%2F022ZJAJTsu7xNj0hICDSSkm5vDU2YIGnFkDknd66MluaD0fPTY4ZZT6L7NX%2F528lg0uIxrjb%2F30TuE0TWIVa%2FOcKCIRqdmFI5mYJWN86cq4%2FwitPcxUrBTyFi3IHG%2FNhPoENosRZyUGM6rbomlOyf%2BEyIjzT7KPpUGIjQS0fERkBF984MJXHUBmrsC%2BoBoXEtOQfG2wtO2rtpkJeFguCH0zStiwOeKudN3GJdk8TDz%2FkDFzwHS7WCykMkUa6hNAtfDai41R4fqOPaH6J%2FhDICJS8T0PsEAWWV2JTcGUhtKW1Ylsgn61h%2FFQQ3iSY7RkrdRkg9c59XT608QHPojQ3%2FOFowtbZWMxiWO6D%2BL0YWhiKRALwXk20e84yv5u%2BqQdudi7RiGSnoNihG6WmUShVvhtMwupOhk8LYrGegafafozxaFp4qbTDEr4e9BjqkActjgz0%2BVty7Y4wIPfRL%2BEI4JThzzQGl2lyGOpM23EaZxjpB189V4I0zdt06rm%2BF2rh7EDUGvRkj4bMkWjyHfiGRKTKN1rkfMs79EwXjds8AaZr9hcgLzJqSxnkluXvr5JkdOKJGz0VUTs2TSjvpNPekEccWGJcYVIfShJHRGg6o7lw08lSIIzxJATVGDyMnlHbQDKmM6XRReQ6ExzrScegu1WF9&X-Amz-Signature=641d1e1a92502f5f70d2f6bb4908238267b36c495ecbc767d056d47b5e2233d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
