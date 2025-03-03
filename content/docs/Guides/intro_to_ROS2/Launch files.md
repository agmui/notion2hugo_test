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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DIYOGJ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC%2FKW8wxVkRURsXTc1jkSpXH7J2V3RkfF%2FeCDqMA%2BaIwIgW%2F60aKBtkt1YxrdbM1IYdX9uhL4ZU9m7yPcHUQbVGiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPAiW12ufk5HDi5hCrcA2VKVZaGOOf7eTimUAhIPiO2arY%2B7%2BhnTuW%2BaQGhyaL%2FFmF7IHzqLKtolSwchkkcvG7CkdH%2FOHZ14RkOY6FBjq4s0Xad3KxsQCouXqKq5pxpH8mDpjv63Ih4N6NHZX2WjU3dcZjXEIdz6Q4rKtrhOTHNaT7PSEOcxyHX129%2BA%2BLbE%2B0nMTr0%2F%2Bk3IYLjV2wGAWhYeeseTtdil1jTplHAHvSSa5TTORDOOc3sbINXSHSBq7Wv5QdmSjsnH67nfEgRNa%2BOpa3wgDJjxGxYX8LJx08O106P2lY%2F2NLjwh9pHCTweocfWo1jCqCF%2Fe%2BV%2BEBLEXSlDua%2Faabk8zW%2B0MvGJ%2B4V1wbXwPUBgtOWDSRB6vFuFKpktAAdzJMiRsBcdsGsfT1GSwDEzXofwM2P4b92HEAnWPx%2FB6r9KQm9Ny%2F4pQZ%2FJqQqDCyLWMEJrGp%2FU1SAlJeXjzPsJetiJjEda%2FuvIBnUSSWIyDSzT9N2Pc7ub0DCZsZ4XqX8IaPE0oPdR2IOcy5pv3Sw93O5QiIHb4XQeMtXzfUvHD06zyfBsQAsqD7T%2FE5MmEJzDE3RidOkghtJ9uuf2Z6cL9Kgx%2FvDE3RCYP20Kdu1t5KBbWkjz1fOv7oeOqKJIauEeMXamzwCMK3cl74GOqUB9Id%2BCPpDbk0Dz6L2nEwU7qKw6m0sh45l8C13Q7tuyzfYMsIzadLqgTEfDRkBE0qMCc2ErfNe3F6XY2j%2B1jqVybcJEfBI9sQjAs%2Fp2woZdRM0Xn3x%2Bcvvv%2Blp%2Fd7u%2B5oEVF9sHPIsGOOMpZzJI1wNBF%2Bc4hYTENTSdDJx8KZsVT7mAYw4YSG%2BRgcBDT%2FeAEG6j1tTTL3pDibgNMQE3Xq5YesF0IbS&X-Amz-Signature=64defa20d8ad1c43c2172af5a6fcc72558052fff2bdd533036b9c6e646ce1d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DIYOGJ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC%2FKW8wxVkRURsXTc1jkSpXH7J2V3RkfF%2FeCDqMA%2BaIwIgW%2F60aKBtkt1YxrdbM1IYdX9uhL4ZU9m7yPcHUQbVGiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPAiW12ufk5HDi5hCrcA2VKVZaGOOf7eTimUAhIPiO2arY%2B7%2BhnTuW%2BaQGhyaL%2FFmF7IHzqLKtolSwchkkcvG7CkdH%2FOHZ14RkOY6FBjq4s0Xad3KxsQCouXqKq5pxpH8mDpjv63Ih4N6NHZX2WjU3dcZjXEIdz6Q4rKtrhOTHNaT7PSEOcxyHX129%2BA%2BLbE%2B0nMTr0%2F%2Bk3IYLjV2wGAWhYeeseTtdil1jTplHAHvSSa5TTORDOOc3sbINXSHSBq7Wv5QdmSjsnH67nfEgRNa%2BOpa3wgDJjxGxYX8LJx08O106P2lY%2F2NLjwh9pHCTweocfWo1jCqCF%2Fe%2BV%2BEBLEXSlDua%2Faabk8zW%2B0MvGJ%2B4V1wbXwPUBgtOWDSRB6vFuFKpktAAdzJMiRsBcdsGsfT1GSwDEzXofwM2P4b92HEAnWPx%2FB6r9KQm9Ny%2F4pQZ%2FJqQqDCyLWMEJrGp%2FU1SAlJeXjzPsJetiJjEda%2FuvIBnUSSWIyDSzT9N2Pc7ub0DCZsZ4XqX8IaPE0oPdR2IOcy5pv3Sw93O5QiIHb4XQeMtXzfUvHD06zyfBsQAsqD7T%2FE5MmEJzDE3RidOkghtJ9uuf2Z6cL9Kgx%2FvDE3RCYP20Kdu1t5KBbWkjz1fOv7oeOqKJIauEeMXamzwCMK3cl74GOqUB9Id%2BCPpDbk0Dz6L2nEwU7qKw6m0sh45l8C13Q7tuyzfYMsIzadLqgTEfDRkBE0qMCc2ErfNe3F6XY2j%2B1jqVybcJEfBI9sQjAs%2Fp2woZdRM0Xn3x%2Bcvvv%2Blp%2Fd7u%2B5oEVF9sHPIsGOOMpZzJI1wNBF%2Bc4hYTENTSdDJx8KZsVT7mAYw4YSG%2BRgcBDT%2FeAEG6j1tTTL3pDibgNMQE3Xq5YesF0IbS&X-Amz-Signature=984ae57d336386f9b940aa82120768eced0e275ffc5ca35042bb9b9d032fa4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DIYOGJ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC%2FKW8wxVkRURsXTc1jkSpXH7J2V3RkfF%2FeCDqMA%2BaIwIgW%2F60aKBtkt1YxrdbM1IYdX9uhL4ZU9m7yPcHUQbVGiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPAiW12ufk5HDi5hCrcA2VKVZaGOOf7eTimUAhIPiO2arY%2B7%2BhnTuW%2BaQGhyaL%2FFmF7IHzqLKtolSwchkkcvG7CkdH%2FOHZ14RkOY6FBjq4s0Xad3KxsQCouXqKq5pxpH8mDpjv63Ih4N6NHZX2WjU3dcZjXEIdz6Q4rKtrhOTHNaT7PSEOcxyHX129%2BA%2BLbE%2B0nMTr0%2F%2Bk3IYLjV2wGAWhYeeseTtdil1jTplHAHvSSa5TTORDOOc3sbINXSHSBq7Wv5QdmSjsnH67nfEgRNa%2BOpa3wgDJjxGxYX8LJx08O106P2lY%2F2NLjwh9pHCTweocfWo1jCqCF%2Fe%2BV%2BEBLEXSlDua%2Faabk8zW%2B0MvGJ%2B4V1wbXwPUBgtOWDSRB6vFuFKpktAAdzJMiRsBcdsGsfT1GSwDEzXofwM2P4b92HEAnWPx%2FB6r9KQm9Ny%2F4pQZ%2FJqQqDCyLWMEJrGp%2FU1SAlJeXjzPsJetiJjEda%2FuvIBnUSSWIyDSzT9N2Pc7ub0DCZsZ4XqX8IaPE0oPdR2IOcy5pv3Sw93O5QiIHb4XQeMtXzfUvHD06zyfBsQAsqD7T%2FE5MmEJzDE3RidOkghtJ9uuf2Z6cL9Kgx%2FvDE3RCYP20Kdu1t5KBbWkjz1fOv7oeOqKJIauEeMXamzwCMK3cl74GOqUB9Id%2BCPpDbk0Dz6L2nEwU7qKw6m0sh45l8C13Q7tuyzfYMsIzadLqgTEfDRkBE0qMCc2ErfNe3F6XY2j%2B1jqVybcJEfBI9sQjAs%2Fp2woZdRM0Xn3x%2Bcvvv%2Blp%2Fd7u%2B5oEVF9sHPIsGOOMpZzJI1wNBF%2Bc4hYTENTSdDJx8KZsVT7mAYw4YSG%2BRgcBDT%2FeAEG6j1tTTL3pDibgNMQE3Xq5YesF0IbS&X-Amz-Signature=a66408c99aecbc7f42828f586a4f4f23d09e133c4d64e9a658b879b84c0a9c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
