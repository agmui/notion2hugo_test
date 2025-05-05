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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSIYEWY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf3ivzfBl2jQnBMGTW8Zzy%2BENGWLRy%2F2hMaB2ohgmpCAiEA9TNtrGJJaUrO38MD1dZtON3mW4S2Dc%2FHBSeoS1vwpVcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGACHGiPZX7v4oGIZircA6Sh6jYtWtsmUpZZRa4mz3BSnjXEC9jSUseiWwA8hmVBXmGJKXu81kn1qMXzk1zhoGvua8QIDPIATzz0AdH64f2tctjW7cepGUX19V%2B82BxQvcY55UVE42%2FsmcRoopg4871R6nDX%2BJjqrXYH62wZ29hL1C3%2FsAgJcPLxzBWBqThcGXTsmSaBA%2BMnpXVKfVJvH1XdILD9RLSokW6BVa%2F769aIuE%2B8eDZNWKhu3mS3gs79drF8R2KZYTPOT1FmaYdyXPLPRxHK%2FAEwh1egyPybR6%2FvLlRLqkDJCdkeKg%2Bju1WvQncF5dynJZYbBYBS3uDhq0lI%2F5I9VoEk1DL4SnCkkiSBNgVyHEvIgnZq0D0szH6YW2oMMDksC%2BsaH1d3bZ3d5xALVJ9gdtuRONdsDdKqofX9EWWcFjPruO69gOiGyb%2BhYBTy5eUoATkKBsVLBr%2BT1eBsBanAQhljTtc0yeUi11NQ7TxI7H1oiwHTsvoU30P2zKTTGH92zlZGVN%2B7s7CWXDf%2B3s2I1HRKjQsIxGpg9o3EvFt7cJXMpmWBEc702VG7FherQAWnxcCtZ0PGemGgdUHtq2EXDQrL4jKgs5ZXX8a6L82uosiTobgDpg48DkUXX7ZBGLF3VybbIxJcMKCx48AGOqUBO5ZBfXfUJQNY5%2Bb7%2Fn9%2FXLmS7ydUq7dyOzEPMy05LbULDQpretKzCrWudUAMxHjxXbkw6HX%2F3%2F8JJfp1G2N04ZGsKnMOfqVpQ8sQ6ibnRktbn28w1HTfQlFp088BkMxzMRz1DZuBUv%2BKT3zjmA%2F7HEBBDnDwPLsAXCLJ60DjTZAXuCsqAVvu5HFi%2Fz8lzfb2ku%2BN7SZRk7tkL2Vlhcv3vTvnAT0R&X-Amz-Signature=90c733133248751abfc911a4ab903662a5f75ca2ba28da21448800792b78d5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSIYEWY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf3ivzfBl2jQnBMGTW8Zzy%2BENGWLRy%2F2hMaB2ohgmpCAiEA9TNtrGJJaUrO38MD1dZtON3mW4S2Dc%2FHBSeoS1vwpVcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGACHGiPZX7v4oGIZircA6Sh6jYtWtsmUpZZRa4mz3BSnjXEC9jSUseiWwA8hmVBXmGJKXu81kn1qMXzk1zhoGvua8QIDPIATzz0AdH64f2tctjW7cepGUX19V%2B82BxQvcY55UVE42%2FsmcRoopg4871R6nDX%2BJjqrXYH62wZ29hL1C3%2FsAgJcPLxzBWBqThcGXTsmSaBA%2BMnpXVKfVJvH1XdILD9RLSokW6BVa%2F769aIuE%2B8eDZNWKhu3mS3gs79drF8R2KZYTPOT1FmaYdyXPLPRxHK%2FAEwh1egyPybR6%2FvLlRLqkDJCdkeKg%2Bju1WvQncF5dynJZYbBYBS3uDhq0lI%2F5I9VoEk1DL4SnCkkiSBNgVyHEvIgnZq0D0szH6YW2oMMDksC%2BsaH1d3bZ3d5xALVJ9gdtuRONdsDdKqofX9EWWcFjPruO69gOiGyb%2BhYBTy5eUoATkKBsVLBr%2BT1eBsBanAQhljTtc0yeUi11NQ7TxI7H1oiwHTsvoU30P2zKTTGH92zlZGVN%2B7s7CWXDf%2B3s2I1HRKjQsIxGpg9o3EvFt7cJXMpmWBEc702VG7FherQAWnxcCtZ0PGemGgdUHtq2EXDQrL4jKgs5ZXX8a6L82uosiTobgDpg48DkUXX7ZBGLF3VybbIxJcMKCx48AGOqUBO5ZBfXfUJQNY5%2Bb7%2Fn9%2FXLmS7ydUq7dyOzEPMy05LbULDQpretKzCrWudUAMxHjxXbkw6HX%2F3%2F8JJfp1G2N04ZGsKnMOfqVpQ8sQ6ibnRktbn28w1HTfQlFp088BkMxzMRz1DZuBUv%2BKT3zjmA%2F7HEBBDnDwPLsAXCLJ60DjTZAXuCsqAVvu5HFi%2Fz8lzfb2ku%2BN7SZRk7tkL2Vlhcv3vTvnAT0R&X-Amz-Signature=33ba1d945b008c5d14a184928969bd28dc2c4086970d7509e14bc4b52acfb064&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSIYEWY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf3ivzfBl2jQnBMGTW8Zzy%2BENGWLRy%2F2hMaB2ohgmpCAiEA9TNtrGJJaUrO38MD1dZtON3mW4S2Dc%2FHBSeoS1vwpVcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGACHGiPZX7v4oGIZircA6Sh6jYtWtsmUpZZRa4mz3BSnjXEC9jSUseiWwA8hmVBXmGJKXu81kn1qMXzk1zhoGvua8QIDPIATzz0AdH64f2tctjW7cepGUX19V%2B82BxQvcY55UVE42%2FsmcRoopg4871R6nDX%2BJjqrXYH62wZ29hL1C3%2FsAgJcPLxzBWBqThcGXTsmSaBA%2BMnpXVKfVJvH1XdILD9RLSokW6BVa%2F769aIuE%2B8eDZNWKhu3mS3gs79drF8R2KZYTPOT1FmaYdyXPLPRxHK%2FAEwh1egyPybR6%2FvLlRLqkDJCdkeKg%2Bju1WvQncF5dynJZYbBYBS3uDhq0lI%2F5I9VoEk1DL4SnCkkiSBNgVyHEvIgnZq0D0szH6YW2oMMDksC%2BsaH1d3bZ3d5xALVJ9gdtuRONdsDdKqofX9EWWcFjPruO69gOiGyb%2BhYBTy5eUoATkKBsVLBr%2BT1eBsBanAQhljTtc0yeUi11NQ7TxI7H1oiwHTsvoU30P2zKTTGH92zlZGVN%2B7s7CWXDf%2B3s2I1HRKjQsIxGpg9o3EvFt7cJXMpmWBEc702VG7FherQAWnxcCtZ0PGemGgdUHtq2EXDQrL4jKgs5ZXX8a6L82uosiTobgDpg48DkUXX7ZBGLF3VybbIxJcMKCx48AGOqUBO5ZBfXfUJQNY5%2Bb7%2Fn9%2FXLmS7ydUq7dyOzEPMy05LbULDQpretKzCrWudUAMxHjxXbkw6HX%2F3%2F8JJfp1G2N04ZGsKnMOfqVpQ8sQ6ibnRktbn28w1HTfQlFp088BkMxzMRz1DZuBUv%2BKT3zjmA%2F7HEBBDnDwPLsAXCLJ60DjTZAXuCsqAVvu5HFi%2Fz8lzfb2ku%2BN7SZRk7tkL2Vlhcv3vTvnAT0R&X-Amz-Signature=29ae9ca5dbe1586764110ce1770d96e6db638214bec88c05c4000afe8ef9b92f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
