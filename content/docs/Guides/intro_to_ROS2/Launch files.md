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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQQWLHH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUtQJrjp0Jor03CSWpdRXJYR%2Bi7gijcSLzYN%2FNInjXvAiEAmIixcTblU%2Fo9kZ94TDceYeVuJG477xtB9gfrI686jDMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgIjK2JTtu485dVzircA4xlsuEd3yzNQErvdl9yOkmRGfybnRcaxqZBo29rSRuWz59rq%2BSnkX2wraI%2BRaYc0A3SNQS80TlCbaaamCIKKqs%2FNEf2Ndfh9xIVvet9r0irYXaUU3LkcQC0dAXmVw%2FPf1Yau7ztbKGRvA34Y1Y0L3AOMkkas4ayqd6C8HKUBag0yzWj9Jk4mP33GFTRPpJdfg2hFJmMojx3k8YKwI3Kv%2FoTu5PYsG%2FXOK%2BYZtew%2F9Bp8zHAhDJJX5HZ7teLb2ZtCFDZ%2FXFUhplUvj1Bdad5ppZV57CkubVW0rw2lx58Z9KeQtkhBv7p0UNn63Rr9on0FLAPk8v%2FZLeXa1w2mhnnGaBDWFifyhkSpLpw1Fdcb7t0StKfGMkm1QO93a9ehx4qN%2BAfQUXrqZMXrHoyQTKdqAWkWOmX1Jro%2BPzSAjF9dVMB1ezu52xwGAWxAvfEaQq3nhl8LxSjQssW%2Bd6gWqkiD2PMfWSwZYj4C3NX6MNXVMG%2B%2FYtz62NcVJRlMzLNbJ3lW45HJh7cp%2FvFjg3r0UHDYxRzezAYkGoCGSiUTpjTbYeEP3ADpCN5%2FIxu5UFcapfj5ig1UK3Xgo5a76orTcOMRA1wJOmiPvhS9LTYnWNQfZV%2BCaAtW5kKZWPyUpVYMPvSrL0GOqUBU4u8gdSvkw2Q5KFjI%2FxP%2BHQbndE7afy8aEiNuvqZGgmtmcbhDk3Il3IFdsYmSYCTkbHEi27hKT6OC6DXjzOhHf4qBocVMMu%2BRBPJ%2B55PxvFWzkzgOxS%2BjiQeipEMunqxq%2BD78tzZr0zHR68e6T5ftjwntD9atmCta9WmzEAJ0Oin3JW%2Fp7jmSF3mcM1EphvnBcb4quHjy3kJw4d%2FAJCT9%2BreFABp&X-Amz-Signature=66f92241f197482466065e8592740b55f8a1fada02a49386f60a219515468100&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQQWLHH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUtQJrjp0Jor03CSWpdRXJYR%2Bi7gijcSLzYN%2FNInjXvAiEAmIixcTblU%2Fo9kZ94TDceYeVuJG477xtB9gfrI686jDMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgIjK2JTtu485dVzircA4xlsuEd3yzNQErvdl9yOkmRGfybnRcaxqZBo29rSRuWz59rq%2BSnkX2wraI%2BRaYc0A3SNQS80TlCbaaamCIKKqs%2FNEf2Ndfh9xIVvet9r0irYXaUU3LkcQC0dAXmVw%2FPf1Yau7ztbKGRvA34Y1Y0L3AOMkkas4ayqd6C8HKUBag0yzWj9Jk4mP33GFTRPpJdfg2hFJmMojx3k8YKwI3Kv%2FoTu5PYsG%2FXOK%2BYZtew%2F9Bp8zHAhDJJX5HZ7teLb2ZtCFDZ%2FXFUhplUvj1Bdad5ppZV57CkubVW0rw2lx58Z9KeQtkhBv7p0UNn63Rr9on0FLAPk8v%2FZLeXa1w2mhnnGaBDWFifyhkSpLpw1Fdcb7t0StKfGMkm1QO93a9ehx4qN%2BAfQUXrqZMXrHoyQTKdqAWkWOmX1Jro%2BPzSAjF9dVMB1ezu52xwGAWxAvfEaQq3nhl8LxSjQssW%2Bd6gWqkiD2PMfWSwZYj4C3NX6MNXVMG%2B%2FYtz62NcVJRlMzLNbJ3lW45HJh7cp%2FvFjg3r0UHDYxRzezAYkGoCGSiUTpjTbYeEP3ADpCN5%2FIxu5UFcapfj5ig1UK3Xgo5a76orTcOMRA1wJOmiPvhS9LTYnWNQfZV%2BCaAtW5kKZWPyUpVYMPvSrL0GOqUBU4u8gdSvkw2Q5KFjI%2FxP%2BHQbndE7afy8aEiNuvqZGgmtmcbhDk3Il3IFdsYmSYCTkbHEi27hKT6OC6DXjzOhHf4qBocVMMu%2BRBPJ%2B55PxvFWzkzgOxS%2BjiQeipEMunqxq%2BD78tzZr0zHR68e6T5ftjwntD9atmCta9WmzEAJ0Oin3JW%2Fp7jmSF3mcM1EphvnBcb4quHjy3kJw4d%2FAJCT9%2BreFABp&X-Amz-Signature=433f5c2d8691ffff08a0ac4c3da186e0f26f76100bd59696f5540b2a639a84b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQQWLHH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUtQJrjp0Jor03CSWpdRXJYR%2Bi7gijcSLzYN%2FNInjXvAiEAmIixcTblU%2Fo9kZ94TDceYeVuJG477xtB9gfrI686jDMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgIjK2JTtu485dVzircA4xlsuEd3yzNQErvdl9yOkmRGfybnRcaxqZBo29rSRuWz59rq%2BSnkX2wraI%2BRaYc0A3SNQS80TlCbaaamCIKKqs%2FNEf2Ndfh9xIVvet9r0irYXaUU3LkcQC0dAXmVw%2FPf1Yau7ztbKGRvA34Y1Y0L3AOMkkas4ayqd6C8HKUBag0yzWj9Jk4mP33GFTRPpJdfg2hFJmMojx3k8YKwI3Kv%2FoTu5PYsG%2FXOK%2BYZtew%2F9Bp8zHAhDJJX5HZ7teLb2ZtCFDZ%2FXFUhplUvj1Bdad5ppZV57CkubVW0rw2lx58Z9KeQtkhBv7p0UNn63Rr9on0FLAPk8v%2FZLeXa1w2mhnnGaBDWFifyhkSpLpw1Fdcb7t0StKfGMkm1QO93a9ehx4qN%2BAfQUXrqZMXrHoyQTKdqAWkWOmX1Jro%2BPzSAjF9dVMB1ezu52xwGAWxAvfEaQq3nhl8LxSjQssW%2Bd6gWqkiD2PMfWSwZYj4C3NX6MNXVMG%2B%2FYtz62NcVJRlMzLNbJ3lW45HJh7cp%2FvFjg3r0UHDYxRzezAYkGoCGSiUTpjTbYeEP3ADpCN5%2FIxu5UFcapfj5ig1UK3Xgo5a76orTcOMRA1wJOmiPvhS9LTYnWNQfZV%2BCaAtW5kKZWPyUpVYMPvSrL0GOqUBU4u8gdSvkw2Q5KFjI%2FxP%2BHQbndE7afy8aEiNuvqZGgmtmcbhDk3Il3IFdsYmSYCTkbHEi27hKT6OC6DXjzOhHf4qBocVMMu%2BRBPJ%2B55PxvFWzkzgOxS%2BjiQeipEMunqxq%2BD78tzZr0zHR68e6T5ftjwntD9atmCta9WmzEAJ0Oin3JW%2Fp7jmSF3mcM1EphvnBcb4quHjy3kJw4d%2FAJCT9%2BreFABp&X-Amz-Signature=f5782c504929fb4ac13f4f85eadcea653fe22eab19bfada7c343b9c8cf6ced63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
