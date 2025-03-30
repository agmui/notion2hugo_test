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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW3YZ2X7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICcaqLHjevwq%2BnzFp5WXOaZSpH44b%2BvmnmSgc5U2ETexAiBERekUCYXLpCsFazc5qpvSfH2GJryr0qd12MV08SP26SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2y09p4X1ChdsDwzKtwDdo23FfDlrMD8x9YOwmhmWofvpfmfQcAXESCscpY9hmi7Q77W9a29wnEZinxbuYQfX5Xed9DRPiXCmPbTsTLyTCu3xhWO1%2F8FwZG3wFLlIhPScUvEpvCKIr6ZCKl%2FiFPARn8G46oPnHnaXizbyOGU3y8Ozt76wSBI%2FvA3uMUytbzw14ajfyGqAz7N7Bazq0ncUVnk%2B3d4SO03XKFnt%2F9Re3U0PblaWiNCRBdiY2%2F9UefYdUd6%2BG%2B7KzamFYwP7BBxw94DGDT69wKXpIrtrMP5Yr53Df3wpuqNeRkgFpRjd%2BmEW%2Fm2aeV3RXRSMS%2Fy1kVa%2FH22K%2BLBJjbFRfmUxn6FK5zMbz8BQ5Qhwj0dIbJ5T0mNLtonnYOVYSztxo8dW12OFhs5XPUbDw3o07TAwkuNyk1IHAjkenYobT9yW13KNYfYWDdigj55yLyGSZtUeO%2BkOxqPEXFNAju9KT2qOJit2w4N%2FR0jbK4SkxrTda3Jk8xuWWrJNHeaSLRrgnCfufnxiGwBCUqMAveFOZ2SSWLiQxGml85g%2B93kLdVE1CA%2BtZSm2eY46%2BA9lQDX6xRSGdo1CPKk5gzJjg7REUpronqXMlYyCpQricD%2BXWJQhVoLA6XGZR%2BxkVK63QzAyGgwwv6hvwY6pgGdPRvspIgBUE2oJeYvb1bedESsn67Gx4ym40w%2FE4WXZsmi88IQhaYYUwI37KvvFccBgBq0%2BUsB8oBxtEnebu3Fc9HoMp3J4bwBiHiSYyj3K1QaT6yXWnfE6oUx0JQTevr6U01ZcPK%2FECuytjPUwXkEL2SKxvwce%2FqFSd%2B64BtCDJsP4LqhBku39eDUksO4SD1mAUqzI9AcFEMy0PvTmYMUuguTCEaF&X-Amz-Signature=69309f341a85a5d65ab95c588934295270f461d74575d967525d894d2b1f6241&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW3YZ2X7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICcaqLHjevwq%2BnzFp5WXOaZSpH44b%2BvmnmSgc5U2ETexAiBERekUCYXLpCsFazc5qpvSfH2GJryr0qd12MV08SP26SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2y09p4X1ChdsDwzKtwDdo23FfDlrMD8x9YOwmhmWofvpfmfQcAXESCscpY9hmi7Q77W9a29wnEZinxbuYQfX5Xed9DRPiXCmPbTsTLyTCu3xhWO1%2F8FwZG3wFLlIhPScUvEpvCKIr6ZCKl%2FiFPARn8G46oPnHnaXizbyOGU3y8Ozt76wSBI%2FvA3uMUytbzw14ajfyGqAz7N7Bazq0ncUVnk%2B3d4SO03XKFnt%2F9Re3U0PblaWiNCRBdiY2%2F9UefYdUd6%2BG%2B7KzamFYwP7BBxw94DGDT69wKXpIrtrMP5Yr53Df3wpuqNeRkgFpRjd%2BmEW%2Fm2aeV3RXRSMS%2Fy1kVa%2FH22K%2BLBJjbFRfmUxn6FK5zMbz8BQ5Qhwj0dIbJ5T0mNLtonnYOVYSztxo8dW12OFhs5XPUbDw3o07TAwkuNyk1IHAjkenYobT9yW13KNYfYWDdigj55yLyGSZtUeO%2BkOxqPEXFNAju9KT2qOJit2w4N%2FR0jbK4SkxrTda3Jk8xuWWrJNHeaSLRrgnCfufnxiGwBCUqMAveFOZ2SSWLiQxGml85g%2B93kLdVE1CA%2BtZSm2eY46%2BA9lQDX6xRSGdo1CPKk5gzJjg7REUpronqXMlYyCpQricD%2BXWJQhVoLA6XGZR%2BxkVK63QzAyGgwwv6hvwY6pgGdPRvspIgBUE2oJeYvb1bedESsn67Gx4ym40w%2FE4WXZsmi88IQhaYYUwI37KvvFccBgBq0%2BUsB8oBxtEnebu3Fc9HoMp3J4bwBiHiSYyj3K1QaT6yXWnfE6oUx0JQTevr6U01ZcPK%2FECuytjPUwXkEL2SKxvwce%2FqFSd%2B64BtCDJsP4LqhBku39eDUksO4SD1mAUqzI9AcFEMy0PvTmYMUuguTCEaF&X-Amz-Signature=779deb0d02f9f4a243ffb69bb342c48670266ed37bf379b7a79c07a289ff19ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW3YZ2X7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICcaqLHjevwq%2BnzFp5WXOaZSpH44b%2BvmnmSgc5U2ETexAiBERekUCYXLpCsFazc5qpvSfH2GJryr0qd12MV08SP26SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2y09p4X1ChdsDwzKtwDdo23FfDlrMD8x9YOwmhmWofvpfmfQcAXESCscpY9hmi7Q77W9a29wnEZinxbuYQfX5Xed9DRPiXCmPbTsTLyTCu3xhWO1%2F8FwZG3wFLlIhPScUvEpvCKIr6ZCKl%2FiFPARn8G46oPnHnaXizbyOGU3y8Ozt76wSBI%2FvA3uMUytbzw14ajfyGqAz7N7Bazq0ncUVnk%2B3d4SO03XKFnt%2F9Re3U0PblaWiNCRBdiY2%2F9UefYdUd6%2BG%2B7KzamFYwP7BBxw94DGDT69wKXpIrtrMP5Yr53Df3wpuqNeRkgFpRjd%2BmEW%2Fm2aeV3RXRSMS%2Fy1kVa%2FH22K%2BLBJjbFRfmUxn6FK5zMbz8BQ5Qhwj0dIbJ5T0mNLtonnYOVYSztxo8dW12OFhs5XPUbDw3o07TAwkuNyk1IHAjkenYobT9yW13KNYfYWDdigj55yLyGSZtUeO%2BkOxqPEXFNAju9KT2qOJit2w4N%2FR0jbK4SkxrTda3Jk8xuWWrJNHeaSLRrgnCfufnxiGwBCUqMAveFOZ2SSWLiQxGml85g%2B93kLdVE1CA%2BtZSm2eY46%2BA9lQDX6xRSGdo1CPKk5gzJjg7REUpronqXMlYyCpQricD%2BXWJQhVoLA6XGZR%2BxkVK63QzAyGgwwv6hvwY6pgGdPRvspIgBUE2oJeYvb1bedESsn67Gx4ym40w%2FE4WXZsmi88IQhaYYUwI37KvvFccBgBq0%2BUsB8oBxtEnebu3Fc9HoMp3J4bwBiHiSYyj3K1QaT6yXWnfE6oUx0JQTevr6U01ZcPK%2FECuytjPUwXkEL2SKxvwce%2FqFSd%2B64BtCDJsP4LqhBku39eDUksO4SD1mAUqzI9AcFEMy0PvTmYMUuguTCEaF&X-Amz-Signature=a86492bf190ba59632c13ae1b1cad763928917b90db17b4665a313d802223396&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
