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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVM27AY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgHlOVgJR5V7Oea5iFaeFSSLIqeTAy2NITYq0Gj15r6QIhAMhXTx9wWH8A4rnDMEiexev%2B6P2f9aDFuheRv2SZaQbqKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDa2DxOmGqrQ4XCGMq3APwTImiieXxcuro9ejQx%2Fdy4Pctk39pMjXeU0mUiOvBUCxeHJryrTyY5rl%2B1LBj5mAx746fiqvuFMao7WjAdF5dqPDrZLncCn23GY1cKz9dK9f4lxs9XS3Ma1bxEfFFuVQlk9HdKSb8QMZixPze92%2BNOdeTpKOXls6Gkz21fRE7SV6h4CV%2BtxCuCth0%2F5FetExFo319Jrn%2Fd1CrrLKjthrPxKakGCi15LMZh2zx%2BOPuVBu4GS6tR%2BtTVUP0B9V2UN%2FX9dGjDz6OuUxZQCy9pHb0q1bNNKafwdMDpleBFG6csVcHWYGInBZKDznb%2Fxf8Ebyhxc2Ito5u4msrTq8CH8ct%2Bk6sU%2BciK%2Bxg7OzTxOWPVc%2BNbR4OZ4zHsqFc%2FLEeBskORL3yCH4jTvGO0bkzWv%2BuvSiEqjf%2BdXKsyLAmlcm4K6i3HO4ltRv4ea1TXZiYbclbPZ58JotrjQYT4ReCgs4maM%2BPDGVNLBzMTwHuDt93s2AxXLfjYpb%2FtJvsiSFXJwCqlyD8SKUqrSZI5MwXeVLKRok30gMBEgsb1vh3EJPOsG5%2FoHvSfDBZuDZ6QEsd55MEIM8b%2BJxj%2FsF6ooky%2B7YetdAXNprrvXBFLrqhHewlY%2BtN%2BQNZZnFI%2FTF3XTDhnpLDBjqkASm1C7d%2FIPUu3kj35DxBb3KyAo8J6nls7WR%2Fqk1MQ6dzAahGFFeqzb9br2OEdT%2B5j6ripMx406TK4wPBuUxnQpi4i6OxgUi495u22aYS3A7WOCL5lqb6QOPN1FLV36cSM10D5tfc2Jbe%2BdvNxNaPfvqmJ5DsMTYu80WLK%2FeI1K3wrwNErvPBlShk3brGgDd65wcV083P%2BqiA5yqITfKRlg6H69Uv&X-Amz-Signature=dbc82512d7e5e777fd784a4d0e3e441d50eb0d720a8b5d23fe2deddc43f09501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVM27AY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgHlOVgJR5V7Oea5iFaeFSSLIqeTAy2NITYq0Gj15r6QIhAMhXTx9wWH8A4rnDMEiexev%2B6P2f9aDFuheRv2SZaQbqKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDa2DxOmGqrQ4XCGMq3APwTImiieXxcuro9ejQx%2Fdy4Pctk39pMjXeU0mUiOvBUCxeHJryrTyY5rl%2B1LBj5mAx746fiqvuFMao7WjAdF5dqPDrZLncCn23GY1cKz9dK9f4lxs9XS3Ma1bxEfFFuVQlk9HdKSb8QMZixPze92%2BNOdeTpKOXls6Gkz21fRE7SV6h4CV%2BtxCuCth0%2F5FetExFo319Jrn%2Fd1CrrLKjthrPxKakGCi15LMZh2zx%2BOPuVBu4GS6tR%2BtTVUP0B9V2UN%2FX9dGjDz6OuUxZQCy9pHb0q1bNNKafwdMDpleBFG6csVcHWYGInBZKDznb%2Fxf8Ebyhxc2Ito5u4msrTq8CH8ct%2Bk6sU%2BciK%2Bxg7OzTxOWPVc%2BNbR4OZ4zHsqFc%2FLEeBskORL3yCH4jTvGO0bkzWv%2BuvSiEqjf%2BdXKsyLAmlcm4K6i3HO4ltRv4ea1TXZiYbclbPZ58JotrjQYT4ReCgs4maM%2BPDGVNLBzMTwHuDt93s2AxXLfjYpb%2FtJvsiSFXJwCqlyD8SKUqrSZI5MwXeVLKRok30gMBEgsb1vh3EJPOsG5%2FoHvSfDBZuDZ6QEsd55MEIM8b%2BJxj%2FsF6ooky%2B7YetdAXNprrvXBFLrqhHewlY%2BtN%2BQNZZnFI%2FTF3XTDhnpLDBjqkASm1C7d%2FIPUu3kj35DxBb3KyAo8J6nls7WR%2Fqk1MQ6dzAahGFFeqzb9br2OEdT%2B5j6ripMx406TK4wPBuUxnQpi4i6OxgUi495u22aYS3A7WOCL5lqb6QOPN1FLV36cSM10D5tfc2Jbe%2BdvNxNaPfvqmJ5DsMTYu80WLK%2FeI1K3wrwNErvPBlShk3brGgDd65wcV083P%2BqiA5yqITfKRlg6H69Uv&X-Amz-Signature=204c7af4dfa387ebdc337776f99cf96dc7346b6542b0079ec5e5cd7eb998efcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVM27AY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgHlOVgJR5V7Oea5iFaeFSSLIqeTAy2NITYq0Gj15r6QIhAMhXTx9wWH8A4rnDMEiexev%2B6P2f9aDFuheRv2SZaQbqKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDa2DxOmGqrQ4XCGMq3APwTImiieXxcuro9ejQx%2Fdy4Pctk39pMjXeU0mUiOvBUCxeHJryrTyY5rl%2B1LBj5mAx746fiqvuFMao7WjAdF5dqPDrZLncCn23GY1cKz9dK9f4lxs9XS3Ma1bxEfFFuVQlk9HdKSb8QMZixPze92%2BNOdeTpKOXls6Gkz21fRE7SV6h4CV%2BtxCuCth0%2F5FetExFo319Jrn%2Fd1CrrLKjthrPxKakGCi15LMZh2zx%2BOPuVBu4GS6tR%2BtTVUP0B9V2UN%2FX9dGjDz6OuUxZQCy9pHb0q1bNNKafwdMDpleBFG6csVcHWYGInBZKDznb%2Fxf8Ebyhxc2Ito5u4msrTq8CH8ct%2Bk6sU%2BciK%2Bxg7OzTxOWPVc%2BNbR4OZ4zHsqFc%2FLEeBskORL3yCH4jTvGO0bkzWv%2BuvSiEqjf%2BdXKsyLAmlcm4K6i3HO4ltRv4ea1TXZiYbclbPZ58JotrjQYT4ReCgs4maM%2BPDGVNLBzMTwHuDt93s2AxXLfjYpb%2FtJvsiSFXJwCqlyD8SKUqrSZI5MwXeVLKRok30gMBEgsb1vh3EJPOsG5%2FoHvSfDBZuDZ6QEsd55MEIM8b%2BJxj%2FsF6ooky%2B7YetdAXNprrvXBFLrqhHewlY%2BtN%2BQNZZnFI%2FTF3XTDhnpLDBjqkASm1C7d%2FIPUu3kj35DxBb3KyAo8J6nls7WR%2Fqk1MQ6dzAahGFFeqzb9br2OEdT%2B5j6ripMx406TK4wPBuUxnQpi4i6OxgUi495u22aYS3A7WOCL5lqb6QOPN1FLV36cSM10D5tfc2Jbe%2BdvNxNaPfvqmJ5DsMTYu80WLK%2FeI1K3wrwNErvPBlShk3brGgDd65wcV083P%2BqiA5yqITfKRlg6H69Uv&X-Amz-Signature=7d0b143993b41710020eb4dd633573bf461b31257e9e20f68b93f618ef5de6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
