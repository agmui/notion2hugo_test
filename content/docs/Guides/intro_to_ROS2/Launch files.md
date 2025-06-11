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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOL43LIY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJHjQggWBnXtPz1aUEsw7mCSugi1AwX48wJqKUdbEklAiBJSVYFiXSbUrC7X5PfQiuWqU0m4EEiAkF1MKsupIaFRyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1w5IcIdk4AhhhqeuKtwDky7oSbCgqc4N81Dq6bTb6Yg20BFPf345C223UaOp4SxDO%2FitFbsCGcgUOc8XKviCY9wWYJIj7L33zfSKfe0hJ1WxRHOv5ZZ%2F%2FqC7DzaFrxZxZGvpbnchFWhrFnEpJWqpckMh83ZBVQNPJ0kDm0iVCPzy2B6jOTPsUDKhrCOujao4RaVU5u43vYsq8cNwpmu%2B7UYDPnN%2FRRPg8%2BkG00YpW9JNzmGMoHO97uYDeIMqnyycKNy%2FEHbNryTKrpkLw8TJfOOyMnjFuoS8r5uK2xYMSac%2FWLhr6UxfTamnJhdqaoEgMZYpslZuTDC3WnPXQvZJ%2BSeNn03Hj553e87FHhn1J%2F9MZb70ua2mNAI8w6zYx6k5sJJNgXLWzyed%2BbzWwm6khjz%2B3HMBudrcBmJkc7CVSEvn%2BLCM2SCMaSkP9dHwKElArTXPPZE%2BJ3srbW0CIfjXQWjMsCQO%2FVLgS3X9ppWsLSPZgILcOy%2FOWWSCgGpxysLxuZl%2F%2FsZfkuof7whXCISsWs85Ga6rndpjesHNB3fVK1PC1eHF6tgaaIO4s9mQh6w4FiRABfxz4MayRC%2BW%2Bndycbgtn221DpwXYb6f4P4sf0qUf24n1t2S3HPEmYLXk7pdDypbQUGoYy0%2Bm%2FgwmcmnwgY6pgFeJoWZqk47PBnmGf6mYEMmDLOIHhC4PwjhcwfrJJBRD0BYZuZBrut%2Fb%2BojurwQu81G2GC9TUyeWPXYDIer%2BfX5NZKheikW4Pyz17xqvZtRfSvNpK7gM4U2wB5lMMaj%2B0vs1bBkhHheWS3tYsSZ3%2Fzy6MIFsUgvM6rr38CGU%2F3zG5ScbWIjV55TVN4noTNZVFFtQEfJwh1bKf96WxJXX6sBvDGh49Rn&X-Amz-Signature=a16d0f1a1fe8e944c1a11cf8538ba7c92eab3a9d4203e9cdaa1bcc333bf87914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOL43LIY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJHjQggWBnXtPz1aUEsw7mCSugi1AwX48wJqKUdbEklAiBJSVYFiXSbUrC7X5PfQiuWqU0m4EEiAkF1MKsupIaFRyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1w5IcIdk4AhhhqeuKtwDky7oSbCgqc4N81Dq6bTb6Yg20BFPf345C223UaOp4SxDO%2FitFbsCGcgUOc8XKviCY9wWYJIj7L33zfSKfe0hJ1WxRHOv5ZZ%2F%2FqC7DzaFrxZxZGvpbnchFWhrFnEpJWqpckMh83ZBVQNPJ0kDm0iVCPzy2B6jOTPsUDKhrCOujao4RaVU5u43vYsq8cNwpmu%2B7UYDPnN%2FRRPg8%2BkG00YpW9JNzmGMoHO97uYDeIMqnyycKNy%2FEHbNryTKrpkLw8TJfOOyMnjFuoS8r5uK2xYMSac%2FWLhr6UxfTamnJhdqaoEgMZYpslZuTDC3WnPXQvZJ%2BSeNn03Hj553e87FHhn1J%2F9MZb70ua2mNAI8w6zYx6k5sJJNgXLWzyed%2BbzWwm6khjz%2B3HMBudrcBmJkc7CVSEvn%2BLCM2SCMaSkP9dHwKElArTXPPZE%2BJ3srbW0CIfjXQWjMsCQO%2FVLgS3X9ppWsLSPZgILcOy%2FOWWSCgGpxysLxuZl%2F%2FsZfkuof7whXCISsWs85Ga6rndpjesHNB3fVK1PC1eHF6tgaaIO4s9mQh6w4FiRABfxz4MayRC%2BW%2Bndycbgtn221DpwXYb6f4P4sf0qUf24n1t2S3HPEmYLXk7pdDypbQUGoYy0%2Bm%2FgwmcmnwgY6pgFeJoWZqk47PBnmGf6mYEMmDLOIHhC4PwjhcwfrJJBRD0BYZuZBrut%2Fb%2BojurwQu81G2GC9TUyeWPXYDIer%2BfX5NZKheikW4Pyz17xqvZtRfSvNpK7gM4U2wB5lMMaj%2B0vs1bBkhHheWS3tYsSZ3%2Fzy6MIFsUgvM6rr38CGU%2F3zG5ScbWIjV55TVN4noTNZVFFtQEfJwh1bKf96WxJXX6sBvDGh49Rn&X-Amz-Signature=950869cb8a1a9eb20da822a14532db2c351d15722d99900fac5c11c44d970085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOL43LIY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJHjQggWBnXtPz1aUEsw7mCSugi1AwX48wJqKUdbEklAiBJSVYFiXSbUrC7X5PfQiuWqU0m4EEiAkF1MKsupIaFRyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1w5IcIdk4AhhhqeuKtwDky7oSbCgqc4N81Dq6bTb6Yg20BFPf345C223UaOp4SxDO%2FitFbsCGcgUOc8XKviCY9wWYJIj7L33zfSKfe0hJ1WxRHOv5ZZ%2F%2FqC7DzaFrxZxZGvpbnchFWhrFnEpJWqpckMh83ZBVQNPJ0kDm0iVCPzy2B6jOTPsUDKhrCOujao4RaVU5u43vYsq8cNwpmu%2B7UYDPnN%2FRRPg8%2BkG00YpW9JNzmGMoHO97uYDeIMqnyycKNy%2FEHbNryTKrpkLw8TJfOOyMnjFuoS8r5uK2xYMSac%2FWLhr6UxfTamnJhdqaoEgMZYpslZuTDC3WnPXQvZJ%2BSeNn03Hj553e87FHhn1J%2F9MZb70ua2mNAI8w6zYx6k5sJJNgXLWzyed%2BbzWwm6khjz%2B3HMBudrcBmJkc7CVSEvn%2BLCM2SCMaSkP9dHwKElArTXPPZE%2BJ3srbW0CIfjXQWjMsCQO%2FVLgS3X9ppWsLSPZgILcOy%2FOWWSCgGpxysLxuZl%2F%2FsZfkuof7whXCISsWs85Ga6rndpjesHNB3fVK1PC1eHF6tgaaIO4s9mQh6w4FiRABfxz4MayRC%2BW%2Bndycbgtn221DpwXYb6f4P4sf0qUf24n1t2S3HPEmYLXk7pdDypbQUGoYy0%2Bm%2FgwmcmnwgY6pgFeJoWZqk47PBnmGf6mYEMmDLOIHhC4PwjhcwfrJJBRD0BYZuZBrut%2Fb%2BojurwQu81G2GC9TUyeWPXYDIer%2BfX5NZKheikW4Pyz17xqvZtRfSvNpK7gM4U2wB5lMMaj%2B0vs1bBkhHheWS3tYsSZ3%2Fzy6MIFsUgvM6rr38CGU%2F3zG5ScbWIjV55TVN4noTNZVFFtQEfJwh1bKf96WxJXX6sBvDGh49Rn&X-Amz-Signature=9fc7c9fe57cdb4472e0506272f61caee8cb0297f2835dda3fd035037f3d6dd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
