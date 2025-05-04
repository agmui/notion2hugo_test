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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6AD5SS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCcIXP%2F7CZ%2Fi8596r5%2BFcuDFxglEQww2hcRvSDv21NN6gIgMaId%2FnCeTWbWZzp9wSEJNY69gNyDlPFCdkC7Ngn6Vx8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHANiDD7s1BV3HXKvSrcA7LjjkTLNBml0Qp8ib4Cn1GchREVSBVPI7P1WPMGHHbX%2BoTuqWydd2RnznnpSnMMmyl3YsgVoR1JlBOzcgGOWxXeCmtB0Z2iWtDoR1ADIEsqyGuqdG0ilACGPWhr4Mp%2F1OESE8rJyzvbNi6AwLpgZkmni7mkvbBVvB84efgKvi2a%2BIUyh9i7PBn9JzThNeiqLUvko07owPGC4vaKG0wCoudJPPwHE%2FPs%2FVCvDeN4m4EMfw%2BcTugIHjf98ZRWXHQ6h6PRCT1zVZlmIU8NRoKGARnFzOsdC6C0Q4wp45VFeLoHDcxD2vvh1PYpAYaeVojJ%2Fee3ze9DatMLqVnevc12QQ9LZwRvF7q%2Fxnajc0fiZHaSTyuUG4wh6A3Ps%2FAEhUj0SV1IQIbUz1hinB0R%2FXGAZIfNTnKIQnS%2FtZHUo0BTNwSUuH7Wx4AEUkKGzfPIFFxcu7GL2YvM1KGfD8LcB3%2FysHxW%2BsduPnjnC17srox%2BgBtbHJFy6%2FcqR9uGR7HgmwPABPV8qb2XuSM8uzOyWUUR0SndwjHTiS1r1ozAK3YOwaZfOcdd6ShM0x9BrhjYDu9k698sLOd4fJcFg%2BjZu3YLQbQbzRUGPFv%2Fb%2BQXvm%2Bl0ZJR%2BEz7hW9Wpz3GTiMBMM%2FA3MAGOqUBUo%2BAbEYTCofVzb4IPT6UiVLy%2B0QFF7SDeldGsXpel%2BMCUpT7%2F3lmIODF%2FJj3io4IycQpPS1i%2F4VsIJSZn30Qg6TZNYhj%2BX7Mwkw7EM2Y%2FJusxeYpKE5A8W4siKESQ2tskot9y%2BqNk4434vymbLiLtJt1Kvb91g5VuFbpTB9VNCJocoezeIK%2BMdCaxBEfKpNHdm7I3%2FK3HfVbqr%2BuqWXXDQLlsI0p&X-Amz-Signature=961aac68728f569f85a2d411afc902831d90df72992a337791958551307282b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6AD5SS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCcIXP%2F7CZ%2Fi8596r5%2BFcuDFxglEQww2hcRvSDv21NN6gIgMaId%2FnCeTWbWZzp9wSEJNY69gNyDlPFCdkC7Ngn6Vx8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHANiDD7s1BV3HXKvSrcA7LjjkTLNBml0Qp8ib4Cn1GchREVSBVPI7P1WPMGHHbX%2BoTuqWydd2RnznnpSnMMmyl3YsgVoR1JlBOzcgGOWxXeCmtB0Z2iWtDoR1ADIEsqyGuqdG0ilACGPWhr4Mp%2F1OESE8rJyzvbNi6AwLpgZkmni7mkvbBVvB84efgKvi2a%2BIUyh9i7PBn9JzThNeiqLUvko07owPGC4vaKG0wCoudJPPwHE%2FPs%2FVCvDeN4m4EMfw%2BcTugIHjf98ZRWXHQ6h6PRCT1zVZlmIU8NRoKGARnFzOsdC6C0Q4wp45VFeLoHDcxD2vvh1PYpAYaeVojJ%2Fee3ze9DatMLqVnevc12QQ9LZwRvF7q%2Fxnajc0fiZHaSTyuUG4wh6A3Ps%2FAEhUj0SV1IQIbUz1hinB0R%2FXGAZIfNTnKIQnS%2FtZHUo0BTNwSUuH7Wx4AEUkKGzfPIFFxcu7GL2YvM1KGfD8LcB3%2FysHxW%2BsduPnjnC17srox%2BgBtbHJFy6%2FcqR9uGR7HgmwPABPV8qb2XuSM8uzOyWUUR0SndwjHTiS1r1ozAK3YOwaZfOcdd6ShM0x9BrhjYDu9k698sLOd4fJcFg%2BjZu3YLQbQbzRUGPFv%2Fb%2BQXvm%2Bl0ZJR%2BEz7hW9Wpz3GTiMBMM%2FA3MAGOqUBUo%2BAbEYTCofVzb4IPT6UiVLy%2B0QFF7SDeldGsXpel%2BMCUpT7%2F3lmIODF%2FJj3io4IycQpPS1i%2F4VsIJSZn30Qg6TZNYhj%2BX7Mwkw7EM2Y%2FJusxeYpKE5A8W4siKESQ2tskot9y%2BqNk4434vymbLiLtJt1Kvb91g5VuFbpTB9VNCJocoezeIK%2BMdCaxBEfKpNHdm7I3%2FK3HfVbqr%2BuqWXXDQLlsI0p&X-Amz-Signature=d04d2f970301fe2c004b1af9ce8b0effde5ff4f2268593dd9996aa59e6b206c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6AD5SS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCcIXP%2F7CZ%2Fi8596r5%2BFcuDFxglEQww2hcRvSDv21NN6gIgMaId%2FnCeTWbWZzp9wSEJNY69gNyDlPFCdkC7Ngn6Vx8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHANiDD7s1BV3HXKvSrcA7LjjkTLNBml0Qp8ib4Cn1GchREVSBVPI7P1WPMGHHbX%2BoTuqWydd2RnznnpSnMMmyl3YsgVoR1JlBOzcgGOWxXeCmtB0Z2iWtDoR1ADIEsqyGuqdG0ilACGPWhr4Mp%2F1OESE8rJyzvbNi6AwLpgZkmni7mkvbBVvB84efgKvi2a%2BIUyh9i7PBn9JzThNeiqLUvko07owPGC4vaKG0wCoudJPPwHE%2FPs%2FVCvDeN4m4EMfw%2BcTugIHjf98ZRWXHQ6h6PRCT1zVZlmIU8NRoKGARnFzOsdC6C0Q4wp45VFeLoHDcxD2vvh1PYpAYaeVojJ%2Fee3ze9DatMLqVnevc12QQ9LZwRvF7q%2Fxnajc0fiZHaSTyuUG4wh6A3Ps%2FAEhUj0SV1IQIbUz1hinB0R%2FXGAZIfNTnKIQnS%2FtZHUo0BTNwSUuH7Wx4AEUkKGzfPIFFxcu7GL2YvM1KGfD8LcB3%2FysHxW%2BsduPnjnC17srox%2BgBtbHJFy6%2FcqR9uGR7HgmwPABPV8qb2XuSM8uzOyWUUR0SndwjHTiS1r1ozAK3YOwaZfOcdd6ShM0x9BrhjYDu9k698sLOd4fJcFg%2BjZu3YLQbQbzRUGPFv%2Fb%2BQXvm%2Bl0ZJR%2BEz7hW9Wpz3GTiMBMM%2FA3MAGOqUBUo%2BAbEYTCofVzb4IPT6UiVLy%2B0QFF7SDeldGsXpel%2BMCUpT7%2F3lmIODF%2FJj3io4IycQpPS1i%2F4VsIJSZn30Qg6TZNYhj%2BX7Mwkw7EM2Y%2FJusxeYpKE5A8W4siKESQ2tskot9y%2BqNk4434vymbLiLtJt1Kvb91g5VuFbpTB9VNCJocoezeIK%2BMdCaxBEfKpNHdm7I3%2FK3HfVbqr%2BuqWXXDQLlsI0p&X-Amz-Signature=815096b4fba81612cdde47f608ff38a43ab927da3e74861204ad3ddfa0bc4d77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
