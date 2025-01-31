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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5J2GBEW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPbRAfvjCwvYMEricRsvjURYLhy%2FcpO5D5CHOfvjJliAiByyJi3oIq3D%2Be993CqF5T5L76175I1uhYErXruL5SiAiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP8VJAfWkKzoLjOI%2BKtwDD660FIPdU%2BYKZ8sh%2B8hLWnVzcpeEImUJLmf22iWO5BulyIHEwfDXJHVsyoPQYSombaolNgckWcyhxodLTc%2B3OFQt5SUmgAkr9n%2F69zOfqRbM45l5h%2BeNQLXIWlBYgDgce1uX3TYsnvF1kpygdILLvkanqe3AhIXRbLQoBreU8Bin3oFXcSiKfRYwhzRDBvoeohdzO0tkwkK4k16U0R6rw%2Fpq8%2FIryINZ4%2BxAAF%2FymS1247A34mCNp%2BngiZCmkUy3F2vF9Y7SpJO7Qi2Bu8nve%2BUWouXcz3GkayidKWTUzE7flrz1VohfWtr7sUgdIihKFbzC7fWVK6a03%2Fx%2BRUyMdsUnXrKlJuqhSLoHwsWTe5A101Se8MI%2FCoXTJBPwlFmkWpLQNuQYG9EyvYcfcCNtd3syMcgDvhtmQgvc3jWLZVywAC0WSIQHZQcQ3ZYDH%2FT%2BmnUroe4r55TIXigK9C44X5h24IxF3mIrtXOPGrgqMbUAo1LROe9RGMaAoUXsBfzRZYMWB69DG%2Fggyw7%2FWBcaRKpM5N4DdKsyAY899z2GWOYyJfMMRc9VZzzh2Ww6xYWtAeF0U2lttQ8EaBBBLoshRWHj09lqcM4iQPKZtEfHwkdqkAbsuKfR6AKfWTcw%2F5DzvAY6pgEH8K7jthGCRkxbTVyUpFw6PZXG7OqyEe0ORTcUaJcQNrOuabyTvI3O3GoAFdYqNd8cmVQ%2Bezq8PNL4V2xs4C5jsOyy1OaR48nJDqpNy5GOPJJlM89LWOwajXoSsLGt9mophxDAgIagweHq1FX7xF2CF6meEsIUqYoACQm4LBbnCEsV9KA0td0JX7FuouAbw6wxsxYitNaumH3L6DQeP1bGSrgV8690&X-Amz-Signature=110552d132d78f2235472b6d4448a9a65f3183071cf725547fb58e1e46a7eb57&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5J2GBEW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPbRAfvjCwvYMEricRsvjURYLhy%2FcpO5D5CHOfvjJliAiByyJi3oIq3D%2Be993CqF5T5L76175I1uhYErXruL5SiAiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP8VJAfWkKzoLjOI%2BKtwDD660FIPdU%2BYKZ8sh%2B8hLWnVzcpeEImUJLmf22iWO5BulyIHEwfDXJHVsyoPQYSombaolNgckWcyhxodLTc%2B3OFQt5SUmgAkr9n%2F69zOfqRbM45l5h%2BeNQLXIWlBYgDgce1uX3TYsnvF1kpygdILLvkanqe3AhIXRbLQoBreU8Bin3oFXcSiKfRYwhzRDBvoeohdzO0tkwkK4k16U0R6rw%2Fpq8%2FIryINZ4%2BxAAF%2FymS1247A34mCNp%2BngiZCmkUy3F2vF9Y7SpJO7Qi2Bu8nve%2BUWouXcz3GkayidKWTUzE7flrz1VohfWtr7sUgdIihKFbzC7fWVK6a03%2Fx%2BRUyMdsUnXrKlJuqhSLoHwsWTe5A101Se8MI%2FCoXTJBPwlFmkWpLQNuQYG9EyvYcfcCNtd3syMcgDvhtmQgvc3jWLZVywAC0WSIQHZQcQ3ZYDH%2FT%2BmnUroe4r55TIXigK9C44X5h24IxF3mIrtXOPGrgqMbUAo1LROe9RGMaAoUXsBfzRZYMWB69DG%2Fggyw7%2FWBcaRKpM5N4DdKsyAY899z2GWOYyJfMMRc9VZzzh2Ww6xYWtAeF0U2lttQ8EaBBBLoshRWHj09lqcM4iQPKZtEfHwkdqkAbsuKfR6AKfWTcw%2F5DzvAY6pgEH8K7jthGCRkxbTVyUpFw6PZXG7OqyEe0ORTcUaJcQNrOuabyTvI3O3GoAFdYqNd8cmVQ%2Bezq8PNL4V2xs4C5jsOyy1OaR48nJDqpNy5GOPJJlM89LWOwajXoSsLGt9mophxDAgIagweHq1FX7xF2CF6meEsIUqYoACQm4LBbnCEsV9KA0td0JX7FuouAbw6wxsxYitNaumH3L6DQeP1bGSrgV8690&X-Amz-Signature=87485c72cebbeaa566c6d6978d061bef136d779146d6ec3aa81be61f56ef011b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5J2GBEW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPbRAfvjCwvYMEricRsvjURYLhy%2FcpO5D5CHOfvjJliAiByyJi3oIq3D%2Be993CqF5T5L76175I1uhYErXruL5SiAiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP8VJAfWkKzoLjOI%2BKtwDD660FIPdU%2BYKZ8sh%2B8hLWnVzcpeEImUJLmf22iWO5BulyIHEwfDXJHVsyoPQYSombaolNgckWcyhxodLTc%2B3OFQt5SUmgAkr9n%2F69zOfqRbM45l5h%2BeNQLXIWlBYgDgce1uX3TYsnvF1kpygdILLvkanqe3AhIXRbLQoBreU8Bin3oFXcSiKfRYwhzRDBvoeohdzO0tkwkK4k16U0R6rw%2Fpq8%2FIryINZ4%2BxAAF%2FymS1247A34mCNp%2BngiZCmkUy3F2vF9Y7SpJO7Qi2Bu8nve%2BUWouXcz3GkayidKWTUzE7flrz1VohfWtr7sUgdIihKFbzC7fWVK6a03%2Fx%2BRUyMdsUnXrKlJuqhSLoHwsWTe5A101Se8MI%2FCoXTJBPwlFmkWpLQNuQYG9EyvYcfcCNtd3syMcgDvhtmQgvc3jWLZVywAC0WSIQHZQcQ3ZYDH%2FT%2BmnUroe4r55TIXigK9C44X5h24IxF3mIrtXOPGrgqMbUAo1LROe9RGMaAoUXsBfzRZYMWB69DG%2Fggyw7%2FWBcaRKpM5N4DdKsyAY899z2GWOYyJfMMRc9VZzzh2Ww6xYWtAeF0U2lttQ8EaBBBLoshRWHj09lqcM4iQPKZtEfHwkdqkAbsuKfR6AKfWTcw%2F5DzvAY6pgEH8K7jthGCRkxbTVyUpFw6PZXG7OqyEe0ORTcUaJcQNrOuabyTvI3O3GoAFdYqNd8cmVQ%2Bezq8PNL4V2xs4C5jsOyy1OaR48nJDqpNy5GOPJJlM89LWOwajXoSsLGt9mophxDAgIagweHq1FX7xF2CF6meEsIUqYoACQm4LBbnCEsV9KA0td0JX7FuouAbw6wxsxYitNaumH3L6DQeP1bGSrgV8690&X-Amz-Signature=9b91211b1b480c69f63cc08c1033b580fa97e8b1a473f8022227aa48ad84058b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
