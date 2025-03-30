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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJ6TG64%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIA%2BKaU1aaORntwH%2Bae4bymgpJuePSrQMM4GoBOpCUpykAiBViGopcmjNLiS30QdiWXMVlga%2B7sja1uoe4%2B1xMXq%2F2CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQryJ5EeOVg47HOiKtwDonHjSPu8NsBpno8Kly5Dq8Wp7F7JUHCCGp8l1L7pYMJwiIeW6L008xCSJ3gjiTR7On2ZrA6vKyxwQdbHaWNlBULez%2FXF00K8NizunCfCGukkvQsj9%2BOe1ATjyw1vokQo0wyGmhAUZV28U5xoVFz3yH8wBcHqhzC2REc%2Bzv1zk7x%2B%2Fgjrq3M0uFzqC5RsR8m2Fi2lOKknSxhCGKlEZNAgMfvS49tu%2Fo09rMRjkp1k%2BV6kf4oTnqyofMGxfO9Pa%2BT3b2topavzL07teaX7lERPTZ9yWD%2BifxGVKp%2B%2ByzQwKRq5M3sJ94HVrt6UWpOgpl4Wq29NTPWcGJbEgKAgLRM9c77c7zYf0LpzQ7IDXmkKFJr1Cjp%2BDPWDDff3kz%2BCNR4l6%2Fc%2BRXVIOpIbK%2B5d0f%2BrZ9l3rwgamLAh1SqRur3tUCyCHu5NPexowsJaWGqH78lEzSuXwYbOGBMBgtXqFukoBRejKIpHX%2BERiGC0nAGjXs201Ceik65M%2BTakOwpzq2HP%2FMAyu8aNU3yiPVrykACPYqXgdudkzxOEEpgjU1%2BJb5nJ%2FyEZfYaeCbvxKanle5eZXBMTr%2BGaOX1aUX88gZu3V1HgfdjkaMzhO4dnve8vmj1RCqPWv7M4ZHwociUw5OmivwY6pgHTTVwEAaZPlBHrcLAsmPuUlSjuI262BKaMsYR%2F74f1z3DimFoUwdu5RUSuu4KevB5foloe%2FGgshU3Lv2na0eLMcyqUqzVvdBYTttA%2BLpU1jqltK2petgs27S%2BhKkA9gWqIQuwdtm%2Bf5rXDtxMqLabCNTUshIw9OMOCNzILoP9jpXEPSGD%2FLvecHs1LLcfiP5yH3TubQ%2F%2Fo3ZZ3sq8XX%2BnQ1OGz4nsb&X-Amz-Signature=5f1ab5dffa31290fdf066a19f35891a547a3e992bc8a7f3ccc8a85f085760ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJ6TG64%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIA%2BKaU1aaORntwH%2Bae4bymgpJuePSrQMM4GoBOpCUpykAiBViGopcmjNLiS30QdiWXMVlga%2B7sja1uoe4%2B1xMXq%2F2CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQryJ5EeOVg47HOiKtwDonHjSPu8NsBpno8Kly5Dq8Wp7F7JUHCCGp8l1L7pYMJwiIeW6L008xCSJ3gjiTR7On2ZrA6vKyxwQdbHaWNlBULez%2FXF00K8NizunCfCGukkvQsj9%2BOe1ATjyw1vokQo0wyGmhAUZV28U5xoVFz3yH8wBcHqhzC2REc%2Bzv1zk7x%2B%2Fgjrq3M0uFzqC5RsR8m2Fi2lOKknSxhCGKlEZNAgMfvS49tu%2Fo09rMRjkp1k%2BV6kf4oTnqyofMGxfO9Pa%2BT3b2topavzL07teaX7lERPTZ9yWD%2BifxGVKp%2B%2ByzQwKRq5M3sJ94HVrt6UWpOgpl4Wq29NTPWcGJbEgKAgLRM9c77c7zYf0LpzQ7IDXmkKFJr1Cjp%2BDPWDDff3kz%2BCNR4l6%2Fc%2BRXVIOpIbK%2B5d0f%2BrZ9l3rwgamLAh1SqRur3tUCyCHu5NPexowsJaWGqH78lEzSuXwYbOGBMBgtXqFukoBRejKIpHX%2BERiGC0nAGjXs201Ceik65M%2BTakOwpzq2HP%2FMAyu8aNU3yiPVrykACPYqXgdudkzxOEEpgjU1%2BJb5nJ%2FyEZfYaeCbvxKanle5eZXBMTr%2BGaOX1aUX88gZu3V1HgfdjkaMzhO4dnve8vmj1RCqPWv7M4ZHwociUw5OmivwY6pgHTTVwEAaZPlBHrcLAsmPuUlSjuI262BKaMsYR%2F74f1z3DimFoUwdu5RUSuu4KevB5foloe%2FGgshU3Lv2na0eLMcyqUqzVvdBYTttA%2BLpU1jqltK2petgs27S%2BhKkA9gWqIQuwdtm%2Bf5rXDtxMqLabCNTUshIw9OMOCNzILoP9jpXEPSGD%2FLvecHs1LLcfiP5yH3TubQ%2F%2Fo3ZZ3sq8XX%2BnQ1OGz4nsb&X-Amz-Signature=0a825f5595f10f45b2806235ac84aa0e429f309ab8fbaf487d3b772967d236ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJ6TG64%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIA%2BKaU1aaORntwH%2Bae4bymgpJuePSrQMM4GoBOpCUpykAiBViGopcmjNLiS30QdiWXMVlga%2B7sja1uoe4%2B1xMXq%2F2CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQryJ5EeOVg47HOiKtwDonHjSPu8NsBpno8Kly5Dq8Wp7F7JUHCCGp8l1L7pYMJwiIeW6L008xCSJ3gjiTR7On2ZrA6vKyxwQdbHaWNlBULez%2FXF00K8NizunCfCGukkvQsj9%2BOe1ATjyw1vokQo0wyGmhAUZV28U5xoVFz3yH8wBcHqhzC2REc%2Bzv1zk7x%2B%2Fgjrq3M0uFzqC5RsR8m2Fi2lOKknSxhCGKlEZNAgMfvS49tu%2Fo09rMRjkp1k%2BV6kf4oTnqyofMGxfO9Pa%2BT3b2topavzL07teaX7lERPTZ9yWD%2BifxGVKp%2B%2ByzQwKRq5M3sJ94HVrt6UWpOgpl4Wq29NTPWcGJbEgKAgLRM9c77c7zYf0LpzQ7IDXmkKFJr1Cjp%2BDPWDDff3kz%2BCNR4l6%2Fc%2BRXVIOpIbK%2B5d0f%2BrZ9l3rwgamLAh1SqRur3tUCyCHu5NPexowsJaWGqH78lEzSuXwYbOGBMBgtXqFukoBRejKIpHX%2BERiGC0nAGjXs201Ceik65M%2BTakOwpzq2HP%2FMAyu8aNU3yiPVrykACPYqXgdudkzxOEEpgjU1%2BJb5nJ%2FyEZfYaeCbvxKanle5eZXBMTr%2BGaOX1aUX88gZu3V1HgfdjkaMzhO4dnve8vmj1RCqPWv7M4ZHwociUw5OmivwY6pgHTTVwEAaZPlBHrcLAsmPuUlSjuI262BKaMsYR%2F74f1z3DimFoUwdu5RUSuu4KevB5foloe%2FGgshU3Lv2na0eLMcyqUqzVvdBYTttA%2BLpU1jqltK2petgs27S%2BhKkA9gWqIQuwdtm%2Bf5rXDtxMqLabCNTUshIw9OMOCNzILoP9jpXEPSGD%2FLvecHs1LLcfiP5yH3TubQ%2F%2Fo3ZZ3sq8XX%2BnQ1OGz4nsb&X-Amz-Signature=7bd32b9c1f29aaec36308163351b1d600d2db31236ecc0b029144a85844308dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
