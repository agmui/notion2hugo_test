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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCL2TNV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDA%2F70dtcEq94COwJLy%2FmGvFF%2FVnSBzGsS6g9xtzOT%2BtAIhAPlI24maQ24SDHMfV65gzAJqoOSrwU0XmEqB%2F11CVLkeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyoRDMGhhJCuFkuo74q3ANKVMSbhxT2B%2BvPcXGBHGBOGPYvNG2DnmmBgVD4Xwm0ZqyhZ21%2BAKl%2BMLAOCvscIeQ%2FMclJFKCvMKKTXUmCj6dipXxy1ptprSsObjSPSg%2BYQaaJXRz93qmnqm%2FVMF2aBDiKiMKZnzwzNJoJP4qrdp494okXggfa0IJ3EMS2GpFuP%2F7hn57nFdgEYM6bfnyz%2BPKiv4dBlYlTwH7EZ4Bp5dLSGqIQ%2BVQJilsGccyPm9wgiO%2BH08ipu9vAqOOkJ6TekYEwRaaIlegndgu%2FzmzbvUGucRvRavR%2Fm1F0DEhWxZV%2BFu6gkqCfd8AtfYoTvygerZNm3oNNa1TnabKY65Mcdz%2FN2RxqaBVqleGuZ1UqA1NsY8G1hJdKzbmGJCKda9v7dAYN4vplrIy0vXokQ9YB0pWKRe5jWAV4Fnes4HFAwS12KCAkQqbMOSBB4sQmor6tdbOHl7STux%2FFhvcDKiedQKDv3CATT1AhqurHEJFhEYCuGEcHdsFhLa3GJQG9G06hEzY6a1Cua4%2BCiltc%2BlMa35nZhTURLQHZ%2Fo7nV%2Bw9yscfvi%2FiTEl2eu9fKY8y5efX4gyuS%2B2x7T%2FhEad1tuYmCoNAQQ6mh9U6c4N9bkN6FhCNErmPWpTLXw88G%2BfdoDCw7u%2FCBjqkAT%2FIZPs649%2FDSn3%2BkqkGRgmCD4whii4okufFWk6%2Bh7n9%2FpbYe5ML1sG344KIRQ%2FmnYAFgQPtY8%2Bxei5DhQlz8Yv%2FRoZwioUXOPUw4kDuARAmq8fdqZr6u1LEH%2B9A4erTwujhgpK63DA%2Btfj6ISL4qZzHPCPU%2BYGyVUBo%2FatrmlxywzKl7a5WKGA7%2FMSaS%2ByTSx3tsS4srdz%2F%2F75Q73VEhxcvxkVm&X-Amz-Signature=0e5e91004354f3f6cf955ff9299079babc5fc6931f3629dc8663a528a8701e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCL2TNV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDA%2F70dtcEq94COwJLy%2FmGvFF%2FVnSBzGsS6g9xtzOT%2BtAIhAPlI24maQ24SDHMfV65gzAJqoOSrwU0XmEqB%2F11CVLkeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyoRDMGhhJCuFkuo74q3ANKVMSbhxT2B%2BvPcXGBHGBOGPYvNG2DnmmBgVD4Xwm0ZqyhZ21%2BAKl%2BMLAOCvscIeQ%2FMclJFKCvMKKTXUmCj6dipXxy1ptprSsObjSPSg%2BYQaaJXRz93qmnqm%2FVMF2aBDiKiMKZnzwzNJoJP4qrdp494okXggfa0IJ3EMS2GpFuP%2F7hn57nFdgEYM6bfnyz%2BPKiv4dBlYlTwH7EZ4Bp5dLSGqIQ%2BVQJilsGccyPm9wgiO%2BH08ipu9vAqOOkJ6TekYEwRaaIlegndgu%2FzmzbvUGucRvRavR%2Fm1F0DEhWxZV%2BFu6gkqCfd8AtfYoTvygerZNm3oNNa1TnabKY65Mcdz%2FN2RxqaBVqleGuZ1UqA1NsY8G1hJdKzbmGJCKda9v7dAYN4vplrIy0vXokQ9YB0pWKRe5jWAV4Fnes4HFAwS12KCAkQqbMOSBB4sQmor6tdbOHl7STux%2FFhvcDKiedQKDv3CATT1AhqurHEJFhEYCuGEcHdsFhLa3GJQG9G06hEzY6a1Cua4%2BCiltc%2BlMa35nZhTURLQHZ%2Fo7nV%2Bw9yscfvi%2FiTEl2eu9fKY8y5efX4gyuS%2B2x7T%2FhEad1tuYmCoNAQQ6mh9U6c4N9bkN6FhCNErmPWpTLXw88G%2BfdoDCw7u%2FCBjqkAT%2FIZPs649%2FDSn3%2BkqkGRgmCD4whii4okufFWk6%2Bh7n9%2FpbYe5ML1sG344KIRQ%2FmnYAFgQPtY8%2Bxei5DhQlz8Yv%2FRoZwioUXOPUw4kDuARAmq8fdqZr6u1LEH%2B9A4erTwujhgpK63DA%2Btfj6ISL4qZzHPCPU%2BYGyVUBo%2FatrmlxywzKl7a5WKGA7%2FMSaS%2ByTSx3tsS4srdz%2F%2F75Q73VEhxcvxkVm&X-Amz-Signature=f3b8b7c86637fc1593771db7324d5ba7b5d07cfe057beebe200c4d35e41b9a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCL2TNV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDA%2F70dtcEq94COwJLy%2FmGvFF%2FVnSBzGsS6g9xtzOT%2BtAIhAPlI24maQ24SDHMfV65gzAJqoOSrwU0XmEqB%2F11CVLkeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyoRDMGhhJCuFkuo74q3ANKVMSbhxT2B%2BvPcXGBHGBOGPYvNG2DnmmBgVD4Xwm0ZqyhZ21%2BAKl%2BMLAOCvscIeQ%2FMclJFKCvMKKTXUmCj6dipXxy1ptprSsObjSPSg%2BYQaaJXRz93qmnqm%2FVMF2aBDiKiMKZnzwzNJoJP4qrdp494okXggfa0IJ3EMS2GpFuP%2F7hn57nFdgEYM6bfnyz%2BPKiv4dBlYlTwH7EZ4Bp5dLSGqIQ%2BVQJilsGccyPm9wgiO%2BH08ipu9vAqOOkJ6TekYEwRaaIlegndgu%2FzmzbvUGucRvRavR%2Fm1F0DEhWxZV%2BFu6gkqCfd8AtfYoTvygerZNm3oNNa1TnabKY65Mcdz%2FN2RxqaBVqleGuZ1UqA1NsY8G1hJdKzbmGJCKda9v7dAYN4vplrIy0vXokQ9YB0pWKRe5jWAV4Fnes4HFAwS12KCAkQqbMOSBB4sQmor6tdbOHl7STux%2FFhvcDKiedQKDv3CATT1AhqurHEJFhEYCuGEcHdsFhLa3GJQG9G06hEzY6a1Cua4%2BCiltc%2BlMa35nZhTURLQHZ%2Fo7nV%2Bw9yscfvi%2FiTEl2eu9fKY8y5efX4gyuS%2B2x7T%2FhEad1tuYmCoNAQQ6mh9U6c4N9bkN6FhCNErmPWpTLXw88G%2BfdoDCw7u%2FCBjqkAT%2FIZPs649%2FDSn3%2BkqkGRgmCD4whii4okufFWk6%2Bh7n9%2FpbYe5ML1sG344KIRQ%2FmnYAFgQPtY8%2Bxei5DhQlz8Yv%2FRoZwioUXOPUw4kDuARAmq8fdqZr6u1LEH%2B9A4erTwujhgpK63DA%2Btfj6ISL4qZzHPCPU%2BYGyVUBo%2FatrmlxywzKl7a5WKGA7%2FMSaS%2ByTSx3tsS4srdz%2F%2F75Q73VEhxcvxkVm&X-Amz-Signature=eae7efb6e53858faeb5470a20c336336cfdf18cbbb35e3bbd64f6a6c6d57bd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
