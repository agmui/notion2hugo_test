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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWDBCS2%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQC5NmgvUd9Sc9xSoIOrku6zl3lwN%2FvENjfIsZc1aUoGlQIgDTWu810mb%2BwQz7Vb6K2oTcbRb7uvjQYpSyPFWF%2F0XZgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcdjpYfZLh1I%2FwJOSrcA%2F%2Fry1kdIQlpUogarEowEkifRSutgigSupz0Mp7RTUi7CKmqqPIS0oWCD4pm6nQdLYeoQ62Pi7780Otly2ijdNe8T7ZzAAuHzSGpd68VDuJTFnINheahhm4aHJ3mFbfPI2a2KUkEv2eu3npU%2F8A7U%2FlqwP3mtmfV9WjO6Fn1uUyL2IZkCRkLzKnfmh13TrEbhXfldDI0lC%2Fer8hIt4CTkxV%2FVWAC8%2B0iogeZlw7JO%2FYj9TMQAHVLXIC7ysM%2FhIK0ygBjy7b4%2FcjQEIKLLYWBs59woLCdi3cs4QNHDFE6ICo6E%2Bv%2Bpclxej8SSp3TuC7KyPQHgOYmGfPUazqlaHKRjvvl7tvaAgEz9br5g3mflmFEhgb2Wcbo1c0vnc6juWk41d5z673GtOVWTYEdXzi5wVzKU7FiyU5mJWEOZ5nZhUHpBbyK1%2Fi7h8g%2BhcCLj5n2r0OKCV6B3hNFASzimtcgCcs0YJHoeP1%2FVg%2B7d4lHkkVQUoplSPhaS3nxz5t%2F9TMMhLaLHVgafWRUcEiLitBMXAvjpUbB5TYYqCK84rVcvGA8bcJgTyGmlS8SZ%2F9g9JzUqUEBEThZVF1vVLI3I%2Fb%2BuqdAVMGZ8HNJPJJR%2Bvta7J8JOQY%2BVatwF%2FTFzFTgMKD%2BwsEGOqUBrkcy7kiAhW7fNpinFgL0863qTQjawhkBVRn87bcQ%2BxpP0UyQ%2BnN5qcqNngqIpCINECamrYfH6d9yrkd9Li7wniAEKL7N0r2mfjBj%2BKFU9ERolaBtGU%2FV0pcxW%2FWmvvXfzmiiA5E3NPRRBB%2BrriX6rtTA9B0LVKrwV3vg%2FZWwjjh%2FA0EMF6CNs5yCiQFR2yRZR%2FZa6gCtOFGlAH4ItQsN0dl5Ji6u&X-Amz-Signature=e08369adf0cc8c94d856bc3c46300bd27a5fc71439b7a2c9cc38178ced058638&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWDBCS2%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQC5NmgvUd9Sc9xSoIOrku6zl3lwN%2FvENjfIsZc1aUoGlQIgDTWu810mb%2BwQz7Vb6K2oTcbRb7uvjQYpSyPFWF%2F0XZgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcdjpYfZLh1I%2FwJOSrcA%2F%2Fry1kdIQlpUogarEowEkifRSutgigSupz0Mp7RTUi7CKmqqPIS0oWCD4pm6nQdLYeoQ62Pi7780Otly2ijdNe8T7ZzAAuHzSGpd68VDuJTFnINheahhm4aHJ3mFbfPI2a2KUkEv2eu3npU%2F8A7U%2FlqwP3mtmfV9WjO6Fn1uUyL2IZkCRkLzKnfmh13TrEbhXfldDI0lC%2Fer8hIt4CTkxV%2FVWAC8%2B0iogeZlw7JO%2FYj9TMQAHVLXIC7ysM%2FhIK0ygBjy7b4%2FcjQEIKLLYWBs59woLCdi3cs4QNHDFE6ICo6E%2Bv%2Bpclxej8SSp3TuC7KyPQHgOYmGfPUazqlaHKRjvvl7tvaAgEz9br5g3mflmFEhgb2Wcbo1c0vnc6juWk41d5z673GtOVWTYEdXzi5wVzKU7FiyU5mJWEOZ5nZhUHpBbyK1%2Fi7h8g%2BhcCLj5n2r0OKCV6B3hNFASzimtcgCcs0YJHoeP1%2FVg%2B7d4lHkkVQUoplSPhaS3nxz5t%2F9TMMhLaLHVgafWRUcEiLitBMXAvjpUbB5TYYqCK84rVcvGA8bcJgTyGmlS8SZ%2F9g9JzUqUEBEThZVF1vVLI3I%2Fb%2BuqdAVMGZ8HNJPJJR%2Bvta7J8JOQY%2BVatwF%2FTFzFTgMKD%2BwsEGOqUBrkcy7kiAhW7fNpinFgL0863qTQjawhkBVRn87bcQ%2BxpP0UyQ%2BnN5qcqNngqIpCINECamrYfH6d9yrkd9Li7wniAEKL7N0r2mfjBj%2BKFU9ERolaBtGU%2FV0pcxW%2FWmvvXfzmiiA5E3NPRRBB%2BrriX6rtTA9B0LVKrwV3vg%2FZWwjjh%2FA0EMF6CNs5yCiQFR2yRZR%2FZa6gCtOFGlAH4ItQsN0dl5Ji6u&X-Amz-Signature=3c7ad8263287ffc0e1685c86597a110c825d80afa18c9e1fe6c2436a112c1909&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWDBCS2%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQC5NmgvUd9Sc9xSoIOrku6zl3lwN%2FvENjfIsZc1aUoGlQIgDTWu810mb%2BwQz7Vb6K2oTcbRb7uvjQYpSyPFWF%2F0XZgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcdjpYfZLh1I%2FwJOSrcA%2F%2Fry1kdIQlpUogarEowEkifRSutgigSupz0Mp7RTUi7CKmqqPIS0oWCD4pm6nQdLYeoQ62Pi7780Otly2ijdNe8T7ZzAAuHzSGpd68VDuJTFnINheahhm4aHJ3mFbfPI2a2KUkEv2eu3npU%2F8A7U%2FlqwP3mtmfV9WjO6Fn1uUyL2IZkCRkLzKnfmh13TrEbhXfldDI0lC%2Fer8hIt4CTkxV%2FVWAC8%2B0iogeZlw7JO%2FYj9TMQAHVLXIC7ysM%2FhIK0ygBjy7b4%2FcjQEIKLLYWBs59woLCdi3cs4QNHDFE6ICo6E%2Bv%2Bpclxej8SSp3TuC7KyPQHgOYmGfPUazqlaHKRjvvl7tvaAgEz9br5g3mflmFEhgb2Wcbo1c0vnc6juWk41d5z673GtOVWTYEdXzi5wVzKU7FiyU5mJWEOZ5nZhUHpBbyK1%2Fi7h8g%2BhcCLj5n2r0OKCV6B3hNFASzimtcgCcs0YJHoeP1%2FVg%2B7d4lHkkVQUoplSPhaS3nxz5t%2F9TMMhLaLHVgafWRUcEiLitBMXAvjpUbB5TYYqCK84rVcvGA8bcJgTyGmlS8SZ%2F9g9JzUqUEBEThZVF1vVLI3I%2Fb%2BuqdAVMGZ8HNJPJJR%2Bvta7J8JOQY%2BVatwF%2FTFzFTgMKD%2BwsEGOqUBrkcy7kiAhW7fNpinFgL0863qTQjawhkBVRn87bcQ%2BxpP0UyQ%2BnN5qcqNngqIpCINECamrYfH6d9yrkd9Li7wniAEKL7N0r2mfjBj%2BKFU9ERolaBtGU%2FV0pcxW%2FWmvvXfzmiiA5E3NPRRBB%2BrriX6rtTA9B0LVKrwV3vg%2FZWwjjh%2FA0EMF6CNs5yCiQFR2yRZR%2FZa6gCtOFGlAH4ItQsN0dl5Ji6u&X-Amz-Signature=779631226f1e49085c2a7fda9d3dbedd1d761856fce09610325538aa577660ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
