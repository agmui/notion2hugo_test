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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HJDDL4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjg5GReC66eAmvwR4GiFf4W9g3mnYJ%2FhwAzurlX2XkBQIgU2GbXFQuPmT4XPfKHVSspVcEh%2Bgnl6GcDC7tKXepa94q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIaSpxI2FQjrQVoxxyrcA%2Bovw2FUhs9%2FqaTH3uJYryqlNFlBnQbeqIpDYeI8nWCE179GWGP%2BESVeohwWNeIxYV8Qg28l%2Bjh%2BF8VCFNb9A%2BZIYm6w2h2atTIfJJzK9oAUMqn9zFp2lNsWQMp8KDfjHkBzkBE72kHzczfZPEfC1nqSYE%2FV68wa36dnI%2BMkBxKs4agFvyZsa0kLlIZiP%2B%2FbuxjsFtFqPps%2BLeFboxeakdNxf69bLMyEjDhzUOEEN1%2BZunTZsG7%2FHCJ0Jd47Dwon7f4nZj2IBlIfrrkX2mlKAKFvnsEClZfCvfziBtljsaq96HyCZMlYJO1zVszLwfhpvGH43%2BgKddg%2Fh5jlHxPHi8hEFczlnwzBKiQHnS3zAlerOpYTUGi76ioDpMzcQqOxLxK%2Bn2Q%2FN4VnNJzmOtjkZVmoq7bgHsoaJSmkEzud4zkXpjOjui%2FxpKnm4vQayvRa8vzg1GScSpg%2BFmvZDtyQMc%2BxsYLgA2jecI1521RFnYPXqTmEOOxjk70%2B7dLLtJZ%2BMi5Ly9qRFrMv%2FRREWmhgntkHpHPjj2%2FG8iMoBqm%2FQUHypyeB%2FDJDzyG7ow1cVfyrPHQM6wFMrN8j6KFKZ8uIRU9PYSwMahv76uxrk9Kjfc%2FHswOxSJGWzxeg34WDMLeTvr8GOqUBIg%2B56E3sSXzBrLXOt7B6vP4ZzwvmxpOR0zGpKDfJv5qhK9RpFQTaw14l3L2Pc%2F6XU5SRRN%2FABpl%2BwFxXQr5k7cTddhW2kTCeaMdU9HmZhZ3eWp2x1leQrZgPvBujwUkqgdWiln5uWMMat6NG8KibPTB2VaIwuwQZVAdZRTAqUAx5%2F18BDs1WyaMYoQ%2BsoA%2F2Mc9QPcB80Oew2OOtfxC6q9nim8fg&X-Amz-Signature=bb400ac6202a11dae20bf2e7e7a5faae11b0d6c93bbc53f8b918ed6cd8e8ff58&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HJDDL4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjg5GReC66eAmvwR4GiFf4W9g3mnYJ%2FhwAzurlX2XkBQIgU2GbXFQuPmT4XPfKHVSspVcEh%2Bgnl6GcDC7tKXepa94q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIaSpxI2FQjrQVoxxyrcA%2Bovw2FUhs9%2FqaTH3uJYryqlNFlBnQbeqIpDYeI8nWCE179GWGP%2BESVeohwWNeIxYV8Qg28l%2Bjh%2BF8VCFNb9A%2BZIYm6w2h2atTIfJJzK9oAUMqn9zFp2lNsWQMp8KDfjHkBzkBE72kHzczfZPEfC1nqSYE%2FV68wa36dnI%2BMkBxKs4agFvyZsa0kLlIZiP%2B%2FbuxjsFtFqPps%2BLeFboxeakdNxf69bLMyEjDhzUOEEN1%2BZunTZsG7%2FHCJ0Jd47Dwon7f4nZj2IBlIfrrkX2mlKAKFvnsEClZfCvfziBtljsaq96HyCZMlYJO1zVszLwfhpvGH43%2BgKddg%2Fh5jlHxPHi8hEFczlnwzBKiQHnS3zAlerOpYTUGi76ioDpMzcQqOxLxK%2Bn2Q%2FN4VnNJzmOtjkZVmoq7bgHsoaJSmkEzud4zkXpjOjui%2FxpKnm4vQayvRa8vzg1GScSpg%2BFmvZDtyQMc%2BxsYLgA2jecI1521RFnYPXqTmEOOxjk70%2B7dLLtJZ%2BMi5Ly9qRFrMv%2FRREWmhgntkHpHPjj2%2FG8iMoBqm%2FQUHypyeB%2FDJDzyG7ow1cVfyrPHQM6wFMrN8j6KFKZ8uIRU9PYSwMahv76uxrk9Kjfc%2FHswOxSJGWzxeg34WDMLeTvr8GOqUBIg%2B56E3sSXzBrLXOt7B6vP4ZzwvmxpOR0zGpKDfJv5qhK9RpFQTaw14l3L2Pc%2F6XU5SRRN%2FABpl%2BwFxXQr5k7cTddhW2kTCeaMdU9HmZhZ3eWp2x1leQrZgPvBujwUkqgdWiln5uWMMat6NG8KibPTB2VaIwuwQZVAdZRTAqUAx5%2F18BDs1WyaMYoQ%2BsoA%2F2Mc9QPcB80Oew2OOtfxC6q9nim8fg&X-Amz-Signature=53854d80230616ad4d2965c2b8cbfb13bc02d27b5b47bbdf0c043052b507d91d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HJDDL4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjg5GReC66eAmvwR4GiFf4W9g3mnYJ%2FhwAzurlX2XkBQIgU2GbXFQuPmT4XPfKHVSspVcEh%2Bgnl6GcDC7tKXepa94q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIaSpxI2FQjrQVoxxyrcA%2Bovw2FUhs9%2FqaTH3uJYryqlNFlBnQbeqIpDYeI8nWCE179GWGP%2BESVeohwWNeIxYV8Qg28l%2Bjh%2BF8VCFNb9A%2BZIYm6w2h2atTIfJJzK9oAUMqn9zFp2lNsWQMp8KDfjHkBzkBE72kHzczfZPEfC1nqSYE%2FV68wa36dnI%2BMkBxKs4agFvyZsa0kLlIZiP%2B%2FbuxjsFtFqPps%2BLeFboxeakdNxf69bLMyEjDhzUOEEN1%2BZunTZsG7%2FHCJ0Jd47Dwon7f4nZj2IBlIfrrkX2mlKAKFvnsEClZfCvfziBtljsaq96HyCZMlYJO1zVszLwfhpvGH43%2BgKddg%2Fh5jlHxPHi8hEFczlnwzBKiQHnS3zAlerOpYTUGi76ioDpMzcQqOxLxK%2Bn2Q%2FN4VnNJzmOtjkZVmoq7bgHsoaJSmkEzud4zkXpjOjui%2FxpKnm4vQayvRa8vzg1GScSpg%2BFmvZDtyQMc%2BxsYLgA2jecI1521RFnYPXqTmEOOxjk70%2B7dLLtJZ%2BMi5Ly9qRFrMv%2FRREWmhgntkHpHPjj2%2FG8iMoBqm%2FQUHypyeB%2FDJDzyG7ow1cVfyrPHQM6wFMrN8j6KFKZ8uIRU9PYSwMahv76uxrk9Kjfc%2FHswOxSJGWzxeg34WDMLeTvr8GOqUBIg%2B56E3sSXzBrLXOt7B6vP4ZzwvmxpOR0zGpKDfJv5qhK9RpFQTaw14l3L2Pc%2F6XU5SRRN%2FABpl%2BwFxXQr5k7cTddhW2kTCeaMdU9HmZhZ3eWp2x1leQrZgPvBujwUkqgdWiln5uWMMat6NG8KibPTB2VaIwuwQZVAdZRTAqUAx5%2F18BDs1WyaMYoQ%2BsoA%2F2Mc9QPcB80Oew2OOtfxC6q9nim8fg&X-Amz-Signature=55693e58e62d624639d1a4c2142dcdc29222d9065443a732270cd315ee190f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
