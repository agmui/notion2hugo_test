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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZBF7NM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdP%2FZX%2B8cPjIyvFFeQYsz6LtDKOGjt%2BcEz72OSqKZUqwIhAI%2F5nRx2nknV45fUI2m9eA12eZtay9RUQF654WnjfJqDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDElDApr4BnVQMBr0q3APip82hl8Qcrg%2B2SvaFUpVIwXquYtJwWLiLk69UMosQoeYpCG7x041FRyyUoj3%2BasUA3FRqBtQBjCsCDLlicp6P87PllZ92dH5ot5UBdYNmLPOp5GgHcK8ZRiJnSl3EFE7kfNBh1xGoPrrorRLd6A26DqTnIi2Cps5VjniDkn2iiajineOI%2FosJH0aIKkPK9ze0oeVHW%2BbLea3jDNELOdLkUnKScTkvqR%2Bp%2FbSf%2FTXgWgLnIc%2F8JA5q6m%2BIzs%2FMZhwy%2B2gYHs6wX%2BuD8uke%2BZoQdbWqK70OaaO3d1RgIloEEiNbb9WChTMkgOmvFYMW2vQ8pkEFx%2Bcxp%2BTokN6GNrvfVsjvDdG%2BC15dC9%2BDmCyryL0tc7gC8NiSIEEDVGXTOC%2BonjjdrhcS0nvkLfMq3MkdCS4MW8zZiBn9kYg1dBQiWY6uxPd9w4ufC6PSk1vpitBB%2FyLfpL6Ql8M31JZblf0d%2B1w38f3fHZ2QDYRLHwMQQErT8ZMovVYIlgPriZMjisxDypcFK%2FaOZ9GQUzfoxZbl3CNpAFRTdAg3jEDj2VNrbB3zMDNZBgkB1KZ0UuJwJYyDNOsssSWRo79zHK3k8m8XGgRMMPLCTQ1CsBTEz7NQGpo9CfQnjDt63pme3jDozYvABjqkAbnU9w9Niw28L2SAA6Njq%2F8Mnji0xGBykU250AWEBG293YLOR7UcmsgAKhzJVrJXBWTr4Nc4hFyyO5YjHY%2BdAbxqi%2BsppBJunYlkGdAYCd47hIcR65IYARl9mlGxktvMkabZ%2BkuudWOkIFfIvdIxblWPpm7zwBfL1Kh2FSQ%2BXBJwcl6UVTxrHPgJaF4aejxqExdyNAmqZpLeBD3CPW9ZhdzTuAjB&X-Amz-Signature=cd02d7629fec7eeb1f1fdbec7cf8f20fb0f9dc5bdee8695530a859982825f6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZBF7NM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdP%2FZX%2B8cPjIyvFFeQYsz6LtDKOGjt%2BcEz72OSqKZUqwIhAI%2F5nRx2nknV45fUI2m9eA12eZtay9RUQF654WnjfJqDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDElDApr4BnVQMBr0q3APip82hl8Qcrg%2B2SvaFUpVIwXquYtJwWLiLk69UMosQoeYpCG7x041FRyyUoj3%2BasUA3FRqBtQBjCsCDLlicp6P87PllZ92dH5ot5UBdYNmLPOp5GgHcK8ZRiJnSl3EFE7kfNBh1xGoPrrorRLd6A26DqTnIi2Cps5VjniDkn2iiajineOI%2FosJH0aIKkPK9ze0oeVHW%2BbLea3jDNELOdLkUnKScTkvqR%2Bp%2FbSf%2FTXgWgLnIc%2F8JA5q6m%2BIzs%2FMZhwy%2B2gYHs6wX%2BuD8uke%2BZoQdbWqK70OaaO3d1RgIloEEiNbb9WChTMkgOmvFYMW2vQ8pkEFx%2Bcxp%2BTokN6GNrvfVsjvDdG%2BC15dC9%2BDmCyryL0tc7gC8NiSIEEDVGXTOC%2BonjjdrhcS0nvkLfMq3MkdCS4MW8zZiBn9kYg1dBQiWY6uxPd9w4ufC6PSk1vpitBB%2FyLfpL6Ql8M31JZblf0d%2B1w38f3fHZ2QDYRLHwMQQErT8ZMovVYIlgPriZMjisxDypcFK%2FaOZ9GQUzfoxZbl3CNpAFRTdAg3jEDj2VNrbB3zMDNZBgkB1KZ0UuJwJYyDNOsssSWRo79zHK3k8m8XGgRMMPLCTQ1CsBTEz7NQGpo9CfQnjDt63pme3jDozYvABjqkAbnU9w9Niw28L2SAA6Njq%2F8Mnji0xGBykU250AWEBG293YLOR7UcmsgAKhzJVrJXBWTr4Nc4hFyyO5YjHY%2BdAbxqi%2BsppBJunYlkGdAYCd47hIcR65IYARl9mlGxktvMkabZ%2BkuudWOkIFfIvdIxblWPpm7zwBfL1Kh2FSQ%2BXBJwcl6UVTxrHPgJaF4aejxqExdyNAmqZpLeBD3CPW9ZhdzTuAjB&X-Amz-Signature=53340054665f65e8a1d9403276735975e1864f0d348450ac2cff155605097b83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZBF7NM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdP%2FZX%2B8cPjIyvFFeQYsz6LtDKOGjt%2BcEz72OSqKZUqwIhAI%2F5nRx2nknV45fUI2m9eA12eZtay9RUQF654WnjfJqDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDElDApr4BnVQMBr0q3APip82hl8Qcrg%2B2SvaFUpVIwXquYtJwWLiLk69UMosQoeYpCG7x041FRyyUoj3%2BasUA3FRqBtQBjCsCDLlicp6P87PllZ92dH5ot5UBdYNmLPOp5GgHcK8ZRiJnSl3EFE7kfNBh1xGoPrrorRLd6A26DqTnIi2Cps5VjniDkn2iiajineOI%2FosJH0aIKkPK9ze0oeVHW%2BbLea3jDNELOdLkUnKScTkvqR%2Bp%2FbSf%2FTXgWgLnIc%2F8JA5q6m%2BIzs%2FMZhwy%2B2gYHs6wX%2BuD8uke%2BZoQdbWqK70OaaO3d1RgIloEEiNbb9WChTMkgOmvFYMW2vQ8pkEFx%2Bcxp%2BTokN6GNrvfVsjvDdG%2BC15dC9%2BDmCyryL0tc7gC8NiSIEEDVGXTOC%2BonjjdrhcS0nvkLfMq3MkdCS4MW8zZiBn9kYg1dBQiWY6uxPd9w4ufC6PSk1vpitBB%2FyLfpL6Ql8M31JZblf0d%2B1w38f3fHZ2QDYRLHwMQQErT8ZMovVYIlgPriZMjisxDypcFK%2FaOZ9GQUzfoxZbl3CNpAFRTdAg3jEDj2VNrbB3zMDNZBgkB1KZ0UuJwJYyDNOsssSWRo79zHK3k8m8XGgRMMPLCTQ1CsBTEz7NQGpo9CfQnjDt63pme3jDozYvABjqkAbnU9w9Niw28L2SAA6Njq%2F8Mnji0xGBykU250AWEBG293YLOR7UcmsgAKhzJVrJXBWTr4Nc4hFyyO5YjHY%2BdAbxqi%2BsppBJunYlkGdAYCd47hIcR65IYARl9mlGxktvMkabZ%2BkuudWOkIFfIvdIxblWPpm7zwBfL1Kh2FSQ%2BXBJwcl6UVTxrHPgJaF4aejxqExdyNAmqZpLeBD3CPW9ZhdzTuAjB&X-Amz-Signature=876759c460d18843808158d715124cc03c13f8624a92152da24cd7fe334c27f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
