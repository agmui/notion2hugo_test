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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKCCZB3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC140IGWBjUurEU9en9wz%2Fw9YEVAmGlUaUTgTmvuMhXfgIhAL4WMWQX1NRW6pWIFnM1auTC%2Bto9tsaWaXlFmiuSBYeUKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjmZPcJLmtDqQEH48q3AODY%2FOTPjhNqbmRcTuc5t5v0GET%2FwlMtBZW96GhSbOjvu4Qegn8D%2BgLJJP4tnHToHAFFYhHRx3NKZt5l8mXEYr1hG7Q%2Bo6XfrIB52XvQv8GmPxWDhb7HdO5GQHx63F9Hu%2FX3lILIO8YXiTTXWymQWf2ahlQBc5UJVdpX8XX03XLPEzaj6gDPcV5a%2BKcFOU1hmJmnnJ5qnhgnjUEmNpiOQF%2BcygwJ0QSVNbXXE9G4T2blbKXgT%2FBKU8BlYpTLo9Hj2BXrBpJHqzMlgLmjZ%2FH8R1URNVzXOOr%2FND5lII4E55PHytqEEezqFHa0h%2F5WHvI2R87PLdFf54C15Gvn6p9UWpSrGH2klKkoX%2F0sWsG0JDGdAZOylZcGcwdtVDybN%2F2O7B5rXbbRq%2BQcrMCgCpLWPmWpAKg6EuC1TspaCz9rCWSBqr5Hbx0rxQHLjBI0kuCdONKfX%2FBNhFJTVf9eaFb%2FxCPOyCAZjUllcuzNZxYzHAaUu%2BXXtKub8JhHCy76RV6lsTlsZCOJCRqSGFK%2FgggRFJ9DmeTAst%2BCiCQWrfbq6EFvx1CZZqSwEmw3LFEYUr%2BLy6M2jWOZ3uo%2FohfD0%2FKrdfYA6XyM055pEy5qcITfamWxRZPK7i3qpciXS1%2BkDDnxJ3CBjqkAUPlJDjyBcZxgno0c5IyO8oxbyG%2FNXKEghmpPGev73U0pNZKIQxtpSbvcEpA%2B6dkmItZgvvIBhhBw7FDejzen719Q2ImLrnr6o1t5r%2B2A0P3V4kliOKLJ8V4K%2FBHWVW7y%2BkCWc10SXRAKNuYunkflQYFOOLLf71Xdy05i4XPZ63zA4PVbFRaaATVX4AXSSkRz3IHXyGc9Qp84EkYYQJdiZBKXHUS&X-Amz-Signature=c64ed8f4f872b7d1430c98dfa15fd21148266cfba121f49e2d046b11636032e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKCCZB3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC140IGWBjUurEU9en9wz%2Fw9YEVAmGlUaUTgTmvuMhXfgIhAL4WMWQX1NRW6pWIFnM1auTC%2Bto9tsaWaXlFmiuSBYeUKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjmZPcJLmtDqQEH48q3AODY%2FOTPjhNqbmRcTuc5t5v0GET%2FwlMtBZW96GhSbOjvu4Qegn8D%2BgLJJP4tnHToHAFFYhHRx3NKZt5l8mXEYr1hG7Q%2Bo6XfrIB52XvQv8GmPxWDhb7HdO5GQHx63F9Hu%2FX3lILIO8YXiTTXWymQWf2ahlQBc5UJVdpX8XX03XLPEzaj6gDPcV5a%2BKcFOU1hmJmnnJ5qnhgnjUEmNpiOQF%2BcygwJ0QSVNbXXE9G4T2blbKXgT%2FBKU8BlYpTLo9Hj2BXrBpJHqzMlgLmjZ%2FH8R1URNVzXOOr%2FND5lII4E55PHytqEEezqFHa0h%2F5WHvI2R87PLdFf54C15Gvn6p9UWpSrGH2klKkoX%2F0sWsG0JDGdAZOylZcGcwdtVDybN%2F2O7B5rXbbRq%2BQcrMCgCpLWPmWpAKg6EuC1TspaCz9rCWSBqr5Hbx0rxQHLjBI0kuCdONKfX%2FBNhFJTVf9eaFb%2FxCPOyCAZjUllcuzNZxYzHAaUu%2BXXtKub8JhHCy76RV6lsTlsZCOJCRqSGFK%2FgggRFJ9DmeTAst%2BCiCQWrfbq6EFvx1CZZqSwEmw3LFEYUr%2BLy6M2jWOZ3uo%2FohfD0%2FKrdfYA6XyM055pEy5qcITfamWxRZPK7i3qpciXS1%2BkDDnxJ3CBjqkAUPlJDjyBcZxgno0c5IyO8oxbyG%2FNXKEghmpPGev73U0pNZKIQxtpSbvcEpA%2B6dkmItZgvvIBhhBw7FDejzen719Q2ImLrnr6o1t5r%2B2A0P3V4kliOKLJ8V4K%2FBHWVW7y%2BkCWc10SXRAKNuYunkflQYFOOLLf71Xdy05i4XPZ63zA4PVbFRaaATVX4AXSSkRz3IHXyGc9Qp84EkYYQJdiZBKXHUS&X-Amz-Signature=6ccac2170187d7b52dc382e720e46ee542a6ba9bc66de8cd09c7f304c9702164&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKCCZB3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC140IGWBjUurEU9en9wz%2Fw9YEVAmGlUaUTgTmvuMhXfgIhAL4WMWQX1NRW6pWIFnM1auTC%2Bto9tsaWaXlFmiuSBYeUKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjmZPcJLmtDqQEH48q3AODY%2FOTPjhNqbmRcTuc5t5v0GET%2FwlMtBZW96GhSbOjvu4Qegn8D%2BgLJJP4tnHToHAFFYhHRx3NKZt5l8mXEYr1hG7Q%2Bo6XfrIB52XvQv8GmPxWDhb7HdO5GQHx63F9Hu%2FX3lILIO8YXiTTXWymQWf2ahlQBc5UJVdpX8XX03XLPEzaj6gDPcV5a%2BKcFOU1hmJmnnJ5qnhgnjUEmNpiOQF%2BcygwJ0QSVNbXXE9G4T2blbKXgT%2FBKU8BlYpTLo9Hj2BXrBpJHqzMlgLmjZ%2FH8R1URNVzXOOr%2FND5lII4E55PHytqEEezqFHa0h%2F5WHvI2R87PLdFf54C15Gvn6p9UWpSrGH2klKkoX%2F0sWsG0JDGdAZOylZcGcwdtVDybN%2F2O7B5rXbbRq%2BQcrMCgCpLWPmWpAKg6EuC1TspaCz9rCWSBqr5Hbx0rxQHLjBI0kuCdONKfX%2FBNhFJTVf9eaFb%2FxCPOyCAZjUllcuzNZxYzHAaUu%2BXXtKub8JhHCy76RV6lsTlsZCOJCRqSGFK%2FgggRFJ9DmeTAst%2BCiCQWrfbq6EFvx1CZZqSwEmw3LFEYUr%2BLy6M2jWOZ3uo%2FohfD0%2FKrdfYA6XyM055pEy5qcITfamWxRZPK7i3qpciXS1%2BkDDnxJ3CBjqkAUPlJDjyBcZxgno0c5IyO8oxbyG%2FNXKEghmpPGev73U0pNZKIQxtpSbvcEpA%2B6dkmItZgvvIBhhBw7FDejzen719Q2ImLrnr6o1t5r%2B2A0P3V4kliOKLJ8V4K%2FBHWVW7y%2BkCWc10SXRAKNuYunkflQYFOOLLf71Xdy05i4XPZ63zA4PVbFRaaATVX4AXSSkRz3IHXyGc9Qp84EkYYQJdiZBKXHUS&X-Amz-Signature=209e6c029dc1802795d060bb4a66b976b55b53700b1b5ae0170a3b795b35131e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
