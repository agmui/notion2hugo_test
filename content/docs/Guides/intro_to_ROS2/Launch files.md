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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645W54CDV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC1RGh1Ir6WmT3%2F1TZXh6vikdvvRsMand4H%2FOQ0JS8TgQIhAKHfGJsYLVYwud26kvLcbmBYdAruI6Os%2F1y9dSw2VWfbKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTR4pCRRZbx%2FOFiCkq3AMJlhO6VYJWMT5cM44URbbU2%2Ba3DdTKSo46jPvwEkVDeSIEDt9CmYHioSwBnqr9eCV048hhKuDDjuwilTsMj%2B%2BN%2FRzbWCx2LWkfgR5QT7Hz0OGMzEwxXAVFUdEL%2BnYEHpFSxcyvQFNqSXfXIbinOXlWRboFjeI1FU%2Fm2WT2n5HDwJ8Ye9GFmkMRP0sX%2BLI4WPEukgRCUGtjfgQt28joXUYLy1zEvLmjg%2F7tLmfm42MhEtR%2FvFTgfbpDsOBF%2BkGNxODpb33Y7BPcH9UjcuPhXgXBPhzVYjzzzmtfrddYIcpYlat29gU0nfQe0VIH1OaI4jsF0roEO6y1L6d%2Fk1KPqGGaSttKjKT%2BWP5i54w65YBkWBy0l%2Fd26pYRu8mPUKFz1eylpVG54pNa5oR5XPuVN6bnGIyBF%2B3KmjRqBolXSRfnR7IBpXv8axktg305KgzT55zvv6G8lUn4U%2F2W4heFM4glUWW5hP%2FD7ZsJC7OuknW51oVkaqMfP%2BbJxCSy7P7UA2IbEZPhxMGkb%2FxuZT7VYaa2%2Bw0TXBj3sk%2BuypbcG%2Bjs0gUXLalnuHdinKF4kgPLPiRRNAHmEhRASmSO3zNVQQ%2FapKIgcvmQB7FgKeN9XMyPCfov5p5sDDpmS%2F%2BbOTC5lai%2FBjqkAekOI%2F4B1ykY8i5yfn1hPYrSyPaK3lVqvxuTlD4%2BD4KXdjRTtkrtQBwKNJUV0vF2QrINPHP9StVg0fac6NQxFuOfay2Mw%2F4R7phWXPCPo9XrYacpDTUTh43Z6itoRFBf%2FVf1qibGpgDcbnaWmTHSlAR1LonIi8z6h5cOkpub7SX7arSO9p51rkEzecfztF43jvVMdORu4qSLZdqTrUNS6zyE%2Buvv&X-Amz-Signature=18a573173356ed6135a91841c3133ff6a90497d9a4c3d4a574e38aff90149f23&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645W54CDV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC1RGh1Ir6WmT3%2F1TZXh6vikdvvRsMand4H%2FOQ0JS8TgQIhAKHfGJsYLVYwud26kvLcbmBYdAruI6Os%2F1y9dSw2VWfbKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTR4pCRRZbx%2FOFiCkq3AMJlhO6VYJWMT5cM44URbbU2%2Ba3DdTKSo46jPvwEkVDeSIEDt9CmYHioSwBnqr9eCV048hhKuDDjuwilTsMj%2B%2BN%2FRzbWCx2LWkfgR5QT7Hz0OGMzEwxXAVFUdEL%2BnYEHpFSxcyvQFNqSXfXIbinOXlWRboFjeI1FU%2Fm2WT2n5HDwJ8Ye9GFmkMRP0sX%2BLI4WPEukgRCUGtjfgQt28joXUYLy1zEvLmjg%2F7tLmfm42MhEtR%2FvFTgfbpDsOBF%2BkGNxODpb33Y7BPcH9UjcuPhXgXBPhzVYjzzzmtfrddYIcpYlat29gU0nfQe0VIH1OaI4jsF0roEO6y1L6d%2Fk1KPqGGaSttKjKT%2BWP5i54w65YBkWBy0l%2Fd26pYRu8mPUKFz1eylpVG54pNa5oR5XPuVN6bnGIyBF%2B3KmjRqBolXSRfnR7IBpXv8axktg305KgzT55zvv6G8lUn4U%2F2W4heFM4glUWW5hP%2FD7ZsJC7OuknW51oVkaqMfP%2BbJxCSy7P7UA2IbEZPhxMGkb%2FxuZT7VYaa2%2Bw0TXBj3sk%2BuypbcG%2Bjs0gUXLalnuHdinKF4kgPLPiRRNAHmEhRASmSO3zNVQQ%2FapKIgcvmQB7FgKeN9XMyPCfov5p5sDDpmS%2F%2BbOTC5lai%2FBjqkAekOI%2F4B1ykY8i5yfn1hPYrSyPaK3lVqvxuTlD4%2BD4KXdjRTtkrtQBwKNJUV0vF2QrINPHP9StVg0fac6NQxFuOfay2Mw%2F4R7phWXPCPo9XrYacpDTUTh43Z6itoRFBf%2FVf1qibGpgDcbnaWmTHSlAR1LonIi8z6h5cOkpub7SX7arSO9p51rkEzecfztF43jvVMdORu4qSLZdqTrUNS6zyE%2Buvv&X-Amz-Signature=74ee49f4d3b28917effb0ecffbd562be19590182e1225114bc1a2d63eb8f0941&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645W54CDV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC1RGh1Ir6WmT3%2F1TZXh6vikdvvRsMand4H%2FOQ0JS8TgQIhAKHfGJsYLVYwud26kvLcbmBYdAruI6Os%2F1y9dSw2VWfbKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTR4pCRRZbx%2FOFiCkq3AMJlhO6VYJWMT5cM44URbbU2%2Ba3DdTKSo46jPvwEkVDeSIEDt9CmYHioSwBnqr9eCV048hhKuDDjuwilTsMj%2B%2BN%2FRzbWCx2LWkfgR5QT7Hz0OGMzEwxXAVFUdEL%2BnYEHpFSxcyvQFNqSXfXIbinOXlWRboFjeI1FU%2Fm2WT2n5HDwJ8Ye9GFmkMRP0sX%2BLI4WPEukgRCUGtjfgQt28joXUYLy1zEvLmjg%2F7tLmfm42MhEtR%2FvFTgfbpDsOBF%2BkGNxODpb33Y7BPcH9UjcuPhXgXBPhzVYjzzzmtfrddYIcpYlat29gU0nfQe0VIH1OaI4jsF0roEO6y1L6d%2Fk1KPqGGaSttKjKT%2BWP5i54w65YBkWBy0l%2Fd26pYRu8mPUKFz1eylpVG54pNa5oR5XPuVN6bnGIyBF%2B3KmjRqBolXSRfnR7IBpXv8axktg305KgzT55zvv6G8lUn4U%2F2W4heFM4glUWW5hP%2FD7ZsJC7OuknW51oVkaqMfP%2BbJxCSy7P7UA2IbEZPhxMGkb%2FxuZT7VYaa2%2Bw0TXBj3sk%2BuypbcG%2Bjs0gUXLalnuHdinKF4kgPLPiRRNAHmEhRASmSO3zNVQQ%2FapKIgcvmQB7FgKeN9XMyPCfov5p5sDDpmS%2F%2BbOTC5lai%2FBjqkAekOI%2F4B1ykY8i5yfn1hPYrSyPaK3lVqvxuTlD4%2BD4KXdjRTtkrtQBwKNJUV0vF2QrINPHP9StVg0fac6NQxFuOfay2Mw%2F4R7phWXPCPo9XrYacpDTUTh43Z6itoRFBf%2FVf1qibGpgDcbnaWmTHSlAR1LonIi8z6h5cOkpub7SX7arSO9p51rkEzecfztF43jvVMdORu4qSLZdqTrUNS6zyE%2Buvv&X-Amz-Signature=f8f06ce28366842123bc21b764e3623eb205b26530754b54f441ae2e84a1a4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
