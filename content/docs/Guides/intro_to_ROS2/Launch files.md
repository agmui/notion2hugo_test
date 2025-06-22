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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2W7IRUB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV3sTZG0npPizp3sAi5U8Fj7cG4ta2PzBDiCEGra9h9AiAtyUZOqh%2FdxZchWFrYL5icOfhRtSbr8RawvdUfBUpO9SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT21U2WDacRk2TIjGKtwD4e0cSbld601fGvI7jnK7uLVKe%2B%2FvHlG0md7faJDdeYVB%2FbFsjNgCrsG8vouMi0g%2BBk%2BLCQ7uiHUR69MsyxJ2VxsdQs4EbP9Q4QXd4xOdFroLyGgbyo103KhlnD50sqO3%2BTc1UlL7gcxixRFofJj37ed7aZtaUZ34cXOHBEwWWPjrhJRAw6g8UIEOTGHxynqCb4YE1XF6lJGPUH%2FGbd1JiewU1ns1eTpNZU%2B%2BDD4M2MADiMCdfqqBZnyatBK%2F6R9m%2Fzptsjm0Kw%2FBn0AE7WWtSHCATVspVVynqmgqVo%2B1FS5NC%2B10wEfCD5rNHqb57MGB3KviwMeRLHGpDN7baXDOK%2BHF7l43irjt2hRBJsF61CeC19Fs4j%2FFJ23sXK9GK%2F37VaSQgB0nmJ7km9WYo5B%2Fpbmrq9jIxFETvLaUw%2FbwtmXXs9Bv9vjv1icxfRNWbdco%2FVEuj9HeHd4gmik8TiSaMPK5JMpYV3GcZ%2B%2FPt4UCkuRRbDJx4S%2FxR2bAgSogXhc8bYqCwFgRV96fIyUxjlupm%2FZyIu%2Fzk3uTfsjCLm01IY6WH4lbJ1XoQ0fWTPA65rdV80zKmbTsrb%2Bn%2Bo%2F48LNEyLU3OGx5F8NM%2BcXFiOdR92T2%2B18I2TyCi21rLNIwmYjdwgY6pgFtTvjEW%2FnomVayfCWO4BtwSaVI%2BfYBquP8serbDXaT4%2BV9Ytuq3yfcGyu0e3CK2wdaDWZ8DK13YE5cA5Aoeq3%2FLlupV25ob5XseAXSwwa8884EuvDydRdcrlpHSyMZy9imcLBR3b0pbKcSKgC1yPOVutJnSq970%2FdT5csPaNgAHAhl2oJ9p7VR8JnTJ%2FfI5EZrT83ryXQk%2FcgUslMn5THC43%2FsPl0W&X-Amz-Signature=5297bcae7316894c59c30efe1176e2ee1d97ffc11da9b415497cf3fe7cfb0aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2W7IRUB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV3sTZG0npPizp3sAi5U8Fj7cG4ta2PzBDiCEGra9h9AiAtyUZOqh%2FdxZchWFrYL5icOfhRtSbr8RawvdUfBUpO9SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT21U2WDacRk2TIjGKtwD4e0cSbld601fGvI7jnK7uLVKe%2B%2FvHlG0md7faJDdeYVB%2FbFsjNgCrsG8vouMi0g%2BBk%2BLCQ7uiHUR69MsyxJ2VxsdQs4EbP9Q4QXd4xOdFroLyGgbyo103KhlnD50sqO3%2BTc1UlL7gcxixRFofJj37ed7aZtaUZ34cXOHBEwWWPjrhJRAw6g8UIEOTGHxynqCb4YE1XF6lJGPUH%2FGbd1JiewU1ns1eTpNZU%2B%2BDD4M2MADiMCdfqqBZnyatBK%2F6R9m%2Fzptsjm0Kw%2FBn0AE7WWtSHCATVspVVynqmgqVo%2B1FS5NC%2B10wEfCD5rNHqb57MGB3KviwMeRLHGpDN7baXDOK%2BHF7l43irjt2hRBJsF61CeC19Fs4j%2FFJ23sXK9GK%2F37VaSQgB0nmJ7km9WYo5B%2Fpbmrq9jIxFETvLaUw%2FbwtmXXs9Bv9vjv1icxfRNWbdco%2FVEuj9HeHd4gmik8TiSaMPK5JMpYV3GcZ%2B%2FPt4UCkuRRbDJx4S%2FxR2bAgSogXhc8bYqCwFgRV96fIyUxjlupm%2FZyIu%2Fzk3uTfsjCLm01IY6WH4lbJ1XoQ0fWTPA65rdV80zKmbTsrb%2Bn%2Bo%2F48LNEyLU3OGx5F8NM%2BcXFiOdR92T2%2B18I2TyCi21rLNIwmYjdwgY6pgFtTvjEW%2FnomVayfCWO4BtwSaVI%2BfYBquP8serbDXaT4%2BV9Ytuq3yfcGyu0e3CK2wdaDWZ8DK13YE5cA5Aoeq3%2FLlupV25ob5XseAXSwwa8884EuvDydRdcrlpHSyMZy9imcLBR3b0pbKcSKgC1yPOVutJnSq970%2FdT5csPaNgAHAhl2oJ9p7VR8JnTJ%2FfI5EZrT83ryXQk%2FcgUslMn5THC43%2FsPl0W&X-Amz-Signature=f927b1ca5f548b5dfe5cef30c934da1a003f75edf0e290bf1e72aa20d367b5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2W7IRUB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV3sTZG0npPizp3sAi5U8Fj7cG4ta2PzBDiCEGra9h9AiAtyUZOqh%2FdxZchWFrYL5icOfhRtSbr8RawvdUfBUpO9SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT21U2WDacRk2TIjGKtwD4e0cSbld601fGvI7jnK7uLVKe%2B%2FvHlG0md7faJDdeYVB%2FbFsjNgCrsG8vouMi0g%2BBk%2BLCQ7uiHUR69MsyxJ2VxsdQs4EbP9Q4QXd4xOdFroLyGgbyo103KhlnD50sqO3%2BTc1UlL7gcxixRFofJj37ed7aZtaUZ34cXOHBEwWWPjrhJRAw6g8UIEOTGHxynqCb4YE1XF6lJGPUH%2FGbd1JiewU1ns1eTpNZU%2B%2BDD4M2MADiMCdfqqBZnyatBK%2F6R9m%2Fzptsjm0Kw%2FBn0AE7WWtSHCATVspVVynqmgqVo%2B1FS5NC%2B10wEfCD5rNHqb57MGB3KviwMeRLHGpDN7baXDOK%2BHF7l43irjt2hRBJsF61CeC19Fs4j%2FFJ23sXK9GK%2F37VaSQgB0nmJ7km9WYo5B%2Fpbmrq9jIxFETvLaUw%2FbwtmXXs9Bv9vjv1icxfRNWbdco%2FVEuj9HeHd4gmik8TiSaMPK5JMpYV3GcZ%2B%2FPt4UCkuRRbDJx4S%2FxR2bAgSogXhc8bYqCwFgRV96fIyUxjlupm%2FZyIu%2Fzk3uTfsjCLm01IY6WH4lbJ1XoQ0fWTPA65rdV80zKmbTsrb%2Bn%2Bo%2F48LNEyLU3OGx5F8NM%2BcXFiOdR92T2%2B18I2TyCi21rLNIwmYjdwgY6pgFtTvjEW%2FnomVayfCWO4BtwSaVI%2BfYBquP8serbDXaT4%2BV9Ytuq3yfcGyu0e3CK2wdaDWZ8DK13YE5cA5Aoeq3%2FLlupV25ob5XseAXSwwa8884EuvDydRdcrlpHSyMZy9imcLBR3b0pbKcSKgC1yPOVutJnSq970%2FdT5csPaNgAHAhl2oJ9p7VR8JnTJ%2FfI5EZrT83ryXQk%2FcgUslMn5THC43%2FsPl0W&X-Amz-Signature=17b37399c4d08df477a478b1f2d68f272298c81d33013587a379a834f7dcd5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
