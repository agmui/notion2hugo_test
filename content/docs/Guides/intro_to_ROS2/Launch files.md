---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHPZ4L2%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJZmCwFx1l0VAVyfYMWrdPOTUsn64waXalLVRXO%2BYgIhALvDkCogtMOGwGWKL4xMGhaI%2FGPJhor%2F8dZWId%2F2%2BMNWKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtsAaj06sn%2BRH5bp4q3AMjCTpvwAqDNRLDkK1TyEH41nzNm3t9Vbuajsl%2B6P7Aws7%2FnMPqps8e3viT9GvKp6S01qxsi4C99tO5x0LnFLDSPR7aby3U0g%2BFYPgsQ6DCnxz8f8aBLWMV3vEgTT2tyv65fBL38Zpem73SUjFGYbCP0UEpBOEpQdX8dEvgAtCWZIquMtb1um6kaY2PRDHzVupeJv13jKCTl6WFyk4CtVEUvzarvwLJFhTF8m7gzKk1cQZ6JkrS9VOsVSk%2BQtjPZdWLSLJddEHb2XtOJrVF%2BCFVCApylQ6SrCCFdn5Ry5lkqoG5d8np6mIB1yzR97JveenXg9ismQhOBLycZZBxAKvsKX%2BTwjMHsPaQS%2BghQaMvj00qh7gmBBEwSmaKjsx2MwsSJ3U5UIsx74guC8qwy8lOb5UNS88Ki6nU5foM%2BtMXlDLHvOWOnsnm6ddnbPNQqJ5IFRIeUE%2BTimlBQjB27y%2F5%2Fyyez0KWWXytv7YVUhxRHDwPXVxiTrylrl1LO5lIGTNKe5C497xYHArRHALZOi0DE0FeJ7xiWpyG5qso89d2kz0oF5MsHWGYonohXNyQaMB%2BCkQusrbAbGmlBe6tC8HE1rXad%2FWOYcVMNMcaNzD6vZbWgFN8BxXn1TUVWTC%2Fi6rPBjqkAQz1%2F7RrfS4C%2B2lBPAJPSEAjn8kMk7pPdY%2BkXrM1Ut%2BtBDaTvTjZLgt4ODBSTfO%2BfgkCwVpC3OhhE68OUkyaLTYKDwxzcoY4m2EXRtpR7MsKow9xZ1g0RRWIDt%2FQuCXvJplZs6OpZ4D%2FnXZxpQO0y4lEtZ6OAvEPjoy8XD%2FNlyWkGB2YQErNeGDt6XioM2rLXYYBLNITp%2BioP6LCzszHCNq84Zc4&X-Amz-Signature=0db52259fda69813a8c386e52e0be1084780c8561ca12c5a79cf0ac20429f2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHPZ4L2%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJZmCwFx1l0VAVyfYMWrdPOTUsn64waXalLVRXO%2BYgIhALvDkCogtMOGwGWKL4xMGhaI%2FGPJhor%2F8dZWId%2F2%2BMNWKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtsAaj06sn%2BRH5bp4q3AMjCTpvwAqDNRLDkK1TyEH41nzNm3t9Vbuajsl%2B6P7Aws7%2FnMPqps8e3viT9GvKp6S01qxsi4C99tO5x0LnFLDSPR7aby3U0g%2BFYPgsQ6DCnxz8f8aBLWMV3vEgTT2tyv65fBL38Zpem73SUjFGYbCP0UEpBOEpQdX8dEvgAtCWZIquMtb1um6kaY2PRDHzVupeJv13jKCTl6WFyk4CtVEUvzarvwLJFhTF8m7gzKk1cQZ6JkrS9VOsVSk%2BQtjPZdWLSLJddEHb2XtOJrVF%2BCFVCApylQ6SrCCFdn5Ry5lkqoG5d8np6mIB1yzR97JveenXg9ismQhOBLycZZBxAKvsKX%2BTwjMHsPaQS%2BghQaMvj00qh7gmBBEwSmaKjsx2MwsSJ3U5UIsx74guC8qwy8lOb5UNS88Ki6nU5foM%2BtMXlDLHvOWOnsnm6ddnbPNQqJ5IFRIeUE%2BTimlBQjB27y%2F5%2Fyyez0KWWXytv7YVUhxRHDwPXVxiTrylrl1LO5lIGTNKe5C497xYHArRHALZOi0DE0FeJ7xiWpyG5qso89d2kz0oF5MsHWGYonohXNyQaMB%2BCkQusrbAbGmlBe6tC8HE1rXad%2FWOYcVMNMcaNzD6vZbWgFN8BxXn1TUVWTC%2Fi6rPBjqkAQz1%2F7RrfS4C%2B2lBPAJPSEAjn8kMk7pPdY%2BkXrM1Ut%2BtBDaTvTjZLgt4ODBSTfO%2BfgkCwVpC3OhhE68OUkyaLTYKDwxzcoY4m2EXRtpR7MsKow9xZ1g0RRWIDt%2FQuCXvJplZs6OpZ4D%2FnXZxpQO0y4lEtZ6OAvEPjoy8XD%2FNlyWkGB2YQErNeGDt6XioM2rLXYYBLNITp%2BioP6LCzszHCNq84Zc4&X-Amz-Signature=1c3f359a227d14b4e6dcfd6a08f49bfad8bd4538549167ecec1facd4b671160d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LHPZ4L2%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJZmCwFx1l0VAVyfYMWrdPOTUsn64waXalLVRXO%2BYgIhALvDkCogtMOGwGWKL4xMGhaI%2FGPJhor%2F8dZWId%2F2%2BMNWKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtsAaj06sn%2BRH5bp4q3AMjCTpvwAqDNRLDkK1TyEH41nzNm3t9Vbuajsl%2B6P7Aws7%2FnMPqps8e3viT9GvKp6S01qxsi4C99tO5x0LnFLDSPR7aby3U0g%2BFYPgsQ6DCnxz8f8aBLWMV3vEgTT2tyv65fBL38Zpem73SUjFGYbCP0UEpBOEpQdX8dEvgAtCWZIquMtb1um6kaY2PRDHzVupeJv13jKCTl6WFyk4CtVEUvzarvwLJFhTF8m7gzKk1cQZ6JkrS9VOsVSk%2BQtjPZdWLSLJddEHb2XtOJrVF%2BCFVCApylQ6SrCCFdn5Ry5lkqoG5d8np6mIB1yzR97JveenXg9ismQhOBLycZZBxAKvsKX%2BTwjMHsPaQS%2BghQaMvj00qh7gmBBEwSmaKjsx2MwsSJ3U5UIsx74guC8qwy8lOb5UNS88Ki6nU5foM%2BtMXlDLHvOWOnsnm6ddnbPNQqJ5IFRIeUE%2BTimlBQjB27y%2F5%2Fyyez0KWWXytv7YVUhxRHDwPXVxiTrylrl1LO5lIGTNKe5C497xYHArRHALZOi0DE0FeJ7xiWpyG5qso89d2kz0oF5MsHWGYonohXNyQaMB%2BCkQusrbAbGmlBe6tC8HE1rXad%2FWOYcVMNMcaNzD6vZbWgFN8BxXn1TUVWTC%2Fi6rPBjqkAQz1%2F7RrfS4C%2B2lBPAJPSEAjn8kMk7pPdY%2BkXrM1Ut%2BtBDaTvTjZLgt4ODBSTfO%2BfgkCwVpC3OhhE68OUkyaLTYKDwxzcoY4m2EXRtpR7MsKow9xZ1g0RRWIDt%2FQuCXvJplZs6OpZ4D%2FnXZxpQO0y4lEtZ6OAvEPjoy8XD%2FNlyWkGB2YQErNeGDt6XioM2rLXYYBLNITp%2BioP6LCzszHCNq84Zc4&X-Amz-Signature=85b687149a09536555f0b7db96c11771c8ede2149b98b3c3dcd6c13b29fef2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
