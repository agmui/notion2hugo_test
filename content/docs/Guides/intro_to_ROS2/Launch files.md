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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3QYK73%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEel1KZ1WL0kPjV8wpv%2BD9tfyO0oYON7JIM6EgEYTzlgIgeIJSu5JgKWgyPYaYCVI5q2adpG0dZSq1GRML6Bu5VzsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiCK2X4a47tYy9PPCrcAw76qq%2FjeE7p3YRN3cMR5y9K3SI9mbfE4LYXm7qw57i%2FEEozAkq%2Fn8LJH2YCQGfEkGJfZyaIVT0PRKKYnTfAqlhthy7GbyVWOKGVsJpcSRHmN1x%2BuPxMPnaRqtx8ZUzi63rsy%2BD3XFownRdlS%2FFvczHWGsmgm80NjtL7LQCF5TPF8KNQ55HsAZF4LtA8Iy6fwmDqWwclJBIG70mctthNQJadhnhyadVjVXWVlA%2FFOqcvO83m3dwljWsBTDeBiuWPjVSSPgnhfs%2Ba60CmT3m0pYnnO2REO8QkyNT1wKpK2ISEkhJMRhmBPKyuSeD7KT4ouzJei2WWWl61S9%2B1JqfNIaZ47UnCB%2BDwAyaFnMmC%2BeKjzz0spfMPsiEDuFFfLfvj3diwjeuT7Y9KCa928ioI%2BS9yGMAGo5s5VxCp0gDBq8tgIkBqKf8I9xX2aRvQc6%2FD7xUdr3F0IijfRCpCWTJGJkMjsKPt4EYdd2gdVhO0A7tfHmrC%2FOUF8FXw17eTOpVNKrr%2FCzTc6CmJ66qWx6ZG5%2FsNdg9LkW7oJtLoSHE6lvO6yUXbiBYTlIHzP6%2BHqrq8Ku%2FmSptbHfcgIUF%2FuSiyav1%2Fs2BFVLV3%2Fpi3d3YIU8HnQ%2Fd6yCbzOwZR87YkMLz0gMMGOqUBDoHpOoPuRDjHDjfdazcidnyvSD8zDIEeADQeq%2FO%2BVI8Xkr5c%2BvpFKNgRfS3Yqj9Avy2PWYGgmN7yvuN3RuCtSRaAOMS2v9hR7UALMu5aKTfl9cwlU%2BKUs%2B50LaS4%2BM60CBFubC5DOYyFmgHbebcqkujFH9IjVClylqeDXTx41MHGtifpoc54ubtUAi6n6nemR3ndXBK5KtQ%2BpYDYuw2YLH1NfE0k&X-Amz-Signature=7183ab151caf01a1afc2c22b601a3fd1aacaf105de344061b7b0de6b10db09d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3QYK73%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEel1KZ1WL0kPjV8wpv%2BD9tfyO0oYON7JIM6EgEYTzlgIgeIJSu5JgKWgyPYaYCVI5q2adpG0dZSq1GRML6Bu5VzsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiCK2X4a47tYy9PPCrcAw76qq%2FjeE7p3YRN3cMR5y9K3SI9mbfE4LYXm7qw57i%2FEEozAkq%2Fn8LJH2YCQGfEkGJfZyaIVT0PRKKYnTfAqlhthy7GbyVWOKGVsJpcSRHmN1x%2BuPxMPnaRqtx8ZUzi63rsy%2BD3XFownRdlS%2FFvczHWGsmgm80NjtL7LQCF5TPF8KNQ55HsAZF4LtA8Iy6fwmDqWwclJBIG70mctthNQJadhnhyadVjVXWVlA%2FFOqcvO83m3dwljWsBTDeBiuWPjVSSPgnhfs%2Ba60CmT3m0pYnnO2REO8QkyNT1wKpK2ISEkhJMRhmBPKyuSeD7KT4ouzJei2WWWl61S9%2B1JqfNIaZ47UnCB%2BDwAyaFnMmC%2BeKjzz0spfMPsiEDuFFfLfvj3diwjeuT7Y9KCa928ioI%2BS9yGMAGo5s5VxCp0gDBq8tgIkBqKf8I9xX2aRvQc6%2FD7xUdr3F0IijfRCpCWTJGJkMjsKPt4EYdd2gdVhO0A7tfHmrC%2FOUF8FXw17eTOpVNKrr%2FCzTc6CmJ66qWx6ZG5%2FsNdg9LkW7oJtLoSHE6lvO6yUXbiBYTlIHzP6%2BHqrq8Ku%2FmSptbHfcgIUF%2FuSiyav1%2Fs2BFVLV3%2Fpi3d3YIU8HnQ%2Fd6yCbzOwZR87YkMLz0gMMGOqUBDoHpOoPuRDjHDjfdazcidnyvSD8zDIEeADQeq%2FO%2BVI8Xkr5c%2BvpFKNgRfS3Yqj9Avy2PWYGgmN7yvuN3RuCtSRaAOMS2v9hR7UALMu5aKTfl9cwlU%2BKUs%2B50LaS4%2BM60CBFubC5DOYyFmgHbebcqkujFH9IjVClylqeDXTx41MHGtifpoc54ubtUAi6n6nemR3ndXBK5KtQ%2BpYDYuw2YLH1NfE0k&X-Amz-Signature=ab8f83ee99b6e2a911fd5e9f248eb0f7f4de835a8fcbdd4e7b36e459d9a69d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3QYK73%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEel1KZ1WL0kPjV8wpv%2BD9tfyO0oYON7JIM6EgEYTzlgIgeIJSu5JgKWgyPYaYCVI5q2adpG0dZSq1GRML6Bu5VzsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiCK2X4a47tYy9PPCrcAw76qq%2FjeE7p3YRN3cMR5y9K3SI9mbfE4LYXm7qw57i%2FEEozAkq%2Fn8LJH2YCQGfEkGJfZyaIVT0PRKKYnTfAqlhthy7GbyVWOKGVsJpcSRHmN1x%2BuPxMPnaRqtx8ZUzi63rsy%2BD3XFownRdlS%2FFvczHWGsmgm80NjtL7LQCF5TPF8KNQ55HsAZF4LtA8Iy6fwmDqWwclJBIG70mctthNQJadhnhyadVjVXWVlA%2FFOqcvO83m3dwljWsBTDeBiuWPjVSSPgnhfs%2Ba60CmT3m0pYnnO2REO8QkyNT1wKpK2ISEkhJMRhmBPKyuSeD7KT4ouzJei2WWWl61S9%2B1JqfNIaZ47UnCB%2BDwAyaFnMmC%2BeKjzz0spfMPsiEDuFFfLfvj3diwjeuT7Y9KCa928ioI%2BS9yGMAGo5s5VxCp0gDBq8tgIkBqKf8I9xX2aRvQc6%2FD7xUdr3F0IijfRCpCWTJGJkMjsKPt4EYdd2gdVhO0A7tfHmrC%2FOUF8FXw17eTOpVNKrr%2FCzTc6CmJ66qWx6ZG5%2FsNdg9LkW7oJtLoSHE6lvO6yUXbiBYTlIHzP6%2BHqrq8Ku%2FmSptbHfcgIUF%2FuSiyav1%2Fs2BFVLV3%2Fpi3d3YIU8HnQ%2Fd6yCbzOwZR87YkMLz0gMMGOqUBDoHpOoPuRDjHDjfdazcidnyvSD8zDIEeADQeq%2FO%2BVI8Xkr5c%2BvpFKNgRfS3Yqj9Avy2PWYGgmN7yvuN3RuCtSRaAOMS2v9hR7UALMu5aKTfl9cwlU%2BKUs%2B50LaS4%2BM60CBFubC5DOYyFmgHbebcqkujFH9IjVClylqeDXTx41MHGtifpoc54ubtUAi6n6nemR3ndXBK5KtQ%2BpYDYuw2YLH1NfE0k&X-Amz-Signature=a412cd92e8c22aca23bb489911befd6c1afcda6f992e5e2bcaf5d255573e59c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
