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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJC654U3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCD%2FWP%2Bz99gBml4xWr7m58N3w45jtxZahQ5MLdWgsPBCgIgZOPMxSuCp5oadvj96ySS0TO4NKoA6371E1WaViM6etAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxjTyYWBE7xjG6ZgyrcAyocl%2BjqxHEEF535Y7ev8Y96df4IN6a0Wo7oFXbY2q6mnGXjELOywSxCkuDvLClmW2ZA03Vx14bcllGyDYSfdMStawWipcK3Rp3SMcJ%2Fu%2BReZSh9oAXA%2BkD8BlNJnMWMT4XCB2UDAWfyCHmmOr%2F%2FKFYNE6an6qdYGGYPombBfqEdDwcfIZaLX1N2eLuCIlHYq7BltlyUygBCPUiBBxBMIKT4jSDSpstI1opeJdzfRz66%2BtbLQXP7dRd9tnZlzJkYPn1v8uY7ItGD2eZMoiiPFKB3PuVeHIGxmbegCx7IJZ9kjcAawO1GugOCRzvs%2FtUe13g3TbykFvoPeWCUTiWH9HnmDUQYI6kdW95caswxt%2FPun6WOjnRkvnM0NrgFYkU8%2F4TwaLz3czwebYbonGKUdYg615hbN68e4qX%2FCY7COyMsjEIs86%2FLDp5j1JJHFhXuh71gFn6%2Bsb%2F7iXnVqLzj2%2BkRgILU3Z%2B3wyZLpnSibEYhwLavJBjlNd%2Bs1Mf0EJb%2FHRiE7WNiPM3VY3F82%2FmUIjcVCedSnxEppTrxbc%2BIZtV44afRHTtn%2FwsfGALvUXmgRgb0L2qaGPX%2BvE9uZoaYSCfxR1TMlkH9dQpiQBJwMpLKAmxviDuIry47wKrgMMmm7r4GOqUBFmSxBXlhF2EmJWmMlkQDQw0fTYr8pS%2FNyXcjYSim2CZn12wZX%2FawsxcN5RjnU3ijmoga59vUga0B7%2BjJToaGqbSE1saTFG2Nft4iDSCw10QVUt%2BOuDB8gdQEujvsWvYvsu%2FCwdezSktUCechxQxQokSwcuzKzsBN5Ak%2FDXa6ZaVm5XEG%2BuTv9qUSYmgq%2BO1MNEVyEOUSZ0nkJU3Q5YmgZQYuAy7g&X-Amz-Signature=f6c2da483aed85128b7e6002ffd624e99f7efcee6d39bb3546c806e89fdb6f24&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJC654U3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCD%2FWP%2Bz99gBml4xWr7m58N3w45jtxZahQ5MLdWgsPBCgIgZOPMxSuCp5oadvj96ySS0TO4NKoA6371E1WaViM6etAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxjTyYWBE7xjG6ZgyrcAyocl%2BjqxHEEF535Y7ev8Y96df4IN6a0Wo7oFXbY2q6mnGXjELOywSxCkuDvLClmW2ZA03Vx14bcllGyDYSfdMStawWipcK3Rp3SMcJ%2Fu%2BReZSh9oAXA%2BkD8BlNJnMWMT4XCB2UDAWfyCHmmOr%2F%2FKFYNE6an6qdYGGYPombBfqEdDwcfIZaLX1N2eLuCIlHYq7BltlyUygBCPUiBBxBMIKT4jSDSpstI1opeJdzfRz66%2BtbLQXP7dRd9tnZlzJkYPn1v8uY7ItGD2eZMoiiPFKB3PuVeHIGxmbegCx7IJZ9kjcAawO1GugOCRzvs%2FtUe13g3TbykFvoPeWCUTiWH9HnmDUQYI6kdW95caswxt%2FPun6WOjnRkvnM0NrgFYkU8%2F4TwaLz3czwebYbonGKUdYg615hbN68e4qX%2FCY7COyMsjEIs86%2FLDp5j1JJHFhXuh71gFn6%2Bsb%2F7iXnVqLzj2%2BkRgILU3Z%2B3wyZLpnSibEYhwLavJBjlNd%2Bs1Mf0EJb%2FHRiE7WNiPM3VY3F82%2FmUIjcVCedSnxEppTrxbc%2BIZtV44afRHTtn%2FwsfGALvUXmgRgb0L2qaGPX%2BvE9uZoaYSCfxR1TMlkH9dQpiQBJwMpLKAmxviDuIry47wKrgMMmm7r4GOqUBFmSxBXlhF2EmJWmMlkQDQw0fTYr8pS%2FNyXcjYSim2CZn12wZX%2FawsxcN5RjnU3ijmoga59vUga0B7%2BjJToaGqbSE1saTFG2Nft4iDSCw10QVUt%2BOuDB8gdQEujvsWvYvsu%2FCwdezSktUCechxQxQokSwcuzKzsBN5Ak%2FDXa6ZaVm5XEG%2BuTv9qUSYmgq%2BO1MNEVyEOUSZ0nkJU3Q5YmgZQYuAy7g&X-Amz-Signature=aed97ff03163bac1669defe8262b6fbca191472e1c835754a18e62358c148401&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJC654U3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCD%2FWP%2Bz99gBml4xWr7m58N3w45jtxZahQ5MLdWgsPBCgIgZOPMxSuCp5oadvj96ySS0TO4NKoA6371E1WaViM6etAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxjTyYWBE7xjG6ZgyrcAyocl%2BjqxHEEF535Y7ev8Y96df4IN6a0Wo7oFXbY2q6mnGXjELOywSxCkuDvLClmW2ZA03Vx14bcllGyDYSfdMStawWipcK3Rp3SMcJ%2Fu%2BReZSh9oAXA%2BkD8BlNJnMWMT4XCB2UDAWfyCHmmOr%2F%2FKFYNE6an6qdYGGYPombBfqEdDwcfIZaLX1N2eLuCIlHYq7BltlyUygBCPUiBBxBMIKT4jSDSpstI1opeJdzfRz66%2BtbLQXP7dRd9tnZlzJkYPn1v8uY7ItGD2eZMoiiPFKB3PuVeHIGxmbegCx7IJZ9kjcAawO1GugOCRzvs%2FtUe13g3TbykFvoPeWCUTiWH9HnmDUQYI6kdW95caswxt%2FPun6WOjnRkvnM0NrgFYkU8%2F4TwaLz3czwebYbonGKUdYg615hbN68e4qX%2FCY7COyMsjEIs86%2FLDp5j1JJHFhXuh71gFn6%2Bsb%2F7iXnVqLzj2%2BkRgILU3Z%2B3wyZLpnSibEYhwLavJBjlNd%2Bs1Mf0EJb%2FHRiE7WNiPM3VY3F82%2FmUIjcVCedSnxEppTrxbc%2BIZtV44afRHTtn%2FwsfGALvUXmgRgb0L2qaGPX%2BvE9uZoaYSCfxR1TMlkH9dQpiQBJwMpLKAmxviDuIry47wKrgMMmm7r4GOqUBFmSxBXlhF2EmJWmMlkQDQw0fTYr8pS%2FNyXcjYSim2CZn12wZX%2FawsxcN5RjnU3ijmoga59vUga0B7%2BjJToaGqbSE1saTFG2Nft4iDSCw10QVUt%2BOuDB8gdQEujvsWvYvsu%2FCwdezSktUCechxQxQokSwcuzKzsBN5Ak%2FDXa6ZaVm5XEG%2BuTv9qUSYmgq%2BO1MNEVyEOUSZ0nkJU3Q5YmgZQYuAy7g&X-Amz-Signature=419d3efeaf4db82a323c68af8496735ae30ff9fa9827c4b1b502b2a00b1f2944&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
