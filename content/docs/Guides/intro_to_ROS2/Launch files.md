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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHI5CCA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BE6fY2TfEgO86eZ99m7Q8gYaHxZC8AQiwLSwK2sCOgIhAMTFhamTV3gfh%2BEkvlCq54f9Ee0RETr23k3%2FBCArpZfpKv8DCH8QABoMNjM3NDIzMTgzODA1IgzMSB6EZ%2BgZb14sPFoq3AO7sWchDmtKhk3ae5GXHGG%2FkJGSNK5q8cHlbWQo33n4zR5iFxL2JHxTUSpMqgPHVYCyOJVXi35uu8eDHlE8PvPfGMiA1aDHxoKjnIFkqNM3g0n8qilxTy8UUVKOcKJzJ9B3QprgI2sWl5MztIVygSvwKDdeX7E3FYBYTaBak2uD7E7O%2FggnzQMUminjuCoji5TgPIQiLDKllwuY6NJsblgSzeVjCf5%2Fm%2FRjy0KT%2BSgVmpPrx05HawOBBwfL6%2F%2FA7MZHgyJPdk2psUhUQTXAkUFjykfe6IoRFV0Ch9kml5EbhWmKrqeTsp124Q4m7df%2FkdQ0M6K5A9uZUMqTheLGFygi3Rh70Qa3ENSuD7bEKUrVcHx%2FS8CUPgovHm1ShmpP9ZUvdMYJZ8lyOOhNzKC6qznwgUlR1uxm73jQQO%2F2CZymiJMdEQOtQxU1qP6tDPoIioiIcW8IX3gYSlMWreAAPNXXJ5jqh00B7mjogTFqTufqLrLSfyIP0VTPfM4LWlU9nGkkoWlT2W%2BDV4mi%2FQ22xF1%2B9rdmN0HrEek7TE996Z3j7I%2Fge%2BZvgc9IcL6eJC5PeP7AA3rzLfLk0zg33hlxpIU0AYXXBNefp5BdzKVksNfXnIB7Z3fMYv6nheziUDC3yfTABjqkAfQL5ueQTD3xek5K6oS46JDtFnTYwT3vZBQEc6ueOq66nWRzXni24AHFNn23Tadd5xYu5qHrRm6R%2By7xRb0RQuOzRLx9x4l2G5t9lfccHG5EXHT6tzzBONPDyXrp5iZL0TwkKlGDc2uDuq%2F9TA1GT1l%2Bfv%2F8BdLSmbptG%2FbzSEwQd%2Fgz4ZFDGSYxhNepfYZpeYrcvPNV%2FpWZrbwlFOOk1oYhtJQK&X-Amz-Signature=c93df6088b04a8cc629fdb3f19f57cbe52eed5a5fd04ee30766fd88775d4e1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHI5CCA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BE6fY2TfEgO86eZ99m7Q8gYaHxZC8AQiwLSwK2sCOgIhAMTFhamTV3gfh%2BEkvlCq54f9Ee0RETr23k3%2FBCArpZfpKv8DCH8QABoMNjM3NDIzMTgzODA1IgzMSB6EZ%2BgZb14sPFoq3AO7sWchDmtKhk3ae5GXHGG%2FkJGSNK5q8cHlbWQo33n4zR5iFxL2JHxTUSpMqgPHVYCyOJVXi35uu8eDHlE8PvPfGMiA1aDHxoKjnIFkqNM3g0n8qilxTy8UUVKOcKJzJ9B3QprgI2sWl5MztIVygSvwKDdeX7E3FYBYTaBak2uD7E7O%2FggnzQMUminjuCoji5TgPIQiLDKllwuY6NJsblgSzeVjCf5%2Fm%2FRjy0KT%2BSgVmpPrx05HawOBBwfL6%2F%2FA7MZHgyJPdk2psUhUQTXAkUFjykfe6IoRFV0Ch9kml5EbhWmKrqeTsp124Q4m7df%2FkdQ0M6K5A9uZUMqTheLGFygi3Rh70Qa3ENSuD7bEKUrVcHx%2FS8CUPgovHm1ShmpP9ZUvdMYJZ8lyOOhNzKC6qznwgUlR1uxm73jQQO%2F2CZymiJMdEQOtQxU1qP6tDPoIioiIcW8IX3gYSlMWreAAPNXXJ5jqh00B7mjogTFqTufqLrLSfyIP0VTPfM4LWlU9nGkkoWlT2W%2BDV4mi%2FQ22xF1%2B9rdmN0HrEek7TE996Z3j7I%2Fge%2BZvgc9IcL6eJC5PeP7AA3rzLfLk0zg33hlxpIU0AYXXBNefp5BdzKVksNfXnIB7Z3fMYv6nheziUDC3yfTABjqkAfQL5ueQTD3xek5K6oS46JDtFnTYwT3vZBQEc6ueOq66nWRzXni24AHFNn23Tadd5xYu5qHrRm6R%2By7xRb0RQuOzRLx9x4l2G5t9lfccHG5EXHT6tzzBONPDyXrp5iZL0TwkKlGDc2uDuq%2F9TA1GT1l%2Bfv%2F8BdLSmbptG%2FbzSEwQd%2Fgz4ZFDGSYxhNepfYZpeYrcvPNV%2FpWZrbwlFOOk1oYhtJQK&X-Amz-Signature=77e9ef32bc85d2ab72ef59a75eb2cbd959325eef48cb50e1e5b011cb8df4c2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHI5CCA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BE6fY2TfEgO86eZ99m7Q8gYaHxZC8AQiwLSwK2sCOgIhAMTFhamTV3gfh%2BEkvlCq54f9Ee0RETr23k3%2FBCArpZfpKv8DCH8QABoMNjM3NDIzMTgzODA1IgzMSB6EZ%2BgZb14sPFoq3AO7sWchDmtKhk3ae5GXHGG%2FkJGSNK5q8cHlbWQo33n4zR5iFxL2JHxTUSpMqgPHVYCyOJVXi35uu8eDHlE8PvPfGMiA1aDHxoKjnIFkqNM3g0n8qilxTy8UUVKOcKJzJ9B3QprgI2sWl5MztIVygSvwKDdeX7E3FYBYTaBak2uD7E7O%2FggnzQMUminjuCoji5TgPIQiLDKllwuY6NJsblgSzeVjCf5%2Fm%2FRjy0KT%2BSgVmpPrx05HawOBBwfL6%2F%2FA7MZHgyJPdk2psUhUQTXAkUFjykfe6IoRFV0Ch9kml5EbhWmKrqeTsp124Q4m7df%2FkdQ0M6K5A9uZUMqTheLGFygi3Rh70Qa3ENSuD7bEKUrVcHx%2FS8CUPgovHm1ShmpP9ZUvdMYJZ8lyOOhNzKC6qznwgUlR1uxm73jQQO%2F2CZymiJMdEQOtQxU1qP6tDPoIioiIcW8IX3gYSlMWreAAPNXXJ5jqh00B7mjogTFqTufqLrLSfyIP0VTPfM4LWlU9nGkkoWlT2W%2BDV4mi%2FQ22xF1%2B9rdmN0HrEek7TE996Z3j7I%2Fge%2BZvgc9IcL6eJC5PeP7AA3rzLfLk0zg33hlxpIU0AYXXBNefp5BdzKVksNfXnIB7Z3fMYv6nheziUDC3yfTABjqkAfQL5ueQTD3xek5K6oS46JDtFnTYwT3vZBQEc6ueOq66nWRzXni24AHFNn23Tadd5xYu5qHrRm6R%2By7xRb0RQuOzRLx9x4l2G5t9lfccHG5EXHT6tzzBONPDyXrp5iZL0TwkKlGDc2uDuq%2F9TA1GT1l%2Bfv%2F8BdLSmbptG%2FbzSEwQd%2Fgz4ZFDGSYxhNepfYZpeYrcvPNV%2FpWZrbwlFOOk1oYhtJQK&X-Amz-Signature=d1ac48272001629f363c8f31919160f166e00b0cb64870aaed3ae29afefda48c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
