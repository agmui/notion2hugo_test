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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCVBMTJF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPMYnKniDAre2tEyI%2F4nDZMwt0yFsJfZC7gZEjigR%2BOgIhAOoO334q8qfRQHPgsrXUGjC50PoLCZdSVQG1pnIyIMklKv8DCG0QABoMNjM3NDIzMTgzODA1IgygusomYiVVrrc2yh8q3AMluRxKvYbzAVTA1N016pLNajsIpyaCm%2BUFo3nXmsDET0%2FuqGih64AwiveY%2BLAl7axWdVCC6gYN9GyPmEbCsmA%2FCuSzdzLQfzAAPfYaa2cRHgw2Am%2B6GlTBp%2FadFjC961QT%2FiSfEg7BZmj43w%2FWa9%2FgNWvOa1fLg%2B%2F9xQi7uvyCsxQbiMFli4JnRAhBmvzZEoHUugDEBV0LP9YvSkdlltzu%2BWGFC%2FsdKrd3927yk3yjFTcL0tdDwIsuXtgMU0qGui9w%2B%2FTHEQBlyBbLrAVp4%2BkuGR1rstxCbIpeoyOuOyvXS%2BBtx%2BeppDnEKf5qc7XnwDeAdfs4h5dVRvcb9kVy78P0xwzhqUPa8aH7xlAatL6%2FZzzB3cG6IrtmIHL7KNyEHy7EcdlYjiyGb9qVDgtwv4eB5xRu2ycHp4v0OX5%2FG5HSmUzqaHxaYEoftXMdCj%2BsVOgAGRPlgU5260ro4RHIUzfAjgAJRzEXg2Gz6a9FU67ln5Epu5saqTMjtO8fpabtHepBaptjbiOcpFqWVwOiuVTEdyBPqnhvHjszVokcO9L0j3WflqrXJVsQPY9T19%2Bgh3%2Bs5%2FxIzAWfNJf4YlDhgqkKnt3BuW2m9aweYIKWFQ%2F3MiKX2LSFZ4p8N3E7qjDYioDFBjqkAaU7yFkmFM69bZiMUOJIcmn1G%2F0rhNxyXB2ryFc4baD43K6%2FftXsA8h3MkJvutnfR6%2FVdYepcdqzQGdTEHHVGFX405ZCueAggnxnZIygg3kv4ueq%2FRH9AzGCnv6O%2FOBEC%2F8I7VCdhki2HFxs8mHnyfeQh4oGFpSdUxjr%2BgZCcUwitxUx9P%2FIXsz%2Ftdjy%2FKX50QE1uHRwXEFLd4zJo%2Biv%2BIIdvMJ1&X-Amz-Signature=9e19f6bf25f8513d46e8947bc454604fe4920c0d1ed883987c04b8677871f14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCVBMTJF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPMYnKniDAre2tEyI%2F4nDZMwt0yFsJfZC7gZEjigR%2BOgIhAOoO334q8qfRQHPgsrXUGjC50PoLCZdSVQG1pnIyIMklKv8DCG0QABoMNjM3NDIzMTgzODA1IgygusomYiVVrrc2yh8q3AMluRxKvYbzAVTA1N016pLNajsIpyaCm%2BUFo3nXmsDET0%2FuqGih64AwiveY%2BLAl7axWdVCC6gYN9GyPmEbCsmA%2FCuSzdzLQfzAAPfYaa2cRHgw2Am%2B6GlTBp%2FadFjC961QT%2FiSfEg7BZmj43w%2FWa9%2FgNWvOa1fLg%2B%2F9xQi7uvyCsxQbiMFli4JnRAhBmvzZEoHUugDEBV0LP9YvSkdlltzu%2BWGFC%2FsdKrd3927yk3yjFTcL0tdDwIsuXtgMU0qGui9w%2B%2FTHEQBlyBbLrAVp4%2BkuGR1rstxCbIpeoyOuOyvXS%2BBtx%2BeppDnEKf5qc7XnwDeAdfs4h5dVRvcb9kVy78P0xwzhqUPa8aH7xlAatL6%2FZzzB3cG6IrtmIHL7KNyEHy7EcdlYjiyGb9qVDgtwv4eB5xRu2ycHp4v0OX5%2FG5HSmUzqaHxaYEoftXMdCj%2BsVOgAGRPlgU5260ro4RHIUzfAjgAJRzEXg2Gz6a9FU67ln5Epu5saqTMjtO8fpabtHepBaptjbiOcpFqWVwOiuVTEdyBPqnhvHjszVokcO9L0j3WflqrXJVsQPY9T19%2Bgh3%2Bs5%2FxIzAWfNJf4YlDhgqkKnt3BuW2m9aweYIKWFQ%2F3MiKX2LSFZ4p8N3E7qjDYioDFBjqkAaU7yFkmFM69bZiMUOJIcmn1G%2F0rhNxyXB2ryFc4baD43K6%2FftXsA8h3MkJvutnfR6%2FVdYepcdqzQGdTEHHVGFX405ZCueAggnxnZIygg3kv4ueq%2FRH9AzGCnv6O%2FOBEC%2F8I7VCdhki2HFxs8mHnyfeQh4oGFpSdUxjr%2BgZCcUwitxUx9P%2FIXsz%2Ftdjy%2FKX50QE1uHRwXEFLd4zJo%2Biv%2BIIdvMJ1&X-Amz-Signature=07e7fa63af946cdb49a76761de9d900e1c827efcfe1ba56b4874e4f3fac5d86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCVBMTJF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCPMYnKniDAre2tEyI%2F4nDZMwt0yFsJfZC7gZEjigR%2BOgIhAOoO334q8qfRQHPgsrXUGjC50PoLCZdSVQG1pnIyIMklKv8DCG0QABoMNjM3NDIzMTgzODA1IgygusomYiVVrrc2yh8q3AMluRxKvYbzAVTA1N016pLNajsIpyaCm%2BUFo3nXmsDET0%2FuqGih64AwiveY%2BLAl7axWdVCC6gYN9GyPmEbCsmA%2FCuSzdzLQfzAAPfYaa2cRHgw2Am%2B6GlTBp%2FadFjC961QT%2FiSfEg7BZmj43w%2FWa9%2FgNWvOa1fLg%2B%2F9xQi7uvyCsxQbiMFli4JnRAhBmvzZEoHUugDEBV0LP9YvSkdlltzu%2BWGFC%2FsdKrd3927yk3yjFTcL0tdDwIsuXtgMU0qGui9w%2B%2FTHEQBlyBbLrAVp4%2BkuGR1rstxCbIpeoyOuOyvXS%2BBtx%2BeppDnEKf5qc7XnwDeAdfs4h5dVRvcb9kVy78P0xwzhqUPa8aH7xlAatL6%2FZzzB3cG6IrtmIHL7KNyEHy7EcdlYjiyGb9qVDgtwv4eB5xRu2ycHp4v0OX5%2FG5HSmUzqaHxaYEoftXMdCj%2BsVOgAGRPlgU5260ro4RHIUzfAjgAJRzEXg2Gz6a9FU67ln5Epu5saqTMjtO8fpabtHepBaptjbiOcpFqWVwOiuVTEdyBPqnhvHjszVokcO9L0j3WflqrXJVsQPY9T19%2Bgh3%2Bs5%2FxIzAWfNJf4YlDhgqkKnt3BuW2m9aweYIKWFQ%2F3MiKX2LSFZ4p8N3E7qjDYioDFBjqkAaU7yFkmFM69bZiMUOJIcmn1G%2F0rhNxyXB2ryFc4baD43K6%2FftXsA8h3MkJvutnfR6%2FVdYepcdqzQGdTEHHVGFX405ZCueAggnxnZIygg3kv4ueq%2FRH9AzGCnv6O%2FOBEC%2F8I7VCdhki2HFxs8mHnyfeQh4oGFpSdUxjr%2BgZCcUwitxUx9P%2FIXsz%2Ftdjy%2FKX50QE1uHRwXEFLd4zJo%2Biv%2BIIdvMJ1&X-Amz-Signature=320c02979e7172ffc7cc3e37cf3efda646457e57dee848d5aeb4d1bb90769492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
