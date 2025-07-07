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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVHKNAA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHB1ehB2rnoWuDtUvnrtmZlWLLYTqC5lFpsXCiBA4wkwAiEA%2Fd6vTTjzx76HhsZ%2BtfAIfwjMT87RQk923Ky0jTbXYh8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmA67M8ib5s4CpU%2FCrcA4UJHy9D8mmytjLMky6YwZuwwjyVDGj2%2FtxeoPiFR2rwRcSkh7I9qIPlR4pngOhZZzZehBZHykb5msNJ8VxUOwDjsJ2iRymRKXYznmyjQ4J2ASYHPR%2F4AzQxhAKw%2BRE9atsYecRGLYcNUIEFlmbkB9dFQhskfCqkbtz%2FrEbt4gl9ruex0ysRMV7VfzwX1R8STTASZiJw3ttQsD3vKUKafyoD6nedimkixerdRDSHloA9YM8zf85wdxgnw7ygKjpgw4btVYllA7BSXXw404g%2BTMgdu%2FLUewHVjtZk4A5F4GVUhlAKsP9dZf%2Fa4o4ZXYzZiUJYZ%2F%2B7fAiIWL%2Bavja9pJA6IWFC732hEfsBXmUEypEK2uI48k9rb2wwSxGAGPtq9mU0Yv6l3c6S2A4cNR3oAPloHazx3J04T3dAEmiFqNgejkJSLGNLqJ5JerKbLORnVyzMui6H6JD2UT1aATHG30y%2FcKM4LIatQJfrHZNY1uCOfy%2Be42h%2Fua5gPhYyJsqswLZowVCfC8gGMFENdBtmtPyGxYCv76b3CG0vft8FqZKP8O4TarE13MXtcEX3CXX6AZHf4BkwigKfx1uwDlcPAXlYiETVBFV3bYF%2FUZCjrhl2fpjURez0xsdYbw7mMIOSscMGOqUBT4A6YY3qahfT7coC6oeVsEeej6eOwyRjJfGCYe%2Fb4RfWeQi%2F4PcMJsNk5xk6pJnV5TuiPxZ4vE1pSeYMOhER0JxgnZEzT%2FPIoM7PL5pDX2PaGSVoKa04Lk%2FDoWFLwKFa5etdtwkSVuled3mmCeXtmqaginQsj9kQtoeOzcT2gGEQijrR2q3RP%2BgmfQCM4XDKiDEa7HE2OUo%2FAeXfSxalZ%2FjAQTRm&X-Amz-Signature=b1cee2ab22807fc1966993ccef2242eb7979cef091baa487a462d2f7583a8866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVHKNAA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHB1ehB2rnoWuDtUvnrtmZlWLLYTqC5lFpsXCiBA4wkwAiEA%2Fd6vTTjzx76HhsZ%2BtfAIfwjMT87RQk923Ky0jTbXYh8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmA67M8ib5s4CpU%2FCrcA4UJHy9D8mmytjLMky6YwZuwwjyVDGj2%2FtxeoPiFR2rwRcSkh7I9qIPlR4pngOhZZzZehBZHykb5msNJ8VxUOwDjsJ2iRymRKXYznmyjQ4J2ASYHPR%2F4AzQxhAKw%2BRE9atsYecRGLYcNUIEFlmbkB9dFQhskfCqkbtz%2FrEbt4gl9ruex0ysRMV7VfzwX1R8STTASZiJw3ttQsD3vKUKafyoD6nedimkixerdRDSHloA9YM8zf85wdxgnw7ygKjpgw4btVYllA7BSXXw404g%2BTMgdu%2FLUewHVjtZk4A5F4GVUhlAKsP9dZf%2Fa4o4ZXYzZiUJYZ%2F%2B7fAiIWL%2Bavja9pJA6IWFC732hEfsBXmUEypEK2uI48k9rb2wwSxGAGPtq9mU0Yv6l3c6S2A4cNR3oAPloHazx3J04T3dAEmiFqNgejkJSLGNLqJ5JerKbLORnVyzMui6H6JD2UT1aATHG30y%2FcKM4LIatQJfrHZNY1uCOfy%2Be42h%2Fua5gPhYyJsqswLZowVCfC8gGMFENdBtmtPyGxYCv76b3CG0vft8FqZKP8O4TarE13MXtcEX3CXX6AZHf4BkwigKfx1uwDlcPAXlYiETVBFV3bYF%2FUZCjrhl2fpjURez0xsdYbw7mMIOSscMGOqUBT4A6YY3qahfT7coC6oeVsEeej6eOwyRjJfGCYe%2Fb4RfWeQi%2F4PcMJsNk5xk6pJnV5TuiPxZ4vE1pSeYMOhER0JxgnZEzT%2FPIoM7PL5pDX2PaGSVoKa04Lk%2FDoWFLwKFa5etdtwkSVuled3mmCeXtmqaginQsj9kQtoeOzcT2gGEQijrR2q3RP%2BgmfQCM4XDKiDEa7HE2OUo%2FAeXfSxalZ%2FjAQTRm&X-Amz-Signature=2770249a10c649f2d8abdcc92558cc1968cf55caf866ee76268a6ffc4a1218b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVHKNAA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHB1ehB2rnoWuDtUvnrtmZlWLLYTqC5lFpsXCiBA4wkwAiEA%2Fd6vTTjzx76HhsZ%2BtfAIfwjMT87RQk923Ky0jTbXYh8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmA67M8ib5s4CpU%2FCrcA4UJHy9D8mmytjLMky6YwZuwwjyVDGj2%2FtxeoPiFR2rwRcSkh7I9qIPlR4pngOhZZzZehBZHykb5msNJ8VxUOwDjsJ2iRymRKXYznmyjQ4J2ASYHPR%2F4AzQxhAKw%2BRE9atsYecRGLYcNUIEFlmbkB9dFQhskfCqkbtz%2FrEbt4gl9ruex0ysRMV7VfzwX1R8STTASZiJw3ttQsD3vKUKafyoD6nedimkixerdRDSHloA9YM8zf85wdxgnw7ygKjpgw4btVYllA7BSXXw404g%2BTMgdu%2FLUewHVjtZk4A5F4GVUhlAKsP9dZf%2Fa4o4ZXYzZiUJYZ%2F%2B7fAiIWL%2Bavja9pJA6IWFC732hEfsBXmUEypEK2uI48k9rb2wwSxGAGPtq9mU0Yv6l3c6S2A4cNR3oAPloHazx3J04T3dAEmiFqNgejkJSLGNLqJ5JerKbLORnVyzMui6H6JD2UT1aATHG30y%2FcKM4LIatQJfrHZNY1uCOfy%2Be42h%2Fua5gPhYyJsqswLZowVCfC8gGMFENdBtmtPyGxYCv76b3CG0vft8FqZKP8O4TarE13MXtcEX3CXX6AZHf4BkwigKfx1uwDlcPAXlYiETVBFV3bYF%2FUZCjrhl2fpjURez0xsdYbw7mMIOSscMGOqUBT4A6YY3qahfT7coC6oeVsEeej6eOwyRjJfGCYe%2Fb4RfWeQi%2F4PcMJsNk5xk6pJnV5TuiPxZ4vE1pSeYMOhER0JxgnZEzT%2FPIoM7PL5pDX2PaGSVoKa04Lk%2FDoWFLwKFa5etdtwkSVuled3mmCeXtmqaginQsj9kQtoeOzcT2gGEQijrR2q3RP%2BgmfQCM4XDKiDEa7HE2OUo%2FAeXfSxalZ%2FjAQTRm&X-Amz-Signature=c214534333fb90f16c9c63781703d16abaea9bf9ad84c5a6ab86da277d6b4ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
