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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTU7V3I%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDKnFjCtdvKou7uZcHrB6xdJYzHDzQcoOdxGOY80TZB9wIgft4NaOoS9vmrRzvbNd7af%2FhwgkSx3iWxCEuNlPyVFZsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5U1tE1x0q3N7ODKircA9s8OJW4bnNXbPJdYh29suNYCLrh0mSFQ85FI5ehFcX%2FG7bj9LmBs2QJHB6G%2BVlW7MX%2FplfWjtaSfto3kmsrqn6P3Vp9B6wZKbphGx4nq3CJbEvCtEw%2FE%2BZQqQwUS9kGz353tfzT%2FFoAFtNQ%2FrQ1I7GsjezE9DCm08NToxi%2BlZeYCe5HymqJG8Ukc246ghaAzyEVUX2KfVeYeND3ZvZQdtpl04rF6trkzuMYipvMFR0eMviRPCeZHxPeGOMlXMcK2%2BqZqzOPQxvZ56mrk8fVBcp%2BciFDFB0ZmBDWKCPcqMCxPo7zwsjiHTY8z2TMUU264KWK%2FoHb6yQVdcf05uj8CMBZOHnWtic1SZRuquj9cGYhGapTuYrbwLFHasOexGxhNk8VwQdGlsnMBpfJuiF6Py7ZzGoVqiAOpFZkDP8ErsSsDnYDJrqmmJSTKQISLVK9XkpaewPjQkBNXKjINpzzxcpA8vmQv87rHeAUcOjZPabFo8HqrvgWujfIUKl4ODwGdsCVHS8klygFDnkVZmP5sRQTIZRoTZJTrrjoYETR2W7I317mF2Q1%2FBTPsA1sErjzWWypYSoad22x5KLSLTwZJfjhy2oLFKaeqFqMYa5Lp9KqSGI3Cw%2BygyFhDxqHMLjj278GOqUBj%2F9%2F66aB15j3e8aQVto7Dn%2BslIweuaFPjYzr3d6%2B9i5IY5NmItAq91pO5JZys32PUHCCKkQdHqmaJPI09FwHxOQe4uZR43W5jus6CN%2FhnZGBvV2NdneLa2iAoryP%2Fz%2FOvLLBxLKHTIBpt7WQmcLtciUCf4Afper6wI7KgUyYAwXfxMQLKoEQp3ilHqMI2btgAJELAF%2FLrHLj2%2FyBMt55g3oaAZ8h&X-Amz-Signature=4939368f49f61dde4fe89ff97fad2d21da68c5788206ff1ab4ec4adbaef374e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTU7V3I%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDKnFjCtdvKou7uZcHrB6xdJYzHDzQcoOdxGOY80TZB9wIgft4NaOoS9vmrRzvbNd7af%2FhwgkSx3iWxCEuNlPyVFZsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5U1tE1x0q3N7ODKircA9s8OJW4bnNXbPJdYh29suNYCLrh0mSFQ85FI5ehFcX%2FG7bj9LmBs2QJHB6G%2BVlW7MX%2FplfWjtaSfto3kmsrqn6P3Vp9B6wZKbphGx4nq3CJbEvCtEw%2FE%2BZQqQwUS9kGz353tfzT%2FFoAFtNQ%2FrQ1I7GsjezE9DCm08NToxi%2BlZeYCe5HymqJG8Ukc246ghaAzyEVUX2KfVeYeND3ZvZQdtpl04rF6trkzuMYipvMFR0eMviRPCeZHxPeGOMlXMcK2%2BqZqzOPQxvZ56mrk8fVBcp%2BciFDFB0ZmBDWKCPcqMCxPo7zwsjiHTY8z2TMUU264KWK%2FoHb6yQVdcf05uj8CMBZOHnWtic1SZRuquj9cGYhGapTuYrbwLFHasOexGxhNk8VwQdGlsnMBpfJuiF6Py7ZzGoVqiAOpFZkDP8ErsSsDnYDJrqmmJSTKQISLVK9XkpaewPjQkBNXKjINpzzxcpA8vmQv87rHeAUcOjZPabFo8HqrvgWujfIUKl4ODwGdsCVHS8klygFDnkVZmP5sRQTIZRoTZJTrrjoYETR2W7I317mF2Q1%2FBTPsA1sErjzWWypYSoad22x5KLSLTwZJfjhy2oLFKaeqFqMYa5Lp9KqSGI3Cw%2BygyFhDxqHMLjj278GOqUBj%2F9%2F66aB15j3e8aQVto7Dn%2BslIweuaFPjYzr3d6%2B9i5IY5NmItAq91pO5JZys32PUHCCKkQdHqmaJPI09FwHxOQe4uZR43W5jus6CN%2FhnZGBvV2NdneLa2iAoryP%2Fz%2FOvLLBxLKHTIBpt7WQmcLtciUCf4Afper6wI7KgUyYAwXfxMQLKoEQp3ilHqMI2btgAJELAF%2FLrHLj2%2FyBMt55g3oaAZ8h&X-Amz-Signature=3afb610723111d0bd073c28595a24ccc788007988587b8e4fc8d9bbd486af127&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTU7V3I%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDKnFjCtdvKou7uZcHrB6xdJYzHDzQcoOdxGOY80TZB9wIgft4NaOoS9vmrRzvbNd7af%2FhwgkSx3iWxCEuNlPyVFZsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5U1tE1x0q3N7ODKircA9s8OJW4bnNXbPJdYh29suNYCLrh0mSFQ85FI5ehFcX%2FG7bj9LmBs2QJHB6G%2BVlW7MX%2FplfWjtaSfto3kmsrqn6P3Vp9B6wZKbphGx4nq3CJbEvCtEw%2FE%2BZQqQwUS9kGz353tfzT%2FFoAFtNQ%2FrQ1I7GsjezE9DCm08NToxi%2BlZeYCe5HymqJG8Ukc246ghaAzyEVUX2KfVeYeND3ZvZQdtpl04rF6trkzuMYipvMFR0eMviRPCeZHxPeGOMlXMcK2%2BqZqzOPQxvZ56mrk8fVBcp%2BciFDFB0ZmBDWKCPcqMCxPo7zwsjiHTY8z2TMUU264KWK%2FoHb6yQVdcf05uj8CMBZOHnWtic1SZRuquj9cGYhGapTuYrbwLFHasOexGxhNk8VwQdGlsnMBpfJuiF6Py7ZzGoVqiAOpFZkDP8ErsSsDnYDJrqmmJSTKQISLVK9XkpaewPjQkBNXKjINpzzxcpA8vmQv87rHeAUcOjZPabFo8HqrvgWujfIUKl4ODwGdsCVHS8klygFDnkVZmP5sRQTIZRoTZJTrrjoYETR2W7I317mF2Q1%2FBTPsA1sErjzWWypYSoad22x5KLSLTwZJfjhy2oLFKaeqFqMYa5Lp9KqSGI3Cw%2BygyFhDxqHMLjj278GOqUBj%2F9%2F66aB15j3e8aQVto7Dn%2BslIweuaFPjYzr3d6%2B9i5IY5NmItAq91pO5JZys32PUHCCKkQdHqmaJPI09FwHxOQe4uZR43W5jus6CN%2FhnZGBvV2NdneLa2iAoryP%2Fz%2FOvLLBxLKHTIBpt7WQmcLtciUCf4Afper6wI7KgUyYAwXfxMQLKoEQp3ilHqMI2btgAJELAF%2FLrHLj2%2FyBMt55g3oaAZ8h&X-Amz-Signature=d55298431ec8031920ead364629d9b01b2ab7533c495bfa07264bbfe31ef4812&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
