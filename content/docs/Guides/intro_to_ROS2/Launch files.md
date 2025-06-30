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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRJEOSS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALQgXnu6b62OWL%2FX%2BNqAvCf%2BM1jMuuUaktaPVZrgX6XAiB8aJc1D5IyBgVvhQUre8BhD2Yu6%2FlNCzpr1tKbPXZ4IyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEx1%2BIlV1xyShmvTPKtwDhRKjHFTVmAgUglO9Wj9lhU55vZ6KPWwGT2tEOUD%2B6scLQSni85PQWEThMTW0prYV2hthc3IF7o7YqKlrwXRkilgpBYknM5ieDJoggsZDi0SlWip40q2D%2FkLfg0VBXKl16srQZjCSaEZK1dHBQDtsN0d6A5GqL%2BMaIB4MGXuZm7gik9HPBQUFL%2Bg84H7vca1IjNQ66wqgKAV%2BdRuDElTTxFEK6Iza61jreWeDjEsLUx6%2BmimD6EACcVafqMkBGT0MtYYHKpptNBvY4fnCBemJoAI30LNe6gi1pTCUSe9JrpCzBeOsGWr9ODSU4q69TRAEQoluvMRPq78bOPCkTWnlCXa3Z%2FxLGvncf%2FW9ZC%2F%2FDOb8T6UvJ016vyG%2B1xcMQwFZUq7EMgD3yghtpLgHYgSZg1bFGwt%2FmfRFvMOHMsIALICLs9aLLnZMUiCnC0isugXYFPDracbPGF8MoOp%2FPpPPSW3lpaEpfY7TxLCG1U0tKtX4Jmld95%2F5z8AOw6vJPpKfsG4AMAjn1AJ%2BoyP%2BEROKrF%2Bf7d4S0YCx3a%2BGpjqqrrxTjg6mdMHwbf80dbmTQif5XdvrS36PnT2rastek9GFyD%2BphdLwcYR5lEAyaCNWRuJqd3U8q9Ke6HqKpRMw0KKJwwY6pgG%2FcXXrb2h9dZHxwTwarfCecBgbSGTNf3ZH6wz3eOlYuuu%2BzXFbIStzT5QVFreeE3WeQFyCFrCVHCSvb%2F8Z6xoqSX%2FpWYFylEpRNAQmufFEcBVZlfrHKtTLktQlHtOaaIbKb0Ed9VVZB2IvsA%2FPYnBKZoEC5dpOejKBUJQG2t3menWbczV5xsrX4gfk6B0QYVk%2BIwx1BLOyCVgFva85sJgxqZcJuD8W&X-Amz-Signature=542aaa6f1552882bf2171154905a47e406b5feb8626a445315f2407e07d5957a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRJEOSS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALQgXnu6b62OWL%2FX%2BNqAvCf%2BM1jMuuUaktaPVZrgX6XAiB8aJc1D5IyBgVvhQUre8BhD2Yu6%2FlNCzpr1tKbPXZ4IyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEx1%2BIlV1xyShmvTPKtwDhRKjHFTVmAgUglO9Wj9lhU55vZ6KPWwGT2tEOUD%2B6scLQSni85PQWEThMTW0prYV2hthc3IF7o7YqKlrwXRkilgpBYknM5ieDJoggsZDi0SlWip40q2D%2FkLfg0VBXKl16srQZjCSaEZK1dHBQDtsN0d6A5GqL%2BMaIB4MGXuZm7gik9HPBQUFL%2Bg84H7vca1IjNQ66wqgKAV%2BdRuDElTTxFEK6Iza61jreWeDjEsLUx6%2BmimD6EACcVafqMkBGT0MtYYHKpptNBvY4fnCBemJoAI30LNe6gi1pTCUSe9JrpCzBeOsGWr9ODSU4q69TRAEQoluvMRPq78bOPCkTWnlCXa3Z%2FxLGvncf%2FW9ZC%2F%2FDOb8T6UvJ016vyG%2B1xcMQwFZUq7EMgD3yghtpLgHYgSZg1bFGwt%2FmfRFvMOHMsIALICLs9aLLnZMUiCnC0isugXYFPDracbPGF8MoOp%2FPpPPSW3lpaEpfY7TxLCG1U0tKtX4Jmld95%2F5z8AOw6vJPpKfsG4AMAjn1AJ%2BoyP%2BEROKrF%2Bf7d4S0YCx3a%2BGpjqqrrxTjg6mdMHwbf80dbmTQif5XdvrS36PnT2rastek9GFyD%2BphdLwcYR5lEAyaCNWRuJqd3U8q9Ke6HqKpRMw0KKJwwY6pgG%2FcXXrb2h9dZHxwTwarfCecBgbSGTNf3ZH6wz3eOlYuuu%2BzXFbIStzT5QVFreeE3WeQFyCFrCVHCSvb%2F8Z6xoqSX%2FpWYFylEpRNAQmufFEcBVZlfrHKtTLktQlHtOaaIbKb0Ed9VVZB2IvsA%2FPYnBKZoEC5dpOejKBUJQG2t3menWbczV5xsrX4gfk6B0QYVk%2BIwx1BLOyCVgFva85sJgxqZcJuD8W&X-Amz-Signature=ee919f383e215d57212be9942e62aa30b450d37a5902138400d3a758ed075636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRJEOSS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALQgXnu6b62OWL%2FX%2BNqAvCf%2BM1jMuuUaktaPVZrgX6XAiB8aJc1D5IyBgVvhQUre8BhD2Yu6%2FlNCzpr1tKbPXZ4IyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEx1%2BIlV1xyShmvTPKtwDhRKjHFTVmAgUglO9Wj9lhU55vZ6KPWwGT2tEOUD%2B6scLQSni85PQWEThMTW0prYV2hthc3IF7o7YqKlrwXRkilgpBYknM5ieDJoggsZDi0SlWip40q2D%2FkLfg0VBXKl16srQZjCSaEZK1dHBQDtsN0d6A5GqL%2BMaIB4MGXuZm7gik9HPBQUFL%2Bg84H7vca1IjNQ66wqgKAV%2BdRuDElTTxFEK6Iza61jreWeDjEsLUx6%2BmimD6EACcVafqMkBGT0MtYYHKpptNBvY4fnCBemJoAI30LNe6gi1pTCUSe9JrpCzBeOsGWr9ODSU4q69TRAEQoluvMRPq78bOPCkTWnlCXa3Z%2FxLGvncf%2FW9ZC%2F%2FDOb8T6UvJ016vyG%2B1xcMQwFZUq7EMgD3yghtpLgHYgSZg1bFGwt%2FmfRFvMOHMsIALICLs9aLLnZMUiCnC0isugXYFPDracbPGF8MoOp%2FPpPPSW3lpaEpfY7TxLCG1U0tKtX4Jmld95%2F5z8AOw6vJPpKfsG4AMAjn1AJ%2BoyP%2BEROKrF%2Bf7d4S0YCx3a%2BGpjqqrrxTjg6mdMHwbf80dbmTQif5XdvrS36PnT2rastek9GFyD%2BphdLwcYR5lEAyaCNWRuJqd3U8q9Ke6HqKpRMw0KKJwwY6pgG%2FcXXrb2h9dZHxwTwarfCecBgbSGTNf3ZH6wz3eOlYuuu%2BzXFbIStzT5QVFreeE3WeQFyCFrCVHCSvb%2F8Z6xoqSX%2FpWYFylEpRNAQmufFEcBVZlfrHKtTLktQlHtOaaIbKb0Ed9VVZB2IvsA%2FPYnBKZoEC5dpOejKBUJQG2t3menWbczV5xsrX4gfk6B0QYVk%2BIwx1BLOyCVgFva85sJgxqZcJuD8W&X-Amz-Signature=88b29988a943c8d6506886fdac90114b7fa74a0f89f4687ec97a910c2a21356e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
