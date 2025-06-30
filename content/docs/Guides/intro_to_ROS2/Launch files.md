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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A24MLSC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC12pTu5dM5p0vmOoW2dG3WWK%2FB9z4Oo2h%2F%2BP8GbcrDtAIhANXemA4JU6cMaphW%2BphrfNZG73ofaa2oHVbC%2FE89zIplKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkRkT2olEXJppTJFgq3AMslGfjaGyFq5cMjcIr7QzT7nThZ%2BnKV9XetH5Aww2Z0G1AiecN5%2BgPWFHVEmWpkbie54sqD696%2FOUoJx%2F9mcPzk1f5oleLM%2FxGdnfS9naqiM5iaS6RAOO0KxGHbT1Tq0nvzv%2BwSOvvxQ87g0IygHLuV1Hmcp7RYJchl%2FKDAq%2Fntcb7TQC2wSJ4Zjca9UBo2jrqLjlj0wbEHO8xMug8CEDRlctY8yyoznkvxSIcq8gGQg407iv58t90SF%2FCyHsVDw7Jg5hSIg9PS3RqYGjWr7Y5a8Oc2iBV4RbaVgFhuCvkZ8NjTA0NSq8K0XNFvRx8ro%2F4sxMFS%2Bfr0tpeCUwd18WdG9aDbYhxCAZMGQ2ayYzOVZhsY5tzgBZvE07IUN%2BWyHi4QWTcgcksTcMHoylFxd3N3zyqT%2B%2Be0ndeUQNnS5mv4E82pkRGV72%2FkGjiEWSyf04c7bKUUhAi0m77q3dI1XNWZKwFpwWLU4PIXQC3V8p8k33Xue23bGDl1voLyxHwsplzJ6NFDDWBjUDO4xg62NFPWVUbLCwAeAXxq3aC%2FAqWx1DHlU%2BRgAPU5uZoUWIz%2FzP%2FFOro2SGXjQTkUuq3UrWL2cL7W%2BU59q3%2B8NGhLVskos5nr9XB1CaaUh9VujC39IjDBjqkAY5mxCi81Cl7UvkE%2Bk5pqEAhNva7%2F6n9MHGbDvODlihGI88nlJYC%2FPDBh8Gd4GYrWwmKu8vXHYVlR0bHd6F%2BwILm6eRsW8ku3CalMCoudp0eVl%2BLTgNMM%2FAz19M4M%2B9Hcr9yDThMocd2DHYtxsNUfwGhHqQJQF2K%2Ff43zBB%2F5HNdFAJe4zaHPsGc8wdEqO5rtCTTAzKAJEmxlmWIiY8JHnwV%2FqQY&X-Amz-Signature=caad2442a690972ce384b7ec741e6261755244ba6993417ec011f76fc54cb0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A24MLSC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC12pTu5dM5p0vmOoW2dG3WWK%2FB9z4Oo2h%2F%2BP8GbcrDtAIhANXemA4JU6cMaphW%2BphrfNZG73ofaa2oHVbC%2FE89zIplKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkRkT2olEXJppTJFgq3AMslGfjaGyFq5cMjcIr7QzT7nThZ%2BnKV9XetH5Aww2Z0G1AiecN5%2BgPWFHVEmWpkbie54sqD696%2FOUoJx%2F9mcPzk1f5oleLM%2FxGdnfS9naqiM5iaS6RAOO0KxGHbT1Tq0nvzv%2BwSOvvxQ87g0IygHLuV1Hmcp7RYJchl%2FKDAq%2Fntcb7TQC2wSJ4Zjca9UBo2jrqLjlj0wbEHO8xMug8CEDRlctY8yyoznkvxSIcq8gGQg407iv58t90SF%2FCyHsVDw7Jg5hSIg9PS3RqYGjWr7Y5a8Oc2iBV4RbaVgFhuCvkZ8NjTA0NSq8K0XNFvRx8ro%2F4sxMFS%2Bfr0tpeCUwd18WdG9aDbYhxCAZMGQ2ayYzOVZhsY5tzgBZvE07IUN%2BWyHi4QWTcgcksTcMHoylFxd3N3zyqT%2B%2Be0ndeUQNnS5mv4E82pkRGV72%2FkGjiEWSyf04c7bKUUhAi0m77q3dI1XNWZKwFpwWLU4PIXQC3V8p8k33Xue23bGDl1voLyxHwsplzJ6NFDDWBjUDO4xg62NFPWVUbLCwAeAXxq3aC%2FAqWx1DHlU%2BRgAPU5uZoUWIz%2FzP%2FFOro2SGXjQTkUuq3UrWL2cL7W%2BU59q3%2B8NGhLVskos5nr9XB1CaaUh9VujC39IjDBjqkAY5mxCi81Cl7UvkE%2Bk5pqEAhNva7%2F6n9MHGbDvODlihGI88nlJYC%2FPDBh8Gd4GYrWwmKu8vXHYVlR0bHd6F%2BwILm6eRsW8ku3CalMCoudp0eVl%2BLTgNMM%2FAz19M4M%2B9Hcr9yDThMocd2DHYtxsNUfwGhHqQJQF2K%2Ff43zBB%2F5HNdFAJe4zaHPsGc8wdEqO5rtCTTAzKAJEmxlmWIiY8JHnwV%2FqQY&X-Amz-Signature=fdb67a890237ae5ee2b02c3e7194439b22241d100f54acbc221710d7e05ea4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A24MLSC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC12pTu5dM5p0vmOoW2dG3WWK%2FB9z4Oo2h%2F%2BP8GbcrDtAIhANXemA4JU6cMaphW%2BphrfNZG73ofaa2oHVbC%2FE89zIplKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkRkT2olEXJppTJFgq3AMslGfjaGyFq5cMjcIr7QzT7nThZ%2BnKV9XetH5Aww2Z0G1AiecN5%2BgPWFHVEmWpkbie54sqD696%2FOUoJx%2F9mcPzk1f5oleLM%2FxGdnfS9naqiM5iaS6RAOO0KxGHbT1Tq0nvzv%2BwSOvvxQ87g0IygHLuV1Hmcp7RYJchl%2FKDAq%2Fntcb7TQC2wSJ4Zjca9UBo2jrqLjlj0wbEHO8xMug8CEDRlctY8yyoznkvxSIcq8gGQg407iv58t90SF%2FCyHsVDw7Jg5hSIg9PS3RqYGjWr7Y5a8Oc2iBV4RbaVgFhuCvkZ8NjTA0NSq8K0XNFvRx8ro%2F4sxMFS%2Bfr0tpeCUwd18WdG9aDbYhxCAZMGQ2ayYzOVZhsY5tzgBZvE07IUN%2BWyHi4QWTcgcksTcMHoylFxd3N3zyqT%2B%2Be0ndeUQNnS5mv4E82pkRGV72%2FkGjiEWSyf04c7bKUUhAi0m77q3dI1XNWZKwFpwWLU4PIXQC3V8p8k33Xue23bGDl1voLyxHwsplzJ6NFDDWBjUDO4xg62NFPWVUbLCwAeAXxq3aC%2FAqWx1DHlU%2BRgAPU5uZoUWIz%2FzP%2FFOro2SGXjQTkUuq3UrWL2cL7W%2BU59q3%2B8NGhLVskos5nr9XB1CaaUh9VujC39IjDBjqkAY5mxCi81Cl7UvkE%2Bk5pqEAhNva7%2F6n9MHGbDvODlihGI88nlJYC%2FPDBh8Gd4GYrWwmKu8vXHYVlR0bHd6F%2BwILm6eRsW8ku3CalMCoudp0eVl%2BLTgNMM%2FAz19M4M%2B9Hcr9yDThMocd2DHYtxsNUfwGhHqQJQF2K%2Ff43zBB%2F5HNdFAJe4zaHPsGc8wdEqO5rtCTTAzKAJEmxlmWIiY8JHnwV%2FqQY&X-Amz-Signature=7780da7353c7ad32e6d31a1e8c86b1159cfe1787273b8aa1a347bbbd4cf29ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
