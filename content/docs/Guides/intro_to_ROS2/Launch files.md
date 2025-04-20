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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV45N7Y%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCAWey3tFyH4ZPyh9ElVPrj6as5jqZLBiRwM5OhzcsLXwIgDRneQ2bjCKjvQG7IePIbbMtHzrVoCSvnvsGxzLAXO6cqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4SojJjFF64BLgxtircA%2F%2B7VOND3YZjtS2ut%2FdPC3kDrkMlctzI3M%2FyqUiIP%2FK%2Ff5ANm%2FIC6wTmF8IPaf6zHiUOSsD%2Fsop5YLa6L62ZAdS11mKPy2Y9j31ahAHPh%2FG0fAzUu7rT9qEyW6fkSO2saiF4MR5CGLPy2xvQyMTAgtGSeqOoXLuukokdiAu4fnmO%2Bht%2FBiTQpsqZURukh9A8p0u5mKiMMXbfkxPd%2FwsPBTX7GhyJ2U8TsmledaiQFeT%2FvMgi5MDJePzNVE0dAa89KZdLVCfp4GY4W89qgk%2Bfmud2n8d%2FVuvFv%2BriE3uzYzD6Q85Ib1eiCNHuo%2FJr%2B8x5Du3dd4Pene4L5f4TT%2BOdryAR%2F5jhQP9P4pP5Qfgcg26%2Fuk58NHLiyjSbUl048aWn6LQfJmXW7NpXg0hB%2Fv1vehNkM9D3p5SoyMdEhvJJVwPRtKDi3Apgnw0vh49BZzw7VCRrGC8496967MeKtXFAH9V3vITqxztC8jNPUT2Cj0CS9DZGiJWfVAJ7zjXkooqJ4rdOXKNOocdWq%2BHW7agK6w5QMr2uzLCvjWd35ABX96UvD1XO5ZR6oUfZhzkcclyuUT2oatcppgdW0T%2FPkbCJjif%2FudSRlRMugdHU8%2BcRc%2F3j0fsksnwTrasaKLV%2FMLGllMAGOqUB74DbT0qhBmaLgwoUD%2B6bISAo3WYAiflLxybTK2MJT3p5wT%2Bp5uvVnGv%2BdbdmiaUno2g%2FMrKP1UJaI62Rcr75mDiID%2BOcg7H82f6pJQCJ8tj8qfCdvmYKBtPIkrfkq4NqI4HUHtPP%2Bk5j6%2BsXf4zC7HqTT9G9g%2BuJmILoWSQcNuipacphEBz4%2BPDzCLbAR7j2%2B5HpJMW%2BHFUBSDMfhQjyFC6Zn%2BDJ&X-Amz-Signature=899ba512511614677b42b3d9b88abdf46dbb7fee4ed6ade7a83a42289fe1f1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV45N7Y%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCAWey3tFyH4ZPyh9ElVPrj6as5jqZLBiRwM5OhzcsLXwIgDRneQ2bjCKjvQG7IePIbbMtHzrVoCSvnvsGxzLAXO6cqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4SojJjFF64BLgxtircA%2F%2B7VOND3YZjtS2ut%2FdPC3kDrkMlctzI3M%2FyqUiIP%2FK%2Ff5ANm%2FIC6wTmF8IPaf6zHiUOSsD%2Fsop5YLa6L62ZAdS11mKPy2Y9j31ahAHPh%2FG0fAzUu7rT9qEyW6fkSO2saiF4MR5CGLPy2xvQyMTAgtGSeqOoXLuukokdiAu4fnmO%2Bht%2FBiTQpsqZURukh9A8p0u5mKiMMXbfkxPd%2FwsPBTX7GhyJ2U8TsmledaiQFeT%2FvMgi5MDJePzNVE0dAa89KZdLVCfp4GY4W89qgk%2Bfmud2n8d%2FVuvFv%2BriE3uzYzD6Q85Ib1eiCNHuo%2FJr%2B8x5Du3dd4Pene4L5f4TT%2BOdryAR%2F5jhQP9P4pP5Qfgcg26%2Fuk58NHLiyjSbUl048aWn6LQfJmXW7NpXg0hB%2Fv1vehNkM9D3p5SoyMdEhvJJVwPRtKDi3Apgnw0vh49BZzw7VCRrGC8496967MeKtXFAH9V3vITqxztC8jNPUT2Cj0CS9DZGiJWfVAJ7zjXkooqJ4rdOXKNOocdWq%2BHW7agK6w5QMr2uzLCvjWd35ABX96UvD1XO5ZR6oUfZhzkcclyuUT2oatcppgdW0T%2FPkbCJjif%2FudSRlRMugdHU8%2BcRc%2F3j0fsksnwTrasaKLV%2FMLGllMAGOqUB74DbT0qhBmaLgwoUD%2B6bISAo3WYAiflLxybTK2MJT3p5wT%2Bp5uvVnGv%2BdbdmiaUno2g%2FMrKP1UJaI62Rcr75mDiID%2BOcg7H82f6pJQCJ8tj8qfCdvmYKBtPIkrfkq4NqI4HUHtPP%2Bk5j6%2BsXf4zC7HqTT9G9g%2BuJmILoWSQcNuipacphEBz4%2BPDzCLbAR7j2%2B5HpJMW%2BHFUBSDMfhQjyFC6Zn%2BDJ&X-Amz-Signature=6cf8ada590ea5569f9a9c6f4c4c1d357407f552b343402c4effe96191c260adc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMV45N7Y%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCAWey3tFyH4ZPyh9ElVPrj6as5jqZLBiRwM5OhzcsLXwIgDRneQ2bjCKjvQG7IePIbbMtHzrVoCSvnvsGxzLAXO6cqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4SojJjFF64BLgxtircA%2F%2B7VOND3YZjtS2ut%2FdPC3kDrkMlctzI3M%2FyqUiIP%2FK%2Ff5ANm%2FIC6wTmF8IPaf6zHiUOSsD%2Fsop5YLa6L62ZAdS11mKPy2Y9j31ahAHPh%2FG0fAzUu7rT9qEyW6fkSO2saiF4MR5CGLPy2xvQyMTAgtGSeqOoXLuukokdiAu4fnmO%2Bht%2FBiTQpsqZURukh9A8p0u5mKiMMXbfkxPd%2FwsPBTX7GhyJ2U8TsmledaiQFeT%2FvMgi5MDJePzNVE0dAa89KZdLVCfp4GY4W89qgk%2Bfmud2n8d%2FVuvFv%2BriE3uzYzD6Q85Ib1eiCNHuo%2FJr%2B8x5Du3dd4Pene4L5f4TT%2BOdryAR%2F5jhQP9P4pP5Qfgcg26%2Fuk58NHLiyjSbUl048aWn6LQfJmXW7NpXg0hB%2Fv1vehNkM9D3p5SoyMdEhvJJVwPRtKDi3Apgnw0vh49BZzw7VCRrGC8496967MeKtXFAH9V3vITqxztC8jNPUT2Cj0CS9DZGiJWfVAJ7zjXkooqJ4rdOXKNOocdWq%2BHW7agK6w5QMr2uzLCvjWd35ABX96UvD1XO5ZR6oUfZhzkcclyuUT2oatcppgdW0T%2FPkbCJjif%2FudSRlRMugdHU8%2BcRc%2F3j0fsksnwTrasaKLV%2FMLGllMAGOqUB74DbT0qhBmaLgwoUD%2B6bISAo3WYAiflLxybTK2MJT3p5wT%2Bp5uvVnGv%2BdbdmiaUno2g%2FMrKP1UJaI62Rcr75mDiID%2BOcg7H82f6pJQCJ8tj8qfCdvmYKBtPIkrfkq4NqI4HUHtPP%2Bk5j6%2BsXf4zC7HqTT9G9g%2BuJmILoWSQcNuipacphEBz4%2BPDzCLbAR7j2%2B5HpJMW%2BHFUBSDMfhQjyFC6Zn%2BDJ&X-Amz-Signature=d4470366e244e1fd6c843dd76b009a67a1719bc5642a1fd50615fc520c9862df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
