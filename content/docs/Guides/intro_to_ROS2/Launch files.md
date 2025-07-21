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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJI5QD6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0lfuNxR9lUWIAsLObpt%2BewixNw2lOQekvd4DUSNvvcAiB73qgbyE85L6wVnjwQ%2BmZX38trj6oFsqelb5MWsm1MciqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFoKBe0NPAbX3Sp5lKtwDBJZbA5uZTOWpTDfyk9baeTmey9Re9vJ5jX2fI6lOn74SJd0d7CbOuEAlg6I03polcog%2FWOHpIXerCO7nYbKf9gkxYe%2FDEgXrofp3AMtCCVHnY70w337P1uepqIuwkeC2NEDGyWLHhJpsIDFFqAHbZoViWAchU8zBdelsRy1W7sndwuna27iyFuKddJIFEoOoXaKZ6Z2Jp2EGnA45n4IXdE0cflmuvPOf5%2BScwZeXlYigcbCs4ppRub2gDPLGstwUoaqLIlSksHR8Nnilauaog%2FsoyyLsInpRavMZwLfkM8cgHDVDew5mQP3AbOavV4XBJP4ODUSzwgGj%2BhTqCN2HB0L6D%2BP1RNh6YEzWPdpV0oMiZxvre60L15WakIxAMSuvdTJAyDTIXecwfxwd9zs74Al8Gr5oeJ5YogBJEDI%2FiBUx3%2Bp2H0DeiW6hiGMz9zBdBRQMUAVzahVpxPsbCa37z3XWAnY6epu03cQWZpso47EIGJLHAo3x%2Fub2VbUGHhwfFSuiTky0kZZW2a0cKk0y%2B4u9hY8Dv6JkivtNfvo8JVCbWnaN%2FNfXja2zNnADnKM8YYqi%2FqeT%2BQ0QRgXFa18oGsuqZSPlTMxN4i60pSNdOOh779BiyIZwf%2B7AH%2FgwntT4wwY6pgHL58gWv3FUCcBaX8Pa1%2B51pJiNknkZxvh%2F0PlWwG3MgXFVmGwDovqdcKbTMtk8qvxqAxcAJIOHZxY35tTQY3Bc5e8rd0L1z2y6Z%2FUbxHEhf8Hd0cevYs8LplFJoReuoRMfGm0%2BcytYDqbL2fU1MFxijG0%2FQ2A63onXu4hqCXB67y41%2FdBVI%2FoZNjjCQ30iXcplBMQ8qJKD3%2FOiPiQo%2Bc9CPuFG7sEd&X-Amz-Signature=65e8dd842850d27816306d502764c63eeef28eed4d445fc48c7e1ac0be9822df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJI5QD6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0lfuNxR9lUWIAsLObpt%2BewixNw2lOQekvd4DUSNvvcAiB73qgbyE85L6wVnjwQ%2BmZX38trj6oFsqelb5MWsm1MciqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFoKBe0NPAbX3Sp5lKtwDBJZbA5uZTOWpTDfyk9baeTmey9Re9vJ5jX2fI6lOn74SJd0d7CbOuEAlg6I03polcog%2FWOHpIXerCO7nYbKf9gkxYe%2FDEgXrofp3AMtCCVHnY70w337P1uepqIuwkeC2NEDGyWLHhJpsIDFFqAHbZoViWAchU8zBdelsRy1W7sndwuna27iyFuKddJIFEoOoXaKZ6Z2Jp2EGnA45n4IXdE0cflmuvPOf5%2BScwZeXlYigcbCs4ppRub2gDPLGstwUoaqLIlSksHR8Nnilauaog%2FsoyyLsInpRavMZwLfkM8cgHDVDew5mQP3AbOavV4XBJP4ODUSzwgGj%2BhTqCN2HB0L6D%2BP1RNh6YEzWPdpV0oMiZxvre60L15WakIxAMSuvdTJAyDTIXecwfxwd9zs74Al8Gr5oeJ5YogBJEDI%2FiBUx3%2Bp2H0DeiW6hiGMz9zBdBRQMUAVzahVpxPsbCa37z3XWAnY6epu03cQWZpso47EIGJLHAo3x%2Fub2VbUGHhwfFSuiTky0kZZW2a0cKk0y%2B4u9hY8Dv6JkivtNfvo8JVCbWnaN%2FNfXja2zNnADnKM8YYqi%2FqeT%2BQ0QRgXFa18oGsuqZSPlTMxN4i60pSNdOOh779BiyIZwf%2B7AH%2FgwntT4wwY6pgHL58gWv3FUCcBaX8Pa1%2B51pJiNknkZxvh%2F0PlWwG3MgXFVmGwDovqdcKbTMtk8qvxqAxcAJIOHZxY35tTQY3Bc5e8rd0L1z2y6Z%2FUbxHEhf8Hd0cevYs8LplFJoReuoRMfGm0%2BcytYDqbL2fU1MFxijG0%2FQ2A63onXu4hqCXB67y41%2FdBVI%2FoZNjjCQ30iXcplBMQ8qJKD3%2FOiPiQo%2Bc9CPuFG7sEd&X-Amz-Signature=e2f90c928f1d7642cbf81fbe6a712184bbb04b366befc74a2148d5082ac3e5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJI5QD6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0lfuNxR9lUWIAsLObpt%2BewixNw2lOQekvd4DUSNvvcAiB73qgbyE85L6wVnjwQ%2BmZX38trj6oFsqelb5MWsm1MciqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFoKBe0NPAbX3Sp5lKtwDBJZbA5uZTOWpTDfyk9baeTmey9Re9vJ5jX2fI6lOn74SJd0d7CbOuEAlg6I03polcog%2FWOHpIXerCO7nYbKf9gkxYe%2FDEgXrofp3AMtCCVHnY70w337P1uepqIuwkeC2NEDGyWLHhJpsIDFFqAHbZoViWAchU8zBdelsRy1W7sndwuna27iyFuKddJIFEoOoXaKZ6Z2Jp2EGnA45n4IXdE0cflmuvPOf5%2BScwZeXlYigcbCs4ppRub2gDPLGstwUoaqLIlSksHR8Nnilauaog%2FsoyyLsInpRavMZwLfkM8cgHDVDew5mQP3AbOavV4XBJP4ODUSzwgGj%2BhTqCN2HB0L6D%2BP1RNh6YEzWPdpV0oMiZxvre60L15WakIxAMSuvdTJAyDTIXecwfxwd9zs74Al8Gr5oeJ5YogBJEDI%2FiBUx3%2Bp2H0DeiW6hiGMz9zBdBRQMUAVzahVpxPsbCa37z3XWAnY6epu03cQWZpso47EIGJLHAo3x%2Fub2VbUGHhwfFSuiTky0kZZW2a0cKk0y%2B4u9hY8Dv6JkivtNfvo8JVCbWnaN%2FNfXja2zNnADnKM8YYqi%2FqeT%2BQ0QRgXFa18oGsuqZSPlTMxN4i60pSNdOOh779BiyIZwf%2B7AH%2FgwntT4wwY6pgHL58gWv3FUCcBaX8Pa1%2B51pJiNknkZxvh%2F0PlWwG3MgXFVmGwDovqdcKbTMtk8qvxqAxcAJIOHZxY35tTQY3Bc5e8rd0L1z2y6Z%2FUbxHEhf8Hd0cevYs8LplFJoReuoRMfGm0%2BcytYDqbL2fU1MFxijG0%2FQ2A63onXu4hqCXB67y41%2FdBVI%2FoZNjjCQ30iXcplBMQ8qJKD3%2FOiPiQo%2Bc9CPuFG7sEd&X-Amz-Signature=4877de5024217781566d12f9bae187c2ceca4516c0d2e68c9d1bbcf4a9baf58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
