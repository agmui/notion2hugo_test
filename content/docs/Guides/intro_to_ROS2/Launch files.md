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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTZX7MH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeL7DvIMKe8EwGDqKexCBKCiJhQzpHSlbDhH08oZk%2F7AiEA6PUWk3gtsMtfQUwMW89%2BuoERg0rzCyH1%2F8g5yWWtXtoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNbchXef3Ifmhm931yrcA%2BUzHSB8YrMYq50uxK8ydMGAsZ7QVyAyorNEjZI%2BUdHvgO9EScEHHKtJMhF0TzkO9mCF9Lqkyo86cBrsmPt7p4OEzjU1XGUHdwhK99MT3564M7c4b%2BuNkSb9AHEehqZD3pYtGJ6dhPFV10JFSUPNeBJKsa%2BCnaECNcVO9I86kUcbe8d4TqulYfRTztFJMXMWIR3RUt0rgKSxtskqykGQDTVjQ%2FVa1q00eeA2crUuquIo0eWJO1y9fjJGJqjkTIY%2F5g9o%2B1ESb0GtVaqzHkVccNW4n1O%2Fy7KqOXftx0kbj9iz4OUOJktGb3uIuhMkgn0LWVcgHxwhB2hYgXCd8YuAwrZG4kqyQx%2BeCHe2QcXI8JnMqMZDwuXHVBmYr4qHq%2B6oygQLOsf4Kpc6yA0%2BL%2Bv%2BZ1yupsqTiswBjaLDaEvA6fezSH6MRvHueNRnTCQZDWsZeuxHiFeUWVIqbMRtySuENXmMKJaXtQxrh2yYAPuvMKA38P5jf51TXvaVZ9cbefJB66R9BRSH0UcXEL%2F6olfn7SDhGgYKPrSX1c2yOefLdccLbVjWDRsbDwmCm4IjktYy59M0hjIDwFRaReRjCVT0TKLClaS9sOG357AQKLkgFv%2B26te8HDbayjOExRAtMJ660b8GOqUBXCsN%2BDQEaQs1Pjwg3vTE7H31WS5mFOkvFywjfdwzVtvYGZYnnsGWYE6jfFxka9oNxHiU6ZKZNPhzGRFpcf3o7mSGhrrNV82WvYIZldY4Xd9RJzu0ubrFBabAf8Lnf2yAEXealja7%2B%2F1yG0c0enk2gViOjh%2FA0nrCf77OjpD3so1gju%2BJZ%2FPMb5rqtP8nMcO0wF6NqEFvrTwjyPab0snVZxS2OXvG&X-Amz-Signature=3d5da9854790c7d218dfe2b07e3d2de16aa7d2c57108e4167220550fad38fa3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTZX7MH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeL7DvIMKe8EwGDqKexCBKCiJhQzpHSlbDhH08oZk%2F7AiEA6PUWk3gtsMtfQUwMW89%2BuoERg0rzCyH1%2F8g5yWWtXtoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNbchXef3Ifmhm931yrcA%2BUzHSB8YrMYq50uxK8ydMGAsZ7QVyAyorNEjZI%2BUdHvgO9EScEHHKtJMhF0TzkO9mCF9Lqkyo86cBrsmPt7p4OEzjU1XGUHdwhK99MT3564M7c4b%2BuNkSb9AHEehqZD3pYtGJ6dhPFV10JFSUPNeBJKsa%2BCnaECNcVO9I86kUcbe8d4TqulYfRTztFJMXMWIR3RUt0rgKSxtskqykGQDTVjQ%2FVa1q00eeA2crUuquIo0eWJO1y9fjJGJqjkTIY%2F5g9o%2B1ESb0GtVaqzHkVccNW4n1O%2Fy7KqOXftx0kbj9iz4OUOJktGb3uIuhMkgn0LWVcgHxwhB2hYgXCd8YuAwrZG4kqyQx%2BeCHe2QcXI8JnMqMZDwuXHVBmYr4qHq%2B6oygQLOsf4Kpc6yA0%2BL%2Bv%2BZ1yupsqTiswBjaLDaEvA6fezSH6MRvHueNRnTCQZDWsZeuxHiFeUWVIqbMRtySuENXmMKJaXtQxrh2yYAPuvMKA38P5jf51TXvaVZ9cbefJB66R9BRSH0UcXEL%2F6olfn7SDhGgYKPrSX1c2yOefLdccLbVjWDRsbDwmCm4IjktYy59M0hjIDwFRaReRjCVT0TKLClaS9sOG357AQKLkgFv%2B26te8HDbayjOExRAtMJ660b8GOqUBXCsN%2BDQEaQs1Pjwg3vTE7H31WS5mFOkvFywjfdwzVtvYGZYnnsGWYE6jfFxka9oNxHiU6ZKZNPhzGRFpcf3o7mSGhrrNV82WvYIZldY4Xd9RJzu0ubrFBabAf8Lnf2yAEXealja7%2B%2F1yG0c0enk2gViOjh%2FA0nrCf77OjpD3so1gju%2BJZ%2FPMb5rqtP8nMcO0wF6NqEFvrTwjyPab0snVZxS2OXvG&X-Amz-Signature=b8f4254881a8c015342261aed807f03c5e46ff4fd4f799c0d54a1e2d4421497f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTZX7MH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeL7DvIMKe8EwGDqKexCBKCiJhQzpHSlbDhH08oZk%2F7AiEA6PUWk3gtsMtfQUwMW89%2BuoERg0rzCyH1%2F8g5yWWtXtoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNbchXef3Ifmhm931yrcA%2BUzHSB8YrMYq50uxK8ydMGAsZ7QVyAyorNEjZI%2BUdHvgO9EScEHHKtJMhF0TzkO9mCF9Lqkyo86cBrsmPt7p4OEzjU1XGUHdwhK99MT3564M7c4b%2BuNkSb9AHEehqZD3pYtGJ6dhPFV10JFSUPNeBJKsa%2BCnaECNcVO9I86kUcbe8d4TqulYfRTztFJMXMWIR3RUt0rgKSxtskqykGQDTVjQ%2FVa1q00eeA2crUuquIo0eWJO1y9fjJGJqjkTIY%2F5g9o%2B1ESb0GtVaqzHkVccNW4n1O%2Fy7KqOXftx0kbj9iz4OUOJktGb3uIuhMkgn0LWVcgHxwhB2hYgXCd8YuAwrZG4kqyQx%2BeCHe2QcXI8JnMqMZDwuXHVBmYr4qHq%2B6oygQLOsf4Kpc6yA0%2BL%2Bv%2BZ1yupsqTiswBjaLDaEvA6fezSH6MRvHueNRnTCQZDWsZeuxHiFeUWVIqbMRtySuENXmMKJaXtQxrh2yYAPuvMKA38P5jf51TXvaVZ9cbefJB66R9BRSH0UcXEL%2F6olfn7SDhGgYKPrSX1c2yOefLdccLbVjWDRsbDwmCm4IjktYy59M0hjIDwFRaReRjCVT0TKLClaS9sOG357AQKLkgFv%2B26te8HDbayjOExRAtMJ660b8GOqUBXCsN%2BDQEaQs1Pjwg3vTE7H31WS5mFOkvFywjfdwzVtvYGZYnnsGWYE6jfFxka9oNxHiU6ZKZNPhzGRFpcf3o7mSGhrrNV82WvYIZldY4Xd9RJzu0ubrFBabAf8Lnf2yAEXealja7%2B%2F1yG0c0enk2gViOjh%2FA0nrCf77OjpD3so1gju%2BJZ%2FPMb5rqtP8nMcO0wF6NqEFvrTwjyPab0snVZxS2OXvG&X-Amz-Signature=b859bc639eac461df5b9f90bf0338c9357be02d020d674a04996b4dc5066952a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
