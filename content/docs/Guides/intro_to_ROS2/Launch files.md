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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNKOR3H%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDS7LoXhZ50zF8Px8NuD13vkoCmCntl0VMsVGUiYiXbewIgWU5ShfW2UlzLRHM3RR2%2FUWd5%2BlXglXpVV1c1SchEnBgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWracUmtY8LvM5rCSrcA3DJxDfCLGRbqfVCaD6aO6qNkUBzZqwaNlqy3g4qIUYfuBhdmALDqnP6t90Jm%2FHOPfnMvx9u1vy0kRa71T4HWVLHYCT7ia64NnhUPU9PYPdWthmjaFW47qiJkQGQyDhZfzRjOFzTzKqJmDqb%2FF0ziXwn7r5txTwiaGtClV8eI65Brf6iv%2FwE5z9%2Fas%2Bv3Wg5uLb9fLorU%2FHcAPBF%2FUgqryW%2B4bDBt379oYewpHG9UR1DL%2F%2FJnOanMmD%2FRryQb2uQLixG9mUdcTKGzDl9x%2BAGLGPG5yBmQt8dGoisWPVZNDmuOvfkMTLF8CnYeaofyQXSrzaSGX68TmmcPzxBbgYEI%2FRybI3e2RnHmiZboYq%2FE5D0AjtiZJGtsIJ2KbrOfpnINp%2BKyhm0yA8ElvTzYVnlvvg%2FQyydHBRAJs6jog9ubJwCWgKYfWvBpV45x1ymNUeckQJzM2udvdXsTND2fYGUtByHfa%2BH56EdhGuGwBR%2FVn5aM5mtkfcFXYpQSCqRwUlYeky2MVk7Go2qSF9qBXQ9X7skNrgHI4%2BfXi31nfrcoLrspzaesHg0ACfm4u5HN4QfEdCUvztbGW3IbPBjol%2BZd%2FEu02yubs8QmM6gwNbjX%2FNAX2RBtkD1x%2FjyF7RKMKLblcAGOqUBiJILyIZjcinNZ1U9udewyj%2BxdsKNfXosmyuOP%2Bwou%2BzrJMYbMjoIgc4Pc7drDGe%2BjdNU%2BrxydxYgCSIlLWubxAoMgo7HJg1pUlwIPG%2FM1XNQpcVeq4hZ%2BfEBOyxohcx3dS8K%2BTX4sARh%2Fb4m%2FU%2B0meUS%2B%2Fq887d6ReoBrOWhumEf82o5vZQT%2BJmK4ghTvken%2BlUXuXt%2FAB2%2BJM09VQ6zK0torj8X&X-Amz-Signature=aa3a60955ef6dadbb37734383937326e2f4864cb02fbc2ffa3d4eb92116150ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNKOR3H%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDS7LoXhZ50zF8Px8NuD13vkoCmCntl0VMsVGUiYiXbewIgWU5ShfW2UlzLRHM3RR2%2FUWd5%2BlXglXpVV1c1SchEnBgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWracUmtY8LvM5rCSrcA3DJxDfCLGRbqfVCaD6aO6qNkUBzZqwaNlqy3g4qIUYfuBhdmALDqnP6t90Jm%2FHOPfnMvx9u1vy0kRa71T4HWVLHYCT7ia64NnhUPU9PYPdWthmjaFW47qiJkQGQyDhZfzRjOFzTzKqJmDqb%2FF0ziXwn7r5txTwiaGtClV8eI65Brf6iv%2FwE5z9%2Fas%2Bv3Wg5uLb9fLorU%2FHcAPBF%2FUgqryW%2B4bDBt379oYewpHG9UR1DL%2F%2FJnOanMmD%2FRryQb2uQLixG9mUdcTKGzDl9x%2BAGLGPG5yBmQt8dGoisWPVZNDmuOvfkMTLF8CnYeaofyQXSrzaSGX68TmmcPzxBbgYEI%2FRybI3e2RnHmiZboYq%2FE5D0AjtiZJGtsIJ2KbrOfpnINp%2BKyhm0yA8ElvTzYVnlvvg%2FQyydHBRAJs6jog9ubJwCWgKYfWvBpV45x1ymNUeckQJzM2udvdXsTND2fYGUtByHfa%2BH56EdhGuGwBR%2FVn5aM5mtkfcFXYpQSCqRwUlYeky2MVk7Go2qSF9qBXQ9X7skNrgHI4%2BfXi31nfrcoLrspzaesHg0ACfm4u5HN4QfEdCUvztbGW3IbPBjol%2BZd%2FEu02yubs8QmM6gwNbjX%2FNAX2RBtkD1x%2FjyF7RKMKLblcAGOqUBiJILyIZjcinNZ1U9udewyj%2BxdsKNfXosmyuOP%2Bwou%2BzrJMYbMjoIgc4Pc7drDGe%2BjdNU%2BrxydxYgCSIlLWubxAoMgo7HJg1pUlwIPG%2FM1XNQpcVeq4hZ%2BfEBOyxohcx3dS8K%2BTX4sARh%2Fb4m%2FU%2B0meUS%2B%2Fq887d6ReoBrOWhumEf82o5vZQT%2BJmK4ghTvken%2BlUXuXt%2FAB2%2BJM09VQ6zK0torj8X&X-Amz-Signature=35b56a1f7b6d8012d74eeafc3330874b44f411beea7980bd45cb33b80d6a6a22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNKOR3H%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDS7LoXhZ50zF8Px8NuD13vkoCmCntl0VMsVGUiYiXbewIgWU5ShfW2UlzLRHM3RR2%2FUWd5%2BlXglXpVV1c1SchEnBgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWracUmtY8LvM5rCSrcA3DJxDfCLGRbqfVCaD6aO6qNkUBzZqwaNlqy3g4qIUYfuBhdmALDqnP6t90Jm%2FHOPfnMvx9u1vy0kRa71T4HWVLHYCT7ia64NnhUPU9PYPdWthmjaFW47qiJkQGQyDhZfzRjOFzTzKqJmDqb%2FF0ziXwn7r5txTwiaGtClV8eI65Brf6iv%2FwE5z9%2Fas%2Bv3Wg5uLb9fLorU%2FHcAPBF%2FUgqryW%2B4bDBt379oYewpHG9UR1DL%2F%2FJnOanMmD%2FRryQb2uQLixG9mUdcTKGzDl9x%2BAGLGPG5yBmQt8dGoisWPVZNDmuOvfkMTLF8CnYeaofyQXSrzaSGX68TmmcPzxBbgYEI%2FRybI3e2RnHmiZboYq%2FE5D0AjtiZJGtsIJ2KbrOfpnINp%2BKyhm0yA8ElvTzYVnlvvg%2FQyydHBRAJs6jog9ubJwCWgKYfWvBpV45x1ymNUeckQJzM2udvdXsTND2fYGUtByHfa%2BH56EdhGuGwBR%2FVn5aM5mtkfcFXYpQSCqRwUlYeky2MVk7Go2qSF9qBXQ9X7skNrgHI4%2BfXi31nfrcoLrspzaesHg0ACfm4u5HN4QfEdCUvztbGW3IbPBjol%2BZd%2FEu02yubs8QmM6gwNbjX%2FNAX2RBtkD1x%2FjyF7RKMKLblcAGOqUBiJILyIZjcinNZ1U9udewyj%2BxdsKNfXosmyuOP%2Bwou%2BzrJMYbMjoIgc4Pc7drDGe%2BjdNU%2BrxydxYgCSIlLWubxAoMgo7HJg1pUlwIPG%2FM1XNQpcVeq4hZ%2BfEBOyxohcx3dS8K%2BTX4sARh%2Fb4m%2FU%2B0meUS%2B%2Fq887d6ReoBrOWhumEf82o5vZQT%2BJmK4ghTvken%2BlUXuXt%2FAB2%2BJM09VQ6zK0torj8X&X-Amz-Signature=fe8f7884e9af7e954eabcfa8ba6b2cd43b4bc3b29146906811571c4624634dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
