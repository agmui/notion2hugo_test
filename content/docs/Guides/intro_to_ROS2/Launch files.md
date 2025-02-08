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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626H3BEMC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC21OxwGVfvWpRQkP%2BEdOW05bGVzuFReNwsBuJfy51i%2FwIgAyPONV3BN1lwVIy5EYpHDs4I%2FLyQZMfVu4B2I%2FQX40EqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvBRgqhKprQpeUMwircA8uf1TgfZMSR9W95IfsTikuHsp4y9%2F2Zwl953TiOXIz3PVAwrH9J9HQVxyhUSjLAI8XwdNxoEXNHok3kVLMV0dhjbg6YLKenbpYFL4f1DhJHQcM1AxDzPo5iTTAH%2BEX4qEmsKWzZLxLIKNNRDXTezNDoOD7FRh%2BjNahU5BMi4C1%2Bd%2FYqFAqiYdelRX7wniAF1VWsnq%2BhVgE4K9nyTEoom6d%2FFtXBtPaQzrpQ5LmxFz%2FAGFR6y7jikEovS27NWdKTxfvawLL5CQ0P1tdR2Xuxdeep%2Fl559CdWlRzo6axpUYLBMtjDjsQxtUfgdxROvhU%2BXQf5pHia%2Bx6BhPBXJIslcLr%2B8K8%2F7PYiI8bemIeWby7Cyrt049AOFwOBkxmUOYXVE8Q5RzygJdxT9JGaxFLLS9Qs18IpxgyspbKWC03el2%2BTDdP%2F1ZMvtk7OqXls%2FgAvH1C5PtdH6yjTK5CSNcNOLrTVLevzIDyl7UYMOL0Eel2ypZOmNgyji73ilWPw8JfI3%2FnJTCF4KwboulMB6QLKU35QBo9Q%2BCjCoaoiE15xhgIcLPMK%2B9uvwIqVQVj91EMyjp7gLpaEIWEQRz2uCeggtUdV5GxOb%2B6Cs76v3D9tSC7%2FHVHrn0VKwH0FZJHqMMSGnb0GOqUBSzxinz77EBwyQCS1m5wGlHlFiGUM2Ez2IPyDb7RDhYv3L%2F3iY2HPRWR1wpHaL%2Fy9Jm4m78gupis%2F6mbyu2eFfXR1enWJA%2FwFrFUH5t2v5XYy83xZDEAz8R0DSC4XB37pQfRyh%2FyzrQZU25QrfjIp8YpwYB6tr7e%2BZzQLAUzPG2gbs2w0qfD8WnprgMfA59uooC0u0kUG5vDHTqB2q9EAy%2FUhSupi&X-Amz-Signature=f4dc06f201ff9e458c2cdede07a3b69f631ea4b8f3f333f029dd96daa0249d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626H3BEMC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC21OxwGVfvWpRQkP%2BEdOW05bGVzuFReNwsBuJfy51i%2FwIgAyPONV3BN1lwVIy5EYpHDs4I%2FLyQZMfVu4B2I%2FQX40EqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvBRgqhKprQpeUMwircA8uf1TgfZMSR9W95IfsTikuHsp4y9%2F2Zwl953TiOXIz3PVAwrH9J9HQVxyhUSjLAI8XwdNxoEXNHok3kVLMV0dhjbg6YLKenbpYFL4f1DhJHQcM1AxDzPo5iTTAH%2BEX4qEmsKWzZLxLIKNNRDXTezNDoOD7FRh%2BjNahU5BMi4C1%2Bd%2FYqFAqiYdelRX7wniAF1VWsnq%2BhVgE4K9nyTEoom6d%2FFtXBtPaQzrpQ5LmxFz%2FAGFR6y7jikEovS27NWdKTxfvawLL5CQ0P1tdR2Xuxdeep%2Fl559CdWlRzo6axpUYLBMtjDjsQxtUfgdxROvhU%2BXQf5pHia%2Bx6BhPBXJIslcLr%2B8K8%2F7PYiI8bemIeWby7Cyrt049AOFwOBkxmUOYXVE8Q5RzygJdxT9JGaxFLLS9Qs18IpxgyspbKWC03el2%2BTDdP%2F1ZMvtk7OqXls%2FgAvH1C5PtdH6yjTK5CSNcNOLrTVLevzIDyl7UYMOL0Eel2ypZOmNgyji73ilWPw8JfI3%2FnJTCF4KwboulMB6QLKU35QBo9Q%2BCjCoaoiE15xhgIcLPMK%2B9uvwIqVQVj91EMyjp7gLpaEIWEQRz2uCeggtUdV5GxOb%2B6Cs76v3D9tSC7%2FHVHrn0VKwH0FZJHqMMSGnb0GOqUBSzxinz77EBwyQCS1m5wGlHlFiGUM2Ez2IPyDb7RDhYv3L%2F3iY2HPRWR1wpHaL%2Fy9Jm4m78gupis%2F6mbyu2eFfXR1enWJA%2FwFrFUH5t2v5XYy83xZDEAz8R0DSC4XB37pQfRyh%2FyzrQZU25QrfjIp8YpwYB6tr7e%2BZzQLAUzPG2gbs2w0qfD8WnprgMfA59uooC0u0kUG5vDHTqB2q9EAy%2FUhSupi&X-Amz-Signature=257e3cb85d800722447e26bd612abd3067a090a05abf8de56ff08f75fe1235f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626H3BEMC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC21OxwGVfvWpRQkP%2BEdOW05bGVzuFReNwsBuJfy51i%2FwIgAyPONV3BN1lwVIy5EYpHDs4I%2FLyQZMfVu4B2I%2FQX40EqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvBRgqhKprQpeUMwircA8uf1TgfZMSR9W95IfsTikuHsp4y9%2F2Zwl953TiOXIz3PVAwrH9J9HQVxyhUSjLAI8XwdNxoEXNHok3kVLMV0dhjbg6YLKenbpYFL4f1DhJHQcM1AxDzPo5iTTAH%2BEX4qEmsKWzZLxLIKNNRDXTezNDoOD7FRh%2BjNahU5BMi4C1%2Bd%2FYqFAqiYdelRX7wniAF1VWsnq%2BhVgE4K9nyTEoom6d%2FFtXBtPaQzrpQ5LmxFz%2FAGFR6y7jikEovS27NWdKTxfvawLL5CQ0P1tdR2Xuxdeep%2Fl559CdWlRzo6axpUYLBMtjDjsQxtUfgdxROvhU%2BXQf5pHia%2Bx6BhPBXJIslcLr%2B8K8%2F7PYiI8bemIeWby7Cyrt049AOFwOBkxmUOYXVE8Q5RzygJdxT9JGaxFLLS9Qs18IpxgyspbKWC03el2%2BTDdP%2F1ZMvtk7OqXls%2FgAvH1C5PtdH6yjTK5CSNcNOLrTVLevzIDyl7UYMOL0Eel2ypZOmNgyji73ilWPw8JfI3%2FnJTCF4KwboulMB6QLKU35QBo9Q%2BCjCoaoiE15xhgIcLPMK%2B9uvwIqVQVj91EMyjp7gLpaEIWEQRz2uCeggtUdV5GxOb%2B6Cs76v3D9tSC7%2FHVHrn0VKwH0FZJHqMMSGnb0GOqUBSzxinz77EBwyQCS1m5wGlHlFiGUM2Ez2IPyDb7RDhYv3L%2F3iY2HPRWR1wpHaL%2Fy9Jm4m78gupis%2F6mbyu2eFfXR1enWJA%2FwFrFUH5t2v5XYy83xZDEAz8R0DSC4XB37pQfRyh%2FyzrQZU25QrfjIp8YpwYB6tr7e%2BZzQLAUzPG2gbs2w0qfD8WnprgMfA59uooC0u0kUG5vDHTqB2q9EAy%2FUhSupi&X-Amz-Signature=c3655e5c026f1777f6c0faa08c6b3f44fbd7a51ac9882c96612c7d6bcb39153e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
