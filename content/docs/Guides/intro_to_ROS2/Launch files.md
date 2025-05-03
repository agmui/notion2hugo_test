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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SGUCNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDd28Brf2TpZXVsoZ90NZIUigV3CGa0HFLLMx8KQ9BsgQIgNeNK6z7kMBTLcJPNsqUHoUkYjwgHS6tZ2ZjQliSdtkwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEddwUcl5QYdzrzM0ircAyK9ScqY7CK3%2FkImsMsOr1AwWPx6it3PEwvHXE91B%2BsgJBpKqV6ieq6xUl%2B0X2uBbin6E1W3I2OhyyS%2BIMrm6t%2B2IfmsHmtdZDidsvvFZ%2F45H%2BczaxOkSU8qQAvgAAs0Ea%2FmrLM1po3k4VoI7xFidaxVKU7QzD5lRvY9p%2Bnsx2nCzB5qP4FoRkAQhvTOqTKoY1luRIHmw56BxcW0pIcDyJAtbYpTJBjAJR5WfFhCpDdXby8GJ5SCMjHiWkg2s%2B0VFM%2FSIUAn9SwxMwyKa9oJqdNoH8CeTdL1Cvk0IXuyQ%2BDPPKe4Iy%2FNGEjUGuohsmS0L38AzhCjq65ofvr9a6ePmfNjKgAB7OpyW8rtXGYwALsASYHGYpUkoIu6ZRxz1cHAy8rswhGIgkrcBlFfAiwZkRKIdZ95m7aAZCqMU6vjsyWaHEGqhXcRPlF6j0KG4KexBqfT6oNG3Om%2FB%2BxflAL0EUGu8deX84obrZqw8irvglrqoPflWNMSkspWuG6dJwUF3yyGTePAHDyUqKWat%2FAJAkE7lCn0OfzzjGxfv3NUAPRV0HLa5Zwo5mqkvLBbhStGkJRdCbGrGQyNxk%2FzlotsegiG3GRwbIQiGSAPhe7eFKwbrmCx3%2FeVBv7o1HlnMPeG1sAGOqUBeBa4zhl5vDjxAnH%2FDvkBFy3ER1IQIG%2F5YKdp9X35d4Z31c1IW%2Bv%2Bavt0ZiWtJPxCs5uQ8hzfif8kHCkdIwuAOeZi1wUTiuQ%2Bczv1FNuwWgE1%2FaV8iUvBERLKKx%2BQ%2FblHhhk4Xt2Jaz7PcjcQ80YEyxcDQdNiHK1LiuN5KeYocD5aKVqZ3vniaMbFkhoHyyztUDUQrLGgZH8ya%2FpxrMWx8mii1%2Ftx&X-Amz-Signature=a8cdf1c3012b518a71ead94f20fdf9ddf1e56705fd7bcf726ac7af37024b9092&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SGUCNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDd28Brf2TpZXVsoZ90NZIUigV3CGa0HFLLMx8KQ9BsgQIgNeNK6z7kMBTLcJPNsqUHoUkYjwgHS6tZ2ZjQliSdtkwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEddwUcl5QYdzrzM0ircAyK9ScqY7CK3%2FkImsMsOr1AwWPx6it3PEwvHXE91B%2BsgJBpKqV6ieq6xUl%2B0X2uBbin6E1W3I2OhyyS%2BIMrm6t%2B2IfmsHmtdZDidsvvFZ%2F45H%2BczaxOkSU8qQAvgAAs0Ea%2FmrLM1po3k4VoI7xFidaxVKU7QzD5lRvY9p%2Bnsx2nCzB5qP4FoRkAQhvTOqTKoY1luRIHmw56BxcW0pIcDyJAtbYpTJBjAJR5WfFhCpDdXby8GJ5SCMjHiWkg2s%2B0VFM%2FSIUAn9SwxMwyKa9oJqdNoH8CeTdL1Cvk0IXuyQ%2BDPPKe4Iy%2FNGEjUGuohsmS0L38AzhCjq65ofvr9a6ePmfNjKgAB7OpyW8rtXGYwALsASYHGYpUkoIu6ZRxz1cHAy8rswhGIgkrcBlFfAiwZkRKIdZ95m7aAZCqMU6vjsyWaHEGqhXcRPlF6j0KG4KexBqfT6oNG3Om%2FB%2BxflAL0EUGu8deX84obrZqw8irvglrqoPflWNMSkspWuG6dJwUF3yyGTePAHDyUqKWat%2FAJAkE7lCn0OfzzjGxfv3NUAPRV0HLa5Zwo5mqkvLBbhStGkJRdCbGrGQyNxk%2FzlotsegiG3GRwbIQiGSAPhe7eFKwbrmCx3%2FeVBv7o1HlnMPeG1sAGOqUBeBa4zhl5vDjxAnH%2FDvkBFy3ER1IQIG%2F5YKdp9X35d4Z31c1IW%2Bv%2Bavt0ZiWtJPxCs5uQ8hzfif8kHCkdIwuAOeZi1wUTiuQ%2Bczv1FNuwWgE1%2FaV8iUvBERLKKx%2BQ%2FblHhhk4Xt2Jaz7PcjcQ80YEyxcDQdNiHK1LiuN5KeYocD5aKVqZ3vniaMbFkhoHyyztUDUQrLGgZH8ya%2FpxrMWx8mii1%2Ftx&X-Amz-Signature=75c71255e8639eaf25026447f04d5a0606b447c09c053438e82ab89f3c46520b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SGUCNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDd28Brf2TpZXVsoZ90NZIUigV3CGa0HFLLMx8KQ9BsgQIgNeNK6z7kMBTLcJPNsqUHoUkYjwgHS6tZ2ZjQliSdtkwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEddwUcl5QYdzrzM0ircAyK9ScqY7CK3%2FkImsMsOr1AwWPx6it3PEwvHXE91B%2BsgJBpKqV6ieq6xUl%2B0X2uBbin6E1W3I2OhyyS%2BIMrm6t%2B2IfmsHmtdZDidsvvFZ%2F45H%2BczaxOkSU8qQAvgAAs0Ea%2FmrLM1po3k4VoI7xFidaxVKU7QzD5lRvY9p%2Bnsx2nCzB5qP4FoRkAQhvTOqTKoY1luRIHmw56BxcW0pIcDyJAtbYpTJBjAJR5WfFhCpDdXby8GJ5SCMjHiWkg2s%2B0VFM%2FSIUAn9SwxMwyKa9oJqdNoH8CeTdL1Cvk0IXuyQ%2BDPPKe4Iy%2FNGEjUGuohsmS0L38AzhCjq65ofvr9a6ePmfNjKgAB7OpyW8rtXGYwALsASYHGYpUkoIu6ZRxz1cHAy8rswhGIgkrcBlFfAiwZkRKIdZ95m7aAZCqMU6vjsyWaHEGqhXcRPlF6j0KG4KexBqfT6oNG3Om%2FB%2BxflAL0EUGu8deX84obrZqw8irvglrqoPflWNMSkspWuG6dJwUF3yyGTePAHDyUqKWat%2FAJAkE7lCn0OfzzjGxfv3NUAPRV0HLa5Zwo5mqkvLBbhStGkJRdCbGrGQyNxk%2FzlotsegiG3GRwbIQiGSAPhe7eFKwbrmCx3%2FeVBv7o1HlnMPeG1sAGOqUBeBa4zhl5vDjxAnH%2FDvkBFy3ER1IQIG%2F5YKdp9X35d4Z31c1IW%2Bv%2Bavt0ZiWtJPxCs5uQ8hzfif8kHCkdIwuAOeZi1wUTiuQ%2Bczv1FNuwWgE1%2FaV8iUvBERLKKx%2BQ%2FblHhhk4Xt2Jaz7PcjcQ80YEyxcDQdNiHK1LiuN5KeYocD5aKVqZ3vniaMbFkhoHyyztUDUQrLGgZH8ya%2FpxrMWx8mii1%2Ftx&X-Amz-Signature=19e2ec8a886aa42e9538f91b8882f94228368bb66d6fcd26e6cfc7e16f446a46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
