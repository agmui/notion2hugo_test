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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJ3UFRH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg0TwkfgRDCIKWyKHaSfXQ2mvBIvlzZA9%2Bd3tBhjrO0AiEApFZiRmySsi7zzaosaanBj%2BAVqKxSW7vB%2F%2FivuUgrMJAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPtqcbLpAdq5eD3DxSrcA50CBrjXAQKL41R1a0%2BoEKqvJmtevc5qQwZX0Qji6oAJBC3RQhjmcCyj%2F89V2V9JBussr3Ck4F0oCFWKEnzd1t4Ilzfx2YC0b2%2FoyNWcwuFn9Wnhi8jxRtFcwCo%2BeZR9FCHiNteOg%2FQUDRF4X2836ME3fLN%2BGMBGL6dA84Rno8NTDtbU%2BZ3UxrBQ6%2BJ%2BrMuqcQ1SRbFLm6snAYqmFPkKNxwOA7QqnV1nmA%2Bf4OBoBcOVSB1Ds5KObi6PdRRRLxr4Xa7bTgm4Wp8smT49InLkLrd788Cn4geJGqT3dvVJfQbQMGNLMi1z3s2iejQDCjHWX4y9hC6LYKXT3P6XIds8XQYtftOfWUH5UZfY35jXds8EpDI2GPl3j4iP2GsL4YKEdBxSKV8Zr4MZozYGt6WGCFIgEMqcAnHcNoli4JlXnnUQmVSfHDj4mUFSc5mu34%2F4Ax2URHesdvQxKrXCDGiqBlU1NeRpV8WwYq%2BgAddDpveTEYQdsJuuw4sifyt9jv7DqgocOkEwBR7dca4OtNKN1bDmaZCroc%2BMUwFlB21FIlWJzIwm4V%2FuHof0qrvlbhnbme21EvVjawO9dw20oelJD5IEdc4MbfST0aHwInSVBCsYX%2F80784px6vB1i%2FSMJ7ggMAGOqUBGJitMOaxbdr2a2dA3yrmgWXWT%2BO9oM7B%2BxEBAbEojfMBmp8W7Q%2BPXGp9kYxVFveipBM0ruWqgBOVARJq8y4WAQsW82rqHiGxJf%2Fg%2B9j3HeDUCvsGnXTeH28YTGSBR%2FSM4cjMXOo5oDcuLh1RZrVjsSR2ZLIDqhPaD6cn3HikM5TMtFGHrJnZVS0gw%2Fdo%2B41CAvaDo4tjm2%2FciXb45ayHAksCdmMI&X-Amz-Signature=e52c03af07dc86750e67b7e62266919db9783b5409c84f82fda06186ffdfb48c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJ3UFRH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg0TwkfgRDCIKWyKHaSfXQ2mvBIvlzZA9%2Bd3tBhjrO0AiEApFZiRmySsi7zzaosaanBj%2BAVqKxSW7vB%2F%2FivuUgrMJAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPtqcbLpAdq5eD3DxSrcA50CBrjXAQKL41R1a0%2BoEKqvJmtevc5qQwZX0Qji6oAJBC3RQhjmcCyj%2F89V2V9JBussr3Ck4F0oCFWKEnzd1t4Ilzfx2YC0b2%2FoyNWcwuFn9Wnhi8jxRtFcwCo%2BeZR9FCHiNteOg%2FQUDRF4X2836ME3fLN%2BGMBGL6dA84Rno8NTDtbU%2BZ3UxrBQ6%2BJ%2BrMuqcQ1SRbFLm6snAYqmFPkKNxwOA7QqnV1nmA%2Bf4OBoBcOVSB1Ds5KObi6PdRRRLxr4Xa7bTgm4Wp8smT49InLkLrd788Cn4geJGqT3dvVJfQbQMGNLMi1z3s2iejQDCjHWX4y9hC6LYKXT3P6XIds8XQYtftOfWUH5UZfY35jXds8EpDI2GPl3j4iP2GsL4YKEdBxSKV8Zr4MZozYGt6WGCFIgEMqcAnHcNoli4JlXnnUQmVSfHDj4mUFSc5mu34%2F4Ax2URHesdvQxKrXCDGiqBlU1NeRpV8WwYq%2BgAddDpveTEYQdsJuuw4sifyt9jv7DqgocOkEwBR7dca4OtNKN1bDmaZCroc%2BMUwFlB21FIlWJzIwm4V%2FuHof0qrvlbhnbme21EvVjawO9dw20oelJD5IEdc4MbfST0aHwInSVBCsYX%2F80784px6vB1i%2FSMJ7ggMAGOqUBGJitMOaxbdr2a2dA3yrmgWXWT%2BO9oM7B%2BxEBAbEojfMBmp8W7Q%2BPXGp9kYxVFveipBM0ruWqgBOVARJq8y4WAQsW82rqHiGxJf%2Fg%2B9j3HeDUCvsGnXTeH28YTGSBR%2FSM4cjMXOo5oDcuLh1RZrVjsSR2ZLIDqhPaD6cn3HikM5TMtFGHrJnZVS0gw%2Fdo%2B41CAvaDo4tjm2%2FciXb45ayHAksCdmMI&X-Amz-Signature=99e5987c0ca553581c6f3ae73653a77d448afec904b11bcb3a120366dfc1914f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJ3UFRH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg0TwkfgRDCIKWyKHaSfXQ2mvBIvlzZA9%2Bd3tBhjrO0AiEApFZiRmySsi7zzaosaanBj%2BAVqKxSW7vB%2F%2FivuUgrMJAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPtqcbLpAdq5eD3DxSrcA50CBrjXAQKL41R1a0%2BoEKqvJmtevc5qQwZX0Qji6oAJBC3RQhjmcCyj%2F89V2V9JBussr3Ck4F0oCFWKEnzd1t4Ilzfx2YC0b2%2FoyNWcwuFn9Wnhi8jxRtFcwCo%2BeZR9FCHiNteOg%2FQUDRF4X2836ME3fLN%2BGMBGL6dA84Rno8NTDtbU%2BZ3UxrBQ6%2BJ%2BrMuqcQ1SRbFLm6snAYqmFPkKNxwOA7QqnV1nmA%2Bf4OBoBcOVSB1Ds5KObi6PdRRRLxr4Xa7bTgm4Wp8smT49InLkLrd788Cn4geJGqT3dvVJfQbQMGNLMi1z3s2iejQDCjHWX4y9hC6LYKXT3P6XIds8XQYtftOfWUH5UZfY35jXds8EpDI2GPl3j4iP2GsL4YKEdBxSKV8Zr4MZozYGt6WGCFIgEMqcAnHcNoli4JlXnnUQmVSfHDj4mUFSc5mu34%2F4Ax2URHesdvQxKrXCDGiqBlU1NeRpV8WwYq%2BgAddDpveTEYQdsJuuw4sifyt9jv7DqgocOkEwBR7dca4OtNKN1bDmaZCroc%2BMUwFlB21FIlWJzIwm4V%2FuHof0qrvlbhnbme21EvVjawO9dw20oelJD5IEdc4MbfST0aHwInSVBCsYX%2F80784px6vB1i%2FSMJ7ggMAGOqUBGJitMOaxbdr2a2dA3yrmgWXWT%2BO9oM7B%2BxEBAbEojfMBmp8W7Q%2BPXGp9kYxVFveipBM0ruWqgBOVARJq8y4WAQsW82rqHiGxJf%2Fg%2B9j3HeDUCvsGnXTeH28YTGSBR%2FSM4cjMXOo5oDcuLh1RZrVjsSR2ZLIDqhPaD6cn3HikM5TMtFGHrJnZVS0gw%2Fdo%2B41CAvaDo4tjm2%2FciXb45ayHAksCdmMI&X-Amz-Signature=05715e79a802ac5541d4cbe7dbfbbea30e1708fa4b95525666cdb20a72a5d3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
