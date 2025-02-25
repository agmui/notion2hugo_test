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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA7HJ5U%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCl8l3uesEjtgixa%2Bbs3u%2FXdqDWrXAqboNMvak%2FmzTxPwIhAIJcorul46s46E8Gzlv50M3G8m0IZKMP8EqOSgvORYwHKv8DCEAQABoMNjM3NDIzMTgzODA1Igw%2BTSxRzKZ6S6r6jYcq3ANdbLQN8kvwpeD74icQNs%2FQwB8%2FbXDAt%2BWCZOl3qbbEvTF4A%2B7bP3Rl66ysiNZ7RBQyGT3KvdoGIa3QSSsTRutMZHSCeJVuN%2FUoNaiNHNofRztw6yZ%2BsMOutjyC2KLAgfGpSTDDtzMLTCbV8Ia9kPKA%2FPPGz%2Flm5y33oKvU%2Bs%2B0iRTuY5uKJwx0xN3FSjtZKfwFeyBjix9ySaEvq1LyYPSh%2BCvjzNmmZerR%2FwJ724wpKGW8%2FeTxCkaCLE5P%2FFK2zdjo9x3ZHoclLP7ckAB3oqW987wiLu%2FceLUcntDc%2FNRzv%2FuoDeHzAZIUARB2bffc%2BBWFZfzG6xIj6R8Us8PER6YD8JN%2FmNaFE0YiwjRXTKf4OHJSP7Q1LP4dydUYCgYAcBFCWlWH%2F%2BcVSNqSCeg1olk05rhzx6lEzPJacrpGLBKexjmeHM40k%2FzRRCE%2BkBpr4LjnQQu4jS7IgpCY72J7ChVq2%2BsNN5lviGMvS1fGLo5cJ2wXtG%2BgXn5y2mesQYtNjlxEWr%2FTHKbcswXTZyypxt%2FKbIyoMy2CEFwBmvflPcGbh9A1n6ZQkPtYIWO1hIS76R%2BKgckYI%2FlS8224oPoQ4KvwTgRzSd2Jm9Eaxs6VBmWNFBxGeOHdfHeLzh%2BrKTD1yfW9BjqkAQj95iayEhj1urGcG3m1SUASRi2CH9E57Nm1dbU8VAKvNn7aBo7rkwhav73M6Q6DHdD9nZbdVAMhpbgpCAt%2FSXwHZDsJh%2BKasoHJPW7RcS2I6YFrZe5DnUw0XuJPJm7eDVfMN%2BZmfHqLTL6E5qA9Y%2B1cDI%2BQbDPWoibJhO%2Bmfi5eH86J49lZnyrhDbkchzo0fpyTsnyxC7rgTuzt%2BlWq1uBjeNLT&X-Amz-Signature=234a8b43c752349e0185901a649af91ece25849b8c6a9bfa7bf0a958f2e4373c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA7HJ5U%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCl8l3uesEjtgixa%2Bbs3u%2FXdqDWrXAqboNMvak%2FmzTxPwIhAIJcorul46s46E8Gzlv50M3G8m0IZKMP8EqOSgvORYwHKv8DCEAQABoMNjM3NDIzMTgzODA1Igw%2BTSxRzKZ6S6r6jYcq3ANdbLQN8kvwpeD74icQNs%2FQwB8%2FbXDAt%2BWCZOl3qbbEvTF4A%2B7bP3Rl66ysiNZ7RBQyGT3KvdoGIa3QSSsTRutMZHSCeJVuN%2FUoNaiNHNofRztw6yZ%2BsMOutjyC2KLAgfGpSTDDtzMLTCbV8Ia9kPKA%2FPPGz%2Flm5y33oKvU%2Bs%2B0iRTuY5uKJwx0xN3FSjtZKfwFeyBjix9ySaEvq1LyYPSh%2BCvjzNmmZerR%2FwJ724wpKGW8%2FeTxCkaCLE5P%2FFK2zdjo9x3ZHoclLP7ckAB3oqW987wiLu%2FceLUcntDc%2FNRzv%2FuoDeHzAZIUARB2bffc%2BBWFZfzG6xIj6R8Us8PER6YD8JN%2FmNaFE0YiwjRXTKf4OHJSP7Q1LP4dydUYCgYAcBFCWlWH%2F%2BcVSNqSCeg1olk05rhzx6lEzPJacrpGLBKexjmeHM40k%2FzRRCE%2BkBpr4LjnQQu4jS7IgpCY72J7ChVq2%2BsNN5lviGMvS1fGLo5cJ2wXtG%2BgXn5y2mesQYtNjlxEWr%2FTHKbcswXTZyypxt%2FKbIyoMy2CEFwBmvflPcGbh9A1n6ZQkPtYIWO1hIS76R%2BKgckYI%2FlS8224oPoQ4KvwTgRzSd2Jm9Eaxs6VBmWNFBxGeOHdfHeLzh%2BrKTD1yfW9BjqkAQj95iayEhj1urGcG3m1SUASRi2CH9E57Nm1dbU8VAKvNn7aBo7rkwhav73M6Q6DHdD9nZbdVAMhpbgpCAt%2FSXwHZDsJh%2BKasoHJPW7RcS2I6YFrZe5DnUw0XuJPJm7eDVfMN%2BZmfHqLTL6E5qA9Y%2B1cDI%2BQbDPWoibJhO%2Bmfi5eH86J49lZnyrhDbkchzo0fpyTsnyxC7rgTuzt%2BlWq1uBjeNLT&X-Amz-Signature=3f79f5d72ea7f4fd96c931cd67e16f5040cea91c9b1e1ee2a0cc1c45ecc71d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA7HJ5U%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCl8l3uesEjtgixa%2Bbs3u%2FXdqDWrXAqboNMvak%2FmzTxPwIhAIJcorul46s46E8Gzlv50M3G8m0IZKMP8EqOSgvORYwHKv8DCEAQABoMNjM3NDIzMTgzODA1Igw%2BTSxRzKZ6S6r6jYcq3ANdbLQN8kvwpeD74icQNs%2FQwB8%2FbXDAt%2BWCZOl3qbbEvTF4A%2B7bP3Rl66ysiNZ7RBQyGT3KvdoGIa3QSSsTRutMZHSCeJVuN%2FUoNaiNHNofRztw6yZ%2BsMOutjyC2KLAgfGpSTDDtzMLTCbV8Ia9kPKA%2FPPGz%2Flm5y33oKvU%2Bs%2B0iRTuY5uKJwx0xN3FSjtZKfwFeyBjix9ySaEvq1LyYPSh%2BCvjzNmmZerR%2FwJ724wpKGW8%2FeTxCkaCLE5P%2FFK2zdjo9x3ZHoclLP7ckAB3oqW987wiLu%2FceLUcntDc%2FNRzv%2FuoDeHzAZIUARB2bffc%2BBWFZfzG6xIj6R8Us8PER6YD8JN%2FmNaFE0YiwjRXTKf4OHJSP7Q1LP4dydUYCgYAcBFCWlWH%2F%2BcVSNqSCeg1olk05rhzx6lEzPJacrpGLBKexjmeHM40k%2FzRRCE%2BkBpr4LjnQQu4jS7IgpCY72J7ChVq2%2BsNN5lviGMvS1fGLo5cJ2wXtG%2BgXn5y2mesQYtNjlxEWr%2FTHKbcswXTZyypxt%2FKbIyoMy2CEFwBmvflPcGbh9A1n6ZQkPtYIWO1hIS76R%2BKgckYI%2FlS8224oPoQ4KvwTgRzSd2Jm9Eaxs6VBmWNFBxGeOHdfHeLzh%2BrKTD1yfW9BjqkAQj95iayEhj1urGcG3m1SUASRi2CH9E57Nm1dbU8VAKvNn7aBo7rkwhav73M6Q6DHdD9nZbdVAMhpbgpCAt%2FSXwHZDsJh%2BKasoHJPW7RcS2I6YFrZe5DnUw0XuJPJm7eDVfMN%2BZmfHqLTL6E5qA9Y%2B1cDI%2BQbDPWoibJhO%2Bmfi5eH86J49lZnyrhDbkchzo0fpyTsnyxC7rgTuzt%2BlWq1uBjeNLT&X-Amz-Signature=591933b1422a796258beb62283ba8903a36543726247f70130aa178685df5ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
