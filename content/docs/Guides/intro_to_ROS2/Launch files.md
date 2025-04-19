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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V544TUGP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSWH687W25%2FmVA9Ai99UvudKJkXwP895QMb4tsTqKb6gIhAK%2B7BIuEZJ%2F8uoydAVnVM7y3RYrkSFYTbVqoeZ%2FnWyIFKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwcyCfihxnW%2BbQwn4q3AOfdpvBCSFHUvIymO2G3pzQ4M%2FlZRlgpNy5Ysj9VrEMvIdKoHW%2B4DsoCDEjnTDIOqExBFPwFsYRtevsDhIfOEZ8ToPiLEpU5qXlPPX8QN7UoNH%2BHfEoUO9yd5dIDGM69PvXDLZEEMiTr1S4zQIcOJZXO1EiZY64a8pejmnQg%2FZV1mfacWbWWVI6CMvBrDLufdoFZdxMyoitfKC5jbOH9R4G2Y%2FTO3Oa7QDk3QeuGItsmo2HKSy4KIfK4m1CLFRnAyhoN5ltWRtDBqrF%2BguXNcg1h6BwSrFr3IrL6srxNf%2BnjuJS4fqbyuio1A7F5yMI0p4Io45KHckcLl5kg7OHDjLpIBlVZIvHydaVjbXwedVTMpH%2FfZYS3g93A3Bc6YHCGsdn4JZWpS5%2FTyGEEoGZoBYCHD78dH7hdmhzFMZN0kECdHC516svJEYBQmEGcL9rOJGbEoTYV7I7GyTfiH2DZv2zd8%2Bw3SsAK4STJqspY7Q7C6DKKv3yJ3PWVnGz1nHfpL9BR95rqPp4BW5fvIQnOwh1nr7YiO4EoeEYDhP%2Bj4wmNT%2BniPheoMpBGA7ubqxp8x9TzmEYemMTtvwd8ohQvzK7Px62dnnL5u6etNWHZsl2L6j7dV1YuGR83TvpczDhhpDABjqkAb2ek3O1JTMrMVI1aEoZpLh4ktNM51WBj14la4EnXeFysA%2BkMU%2FSzgmhanETiLfbkjJOqY0sDlqQSCNk05BLPXArm3HJSqaByTP41HjHMZlqUmJEjO1qFzz2NRqNuI3vaGzrLaq1rt20fKY0kNDjXxhabuTNYZsPyVBvB7bAWDOssuWBYXSvtkDhq6MdEOtEWqbWzA1QFIextD46X8UOua9acqZM&X-Amz-Signature=46512fe0fffa70ae984e263267cdbd8cdbd17c1a58414d80797403273e7c5c55&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V544TUGP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSWH687W25%2FmVA9Ai99UvudKJkXwP895QMb4tsTqKb6gIhAK%2B7BIuEZJ%2F8uoydAVnVM7y3RYrkSFYTbVqoeZ%2FnWyIFKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwcyCfihxnW%2BbQwn4q3AOfdpvBCSFHUvIymO2G3pzQ4M%2FlZRlgpNy5Ysj9VrEMvIdKoHW%2B4DsoCDEjnTDIOqExBFPwFsYRtevsDhIfOEZ8ToPiLEpU5qXlPPX8QN7UoNH%2BHfEoUO9yd5dIDGM69PvXDLZEEMiTr1S4zQIcOJZXO1EiZY64a8pejmnQg%2FZV1mfacWbWWVI6CMvBrDLufdoFZdxMyoitfKC5jbOH9R4G2Y%2FTO3Oa7QDk3QeuGItsmo2HKSy4KIfK4m1CLFRnAyhoN5ltWRtDBqrF%2BguXNcg1h6BwSrFr3IrL6srxNf%2BnjuJS4fqbyuio1A7F5yMI0p4Io45KHckcLl5kg7OHDjLpIBlVZIvHydaVjbXwedVTMpH%2FfZYS3g93A3Bc6YHCGsdn4JZWpS5%2FTyGEEoGZoBYCHD78dH7hdmhzFMZN0kECdHC516svJEYBQmEGcL9rOJGbEoTYV7I7GyTfiH2DZv2zd8%2Bw3SsAK4STJqspY7Q7C6DKKv3yJ3PWVnGz1nHfpL9BR95rqPp4BW5fvIQnOwh1nr7YiO4EoeEYDhP%2Bj4wmNT%2BniPheoMpBGA7ubqxp8x9TzmEYemMTtvwd8ohQvzK7Px62dnnL5u6etNWHZsl2L6j7dV1YuGR83TvpczDhhpDABjqkAb2ek3O1JTMrMVI1aEoZpLh4ktNM51WBj14la4EnXeFysA%2BkMU%2FSzgmhanETiLfbkjJOqY0sDlqQSCNk05BLPXArm3HJSqaByTP41HjHMZlqUmJEjO1qFzz2NRqNuI3vaGzrLaq1rt20fKY0kNDjXxhabuTNYZsPyVBvB7bAWDOssuWBYXSvtkDhq6MdEOtEWqbWzA1QFIextD46X8UOua9acqZM&X-Amz-Signature=685af3a4258e7bcfcf8e655e455a58794b424be5ef01a0575936efa37e8ad95e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V544TUGP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSWH687W25%2FmVA9Ai99UvudKJkXwP895QMb4tsTqKb6gIhAK%2B7BIuEZJ%2F8uoydAVnVM7y3RYrkSFYTbVqoeZ%2FnWyIFKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwcyCfihxnW%2BbQwn4q3AOfdpvBCSFHUvIymO2G3pzQ4M%2FlZRlgpNy5Ysj9VrEMvIdKoHW%2B4DsoCDEjnTDIOqExBFPwFsYRtevsDhIfOEZ8ToPiLEpU5qXlPPX8QN7UoNH%2BHfEoUO9yd5dIDGM69PvXDLZEEMiTr1S4zQIcOJZXO1EiZY64a8pejmnQg%2FZV1mfacWbWWVI6CMvBrDLufdoFZdxMyoitfKC5jbOH9R4G2Y%2FTO3Oa7QDk3QeuGItsmo2HKSy4KIfK4m1CLFRnAyhoN5ltWRtDBqrF%2BguXNcg1h6BwSrFr3IrL6srxNf%2BnjuJS4fqbyuio1A7F5yMI0p4Io45KHckcLl5kg7OHDjLpIBlVZIvHydaVjbXwedVTMpH%2FfZYS3g93A3Bc6YHCGsdn4JZWpS5%2FTyGEEoGZoBYCHD78dH7hdmhzFMZN0kECdHC516svJEYBQmEGcL9rOJGbEoTYV7I7GyTfiH2DZv2zd8%2Bw3SsAK4STJqspY7Q7C6DKKv3yJ3PWVnGz1nHfpL9BR95rqPp4BW5fvIQnOwh1nr7YiO4EoeEYDhP%2Bj4wmNT%2BniPheoMpBGA7ubqxp8x9TzmEYemMTtvwd8ohQvzK7Px62dnnL5u6etNWHZsl2L6j7dV1YuGR83TvpczDhhpDABjqkAb2ek3O1JTMrMVI1aEoZpLh4ktNM51WBj14la4EnXeFysA%2BkMU%2FSzgmhanETiLfbkjJOqY0sDlqQSCNk05BLPXArm3HJSqaByTP41HjHMZlqUmJEjO1qFzz2NRqNuI3vaGzrLaq1rt20fKY0kNDjXxhabuTNYZsPyVBvB7bAWDOssuWBYXSvtkDhq6MdEOtEWqbWzA1QFIextD46X8UOua9acqZM&X-Amz-Signature=4256ab8eac4c8abd26a8cb3b5d39a41e7888c6d9211ea4417b317bf57bf0a4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
