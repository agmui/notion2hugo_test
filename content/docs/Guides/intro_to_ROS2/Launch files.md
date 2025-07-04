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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVE45MT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCkjUp2Ho%2F54nLPW0ktXosmSVzSQ3YGTJgOwxd35OVnYwIgXhdQLOu86%2F78xiYRF%2FIdGjLVXgfb9SE%2BmxI%2FmLieQswq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOXLQFJ6iMJ06NuZdCrcA8wyd%2F042yuCs17lIgAXNwO3%2BWVxGu%2FXdwFMd7TTP6tajNQbgs5qtMirvibt6HpEllmgqn8RNjt0nq%2BA%2BdZvVK3%2FFDkLYrQJZrh1FOSXanz7NSjW%2Fj7hRRTKRadlSEWlxzRFksd%2Fv9U9p0CmTBi%2B8VeCIAQUmyaB5T%2BQVFuIPqkbXrUECwEyRwVrFya1wBPkLRcnUpRdVdAMDmcji5c8wRAKTWqQIBXCuRbWySFrPCQrPVIM4GOgDTesTxhgdLEvXinN9GIhAh64HLTrtx4v4M2E4fFtwyEOnB4C8d8AqMjA6dGcuhfK9oWyiaPBr%2BmjS963ElqLNjRYAEUcOgzQdwtVPzPOMb62I3DNyg%2BAOaaFkfSkIVzfdB6bryFq7iQ75dHe7Q9bNBqdP%2BDgBkLUhQUEWbPcFfToVoIkv2dGSYV948OCy2hBYkXpmR%2BHjNOBP5xG66PGD4FcqkSUbSWqLyGxSzt8yPByy%2BxnKdeExdK7njEYMKlrtqAh1dBdOfA6JzjvMST2kSQW2OBZy15py7DUWZKy2Y78kXMJ%2BdjDu7eWSZmQfN9x4bbEPHwGDW8tufvrx3SKoY1LUZOshkQHcVtWwYB3hlHvVI8zAcTaJVUVykef5hvE1WTQMhl0MK%2BNnsMGOqUB8rqCHHeUuVb5xqLAfKI4JZBPnv3DnwDaZkcrf9WOflAu6euTPmu2F45yI8A33Tt8JT69qtMTmBlpMvcPVJOi46%2FR3buGOSFdGRvOHaMWq1SfTaSIlyw15r5NUQB5hfne9bSdaP7fR5NHm3yukum3B%2FJimg0zwM7moLsd8Z2YTuvsE0028l65jOWfOygPDFqmN6kDBAP1xUH%2BwddezaLH2biYvfPO&X-Amz-Signature=469ca246412ee8d227d1aa13f3615c621615eb9360a39168bf9d7bcbfde14b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVE45MT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCkjUp2Ho%2F54nLPW0ktXosmSVzSQ3YGTJgOwxd35OVnYwIgXhdQLOu86%2F78xiYRF%2FIdGjLVXgfb9SE%2BmxI%2FmLieQswq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOXLQFJ6iMJ06NuZdCrcA8wyd%2F042yuCs17lIgAXNwO3%2BWVxGu%2FXdwFMd7TTP6tajNQbgs5qtMirvibt6HpEllmgqn8RNjt0nq%2BA%2BdZvVK3%2FFDkLYrQJZrh1FOSXanz7NSjW%2Fj7hRRTKRadlSEWlxzRFksd%2Fv9U9p0CmTBi%2B8VeCIAQUmyaB5T%2BQVFuIPqkbXrUECwEyRwVrFya1wBPkLRcnUpRdVdAMDmcji5c8wRAKTWqQIBXCuRbWySFrPCQrPVIM4GOgDTesTxhgdLEvXinN9GIhAh64HLTrtx4v4M2E4fFtwyEOnB4C8d8AqMjA6dGcuhfK9oWyiaPBr%2BmjS963ElqLNjRYAEUcOgzQdwtVPzPOMb62I3DNyg%2BAOaaFkfSkIVzfdB6bryFq7iQ75dHe7Q9bNBqdP%2BDgBkLUhQUEWbPcFfToVoIkv2dGSYV948OCy2hBYkXpmR%2BHjNOBP5xG66PGD4FcqkSUbSWqLyGxSzt8yPByy%2BxnKdeExdK7njEYMKlrtqAh1dBdOfA6JzjvMST2kSQW2OBZy15py7DUWZKy2Y78kXMJ%2BdjDu7eWSZmQfN9x4bbEPHwGDW8tufvrx3SKoY1LUZOshkQHcVtWwYB3hlHvVI8zAcTaJVUVykef5hvE1WTQMhl0MK%2BNnsMGOqUB8rqCHHeUuVb5xqLAfKI4JZBPnv3DnwDaZkcrf9WOflAu6euTPmu2F45yI8A33Tt8JT69qtMTmBlpMvcPVJOi46%2FR3buGOSFdGRvOHaMWq1SfTaSIlyw15r5NUQB5hfne9bSdaP7fR5NHm3yukum3B%2FJimg0zwM7moLsd8Z2YTuvsE0028l65jOWfOygPDFqmN6kDBAP1xUH%2BwddezaLH2biYvfPO&X-Amz-Signature=6278d7c6a891496177e7eb118b941963641dae5438e46dd699009ef0c69d4d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVE45MT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCkjUp2Ho%2F54nLPW0ktXosmSVzSQ3YGTJgOwxd35OVnYwIgXhdQLOu86%2F78xiYRF%2FIdGjLVXgfb9SE%2BmxI%2FmLieQswq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOXLQFJ6iMJ06NuZdCrcA8wyd%2F042yuCs17lIgAXNwO3%2BWVxGu%2FXdwFMd7TTP6tajNQbgs5qtMirvibt6HpEllmgqn8RNjt0nq%2BA%2BdZvVK3%2FFDkLYrQJZrh1FOSXanz7NSjW%2Fj7hRRTKRadlSEWlxzRFksd%2Fv9U9p0CmTBi%2B8VeCIAQUmyaB5T%2BQVFuIPqkbXrUECwEyRwVrFya1wBPkLRcnUpRdVdAMDmcji5c8wRAKTWqQIBXCuRbWySFrPCQrPVIM4GOgDTesTxhgdLEvXinN9GIhAh64HLTrtx4v4M2E4fFtwyEOnB4C8d8AqMjA6dGcuhfK9oWyiaPBr%2BmjS963ElqLNjRYAEUcOgzQdwtVPzPOMb62I3DNyg%2BAOaaFkfSkIVzfdB6bryFq7iQ75dHe7Q9bNBqdP%2BDgBkLUhQUEWbPcFfToVoIkv2dGSYV948OCy2hBYkXpmR%2BHjNOBP5xG66PGD4FcqkSUbSWqLyGxSzt8yPByy%2BxnKdeExdK7njEYMKlrtqAh1dBdOfA6JzjvMST2kSQW2OBZy15py7DUWZKy2Y78kXMJ%2BdjDu7eWSZmQfN9x4bbEPHwGDW8tufvrx3SKoY1LUZOshkQHcVtWwYB3hlHvVI8zAcTaJVUVykef5hvE1WTQMhl0MK%2BNnsMGOqUB8rqCHHeUuVb5xqLAfKI4JZBPnv3DnwDaZkcrf9WOflAu6euTPmu2F45yI8A33Tt8JT69qtMTmBlpMvcPVJOi46%2FR3buGOSFdGRvOHaMWq1SfTaSIlyw15r5NUQB5hfne9bSdaP7fR5NHm3yukum3B%2FJimg0zwM7moLsd8Z2YTuvsE0028l65jOWfOygPDFqmN6kDBAP1xUH%2BwddezaLH2biYvfPO&X-Amz-Signature=67b54079f214c2e30410cc559aecc154f3e45cc2fc1b004e9b0a6b02e5a851ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
