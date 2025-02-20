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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S44C6G%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVjIAaQlIZsS1yRXDwZxd3%2F2Fg23wZdA567jJspNW2JAiEAspd6ks1J8JHKS99gPzWZdvE1%2ByLqws9nVirz0GTn7CwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ50L0iO8vNR%2Fuj19CrcA%2FMRYZUQs7%2FEmOMoCibmc%2FAl%2Fc9XxBO8Ap9dFvEKjcFShkBgabTI%2BfiqIPukBVUJXIuuyBa6a%2BhRhoCCXgp7%2FmKMUsu1%2BWWnYm7toXFNZvVagMTC6wbccKMXZItdJChOoF0ILzJgmf45BwcwrR6O%2FL6mLHJwMq5O0pvzT7PE4ncPPAWvD%2FX1yQ5x3xch9tEid5yuNy7gfHKSiBSSFTldw2XQ92o9oohlp%2FWH4is1OezESO14XEwB%2BX9oBmhel4a%2F3IQKfVGtHmAvjftIIz9UMxluWgJlw6QnvjOtm3ppF0BtHjzU0r44yG3ZEVqKWtrPFXOMelnLsY7h%2BedL6qIiqIk7nlUDeCuYlObN1p5%2B31dBv5VUODYtegpJ6waIdSgadOL7KOjzrQeZwfLAGk1LoBL4%2F4kltfHs%2BqYuPkUblRTHa93SiIn2bIpkSjIyZnWxGs3ONvqJEnzZyOt9s1TjEowQNuIHFRA0%2BmD7ZLJbySesozTIqO3HlkXfavKOyClGPPfDWxLXM5YlYSa8hg043Ix4HYi6HLH%2F9zopYIAQwvemTjho44doJI3qYxNnpYwCRSyqUhsOlR%2FMNP39H4%2BskaZ5T4BkV76u4%2FYQdOgQhYOfYVG%2BrLwOBqI74ZWAMMic270GOqUB5uLSpbeCq2soI6a0GMgWjCU3tZ8HaGvmYSdl7mAokkgZGMdtKXyiopyZBIwH7wJ9cbM1rMphT%2FeJGIGy8ocDTgLHhDLDTUMmVnxOA1m%2FOEo%2BuOJO8ZB8%2FGuT3RugqI12rw6MwwDZq39uL2K3fB76wFuo8hSLevL0weRv2d%2BvcR9gTK6JNYMj3topDfA1Ol3c09VlGCYXQoTzYbbgTEQslO%2FOvtiZ&X-Amz-Signature=fb4c3fbf8ff64969a1e2f3f72f15bc0558874e31c93e64832071ad50f0c6df6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S44C6G%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVjIAaQlIZsS1yRXDwZxd3%2F2Fg23wZdA567jJspNW2JAiEAspd6ks1J8JHKS99gPzWZdvE1%2ByLqws9nVirz0GTn7CwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ50L0iO8vNR%2Fuj19CrcA%2FMRYZUQs7%2FEmOMoCibmc%2FAl%2Fc9XxBO8Ap9dFvEKjcFShkBgabTI%2BfiqIPukBVUJXIuuyBa6a%2BhRhoCCXgp7%2FmKMUsu1%2BWWnYm7toXFNZvVagMTC6wbccKMXZItdJChOoF0ILzJgmf45BwcwrR6O%2FL6mLHJwMq5O0pvzT7PE4ncPPAWvD%2FX1yQ5x3xch9tEid5yuNy7gfHKSiBSSFTldw2XQ92o9oohlp%2FWH4is1OezESO14XEwB%2BX9oBmhel4a%2F3IQKfVGtHmAvjftIIz9UMxluWgJlw6QnvjOtm3ppF0BtHjzU0r44yG3ZEVqKWtrPFXOMelnLsY7h%2BedL6qIiqIk7nlUDeCuYlObN1p5%2B31dBv5VUODYtegpJ6waIdSgadOL7KOjzrQeZwfLAGk1LoBL4%2F4kltfHs%2BqYuPkUblRTHa93SiIn2bIpkSjIyZnWxGs3ONvqJEnzZyOt9s1TjEowQNuIHFRA0%2BmD7ZLJbySesozTIqO3HlkXfavKOyClGPPfDWxLXM5YlYSa8hg043Ix4HYi6HLH%2F9zopYIAQwvemTjho44doJI3qYxNnpYwCRSyqUhsOlR%2FMNP39H4%2BskaZ5T4BkV76u4%2FYQdOgQhYOfYVG%2BrLwOBqI74ZWAMMic270GOqUB5uLSpbeCq2soI6a0GMgWjCU3tZ8HaGvmYSdl7mAokkgZGMdtKXyiopyZBIwH7wJ9cbM1rMphT%2FeJGIGy8ocDTgLHhDLDTUMmVnxOA1m%2FOEo%2BuOJO8ZB8%2FGuT3RugqI12rw6MwwDZq39uL2K3fB76wFuo8hSLevL0weRv2d%2BvcR9gTK6JNYMj3topDfA1Ol3c09VlGCYXQoTzYbbgTEQslO%2FOvtiZ&X-Amz-Signature=3103cbd2fb53a9e1c35d8ed15fcca1d8caaddc6e5bf7a9ab40ab3c6418352431&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662S44C6G%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVjIAaQlIZsS1yRXDwZxd3%2F2Fg23wZdA567jJspNW2JAiEAspd6ks1J8JHKS99gPzWZdvE1%2ByLqws9nVirz0GTn7CwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ50L0iO8vNR%2Fuj19CrcA%2FMRYZUQs7%2FEmOMoCibmc%2FAl%2Fc9XxBO8Ap9dFvEKjcFShkBgabTI%2BfiqIPukBVUJXIuuyBa6a%2BhRhoCCXgp7%2FmKMUsu1%2BWWnYm7toXFNZvVagMTC6wbccKMXZItdJChOoF0ILzJgmf45BwcwrR6O%2FL6mLHJwMq5O0pvzT7PE4ncPPAWvD%2FX1yQ5x3xch9tEid5yuNy7gfHKSiBSSFTldw2XQ92o9oohlp%2FWH4is1OezESO14XEwB%2BX9oBmhel4a%2F3IQKfVGtHmAvjftIIz9UMxluWgJlw6QnvjOtm3ppF0BtHjzU0r44yG3ZEVqKWtrPFXOMelnLsY7h%2BedL6qIiqIk7nlUDeCuYlObN1p5%2B31dBv5VUODYtegpJ6waIdSgadOL7KOjzrQeZwfLAGk1LoBL4%2F4kltfHs%2BqYuPkUblRTHa93SiIn2bIpkSjIyZnWxGs3ONvqJEnzZyOt9s1TjEowQNuIHFRA0%2BmD7ZLJbySesozTIqO3HlkXfavKOyClGPPfDWxLXM5YlYSa8hg043Ix4HYi6HLH%2F9zopYIAQwvemTjho44doJI3qYxNnpYwCRSyqUhsOlR%2FMNP39H4%2BskaZ5T4BkV76u4%2FYQdOgQhYOfYVG%2BrLwOBqI74ZWAMMic270GOqUB5uLSpbeCq2soI6a0GMgWjCU3tZ8HaGvmYSdl7mAokkgZGMdtKXyiopyZBIwH7wJ9cbM1rMphT%2FeJGIGy8ocDTgLHhDLDTUMmVnxOA1m%2FOEo%2BuOJO8ZB8%2FGuT3RugqI12rw6MwwDZq39uL2K3fB76wFuo8hSLevL0weRv2d%2BvcR9gTK6JNYMj3topDfA1Ol3c09VlGCYXQoTzYbbgTEQslO%2FOvtiZ&X-Amz-Signature=9fda7c07ee838cf90f44b28ff24b37c536e3b57dbabd62b55c5441932dc4ae7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
