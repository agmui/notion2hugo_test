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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3D7WMVR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGkfKjuoFTGTV%2FbFcIs8EzDCkyP4y4i3oC8HdIUtKPdJAiEA5iLw0feUUunF%2BfGNu4KfaEDnD8olIagRI%2Fhtd685ACEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKMLwFBGT9VgS4NqayrcA7zjK%2FtTJymSR03UAuCTtoCFKFisHo0%2FrQ%2FFJyK8jHaqLZoOzvD7eqpP55xSRfTH%2FS0AF9rqEIrxfWJu3v%2BeX9d3%2FYj%2FZWzi%2B3bNsAKwPFz1QZliMZvrLz0JcDZl0lbimr81SUyNtlz0wk%2BNTdd96%2B3w3KvmjRQ3KozWC%2BlsD%2B%2FrMfhvsaakMIuVnDnFbVt8nB0nUiDcIA%2B4B0ZznnvFMIo3A5rV3L2ThNnOTOi7KWXt%2FnBWLfB8LtLXxgSsU0BqO626QGcEVi8DzweKXnmlhUkuudD11ExTorralFl1Eky%2BlKjLMXs726GylJYwexOV4RpxexOaQfCW3JzVRx3J4kbFHDw%2BNyAfV12i1ocKN1iJJBPg6jpSrujVe6PW%2FbOLx%2BKTRu1XSakmUZcVdopxdYcRbC1MBz8O0AGU9fjxSkB7GnKd4f4ay71fWeS5OVQDtz%2F1OoDeXNCpcbds%2FKZg%2Fdc1tZZQTYvpuANe%2FrWPXd%2B%2B5rSWhkJ6KX4RTgg%2Bf2Pt0dSe9GwavEeM48PkEor%2Fj0RZdOmBWB%2FmMIJ%2ByeU5BlgbatoRhPn1Q2%2BUFJ7%2BbuDaBPbh19Fe2wacAlpOVABCOrkMbcT1gZRSqe9CnzJcEB%2BNE4SVvG4C%2F2n5toVLMO35zL0GOqUBGzY%2BvCwPGp2dD1EL0sGSf9OvZR6ceL%2B8G7UHMH%2FYyHW8lJ5IYNnKg6nIrJTYRLhOUXbvTCzP23u8bWCvIEvdlfcK4KNvohgUWSy2ztIEPq7FgSKFOnFc5XlSPkZcyK6a4pIFz67Wz0pwBEgkcHXhNN3ugYJW147fNjCvl8Zc185yasjS8Ef2e%2BJ3OumNr%2B94AnS6uzOjm%2BY9kFnkd5RL10TxDbQ8&X-Amz-Signature=bc082581adcef9097a945201e54fc9d954916b8940555794418239fb1fd4d2df&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3D7WMVR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGkfKjuoFTGTV%2FbFcIs8EzDCkyP4y4i3oC8HdIUtKPdJAiEA5iLw0feUUunF%2BfGNu4KfaEDnD8olIagRI%2Fhtd685ACEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKMLwFBGT9VgS4NqayrcA7zjK%2FtTJymSR03UAuCTtoCFKFisHo0%2FrQ%2FFJyK8jHaqLZoOzvD7eqpP55xSRfTH%2FS0AF9rqEIrxfWJu3v%2BeX9d3%2FYj%2FZWzi%2B3bNsAKwPFz1QZliMZvrLz0JcDZl0lbimr81SUyNtlz0wk%2BNTdd96%2B3w3KvmjRQ3KozWC%2BlsD%2B%2FrMfhvsaakMIuVnDnFbVt8nB0nUiDcIA%2B4B0ZznnvFMIo3A5rV3L2ThNnOTOi7KWXt%2FnBWLfB8LtLXxgSsU0BqO626QGcEVi8DzweKXnmlhUkuudD11ExTorralFl1Eky%2BlKjLMXs726GylJYwexOV4RpxexOaQfCW3JzVRx3J4kbFHDw%2BNyAfV12i1ocKN1iJJBPg6jpSrujVe6PW%2FbOLx%2BKTRu1XSakmUZcVdopxdYcRbC1MBz8O0AGU9fjxSkB7GnKd4f4ay71fWeS5OVQDtz%2F1OoDeXNCpcbds%2FKZg%2Fdc1tZZQTYvpuANe%2FrWPXd%2B%2B5rSWhkJ6KX4RTgg%2Bf2Pt0dSe9GwavEeM48PkEor%2Fj0RZdOmBWB%2FmMIJ%2ByeU5BlgbatoRhPn1Q2%2BUFJ7%2BbuDaBPbh19Fe2wacAlpOVABCOrkMbcT1gZRSqe9CnzJcEB%2BNE4SVvG4C%2F2n5toVLMO35zL0GOqUBGzY%2BvCwPGp2dD1EL0sGSf9OvZR6ceL%2B8G7UHMH%2FYyHW8lJ5IYNnKg6nIrJTYRLhOUXbvTCzP23u8bWCvIEvdlfcK4KNvohgUWSy2ztIEPq7FgSKFOnFc5XlSPkZcyK6a4pIFz67Wz0pwBEgkcHXhNN3ugYJW147fNjCvl8Zc185yasjS8Ef2e%2BJ3OumNr%2B94AnS6uzOjm%2BY9kFnkd5RL10TxDbQ8&X-Amz-Signature=bad3c711b0c50c4408d6bc37ade0f383a5a9117784d793503c060dcf201e664d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3D7WMVR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGkfKjuoFTGTV%2FbFcIs8EzDCkyP4y4i3oC8HdIUtKPdJAiEA5iLw0feUUunF%2BfGNu4KfaEDnD8olIagRI%2Fhtd685ACEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKMLwFBGT9VgS4NqayrcA7zjK%2FtTJymSR03UAuCTtoCFKFisHo0%2FrQ%2FFJyK8jHaqLZoOzvD7eqpP55xSRfTH%2FS0AF9rqEIrxfWJu3v%2BeX9d3%2FYj%2FZWzi%2B3bNsAKwPFz1QZliMZvrLz0JcDZl0lbimr81SUyNtlz0wk%2BNTdd96%2B3w3KvmjRQ3KozWC%2BlsD%2B%2FrMfhvsaakMIuVnDnFbVt8nB0nUiDcIA%2B4B0ZznnvFMIo3A5rV3L2ThNnOTOi7KWXt%2FnBWLfB8LtLXxgSsU0BqO626QGcEVi8DzweKXnmlhUkuudD11ExTorralFl1Eky%2BlKjLMXs726GylJYwexOV4RpxexOaQfCW3JzVRx3J4kbFHDw%2BNyAfV12i1ocKN1iJJBPg6jpSrujVe6PW%2FbOLx%2BKTRu1XSakmUZcVdopxdYcRbC1MBz8O0AGU9fjxSkB7GnKd4f4ay71fWeS5OVQDtz%2F1OoDeXNCpcbds%2FKZg%2Fdc1tZZQTYvpuANe%2FrWPXd%2B%2B5rSWhkJ6KX4RTgg%2Bf2Pt0dSe9GwavEeM48PkEor%2Fj0RZdOmBWB%2FmMIJ%2ByeU5BlgbatoRhPn1Q2%2BUFJ7%2BbuDaBPbh19Fe2wacAlpOVABCOrkMbcT1gZRSqe9CnzJcEB%2BNE4SVvG4C%2F2n5toVLMO35zL0GOqUBGzY%2BvCwPGp2dD1EL0sGSf9OvZR6ceL%2B8G7UHMH%2FYyHW8lJ5IYNnKg6nIrJTYRLhOUXbvTCzP23u8bWCvIEvdlfcK4KNvohgUWSy2ztIEPq7FgSKFOnFc5XlSPkZcyK6a4pIFz67Wz0pwBEgkcHXhNN3ugYJW147fNjCvl8Zc185yasjS8Ef2e%2BJ3OumNr%2B94AnS6uzOjm%2BY9kFnkd5RL10TxDbQ8&X-Amz-Signature=e80fd4d033d2546bf59f90090e94b597e96a78a15f85c8a922bb95ea24218d77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
