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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5E6AAVZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FTJINuG6romDluM568FUNZxEUtS%2BrHUgdeFsxfm1GBAiEAm5NwsRER1E%2B5B%2BLafAqS%2FtrXRedl68QB9XzmAYKl6wgqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKx9mdkUftJWzmLxCrcAxpATjM8AmeT6yBe9%2FU5QCdSR41OR1CaxrJxcwddsvGo%2BMm3BVPg%2B7yq5O2esA31HsDmvt2BH%2F8afQmMjwAD5uL%2BZHEieS5iu4rf9k%2FoJtno14ndzIP%2B6o2KGuWKecmcZky2I2wQ1JUh19RX73byYQCBZJN0RLm6zHcEVLCh63VP%2BckSnHK3OUTXqaWGy2oKrm%2BSLEScMkerAYVCLy1AwAjTTpAE6yTTwm8IPkFNuIoCkHn0biKfIm%2BPZoJr65yB%2BbK%2B6JfgYIAibkyiFPww9p1m92I6zTkrPt62h7CGkjMYHJ%2Fwz3eXnCneMs99fctVrwXBykCn5486uVt6%2BMHx6CNYoUuO%2FGhNNLq5%2FuYNBnsABRIyEEKJvphU3H3NMMHPb%2FmjAu%2FOGW%2BR8TQQnO4%2FUNEKQan%2FJ8hCcYH%2BbwR38aP6q%2B%2BKE0nhqcE0cmG8mW9Y4jircTo6flZObGRNN5NMTqX%2FbHQhfaXYcuaYjRjraF%2FGt%2BHo%2BuGYHai%2BrAlloUDHYNvsR7K3Q1P3i0cS1Q%2FcHNEQYG%2BtAJsB5tTHY5z%2BTm8hoVRwOXeX3EppTx0%2BDZ7sNT8U8NsPyvM4zMKjMibgMYIbNVEKKEABqETRgnl66f1yQ1KM3WtZnXXri7InMKycl74GOqUBsumnVmnzTuPvsLY9ao3i%2Bz4zyhRzLJp1EI%2BpByM2f7Dv7prIxrateR0YSPwbxwP7YwtD2oJQTvzvShrwlTmBa%2BHTHtM4Y%2Bj6t68aiSGslvALmXZvnHAMZA3SZu1iWLSMS%2FukhFcgZ64NvLnAuH%2FMqtVL7IEULcdd0Sj0ZycSdHPgFFz80q6NS5n3T%2B5Wj3CGKY6QWpVoK%2BgwDauYA3cQ%2BP9LP2ug&X-Amz-Signature=58a56255117e2b6c1f481d824437c83c659878a5b28ec3b3e5ae909725fba18d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5E6AAVZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FTJINuG6romDluM568FUNZxEUtS%2BrHUgdeFsxfm1GBAiEAm5NwsRER1E%2B5B%2BLafAqS%2FtrXRedl68QB9XzmAYKl6wgqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKx9mdkUftJWzmLxCrcAxpATjM8AmeT6yBe9%2FU5QCdSR41OR1CaxrJxcwddsvGo%2BMm3BVPg%2B7yq5O2esA31HsDmvt2BH%2F8afQmMjwAD5uL%2BZHEieS5iu4rf9k%2FoJtno14ndzIP%2B6o2KGuWKecmcZky2I2wQ1JUh19RX73byYQCBZJN0RLm6zHcEVLCh63VP%2BckSnHK3OUTXqaWGy2oKrm%2BSLEScMkerAYVCLy1AwAjTTpAE6yTTwm8IPkFNuIoCkHn0biKfIm%2BPZoJr65yB%2BbK%2B6JfgYIAibkyiFPww9p1m92I6zTkrPt62h7CGkjMYHJ%2Fwz3eXnCneMs99fctVrwXBykCn5486uVt6%2BMHx6CNYoUuO%2FGhNNLq5%2FuYNBnsABRIyEEKJvphU3H3NMMHPb%2FmjAu%2FOGW%2BR8TQQnO4%2FUNEKQan%2FJ8hCcYH%2BbwR38aP6q%2B%2BKE0nhqcE0cmG8mW9Y4jircTo6flZObGRNN5NMTqX%2FbHQhfaXYcuaYjRjraF%2FGt%2BHo%2BuGYHai%2BrAlloUDHYNvsR7K3Q1P3i0cS1Q%2FcHNEQYG%2BtAJsB5tTHY5z%2BTm8hoVRwOXeX3EppTx0%2BDZ7sNT8U8NsPyvM4zMKjMibgMYIbNVEKKEABqETRgnl66f1yQ1KM3WtZnXXri7InMKycl74GOqUBsumnVmnzTuPvsLY9ao3i%2Bz4zyhRzLJp1EI%2BpByM2f7Dv7prIxrateR0YSPwbxwP7YwtD2oJQTvzvShrwlTmBa%2BHTHtM4Y%2Bj6t68aiSGslvALmXZvnHAMZA3SZu1iWLSMS%2FukhFcgZ64NvLnAuH%2FMqtVL7IEULcdd0Sj0ZycSdHPgFFz80q6NS5n3T%2B5Wj3CGKY6QWpVoK%2BgwDauYA3cQ%2BP9LP2ug&X-Amz-Signature=709a36e7ef09b4d48318842d9d0377938fad1352e6cbdffdc68104a2a3b0b9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5E6AAVZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FTJINuG6romDluM568FUNZxEUtS%2BrHUgdeFsxfm1GBAiEAm5NwsRER1E%2B5B%2BLafAqS%2FtrXRedl68QB9XzmAYKl6wgqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKx9mdkUftJWzmLxCrcAxpATjM8AmeT6yBe9%2FU5QCdSR41OR1CaxrJxcwddsvGo%2BMm3BVPg%2B7yq5O2esA31HsDmvt2BH%2F8afQmMjwAD5uL%2BZHEieS5iu4rf9k%2FoJtno14ndzIP%2B6o2KGuWKecmcZky2I2wQ1JUh19RX73byYQCBZJN0RLm6zHcEVLCh63VP%2BckSnHK3OUTXqaWGy2oKrm%2BSLEScMkerAYVCLy1AwAjTTpAE6yTTwm8IPkFNuIoCkHn0biKfIm%2BPZoJr65yB%2BbK%2B6JfgYIAibkyiFPww9p1m92I6zTkrPt62h7CGkjMYHJ%2Fwz3eXnCneMs99fctVrwXBykCn5486uVt6%2BMHx6CNYoUuO%2FGhNNLq5%2FuYNBnsABRIyEEKJvphU3H3NMMHPb%2FmjAu%2FOGW%2BR8TQQnO4%2FUNEKQan%2FJ8hCcYH%2BbwR38aP6q%2B%2BKE0nhqcE0cmG8mW9Y4jircTo6flZObGRNN5NMTqX%2FbHQhfaXYcuaYjRjraF%2FGt%2BHo%2BuGYHai%2BrAlloUDHYNvsR7K3Q1P3i0cS1Q%2FcHNEQYG%2BtAJsB5tTHY5z%2BTm8hoVRwOXeX3EppTx0%2BDZ7sNT8U8NsPyvM4zMKjMibgMYIbNVEKKEABqETRgnl66f1yQ1KM3WtZnXXri7InMKycl74GOqUBsumnVmnzTuPvsLY9ao3i%2Bz4zyhRzLJp1EI%2BpByM2f7Dv7prIxrateR0YSPwbxwP7YwtD2oJQTvzvShrwlTmBa%2BHTHtM4Y%2Bj6t68aiSGslvALmXZvnHAMZA3SZu1iWLSMS%2FukhFcgZ64NvLnAuH%2FMqtVL7IEULcdd0Sj0ZycSdHPgFFz80q6NS5n3T%2B5Wj3CGKY6QWpVoK%2BgwDauYA3cQ%2BP9LP2ug&X-Amz-Signature=af650a4f1ad13e297fbbe51c1f34b9dcd635e9e75db36ed084f7a1b8a370c645&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
