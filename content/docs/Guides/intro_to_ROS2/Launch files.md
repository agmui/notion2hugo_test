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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWCTTL5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqO4imvzuJwkSxobO8bwwcnbvApx9NJMJHObpxOJZCrwIhAIQlMO3K99vlqOAcafcg8N4m5djxmAUQAHmxLZ9fIRT8Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzQNN2elYfj50SFxvkq3AOtfYQ3CotWitcKb6zVuFTJLWIIWq8VRJm6E4pKNYhYVG%2B%2F4DJkEmhGyMx1orDgdtdvlizUPDf%2FupzOoSaw3DH5MRXWtfU2I3H0ae%2B%2Fh%2BIqI%2F3SR1aJRYfoIn49CzyazTFCTMTLiAVW9W7c%2F7OziUpRRWsdfSDh5NjqhmywPH7bS3%2BAZHgkrYMBNykI99HN7wDyZd9Zw99noVnXXRAdpS20CRyk4ktYqAs4EF1vkBrhu%2B9N392azxRjlCXndvfwMK1Rs8E4%2BahvT20xKaHYBj3684Il35tysB9NqAZfJlrGvRS%2FB1oAzwKe2LmzXQclIA47LJz4avSvmDtOMRdNH5OI%2Fvrr%2BNNXuyQT0MuHZjiaUI4bS1jXxr2Ytf5exMgmQeLNxwUOC5MMKLhUbC1FhemPVBuQQvdqSRNNljUaulk0%2BIRCRYxrgKAAL0oWhQuUcO1gItNRpAC7OllTpiyvDWGr%2Bj3Vi4QLwY3xEUjrqoaDm5ALGQcoocF8nS8oWf98HvmqFvZk%2BgBAhqphcd3EofhVhBWZ5EuTnXImJNVYkqBhyxStmGetT6VEx6fm8ONjc6m3oZOC3ehPvHvzAK%2FSw0DV%2FrVVktR6JRvAelOtWB5GE8nNFGAaSsHXfFvAcjDSr4m%2FBjqkAaKolAm3bLB9lKq7ePmOXKwrH9tUAozMQujo1GfqOj2vEi2C1N3KQlOtp6oFMXTeVTGFHwks9YqGhuSv2oe0KmSAj57nW2XI5f0OKX71EjhxZdKW12pyoJcuLhTckSO%2FLR2nw%2Fk8yCxLi6qKqL2lBBJkYMPKNHf7iFq5pLvwvDPAPwlvOsZxIzau%2Fux9EmAqBIVdjJ7ASnADc4uwKPDnvI7e1ZVA&X-Amz-Signature=cebb4d7b7988f56c4b6b559de3f297cc71cd2558cabe4d1cdd4dd5eb8eb1b33c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWCTTL5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqO4imvzuJwkSxobO8bwwcnbvApx9NJMJHObpxOJZCrwIhAIQlMO3K99vlqOAcafcg8N4m5djxmAUQAHmxLZ9fIRT8Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzQNN2elYfj50SFxvkq3AOtfYQ3CotWitcKb6zVuFTJLWIIWq8VRJm6E4pKNYhYVG%2B%2F4DJkEmhGyMx1orDgdtdvlizUPDf%2FupzOoSaw3DH5MRXWtfU2I3H0ae%2B%2Fh%2BIqI%2F3SR1aJRYfoIn49CzyazTFCTMTLiAVW9W7c%2F7OziUpRRWsdfSDh5NjqhmywPH7bS3%2BAZHgkrYMBNykI99HN7wDyZd9Zw99noVnXXRAdpS20CRyk4ktYqAs4EF1vkBrhu%2B9N392azxRjlCXndvfwMK1Rs8E4%2BahvT20xKaHYBj3684Il35tysB9NqAZfJlrGvRS%2FB1oAzwKe2LmzXQclIA47LJz4avSvmDtOMRdNH5OI%2Fvrr%2BNNXuyQT0MuHZjiaUI4bS1jXxr2Ytf5exMgmQeLNxwUOC5MMKLhUbC1FhemPVBuQQvdqSRNNljUaulk0%2BIRCRYxrgKAAL0oWhQuUcO1gItNRpAC7OllTpiyvDWGr%2Bj3Vi4QLwY3xEUjrqoaDm5ALGQcoocF8nS8oWf98HvmqFvZk%2BgBAhqphcd3EofhVhBWZ5EuTnXImJNVYkqBhyxStmGetT6VEx6fm8ONjc6m3oZOC3ehPvHvzAK%2FSw0DV%2FrVVktR6JRvAelOtWB5GE8nNFGAaSsHXfFvAcjDSr4m%2FBjqkAaKolAm3bLB9lKq7ePmOXKwrH9tUAozMQujo1GfqOj2vEi2C1N3KQlOtp6oFMXTeVTGFHwks9YqGhuSv2oe0KmSAj57nW2XI5f0OKX71EjhxZdKW12pyoJcuLhTckSO%2FLR2nw%2Fk8yCxLi6qKqL2lBBJkYMPKNHf7iFq5pLvwvDPAPwlvOsZxIzau%2Fux9EmAqBIVdjJ7ASnADc4uwKPDnvI7e1ZVA&X-Amz-Signature=4871d40900e54e8c206d7cd8444b6acdf8be794fe729108b6461c009abc2e137&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWCTTL5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqO4imvzuJwkSxobO8bwwcnbvApx9NJMJHObpxOJZCrwIhAIQlMO3K99vlqOAcafcg8N4m5djxmAUQAHmxLZ9fIRT8Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzQNN2elYfj50SFxvkq3AOtfYQ3CotWitcKb6zVuFTJLWIIWq8VRJm6E4pKNYhYVG%2B%2F4DJkEmhGyMx1orDgdtdvlizUPDf%2FupzOoSaw3DH5MRXWtfU2I3H0ae%2B%2Fh%2BIqI%2F3SR1aJRYfoIn49CzyazTFCTMTLiAVW9W7c%2F7OziUpRRWsdfSDh5NjqhmywPH7bS3%2BAZHgkrYMBNykI99HN7wDyZd9Zw99noVnXXRAdpS20CRyk4ktYqAs4EF1vkBrhu%2B9N392azxRjlCXndvfwMK1Rs8E4%2BahvT20xKaHYBj3684Il35tysB9NqAZfJlrGvRS%2FB1oAzwKe2LmzXQclIA47LJz4avSvmDtOMRdNH5OI%2Fvrr%2BNNXuyQT0MuHZjiaUI4bS1jXxr2Ytf5exMgmQeLNxwUOC5MMKLhUbC1FhemPVBuQQvdqSRNNljUaulk0%2BIRCRYxrgKAAL0oWhQuUcO1gItNRpAC7OllTpiyvDWGr%2Bj3Vi4QLwY3xEUjrqoaDm5ALGQcoocF8nS8oWf98HvmqFvZk%2BgBAhqphcd3EofhVhBWZ5EuTnXImJNVYkqBhyxStmGetT6VEx6fm8ONjc6m3oZOC3ehPvHvzAK%2FSw0DV%2FrVVktR6JRvAelOtWB5GE8nNFGAaSsHXfFvAcjDSr4m%2FBjqkAaKolAm3bLB9lKq7ePmOXKwrH9tUAozMQujo1GfqOj2vEi2C1N3KQlOtp6oFMXTeVTGFHwks9YqGhuSv2oe0KmSAj57nW2XI5f0OKX71EjhxZdKW12pyoJcuLhTckSO%2FLR2nw%2Fk8yCxLi6qKqL2lBBJkYMPKNHf7iFq5pLvwvDPAPwlvOsZxIzau%2Fux9EmAqBIVdjJ7ASnADc4uwKPDnvI7e1ZVA&X-Amz-Signature=755779cb294f99958b8293a02fe882922929595c4968b0721b3597669da62f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
