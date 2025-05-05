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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UYY4ID%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwHEaKpBvzLZwWWZXe5gWlEcpD8naO5VFpdv8oxM0zfAiAuvAlOhye0%2BxcB7EoyVaFSkfgtBnqQ515LNMQD%2BWACFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMBYG7oP5RMC8Klox2KtwDtqZ1E6ZE4zOCrCbv0N8jpghy4UaImQON9Kpjvf%2BWwLzqaxxdsoy%2Bf1%2BUOQZYwjZPlxAwUtnqvrK3Sswz8IqXXKR%2FA9dILnaGd9AbS0oSywzO2XK%2FcHKuPCsIevyflz4R60LWlC6Zxq2L5kk04smiT7E2NPcZTk5LQhrY9AuEtt896Epu4KFyL75LjeVmczME%2Bjya%2BX1GV%2B89e1Xb%2Fk57sXrKlA0LMaHMY0zJcvhjvh4%2FwAA9htgecMUQtOn4j0FE4Q0scQNf7oycehlxBBnbv3yNTQIv87v28KTkVO7JVdLi4c3n4uWBn1Fbms5cXCfW6d1btXUT5CzJk0WYJ%2BkgqWYP7Jode0KOYjmdOJE480W%2F%2BfPmf4YukZ5z5GNayyRTfcq2i9T6hV7qzdwmE%2FRFp0U84O8Wq6nJd5czsHHNwL2rWfxqRtOYuHHvUmIl1O671ikx6jNffAdytfriXP%2BKAOf9cI72FiTInMTesSOnRrY9SQFIa1e2nUACy%2BrbKecjGJZTk4H4SGO8ph2NpX2Avy6cinh8zwjEzlKpYNPnLAMOJH%2BxnFVl4nl3rc%2FQNafrIYqEJhpVHCLTvFmpNoJD7cX8BujpPVgLy3dlTpwZHRtX56JP89fJj36X%2Brkwr%2BXiwAY6pgG2NJ6Ad9arXKk%2Fsx4j%2F3fBZqdMdh9tTTsy0Z6wjPfNNKTnKA4EaF5q2mJHe%2BnkdHFwYiWaL66T8CkUbWzCbhK5IDbQHM%2F9ebjQTqaA26CuQozFk0AIbxcLXUJkxLd1Pvq7bvZMxrwJOOsxObFQHOH453TWSUrQgyWCq%2BykI3ctrc5dtRl5iYEcDLEo2Uxgk9dGpF7WZtRJ%2FPmpa19ClXyc%2BSD1KYjm&X-Amz-Signature=785dbba4af63df03db773953737cf90794934f113d35ce58b18cd9a91d881192&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UYY4ID%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwHEaKpBvzLZwWWZXe5gWlEcpD8naO5VFpdv8oxM0zfAiAuvAlOhye0%2BxcB7EoyVaFSkfgtBnqQ515LNMQD%2BWACFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMBYG7oP5RMC8Klox2KtwDtqZ1E6ZE4zOCrCbv0N8jpghy4UaImQON9Kpjvf%2BWwLzqaxxdsoy%2Bf1%2BUOQZYwjZPlxAwUtnqvrK3Sswz8IqXXKR%2FA9dILnaGd9AbS0oSywzO2XK%2FcHKuPCsIevyflz4R60LWlC6Zxq2L5kk04smiT7E2NPcZTk5LQhrY9AuEtt896Epu4KFyL75LjeVmczME%2Bjya%2BX1GV%2B89e1Xb%2Fk57sXrKlA0LMaHMY0zJcvhjvh4%2FwAA9htgecMUQtOn4j0FE4Q0scQNf7oycehlxBBnbv3yNTQIv87v28KTkVO7JVdLi4c3n4uWBn1Fbms5cXCfW6d1btXUT5CzJk0WYJ%2BkgqWYP7Jode0KOYjmdOJE480W%2F%2BfPmf4YukZ5z5GNayyRTfcq2i9T6hV7qzdwmE%2FRFp0U84O8Wq6nJd5czsHHNwL2rWfxqRtOYuHHvUmIl1O671ikx6jNffAdytfriXP%2BKAOf9cI72FiTInMTesSOnRrY9SQFIa1e2nUACy%2BrbKecjGJZTk4H4SGO8ph2NpX2Avy6cinh8zwjEzlKpYNPnLAMOJH%2BxnFVl4nl3rc%2FQNafrIYqEJhpVHCLTvFmpNoJD7cX8BujpPVgLy3dlTpwZHRtX56JP89fJj36X%2Brkwr%2BXiwAY6pgG2NJ6Ad9arXKk%2Fsx4j%2F3fBZqdMdh9tTTsy0Z6wjPfNNKTnKA4EaF5q2mJHe%2BnkdHFwYiWaL66T8CkUbWzCbhK5IDbQHM%2F9ebjQTqaA26CuQozFk0AIbxcLXUJkxLd1Pvq7bvZMxrwJOOsxObFQHOH453TWSUrQgyWCq%2BykI3ctrc5dtRl5iYEcDLEo2Uxgk9dGpF7WZtRJ%2FPmpa19ClXyc%2BSD1KYjm&X-Amz-Signature=ff3f8a736b248faf22158081cf201f7512e6a105326f7f9de350035ad28a7fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UYY4ID%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwHEaKpBvzLZwWWZXe5gWlEcpD8naO5VFpdv8oxM0zfAiAuvAlOhye0%2BxcB7EoyVaFSkfgtBnqQ515LNMQD%2BWACFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMBYG7oP5RMC8Klox2KtwDtqZ1E6ZE4zOCrCbv0N8jpghy4UaImQON9Kpjvf%2BWwLzqaxxdsoy%2Bf1%2BUOQZYwjZPlxAwUtnqvrK3Sswz8IqXXKR%2FA9dILnaGd9AbS0oSywzO2XK%2FcHKuPCsIevyflz4R60LWlC6Zxq2L5kk04smiT7E2NPcZTk5LQhrY9AuEtt896Epu4KFyL75LjeVmczME%2Bjya%2BX1GV%2B89e1Xb%2Fk57sXrKlA0LMaHMY0zJcvhjvh4%2FwAA9htgecMUQtOn4j0FE4Q0scQNf7oycehlxBBnbv3yNTQIv87v28KTkVO7JVdLi4c3n4uWBn1Fbms5cXCfW6d1btXUT5CzJk0WYJ%2BkgqWYP7Jode0KOYjmdOJE480W%2F%2BfPmf4YukZ5z5GNayyRTfcq2i9T6hV7qzdwmE%2FRFp0U84O8Wq6nJd5czsHHNwL2rWfxqRtOYuHHvUmIl1O671ikx6jNffAdytfriXP%2BKAOf9cI72FiTInMTesSOnRrY9SQFIa1e2nUACy%2BrbKecjGJZTk4H4SGO8ph2NpX2Avy6cinh8zwjEzlKpYNPnLAMOJH%2BxnFVl4nl3rc%2FQNafrIYqEJhpVHCLTvFmpNoJD7cX8BujpPVgLy3dlTpwZHRtX56JP89fJj36X%2Brkwr%2BXiwAY6pgG2NJ6Ad9arXKk%2Fsx4j%2F3fBZqdMdh9tTTsy0Z6wjPfNNKTnKA4EaF5q2mJHe%2BnkdHFwYiWaL66T8CkUbWzCbhK5IDbQHM%2F9ebjQTqaA26CuQozFk0AIbxcLXUJkxLd1Pvq7bvZMxrwJOOsxObFQHOH453TWSUrQgyWCq%2BykI3ctrc5dtRl5iYEcDLEo2Uxgk9dGpF7WZtRJ%2FPmpa19ClXyc%2BSD1KYjm&X-Amz-Signature=ce3dc6fc711dc73e4b7f2cfdfe5111bba3ad2a5e837738dc40ec8204ff5350b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
