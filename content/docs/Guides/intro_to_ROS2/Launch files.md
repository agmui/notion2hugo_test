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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQNZNCD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbqoK1Q%2B5rJdP79%2FsZ458X4%2FAhMhFwwlrjA1653qJcQIhAO2Hd5FvRbI1fhXFBEGvzge6LV%2BaYrPjvse8MjtCsVDUKv8DCGIQABoMNjM3NDIzMTgzODA1IgwWLGVt6vkHPpYOsO4q3ANXLS8UauSR%2F1Vvsc7J6q%2FO0raPy9IAdCkpdVc6ad1qN4lBYxrLSdELKYTp84kfCM3BFlNRbLZM00SVJbEpCcgI1uw1gSg8uxcvAGtCV0D6I8CTTsMAtIoDMcjFl%2FwaQmCVO2914JWBdxebtsnRvKnfwWMdxHO0SyRIXIkquBlYuF4S0aBacwML9Fw4%2F%2BfiiQMr6na8WhfZLLUqWBSXSVeYqYsqLSoIyhf9yR%2FMq6FCZKjnL0sm533ENc5dgzvjtQIB1lBwLbO4hMycyI97NBoKDrJrltDXuM4Tda0tzX%2BC8LvENHHohpgFEpcgyG5Os52F1NiBTO%2F6Q38SG7A8O%2B1KzVO5fRI3qSz7swQEXdm49pSWgfNOZEjKynxaTuA8OSh%2Fv4zdnyq0IWd0l%2FE%2Fg6F6Gqd4CloMmdk%2FVlp%2B%2FqN87f81T0chQ9e%2FKC2yOnV8w021S%2FpB1Tex1LSg1kb07S%2FOR5hzxX3WlJQGZT76TllnLJCZqZzdwv02blHixQ2bmJ4qXChocgr8jMHsRfrQ%2FME58eXyvd7auXgxoBmraziazIkB2ExksMLkekxShDVzUrtSM06nEWql0AmiKf3iymEA8wRlX3TONK9WnF5a6i2NmhsInpucnzqs4Z3nCjDi54TABjqkAaO6Pz1WNxxeDt6K%2FuSxQ0igQIyx455iT0qPlANsJ6D88ZA2CRhWPAir%2BV4cuikaToMkyKh9WDNYb835de3n5sEG%2BDQqGqGzpRMTqxLptagcAGyo4CdWjyshcQ6dsTSeJ%2FVIIZeu8GGMKphOM3u3jAWk8lvHlboG0tEez65fZ63OtluQe6wuuRMlWH7Nd1duGeMOy%2Fk7OjimNqB17rc8F%2FSzo990&X-Amz-Signature=f7d4e837f1a4b223d064686df150e91a612fc4e27457c48f45b82adf95360471&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQNZNCD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbqoK1Q%2B5rJdP79%2FsZ458X4%2FAhMhFwwlrjA1653qJcQIhAO2Hd5FvRbI1fhXFBEGvzge6LV%2BaYrPjvse8MjtCsVDUKv8DCGIQABoMNjM3NDIzMTgzODA1IgwWLGVt6vkHPpYOsO4q3ANXLS8UauSR%2F1Vvsc7J6q%2FO0raPy9IAdCkpdVc6ad1qN4lBYxrLSdELKYTp84kfCM3BFlNRbLZM00SVJbEpCcgI1uw1gSg8uxcvAGtCV0D6I8CTTsMAtIoDMcjFl%2FwaQmCVO2914JWBdxebtsnRvKnfwWMdxHO0SyRIXIkquBlYuF4S0aBacwML9Fw4%2F%2BfiiQMr6na8WhfZLLUqWBSXSVeYqYsqLSoIyhf9yR%2FMq6FCZKjnL0sm533ENc5dgzvjtQIB1lBwLbO4hMycyI97NBoKDrJrltDXuM4Tda0tzX%2BC8LvENHHohpgFEpcgyG5Os52F1NiBTO%2F6Q38SG7A8O%2B1KzVO5fRI3qSz7swQEXdm49pSWgfNOZEjKynxaTuA8OSh%2Fv4zdnyq0IWd0l%2FE%2Fg6F6Gqd4CloMmdk%2FVlp%2B%2FqN87f81T0chQ9e%2FKC2yOnV8w021S%2FpB1Tex1LSg1kb07S%2FOR5hzxX3WlJQGZT76TllnLJCZqZzdwv02blHixQ2bmJ4qXChocgr8jMHsRfrQ%2FME58eXyvd7auXgxoBmraziazIkB2ExksMLkekxShDVzUrtSM06nEWql0AmiKf3iymEA8wRlX3TONK9WnF5a6i2NmhsInpucnzqs4Z3nCjDi54TABjqkAaO6Pz1WNxxeDt6K%2FuSxQ0igQIyx455iT0qPlANsJ6D88ZA2CRhWPAir%2BV4cuikaToMkyKh9WDNYb835de3n5sEG%2BDQqGqGzpRMTqxLptagcAGyo4CdWjyshcQ6dsTSeJ%2FVIIZeu8GGMKphOM3u3jAWk8lvHlboG0tEez65fZ63OtluQe6wuuRMlWH7Nd1duGeMOy%2Fk7OjimNqB17rc8F%2FSzo990&X-Amz-Signature=62b9f6bbac395dd61c836598f238ab77667fc373dab62af1afb10178f7ce2c61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQNZNCD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbqoK1Q%2B5rJdP79%2FsZ458X4%2FAhMhFwwlrjA1653qJcQIhAO2Hd5FvRbI1fhXFBEGvzge6LV%2BaYrPjvse8MjtCsVDUKv8DCGIQABoMNjM3NDIzMTgzODA1IgwWLGVt6vkHPpYOsO4q3ANXLS8UauSR%2F1Vvsc7J6q%2FO0raPy9IAdCkpdVc6ad1qN4lBYxrLSdELKYTp84kfCM3BFlNRbLZM00SVJbEpCcgI1uw1gSg8uxcvAGtCV0D6I8CTTsMAtIoDMcjFl%2FwaQmCVO2914JWBdxebtsnRvKnfwWMdxHO0SyRIXIkquBlYuF4S0aBacwML9Fw4%2F%2BfiiQMr6na8WhfZLLUqWBSXSVeYqYsqLSoIyhf9yR%2FMq6FCZKjnL0sm533ENc5dgzvjtQIB1lBwLbO4hMycyI97NBoKDrJrltDXuM4Tda0tzX%2BC8LvENHHohpgFEpcgyG5Os52F1NiBTO%2F6Q38SG7A8O%2B1KzVO5fRI3qSz7swQEXdm49pSWgfNOZEjKynxaTuA8OSh%2Fv4zdnyq0IWd0l%2FE%2Fg6F6Gqd4CloMmdk%2FVlp%2B%2FqN87f81T0chQ9e%2FKC2yOnV8w021S%2FpB1Tex1LSg1kb07S%2FOR5hzxX3WlJQGZT76TllnLJCZqZzdwv02blHixQ2bmJ4qXChocgr8jMHsRfrQ%2FME58eXyvd7auXgxoBmraziazIkB2ExksMLkekxShDVzUrtSM06nEWql0AmiKf3iymEA8wRlX3TONK9WnF5a6i2NmhsInpucnzqs4Z3nCjDi54TABjqkAaO6Pz1WNxxeDt6K%2FuSxQ0igQIyx455iT0qPlANsJ6D88ZA2CRhWPAir%2BV4cuikaToMkyKh9WDNYb835de3n5sEG%2BDQqGqGzpRMTqxLptagcAGyo4CdWjyshcQ6dsTSeJ%2FVIIZeu8GGMKphOM3u3jAWk8lvHlboG0tEez65fZ63OtluQe6wuuRMlWH7Nd1duGeMOy%2Fk7OjimNqB17rc8F%2FSzo990&X-Amz-Signature=be82b2bae424aa271c60213fc9808def0d2c0fc5b65e32073dd3e56cd1642ade&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
