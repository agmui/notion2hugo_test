---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLLTCO3W%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaH51rcIvxB2uyvjVuljoQoFaRDVGD0F48kFceYXu9CAiEAlfvtv8fFIUHx%2F75LZlchFWB%2FVn0zIE9QabAXyAEKeY8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFoixk4VmAprZ7oIircA5d%2FcilqKcCwIGBHcEkXZoO9OvYuXUDIDQZWIVkgmodbSbKG4skiFJXtrD6kCeMrPM1GGKCkXhB5A4O5Gg9xHvN20aL9lXkeu7Wxs4Bzjy0FsnQBGEwUF%2BczWQDcxT0kshV%2BDjLbdV4aVOeiWKfmZjCp5OsLcwueAJxIYBukUGypRLF0hya1RCCgDfpEihQ50b6tu675jNGZ0laRGL%2Btqe2ayR2ZZBmHCqhUyoavUgFsNAtDqOXwoifUD2K2b%2B7x9hXO4TP5liiBnlLP8JDQysksQROnOXIDtrMEOaE63rWONDJblnxLgWSjS9698W8r2gcMRzUCOwwMpm04IugU5ssWxITdm6UFuv6ujsHEoGGNzqbSE0v8BeaIas66Adn%2FNzMIL3rOcUQJJ5ELc8rHG2QJ7CvVT6chKozwkpw4M11IR7Pt5XIRnOV95mVrQdlPqVc2uxZsfuvAXL8snjAJe4vy4IMdX8wP7bMWIDg9iyDBOXWMv0Q46LtZlIYh7Xl9ZgjJRwFLR1YTjKE2gd7GHuFV6oRbJW%2BKQNqXHEYz6aIxc%2F3lE9wSopfH5Si1LIhyzng%2F0lG9693%2Fc3bqIo471g3OCOtQirK3DDnlxG%2F4tdfQRwU6MraZNtkK3fnrMJe2tdMGOqUB7NlJFuAfOdpQ%2Bc%2FEGwkw40T84wLuO%2FVLS1J6SUkj8eZFT%2FAK5J%2FuLliS%2BO%2FatKP0ECca9QleAHfbqha8tK9MtmtCVmlvQfy6vv8ZFuPAdzDCIuVr2p5SwqYBjK8cRAhV9JzXp7pad0ec%2BfLzg82uLyvWirhCb5TL6oW25W15%2FeqBdojPk%2BZIMcRqoTl615AYNIkuGM9c9UGTi75JAnPNZGwTy3e9&X-Amz-Signature=96391e6ecba809279356d0dfb4d6ae332753067bfe437e63a550e13830f63f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLLTCO3W%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaH51rcIvxB2uyvjVuljoQoFaRDVGD0F48kFceYXu9CAiEAlfvtv8fFIUHx%2F75LZlchFWB%2FVn0zIE9QabAXyAEKeY8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFoixk4VmAprZ7oIircA5d%2FcilqKcCwIGBHcEkXZoO9OvYuXUDIDQZWIVkgmodbSbKG4skiFJXtrD6kCeMrPM1GGKCkXhB5A4O5Gg9xHvN20aL9lXkeu7Wxs4Bzjy0FsnQBGEwUF%2BczWQDcxT0kshV%2BDjLbdV4aVOeiWKfmZjCp5OsLcwueAJxIYBukUGypRLF0hya1RCCgDfpEihQ50b6tu675jNGZ0laRGL%2Btqe2ayR2ZZBmHCqhUyoavUgFsNAtDqOXwoifUD2K2b%2B7x9hXO4TP5liiBnlLP8JDQysksQROnOXIDtrMEOaE63rWONDJblnxLgWSjS9698W8r2gcMRzUCOwwMpm04IugU5ssWxITdm6UFuv6ujsHEoGGNzqbSE0v8BeaIas66Adn%2FNzMIL3rOcUQJJ5ELc8rHG2QJ7CvVT6chKozwkpw4M11IR7Pt5XIRnOV95mVrQdlPqVc2uxZsfuvAXL8snjAJe4vy4IMdX8wP7bMWIDg9iyDBOXWMv0Q46LtZlIYh7Xl9ZgjJRwFLR1YTjKE2gd7GHuFV6oRbJW%2BKQNqXHEYz6aIxc%2F3lE9wSopfH5Si1LIhyzng%2F0lG9693%2Fc3bqIo471g3OCOtQirK3DDnlxG%2F4tdfQRwU6MraZNtkK3fnrMJe2tdMGOqUB7NlJFuAfOdpQ%2Bc%2FEGwkw40T84wLuO%2FVLS1J6SUkj8eZFT%2FAK5J%2FuLliS%2BO%2FatKP0ECca9QleAHfbqha8tK9MtmtCVmlvQfy6vv8ZFuPAdzDCIuVr2p5SwqYBjK8cRAhV9JzXp7pad0ec%2BfLzg82uLyvWirhCb5TL6oW25W15%2FeqBdojPk%2BZIMcRqoTl615AYNIkuGM9c9UGTi75JAnPNZGwTy3e9&X-Amz-Signature=df94808d7840bb5698c07c561078e3633b0c5c16a6a5f806e559c68685770b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLLTCO3W%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaH51rcIvxB2uyvjVuljoQoFaRDVGD0F48kFceYXu9CAiEAlfvtv8fFIUHx%2F75LZlchFWB%2FVn0zIE9QabAXyAEKeY8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFoixk4VmAprZ7oIircA5d%2FcilqKcCwIGBHcEkXZoO9OvYuXUDIDQZWIVkgmodbSbKG4skiFJXtrD6kCeMrPM1GGKCkXhB5A4O5Gg9xHvN20aL9lXkeu7Wxs4Bzjy0FsnQBGEwUF%2BczWQDcxT0kshV%2BDjLbdV4aVOeiWKfmZjCp5OsLcwueAJxIYBukUGypRLF0hya1RCCgDfpEihQ50b6tu675jNGZ0laRGL%2Btqe2ayR2ZZBmHCqhUyoavUgFsNAtDqOXwoifUD2K2b%2B7x9hXO4TP5liiBnlLP8JDQysksQROnOXIDtrMEOaE63rWONDJblnxLgWSjS9698W8r2gcMRzUCOwwMpm04IugU5ssWxITdm6UFuv6ujsHEoGGNzqbSE0v8BeaIas66Adn%2FNzMIL3rOcUQJJ5ELc8rHG2QJ7CvVT6chKozwkpw4M11IR7Pt5XIRnOV95mVrQdlPqVc2uxZsfuvAXL8snjAJe4vy4IMdX8wP7bMWIDg9iyDBOXWMv0Q46LtZlIYh7Xl9ZgjJRwFLR1YTjKE2gd7GHuFV6oRbJW%2BKQNqXHEYz6aIxc%2F3lE9wSopfH5Si1LIhyzng%2F0lG9693%2Fc3bqIo471g3OCOtQirK3DDnlxG%2F4tdfQRwU6MraZNtkK3fnrMJe2tdMGOqUB7NlJFuAfOdpQ%2Bc%2FEGwkw40T84wLuO%2FVLS1J6SUkj8eZFT%2FAK5J%2FuLliS%2BO%2FatKP0ECca9QleAHfbqha8tK9MtmtCVmlvQfy6vv8ZFuPAdzDCIuVr2p5SwqYBjK8cRAhV9JzXp7pad0ec%2BfLzg82uLyvWirhCb5TL6oW25W15%2FeqBdojPk%2BZIMcRqoTl615AYNIkuGM9c9UGTi75JAnPNZGwTy3e9&X-Amz-Signature=4734fcf4cdcf74a1925a702d62248ec6ff93fae0c4ec3dfd4ed3f55f19e46973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
