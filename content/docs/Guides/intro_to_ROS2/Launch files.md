---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGFHODZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBbXkpkCxRa%2FHTwovVQoHGgGatnfioHhS6IvFnY4hVE2AiEAia0804HwhnVghUw94a1%2BaE7mcG0dHmUuw9gwHCCYx8Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBkfD%2BscjQdh3SBZyyrcA6bNC7AohkU341XueX1rEvTO51ps0WeVcqeekXiTE5o3%2BrEdkM9M6mm%2B8KImx8SlUEG%2FmoCO9M2%2F%2BewncQHiXB20FmzyEmaK%2FTYxMJAlad8bWDrfwQs%2Fwz0%2FM4gncYSCOEzZoc%2BReLIlndtWMueVWnDG2tO7ELWoYEPqeXyryNE5hvgWC6ZG2XIckXhMtv0x%2FpTqotwy3OtoA%2BTgPVYBiVEpW44Yt8rPsqUU9mlqYiXFoH4P%2FlXCrDma0LJ7IhSp2Xvtc6uyxOWZHkz9mhVkLH7R6ptKAyYVi4FjD9hFyZq%2BeNqERK72Vt8NJz80Lcoph8xKIXn1fGNLvQucOXg0ndnfniViR%2FoLJtd63XHfDoZNqOPkOIO8VNnTI7LUOKa5Wk7iFJeJGngXwzesvJJjpjZH9f%2BKn6NtShWABzUJi3xQvF1Ih3hB9ItIBnSdrmvp5UW%2BmrGDipj4Z%2FslAYXKtNhVQAidP5QBZP9GRY5U087RH%2BzHs1umsQoBFlQGlxSxV1C9AXUnVRaC4za7rLMgMUWk28zD%2BV%2Bs66AIDcVIu3njjzOPQV4cx63FiiS%2BRBFi77zlU5p51gwv9LaDuBYc88O4%2FLMkY3hq6gNN%2FaNU0kNvDr2Mzc8I3mcHqas2MPnUl8QGOqUBmmnkwpQ%2FEJAwbOrlk%2Fsykx58JlheR%2BzaCjM9TNw0jjOTqr6SX0A4z6dY8QMWSKzHdpTZR31SLcZdO46NwzSh0%2FnwPZ2iydfnuzin4nj%2B3QeDuMJACPa7meu%2FTc7YhlwZf7sKBkXOdlHW%2F2MqHzNz1apkLlD%2FTj9rqoe1GBeYCIMIba2QTc56lHjnX1N%2B%2BJzMVpHzlhGp2vGVYXp%2BtljPYYcp4%2F%2Fa&X-Amz-Signature=aacc6fd8089035841dc96f1e5d0783f11ca69780c68fb86626aa3f0f6ca49637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGFHODZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBbXkpkCxRa%2FHTwovVQoHGgGatnfioHhS6IvFnY4hVE2AiEAia0804HwhnVghUw94a1%2BaE7mcG0dHmUuw9gwHCCYx8Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBkfD%2BscjQdh3SBZyyrcA6bNC7AohkU341XueX1rEvTO51ps0WeVcqeekXiTE5o3%2BrEdkM9M6mm%2B8KImx8SlUEG%2FmoCO9M2%2F%2BewncQHiXB20FmzyEmaK%2FTYxMJAlad8bWDrfwQs%2Fwz0%2FM4gncYSCOEzZoc%2BReLIlndtWMueVWnDG2tO7ELWoYEPqeXyryNE5hvgWC6ZG2XIckXhMtv0x%2FpTqotwy3OtoA%2BTgPVYBiVEpW44Yt8rPsqUU9mlqYiXFoH4P%2FlXCrDma0LJ7IhSp2Xvtc6uyxOWZHkz9mhVkLH7R6ptKAyYVi4FjD9hFyZq%2BeNqERK72Vt8NJz80Lcoph8xKIXn1fGNLvQucOXg0ndnfniViR%2FoLJtd63XHfDoZNqOPkOIO8VNnTI7LUOKa5Wk7iFJeJGngXwzesvJJjpjZH9f%2BKn6NtShWABzUJi3xQvF1Ih3hB9ItIBnSdrmvp5UW%2BmrGDipj4Z%2FslAYXKtNhVQAidP5QBZP9GRY5U087RH%2BzHs1umsQoBFlQGlxSxV1C9AXUnVRaC4za7rLMgMUWk28zD%2BV%2Bs66AIDcVIu3njjzOPQV4cx63FiiS%2BRBFi77zlU5p51gwv9LaDuBYc88O4%2FLMkY3hq6gNN%2FaNU0kNvDr2Mzc8I3mcHqas2MPnUl8QGOqUBmmnkwpQ%2FEJAwbOrlk%2Fsykx58JlheR%2BzaCjM9TNw0jjOTqr6SX0A4z6dY8QMWSKzHdpTZR31SLcZdO46NwzSh0%2FnwPZ2iydfnuzin4nj%2B3QeDuMJACPa7meu%2FTc7YhlwZf7sKBkXOdlHW%2F2MqHzNz1apkLlD%2FTj9rqoe1GBeYCIMIba2QTc56lHjnX1N%2B%2BJzMVpHzlhGp2vGVYXp%2BtljPYYcp4%2F%2Fa&X-Amz-Signature=4b5c5ea045691b7625b403ea6d2d92a5d2db2041e991e186b839eaca7c3da9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGFHODZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBbXkpkCxRa%2FHTwovVQoHGgGatnfioHhS6IvFnY4hVE2AiEAia0804HwhnVghUw94a1%2BaE7mcG0dHmUuw9gwHCCYx8Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBkfD%2BscjQdh3SBZyyrcA6bNC7AohkU341XueX1rEvTO51ps0WeVcqeekXiTE5o3%2BrEdkM9M6mm%2B8KImx8SlUEG%2FmoCO9M2%2F%2BewncQHiXB20FmzyEmaK%2FTYxMJAlad8bWDrfwQs%2Fwz0%2FM4gncYSCOEzZoc%2BReLIlndtWMueVWnDG2tO7ELWoYEPqeXyryNE5hvgWC6ZG2XIckXhMtv0x%2FpTqotwy3OtoA%2BTgPVYBiVEpW44Yt8rPsqUU9mlqYiXFoH4P%2FlXCrDma0LJ7IhSp2Xvtc6uyxOWZHkz9mhVkLH7R6ptKAyYVi4FjD9hFyZq%2BeNqERK72Vt8NJz80Lcoph8xKIXn1fGNLvQucOXg0ndnfniViR%2FoLJtd63XHfDoZNqOPkOIO8VNnTI7LUOKa5Wk7iFJeJGngXwzesvJJjpjZH9f%2BKn6NtShWABzUJi3xQvF1Ih3hB9ItIBnSdrmvp5UW%2BmrGDipj4Z%2FslAYXKtNhVQAidP5QBZP9GRY5U087RH%2BzHs1umsQoBFlQGlxSxV1C9AXUnVRaC4za7rLMgMUWk28zD%2BV%2Bs66AIDcVIu3njjzOPQV4cx63FiiS%2BRBFi77zlU5p51gwv9LaDuBYc88O4%2FLMkY3hq6gNN%2FaNU0kNvDr2Mzc8I3mcHqas2MPnUl8QGOqUBmmnkwpQ%2FEJAwbOrlk%2Fsykx58JlheR%2BzaCjM9TNw0jjOTqr6SX0A4z6dY8QMWSKzHdpTZR31SLcZdO46NwzSh0%2FnwPZ2iydfnuzin4nj%2B3QeDuMJACPa7meu%2FTc7YhlwZf7sKBkXOdlHW%2F2MqHzNz1apkLlD%2FTj9rqoe1GBeYCIMIba2QTc56lHjnX1N%2B%2BJzMVpHzlhGp2vGVYXp%2BtljPYYcp4%2F%2Fa&X-Amz-Signature=4ec245a6b8b685cf3060dd49bd7cf36a0e6c817fc74bbd573953d6eb351cf8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
