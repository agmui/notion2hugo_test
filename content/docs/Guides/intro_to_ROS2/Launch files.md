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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2IQAQX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpEDzpqFjdUiiRHJ6ywYjo2dKXk1cLC9D%2BCDNsNk%2FvjAIgcXTqOqEKDO7nrbTMr3lzxYgCapsUDgmEm3YyHVMZ1jgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqLDa6By6%2B15aiuJCrcA1Mkuhdy9KJDD20lot%2BYjKRA%2Bqpgp4AtZ6PvM9fpbQMvvvNpuePuV9PHJjaN923U4vBwxQkke5Ddbt5V1te861gVW%2BnkZuOjglE5tKVhAEGtIQ3%2BL3gyi%2BijVRl8vHjWcqGMNZkkljh19KPqTrjZrsRioUIQKa0kU4w3MkENDE5It2znpYGtahM9qeTedZ0fzS%2FDSq%2FXKF3moagT0zKwhJ%2FAmPaNBCBsojNwVwd831tV8EkMa8sxJy5eWgBd4yW0dLFaugcRIefa7yqxIozbXkDMv35OsNVQppP79IjGRTkuJodcpw3vFItd0LTkCwigCqO%2B%2F3FVQFu9%2FcwZcASf4E48u%2BB24%2BUJy6k%2BzS7LtzL%2FE1HTP8NxupAfCyut%2FX6QTC%2BZlcJ4UyDdoeW5zGAIRHIdwUtefgCh0besetfT%2BLLELKzqM6jyY%2FZs6HmOfdqHdCtSAq8JZOZjOfa%2BbyQFmCIQt8U8xhrKKUV9xPXeOiZJYcNWTV9mLaE7Cw8snY7OnWFMAjnyNyCXp4%2Bhp%2BqKIxUpioPlKvoXS2qfafz75h1jczOMFYy0WXUv%2BvIRtVD69cgs%2FNxPCR0gebk06rJaMnzG%2BPz4TLMg%2B1uVmwSy%2BOgRVS26dPEPhZ84XEHuMM%2Bd%2BcMGOqUBq8jHKkozsIG7TYVh4UbMqepP65Fo3rtMX0zidn7v5llBTmvXoA%2BdTxh1FpITQpA9gOzdsehay2LNugHrorLBgAKhoigHyB%2BW%2FSHZBNza1d%2BER3GM8Zc65D7dxzIJX%2BbpDeuv0YYTOtQ%2B%2FpOvTzuSKagG1K0BuQGHEzKAFhVtPfQfMbXF28TWTBX854wP8NRYiuhiAEPgEtPQzoxrs2k13DlvNbjb&X-Amz-Signature=1a46c1c189d14d7905bc96bea7da9b5fb62419349a75720e134c2a7ece98e6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2IQAQX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpEDzpqFjdUiiRHJ6ywYjo2dKXk1cLC9D%2BCDNsNk%2FvjAIgcXTqOqEKDO7nrbTMr3lzxYgCapsUDgmEm3YyHVMZ1jgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqLDa6By6%2B15aiuJCrcA1Mkuhdy9KJDD20lot%2BYjKRA%2Bqpgp4AtZ6PvM9fpbQMvvvNpuePuV9PHJjaN923U4vBwxQkke5Ddbt5V1te861gVW%2BnkZuOjglE5tKVhAEGtIQ3%2BL3gyi%2BijVRl8vHjWcqGMNZkkljh19KPqTrjZrsRioUIQKa0kU4w3MkENDE5It2znpYGtahM9qeTedZ0fzS%2FDSq%2FXKF3moagT0zKwhJ%2FAmPaNBCBsojNwVwd831tV8EkMa8sxJy5eWgBd4yW0dLFaugcRIefa7yqxIozbXkDMv35OsNVQppP79IjGRTkuJodcpw3vFItd0LTkCwigCqO%2B%2F3FVQFu9%2FcwZcASf4E48u%2BB24%2BUJy6k%2BzS7LtzL%2FE1HTP8NxupAfCyut%2FX6QTC%2BZlcJ4UyDdoeW5zGAIRHIdwUtefgCh0besetfT%2BLLELKzqM6jyY%2FZs6HmOfdqHdCtSAq8JZOZjOfa%2BbyQFmCIQt8U8xhrKKUV9xPXeOiZJYcNWTV9mLaE7Cw8snY7OnWFMAjnyNyCXp4%2Bhp%2BqKIxUpioPlKvoXS2qfafz75h1jczOMFYy0WXUv%2BvIRtVD69cgs%2FNxPCR0gebk06rJaMnzG%2BPz4TLMg%2B1uVmwSy%2BOgRVS26dPEPhZ84XEHuMM%2Bd%2BcMGOqUBq8jHKkozsIG7TYVh4UbMqepP65Fo3rtMX0zidn7v5llBTmvXoA%2BdTxh1FpITQpA9gOzdsehay2LNugHrorLBgAKhoigHyB%2BW%2FSHZBNza1d%2BER3GM8Zc65D7dxzIJX%2BbpDeuv0YYTOtQ%2B%2FpOvTzuSKagG1K0BuQGHEzKAFhVtPfQfMbXF28TWTBX854wP8NRYiuhiAEPgEtPQzoxrs2k13DlvNbjb&X-Amz-Signature=d183628b7e068a70053434f1b1a1b080baff84882dcd10a7c042d5d24b78b706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2IQAQX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpEDzpqFjdUiiRHJ6ywYjo2dKXk1cLC9D%2BCDNsNk%2FvjAIgcXTqOqEKDO7nrbTMr3lzxYgCapsUDgmEm3YyHVMZ1jgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqLDa6By6%2B15aiuJCrcA1Mkuhdy9KJDD20lot%2BYjKRA%2Bqpgp4AtZ6PvM9fpbQMvvvNpuePuV9PHJjaN923U4vBwxQkke5Ddbt5V1te861gVW%2BnkZuOjglE5tKVhAEGtIQ3%2BL3gyi%2BijVRl8vHjWcqGMNZkkljh19KPqTrjZrsRioUIQKa0kU4w3MkENDE5It2znpYGtahM9qeTedZ0fzS%2FDSq%2FXKF3moagT0zKwhJ%2FAmPaNBCBsojNwVwd831tV8EkMa8sxJy5eWgBd4yW0dLFaugcRIefa7yqxIozbXkDMv35OsNVQppP79IjGRTkuJodcpw3vFItd0LTkCwigCqO%2B%2F3FVQFu9%2FcwZcASf4E48u%2BB24%2BUJy6k%2BzS7LtzL%2FE1HTP8NxupAfCyut%2FX6QTC%2BZlcJ4UyDdoeW5zGAIRHIdwUtefgCh0besetfT%2BLLELKzqM6jyY%2FZs6HmOfdqHdCtSAq8JZOZjOfa%2BbyQFmCIQt8U8xhrKKUV9xPXeOiZJYcNWTV9mLaE7Cw8snY7OnWFMAjnyNyCXp4%2Bhp%2BqKIxUpioPlKvoXS2qfafz75h1jczOMFYy0WXUv%2BvIRtVD69cgs%2FNxPCR0gebk06rJaMnzG%2BPz4TLMg%2B1uVmwSy%2BOgRVS26dPEPhZ84XEHuMM%2Bd%2BcMGOqUBq8jHKkozsIG7TYVh4UbMqepP65Fo3rtMX0zidn7v5llBTmvXoA%2BdTxh1FpITQpA9gOzdsehay2LNugHrorLBgAKhoigHyB%2BW%2FSHZBNza1d%2BER3GM8Zc65D7dxzIJX%2BbpDeuv0YYTOtQ%2B%2FpOvTzuSKagG1K0BuQGHEzKAFhVtPfQfMbXF28TWTBX854wP8NRYiuhiAEPgEtPQzoxrs2k13DlvNbjb&X-Amz-Signature=e8a73167813d7748f931a8aa2c8aab6f766ec9ae8e98679c64e35cd2c1b70d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
