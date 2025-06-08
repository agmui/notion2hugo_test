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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ6NLVM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXtA2TnQbomDcbyVwm9we2iZQUu5xR9J9fyFC3hohNqgIhAJ5NvV%2B6KJ9VbKGaEg4zyk0ncdZJbpkE%2BBcjYf3cpUNXKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe1kO5I8m8l5DaXR8q3AP18kS5Xr9t%2BcUV2h5GvmTMwyZXkQtXSlJVysrvqeScmAlqaCUYuM%2BRoQoNXFqccdlqA%2BGoSaxtcoNxIF%2BDst62MJuQZTKEKwQLw%2BIRmFSDjtgt4HL7lILH%2B2r%2FSyeRTpl8tf15o4pOt2GeYEZwoguzlme%2Byc6O8WTOqhntnlxLTpfyl3MhVb7uNoXqj7es02Bar%2B5JDNDMGSlIm9%2F%2BIotRnUTqoXSoKMjHnBhuYJ8KNCYHwd1hfTL6dp2HPg0m6YiFht69z4lvGFlrQVeemilSvJxhw0b9AF6L1iiFq0v4sdh4bQKgktapoA1ZiutUZCzmCMRjloUig4VQrsrao%2Fa%2Fa8j8BlaaC85PON9bxIZBRcRZeZyoZCZ5Ko3RM0zUFJ96Ri0oAmxbQZcNuGbloMaVfXxr2o4zv5eVKF5%2Bsax3amszYRvRZpOGqqYB2K2Wz9g35cDB6UGKGw3oyBlkml1O6U4EYgE%2Bcb5Lup9JuoJlsBKw93cgiCtGU6Ka3FRM9jnFBBqJBNePKjO0GpJ3ZqxgMm7NTV3NOKUYkILKFhD%2BS23Q0QHs8KSKxQ6sxJCC0EScVnwIm%2FnmiOjOyIlwknrsZwTHIlYrt3Vq0KvwVShI5kDZ%2F%2F2UsAC3yVjGzjCfs5bCBjqkAdvuP%2BNE%2BAGYCkqKTTYK5LsG4xlxeLqmmMYPXTKqGicJWl510axSel4Pp%2BH0Xwwm7HNC%2B3B%2FQ1CVwt6N8SOqeP%2FiQox1NALWaY1IXhCddlaeY3scug7AXBWoAi6cOKNGOv%2BIj6fher%2FLzi5Q1Yn92KX5E%2BWhMj%2FkCh%2FMBFUjyPNSlcIWSl3B19mdSFN%2BQjGabTKcm3vfuMfG8nNEeZ1zo0E3QIph&X-Amz-Signature=4add50b83423181a03a3d09a6b027f81daab74cb39a512a7d8fa5fcdeb21e1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ6NLVM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXtA2TnQbomDcbyVwm9we2iZQUu5xR9J9fyFC3hohNqgIhAJ5NvV%2B6KJ9VbKGaEg4zyk0ncdZJbpkE%2BBcjYf3cpUNXKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe1kO5I8m8l5DaXR8q3AP18kS5Xr9t%2BcUV2h5GvmTMwyZXkQtXSlJVysrvqeScmAlqaCUYuM%2BRoQoNXFqccdlqA%2BGoSaxtcoNxIF%2BDst62MJuQZTKEKwQLw%2BIRmFSDjtgt4HL7lILH%2B2r%2FSyeRTpl8tf15o4pOt2GeYEZwoguzlme%2Byc6O8WTOqhntnlxLTpfyl3MhVb7uNoXqj7es02Bar%2B5JDNDMGSlIm9%2F%2BIotRnUTqoXSoKMjHnBhuYJ8KNCYHwd1hfTL6dp2HPg0m6YiFht69z4lvGFlrQVeemilSvJxhw0b9AF6L1iiFq0v4sdh4bQKgktapoA1ZiutUZCzmCMRjloUig4VQrsrao%2Fa%2Fa8j8BlaaC85PON9bxIZBRcRZeZyoZCZ5Ko3RM0zUFJ96Ri0oAmxbQZcNuGbloMaVfXxr2o4zv5eVKF5%2Bsax3amszYRvRZpOGqqYB2K2Wz9g35cDB6UGKGw3oyBlkml1O6U4EYgE%2Bcb5Lup9JuoJlsBKw93cgiCtGU6Ka3FRM9jnFBBqJBNePKjO0GpJ3ZqxgMm7NTV3NOKUYkILKFhD%2BS23Q0QHs8KSKxQ6sxJCC0EScVnwIm%2FnmiOjOyIlwknrsZwTHIlYrt3Vq0KvwVShI5kDZ%2F%2F2UsAC3yVjGzjCfs5bCBjqkAdvuP%2BNE%2BAGYCkqKTTYK5LsG4xlxeLqmmMYPXTKqGicJWl510axSel4Pp%2BH0Xwwm7HNC%2B3B%2FQ1CVwt6N8SOqeP%2FiQox1NALWaY1IXhCddlaeY3scug7AXBWoAi6cOKNGOv%2BIj6fher%2FLzi5Q1Yn92KX5E%2BWhMj%2FkCh%2FMBFUjyPNSlcIWSl3B19mdSFN%2BQjGabTKcm3vfuMfG8nNEeZ1zo0E3QIph&X-Amz-Signature=04af36b0e37d36676ca40da507f656be33bff0ad9bcf6bfeb4131aa7f2639b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ6NLVM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXtA2TnQbomDcbyVwm9we2iZQUu5xR9J9fyFC3hohNqgIhAJ5NvV%2B6KJ9VbKGaEg4zyk0ncdZJbpkE%2BBcjYf3cpUNXKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe1kO5I8m8l5DaXR8q3AP18kS5Xr9t%2BcUV2h5GvmTMwyZXkQtXSlJVysrvqeScmAlqaCUYuM%2BRoQoNXFqccdlqA%2BGoSaxtcoNxIF%2BDst62MJuQZTKEKwQLw%2BIRmFSDjtgt4HL7lILH%2B2r%2FSyeRTpl8tf15o4pOt2GeYEZwoguzlme%2Byc6O8WTOqhntnlxLTpfyl3MhVb7uNoXqj7es02Bar%2B5JDNDMGSlIm9%2F%2BIotRnUTqoXSoKMjHnBhuYJ8KNCYHwd1hfTL6dp2HPg0m6YiFht69z4lvGFlrQVeemilSvJxhw0b9AF6L1iiFq0v4sdh4bQKgktapoA1ZiutUZCzmCMRjloUig4VQrsrao%2Fa%2Fa8j8BlaaC85PON9bxIZBRcRZeZyoZCZ5Ko3RM0zUFJ96Ri0oAmxbQZcNuGbloMaVfXxr2o4zv5eVKF5%2Bsax3amszYRvRZpOGqqYB2K2Wz9g35cDB6UGKGw3oyBlkml1O6U4EYgE%2Bcb5Lup9JuoJlsBKw93cgiCtGU6Ka3FRM9jnFBBqJBNePKjO0GpJ3ZqxgMm7NTV3NOKUYkILKFhD%2BS23Q0QHs8KSKxQ6sxJCC0EScVnwIm%2FnmiOjOyIlwknrsZwTHIlYrt3Vq0KvwVShI5kDZ%2F%2F2UsAC3yVjGzjCfs5bCBjqkAdvuP%2BNE%2BAGYCkqKTTYK5LsG4xlxeLqmmMYPXTKqGicJWl510axSel4Pp%2BH0Xwwm7HNC%2B3B%2FQ1CVwt6N8SOqeP%2FiQox1NALWaY1IXhCddlaeY3scug7AXBWoAi6cOKNGOv%2BIj6fher%2FLzi5Q1Yn92KX5E%2BWhMj%2FkCh%2FMBFUjyPNSlcIWSl3B19mdSFN%2BQjGabTKcm3vfuMfG8nNEeZ1zo0E3QIph&X-Amz-Signature=73e5dc3d2425fafb7c0cf1843d45af3a8aa8a96e4f36a176bfb4b221a0df2db3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
