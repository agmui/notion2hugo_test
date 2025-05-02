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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYKH2LW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEMmjx35z3Xl3nGIQzDdxhSlRY0%2FCRmgG9aXHMspntMnAiBhcycpLd3Y%2FQa%2BucJ6Nyp5iNwGYU1z0VdLcY%2Fn3P2wsSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHEGWxa%2FNwDfevl8KtwDMhubUdC74clwV89x6ygUgSPt%2FPjilZBF61aTwByvYU2Nu2jDAh4r0Hv%2FA5J6n%2FRUuy0%2FoPWzuqVC3aaCDUPsy1jlaHPR%2FJpcFXaIKdapJYsq6AB3K3mwl9fKr0fP8RRs327oy%2FKfLm3npcqa0X0ukN4CEFGaW5ln4Ma1DkcJEGCI%2B%2Fnx3HINT2Qp2Q%2BEgONjgUs9Wn9tZrUGP4b%2FOPHSF8FwJJWaB12CtbyVfv7lwPVMurnS04bYzlAHps38o7RF80vBKv0sz%2Bj%2F0ODBRtS59OoX%2B0w04K03qsSQIlNYafBf8aFuXZMZRxHgiwPcVGirMsHQu5mv3qO0F0QtrfeyDBSljpKbuuwRdC1K%2B34EjeFA%2FYUNkd3HMFZ%2B1NukS1oHVvyOWHOSgstMKCtTjd22jUc%2BVx7F8rnpiyIbPau%2FlEThHFmYmnhrKl3S%2BgaL2tPkuipL6t80XbXgU%2FGihiX9yj8PrYFkvh2YpEybSU6B6%2FjrczXRTljyqlHpj4aQf85LIKYlzqle8wtYQhQ2uNzGuGYjaK9x88SdhHin9fOyYdDm9X4B9R83WvBhMI1dUOL71sAEy%2FmA7Mj9LqfFTVw4dOStC9Rthh1iJEDW%2FLrE0%2BXS9g%2BzeO%2B2ZgFTn0Uw4OTTwAY6pgHrmfHjzZWpTzQ08oYar6hRGtkzsnHuvKn76Kj54TInNCHLJxU6kHK%2B4QahKTgkqu1D6WgsCJEDDB9PlCx6JiVG%2B%2BwImcmGIR1x%2FnxacNXND%2BDJGtm4dk3HazyuC2cj2OcpecigzKTWpIIa5kMClQWJdeRKfjs45VVp7qQwS98dhFhD6uQyKTFoumvqiDaJISZidS2oguQKpXhw3%2FSmS32omkwNrF%2Fo&X-Amz-Signature=62490fbe38d4a857abc865585052dc78c3d458754a469af0957e6a654a585466&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYKH2LW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEMmjx35z3Xl3nGIQzDdxhSlRY0%2FCRmgG9aXHMspntMnAiBhcycpLd3Y%2FQa%2BucJ6Nyp5iNwGYU1z0VdLcY%2Fn3P2wsSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHEGWxa%2FNwDfevl8KtwDMhubUdC74clwV89x6ygUgSPt%2FPjilZBF61aTwByvYU2Nu2jDAh4r0Hv%2FA5J6n%2FRUuy0%2FoPWzuqVC3aaCDUPsy1jlaHPR%2FJpcFXaIKdapJYsq6AB3K3mwl9fKr0fP8RRs327oy%2FKfLm3npcqa0X0ukN4CEFGaW5ln4Ma1DkcJEGCI%2B%2Fnx3HINT2Qp2Q%2BEgONjgUs9Wn9tZrUGP4b%2FOPHSF8FwJJWaB12CtbyVfv7lwPVMurnS04bYzlAHps38o7RF80vBKv0sz%2Bj%2F0ODBRtS59OoX%2B0w04K03qsSQIlNYafBf8aFuXZMZRxHgiwPcVGirMsHQu5mv3qO0F0QtrfeyDBSljpKbuuwRdC1K%2B34EjeFA%2FYUNkd3HMFZ%2B1NukS1oHVvyOWHOSgstMKCtTjd22jUc%2BVx7F8rnpiyIbPau%2FlEThHFmYmnhrKl3S%2BgaL2tPkuipL6t80XbXgU%2FGihiX9yj8PrYFkvh2YpEybSU6B6%2FjrczXRTljyqlHpj4aQf85LIKYlzqle8wtYQhQ2uNzGuGYjaK9x88SdhHin9fOyYdDm9X4B9R83WvBhMI1dUOL71sAEy%2FmA7Mj9LqfFTVw4dOStC9Rthh1iJEDW%2FLrE0%2BXS9g%2BzeO%2B2ZgFTn0Uw4OTTwAY6pgHrmfHjzZWpTzQ08oYar6hRGtkzsnHuvKn76Kj54TInNCHLJxU6kHK%2B4QahKTgkqu1D6WgsCJEDDB9PlCx6JiVG%2B%2BwImcmGIR1x%2FnxacNXND%2BDJGtm4dk3HazyuC2cj2OcpecigzKTWpIIa5kMClQWJdeRKfjs45VVp7qQwS98dhFhD6uQyKTFoumvqiDaJISZidS2oguQKpXhw3%2FSmS32omkwNrF%2Fo&X-Amz-Signature=b9e463b14a452b797e75cd11deb860aaf2226d2e899148fd7774669474bb3b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYKH2LW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEMmjx35z3Xl3nGIQzDdxhSlRY0%2FCRmgG9aXHMspntMnAiBhcycpLd3Y%2FQa%2BucJ6Nyp5iNwGYU1z0VdLcY%2Fn3P2wsSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHEGWxa%2FNwDfevl8KtwDMhubUdC74clwV89x6ygUgSPt%2FPjilZBF61aTwByvYU2Nu2jDAh4r0Hv%2FA5J6n%2FRUuy0%2FoPWzuqVC3aaCDUPsy1jlaHPR%2FJpcFXaIKdapJYsq6AB3K3mwl9fKr0fP8RRs327oy%2FKfLm3npcqa0X0ukN4CEFGaW5ln4Ma1DkcJEGCI%2B%2Fnx3HINT2Qp2Q%2BEgONjgUs9Wn9tZrUGP4b%2FOPHSF8FwJJWaB12CtbyVfv7lwPVMurnS04bYzlAHps38o7RF80vBKv0sz%2Bj%2F0ODBRtS59OoX%2B0w04K03qsSQIlNYafBf8aFuXZMZRxHgiwPcVGirMsHQu5mv3qO0F0QtrfeyDBSljpKbuuwRdC1K%2B34EjeFA%2FYUNkd3HMFZ%2B1NukS1oHVvyOWHOSgstMKCtTjd22jUc%2BVx7F8rnpiyIbPau%2FlEThHFmYmnhrKl3S%2BgaL2tPkuipL6t80XbXgU%2FGihiX9yj8PrYFkvh2YpEybSU6B6%2FjrczXRTljyqlHpj4aQf85LIKYlzqle8wtYQhQ2uNzGuGYjaK9x88SdhHin9fOyYdDm9X4B9R83WvBhMI1dUOL71sAEy%2FmA7Mj9LqfFTVw4dOStC9Rthh1iJEDW%2FLrE0%2BXS9g%2BzeO%2B2ZgFTn0Uw4OTTwAY6pgHrmfHjzZWpTzQ08oYar6hRGtkzsnHuvKn76Kj54TInNCHLJxU6kHK%2B4QahKTgkqu1D6WgsCJEDDB9PlCx6JiVG%2B%2BwImcmGIR1x%2FnxacNXND%2BDJGtm4dk3HazyuC2cj2OcpecigzKTWpIIa5kMClQWJdeRKfjs45VVp7qQwS98dhFhD6uQyKTFoumvqiDaJISZidS2oguQKpXhw3%2FSmS32omkwNrF%2Fo&X-Amz-Signature=2069edd04a42db7549963388cfc37382677551823e6ce80ec9419c26d3eb7582&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
