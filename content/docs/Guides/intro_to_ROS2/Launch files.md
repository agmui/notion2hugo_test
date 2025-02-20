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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPK5TVRJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWwNhwrY4DGxS0LkUHOSkYT0uiduKvYmLdSo3kOHVjyAiEArw%2BhsKSubZ4MVBf%2BAI7mYs1eGM1lrjw0QTJPaM6fVnIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLYLjuNPpZlLxxwlSrcAyT3SJWLe%2BliJW5CmHdq3j5mOel0qh4uFj5SP5AdH%2BpPxCNIfbBsqNU2G3pJ3J2jh1y9Z9vCG%2Bg58MypNe7t4%2FvUnat%2FomWKHd1izo1sGvrOTJXhOVtpBu7sbHF0K77RjTLITEQJCWlTSJxI%2FW4wfPr7sD3UNsaDWkS6CCjZE5WUqR2FESgpQV3obTmFhMGGmeAMjuygKGNwW3cis888XiNPlSNl9Gy2KfkCNsjbRd1951XeX4TfmOWmqylSYbOznQRz%2FW6vv8BoV5GlYet31IGx1mGMoMnXudWZCDr%2Bi4UP76ZhMLLqPWwqETwH41Z4l5uD0CXUE%2F%2FyhSp%2FWbmqbTRMx3Q15mZi%2FLMVU6DYP93IH2XvNKrzatBHm%2Ffg1JEO39QF4j3KkunAQjyD0W9DvP0J71OZe9j%2BLReisernlmvhWOp9lhlPdgV74XHeowdA2Vu%2F32uxwqKyBcBD%2B1isBty5ZbcRXhcY%2FtX1JxKIa8eWbl%2BSGyPuUB2Pfwufaw5W5E8SuDEwJyjloEFi%2BF3KX6wIT5VScQuHMU2GTAQBpxHppAJUbcNx0nmp%2FSHVuO23GPySpPiKG22NP5ECC8O1IlbsP%2F5uOa5yBgvsmh%2BG0RZJnDyVWxKDrXMCJGOhMM%2B8270GOqUBd7MRBrG6hrYtVEGiJy2MoeBRIUPdMindKdgor%2FDowNbHT9V2DuIy57vwJnn5XhHBG2mkgCeXWUVlEZDpZNMh6e7UbNV8IQ5MRmuNCzH9kir0SKdfGSOXUo1EqXd6ny1dN7wqrebp%2F3rCt0V3RB%2F7jgdko0bKA14gjqrtgX7PF2KcCakhMeMxEuoOcoMcryYt308wR8X8gZzwYe8%2Fmb6KvzTyI%2FJ8&X-Amz-Signature=d1b1baf06ee037e456dcbbbb2c9d348b34fcf3269da84d41d2784d8f17f02921&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPK5TVRJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWwNhwrY4DGxS0LkUHOSkYT0uiduKvYmLdSo3kOHVjyAiEArw%2BhsKSubZ4MVBf%2BAI7mYs1eGM1lrjw0QTJPaM6fVnIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLYLjuNPpZlLxxwlSrcAyT3SJWLe%2BliJW5CmHdq3j5mOel0qh4uFj5SP5AdH%2BpPxCNIfbBsqNU2G3pJ3J2jh1y9Z9vCG%2Bg58MypNe7t4%2FvUnat%2FomWKHd1izo1sGvrOTJXhOVtpBu7sbHF0K77RjTLITEQJCWlTSJxI%2FW4wfPr7sD3UNsaDWkS6CCjZE5WUqR2FESgpQV3obTmFhMGGmeAMjuygKGNwW3cis888XiNPlSNl9Gy2KfkCNsjbRd1951XeX4TfmOWmqylSYbOznQRz%2FW6vv8BoV5GlYet31IGx1mGMoMnXudWZCDr%2Bi4UP76ZhMLLqPWwqETwH41Z4l5uD0CXUE%2F%2FyhSp%2FWbmqbTRMx3Q15mZi%2FLMVU6DYP93IH2XvNKrzatBHm%2Ffg1JEO39QF4j3KkunAQjyD0W9DvP0J71OZe9j%2BLReisernlmvhWOp9lhlPdgV74XHeowdA2Vu%2F32uxwqKyBcBD%2B1isBty5ZbcRXhcY%2FtX1JxKIa8eWbl%2BSGyPuUB2Pfwufaw5W5E8SuDEwJyjloEFi%2BF3KX6wIT5VScQuHMU2GTAQBpxHppAJUbcNx0nmp%2FSHVuO23GPySpPiKG22NP5ECC8O1IlbsP%2F5uOa5yBgvsmh%2BG0RZJnDyVWxKDrXMCJGOhMM%2B8270GOqUBd7MRBrG6hrYtVEGiJy2MoeBRIUPdMindKdgor%2FDowNbHT9V2DuIy57vwJnn5XhHBG2mkgCeXWUVlEZDpZNMh6e7UbNV8IQ5MRmuNCzH9kir0SKdfGSOXUo1EqXd6ny1dN7wqrebp%2F3rCt0V3RB%2F7jgdko0bKA14gjqrtgX7PF2KcCakhMeMxEuoOcoMcryYt308wR8X8gZzwYe8%2Fmb6KvzTyI%2FJ8&X-Amz-Signature=b01909e1f12dc24f4ae0b4ccbd1277a6ae023990e4837f32101de9d42918d4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPK5TVRJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWwNhwrY4DGxS0LkUHOSkYT0uiduKvYmLdSo3kOHVjyAiEArw%2BhsKSubZ4MVBf%2BAI7mYs1eGM1lrjw0QTJPaM6fVnIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLYLjuNPpZlLxxwlSrcAyT3SJWLe%2BliJW5CmHdq3j5mOel0qh4uFj5SP5AdH%2BpPxCNIfbBsqNU2G3pJ3J2jh1y9Z9vCG%2Bg58MypNe7t4%2FvUnat%2FomWKHd1izo1sGvrOTJXhOVtpBu7sbHF0K77RjTLITEQJCWlTSJxI%2FW4wfPr7sD3UNsaDWkS6CCjZE5WUqR2FESgpQV3obTmFhMGGmeAMjuygKGNwW3cis888XiNPlSNl9Gy2KfkCNsjbRd1951XeX4TfmOWmqylSYbOznQRz%2FW6vv8BoV5GlYet31IGx1mGMoMnXudWZCDr%2Bi4UP76ZhMLLqPWwqETwH41Z4l5uD0CXUE%2F%2FyhSp%2FWbmqbTRMx3Q15mZi%2FLMVU6DYP93IH2XvNKrzatBHm%2Ffg1JEO39QF4j3KkunAQjyD0W9DvP0J71OZe9j%2BLReisernlmvhWOp9lhlPdgV74XHeowdA2Vu%2F32uxwqKyBcBD%2B1isBty5ZbcRXhcY%2FtX1JxKIa8eWbl%2BSGyPuUB2Pfwufaw5W5E8SuDEwJyjloEFi%2BF3KX6wIT5VScQuHMU2GTAQBpxHppAJUbcNx0nmp%2FSHVuO23GPySpPiKG22NP5ECC8O1IlbsP%2F5uOa5yBgvsmh%2BG0RZJnDyVWxKDrXMCJGOhMM%2B8270GOqUBd7MRBrG6hrYtVEGiJy2MoeBRIUPdMindKdgor%2FDowNbHT9V2DuIy57vwJnn5XhHBG2mkgCeXWUVlEZDpZNMh6e7UbNV8IQ5MRmuNCzH9kir0SKdfGSOXUo1EqXd6ny1dN7wqrebp%2F3rCt0V3RB%2F7jgdko0bKA14gjqrtgX7PF2KcCakhMeMxEuoOcoMcryYt308wR8X8gZzwYe8%2Fmb6KvzTyI%2FJ8&X-Amz-Signature=3d28536b5298165e253b6303da1b9358a856738ec16692da93070c466f563124&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
