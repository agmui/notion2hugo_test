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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5K54DB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICys%2BGq2TM%2FZatrKImP1UdbmU%2BtZJyeoXiKuSmPcF5xCAiEAzZH7y5NBsW1yL6BDbrr%2BfRodhvKHG0uHwl%2BLOM2uKK0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjuE%2FZ0RTghQOrBgCrcA0BOMDgRCWgAMaT5ehb%2F%2BKaaEjqbGbBypdpzIlGHb7bUw0E7cntrdEK7fg7oaTITOs9PKNdll5IORNk6AE5qlYG92RZqmvXy%2F2AbS4uk5rho9TV6KX7bjaDFnZVEFAVcE4%2BkYS7uJyzzyTw9UrUqasPbnUjzIYv7h1zE9WdLSd4lQdpVSj0KkUZ9Un69gI2Aro2E8gDCCPD58OER7cE8Z0QxziQmmJGjdN%2Ba5VF1VZNnnFVjlPRXa4ZtcJ6icoeh2h%2BWhnjtJ8ZqT6JQwO7noCEUQWM1q6tiYSo8TvKY0OUyPahkQ7%2BgnwTSt%2F7a9qYWSMAzV0VqRfgxcNCN67gJx9JAc9bvN%2BC%2BjqAD%2Bp%2F7NRon0QVR%2BQnQPZxD8PibNnFxNCM3RKHVhtDsDEne8iMS2yq7n5Fb1uisCOiHDxLUQGbxk%2FmsMSXlIWQXgxTPRDFV8BuMB0D48Rk6WpuuyQdmkRysRqf5KSJLK%2Fldnjk686OEDFNObGpBpRz6winaX6OPN4UhXSMjSNAG1EnzuO9NMry6yiVpIVeg1aK3Yxb1nbuJPw%2FDXXhct55fK70GFbFOusGoutyvXHBilxM%2FY4PUNRpX%2BOhOWsw%2Fe5nHyyKvUR2zVhU82lInoyMmBHk%2BMI%2FhtL0GOqUB7V1hQkB67zRGrwsmKvPl40vcIqDI05mThh8pmsd0O3tKGUYBiVAFHrY1i7xzooSmqv31GvJw%2FXnelro0zZV0QzQMOYKCIjVtHEIQFeTpNDJwcnu7hD1sl57bgPwKzxim110sSFZGdQ9YPWb1oh1JJCZLp1IFVDo3xcMOX%2BwnEGUsIzos84hPGoaH1qa1y1iRdaVkheByArvZ9afyi25n41KwlUBT&X-Amz-Signature=8089f093ede1b6dd767e19e8e367c550d9ea645543fba48bafaacc2b3b210f18&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5K54DB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICys%2BGq2TM%2FZatrKImP1UdbmU%2BtZJyeoXiKuSmPcF5xCAiEAzZH7y5NBsW1yL6BDbrr%2BfRodhvKHG0uHwl%2BLOM2uKK0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjuE%2FZ0RTghQOrBgCrcA0BOMDgRCWgAMaT5ehb%2F%2BKaaEjqbGbBypdpzIlGHb7bUw0E7cntrdEK7fg7oaTITOs9PKNdll5IORNk6AE5qlYG92RZqmvXy%2F2AbS4uk5rho9TV6KX7bjaDFnZVEFAVcE4%2BkYS7uJyzzyTw9UrUqasPbnUjzIYv7h1zE9WdLSd4lQdpVSj0KkUZ9Un69gI2Aro2E8gDCCPD58OER7cE8Z0QxziQmmJGjdN%2Ba5VF1VZNnnFVjlPRXa4ZtcJ6icoeh2h%2BWhnjtJ8ZqT6JQwO7noCEUQWM1q6tiYSo8TvKY0OUyPahkQ7%2BgnwTSt%2F7a9qYWSMAzV0VqRfgxcNCN67gJx9JAc9bvN%2BC%2BjqAD%2Bp%2F7NRon0QVR%2BQnQPZxD8PibNnFxNCM3RKHVhtDsDEne8iMS2yq7n5Fb1uisCOiHDxLUQGbxk%2FmsMSXlIWQXgxTPRDFV8BuMB0D48Rk6WpuuyQdmkRysRqf5KSJLK%2Fldnjk686OEDFNObGpBpRz6winaX6OPN4UhXSMjSNAG1EnzuO9NMry6yiVpIVeg1aK3Yxb1nbuJPw%2FDXXhct55fK70GFbFOusGoutyvXHBilxM%2FY4PUNRpX%2BOhOWsw%2Fe5nHyyKvUR2zVhU82lInoyMmBHk%2BMI%2FhtL0GOqUB7V1hQkB67zRGrwsmKvPl40vcIqDI05mThh8pmsd0O3tKGUYBiVAFHrY1i7xzooSmqv31GvJw%2FXnelro0zZV0QzQMOYKCIjVtHEIQFeTpNDJwcnu7hD1sl57bgPwKzxim110sSFZGdQ9YPWb1oh1JJCZLp1IFVDo3xcMOX%2BwnEGUsIzos84hPGoaH1qa1y1iRdaVkheByArvZ9afyi25n41KwlUBT&X-Amz-Signature=29a71cf7adebb2e5205cdd71dc5c96c4b88a35333052c0db8a606027933ea383&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5K54DB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICys%2BGq2TM%2FZatrKImP1UdbmU%2BtZJyeoXiKuSmPcF5xCAiEAzZH7y5NBsW1yL6BDbrr%2BfRodhvKHG0uHwl%2BLOM2uKK0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjuE%2FZ0RTghQOrBgCrcA0BOMDgRCWgAMaT5ehb%2F%2BKaaEjqbGbBypdpzIlGHb7bUw0E7cntrdEK7fg7oaTITOs9PKNdll5IORNk6AE5qlYG92RZqmvXy%2F2AbS4uk5rho9TV6KX7bjaDFnZVEFAVcE4%2BkYS7uJyzzyTw9UrUqasPbnUjzIYv7h1zE9WdLSd4lQdpVSj0KkUZ9Un69gI2Aro2E8gDCCPD58OER7cE8Z0QxziQmmJGjdN%2Ba5VF1VZNnnFVjlPRXa4ZtcJ6icoeh2h%2BWhnjtJ8ZqT6JQwO7noCEUQWM1q6tiYSo8TvKY0OUyPahkQ7%2BgnwTSt%2F7a9qYWSMAzV0VqRfgxcNCN67gJx9JAc9bvN%2BC%2BjqAD%2Bp%2F7NRon0QVR%2BQnQPZxD8PibNnFxNCM3RKHVhtDsDEne8iMS2yq7n5Fb1uisCOiHDxLUQGbxk%2FmsMSXlIWQXgxTPRDFV8BuMB0D48Rk6WpuuyQdmkRysRqf5KSJLK%2Fldnjk686OEDFNObGpBpRz6winaX6OPN4UhXSMjSNAG1EnzuO9NMry6yiVpIVeg1aK3Yxb1nbuJPw%2FDXXhct55fK70GFbFOusGoutyvXHBilxM%2FY4PUNRpX%2BOhOWsw%2Fe5nHyyKvUR2zVhU82lInoyMmBHk%2BMI%2FhtL0GOqUB7V1hQkB67zRGrwsmKvPl40vcIqDI05mThh8pmsd0O3tKGUYBiVAFHrY1i7xzooSmqv31GvJw%2FXnelro0zZV0QzQMOYKCIjVtHEIQFeTpNDJwcnu7hD1sl57bgPwKzxim110sSFZGdQ9YPWb1oh1JJCZLp1IFVDo3xcMOX%2BwnEGUsIzos84hPGoaH1qa1y1iRdaVkheByArvZ9afyi25n41KwlUBT&X-Amz-Signature=dcfd961bb046733bf56fbc3fab2e1fb5b65d771bd684a52e613cb07d042e0f09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
