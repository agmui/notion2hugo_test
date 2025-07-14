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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466534PJC3W%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDjbPejxs9fnXxWf2Z8nnjAIdRL5TmfKB5NtNhhGt4CxwIhAJ0cOxGHHAMj61lR6njKF1izFf0EW7cgOXgTcmBTeAhkKv8DCCgQABoMNjM3NDIzMTgzODA1IgzlcCCMI26Q0r9fDLAq3AOiK3q2ekU4fLMXjdDxpFUL6VembmZj4uh1IrLUzvrh1noxR0MvGgWewvtVg0wi9mnzyBD5F%2BaclIa6uLKScwhIcc291UTCNlIWc%2FzjZ%2F6SjCAYGe1CHecTMW%2B0ByR1JoHfqUahvo7yC5WhbX4BcCJTc3VtWBcJvaDlVFIWiv%2F42DVMfYsww33F8HpcbGO8UE%2ByAmeXDyNBRQsu1DnjkJ%2FqqSPHM%2BUtF7vDOeueQcFgVqyERGl4P6qYtgqlSBTUZgwid0X0QDeGzmRevL4RKNxw6V5eBxExibUFfR%2BpVEUD5%2BuuIc7PgA4LurViuvfLyeUwS984kMt2Lma9aRZGhodYjSS6Di%2B9KzZRkIXupaIA5Mr62DRCNN8Lv2BfXML7SZU9VfvvBwF32metlavdTQ56ygS2dQc7o%2BZeLBKUERN5rWdgvr%2F%2F6OSSkBoOyWo57BUzvLAfjwIWIj87%2Bt1LtmUTW4uKqr3QwK%2FHM6KzPHr9W6Dk2iPd2dpN93FagOLAGedBqjZ2YWjUkhMazstX0bvR7BZa0Xxb15DhXvkwisgXTj7z0158t7HDKJJjJNQVk9CG8qXCNuZ1mVUX02aYzeZ7SO%2Fulid%2FNVLTffFeWMMwHG0YSIiJMgI31YAAUjCt29LDBjqkAQLpQm2ydnKkBgrxdd1DJK%2ByenPsD1VepB765JEU6ErMv7dbKIAycHFSpRVRkVXLVlwLX9oalQ%2BfE7ecFOvz5A5zZB3M%2B07TF9r8Q4AKvASaLhXe88nd%2BdMUjFfYPOHMWxj87nzND4usmJYjNnxphMVtUdnQKz5s8Cw%2BYIOUoyusE8KXtFi%2BeGpnkb9LqcgDj32vxzTQqUKlODQBXImOPobwfjYB&X-Amz-Signature=3ed2a3f100d21494750eb7433fb20af4f066667964e404b8f3fb990b20f63983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466534PJC3W%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDjbPejxs9fnXxWf2Z8nnjAIdRL5TmfKB5NtNhhGt4CxwIhAJ0cOxGHHAMj61lR6njKF1izFf0EW7cgOXgTcmBTeAhkKv8DCCgQABoMNjM3NDIzMTgzODA1IgzlcCCMI26Q0r9fDLAq3AOiK3q2ekU4fLMXjdDxpFUL6VembmZj4uh1IrLUzvrh1noxR0MvGgWewvtVg0wi9mnzyBD5F%2BaclIa6uLKScwhIcc291UTCNlIWc%2FzjZ%2F6SjCAYGe1CHecTMW%2B0ByR1JoHfqUahvo7yC5WhbX4BcCJTc3VtWBcJvaDlVFIWiv%2F42DVMfYsww33F8HpcbGO8UE%2ByAmeXDyNBRQsu1DnjkJ%2FqqSPHM%2BUtF7vDOeueQcFgVqyERGl4P6qYtgqlSBTUZgwid0X0QDeGzmRevL4RKNxw6V5eBxExibUFfR%2BpVEUD5%2BuuIc7PgA4LurViuvfLyeUwS984kMt2Lma9aRZGhodYjSS6Di%2B9KzZRkIXupaIA5Mr62DRCNN8Lv2BfXML7SZU9VfvvBwF32metlavdTQ56ygS2dQc7o%2BZeLBKUERN5rWdgvr%2F%2F6OSSkBoOyWo57BUzvLAfjwIWIj87%2Bt1LtmUTW4uKqr3QwK%2FHM6KzPHr9W6Dk2iPd2dpN93FagOLAGedBqjZ2YWjUkhMazstX0bvR7BZa0Xxb15DhXvkwisgXTj7z0158t7HDKJJjJNQVk9CG8qXCNuZ1mVUX02aYzeZ7SO%2Fulid%2FNVLTffFeWMMwHG0YSIiJMgI31YAAUjCt29LDBjqkAQLpQm2ydnKkBgrxdd1DJK%2ByenPsD1VepB765JEU6ErMv7dbKIAycHFSpRVRkVXLVlwLX9oalQ%2BfE7ecFOvz5A5zZB3M%2B07TF9r8Q4AKvASaLhXe88nd%2BdMUjFfYPOHMWxj87nzND4usmJYjNnxphMVtUdnQKz5s8Cw%2BYIOUoyusE8KXtFi%2BeGpnkb9LqcgDj32vxzTQqUKlODQBXImOPobwfjYB&X-Amz-Signature=58c8dfc1f115c149cf34f11ba4635764a275b71faff408961a675adeb7d1fb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466534PJC3W%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDjbPejxs9fnXxWf2Z8nnjAIdRL5TmfKB5NtNhhGt4CxwIhAJ0cOxGHHAMj61lR6njKF1izFf0EW7cgOXgTcmBTeAhkKv8DCCgQABoMNjM3NDIzMTgzODA1IgzlcCCMI26Q0r9fDLAq3AOiK3q2ekU4fLMXjdDxpFUL6VembmZj4uh1IrLUzvrh1noxR0MvGgWewvtVg0wi9mnzyBD5F%2BaclIa6uLKScwhIcc291UTCNlIWc%2FzjZ%2F6SjCAYGe1CHecTMW%2B0ByR1JoHfqUahvo7yC5WhbX4BcCJTc3VtWBcJvaDlVFIWiv%2F42DVMfYsww33F8HpcbGO8UE%2ByAmeXDyNBRQsu1DnjkJ%2FqqSPHM%2BUtF7vDOeueQcFgVqyERGl4P6qYtgqlSBTUZgwid0X0QDeGzmRevL4RKNxw6V5eBxExibUFfR%2BpVEUD5%2BuuIc7PgA4LurViuvfLyeUwS984kMt2Lma9aRZGhodYjSS6Di%2B9KzZRkIXupaIA5Mr62DRCNN8Lv2BfXML7SZU9VfvvBwF32metlavdTQ56ygS2dQc7o%2BZeLBKUERN5rWdgvr%2F%2F6OSSkBoOyWo57BUzvLAfjwIWIj87%2Bt1LtmUTW4uKqr3QwK%2FHM6KzPHr9W6Dk2iPd2dpN93FagOLAGedBqjZ2YWjUkhMazstX0bvR7BZa0Xxb15DhXvkwisgXTj7z0158t7HDKJJjJNQVk9CG8qXCNuZ1mVUX02aYzeZ7SO%2Fulid%2FNVLTffFeWMMwHG0YSIiJMgI31YAAUjCt29LDBjqkAQLpQm2ydnKkBgrxdd1DJK%2ByenPsD1VepB765JEU6ErMv7dbKIAycHFSpRVRkVXLVlwLX9oalQ%2BfE7ecFOvz5A5zZB3M%2B07TF9r8Q4AKvASaLhXe88nd%2BdMUjFfYPOHMWxj87nzND4usmJYjNnxphMVtUdnQKz5s8Cw%2BYIOUoyusE8KXtFi%2BeGpnkb9LqcgDj32vxzTQqUKlODQBXImOPobwfjYB&X-Amz-Signature=23f11c94974bbe7d1b20aea0a452f85ca3c275c2c0e021e0040ce4e399bb2385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
