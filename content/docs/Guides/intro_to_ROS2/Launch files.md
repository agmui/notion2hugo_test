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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRC3YNDJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOZmMwXAOcGZHVvhYvji1nRTtt8YOx40XTZylcngi4AAiEA5sp6aHjX9DoTcuxowgmf178sNdB%2FAo4DZcu1qTXGtEAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGfiI86RuRSiq05EzCrcA3iuJlCPTgzTnWT8zY33S71dsTehYom078GdjKaByh2i7oOmgblLi7aZXT1PAGCcwP95U%2BQWzv5jBqH0IgS9L3uS65VFRgXyUijLsnP6FxQTAKygeRw23F1iJa0hCa1iuA6dTkMMxER3749gmu%2BtZlcHP0L7HbppIIxRLk6hjMnnLkTvJhELBNXIYIBSk3waYXEdtbaYZwFDbz2Nxw8GMNNcpBzR4dnA0M97l8XfMAJsg9mqPYgURbIMhLfVvG%2Fz7cHSITIuGFJ5DeQiGnmIeA4nE%2Fk%2B5ypPVPti4824O5scjt1KpQgJwV8g8ANicnJ8qA0gdhxTm1DQCHO2CQRX02tu39H1sNev3oDFH26dSwHL0wrzIqklECgxdZsRZboclG45nYSEgimiSVi21SpwHCagj9gozf0cuglxv4VPdM2EF9IX1chvw8LU%2BScmR4zUHmSs3y%2B7M0dCSZ4yh%2F%2F7dQ5DSk%2BjW2cF10LI3P3xDQWWro%2B7WG47rPKv%2FA72M%2FJTAuwWeU%2FLfaDlnPYwtuwRZiFcxNZbw97lQq5oT6APR%2BRzfvpadNwGnhY%2Fz0uB6QiLEm9B2ha3kfWfe%2BXqhf1Od%2BX4TSpV0r%2BAXNZzQjA63hWsi3yNOLKDsJ5H41vsML7G3MEGOqUBD8vVO%2FuROlRyO7me2MmSozkabcO96zr9GyymmYnqy08jLDcCbVXjOjoJWbrhYf3RPih0bSfXkh2tYnOrXw28cbcsH93bCNNj7dg8s1uuJf3jLgbwyTw8jORi7J98dn3j%2Fv33vruPdNVLuZ1cKK7djlGwQX55nx%2F5vym1k%2FvxVV8WA3WQG4I9J3dlzXaHfT59VtSJOUGPSa5GTG1SwLWJs3iUhjBa&X-Amz-Signature=fc581f809c9d411e3d13242e49a6452409fc188a1bd4917290f181398e237f93&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRC3YNDJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOZmMwXAOcGZHVvhYvji1nRTtt8YOx40XTZylcngi4AAiEA5sp6aHjX9DoTcuxowgmf178sNdB%2FAo4DZcu1qTXGtEAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGfiI86RuRSiq05EzCrcA3iuJlCPTgzTnWT8zY33S71dsTehYom078GdjKaByh2i7oOmgblLi7aZXT1PAGCcwP95U%2BQWzv5jBqH0IgS9L3uS65VFRgXyUijLsnP6FxQTAKygeRw23F1iJa0hCa1iuA6dTkMMxER3749gmu%2BtZlcHP0L7HbppIIxRLk6hjMnnLkTvJhELBNXIYIBSk3waYXEdtbaYZwFDbz2Nxw8GMNNcpBzR4dnA0M97l8XfMAJsg9mqPYgURbIMhLfVvG%2Fz7cHSITIuGFJ5DeQiGnmIeA4nE%2Fk%2B5ypPVPti4824O5scjt1KpQgJwV8g8ANicnJ8qA0gdhxTm1DQCHO2CQRX02tu39H1sNev3oDFH26dSwHL0wrzIqklECgxdZsRZboclG45nYSEgimiSVi21SpwHCagj9gozf0cuglxv4VPdM2EF9IX1chvw8LU%2BScmR4zUHmSs3y%2B7M0dCSZ4yh%2F%2F7dQ5DSk%2BjW2cF10LI3P3xDQWWro%2B7WG47rPKv%2FA72M%2FJTAuwWeU%2FLfaDlnPYwtuwRZiFcxNZbw97lQq5oT6APR%2BRzfvpadNwGnhY%2Fz0uB6QiLEm9B2ha3kfWfe%2BXqhf1Od%2BX4TSpV0r%2BAXNZzQjA63hWsi3yNOLKDsJ5H41vsML7G3MEGOqUBD8vVO%2FuROlRyO7me2MmSozkabcO96zr9GyymmYnqy08jLDcCbVXjOjoJWbrhYf3RPih0bSfXkh2tYnOrXw28cbcsH93bCNNj7dg8s1uuJf3jLgbwyTw8jORi7J98dn3j%2Fv33vruPdNVLuZ1cKK7djlGwQX55nx%2F5vym1k%2FvxVV8WA3WQG4I9J3dlzXaHfT59VtSJOUGPSa5GTG1SwLWJs3iUhjBa&X-Amz-Signature=4207968ab73425936b2170a790ffe8047d3bb1c6410ee7b3574cae38eb46cfd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRC3YNDJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOZmMwXAOcGZHVvhYvji1nRTtt8YOx40XTZylcngi4AAiEA5sp6aHjX9DoTcuxowgmf178sNdB%2FAo4DZcu1qTXGtEAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGfiI86RuRSiq05EzCrcA3iuJlCPTgzTnWT8zY33S71dsTehYom078GdjKaByh2i7oOmgblLi7aZXT1PAGCcwP95U%2BQWzv5jBqH0IgS9L3uS65VFRgXyUijLsnP6FxQTAKygeRw23F1iJa0hCa1iuA6dTkMMxER3749gmu%2BtZlcHP0L7HbppIIxRLk6hjMnnLkTvJhELBNXIYIBSk3waYXEdtbaYZwFDbz2Nxw8GMNNcpBzR4dnA0M97l8XfMAJsg9mqPYgURbIMhLfVvG%2Fz7cHSITIuGFJ5DeQiGnmIeA4nE%2Fk%2B5ypPVPti4824O5scjt1KpQgJwV8g8ANicnJ8qA0gdhxTm1DQCHO2CQRX02tu39H1sNev3oDFH26dSwHL0wrzIqklECgxdZsRZboclG45nYSEgimiSVi21SpwHCagj9gozf0cuglxv4VPdM2EF9IX1chvw8LU%2BScmR4zUHmSs3y%2B7M0dCSZ4yh%2F%2F7dQ5DSk%2BjW2cF10LI3P3xDQWWro%2B7WG47rPKv%2FA72M%2FJTAuwWeU%2FLfaDlnPYwtuwRZiFcxNZbw97lQq5oT6APR%2BRzfvpadNwGnhY%2Fz0uB6QiLEm9B2ha3kfWfe%2BXqhf1Od%2BX4TSpV0r%2BAXNZzQjA63hWsi3yNOLKDsJ5H41vsML7G3MEGOqUBD8vVO%2FuROlRyO7me2MmSozkabcO96zr9GyymmYnqy08jLDcCbVXjOjoJWbrhYf3RPih0bSfXkh2tYnOrXw28cbcsH93bCNNj7dg8s1uuJf3jLgbwyTw8jORi7J98dn3j%2Fv33vruPdNVLuZ1cKK7djlGwQX55nx%2F5vym1k%2FvxVV8WA3WQG4I9J3dlzXaHfT59VtSJOUGPSa5GTG1SwLWJs3iUhjBa&X-Amz-Signature=0528c423cb37bc324081f52cf7cd8cb87c99ed77f72930c49e0e23a847d69822&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
