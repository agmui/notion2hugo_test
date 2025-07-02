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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF23BYTC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmqmOGVuuxl2x7yVOTvCXovsYpOPlKFngIQNrm1G7VAAiEA36VjvVen0Bvis0tp9Oq2eCtiZvC1cc8w7oDj9mrfFrcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEWnQrys3ZlqZizICrcAwcFr6M2%2Fso6axZY4oaR9M6bkRvCbO1K%2FEIS1OeFimQyi9F8V2wSZ8fEBqUxfoX64ov%2FhsftXMZQTt%2BoyiafeVSziv9hFtmjulzKSj6D487HP96WCa89gm9uiNodozWj15DmTdkpF2%2BkPV4D%2FT7CTBIpHhuMSlp0uQsl84ErWKe0ylB3Ww4J4VV%2B76M%2BivfMbFJRmSv47NCqW1FhBFZ2JKDWcwDpk0cZJtCs2ympTRZADPSy%2Bjy0TPn3Pmxs5Z50zk2TYL4DmYiUDTXawP23V5fVyHS4miiaB7e3Oi0%2FI%2B1ZwHL2vSEsfXoM%2FIk37Kgo9vNXV%2FxTLCNQgULk2qHxYRUwT6u7TxRjNFueKMyf5HGtOVQ%2BCyDxuGnltv%2BZAR3bIU1XMWuUmHq4tafCIlmhzV5Up2LHybJ5akSrIFy9d5sJE5Ih8qlVoXsgs7zhi8b5Tq3TEmzZw%2F52s%2FXkKR%2FnyL2K5kuvTo0MCt93g3RoD%2FHcg5XlYdboM2ZYHcm%2BneeXUQUp2v8PvFmUNdR8%2BMjkX8gdWQDiMk0b16l4uZK9gMx3sJKAabn3cLVZSTPrSlgMQU5DNaotw1VgVaG198xFHvK%2BP8c7jdepDoDZtlbLPuyHV8S7UwxGi4efDW6uMLvnlMMGOqUB7d1ZrAOfrstJytEZXbrv1qoLdaameAYojxwBZixc9GGh8mG1%2BTddk%2B%2BtPdi8ZVV0K5KCih2Fmllyp70HXvGxbj9rQA2dKUJLxjdCELZqLv9KjuqBlKoFxcSLzLb1XOK69FrGqmfDBEvRdejysX1610VLbgaBLdgTaNSw8tTMaqw1AZGw9xLcXcuCl6%2BF0hv0r9BalvwbVlLQSycSb2xEgfLIYVaU&X-Amz-Signature=9406635075613862b3bdcf3abcc3c14ed4054e26fe64427ef85ec29c72ef4302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF23BYTC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmqmOGVuuxl2x7yVOTvCXovsYpOPlKFngIQNrm1G7VAAiEA36VjvVen0Bvis0tp9Oq2eCtiZvC1cc8w7oDj9mrfFrcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEWnQrys3ZlqZizICrcAwcFr6M2%2Fso6axZY4oaR9M6bkRvCbO1K%2FEIS1OeFimQyi9F8V2wSZ8fEBqUxfoX64ov%2FhsftXMZQTt%2BoyiafeVSziv9hFtmjulzKSj6D487HP96WCa89gm9uiNodozWj15DmTdkpF2%2BkPV4D%2FT7CTBIpHhuMSlp0uQsl84ErWKe0ylB3Ww4J4VV%2B76M%2BivfMbFJRmSv47NCqW1FhBFZ2JKDWcwDpk0cZJtCs2ympTRZADPSy%2Bjy0TPn3Pmxs5Z50zk2TYL4DmYiUDTXawP23V5fVyHS4miiaB7e3Oi0%2FI%2B1ZwHL2vSEsfXoM%2FIk37Kgo9vNXV%2FxTLCNQgULk2qHxYRUwT6u7TxRjNFueKMyf5HGtOVQ%2BCyDxuGnltv%2BZAR3bIU1XMWuUmHq4tafCIlmhzV5Up2LHybJ5akSrIFy9d5sJE5Ih8qlVoXsgs7zhi8b5Tq3TEmzZw%2F52s%2FXkKR%2FnyL2K5kuvTo0MCt93g3RoD%2FHcg5XlYdboM2ZYHcm%2BneeXUQUp2v8PvFmUNdR8%2BMjkX8gdWQDiMk0b16l4uZK9gMx3sJKAabn3cLVZSTPrSlgMQU5DNaotw1VgVaG198xFHvK%2BP8c7jdepDoDZtlbLPuyHV8S7UwxGi4efDW6uMLvnlMMGOqUB7d1ZrAOfrstJytEZXbrv1qoLdaameAYojxwBZixc9GGh8mG1%2BTddk%2B%2BtPdi8ZVV0K5KCih2Fmllyp70HXvGxbj9rQA2dKUJLxjdCELZqLv9KjuqBlKoFxcSLzLb1XOK69FrGqmfDBEvRdejysX1610VLbgaBLdgTaNSw8tTMaqw1AZGw9xLcXcuCl6%2BF0hv0r9BalvwbVlLQSycSb2xEgfLIYVaU&X-Amz-Signature=27f70b724010af5bf4208e993e2198aff71e719004bd98d6e2d016b430101ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF23BYTC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmqmOGVuuxl2x7yVOTvCXovsYpOPlKFngIQNrm1G7VAAiEA36VjvVen0Bvis0tp9Oq2eCtiZvC1cc8w7oDj9mrfFrcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEWnQrys3ZlqZizICrcAwcFr6M2%2Fso6axZY4oaR9M6bkRvCbO1K%2FEIS1OeFimQyi9F8V2wSZ8fEBqUxfoX64ov%2FhsftXMZQTt%2BoyiafeVSziv9hFtmjulzKSj6D487HP96WCa89gm9uiNodozWj15DmTdkpF2%2BkPV4D%2FT7CTBIpHhuMSlp0uQsl84ErWKe0ylB3Ww4J4VV%2B76M%2BivfMbFJRmSv47NCqW1FhBFZ2JKDWcwDpk0cZJtCs2ympTRZADPSy%2Bjy0TPn3Pmxs5Z50zk2TYL4DmYiUDTXawP23V5fVyHS4miiaB7e3Oi0%2FI%2B1ZwHL2vSEsfXoM%2FIk37Kgo9vNXV%2FxTLCNQgULk2qHxYRUwT6u7TxRjNFueKMyf5HGtOVQ%2BCyDxuGnltv%2BZAR3bIU1XMWuUmHq4tafCIlmhzV5Up2LHybJ5akSrIFy9d5sJE5Ih8qlVoXsgs7zhi8b5Tq3TEmzZw%2F52s%2FXkKR%2FnyL2K5kuvTo0MCt93g3RoD%2FHcg5XlYdboM2ZYHcm%2BneeXUQUp2v8PvFmUNdR8%2BMjkX8gdWQDiMk0b16l4uZK9gMx3sJKAabn3cLVZSTPrSlgMQU5DNaotw1VgVaG198xFHvK%2BP8c7jdepDoDZtlbLPuyHV8S7UwxGi4efDW6uMLvnlMMGOqUB7d1ZrAOfrstJytEZXbrv1qoLdaameAYojxwBZixc9GGh8mG1%2BTddk%2B%2BtPdi8ZVV0K5KCih2Fmllyp70HXvGxbj9rQA2dKUJLxjdCELZqLv9KjuqBlKoFxcSLzLb1XOK69FrGqmfDBEvRdejysX1610VLbgaBLdgTaNSw8tTMaqw1AZGw9xLcXcuCl6%2BF0hv0r9BalvwbVlLQSycSb2xEgfLIYVaU&X-Amz-Signature=2dbabeea6aca4581238a03bccc390b8e1cc4bed529fdaca3ce66c510405278a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
