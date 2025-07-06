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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=468b2a31c5614ed9907c9e0ead26d4b89c7c7fdc43e8d8665d61a5c87d4408fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=a23d5dfb9adedc41d6cb984d9bd09040978016df8d530e2ee7cde439a23db59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=8b53b5b1fadb69c4a2239f63082341280dfca4fd6135e5bbb4cff4b3d2b7f0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
