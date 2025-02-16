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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WT4IF6P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB3cKODDpSzZREJivMI%2FhsrtTlvPcgyK3BVx9xyi8342AiEAxzFvrXGE3RqkTU5k894SC2dVweOvmhzF5s%2FfUcYpTCkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC8j%2B2tzlj%2F6St4eHircA8h2lpXLc%2FIDS2yvf%2FCTwdiWWrhxHwiqvKtG5VLLAsFpgj3QsnBXSBTet9v5w8d5zJ2tKCxf3M%2Bvsnvoi6nx3%2FIZALuiNEy%2FRnLLji4ARM9ACzH2Fb3Jcy8g3p%2BG4jbv48ws7%2Bz57PLwdArN1A2dn95kTsKkN61odafnWgPO7wFA9qw3mc6MeYNG1MEECdC0QSznyRMG%2BBl%2Fn%2Bs8ycNo5XT9hP7HJ08EtSHgnWZsuve0f%2F1khXLADvOc%2FKpTleowZxWhykBC%2BQHCq0dlB4ayNLlf17fH26cu%2BmB0dKJafLvX7wDtYFDu8qp8oiMGLnevgVTcBY1JF4HFHue0wNDZ2UC0Ixlh9i8cll%2BTK9%2FjijqOFCobJM9YtevEezDSA8NKTc%2BAk4H%2BVk4DrFNM3R9xbO%2FqyTlq4252CMU%2BhJp0qP7lEB2LNqOwxhCOKikwyxh00OE%2FyP6R3DEltYPAVL5TpXWc%2FyrGLXahQKB6KQQh5RTBS9653%2BtxVB%2BDaQdq0KUIOAMmobujQecfPi%2F8OyJDnxM9ooCg8DChr0R2dul2PY%2B%2BGL0R%2FSH91EEj5Ewxodf7cL3HRGOH0kTbmQ0x0LCmz6U1Xd4sCt9cDJ8jSw1QIffgEnJ6smMWtoko%2BJuNMLTByL0GOqUBekrq2aW5Df1mj4hXCeNdRnu2QlWHcYjbqLzjMDw2J3UEZFl%2F%2FrLpRr1D4wgVzNCxj%2FHypugOBpZC79bUEPyiKOCW%2BlwTVeePmPpVAwxwZ%2B217CbsSu2HQpj7OpESkMKHWkUw1ZTVluyCDycrfvybD14HZa1Y5QrbiIrz5yF%2BrgbqFL2HMp8L6CKOXWlCDzbwoyohiqo4BuuXOo%2FyouQoX1rcEL5n&X-Amz-Signature=b8a394d4adad2f3b463a5a85db00329006c94044346a82f7dd8ff25b600207a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WT4IF6P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB3cKODDpSzZREJivMI%2FhsrtTlvPcgyK3BVx9xyi8342AiEAxzFvrXGE3RqkTU5k894SC2dVweOvmhzF5s%2FfUcYpTCkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC8j%2B2tzlj%2F6St4eHircA8h2lpXLc%2FIDS2yvf%2FCTwdiWWrhxHwiqvKtG5VLLAsFpgj3QsnBXSBTet9v5w8d5zJ2tKCxf3M%2Bvsnvoi6nx3%2FIZALuiNEy%2FRnLLji4ARM9ACzH2Fb3Jcy8g3p%2BG4jbv48ws7%2Bz57PLwdArN1A2dn95kTsKkN61odafnWgPO7wFA9qw3mc6MeYNG1MEECdC0QSznyRMG%2BBl%2Fn%2Bs8ycNo5XT9hP7HJ08EtSHgnWZsuve0f%2F1khXLADvOc%2FKpTleowZxWhykBC%2BQHCq0dlB4ayNLlf17fH26cu%2BmB0dKJafLvX7wDtYFDu8qp8oiMGLnevgVTcBY1JF4HFHue0wNDZ2UC0Ixlh9i8cll%2BTK9%2FjijqOFCobJM9YtevEezDSA8NKTc%2BAk4H%2BVk4DrFNM3R9xbO%2FqyTlq4252CMU%2BhJp0qP7lEB2LNqOwxhCOKikwyxh00OE%2FyP6R3DEltYPAVL5TpXWc%2FyrGLXahQKB6KQQh5RTBS9653%2BtxVB%2BDaQdq0KUIOAMmobujQecfPi%2F8OyJDnxM9ooCg8DChr0R2dul2PY%2B%2BGL0R%2FSH91EEj5Ewxodf7cL3HRGOH0kTbmQ0x0LCmz6U1Xd4sCt9cDJ8jSw1QIffgEnJ6smMWtoko%2BJuNMLTByL0GOqUBekrq2aW5Df1mj4hXCeNdRnu2QlWHcYjbqLzjMDw2J3UEZFl%2F%2FrLpRr1D4wgVzNCxj%2FHypugOBpZC79bUEPyiKOCW%2BlwTVeePmPpVAwxwZ%2B217CbsSu2HQpj7OpESkMKHWkUw1ZTVluyCDycrfvybD14HZa1Y5QrbiIrz5yF%2BrgbqFL2HMp8L6CKOXWlCDzbwoyohiqo4BuuXOo%2FyouQoX1rcEL5n&X-Amz-Signature=924fd20cddca67e01011f04d92b629a9bf28a32e8d14dc7aa1223ea1f3d7fe89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WT4IF6P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB3cKODDpSzZREJivMI%2FhsrtTlvPcgyK3BVx9xyi8342AiEAxzFvrXGE3RqkTU5k894SC2dVweOvmhzF5s%2FfUcYpTCkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC8j%2B2tzlj%2F6St4eHircA8h2lpXLc%2FIDS2yvf%2FCTwdiWWrhxHwiqvKtG5VLLAsFpgj3QsnBXSBTet9v5w8d5zJ2tKCxf3M%2Bvsnvoi6nx3%2FIZALuiNEy%2FRnLLji4ARM9ACzH2Fb3Jcy8g3p%2BG4jbv48ws7%2Bz57PLwdArN1A2dn95kTsKkN61odafnWgPO7wFA9qw3mc6MeYNG1MEECdC0QSznyRMG%2BBl%2Fn%2Bs8ycNo5XT9hP7HJ08EtSHgnWZsuve0f%2F1khXLADvOc%2FKpTleowZxWhykBC%2BQHCq0dlB4ayNLlf17fH26cu%2BmB0dKJafLvX7wDtYFDu8qp8oiMGLnevgVTcBY1JF4HFHue0wNDZ2UC0Ixlh9i8cll%2BTK9%2FjijqOFCobJM9YtevEezDSA8NKTc%2BAk4H%2BVk4DrFNM3R9xbO%2FqyTlq4252CMU%2BhJp0qP7lEB2LNqOwxhCOKikwyxh00OE%2FyP6R3DEltYPAVL5TpXWc%2FyrGLXahQKB6KQQh5RTBS9653%2BtxVB%2BDaQdq0KUIOAMmobujQecfPi%2F8OyJDnxM9ooCg8DChr0R2dul2PY%2B%2BGL0R%2FSH91EEj5Ewxodf7cL3HRGOH0kTbmQ0x0LCmz6U1Xd4sCt9cDJ8jSw1QIffgEnJ6smMWtoko%2BJuNMLTByL0GOqUBekrq2aW5Df1mj4hXCeNdRnu2QlWHcYjbqLzjMDw2J3UEZFl%2F%2FrLpRr1D4wgVzNCxj%2FHypugOBpZC79bUEPyiKOCW%2BlwTVeePmPpVAwxwZ%2B217CbsSu2HQpj7OpESkMKHWkUw1ZTVluyCDycrfvybD14HZa1Y5QrbiIrz5yF%2BrgbqFL2HMp8L6CKOXWlCDzbwoyohiqo4BuuXOo%2FyouQoX1rcEL5n&X-Amz-Signature=cbe8dae5314480a4b4119eb15688da911328ba07e7ff8e105d835d6386c6f01f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
