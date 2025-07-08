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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVTBO6X%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTYMr32c0KVNItyJ7oue79g2ezuQapefz7K0XZu2VbEgIgfujWv45TnRQ7Ny%2FNddONYccMEsmryFi429V2TTcdXiwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2ur6yG%2BA5KXE%2BHUyrcAy2jxhfwyK6Kh5Zzow7L736o7c%2BJofGAwxwGaJTExxKNIRqDelQpCYYHUj%2Bnx9%2F38jtsQe9iBc2Sxfv%2B%2FErfW8mAc1frTiWxGk9NLvSsOb0vEJFLxnwEqeCN7B%2FVHZg8AlyG1tOLp48rt4AeD%2FEYpuvOGjRECBpl7MnzfEWo2Dmd2eAcQgRDAf89BAXhyCLwzxyfGvn9ZHg%2FaSu3H6GseCr0mg6rfN0srAXmSj7Y%2F7lAMIQ60OLnqJiYre4sktUDfqolKvxT2KD9aRk4MKtIVa28p%2FM2tTcmDvJJXMqPmGfQdWNfTvQm0mhXkXmI%2BRXUubT1Yga%2FOiV0pulHJ9C6B%2FFROMp0Wjb8NZFGEZKUOkceGVTpN%2BZtI60zM1%2B%2BgExqs7iVcfLD2bRgtKUszR9x4xdGUA3sa7%2BV%2FvIuIKeL%2FE2YUn3uJL%2B0XoKjspHZW9ezSHCixNNmy%2FN4cDt0zREo8zibXUf7axJBZFH9mAczPg5QQ2Y44PLTDyigxedL1OynUHm%2FxZvA8R%2BiCceqyegP43o4vr6UCCCHTtmzBX7lviBLSL%2FO1ffgRdbulKsY32zBlTRSVB95q3YfmpUI0RNdZ0HhNDivA9gcXt9tb%2By9rl7CW5bZ9VjzmXUnAJnQMM%2BttcMGOqUBn2nyPl9IVCtiW3sMLovWt0S38NNJkAYhhF9%2FgCa3UrVicguCmCO9wB37Gmap1ZFhaXXIeeIcFw%2BSOiSzs3FutWqEyRqmN7KQYQmcByYYq283TrgXqKhrJcFbr5wDOaHQMI4H0uv%2BAaGe9ggj0tg%2FHGCrVg5pyLBNpNPC0d6Rfv95rH4lhd012jCqL66YIpVgiyzVn4cWiHdVIB1Q6uFRMpafMqHK&X-Amz-Signature=b37482512f1d571225f179d9c14ea0a9866e77f24738ffd23a847496ef9c2d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVTBO6X%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTYMr32c0KVNItyJ7oue79g2ezuQapefz7K0XZu2VbEgIgfujWv45TnRQ7Ny%2FNddONYccMEsmryFi429V2TTcdXiwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2ur6yG%2BA5KXE%2BHUyrcAy2jxhfwyK6Kh5Zzow7L736o7c%2BJofGAwxwGaJTExxKNIRqDelQpCYYHUj%2Bnx9%2F38jtsQe9iBc2Sxfv%2B%2FErfW8mAc1frTiWxGk9NLvSsOb0vEJFLxnwEqeCN7B%2FVHZg8AlyG1tOLp48rt4AeD%2FEYpuvOGjRECBpl7MnzfEWo2Dmd2eAcQgRDAf89BAXhyCLwzxyfGvn9ZHg%2FaSu3H6GseCr0mg6rfN0srAXmSj7Y%2F7lAMIQ60OLnqJiYre4sktUDfqolKvxT2KD9aRk4MKtIVa28p%2FM2tTcmDvJJXMqPmGfQdWNfTvQm0mhXkXmI%2BRXUubT1Yga%2FOiV0pulHJ9C6B%2FFROMp0Wjb8NZFGEZKUOkceGVTpN%2BZtI60zM1%2B%2BgExqs7iVcfLD2bRgtKUszR9x4xdGUA3sa7%2BV%2FvIuIKeL%2FE2YUn3uJL%2B0XoKjspHZW9ezSHCixNNmy%2FN4cDt0zREo8zibXUf7axJBZFH9mAczPg5QQ2Y44PLTDyigxedL1OynUHm%2FxZvA8R%2BiCceqyegP43o4vr6UCCCHTtmzBX7lviBLSL%2FO1ffgRdbulKsY32zBlTRSVB95q3YfmpUI0RNdZ0HhNDivA9gcXt9tb%2By9rl7CW5bZ9VjzmXUnAJnQMM%2BttcMGOqUBn2nyPl9IVCtiW3sMLovWt0S38NNJkAYhhF9%2FgCa3UrVicguCmCO9wB37Gmap1ZFhaXXIeeIcFw%2BSOiSzs3FutWqEyRqmN7KQYQmcByYYq283TrgXqKhrJcFbr5wDOaHQMI4H0uv%2BAaGe9ggj0tg%2FHGCrVg5pyLBNpNPC0d6Rfv95rH4lhd012jCqL66YIpVgiyzVn4cWiHdVIB1Q6uFRMpafMqHK&X-Amz-Signature=a5e37f787d987edc6f0b89bf863918cded3b47d8ad88ede0e36eedd5bfbcddf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVTBO6X%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTYMr32c0KVNItyJ7oue79g2ezuQapefz7K0XZu2VbEgIgfujWv45TnRQ7Ny%2FNddONYccMEsmryFi429V2TTcdXiwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2ur6yG%2BA5KXE%2BHUyrcAy2jxhfwyK6Kh5Zzow7L736o7c%2BJofGAwxwGaJTExxKNIRqDelQpCYYHUj%2Bnx9%2F38jtsQe9iBc2Sxfv%2B%2FErfW8mAc1frTiWxGk9NLvSsOb0vEJFLxnwEqeCN7B%2FVHZg8AlyG1tOLp48rt4AeD%2FEYpuvOGjRECBpl7MnzfEWo2Dmd2eAcQgRDAf89BAXhyCLwzxyfGvn9ZHg%2FaSu3H6GseCr0mg6rfN0srAXmSj7Y%2F7lAMIQ60OLnqJiYre4sktUDfqolKvxT2KD9aRk4MKtIVa28p%2FM2tTcmDvJJXMqPmGfQdWNfTvQm0mhXkXmI%2BRXUubT1Yga%2FOiV0pulHJ9C6B%2FFROMp0Wjb8NZFGEZKUOkceGVTpN%2BZtI60zM1%2B%2BgExqs7iVcfLD2bRgtKUszR9x4xdGUA3sa7%2BV%2FvIuIKeL%2FE2YUn3uJL%2B0XoKjspHZW9ezSHCixNNmy%2FN4cDt0zREo8zibXUf7axJBZFH9mAczPg5QQ2Y44PLTDyigxedL1OynUHm%2FxZvA8R%2BiCceqyegP43o4vr6UCCCHTtmzBX7lviBLSL%2FO1ffgRdbulKsY32zBlTRSVB95q3YfmpUI0RNdZ0HhNDivA9gcXt9tb%2By9rl7CW5bZ9VjzmXUnAJnQMM%2BttcMGOqUBn2nyPl9IVCtiW3sMLovWt0S38NNJkAYhhF9%2FgCa3UrVicguCmCO9wB37Gmap1ZFhaXXIeeIcFw%2BSOiSzs3FutWqEyRqmN7KQYQmcByYYq283TrgXqKhrJcFbr5wDOaHQMI4H0uv%2BAaGe9ggj0tg%2FHGCrVg5pyLBNpNPC0d6Rfv95rH4lhd012jCqL66YIpVgiyzVn4cWiHdVIB1Q6uFRMpafMqHK&X-Amz-Signature=702070d4e82368a161bff5d5705f948ab7f11c9aeaa496bdc6216aa8d9c58c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
