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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK6JQH6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDHR1pS%2FwwEyLR2KD%2F7%2FOJ62lhBj3gzNW1oq30D97adywIhANerLCMd5r4wRvQvjw5A19iKkk39q%2FdVt44W8kNF73UtKv8DCEQQABoMNjM3NDIzMTgzODA1IgxTqZx0gFfh05GOGf0q3AMErFBepK1M90jrljexNGj3fWMCpDH6PzLwhPAb7UBd0yudjdHvtHh9wINRrF3efJqd8a3Sy9bNEQlbSRjL7f9YYWRQCIfIs9DuT4Dz48vt3XaMkXjHJNH65NMgvxp9HD6a%2FQ4gWL0CrTJT0sKKgscAMeIJSmHpT827wR8nOaWTv5cB34QCPS0rjiiS%2BGZ9as5c8JTw5BqeWAwqOBbNBnCvfjzEZ7Is%2BHMLhrCequBVhbspHtE%2BLGlLl%2BVhlPFnu5J0gTvOzpBDCIcHCOQ1gFWUNVYXjuMzQxyku1%2BUMkeJMS2WaQCcwK7%2FNNkq0lMm%2FnDNxSNrImWjFyeHWed4KMi%2BGvqqUr4m2zQn%2BnqaPg0%2B9mqLl%2BGB%2B0YMGjexQ9B5ETjr85shXImp4yIY%2FZJrGfTTkYZ%2BoAKjZa1rvMsRYzchNigzNLbsHhfPRdFko5bJAnDHOTGqi5dPCz%2Bmk5tAoiFwJCBG53X0nP8AsKEcHDPHih47XBMoHtypCwi9jFE86i6DhkaQ2H%2Bh0aqLvrDjl17R7YfZeVF0EIguUemQTSSdTO7b%2BylBYtg1cJsLkmuB9bIrxEChXtsV0q841rpZRL%2BY4lGqRRzFNxVwBsTB6jySqcQ0nrFqFozGAb3UHTDjp8LEBjqkAY0aQXhkBjM6yPncwwhOlgRjbkk931NkhcxFhQiFD0eUiCa0KhhorujElW%2FJ8bTkPKVN%2Bjkkw%2B4JLwgyMRFhcH1r7jDIbqT4RcyrZ%2FG%2Fx6xlEZJkqenNqpwMuCYgVcy6emnaO6dVtfC6OjNDL9GbCEmfG9llVzEXVoY7wvoskveUzdCuL4CtYb4HUL%2B%2F1FQTfqMGHQ6ad2f7r2mKUVI7i4pupXvR&X-Amz-Signature=0bfc5a21aa6929c4ea848c3a38b7d32435dbf8ab4863a8c9241556958f65096a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK6JQH6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDHR1pS%2FwwEyLR2KD%2F7%2FOJ62lhBj3gzNW1oq30D97adywIhANerLCMd5r4wRvQvjw5A19iKkk39q%2FdVt44W8kNF73UtKv8DCEQQABoMNjM3NDIzMTgzODA1IgxTqZx0gFfh05GOGf0q3AMErFBepK1M90jrljexNGj3fWMCpDH6PzLwhPAb7UBd0yudjdHvtHh9wINRrF3efJqd8a3Sy9bNEQlbSRjL7f9YYWRQCIfIs9DuT4Dz48vt3XaMkXjHJNH65NMgvxp9HD6a%2FQ4gWL0CrTJT0sKKgscAMeIJSmHpT827wR8nOaWTv5cB34QCPS0rjiiS%2BGZ9as5c8JTw5BqeWAwqOBbNBnCvfjzEZ7Is%2BHMLhrCequBVhbspHtE%2BLGlLl%2BVhlPFnu5J0gTvOzpBDCIcHCOQ1gFWUNVYXjuMzQxyku1%2BUMkeJMS2WaQCcwK7%2FNNkq0lMm%2FnDNxSNrImWjFyeHWed4KMi%2BGvqqUr4m2zQn%2BnqaPg0%2B9mqLl%2BGB%2B0YMGjexQ9B5ETjr85shXImp4yIY%2FZJrGfTTkYZ%2BoAKjZa1rvMsRYzchNigzNLbsHhfPRdFko5bJAnDHOTGqi5dPCz%2Bmk5tAoiFwJCBG53X0nP8AsKEcHDPHih47XBMoHtypCwi9jFE86i6DhkaQ2H%2Bh0aqLvrDjl17R7YfZeVF0EIguUemQTSSdTO7b%2BylBYtg1cJsLkmuB9bIrxEChXtsV0q841rpZRL%2BY4lGqRRzFNxVwBsTB6jySqcQ0nrFqFozGAb3UHTDjp8LEBjqkAY0aQXhkBjM6yPncwwhOlgRjbkk931NkhcxFhQiFD0eUiCa0KhhorujElW%2FJ8bTkPKVN%2Bjkkw%2B4JLwgyMRFhcH1r7jDIbqT4RcyrZ%2FG%2Fx6xlEZJkqenNqpwMuCYgVcy6emnaO6dVtfC6OjNDL9GbCEmfG9llVzEXVoY7wvoskveUzdCuL4CtYb4HUL%2B%2F1FQTfqMGHQ6ad2f7r2mKUVI7i4pupXvR&X-Amz-Signature=d940828b38cfcfe94e3c4848513299fe3858907d44d75cff1f2ff1c11951eed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK6JQH6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDHR1pS%2FwwEyLR2KD%2F7%2FOJ62lhBj3gzNW1oq30D97adywIhANerLCMd5r4wRvQvjw5A19iKkk39q%2FdVt44W8kNF73UtKv8DCEQQABoMNjM3NDIzMTgzODA1IgxTqZx0gFfh05GOGf0q3AMErFBepK1M90jrljexNGj3fWMCpDH6PzLwhPAb7UBd0yudjdHvtHh9wINRrF3efJqd8a3Sy9bNEQlbSRjL7f9YYWRQCIfIs9DuT4Dz48vt3XaMkXjHJNH65NMgvxp9HD6a%2FQ4gWL0CrTJT0sKKgscAMeIJSmHpT827wR8nOaWTv5cB34QCPS0rjiiS%2BGZ9as5c8JTw5BqeWAwqOBbNBnCvfjzEZ7Is%2BHMLhrCequBVhbspHtE%2BLGlLl%2BVhlPFnu5J0gTvOzpBDCIcHCOQ1gFWUNVYXjuMzQxyku1%2BUMkeJMS2WaQCcwK7%2FNNkq0lMm%2FnDNxSNrImWjFyeHWed4KMi%2BGvqqUr4m2zQn%2BnqaPg0%2B9mqLl%2BGB%2B0YMGjexQ9B5ETjr85shXImp4yIY%2FZJrGfTTkYZ%2BoAKjZa1rvMsRYzchNigzNLbsHhfPRdFko5bJAnDHOTGqi5dPCz%2Bmk5tAoiFwJCBG53X0nP8AsKEcHDPHih47XBMoHtypCwi9jFE86i6DhkaQ2H%2Bh0aqLvrDjl17R7YfZeVF0EIguUemQTSSdTO7b%2BylBYtg1cJsLkmuB9bIrxEChXtsV0q841rpZRL%2BY4lGqRRzFNxVwBsTB6jySqcQ0nrFqFozGAb3UHTDjp8LEBjqkAY0aQXhkBjM6yPncwwhOlgRjbkk931NkhcxFhQiFD0eUiCa0KhhorujElW%2FJ8bTkPKVN%2Bjkkw%2B4JLwgyMRFhcH1r7jDIbqT4RcyrZ%2FG%2Fx6xlEZJkqenNqpwMuCYgVcy6emnaO6dVtfC6OjNDL9GbCEmfG9llVzEXVoY7wvoskveUzdCuL4CtYb4HUL%2B%2F1FQTfqMGHQ6ad2f7r2mKUVI7i4pupXvR&X-Amz-Signature=8e8bab28735c3eb92ea5b4445771fa31f727234759b872dfe3589e38d1e83026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
