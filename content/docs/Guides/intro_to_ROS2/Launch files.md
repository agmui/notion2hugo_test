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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRXGPWA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCfREfEh0xnQFLGQfqNDTE3GT6PwXm5DK9HrGoqejPrTwIhAOjxo6d5MNwnBlP6H22vMqBhmugwqsBkiZr7oxyGddTeKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRferPgtrMW0eOsrYq3AOr9yl5KWn4Qy%2FMB4euA5WAIh0667TFa3tIvcMU827qxkLAwWo2tTYzcajpthQ8uyOhAFwd6lTL4w3bw7CANvhss6Kk33hF2fLOuiSTcfQo11Y4vZrK8b4nQBULUM90dpQtT5Ws%2FNAfbregOTRsdM6LS%2BGwuUfd90J6BdMxELA%2B31bd3AVOXmoMbVQZ0mA6ARIuTidZDs9FQGcrlOvQ0wDSN2zhbjfzz3nAOK0UTv9i6niExSG9LUHQtpDTSpMUSnlMqiafAb%2FIhIiS1GAMpIrZ2%2FwcZv1K5WwIjPwEZlZGdgYulf%2FsGGh3%2FOLJYPwlhgoGKkS7yjoZteykNCHCln3AgzEt3SOFlJJweFT6P%2BlIBJ3ObPA9C1KHDDjvTC%2BHk6OItY1KOIyJlKbIlV4DPy%2FvP7CzXppl905%2F6XoAglqfyYpqBZJ0YIHNYV2hPUx6e0jersvHC2eczluDEHVlvWePRiPinGMEgSyCetdpjEDH9KtnhFHRBoDA0k3J4xUxcZzMVfehgAJTKGazJxV9aZTTNxlRSPB3zyCX0T7w3HCcLpv9CXN7X%2BnellBaIn8t%2FYvBqYj%2Bvvh5w4V2VVUFFrfzPMkRSPFvLFWx5isdQbbJ5dv6G5SN6auIIN0DkzDP9p3ABjqkASWGGussuIQDa6mlzk4WFQnat3UzbCmDzCtfp7lIveNWoAo0wwuHFsM5ZId8KMta0%2F9b984jCZSOF9BmJKkB2dR7kEffK5rRM09jHblnDDR3k7ha6umBjD%2F02cP%2FJxbSX5lSu37HW%2FALGb1ziBC7shwjRaXumtUuwR4tbHBxOgajxgf4IGo9ROV2NhWWYCb2lnmOKsWpSWCMRkwlTgurFFUAFKxc&X-Amz-Signature=2922cc50aabbc16225a6f00fe9fae05285e0c8717da96729de1aa487a768f508&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRXGPWA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCfREfEh0xnQFLGQfqNDTE3GT6PwXm5DK9HrGoqejPrTwIhAOjxo6d5MNwnBlP6H22vMqBhmugwqsBkiZr7oxyGddTeKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRferPgtrMW0eOsrYq3AOr9yl5KWn4Qy%2FMB4euA5WAIh0667TFa3tIvcMU827qxkLAwWo2tTYzcajpthQ8uyOhAFwd6lTL4w3bw7CANvhss6Kk33hF2fLOuiSTcfQo11Y4vZrK8b4nQBULUM90dpQtT5Ws%2FNAfbregOTRsdM6LS%2BGwuUfd90J6BdMxELA%2B31bd3AVOXmoMbVQZ0mA6ARIuTidZDs9FQGcrlOvQ0wDSN2zhbjfzz3nAOK0UTv9i6niExSG9LUHQtpDTSpMUSnlMqiafAb%2FIhIiS1GAMpIrZ2%2FwcZv1K5WwIjPwEZlZGdgYulf%2FsGGh3%2FOLJYPwlhgoGKkS7yjoZteykNCHCln3AgzEt3SOFlJJweFT6P%2BlIBJ3ObPA9C1KHDDjvTC%2BHk6OItY1KOIyJlKbIlV4DPy%2FvP7CzXppl905%2F6XoAglqfyYpqBZJ0YIHNYV2hPUx6e0jersvHC2eczluDEHVlvWePRiPinGMEgSyCetdpjEDH9KtnhFHRBoDA0k3J4xUxcZzMVfehgAJTKGazJxV9aZTTNxlRSPB3zyCX0T7w3HCcLpv9CXN7X%2BnellBaIn8t%2FYvBqYj%2Bvvh5w4V2VVUFFrfzPMkRSPFvLFWx5isdQbbJ5dv6G5SN6auIIN0DkzDP9p3ABjqkASWGGussuIQDa6mlzk4WFQnat3UzbCmDzCtfp7lIveNWoAo0wwuHFsM5ZId8KMta0%2F9b984jCZSOF9BmJKkB2dR7kEffK5rRM09jHblnDDR3k7ha6umBjD%2F02cP%2FJxbSX5lSu37HW%2FALGb1ziBC7shwjRaXumtUuwR4tbHBxOgajxgf4IGo9ROV2NhWWYCb2lnmOKsWpSWCMRkwlTgurFFUAFKxc&X-Amz-Signature=e5c2db364d8045bc8b4ddd5281e0c8df5deefb912e68a51d05a5f6c5ee470635&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRXGPWA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCfREfEh0xnQFLGQfqNDTE3GT6PwXm5DK9HrGoqejPrTwIhAOjxo6d5MNwnBlP6H22vMqBhmugwqsBkiZr7oxyGddTeKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRferPgtrMW0eOsrYq3AOr9yl5KWn4Qy%2FMB4euA5WAIh0667TFa3tIvcMU827qxkLAwWo2tTYzcajpthQ8uyOhAFwd6lTL4w3bw7CANvhss6Kk33hF2fLOuiSTcfQo11Y4vZrK8b4nQBULUM90dpQtT5Ws%2FNAfbregOTRsdM6LS%2BGwuUfd90J6BdMxELA%2B31bd3AVOXmoMbVQZ0mA6ARIuTidZDs9FQGcrlOvQ0wDSN2zhbjfzz3nAOK0UTv9i6niExSG9LUHQtpDTSpMUSnlMqiafAb%2FIhIiS1GAMpIrZ2%2FwcZv1K5WwIjPwEZlZGdgYulf%2FsGGh3%2FOLJYPwlhgoGKkS7yjoZteykNCHCln3AgzEt3SOFlJJweFT6P%2BlIBJ3ObPA9C1KHDDjvTC%2BHk6OItY1KOIyJlKbIlV4DPy%2FvP7CzXppl905%2F6XoAglqfyYpqBZJ0YIHNYV2hPUx6e0jersvHC2eczluDEHVlvWePRiPinGMEgSyCetdpjEDH9KtnhFHRBoDA0k3J4xUxcZzMVfehgAJTKGazJxV9aZTTNxlRSPB3zyCX0T7w3HCcLpv9CXN7X%2BnellBaIn8t%2FYvBqYj%2Bvvh5w4V2VVUFFrfzPMkRSPFvLFWx5isdQbbJ5dv6G5SN6auIIN0DkzDP9p3ABjqkASWGGussuIQDa6mlzk4WFQnat3UzbCmDzCtfp7lIveNWoAo0wwuHFsM5ZId8KMta0%2F9b984jCZSOF9BmJKkB2dR7kEffK5rRM09jHblnDDR3k7ha6umBjD%2F02cP%2FJxbSX5lSu37HW%2FALGb1ziBC7shwjRaXumtUuwR4tbHBxOgajxgf4IGo9ROV2NhWWYCb2lnmOKsWpSWCMRkwlTgurFFUAFKxc&X-Amz-Signature=eed7fe26c31e7f00095b3e4efb8d17261ccf2d11c356f7557150c66797f7caf6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
