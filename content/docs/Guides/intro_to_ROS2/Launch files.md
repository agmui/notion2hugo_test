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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGVO3T2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr2rz5b6nxysHTkyS136Avv8uSr1s7q0V5U4%2FNEjh1nAiAAghHbe6dTGyZeLTW62eCBdAWbfodXJ9DIuMNh8hbDTyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMrwidiDIh1lsbnVrhKtwDdPOfjEXBFzW4rp3WJKf8kCWdflPaI2f%2B2mjWxrfimlrMTxjO4OgTmU2jbJlDqF0NDlK1yDbr1to93rC2sOOhPVnQ8efnZkvIIYX7WbHm5mD0CYTyA0ZQWuhN1KBjfqLDoFjha0Sns3lIQIHH2GY46%2FTB6wvsKzYf7T0I25BwE0Xv6f%2F4NA13D3iDw5wNIXMvGfOnAJRneNYuXqDk9a%2BOfxqLDAOdYOmfiayEASFT3fdyvLLJW6WbpKlgZQo0Zk6OzD6drBeaGIGJiYncDZoIRGqHWDL0yYHojflSV2SlNiSnQ6%2F%2FJp8MNbhg1kdSkrujTd4H3oVBE2RPnQQTxhRrfxuvpgPR8NmwWEjDR8GdKNdvb8CFzjv76h9vPoFTL33ROOllVkDkaujnjXavFDaY5n1pP%2BLT3BohzNW%2FW0%2FG1VJuGawCGuDhNuBFV6bsh89Hqmaf83F%2BuHr4rt4V5q0ZfrKtNzH4ugvUZI3Rdr4Qepe4a6zqfbGLlXUHQ652xjO21jjfHYwL0aC5h9j4WgHHXhyRM2QS2TWgT7m8j%2FmZjIPmVpr4J8XU0FR9%2FrIrVqfe5oF1Rq0pqjiDIRGLtPRFPydEaDDKFcBe5svaf16kRZuQwy0SOOBArCp5qfAw%2FPzWwQY6pgFGuWzZMfnGojcITEZm0AKZSc8qIZEYwFi2s%2FNvMgnSAf%2BbHnxHMy4Z1diQlBncAQyhcsxYkETeBAv%2Fy%2FhTFtCLoXIZGMN%2BpGpZ1%2BJrxt%2FVZB3QmNYhkdpHiauEKO8Z7RTkEueHTx1YoD5DHbfxSrotmOxT7IijsXHmSPtjtTVw8as%2FGUa9eVL2ONuqHLNzlsLa757hjKgvhhpcQD82J0sadBAIP%2B3V&X-Amz-Signature=a5116c30c2b4df24a777e26669f7235c43ddf780bc66c01da3bf88ca01f1d471&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGVO3T2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr2rz5b6nxysHTkyS136Avv8uSr1s7q0V5U4%2FNEjh1nAiAAghHbe6dTGyZeLTW62eCBdAWbfodXJ9DIuMNh8hbDTyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMrwidiDIh1lsbnVrhKtwDdPOfjEXBFzW4rp3WJKf8kCWdflPaI2f%2B2mjWxrfimlrMTxjO4OgTmU2jbJlDqF0NDlK1yDbr1to93rC2sOOhPVnQ8efnZkvIIYX7WbHm5mD0CYTyA0ZQWuhN1KBjfqLDoFjha0Sns3lIQIHH2GY46%2FTB6wvsKzYf7T0I25BwE0Xv6f%2F4NA13D3iDw5wNIXMvGfOnAJRneNYuXqDk9a%2BOfxqLDAOdYOmfiayEASFT3fdyvLLJW6WbpKlgZQo0Zk6OzD6drBeaGIGJiYncDZoIRGqHWDL0yYHojflSV2SlNiSnQ6%2F%2FJp8MNbhg1kdSkrujTd4H3oVBE2RPnQQTxhRrfxuvpgPR8NmwWEjDR8GdKNdvb8CFzjv76h9vPoFTL33ROOllVkDkaujnjXavFDaY5n1pP%2BLT3BohzNW%2FW0%2FG1VJuGawCGuDhNuBFV6bsh89Hqmaf83F%2BuHr4rt4V5q0ZfrKtNzH4ugvUZI3Rdr4Qepe4a6zqfbGLlXUHQ652xjO21jjfHYwL0aC5h9j4WgHHXhyRM2QS2TWgT7m8j%2FmZjIPmVpr4J8XU0FR9%2FrIrVqfe5oF1Rq0pqjiDIRGLtPRFPydEaDDKFcBe5svaf16kRZuQwy0SOOBArCp5qfAw%2FPzWwQY6pgFGuWzZMfnGojcITEZm0AKZSc8qIZEYwFi2s%2FNvMgnSAf%2BbHnxHMy4Z1diQlBncAQyhcsxYkETeBAv%2Fy%2FhTFtCLoXIZGMN%2BpGpZ1%2BJrxt%2FVZB3QmNYhkdpHiauEKO8Z7RTkEueHTx1YoD5DHbfxSrotmOxT7IijsXHmSPtjtTVw8as%2FGUa9eVL2ONuqHLNzlsLa757hjKgvhhpcQD82J0sadBAIP%2B3V&X-Amz-Signature=b0eb03a3d08dbdebfd9866babe59dbffea144d1a85e5c42504855bf3113ac7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGVO3T2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr2rz5b6nxysHTkyS136Avv8uSr1s7q0V5U4%2FNEjh1nAiAAghHbe6dTGyZeLTW62eCBdAWbfodXJ9DIuMNh8hbDTyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMrwidiDIh1lsbnVrhKtwDdPOfjEXBFzW4rp3WJKf8kCWdflPaI2f%2B2mjWxrfimlrMTxjO4OgTmU2jbJlDqF0NDlK1yDbr1to93rC2sOOhPVnQ8efnZkvIIYX7WbHm5mD0CYTyA0ZQWuhN1KBjfqLDoFjha0Sns3lIQIHH2GY46%2FTB6wvsKzYf7T0I25BwE0Xv6f%2F4NA13D3iDw5wNIXMvGfOnAJRneNYuXqDk9a%2BOfxqLDAOdYOmfiayEASFT3fdyvLLJW6WbpKlgZQo0Zk6OzD6drBeaGIGJiYncDZoIRGqHWDL0yYHojflSV2SlNiSnQ6%2F%2FJp8MNbhg1kdSkrujTd4H3oVBE2RPnQQTxhRrfxuvpgPR8NmwWEjDR8GdKNdvb8CFzjv76h9vPoFTL33ROOllVkDkaujnjXavFDaY5n1pP%2BLT3BohzNW%2FW0%2FG1VJuGawCGuDhNuBFV6bsh89Hqmaf83F%2BuHr4rt4V5q0ZfrKtNzH4ugvUZI3Rdr4Qepe4a6zqfbGLlXUHQ652xjO21jjfHYwL0aC5h9j4WgHHXhyRM2QS2TWgT7m8j%2FmZjIPmVpr4J8XU0FR9%2FrIrVqfe5oF1Rq0pqjiDIRGLtPRFPydEaDDKFcBe5svaf16kRZuQwy0SOOBArCp5qfAw%2FPzWwQY6pgFGuWzZMfnGojcITEZm0AKZSc8qIZEYwFi2s%2FNvMgnSAf%2BbHnxHMy4Z1diQlBncAQyhcsxYkETeBAv%2Fy%2FhTFtCLoXIZGMN%2BpGpZ1%2BJrxt%2FVZB3QmNYhkdpHiauEKO8Z7RTkEueHTx1YoD5DHbfxSrotmOxT7IijsXHmSPtjtTVw8as%2FGUa9eVL2ONuqHLNzlsLa757hjKgvhhpcQD82J0sadBAIP%2B3V&X-Amz-Signature=4d5df1ebc9193e0870358f8d6181e80b601f5d841b732941c6219b32b0399699&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
