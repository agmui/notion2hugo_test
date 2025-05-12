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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKYT4HC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFbJWgm6UEbMrHnSvzWeHmxVkN05cEZFVoHpAFHkeyQFAiB%2Fo5Ju%2Bk9PX3MgoZa%2F6Vo84e4c96Ut8BBpDQZLu5HGESqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaO9FYxk4MDfmV2O%2BKtwDF411qygRf3YZWl3b%2BknnVwdAOdo%2BRL1l7MXiqHuDoNvDtNI%2BS0NRGNgqd5o%2FfE3J7RtHx%2FSuUY%2Fld9w7KyXTIwVsFqow6i1nVBetSFSoR8dZ2i9U9KuBr19E3Gbwjd5xZ9wlsXf1UljqlzmnVzU48eNr3V4fa%2FcgvuzkqXm0J4Jy1qOpgbuXQWCKL5Z%2FDHonImsupzGAvxIzgTp0s4e2aa4vUtOXGYxFUMsRAEFIhjWAYsoftyuD0U%2FtG9zbXyTRHGYLJtjBaQ5WBThbGz8JEOq6UIeglXYmAJbKDcs1VvYOtjeHIoOM8EBVGFxCZU3hAcioMmpb%2FDYrcby2TxbB488zJdVJS7S8IqBo0425Ms3QnO7AtvAz701cAflB1CO0%2FlWSmHxO0risq2SPzI9R0xHtTkzVeFJHbPpH0n1ORF8kPSGt6Ds2Yrn4rzAxyKJHHhfNTrDUk%2FMDrh%2BqY9TeSszOwBvFe9MwKbSWcL5znXYRESRYiHP0h7r%2Bl3MeV1EAYZejA%2Ftg2N8uiPh7eq92OHV6QTYzrGf4J0YQ0WZWu9QR9zZtx6ZNjMhZv%2FjrxPLUSn45M62gnkMoIDNVi2pnfQNhvs%2B47BZxfrcd1Pbtva7hNdiHvZOFx8tGEQowjuiGwQY6pgEBiNQi7IYRdsilR2TrSjrFbr21la5W4ZGV2hiJbQ%2FJ5SvMIGGIpxwcOim1zRL6ffF8OgCA3Io6EaqwxpuwUC9C7t7REL8PUS1jZfdJ4nLnsX2toVuPhFobfRcYLgcCY9cGPOP%2F9bGkHwdJmvpzRQYddUdSnt%2FyAm1FemHZZGPP3fejPCpqu40IKDsgX6dccaTGUVxtg1dSdX5qXdmLxTzQ4NvB2MSb&X-Amz-Signature=c2711f657a20c6a56c30d979596f9ca78ac6a9df5cfc2e614c97bae74c3d6b09&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKYT4HC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFbJWgm6UEbMrHnSvzWeHmxVkN05cEZFVoHpAFHkeyQFAiB%2Fo5Ju%2Bk9PX3MgoZa%2F6Vo84e4c96Ut8BBpDQZLu5HGESqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaO9FYxk4MDfmV2O%2BKtwDF411qygRf3YZWl3b%2BknnVwdAOdo%2BRL1l7MXiqHuDoNvDtNI%2BS0NRGNgqd5o%2FfE3J7RtHx%2FSuUY%2Fld9w7KyXTIwVsFqow6i1nVBetSFSoR8dZ2i9U9KuBr19E3Gbwjd5xZ9wlsXf1UljqlzmnVzU48eNr3V4fa%2FcgvuzkqXm0J4Jy1qOpgbuXQWCKL5Z%2FDHonImsupzGAvxIzgTp0s4e2aa4vUtOXGYxFUMsRAEFIhjWAYsoftyuD0U%2FtG9zbXyTRHGYLJtjBaQ5WBThbGz8JEOq6UIeglXYmAJbKDcs1VvYOtjeHIoOM8EBVGFxCZU3hAcioMmpb%2FDYrcby2TxbB488zJdVJS7S8IqBo0425Ms3QnO7AtvAz701cAflB1CO0%2FlWSmHxO0risq2SPzI9R0xHtTkzVeFJHbPpH0n1ORF8kPSGt6Ds2Yrn4rzAxyKJHHhfNTrDUk%2FMDrh%2BqY9TeSszOwBvFe9MwKbSWcL5znXYRESRYiHP0h7r%2Bl3MeV1EAYZejA%2Ftg2N8uiPh7eq92OHV6QTYzrGf4J0YQ0WZWu9QR9zZtx6ZNjMhZv%2FjrxPLUSn45M62gnkMoIDNVi2pnfQNhvs%2B47BZxfrcd1Pbtva7hNdiHvZOFx8tGEQowjuiGwQY6pgEBiNQi7IYRdsilR2TrSjrFbr21la5W4ZGV2hiJbQ%2FJ5SvMIGGIpxwcOim1zRL6ffF8OgCA3Io6EaqwxpuwUC9C7t7REL8PUS1jZfdJ4nLnsX2toVuPhFobfRcYLgcCY9cGPOP%2F9bGkHwdJmvpzRQYddUdSnt%2FyAm1FemHZZGPP3fejPCpqu40IKDsgX6dccaTGUVxtg1dSdX5qXdmLxTzQ4NvB2MSb&X-Amz-Signature=aade639bc60d2e3d1bd43bbcec4c40e7b5b02ca52986e24c42cf7251625a43f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKYT4HC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFbJWgm6UEbMrHnSvzWeHmxVkN05cEZFVoHpAFHkeyQFAiB%2Fo5Ju%2Bk9PX3MgoZa%2F6Vo84e4c96Ut8BBpDQZLu5HGESqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaO9FYxk4MDfmV2O%2BKtwDF411qygRf3YZWl3b%2BknnVwdAOdo%2BRL1l7MXiqHuDoNvDtNI%2BS0NRGNgqd5o%2FfE3J7RtHx%2FSuUY%2Fld9w7KyXTIwVsFqow6i1nVBetSFSoR8dZ2i9U9KuBr19E3Gbwjd5xZ9wlsXf1UljqlzmnVzU48eNr3V4fa%2FcgvuzkqXm0J4Jy1qOpgbuXQWCKL5Z%2FDHonImsupzGAvxIzgTp0s4e2aa4vUtOXGYxFUMsRAEFIhjWAYsoftyuD0U%2FtG9zbXyTRHGYLJtjBaQ5WBThbGz8JEOq6UIeglXYmAJbKDcs1VvYOtjeHIoOM8EBVGFxCZU3hAcioMmpb%2FDYrcby2TxbB488zJdVJS7S8IqBo0425Ms3QnO7AtvAz701cAflB1CO0%2FlWSmHxO0risq2SPzI9R0xHtTkzVeFJHbPpH0n1ORF8kPSGt6Ds2Yrn4rzAxyKJHHhfNTrDUk%2FMDrh%2BqY9TeSszOwBvFe9MwKbSWcL5znXYRESRYiHP0h7r%2Bl3MeV1EAYZejA%2Ftg2N8uiPh7eq92OHV6QTYzrGf4J0YQ0WZWu9QR9zZtx6ZNjMhZv%2FjrxPLUSn45M62gnkMoIDNVi2pnfQNhvs%2B47BZxfrcd1Pbtva7hNdiHvZOFx8tGEQowjuiGwQY6pgEBiNQi7IYRdsilR2TrSjrFbr21la5W4ZGV2hiJbQ%2FJ5SvMIGGIpxwcOim1zRL6ffF8OgCA3Io6EaqwxpuwUC9C7t7REL8PUS1jZfdJ4nLnsX2toVuPhFobfRcYLgcCY9cGPOP%2F9bGkHwdJmvpzRQYddUdSnt%2FyAm1FemHZZGPP3fejPCpqu40IKDsgX6dccaTGUVxtg1dSdX5qXdmLxTzQ4NvB2MSb&X-Amz-Signature=041f620b8e424578deb80a06ad3ee4ddd3af6717e9aefcfdc7f4cdf76a5f5972&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
