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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPVJADX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsiIN0Qhxdwb70uYja%2Fw95IJcBnPALlYF4t4Ta6PhZAiEA9GpVD6adxWp3Q4VKkKrwU%2BgbjZyQnQ88K7CYBfN2zqsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkebyf9ss6tviG2SSrcA4g0yPrEwB735AvGRa83KtZxGS8juJ3ttnJLJ0kMDKNeavnNYKfmaMFDmSaMGqBR0jnxI2hW9QuGBWmM8Qcp22txfYpHHuFXiHKlFNOcrkEMKZHaE%2BxylcP%2BEPm4RAtEw4LIDPUdBVNx113ycJVIL2fQh%2BCznryeMBnfoGJrj0FCDxE5nk%2BhG4Lk%2FLxJUyjb5qfACLMj5GhKfiTK%2BLXRdch75NvKi0wFgfswWv4vvXCqIVHAx%2FO%2Bi78USaPw%2Bgy65dr%2B%2FdRDpfJfsK2xHff1fvS3Pd7RjC3Ke0x1jjKcX0y7w53Z59zy7oqiP7f5fD60dViKYSXkM%2B9AOkAkFFYM36IsVFU0H65w7chkICvwl0ywpGBgTwoujXiARR0DmzIpueBIiOCSmqDxIvHmjgCf%2BNGpW2xcKJwhrEKbJ2E%2FcqSPR8Fl47%2Bo0bW69HLlk4LuY52Xea6TZhA1iUfMEH7bpi7UwPtgaT3cKqjPnFVtFN2PoOBa%2B7ixZJjiauS%2FQf2XQE5Mzm1rRqGMWZNhjUFtXdTXXIQDstx7Ea37kfsNt4OEndCRDRONYZgF0wxniOLNxFRuG4nAFQjSKynYCvNT6VzpBtR8CeWrlmjq7nPO%2Be0fULw5VISyGzidyJIHML3i7cMGOqUBWP85w9BXDzOlcbj2koIulBk2m5rMG9DnHVLo3jfe2kehXUBLSconlTUyEy64hfLKAX%2FRae1T02axeHHNsGp9ZEks6s%2F9NEGIRGZzWe%2FpJgGXMoLkez0810vu9%2B5GoarHu1PXPNR2465v57npsaLG3R9nQsSM77hTfdIvIYrGRBs9bw9f9U8Dfoe5Xq7hk4Ryt2XWeBq9mTebPzhV1B1kujbIzUZF&X-Amz-Signature=b1ca3982a5a810104410bb7c50f7f31b9303b472438f268b672dfc85a15990a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPVJADX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsiIN0Qhxdwb70uYja%2Fw95IJcBnPALlYF4t4Ta6PhZAiEA9GpVD6adxWp3Q4VKkKrwU%2BgbjZyQnQ88K7CYBfN2zqsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkebyf9ss6tviG2SSrcA4g0yPrEwB735AvGRa83KtZxGS8juJ3ttnJLJ0kMDKNeavnNYKfmaMFDmSaMGqBR0jnxI2hW9QuGBWmM8Qcp22txfYpHHuFXiHKlFNOcrkEMKZHaE%2BxylcP%2BEPm4RAtEw4LIDPUdBVNx113ycJVIL2fQh%2BCznryeMBnfoGJrj0FCDxE5nk%2BhG4Lk%2FLxJUyjb5qfACLMj5GhKfiTK%2BLXRdch75NvKi0wFgfswWv4vvXCqIVHAx%2FO%2Bi78USaPw%2Bgy65dr%2B%2FdRDpfJfsK2xHff1fvS3Pd7RjC3Ke0x1jjKcX0y7w53Z59zy7oqiP7f5fD60dViKYSXkM%2B9AOkAkFFYM36IsVFU0H65w7chkICvwl0ywpGBgTwoujXiARR0DmzIpueBIiOCSmqDxIvHmjgCf%2BNGpW2xcKJwhrEKbJ2E%2FcqSPR8Fl47%2Bo0bW69HLlk4LuY52Xea6TZhA1iUfMEH7bpi7UwPtgaT3cKqjPnFVtFN2PoOBa%2B7ixZJjiauS%2FQf2XQE5Mzm1rRqGMWZNhjUFtXdTXXIQDstx7Ea37kfsNt4OEndCRDRONYZgF0wxniOLNxFRuG4nAFQjSKynYCvNT6VzpBtR8CeWrlmjq7nPO%2Be0fULw5VISyGzidyJIHML3i7cMGOqUBWP85w9BXDzOlcbj2koIulBk2m5rMG9DnHVLo3jfe2kehXUBLSconlTUyEy64hfLKAX%2FRae1T02axeHHNsGp9ZEks6s%2F9NEGIRGZzWe%2FpJgGXMoLkez0810vu9%2B5GoarHu1PXPNR2465v57npsaLG3R9nQsSM77hTfdIvIYrGRBs9bw9f9U8Dfoe5Xq7hk4Ryt2XWeBq9mTebPzhV1B1kujbIzUZF&X-Amz-Signature=0c2aab9ccb10549fdf2a44bd79540294d574d3eb0a15526dc501a4be05bb4208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPVJADX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsiIN0Qhxdwb70uYja%2Fw95IJcBnPALlYF4t4Ta6PhZAiEA9GpVD6adxWp3Q4VKkKrwU%2BgbjZyQnQ88K7CYBfN2zqsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkebyf9ss6tviG2SSrcA4g0yPrEwB735AvGRa83KtZxGS8juJ3ttnJLJ0kMDKNeavnNYKfmaMFDmSaMGqBR0jnxI2hW9QuGBWmM8Qcp22txfYpHHuFXiHKlFNOcrkEMKZHaE%2BxylcP%2BEPm4RAtEw4LIDPUdBVNx113ycJVIL2fQh%2BCznryeMBnfoGJrj0FCDxE5nk%2BhG4Lk%2FLxJUyjb5qfACLMj5GhKfiTK%2BLXRdch75NvKi0wFgfswWv4vvXCqIVHAx%2FO%2Bi78USaPw%2Bgy65dr%2B%2FdRDpfJfsK2xHff1fvS3Pd7RjC3Ke0x1jjKcX0y7w53Z59zy7oqiP7f5fD60dViKYSXkM%2B9AOkAkFFYM36IsVFU0H65w7chkICvwl0ywpGBgTwoujXiARR0DmzIpueBIiOCSmqDxIvHmjgCf%2BNGpW2xcKJwhrEKbJ2E%2FcqSPR8Fl47%2Bo0bW69HLlk4LuY52Xea6TZhA1iUfMEH7bpi7UwPtgaT3cKqjPnFVtFN2PoOBa%2B7ixZJjiauS%2FQf2XQE5Mzm1rRqGMWZNhjUFtXdTXXIQDstx7Ea37kfsNt4OEndCRDRONYZgF0wxniOLNxFRuG4nAFQjSKynYCvNT6VzpBtR8CeWrlmjq7nPO%2Be0fULw5VISyGzidyJIHML3i7cMGOqUBWP85w9BXDzOlcbj2koIulBk2m5rMG9DnHVLo3jfe2kehXUBLSconlTUyEy64hfLKAX%2FRae1T02axeHHNsGp9ZEks6s%2F9NEGIRGZzWe%2FpJgGXMoLkez0810vu9%2B5GoarHu1PXPNR2465v57npsaLG3R9nQsSM77hTfdIvIYrGRBs9bw9f9U8Dfoe5Xq7hk4Ryt2XWeBq9mTebPzhV1B1kujbIzUZF&X-Amz-Signature=6ca164c70b409ce2810f7a204521ec7ae6f2258ee572f307be6239340af2e07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
