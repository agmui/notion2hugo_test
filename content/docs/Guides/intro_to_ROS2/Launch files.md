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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5UNJKCH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvA8pc22X4V8xWkypgXymEhKe3v0gjfwIujFvBL35RuAiEAocYvgh5V2Rew3nmU6kRoCMGoI9w16swgc4kgwqw0HC4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHEW9qrHCgvvK3plCrcA4prgsZWBSsCa10cXdh0j3sc%2FOOp2RJoLrWhMOBfVgdEKruKzWPeB6ko%2FJ66r2T0ZxBUcoc2zcvMHDr0d8Xk0aBXMOTVBun1fEtlvxGl%2BwAfjojtbfCSfhW%2BxBMWu0qiXxAtVG6OyLc5SdB7W%2F7uuycjVvf2erC4LUbjJ27YvRH73LotQYIzKCaafuOe9MdlCRaqyES9Vij49zJaVpvjuGA3CtLJ7pX7g3bCSjZS6kgDZEzdJ767bHCffyA%2Bt%2BMSJ34yy%2BTg%2B0XQ%2B8a1IKhMWRwr0Rw6AzlXxTMuJ8dYN88Eq9QfUPUk%2B%2FPvGPBuZV92KBSAH%2BYi1pKDq23%2BiwgZkRqugqzG9a5Yd7n0gUeW1w7JPYTctjagGxoxSIX%2Bw7Pjz%2Fvhgs1uRh4bEaSqLrGZn5IKt9bHk%2BuHk2kLb5WIPt6PQeXee%2BPc%2BH2wJawZS0ivKmKr0MU0DP%2FVzo0Y19pLFkWc3ADEwl3AOFw7D9nBoRp54YtoN1dAWPPGWmAuR5BItluagQmdtCTerYzswVXaNLlmi0pfEqmNLGTmKnlGu6lGGR1hwXugPm%2FwUB9vUMsBnO%2BN4m%2Ftq9jvCZLdDsr%2FfJobdvEkAPIlgDpL3g5aP%2B4nyQsdom1gYpuyxKxHMNWwgr8GOqUBxUsKfLHZulxaQn3%2BJEVuU4RjeoW7HPy%2FP7X6wWbSrJm0MvuyvySQbU%2BLWib2xUApiCj2TURILXu6CAUdBBwGkAhBHug5wj925rqB2XspfsdqntXaz2v0V%2BcGDz8Uf86TNUa6IHBC8pZvep7EypGy0dWmPcMxH%2Fty%2FG9uPcDJd0VZpanrelJZdJhYKzUcBSNJ%2FCILrZsOEvFKIG7qnbSIfIFeH%2BIt&X-Amz-Signature=b11c12f8299d818a279b55106d8e5cd826d7f3f8a5ec9efce9be9dc0d9e239f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5UNJKCH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvA8pc22X4V8xWkypgXymEhKe3v0gjfwIujFvBL35RuAiEAocYvgh5V2Rew3nmU6kRoCMGoI9w16swgc4kgwqw0HC4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHEW9qrHCgvvK3plCrcA4prgsZWBSsCa10cXdh0j3sc%2FOOp2RJoLrWhMOBfVgdEKruKzWPeB6ko%2FJ66r2T0ZxBUcoc2zcvMHDr0d8Xk0aBXMOTVBun1fEtlvxGl%2BwAfjojtbfCSfhW%2BxBMWu0qiXxAtVG6OyLc5SdB7W%2F7uuycjVvf2erC4LUbjJ27YvRH73LotQYIzKCaafuOe9MdlCRaqyES9Vij49zJaVpvjuGA3CtLJ7pX7g3bCSjZS6kgDZEzdJ767bHCffyA%2Bt%2BMSJ34yy%2BTg%2B0XQ%2B8a1IKhMWRwr0Rw6AzlXxTMuJ8dYN88Eq9QfUPUk%2B%2FPvGPBuZV92KBSAH%2BYi1pKDq23%2BiwgZkRqugqzG9a5Yd7n0gUeW1w7JPYTctjagGxoxSIX%2Bw7Pjz%2Fvhgs1uRh4bEaSqLrGZn5IKt9bHk%2BuHk2kLb5WIPt6PQeXee%2BPc%2BH2wJawZS0ivKmKr0MU0DP%2FVzo0Y19pLFkWc3ADEwl3AOFw7D9nBoRp54YtoN1dAWPPGWmAuR5BItluagQmdtCTerYzswVXaNLlmi0pfEqmNLGTmKnlGu6lGGR1hwXugPm%2FwUB9vUMsBnO%2BN4m%2Ftq9jvCZLdDsr%2FfJobdvEkAPIlgDpL3g5aP%2B4nyQsdom1gYpuyxKxHMNWwgr8GOqUBxUsKfLHZulxaQn3%2BJEVuU4RjeoW7HPy%2FP7X6wWbSrJm0MvuyvySQbU%2BLWib2xUApiCj2TURILXu6CAUdBBwGkAhBHug5wj925rqB2XspfsdqntXaz2v0V%2BcGDz8Uf86TNUa6IHBC8pZvep7EypGy0dWmPcMxH%2Fty%2FG9uPcDJd0VZpanrelJZdJhYKzUcBSNJ%2FCILrZsOEvFKIG7qnbSIfIFeH%2BIt&X-Amz-Signature=c9ed832aba7abca3b2fc41e6069cc8e447dbb43c49e9c7cc7971bd914ed8739f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5UNJKCH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvA8pc22X4V8xWkypgXymEhKe3v0gjfwIujFvBL35RuAiEAocYvgh5V2Rew3nmU6kRoCMGoI9w16swgc4kgwqw0HC4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHEW9qrHCgvvK3plCrcA4prgsZWBSsCa10cXdh0j3sc%2FOOp2RJoLrWhMOBfVgdEKruKzWPeB6ko%2FJ66r2T0ZxBUcoc2zcvMHDr0d8Xk0aBXMOTVBun1fEtlvxGl%2BwAfjojtbfCSfhW%2BxBMWu0qiXxAtVG6OyLc5SdB7W%2F7uuycjVvf2erC4LUbjJ27YvRH73LotQYIzKCaafuOe9MdlCRaqyES9Vij49zJaVpvjuGA3CtLJ7pX7g3bCSjZS6kgDZEzdJ767bHCffyA%2Bt%2BMSJ34yy%2BTg%2B0XQ%2B8a1IKhMWRwr0Rw6AzlXxTMuJ8dYN88Eq9QfUPUk%2B%2FPvGPBuZV92KBSAH%2BYi1pKDq23%2BiwgZkRqugqzG9a5Yd7n0gUeW1w7JPYTctjagGxoxSIX%2Bw7Pjz%2Fvhgs1uRh4bEaSqLrGZn5IKt9bHk%2BuHk2kLb5WIPt6PQeXee%2BPc%2BH2wJawZS0ivKmKr0MU0DP%2FVzo0Y19pLFkWc3ADEwl3AOFw7D9nBoRp54YtoN1dAWPPGWmAuR5BItluagQmdtCTerYzswVXaNLlmi0pfEqmNLGTmKnlGu6lGGR1hwXugPm%2FwUB9vUMsBnO%2BN4m%2Ftq9jvCZLdDsr%2FfJobdvEkAPIlgDpL3g5aP%2B4nyQsdom1gYpuyxKxHMNWwgr8GOqUBxUsKfLHZulxaQn3%2BJEVuU4RjeoW7HPy%2FP7X6wWbSrJm0MvuyvySQbU%2BLWib2xUApiCj2TURILXu6CAUdBBwGkAhBHug5wj925rqB2XspfsdqntXaz2v0V%2BcGDz8Uf86TNUa6IHBC8pZvep7EypGy0dWmPcMxH%2Fty%2FG9uPcDJd0VZpanrelJZdJhYKzUcBSNJ%2FCILrZsOEvFKIG7qnbSIfIFeH%2BIt&X-Amz-Signature=fa41ba9aadc5b8391e5605a285ca4f31b41ec2eb8c24c9defd9411156ed4d028&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
