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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DGDDF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIPrnUa7QPhz3T5IPd%2FbK5wq1FIiPVnAiGRiTsg5Q%2FIwIhAN9ZSw2BI%2BoVWJTdTnVqi8rJqtzvndcNfjtf%2BBqa33wcKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOlq68vinwtswuP0q3AMUu1QgI1rAkom4t98ubvMp4FIlsYlM20N0M2xJx4RWW0PND3tS%2BY7TsEpKUDq4qc7tugo%2F1fYEMph4SbFfIFhsaUIc2SnjgS9F2pnbYRQYnmwOiVxhZGOIo14Dq2rWDokiJbgjZm51wFhlSOd0dkA8INjJ1q1iZLw%2FqQ6khas5QLv24LK4Cq5UOiz4%2FmXkIZtP2CN7HCOOX%2Fu19I8k1SJcMZpGuN0wgGMzJcujgB0ZGuipccifU8LOPwEvdE0eWFY8zsnL7jd0b1285JVDu3wFDzA0S%2F7yQNw32zqVwE30PfVEJL30goS8eKX8jVd5iq%2BJzjDftv2XMTDRNpAvQ3qEXWy6iFNsx6TKjHRpVktuUjwyqzWkopTEQCSUlf6nGHdg44Vo7Q8WJ8YwjbcUMw0RYOqeIyQDQU2mmqmvnhnmSCnH3mkaVbJeZpof%2Batx3qlZ%2FXfq%2FhH%2FrDCtb711Dj2NuHMwo%2BOe9jhwTmfpL5e%2FaXga1mnubinRg4K59CMbVwITGdW0JD%2F418%2BVwR%2FwT479tJa%2Bny4SpF5%2FovRUu%2F9PvORtPRJJyYye1jjD%2FpSNy1wxcHA%2FJA8RMyRGKlJXguzUsVE6Z0akXX3HJRvqKWcoWsW3E%2BB2oKcJy91NCDDvn5S%2BBjqkAb5cICgdJ2jfP0%2Bz39qkEsaW9GyCdguZih6UAET%2Fj%2B1iX3TUPezJl9VutRblCIs7sl1kI3j6kMDw%2FTZwjJ2By77VhUdS0A8znPWKdYMHoDE2wlnfEJEjAWOJXxlKEeM0DtdbrrNxZm4ZSBBBEBuhtkLQCBRNkXiOOIXHpXctjKjQato0oKpFM4uROwp9YWxL1JnHBIoxYFeb2xzDbUQZuzqi5YRF&X-Amz-Signature=ce75634e91abbe770e68f460b7d12651f3b306ffbb0422147114bc9c7e3f5598&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DGDDF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIPrnUa7QPhz3T5IPd%2FbK5wq1FIiPVnAiGRiTsg5Q%2FIwIhAN9ZSw2BI%2BoVWJTdTnVqi8rJqtzvndcNfjtf%2BBqa33wcKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOlq68vinwtswuP0q3AMUu1QgI1rAkom4t98ubvMp4FIlsYlM20N0M2xJx4RWW0PND3tS%2BY7TsEpKUDq4qc7tugo%2F1fYEMph4SbFfIFhsaUIc2SnjgS9F2pnbYRQYnmwOiVxhZGOIo14Dq2rWDokiJbgjZm51wFhlSOd0dkA8INjJ1q1iZLw%2FqQ6khas5QLv24LK4Cq5UOiz4%2FmXkIZtP2CN7HCOOX%2Fu19I8k1SJcMZpGuN0wgGMzJcujgB0ZGuipccifU8LOPwEvdE0eWFY8zsnL7jd0b1285JVDu3wFDzA0S%2F7yQNw32zqVwE30PfVEJL30goS8eKX8jVd5iq%2BJzjDftv2XMTDRNpAvQ3qEXWy6iFNsx6TKjHRpVktuUjwyqzWkopTEQCSUlf6nGHdg44Vo7Q8WJ8YwjbcUMw0RYOqeIyQDQU2mmqmvnhnmSCnH3mkaVbJeZpof%2Batx3qlZ%2FXfq%2FhH%2FrDCtb711Dj2NuHMwo%2BOe9jhwTmfpL5e%2FaXga1mnubinRg4K59CMbVwITGdW0JD%2F418%2BVwR%2FwT479tJa%2Bny4SpF5%2FovRUu%2F9PvORtPRJJyYye1jjD%2FpSNy1wxcHA%2FJA8RMyRGKlJXguzUsVE6Z0akXX3HJRvqKWcoWsW3E%2BB2oKcJy91NCDDvn5S%2BBjqkAb5cICgdJ2jfP0%2Bz39qkEsaW9GyCdguZih6UAET%2Fj%2B1iX3TUPezJl9VutRblCIs7sl1kI3j6kMDw%2FTZwjJ2By77VhUdS0A8znPWKdYMHoDE2wlnfEJEjAWOJXxlKEeM0DtdbrrNxZm4ZSBBBEBuhtkLQCBRNkXiOOIXHpXctjKjQato0oKpFM4uROwp9YWxL1JnHBIoxYFeb2xzDbUQZuzqi5YRF&X-Amz-Signature=19a70ae949de20c8bfca14cb9acc17fdb7ba8c618d313237bb80695fd13a4d27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DGDDF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIPrnUa7QPhz3T5IPd%2FbK5wq1FIiPVnAiGRiTsg5Q%2FIwIhAN9ZSw2BI%2BoVWJTdTnVqi8rJqtzvndcNfjtf%2BBqa33wcKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtOlq68vinwtswuP0q3AMUu1QgI1rAkom4t98ubvMp4FIlsYlM20N0M2xJx4RWW0PND3tS%2BY7TsEpKUDq4qc7tugo%2F1fYEMph4SbFfIFhsaUIc2SnjgS9F2pnbYRQYnmwOiVxhZGOIo14Dq2rWDokiJbgjZm51wFhlSOd0dkA8INjJ1q1iZLw%2FqQ6khas5QLv24LK4Cq5UOiz4%2FmXkIZtP2CN7HCOOX%2Fu19I8k1SJcMZpGuN0wgGMzJcujgB0ZGuipccifU8LOPwEvdE0eWFY8zsnL7jd0b1285JVDu3wFDzA0S%2F7yQNw32zqVwE30PfVEJL30goS8eKX8jVd5iq%2BJzjDftv2XMTDRNpAvQ3qEXWy6iFNsx6TKjHRpVktuUjwyqzWkopTEQCSUlf6nGHdg44Vo7Q8WJ8YwjbcUMw0RYOqeIyQDQU2mmqmvnhnmSCnH3mkaVbJeZpof%2Batx3qlZ%2FXfq%2FhH%2FrDCtb711Dj2NuHMwo%2BOe9jhwTmfpL5e%2FaXga1mnubinRg4K59CMbVwITGdW0JD%2F418%2BVwR%2FwT479tJa%2Bny4SpF5%2FovRUu%2F9PvORtPRJJyYye1jjD%2FpSNy1wxcHA%2FJA8RMyRGKlJXguzUsVE6Z0akXX3HJRvqKWcoWsW3E%2BB2oKcJy91NCDDvn5S%2BBjqkAb5cICgdJ2jfP0%2Bz39qkEsaW9GyCdguZih6UAET%2Fj%2B1iX3TUPezJl9VutRblCIs7sl1kI3j6kMDw%2FTZwjJ2By77VhUdS0A8znPWKdYMHoDE2wlnfEJEjAWOJXxlKEeM0DtdbrrNxZm4ZSBBBEBuhtkLQCBRNkXiOOIXHpXctjKjQato0oKpFM4uROwp9YWxL1JnHBIoxYFeb2xzDbUQZuzqi5YRF&X-Amz-Signature=9a7c8d5504f868b4f3d3ca989016240770ad4de0689f74b1aa553580f75ba2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
