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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=d5b92f52eaea5cfded1c584678ef29e279195e3fe601140093429c46e5a7d52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=e6727da89b8ae449561cb486138de13459e50dbf2cc9136b3dd19fe9dfb2bae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HZ4Y2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCYBv9pnebGpBW%2BP3PvUxrEZQu4efjBFv9ksd9NbiSrpwIhAOeqNCKpGqlccRURwgpgaX2%2BL26tF2Gne0v3%2BMKxnS2zKv8DCEoQABoMNjM3NDIzMTgzODA1Igxn%2BgX1WoLW7zYYHrkq3AMuY8eXMHLOpFLWex%2FtTcOp7dkXKuPMnbiyxUqbJiKYo%2BXaEz6wah2JnphSmr2UChozQWGl02%2BK2S%2FTQo954bYnoOk%2BsIt1fPrQD3kfW6N2J%2FNloOUkYLxLjFb1vZbJSZ%2FY0QAlqI2T%2F02OOoFtL7fyAwARSZIMuyCNHuEpouux1uUPpSAJ4SlPN%2By2e7GkvJd1yA5JbspP3FJrnWtErFL7N8YV7jKcMEXktSeib8U8dpgaf0TbYeFTlLraYpFu949YmSOG0HPLiEneMI8W%2FREXBcueB0FWUlXsDI1UwuUNXaAODyQkfrrjvEZBpxURU865GdezENc4vo1L4XFKMkK83Fa9iUohmUSS1aPfkFtbCZe%2BDeLilD4MBXkg%2B9qp1h83q0QLCvAcpap2iPHfih2XVRsmucN%2FW%2F9O4tgIOuoNZ8qryfZNX62dqfXzeBo1iZNq4hH1wmn0yhYh6w%2BUapUkmAA1lQRuFmbuLdsRblyRd%2FdzOEj4g3WCzkDTOMeoMbiWW9OcaLPpChsQuvEDt28OEuVKyxocoMqTAOOEjXj8WhzYc8MCHYJcDtnmZwfDlfF7cbXk1veLUnv6E3Kk5qQfzqUYs%2BXI%2F4wLXiMBR0Rw3uGqflMLTaEFKqA0BDDDzsPEBjqkAeJO1K3ejCEYhCPjyYshZsJ%2F8ROZvwtbhqKSjSrDVMafEQiyykEjY%2FVDzmlUxKIVE6zG7x1Pfk4xLRxUgQQycoaR9ogZgGuweSJPJFTn3paNUfVmp5ChVG2xmilLQd5ak4Obomj%2FznaTCsZ5DSz%2B8DsMtkK29euPJDVV3Syp4nGizCsodBt3u%2BMDMElGUny5w%2FVnnxF0cEZhnaZYxIpMA1y89wee&X-Amz-Signature=5c3114b1130502732b861f42f054f88762f6ea538d4cf5fb4ef19955089fcbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
