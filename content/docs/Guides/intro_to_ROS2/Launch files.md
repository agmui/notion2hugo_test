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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2MUCII%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBoXMej3trr6CVFtpbzENfILSkEYWevhf7V1CNVNYPi1AiBUwIaKjrJWv0vUo0GUgBiWpbd%2BG9w%2BSVXWG0lN8h3J8SqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkOo1pCVddPV6bgqKtwDxSytfEbVo5Vr8lWy2BvqF9hq%2FHGUH%2BKW2IdqmaGPruWszmmRYoOfaHfCxwUHQf%2BqUv2I5QRER1N1YFzn2TOWzN6R4ReEE9i6P5e0wLn1HEFGzNOO2gI4Yu1VFDGqu8obn7rFkheGvJAJJJLEq2cmvz8lfJkVWt7ZOpRm9eyIjv2rkxIRpD7vDhdGDj%2FBr%2BhcpMzYvO5%2FIRlNC2Uum8TIIx%2Ba3HEnBV4SPPW7oM2ClFmBJK9zLFu51kndoFDCfaQuTLY96xrfocX7fHW%2BGMDbpMJf6619ieLuoGH2j57QY330Jf1MdeF7VVNh8Ib9A8UR7MSbAlH9cqcdBPd%2FBe2lxxVSDiGL2k8MpZtvIXpUjsiL61%2BJFGReTGq5tAcZKhzbrIBGWdYFRbsxdpXvWOICQkk3zLPYX8HCzq4ktSa8qBudmB%2FsYv%2F0S6sd0mIoo7z2rA97Wp3YVhC5UZJg8%2FVBfVdwxwFY%2B%2BcmFUwJHbWNGtRCf6fTQrAJRCw2nQShf2mbn3ya1imbAb73MLQt9FEwOUd%2F%2FPrAf747NAXNSyWlCwdMARx0VcsLioopIgCsv%2B3xq6Mr7HXhTECHhvG2B%2BVqy2%2BHbrxe1qgaBE8SASvyYNTE9hiMMJCtyblajPMwy%2FPdvwY6pgEA2hMBP7clfNPXwjybdijuiby2CDMdSxWm3M80cWFNr0YJnp9ZJM21tor%2BmzGejSt4H5WD8Y%2Bsbsa6cKWZqpEF%2FGFbhC9JHwKjCm%2BauW1Ag0s7GcWfI8szzNmYCosr%2BUPWhwOdRy4aXe6g%2BUPQ3%2B2dTc3xntAQS2dwo7zdy6Rfvr5e23AiWTeRkXf15b%2BMRoNeT7Z7n5xCM3dazJ36lNDJW%2FTqyuks&X-Amz-Signature=419e2721b7322fee2d6d166ec744ad1026569decbcbc9c67bf6dfff9e6d18a29&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2MUCII%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBoXMej3trr6CVFtpbzENfILSkEYWevhf7V1CNVNYPi1AiBUwIaKjrJWv0vUo0GUgBiWpbd%2BG9w%2BSVXWG0lN8h3J8SqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkOo1pCVddPV6bgqKtwDxSytfEbVo5Vr8lWy2BvqF9hq%2FHGUH%2BKW2IdqmaGPruWszmmRYoOfaHfCxwUHQf%2BqUv2I5QRER1N1YFzn2TOWzN6R4ReEE9i6P5e0wLn1HEFGzNOO2gI4Yu1VFDGqu8obn7rFkheGvJAJJJLEq2cmvz8lfJkVWt7ZOpRm9eyIjv2rkxIRpD7vDhdGDj%2FBr%2BhcpMzYvO5%2FIRlNC2Uum8TIIx%2Ba3HEnBV4SPPW7oM2ClFmBJK9zLFu51kndoFDCfaQuTLY96xrfocX7fHW%2BGMDbpMJf6619ieLuoGH2j57QY330Jf1MdeF7VVNh8Ib9A8UR7MSbAlH9cqcdBPd%2FBe2lxxVSDiGL2k8MpZtvIXpUjsiL61%2BJFGReTGq5tAcZKhzbrIBGWdYFRbsxdpXvWOICQkk3zLPYX8HCzq4ktSa8qBudmB%2FsYv%2F0S6sd0mIoo7z2rA97Wp3YVhC5UZJg8%2FVBfVdwxwFY%2B%2BcmFUwJHbWNGtRCf6fTQrAJRCw2nQShf2mbn3ya1imbAb73MLQt9FEwOUd%2F%2FPrAf747NAXNSyWlCwdMARx0VcsLioopIgCsv%2B3xq6Mr7HXhTECHhvG2B%2BVqy2%2BHbrxe1qgaBE8SASvyYNTE9hiMMJCtyblajPMwy%2FPdvwY6pgEA2hMBP7clfNPXwjybdijuiby2CDMdSxWm3M80cWFNr0YJnp9ZJM21tor%2BmzGejSt4H5WD8Y%2Bsbsa6cKWZqpEF%2FGFbhC9JHwKjCm%2BauW1Ag0s7GcWfI8szzNmYCosr%2BUPWhwOdRy4aXe6g%2BUPQ3%2B2dTc3xntAQS2dwo7zdy6Rfvr5e23AiWTeRkXf15b%2BMRoNeT7Z7n5xCM3dazJ36lNDJW%2FTqyuks&X-Amz-Signature=caa7536efa6e480d8ca229cb5a4476f6fddd073a17a70ff2f5bc3186e89c79b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2MUCII%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBoXMej3trr6CVFtpbzENfILSkEYWevhf7V1CNVNYPi1AiBUwIaKjrJWv0vUo0GUgBiWpbd%2BG9w%2BSVXWG0lN8h3J8SqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkOo1pCVddPV6bgqKtwDxSytfEbVo5Vr8lWy2BvqF9hq%2FHGUH%2BKW2IdqmaGPruWszmmRYoOfaHfCxwUHQf%2BqUv2I5QRER1N1YFzn2TOWzN6R4ReEE9i6P5e0wLn1HEFGzNOO2gI4Yu1VFDGqu8obn7rFkheGvJAJJJLEq2cmvz8lfJkVWt7ZOpRm9eyIjv2rkxIRpD7vDhdGDj%2FBr%2BhcpMzYvO5%2FIRlNC2Uum8TIIx%2Ba3HEnBV4SPPW7oM2ClFmBJK9zLFu51kndoFDCfaQuTLY96xrfocX7fHW%2BGMDbpMJf6619ieLuoGH2j57QY330Jf1MdeF7VVNh8Ib9A8UR7MSbAlH9cqcdBPd%2FBe2lxxVSDiGL2k8MpZtvIXpUjsiL61%2BJFGReTGq5tAcZKhzbrIBGWdYFRbsxdpXvWOICQkk3zLPYX8HCzq4ktSa8qBudmB%2FsYv%2F0S6sd0mIoo7z2rA97Wp3YVhC5UZJg8%2FVBfVdwxwFY%2B%2BcmFUwJHbWNGtRCf6fTQrAJRCw2nQShf2mbn3ya1imbAb73MLQt9FEwOUd%2F%2FPrAf747NAXNSyWlCwdMARx0VcsLioopIgCsv%2B3xq6Mr7HXhTECHhvG2B%2BVqy2%2BHbrxe1qgaBE8SASvyYNTE9hiMMJCtyblajPMwy%2FPdvwY6pgEA2hMBP7clfNPXwjybdijuiby2CDMdSxWm3M80cWFNr0YJnp9ZJM21tor%2BmzGejSt4H5WD8Y%2Bsbsa6cKWZqpEF%2FGFbhC9JHwKjCm%2BauW1Ag0s7GcWfI8szzNmYCosr%2BUPWhwOdRy4aXe6g%2BUPQ3%2B2dTc3xntAQS2dwo7zdy6Rfvr5e23AiWTeRkXf15b%2BMRoNeT7Z7n5xCM3dazJ36lNDJW%2FTqyuks&X-Amz-Signature=754d608db934fba777dfcdeece9f009116831fc68af79f3090b65078d0efd81a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
