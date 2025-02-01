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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6EB2GS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDif0USOJTfscEx1w%2B3PpVpOtkwO2zW6kAsxdA0lliAsgIgeVQzKjNMlgvlYbw63su%2FxcwyGcSwjFRvUW%2B%2B2kP6CGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOwstE9gF1Igd6fEircAz%2FUgG1dXh54D4cRUWJrGdwY8slS3kXUpuRRV2KL94bsyvf7Un%2F%2FiYzmGIvsQVpmPZj%2F22X4Z8pVvBhMkwdzQY9xPcvHa22vWR4zkhWAvkHre8r8z86%2FelGIJU1H1gYaZefA1DIYKD5Rni1PTWgH9kYNokMco3ATQKoUC3P5R3y0JzkAe5gSL%2FA4plrhP0SnES3N%2Bi%2FeafDvV7WAhNiAxm0Gf1bQarJo1FYK%2FFuoZqGnWRqEBGjOpaxqVVwhOwRQpLciRIG%2BVR3LJp8p0R3tQ7nne%2FEjkm%2B5LhZocj8bnVMHhmLJqrhbB7wmeyS5gyHE%2B3VqgBt%2FtUrVdgST7QiCoyYL8vhNG7%2BCejMfuYRsA6wkeTgwsOoKYlVNep7etmxFkFNaHJRUZTsUlwkbY6Q2KhAzLTAzeB%2FLLMB7bcBf0v6caZYVYuMkmtA0eh13VOI1wpthiU7rBTbdwUMMBpzHalv0rkAxkCHon9aiVB8dDBAAmOzHJmHOTOs4ZYGHpnWeD%2BigDQWmUpHJL2QTbMXlX25Yv45DiUhNAYa3t1uM%2FJ5k2ox5VywOAtqlRHoPVNnGDln%2FKlSH7slkaQ7PRCGBecb8VOGIJf6LedP%2B%2Ffcp37iB3Ba%2FVjzXAyaFp7S5MOSl97wGOqUBfOF2ecMJi2PTOjfgadFQg%2BsE%2FSvA0lFPg%2Fo2h7qGMC7xB1GKHwwv3QSCWZDXdD4NEA2NJHojlSvS8jq6gGiw%2FVy1P1Kvim0ecNJ1mqHjy1BOUC6peE4nDVhnwK0QDhCN5U3f3cWTi3VuyBouDIAwWZyAFMgWS7xrCDxYWdL6SBrLAnOdXMnzeXrg9C908JbOOYYzMm%2Fb3HlInu7gAfoxAe1Yc77G&X-Amz-Signature=b25d5cd0de9bd09fecd32f3419a9a2d8368f77f98a09a50e3813d5df8e4f3f49&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6EB2GS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDif0USOJTfscEx1w%2B3PpVpOtkwO2zW6kAsxdA0lliAsgIgeVQzKjNMlgvlYbw63su%2FxcwyGcSwjFRvUW%2B%2B2kP6CGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOwstE9gF1Igd6fEircAz%2FUgG1dXh54D4cRUWJrGdwY8slS3kXUpuRRV2KL94bsyvf7Un%2F%2FiYzmGIvsQVpmPZj%2F22X4Z8pVvBhMkwdzQY9xPcvHa22vWR4zkhWAvkHre8r8z86%2FelGIJU1H1gYaZefA1DIYKD5Rni1PTWgH9kYNokMco3ATQKoUC3P5R3y0JzkAe5gSL%2FA4plrhP0SnES3N%2Bi%2FeafDvV7WAhNiAxm0Gf1bQarJo1FYK%2FFuoZqGnWRqEBGjOpaxqVVwhOwRQpLciRIG%2BVR3LJp8p0R3tQ7nne%2FEjkm%2B5LhZocj8bnVMHhmLJqrhbB7wmeyS5gyHE%2B3VqgBt%2FtUrVdgST7QiCoyYL8vhNG7%2BCejMfuYRsA6wkeTgwsOoKYlVNep7etmxFkFNaHJRUZTsUlwkbY6Q2KhAzLTAzeB%2FLLMB7bcBf0v6caZYVYuMkmtA0eh13VOI1wpthiU7rBTbdwUMMBpzHalv0rkAxkCHon9aiVB8dDBAAmOzHJmHOTOs4ZYGHpnWeD%2BigDQWmUpHJL2QTbMXlX25Yv45DiUhNAYa3t1uM%2FJ5k2ox5VywOAtqlRHoPVNnGDln%2FKlSH7slkaQ7PRCGBecb8VOGIJf6LedP%2B%2Ffcp37iB3Ba%2FVjzXAyaFp7S5MOSl97wGOqUBfOF2ecMJi2PTOjfgadFQg%2BsE%2FSvA0lFPg%2Fo2h7qGMC7xB1GKHwwv3QSCWZDXdD4NEA2NJHojlSvS8jq6gGiw%2FVy1P1Kvim0ecNJ1mqHjy1BOUC6peE4nDVhnwK0QDhCN5U3f3cWTi3VuyBouDIAwWZyAFMgWS7xrCDxYWdL6SBrLAnOdXMnzeXrg9C908JbOOYYzMm%2Fb3HlInu7gAfoxAe1Yc77G&X-Amz-Signature=00114201b95ab78ac428a924628b7b39fad7a7246b69dc9fa86c2a095730bf2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6EB2GS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDif0USOJTfscEx1w%2B3PpVpOtkwO2zW6kAsxdA0lliAsgIgeVQzKjNMlgvlYbw63su%2FxcwyGcSwjFRvUW%2B%2B2kP6CGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOwstE9gF1Igd6fEircAz%2FUgG1dXh54D4cRUWJrGdwY8slS3kXUpuRRV2KL94bsyvf7Un%2F%2FiYzmGIvsQVpmPZj%2F22X4Z8pVvBhMkwdzQY9xPcvHa22vWR4zkhWAvkHre8r8z86%2FelGIJU1H1gYaZefA1DIYKD5Rni1PTWgH9kYNokMco3ATQKoUC3P5R3y0JzkAe5gSL%2FA4plrhP0SnES3N%2Bi%2FeafDvV7WAhNiAxm0Gf1bQarJo1FYK%2FFuoZqGnWRqEBGjOpaxqVVwhOwRQpLciRIG%2BVR3LJp8p0R3tQ7nne%2FEjkm%2B5LhZocj8bnVMHhmLJqrhbB7wmeyS5gyHE%2B3VqgBt%2FtUrVdgST7QiCoyYL8vhNG7%2BCejMfuYRsA6wkeTgwsOoKYlVNep7etmxFkFNaHJRUZTsUlwkbY6Q2KhAzLTAzeB%2FLLMB7bcBf0v6caZYVYuMkmtA0eh13VOI1wpthiU7rBTbdwUMMBpzHalv0rkAxkCHon9aiVB8dDBAAmOzHJmHOTOs4ZYGHpnWeD%2BigDQWmUpHJL2QTbMXlX25Yv45DiUhNAYa3t1uM%2FJ5k2ox5VywOAtqlRHoPVNnGDln%2FKlSH7slkaQ7PRCGBecb8VOGIJf6LedP%2B%2Ffcp37iB3Ba%2FVjzXAyaFp7S5MOSl97wGOqUBfOF2ecMJi2PTOjfgadFQg%2BsE%2FSvA0lFPg%2Fo2h7qGMC7xB1GKHwwv3QSCWZDXdD4NEA2NJHojlSvS8jq6gGiw%2FVy1P1Kvim0ecNJ1mqHjy1BOUC6peE4nDVhnwK0QDhCN5U3f3cWTi3VuyBouDIAwWZyAFMgWS7xrCDxYWdL6SBrLAnOdXMnzeXrg9C908JbOOYYzMm%2Fb3HlInu7gAfoxAe1Yc77G&X-Amz-Signature=2bb4c3cd40d7c73d274a254e1eb8d61ab47228fa57a5636affb068f7b4d7ef95&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
