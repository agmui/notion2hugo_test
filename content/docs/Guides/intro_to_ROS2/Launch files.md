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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MNYNJP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnUsP2AwW2cZ90QdVdlJc%2F8D%2BaNfYATi7KBhFMAcytfAIhALrg%2BbzYi0Bt%2B6xYZJLO1FijWsgV09tYlCdp1IcujT8HKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkv38HdbHX3UdDJJ4q3APspcCm%2FjirC4YlUq4dyyQ0U9M%2FIy2wdUsBaETjITD5Xz1IAmYeVIDnoMoJ1HmHLkr5ikFPSoNMQlL7Dm24Ik0G8YHRe4VMN3MnmhiDpPYjFt5puKgYHfE9lzhSzzisJTyIxVJHtixRJmzbN7MIkk3VETFShOpoCMyImus%2F81XiVxsd99euN7ksU7ECGsuzGcHCTkgEKgpVlumPtoWLvRIVcxulg1CKijvpehtY6gVMUBr9QJX1ZJpLk%2BX4iNjLui8c1W%2Bl7zyhY6jDyw9TmWS5sC7xG0Z7dQvG2uhw%2F%2F3%2BHH%2BOO3cpLfk3EsyyrPWmbw2c0L9nPrucp381jwXseVw18s6MS4bCJGvNk4kKOalYux3za6qjb5sLKhvfP567lEDdqCoWALtjvL4%2Bwyri%2FVENhH5p7nxYvB%2F3Wi4wZSsPfiJ4C2LvGQABHqiFu1o%2BwanuxqbDcmV85hjyBK2b3MOz8kuugPskzBKATTgLBYE%2F2G%2BZIhkFzwGkYxHcEatcxxzb52B0scRTZgGkW5CppAXaliQykRLzsAo0TGmU0C1p0JvcOOTL5hLNsfCwLraOm6NAhFEWvnOzqisbth1mShed7UXxjWYC1ReGPVkJYFBQGAd782fxOyivk5RB2jCqpI3DBjqkAUmUPFwxq0RRwrrrSKwRpTvs6IN6kRzCuKhV13Lv5KyMFGDS9rRTwFxXlZJT8J46f8E7vLoVw9kODfZUJJG3s9KCh8ONAtfNx1ASItYmowH8tyzjf%2Fe%2BpV9iBJiOlbVQRPQFaWcpJuLsA1D8Le%2BfuuedB%2FuWsXKYUVM7CYCmXVWC8g5FDYDI5eFtB1ePN5e3VIFxGMiS%2F3XFfkjfpjBbFE0s7WmT&X-Amz-Signature=7383149815d1651ab4040b1d956537ceb252a176c0e9aa06c2cdfb8fc4bc0c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MNYNJP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnUsP2AwW2cZ90QdVdlJc%2F8D%2BaNfYATi7KBhFMAcytfAIhALrg%2BbzYi0Bt%2B6xYZJLO1FijWsgV09tYlCdp1IcujT8HKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkv38HdbHX3UdDJJ4q3APspcCm%2FjirC4YlUq4dyyQ0U9M%2FIy2wdUsBaETjITD5Xz1IAmYeVIDnoMoJ1HmHLkr5ikFPSoNMQlL7Dm24Ik0G8YHRe4VMN3MnmhiDpPYjFt5puKgYHfE9lzhSzzisJTyIxVJHtixRJmzbN7MIkk3VETFShOpoCMyImus%2F81XiVxsd99euN7ksU7ECGsuzGcHCTkgEKgpVlumPtoWLvRIVcxulg1CKijvpehtY6gVMUBr9QJX1ZJpLk%2BX4iNjLui8c1W%2Bl7zyhY6jDyw9TmWS5sC7xG0Z7dQvG2uhw%2F%2F3%2BHH%2BOO3cpLfk3EsyyrPWmbw2c0L9nPrucp381jwXseVw18s6MS4bCJGvNk4kKOalYux3za6qjb5sLKhvfP567lEDdqCoWALtjvL4%2Bwyri%2FVENhH5p7nxYvB%2F3Wi4wZSsPfiJ4C2LvGQABHqiFu1o%2BwanuxqbDcmV85hjyBK2b3MOz8kuugPskzBKATTgLBYE%2F2G%2BZIhkFzwGkYxHcEatcxxzb52B0scRTZgGkW5CppAXaliQykRLzsAo0TGmU0C1p0JvcOOTL5hLNsfCwLraOm6NAhFEWvnOzqisbth1mShed7UXxjWYC1ReGPVkJYFBQGAd782fxOyivk5RB2jCqpI3DBjqkAUmUPFwxq0RRwrrrSKwRpTvs6IN6kRzCuKhV13Lv5KyMFGDS9rRTwFxXlZJT8J46f8E7vLoVw9kODfZUJJG3s9KCh8ONAtfNx1ASItYmowH8tyzjf%2Fe%2BpV9iBJiOlbVQRPQFaWcpJuLsA1D8Le%2BfuuedB%2FuWsXKYUVM7CYCmXVWC8g5FDYDI5eFtB1ePN5e3VIFxGMiS%2F3XFfkjfpjBbFE0s7WmT&X-Amz-Signature=27a7ce08c9cefa9bd530ac81d2fd1f32b8f94de983e2f9e72593a1f3fc2ae8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MNYNJP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnUsP2AwW2cZ90QdVdlJc%2F8D%2BaNfYATi7KBhFMAcytfAIhALrg%2BbzYi0Bt%2B6xYZJLO1FijWsgV09tYlCdp1IcujT8HKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkv38HdbHX3UdDJJ4q3APspcCm%2FjirC4YlUq4dyyQ0U9M%2FIy2wdUsBaETjITD5Xz1IAmYeVIDnoMoJ1HmHLkr5ikFPSoNMQlL7Dm24Ik0G8YHRe4VMN3MnmhiDpPYjFt5puKgYHfE9lzhSzzisJTyIxVJHtixRJmzbN7MIkk3VETFShOpoCMyImus%2F81XiVxsd99euN7ksU7ECGsuzGcHCTkgEKgpVlumPtoWLvRIVcxulg1CKijvpehtY6gVMUBr9QJX1ZJpLk%2BX4iNjLui8c1W%2Bl7zyhY6jDyw9TmWS5sC7xG0Z7dQvG2uhw%2F%2F3%2BHH%2BOO3cpLfk3EsyyrPWmbw2c0L9nPrucp381jwXseVw18s6MS4bCJGvNk4kKOalYux3za6qjb5sLKhvfP567lEDdqCoWALtjvL4%2Bwyri%2FVENhH5p7nxYvB%2F3Wi4wZSsPfiJ4C2LvGQABHqiFu1o%2BwanuxqbDcmV85hjyBK2b3MOz8kuugPskzBKATTgLBYE%2F2G%2BZIhkFzwGkYxHcEatcxxzb52B0scRTZgGkW5CppAXaliQykRLzsAo0TGmU0C1p0JvcOOTL5hLNsfCwLraOm6NAhFEWvnOzqisbth1mShed7UXxjWYC1ReGPVkJYFBQGAd782fxOyivk5RB2jCqpI3DBjqkAUmUPFwxq0RRwrrrSKwRpTvs6IN6kRzCuKhV13Lv5KyMFGDS9rRTwFxXlZJT8J46f8E7vLoVw9kODfZUJJG3s9KCh8ONAtfNx1ASItYmowH8tyzjf%2Fe%2BpV9iBJiOlbVQRPQFaWcpJuLsA1D8Le%2BfuuedB%2FuWsXKYUVM7CYCmXVWC8g5FDYDI5eFtB1ePN5e3VIFxGMiS%2F3XFfkjfpjBbFE0s7WmT&X-Amz-Signature=e36496e62832ac7f0f73f893c51f15d0200b9d8c7f928135158af42934a40b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
