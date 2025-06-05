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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARSHP35%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDRUikHPj%2FdKNUjirl81c4Akzhh1p%2B6hPnsz0a6%2FH%2BL4QIhAKwCmgjg45Ee9UJOezpFINlwAaTt9hf9mil4nCYiZggzKv8DCEkQABoMNjM3NDIzMTgzODA1IgySi0cih4x%2FLt%2FatVQq3AO8Rq7z9j0FJe1aYo%2BbgzjQih%2BwCBihjIuXPGbCXL0TlcFlMTGgD99zSHXONCSIsPqbpu17JlJbz91wBkWU4RMs0OhQfh0kpxHBVk8h4Ozi1TeV7nNS%2BCEMSWRsbEUY1%2Fn7RKyCfI%2F7UVqvf7jwQMVlJFCkzuJ05zuTDMTOZp6zsCHwDdeJIPlq%2FZRNGE96LglpN3d5BMjrkRtonNdBvh4xw%2BqY2v%2BqCWeBrsGLtr64KybRdqxL5fFrTxaLdRSwR8wqgYFeUGuQOikaSQ%2B4xKgCL4kC5VY9L7Ug3OuQCSCPFpLkJzM447DG7GdZKJVRfiN0HSJCOHMYbvPZ3aBpotlTtcqgcgjS%2BP4sAiJmypPOeJRLytOwPoYOdQqphkqC1nKWcpJbyaylhSSRFdsLU%2F%2FE%2BGnjV6gw4hMZuPnA0aNGwQZwUoELv8TNPpepKJ6Ppq%2FmoGfBr9Ofc1bjhhzgvffKXFc1%2FBkdLbjR9tO%2BcGpiMbVUjdZqP9jaq8bJ3BKpQnWqNaLheM5hv1i3sjGNUztWuUg81lHBeVTdqwQpbNzzVCAOczGVoVoi8dw4JU3AH4JAmwV5NLjo%2B8Aq3LAQx%2FSFLDjSD3KuN3Pz8ZPGx4OOHWeDFfPdRmni2s69kDDmhIfCBjqkAVgzeCKAxeWhoxoA9pZG9zi6DnxpctJfw9dMEKUvNOMBgCqlvTPKiqVYP5JLxsGhOjzKsTKV%2F5qdSHIlLfBXKZ%2B4%2Fju50pYQPbRKXUY3y0noFc9kFA8G7884ekraaMhWqemLga33oM7DJg5p8MgAiBSQBT0w1jJU4kGd8tzu%2F1%2FINSPOt4eiSxxCSeb%2FfM3PcIbv7Mov1SBRZKyI1O%2FqTpn2n818&X-Amz-Signature=30b9af11824d71f1bb34a581f155dfc4187c8ed5d5c9fc940c2b3bbbe2b03067&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARSHP35%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDRUikHPj%2FdKNUjirl81c4Akzhh1p%2B6hPnsz0a6%2FH%2BL4QIhAKwCmgjg45Ee9UJOezpFINlwAaTt9hf9mil4nCYiZggzKv8DCEkQABoMNjM3NDIzMTgzODA1IgySi0cih4x%2FLt%2FatVQq3AO8Rq7z9j0FJe1aYo%2BbgzjQih%2BwCBihjIuXPGbCXL0TlcFlMTGgD99zSHXONCSIsPqbpu17JlJbz91wBkWU4RMs0OhQfh0kpxHBVk8h4Ozi1TeV7nNS%2BCEMSWRsbEUY1%2Fn7RKyCfI%2F7UVqvf7jwQMVlJFCkzuJ05zuTDMTOZp6zsCHwDdeJIPlq%2FZRNGE96LglpN3d5BMjrkRtonNdBvh4xw%2BqY2v%2BqCWeBrsGLtr64KybRdqxL5fFrTxaLdRSwR8wqgYFeUGuQOikaSQ%2B4xKgCL4kC5VY9L7Ug3OuQCSCPFpLkJzM447DG7GdZKJVRfiN0HSJCOHMYbvPZ3aBpotlTtcqgcgjS%2BP4sAiJmypPOeJRLytOwPoYOdQqphkqC1nKWcpJbyaylhSSRFdsLU%2F%2FE%2BGnjV6gw4hMZuPnA0aNGwQZwUoELv8TNPpepKJ6Ppq%2FmoGfBr9Ofc1bjhhzgvffKXFc1%2FBkdLbjR9tO%2BcGpiMbVUjdZqP9jaq8bJ3BKpQnWqNaLheM5hv1i3sjGNUztWuUg81lHBeVTdqwQpbNzzVCAOczGVoVoi8dw4JU3AH4JAmwV5NLjo%2B8Aq3LAQx%2FSFLDjSD3KuN3Pz8ZPGx4OOHWeDFfPdRmni2s69kDDmhIfCBjqkAVgzeCKAxeWhoxoA9pZG9zi6DnxpctJfw9dMEKUvNOMBgCqlvTPKiqVYP5JLxsGhOjzKsTKV%2F5qdSHIlLfBXKZ%2B4%2Fju50pYQPbRKXUY3y0noFc9kFA8G7884ekraaMhWqemLga33oM7DJg5p8MgAiBSQBT0w1jJU4kGd8tzu%2F1%2FINSPOt4eiSxxCSeb%2FfM3PcIbv7Mov1SBRZKyI1O%2FqTpn2n818&X-Amz-Signature=775d9b460fff0721b13be93046f0d613283e14b4077f45a8597042da22b1a18c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARSHP35%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDRUikHPj%2FdKNUjirl81c4Akzhh1p%2B6hPnsz0a6%2FH%2BL4QIhAKwCmgjg45Ee9UJOezpFINlwAaTt9hf9mil4nCYiZggzKv8DCEkQABoMNjM3NDIzMTgzODA1IgySi0cih4x%2FLt%2FatVQq3AO8Rq7z9j0FJe1aYo%2BbgzjQih%2BwCBihjIuXPGbCXL0TlcFlMTGgD99zSHXONCSIsPqbpu17JlJbz91wBkWU4RMs0OhQfh0kpxHBVk8h4Ozi1TeV7nNS%2BCEMSWRsbEUY1%2Fn7RKyCfI%2F7UVqvf7jwQMVlJFCkzuJ05zuTDMTOZp6zsCHwDdeJIPlq%2FZRNGE96LglpN3d5BMjrkRtonNdBvh4xw%2BqY2v%2BqCWeBrsGLtr64KybRdqxL5fFrTxaLdRSwR8wqgYFeUGuQOikaSQ%2B4xKgCL4kC5VY9L7Ug3OuQCSCPFpLkJzM447DG7GdZKJVRfiN0HSJCOHMYbvPZ3aBpotlTtcqgcgjS%2BP4sAiJmypPOeJRLytOwPoYOdQqphkqC1nKWcpJbyaylhSSRFdsLU%2F%2FE%2BGnjV6gw4hMZuPnA0aNGwQZwUoELv8TNPpepKJ6Ppq%2FmoGfBr9Ofc1bjhhzgvffKXFc1%2FBkdLbjR9tO%2BcGpiMbVUjdZqP9jaq8bJ3BKpQnWqNaLheM5hv1i3sjGNUztWuUg81lHBeVTdqwQpbNzzVCAOczGVoVoi8dw4JU3AH4JAmwV5NLjo%2B8Aq3LAQx%2FSFLDjSD3KuN3Pz8ZPGx4OOHWeDFfPdRmni2s69kDDmhIfCBjqkAVgzeCKAxeWhoxoA9pZG9zi6DnxpctJfw9dMEKUvNOMBgCqlvTPKiqVYP5JLxsGhOjzKsTKV%2F5qdSHIlLfBXKZ%2B4%2Fju50pYQPbRKXUY3y0noFc9kFA8G7884ekraaMhWqemLga33oM7DJg5p8MgAiBSQBT0w1jJU4kGd8tzu%2F1%2FINSPOt4eiSxxCSeb%2FfM3PcIbv7Mov1SBRZKyI1O%2FqTpn2n818&X-Amz-Signature=091f7345d1246d49c891d66bfac97a468c498df1a95bda5dbd6858a74bb0ff45&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
