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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5NN6AJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCmMZnYA54Poo2P%2FrZsEU%2BrTLIvH72yVI3jWOunbzaypwIhAIs9EQbD8D%2B3PoQ1iDGzTo4gb34pnipgauzIFbnz6YwqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAxr6b4hULru5HXv8q3AO%2BdIFRR3GncCq2Wozy4Zl9ThKsRnpyQNTOYpEhZuUR6xiZulwW5mXZxIbCbNnYRxivzcyNr%2Ba%2FjyXxzwzHQ1gcsiXsNAOG9cMWEycCC4Cvmz5KOzef7HelIb9CqznNvAKztsIZEVxkVGiCy2XRm1dpbMGXeGx6atzGCflw3y2tDlvklxI%2FhypS3%2BOe4Have%2F878Rha7EdKfuGtWhSKXoTrdAOc9qJeF5IQoAY01UggW23fQJ%2Frx7k%2BOCEn197nmWLa1eM13v5reBYVnaoqRlHGLXZfabRS4yA%2F934ZTi%2BxZZLSMeR74DDcKdwTdblS8Tz8CFE95C3z45qEPmq3oGsdwZ1QZ9AQSTq103T2lV80%2F7w0kWqST7mMKeF6N6EuJVdsPSmDy6lX5VKNgkDGMffcIHMjyfHpT%2B0QVnkuir8UpAqXtHpLJVyLIcL9tAFpDgkNeJAkOqXaYWECjiVaxSGBATIrZEmYLVbMSmwahzxzIoNKCGMsZkL7FbaopBqKWzs96UuSMzGW8XZ6AtFk2yaaQxoa4w%2BWCJP4Raxt3L3G3RnQDAxVvXdJKwty101MWNCqk3lC3p%2BTJ9YDUjifhdCu%2FglMCo30NEEpl55%2FU3otL9iQxeon5IFUugY1dTCZxo7BBjqkARLweiISY%2BRVBFbmlS9mXQPEj%2BsY1V%2BqrhF99aIjase3Q6z2%2BAGDk7PzpF88WTp7bOaBjBY7Cs64QGM0%2Fo3IPGFxXB4Ty%2BWzdxsF8Yn2S76wYQJ52QFycl83UJ2KcmugBY3IF44u82FINs6JQH23vdcKH3m7%2FGDfMGVTnTMuEIcDUNrFxV6NqD1j0horYeTz%2FFyynPlckieAmiN8uTFMFcM7%2Bvq0&X-Amz-Signature=13fc979c1b962922668c43ee423199a76b2cfb92936d46eb2cab2e5f8f0f881a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5NN6AJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCmMZnYA54Poo2P%2FrZsEU%2BrTLIvH72yVI3jWOunbzaypwIhAIs9EQbD8D%2B3PoQ1iDGzTo4gb34pnipgauzIFbnz6YwqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAxr6b4hULru5HXv8q3AO%2BdIFRR3GncCq2Wozy4Zl9ThKsRnpyQNTOYpEhZuUR6xiZulwW5mXZxIbCbNnYRxivzcyNr%2Ba%2FjyXxzwzHQ1gcsiXsNAOG9cMWEycCC4Cvmz5KOzef7HelIb9CqznNvAKztsIZEVxkVGiCy2XRm1dpbMGXeGx6atzGCflw3y2tDlvklxI%2FhypS3%2BOe4Have%2F878Rha7EdKfuGtWhSKXoTrdAOc9qJeF5IQoAY01UggW23fQJ%2Frx7k%2BOCEn197nmWLa1eM13v5reBYVnaoqRlHGLXZfabRS4yA%2F934ZTi%2BxZZLSMeR74DDcKdwTdblS8Tz8CFE95C3z45qEPmq3oGsdwZ1QZ9AQSTq103T2lV80%2F7w0kWqST7mMKeF6N6EuJVdsPSmDy6lX5VKNgkDGMffcIHMjyfHpT%2B0QVnkuir8UpAqXtHpLJVyLIcL9tAFpDgkNeJAkOqXaYWECjiVaxSGBATIrZEmYLVbMSmwahzxzIoNKCGMsZkL7FbaopBqKWzs96UuSMzGW8XZ6AtFk2yaaQxoa4w%2BWCJP4Raxt3L3G3RnQDAxVvXdJKwty101MWNCqk3lC3p%2BTJ9YDUjifhdCu%2FglMCo30NEEpl55%2FU3otL9iQxeon5IFUugY1dTCZxo7BBjqkARLweiISY%2BRVBFbmlS9mXQPEj%2BsY1V%2BqrhF99aIjase3Q6z2%2BAGDk7PzpF88WTp7bOaBjBY7Cs64QGM0%2Fo3IPGFxXB4Ty%2BWzdxsF8Yn2S76wYQJ52QFycl83UJ2KcmugBY3IF44u82FINs6JQH23vdcKH3m7%2FGDfMGVTnTMuEIcDUNrFxV6NqD1j0horYeTz%2FFyynPlckieAmiN8uTFMFcM7%2Bvq0&X-Amz-Signature=9548a63ee2d451ba83dc4e29ac5184ec8b569ea2ce699c9119546feea80daa5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5NN6AJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCmMZnYA54Poo2P%2FrZsEU%2BrTLIvH72yVI3jWOunbzaypwIhAIs9EQbD8D%2B3PoQ1iDGzTo4gb34pnipgauzIFbnz6YwqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAxr6b4hULru5HXv8q3AO%2BdIFRR3GncCq2Wozy4Zl9ThKsRnpyQNTOYpEhZuUR6xiZulwW5mXZxIbCbNnYRxivzcyNr%2Ba%2FjyXxzwzHQ1gcsiXsNAOG9cMWEycCC4Cvmz5KOzef7HelIb9CqznNvAKztsIZEVxkVGiCy2XRm1dpbMGXeGx6atzGCflw3y2tDlvklxI%2FhypS3%2BOe4Have%2F878Rha7EdKfuGtWhSKXoTrdAOc9qJeF5IQoAY01UggW23fQJ%2Frx7k%2BOCEn197nmWLa1eM13v5reBYVnaoqRlHGLXZfabRS4yA%2F934ZTi%2BxZZLSMeR74DDcKdwTdblS8Tz8CFE95C3z45qEPmq3oGsdwZ1QZ9AQSTq103T2lV80%2F7w0kWqST7mMKeF6N6EuJVdsPSmDy6lX5VKNgkDGMffcIHMjyfHpT%2B0QVnkuir8UpAqXtHpLJVyLIcL9tAFpDgkNeJAkOqXaYWECjiVaxSGBATIrZEmYLVbMSmwahzxzIoNKCGMsZkL7FbaopBqKWzs96UuSMzGW8XZ6AtFk2yaaQxoa4w%2BWCJP4Raxt3L3G3RnQDAxVvXdJKwty101MWNCqk3lC3p%2BTJ9YDUjifhdCu%2FglMCo30NEEpl55%2FU3otL9iQxeon5IFUugY1dTCZxo7BBjqkARLweiISY%2BRVBFbmlS9mXQPEj%2BsY1V%2BqrhF99aIjase3Q6z2%2BAGDk7PzpF88WTp7bOaBjBY7Cs64QGM0%2Fo3IPGFxXB4Ty%2BWzdxsF8Yn2S76wYQJ52QFycl83UJ2KcmugBY3IF44u82FINs6JQH23vdcKH3m7%2FGDfMGVTnTMuEIcDUNrFxV6NqD1j0horYeTz%2FFyynPlckieAmiN8uTFMFcM7%2Bvq0&X-Amz-Signature=3d382fe97e3b9fe1e9d2d089a23cd9694f842b708c86720366b1124e5f9e8977&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
