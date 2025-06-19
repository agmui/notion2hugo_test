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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VU4IE5L%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxIX4Ibf0HlLbIvmbxGFdl7xl7Os4Hgbm2bD3oKMZpUgIgK54fv8cNdyy%2Fe8%2FvGrc8EtGtqKLIcoK6hnVDP0AsB2gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN%2BrUMOQGQxiofdSCrcA%2BDl8avlkUQY7%2BWCBqceM1u8Dmq8MR%2F71v8RSK6oBACljhAzYIsS88cK7Pmo1cxLzNvfPabhCle5LzuJS59Kq2dvu5NtprzUCS%2BDQ3UtMdqhQfZKgqkmZsNli0BgsMsYn%2FI%2FmKwAbH9HNaCZ%2Fx0YTQ4c1hKRW%2BPlW9Q%2FKR09gtsqwT2UBl%2FQ2zRJg3rK5qAdQTs4q72G466f4mdWvae2nSJt9tBOmaAvZZXo9TzYme17Z3ZGXYG9tDnnSLUJZFAty5XeQIAzEbtwmaM%2F7NpqaDRRsjOXGHR%2BUQkbW5kHpUnm%2BS%2F266fJkHdWjn76p6KgyipU82cHRaH2cZeTN6mqm1w2KTsH%2FFCVWtrLL1JX8rX4I0Bolnwwcw38r3uhkthHEhGXCRiQiwZenPHDGyf1Z%2BPe2zfNO9d7sdLGaFuxuApeLDy6C%2B%2BqxWFI865gyJD%2BbNgFU4yoDbJmxjhwce6sCQkRMZMesQ2TfNHJgX%2F6dSnck7n0FOxBaizNpMRIzhF%2FxnVsDrkYgiuibAXaxcpt%2FfzRRebTWqAxCu9Jq%2BZmim51GSraxlAliMZQPalTGgG0L2zQej40KmKgmxj0X6MHQk7eF4tFCHWb%2FO6tCCyUN1FDsLEVqqlmEKmC3X%2FGMI%2Bp0MIGOqUBQO5hHElcfliV28NM7bdmy9ftJ%2FZKa1FMO940Mo%2FHwiAxbF%2Fu3RabjNa8No8hQbNGE99fPPfpGDjZBnalXZ%2BJey%2FAVWrT5FJ52Nx3Z2mGl2RdpbOKjAz7vtrre4AmDNfA9Al%2F0CyF4ULNqZybMSDVxduggG55NkK7RamtfaTshDMcOm1XRBVh6cNQzaaHPsYlPDhviRJQ6Ln%2FkHBMH9uMKWRvO5vG&X-Amz-Signature=e10ff61055a1304888a9afbb3974666a8b5fceebf44f1d51e7dcbc86923c127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VU4IE5L%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxIX4Ibf0HlLbIvmbxGFdl7xl7Os4Hgbm2bD3oKMZpUgIgK54fv8cNdyy%2Fe8%2FvGrc8EtGtqKLIcoK6hnVDP0AsB2gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN%2BrUMOQGQxiofdSCrcA%2BDl8avlkUQY7%2BWCBqceM1u8Dmq8MR%2F71v8RSK6oBACljhAzYIsS88cK7Pmo1cxLzNvfPabhCle5LzuJS59Kq2dvu5NtprzUCS%2BDQ3UtMdqhQfZKgqkmZsNli0BgsMsYn%2FI%2FmKwAbH9HNaCZ%2Fx0YTQ4c1hKRW%2BPlW9Q%2FKR09gtsqwT2UBl%2FQ2zRJg3rK5qAdQTs4q72G466f4mdWvae2nSJt9tBOmaAvZZXo9TzYme17Z3ZGXYG9tDnnSLUJZFAty5XeQIAzEbtwmaM%2F7NpqaDRRsjOXGHR%2BUQkbW5kHpUnm%2BS%2F266fJkHdWjn76p6KgyipU82cHRaH2cZeTN6mqm1w2KTsH%2FFCVWtrLL1JX8rX4I0Bolnwwcw38r3uhkthHEhGXCRiQiwZenPHDGyf1Z%2BPe2zfNO9d7sdLGaFuxuApeLDy6C%2B%2BqxWFI865gyJD%2BbNgFU4yoDbJmxjhwce6sCQkRMZMesQ2TfNHJgX%2F6dSnck7n0FOxBaizNpMRIzhF%2FxnVsDrkYgiuibAXaxcpt%2FfzRRebTWqAxCu9Jq%2BZmim51GSraxlAliMZQPalTGgG0L2zQej40KmKgmxj0X6MHQk7eF4tFCHWb%2FO6tCCyUN1FDsLEVqqlmEKmC3X%2FGMI%2Bp0MIGOqUBQO5hHElcfliV28NM7bdmy9ftJ%2FZKa1FMO940Mo%2FHwiAxbF%2Fu3RabjNa8No8hQbNGE99fPPfpGDjZBnalXZ%2BJey%2FAVWrT5FJ52Nx3Z2mGl2RdpbOKjAz7vtrre4AmDNfA9Al%2F0CyF4ULNqZybMSDVxduggG55NkK7RamtfaTshDMcOm1XRBVh6cNQzaaHPsYlPDhviRJQ6Ln%2FkHBMH9uMKWRvO5vG&X-Amz-Signature=d39709ce56888f82d51940138022050cf4111536fffdda9a0de98b44f4985b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VU4IE5L%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxIX4Ibf0HlLbIvmbxGFdl7xl7Os4Hgbm2bD3oKMZpUgIgK54fv8cNdyy%2Fe8%2FvGrc8EtGtqKLIcoK6hnVDP0AsB2gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN%2BrUMOQGQxiofdSCrcA%2BDl8avlkUQY7%2BWCBqceM1u8Dmq8MR%2F71v8RSK6oBACljhAzYIsS88cK7Pmo1cxLzNvfPabhCle5LzuJS59Kq2dvu5NtprzUCS%2BDQ3UtMdqhQfZKgqkmZsNli0BgsMsYn%2FI%2FmKwAbH9HNaCZ%2Fx0YTQ4c1hKRW%2BPlW9Q%2FKR09gtsqwT2UBl%2FQ2zRJg3rK5qAdQTs4q72G466f4mdWvae2nSJt9tBOmaAvZZXo9TzYme17Z3ZGXYG9tDnnSLUJZFAty5XeQIAzEbtwmaM%2F7NpqaDRRsjOXGHR%2BUQkbW5kHpUnm%2BS%2F266fJkHdWjn76p6KgyipU82cHRaH2cZeTN6mqm1w2KTsH%2FFCVWtrLL1JX8rX4I0Bolnwwcw38r3uhkthHEhGXCRiQiwZenPHDGyf1Z%2BPe2zfNO9d7sdLGaFuxuApeLDy6C%2B%2BqxWFI865gyJD%2BbNgFU4yoDbJmxjhwce6sCQkRMZMesQ2TfNHJgX%2F6dSnck7n0FOxBaizNpMRIzhF%2FxnVsDrkYgiuibAXaxcpt%2FfzRRebTWqAxCu9Jq%2BZmim51GSraxlAliMZQPalTGgG0L2zQej40KmKgmxj0X6MHQk7eF4tFCHWb%2FO6tCCyUN1FDsLEVqqlmEKmC3X%2FGMI%2Bp0MIGOqUBQO5hHElcfliV28NM7bdmy9ftJ%2FZKa1FMO940Mo%2FHwiAxbF%2Fu3RabjNa8No8hQbNGE99fPPfpGDjZBnalXZ%2BJey%2FAVWrT5FJ52Nx3Z2mGl2RdpbOKjAz7vtrre4AmDNfA9Al%2F0CyF4ULNqZybMSDVxduggG55NkK7RamtfaTshDMcOm1XRBVh6cNQzaaHPsYlPDhviRJQ6Ln%2FkHBMH9uMKWRvO5vG&X-Amz-Signature=f9fa46467381ca436f7cc1c2793fcb4f16052b25b4304dbf336fa9332b16eaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
