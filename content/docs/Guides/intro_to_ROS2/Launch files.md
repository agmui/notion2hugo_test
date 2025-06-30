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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUNAIPI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5OfpCkLpwnIVbQJcn29QDSG0gLPP2Ucra%2FRNtqUlOeAiEA2rVSmIczCx0fXsv%2Bl9G%2FM4ZyrtFJN8eBJKAhC%2F6%2B%2FY8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyjV6iOB8m6OHpMzyrcA1JcijF61EzBxmyNbCd%2BMruU25PcvmyWxUwdoqRvB%2FfuSqPrkFQ22ofvJH8grJmI7gxiT2F2DU5h4%2B4DyH1NTF0mbPYXb6XXGVLZA84TawAI%2FF%2Bf9y9OUhWtEjPNi6pl0DNLPQ%2BML3l0UxOgZCuUBhxFaKuvpUf1YKBQB8ruTMbVD2dLkh9xriEr7ebQGPhySTd9LkK0Gq1hxjhjKrmdeQjMK5HsbZJ88He1S578voDIGTQGMnLzf4w9q5DtS3gTn%2FvgGMkhP3bWd6%2FYUd6H%2FzWLNIVIyY0mnpA3UZJylf7H0oztYQCw1RVISjRSBHq1MjSAaesPPspIMG7XWjOQbQhWzw4qFveyIP73JTFYN02E8Afg6Fgd7iYzRZpd54XnbX%2FhCFZ8oiXYrP%2FmI2CYzI8EE3PVNXbiKhszFB%2BBq0xEwp446YYKcBAGO6eT3MMiqAEjqFKlHJfsrYscdNafSRqoutZI%2BHdO0wNSrW%2F2LKLwWOox5NmHadflrG4QT6krNQ%2FrpcL4yauYtyGFwHlISNrS%2B05WKUSyBWauQLXWGFDDDQyJPtGiYkzLShbVvLJoQoeNNU7TifgRmQxddvuDGvUxmthFYiLWBJsWFw36q%2Ffdlvto60MbBcvPhmiqMPmii8MGOqUBNFCXDTdbn%2F10uDoWux05Wu%2FhklrMTfPwu99r9L8OC1oGtppvKKBCnOkv2igljs96Q2QysbRBiZIZbaY8ikRS9VeQ6BbU5M4B%2BmElT%2B%2FUaa7JsHulYAQRpqqauJ5cv1xCufnGb9hCTPV2aNQa70dNd%2FrgVciluMQHUSTacMjaJja8ZWNxb4rwZToVoXGZSVJAJJYsgtf0DLCRx2T07Cz8Rxg%2BV82L&X-Amz-Signature=15fee1f0c46cd8dc2fdf01beb52f1ad5d8158127e5d8ca47a04de54e037384ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUNAIPI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5OfpCkLpwnIVbQJcn29QDSG0gLPP2Ucra%2FRNtqUlOeAiEA2rVSmIczCx0fXsv%2Bl9G%2FM4ZyrtFJN8eBJKAhC%2F6%2B%2FY8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyjV6iOB8m6OHpMzyrcA1JcijF61EzBxmyNbCd%2BMruU25PcvmyWxUwdoqRvB%2FfuSqPrkFQ22ofvJH8grJmI7gxiT2F2DU5h4%2B4DyH1NTF0mbPYXb6XXGVLZA84TawAI%2FF%2Bf9y9OUhWtEjPNi6pl0DNLPQ%2BML3l0UxOgZCuUBhxFaKuvpUf1YKBQB8ruTMbVD2dLkh9xriEr7ebQGPhySTd9LkK0Gq1hxjhjKrmdeQjMK5HsbZJ88He1S578voDIGTQGMnLzf4w9q5DtS3gTn%2FvgGMkhP3bWd6%2FYUd6H%2FzWLNIVIyY0mnpA3UZJylf7H0oztYQCw1RVISjRSBHq1MjSAaesPPspIMG7XWjOQbQhWzw4qFveyIP73JTFYN02E8Afg6Fgd7iYzRZpd54XnbX%2FhCFZ8oiXYrP%2FmI2CYzI8EE3PVNXbiKhszFB%2BBq0xEwp446YYKcBAGO6eT3MMiqAEjqFKlHJfsrYscdNafSRqoutZI%2BHdO0wNSrW%2F2LKLwWOox5NmHadflrG4QT6krNQ%2FrpcL4yauYtyGFwHlISNrS%2B05WKUSyBWauQLXWGFDDDQyJPtGiYkzLShbVvLJoQoeNNU7TifgRmQxddvuDGvUxmthFYiLWBJsWFw36q%2Ffdlvto60MbBcvPhmiqMPmii8MGOqUBNFCXDTdbn%2F10uDoWux05Wu%2FhklrMTfPwu99r9L8OC1oGtppvKKBCnOkv2igljs96Q2QysbRBiZIZbaY8ikRS9VeQ6BbU5M4B%2BmElT%2B%2FUaa7JsHulYAQRpqqauJ5cv1xCufnGb9hCTPV2aNQa70dNd%2FrgVciluMQHUSTacMjaJja8ZWNxb4rwZToVoXGZSVJAJJYsgtf0DLCRx2T07Cz8Rxg%2BV82L&X-Amz-Signature=b4c8d38b1a0cc1123501aed84173579172310c1588ec2a82a810d7f0cf819463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUNAIPI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5OfpCkLpwnIVbQJcn29QDSG0gLPP2Ucra%2FRNtqUlOeAiEA2rVSmIczCx0fXsv%2Bl9G%2FM4ZyrtFJN8eBJKAhC%2F6%2B%2FY8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyjV6iOB8m6OHpMzyrcA1JcijF61EzBxmyNbCd%2BMruU25PcvmyWxUwdoqRvB%2FfuSqPrkFQ22ofvJH8grJmI7gxiT2F2DU5h4%2B4DyH1NTF0mbPYXb6XXGVLZA84TawAI%2FF%2Bf9y9OUhWtEjPNi6pl0DNLPQ%2BML3l0UxOgZCuUBhxFaKuvpUf1YKBQB8ruTMbVD2dLkh9xriEr7ebQGPhySTd9LkK0Gq1hxjhjKrmdeQjMK5HsbZJ88He1S578voDIGTQGMnLzf4w9q5DtS3gTn%2FvgGMkhP3bWd6%2FYUd6H%2FzWLNIVIyY0mnpA3UZJylf7H0oztYQCw1RVISjRSBHq1MjSAaesPPspIMG7XWjOQbQhWzw4qFveyIP73JTFYN02E8Afg6Fgd7iYzRZpd54XnbX%2FhCFZ8oiXYrP%2FmI2CYzI8EE3PVNXbiKhszFB%2BBq0xEwp446YYKcBAGO6eT3MMiqAEjqFKlHJfsrYscdNafSRqoutZI%2BHdO0wNSrW%2F2LKLwWOox5NmHadflrG4QT6krNQ%2FrpcL4yauYtyGFwHlISNrS%2B05WKUSyBWauQLXWGFDDDQyJPtGiYkzLShbVvLJoQoeNNU7TifgRmQxddvuDGvUxmthFYiLWBJsWFw36q%2Ffdlvto60MbBcvPhmiqMPmii8MGOqUBNFCXDTdbn%2F10uDoWux05Wu%2FhklrMTfPwu99r9L8OC1oGtppvKKBCnOkv2igljs96Q2QysbRBiZIZbaY8ikRS9VeQ6BbU5M4B%2BmElT%2B%2FUaa7JsHulYAQRpqqauJ5cv1xCufnGb9hCTPV2aNQa70dNd%2FrgVciluMQHUSTacMjaJja8ZWNxb4rwZToVoXGZSVJAJJYsgtf0DLCRx2T07Cz8Rxg%2BV82L&X-Amz-Signature=d516aa2ce4868c67a13a6f2499f09b48a4da7874766781f397eaf5a37f6d4f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
