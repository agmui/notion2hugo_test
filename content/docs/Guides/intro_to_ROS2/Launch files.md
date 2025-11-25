---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5DG3FC%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEj43w95FLecReSXZAL7G5u9GvYBz56CtrCPbn0FVZ9nAiBK9ZFLEPT9KrteGz%2BzRv6akOLf7THehmXTncS4Q%2BSnXyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4uIifCkT7Y6pHE8YKtwDXyR%2B%2BWRdWU0zMpdQ0gTjNNlz10ExDGFUw1QFUqx0fe1We%2Fyr0MEdM6By%2ByTLCqYha2JfcnTaQiRwSmBsMJSZOgraO4Vl5UqDfYqin2BFQ91%2BGQ8o6JwdUEsQ72Yq2cm0IIAptSR2D%2FHJnPH2BIyW3UlKkb1Cvgo0nwZZqwFU5nN2PinozH%2FvrJAvoN5R7vmJqkDl4%2BG8k8GeeJi6tmLWXTTgVzmfhGz0Rn89nz47g1pWez4uECFQvGpdye6op3wy1l7tbTaqgek1LZPrC4mw1hClyuSPeRYyzCpSju1UoNl4CeGFtcwdvp%2ByMH%2BlCOIrFJJFkc%2Bad5HGW6UzAtnGGOcfXtjXkqXdRCqktn2tjdM%2F%2Bbaz9KCgW%2BYWE526BPiLEjeInpPufu1spv71cvlMxL69MQkkR49obsl0eBSm%2Bo%2Bzx3CCQAPUYwY%2Fabyp4pLHN0rI1Sj0jQp%2BCi8a1A7o5DrkAu44suEdYBcmMrrJp3uUOrG%2F1lZ0eLtFhN39%2BvHzaddUZ%2FTSiMkssdaVDIGY7XCW9tkImST85ZFEzc0nYpcbx4LWmfld6eBvd4FO4WPgPET6Q3%2F75nOnnf4uDAZbdZkiUc%2FpmeF9z13TY3yBdpbJhN5xp97VU85yJdMwpdiTyQY6pgHq6L6nFfuyQr3pZ6QB6yQXHbD9snUbhqz2qU9qbgdd3US6L0Zs7wdo2%2FSsNEVnGkH3pTAu3FjILmzobLW4KNqgqqlZjFU9ILolm6iE9DjozIn4WKyueu4wpYfYJlIa9FzuXw%2FyOtR3AmWWtan9gwyUUb7Ru%2FgB%2FKZtDpC%2BVnIJu4vaJCV7EKpHDrqTSJg%2Bfv7rA11t1z%2BdLHIP8tg9U4Os6vPSfEQK&X-Amz-Signature=00dfc8a570fe2b82252f71eb2dd943e6f02c8911a59075a2c0b29898767706f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5DG3FC%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEj43w95FLecReSXZAL7G5u9GvYBz56CtrCPbn0FVZ9nAiBK9ZFLEPT9KrteGz%2BzRv6akOLf7THehmXTncS4Q%2BSnXyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4uIifCkT7Y6pHE8YKtwDXyR%2B%2BWRdWU0zMpdQ0gTjNNlz10ExDGFUw1QFUqx0fe1We%2Fyr0MEdM6By%2ByTLCqYha2JfcnTaQiRwSmBsMJSZOgraO4Vl5UqDfYqin2BFQ91%2BGQ8o6JwdUEsQ72Yq2cm0IIAptSR2D%2FHJnPH2BIyW3UlKkb1Cvgo0nwZZqwFU5nN2PinozH%2FvrJAvoN5R7vmJqkDl4%2BG8k8GeeJi6tmLWXTTgVzmfhGz0Rn89nz47g1pWez4uECFQvGpdye6op3wy1l7tbTaqgek1LZPrC4mw1hClyuSPeRYyzCpSju1UoNl4CeGFtcwdvp%2ByMH%2BlCOIrFJJFkc%2Bad5HGW6UzAtnGGOcfXtjXkqXdRCqktn2tjdM%2F%2Bbaz9KCgW%2BYWE526BPiLEjeInpPufu1spv71cvlMxL69MQkkR49obsl0eBSm%2Bo%2Bzx3CCQAPUYwY%2Fabyp4pLHN0rI1Sj0jQp%2BCi8a1A7o5DrkAu44suEdYBcmMrrJp3uUOrG%2F1lZ0eLtFhN39%2BvHzaddUZ%2FTSiMkssdaVDIGY7XCW9tkImST85ZFEzc0nYpcbx4LWmfld6eBvd4FO4WPgPET6Q3%2F75nOnnf4uDAZbdZkiUc%2FpmeF9z13TY3yBdpbJhN5xp97VU85yJdMwpdiTyQY6pgHq6L6nFfuyQr3pZ6QB6yQXHbD9snUbhqz2qU9qbgdd3US6L0Zs7wdo2%2FSsNEVnGkH3pTAu3FjILmzobLW4KNqgqqlZjFU9ILolm6iE9DjozIn4WKyueu4wpYfYJlIa9FzuXw%2FyOtR3AmWWtan9gwyUUb7Ru%2FgB%2FKZtDpC%2BVnIJu4vaJCV7EKpHDrqTSJg%2Bfv7rA11t1z%2BdLHIP8tg9U4Os6vPSfEQK&X-Amz-Signature=46f97fe405b5ffa493f163974474b609786770870d94727aaac594672d660414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5DG3FC%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEj43w95FLecReSXZAL7G5u9GvYBz56CtrCPbn0FVZ9nAiBK9ZFLEPT9KrteGz%2BzRv6akOLf7THehmXTncS4Q%2BSnXyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4uIifCkT7Y6pHE8YKtwDXyR%2B%2BWRdWU0zMpdQ0gTjNNlz10ExDGFUw1QFUqx0fe1We%2Fyr0MEdM6By%2ByTLCqYha2JfcnTaQiRwSmBsMJSZOgraO4Vl5UqDfYqin2BFQ91%2BGQ8o6JwdUEsQ72Yq2cm0IIAptSR2D%2FHJnPH2BIyW3UlKkb1Cvgo0nwZZqwFU5nN2PinozH%2FvrJAvoN5R7vmJqkDl4%2BG8k8GeeJi6tmLWXTTgVzmfhGz0Rn89nz47g1pWez4uECFQvGpdye6op3wy1l7tbTaqgek1LZPrC4mw1hClyuSPeRYyzCpSju1UoNl4CeGFtcwdvp%2ByMH%2BlCOIrFJJFkc%2Bad5HGW6UzAtnGGOcfXtjXkqXdRCqktn2tjdM%2F%2Bbaz9KCgW%2BYWE526BPiLEjeInpPufu1spv71cvlMxL69MQkkR49obsl0eBSm%2Bo%2Bzx3CCQAPUYwY%2Fabyp4pLHN0rI1Sj0jQp%2BCi8a1A7o5DrkAu44suEdYBcmMrrJp3uUOrG%2F1lZ0eLtFhN39%2BvHzaddUZ%2FTSiMkssdaVDIGY7XCW9tkImST85ZFEzc0nYpcbx4LWmfld6eBvd4FO4WPgPET6Q3%2F75nOnnf4uDAZbdZkiUc%2FpmeF9z13TY3yBdpbJhN5xp97VU85yJdMwpdiTyQY6pgHq6L6nFfuyQr3pZ6QB6yQXHbD9snUbhqz2qU9qbgdd3US6L0Zs7wdo2%2FSsNEVnGkH3pTAu3FjILmzobLW4KNqgqqlZjFU9ILolm6iE9DjozIn4WKyueu4wpYfYJlIa9FzuXw%2FyOtR3AmWWtan9gwyUUb7Ru%2FgB%2FKZtDpC%2BVnIJu4vaJCV7EKpHDrqTSJg%2Bfv7rA11t1z%2BdLHIP8tg9U4Os6vPSfEQK&X-Amz-Signature=54bcaf11173fdbdc389d0e12552deea995a1ead66bc3c28750ec1e06699b4184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
