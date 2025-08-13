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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XMNR6W%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8tmo6hBBw%2FCbTd5i52ms1waQCFDWXHpogr%2B28haOF%2BAiEAmvEgsdhEWAp6XnYxDZOiFhTkaWNLQEFMSyK65Txpr3Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJLC4Qfsj0bx1TB1kSrcAwEcEsQFnaNXE3fa4W4SB8a3str%2BW20WI23uFZmO7o5boknTfwuTnVvGmDMHImQhSmDvTZTgIdf6BTkPxBTwcuGxarnvNjgz9Dv3SB6ThwGCyOA2Io3nc0P89qBwkY5i8eTdzol3val9OtafG2boOC94GwCB8NGTvOBk0qP89rcjOXl7rJyZmFfQYF8eNpgOgD60r%2BGoOZavd3UEGpBsmK%2FgyYxhSKQQDHTXYEUuAg8XZd7FbY4OfL4%2FCp2WWI5fd12CL1MQ6iIQPpNacj%2FKwKEa5AXqNSOHGoqYi2zHxFrhln20sU51NCW1H5m5sxw45rSBQlhAp5t90KMZVSNHP4ikiBj3OUqDlW44jOS1OEbKSziPTbsiPkquQq23osCEu%2Fgt%2FOFzAevim1HdEdczYdhuoHIpTgU2Z%2FOG1CtC5cWQKB5hvUQT6vAmXDfkYX8umXbztkJgOWHgcGbLF1L2BGWFl4PDzP1XsNhs8dgCS%2FeN31DxGJB6szW86wSrCusoakwAalFDOsW%2BlN5pxj4JptSBcWRcWK4KHg9jwxB3OG1kUEIpu%2B8f7ybiNy0m9xcLbUfEh%2FocNooSdqin9o2pbUukrk1xO1DXIH3a500Mqx9tyN7MRw8XIrsFw6QWMIyH8MQGOqUB%2FNTUBLzi2FKyGGNrlfJJ7cWMSoXx7x0I4pQdyp%2BoRQMqXnZoR2cfjWxNfEZLopUmDC6s3yvZ47GY%2FjCR46YbTsHOyrWhrg6ldgVahBdP8dL5wv%2FGPIiL2K6EdaafaJ%2FnAdOY00Rag53gz7r3slUz1PuMhyAI1zG3D5gODQXamze6EFpscnSn%2B7C0vfMpsuAwTA6KQzxwoULFQ651%2BDqiLAOAYt%2F0&X-Amz-Signature=f0f01cd1c5b23e7e0c01ffd19d722f119f8902abb0925f086e82486683d6160a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XMNR6W%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8tmo6hBBw%2FCbTd5i52ms1waQCFDWXHpogr%2B28haOF%2BAiEAmvEgsdhEWAp6XnYxDZOiFhTkaWNLQEFMSyK65Txpr3Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJLC4Qfsj0bx1TB1kSrcAwEcEsQFnaNXE3fa4W4SB8a3str%2BW20WI23uFZmO7o5boknTfwuTnVvGmDMHImQhSmDvTZTgIdf6BTkPxBTwcuGxarnvNjgz9Dv3SB6ThwGCyOA2Io3nc0P89qBwkY5i8eTdzol3val9OtafG2boOC94GwCB8NGTvOBk0qP89rcjOXl7rJyZmFfQYF8eNpgOgD60r%2BGoOZavd3UEGpBsmK%2FgyYxhSKQQDHTXYEUuAg8XZd7FbY4OfL4%2FCp2WWI5fd12CL1MQ6iIQPpNacj%2FKwKEa5AXqNSOHGoqYi2zHxFrhln20sU51NCW1H5m5sxw45rSBQlhAp5t90KMZVSNHP4ikiBj3OUqDlW44jOS1OEbKSziPTbsiPkquQq23osCEu%2Fgt%2FOFzAevim1HdEdczYdhuoHIpTgU2Z%2FOG1CtC5cWQKB5hvUQT6vAmXDfkYX8umXbztkJgOWHgcGbLF1L2BGWFl4PDzP1XsNhs8dgCS%2FeN31DxGJB6szW86wSrCusoakwAalFDOsW%2BlN5pxj4JptSBcWRcWK4KHg9jwxB3OG1kUEIpu%2B8f7ybiNy0m9xcLbUfEh%2FocNooSdqin9o2pbUukrk1xO1DXIH3a500Mqx9tyN7MRw8XIrsFw6QWMIyH8MQGOqUB%2FNTUBLzi2FKyGGNrlfJJ7cWMSoXx7x0I4pQdyp%2BoRQMqXnZoR2cfjWxNfEZLopUmDC6s3yvZ47GY%2FjCR46YbTsHOyrWhrg6ldgVahBdP8dL5wv%2FGPIiL2K6EdaafaJ%2FnAdOY00Rag53gz7r3slUz1PuMhyAI1zG3D5gODQXamze6EFpscnSn%2B7C0vfMpsuAwTA6KQzxwoULFQ651%2BDqiLAOAYt%2F0&X-Amz-Signature=3e0d63e879b33fcdab5ba211198e6d5b59f947113755d1c2454f4709f0b2c399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7XMNR6W%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8tmo6hBBw%2FCbTd5i52ms1waQCFDWXHpogr%2B28haOF%2BAiEAmvEgsdhEWAp6XnYxDZOiFhTkaWNLQEFMSyK65Txpr3Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJLC4Qfsj0bx1TB1kSrcAwEcEsQFnaNXE3fa4W4SB8a3str%2BW20WI23uFZmO7o5boknTfwuTnVvGmDMHImQhSmDvTZTgIdf6BTkPxBTwcuGxarnvNjgz9Dv3SB6ThwGCyOA2Io3nc0P89qBwkY5i8eTdzol3val9OtafG2boOC94GwCB8NGTvOBk0qP89rcjOXl7rJyZmFfQYF8eNpgOgD60r%2BGoOZavd3UEGpBsmK%2FgyYxhSKQQDHTXYEUuAg8XZd7FbY4OfL4%2FCp2WWI5fd12CL1MQ6iIQPpNacj%2FKwKEa5AXqNSOHGoqYi2zHxFrhln20sU51NCW1H5m5sxw45rSBQlhAp5t90KMZVSNHP4ikiBj3OUqDlW44jOS1OEbKSziPTbsiPkquQq23osCEu%2Fgt%2FOFzAevim1HdEdczYdhuoHIpTgU2Z%2FOG1CtC5cWQKB5hvUQT6vAmXDfkYX8umXbztkJgOWHgcGbLF1L2BGWFl4PDzP1XsNhs8dgCS%2FeN31DxGJB6szW86wSrCusoakwAalFDOsW%2BlN5pxj4JptSBcWRcWK4KHg9jwxB3OG1kUEIpu%2B8f7ybiNy0m9xcLbUfEh%2FocNooSdqin9o2pbUukrk1xO1DXIH3a500Mqx9tyN7MRw8XIrsFw6QWMIyH8MQGOqUB%2FNTUBLzi2FKyGGNrlfJJ7cWMSoXx7x0I4pQdyp%2BoRQMqXnZoR2cfjWxNfEZLopUmDC6s3yvZ47GY%2FjCR46YbTsHOyrWhrg6ldgVahBdP8dL5wv%2FGPIiL2K6EdaafaJ%2FnAdOY00Rag53gz7r3slUz1PuMhyAI1zG3D5gODQXamze6EFpscnSn%2B7C0vfMpsuAwTA6KQzxwoULFQ651%2BDqiLAOAYt%2F0&X-Amz-Signature=8cc60718fde152675bcd4dddb6750deb326938ad9c578491d2ead9f65ce7fdc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
