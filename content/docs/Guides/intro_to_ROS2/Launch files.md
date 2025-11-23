---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQTN6IE2%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIELiPGXss7u9ZwAoWGyhcDcdAoAvjmgqwll0csajg%2BnYAiB%2BGg92wt303zL8LxJIcCDBTsC700OJ76D8kw11M9tn7Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMZokc%2BZ80uVXhB7vDKtwD1ahvLP9KAk1wu71Uds4LB2%2Fx5f%2FtdOYvdbN4DZHPZ4dqpj%2BeOP9h1pIxneUQ56u1mVu3JerAY3h11rfK77vEIyqpieSOPSsuPUWQVsoeIMWMiLS2eZ34YnubIeIJw1rBkQeXlkgLjXawPelsPoX1t2jlhUVFgQKuNIfSzyBqX1%2BfeAsRKiUr9kDw5%2BE20oFWqN4wlkK2v1ZERUQVeVQlfK5FuHxwukp%2Bk6zJNL1hI%2F7o%2BRwvAX3QJ7xnC5H6akb%2BHp6R8xHdX0wfNCnOdXROwQFCaRuByFY4svPlTmPUhAPWIH91wVLDyAsui9eKOKh%2BqDDvcO%2BJb9raYrhZtU9cjjLmyzz69SvfTSJWUQ%2F8XDZMUzljqa0PgLBxcGrj9pObH7iCEGC7wa183Fn3kAfSmB2w%2FtFwqk6kp7Z0YM4dRQxsxzIyjj2m85Qt3tOGQ1vCfbbpWm1BJ1qoRxifDOiOEGTWbo%2BCy8ODKHJ%2FTb3yLV4gWubFgwLXb7TOrit1T0pnteGAW%2FYwMJQpOVU13QJhgP7CrfrhJsJKTvw4ilRJECjyV%2FkCsLoxsks5OCSSJLRD715LbqoCjj3evnWv6SdTVn6X6OYIrO1VNxgF%2BwuGXPZjrr4%2Bc%2FZu4Pqd7tEw3bGJyQY6pgEOgEmKyV2B9m6z3futM4OwIfZrt758nqV6ylMyldBSPBtCdGcnP%2BnS96s%2Fi9sZj6BfAiOZXR0UhdvqGwhs4QtEbXHmYttskfSrJjyhlhdDW8uCoGDj1HPs1MCL0pOk3GMAm7YQ7fk2JOmBClv3cV9CI6yM%2FjXpnWMfQOGUKaS8Fnqqnwa1Z3TI0TZG6D3scsUvRpql6QgnziTQN0rjJ43rQNgTK9lB&X-Amz-Signature=7dd2e20a53d7722f31a900da36fb54c94a57f93ba7f6a750f11fac71afeaa27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQTN6IE2%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIELiPGXss7u9ZwAoWGyhcDcdAoAvjmgqwll0csajg%2BnYAiB%2BGg92wt303zL8LxJIcCDBTsC700OJ76D8kw11M9tn7Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMZokc%2BZ80uVXhB7vDKtwD1ahvLP9KAk1wu71Uds4LB2%2Fx5f%2FtdOYvdbN4DZHPZ4dqpj%2BeOP9h1pIxneUQ56u1mVu3JerAY3h11rfK77vEIyqpieSOPSsuPUWQVsoeIMWMiLS2eZ34YnubIeIJw1rBkQeXlkgLjXawPelsPoX1t2jlhUVFgQKuNIfSzyBqX1%2BfeAsRKiUr9kDw5%2BE20oFWqN4wlkK2v1ZERUQVeVQlfK5FuHxwukp%2Bk6zJNL1hI%2F7o%2BRwvAX3QJ7xnC5H6akb%2BHp6R8xHdX0wfNCnOdXROwQFCaRuByFY4svPlTmPUhAPWIH91wVLDyAsui9eKOKh%2BqDDvcO%2BJb9raYrhZtU9cjjLmyzz69SvfTSJWUQ%2F8XDZMUzljqa0PgLBxcGrj9pObH7iCEGC7wa183Fn3kAfSmB2w%2FtFwqk6kp7Z0YM4dRQxsxzIyjj2m85Qt3tOGQ1vCfbbpWm1BJ1qoRxifDOiOEGTWbo%2BCy8ODKHJ%2FTb3yLV4gWubFgwLXb7TOrit1T0pnteGAW%2FYwMJQpOVU13QJhgP7CrfrhJsJKTvw4ilRJECjyV%2FkCsLoxsks5OCSSJLRD715LbqoCjj3evnWv6SdTVn6X6OYIrO1VNxgF%2BwuGXPZjrr4%2Bc%2FZu4Pqd7tEw3bGJyQY6pgEOgEmKyV2B9m6z3futM4OwIfZrt758nqV6ylMyldBSPBtCdGcnP%2BnS96s%2Fi9sZj6BfAiOZXR0UhdvqGwhs4QtEbXHmYttskfSrJjyhlhdDW8uCoGDj1HPs1MCL0pOk3GMAm7YQ7fk2JOmBClv3cV9CI6yM%2FjXpnWMfQOGUKaS8Fnqqnwa1Z3TI0TZG6D3scsUvRpql6QgnziTQN0rjJ43rQNgTK9lB&X-Amz-Signature=31ef1907426a0623b8702014c7673a11c7f621c3a64e53118eff8c07332aba65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQTN6IE2%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIELiPGXss7u9ZwAoWGyhcDcdAoAvjmgqwll0csajg%2BnYAiB%2BGg92wt303zL8LxJIcCDBTsC700OJ76D8kw11M9tn7Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMZokc%2BZ80uVXhB7vDKtwD1ahvLP9KAk1wu71Uds4LB2%2Fx5f%2FtdOYvdbN4DZHPZ4dqpj%2BeOP9h1pIxneUQ56u1mVu3JerAY3h11rfK77vEIyqpieSOPSsuPUWQVsoeIMWMiLS2eZ34YnubIeIJw1rBkQeXlkgLjXawPelsPoX1t2jlhUVFgQKuNIfSzyBqX1%2BfeAsRKiUr9kDw5%2BE20oFWqN4wlkK2v1ZERUQVeVQlfK5FuHxwukp%2Bk6zJNL1hI%2F7o%2BRwvAX3QJ7xnC5H6akb%2BHp6R8xHdX0wfNCnOdXROwQFCaRuByFY4svPlTmPUhAPWIH91wVLDyAsui9eKOKh%2BqDDvcO%2BJb9raYrhZtU9cjjLmyzz69SvfTSJWUQ%2F8XDZMUzljqa0PgLBxcGrj9pObH7iCEGC7wa183Fn3kAfSmB2w%2FtFwqk6kp7Z0YM4dRQxsxzIyjj2m85Qt3tOGQ1vCfbbpWm1BJ1qoRxifDOiOEGTWbo%2BCy8ODKHJ%2FTb3yLV4gWubFgwLXb7TOrit1T0pnteGAW%2FYwMJQpOVU13QJhgP7CrfrhJsJKTvw4ilRJECjyV%2FkCsLoxsks5OCSSJLRD715LbqoCjj3evnWv6SdTVn6X6OYIrO1VNxgF%2BwuGXPZjrr4%2Bc%2FZu4Pqd7tEw3bGJyQY6pgEOgEmKyV2B9m6z3futM4OwIfZrt758nqV6ylMyldBSPBtCdGcnP%2BnS96s%2Fi9sZj6BfAiOZXR0UhdvqGwhs4QtEbXHmYttskfSrJjyhlhdDW8uCoGDj1HPs1MCL0pOk3GMAm7YQ7fk2JOmBClv3cV9CI6yM%2FjXpnWMfQOGUKaS8Fnqqnwa1Z3TI0TZG6D3scsUvRpql6QgnziTQN0rjJ43rQNgTK9lB&X-Amz-Signature=785cfeba40039b6c0f125e647ccfc59fa95886761a63061cc48a53e7c5dfa164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
