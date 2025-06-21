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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5LQHLF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUeEeKV%2Fkh8oR5nesm5nFymHKE5XGYJkWTGt9o6GnylQIgceuJPMRFQ%2FePMofFSMB5CR12wj%2Flrg7wgPhuz0HMHT0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2I%2FP1yRq2srcsJLyrcAyymZ2VPxYKVewrymDVMjISqAMdiUrfnjnqtpi34PhMdViCdtKsZoFFEItcmamRLOkEhbXdBn38ss9k656Za%2BYtBGGG6VbYyHvmc1jNLS7Kjz0n1gmWmMF%2BHrBAzqFIZ7JhfkmuO9ydg1RfB1tbCe5dtku7WliMieiDLhE3%2F7nypT7FHWtKWyzqzpVDNILfadTx4dWV0FGKexJsHZe0SHzK607U%2BIMZEZUilfjKHrkHL%2FrekFgukfNq4SEdnEKuO30%2FbVIdYnePL%2FKeT6XOnAkHFcvgUfnIs3FG4646kKXBe2UCzYnVpwWmJWdDAlgSU5y2fOrSbfrp116WlPLa7T0VcdrKjDeBBCRYcott1TpIctsoc5CyCGPqLm4YnjKOEsppmRMbDneu6o0nS002wZGXk15mLgOmefR0sOt4BGDdy86Q27ad9Dr1YrAMtv7EM1ggPddrAUKWjgmd6wB2suAYbwN4GHaBYwGYzpTjXECKfIcUZ0Tn4kxLR96B6qKNDEA89ZTjXinufgKeTZDWwSjFS%2FBAQHp0qt06NC6woEXVHlDTEQeEbItj0ZYuxAjLJbufu2sOTVpmFvE57x7yGcGioFDuNPxvHV7nBvJGNHZBD155qZ1Xlx8U4oMo9MI3b18IGOqUBEWPTkCwFQUqGVnfroKFDwf8kQKwucro30phDnVdehmipL4%2F%2B9AiSBA7%2BjuVZSYTl0EwseLtDJJxYUNDjp4D1uFOGuB7S8o5wJ74K%2BYamWW05SOhHOEFKTbvIA2sGFu7pSMHpqFPknps3P1tHiIDHESyqKJj0wvXq1ctL%2FIYTTLenAe60qbtBpjl%2FOoOt%2B07Yr1s4LF8qe6UcEHkyGSkw1w9JfoJm&X-Amz-Signature=5c4ee6b281aa4a4340543b0f6f463835f3ce321a1c83f24e92139617e53e130b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5LQHLF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUeEeKV%2Fkh8oR5nesm5nFymHKE5XGYJkWTGt9o6GnylQIgceuJPMRFQ%2FePMofFSMB5CR12wj%2Flrg7wgPhuz0HMHT0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2I%2FP1yRq2srcsJLyrcAyymZ2VPxYKVewrymDVMjISqAMdiUrfnjnqtpi34PhMdViCdtKsZoFFEItcmamRLOkEhbXdBn38ss9k656Za%2BYtBGGG6VbYyHvmc1jNLS7Kjz0n1gmWmMF%2BHrBAzqFIZ7JhfkmuO9ydg1RfB1tbCe5dtku7WliMieiDLhE3%2F7nypT7FHWtKWyzqzpVDNILfadTx4dWV0FGKexJsHZe0SHzK607U%2BIMZEZUilfjKHrkHL%2FrekFgukfNq4SEdnEKuO30%2FbVIdYnePL%2FKeT6XOnAkHFcvgUfnIs3FG4646kKXBe2UCzYnVpwWmJWdDAlgSU5y2fOrSbfrp116WlPLa7T0VcdrKjDeBBCRYcott1TpIctsoc5CyCGPqLm4YnjKOEsppmRMbDneu6o0nS002wZGXk15mLgOmefR0sOt4BGDdy86Q27ad9Dr1YrAMtv7EM1ggPddrAUKWjgmd6wB2suAYbwN4GHaBYwGYzpTjXECKfIcUZ0Tn4kxLR96B6qKNDEA89ZTjXinufgKeTZDWwSjFS%2FBAQHp0qt06NC6woEXVHlDTEQeEbItj0ZYuxAjLJbufu2sOTVpmFvE57x7yGcGioFDuNPxvHV7nBvJGNHZBD155qZ1Xlx8U4oMo9MI3b18IGOqUBEWPTkCwFQUqGVnfroKFDwf8kQKwucro30phDnVdehmipL4%2F%2B9AiSBA7%2BjuVZSYTl0EwseLtDJJxYUNDjp4D1uFOGuB7S8o5wJ74K%2BYamWW05SOhHOEFKTbvIA2sGFu7pSMHpqFPknps3P1tHiIDHESyqKJj0wvXq1ctL%2FIYTTLenAe60qbtBpjl%2FOoOt%2B07Yr1s4LF8qe6UcEHkyGSkw1w9JfoJm&X-Amz-Signature=ea9de18f018d7946b64192d1fe461bedf45a92f198f025018a2ab6900ce70d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5LQHLF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUeEeKV%2Fkh8oR5nesm5nFymHKE5XGYJkWTGt9o6GnylQIgceuJPMRFQ%2FePMofFSMB5CR12wj%2Flrg7wgPhuz0HMHT0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2I%2FP1yRq2srcsJLyrcAyymZ2VPxYKVewrymDVMjISqAMdiUrfnjnqtpi34PhMdViCdtKsZoFFEItcmamRLOkEhbXdBn38ss9k656Za%2BYtBGGG6VbYyHvmc1jNLS7Kjz0n1gmWmMF%2BHrBAzqFIZ7JhfkmuO9ydg1RfB1tbCe5dtku7WliMieiDLhE3%2F7nypT7FHWtKWyzqzpVDNILfadTx4dWV0FGKexJsHZe0SHzK607U%2BIMZEZUilfjKHrkHL%2FrekFgukfNq4SEdnEKuO30%2FbVIdYnePL%2FKeT6XOnAkHFcvgUfnIs3FG4646kKXBe2UCzYnVpwWmJWdDAlgSU5y2fOrSbfrp116WlPLa7T0VcdrKjDeBBCRYcott1TpIctsoc5CyCGPqLm4YnjKOEsppmRMbDneu6o0nS002wZGXk15mLgOmefR0sOt4BGDdy86Q27ad9Dr1YrAMtv7EM1ggPddrAUKWjgmd6wB2suAYbwN4GHaBYwGYzpTjXECKfIcUZ0Tn4kxLR96B6qKNDEA89ZTjXinufgKeTZDWwSjFS%2FBAQHp0qt06NC6woEXVHlDTEQeEbItj0ZYuxAjLJbufu2sOTVpmFvE57x7yGcGioFDuNPxvHV7nBvJGNHZBD155qZ1Xlx8U4oMo9MI3b18IGOqUBEWPTkCwFQUqGVnfroKFDwf8kQKwucro30phDnVdehmipL4%2F%2B9AiSBA7%2BjuVZSYTl0EwseLtDJJxYUNDjp4D1uFOGuB7S8o5wJ74K%2BYamWW05SOhHOEFKTbvIA2sGFu7pSMHpqFPknps3P1tHiIDHESyqKJj0wvXq1ctL%2FIYTTLenAe60qbtBpjl%2FOoOt%2B07Yr1s4LF8qe6UcEHkyGSkw1w9JfoJm&X-Amz-Signature=009c2cb46317903d6169f5c2ea2b6998626bd4d69d36bf0ed16b0701250b93ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
