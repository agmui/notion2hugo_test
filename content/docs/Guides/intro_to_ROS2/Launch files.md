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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VX3BWD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOXNNGAldD0tAB%2F1JVgiBApE6Y15tBDgxDdRJzgcgqxAiEA8hlYIeq81gsxaQKHfJOz3dIMqbi%2FVNArGJbKKkC5rcwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjzn2GpMCR4RRbMXSrcAwxyb8tY3675ib%2FNE%2BcdXL0Qwi5gK4tZuONBhxCEXyzmBUvDLSw6NAaNsV1EIOm%2FQiruskYDQgL6suYjsVrXj5JDxXY5NrMccPSs4avzK%2FV8TKiD2X6jEqty%2BaycTaHf1o%2B9srrjPxP32jazpvxnoEEt%2B1mMhfV0EVh0mTd2IHY72gadaZDanxF%2FLCasWXppIS2kNWrymbAMzHyJ%2Bu6dwlG0hgU80P7lDVD1nBNOHg8DeFQGkm%2FX%2FJHfr4dJGX5CQvfBRSUv8WuDRiG0f%2FusmS7qYnOynz%2FnFZB0TLOAHZrQ77T01zWRNzFLVeHDuppuVIV7obJopgSnZe%2F9vwE42Sa0n7H0cUZ6YrdGH88SMm0R8v8q7%2BZiXGnJ3zn1MOhqvj%2FVwRZTKY4orXlvSKeqAhbtchmbzIV8BqVFchAW77ClLNt%2FLgVDTXbCYOs%2Fno%2FovlRVEUxBzajJ45vHVlQQlshwSjII6oYmr3pXQKtJ%2Btnyfifmy3m0jHsDCMxZWnKdSbZyUxcrS3%2BS1%2ByEPL8fOxPv9Ejn2xY4FQKza4%2Bp4%2FOB4d9KlmfwqKgbSvduExqWBjpJ7EfWWzS2lwW6xmzpI%2Bjkk5hlYMTClvrQAJatbKCJoUvp9YEEfjUgnrVFMIKzqb0GOqUBj7IYhj7kAirC2p853f0vJ5m7m8bebezZnXe7tlXAJKPS9%2FeihqmwCHSaRR%2BSkz8GPXWoCXL90RFVaOvMC9Lhxo00CpaQWmvLtOJzNiBNRHWHVazVXNwvp4JpKFx%2B6sI%2FKXuwtE4qhySwbGuQep2K49H2QArUEsT6GUWLaL%2FQZ5hIg%2FDzN7rYohM%2BlkLubxZoIUjEKrLCrb19xwRtGkzxSzzYEXfd&X-Amz-Signature=4aa2142a379f841a3a42127cc110d10ca7f8b0319f1fb15acf34240cd4f78cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VX3BWD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOXNNGAldD0tAB%2F1JVgiBApE6Y15tBDgxDdRJzgcgqxAiEA8hlYIeq81gsxaQKHfJOz3dIMqbi%2FVNArGJbKKkC5rcwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjzn2GpMCR4RRbMXSrcAwxyb8tY3675ib%2FNE%2BcdXL0Qwi5gK4tZuONBhxCEXyzmBUvDLSw6NAaNsV1EIOm%2FQiruskYDQgL6suYjsVrXj5JDxXY5NrMccPSs4avzK%2FV8TKiD2X6jEqty%2BaycTaHf1o%2B9srrjPxP32jazpvxnoEEt%2B1mMhfV0EVh0mTd2IHY72gadaZDanxF%2FLCasWXppIS2kNWrymbAMzHyJ%2Bu6dwlG0hgU80P7lDVD1nBNOHg8DeFQGkm%2FX%2FJHfr4dJGX5CQvfBRSUv8WuDRiG0f%2FusmS7qYnOynz%2FnFZB0TLOAHZrQ77T01zWRNzFLVeHDuppuVIV7obJopgSnZe%2F9vwE42Sa0n7H0cUZ6YrdGH88SMm0R8v8q7%2BZiXGnJ3zn1MOhqvj%2FVwRZTKY4orXlvSKeqAhbtchmbzIV8BqVFchAW77ClLNt%2FLgVDTXbCYOs%2Fno%2FovlRVEUxBzajJ45vHVlQQlshwSjII6oYmr3pXQKtJ%2Btnyfifmy3m0jHsDCMxZWnKdSbZyUxcrS3%2BS1%2ByEPL8fOxPv9Ejn2xY4FQKza4%2Bp4%2FOB4d9KlmfwqKgbSvduExqWBjpJ7EfWWzS2lwW6xmzpI%2Bjkk5hlYMTClvrQAJatbKCJoUvp9YEEfjUgnrVFMIKzqb0GOqUBj7IYhj7kAirC2p853f0vJ5m7m8bebezZnXe7tlXAJKPS9%2FeihqmwCHSaRR%2BSkz8GPXWoCXL90RFVaOvMC9Lhxo00CpaQWmvLtOJzNiBNRHWHVazVXNwvp4JpKFx%2B6sI%2FKXuwtE4qhySwbGuQep2K49H2QArUEsT6GUWLaL%2FQZ5hIg%2FDzN7rYohM%2BlkLubxZoIUjEKrLCrb19xwRtGkzxSzzYEXfd&X-Amz-Signature=303359c2608ec5f5efb46cc6e062bcafd1d3082f6677e029a2eea019341cf1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VX3BWD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOXNNGAldD0tAB%2F1JVgiBApE6Y15tBDgxDdRJzgcgqxAiEA8hlYIeq81gsxaQKHfJOz3dIMqbi%2FVNArGJbKKkC5rcwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjzn2GpMCR4RRbMXSrcAwxyb8tY3675ib%2FNE%2BcdXL0Qwi5gK4tZuONBhxCEXyzmBUvDLSw6NAaNsV1EIOm%2FQiruskYDQgL6suYjsVrXj5JDxXY5NrMccPSs4avzK%2FV8TKiD2X6jEqty%2BaycTaHf1o%2B9srrjPxP32jazpvxnoEEt%2B1mMhfV0EVh0mTd2IHY72gadaZDanxF%2FLCasWXppIS2kNWrymbAMzHyJ%2Bu6dwlG0hgU80P7lDVD1nBNOHg8DeFQGkm%2FX%2FJHfr4dJGX5CQvfBRSUv8WuDRiG0f%2FusmS7qYnOynz%2FnFZB0TLOAHZrQ77T01zWRNzFLVeHDuppuVIV7obJopgSnZe%2F9vwE42Sa0n7H0cUZ6YrdGH88SMm0R8v8q7%2BZiXGnJ3zn1MOhqvj%2FVwRZTKY4orXlvSKeqAhbtchmbzIV8BqVFchAW77ClLNt%2FLgVDTXbCYOs%2Fno%2FovlRVEUxBzajJ45vHVlQQlshwSjII6oYmr3pXQKtJ%2Btnyfifmy3m0jHsDCMxZWnKdSbZyUxcrS3%2BS1%2ByEPL8fOxPv9Ejn2xY4FQKza4%2Bp4%2FOB4d9KlmfwqKgbSvduExqWBjpJ7EfWWzS2lwW6xmzpI%2Bjkk5hlYMTClvrQAJatbKCJoUvp9YEEfjUgnrVFMIKzqb0GOqUBj7IYhj7kAirC2p853f0vJ5m7m8bebezZnXe7tlXAJKPS9%2FeihqmwCHSaRR%2BSkz8GPXWoCXL90RFVaOvMC9Lhxo00CpaQWmvLtOJzNiBNRHWHVazVXNwvp4JpKFx%2B6sI%2FKXuwtE4qhySwbGuQep2K49H2QArUEsT6GUWLaL%2FQZ5hIg%2FDzN7rYohM%2BlkLubxZoIUjEKrLCrb19xwRtGkzxSzzYEXfd&X-Amz-Signature=6b1ea103bced7adcd56f4892bf81412356e112174e1a4e6f94da83c3b727ca4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
