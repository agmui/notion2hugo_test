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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXIUOVJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAQsEkCn3%2BaBdLDw9fkJdsSlINO4CMps%2Bgb%2ByLaLL5R1AiEAm8lgmwhCVcPkBQWUVczxBivKKFK20YJzVnasKQyB%2FKkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP1%2Bl1olFZy13hysCrcA7Zpl6%2Bnxqo2uupldjZ%2BtkJ7JlyJlyPCGSaP85DDdnSyuHtUbJnz3P0ZEuEswbduRp8WfRl2IQSJGTfuZrBjRpQcZE%2FmK2Yl0Nrszicucd%2Bfd0o1jsg93TrLE58eWbYk%2FPSwRtu3dYhQuSZEnBruoWu4a7S8Br1uiMbthomhIcCtHZ9Y4aMcGZ8vQ9rQcbIwjvH4x0pYnSyqD4D7vLDexXnhjh%2BvQaWkJR9tc1i%2B%2BgQ8GlpxFg05bJogcM65UdRn3tlz9z6uk9Hmd6Ghulc8cAI5L%2BylqdAmDsHUAXMX96xoWqiAik5jvMLaU2baXB77gBQYyQ%2BVH28BPnyRbo41XX00wB0nO6KG5zf1dVronYV6XNV8JTxLsXSzvYUDNp5RHp231IXvLwab%2FcZD36v6XxNai2K2peASrVJ0gpesVsiZMKhoHW5E05UbvEgVxmDeWRTbCvBBWpdt1MXrjGW9DXp2pQ6X%2FgJMy2uN9vbIc75FmiVKT6jM%2BuI%2B8fOkxJ0e37IRymoInoJTpY8j4MTDGaLtUwTlDav0XSYwB61MWmSTfOJ0AVrqOf6MVugFLS0F8DXyS4i5WTQMcIgV3xqIauQez1lMcHWX%2Ba3BWDZbySUau1UnfGfpllhxhEzPMMeHmMMGOqUBUkC22xbR4fl%2FJjnn1jgR45RT2AxURI2hH2KeIIB9LI6pMhLtFcy%2FAOFyOLD6fOO45EMuWwKfrtlqkfG9hBauJQb1arwt68dblZ%2BIUZWNsIaBpUor%2BmdUEtsO35%2Fv%2BSj9YoiK4DrlwB9fXh4gar7Mi6jujffil7TTycKfjGc0G3AAZDIawkZD3u1421GYIZAMOuGzxTdM%2BqRAJySSJ47%2BXrfpNf0h&X-Amz-Signature=b910137d6f52d4cefe0ba3f9c63c6d74cb1ed422c5d63bab6ef43a3211fd0e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXIUOVJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAQsEkCn3%2BaBdLDw9fkJdsSlINO4CMps%2Bgb%2ByLaLL5R1AiEAm8lgmwhCVcPkBQWUVczxBivKKFK20YJzVnasKQyB%2FKkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP1%2Bl1olFZy13hysCrcA7Zpl6%2Bnxqo2uupldjZ%2BtkJ7JlyJlyPCGSaP85DDdnSyuHtUbJnz3P0ZEuEswbduRp8WfRl2IQSJGTfuZrBjRpQcZE%2FmK2Yl0Nrszicucd%2Bfd0o1jsg93TrLE58eWbYk%2FPSwRtu3dYhQuSZEnBruoWu4a7S8Br1uiMbthomhIcCtHZ9Y4aMcGZ8vQ9rQcbIwjvH4x0pYnSyqD4D7vLDexXnhjh%2BvQaWkJR9tc1i%2B%2BgQ8GlpxFg05bJogcM65UdRn3tlz9z6uk9Hmd6Ghulc8cAI5L%2BylqdAmDsHUAXMX96xoWqiAik5jvMLaU2baXB77gBQYyQ%2BVH28BPnyRbo41XX00wB0nO6KG5zf1dVronYV6XNV8JTxLsXSzvYUDNp5RHp231IXvLwab%2FcZD36v6XxNai2K2peASrVJ0gpesVsiZMKhoHW5E05UbvEgVxmDeWRTbCvBBWpdt1MXrjGW9DXp2pQ6X%2FgJMy2uN9vbIc75FmiVKT6jM%2BuI%2B8fOkxJ0e37IRymoInoJTpY8j4MTDGaLtUwTlDav0XSYwB61MWmSTfOJ0AVrqOf6MVugFLS0F8DXyS4i5WTQMcIgV3xqIauQez1lMcHWX%2Ba3BWDZbySUau1UnfGfpllhxhEzPMMeHmMMGOqUBUkC22xbR4fl%2FJjnn1jgR45RT2AxURI2hH2KeIIB9LI6pMhLtFcy%2FAOFyOLD6fOO45EMuWwKfrtlqkfG9hBauJQb1arwt68dblZ%2BIUZWNsIaBpUor%2BmdUEtsO35%2Fv%2BSj9YoiK4DrlwB9fXh4gar7Mi6jujffil7TTycKfjGc0G3AAZDIawkZD3u1421GYIZAMOuGzxTdM%2BqRAJySSJ47%2BXrfpNf0h&X-Amz-Signature=c41c83f048d3781d77ef331899e19185ab5222d19e2e3621b49993e79567f6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXIUOVJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAQsEkCn3%2BaBdLDw9fkJdsSlINO4CMps%2Bgb%2ByLaLL5R1AiEAm8lgmwhCVcPkBQWUVczxBivKKFK20YJzVnasKQyB%2FKkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP1%2Bl1olFZy13hysCrcA7Zpl6%2Bnxqo2uupldjZ%2BtkJ7JlyJlyPCGSaP85DDdnSyuHtUbJnz3P0ZEuEswbduRp8WfRl2IQSJGTfuZrBjRpQcZE%2FmK2Yl0Nrszicucd%2Bfd0o1jsg93TrLE58eWbYk%2FPSwRtu3dYhQuSZEnBruoWu4a7S8Br1uiMbthomhIcCtHZ9Y4aMcGZ8vQ9rQcbIwjvH4x0pYnSyqD4D7vLDexXnhjh%2BvQaWkJR9tc1i%2B%2BgQ8GlpxFg05bJogcM65UdRn3tlz9z6uk9Hmd6Ghulc8cAI5L%2BylqdAmDsHUAXMX96xoWqiAik5jvMLaU2baXB77gBQYyQ%2BVH28BPnyRbo41XX00wB0nO6KG5zf1dVronYV6XNV8JTxLsXSzvYUDNp5RHp231IXvLwab%2FcZD36v6XxNai2K2peASrVJ0gpesVsiZMKhoHW5E05UbvEgVxmDeWRTbCvBBWpdt1MXrjGW9DXp2pQ6X%2FgJMy2uN9vbIc75FmiVKT6jM%2BuI%2B8fOkxJ0e37IRymoInoJTpY8j4MTDGaLtUwTlDav0XSYwB61MWmSTfOJ0AVrqOf6MVugFLS0F8DXyS4i5WTQMcIgV3xqIauQez1lMcHWX%2Ba3BWDZbySUau1UnfGfpllhxhEzPMMeHmMMGOqUBUkC22xbR4fl%2FJjnn1jgR45RT2AxURI2hH2KeIIB9LI6pMhLtFcy%2FAOFyOLD6fOO45EMuWwKfrtlqkfG9hBauJQb1arwt68dblZ%2BIUZWNsIaBpUor%2BmdUEtsO35%2Fv%2BSj9YoiK4DrlwB9fXh4gar7Mi6jujffil7TTycKfjGc0G3AAZDIawkZD3u1421GYIZAMOuGzxTdM%2BqRAJySSJ47%2BXrfpNf0h&X-Amz-Signature=db036c0161baa980f648a44ecf397f595769a6b8619e85d35a3a15b8ba780c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
