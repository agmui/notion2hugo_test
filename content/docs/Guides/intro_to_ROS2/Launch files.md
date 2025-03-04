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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KKMKQ3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuGGTvCCpTS8hgcZpbNeJIRBns67WHIbeDG3LApbfdgwIgM7jBmu%2Fxgjn%2FMrIGiOvJmEblmYVBMh9l4crs5aBdyRoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC75aG6OdDpp9oMQ7CrcA1%2F8S4rGvWZgAYqFYY1W%2FpPe%2BS6AmnB6QuXVAWCIlsrv4B9etJ2wPBH3nvn6hW8GGthhnJoAxwAdx5uQl9vAMTPUFGnZw0j00wM4oZyq1STtA5wKxX76XF5TN2koP0RC9U9niHgr%2BWxwvIjx6IG57hdRlCG%2FwBKhmd5l4eQOZCJ7Zi8GXR7Pl8eejsY8wvlRZTP%2B%2FuCzaMHv1pM03xjcAQDoet7TQp35BJ0XFG%2FdX59IE7nZr8M41lzl%2Fyag8AT%2BwMPU%2B4yRJL0DCetvj2YRplLrUmhuR6NHAPYGpkPnG128t4ZaQg1XbUijOZdPHvHDCXxUkTXx1NTU3QUhEzAN%2BUKVizsqof%2B%2FSpix1U81j%2FAVeKTmRiYP7JuRDVGcKarMwBm1tODCtW1O%2FrZ06oD4xRAYMOk3PBNOIOjZ%2FavKfDgTyCLvgRQEXOmU3VXyxD3IhrQMvQTrPaOCI5%2FRlWLn0Cb7JYPq7u3svOpXA1E2G4pTC8bd2eWnWZTQzsX2tsl4tlUngU873bGxlsXJj%2Bp7%2FqTg%2BLchypzpT806eueAi3GMbplT0606doqEHvLjbPVzWc5dl7z8RubkOTSduGG6c115Bw9uICHJ0J3eev7Rj6GoTok9cQcLmFVlVyMcMPqjm74GOqUBGQv1uP7U4pqY7fi1CaoI7uk6KWvZpV9pAKeH2bnueIsgfQxfjpB0UxJIpSEQ960tSejZAxsQlPlbrHP1vZYkHBbJRLUD5lBtS%2F7ClFN3UcVYzwwJH%2B1bRxPM90sxlxGk4451fLuEVPfpA%2BFgPrzrYY9eEHEuRIJToIMpNCw2qhgEDPxn%2Bql6GqjrhGaGTA0u0SouIlNcTvoz%2Fj%2FofB0Xccq7OXx2&X-Amz-Signature=c08f6aec2f397aeb71864ad7d7f049e43e31cfe9a805d31c9eb21fc9dc3358b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KKMKQ3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuGGTvCCpTS8hgcZpbNeJIRBns67WHIbeDG3LApbfdgwIgM7jBmu%2Fxgjn%2FMrIGiOvJmEblmYVBMh9l4crs5aBdyRoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC75aG6OdDpp9oMQ7CrcA1%2F8S4rGvWZgAYqFYY1W%2FpPe%2BS6AmnB6QuXVAWCIlsrv4B9etJ2wPBH3nvn6hW8GGthhnJoAxwAdx5uQl9vAMTPUFGnZw0j00wM4oZyq1STtA5wKxX76XF5TN2koP0RC9U9niHgr%2BWxwvIjx6IG57hdRlCG%2FwBKhmd5l4eQOZCJ7Zi8GXR7Pl8eejsY8wvlRZTP%2B%2FuCzaMHv1pM03xjcAQDoet7TQp35BJ0XFG%2FdX59IE7nZr8M41lzl%2Fyag8AT%2BwMPU%2B4yRJL0DCetvj2YRplLrUmhuR6NHAPYGpkPnG128t4ZaQg1XbUijOZdPHvHDCXxUkTXx1NTU3QUhEzAN%2BUKVizsqof%2B%2FSpix1U81j%2FAVeKTmRiYP7JuRDVGcKarMwBm1tODCtW1O%2FrZ06oD4xRAYMOk3PBNOIOjZ%2FavKfDgTyCLvgRQEXOmU3VXyxD3IhrQMvQTrPaOCI5%2FRlWLn0Cb7JYPq7u3svOpXA1E2G4pTC8bd2eWnWZTQzsX2tsl4tlUngU873bGxlsXJj%2Bp7%2FqTg%2BLchypzpT806eueAi3GMbplT0606doqEHvLjbPVzWc5dl7z8RubkOTSduGG6c115Bw9uICHJ0J3eev7Rj6GoTok9cQcLmFVlVyMcMPqjm74GOqUBGQv1uP7U4pqY7fi1CaoI7uk6KWvZpV9pAKeH2bnueIsgfQxfjpB0UxJIpSEQ960tSejZAxsQlPlbrHP1vZYkHBbJRLUD5lBtS%2F7ClFN3UcVYzwwJH%2B1bRxPM90sxlxGk4451fLuEVPfpA%2BFgPrzrYY9eEHEuRIJToIMpNCw2qhgEDPxn%2Bql6GqjrhGaGTA0u0SouIlNcTvoz%2Fj%2FofB0Xccq7OXx2&X-Amz-Signature=928f43f5d1d03043338710ccf7e65550f9c8b14cc8e732980045d8810f5f6437&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KKMKQ3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuGGTvCCpTS8hgcZpbNeJIRBns67WHIbeDG3LApbfdgwIgM7jBmu%2Fxgjn%2FMrIGiOvJmEblmYVBMh9l4crs5aBdyRoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC75aG6OdDpp9oMQ7CrcA1%2F8S4rGvWZgAYqFYY1W%2FpPe%2BS6AmnB6QuXVAWCIlsrv4B9etJ2wPBH3nvn6hW8GGthhnJoAxwAdx5uQl9vAMTPUFGnZw0j00wM4oZyq1STtA5wKxX76XF5TN2koP0RC9U9niHgr%2BWxwvIjx6IG57hdRlCG%2FwBKhmd5l4eQOZCJ7Zi8GXR7Pl8eejsY8wvlRZTP%2B%2FuCzaMHv1pM03xjcAQDoet7TQp35BJ0XFG%2FdX59IE7nZr8M41lzl%2Fyag8AT%2BwMPU%2B4yRJL0DCetvj2YRplLrUmhuR6NHAPYGpkPnG128t4ZaQg1XbUijOZdPHvHDCXxUkTXx1NTU3QUhEzAN%2BUKVizsqof%2B%2FSpix1U81j%2FAVeKTmRiYP7JuRDVGcKarMwBm1tODCtW1O%2FrZ06oD4xRAYMOk3PBNOIOjZ%2FavKfDgTyCLvgRQEXOmU3VXyxD3IhrQMvQTrPaOCI5%2FRlWLn0Cb7JYPq7u3svOpXA1E2G4pTC8bd2eWnWZTQzsX2tsl4tlUngU873bGxlsXJj%2Bp7%2FqTg%2BLchypzpT806eueAi3GMbplT0606doqEHvLjbPVzWc5dl7z8RubkOTSduGG6c115Bw9uICHJ0J3eev7Rj6GoTok9cQcLmFVlVyMcMPqjm74GOqUBGQv1uP7U4pqY7fi1CaoI7uk6KWvZpV9pAKeH2bnueIsgfQxfjpB0UxJIpSEQ960tSejZAxsQlPlbrHP1vZYkHBbJRLUD5lBtS%2F7ClFN3UcVYzwwJH%2B1bRxPM90sxlxGk4451fLuEVPfpA%2BFgPrzrYY9eEHEuRIJToIMpNCw2qhgEDPxn%2Bql6GqjrhGaGTA0u0SouIlNcTvoz%2Fj%2FofB0Xccq7OXx2&X-Amz-Signature=3ac886be3bfdcadf8212736c0a2d319b1788c1524fb154c9d514816cd2434ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
