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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63QDRRP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR7RN8c0eNXirKoIebY%2BhjIY3nTt5JqRnorNpNbVfXzAiB%2BUPmov7mujIkeHTy3L2Pji9s0KRpv4tqCt08iweeZ2ir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqaw3xG%2FYA8YY39tFKtwDTEeQzrV5iCUpL0jVtq%2BPiUP5L1pJeT%2BKMJpYD36PouWe5PePUYj93tJ1aqOqQqEGF7ilLjdBRvUrMR1fDvJZYWyeNBs0kHMZcQJputThU7gvz1aoVgJUmP7FRJCLJg6YFdHW2iKUwd6BaW7du61jD20i8KfZVVHezd5ePsYt3vPYNivb3cl%2FHCUZaIZDFRmJM6k9tCbDKHAeA%2B2DP0HD%2FM3%2F1LgYHrQ6DWXNMl9bHsB3SCakn00OXDTH5g7U4dF%2Bzq0Bs93cBeoElh3TETxf5R6SInsxApGshsyG4f4U1U8XpfPvUyWSWrV5jvIhEFj5sybfdiA2pmPfVhGqXXucVJHV6hPT5lIuNEslhlb4eG%2BS%2BcmblmkV2nTqsnWr9ucUoeGCy81iZmmaoy27C7MtCIozeG96H8OyZQLHpQxl64DXcH4S3WOpDnj8u5N%2FIYeQUkTRGm2SCNn%2F8nrOegLxJ%2FM7oBgV3kFzTmo23897%2BxBI4IyDekESfVQe6rEMtoJMLu27TyeyXTQW88k8q5AO17a4WPe8cgVD4zN1g7G3BBhuDlcv28w%2FneDx83uPc1vcgm2FNxboqBoG9m4sJnY9e8JB%2F%2F86%2BYuP%2BNQIYlwTuADuZd2aWH74qGiuvzEwmbTpwAY6pgHWUXPgWzZarU1bAIZzBI6mlj1RMN3PVCFzmrd1X6l1%2B6Lj6l5HvhANuwUuz8K0xOnmCIJIQ1jZJm%2FZ%2FIsMkt%2Bz1kzTJKzMc3%2FeAdxllh2QpTKesEA%2BODDU9KcPZ3dNMwP0QO9Ga4d676IDgG7Oby3Pkwx4XhJCgNQ4G1HFbViEafQknm%2F0ylIthWiPhBEJDU0%2BuWbzqKobqA07RpENa6JYcjymE%2Byc&X-Amz-Signature=46ff6331ca51dae1581c04785a5a861e8573326375e9ae897bc1d87d9dba6a12&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63QDRRP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR7RN8c0eNXirKoIebY%2BhjIY3nTt5JqRnorNpNbVfXzAiB%2BUPmov7mujIkeHTy3L2Pji9s0KRpv4tqCt08iweeZ2ir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqaw3xG%2FYA8YY39tFKtwDTEeQzrV5iCUpL0jVtq%2BPiUP5L1pJeT%2BKMJpYD36PouWe5PePUYj93tJ1aqOqQqEGF7ilLjdBRvUrMR1fDvJZYWyeNBs0kHMZcQJputThU7gvz1aoVgJUmP7FRJCLJg6YFdHW2iKUwd6BaW7du61jD20i8KfZVVHezd5ePsYt3vPYNivb3cl%2FHCUZaIZDFRmJM6k9tCbDKHAeA%2B2DP0HD%2FM3%2F1LgYHrQ6DWXNMl9bHsB3SCakn00OXDTH5g7U4dF%2Bzq0Bs93cBeoElh3TETxf5R6SInsxApGshsyG4f4U1U8XpfPvUyWSWrV5jvIhEFj5sybfdiA2pmPfVhGqXXucVJHV6hPT5lIuNEslhlb4eG%2BS%2BcmblmkV2nTqsnWr9ucUoeGCy81iZmmaoy27C7MtCIozeG96H8OyZQLHpQxl64DXcH4S3WOpDnj8u5N%2FIYeQUkTRGm2SCNn%2F8nrOegLxJ%2FM7oBgV3kFzTmo23897%2BxBI4IyDekESfVQe6rEMtoJMLu27TyeyXTQW88k8q5AO17a4WPe8cgVD4zN1g7G3BBhuDlcv28w%2FneDx83uPc1vcgm2FNxboqBoG9m4sJnY9e8JB%2F%2F86%2BYuP%2BNQIYlwTuADuZd2aWH74qGiuvzEwmbTpwAY6pgHWUXPgWzZarU1bAIZzBI6mlj1RMN3PVCFzmrd1X6l1%2B6Lj6l5HvhANuwUuz8K0xOnmCIJIQ1jZJm%2FZ%2FIsMkt%2Bz1kzTJKzMc3%2FeAdxllh2QpTKesEA%2BODDU9KcPZ3dNMwP0QO9Ga4d676IDgG7Oby3Pkwx4XhJCgNQ4G1HFbViEafQknm%2F0ylIthWiPhBEJDU0%2BuWbzqKobqA07RpENa6JYcjymE%2Byc&X-Amz-Signature=17444a317be1ce91a0c0afae16906684785d935d5c64019e180a9a9305cb7c76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63QDRRP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR7RN8c0eNXirKoIebY%2BhjIY3nTt5JqRnorNpNbVfXzAiB%2BUPmov7mujIkeHTy3L2Pji9s0KRpv4tqCt08iweeZ2ir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqaw3xG%2FYA8YY39tFKtwDTEeQzrV5iCUpL0jVtq%2BPiUP5L1pJeT%2BKMJpYD36PouWe5PePUYj93tJ1aqOqQqEGF7ilLjdBRvUrMR1fDvJZYWyeNBs0kHMZcQJputThU7gvz1aoVgJUmP7FRJCLJg6YFdHW2iKUwd6BaW7du61jD20i8KfZVVHezd5ePsYt3vPYNivb3cl%2FHCUZaIZDFRmJM6k9tCbDKHAeA%2B2DP0HD%2FM3%2F1LgYHrQ6DWXNMl9bHsB3SCakn00OXDTH5g7U4dF%2Bzq0Bs93cBeoElh3TETxf5R6SInsxApGshsyG4f4U1U8XpfPvUyWSWrV5jvIhEFj5sybfdiA2pmPfVhGqXXucVJHV6hPT5lIuNEslhlb4eG%2BS%2BcmblmkV2nTqsnWr9ucUoeGCy81iZmmaoy27C7MtCIozeG96H8OyZQLHpQxl64DXcH4S3WOpDnj8u5N%2FIYeQUkTRGm2SCNn%2F8nrOegLxJ%2FM7oBgV3kFzTmo23897%2BxBI4IyDekESfVQe6rEMtoJMLu27TyeyXTQW88k8q5AO17a4WPe8cgVD4zN1g7G3BBhuDlcv28w%2FneDx83uPc1vcgm2FNxboqBoG9m4sJnY9e8JB%2F%2F86%2BYuP%2BNQIYlwTuADuZd2aWH74qGiuvzEwmbTpwAY6pgHWUXPgWzZarU1bAIZzBI6mlj1RMN3PVCFzmrd1X6l1%2B6Lj6l5HvhANuwUuz8K0xOnmCIJIQ1jZJm%2FZ%2FIsMkt%2Bz1kzTJKzMc3%2FeAdxllh2QpTKesEA%2BODDU9KcPZ3dNMwP0QO9Ga4d676IDgG7Oby3Pkwx4XhJCgNQ4G1HFbViEafQknm%2F0ylIthWiPhBEJDU0%2BuWbzqKobqA07RpENa6JYcjymE%2Byc&X-Amz-Signature=cc74fb91a935ae34d786c458763f829f4358a450956ca978de48f4d3155e1cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
