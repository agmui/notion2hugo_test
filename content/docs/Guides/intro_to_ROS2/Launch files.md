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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TBYF4Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4JlwXsj2COrOx2wqpiU6lQiFt72mWGVCfwOKxSXXcgIgIfzL8zA%2FaRT9TWqem5a1g4LuWpQ2eG19WO9slQc4n3oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFJ2tbfnty4i9ARCJyrcAy40CsyEo4tJaGsXVJ0oQiVbhi0vyQzZ56%2BwsQIxhy2942stavrxImIbw%2BqFuR7MO0nrJWq%2BbGJ4r8H24dfqpwWDvTNvb2YafZQlB4wsZ%2Bjy1P%2B6Tgs7lzgW1yn8vb5i4GyF3cNtrf%2B7XYJOw2KoVONDGfN8%2B%2FvTWhepmfK5tfygi9u%2Fib4%2Btl86NhxE7NrdAIbfS5iNHTcu%2FUiB5iV3d8tjwMpA%2BhQsrMXAIYfoWVBYt%2BR3j%2FR%2B6hFXQvyZR%2Fs%2BYl%2Fl27pMBfpAlhMtIJL8vEXItfHXeeJi%2BPXiXbImQ4PtlG9hJHaRgh1oHbRgQUWOgZSXhloCO%2F28Dk669X34NDpEch6qcsKCgD5MDTK7oW5AjqjfS6Zcj3%2B7d1HXafjeNhthPUx4lEkrFvUtK91FC9x3dGOxWw2mI7oouIEYk692yQcMLAQEZdgwMXRCgqEapyvPnkqk5krhNmibCtrrAHZoJ94EZLxKk9GtJ1%2BxrY9sK3S4wZN5BrqUCJXXu%2F3FhRjYP0Jfsd5sggTlZ2WD2Fa%2Fv0Mr%2B5z5fq8xt%2FLfOxiAjpwWLs0%2B3d2LiKDb%2Bq5VtewYttmO5%2FDi1O4HWM0BWOt%2BM9BY8QREu8dCWaiUVLYzGANB3y%2FuJCvtqERPML6eucQGOqUBSl%2FsH4HFJ7A9j5tIvUyR6MY6klTH5C9%2BIK3IPAxKsdA4f56KAgz8bjOMspJ0mmEDVS87h9NcHNAI2QTGHO7omqxRhDxTSnyc85hNxf1HxhVWQcjLnakACIDx7tWToKGVMN%2FSuEOcbYNY31hvM%2FNoVeN9K%2B13u03FyApkqRCQ7I5x31f7YfJc67dpPRYPnBX2JlYgzmotnZFK8iGQ5Lz5PbRdRLtX&X-Amz-Signature=b097a04109e716eb4fa8dbff6046fcf18c5225269e0ca0137f135bd90d5777a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TBYF4Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4JlwXsj2COrOx2wqpiU6lQiFt72mWGVCfwOKxSXXcgIgIfzL8zA%2FaRT9TWqem5a1g4LuWpQ2eG19WO9slQc4n3oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFJ2tbfnty4i9ARCJyrcAy40CsyEo4tJaGsXVJ0oQiVbhi0vyQzZ56%2BwsQIxhy2942stavrxImIbw%2BqFuR7MO0nrJWq%2BbGJ4r8H24dfqpwWDvTNvb2YafZQlB4wsZ%2Bjy1P%2B6Tgs7lzgW1yn8vb5i4GyF3cNtrf%2B7XYJOw2KoVONDGfN8%2B%2FvTWhepmfK5tfygi9u%2Fib4%2Btl86NhxE7NrdAIbfS5iNHTcu%2FUiB5iV3d8tjwMpA%2BhQsrMXAIYfoWVBYt%2BR3j%2FR%2B6hFXQvyZR%2Fs%2BYl%2Fl27pMBfpAlhMtIJL8vEXItfHXeeJi%2BPXiXbImQ4PtlG9hJHaRgh1oHbRgQUWOgZSXhloCO%2F28Dk669X34NDpEch6qcsKCgD5MDTK7oW5AjqjfS6Zcj3%2B7d1HXafjeNhthPUx4lEkrFvUtK91FC9x3dGOxWw2mI7oouIEYk692yQcMLAQEZdgwMXRCgqEapyvPnkqk5krhNmibCtrrAHZoJ94EZLxKk9GtJ1%2BxrY9sK3S4wZN5BrqUCJXXu%2F3FhRjYP0Jfsd5sggTlZ2WD2Fa%2Fv0Mr%2B5z5fq8xt%2FLfOxiAjpwWLs0%2B3d2LiKDb%2Bq5VtewYttmO5%2FDi1O4HWM0BWOt%2BM9BY8QREu8dCWaiUVLYzGANB3y%2FuJCvtqERPML6eucQGOqUBSl%2FsH4HFJ7A9j5tIvUyR6MY6klTH5C9%2BIK3IPAxKsdA4f56KAgz8bjOMspJ0mmEDVS87h9NcHNAI2QTGHO7omqxRhDxTSnyc85hNxf1HxhVWQcjLnakACIDx7tWToKGVMN%2FSuEOcbYNY31hvM%2FNoVeN9K%2B13u03FyApkqRCQ7I5x31f7YfJc67dpPRYPnBX2JlYgzmotnZFK8iGQ5Lz5PbRdRLtX&X-Amz-Signature=fc628ef85c972329406bbd6c0f2c7509cadcd2e6034e39ac784f3df9c6511aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TBYF4Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4JlwXsj2COrOx2wqpiU6lQiFt72mWGVCfwOKxSXXcgIgIfzL8zA%2FaRT9TWqem5a1g4LuWpQ2eG19WO9slQc4n3oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFJ2tbfnty4i9ARCJyrcAy40CsyEo4tJaGsXVJ0oQiVbhi0vyQzZ56%2BwsQIxhy2942stavrxImIbw%2BqFuR7MO0nrJWq%2BbGJ4r8H24dfqpwWDvTNvb2YafZQlB4wsZ%2Bjy1P%2B6Tgs7lzgW1yn8vb5i4GyF3cNtrf%2B7XYJOw2KoVONDGfN8%2B%2FvTWhepmfK5tfygi9u%2Fib4%2Btl86NhxE7NrdAIbfS5iNHTcu%2FUiB5iV3d8tjwMpA%2BhQsrMXAIYfoWVBYt%2BR3j%2FR%2B6hFXQvyZR%2Fs%2BYl%2Fl27pMBfpAlhMtIJL8vEXItfHXeeJi%2BPXiXbImQ4PtlG9hJHaRgh1oHbRgQUWOgZSXhloCO%2F28Dk669X34NDpEch6qcsKCgD5MDTK7oW5AjqjfS6Zcj3%2B7d1HXafjeNhthPUx4lEkrFvUtK91FC9x3dGOxWw2mI7oouIEYk692yQcMLAQEZdgwMXRCgqEapyvPnkqk5krhNmibCtrrAHZoJ94EZLxKk9GtJ1%2BxrY9sK3S4wZN5BrqUCJXXu%2F3FhRjYP0Jfsd5sggTlZ2WD2Fa%2Fv0Mr%2B5z5fq8xt%2FLfOxiAjpwWLs0%2B3d2LiKDb%2Bq5VtewYttmO5%2FDi1O4HWM0BWOt%2BM9BY8QREu8dCWaiUVLYzGANB3y%2FuJCvtqERPML6eucQGOqUBSl%2FsH4HFJ7A9j5tIvUyR6MY6klTH5C9%2BIK3IPAxKsdA4f56KAgz8bjOMspJ0mmEDVS87h9NcHNAI2QTGHO7omqxRhDxTSnyc85hNxf1HxhVWQcjLnakACIDx7tWToKGVMN%2FSuEOcbYNY31hvM%2FNoVeN9K%2B13u03FyApkqRCQ7I5x31f7YfJc67dpPRYPnBX2JlYgzmotnZFK8iGQ5Lz5PbRdRLtX&X-Amz-Signature=ce813a2131fdd49bb396316b2b0d9b85a8ebd9e42ff39c5147c41b372a072abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
