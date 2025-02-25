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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZKMPFP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC8WDOzj61Ovu%2FAWIWZQPrDs4ey0WUQrfafBgFvDCrQmQIhAOO%2Fq4FI%2B0BUCcplgAOWXVR0%2BYS%2BRkiCxLzjh7GV3LtVKv8DCEsQABoMNjM3NDIzMTgzODA1IgzA5ihFBTiDAckyGJoq3ANEGQOleR9syh8Or5Bfw120vnk8lK3NCCoMm%2BWJEDzqjGfaBVLJqLj1JHeiOJenFI0zgctwenOSsDeHd0xTYyqr5ywm01oYYrqKJoSer0EMw%2F%2FvUkDz8x9fMdLUmKIeLl2Y86BpYsALuJJyLaVyaVlDI1Z3PuYxxfkyRSJRB%2BMwN%2F84tCiRwvoaxB00vJ0OXI%2BDArECSFe4U9%2FtVXh9Uet6bD0nVqNSC5%2BwmAxlmf0Y5S0iyXPz0880b51xQVA7xnDIgxpuj3Jw1Ks9JeYYP%2FNJs6thb5ysNgNaw%2B9TRGLuRvEGd%2FNI1HwuHivhSCkMp3r%2BkaYkb8Rcu6H3hwf6O0XrGsCOR7hsJSw3lgOn2O4gEpM1KYB2jxhFoxlSu%2FeYPk0oewg5qn%2BS3%2FshyNp6edPzYnKPvlUzfreMIvxHaWiwltIGcMKq8xcvhavBdHK2gfZXYqp10f62Z5ddM9m2yPfESTOoqtZO%2FcfSMTOn5IfKIrTOOP1otCzYZ6HT17JmIvXjj6j3dX6BMWWJxQ%2B4%2Fqvbeu2d%2BFFGkc%2B142lWazopnz1ardas8FVHqoMDuRjmEcypuub%2BrMWcMdQ3ML7g8ICoLnkh4DgHbVzR%2FO%2FkX9vl%2FDiV4BJmOfBgUh%2BKTTCXjfi9BjqkAbpdN16hmK6Wmp0tUz63O70S15UbPw7pCdh07kTv9MQhZcsYY%2FmS6Kx4VV7EQ0qWgdGfRWVjl9hnR6DbECaBV%2FAgRTcMpR5AvCGHI8ZBlq4DB97JIGQSshu9dJ3sEnF8lPqBQbnJruXOF0DK6PxK7x9vih30i1ekW1C%2Bg4NsSK6UgmJYofeNuqwhAtUgeGnZ%2FHwcyqSnZWWjXPfDDROxXqsCTToX&X-Amz-Signature=178ac3c2bac065652672770287514cba5dc342b76b4d08a41ecdf56ba39efe79&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZKMPFP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC8WDOzj61Ovu%2FAWIWZQPrDs4ey0WUQrfafBgFvDCrQmQIhAOO%2Fq4FI%2B0BUCcplgAOWXVR0%2BYS%2BRkiCxLzjh7GV3LtVKv8DCEsQABoMNjM3NDIzMTgzODA1IgzA5ihFBTiDAckyGJoq3ANEGQOleR9syh8Or5Bfw120vnk8lK3NCCoMm%2BWJEDzqjGfaBVLJqLj1JHeiOJenFI0zgctwenOSsDeHd0xTYyqr5ywm01oYYrqKJoSer0EMw%2F%2FvUkDz8x9fMdLUmKIeLl2Y86BpYsALuJJyLaVyaVlDI1Z3PuYxxfkyRSJRB%2BMwN%2F84tCiRwvoaxB00vJ0OXI%2BDArECSFe4U9%2FtVXh9Uet6bD0nVqNSC5%2BwmAxlmf0Y5S0iyXPz0880b51xQVA7xnDIgxpuj3Jw1Ks9JeYYP%2FNJs6thb5ysNgNaw%2B9TRGLuRvEGd%2FNI1HwuHivhSCkMp3r%2BkaYkb8Rcu6H3hwf6O0XrGsCOR7hsJSw3lgOn2O4gEpM1KYB2jxhFoxlSu%2FeYPk0oewg5qn%2BS3%2FshyNp6edPzYnKPvlUzfreMIvxHaWiwltIGcMKq8xcvhavBdHK2gfZXYqp10f62Z5ddM9m2yPfESTOoqtZO%2FcfSMTOn5IfKIrTOOP1otCzYZ6HT17JmIvXjj6j3dX6BMWWJxQ%2B4%2Fqvbeu2d%2BFFGkc%2B142lWazopnz1ardas8FVHqoMDuRjmEcypuub%2BrMWcMdQ3ML7g8ICoLnkh4DgHbVzR%2FO%2FkX9vl%2FDiV4BJmOfBgUh%2BKTTCXjfi9BjqkAbpdN16hmK6Wmp0tUz63O70S15UbPw7pCdh07kTv9MQhZcsYY%2FmS6Kx4VV7EQ0qWgdGfRWVjl9hnR6DbECaBV%2FAgRTcMpR5AvCGHI8ZBlq4DB97JIGQSshu9dJ3sEnF8lPqBQbnJruXOF0DK6PxK7x9vih30i1ekW1C%2Bg4NsSK6UgmJYofeNuqwhAtUgeGnZ%2FHwcyqSnZWWjXPfDDROxXqsCTToX&X-Amz-Signature=e3cb49cbfae1952b62fa0dd3c06956007802daab811c8ac8845da1420ffa2cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZKMPFP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC8WDOzj61Ovu%2FAWIWZQPrDs4ey0WUQrfafBgFvDCrQmQIhAOO%2Fq4FI%2B0BUCcplgAOWXVR0%2BYS%2BRkiCxLzjh7GV3LtVKv8DCEsQABoMNjM3NDIzMTgzODA1IgzA5ihFBTiDAckyGJoq3ANEGQOleR9syh8Or5Bfw120vnk8lK3NCCoMm%2BWJEDzqjGfaBVLJqLj1JHeiOJenFI0zgctwenOSsDeHd0xTYyqr5ywm01oYYrqKJoSer0EMw%2F%2FvUkDz8x9fMdLUmKIeLl2Y86BpYsALuJJyLaVyaVlDI1Z3PuYxxfkyRSJRB%2BMwN%2F84tCiRwvoaxB00vJ0OXI%2BDArECSFe4U9%2FtVXh9Uet6bD0nVqNSC5%2BwmAxlmf0Y5S0iyXPz0880b51xQVA7xnDIgxpuj3Jw1Ks9JeYYP%2FNJs6thb5ysNgNaw%2B9TRGLuRvEGd%2FNI1HwuHivhSCkMp3r%2BkaYkb8Rcu6H3hwf6O0XrGsCOR7hsJSw3lgOn2O4gEpM1KYB2jxhFoxlSu%2FeYPk0oewg5qn%2BS3%2FshyNp6edPzYnKPvlUzfreMIvxHaWiwltIGcMKq8xcvhavBdHK2gfZXYqp10f62Z5ddM9m2yPfESTOoqtZO%2FcfSMTOn5IfKIrTOOP1otCzYZ6HT17JmIvXjj6j3dX6BMWWJxQ%2B4%2Fqvbeu2d%2BFFGkc%2B142lWazopnz1ardas8FVHqoMDuRjmEcypuub%2BrMWcMdQ3ML7g8ICoLnkh4DgHbVzR%2FO%2FkX9vl%2FDiV4BJmOfBgUh%2BKTTCXjfi9BjqkAbpdN16hmK6Wmp0tUz63O70S15UbPw7pCdh07kTv9MQhZcsYY%2FmS6Kx4VV7EQ0qWgdGfRWVjl9hnR6DbECaBV%2FAgRTcMpR5AvCGHI8ZBlq4DB97JIGQSshu9dJ3sEnF8lPqBQbnJruXOF0DK6PxK7x9vih30i1ekW1C%2Bg4NsSK6UgmJYofeNuqwhAtUgeGnZ%2FHwcyqSnZWWjXPfDDROxXqsCTToX&X-Amz-Signature=279530f65bad0caaa028fe3f28ba98bbbd0f3e8244c60c68ecc9d06a34580e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
