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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTG7E37R%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgmBaU%2BCesVfHkZlChzZdq%2FLG8r%2Bluez8sICSGcOpgmAiEA2tk9vS4LK8qSOS6hPwBnd3%2FmbdDb1p9YMiINFW%2Bie70q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD6og4PauBJshZxPoCrcA%2F%2BbpQX9kYUWqQB4QD43p76aIWJtbygEoq4tV3JZWNn4CjpFjDkPnjFHZQQCUSs5UZWuxQjS4aILo9mvbOsmzaXB06XjqAY6RsHSn6OBloqCg%2Bwakpk%2BZWscJAjnvH7weZfYSfB0OswjSdms7zyzgYE7QzWip%2FsKpad0Sm4gEmY2wje2XprqxpqaKEP%2B4E0RCkeo%2FZlKKa8AgnenI3UQpuTJnip%2F3Po5j1YUq%2FT28MjytlLNGO2eHhzkE4kbwl65XiLYrkN4buJ2%2F5jwII7TTF%2BindX0pKda0L34A1NG1lvDO5eGY9mR7RNM3D8ug29Gt7B1XNimwCa5jZ0IK4MQZyoUo7rpPvLg8VJjmyK%2B4YmSqa3SwzKV%2FSLBn%2FFrzjsUOwwVFKBFpqnjRiH1S2Q1fHW2h5vngQFhIbfSUCCpHdy%2B5ZYw%2BtylIiq6IrbvT0AilAa9kfUj6m7kDtneF4dh40iN2vNA2EBwuijFqO%2Bi8YwZj6iiCy0Z0iMYrvA6grYDhrHtNEDWdA%2BciigtuIYp8a9GKtkG4cSFrkRkDHmMI7mHfzmR9Hqg%2FY15WPiDESQCLmZhLFKqmnRYNOXlUjTrYSSkzNRG4usos3hdOHuNQqsHd0t50S84jo0cr3IOMKKnxcIGOqUBVkmsn0UJ%2BcWOSw%2FlBeoCGSRXhvbKXAEGgRtR1dJmwaJ6I6IUR%2FwKUQQZDqRtq0E9Gp7zJJGqYlbRmdht7eg9Oh8g0FKcPixMukBlIG8FHJLoGNWuT%2F%2BGu%2Bd9Pv5O66wIJXD0nfpNsV81EykF%2FzHnDkNKm4EwgsJtSuMQewhIdGm9LXH7PHY8cT6JaciN9Nl1pI495qVyWC%2BpCcVfe2lL1fQA8NSL&X-Amz-Signature=5c223fbf5300ea993dc1b50c6fcf5f4fb2d9385016d41d367eb9d0589ade792b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTG7E37R%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgmBaU%2BCesVfHkZlChzZdq%2FLG8r%2Bluez8sICSGcOpgmAiEA2tk9vS4LK8qSOS6hPwBnd3%2FmbdDb1p9YMiINFW%2Bie70q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD6og4PauBJshZxPoCrcA%2F%2BbpQX9kYUWqQB4QD43p76aIWJtbygEoq4tV3JZWNn4CjpFjDkPnjFHZQQCUSs5UZWuxQjS4aILo9mvbOsmzaXB06XjqAY6RsHSn6OBloqCg%2Bwakpk%2BZWscJAjnvH7weZfYSfB0OswjSdms7zyzgYE7QzWip%2FsKpad0Sm4gEmY2wje2XprqxpqaKEP%2B4E0RCkeo%2FZlKKa8AgnenI3UQpuTJnip%2F3Po5j1YUq%2FT28MjytlLNGO2eHhzkE4kbwl65XiLYrkN4buJ2%2F5jwII7TTF%2BindX0pKda0L34A1NG1lvDO5eGY9mR7RNM3D8ug29Gt7B1XNimwCa5jZ0IK4MQZyoUo7rpPvLg8VJjmyK%2B4YmSqa3SwzKV%2FSLBn%2FFrzjsUOwwVFKBFpqnjRiH1S2Q1fHW2h5vngQFhIbfSUCCpHdy%2B5ZYw%2BtylIiq6IrbvT0AilAa9kfUj6m7kDtneF4dh40iN2vNA2EBwuijFqO%2Bi8YwZj6iiCy0Z0iMYrvA6grYDhrHtNEDWdA%2BciigtuIYp8a9GKtkG4cSFrkRkDHmMI7mHfzmR9Hqg%2FY15WPiDESQCLmZhLFKqmnRYNOXlUjTrYSSkzNRG4usos3hdOHuNQqsHd0t50S84jo0cr3IOMKKnxcIGOqUBVkmsn0UJ%2BcWOSw%2FlBeoCGSRXhvbKXAEGgRtR1dJmwaJ6I6IUR%2FwKUQQZDqRtq0E9Gp7zJJGqYlbRmdht7eg9Oh8g0FKcPixMukBlIG8FHJLoGNWuT%2F%2BGu%2Bd9Pv5O66wIJXD0nfpNsV81EykF%2FzHnDkNKm4EwgsJtSuMQewhIdGm9LXH7PHY8cT6JaciN9Nl1pI495qVyWC%2BpCcVfe2lL1fQA8NSL&X-Amz-Signature=3e4e9e41abe97a6358c5b7c522f73c25ef27b8f41541072953c8f60bfb795644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTG7E37R%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgmBaU%2BCesVfHkZlChzZdq%2FLG8r%2Bluez8sICSGcOpgmAiEA2tk9vS4LK8qSOS6hPwBnd3%2FmbdDb1p9YMiINFW%2Bie70q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD6og4PauBJshZxPoCrcA%2F%2BbpQX9kYUWqQB4QD43p76aIWJtbygEoq4tV3JZWNn4CjpFjDkPnjFHZQQCUSs5UZWuxQjS4aILo9mvbOsmzaXB06XjqAY6RsHSn6OBloqCg%2Bwakpk%2BZWscJAjnvH7weZfYSfB0OswjSdms7zyzgYE7QzWip%2FsKpad0Sm4gEmY2wje2XprqxpqaKEP%2B4E0RCkeo%2FZlKKa8AgnenI3UQpuTJnip%2F3Po5j1YUq%2FT28MjytlLNGO2eHhzkE4kbwl65XiLYrkN4buJ2%2F5jwII7TTF%2BindX0pKda0L34A1NG1lvDO5eGY9mR7RNM3D8ug29Gt7B1XNimwCa5jZ0IK4MQZyoUo7rpPvLg8VJjmyK%2B4YmSqa3SwzKV%2FSLBn%2FFrzjsUOwwVFKBFpqnjRiH1S2Q1fHW2h5vngQFhIbfSUCCpHdy%2B5ZYw%2BtylIiq6IrbvT0AilAa9kfUj6m7kDtneF4dh40iN2vNA2EBwuijFqO%2Bi8YwZj6iiCy0Z0iMYrvA6grYDhrHtNEDWdA%2BciigtuIYp8a9GKtkG4cSFrkRkDHmMI7mHfzmR9Hqg%2FY15WPiDESQCLmZhLFKqmnRYNOXlUjTrYSSkzNRG4usos3hdOHuNQqsHd0t50S84jo0cr3IOMKKnxcIGOqUBVkmsn0UJ%2BcWOSw%2FlBeoCGSRXhvbKXAEGgRtR1dJmwaJ6I6IUR%2FwKUQQZDqRtq0E9Gp7zJJGqYlbRmdht7eg9Oh8g0FKcPixMukBlIG8FHJLoGNWuT%2F%2BGu%2Bd9Pv5O66wIJXD0nfpNsV81EykF%2FzHnDkNKm4EwgsJtSuMQewhIdGm9LXH7PHY8cT6JaciN9Nl1pI495qVyWC%2BpCcVfe2lL1fQA8NSL&X-Amz-Signature=1444140b21366b0e0b4df58864b50e66c1d3c672b88c1f72576d60cc3ae6bbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
