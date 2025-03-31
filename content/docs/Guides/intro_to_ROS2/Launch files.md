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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJ2VYHT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDZ4qLr%2Flck136NI8pDG8s7k52vsnP5gt76C%2B6SFCO91wIgGGuWxQvoyAN%2BRJ5WHmr6HTLa%2Ba2Von0sZ1bSXI4K1WkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9IIgUvAsBTG5KkMCrcAztGCzLYK9i3oB8xtNnpEv0co%2FiTyRl5Is%2BPVUsYNDC%2B73kkJfRyye00Od4WX8gpCtCDMh%2B4APdkg7UMYp%2Fb%2BxPg2wV%2FjRDuA3QMHbmq812syoDqyK0a4xs9Q%2BELfpMDdImiYiTfYpY%2FEBBavlMjhxNUib8h0PPAlGtlmsZe0k2B6cWokyhxk0whIuVu44RaGoX3z1JVKxhEgqyBmrmtVDzhzp5qVgvWx8JaIi3013IkEk70FprotfrdwGOusToaQ0Yw57J%2FITsR0eaUVXIdAjSR2pSXORSZVyaIC9Pm12%2BIVKvxL60Xo6Zbs17HafM6CUIrQ5hu89yKxxheSehm3jM1a0h7Pfcp6sjytwzER76mxIrI0nzs6%2FUnh7tBZ5QYMFCBaIjecfIDTkw0gZlnVRrBQF%2Bftt1%2BNVn7SsU4tZiDPITrf7wC8zLqly4iZlyknQ2WgZMm2IP7ikiOxFZHe2KAE6eX7IAnpa69xIQiRAjTWGuLSANSS6sqbP2lP%2FnVmA2WJlIutGVNYPbSwahAPhB1tN9QtpBnYJ1LahiPqMiYpkTteIeyIjarqf1BADd9Qo2LDguBxbg9q2lsDLLnHaoPheCPkGWoqPTGb7qB4fvJCO9ZzGd9hGObVWwbMIKvqL8GOqUB0YEYgPLFdwfOpP6dQ6uJWPMu41773nFdb%2Bont1qAeEbkH00tPx7dyqVY%2BwMSfRS6WDq2uhfTn3bhG4QlxZmntwbkE9HI27U5b9tiL0%2BFC5qkHforE5J%2FfwO%2F5smlLCPxsDz%2F62wQLtm99VdxLNWnmvhPyuo2owgr1qLBZ8khy1dHNkB7yBTnrEBf5wfFMSkuf843WoEDJOMwCN9mORz3%2FO2bHYfP&X-Amz-Signature=e72d1eddd91a0f339eaaf82bff0a0848b2f5c99e18bbd555b544f8a0c0be55c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJ2VYHT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDZ4qLr%2Flck136NI8pDG8s7k52vsnP5gt76C%2B6SFCO91wIgGGuWxQvoyAN%2BRJ5WHmr6HTLa%2Ba2Von0sZ1bSXI4K1WkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9IIgUvAsBTG5KkMCrcAztGCzLYK9i3oB8xtNnpEv0co%2FiTyRl5Is%2BPVUsYNDC%2B73kkJfRyye00Od4WX8gpCtCDMh%2B4APdkg7UMYp%2Fb%2BxPg2wV%2FjRDuA3QMHbmq812syoDqyK0a4xs9Q%2BELfpMDdImiYiTfYpY%2FEBBavlMjhxNUib8h0PPAlGtlmsZe0k2B6cWokyhxk0whIuVu44RaGoX3z1JVKxhEgqyBmrmtVDzhzp5qVgvWx8JaIi3013IkEk70FprotfrdwGOusToaQ0Yw57J%2FITsR0eaUVXIdAjSR2pSXORSZVyaIC9Pm12%2BIVKvxL60Xo6Zbs17HafM6CUIrQ5hu89yKxxheSehm3jM1a0h7Pfcp6sjytwzER76mxIrI0nzs6%2FUnh7tBZ5QYMFCBaIjecfIDTkw0gZlnVRrBQF%2Bftt1%2BNVn7SsU4tZiDPITrf7wC8zLqly4iZlyknQ2WgZMm2IP7ikiOxFZHe2KAE6eX7IAnpa69xIQiRAjTWGuLSANSS6sqbP2lP%2FnVmA2WJlIutGVNYPbSwahAPhB1tN9QtpBnYJ1LahiPqMiYpkTteIeyIjarqf1BADd9Qo2LDguBxbg9q2lsDLLnHaoPheCPkGWoqPTGb7qB4fvJCO9ZzGd9hGObVWwbMIKvqL8GOqUB0YEYgPLFdwfOpP6dQ6uJWPMu41773nFdb%2Bont1qAeEbkH00tPx7dyqVY%2BwMSfRS6WDq2uhfTn3bhG4QlxZmntwbkE9HI27U5b9tiL0%2BFC5qkHforE5J%2FfwO%2F5smlLCPxsDz%2F62wQLtm99VdxLNWnmvhPyuo2owgr1qLBZ8khy1dHNkB7yBTnrEBf5wfFMSkuf843WoEDJOMwCN9mORz3%2FO2bHYfP&X-Amz-Signature=ed25740e02b985d0002d68399ff4fc7477508a7512dd8cde85247a6d604424f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJ2VYHT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDZ4qLr%2Flck136NI8pDG8s7k52vsnP5gt76C%2B6SFCO91wIgGGuWxQvoyAN%2BRJ5WHmr6HTLa%2Ba2Von0sZ1bSXI4K1WkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9IIgUvAsBTG5KkMCrcAztGCzLYK9i3oB8xtNnpEv0co%2FiTyRl5Is%2BPVUsYNDC%2B73kkJfRyye00Od4WX8gpCtCDMh%2B4APdkg7UMYp%2Fb%2BxPg2wV%2FjRDuA3QMHbmq812syoDqyK0a4xs9Q%2BELfpMDdImiYiTfYpY%2FEBBavlMjhxNUib8h0PPAlGtlmsZe0k2B6cWokyhxk0whIuVu44RaGoX3z1JVKxhEgqyBmrmtVDzhzp5qVgvWx8JaIi3013IkEk70FprotfrdwGOusToaQ0Yw57J%2FITsR0eaUVXIdAjSR2pSXORSZVyaIC9Pm12%2BIVKvxL60Xo6Zbs17HafM6CUIrQ5hu89yKxxheSehm3jM1a0h7Pfcp6sjytwzER76mxIrI0nzs6%2FUnh7tBZ5QYMFCBaIjecfIDTkw0gZlnVRrBQF%2Bftt1%2BNVn7SsU4tZiDPITrf7wC8zLqly4iZlyknQ2WgZMm2IP7ikiOxFZHe2KAE6eX7IAnpa69xIQiRAjTWGuLSANSS6sqbP2lP%2FnVmA2WJlIutGVNYPbSwahAPhB1tN9QtpBnYJ1LahiPqMiYpkTteIeyIjarqf1BADd9Qo2LDguBxbg9q2lsDLLnHaoPheCPkGWoqPTGb7qB4fvJCO9ZzGd9hGObVWwbMIKvqL8GOqUB0YEYgPLFdwfOpP6dQ6uJWPMu41773nFdb%2Bont1qAeEbkH00tPx7dyqVY%2BwMSfRS6WDq2uhfTn3bhG4QlxZmntwbkE9HI27U5b9tiL0%2BFC5qkHforE5J%2FfwO%2F5smlLCPxsDz%2F62wQLtm99VdxLNWnmvhPyuo2owgr1qLBZ8khy1dHNkB7yBTnrEBf5wfFMSkuf843WoEDJOMwCN9mORz3%2FO2bHYfP&X-Amz-Signature=a9119d338355c10adf01ef5c51efe63370f989e90355bde383ed099aaf87732c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
