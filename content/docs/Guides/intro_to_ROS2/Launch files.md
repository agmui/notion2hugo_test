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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEO6OMWU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjDBVdRSUQNaLcWlyqC5DMKWHO9ms%2FpSBr%2BtIo4J48PAiEAjBaH7Ascc0sOUbiQJLC4CP78AT%2FCEBg%2FeRYlVzk%2F6NUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFy4cgGsq0w5BDv2SrcA%2BI0R7VhSCwLsROwpjaRUdWdjq5bjRgi4EU8ga6ywn5i6r3R5cUTkHMY9f6tQal0v%2FGmBJUyhJG3vIiv8pa%2Bv5zm%2BRJEZBZoHTswVH8dKCAdKTSWnPieOo4H%2F0n6iv9%2BB2WjgyTUBX5JQPlm5GEMdGA9KFkziSIwz3nz%2BOtm8740BRps9hEaQuXiqKZvTJMETIDbYEgUk%2BXvu%2FpHlqF1veZrSgBw%2BZnMr9%2FvIfwCn4usUMlGM%2B4Bt4XHYx3jI6pOmcyeypb%2FpvbG46fTkJJvEra3tBQMvo3XfEYC0LJ1Lu3kMgaPpOb4woErmz57pcR4jDCGuV8q7IXUHMWaKyGVg2tK3%2ByMxFeGEIqLoYBS0aLpNp97X5w35p0QPcG3oFOEOg%2F5OIFEaWj5sZjf4rMGj1nqD%2BujyK3pN5raWYKyCU5cvn%2FZVtk90kvXeXcqjVy3iB7gv8lMxLwitJWHam2wUZznPKZoK0VcZyT7b3IVDHCqolesrJmHPRk1fxnTZTKLDaflgfXg0OKuqHrDltM5WY5QBie9ZLxyTU46zoLYFr%2BCWQKQkbp8k88aZwG8pSb2Gyk2xmlD1M06%2F45bkgft9jg9zC9eN3YgHpdnXlAHniRp%2FlbIwiB0tyTxuaXBMP3Qv8MGOqUBBd1ZZYfI33u4vdbYV62uKplxogeQWB3hFO%2BP5ziB6gOG29sJWcPr1fLbj0BmEBhlzXISD8VnFf3I%2B5hipoEyDSjPlmW71D00ODgpq9QTRcLeoLB96s%2B4G6FQejfclQtswc4uvoDpnOrw%2FB6rKBEAF13egCeKF9KoX1zBLFMesXsXcfonKSR6yNXFR5pxXzX0PuW274%2FqJ8A%2BxV02erohqiqgbIPC&X-Amz-Signature=af3fd41ab9e46675d93cdab944ce6aa3576903b20ed3360657455d1caf6e12d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEO6OMWU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjDBVdRSUQNaLcWlyqC5DMKWHO9ms%2FpSBr%2BtIo4J48PAiEAjBaH7Ascc0sOUbiQJLC4CP78AT%2FCEBg%2FeRYlVzk%2F6NUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFy4cgGsq0w5BDv2SrcA%2BI0R7VhSCwLsROwpjaRUdWdjq5bjRgi4EU8ga6ywn5i6r3R5cUTkHMY9f6tQal0v%2FGmBJUyhJG3vIiv8pa%2Bv5zm%2BRJEZBZoHTswVH8dKCAdKTSWnPieOo4H%2F0n6iv9%2BB2WjgyTUBX5JQPlm5GEMdGA9KFkziSIwz3nz%2BOtm8740BRps9hEaQuXiqKZvTJMETIDbYEgUk%2BXvu%2FpHlqF1veZrSgBw%2BZnMr9%2FvIfwCn4usUMlGM%2B4Bt4XHYx3jI6pOmcyeypb%2FpvbG46fTkJJvEra3tBQMvo3XfEYC0LJ1Lu3kMgaPpOb4woErmz57pcR4jDCGuV8q7IXUHMWaKyGVg2tK3%2ByMxFeGEIqLoYBS0aLpNp97X5w35p0QPcG3oFOEOg%2F5OIFEaWj5sZjf4rMGj1nqD%2BujyK3pN5raWYKyCU5cvn%2FZVtk90kvXeXcqjVy3iB7gv8lMxLwitJWHam2wUZznPKZoK0VcZyT7b3IVDHCqolesrJmHPRk1fxnTZTKLDaflgfXg0OKuqHrDltM5WY5QBie9ZLxyTU46zoLYFr%2BCWQKQkbp8k88aZwG8pSb2Gyk2xmlD1M06%2F45bkgft9jg9zC9eN3YgHpdnXlAHniRp%2FlbIwiB0tyTxuaXBMP3Qv8MGOqUBBd1ZZYfI33u4vdbYV62uKplxogeQWB3hFO%2BP5ziB6gOG29sJWcPr1fLbj0BmEBhlzXISD8VnFf3I%2B5hipoEyDSjPlmW71D00ODgpq9QTRcLeoLB96s%2B4G6FQejfclQtswc4uvoDpnOrw%2FB6rKBEAF13egCeKF9KoX1zBLFMesXsXcfonKSR6yNXFR5pxXzX0PuW274%2FqJ8A%2BxV02erohqiqgbIPC&X-Amz-Signature=00eca1f020e580d597cfa226f81a996baf52971358e6f443ffe72560b493bac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEO6OMWU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjDBVdRSUQNaLcWlyqC5DMKWHO9ms%2FpSBr%2BtIo4J48PAiEAjBaH7Ascc0sOUbiQJLC4CP78AT%2FCEBg%2FeRYlVzk%2F6NUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFy4cgGsq0w5BDv2SrcA%2BI0R7VhSCwLsROwpjaRUdWdjq5bjRgi4EU8ga6ywn5i6r3R5cUTkHMY9f6tQal0v%2FGmBJUyhJG3vIiv8pa%2Bv5zm%2BRJEZBZoHTswVH8dKCAdKTSWnPieOo4H%2F0n6iv9%2BB2WjgyTUBX5JQPlm5GEMdGA9KFkziSIwz3nz%2BOtm8740BRps9hEaQuXiqKZvTJMETIDbYEgUk%2BXvu%2FpHlqF1veZrSgBw%2BZnMr9%2FvIfwCn4usUMlGM%2B4Bt4XHYx3jI6pOmcyeypb%2FpvbG46fTkJJvEra3tBQMvo3XfEYC0LJ1Lu3kMgaPpOb4woErmz57pcR4jDCGuV8q7IXUHMWaKyGVg2tK3%2ByMxFeGEIqLoYBS0aLpNp97X5w35p0QPcG3oFOEOg%2F5OIFEaWj5sZjf4rMGj1nqD%2BujyK3pN5raWYKyCU5cvn%2FZVtk90kvXeXcqjVy3iB7gv8lMxLwitJWHam2wUZznPKZoK0VcZyT7b3IVDHCqolesrJmHPRk1fxnTZTKLDaflgfXg0OKuqHrDltM5WY5QBie9ZLxyTU46zoLYFr%2BCWQKQkbp8k88aZwG8pSb2Gyk2xmlD1M06%2F45bkgft9jg9zC9eN3YgHpdnXlAHniRp%2FlbIwiB0tyTxuaXBMP3Qv8MGOqUBBd1ZZYfI33u4vdbYV62uKplxogeQWB3hFO%2BP5ziB6gOG29sJWcPr1fLbj0BmEBhlzXISD8VnFf3I%2B5hipoEyDSjPlmW71D00ODgpq9QTRcLeoLB96s%2B4G6FQejfclQtswc4uvoDpnOrw%2FB6rKBEAF13egCeKF9KoX1zBLFMesXsXcfonKSR6yNXFR5pxXzX0PuW274%2FqJ8A%2BxV02erohqiqgbIPC&X-Amz-Signature=cd497d3c996c002529c7ebbc7cfd6a1b62b30ee808bf8fce153289024a7d5da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
