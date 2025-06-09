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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQZ6BN4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW87N7fovznuKt8o9quqP%2BrZN2jdTdsDuDU0xgaEubAiEA7wKZfy5NO2rE2iFYyJmchwe9iZnsWbXs4b7g24Frm5EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxsk85ZoUeWoKsM%2FSrcA39U%2B%2BnYY71FAf9ifgZ9iVgoscFRZ%2BSGLugqZRbwhUX8g%2BZx7L5WGm%2FhNZ22Z%2FFRccVRt3DAVZ2LEYScZiOIZ8UFxcS2akS7tf46U1YgmcgGvUHZWSHrRH28nZpCV0LoXrey2p0RW3wNOLR90labWcjfBGYYD7sBCnEUFgrymlpM4AD9EUu90%2B6eusi7jsA5fG82iW3SRa5ZQ1n3dPHAUE7WKJDRc2Z3Ursp%2F3RhY6nLuMN6x3JAXAVzESbqsxLHZMdx2H9ob5AYHLdqNQKbj4d6BjxoyCUbP3T6JTdTswvxbzwIqQRBn3XnWODB7ig25AkjkjZHaW3j%2BKjiPnpaTrJ%2Fb6BLrOglRe20yU%2F9Rd45z46pKR1MVTsb%2BxP7lzjf88xVndG8jIKKV8X2JsPteQcYftluHVBHHwL5nrWxiIrmebeTKnK7GxjLR3xzzr1LdpD0KJIq9%2BPrvC0a0Iaxyhn3rxiIXheWm%2FORCn9g2kYxMMI7TCVMu42WXU7N0EsjHgnnlP6izeyuhowme2PDchVglKsMh3qbxiS6HtQ%2Bzz3Z6P1HzmEKEgHHBtLxLdEXlELwhVkGA3hnQgA%2BrRrcnuBPubQfkA7j68VqRwyzBgxXXpkI%2FQI2zpNpvHS%2BMMjumMIGOqUBEuRnZCxRZ11KQGawDjUQBEO4dAdH1SaNzrwh0jwuQpgL%2Fg0FfDzjd9PjyCKWKYoOASD0Wg05aE2x9NFeYQ0SaUu1gk3gF5k2BLCqVhctscn3Pxb2Setn688hmsu%2BSMUzwaRKZO98lHtUnw9RJfT3XNLbYN1kpzEEv9pTCyf1msdnFAYCyVTskr9ifZawBBozOxsV5DUnGMhlXD7RqDac5trx%2F%2Bg8&X-Amz-Signature=f52ee978a60e2d0fc72c90b305935665bcdff0ccd54d2a07f680692c3649f35c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQZ6BN4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW87N7fovznuKt8o9quqP%2BrZN2jdTdsDuDU0xgaEubAiEA7wKZfy5NO2rE2iFYyJmchwe9iZnsWbXs4b7g24Frm5EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxsk85ZoUeWoKsM%2FSrcA39U%2B%2BnYY71FAf9ifgZ9iVgoscFRZ%2BSGLugqZRbwhUX8g%2BZx7L5WGm%2FhNZ22Z%2FFRccVRt3DAVZ2LEYScZiOIZ8UFxcS2akS7tf46U1YgmcgGvUHZWSHrRH28nZpCV0LoXrey2p0RW3wNOLR90labWcjfBGYYD7sBCnEUFgrymlpM4AD9EUu90%2B6eusi7jsA5fG82iW3SRa5ZQ1n3dPHAUE7WKJDRc2Z3Ursp%2F3RhY6nLuMN6x3JAXAVzESbqsxLHZMdx2H9ob5AYHLdqNQKbj4d6BjxoyCUbP3T6JTdTswvxbzwIqQRBn3XnWODB7ig25AkjkjZHaW3j%2BKjiPnpaTrJ%2Fb6BLrOglRe20yU%2F9Rd45z46pKR1MVTsb%2BxP7lzjf88xVndG8jIKKV8X2JsPteQcYftluHVBHHwL5nrWxiIrmebeTKnK7GxjLR3xzzr1LdpD0KJIq9%2BPrvC0a0Iaxyhn3rxiIXheWm%2FORCn9g2kYxMMI7TCVMu42WXU7N0EsjHgnnlP6izeyuhowme2PDchVglKsMh3qbxiS6HtQ%2Bzz3Z6P1HzmEKEgHHBtLxLdEXlELwhVkGA3hnQgA%2BrRrcnuBPubQfkA7j68VqRwyzBgxXXpkI%2FQI2zpNpvHS%2BMMjumMIGOqUBEuRnZCxRZ11KQGawDjUQBEO4dAdH1SaNzrwh0jwuQpgL%2Fg0FfDzjd9PjyCKWKYoOASD0Wg05aE2x9NFeYQ0SaUu1gk3gF5k2BLCqVhctscn3Pxb2Setn688hmsu%2BSMUzwaRKZO98lHtUnw9RJfT3XNLbYN1kpzEEv9pTCyf1msdnFAYCyVTskr9ifZawBBozOxsV5DUnGMhlXD7RqDac5trx%2F%2Bg8&X-Amz-Signature=3259bbd4f37abb34b0413268451a74931aee64228473866ac811a99cff24d774&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQZ6BN4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW87N7fovznuKt8o9quqP%2BrZN2jdTdsDuDU0xgaEubAiEA7wKZfy5NO2rE2iFYyJmchwe9iZnsWbXs4b7g24Frm5EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxsk85ZoUeWoKsM%2FSrcA39U%2B%2BnYY71FAf9ifgZ9iVgoscFRZ%2BSGLugqZRbwhUX8g%2BZx7L5WGm%2FhNZ22Z%2FFRccVRt3DAVZ2LEYScZiOIZ8UFxcS2akS7tf46U1YgmcgGvUHZWSHrRH28nZpCV0LoXrey2p0RW3wNOLR90labWcjfBGYYD7sBCnEUFgrymlpM4AD9EUu90%2B6eusi7jsA5fG82iW3SRa5ZQ1n3dPHAUE7WKJDRc2Z3Ursp%2F3RhY6nLuMN6x3JAXAVzESbqsxLHZMdx2H9ob5AYHLdqNQKbj4d6BjxoyCUbP3T6JTdTswvxbzwIqQRBn3XnWODB7ig25AkjkjZHaW3j%2BKjiPnpaTrJ%2Fb6BLrOglRe20yU%2F9Rd45z46pKR1MVTsb%2BxP7lzjf88xVndG8jIKKV8X2JsPteQcYftluHVBHHwL5nrWxiIrmebeTKnK7GxjLR3xzzr1LdpD0KJIq9%2BPrvC0a0Iaxyhn3rxiIXheWm%2FORCn9g2kYxMMI7TCVMu42WXU7N0EsjHgnnlP6izeyuhowme2PDchVglKsMh3qbxiS6HtQ%2Bzz3Z6P1HzmEKEgHHBtLxLdEXlELwhVkGA3hnQgA%2BrRrcnuBPubQfkA7j68VqRwyzBgxXXpkI%2FQI2zpNpvHS%2BMMjumMIGOqUBEuRnZCxRZ11KQGawDjUQBEO4dAdH1SaNzrwh0jwuQpgL%2Fg0FfDzjd9PjyCKWKYoOASD0Wg05aE2x9NFeYQ0SaUu1gk3gF5k2BLCqVhctscn3Pxb2Setn688hmsu%2BSMUzwaRKZO98lHtUnw9RJfT3XNLbYN1kpzEEv9pTCyf1msdnFAYCyVTskr9ifZawBBozOxsV5DUnGMhlXD7RqDac5trx%2F%2Bg8&X-Amz-Signature=e85f58930115c837a35322d08e2532f2f6eece610d84f01c224879be1ea337ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
