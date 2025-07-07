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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEUAJEU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCImZgTDqNaVJEYgpWYK9UXi6ekAWW3VzqK%2FmHTagSfwIgYgjnp62q7liWLyBV4v0bJo2uXuGPZgp%2FOpQvKmCkNDgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDE77ErvlGbR5TEXSuCrcA9U1mMaDdt94PrG%2B%2BUIqhcO1oOpyO2%2BIqAWie6lg5iaNHa6zRNsH5y%2BUAIF3Jet4TTO%2Bwxat%2FsWZgoJgJ%2Flo%2FvYUkFFCpW57RTVL0MvhEJm0bY1dT5Iw2wpuKpT%2B9xrR%2FQQ5xLAfxhoorfjK8wV7j7luKQeh2PgUp%2FdKQQugrK3G9l%2Fuj3E05KCBS7Y10%2BeDTDauh%2BVmJbToCFvQZdDXmqP0PnCt96TcQTossFopvdcyn1psEMjpQexu%2FQYezaKwb1bHgdJaFcEr7h5N4RsvEtn2naBWwQfrF2bmFXAPtMoXwuKhSkDD0y%2FcBVKxavC9sb6E5rotUb%2B5NidOX5vN67E3d3%2FHDWOEfs6dSGZynCbwidfmNqR%2BjSV7YU0Y4yGJqEC70FKjwfbv1P6F3jkfsFjbqvHlKrBpQDpx4cc394rFJt82XXAxlnamyl94DyIm5P%2BhabX4qx%2BHh4zRgBAK8luMNzDlABLWtVKabr3dYftegdr4LHE13XLsDH09o58WgPpRbnmNeNnPDOlaogMF2k%2FLcsWod3%2FVCqSHvaRwrqv2vLuNcT1BMN%2F6EF8xMGvFGtUcNFh%2Bv%2BRT5aTTgq206DGjV2vgdTbheWC%2BJP8Ro3tJoyj9k7pvqv25MHC%2BMPKYrsMGOqUBXyIP%2Foh1Fwx908lgTxdriavBmqzcXzMl5Ns3Y8NKl6ZHomLPwnMdAWhHspkonLgQR4Zri1cPFR2VDdUQJJFUXtceXUkGjnhwn83%2BDkqzU%2Bl2F09BxixjQ8OxegChxZ5MKKw6R9sx2ZVmieqo46wbuY3oooU52nQyn6mRF8JJc%2BwTi4vEMtooiZi4osXwdvAfvjpwrSBjhZvJprflnuenowhi1p8m&X-Amz-Signature=7f1a3fd0ec656b1eb6b9e299bc23085e219241650425d87f5afb77cfc51e079b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEUAJEU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCImZgTDqNaVJEYgpWYK9UXi6ekAWW3VzqK%2FmHTagSfwIgYgjnp62q7liWLyBV4v0bJo2uXuGPZgp%2FOpQvKmCkNDgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDE77ErvlGbR5TEXSuCrcA9U1mMaDdt94PrG%2B%2BUIqhcO1oOpyO2%2BIqAWie6lg5iaNHa6zRNsH5y%2BUAIF3Jet4TTO%2Bwxat%2FsWZgoJgJ%2Flo%2FvYUkFFCpW57RTVL0MvhEJm0bY1dT5Iw2wpuKpT%2B9xrR%2FQQ5xLAfxhoorfjK8wV7j7luKQeh2PgUp%2FdKQQugrK3G9l%2Fuj3E05KCBS7Y10%2BeDTDauh%2BVmJbToCFvQZdDXmqP0PnCt96TcQTossFopvdcyn1psEMjpQexu%2FQYezaKwb1bHgdJaFcEr7h5N4RsvEtn2naBWwQfrF2bmFXAPtMoXwuKhSkDD0y%2FcBVKxavC9sb6E5rotUb%2B5NidOX5vN67E3d3%2FHDWOEfs6dSGZynCbwidfmNqR%2BjSV7YU0Y4yGJqEC70FKjwfbv1P6F3jkfsFjbqvHlKrBpQDpx4cc394rFJt82XXAxlnamyl94DyIm5P%2BhabX4qx%2BHh4zRgBAK8luMNzDlABLWtVKabr3dYftegdr4LHE13XLsDH09o58WgPpRbnmNeNnPDOlaogMF2k%2FLcsWod3%2FVCqSHvaRwrqv2vLuNcT1BMN%2F6EF8xMGvFGtUcNFh%2Bv%2BRT5aTTgq206DGjV2vgdTbheWC%2BJP8Ro3tJoyj9k7pvqv25MHC%2BMPKYrsMGOqUBXyIP%2Foh1Fwx908lgTxdriavBmqzcXzMl5Ns3Y8NKl6ZHomLPwnMdAWhHspkonLgQR4Zri1cPFR2VDdUQJJFUXtceXUkGjnhwn83%2BDkqzU%2Bl2F09BxixjQ8OxegChxZ5MKKw6R9sx2ZVmieqo46wbuY3oooU52nQyn6mRF8JJc%2BwTi4vEMtooiZi4osXwdvAfvjpwrSBjhZvJprflnuenowhi1p8m&X-Amz-Signature=484ac5b98eaa94cc1a736dd3524db8385b584555918ba1a5f5c26e92f59a92ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEUAJEU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCImZgTDqNaVJEYgpWYK9UXi6ekAWW3VzqK%2FmHTagSfwIgYgjnp62q7liWLyBV4v0bJo2uXuGPZgp%2FOpQvKmCkNDgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDE77ErvlGbR5TEXSuCrcA9U1mMaDdt94PrG%2B%2BUIqhcO1oOpyO2%2BIqAWie6lg5iaNHa6zRNsH5y%2BUAIF3Jet4TTO%2Bwxat%2FsWZgoJgJ%2Flo%2FvYUkFFCpW57RTVL0MvhEJm0bY1dT5Iw2wpuKpT%2B9xrR%2FQQ5xLAfxhoorfjK8wV7j7luKQeh2PgUp%2FdKQQugrK3G9l%2Fuj3E05KCBS7Y10%2BeDTDauh%2BVmJbToCFvQZdDXmqP0PnCt96TcQTossFopvdcyn1psEMjpQexu%2FQYezaKwb1bHgdJaFcEr7h5N4RsvEtn2naBWwQfrF2bmFXAPtMoXwuKhSkDD0y%2FcBVKxavC9sb6E5rotUb%2B5NidOX5vN67E3d3%2FHDWOEfs6dSGZynCbwidfmNqR%2BjSV7YU0Y4yGJqEC70FKjwfbv1P6F3jkfsFjbqvHlKrBpQDpx4cc394rFJt82XXAxlnamyl94DyIm5P%2BhabX4qx%2BHh4zRgBAK8luMNzDlABLWtVKabr3dYftegdr4LHE13XLsDH09o58WgPpRbnmNeNnPDOlaogMF2k%2FLcsWod3%2FVCqSHvaRwrqv2vLuNcT1BMN%2F6EF8xMGvFGtUcNFh%2Bv%2BRT5aTTgq206DGjV2vgdTbheWC%2BJP8Ro3tJoyj9k7pvqv25MHC%2BMPKYrsMGOqUBXyIP%2Foh1Fwx908lgTxdriavBmqzcXzMl5Ns3Y8NKl6ZHomLPwnMdAWhHspkonLgQR4Zri1cPFR2VDdUQJJFUXtceXUkGjnhwn83%2BDkqzU%2Bl2F09BxixjQ8OxegChxZ5MKKw6R9sx2ZVmieqo46wbuY3oooU52nQyn6mRF8JJc%2BwTi4vEMtooiZi4osXwdvAfvjpwrSBjhZvJprflnuenowhi1p8m&X-Amz-Signature=be99f22c4e83fb060f1839d2dec53ff1438d6bceb5188f44e4bba02267e72fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
