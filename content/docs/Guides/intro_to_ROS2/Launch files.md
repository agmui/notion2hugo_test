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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUYOKTL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE9VAY%2BfL7H9bybJmjKE%2BVZZ5hR%2BJOVP4b49F%2F5pwnHBAiEA5qVEZisR%2BqJ6lJ4mYLY8cmwqG8hymIRd2daSkhgp%2FCoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGSTZtQtNFYI8Ki%2FyircA3bkdWdXGskEizKmp%2BPlm9fb9DIE40CVB4GpbOV4dAqKBAER2NV%2BdOHRzu5Cjyq4745QVkgsTkycJs4S1tOJk28mNEKr1WGOiRDkzH3Ait%2FRWL6pqUixEzoWGNy%2FRW5D1scahTITBtufyIxPjJLDEkNeWX8HWpHL3oJ5ELQtr8IDyvA0IsiPXZgE%2BU9AOj3IB3lFAqiYrD0Z0Sh7uYJcwSUiJm4EESLK9jbEvJYvOiSnL1pegZeIROBH2AI3GdBOO3lbmUxcVywDk9guKcn3cfJxmMup5ey%2FUUnkgQiAlVF3aX%2FAmQHYKMyMA%2Bb5KaXW6aKeP5vzr84EeOnmbc71QZoglvEgZ9%2F62TRdEG96JR0XINYbaSOIIkzjpDZyT2LF0imYyzIINbNXNCgvwyPB%2FiLBK%2FXoH3HzC6ikxWK%2F83FVTdh7dW2wKkMZfYsyz5CR28lkPUXbWsZgifzp4YyX5CTq1L%2FkWW7sCya1Kg1JbNbDz5pET%2ByMyU%2FuSOWVxmcW%2Fz%2BxQnuLORAqQELAVdaaGQvETjmCvatCZ%2B4G4IAlvVrmG3vOBudOr19JVTulMt66w94N5joLhSkni2CAHJrngN7BKMR3QhsijaR60jrOuiCIwfmgxxpjQ%2F8fvjzYMO2Ljb0GOqUBkep00BUKZc5Ofez31eDRYbRfOGMcT%2FWIgva1uUDIVpXMNQp6TeXPFY6yLRXzW1SaDNOHK8AaW1Q9brApxg94yQfsypa0hAVHfbeYM01J2Bp70QEBkUqG%2FVxNGSTBRbKULuryvGh%2B3GlcVQd%2BM%2BmXRSNGdJzuiG6S8wa4aA222PRUa8dwjKZhOzFPLLST7a3sE%2BtFpWGP0oYnCtqg6W%2FXA%2FblMxnk&X-Amz-Signature=778e4ca690fd65bb2ff93ac1557bff909296b49f4e65c31c5933c43eebc1e0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUYOKTL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE9VAY%2BfL7H9bybJmjKE%2BVZZ5hR%2BJOVP4b49F%2F5pwnHBAiEA5qVEZisR%2BqJ6lJ4mYLY8cmwqG8hymIRd2daSkhgp%2FCoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGSTZtQtNFYI8Ki%2FyircA3bkdWdXGskEizKmp%2BPlm9fb9DIE40CVB4GpbOV4dAqKBAER2NV%2BdOHRzu5Cjyq4745QVkgsTkycJs4S1tOJk28mNEKr1WGOiRDkzH3Ait%2FRWL6pqUixEzoWGNy%2FRW5D1scahTITBtufyIxPjJLDEkNeWX8HWpHL3oJ5ELQtr8IDyvA0IsiPXZgE%2BU9AOj3IB3lFAqiYrD0Z0Sh7uYJcwSUiJm4EESLK9jbEvJYvOiSnL1pegZeIROBH2AI3GdBOO3lbmUxcVywDk9guKcn3cfJxmMup5ey%2FUUnkgQiAlVF3aX%2FAmQHYKMyMA%2Bb5KaXW6aKeP5vzr84EeOnmbc71QZoglvEgZ9%2F62TRdEG96JR0XINYbaSOIIkzjpDZyT2LF0imYyzIINbNXNCgvwyPB%2FiLBK%2FXoH3HzC6ikxWK%2F83FVTdh7dW2wKkMZfYsyz5CR28lkPUXbWsZgifzp4YyX5CTq1L%2FkWW7sCya1Kg1JbNbDz5pET%2ByMyU%2FuSOWVxmcW%2Fz%2BxQnuLORAqQELAVdaaGQvETjmCvatCZ%2B4G4IAlvVrmG3vOBudOr19JVTulMt66w94N5joLhSkni2CAHJrngN7BKMR3QhsijaR60jrOuiCIwfmgxxpjQ%2F8fvjzYMO2Ljb0GOqUBkep00BUKZc5Ofez31eDRYbRfOGMcT%2FWIgva1uUDIVpXMNQp6TeXPFY6yLRXzW1SaDNOHK8AaW1Q9brApxg94yQfsypa0hAVHfbeYM01J2Bp70QEBkUqG%2FVxNGSTBRbKULuryvGh%2B3GlcVQd%2BM%2BmXRSNGdJzuiG6S8wa4aA222PRUa8dwjKZhOzFPLLST7a3sE%2BtFpWGP0oYnCtqg6W%2FXA%2FblMxnk&X-Amz-Signature=e4eee3b2ea8effe00e00905984f5b08aaffdb5199c8e96688f90eb6d5c18c4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUYOKTL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE9VAY%2BfL7H9bybJmjKE%2BVZZ5hR%2BJOVP4b49F%2F5pwnHBAiEA5qVEZisR%2BqJ6lJ4mYLY8cmwqG8hymIRd2daSkhgp%2FCoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGSTZtQtNFYI8Ki%2FyircA3bkdWdXGskEizKmp%2BPlm9fb9DIE40CVB4GpbOV4dAqKBAER2NV%2BdOHRzu5Cjyq4745QVkgsTkycJs4S1tOJk28mNEKr1WGOiRDkzH3Ait%2FRWL6pqUixEzoWGNy%2FRW5D1scahTITBtufyIxPjJLDEkNeWX8HWpHL3oJ5ELQtr8IDyvA0IsiPXZgE%2BU9AOj3IB3lFAqiYrD0Z0Sh7uYJcwSUiJm4EESLK9jbEvJYvOiSnL1pegZeIROBH2AI3GdBOO3lbmUxcVywDk9guKcn3cfJxmMup5ey%2FUUnkgQiAlVF3aX%2FAmQHYKMyMA%2Bb5KaXW6aKeP5vzr84EeOnmbc71QZoglvEgZ9%2F62TRdEG96JR0XINYbaSOIIkzjpDZyT2LF0imYyzIINbNXNCgvwyPB%2FiLBK%2FXoH3HzC6ikxWK%2F83FVTdh7dW2wKkMZfYsyz5CR28lkPUXbWsZgifzp4YyX5CTq1L%2FkWW7sCya1Kg1JbNbDz5pET%2ByMyU%2FuSOWVxmcW%2Fz%2BxQnuLORAqQELAVdaaGQvETjmCvatCZ%2B4G4IAlvVrmG3vOBudOr19JVTulMt66w94N5joLhSkni2CAHJrngN7BKMR3QhsijaR60jrOuiCIwfmgxxpjQ%2F8fvjzYMO2Ljb0GOqUBkep00BUKZc5Ofez31eDRYbRfOGMcT%2FWIgva1uUDIVpXMNQp6TeXPFY6yLRXzW1SaDNOHK8AaW1Q9brApxg94yQfsypa0hAVHfbeYM01J2Bp70QEBkUqG%2FVxNGSTBRbKULuryvGh%2B3GlcVQd%2BM%2BmXRSNGdJzuiG6S8wa4aA222PRUa8dwjKZhOzFPLLST7a3sE%2BtFpWGP0oYnCtqg6W%2FXA%2FblMxnk&X-Amz-Signature=d2f4fbd13166fbbafd6163699049b247f98ba4c69df9b906088f54a2df645819&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
