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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQH44EIG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTKnSkV2ZICLMFBk0gTC%2F8MzrbBsml4yyOtaAd4czR4AiEAoKAK%2FIYJEbAhQw%2FUu08TfB1X6uSTVKgP%2BiDFkiyMuGoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJZu136ludg%2FwHiAHircA8zGb6xzdHzS0Zb4wpzv6r0ut93j9yG7HUXCTjkycR64q8U4AlSHiBnRsd9e9J7zF32b7H5iwTdYFQgZpsrJNgnqLK3vftXMD1cJSv1E193gFASUcUub8%2BKyYNLq5V%2BP1roORAaKUIpOoP9CTeTm0qR1RooMC5xLGzH4LAH%2FTBTM8RFxcGWhNsLsFb0LyK%2B4mRG3qIwNOAHZXagwQwlTZN9UbcGq7zYNzAX4a%2Bysi3dsAp8fG04xVhx2l2iJe4dyTzzc0vQfHyatoVUPyICam4pyRU%2BWIpD%2BNeM5HE2iPQwXfD9zpxUleZKl%2BEahRc8Rwfd9hOtu49uMTVEV9KW%2FdpwY6wVnNy8GPC739z%2BILUgbT9a6X20vyVnTpwY9LZSwfMurFgZGdZPYajGKLmg50Nz9ohqiE2yO8W20PFMga13faL1Hc9bJYyhP6jGX9dkzf%2FgyUOBPL6ba6UJB8bVQfMGEoCmxQ0v7GthAhXOzZP%2Bv9F0RM%2FxBZtLocYlT0nD2zKZScYnLOwRlrNTljUD%2F4Ig%2FXESj5y6VmLyZ22QE9ZlXPcjiuI1aeVF6RK1zHK%2FVeEgp9mWI3%2F4VnwStZdAdqcaWeN6I6r9OUSeEwdSUcfPUdvuvxXf6LfrLgYB3MKv%2ByL8GOqUBmvpjyVnTmByBizwIQqLxamos2AUaHJ%2FF0Bs%2BceywnDWs%2BFEj4G5BP2sxw4j54%2B9kIi0kqpJlPtMwuHURhxf4I511axWMKAQDUED6ZnVsyEZ4uA9qEC0f5o%2B54%2FkhRGxCoSLYwuN1AmCB2O0IlsrtD6LaOERPHDPVWXFCA%2FNnJo83%2F5SSXa7RTVsYz3b2nCKlx8gi0zwtS8UeqoNghJTJTURQrW9m&X-Amz-Signature=ec49964c4d2906b6bc6f186509a415d92f7ac297fa010a9284bae3b00975363f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQH44EIG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTKnSkV2ZICLMFBk0gTC%2F8MzrbBsml4yyOtaAd4czR4AiEAoKAK%2FIYJEbAhQw%2FUu08TfB1X6uSTVKgP%2BiDFkiyMuGoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJZu136ludg%2FwHiAHircA8zGb6xzdHzS0Zb4wpzv6r0ut93j9yG7HUXCTjkycR64q8U4AlSHiBnRsd9e9J7zF32b7H5iwTdYFQgZpsrJNgnqLK3vftXMD1cJSv1E193gFASUcUub8%2BKyYNLq5V%2BP1roORAaKUIpOoP9CTeTm0qR1RooMC5xLGzH4LAH%2FTBTM8RFxcGWhNsLsFb0LyK%2B4mRG3qIwNOAHZXagwQwlTZN9UbcGq7zYNzAX4a%2Bysi3dsAp8fG04xVhx2l2iJe4dyTzzc0vQfHyatoVUPyICam4pyRU%2BWIpD%2BNeM5HE2iPQwXfD9zpxUleZKl%2BEahRc8Rwfd9hOtu49uMTVEV9KW%2FdpwY6wVnNy8GPC739z%2BILUgbT9a6X20vyVnTpwY9LZSwfMurFgZGdZPYajGKLmg50Nz9ohqiE2yO8W20PFMga13faL1Hc9bJYyhP6jGX9dkzf%2FgyUOBPL6ba6UJB8bVQfMGEoCmxQ0v7GthAhXOzZP%2Bv9F0RM%2FxBZtLocYlT0nD2zKZScYnLOwRlrNTljUD%2F4Ig%2FXESj5y6VmLyZ22QE9ZlXPcjiuI1aeVF6RK1zHK%2FVeEgp9mWI3%2F4VnwStZdAdqcaWeN6I6r9OUSeEwdSUcfPUdvuvxXf6LfrLgYB3MKv%2ByL8GOqUBmvpjyVnTmByBizwIQqLxamos2AUaHJ%2FF0Bs%2BceywnDWs%2BFEj4G5BP2sxw4j54%2B9kIi0kqpJlPtMwuHURhxf4I511axWMKAQDUED6ZnVsyEZ4uA9qEC0f5o%2B54%2FkhRGxCoSLYwuN1AmCB2O0IlsrtD6LaOERPHDPVWXFCA%2FNnJo83%2F5SSXa7RTVsYz3b2nCKlx8gi0zwtS8UeqoNghJTJTURQrW9m&X-Amz-Signature=5e71cf5e3d0b50ac0d83cc69f1564a94ee1156f5f3f35623f853d835140a9222&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQH44EIG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTKnSkV2ZICLMFBk0gTC%2F8MzrbBsml4yyOtaAd4czR4AiEAoKAK%2FIYJEbAhQw%2FUu08TfB1X6uSTVKgP%2BiDFkiyMuGoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJZu136ludg%2FwHiAHircA8zGb6xzdHzS0Zb4wpzv6r0ut93j9yG7HUXCTjkycR64q8U4AlSHiBnRsd9e9J7zF32b7H5iwTdYFQgZpsrJNgnqLK3vftXMD1cJSv1E193gFASUcUub8%2BKyYNLq5V%2BP1roORAaKUIpOoP9CTeTm0qR1RooMC5xLGzH4LAH%2FTBTM8RFxcGWhNsLsFb0LyK%2B4mRG3qIwNOAHZXagwQwlTZN9UbcGq7zYNzAX4a%2Bysi3dsAp8fG04xVhx2l2iJe4dyTzzc0vQfHyatoVUPyICam4pyRU%2BWIpD%2BNeM5HE2iPQwXfD9zpxUleZKl%2BEahRc8Rwfd9hOtu49uMTVEV9KW%2FdpwY6wVnNy8GPC739z%2BILUgbT9a6X20vyVnTpwY9LZSwfMurFgZGdZPYajGKLmg50Nz9ohqiE2yO8W20PFMga13faL1Hc9bJYyhP6jGX9dkzf%2FgyUOBPL6ba6UJB8bVQfMGEoCmxQ0v7GthAhXOzZP%2Bv9F0RM%2FxBZtLocYlT0nD2zKZScYnLOwRlrNTljUD%2F4Ig%2FXESj5y6VmLyZ22QE9ZlXPcjiuI1aeVF6RK1zHK%2FVeEgp9mWI3%2F4VnwStZdAdqcaWeN6I6r9OUSeEwdSUcfPUdvuvxXf6LfrLgYB3MKv%2ByL8GOqUBmvpjyVnTmByBizwIQqLxamos2AUaHJ%2FF0Bs%2BceywnDWs%2BFEj4G5BP2sxw4j54%2B9kIi0kqpJlPtMwuHURhxf4I511axWMKAQDUED6ZnVsyEZ4uA9qEC0f5o%2B54%2FkhRGxCoSLYwuN1AmCB2O0IlsrtD6LaOERPHDPVWXFCA%2FNnJo83%2F5SSXa7RTVsYz3b2nCKlx8gi0zwtS8UeqoNghJTJTURQrW9m&X-Amz-Signature=b0af96dc281a0c724736e2493f783712af81112d17270b74dcf9079837458926&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
