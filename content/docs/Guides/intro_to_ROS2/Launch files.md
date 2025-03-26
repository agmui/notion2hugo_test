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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLOS4PG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLMdu%2FX%2FIY51BeN4yVVZgtr0GLUyulKzt3Set%2FUWSbCQIhAIjsAWhqVNU8yXXr4Lst8971MAL3NlO5Ab0X7ifPMUWdKv8DCCEQABoMNjM3NDIzMTgzODA1IgyNpoSkyOuAWhDjV3Qq3APUaGjJ5j6VgKZfyISQqeXDI3d88u3bUZXWmb4hVkq0XQzhYBVfL%2FHpB8ONkWjJtNl%2FFyMTfvHOhRVd7Nqqz%2BY73KlEmxDr2cPKQrbXtvp6J4gK7ONIdE2pcmfi0YhS9OQZgHDAYRoZ6vJDbHxDHV3FBwPgzg3%2BRWtaG4HoZ%2BJVplhbvbpsqT8jv6%2BvAaW3KkgHVXP%2FRItos5CiN3wFNuBHSqEgB8S0cp1B5cplJtKPyXo0KsxQDF9za%2FOiIXEAnXVnG%2FuxEAwU1QPzud5Da2Dhr%2BgGBLJMlADkROrcbcsQ0yt0fAX0hIdgy%2BxRvSOsdiv%2BlAeheodqQ8%2F1wDzTnINkRiemjfF%2FjPE7phBS%2BjTs3MnIn21XyMXbnTGTjDVgUsnGSEoZQrF8tKd6QzR8LzFZmYK892AlJRa9HBxWrKWqB7xEd2Y0krLZOAts2zctSVBPvb2c%2FyNSzZVY3ViC%2FxTEcWdfHwPcIPGI7WOQ8%2BzxjFuu9hP8cqCrHULzoyY9eoCF3SG%2BQc1iATLYY%2Bt9uxnDURLrSg92jI708df6UM6tWN6L8PxGBK8lcFvVw6%2BP3EttMmEEinCImpBu%2F%2FeTqoOUGrMdzygz17UiAt%2BArbqeO4W4O8azFugffNBh4DD9jY2%2FBjqkAWSShjvNTNw60OtMjIm6qVeKFOTK%2FOPNDkXJTnVXAML4XWI07T03XE%2BftrefGZwajdhtc0XNjoqMV11Ae%2FT3hE36VOszPJm%2B3usUOhPfFUg45GKMw70gOjor7Oy%2FBSSn%2BfTDYibpXB1NbqdU0QRHu2%2B530SjOUK0fXvFL4Kzn55QCnv8sVK%2Fbs3ViRjD%2BXxKdSDZjb5yvr9xXPgHk2kEMNzAL95G&X-Amz-Signature=9a9b7bbc4aa0f0b86e2a9ea51280e3238e0bd02270a87229997a8c270cf8b8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLOS4PG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLMdu%2FX%2FIY51BeN4yVVZgtr0GLUyulKzt3Set%2FUWSbCQIhAIjsAWhqVNU8yXXr4Lst8971MAL3NlO5Ab0X7ifPMUWdKv8DCCEQABoMNjM3NDIzMTgzODA1IgyNpoSkyOuAWhDjV3Qq3APUaGjJ5j6VgKZfyISQqeXDI3d88u3bUZXWmb4hVkq0XQzhYBVfL%2FHpB8ONkWjJtNl%2FFyMTfvHOhRVd7Nqqz%2BY73KlEmxDr2cPKQrbXtvp6J4gK7ONIdE2pcmfi0YhS9OQZgHDAYRoZ6vJDbHxDHV3FBwPgzg3%2BRWtaG4HoZ%2BJVplhbvbpsqT8jv6%2BvAaW3KkgHVXP%2FRItos5CiN3wFNuBHSqEgB8S0cp1B5cplJtKPyXo0KsxQDF9za%2FOiIXEAnXVnG%2FuxEAwU1QPzud5Da2Dhr%2BgGBLJMlADkROrcbcsQ0yt0fAX0hIdgy%2BxRvSOsdiv%2BlAeheodqQ8%2F1wDzTnINkRiemjfF%2FjPE7phBS%2BjTs3MnIn21XyMXbnTGTjDVgUsnGSEoZQrF8tKd6QzR8LzFZmYK892AlJRa9HBxWrKWqB7xEd2Y0krLZOAts2zctSVBPvb2c%2FyNSzZVY3ViC%2FxTEcWdfHwPcIPGI7WOQ8%2BzxjFuu9hP8cqCrHULzoyY9eoCF3SG%2BQc1iATLYY%2Bt9uxnDURLrSg92jI708df6UM6tWN6L8PxGBK8lcFvVw6%2BP3EttMmEEinCImpBu%2F%2FeTqoOUGrMdzygz17UiAt%2BArbqeO4W4O8azFugffNBh4DD9jY2%2FBjqkAWSShjvNTNw60OtMjIm6qVeKFOTK%2FOPNDkXJTnVXAML4XWI07T03XE%2BftrefGZwajdhtc0XNjoqMV11Ae%2FT3hE36VOszPJm%2B3usUOhPfFUg45GKMw70gOjor7Oy%2FBSSn%2BfTDYibpXB1NbqdU0QRHu2%2B530SjOUK0fXvFL4Kzn55QCnv8sVK%2Fbs3ViRjD%2BXxKdSDZjb5yvr9xXPgHk2kEMNzAL95G&X-Amz-Signature=a8cd20313e361214745e38906c91081d40318a491aabe82c89e034772af1fda4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLOS4PG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLMdu%2FX%2FIY51BeN4yVVZgtr0GLUyulKzt3Set%2FUWSbCQIhAIjsAWhqVNU8yXXr4Lst8971MAL3NlO5Ab0X7ifPMUWdKv8DCCEQABoMNjM3NDIzMTgzODA1IgyNpoSkyOuAWhDjV3Qq3APUaGjJ5j6VgKZfyISQqeXDI3d88u3bUZXWmb4hVkq0XQzhYBVfL%2FHpB8ONkWjJtNl%2FFyMTfvHOhRVd7Nqqz%2BY73KlEmxDr2cPKQrbXtvp6J4gK7ONIdE2pcmfi0YhS9OQZgHDAYRoZ6vJDbHxDHV3FBwPgzg3%2BRWtaG4HoZ%2BJVplhbvbpsqT8jv6%2BvAaW3KkgHVXP%2FRItos5CiN3wFNuBHSqEgB8S0cp1B5cplJtKPyXo0KsxQDF9za%2FOiIXEAnXVnG%2FuxEAwU1QPzud5Da2Dhr%2BgGBLJMlADkROrcbcsQ0yt0fAX0hIdgy%2BxRvSOsdiv%2BlAeheodqQ8%2F1wDzTnINkRiemjfF%2FjPE7phBS%2BjTs3MnIn21XyMXbnTGTjDVgUsnGSEoZQrF8tKd6QzR8LzFZmYK892AlJRa9HBxWrKWqB7xEd2Y0krLZOAts2zctSVBPvb2c%2FyNSzZVY3ViC%2FxTEcWdfHwPcIPGI7WOQ8%2BzxjFuu9hP8cqCrHULzoyY9eoCF3SG%2BQc1iATLYY%2Bt9uxnDURLrSg92jI708df6UM6tWN6L8PxGBK8lcFvVw6%2BP3EttMmEEinCImpBu%2F%2FeTqoOUGrMdzygz17UiAt%2BArbqeO4W4O8azFugffNBh4DD9jY2%2FBjqkAWSShjvNTNw60OtMjIm6qVeKFOTK%2FOPNDkXJTnVXAML4XWI07T03XE%2BftrefGZwajdhtc0XNjoqMV11Ae%2FT3hE36VOszPJm%2B3usUOhPfFUg45GKMw70gOjor7Oy%2FBSSn%2BfTDYibpXB1NbqdU0QRHu2%2B530SjOUK0fXvFL4Kzn55QCnv8sVK%2Fbs3ViRjD%2BXxKdSDZjb5yvr9xXPgHk2kEMNzAL95G&X-Amz-Signature=fb59c1845adc36db6b5bbc0be815219852d999f4f63b410579385b1871fd6217&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
