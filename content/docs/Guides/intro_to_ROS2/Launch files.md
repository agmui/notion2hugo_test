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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=62cc69139d317139e306b864be3e6512d3532492b02feed043de8ef9025867f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=0ce35effc349aa7dca20bcee5510c6fbd7529541b9747c6dd6e08529d7dfc87c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIRTLE4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVqiGdNY5gSTS0FHKh8seUJeRvBISq2Ys0lcf0xpBH7AIgC8ZRklxMy61UPdQyHrBNyTLykNq0ZE1PfSUe7pIlKLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfORX42CKbBkUvOZircA5vipE7QSUVjx9H9VU9EG77LGZpQo1ZStufDIIUJHwXotECwhJIr660LFM34d%2BILrZ4zgZVmjKhTPyOxYEIZTkvCficgdaiJeu%2FUIhGMAjkhAP0ALG2oG50KSsQxk%2BglO2SK1FwVfgchHtWlIEEphABqhohnIxDps%2FhbcreT1rFmv1jHtO3ysP4ouHc%2B9L6KwYjNQDkDt0s4Pz67wkpHZgiblCdPK5v1YFNjiQQ2esQoRC5nPqhLQrSyYkVngOgImgBs9BJGipdg24qFD52zqOjp7jLzSkTNGk2pAqUpNBNbq7U7eqsLvoxgpulnx9Ib1yq0lGnS3lDBEOXajgNbrxnEq%2FxNFFJEwCVsfoMmsBrqMFZjyGajmcFRkNR0N4IDvH2zavvG50fSZ4l3ui0dNai3oRvHxgFeYCQnJsNy7sTSLI64IsIgmAWiohGbN73KfMsEV3b6f3C57cqhQVrXEwhgWHQaS%2FOk%2F8O1s%2FHQ0tNZJtJKcY%2F0s9fVLU7Ay4ZLU8ldgO4jP986uWAQA%2BhqFNSEwX6Uwir2ksQX6uRXwZ0PG4XLAsSy9exMldSV0Yz%2F3Mx2tDfvvCf3fWQk6%2BpqLGBZp7Gq%2BPyII4rPhnCBXH85PqRs2lrkJecWTCvFMMK2%2FL4GOqUBc3GXH9ND9H1PqgRM53v0tL0YneqSwUkgkhH%2BflIccWzZ0jyMPRluBUb7K9HAA9szw1uz7y274B85oAtTcVSYt5ZOtngtksJsL9Q7pkF5xXJEHU6geZk%2F%2BYbSp0WK%2Fp4ysCa7zBwQDvXGgnx2bDmd1%2F2qU8PxQnJLpV6ncftITbbCmzwQJqdxA9a4Oe56D9Drcb9zcLNEPavPbiLQaGT1d1ANXAbn&X-Amz-Signature=1ba9c1386bbe916067c4607c73f11bc12b9e3ff524546ae7b4e02b824be72ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
