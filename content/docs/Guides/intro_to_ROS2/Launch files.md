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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIJC5WP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIG0EDK%2Fn1xDa%2BOCLhTgSst3B403ph9CechO3wZyDngBxAiEAw%2F9uyoQDlPO2QdGsI6gtibjZZCWBKa5J0NiiXSG6bGcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOk9%2Fwg7IHLUauOhZSrcA5kKWtTjlBgjwZ9I2KDwAfqRyS2SOg5wOZiU5tqtCJPC53fMitma2m1V8pVfKhoenPzeHxjNHsBt2Rggkn5QkPSn5954oZf8sYu3Ybrh9IxXYkhEfpkTHsPssNwQfLvrM9zJAw3V5LKWLNgVBlnU58IWCMuemScLMwrwFBVO5mY4WyDSKp50jCiducyJAkp4ERaNs3HtOJLaU8xjE6YJqLpWt4EO2BZPa6%2FmOadKnbZN7yC3xRf5FEfTEH4ICSq8dS22%2FzyfGFAlQ1qBuNdgQbxIVIj3pySLnglyNdZvnr1GPEjb%2Fo4HC6RmkytWHqU5DB1%2BXZP%2FamZC01k2oWpwGM10VG1RjQ%2FC0FDtfA%2FJbtTDQWQ2WiL93rdvqi51a%2B1287gRzBuY4SkFT0ig8JDRscTnupuxSCmr3MrnDYhISno02Qq8T9s%2Fy5V9FFhZiJ5mp%2BX5Dr9nqCJy%2B9p8eULg3TKrL4fj5%2BogRMJ%2BMCy1GFJjJ9%2FN5hgNicqmJ7UWq%2Bov2%2BvrBoqrv9vhGr4iRCVta%2FQeyPSyiDYzbOgW7lt1dQ9Uo%2FQdKNaaIdf2JbGfxd3kCXI8zIf%2Blh88Tu32vqoeTn9ZhMoJJR33SFOrT1a5rweVHEQKwUOG270AMHFqMLqB%2B70GOqUBIMkRVji%2F%2F84t0bt5ETlLykasS46haxXIjSFAK009x8VD6ylITIMcdiRs2UcaoFbQClJ90EAHZCd%2FVyj%2FXVkNmRAyZCDoSayXYtBorKcRuoQCsMe8uHpPLWxX%2FSfAdzLWXWn1bU5z0c9KFatv43zTX3Q6ElxTqVnacMrdW2Wr5LrmQIiQnj6a%2F%2B%2B84k2%2FEUFde0%2FRjHBlALuRbMRLpRED8iESyiAr&X-Amz-Signature=79d86d0c66b2751408d128b7ed761f8d0576e3bce53a95a7a075d833ddc740a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIJC5WP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIG0EDK%2Fn1xDa%2BOCLhTgSst3B403ph9CechO3wZyDngBxAiEAw%2F9uyoQDlPO2QdGsI6gtibjZZCWBKa5J0NiiXSG6bGcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOk9%2Fwg7IHLUauOhZSrcA5kKWtTjlBgjwZ9I2KDwAfqRyS2SOg5wOZiU5tqtCJPC53fMitma2m1V8pVfKhoenPzeHxjNHsBt2Rggkn5QkPSn5954oZf8sYu3Ybrh9IxXYkhEfpkTHsPssNwQfLvrM9zJAw3V5LKWLNgVBlnU58IWCMuemScLMwrwFBVO5mY4WyDSKp50jCiducyJAkp4ERaNs3HtOJLaU8xjE6YJqLpWt4EO2BZPa6%2FmOadKnbZN7yC3xRf5FEfTEH4ICSq8dS22%2FzyfGFAlQ1qBuNdgQbxIVIj3pySLnglyNdZvnr1GPEjb%2Fo4HC6RmkytWHqU5DB1%2BXZP%2FamZC01k2oWpwGM10VG1RjQ%2FC0FDtfA%2FJbtTDQWQ2WiL93rdvqi51a%2B1287gRzBuY4SkFT0ig8JDRscTnupuxSCmr3MrnDYhISno02Qq8T9s%2Fy5V9FFhZiJ5mp%2BX5Dr9nqCJy%2B9p8eULg3TKrL4fj5%2BogRMJ%2BMCy1GFJjJ9%2FN5hgNicqmJ7UWq%2Bov2%2BvrBoqrv9vhGr4iRCVta%2FQeyPSyiDYzbOgW7lt1dQ9Uo%2FQdKNaaIdf2JbGfxd3kCXI8zIf%2Blh88Tu32vqoeTn9ZhMoJJR33SFOrT1a5rweVHEQKwUOG270AMHFqMLqB%2B70GOqUBIMkRVji%2F%2F84t0bt5ETlLykasS46haxXIjSFAK009x8VD6ylITIMcdiRs2UcaoFbQClJ90EAHZCd%2FVyj%2FXVkNmRAyZCDoSayXYtBorKcRuoQCsMe8uHpPLWxX%2FSfAdzLWXWn1bU5z0c9KFatv43zTX3Q6ElxTqVnacMrdW2Wr5LrmQIiQnj6a%2F%2B%2B84k2%2FEUFde0%2FRjHBlALuRbMRLpRED8iESyiAr&X-Amz-Signature=e28eaa1ba3045dd7bfa91b4e5e1b77e48bf3330227fe72358393dd69fcc0e95b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIJC5WP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIG0EDK%2Fn1xDa%2BOCLhTgSst3B403ph9CechO3wZyDngBxAiEAw%2F9uyoQDlPO2QdGsI6gtibjZZCWBKa5J0NiiXSG6bGcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOk9%2Fwg7IHLUauOhZSrcA5kKWtTjlBgjwZ9I2KDwAfqRyS2SOg5wOZiU5tqtCJPC53fMitma2m1V8pVfKhoenPzeHxjNHsBt2Rggkn5QkPSn5954oZf8sYu3Ybrh9IxXYkhEfpkTHsPssNwQfLvrM9zJAw3V5LKWLNgVBlnU58IWCMuemScLMwrwFBVO5mY4WyDSKp50jCiducyJAkp4ERaNs3HtOJLaU8xjE6YJqLpWt4EO2BZPa6%2FmOadKnbZN7yC3xRf5FEfTEH4ICSq8dS22%2FzyfGFAlQ1qBuNdgQbxIVIj3pySLnglyNdZvnr1GPEjb%2Fo4HC6RmkytWHqU5DB1%2BXZP%2FamZC01k2oWpwGM10VG1RjQ%2FC0FDtfA%2FJbtTDQWQ2WiL93rdvqi51a%2B1287gRzBuY4SkFT0ig8JDRscTnupuxSCmr3MrnDYhISno02Qq8T9s%2Fy5V9FFhZiJ5mp%2BX5Dr9nqCJy%2B9p8eULg3TKrL4fj5%2BogRMJ%2BMCy1GFJjJ9%2FN5hgNicqmJ7UWq%2Bov2%2BvrBoqrv9vhGr4iRCVta%2FQeyPSyiDYzbOgW7lt1dQ9Uo%2FQdKNaaIdf2JbGfxd3kCXI8zIf%2Blh88Tu32vqoeTn9ZhMoJJR33SFOrT1a5rweVHEQKwUOG270AMHFqMLqB%2B70GOqUBIMkRVji%2F%2F84t0bt5ETlLykasS46haxXIjSFAK009x8VD6ylITIMcdiRs2UcaoFbQClJ90EAHZCd%2FVyj%2FXVkNmRAyZCDoSayXYtBorKcRuoQCsMe8uHpPLWxX%2FSfAdzLWXWn1bU5z0c9KFatv43zTX3Q6ElxTqVnacMrdW2Wr5LrmQIiQnj6a%2F%2B%2B84k2%2FEUFde0%2FRjHBlALuRbMRLpRED8iESyiAr&X-Amz-Signature=8d2c89c12ec698ced92cc014c58eca3454dc2c9d59a1900f538952ddfb6dde84&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
