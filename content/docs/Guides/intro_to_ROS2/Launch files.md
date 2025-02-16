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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLHOQZN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBQH2teIojhD0c2J7jQnW4JTi15aWmxnis%2FDCs9QEnZ0AiEAtKK6Kp9btv8YM%2FtQbtZDbJC0MyoqG9HAVoqgddgkRwoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIYaBT%2FXun3%2Bc61xmCrcA6YejIJtp9WJakrkVh2K8jFEF7JN9oPHYOok5knLTD8cl8i1rPzqZTziXpra56R1Q2OidBzIXBJ%2BB%2FO70Uy42W3auII7QCzm2zyPGfxc1ha0hBJc%2BH2gM1FgLjCxsq43VCOVJW4wCZQzDjF3Z9hPlITXlS85dtmYMuo4KR2FdhPjgYqNmLcpE0HgHdhgYugIHueUB5zVlfIqbSvGqjtGpUS50vZeY8q2LSem%2FjLWAteo97Ntv2G%2BPPZorhu2FzxlUTxY9bxMgoJG8buRNxyTypFxHQT6AWEc6oKCZRfPBrgtMoHlDnlFiwJQaQDt5DSr4qEt3kYa3gG5AmvUtV4o3JyrOyi5P2emzS%2Bq%2BtELRGc2pXM5kDK6JIvA%2Biop2hGxbf5fIdevNXtWCjnVnjA9E%2BpJaMwlc7CSW4XGV4wFvFWqZflJ0spOpj180ZW2otNEqVFqJ2UKnWkM8I2WcKqspIwz%2F%2FtzN4JiGDrZ1ofyD4LsrFVGUO0CcmwT%2B%2FoieFWG4W3jxtyJjtsbvTAnXLdoU8wgqEtFeVCUtXEDHRxxRBHFGElj2cQxKHLAhSRnyDF%2FuM7IV5nxkaMWu43mQ0tL0TqmCmpqxWJ%2FF5Yhzb8L7Us6tjv624pTmCtB5MPkMKyqxb0GOqUBNxCsGyKPpbOInA%2B6kyxJ53jHLhxOkgTiL45qyw1Lib1gRSOtynR6EBNpf%2FYPq7WmdewJnUElSlquLbF9CTm1zkgypQ6lVfwbQ2Zk7T%2FnaNIhZu02ibv7kLyMr7a21LxqOZ7XEaidCuAmSWfFdQcAU88ssEfadXiNisoCuOOMCnUmklTOuJEgkaKQYQLVj237G1nYqzUkKgjtwNyYBewjoGH2sHZn&X-Amz-Signature=352d2a3b7a8f71e256289a55e1a912f023264426805312377e437b2eba42d2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLHOQZN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBQH2teIojhD0c2J7jQnW4JTi15aWmxnis%2FDCs9QEnZ0AiEAtKK6Kp9btv8YM%2FtQbtZDbJC0MyoqG9HAVoqgddgkRwoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIYaBT%2FXun3%2Bc61xmCrcA6YejIJtp9WJakrkVh2K8jFEF7JN9oPHYOok5knLTD8cl8i1rPzqZTziXpra56R1Q2OidBzIXBJ%2BB%2FO70Uy42W3auII7QCzm2zyPGfxc1ha0hBJc%2BH2gM1FgLjCxsq43VCOVJW4wCZQzDjF3Z9hPlITXlS85dtmYMuo4KR2FdhPjgYqNmLcpE0HgHdhgYugIHueUB5zVlfIqbSvGqjtGpUS50vZeY8q2LSem%2FjLWAteo97Ntv2G%2BPPZorhu2FzxlUTxY9bxMgoJG8buRNxyTypFxHQT6AWEc6oKCZRfPBrgtMoHlDnlFiwJQaQDt5DSr4qEt3kYa3gG5AmvUtV4o3JyrOyi5P2emzS%2Bq%2BtELRGc2pXM5kDK6JIvA%2Biop2hGxbf5fIdevNXtWCjnVnjA9E%2BpJaMwlc7CSW4XGV4wFvFWqZflJ0spOpj180ZW2otNEqVFqJ2UKnWkM8I2WcKqspIwz%2F%2FtzN4JiGDrZ1ofyD4LsrFVGUO0CcmwT%2B%2FoieFWG4W3jxtyJjtsbvTAnXLdoU8wgqEtFeVCUtXEDHRxxRBHFGElj2cQxKHLAhSRnyDF%2FuM7IV5nxkaMWu43mQ0tL0TqmCmpqxWJ%2FF5Yhzb8L7Us6tjv624pTmCtB5MPkMKyqxb0GOqUBNxCsGyKPpbOInA%2B6kyxJ53jHLhxOkgTiL45qyw1Lib1gRSOtynR6EBNpf%2FYPq7WmdewJnUElSlquLbF9CTm1zkgypQ6lVfwbQ2Zk7T%2FnaNIhZu02ibv7kLyMr7a21LxqOZ7XEaidCuAmSWfFdQcAU88ssEfadXiNisoCuOOMCnUmklTOuJEgkaKQYQLVj237G1nYqzUkKgjtwNyYBewjoGH2sHZn&X-Amz-Signature=7e01814211e87b62fd5f5a6e3f1c40a0ee307fa475bb50bddab6550296590bae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLHOQZN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBQH2teIojhD0c2J7jQnW4JTi15aWmxnis%2FDCs9QEnZ0AiEAtKK6Kp9btv8YM%2FtQbtZDbJC0MyoqG9HAVoqgddgkRwoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIYaBT%2FXun3%2Bc61xmCrcA6YejIJtp9WJakrkVh2K8jFEF7JN9oPHYOok5knLTD8cl8i1rPzqZTziXpra56R1Q2OidBzIXBJ%2BB%2FO70Uy42W3auII7QCzm2zyPGfxc1ha0hBJc%2BH2gM1FgLjCxsq43VCOVJW4wCZQzDjF3Z9hPlITXlS85dtmYMuo4KR2FdhPjgYqNmLcpE0HgHdhgYugIHueUB5zVlfIqbSvGqjtGpUS50vZeY8q2LSem%2FjLWAteo97Ntv2G%2BPPZorhu2FzxlUTxY9bxMgoJG8buRNxyTypFxHQT6AWEc6oKCZRfPBrgtMoHlDnlFiwJQaQDt5DSr4qEt3kYa3gG5AmvUtV4o3JyrOyi5P2emzS%2Bq%2BtELRGc2pXM5kDK6JIvA%2Biop2hGxbf5fIdevNXtWCjnVnjA9E%2BpJaMwlc7CSW4XGV4wFvFWqZflJ0spOpj180ZW2otNEqVFqJ2UKnWkM8I2WcKqspIwz%2F%2FtzN4JiGDrZ1ofyD4LsrFVGUO0CcmwT%2B%2FoieFWG4W3jxtyJjtsbvTAnXLdoU8wgqEtFeVCUtXEDHRxxRBHFGElj2cQxKHLAhSRnyDF%2FuM7IV5nxkaMWu43mQ0tL0TqmCmpqxWJ%2FF5Yhzb8L7Us6tjv624pTmCtB5MPkMKyqxb0GOqUBNxCsGyKPpbOInA%2B6kyxJ53jHLhxOkgTiL45qyw1Lib1gRSOtynR6EBNpf%2FYPq7WmdewJnUElSlquLbF9CTm1zkgypQ6lVfwbQ2Zk7T%2FnaNIhZu02ibv7kLyMr7a21LxqOZ7XEaidCuAmSWfFdQcAU88ssEfadXiNisoCuOOMCnUmklTOuJEgkaKQYQLVj237G1nYqzUkKgjtwNyYBewjoGH2sHZn&X-Amz-Signature=488a6a9ddd989d3aa37bd48a7e5f07670fb2d6c78be37b19c51adaf057d35b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
