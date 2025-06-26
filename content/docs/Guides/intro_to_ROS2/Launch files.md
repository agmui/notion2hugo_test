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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQS6PS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGN%2F2bAyZwj09rQzJJ4gwa7HBIlky6hhYDC0%2FHiUIvqHAiEApDwZhiHO4osRGNXnd8QV9rASDSHnmA9jBPtt2ol0EzUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHugM2EPtvotzQnFMCrcAyp21TJehhSiCWr7d4yi5WDtC71peqmuQQym%2B2fM4vhPL7yljdfvBDbvW0BaWaxTgyxO6BWdaSOQ%2FdiinPO2yI6Nxf69SWqdrzRzv8Z2yGxBV6lfKMfQYlXGfJlLVvqs%2BQmzyALbK5JVOgd0%2BPGkTbwppHsp%2F%2BZBObA8l4me3GCBHQkjl7rDFZpFz4PNmqfujwRBTlxB2sHidkKpG33bKElPtV6l3QgH2uDuZ3ONHItKiBfWRkkulhJbXYIe0MUc0j1VtXox2sRWMYDDlP%2BLc93ueS6feDdgJTYILvr6HuladZpTD1gd22%2FlQQANgleAHCssZ77KekCH43BjaCmMbxYFtcmfc8VhaZ3IiomMYpB5bpXeh3WBEcmzvukR3aqIPpjYWJSrQ%2FXYB3xO9l%2FlyXmrcyLNFuIzOCFsKG576fwPxTFxqJpgF6PIkvm1a13g3eyia7cd%2FZyWZOdFXIUfE5ShMVTX9OBWI2AXnbVUTBBc6mU8GJPk1VvSNV0QNbtpsKL4S2jYTZ2rZtKZaqJo8x0VQZ1H3blYixKRWzyimAr%2Fs7%2Fcb6d%2FZrQV%2B1f2MNmEyzn%2FidCm%2BJ5amJ6yRnyVLrIrsJvEYgQxTSiePPal%2BKCRYeKCE18HDTqvt0L2MOOp8sIGOqUBmzxrvn3KNinGQIARYA50osCb4UUIdr%2FLokSeJsMqigugbfiiMwUgeCTS%2BwHjBC8VeY9Sx74LphSzE%2BAeRI7%2BVmfLWqBkqsa75x2B6B4Gw7l297cI9lwVoC41cBI8ce5eTgJ6%2BnMNYYHbSGt73efGmJc1KX3fY7fiGx7pbICibACQjfmBaKXh7dVXybqJVlYJ%2BPsQmlUTz%2FhHu8yeFBL3igooNuyY&X-Amz-Signature=072b4077b57a141579a6433a9a6bb9b9bd786f28b42d8688d263a15107f99b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQS6PS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGN%2F2bAyZwj09rQzJJ4gwa7HBIlky6hhYDC0%2FHiUIvqHAiEApDwZhiHO4osRGNXnd8QV9rASDSHnmA9jBPtt2ol0EzUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHugM2EPtvotzQnFMCrcAyp21TJehhSiCWr7d4yi5WDtC71peqmuQQym%2B2fM4vhPL7yljdfvBDbvW0BaWaxTgyxO6BWdaSOQ%2FdiinPO2yI6Nxf69SWqdrzRzv8Z2yGxBV6lfKMfQYlXGfJlLVvqs%2BQmzyALbK5JVOgd0%2BPGkTbwppHsp%2F%2BZBObA8l4me3GCBHQkjl7rDFZpFz4PNmqfujwRBTlxB2sHidkKpG33bKElPtV6l3QgH2uDuZ3ONHItKiBfWRkkulhJbXYIe0MUc0j1VtXox2sRWMYDDlP%2BLc93ueS6feDdgJTYILvr6HuladZpTD1gd22%2FlQQANgleAHCssZ77KekCH43BjaCmMbxYFtcmfc8VhaZ3IiomMYpB5bpXeh3WBEcmzvukR3aqIPpjYWJSrQ%2FXYB3xO9l%2FlyXmrcyLNFuIzOCFsKG576fwPxTFxqJpgF6PIkvm1a13g3eyia7cd%2FZyWZOdFXIUfE5ShMVTX9OBWI2AXnbVUTBBc6mU8GJPk1VvSNV0QNbtpsKL4S2jYTZ2rZtKZaqJo8x0VQZ1H3blYixKRWzyimAr%2Fs7%2Fcb6d%2FZrQV%2B1f2MNmEyzn%2FidCm%2BJ5amJ6yRnyVLrIrsJvEYgQxTSiePPal%2BKCRYeKCE18HDTqvt0L2MOOp8sIGOqUBmzxrvn3KNinGQIARYA50osCb4UUIdr%2FLokSeJsMqigugbfiiMwUgeCTS%2BwHjBC8VeY9Sx74LphSzE%2BAeRI7%2BVmfLWqBkqsa75x2B6B4Gw7l297cI9lwVoC41cBI8ce5eTgJ6%2BnMNYYHbSGt73efGmJc1KX3fY7fiGx7pbICibACQjfmBaKXh7dVXybqJVlYJ%2BPsQmlUTz%2FhHu8yeFBL3igooNuyY&X-Amz-Signature=7e780e3fe574bc77feabe1e4317ed0821ca617394da59c5ff827be77612ecc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MWQS6PS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGN%2F2bAyZwj09rQzJJ4gwa7HBIlky6hhYDC0%2FHiUIvqHAiEApDwZhiHO4osRGNXnd8QV9rASDSHnmA9jBPtt2ol0EzUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHugM2EPtvotzQnFMCrcAyp21TJehhSiCWr7d4yi5WDtC71peqmuQQym%2B2fM4vhPL7yljdfvBDbvW0BaWaxTgyxO6BWdaSOQ%2FdiinPO2yI6Nxf69SWqdrzRzv8Z2yGxBV6lfKMfQYlXGfJlLVvqs%2BQmzyALbK5JVOgd0%2BPGkTbwppHsp%2F%2BZBObA8l4me3GCBHQkjl7rDFZpFz4PNmqfujwRBTlxB2sHidkKpG33bKElPtV6l3QgH2uDuZ3ONHItKiBfWRkkulhJbXYIe0MUc0j1VtXox2sRWMYDDlP%2BLc93ueS6feDdgJTYILvr6HuladZpTD1gd22%2FlQQANgleAHCssZ77KekCH43BjaCmMbxYFtcmfc8VhaZ3IiomMYpB5bpXeh3WBEcmzvukR3aqIPpjYWJSrQ%2FXYB3xO9l%2FlyXmrcyLNFuIzOCFsKG576fwPxTFxqJpgF6PIkvm1a13g3eyia7cd%2FZyWZOdFXIUfE5ShMVTX9OBWI2AXnbVUTBBc6mU8GJPk1VvSNV0QNbtpsKL4S2jYTZ2rZtKZaqJo8x0VQZ1H3blYixKRWzyimAr%2Fs7%2Fcb6d%2FZrQV%2B1f2MNmEyzn%2FidCm%2BJ5amJ6yRnyVLrIrsJvEYgQxTSiePPal%2BKCRYeKCE18HDTqvt0L2MOOp8sIGOqUBmzxrvn3KNinGQIARYA50osCb4UUIdr%2FLokSeJsMqigugbfiiMwUgeCTS%2BwHjBC8VeY9Sx74LphSzE%2BAeRI7%2BVmfLWqBkqsa75x2B6B4Gw7l297cI9lwVoC41cBI8ce5eTgJ6%2BnMNYYHbSGt73efGmJc1KX3fY7fiGx7pbICibACQjfmBaKXh7dVXybqJVlYJ%2BPsQmlUTz%2FhHu8yeFBL3igooNuyY&X-Amz-Signature=2b4d329f42c71ef86b31bdfaa3e25f07073acb19a77cb3df61bd2186db4ef165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
