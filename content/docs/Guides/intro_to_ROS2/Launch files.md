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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7GRVZW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtlJ4rrqQ2qQluQmMegiTTiZ6fn0gTq5GhHZkVU8VP2QIhAJ%2FdtdbACbf4y9Mj8yPuCsn84McSqD1%2FRSkFCppepJhZKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn3865atvuufmaVWAq3AM88KyGn0UZF68FA4SYBx8DeHJScg7qjg38wiFZDUwaQ0FLrUgXVuWOj%2FIowXTHrg7eCyskdXbiBtG%2F88zY6IzvfjL%2B6V2wFEI0mopy74TA%2FNdlnulaEuZBQt5lJZozmYfFXH0Qz8rcYHDFKX4VU%2Bk0LcOCDBkqSyRMjwV%2Fw9vXXrg9KOvz1rx9JgvSw4OnuNHwrD0SSM3LHie51LwmwQB7USXcFDBsl7xkG2X156SuFeMQ%2Fh1U4mkN5SturMH6FAKMzcJIQh1L9cYvb%2F%2B2MBnc0RBn4NHkSmwFWu8%2FrB3976Oqugf8MfDxaRb%2FozprOxiOY7MWDnOefy91Oq61cG2V8DvAUap%2Br3y9nKoIc5S2uhINLDuzZMZxa6wyHTSIRK5HmKn3sUOv%2BUFpleYr67e5mdZF7QBGfiEnJzUQVKoUXkEdCdrGJOCvr72XwsY05lin8p5TMOmMSXqY0rkCAKwPH%2FMma5LOgype3MDgd20cBxld1yVksGrXzfKTySW6OmUUeePB5IdZYwk0Qy2ZA57wD5D2VY5P%2FghLl5o2rKn0bdgKVaxVkjPMdj%2FL40U%2F%2Bh938e9BSfblH%2Fzp8GCxb9NJU4Ct3LNNmaRxTHq26QjsGqsEULypb%2F1SgtSX3zDNp8LABjqkAYDqqIHbnSsDyDe0D%2FVsW2jN1Pj5CpFAsoihSTynnhKG7pWEx%2BlooTxEaPB8JBIMco6KywdpwMSV3Hm9M7vWbX22QXXm5zSDCcM89%2BBXiZlQDB7nRAyRqYduiMQpFfI41rgP4fsEFF69pEerQliWCR7vnUPdi5g70H3%2FSEAZmDic9QQ80OJw0XsQT0UWo95Q1h53bxRgkc6hodYSTrqt7KAIDM2S&X-Amz-Signature=13a8d3dce04cfcb1cbd3a7acba4c3497ef6c513e0401015e3d317406bed4291f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7GRVZW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtlJ4rrqQ2qQluQmMegiTTiZ6fn0gTq5GhHZkVU8VP2QIhAJ%2FdtdbACbf4y9Mj8yPuCsn84McSqD1%2FRSkFCppepJhZKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn3865atvuufmaVWAq3AM88KyGn0UZF68FA4SYBx8DeHJScg7qjg38wiFZDUwaQ0FLrUgXVuWOj%2FIowXTHrg7eCyskdXbiBtG%2F88zY6IzvfjL%2B6V2wFEI0mopy74TA%2FNdlnulaEuZBQt5lJZozmYfFXH0Qz8rcYHDFKX4VU%2Bk0LcOCDBkqSyRMjwV%2Fw9vXXrg9KOvz1rx9JgvSw4OnuNHwrD0SSM3LHie51LwmwQB7USXcFDBsl7xkG2X156SuFeMQ%2Fh1U4mkN5SturMH6FAKMzcJIQh1L9cYvb%2F%2B2MBnc0RBn4NHkSmwFWu8%2FrB3976Oqugf8MfDxaRb%2FozprOxiOY7MWDnOefy91Oq61cG2V8DvAUap%2Br3y9nKoIc5S2uhINLDuzZMZxa6wyHTSIRK5HmKn3sUOv%2BUFpleYr67e5mdZF7QBGfiEnJzUQVKoUXkEdCdrGJOCvr72XwsY05lin8p5TMOmMSXqY0rkCAKwPH%2FMma5LOgype3MDgd20cBxld1yVksGrXzfKTySW6OmUUeePB5IdZYwk0Qy2ZA57wD5D2VY5P%2FghLl5o2rKn0bdgKVaxVkjPMdj%2FL40U%2F%2Bh938e9BSfblH%2Fzp8GCxb9NJU4Ct3LNNmaRxTHq26QjsGqsEULypb%2F1SgtSX3zDNp8LABjqkAYDqqIHbnSsDyDe0D%2FVsW2jN1Pj5CpFAsoihSTynnhKG7pWEx%2BlooTxEaPB8JBIMco6KywdpwMSV3Hm9M7vWbX22QXXm5zSDCcM89%2BBXiZlQDB7nRAyRqYduiMQpFfI41rgP4fsEFF69pEerQliWCR7vnUPdi5g70H3%2FSEAZmDic9QQ80OJw0XsQT0UWo95Q1h53bxRgkc6hodYSTrqt7KAIDM2S&X-Amz-Signature=4998df022e8de6fc5d3925cc168fbbb7e1f22c0e5d8a83b7feb291eda57ca4de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7GRVZW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtlJ4rrqQ2qQluQmMegiTTiZ6fn0gTq5GhHZkVU8VP2QIhAJ%2FdtdbACbf4y9Mj8yPuCsn84McSqD1%2FRSkFCppepJhZKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn3865atvuufmaVWAq3AM88KyGn0UZF68FA4SYBx8DeHJScg7qjg38wiFZDUwaQ0FLrUgXVuWOj%2FIowXTHrg7eCyskdXbiBtG%2F88zY6IzvfjL%2B6V2wFEI0mopy74TA%2FNdlnulaEuZBQt5lJZozmYfFXH0Qz8rcYHDFKX4VU%2Bk0LcOCDBkqSyRMjwV%2Fw9vXXrg9KOvz1rx9JgvSw4OnuNHwrD0SSM3LHie51LwmwQB7USXcFDBsl7xkG2X156SuFeMQ%2Fh1U4mkN5SturMH6FAKMzcJIQh1L9cYvb%2F%2B2MBnc0RBn4NHkSmwFWu8%2FrB3976Oqugf8MfDxaRb%2FozprOxiOY7MWDnOefy91Oq61cG2V8DvAUap%2Br3y9nKoIc5S2uhINLDuzZMZxa6wyHTSIRK5HmKn3sUOv%2BUFpleYr67e5mdZF7QBGfiEnJzUQVKoUXkEdCdrGJOCvr72XwsY05lin8p5TMOmMSXqY0rkCAKwPH%2FMma5LOgype3MDgd20cBxld1yVksGrXzfKTySW6OmUUeePB5IdZYwk0Qy2ZA57wD5D2VY5P%2FghLl5o2rKn0bdgKVaxVkjPMdj%2FL40U%2F%2Bh938e9BSfblH%2Fzp8GCxb9NJU4Ct3LNNmaRxTHq26QjsGqsEULypb%2F1SgtSX3zDNp8LABjqkAYDqqIHbnSsDyDe0D%2FVsW2jN1Pj5CpFAsoihSTynnhKG7pWEx%2BlooTxEaPB8JBIMco6KywdpwMSV3Hm9M7vWbX22QXXm5zSDCcM89%2BBXiZlQDB7nRAyRqYduiMQpFfI41rgP4fsEFF69pEerQliWCR7vnUPdi5g70H3%2FSEAZmDic9QQ80OJw0XsQT0UWo95Q1h53bxRgkc6hodYSTrqt7KAIDM2S&X-Amz-Signature=61442e358529b86d6d8553af0e0b07329188bcccdf5176aee3588199124721d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
