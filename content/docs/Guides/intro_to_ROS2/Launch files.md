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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2A3KLBO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDBeQRi64Soq3BtJVye1iITkUlrTF%2Bnr%2F%2B8X9YBh3fuUAiEAqv9IeSPACBIqCC7MeNkuLz7JhFBn5noTKmnFV69uf4cq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC7O8tUxmV%2FKGm7WHSrcA8Tl7pHWrN5f90ixi27%2FTJxCPZ4nS%2BIEOiTgTRc4dHTilgmePKBBf7sWZCeNxmvMACixns%2BczTQnswrEIP39f9EiHPh7gF5Qr%2BWfjw44Ewv%2FIkLqnz%2BCtm4mIxyOm4IjdA7JtLH7OXNhQuQzDjWHgWUmiQjE7i%2BERS%2FWq4oA%2BGFP7FOEcHsiLi2qUBoaTTY%2BkVT3QAIxx%2FkkaMKys88V1WXQjUR%2B1hkLiCtmxRXsKOm3oBFmrmOVzoyNOejtbQfjH4fepVVkdTcwJJhZ8O6r6tKxK5iVawjznHutvIB79zjrghP3XcuByzro3nB12gjgdDvG6yt6TfAEg3Z16vwSa%2BGVFQIVak10iJ3vSjTA3WHUh1O9oWiMDylo3vWiZC%2FcEwOePro34z5jSatFI72HHJwvTMG3A0HTqfPaLtiW9CbSWxco90Jy6lsFuANFxTfyYFWJvOZwn60F4SmNVbOybyVefjzlXDdvagW%2BuUbVWf4o%2BS0AUgT1DAunXNyMDr9qtFtESyVcICby0PgnyVqDoNGFxsJcH3SFEdQiwEBkwsx0MU%2BYf2Y4BasWiXo7%2B6w3KRG4PX53sTmkjRpSPFn53aoOuJX5jP%2F03V4ZNGSY5AL5NCPJ560xSMUULK3gMMq%2FiL0GOqUBVcJ4lHfRqk7i7cqcl%2BSbmoNoOLNKuo48%2FkyYLNp5ZPBpJyAaSLHx2%2F1WWkboFcZZT7zW6y3A%2BNCEGzqnuKvkFK7ua2hHDvoURz63z00WFd8CoYhB14R335DBAE%2BLJSFKV23ocKohzK%2Fh9b8DWI80SBphQx%2Bm0A5JStqj7TBpl8g5bo45tCxaGrCX62%2FYWG2kw5VRSJ9pXm%2FznJEMlJs4Y89gCiaH&X-Amz-Signature=67e58f298338adcf86fab825d712a6316780d23cc292e03069d48287791e6631&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2A3KLBO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDBeQRi64Soq3BtJVye1iITkUlrTF%2Bnr%2F%2B8X9YBh3fuUAiEAqv9IeSPACBIqCC7MeNkuLz7JhFBn5noTKmnFV69uf4cq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC7O8tUxmV%2FKGm7WHSrcA8Tl7pHWrN5f90ixi27%2FTJxCPZ4nS%2BIEOiTgTRc4dHTilgmePKBBf7sWZCeNxmvMACixns%2BczTQnswrEIP39f9EiHPh7gF5Qr%2BWfjw44Ewv%2FIkLqnz%2BCtm4mIxyOm4IjdA7JtLH7OXNhQuQzDjWHgWUmiQjE7i%2BERS%2FWq4oA%2BGFP7FOEcHsiLi2qUBoaTTY%2BkVT3QAIxx%2FkkaMKys88V1WXQjUR%2B1hkLiCtmxRXsKOm3oBFmrmOVzoyNOejtbQfjH4fepVVkdTcwJJhZ8O6r6tKxK5iVawjznHutvIB79zjrghP3XcuByzro3nB12gjgdDvG6yt6TfAEg3Z16vwSa%2BGVFQIVak10iJ3vSjTA3WHUh1O9oWiMDylo3vWiZC%2FcEwOePro34z5jSatFI72HHJwvTMG3A0HTqfPaLtiW9CbSWxco90Jy6lsFuANFxTfyYFWJvOZwn60F4SmNVbOybyVefjzlXDdvagW%2BuUbVWf4o%2BS0AUgT1DAunXNyMDr9qtFtESyVcICby0PgnyVqDoNGFxsJcH3SFEdQiwEBkwsx0MU%2BYf2Y4BasWiXo7%2B6w3KRG4PX53sTmkjRpSPFn53aoOuJX5jP%2F03V4ZNGSY5AL5NCPJ560xSMUULK3gMMq%2FiL0GOqUBVcJ4lHfRqk7i7cqcl%2BSbmoNoOLNKuo48%2FkyYLNp5ZPBpJyAaSLHx2%2F1WWkboFcZZT7zW6y3A%2BNCEGzqnuKvkFK7ua2hHDvoURz63z00WFd8CoYhB14R335DBAE%2BLJSFKV23ocKohzK%2Fh9b8DWI80SBphQx%2Bm0A5JStqj7TBpl8g5bo45tCxaGrCX62%2FYWG2kw5VRSJ9pXm%2FznJEMlJs4Y89gCiaH&X-Amz-Signature=0c313d09c4c02331a7550aa01ced8b898c76c3e90a2c930addc6360efd02f593&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2A3KLBO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDBeQRi64Soq3BtJVye1iITkUlrTF%2Bnr%2F%2B8X9YBh3fuUAiEAqv9IeSPACBIqCC7MeNkuLz7JhFBn5noTKmnFV69uf4cq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC7O8tUxmV%2FKGm7WHSrcA8Tl7pHWrN5f90ixi27%2FTJxCPZ4nS%2BIEOiTgTRc4dHTilgmePKBBf7sWZCeNxmvMACixns%2BczTQnswrEIP39f9EiHPh7gF5Qr%2BWfjw44Ewv%2FIkLqnz%2BCtm4mIxyOm4IjdA7JtLH7OXNhQuQzDjWHgWUmiQjE7i%2BERS%2FWq4oA%2BGFP7FOEcHsiLi2qUBoaTTY%2BkVT3QAIxx%2FkkaMKys88V1WXQjUR%2B1hkLiCtmxRXsKOm3oBFmrmOVzoyNOejtbQfjH4fepVVkdTcwJJhZ8O6r6tKxK5iVawjznHutvIB79zjrghP3XcuByzro3nB12gjgdDvG6yt6TfAEg3Z16vwSa%2BGVFQIVak10iJ3vSjTA3WHUh1O9oWiMDylo3vWiZC%2FcEwOePro34z5jSatFI72HHJwvTMG3A0HTqfPaLtiW9CbSWxco90Jy6lsFuANFxTfyYFWJvOZwn60F4SmNVbOybyVefjzlXDdvagW%2BuUbVWf4o%2BS0AUgT1DAunXNyMDr9qtFtESyVcICby0PgnyVqDoNGFxsJcH3SFEdQiwEBkwsx0MU%2BYf2Y4BasWiXo7%2B6w3KRG4PX53sTmkjRpSPFn53aoOuJX5jP%2F03V4ZNGSY5AL5NCPJ560xSMUULK3gMMq%2FiL0GOqUBVcJ4lHfRqk7i7cqcl%2BSbmoNoOLNKuo48%2FkyYLNp5ZPBpJyAaSLHx2%2F1WWkboFcZZT7zW6y3A%2BNCEGzqnuKvkFK7ua2hHDvoURz63z00WFd8CoYhB14R335DBAE%2BLJSFKV23ocKohzK%2Fh9b8DWI80SBphQx%2Bm0A5JStqj7TBpl8g5bo45tCxaGrCX62%2FYWG2kw5VRSJ9pXm%2FznJEMlJs4Y89gCiaH&X-Amz-Signature=2de806112e3080879314b2aabfeb60a888ff0c025eaf1b3468e3c4db3f2a3680&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
