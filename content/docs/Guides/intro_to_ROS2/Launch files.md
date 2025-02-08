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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFKEEDN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAxu%2B%2Bc13dGg4o24j7YFVspGknJKCcstGQG1LSffKpNdAiBwl5UwlP1emPy0p2%2FMHSfzk9W6yrl%2BT3VY6W%2FVYDO1qCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDvVrgdLQjPsuQJwKtwDFuCF0xUPxJH50mePK6%2F0mOnEPPMTHAlXJVHoSdR7Q%2Ftb51TttbiTZw%2B8r2bYyeqfWTZOj4Rqp7sQLjWkgjajNNKSKwVZSQpjSMpHbbs6Sk3bKhTEwVBq3T3TG0Eb8hi%2F9%2BCnA8aD8itnR%2FTTEAXoxMQN8kL76aNbOMGsPYMzgCNxOcN3d8gfW2Xp9nUfPqlYtE6NDc83veAWRb9cp8C%2BHus9ykjlOaMmevRXvabp2TMkStYrHUU0mFLUOliKkObp9tWoC59fkCoBbU39UTSPTESD8CA9x4gq0UaPnRY4gRzekJhuePV%2BZXth4tV6zXVxyu0YqCxWjEQgbD58m7oVbIjDh7cmYcZ8AWGNcKcF0DbucT6PlGKAKWA0SZejUN6JPeGEc9Ry%2BvDz4wN0CvMAOidRR2zacyHolbbYtopA8JQLCHfrdEpJqlHSP6EFCuTsQB1YeE10iK%2F%2BB5%2BE88BVhMZFf2RL5ZLY7YQSKj%2BDQBuDC%2FGSljf70qGGumi989om%2FxRcTpKxZ0TkgcjHk6ZXod%2FG9V%2FNW1uRQp2qKWs9Ae2wZOsw%2Bqm7WEVl6Qn28Z3%2FF4EoJ8bhicXalpTlPPICUXx4%2FwAllGy04mb6%2BjWF8jUdDGwEU%2BSKnYmukvUwjvqavQY6pgHntljdnhKWJox%2BuOmz085u5V1z34lhr1fa0YR1mcurTz8iEzQm%2BFNpdlzoNVjWkexT70%2FG5EqUlGEjTEjjfHtSPdIR1uJeufx%2BDHg82Wu7w1HznIfNpcrNWtEtmp1UNB%2FXVyaFmyZPy2%2BUvA1iEKnmvG%2Fb%2BCgleAA%2FjPP83O%2BlCiz4cmFLywD400b99E8KVPI3LK5E0Prod0WgMLKEVZcCTd8Z5UQK&X-Amz-Signature=d52d4d63997b385ba3ca9f68822bd7d96883142eb4ea15742d072858e9052cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFKEEDN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAxu%2B%2Bc13dGg4o24j7YFVspGknJKCcstGQG1LSffKpNdAiBwl5UwlP1emPy0p2%2FMHSfzk9W6yrl%2BT3VY6W%2FVYDO1qCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDvVrgdLQjPsuQJwKtwDFuCF0xUPxJH50mePK6%2F0mOnEPPMTHAlXJVHoSdR7Q%2Ftb51TttbiTZw%2B8r2bYyeqfWTZOj4Rqp7sQLjWkgjajNNKSKwVZSQpjSMpHbbs6Sk3bKhTEwVBq3T3TG0Eb8hi%2F9%2BCnA8aD8itnR%2FTTEAXoxMQN8kL76aNbOMGsPYMzgCNxOcN3d8gfW2Xp9nUfPqlYtE6NDc83veAWRb9cp8C%2BHus9ykjlOaMmevRXvabp2TMkStYrHUU0mFLUOliKkObp9tWoC59fkCoBbU39UTSPTESD8CA9x4gq0UaPnRY4gRzekJhuePV%2BZXth4tV6zXVxyu0YqCxWjEQgbD58m7oVbIjDh7cmYcZ8AWGNcKcF0DbucT6PlGKAKWA0SZejUN6JPeGEc9Ry%2BvDz4wN0CvMAOidRR2zacyHolbbYtopA8JQLCHfrdEpJqlHSP6EFCuTsQB1YeE10iK%2F%2BB5%2BE88BVhMZFf2RL5ZLY7YQSKj%2BDQBuDC%2FGSljf70qGGumi989om%2FxRcTpKxZ0TkgcjHk6ZXod%2FG9V%2FNW1uRQp2qKWs9Ae2wZOsw%2Bqm7WEVl6Qn28Z3%2FF4EoJ8bhicXalpTlPPICUXx4%2FwAllGy04mb6%2BjWF8jUdDGwEU%2BSKnYmukvUwjvqavQY6pgHntljdnhKWJox%2BuOmz085u5V1z34lhr1fa0YR1mcurTz8iEzQm%2BFNpdlzoNVjWkexT70%2FG5EqUlGEjTEjjfHtSPdIR1uJeufx%2BDHg82Wu7w1HznIfNpcrNWtEtmp1UNB%2FXVyaFmyZPy2%2BUvA1iEKnmvG%2Fb%2BCgleAA%2FjPP83O%2BlCiz4cmFLywD400b99E8KVPI3LK5E0Prod0WgMLKEVZcCTd8Z5UQK&X-Amz-Signature=4d218ee585cbcce1490f01e8edca64f4d9a14077b0b9bd13693ad9980a9c10a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFKEEDN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAxu%2B%2Bc13dGg4o24j7YFVspGknJKCcstGQG1LSffKpNdAiBwl5UwlP1emPy0p2%2FMHSfzk9W6yrl%2BT3VY6W%2FVYDO1qCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDvVrgdLQjPsuQJwKtwDFuCF0xUPxJH50mePK6%2F0mOnEPPMTHAlXJVHoSdR7Q%2Ftb51TttbiTZw%2B8r2bYyeqfWTZOj4Rqp7sQLjWkgjajNNKSKwVZSQpjSMpHbbs6Sk3bKhTEwVBq3T3TG0Eb8hi%2F9%2BCnA8aD8itnR%2FTTEAXoxMQN8kL76aNbOMGsPYMzgCNxOcN3d8gfW2Xp9nUfPqlYtE6NDc83veAWRb9cp8C%2BHus9ykjlOaMmevRXvabp2TMkStYrHUU0mFLUOliKkObp9tWoC59fkCoBbU39UTSPTESD8CA9x4gq0UaPnRY4gRzekJhuePV%2BZXth4tV6zXVxyu0YqCxWjEQgbD58m7oVbIjDh7cmYcZ8AWGNcKcF0DbucT6PlGKAKWA0SZejUN6JPeGEc9Ry%2BvDz4wN0CvMAOidRR2zacyHolbbYtopA8JQLCHfrdEpJqlHSP6EFCuTsQB1YeE10iK%2F%2BB5%2BE88BVhMZFf2RL5ZLY7YQSKj%2BDQBuDC%2FGSljf70qGGumi989om%2FxRcTpKxZ0TkgcjHk6ZXod%2FG9V%2FNW1uRQp2qKWs9Ae2wZOsw%2Bqm7WEVl6Qn28Z3%2FF4EoJ8bhicXalpTlPPICUXx4%2FwAllGy04mb6%2BjWF8jUdDGwEU%2BSKnYmukvUwjvqavQY6pgHntljdnhKWJox%2BuOmz085u5V1z34lhr1fa0YR1mcurTz8iEzQm%2BFNpdlzoNVjWkexT70%2FG5EqUlGEjTEjjfHtSPdIR1uJeufx%2BDHg82Wu7w1HznIfNpcrNWtEtmp1UNB%2FXVyaFmyZPy2%2BUvA1iEKnmvG%2Fb%2BCgleAA%2FjPP83O%2BlCiz4cmFLywD400b99E8KVPI3LK5E0Prod0WgMLKEVZcCTd8Z5UQK&X-Amz-Signature=30e8b02e5ccf8492016e5441c403b38124da4d9ebf859d5242401489bb4cec3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
