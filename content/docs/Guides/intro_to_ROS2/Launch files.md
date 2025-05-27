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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEQAUYB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxkmpVGpPALc4VCUyLnYpnxjNkidJVIhG3AjsfySBaAIgCCZknq%2FGFyaFxpjZI%2BrNitW8Uew7zzs62s3PIAin4lYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKRmo%2BCuE%2BvPj48apCrcA7PQkAN5siv%2FbVfBUhVFrDXj60hvN%2FFX3L0R5trKuevi%2FA9jXWjUMU860a%2BPXDv3eFiWXLpxhEqxlR3NAms0OW4eon774KmrPue9Koajb8O8uWPXLldOdh297N%2FzKeYoH57t16J14VjEIOBANp2zZWyGbDwbzPi9FKjZ02ibXrpdBZD5U8gx0w6D9akOg4cTOe0i8KipZfiWq4qu44q8Eojv3KpTTK8GVbqQ0vVjOH2unl2SPGFyYtDChN3cFxioqzXLBiWFvV%2FJo%2FYRwybN7dix1IZwBsX3OiVzlF37zr8%2BgP%2FUYcyv3TqqkpP0Zw2ohgyXQd%2Feihw%2FaPmBZTKxMuKtCWRNON8vCsJDzqQvMW%2BTqlsvu8bAaI1HyMpeAAQEBheBGI7sEwktXp8b%2B8Jr69rIDPxwwg9o%2BCszBDRog7BHgxOkr5KHFES5chPeX1CzaKzRIdShahnD%2BSChT9oiE%2BN3Pb%2F2armuN%2Bs2B%2B%2BuCOcC2WUN1yZi9oNAYjoFD1VXfzj0b%2Bb5dcZedncLW0POZ%2FYOLyXmsR0xldelfDXbNSf4GRtcVnyTCA5Z7hnZL1AeY1QraOHuXHGr9RCIwSY%2B9sNG9e%2BcFUpgRkWZcMqVZsUbLmFJs55p%2BGsPaGzzMKWX2MEGOqUBbSyR2idiY6vVDNMotfocsdbDN%2BgV4e10FbdI%2F2IydE4aktwR3Qm6f50qWgRZTgLg%2FrxYoe5PWKLhLyG0s5I4H6Xl3DBSy7qNOLp21xzl51bCHlP38xpS5EbBJF4CfS68w8iLp2KFCjuSxvyQXpqUhbSp9qT%2BwLNvcwIskDlJtLzGM%2BjcJHJtAVsYfg8k7TVLJ6M6u3SGGb%2FbH8k5NnG2NW3R6kMz&X-Amz-Signature=a714b536a534ef425f30bed2d221acc1523c857725d16ce00f118316684b5b18&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEQAUYB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxkmpVGpPALc4VCUyLnYpnxjNkidJVIhG3AjsfySBaAIgCCZknq%2FGFyaFxpjZI%2BrNitW8Uew7zzs62s3PIAin4lYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKRmo%2BCuE%2BvPj48apCrcA7PQkAN5siv%2FbVfBUhVFrDXj60hvN%2FFX3L0R5trKuevi%2FA9jXWjUMU860a%2BPXDv3eFiWXLpxhEqxlR3NAms0OW4eon774KmrPue9Koajb8O8uWPXLldOdh297N%2FzKeYoH57t16J14VjEIOBANp2zZWyGbDwbzPi9FKjZ02ibXrpdBZD5U8gx0w6D9akOg4cTOe0i8KipZfiWq4qu44q8Eojv3KpTTK8GVbqQ0vVjOH2unl2SPGFyYtDChN3cFxioqzXLBiWFvV%2FJo%2FYRwybN7dix1IZwBsX3OiVzlF37zr8%2BgP%2FUYcyv3TqqkpP0Zw2ohgyXQd%2Feihw%2FaPmBZTKxMuKtCWRNON8vCsJDzqQvMW%2BTqlsvu8bAaI1HyMpeAAQEBheBGI7sEwktXp8b%2B8Jr69rIDPxwwg9o%2BCszBDRog7BHgxOkr5KHFES5chPeX1CzaKzRIdShahnD%2BSChT9oiE%2BN3Pb%2F2armuN%2Bs2B%2B%2BuCOcC2WUN1yZi9oNAYjoFD1VXfzj0b%2Bb5dcZedncLW0POZ%2FYOLyXmsR0xldelfDXbNSf4GRtcVnyTCA5Z7hnZL1AeY1QraOHuXHGr9RCIwSY%2B9sNG9e%2BcFUpgRkWZcMqVZsUbLmFJs55p%2BGsPaGzzMKWX2MEGOqUBbSyR2idiY6vVDNMotfocsdbDN%2BgV4e10FbdI%2F2IydE4aktwR3Qm6f50qWgRZTgLg%2FrxYoe5PWKLhLyG0s5I4H6Xl3DBSy7qNOLp21xzl51bCHlP38xpS5EbBJF4CfS68w8iLp2KFCjuSxvyQXpqUhbSp9qT%2BwLNvcwIskDlJtLzGM%2BjcJHJtAVsYfg8k7TVLJ6M6u3SGGb%2FbH8k5NnG2NW3R6kMz&X-Amz-Signature=0a8153c0731092b7016d58a7b8a92cb87a40314eab00b3b447e71a73c39074ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEQAUYB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxkmpVGpPALc4VCUyLnYpnxjNkidJVIhG3AjsfySBaAIgCCZknq%2FGFyaFxpjZI%2BrNitW8Uew7zzs62s3PIAin4lYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKRmo%2BCuE%2BvPj48apCrcA7PQkAN5siv%2FbVfBUhVFrDXj60hvN%2FFX3L0R5trKuevi%2FA9jXWjUMU860a%2BPXDv3eFiWXLpxhEqxlR3NAms0OW4eon774KmrPue9Koajb8O8uWPXLldOdh297N%2FzKeYoH57t16J14VjEIOBANp2zZWyGbDwbzPi9FKjZ02ibXrpdBZD5U8gx0w6D9akOg4cTOe0i8KipZfiWq4qu44q8Eojv3KpTTK8GVbqQ0vVjOH2unl2SPGFyYtDChN3cFxioqzXLBiWFvV%2FJo%2FYRwybN7dix1IZwBsX3OiVzlF37zr8%2BgP%2FUYcyv3TqqkpP0Zw2ohgyXQd%2Feihw%2FaPmBZTKxMuKtCWRNON8vCsJDzqQvMW%2BTqlsvu8bAaI1HyMpeAAQEBheBGI7sEwktXp8b%2B8Jr69rIDPxwwg9o%2BCszBDRog7BHgxOkr5KHFES5chPeX1CzaKzRIdShahnD%2BSChT9oiE%2BN3Pb%2F2armuN%2Bs2B%2B%2BuCOcC2WUN1yZi9oNAYjoFD1VXfzj0b%2Bb5dcZedncLW0POZ%2FYOLyXmsR0xldelfDXbNSf4GRtcVnyTCA5Z7hnZL1AeY1QraOHuXHGr9RCIwSY%2B9sNG9e%2BcFUpgRkWZcMqVZsUbLmFJs55p%2BGsPaGzzMKWX2MEGOqUBbSyR2idiY6vVDNMotfocsdbDN%2BgV4e10FbdI%2F2IydE4aktwR3Qm6f50qWgRZTgLg%2FrxYoe5PWKLhLyG0s5I4H6Xl3DBSy7qNOLp21xzl51bCHlP38xpS5EbBJF4CfS68w8iLp2KFCjuSxvyQXpqUhbSp9qT%2BwLNvcwIskDlJtLzGM%2BjcJHJtAVsYfg8k7TVLJ6M6u3SGGb%2FbH8k5NnG2NW3R6kMz&X-Amz-Signature=4e631cab96f228f7fb2cdd547cb26528261a7660ba3150221a156cfd2ba6e707&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
