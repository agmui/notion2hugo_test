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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELBFH5K%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIENwaZOuGc74wiblfqvMFF%2BLmQYK7fHiVB2uSMwmhifsAiAPRQkaVxUSrNpOYnqcIIfUMhHaNPQpyi547bzjC0HYSiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBVeyZLFIP%2BXOzmFKtwDKqJ9zIDPnpx%2FZiuhrKGzlctbbzx1zXiT8ZV1mrjSRSfYutuEHAoq47RDzvrrdiHiFgLwQxLwMS74%2Fdbl2%2FSYK%2BXRN%2FbMEXmeOnEyMv08VcJIZDXwwYUnKToA54KgJ0h06S0W%2BfE1ZbseYBPOPQjDH%2F3Dl1QzGAChc%2FsB4Lz%2FNR0j9HZg1k6NIG7BHlRIp6gdRvUO50h8xJZgNJrSM6hd5NcgBjIfMRN8QXVTL9PhJ%2BsTP%2B6DbCg6qkzDce%2B5fY70o3puHP59FrBFeV89mWHloqPkIdGpPkCufU7azwTBE%2B66FqP3szIuNlhr%2FPi6hPikFX2VzCHj8nTZUsMHfU%2BtrK5DItWYe2ELmgO7xrZ76UgQ8elwM%2BXE6%2BXB4PF7Vtd5TT3FwdRAgsavrdpxYnA1aHi3r8i09QO1LOn9u3yvyBr7xtzMOOm51Hvse0uZdDjUW3YTk7qHRRa3Vc289U53iNu8uSlguis2hqGLTnSPyXlhHF31GkmDuupJU13QmqhnG4Ruy6Du05I%2BoYuwRc1ZvTCRl1WrWv99IlDwJOyOXW8tB0kn3odLTpJ54r1gkhBfZJA5KE9%2F85s3epeqId1UB1PLFMYF9Ph4LY1KCtqtmxZyg4pKUT69UINpp58wiuvbwAY6pgFXMDUPKpauylMzp3MyWPyOKe5BJPtSt8RNFjN%2BlD%2FjGvK%2BecUCa8y18zVmx%2BudQ7TO2TO%2B166hWLFZfqi%2BRFQOpOHnG6Uz6qHeMHxAQijDJN4iPGhWlL5ODh86vkNr6LuvtN%2Bw6lTCd3svtuMLWySM%2BdNWj2uUBAcDlmXf0Ta5E90USHdGpQWTXh2f%2BwgpqbvzsK0msCPx9Oa9twXgiXnBQiGTkjVP&X-Amz-Signature=207df36f505ef7c5ebc971a83b51e03d0ce3f832d73b6d2bf560be4613f37e34&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELBFH5K%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIENwaZOuGc74wiblfqvMFF%2BLmQYK7fHiVB2uSMwmhifsAiAPRQkaVxUSrNpOYnqcIIfUMhHaNPQpyi547bzjC0HYSiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBVeyZLFIP%2BXOzmFKtwDKqJ9zIDPnpx%2FZiuhrKGzlctbbzx1zXiT8ZV1mrjSRSfYutuEHAoq47RDzvrrdiHiFgLwQxLwMS74%2Fdbl2%2FSYK%2BXRN%2FbMEXmeOnEyMv08VcJIZDXwwYUnKToA54KgJ0h06S0W%2BfE1ZbseYBPOPQjDH%2F3Dl1QzGAChc%2FsB4Lz%2FNR0j9HZg1k6NIG7BHlRIp6gdRvUO50h8xJZgNJrSM6hd5NcgBjIfMRN8QXVTL9PhJ%2BsTP%2B6DbCg6qkzDce%2B5fY70o3puHP59FrBFeV89mWHloqPkIdGpPkCufU7azwTBE%2B66FqP3szIuNlhr%2FPi6hPikFX2VzCHj8nTZUsMHfU%2BtrK5DItWYe2ELmgO7xrZ76UgQ8elwM%2BXE6%2BXB4PF7Vtd5TT3FwdRAgsavrdpxYnA1aHi3r8i09QO1LOn9u3yvyBr7xtzMOOm51Hvse0uZdDjUW3YTk7qHRRa3Vc289U53iNu8uSlguis2hqGLTnSPyXlhHF31GkmDuupJU13QmqhnG4Ruy6Du05I%2BoYuwRc1ZvTCRl1WrWv99IlDwJOyOXW8tB0kn3odLTpJ54r1gkhBfZJA5KE9%2F85s3epeqId1UB1PLFMYF9Ph4LY1KCtqtmxZyg4pKUT69UINpp58wiuvbwAY6pgFXMDUPKpauylMzp3MyWPyOKe5BJPtSt8RNFjN%2BlD%2FjGvK%2BecUCa8y18zVmx%2BudQ7TO2TO%2B166hWLFZfqi%2BRFQOpOHnG6Uz6qHeMHxAQijDJN4iPGhWlL5ODh86vkNr6LuvtN%2Bw6lTCd3svtuMLWySM%2BdNWj2uUBAcDlmXf0Ta5E90USHdGpQWTXh2f%2BwgpqbvzsK0msCPx9Oa9twXgiXnBQiGTkjVP&X-Amz-Signature=8d9e8ce3b416ed27166bf0edad32fd9d1480cfb135ba38b79399e4a3d49ef053&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELBFH5K%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIENwaZOuGc74wiblfqvMFF%2BLmQYK7fHiVB2uSMwmhifsAiAPRQkaVxUSrNpOYnqcIIfUMhHaNPQpyi547bzjC0HYSiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBVeyZLFIP%2BXOzmFKtwDKqJ9zIDPnpx%2FZiuhrKGzlctbbzx1zXiT8ZV1mrjSRSfYutuEHAoq47RDzvrrdiHiFgLwQxLwMS74%2Fdbl2%2FSYK%2BXRN%2FbMEXmeOnEyMv08VcJIZDXwwYUnKToA54KgJ0h06S0W%2BfE1ZbseYBPOPQjDH%2F3Dl1QzGAChc%2FsB4Lz%2FNR0j9HZg1k6NIG7BHlRIp6gdRvUO50h8xJZgNJrSM6hd5NcgBjIfMRN8QXVTL9PhJ%2BsTP%2B6DbCg6qkzDce%2B5fY70o3puHP59FrBFeV89mWHloqPkIdGpPkCufU7azwTBE%2B66FqP3szIuNlhr%2FPi6hPikFX2VzCHj8nTZUsMHfU%2BtrK5DItWYe2ELmgO7xrZ76UgQ8elwM%2BXE6%2BXB4PF7Vtd5TT3FwdRAgsavrdpxYnA1aHi3r8i09QO1LOn9u3yvyBr7xtzMOOm51Hvse0uZdDjUW3YTk7qHRRa3Vc289U53iNu8uSlguis2hqGLTnSPyXlhHF31GkmDuupJU13QmqhnG4Ruy6Du05I%2BoYuwRc1ZvTCRl1WrWv99IlDwJOyOXW8tB0kn3odLTpJ54r1gkhBfZJA5KE9%2F85s3epeqId1UB1PLFMYF9Ph4LY1KCtqtmxZyg4pKUT69UINpp58wiuvbwAY6pgFXMDUPKpauylMzp3MyWPyOKe5BJPtSt8RNFjN%2BlD%2FjGvK%2BecUCa8y18zVmx%2BudQ7TO2TO%2B166hWLFZfqi%2BRFQOpOHnG6Uz6qHeMHxAQijDJN4iPGhWlL5ODh86vkNr6LuvtN%2Bw6lTCd3svtuMLWySM%2BdNWj2uUBAcDlmXf0Ta5E90USHdGpQWTXh2f%2BwgpqbvzsK0msCPx9Oa9twXgiXnBQiGTkjVP&X-Amz-Signature=fe2246cd9f572b00faa9bfb209e52d0aea62a76330eb9ca92fd7ea68bc39cfe3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
