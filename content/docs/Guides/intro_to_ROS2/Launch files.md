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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCVENUAS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvN1o7EBcxNTAj2NNCUQV4RuCc0HGR5WYyytODRb1YOAiBE5RHnTdqwwDfjdljSu5hU9IgI%2FRCjABe7uPV73WwEByqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8pazsmxMMdgI4wCpKtwDCxhy9OxDBOU6FB0qj990ImRm98eGFKsrvgeuK2dx0zw%2B99ZN9Kr%2B5FzgoHmE8OXmH63BC3E05lcqvOn6X3V2JwQICK4UvNzXgRU97G23qxfjPNttrdoelyURrxcllQFfK5P10BL9nUHvtdEFIQfkUTX1uv%2FI9BZVs9SyGgBLyomX3vDICz9jwoCCOgKl5XEQCetyub8gxtFW%2FuzCVfK2x43HDELdUT%2BuoLJTdL9AuJhFrfmkgUNQzr0m2ZLgnjxIg9dEYz3XAU4OiI1tXYcUZ94fIvl4T1jhRY%2BSC1AoyK%2BDjLcVKamxaqFKiLIwGMYyCByQYMLY%2FYccD9ti3XfCLcvEnHdAP%2BC2QGuBsHfCkCqty0k9VZhtJq%2BpZ4b6ivNGFFmIznmodw7L6gTc7ZmqWzl1v%2BVA5eMY85whrbKQeBiwIHqxYxkgXjX7BZ9wpxrtTRUXW3KUmaV1VxVSqbV6YtqTlw1G%2B6TVkxjOEjBgrvFpwd4jtXJfLOnK897Ogr%2FDQQ5H7Sk4P2e3Zf2UVux3p%2BXsB5EqqIhKHyPDTc4C0RqPCdG1VGgaK2dLTYJrBIpU%2FwcSMQWNrwnAOCrf%2B9TwuHPITCOSeV9FPPgHLUpkILqROPcS2X7N3v1fWmAwrcHUwgY6pgGF20mzq7w8Op6chh5ONMncUxw8yTq9agOKxQis98FblUyzx0caBAhk8sRacTPTj11kA%2FTMwIfu24KwkItOblW3I7kVc6SsM5IbhyMdPTtNLw4xFurvBnSH4MCaRa8bqDFTg1v4qXtjuofoFMGxhiKnryiEUDI%2FTnW8ByxGCmYNrnb8bDP0sgGx0EmKWwcYcp4y2c%2F82W%2BboL9qOO2gJj2kfpztNLFC&X-Amz-Signature=03588c7313eb38bf0896b20460f40a30ae1799f3082495ea65932bc09463445d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCVENUAS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvN1o7EBcxNTAj2NNCUQV4RuCc0HGR5WYyytODRb1YOAiBE5RHnTdqwwDfjdljSu5hU9IgI%2FRCjABe7uPV73WwEByqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8pazsmxMMdgI4wCpKtwDCxhy9OxDBOU6FB0qj990ImRm98eGFKsrvgeuK2dx0zw%2B99ZN9Kr%2B5FzgoHmE8OXmH63BC3E05lcqvOn6X3V2JwQICK4UvNzXgRU97G23qxfjPNttrdoelyURrxcllQFfK5P10BL9nUHvtdEFIQfkUTX1uv%2FI9BZVs9SyGgBLyomX3vDICz9jwoCCOgKl5XEQCetyub8gxtFW%2FuzCVfK2x43HDELdUT%2BuoLJTdL9AuJhFrfmkgUNQzr0m2ZLgnjxIg9dEYz3XAU4OiI1tXYcUZ94fIvl4T1jhRY%2BSC1AoyK%2BDjLcVKamxaqFKiLIwGMYyCByQYMLY%2FYccD9ti3XfCLcvEnHdAP%2BC2QGuBsHfCkCqty0k9VZhtJq%2BpZ4b6ivNGFFmIznmodw7L6gTc7ZmqWzl1v%2BVA5eMY85whrbKQeBiwIHqxYxkgXjX7BZ9wpxrtTRUXW3KUmaV1VxVSqbV6YtqTlw1G%2B6TVkxjOEjBgrvFpwd4jtXJfLOnK897Ogr%2FDQQ5H7Sk4P2e3Zf2UVux3p%2BXsB5EqqIhKHyPDTc4C0RqPCdG1VGgaK2dLTYJrBIpU%2FwcSMQWNrwnAOCrf%2B9TwuHPITCOSeV9FPPgHLUpkILqROPcS2X7N3v1fWmAwrcHUwgY6pgGF20mzq7w8Op6chh5ONMncUxw8yTq9agOKxQis98FblUyzx0caBAhk8sRacTPTj11kA%2FTMwIfu24KwkItOblW3I7kVc6SsM5IbhyMdPTtNLw4xFurvBnSH4MCaRa8bqDFTg1v4qXtjuofoFMGxhiKnryiEUDI%2FTnW8ByxGCmYNrnb8bDP0sgGx0EmKWwcYcp4y2c%2F82W%2BboL9qOO2gJj2kfpztNLFC&X-Amz-Signature=b063a4d82645e7cf1e0b5deebe8f231ca298ac527b38521dfe1af3c13e1cc3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCVENUAS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvN1o7EBcxNTAj2NNCUQV4RuCc0HGR5WYyytODRb1YOAiBE5RHnTdqwwDfjdljSu5hU9IgI%2FRCjABe7uPV73WwEByqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8pazsmxMMdgI4wCpKtwDCxhy9OxDBOU6FB0qj990ImRm98eGFKsrvgeuK2dx0zw%2B99ZN9Kr%2B5FzgoHmE8OXmH63BC3E05lcqvOn6X3V2JwQICK4UvNzXgRU97G23qxfjPNttrdoelyURrxcllQFfK5P10BL9nUHvtdEFIQfkUTX1uv%2FI9BZVs9SyGgBLyomX3vDICz9jwoCCOgKl5XEQCetyub8gxtFW%2FuzCVfK2x43HDELdUT%2BuoLJTdL9AuJhFrfmkgUNQzr0m2ZLgnjxIg9dEYz3XAU4OiI1tXYcUZ94fIvl4T1jhRY%2BSC1AoyK%2BDjLcVKamxaqFKiLIwGMYyCByQYMLY%2FYccD9ti3XfCLcvEnHdAP%2BC2QGuBsHfCkCqty0k9VZhtJq%2BpZ4b6ivNGFFmIznmodw7L6gTc7ZmqWzl1v%2BVA5eMY85whrbKQeBiwIHqxYxkgXjX7BZ9wpxrtTRUXW3KUmaV1VxVSqbV6YtqTlw1G%2B6TVkxjOEjBgrvFpwd4jtXJfLOnK897Ogr%2FDQQ5H7Sk4P2e3Zf2UVux3p%2BXsB5EqqIhKHyPDTc4C0RqPCdG1VGgaK2dLTYJrBIpU%2FwcSMQWNrwnAOCrf%2B9TwuHPITCOSeV9FPPgHLUpkILqROPcS2X7N3v1fWmAwrcHUwgY6pgGF20mzq7w8Op6chh5ONMncUxw8yTq9agOKxQis98FblUyzx0caBAhk8sRacTPTj11kA%2FTMwIfu24KwkItOblW3I7kVc6SsM5IbhyMdPTtNLw4xFurvBnSH4MCaRa8bqDFTg1v4qXtjuofoFMGxhiKnryiEUDI%2FTnW8ByxGCmYNrnb8bDP0sgGx0EmKWwcYcp4y2c%2F82W%2BboL9qOO2gJj2kfpztNLFC&X-Amz-Signature=4efce9572b5e42dea61f71dec1e45f04a31857543a597078dc54fe78d00635a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
