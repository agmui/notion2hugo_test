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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JSIGHE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDB7NtaV2LOFn97%2FNvB2yNYiFMtwp1mxY9v3H7r53nEUwIgMT9o6cyy3L%2BB0x6ss7aKFCEy6LtAtx8Bo8%2BBQJ6I59Uq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAvCLRfoom8bOisuLCrcA52mh8JoNwafLle%2B5Is11IF%2BDJ05Kc8eH9bv6Ot%2BSzjx2QyvZVI5Vgh48j%2BRhNFzE40QGAexoqbHq5FK7%2BXPkufgVxF2e%2FvVLF9y%2BSjm3FlWk8osWnERhzE9IaXz8soj4YQ9s2S4yNELl%2BAf%2FnKOGUVkmqd490yRQLONgvaqoo0MJnDYBnmJ3NMHv5GJLbwmTI1I8uXg4XWCpDLT6UoPA5I3OcbK0rV9%2F4Brl9k83TUT7Xify%2B1dMwsxJHNvnYcv12CoFrTfxUmkF44gix98TW86noJadjSxC%2BhjobihSq0WNxDZDQsb7R41GS%2BAl6ulmtxx9QJQ4HIxh8wSNA1Bl1GvQsc9CnXpBKGFsiBCEjLzytH%2Bk%2BJDiQJN98ALSUtR0F5hiXS1Mwzaq2MFFUQyx2p3ANqDOh%2BQ%2BMf9A9%2Bf5T5HX4dWMWVJHRaWngyfx%2FZftkB7mtF8WuoiNFMRl3CiHy6u5XDTbSjgijTgrCCSzmCD%2Flpt16wtY58p2o9pGKkqmMyqVlzXv3yTUn5ceg7badIkgTVpWpHJIo2semYBCJEQjAMIaw7%2BVEL2NGA3FeZfN3bYxsOt07lYsH3lN5XYCqY%2FNplMthPXBOq535B8rylGycdBhTMbQ4SVY187MImnzr0GOqUBXICSoo1vPRHMKFkydh3mMv4aU13Zygb7N1VD%2FHy88hpS6TFarzKj4Jmh7R3BDhMrEiI4dFLQnKmijcdrKKA76iXSOrCJb%2F%2FlXZREsxLmAOdXlQwKyS0OHRqwO9yMBEcNFhtuQu8mWrGMgEePm79Y3YVTu4%2Bt56HZiRniUOCHYsz85eW0a2%2BDD1z9eCZvEbvQvyCfoUdEgRQofe2pVfpj3loQjmmn&X-Amz-Signature=bf41cb62b9a44e0d221a5b1d0cc144a34305b168caac25e828ec1609945adeca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JSIGHE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDB7NtaV2LOFn97%2FNvB2yNYiFMtwp1mxY9v3H7r53nEUwIgMT9o6cyy3L%2BB0x6ss7aKFCEy6LtAtx8Bo8%2BBQJ6I59Uq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAvCLRfoom8bOisuLCrcA52mh8JoNwafLle%2B5Is11IF%2BDJ05Kc8eH9bv6Ot%2BSzjx2QyvZVI5Vgh48j%2BRhNFzE40QGAexoqbHq5FK7%2BXPkufgVxF2e%2FvVLF9y%2BSjm3FlWk8osWnERhzE9IaXz8soj4YQ9s2S4yNELl%2BAf%2FnKOGUVkmqd490yRQLONgvaqoo0MJnDYBnmJ3NMHv5GJLbwmTI1I8uXg4XWCpDLT6UoPA5I3OcbK0rV9%2F4Brl9k83TUT7Xify%2B1dMwsxJHNvnYcv12CoFrTfxUmkF44gix98TW86noJadjSxC%2BhjobihSq0WNxDZDQsb7R41GS%2BAl6ulmtxx9QJQ4HIxh8wSNA1Bl1GvQsc9CnXpBKGFsiBCEjLzytH%2Bk%2BJDiQJN98ALSUtR0F5hiXS1Mwzaq2MFFUQyx2p3ANqDOh%2BQ%2BMf9A9%2Bf5T5HX4dWMWVJHRaWngyfx%2FZftkB7mtF8WuoiNFMRl3CiHy6u5XDTbSjgijTgrCCSzmCD%2Flpt16wtY58p2o9pGKkqmMyqVlzXv3yTUn5ceg7badIkgTVpWpHJIo2semYBCJEQjAMIaw7%2BVEL2NGA3FeZfN3bYxsOt07lYsH3lN5XYCqY%2FNplMthPXBOq535B8rylGycdBhTMbQ4SVY187MImnzr0GOqUBXICSoo1vPRHMKFkydh3mMv4aU13Zygb7N1VD%2FHy88hpS6TFarzKj4Jmh7R3BDhMrEiI4dFLQnKmijcdrKKA76iXSOrCJb%2F%2FlXZREsxLmAOdXlQwKyS0OHRqwO9yMBEcNFhtuQu8mWrGMgEePm79Y3YVTu4%2Bt56HZiRniUOCHYsz85eW0a2%2BDD1z9eCZvEbvQvyCfoUdEgRQofe2pVfpj3loQjmmn&X-Amz-Signature=074c4f0d6ff37f333d77347826cdd991ab285e9b36a4bfa21215474f0dd1a96c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JSIGHE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDB7NtaV2LOFn97%2FNvB2yNYiFMtwp1mxY9v3H7r53nEUwIgMT9o6cyy3L%2BB0x6ss7aKFCEy6LtAtx8Bo8%2BBQJ6I59Uq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAvCLRfoom8bOisuLCrcA52mh8JoNwafLle%2B5Is11IF%2BDJ05Kc8eH9bv6Ot%2BSzjx2QyvZVI5Vgh48j%2BRhNFzE40QGAexoqbHq5FK7%2BXPkufgVxF2e%2FvVLF9y%2BSjm3FlWk8osWnERhzE9IaXz8soj4YQ9s2S4yNELl%2BAf%2FnKOGUVkmqd490yRQLONgvaqoo0MJnDYBnmJ3NMHv5GJLbwmTI1I8uXg4XWCpDLT6UoPA5I3OcbK0rV9%2F4Brl9k83TUT7Xify%2B1dMwsxJHNvnYcv12CoFrTfxUmkF44gix98TW86noJadjSxC%2BhjobihSq0WNxDZDQsb7R41GS%2BAl6ulmtxx9QJQ4HIxh8wSNA1Bl1GvQsc9CnXpBKGFsiBCEjLzytH%2Bk%2BJDiQJN98ALSUtR0F5hiXS1Mwzaq2MFFUQyx2p3ANqDOh%2BQ%2BMf9A9%2Bf5T5HX4dWMWVJHRaWngyfx%2FZftkB7mtF8WuoiNFMRl3CiHy6u5XDTbSjgijTgrCCSzmCD%2Flpt16wtY58p2o9pGKkqmMyqVlzXv3yTUn5ceg7badIkgTVpWpHJIo2semYBCJEQjAMIaw7%2BVEL2NGA3FeZfN3bYxsOt07lYsH3lN5XYCqY%2FNplMthPXBOq535B8rylGycdBhTMbQ4SVY187MImnzr0GOqUBXICSoo1vPRHMKFkydh3mMv4aU13Zygb7N1VD%2FHy88hpS6TFarzKj4Jmh7R3BDhMrEiI4dFLQnKmijcdrKKA76iXSOrCJb%2F%2FlXZREsxLmAOdXlQwKyS0OHRqwO9yMBEcNFhtuQu8mWrGMgEePm79Y3YVTu4%2Bt56HZiRniUOCHYsz85eW0a2%2BDD1z9eCZvEbvQvyCfoUdEgRQofe2pVfpj3loQjmmn&X-Amz-Signature=5404596029385168bf91ef97306f8440416f070efc8b7649010934910d1ed3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
