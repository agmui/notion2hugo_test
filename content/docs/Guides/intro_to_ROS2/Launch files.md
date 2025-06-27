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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=af132b407532145f1729ccccdb793aa8b5687ecd5e4de571288b2a01fb382762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=57863cdaa2f5bdf9157cea31f8e06ddc0b514ed05cc5fd70f547bdfab5fd6df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=a43534dc6824744fba44e59c00ffddde36f0e40d6a674f42f639b1eaf8198dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
