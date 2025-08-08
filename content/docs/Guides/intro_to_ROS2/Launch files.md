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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBAHUFV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCmp64Ehjq6%2B%2FNaTuA0VEv2sjXRuu0xIMxadU66OSptWQIhALRWC%2F9UYOf309ecGOcEf0dmhlmf5pL9dbL85t8OnDNmKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj%2FEzcjUy5PEN98Y0q3APfNzpYshXedNuVVNWJAA2vFK55G5gKdxd6Ykf2qL4Xt2cS%2F0De%2FVaJF4n3uKox1YOpd4Ko2Yh8Aq6OX4O0LkoVuE9XaTV9mDhD%2BPB3iuSzB2t6EF973HNRY%2FVIgrfUoFSvJwjQ8EX34%2B5WTdjWvAv9nxGNx9iQ6rXAq3AIL2nDeKUzMK9RjILUASP3McR0ZzbQIttu8mJRWDne603R3M6414aBEauZ6Vn4XkGfyoz3XsxWoc4WS%2Bo8Wv0x1vdXdo58aPF99klOodU9Z4EfjJkQJmHSTmZfyiMvBEH3E7DCwrZSgarmYixdCtCPvO3UQNFta4wj8zoYkm8AGTBk3WtEmo65waglaK9ELTO09oFwKrrwdTnqF1mGyTBpdFlYzF%2B0BE%2Fj1QkjJDbgGoGKf2oWCvJ8uQlwQTUZnZDJM0rDJx8xtUwkju3vOVPfcKXPaojsEpXCbe8sonDsmtEK4JOmaFHA4x3rhNLnzWfA7WzcVOjyMWuGu1fDoph%2B7QguLhIf2MzBGbB2oCY1mny%2FOuDHpCIYsg4gwBNeUzaNH9pt8h6jQLfoFGF%2Brmg046icago3Xaf%2BG71qEW2KzlbwIRWg3XlOZR99LUlO2es8ifdu2infdTmFnYMKgElK5DDNp9jEBjqkAa3RGLD%2Bg8%2Fm8UQupXi5cMQVd0cjARGSni02EuG0yqS7ZpDWwBY5eoyuF8oAoFwnQ3pg7ZUsNceXrF%2Fze74ecpALXXdZQ41l9E%2FWXxio2XhQ6juTdnV%2Flnev%2BITYPiGLchTVOQNmypv7Z3KgqKWmCNKPf%2Bwi1eqJZAcyROK1%2BTECRAGADTufZEa7wbhqK%2F%2BxoPchZWdQOOczM6v28ez32QhcL%2Bkv&X-Amz-Signature=35f45331173bbac37095bc389980b4358478dfa74067881f75053260f0b192ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBAHUFV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCmp64Ehjq6%2B%2FNaTuA0VEv2sjXRuu0xIMxadU66OSptWQIhALRWC%2F9UYOf309ecGOcEf0dmhlmf5pL9dbL85t8OnDNmKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj%2FEzcjUy5PEN98Y0q3APfNzpYshXedNuVVNWJAA2vFK55G5gKdxd6Ykf2qL4Xt2cS%2F0De%2FVaJF4n3uKox1YOpd4Ko2Yh8Aq6OX4O0LkoVuE9XaTV9mDhD%2BPB3iuSzB2t6EF973HNRY%2FVIgrfUoFSvJwjQ8EX34%2B5WTdjWvAv9nxGNx9iQ6rXAq3AIL2nDeKUzMK9RjILUASP3McR0ZzbQIttu8mJRWDne603R3M6414aBEauZ6Vn4XkGfyoz3XsxWoc4WS%2Bo8Wv0x1vdXdo58aPF99klOodU9Z4EfjJkQJmHSTmZfyiMvBEH3E7DCwrZSgarmYixdCtCPvO3UQNFta4wj8zoYkm8AGTBk3WtEmo65waglaK9ELTO09oFwKrrwdTnqF1mGyTBpdFlYzF%2B0BE%2Fj1QkjJDbgGoGKf2oWCvJ8uQlwQTUZnZDJM0rDJx8xtUwkju3vOVPfcKXPaojsEpXCbe8sonDsmtEK4JOmaFHA4x3rhNLnzWfA7WzcVOjyMWuGu1fDoph%2B7QguLhIf2MzBGbB2oCY1mny%2FOuDHpCIYsg4gwBNeUzaNH9pt8h6jQLfoFGF%2Brmg046icago3Xaf%2BG71qEW2KzlbwIRWg3XlOZR99LUlO2es8ifdu2infdTmFnYMKgElK5DDNp9jEBjqkAa3RGLD%2Bg8%2Fm8UQupXi5cMQVd0cjARGSni02EuG0yqS7ZpDWwBY5eoyuF8oAoFwnQ3pg7ZUsNceXrF%2Fze74ecpALXXdZQ41l9E%2FWXxio2XhQ6juTdnV%2Flnev%2BITYPiGLchTVOQNmypv7Z3KgqKWmCNKPf%2Bwi1eqJZAcyROK1%2BTECRAGADTufZEa7wbhqK%2F%2BxoPchZWdQOOczM6v28ez32QhcL%2Bkv&X-Amz-Signature=7479a2805f724524e4102f1004d0644916a016b2d4f636305001fc22f856a9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBAHUFV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCmp64Ehjq6%2B%2FNaTuA0VEv2sjXRuu0xIMxadU66OSptWQIhALRWC%2F9UYOf309ecGOcEf0dmhlmf5pL9dbL85t8OnDNmKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj%2FEzcjUy5PEN98Y0q3APfNzpYshXedNuVVNWJAA2vFK55G5gKdxd6Ykf2qL4Xt2cS%2F0De%2FVaJF4n3uKox1YOpd4Ko2Yh8Aq6OX4O0LkoVuE9XaTV9mDhD%2BPB3iuSzB2t6EF973HNRY%2FVIgrfUoFSvJwjQ8EX34%2B5WTdjWvAv9nxGNx9iQ6rXAq3AIL2nDeKUzMK9RjILUASP3McR0ZzbQIttu8mJRWDne603R3M6414aBEauZ6Vn4XkGfyoz3XsxWoc4WS%2Bo8Wv0x1vdXdo58aPF99klOodU9Z4EfjJkQJmHSTmZfyiMvBEH3E7DCwrZSgarmYixdCtCPvO3UQNFta4wj8zoYkm8AGTBk3WtEmo65waglaK9ELTO09oFwKrrwdTnqF1mGyTBpdFlYzF%2B0BE%2Fj1QkjJDbgGoGKf2oWCvJ8uQlwQTUZnZDJM0rDJx8xtUwkju3vOVPfcKXPaojsEpXCbe8sonDsmtEK4JOmaFHA4x3rhNLnzWfA7WzcVOjyMWuGu1fDoph%2B7QguLhIf2MzBGbB2oCY1mny%2FOuDHpCIYsg4gwBNeUzaNH9pt8h6jQLfoFGF%2Brmg046icago3Xaf%2BG71qEW2KzlbwIRWg3XlOZR99LUlO2es8ifdu2infdTmFnYMKgElK5DDNp9jEBjqkAa3RGLD%2Bg8%2Fm8UQupXi5cMQVd0cjARGSni02EuG0yqS7ZpDWwBY5eoyuF8oAoFwnQ3pg7ZUsNceXrF%2Fze74ecpALXXdZQ41l9E%2FWXxio2XhQ6juTdnV%2Flnev%2BITYPiGLchTVOQNmypv7Z3KgqKWmCNKPf%2Bwi1eqJZAcyROK1%2BTECRAGADTufZEa7wbhqK%2F%2BxoPchZWdQOOczM6v28ez32QhcL%2Bkv&X-Amz-Signature=42dc37eb74c64804d51e23e8048f07e2cd2f37e6157ec168c433a6fb7b31b6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
