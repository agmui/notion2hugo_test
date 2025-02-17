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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D42ENHS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCr5SgyA2Mat%2Fhm2OVqE4uFwSbXFUn3QCcyvGAhoPsN9wIhAPofLX9er7SewDce0mMj%2B7Ck3gYUKYXf68lYqYWIcVlNKv8DCH8QABoMNjM3NDIzMTgzODA1IgyJ6dYMmi6bkOqiTlgq3AOq7CF2FxQzYK%2BfZG7kvWqUW6PZCNafkOy4dICQUlaSd7y2xsmTN3FbbqKwekSTO7tdI0g7rz1Eb3JuumwRurKLjoEN%2Bmcq%2BY6%2FF%2F5wl55ss%2Fr6R51MwqUQe3%2FG%2BHbiOyhq9aTOPS2h1mfb1pkZW2iaQTS%2BKu0FSFDY6E9LuLAoC6irwo27u0WGZUek4i5VKi%2BarFY3aw9Ed62Abs1IWMGVQBxh%2BmvdNBWZNVC1%2BBOyHf7%2Bet1up6tZZ00YzQB61WpAPfGszMAypiX7DR6DI230qTUW2XLz%2FcWKOwP8UTjQj8PEhwGtAyjkZV34v25hYcfNzn2lBxawI%2BR1PoF6gb0idu9eQ71YOrVYvfpFSRVYpNPXUtjdoLVlm%2BOjVyL4UkPniGDXPUIuyXRdSopqd3xpZveU2ydRiJAv8zq7DoTOjNl%2F1dfrgmcnRx7iCc41CuJzNzl6Jg2wk2gJEUSvKrhd8wNjsZqipawjszPBp4WJGRr6rrzRowgC665JECSR70megNzUQwnpW7ZcNAL7km97gi30%2B%2BDuzlRdou%2FSrIFOdDo9Q%2F%2BvPhq7MLGXeFsPvkHA%2Fm7auAkQF4wejL621JgDt9BXIPh5004c335vyoHSVPeMSy6QHcRWHtAX2DC86s69BjqkAQWn%2F58hRvsHs7hkS4uBBzT93gb6%2FWlRGTo%2BazFjaGjzKul3VuPmavau58ybM%2F%2BQMFw88s1w%2F46jLjnhuWY9m0yccWqbZ%2FcySJNrhY64FDjqB%2BjLT5BzkLhD%2F2dyomf6BSiidR%2F6U%2BrOL86II45zaUQ5k%2FTTxqZXMCApxJSqwbb7CcHOPXsGX6FqLLHdKPspIAEm6fDZjGIADZWhdC8l9i2mU4ue&X-Amz-Signature=76d0a76a1bf4b86002055db40732cb39672da823b68906236a9c02cc0efe4677&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D42ENHS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCr5SgyA2Mat%2Fhm2OVqE4uFwSbXFUn3QCcyvGAhoPsN9wIhAPofLX9er7SewDce0mMj%2B7Ck3gYUKYXf68lYqYWIcVlNKv8DCH8QABoMNjM3NDIzMTgzODA1IgyJ6dYMmi6bkOqiTlgq3AOq7CF2FxQzYK%2BfZG7kvWqUW6PZCNafkOy4dICQUlaSd7y2xsmTN3FbbqKwekSTO7tdI0g7rz1Eb3JuumwRurKLjoEN%2Bmcq%2BY6%2FF%2F5wl55ss%2Fr6R51MwqUQe3%2FG%2BHbiOyhq9aTOPS2h1mfb1pkZW2iaQTS%2BKu0FSFDY6E9LuLAoC6irwo27u0WGZUek4i5VKi%2BarFY3aw9Ed62Abs1IWMGVQBxh%2BmvdNBWZNVC1%2BBOyHf7%2Bet1up6tZZ00YzQB61WpAPfGszMAypiX7DR6DI230qTUW2XLz%2FcWKOwP8UTjQj8PEhwGtAyjkZV34v25hYcfNzn2lBxawI%2BR1PoF6gb0idu9eQ71YOrVYvfpFSRVYpNPXUtjdoLVlm%2BOjVyL4UkPniGDXPUIuyXRdSopqd3xpZveU2ydRiJAv8zq7DoTOjNl%2F1dfrgmcnRx7iCc41CuJzNzl6Jg2wk2gJEUSvKrhd8wNjsZqipawjszPBp4WJGRr6rrzRowgC665JECSR70megNzUQwnpW7ZcNAL7km97gi30%2B%2BDuzlRdou%2FSrIFOdDo9Q%2F%2BvPhq7MLGXeFsPvkHA%2Fm7auAkQF4wejL621JgDt9BXIPh5004c335vyoHSVPeMSy6QHcRWHtAX2DC86s69BjqkAQWn%2F58hRvsHs7hkS4uBBzT93gb6%2FWlRGTo%2BazFjaGjzKul3VuPmavau58ybM%2F%2BQMFw88s1w%2F46jLjnhuWY9m0yccWqbZ%2FcySJNrhY64FDjqB%2BjLT5BzkLhD%2F2dyomf6BSiidR%2F6U%2BrOL86II45zaUQ5k%2FTTxqZXMCApxJSqwbb7CcHOPXsGX6FqLLHdKPspIAEm6fDZjGIADZWhdC8l9i2mU4ue&X-Amz-Signature=5fca953a85063130f4ceb0030c49c21b12df1a63d69cbb50544b82d9786777f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D42ENHS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCr5SgyA2Mat%2Fhm2OVqE4uFwSbXFUn3QCcyvGAhoPsN9wIhAPofLX9er7SewDce0mMj%2B7Ck3gYUKYXf68lYqYWIcVlNKv8DCH8QABoMNjM3NDIzMTgzODA1IgyJ6dYMmi6bkOqiTlgq3AOq7CF2FxQzYK%2BfZG7kvWqUW6PZCNafkOy4dICQUlaSd7y2xsmTN3FbbqKwekSTO7tdI0g7rz1Eb3JuumwRurKLjoEN%2Bmcq%2BY6%2FF%2F5wl55ss%2Fr6R51MwqUQe3%2FG%2BHbiOyhq9aTOPS2h1mfb1pkZW2iaQTS%2BKu0FSFDY6E9LuLAoC6irwo27u0WGZUek4i5VKi%2BarFY3aw9Ed62Abs1IWMGVQBxh%2BmvdNBWZNVC1%2BBOyHf7%2Bet1up6tZZ00YzQB61WpAPfGszMAypiX7DR6DI230qTUW2XLz%2FcWKOwP8UTjQj8PEhwGtAyjkZV34v25hYcfNzn2lBxawI%2BR1PoF6gb0idu9eQ71YOrVYvfpFSRVYpNPXUtjdoLVlm%2BOjVyL4UkPniGDXPUIuyXRdSopqd3xpZveU2ydRiJAv8zq7DoTOjNl%2F1dfrgmcnRx7iCc41CuJzNzl6Jg2wk2gJEUSvKrhd8wNjsZqipawjszPBp4WJGRr6rrzRowgC665JECSR70megNzUQwnpW7ZcNAL7km97gi30%2B%2BDuzlRdou%2FSrIFOdDo9Q%2F%2BvPhq7MLGXeFsPvkHA%2Fm7auAkQF4wejL621JgDt9BXIPh5004c335vyoHSVPeMSy6QHcRWHtAX2DC86s69BjqkAQWn%2F58hRvsHs7hkS4uBBzT93gb6%2FWlRGTo%2BazFjaGjzKul3VuPmavau58ybM%2F%2BQMFw88s1w%2F46jLjnhuWY9m0yccWqbZ%2FcySJNrhY64FDjqB%2BjLT5BzkLhD%2F2dyomf6BSiidR%2F6U%2BrOL86II45zaUQ5k%2FTTxqZXMCApxJSqwbb7CcHOPXsGX6FqLLHdKPspIAEm6fDZjGIADZWhdC8l9i2mU4ue&X-Amz-Signature=bec949d1409a6f70384a6ca1c95b5b04bab42dfdaf118db993874405e7aebe60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
