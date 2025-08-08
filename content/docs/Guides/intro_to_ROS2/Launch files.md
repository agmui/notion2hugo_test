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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KY3Z3P%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHOUkS1yfe2pG6Piz9WYeO9E5a2RV13PNPLMb3eO2PlyAiEA1gta%2FJDoR1Yjjeq8E9RqKqTVSD1O3GDPJSjfHl0CS%2B0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX6y47GeTyqZon2TSrcA8H9ySuOgR9J%2Fs%2B0abw4dhNc6tdGsj%2FZha%2BZtUanikd9S6ctmxm3rUiXf3qlVOkpXhTCNWjNwzTGpvctCKtLvJogiUgEh5p5RlrfnvxDB%2FNUyaH9YI3z%2BbFbyv1T%2FzCy39rJuhNBO2mMxkj4%2BWtszh7qitPcxuIMhHovgkJ2l5aQ9p7l5yFLw%2F8KCSZVeYNOIIkF9JXG8mRtH6zfoy8L0tOFB1gKGyVi8%2BMgX9SflBgJit5xLVihBXuzWIdCjOB8GMI8bUA65eWWdG%2FguPlRUTDXBE8xHQCPVL2QzjYiqorSLcBaccEKa4kCSVcXjzhAjAHQkaDgPadXrav4TDrVmfxLL0RXk81eIsElj6qtJEbymMpGj0Fm%2F3KhR%2Bh5cYJSp8AdDyS%2B3JtvvKj8AToq2FWxRzrR6brMHhOE7GDPQ8AfYH7SVddjuJKa7FA0v%2FICLbTLQeXEaWQul%2FpmWHSuS5C4J57LXE8XYZQ%2BNqdG%2F6jNBb%2Bx1aLQGeDuZOLtpj%2BpZ2WYe0VofmZCgQX27GeWBNt03HEnk8rVa%2B7BxBwJ3s2CGM%2FGzzaFDb1sPxEr6tqyDaXN%2FWv1ywrq22d6AYr2tP0ryvjS9PwwPJ%2BlO0VTPMNBuFr1QHdK6%2F%2FIGhbeMLvt1sQGOqUBsWb5IUN7F90%2FQlCddQ%2F%2F%2BRlMf1UixHtMSN97o4Kzp5bcmQ5eR9aVl6l5n8478CJj0sPb%2B0EGWf45sYUBM5snimQvP%2BTJ93atXRUXo%2F1XOYxzu0ZTDjb2mWDUoRZuzQa8p4pUan1wKR7DHw9WH7UUjOTRViK3M7mOf7Ma2a2bnQSfCq3Svlur%2FM%2BG2DGOWUGLXRCvUW8Hm2UmktESWJIuMktkCm5V&X-Amz-Signature=7a3fbc82eceb888908cedf51f0f60fa4b060db1c76d6d43537d83fe516b2a2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KY3Z3P%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHOUkS1yfe2pG6Piz9WYeO9E5a2RV13PNPLMb3eO2PlyAiEA1gta%2FJDoR1Yjjeq8E9RqKqTVSD1O3GDPJSjfHl0CS%2B0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX6y47GeTyqZon2TSrcA8H9ySuOgR9J%2Fs%2B0abw4dhNc6tdGsj%2FZha%2BZtUanikd9S6ctmxm3rUiXf3qlVOkpXhTCNWjNwzTGpvctCKtLvJogiUgEh5p5RlrfnvxDB%2FNUyaH9YI3z%2BbFbyv1T%2FzCy39rJuhNBO2mMxkj4%2BWtszh7qitPcxuIMhHovgkJ2l5aQ9p7l5yFLw%2F8KCSZVeYNOIIkF9JXG8mRtH6zfoy8L0tOFB1gKGyVi8%2BMgX9SflBgJit5xLVihBXuzWIdCjOB8GMI8bUA65eWWdG%2FguPlRUTDXBE8xHQCPVL2QzjYiqorSLcBaccEKa4kCSVcXjzhAjAHQkaDgPadXrav4TDrVmfxLL0RXk81eIsElj6qtJEbymMpGj0Fm%2F3KhR%2Bh5cYJSp8AdDyS%2B3JtvvKj8AToq2FWxRzrR6brMHhOE7GDPQ8AfYH7SVddjuJKa7FA0v%2FICLbTLQeXEaWQul%2FpmWHSuS5C4J57LXE8XYZQ%2BNqdG%2F6jNBb%2Bx1aLQGeDuZOLtpj%2BpZ2WYe0VofmZCgQX27GeWBNt03HEnk8rVa%2B7BxBwJ3s2CGM%2FGzzaFDb1sPxEr6tqyDaXN%2FWv1ywrq22d6AYr2tP0ryvjS9PwwPJ%2BlO0VTPMNBuFr1QHdK6%2F%2FIGhbeMLvt1sQGOqUBsWb5IUN7F90%2FQlCddQ%2F%2F%2BRlMf1UixHtMSN97o4Kzp5bcmQ5eR9aVl6l5n8478CJj0sPb%2B0EGWf45sYUBM5snimQvP%2BTJ93atXRUXo%2F1XOYxzu0ZTDjb2mWDUoRZuzQa8p4pUan1wKR7DHw9WH7UUjOTRViK3M7mOf7Ma2a2bnQSfCq3Svlur%2FM%2BG2DGOWUGLXRCvUW8Hm2UmktESWJIuMktkCm5V&X-Amz-Signature=243c4cdd780dcb30ec47788def4e4c5a0afc57957cbd2560711ab831d8953d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KY3Z3P%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHOUkS1yfe2pG6Piz9WYeO9E5a2RV13PNPLMb3eO2PlyAiEA1gta%2FJDoR1Yjjeq8E9RqKqTVSD1O3GDPJSjfHl0CS%2B0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX6y47GeTyqZon2TSrcA8H9ySuOgR9J%2Fs%2B0abw4dhNc6tdGsj%2FZha%2BZtUanikd9S6ctmxm3rUiXf3qlVOkpXhTCNWjNwzTGpvctCKtLvJogiUgEh5p5RlrfnvxDB%2FNUyaH9YI3z%2BbFbyv1T%2FzCy39rJuhNBO2mMxkj4%2BWtszh7qitPcxuIMhHovgkJ2l5aQ9p7l5yFLw%2F8KCSZVeYNOIIkF9JXG8mRtH6zfoy8L0tOFB1gKGyVi8%2BMgX9SflBgJit5xLVihBXuzWIdCjOB8GMI8bUA65eWWdG%2FguPlRUTDXBE8xHQCPVL2QzjYiqorSLcBaccEKa4kCSVcXjzhAjAHQkaDgPadXrav4TDrVmfxLL0RXk81eIsElj6qtJEbymMpGj0Fm%2F3KhR%2Bh5cYJSp8AdDyS%2B3JtvvKj8AToq2FWxRzrR6brMHhOE7GDPQ8AfYH7SVddjuJKa7FA0v%2FICLbTLQeXEaWQul%2FpmWHSuS5C4J57LXE8XYZQ%2BNqdG%2F6jNBb%2Bx1aLQGeDuZOLtpj%2BpZ2WYe0VofmZCgQX27GeWBNt03HEnk8rVa%2B7BxBwJ3s2CGM%2FGzzaFDb1sPxEr6tqyDaXN%2FWv1ywrq22d6AYr2tP0ryvjS9PwwPJ%2BlO0VTPMNBuFr1QHdK6%2F%2FIGhbeMLvt1sQGOqUBsWb5IUN7F90%2FQlCddQ%2F%2F%2BRlMf1UixHtMSN97o4Kzp5bcmQ5eR9aVl6l5n8478CJj0sPb%2B0EGWf45sYUBM5snimQvP%2BTJ93atXRUXo%2F1XOYxzu0ZTDjb2mWDUoRZuzQa8p4pUan1wKR7DHw9WH7UUjOTRViK3M7mOf7Ma2a2bnQSfCq3Svlur%2FM%2BG2DGOWUGLXRCvUW8Hm2UmktESWJIuMktkCm5V&X-Amz-Signature=0c4b64be0858ba0d8af5462e624bd0385c64409bfd12286849d308cbd4ec001d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
