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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X356QUDI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvoxqZwXoWe02BrGraYKktu1iSFR0lhP1TOMsmVkwmDAIhAKWuhJkxxsIqWbYrySvwv5dGG4AU9bsASlW%2Bub3BBjX7KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfyKmgx9diOwU%2FbQq3AO4z1wEC6DUedNAtC3LI9fNSazEnecdgJ%2F5rz5Saawf4UyjH4wcZ5HgZW6EWoIG5NAHVq%2F1Rxd2R%2FpLVZOZLuv6%2FuSZrtnxAkkgtYFSiCSyYfQbMBZOqEs%2Fzgb8f%2BU8Aj1vEw6G2RWjFMUghRIT%2FK7d4bHwx2578E2P%2FJUNfFISzPo0SRalXU0p54pdzdJmPaTJgdLZPGnAtgralZAD5cHA4HW1hgAkQU%2FeOtJk%2FqSG0SfnuFCd82bUACRX3GKxzQ2f3hn%2FADKcZf%2BdPUqdLHKfeQYAHN77%2B1yclNMbl7f9x%2BYx0iGuflU5umcDUimTxj33QOoI54rSqfjBkrE9O08ja7UxQyqnGl%2F83zqP%2FU790RQirXDPa44fXksGlRm5pCZwuExhhSUpNYg4t0pUe2BlULWxYOUhk3CXchc214sjpwHCiP6xP%2FcMQfkCpLpJ5df5qayE5lquptcXOQ8Gs11PH1LY1SViOX5cU%2BzsrwYhkTzHxhzDhA3pB48CXPHz2rD1nR6SQdNvjh9utHWlkoE8TGHjTxHCrAeS%2FxOOITrM1GmSeUEKGPqXPzd5LhowoQHEuCi9nqvO%2FCxVDBpdaz2agR%2B0cos%2BJVwqdK66hAJuBp5osDJsPPtr%2BETdKjD%2Br%2BvDBjqkAYcjLFvEdZ18GFwytHuLVFl%2B3Y3CrAqlQsL9WLjS%2F7Q2kt5t%2B51dZtM2uyipfgPrPs%2FPwYrupGES0haAMoogeZ5S6cUMwTAgMxbiD1TdUNLnYQHbUvRtki3IUid2R84NMeR6BiEtlyn%2BHDMCyCeX1axgQtthCuyYyWBjNeKtnthjF3eOo5chtr3lyKGjzuboXzTcf0%2BVsQSGUp2xnus5cWEx%2FyAk&X-Amz-Signature=39f6818b433733fcb984919ed60dc6d64b24290bc0a08b8b37a834bfe56b3be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X356QUDI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvoxqZwXoWe02BrGraYKktu1iSFR0lhP1TOMsmVkwmDAIhAKWuhJkxxsIqWbYrySvwv5dGG4AU9bsASlW%2Bub3BBjX7KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfyKmgx9diOwU%2FbQq3AO4z1wEC6DUedNAtC3LI9fNSazEnecdgJ%2F5rz5Saawf4UyjH4wcZ5HgZW6EWoIG5NAHVq%2F1Rxd2R%2FpLVZOZLuv6%2FuSZrtnxAkkgtYFSiCSyYfQbMBZOqEs%2Fzgb8f%2BU8Aj1vEw6G2RWjFMUghRIT%2FK7d4bHwx2578E2P%2FJUNfFISzPo0SRalXU0p54pdzdJmPaTJgdLZPGnAtgralZAD5cHA4HW1hgAkQU%2FeOtJk%2FqSG0SfnuFCd82bUACRX3GKxzQ2f3hn%2FADKcZf%2BdPUqdLHKfeQYAHN77%2B1yclNMbl7f9x%2BYx0iGuflU5umcDUimTxj33QOoI54rSqfjBkrE9O08ja7UxQyqnGl%2F83zqP%2FU790RQirXDPa44fXksGlRm5pCZwuExhhSUpNYg4t0pUe2BlULWxYOUhk3CXchc214sjpwHCiP6xP%2FcMQfkCpLpJ5df5qayE5lquptcXOQ8Gs11PH1LY1SViOX5cU%2BzsrwYhkTzHxhzDhA3pB48CXPHz2rD1nR6SQdNvjh9utHWlkoE8TGHjTxHCrAeS%2FxOOITrM1GmSeUEKGPqXPzd5LhowoQHEuCi9nqvO%2FCxVDBpdaz2agR%2B0cos%2BJVwqdK66hAJuBp5osDJsPPtr%2BETdKjD%2Br%2BvDBjqkAYcjLFvEdZ18GFwytHuLVFl%2B3Y3CrAqlQsL9WLjS%2F7Q2kt5t%2B51dZtM2uyipfgPrPs%2FPwYrupGES0haAMoogeZ5S6cUMwTAgMxbiD1TdUNLnYQHbUvRtki3IUid2R84NMeR6BiEtlyn%2BHDMCyCeX1axgQtthCuyYyWBjNeKtnthjF3eOo5chtr3lyKGjzuboXzTcf0%2BVsQSGUp2xnus5cWEx%2FyAk&X-Amz-Signature=ec3dfd0317835905322f4700fa8100a34f847eb6db1dc1b486b0a8265f890066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X356QUDI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvoxqZwXoWe02BrGraYKktu1iSFR0lhP1TOMsmVkwmDAIhAKWuhJkxxsIqWbYrySvwv5dGG4AU9bsASlW%2Bub3BBjX7KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQfyKmgx9diOwU%2FbQq3AO4z1wEC6DUedNAtC3LI9fNSazEnecdgJ%2F5rz5Saawf4UyjH4wcZ5HgZW6EWoIG5NAHVq%2F1Rxd2R%2FpLVZOZLuv6%2FuSZrtnxAkkgtYFSiCSyYfQbMBZOqEs%2Fzgb8f%2BU8Aj1vEw6G2RWjFMUghRIT%2FK7d4bHwx2578E2P%2FJUNfFISzPo0SRalXU0p54pdzdJmPaTJgdLZPGnAtgralZAD5cHA4HW1hgAkQU%2FeOtJk%2FqSG0SfnuFCd82bUACRX3GKxzQ2f3hn%2FADKcZf%2BdPUqdLHKfeQYAHN77%2B1yclNMbl7f9x%2BYx0iGuflU5umcDUimTxj33QOoI54rSqfjBkrE9O08ja7UxQyqnGl%2F83zqP%2FU790RQirXDPa44fXksGlRm5pCZwuExhhSUpNYg4t0pUe2BlULWxYOUhk3CXchc214sjpwHCiP6xP%2FcMQfkCpLpJ5df5qayE5lquptcXOQ8Gs11PH1LY1SViOX5cU%2BzsrwYhkTzHxhzDhA3pB48CXPHz2rD1nR6SQdNvjh9utHWlkoE8TGHjTxHCrAeS%2FxOOITrM1GmSeUEKGPqXPzd5LhowoQHEuCi9nqvO%2FCxVDBpdaz2agR%2B0cos%2BJVwqdK66hAJuBp5osDJsPPtr%2BETdKjD%2Br%2BvDBjqkAYcjLFvEdZ18GFwytHuLVFl%2B3Y3CrAqlQsL9WLjS%2F7Q2kt5t%2B51dZtM2uyipfgPrPs%2FPwYrupGES0haAMoogeZ5S6cUMwTAgMxbiD1TdUNLnYQHbUvRtki3IUid2R84NMeR6BiEtlyn%2BHDMCyCeX1axgQtthCuyYyWBjNeKtnthjF3eOo5chtr3lyKGjzuboXzTcf0%2BVsQSGUp2xnus5cWEx%2FyAk&X-Amz-Signature=4107c98561e181ab04e506ae4c4585764150772725cf08a9fa16a36c8157e301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
