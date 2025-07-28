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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ5H3SF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD6xbF6ZOTlq9ifaU17kUKYaWTp7KGMlO1SL1iZ%2F1GHVAIhAImrefyp61XOzjxXlepi4xNZCEEp3Ui01v0S2%2FfvokcyKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiEq95456ApBoxUCsq3APYm9x0YSS9e8sa88OT2lUVVqr9AFgjS0wLGtzxe67%2BJmGnQ4oXtK3r1caW5UjmhfYUmoFxYR%2F52HRm4QJxvr11FYnMuCYgHx0uoDHrq0q002B7BwC6MJ%2FilK2A4Tp3qQuVNfqrBDeR9BJFlL2n%2BfSI96hsk8YMFRtobY06ykpGza90UDMU%2BnOt3bgOnjGq8cKcjcAlEkW94ilrCgwYJReVYY4rRjNriWIcf%2BPv%2FZwMn1LycT%2FbCVY5%2BUZohmBAJ5OsUTZ9YblAA1wdfUq%2FJ4bmqt0RLEaQPbGplkX6fnjZwnUn7dI28VbHEtCzm%2BcBeHc5Hh9jlZ7xftg%2ByceU33X3GXcv8VjI0opYfg0WvYKjhuGPtNZdYDujp5YAvccA8iHGAR3cFZwRhvJl5S4O5L%2FUIR8ysQzKg3Fg4A9f61cvyFk7H%2FKfEOiC%2FkR65FOlIBnBvUM0dBdJIPqpGB3lrL0zm38%2Bkxk11D1XO0FjD04NiDo5m27Rb1ceiEYtSSoWEc9RWVYxJK2%2FAVm3njSRxHUvJCeBcMIYZ%2FZWzsiYl42S6G3tNkGEkiCmRIVxqB0lGYQoi6u3lXw%2B6sGreBBbDbZHwj62UxbOmmBwxC0Y%2BIvrNc36C8bZ8ENChu2Q9zDAk5vEBjqkAd1XNOIekk8Rs4Mi6tD69%2Fu7iLqM3XVdqSnjAcY7ivZBkc7Wlweoo6hV5QyayS%2FDFzPM4KsdbaPT14wpKOjURJiF9XqnfqW2xfllC%2BHbWqVDXbvLxnKudMF9KAP4khzJjN4zf9tTNf403Xo%2BUqqC2ke74vYCWqIPY1Cvt8uRvxQOqSLIFln7jSUTv8q26Xi0qTWMJ8ORM%2BarWQL8Lvs%2BVnc86%2Bc1&X-Amz-Signature=88ea3134c3cd9a2c91cb9eb4d973a4d8d676da8d93c38814adbf3fc881e9701e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ5H3SF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD6xbF6ZOTlq9ifaU17kUKYaWTp7KGMlO1SL1iZ%2F1GHVAIhAImrefyp61XOzjxXlepi4xNZCEEp3Ui01v0S2%2FfvokcyKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiEq95456ApBoxUCsq3APYm9x0YSS9e8sa88OT2lUVVqr9AFgjS0wLGtzxe67%2BJmGnQ4oXtK3r1caW5UjmhfYUmoFxYR%2F52HRm4QJxvr11FYnMuCYgHx0uoDHrq0q002B7BwC6MJ%2FilK2A4Tp3qQuVNfqrBDeR9BJFlL2n%2BfSI96hsk8YMFRtobY06ykpGza90UDMU%2BnOt3bgOnjGq8cKcjcAlEkW94ilrCgwYJReVYY4rRjNriWIcf%2BPv%2FZwMn1LycT%2FbCVY5%2BUZohmBAJ5OsUTZ9YblAA1wdfUq%2FJ4bmqt0RLEaQPbGplkX6fnjZwnUn7dI28VbHEtCzm%2BcBeHc5Hh9jlZ7xftg%2ByceU33X3GXcv8VjI0opYfg0WvYKjhuGPtNZdYDujp5YAvccA8iHGAR3cFZwRhvJl5S4O5L%2FUIR8ysQzKg3Fg4A9f61cvyFk7H%2FKfEOiC%2FkR65FOlIBnBvUM0dBdJIPqpGB3lrL0zm38%2Bkxk11D1XO0FjD04NiDo5m27Rb1ceiEYtSSoWEc9RWVYxJK2%2FAVm3njSRxHUvJCeBcMIYZ%2FZWzsiYl42S6G3tNkGEkiCmRIVxqB0lGYQoi6u3lXw%2B6sGreBBbDbZHwj62UxbOmmBwxC0Y%2BIvrNc36C8bZ8ENChu2Q9zDAk5vEBjqkAd1XNOIekk8Rs4Mi6tD69%2Fu7iLqM3XVdqSnjAcY7ivZBkc7Wlweoo6hV5QyayS%2FDFzPM4KsdbaPT14wpKOjURJiF9XqnfqW2xfllC%2BHbWqVDXbvLxnKudMF9KAP4khzJjN4zf9tTNf403Xo%2BUqqC2ke74vYCWqIPY1Cvt8uRvxQOqSLIFln7jSUTv8q26Xi0qTWMJ8ORM%2BarWQL8Lvs%2BVnc86%2Bc1&X-Amz-Signature=533f9bc3b0316dd7e488c4968374827cc2e502b717752e5f09520edf97536f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ5H3SF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD6xbF6ZOTlq9ifaU17kUKYaWTp7KGMlO1SL1iZ%2F1GHVAIhAImrefyp61XOzjxXlepi4xNZCEEp3Ui01v0S2%2FfvokcyKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiEq95456ApBoxUCsq3APYm9x0YSS9e8sa88OT2lUVVqr9AFgjS0wLGtzxe67%2BJmGnQ4oXtK3r1caW5UjmhfYUmoFxYR%2F52HRm4QJxvr11FYnMuCYgHx0uoDHrq0q002B7BwC6MJ%2FilK2A4Tp3qQuVNfqrBDeR9BJFlL2n%2BfSI96hsk8YMFRtobY06ykpGza90UDMU%2BnOt3bgOnjGq8cKcjcAlEkW94ilrCgwYJReVYY4rRjNriWIcf%2BPv%2FZwMn1LycT%2FbCVY5%2BUZohmBAJ5OsUTZ9YblAA1wdfUq%2FJ4bmqt0RLEaQPbGplkX6fnjZwnUn7dI28VbHEtCzm%2BcBeHc5Hh9jlZ7xftg%2ByceU33X3GXcv8VjI0opYfg0WvYKjhuGPtNZdYDujp5YAvccA8iHGAR3cFZwRhvJl5S4O5L%2FUIR8ysQzKg3Fg4A9f61cvyFk7H%2FKfEOiC%2FkR65FOlIBnBvUM0dBdJIPqpGB3lrL0zm38%2Bkxk11D1XO0FjD04NiDo5m27Rb1ceiEYtSSoWEc9RWVYxJK2%2FAVm3njSRxHUvJCeBcMIYZ%2FZWzsiYl42S6G3tNkGEkiCmRIVxqB0lGYQoi6u3lXw%2B6sGreBBbDbZHwj62UxbOmmBwxC0Y%2BIvrNc36C8bZ8ENChu2Q9zDAk5vEBjqkAd1XNOIekk8Rs4Mi6tD69%2Fu7iLqM3XVdqSnjAcY7ivZBkc7Wlweoo6hV5QyayS%2FDFzPM4KsdbaPT14wpKOjURJiF9XqnfqW2xfllC%2BHbWqVDXbvLxnKudMF9KAP4khzJjN4zf9tTNf403Xo%2BUqqC2ke74vYCWqIPY1Cvt8uRvxQOqSLIFln7jSUTv8q26Xi0qTWMJ8ORM%2BarWQL8Lvs%2BVnc86%2Bc1&X-Amz-Signature=74492fd64d1ea054c3dc4050a51e0d462c8a0abd13d9b0f3d1694722369843ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
