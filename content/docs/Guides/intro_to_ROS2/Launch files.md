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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYLDJT6Q%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2tOPnySNNrt%2BR2ENJlyygRjMuxkBox9ZjIDkWlEFnVwIgJIIZhFq%2FNJQyIw%2BcaMinUmu17qP3P3XrHmK4gZ8xzEYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFM8nB9HCw7l%2B03vCrcAxSSo%2FZNKAqANfT41TF8xS06Jwc4Lww7wUGXpDYT4BVQQxqCg4Cx38g3YoKm1UwhKUHZ2Vp7e2mhvqo1wis89Y35LqyYm6iqLxdsgfkvln1jXUHLXjRHByoOgTjghyWrIY1VTMakSd7Gox4KakApYfwGwDLouGssx3Kg8rjVZVpGJ9bKczQ0WKmY9yFkGbCNFBM32WEdDqD8kLFlKXkJv2Lv3evp1j98qbN%2Ff8eQ2SuqgAWJ3g%2BwgJpLES8KyB82OU8jPCjDePLJ6N7%2FlOm1YuP4vSQheOVhQ3T23bdhXRJL8Ivwh3d3pkbKEjhbI9USjiaUjatJasHI4fO2IiY2aOGPURtMP73zzmtsP%2F30IqKP9RnWHN%2B%2F9VmlsO9Uv6kn5l8jKE8kM1bM2GBHlfCVoRYAySFSeHQoulVhI%2BApEqHzQf7EruHU7CWt9baAUsxYz2RkgTQSS9881yFuFjJPyDttF9OHB%2FBMKuMRexpS%2FVM%2FYW%2FZgFHg6Lr4KpqZeTJH%2FfnrlgReKj18kLE2Z2k%2FFcoW%2B%2FOeTkq8AAJBnjV3tvAHye6ze99zxgAAprcK%2FGgUXcDxOzRMqmhp3ZkQ%2B75NOUyvdscT8G4WxIcp4kjQtzgRf73vHI05tNziEQ8CMPCL1r8GOqUB%2FiwsauiGHfY%2FhSDH5RYTIt9%2BeFTwaik6SmmHXVJKUBvQRDOGia2DNDVlR8GHJzTygOtqjyLUdqKNkcJK%2FhVZPTF2yB3MLStrSrJZXnMjqc4i0C%2B%2Fw4yIi6jss1%2FeIJOjLJW7%2Bq8dDIfy5FGwE02yaqxHOzxA5uo4Xv1Iy1HOaAfo6UvXQw%2FsPBEyyREO%2FBnhyIqopDpDJBNXEDld8ob%2FbMFJh57P&X-Amz-Signature=15088d1413f339aba3287f9e29f9cec47bc995282de5c1afcb1e3f469d3ab7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYLDJT6Q%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2tOPnySNNrt%2BR2ENJlyygRjMuxkBox9ZjIDkWlEFnVwIgJIIZhFq%2FNJQyIw%2BcaMinUmu17qP3P3XrHmK4gZ8xzEYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFM8nB9HCw7l%2B03vCrcAxSSo%2FZNKAqANfT41TF8xS06Jwc4Lww7wUGXpDYT4BVQQxqCg4Cx38g3YoKm1UwhKUHZ2Vp7e2mhvqo1wis89Y35LqyYm6iqLxdsgfkvln1jXUHLXjRHByoOgTjghyWrIY1VTMakSd7Gox4KakApYfwGwDLouGssx3Kg8rjVZVpGJ9bKczQ0WKmY9yFkGbCNFBM32WEdDqD8kLFlKXkJv2Lv3evp1j98qbN%2Ff8eQ2SuqgAWJ3g%2BwgJpLES8KyB82OU8jPCjDePLJ6N7%2FlOm1YuP4vSQheOVhQ3T23bdhXRJL8Ivwh3d3pkbKEjhbI9USjiaUjatJasHI4fO2IiY2aOGPURtMP73zzmtsP%2F30IqKP9RnWHN%2B%2F9VmlsO9Uv6kn5l8jKE8kM1bM2GBHlfCVoRYAySFSeHQoulVhI%2BApEqHzQf7EruHU7CWt9baAUsxYz2RkgTQSS9881yFuFjJPyDttF9OHB%2FBMKuMRexpS%2FVM%2FYW%2FZgFHg6Lr4KpqZeTJH%2FfnrlgReKj18kLE2Z2k%2FFcoW%2B%2FOeTkq8AAJBnjV3tvAHye6ze99zxgAAprcK%2FGgUXcDxOzRMqmhp3ZkQ%2B75NOUyvdscT8G4WxIcp4kjQtzgRf73vHI05tNziEQ8CMPCL1r8GOqUB%2FiwsauiGHfY%2FhSDH5RYTIt9%2BeFTwaik6SmmHXVJKUBvQRDOGia2DNDVlR8GHJzTygOtqjyLUdqKNkcJK%2FhVZPTF2yB3MLStrSrJZXnMjqc4i0C%2B%2Fw4yIi6jss1%2FeIJOjLJW7%2Bq8dDIfy5FGwE02yaqxHOzxA5uo4Xv1Iy1HOaAfo6UvXQw%2FsPBEyyREO%2FBnhyIqopDpDJBNXEDld8ob%2FbMFJh57P&X-Amz-Signature=6f5f2cda21ff847820d392ad149d2df49da7bf4fc46ac6bf578477a68f777762&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYLDJT6Q%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD2tOPnySNNrt%2BR2ENJlyygRjMuxkBox9ZjIDkWlEFnVwIgJIIZhFq%2FNJQyIw%2BcaMinUmu17qP3P3XrHmK4gZ8xzEYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFM8nB9HCw7l%2B03vCrcAxSSo%2FZNKAqANfT41TF8xS06Jwc4Lww7wUGXpDYT4BVQQxqCg4Cx38g3YoKm1UwhKUHZ2Vp7e2mhvqo1wis89Y35LqyYm6iqLxdsgfkvln1jXUHLXjRHByoOgTjghyWrIY1VTMakSd7Gox4KakApYfwGwDLouGssx3Kg8rjVZVpGJ9bKczQ0WKmY9yFkGbCNFBM32WEdDqD8kLFlKXkJv2Lv3evp1j98qbN%2Ff8eQ2SuqgAWJ3g%2BwgJpLES8KyB82OU8jPCjDePLJ6N7%2FlOm1YuP4vSQheOVhQ3T23bdhXRJL8Ivwh3d3pkbKEjhbI9USjiaUjatJasHI4fO2IiY2aOGPURtMP73zzmtsP%2F30IqKP9RnWHN%2B%2F9VmlsO9Uv6kn5l8jKE8kM1bM2GBHlfCVoRYAySFSeHQoulVhI%2BApEqHzQf7EruHU7CWt9baAUsxYz2RkgTQSS9881yFuFjJPyDttF9OHB%2FBMKuMRexpS%2FVM%2FYW%2FZgFHg6Lr4KpqZeTJH%2FfnrlgReKj18kLE2Z2k%2FFcoW%2B%2FOeTkq8AAJBnjV3tvAHye6ze99zxgAAprcK%2FGgUXcDxOzRMqmhp3ZkQ%2B75NOUyvdscT8G4WxIcp4kjQtzgRf73vHI05tNziEQ8CMPCL1r8GOqUB%2FiwsauiGHfY%2FhSDH5RYTIt9%2BeFTwaik6SmmHXVJKUBvQRDOGia2DNDVlR8GHJzTygOtqjyLUdqKNkcJK%2FhVZPTF2yB3MLStrSrJZXnMjqc4i0C%2B%2Fw4yIi6jss1%2FeIJOjLJW7%2Bq8dDIfy5FGwE02yaqxHOzxA5uo4Xv1Iy1HOaAfo6UvXQw%2FsPBEyyREO%2FBnhyIqopDpDJBNXEDld8ob%2FbMFJh57P&X-Amz-Signature=609136dc3b29a5cb4408778b634d0de1900ae75830bc084d43a67957f1903da0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
