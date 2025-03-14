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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQKBFWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmQQZdezMSD7Qg0X6OcnCGEeQ2%2FM0CLU9Y4Iyhqhn4aAiAUnkUstc0rVKoPoW%2BBCb2IsB8CabC9TLsOopWP4PU2ISqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTCXrw3%2FAgPVk%2BCduKtwDwGnEgiEW5bj60gbdnhzV0HJEUR2RUqOth8ou4FcwD1XBm4opuC2BiwbPv55KkSy9YwSvydD%2BmYtx9cZI5ZMZQbMJ2rGDsFFVtb6YN0au6r3%2BlfUiCiqFjm3lFnwRP6dMdHU9n94imPKTEJeLDdHynAusV4rpquDw%2BQqBkqWbfN2jbWNVvM8rqNX1AzlAZmkX6DYTHwRwJKYtmO9h%2BgUG7yS9bJLnvmTkTYKCwSNA7zHFyhMoyCcl6ETQ3E6Wexm6N%2Fl77DYZ2GjQsDQFXTTajeBWKNQzM%2FkQojb%2Frf4sW0%2BVyrY%2BzVg%2B4mLCR2nLX3EX1ElHn6LsYtI87GN%2FWcGAOSjxOGdHkiUrs%2F%2BM%2F8fId77Jz3hBTrPvJ%2F2M4oD9ntJAk7cHD8A3r3a3KF8YCM3hWXiezsi6f%2BCU1MnexCMlGaojdX%2FijslmipK7eS9OdtWh32EiokvrOXJagYRuQubR872Pe2NqcbSdpdw0672Tq3tk8SRb133CMOnOwiBLQBphNzqCLGx7M3YF6m9%2FQJ80QxRz3U82bwbeSPnPgM7Jm3SOX6050LuvGdLjOkBgB9%2F0bHa%2FeLFcFqoGQnqkfU5dGiDj5yrZ3DbD%2BvycWvOlNRuAkhLgptN4ylFHt30w8Y7OvgY6pgHoJxlTvfO%2BPVvjr74t7kbfwDkqYlP6sd0przvpCn6HeuMB53kTuFdwznq8gYeq5D4NhpUP3zgfujX2Rhwir%2BH498LAgcyQKhdJNk22hzN9qFZWMAiuQLBUqgunIkPZLGRFmHPWcqlrsV8eLAFU7H%2FI5O%2FXxHmfofQpQ%2B0hdt8CeVoeNudgbpXFKE7RsRYB4ndzmjLgZrpW5ikQwWTk7hemQO%2BFrcqP&X-Amz-Signature=d9411e3040ad6b0b1adff503107bd5bddd0f1c03329f1a73b697e689648c3fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQKBFWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmQQZdezMSD7Qg0X6OcnCGEeQ2%2FM0CLU9Y4Iyhqhn4aAiAUnkUstc0rVKoPoW%2BBCb2IsB8CabC9TLsOopWP4PU2ISqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTCXrw3%2FAgPVk%2BCduKtwDwGnEgiEW5bj60gbdnhzV0HJEUR2RUqOth8ou4FcwD1XBm4opuC2BiwbPv55KkSy9YwSvydD%2BmYtx9cZI5ZMZQbMJ2rGDsFFVtb6YN0au6r3%2BlfUiCiqFjm3lFnwRP6dMdHU9n94imPKTEJeLDdHynAusV4rpquDw%2BQqBkqWbfN2jbWNVvM8rqNX1AzlAZmkX6DYTHwRwJKYtmO9h%2BgUG7yS9bJLnvmTkTYKCwSNA7zHFyhMoyCcl6ETQ3E6Wexm6N%2Fl77DYZ2GjQsDQFXTTajeBWKNQzM%2FkQojb%2Frf4sW0%2BVyrY%2BzVg%2B4mLCR2nLX3EX1ElHn6LsYtI87GN%2FWcGAOSjxOGdHkiUrs%2F%2BM%2F8fId77Jz3hBTrPvJ%2F2M4oD9ntJAk7cHD8A3r3a3KF8YCM3hWXiezsi6f%2BCU1MnexCMlGaojdX%2FijslmipK7eS9OdtWh32EiokvrOXJagYRuQubR872Pe2NqcbSdpdw0672Tq3tk8SRb133CMOnOwiBLQBphNzqCLGx7M3YF6m9%2FQJ80QxRz3U82bwbeSPnPgM7Jm3SOX6050LuvGdLjOkBgB9%2F0bHa%2FeLFcFqoGQnqkfU5dGiDj5yrZ3DbD%2BvycWvOlNRuAkhLgptN4ylFHt30w8Y7OvgY6pgHoJxlTvfO%2BPVvjr74t7kbfwDkqYlP6sd0przvpCn6HeuMB53kTuFdwznq8gYeq5D4NhpUP3zgfujX2Rhwir%2BH498LAgcyQKhdJNk22hzN9qFZWMAiuQLBUqgunIkPZLGRFmHPWcqlrsV8eLAFU7H%2FI5O%2FXxHmfofQpQ%2B0hdt8CeVoeNudgbpXFKE7RsRYB4ndzmjLgZrpW5ikQwWTk7hemQO%2BFrcqP&X-Amz-Signature=828abf936f6a567b11ded2f877aefb715724186ef4b6a6ca975a8dc1c2e51825&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQKBFWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmQQZdezMSD7Qg0X6OcnCGEeQ2%2FM0CLU9Y4Iyhqhn4aAiAUnkUstc0rVKoPoW%2BBCb2IsB8CabC9TLsOopWP4PU2ISqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTCXrw3%2FAgPVk%2BCduKtwDwGnEgiEW5bj60gbdnhzV0HJEUR2RUqOth8ou4FcwD1XBm4opuC2BiwbPv55KkSy9YwSvydD%2BmYtx9cZI5ZMZQbMJ2rGDsFFVtb6YN0au6r3%2BlfUiCiqFjm3lFnwRP6dMdHU9n94imPKTEJeLDdHynAusV4rpquDw%2BQqBkqWbfN2jbWNVvM8rqNX1AzlAZmkX6DYTHwRwJKYtmO9h%2BgUG7yS9bJLnvmTkTYKCwSNA7zHFyhMoyCcl6ETQ3E6Wexm6N%2Fl77DYZ2GjQsDQFXTTajeBWKNQzM%2FkQojb%2Frf4sW0%2BVyrY%2BzVg%2B4mLCR2nLX3EX1ElHn6LsYtI87GN%2FWcGAOSjxOGdHkiUrs%2F%2BM%2F8fId77Jz3hBTrPvJ%2F2M4oD9ntJAk7cHD8A3r3a3KF8YCM3hWXiezsi6f%2BCU1MnexCMlGaojdX%2FijslmipK7eS9OdtWh32EiokvrOXJagYRuQubR872Pe2NqcbSdpdw0672Tq3tk8SRb133CMOnOwiBLQBphNzqCLGx7M3YF6m9%2FQJ80QxRz3U82bwbeSPnPgM7Jm3SOX6050LuvGdLjOkBgB9%2F0bHa%2FeLFcFqoGQnqkfU5dGiDj5yrZ3DbD%2BvycWvOlNRuAkhLgptN4ylFHt30w8Y7OvgY6pgHoJxlTvfO%2BPVvjr74t7kbfwDkqYlP6sd0przvpCn6HeuMB53kTuFdwznq8gYeq5D4NhpUP3zgfujX2Rhwir%2BH498LAgcyQKhdJNk22hzN9qFZWMAiuQLBUqgunIkPZLGRFmHPWcqlrsV8eLAFU7H%2FI5O%2FXxHmfofQpQ%2B0hdt8CeVoeNudgbpXFKE7RsRYB4ndzmjLgZrpW5ikQwWTk7hemQO%2BFrcqP&X-Amz-Signature=3bdf4e7881ebf18c815b71e26f73af4b7d240f01abaf2debba55bdc4cdedfbca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
