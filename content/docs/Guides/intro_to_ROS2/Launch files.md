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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEIKYVH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCL%2FzPsADWudLFO4NAmXA95L7KdArz32j4Pofz2IK%2BwhgIgR%2B7rJu5MBxLPJXkVQhoYlwHHKZEh9pnYNMH%2BG5Pp9RIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBMW%2BmuIRjgO6kAoircA%2BiwrPOZwj8Wz62sx8z7i6f7uaMb%2BHj4qwQe34Z3zm0wFixf2VlBm0EBXpTjZ%2BS0ls1DVecBRhlgvgZ3ojD0ghe4wtAGVrcKsXBAlBbaBsL91z682PWU6GUuJv1%2BE3cXKdBAT4DSGvQDG4iN0UoLWPUFZ2lTqXIWKkgwcKaEY9tlgyD1EBVkeQmr1HgsmiwQjbZgyxIhvk8FvFdaZBphftJeTjj30O%2Fe6WObu7FEfDk5gm76Iv9L9Vhawr5gyY7qs5Vo%2FASiLjaJwobAxFbZIXOFTEOKWbqTU0tqkyXiwz%2B3Mgu2aci0k0d6gwhVierrpR3KcNH67usYWeOaNImsGayHRVGxE%2FcUvWevtZ2jFcwGLkjd8nxMfONg8KoJx9n9mA5HzaNhMSi%2BJN8dHEum6dxlDEzFFm1%2FG8%2FBvUVsSY6aHJSpmRT2q18RZY1wFLQEhKgIhV4JrYTLmXoibHeUtm4eHGKzQsxCUzxvBr5HOgE2pFYW1mJbQ%2FR%2FUYlCMLiNPcW93rZfSQYoNQIXvtiCQIhJu%2BLQf%2FCKUNyAtBvX0e%2F8Ldi36drEpeN5sb8T60P0JdFEpDzwIQi5Iwg4ALApZiyJrBCenbJ4uPqltsk%2BDF1tnAoDhBdwRIuzPU3YMKOgj8AGOqUBrWQKnCk45t8md0wH3yjbWa2eAQLoWC7rshJNJWhIEGfnwfOPmtzuV1VH4vGW0%2FnUeFI2looSzzf80cQ6njRRc3RqfASPG5H8%2BKk69AEN6rsEV03uBizrXNu7SSf8J0iguq2GS76do0FYCzrCSMje1FdP1lMtbgQKfsixNGE5cglxIwlfWUOeHepcS17Rb7M9nb2uqbGBBkceubjS6Dm1kCWAlWLb&X-Amz-Signature=7ab759ff351a1adb6ec31bf3b511b3fcbaec0a1fc1679788e5546052a3423e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEIKYVH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCL%2FzPsADWudLFO4NAmXA95L7KdArz32j4Pofz2IK%2BwhgIgR%2B7rJu5MBxLPJXkVQhoYlwHHKZEh9pnYNMH%2BG5Pp9RIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBMW%2BmuIRjgO6kAoircA%2BiwrPOZwj8Wz62sx8z7i6f7uaMb%2BHj4qwQe34Z3zm0wFixf2VlBm0EBXpTjZ%2BS0ls1DVecBRhlgvgZ3ojD0ghe4wtAGVrcKsXBAlBbaBsL91z682PWU6GUuJv1%2BE3cXKdBAT4DSGvQDG4iN0UoLWPUFZ2lTqXIWKkgwcKaEY9tlgyD1EBVkeQmr1HgsmiwQjbZgyxIhvk8FvFdaZBphftJeTjj30O%2Fe6WObu7FEfDk5gm76Iv9L9Vhawr5gyY7qs5Vo%2FASiLjaJwobAxFbZIXOFTEOKWbqTU0tqkyXiwz%2B3Mgu2aci0k0d6gwhVierrpR3KcNH67usYWeOaNImsGayHRVGxE%2FcUvWevtZ2jFcwGLkjd8nxMfONg8KoJx9n9mA5HzaNhMSi%2BJN8dHEum6dxlDEzFFm1%2FG8%2FBvUVsSY6aHJSpmRT2q18RZY1wFLQEhKgIhV4JrYTLmXoibHeUtm4eHGKzQsxCUzxvBr5HOgE2pFYW1mJbQ%2FR%2FUYlCMLiNPcW93rZfSQYoNQIXvtiCQIhJu%2BLQf%2FCKUNyAtBvX0e%2F8Ldi36drEpeN5sb8T60P0JdFEpDzwIQi5Iwg4ALApZiyJrBCenbJ4uPqltsk%2BDF1tnAoDhBdwRIuzPU3YMKOgj8AGOqUBrWQKnCk45t8md0wH3yjbWa2eAQLoWC7rshJNJWhIEGfnwfOPmtzuV1VH4vGW0%2FnUeFI2looSzzf80cQ6njRRc3RqfASPG5H8%2BKk69AEN6rsEV03uBizrXNu7SSf8J0iguq2GS76do0FYCzrCSMje1FdP1lMtbgQKfsixNGE5cglxIwlfWUOeHepcS17Rb7M9nb2uqbGBBkceubjS6Dm1kCWAlWLb&X-Amz-Signature=8a0c0e816405c1a35d444f39a9ac8dae5622ea0d779426eff3eebc8b0212f68c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEIKYVH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCL%2FzPsADWudLFO4NAmXA95L7KdArz32j4Pofz2IK%2BwhgIgR%2B7rJu5MBxLPJXkVQhoYlwHHKZEh9pnYNMH%2BG5Pp9RIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBMW%2BmuIRjgO6kAoircA%2BiwrPOZwj8Wz62sx8z7i6f7uaMb%2BHj4qwQe34Z3zm0wFixf2VlBm0EBXpTjZ%2BS0ls1DVecBRhlgvgZ3ojD0ghe4wtAGVrcKsXBAlBbaBsL91z682PWU6GUuJv1%2BE3cXKdBAT4DSGvQDG4iN0UoLWPUFZ2lTqXIWKkgwcKaEY9tlgyD1EBVkeQmr1HgsmiwQjbZgyxIhvk8FvFdaZBphftJeTjj30O%2Fe6WObu7FEfDk5gm76Iv9L9Vhawr5gyY7qs5Vo%2FASiLjaJwobAxFbZIXOFTEOKWbqTU0tqkyXiwz%2B3Mgu2aci0k0d6gwhVierrpR3KcNH67usYWeOaNImsGayHRVGxE%2FcUvWevtZ2jFcwGLkjd8nxMfONg8KoJx9n9mA5HzaNhMSi%2BJN8dHEum6dxlDEzFFm1%2FG8%2FBvUVsSY6aHJSpmRT2q18RZY1wFLQEhKgIhV4JrYTLmXoibHeUtm4eHGKzQsxCUzxvBr5HOgE2pFYW1mJbQ%2FR%2FUYlCMLiNPcW93rZfSQYoNQIXvtiCQIhJu%2BLQf%2FCKUNyAtBvX0e%2F8Ldi36drEpeN5sb8T60P0JdFEpDzwIQi5Iwg4ALApZiyJrBCenbJ4uPqltsk%2BDF1tnAoDhBdwRIuzPU3YMKOgj8AGOqUBrWQKnCk45t8md0wH3yjbWa2eAQLoWC7rshJNJWhIEGfnwfOPmtzuV1VH4vGW0%2FnUeFI2looSzzf80cQ6njRRc3RqfASPG5H8%2BKk69AEN6rsEV03uBizrXNu7SSf8J0iguq2GS76do0FYCzrCSMje1FdP1lMtbgQKfsixNGE5cglxIwlfWUOeHepcS17Rb7M9nb2uqbGBBkceubjS6Dm1kCWAlWLb&X-Amz-Signature=1e303146425ad1b7373f9e4ccf7734f04e28af01a11cec8564e696dcbd281167&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
