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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DF3MXZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkM8jBWZen%2Bd29wjy80%2B0Grt5Mr3WdfJE23J2SpVwtVAIhAL63G2ZIokvpEfq%2FqT4DDEKJeYZ1QI2vuYvgJkrO%2Fad9Kv8DCBkQABoMNjM3NDIzMTgzODA1IgwJYx1Tjt%2Bf%2FSGVrqcq3ANgTQu2sYZ0HW5N%2BHyP1oS%2Fv37I5H8jQ0FrFh%2FDzMRtahobaZi%2B%2F5iKMyvNgo%2FAp5ZqtDZvqemMBY4MRnNKXLwbLmUbTvg%2FXo8it2mXpDnRuSPOKBnHdR5p2yawRfc3BegBEM%2FXh91QIOLtxlDDZVTwSLvFWHoXiJzPcrKaaX7wKVo6nrupOWwUdFpK0TLVtmK5UH7nFE4gf9v%2B4vdwYs87Qo9n5CF6uGvMKd2CAb4eYMDT8gi5wOEmX1YlIbfWZf32uZawtTCQjfeWug0djH9g6t5PeB70hLvsbiBd0febBP7h7PdboIEttfb9PMHpDhiHSRR4lXlTjPBdPzzG99iLm6KOMAjO4gn98WrnBBxZCa1Y72U1kXuB%2FawmBFxQMt7AOSsF5fgoFDzL1DJB5uP72SCzYvLae00ij7MFbVbAnsH7Wymxg6MBPySpOVy3pe87iUW4YH%2FggG%2F13GBRccvjWUduV%2BM%2FHhh2fYE3WQrJma2e3Ln9JaSNyAu%2B0k3yQWQwly0U8uc4PIKiIK1mEO8K%2BtdIIbDWxVvr81NtcFBW1dOPSV%2BfplkWyxpJpDkkehe8wXXTLixkku8BUWxU0bAcIPX9gvi0NgVWH9Xt6MOpcitOzLFswOFK1bLJGDDsuanABjqkAQXqqeZtpDgOXt1DAaV8GRYOk7881DqnWYvlC7r6F3FD8hh5N6BzBkh7Wucy8J%2BZn5BxYKpIHG5SKC%2FkpwP%2B5PAi3YMXokuBM1JGUS%2Bco0bQyuhJcAD%2Fz4eB5GfK0TEi79Gw05q5toNBzvEWxb6ev70VRkKFziLXcRaqyEE3Uy%2FTf8pJa4W3NxDzlol9R135FYpxnH2EPelJ1G0srmAyELX3lW89&X-Amz-Signature=655b1936472f89cd5dcaa495bba65854d85d4649fa1ca2f762ec025796624a25&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DF3MXZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkM8jBWZen%2Bd29wjy80%2B0Grt5Mr3WdfJE23J2SpVwtVAIhAL63G2ZIokvpEfq%2FqT4DDEKJeYZ1QI2vuYvgJkrO%2Fad9Kv8DCBkQABoMNjM3NDIzMTgzODA1IgwJYx1Tjt%2Bf%2FSGVrqcq3ANgTQu2sYZ0HW5N%2BHyP1oS%2Fv37I5H8jQ0FrFh%2FDzMRtahobaZi%2B%2F5iKMyvNgo%2FAp5ZqtDZvqemMBY4MRnNKXLwbLmUbTvg%2FXo8it2mXpDnRuSPOKBnHdR5p2yawRfc3BegBEM%2FXh91QIOLtxlDDZVTwSLvFWHoXiJzPcrKaaX7wKVo6nrupOWwUdFpK0TLVtmK5UH7nFE4gf9v%2B4vdwYs87Qo9n5CF6uGvMKd2CAb4eYMDT8gi5wOEmX1YlIbfWZf32uZawtTCQjfeWug0djH9g6t5PeB70hLvsbiBd0febBP7h7PdboIEttfb9PMHpDhiHSRR4lXlTjPBdPzzG99iLm6KOMAjO4gn98WrnBBxZCa1Y72U1kXuB%2FawmBFxQMt7AOSsF5fgoFDzL1DJB5uP72SCzYvLae00ij7MFbVbAnsH7Wymxg6MBPySpOVy3pe87iUW4YH%2FggG%2F13GBRccvjWUduV%2BM%2FHhh2fYE3WQrJma2e3Ln9JaSNyAu%2B0k3yQWQwly0U8uc4PIKiIK1mEO8K%2BtdIIbDWxVvr81NtcFBW1dOPSV%2BfplkWyxpJpDkkehe8wXXTLixkku8BUWxU0bAcIPX9gvi0NgVWH9Xt6MOpcitOzLFswOFK1bLJGDDsuanABjqkAQXqqeZtpDgOXt1DAaV8GRYOk7881DqnWYvlC7r6F3FD8hh5N6BzBkh7Wucy8J%2BZn5BxYKpIHG5SKC%2FkpwP%2B5PAi3YMXokuBM1JGUS%2Bco0bQyuhJcAD%2Fz4eB5GfK0TEi79Gw05q5toNBzvEWxb6ev70VRkKFziLXcRaqyEE3Uy%2FTf8pJa4W3NxDzlol9R135FYpxnH2EPelJ1G0srmAyELX3lW89&X-Amz-Signature=813ee73f93d4cf4c83367a3c7d3f68a979170457d14b03f626e5e0b2b1be2231&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DF3MXZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkM8jBWZen%2Bd29wjy80%2B0Grt5Mr3WdfJE23J2SpVwtVAIhAL63G2ZIokvpEfq%2FqT4DDEKJeYZ1QI2vuYvgJkrO%2Fad9Kv8DCBkQABoMNjM3NDIzMTgzODA1IgwJYx1Tjt%2Bf%2FSGVrqcq3ANgTQu2sYZ0HW5N%2BHyP1oS%2Fv37I5H8jQ0FrFh%2FDzMRtahobaZi%2B%2F5iKMyvNgo%2FAp5ZqtDZvqemMBY4MRnNKXLwbLmUbTvg%2FXo8it2mXpDnRuSPOKBnHdR5p2yawRfc3BegBEM%2FXh91QIOLtxlDDZVTwSLvFWHoXiJzPcrKaaX7wKVo6nrupOWwUdFpK0TLVtmK5UH7nFE4gf9v%2B4vdwYs87Qo9n5CF6uGvMKd2CAb4eYMDT8gi5wOEmX1YlIbfWZf32uZawtTCQjfeWug0djH9g6t5PeB70hLvsbiBd0febBP7h7PdboIEttfb9PMHpDhiHSRR4lXlTjPBdPzzG99iLm6KOMAjO4gn98WrnBBxZCa1Y72U1kXuB%2FawmBFxQMt7AOSsF5fgoFDzL1DJB5uP72SCzYvLae00ij7MFbVbAnsH7Wymxg6MBPySpOVy3pe87iUW4YH%2FggG%2F13GBRccvjWUduV%2BM%2FHhh2fYE3WQrJma2e3Ln9JaSNyAu%2B0k3yQWQwly0U8uc4PIKiIK1mEO8K%2BtdIIbDWxVvr81NtcFBW1dOPSV%2BfplkWyxpJpDkkehe8wXXTLixkku8BUWxU0bAcIPX9gvi0NgVWH9Xt6MOpcitOzLFswOFK1bLJGDDsuanABjqkAQXqqeZtpDgOXt1DAaV8GRYOk7881DqnWYvlC7r6F3FD8hh5N6BzBkh7Wucy8J%2BZn5BxYKpIHG5SKC%2FkpwP%2B5PAi3YMXokuBM1JGUS%2Bco0bQyuhJcAD%2Fz4eB5GfK0TEi79Gw05q5toNBzvEWxb6ev70VRkKFziLXcRaqyEE3Uy%2FTf8pJa4W3NxDzlol9R135FYpxnH2EPelJ1G0srmAyELX3lW89&X-Amz-Signature=d0f365de40d0cdb16e6b30ec6a53052fa22a6b9715e626159e2d92252f4d8667&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
