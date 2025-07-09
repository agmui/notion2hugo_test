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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4X5H3C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLIrKtMDsQ7BNEeeInPZwC3CBaNVhUwJt9eviSqFd79AiEAuAzE5hAVQ7jtifbqvBBLRAlItvQcl2RdivHYL38sHmUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgwMV7uqlJoAjh7nyrcAwP1wc11px1sklXgL%2FRzTVJPpqqkydl5X%2FmiGnzUnVrxbDkeYGjwrv30gXz8aLbdv7luSP9R3ngTa1MowW8rLHTiABL029W0byMCPpAQNoQ%2B6Fonf0A26qcG1pDOjCrOBykoRuCLvLChUKMtiw4PS%2FiWRjzeCvRHEZ4OE8pms8voibDBx23MKvDLIFbEAJ4FE7HBHwBRTkCVx1sx1cziRyWWqcz%2FVfTw0S8jFVOVWCvx3R0bAbqYd4BDR3JhoBUTgRCro6HTWecw83kd%2BYQEp1Q13ij%2BQRmPfjguCASDJ0iwOYooUvG3DjUn2JtNBPk7Z9dE%2FaCfA24o%2FJ8DV9ewY5D62RmeXS7jfZIvPYaQMRj2kWybKUJp2LcU6lAXr7qPXIvcgrm30r%2B9ckBOjZdAPQOc2%2BF3LZHS89jr82AyM%2FR1hsftGVZZMB2yVENPoQQMnx%2FdeSb4gOY5z5jq5DAFxYtrsP1x6266p8DVk0BYvc70FOB1ebriR%2FzVc%2F%2Bp2gBz0b3HGvNXE5G6BRn10rhjxXlXYJs20axx3DtgSwyOaabUaAlBEhx6Xxf7NuQFM2R4Jii5KVeOHg%2FRbFgWvL9FrOBwKJ%2BwtmqH%2BnOYCe66Wm2oQyzpu6Fbv80XvGNYMJ%2FqucMGOqUB1xmZ4Oj01rr0%2BdIBRqHYAgZ3tDz7I3Sz4mqwUuk17393hCnmFBaTo5pCk%2Fj09vh7jEvLNcQyCBbXr3B9QYQJyMT%2BP79MovpbDxBo1sf8DYXMsTkxzyFApPmaDqr5wgPdtmgh45IEeDcaNlR824RiMoGDaR1LS6WeRJ53GtKQhHJA9Z4B5cCZksUf41vQ4AdF7xbXhMBeHbVpCAwcVxAw27sCsy2h&X-Amz-Signature=de1b5d9995a24fd9ddf3e822b25130885d6cbaa06f7ad40552672b536a7b5f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4X5H3C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLIrKtMDsQ7BNEeeInPZwC3CBaNVhUwJt9eviSqFd79AiEAuAzE5hAVQ7jtifbqvBBLRAlItvQcl2RdivHYL38sHmUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgwMV7uqlJoAjh7nyrcAwP1wc11px1sklXgL%2FRzTVJPpqqkydl5X%2FmiGnzUnVrxbDkeYGjwrv30gXz8aLbdv7luSP9R3ngTa1MowW8rLHTiABL029W0byMCPpAQNoQ%2B6Fonf0A26qcG1pDOjCrOBykoRuCLvLChUKMtiw4PS%2FiWRjzeCvRHEZ4OE8pms8voibDBx23MKvDLIFbEAJ4FE7HBHwBRTkCVx1sx1cziRyWWqcz%2FVfTw0S8jFVOVWCvx3R0bAbqYd4BDR3JhoBUTgRCro6HTWecw83kd%2BYQEp1Q13ij%2BQRmPfjguCASDJ0iwOYooUvG3DjUn2JtNBPk7Z9dE%2FaCfA24o%2FJ8DV9ewY5D62RmeXS7jfZIvPYaQMRj2kWybKUJp2LcU6lAXr7qPXIvcgrm30r%2B9ckBOjZdAPQOc2%2BF3LZHS89jr82AyM%2FR1hsftGVZZMB2yVENPoQQMnx%2FdeSb4gOY5z5jq5DAFxYtrsP1x6266p8DVk0BYvc70FOB1ebriR%2FzVc%2F%2Bp2gBz0b3HGvNXE5G6BRn10rhjxXlXYJs20axx3DtgSwyOaabUaAlBEhx6Xxf7NuQFM2R4Jii5KVeOHg%2FRbFgWvL9FrOBwKJ%2BwtmqH%2BnOYCe66Wm2oQyzpu6Fbv80XvGNYMJ%2FqucMGOqUB1xmZ4Oj01rr0%2BdIBRqHYAgZ3tDz7I3Sz4mqwUuk17393hCnmFBaTo5pCk%2Fj09vh7jEvLNcQyCBbXr3B9QYQJyMT%2BP79MovpbDxBo1sf8DYXMsTkxzyFApPmaDqr5wgPdtmgh45IEeDcaNlR824RiMoGDaR1LS6WeRJ53GtKQhHJA9Z4B5cCZksUf41vQ4AdF7xbXhMBeHbVpCAwcVxAw27sCsy2h&X-Amz-Signature=894d53757a6864c806043375b67abe6fec567b2cdf18d2ebab9b1512d686515e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4X5H3C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLIrKtMDsQ7BNEeeInPZwC3CBaNVhUwJt9eviSqFd79AiEAuAzE5hAVQ7jtifbqvBBLRAlItvQcl2RdivHYL38sHmUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgwMV7uqlJoAjh7nyrcAwP1wc11px1sklXgL%2FRzTVJPpqqkydl5X%2FmiGnzUnVrxbDkeYGjwrv30gXz8aLbdv7luSP9R3ngTa1MowW8rLHTiABL029W0byMCPpAQNoQ%2B6Fonf0A26qcG1pDOjCrOBykoRuCLvLChUKMtiw4PS%2FiWRjzeCvRHEZ4OE8pms8voibDBx23MKvDLIFbEAJ4FE7HBHwBRTkCVx1sx1cziRyWWqcz%2FVfTw0S8jFVOVWCvx3R0bAbqYd4BDR3JhoBUTgRCro6HTWecw83kd%2BYQEp1Q13ij%2BQRmPfjguCASDJ0iwOYooUvG3DjUn2JtNBPk7Z9dE%2FaCfA24o%2FJ8DV9ewY5D62RmeXS7jfZIvPYaQMRj2kWybKUJp2LcU6lAXr7qPXIvcgrm30r%2B9ckBOjZdAPQOc2%2BF3LZHS89jr82AyM%2FR1hsftGVZZMB2yVENPoQQMnx%2FdeSb4gOY5z5jq5DAFxYtrsP1x6266p8DVk0BYvc70FOB1ebriR%2FzVc%2F%2Bp2gBz0b3HGvNXE5G6BRn10rhjxXlXYJs20axx3DtgSwyOaabUaAlBEhx6Xxf7NuQFM2R4Jii5KVeOHg%2FRbFgWvL9FrOBwKJ%2BwtmqH%2BnOYCe66Wm2oQyzpu6Fbv80XvGNYMJ%2FqucMGOqUB1xmZ4Oj01rr0%2BdIBRqHYAgZ3tDz7I3Sz4mqwUuk17393hCnmFBaTo5pCk%2Fj09vh7jEvLNcQyCBbXr3B9QYQJyMT%2BP79MovpbDxBo1sf8DYXMsTkxzyFApPmaDqr5wgPdtmgh45IEeDcaNlR824RiMoGDaR1LS6WeRJ53GtKQhHJA9Z4B5cCZksUf41vQ4AdF7xbXhMBeHbVpCAwcVxAw27sCsy2h&X-Amz-Signature=a5386e35be9fddc741d1ab883c20c74e6d75ae8722ad563ce9078d4c48f021b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
