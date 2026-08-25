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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDEYSF5%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHO%2B1FUn4RHkFLgEZitXbtxraSTWxMysNCs1BEAX5dFBAiAH5gp%2B7ITkdHU8mdKXs3ET%2BtOIn%2Bnw2hH1Uo6Ce8TQDCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfjKBtlwv1MAaxGPKtwD0z%2BeY6qLEldOPaWjKkk%2FJVt9E6TGqnVqmJNZ1K6NydCLRERE%2FxPNPEtpjNo7fhI4dzHBV4YkfdO2MI8EQsM1tS4zZFkL2rQmyxIZSCWel5yR3Q73fAj1fmJ9YQA4VKvnMPVAvlGUKFPj5CltH3vVzwKyjTQxu94femekZbp6GfWUIBRh1yDLlbmb%2F4I8MB%2BSEKGMrl5%2Bw1KlVTonyKN7aKQGo5QmEJ5KipnRxK03yL6JIgGPN1slGrwRGFcYAaiWFH%2Bop7pogezMlz8orGXd88ybA82mApoLOS5LsGVXz8zkx6f4%2BPwv512czHBlxjLVPRExTZ0EzamxhBKn5XgKMDWaFgcZ%2B8TRJbnY%2BW09uxxNtDrUW4r8vaXCcL47Vw65%2BRCw6m%2F4mR7EEPS0nZkiYu4hHdb6Y2CJhFtxLtAM1%2F12OBMVnB3dLUWhQl9ZoCVJAYsOmeImEDCDcDkAFKrg1xhePdEWSQoj2sXId9dmhBaoX3aRLtqtWRq087DLu0k0RheZLXdVtaStJBwJVWMkrvXgWoKyY%2BJAvkRtgKrGDfCzaCdc6pR46YypMWY1%2F%2BJdXhwdvUIzh0SYWo%2BUfk9C23Bb158ebZY8bK8DPwptXzHzCUkzEuQN1EZFFQowwNSz1AY6pgHElNWWygJOH3MMzy78FW8AbjyPXxiyUQjvoOZZ0XFsfCOEDvm1IR0ObicAbgkdt8lRCQcunfMtc63IREB3i9%2BbscwoJXCBK0ws58KT%2B1TVdege3wQEzjdImt75%2BEssxiLGP79jE8VpxwZR%2BN0vUPhIvFcF5EhSlRuWezS1XaGKcLW%2FCYvTFrWinWCjtLB8lP2o%2FI%2BawlaNIJJ6iZ6JAyUlrs30m%2BLB&X-Amz-Signature=981b817b65fae653e3f28b78202a562d705db3f56f731669a0437affbda29c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDEYSF5%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHO%2B1FUn4RHkFLgEZitXbtxraSTWxMysNCs1BEAX5dFBAiAH5gp%2B7ITkdHU8mdKXs3ET%2BtOIn%2Bnw2hH1Uo6Ce8TQDCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfjKBtlwv1MAaxGPKtwD0z%2BeY6qLEldOPaWjKkk%2FJVt9E6TGqnVqmJNZ1K6NydCLRERE%2FxPNPEtpjNo7fhI4dzHBV4YkfdO2MI8EQsM1tS4zZFkL2rQmyxIZSCWel5yR3Q73fAj1fmJ9YQA4VKvnMPVAvlGUKFPj5CltH3vVzwKyjTQxu94femekZbp6GfWUIBRh1yDLlbmb%2F4I8MB%2BSEKGMrl5%2Bw1KlVTonyKN7aKQGo5QmEJ5KipnRxK03yL6JIgGPN1slGrwRGFcYAaiWFH%2Bop7pogezMlz8orGXd88ybA82mApoLOS5LsGVXz8zkx6f4%2BPwv512czHBlxjLVPRExTZ0EzamxhBKn5XgKMDWaFgcZ%2B8TRJbnY%2BW09uxxNtDrUW4r8vaXCcL47Vw65%2BRCw6m%2F4mR7EEPS0nZkiYu4hHdb6Y2CJhFtxLtAM1%2F12OBMVnB3dLUWhQl9ZoCVJAYsOmeImEDCDcDkAFKrg1xhePdEWSQoj2sXId9dmhBaoX3aRLtqtWRq087DLu0k0RheZLXdVtaStJBwJVWMkrvXgWoKyY%2BJAvkRtgKrGDfCzaCdc6pR46YypMWY1%2F%2BJdXhwdvUIzh0SYWo%2BUfk9C23Bb158ebZY8bK8DPwptXzHzCUkzEuQN1EZFFQowwNSz1AY6pgHElNWWygJOH3MMzy78FW8AbjyPXxiyUQjvoOZZ0XFsfCOEDvm1IR0ObicAbgkdt8lRCQcunfMtc63IREB3i9%2BbscwoJXCBK0ws58KT%2B1TVdege3wQEzjdImt75%2BEssxiLGP79jE8VpxwZR%2BN0vUPhIvFcF5EhSlRuWezS1XaGKcLW%2FCYvTFrWinWCjtLB8lP2o%2FI%2BawlaNIJJ6iZ6JAyUlrs30m%2BLB&X-Amz-Signature=29370e50f98bb288ef0b10a99e32f6d431b6460c0659510d3ae1e6133737e99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDEYSF5%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHO%2B1FUn4RHkFLgEZitXbtxraSTWxMysNCs1BEAX5dFBAiAH5gp%2B7ITkdHU8mdKXs3ET%2BtOIn%2Bnw2hH1Uo6Ce8TQDCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfjKBtlwv1MAaxGPKtwD0z%2BeY6qLEldOPaWjKkk%2FJVt9E6TGqnVqmJNZ1K6NydCLRERE%2FxPNPEtpjNo7fhI4dzHBV4YkfdO2MI8EQsM1tS4zZFkL2rQmyxIZSCWel5yR3Q73fAj1fmJ9YQA4VKvnMPVAvlGUKFPj5CltH3vVzwKyjTQxu94femekZbp6GfWUIBRh1yDLlbmb%2F4I8MB%2BSEKGMrl5%2Bw1KlVTonyKN7aKQGo5QmEJ5KipnRxK03yL6JIgGPN1slGrwRGFcYAaiWFH%2Bop7pogezMlz8orGXd88ybA82mApoLOS5LsGVXz8zkx6f4%2BPwv512czHBlxjLVPRExTZ0EzamxhBKn5XgKMDWaFgcZ%2B8TRJbnY%2BW09uxxNtDrUW4r8vaXCcL47Vw65%2BRCw6m%2F4mR7EEPS0nZkiYu4hHdb6Y2CJhFtxLtAM1%2F12OBMVnB3dLUWhQl9ZoCVJAYsOmeImEDCDcDkAFKrg1xhePdEWSQoj2sXId9dmhBaoX3aRLtqtWRq087DLu0k0RheZLXdVtaStJBwJVWMkrvXgWoKyY%2BJAvkRtgKrGDfCzaCdc6pR46YypMWY1%2F%2BJdXhwdvUIzh0SYWo%2BUfk9C23Bb158ebZY8bK8DPwptXzHzCUkzEuQN1EZFFQowwNSz1AY6pgHElNWWygJOH3MMzy78FW8AbjyPXxiyUQjvoOZZ0XFsfCOEDvm1IR0ObicAbgkdt8lRCQcunfMtc63IREB3i9%2BbscwoJXCBK0ws58KT%2B1TVdege3wQEzjdImt75%2BEssxiLGP79jE8VpxwZR%2BN0vUPhIvFcF5EhSlRuWezS1XaGKcLW%2FCYvTFrWinWCjtLB8lP2o%2FI%2BawlaNIJJ6iZ6JAyUlrs30m%2BLB&X-Amz-Signature=7112d2c7ad90d86d4dceaf16e8d5d123574b602ef30f8bbb940443c7002c828c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
