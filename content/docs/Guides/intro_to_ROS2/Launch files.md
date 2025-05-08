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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=de8d502fa10f9d4f90892cbea1eaa592285301d17ceba9bd9e34497aa10c0633&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=ea0c18faf731526f4c5f054184880d854f5429f8d3ee0c0792ba747235ff05f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=e54ef3c78c6d6d497bbfc666d7619ddb6d824d532800750b0fc9c70208e788a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
