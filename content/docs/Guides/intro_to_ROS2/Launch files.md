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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3TLWGM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDopDiqAxk895G56a6o1NWTMTqf%2FBFeTrHC8Vw5ELz0AiAV0e8Mqcb4beAglQZ5ZjmKgMWXikBFjGJZlwp2%2BwFL0yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6SM9mys16EuLHsgsKtwD%2FIygM%2BLzCqH1a5bip4Qk3yAjz5uGGF99bhnJ1YCkZ4W1sp00Uz%2BezdPZagLWIIaiiPg6A3roYoqmVa4MrYcIr8thg40rZoq2ilIw7NzeCEvsUhZfdYQLtNCMUUppVmy3J0aDNkiNmAMxDUbO1g7rxReU7IKVB5o3EZAwqavyD0%2BPSP50Sfkf5ySxNrTAZjpCdhtXzv3pZe6ONRK04jNoUx1CLAbMknaAQt%2FYkzhUJZv1Wqght%2BUC1IR65SSEkOcuaKkRYFMwKjbjxvXbmYvotwfgsG%2FLPwYe2pU6hl8obQs29PnY0FSexluUMElKNAMOR0qcXZoyKz2OyMweqCfo6kDlL6aVvCnITYpxgCLssHac2lhFrW4Oj%2BPDPpLggpCf718fBBJQNz%2BQYnzlUb%2FKbySzmbb2ndzkDIsHYmSGADPDhLqlEq%2BGq1eVEq1hqKiJmGiapn6kU4tS2c7mbGP%2FXLejh6o%2BW7ENCw72ZrYn1NCipu8IAGjsjwFGCywWyoYx9Mm8OLlXohhnY0wzB3FZKz7Sny5JpZ%2BWtr%2F63sQVvAw7pfG5KZ%2BDLY8%2B6tW%2BOPY%2FsQFjdnCJTMb0yVyHD5qD2U7SwWlFcH5EJzSBEevgyeL2VjarlODItXfplQMw4pWcwgY6pgGCmWrY5AWYzXSp54GKFc0KHWqwyFKQZ0ytXuLzwNNYnyTO8rQ3BCz3l08nSnlmATTiPKmb14oY%2BkfYm5jpHmx4iXiZk2yTbNFDJo%2Bc4ePOp2dD8Hbp0brmKBoDnPOm7Bm1kKRHVsy%2Bs8XAzfU%2FpRjY9q49uZEcCwf1VErGvrX%2FweUUDt89JXg6uguN4PufbQKOQfszahVeoX6TvN%2F0SIrZm32KgYq2&X-Amz-Signature=ee91930208addcfc89d46d69cb9a3bcb60e54f603e187e372d22e0744fbb3fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3TLWGM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDopDiqAxk895G56a6o1NWTMTqf%2FBFeTrHC8Vw5ELz0AiAV0e8Mqcb4beAglQZ5ZjmKgMWXikBFjGJZlwp2%2BwFL0yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6SM9mys16EuLHsgsKtwD%2FIygM%2BLzCqH1a5bip4Qk3yAjz5uGGF99bhnJ1YCkZ4W1sp00Uz%2BezdPZagLWIIaiiPg6A3roYoqmVa4MrYcIr8thg40rZoq2ilIw7NzeCEvsUhZfdYQLtNCMUUppVmy3J0aDNkiNmAMxDUbO1g7rxReU7IKVB5o3EZAwqavyD0%2BPSP50Sfkf5ySxNrTAZjpCdhtXzv3pZe6ONRK04jNoUx1CLAbMknaAQt%2FYkzhUJZv1Wqght%2BUC1IR65SSEkOcuaKkRYFMwKjbjxvXbmYvotwfgsG%2FLPwYe2pU6hl8obQs29PnY0FSexluUMElKNAMOR0qcXZoyKz2OyMweqCfo6kDlL6aVvCnITYpxgCLssHac2lhFrW4Oj%2BPDPpLggpCf718fBBJQNz%2BQYnzlUb%2FKbySzmbb2ndzkDIsHYmSGADPDhLqlEq%2BGq1eVEq1hqKiJmGiapn6kU4tS2c7mbGP%2FXLejh6o%2BW7ENCw72ZrYn1NCipu8IAGjsjwFGCywWyoYx9Mm8OLlXohhnY0wzB3FZKz7Sny5JpZ%2BWtr%2F63sQVvAw7pfG5KZ%2BDLY8%2B6tW%2BOPY%2FsQFjdnCJTMb0yVyHD5qD2U7SwWlFcH5EJzSBEevgyeL2VjarlODItXfplQMw4pWcwgY6pgGCmWrY5AWYzXSp54GKFc0KHWqwyFKQZ0ytXuLzwNNYnyTO8rQ3BCz3l08nSnlmATTiPKmb14oY%2BkfYm5jpHmx4iXiZk2yTbNFDJo%2Bc4ePOp2dD8Hbp0brmKBoDnPOm7Bm1kKRHVsy%2Bs8XAzfU%2FpRjY9q49uZEcCwf1VErGvrX%2FweUUDt89JXg6uguN4PufbQKOQfszahVeoX6TvN%2F0SIrZm32KgYq2&X-Amz-Signature=0534de914c00d2adece3417054c4d7849f9fc85cc5059e8750e7f6244f4ad82f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3TLWGM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDopDiqAxk895G56a6o1NWTMTqf%2FBFeTrHC8Vw5ELz0AiAV0e8Mqcb4beAglQZ5ZjmKgMWXikBFjGJZlwp2%2BwFL0yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6SM9mys16EuLHsgsKtwD%2FIygM%2BLzCqH1a5bip4Qk3yAjz5uGGF99bhnJ1YCkZ4W1sp00Uz%2BezdPZagLWIIaiiPg6A3roYoqmVa4MrYcIr8thg40rZoq2ilIw7NzeCEvsUhZfdYQLtNCMUUppVmy3J0aDNkiNmAMxDUbO1g7rxReU7IKVB5o3EZAwqavyD0%2BPSP50Sfkf5ySxNrTAZjpCdhtXzv3pZe6ONRK04jNoUx1CLAbMknaAQt%2FYkzhUJZv1Wqght%2BUC1IR65SSEkOcuaKkRYFMwKjbjxvXbmYvotwfgsG%2FLPwYe2pU6hl8obQs29PnY0FSexluUMElKNAMOR0qcXZoyKz2OyMweqCfo6kDlL6aVvCnITYpxgCLssHac2lhFrW4Oj%2BPDPpLggpCf718fBBJQNz%2BQYnzlUb%2FKbySzmbb2ndzkDIsHYmSGADPDhLqlEq%2BGq1eVEq1hqKiJmGiapn6kU4tS2c7mbGP%2FXLejh6o%2BW7ENCw72ZrYn1NCipu8IAGjsjwFGCywWyoYx9Mm8OLlXohhnY0wzB3FZKz7Sny5JpZ%2BWtr%2F63sQVvAw7pfG5KZ%2BDLY8%2B6tW%2BOPY%2FsQFjdnCJTMb0yVyHD5qD2U7SwWlFcH5EJzSBEevgyeL2VjarlODItXfplQMw4pWcwgY6pgGCmWrY5AWYzXSp54GKFc0KHWqwyFKQZ0ytXuLzwNNYnyTO8rQ3BCz3l08nSnlmATTiPKmb14oY%2BkfYm5jpHmx4iXiZk2yTbNFDJo%2Bc4ePOp2dD8Hbp0brmKBoDnPOm7Bm1kKRHVsy%2Bs8XAzfU%2FpRjY9q49uZEcCwf1VErGvrX%2FweUUDt89JXg6uguN4PufbQKOQfszahVeoX6TvN%2F0SIrZm32KgYq2&X-Amz-Signature=3c68ef975d179209d7d8990d1aaf73d00c833a80248d73be5ab1e73d02fa20c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
