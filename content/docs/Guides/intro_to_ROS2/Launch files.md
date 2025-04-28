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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZENKPJ2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1IzgsAyY%2BkPKxvE6omVZ8gcM1bV4hRiImoi964H4GbgIhAPwfEpQXNkCrXSB36jSQcD2D7tNCSOPZaEKFL1w6bbcvKv8DCH0QABoMNjM3NDIzMTgzODA1IgzVWCQDLTr0Subaxe4q3ANsaD7YCKavP%2BBu58mLGDvg9Exx6B1fJczZ72rYk2MZbX4NzGuzw%2Fso%2FLWU5JIt%2FvZj1er68ERZCWidS31UVlflbAJSokTjEN1KAc3D3KJFNfEKyK%2Bte%2B5Pm2BbzTT8J%2B6FWtf1J20zblCqJNnQDCg19Z0Oe%2BIAAuh0kqskTYEwxBE3upB3pXe0Z0OS%2FrerZGYdPtPfL%2FU4UsxA0z%2BBMxjgW3eb5bKONVWHojiVLK9ppay0K7G2JYxdqTygNzJ%2FFgit4x4uvUKG3FhLlmo2C6%2FhVKcwO6a8xTFZ9AsnqklDFOakwGYeVTLqppwEpgY%2BxLAwg29yr9ayHvxevvjQO%2FUjIWXKen8L%2F2Y%2Fw1UvhuAy3N6%2FJsE2R%2FMBU4NKQ2bDpznLoo0Y9ypx3X8oM4UPlwTinoVk0nJpB8R%2BvZjmkhkxeG0paFuRUQe7hCFcyRBEDAP8AqnAcOCkmMZ9%2FkQ3N7Z%2BeI4Qd1TmBOHZpzeH7FLBAsPg3sJTCflaF9xFeMNgRgwPnYRetODTp1iJf1aMtq%2BizCab%2BpS6XynKdavTtpC%2FjztaKoDfbcPfcR3WIqiCKLtzHwubSgHFX9By%2BpHw0nErHKzG5ypBfaZdZPP1l7wEqWlC1C2WGEE%2Ft8H8YDDwt7%2FABjqkAfwGKzRUEpqbd8dCoDH8g5kLJtWCVtBr2orpwWPoOfb2Wd99WMAI0jGNF2cQoMhk%2BntnFsNXJ30By757Q4IKkxL1HKffBrkFfpq0PENJdfAXaPxc%2FaBfX%2FBTIDR17vw8sLqSraZaSJZOloonq7UqFyDh7UFT2PSh9PI36EwxQ8rn%2BnfQspKE65zqqdsa%2F%2BBl3H8WurT3YTDRigIwqJYM11iHwOMQ&X-Amz-Signature=38f162dd83630a62a5d6f0fbb19c5fcf6ad9762a3f50df8e69438d91f175dbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZENKPJ2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1IzgsAyY%2BkPKxvE6omVZ8gcM1bV4hRiImoi964H4GbgIhAPwfEpQXNkCrXSB36jSQcD2D7tNCSOPZaEKFL1w6bbcvKv8DCH0QABoMNjM3NDIzMTgzODA1IgzVWCQDLTr0Subaxe4q3ANsaD7YCKavP%2BBu58mLGDvg9Exx6B1fJczZ72rYk2MZbX4NzGuzw%2Fso%2FLWU5JIt%2FvZj1er68ERZCWidS31UVlflbAJSokTjEN1KAc3D3KJFNfEKyK%2Bte%2B5Pm2BbzTT8J%2B6FWtf1J20zblCqJNnQDCg19Z0Oe%2BIAAuh0kqskTYEwxBE3upB3pXe0Z0OS%2FrerZGYdPtPfL%2FU4UsxA0z%2BBMxjgW3eb5bKONVWHojiVLK9ppay0K7G2JYxdqTygNzJ%2FFgit4x4uvUKG3FhLlmo2C6%2FhVKcwO6a8xTFZ9AsnqklDFOakwGYeVTLqppwEpgY%2BxLAwg29yr9ayHvxevvjQO%2FUjIWXKen8L%2F2Y%2Fw1UvhuAy3N6%2FJsE2R%2FMBU4NKQ2bDpznLoo0Y9ypx3X8oM4UPlwTinoVk0nJpB8R%2BvZjmkhkxeG0paFuRUQe7hCFcyRBEDAP8AqnAcOCkmMZ9%2FkQ3N7Z%2BeI4Qd1TmBOHZpzeH7FLBAsPg3sJTCflaF9xFeMNgRgwPnYRetODTp1iJf1aMtq%2BizCab%2BpS6XynKdavTtpC%2FjztaKoDfbcPfcR3WIqiCKLtzHwubSgHFX9By%2BpHw0nErHKzG5ypBfaZdZPP1l7wEqWlC1C2WGEE%2Ft8H8YDDwt7%2FABjqkAfwGKzRUEpqbd8dCoDH8g5kLJtWCVtBr2orpwWPoOfb2Wd99WMAI0jGNF2cQoMhk%2BntnFsNXJ30By757Q4IKkxL1HKffBrkFfpq0PENJdfAXaPxc%2FaBfX%2FBTIDR17vw8sLqSraZaSJZOloonq7UqFyDh7UFT2PSh9PI36EwxQ8rn%2BnfQspKE65zqqdsa%2F%2BBl3H8WurT3YTDRigIwqJYM11iHwOMQ&X-Amz-Signature=7485279df2aa824789b5383ae3a8cecb9614414e6c14650466c24c8f7112816d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZENKPJ2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1IzgsAyY%2BkPKxvE6omVZ8gcM1bV4hRiImoi964H4GbgIhAPwfEpQXNkCrXSB36jSQcD2D7tNCSOPZaEKFL1w6bbcvKv8DCH0QABoMNjM3NDIzMTgzODA1IgzVWCQDLTr0Subaxe4q3ANsaD7YCKavP%2BBu58mLGDvg9Exx6B1fJczZ72rYk2MZbX4NzGuzw%2Fso%2FLWU5JIt%2FvZj1er68ERZCWidS31UVlflbAJSokTjEN1KAc3D3KJFNfEKyK%2Bte%2B5Pm2BbzTT8J%2B6FWtf1J20zblCqJNnQDCg19Z0Oe%2BIAAuh0kqskTYEwxBE3upB3pXe0Z0OS%2FrerZGYdPtPfL%2FU4UsxA0z%2BBMxjgW3eb5bKONVWHojiVLK9ppay0K7G2JYxdqTygNzJ%2FFgit4x4uvUKG3FhLlmo2C6%2FhVKcwO6a8xTFZ9AsnqklDFOakwGYeVTLqppwEpgY%2BxLAwg29yr9ayHvxevvjQO%2FUjIWXKen8L%2F2Y%2Fw1UvhuAy3N6%2FJsE2R%2FMBU4NKQ2bDpznLoo0Y9ypx3X8oM4UPlwTinoVk0nJpB8R%2BvZjmkhkxeG0paFuRUQe7hCFcyRBEDAP8AqnAcOCkmMZ9%2FkQ3N7Z%2BeI4Qd1TmBOHZpzeH7FLBAsPg3sJTCflaF9xFeMNgRgwPnYRetODTp1iJf1aMtq%2BizCab%2BpS6XynKdavTtpC%2FjztaKoDfbcPfcR3WIqiCKLtzHwubSgHFX9By%2BpHw0nErHKzG5ypBfaZdZPP1l7wEqWlC1C2WGEE%2Ft8H8YDDwt7%2FABjqkAfwGKzRUEpqbd8dCoDH8g5kLJtWCVtBr2orpwWPoOfb2Wd99WMAI0jGNF2cQoMhk%2BntnFsNXJ30By757Q4IKkxL1HKffBrkFfpq0PENJdfAXaPxc%2FaBfX%2FBTIDR17vw8sLqSraZaSJZOloonq7UqFyDh7UFT2PSh9PI36EwxQ8rn%2BnfQspKE65zqqdsa%2F%2BBl3H8WurT3YTDRigIwqJYM11iHwOMQ&X-Amz-Signature=1c56227c4e4e78f2b33dfb9c7ddd6896e3deb90c76bf15a8e2f2765e9705f0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
