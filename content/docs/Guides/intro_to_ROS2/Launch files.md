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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS4YYEZY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIH2FUJsszmYJ15vEzxYLOtMm6PWxBS6emPDHLJmQgzy1AiBqi1xi0wS6DKPHuPwW%2BugyMTseuVc7obpJQEuMYB9YRSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM7FNqDH8bjElBvOJHKtwDm8SmlKw3rFzQNEVJCDU1FPUjHpvn1S8Kn0cBjOOHBlmqnsdc%2FoznE2nPHU6SQyxuRjL0x%2B1yBsSgaBDplAJcOdEsM7%2FFEFrpRXsP7PSGeTq7oi00LLXF2Jna%2BCaiDmqNakTJpirKpx2aUO8nnVl0HqP0XsLI1icJB10%2FVzDp%2BxUkbB6iY00qCfSE7RCVi0Ua5pWZlU9vm37j8wuYQgcOBW2VhD2rtRbS%2B%2F8GwP4kkixFmjjkdbWC3cBdfAuj2JVIBY%2BSh4xB9WrcrpCutc2%2FPUM6dgjXpwqIQie9RxG3Uh%2FHmJXMzGQSVKXzI23J%2FcKR%2FU8pJFpf4jaknmDNeamW2577o99uSaJCDgIGsbPLqeFny4wSimVOTFxPfQlYMaVH3ZeHdTl8Q4N80xAj81UcivEUQOPGOcvVGIQyTOJzIkTMflxnmNxLQQ%2FjeDhz%2BbuSp9JyzPAkgQENJfdRE%2FLP1PWpOUqzmUKPQLYTjQQTBeMzmUk1SIYxAy9ntCCuZJSPkoBwiirit9AUHeokjTY9L%2FpzD5b3kqL4bigce7FRVJLBoe%2Fe08rza57FJGPTe6mIyJpvdXjNRcOQNHdl2WsTXRqDTVVCq5dsy9QLqdq3F71wXPO8o4ekxXbFueswv5DdwAY6pgGP4D4lByIVKjur%2FGZfm2C0johiae1WDEC%2FKNYLsx%2Bncj8RSb%2BZD5wnUMjF4hQvvGmD99CST%2Fwt4%2Fz1EVnC645dInctohgyGVWIChCTLCJRmrFjS%2BtjIPwadGoObrWZbDN34kpJ2DE67oJgWZJT22oPp4ojYGSs6918G1wKT2GVXjBW2U3%2B4MKExOvHjJIUkF9GOY6kP3gHgWd0TtQMQxLCqhx1MGdx&X-Amz-Signature=9dd4482ccc20aa849bef779350c0d72a286505286b48cc50c82c75b4a8f5df69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS4YYEZY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIH2FUJsszmYJ15vEzxYLOtMm6PWxBS6emPDHLJmQgzy1AiBqi1xi0wS6DKPHuPwW%2BugyMTseuVc7obpJQEuMYB9YRSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM7FNqDH8bjElBvOJHKtwDm8SmlKw3rFzQNEVJCDU1FPUjHpvn1S8Kn0cBjOOHBlmqnsdc%2FoznE2nPHU6SQyxuRjL0x%2B1yBsSgaBDplAJcOdEsM7%2FFEFrpRXsP7PSGeTq7oi00LLXF2Jna%2BCaiDmqNakTJpirKpx2aUO8nnVl0HqP0XsLI1icJB10%2FVzDp%2BxUkbB6iY00qCfSE7RCVi0Ua5pWZlU9vm37j8wuYQgcOBW2VhD2rtRbS%2B%2F8GwP4kkixFmjjkdbWC3cBdfAuj2JVIBY%2BSh4xB9WrcrpCutc2%2FPUM6dgjXpwqIQie9RxG3Uh%2FHmJXMzGQSVKXzI23J%2FcKR%2FU8pJFpf4jaknmDNeamW2577o99uSaJCDgIGsbPLqeFny4wSimVOTFxPfQlYMaVH3ZeHdTl8Q4N80xAj81UcivEUQOPGOcvVGIQyTOJzIkTMflxnmNxLQQ%2FjeDhz%2BbuSp9JyzPAkgQENJfdRE%2FLP1PWpOUqzmUKPQLYTjQQTBeMzmUk1SIYxAy9ntCCuZJSPkoBwiirit9AUHeokjTY9L%2FpzD5b3kqL4bigce7FRVJLBoe%2Fe08rza57FJGPTe6mIyJpvdXjNRcOQNHdl2WsTXRqDTVVCq5dsy9QLqdq3F71wXPO8o4ekxXbFueswv5DdwAY6pgGP4D4lByIVKjur%2FGZfm2C0johiae1WDEC%2FKNYLsx%2Bncj8RSb%2BZD5wnUMjF4hQvvGmD99CST%2Fwt4%2Fz1EVnC645dInctohgyGVWIChCTLCJRmrFjS%2BtjIPwadGoObrWZbDN34kpJ2DE67oJgWZJT22oPp4ojYGSs6918G1wKT2GVXjBW2U3%2B4MKExOvHjJIUkF9GOY6kP3gHgWd0TtQMQxLCqhx1MGdx&X-Amz-Signature=65dc9fdc54ccf0338879b67d369fb851c5e348ff16b045b34ccd5d38904afe1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS4YYEZY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIH2FUJsszmYJ15vEzxYLOtMm6PWxBS6emPDHLJmQgzy1AiBqi1xi0wS6DKPHuPwW%2BugyMTseuVc7obpJQEuMYB9YRSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM7FNqDH8bjElBvOJHKtwDm8SmlKw3rFzQNEVJCDU1FPUjHpvn1S8Kn0cBjOOHBlmqnsdc%2FoznE2nPHU6SQyxuRjL0x%2B1yBsSgaBDplAJcOdEsM7%2FFEFrpRXsP7PSGeTq7oi00LLXF2Jna%2BCaiDmqNakTJpirKpx2aUO8nnVl0HqP0XsLI1icJB10%2FVzDp%2BxUkbB6iY00qCfSE7RCVi0Ua5pWZlU9vm37j8wuYQgcOBW2VhD2rtRbS%2B%2F8GwP4kkixFmjjkdbWC3cBdfAuj2JVIBY%2BSh4xB9WrcrpCutc2%2FPUM6dgjXpwqIQie9RxG3Uh%2FHmJXMzGQSVKXzI23J%2FcKR%2FU8pJFpf4jaknmDNeamW2577o99uSaJCDgIGsbPLqeFny4wSimVOTFxPfQlYMaVH3ZeHdTl8Q4N80xAj81UcivEUQOPGOcvVGIQyTOJzIkTMflxnmNxLQQ%2FjeDhz%2BbuSp9JyzPAkgQENJfdRE%2FLP1PWpOUqzmUKPQLYTjQQTBeMzmUk1SIYxAy9ntCCuZJSPkoBwiirit9AUHeokjTY9L%2FpzD5b3kqL4bigce7FRVJLBoe%2Fe08rza57FJGPTe6mIyJpvdXjNRcOQNHdl2WsTXRqDTVVCq5dsy9QLqdq3F71wXPO8o4ekxXbFueswv5DdwAY6pgGP4D4lByIVKjur%2FGZfm2C0johiae1WDEC%2FKNYLsx%2Bncj8RSb%2BZD5wnUMjF4hQvvGmD99CST%2Fwt4%2Fz1EVnC645dInctohgyGVWIChCTLCJRmrFjS%2BtjIPwadGoObrWZbDN34kpJ2DE67oJgWZJT22oPp4ojYGSs6918G1wKT2GVXjBW2U3%2B4MKExOvHjJIUkF9GOY6kP3gHgWd0TtQMQxLCqhx1MGdx&X-Amz-Signature=22076c89849839f28757c3324b9cbb8d6589236f82e16a4c9c134d49980c972b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
