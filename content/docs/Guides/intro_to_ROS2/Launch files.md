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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5JY5SQV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrA3objaTnRjn13LvG96%2BP0Ro%2Fik8kllI9ocF3GhImxwIhAJKoZ%2FZPa2LwtJpN%2FzoYGkoUhRgVMr37vjjQKS3p7cxWKv8DCEkQABoMNjM3NDIzMTgzODA1Igwd5Qzy5flaF8RQX9kq3AOdU%2FJR4bh8sBYlVmThuz4%2F75Y6Fext9XNHd6U95s3eudVoAwWoYA1pOaNSxQaSVrJSi%2BYYaAHQ66hAcK8G%2B5HP53OEA2zSWmj8%2FKbnBmHxJKVE7cHC1JqWov1pwD7kiLeOY1%2FNZEIUnhNBx3OZUgwmLguG%2Fimm2%2BP8Btl26wjSgFHKZ7TddtK5ctt7%2F27eJyk9oBjEC7F%2FV0DFopoE8An36VoPRvjwZmtLRz8QmU0am3JWimmspnVRSBG61lFh7i8nBdN3V1BjcmUVAYqbDt8it%2FeKtdNVClZe6aZJmyalvzvJPvYQU3CdzDMswmxKGBG9qbSkLPg6AVY3y7CqlfUpRB%2FFMXMn5r%2BV3yjwq6dCufQBafo79iSetQrYfXSQklyrp8UuBP1NjVI%2BJT2pFqjr6voD5v4Ts6wRzHL9PxCCIxJW7ddA0Nf4YeEN6PjgY9F0%2FAPgys86qrj6pC43fyL16oDkBBbpcHlhF2CSzqb6MPEDaaKeIOcJdB%2Fa%2FqnoTr3b0evXif0suJUbeLblUTKmCyvH452PWXmsb27btx9Oi24X0KE6eRmewDM6zkEXL63JqYBIiwiHvAPi8g%2F5U2fqMg%2FXrKY%2B1GWnTd5ugOO8XXqi4sk5z7sUJuQ5azDwiOG%2BBjqkAWNZnVc8t1qjnR6gPXcmyT2GOt9Pzur74z4vWnQ88dkaPJynyV8nQe1uiLm3u2Y9XkANqwIAszQmAjETJhSindlWHxIOgXduRfdAAGoia6NAOnlOQhA516AZXQawcyU4HX5dYxLI6ah%2FzVXqVx%2BkHb3dwaMuPpAtMKHRQgT6YLW7aUinhNgZJzuN3lDhul2pAW%2F8%2Blmno41PqwXoEnlZhnKNOLM0&X-Amz-Signature=cc6d989d5226ec925fe702e252c4d85fe6e708900da3043fd0b96d9354f90f01&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5JY5SQV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrA3objaTnRjn13LvG96%2BP0Ro%2Fik8kllI9ocF3GhImxwIhAJKoZ%2FZPa2LwtJpN%2FzoYGkoUhRgVMr37vjjQKS3p7cxWKv8DCEkQABoMNjM3NDIzMTgzODA1Igwd5Qzy5flaF8RQX9kq3AOdU%2FJR4bh8sBYlVmThuz4%2F75Y6Fext9XNHd6U95s3eudVoAwWoYA1pOaNSxQaSVrJSi%2BYYaAHQ66hAcK8G%2B5HP53OEA2zSWmj8%2FKbnBmHxJKVE7cHC1JqWov1pwD7kiLeOY1%2FNZEIUnhNBx3OZUgwmLguG%2Fimm2%2BP8Btl26wjSgFHKZ7TddtK5ctt7%2F27eJyk9oBjEC7F%2FV0DFopoE8An36VoPRvjwZmtLRz8QmU0am3JWimmspnVRSBG61lFh7i8nBdN3V1BjcmUVAYqbDt8it%2FeKtdNVClZe6aZJmyalvzvJPvYQU3CdzDMswmxKGBG9qbSkLPg6AVY3y7CqlfUpRB%2FFMXMn5r%2BV3yjwq6dCufQBafo79iSetQrYfXSQklyrp8UuBP1NjVI%2BJT2pFqjr6voD5v4Ts6wRzHL9PxCCIxJW7ddA0Nf4YeEN6PjgY9F0%2FAPgys86qrj6pC43fyL16oDkBBbpcHlhF2CSzqb6MPEDaaKeIOcJdB%2Fa%2FqnoTr3b0evXif0suJUbeLblUTKmCyvH452PWXmsb27btx9Oi24X0KE6eRmewDM6zkEXL63JqYBIiwiHvAPi8g%2F5U2fqMg%2FXrKY%2B1GWnTd5ugOO8XXqi4sk5z7sUJuQ5azDwiOG%2BBjqkAWNZnVc8t1qjnR6gPXcmyT2GOt9Pzur74z4vWnQ88dkaPJynyV8nQe1uiLm3u2Y9XkANqwIAszQmAjETJhSindlWHxIOgXduRfdAAGoia6NAOnlOQhA516AZXQawcyU4HX5dYxLI6ah%2FzVXqVx%2BkHb3dwaMuPpAtMKHRQgT6YLW7aUinhNgZJzuN3lDhul2pAW%2F8%2Blmno41PqwXoEnlZhnKNOLM0&X-Amz-Signature=e43c47bc97f762c02f8d9292ea12f9f7495ddaffa2c3b7372aa8443c14162856&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5JY5SQV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrA3objaTnRjn13LvG96%2BP0Ro%2Fik8kllI9ocF3GhImxwIhAJKoZ%2FZPa2LwtJpN%2FzoYGkoUhRgVMr37vjjQKS3p7cxWKv8DCEkQABoMNjM3NDIzMTgzODA1Igwd5Qzy5flaF8RQX9kq3AOdU%2FJR4bh8sBYlVmThuz4%2F75Y6Fext9XNHd6U95s3eudVoAwWoYA1pOaNSxQaSVrJSi%2BYYaAHQ66hAcK8G%2B5HP53OEA2zSWmj8%2FKbnBmHxJKVE7cHC1JqWov1pwD7kiLeOY1%2FNZEIUnhNBx3OZUgwmLguG%2Fimm2%2BP8Btl26wjSgFHKZ7TddtK5ctt7%2F27eJyk9oBjEC7F%2FV0DFopoE8An36VoPRvjwZmtLRz8QmU0am3JWimmspnVRSBG61lFh7i8nBdN3V1BjcmUVAYqbDt8it%2FeKtdNVClZe6aZJmyalvzvJPvYQU3CdzDMswmxKGBG9qbSkLPg6AVY3y7CqlfUpRB%2FFMXMn5r%2BV3yjwq6dCufQBafo79iSetQrYfXSQklyrp8UuBP1NjVI%2BJT2pFqjr6voD5v4Ts6wRzHL9PxCCIxJW7ddA0Nf4YeEN6PjgY9F0%2FAPgys86qrj6pC43fyL16oDkBBbpcHlhF2CSzqb6MPEDaaKeIOcJdB%2Fa%2FqnoTr3b0evXif0suJUbeLblUTKmCyvH452PWXmsb27btx9Oi24X0KE6eRmewDM6zkEXL63JqYBIiwiHvAPi8g%2F5U2fqMg%2FXrKY%2B1GWnTd5ugOO8XXqi4sk5z7sUJuQ5azDwiOG%2BBjqkAWNZnVc8t1qjnR6gPXcmyT2GOt9Pzur74z4vWnQ88dkaPJynyV8nQe1uiLm3u2Y9XkANqwIAszQmAjETJhSindlWHxIOgXduRfdAAGoia6NAOnlOQhA516AZXQawcyU4HX5dYxLI6ah%2FzVXqVx%2BkHb3dwaMuPpAtMKHRQgT6YLW7aUinhNgZJzuN3lDhul2pAW%2F8%2Blmno41PqwXoEnlZhnKNOLM0&X-Amz-Signature=349b47cfa5b00080d9b6d063d976db8bbf65ec503d8dc529b1e419555c64c9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
