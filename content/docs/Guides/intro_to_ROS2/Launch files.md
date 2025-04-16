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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCE6FN6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChOpWUuGwrv9A2nfvL2kD1Ytr4CQZt%2BR%2FE%2Bl2alynRpQIhAO5%2FaoTLTMUz%2FfPojv%2BMJ6xhgyd5zqwS8hXkvP%2Fhf4QIKv8DCEYQABoMNjM3NDIzMTgzODA1IgyFShZpCEFbLaACJ3Qq3AP1lfjLIksdEezya8yj4fSXqcxZZU4wLM7Gptif2ca47905YqFA3ykxuyZnM1SeT6lV%2FGqQ0uo8pH7e9Q8%2BW704MJOm0H5gizYurOFZdcZ5Gk6JYqUwVrjmMyiguc9MwHPx5KNVc4aP0lhmh6nl9PF1pOa0Qx5O1y0%2B%2BIRuNYn2TANpeF%2FcWCYByTa%2FZKPVewkBH0bnBDGQO0BlbLca6JNMdEJHWVLSycQinuEMmU%2FlNARZnbzctf0ksB3pGwyZILJl6RQ6x419W86NmxyKMpQKJSpXULtb8G%2B67xYyuLE9KvpBJ39ML8olKGvmni8ZnrFuw%2FQxHKnlqJbxf1ddYjroCgtx7SVGEdfUa1Gu5oync%2BZKv1%2BiI5WgMitDwyH%2BqHQz1TrMYKVt8WvtO2vMsHSPXUDYh3BG4UwOG3ElkPdmuBW6c22hIjhz%2BA4UHYM%2BPfDNsYLCN03BHTWOP8KnZveBegFVepdjbj%2FQ8lC%2FoLHjc7RYcaXhegnGNYY9Z1A8FDL51hLNlCcY2Y0%2Fe40sDLhE5TCcyS8A0Syav5qx1r4Zm9Vv1kMFjWCpVR8gVpewqF721i6MWlYd5zMFKYmJuO2DE0DTz%2F9FJDvLzPCIV5RXhLkqdNgZqpWe1eGzejCcxv6%2FBjqkAWXtj4H9ygvIjnSoW4ffL3Ldxjb9Qd3U5ZsG8HfcEUVQFlm1Van%2BQOI7bFzJX5gCA0i15QKi45oy6%2By%2B519XssMpQ0euZfhbKtgq%2FYOeaxoD7z0e%2BdfGxY3r%2BXC8fvGe0ACl9YAgX%2BbTrzVvPWzcjK97sBRqAFLSDElJ56uniYCFRjh130ePw9w1WGZ3g9KVWiFTZwJcYmYb4MYTnnYAxmS1bVGD&X-Amz-Signature=3ea375904a8babf2dfb0397ac9f47126f747ff10285c2b846794edb059098d91&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCE6FN6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChOpWUuGwrv9A2nfvL2kD1Ytr4CQZt%2BR%2FE%2Bl2alynRpQIhAO5%2FaoTLTMUz%2FfPojv%2BMJ6xhgyd5zqwS8hXkvP%2Fhf4QIKv8DCEYQABoMNjM3NDIzMTgzODA1IgyFShZpCEFbLaACJ3Qq3AP1lfjLIksdEezya8yj4fSXqcxZZU4wLM7Gptif2ca47905YqFA3ykxuyZnM1SeT6lV%2FGqQ0uo8pH7e9Q8%2BW704MJOm0H5gizYurOFZdcZ5Gk6JYqUwVrjmMyiguc9MwHPx5KNVc4aP0lhmh6nl9PF1pOa0Qx5O1y0%2B%2BIRuNYn2TANpeF%2FcWCYByTa%2FZKPVewkBH0bnBDGQO0BlbLca6JNMdEJHWVLSycQinuEMmU%2FlNARZnbzctf0ksB3pGwyZILJl6RQ6x419W86NmxyKMpQKJSpXULtb8G%2B67xYyuLE9KvpBJ39ML8olKGvmni8ZnrFuw%2FQxHKnlqJbxf1ddYjroCgtx7SVGEdfUa1Gu5oync%2BZKv1%2BiI5WgMitDwyH%2BqHQz1TrMYKVt8WvtO2vMsHSPXUDYh3BG4UwOG3ElkPdmuBW6c22hIjhz%2BA4UHYM%2BPfDNsYLCN03BHTWOP8KnZveBegFVepdjbj%2FQ8lC%2FoLHjc7RYcaXhegnGNYY9Z1A8FDL51hLNlCcY2Y0%2Fe40sDLhE5TCcyS8A0Syav5qx1r4Zm9Vv1kMFjWCpVR8gVpewqF721i6MWlYd5zMFKYmJuO2DE0DTz%2F9FJDvLzPCIV5RXhLkqdNgZqpWe1eGzejCcxv6%2FBjqkAWXtj4H9ygvIjnSoW4ffL3Ldxjb9Qd3U5ZsG8HfcEUVQFlm1Van%2BQOI7bFzJX5gCA0i15QKi45oy6%2By%2B519XssMpQ0euZfhbKtgq%2FYOeaxoD7z0e%2BdfGxY3r%2BXC8fvGe0ACl9YAgX%2BbTrzVvPWzcjK97sBRqAFLSDElJ56uniYCFRjh130ePw9w1WGZ3g9KVWiFTZwJcYmYb4MYTnnYAxmS1bVGD&X-Amz-Signature=aaf95dc21170acb5fd0af278a696790e244a5312de1395f6015a06510e65ae36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCE6FN6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChOpWUuGwrv9A2nfvL2kD1Ytr4CQZt%2BR%2FE%2Bl2alynRpQIhAO5%2FaoTLTMUz%2FfPojv%2BMJ6xhgyd5zqwS8hXkvP%2Fhf4QIKv8DCEYQABoMNjM3NDIzMTgzODA1IgyFShZpCEFbLaACJ3Qq3AP1lfjLIksdEezya8yj4fSXqcxZZU4wLM7Gptif2ca47905YqFA3ykxuyZnM1SeT6lV%2FGqQ0uo8pH7e9Q8%2BW704MJOm0H5gizYurOFZdcZ5Gk6JYqUwVrjmMyiguc9MwHPx5KNVc4aP0lhmh6nl9PF1pOa0Qx5O1y0%2B%2BIRuNYn2TANpeF%2FcWCYByTa%2FZKPVewkBH0bnBDGQO0BlbLca6JNMdEJHWVLSycQinuEMmU%2FlNARZnbzctf0ksB3pGwyZILJl6RQ6x419W86NmxyKMpQKJSpXULtb8G%2B67xYyuLE9KvpBJ39ML8olKGvmni8ZnrFuw%2FQxHKnlqJbxf1ddYjroCgtx7SVGEdfUa1Gu5oync%2BZKv1%2BiI5WgMitDwyH%2BqHQz1TrMYKVt8WvtO2vMsHSPXUDYh3BG4UwOG3ElkPdmuBW6c22hIjhz%2BA4UHYM%2BPfDNsYLCN03BHTWOP8KnZveBegFVepdjbj%2FQ8lC%2FoLHjc7RYcaXhegnGNYY9Z1A8FDL51hLNlCcY2Y0%2Fe40sDLhE5TCcyS8A0Syav5qx1r4Zm9Vv1kMFjWCpVR8gVpewqF721i6MWlYd5zMFKYmJuO2DE0DTz%2F9FJDvLzPCIV5RXhLkqdNgZqpWe1eGzejCcxv6%2FBjqkAWXtj4H9ygvIjnSoW4ffL3Ldxjb9Qd3U5ZsG8HfcEUVQFlm1Van%2BQOI7bFzJX5gCA0i15QKi45oy6%2By%2B519XssMpQ0euZfhbKtgq%2FYOeaxoD7z0e%2BdfGxY3r%2BXC8fvGe0ACl9YAgX%2BbTrzVvPWzcjK97sBRqAFLSDElJ56uniYCFRjh130ePw9w1WGZ3g9KVWiFTZwJcYmYb4MYTnnYAxmS1bVGD&X-Amz-Signature=98fe0c535a1c7a6e5c02c3b8082e5a3724a1ed3d9ecf879f66b5fcaaaa284be3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
