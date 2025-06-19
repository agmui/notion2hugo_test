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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2YYA3U%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1htE7dL1TsdXQtYM7RveRZQM%2Fn7vVcM1B%2B4aujlvOvAiBwHBByrZiwfhXoaeQ94jOSuIvADnQ%2B8OilJY6vc6121CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM43KF8a4M0fUeF%2Fs6KtwDDAHPcQ02AT4KF1%2FFOma7wczcNI8IEk2gcUHnMtlRjC7vp%2BMaj2YNNpm7OQcpJs2Ryn%2FnjAs9e5tudbmwfd8%2BYtFGpqfZsc%2FoEbIZEZs8aaBSBn9uboe5NHiw0NHXG48ozb2YqB7x3IJdJhRUi97495w5LLFlQhPfwIfdcIgUPtqr4%2FslT2Rr5gPZHiJ9Tez7psnHDsSeQ%2BXCkuHhkPKXisGP0FpWiQnDgOGCVdLWS6ZnrSXSxoucoYl2uYY7YUUt5g9zmyplr5sC8jtx64QkdPuDf2D1OlNQ6NKr0RMcN7E9tccv8g%2BHmM4aEiQG%2F9zkrmA1j9wXUa%2FF6xI1w9v7d8ogQozYWO79vnMPYot6uxAkVwODr6RuZB44Za%2F69OYA4dFv7Ro9ds1vduPDJkqVSsGEtX82OEUzKQByyRYcwStssB7bhlO4vtr0I2iVzYtpa%2BGo7kCforP%2BrKoSr6m1IizPnB4k0i24SRtBbmxKyuBeHAfD3g3mUW88AyB3DQ6AYeuPUU1IFqcAb%2FQOPHJ7BeQOdBhqSOSoS%2BXMAim6gBq5v8%2BQ7aVB3VO2kVPMleZD5zAX4gK%2FGUs%2B0lv4j%2Ba%2F7ojRIXfcLtXyG2v%2FDr9irXy4C1cCZlVutFOI%2FJQw%2Bt7QwgY6pgF0icHDRWaNblmK484T68wMAvaU3UdqybXKkhzHL30yhhZceSdvzLritWaxIEpOgMFDLcccelGZ2HASdtwLfnpUJBMGozs1aC75dbi8QVEDcXzpdEbDsB0uSpZzbj4T%2BVbpaohUOX1pASP1aAKQIUqKl7v1JrgonSfIntSsiBmEvGAqcLrwfHqsAGx4gjPV0RD%2FaMkZuDlUqXyBmtt8KmniRzAYzdIT&X-Amz-Signature=6b20a21c7ac7f1cf833248a5e023b2ec978f43952ee4a6bd12384108e2962811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2YYA3U%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1htE7dL1TsdXQtYM7RveRZQM%2Fn7vVcM1B%2B4aujlvOvAiBwHBByrZiwfhXoaeQ94jOSuIvADnQ%2B8OilJY6vc6121CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM43KF8a4M0fUeF%2Fs6KtwDDAHPcQ02AT4KF1%2FFOma7wczcNI8IEk2gcUHnMtlRjC7vp%2BMaj2YNNpm7OQcpJs2Ryn%2FnjAs9e5tudbmwfd8%2BYtFGpqfZsc%2FoEbIZEZs8aaBSBn9uboe5NHiw0NHXG48ozb2YqB7x3IJdJhRUi97495w5LLFlQhPfwIfdcIgUPtqr4%2FslT2Rr5gPZHiJ9Tez7psnHDsSeQ%2BXCkuHhkPKXisGP0FpWiQnDgOGCVdLWS6ZnrSXSxoucoYl2uYY7YUUt5g9zmyplr5sC8jtx64QkdPuDf2D1OlNQ6NKr0RMcN7E9tccv8g%2BHmM4aEiQG%2F9zkrmA1j9wXUa%2FF6xI1w9v7d8ogQozYWO79vnMPYot6uxAkVwODr6RuZB44Za%2F69OYA4dFv7Ro9ds1vduPDJkqVSsGEtX82OEUzKQByyRYcwStssB7bhlO4vtr0I2iVzYtpa%2BGo7kCforP%2BrKoSr6m1IizPnB4k0i24SRtBbmxKyuBeHAfD3g3mUW88AyB3DQ6AYeuPUU1IFqcAb%2FQOPHJ7BeQOdBhqSOSoS%2BXMAim6gBq5v8%2BQ7aVB3VO2kVPMleZD5zAX4gK%2FGUs%2B0lv4j%2Ba%2F7ojRIXfcLtXyG2v%2FDr9irXy4C1cCZlVutFOI%2FJQw%2Bt7QwgY6pgF0icHDRWaNblmK484T68wMAvaU3UdqybXKkhzHL30yhhZceSdvzLritWaxIEpOgMFDLcccelGZ2HASdtwLfnpUJBMGozs1aC75dbi8QVEDcXzpdEbDsB0uSpZzbj4T%2BVbpaohUOX1pASP1aAKQIUqKl7v1JrgonSfIntSsiBmEvGAqcLrwfHqsAGx4gjPV0RD%2FaMkZuDlUqXyBmtt8KmniRzAYzdIT&X-Amz-Signature=d1aa1403fb22056b748b11ae26896b1edcff32318e9aabef085e651bca7790be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2YYA3U%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1htE7dL1TsdXQtYM7RveRZQM%2Fn7vVcM1B%2B4aujlvOvAiBwHBByrZiwfhXoaeQ94jOSuIvADnQ%2B8OilJY6vc6121CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM43KF8a4M0fUeF%2Fs6KtwDDAHPcQ02AT4KF1%2FFOma7wczcNI8IEk2gcUHnMtlRjC7vp%2BMaj2YNNpm7OQcpJs2Ryn%2FnjAs9e5tudbmwfd8%2BYtFGpqfZsc%2FoEbIZEZs8aaBSBn9uboe5NHiw0NHXG48ozb2YqB7x3IJdJhRUi97495w5LLFlQhPfwIfdcIgUPtqr4%2FslT2Rr5gPZHiJ9Tez7psnHDsSeQ%2BXCkuHhkPKXisGP0FpWiQnDgOGCVdLWS6ZnrSXSxoucoYl2uYY7YUUt5g9zmyplr5sC8jtx64QkdPuDf2D1OlNQ6NKr0RMcN7E9tccv8g%2BHmM4aEiQG%2F9zkrmA1j9wXUa%2FF6xI1w9v7d8ogQozYWO79vnMPYot6uxAkVwODr6RuZB44Za%2F69OYA4dFv7Ro9ds1vduPDJkqVSsGEtX82OEUzKQByyRYcwStssB7bhlO4vtr0I2iVzYtpa%2BGo7kCforP%2BrKoSr6m1IizPnB4k0i24SRtBbmxKyuBeHAfD3g3mUW88AyB3DQ6AYeuPUU1IFqcAb%2FQOPHJ7BeQOdBhqSOSoS%2BXMAim6gBq5v8%2BQ7aVB3VO2kVPMleZD5zAX4gK%2FGUs%2B0lv4j%2Ba%2F7ojRIXfcLtXyG2v%2FDr9irXy4C1cCZlVutFOI%2FJQw%2Bt7QwgY6pgF0icHDRWaNblmK484T68wMAvaU3UdqybXKkhzHL30yhhZceSdvzLritWaxIEpOgMFDLcccelGZ2HASdtwLfnpUJBMGozs1aC75dbi8QVEDcXzpdEbDsB0uSpZzbj4T%2BVbpaohUOX1pASP1aAKQIUqKl7v1JrgonSfIntSsiBmEvGAqcLrwfHqsAGx4gjPV0RD%2FaMkZuDlUqXyBmtt8KmniRzAYzdIT&X-Amz-Signature=80a6f85e2e73348ac13be07f36e0f656075cc09ecb90d5ab972a69670b5ac31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
