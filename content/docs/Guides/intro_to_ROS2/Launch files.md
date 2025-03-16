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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJJ6OGF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEaAIE7XiDb7yqWiubC3gAk1x3EgcTPIH21yOemKGG9AiBvrnIgACUcAAQ6Ck0psKAr%2Bgn30FKyaTu0VGEFc6MGlSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7QW4jD4eT%2BJF1PgVKtwDvHR9EgZPQwNtXn1vloyF6drsUtDeprJvtePXzMsEDYTZZxT3d0ZhTfc%2Bgr%2BxEE3j5EWzeeDdLh7JKjw1RKkfg5AqPlK%2Blt3FoEEToo2VRiVS%2BCHck9iuYxQvhb3e8A3FLqiBqE8u5aAXNJr6CVbOu1jdVZ9uzF37IY9FKpOn9nTFyVn6Mxo%2FiaNuofa7x%2B4waCSgp80XYw4IUhWTjjBGvfXLEs7DankeeWLuBacGurGI5zrQMiW9acZ%2F9wh0lJAId0b6zplFi%2FdrXScNYjTqJCUiobhq5ez9OpZzVqP9AVE%2BEJCvhG%2F87e%2Ft8MH%2BmxwVJjqFwbyifuXLTCvrknjyKoIrjkG%2F2TP%2BvqhjlAZR2gLttKuRsgSSFAnM7rhRgLAChB1msxQrI7UhACrA5W300ZS4NPev3GBlRNeLArfHOkaCVsjY979vlB4Un4F%2FNwC1nWKDhX0g4XsWUUqVM7nyh3jU6cUl8TGTQkhKDo9NB%2BmmJF%2Bc56xNuSPAnexFFDiW67CQM5qkVAsN9vRW0A76CR50fzZ2hZDAVXVhfiOwX3UbYCCYF46YpAfZDl%2FvoQwi52ZGm%2FUk%2FjKFoqWV7aPEpNUZrMrXucXDLlDxlJAfdc78X2BqBccGY%2BgrqT8wqurZvgY6pgHqv5ghlp1GASnp2tm80M4cVSTioqTfckkHOpJRWb%2FBYx%2FG69UvzxhLD02HhTTIdANG8DZ3hn%2BfGV294lx%2BmowhP21HcR6EcGrujsT3HvUu3G%2FfryKKkA8BZP%2BytJO9knHCUPJg%2BkY%2F2AhU63YNMN1uqAMwbYk55B%2B2HTUt%2B%2Bf9PuNcWwy5k5ZXmaoopUD9AvZuEnjCv9NTVtEvzWh5xluDZwjjrISW&X-Amz-Signature=2d80db4408ae1494d40405f0ef6732cbf00dae35675a7a02018eb53f14062ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJJ6OGF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEaAIE7XiDb7yqWiubC3gAk1x3EgcTPIH21yOemKGG9AiBvrnIgACUcAAQ6Ck0psKAr%2Bgn30FKyaTu0VGEFc6MGlSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7QW4jD4eT%2BJF1PgVKtwDvHR9EgZPQwNtXn1vloyF6drsUtDeprJvtePXzMsEDYTZZxT3d0ZhTfc%2Bgr%2BxEE3j5EWzeeDdLh7JKjw1RKkfg5AqPlK%2Blt3FoEEToo2VRiVS%2BCHck9iuYxQvhb3e8A3FLqiBqE8u5aAXNJr6CVbOu1jdVZ9uzF37IY9FKpOn9nTFyVn6Mxo%2FiaNuofa7x%2B4waCSgp80XYw4IUhWTjjBGvfXLEs7DankeeWLuBacGurGI5zrQMiW9acZ%2F9wh0lJAId0b6zplFi%2FdrXScNYjTqJCUiobhq5ez9OpZzVqP9AVE%2BEJCvhG%2F87e%2Ft8MH%2BmxwVJjqFwbyifuXLTCvrknjyKoIrjkG%2F2TP%2BvqhjlAZR2gLttKuRsgSSFAnM7rhRgLAChB1msxQrI7UhACrA5W300ZS4NPev3GBlRNeLArfHOkaCVsjY979vlB4Un4F%2FNwC1nWKDhX0g4XsWUUqVM7nyh3jU6cUl8TGTQkhKDo9NB%2BmmJF%2Bc56xNuSPAnexFFDiW67CQM5qkVAsN9vRW0A76CR50fzZ2hZDAVXVhfiOwX3UbYCCYF46YpAfZDl%2FvoQwi52ZGm%2FUk%2FjKFoqWV7aPEpNUZrMrXucXDLlDxlJAfdc78X2BqBccGY%2BgrqT8wqurZvgY6pgHqv5ghlp1GASnp2tm80M4cVSTioqTfckkHOpJRWb%2FBYx%2FG69UvzxhLD02HhTTIdANG8DZ3hn%2BfGV294lx%2BmowhP21HcR6EcGrujsT3HvUu3G%2FfryKKkA8BZP%2BytJO9knHCUPJg%2BkY%2F2AhU63YNMN1uqAMwbYk55B%2B2HTUt%2B%2Bf9PuNcWwy5k5ZXmaoopUD9AvZuEnjCv9NTVtEvzWh5xluDZwjjrISW&X-Amz-Signature=ad811c84406a0e59b955a4844c4b8338e303615f388f9a1d3114838dfad2a7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJJ6OGF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEaAIE7XiDb7yqWiubC3gAk1x3EgcTPIH21yOemKGG9AiBvrnIgACUcAAQ6Ck0psKAr%2Bgn30FKyaTu0VGEFc6MGlSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7QW4jD4eT%2BJF1PgVKtwDvHR9EgZPQwNtXn1vloyF6drsUtDeprJvtePXzMsEDYTZZxT3d0ZhTfc%2Bgr%2BxEE3j5EWzeeDdLh7JKjw1RKkfg5AqPlK%2Blt3FoEEToo2VRiVS%2BCHck9iuYxQvhb3e8A3FLqiBqE8u5aAXNJr6CVbOu1jdVZ9uzF37IY9FKpOn9nTFyVn6Mxo%2FiaNuofa7x%2B4waCSgp80XYw4IUhWTjjBGvfXLEs7DankeeWLuBacGurGI5zrQMiW9acZ%2F9wh0lJAId0b6zplFi%2FdrXScNYjTqJCUiobhq5ez9OpZzVqP9AVE%2BEJCvhG%2F87e%2Ft8MH%2BmxwVJjqFwbyifuXLTCvrknjyKoIrjkG%2F2TP%2BvqhjlAZR2gLttKuRsgSSFAnM7rhRgLAChB1msxQrI7UhACrA5W300ZS4NPev3GBlRNeLArfHOkaCVsjY979vlB4Un4F%2FNwC1nWKDhX0g4XsWUUqVM7nyh3jU6cUl8TGTQkhKDo9NB%2BmmJF%2Bc56xNuSPAnexFFDiW67CQM5qkVAsN9vRW0A76CR50fzZ2hZDAVXVhfiOwX3UbYCCYF46YpAfZDl%2FvoQwi52ZGm%2FUk%2FjKFoqWV7aPEpNUZrMrXucXDLlDxlJAfdc78X2BqBccGY%2BgrqT8wqurZvgY6pgHqv5ghlp1GASnp2tm80M4cVSTioqTfckkHOpJRWb%2FBYx%2FG69UvzxhLD02HhTTIdANG8DZ3hn%2BfGV294lx%2BmowhP21HcR6EcGrujsT3HvUu3G%2FfryKKkA8BZP%2BytJO9knHCUPJg%2BkY%2F2AhU63YNMN1uqAMwbYk55B%2B2HTUt%2B%2Bf9PuNcWwy5k5ZXmaoopUD9AvZuEnjCv9NTVtEvzWh5xluDZwjjrISW&X-Amz-Signature=8ce86ba39da633fb24bae78431a96b44a26ec64b2d26cb7c9a850c153c32cffe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
