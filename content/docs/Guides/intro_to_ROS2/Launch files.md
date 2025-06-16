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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5XUU2K%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGzhNudbImMrvj9bjp%2FWqhf1NyhoPhJYtVqgkyGz%2BxXQAiBpCwyY7jM%2Bh6t4XQvLhg3Ao6WbP0c%2FLhSEdkMMPeeyZCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMDhSYtq08Ntrm66u9KtwDK68C9uVq89DJt8osBaddl2J4kpkfwtvvbU4fyC3AlE8cUO6dzPL7iwSsCG1PRwFPc5YN%2FoQsKfPpIcq2J3daHMv6XOH7GoQIvCVnzbdWYipX9IRn20HeBQ%2FFIXYKyrkFILcn%2F1gMasWP5gPTSZqsMCZt0rWjd78U4MuusJ%2BQAcv2ddW4TCFw29mq7buk64jR%2FXF%2FnJw86m%2FtuCXAPY1FLAeRca0%2FuitG2DQ7wgdzn0WVb5Wl9OUnU213eF6De1stB8NsBqNDFGGLO8Em8mRENDAVEGixjuJIe3RPKZucwczBNd5CmMBs44dKK7huT%2Fna5hYMk1w3rs0gT%2FxoLXM4VRLbLyUxaiGrIyFa8vlJ7QjKV4SUzBR7YNwmNST2G%2FWbYRC4eB7GP4mpCB%2FF1ua7dq8ZhzW6UYXxl14RZSwp4kTH43D5CBt2BX5OR2o3fvog%2F0IIbKWyfzQFOTW2QxrqO4yMB7A4%2F0sSzcE5CBS%2Fk8k%2FVE%2FiB92sBA4yJOusdv6Q%2FNBRV0ULPAQh%2FRaXMkAO0jhndOW%2BloMjqIKyb0U53cyqbyq5Wh4MGV6c8tMuypk6T1Xrk0NEysZ%2FuLgKMb%2FzooCGopalMJNQrPf8CTlGeIF2rWXVKJwTDu3N7mIw%2Ff69wgY6pgHI2qQY4XwRCN9te1UGsy5MxdV1VrH%2FP5GGUoNLIxRaJGs0JLHBH1SNGClqliEhUT5cc2JiYWjVNoD3b9YtC%2FEp3Cu4%2FGzSbHMVEbDQ9vq8PFUMWb53vzR0LKOHSt2d4ZVbLJGB5qfsyrf7hlr0ZeCR0CA3gPO%2FUvjboz1pfCpumUyMpuTEZ1MmoADi2cgSUiWRlh0YTUVtiCkTLMWV9DRAzE5lR5XF&X-Amz-Signature=bda1402c2326262f2b357c286afb65efcd3323f66859860107afe828f41802c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5XUU2K%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGzhNudbImMrvj9bjp%2FWqhf1NyhoPhJYtVqgkyGz%2BxXQAiBpCwyY7jM%2Bh6t4XQvLhg3Ao6WbP0c%2FLhSEdkMMPeeyZCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMDhSYtq08Ntrm66u9KtwDK68C9uVq89DJt8osBaddl2J4kpkfwtvvbU4fyC3AlE8cUO6dzPL7iwSsCG1PRwFPc5YN%2FoQsKfPpIcq2J3daHMv6XOH7GoQIvCVnzbdWYipX9IRn20HeBQ%2FFIXYKyrkFILcn%2F1gMasWP5gPTSZqsMCZt0rWjd78U4MuusJ%2BQAcv2ddW4TCFw29mq7buk64jR%2FXF%2FnJw86m%2FtuCXAPY1FLAeRca0%2FuitG2DQ7wgdzn0WVb5Wl9OUnU213eF6De1stB8NsBqNDFGGLO8Em8mRENDAVEGixjuJIe3RPKZucwczBNd5CmMBs44dKK7huT%2Fna5hYMk1w3rs0gT%2FxoLXM4VRLbLyUxaiGrIyFa8vlJ7QjKV4SUzBR7YNwmNST2G%2FWbYRC4eB7GP4mpCB%2FF1ua7dq8ZhzW6UYXxl14RZSwp4kTH43D5CBt2BX5OR2o3fvog%2F0IIbKWyfzQFOTW2QxrqO4yMB7A4%2F0sSzcE5CBS%2Fk8k%2FVE%2FiB92sBA4yJOusdv6Q%2FNBRV0ULPAQh%2FRaXMkAO0jhndOW%2BloMjqIKyb0U53cyqbyq5Wh4MGV6c8tMuypk6T1Xrk0NEysZ%2FuLgKMb%2FzooCGopalMJNQrPf8CTlGeIF2rWXVKJwTDu3N7mIw%2Ff69wgY6pgHI2qQY4XwRCN9te1UGsy5MxdV1VrH%2FP5GGUoNLIxRaJGs0JLHBH1SNGClqliEhUT5cc2JiYWjVNoD3b9YtC%2FEp3Cu4%2FGzSbHMVEbDQ9vq8PFUMWb53vzR0LKOHSt2d4ZVbLJGB5qfsyrf7hlr0ZeCR0CA3gPO%2FUvjboz1pfCpumUyMpuTEZ1MmoADi2cgSUiWRlh0YTUVtiCkTLMWV9DRAzE5lR5XF&X-Amz-Signature=fef2ef629188bf771d29667f51cda1445d6a3a748380f8e32fd243b2ff25d3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5XUU2K%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGzhNudbImMrvj9bjp%2FWqhf1NyhoPhJYtVqgkyGz%2BxXQAiBpCwyY7jM%2Bh6t4XQvLhg3Ao6WbP0c%2FLhSEdkMMPeeyZCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMDhSYtq08Ntrm66u9KtwDK68C9uVq89DJt8osBaddl2J4kpkfwtvvbU4fyC3AlE8cUO6dzPL7iwSsCG1PRwFPc5YN%2FoQsKfPpIcq2J3daHMv6XOH7GoQIvCVnzbdWYipX9IRn20HeBQ%2FFIXYKyrkFILcn%2F1gMasWP5gPTSZqsMCZt0rWjd78U4MuusJ%2BQAcv2ddW4TCFw29mq7buk64jR%2FXF%2FnJw86m%2FtuCXAPY1FLAeRca0%2FuitG2DQ7wgdzn0WVb5Wl9OUnU213eF6De1stB8NsBqNDFGGLO8Em8mRENDAVEGixjuJIe3RPKZucwczBNd5CmMBs44dKK7huT%2Fna5hYMk1w3rs0gT%2FxoLXM4VRLbLyUxaiGrIyFa8vlJ7QjKV4SUzBR7YNwmNST2G%2FWbYRC4eB7GP4mpCB%2FF1ua7dq8ZhzW6UYXxl14RZSwp4kTH43D5CBt2BX5OR2o3fvog%2F0IIbKWyfzQFOTW2QxrqO4yMB7A4%2F0sSzcE5CBS%2Fk8k%2FVE%2FiB92sBA4yJOusdv6Q%2FNBRV0ULPAQh%2FRaXMkAO0jhndOW%2BloMjqIKyb0U53cyqbyq5Wh4MGV6c8tMuypk6T1Xrk0NEysZ%2FuLgKMb%2FzooCGopalMJNQrPf8CTlGeIF2rWXVKJwTDu3N7mIw%2Ff69wgY6pgHI2qQY4XwRCN9te1UGsy5MxdV1VrH%2FP5GGUoNLIxRaJGs0JLHBH1SNGClqliEhUT5cc2JiYWjVNoD3b9YtC%2FEp3Cu4%2FGzSbHMVEbDQ9vq8PFUMWb53vzR0LKOHSt2d4ZVbLJGB5qfsyrf7hlr0ZeCR0CA3gPO%2FUvjboz1pfCpumUyMpuTEZ1MmoADi2cgSUiWRlh0YTUVtiCkTLMWV9DRAzE5lR5XF&X-Amz-Signature=364a3e8cca6d54e9baa9e3e846162d57119f7ec1051a58228cb4b62c2c961d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
