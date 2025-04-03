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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXWVJMJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwm7dtipsthCO9R05QeICc6%2BDw%2BNfEr724V6tMek7gJAiEA9z%2Fpshqcd3XUWQqiwJoVHFn4HCGDwtuFegtbRN8bLkIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5mEEVJBUjyg1BN4SrcA8kKCXJ1hPCW8Ql5CLVP4ZTm6c1aTsXH0HBtuJ%2FUdxuKApObDRjgnljOTv8%2BfjlmXCf4qZcGTK8bXB53IGLQ%2FxGtS3SbEScMIgVYkyoM1fSYqNnIVB4zaXc8jxELUCIz8P9x8wZ1CGoOn3uKubu%2F53Z5SL%2F7LIVDeSp40M0B5bqM0TeNv1O%2F0Z%2Bwe3F4hE8gyTPWnwbSRdMsEUYu1SdJiMhPTsI2w9edxsIPO429nHT6kx%2FyueCu8iEC%2F%2BHvWLaubW0wmYFJeNm%2BqFpcy5biep%2FVpvMgtcBQrlTryuPzRoBlWD064wS%2Fmb7Cz8%2FYYz2yu9SKFTfT3UW8aK6ag3TA%2FfkeADVN1J4i%2BA58K6BbOCK%2Fa%2FWTRUxHC3kuwVkoq97zm1RI7IP%2BHoDvMbdamoDfvQhHl2SnbISX3uDOPcktRO2xHh%2BpBWknI9%2BHoRTJSnkQXZo694m2Mhvzo3JrJMNISnnM6Imz%2FxCLcR1%2BUe%2BZReVwj%2FZRMenMas0ONH0BLxuT6XXpkfjysOu%2BObXKnnQ7ExPZcRQ31yjzeNiKgUBH7nymqlgTF3S%2BnjyISxwKa99U6qbYGOb56zYV7SKTkmlHFygh0mWf6QHdkcD08DD%2Fs%2FFogcLkcycHH76ZjrPiMNGyur8GOqUB2L68lanpih2SirejMdydO3F0YepOgA7%2FOgyB7BNHrBcYfy2JyKbD6j%2FaZlYwBaBnJFkstvFeIN977Ww2g6r%2F1PaLSRPgk2m7NqIDXRFBSgiJiSPlrg5W4E%2FuOTR%2BMR%2By0X4ZrEptNRlJtKGu8tbeNHhHDw3HT0Rgk4hFIfdIE%2FEg7Yib71jPPm8MZPv6eh3GDIwtnSYsUiwun6XnqwnwsSOixRK6&X-Amz-Signature=d44a09678ef7d8745ca4faf12549fd1f7f6a6f1efd61ac2d09507674547e03cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXWVJMJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwm7dtipsthCO9R05QeICc6%2BDw%2BNfEr724V6tMek7gJAiEA9z%2Fpshqcd3XUWQqiwJoVHFn4HCGDwtuFegtbRN8bLkIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5mEEVJBUjyg1BN4SrcA8kKCXJ1hPCW8Ql5CLVP4ZTm6c1aTsXH0HBtuJ%2FUdxuKApObDRjgnljOTv8%2BfjlmXCf4qZcGTK8bXB53IGLQ%2FxGtS3SbEScMIgVYkyoM1fSYqNnIVB4zaXc8jxELUCIz8P9x8wZ1CGoOn3uKubu%2F53Z5SL%2F7LIVDeSp40M0B5bqM0TeNv1O%2F0Z%2Bwe3F4hE8gyTPWnwbSRdMsEUYu1SdJiMhPTsI2w9edxsIPO429nHT6kx%2FyueCu8iEC%2F%2BHvWLaubW0wmYFJeNm%2BqFpcy5biep%2FVpvMgtcBQrlTryuPzRoBlWD064wS%2Fmb7Cz8%2FYYz2yu9SKFTfT3UW8aK6ag3TA%2FfkeADVN1J4i%2BA58K6BbOCK%2Fa%2FWTRUxHC3kuwVkoq97zm1RI7IP%2BHoDvMbdamoDfvQhHl2SnbISX3uDOPcktRO2xHh%2BpBWknI9%2BHoRTJSnkQXZo694m2Mhvzo3JrJMNISnnM6Imz%2FxCLcR1%2BUe%2BZReVwj%2FZRMenMas0ONH0BLxuT6XXpkfjysOu%2BObXKnnQ7ExPZcRQ31yjzeNiKgUBH7nymqlgTF3S%2BnjyISxwKa99U6qbYGOb56zYV7SKTkmlHFygh0mWf6QHdkcD08DD%2Fs%2FFogcLkcycHH76ZjrPiMNGyur8GOqUB2L68lanpih2SirejMdydO3F0YepOgA7%2FOgyB7BNHrBcYfy2JyKbD6j%2FaZlYwBaBnJFkstvFeIN977Ww2g6r%2F1PaLSRPgk2m7NqIDXRFBSgiJiSPlrg5W4E%2FuOTR%2BMR%2By0X4ZrEptNRlJtKGu8tbeNHhHDw3HT0Rgk4hFIfdIE%2FEg7Yib71jPPm8MZPv6eh3GDIwtnSYsUiwun6XnqwnwsSOixRK6&X-Amz-Signature=0016fa727b462e78b0c0b1423c572a42c3d84dbc64daaa1b12fa966379f70c22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXWVJMJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwm7dtipsthCO9R05QeICc6%2BDw%2BNfEr724V6tMek7gJAiEA9z%2Fpshqcd3XUWQqiwJoVHFn4HCGDwtuFegtbRN8bLkIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5mEEVJBUjyg1BN4SrcA8kKCXJ1hPCW8Ql5CLVP4ZTm6c1aTsXH0HBtuJ%2FUdxuKApObDRjgnljOTv8%2BfjlmXCf4qZcGTK8bXB53IGLQ%2FxGtS3SbEScMIgVYkyoM1fSYqNnIVB4zaXc8jxELUCIz8P9x8wZ1CGoOn3uKubu%2F53Z5SL%2F7LIVDeSp40M0B5bqM0TeNv1O%2F0Z%2Bwe3F4hE8gyTPWnwbSRdMsEUYu1SdJiMhPTsI2w9edxsIPO429nHT6kx%2FyueCu8iEC%2F%2BHvWLaubW0wmYFJeNm%2BqFpcy5biep%2FVpvMgtcBQrlTryuPzRoBlWD064wS%2Fmb7Cz8%2FYYz2yu9SKFTfT3UW8aK6ag3TA%2FfkeADVN1J4i%2BA58K6BbOCK%2Fa%2FWTRUxHC3kuwVkoq97zm1RI7IP%2BHoDvMbdamoDfvQhHl2SnbISX3uDOPcktRO2xHh%2BpBWknI9%2BHoRTJSnkQXZo694m2Mhvzo3JrJMNISnnM6Imz%2FxCLcR1%2BUe%2BZReVwj%2FZRMenMas0ONH0BLxuT6XXpkfjysOu%2BObXKnnQ7ExPZcRQ31yjzeNiKgUBH7nymqlgTF3S%2BnjyISxwKa99U6qbYGOb56zYV7SKTkmlHFygh0mWf6QHdkcD08DD%2Fs%2FFogcLkcycHH76ZjrPiMNGyur8GOqUB2L68lanpih2SirejMdydO3F0YepOgA7%2FOgyB7BNHrBcYfy2JyKbD6j%2FaZlYwBaBnJFkstvFeIN977Ww2g6r%2F1PaLSRPgk2m7NqIDXRFBSgiJiSPlrg5W4E%2FuOTR%2BMR%2By0X4ZrEptNRlJtKGu8tbeNHhHDw3HT0Rgk4hFIfdIE%2FEg7Yib71jPPm8MZPv6eh3GDIwtnSYsUiwun6XnqwnwsSOixRK6&X-Amz-Signature=2a4ff7e8e6ecf5d718a53543c12526563aef7ffbdf7ac0e35dcc71f488c47a65&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
