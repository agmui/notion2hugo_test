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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY7QWHEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcJy2TbCPe%2BguuZnGSHjN4O2anod5c43gdFN6vB3iogAIgEKW4AdzTpS3L5%2FiKnxvJjARtMVaMcckAOdiqGWncxkYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPQllb3oVOdJQQfhiCrcA%2FIa50KfK9Hk6MJAe2se%2FWEoCEcdquYEZ1QRaJ8fMF5jBWSfOXjS5LTCg22S01koch%2Bz7iAzoRecJKJras7G2cEUUjIiTEawD3dFQPKop4XeYLch4YFoCc4Kr1WPceaHFpHyB3bRZ7OUqxt680HtBAETVH80UNKK80ZQOcoRjIOO%2BSvYnhcpisOQgX%2Bg%2BDfhwNEbLxJutrqvwzr1dokCE5eEkJ6ytM2zK%2Bc0fG1t5AEHbqCOaduCvPaN12yajF4gCmIeI%2BlYtBVxKOnoWY%2BtloAY10IyQ4ayNyRV13f7%2BHo5q0vS8nT0iALRZyB1uIJwFV3Z6EKdwQlTDfDWlMbETQaKCvGJ%2FvU%2FIIAuaaP8mKKmz6wuQOdQwb%2B27xLkijqmzYEHGarIY1onB9AhBTkl0N3%2BeFckwqRas0Jn4kDCrQ2KvNhd1ojyDOaF8nic3Hj27%2FwZuwLJcNr20xZbEdQXNeaabt%2F2rPFgadiEgqYk76%2FW979nBDsm1nE1Zkjgmslal4yIUuTDisvXnbP%2B%2BPx2pPk%2BKwIeb%2Ft%2BwE843eG%2B9FP2mG1%2Bc2ZpwygCutYe7SkTLHYVPToSH6cD6woCoT9j5d2cyjY3hMSG7RGtZkXFFL5TcVzof1JDjks8WUBRMKqm878GOqUBSDIkRiV9dQJCdxUVlsDVcK%2Fmz3uyFyeeM2bKMe2Px1C%2BlgP%2Bk3IoSfSAMHCWRfBEPdUhGbrnMu6P60yC2l8jsvYdwL%2FlW9dg4PweGeHnXf5x0YdQNgorPoMWzDna%2BRxZIHagUELXCcl39xbd3Noe96g9PFhYWDzTj3Eda81Fs4pEuPifCvE%2BNyZnCUxpWbskZLGK%2BNCwwwv9zh82gVYYg89KbGUa&X-Amz-Signature=3d76a6898d2195738df8e689f9c5a1bceb13ef9fb8915cc706e85588b1b20186&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY7QWHEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcJy2TbCPe%2BguuZnGSHjN4O2anod5c43gdFN6vB3iogAIgEKW4AdzTpS3L5%2FiKnxvJjARtMVaMcckAOdiqGWncxkYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPQllb3oVOdJQQfhiCrcA%2FIa50KfK9Hk6MJAe2se%2FWEoCEcdquYEZ1QRaJ8fMF5jBWSfOXjS5LTCg22S01koch%2Bz7iAzoRecJKJras7G2cEUUjIiTEawD3dFQPKop4XeYLch4YFoCc4Kr1WPceaHFpHyB3bRZ7OUqxt680HtBAETVH80UNKK80ZQOcoRjIOO%2BSvYnhcpisOQgX%2Bg%2BDfhwNEbLxJutrqvwzr1dokCE5eEkJ6ytM2zK%2Bc0fG1t5AEHbqCOaduCvPaN12yajF4gCmIeI%2BlYtBVxKOnoWY%2BtloAY10IyQ4ayNyRV13f7%2BHo5q0vS8nT0iALRZyB1uIJwFV3Z6EKdwQlTDfDWlMbETQaKCvGJ%2FvU%2FIIAuaaP8mKKmz6wuQOdQwb%2B27xLkijqmzYEHGarIY1onB9AhBTkl0N3%2BeFckwqRas0Jn4kDCrQ2KvNhd1ojyDOaF8nic3Hj27%2FwZuwLJcNr20xZbEdQXNeaabt%2F2rPFgadiEgqYk76%2FW979nBDsm1nE1Zkjgmslal4yIUuTDisvXnbP%2B%2BPx2pPk%2BKwIeb%2Ft%2BwE843eG%2B9FP2mG1%2Bc2ZpwygCutYe7SkTLHYVPToSH6cD6woCoT9j5d2cyjY3hMSG7RGtZkXFFL5TcVzof1JDjks8WUBRMKqm878GOqUBSDIkRiV9dQJCdxUVlsDVcK%2Fmz3uyFyeeM2bKMe2Px1C%2BlgP%2Bk3IoSfSAMHCWRfBEPdUhGbrnMu6P60yC2l8jsvYdwL%2FlW9dg4PweGeHnXf5x0YdQNgorPoMWzDna%2BRxZIHagUELXCcl39xbd3Noe96g9PFhYWDzTj3Eda81Fs4pEuPifCvE%2BNyZnCUxpWbskZLGK%2BNCwwwv9zh82gVYYg89KbGUa&X-Amz-Signature=b9ca235016abdc29f07bf924ca37da4ecde96e0cd1ba659e725a081184cb0edc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY7QWHEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcJy2TbCPe%2BguuZnGSHjN4O2anod5c43gdFN6vB3iogAIgEKW4AdzTpS3L5%2FiKnxvJjARtMVaMcckAOdiqGWncxkYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPQllb3oVOdJQQfhiCrcA%2FIa50KfK9Hk6MJAe2se%2FWEoCEcdquYEZ1QRaJ8fMF5jBWSfOXjS5LTCg22S01koch%2Bz7iAzoRecJKJras7G2cEUUjIiTEawD3dFQPKop4XeYLch4YFoCc4Kr1WPceaHFpHyB3bRZ7OUqxt680HtBAETVH80UNKK80ZQOcoRjIOO%2BSvYnhcpisOQgX%2Bg%2BDfhwNEbLxJutrqvwzr1dokCE5eEkJ6ytM2zK%2Bc0fG1t5AEHbqCOaduCvPaN12yajF4gCmIeI%2BlYtBVxKOnoWY%2BtloAY10IyQ4ayNyRV13f7%2BHo5q0vS8nT0iALRZyB1uIJwFV3Z6EKdwQlTDfDWlMbETQaKCvGJ%2FvU%2FIIAuaaP8mKKmz6wuQOdQwb%2B27xLkijqmzYEHGarIY1onB9AhBTkl0N3%2BeFckwqRas0Jn4kDCrQ2KvNhd1ojyDOaF8nic3Hj27%2FwZuwLJcNr20xZbEdQXNeaabt%2F2rPFgadiEgqYk76%2FW979nBDsm1nE1Zkjgmslal4yIUuTDisvXnbP%2B%2BPx2pPk%2BKwIeb%2Ft%2BwE843eG%2B9FP2mG1%2Bc2ZpwygCutYe7SkTLHYVPToSH6cD6woCoT9j5d2cyjY3hMSG7RGtZkXFFL5TcVzof1JDjks8WUBRMKqm878GOqUBSDIkRiV9dQJCdxUVlsDVcK%2Fmz3uyFyeeM2bKMe2Px1C%2BlgP%2Bk3IoSfSAMHCWRfBEPdUhGbrnMu6P60yC2l8jsvYdwL%2FlW9dg4PweGeHnXf5x0YdQNgorPoMWzDna%2BRxZIHagUELXCcl39xbd3Noe96g9PFhYWDzTj3Eda81Fs4pEuPifCvE%2BNyZnCUxpWbskZLGK%2BNCwwwv9zh82gVYYg89KbGUa&X-Amz-Signature=ac425fe691852b193a81601a413ac77a04f1a46a6db95a03bb22cd7e277d62ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
