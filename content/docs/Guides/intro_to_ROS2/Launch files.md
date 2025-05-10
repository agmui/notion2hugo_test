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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466442CTTFV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIETgfVucrfccbKV9FYsfnVba00uHiXBqrKmDkE6RXpIoAiEAtt8svphPFMT7kps4IUFkpktXBfPid61YMBaqVlFxmz0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXV5mF6XaZy7qdA0ircA9WI41QRHX5ckyOp85sLQMDFNRzwco2Tf1V5vh2nyOQXphNg6ED9i8yJlfnZsewKZH7icfTYRRLG0lM0A0LYHghvRRLau%2FjNAoT010va38%2Bxuka53YU3kUcng9rr7O7sN9Uh6HbBBEF32yW6jaPnICe7dePCle%2Bn%2FHNrUamxXlr%2FIMSG0RA%2FbWTBqtS8ewv3qYcM67sXcAM2buYUyhHRmaH18ceI84d0UaphZ4oFLrK9KVbShmEWbvOY32yok0LO3xJBNAYlUDLK8nl638JGzS8XJw%2BxcrqT6kP0Cee5Rs3mKqFgGsL586ptMAelreXSgu%2B3gL62k%2BkJaOWbCvMHVj7ySyHYinf4PXLOlNbJQDzdU3HTynrK1fHrkIr4nG67IisVsR11xieaGDD3WHlih1qJtqHuAv3gq8xbvWDKVCccjzvORmj8%2BvQyEtameCB7vubmrLELDLhS0PA1JasN8IgpHJcr0awCGSJ1Mxw%2FCLMw1%2BcW4qVsaeR8Vea8VLOqwuXA6MjflGWGjdqSie6S1eSBXyJ2QMAsR0LaT8i4Rw75hIZh86mcb4cwYmHyHYQHJlnzCn7JkcBhzklZp6Ds%2B%2FGi9hHJ0bAVDSllXdd1s4DyVMz8J2Qh2trcwEJzMLC6%2FsAGOqUBr9ZMF7Ws4H8HxFwcr2a1odf6y7TSzB1igGcdXOafe8PLKyOqqQ8LZA1PW8iPwGkH4vpZwMwlgvcHMviYaW1YJtjDw5QdfwR6AP3lup21keWqF2r%2FoxakFLXWAVfxexz%2BPUq9r1YGDxOEswiCDZ0I8q0CAXVSKt4O5lMNMWgDaYPK8kZuomcNs8zkA3Q17fblXCgNqTK8tYLGs3CViYxVnWuWO%2BH%2F&X-Amz-Signature=7ffc338fbe85282107eea9ad24f366b09b6afa75251cbe229e3721410c0367c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466442CTTFV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIETgfVucrfccbKV9FYsfnVba00uHiXBqrKmDkE6RXpIoAiEAtt8svphPFMT7kps4IUFkpktXBfPid61YMBaqVlFxmz0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXV5mF6XaZy7qdA0ircA9WI41QRHX5ckyOp85sLQMDFNRzwco2Tf1V5vh2nyOQXphNg6ED9i8yJlfnZsewKZH7icfTYRRLG0lM0A0LYHghvRRLau%2FjNAoT010va38%2Bxuka53YU3kUcng9rr7O7sN9Uh6HbBBEF32yW6jaPnICe7dePCle%2Bn%2FHNrUamxXlr%2FIMSG0RA%2FbWTBqtS8ewv3qYcM67sXcAM2buYUyhHRmaH18ceI84d0UaphZ4oFLrK9KVbShmEWbvOY32yok0LO3xJBNAYlUDLK8nl638JGzS8XJw%2BxcrqT6kP0Cee5Rs3mKqFgGsL586ptMAelreXSgu%2B3gL62k%2BkJaOWbCvMHVj7ySyHYinf4PXLOlNbJQDzdU3HTynrK1fHrkIr4nG67IisVsR11xieaGDD3WHlih1qJtqHuAv3gq8xbvWDKVCccjzvORmj8%2BvQyEtameCB7vubmrLELDLhS0PA1JasN8IgpHJcr0awCGSJ1Mxw%2FCLMw1%2BcW4qVsaeR8Vea8VLOqwuXA6MjflGWGjdqSie6S1eSBXyJ2QMAsR0LaT8i4Rw75hIZh86mcb4cwYmHyHYQHJlnzCn7JkcBhzklZp6Ds%2B%2FGi9hHJ0bAVDSllXdd1s4DyVMz8J2Qh2trcwEJzMLC6%2FsAGOqUBr9ZMF7Ws4H8HxFwcr2a1odf6y7TSzB1igGcdXOafe8PLKyOqqQ8LZA1PW8iPwGkH4vpZwMwlgvcHMviYaW1YJtjDw5QdfwR6AP3lup21keWqF2r%2FoxakFLXWAVfxexz%2BPUq9r1YGDxOEswiCDZ0I8q0CAXVSKt4O5lMNMWgDaYPK8kZuomcNs8zkA3Q17fblXCgNqTK8tYLGs3CViYxVnWuWO%2BH%2F&X-Amz-Signature=c4fe0bfb1c5717ff385c2170cb02c10f508fc05885a9f952f621554fc553d699&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466442CTTFV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIETgfVucrfccbKV9FYsfnVba00uHiXBqrKmDkE6RXpIoAiEAtt8svphPFMT7kps4IUFkpktXBfPid61YMBaqVlFxmz0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXV5mF6XaZy7qdA0ircA9WI41QRHX5ckyOp85sLQMDFNRzwco2Tf1V5vh2nyOQXphNg6ED9i8yJlfnZsewKZH7icfTYRRLG0lM0A0LYHghvRRLau%2FjNAoT010va38%2Bxuka53YU3kUcng9rr7O7sN9Uh6HbBBEF32yW6jaPnICe7dePCle%2Bn%2FHNrUamxXlr%2FIMSG0RA%2FbWTBqtS8ewv3qYcM67sXcAM2buYUyhHRmaH18ceI84d0UaphZ4oFLrK9KVbShmEWbvOY32yok0LO3xJBNAYlUDLK8nl638JGzS8XJw%2BxcrqT6kP0Cee5Rs3mKqFgGsL586ptMAelreXSgu%2B3gL62k%2BkJaOWbCvMHVj7ySyHYinf4PXLOlNbJQDzdU3HTynrK1fHrkIr4nG67IisVsR11xieaGDD3WHlih1qJtqHuAv3gq8xbvWDKVCccjzvORmj8%2BvQyEtameCB7vubmrLELDLhS0PA1JasN8IgpHJcr0awCGSJ1Mxw%2FCLMw1%2BcW4qVsaeR8Vea8VLOqwuXA6MjflGWGjdqSie6S1eSBXyJ2QMAsR0LaT8i4Rw75hIZh86mcb4cwYmHyHYQHJlnzCn7JkcBhzklZp6Ds%2B%2FGi9hHJ0bAVDSllXdd1s4DyVMz8J2Qh2trcwEJzMLC6%2FsAGOqUBr9ZMF7Ws4H8HxFwcr2a1odf6y7TSzB1igGcdXOafe8PLKyOqqQ8LZA1PW8iPwGkH4vpZwMwlgvcHMviYaW1YJtjDw5QdfwR6AP3lup21keWqF2r%2FoxakFLXWAVfxexz%2BPUq9r1YGDxOEswiCDZ0I8q0CAXVSKt4O5lMNMWgDaYPK8kZuomcNs8zkA3Q17fblXCgNqTK8tYLGs3CViYxVnWuWO%2BH%2F&X-Amz-Signature=8c1f19cfb4333aacd7f96c04bed9322be52b844d2968d5a1d5da288bd492def2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
