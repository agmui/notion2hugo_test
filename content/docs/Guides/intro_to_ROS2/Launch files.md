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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLXCKDW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaXGcVbb1%2F3MhqziZv2x1ZcptJ40%2BbL5LXGA6mn9Ta1AiALeoKCOEeTGcfjpBUSBZfDNEzzMKBhW7iSANFP9R8AQiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnniUMSX%2Fa%2BjuUwN%2BKtwDVpaIbvQmsjaana%2FxN19pz7NnIK3AAmbg4V6sqXCo28amCWMjfrOh7%2B%2FZfhMpMcWCRpLU1BNJXei%2B66yp%2BcKR1eodd%2B33T7J4mdAGY%2F7bInHdWR0zp4I7FXYmmVDN%2Bx2Evq5PR2ZuauMp9PyXIAkjyqMI1FdM0Cw5JcT0Ywg6aOFrzrkXblNRU%2BJ8NYqm36yEKjewV6JMEHLnFfpkeY5rt59x%2BA%2F9rFHZOht8QM18ltt16BVns3Z4zM0k44A%2FNRUu3mKPCloY8oVfM%2FsFKHZxjz1lQ7rgEQDDD8%2FkVw4qpJb5UF8QW6jyiSWwmYMuZSZgsHHDHLBmyc5lbg9lVMJx1FXanX9EumhMOktEOf%2F8WQeUJRtESAkrqDP1wGTRAJoF33lwI2ZkQTViI%2BEfLBSjWGIGScyaP%2FYNDW1%2FGe%2BMgYsegW09kSNFTrLNKDP2nRnWpV2%2B5z72VWJKB3lc%2FKIN3xPAecDhDY1fBNsP5HXhfA9qBYQDjWTD3a4lo4FCF2AcwJZhpgSHzwSsMaVLVouSTh0eFtmJZ1PvuqP%2FGA0ueuUqQRJByOK%2B4zrtODk5oySjULY%2F9WruSlpghsXTFw8bW%2B5mouY18wdShuTj13eryisdczoiJFMxtkHKCaAw44yOwwY6pgFdm%2Fb40CmWUFDfSzNFvxHpA7hAYKnCfm7rdiAR8AvHdazwzIZooALmEuOitf0HjPfnzH0nRnOzf0OLPZmPo1IU97w7ld1mq02ogtI%2Fbfkyt6uN0Qe%2BNLMaIbLHOdH3vaqLDLgDdlsfmgOIwd1iP%2Fwml%2BGJL0e5GUXISNdIl2L8hr2erwK9e39KNL2jZvlycGzmTziT7QjyQMUJcQZRPYBIfacMtfW2&X-Amz-Signature=2d4a84a9761e71d7a4b1f997e739da971751d4c40eb8eb588d4e543265eda9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLXCKDW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaXGcVbb1%2F3MhqziZv2x1ZcptJ40%2BbL5LXGA6mn9Ta1AiALeoKCOEeTGcfjpBUSBZfDNEzzMKBhW7iSANFP9R8AQiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnniUMSX%2Fa%2BjuUwN%2BKtwDVpaIbvQmsjaana%2FxN19pz7NnIK3AAmbg4V6sqXCo28amCWMjfrOh7%2B%2FZfhMpMcWCRpLU1BNJXei%2B66yp%2BcKR1eodd%2B33T7J4mdAGY%2F7bInHdWR0zp4I7FXYmmVDN%2Bx2Evq5PR2ZuauMp9PyXIAkjyqMI1FdM0Cw5JcT0Ywg6aOFrzrkXblNRU%2BJ8NYqm36yEKjewV6JMEHLnFfpkeY5rt59x%2BA%2F9rFHZOht8QM18ltt16BVns3Z4zM0k44A%2FNRUu3mKPCloY8oVfM%2FsFKHZxjz1lQ7rgEQDDD8%2FkVw4qpJb5UF8QW6jyiSWwmYMuZSZgsHHDHLBmyc5lbg9lVMJx1FXanX9EumhMOktEOf%2F8WQeUJRtESAkrqDP1wGTRAJoF33lwI2ZkQTViI%2BEfLBSjWGIGScyaP%2FYNDW1%2FGe%2BMgYsegW09kSNFTrLNKDP2nRnWpV2%2B5z72VWJKB3lc%2FKIN3xPAecDhDY1fBNsP5HXhfA9qBYQDjWTD3a4lo4FCF2AcwJZhpgSHzwSsMaVLVouSTh0eFtmJZ1PvuqP%2FGA0ueuUqQRJByOK%2B4zrtODk5oySjULY%2F9WruSlpghsXTFw8bW%2B5mouY18wdShuTj13eryisdczoiJFMxtkHKCaAw44yOwwY6pgFdm%2Fb40CmWUFDfSzNFvxHpA7hAYKnCfm7rdiAR8AvHdazwzIZooALmEuOitf0HjPfnzH0nRnOzf0OLPZmPo1IU97w7ld1mq02ogtI%2Fbfkyt6uN0Qe%2BNLMaIbLHOdH3vaqLDLgDdlsfmgOIwd1iP%2Fwml%2BGJL0e5GUXISNdIl2L8hr2erwK9e39KNL2jZvlycGzmTziT7QjyQMUJcQZRPYBIfacMtfW2&X-Amz-Signature=979b6279c3e13346936d2ff7a224b787aaffb5affde99221cac5f5d496158452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLXCKDW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaXGcVbb1%2F3MhqziZv2x1ZcptJ40%2BbL5LXGA6mn9Ta1AiALeoKCOEeTGcfjpBUSBZfDNEzzMKBhW7iSANFP9R8AQiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnniUMSX%2Fa%2BjuUwN%2BKtwDVpaIbvQmsjaana%2FxN19pz7NnIK3AAmbg4V6sqXCo28amCWMjfrOh7%2B%2FZfhMpMcWCRpLU1BNJXei%2B66yp%2BcKR1eodd%2B33T7J4mdAGY%2F7bInHdWR0zp4I7FXYmmVDN%2Bx2Evq5PR2ZuauMp9PyXIAkjyqMI1FdM0Cw5JcT0Ywg6aOFrzrkXblNRU%2BJ8NYqm36yEKjewV6JMEHLnFfpkeY5rt59x%2BA%2F9rFHZOht8QM18ltt16BVns3Z4zM0k44A%2FNRUu3mKPCloY8oVfM%2FsFKHZxjz1lQ7rgEQDDD8%2FkVw4qpJb5UF8QW6jyiSWwmYMuZSZgsHHDHLBmyc5lbg9lVMJx1FXanX9EumhMOktEOf%2F8WQeUJRtESAkrqDP1wGTRAJoF33lwI2ZkQTViI%2BEfLBSjWGIGScyaP%2FYNDW1%2FGe%2BMgYsegW09kSNFTrLNKDP2nRnWpV2%2B5z72VWJKB3lc%2FKIN3xPAecDhDY1fBNsP5HXhfA9qBYQDjWTD3a4lo4FCF2AcwJZhpgSHzwSsMaVLVouSTh0eFtmJZ1PvuqP%2FGA0ueuUqQRJByOK%2B4zrtODk5oySjULY%2F9WruSlpghsXTFw8bW%2B5mouY18wdShuTj13eryisdczoiJFMxtkHKCaAw44yOwwY6pgFdm%2Fb40CmWUFDfSzNFvxHpA7hAYKnCfm7rdiAR8AvHdazwzIZooALmEuOitf0HjPfnzH0nRnOzf0OLPZmPo1IU97w7ld1mq02ogtI%2Fbfkyt6uN0Qe%2BNLMaIbLHOdH3vaqLDLgDdlsfmgOIwd1iP%2Fwml%2BGJL0e5GUXISNdIl2L8hr2erwK9e39KNL2jZvlycGzmTziT7QjyQMUJcQZRPYBIfacMtfW2&X-Amz-Signature=cd4f38455a4479cca6b83d694f8bcbfe505376856b1a660b212729584a8a7375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
