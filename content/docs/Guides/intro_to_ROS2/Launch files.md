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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FDP477T%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RTYP7EuFB%2BtUygYL1z6tRKidmDyvYMJ7jaKOOQigdwIhAItOc1k9l9vlOCH48d1OE84Z5it2iPGGDBjLJh0ECI0bKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv8rNVKM0sNrcLkokq3APAQW%2BIfxVTeHA3s8DCw%2FQMoQDnebZmy3czIzl1yJa4C7v7jDRCydS4voBGEmh%2FbPKbxQbPRxCBCsy7%2BqqgqhFvU55qbAR0OnAmrw2Byp69%2B%2BzHxbDD4NNp8AALOnVckAJVsKvq8oM48flkGBThmcxOsnSt%2BsvZRz2%2BIcWd2mphepFkaWwLKTrB4MYf24%2BBUoVyJHspYd%2BgdoSA06kuy%2BDn5afUGJb5LV4YzpQC8YV%2FBtaw%2FqnAuYMRdv2gMUz7YHmV8Wqll8VouyZRGC9fKd3KpSWnWB65gYuT2JTO9WQfCk23XAkWu2trkh2haY4wa%2F7f%2Bfjto%2BxxCD26hhCffxQ4DUzV2rssQVsuFrg8wokUrVXxWDw8Hzg7Pk8LqRFZNvRqGmUQ3jSTqQ42JGviU%2BuTn7cL%2FTm3p7UQQnRViCXk%2F4J910XB70CdLszjqaajk7DAQ5qcOlY%2FsWjoKnrvfH%2BfPFfisQTpU0xcg4oMl7DFgl5JHKMFEmmyqq%2FPAxciuLSV5dGUPWj%2BTTlp%2FyLo9%2Fitoghj%2BBywvA8DbtZEmetuamV0SRr3WIpEJseaYJD8In%2FZA21ioq428mPTDXDwE1lZ6XAwZY1obYI22moeNMSGFOsucOK6ujU1h6M3SzDLi4DDBjqkAQ0FyEFh2kpBqh11Aa3uovked6y1%2B9O5qKtUOhq%2BEqqZSWNJ1%2B%2BzSC01Zhf483yxR4YxNMCRFS%2FA0u9EpZuyS%2BVsoGez3Ss2w%2BkbozRF7UhMQAFGjvAn%2FcIgIxQc1fKlYcgoayo5VEZT%2BanZipTZowSlt8Xm8x4uAqTlDHhLNMiPb9gB7B9G%2FSmTef1hQ5awDZEhVH4ltS66W0Kix4Q7XU1J1ODA&X-Amz-Signature=9f2b3b0c2fb48a02092059c8c5a85d5d5a60c2910868359033a7d3d43e022965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FDP477T%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RTYP7EuFB%2BtUygYL1z6tRKidmDyvYMJ7jaKOOQigdwIhAItOc1k9l9vlOCH48d1OE84Z5it2iPGGDBjLJh0ECI0bKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv8rNVKM0sNrcLkokq3APAQW%2BIfxVTeHA3s8DCw%2FQMoQDnebZmy3czIzl1yJa4C7v7jDRCydS4voBGEmh%2FbPKbxQbPRxCBCsy7%2BqqgqhFvU55qbAR0OnAmrw2Byp69%2B%2BzHxbDD4NNp8AALOnVckAJVsKvq8oM48flkGBThmcxOsnSt%2BsvZRz2%2BIcWd2mphepFkaWwLKTrB4MYf24%2BBUoVyJHspYd%2BgdoSA06kuy%2BDn5afUGJb5LV4YzpQC8YV%2FBtaw%2FqnAuYMRdv2gMUz7YHmV8Wqll8VouyZRGC9fKd3KpSWnWB65gYuT2JTO9WQfCk23XAkWu2trkh2haY4wa%2F7f%2Bfjto%2BxxCD26hhCffxQ4DUzV2rssQVsuFrg8wokUrVXxWDw8Hzg7Pk8LqRFZNvRqGmUQ3jSTqQ42JGviU%2BuTn7cL%2FTm3p7UQQnRViCXk%2F4J910XB70CdLszjqaajk7DAQ5qcOlY%2FsWjoKnrvfH%2BfPFfisQTpU0xcg4oMl7DFgl5JHKMFEmmyqq%2FPAxciuLSV5dGUPWj%2BTTlp%2FyLo9%2Fitoghj%2BBywvA8DbtZEmetuamV0SRr3WIpEJseaYJD8In%2FZA21ioq428mPTDXDwE1lZ6XAwZY1obYI22moeNMSGFOsucOK6ujU1h6M3SzDLi4DDBjqkAQ0FyEFh2kpBqh11Aa3uovked6y1%2B9O5qKtUOhq%2BEqqZSWNJ1%2B%2BzSC01Zhf483yxR4YxNMCRFS%2FA0u9EpZuyS%2BVsoGez3Ss2w%2BkbozRF7UhMQAFGjvAn%2FcIgIxQc1fKlYcgoayo5VEZT%2BanZipTZowSlt8Xm8x4uAqTlDHhLNMiPb9gB7B9G%2FSmTef1hQ5awDZEhVH4ltS66W0Kix4Q7XU1J1ODA&X-Amz-Signature=96f72c4caf41aadbb57df36decf2d06a8672668efa2b2ede01aaa834176d434b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FDP477T%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RTYP7EuFB%2BtUygYL1z6tRKidmDyvYMJ7jaKOOQigdwIhAItOc1k9l9vlOCH48d1OE84Z5it2iPGGDBjLJh0ECI0bKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv8rNVKM0sNrcLkokq3APAQW%2BIfxVTeHA3s8DCw%2FQMoQDnebZmy3czIzl1yJa4C7v7jDRCydS4voBGEmh%2FbPKbxQbPRxCBCsy7%2BqqgqhFvU55qbAR0OnAmrw2Byp69%2B%2BzHxbDD4NNp8AALOnVckAJVsKvq8oM48flkGBThmcxOsnSt%2BsvZRz2%2BIcWd2mphepFkaWwLKTrB4MYf24%2BBUoVyJHspYd%2BgdoSA06kuy%2BDn5afUGJb5LV4YzpQC8YV%2FBtaw%2FqnAuYMRdv2gMUz7YHmV8Wqll8VouyZRGC9fKd3KpSWnWB65gYuT2JTO9WQfCk23XAkWu2trkh2haY4wa%2F7f%2Bfjto%2BxxCD26hhCffxQ4DUzV2rssQVsuFrg8wokUrVXxWDw8Hzg7Pk8LqRFZNvRqGmUQ3jSTqQ42JGviU%2BuTn7cL%2FTm3p7UQQnRViCXk%2F4J910XB70CdLszjqaajk7DAQ5qcOlY%2FsWjoKnrvfH%2BfPFfisQTpU0xcg4oMl7DFgl5JHKMFEmmyqq%2FPAxciuLSV5dGUPWj%2BTTlp%2FyLo9%2Fitoghj%2BBywvA8DbtZEmetuamV0SRr3WIpEJseaYJD8In%2FZA21ioq428mPTDXDwE1lZ6XAwZY1obYI22moeNMSGFOsucOK6ujU1h6M3SzDLi4DDBjqkAQ0FyEFh2kpBqh11Aa3uovked6y1%2B9O5qKtUOhq%2BEqqZSWNJ1%2B%2BzSC01Zhf483yxR4YxNMCRFS%2FA0u9EpZuyS%2BVsoGez3Ss2w%2BkbozRF7UhMQAFGjvAn%2FcIgIxQc1fKlYcgoayo5VEZT%2BanZipTZowSlt8Xm8x4uAqTlDHhLNMiPb9gB7B9G%2FSmTef1hQ5awDZEhVH4ltS66W0Kix4Q7XU1J1ODA&X-Amz-Signature=b24623a33f3b8a1fecbe1622db6133fbfa9d451836c14287695d801ae8326d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
