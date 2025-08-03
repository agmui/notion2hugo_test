---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBNR2I5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt7ye4kpbBkSRBnCYuGrxXLaFrZ26aRiHi0dNwaV4p0AiEA%2BiuTSfE6UeKKuDETlNORnXIVGRg03fwnPzEKeD6l3B8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOgeggvMZQIH5nh6TSrcAyr9mQzM7Lf4KiCTVgaxfE8KiAt3C%2FNEfIia2mReIIIQf3HQyHwLnFeoK4xbtZ1%2BexBD%2FPwOR0f1zR%2BhD3BwAToCWpnvFJOBfTz1sXLB2PyWdl2VSJUge7avEjIH7%2BSZuxn9UEhxCPkQB%2BHQ3f8Y63CGqQkv0iyromhdPfNkIM3G9Y6j64%2FFNjyZZ2%2BOsPFvmxGzXDiBQtf1VjC3R12MGPbF%2B86HHT3enno%2BHzUuJWiObmO70%2BoFBSzFajgvu9VIRSDmO6rWuQF50TQ1%2BNEmwQQ07YN%2BECUN6eiodcGInbWbdMYapooyYrinzvtiGzBwaHSrvJ4OtHGV5HD6cyL5z%2BPcDbh%2BTNPIgyLiNer0u1HnE6%2FzgaglNAOU%2F8tnsYi60CtqpV4e9FN7%2BO3hXanR4t4OX3HXm5NOU0DLy7MaDvu%2FhmyiyQA9OGCv7ZT7gKf8vCFaaxHl%2FetT4x%2Fxn3N3fXcWCTe9G5hjB7XobQrwrULqOwJXKSjM21rfU7KvN1PDyLzFHnAPqR23HPwsDQKTcFgM3gzcK2hmADkt3WFe%2F61Zc2GynU6OHxj8r0xdlVOKE%2BcEsWmDgDBWC4DXK6OyZGAm3EcovYXmbTKWMZ6UOZenVfjYhozJLrXlqVuXMMWAusQGOqUBY2lkpzySONvyfwISypaPRtW5fZqz0SrwBnkSSvz%2FX%2BWM4Zkq%2FlNkUQ7bKdZC%2BTHv4KsH38oGnGTqn4PXMnzdnTh4D6LLxXrJ%2FieGNPtjuXHufbQyMwBVJOcJxUpW2lfoG5vnrX1mkzqxbujN0LEesMqYA2uRFRi3Pa6%2Bz%2F0qJm7RjMM3AV8ivhp%2BPb5VnyOVVV8QtnjlqKlusIwzB5dhe7e3PTH9&X-Amz-Signature=79152aa04b084171a88c390b27f37d7a00e19250e6bce31eb3686d37e14a4ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBNR2I5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt7ye4kpbBkSRBnCYuGrxXLaFrZ26aRiHi0dNwaV4p0AiEA%2BiuTSfE6UeKKuDETlNORnXIVGRg03fwnPzEKeD6l3B8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOgeggvMZQIH5nh6TSrcAyr9mQzM7Lf4KiCTVgaxfE8KiAt3C%2FNEfIia2mReIIIQf3HQyHwLnFeoK4xbtZ1%2BexBD%2FPwOR0f1zR%2BhD3BwAToCWpnvFJOBfTz1sXLB2PyWdl2VSJUge7avEjIH7%2BSZuxn9UEhxCPkQB%2BHQ3f8Y63CGqQkv0iyromhdPfNkIM3G9Y6j64%2FFNjyZZ2%2BOsPFvmxGzXDiBQtf1VjC3R12MGPbF%2B86HHT3enno%2BHzUuJWiObmO70%2BoFBSzFajgvu9VIRSDmO6rWuQF50TQ1%2BNEmwQQ07YN%2BECUN6eiodcGInbWbdMYapooyYrinzvtiGzBwaHSrvJ4OtHGV5HD6cyL5z%2BPcDbh%2BTNPIgyLiNer0u1HnE6%2FzgaglNAOU%2F8tnsYi60CtqpV4e9FN7%2BO3hXanR4t4OX3HXm5NOU0DLy7MaDvu%2FhmyiyQA9OGCv7ZT7gKf8vCFaaxHl%2FetT4x%2Fxn3N3fXcWCTe9G5hjB7XobQrwrULqOwJXKSjM21rfU7KvN1PDyLzFHnAPqR23HPwsDQKTcFgM3gzcK2hmADkt3WFe%2F61Zc2GynU6OHxj8r0xdlVOKE%2BcEsWmDgDBWC4DXK6OyZGAm3EcovYXmbTKWMZ6UOZenVfjYhozJLrXlqVuXMMWAusQGOqUBY2lkpzySONvyfwISypaPRtW5fZqz0SrwBnkSSvz%2FX%2BWM4Zkq%2FlNkUQ7bKdZC%2BTHv4KsH38oGnGTqn4PXMnzdnTh4D6LLxXrJ%2FieGNPtjuXHufbQyMwBVJOcJxUpW2lfoG5vnrX1mkzqxbujN0LEesMqYA2uRFRi3Pa6%2Bz%2F0qJm7RjMM3AV8ivhp%2BPb5VnyOVVV8QtnjlqKlusIwzB5dhe7e3PTH9&X-Amz-Signature=64ab2434cc49e99ba7a44f996fe3f9920a7d888709795a15dcb257df1fae86e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBNR2I5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt7ye4kpbBkSRBnCYuGrxXLaFrZ26aRiHi0dNwaV4p0AiEA%2BiuTSfE6UeKKuDETlNORnXIVGRg03fwnPzEKeD6l3B8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOgeggvMZQIH5nh6TSrcAyr9mQzM7Lf4KiCTVgaxfE8KiAt3C%2FNEfIia2mReIIIQf3HQyHwLnFeoK4xbtZ1%2BexBD%2FPwOR0f1zR%2BhD3BwAToCWpnvFJOBfTz1sXLB2PyWdl2VSJUge7avEjIH7%2BSZuxn9UEhxCPkQB%2BHQ3f8Y63CGqQkv0iyromhdPfNkIM3G9Y6j64%2FFNjyZZ2%2BOsPFvmxGzXDiBQtf1VjC3R12MGPbF%2B86HHT3enno%2BHzUuJWiObmO70%2BoFBSzFajgvu9VIRSDmO6rWuQF50TQ1%2BNEmwQQ07YN%2BECUN6eiodcGInbWbdMYapooyYrinzvtiGzBwaHSrvJ4OtHGV5HD6cyL5z%2BPcDbh%2BTNPIgyLiNer0u1HnE6%2FzgaglNAOU%2F8tnsYi60CtqpV4e9FN7%2BO3hXanR4t4OX3HXm5NOU0DLy7MaDvu%2FhmyiyQA9OGCv7ZT7gKf8vCFaaxHl%2FetT4x%2Fxn3N3fXcWCTe9G5hjB7XobQrwrULqOwJXKSjM21rfU7KvN1PDyLzFHnAPqR23HPwsDQKTcFgM3gzcK2hmADkt3WFe%2F61Zc2GynU6OHxj8r0xdlVOKE%2BcEsWmDgDBWC4DXK6OyZGAm3EcovYXmbTKWMZ6UOZenVfjYhozJLrXlqVuXMMWAusQGOqUBY2lkpzySONvyfwISypaPRtW5fZqz0SrwBnkSSvz%2FX%2BWM4Zkq%2FlNkUQ7bKdZC%2BTHv4KsH38oGnGTqn4PXMnzdnTh4D6LLxXrJ%2FieGNPtjuXHufbQyMwBVJOcJxUpW2lfoG5vnrX1mkzqxbujN0LEesMqYA2uRFRi3Pa6%2Bz%2F0qJm7RjMM3AV8ivhp%2BPb5VnyOVVV8QtnjlqKlusIwzB5dhe7e3PTH9&X-Amz-Signature=22da82a1ceed05225dcffd238afeba0ca926c38008896257bd8c9a1fa200bafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
