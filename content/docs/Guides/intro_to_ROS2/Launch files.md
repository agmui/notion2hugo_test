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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTB3SIS3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCHgMBsgVL%2FeGjllGwMRFAe8lHWl%2Bf90fVdCcdYI4X53wIhALBJE1T8gbHab55m0x3GIUyspbEJzhp3V%2BYgUmMp1x30KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1y9S45AJIi%2BKsN9kq3AOpBJRIZaXsP%2BIHHqnldgQumK%2Fbk7eSmBO3JEBUcQLfeNAdv%2FdMRrcqRfBtl%2BXBZ4fs3CWzgdWMbqhDXch8%2F7Hf2qabb5Wm15%2FebCiaHSFR%2FRTIbfplhQW3dPk5E4EqxvoGROWznsRSQz6c6pGpAj4t6Lmwpx%2FCtV82nbMNbV%2BQDBvC1EMFdMyZ3l3o5%2F%2Bt7dHTw8BpxwbdebqSSs5d%2FKsT75QNpQUP5NlPgQ2Y4o0wFI%2FllJeKr6%2BfI6BFKpm2gEx6OUqI%2B8nGq9SyXGM9kZJ69hzQuHpvglrUF4dBp8XxaIp7avpNqh9XweCo1tq3Q2shyqNcTrttgP9NY32eS%2F%2F1roSobkLHSOVV0xORc8gV8L39zub6Q7bC1%2F90Oue2th3gyglO6wYLZF7KUaAQDMLp%2FPDHhXqdm7ciSKxbclZgB9SzPbP0a3E22WH9vuKo8kBTEovYSl5J2%2BErIc3GxT%2BFTxE71Jc5vDJrnkXBVfLvIn6yPLDxhn9csczmAuw5SLvlUdAuWU3bUizsIqCmVjl8baBNsm4fRCsr7E6W9EnSP8q8qynCqPHQXgVN0QiE%2BsVGP42Tw4iwcsbU%2FJ8%2BGCbCx376jRf4inOqdl4hQ4Y9v%2FDFINUsdn3%2BgVL9sjDU68C%2BBjqkAeU6u1FJLVv1ZZ0l0KrS9sGNwjDAvz7ipCU2tmopKxS0df7vkfjuvkQ2XWhkAY%2BK%2BAhm%2BtGAzdiDgq7dN6Ah1HbVhVzzSsBFqn%2Fs7tht0Yj6%2BjggaEu8D8SsVpSoP1S18SESK0gzpugOPVeAw8NTDbeopoEFt0%2BtOERgU9o%2BnksOigxlZvuj50w2TMZYRQoNOUQvxjuQQTavCn9bjpTBS8sZzNYL&X-Amz-Signature=09e3706379a27337c245e6a9b53b9b8312e470f3c2d2c33fb32e499b4f7b3bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTB3SIS3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCHgMBsgVL%2FeGjllGwMRFAe8lHWl%2Bf90fVdCcdYI4X53wIhALBJE1T8gbHab55m0x3GIUyspbEJzhp3V%2BYgUmMp1x30KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1y9S45AJIi%2BKsN9kq3AOpBJRIZaXsP%2BIHHqnldgQumK%2Fbk7eSmBO3JEBUcQLfeNAdv%2FdMRrcqRfBtl%2BXBZ4fs3CWzgdWMbqhDXch8%2F7Hf2qabb5Wm15%2FebCiaHSFR%2FRTIbfplhQW3dPk5E4EqxvoGROWznsRSQz6c6pGpAj4t6Lmwpx%2FCtV82nbMNbV%2BQDBvC1EMFdMyZ3l3o5%2F%2Bt7dHTw8BpxwbdebqSSs5d%2FKsT75QNpQUP5NlPgQ2Y4o0wFI%2FllJeKr6%2BfI6BFKpm2gEx6OUqI%2B8nGq9SyXGM9kZJ69hzQuHpvglrUF4dBp8XxaIp7avpNqh9XweCo1tq3Q2shyqNcTrttgP9NY32eS%2F%2F1roSobkLHSOVV0xORc8gV8L39zub6Q7bC1%2F90Oue2th3gyglO6wYLZF7KUaAQDMLp%2FPDHhXqdm7ciSKxbclZgB9SzPbP0a3E22WH9vuKo8kBTEovYSl5J2%2BErIc3GxT%2BFTxE71Jc5vDJrnkXBVfLvIn6yPLDxhn9csczmAuw5SLvlUdAuWU3bUizsIqCmVjl8baBNsm4fRCsr7E6W9EnSP8q8qynCqPHQXgVN0QiE%2BsVGP42Tw4iwcsbU%2FJ8%2BGCbCx376jRf4inOqdl4hQ4Y9v%2FDFINUsdn3%2BgVL9sjDU68C%2BBjqkAeU6u1FJLVv1ZZ0l0KrS9sGNwjDAvz7ipCU2tmopKxS0df7vkfjuvkQ2XWhkAY%2BK%2BAhm%2BtGAzdiDgq7dN6Ah1HbVhVzzSsBFqn%2Fs7tht0Yj6%2BjggaEu8D8SsVpSoP1S18SESK0gzpugOPVeAw8NTDbeopoEFt0%2BtOERgU9o%2BnksOigxlZvuj50w2TMZYRQoNOUQvxjuQQTavCn9bjpTBS8sZzNYL&X-Amz-Signature=4d82ff5e2015aee22495975ef8e31a3b25826ff561e23c9d1879c8fc9970d4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTB3SIS3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCHgMBsgVL%2FeGjllGwMRFAe8lHWl%2Bf90fVdCcdYI4X53wIhALBJE1T8gbHab55m0x3GIUyspbEJzhp3V%2BYgUmMp1x30KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1y9S45AJIi%2BKsN9kq3AOpBJRIZaXsP%2BIHHqnldgQumK%2Fbk7eSmBO3JEBUcQLfeNAdv%2FdMRrcqRfBtl%2BXBZ4fs3CWzgdWMbqhDXch8%2F7Hf2qabb5Wm15%2FebCiaHSFR%2FRTIbfplhQW3dPk5E4EqxvoGROWznsRSQz6c6pGpAj4t6Lmwpx%2FCtV82nbMNbV%2BQDBvC1EMFdMyZ3l3o5%2F%2Bt7dHTw8BpxwbdebqSSs5d%2FKsT75QNpQUP5NlPgQ2Y4o0wFI%2FllJeKr6%2BfI6BFKpm2gEx6OUqI%2B8nGq9SyXGM9kZJ69hzQuHpvglrUF4dBp8XxaIp7avpNqh9XweCo1tq3Q2shyqNcTrttgP9NY32eS%2F%2F1roSobkLHSOVV0xORc8gV8L39zub6Q7bC1%2F90Oue2th3gyglO6wYLZF7KUaAQDMLp%2FPDHhXqdm7ciSKxbclZgB9SzPbP0a3E22WH9vuKo8kBTEovYSl5J2%2BErIc3GxT%2BFTxE71Jc5vDJrnkXBVfLvIn6yPLDxhn9csczmAuw5SLvlUdAuWU3bUizsIqCmVjl8baBNsm4fRCsr7E6W9EnSP8q8qynCqPHQXgVN0QiE%2BsVGP42Tw4iwcsbU%2FJ8%2BGCbCx376jRf4inOqdl4hQ4Y9v%2FDFINUsdn3%2BgVL9sjDU68C%2BBjqkAeU6u1FJLVv1ZZ0l0KrS9sGNwjDAvz7ipCU2tmopKxS0df7vkfjuvkQ2XWhkAY%2BK%2BAhm%2BtGAzdiDgq7dN6Ah1HbVhVzzSsBFqn%2Fs7tht0Yj6%2BjggaEu8D8SsVpSoP1S18SESK0gzpugOPVeAw8NTDbeopoEFt0%2BtOERgU9o%2BnksOigxlZvuj50w2TMZYRQoNOUQvxjuQQTavCn9bjpTBS8sZzNYL&X-Amz-Signature=58e79b9e22b47f0f0e1c77dbc87cc36ac682069ca7e73e9bd676171a959c9b70&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
