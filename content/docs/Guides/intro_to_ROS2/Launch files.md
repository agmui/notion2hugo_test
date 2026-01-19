---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNOMK7K%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPSFLjUCAaPxHL%2FLUk7jsIeJOJG3egwxae1yV9rAdMPAIgA3j0duG0JCS40OJxyEccRdvghdxGrGDFb%2Fbhu%2BoahQwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwZj51abfQQ4fESuCrcA4qPOxUpp6PflI5RFuZy8%2BQelS5v283fw3n%2FOHE7GAUd%2F1NsNka5IIl5UCm5SByjlHQ8Zdmc1E02K5ASkp2C5Trf0rhdXmIZgniKyuSrFySMG13gZhVP0eVxadZhZekTZmfDU3UdK5Pj4ASVM7%2BSStvQ7SgaYaUC2nRSBBXru1MChzU9V0J3qRti4o8lsxBORDI858RZ9Jp4fECKvlSZI%2B9cYTy4dQ98oOXa3C%2FiVGf2EBURbQZqZaUaudLP%2BS0iZpDv5oWvehYBFR1moPoMhbFCwMlfNisRYGQjs3vXOcLhLPhYgq00LCwBHA2sGqbA3K7yL%2FoW70dgP9JeQUVhof6Y7pm%2B5hDUNZMZVGzKAj%2FnkX%2F7GkjcCF8GYfbLa9NY%2Brxfmdi9%2BjEITbvK0BIDSA9%2B11LCWLb2WNtF6qmXmi1xnsl2dg57DkcirM%2BAcw4r050stksDbB1DUZpQhANKgVAL%2BqU%2Bion1UntUYh2KfunYQlB4VUQCftAqho7v%2F5mhQRbD6b15hnAyvz3K%2B%2FB41zBOEPepfZhj%2FZcaKqKIevxyibP1OinZIttUHuklvnOj7nCY9ark23gHo7sqPbPnwTMM3jYLpYV2aqix3CHHDdb0ZIk22I5jm1qvj3%2B7MIbdtcsGOqUBlAghvqgMCYY%2FscYxzO9dgbR0%2BKyfwL8E9iXuboLsR8OW4EpkOKpRWhXig7M6jnNkEE9XVxNvlCMN%2B3JuaJSRCeY7DodWGrKT3BBG%2BtooZHR7RVE%2FiYUmi2HbcDb7VUsAxrNW8My5Lwxe4gGkLCJGmDW4sm%2BBoZjkfnGOiJqXJqLx84Bu9eUJG7s4AZyePS9bgB74Dz824utJJEaX2czDMFo9M61y&X-Amz-Signature=a57abe3bbdbf56fcb120bfe06418b595fa0e34097832304d8546cdabe63f660d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNOMK7K%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPSFLjUCAaPxHL%2FLUk7jsIeJOJG3egwxae1yV9rAdMPAIgA3j0duG0JCS40OJxyEccRdvghdxGrGDFb%2Fbhu%2BoahQwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwZj51abfQQ4fESuCrcA4qPOxUpp6PflI5RFuZy8%2BQelS5v283fw3n%2FOHE7GAUd%2F1NsNka5IIl5UCm5SByjlHQ8Zdmc1E02K5ASkp2C5Trf0rhdXmIZgniKyuSrFySMG13gZhVP0eVxadZhZekTZmfDU3UdK5Pj4ASVM7%2BSStvQ7SgaYaUC2nRSBBXru1MChzU9V0J3qRti4o8lsxBORDI858RZ9Jp4fECKvlSZI%2B9cYTy4dQ98oOXa3C%2FiVGf2EBURbQZqZaUaudLP%2BS0iZpDv5oWvehYBFR1moPoMhbFCwMlfNisRYGQjs3vXOcLhLPhYgq00LCwBHA2sGqbA3K7yL%2FoW70dgP9JeQUVhof6Y7pm%2B5hDUNZMZVGzKAj%2FnkX%2F7GkjcCF8GYfbLa9NY%2Brxfmdi9%2BjEITbvK0BIDSA9%2B11LCWLb2WNtF6qmXmi1xnsl2dg57DkcirM%2BAcw4r050stksDbB1DUZpQhANKgVAL%2BqU%2Bion1UntUYh2KfunYQlB4VUQCftAqho7v%2F5mhQRbD6b15hnAyvz3K%2B%2FB41zBOEPepfZhj%2FZcaKqKIevxyibP1OinZIttUHuklvnOj7nCY9ark23gHo7sqPbPnwTMM3jYLpYV2aqix3CHHDdb0ZIk22I5jm1qvj3%2B7MIbdtcsGOqUBlAghvqgMCYY%2FscYxzO9dgbR0%2BKyfwL8E9iXuboLsR8OW4EpkOKpRWhXig7M6jnNkEE9XVxNvlCMN%2B3JuaJSRCeY7DodWGrKT3BBG%2BtooZHR7RVE%2FiYUmi2HbcDb7VUsAxrNW8My5Lwxe4gGkLCJGmDW4sm%2BBoZjkfnGOiJqXJqLx84Bu9eUJG7s4AZyePS9bgB74Dz824utJJEaX2czDMFo9M61y&X-Amz-Signature=586d39ebcc6edd225f82fea231852786d60768d5d78256944aebd42e53fbf3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNOMK7K%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPSFLjUCAaPxHL%2FLUk7jsIeJOJG3egwxae1yV9rAdMPAIgA3j0duG0JCS40OJxyEccRdvghdxGrGDFb%2Fbhu%2BoahQwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwZj51abfQQ4fESuCrcA4qPOxUpp6PflI5RFuZy8%2BQelS5v283fw3n%2FOHE7GAUd%2F1NsNka5IIl5UCm5SByjlHQ8Zdmc1E02K5ASkp2C5Trf0rhdXmIZgniKyuSrFySMG13gZhVP0eVxadZhZekTZmfDU3UdK5Pj4ASVM7%2BSStvQ7SgaYaUC2nRSBBXru1MChzU9V0J3qRti4o8lsxBORDI858RZ9Jp4fECKvlSZI%2B9cYTy4dQ98oOXa3C%2FiVGf2EBURbQZqZaUaudLP%2BS0iZpDv5oWvehYBFR1moPoMhbFCwMlfNisRYGQjs3vXOcLhLPhYgq00LCwBHA2sGqbA3K7yL%2FoW70dgP9JeQUVhof6Y7pm%2B5hDUNZMZVGzKAj%2FnkX%2F7GkjcCF8GYfbLa9NY%2Brxfmdi9%2BjEITbvK0BIDSA9%2B11LCWLb2WNtF6qmXmi1xnsl2dg57DkcirM%2BAcw4r050stksDbB1DUZpQhANKgVAL%2BqU%2Bion1UntUYh2KfunYQlB4VUQCftAqho7v%2F5mhQRbD6b15hnAyvz3K%2B%2FB41zBOEPepfZhj%2FZcaKqKIevxyibP1OinZIttUHuklvnOj7nCY9ark23gHo7sqPbPnwTMM3jYLpYV2aqix3CHHDdb0ZIk22I5jm1qvj3%2B7MIbdtcsGOqUBlAghvqgMCYY%2FscYxzO9dgbR0%2BKyfwL8E9iXuboLsR8OW4EpkOKpRWhXig7M6jnNkEE9XVxNvlCMN%2B3JuaJSRCeY7DodWGrKT3BBG%2BtooZHR7RVE%2FiYUmi2HbcDb7VUsAxrNW8My5Lwxe4gGkLCJGmDW4sm%2BBoZjkfnGOiJqXJqLx84Bu9eUJG7s4AZyePS9bgB74Dz824utJJEaX2czDMFo9M61y&X-Amz-Signature=75892decff0a4161e9435e0173b27806c92c60631d1ccfffcbcf476e0f6c118f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
