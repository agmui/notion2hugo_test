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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJXMB3N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDw0YljTg%2Bh1lLSvSFZHBaQbLWB7cq1h0jglatZCUMpjAIhAJAcElEoVlpfZ8H21GDz0Vw6Wfn2pkYHodll1W5yXJckKv8DCCcQABoMNjM3NDIzMTgzODA1IgxYQCFgFsHucvROVpEq3APWUcfNHViKYRKfcf1Kct85C35C4dUsxWr9PDDG1FqzFZa56p5gbVvL7pgNSLrQ2nS6X0RBmKzv%2Bk6Jo%2BEZGYDZZdBjFbXAkU5FJXjgqRkC17e6yHCQT8uYD0aVRIxP%2BCWnnpjZj%2FCpYT7dSWheV2DEZ86N8igZpFz1KcGqNAaEeZRiWIRHXLwie%2BXhJWW7qp0ZdEw6%2Bx7KYld%2FfQQNW1NcHDGPPf8KzAEVppBYqu1pHXIP6daPdkutQC3gdru%2FpXXVW9wn5rxNredkquXHHk%2F7s1lKARt%2B3VcwkfiKH%2Ft2XqHzSV75kwABII%2BykBTU9bl%2BdwNO60%2BNbgKKvfWIhnfPL3Vvdsg6m8R9Z0gpj86dCcxkSk9ws8NhbasQl3By0gVZNtr0S1Kfcx2RUcMuWyI9HlGmN3moRMLLZdP0wAHSfGIvi3QVrCiBWfu84h8ivDEw51eeCskc1hHtwo3HMiy5Dja0o49XK1C7EkNax3KX%2FvI2yHpixhfDO0F2n1WL2l26TUM22pyT0soDipVDjl1fvJmT7HlyW%2BEu2voQVSnqaj2sp%2FUw6pHM6ioqQwHEOJn9dgB77HfF5m9TD96EzXvFxRCMxa7kirTJiL%2FvWrW8WBtdKda5wIThN8lSYDDg9%2BjCBjqkAQ06EqOmpM0M81DwRXTvkKVd1Fx4dc8LR8vSDWD2MDVDS9FocCSaZzaH3JOj2Yd7Ci4Mu1Mna1putmZWCyOIBL1jRdgsSdkhi0szMfCsZCnRyDCDaMCojUh04Q7IXCVE3whkbu58jbSu0gKC7Q74%2F8AygtA0q3xpvir4iiMwIdt%2BSSpRgpGYuV6j9MGmNrUS47idRnMaj5QArh7xbHMhI3UlzQXF&X-Amz-Signature=daf3697069acec2a91bdb4ceea09b2e37bd698b3cbc7d9d4dcd70f72731dfcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJXMB3N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDw0YljTg%2Bh1lLSvSFZHBaQbLWB7cq1h0jglatZCUMpjAIhAJAcElEoVlpfZ8H21GDz0Vw6Wfn2pkYHodll1W5yXJckKv8DCCcQABoMNjM3NDIzMTgzODA1IgxYQCFgFsHucvROVpEq3APWUcfNHViKYRKfcf1Kct85C35C4dUsxWr9PDDG1FqzFZa56p5gbVvL7pgNSLrQ2nS6X0RBmKzv%2Bk6Jo%2BEZGYDZZdBjFbXAkU5FJXjgqRkC17e6yHCQT8uYD0aVRIxP%2BCWnnpjZj%2FCpYT7dSWheV2DEZ86N8igZpFz1KcGqNAaEeZRiWIRHXLwie%2BXhJWW7qp0ZdEw6%2Bx7KYld%2FfQQNW1NcHDGPPf8KzAEVppBYqu1pHXIP6daPdkutQC3gdru%2FpXXVW9wn5rxNredkquXHHk%2F7s1lKARt%2B3VcwkfiKH%2Ft2XqHzSV75kwABII%2BykBTU9bl%2BdwNO60%2BNbgKKvfWIhnfPL3Vvdsg6m8R9Z0gpj86dCcxkSk9ws8NhbasQl3By0gVZNtr0S1Kfcx2RUcMuWyI9HlGmN3moRMLLZdP0wAHSfGIvi3QVrCiBWfu84h8ivDEw51eeCskc1hHtwo3HMiy5Dja0o49XK1C7EkNax3KX%2FvI2yHpixhfDO0F2n1WL2l26TUM22pyT0soDipVDjl1fvJmT7HlyW%2BEu2voQVSnqaj2sp%2FUw6pHM6ioqQwHEOJn9dgB77HfF5m9TD96EzXvFxRCMxa7kirTJiL%2FvWrW8WBtdKda5wIThN8lSYDDg9%2BjCBjqkAQ06EqOmpM0M81DwRXTvkKVd1Fx4dc8LR8vSDWD2MDVDS9FocCSaZzaH3JOj2Yd7Ci4Mu1Mna1putmZWCyOIBL1jRdgsSdkhi0szMfCsZCnRyDCDaMCojUh04Q7IXCVE3whkbu58jbSu0gKC7Q74%2F8AygtA0q3xpvir4iiMwIdt%2BSSpRgpGYuV6j9MGmNrUS47idRnMaj5QArh7xbHMhI3UlzQXF&X-Amz-Signature=8bd27b163407df09f33d45491cb02c9d0e25aae797cd16833fb33b4d55c623ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJXMB3N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDw0YljTg%2Bh1lLSvSFZHBaQbLWB7cq1h0jglatZCUMpjAIhAJAcElEoVlpfZ8H21GDz0Vw6Wfn2pkYHodll1W5yXJckKv8DCCcQABoMNjM3NDIzMTgzODA1IgxYQCFgFsHucvROVpEq3APWUcfNHViKYRKfcf1Kct85C35C4dUsxWr9PDDG1FqzFZa56p5gbVvL7pgNSLrQ2nS6X0RBmKzv%2Bk6Jo%2BEZGYDZZdBjFbXAkU5FJXjgqRkC17e6yHCQT8uYD0aVRIxP%2BCWnnpjZj%2FCpYT7dSWheV2DEZ86N8igZpFz1KcGqNAaEeZRiWIRHXLwie%2BXhJWW7qp0ZdEw6%2Bx7KYld%2FfQQNW1NcHDGPPf8KzAEVppBYqu1pHXIP6daPdkutQC3gdru%2FpXXVW9wn5rxNredkquXHHk%2F7s1lKARt%2B3VcwkfiKH%2Ft2XqHzSV75kwABII%2BykBTU9bl%2BdwNO60%2BNbgKKvfWIhnfPL3Vvdsg6m8R9Z0gpj86dCcxkSk9ws8NhbasQl3By0gVZNtr0S1Kfcx2RUcMuWyI9HlGmN3moRMLLZdP0wAHSfGIvi3QVrCiBWfu84h8ivDEw51eeCskc1hHtwo3HMiy5Dja0o49XK1C7EkNax3KX%2FvI2yHpixhfDO0F2n1WL2l26TUM22pyT0soDipVDjl1fvJmT7HlyW%2BEu2voQVSnqaj2sp%2FUw6pHM6ioqQwHEOJn9dgB77HfF5m9TD96EzXvFxRCMxa7kirTJiL%2FvWrW8WBtdKda5wIThN8lSYDDg9%2BjCBjqkAQ06EqOmpM0M81DwRXTvkKVd1Fx4dc8LR8vSDWD2MDVDS9FocCSaZzaH3JOj2Yd7Ci4Mu1Mna1putmZWCyOIBL1jRdgsSdkhi0szMfCsZCnRyDCDaMCojUh04Q7IXCVE3whkbu58jbSu0gKC7Q74%2F8AygtA0q3xpvir4iiMwIdt%2BSSpRgpGYuV6j9MGmNrUS47idRnMaj5QArh7xbHMhI3UlzQXF&X-Amz-Signature=d4b89d075ab84c123046bdee5365bab82f2dc4475fc0bfde6a9151cb5631ea99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
