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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664OEZ6T3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCYHbe9DLtIGCq5q00fOI9GuNRdtmRICG%2Bp2lB0gqjAiA2A9TNjbntc31DJC3fm3Cxe%2FEazHQq8TFNPShc%2BJsSqiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr6yWGwzZpfoJhKUmKtwDEi3NTr9dp2TlFZsdloL9lTf2CH3BDeB8OVoJ8XJA2DlG8bacosJdF2EPksS0nJ1Jagv1XzanYqA2o4foHaVzpNUpuztOI0ilHkRq0yYycCEkzF121TgBm38U5Q7ycrnQhDUPzjv3fiJQ3sJei%2BRkeMCQh2nHVRBdsyysCVXbF%2Fvsjcxs8BEXQ7Q5pvvfu3hXfmIQPbAZxHP7LOGZvCFT7d8bQISVAxvKcY4s9SK6N%2B2h6Tr7RcoHRejAGlUvqKd18Qly7XttXE09vJh6XnD6%2FyeoBBnAxURsXs1vTVtSAZNE6DISKORx8lvz1IgXTdJt1EYhGpPvbVX3Yq56mMd30HEDaVVEk%2BQovwZ0t57s7Ak27nn6TmmzXVWH5IGqryoVRdJb33OyxzjkADIoEdNPPZPd%2Bf6ZLQrwEgOHleKpXTg9iZQdeq3m1bV%2F3zOJWI%2Fax8AM8kEzxs2aiVhG3i19NIAV21M6shiBe1PHYS2WRDlT%2BEUss3zD837L%2FrPrVZuOLuW2jEfhBZcVAPWc5%2BVp9IC05czKaXVSDUo6xQvp7qMuoWyNUSbCjfcsWesq%2BEXixWXRzpb42OIWaN3rJB9p%2BvSHPW1U9NhZxz2OOAqDZo3iWeo7jKNUcboHcJww1ebcxAY6pgFhXzwIxZh3%2BRdDGb%2FO5m%2BcTa4vDdfBM6ukEyAa%2B7MLIso1cAK%2F%2FHpff7tUvHUb0JLm%2B8jzhIWRjkaeRt7w7C4U3INTAePOURko8QkKGBr%2BV1q6FcMIA0o35lKYadHNbbBCYIWMYrOI0swRIns90%2Bao1ZkRIRf41KMEN5NRc9hwpWuGFGlo2f0bqkmUAWj3It68kJ7Ocjts4xt3N%2F%2FFM%2F2mD4Lun2Bn&X-Amz-Signature=3bcfc46564765efffbb778469f027a2c94635e53aedbab948fd53ea220ebeff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664OEZ6T3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCYHbe9DLtIGCq5q00fOI9GuNRdtmRICG%2Bp2lB0gqjAiA2A9TNjbntc31DJC3fm3Cxe%2FEazHQq8TFNPShc%2BJsSqiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr6yWGwzZpfoJhKUmKtwDEi3NTr9dp2TlFZsdloL9lTf2CH3BDeB8OVoJ8XJA2DlG8bacosJdF2EPksS0nJ1Jagv1XzanYqA2o4foHaVzpNUpuztOI0ilHkRq0yYycCEkzF121TgBm38U5Q7ycrnQhDUPzjv3fiJQ3sJei%2BRkeMCQh2nHVRBdsyysCVXbF%2Fvsjcxs8BEXQ7Q5pvvfu3hXfmIQPbAZxHP7LOGZvCFT7d8bQISVAxvKcY4s9SK6N%2B2h6Tr7RcoHRejAGlUvqKd18Qly7XttXE09vJh6XnD6%2FyeoBBnAxURsXs1vTVtSAZNE6DISKORx8lvz1IgXTdJt1EYhGpPvbVX3Yq56mMd30HEDaVVEk%2BQovwZ0t57s7Ak27nn6TmmzXVWH5IGqryoVRdJb33OyxzjkADIoEdNPPZPd%2Bf6ZLQrwEgOHleKpXTg9iZQdeq3m1bV%2F3zOJWI%2Fax8AM8kEzxs2aiVhG3i19NIAV21M6shiBe1PHYS2WRDlT%2BEUss3zD837L%2FrPrVZuOLuW2jEfhBZcVAPWc5%2BVp9IC05czKaXVSDUo6xQvp7qMuoWyNUSbCjfcsWesq%2BEXixWXRzpb42OIWaN3rJB9p%2BvSHPW1U9NhZxz2OOAqDZo3iWeo7jKNUcboHcJww1ebcxAY6pgFhXzwIxZh3%2BRdDGb%2FO5m%2BcTa4vDdfBM6ukEyAa%2B7MLIso1cAK%2F%2FHpff7tUvHUb0JLm%2B8jzhIWRjkaeRt7w7C4U3INTAePOURko8QkKGBr%2BV1q6FcMIA0o35lKYadHNbbBCYIWMYrOI0swRIns90%2Bao1ZkRIRf41KMEN5NRc9hwpWuGFGlo2f0bqkmUAWj3It68kJ7Ocjts4xt3N%2F%2FFM%2F2mD4Lun2Bn&X-Amz-Signature=92074db817eab3eeeeaa07e4bab857abd6ffd02a44dbc2a4bf1f66ed884d4897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664OEZ6T3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYCYHbe9DLtIGCq5q00fOI9GuNRdtmRICG%2Bp2lB0gqjAiA2A9TNjbntc31DJC3fm3Cxe%2FEazHQq8TFNPShc%2BJsSqiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr6yWGwzZpfoJhKUmKtwDEi3NTr9dp2TlFZsdloL9lTf2CH3BDeB8OVoJ8XJA2DlG8bacosJdF2EPksS0nJ1Jagv1XzanYqA2o4foHaVzpNUpuztOI0ilHkRq0yYycCEkzF121TgBm38U5Q7ycrnQhDUPzjv3fiJQ3sJei%2BRkeMCQh2nHVRBdsyysCVXbF%2Fvsjcxs8BEXQ7Q5pvvfu3hXfmIQPbAZxHP7LOGZvCFT7d8bQISVAxvKcY4s9SK6N%2B2h6Tr7RcoHRejAGlUvqKd18Qly7XttXE09vJh6XnD6%2FyeoBBnAxURsXs1vTVtSAZNE6DISKORx8lvz1IgXTdJt1EYhGpPvbVX3Yq56mMd30HEDaVVEk%2BQovwZ0t57s7Ak27nn6TmmzXVWH5IGqryoVRdJb33OyxzjkADIoEdNPPZPd%2Bf6ZLQrwEgOHleKpXTg9iZQdeq3m1bV%2F3zOJWI%2Fax8AM8kEzxs2aiVhG3i19NIAV21M6shiBe1PHYS2WRDlT%2BEUss3zD837L%2FrPrVZuOLuW2jEfhBZcVAPWc5%2BVp9IC05czKaXVSDUo6xQvp7qMuoWyNUSbCjfcsWesq%2BEXixWXRzpb42OIWaN3rJB9p%2BvSHPW1U9NhZxz2OOAqDZo3iWeo7jKNUcboHcJww1ebcxAY6pgFhXzwIxZh3%2BRdDGb%2FO5m%2BcTa4vDdfBM6ukEyAa%2B7MLIso1cAK%2F%2FHpff7tUvHUb0JLm%2B8jzhIWRjkaeRt7w7C4U3INTAePOURko8QkKGBr%2BV1q6FcMIA0o35lKYadHNbbBCYIWMYrOI0swRIns90%2Bao1ZkRIRf41KMEN5NRc9hwpWuGFGlo2f0bqkmUAWj3It68kJ7Ocjts4xt3N%2F%2FFM%2F2mD4Lun2Bn&X-Amz-Signature=14da8acc513139804492ebbb747c279780e7d3278f6da4b13eaad9295c39284f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
