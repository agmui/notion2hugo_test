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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYALDAW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY1ZrxKQjoB6Xt%2FAB%2BnElye6lrngInd%2Fcr3nY%2F%2F2j52wIgKeOUfiYfh0JrFsdsZ75szS%2Bam%2Fxq31gPdXeTVdd3RgUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FY59dmQ9UjELE5OCrcA%2FBVK7SkAvmYf9KdNmFz7qB80hK2oxMV9RPK8Fhki%2BgmWpS5cdRamKAEE%2BZ93TcEub2MQDVWhEATBSZwwNIjQWGnlkJQfzMdpwc%2BuPR%2BQNiKcVxT8HF5ueisyIosXtJev9%2BxgWcy%2BWznVVqT8H%2BLFspTO9N92IKTsUhFOllKcMvdOtjis96Olo8ZJH4GuNZk3JehPwddt79Bt21gql1hiwMRsMpRnBF85QuDyT%2B3oMIXK1VxgAaREEqM2fvhRMxOj7Uwq0K8SW%2BBNNGkhm4koLezGs0wZSHqxooJwleFmiNXnJtKPbLXZ%2BWDH6aBKg1s2vAVe3SaS8DlAd3Jm1XRnR2O%2BkJi2YUs0VFIMmsnYqR%2FP0yY8HfYv3QDI0ZK0qj%2F%2FUkhlSRWpT5ek0g4%2F8HvjZwAGoiADQto1pDjCLihjd0G4OFdDYAZDFZp2V0XD93pLR8oR2fs2X%2F6jGm837d7wo0hGeIcQ8tBIsVL7DJKXoXNPUm6J0mVsEsPOE6rycfBZ4KhZrLvDUF2Pe0h%2FR68v03W942UB48ffn78eWB4jWAwEQ32Q9bauX7wN2hTu0X%2BGozuxq8P2%2FYciRpTgpv45%2BiEQh1tEdIM%2BYAl%2BjJyPK7GbppsmM%2FRsfDR11DEMLWI0L8GOqUBBPiz%2FcWIaWMCJ%2Ffpo%2F90nQnf%2FT1Z9xyEnK4h2scpsdOFcFW1lae8nuQi8O%2B88JGr9iHvz%2BtaZJ8%2FQfoP7EExurklSGrg9V%2FBn5E%2BpqVbcXXKayDikXHqazUjcYGl9%2B4843yCgGmP43Cao4jLWBWiF9iGyBX%2Br7Qa9Sk0YeBVKH%2BIGords2siuCT88mRksBR7ig1f8y%2B3TRRmNvOkX4uyM4Hmjkk4&X-Amz-Signature=ba8e843a1ebd62d6dea5c2378a9fc348f388b257138b378345194f8de443826d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYALDAW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY1ZrxKQjoB6Xt%2FAB%2BnElye6lrngInd%2Fcr3nY%2F%2F2j52wIgKeOUfiYfh0JrFsdsZ75szS%2Bam%2Fxq31gPdXeTVdd3RgUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FY59dmQ9UjELE5OCrcA%2FBVK7SkAvmYf9KdNmFz7qB80hK2oxMV9RPK8Fhki%2BgmWpS5cdRamKAEE%2BZ93TcEub2MQDVWhEATBSZwwNIjQWGnlkJQfzMdpwc%2BuPR%2BQNiKcVxT8HF5ueisyIosXtJev9%2BxgWcy%2BWznVVqT8H%2BLFspTO9N92IKTsUhFOllKcMvdOtjis96Olo8ZJH4GuNZk3JehPwddt79Bt21gql1hiwMRsMpRnBF85QuDyT%2B3oMIXK1VxgAaREEqM2fvhRMxOj7Uwq0K8SW%2BBNNGkhm4koLezGs0wZSHqxooJwleFmiNXnJtKPbLXZ%2BWDH6aBKg1s2vAVe3SaS8DlAd3Jm1XRnR2O%2BkJi2YUs0VFIMmsnYqR%2FP0yY8HfYv3QDI0ZK0qj%2F%2FUkhlSRWpT5ek0g4%2F8HvjZwAGoiADQto1pDjCLihjd0G4OFdDYAZDFZp2V0XD93pLR8oR2fs2X%2F6jGm837d7wo0hGeIcQ8tBIsVL7DJKXoXNPUm6J0mVsEsPOE6rycfBZ4KhZrLvDUF2Pe0h%2FR68v03W942UB48ffn78eWB4jWAwEQ32Q9bauX7wN2hTu0X%2BGozuxq8P2%2FYciRpTgpv45%2BiEQh1tEdIM%2BYAl%2BjJyPK7GbppsmM%2FRsfDR11DEMLWI0L8GOqUBBPiz%2FcWIaWMCJ%2Ffpo%2F90nQnf%2FT1Z9xyEnK4h2scpsdOFcFW1lae8nuQi8O%2B88JGr9iHvz%2BtaZJ8%2FQfoP7EExurklSGrg9V%2FBn5E%2BpqVbcXXKayDikXHqazUjcYGl9%2B4843yCgGmP43Cao4jLWBWiF9iGyBX%2Br7Qa9Sk0YeBVKH%2BIGords2siuCT88mRksBR7ig1f8y%2B3TRRmNvOkX4uyM4Hmjkk4&X-Amz-Signature=c3cc19b4552b3ae09262fe6d2e805d9277fb97b3732e54a8cf8249fa12296219&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYALDAW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY1ZrxKQjoB6Xt%2FAB%2BnElye6lrngInd%2Fcr3nY%2F%2F2j52wIgKeOUfiYfh0JrFsdsZ75szS%2Bam%2Fxq31gPdXeTVdd3RgUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FY59dmQ9UjELE5OCrcA%2FBVK7SkAvmYf9KdNmFz7qB80hK2oxMV9RPK8Fhki%2BgmWpS5cdRamKAEE%2BZ93TcEub2MQDVWhEATBSZwwNIjQWGnlkJQfzMdpwc%2BuPR%2BQNiKcVxT8HF5ueisyIosXtJev9%2BxgWcy%2BWznVVqT8H%2BLFspTO9N92IKTsUhFOllKcMvdOtjis96Olo8ZJH4GuNZk3JehPwddt79Bt21gql1hiwMRsMpRnBF85QuDyT%2B3oMIXK1VxgAaREEqM2fvhRMxOj7Uwq0K8SW%2BBNNGkhm4koLezGs0wZSHqxooJwleFmiNXnJtKPbLXZ%2BWDH6aBKg1s2vAVe3SaS8DlAd3Jm1XRnR2O%2BkJi2YUs0VFIMmsnYqR%2FP0yY8HfYv3QDI0ZK0qj%2F%2FUkhlSRWpT5ek0g4%2F8HvjZwAGoiADQto1pDjCLihjd0G4OFdDYAZDFZp2V0XD93pLR8oR2fs2X%2F6jGm837d7wo0hGeIcQ8tBIsVL7DJKXoXNPUm6J0mVsEsPOE6rycfBZ4KhZrLvDUF2Pe0h%2FR68v03W942UB48ffn78eWB4jWAwEQ32Q9bauX7wN2hTu0X%2BGozuxq8P2%2FYciRpTgpv45%2BiEQh1tEdIM%2BYAl%2BjJyPK7GbppsmM%2FRsfDR11DEMLWI0L8GOqUBBPiz%2FcWIaWMCJ%2Ffpo%2F90nQnf%2FT1Z9xyEnK4h2scpsdOFcFW1lae8nuQi8O%2B88JGr9iHvz%2BtaZJ8%2FQfoP7EExurklSGrg9V%2FBn5E%2BpqVbcXXKayDikXHqazUjcYGl9%2B4843yCgGmP43Cao4jLWBWiF9iGyBX%2Br7Qa9Sk0YeBVKH%2BIGords2siuCT88mRksBR7ig1f8y%2B3TRRmNvOkX4uyM4Hmjkk4&X-Amz-Signature=cacd437e63f1339e570f33f68fc0abe2c9e97618ccb860b669e29c9d946ec01e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
