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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RKNMNCR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETSAph%2B06ua1IOhhMzoLVfwZZiDGLHj4p17ZgTVIK9sAiBb%2BlXUVTA0%2FgdUFrBDM%2BKOSnkWHnaO0TAGdJGcblf3yir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbWJFmOXzVkpH8wSkKtwDPXn4VIFHeNuuc4VLuueG7YGCeO7m6wWqcNe4HSkTCQjUQcZ5K1PTQFji5HZGY6A5OIKNl04cOTc6ql35IqTEUt5dmpC5P%2BL%2BaNhLDcmxOujT9OizTk%2FLnSAoacX4L%2Bjb%2FmROMwg8fVJ%2FDyu%2Bh%2F0xzbvz2YPJNn0rFFCUf%2Bv1g1S2PgL%2Fzn9UnYc%2FzGvbTrOSH0UZfBKvyJfh97GC2WG54bM0F9I7uFsoWBY11EI7J21y0pi0TWkfsMiYeRdR0ZRErHuwk%2B%2ByBtzUnaTbWArhYPpqpj0ijkLDqP8NpndsU%2Bjzi6QDGP8vnh%2BQaItbUpFwck%2FYmrmkPjfr%2BU%2FFvzAHO8BCWXqlvszooCZWhTnJvdWA7DLm%2BIFdROmfSG6FIKEtSX51UOPC2MtP9zazqqKSHiOdXJkXmvqn0Vsqze8N8LGK9lupLpUvNnt4KtPrr5bR4RHuRMfM621DkiUpIbSHXYw4rfK5ljIqXw%2Bxw2AR%2BJJYpRpxiDPp9PY0dN5KvaK03QJI0Bcn60HCd5R4WjHJfFml2%2B1oMACb9KEpqmqpPd5bJier1MtvznjPYqcsr9%2FRSPbzLHmD7zhHKk%2F9V6YzKvCXIESNREVtjZrWQ4qoBbwyftEjbln8aWLvwUsw6ZCLwgY6pgGQbUSNz5DEyIvCYyrY0oAHcCbwtJ060vPYPQGT0t0s%2Beu%2FIidccAYC7bZ8k81KL8oxJCGQgz%2FBFlOTHIHBHL79%2FsK8SUhOKdJBSRggT41b33yULvOc3NBfZTce9Hfnd5AAu80seeUVUuqqLbvcYN8dVVdIZqLzXa8LkajZViHbRoVqQ45SR9oY3bSbu9595c7ssSttrdsmOJ7wLSjJsxP4NOam6NJ5&X-Amz-Signature=16778960cf082277459c7b46179d912396d93c81f4bc33d3e6649eb059dc58ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RKNMNCR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETSAph%2B06ua1IOhhMzoLVfwZZiDGLHj4p17ZgTVIK9sAiBb%2BlXUVTA0%2FgdUFrBDM%2BKOSnkWHnaO0TAGdJGcblf3yir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbWJFmOXzVkpH8wSkKtwDPXn4VIFHeNuuc4VLuueG7YGCeO7m6wWqcNe4HSkTCQjUQcZ5K1PTQFji5HZGY6A5OIKNl04cOTc6ql35IqTEUt5dmpC5P%2BL%2BaNhLDcmxOujT9OizTk%2FLnSAoacX4L%2Bjb%2FmROMwg8fVJ%2FDyu%2Bh%2F0xzbvz2YPJNn0rFFCUf%2Bv1g1S2PgL%2Fzn9UnYc%2FzGvbTrOSH0UZfBKvyJfh97GC2WG54bM0F9I7uFsoWBY11EI7J21y0pi0TWkfsMiYeRdR0ZRErHuwk%2B%2ByBtzUnaTbWArhYPpqpj0ijkLDqP8NpndsU%2Bjzi6QDGP8vnh%2BQaItbUpFwck%2FYmrmkPjfr%2BU%2FFvzAHO8BCWXqlvszooCZWhTnJvdWA7DLm%2BIFdROmfSG6FIKEtSX51UOPC2MtP9zazqqKSHiOdXJkXmvqn0Vsqze8N8LGK9lupLpUvNnt4KtPrr5bR4RHuRMfM621DkiUpIbSHXYw4rfK5ljIqXw%2Bxw2AR%2BJJYpRpxiDPp9PY0dN5KvaK03QJI0Bcn60HCd5R4WjHJfFml2%2B1oMACb9KEpqmqpPd5bJier1MtvznjPYqcsr9%2FRSPbzLHmD7zhHKk%2F9V6YzKvCXIESNREVtjZrWQ4qoBbwyftEjbln8aWLvwUsw6ZCLwgY6pgGQbUSNz5DEyIvCYyrY0oAHcCbwtJ060vPYPQGT0t0s%2Beu%2FIidccAYC7bZ8k81KL8oxJCGQgz%2FBFlOTHIHBHL79%2FsK8SUhOKdJBSRggT41b33yULvOc3NBfZTce9Hfnd5AAu80seeUVUuqqLbvcYN8dVVdIZqLzXa8LkajZViHbRoVqQ45SR9oY3bSbu9595c7ssSttrdsmOJ7wLSjJsxP4NOam6NJ5&X-Amz-Signature=27af35f2d88f9beadf38895c27661aad1da33c16b05ac42515d51cd27d9f2cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RKNMNCR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETSAph%2B06ua1IOhhMzoLVfwZZiDGLHj4p17ZgTVIK9sAiBb%2BlXUVTA0%2FgdUFrBDM%2BKOSnkWHnaO0TAGdJGcblf3yir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbWJFmOXzVkpH8wSkKtwDPXn4VIFHeNuuc4VLuueG7YGCeO7m6wWqcNe4HSkTCQjUQcZ5K1PTQFji5HZGY6A5OIKNl04cOTc6ql35IqTEUt5dmpC5P%2BL%2BaNhLDcmxOujT9OizTk%2FLnSAoacX4L%2Bjb%2FmROMwg8fVJ%2FDyu%2Bh%2F0xzbvz2YPJNn0rFFCUf%2Bv1g1S2PgL%2Fzn9UnYc%2FzGvbTrOSH0UZfBKvyJfh97GC2WG54bM0F9I7uFsoWBY11EI7J21y0pi0TWkfsMiYeRdR0ZRErHuwk%2B%2ByBtzUnaTbWArhYPpqpj0ijkLDqP8NpndsU%2Bjzi6QDGP8vnh%2BQaItbUpFwck%2FYmrmkPjfr%2BU%2FFvzAHO8BCWXqlvszooCZWhTnJvdWA7DLm%2BIFdROmfSG6FIKEtSX51UOPC2MtP9zazqqKSHiOdXJkXmvqn0Vsqze8N8LGK9lupLpUvNnt4KtPrr5bR4RHuRMfM621DkiUpIbSHXYw4rfK5ljIqXw%2Bxw2AR%2BJJYpRpxiDPp9PY0dN5KvaK03QJI0Bcn60HCd5R4WjHJfFml2%2B1oMACb9KEpqmqpPd5bJier1MtvznjPYqcsr9%2FRSPbzLHmD7zhHKk%2F9V6YzKvCXIESNREVtjZrWQ4qoBbwyftEjbln8aWLvwUsw6ZCLwgY6pgGQbUSNz5DEyIvCYyrY0oAHcCbwtJ060vPYPQGT0t0s%2Beu%2FIidccAYC7bZ8k81KL8oxJCGQgz%2FBFlOTHIHBHL79%2FsK8SUhOKdJBSRggT41b33yULvOc3NBfZTce9Hfnd5AAu80seeUVUuqqLbvcYN8dVVdIZqLzXa8LkajZViHbRoVqQ45SR9oY3bSbu9595c7ssSttrdsmOJ7wLSjJsxP4NOam6NJ5&X-Amz-Signature=68e5648d55fcb9b520c54762e22c572c9f9f89b9c606204eeb8d81e87a1ffbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
