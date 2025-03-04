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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QAINQAM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPfvRYVlAzU8E5o0grQIIhK3W2ISfKN7bcOXZTkxI1LAiAlqNDd3cCRvbiju1a%2FOPxomKfE9D4%2F9xs6LHctgMRM3iqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwr7DbvixqBgVTBD2KtwD3rjJLVSeMAMFhKrl1UaIKXXpGcAt0u6l45g%2B0hMfZaa6i0NhgxojNQQ4DKjZh6egcuBbm56XKXnoJSvI9W1dX6TMC2onq3Eu1%2FJlBkbpoyQdUf44X5LCjbHS6RePO3XE1i25r8R3mG%2BoeyQag9H%2BKSmNrnVPaCuBDoHjHdoi8Q0iZxpmIP%2BsY4nBghLR1YuUtFbrbRpm4XJFlj7B3wuHvS6szisyQc4AgWMT1DAx7%2BRuNdZ1hNBWnkfsF5tldxjmEUepj0NmllKEj8wt5eeWvRgbjapVbnsiBRK%2FVPfWwZlQh5%2FP35IpCaWs3PX3JbKQCANdigbk81FEP8nQDdKJdMEhD%2Bt8JI4zetR3hFhLa4MkbHRp6vVp1PG7akCE%2B73WCyexMjoTFxdKf8Zp42NUcP%2F5J5l3VXz3LBWSiIdfoxIm3cR53bDedMeJdQIlnRx6qN%2B%2BHOFK8nKPv4ClkW8JHUHkx3k7YBsraI8tfJl1og%2FuLy10qZXDC%2FaE6GmdavTa0Zg7FrQpwim0z1ATCDi%2ByBf2UsfpiCSCJ%2BGwRoChzpCHdZmhhdJ3zcyDLIr9Pc7Gg%2F57HI1RTpDCsONDmfMGtcme2oOUuL9GQn%2BxPVpoGyMueM86WL3B2A38Ceow8oqcvgY6pgGNVA8wNBz1cDubtI0iXWd%2BVl%2FGrmxy1byEmeKvtrq89nTCdxTn3UR553kpjPL2DwGpPhn6BIqmhVgOctRa22Wv9B6kk9hch9K8zB%2BwV%2FugTpbLyDy%2Bx5y65eK%2FRfNLwRAUz4OkDH5B8VxwQ%2FaVvVsvVVe2Cd57som8um4ylt%2BzTnFS6VI6lmCWYYjoCuJn6xoHNbJiaIabFrhQmgJOiAUMPY8f%2FNmb&X-Amz-Signature=4883efdb50e86232d8de048f2ff55b32e562f6211c0f0413de4c11e29db13438&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QAINQAM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPfvRYVlAzU8E5o0grQIIhK3W2ISfKN7bcOXZTkxI1LAiAlqNDd3cCRvbiju1a%2FOPxomKfE9D4%2F9xs6LHctgMRM3iqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwr7DbvixqBgVTBD2KtwD3rjJLVSeMAMFhKrl1UaIKXXpGcAt0u6l45g%2B0hMfZaa6i0NhgxojNQQ4DKjZh6egcuBbm56XKXnoJSvI9W1dX6TMC2onq3Eu1%2FJlBkbpoyQdUf44X5LCjbHS6RePO3XE1i25r8R3mG%2BoeyQag9H%2BKSmNrnVPaCuBDoHjHdoi8Q0iZxpmIP%2BsY4nBghLR1YuUtFbrbRpm4XJFlj7B3wuHvS6szisyQc4AgWMT1DAx7%2BRuNdZ1hNBWnkfsF5tldxjmEUepj0NmllKEj8wt5eeWvRgbjapVbnsiBRK%2FVPfWwZlQh5%2FP35IpCaWs3PX3JbKQCANdigbk81FEP8nQDdKJdMEhD%2Bt8JI4zetR3hFhLa4MkbHRp6vVp1PG7akCE%2B73WCyexMjoTFxdKf8Zp42NUcP%2F5J5l3VXz3LBWSiIdfoxIm3cR53bDedMeJdQIlnRx6qN%2B%2BHOFK8nKPv4ClkW8JHUHkx3k7YBsraI8tfJl1og%2FuLy10qZXDC%2FaE6GmdavTa0Zg7FrQpwim0z1ATCDi%2ByBf2UsfpiCSCJ%2BGwRoChzpCHdZmhhdJ3zcyDLIr9Pc7Gg%2F57HI1RTpDCsONDmfMGtcme2oOUuL9GQn%2BxPVpoGyMueM86WL3B2A38Ceow8oqcvgY6pgGNVA8wNBz1cDubtI0iXWd%2BVl%2FGrmxy1byEmeKvtrq89nTCdxTn3UR553kpjPL2DwGpPhn6BIqmhVgOctRa22Wv9B6kk9hch9K8zB%2BwV%2FugTpbLyDy%2Bx5y65eK%2FRfNLwRAUz4OkDH5B8VxwQ%2FaVvVsvVVe2Cd57som8um4ylt%2BzTnFS6VI6lmCWYYjoCuJn6xoHNbJiaIabFrhQmgJOiAUMPY8f%2FNmb&X-Amz-Signature=276e4764870b01d4f577512214ceb5f5e26c23ffb3fbb5b3266117e4322c7f10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QAINQAM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPfvRYVlAzU8E5o0grQIIhK3W2ISfKN7bcOXZTkxI1LAiAlqNDd3cCRvbiju1a%2FOPxomKfE9D4%2F9xs6LHctgMRM3iqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwr7DbvixqBgVTBD2KtwD3rjJLVSeMAMFhKrl1UaIKXXpGcAt0u6l45g%2B0hMfZaa6i0NhgxojNQQ4DKjZh6egcuBbm56XKXnoJSvI9W1dX6TMC2onq3Eu1%2FJlBkbpoyQdUf44X5LCjbHS6RePO3XE1i25r8R3mG%2BoeyQag9H%2BKSmNrnVPaCuBDoHjHdoi8Q0iZxpmIP%2BsY4nBghLR1YuUtFbrbRpm4XJFlj7B3wuHvS6szisyQc4AgWMT1DAx7%2BRuNdZ1hNBWnkfsF5tldxjmEUepj0NmllKEj8wt5eeWvRgbjapVbnsiBRK%2FVPfWwZlQh5%2FP35IpCaWs3PX3JbKQCANdigbk81FEP8nQDdKJdMEhD%2Bt8JI4zetR3hFhLa4MkbHRp6vVp1PG7akCE%2B73WCyexMjoTFxdKf8Zp42NUcP%2F5J5l3VXz3LBWSiIdfoxIm3cR53bDedMeJdQIlnRx6qN%2B%2BHOFK8nKPv4ClkW8JHUHkx3k7YBsraI8tfJl1og%2FuLy10qZXDC%2FaE6GmdavTa0Zg7FrQpwim0z1ATCDi%2ByBf2UsfpiCSCJ%2BGwRoChzpCHdZmhhdJ3zcyDLIr9Pc7Gg%2F57HI1RTpDCsONDmfMGtcme2oOUuL9GQn%2BxPVpoGyMueM86WL3B2A38Ceow8oqcvgY6pgGNVA8wNBz1cDubtI0iXWd%2BVl%2FGrmxy1byEmeKvtrq89nTCdxTn3UR553kpjPL2DwGpPhn6BIqmhVgOctRa22Wv9B6kk9hch9K8zB%2BwV%2FugTpbLyDy%2Bx5y65eK%2FRfNLwRAUz4OkDH5B8VxwQ%2FaVvVsvVVe2Cd57som8um4ylt%2BzTnFS6VI6lmCWYYjoCuJn6xoHNbJiaIabFrhQmgJOiAUMPY8f%2FNmb&X-Amz-Signature=c9f8a60ee87d3bb7e1f7b68dfd9571ea5871369bd6355da3d064f0f61656665e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
