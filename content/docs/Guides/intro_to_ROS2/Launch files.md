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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUDMBUV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAyIdFpMP873R5iaGwNqqf2h9mexMnyjN3hZzLLxNSe%2BAiByKFJex3n1oR4%2BI0Jkj%2FiTY%2BVrbQVMbbPNgx%2BiLaEpwyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v%2BW7cc6LzMY1S%2BfKtwDIUb470ZrmuB3A7%2Bk0vq9qNz5eJVNaev87AL5ZK3CCUsWLePihbTQk%2BJJ%2F2UZ2Z%2BU3KcfvameLmmbsbAg5Yd55kfEDMGgyEfmK4DBZjwDlUuB0kqPl%2Fw%2FYobhe%2FpJpaVgKytqC2TJnkSg2BYG9tRcyQOUMxqOrRlAaiVkyXS%2BnDFSQ9%2FrC%2F4ag7mI1Moh7ZbwYIK4k6L62UgYLxSaNppsQRVyo7vHTn7InmVIe4516rYiRFT8g5PF%2B%2FBBxByuyIZj%2FJIGPn9%2Bdxu42XzXVQ4TTk33pPzjh%2Bkb2T0V4IRTmlhYXprp2AxIl015Q52qnxA31J7%2B7mtCh7LgI2Z8vGkTQFRLBZDzHjQuuLI5KIzeemNOAV2geKn5oGzacQC9nb6ebcmSem9T30bgljdKYEVv7h6eEfD2YMUBI5vwY0pftBRMOgwhxwzUmfLKMLbbXOFTMOehMMhIHOensEbRVy64c0DxCtlEudpolsCPl6dzlI9f8WNnnMLHJTQQzvaBcT18EtVCGN4M%2Fr1z659fYghCkaeuNJRZZNaqZeqXm%2F7s0U4t2b1cKttHpJN9p7nul8Iz6teCddsgy90Sw8t6HvdhBTMNZMF98l3NlPxQyrJGv%2B8cK08ALtujsuahWsUwttj3vgY6pgGL7ZXut10wxKHpSh%2FKkRP%2B4Jfupa5bMz9RapsO6i%2FDe60k%2B6XqwzrCGh5X6gaxnNgXUHxn6u60p%2F4Z4E2skOswg8bObZ3UnxF3Py3HciKSdFZUKXZ1EoKCNuzIkHwqzQQnWfufYyaKVAmFmUTpEcydYoA8T7ioGIm9%2Fh2cY%2BM16yhNxQVPsgudUbft3ZP%2FmLaPIzcYNk%2FYiVdB718%2FgkwhneM6BtuB&X-Amz-Signature=eb748f70ff2774b8f13a7a61eb8b58ac1f8b44c2731f16e7af5eef12411222cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUDMBUV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAyIdFpMP873R5iaGwNqqf2h9mexMnyjN3hZzLLxNSe%2BAiByKFJex3n1oR4%2BI0Jkj%2FiTY%2BVrbQVMbbPNgx%2BiLaEpwyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v%2BW7cc6LzMY1S%2BfKtwDIUb470ZrmuB3A7%2Bk0vq9qNz5eJVNaev87AL5ZK3CCUsWLePihbTQk%2BJJ%2F2UZ2Z%2BU3KcfvameLmmbsbAg5Yd55kfEDMGgyEfmK4DBZjwDlUuB0kqPl%2Fw%2FYobhe%2FpJpaVgKytqC2TJnkSg2BYG9tRcyQOUMxqOrRlAaiVkyXS%2BnDFSQ9%2FrC%2F4ag7mI1Moh7ZbwYIK4k6L62UgYLxSaNppsQRVyo7vHTn7InmVIe4516rYiRFT8g5PF%2B%2FBBxByuyIZj%2FJIGPn9%2Bdxu42XzXVQ4TTk33pPzjh%2Bkb2T0V4IRTmlhYXprp2AxIl015Q52qnxA31J7%2B7mtCh7LgI2Z8vGkTQFRLBZDzHjQuuLI5KIzeemNOAV2geKn5oGzacQC9nb6ebcmSem9T30bgljdKYEVv7h6eEfD2YMUBI5vwY0pftBRMOgwhxwzUmfLKMLbbXOFTMOehMMhIHOensEbRVy64c0DxCtlEudpolsCPl6dzlI9f8WNnnMLHJTQQzvaBcT18EtVCGN4M%2Fr1z659fYghCkaeuNJRZZNaqZeqXm%2F7s0U4t2b1cKttHpJN9p7nul8Iz6teCddsgy90Sw8t6HvdhBTMNZMF98l3NlPxQyrJGv%2B8cK08ALtujsuahWsUwttj3vgY6pgGL7ZXut10wxKHpSh%2FKkRP%2B4Jfupa5bMz9RapsO6i%2FDe60k%2B6XqwzrCGh5X6gaxnNgXUHxn6u60p%2F4Z4E2skOswg8bObZ3UnxF3Py3HciKSdFZUKXZ1EoKCNuzIkHwqzQQnWfufYyaKVAmFmUTpEcydYoA8T7ioGIm9%2Fh2cY%2BM16yhNxQVPsgudUbft3ZP%2FmLaPIzcYNk%2FYiVdB718%2FgkwhneM6BtuB&X-Amz-Signature=5b25c4d9610994b9c7e503dcab98f246566dedfdafc132f3e8bdc12246d80b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUDMBUV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAyIdFpMP873R5iaGwNqqf2h9mexMnyjN3hZzLLxNSe%2BAiByKFJex3n1oR4%2BI0Jkj%2FiTY%2BVrbQVMbbPNgx%2BiLaEpwyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v%2BW7cc6LzMY1S%2BfKtwDIUb470ZrmuB3A7%2Bk0vq9qNz5eJVNaev87AL5ZK3CCUsWLePihbTQk%2BJJ%2F2UZ2Z%2BU3KcfvameLmmbsbAg5Yd55kfEDMGgyEfmK4DBZjwDlUuB0kqPl%2Fw%2FYobhe%2FpJpaVgKytqC2TJnkSg2BYG9tRcyQOUMxqOrRlAaiVkyXS%2BnDFSQ9%2FrC%2F4ag7mI1Moh7ZbwYIK4k6L62UgYLxSaNppsQRVyo7vHTn7InmVIe4516rYiRFT8g5PF%2B%2FBBxByuyIZj%2FJIGPn9%2Bdxu42XzXVQ4TTk33pPzjh%2Bkb2T0V4IRTmlhYXprp2AxIl015Q52qnxA31J7%2B7mtCh7LgI2Z8vGkTQFRLBZDzHjQuuLI5KIzeemNOAV2geKn5oGzacQC9nb6ebcmSem9T30bgljdKYEVv7h6eEfD2YMUBI5vwY0pftBRMOgwhxwzUmfLKMLbbXOFTMOehMMhIHOensEbRVy64c0DxCtlEudpolsCPl6dzlI9f8WNnnMLHJTQQzvaBcT18EtVCGN4M%2Fr1z659fYghCkaeuNJRZZNaqZeqXm%2F7s0U4t2b1cKttHpJN9p7nul8Iz6teCddsgy90Sw8t6HvdhBTMNZMF98l3NlPxQyrJGv%2B8cK08ALtujsuahWsUwttj3vgY6pgGL7ZXut10wxKHpSh%2FKkRP%2B4Jfupa5bMz9RapsO6i%2FDe60k%2B6XqwzrCGh5X6gaxnNgXUHxn6u60p%2F4Z4E2skOswg8bObZ3UnxF3Py3HciKSdFZUKXZ1EoKCNuzIkHwqzQQnWfufYyaKVAmFmUTpEcydYoA8T7ioGIm9%2Fh2cY%2BM16yhNxQVPsgudUbft3ZP%2FmLaPIzcYNk%2FYiVdB718%2FgkwhneM6BtuB&X-Amz-Signature=ac5b6b4fe11cab258eb93ee8872ab550c8b1681fed1add5da9798b3bdeee4884&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
