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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTWSIF7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDV3jZF4VWn48Yt%2BtEnp2cmbMHSJlx2qtYTBLxrSBjKYgIhAPwPo3GUPhrhtHncy9%2FEJ2b1xe37qyS0%2FTmkDLL%2BHAaSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCd3ixaEeDiK0YiQIq3ANGNYP2okESSx4iMo3XTEmXkIm28%2B0Bb0Mq%2BirgZfztwmdb4OKRF%2FxV3Dzv5SLxIlqu20LNxEHZZ3b%2BhSrEIzjG5CpKb5xX1mTkIicl9vRvOcaTEOL5zcKzRA46hlrSoK%2BEx1T%2FSLTyELEJMT7Pl77yp%2Fh2KuxMqvqm5F1Y46IJDnP2z%2BJaAejuQCDYUQQ3dM2xZpOqoOG0daGfrNF5nWT64EccLHapsaiHMcpsv4ZSr0%2FgtLy1xCGX9aYxptBGPoBm5QZ%2BYgp7wpYexp57PWaOa7nn%2Fwv3nA8%2BxTrwLxPzI%2FUqOpig2lYSpwdwHmvIlVFQfUoT4968ZPJSTtX2CJ7ZIGq%2BRmKdeu1fVDgKhJorL4JjImsFe7tS1h5qjLF99f%2BaoQN8LZETNa64qiQ8cUVsOx0lv7SH8TaYrsiWac2PlacXWIj1FQhqHsgskEqcBpP5M667KHU2meZPtt9epJMWq1d%2BpGykG2vNo3XcYsFFuUcYN103rl1nIUpyExnX0acZrAYK03AuP3Uax%2BW%2FMNqL5lvuHAZYCTkzK%2BVCu7%2BIc9Zag2fMFX1u3Lxlw7pwRphwaLNsSCWPc8V3Xj%2Fk74DeWbs1uimw5Dyjm2JqD%2FqOV8MKCRqiEh%2FXxQIcczCk1YTBBjqkAZhuqMUDgizzPSGXjuvi7VBz6Rttp%2BaT1bOCgfAetIbi85aDOrmqXjkJ4V7DqnZyEHuUKPiMx3uvt0xp4V6UMJLM6G%2F%2FjB8AgvENwgibeNdLFwF941O2nDPAIqYYf%2FzWp%2FfIIt%2BZHxoOXJwI6AbgCf6l9to4lj1UVxy4qqDrofSiYjGKBCdhlCUxvgk4kK8JeXPbn7IzN2Xfv%2FBWVRVOpoz7pNRb&X-Amz-Signature=c7065f229b3393687f9e198970a9ec2bd69bea3d37e676b47ff4e1c07e49d65e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTWSIF7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDV3jZF4VWn48Yt%2BtEnp2cmbMHSJlx2qtYTBLxrSBjKYgIhAPwPo3GUPhrhtHncy9%2FEJ2b1xe37qyS0%2FTmkDLL%2BHAaSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCd3ixaEeDiK0YiQIq3ANGNYP2okESSx4iMo3XTEmXkIm28%2B0Bb0Mq%2BirgZfztwmdb4OKRF%2FxV3Dzv5SLxIlqu20LNxEHZZ3b%2BhSrEIzjG5CpKb5xX1mTkIicl9vRvOcaTEOL5zcKzRA46hlrSoK%2BEx1T%2FSLTyELEJMT7Pl77yp%2Fh2KuxMqvqm5F1Y46IJDnP2z%2BJaAejuQCDYUQQ3dM2xZpOqoOG0daGfrNF5nWT64EccLHapsaiHMcpsv4ZSr0%2FgtLy1xCGX9aYxptBGPoBm5QZ%2BYgp7wpYexp57PWaOa7nn%2Fwv3nA8%2BxTrwLxPzI%2FUqOpig2lYSpwdwHmvIlVFQfUoT4968ZPJSTtX2CJ7ZIGq%2BRmKdeu1fVDgKhJorL4JjImsFe7tS1h5qjLF99f%2BaoQN8LZETNa64qiQ8cUVsOx0lv7SH8TaYrsiWac2PlacXWIj1FQhqHsgskEqcBpP5M667KHU2meZPtt9epJMWq1d%2BpGykG2vNo3XcYsFFuUcYN103rl1nIUpyExnX0acZrAYK03AuP3Uax%2BW%2FMNqL5lvuHAZYCTkzK%2BVCu7%2BIc9Zag2fMFX1u3Lxlw7pwRphwaLNsSCWPc8V3Xj%2Fk74DeWbs1uimw5Dyjm2JqD%2FqOV8MKCRqiEh%2FXxQIcczCk1YTBBjqkAZhuqMUDgizzPSGXjuvi7VBz6Rttp%2BaT1bOCgfAetIbi85aDOrmqXjkJ4V7DqnZyEHuUKPiMx3uvt0xp4V6UMJLM6G%2F%2FjB8AgvENwgibeNdLFwF941O2nDPAIqYYf%2FzWp%2FfIIt%2BZHxoOXJwI6AbgCf6l9to4lj1UVxy4qqDrofSiYjGKBCdhlCUxvgk4kK8JeXPbn7IzN2Xfv%2FBWVRVOpoz7pNRb&X-Amz-Signature=e0966b1e75fb092f453b63e7a4b72120ae4a58f700a711811efdf63b7ab8a1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTWSIF7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDV3jZF4VWn48Yt%2BtEnp2cmbMHSJlx2qtYTBLxrSBjKYgIhAPwPo3GUPhrhtHncy9%2FEJ2b1xe37qyS0%2FTmkDLL%2BHAaSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCd3ixaEeDiK0YiQIq3ANGNYP2okESSx4iMo3XTEmXkIm28%2B0Bb0Mq%2BirgZfztwmdb4OKRF%2FxV3Dzv5SLxIlqu20LNxEHZZ3b%2BhSrEIzjG5CpKb5xX1mTkIicl9vRvOcaTEOL5zcKzRA46hlrSoK%2BEx1T%2FSLTyELEJMT7Pl77yp%2Fh2KuxMqvqm5F1Y46IJDnP2z%2BJaAejuQCDYUQQ3dM2xZpOqoOG0daGfrNF5nWT64EccLHapsaiHMcpsv4ZSr0%2FgtLy1xCGX9aYxptBGPoBm5QZ%2BYgp7wpYexp57PWaOa7nn%2Fwv3nA8%2BxTrwLxPzI%2FUqOpig2lYSpwdwHmvIlVFQfUoT4968ZPJSTtX2CJ7ZIGq%2BRmKdeu1fVDgKhJorL4JjImsFe7tS1h5qjLF99f%2BaoQN8LZETNa64qiQ8cUVsOx0lv7SH8TaYrsiWac2PlacXWIj1FQhqHsgskEqcBpP5M667KHU2meZPtt9epJMWq1d%2BpGykG2vNo3XcYsFFuUcYN103rl1nIUpyExnX0acZrAYK03AuP3Uax%2BW%2FMNqL5lvuHAZYCTkzK%2BVCu7%2BIc9Zag2fMFX1u3Lxlw7pwRphwaLNsSCWPc8V3Xj%2Fk74DeWbs1uimw5Dyjm2JqD%2FqOV8MKCRqiEh%2FXxQIcczCk1YTBBjqkAZhuqMUDgizzPSGXjuvi7VBz6Rttp%2BaT1bOCgfAetIbi85aDOrmqXjkJ4V7DqnZyEHuUKPiMx3uvt0xp4V6UMJLM6G%2F%2FjB8AgvENwgibeNdLFwF941O2nDPAIqYYf%2FzWp%2FfIIt%2BZHxoOXJwI6AbgCf6l9to4lj1UVxy4qqDrofSiYjGKBCdhlCUxvgk4kK8JeXPbn7IzN2Xfv%2FBWVRVOpoz7pNRb&X-Amz-Signature=29336236df31706e5d8e3ce9048c516d8d5623f185545aeddf7168afefa9e384&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
