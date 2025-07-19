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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIROQUCK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9JwtSm5QUNvB10112dKjtSe%2BQXh%2FxrPTvv%2BBKZ2QyeAiAWGq30ELgs6qPjqb%2BYbsIdV9ZmoOV6YiFyPinxhK8gLiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fw21AClKM%2F32TKlKtwDAgk4fCg9%2FYmExuAjO3u7b2KBFmGmrNzf%2Bv1pkr5H3vPMK%2Boo9qDfQ0R2B0EO71dtw0%2F4ls7AOWO3f429hZU94Q3u7J3dwEoGS%2Bzq0VoYGzHdUJCVbSY1oVvt2pCe%2FzwNkKk0jbGOrD5aaWGiCRePvmvSkHyd80t2%2BFpu5UqGCpljqutUcpsGVCEAiGJL8ZMqW8j2Hl%2F6hjs0fqi5MXiu0MAcJwaJG4Ckhka8pkqSg1SnsrYIlI1ZpYIdPqTJzUMTVNVY%2FvJ%2BEB6E0%2BN4dV4kTSDu3T%2FH4rYuFw5dNPIGVCa3QTrdNc1Q01vuaywBxDdIfNqxBw%2FWDKdBnLXhqE2uz28lxL79qLxfUxoGKa1XKKXkNE722lzyQqkn1EbzLRII942KwsHZ32m2cUpmJmxc28T0KozE7mjv0VCn9EUK%2FHRfOxJ30Ra%2BHKAAjxAKAFj32Sj3fC19PKerRWX0n626GCycvXlFargzU5wlKGeP3ZjDNroI4uNZoxiz2w37qMf45RIvGN4DPktF9pla%2BETKV%2BJExUGB44Wz1Zo2TW4%2FZAwifClpns%2BVXpVJNscr7UcHUE5ZkE8tzhrXBPgxXOHnIJTW4YUx0UnUDv%2ByOC20FCYIxSAt67yZpatnKFowt7juwwY6pgFoRmLoHPvrcLJWzZNYqT99wLO1OG2O6ZbVocWcXORiVonyfgVPf%2B0EZU8jLLuazopLq74iR9Q9nxNfJxPDc4tG4DSkZCOfY3NQpN7ngdOOTPPunbeqKMPN0SQ7EgJw3SRvk9XKTGsuO6Fv%2BYtUdikx0qtAURCPqWrjDX1sPujDzvcxq%2FWswBPwF3J8bUBLgi0QBOZISFh5hD%2BJ5AGQaC6ePGIY9sUs&X-Amz-Signature=eda842c925ad6af6cc3add9b1d38062a0d7fa59b5e6e757edf079860fab9cbf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIROQUCK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9JwtSm5QUNvB10112dKjtSe%2BQXh%2FxrPTvv%2BBKZ2QyeAiAWGq30ELgs6qPjqb%2BYbsIdV9ZmoOV6YiFyPinxhK8gLiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fw21AClKM%2F32TKlKtwDAgk4fCg9%2FYmExuAjO3u7b2KBFmGmrNzf%2Bv1pkr5H3vPMK%2Boo9qDfQ0R2B0EO71dtw0%2F4ls7AOWO3f429hZU94Q3u7J3dwEoGS%2Bzq0VoYGzHdUJCVbSY1oVvt2pCe%2FzwNkKk0jbGOrD5aaWGiCRePvmvSkHyd80t2%2BFpu5UqGCpljqutUcpsGVCEAiGJL8ZMqW8j2Hl%2F6hjs0fqi5MXiu0MAcJwaJG4Ckhka8pkqSg1SnsrYIlI1ZpYIdPqTJzUMTVNVY%2FvJ%2BEB6E0%2BN4dV4kTSDu3T%2FH4rYuFw5dNPIGVCa3QTrdNc1Q01vuaywBxDdIfNqxBw%2FWDKdBnLXhqE2uz28lxL79qLxfUxoGKa1XKKXkNE722lzyQqkn1EbzLRII942KwsHZ32m2cUpmJmxc28T0KozE7mjv0VCn9EUK%2FHRfOxJ30Ra%2BHKAAjxAKAFj32Sj3fC19PKerRWX0n626GCycvXlFargzU5wlKGeP3ZjDNroI4uNZoxiz2w37qMf45RIvGN4DPktF9pla%2BETKV%2BJExUGB44Wz1Zo2TW4%2FZAwifClpns%2BVXpVJNscr7UcHUE5ZkE8tzhrXBPgxXOHnIJTW4YUx0UnUDv%2ByOC20FCYIxSAt67yZpatnKFowt7juwwY6pgFoRmLoHPvrcLJWzZNYqT99wLO1OG2O6ZbVocWcXORiVonyfgVPf%2B0EZU8jLLuazopLq74iR9Q9nxNfJxPDc4tG4DSkZCOfY3NQpN7ngdOOTPPunbeqKMPN0SQ7EgJw3SRvk9XKTGsuO6Fv%2BYtUdikx0qtAURCPqWrjDX1sPujDzvcxq%2FWswBPwF3J8bUBLgi0QBOZISFh5hD%2BJ5AGQaC6ePGIY9sUs&X-Amz-Signature=a1cb461f48a4a5922f661aa896312bda9f7359728f5229db81196060a2d315d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIROQUCK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9JwtSm5QUNvB10112dKjtSe%2BQXh%2FxrPTvv%2BBKZ2QyeAiAWGq30ELgs6qPjqb%2BYbsIdV9ZmoOV6YiFyPinxhK8gLiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fw21AClKM%2F32TKlKtwDAgk4fCg9%2FYmExuAjO3u7b2KBFmGmrNzf%2Bv1pkr5H3vPMK%2Boo9qDfQ0R2B0EO71dtw0%2F4ls7AOWO3f429hZU94Q3u7J3dwEoGS%2Bzq0VoYGzHdUJCVbSY1oVvt2pCe%2FzwNkKk0jbGOrD5aaWGiCRePvmvSkHyd80t2%2BFpu5UqGCpljqutUcpsGVCEAiGJL8ZMqW8j2Hl%2F6hjs0fqi5MXiu0MAcJwaJG4Ckhka8pkqSg1SnsrYIlI1ZpYIdPqTJzUMTVNVY%2FvJ%2BEB6E0%2BN4dV4kTSDu3T%2FH4rYuFw5dNPIGVCa3QTrdNc1Q01vuaywBxDdIfNqxBw%2FWDKdBnLXhqE2uz28lxL79qLxfUxoGKa1XKKXkNE722lzyQqkn1EbzLRII942KwsHZ32m2cUpmJmxc28T0KozE7mjv0VCn9EUK%2FHRfOxJ30Ra%2BHKAAjxAKAFj32Sj3fC19PKerRWX0n626GCycvXlFargzU5wlKGeP3ZjDNroI4uNZoxiz2w37qMf45RIvGN4DPktF9pla%2BETKV%2BJExUGB44Wz1Zo2TW4%2FZAwifClpns%2BVXpVJNscr7UcHUE5ZkE8tzhrXBPgxXOHnIJTW4YUx0UnUDv%2ByOC20FCYIxSAt67yZpatnKFowt7juwwY6pgFoRmLoHPvrcLJWzZNYqT99wLO1OG2O6ZbVocWcXORiVonyfgVPf%2B0EZU8jLLuazopLq74iR9Q9nxNfJxPDc4tG4DSkZCOfY3NQpN7ngdOOTPPunbeqKMPN0SQ7EgJw3SRvk9XKTGsuO6Fv%2BYtUdikx0qtAURCPqWrjDX1sPujDzvcxq%2FWswBPwF3J8bUBLgi0QBOZISFh5hD%2BJ5AGQaC6ePGIY9sUs&X-Amz-Signature=06ecd8f43aed238cb003fc9058313f60f330d5c3c2571b264d11cb373f65999b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
