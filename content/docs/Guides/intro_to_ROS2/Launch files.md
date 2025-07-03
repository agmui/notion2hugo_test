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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMX4VVL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDQ6wvlxazpa3GIm9mLeVspKHKfUJTgDpibe3AiYsPCgIhAMPOS9CbjEWZDw89KernBOAg82zdpHAdorP%2Fwst1c9NTKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj5e%2BsCVCZ6z7H%2BDIq3AMXEx5aVW6pzQdFoNEfdMyMdxEGm9jmWmljlTuXS6lxOPwqX2UwmzPCw9WNHzkscdKHtCKSCH4Hx1kelyCsK8LvNnHxeYY6mWXb1OL6tcXcE27ThCYKmnhia9PlCeETbAHc6AoIew8zm70HWuhr4uYxg5aD5LhE%2BEn1jQmDxHqAKsh1keEflU6QJsi7bBv8E6FZsVaXi9K9yrlysBGCrBvQe1DkE7Y8WLV3BO4w3qOd2Mb5z7X43SmTuGksd17V2DYsWkSrsZetzV8ohlQJylVCHSTfuWbcDUyPacOOfI3OBsKnPNc3kuFnn89LIATyFCOTxiBA0BvPHFYN1opHCavefHUCsGv8Pz87G6euyeHkncApElfJmM%2BO4dK1ELrzxtll%2BwApQDJ8nLXFD%2FJBvWDwKIvSZQaF3tI5sjqyb%2FjJa6PjC0%2BRe6xJSj0PCLpK4mig4J1BOYujhGEmQhG%2FgsGLz85D1KlJ5cV1S4kLhEnUdoeoOlSf9IEnxAuxs4MSXoWv3hASWtgpukpgR%2F2oynKqLivc%2FGLqFSvQg94xUq%2B5U2hhnfQOLC63C7X63S5DWE3yoV8JMCxPyE1e%2Bd61jb93rgU0Yty352Bb0sIiKpp%2FdHN%2BJOXZL%2FgXGQ4cEDCCsZfDBjqkAdRjD83aJqzTzm2uHrAdcRK26oMlVS7JyAGBpkF7oQukFy3GtOV7sWtJ%2BVOIE9BQ6wYrxU6V1pXphaTZz7GyG5KcVmXbbHXc8M%2BUbeZV7DtlC0XQefXl8PxQ4AsuGcyxObqytRBwAbsuPOQ%2B0GZZi%2FKcCfWpUzUVGszDwVNP7vEQZcGQpcubaxTbCvusWeGgb1AxYBnlxAdt2UGWh1R4TqnHeJ2i&X-Amz-Signature=d4a09eaca2999b373f7b4b16124671ed024cbc3adf81200c1f7bb78a04c6e638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMX4VVL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDQ6wvlxazpa3GIm9mLeVspKHKfUJTgDpibe3AiYsPCgIhAMPOS9CbjEWZDw89KernBOAg82zdpHAdorP%2Fwst1c9NTKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj5e%2BsCVCZ6z7H%2BDIq3AMXEx5aVW6pzQdFoNEfdMyMdxEGm9jmWmljlTuXS6lxOPwqX2UwmzPCw9WNHzkscdKHtCKSCH4Hx1kelyCsK8LvNnHxeYY6mWXb1OL6tcXcE27ThCYKmnhia9PlCeETbAHc6AoIew8zm70HWuhr4uYxg5aD5LhE%2BEn1jQmDxHqAKsh1keEflU6QJsi7bBv8E6FZsVaXi9K9yrlysBGCrBvQe1DkE7Y8WLV3BO4w3qOd2Mb5z7X43SmTuGksd17V2DYsWkSrsZetzV8ohlQJylVCHSTfuWbcDUyPacOOfI3OBsKnPNc3kuFnn89LIATyFCOTxiBA0BvPHFYN1opHCavefHUCsGv8Pz87G6euyeHkncApElfJmM%2BO4dK1ELrzxtll%2BwApQDJ8nLXFD%2FJBvWDwKIvSZQaF3tI5sjqyb%2FjJa6PjC0%2BRe6xJSj0PCLpK4mig4J1BOYujhGEmQhG%2FgsGLz85D1KlJ5cV1S4kLhEnUdoeoOlSf9IEnxAuxs4MSXoWv3hASWtgpukpgR%2F2oynKqLivc%2FGLqFSvQg94xUq%2B5U2hhnfQOLC63C7X63S5DWE3yoV8JMCxPyE1e%2Bd61jb93rgU0Yty352Bb0sIiKpp%2FdHN%2BJOXZL%2FgXGQ4cEDCCsZfDBjqkAdRjD83aJqzTzm2uHrAdcRK26oMlVS7JyAGBpkF7oQukFy3GtOV7sWtJ%2BVOIE9BQ6wYrxU6V1pXphaTZz7GyG5KcVmXbbHXc8M%2BUbeZV7DtlC0XQefXl8PxQ4AsuGcyxObqytRBwAbsuPOQ%2B0GZZi%2FKcCfWpUzUVGszDwVNP7vEQZcGQpcubaxTbCvusWeGgb1AxYBnlxAdt2UGWh1R4TqnHeJ2i&X-Amz-Signature=a13351a72eadfd4299661880f4a55e014a25d391c107c22b5449ef9be8f2ebde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMX4VVL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCDQ6wvlxazpa3GIm9mLeVspKHKfUJTgDpibe3AiYsPCgIhAMPOS9CbjEWZDw89KernBOAg82zdpHAdorP%2Fwst1c9NTKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj5e%2BsCVCZ6z7H%2BDIq3AMXEx5aVW6pzQdFoNEfdMyMdxEGm9jmWmljlTuXS6lxOPwqX2UwmzPCw9WNHzkscdKHtCKSCH4Hx1kelyCsK8LvNnHxeYY6mWXb1OL6tcXcE27ThCYKmnhia9PlCeETbAHc6AoIew8zm70HWuhr4uYxg5aD5LhE%2BEn1jQmDxHqAKsh1keEflU6QJsi7bBv8E6FZsVaXi9K9yrlysBGCrBvQe1DkE7Y8WLV3BO4w3qOd2Mb5z7X43SmTuGksd17V2DYsWkSrsZetzV8ohlQJylVCHSTfuWbcDUyPacOOfI3OBsKnPNc3kuFnn89LIATyFCOTxiBA0BvPHFYN1opHCavefHUCsGv8Pz87G6euyeHkncApElfJmM%2BO4dK1ELrzxtll%2BwApQDJ8nLXFD%2FJBvWDwKIvSZQaF3tI5sjqyb%2FjJa6PjC0%2BRe6xJSj0PCLpK4mig4J1BOYujhGEmQhG%2FgsGLz85D1KlJ5cV1S4kLhEnUdoeoOlSf9IEnxAuxs4MSXoWv3hASWtgpukpgR%2F2oynKqLivc%2FGLqFSvQg94xUq%2B5U2hhnfQOLC63C7X63S5DWE3yoV8JMCxPyE1e%2Bd61jb93rgU0Yty352Bb0sIiKpp%2FdHN%2BJOXZL%2FgXGQ4cEDCCsZfDBjqkAdRjD83aJqzTzm2uHrAdcRK26oMlVS7JyAGBpkF7oQukFy3GtOV7sWtJ%2BVOIE9BQ6wYrxU6V1pXphaTZz7GyG5KcVmXbbHXc8M%2BUbeZV7DtlC0XQefXl8PxQ4AsuGcyxObqytRBwAbsuPOQ%2B0GZZi%2FKcCfWpUzUVGszDwVNP7vEQZcGQpcubaxTbCvusWeGgb1AxYBnlxAdt2UGWh1R4TqnHeJ2i&X-Amz-Signature=35a9114b470591e6e0bf5159211f720fbf8dc6836615156aea6901461ecf6220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
