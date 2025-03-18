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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZAHZKBY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICQ16qc0OZbQRbjaKvnt%2B18FJ3DGZbUetvoisPknkUfZAiAwci1wG6EoUjK63AJq5iE9Sms86IpyOdUuMlVgkL9CKir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM5Bz9rPJ3QTo6pP26KtwDA%2FFrOmX0RnAv%2FfVkxaTGUDTKq471Uie94wEZLr2qfJDHNzR1Sz1ToxQiioz7wN0j4xO5I6U5ob7P9Fd63Hj4zNhTgLn4G%2BPuDceY%2BWGrEy4UO21maP37z%2Fx0K9jwLcHQ%2BkNsjb11PbQHmWyMDlI76pZVAWR5lhjnvmz3GwcGS6VyHcL%2FoRYq9NbOXyzhl1Pt%2Fvb1AodjblJyrgg%2Bfkcry8M1gk6YK8o%2BgGMxDPC3CfO44mk0Ayglb2B3CDLKzJucSGSVMxUmnpkMcyG2i3m%2FespG%2BUIIRplqc54KNoY0IoLUSdr8BGQFOOHTz1A0zzARNAu3YmRU8s8krAfB6k9RNXOVSqyCa4KUnoCXwIuy4JiFert%2BFHz8ebUaANJm7qnc2X4rtRWltsUnBCfbGAiIgGrwXUi%2BX58wHpBwLEmYZH6tiJL%2BeBE%2F7FXNVMHcgTaiSVHPl%2FGeGjZUzarbU4XhyOz5qECSE63IykeMvKwrh6DKKg4CppUv7jSSzZc0AicIloip8jGUsIrzpqz9PvMHePv1pVTmzXTyefEffaW87zmwBVhpbUQ4Tfm0cDJ7ki10xOZWEV7ToOumEaxu7K%2B1N2JiUUKBoor5BqwWqrFgS1oaE4IGFtsnpwO63fcw2ZTmvgY6pgHSP4K%2BXkcXUuSd2XamAFFhhFcdylynS%2FtORYLRuV3N%2FnGJDGIox8KLaIXhZ7MppRutByRgEeS1aiCrOuWcI9s289xNHthUGNey2oTssltSBdTll8X8ghSL7dKXi8CDuCX54H%2Fiy1%2FcxzIVJbxFo4%2B4K6UIZZU3xL4bFEjBafkKdiiwW1cAYq6YaOUpCFf1SYOFGejHMeEqxLyeqGxTMGADm4zL68dX&X-Amz-Signature=2a8ee54fcd81d48c7fa2c43e7978d67ee24ac14d8053a2e87e3da702bd8386fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZAHZKBY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICQ16qc0OZbQRbjaKvnt%2B18FJ3DGZbUetvoisPknkUfZAiAwci1wG6EoUjK63AJq5iE9Sms86IpyOdUuMlVgkL9CKir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM5Bz9rPJ3QTo6pP26KtwDA%2FFrOmX0RnAv%2FfVkxaTGUDTKq471Uie94wEZLr2qfJDHNzR1Sz1ToxQiioz7wN0j4xO5I6U5ob7P9Fd63Hj4zNhTgLn4G%2BPuDceY%2BWGrEy4UO21maP37z%2Fx0K9jwLcHQ%2BkNsjb11PbQHmWyMDlI76pZVAWR5lhjnvmz3GwcGS6VyHcL%2FoRYq9NbOXyzhl1Pt%2Fvb1AodjblJyrgg%2Bfkcry8M1gk6YK8o%2BgGMxDPC3CfO44mk0Ayglb2B3CDLKzJucSGSVMxUmnpkMcyG2i3m%2FespG%2BUIIRplqc54KNoY0IoLUSdr8BGQFOOHTz1A0zzARNAu3YmRU8s8krAfB6k9RNXOVSqyCa4KUnoCXwIuy4JiFert%2BFHz8ebUaANJm7qnc2X4rtRWltsUnBCfbGAiIgGrwXUi%2BX58wHpBwLEmYZH6tiJL%2BeBE%2F7FXNVMHcgTaiSVHPl%2FGeGjZUzarbU4XhyOz5qECSE63IykeMvKwrh6DKKg4CppUv7jSSzZc0AicIloip8jGUsIrzpqz9PvMHePv1pVTmzXTyefEffaW87zmwBVhpbUQ4Tfm0cDJ7ki10xOZWEV7ToOumEaxu7K%2B1N2JiUUKBoor5BqwWqrFgS1oaE4IGFtsnpwO63fcw2ZTmvgY6pgHSP4K%2BXkcXUuSd2XamAFFhhFcdylynS%2FtORYLRuV3N%2FnGJDGIox8KLaIXhZ7MppRutByRgEeS1aiCrOuWcI9s289xNHthUGNey2oTssltSBdTll8X8ghSL7dKXi8CDuCX54H%2Fiy1%2FcxzIVJbxFo4%2B4K6UIZZU3xL4bFEjBafkKdiiwW1cAYq6YaOUpCFf1SYOFGejHMeEqxLyeqGxTMGADm4zL68dX&X-Amz-Signature=f820faccb9dc8a8c8d22136ec0e23bcb0ea4153ed975f07362d51ed04ccbf061&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZAHZKBY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICQ16qc0OZbQRbjaKvnt%2B18FJ3DGZbUetvoisPknkUfZAiAwci1wG6EoUjK63AJq5iE9Sms86IpyOdUuMlVgkL9CKir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM5Bz9rPJ3QTo6pP26KtwDA%2FFrOmX0RnAv%2FfVkxaTGUDTKq471Uie94wEZLr2qfJDHNzR1Sz1ToxQiioz7wN0j4xO5I6U5ob7P9Fd63Hj4zNhTgLn4G%2BPuDceY%2BWGrEy4UO21maP37z%2Fx0K9jwLcHQ%2BkNsjb11PbQHmWyMDlI76pZVAWR5lhjnvmz3GwcGS6VyHcL%2FoRYq9NbOXyzhl1Pt%2Fvb1AodjblJyrgg%2Bfkcry8M1gk6YK8o%2BgGMxDPC3CfO44mk0Ayglb2B3CDLKzJucSGSVMxUmnpkMcyG2i3m%2FespG%2BUIIRplqc54KNoY0IoLUSdr8BGQFOOHTz1A0zzARNAu3YmRU8s8krAfB6k9RNXOVSqyCa4KUnoCXwIuy4JiFert%2BFHz8ebUaANJm7qnc2X4rtRWltsUnBCfbGAiIgGrwXUi%2BX58wHpBwLEmYZH6tiJL%2BeBE%2F7FXNVMHcgTaiSVHPl%2FGeGjZUzarbU4XhyOz5qECSE63IykeMvKwrh6DKKg4CppUv7jSSzZc0AicIloip8jGUsIrzpqz9PvMHePv1pVTmzXTyefEffaW87zmwBVhpbUQ4Tfm0cDJ7ki10xOZWEV7ToOumEaxu7K%2B1N2JiUUKBoor5BqwWqrFgS1oaE4IGFtsnpwO63fcw2ZTmvgY6pgHSP4K%2BXkcXUuSd2XamAFFhhFcdylynS%2FtORYLRuV3N%2FnGJDGIox8KLaIXhZ7MppRutByRgEeS1aiCrOuWcI9s289xNHthUGNey2oTssltSBdTll8X8ghSL7dKXi8CDuCX54H%2Fiy1%2FcxzIVJbxFo4%2B4K6UIZZU3xL4bFEjBafkKdiiwW1cAYq6YaOUpCFf1SYOFGejHMeEqxLyeqGxTMGADm4zL68dX&X-Amz-Signature=1928fa10ca7953c247688c14c269ac5bcdece23cd51255454aefdc7d4570c6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
