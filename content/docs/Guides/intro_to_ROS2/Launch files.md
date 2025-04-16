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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JWHMOV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDDc%2BreGUAS8YK3aJyczMHxuU4pFiGBIxWtI2oiXWkoAiB8gGW7GityoSy2hppPlXDQIiSijRImJVhGdDBh2FDVMSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMrMCQg8eAJG0V18rjKtwDkSl7TtcfN0YgS7eQfAAaYITd0wKU%2F%2BLG6s%2Fb6fh5%2B4z1qvmKO9bVEHRtLNoTV24GrctQZtH%2BWmwIEctPT1Q%2Fq0HhDIBIn64Cbtv1hkxtyA1jYLaHWm0%2BHTGv5ajGAy3sg9AKPHYBz2jl3RgCNMl7Qf6gVDc6VJcGQaL7lI7%2BJDF7AdyH25q3NuP7CGxviXuUohgqXjc3rVDCIOsmhlrDXxZn7wDrB1Vs5y3eNAvfHbiB1HK5jb2d%2BJ997WF2M7uH8TvcKTFE8RFn4ZoivhNCFxCHeP%2FeTwCwDvbLmlHLiyjRnCiMYh7JVxgxEZtik2GK7TqdgsLoY81mna4c7pP7BZVvb4SxXBRsRHR8tn3s5l5C3JXVTlzy7EE%2BjQbo6dhIJqf3LnEIEGGNBZb7eqlm5t2Jvgyy7CJGHA2o%2BT1v3SaLrEyabkx5daxi5hu%2BqSVCu5qpBWwu1wwcmp3JazkG7cfCGmcdf35Ijd1mHUd%2BCP%2BRUv3bEy23p1ktZJypg%2FrtAvnZUN4E4ZBmBCLXUja6txknODZxRlwq6%2BMEW2%2B6CasBq3spgnWmIdUqyPvCXHwtYlf336mHJ4AnfHEAETgk321%2F2JN2is0KvfwBti7ALD%2Fc5DHbKWipYAYdAw4wkKv%2BvwY6pgGYfY1MRUzlCSSZiL0Njv5qfzAYFRgzNqxJ8iHObnxf94fp%2B%2BjPS7hTsLspX8ntB3brtU5xyAkwbAwXKzO26hMegBBtdIR3pMsAuW8vfbVHFiOaKY42f4V6i1RwOGGF9ujIXbd0b11we0C0OqMRgWDOPslew7PWdhI1zDLbJasaZPuWmp7zQY40A1uAI%2BNPBkxpBQSCYRUDWUTkJnurw9T52kNgd%2FC8&X-Amz-Signature=d7013b4f658823a5e448b1a8d5fddb4214b9e37def25fa04dd230196391353c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JWHMOV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDDc%2BreGUAS8YK3aJyczMHxuU4pFiGBIxWtI2oiXWkoAiB8gGW7GityoSy2hppPlXDQIiSijRImJVhGdDBh2FDVMSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMrMCQg8eAJG0V18rjKtwDkSl7TtcfN0YgS7eQfAAaYITd0wKU%2F%2BLG6s%2Fb6fh5%2B4z1qvmKO9bVEHRtLNoTV24GrctQZtH%2BWmwIEctPT1Q%2Fq0HhDIBIn64Cbtv1hkxtyA1jYLaHWm0%2BHTGv5ajGAy3sg9AKPHYBz2jl3RgCNMl7Qf6gVDc6VJcGQaL7lI7%2BJDF7AdyH25q3NuP7CGxviXuUohgqXjc3rVDCIOsmhlrDXxZn7wDrB1Vs5y3eNAvfHbiB1HK5jb2d%2BJ997WF2M7uH8TvcKTFE8RFn4ZoivhNCFxCHeP%2FeTwCwDvbLmlHLiyjRnCiMYh7JVxgxEZtik2GK7TqdgsLoY81mna4c7pP7BZVvb4SxXBRsRHR8tn3s5l5C3JXVTlzy7EE%2BjQbo6dhIJqf3LnEIEGGNBZb7eqlm5t2Jvgyy7CJGHA2o%2BT1v3SaLrEyabkx5daxi5hu%2BqSVCu5qpBWwu1wwcmp3JazkG7cfCGmcdf35Ijd1mHUd%2BCP%2BRUv3bEy23p1ktZJypg%2FrtAvnZUN4E4ZBmBCLXUja6txknODZxRlwq6%2BMEW2%2B6CasBq3spgnWmIdUqyPvCXHwtYlf336mHJ4AnfHEAETgk321%2F2JN2is0KvfwBti7ALD%2Fc5DHbKWipYAYdAw4wkKv%2BvwY6pgGYfY1MRUzlCSSZiL0Njv5qfzAYFRgzNqxJ8iHObnxf94fp%2B%2BjPS7hTsLspX8ntB3brtU5xyAkwbAwXKzO26hMegBBtdIR3pMsAuW8vfbVHFiOaKY42f4V6i1RwOGGF9ujIXbd0b11we0C0OqMRgWDOPslew7PWdhI1zDLbJasaZPuWmp7zQY40A1uAI%2BNPBkxpBQSCYRUDWUTkJnurw9T52kNgd%2FC8&X-Amz-Signature=3b32db7b86df7d18882a39970473fee0addc76aea24959717579ab2c4628d1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JWHMOV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDDc%2BreGUAS8YK3aJyczMHxuU4pFiGBIxWtI2oiXWkoAiB8gGW7GityoSy2hppPlXDQIiSijRImJVhGdDBh2FDVMSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMrMCQg8eAJG0V18rjKtwDkSl7TtcfN0YgS7eQfAAaYITd0wKU%2F%2BLG6s%2Fb6fh5%2B4z1qvmKO9bVEHRtLNoTV24GrctQZtH%2BWmwIEctPT1Q%2Fq0HhDIBIn64Cbtv1hkxtyA1jYLaHWm0%2BHTGv5ajGAy3sg9AKPHYBz2jl3RgCNMl7Qf6gVDc6VJcGQaL7lI7%2BJDF7AdyH25q3NuP7CGxviXuUohgqXjc3rVDCIOsmhlrDXxZn7wDrB1Vs5y3eNAvfHbiB1HK5jb2d%2BJ997WF2M7uH8TvcKTFE8RFn4ZoivhNCFxCHeP%2FeTwCwDvbLmlHLiyjRnCiMYh7JVxgxEZtik2GK7TqdgsLoY81mna4c7pP7BZVvb4SxXBRsRHR8tn3s5l5C3JXVTlzy7EE%2BjQbo6dhIJqf3LnEIEGGNBZb7eqlm5t2Jvgyy7CJGHA2o%2BT1v3SaLrEyabkx5daxi5hu%2BqSVCu5qpBWwu1wwcmp3JazkG7cfCGmcdf35Ijd1mHUd%2BCP%2BRUv3bEy23p1ktZJypg%2FrtAvnZUN4E4ZBmBCLXUja6txknODZxRlwq6%2BMEW2%2B6CasBq3spgnWmIdUqyPvCXHwtYlf336mHJ4AnfHEAETgk321%2F2JN2is0KvfwBti7ALD%2Fc5DHbKWipYAYdAw4wkKv%2BvwY6pgGYfY1MRUzlCSSZiL0Njv5qfzAYFRgzNqxJ8iHObnxf94fp%2B%2BjPS7hTsLspX8ntB3brtU5xyAkwbAwXKzO26hMegBBtdIR3pMsAuW8vfbVHFiOaKY42f4V6i1RwOGGF9ujIXbd0b11we0C0OqMRgWDOPslew7PWdhI1zDLbJasaZPuWmp7zQY40A1uAI%2BNPBkxpBQSCYRUDWUTkJnurw9T52kNgd%2FC8&X-Amz-Signature=c8fc1b919205728e7c87dbd9ec34c487d31d5b21fc7256e506cec15317726729&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
