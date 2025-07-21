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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3C4LL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnPPLirlfyaQfk0MU5J47o5LjB6FvOwcXTuxRjYzZ3cgIgUFy7BbuQ9XViIzckPWNHdp8enHQC7QFBKIqhnZ7d%2F1gqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9x9TF3PDQ%2B9yuZqircA48ITyOVRQiTWiqZaOXakAVcv%2Bt0rSkoQxxqIxYqJySh8%2BWDzRYifrQrkHwxpyM%2F2DB6MDNJW4A5VPMCHY6aL0udNUgydEzeKG8y8tkW3XSjjV%2B090CIUW%2FelH7HlHaFds8UpSdkGPa3SqM8fQH0%2FgNO%2BDWjsCRRSkaYFAYyZ%2FFvAUwFu3Pb6hBkVwwIfO1Dkl4JpAKZj6MOJHPzt3JQ0G%2Fr2XklKPVLD898Vr%2F2prJi6%2B%2BfmVhjZG1bpGe76GBKF7okCD%2BuJSRceRL4ePi%2F9K4bmR9DjiYcWZ2EFZnqz4ExWdeu6%2B8pV1%2FC5k3tZsyYDBcMyO3dKmvMqjb290E%2BgBOeXDyFKJgO5HU38Xt1QCodJ5iGZGakKRlG%2BiIA3K2ubMZtoFiEPzrp1LBTDkIqF%2Bn7esowr%2BS9s7%2B05zLN%2F5rmZGUtuLkw0LD2Cp%2Fmw%2BxaqWxH4DUk7bHw1SDw%2FrVN5uXa4qcPWrgYHyZIvpZOT3xRHoTu8vRHNdt7%2B21WZHp8u4PAypecEBSzTT%2FsUFGXaagD0aIWxqomXegio1ErsqTSowwL9PRCp%2BMMP8ThDuVJHo4jiPx48nhCFlTbPAw7%2FLeKiEm%2BfDLdt7H8tuFgr%2FNIAm0VbE5qakNrxNqYMKaz%2BsMGOqUBwjbi1u4daZXwsOSSGUPRcmLcMdQ7d2aResKuv%2BlqV6sSHmSs4BV%2BNPNWiHxoGSuexqliQAqAmRoSqgZB1g5DIGsDNX9YW9HfMKLn2Ltv7%2BupPk%2BwX5AXRku3UJYumIj2hKv%2F%2F1VJ%2FvfLtMk6QRwS3ZlwRQQJw08zMbHTP%2BH92wk7U75jKA5XjRI1H147cNo%2BD%2Fj74q8iCzf2m80ZSFQwdEl%2FKY6B&X-Amz-Signature=5c6d8a64e610e147d61522ae8aebe10eba56c9f58089796eeb3d56071810e4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3C4LL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnPPLirlfyaQfk0MU5J47o5LjB6FvOwcXTuxRjYzZ3cgIgUFy7BbuQ9XViIzckPWNHdp8enHQC7QFBKIqhnZ7d%2F1gqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9x9TF3PDQ%2B9yuZqircA48ITyOVRQiTWiqZaOXakAVcv%2Bt0rSkoQxxqIxYqJySh8%2BWDzRYifrQrkHwxpyM%2F2DB6MDNJW4A5VPMCHY6aL0udNUgydEzeKG8y8tkW3XSjjV%2B090CIUW%2FelH7HlHaFds8UpSdkGPa3SqM8fQH0%2FgNO%2BDWjsCRRSkaYFAYyZ%2FFvAUwFu3Pb6hBkVwwIfO1Dkl4JpAKZj6MOJHPzt3JQ0G%2Fr2XklKPVLD898Vr%2F2prJi6%2B%2BfmVhjZG1bpGe76GBKF7okCD%2BuJSRceRL4ePi%2F9K4bmR9DjiYcWZ2EFZnqz4ExWdeu6%2B8pV1%2FC5k3tZsyYDBcMyO3dKmvMqjb290E%2BgBOeXDyFKJgO5HU38Xt1QCodJ5iGZGakKRlG%2BiIA3K2ubMZtoFiEPzrp1LBTDkIqF%2Bn7esowr%2BS9s7%2B05zLN%2F5rmZGUtuLkw0LD2Cp%2Fmw%2BxaqWxH4DUk7bHw1SDw%2FrVN5uXa4qcPWrgYHyZIvpZOT3xRHoTu8vRHNdt7%2B21WZHp8u4PAypecEBSzTT%2FsUFGXaagD0aIWxqomXegio1ErsqTSowwL9PRCp%2BMMP8ThDuVJHo4jiPx48nhCFlTbPAw7%2FLeKiEm%2BfDLdt7H8tuFgr%2FNIAm0VbE5qakNrxNqYMKaz%2BsMGOqUBwjbi1u4daZXwsOSSGUPRcmLcMdQ7d2aResKuv%2BlqV6sSHmSs4BV%2BNPNWiHxoGSuexqliQAqAmRoSqgZB1g5DIGsDNX9YW9HfMKLn2Ltv7%2BupPk%2BwX5AXRku3UJYumIj2hKv%2F%2F1VJ%2FvfLtMk6QRwS3ZlwRQQJw08zMbHTP%2BH92wk7U75jKA5XjRI1H147cNo%2BD%2Fj74q8iCzf2m80ZSFQwdEl%2FKY6B&X-Amz-Signature=2e60d8db4a4f073e3d1b20262bbf0806fb1e9cd4aeece93b93c6db03c96c5680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676J3C4LL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnPPLirlfyaQfk0MU5J47o5LjB6FvOwcXTuxRjYzZ3cgIgUFy7BbuQ9XViIzckPWNHdp8enHQC7QFBKIqhnZ7d%2F1gqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9x9TF3PDQ%2B9yuZqircA48ITyOVRQiTWiqZaOXakAVcv%2Bt0rSkoQxxqIxYqJySh8%2BWDzRYifrQrkHwxpyM%2F2DB6MDNJW4A5VPMCHY6aL0udNUgydEzeKG8y8tkW3XSjjV%2B090CIUW%2FelH7HlHaFds8UpSdkGPa3SqM8fQH0%2FgNO%2BDWjsCRRSkaYFAYyZ%2FFvAUwFu3Pb6hBkVwwIfO1Dkl4JpAKZj6MOJHPzt3JQ0G%2Fr2XklKPVLD898Vr%2F2prJi6%2B%2BfmVhjZG1bpGe76GBKF7okCD%2BuJSRceRL4ePi%2F9K4bmR9DjiYcWZ2EFZnqz4ExWdeu6%2B8pV1%2FC5k3tZsyYDBcMyO3dKmvMqjb290E%2BgBOeXDyFKJgO5HU38Xt1QCodJ5iGZGakKRlG%2BiIA3K2ubMZtoFiEPzrp1LBTDkIqF%2Bn7esowr%2BS9s7%2B05zLN%2F5rmZGUtuLkw0LD2Cp%2Fmw%2BxaqWxH4DUk7bHw1SDw%2FrVN5uXa4qcPWrgYHyZIvpZOT3xRHoTu8vRHNdt7%2B21WZHp8u4PAypecEBSzTT%2FsUFGXaagD0aIWxqomXegio1ErsqTSowwL9PRCp%2BMMP8ThDuVJHo4jiPx48nhCFlTbPAw7%2FLeKiEm%2BfDLdt7H8tuFgr%2FNIAm0VbE5qakNrxNqYMKaz%2BsMGOqUBwjbi1u4daZXwsOSSGUPRcmLcMdQ7d2aResKuv%2BlqV6sSHmSs4BV%2BNPNWiHxoGSuexqliQAqAmRoSqgZB1g5DIGsDNX9YW9HfMKLn2Ltv7%2BupPk%2BwX5AXRku3UJYumIj2hKv%2F%2F1VJ%2FvfLtMk6QRwS3ZlwRQQJw08zMbHTP%2BH92wk7U75jKA5XjRI1H147cNo%2BD%2Fj74q8iCzf2m80ZSFQwdEl%2FKY6B&X-Amz-Signature=b212a7bcde68f5cb36c9de5a1884bb9389ccc0ffbc62d850b2826fb17955b309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
