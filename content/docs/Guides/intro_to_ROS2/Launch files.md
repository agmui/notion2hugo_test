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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZOFBEDB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEypbTyl4r72XHYlsCGtCeTBmgXD86b04Ixvfk5zA7jEAiAuCDiiKwN5QcU8bRe6BSXmny8SgB20cejo25msV4QkWSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMJRBuN1Pkn2A4lFXQKtwDlkI0xCvEFlltrkszlDPihbgL9XisBmWLWqYp6sb8S%2BloYqAVIxIX1DbVABWh50ozc%2BYGfx2EmF2cgmdtbnywx6jQISZ%2FnHkD6%2Bz%2B1uIshsCQtn97e2foHzbL9to%2Bv%2B4bSi5eKqulU8oy0OAQJKc7hdXCWMgmHbx1MRdcNPZESxi1bjF0FNmrlDJjVQT3pgm6Yo1VM%2F57ZQtMFIVsT2YzjRtMn28EORw4u0tWm9wq1GClGa29h3uediHFVMZdUG7DHVg8dRNKCBuoeAvF%2Fa747ckrPy0%2B%2FjTj3aPj7eJGgDXMFNB%2Bp8qi%2F%2F%2Bb0NuLplpYLF67nYMlMkSHq70OhWnXP7RMwjzR3lm3BLqqf0GgDXJUxh%2Bu87AXXhi7QrTbV3EqavQpUgHdIIQwjhIH2rZuO1SCq5GwN3Dsnv4IVAHLRZ2iUbsyLaZLzsLntBZ%2FZ6qmWraUQisrD1i14q3D9MlhYrqt03Si5pW20o%2FVcGttgRP8cLqym%2FfFGgvVfJOQcNvijAs46z9HbEkxNxd7VuFwNSH3duUBvW7d2wOu5MpWh36YgGkEnv7LpxyIMjRoMGysLiJpE8c9mkAYfxuOHi8sObjnbrQhojq2uPz2dkqbRjrsKYb66B7TPavSUfcwmObKwQY6pgFz%2FwRYK%2BiMYUqVVHrvGpG1x0Gy8Grx%2B5FJ2fAB2BY0QX7X3CeQHPJkMsQxcY9lHOvXWXRxDhCgtP0%2BuCMRfLy6AfJAVDJ%2FUTLCbyvDBNLaZmUMDtoCd9L4VSJ%2Fxyg44SbEmBRB%2B20zfL2YbpAsHVGd1aaBdmibideznlVCZvyTXBKbX%2FPo6utdEMANRUJDlmOJJtNy6DRV54IupCeJ2ML%2F7L7olUOz&X-Amz-Signature=50aef17d95a580e4c3c67d92601f464af682902db5983a22468040e3709e731d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZOFBEDB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEypbTyl4r72XHYlsCGtCeTBmgXD86b04Ixvfk5zA7jEAiAuCDiiKwN5QcU8bRe6BSXmny8SgB20cejo25msV4QkWSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMJRBuN1Pkn2A4lFXQKtwDlkI0xCvEFlltrkszlDPihbgL9XisBmWLWqYp6sb8S%2BloYqAVIxIX1DbVABWh50ozc%2BYGfx2EmF2cgmdtbnywx6jQISZ%2FnHkD6%2Bz%2B1uIshsCQtn97e2foHzbL9to%2Bv%2B4bSi5eKqulU8oy0OAQJKc7hdXCWMgmHbx1MRdcNPZESxi1bjF0FNmrlDJjVQT3pgm6Yo1VM%2F57ZQtMFIVsT2YzjRtMn28EORw4u0tWm9wq1GClGa29h3uediHFVMZdUG7DHVg8dRNKCBuoeAvF%2Fa747ckrPy0%2B%2FjTj3aPj7eJGgDXMFNB%2Bp8qi%2F%2F%2Bb0NuLplpYLF67nYMlMkSHq70OhWnXP7RMwjzR3lm3BLqqf0GgDXJUxh%2Bu87AXXhi7QrTbV3EqavQpUgHdIIQwjhIH2rZuO1SCq5GwN3Dsnv4IVAHLRZ2iUbsyLaZLzsLntBZ%2FZ6qmWraUQisrD1i14q3D9MlhYrqt03Si5pW20o%2FVcGttgRP8cLqym%2FfFGgvVfJOQcNvijAs46z9HbEkxNxd7VuFwNSH3duUBvW7d2wOu5MpWh36YgGkEnv7LpxyIMjRoMGysLiJpE8c9mkAYfxuOHi8sObjnbrQhojq2uPz2dkqbRjrsKYb66B7TPavSUfcwmObKwQY6pgFz%2FwRYK%2BiMYUqVVHrvGpG1x0Gy8Grx%2B5FJ2fAB2BY0QX7X3CeQHPJkMsQxcY9lHOvXWXRxDhCgtP0%2BuCMRfLy6AfJAVDJ%2FUTLCbyvDBNLaZmUMDtoCd9L4VSJ%2Fxyg44SbEmBRB%2B20zfL2YbpAsHVGd1aaBdmibideznlVCZvyTXBKbX%2FPo6utdEMANRUJDlmOJJtNy6DRV54IupCeJ2ML%2F7L7olUOz&X-Amz-Signature=961251ad17c3d64d99191887168824354083f821a2b07acb97a8edd6147a91db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZOFBEDB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEypbTyl4r72XHYlsCGtCeTBmgXD86b04Ixvfk5zA7jEAiAuCDiiKwN5QcU8bRe6BSXmny8SgB20cejo25msV4QkWSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMJRBuN1Pkn2A4lFXQKtwDlkI0xCvEFlltrkszlDPihbgL9XisBmWLWqYp6sb8S%2BloYqAVIxIX1DbVABWh50ozc%2BYGfx2EmF2cgmdtbnywx6jQISZ%2FnHkD6%2Bz%2B1uIshsCQtn97e2foHzbL9to%2Bv%2B4bSi5eKqulU8oy0OAQJKc7hdXCWMgmHbx1MRdcNPZESxi1bjF0FNmrlDJjVQT3pgm6Yo1VM%2F57ZQtMFIVsT2YzjRtMn28EORw4u0tWm9wq1GClGa29h3uediHFVMZdUG7DHVg8dRNKCBuoeAvF%2Fa747ckrPy0%2B%2FjTj3aPj7eJGgDXMFNB%2Bp8qi%2F%2F%2Bb0NuLplpYLF67nYMlMkSHq70OhWnXP7RMwjzR3lm3BLqqf0GgDXJUxh%2Bu87AXXhi7QrTbV3EqavQpUgHdIIQwjhIH2rZuO1SCq5GwN3Dsnv4IVAHLRZ2iUbsyLaZLzsLntBZ%2FZ6qmWraUQisrD1i14q3D9MlhYrqt03Si5pW20o%2FVcGttgRP8cLqym%2FfFGgvVfJOQcNvijAs46z9HbEkxNxd7VuFwNSH3duUBvW7d2wOu5MpWh36YgGkEnv7LpxyIMjRoMGysLiJpE8c9mkAYfxuOHi8sObjnbrQhojq2uPz2dkqbRjrsKYb66B7TPavSUfcwmObKwQY6pgFz%2FwRYK%2BiMYUqVVHrvGpG1x0Gy8Grx%2B5FJ2fAB2BY0QX7X3CeQHPJkMsQxcY9lHOvXWXRxDhCgtP0%2BuCMRfLy6AfJAVDJ%2FUTLCbyvDBNLaZmUMDtoCd9L4VSJ%2Fxyg44SbEmBRB%2B20zfL2YbpAsHVGd1aaBdmibideznlVCZvyTXBKbX%2FPo6utdEMANRUJDlmOJJtNy6DRV54IupCeJ2ML%2F7L7olUOz&X-Amz-Signature=d4800c7f518cb5d5e318ef214a64639836906d751cb4181e62c8a674c81ec2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
