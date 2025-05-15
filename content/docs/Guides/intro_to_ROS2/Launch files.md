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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWODERIT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBLIhAJs%2FpwOJzV2yoswHibEk1WRPiTOWTvBp8bvr5REAiA07ei5UWUnZ9vR5IWYt8QfscN8K%2FgYGJWeG3bS2lRbMyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhz4Y%2BmKtXz0p43VvKtwD6EljkpnD7kHQ7iIDfUFfFFgSnfYmBaOxSEZ1CKmMzG1nrYiw%2BGpG1w%2BTAOJyS6mnXHMSYtdkD6q6gqPyQJzQoR2T%2F4jYQY5HQLReOehA6qP2zz%2FUcTDWxxaBF0zIM6Yuuciot7%2BitNTQ0hLv%2F91njcn81rmmPxgSWyRxfo9eqvN7dvpm6VRa%2FCmvAUSGgE9yEqJwhQ%2F5nZALYbsrbZFW2JL5YWck45BPljT%2BwoCiq9UlegBimAfRotpeAjmoyhiDTddHDlS5WNsH0Pxo9%2B1EopE0EGdCMvgtf2ds4C2szmhFLhAhg3stKqTeERXuc3z35zNLZ9YshvoULFYLodvQSoVLxI8IENFVU%2BhKymntBUyLXABt611rWq5rv6ulfyJ5TJgRoZPn0FK4RFGuJcRzGoSLc5u2NfRp2YctDk7tAncijITsLlCRt6Wjfh%2Fek94yPY1y%2BvQ%2BOFf2bx5zOnZhP7Sxqlr9I4i9DyRhEMLTbJEVaMUcac0%2BgU1Rqfph1Ef6c44QyGWJaIE3JFlaPkPsJK%2FYv4avfBo9theePTZdwUOytD%2BlRQqXbO28DhrRAfAdW5PkipRZH2xP%2FF2mAfJEgwwCDrYF0F0TCcpR%2FS8TzdFhOshJVMqDhGFOUUEwydaXwQY6pgGYCyocREvCP5Dl0KjCawA6EUdCofi0sJopV%2BprWccH5khhxsVsHmx9w%2F6Vk8%2Beyq2kyfcXKkMYvs4fhxe%2FYsIE8WXIiNw9sxAJbFuZUQlfH%2BKNTRTbP2E2dzJgSPxjI8d%2FSZ0xtjn4tlL2ny4GrN5PbchqQbzbHIZ1C6hUW6VxnF1twwDIUSXO1WhilDAAER5LHh2Y6burVeB0Cw6WCGQFsJlAkw8P&X-Amz-Signature=a1b5ddeefee1e80498c2f37ceb4245b9b7845673ed4f76856dd20ac2905f7040&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWODERIT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBLIhAJs%2FpwOJzV2yoswHibEk1WRPiTOWTvBp8bvr5REAiA07ei5UWUnZ9vR5IWYt8QfscN8K%2FgYGJWeG3bS2lRbMyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhz4Y%2BmKtXz0p43VvKtwD6EljkpnD7kHQ7iIDfUFfFFgSnfYmBaOxSEZ1CKmMzG1nrYiw%2BGpG1w%2BTAOJyS6mnXHMSYtdkD6q6gqPyQJzQoR2T%2F4jYQY5HQLReOehA6qP2zz%2FUcTDWxxaBF0zIM6Yuuciot7%2BitNTQ0hLv%2F91njcn81rmmPxgSWyRxfo9eqvN7dvpm6VRa%2FCmvAUSGgE9yEqJwhQ%2F5nZALYbsrbZFW2JL5YWck45BPljT%2BwoCiq9UlegBimAfRotpeAjmoyhiDTddHDlS5WNsH0Pxo9%2B1EopE0EGdCMvgtf2ds4C2szmhFLhAhg3stKqTeERXuc3z35zNLZ9YshvoULFYLodvQSoVLxI8IENFVU%2BhKymntBUyLXABt611rWq5rv6ulfyJ5TJgRoZPn0FK4RFGuJcRzGoSLc5u2NfRp2YctDk7tAncijITsLlCRt6Wjfh%2Fek94yPY1y%2BvQ%2BOFf2bx5zOnZhP7Sxqlr9I4i9DyRhEMLTbJEVaMUcac0%2BgU1Rqfph1Ef6c44QyGWJaIE3JFlaPkPsJK%2FYv4avfBo9theePTZdwUOytD%2BlRQqXbO28DhrRAfAdW5PkipRZH2xP%2FF2mAfJEgwwCDrYF0F0TCcpR%2FS8TzdFhOshJVMqDhGFOUUEwydaXwQY6pgGYCyocREvCP5Dl0KjCawA6EUdCofi0sJopV%2BprWccH5khhxsVsHmx9w%2F6Vk8%2Beyq2kyfcXKkMYvs4fhxe%2FYsIE8WXIiNw9sxAJbFuZUQlfH%2BKNTRTbP2E2dzJgSPxjI8d%2FSZ0xtjn4tlL2ny4GrN5PbchqQbzbHIZ1C6hUW6VxnF1twwDIUSXO1WhilDAAER5LHh2Y6burVeB0Cw6WCGQFsJlAkw8P&X-Amz-Signature=1134a82c3f9bb04f861d510d97809370506fd712f3501c835926fd8dc11c92fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWODERIT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBLIhAJs%2FpwOJzV2yoswHibEk1WRPiTOWTvBp8bvr5REAiA07ei5UWUnZ9vR5IWYt8QfscN8K%2FgYGJWeG3bS2lRbMyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhz4Y%2BmKtXz0p43VvKtwD6EljkpnD7kHQ7iIDfUFfFFgSnfYmBaOxSEZ1CKmMzG1nrYiw%2BGpG1w%2BTAOJyS6mnXHMSYtdkD6q6gqPyQJzQoR2T%2F4jYQY5HQLReOehA6qP2zz%2FUcTDWxxaBF0zIM6Yuuciot7%2BitNTQ0hLv%2F91njcn81rmmPxgSWyRxfo9eqvN7dvpm6VRa%2FCmvAUSGgE9yEqJwhQ%2F5nZALYbsrbZFW2JL5YWck45BPljT%2BwoCiq9UlegBimAfRotpeAjmoyhiDTddHDlS5WNsH0Pxo9%2B1EopE0EGdCMvgtf2ds4C2szmhFLhAhg3stKqTeERXuc3z35zNLZ9YshvoULFYLodvQSoVLxI8IENFVU%2BhKymntBUyLXABt611rWq5rv6ulfyJ5TJgRoZPn0FK4RFGuJcRzGoSLc5u2NfRp2YctDk7tAncijITsLlCRt6Wjfh%2Fek94yPY1y%2BvQ%2BOFf2bx5zOnZhP7Sxqlr9I4i9DyRhEMLTbJEVaMUcac0%2BgU1Rqfph1Ef6c44QyGWJaIE3JFlaPkPsJK%2FYv4avfBo9theePTZdwUOytD%2BlRQqXbO28DhrRAfAdW5PkipRZH2xP%2FF2mAfJEgwwCDrYF0F0TCcpR%2FS8TzdFhOshJVMqDhGFOUUEwydaXwQY6pgGYCyocREvCP5Dl0KjCawA6EUdCofi0sJopV%2BprWccH5khhxsVsHmx9w%2F6Vk8%2Beyq2kyfcXKkMYvs4fhxe%2FYsIE8WXIiNw9sxAJbFuZUQlfH%2BKNTRTbP2E2dzJgSPxjI8d%2FSZ0xtjn4tlL2ny4GrN5PbchqQbzbHIZ1C6hUW6VxnF1twwDIUSXO1WhilDAAER5LHh2Y6burVeB0Cw6WCGQFsJlAkw8P&X-Amz-Signature=87069342d616b6772255d601d9dd336c106d1ddfc1666df00ba5c2e50718cafd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
