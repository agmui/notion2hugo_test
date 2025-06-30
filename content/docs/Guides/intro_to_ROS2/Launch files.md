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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2W4LDTP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpX0vldpAP7roVvFlboLhsrYBZ6NReJAbvWMnl1e3AoAiEAiIr9uyezYyqmpb1WlNy9ibGi0YRG8QK4D6VNu%2BXqG1AqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCS3sP3h%2FipkgdsCYSrcA%2FR2ERBGEdDf9AfUioE%2FJEOVw0u%2FW3BGNHLYbIuwv%2Fhz3JD0HTRuWXAbNUtxaXGkv2z5LRq4ZJVu5037RV15%2B7%2BHARvq0NKadDLA0F15Y69Vzb6DyNc3moNYacQi7Gl3hdnwMCnEqdew4B7Ja%2BbrJFTqiRF39g9Ok2bqn929E1OCJypYdlVZ8%2BP31x6r5KAUZE%2FA1f55shiVYHZ2F6bjedxEXWJReKdy1qwFX%2F%2BZj1Sk63%2Bys2WZ4K6%2FctR0dfvg%2FejT4d%2BBr6QFxJ8sVI5%2FbqaHBWk7tDnZfhfy50IOs7QysR%2FNr91%2F%2BUmiN8L9jpuYEKeA7kr%2FmLNAXbmqTMqiD8y5whF%2BJ37c0eTUL3cClzkCe%2FkR%2F8XtdbTmbK%2FhB8mJq7e1pxfUv9V4cV3drmGDy%2BaMO5cRxpyyl88ndHzruSrk0W%2FUtKB%2B9TQvBogtJtMSZvn1bSTtPZ95GeX3YT4ELSgygXMAFqmPeZCj1YV9dNbux0GqwjCpSyreqTrXKJYo4o33UIaNK6X2BLFWvbvE6jxSbx87PqaqYXEB1WdwwXUKAUdVBjLf4L7FK%2BW%2BlvW6qaY3jN4ISaHwPrZY%2BIaRCGWfN1lncuFoWamE78sCplZLXLorrpLZmjB2KLi7MNHNicMGOqUB9kpjll5eX1R2zM%2Fh8b23gAFIEoserjJz1ooXMTsvrOmRVNvFjdr29PcNqMMVMZ7HzLyeZECrBvPTrnMC3iQ2e%2BzaaT3jqgNPoFBnwwQiQWfw%2BsiWwhCFRKUF6fGNYR15Te06i5ono5V%2FsNGC0ZeAmi1ii3fSNZ0qyv4KU5lcVTgOLwFgiI8%2FoGdeD2L%2F8Y%2Fmr1243jfZ52D%2FUNm7lpl69Z3iGpJH&X-Amz-Signature=bdad304a5f60a925eda2b090619a340ce0b9a4d10aceaa1966fdfe489b7a350d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2W4LDTP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpX0vldpAP7roVvFlboLhsrYBZ6NReJAbvWMnl1e3AoAiEAiIr9uyezYyqmpb1WlNy9ibGi0YRG8QK4D6VNu%2BXqG1AqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCS3sP3h%2FipkgdsCYSrcA%2FR2ERBGEdDf9AfUioE%2FJEOVw0u%2FW3BGNHLYbIuwv%2Fhz3JD0HTRuWXAbNUtxaXGkv2z5LRq4ZJVu5037RV15%2B7%2BHARvq0NKadDLA0F15Y69Vzb6DyNc3moNYacQi7Gl3hdnwMCnEqdew4B7Ja%2BbrJFTqiRF39g9Ok2bqn929E1OCJypYdlVZ8%2BP31x6r5KAUZE%2FA1f55shiVYHZ2F6bjedxEXWJReKdy1qwFX%2F%2BZj1Sk63%2Bys2WZ4K6%2FctR0dfvg%2FejT4d%2BBr6QFxJ8sVI5%2FbqaHBWk7tDnZfhfy50IOs7QysR%2FNr91%2F%2BUmiN8L9jpuYEKeA7kr%2FmLNAXbmqTMqiD8y5whF%2BJ37c0eTUL3cClzkCe%2FkR%2F8XtdbTmbK%2FhB8mJq7e1pxfUv9V4cV3drmGDy%2BaMO5cRxpyyl88ndHzruSrk0W%2FUtKB%2B9TQvBogtJtMSZvn1bSTtPZ95GeX3YT4ELSgygXMAFqmPeZCj1YV9dNbux0GqwjCpSyreqTrXKJYo4o33UIaNK6X2BLFWvbvE6jxSbx87PqaqYXEB1WdwwXUKAUdVBjLf4L7FK%2BW%2BlvW6qaY3jN4ISaHwPrZY%2BIaRCGWfN1lncuFoWamE78sCplZLXLorrpLZmjB2KLi7MNHNicMGOqUB9kpjll5eX1R2zM%2Fh8b23gAFIEoserjJz1ooXMTsvrOmRVNvFjdr29PcNqMMVMZ7HzLyeZECrBvPTrnMC3iQ2e%2BzaaT3jqgNPoFBnwwQiQWfw%2BsiWwhCFRKUF6fGNYR15Te06i5ono5V%2FsNGC0ZeAmi1ii3fSNZ0qyv4KU5lcVTgOLwFgiI8%2FoGdeD2L%2F8Y%2Fmr1243jfZ52D%2FUNm7lpl69Z3iGpJH&X-Amz-Signature=0f206b53d318a51b9a132f9210e8b442665e7838550165e6c4d9dfe3b4bac61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2W4LDTP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpX0vldpAP7roVvFlboLhsrYBZ6NReJAbvWMnl1e3AoAiEAiIr9uyezYyqmpb1WlNy9ibGi0YRG8QK4D6VNu%2BXqG1AqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCS3sP3h%2FipkgdsCYSrcA%2FR2ERBGEdDf9AfUioE%2FJEOVw0u%2FW3BGNHLYbIuwv%2Fhz3JD0HTRuWXAbNUtxaXGkv2z5LRq4ZJVu5037RV15%2B7%2BHARvq0NKadDLA0F15Y69Vzb6DyNc3moNYacQi7Gl3hdnwMCnEqdew4B7Ja%2BbrJFTqiRF39g9Ok2bqn929E1OCJypYdlVZ8%2BP31x6r5KAUZE%2FA1f55shiVYHZ2F6bjedxEXWJReKdy1qwFX%2F%2BZj1Sk63%2Bys2WZ4K6%2FctR0dfvg%2FejT4d%2BBr6QFxJ8sVI5%2FbqaHBWk7tDnZfhfy50IOs7QysR%2FNr91%2F%2BUmiN8L9jpuYEKeA7kr%2FmLNAXbmqTMqiD8y5whF%2BJ37c0eTUL3cClzkCe%2FkR%2F8XtdbTmbK%2FhB8mJq7e1pxfUv9V4cV3drmGDy%2BaMO5cRxpyyl88ndHzruSrk0W%2FUtKB%2B9TQvBogtJtMSZvn1bSTtPZ95GeX3YT4ELSgygXMAFqmPeZCj1YV9dNbux0GqwjCpSyreqTrXKJYo4o33UIaNK6X2BLFWvbvE6jxSbx87PqaqYXEB1WdwwXUKAUdVBjLf4L7FK%2BW%2BlvW6qaY3jN4ISaHwPrZY%2BIaRCGWfN1lncuFoWamE78sCplZLXLorrpLZmjB2KLi7MNHNicMGOqUB9kpjll5eX1R2zM%2Fh8b23gAFIEoserjJz1ooXMTsvrOmRVNvFjdr29PcNqMMVMZ7HzLyeZECrBvPTrnMC3iQ2e%2BzaaT3jqgNPoFBnwwQiQWfw%2BsiWwhCFRKUF6fGNYR15Te06i5ono5V%2FsNGC0ZeAmi1ii3fSNZ0qyv4KU5lcVTgOLwFgiI8%2FoGdeD2L%2F8Y%2Fmr1243jfZ52D%2FUNm7lpl69Z3iGpJH&X-Amz-Signature=554bbb5ef399c86ff50f4a58bfba4428e55f2ed182fa819d788eeafde4387861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
