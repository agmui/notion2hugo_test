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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MFTRBHG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUaphish0osEvbdEiiXICrWr171QxVfuEcO8igat9PwIgYK7SKOsZgv3SgBv%2BtZKUfRUc1VGYzMv3WyYI1VpV9JQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDXxobF9nRArcXE1GSrcAxIXcyquFGmLHohWvcaNDDKR2hafcPpemvB8AyOKxBQVIv992UhqipurA2gEFRlMV9XBzfTMhkf7Dr2DAuPDwgvNXbzI%2BzeriIgHdZV2Vb0X2kCR80FjOHxlP1W9m0W7KzNrLUToErID8sVZx3yzUXFLNz6XVcuMDYRr2wQrK3Um1o1uApNUq0jw3jwkHWdwmP8DqUyJ5DBki5bYaFWBEsksadmZb7vuRK9hI7Jz3ngppB1yVFY28ZyjkNxrIHHQkO7aG4c59ZiSDOyQUmf7DceNY0RXS9L82wrdmFwS%2FgpRgByGICA%2B7Raa%2FA0A1hscwkZ8Lj3VUD6YsdXDEoLwnp2%2F%2FjmHHlvGjETnQwo%2FkaR45dxnWbDLa%2Fk%2Fel89Yz3kjTLou2i%2BrCvYm66kI3q%2FUl1GwUZMHRIWTlegSzzVXUWyB6BfVfd1jjczDnob1o8snbyUNystu9CTKmOLfUVewtB4Bq7dW5Iz1lh45WZ5viKljjT0K9msC%2BzWXZCXHo%2BQPjqZXHWCnb6joNcnPlPkI0j%2FxkeUlspTKyqLIilVEBpO89y9yabvayKrOvJHtlqA9LhodA6CLB%2BPJDVzD1uRS%2BaZx6NBvg00twg3JRwyZQhnk23H%2B6b%2FEdVy1mTPMKOj4r4GOqUBV5O7W5QgrxeF5mIsANnhmMeMLG60F8WYB5xpwzH5kBUXjycFVcNidout50bvLrn1rb6HkjXHj15J1Nbml6L0jYSGIHTQGsW5xN14k5ce1whBDef2WYJ9QUbrw2iAwgoge8kOA5jRr0F8JtLR7TRowP2csW8lRoyfCSiMgCk%2FtNWPrgE3ld01tMACo2BSQaOIUJczSg5GwINlukpWbQAWxPHMNoAX&X-Amz-Signature=6f9a864c4a49d3ba9f7bbabf945f5d0a69184d06314f47cd2f20b8e29b07421b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MFTRBHG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUaphish0osEvbdEiiXICrWr171QxVfuEcO8igat9PwIgYK7SKOsZgv3SgBv%2BtZKUfRUc1VGYzMv3WyYI1VpV9JQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDXxobF9nRArcXE1GSrcAxIXcyquFGmLHohWvcaNDDKR2hafcPpemvB8AyOKxBQVIv992UhqipurA2gEFRlMV9XBzfTMhkf7Dr2DAuPDwgvNXbzI%2BzeriIgHdZV2Vb0X2kCR80FjOHxlP1W9m0W7KzNrLUToErID8sVZx3yzUXFLNz6XVcuMDYRr2wQrK3Um1o1uApNUq0jw3jwkHWdwmP8DqUyJ5DBki5bYaFWBEsksadmZb7vuRK9hI7Jz3ngppB1yVFY28ZyjkNxrIHHQkO7aG4c59ZiSDOyQUmf7DceNY0RXS9L82wrdmFwS%2FgpRgByGICA%2B7Raa%2FA0A1hscwkZ8Lj3VUD6YsdXDEoLwnp2%2F%2FjmHHlvGjETnQwo%2FkaR45dxnWbDLa%2Fk%2Fel89Yz3kjTLou2i%2BrCvYm66kI3q%2FUl1GwUZMHRIWTlegSzzVXUWyB6BfVfd1jjczDnob1o8snbyUNystu9CTKmOLfUVewtB4Bq7dW5Iz1lh45WZ5viKljjT0K9msC%2BzWXZCXHo%2BQPjqZXHWCnb6joNcnPlPkI0j%2FxkeUlspTKyqLIilVEBpO89y9yabvayKrOvJHtlqA9LhodA6CLB%2BPJDVzD1uRS%2BaZx6NBvg00twg3JRwyZQhnk23H%2B6b%2FEdVy1mTPMKOj4r4GOqUBV5O7W5QgrxeF5mIsANnhmMeMLG60F8WYB5xpwzH5kBUXjycFVcNidout50bvLrn1rb6HkjXHj15J1Nbml6L0jYSGIHTQGsW5xN14k5ce1whBDef2WYJ9QUbrw2iAwgoge8kOA5jRr0F8JtLR7TRowP2csW8lRoyfCSiMgCk%2FtNWPrgE3ld01tMACo2BSQaOIUJczSg5GwINlukpWbQAWxPHMNoAX&X-Amz-Signature=5707f29e301434bb5255763e568956eef91ca0344ccf635e6c73c463b43a90ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MFTRBHG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUaphish0osEvbdEiiXICrWr171QxVfuEcO8igat9PwIgYK7SKOsZgv3SgBv%2BtZKUfRUc1VGYzMv3WyYI1VpV9JQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDXxobF9nRArcXE1GSrcAxIXcyquFGmLHohWvcaNDDKR2hafcPpemvB8AyOKxBQVIv992UhqipurA2gEFRlMV9XBzfTMhkf7Dr2DAuPDwgvNXbzI%2BzeriIgHdZV2Vb0X2kCR80FjOHxlP1W9m0W7KzNrLUToErID8sVZx3yzUXFLNz6XVcuMDYRr2wQrK3Um1o1uApNUq0jw3jwkHWdwmP8DqUyJ5DBki5bYaFWBEsksadmZb7vuRK9hI7Jz3ngppB1yVFY28ZyjkNxrIHHQkO7aG4c59ZiSDOyQUmf7DceNY0RXS9L82wrdmFwS%2FgpRgByGICA%2B7Raa%2FA0A1hscwkZ8Lj3VUD6YsdXDEoLwnp2%2F%2FjmHHlvGjETnQwo%2FkaR45dxnWbDLa%2Fk%2Fel89Yz3kjTLou2i%2BrCvYm66kI3q%2FUl1GwUZMHRIWTlegSzzVXUWyB6BfVfd1jjczDnob1o8snbyUNystu9CTKmOLfUVewtB4Bq7dW5Iz1lh45WZ5viKljjT0K9msC%2BzWXZCXHo%2BQPjqZXHWCnb6joNcnPlPkI0j%2FxkeUlspTKyqLIilVEBpO89y9yabvayKrOvJHtlqA9LhodA6CLB%2BPJDVzD1uRS%2BaZx6NBvg00twg3JRwyZQhnk23H%2B6b%2FEdVy1mTPMKOj4r4GOqUBV5O7W5QgrxeF5mIsANnhmMeMLG60F8WYB5xpwzH5kBUXjycFVcNidout50bvLrn1rb6HkjXHj15J1Nbml6L0jYSGIHTQGsW5xN14k5ce1whBDef2WYJ9QUbrw2iAwgoge8kOA5jRr0F8JtLR7TRowP2csW8lRoyfCSiMgCk%2FtNWPrgE3ld01tMACo2BSQaOIUJczSg5GwINlukpWbQAWxPHMNoAX&X-Amz-Signature=decd55b456f055de761391bf05979f8bc507a7e1c74d3d0854f9d947adfbb3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
