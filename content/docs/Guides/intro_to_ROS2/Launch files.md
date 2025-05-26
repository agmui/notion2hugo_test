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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYZDGPJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDnFRYi8pRr6hyW24cO5y%2Fd0UWjHPb5zgGSOJ3yVNPHDAiEA%2BQ7kgs348vqc%2Boafu%2Fn2w8%2BffUmfqjP67AUchepKSwIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHINx%2FXHZGdP0kSDnyrcA%2B%2FfXaThjlhffd0d8WF17L04NwYy%2BLtz0Cw5KF43%2BYENwR19D4HgmErmx%2Bfj1TJvHmx2kZ6xltyC3v%2BNVEGBVjBQes4aWzJ0ZWmsymmQXHkKaZemt7kbboA6VRRc%2Bo%2BbHF1FkYxkSEyJpVmjRDxeEumN3q1f3ElQsDeUkJYf4kl8MYTytFD4haX%2BjdttTU7S%2FJmIo4x%2F7mCYtO95uLPbUP%2BsFuj3mylzFLNHoN5MaED6tSeySe3129PIoccgP4F3pw09SQ9TP%2BqBskEnhikCW6HFCBAUXo69%2BoGJNeqAQfBP1i1di4XE5sg1SPc2FKsvsZ9lDaFaD8JsgRrj4MD%2BqF%2BmhkCqQzEQNOPAwnuwBPsMj%2FxKoQS%2FwcG81cG49vJMkUXmatS2%2FuAkJs6CWJ15NpGUMRzsKRvByBx0gZ%2BOmTu539Gvbiw3G8vg1DZuqyjdVGLTHqXo4YBJK3LU1xi146BJmso%2FZBhfmjnH%2B2Hs49p3KKeWXB25A%2BK0DMZU00kEi9pDU5Zgiccv3GiEo2WDOq1PUJEFdrZcitZM29rO%2F5EVOsfH5pW0hnfOvDMWfmWx6Ikk4hsaUMSppFqqRfu7xXk39duhPc9V6nb55i4C5lwzegc3Y55YM97XFgTUMK6qzsEGOqUB5nBgYh5%2BVQaLq8p9iCSpzGWoptfiJOor3fSCQ%2FrMLzmplINhlyLBW2QrSrwUzOHaEk8GG20jtC8jLEwqY0sko2p4xYviU9hWFx0ZVpEij5fFNQqAD3DnSezJATQG1uNVpXMxQlTI2SV0YGTsIiJHjTwQL77CMyDB9Fu6zivmZSY2ksRhmlVE95559raZGLYKF6eGnzqAMVWyC%2FJc1X%2BAFc%2F5nCZz&X-Amz-Signature=7bbfb6604c6a27412e66b2054040f80d284987627fd666fbf618918eb9a49c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYZDGPJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDnFRYi8pRr6hyW24cO5y%2Fd0UWjHPb5zgGSOJ3yVNPHDAiEA%2BQ7kgs348vqc%2Boafu%2Fn2w8%2BffUmfqjP67AUchepKSwIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHINx%2FXHZGdP0kSDnyrcA%2B%2FfXaThjlhffd0d8WF17L04NwYy%2BLtz0Cw5KF43%2BYENwR19D4HgmErmx%2Bfj1TJvHmx2kZ6xltyC3v%2BNVEGBVjBQes4aWzJ0ZWmsymmQXHkKaZemt7kbboA6VRRc%2Bo%2BbHF1FkYxkSEyJpVmjRDxeEumN3q1f3ElQsDeUkJYf4kl8MYTytFD4haX%2BjdttTU7S%2FJmIo4x%2F7mCYtO95uLPbUP%2BsFuj3mylzFLNHoN5MaED6tSeySe3129PIoccgP4F3pw09SQ9TP%2BqBskEnhikCW6HFCBAUXo69%2BoGJNeqAQfBP1i1di4XE5sg1SPc2FKsvsZ9lDaFaD8JsgRrj4MD%2BqF%2BmhkCqQzEQNOPAwnuwBPsMj%2FxKoQS%2FwcG81cG49vJMkUXmatS2%2FuAkJs6CWJ15NpGUMRzsKRvByBx0gZ%2BOmTu539Gvbiw3G8vg1DZuqyjdVGLTHqXo4YBJK3LU1xi146BJmso%2FZBhfmjnH%2B2Hs49p3KKeWXB25A%2BK0DMZU00kEi9pDU5Zgiccv3GiEo2WDOq1PUJEFdrZcitZM29rO%2F5EVOsfH5pW0hnfOvDMWfmWx6Ikk4hsaUMSppFqqRfu7xXk39duhPc9V6nb55i4C5lwzegc3Y55YM97XFgTUMK6qzsEGOqUB5nBgYh5%2BVQaLq8p9iCSpzGWoptfiJOor3fSCQ%2FrMLzmplINhlyLBW2QrSrwUzOHaEk8GG20jtC8jLEwqY0sko2p4xYviU9hWFx0ZVpEij5fFNQqAD3DnSezJATQG1uNVpXMxQlTI2SV0YGTsIiJHjTwQL77CMyDB9Fu6zivmZSY2ksRhmlVE95559raZGLYKF6eGnzqAMVWyC%2FJc1X%2BAFc%2F5nCZz&X-Amz-Signature=a4133027af0db5d09ba701bd1c8f9d118b362a1d7203c915a966f2d5b43f8f59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYZDGPJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDnFRYi8pRr6hyW24cO5y%2Fd0UWjHPb5zgGSOJ3yVNPHDAiEA%2BQ7kgs348vqc%2Boafu%2Fn2w8%2BffUmfqjP67AUchepKSwIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHINx%2FXHZGdP0kSDnyrcA%2B%2FfXaThjlhffd0d8WF17L04NwYy%2BLtz0Cw5KF43%2BYENwR19D4HgmErmx%2Bfj1TJvHmx2kZ6xltyC3v%2BNVEGBVjBQes4aWzJ0ZWmsymmQXHkKaZemt7kbboA6VRRc%2Bo%2BbHF1FkYxkSEyJpVmjRDxeEumN3q1f3ElQsDeUkJYf4kl8MYTytFD4haX%2BjdttTU7S%2FJmIo4x%2F7mCYtO95uLPbUP%2BsFuj3mylzFLNHoN5MaED6tSeySe3129PIoccgP4F3pw09SQ9TP%2BqBskEnhikCW6HFCBAUXo69%2BoGJNeqAQfBP1i1di4XE5sg1SPc2FKsvsZ9lDaFaD8JsgRrj4MD%2BqF%2BmhkCqQzEQNOPAwnuwBPsMj%2FxKoQS%2FwcG81cG49vJMkUXmatS2%2FuAkJs6CWJ15NpGUMRzsKRvByBx0gZ%2BOmTu539Gvbiw3G8vg1DZuqyjdVGLTHqXo4YBJK3LU1xi146BJmso%2FZBhfmjnH%2B2Hs49p3KKeWXB25A%2BK0DMZU00kEi9pDU5Zgiccv3GiEo2WDOq1PUJEFdrZcitZM29rO%2F5EVOsfH5pW0hnfOvDMWfmWx6Ikk4hsaUMSppFqqRfu7xXk39duhPc9V6nb55i4C5lwzegc3Y55YM97XFgTUMK6qzsEGOqUB5nBgYh5%2BVQaLq8p9iCSpzGWoptfiJOor3fSCQ%2FrMLzmplINhlyLBW2QrSrwUzOHaEk8GG20jtC8jLEwqY0sko2p4xYviU9hWFx0ZVpEij5fFNQqAD3DnSezJATQG1uNVpXMxQlTI2SV0YGTsIiJHjTwQL77CMyDB9Fu6zivmZSY2ksRhmlVE95559raZGLYKF6eGnzqAMVWyC%2FJc1X%2BAFc%2F5nCZz&X-Amz-Signature=e4f39aadb45f8ac33c137e4c7b33917f23f14e0db592d4e5dda93ad453afab84&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
