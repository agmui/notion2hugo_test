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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IEGPEZD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDqiZ8oG54aAbB7nE07qBHoAlrlUnoZbZBXFk1P2fkf8QIgU5d2UsCuGnqVF61L%2B4gGbxYGvqeuCQVQJuNKveaL5eAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD00uCeBZUBCXs%2B9JCrcAxUp8B4ZXJ6LkmNhEEiRtx4jgLv%2BlfUlSaRjnxGXZ896RNFu%2Fi6%2BZ95NkC27AIz2Y92Hmqxc5U0fVSPZPsVyijkZy2%2FnkGXrUasCnrULGYCdXjXiRhsc6hCPLZS%2FfM7FD5YnQxmyHBNsnM6ewoRH9iKMEom7X9iEIkNun2d1YGODcT%2FqlMYueQwHPKiu0aZ4p22e7266vyhAD1G2qBBVKExB2DKqydQ8usyt%2Bz7NJZSOOMyi7B7zqN56juaHrycoaR3y1qhmfG%2BHygBRzratvkdkgOXVZB2Hb7vPcIMc2uD6Dmv86nM67u%2BGEtvx0McCE1LpgRLIjKUNYw75n%2BjUs42ieujygu8yV8gy7q42xvDqdUc05J3XbfwU5b%2FMhtN1l6yJKuFst0suStthPkRXh%2FZfLV2wNZXVgM8I7DSjq6bB9ORn8CNI1goVFl3svVsxdsJlPQ4csJISh6w6yLJryfNERBW%2BfW0NLBG4Md5nm7qIemFnWP3XCfaUFA6Hea49A3IbGVP0zTKCB2g1YkN%2Ftpsz7yCdqjjQBkwCuUqp5arNvme28RMU%2BToe5pna75OB2iGQiDuKzHgLlsnT5HXDhNx6qo6rIgVGtwqzRQLvCuyhXyFxDC%2BRWjScirnVMMHJg8IGOqUB%2BW207BPDl%2F8baRVqULVQoTMjYycWwRlUqRDDyTceVDdSGC7axSHiqk9xVwBtnaL1ASNb08dA4fnloTvnfCRWhIOQiWIpDN6HrdSVmLmX0RDy4vX1SlsIx38ENtGF7yFDxb%2FBXeUjmRpxT71ZuZ5GG%2FQxkuUA%2B9333GwDnS2JveP9NP0jonDvFNUmygCnPxKKZPTVIlkcnBzv%2BhtYYZzdqecruWRp&X-Amz-Signature=b629019a6a5b7c5088e77671bfc5244cd572e4ba0b6e079cc5cffc850bb33531&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IEGPEZD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDqiZ8oG54aAbB7nE07qBHoAlrlUnoZbZBXFk1P2fkf8QIgU5d2UsCuGnqVF61L%2B4gGbxYGvqeuCQVQJuNKveaL5eAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD00uCeBZUBCXs%2B9JCrcAxUp8B4ZXJ6LkmNhEEiRtx4jgLv%2BlfUlSaRjnxGXZ896RNFu%2Fi6%2BZ95NkC27AIz2Y92Hmqxc5U0fVSPZPsVyijkZy2%2FnkGXrUasCnrULGYCdXjXiRhsc6hCPLZS%2FfM7FD5YnQxmyHBNsnM6ewoRH9iKMEom7X9iEIkNun2d1YGODcT%2FqlMYueQwHPKiu0aZ4p22e7266vyhAD1G2qBBVKExB2DKqydQ8usyt%2Bz7NJZSOOMyi7B7zqN56juaHrycoaR3y1qhmfG%2BHygBRzratvkdkgOXVZB2Hb7vPcIMc2uD6Dmv86nM67u%2BGEtvx0McCE1LpgRLIjKUNYw75n%2BjUs42ieujygu8yV8gy7q42xvDqdUc05J3XbfwU5b%2FMhtN1l6yJKuFst0suStthPkRXh%2FZfLV2wNZXVgM8I7DSjq6bB9ORn8CNI1goVFl3svVsxdsJlPQ4csJISh6w6yLJryfNERBW%2BfW0NLBG4Md5nm7qIemFnWP3XCfaUFA6Hea49A3IbGVP0zTKCB2g1YkN%2Ftpsz7yCdqjjQBkwCuUqp5arNvme28RMU%2BToe5pna75OB2iGQiDuKzHgLlsnT5HXDhNx6qo6rIgVGtwqzRQLvCuyhXyFxDC%2BRWjScirnVMMHJg8IGOqUB%2BW207BPDl%2F8baRVqULVQoTMjYycWwRlUqRDDyTceVDdSGC7axSHiqk9xVwBtnaL1ASNb08dA4fnloTvnfCRWhIOQiWIpDN6HrdSVmLmX0RDy4vX1SlsIx38ENtGF7yFDxb%2FBXeUjmRpxT71ZuZ5GG%2FQxkuUA%2B9333GwDnS2JveP9NP0jonDvFNUmygCnPxKKZPTVIlkcnBzv%2BhtYYZzdqecruWRp&X-Amz-Signature=8ba038e320143a02150ef1c95f6cdf32d7c6833e5238687d8652c4f7c3a44afd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IEGPEZD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDqiZ8oG54aAbB7nE07qBHoAlrlUnoZbZBXFk1P2fkf8QIgU5d2UsCuGnqVF61L%2B4gGbxYGvqeuCQVQJuNKveaL5eAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD00uCeBZUBCXs%2B9JCrcAxUp8B4ZXJ6LkmNhEEiRtx4jgLv%2BlfUlSaRjnxGXZ896RNFu%2Fi6%2BZ95NkC27AIz2Y92Hmqxc5U0fVSPZPsVyijkZy2%2FnkGXrUasCnrULGYCdXjXiRhsc6hCPLZS%2FfM7FD5YnQxmyHBNsnM6ewoRH9iKMEom7X9iEIkNun2d1YGODcT%2FqlMYueQwHPKiu0aZ4p22e7266vyhAD1G2qBBVKExB2DKqydQ8usyt%2Bz7NJZSOOMyi7B7zqN56juaHrycoaR3y1qhmfG%2BHygBRzratvkdkgOXVZB2Hb7vPcIMc2uD6Dmv86nM67u%2BGEtvx0McCE1LpgRLIjKUNYw75n%2BjUs42ieujygu8yV8gy7q42xvDqdUc05J3XbfwU5b%2FMhtN1l6yJKuFst0suStthPkRXh%2FZfLV2wNZXVgM8I7DSjq6bB9ORn8CNI1goVFl3svVsxdsJlPQ4csJISh6w6yLJryfNERBW%2BfW0NLBG4Md5nm7qIemFnWP3XCfaUFA6Hea49A3IbGVP0zTKCB2g1YkN%2Ftpsz7yCdqjjQBkwCuUqp5arNvme28RMU%2BToe5pna75OB2iGQiDuKzHgLlsnT5HXDhNx6qo6rIgVGtwqzRQLvCuyhXyFxDC%2BRWjScirnVMMHJg8IGOqUB%2BW207BPDl%2F8baRVqULVQoTMjYycWwRlUqRDDyTceVDdSGC7axSHiqk9xVwBtnaL1ASNb08dA4fnloTvnfCRWhIOQiWIpDN6HrdSVmLmX0RDy4vX1SlsIx38ENtGF7yFDxb%2FBXeUjmRpxT71ZuZ5GG%2FQxkuUA%2B9333GwDnS2JveP9NP0jonDvFNUmygCnPxKKZPTVIlkcnBzv%2BhtYYZzdqecruWRp&X-Amz-Signature=10d7c8ee439a0a2c2fd1baa843c9882c7a624a28fd1129fcc8a0f9e0b36cb802&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
