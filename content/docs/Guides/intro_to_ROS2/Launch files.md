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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVUSYQM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJNfgHi9eKyuGd9ouhufSLXee6yHNWgB7r%2B60lH%2FHSwIgWwqjfIokkenJ70SZ4oywz8BtZibQt8%2F82TclS1%2B%2BLnYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA92uP%2FkNN%2BymCAVTyrcAwIV3%2Ft0HcPmMJvFmMw7GxlXMqj1An4GHmuy3lNiDooZxGJN3sNwl55Q%2Baa%2FwNsqrNVTCNv%2FUXiZRCQ7OLR7dK55S8mb0SeRiEatyBOcu0oCCqFoVfTRnB5lTucnTVx8FKayZtATuKekUnFeUyE5YS0wF%2FJyMKtSFs70%2FCAcUyBhREu1%2BTpcTnjAWdlXtFEp6D76C%2BB65rWiRYZOnsvGCpEoX76MR5p2B6ddrpqpySR5uAbrWp5dPVAqrtx3hKSKaGQRvsqoChfg5Dz97m6uecftK2xd1o%2F%2BC9emBwH317wgow4M%2BfH3x%2FhDxx3O4UKKGwjoOpuN9uth%2BwC1nN24RdQvRsFVhzDRP9tlOgnxYVxFRarvUNv5wrrW6xa65DzSTGiMolx8uugOTLAjZybYu7810QcYKQjUeLFHUThc6RZudEjdIUoZ8%2Bf55gjiPnqgW%2FSWpnZegz%2BbVh44a4FheJDZXXfGOpeAF2ofaCd2mo1hZZvLXLZoo%2BOPwZi%2FSpP8VOL2YkN7619gkbv8KlOad9XZ3Cog5IZqQFgV1BrSdUBzP%2FWWnvv6B5prinzW%2B6nxyBgjngZSi3WHyk155Zv0nJu5YCpeqws3cDzlPpCASJDxEON40cNX3TlKfia3MMr46sAGOqUBBZfCvPr43KCGohNSqC9RfrgYfvNGdOiwYx3lkx9ZniKL%2BBHAf63mL8sGRU5SgdanPB0Zrrkv5dt66W%2BVixwTSlxu0p3jWnBUW7VIGdj7ljxnmmnByaZtcYamlsc900IRNm%2BH14kpn3QY6ePlkODJlePW3E5QoeUXCaDjABzKhlicEteaKeAQwR7HRJcoD79L0mqk0xAvmrd%2FvmjmJGilJ62c5UPO&X-Amz-Signature=27b70c13bac0fb89c66bf4ebb57b6381ca0c48bce6ea56e9456ba6eedc1edf42&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVUSYQM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJNfgHi9eKyuGd9ouhufSLXee6yHNWgB7r%2B60lH%2FHSwIgWwqjfIokkenJ70SZ4oywz8BtZibQt8%2F82TclS1%2B%2BLnYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA92uP%2FkNN%2BymCAVTyrcAwIV3%2Ft0HcPmMJvFmMw7GxlXMqj1An4GHmuy3lNiDooZxGJN3sNwl55Q%2Baa%2FwNsqrNVTCNv%2FUXiZRCQ7OLR7dK55S8mb0SeRiEatyBOcu0oCCqFoVfTRnB5lTucnTVx8FKayZtATuKekUnFeUyE5YS0wF%2FJyMKtSFs70%2FCAcUyBhREu1%2BTpcTnjAWdlXtFEp6D76C%2BB65rWiRYZOnsvGCpEoX76MR5p2B6ddrpqpySR5uAbrWp5dPVAqrtx3hKSKaGQRvsqoChfg5Dz97m6uecftK2xd1o%2F%2BC9emBwH317wgow4M%2BfH3x%2FhDxx3O4UKKGwjoOpuN9uth%2BwC1nN24RdQvRsFVhzDRP9tlOgnxYVxFRarvUNv5wrrW6xa65DzSTGiMolx8uugOTLAjZybYu7810QcYKQjUeLFHUThc6RZudEjdIUoZ8%2Bf55gjiPnqgW%2FSWpnZegz%2BbVh44a4FheJDZXXfGOpeAF2ofaCd2mo1hZZvLXLZoo%2BOPwZi%2FSpP8VOL2YkN7619gkbv8KlOad9XZ3Cog5IZqQFgV1BrSdUBzP%2FWWnvv6B5prinzW%2B6nxyBgjngZSi3WHyk155Zv0nJu5YCpeqws3cDzlPpCASJDxEON40cNX3TlKfia3MMr46sAGOqUBBZfCvPr43KCGohNSqC9RfrgYfvNGdOiwYx3lkx9ZniKL%2BBHAf63mL8sGRU5SgdanPB0Zrrkv5dt66W%2BVixwTSlxu0p3jWnBUW7VIGdj7ljxnmmnByaZtcYamlsc900IRNm%2BH14kpn3QY6ePlkODJlePW3E5QoeUXCaDjABzKhlicEteaKeAQwR7HRJcoD79L0mqk0xAvmrd%2FvmjmJGilJ62c5UPO&X-Amz-Signature=1edf4b69619fc284bd24356de819ac73d46ec7ca0b328aefcda589d1e3a4cba9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVUSYQM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJNfgHi9eKyuGd9ouhufSLXee6yHNWgB7r%2B60lH%2FHSwIgWwqjfIokkenJ70SZ4oywz8BtZibQt8%2F82TclS1%2B%2BLnYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA92uP%2FkNN%2BymCAVTyrcAwIV3%2Ft0HcPmMJvFmMw7GxlXMqj1An4GHmuy3lNiDooZxGJN3sNwl55Q%2Baa%2FwNsqrNVTCNv%2FUXiZRCQ7OLR7dK55S8mb0SeRiEatyBOcu0oCCqFoVfTRnB5lTucnTVx8FKayZtATuKekUnFeUyE5YS0wF%2FJyMKtSFs70%2FCAcUyBhREu1%2BTpcTnjAWdlXtFEp6D76C%2BB65rWiRYZOnsvGCpEoX76MR5p2B6ddrpqpySR5uAbrWp5dPVAqrtx3hKSKaGQRvsqoChfg5Dz97m6uecftK2xd1o%2F%2BC9emBwH317wgow4M%2BfH3x%2FhDxx3O4UKKGwjoOpuN9uth%2BwC1nN24RdQvRsFVhzDRP9tlOgnxYVxFRarvUNv5wrrW6xa65DzSTGiMolx8uugOTLAjZybYu7810QcYKQjUeLFHUThc6RZudEjdIUoZ8%2Bf55gjiPnqgW%2FSWpnZegz%2BbVh44a4FheJDZXXfGOpeAF2ofaCd2mo1hZZvLXLZoo%2BOPwZi%2FSpP8VOL2YkN7619gkbv8KlOad9XZ3Cog5IZqQFgV1BrSdUBzP%2FWWnvv6B5prinzW%2B6nxyBgjngZSi3WHyk155Zv0nJu5YCpeqws3cDzlPpCASJDxEON40cNX3TlKfia3MMr46sAGOqUBBZfCvPr43KCGohNSqC9RfrgYfvNGdOiwYx3lkx9ZniKL%2BBHAf63mL8sGRU5SgdanPB0Zrrkv5dt66W%2BVixwTSlxu0p3jWnBUW7VIGdj7ljxnmmnByaZtcYamlsc900IRNm%2BH14kpn3QY6ePlkODJlePW3E5QoeUXCaDjABzKhlicEteaKeAQwR7HRJcoD79L0mqk0xAvmrd%2FvmjmJGilJ62c5UPO&X-Amz-Signature=4f9cee51e65d6d746a1984279fd8ae3f6f21a38994137d51e55c94dba0daa876&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
