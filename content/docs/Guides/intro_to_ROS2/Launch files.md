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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6BX657%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ8p7J7Z%2FCKQhkKTyql098nlrPlsYmVg%2FFYO%2FHp%2FOwHwIhAJBD4d6kCgK67liZwQ6jVgdTKbkRkYNSK0kNKHN%2Frv0YKv8DCB4QABoMNjM3NDIzMTgzODA1Igz1Mma787aBLgQ1jN8q3AO8nTto%2Bz5hEtdoFwyslEYhVqoA1iTxV0y%2F6Y%2BihQHEtxfopuQAuPCrj1H5INSEddtANlCAAZuIbsSa7rbmBQ3J7h4i%2FA2fwpNDf9cMeQ53Zfoq%2F4VhdSDLK52Rdp%2BO%2F0Oa7ZAcrrUr%2F5gE%2B0nFkGz828M53pmX6OAasq2EBfOhj%2F2MSxItLS7EvT6butZ8xldx8SKvB4wfj1wDvyUgvGJoYMza%2BKbUJ6SCDMuR1lXMFNp2yuKI4LD5p04i4ydGwxkCyi69bE8bAMfsVReX7izpxXa3TOkfyilzdTfR5MTrL66Kzrr%2Bn7MsYZXoUyLfy5ETBZsJT1%2BbV%2Fu7Rm9CyCOBttbkNTrgS6B5za%2BuCbRROwGQe9R1orylV0GoWQsl6tquZPJI0%2BWDcc3NjIdt3rO1dH4s8dlQeky04ur1atdnnssJ1E%2ByEXw2S1wsabOefDLZ8voO%2BMrB8sWqcJiEGnI6BNkY088f9gFR5NcXjrRRq1vdlKS29O6h9oFkYTvPesiUJk75lkkf3Wf9nYjoUE7nSoHwX9YDxs8%2B7Xq6xoRjHqTRZ6TLw9KzIUVr8Cz9LLo4Z1jhCLbbRmwv6jO5CZXR08%2FymTMHAGvQx3zpFgLSNUuTS1xj%2FILS5vs6ijCj6%2FW%2FBjqkATeVM9pjbXycCDbFbDSbbPsBoaK4337X3DWWNVc508RgnQDSITuU3x6QmwAW6Q4HOq2XDiK6SRhoIg%2FAvOBNn2ob7j6dLUBUtewFT04uxY6R20p4NqeSLSF83NPtpxNFA%2Bvjj5nEBsWeu3GuESlvj647i385wIa75DqG8Tobj6Zv9FS7qJrv9uWiq%2Br3xWy2m5A%2F1V59PA4ZUbkOpasUBkfHp071&X-Amz-Signature=8b8e74dcb2d1c6908a129d68f995e8d9048866bfd91436f7343d1d583eb7b158&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6BX657%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ8p7J7Z%2FCKQhkKTyql098nlrPlsYmVg%2FFYO%2FHp%2FOwHwIhAJBD4d6kCgK67liZwQ6jVgdTKbkRkYNSK0kNKHN%2Frv0YKv8DCB4QABoMNjM3NDIzMTgzODA1Igz1Mma787aBLgQ1jN8q3AO8nTto%2Bz5hEtdoFwyslEYhVqoA1iTxV0y%2F6Y%2BihQHEtxfopuQAuPCrj1H5INSEddtANlCAAZuIbsSa7rbmBQ3J7h4i%2FA2fwpNDf9cMeQ53Zfoq%2F4VhdSDLK52Rdp%2BO%2F0Oa7ZAcrrUr%2F5gE%2B0nFkGz828M53pmX6OAasq2EBfOhj%2F2MSxItLS7EvT6butZ8xldx8SKvB4wfj1wDvyUgvGJoYMza%2BKbUJ6SCDMuR1lXMFNp2yuKI4LD5p04i4ydGwxkCyi69bE8bAMfsVReX7izpxXa3TOkfyilzdTfR5MTrL66Kzrr%2Bn7MsYZXoUyLfy5ETBZsJT1%2BbV%2Fu7Rm9CyCOBttbkNTrgS6B5za%2BuCbRROwGQe9R1orylV0GoWQsl6tquZPJI0%2BWDcc3NjIdt3rO1dH4s8dlQeky04ur1atdnnssJ1E%2ByEXw2S1wsabOefDLZ8voO%2BMrB8sWqcJiEGnI6BNkY088f9gFR5NcXjrRRq1vdlKS29O6h9oFkYTvPesiUJk75lkkf3Wf9nYjoUE7nSoHwX9YDxs8%2B7Xq6xoRjHqTRZ6TLw9KzIUVr8Cz9LLo4Z1jhCLbbRmwv6jO5CZXR08%2FymTMHAGvQx3zpFgLSNUuTS1xj%2FILS5vs6ijCj6%2FW%2FBjqkATeVM9pjbXycCDbFbDSbbPsBoaK4337X3DWWNVc508RgnQDSITuU3x6QmwAW6Q4HOq2XDiK6SRhoIg%2FAvOBNn2ob7j6dLUBUtewFT04uxY6R20p4NqeSLSF83NPtpxNFA%2Bvjj5nEBsWeu3GuESlvj647i385wIa75DqG8Tobj6Zv9FS7qJrv9uWiq%2Br3xWy2m5A%2F1V59PA4ZUbkOpasUBkfHp071&X-Amz-Signature=13a503e298a45d5baee4efb55954757955df03da759343e6c31080fbce25b7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6BX657%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ8p7J7Z%2FCKQhkKTyql098nlrPlsYmVg%2FFYO%2FHp%2FOwHwIhAJBD4d6kCgK67liZwQ6jVgdTKbkRkYNSK0kNKHN%2Frv0YKv8DCB4QABoMNjM3NDIzMTgzODA1Igz1Mma787aBLgQ1jN8q3AO8nTto%2Bz5hEtdoFwyslEYhVqoA1iTxV0y%2F6Y%2BihQHEtxfopuQAuPCrj1H5INSEddtANlCAAZuIbsSa7rbmBQ3J7h4i%2FA2fwpNDf9cMeQ53Zfoq%2F4VhdSDLK52Rdp%2BO%2F0Oa7ZAcrrUr%2F5gE%2B0nFkGz828M53pmX6OAasq2EBfOhj%2F2MSxItLS7EvT6butZ8xldx8SKvB4wfj1wDvyUgvGJoYMza%2BKbUJ6SCDMuR1lXMFNp2yuKI4LD5p04i4ydGwxkCyi69bE8bAMfsVReX7izpxXa3TOkfyilzdTfR5MTrL66Kzrr%2Bn7MsYZXoUyLfy5ETBZsJT1%2BbV%2Fu7Rm9CyCOBttbkNTrgS6B5za%2BuCbRROwGQe9R1orylV0GoWQsl6tquZPJI0%2BWDcc3NjIdt3rO1dH4s8dlQeky04ur1atdnnssJ1E%2ByEXw2S1wsabOefDLZ8voO%2BMrB8sWqcJiEGnI6BNkY088f9gFR5NcXjrRRq1vdlKS29O6h9oFkYTvPesiUJk75lkkf3Wf9nYjoUE7nSoHwX9YDxs8%2B7Xq6xoRjHqTRZ6TLw9KzIUVr8Cz9LLo4Z1jhCLbbRmwv6jO5CZXR08%2FymTMHAGvQx3zpFgLSNUuTS1xj%2FILS5vs6ijCj6%2FW%2FBjqkATeVM9pjbXycCDbFbDSbbPsBoaK4337X3DWWNVc508RgnQDSITuU3x6QmwAW6Q4HOq2XDiK6SRhoIg%2FAvOBNn2ob7j6dLUBUtewFT04uxY6R20p4NqeSLSF83NPtpxNFA%2Bvjj5nEBsWeu3GuESlvj647i385wIa75DqG8Tobj6Zv9FS7qJrv9uWiq%2Br3xWy2m5A%2F1V59PA4ZUbkOpasUBkfHp071&X-Amz-Signature=c4ac2fd7a5f06d65a82eee38df6abb7875566221f0ebac3c42f25ce97963a471&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
