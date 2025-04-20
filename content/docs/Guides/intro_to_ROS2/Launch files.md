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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUBGOUA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDfykfoug6kmzYJAwAMtkItqAmghEzsI4N5NIjTILbdfwIgcq1HGYemVnHTTHAaMtcToU3xSdfdzNBINgUrWyQJdDsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADSvqbw9aeYW9JmlyrcA%2BF2S7dqTD6f4BF%2BTxc%2FtnzMSDMrGvejqFxxKZNj6jZcm4p2F%2FYSmNcdGBOjNunQu65ChrMVKmxo56R3sjM6qH0bDqDYRdEx8bmcP4ZUJF4bQe7Nv24Qk%2F5dN7bowiitTHqMAMXlDYpI%2FjYt7QKYjYntAITNafLZw%2F99t%2F4W%2B6Y1zd%2FPw3%2BUq8IlNXEJF4NKy4rl36x4176Til1gkP4fExdoIWwUd6TqSVtzTFEhuacpZ0kI3AmMKuZek3X32bbT4iuPHit0LTSFDVgdWXFNKe59wI8rJ7lnlsSEW7lPuJ%2FuCVo81GY0EPGNUQt19VFuAAFoclWaSLvukrdFk5NXq3BS5nG%2Fgl%2F1HMWt1pks1SHMdmamuVpOP7z76im%2FZkYDGyFAb1N4uKNBugRpCpltaZ9vUn%2B%2F3sTYj1PhVti3vQHr1IklQznEiPmT6tMVcF47TbbTNr0Xb1vsQeXCsBiTy49doKKgD0hfMi%2FHsnZZn7t%2Fe93l%2FMhd574VDEiB5a4FJCh0ILUaE76rfuuni0hbc%2BQvDI32Z0aCU%2F5xuJQx6i6x%2BvWmFaSyh6FpGZOhMyxcAdL1UTDyTxSorlwuTvjCXGF2IirWQTbRX8fybDAbbHRycEQjSw6e8EOR0ftwMJumlMAGOqUBReWucNlXehJ3lDewVp%2FRMlPWdFgvZvreG%2B2LOUNSYqgPKr%2FetTBibtdWpuQhhj6QVg%2Fo2bWUw9LVbdt9v9zqhIop7OVwzY%2BzLhmwGiB6kVZSwJlqGahy%2FkoSmrbwpainoGGBZTRBQHXFTUt2X%2FUp36Y%2FuYqLyxRDtuMQzJIqv25csgmbruJsFXq%2FMsK6mjdWfFTOy1bInow9Jd8S%2B5dxpiA0DXS%2F&X-Amz-Signature=b6d1d6b581a72b2579e6a230b2c1c0829a99a9b421328b719d53ed2803987cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUBGOUA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDfykfoug6kmzYJAwAMtkItqAmghEzsI4N5NIjTILbdfwIgcq1HGYemVnHTTHAaMtcToU3xSdfdzNBINgUrWyQJdDsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADSvqbw9aeYW9JmlyrcA%2BF2S7dqTD6f4BF%2BTxc%2FtnzMSDMrGvejqFxxKZNj6jZcm4p2F%2FYSmNcdGBOjNunQu65ChrMVKmxo56R3sjM6qH0bDqDYRdEx8bmcP4ZUJF4bQe7Nv24Qk%2F5dN7bowiitTHqMAMXlDYpI%2FjYt7QKYjYntAITNafLZw%2F99t%2F4W%2B6Y1zd%2FPw3%2BUq8IlNXEJF4NKy4rl36x4176Til1gkP4fExdoIWwUd6TqSVtzTFEhuacpZ0kI3AmMKuZek3X32bbT4iuPHit0LTSFDVgdWXFNKe59wI8rJ7lnlsSEW7lPuJ%2FuCVo81GY0EPGNUQt19VFuAAFoclWaSLvukrdFk5NXq3BS5nG%2Fgl%2F1HMWt1pks1SHMdmamuVpOP7z76im%2FZkYDGyFAb1N4uKNBugRpCpltaZ9vUn%2B%2F3sTYj1PhVti3vQHr1IklQznEiPmT6tMVcF47TbbTNr0Xb1vsQeXCsBiTy49doKKgD0hfMi%2FHsnZZn7t%2Fe93l%2FMhd574VDEiB5a4FJCh0ILUaE76rfuuni0hbc%2BQvDI32Z0aCU%2F5xuJQx6i6x%2BvWmFaSyh6FpGZOhMyxcAdL1UTDyTxSorlwuTvjCXGF2IirWQTbRX8fybDAbbHRycEQjSw6e8EOR0ftwMJumlMAGOqUBReWucNlXehJ3lDewVp%2FRMlPWdFgvZvreG%2B2LOUNSYqgPKr%2FetTBibtdWpuQhhj6QVg%2Fo2bWUw9LVbdt9v9zqhIop7OVwzY%2BzLhmwGiB6kVZSwJlqGahy%2FkoSmrbwpainoGGBZTRBQHXFTUt2X%2FUp36Y%2FuYqLyxRDtuMQzJIqv25csgmbruJsFXq%2FMsK6mjdWfFTOy1bInow9Jd8S%2B5dxpiA0DXS%2F&X-Amz-Signature=0e1616f121100bd662c921b589868c3af3ec4eedced689ffb90e9ee0cba1f1cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUBGOUA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDfykfoug6kmzYJAwAMtkItqAmghEzsI4N5NIjTILbdfwIgcq1HGYemVnHTTHAaMtcToU3xSdfdzNBINgUrWyQJdDsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADSvqbw9aeYW9JmlyrcA%2BF2S7dqTD6f4BF%2BTxc%2FtnzMSDMrGvejqFxxKZNj6jZcm4p2F%2FYSmNcdGBOjNunQu65ChrMVKmxo56R3sjM6qH0bDqDYRdEx8bmcP4ZUJF4bQe7Nv24Qk%2F5dN7bowiitTHqMAMXlDYpI%2FjYt7QKYjYntAITNafLZw%2F99t%2F4W%2B6Y1zd%2FPw3%2BUq8IlNXEJF4NKy4rl36x4176Til1gkP4fExdoIWwUd6TqSVtzTFEhuacpZ0kI3AmMKuZek3X32bbT4iuPHit0LTSFDVgdWXFNKe59wI8rJ7lnlsSEW7lPuJ%2FuCVo81GY0EPGNUQt19VFuAAFoclWaSLvukrdFk5NXq3BS5nG%2Fgl%2F1HMWt1pks1SHMdmamuVpOP7z76im%2FZkYDGyFAb1N4uKNBugRpCpltaZ9vUn%2B%2F3sTYj1PhVti3vQHr1IklQznEiPmT6tMVcF47TbbTNr0Xb1vsQeXCsBiTy49doKKgD0hfMi%2FHsnZZn7t%2Fe93l%2FMhd574VDEiB5a4FJCh0ILUaE76rfuuni0hbc%2BQvDI32Z0aCU%2F5xuJQx6i6x%2BvWmFaSyh6FpGZOhMyxcAdL1UTDyTxSorlwuTvjCXGF2IirWQTbRX8fybDAbbHRycEQjSw6e8EOR0ftwMJumlMAGOqUBReWucNlXehJ3lDewVp%2FRMlPWdFgvZvreG%2B2LOUNSYqgPKr%2FetTBibtdWpuQhhj6QVg%2Fo2bWUw9LVbdt9v9zqhIop7OVwzY%2BzLhmwGiB6kVZSwJlqGahy%2FkoSmrbwpainoGGBZTRBQHXFTUt2X%2FUp36Y%2FuYqLyxRDtuMQzJIqv25csgmbruJsFXq%2FMsK6mjdWfFTOy1bInow9Jd8S%2B5dxpiA0DXS%2F&X-Amz-Signature=0cc1e82cea54a8e89762f05fbb3f9889fbddc7b4cac7cd40d9ad95f5425e11b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
