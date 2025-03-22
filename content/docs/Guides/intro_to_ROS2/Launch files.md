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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQKY2KV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICp%2FOtWXab%2FpHCrXN7n5ygbVepSDyN8kvohf4acCWb%2F7AiEA6DyUb84ZbzvrjryRFr0qggatJCkMuBKnddQyO9sz360qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSOjSgJL9nWB0wrgircAzMFF1M2LkBwdyZLmT4g%2B6rVTTVybItliDAkutHd5pVQ0SskXKAwC5244tcIwV9e1ovI%2FdqNrcSeTw6gU0fMnG6Gnl9SpDBcS5EVug3kIaVMohCC2fsQzGm6u7UiKb5yzLW4jVMwVTzTNRyhmki4q2MdmN3mmvEENBsMGnzEYQ03gnxMQebDn3c6vSpOIEbjw%2BH8bWTWziXPKg2nLh%2F4hq7EKIYwca4asWtVCvvJWrbUjZRD5%2BspJwdq23rQ%2B2ESvyDuAO5NqgcG2stRBOhD7FSJO4YszlDucU2C8Nxse7Cu22UAXvSngA5GQzp6vnP1ShvGPPPK0bUYp45eSRs59ncOzb6uwJlePFKhro8rTbxCg1kSxBrH3XmXqMVPkRFNRiHu0YodwOj5gLvqy9%2FoAU%2FD5dB%2F3Bcd%2FvdD9oi6ivGLbzVEgjAFlQHzRmRqcDZsw7xIqUUK1GaNhE2TithX2Y%2FJGbviMvZufjs9IcGWxGVyuK3xgZf8x%2BpvVEtYmlFEMAp54fk8bOeXDP%2B4n3BAQzKe29Csad5iivJyj9IPXo1BnwjafhA0eW8bW%2BrEwtLP%2BQywdy%2F%2BKLrzOao8v2q9gawEGdAZyiJuYIj1CJzEvygrXII3YTFqZB7skLqGMLKt%2Br4GOqUBB8O%2Bn2t9q4znAVCtLT6C0AXDRtW55IqJ3GeFASW8vPQDvoLxgnbUSuU8fdQimXg7GSsz4FVePHJhbyXMp1kjvRBUS%2FFWexyipN7mmCvA7XvMhcO6w%2FHFBlXAniEY0tWnWwZZtbKwVmXiJoKolyq1PTk7v%2B5kgM3GST%2Fy5aAJ6yNYg%2BL78d0gF5tfoDqbQDbZsVrdPS6Ewdy6uzgUa8wfehUvFIS8&X-Amz-Signature=c89d38722e4bbdb8caafe36838e25f512f7a3e829a865835e8efd342f01218e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQKY2KV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICp%2FOtWXab%2FpHCrXN7n5ygbVepSDyN8kvohf4acCWb%2F7AiEA6DyUb84ZbzvrjryRFr0qggatJCkMuBKnddQyO9sz360qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSOjSgJL9nWB0wrgircAzMFF1M2LkBwdyZLmT4g%2B6rVTTVybItliDAkutHd5pVQ0SskXKAwC5244tcIwV9e1ovI%2FdqNrcSeTw6gU0fMnG6Gnl9SpDBcS5EVug3kIaVMohCC2fsQzGm6u7UiKb5yzLW4jVMwVTzTNRyhmki4q2MdmN3mmvEENBsMGnzEYQ03gnxMQebDn3c6vSpOIEbjw%2BH8bWTWziXPKg2nLh%2F4hq7EKIYwca4asWtVCvvJWrbUjZRD5%2BspJwdq23rQ%2B2ESvyDuAO5NqgcG2stRBOhD7FSJO4YszlDucU2C8Nxse7Cu22UAXvSngA5GQzp6vnP1ShvGPPPK0bUYp45eSRs59ncOzb6uwJlePFKhro8rTbxCg1kSxBrH3XmXqMVPkRFNRiHu0YodwOj5gLvqy9%2FoAU%2FD5dB%2F3Bcd%2FvdD9oi6ivGLbzVEgjAFlQHzRmRqcDZsw7xIqUUK1GaNhE2TithX2Y%2FJGbviMvZufjs9IcGWxGVyuK3xgZf8x%2BpvVEtYmlFEMAp54fk8bOeXDP%2B4n3BAQzKe29Csad5iivJyj9IPXo1BnwjafhA0eW8bW%2BrEwtLP%2BQywdy%2F%2BKLrzOao8v2q9gawEGdAZyiJuYIj1CJzEvygrXII3YTFqZB7skLqGMLKt%2Br4GOqUBB8O%2Bn2t9q4znAVCtLT6C0AXDRtW55IqJ3GeFASW8vPQDvoLxgnbUSuU8fdQimXg7GSsz4FVePHJhbyXMp1kjvRBUS%2FFWexyipN7mmCvA7XvMhcO6w%2FHFBlXAniEY0tWnWwZZtbKwVmXiJoKolyq1PTk7v%2B5kgM3GST%2Fy5aAJ6yNYg%2BL78d0gF5tfoDqbQDbZsVrdPS6Ewdy6uzgUa8wfehUvFIS8&X-Amz-Signature=bce4f3430de710435c6220d0a6ebda9b5259ada2e4e1c4f9c44a3b3cc14adf93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQKY2KV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICp%2FOtWXab%2FpHCrXN7n5ygbVepSDyN8kvohf4acCWb%2F7AiEA6DyUb84ZbzvrjryRFr0qggatJCkMuBKnddQyO9sz360qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSOjSgJL9nWB0wrgircAzMFF1M2LkBwdyZLmT4g%2B6rVTTVybItliDAkutHd5pVQ0SskXKAwC5244tcIwV9e1ovI%2FdqNrcSeTw6gU0fMnG6Gnl9SpDBcS5EVug3kIaVMohCC2fsQzGm6u7UiKb5yzLW4jVMwVTzTNRyhmki4q2MdmN3mmvEENBsMGnzEYQ03gnxMQebDn3c6vSpOIEbjw%2BH8bWTWziXPKg2nLh%2F4hq7EKIYwca4asWtVCvvJWrbUjZRD5%2BspJwdq23rQ%2B2ESvyDuAO5NqgcG2stRBOhD7FSJO4YszlDucU2C8Nxse7Cu22UAXvSngA5GQzp6vnP1ShvGPPPK0bUYp45eSRs59ncOzb6uwJlePFKhro8rTbxCg1kSxBrH3XmXqMVPkRFNRiHu0YodwOj5gLvqy9%2FoAU%2FD5dB%2F3Bcd%2FvdD9oi6ivGLbzVEgjAFlQHzRmRqcDZsw7xIqUUK1GaNhE2TithX2Y%2FJGbviMvZufjs9IcGWxGVyuK3xgZf8x%2BpvVEtYmlFEMAp54fk8bOeXDP%2B4n3BAQzKe29Csad5iivJyj9IPXo1BnwjafhA0eW8bW%2BrEwtLP%2BQywdy%2F%2BKLrzOao8v2q9gawEGdAZyiJuYIj1CJzEvygrXII3YTFqZB7skLqGMLKt%2Br4GOqUBB8O%2Bn2t9q4znAVCtLT6C0AXDRtW55IqJ3GeFASW8vPQDvoLxgnbUSuU8fdQimXg7GSsz4FVePHJhbyXMp1kjvRBUS%2FFWexyipN7mmCvA7XvMhcO6w%2FHFBlXAniEY0tWnWwZZtbKwVmXiJoKolyq1PTk7v%2B5kgM3GST%2Fy5aAJ6yNYg%2BL78d0gF5tfoDqbQDbZsVrdPS6Ewdy6uzgUa8wfehUvFIS8&X-Amz-Signature=f5d7fb092687078304d7bfaacf86dae447357048feb3e3b0acc415c3c8239cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
