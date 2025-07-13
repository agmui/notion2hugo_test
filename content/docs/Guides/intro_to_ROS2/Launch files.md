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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOY3IBKH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECSj6oD9Roeb6Zyjo3qLUl%2Bs%2B7lhJYdQhKuqfMmqpNgIgDpY6G20QSoG4CWGgYL4RAuqwm7YZ2DIe5wWNe4l8Z54q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJeTwkVPG1mGMRbwFircA%2FQ4SlzB4gHZcIERBsN62v2LKf5mL46iZcJ4t31IF%2Flg7U%2BDrwNms%2FFMs0vmS%2BwaXcVMEZGscFImZegY7R26xfux3rvYO20VviX6NsSR0QKL64TiPPYF4Fs9LiALr2%2BXcM%2Fcra3A%2FwzDkgnfFCYBqDLzzGFNVy1vJfL3h4xBTtMt29s%2BQ0zActV%2FRT7hkxE8zbzlTFeoLg75AgWfbxCO0bBmdzaYeqA4L5iLySgSFrLMMYRpuq81oWxP1bL3noEIuNjSK8BTalnM5tfxD6Ts5OJizQPVyqSKxdHEfxKuXGibUtKo9X7aLeyP3i0FL2iv9tV8IA%2BtUuLp%2BvcuSFNHM%2BUuOTcznGDPiF5cfouj%2FZWJgLETLdjmD9RDALPYRg9vAZfFLYy0gO5KMsL9Gtu2FLvdh4DkEDzmofybnSLPTTN7TJT7XiL%2FHTb71tBchVoTwZoSe%2FWqm%2BMmVRlw41t831u20goVNbGhhP3wrZqazp14xDBQj%2B6aA8cIoQyOcbSoBvBfEl%2FGr3%2Bsk7fUeDiCHKwxd0MBatSG4Y0t5x14qi7ttbR5UQSeKninPRg7m2fbdN1aXkJmeTFtS5n6dvmuv0bZYF4%2FP13Rdoq5GuZe8U5BBbjT0bK%2B18ZhwNLmMKylzcMGOqUB5gm2EZrMYBz6zfQLY8gnucAxH1AmB2VOpu5w0gdZ1ILDLWC1Ci%2Be8DNRVQ07%2FXNZFTrI6KlfmBNNWEtvhck3riRNnh1%2FDYxNq39l73nJnV%2Fz6iViYi2xPa9j7OG7h%2FLSwejzlZ3Bg7u0c8pFRn9ISo49cP4AL7zoDdpxgPQHKAg820vX86Ysxg03LoFUmz8GgbcMkS8iLVxmjh1Q7ZteKNlNBjGW&X-Amz-Signature=bb652de38ca7c0cfcd7ab66b875a0e23fd5bacd7c0850f942b608c42ea4596ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOY3IBKH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECSj6oD9Roeb6Zyjo3qLUl%2Bs%2B7lhJYdQhKuqfMmqpNgIgDpY6G20QSoG4CWGgYL4RAuqwm7YZ2DIe5wWNe4l8Z54q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJeTwkVPG1mGMRbwFircA%2FQ4SlzB4gHZcIERBsN62v2LKf5mL46iZcJ4t31IF%2Flg7U%2BDrwNms%2FFMs0vmS%2BwaXcVMEZGscFImZegY7R26xfux3rvYO20VviX6NsSR0QKL64TiPPYF4Fs9LiALr2%2BXcM%2Fcra3A%2FwzDkgnfFCYBqDLzzGFNVy1vJfL3h4xBTtMt29s%2BQ0zActV%2FRT7hkxE8zbzlTFeoLg75AgWfbxCO0bBmdzaYeqA4L5iLySgSFrLMMYRpuq81oWxP1bL3noEIuNjSK8BTalnM5tfxD6Ts5OJizQPVyqSKxdHEfxKuXGibUtKo9X7aLeyP3i0FL2iv9tV8IA%2BtUuLp%2BvcuSFNHM%2BUuOTcznGDPiF5cfouj%2FZWJgLETLdjmD9RDALPYRg9vAZfFLYy0gO5KMsL9Gtu2FLvdh4DkEDzmofybnSLPTTN7TJT7XiL%2FHTb71tBchVoTwZoSe%2FWqm%2BMmVRlw41t831u20goVNbGhhP3wrZqazp14xDBQj%2B6aA8cIoQyOcbSoBvBfEl%2FGr3%2Bsk7fUeDiCHKwxd0MBatSG4Y0t5x14qi7ttbR5UQSeKninPRg7m2fbdN1aXkJmeTFtS5n6dvmuv0bZYF4%2FP13Rdoq5GuZe8U5BBbjT0bK%2B18ZhwNLmMKylzcMGOqUB5gm2EZrMYBz6zfQLY8gnucAxH1AmB2VOpu5w0gdZ1ILDLWC1Ci%2Be8DNRVQ07%2FXNZFTrI6KlfmBNNWEtvhck3riRNnh1%2FDYxNq39l73nJnV%2Fz6iViYi2xPa9j7OG7h%2FLSwejzlZ3Bg7u0c8pFRn9ISo49cP4AL7zoDdpxgPQHKAg820vX86Ysxg03LoFUmz8GgbcMkS8iLVxmjh1Q7ZteKNlNBjGW&X-Amz-Signature=9e5218031349b304c4e750dc069db5b83abb8773b06427c1fd5bc0785c4e56b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOY3IBKH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECSj6oD9Roeb6Zyjo3qLUl%2Bs%2B7lhJYdQhKuqfMmqpNgIgDpY6G20QSoG4CWGgYL4RAuqwm7YZ2DIe5wWNe4l8Z54q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJeTwkVPG1mGMRbwFircA%2FQ4SlzB4gHZcIERBsN62v2LKf5mL46iZcJ4t31IF%2Flg7U%2BDrwNms%2FFMs0vmS%2BwaXcVMEZGscFImZegY7R26xfux3rvYO20VviX6NsSR0QKL64TiPPYF4Fs9LiALr2%2BXcM%2Fcra3A%2FwzDkgnfFCYBqDLzzGFNVy1vJfL3h4xBTtMt29s%2BQ0zActV%2FRT7hkxE8zbzlTFeoLg75AgWfbxCO0bBmdzaYeqA4L5iLySgSFrLMMYRpuq81oWxP1bL3noEIuNjSK8BTalnM5tfxD6Ts5OJizQPVyqSKxdHEfxKuXGibUtKo9X7aLeyP3i0FL2iv9tV8IA%2BtUuLp%2BvcuSFNHM%2BUuOTcznGDPiF5cfouj%2FZWJgLETLdjmD9RDALPYRg9vAZfFLYy0gO5KMsL9Gtu2FLvdh4DkEDzmofybnSLPTTN7TJT7XiL%2FHTb71tBchVoTwZoSe%2FWqm%2BMmVRlw41t831u20goVNbGhhP3wrZqazp14xDBQj%2B6aA8cIoQyOcbSoBvBfEl%2FGr3%2Bsk7fUeDiCHKwxd0MBatSG4Y0t5x14qi7ttbR5UQSeKninPRg7m2fbdN1aXkJmeTFtS5n6dvmuv0bZYF4%2FP13Rdoq5GuZe8U5BBbjT0bK%2B18ZhwNLmMKylzcMGOqUB5gm2EZrMYBz6zfQLY8gnucAxH1AmB2VOpu5w0gdZ1ILDLWC1Ci%2Be8DNRVQ07%2FXNZFTrI6KlfmBNNWEtvhck3riRNnh1%2FDYxNq39l73nJnV%2Fz6iViYi2xPa9j7OG7h%2FLSwejzlZ3Bg7u0c8pFRn9ISo49cP4AL7zoDdpxgPQHKAg820vX86Ysxg03LoFUmz8GgbcMkS8iLVxmjh1Q7ZteKNlNBjGW&X-Amz-Signature=b19f3c307a36c7a477f045736090bfdf0fa552722bc347902a41433b2bae5138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
