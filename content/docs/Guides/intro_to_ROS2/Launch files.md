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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUK77MNS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBwEAqe%2BiH2dfr056qqifaYt2b6titfZq6ovde8lFy9UAiEA3BAMxVIZejjOmVtuC%2BS0OoKuAr4bUK1PRSukTnaLFtUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcbgtBiuY0X%2F9rvqircAzLempaMjT%2FnPIDNEqvlb%2F5RnKtUaCq3enR9ZFyUEIVW8m8DBxwr5EQKpbrk2%2Bu7yI%2BFb1Ycg9h62wOYdXk2XdogV8uVaF9jJv3AEM6%2FP%2FHOnLvwP8M5B0pn%2BNs7duoMS7%2FVl3tBZzdDNhvP7oxIKlDRJhhKExmb7bdreN1lwlB8p18lyqNN2kOzDEZ9fYX0dIDPmW%2BYOkVIxM4U88zDwxA2mTxepOaT1kcZH5U1TEoGnLHSUwL0OiX2adn3KgRNmNaP4piTmKKgju7IXJ19AVqFAP02AODNZ5ohNQFeMCJlSgZfsTNmqbio6zjKLCBQB6X8H20nXaorEB1cZlNOM1UUgwzElBVQnpcgWT%2Fg7XXlg2xHXUNrgg%2F46ZsfAnvXRSxn75S87%2B1zK4%2BL4L2YeysrXSXzTUaCgONi08kvp0cvA8MqLl6pw5Uzp9J1nSzd6qXmbPHayJ0DYI0G1mdbPr3HkvkBf2TYWyfuLvaX0GFJEf9XY%2Btke%2BmwzUj6gqqjJgFXtHsnbsDKxjvtNafYtFQKOToWAuBkQfRKQZB9dwrXvm0nOYanAU8dCUip2PU%2BRquCTz2H127QnAjo80LoJMj%2B5%2BtMV7v3odxYjHpNhZLIXcf0vl%2BNnvU%2Fpc1kMLP5xsAGOqUBwUeWXe5ZLYljUIu8OfGoBsURuwWfr0p2lc6R2kgAUsREC96fcQGFpIz4VcQRiRNWQU%2BTomayhy6VLqgYV4r9oKuCYF%2FoirQF3xPbzGdDEinlyjzTH1ZwHqJjFE9eQekEhHTFZTa1YTGnPbhJH0Rus4%2B6T%2FoXM6WQBLn0Dg%2BjYaBNkhRFRThrHihAB%2Fiqb5FspYyMwJdMfrGKape8303M6aYFiUNP&X-Amz-Signature=256156deabfd78050657e557fd2dee3c5fdf5400fbfd6cfc24a7fb1479919e43&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUK77MNS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBwEAqe%2BiH2dfr056qqifaYt2b6titfZq6ovde8lFy9UAiEA3BAMxVIZejjOmVtuC%2BS0OoKuAr4bUK1PRSukTnaLFtUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcbgtBiuY0X%2F9rvqircAzLempaMjT%2FnPIDNEqvlb%2F5RnKtUaCq3enR9ZFyUEIVW8m8DBxwr5EQKpbrk2%2Bu7yI%2BFb1Ycg9h62wOYdXk2XdogV8uVaF9jJv3AEM6%2FP%2FHOnLvwP8M5B0pn%2BNs7duoMS7%2FVl3tBZzdDNhvP7oxIKlDRJhhKExmb7bdreN1lwlB8p18lyqNN2kOzDEZ9fYX0dIDPmW%2BYOkVIxM4U88zDwxA2mTxepOaT1kcZH5U1TEoGnLHSUwL0OiX2adn3KgRNmNaP4piTmKKgju7IXJ19AVqFAP02AODNZ5ohNQFeMCJlSgZfsTNmqbio6zjKLCBQB6X8H20nXaorEB1cZlNOM1UUgwzElBVQnpcgWT%2Fg7XXlg2xHXUNrgg%2F46ZsfAnvXRSxn75S87%2B1zK4%2BL4L2YeysrXSXzTUaCgONi08kvp0cvA8MqLl6pw5Uzp9J1nSzd6qXmbPHayJ0DYI0G1mdbPr3HkvkBf2TYWyfuLvaX0GFJEf9XY%2Btke%2BmwzUj6gqqjJgFXtHsnbsDKxjvtNafYtFQKOToWAuBkQfRKQZB9dwrXvm0nOYanAU8dCUip2PU%2BRquCTz2H127QnAjo80LoJMj%2B5%2BtMV7v3odxYjHpNhZLIXcf0vl%2BNnvU%2Fpc1kMLP5xsAGOqUBwUeWXe5ZLYljUIu8OfGoBsURuwWfr0p2lc6R2kgAUsREC96fcQGFpIz4VcQRiRNWQU%2BTomayhy6VLqgYV4r9oKuCYF%2FoirQF3xPbzGdDEinlyjzTH1ZwHqJjFE9eQekEhHTFZTa1YTGnPbhJH0Rus4%2B6T%2FoXM6WQBLn0Dg%2BjYaBNkhRFRThrHihAB%2Fiqb5FspYyMwJdMfrGKape8303M6aYFiUNP&X-Amz-Signature=104f7f70ca7334ca7b5ffcc46e79005766b51ec7a40b8f4b38082756eb57688a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUK77MNS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBwEAqe%2BiH2dfr056qqifaYt2b6titfZq6ovde8lFy9UAiEA3BAMxVIZejjOmVtuC%2BS0OoKuAr4bUK1PRSukTnaLFtUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcbgtBiuY0X%2F9rvqircAzLempaMjT%2FnPIDNEqvlb%2F5RnKtUaCq3enR9ZFyUEIVW8m8DBxwr5EQKpbrk2%2Bu7yI%2BFb1Ycg9h62wOYdXk2XdogV8uVaF9jJv3AEM6%2FP%2FHOnLvwP8M5B0pn%2BNs7duoMS7%2FVl3tBZzdDNhvP7oxIKlDRJhhKExmb7bdreN1lwlB8p18lyqNN2kOzDEZ9fYX0dIDPmW%2BYOkVIxM4U88zDwxA2mTxepOaT1kcZH5U1TEoGnLHSUwL0OiX2adn3KgRNmNaP4piTmKKgju7IXJ19AVqFAP02AODNZ5ohNQFeMCJlSgZfsTNmqbio6zjKLCBQB6X8H20nXaorEB1cZlNOM1UUgwzElBVQnpcgWT%2Fg7XXlg2xHXUNrgg%2F46ZsfAnvXRSxn75S87%2B1zK4%2BL4L2YeysrXSXzTUaCgONi08kvp0cvA8MqLl6pw5Uzp9J1nSzd6qXmbPHayJ0DYI0G1mdbPr3HkvkBf2TYWyfuLvaX0GFJEf9XY%2Btke%2BmwzUj6gqqjJgFXtHsnbsDKxjvtNafYtFQKOToWAuBkQfRKQZB9dwrXvm0nOYanAU8dCUip2PU%2BRquCTz2H127QnAjo80LoJMj%2B5%2BtMV7v3odxYjHpNhZLIXcf0vl%2BNnvU%2Fpc1kMLP5xsAGOqUBwUeWXe5ZLYljUIu8OfGoBsURuwWfr0p2lc6R2kgAUsREC96fcQGFpIz4VcQRiRNWQU%2BTomayhy6VLqgYV4r9oKuCYF%2FoirQF3xPbzGdDEinlyjzTH1ZwHqJjFE9eQekEhHTFZTa1YTGnPbhJH0Rus4%2B6T%2FoXM6WQBLn0Dg%2BjYaBNkhRFRThrHihAB%2Fiqb5FspYyMwJdMfrGKape8303M6aYFiUNP&X-Amz-Signature=4260bf1e903f1fd8b434f00ecc0d6f6bbfa2fa777392fa9384914357ff6df268&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
