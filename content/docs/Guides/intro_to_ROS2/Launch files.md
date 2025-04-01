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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQIDZSZG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGWVFfwflxRii2XRo3gtB5E%2FxF9JzV%2FR7OEkwP%2B1MM69AiAg7qCgl9gRHZF72LbhWGDwpRWs6Uw7GbAmiNb5yXSCjiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIVmwfORKzTe7QU2KtwDCqNqTnRvS6WhIX8IPMciu37zoxTd1boKryqf3R7qIOVTUIkNrU6lnku0JhW9vbZ3t1m%2B%2BI6oawUBqtqZmi8XDw7vNQBQEJrFKPLUg%2FBmwxQSnSBMUDL6jHMTpjhEikuIWfOn3cvEnGVkMiCMX%2BaeLL%2BF0NGxt8EEWYWROA2t3ftUu0aduPChvYSURMQuTiiVAC4EKDV%2BAL2Efs%2FUVh6eAMLGxFY7y7H%2FvSMfTg1oadiIiTEcqdWLRetCVYGixTJaW%2FlJKOq%2Ftwyk0mvLRbMx5wpxfzAfacMV8X5O6T7xwYOIR6bUlv7%2FLbDk4FntzFX%2BMmnrfcIqDH%2BWnCWBfZuLorJUlYX%2FZ8T27po2bBLziQqwbITGYMX2dicbApv4jvLP%2B7XLf3%2FtfycVl2yqPVYo4V2mtNCzfXbiSifAsxTwswFPnSpvPmF3j3XkUHBRTNkza2X0a8aPfi1pNBI1a%2BEQGB5z6Qsia6lT1luY0uPXyozI2O8IB%2BRZDxkSzxv4i%2F%2BmvCu6Zro24gzqlXnev8r%2Fza1nE3gh2b87%2BlB6Fbbg2xH5o3obFk7KJpB0KiPq8OFkjazQ2XztYi%2Fl6kgLv7O5BVQb0ZAshtoJxZm1FKQNjl6TUU8YbYi%2FXA2MbpQwrZauvwY6pgFs3HFWaKtnkc%2BvhCff1D4B3cZXiBRRtw5tBltKtfZX647isIhWeDefkiK0hev7D919XaiO36WwEVE9PmBW5UDoWQrCi82vqyz5%2F6GJztpmzndbcvFUdtud0PxZz6tmlUJ5XiDqN2ogpNHmiqoGYqZuv1RUcVGuPEYtndKiFFsbkQgP78C%2BjjRzYfw9AZiRlAWChjIpqe9Jlq5jjgS%2FZN0FhgI4ltri&X-Amz-Signature=2d276a7d797df0ca93e153384242c26f8adce80db939d85ce5492590231f824e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQIDZSZG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGWVFfwflxRii2XRo3gtB5E%2FxF9JzV%2FR7OEkwP%2B1MM69AiAg7qCgl9gRHZF72LbhWGDwpRWs6Uw7GbAmiNb5yXSCjiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIVmwfORKzTe7QU2KtwDCqNqTnRvS6WhIX8IPMciu37zoxTd1boKryqf3R7qIOVTUIkNrU6lnku0JhW9vbZ3t1m%2B%2BI6oawUBqtqZmi8XDw7vNQBQEJrFKPLUg%2FBmwxQSnSBMUDL6jHMTpjhEikuIWfOn3cvEnGVkMiCMX%2BaeLL%2BF0NGxt8EEWYWROA2t3ftUu0aduPChvYSURMQuTiiVAC4EKDV%2BAL2Efs%2FUVh6eAMLGxFY7y7H%2FvSMfTg1oadiIiTEcqdWLRetCVYGixTJaW%2FlJKOq%2Ftwyk0mvLRbMx5wpxfzAfacMV8X5O6T7xwYOIR6bUlv7%2FLbDk4FntzFX%2BMmnrfcIqDH%2BWnCWBfZuLorJUlYX%2FZ8T27po2bBLziQqwbITGYMX2dicbApv4jvLP%2B7XLf3%2FtfycVl2yqPVYo4V2mtNCzfXbiSifAsxTwswFPnSpvPmF3j3XkUHBRTNkza2X0a8aPfi1pNBI1a%2BEQGB5z6Qsia6lT1luY0uPXyozI2O8IB%2BRZDxkSzxv4i%2F%2BmvCu6Zro24gzqlXnev8r%2Fza1nE3gh2b87%2BlB6Fbbg2xH5o3obFk7KJpB0KiPq8OFkjazQ2XztYi%2Fl6kgLv7O5BVQb0ZAshtoJxZm1FKQNjl6TUU8YbYi%2FXA2MbpQwrZauvwY6pgFs3HFWaKtnkc%2BvhCff1D4B3cZXiBRRtw5tBltKtfZX647isIhWeDefkiK0hev7D919XaiO36WwEVE9PmBW5UDoWQrCi82vqyz5%2F6GJztpmzndbcvFUdtud0PxZz6tmlUJ5XiDqN2ogpNHmiqoGYqZuv1RUcVGuPEYtndKiFFsbkQgP78C%2BjjRzYfw9AZiRlAWChjIpqe9Jlq5jjgS%2FZN0FhgI4ltri&X-Amz-Signature=db01798fe3d6d09b89f0d2740ea3ffc1d43e2030752ee1548e3e8667ec20b208&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQIDZSZG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGWVFfwflxRii2XRo3gtB5E%2FxF9JzV%2FR7OEkwP%2B1MM69AiAg7qCgl9gRHZF72LbhWGDwpRWs6Uw7GbAmiNb5yXSCjiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIVmwfORKzTe7QU2KtwDCqNqTnRvS6WhIX8IPMciu37zoxTd1boKryqf3R7qIOVTUIkNrU6lnku0JhW9vbZ3t1m%2B%2BI6oawUBqtqZmi8XDw7vNQBQEJrFKPLUg%2FBmwxQSnSBMUDL6jHMTpjhEikuIWfOn3cvEnGVkMiCMX%2BaeLL%2BF0NGxt8EEWYWROA2t3ftUu0aduPChvYSURMQuTiiVAC4EKDV%2BAL2Efs%2FUVh6eAMLGxFY7y7H%2FvSMfTg1oadiIiTEcqdWLRetCVYGixTJaW%2FlJKOq%2Ftwyk0mvLRbMx5wpxfzAfacMV8X5O6T7xwYOIR6bUlv7%2FLbDk4FntzFX%2BMmnrfcIqDH%2BWnCWBfZuLorJUlYX%2FZ8T27po2bBLziQqwbITGYMX2dicbApv4jvLP%2B7XLf3%2FtfycVl2yqPVYo4V2mtNCzfXbiSifAsxTwswFPnSpvPmF3j3XkUHBRTNkza2X0a8aPfi1pNBI1a%2BEQGB5z6Qsia6lT1luY0uPXyozI2O8IB%2BRZDxkSzxv4i%2F%2BmvCu6Zro24gzqlXnev8r%2Fza1nE3gh2b87%2BlB6Fbbg2xH5o3obFk7KJpB0KiPq8OFkjazQ2XztYi%2Fl6kgLv7O5BVQb0ZAshtoJxZm1FKQNjl6TUU8YbYi%2FXA2MbpQwrZauvwY6pgFs3HFWaKtnkc%2BvhCff1D4B3cZXiBRRtw5tBltKtfZX647isIhWeDefkiK0hev7D919XaiO36WwEVE9PmBW5UDoWQrCi82vqyz5%2F6GJztpmzndbcvFUdtud0PxZz6tmlUJ5XiDqN2ogpNHmiqoGYqZuv1RUcVGuPEYtndKiFFsbkQgP78C%2BjjRzYfw9AZiRlAWChjIpqe9Jlq5jjgS%2FZN0FhgI4ltri&X-Amz-Signature=c11bb335f2e42fdbbcf29c7e83f6eae0b138e0dd159eaf307d3bc1167ab541bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
