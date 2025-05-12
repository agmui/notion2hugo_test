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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N6QD7Y%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDQrFuqJlaOn1li9WoGLsyWCzgvK%2Fhc%2BosIlRFp6IhzxgIgHVRxkzdvdcG9K94mh4kypyDKhp3S9KD2la%2Bd4j18azsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq%2Fok21K23H8CmCFCrcAwiajHg6ZodpK1SyVeFjk5widJq6HAUOt35wo60Xad8jr4IPGXJ1JWVZlKWMV7CEOQiviVW0BFCMSgOSIBNjakAPGpSoYdZ0tpbAU1lEVAXax809zJw1WOa0Q0eYQUhpGDbaI%2FC0HkMYOWOxWX%2Byyp57MYsGW5HlrH35nYt8V7K5lk5ZNF5bL6zURblhe7PNYEHNP7uU9%2BRKpxPBeDY4CmC9ya04EJ%2FKuP1Hvu6weJy7q4JeRBE914BqSrKKmnP4KYxelB1a%2BZ1qByJ2Hr%2FNSm6tWLyydi1t7sXpj2l7J0x1VJQXWSto%2FKHriJlLpfR9QnUYEc3b86XUnF1zP5Uw5hi%2FGZbVIM2x5NX%2BRapEeD27AXs%2Fl80Z9LcL66wjmpOst0gm0tcKa%2B20xFYMB7W8z6kea10MalvgbwvuQiBFSpxYedAZ2hvdh%2FFYJCG4T4m4hp%2FlBAocQOp59RBiAN1NuCJ6Sf6q1Cgoiaj9%2FPoZwA9hT6oeAJmioc%2F696EY%2FQRbuUsAqERWPk6apEFwKYBF4d3MnfSrrCfFjV%2BdSxga5K5k08N9ljhC8tNx2IkqN%2BF1XKT0mplGBVWnPpYtg5tpooIzLnlv7LsGnE9uJstkYqfNgy%2FqK4flc12xuTvHMJzZiMEGOqUBjDqOAR%2Fx5qKBful2LNgfeOQLQQSiODD4v6UxMwJ2W%2FWT47BXfkioS1OudDtRjMwiy9zDvxOUq7%2FwoPxltNm3aW7rH0fmKp1n0pWiXvIl0kf21IsEZHXVdtUQTVevobBBib6hUHYwTxrOWLhJqM9FX6Kc0JThm5Y%2BOL57Ogo3%2FXLZENGL9tWxJTTXXBMP887rYHeYfYjrKbVBCHMK7NtwOeoAEZ%2B7&X-Amz-Signature=d6466784176f47d423961c34fdecc76e245db81c87c941a38abb28501eef1b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N6QD7Y%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDQrFuqJlaOn1li9WoGLsyWCzgvK%2Fhc%2BosIlRFp6IhzxgIgHVRxkzdvdcG9K94mh4kypyDKhp3S9KD2la%2Bd4j18azsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq%2Fok21K23H8CmCFCrcAwiajHg6ZodpK1SyVeFjk5widJq6HAUOt35wo60Xad8jr4IPGXJ1JWVZlKWMV7CEOQiviVW0BFCMSgOSIBNjakAPGpSoYdZ0tpbAU1lEVAXax809zJw1WOa0Q0eYQUhpGDbaI%2FC0HkMYOWOxWX%2Byyp57MYsGW5HlrH35nYt8V7K5lk5ZNF5bL6zURblhe7PNYEHNP7uU9%2BRKpxPBeDY4CmC9ya04EJ%2FKuP1Hvu6weJy7q4JeRBE914BqSrKKmnP4KYxelB1a%2BZ1qByJ2Hr%2FNSm6tWLyydi1t7sXpj2l7J0x1VJQXWSto%2FKHriJlLpfR9QnUYEc3b86XUnF1zP5Uw5hi%2FGZbVIM2x5NX%2BRapEeD27AXs%2Fl80Z9LcL66wjmpOst0gm0tcKa%2B20xFYMB7W8z6kea10MalvgbwvuQiBFSpxYedAZ2hvdh%2FFYJCG4T4m4hp%2FlBAocQOp59RBiAN1NuCJ6Sf6q1Cgoiaj9%2FPoZwA9hT6oeAJmioc%2F696EY%2FQRbuUsAqERWPk6apEFwKYBF4d3MnfSrrCfFjV%2BdSxga5K5k08N9ljhC8tNx2IkqN%2BF1XKT0mplGBVWnPpYtg5tpooIzLnlv7LsGnE9uJstkYqfNgy%2FqK4flc12xuTvHMJzZiMEGOqUBjDqOAR%2Fx5qKBful2LNgfeOQLQQSiODD4v6UxMwJ2W%2FWT47BXfkioS1OudDtRjMwiy9zDvxOUq7%2FwoPxltNm3aW7rH0fmKp1n0pWiXvIl0kf21IsEZHXVdtUQTVevobBBib6hUHYwTxrOWLhJqM9FX6Kc0JThm5Y%2BOL57Ogo3%2FXLZENGL9tWxJTTXXBMP887rYHeYfYjrKbVBCHMK7NtwOeoAEZ%2B7&X-Amz-Signature=56bd0b55a299705b70df7627774ffe11b77def734be864e78aa1c9b6f8a6779d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N6QD7Y%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDQrFuqJlaOn1li9WoGLsyWCzgvK%2Fhc%2BosIlRFp6IhzxgIgHVRxkzdvdcG9K94mh4kypyDKhp3S9KD2la%2Bd4j18azsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq%2Fok21K23H8CmCFCrcAwiajHg6ZodpK1SyVeFjk5widJq6HAUOt35wo60Xad8jr4IPGXJ1JWVZlKWMV7CEOQiviVW0BFCMSgOSIBNjakAPGpSoYdZ0tpbAU1lEVAXax809zJw1WOa0Q0eYQUhpGDbaI%2FC0HkMYOWOxWX%2Byyp57MYsGW5HlrH35nYt8V7K5lk5ZNF5bL6zURblhe7PNYEHNP7uU9%2BRKpxPBeDY4CmC9ya04EJ%2FKuP1Hvu6weJy7q4JeRBE914BqSrKKmnP4KYxelB1a%2BZ1qByJ2Hr%2FNSm6tWLyydi1t7sXpj2l7J0x1VJQXWSto%2FKHriJlLpfR9QnUYEc3b86XUnF1zP5Uw5hi%2FGZbVIM2x5NX%2BRapEeD27AXs%2Fl80Z9LcL66wjmpOst0gm0tcKa%2B20xFYMB7W8z6kea10MalvgbwvuQiBFSpxYedAZ2hvdh%2FFYJCG4T4m4hp%2FlBAocQOp59RBiAN1NuCJ6Sf6q1Cgoiaj9%2FPoZwA9hT6oeAJmioc%2F696EY%2FQRbuUsAqERWPk6apEFwKYBF4d3MnfSrrCfFjV%2BdSxga5K5k08N9ljhC8tNx2IkqN%2BF1XKT0mplGBVWnPpYtg5tpooIzLnlv7LsGnE9uJstkYqfNgy%2FqK4flc12xuTvHMJzZiMEGOqUBjDqOAR%2Fx5qKBful2LNgfeOQLQQSiODD4v6UxMwJ2W%2FWT47BXfkioS1OudDtRjMwiy9zDvxOUq7%2FwoPxltNm3aW7rH0fmKp1n0pWiXvIl0kf21IsEZHXVdtUQTVevobBBib6hUHYwTxrOWLhJqM9FX6Kc0JThm5Y%2BOL57Ogo3%2FXLZENGL9tWxJTTXXBMP887rYHeYfYjrKbVBCHMK7NtwOeoAEZ%2B7&X-Amz-Signature=3a6edb8f4316ba39828ab6b299790c44c7a509ef1ceebe05a5e0ed4fd1188718&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
