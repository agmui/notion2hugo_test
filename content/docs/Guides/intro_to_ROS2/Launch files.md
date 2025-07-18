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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJ6XZAJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAqz8EfltEhhju2Fo4ENun2iw%2F9lAmoG95pWJi18wJG1AiBHnn9%2F5kTFHmM%2FpCSprYt3Dp%2FZsfSfaf9P5%2BvYhRIupSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuPbxdUVCw1DY%2Fwi3KtwDMFcTv3WNF98FT5SHSSgR57xMreI4T%2F0iN2haq6VoXFBvZaQdQS%2Fi%2F3oO5%2BCOS6S%2BlPmmKPPx1xV00FVQbwvRuJmu31K2whgGVHEoDw3u4NojIBmWTLe8jOxER8IYABkG%2BTAf2Ce%2F%2Bx6WGEZ6%2BEnSXK%2Bg3rvlzJ0RoSbH%2BVJogI0gxAM%2FCtzXPdnWoHLF4X%2BScA1BClv8nkXzPtxFLXUAUwXuzmEsmTEj%2BXjLULj%2Betyxo06c6ZOYRmDaFSKjZ1v8NysJIE4efmMTC%2FZt7VB1F4lnfGK2edVRKljxC%2BnMfxpz%2Bo%2FVxy5TBOCfImD3DStozx%2Fo4P9TXs62S1dsK6c7wJnTv3ib4LfqkvG2EAW%2F8c3KcgKVMXSMDOX6bGBg27pV4dlmwwAyUlaC77cgBh3OZTGM3Ow7SsUI5Bw91N6m48lGBE%2FOPX6Nta8G3nHRFIMpUvO3FYffBiVfyGDbqfbl0DWkYfB5ZK%2F9K8CulwYuT%2BffGtXOFl9lnql%2BpXMf6ah%2FYuZncTwIoEeeuD5zuv4Tnev9oEQhD9VLK9zOkqf4oAA4NZ1edomHWTDV9FSpQpYjYvB9K909PaOBEUhhJt2MhJWM9iNZNbvYVBVWZF%2FYFQ8kb7qxGyX1WW0POnAwys%2FowwY6pgECsqF4rsViBAddRSZonp6myKtjfEjE47hn0IN9mgGwE9zX3fwym%2B4lq9IDTUQP2BlbNK8%2FvzEEnu8OMRaXTZvTixsGZxoTLOfC5LbTtCOLQxYAHeiJa27EtGJieKN1vZ9j%2F%2BdwnzpbP9LT4z9IxmB6weQ3Rzk9xgq1Viks4auirEXC0Rkv5VGddsCDPvGKSLG52Xgzn0c%2BXLXTtBHgxu7nccH%2F%2BhCR&X-Amz-Signature=1ebe1fa09d3f2ea91630feeac74dd68aa4a7b9f5964c535654c32c86ce079075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJ6XZAJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAqz8EfltEhhju2Fo4ENun2iw%2F9lAmoG95pWJi18wJG1AiBHnn9%2F5kTFHmM%2FpCSprYt3Dp%2FZsfSfaf9P5%2BvYhRIupSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuPbxdUVCw1DY%2Fwi3KtwDMFcTv3WNF98FT5SHSSgR57xMreI4T%2F0iN2haq6VoXFBvZaQdQS%2Fi%2F3oO5%2BCOS6S%2BlPmmKPPx1xV00FVQbwvRuJmu31K2whgGVHEoDw3u4NojIBmWTLe8jOxER8IYABkG%2BTAf2Ce%2F%2Bx6WGEZ6%2BEnSXK%2Bg3rvlzJ0RoSbH%2BVJogI0gxAM%2FCtzXPdnWoHLF4X%2BScA1BClv8nkXzPtxFLXUAUwXuzmEsmTEj%2BXjLULj%2Betyxo06c6ZOYRmDaFSKjZ1v8NysJIE4efmMTC%2FZt7VB1F4lnfGK2edVRKljxC%2BnMfxpz%2Bo%2FVxy5TBOCfImD3DStozx%2Fo4P9TXs62S1dsK6c7wJnTv3ib4LfqkvG2EAW%2F8c3KcgKVMXSMDOX6bGBg27pV4dlmwwAyUlaC77cgBh3OZTGM3Ow7SsUI5Bw91N6m48lGBE%2FOPX6Nta8G3nHRFIMpUvO3FYffBiVfyGDbqfbl0DWkYfB5ZK%2F9K8CulwYuT%2BffGtXOFl9lnql%2BpXMf6ah%2FYuZncTwIoEeeuD5zuv4Tnev9oEQhD9VLK9zOkqf4oAA4NZ1edomHWTDV9FSpQpYjYvB9K909PaOBEUhhJt2MhJWM9iNZNbvYVBVWZF%2FYFQ8kb7qxGyX1WW0POnAwys%2FowwY6pgECsqF4rsViBAddRSZonp6myKtjfEjE47hn0IN9mgGwE9zX3fwym%2B4lq9IDTUQP2BlbNK8%2FvzEEnu8OMRaXTZvTixsGZxoTLOfC5LbTtCOLQxYAHeiJa27EtGJieKN1vZ9j%2F%2BdwnzpbP9LT4z9IxmB6weQ3Rzk9xgq1Viks4auirEXC0Rkv5VGddsCDPvGKSLG52Xgzn0c%2BXLXTtBHgxu7nccH%2F%2BhCR&X-Amz-Signature=3ecb699c60e97a32ed7f518a7eb02ca1ceda8e6c86c14b31f36b6059a15f4d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJ6XZAJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAqz8EfltEhhju2Fo4ENun2iw%2F9lAmoG95pWJi18wJG1AiBHnn9%2F5kTFHmM%2FpCSprYt3Dp%2FZsfSfaf9P5%2BvYhRIupSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuPbxdUVCw1DY%2Fwi3KtwDMFcTv3WNF98FT5SHSSgR57xMreI4T%2F0iN2haq6VoXFBvZaQdQS%2Fi%2F3oO5%2BCOS6S%2BlPmmKPPx1xV00FVQbwvRuJmu31K2whgGVHEoDw3u4NojIBmWTLe8jOxER8IYABkG%2BTAf2Ce%2F%2Bx6WGEZ6%2BEnSXK%2Bg3rvlzJ0RoSbH%2BVJogI0gxAM%2FCtzXPdnWoHLF4X%2BScA1BClv8nkXzPtxFLXUAUwXuzmEsmTEj%2BXjLULj%2Betyxo06c6ZOYRmDaFSKjZ1v8NysJIE4efmMTC%2FZt7VB1F4lnfGK2edVRKljxC%2BnMfxpz%2Bo%2FVxy5TBOCfImD3DStozx%2Fo4P9TXs62S1dsK6c7wJnTv3ib4LfqkvG2EAW%2F8c3KcgKVMXSMDOX6bGBg27pV4dlmwwAyUlaC77cgBh3OZTGM3Ow7SsUI5Bw91N6m48lGBE%2FOPX6Nta8G3nHRFIMpUvO3FYffBiVfyGDbqfbl0DWkYfB5ZK%2F9K8CulwYuT%2BffGtXOFl9lnql%2BpXMf6ah%2FYuZncTwIoEeeuD5zuv4Tnev9oEQhD9VLK9zOkqf4oAA4NZ1edomHWTDV9FSpQpYjYvB9K909PaOBEUhhJt2MhJWM9iNZNbvYVBVWZF%2FYFQ8kb7qxGyX1WW0POnAwys%2FowwY6pgECsqF4rsViBAddRSZonp6myKtjfEjE47hn0IN9mgGwE9zX3fwym%2B4lq9IDTUQP2BlbNK8%2FvzEEnu8OMRaXTZvTixsGZxoTLOfC5LbTtCOLQxYAHeiJa27EtGJieKN1vZ9j%2F%2BdwnzpbP9LT4z9IxmB6weQ3Rzk9xgq1Viks4auirEXC0Rkv5VGddsCDPvGKSLG52Xgzn0c%2BXLXTtBHgxu7nccH%2F%2BhCR&X-Amz-Signature=026fb00720176e183193448080dde4df86056f76d137a7343caa42863f169b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
