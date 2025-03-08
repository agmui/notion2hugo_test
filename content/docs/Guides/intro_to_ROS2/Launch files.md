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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAI2X5XR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDkvWiNMJqkw4%2BYL7CmV9BN7jSAJ79TVhq6leA8TvD1SQIhANqB%2BPVgir5q6Zuk8dBR17y9RUk9oigR%2FjBgND3QwAU4Kv8DCFQQABoMNjM3NDIzMTgzODA1IgxhcgoF6opvDiJN7N0q3AMwe9%2BUMqcZfswl3hzRIbasK6zTDV5HQtMeKOL4Dww%2FKidfnzFEfbz4fVijaPfbeWrOLIsLkX9j7zPAauXOc7XWRMl9dn1iJ21HzbN5rFyvBILIcUetO4TRIyHVDHGVv%2FJ8gU%2Fqjmb82MZ3Fmt%2BHeZmBDDtSbbpy%2BSKy0G7sWcETdbsTI0PZCz%2F9iQHCZaazrOcXp8dk6sy51DVtnAKP0DCpkCx6DDaA7tKPF6TDhnux0XTfuliyav4p6PHFmAukfvLJKraMBLVoApfy0Xgwg3eGmhwZH25a5BIRLcDL%2BUepLuc9Ssn3UTpiRW%2BkLY%2FyBbqSBQa0%2FG2Hd21CcS%2FsmnSEo5TJFjNqBD64aqZtnstLfgcfIOXPxQA7m32GH3HaaE1OrSlm1TY4C2l6Zu0IiXEe2EyfHoXyAn%2Fg0CnnQUKtkuIlQqc06eSrahyC3KVemMmMmAwILDF5gHmgTcX1nwQVwdSSmqLXT1xzOI%2FWzDX0x7Ytc6xlTRS9UADKreYwRLbUc60immLqAq%2BkwxqJ0xQehdYzTAN77EjnzsaqErfWDACq%2FZ7S7pPyMV6MLJHFX69bLoTL5lqYZPkubAaMPkpN1mydXAkd4jpzYFKPbtXN79EVVxqgPWmVmyD3DDe3K6%2BBjqkAekgx5I3ivXeIiZpiPAEnuEQZrfrJNLqOYD6TZNCzcW85lTd1w8RWisnjfh6Vm8ndJB3JCzzuyJyvI56PzrzEoY3Cnw%2BngXVHXKdKR96QDtQXhNhbeen0nI6wGMEJ4ylrVPPPuJ49NZOnfZLgBHSvf%2F0kpt%2BlBEn4RSNaj5PDBd4EcM%2B1znpzdk4Sm65F6QTX90p1X%2FVj%2FEHZSE%2Bm2dyXZzLhqkD&X-Amz-Signature=724eb7e203a724fa6a96bc0cbbb4af147417be7b236dccf857bfeb50aed14554&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAI2X5XR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDkvWiNMJqkw4%2BYL7CmV9BN7jSAJ79TVhq6leA8TvD1SQIhANqB%2BPVgir5q6Zuk8dBR17y9RUk9oigR%2FjBgND3QwAU4Kv8DCFQQABoMNjM3NDIzMTgzODA1IgxhcgoF6opvDiJN7N0q3AMwe9%2BUMqcZfswl3hzRIbasK6zTDV5HQtMeKOL4Dww%2FKidfnzFEfbz4fVijaPfbeWrOLIsLkX9j7zPAauXOc7XWRMl9dn1iJ21HzbN5rFyvBILIcUetO4TRIyHVDHGVv%2FJ8gU%2Fqjmb82MZ3Fmt%2BHeZmBDDtSbbpy%2BSKy0G7sWcETdbsTI0PZCz%2F9iQHCZaazrOcXp8dk6sy51DVtnAKP0DCpkCx6DDaA7tKPF6TDhnux0XTfuliyav4p6PHFmAukfvLJKraMBLVoApfy0Xgwg3eGmhwZH25a5BIRLcDL%2BUepLuc9Ssn3UTpiRW%2BkLY%2FyBbqSBQa0%2FG2Hd21CcS%2FsmnSEo5TJFjNqBD64aqZtnstLfgcfIOXPxQA7m32GH3HaaE1OrSlm1TY4C2l6Zu0IiXEe2EyfHoXyAn%2Fg0CnnQUKtkuIlQqc06eSrahyC3KVemMmMmAwILDF5gHmgTcX1nwQVwdSSmqLXT1xzOI%2FWzDX0x7Ytc6xlTRS9UADKreYwRLbUc60immLqAq%2BkwxqJ0xQehdYzTAN77EjnzsaqErfWDACq%2FZ7S7pPyMV6MLJHFX69bLoTL5lqYZPkubAaMPkpN1mydXAkd4jpzYFKPbtXN79EVVxqgPWmVmyD3DDe3K6%2BBjqkAekgx5I3ivXeIiZpiPAEnuEQZrfrJNLqOYD6TZNCzcW85lTd1w8RWisnjfh6Vm8ndJB3JCzzuyJyvI56PzrzEoY3Cnw%2BngXVHXKdKR96QDtQXhNhbeen0nI6wGMEJ4ylrVPPPuJ49NZOnfZLgBHSvf%2F0kpt%2BlBEn4RSNaj5PDBd4EcM%2B1znpzdk4Sm65F6QTX90p1X%2FVj%2FEHZSE%2Bm2dyXZzLhqkD&X-Amz-Signature=a458d3b3cd68d3c185f1f0ec7b81f8945a69f00a74fbf8d6de7409dad6843540&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAI2X5XR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDkvWiNMJqkw4%2BYL7CmV9BN7jSAJ79TVhq6leA8TvD1SQIhANqB%2BPVgir5q6Zuk8dBR17y9RUk9oigR%2FjBgND3QwAU4Kv8DCFQQABoMNjM3NDIzMTgzODA1IgxhcgoF6opvDiJN7N0q3AMwe9%2BUMqcZfswl3hzRIbasK6zTDV5HQtMeKOL4Dww%2FKidfnzFEfbz4fVijaPfbeWrOLIsLkX9j7zPAauXOc7XWRMl9dn1iJ21HzbN5rFyvBILIcUetO4TRIyHVDHGVv%2FJ8gU%2Fqjmb82MZ3Fmt%2BHeZmBDDtSbbpy%2BSKy0G7sWcETdbsTI0PZCz%2F9iQHCZaazrOcXp8dk6sy51DVtnAKP0DCpkCx6DDaA7tKPF6TDhnux0XTfuliyav4p6PHFmAukfvLJKraMBLVoApfy0Xgwg3eGmhwZH25a5BIRLcDL%2BUepLuc9Ssn3UTpiRW%2BkLY%2FyBbqSBQa0%2FG2Hd21CcS%2FsmnSEo5TJFjNqBD64aqZtnstLfgcfIOXPxQA7m32GH3HaaE1OrSlm1TY4C2l6Zu0IiXEe2EyfHoXyAn%2Fg0CnnQUKtkuIlQqc06eSrahyC3KVemMmMmAwILDF5gHmgTcX1nwQVwdSSmqLXT1xzOI%2FWzDX0x7Ytc6xlTRS9UADKreYwRLbUc60immLqAq%2BkwxqJ0xQehdYzTAN77EjnzsaqErfWDACq%2FZ7S7pPyMV6MLJHFX69bLoTL5lqYZPkubAaMPkpN1mydXAkd4jpzYFKPbtXN79EVVxqgPWmVmyD3DDe3K6%2BBjqkAekgx5I3ivXeIiZpiPAEnuEQZrfrJNLqOYD6TZNCzcW85lTd1w8RWisnjfh6Vm8ndJB3JCzzuyJyvI56PzrzEoY3Cnw%2BngXVHXKdKR96QDtQXhNhbeen0nI6wGMEJ4ylrVPPPuJ49NZOnfZLgBHSvf%2F0kpt%2BlBEn4RSNaj5PDBd4EcM%2B1znpzdk4Sm65F6QTX90p1X%2FVj%2FEHZSE%2Bm2dyXZzLhqkD&X-Amz-Signature=859f157c8e8ed873f1818fdad5579989361cde04aea0ed3e35c8e7e6bce3182e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
