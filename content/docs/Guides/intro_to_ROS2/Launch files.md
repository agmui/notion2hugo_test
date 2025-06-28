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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VBSNCF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDthsH7rGZ%2BdbSGdnTXFNNORzOssv9%2B%2FVshgQlkayu%2FswIhAPngpeXghopmoOMAOjx7S6zZEk1SekJOJVKXfumapBV8KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTsVwJExuoC3I0kREq3AMScnDryiY6KOFcs%2B%2BQ3Mgvjl4J0UoPZ9Qey3%2FMGmgM0Td8n8nUV%2FLFFCgyqVBW2W2%2BS%2FmYoBqrMqgzM30duz7sDumnGQT8o5%2FcHDnIo0X70mqynJbgNGLL9lEsdv0KYca9ph2%2B%2FJaWQ%2BdvAhrtseLCLIXWTZi2%2F1IUraLowVsfogqIRa%2Fbue6mbgRHyI4Pw8muXCMt4Q10xZfs8E%2BqCU487Hq%2F1KDV2N%2B%2F5yGIakKE%2Bil50ZNIq35DInCHpi8IHDy0TtnsRTBOqzcpdj2K8lbGJfLCJw1LTdGVSMzovmqEMnANvC0dh%2BcYsBqGXFWPk4Vojx%2BduLK3xxRERCV2AvAY8u%2FrE0z7NGM%2F8zcQWgxxyYefgpDojtXEeOitfcCV0S1R7CKUL4oBuDYmMCmFxkkhp3nQwd2V8NyPVLNaSYmeGjefFA3j8PmSqUc8FTjU2Hyvpy1JkRTP0JbrhkOvsY6h9qURu4uixrBUbUhbTGQHajp2nuxjSEVnpnC%2BWGgt6IpYu9FO31wejQRe3z7dAJdjDM3ebD36%2BRcm8jXdTlro8Lm6o%2F%2FYN60U2T0E3X19bmAAW4iwN2ETKQt0iZrZjaor3ycczPOQGx9c9EZNTLT3oXxRjzxlU1LmhhrNqDDdioDDBjqkAZ6RepdM4I2y5aiOvl4oBV2QoAusOMWs089XADoUM0nP9Y6R%2BXLuPfu7ZbezLPI9qvkpu4IC5MbnNJ%2Flm93OES%2FljxHlmjSTyKUHxFFPtd2WI67%2FK8l%2F7zMpgoTMmIxHMe1Ufvvk4mWRNArs7BUR4LOUvvf%2BHOFX%2FHw4rFRmdE0N5W%2FeJjFhIz9q7eu%2Bv31fDVyjwx1R4%2BidtZWNu315Ba9aa2%2B6&X-Amz-Signature=07f2bab2a3da9d99bf2b48e368e38898ed5cd45b2903435a19f2057c51da6376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VBSNCF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDthsH7rGZ%2BdbSGdnTXFNNORzOssv9%2B%2FVshgQlkayu%2FswIhAPngpeXghopmoOMAOjx7S6zZEk1SekJOJVKXfumapBV8KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTsVwJExuoC3I0kREq3AMScnDryiY6KOFcs%2B%2BQ3Mgvjl4J0UoPZ9Qey3%2FMGmgM0Td8n8nUV%2FLFFCgyqVBW2W2%2BS%2FmYoBqrMqgzM30duz7sDumnGQT8o5%2FcHDnIo0X70mqynJbgNGLL9lEsdv0KYca9ph2%2B%2FJaWQ%2BdvAhrtseLCLIXWTZi2%2F1IUraLowVsfogqIRa%2Fbue6mbgRHyI4Pw8muXCMt4Q10xZfs8E%2BqCU487Hq%2F1KDV2N%2B%2F5yGIakKE%2Bil50ZNIq35DInCHpi8IHDy0TtnsRTBOqzcpdj2K8lbGJfLCJw1LTdGVSMzovmqEMnANvC0dh%2BcYsBqGXFWPk4Vojx%2BduLK3xxRERCV2AvAY8u%2FrE0z7NGM%2F8zcQWgxxyYefgpDojtXEeOitfcCV0S1R7CKUL4oBuDYmMCmFxkkhp3nQwd2V8NyPVLNaSYmeGjefFA3j8PmSqUc8FTjU2Hyvpy1JkRTP0JbrhkOvsY6h9qURu4uixrBUbUhbTGQHajp2nuxjSEVnpnC%2BWGgt6IpYu9FO31wejQRe3z7dAJdjDM3ebD36%2BRcm8jXdTlro8Lm6o%2F%2FYN60U2T0E3X19bmAAW4iwN2ETKQt0iZrZjaor3ycczPOQGx9c9EZNTLT3oXxRjzxlU1LmhhrNqDDdioDDBjqkAZ6RepdM4I2y5aiOvl4oBV2QoAusOMWs089XADoUM0nP9Y6R%2BXLuPfu7ZbezLPI9qvkpu4IC5MbnNJ%2Flm93OES%2FljxHlmjSTyKUHxFFPtd2WI67%2FK8l%2F7zMpgoTMmIxHMe1Ufvvk4mWRNArs7BUR4LOUvvf%2BHOFX%2FHw4rFRmdE0N5W%2FeJjFhIz9q7eu%2Bv31fDVyjwx1R4%2BidtZWNu315Ba9aa2%2B6&X-Amz-Signature=21d954cd54f176bca61d453c968e9af87a49d935accfe8b665710dd6b9cbe414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VBSNCF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDthsH7rGZ%2BdbSGdnTXFNNORzOssv9%2B%2FVshgQlkayu%2FswIhAPngpeXghopmoOMAOjx7S6zZEk1SekJOJVKXfumapBV8KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTsVwJExuoC3I0kREq3AMScnDryiY6KOFcs%2B%2BQ3Mgvjl4J0UoPZ9Qey3%2FMGmgM0Td8n8nUV%2FLFFCgyqVBW2W2%2BS%2FmYoBqrMqgzM30duz7sDumnGQT8o5%2FcHDnIo0X70mqynJbgNGLL9lEsdv0KYca9ph2%2B%2FJaWQ%2BdvAhrtseLCLIXWTZi2%2F1IUraLowVsfogqIRa%2Fbue6mbgRHyI4Pw8muXCMt4Q10xZfs8E%2BqCU487Hq%2F1KDV2N%2B%2F5yGIakKE%2Bil50ZNIq35DInCHpi8IHDy0TtnsRTBOqzcpdj2K8lbGJfLCJw1LTdGVSMzovmqEMnANvC0dh%2BcYsBqGXFWPk4Vojx%2BduLK3xxRERCV2AvAY8u%2FrE0z7NGM%2F8zcQWgxxyYefgpDojtXEeOitfcCV0S1R7CKUL4oBuDYmMCmFxkkhp3nQwd2V8NyPVLNaSYmeGjefFA3j8PmSqUc8FTjU2Hyvpy1JkRTP0JbrhkOvsY6h9qURu4uixrBUbUhbTGQHajp2nuxjSEVnpnC%2BWGgt6IpYu9FO31wejQRe3z7dAJdjDM3ebD36%2BRcm8jXdTlro8Lm6o%2F%2FYN60U2T0E3X19bmAAW4iwN2ETKQt0iZrZjaor3ycczPOQGx9c9EZNTLT3oXxRjzxlU1LmhhrNqDDdioDDBjqkAZ6RepdM4I2y5aiOvl4oBV2QoAusOMWs089XADoUM0nP9Y6R%2BXLuPfu7ZbezLPI9qvkpu4IC5MbnNJ%2Flm93OES%2FljxHlmjSTyKUHxFFPtd2WI67%2FK8l%2F7zMpgoTMmIxHMe1Ufvvk4mWRNArs7BUR4LOUvvf%2BHOFX%2FHw4rFRmdE0N5W%2FeJjFhIz9q7eu%2Bv31fDVyjwx1R4%2BidtZWNu315Ba9aa2%2B6&X-Amz-Signature=d4864b13aef1b162bf16df972a232f6bf3beac4e8ce7db04be1ee4f4049402d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
