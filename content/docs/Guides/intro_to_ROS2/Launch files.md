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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXSTGYN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFroEN6nbB%2BEwTjxGjBQOAKzJQ6soslzSkF1MnDF%2BHBIAiB6FtuvKtgcY%2FhctpHJLofkMZR0rmw7v5wcKOkvK7KSrCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BIcVgFC3DEeUxcRKtwDGPVKzPQXTOaRWaIx7fHfKSZK0KP%2FnidPj26ItwAtbe%2F%2B21HyCFJJooRxJlBT7Ao0KZ09rn6nMHdEVsOXC4ixADZzMToiEhTfdjXRO4Xu1s5UxlCyLitHkiV48jwRZ0wHgwtiOqFYeUa0B2Axbck%2BsFQ1p9PJOXcvRBonfqPHeb0v%2F5uUHyt7H2VIhGJrVIlmA1I3%2BfuUjMTZuZP9iC3hpB4XIgmejFhKstcozm%2FZsrDgh8mscv5aJxgGDxw%2FHz%2FFToEghr6Hz%2FfA8%2FtB08CeyO8DURpYgvGFUFQ%2BK7VkbTpHyFnlw6HkrHyH7dW1XFXJ8hQ3TrSFCk%2BA82jgZQQZw2sFhw2cFAxc11SnDqray1LbhU4ZhT8vk5NYO2TboNFqQ%2Bt0b2auYsAPRM1ks5iLW%2BL2MxRj18Q%2F3cvuss2lvefMf51IDfzEeHCg%2BQePTEbqUeincpLbaFw2lk5%2FGa14rwmC0nK%2BJza1A%2B3Jaxnc5S46L%2Fy9rybc5xSo4RgzbMK2DtLaa5hMBA0ktTk40LaHagW3btu1o%2B83Q29Bi8NXlQ%2FNkglAvg40UYv7h5EfTnDunNy3CCnA%2Bs6LA%2BuDF%2FUFAPZsMu2xukHgVkyn9QL8psCbXtuiBrHm0oswygUw6MfQvQY6pgFCW5oAJuGR8ADvgcJR6bpPykStZ9dnsnTydrmIJIh%2ByXZukDnX9fm%2Fzo1%2B9gT8KuFP7QTxsKkbsQZmTY2bdVLlWFT38mHoSjwf%2Br6bGdPmc8z9eIqDm%2Fbz8f9EkrUFCz9lU0df308s0AlmIZoLg9ljaBBrfc8WEqGPbU%2F0Pfdc34AHCIjXMIPc5tCkdluGZFjil%2ByYRLro%2FfnfX%2FzvL%2ByV1kunY9DB&X-Amz-Signature=c18c17d290a1eebe72df5a6933d26b9b5e928762d25d6bab8af8dde3c112a216&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXSTGYN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFroEN6nbB%2BEwTjxGjBQOAKzJQ6soslzSkF1MnDF%2BHBIAiB6FtuvKtgcY%2FhctpHJLofkMZR0rmw7v5wcKOkvK7KSrCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BIcVgFC3DEeUxcRKtwDGPVKzPQXTOaRWaIx7fHfKSZK0KP%2FnidPj26ItwAtbe%2F%2B21HyCFJJooRxJlBT7Ao0KZ09rn6nMHdEVsOXC4ixADZzMToiEhTfdjXRO4Xu1s5UxlCyLitHkiV48jwRZ0wHgwtiOqFYeUa0B2Axbck%2BsFQ1p9PJOXcvRBonfqPHeb0v%2F5uUHyt7H2VIhGJrVIlmA1I3%2BfuUjMTZuZP9iC3hpB4XIgmejFhKstcozm%2FZsrDgh8mscv5aJxgGDxw%2FHz%2FFToEghr6Hz%2FfA8%2FtB08CeyO8DURpYgvGFUFQ%2BK7VkbTpHyFnlw6HkrHyH7dW1XFXJ8hQ3TrSFCk%2BA82jgZQQZw2sFhw2cFAxc11SnDqray1LbhU4ZhT8vk5NYO2TboNFqQ%2Bt0b2auYsAPRM1ks5iLW%2BL2MxRj18Q%2F3cvuss2lvefMf51IDfzEeHCg%2BQePTEbqUeincpLbaFw2lk5%2FGa14rwmC0nK%2BJza1A%2B3Jaxnc5S46L%2Fy9rybc5xSo4RgzbMK2DtLaa5hMBA0ktTk40LaHagW3btu1o%2B83Q29Bi8NXlQ%2FNkglAvg40UYv7h5EfTnDunNy3CCnA%2Bs6LA%2BuDF%2FUFAPZsMu2xukHgVkyn9QL8psCbXtuiBrHm0oswygUw6MfQvQY6pgFCW5oAJuGR8ADvgcJR6bpPykStZ9dnsnTydrmIJIh%2ByXZukDnX9fm%2Fzo1%2B9gT8KuFP7QTxsKkbsQZmTY2bdVLlWFT38mHoSjwf%2Br6bGdPmc8z9eIqDm%2Fbz8f9EkrUFCz9lU0df308s0AlmIZoLg9ljaBBrfc8WEqGPbU%2F0Pfdc34AHCIjXMIPc5tCkdluGZFjil%2ByYRLro%2FfnfX%2FzvL%2ByV1kunY9DB&X-Amz-Signature=9fc96e248bbaf61f6f3c86ffdaa27cbe3e28edb3aa8563af441171b9e5ffb13f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXSTGYN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFroEN6nbB%2BEwTjxGjBQOAKzJQ6soslzSkF1MnDF%2BHBIAiB6FtuvKtgcY%2FhctpHJLofkMZR0rmw7v5wcKOkvK7KSrCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BIcVgFC3DEeUxcRKtwDGPVKzPQXTOaRWaIx7fHfKSZK0KP%2FnidPj26ItwAtbe%2F%2B21HyCFJJooRxJlBT7Ao0KZ09rn6nMHdEVsOXC4ixADZzMToiEhTfdjXRO4Xu1s5UxlCyLitHkiV48jwRZ0wHgwtiOqFYeUa0B2Axbck%2BsFQ1p9PJOXcvRBonfqPHeb0v%2F5uUHyt7H2VIhGJrVIlmA1I3%2BfuUjMTZuZP9iC3hpB4XIgmejFhKstcozm%2FZsrDgh8mscv5aJxgGDxw%2FHz%2FFToEghr6Hz%2FfA8%2FtB08CeyO8DURpYgvGFUFQ%2BK7VkbTpHyFnlw6HkrHyH7dW1XFXJ8hQ3TrSFCk%2BA82jgZQQZw2sFhw2cFAxc11SnDqray1LbhU4ZhT8vk5NYO2TboNFqQ%2Bt0b2auYsAPRM1ks5iLW%2BL2MxRj18Q%2F3cvuss2lvefMf51IDfzEeHCg%2BQePTEbqUeincpLbaFw2lk5%2FGa14rwmC0nK%2BJza1A%2B3Jaxnc5S46L%2Fy9rybc5xSo4RgzbMK2DtLaa5hMBA0ktTk40LaHagW3btu1o%2B83Q29Bi8NXlQ%2FNkglAvg40UYv7h5EfTnDunNy3CCnA%2Bs6LA%2BuDF%2FUFAPZsMu2xukHgVkyn9QL8psCbXtuiBrHm0oswygUw6MfQvQY6pgFCW5oAJuGR8ADvgcJR6bpPykStZ9dnsnTydrmIJIh%2ByXZukDnX9fm%2Fzo1%2B9gT8KuFP7QTxsKkbsQZmTY2bdVLlWFT38mHoSjwf%2Br6bGdPmc8z9eIqDm%2Fbz8f9EkrUFCz9lU0df308s0AlmIZoLg9ljaBBrfc8WEqGPbU%2F0Pfdc34AHCIjXMIPc5tCkdluGZFjil%2ByYRLro%2FfnfX%2FzvL%2ByV1kunY9DB&X-Amz-Signature=474164fa3902e041c28a09f380cf9bec4bdc62598660cac4dbc924fa7efbe598&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
