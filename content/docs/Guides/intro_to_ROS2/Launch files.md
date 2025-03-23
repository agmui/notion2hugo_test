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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZESJWU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD5LoiZF2%2BNCYOvd0JmOdyDMo2S2k395wm%2FvdtUEhu9ugIgMrxejyUX77M2HFg0orHSWUm7LncIIyxSIqp6hzwt%2FxUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi5RM%2BW1goit9ispyrcA2AgV0Qc686OPnk636Cx7aiV2ozHQyS62SD%2FJir61zOFk8RHGLkouK%2Fto9LdEY6U8MuWRmVDDB0wzzF2B5lBWpEyOoSnZPdn1HzcVEWACcRz04x5EstMkTrZkKoANHKljiwF40mAcY5kyMnWNjDvvlNFP9vTvQObCX%2BLehzY9xpimlXJO%2BuKC211CUgiskEK8%2BPD2RFhtkslPB3%2Bxz8BymU2S5r%2FW6j5HIbpzED%2FRia83VR9PBnKE3jfffmxbeJNqGNjVcM0n1Y1XT%2FIRgz6UE0G2jqr6uPG0E%2FXLklKypIaUru6VhF7t577HqSel3SnYLUwrrqplV3XLvkpBqaNTkxEqcIKvWEMOirlLhepcFFDLRrUNap%2BXhQXrB6ArOoUH7fsMUwDnrEFE5J8xLa6atVazoIdHy1tXFa0MJh30m%2B9rYly6aa5f02PZTiqdVVN4Q%2BB1tbmO65AiQfv9u0h%2BtiP4GuECoQ7xY63FiMfVOtIxugOP5XPWn5cmtzOa996C1z4diASb38dAgohVuNlMZFzIe2CYsAn4F2PJBinmVVLemXqOlGE%2FuYpr5wSsaHjjkG%2BRNoF%2BKaRpQcqApQXUEZxkokn82r9Nk1cK4kMs6LL8LnkMKJ0bEyQqO%2BpMLnj%2Fb4GOqUB3zSGNXLe7pOmD75cmjOdFKbQkiT0c1y82wzSJPFkFbarBfkCHbV2F95MZRiubpv6ytZHLruMr59LF53V4N7p8eBvxFXRT6853z7YNm9a5bRdxVQEJdxBEMvZUTbgDFfwtjy%2FW2Bj5VftfqOx2O5sISGrtAMgNuZFpupFuzdFQHR46Wk22Lws2aHZgTnAqkiwGMwBrBDC%2FPjERIQ48ovyvcr0yR%2Fr&X-Amz-Signature=f06ebfa680ce7b5162a8949e1469e653097268d10499a4b93bbdbc4b8bfc39c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZESJWU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD5LoiZF2%2BNCYOvd0JmOdyDMo2S2k395wm%2FvdtUEhu9ugIgMrxejyUX77M2HFg0orHSWUm7LncIIyxSIqp6hzwt%2FxUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi5RM%2BW1goit9ispyrcA2AgV0Qc686OPnk636Cx7aiV2ozHQyS62SD%2FJir61zOFk8RHGLkouK%2Fto9LdEY6U8MuWRmVDDB0wzzF2B5lBWpEyOoSnZPdn1HzcVEWACcRz04x5EstMkTrZkKoANHKljiwF40mAcY5kyMnWNjDvvlNFP9vTvQObCX%2BLehzY9xpimlXJO%2BuKC211CUgiskEK8%2BPD2RFhtkslPB3%2Bxz8BymU2S5r%2FW6j5HIbpzED%2FRia83VR9PBnKE3jfffmxbeJNqGNjVcM0n1Y1XT%2FIRgz6UE0G2jqr6uPG0E%2FXLklKypIaUru6VhF7t577HqSel3SnYLUwrrqplV3XLvkpBqaNTkxEqcIKvWEMOirlLhepcFFDLRrUNap%2BXhQXrB6ArOoUH7fsMUwDnrEFE5J8xLa6atVazoIdHy1tXFa0MJh30m%2B9rYly6aa5f02PZTiqdVVN4Q%2BB1tbmO65AiQfv9u0h%2BtiP4GuECoQ7xY63FiMfVOtIxugOP5XPWn5cmtzOa996C1z4diASb38dAgohVuNlMZFzIe2CYsAn4F2PJBinmVVLemXqOlGE%2FuYpr5wSsaHjjkG%2BRNoF%2BKaRpQcqApQXUEZxkokn82r9Nk1cK4kMs6LL8LnkMKJ0bEyQqO%2BpMLnj%2Fb4GOqUB3zSGNXLe7pOmD75cmjOdFKbQkiT0c1y82wzSJPFkFbarBfkCHbV2F95MZRiubpv6ytZHLruMr59LF53V4N7p8eBvxFXRT6853z7YNm9a5bRdxVQEJdxBEMvZUTbgDFfwtjy%2FW2Bj5VftfqOx2O5sISGrtAMgNuZFpupFuzdFQHR46Wk22Lws2aHZgTnAqkiwGMwBrBDC%2FPjERIQ48ovyvcr0yR%2Fr&X-Amz-Signature=03e428cb1d2919d63919634dd6df65f61d1a332e99cc177354f0949f384844fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZESJWU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD5LoiZF2%2BNCYOvd0JmOdyDMo2S2k395wm%2FvdtUEhu9ugIgMrxejyUX77M2HFg0orHSWUm7LncIIyxSIqp6hzwt%2FxUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi5RM%2BW1goit9ispyrcA2AgV0Qc686OPnk636Cx7aiV2ozHQyS62SD%2FJir61zOFk8RHGLkouK%2Fto9LdEY6U8MuWRmVDDB0wzzF2B5lBWpEyOoSnZPdn1HzcVEWACcRz04x5EstMkTrZkKoANHKljiwF40mAcY5kyMnWNjDvvlNFP9vTvQObCX%2BLehzY9xpimlXJO%2BuKC211CUgiskEK8%2BPD2RFhtkslPB3%2Bxz8BymU2S5r%2FW6j5HIbpzED%2FRia83VR9PBnKE3jfffmxbeJNqGNjVcM0n1Y1XT%2FIRgz6UE0G2jqr6uPG0E%2FXLklKypIaUru6VhF7t577HqSel3SnYLUwrrqplV3XLvkpBqaNTkxEqcIKvWEMOirlLhepcFFDLRrUNap%2BXhQXrB6ArOoUH7fsMUwDnrEFE5J8xLa6atVazoIdHy1tXFa0MJh30m%2B9rYly6aa5f02PZTiqdVVN4Q%2BB1tbmO65AiQfv9u0h%2BtiP4GuECoQ7xY63FiMfVOtIxugOP5XPWn5cmtzOa996C1z4diASb38dAgohVuNlMZFzIe2CYsAn4F2PJBinmVVLemXqOlGE%2FuYpr5wSsaHjjkG%2BRNoF%2BKaRpQcqApQXUEZxkokn82r9Nk1cK4kMs6LL8LnkMKJ0bEyQqO%2BpMLnj%2Fb4GOqUB3zSGNXLe7pOmD75cmjOdFKbQkiT0c1y82wzSJPFkFbarBfkCHbV2F95MZRiubpv6ytZHLruMr59LF53V4N7p8eBvxFXRT6853z7YNm9a5bRdxVQEJdxBEMvZUTbgDFfwtjy%2FW2Bj5VftfqOx2O5sISGrtAMgNuZFpupFuzdFQHR46Wk22Lws2aHZgTnAqkiwGMwBrBDC%2FPjERIQ48ovyvcr0yR%2Fr&X-Amz-Signature=09c8364e5dc6d177f562d89b27de4da6202a3b265bcde6659f4edd7a92b11bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
