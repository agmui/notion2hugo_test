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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZNYIMC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD17GYskwcHQgHvfQU1ip5RtPr8olMsqfLcZnk5DTjttAIgQ6xd7%2FVfTLGpymspXmQYa3TKZlIzr3nqmWoV46ncvWcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5OX%2FLav9zB2m5%2BEyrcA5SBpoT2iAXp3d4wjooFXljFBPF8IU6%2FmH3SP1gWTqgUNn8I4x6E4U69D2i3o1S%2F6Ao7pbtlzIPHzqtBHNo%2BRGZWM3q%2FZrwvzY%2Fugum6o5tPXogPY%2Bt9CUsyszYrdotxEMxboFdq%2BOjy6mSdwvILGOVUQwR5BisjZxLWdUSIChrTT9XPYDsp4%2FTUZvHl4CUnTUBDRkOz6f%2FKFgnUrtl%2F3a86CTxjL5pb6PzMUt5de7XI9g5aSBlb3lu6m%2FDNVRiwOZWglTmCnOe4aVh%2BVPax18SSHGGvbCeEzUKRFXlpL82otT8PPMKW9gqEEvFux1D1pEt%2BbY0MEuffQL3zsYu7sZhxPoO%2BFxgNg1ss83OtBrp1fY0JVie3mNAxwQ2P549AWXSbYzpoJRrNjN4T8ykiTYjWyLbB3Qe2p58%2F9Apo%2BopBOSz9mpSPBEiwIBHFUvGIYSx93JYKtliD6dnlrosITjPHZM6d87F6XJEnnLhnxHraphvAMpp1SGrfMNVktSyB0%2FQ4WudZXDtaoOA%2FFN%2FSK5hz7eVq2AoFx%2FQyzvoM%2Bci%2BrhV8CNj4YyoonbumKjzOyGub%2FO1z%2FENoGF5FzpVCSMfgut96Inz6QmO5unBdYQqpfj5Ke4JMouFvgik%2FMLDEtL8GOqUBGC6TSQHXslR%2BgnxjbWxwMsPtkWK7%2FMSqXbaSQnfNNIN7h9wtnqKroCxLKYvk3NSQyo0eSX5o9%2BXvZcl%2BFW%2BYefsgepRc2prwoVb3kQyEiqps5l2ofwMttrMVcEnHGAfVibhVj9mmd4G%2BtzJm8QRmWppzby9fcL3zX5AMSrT2gZsf7NvTvr6TdNR6UP0e8rKS9xUFcIMlcFNPDyP3tzPKEHXUVddg&X-Amz-Signature=8685adca0c02566bca584c7a6317a9b530e597c6e79147f80147e9811d79790a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZNYIMC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD17GYskwcHQgHvfQU1ip5RtPr8olMsqfLcZnk5DTjttAIgQ6xd7%2FVfTLGpymspXmQYa3TKZlIzr3nqmWoV46ncvWcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5OX%2FLav9zB2m5%2BEyrcA5SBpoT2iAXp3d4wjooFXljFBPF8IU6%2FmH3SP1gWTqgUNn8I4x6E4U69D2i3o1S%2F6Ao7pbtlzIPHzqtBHNo%2BRGZWM3q%2FZrwvzY%2Fugum6o5tPXogPY%2Bt9CUsyszYrdotxEMxboFdq%2BOjy6mSdwvILGOVUQwR5BisjZxLWdUSIChrTT9XPYDsp4%2FTUZvHl4CUnTUBDRkOz6f%2FKFgnUrtl%2F3a86CTxjL5pb6PzMUt5de7XI9g5aSBlb3lu6m%2FDNVRiwOZWglTmCnOe4aVh%2BVPax18SSHGGvbCeEzUKRFXlpL82otT8PPMKW9gqEEvFux1D1pEt%2BbY0MEuffQL3zsYu7sZhxPoO%2BFxgNg1ss83OtBrp1fY0JVie3mNAxwQ2P549AWXSbYzpoJRrNjN4T8ykiTYjWyLbB3Qe2p58%2F9Apo%2BopBOSz9mpSPBEiwIBHFUvGIYSx93JYKtliD6dnlrosITjPHZM6d87F6XJEnnLhnxHraphvAMpp1SGrfMNVktSyB0%2FQ4WudZXDtaoOA%2FFN%2FSK5hz7eVq2AoFx%2FQyzvoM%2Bci%2BrhV8CNj4YyoonbumKjzOyGub%2FO1z%2FENoGF5FzpVCSMfgut96Inz6QmO5unBdYQqpfj5Ke4JMouFvgik%2FMLDEtL8GOqUBGC6TSQHXslR%2BgnxjbWxwMsPtkWK7%2FMSqXbaSQnfNNIN7h9wtnqKroCxLKYvk3NSQyo0eSX5o9%2BXvZcl%2BFW%2BYefsgepRc2prwoVb3kQyEiqps5l2ofwMttrMVcEnHGAfVibhVj9mmd4G%2BtzJm8QRmWppzby9fcL3zX5AMSrT2gZsf7NvTvr6TdNR6UP0e8rKS9xUFcIMlcFNPDyP3tzPKEHXUVddg&X-Amz-Signature=ef80fe9fa314c012c5cb3a3f1f19075eb5870bff17d1a9b8847c810681ad6886&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZNYIMC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD17GYskwcHQgHvfQU1ip5RtPr8olMsqfLcZnk5DTjttAIgQ6xd7%2FVfTLGpymspXmQYa3TKZlIzr3nqmWoV46ncvWcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5OX%2FLav9zB2m5%2BEyrcA5SBpoT2iAXp3d4wjooFXljFBPF8IU6%2FmH3SP1gWTqgUNn8I4x6E4U69D2i3o1S%2F6Ao7pbtlzIPHzqtBHNo%2BRGZWM3q%2FZrwvzY%2Fugum6o5tPXogPY%2Bt9CUsyszYrdotxEMxboFdq%2BOjy6mSdwvILGOVUQwR5BisjZxLWdUSIChrTT9XPYDsp4%2FTUZvHl4CUnTUBDRkOz6f%2FKFgnUrtl%2F3a86CTxjL5pb6PzMUt5de7XI9g5aSBlb3lu6m%2FDNVRiwOZWglTmCnOe4aVh%2BVPax18SSHGGvbCeEzUKRFXlpL82otT8PPMKW9gqEEvFux1D1pEt%2BbY0MEuffQL3zsYu7sZhxPoO%2BFxgNg1ss83OtBrp1fY0JVie3mNAxwQ2P549AWXSbYzpoJRrNjN4T8ykiTYjWyLbB3Qe2p58%2F9Apo%2BopBOSz9mpSPBEiwIBHFUvGIYSx93JYKtliD6dnlrosITjPHZM6d87F6XJEnnLhnxHraphvAMpp1SGrfMNVktSyB0%2FQ4WudZXDtaoOA%2FFN%2FSK5hz7eVq2AoFx%2FQyzvoM%2Bci%2BrhV8CNj4YyoonbumKjzOyGub%2FO1z%2FENoGF5FzpVCSMfgut96Inz6QmO5unBdYQqpfj5Ke4JMouFvgik%2FMLDEtL8GOqUBGC6TSQHXslR%2BgnxjbWxwMsPtkWK7%2FMSqXbaSQnfNNIN7h9wtnqKroCxLKYvk3NSQyo0eSX5o9%2BXvZcl%2BFW%2BYefsgepRc2prwoVb3kQyEiqps5l2ofwMttrMVcEnHGAfVibhVj9mmd4G%2BtzJm8QRmWppzby9fcL3zX5AMSrT2gZsf7NvTvr6TdNR6UP0e8rKS9xUFcIMlcFNPDyP3tzPKEHXUVddg&X-Amz-Signature=d73f0d629e519565e408c4d9b70994b86fe850e7d53c49b6410fd80b142216f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
