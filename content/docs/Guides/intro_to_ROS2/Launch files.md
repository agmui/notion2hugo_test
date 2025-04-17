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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGQU4UV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpo2pGysvk4QfreuijqeRLOlQYEK7zTeBYHoTMwX7M%2BQIgYRwumKAt3zXn1%2FNcp91Q8rVOJsoV7KUSAA8l3EnVrJwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDdf9TPiFYWKjMMT%2ByrcAyw8QgShoY3JYQVIj%2BunAHF9Poo1OZnH4HHc7c6ZIsozWHxhQEP14Rjx7RDs3BSwvF4H9Z3YnI79EFqKgzH%2BmdEQ19rn1p1UI6o5oQGXC9DkIOIdC1M7OmFlgsOBPJ2PZm5QLbTVUJ2kIkzuvds9Ddslc4WL6l9gLSuwf5glqPhQqOgtGixlo0t64bvgxIidftMF38BSsI9udGG1hljVmaCqexVvszJlo7MKLqqx87GSUsXnPip5%2F35sP18ZKJ9IBpr0PdKuTh2fRtrzMiNxAxqdljpepA%2F3Mf%2Bb36nI%2BXKOOU3OogCBD17DG%2F4YH8xPQMfD0zecE2zWjFQNXkY3HbbHjvKvG9N6roJQ7b14oEzl393knkuU3sJHRiwba2MUYaccAsEPbZr%2BQt9mHtA4Ipkr2evazJyzMfI9xWogNEuQfwjdkvsYn%2BI7TdxLu9hzZYr8VLVmIc1isI6Kr8u95wd1vHqAtiwGKoC5k2yfvCADC9bxHlHOuJcaVLFBr1XvymcQhAk13LSKkl240Jrn46jXtPwZDuddtrzZ5ZxhNlZ8sCAQ8TR6X%2BXGiE21G%2BpdmYbT6Oa4oNvoQcjHCWnHiO%2BhDuKdxSqiHw%2FG1sFHv5LhtPMDLMAwUY5Ne%2FpbMNX8g8AGOqUBhT9fuKzLqxQdNjfDUR0IOVVkve2AWdDojKkPiw22s5u%2BrLHCQn681ejGx9nkVmGx5pr1SzT2UePi1uedTaxcqXpxg%2FoEeC81eWSdrnyY0aps4pes8p16SyA%2FUJvshUxJDevI82SacIY0FaofYEmAZ8lqCS9DaizdsDC2lGpGDqqeVw%2B4%2BZpsQQjBrgK1GZNiWYFKKrfBKWbbKjyBj8W6jmt%2FziTl&X-Amz-Signature=25e806ca7adedc58057e79be9e9f0e6528e0d69e3ce96acd6ed935ec003cc06c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGQU4UV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpo2pGysvk4QfreuijqeRLOlQYEK7zTeBYHoTMwX7M%2BQIgYRwumKAt3zXn1%2FNcp91Q8rVOJsoV7KUSAA8l3EnVrJwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDdf9TPiFYWKjMMT%2ByrcAyw8QgShoY3JYQVIj%2BunAHF9Poo1OZnH4HHc7c6ZIsozWHxhQEP14Rjx7RDs3BSwvF4H9Z3YnI79EFqKgzH%2BmdEQ19rn1p1UI6o5oQGXC9DkIOIdC1M7OmFlgsOBPJ2PZm5QLbTVUJ2kIkzuvds9Ddslc4WL6l9gLSuwf5glqPhQqOgtGixlo0t64bvgxIidftMF38BSsI9udGG1hljVmaCqexVvszJlo7MKLqqx87GSUsXnPip5%2F35sP18ZKJ9IBpr0PdKuTh2fRtrzMiNxAxqdljpepA%2F3Mf%2Bb36nI%2BXKOOU3OogCBD17DG%2F4YH8xPQMfD0zecE2zWjFQNXkY3HbbHjvKvG9N6roJQ7b14oEzl393knkuU3sJHRiwba2MUYaccAsEPbZr%2BQt9mHtA4Ipkr2evazJyzMfI9xWogNEuQfwjdkvsYn%2BI7TdxLu9hzZYr8VLVmIc1isI6Kr8u95wd1vHqAtiwGKoC5k2yfvCADC9bxHlHOuJcaVLFBr1XvymcQhAk13LSKkl240Jrn46jXtPwZDuddtrzZ5ZxhNlZ8sCAQ8TR6X%2BXGiE21G%2BpdmYbT6Oa4oNvoQcjHCWnHiO%2BhDuKdxSqiHw%2FG1sFHv5LhtPMDLMAwUY5Ne%2FpbMNX8g8AGOqUBhT9fuKzLqxQdNjfDUR0IOVVkve2AWdDojKkPiw22s5u%2BrLHCQn681ejGx9nkVmGx5pr1SzT2UePi1uedTaxcqXpxg%2FoEeC81eWSdrnyY0aps4pes8p16SyA%2FUJvshUxJDevI82SacIY0FaofYEmAZ8lqCS9DaizdsDC2lGpGDqqeVw%2B4%2BZpsQQjBrgK1GZNiWYFKKrfBKWbbKjyBj8W6jmt%2FziTl&X-Amz-Signature=6355a7632a243714dfb4929d09135d6b374afef4d365fc7a9d94f314626e3bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGQU4UV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpo2pGysvk4QfreuijqeRLOlQYEK7zTeBYHoTMwX7M%2BQIgYRwumKAt3zXn1%2FNcp91Q8rVOJsoV7KUSAA8l3EnVrJwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDdf9TPiFYWKjMMT%2ByrcAyw8QgShoY3JYQVIj%2BunAHF9Poo1OZnH4HHc7c6ZIsozWHxhQEP14Rjx7RDs3BSwvF4H9Z3YnI79EFqKgzH%2BmdEQ19rn1p1UI6o5oQGXC9DkIOIdC1M7OmFlgsOBPJ2PZm5QLbTVUJ2kIkzuvds9Ddslc4WL6l9gLSuwf5glqPhQqOgtGixlo0t64bvgxIidftMF38BSsI9udGG1hljVmaCqexVvszJlo7MKLqqx87GSUsXnPip5%2F35sP18ZKJ9IBpr0PdKuTh2fRtrzMiNxAxqdljpepA%2F3Mf%2Bb36nI%2BXKOOU3OogCBD17DG%2F4YH8xPQMfD0zecE2zWjFQNXkY3HbbHjvKvG9N6roJQ7b14oEzl393knkuU3sJHRiwba2MUYaccAsEPbZr%2BQt9mHtA4Ipkr2evazJyzMfI9xWogNEuQfwjdkvsYn%2BI7TdxLu9hzZYr8VLVmIc1isI6Kr8u95wd1vHqAtiwGKoC5k2yfvCADC9bxHlHOuJcaVLFBr1XvymcQhAk13LSKkl240Jrn46jXtPwZDuddtrzZ5ZxhNlZ8sCAQ8TR6X%2BXGiE21G%2BpdmYbT6Oa4oNvoQcjHCWnHiO%2BhDuKdxSqiHw%2FG1sFHv5LhtPMDLMAwUY5Ne%2FpbMNX8g8AGOqUBhT9fuKzLqxQdNjfDUR0IOVVkve2AWdDojKkPiw22s5u%2BrLHCQn681ejGx9nkVmGx5pr1SzT2UePi1uedTaxcqXpxg%2FoEeC81eWSdrnyY0aps4pes8p16SyA%2FUJvshUxJDevI82SacIY0FaofYEmAZ8lqCS9DaizdsDC2lGpGDqqeVw%2B4%2BZpsQQjBrgK1GZNiWYFKKrfBKWbbKjyBj8W6jmt%2FziTl&X-Amz-Signature=c42130a5d0e72b0232b00f4d22dffc9305b82871b6c008754c9afd2d5ee5fe8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
