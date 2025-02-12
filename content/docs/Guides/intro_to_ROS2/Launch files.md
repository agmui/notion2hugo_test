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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3BZ62U%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFLy2UCXyCRBlD4aBh5OurSiZ3DeQGx9U7n1UvRMrErQIgUEdMTccsCiTOl5CZqBqTWnNAr6ZByQYIE2uzgFBY7usqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdRCdpfykLvo6zVoCrcAwicuYxX8Y92aJOaGFcsGF2Y5R4sZSRC1062WqkDjxSUSnC5HOp5VBTci3JFK0q8v9hRxogdjxM21ONw59fVcJAz1mN6Mdb9B7QEOMbv8SSonHu4Y7a1Yw%2B5WJZrFtxNfpeD5gKapA2bQZ6kT1GQ9bxIhyRaE57hWPwXz%2BQ%2BH5lVjvm5tRiDDp3eNvL6sEzDzbDj9m5Kb%2BV8KLfRr1FKHNVWRfrQiBts0fkfaToeADm3BKh1c8IYIorNjMcrSzQvmY3KTHhhy2CdX7pkhy1iwUxW1skbyhC2vVKbdw%2F5qby4XRATJqM5Df6xsHI1KsGQWyYTSlldg9LSuahhzmXkzg6Qadgho%2BlltQ%2BUB3jX9opgYDrFDgQsGTXSBiWwZFuEDtqNCYmO2OUCZ3lJHGBr5hDL04NHSAnkMKBGaQMUrqs32Ll9099TIago48nt9oIeZq3LQqk1RrWidYbLie7bIj3aD2ANT9oYsFkAIHCNl3JCuUvVL89PJTmgCFHj9XddU6mCcDgJumHz0oz963yvV2wxcmKlDhUdm%2BsBPgm%2BNXpIN1BtWZQb02Sxo%2B%2BBuvrIaD0VkdupO%2BPeq7MUfPJxASaBaa%2B7px0HJyu19u3dKs7tG6WEzsZ%2BorTLGUxjMNLur70GOqUBh12Olkh7zmyeBK3pwxJrwkEGJNqbgRiOte3nKAIw9hzF5cQKmeAyMNN2ZN2SVdwnFgU5DRkpNzNgsDOTSzhjIErEE5GMYihyK3D4hDtxJaaTHTn%2FHhFSWxo7pAkbkCyo4pDWHptteNWM3JRNlRtbb7btUX4qynSZkKQz%2FkKLJ5MulY1f8tHuvIXobOU%2BORu9IDYkJ8T78chh88SVieq8cApDtGDA&X-Amz-Signature=b9e1405d52faccab142e5b694268ec52d9d6e2df347effc428c20f8c0ac0ff05&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3BZ62U%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFLy2UCXyCRBlD4aBh5OurSiZ3DeQGx9U7n1UvRMrErQIgUEdMTccsCiTOl5CZqBqTWnNAr6ZByQYIE2uzgFBY7usqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdRCdpfykLvo6zVoCrcAwicuYxX8Y92aJOaGFcsGF2Y5R4sZSRC1062WqkDjxSUSnC5HOp5VBTci3JFK0q8v9hRxogdjxM21ONw59fVcJAz1mN6Mdb9B7QEOMbv8SSonHu4Y7a1Yw%2B5WJZrFtxNfpeD5gKapA2bQZ6kT1GQ9bxIhyRaE57hWPwXz%2BQ%2BH5lVjvm5tRiDDp3eNvL6sEzDzbDj9m5Kb%2BV8KLfRr1FKHNVWRfrQiBts0fkfaToeADm3BKh1c8IYIorNjMcrSzQvmY3KTHhhy2CdX7pkhy1iwUxW1skbyhC2vVKbdw%2F5qby4XRATJqM5Df6xsHI1KsGQWyYTSlldg9LSuahhzmXkzg6Qadgho%2BlltQ%2BUB3jX9opgYDrFDgQsGTXSBiWwZFuEDtqNCYmO2OUCZ3lJHGBr5hDL04NHSAnkMKBGaQMUrqs32Ll9099TIago48nt9oIeZq3LQqk1RrWidYbLie7bIj3aD2ANT9oYsFkAIHCNl3JCuUvVL89PJTmgCFHj9XddU6mCcDgJumHz0oz963yvV2wxcmKlDhUdm%2BsBPgm%2BNXpIN1BtWZQb02Sxo%2B%2BBuvrIaD0VkdupO%2BPeq7MUfPJxASaBaa%2B7px0HJyu19u3dKs7tG6WEzsZ%2BorTLGUxjMNLur70GOqUBh12Olkh7zmyeBK3pwxJrwkEGJNqbgRiOte3nKAIw9hzF5cQKmeAyMNN2ZN2SVdwnFgU5DRkpNzNgsDOTSzhjIErEE5GMYihyK3D4hDtxJaaTHTn%2FHhFSWxo7pAkbkCyo4pDWHptteNWM3JRNlRtbb7btUX4qynSZkKQz%2FkKLJ5MulY1f8tHuvIXobOU%2BORu9IDYkJ8T78chh88SVieq8cApDtGDA&X-Amz-Signature=0b64b2f97971a00ced6ff4e6caf22686894a6f16baa460053bc3dcad23a0b9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3BZ62U%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFLy2UCXyCRBlD4aBh5OurSiZ3DeQGx9U7n1UvRMrErQIgUEdMTccsCiTOl5CZqBqTWnNAr6ZByQYIE2uzgFBY7usqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdRCdpfykLvo6zVoCrcAwicuYxX8Y92aJOaGFcsGF2Y5R4sZSRC1062WqkDjxSUSnC5HOp5VBTci3JFK0q8v9hRxogdjxM21ONw59fVcJAz1mN6Mdb9B7QEOMbv8SSonHu4Y7a1Yw%2B5WJZrFtxNfpeD5gKapA2bQZ6kT1GQ9bxIhyRaE57hWPwXz%2BQ%2BH5lVjvm5tRiDDp3eNvL6sEzDzbDj9m5Kb%2BV8KLfRr1FKHNVWRfrQiBts0fkfaToeADm3BKh1c8IYIorNjMcrSzQvmY3KTHhhy2CdX7pkhy1iwUxW1skbyhC2vVKbdw%2F5qby4XRATJqM5Df6xsHI1KsGQWyYTSlldg9LSuahhzmXkzg6Qadgho%2BlltQ%2BUB3jX9opgYDrFDgQsGTXSBiWwZFuEDtqNCYmO2OUCZ3lJHGBr5hDL04NHSAnkMKBGaQMUrqs32Ll9099TIago48nt9oIeZq3LQqk1RrWidYbLie7bIj3aD2ANT9oYsFkAIHCNl3JCuUvVL89PJTmgCFHj9XddU6mCcDgJumHz0oz963yvV2wxcmKlDhUdm%2BsBPgm%2BNXpIN1BtWZQb02Sxo%2B%2BBuvrIaD0VkdupO%2BPeq7MUfPJxASaBaa%2B7px0HJyu19u3dKs7tG6WEzsZ%2BorTLGUxjMNLur70GOqUBh12Olkh7zmyeBK3pwxJrwkEGJNqbgRiOte3nKAIw9hzF5cQKmeAyMNN2ZN2SVdwnFgU5DRkpNzNgsDOTSzhjIErEE5GMYihyK3D4hDtxJaaTHTn%2FHhFSWxo7pAkbkCyo4pDWHptteNWM3JRNlRtbb7btUX4qynSZkKQz%2FkKLJ5MulY1f8tHuvIXobOU%2BORu9IDYkJ8T78chh88SVieq8cApDtGDA&X-Amz-Signature=e91cb1ea1406d5c760d886e4010f49152215edf653f22386302032ef8668d36c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
