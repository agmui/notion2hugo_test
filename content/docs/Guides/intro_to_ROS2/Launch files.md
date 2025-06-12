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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPOC444%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFFsniNBCoYyyQ60kbFGmThZoOO7gtQbAsXy0K3nFf1hAiALFXITgjZ874u9zznecAA8BgFyx%2BBqLAmjZnI1SJEqNSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeKlm5JTV5AIHR9wKtwDQ5W9MeJOAETKsripSkNf8dATUoPHeNrOPj6UpnRCFAx2BnXTlvVTwSCyPnwAtcXREMmrLEJVljWHv74loBJw%2Buve2HSz0rGhjJvKwlKZrtgpx2PzjjOpRDjOboAmLvWe3a5ZhSqqaGhO6TMa8MvJvF6XbFgzYI9maYYufPDZ4POvKkhv2v3Zl1WLVqCYk7VWhy3pxw5f8XdjKcQyU%2BjcyFHvjtAHSyNh4QG%2FrpgTfoRFxZS%2BIoinkkOJQweBWHG2O9M9H8faVGxaG1XKC5RTciUS39cjv3QmOeeObtX%2BUxSi7Zu0DGf%2FAA277ZMyZaLWddkP7YqtJkbwJ1z0HuegE10O6%2F7zd6hOYufLYLvBsaQCQ3s7oAI6L5xH03zXMr3yNm5%2B4FdN%2FibDwwjJ8yqBzQE4UfHJd1jv3fEGqTsn1VT1mbrPXjUmHRtZUS26cK7Ibes1PJZLf2Ot267By6F5z9EUeYRTBdeX5%2BC5IpXgsW2CeRIvtwKDKbCvW1QdWXvcHho16OLumCUmkRe7QI9tYrv6PHEsbLtH7x%2FKe757CtjlVIeAB70cPJ9ceKqdvjm84mcbOTjUfF7DixM6f1GrZZhrd%2BhPfSn06l29sMtKCmy%2BTjYtErftpnOcXqcw07itwgY6pgGgD90oHPpRJSutLf67GnbT5ybRTdOzra41%2BoRWRDEXpMxb8BHiiXCLpNqLBnP0mLNUL8Fn%2B3yC69W%2FO6zyMpayZKAZii425b74SOuJhuXqJlbPKAmKgzfjdf2W73VhLK%2Frd%2FrJDdLxpHKtLVp%2FFl5VrYhQFqXVY9yAW%2FRKnWGoV0ss7aZKl0yavqncanV3UT47%2F5I%2BlRYt48QHOcIOIZkEDGrX7tUH&X-Amz-Signature=889ac94ea1489632c8f7d391cda9e7555e04fa5995384a281241bf5d50ab690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPOC444%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFFsniNBCoYyyQ60kbFGmThZoOO7gtQbAsXy0K3nFf1hAiALFXITgjZ874u9zznecAA8BgFyx%2BBqLAmjZnI1SJEqNSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeKlm5JTV5AIHR9wKtwDQ5W9MeJOAETKsripSkNf8dATUoPHeNrOPj6UpnRCFAx2BnXTlvVTwSCyPnwAtcXREMmrLEJVljWHv74loBJw%2Buve2HSz0rGhjJvKwlKZrtgpx2PzjjOpRDjOboAmLvWe3a5ZhSqqaGhO6TMa8MvJvF6XbFgzYI9maYYufPDZ4POvKkhv2v3Zl1WLVqCYk7VWhy3pxw5f8XdjKcQyU%2BjcyFHvjtAHSyNh4QG%2FrpgTfoRFxZS%2BIoinkkOJQweBWHG2O9M9H8faVGxaG1XKC5RTciUS39cjv3QmOeeObtX%2BUxSi7Zu0DGf%2FAA277ZMyZaLWddkP7YqtJkbwJ1z0HuegE10O6%2F7zd6hOYufLYLvBsaQCQ3s7oAI6L5xH03zXMr3yNm5%2B4FdN%2FibDwwjJ8yqBzQE4UfHJd1jv3fEGqTsn1VT1mbrPXjUmHRtZUS26cK7Ibes1PJZLf2Ot267By6F5z9EUeYRTBdeX5%2BC5IpXgsW2CeRIvtwKDKbCvW1QdWXvcHho16OLumCUmkRe7QI9tYrv6PHEsbLtH7x%2FKe757CtjlVIeAB70cPJ9ceKqdvjm84mcbOTjUfF7DixM6f1GrZZhrd%2BhPfSn06l29sMtKCmy%2BTjYtErftpnOcXqcw07itwgY6pgGgD90oHPpRJSutLf67GnbT5ybRTdOzra41%2BoRWRDEXpMxb8BHiiXCLpNqLBnP0mLNUL8Fn%2B3yC69W%2FO6zyMpayZKAZii425b74SOuJhuXqJlbPKAmKgzfjdf2W73VhLK%2Frd%2FrJDdLxpHKtLVp%2FFl5VrYhQFqXVY9yAW%2FRKnWGoV0ss7aZKl0yavqncanV3UT47%2F5I%2BlRYt48QHOcIOIZkEDGrX7tUH&X-Amz-Signature=bbc51e21e0aa8552b20d45c5f2f0a0e2df81157dc3354c443220bd7c6848e1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPOC444%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFFsniNBCoYyyQ60kbFGmThZoOO7gtQbAsXy0K3nFf1hAiALFXITgjZ874u9zznecAA8BgFyx%2BBqLAmjZnI1SJEqNSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeKlm5JTV5AIHR9wKtwDQ5W9MeJOAETKsripSkNf8dATUoPHeNrOPj6UpnRCFAx2BnXTlvVTwSCyPnwAtcXREMmrLEJVljWHv74loBJw%2Buve2HSz0rGhjJvKwlKZrtgpx2PzjjOpRDjOboAmLvWe3a5ZhSqqaGhO6TMa8MvJvF6XbFgzYI9maYYufPDZ4POvKkhv2v3Zl1WLVqCYk7VWhy3pxw5f8XdjKcQyU%2BjcyFHvjtAHSyNh4QG%2FrpgTfoRFxZS%2BIoinkkOJQweBWHG2O9M9H8faVGxaG1XKC5RTciUS39cjv3QmOeeObtX%2BUxSi7Zu0DGf%2FAA277ZMyZaLWddkP7YqtJkbwJ1z0HuegE10O6%2F7zd6hOYufLYLvBsaQCQ3s7oAI6L5xH03zXMr3yNm5%2B4FdN%2FibDwwjJ8yqBzQE4UfHJd1jv3fEGqTsn1VT1mbrPXjUmHRtZUS26cK7Ibes1PJZLf2Ot267By6F5z9EUeYRTBdeX5%2BC5IpXgsW2CeRIvtwKDKbCvW1QdWXvcHho16OLumCUmkRe7QI9tYrv6PHEsbLtH7x%2FKe757CtjlVIeAB70cPJ9ceKqdvjm84mcbOTjUfF7DixM6f1GrZZhrd%2BhPfSn06l29sMtKCmy%2BTjYtErftpnOcXqcw07itwgY6pgGgD90oHPpRJSutLf67GnbT5ybRTdOzra41%2BoRWRDEXpMxb8BHiiXCLpNqLBnP0mLNUL8Fn%2B3yC69W%2FO6zyMpayZKAZii425b74SOuJhuXqJlbPKAmKgzfjdf2W73VhLK%2Frd%2FrJDdLxpHKtLVp%2FFl5VrYhQFqXVY9yAW%2FRKnWGoV0ss7aZKl0yavqncanV3UT47%2F5I%2BlRYt48QHOcIOIZkEDGrX7tUH&X-Amz-Signature=0b9b68bd1c4d08e9b59cf6278e8913d00f45d9b143865c8159d53558e9427d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
