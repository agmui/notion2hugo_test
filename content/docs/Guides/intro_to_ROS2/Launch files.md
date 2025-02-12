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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SE3NUQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BHj%2FzgKp%2F%2Bjqk9rLGCT6g3vi49cOZvsbgbABruBVEDAiBkgq13uCVYwcWdPF4YT4bQ%2BFJlHm8DsAtfYzrVymj0WCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeAJFtgmgZ2hT0aOKtwD%2B2w8opmvvueuQWruDD3qxjVdBtTpizoUF28IsfSzCfei67EcsWceHZlhA0nFj%2BfOOxqVd6e6kIIMe%2BT09rpDeFn%2FqUmpFKy4F9Wm1uU8CYQGk6ex2JTHm%2BNQuX52EsoT8vDAP%2BzupeOndnBjOmg0jkuXMR1%2F2PQeLfB5MBlMvtJ%2Bj2tn3EJy2txOnc40ofH9otNQrbKP0EVfY1sDcV9k2IJvLf1wg2cfKtmJLd6Q8keqzvJo3I0ihcqDo1g44RbYw%2FswkKfjg9udNH6tbmm%2Fh%2B5GALKlMb%2Fi2uDyPSm4NwOudPYQBDeje9uPZQCtMqrU9m7ZytYZ0BGk36xtTsVBeo6zpU2ofm0HxifdnoErSVSx3QxASaVsehmMuU4WALxU27IIQFyvsSy382ZFCuImY10N%2FyEiwZe1eOVEj82T2Xu%2BX%2BFTxgbPRJBGnzaKxcPKvnT5E5MX15k6pTt0v74%2FaoEgo3XAm3%2BUJZaLHBRit0KQ%2FX3VxDTuGHz2WFwOEY5cjbSplqE2BI1aFrimoUcScJNLTVLEsMGMf4rv4E%2Fo2FpCwhrQXpx5EW7lTruhoIuZ9%2FGJOlYjOLFfg%2BhzzSYZVv%2FqQBVMsPnP6CU0TbURiyIUz90rbx6nCuGR6EowmpGxvQY6pgED%2FE5%2BJwVzEAK%2BpuR5ao%2BMbiDjbYeFwMOPkWZtCuoEaFeqlprNpct45oZQInEEuBZ9Sayoc8Niv5pjBJ4XT1x0qnQDdsxApFPOMsB6j7UaiE8%2FEMt1XYOHLvE%2B0qpw1nr9sWXyBqtvB6YDLKnNtsMtkgQP%2Fj%2BCqMACaFarxd%2BVbGcqX4E3EJgDNpdwZxBlLQ5C7HToOckbZtcOdb9lTO3GAEBepdEB&X-Amz-Signature=2684d93091f42015e2e72691b3530dc6230606b39d313587f9bdd69d154f8f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SE3NUQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BHj%2FzgKp%2F%2Bjqk9rLGCT6g3vi49cOZvsbgbABruBVEDAiBkgq13uCVYwcWdPF4YT4bQ%2BFJlHm8DsAtfYzrVymj0WCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeAJFtgmgZ2hT0aOKtwD%2B2w8opmvvueuQWruDD3qxjVdBtTpizoUF28IsfSzCfei67EcsWceHZlhA0nFj%2BfOOxqVd6e6kIIMe%2BT09rpDeFn%2FqUmpFKy4F9Wm1uU8CYQGk6ex2JTHm%2BNQuX52EsoT8vDAP%2BzupeOndnBjOmg0jkuXMR1%2F2PQeLfB5MBlMvtJ%2Bj2tn3EJy2txOnc40ofH9otNQrbKP0EVfY1sDcV9k2IJvLf1wg2cfKtmJLd6Q8keqzvJo3I0ihcqDo1g44RbYw%2FswkKfjg9udNH6tbmm%2Fh%2B5GALKlMb%2Fi2uDyPSm4NwOudPYQBDeje9uPZQCtMqrU9m7ZytYZ0BGk36xtTsVBeo6zpU2ofm0HxifdnoErSVSx3QxASaVsehmMuU4WALxU27IIQFyvsSy382ZFCuImY10N%2FyEiwZe1eOVEj82T2Xu%2BX%2BFTxgbPRJBGnzaKxcPKvnT5E5MX15k6pTt0v74%2FaoEgo3XAm3%2BUJZaLHBRit0KQ%2FX3VxDTuGHz2WFwOEY5cjbSplqE2BI1aFrimoUcScJNLTVLEsMGMf4rv4E%2Fo2FpCwhrQXpx5EW7lTruhoIuZ9%2FGJOlYjOLFfg%2BhzzSYZVv%2FqQBVMsPnP6CU0TbURiyIUz90rbx6nCuGR6EowmpGxvQY6pgED%2FE5%2BJwVzEAK%2BpuR5ao%2BMbiDjbYeFwMOPkWZtCuoEaFeqlprNpct45oZQInEEuBZ9Sayoc8Niv5pjBJ4XT1x0qnQDdsxApFPOMsB6j7UaiE8%2FEMt1XYOHLvE%2B0qpw1nr9sWXyBqtvB6YDLKnNtsMtkgQP%2Fj%2BCqMACaFarxd%2BVbGcqX4E3EJgDNpdwZxBlLQ5C7HToOckbZtcOdb9lTO3GAEBepdEB&X-Amz-Signature=b28d5a715a64a1fac2f89ef3e10545d75f9a32885603094ae0dac77ac5354285&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SE3NUQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BHj%2FzgKp%2F%2Bjqk9rLGCT6g3vi49cOZvsbgbABruBVEDAiBkgq13uCVYwcWdPF4YT4bQ%2BFJlHm8DsAtfYzrVymj0WCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeAJFtgmgZ2hT0aOKtwD%2B2w8opmvvueuQWruDD3qxjVdBtTpizoUF28IsfSzCfei67EcsWceHZlhA0nFj%2BfOOxqVd6e6kIIMe%2BT09rpDeFn%2FqUmpFKy4F9Wm1uU8CYQGk6ex2JTHm%2BNQuX52EsoT8vDAP%2BzupeOndnBjOmg0jkuXMR1%2F2PQeLfB5MBlMvtJ%2Bj2tn3EJy2txOnc40ofH9otNQrbKP0EVfY1sDcV9k2IJvLf1wg2cfKtmJLd6Q8keqzvJo3I0ihcqDo1g44RbYw%2FswkKfjg9udNH6tbmm%2Fh%2B5GALKlMb%2Fi2uDyPSm4NwOudPYQBDeje9uPZQCtMqrU9m7ZytYZ0BGk36xtTsVBeo6zpU2ofm0HxifdnoErSVSx3QxASaVsehmMuU4WALxU27IIQFyvsSy382ZFCuImY10N%2FyEiwZe1eOVEj82T2Xu%2BX%2BFTxgbPRJBGnzaKxcPKvnT5E5MX15k6pTt0v74%2FaoEgo3XAm3%2BUJZaLHBRit0KQ%2FX3VxDTuGHz2WFwOEY5cjbSplqE2BI1aFrimoUcScJNLTVLEsMGMf4rv4E%2Fo2FpCwhrQXpx5EW7lTruhoIuZ9%2FGJOlYjOLFfg%2BhzzSYZVv%2FqQBVMsPnP6CU0TbURiyIUz90rbx6nCuGR6EowmpGxvQY6pgED%2FE5%2BJwVzEAK%2BpuR5ao%2BMbiDjbYeFwMOPkWZtCuoEaFeqlprNpct45oZQInEEuBZ9Sayoc8Niv5pjBJ4XT1x0qnQDdsxApFPOMsB6j7UaiE8%2FEMt1XYOHLvE%2B0qpw1nr9sWXyBqtvB6YDLKnNtsMtkgQP%2Fj%2BCqMACaFarxd%2BVbGcqX4E3EJgDNpdwZxBlLQ5C7HToOckbZtcOdb9lTO3GAEBepdEB&X-Amz-Signature=f753619c48d6e6c89082a98be46cb68b2b7e4635d36ef97e7259ec2e830f4437&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
