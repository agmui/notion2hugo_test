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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3Z7TVR%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDmfSdsGpqdKIic2sY2D9RahiBifbaQVS2J70VxX0V2kwIhAIBExkRgUYhghnWxcooo07VaQcJSFs8OfKrDgjOAdN4nKv8DCDoQABoMNjM3NDIzMTgzODA1IgxOpqGFz9SoeYvsoZAq3AN29vzP%2BP6igQDVmEH8ZoPI1UtZ%2BGB5Z%2FW0pTQAVYOxup%2FU%2BehKg4VqaTWyprrEAmMiU%2Fzjk02R4i1A3IM0ujoCBV2WWzCCSw71oUXZ1lGQvlRgTOHeWTUvMV1XZ7i8A9ot4Amf61RFZaWNzemGwSwsZ1dhN8TUdbI10dePzPcfbyhUE%2FvqGNUrEXT84Qwd7ohS8gjc1uTpkC9omhkhHFK2RuUHqCzR2dYrgrhIygn6Dz3iDTFd%2BqdcUaxva3hfyxWDFxURALjRpZspIdzW2wi720s1NbYJBj%2FgVTlvEz%2BuvuXp7kCRmiDpS2Koww%2F7RcHqshZXtrkwgmSLfAPOizRVWdSIp0Y5m0OKPHsNEC1HhMa0MRP7Uvo21NtiqF5iaBjHwcEjQQ9Us4wH2CCW9v9qRWSydtnTlj2SOL5POLJFNNW13YlRDoV3X%2FdSUc4MMALonLeiU7cq56HoZizOBAfbnoqhVSY8FOob0KMsx4w8%2Bk4ny%2BaZvz%2BccPdeApzxQnxmiMP0ETRPw%2BFDFQ0%2Fzg4pXzZLuVyLTiTzSXlNyOvMjuS%2BK1wnXepEzJUFFHdASNdpU4b6rTHgktJ8P%2FPDCGS%2FkSF9O6KTif7DpWXOkwyf%2Fec3LdCygZcRy%2B3uBDCyq4nUBjqkARn47GbfblJQQOmCYETYmErz2wzHTqHzbpyK%2BSdM43WgaH5VczhrqluBWK4%2FN5fXsvDeRWi%2BV7TFF6OfDXPz987RudyATBhhhHUFKKdMS8zSW1WyHrnua1dOeMsEGXKUp5Z6uqOTx7Q58lalWY%2B4rdPgwB8D%2FO6KaBQ9%2B2xrmVVfAUfy0Jm2zIxC%2Fv4XUFsQIZEcFCPlckNSIR7hB7Yaur%2FvViby&X-Amz-Signature=5c2cfa5bdba4cb2c10e05a1d4a34bcd84cc9c110823876de44c7a6d8aa477bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3Z7TVR%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDmfSdsGpqdKIic2sY2D9RahiBifbaQVS2J70VxX0V2kwIhAIBExkRgUYhghnWxcooo07VaQcJSFs8OfKrDgjOAdN4nKv8DCDoQABoMNjM3NDIzMTgzODA1IgxOpqGFz9SoeYvsoZAq3AN29vzP%2BP6igQDVmEH8ZoPI1UtZ%2BGB5Z%2FW0pTQAVYOxup%2FU%2BehKg4VqaTWyprrEAmMiU%2Fzjk02R4i1A3IM0ujoCBV2WWzCCSw71oUXZ1lGQvlRgTOHeWTUvMV1XZ7i8A9ot4Amf61RFZaWNzemGwSwsZ1dhN8TUdbI10dePzPcfbyhUE%2FvqGNUrEXT84Qwd7ohS8gjc1uTpkC9omhkhHFK2RuUHqCzR2dYrgrhIygn6Dz3iDTFd%2BqdcUaxva3hfyxWDFxURALjRpZspIdzW2wi720s1NbYJBj%2FgVTlvEz%2BuvuXp7kCRmiDpS2Koww%2F7RcHqshZXtrkwgmSLfAPOizRVWdSIp0Y5m0OKPHsNEC1HhMa0MRP7Uvo21NtiqF5iaBjHwcEjQQ9Us4wH2CCW9v9qRWSydtnTlj2SOL5POLJFNNW13YlRDoV3X%2FdSUc4MMALonLeiU7cq56HoZizOBAfbnoqhVSY8FOob0KMsx4w8%2Bk4ny%2BaZvz%2BccPdeApzxQnxmiMP0ETRPw%2BFDFQ0%2Fzg4pXzZLuVyLTiTzSXlNyOvMjuS%2BK1wnXepEzJUFFHdASNdpU4b6rTHgktJ8P%2FPDCGS%2FkSF9O6KTif7DpWXOkwyf%2Fec3LdCygZcRy%2B3uBDCyq4nUBjqkARn47GbfblJQQOmCYETYmErz2wzHTqHzbpyK%2BSdM43WgaH5VczhrqluBWK4%2FN5fXsvDeRWi%2BV7TFF6OfDXPz987RudyATBhhhHUFKKdMS8zSW1WyHrnua1dOeMsEGXKUp5Z6uqOTx7Q58lalWY%2B4rdPgwB8D%2FO6KaBQ9%2B2xrmVVfAUfy0Jm2zIxC%2Fv4XUFsQIZEcFCPlckNSIR7hB7Yaur%2FvViby&X-Amz-Signature=af951db6174461e1abbe489d67af4ca2331f0c9557f892bf13131f83c94c91d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3Z7TVR%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDmfSdsGpqdKIic2sY2D9RahiBifbaQVS2J70VxX0V2kwIhAIBExkRgUYhghnWxcooo07VaQcJSFs8OfKrDgjOAdN4nKv8DCDoQABoMNjM3NDIzMTgzODA1IgxOpqGFz9SoeYvsoZAq3AN29vzP%2BP6igQDVmEH8ZoPI1UtZ%2BGB5Z%2FW0pTQAVYOxup%2FU%2BehKg4VqaTWyprrEAmMiU%2Fzjk02R4i1A3IM0ujoCBV2WWzCCSw71oUXZ1lGQvlRgTOHeWTUvMV1XZ7i8A9ot4Amf61RFZaWNzemGwSwsZ1dhN8TUdbI10dePzPcfbyhUE%2FvqGNUrEXT84Qwd7ohS8gjc1uTpkC9omhkhHFK2RuUHqCzR2dYrgrhIygn6Dz3iDTFd%2BqdcUaxva3hfyxWDFxURALjRpZspIdzW2wi720s1NbYJBj%2FgVTlvEz%2BuvuXp7kCRmiDpS2Koww%2F7RcHqshZXtrkwgmSLfAPOizRVWdSIp0Y5m0OKPHsNEC1HhMa0MRP7Uvo21NtiqF5iaBjHwcEjQQ9Us4wH2CCW9v9qRWSydtnTlj2SOL5POLJFNNW13YlRDoV3X%2FdSUc4MMALonLeiU7cq56HoZizOBAfbnoqhVSY8FOob0KMsx4w8%2Bk4ny%2BaZvz%2BccPdeApzxQnxmiMP0ETRPw%2BFDFQ0%2Fzg4pXzZLuVyLTiTzSXlNyOvMjuS%2BK1wnXepEzJUFFHdASNdpU4b6rTHgktJ8P%2FPDCGS%2FkSF9O6KTif7DpWXOkwyf%2Fec3LdCygZcRy%2B3uBDCyq4nUBjqkARn47GbfblJQQOmCYETYmErz2wzHTqHzbpyK%2BSdM43WgaH5VczhrqluBWK4%2FN5fXsvDeRWi%2BV7TFF6OfDXPz987RudyATBhhhHUFKKdMS8zSW1WyHrnua1dOeMsEGXKUp5Z6uqOTx7Q58lalWY%2B4rdPgwB8D%2FO6KaBQ9%2B2xrmVVfAUfy0Jm2zIxC%2Fv4XUFsQIZEcFCPlckNSIR7hB7Yaur%2FvViby&X-Amz-Signature=2f583ae19ae3b17fbe50f32aec3a490376cdfb187977136387c25cb5436ad7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
