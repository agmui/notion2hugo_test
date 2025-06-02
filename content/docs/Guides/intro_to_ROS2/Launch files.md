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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2J6QGG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDriLR0tcMPU2fw0sDgLDba4RljUi8fvLqwBWffjAQaqAiEApX2ggFiO9KR7s3WqdH6F2Smvb8wTFoKL8Mfpqsw%2FEewqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrmgv3yyQG8c6azfircA6raeLKCUTd32Ta4a41eTp71JV2lakas10a%2BCFzQUGbjh7ri6oSG2bTdjSV4WGPXAU2ONc4u7yZhrJA0uYkp1vd3RxOpf6bQ2TRtXO3OqsL2R0lrLr0ar3VckLA0kXGH37v9td2C3JG0%2FEhzgJyC%2FV40lw9BzaX35cdns6zTajIXuxVtv%2BRk1Jvr0PD56K%2Br%2Bfa5xUqGuFDJLX3SXr1de6VOTIeFpSrU0hd1nvRySVwJByPMZZeqycG9Hd9I5A73EzPWG5u4%2BogWDWG%2FPG7lnxJVDZpWbh16kQgEfmg0YYCX2lcT8BjzQaD3gRj6VPuvWS%2Fz7%2BRei5SBKkbUqCX%2BsX%2Bji26Gi4zF8rODL01hvW%2FqhZ6fcqflqCagGydhPZZ9uSAMccIJvEe6%2Fqce%2Fzy5R03efWMenmkZerZVumbWX4%2Bu85IPq%2FEZBzO6B3%2B9T2xsChkPV5iYNb21JGVtVseknbWN1AtOMJl4qrmsY0Ohh5NRJS8sEheY4%2Bx9GI%2FUbA1n9SDZWbw%2F3iDdsGJ%2B8j1FuADJfi%2F4UEDUgWztD0icgoVXgpGpazWN6iolhHSXJhKn6w28BsNtS9iwrlLUF6OmsE%2Bkc281BHqMO58Pjm7km1nZ8I6ujAa6h8isgH7iMLbC9cEGOqUBpTER%2BSZzxQl181JJ0XF%2BNEg3JXsP1CRc4Sgh%2FMevREGrfq2xapihfw%2FTikIcdWF%2BKhRU83yf9tK35CY8%2BZ0MdKXEX50FZjQp92R7WDLu2edfM9HPXWUeOL%2B9%2FPuYSAlcTech6uF%2BBoQ9iMph88lCqnchnUwDiyoobPJKr1Pf0hoWpYKdlgDJrd1YzZJbiei78bmnDJl1b1MKGRBsunpKNLDr04xe&X-Amz-Signature=a7f527ca3858cd5bdadced9b151ea2b59283fe3890a10cc42a97648ce341c718&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2J6QGG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDriLR0tcMPU2fw0sDgLDba4RljUi8fvLqwBWffjAQaqAiEApX2ggFiO9KR7s3WqdH6F2Smvb8wTFoKL8Mfpqsw%2FEewqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrmgv3yyQG8c6azfircA6raeLKCUTd32Ta4a41eTp71JV2lakas10a%2BCFzQUGbjh7ri6oSG2bTdjSV4WGPXAU2ONc4u7yZhrJA0uYkp1vd3RxOpf6bQ2TRtXO3OqsL2R0lrLr0ar3VckLA0kXGH37v9td2C3JG0%2FEhzgJyC%2FV40lw9BzaX35cdns6zTajIXuxVtv%2BRk1Jvr0PD56K%2Br%2Bfa5xUqGuFDJLX3SXr1de6VOTIeFpSrU0hd1nvRySVwJByPMZZeqycG9Hd9I5A73EzPWG5u4%2BogWDWG%2FPG7lnxJVDZpWbh16kQgEfmg0YYCX2lcT8BjzQaD3gRj6VPuvWS%2Fz7%2BRei5SBKkbUqCX%2BsX%2Bji26Gi4zF8rODL01hvW%2FqhZ6fcqflqCagGydhPZZ9uSAMccIJvEe6%2Fqce%2Fzy5R03efWMenmkZerZVumbWX4%2Bu85IPq%2FEZBzO6B3%2B9T2xsChkPV5iYNb21JGVtVseknbWN1AtOMJl4qrmsY0Ohh5NRJS8sEheY4%2Bx9GI%2FUbA1n9SDZWbw%2F3iDdsGJ%2B8j1FuADJfi%2F4UEDUgWztD0icgoVXgpGpazWN6iolhHSXJhKn6w28BsNtS9iwrlLUF6OmsE%2Bkc281BHqMO58Pjm7km1nZ8I6ujAa6h8isgH7iMLbC9cEGOqUBpTER%2BSZzxQl181JJ0XF%2BNEg3JXsP1CRc4Sgh%2FMevREGrfq2xapihfw%2FTikIcdWF%2BKhRU83yf9tK35CY8%2BZ0MdKXEX50FZjQp92R7WDLu2edfM9HPXWUeOL%2B9%2FPuYSAlcTech6uF%2BBoQ9iMph88lCqnchnUwDiyoobPJKr1Pf0hoWpYKdlgDJrd1YzZJbiei78bmnDJl1b1MKGRBsunpKNLDr04xe&X-Amz-Signature=aece24e8b0739ca44c837396c3b2fd6ddd8a215133877ab2c68653d58113c17d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2J6QGG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDriLR0tcMPU2fw0sDgLDba4RljUi8fvLqwBWffjAQaqAiEApX2ggFiO9KR7s3WqdH6F2Smvb8wTFoKL8Mfpqsw%2FEewqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrmgv3yyQG8c6azfircA6raeLKCUTd32Ta4a41eTp71JV2lakas10a%2BCFzQUGbjh7ri6oSG2bTdjSV4WGPXAU2ONc4u7yZhrJA0uYkp1vd3RxOpf6bQ2TRtXO3OqsL2R0lrLr0ar3VckLA0kXGH37v9td2C3JG0%2FEhzgJyC%2FV40lw9BzaX35cdns6zTajIXuxVtv%2BRk1Jvr0PD56K%2Br%2Bfa5xUqGuFDJLX3SXr1de6VOTIeFpSrU0hd1nvRySVwJByPMZZeqycG9Hd9I5A73EzPWG5u4%2BogWDWG%2FPG7lnxJVDZpWbh16kQgEfmg0YYCX2lcT8BjzQaD3gRj6VPuvWS%2Fz7%2BRei5SBKkbUqCX%2BsX%2Bji26Gi4zF8rODL01hvW%2FqhZ6fcqflqCagGydhPZZ9uSAMccIJvEe6%2Fqce%2Fzy5R03efWMenmkZerZVumbWX4%2Bu85IPq%2FEZBzO6B3%2B9T2xsChkPV5iYNb21JGVtVseknbWN1AtOMJl4qrmsY0Ohh5NRJS8sEheY4%2Bx9GI%2FUbA1n9SDZWbw%2F3iDdsGJ%2B8j1FuADJfi%2F4UEDUgWztD0icgoVXgpGpazWN6iolhHSXJhKn6w28BsNtS9iwrlLUF6OmsE%2Bkc281BHqMO58Pjm7km1nZ8I6ujAa6h8isgH7iMLbC9cEGOqUBpTER%2BSZzxQl181JJ0XF%2BNEg3JXsP1CRc4Sgh%2FMevREGrfq2xapihfw%2FTikIcdWF%2BKhRU83yf9tK35CY8%2BZ0MdKXEX50FZjQp92R7WDLu2edfM9HPXWUeOL%2B9%2FPuYSAlcTech6uF%2BBoQ9iMph88lCqnchnUwDiyoobPJKr1Pf0hoWpYKdlgDJrd1YzZJbiei78bmnDJl1b1MKGRBsunpKNLDr04xe&X-Amz-Signature=595faf073c29bff62a475ae3731f4fda4dfcc522b3dbdb18e3938703f901a9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
