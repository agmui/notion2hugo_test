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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJTLCH6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCBYIPd32JyVvNoq1TYaKQIxXHJI8DAzof%2FiOQQ2%2BTi3AIgHuwoB%2BRRhPRbDFB2VVuF6mxIMqKBc6TjNcic%2BV1%2FCUsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPmKyDjdqVk%2B7lh6rircA%2FMUCtLckR4Me1BfnfFDNZ%2FYXPw1Unv0hrGEYJClmLk8F8p7Js29vlr65YL1iYHKcjx4YH3DxnAkp7JynqoWNYi%2BkmbgsHvCOmbkt017pwqRAfwYyrnndyjmILCqeohQylHo1x26pT56m9s1GdsgN9wm0JBeLsaQiUZR2ygoCd2H0%2Fi3%2F6J3r5CkP%2FPqWIKh3Na0JPT08i6H4bkSaNONmV8ONzbKQm5ON9R9rHMRighvL6%2F0FiqSQqoT6LG65NJrXEQyrEbxYQlFdhSps%2FRACiw0hggVcq6mqqvRduvfh1wR8ITAxILEUo9t6yk7cbKyw6OMvnoUSuS0ce0bbWJLf2ll%2B8Qq70RULeR8hMFY3fte%2FVpz9MQC8T8douMzsPV93u5rm8iW%2F3ad%2BcGfK7YcGfTjnRMHw%2Bw4A9spmRl%2BwsNh4%2FZhraJ3u7QitvVIbRG0BJYMPtzbzo9qPPxkr%2FkOA8dVnzqy76PASRy8zMbzvrzt6nZkYJs1nAjFffaXLh7d2jWXqffkQDj9ZS7VSv0rOEoZuSLZms%2FlKIha5X408qfLhHPCaW6rOaldWRSD6YYIPJt01ONJzrpTjGuJNDMMu6cdY99GA8SUW%2FGq1jB8U6675ergkh1%2BeEQcgcvuMIDMyMQGOqUBuYi%2B0fFj7qEK5%2FubHd1SPRhUccM5HekiGOk184RJeharm%2BKh2kUpncukmsZDv6AFVtt%2BNVBXb3gQdGUDjC5Eb2SI58wMSYHl3VpDoR5lzql%2BkpU8KGV%2FlaNdboIanQn6wbhC9Sainc494xz7XnkFcc68e3XXKhl4T2E5nap26L5ladp8B%2BGG%2FQXhKC2XJh3a98h83dKj1XIAtW9qKEbmIDF5X0i8&X-Amz-Signature=ccef8bead2ca4eccc4afa0da2e2d4c3dde6a0803d54bfaeb09876ba19b570e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJTLCH6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCBYIPd32JyVvNoq1TYaKQIxXHJI8DAzof%2FiOQQ2%2BTi3AIgHuwoB%2BRRhPRbDFB2VVuF6mxIMqKBc6TjNcic%2BV1%2FCUsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPmKyDjdqVk%2B7lh6rircA%2FMUCtLckR4Me1BfnfFDNZ%2FYXPw1Unv0hrGEYJClmLk8F8p7Js29vlr65YL1iYHKcjx4YH3DxnAkp7JynqoWNYi%2BkmbgsHvCOmbkt017pwqRAfwYyrnndyjmILCqeohQylHo1x26pT56m9s1GdsgN9wm0JBeLsaQiUZR2ygoCd2H0%2Fi3%2F6J3r5CkP%2FPqWIKh3Na0JPT08i6H4bkSaNONmV8ONzbKQm5ON9R9rHMRighvL6%2F0FiqSQqoT6LG65NJrXEQyrEbxYQlFdhSps%2FRACiw0hggVcq6mqqvRduvfh1wR8ITAxILEUo9t6yk7cbKyw6OMvnoUSuS0ce0bbWJLf2ll%2B8Qq70RULeR8hMFY3fte%2FVpz9MQC8T8douMzsPV93u5rm8iW%2F3ad%2BcGfK7YcGfTjnRMHw%2Bw4A9spmRl%2BwsNh4%2FZhraJ3u7QitvVIbRG0BJYMPtzbzo9qPPxkr%2FkOA8dVnzqy76PASRy8zMbzvrzt6nZkYJs1nAjFffaXLh7d2jWXqffkQDj9ZS7VSv0rOEoZuSLZms%2FlKIha5X408qfLhHPCaW6rOaldWRSD6YYIPJt01ONJzrpTjGuJNDMMu6cdY99GA8SUW%2FGq1jB8U6675ergkh1%2BeEQcgcvuMIDMyMQGOqUBuYi%2B0fFj7qEK5%2FubHd1SPRhUccM5HekiGOk184RJeharm%2BKh2kUpncukmsZDv6AFVtt%2BNVBXb3gQdGUDjC5Eb2SI58wMSYHl3VpDoR5lzql%2BkpU8KGV%2FlaNdboIanQn6wbhC9Sainc494xz7XnkFcc68e3XXKhl4T2E5nap26L5ladp8B%2BGG%2FQXhKC2XJh3a98h83dKj1XIAtW9qKEbmIDF5X0i8&X-Amz-Signature=d6149714dcac251a8b6eddc2335d1cf65dffb49686d4ebb4bd221efbb81d0809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJTLCH6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCBYIPd32JyVvNoq1TYaKQIxXHJI8DAzof%2FiOQQ2%2BTi3AIgHuwoB%2BRRhPRbDFB2VVuF6mxIMqKBc6TjNcic%2BV1%2FCUsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPmKyDjdqVk%2B7lh6rircA%2FMUCtLckR4Me1BfnfFDNZ%2FYXPw1Unv0hrGEYJClmLk8F8p7Js29vlr65YL1iYHKcjx4YH3DxnAkp7JynqoWNYi%2BkmbgsHvCOmbkt017pwqRAfwYyrnndyjmILCqeohQylHo1x26pT56m9s1GdsgN9wm0JBeLsaQiUZR2ygoCd2H0%2Fi3%2F6J3r5CkP%2FPqWIKh3Na0JPT08i6H4bkSaNONmV8ONzbKQm5ON9R9rHMRighvL6%2F0FiqSQqoT6LG65NJrXEQyrEbxYQlFdhSps%2FRACiw0hggVcq6mqqvRduvfh1wR8ITAxILEUo9t6yk7cbKyw6OMvnoUSuS0ce0bbWJLf2ll%2B8Qq70RULeR8hMFY3fte%2FVpz9MQC8T8douMzsPV93u5rm8iW%2F3ad%2BcGfK7YcGfTjnRMHw%2Bw4A9spmRl%2BwsNh4%2FZhraJ3u7QitvVIbRG0BJYMPtzbzo9qPPxkr%2FkOA8dVnzqy76PASRy8zMbzvrzt6nZkYJs1nAjFffaXLh7d2jWXqffkQDj9ZS7VSv0rOEoZuSLZms%2FlKIha5X408qfLhHPCaW6rOaldWRSD6YYIPJt01ONJzrpTjGuJNDMMu6cdY99GA8SUW%2FGq1jB8U6675ergkh1%2BeEQcgcvuMIDMyMQGOqUBuYi%2B0fFj7qEK5%2FubHd1SPRhUccM5HekiGOk184RJeharm%2BKh2kUpncukmsZDv6AFVtt%2BNVBXb3gQdGUDjC5Eb2SI58wMSYHl3VpDoR5lzql%2BkpU8KGV%2FlaNdboIanQn6wbhC9Sainc494xz7XnkFcc68e3XXKhl4T2E5nap26L5ladp8B%2BGG%2FQXhKC2XJh3a98h83dKj1XIAtW9qKEbmIDF5X0i8&X-Amz-Signature=2be5e587d5faf198421311f93c3bd6affcad71ea9468aa7ad986fc1ea3c0daa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
