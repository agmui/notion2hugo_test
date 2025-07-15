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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC6T2AQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClezVgMrgvmQcLsBgNJkhFy7n%2BwEsrN3E1PRlkO7qGRgIgfhoG0y1owGPP6YE%2Fw4u7ZB5lOzoh0OlAM600cKPWpYwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOobOP3wOsBRvf0CgyrcAxTIONRMawTeKJOuWq%2FFrIrCTBF3qZE9ummLnLR7SPA4kcpEnIoRntnBAJGJfAeQ2RFJgfTOVr8uoBvwgTYOX6tGPAwzuKLLlj9qiWoSHJMWQEJFSeI0eP16a4XQd04%2FTGbv%2FyiHcFUyYXFcuZVsws2by%2BoRVpU3Xm%2FsdUOV9r9AaoBqXjQm9ci8NigS%2FREiUR9fJ03b%2F455V8Sza1c6O9GSPTJaqv6gipMxSRoJZq%2FkC5gF2rUMeR6N%2BS%2BOAk0aF%2F629GWmcaEV1DP1gbDL%2F3loP1r0A0EUZh8M9TILpVkcqtffqMrKrPjbOXAcAOzhPzcXvW2XsQ1zWmtXkZhfOjjd01jEQSkZzZC00PA%2Fd9wKXStN1vLEvJGKqQmIWA6wpZS3mYYE8lK3r%2Bb1XhtmWB3CUJ1yawqAGM%2FfYwTAV56c%2BA872JQMpGfbVHyer1lnP2tYM%2Bt5iU2O7V0AJsUd%2BFcSej0tbH%2B0vOvGOxs9An2Y%2BBtcjf3bZ3p9r2siqpalwTQukxLVLsLza3iUdUGNSO%2FivBHej5OyVvcx3M7Jw%2FL78JAwIPIdhj1XLaeh9Ez1T%2F6Lsg170o3BeVKiRA6J56OkLcOCZdzChWp333YSQIgtq0n10VqwGU7%2FocFBMJGq18MGOqUB4OF0UqQ6tICLjmDjGvjrYsgppOioFv79Ofu3i56ZaWP8y97v3IrkGGUdIixfY2P8TNsQlt9coz4O1ZGs3RiwndmWjUZhIBnB7xf8VfZX2kbNt7Xe4Y%2BRikRtCqBbvyBvWHIXNABzK4TjRikuZgm7fFNqpe7wMrlat4Q%2FPuylprFSjVXo%2BaFRU2dMzzOfx6g0Te0mN8RHcROC84EhLWsPC%2FhxV8Bd&X-Amz-Signature=fc5aef7b66ef75d86aa68793690cafbcbee4158b916b957914679a0362c1a7e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC6T2AQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClezVgMrgvmQcLsBgNJkhFy7n%2BwEsrN3E1PRlkO7qGRgIgfhoG0y1owGPP6YE%2Fw4u7ZB5lOzoh0OlAM600cKPWpYwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOobOP3wOsBRvf0CgyrcAxTIONRMawTeKJOuWq%2FFrIrCTBF3qZE9ummLnLR7SPA4kcpEnIoRntnBAJGJfAeQ2RFJgfTOVr8uoBvwgTYOX6tGPAwzuKLLlj9qiWoSHJMWQEJFSeI0eP16a4XQd04%2FTGbv%2FyiHcFUyYXFcuZVsws2by%2BoRVpU3Xm%2FsdUOV9r9AaoBqXjQm9ci8NigS%2FREiUR9fJ03b%2F455V8Sza1c6O9GSPTJaqv6gipMxSRoJZq%2FkC5gF2rUMeR6N%2BS%2BOAk0aF%2F629GWmcaEV1DP1gbDL%2F3loP1r0A0EUZh8M9TILpVkcqtffqMrKrPjbOXAcAOzhPzcXvW2XsQ1zWmtXkZhfOjjd01jEQSkZzZC00PA%2Fd9wKXStN1vLEvJGKqQmIWA6wpZS3mYYE8lK3r%2Bb1XhtmWB3CUJ1yawqAGM%2FfYwTAV56c%2BA872JQMpGfbVHyer1lnP2tYM%2Bt5iU2O7V0AJsUd%2BFcSej0tbH%2B0vOvGOxs9An2Y%2BBtcjf3bZ3p9r2siqpalwTQukxLVLsLza3iUdUGNSO%2FivBHej5OyVvcx3M7Jw%2FL78JAwIPIdhj1XLaeh9Ez1T%2F6Lsg170o3BeVKiRA6J56OkLcOCZdzChWp333YSQIgtq0n10VqwGU7%2FocFBMJGq18MGOqUB4OF0UqQ6tICLjmDjGvjrYsgppOioFv79Ofu3i56ZaWP8y97v3IrkGGUdIixfY2P8TNsQlt9coz4O1ZGs3RiwndmWjUZhIBnB7xf8VfZX2kbNt7Xe4Y%2BRikRtCqBbvyBvWHIXNABzK4TjRikuZgm7fFNqpe7wMrlat4Q%2FPuylprFSjVXo%2BaFRU2dMzzOfx6g0Te0mN8RHcROC84EhLWsPC%2FhxV8Bd&X-Amz-Signature=4a33a2309d4fdf43f277b4b2a91be88a39bc3abcdfa9ae48578ebaf6c293e6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC6T2AQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClezVgMrgvmQcLsBgNJkhFy7n%2BwEsrN3E1PRlkO7qGRgIgfhoG0y1owGPP6YE%2Fw4u7ZB5lOzoh0OlAM600cKPWpYwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOobOP3wOsBRvf0CgyrcAxTIONRMawTeKJOuWq%2FFrIrCTBF3qZE9ummLnLR7SPA4kcpEnIoRntnBAJGJfAeQ2RFJgfTOVr8uoBvwgTYOX6tGPAwzuKLLlj9qiWoSHJMWQEJFSeI0eP16a4XQd04%2FTGbv%2FyiHcFUyYXFcuZVsws2by%2BoRVpU3Xm%2FsdUOV9r9AaoBqXjQm9ci8NigS%2FREiUR9fJ03b%2F455V8Sza1c6O9GSPTJaqv6gipMxSRoJZq%2FkC5gF2rUMeR6N%2BS%2BOAk0aF%2F629GWmcaEV1DP1gbDL%2F3loP1r0A0EUZh8M9TILpVkcqtffqMrKrPjbOXAcAOzhPzcXvW2XsQ1zWmtXkZhfOjjd01jEQSkZzZC00PA%2Fd9wKXStN1vLEvJGKqQmIWA6wpZS3mYYE8lK3r%2Bb1XhtmWB3CUJ1yawqAGM%2FfYwTAV56c%2BA872JQMpGfbVHyer1lnP2tYM%2Bt5iU2O7V0AJsUd%2BFcSej0tbH%2B0vOvGOxs9An2Y%2BBtcjf3bZ3p9r2siqpalwTQukxLVLsLza3iUdUGNSO%2FivBHej5OyVvcx3M7Jw%2FL78JAwIPIdhj1XLaeh9Ez1T%2F6Lsg170o3BeVKiRA6J56OkLcOCZdzChWp333YSQIgtq0n10VqwGU7%2FocFBMJGq18MGOqUB4OF0UqQ6tICLjmDjGvjrYsgppOioFv79Ofu3i56ZaWP8y97v3IrkGGUdIixfY2P8TNsQlt9coz4O1ZGs3RiwndmWjUZhIBnB7xf8VfZX2kbNt7Xe4Y%2BRikRtCqBbvyBvWHIXNABzK4TjRikuZgm7fFNqpe7wMrlat4Q%2FPuylprFSjVXo%2BaFRU2dMzzOfx6g0Te0mN8RHcROC84EhLWsPC%2FhxV8Bd&X-Amz-Signature=3f49873a8a69772d416ca09c2fc7efe7d9dff7fb083f2911e3e71d4cd03cb5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
