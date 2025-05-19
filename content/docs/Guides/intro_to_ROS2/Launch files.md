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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJXQRWL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUDkJdwpqkTkK9nvzaHZRLKPAdWG0muRq7M89y6Ix2GwIgW9RdY2YITQU%2FL086F%2FEytFhGdwx04MXL2h9s%2F4EH85AqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFkl5fAPfeij3PHMircA1pXmbhjcak1X4zI%2FS2RVmpQLIVN1g7DoKOC8l7YXybRbdy5e304gImwLgbd1cHBA1%2BDok5CWlQLOobEtgyarv6ajLwHU22T7s4ucQX%2BUAv5KQjLD%2BkCDaRgZTUGL8jY9VC%2F34SFQt4EmhxDex10ak%2Fdp%2FT0nDK7D%2FShajRA%2BsC0g43YhYEGOv5inkjsnWQha0vyNHXRLjEMkvyqknJX8Zu%2FA7YauBNzYnVxYL8l8vlrouE%2BpwFgqFMNuk%2FLbCsTHfMWKKUtcVgAzsT62%2B90K9rVBZJ0a1sOQ%2FSVcs1nlqlYF5BclIonbUJQTd7%2BEi0DHlIxKaAs7knteM9lR%2BuE1jhvVUPjvuVRJMFrs6sJLej3MBtSTf7CsvGenCQHOQkyssWvbHZrgKsATCkeHpfKtFKQO1pb5VHDjyRc8ibmpU8yQjKw2vp56NpGBtDZq0GCnZAGhoeWqvG7Ye4ylEcDutnAsVDOqGHUCuroSwDLOlfL0Pryz3dGVPux4Yf9KFZbsgxF4br%2FnXrsbuXEGUaPmScXSLPXC0SUUBZvPBlP%2F6CTBTTdzL3wxMEODMnJGp6kd7HgvpGkS9q9wGuZvAZw7tOY1%2FCyY3sPMWZlY8bzHvfUlR9c%2FPPT40gThwVZMI%2BvrcEGOqUB5riWEuQeoaeZB%2Fxt7uZzdwCS9Mz0tTUGA7tOzbrT19Mc0%2B4O8Pq3YDHhPWv67q8TM2AfavGoqepaUtCiXxogH70c7Vtzqwmbww2wytpTgpgUSYgldnJTzNg4bsWzN6brOtz2bNliXGURIkkyLjeaqO9P3Mcdti0I3pmTayEytI2%2Fr7jXdLUV0AOneYCCNuxud9OJHaKLqrCe7NQkL3zCSChGmFt6&X-Amz-Signature=3cd6d6963bafff4d0e3a7048a350c66c37ea50ef9ba22503ab4e07e0761b2f57&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJXQRWL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUDkJdwpqkTkK9nvzaHZRLKPAdWG0muRq7M89y6Ix2GwIgW9RdY2YITQU%2FL086F%2FEytFhGdwx04MXL2h9s%2F4EH85AqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFkl5fAPfeij3PHMircA1pXmbhjcak1X4zI%2FS2RVmpQLIVN1g7DoKOC8l7YXybRbdy5e304gImwLgbd1cHBA1%2BDok5CWlQLOobEtgyarv6ajLwHU22T7s4ucQX%2BUAv5KQjLD%2BkCDaRgZTUGL8jY9VC%2F34SFQt4EmhxDex10ak%2Fdp%2FT0nDK7D%2FShajRA%2BsC0g43YhYEGOv5inkjsnWQha0vyNHXRLjEMkvyqknJX8Zu%2FA7YauBNzYnVxYL8l8vlrouE%2BpwFgqFMNuk%2FLbCsTHfMWKKUtcVgAzsT62%2B90K9rVBZJ0a1sOQ%2FSVcs1nlqlYF5BclIonbUJQTd7%2BEi0DHlIxKaAs7knteM9lR%2BuE1jhvVUPjvuVRJMFrs6sJLej3MBtSTf7CsvGenCQHOQkyssWvbHZrgKsATCkeHpfKtFKQO1pb5VHDjyRc8ibmpU8yQjKw2vp56NpGBtDZq0GCnZAGhoeWqvG7Ye4ylEcDutnAsVDOqGHUCuroSwDLOlfL0Pryz3dGVPux4Yf9KFZbsgxF4br%2FnXrsbuXEGUaPmScXSLPXC0SUUBZvPBlP%2F6CTBTTdzL3wxMEODMnJGp6kd7HgvpGkS9q9wGuZvAZw7tOY1%2FCyY3sPMWZlY8bzHvfUlR9c%2FPPT40gThwVZMI%2BvrcEGOqUB5riWEuQeoaeZB%2Fxt7uZzdwCS9Mz0tTUGA7tOzbrT19Mc0%2B4O8Pq3YDHhPWv67q8TM2AfavGoqepaUtCiXxogH70c7Vtzqwmbww2wytpTgpgUSYgldnJTzNg4bsWzN6brOtz2bNliXGURIkkyLjeaqO9P3Mcdti0I3pmTayEytI2%2Fr7jXdLUV0AOneYCCNuxud9OJHaKLqrCe7NQkL3zCSChGmFt6&X-Amz-Signature=bc826851ea0f0a79fbe38cd417d7a94c300218363886aa7e49c56860a20954fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJXQRWL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUDkJdwpqkTkK9nvzaHZRLKPAdWG0muRq7M89y6Ix2GwIgW9RdY2YITQU%2FL086F%2FEytFhGdwx04MXL2h9s%2F4EH85AqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFkl5fAPfeij3PHMircA1pXmbhjcak1X4zI%2FS2RVmpQLIVN1g7DoKOC8l7YXybRbdy5e304gImwLgbd1cHBA1%2BDok5CWlQLOobEtgyarv6ajLwHU22T7s4ucQX%2BUAv5KQjLD%2BkCDaRgZTUGL8jY9VC%2F34SFQt4EmhxDex10ak%2Fdp%2FT0nDK7D%2FShajRA%2BsC0g43YhYEGOv5inkjsnWQha0vyNHXRLjEMkvyqknJX8Zu%2FA7YauBNzYnVxYL8l8vlrouE%2BpwFgqFMNuk%2FLbCsTHfMWKKUtcVgAzsT62%2B90K9rVBZJ0a1sOQ%2FSVcs1nlqlYF5BclIonbUJQTd7%2BEi0DHlIxKaAs7knteM9lR%2BuE1jhvVUPjvuVRJMFrs6sJLej3MBtSTf7CsvGenCQHOQkyssWvbHZrgKsATCkeHpfKtFKQO1pb5VHDjyRc8ibmpU8yQjKw2vp56NpGBtDZq0GCnZAGhoeWqvG7Ye4ylEcDutnAsVDOqGHUCuroSwDLOlfL0Pryz3dGVPux4Yf9KFZbsgxF4br%2FnXrsbuXEGUaPmScXSLPXC0SUUBZvPBlP%2F6CTBTTdzL3wxMEODMnJGp6kd7HgvpGkS9q9wGuZvAZw7tOY1%2FCyY3sPMWZlY8bzHvfUlR9c%2FPPT40gThwVZMI%2BvrcEGOqUB5riWEuQeoaeZB%2Fxt7uZzdwCS9Mz0tTUGA7tOzbrT19Mc0%2B4O8Pq3YDHhPWv67q8TM2AfavGoqepaUtCiXxogH70c7Vtzqwmbww2wytpTgpgUSYgldnJTzNg4bsWzN6brOtz2bNliXGURIkkyLjeaqO9P3Mcdti0I3pmTayEytI2%2Fr7jXdLUV0AOneYCCNuxud9OJHaKLqrCe7NQkL3zCSChGmFt6&X-Amz-Signature=b5e64699695c32fc664bcc0072b4f25b6b8e9becd6aa2753972e48918e717197&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
