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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4UENTO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEj1MClCT7uj9L9g%2B7spJ0sR5JpnIN1dAPu85OCaWsPAIgFhNLnwcBMNu%2B9hXG8HA6qnZKYjP9rBa%2BOFrmbBZOw%2FMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9hD7jCwjiC3AxwfCrcA0rziRVFYnBRPd6Js2VPFoeTA%2BpHM7gHi40eskSicKaTNL0AkP%2FkGaFFT5aOsymPkNBTQ4M%2B1XYOdrWrzIa8NITr%2BccWRss2H18jdanz2%2Fns7OEQUrC3DhI3Sg5SdZ1Xu4Tx7UVLzX2EojYu3wB4TZbN4YIuIhAgNW2HwevZmZJzpiw2v%2Fd3XoffR68m2D0j0xYQbTt4QTj5L8qyufkotGVHkTN0WT9c7CTSBJmJlY97geI6%2F2W39TIcvoxLogJrODpqIAajmZvH%2FEg%2FotFsObYPwiJ6kjssRF0bScppHsBy5eVuH6%2BNnvJ1Qj8mXpN02zAG8%2F1xmGAAiv%2Fl0IQzG7LA8OFanrZ4hQDnn3WwTAP5on5fu5xWTC1e31ccTWQHCdEb0HFt4hyXzc2pohwZCHBsOddHffYSQfzD34WFSXS%2FIL1Q%2B16O4DDJ1RWSIGUZr7OLbxGWHWfuJu%2Bw4A3xZR7dN0MBcGxPLtmRxT2xx4ff0S7kvuYi07NWNqIukiEu9Pm0wo4zRDKt0sL7ahys2kv%2B6TRe3dr%2FvKyyNw4zme2QWN5grB1KKdJj56M%2FKNIkcp8qall7%2BgBXTU97d6FfUJE0GULMwo9APWIM0wpp3JoNewrAffnjb2FN7M5UMKrmpsAGOqUBTWXLHugvpkwVXEEQiE2cNQvFuBPNfDv%2FzU%2FSn7NTh%2FKgxPoklRmimtkxt5pUDsDicMWikbclsXGdhVZKsqngj7d03qtPlBZWTgmayVthzjBvH9pdF3ADMggfIKqlw53m1rTD7JcLeU0I1yI7rI2SZVQ1fHrycq2QDjhWZtGw8HwS9Dc6GkbFemMF6w4ppbJRL2hwExDIRscvB0JUy65HFN31T9xv&X-Amz-Signature=6b3e7cf9f1812bde0cdd5f459a3abcb5c171a314905efbeb33d049f17bb89379&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4UENTO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEj1MClCT7uj9L9g%2B7spJ0sR5JpnIN1dAPu85OCaWsPAIgFhNLnwcBMNu%2B9hXG8HA6qnZKYjP9rBa%2BOFrmbBZOw%2FMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9hD7jCwjiC3AxwfCrcA0rziRVFYnBRPd6Js2VPFoeTA%2BpHM7gHi40eskSicKaTNL0AkP%2FkGaFFT5aOsymPkNBTQ4M%2B1XYOdrWrzIa8NITr%2BccWRss2H18jdanz2%2Fns7OEQUrC3DhI3Sg5SdZ1Xu4Tx7UVLzX2EojYu3wB4TZbN4YIuIhAgNW2HwevZmZJzpiw2v%2Fd3XoffR68m2D0j0xYQbTt4QTj5L8qyufkotGVHkTN0WT9c7CTSBJmJlY97geI6%2F2W39TIcvoxLogJrODpqIAajmZvH%2FEg%2FotFsObYPwiJ6kjssRF0bScppHsBy5eVuH6%2BNnvJ1Qj8mXpN02zAG8%2F1xmGAAiv%2Fl0IQzG7LA8OFanrZ4hQDnn3WwTAP5on5fu5xWTC1e31ccTWQHCdEb0HFt4hyXzc2pohwZCHBsOddHffYSQfzD34WFSXS%2FIL1Q%2B16O4DDJ1RWSIGUZr7OLbxGWHWfuJu%2Bw4A3xZR7dN0MBcGxPLtmRxT2xx4ff0S7kvuYi07NWNqIukiEu9Pm0wo4zRDKt0sL7ahys2kv%2B6TRe3dr%2FvKyyNw4zme2QWN5grB1KKdJj56M%2FKNIkcp8qall7%2BgBXTU97d6FfUJE0GULMwo9APWIM0wpp3JoNewrAffnjb2FN7M5UMKrmpsAGOqUBTWXLHugvpkwVXEEQiE2cNQvFuBPNfDv%2FzU%2FSn7NTh%2FKgxPoklRmimtkxt5pUDsDicMWikbclsXGdhVZKsqngj7d03qtPlBZWTgmayVthzjBvH9pdF3ADMggfIKqlw53m1rTD7JcLeU0I1yI7rI2SZVQ1fHrycq2QDjhWZtGw8HwS9Dc6GkbFemMF6w4ppbJRL2hwExDIRscvB0JUy65HFN31T9xv&X-Amz-Signature=84501cfaac13ff108f10d729cd7a5c85a6b70eedffe8d758cf8d16dba467460b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4UENTO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEj1MClCT7uj9L9g%2B7spJ0sR5JpnIN1dAPu85OCaWsPAIgFhNLnwcBMNu%2B9hXG8HA6qnZKYjP9rBa%2BOFrmbBZOw%2FMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9hD7jCwjiC3AxwfCrcA0rziRVFYnBRPd6Js2VPFoeTA%2BpHM7gHi40eskSicKaTNL0AkP%2FkGaFFT5aOsymPkNBTQ4M%2B1XYOdrWrzIa8NITr%2BccWRss2H18jdanz2%2Fns7OEQUrC3DhI3Sg5SdZ1Xu4Tx7UVLzX2EojYu3wB4TZbN4YIuIhAgNW2HwevZmZJzpiw2v%2Fd3XoffR68m2D0j0xYQbTt4QTj5L8qyufkotGVHkTN0WT9c7CTSBJmJlY97geI6%2F2W39TIcvoxLogJrODpqIAajmZvH%2FEg%2FotFsObYPwiJ6kjssRF0bScppHsBy5eVuH6%2BNnvJ1Qj8mXpN02zAG8%2F1xmGAAiv%2Fl0IQzG7LA8OFanrZ4hQDnn3WwTAP5on5fu5xWTC1e31ccTWQHCdEb0HFt4hyXzc2pohwZCHBsOddHffYSQfzD34WFSXS%2FIL1Q%2B16O4DDJ1RWSIGUZr7OLbxGWHWfuJu%2Bw4A3xZR7dN0MBcGxPLtmRxT2xx4ff0S7kvuYi07NWNqIukiEu9Pm0wo4zRDKt0sL7ahys2kv%2B6TRe3dr%2FvKyyNw4zme2QWN5grB1KKdJj56M%2FKNIkcp8qall7%2BgBXTU97d6FfUJE0GULMwo9APWIM0wpp3JoNewrAffnjb2FN7M5UMKrmpsAGOqUBTWXLHugvpkwVXEEQiE2cNQvFuBPNfDv%2FzU%2FSn7NTh%2FKgxPoklRmimtkxt5pUDsDicMWikbclsXGdhVZKsqngj7d03qtPlBZWTgmayVthzjBvH9pdF3ADMggfIKqlw53m1rTD7JcLeU0I1yI7rI2SZVQ1fHrycq2QDjhWZtGw8HwS9Dc6GkbFemMF6w4ppbJRL2hwExDIRscvB0JUy65HFN31T9xv&X-Amz-Signature=b049a8542701a5c09d21e984ba13b9969ec49e0cd6c56df57c3e5168acf57951&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
