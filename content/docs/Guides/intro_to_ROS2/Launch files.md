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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673DA6DDJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VLuCQdPfBSgNtQKY296THvzzA070dJxWy2rSfpKtiQIhAPF9i0VKAxSh5zu2rbMzxBVDgtw1EP%2BImZgLIsh4Vs1lKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvbjiZPyENG5bDWcq3AMD7UAsFEexaHVpGqfZteUs07XNc3QQ8VhghdtnIL%2FKn%2F1jFjOUoTPQR6dBKHP2%2FoMZ3Ir0Zoe8Xl7Z05Wb%2BocYgRpts2p8IyThZ0CVXEjEOMFLsv5MCmLE6ltSrUWDCtwrLk55NOO3fBY%2FKuRSD2f2yr5abtnLo%2FlryvrxX5vlOH470t8cWtFh0K%2FBaBBvPGVy73zTJw%2FnXd3AZSNc57ejB5L0ZUNuK60157ZSOJR7aOc1iDgfl9V25HHEmYwW3Za99iPDZPZuIROiNrd716DLqf3jWh%2F4kB0x8NrdjuNpzcnXXzGJPoarMcFcO7TiOJ3y5HN31diqbBVyBmmnsPwq1PwS4ARuAbOspTMXpGyDFMVvsh0m68KDyhigKxJa9F9g0NHpeKrI5EHG9UxclmCaTHtwccqjazIKrAeY52%2F4oL0XGc9Q0%2BnOUTazYHqB6MgiyHBDbwAK%2F7FgyFBrVQD1hbWTAbJacK0ih7lmA22f3DYVTHa3C0A8ESSBWThXtK4THLcCrqZqNnPvyn5PPHwt2OZPRgbT2%2B3SWH7VUCL8NP1kO8aBCtMZau6%2BzCnEV6zCnUOPmRH4VkP7clHvfd565gztjEMPRiPht3XtePg6jwGCC8Ot3QtwicMp0TDeqL%2FDBjqkAfOx7PiES48RzvSeTaSZVUgSW18QagWkV87Oo595upN97jmz%2F6Awl0PsIewgmNzvVs6gmbyA8slOyjH2wogcUaFgI9tN86CFQHFd2rlh2fID%2FDX4CFYqs4v9AzI4JV4EnACM0eZz%2BzVuy9EEnSKfd%2BMu1CIezGKC%2F5aKKhQiQwkThNsygahhSKnQUMZDaT8my4uMvSUkiP3t5Jba2s25EcUUB5L8&X-Amz-Signature=24b3fdada4273fc18d9a919431140f7119840cc8f0bd7239eb9efbf201214fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673DA6DDJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VLuCQdPfBSgNtQKY296THvzzA070dJxWy2rSfpKtiQIhAPF9i0VKAxSh5zu2rbMzxBVDgtw1EP%2BImZgLIsh4Vs1lKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvbjiZPyENG5bDWcq3AMD7UAsFEexaHVpGqfZteUs07XNc3QQ8VhghdtnIL%2FKn%2F1jFjOUoTPQR6dBKHP2%2FoMZ3Ir0Zoe8Xl7Z05Wb%2BocYgRpts2p8IyThZ0CVXEjEOMFLsv5MCmLE6ltSrUWDCtwrLk55NOO3fBY%2FKuRSD2f2yr5abtnLo%2FlryvrxX5vlOH470t8cWtFh0K%2FBaBBvPGVy73zTJw%2FnXd3AZSNc57ejB5L0ZUNuK60157ZSOJR7aOc1iDgfl9V25HHEmYwW3Za99iPDZPZuIROiNrd716DLqf3jWh%2F4kB0x8NrdjuNpzcnXXzGJPoarMcFcO7TiOJ3y5HN31diqbBVyBmmnsPwq1PwS4ARuAbOspTMXpGyDFMVvsh0m68KDyhigKxJa9F9g0NHpeKrI5EHG9UxclmCaTHtwccqjazIKrAeY52%2F4oL0XGc9Q0%2BnOUTazYHqB6MgiyHBDbwAK%2F7FgyFBrVQD1hbWTAbJacK0ih7lmA22f3DYVTHa3C0A8ESSBWThXtK4THLcCrqZqNnPvyn5PPHwt2OZPRgbT2%2B3SWH7VUCL8NP1kO8aBCtMZau6%2BzCnEV6zCnUOPmRH4VkP7clHvfd565gztjEMPRiPht3XtePg6jwGCC8Ot3QtwicMp0TDeqL%2FDBjqkAfOx7PiES48RzvSeTaSZVUgSW18QagWkV87Oo595upN97jmz%2F6Awl0PsIewgmNzvVs6gmbyA8slOyjH2wogcUaFgI9tN86CFQHFd2rlh2fID%2FDX4CFYqs4v9AzI4JV4EnACM0eZz%2BzVuy9EEnSKfd%2BMu1CIezGKC%2F5aKKhQiQwkThNsygahhSKnQUMZDaT8my4uMvSUkiP3t5Jba2s25EcUUB5L8&X-Amz-Signature=50897f7c703e352903f0bf0f34267522bfcf8083428701629579f1a8164a4a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673DA6DDJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VLuCQdPfBSgNtQKY296THvzzA070dJxWy2rSfpKtiQIhAPF9i0VKAxSh5zu2rbMzxBVDgtw1EP%2BImZgLIsh4Vs1lKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvbjiZPyENG5bDWcq3AMD7UAsFEexaHVpGqfZteUs07XNc3QQ8VhghdtnIL%2FKn%2F1jFjOUoTPQR6dBKHP2%2FoMZ3Ir0Zoe8Xl7Z05Wb%2BocYgRpts2p8IyThZ0CVXEjEOMFLsv5MCmLE6ltSrUWDCtwrLk55NOO3fBY%2FKuRSD2f2yr5abtnLo%2FlryvrxX5vlOH470t8cWtFh0K%2FBaBBvPGVy73zTJw%2FnXd3AZSNc57ejB5L0ZUNuK60157ZSOJR7aOc1iDgfl9V25HHEmYwW3Za99iPDZPZuIROiNrd716DLqf3jWh%2F4kB0x8NrdjuNpzcnXXzGJPoarMcFcO7TiOJ3y5HN31diqbBVyBmmnsPwq1PwS4ARuAbOspTMXpGyDFMVvsh0m68KDyhigKxJa9F9g0NHpeKrI5EHG9UxclmCaTHtwccqjazIKrAeY52%2F4oL0XGc9Q0%2BnOUTazYHqB6MgiyHBDbwAK%2F7FgyFBrVQD1hbWTAbJacK0ih7lmA22f3DYVTHa3C0A8ESSBWThXtK4THLcCrqZqNnPvyn5PPHwt2OZPRgbT2%2B3SWH7VUCL8NP1kO8aBCtMZau6%2BzCnEV6zCnUOPmRH4VkP7clHvfd565gztjEMPRiPht3XtePg6jwGCC8Ot3QtwicMp0TDeqL%2FDBjqkAfOx7PiES48RzvSeTaSZVUgSW18QagWkV87Oo595upN97jmz%2F6Awl0PsIewgmNzvVs6gmbyA8slOyjH2wogcUaFgI9tN86CFQHFd2rlh2fID%2FDX4CFYqs4v9AzI4JV4EnACM0eZz%2BzVuy9EEnSKfd%2BMu1CIezGKC%2F5aKKhQiQwkThNsygahhSKnQUMZDaT8my4uMvSUkiP3t5Jba2s25EcUUB5L8&X-Amz-Signature=ca0f1097cd751f67f75b56e079b25c9c4bb1f9549b4bf0dc0267b01ff5142298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
