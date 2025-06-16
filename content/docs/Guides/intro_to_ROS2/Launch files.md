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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCXSZH2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEsOQr%2BHb%2FZQ%2Bd1QatGVC958gyAUNma1%2FPlVeZQJHB%2FkAiEAyESaOEQUf1BnSjP5P8g%2FyN2os93iahpwAYVHDs7PAJ8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMOoWCXcdcYIVY93eyrcA5YbovyURVLkVu1A3DrE2237MQk%2BjDnLUwDYk3yymjsSqVupTgravo1Zkp0XC318m27L7rg02ujwtygkqwH2RwnlC9rQHCgOd%2F8fn0GmM9N3KrknfgYaIWVt6CjLFN4fgFHG5oCAN9hA8y1S5V4NPgyxfPYXLZq9KGcv4XjdnKnLyof1XCh8nP341rWaEr3KR8ozv926U77jC%2BR8KQOdOJIFoMt%2BkDxmg3OjYLt1yCMSxWHl6OaWnlOJgURSBQ10CcdrBwXdZ35iaxcBQacz220AIqYl8O%2BTrxdqgRc17AHbnwNkrWFFvgBm5l8r6kn3E5HUykOMI0ygz7MqnRljl7%2FXrcINa0CW79WQR95qdOK%2BNOigcEybigBqHizkodVhIdXBKN8reS5uHQ%2BjzdUiOBuKr8h4qgfmlYvFfUheTfY97bKQWfVkcFaJqIEFISMcuvjfVY4xwfUfm8zJ1iyqSs0knpqich7D8AvZ5fekMtQ9Bhk9rTGEyp4O6ezbsqYhIKuScCvVMGo8W3YMOxowNcfVt%2Bo9L%2BghSUGN5qNZDe8%2FKXv5sQR3riu8FJfN1Z8Leez2vHGJ%2Bll%2BW5vebpZ3Wi82gOJFm7Uh4%2F8oaqWJMs6Ma4unxHLHIMCkM552MIqbwMIGOqUB6my3e%2FGFX83RLo2wBggr%2BKLpInFg8nxL30sfuj%2BfS6AdSOfDk9abAwkqBaW3xQcOJhEjjmg34yd7fB%2F3189y5PsusSBGfK4LAfLIh8xy6YZZ%2BCDhnkzb3V89l4zaOPBpsiQGP3BmFw91ZZW9Ap4OVKD3v3Ead8X03BEgL6nJg%2Fhf52PMNOHC90ZqQsMWERE7U8UxnEnJNt%2B51wN0WJPar3H9ztUo&X-Amz-Signature=9176ddf7a3009d3c6b258efb0d5baf0eb61424fed33a8743336004b9845ee0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCXSZH2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEsOQr%2BHb%2FZQ%2Bd1QatGVC958gyAUNma1%2FPlVeZQJHB%2FkAiEAyESaOEQUf1BnSjP5P8g%2FyN2os93iahpwAYVHDs7PAJ8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMOoWCXcdcYIVY93eyrcA5YbovyURVLkVu1A3DrE2237MQk%2BjDnLUwDYk3yymjsSqVupTgravo1Zkp0XC318m27L7rg02ujwtygkqwH2RwnlC9rQHCgOd%2F8fn0GmM9N3KrknfgYaIWVt6CjLFN4fgFHG5oCAN9hA8y1S5V4NPgyxfPYXLZq9KGcv4XjdnKnLyof1XCh8nP341rWaEr3KR8ozv926U77jC%2BR8KQOdOJIFoMt%2BkDxmg3OjYLt1yCMSxWHl6OaWnlOJgURSBQ10CcdrBwXdZ35iaxcBQacz220AIqYl8O%2BTrxdqgRc17AHbnwNkrWFFvgBm5l8r6kn3E5HUykOMI0ygz7MqnRljl7%2FXrcINa0CW79WQR95qdOK%2BNOigcEybigBqHizkodVhIdXBKN8reS5uHQ%2BjzdUiOBuKr8h4qgfmlYvFfUheTfY97bKQWfVkcFaJqIEFISMcuvjfVY4xwfUfm8zJ1iyqSs0knpqich7D8AvZ5fekMtQ9Bhk9rTGEyp4O6ezbsqYhIKuScCvVMGo8W3YMOxowNcfVt%2Bo9L%2BghSUGN5qNZDe8%2FKXv5sQR3riu8FJfN1Z8Leez2vHGJ%2Bll%2BW5vebpZ3Wi82gOJFm7Uh4%2F8oaqWJMs6Ma4unxHLHIMCkM552MIqbwMIGOqUB6my3e%2FGFX83RLo2wBggr%2BKLpInFg8nxL30sfuj%2BfS6AdSOfDk9abAwkqBaW3xQcOJhEjjmg34yd7fB%2F3189y5PsusSBGfK4LAfLIh8xy6YZZ%2BCDhnkzb3V89l4zaOPBpsiQGP3BmFw91ZZW9Ap4OVKD3v3Ead8X03BEgL6nJg%2Fhf52PMNOHC90ZqQsMWERE7U8UxnEnJNt%2B51wN0WJPar3H9ztUo&X-Amz-Signature=c5f951a6ce6c04a5086c664906e20da21ef49aa714d36a21a0c8bd7958a1ffb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCXSZH2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEsOQr%2BHb%2FZQ%2Bd1QatGVC958gyAUNma1%2FPlVeZQJHB%2FkAiEAyESaOEQUf1BnSjP5P8g%2FyN2os93iahpwAYVHDs7PAJ8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMOoWCXcdcYIVY93eyrcA5YbovyURVLkVu1A3DrE2237MQk%2BjDnLUwDYk3yymjsSqVupTgravo1Zkp0XC318m27L7rg02ujwtygkqwH2RwnlC9rQHCgOd%2F8fn0GmM9N3KrknfgYaIWVt6CjLFN4fgFHG5oCAN9hA8y1S5V4NPgyxfPYXLZq9KGcv4XjdnKnLyof1XCh8nP341rWaEr3KR8ozv926U77jC%2BR8KQOdOJIFoMt%2BkDxmg3OjYLt1yCMSxWHl6OaWnlOJgURSBQ10CcdrBwXdZ35iaxcBQacz220AIqYl8O%2BTrxdqgRc17AHbnwNkrWFFvgBm5l8r6kn3E5HUykOMI0ygz7MqnRljl7%2FXrcINa0CW79WQR95qdOK%2BNOigcEybigBqHizkodVhIdXBKN8reS5uHQ%2BjzdUiOBuKr8h4qgfmlYvFfUheTfY97bKQWfVkcFaJqIEFISMcuvjfVY4xwfUfm8zJ1iyqSs0knpqich7D8AvZ5fekMtQ9Bhk9rTGEyp4O6ezbsqYhIKuScCvVMGo8W3YMOxowNcfVt%2Bo9L%2BghSUGN5qNZDe8%2FKXv5sQR3riu8FJfN1Z8Leez2vHGJ%2Bll%2BW5vebpZ3Wi82gOJFm7Uh4%2F8oaqWJMs6Ma4unxHLHIMCkM552MIqbwMIGOqUB6my3e%2FGFX83RLo2wBggr%2BKLpInFg8nxL30sfuj%2BfS6AdSOfDk9abAwkqBaW3xQcOJhEjjmg34yd7fB%2F3189y5PsusSBGfK4LAfLIh8xy6YZZ%2BCDhnkzb3V89l4zaOPBpsiQGP3BmFw91ZZW9Ap4OVKD3v3Ead8X03BEgL6nJg%2Fhf52PMNOHC90ZqQsMWERE7U8UxnEnJNt%2B51wN0WJPar3H9ztUo&X-Amz-Signature=1974cae866ac80b89de48ddf3d306d20af4dfa505d043ab81c7f4415c748402e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
