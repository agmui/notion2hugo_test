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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKBEBHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqwMeCIhuTsONnsuhj2aRu%2FZRM4V0x2NYbCFaIe0L%2BQIgKR27QMFsbcyFVzjdWSk%2Bs9IaByQMHIX%2BTGSbS49GanEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7yi31qYHmQogBQrSrcA8%2BuDD5%2BSRnMJn5snoYV9fgX4gJGhHznCbOidTfR0uQ56fqVnKAojK4Q0E5J9VS1HJloEjPUdjsosf3b3HtK5d0PHHrX%2FqAZramfIOIffeYPpON2C0T92vJZa%2FeCsXhdmMITGzf7JDv%2FCY83sqXII5%2FZbNeIzRN5LHr0JXiCpy%2FRHwDvzsE1O5Vgu6Og1thWE3dA%2B19QuJpbtlQSecjxqdVJgsWajtIAME0kcUNtzl%2FWuuzAw936B20wwK7MupzVhy03R1jt4CWGnImgh%2BeFa6XZUE7Gs3rpWzus7G5TJ713gzDBW2gEhb6FAu2ZWW%2BSDA%2Bv2JsYPYYSJu3bTOFKmO1CtWorNBiZO2cEWjBz%2Fg3tFmBe5gGj393sd0HYFdL33B4gvOOsBhvhz6glB%2FgpmioAYFOJla%2FRO%2Futnr0Irr%2B2FLU11WG1j3TVc35owJO82apKyu2is4gpXK0o%2BKEaNOFJ4NM8HbBQGnrS7%2BmQamiHIltw%2FIv6MvOF9Q3HcjimVGM3Qv4kvSFRUhWnxRYdeMKVzqfOJAgR7PxOtZazDNQM3cos0D6G7dg5PEn5WNOFc5daRCUnX3%2B5G%2F1rLUeVt8Ta7RqtWtm0eKWLAyLzQf92ET8%2Fqq8XYZ6c4y71MOGfnsIGOqUBaxQDSGiO6dQlUMRmd4%2BUpSYCl67niH5UmIlIYSw4xTmjwolhIUWAoGOG%2FM4WTB6fGbnBHXMu%2Fl5yzHiI9KlrE5Fc5EqL6bgmXhz%2FuvCZRQqzzYQBRaoAg6yyfu9gVevoJ7p5ARkqd1wgZGDTqrgbGAXNAP79jXZZW6QYMttQhcdWQnYOXFaNmiY83QOeQhMkqRq41cyzk%2Bc4%2FBsLp65oBKnLw0Ew&X-Amz-Signature=fe163ab02ef445b75eed71fb37262fcaf3cd5679f76bc3a1e20689eb6b597848&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKBEBHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqwMeCIhuTsONnsuhj2aRu%2FZRM4V0x2NYbCFaIe0L%2BQIgKR27QMFsbcyFVzjdWSk%2Bs9IaByQMHIX%2BTGSbS49GanEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7yi31qYHmQogBQrSrcA8%2BuDD5%2BSRnMJn5snoYV9fgX4gJGhHznCbOidTfR0uQ56fqVnKAojK4Q0E5J9VS1HJloEjPUdjsosf3b3HtK5d0PHHrX%2FqAZramfIOIffeYPpON2C0T92vJZa%2FeCsXhdmMITGzf7JDv%2FCY83sqXII5%2FZbNeIzRN5LHr0JXiCpy%2FRHwDvzsE1O5Vgu6Og1thWE3dA%2B19QuJpbtlQSecjxqdVJgsWajtIAME0kcUNtzl%2FWuuzAw936B20wwK7MupzVhy03R1jt4CWGnImgh%2BeFa6XZUE7Gs3rpWzus7G5TJ713gzDBW2gEhb6FAu2ZWW%2BSDA%2Bv2JsYPYYSJu3bTOFKmO1CtWorNBiZO2cEWjBz%2Fg3tFmBe5gGj393sd0HYFdL33B4gvOOsBhvhz6glB%2FgpmioAYFOJla%2FRO%2Futnr0Irr%2B2FLU11WG1j3TVc35owJO82apKyu2is4gpXK0o%2BKEaNOFJ4NM8HbBQGnrS7%2BmQamiHIltw%2FIv6MvOF9Q3HcjimVGM3Qv4kvSFRUhWnxRYdeMKVzqfOJAgR7PxOtZazDNQM3cos0D6G7dg5PEn5WNOFc5daRCUnX3%2B5G%2F1rLUeVt8Ta7RqtWtm0eKWLAyLzQf92ET8%2Fqq8XYZ6c4y71MOGfnsIGOqUBaxQDSGiO6dQlUMRmd4%2BUpSYCl67niH5UmIlIYSw4xTmjwolhIUWAoGOG%2FM4WTB6fGbnBHXMu%2Fl5yzHiI9KlrE5Fc5EqL6bgmXhz%2FuvCZRQqzzYQBRaoAg6yyfu9gVevoJ7p5ARkqd1wgZGDTqrgbGAXNAP79jXZZW6QYMttQhcdWQnYOXFaNmiY83QOeQhMkqRq41cyzk%2Bc4%2FBsLp65oBKnLw0Ew&X-Amz-Signature=ac2d7c3602188cef4eba6845ea79b9a5b2dbc45f8c76408e1df450f694e20a99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKBEBHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqwMeCIhuTsONnsuhj2aRu%2FZRM4V0x2NYbCFaIe0L%2BQIgKR27QMFsbcyFVzjdWSk%2Bs9IaByQMHIX%2BTGSbS49GanEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7yi31qYHmQogBQrSrcA8%2BuDD5%2BSRnMJn5snoYV9fgX4gJGhHznCbOidTfR0uQ56fqVnKAojK4Q0E5J9VS1HJloEjPUdjsosf3b3HtK5d0PHHrX%2FqAZramfIOIffeYPpON2C0T92vJZa%2FeCsXhdmMITGzf7JDv%2FCY83sqXII5%2FZbNeIzRN5LHr0JXiCpy%2FRHwDvzsE1O5Vgu6Og1thWE3dA%2B19QuJpbtlQSecjxqdVJgsWajtIAME0kcUNtzl%2FWuuzAw936B20wwK7MupzVhy03R1jt4CWGnImgh%2BeFa6XZUE7Gs3rpWzus7G5TJ713gzDBW2gEhb6FAu2ZWW%2BSDA%2Bv2JsYPYYSJu3bTOFKmO1CtWorNBiZO2cEWjBz%2Fg3tFmBe5gGj393sd0HYFdL33B4gvOOsBhvhz6glB%2FgpmioAYFOJla%2FRO%2Futnr0Irr%2B2FLU11WG1j3TVc35owJO82apKyu2is4gpXK0o%2BKEaNOFJ4NM8HbBQGnrS7%2BmQamiHIltw%2FIv6MvOF9Q3HcjimVGM3Qv4kvSFRUhWnxRYdeMKVzqfOJAgR7PxOtZazDNQM3cos0D6G7dg5PEn5WNOFc5daRCUnX3%2B5G%2F1rLUeVt8Ta7RqtWtm0eKWLAyLzQf92ET8%2Fqq8XYZ6c4y71MOGfnsIGOqUBaxQDSGiO6dQlUMRmd4%2BUpSYCl67niH5UmIlIYSw4xTmjwolhIUWAoGOG%2FM4WTB6fGbnBHXMu%2Fl5yzHiI9KlrE5Fc5EqL6bgmXhz%2FuvCZRQqzzYQBRaoAg6yyfu9gVevoJ7p5ARkqd1wgZGDTqrgbGAXNAP79jXZZW6QYMttQhcdWQnYOXFaNmiY83QOeQhMkqRq41cyzk%2Bc4%2FBsLp65oBKnLw0Ew&X-Amz-Signature=40169d71a59df384beb25ab9855aa7ccdc05f912d58b178472b8326ad8b95f45&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
