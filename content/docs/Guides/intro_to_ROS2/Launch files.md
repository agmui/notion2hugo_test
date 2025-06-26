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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVL6LH3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAVOKUpuf1Z6LBSf29Ko6bslHT%2FAd6IC2jMFQ85meLAcAiEAulrP89dkYjnRYaowik5v1TzXphh%2Bop8bmc3O2Txmxg4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIomseOKMGCyqL21jyrcAzupv3AgNXoNurAXLY5iKxBC42w3Jlf6jnUq04EuKABDBhS86euxIRGpNCreeojePcdU3HlagqkQ0jl5zH2Qj5lJTviQOZQQ5PCtcOKy7s7AzNKUzAngjO1GQQF9W3eQhClOmzP87oOwNQH4%2BvuExjLdU%2BMhHfc8ekD3vH93%2FOlYN8TIaR61HjKZBFG0t6FYkZqQ%2FSz0Sj2E1OGftT%2BCPELCVqWC364r4pi9j5M%2FwHgpI6KRpzgMqLS9XbcwPcB7c%2FC2A1k4C2ETqZ%2BC8PdOQRytK8cq8tYkgjoBxJ5AzdDSVU%2BG2Zao9kpxdpOtGpiBhm7%2FzcAt9udZAwyx%2Fuyk%2BBIrpwXXhKF0onbt%2B58CDXUVvpLucj0T6Y1vHnzru9RnxSKdmXKIoZRlpmrMviCceKX0ydKSgoDBWBPMhyWZf1XVEDTf0BP2r8TMrqXW18%2B0CcbSrQ%2FWSjsMyDPhK%2BDHg2SEbGOv3yA%2FqTZZ2JGILynyXzHdal%2FZQqC%2FLNmp8eZuQlz8qvSPaOecZG20uQWVhbc7Ts9HsW7FtKhLsA1UAIPDfQ1mB16F%2BbNqoxzWMGXcWyc8LB1Qz2CNBHWc%2FugPJYn4oGLkg5xrJIM95LnuJXO%2BwWZqhDKd0k%2BNkhiXMP2V9MIGOqUBWo3SoyEJiVVWZ1AIhDUxqpGMKeEjkVSnTLjEzyAyKb39WTBQ168PhDZ0xQ1UOZY7mvQM8H5zbdInzAEAWQpt2Q3E6H25JHtecXtSG0xE1Ng8q22w%2F2s%2FXclW%2Bzx4TZ8tXq1MzhLu%2BPZQb8W2o9C2bw2hM%2Fd4t6nXRn3fe12YRFTb6gaxtZD0y7A8RLMtiIEIR2RT09N1p0Uc4pqC%2Fe93iP4JctKh&X-Amz-Signature=7d33ac343f97947f3cf4da16a7b5fafc399989ad522ff5de722037bbe3828cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVL6LH3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAVOKUpuf1Z6LBSf29Ko6bslHT%2FAd6IC2jMFQ85meLAcAiEAulrP89dkYjnRYaowik5v1TzXphh%2Bop8bmc3O2Txmxg4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIomseOKMGCyqL21jyrcAzupv3AgNXoNurAXLY5iKxBC42w3Jlf6jnUq04EuKABDBhS86euxIRGpNCreeojePcdU3HlagqkQ0jl5zH2Qj5lJTviQOZQQ5PCtcOKy7s7AzNKUzAngjO1GQQF9W3eQhClOmzP87oOwNQH4%2BvuExjLdU%2BMhHfc8ekD3vH93%2FOlYN8TIaR61HjKZBFG0t6FYkZqQ%2FSz0Sj2E1OGftT%2BCPELCVqWC364r4pi9j5M%2FwHgpI6KRpzgMqLS9XbcwPcB7c%2FC2A1k4C2ETqZ%2BC8PdOQRytK8cq8tYkgjoBxJ5AzdDSVU%2BG2Zao9kpxdpOtGpiBhm7%2FzcAt9udZAwyx%2Fuyk%2BBIrpwXXhKF0onbt%2B58CDXUVvpLucj0T6Y1vHnzru9RnxSKdmXKIoZRlpmrMviCceKX0ydKSgoDBWBPMhyWZf1XVEDTf0BP2r8TMrqXW18%2B0CcbSrQ%2FWSjsMyDPhK%2BDHg2SEbGOv3yA%2FqTZZ2JGILynyXzHdal%2FZQqC%2FLNmp8eZuQlz8qvSPaOecZG20uQWVhbc7Ts9HsW7FtKhLsA1UAIPDfQ1mB16F%2BbNqoxzWMGXcWyc8LB1Qz2CNBHWc%2FugPJYn4oGLkg5xrJIM95LnuJXO%2BwWZqhDKd0k%2BNkhiXMP2V9MIGOqUBWo3SoyEJiVVWZ1AIhDUxqpGMKeEjkVSnTLjEzyAyKb39WTBQ168PhDZ0xQ1UOZY7mvQM8H5zbdInzAEAWQpt2Q3E6H25JHtecXtSG0xE1Ng8q22w%2F2s%2FXclW%2Bzx4TZ8tXq1MzhLu%2BPZQb8W2o9C2bw2hM%2Fd4t6nXRn3fe12YRFTb6gaxtZD0y7A8RLMtiIEIR2RT09N1p0Uc4pqC%2Fe93iP4JctKh&X-Amz-Signature=63dec1d7760af603f80f95647f47c9055f38c0f5d63f6eee787f5d607d2e7bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVL6LH3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAVOKUpuf1Z6LBSf29Ko6bslHT%2FAd6IC2jMFQ85meLAcAiEAulrP89dkYjnRYaowik5v1TzXphh%2Bop8bmc3O2Txmxg4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIomseOKMGCyqL21jyrcAzupv3AgNXoNurAXLY5iKxBC42w3Jlf6jnUq04EuKABDBhS86euxIRGpNCreeojePcdU3HlagqkQ0jl5zH2Qj5lJTviQOZQQ5PCtcOKy7s7AzNKUzAngjO1GQQF9W3eQhClOmzP87oOwNQH4%2BvuExjLdU%2BMhHfc8ekD3vH93%2FOlYN8TIaR61HjKZBFG0t6FYkZqQ%2FSz0Sj2E1OGftT%2BCPELCVqWC364r4pi9j5M%2FwHgpI6KRpzgMqLS9XbcwPcB7c%2FC2A1k4C2ETqZ%2BC8PdOQRytK8cq8tYkgjoBxJ5AzdDSVU%2BG2Zao9kpxdpOtGpiBhm7%2FzcAt9udZAwyx%2Fuyk%2BBIrpwXXhKF0onbt%2B58CDXUVvpLucj0T6Y1vHnzru9RnxSKdmXKIoZRlpmrMviCceKX0ydKSgoDBWBPMhyWZf1XVEDTf0BP2r8TMrqXW18%2B0CcbSrQ%2FWSjsMyDPhK%2BDHg2SEbGOv3yA%2FqTZZ2JGILynyXzHdal%2FZQqC%2FLNmp8eZuQlz8qvSPaOecZG20uQWVhbc7Ts9HsW7FtKhLsA1UAIPDfQ1mB16F%2BbNqoxzWMGXcWyc8LB1Qz2CNBHWc%2FugPJYn4oGLkg5xrJIM95LnuJXO%2BwWZqhDKd0k%2BNkhiXMP2V9MIGOqUBWo3SoyEJiVVWZ1AIhDUxqpGMKeEjkVSnTLjEzyAyKb39WTBQ168PhDZ0xQ1UOZY7mvQM8H5zbdInzAEAWQpt2Q3E6H25JHtecXtSG0xE1Ng8q22w%2F2s%2FXclW%2Bzx4TZ8tXq1MzhLu%2BPZQb8W2o9C2bw2hM%2Fd4t6nXRn3fe12YRFTb6gaxtZD0y7A8RLMtiIEIR2RT09N1p0Uc4pqC%2Fe93iP4JctKh&X-Amz-Signature=2801badc515cb0371db3f014f02a43975dbee1679833bb49aeb76d94b246a038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
