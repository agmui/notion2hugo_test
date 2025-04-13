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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NS4C5K%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDyQPrOc2vxi8G%2FVBnfHy6CkzThMMXf1RoYnSocYTaRdgIgav%2BZayiCbtBdV0VXdOzirD8awJdYmWLHOdyjSPLjPDQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBVjTH6zuqgHC0AeircA1heybvUk4Nvx%2BK%2BidPkP6VdwnsNO8OLlFo5pFK6%2FKjPideI%2BRNx2755n9yyddXn6swRBcaZogPRM6GJqS7vr%2FgyICWpTLCDK0ZGokPsIMYqliqFiJs0U%2B7L3y6DkHZ33ESOqHFgD%2FN3E%2Fny%2FK84o0DHWEV%2FCewQOZ735VZ6RaLCAGuRG7phqquJYm8uH8smm7GhSoQsqnAjPYBAzIYZXB158It272qRee7xAmWCaCxHC4DgoTePVBcFlGIRtIo2jZD3LYRyBuH4GiyCxdjShvYMNrNgmpIelqk12q888FFLL69TzkfA8ozWRaSUQ%2BA7D2GUrWzzrzPad0Zu2z5QG%2BWzirxfS88evQDoE%2FtWXfVgo4SRSPgKfixUX%2BS7tSA6%2BKQLywbfoIkQYOPkijCGFHodCp%2Bq29ulnQyU76xdc88PP6hmcz32w6tNu4JKdlVy0cjihwY1xfIaMItDejIovi3hv23xQSxL8dz7Gu6Ia48X3Pv%2BaxbWeqvKL3kmlmICzIlbvQnRi%2FDLvJu8wwGfoKFNhssjryh9BDUkz%2FUylFKXsRs%2FU5WA2REV1CeixTx1ecMR%2B1ysKiUufzcw2nB99YLRzdG0LesSk3UaPbkSyAyu1W1YNc5bSPOYv3lgMMvh778GOqUBVkqznMH9TwjXYPomomYafuKu4bP3VcSLUF0IXO%2FTkFLqws1cWrT6ctUqvODX0UXwRSMF5qUaOA9%2BnsJfy0o8TW5w%2FmKUNDgSU6fYUksXfKQBk0B3PHMKeZijT9QcPOSSf0EAThu3yrlxieOgKP%2BDjPDLn%2BekP%2FXMSMmiZ%2B%2B14Pn7amw%2FX1Bb5nTiEvHSbVNyIQDAmEAUHd9qEQu7SiqMm6CghfyT&X-Amz-Signature=4ea7ea9ec3debd476339614fc7abd0e43477d9382802aef6154b99bfeff4d03c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NS4C5K%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDyQPrOc2vxi8G%2FVBnfHy6CkzThMMXf1RoYnSocYTaRdgIgav%2BZayiCbtBdV0VXdOzirD8awJdYmWLHOdyjSPLjPDQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBVjTH6zuqgHC0AeircA1heybvUk4Nvx%2BK%2BidPkP6VdwnsNO8OLlFo5pFK6%2FKjPideI%2BRNx2755n9yyddXn6swRBcaZogPRM6GJqS7vr%2FgyICWpTLCDK0ZGokPsIMYqliqFiJs0U%2B7L3y6DkHZ33ESOqHFgD%2FN3E%2Fny%2FK84o0DHWEV%2FCewQOZ735VZ6RaLCAGuRG7phqquJYm8uH8smm7GhSoQsqnAjPYBAzIYZXB158It272qRee7xAmWCaCxHC4DgoTePVBcFlGIRtIo2jZD3LYRyBuH4GiyCxdjShvYMNrNgmpIelqk12q888FFLL69TzkfA8ozWRaSUQ%2BA7D2GUrWzzrzPad0Zu2z5QG%2BWzirxfS88evQDoE%2FtWXfVgo4SRSPgKfixUX%2BS7tSA6%2BKQLywbfoIkQYOPkijCGFHodCp%2Bq29ulnQyU76xdc88PP6hmcz32w6tNu4JKdlVy0cjihwY1xfIaMItDejIovi3hv23xQSxL8dz7Gu6Ia48X3Pv%2BaxbWeqvKL3kmlmICzIlbvQnRi%2FDLvJu8wwGfoKFNhssjryh9BDUkz%2FUylFKXsRs%2FU5WA2REV1CeixTx1ecMR%2B1ysKiUufzcw2nB99YLRzdG0LesSk3UaPbkSyAyu1W1YNc5bSPOYv3lgMMvh778GOqUBVkqznMH9TwjXYPomomYafuKu4bP3VcSLUF0IXO%2FTkFLqws1cWrT6ctUqvODX0UXwRSMF5qUaOA9%2BnsJfy0o8TW5w%2FmKUNDgSU6fYUksXfKQBk0B3PHMKeZijT9QcPOSSf0EAThu3yrlxieOgKP%2BDjPDLn%2BekP%2FXMSMmiZ%2B%2B14Pn7amw%2FX1Bb5nTiEvHSbVNyIQDAmEAUHd9qEQu7SiqMm6CghfyT&X-Amz-Signature=61347a4a1e4520e35bfe490c98f58db031a78f002eb4d05bdb7dc29d2de133ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NS4C5K%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDyQPrOc2vxi8G%2FVBnfHy6CkzThMMXf1RoYnSocYTaRdgIgav%2BZayiCbtBdV0VXdOzirD8awJdYmWLHOdyjSPLjPDQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBVjTH6zuqgHC0AeircA1heybvUk4Nvx%2BK%2BidPkP6VdwnsNO8OLlFo5pFK6%2FKjPideI%2BRNx2755n9yyddXn6swRBcaZogPRM6GJqS7vr%2FgyICWpTLCDK0ZGokPsIMYqliqFiJs0U%2B7L3y6DkHZ33ESOqHFgD%2FN3E%2Fny%2FK84o0DHWEV%2FCewQOZ735VZ6RaLCAGuRG7phqquJYm8uH8smm7GhSoQsqnAjPYBAzIYZXB158It272qRee7xAmWCaCxHC4DgoTePVBcFlGIRtIo2jZD3LYRyBuH4GiyCxdjShvYMNrNgmpIelqk12q888FFLL69TzkfA8ozWRaSUQ%2BA7D2GUrWzzrzPad0Zu2z5QG%2BWzirxfS88evQDoE%2FtWXfVgo4SRSPgKfixUX%2BS7tSA6%2BKQLywbfoIkQYOPkijCGFHodCp%2Bq29ulnQyU76xdc88PP6hmcz32w6tNu4JKdlVy0cjihwY1xfIaMItDejIovi3hv23xQSxL8dz7Gu6Ia48X3Pv%2BaxbWeqvKL3kmlmICzIlbvQnRi%2FDLvJu8wwGfoKFNhssjryh9BDUkz%2FUylFKXsRs%2FU5WA2REV1CeixTx1ecMR%2B1ysKiUufzcw2nB99YLRzdG0LesSk3UaPbkSyAyu1W1YNc5bSPOYv3lgMMvh778GOqUBVkqznMH9TwjXYPomomYafuKu4bP3VcSLUF0IXO%2FTkFLqws1cWrT6ctUqvODX0UXwRSMF5qUaOA9%2BnsJfy0o8TW5w%2FmKUNDgSU6fYUksXfKQBk0B3PHMKeZijT9QcPOSSf0EAThu3yrlxieOgKP%2BDjPDLn%2BekP%2FXMSMmiZ%2B%2B14Pn7amw%2FX1Bb5nTiEvHSbVNyIQDAmEAUHd9qEQu7SiqMm6CghfyT&X-Amz-Signature=e424528aaea6c2050826b755c331b77b2dc7b51f22ada4fb2a37b6aad7b1cca6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
