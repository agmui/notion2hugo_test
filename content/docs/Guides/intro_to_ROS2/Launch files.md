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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXD6M4I2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo5D%2FQbYctQD%2FHS07T8faeAfakZwZBDqvNm4ErTyTXkAiEAlZuaOch65xrE5XaCMuEp2TRVVaQULUuiPsizgZuGh8sq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMjuDxDOzJvR%2FLnT7CrcA4GWpF9sgQ4jqIKHJjqc2Ny6cj%2Fv6526KvbBRYEx7PeOuz6LnxMPyaZk7P2HXTvgDS9aCpctiiRgd82xvVZ3D50KpjOkhuuQVCL1GLvdKNk2KrQC1ZmJgyby8asP%2BxsfwjbZTriu6lqQ4SoBfgmjRM0SqljtXahEa9UzpARj1ADculEXgxlrdFmK%2F1tZJW8MWpyTov9hG0tL7agpvzn8wYSEcQI2jVWZoTZd5NLXSxxGXCVjeVRoGaFm%2B1nr88dwq1hw1SE28A4GUCmOhZcFmgYe2Nq3YRMiUwyWGEw7e2xZh12yyd3AT2dmkjZ4HyA2fbjrCM9JRElFD8E2s%2B2XQbT%2BPsUmm%2B%2FnRumWXwzuGQ6SBm4g0t8sYHBBTQzOMzAE2ZIwzl6bqz%2FL8%2BQZymgaYFvS1DjFR4gmtcQf%2FyMmf7w9x9xBO%2BBOnVjif4SfrUx4NqaU%2BeF0ruglOL3Iql3lXvOxerUKgt%2BeKgRv1vs85Ye5HiPAd1n%2FvpF58xisRbrMmSY2fQPUIpAmpt42l9TwDgP35WDGWrWJ3lifEjkwJVGOUIRRv0Hl%2FUYp7%2BbswiSmn1zLcid8tCRgI01vUKspljoRBj1XncpKtQhLWv37ZFsDUFLV6%2Bd7sVR8xyZ%2FMJyW48AGOqUBT1a0KBaZ%2BsuIUoF9qsEvAez913ATNT7jLxwIhnv2S98oH6boT3qCNEYcWwjRWtKDOVSjd94gvlvMOErLcbDReoZiiHj2mbj8ounkajJGzIPv3Tsy7T9WvsRyeJSLdq18oJT3heqeCOsTANkYvYf9IgZ6loikS4CGy4bBBTSsSOoHZQFqkQFoChzzjhPy%2BJ3kdxHuKYgXFw8zlL2TAap3P6giSj2V&X-Amz-Signature=393c74a9037c355157ebd4c3a84a1923eaa3da17734379a5a06788ce1528d3f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXD6M4I2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo5D%2FQbYctQD%2FHS07T8faeAfakZwZBDqvNm4ErTyTXkAiEAlZuaOch65xrE5XaCMuEp2TRVVaQULUuiPsizgZuGh8sq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMjuDxDOzJvR%2FLnT7CrcA4GWpF9sgQ4jqIKHJjqc2Ny6cj%2Fv6526KvbBRYEx7PeOuz6LnxMPyaZk7P2HXTvgDS9aCpctiiRgd82xvVZ3D50KpjOkhuuQVCL1GLvdKNk2KrQC1ZmJgyby8asP%2BxsfwjbZTriu6lqQ4SoBfgmjRM0SqljtXahEa9UzpARj1ADculEXgxlrdFmK%2F1tZJW8MWpyTov9hG0tL7agpvzn8wYSEcQI2jVWZoTZd5NLXSxxGXCVjeVRoGaFm%2B1nr88dwq1hw1SE28A4GUCmOhZcFmgYe2Nq3YRMiUwyWGEw7e2xZh12yyd3AT2dmkjZ4HyA2fbjrCM9JRElFD8E2s%2B2XQbT%2BPsUmm%2B%2FnRumWXwzuGQ6SBm4g0t8sYHBBTQzOMzAE2ZIwzl6bqz%2FL8%2BQZymgaYFvS1DjFR4gmtcQf%2FyMmf7w9x9xBO%2BBOnVjif4SfrUx4NqaU%2BeF0ruglOL3Iql3lXvOxerUKgt%2BeKgRv1vs85Ye5HiPAd1n%2FvpF58xisRbrMmSY2fQPUIpAmpt42l9TwDgP35WDGWrWJ3lifEjkwJVGOUIRRv0Hl%2FUYp7%2BbswiSmn1zLcid8tCRgI01vUKspljoRBj1XncpKtQhLWv37ZFsDUFLV6%2Bd7sVR8xyZ%2FMJyW48AGOqUBT1a0KBaZ%2BsuIUoF9qsEvAez913ATNT7jLxwIhnv2S98oH6boT3qCNEYcWwjRWtKDOVSjd94gvlvMOErLcbDReoZiiHj2mbj8ounkajJGzIPv3Tsy7T9WvsRyeJSLdq18oJT3heqeCOsTANkYvYf9IgZ6loikS4CGy4bBBTSsSOoHZQFqkQFoChzzjhPy%2BJ3kdxHuKYgXFw8zlL2TAap3P6giSj2V&X-Amz-Signature=c5a008600f2746e614dc2fa38dac0659ea20b5e8c79b80483ae4ae546b1d48cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXD6M4I2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo5D%2FQbYctQD%2FHS07T8faeAfakZwZBDqvNm4ErTyTXkAiEAlZuaOch65xrE5XaCMuEp2TRVVaQULUuiPsizgZuGh8sq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMjuDxDOzJvR%2FLnT7CrcA4GWpF9sgQ4jqIKHJjqc2Ny6cj%2Fv6526KvbBRYEx7PeOuz6LnxMPyaZk7P2HXTvgDS9aCpctiiRgd82xvVZ3D50KpjOkhuuQVCL1GLvdKNk2KrQC1ZmJgyby8asP%2BxsfwjbZTriu6lqQ4SoBfgmjRM0SqljtXahEa9UzpARj1ADculEXgxlrdFmK%2F1tZJW8MWpyTov9hG0tL7agpvzn8wYSEcQI2jVWZoTZd5NLXSxxGXCVjeVRoGaFm%2B1nr88dwq1hw1SE28A4GUCmOhZcFmgYe2Nq3YRMiUwyWGEw7e2xZh12yyd3AT2dmkjZ4HyA2fbjrCM9JRElFD8E2s%2B2XQbT%2BPsUmm%2B%2FnRumWXwzuGQ6SBm4g0t8sYHBBTQzOMzAE2ZIwzl6bqz%2FL8%2BQZymgaYFvS1DjFR4gmtcQf%2FyMmf7w9x9xBO%2BBOnVjif4SfrUx4NqaU%2BeF0ruglOL3Iql3lXvOxerUKgt%2BeKgRv1vs85Ye5HiPAd1n%2FvpF58xisRbrMmSY2fQPUIpAmpt42l9TwDgP35WDGWrWJ3lifEjkwJVGOUIRRv0Hl%2FUYp7%2BbswiSmn1zLcid8tCRgI01vUKspljoRBj1XncpKtQhLWv37ZFsDUFLV6%2Bd7sVR8xyZ%2FMJyW48AGOqUBT1a0KBaZ%2BsuIUoF9qsEvAez913ATNT7jLxwIhnv2S98oH6boT3qCNEYcWwjRWtKDOVSjd94gvlvMOErLcbDReoZiiHj2mbj8ounkajJGzIPv3Tsy7T9WvsRyeJSLdq18oJT3heqeCOsTANkYvYf9IgZ6loikS4CGy4bBBTSsSOoHZQFqkQFoChzzjhPy%2BJ3kdxHuKYgXFw8zlL2TAap3P6giSj2V&X-Amz-Signature=4f1249dc13097b79a9d955c28c3366ab7f67bc3120a6f158c15ea256e87f88c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
