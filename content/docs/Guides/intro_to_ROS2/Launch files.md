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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z322BKJT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7csjV4%2B3GJIhpZ%2FMBSKR5XiVxzJQAwSeevG6p5EGHtAIgJyUnm13ObrKr0E8FypIjUOy0Clll29%2BzhMajvHlgBakqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElvz1Odc%2FM8eVlSHyrcA97PWSIvc0iC34utkadcLm7s7YSqJ00%2F%2Bb8qVdjQ6EkVjeOdsy1A1Tnje27Jez1XFUaA%2BMPZ9jn0u1QJ8rE5kWSAGgXZfDaQeUJzBOXvt5qUJF0LCLkVyV8qwJNV4LV5oKYHbhLiiX0zFk%2FGceTMulJ2O3CFocd49N2w5Wos0G3DVW6BayoDvqMMYM%2B5D3niM0EuZpjqU041T5UisfQjdKMMV581i1KLvpL38TwLnRVOXM4g0drQD%2FnSoSCtm53oBLLs0NIbTraGDUzWwMRXjcSXnkrYZeRMYKO0wOOFhQhqWASTw0e%2BmyGMCbllpzk5SP3ID6iYu4%2BR6TsQg9HtsjFAO85z4YEA6wGJOLHgfSARmUIT0atotHBLQxbD83bLgKrP1TQlVQK%2B6MGgYyFaabXVPLm4OpA8EkoM2Sen%2FI6r97ltNco6z%2B87MHUdzVYjyjbWuUt228Y5Uc4kyKKHbOdKsws6Hy%2BVKTXgGFY3dft4z2TCpOvpOwbTMu8Ltab5GVIWcyw3wFNk9Gdwu%2FEbhU%2F%2B52sFhcB7LM5JcE2DiXhrYQCQdcQP55wRekV%2Bmn0DUs9ttC5BVn0HLlarEcr6AI66hEsFNJJe0E6llG3%2FahyhGdnafAhTxesK3ZbBMMe4g78GOqUB3CfCKYFDogC4Qi8yVRlEvQO5n%2FXafiK7Z1phYRf%2BYdLpd3VNBIsbtwDqUpVKN3dwa1psJ%2FTqCrJdF0cwu%2FxsQjLu0EXR7fHYK%2FfLmbnxSMlPy6XBT4b7pQZW8P0H3m0kzBZ7rNjXoZH8946UnGiU%2FCQzw5DHJeDO8RiiRMV85Y%2BxSzg03Pzgn99C8sBAa7%2FAM4A%2FMSGmu5Q279nmnhALZhMIpZsg&X-Amz-Signature=527c85dd70c600010b1b0e5a2f754c5b6e0be0d9e00231f71470c45205975218&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z322BKJT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7csjV4%2B3GJIhpZ%2FMBSKR5XiVxzJQAwSeevG6p5EGHtAIgJyUnm13ObrKr0E8FypIjUOy0Clll29%2BzhMajvHlgBakqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElvz1Odc%2FM8eVlSHyrcA97PWSIvc0iC34utkadcLm7s7YSqJ00%2F%2Bb8qVdjQ6EkVjeOdsy1A1Tnje27Jez1XFUaA%2BMPZ9jn0u1QJ8rE5kWSAGgXZfDaQeUJzBOXvt5qUJF0LCLkVyV8qwJNV4LV5oKYHbhLiiX0zFk%2FGceTMulJ2O3CFocd49N2w5Wos0G3DVW6BayoDvqMMYM%2B5D3niM0EuZpjqU041T5UisfQjdKMMV581i1KLvpL38TwLnRVOXM4g0drQD%2FnSoSCtm53oBLLs0NIbTraGDUzWwMRXjcSXnkrYZeRMYKO0wOOFhQhqWASTw0e%2BmyGMCbllpzk5SP3ID6iYu4%2BR6TsQg9HtsjFAO85z4YEA6wGJOLHgfSARmUIT0atotHBLQxbD83bLgKrP1TQlVQK%2B6MGgYyFaabXVPLm4OpA8EkoM2Sen%2FI6r97ltNco6z%2B87MHUdzVYjyjbWuUt228Y5Uc4kyKKHbOdKsws6Hy%2BVKTXgGFY3dft4z2TCpOvpOwbTMu8Ltab5GVIWcyw3wFNk9Gdwu%2FEbhU%2F%2B52sFhcB7LM5JcE2DiXhrYQCQdcQP55wRekV%2Bmn0DUs9ttC5BVn0HLlarEcr6AI66hEsFNJJe0E6llG3%2FahyhGdnafAhTxesK3ZbBMMe4g78GOqUB3CfCKYFDogC4Qi8yVRlEvQO5n%2FXafiK7Z1phYRf%2BYdLpd3VNBIsbtwDqUpVKN3dwa1psJ%2FTqCrJdF0cwu%2FxsQjLu0EXR7fHYK%2FfLmbnxSMlPy6XBT4b7pQZW8P0H3m0kzBZ7rNjXoZH8946UnGiU%2FCQzw5DHJeDO8RiiRMV85Y%2BxSzg03Pzgn99C8sBAa7%2FAM4A%2FMSGmu5Q279nmnhALZhMIpZsg&X-Amz-Signature=16017d2b19007f414638f658e2a809e71d5a4ed4226528aa2afe05b561111fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z322BKJT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7csjV4%2B3GJIhpZ%2FMBSKR5XiVxzJQAwSeevG6p5EGHtAIgJyUnm13ObrKr0E8FypIjUOy0Clll29%2BzhMajvHlgBakqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElvz1Odc%2FM8eVlSHyrcA97PWSIvc0iC34utkadcLm7s7YSqJ00%2F%2Bb8qVdjQ6EkVjeOdsy1A1Tnje27Jez1XFUaA%2BMPZ9jn0u1QJ8rE5kWSAGgXZfDaQeUJzBOXvt5qUJF0LCLkVyV8qwJNV4LV5oKYHbhLiiX0zFk%2FGceTMulJ2O3CFocd49N2w5Wos0G3DVW6BayoDvqMMYM%2B5D3niM0EuZpjqU041T5UisfQjdKMMV581i1KLvpL38TwLnRVOXM4g0drQD%2FnSoSCtm53oBLLs0NIbTraGDUzWwMRXjcSXnkrYZeRMYKO0wOOFhQhqWASTw0e%2BmyGMCbllpzk5SP3ID6iYu4%2BR6TsQg9HtsjFAO85z4YEA6wGJOLHgfSARmUIT0atotHBLQxbD83bLgKrP1TQlVQK%2B6MGgYyFaabXVPLm4OpA8EkoM2Sen%2FI6r97ltNco6z%2B87MHUdzVYjyjbWuUt228Y5Uc4kyKKHbOdKsws6Hy%2BVKTXgGFY3dft4z2TCpOvpOwbTMu8Ltab5GVIWcyw3wFNk9Gdwu%2FEbhU%2F%2B52sFhcB7LM5JcE2DiXhrYQCQdcQP55wRekV%2Bmn0DUs9ttC5BVn0HLlarEcr6AI66hEsFNJJe0E6llG3%2FahyhGdnafAhTxesK3ZbBMMe4g78GOqUB3CfCKYFDogC4Qi8yVRlEvQO5n%2FXafiK7Z1phYRf%2BYdLpd3VNBIsbtwDqUpVKN3dwa1psJ%2FTqCrJdF0cwu%2FxsQjLu0EXR7fHYK%2FfLmbnxSMlPy6XBT4b7pQZW8P0H3m0kzBZ7rNjXoZH8946UnGiU%2FCQzw5DHJeDO8RiiRMV85Y%2BxSzg03Pzgn99C8sBAa7%2FAM4A%2FMSGmu5Q279nmnhALZhMIpZsg&X-Amz-Signature=f35cf4b099f11802c55a9c1f1e8bc0e47f25d90b24e014f30ad341f86336bb03&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
