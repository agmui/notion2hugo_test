---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU6LMLL%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkDm1t4vfymvMalB25DjCxW84764%2BT5atUcn3fOY3jXAiEA8Tw%2F5SkjKEi7wAMVVGx01QaYjIlc%2FWZA%2F1olTRoyOqoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOZNEHBkdFFsLYLAiyrcA1Pj8HJKvhYKEIdB9%2FyN74RnYv4svIHM6DhDEaipw2%2BweNQs5VIqpp1n3aRD3%2BrIk6hV56q9DABVLyQJuic5%2BDRwu01ftY3ujNh1eT9CeI8R6y1xOq3JdxgKC43%2Bs1sgcwD24yeqrhpBomMMnN8bl6Te4N24SfMUqtMgObTt2HEMLfZy%2BQPDq5cIRSnPn5dHHQGvNMEoafuWh6SqK24x2aD0aFMfmGzGTTXW4EMFdbRewbvH31jcIkDKoDhH1oTlG6VC6WmlppAnPVgSDpDWiDRDBvRasgNF4LzLtTJl81rJTAKrUEk%2FNHlVOeaQper4%2FWUx5YmNYZXDDfbbV%2FvHxaBuHgBXQoxaqOq2JlouIWcttjCvu3kg6fb%2FrosKJYbTbwwnCnBVmeYCpJA6Kd85wFkFVS6yPx8ENScziupSuyE6V%2BURg2AgKHT4mgSSPFzsGJW8FZMdMWHorrwc%2FEZAHJLyAfAuJJonZ7LO4X1Uoo%2FNoKAu%2Bp19%2BI0WYvLRfeKpQLsNeIF5LCN2NSl06wZrA%2FSNPQktOgw%2FBuiT5uC8CC%2B0XXZP0WupVlyjuFUSRuhZtvrgK6io9GHu6ETOpaP%2F5M2HT9rkrIgdOcNEuguHlldaijs0J77V3sJ4z3EWMJfV3tMGOqUBNUoJVXwsTVnQSXdgP5XyqxMuIj0tznH5UhnCDjxzZpZ%2FPBd%2BYmN%2BBqxGlRRmJfBO9OH2qrmri6XIubiDK3O6oyOSZsrbfxyqfEnSf0F2Vi0K%2FnviLxmpIVzxW6rZgty8Mosni3sPzTbkcVXEISCUT9awwPPQKqqVSzKae2SGkiTUtYGTpMMx%2FZuJeOx43W5DL0i1QoDYqdIsYmhFebcjmnSYqWqE&X-Amz-Signature=c91620b3ae9774ee481dee7725812f12d1b657f79889a5692a096eb4a06ba6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU6LMLL%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkDm1t4vfymvMalB25DjCxW84764%2BT5atUcn3fOY3jXAiEA8Tw%2F5SkjKEi7wAMVVGx01QaYjIlc%2FWZA%2F1olTRoyOqoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOZNEHBkdFFsLYLAiyrcA1Pj8HJKvhYKEIdB9%2FyN74RnYv4svIHM6DhDEaipw2%2BweNQs5VIqpp1n3aRD3%2BrIk6hV56q9DABVLyQJuic5%2BDRwu01ftY3ujNh1eT9CeI8R6y1xOq3JdxgKC43%2Bs1sgcwD24yeqrhpBomMMnN8bl6Te4N24SfMUqtMgObTt2HEMLfZy%2BQPDq5cIRSnPn5dHHQGvNMEoafuWh6SqK24x2aD0aFMfmGzGTTXW4EMFdbRewbvH31jcIkDKoDhH1oTlG6VC6WmlppAnPVgSDpDWiDRDBvRasgNF4LzLtTJl81rJTAKrUEk%2FNHlVOeaQper4%2FWUx5YmNYZXDDfbbV%2FvHxaBuHgBXQoxaqOq2JlouIWcttjCvu3kg6fb%2FrosKJYbTbwwnCnBVmeYCpJA6Kd85wFkFVS6yPx8ENScziupSuyE6V%2BURg2AgKHT4mgSSPFzsGJW8FZMdMWHorrwc%2FEZAHJLyAfAuJJonZ7LO4X1Uoo%2FNoKAu%2Bp19%2BI0WYvLRfeKpQLsNeIF5LCN2NSl06wZrA%2FSNPQktOgw%2FBuiT5uC8CC%2B0XXZP0WupVlyjuFUSRuhZtvrgK6io9GHu6ETOpaP%2F5M2HT9rkrIgdOcNEuguHlldaijs0J77V3sJ4z3EWMJfV3tMGOqUBNUoJVXwsTVnQSXdgP5XyqxMuIj0tznH5UhnCDjxzZpZ%2FPBd%2BYmN%2BBqxGlRRmJfBO9OH2qrmri6XIubiDK3O6oyOSZsrbfxyqfEnSf0F2Vi0K%2FnviLxmpIVzxW6rZgty8Mosni3sPzTbkcVXEISCUT9awwPPQKqqVSzKae2SGkiTUtYGTpMMx%2FZuJeOx43W5DL0i1QoDYqdIsYmhFebcjmnSYqWqE&X-Amz-Signature=46c38b10a657d590b192e41e0ac0aa52dca1172167e08dffc8307071fda1ea83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU6LMLL%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkDm1t4vfymvMalB25DjCxW84764%2BT5atUcn3fOY3jXAiEA8Tw%2F5SkjKEi7wAMVVGx01QaYjIlc%2FWZA%2F1olTRoyOqoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOZNEHBkdFFsLYLAiyrcA1Pj8HJKvhYKEIdB9%2FyN74RnYv4svIHM6DhDEaipw2%2BweNQs5VIqpp1n3aRD3%2BrIk6hV56q9DABVLyQJuic5%2BDRwu01ftY3ujNh1eT9CeI8R6y1xOq3JdxgKC43%2Bs1sgcwD24yeqrhpBomMMnN8bl6Te4N24SfMUqtMgObTt2HEMLfZy%2BQPDq5cIRSnPn5dHHQGvNMEoafuWh6SqK24x2aD0aFMfmGzGTTXW4EMFdbRewbvH31jcIkDKoDhH1oTlG6VC6WmlppAnPVgSDpDWiDRDBvRasgNF4LzLtTJl81rJTAKrUEk%2FNHlVOeaQper4%2FWUx5YmNYZXDDfbbV%2FvHxaBuHgBXQoxaqOq2JlouIWcttjCvu3kg6fb%2FrosKJYbTbwwnCnBVmeYCpJA6Kd85wFkFVS6yPx8ENScziupSuyE6V%2BURg2AgKHT4mgSSPFzsGJW8FZMdMWHorrwc%2FEZAHJLyAfAuJJonZ7LO4X1Uoo%2FNoKAu%2Bp19%2BI0WYvLRfeKpQLsNeIF5LCN2NSl06wZrA%2FSNPQktOgw%2FBuiT5uC8CC%2B0XXZP0WupVlyjuFUSRuhZtvrgK6io9GHu6ETOpaP%2F5M2HT9rkrIgdOcNEuguHlldaijs0J77V3sJ4z3EWMJfV3tMGOqUBNUoJVXwsTVnQSXdgP5XyqxMuIj0tznH5UhnCDjxzZpZ%2FPBd%2BYmN%2BBqxGlRRmJfBO9OH2qrmri6XIubiDK3O6oyOSZsrbfxyqfEnSf0F2Vi0K%2FnviLxmpIVzxW6rZgty8Mosni3sPzTbkcVXEISCUT9awwPPQKqqVSzKae2SGkiTUtYGTpMMx%2FZuJeOx43W5DL0i1QoDYqdIsYmhFebcjmnSYqWqE&X-Amz-Signature=fce47f5ac1b92b7e628c1b2e1f740f86a40eafb298cc5746329aafb8294d9b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
