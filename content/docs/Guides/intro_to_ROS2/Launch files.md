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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHYVTM5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElmTYMdl%2F6gXlCXFS2S7%2Bx%2BqzHy2NEH4KLbHSUIRjUPAiEAgxqUDdDIcJnu0IHxtY3Rj0vuRtXjKnhsDhPC7gGAmoEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiuQcKv5z3kP%2F26MyrcAxW7Xey2U10mhpHmNYa%2FKeDV8Af2BPKm93NavL5kd6bxSqnax7MxLpgXarwgcX83wYcKqaf%2B7W6lhhW2CYu7JmnLxbjqjrfeTD0C516ufPQumhVwAj4w45Ssshf0HHUhWkd1utKzMdHH6pAe9OjFBJs2WW%2FJ1fXYYbf99JwD02KbuqINVxKJQMhSNNm2u43cOsUw5DhJWr77VSgyexzAkZ5hdQ9hQ7PsH2143L4nmdsVtZswN7ctI0UiJ%2Bmu6K2zY87L%2FwTxvB5o2yS13M3cRB%2BSNAnznP4zB6KuWPU7%2BCBGWlGJPwcMguIfXSFMXF%2BAYzidpUuwByeGeNeKPOJ2eKj6I0QFTtPQbfqI%2FEdvdy3oD8hmkhPFGmfrUEBesFXHK05P2EESWyoN3%2BA7aXNEy%2FDJtDoAddX33guGlCet3qvzB%2B4m6uIE0dMLFBP0q%2FzgqNWEJzj1L%2FkT7%2FgM3Qk7Dbdn805ndYoa0AgTKjJl9wgDsNvh96eBCO4QBuNQLvV%2F1kka0rLAXEdV%2Beykt75KOxJYhQKsLZYSLMQq4Ypz%2F6%2FjuGRZccYi14Wo%2B28FyqQ9L5w%2FjBh5bhgPxJ1NQ8gtfp8Be7V1zgJJhqkxB7WoTYjBuGVl7M7osLMIOVAeMN%2Fkq70GOqUBtuBVl%2BvGP7m6F2WkkU4QA6mlQenTH%2BStIzEBMiU5VDyD2VJC3%2BvNoyswCwjKL2nDEIFc3sU%2F0Cxf0msFR%2FjBaauU%2FkfKchqDHN6h1AS1FwjbUGOnpPtsPLVNYt6uWxaRdaVpKpLRVm1eFbBrcWwiDAFixeIydVupqsXsKSr93wguYwfl4K4yWyqLJbusT70EK0Byr9g10NglKESiJYSMpGFAQXtu&X-Amz-Signature=7e2b2367e5f520c6a570c19a2f0b6294a7aea35581191bab4999492447bc029a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHYVTM5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElmTYMdl%2F6gXlCXFS2S7%2Bx%2BqzHy2NEH4KLbHSUIRjUPAiEAgxqUDdDIcJnu0IHxtY3Rj0vuRtXjKnhsDhPC7gGAmoEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiuQcKv5z3kP%2F26MyrcAxW7Xey2U10mhpHmNYa%2FKeDV8Af2BPKm93NavL5kd6bxSqnax7MxLpgXarwgcX83wYcKqaf%2B7W6lhhW2CYu7JmnLxbjqjrfeTD0C516ufPQumhVwAj4w45Ssshf0HHUhWkd1utKzMdHH6pAe9OjFBJs2WW%2FJ1fXYYbf99JwD02KbuqINVxKJQMhSNNm2u43cOsUw5DhJWr77VSgyexzAkZ5hdQ9hQ7PsH2143L4nmdsVtZswN7ctI0UiJ%2Bmu6K2zY87L%2FwTxvB5o2yS13M3cRB%2BSNAnznP4zB6KuWPU7%2BCBGWlGJPwcMguIfXSFMXF%2BAYzidpUuwByeGeNeKPOJ2eKj6I0QFTtPQbfqI%2FEdvdy3oD8hmkhPFGmfrUEBesFXHK05P2EESWyoN3%2BA7aXNEy%2FDJtDoAddX33guGlCet3qvzB%2B4m6uIE0dMLFBP0q%2FzgqNWEJzj1L%2FkT7%2FgM3Qk7Dbdn805ndYoa0AgTKjJl9wgDsNvh96eBCO4QBuNQLvV%2F1kka0rLAXEdV%2Beykt75KOxJYhQKsLZYSLMQq4Ypz%2F6%2FjuGRZccYi14Wo%2B28FyqQ9L5w%2FjBh5bhgPxJ1NQ8gtfp8Be7V1zgJJhqkxB7WoTYjBuGVl7M7osLMIOVAeMN%2Fkq70GOqUBtuBVl%2BvGP7m6F2WkkU4QA6mlQenTH%2BStIzEBMiU5VDyD2VJC3%2BvNoyswCwjKL2nDEIFc3sU%2F0Cxf0msFR%2FjBaauU%2FkfKchqDHN6h1AS1FwjbUGOnpPtsPLVNYt6uWxaRdaVpKpLRVm1eFbBrcWwiDAFixeIydVupqsXsKSr93wguYwfl4K4yWyqLJbusT70EK0Byr9g10NglKESiJYSMpGFAQXtu&X-Amz-Signature=0b085690d9c5ac1557786767219066f66cf3afc2edff787fce5e814439931929&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHYVTM5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElmTYMdl%2F6gXlCXFS2S7%2Bx%2BqzHy2NEH4KLbHSUIRjUPAiEAgxqUDdDIcJnu0IHxtY3Rj0vuRtXjKnhsDhPC7gGAmoEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiuQcKv5z3kP%2F26MyrcAxW7Xey2U10mhpHmNYa%2FKeDV8Af2BPKm93NavL5kd6bxSqnax7MxLpgXarwgcX83wYcKqaf%2B7W6lhhW2CYu7JmnLxbjqjrfeTD0C516ufPQumhVwAj4w45Ssshf0HHUhWkd1utKzMdHH6pAe9OjFBJs2WW%2FJ1fXYYbf99JwD02KbuqINVxKJQMhSNNm2u43cOsUw5DhJWr77VSgyexzAkZ5hdQ9hQ7PsH2143L4nmdsVtZswN7ctI0UiJ%2Bmu6K2zY87L%2FwTxvB5o2yS13M3cRB%2BSNAnznP4zB6KuWPU7%2BCBGWlGJPwcMguIfXSFMXF%2BAYzidpUuwByeGeNeKPOJ2eKj6I0QFTtPQbfqI%2FEdvdy3oD8hmkhPFGmfrUEBesFXHK05P2EESWyoN3%2BA7aXNEy%2FDJtDoAddX33guGlCet3qvzB%2B4m6uIE0dMLFBP0q%2FzgqNWEJzj1L%2FkT7%2FgM3Qk7Dbdn805ndYoa0AgTKjJl9wgDsNvh96eBCO4QBuNQLvV%2F1kka0rLAXEdV%2Beykt75KOxJYhQKsLZYSLMQq4Ypz%2F6%2FjuGRZccYi14Wo%2B28FyqQ9L5w%2FjBh5bhgPxJ1NQ8gtfp8Be7V1zgJJhqkxB7WoTYjBuGVl7M7osLMIOVAeMN%2Fkq70GOqUBtuBVl%2BvGP7m6F2WkkU4QA6mlQenTH%2BStIzEBMiU5VDyD2VJC3%2BvNoyswCwjKL2nDEIFc3sU%2F0Cxf0msFR%2FjBaauU%2FkfKchqDHN6h1AS1FwjbUGOnpPtsPLVNYt6uWxaRdaVpKpLRVm1eFbBrcWwiDAFixeIydVupqsXsKSr93wguYwfl4K4yWyqLJbusT70EK0Byr9g10NglKESiJYSMpGFAQXtu&X-Amz-Signature=44d6f5cc2e09ec3a154513303a3bc082cba94ffa55185f6aeeda62f3fde1e4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
