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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFLEYN3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZTWIgsKeE9JWV1AetKs9Hfu0IlOudgr2Y2%2B1aftQ3eAiEA3Pj85askQobkqm6OfQFRk9KLUeFtgG%2Fcl1ETltDaH1Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJaKx%2Fa9gWb3IMUC9SrcA3JL8F2isq60sIZLXz0tiwultjVhggPYzT0N9bS%2BO2ZtSwrgJF5IxpWBaVmnpzvfCxUivtP%2FDZf45TccW%2Fn1F3TK0f4kov%2F%2FP0K2MFvXt9xhKr%2FrOQbPkQKXcCbFr%2B6yumdAHglGcIYYF6s53zAmG%2B1eUXLewBVvUYP3Rerms2nNjdF9tMZ0cC8jqeAEdmloJDgnMueLQOWDQhxbzHWjMCiw1EyGDAXJ3oiPEfNojBnL2oBX6sWCaw%2FTn8eGcc2n1DQyB6OWlAJPFEyKul04vsf0muEImpeDdE2ALNHFB4PfZSe6Oo7FU9NwaDQrcUoREdScMXWMt2d4jhmM9vhevAkoOFe9rQobLPmUexwRrOztdIxooUcYl3vmKMUx2vCKpJGsEPJCOgwdpoRnlOBda16LY4%2FSFw8JjTto%2FPiR%2F3bxDLcEnVIfnmQwGbcgYQMO1nPKPTnmULqsXj6cJFQK7tWK7oayM34o7A09qj%2F2zl63avimaNmqSs%2BSiN%2Bz3tk9B%2B2WFoB3jvkLrXPz60siVS5jMxaa7gM9f1pKPsrKjtCmgmDdry0W5Z%2FkW9gFmCiPVZPCmKzL8pUDPyuHfQBzE0Y%2BEA9lZUNoP7YDsdeaSlBqceVTHCnJZboxUFmWMNP%2F88AGOqUBWvsyvLvNkzBKwIAFpbanUeOxfgMJWg4bWN7Ow%2FQKQiAtABJmBPcZ0pcpLiy6ea%2FKZTss%2FFDGvz%2BRsTfqz%2FARm%2B3aSAAbOjD9Wsf0shZqXOgXU7SPnChFxBuzTkK2hdbT%2FeItM3QbCJEiXDNmkW9UczYLRm0v8jNhGyqgwhhC7hW3BGw2xjCYMSR3ZKF4xJj3muLQ5Shr6Bvv%2F3DOs0eudiDGlaHO&X-Amz-Signature=77e66cadf29e70853bc241da50ab084828f4b8be70fd17bcc68ec96c0722c5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFLEYN3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZTWIgsKeE9JWV1AetKs9Hfu0IlOudgr2Y2%2B1aftQ3eAiEA3Pj85askQobkqm6OfQFRk9KLUeFtgG%2Fcl1ETltDaH1Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJaKx%2Fa9gWb3IMUC9SrcA3JL8F2isq60sIZLXz0tiwultjVhggPYzT0N9bS%2BO2ZtSwrgJF5IxpWBaVmnpzvfCxUivtP%2FDZf45TccW%2Fn1F3TK0f4kov%2F%2FP0K2MFvXt9xhKr%2FrOQbPkQKXcCbFr%2B6yumdAHglGcIYYF6s53zAmG%2B1eUXLewBVvUYP3Rerms2nNjdF9tMZ0cC8jqeAEdmloJDgnMueLQOWDQhxbzHWjMCiw1EyGDAXJ3oiPEfNojBnL2oBX6sWCaw%2FTn8eGcc2n1DQyB6OWlAJPFEyKul04vsf0muEImpeDdE2ALNHFB4PfZSe6Oo7FU9NwaDQrcUoREdScMXWMt2d4jhmM9vhevAkoOFe9rQobLPmUexwRrOztdIxooUcYl3vmKMUx2vCKpJGsEPJCOgwdpoRnlOBda16LY4%2FSFw8JjTto%2FPiR%2F3bxDLcEnVIfnmQwGbcgYQMO1nPKPTnmULqsXj6cJFQK7tWK7oayM34o7A09qj%2F2zl63avimaNmqSs%2BSiN%2Bz3tk9B%2B2WFoB3jvkLrXPz60siVS5jMxaa7gM9f1pKPsrKjtCmgmDdry0W5Z%2FkW9gFmCiPVZPCmKzL8pUDPyuHfQBzE0Y%2BEA9lZUNoP7YDsdeaSlBqceVTHCnJZboxUFmWMNP%2F88AGOqUBWvsyvLvNkzBKwIAFpbanUeOxfgMJWg4bWN7Ow%2FQKQiAtABJmBPcZ0pcpLiy6ea%2FKZTss%2FFDGvz%2BRsTfqz%2FARm%2B3aSAAbOjD9Wsf0shZqXOgXU7SPnChFxBuzTkK2hdbT%2FeItM3QbCJEiXDNmkW9UczYLRm0v8jNhGyqgwhhC7hW3BGw2xjCYMSR3ZKF4xJj3muLQ5Shr6Bvv%2F3DOs0eudiDGlaHO&X-Amz-Signature=6d68053ec363c5465bbab556e8686bdf3a7f39c14fe977e4f07e2643ddb9001c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFLEYN3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZTWIgsKeE9JWV1AetKs9Hfu0IlOudgr2Y2%2B1aftQ3eAiEA3Pj85askQobkqm6OfQFRk9KLUeFtgG%2Fcl1ETltDaH1Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJaKx%2Fa9gWb3IMUC9SrcA3JL8F2isq60sIZLXz0tiwultjVhggPYzT0N9bS%2BO2ZtSwrgJF5IxpWBaVmnpzvfCxUivtP%2FDZf45TccW%2Fn1F3TK0f4kov%2F%2FP0K2MFvXt9xhKr%2FrOQbPkQKXcCbFr%2B6yumdAHglGcIYYF6s53zAmG%2B1eUXLewBVvUYP3Rerms2nNjdF9tMZ0cC8jqeAEdmloJDgnMueLQOWDQhxbzHWjMCiw1EyGDAXJ3oiPEfNojBnL2oBX6sWCaw%2FTn8eGcc2n1DQyB6OWlAJPFEyKul04vsf0muEImpeDdE2ALNHFB4PfZSe6Oo7FU9NwaDQrcUoREdScMXWMt2d4jhmM9vhevAkoOFe9rQobLPmUexwRrOztdIxooUcYl3vmKMUx2vCKpJGsEPJCOgwdpoRnlOBda16LY4%2FSFw8JjTto%2FPiR%2F3bxDLcEnVIfnmQwGbcgYQMO1nPKPTnmULqsXj6cJFQK7tWK7oayM34o7A09qj%2F2zl63avimaNmqSs%2BSiN%2Bz3tk9B%2B2WFoB3jvkLrXPz60siVS5jMxaa7gM9f1pKPsrKjtCmgmDdry0W5Z%2FkW9gFmCiPVZPCmKzL8pUDPyuHfQBzE0Y%2BEA9lZUNoP7YDsdeaSlBqceVTHCnJZboxUFmWMNP%2F88AGOqUBWvsyvLvNkzBKwIAFpbanUeOxfgMJWg4bWN7Ow%2FQKQiAtABJmBPcZ0pcpLiy6ea%2FKZTss%2FFDGvz%2BRsTfqz%2FARm%2B3aSAAbOjD9Wsf0shZqXOgXU7SPnChFxBuzTkK2hdbT%2FeItM3QbCJEiXDNmkW9UczYLRm0v8jNhGyqgwhhC7hW3BGw2xjCYMSR3ZKF4xJj3muLQ5Shr6Bvv%2F3DOs0eudiDGlaHO&X-Amz-Signature=f84fde51d6a42901dff55163087b19e44c87f9d0ff08fe529b5422944f6516f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
