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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZURB3IK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgs4HmOv%2FTfAjDRVr0%2BrQbh5dZaYJuwhAAygxPiJd%2BTAiEAqHBiUz9Jab8SbKdpkuo%2FZFguSbhtsnZWIh6cAUt9nf0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB79aSu5I0WMxSLIqircAyx4k8FHlINz12mPTTEyiQ%2FynNfJdwpLrzBvgLU2P4alegLYtu2ffosfLYnk%2BB2YQZGXE9DyoipYtemlJKRb4LPCKxEVMFnG7Y237AfhFR6FTAb6fKvJSKphoVNv4DZeDpis7dhmqyHDL1HjUSQTZNiLVDEfOcJFpGc9pExWY720fWeUGkLnDysKeBPPYsUGq41I9PVstK4GZS5rWEO0fU18%2FUUA%2BV3NbkhcnKoGWaJ9FhZTa9PSI%2BDnJINwURPT2%2Bx2D2A4kKY4k4ic5g7i7zu88npVRe6GeZaeaIe7MdmPX4YCFk%2BZlsUCIh3yvdGSsm7OsnHBp8yBTOdujYqw%2B7XnNcuPCaGv8a2sSCLFP3ObGSlR%2BD4WiY8g41Z0n72abYQ3QIMy7sigv6RczZ8wVE2V8HhqFKEGXvJXqgh9TYRuQb%2F9MFfYUziqj00ZOnkuVXWq6NMxW8PqEE4Fqi7Q96Mx3WrsurXc87%2Fv2NjD8oxz7G4lAmsSwGI8XFSURTaC%2FF2%2BIxHmL7H9FdTjENocAWwXJa44g2OF8io%2FwPAOuTiYd%2FvROzN0OMUsKYpHSmfQexVEt7GnCMb4T%2BRK7BS%2Bu%2Fq%2BYQI%2Fl0AZH3JzrSF7ROBCeZ6oL0ufj5NFc4S3MJaI3cIGOqUB8ei4QfQ06CbMRYpt4GzbxyGokLTtJG1W053LpYX5U7tb8%2ByUJv2MUbJ1w5iLPq7xbUI1mDMyz1ucUjeVT4rpcvdiZbruSHadTYDXElR%2B6562RJn3fraYUd8BSeEgF4mRoHMVvNgoHU%2Bm%2FZ0jld%2FJ0HreBXQmqGAsNNavuqCdMSVhwjPDeiupk%2BdmFxFInWa0ZOwvsRuoP5eBF1VGzA6XfSJA7RZu&X-Amz-Signature=27dd7d5edadd9ec7661f9d0a9906bd6668969879b3ece756dede53bd85ab9533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZURB3IK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgs4HmOv%2FTfAjDRVr0%2BrQbh5dZaYJuwhAAygxPiJd%2BTAiEAqHBiUz9Jab8SbKdpkuo%2FZFguSbhtsnZWIh6cAUt9nf0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB79aSu5I0WMxSLIqircAyx4k8FHlINz12mPTTEyiQ%2FynNfJdwpLrzBvgLU2P4alegLYtu2ffosfLYnk%2BB2YQZGXE9DyoipYtemlJKRb4LPCKxEVMFnG7Y237AfhFR6FTAb6fKvJSKphoVNv4DZeDpis7dhmqyHDL1HjUSQTZNiLVDEfOcJFpGc9pExWY720fWeUGkLnDysKeBPPYsUGq41I9PVstK4GZS5rWEO0fU18%2FUUA%2BV3NbkhcnKoGWaJ9FhZTa9PSI%2BDnJINwURPT2%2Bx2D2A4kKY4k4ic5g7i7zu88npVRe6GeZaeaIe7MdmPX4YCFk%2BZlsUCIh3yvdGSsm7OsnHBp8yBTOdujYqw%2B7XnNcuPCaGv8a2sSCLFP3ObGSlR%2BD4WiY8g41Z0n72abYQ3QIMy7sigv6RczZ8wVE2V8HhqFKEGXvJXqgh9TYRuQb%2F9MFfYUziqj00ZOnkuVXWq6NMxW8PqEE4Fqi7Q96Mx3WrsurXc87%2Fv2NjD8oxz7G4lAmsSwGI8XFSURTaC%2FF2%2BIxHmL7H9FdTjENocAWwXJa44g2OF8io%2FwPAOuTiYd%2FvROzN0OMUsKYpHSmfQexVEt7GnCMb4T%2BRK7BS%2Bu%2Fq%2BYQI%2Fl0AZH3JzrSF7ROBCeZ6oL0ufj5NFc4S3MJaI3cIGOqUB8ei4QfQ06CbMRYpt4GzbxyGokLTtJG1W053LpYX5U7tb8%2ByUJv2MUbJ1w5iLPq7xbUI1mDMyz1ucUjeVT4rpcvdiZbruSHadTYDXElR%2B6562RJn3fraYUd8BSeEgF4mRoHMVvNgoHU%2Bm%2FZ0jld%2FJ0HreBXQmqGAsNNavuqCdMSVhwjPDeiupk%2BdmFxFInWa0ZOwvsRuoP5eBF1VGzA6XfSJA7RZu&X-Amz-Signature=49cb680f73d40250a4ac991bcd783402842060470507c170964354ea96eaa1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZURB3IK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgs4HmOv%2FTfAjDRVr0%2BrQbh5dZaYJuwhAAygxPiJd%2BTAiEAqHBiUz9Jab8SbKdpkuo%2FZFguSbhtsnZWIh6cAUt9nf0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB79aSu5I0WMxSLIqircAyx4k8FHlINz12mPTTEyiQ%2FynNfJdwpLrzBvgLU2P4alegLYtu2ffosfLYnk%2BB2YQZGXE9DyoipYtemlJKRb4LPCKxEVMFnG7Y237AfhFR6FTAb6fKvJSKphoVNv4DZeDpis7dhmqyHDL1HjUSQTZNiLVDEfOcJFpGc9pExWY720fWeUGkLnDysKeBPPYsUGq41I9PVstK4GZS5rWEO0fU18%2FUUA%2BV3NbkhcnKoGWaJ9FhZTa9PSI%2BDnJINwURPT2%2Bx2D2A4kKY4k4ic5g7i7zu88npVRe6GeZaeaIe7MdmPX4YCFk%2BZlsUCIh3yvdGSsm7OsnHBp8yBTOdujYqw%2B7XnNcuPCaGv8a2sSCLFP3ObGSlR%2BD4WiY8g41Z0n72abYQ3QIMy7sigv6RczZ8wVE2V8HhqFKEGXvJXqgh9TYRuQb%2F9MFfYUziqj00ZOnkuVXWq6NMxW8PqEE4Fqi7Q96Mx3WrsurXc87%2Fv2NjD8oxz7G4lAmsSwGI8XFSURTaC%2FF2%2BIxHmL7H9FdTjENocAWwXJa44g2OF8io%2FwPAOuTiYd%2FvROzN0OMUsKYpHSmfQexVEt7GnCMb4T%2BRK7BS%2Bu%2Fq%2BYQI%2Fl0AZH3JzrSF7ROBCeZ6oL0ufj5NFc4S3MJaI3cIGOqUB8ei4QfQ06CbMRYpt4GzbxyGokLTtJG1W053LpYX5U7tb8%2ByUJv2MUbJ1w5iLPq7xbUI1mDMyz1ucUjeVT4rpcvdiZbruSHadTYDXElR%2B6562RJn3fraYUd8BSeEgF4mRoHMVvNgoHU%2Bm%2FZ0jld%2FJ0HreBXQmqGAsNNavuqCdMSVhwjPDeiupk%2BdmFxFInWa0ZOwvsRuoP5eBF1VGzA6XfSJA7RZu&X-Amz-Signature=8018c1aff3a207ba7c1c4325b01a0c9d04e9d3460336d66fba9eaaa6166a126b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
