---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5BQYC5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHDSAZokiRMcMYZHx5L2h40jd1iU%2FSBRSXtV%2F1xwjYhxAiEArAaMRq5HHDM2YHnW7%2FFzumAyulmiQTpOp0EJMlq5QcMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBYEfYCvFzLS2U9VqSrcA0vHCZoRJMlPoj47dAvC3kJvEo%2F%2FwkeznoUNdALUbA3c9h%2Bd60e0bNcijVsNMQSVVtilEVyZDohnU1Fha90lQC9DztwFphrvIF485BCsibxtetp4kn%2B2%2FC9iAnjdJi1kpkv8T%2FGv62wTLs5caNTMfgPhWkQs9Ie3EBWWEtbixEvcvpMRfrJTXwlNb%2F1B1F%2Fo5lsW7Kna9gDFHufZ3PqSjDUWzihm%2BaeRWBi5kZhtN6ayI9BjBXt9%2B%2BF8nIwhs5rQiGeva%2BY51OE84TOBcMkNBA8X%2FCjUaFjeepYkZLjiWmZ4C3URrhJslehPuLzM0%2BwlpGbV0gFOoP7GfVB7N%2FWYRgbr7lpFKDKFC4Rab0ftWgxfgJa6MLr4IUWPiAgNogjTuE%2FBpuzWnEGKezcNe0Y3%2FGApkXBDiQqWeR7VJLgNgGiFtnE8hu8FKmIgLNcXbNL%2BYRJ%2BpbmfuW8B9ldMCGXzDUrVVQZA7ma2hzrNCH44S0s7OCxBk7CNE%2FrgT%2FsLDS5i0W9PXBvxIsniXhKyvdZPtmkijtaicOAA%2Fo8xEhT1ucgwFLI2Z4ykJRkAREjOnaVf10OltfbG%2FA5l5EXo9GVfJWJBdcqOhH5lmq3rqCET0kPxZA6PVLVhUPOveHu9MLz6ksQGOqUB0yAMjjcb7qlfoOrNI0J9%2BoFQTRTxRM3MuJqRSvRRLWgJf6WagLBwCiojaBnKV76OXtunPUTHPQAb2JvEcwVNec1uib0VR1h6XFoBZhWSlYN63U1KOx6Of4IfJzBRnxgddjn0gbiFoIyDBttEmwO147ZDkeudbx2P4Nk%2BJ6rCbawgEPfgNznSoWiY5xYKCsoKKftJBDuwk%2FRdZ%2ByErbwJP6ytOzIZ&X-Amz-Signature=55c7da4282decb71f75210b2255faca611f15fd96f7aa93e3844fcbb4bfedbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5BQYC5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHDSAZokiRMcMYZHx5L2h40jd1iU%2FSBRSXtV%2F1xwjYhxAiEArAaMRq5HHDM2YHnW7%2FFzumAyulmiQTpOp0EJMlq5QcMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBYEfYCvFzLS2U9VqSrcA0vHCZoRJMlPoj47dAvC3kJvEo%2F%2FwkeznoUNdALUbA3c9h%2Bd60e0bNcijVsNMQSVVtilEVyZDohnU1Fha90lQC9DztwFphrvIF485BCsibxtetp4kn%2B2%2FC9iAnjdJi1kpkv8T%2FGv62wTLs5caNTMfgPhWkQs9Ie3EBWWEtbixEvcvpMRfrJTXwlNb%2F1B1F%2Fo5lsW7Kna9gDFHufZ3PqSjDUWzihm%2BaeRWBi5kZhtN6ayI9BjBXt9%2B%2BF8nIwhs5rQiGeva%2BY51OE84TOBcMkNBA8X%2FCjUaFjeepYkZLjiWmZ4C3URrhJslehPuLzM0%2BwlpGbV0gFOoP7GfVB7N%2FWYRgbr7lpFKDKFC4Rab0ftWgxfgJa6MLr4IUWPiAgNogjTuE%2FBpuzWnEGKezcNe0Y3%2FGApkXBDiQqWeR7VJLgNgGiFtnE8hu8FKmIgLNcXbNL%2BYRJ%2BpbmfuW8B9ldMCGXzDUrVVQZA7ma2hzrNCH44S0s7OCxBk7CNE%2FrgT%2FsLDS5i0W9PXBvxIsniXhKyvdZPtmkijtaicOAA%2Fo8xEhT1ucgwFLI2Z4ykJRkAREjOnaVf10OltfbG%2FA5l5EXo9GVfJWJBdcqOhH5lmq3rqCET0kPxZA6PVLVhUPOveHu9MLz6ksQGOqUB0yAMjjcb7qlfoOrNI0J9%2BoFQTRTxRM3MuJqRSvRRLWgJf6WagLBwCiojaBnKV76OXtunPUTHPQAb2JvEcwVNec1uib0VR1h6XFoBZhWSlYN63U1KOx6Of4IfJzBRnxgddjn0gbiFoIyDBttEmwO147ZDkeudbx2P4Nk%2BJ6rCbawgEPfgNznSoWiY5xYKCsoKKftJBDuwk%2FRdZ%2ByErbwJP6ytOzIZ&X-Amz-Signature=eea3bcb6b98b2d2f6e36275199221291682a93e6fb81b36eb63ae1eeea4d96d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5BQYC5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHDSAZokiRMcMYZHx5L2h40jd1iU%2FSBRSXtV%2F1xwjYhxAiEArAaMRq5HHDM2YHnW7%2FFzumAyulmiQTpOp0EJMlq5QcMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBYEfYCvFzLS2U9VqSrcA0vHCZoRJMlPoj47dAvC3kJvEo%2F%2FwkeznoUNdALUbA3c9h%2Bd60e0bNcijVsNMQSVVtilEVyZDohnU1Fha90lQC9DztwFphrvIF485BCsibxtetp4kn%2B2%2FC9iAnjdJi1kpkv8T%2FGv62wTLs5caNTMfgPhWkQs9Ie3EBWWEtbixEvcvpMRfrJTXwlNb%2F1B1F%2Fo5lsW7Kna9gDFHufZ3PqSjDUWzihm%2BaeRWBi5kZhtN6ayI9BjBXt9%2B%2BF8nIwhs5rQiGeva%2BY51OE84TOBcMkNBA8X%2FCjUaFjeepYkZLjiWmZ4C3URrhJslehPuLzM0%2BwlpGbV0gFOoP7GfVB7N%2FWYRgbr7lpFKDKFC4Rab0ftWgxfgJa6MLr4IUWPiAgNogjTuE%2FBpuzWnEGKezcNe0Y3%2FGApkXBDiQqWeR7VJLgNgGiFtnE8hu8FKmIgLNcXbNL%2BYRJ%2BpbmfuW8B9ldMCGXzDUrVVQZA7ma2hzrNCH44S0s7OCxBk7CNE%2FrgT%2FsLDS5i0W9PXBvxIsniXhKyvdZPtmkijtaicOAA%2Fo8xEhT1ucgwFLI2Z4ykJRkAREjOnaVf10OltfbG%2FA5l5EXo9GVfJWJBdcqOhH5lmq3rqCET0kPxZA6PVLVhUPOveHu9MLz6ksQGOqUB0yAMjjcb7qlfoOrNI0J9%2BoFQTRTxRM3MuJqRSvRRLWgJf6WagLBwCiojaBnKV76OXtunPUTHPQAb2JvEcwVNec1uib0VR1h6XFoBZhWSlYN63U1KOx6Of4IfJzBRnxgddjn0gbiFoIyDBttEmwO147ZDkeudbx2P4Nk%2BJ6rCbawgEPfgNznSoWiY5xYKCsoKKftJBDuwk%2FRdZ%2ByErbwJP6ytOzIZ&X-Amz-Signature=716c650bf4b8b7d271a282c352396042500b1f8f2955ca9597a188cb4fe58f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
