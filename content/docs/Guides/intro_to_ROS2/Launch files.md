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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPLMZYT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuQfuvh3AI5ArH6pAXrKkpMCFwCns6Ajp20J5UwH7pOgIhAP0Jxue2dgUXaIR1WC6x59dqL%2FPW4BBf5DHq9GrBxH2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKbsB%2BeYThYGCGQHIq3AMIXlJ%2FoirZZoS2V34oRs1ELGGaCtZsnataNs76tgYs8pevfUqJNCuYpuNVFffzNR8tpo1ko5X4g8Hq1GDVNBXbCkTuVkhpl2%2FboR9pXoBeDNWah3m%2FuMNlURUKyyv%2BH14AYMx9a0vzFa6Q%2Fe7kIEsDYr9Yu6SRIM3VehIHLezaEsEBu0BKsngtlQTAFeUTYjJogf582cqP5GN4e%2BpfknrnOSvmC1wKZYAEgz2Mn7IcLiQKEw05AkvFcKJAWw%2B0rsjdaQB%2B0Nmb0X6baA5R%2Fgr9IHv4FQMHCjuTdc0u0AwX4EWwBLASHN4bGERwgfG6kxZImdhy4LJGWJvovk1g2D1ZMH58s3oCVJtOymW0jT%2BzPvlI01wx2l%2BajQAR3nmWsOuZ02WjHLtDggEiTrY2oCImlHNMZxMY%2FMJoO8QQhSBZuZ89RyHfPB%2BzPDsrHqKODq1z87x79kSr%2FtltxlJu4MS%2B2PMCnZxE7Be6KB7MuBUjqAlSnYJyx%2BWycwDyqoMIPefX41v%2F6U6JUuYu7WxSRvsAA8vn8M6EhnDS7CZAd8tVL6yu9wGRv69QYYphYtv5W0YISdPBgggv0oFCn4qcxG9tXB2v0MjwkQvQ1y3TeZwdKl9H2orQr5%2BrM%2FpRbTDt8oC%2FBjqkAS3rYHoOc5P4xZozKkzRo1qYq3Vdkh%2FDKwqUPLXYyf4TbTosgjQjs1kf%2Fi6B%2F83IhAvb27i%2BvEw23CRqEi8HQnOEuQm6zkiPL3FZv0LdnogE9rvV6WhwWNd71klJ%2FAh6DzE0o74FrA3JywwxmzNTJ927ASqZccHoL%2B%2F8xBSoEmYKrmfzeNqpTG91BcdC%2FDYHSsPVZhjcvXKuUfJ8GZFejViJ%2FYcn&X-Amz-Signature=449184d8e8da293c36ab5243d97b080fdf82bc9e83edc029c867fc8ed66a2ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPLMZYT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuQfuvh3AI5ArH6pAXrKkpMCFwCns6Ajp20J5UwH7pOgIhAP0Jxue2dgUXaIR1WC6x59dqL%2FPW4BBf5DHq9GrBxH2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKbsB%2BeYThYGCGQHIq3AMIXlJ%2FoirZZoS2V34oRs1ELGGaCtZsnataNs76tgYs8pevfUqJNCuYpuNVFffzNR8tpo1ko5X4g8Hq1GDVNBXbCkTuVkhpl2%2FboR9pXoBeDNWah3m%2FuMNlURUKyyv%2BH14AYMx9a0vzFa6Q%2Fe7kIEsDYr9Yu6SRIM3VehIHLezaEsEBu0BKsngtlQTAFeUTYjJogf582cqP5GN4e%2BpfknrnOSvmC1wKZYAEgz2Mn7IcLiQKEw05AkvFcKJAWw%2B0rsjdaQB%2B0Nmb0X6baA5R%2Fgr9IHv4FQMHCjuTdc0u0AwX4EWwBLASHN4bGERwgfG6kxZImdhy4LJGWJvovk1g2D1ZMH58s3oCVJtOymW0jT%2BzPvlI01wx2l%2BajQAR3nmWsOuZ02WjHLtDggEiTrY2oCImlHNMZxMY%2FMJoO8QQhSBZuZ89RyHfPB%2BzPDsrHqKODq1z87x79kSr%2FtltxlJu4MS%2B2PMCnZxE7Be6KB7MuBUjqAlSnYJyx%2BWycwDyqoMIPefX41v%2F6U6JUuYu7WxSRvsAA8vn8M6EhnDS7CZAd8tVL6yu9wGRv69QYYphYtv5W0YISdPBgggv0oFCn4qcxG9tXB2v0MjwkQvQ1y3TeZwdKl9H2orQr5%2BrM%2FpRbTDt8oC%2FBjqkAS3rYHoOc5P4xZozKkzRo1qYq3Vdkh%2FDKwqUPLXYyf4TbTosgjQjs1kf%2Fi6B%2F83IhAvb27i%2BvEw23CRqEi8HQnOEuQm6zkiPL3FZv0LdnogE9rvV6WhwWNd71klJ%2FAh6DzE0o74FrA3JywwxmzNTJ927ASqZccHoL%2B%2F8xBSoEmYKrmfzeNqpTG91BcdC%2FDYHSsPVZhjcvXKuUfJ8GZFejViJ%2FYcn&X-Amz-Signature=2efa717ceff3b6403d3e8d8731e390e7f705c05cf54bbc1bfe781f928a36d0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPLMZYT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuQfuvh3AI5ArH6pAXrKkpMCFwCns6Ajp20J5UwH7pOgIhAP0Jxue2dgUXaIR1WC6x59dqL%2FPW4BBf5DHq9GrBxH2OKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKbsB%2BeYThYGCGQHIq3AMIXlJ%2FoirZZoS2V34oRs1ELGGaCtZsnataNs76tgYs8pevfUqJNCuYpuNVFffzNR8tpo1ko5X4g8Hq1GDVNBXbCkTuVkhpl2%2FboR9pXoBeDNWah3m%2FuMNlURUKyyv%2BH14AYMx9a0vzFa6Q%2Fe7kIEsDYr9Yu6SRIM3VehIHLezaEsEBu0BKsngtlQTAFeUTYjJogf582cqP5GN4e%2BpfknrnOSvmC1wKZYAEgz2Mn7IcLiQKEw05AkvFcKJAWw%2B0rsjdaQB%2B0Nmb0X6baA5R%2Fgr9IHv4FQMHCjuTdc0u0AwX4EWwBLASHN4bGERwgfG6kxZImdhy4LJGWJvovk1g2D1ZMH58s3oCVJtOymW0jT%2BzPvlI01wx2l%2BajQAR3nmWsOuZ02WjHLtDggEiTrY2oCImlHNMZxMY%2FMJoO8QQhSBZuZ89RyHfPB%2BzPDsrHqKODq1z87x79kSr%2FtltxlJu4MS%2B2PMCnZxE7Be6KB7MuBUjqAlSnYJyx%2BWycwDyqoMIPefX41v%2F6U6JUuYu7WxSRvsAA8vn8M6EhnDS7CZAd8tVL6yu9wGRv69QYYphYtv5W0YISdPBgggv0oFCn4qcxG9tXB2v0MjwkQvQ1y3TeZwdKl9H2orQr5%2BrM%2FpRbTDt8oC%2FBjqkAS3rYHoOc5P4xZozKkzRo1qYq3Vdkh%2FDKwqUPLXYyf4TbTosgjQjs1kf%2Fi6B%2F83IhAvb27i%2BvEw23CRqEi8HQnOEuQm6zkiPL3FZv0LdnogE9rvV6WhwWNd71klJ%2FAh6DzE0o74FrA3JywwxmzNTJ927ASqZccHoL%2B%2F8xBSoEmYKrmfzeNqpTG91BcdC%2FDYHSsPVZhjcvXKuUfJ8GZFejViJ%2FYcn&X-Amz-Signature=62dea87b11b6e7587adb10882b3009e17817fdce05f95d6fd2f89941c5858beb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
