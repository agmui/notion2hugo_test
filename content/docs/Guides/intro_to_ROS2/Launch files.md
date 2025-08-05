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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SSFCFC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxUzv0aciJ9qO0TzW6tvc3ngTle3tEKOgeQ1YSRQ7ZBgIhAM2gGPwdYzTrOwg7KjpCQ2ZaNAAd030noTd2cumdOtxyKv8DCF4QABoMNjM3NDIzMTgzODA1IgzSGKqw0Znp4R822dgq3APeEK11we9U2DNYRZBeDUhlhVPsbRF2hB58BUH%2BizVDf%2B4shAkaugs1Znbru7ElCBegS%2FQh2WfAyApHI3l1GVZIAmIoygpK4BDnx%2B2ZBTXdiEXSW9ZZ5FrSZMWxYN24xLlewKPygqRQ5eYPG5%2FvwBimOLrMbpt45ymFSW%2B1Q%2BPxL33Y%2F8pbFtEwn880O38aOKQNeN1PCLp3ZSxMFXAjN1uN2Y4rSj%2BkzEh4GGGZRx8S3zVmTsbDghvqSrS5if5y%2Bz59m%2B3orVm97L%2Fu6n5cpvq0Nr6K%2FNHIvrQS%2Fanc6QEIksJYHnjRi8in%2FVnxko0PBwV%2BAeaYGDQwywHEIlfuCzqMfbNP49yWhrtgTBpbbnlk59DB9QXJyGeESwQJpPJgfu%2FyoN%2BsO%2F2whto2QDEYW4Mo1sxZ6ehjSE81sbmWlGhcb1%2BFho0HzeuClamtmeQu%2Fj3GFWLjq9%2BTM9AvzIAZz7YPcTrI64TqdkffiHa3RNjFdo61k4uftrvtK99aGk%2Fler%2B3iTSaCP2ZIdq9hv7W%2BHV8y%2BfZTYKLTl72zA0uHbrJC5x3PzSVEcAS87Wu2090vBTN7xPPuk2cvyXmSMpD%2BDA6d%2F56wFMkAFDeG7Av%2FUVnuJsyemFngqPUmvIiBzCUg8jEBjqkAR6qspFA8azZ48LVbKh5tmRM3ZWiEs7OCex5JfXz5ptLS5aDcUrGTtDvMpGU926uSwC5PVT95Zn3etD1UH1Gn6RgCa0hoarV7P9pJ1LWbKCdz1b7SC9%2BgmbtG53nchAhPJm7JkSFIyc3L925GgzyUTBgu%2FE80pqg%2FhyQRUW3Wlsg7TOPpfuK83KTGj67IBXyH4mwIa%2FG2PKf3bnu5fQv%2FcWkyuVX&X-Amz-Signature=d9418b4aa0252682b3ef9abadea773b2c703ef500165512e3c43774a2aadd04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SSFCFC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxUzv0aciJ9qO0TzW6tvc3ngTle3tEKOgeQ1YSRQ7ZBgIhAM2gGPwdYzTrOwg7KjpCQ2ZaNAAd030noTd2cumdOtxyKv8DCF4QABoMNjM3NDIzMTgzODA1IgzSGKqw0Znp4R822dgq3APeEK11we9U2DNYRZBeDUhlhVPsbRF2hB58BUH%2BizVDf%2B4shAkaugs1Znbru7ElCBegS%2FQh2WfAyApHI3l1GVZIAmIoygpK4BDnx%2B2ZBTXdiEXSW9ZZ5FrSZMWxYN24xLlewKPygqRQ5eYPG5%2FvwBimOLrMbpt45ymFSW%2B1Q%2BPxL33Y%2F8pbFtEwn880O38aOKQNeN1PCLp3ZSxMFXAjN1uN2Y4rSj%2BkzEh4GGGZRx8S3zVmTsbDghvqSrS5if5y%2Bz59m%2B3orVm97L%2Fu6n5cpvq0Nr6K%2FNHIvrQS%2Fanc6QEIksJYHnjRi8in%2FVnxko0PBwV%2BAeaYGDQwywHEIlfuCzqMfbNP49yWhrtgTBpbbnlk59DB9QXJyGeESwQJpPJgfu%2FyoN%2BsO%2F2whto2QDEYW4Mo1sxZ6ehjSE81sbmWlGhcb1%2BFho0HzeuClamtmeQu%2Fj3GFWLjq9%2BTM9AvzIAZz7YPcTrI64TqdkffiHa3RNjFdo61k4uftrvtK99aGk%2Fler%2B3iTSaCP2ZIdq9hv7W%2BHV8y%2BfZTYKLTl72zA0uHbrJC5x3PzSVEcAS87Wu2090vBTN7xPPuk2cvyXmSMpD%2BDA6d%2F56wFMkAFDeG7Av%2FUVnuJsyemFngqPUmvIiBzCUg8jEBjqkAR6qspFA8azZ48LVbKh5tmRM3ZWiEs7OCex5JfXz5ptLS5aDcUrGTtDvMpGU926uSwC5PVT95Zn3etD1UH1Gn6RgCa0hoarV7P9pJ1LWbKCdz1b7SC9%2BgmbtG53nchAhPJm7JkSFIyc3L925GgzyUTBgu%2FE80pqg%2FhyQRUW3Wlsg7TOPpfuK83KTGj67IBXyH4mwIa%2FG2PKf3bnu5fQv%2FcWkyuVX&X-Amz-Signature=0d5cb65d4a4791788d46ee43b4799dd35eff348605d0f1c5367f58aba026162e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SSFCFC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxUzv0aciJ9qO0TzW6tvc3ngTle3tEKOgeQ1YSRQ7ZBgIhAM2gGPwdYzTrOwg7KjpCQ2ZaNAAd030noTd2cumdOtxyKv8DCF4QABoMNjM3NDIzMTgzODA1IgzSGKqw0Znp4R822dgq3APeEK11we9U2DNYRZBeDUhlhVPsbRF2hB58BUH%2BizVDf%2B4shAkaugs1Znbru7ElCBegS%2FQh2WfAyApHI3l1GVZIAmIoygpK4BDnx%2B2ZBTXdiEXSW9ZZ5FrSZMWxYN24xLlewKPygqRQ5eYPG5%2FvwBimOLrMbpt45ymFSW%2B1Q%2BPxL33Y%2F8pbFtEwn880O38aOKQNeN1PCLp3ZSxMFXAjN1uN2Y4rSj%2BkzEh4GGGZRx8S3zVmTsbDghvqSrS5if5y%2Bz59m%2B3orVm97L%2Fu6n5cpvq0Nr6K%2FNHIvrQS%2Fanc6QEIksJYHnjRi8in%2FVnxko0PBwV%2BAeaYGDQwywHEIlfuCzqMfbNP49yWhrtgTBpbbnlk59DB9QXJyGeESwQJpPJgfu%2FyoN%2BsO%2F2whto2QDEYW4Mo1sxZ6ehjSE81sbmWlGhcb1%2BFho0HzeuClamtmeQu%2Fj3GFWLjq9%2BTM9AvzIAZz7YPcTrI64TqdkffiHa3RNjFdo61k4uftrvtK99aGk%2Fler%2B3iTSaCP2ZIdq9hv7W%2BHV8y%2BfZTYKLTl72zA0uHbrJC5x3PzSVEcAS87Wu2090vBTN7xPPuk2cvyXmSMpD%2BDA6d%2F56wFMkAFDeG7Av%2FUVnuJsyemFngqPUmvIiBzCUg8jEBjqkAR6qspFA8azZ48LVbKh5tmRM3ZWiEs7OCex5JfXz5ptLS5aDcUrGTtDvMpGU926uSwC5PVT95Zn3etD1UH1Gn6RgCa0hoarV7P9pJ1LWbKCdz1b7SC9%2BgmbtG53nchAhPJm7JkSFIyc3L925GgzyUTBgu%2FE80pqg%2FhyQRUW3Wlsg7TOPpfuK83KTGj67IBXyH4mwIa%2FG2PKf3bnu5fQv%2FcWkyuVX&X-Amz-Signature=1ee773bc0652e169ac974952c79ee85c2d64c53a646cea48eaa72ff4e5838b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
