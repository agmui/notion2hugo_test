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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7HBFYH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDn6TyiwS%2FsqBE21eEaX86BmSf3B7ozjLSTp3TwNfenAiB19L8TWk93jYYq9ko%2BnbC5OhNHIhFK4wq55st91I4%2FNCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbv8Pxg3MSLyyrv9iKtwDXaiR1tb5qklpcrba8ME51tpZwTVlxMeiMQIZZJi12A6Cz9kKzyz3e3kV%2BiwfsuQJjCL7I%2BF1OXpXje8sbBvlyM9eIeYGcsV2n1JMrAUuHZyVxGDtxzaoukpS19Wzc%2FcnNybuXcGvcXsA0pMGBPqSj3TVJ5jM2NzSsBXWjI6AsYjVn0wG4lnrqhocnQ%2BMODEkVpySoqKXdoVtofyeIFhaAL%2FRi3ppflOn%2BEVwhrfvaup23SmNbUKsblt752dFeQ28vG3Pjsg6OFuREIFIVX7rBbHD4dnXx%2BF0AcwlR3Jy3DjoPaoL2QjEN0fUbsS0mSMZh6H9D9Bq1l%2BXhE81ZSKCGAJboCN4M0QdmDobrxMoug3aFEK6Gn%2Ba%2Fw%2BXv%2FbrQiMokqBFk0MCps4fNvPPw8fvHDtkoUQ9kiJQJvT%2B02fBVlkw9iFlLrDeruBRnw%2FdZBxfetkN%2FiNk89jXkyR7rSSptqQZxy%2BJRlziqoHp4Ul1KAOBpJEyQR1u6UcJKlpVVc89J6NZo5e8ClIvHAKiBn1vZ%2FK12kdxSDrjQeH5AM6LnbgSW%2FyhNZyQajRpVSk0tlHpg7s8JJ3Gjm3wzbF%2Fy6BcbD0mstcTtqwzbrgPgbZiqq10jOIQHSXERJ3gAc8wx%2BCgwQY6pgHCOSPHH1LdbQ%2Bssby%2BhmzMWZGQt5ZLLtYJ5irvRbbpEC2qm5jv7z4bvrLpAzT7vXBlH6eb%2BjeUFKY9WtLc2mjFp1Wq6%2BXb8KvAgctIcVPWy30dUc1cVQe8016UczSWueP5syPHdu0z4EzrkXSNcxciSPe8IOX7TFE%2FmRWXh9IqAFsJAf03IG7Re4x8e%2FckvDIwTTCR28m1QaiGmHzS3oLpbRH7y%2Fp7&X-Amz-Signature=b065247c3f1c102657f08ae32c24cef1749a6b172114916bae5e023ba4bf8058&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7HBFYH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDn6TyiwS%2FsqBE21eEaX86BmSf3B7ozjLSTp3TwNfenAiB19L8TWk93jYYq9ko%2BnbC5OhNHIhFK4wq55st91I4%2FNCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbv8Pxg3MSLyyrv9iKtwDXaiR1tb5qklpcrba8ME51tpZwTVlxMeiMQIZZJi12A6Cz9kKzyz3e3kV%2BiwfsuQJjCL7I%2BF1OXpXje8sbBvlyM9eIeYGcsV2n1JMrAUuHZyVxGDtxzaoukpS19Wzc%2FcnNybuXcGvcXsA0pMGBPqSj3TVJ5jM2NzSsBXWjI6AsYjVn0wG4lnrqhocnQ%2BMODEkVpySoqKXdoVtofyeIFhaAL%2FRi3ppflOn%2BEVwhrfvaup23SmNbUKsblt752dFeQ28vG3Pjsg6OFuREIFIVX7rBbHD4dnXx%2BF0AcwlR3Jy3DjoPaoL2QjEN0fUbsS0mSMZh6H9D9Bq1l%2BXhE81ZSKCGAJboCN4M0QdmDobrxMoug3aFEK6Gn%2Ba%2Fw%2BXv%2FbrQiMokqBFk0MCps4fNvPPw8fvHDtkoUQ9kiJQJvT%2B02fBVlkw9iFlLrDeruBRnw%2FdZBxfetkN%2FiNk89jXkyR7rSSptqQZxy%2BJRlziqoHp4Ul1KAOBpJEyQR1u6UcJKlpVVc89J6NZo5e8ClIvHAKiBn1vZ%2FK12kdxSDrjQeH5AM6LnbgSW%2FyhNZyQajRpVSk0tlHpg7s8JJ3Gjm3wzbF%2Fy6BcbD0mstcTtqwzbrgPgbZiqq10jOIQHSXERJ3gAc8wx%2BCgwQY6pgHCOSPHH1LdbQ%2Bssby%2BhmzMWZGQt5ZLLtYJ5irvRbbpEC2qm5jv7z4bvrLpAzT7vXBlH6eb%2BjeUFKY9WtLc2mjFp1Wq6%2BXb8KvAgctIcVPWy30dUc1cVQe8016UczSWueP5syPHdu0z4EzrkXSNcxciSPe8IOX7TFE%2FmRWXh9IqAFsJAf03IG7Re4x8e%2FckvDIwTTCR28m1QaiGmHzS3oLpbRH7y%2Fp7&X-Amz-Signature=60d161964e5152d9824a7be0af7bb7f922dfc3121aba76c57b12b1650c8ceb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7HBFYH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDn6TyiwS%2FsqBE21eEaX86BmSf3B7ozjLSTp3TwNfenAiB19L8TWk93jYYq9ko%2BnbC5OhNHIhFK4wq55st91I4%2FNCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbv8Pxg3MSLyyrv9iKtwDXaiR1tb5qklpcrba8ME51tpZwTVlxMeiMQIZZJi12A6Cz9kKzyz3e3kV%2BiwfsuQJjCL7I%2BF1OXpXje8sbBvlyM9eIeYGcsV2n1JMrAUuHZyVxGDtxzaoukpS19Wzc%2FcnNybuXcGvcXsA0pMGBPqSj3TVJ5jM2NzSsBXWjI6AsYjVn0wG4lnrqhocnQ%2BMODEkVpySoqKXdoVtofyeIFhaAL%2FRi3ppflOn%2BEVwhrfvaup23SmNbUKsblt752dFeQ28vG3Pjsg6OFuREIFIVX7rBbHD4dnXx%2BF0AcwlR3Jy3DjoPaoL2QjEN0fUbsS0mSMZh6H9D9Bq1l%2BXhE81ZSKCGAJboCN4M0QdmDobrxMoug3aFEK6Gn%2Ba%2Fw%2BXv%2FbrQiMokqBFk0MCps4fNvPPw8fvHDtkoUQ9kiJQJvT%2B02fBVlkw9iFlLrDeruBRnw%2FdZBxfetkN%2FiNk89jXkyR7rSSptqQZxy%2BJRlziqoHp4Ul1KAOBpJEyQR1u6UcJKlpVVc89J6NZo5e8ClIvHAKiBn1vZ%2FK12kdxSDrjQeH5AM6LnbgSW%2FyhNZyQajRpVSk0tlHpg7s8JJ3Gjm3wzbF%2Fy6BcbD0mstcTtqwzbrgPgbZiqq10jOIQHSXERJ3gAc8wx%2BCgwQY6pgHCOSPHH1LdbQ%2Bssby%2BhmzMWZGQt5ZLLtYJ5irvRbbpEC2qm5jv7z4bvrLpAzT7vXBlH6eb%2BjeUFKY9WtLc2mjFp1Wq6%2BXb8KvAgctIcVPWy30dUc1cVQe8016UczSWueP5syPHdu0z4EzrkXSNcxciSPe8IOX7TFE%2FmRWXh9IqAFsJAf03IG7Re4x8e%2FckvDIwTTCR28m1QaiGmHzS3oLpbRH7y%2Fp7&X-Amz-Signature=3240943c507672f5d1cf5aac787f63f7c0f3f32bde18883ebd861a1c3c2cc975&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
