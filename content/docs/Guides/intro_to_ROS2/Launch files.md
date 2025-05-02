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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LJ6S5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGVBXwc%2BGl47fgiePIoGNKNihyhun1WtIpEKiozWaxyBAiEA50Fr%2BR%2BvNl28cm5hBSUhSk%2BYQOobIqGUmmKCyp8ZlNcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYeVD5ILnfJUbd7hircAzGR2UlD0q7gwt3bADgpDjEUNs47ObOJlmTvTknYKfJdlioUojO2GDzl2qdgDVXK7kmQ7eC8FFm5opWlkvrkoy%2BBRQIAMpvwCjqF7sz%2FpSZJz4PVNnlon30gX05o45M5iTTHXjlhLk3QUfVin7ufMA3YB3sLw%2F6Zj1iK6hFFPGSI4ig7qTnZZfxk7ABuJaE1lyDyU0MzpjmQugWWt9oxnGrDJlpWpPqslNgWwqVdydt0r2tHJUE0O%2FAzv%2FpsBFENMOw%2BGCiL%2FDg0HdhAGenkZdL2rd5KhZm2Pi8MbCPL3zPRl%2FOZVNiomw6UGfbPxoezhVWfxFWLC%2F9gGTFm8J2bSd3wNMSOUM3bZLRF0Cz6vLs7vZDzbQCu5NIYrGjDpZ7EG0BUfA%2B5p6lcBcEbHf7b3RN7FoKLf4gX0LZOl8bPpnm6BqMPpihYX%2F1fcIaIRUfMp2Y0OaqNA%2BvuA5n2QDvdnr3mA%2BHy1mcmXyHwykB8qQeB26cGI%2BpvLZbYPrT4MYjmrdDE9Mbx4w6iT4sUEKM5B%2Fs02WyG0pOrP7umn%2BSEI9Ljc%2BrNTPSdWKRXyJJ4fKN53WQk%2F0GKNJ6NIBVpWipT2AK9rX31XKdZ0mCBlFGtUik%2Bfcul6m7Ol48W4azNMKGC1cAGOqUBRerO8toLXMvp0AY1leqd5Kh0WIRRwXQdYV6DtO2iVObGofGR%2FpgPWSBGaz4hrdTJWHqp6F0jo9WcFAEfKFkrdAX3jafINQgk1rY7TU2RZ9IA815K3GKEfx%2Fb07COVbyoDqLZATT8UH9ty8L5FPj4naI5F4JvAjyYfLxGDPAm7bEEY0en9h5er6aiz8FR8ulFIIYXapKW9mZ2Mxp7UpD90%2FXZUpB9&X-Amz-Signature=084c3118033c282df8472da7d6ed27c9ccab3a1137ad80d1857ce209502efbff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LJ6S5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGVBXwc%2BGl47fgiePIoGNKNihyhun1WtIpEKiozWaxyBAiEA50Fr%2BR%2BvNl28cm5hBSUhSk%2BYQOobIqGUmmKCyp8ZlNcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYeVD5ILnfJUbd7hircAzGR2UlD0q7gwt3bADgpDjEUNs47ObOJlmTvTknYKfJdlioUojO2GDzl2qdgDVXK7kmQ7eC8FFm5opWlkvrkoy%2BBRQIAMpvwCjqF7sz%2FpSZJz4PVNnlon30gX05o45M5iTTHXjlhLk3QUfVin7ufMA3YB3sLw%2F6Zj1iK6hFFPGSI4ig7qTnZZfxk7ABuJaE1lyDyU0MzpjmQugWWt9oxnGrDJlpWpPqslNgWwqVdydt0r2tHJUE0O%2FAzv%2FpsBFENMOw%2BGCiL%2FDg0HdhAGenkZdL2rd5KhZm2Pi8MbCPL3zPRl%2FOZVNiomw6UGfbPxoezhVWfxFWLC%2F9gGTFm8J2bSd3wNMSOUM3bZLRF0Cz6vLs7vZDzbQCu5NIYrGjDpZ7EG0BUfA%2B5p6lcBcEbHf7b3RN7FoKLf4gX0LZOl8bPpnm6BqMPpihYX%2F1fcIaIRUfMp2Y0OaqNA%2BvuA5n2QDvdnr3mA%2BHy1mcmXyHwykB8qQeB26cGI%2BpvLZbYPrT4MYjmrdDE9Mbx4w6iT4sUEKM5B%2Fs02WyG0pOrP7umn%2BSEI9Ljc%2BrNTPSdWKRXyJJ4fKN53WQk%2F0GKNJ6NIBVpWipT2AK9rX31XKdZ0mCBlFGtUik%2Bfcul6m7Ol48W4azNMKGC1cAGOqUBRerO8toLXMvp0AY1leqd5Kh0WIRRwXQdYV6DtO2iVObGofGR%2FpgPWSBGaz4hrdTJWHqp6F0jo9WcFAEfKFkrdAX3jafINQgk1rY7TU2RZ9IA815K3GKEfx%2Fb07COVbyoDqLZATT8UH9ty8L5FPj4naI5F4JvAjyYfLxGDPAm7bEEY0en9h5er6aiz8FR8ulFIIYXapKW9mZ2Mxp7UpD90%2FXZUpB9&X-Amz-Signature=4adeb07b949bc02de0cfd0e149dc7a9000bb3c1b254e1381081117fe895ef63a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LJ6S5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGVBXwc%2BGl47fgiePIoGNKNihyhun1WtIpEKiozWaxyBAiEA50Fr%2BR%2BvNl28cm5hBSUhSk%2BYQOobIqGUmmKCyp8ZlNcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYeVD5ILnfJUbd7hircAzGR2UlD0q7gwt3bADgpDjEUNs47ObOJlmTvTknYKfJdlioUojO2GDzl2qdgDVXK7kmQ7eC8FFm5opWlkvrkoy%2BBRQIAMpvwCjqF7sz%2FpSZJz4PVNnlon30gX05o45M5iTTHXjlhLk3QUfVin7ufMA3YB3sLw%2F6Zj1iK6hFFPGSI4ig7qTnZZfxk7ABuJaE1lyDyU0MzpjmQugWWt9oxnGrDJlpWpPqslNgWwqVdydt0r2tHJUE0O%2FAzv%2FpsBFENMOw%2BGCiL%2FDg0HdhAGenkZdL2rd5KhZm2Pi8MbCPL3zPRl%2FOZVNiomw6UGfbPxoezhVWfxFWLC%2F9gGTFm8J2bSd3wNMSOUM3bZLRF0Cz6vLs7vZDzbQCu5NIYrGjDpZ7EG0BUfA%2B5p6lcBcEbHf7b3RN7FoKLf4gX0LZOl8bPpnm6BqMPpihYX%2F1fcIaIRUfMp2Y0OaqNA%2BvuA5n2QDvdnr3mA%2BHy1mcmXyHwykB8qQeB26cGI%2BpvLZbYPrT4MYjmrdDE9Mbx4w6iT4sUEKM5B%2Fs02WyG0pOrP7umn%2BSEI9Ljc%2BrNTPSdWKRXyJJ4fKN53WQk%2F0GKNJ6NIBVpWipT2AK9rX31XKdZ0mCBlFGtUik%2Bfcul6m7Ol48W4azNMKGC1cAGOqUBRerO8toLXMvp0AY1leqd5Kh0WIRRwXQdYV6DtO2iVObGofGR%2FpgPWSBGaz4hrdTJWHqp6F0jo9WcFAEfKFkrdAX3jafINQgk1rY7TU2RZ9IA815K3GKEfx%2Fb07COVbyoDqLZATT8UH9ty8L5FPj4naI5F4JvAjyYfLxGDPAm7bEEY0en9h5er6aiz8FR8ulFIIYXapKW9mZ2Mxp7UpD90%2FXZUpB9&X-Amz-Signature=967ff139ec14ba703630a9d9abb03e9e080c85eda484f29f57aa3a9fd6f062e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
