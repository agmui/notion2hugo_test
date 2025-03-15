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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5LWTUE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDoLc8mTIUtpTcEDdiI5KczUgrDZsAihg%2BeQJeGM0JHgIgJf%2FZ%2FSeI1nHLqSr05RnRyke9nGZzdRUAqNp4nK1hFKwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuqMLGeC5%2Bjfk9%2BESrcA0woMy%2FW6GPM8DFd9fghY%2BNEXK3oFeAPTS9%2BaSrDX4ZxhiTjkaO02f5FVTtd%2BhI%2Baf9P%2FXs11d9vS9INvT0pPBXOmBUqy0sTszHCaVFN9n1%2BJjO%2B93KVR05TGBWqH6fI%2B5m1xgRTTywjid6U3UpQ1Ialrl3uUSSh7RWbPgE0qiEp9Vd47p4WQOGY8H%2BscA%2BpSgXom74EEXfFxCwvnFdTEdCTzbwD5OastV2wPCVEKWkRwVL2e%2FCIzIYTMGnUjS%2F3Aye56Yx0myHzeYAh6zA0WGUBw3HOr6RAa%2B4ut5NZcbgvQ%2BKoO5%2FW5F%2Fsk51zPrRKYYX4bmKrU0oJQNpuPcktHCQ2hOu17TjNCp7VUznLDJh0y76pFdpjcKMlNEhDPd44WaBYriQD2%2B55mHvqb7SW0suTI8ouZ5saR4NJe8g%2BUyQwdT7bMSbWSpPlogUQkk3LhOumSUm9JWtdJCH0XeSB6pb6EDF0yW3OaTkSrQY4YQCUc6unId8vUwV3SkjMs7RxMv9KRILgMZuvvSMs8g3RgJHvagXBuBC6WVEFVQ6zPZOwbMlIFWJiJQyg9k8VKDpSXhpk1Q4KJHBeJrWJmKrNNALE2MPfuctwgNtIKcowoq475JaUmSwwWXA09dURMMSr074GOqUB146AOtGfIqiwrnrzRscsal1gtt%2Bd0vMR8l12zxdZOM0Q1znyfgOBxMpDZMeAEqXcQo8TGEyTcYi86AaY%2BpjDtt9zZKNikJUsau5ZWtGGNfDNIP0%2FlBP6hidl%2FcaKGjKuSt8AEu3ChE%2FAp%2Bg2wXQzKzlE7eZzpc3Qrhb5p7uehcp%2BZMqc7SKwRpBwpBRi2mUIRxQ3rMU00LEA5Z1urs2TWtC5u4aI&X-Amz-Signature=03d30a1b159fb305f0045531ca413417949463f3f602a61bdfad51b4380b93c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5LWTUE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDoLc8mTIUtpTcEDdiI5KczUgrDZsAihg%2BeQJeGM0JHgIgJf%2FZ%2FSeI1nHLqSr05RnRyke9nGZzdRUAqNp4nK1hFKwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuqMLGeC5%2Bjfk9%2BESrcA0woMy%2FW6GPM8DFd9fghY%2BNEXK3oFeAPTS9%2BaSrDX4ZxhiTjkaO02f5FVTtd%2BhI%2Baf9P%2FXs11d9vS9INvT0pPBXOmBUqy0sTszHCaVFN9n1%2BJjO%2B93KVR05TGBWqH6fI%2B5m1xgRTTywjid6U3UpQ1Ialrl3uUSSh7RWbPgE0qiEp9Vd47p4WQOGY8H%2BscA%2BpSgXom74EEXfFxCwvnFdTEdCTzbwD5OastV2wPCVEKWkRwVL2e%2FCIzIYTMGnUjS%2F3Aye56Yx0myHzeYAh6zA0WGUBw3HOr6RAa%2B4ut5NZcbgvQ%2BKoO5%2FW5F%2Fsk51zPrRKYYX4bmKrU0oJQNpuPcktHCQ2hOu17TjNCp7VUznLDJh0y76pFdpjcKMlNEhDPd44WaBYriQD2%2B55mHvqb7SW0suTI8ouZ5saR4NJe8g%2BUyQwdT7bMSbWSpPlogUQkk3LhOumSUm9JWtdJCH0XeSB6pb6EDF0yW3OaTkSrQY4YQCUc6unId8vUwV3SkjMs7RxMv9KRILgMZuvvSMs8g3RgJHvagXBuBC6WVEFVQ6zPZOwbMlIFWJiJQyg9k8VKDpSXhpk1Q4KJHBeJrWJmKrNNALE2MPfuctwgNtIKcowoq475JaUmSwwWXA09dURMMSr074GOqUB146AOtGfIqiwrnrzRscsal1gtt%2Bd0vMR8l12zxdZOM0Q1znyfgOBxMpDZMeAEqXcQo8TGEyTcYi86AaY%2BpjDtt9zZKNikJUsau5ZWtGGNfDNIP0%2FlBP6hidl%2FcaKGjKuSt8AEu3ChE%2FAp%2Bg2wXQzKzlE7eZzpc3Qrhb5p7uehcp%2BZMqc7SKwRpBwpBRi2mUIRxQ3rMU00LEA5Z1urs2TWtC5u4aI&X-Amz-Signature=1def45a158bf5fb222befdf86548ae5ca73673faefbc4fecfbeb572aa1bd3db3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5LWTUE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDoLc8mTIUtpTcEDdiI5KczUgrDZsAihg%2BeQJeGM0JHgIgJf%2FZ%2FSeI1nHLqSr05RnRyke9nGZzdRUAqNp4nK1hFKwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuqMLGeC5%2Bjfk9%2BESrcA0woMy%2FW6GPM8DFd9fghY%2BNEXK3oFeAPTS9%2BaSrDX4ZxhiTjkaO02f5FVTtd%2BhI%2Baf9P%2FXs11d9vS9INvT0pPBXOmBUqy0sTszHCaVFN9n1%2BJjO%2B93KVR05TGBWqH6fI%2B5m1xgRTTywjid6U3UpQ1Ialrl3uUSSh7RWbPgE0qiEp9Vd47p4WQOGY8H%2BscA%2BpSgXom74EEXfFxCwvnFdTEdCTzbwD5OastV2wPCVEKWkRwVL2e%2FCIzIYTMGnUjS%2F3Aye56Yx0myHzeYAh6zA0WGUBw3HOr6RAa%2B4ut5NZcbgvQ%2BKoO5%2FW5F%2Fsk51zPrRKYYX4bmKrU0oJQNpuPcktHCQ2hOu17TjNCp7VUznLDJh0y76pFdpjcKMlNEhDPd44WaBYriQD2%2B55mHvqb7SW0suTI8ouZ5saR4NJe8g%2BUyQwdT7bMSbWSpPlogUQkk3LhOumSUm9JWtdJCH0XeSB6pb6EDF0yW3OaTkSrQY4YQCUc6unId8vUwV3SkjMs7RxMv9KRILgMZuvvSMs8g3RgJHvagXBuBC6WVEFVQ6zPZOwbMlIFWJiJQyg9k8VKDpSXhpk1Q4KJHBeJrWJmKrNNALE2MPfuctwgNtIKcowoq475JaUmSwwWXA09dURMMSr074GOqUB146AOtGfIqiwrnrzRscsal1gtt%2Bd0vMR8l12zxdZOM0Q1znyfgOBxMpDZMeAEqXcQo8TGEyTcYi86AaY%2BpjDtt9zZKNikJUsau5ZWtGGNfDNIP0%2FlBP6hidl%2FcaKGjKuSt8AEu3ChE%2FAp%2Bg2wXQzKzlE7eZzpc3Qrhb5p7uehcp%2BZMqc7SKwRpBwpBRi2mUIRxQ3rMU00LEA5Z1urs2TWtC5u4aI&X-Amz-Signature=b7e20a18fe8d6249e38815f1c662ce1572d2371018249a6c29415fe461f5a318&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
