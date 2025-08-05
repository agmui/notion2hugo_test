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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQWU5IE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIElyMt2LZcSom%2BZn3OT0oGm1trQe2cJw3S2Th0jrOuOpAiEAtWD%2F9D0Ru35uP96BX5kk3M595M75MTrYQLvAzf0iQmkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOdPIA1h8SicnR%2FQxSrcA0BbxnSYdu6haIbyt7NRzTR5rdQ9v05y6LVo4XIAX%2FfAUH%2F0szHMW4CLfnwMMFX8Ntd18LjHBFQ1q6bvwdx%2FfLZR%2F%2FfeahUnlEPNLWUhVPI94wYPotTtrFQ99VPrd%2FOE4T%2FzPK1AWcDv3YKGOhq0D6dCgWFd1%2Bx1aG4N877EJEuNmp03Yle9rGvXsQOKhtBoDzhF7sO85ZNuP5i9F2PBcS9qNynQcLHd4LSaDBqVwfbozyICmKW9dlKHmLWQiDR1vG6sDXMlyJEeYXJHkgb0RDFQ0Ql4Ln5hq%2FsK%2FZo6%2FOa30voGCYWoi6aAX7tlNip9ylrajTU7zfU1sJFBruFnGC3Y%2FhRCIkIxyMQUqUEAg3ozHuKBPRB5uCj3cimzr%2BDqtkBbKjfSNORuVia%2BOMHAKOnrYI9yYq5Uyl2zJzfoWgWAwzLh%2BDnyhMgoV9CJ9lOtaDlDdYQ8WYDfJGOc9nPw2zpd4flfnuavZipojhvLm498CRQtZ2P6TotXM4a5YOTet8Xz2FS9xzfk2NNas9ruod0gmUPblNCStWSDPT2PDzGLulyvVCVET4GadEB1PGxS46P2XsDLvAiwf4HOQ2k0uuZJxSjRUOIB4wCiskcNlRmtEUM2HeuBBY3AQcVbMLOzxsQGOqUBZzytZtlyjOiAroVtthmUrvyKxkYBDim22bzkh%2F%2Bxi1Q%2BuGDpD%2BSgRKvUI%2BdTzORDTjyqgI3quEtbU9IPzThE1G9jEEtQ8KaM6ZYGJy0MmlN9Yhf2qvjFzPJHbdqnwf%2F9h0riTxUcu2eyktgdLP0hdtDjyZYod3sFWqHtDkVYDdy6xw2cAbsk8LeF4UeiXqQSa9wTmETZxEk2AGVZHm8hFHOPeWPf&X-Amz-Signature=ec678baf9e896aca4de0be6a0e971ba27b6247fa0ce1e46d0ddeacea774daa21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQWU5IE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIElyMt2LZcSom%2BZn3OT0oGm1trQe2cJw3S2Th0jrOuOpAiEAtWD%2F9D0Ru35uP96BX5kk3M595M75MTrYQLvAzf0iQmkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOdPIA1h8SicnR%2FQxSrcA0BbxnSYdu6haIbyt7NRzTR5rdQ9v05y6LVo4XIAX%2FfAUH%2F0szHMW4CLfnwMMFX8Ntd18LjHBFQ1q6bvwdx%2FfLZR%2F%2FfeahUnlEPNLWUhVPI94wYPotTtrFQ99VPrd%2FOE4T%2FzPK1AWcDv3YKGOhq0D6dCgWFd1%2Bx1aG4N877EJEuNmp03Yle9rGvXsQOKhtBoDzhF7sO85ZNuP5i9F2PBcS9qNynQcLHd4LSaDBqVwfbozyICmKW9dlKHmLWQiDR1vG6sDXMlyJEeYXJHkgb0RDFQ0Ql4Ln5hq%2FsK%2FZo6%2FOa30voGCYWoi6aAX7tlNip9ylrajTU7zfU1sJFBruFnGC3Y%2FhRCIkIxyMQUqUEAg3ozHuKBPRB5uCj3cimzr%2BDqtkBbKjfSNORuVia%2BOMHAKOnrYI9yYq5Uyl2zJzfoWgWAwzLh%2BDnyhMgoV9CJ9lOtaDlDdYQ8WYDfJGOc9nPw2zpd4flfnuavZipojhvLm498CRQtZ2P6TotXM4a5YOTet8Xz2FS9xzfk2NNas9ruod0gmUPblNCStWSDPT2PDzGLulyvVCVET4GadEB1PGxS46P2XsDLvAiwf4HOQ2k0uuZJxSjRUOIB4wCiskcNlRmtEUM2HeuBBY3AQcVbMLOzxsQGOqUBZzytZtlyjOiAroVtthmUrvyKxkYBDim22bzkh%2F%2Bxi1Q%2BuGDpD%2BSgRKvUI%2BdTzORDTjyqgI3quEtbU9IPzThE1G9jEEtQ8KaM6ZYGJy0MmlN9Yhf2qvjFzPJHbdqnwf%2F9h0riTxUcu2eyktgdLP0hdtDjyZYod3sFWqHtDkVYDdy6xw2cAbsk8LeF4UeiXqQSa9wTmETZxEk2AGVZHm8hFHOPeWPf&X-Amz-Signature=d916490e4a4919c59efb7051e5616861ac0c2424c97afd64b1655831adde43b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQWU5IE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIElyMt2LZcSom%2BZn3OT0oGm1trQe2cJw3S2Th0jrOuOpAiEAtWD%2F9D0Ru35uP96BX5kk3M595M75MTrYQLvAzf0iQmkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOdPIA1h8SicnR%2FQxSrcA0BbxnSYdu6haIbyt7NRzTR5rdQ9v05y6LVo4XIAX%2FfAUH%2F0szHMW4CLfnwMMFX8Ntd18LjHBFQ1q6bvwdx%2FfLZR%2F%2FfeahUnlEPNLWUhVPI94wYPotTtrFQ99VPrd%2FOE4T%2FzPK1AWcDv3YKGOhq0D6dCgWFd1%2Bx1aG4N877EJEuNmp03Yle9rGvXsQOKhtBoDzhF7sO85ZNuP5i9F2PBcS9qNynQcLHd4LSaDBqVwfbozyICmKW9dlKHmLWQiDR1vG6sDXMlyJEeYXJHkgb0RDFQ0Ql4Ln5hq%2FsK%2FZo6%2FOa30voGCYWoi6aAX7tlNip9ylrajTU7zfU1sJFBruFnGC3Y%2FhRCIkIxyMQUqUEAg3ozHuKBPRB5uCj3cimzr%2BDqtkBbKjfSNORuVia%2BOMHAKOnrYI9yYq5Uyl2zJzfoWgWAwzLh%2BDnyhMgoV9CJ9lOtaDlDdYQ8WYDfJGOc9nPw2zpd4flfnuavZipojhvLm498CRQtZ2P6TotXM4a5YOTet8Xz2FS9xzfk2NNas9ruod0gmUPblNCStWSDPT2PDzGLulyvVCVET4GadEB1PGxS46P2XsDLvAiwf4HOQ2k0uuZJxSjRUOIB4wCiskcNlRmtEUM2HeuBBY3AQcVbMLOzxsQGOqUBZzytZtlyjOiAroVtthmUrvyKxkYBDim22bzkh%2F%2Bxi1Q%2BuGDpD%2BSgRKvUI%2BdTzORDTjyqgI3quEtbU9IPzThE1G9jEEtQ8KaM6ZYGJy0MmlN9Yhf2qvjFzPJHbdqnwf%2F9h0riTxUcu2eyktgdLP0hdtDjyZYod3sFWqHtDkVYDdy6xw2cAbsk8LeF4UeiXqQSa9wTmETZxEk2AGVZHm8hFHOPeWPf&X-Amz-Signature=69f2e7b948f629c1cbfedb009ef1dcdf10d3790dc67a7af09fdbbd28a3a528b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
