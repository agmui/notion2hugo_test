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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPDWOK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIAxHgfrskMOMyPo6u%2Be6mjEEPAqR7PuCb0z3pshJFOAiANwqSsQ%2F%2FQaE63kkMBTnTZoJEGNbwtoLDcCIA9TAKF2yr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMVBl9GUnvwiYybW3aKtwD9NkcZNuLR%2FQw%2BcGutYc%2B6EZ9eW6iboQyvuFrx8oyKEeQqPknlklFbrKzGKriz1f5MY9e7jXedrzzuChMUr%2BJ6%2Bswdq1IqNlll0H0YgUzyqRVFxm1FCR%2BRJySL3K44tyGSdGp7p8UCYLELxM0udXTMH1PWpIsuxxD97vSxLoKSNJjZZBH%2B9HqsgFS7ADCdjeLRMgK48v2D2odv3xNWc3Dm558IXAXeA0rGcmVRRKaZ07%2FFD9m7De122%2FqY1EexxnT6s%2BG1y7L6FoVftf80N4MdHlijHat6kl7wxITu3IsMfth%2FUeOOKtDCbjZhkhY3CAd8qQbvJTs%2F6auMk2I5nc1Nbn0RvUNj3N241M2gfjls%2BW0tZy53HusWezujOYa2JqMQbw4IRjIXfrJuigZ4BGs5IYAR5KcQkBn63lDU9FxOrpxIzH0sYC8GlkpNQco9RX6eTZhkQOX4vSHb3CVyaoGdwca09fCYFrOajUaICrCqlcXftHhtaQQP6iFPnVJoH74amOpc9kgjvjaxbgX1fBz65UhQMDvz9ynPRsVbrFeqAlzRiQYuiZZaBn9cppnyGWbW0hD5SlIiZQ3C1hIn3ygCjzP2wsat3zKgRR0eUzw7Remoe3tcCJei%2FzsveowvKj0vwY6pgHe9RITYb%2FBnG0mlSzjKSsgY9QBB3%2FzMyHzyyhIPW1zQLX%2B8RFOMRSLymneN%2BpPHvWsSaa1%2BpTQ3CZ9nJ6cfF2oaYZvFIoqcRlPnsycJZFSHsGPUQn37NITSY3FRX8TFBLjLxqa2wGKIGbYIct9DB3LUyJCZxxqnRyAzrz6VWbAKvIRN9VY9SK3bYb%2BT%2FMg8vvOLT0xtUoL85N6aVAuVTL4hxCDXUFD&X-Amz-Signature=84d8226e3dabfac6da2a626697d7312eb153682181625aa54768ed235dcc910a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPDWOK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIAxHgfrskMOMyPo6u%2Be6mjEEPAqR7PuCb0z3pshJFOAiANwqSsQ%2F%2FQaE63kkMBTnTZoJEGNbwtoLDcCIA9TAKF2yr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMVBl9GUnvwiYybW3aKtwD9NkcZNuLR%2FQw%2BcGutYc%2B6EZ9eW6iboQyvuFrx8oyKEeQqPknlklFbrKzGKriz1f5MY9e7jXedrzzuChMUr%2BJ6%2Bswdq1IqNlll0H0YgUzyqRVFxm1FCR%2BRJySL3K44tyGSdGp7p8UCYLELxM0udXTMH1PWpIsuxxD97vSxLoKSNJjZZBH%2B9HqsgFS7ADCdjeLRMgK48v2D2odv3xNWc3Dm558IXAXeA0rGcmVRRKaZ07%2FFD9m7De122%2FqY1EexxnT6s%2BG1y7L6FoVftf80N4MdHlijHat6kl7wxITu3IsMfth%2FUeOOKtDCbjZhkhY3CAd8qQbvJTs%2F6auMk2I5nc1Nbn0RvUNj3N241M2gfjls%2BW0tZy53HusWezujOYa2JqMQbw4IRjIXfrJuigZ4BGs5IYAR5KcQkBn63lDU9FxOrpxIzH0sYC8GlkpNQco9RX6eTZhkQOX4vSHb3CVyaoGdwca09fCYFrOajUaICrCqlcXftHhtaQQP6iFPnVJoH74amOpc9kgjvjaxbgX1fBz65UhQMDvz9ynPRsVbrFeqAlzRiQYuiZZaBn9cppnyGWbW0hD5SlIiZQ3C1hIn3ygCjzP2wsat3zKgRR0eUzw7Remoe3tcCJei%2FzsveowvKj0vwY6pgHe9RITYb%2FBnG0mlSzjKSsgY9QBB3%2FzMyHzyyhIPW1zQLX%2B8RFOMRSLymneN%2BpPHvWsSaa1%2BpTQ3CZ9nJ6cfF2oaYZvFIoqcRlPnsycJZFSHsGPUQn37NITSY3FRX8TFBLjLxqa2wGKIGbYIct9DB3LUyJCZxxqnRyAzrz6VWbAKvIRN9VY9SK3bYb%2BT%2FMg8vvOLT0xtUoL85N6aVAuVTL4hxCDXUFD&X-Amz-Signature=557f40ab7386068fee970aa7a3e5d28bd1bdb1083ddf44862a4e34a8cde9a200&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPDWOK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIAxHgfrskMOMyPo6u%2Be6mjEEPAqR7PuCb0z3pshJFOAiANwqSsQ%2F%2FQaE63kkMBTnTZoJEGNbwtoLDcCIA9TAKF2yr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMVBl9GUnvwiYybW3aKtwD9NkcZNuLR%2FQw%2BcGutYc%2B6EZ9eW6iboQyvuFrx8oyKEeQqPknlklFbrKzGKriz1f5MY9e7jXedrzzuChMUr%2BJ6%2Bswdq1IqNlll0H0YgUzyqRVFxm1FCR%2BRJySL3K44tyGSdGp7p8UCYLELxM0udXTMH1PWpIsuxxD97vSxLoKSNJjZZBH%2B9HqsgFS7ADCdjeLRMgK48v2D2odv3xNWc3Dm558IXAXeA0rGcmVRRKaZ07%2FFD9m7De122%2FqY1EexxnT6s%2BG1y7L6FoVftf80N4MdHlijHat6kl7wxITu3IsMfth%2FUeOOKtDCbjZhkhY3CAd8qQbvJTs%2F6auMk2I5nc1Nbn0RvUNj3N241M2gfjls%2BW0tZy53HusWezujOYa2JqMQbw4IRjIXfrJuigZ4BGs5IYAR5KcQkBn63lDU9FxOrpxIzH0sYC8GlkpNQco9RX6eTZhkQOX4vSHb3CVyaoGdwca09fCYFrOajUaICrCqlcXftHhtaQQP6iFPnVJoH74amOpc9kgjvjaxbgX1fBz65UhQMDvz9ynPRsVbrFeqAlzRiQYuiZZaBn9cppnyGWbW0hD5SlIiZQ3C1hIn3ygCjzP2wsat3zKgRR0eUzw7Remoe3tcCJei%2FzsveowvKj0vwY6pgHe9RITYb%2FBnG0mlSzjKSsgY9QBB3%2FzMyHzyyhIPW1zQLX%2B8RFOMRSLymneN%2BpPHvWsSaa1%2BpTQ3CZ9nJ6cfF2oaYZvFIoqcRlPnsycJZFSHsGPUQn37NITSY3FRX8TFBLjLxqa2wGKIGbYIct9DB3LUyJCZxxqnRyAzrz6VWbAKvIRN9VY9SK3bYb%2BT%2FMg8vvOLT0xtUoL85N6aVAuVTL4hxCDXUFD&X-Amz-Signature=c4c35226ebea900d00a34513aa635e117d53a80e994ec9ee6c032ebfe0a476e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
