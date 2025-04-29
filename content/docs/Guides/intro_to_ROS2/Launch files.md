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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3D2JGG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMqwkQju7dGtweoLuW6Kf1mFVL5duj3txfVxgLWkeGYAIgGQeUCP2nvyU5q5Ig6iVAjUzVd1aYiUSTerMfQTjgMhUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnkp%2F2%2FCXDlVNgwACrcA6d3S%2B459M4UKLwagm82tA3MOjKx%2FrhfRjFzbiocnvyPefKrQ6qwRu0H%2B2naJz3OoZpFY4LsPlH3rXPY9YwYQJ6nSs3cXhJt%2FH9NWhOkgOFxYnSXtes24Feoi9ohqYpE8DLwcIskvRs0sj45sYzRka6XBDLI2JVQMJa6Ydz7%2Fj0Uz30u4EQa%2Bz8%2FYIOzxqCgKLXzHC4ZZtMyCQpy7VACgW1xDpl7Gvq0VEW%2BR6cI0dAMYO7LLc78jKiHEaDzaxMWwDY51PlhA%2B1ZFMW78DTTineOBcrlsPEsxIVvEvXhWH%2FQGm7IagGTeeh%2BpQpxnTRTwbJWoyCYXNHSSF2jpzxd0sUjExFrzHkag4UN44IDgxDIYCvSkwjjyyCsjACZi9wnJO11ThVU6IxRguB%2B5ew4TEPWhbfc27Opl7TjhL0PIr804flWO5hFEH7kbnKVUxIqcKlraI%2BtyitiWTyfcfWPMpEz4%2FvRpHHwxp3ZM2kd3O%2BgnLpsYP42AAK7bkU1r6Pe6rQJ9NSAq23LZP1hGGhL4WEvrtN7XYVrsyokY3b7JSIGGf568D08Yt1jIh1itg4V4waEetdlGkzcLYJ%2Bhh7PHM30OiQXtlQa8%2FjfeKLOa8QyOMFSX1uwcZ8bzdRFMPC%2BwMAGOqUBZ3L9bDjENeBO%2B2SN0cobwA09x7WVKOuplwcfxPSfWRVDpPvQofYWPnCclKdZnVcUWR5iekmY9II3Jo8U0ezjPo4WxrRg%2B2RoA1q02mhuWTbIIrt5AyeiGhyQAsP6U1lWudzWyI9aGkGTArw3q2J84uh8VRoJSzLbdEK27AlfIsF0F%2F8zgN7%2F2OJ%2BMFdzb1VqR%2FxeURL2EOpa5rmwW7o2vWzeWvh%2B&X-Amz-Signature=ed5ca3d458b4d3da23254efc346c4e1a191930fb207f94ada6d60615665a972a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3D2JGG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMqwkQju7dGtweoLuW6Kf1mFVL5duj3txfVxgLWkeGYAIgGQeUCP2nvyU5q5Ig6iVAjUzVd1aYiUSTerMfQTjgMhUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnkp%2F2%2FCXDlVNgwACrcA6d3S%2B459M4UKLwagm82tA3MOjKx%2FrhfRjFzbiocnvyPefKrQ6qwRu0H%2B2naJz3OoZpFY4LsPlH3rXPY9YwYQJ6nSs3cXhJt%2FH9NWhOkgOFxYnSXtes24Feoi9ohqYpE8DLwcIskvRs0sj45sYzRka6XBDLI2JVQMJa6Ydz7%2Fj0Uz30u4EQa%2Bz8%2FYIOzxqCgKLXzHC4ZZtMyCQpy7VACgW1xDpl7Gvq0VEW%2BR6cI0dAMYO7LLc78jKiHEaDzaxMWwDY51PlhA%2B1ZFMW78DTTineOBcrlsPEsxIVvEvXhWH%2FQGm7IagGTeeh%2BpQpxnTRTwbJWoyCYXNHSSF2jpzxd0sUjExFrzHkag4UN44IDgxDIYCvSkwjjyyCsjACZi9wnJO11ThVU6IxRguB%2B5ew4TEPWhbfc27Opl7TjhL0PIr804flWO5hFEH7kbnKVUxIqcKlraI%2BtyitiWTyfcfWPMpEz4%2FvRpHHwxp3ZM2kd3O%2BgnLpsYP42AAK7bkU1r6Pe6rQJ9NSAq23LZP1hGGhL4WEvrtN7XYVrsyokY3b7JSIGGf568D08Yt1jIh1itg4V4waEetdlGkzcLYJ%2Bhh7PHM30OiQXtlQa8%2FjfeKLOa8QyOMFSX1uwcZ8bzdRFMPC%2BwMAGOqUBZ3L9bDjENeBO%2B2SN0cobwA09x7WVKOuplwcfxPSfWRVDpPvQofYWPnCclKdZnVcUWR5iekmY9II3Jo8U0ezjPo4WxrRg%2B2RoA1q02mhuWTbIIrt5AyeiGhyQAsP6U1lWudzWyI9aGkGTArw3q2J84uh8VRoJSzLbdEK27AlfIsF0F%2F8zgN7%2F2OJ%2BMFdzb1VqR%2FxeURL2EOpa5rmwW7o2vWzeWvh%2B&X-Amz-Signature=9ef843549128041320154d2e17583909ecb7862210d9799b8666f7eeb35de47f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3D2JGG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMqwkQju7dGtweoLuW6Kf1mFVL5duj3txfVxgLWkeGYAIgGQeUCP2nvyU5q5Ig6iVAjUzVd1aYiUSTerMfQTjgMhUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnkp%2F2%2FCXDlVNgwACrcA6d3S%2B459M4UKLwagm82tA3MOjKx%2FrhfRjFzbiocnvyPefKrQ6qwRu0H%2B2naJz3OoZpFY4LsPlH3rXPY9YwYQJ6nSs3cXhJt%2FH9NWhOkgOFxYnSXtes24Feoi9ohqYpE8DLwcIskvRs0sj45sYzRka6XBDLI2JVQMJa6Ydz7%2Fj0Uz30u4EQa%2Bz8%2FYIOzxqCgKLXzHC4ZZtMyCQpy7VACgW1xDpl7Gvq0VEW%2BR6cI0dAMYO7LLc78jKiHEaDzaxMWwDY51PlhA%2B1ZFMW78DTTineOBcrlsPEsxIVvEvXhWH%2FQGm7IagGTeeh%2BpQpxnTRTwbJWoyCYXNHSSF2jpzxd0sUjExFrzHkag4UN44IDgxDIYCvSkwjjyyCsjACZi9wnJO11ThVU6IxRguB%2B5ew4TEPWhbfc27Opl7TjhL0PIr804flWO5hFEH7kbnKVUxIqcKlraI%2BtyitiWTyfcfWPMpEz4%2FvRpHHwxp3ZM2kd3O%2BgnLpsYP42AAK7bkU1r6Pe6rQJ9NSAq23LZP1hGGhL4WEvrtN7XYVrsyokY3b7JSIGGf568D08Yt1jIh1itg4V4waEetdlGkzcLYJ%2Bhh7PHM30OiQXtlQa8%2FjfeKLOa8QyOMFSX1uwcZ8bzdRFMPC%2BwMAGOqUBZ3L9bDjENeBO%2B2SN0cobwA09x7WVKOuplwcfxPSfWRVDpPvQofYWPnCclKdZnVcUWR5iekmY9II3Jo8U0ezjPo4WxrRg%2B2RoA1q02mhuWTbIIrt5AyeiGhyQAsP6U1lWudzWyI9aGkGTArw3q2J84uh8VRoJSzLbdEK27AlfIsF0F%2F8zgN7%2F2OJ%2BMFdzb1VqR%2FxeURL2EOpa5rmwW7o2vWzeWvh%2B&X-Amz-Signature=392fd94e00e5813dbe8308acaad9fbf6ee2d6019e7f1b0fbfceae6a18c908fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
