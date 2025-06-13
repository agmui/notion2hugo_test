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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PF4HTLE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDShS7XeaaUdBBanTt9Qs2q%2Fb6eDspxKx0jMnlYqRh5sgIhANfd%2BnDmQli%2BYFvIxstd4mnMUbqrO8Pinnyq0nctGcFNKv8DCB0QABoMNjM3NDIzMTgzODA1IgzWQFFQMR4zcGMzRecq3ANKroifGhD%2FldsJYSDCNikSxWt3XEYOftJx0zlY4HZMKhPr1qbQm1EwaDBZBBQDUDSefLvaf9HH3J5PmF9Zq04LlhS65tMEOGdMPLUTmgGyOSrosrgg2PDzltGjyq0EcsvTRkFw4ArhnzEWlK7rBY3OR2jc3yetlbjuys%2F3SO06TNoKdAn646oL4nUKFusfI%2FiEGAsbpgTznNjAWad%2BAyuQSuePqfBUECwcd7%2B4mizfChE3xYsl6rs0btN1lenlUy5hS%2BKbo%2BwYBZKG1N2qTLoVc4ea9W9vCFvCdfefutt3gSb806VQ%2BMO%2BXkL%2BrCq1IeY4vAdHk3d8V1zoD0LMfA%2ByQKuROD%2FRU%2Fc6nwQFeqLWPIc0h4RE27NwTECuMx3LCbnI%2BnKgkuMB9jwR0vGXslNqAS0EvjDdpRkH78920lq%2BKHvCXqxMTonE6OESSArAd5447Ogcf2JWFg9RkbuG0MjaNS6cw7b3VSeBtyQhOw73ifUvoBdWIgDZ6HStQ3eyEtabKLw5lePEwGvQJ2HUQjFHnke0k4r%2FI47MolZ0CmprbQyVc%2Bz1X%2FPlcUwIQPZwPLQ29YQW0ItgefhS94NQXKJVcB%2FGcqxdvkRI2q%2FrU2%2BgCEy0BsaUDqCc37wGODC%2FkrLCBjqkAbrnKDSpd%2F40j95MyZxZmvWVzAFySPVa3TqlWPaNxeHleLNMRe6ugUrrCFjmf5LOG9gAyocf2gY0iAtAfbHqj9ERZiDJx7oyVmt9IzWVb9gc5PAkDMOA3X3L%2Bi35V5tAcXB9rBtEVhqb3ioWu5eE5vm0uU8EtiqYLlP1Mo2cN1iFf%2FUk2D7gMO6l%2FsN7LlNa2SNi5VuWomo2Ts2I1HDrZky81utj&X-Amz-Signature=9cf0af924716c4ce74b22f8014b09cd1368f04b7b3dd336c19cb3527d86586ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PF4HTLE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDShS7XeaaUdBBanTt9Qs2q%2Fb6eDspxKx0jMnlYqRh5sgIhANfd%2BnDmQli%2BYFvIxstd4mnMUbqrO8Pinnyq0nctGcFNKv8DCB0QABoMNjM3NDIzMTgzODA1IgzWQFFQMR4zcGMzRecq3ANKroifGhD%2FldsJYSDCNikSxWt3XEYOftJx0zlY4HZMKhPr1qbQm1EwaDBZBBQDUDSefLvaf9HH3J5PmF9Zq04LlhS65tMEOGdMPLUTmgGyOSrosrgg2PDzltGjyq0EcsvTRkFw4ArhnzEWlK7rBY3OR2jc3yetlbjuys%2F3SO06TNoKdAn646oL4nUKFusfI%2FiEGAsbpgTznNjAWad%2BAyuQSuePqfBUECwcd7%2B4mizfChE3xYsl6rs0btN1lenlUy5hS%2BKbo%2BwYBZKG1N2qTLoVc4ea9W9vCFvCdfefutt3gSb806VQ%2BMO%2BXkL%2BrCq1IeY4vAdHk3d8V1zoD0LMfA%2ByQKuROD%2FRU%2Fc6nwQFeqLWPIc0h4RE27NwTECuMx3LCbnI%2BnKgkuMB9jwR0vGXslNqAS0EvjDdpRkH78920lq%2BKHvCXqxMTonE6OESSArAd5447Ogcf2JWFg9RkbuG0MjaNS6cw7b3VSeBtyQhOw73ifUvoBdWIgDZ6HStQ3eyEtabKLw5lePEwGvQJ2HUQjFHnke0k4r%2FI47MolZ0CmprbQyVc%2Bz1X%2FPlcUwIQPZwPLQ29YQW0ItgefhS94NQXKJVcB%2FGcqxdvkRI2q%2FrU2%2BgCEy0BsaUDqCc37wGODC%2FkrLCBjqkAbrnKDSpd%2F40j95MyZxZmvWVzAFySPVa3TqlWPaNxeHleLNMRe6ugUrrCFjmf5LOG9gAyocf2gY0iAtAfbHqj9ERZiDJx7oyVmt9IzWVb9gc5PAkDMOA3X3L%2Bi35V5tAcXB9rBtEVhqb3ioWu5eE5vm0uU8EtiqYLlP1Mo2cN1iFf%2FUk2D7gMO6l%2FsN7LlNa2SNi5VuWomo2Ts2I1HDrZky81utj&X-Amz-Signature=1f92a324693a0b1db13c61cdb00371692f5292407905369008e8b6774c2bab83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PF4HTLE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDShS7XeaaUdBBanTt9Qs2q%2Fb6eDspxKx0jMnlYqRh5sgIhANfd%2BnDmQli%2BYFvIxstd4mnMUbqrO8Pinnyq0nctGcFNKv8DCB0QABoMNjM3NDIzMTgzODA1IgzWQFFQMR4zcGMzRecq3ANKroifGhD%2FldsJYSDCNikSxWt3XEYOftJx0zlY4HZMKhPr1qbQm1EwaDBZBBQDUDSefLvaf9HH3J5PmF9Zq04LlhS65tMEOGdMPLUTmgGyOSrosrgg2PDzltGjyq0EcsvTRkFw4ArhnzEWlK7rBY3OR2jc3yetlbjuys%2F3SO06TNoKdAn646oL4nUKFusfI%2FiEGAsbpgTznNjAWad%2BAyuQSuePqfBUECwcd7%2B4mizfChE3xYsl6rs0btN1lenlUy5hS%2BKbo%2BwYBZKG1N2qTLoVc4ea9W9vCFvCdfefutt3gSb806VQ%2BMO%2BXkL%2BrCq1IeY4vAdHk3d8V1zoD0LMfA%2ByQKuROD%2FRU%2Fc6nwQFeqLWPIc0h4RE27NwTECuMx3LCbnI%2BnKgkuMB9jwR0vGXslNqAS0EvjDdpRkH78920lq%2BKHvCXqxMTonE6OESSArAd5447Ogcf2JWFg9RkbuG0MjaNS6cw7b3VSeBtyQhOw73ifUvoBdWIgDZ6HStQ3eyEtabKLw5lePEwGvQJ2HUQjFHnke0k4r%2FI47MolZ0CmprbQyVc%2Bz1X%2FPlcUwIQPZwPLQ29YQW0ItgefhS94NQXKJVcB%2FGcqxdvkRI2q%2FrU2%2BgCEy0BsaUDqCc37wGODC%2FkrLCBjqkAbrnKDSpd%2F40j95MyZxZmvWVzAFySPVa3TqlWPaNxeHleLNMRe6ugUrrCFjmf5LOG9gAyocf2gY0iAtAfbHqj9ERZiDJx7oyVmt9IzWVb9gc5PAkDMOA3X3L%2Bi35V5tAcXB9rBtEVhqb3ioWu5eE5vm0uU8EtiqYLlP1Mo2cN1iFf%2FUk2D7gMO6l%2FsN7LlNa2SNi5VuWomo2Ts2I1HDrZky81utj&X-Amz-Signature=21028eb9a62cb87ea43569afaa2d17095f856e4b282712c2a8247d7898b3d1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
