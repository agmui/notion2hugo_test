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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376T3QW2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCUxKs3X23Uuiq2PZt3%2BSY9JIQldTcBLMUnhpHCRZYVkgIgANzpSZpZl8tJ5Fd8mLeQJ3oM9TYyGYiUkPoEJvFS%2BFoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoC2gAXmJ0FUNaW8yrcA1FQr3piAFJOd1Fzrrw0meVfV6cNe35hZUSkkWpzBegOhK%2FtL6r7hoiuSzTysKj9AKYRnyD3NyxoTemlR%2FHmzHM9aWuRYQ3NphmCXq9CE%2FQyOea39oTNvWZoSAre0ZI4VzlXXwEaW%2BJnnYilzoeDhfOBu82cn%2FLrDBRYxgO3E6jp9RVX%2FlZjVLYXIw0WI07V4chKwGL4x7ER4MWqyYoyteFQKef3%2FPF1i3YSjgtq3prNBpMiETIR2Ep%2B7EU%2Bn%2BlHb7gyqh2zpGrOiNZfZpsFoCvAGXmUI1sYRYOx59U1aZ40Y%2FJFUgTzo8ZtBPVhmVv3PwFzouMqm%2B7YK1%2FB39TYqt27spq6Ve9D68bh9CvGY5M18ygeJJp9V4b6xBWZ2NI3k%2Fh0GsWi4d%2FnLezLLrD1%2F7%2FL2oOsA5BTvSfOvHpcY8qq4YhPLSKbq6CGYZ4Pv6Ybfaj0Pvk8RX4qN9HGAX3AK3lotW4Gfet2nKY05AytyvYUZfi807PS5oSBqgyqrN%2Fwe%2Fha5mqtcicuwWPPIn3B5iPrMftXkann0cfaf3YYA%2F%2FB0XYTpqVCTbo8ARCCRJGtdDWwPsZKi1aurYuODKNw%2BvgTaiSha3ZQDRV7Bz84hvb0pUiCG4a6oxOrvEbfMMGS18QGOqUBNEi9rWfZ1%2B0pRNo8DRDM%2F4dFNTWI8l%2Bl%2B1pmKa793izX2pT7fceet%2F4gU%2FwuozXUCOsuINIm%2BRAj%2Fl7NQEGHujKQubZBFJKPOpzMGx0Bj1u%2FZ1Iayqskq02ALpLL74DNOTg2vKqxS1dH3eCuPuonInXINZmth%2F0RCqUYv6p9Px%2FtZO0WUDoNa%2BzG0XPoRxnKrPPM3ukon%2BDLfi7niyoqmCT7RGEx&X-Amz-Signature=3996c17c5e3384c49577ac4c516b472b39e736b3bf2f5a5404149465c84281cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376T3QW2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCUxKs3X23Uuiq2PZt3%2BSY9JIQldTcBLMUnhpHCRZYVkgIgANzpSZpZl8tJ5Fd8mLeQJ3oM9TYyGYiUkPoEJvFS%2BFoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoC2gAXmJ0FUNaW8yrcA1FQr3piAFJOd1Fzrrw0meVfV6cNe35hZUSkkWpzBegOhK%2FtL6r7hoiuSzTysKj9AKYRnyD3NyxoTemlR%2FHmzHM9aWuRYQ3NphmCXq9CE%2FQyOea39oTNvWZoSAre0ZI4VzlXXwEaW%2BJnnYilzoeDhfOBu82cn%2FLrDBRYxgO3E6jp9RVX%2FlZjVLYXIw0WI07V4chKwGL4x7ER4MWqyYoyteFQKef3%2FPF1i3YSjgtq3prNBpMiETIR2Ep%2B7EU%2Bn%2BlHb7gyqh2zpGrOiNZfZpsFoCvAGXmUI1sYRYOx59U1aZ40Y%2FJFUgTzo8ZtBPVhmVv3PwFzouMqm%2B7YK1%2FB39TYqt27spq6Ve9D68bh9CvGY5M18ygeJJp9V4b6xBWZ2NI3k%2Fh0GsWi4d%2FnLezLLrD1%2F7%2FL2oOsA5BTvSfOvHpcY8qq4YhPLSKbq6CGYZ4Pv6Ybfaj0Pvk8RX4qN9HGAX3AK3lotW4Gfet2nKY05AytyvYUZfi807PS5oSBqgyqrN%2Fwe%2Fha5mqtcicuwWPPIn3B5iPrMftXkann0cfaf3YYA%2F%2FB0XYTpqVCTbo8ARCCRJGtdDWwPsZKi1aurYuODKNw%2BvgTaiSha3ZQDRV7Bz84hvb0pUiCG4a6oxOrvEbfMMGS18QGOqUBNEi9rWfZ1%2B0pRNo8DRDM%2F4dFNTWI8l%2Bl%2B1pmKa793izX2pT7fceet%2F4gU%2FwuozXUCOsuINIm%2BRAj%2Fl7NQEGHujKQubZBFJKPOpzMGx0Bj1u%2FZ1Iayqskq02ALpLL74DNOTg2vKqxS1dH3eCuPuonInXINZmth%2F0RCqUYv6p9Px%2FtZO0WUDoNa%2BzG0XPoRxnKrPPM3ukon%2BDLfi7niyoqmCT7RGEx&X-Amz-Signature=9d38a10fa18867b7b40986c807f5e6faa7f7f653676d3720ee9a12d002279c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376T3QW2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCUxKs3X23Uuiq2PZt3%2BSY9JIQldTcBLMUnhpHCRZYVkgIgANzpSZpZl8tJ5Fd8mLeQJ3oM9TYyGYiUkPoEJvFS%2BFoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoC2gAXmJ0FUNaW8yrcA1FQr3piAFJOd1Fzrrw0meVfV6cNe35hZUSkkWpzBegOhK%2FtL6r7hoiuSzTysKj9AKYRnyD3NyxoTemlR%2FHmzHM9aWuRYQ3NphmCXq9CE%2FQyOea39oTNvWZoSAre0ZI4VzlXXwEaW%2BJnnYilzoeDhfOBu82cn%2FLrDBRYxgO3E6jp9RVX%2FlZjVLYXIw0WI07V4chKwGL4x7ER4MWqyYoyteFQKef3%2FPF1i3YSjgtq3prNBpMiETIR2Ep%2B7EU%2Bn%2BlHb7gyqh2zpGrOiNZfZpsFoCvAGXmUI1sYRYOx59U1aZ40Y%2FJFUgTzo8ZtBPVhmVv3PwFzouMqm%2B7YK1%2FB39TYqt27spq6Ve9D68bh9CvGY5M18ygeJJp9V4b6xBWZ2NI3k%2Fh0GsWi4d%2FnLezLLrD1%2F7%2FL2oOsA5BTvSfOvHpcY8qq4YhPLSKbq6CGYZ4Pv6Ybfaj0Pvk8RX4qN9HGAX3AK3lotW4Gfet2nKY05AytyvYUZfi807PS5oSBqgyqrN%2Fwe%2Fha5mqtcicuwWPPIn3B5iPrMftXkann0cfaf3YYA%2F%2FB0XYTpqVCTbo8ARCCRJGtdDWwPsZKi1aurYuODKNw%2BvgTaiSha3ZQDRV7Bz84hvb0pUiCG4a6oxOrvEbfMMGS18QGOqUBNEi9rWfZ1%2B0pRNo8DRDM%2F4dFNTWI8l%2Bl%2B1pmKa793izX2pT7fceet%2F4gU%2FwuozXUCOsuINIm%2BRAj%2Fl7NQEGHujKQubZBFJKPOpzMGx0Bj1u%2FZ1Iayqskq02ALpLL74DNOTg2vKqxS1dH3eCuPuonInXINZmth%2F0RCqUYv6p9Px%2FtZO0WUDoNa%2BzG0XPoRxnKrPPM3ukon%2BDLfi7niyoqmCT7RGEx&X-Amz-Signature=14ea12dc9ef61b78f7c6eb82b9f9551a42c747696c90cf36db83448070155f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
