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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463VYSHV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFlMim2%2B9DK9t%2B6wOOz%2FnmcjpScDkXQlBmQjfNAt1ApAIgLfOeEzFh7qQll5pmJJtWu%2BMKxF04nhPNIDHxzDETKWYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMBD%2FND55BVdbn27SyrcA%2B039fcZhRkrz9rskxWC%2FXWVjllhYJgzy8pX%2FsUoYVENTqA3st8rrivha1CDliJVVb6ZF%2BnOSO2XJf%2Fmls%2F%2BV%2FH7LBVyRM%2Fh6KgjxSyyLwrvvYe9i80EQ2VAgIOF9EaGlZbr3PryXQhaX6H49PxG6Y31vhJMhzqMjEtRa5liSpoiEgM%2B5DKZIDR2eqN2gbs%2Bvi%2BGyoUiZ7QafUDyPsxfrhaDeSQORlCxIaiO7S476psM53uTY09iqqPiHMHUOZe8HFlfH1SHeD%2FFguKliRQeiGeOpVvG3DAKuzhsz3vvz2Z4QeZtV7utlIq%2B5SPWt9b%2FYs%2FiU6cSfvLLlsuZddU9hBbLnMq8Tp8QysKNkabJEEGRZFLu9kwwjEwIuj9cqRi218T5QbOYJQKIrbsv%2BX7RZndAjmUUoCxHI4hVjV9zHzeqqOU7u7A7RyD06uKZMZMIWBQKPc1j2Uuv1NodYRDO1Jcm%2BWqTCu18zG%2FZXlOeM7DuQoQyodVRXZ8IVYxQBJdxRuwoWhF%2FtNsA%2Bh4IAFKF0Xh%2FXHTd9EzcGNNjnBPFPSb6zD3lBW4JFUqSOfeAG1S0EaWhMjRhSTmQP0mEGtCTaSdsOv4U537cCinc%2FrCj%2FyrEGKeUZCvQ2MKLSSoHMJ%2B2ncMGOqUB0HKAULQwodkUB0oSVx5AqAI%2Ft4yC%2FzZzYLDKq3ChiVXF8yHFhVUKnsdeEkBkHXlRKIojVS6eLBqgeD3hfy%2FhPBobADGkl49zSmrIoVBEjY9agBMpUQ3CFxC%2BsL2o3%2FY9quCBIlbtyvDs6I4nlnALmtjmPbRa8lWFD7dPZCmKv7U5Z2TooI%2BllsGtkCn7CLj9myPmHktT9FVXNaCshEV%2BcE3%2FqsMO&X-Amz-Signature=2b072920d944f5f53748305b7a66bf75956456ee9a98f6d573ce8e8bd0721e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463VYSHV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFlMim2%2B9DK9t%2B6wOOz%2FnmcjpScDkXQlBmQjfNAt1ApAIgLfOeEzFh7qQll5pmJJtWu%2BMKxF04nhPNIDHxzDETKWYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMBD%2FND55BVdbn27SyrcA%2B039fcZhRkrz9rskxWC%2FXWVjllhYJgzy8pX%2FsUoYVENTqA3st8rrivha1CDliJVVb6ZF%2BnOSO2XJf%2Fmls%2F%2BV%2FH7LBVyRM%2Fh6KgjxSyyLwrvvYe9i80EQ2VAgIOF9EaGlZbr3PryXQhaX6H49PxG6Y31vhJMhzqMjEtRa5liSpoiEgM%2B5DKZIDR2eqN2gbs%2Bvi%2BGyoUiZ7QafUDyPsxfrhaDeSQORlCxIaiO7S476psM53uTY09iqqPiHMHUOZe8HFlfH1SHeD%2FFguKliRQeiGeOpVvG3DAKuzhsz3vvz2Z4QeZtV7utlIq%2B5SPWt9b%2FYs%2FiU6cSfvLLlsuZddU9hBbLnMq8Tp8QysKNkabJEEGRZFLu9kwwjEwIuj9cqRi218T5QbOYJQKIrbsv%2BX7RZndAjmUUoCxHI4hVjV9zHzeqqOU7u7A7RyD06uKZMZMIWBQKPc1j2Uuv1NodYRDO1Jcm%2BWqTCu18zG%2FZXlOeM7DuQoQyodVRXZ8IVYxQBJdxRuwoWhF%2FtNsA%2Bh4IAFKF0Xh%2FXHTd9EzcGNNjnBPFPSb6zD3lBW4JFUqSOfeAG1S0EaWhMjRhSTmQP0mEGtCTaSdsOv4U537cCinc%2FrCj%2FyrEGKeUZCvQ2MKLSSoHMJ%2B2ncMGOqUB0HKAULQwodkUB0oSVx5AqAI%2Ft4yC%2FzZzYLDKq3ChiVXF8yHFhVUKnsdeEkBkHXlRKIojVS6eLBqgeD3hfy%2FhPBobADGkl49zSmrIoVBEjY9agBMpUQ3CFxC%2BsL2o3%2FY9quCBIlbtyvDs6I4nlnALmtjmPbRa8lWFD7dPZCmKv7U5Z2TooI%2BllsGtkCn7CLj9myPmHktT9FVXNaCshEV%2BcE3%2FqsMO&X-Amz-Signature=ae4022a2ddc9fd2431ad42d26ca08cfaed3d3f48d5313e91c5beb9c7f4b9eab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463VYSHV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFlMim2%2B9DK9t%2B6wOOz%2FnmcjpScDkXQlBmQjfNAt1ApAIgLfOeEzFh7qQll5pmJJtWu%2BMKxF04nhPNIDHxzDETKWYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMBD%2FND55BVdbn27SyrcA%2B039fcZhRkrz9rskxWC%2FXWVjllhYJgzy8pX%2FsUoYVENTqA3st8rrivha1CDliJVVb6ZF%2BnOSO2XJf%2Fmls%2F%2BV%2FH7LBVyRM%2Fh6KgjxSyyLwrvvYe9i80EQ2VAgIOF9EaGlZbr3PryXQhaX6H49PxG6Y31vhJMhzqMjEtRa5liSpoiEgM%2B5DKZIDR2eqN2gbs%2Bvi%2BGyoUiZ7QafUDyPsxfrhaDeSQORlCxIaiO7S476psM53uTY09iqqPiHMHUOZe8HFlfH1SHeD%2FFguKliRQeiGeOpVvG3DAKuzhsz3vvz2Z4QeZtV7utlIq%2B5SPWt9b%2FYs%2FiU6cSfvLLlsuZddU9hBbLnMq8Tp8QysKNkabJEEGRZFLu9kwwjEwIuj9cqRi218T5QbOYJQKIrbsv%2BX7RZndAjmUUoCxHI4hVjV9zHzeqqOU7u7A7RyD06uKZMZMIWBQKPc1j2Uuv1NodYRDO1Jcm%2BWqTCu18zG%2FZXlOeM7DuQoQyodVRXZ8IVYxQBJdxRuwoWhF%2FtNsA%2Bh4IAFKF0Xh%2FXHTd9EzcGNNjnBPFPSb6zD3lBW4JFUqSOfeAG1S0EaWhMjRhSTmQP0mEGtCTaSdsOv4U537cCinc%2FrCj%2FyrEGKeUZCvQ2MKLSSoHMJ%2B2ncMGOqUB0HKAULQwodkUB0oSVx5AqAI%2Ft4yC%2FzZzYLDKq3ChiVXF8yHFhVUKnsdeEkBkHXlRKIojVS6eLBqgeD3hfy%2FhPBobADGkl49zSmrIoVBEjY9agBMpUQ3CFxC%2BsL2o3%2FY9quCBIlbtyvDs6I4nlnALmtjmPbRa8lWFD7dPZCmKv7U5Z2TooI%2BllsGtkCn7CLj9myPmHktT9FVXNaCshEV%2BcE3%2FqsMO&X-Amz-Signature=37f02afcb15f80fd2f13f1c8077514db1f216603105b9be7fd1118d003861818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
