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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERVS6JT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBWSGCyZ5Za8ZUYIz1UjPfa88ptrt7Ker1BXxibj310AiEA7v50fHvNeoepeBGoxlWKKRidrZp1O1h3DrmIPHBbqxkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfpUxFb8H%2FBkrohWircA9r9T0zs75m3VMlI%2BD%2BYw6pve%2BAugT1v1J07GMrmqMVk1TwVu0x3ePYZo7YOlMNrzbC5R0drCq4x22t9ABuIwWKlunrz4Dm2n1Ih1YuXkwpoluWNPFS65NDXYAn0zKlXEQ5WD1rwQfLO%2Fb9nLt0W96yxwWROg4AOA59MyZKll34dvNPFZbPs%2FmDHvdifHVA5d58gzmlr3fXGfJROJL8vUD81wvb9MiAwdRWs7J7aCkm8IOjM3NH%2BHbBk6T96R5HCk5OKo7veLcZuRwD0gfh%2FldTWKy05u4mK%2BcF00MKgjz1XRStlfmEh1xOuJ1fBKzeWrexKjd7D%2FA3Opsaixutjc5MQCJ6MF4qYwl1yXRUhr6d7y3BjgMXXlsUKDFdov9rA5QjlRnbFU3C%2BA9iscjYvusyDLs3roYOKlW%2BkhdS7t82iL%2FO%2BLyLtuez2QUoXTqhP3fqT5hb1tr6ARVf4FVzEf558MzFIC5%2F7Xf0BPs9WGp9h%2B3mnymcaiCgTvbWZarszxkA3mR5U0vpvuUWlTCAs8k4VXP648eEEVR8zL%2FWbgq0X9n6b2vHT%2F1kk8Qp4FiGfs5oG%2BBle%2FbfjppFqaHgrs4d%2FUA%2FIHwKtwKM%2BORzpfmSLpCbammIJ%2BsUfi995MNnMhsMGOqUBvhLFpY1B0UZ6K3S0n5%2FRg0aF%2FQGX55SWAGDpKK0jouNp%2FEr1DVhVdQgIF3NGLK52rA653wLQpAE7c8e6Y9I2lXq7bus67joZ8vUpUdTRz1ggZOik3m8R84%2FyxJidOivCWkwEH%2B6t1J5wOd%2FmSron3g4y8Co%2FTozxOcVQFo0oyQZgSJmBnU6%2FyE77vEEEkKEq4TP18mM6l5yewc0DbNeTD9Eyr%2B6N&X-Amz-Signature=8eb88530659960b594aa2a00bbca8b7193fed07ba139ea6580d5889cb2549a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERVS6JT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBWSGCyZ5Za8ZUYIz1UjPfa88ptrt7Ker1BXxibj310AiEA7v50fHvNeoepeBGoxlWKKRidrZp1O1h3DrmIPHBbqxkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfpUxFb8H%2FBkrohWircA9r9T0zs75m3VMlI%2BD%2BYw6pve%2BAugT1v1J07GMrmqMVk1TwVu0x3ePYZo7YOlMNrzbC5R0drCq4x22t9ABuIwWKlunrz4Dm2n1Ih1YuXkwpoluWNPFS65NDXYAn0zKlXEQ5WD1rwQfLO%2Fb9nLt0W96yxwWROg4AOA59MyZKll34dvNPFZbPs%2FmDHvdifHVA5d58gzmlr3fXGfJROJL8vUD81wvb9MiAwdRWs7J7aCkm8IOjM3NH%2BHbBk6T96R5HCk5OKo7veLcZuRwD0gfh%2FldTWKy05u4mK%2BcF00MKgjz1XRStlfmEh1xOuJ1fBKzeWrexKjd7D%2FA3Opsaixutjc5MQCJ6MF4qYwl1yXRUhr6d7y3BjgMXXlsUKDFdov9rA5QjlRnbFU3C%2BA9iscjYvusyDLs3roYOKlW%2BkhdS7t82iL%2FO%2BLyLtuez2QUoXTqhP3fqT5hb1tr6ARVf4FVzEf558MzFIC5%2F7Xf0BPs9WGp9h%2B3mnymcaiCgTvbWZarszxkA3mR5U0vpvuUWlTCAs8k4VXP648eEEVR8zL%2FWbgq0X9n6b2vHT%2F1kk8Qp4FiGfs5oG%2BBle%2FbfjppFqaHgrs4d%2FUA%2FIHwKtwKM%2BORzpfmSLpCbammIJ%2BsUfi995MNnMhsMGOqUBvhLFpY1B0UZ6K3S0n5%2FRg0aF%2FQGX55SWAGDpKK0jouNp%2FEr1DVhVdQgIF3NGLK52rA653wLQpAE7c8e6Y9I2lXq7bus67joZ8vUpUdTRz1ggZOik3m8R84%2FyxJidOivCWkwEH%2B6t1J5wOd%2FmSron3g4y8Co%2FTozxOcVQFo0oyQZgSJmBnU6%2FyE77vEEEkKEq4TP18mM6l5yewc0DbNeTD9Eyr%2B6N&X-Amz-Signature=0e43424fc9ba5d29483df3c74bfcef256d33e1c16fa852d4fa1fd3cbc2ca8849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERVS6JT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBWSGCyZ5Za8ZUYIz1UjPfa88ptrt7Ker1BXxibj310AiEA7v50fHvNeoepeBGoxlWKKRidrZp1O1h3DrmIPHBbqxkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfpUxFb8H%2FBkrohWircA9r9T0zs75m3VMlI%2BD%2BYw6pve%2BAugT1v1J07GMrmqMVk1TwVu0x3ePYZo7YOlMNrzbC5R0drCq4x22t9ABuIwWKlunrz4Dm2n1Ih1YuXkwpoluWNPFS65NDXYAn0zKlXEQ5WD1rwQfLO%2Fb9nLt0W96yxwWROg4AOA59MyZKll34dvNPFZbPs%2FmDHvdifHVA5d58gzmlr3fXGfJROJL8vUD81wvb9MiAwdRWs7J7aCkm8IOjM3NH%2BHbBk6T96R5HCk5OKo7veLcZuRwD0gfh%2FldTWKy05u4mK%2BcF00MKgjz1XRStlfmEh1xOuJ1fBKzeWrexKjd7D%2FA3Opsaixutjc5MQCJ6MF4qYwl1yXRUhr6d7y3BjgMXXlsUKDFdov9rA5QjlRnbFU3C%2BA9iscjYvusyDLs3roYOKlW%2BkhdS7t82iL%2FO%2BLyLtuez2QUoXTqhP3fqT5hb1tr6ARVf4FVzEf558MzFIC5%2F7Xf0BPs9WGp9h%2B3mnymcaiCgTvbWZarszxkA3mR5U0vpvuUWlTCAs8k4VXP648eEEVR8zL%2FWbgq0X9n6b2vHT%2F1kk8Qp4FiGfs5oG%2BBle%2FbfjppFqaHgrs4d%2FUA%2FIHwKtwKM%2BORzpfmSLpCbammIJ%2BsUfi995MNnMhsMGOqUBvhLFpY1B0UZ6K3S0n5%2FRg0aF%2FQGX55SWAGDpKK0jouNp%2FEr1DVhVdQgIF3NGLK52rA653wLQpAE7c8e6Y9I2lXq7bus67joZ8vUpUdTRz1ggZOik3m8R84%2FyxJidOivCWkwEH%2B6t1J5wOd%2FmSron3g4y8Co%2FTozxOcVQFo0oyQZgSJmBnU6%2FyE77vEEEkKEq4TP18mM6l5yewc0DbNeTD9Eyr%2B6N&X-Amz-Signature=11e198c35a98ed5f36ed7ec5891ee5b58b2cef6341ba9fdd6b988df086c3dd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
