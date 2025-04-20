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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWTQK7E%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIQDyzqCcOYN1ckqdS5gjVg6pkhDc0hBDKC8yL5pDUHsXZQIfGSVQSwS9NicenLGi87hNbZyyoOBWEJe3E41mkWshqiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDETsYjwVrYZApYF%2BKtwDgFa7b7i1JZWg4jGp6be0Y2Vr11Cc%2FhwJ9VbArSFmWgfhclxjp0t2F2ocnI6mSzm7g5i0NBXIssnW1p9OpEOIIhc89viaV2e%2BtA1pDeGE5t8%2BhBNHlzBEBZO%2Ft06fneZYw5SGVsFskUKAxxSWYp4dexvMCGjkcPzC3S7HnfLHluzUOMh2rZiyDPlfakyTFJG4rn7bS%2BIu1foOIO1D4o7s86QeFyy2bvsMwfNu1Fh5uk%2FSYLOpRrCxBExZewI3Vqshzj5piroc0p75oXtQ9p%2FEKrGlW%2FQTDQ20qedYR%2FSNHPpmpklcfI8VgfYba5i512XuCABOk8whqDfoSmiR5DFXTtiPB0eQq3DAHS3%2FpFB6L8iXC%2FBc2zYWTOyYlQeZmnf5BtHwJVJWkjcaISVkCDdCfQ6JXDhTKg6CubpPjSvfBkY61BW1uJpo5s%2F7DJaqYnLYfJl731HjE9iuY%2B3v092CgIh0wuoVLMIzftsXiB3%2FKwwuNO9xV5agBNiqy7h7AcKCK%2B%2FzoRBqMjsBRVUjuzxIKTxuomvvaGu7HzqZa8IS8c%2FRcans94%2BSsbNXmSLKfs52cVxrnUmP6s43di%2BEp3Cb5BhbjTEo9E80IkLTjy5mioHINm49YcTxg0m3Lf4w%2B8OTwAY6pgEV0ko2M0dEFKK68R0u6XAxIde%2FxakQjIufX%2F9lmBEt8MXgPB6rUAWf%2F9AKTYzondOnKGeFBf6QYqxgnDSt9DQ2HZ%2F4p4sMD%2BX7z1O6HbDYd0lSb4Upyw7h8C1xW0miEFNv2M8tY4ubRsC4G%2FIKz%2BFZW3XgXEbHd7GpHssH4647xgL92uI0wBzhwLzSnHI1BZY8SzI4j55M74xGj3r6FgT8h7ZkiwkM&X-Amz-Signature=87a48164d3e9e5976c5c4cd362a25e95822a3f73ecf10463d5b6ce2cee645b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWTQK7E%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIQDyzqCcOYN1ckqdS5gjVg6pkhDc0hBDKC8yL5pDUHsXZQIfGSVQSwS9NicenLGi87hNbZyyoOBWEJe3E41mkWshqiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDETsYjwVrYZApYF%2BKtwDgFa7b7i1JZWg4jGp6be0Y2Vr11Cc%2FhwJ9VbArSFmWgfhclxjp0t2F2ocnI6mSzm7g5i0NBXIssnW1p9OpEOIIhc89viaV2e%2BtA1pDeGE5t8%2BhBNHlzBEBZO%2Ft06fneZYw5SGVsFskUKAxxSWYp4dexvMCGjkcPzC3S7HnfLHluzUOMh2rZiyDPlfakyTFJG4rn7bS%2BIu1foOIO1D4o7s86QeFyy2bvsMwfNu1Fh5uk%2FSYLOpRrCxBExZewI3Vqshzj5piroc0p75oXtQ9p%2FEKrGlW%2FQTDQ20qedYR%2FSNHPpmpklcfI8VgfYba5i512XuCABOk8whqDfoSmiR5DFXTtiPB0eQq3DAHS3%2FpFB6L8iXC%2FBc2zYWTOyYlQeZmnf5BtHwJVJWkjcaISVkCDdCfQ6JXDhTKg6CubpPjSvfBkY61BW1uJpo5s%2F7DJaqYnLYfJl731HjE9iuY%2B3v092CgIh0wuoVLMIzftsXiB3%2FKwwuNO9xV5agBNiqy7h7AcKCK%2B%2FzoRBqMjsBRVUjuzxIKTxuomvvaGu7HzqZa8IS8c%2FRcans94%2BSsbNXmSLKfs52cVxrnUmP6s43di%2BEp3Cb5BhbjTEo9E80IkLTjy5mioHINm49YcTxg0m3Lf4w%2B8OTwAY6pgEV0ko2M0dEFKK68R0u6XAxIde%2FxakQjIufX%2F9lmBEt8MXgPB6rUAWf%2F9AKTYzondOnKGeFBf6QYqxgnDSt9DQ2HZ%2F4p4sMD%2BX7z1O6HbDYd0lSb4Upyw7h8C1xW0miEFNv2M8tY4ubRsC4G%2FIKz%2BFZW3XgXEbHd7GpHssH4647xgL92uI0wBzhwLzSnHI1BZY8SzI4j55M74xGj3r6FgT8h7ZkiwkM&X-Amz-Signature=3c585100f6ed71f3c62c6ede53d74ba51cc60126c85a3190777ae39448a35683&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWTQK7E%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIQDyzqCcOYN1ckqdS5gjVg6pkhDc0hBDKC8yL5pDUHsXZQIfGSVQSwS9NicenLGi87hNbZyyoOBWEJe3E41mkWshqiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDETsYjwVrYZApYF%2BKtwDgFa7b7i1JZWg4jGp6be0Y2Vr11Cc%2FhwJ9VbArSFmWgfhclxjp0t2F2ocnI6mSzm7g5i0NBXIssnW1p9OpEOIIhc89viaV2e%2BtA1pDeGE5t8%2BhBNHlzBEBZO%2Ft06fneZYw5SGVsFskUKAxxSWYp4dexvMCGjkcPzC3S7HnfLHluzUOMh2rZiyDPlfakyTFJG4rn7bS%2BIu1foOIO1D4o7s86QeFyy2bvsMwfNu1Fh5uk%2FSYLOpRrCxBExZewI3Vqshzj5piroc0p75oXtQ9p%2FEKrGlW%2FQTDQ20qedYR%2FSNHPpmpklcfI8VgfYba5i512XuCABOk8whqDfoSmiR5DFXTtiPB0eQq3DAHS3%2FpFB6L8iXC%2FBc2zYWTOyYlQeZmnf5BtHwJVJWkjcaISVkCDdCfQ6JXDhTKg6CubpPjSvfBkY61BW1uJpo5s%2F7DJaqYnLYfJl731HjE9iuY%2B3v092CgIh0wuoVLMIzftsXiB3%2FKwwuNO9xV5agBNiqy7h7AcKCK%2B%2FzoRBqMjsBRVUjuzxIKTxuomvvaGu7HzqZa8IS8c%2FRcans94%2BSsbNXmSLKfs52cVxrnUmP6s43di%2BEp3Cb5BhbjTEo9E80IkLTjy5mioHINm49YcTxg0m3Lf4w%2B8OTwAY6pgEV0ko2M0dEFKK68R0u6XAxIde%2FxakQjIufX%2F9lmBEt8MXgPB6rUAWf%2F9AKTYzondOnKGeFBf6QYqxgnDSt9DQ2HZ%2F4p4sMD%2BX7z1O6HbDYd0lSb4Upyw7h8C1xW0miEFNv2M8tY4ubRsC4G%2FIKz%2BFZW3XgXEbHd7GpHssH4647xgL92uI0wBzhwLzSnHI1BZY8SzI4j55M74xGj3r6FgT8h7ZkiwkM&X-Amz-Signature=903ffd689c3e8e0ae2a6c29e646b655d4855d895986b23597956fbf619f756f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
