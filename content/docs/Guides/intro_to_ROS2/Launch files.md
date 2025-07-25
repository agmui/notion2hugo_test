---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2UMUZV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDZQdr7s%2FK9rs3zf7Dn%2Bg%2FMOEyb1Uk5HowVbqk9ck9PcwIgXxeg%2FRLuzR4uxrRk9EWMeMfxRT5X%2BqXr5Jd8dFVFBLcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA7byFBVJcgQxRjdXyrcA7RXgHiWWgbwWn1GWf6cA6KYjZI5Nehh%2F0n12aGMXe%2FXrxaJE%2FuM3EC9a1WGtqd3Roh2zHiMWvYjAp%2BjJQS0ruRxsbM6UoyfbEdJeUwJB9jmllekkylFO8REdH3fnuM65IIxYWBEY8h%2F0R%2Bei40%2FYR1uEeGl%2FKeuYgzPbXmDeQ%2B%2BQzzzYxTfdNRZppjOC8FNtSzW7lgeyaWSyewZK6qb6tKprzxIf8Pbu6W03lrFbg9Z04VnOLwcFEDudh4kMrSFHGhFsqcF0lX7oUqbuMoRR2GS07dU1GZ%2FLiiW%2BXHM51CU4TcI%2BYXQesMiesDaPKnLZLFBGkrGzKtRToGzsaD0d77OaylbCm3mRKA98DF67OalpGF0ir%2BGKEK0%2FtuLbPeP1Kl1KsCFIcz42HaID%2FgDdvYcUFgYOzpaIhnbK4412%2FYNk45hEB3uaFY7ix5%2Fh6W3xbkhLPU8d2scTj2pFd6KV%2FaflZOJ%2BNnf8iNne2qMXpTq6mSgupQtSJzZD1IDLRpCjMIOulOQ4k%2Fq1yvID9yT9XS02Rt803tH7ffLr9afi6PWpfClQ1FzhRMx%2F8MqRpC7G4YSvLqe9k9qe0j0D0Ubr8fcCo7W%2BEamFuBAp6J6BL0%2FbVi6MEYSY9iKL3cKMNPhjcQGOqUBKYhxiX5S2%2BInh9z0NGakQk69PSsS21XYyO3RyjRAkyQNYGtQeujPLI01Zj7EPIC8C3s9jenfhCnuvwZ03HQAY8AtIO3GgkI1IiQ6L0NyMlKr3UbEKG9aZr018Q8i8lJyTyPsq1JNanjzBheW%2Bvlt5xmV2ThKr20Is2UjJivBnIUSZYJjxd5TTSJI4vpkHSAESp9G8%2BBKKUVHZg9XblwEu2NKpG7k&X-Amz-Signature=4fa43bd1115b29295637f81160318bdb69d50a3f3503f032475650afd55247f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2UMUZV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDZQdr7s%2FK9rs3zf7Dn%2Bg%2FMOEyb1Uk5HowVbqk9ck9PcwIgXxeg%2FRLuzR4uxrRk9EWMeMfxRT5X%2BqXr5Jd8dFVFBLcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA7byFBVJcgQxRjdXyrcA7RXgHiWWgbwWn1GWf6cA6KYjZI5Nehh%2F0n12aGMXe%2FXrxaJE%2FuM3EC9a1WGtqd3Roh2zHiMWvYjAp%2BjJQS0ruRxsbM6UoyfbEdJeUwJB9jmllekkylFO8REdH3fnuM65IIxYWBEY8h%2F0R%2Bei40%2FYR1uEeGl%2FKeuYgzPbXmDeQ%2B%2BQzzzYxTfdNRZppjOC8FNtSzW7lgeyaWSyewZK6qb6tKprzxIf8Pbu6W03lrFbg9Z04VnOLwcFEDudh4kMrSFHGhFsqcF0lX7oUqbuMoRR2GS07dU1GZ%2FLiiW%2BXHM51CU4TcI%2BYXQesMiesDaPKnLZLFBGkrGzKtRToGzsaD0d77OaylbCm3mRKA98DF67OalpGF0ir%2BGKEK0%2FtuLbPeP1Kl1KsCFIcz42HaID%2FgDdvYcUFgYOzpaIhnbK4412%2FYNk45hEB3uaFY7ix5%2Fh6W3xbkhLPU8d2scTj2pFd6KV%2FaflZOJ%2BNnf8iNne2qMXpTq6mSgupQtSJzZD1IDLRpCjMIOulOQ4k%2Fq1yvID9yT9XS02Rt803tH7ffLr9afi6PWpfClQ1FzhRMx%2F8MqRpC7G4YSvLqe9k9qe0j0D0Ubr8fcCo7W%2BEamFuBAp6J6BL0%2FbVi6MEYSY9iKL3cKMNPhjcQGOqUBKYhxiX5S2%2BInh9z0NGakQk69PSsS21XYyO3RyjRAkyQNYGtQeujPLI01Zj7EPIC8C3s9jenfhCnuvwZ03HQAY8AtIO3GgkI1IiQ6L0NyMlKr3UbEKG9aZr018Q8i8lJyTyPsq1JNanjzBheW%2Bvlt5xmV2ThKr20Is2UjJivBnIUSZYJjxd5TTSJI4vpkHSAESp9G8%2BBKKUVHZg9XblwEu2NKpG7k&X-Amz-Signature=1925ce76fc3cfd8ba41189742d3901e1c8004e14e4e573d40487e87374a02b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2UMUZV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDZQdr7s%2FK9rs3zf7Dn%2Bg%2FMOEyb1Uk5HowVbqk9ck9PcwIgXxeg%2FRLuzR4uxrRk9EWMeMfxRT5X%2BqXr5Jd8dFVFBLcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA7byFBVJcgQxRjdXyrcA7RXgHiWWgbwWn1GWf6cA6KYjZI5Nehh%2F0n12aGMXe%2FXrxaJE%2FuM3EC9a1WGtqd3Roh2zHiMWvYjAp%2BjJQS0ruRxsbM6UoyfbEdJeUwJB9jmllekkylFO8REdH3fnuM65IIxYWBEY8h%2F0R%2Bei40%2FYR1uEeGl%2FKeuYgzPbXmDeQ%2B%2BQzzzYxTfdNRZppjOC8FNtSzW7lgeyaWSyewZK6qb6tKprzxIf8Pbu6W03lrFbg9Z04VnOLwcFEDudh4kMrSFHGhFsqcF0lX7oUqbuMoRR2GS07dU1GZ%2FLiiW%2BXHM51CU4TcI%2BYXQesMiesDaPKnLZLFBGkrGzKtRToGzsaD0d77OaylbCm3mRKA98DF67OalpGF0ir%2BGKEK0%2FtuLbPeP1Kl1KsCFIcz42HaID%2FgDdvYcUFgYOzpaIhnbK4412%2FYNk45hEB3uaFY7ix5%2Fh6W3xbkhLPU8d2scTj2pFd6KV%2FaflZOJ%2BNnf8iNne2qMXpTq6mSgupQtSJzZD1IDLRpCjMIOulOQ4k%2Fq1yvID9yT9XS02Rt803tH7ffLr9afi6PWpfClQ1FzhRMx%2F8MqRpC7G4YSvLqe9k9qe0j0D0Ubr8fcCo7W%2BEamFuBAp6J6BL0%2FbVi6MEYSY9iKL3cKMNPhjcQGOqUBKYhxiX5S2%2BInh9z0NGakQk69PSsS21XYyO3RyjRAkyQNYGtQeujPLI01Zj7EPIC8C3s9jenfhCnuvwZ03HQAY8AtIO3GgkI1IiQ6L0NyMlKr3UbEKG9aZr018Q8i8lJyTyPsq1JNanjzBheW%2Bvlt5xmV2ThKr20Is2UjJivBnIUSZYJjxd5TTSJI4vpkHSAESp9G8%2BBKKUVHZg9XblwEu2NKpG7k&X-Amz-Signature=7ea54a0649b285b060026ffe0a516bbb6440fdb2fb4d366e8a8c9e64a61896ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
