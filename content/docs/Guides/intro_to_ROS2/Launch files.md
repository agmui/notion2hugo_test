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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VITMEW4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOpB6z12fvptna4BDLnCkg1SOqFvIeggEQfUxhL59AZAiEAujsPQGsHcZPYj4NiwZP7YBXweL0USC4ITfCT6u0y6NUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABMGFQT%2FpY8rIDb4SrcAxDwawZVMYyR78QsQrD3vyaRsqwLn123FALGXrU%2BJClx6QjurBJdSl6TTWBYOjEoWVl%2FYfURdK0qD9xdvDVOOkryg%2FpPImtyaPtYUuY3HNA1NRRCKNWhQBFK9fKCzfDoElYvKcB4jM5KiTNvZeorIGBLTOy5Mibys2nfMBTtpc8zEj3yrh39SgcyjhauN2g6xh8GksCpcY7zhvWj1%2FvGUNAWQI5Ld7MntIrJgpb%2F6i1akkfpRxtT6DoUsHfCVtrWRvRNDt05UjVfN4C4duSbprcWpfbGpSkTIdPb%2BzLA%2FqmCFi76vjK9FQZbYrD0qv7nOC5AI348%2FIjREr8PYsrVaQizpMWq5Sd69vLjhLKz3JleA5vFU9MD0A1tND7naCsWAdpLj21r%2BU961ERUlHg1vFvfpAJOdzi%2F65GidkP73mgW16Epn5GhER582UuNAD%2BFAJgjWwORSxOpNDUej%2B9At9qFyX4SEyOMHqxkdbzhvewFohbY%2BCIfEn9o%2BfIkwxtw46sqRYaWa24t7a4wxJxmRvA%2Bgz63v7Q787evXmwwlsfJWCRQ4yvBb3jPlYOWY%2BG8mMvqGp1fOo7mGw3mQgMujNVZXIMdNmYm%2FZ9upyh82tjnB1xsUqT%2BE2gDw8BOMOC9%2FbwGOqUBuUizM1S9wGKojTEn6RI5%2BaoHv0PgcaLAkYS2nid2emFQbMYJrKET%2F5IGKesN2KWADD6ZiBCq2eHv6U3do9ePqSxTMGpthBxsXR2q%2Fitp1QhNoeLvFP5y1RdrVhx5%2B1UAKFiimrA0ZfRrXWyzg03jMN7GGiB2aGgSB%2BMeAyD2Pmo%2BlRjFxYNLx9gQjxoeWdw8vGnkwCcUDwAutpimO55VMxRktR72&X-Amz-Signature=a7229e94bd687f0d0626092d9238a482ebe47ed431252feb95af89dd37dbc8da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VITMEW4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOpB6z12fvptna4BDLnCkg1SOqFvIeggEQfUxhL59AZAiEAujsPQGsHcZPYj4NiwZP7YBXweL0USC4ITfCT6u0y6NUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABMGFQT%2FpY8rIDb4SrcAxDwawZVMYyR78QsQrD3vyaRsqwLn123FALGXrU%2BJClx6QjurBJdSl6TTWBYOjEoWVl%2FYfURdK0qD9xdvDVOOkryg%2FpPImtyaPtYUuY3HNA1NRRCKNWhQBFK9fKCzfDoElYvKcB4jM5KiTNvZeorIGBLTOy5Mibys2nfMBTtpc8zEj3yrh39SgcyjhauN2g6xh8GksCpcY7zhvWj1%2FvGUNAWQI5Ld7MntIrJgpb%2F6i1akkfpRxtT6DoUsHfCVtrWRvRNDt05UjVfN4C4duSbprcWpfbGpSkTIdPb%2BzLA%2FqmCFi76vjK9FQZbYrD0qv7nOC5AI348%2FIjREr8PYsrVaQizpMWq5Sd69vLjhLKz3JleA5vFU9MD0A1tND7naCsWAdpLj21r%2BU961ERUlHg1vFvfpAJOdzi%2F65GidkP73mgW16Epn5GhER582UuNAD%2BFAJgjWwORSxOpNDUej%2B9At9qFyX4SEyOMHqxkdbzhvewFohbY%2BCIfEn9o%2BfIkwxtw46sqRYaWa24t7a4wxJxmRvA%2Bgz63v7Q787evXmwwlsfJWCRQ4yvBb3jPlYOWY%2BG8mMvqGp1fOo7mGw3mQgMujNVZXIMdNmYm%2FZ9upyh82tjnB1xsUqT%2BE2gDw8BOMOC9%2FbwGOqUBuUizM1S9wGKojTEn6RI5%2BaoHv0PgcaLAkYS2nid2emFQbMYJrKET%2F5IGKesN2KWADD6ZiBCq2eHv6U3do9ePqSxTMGpthBxsXR2q%2Fitp1QhNoeLvFP5y1RdrVhx5%2B1UAKFiimrA0ZfRrXWyzg03jMN7GGiB2aGgSB%2BMeAyD2Pmo%2BlRjFxYNLx9gQjxoeWdw8vGnkwCcUDwAutpimO55VMxRktR72&X-Amz-Signature=3f88433bda00d44e0e1f736dd834014c46bd7bd933b162014960de6e514423b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VITMEW4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOpB6z12fvptna4BDLnCkg1SOqFvIeggEQfUxhL59AZAiEAujsPQGsHcZPYj4NiwZP7YBXweL0USC4ITfCT6u0y6NUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABMGFQT%2FpY8rIDb4SrcAxDwawZVMYyR78QsQrD3vyaRsqwLn123FALGXrU%2BJClx6QjurBJdSl6TTWBYOjEoWVl%2FYfURdK0qD9xdvDVOOkryg%2FpPImtyaPtYUuY3HNA1NRRCKNWhQBFK9fKCzfDoElYvKcB4jM5KiTNvZeorIGBLTOy5Mibys2nfMBTtpc8zEj3yrh39SgcyjhauN2g6xh8GksCpcY7zhvWj1%2FvGUNAWQI5Ld7MntIrJgpb%2F6i1akkfpRxtT6DoUsHfCVtrWRvRNDt05UjVfN4C4duSbprcWpfbGpSkTIdPb%2BzLA%2FqmCFi76vjK9FQZbYrD0qv7nOC5AI348%2FIjREr8PYsrVaQizpMWq5Sd69vLjhLKz3JleA5vFU9MD0A1tND7naCsWAdpLj21r%2BU961ERUlHg1vFvfpAJOdzi%2F65GidkP73mgW16Epn5GhER582UuNAD%2BFAJgjWwORSxOpNDUej%2B9At9qFyX4SEyOMHqxkdbzhvewFohbY%2BCIfEn9o%2BfIkwxtw46sqRYaWa24t7a4wxJxmRvA%2Bgz63v7Q787evXmwwlsfJWCRQ4yvBb3jPlYOWY%2BG8mMvqGp1fOo7mGw3mQgMujNVZXIMdNmYm%2FZ9upyh82tjnB1xsUqT%2BE2gDw8BOMOC9%2FbwGOqUBuUizM1S9wGKojTEn6RI5%2BaoHv0PgcaLAkYS2nid2emFQbMYJrKET%2F5IGKesN2KWADD6ZiBCq2eHv6U3do9ePqSxTMGpthBxsXR2q%2Fitp1QhNoeLvFP5y1RdrVhx5%2B1UAKFiimrA0ZfRrXWyzg03jMN7GGiB2aGgSB%2BMeAyD2Pmo%2BlRjFxYNLx9gQjxoeWdw8vGnkwCcUDwAutpimO55VMxRktR72&X-Amz-Signature=222f5a129880dbcb1314559f42f831e1bf908d4bfdc984d2b357d320ce6cc3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
