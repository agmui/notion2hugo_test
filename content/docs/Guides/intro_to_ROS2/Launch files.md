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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGF2GS3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIA30okMzK9Qfsp2iM%2FtV6WscOzblQ9wjHh1T%2BYXh7Ds5AiAFHXLTKSJk3t1aKd9l2HdGSX%2FkxFNteuigTbNY4ORgiCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCf6UnV933qBxGpnuKtwDBAXOIBKKSfrEsvGwtnv0g%2BiBhINadwVs4JKsxEgNEa%2B6MMoJ4f9cvid%2B5Ca9zdXpnEqJImTNQpudwN54X2oVxwSO%2FLvmn9M4a1t4A%2BHU5gHK%2Fu0flUutXo8gDUSWqCF%2FfEorKl5mb0gSrUhmeenP%2BQI9jyIv0aYH5oDZ%2BD%2F84Oa5GZOJ8iSZzC6bovfR0J2x2%2FkW7s6V3D6rzSzwjZO477TDsRPCUk%2FR%2FZGc4p5XZgM18dnhNwKWd643XCXfFPX5AN0jDyUTcCoqDkbdhzbvqfdYs1UnOcU7TJ0fmzjSYcRqdzHrv3okpLsKF6i0tSzUjeL7GiDAijNrjdYgqqHXE%2Fx5LT1cHnAthFsBPNDilJYiZVAsZ%2FnbtRkTGMqrz3a10PYp%2Bix08Pa38qUKumHlS9CG0b1To9uvYwDjJrtZ49r6H%2BRQeUul3zQJB7O7NpyXW2ZwyIQhB6JO0y1yC%2B0pEaFL2oOFIRz4%2BI6mGRAqSIHYxkI9%2Fv0ssWStvmDfUnZ%2FFQl0%2BVsCk%2FsfpycTx0oAnCVJw%2B%2BIGZrp0WCEcZOIUcHt544y6xxn2rOiI6pfrQu2Km4MFBeY5KXyyD7hrCo1J54tQqReGVhStfC2ik1QPE%2BpODYloNIb3P0WxQ4wtYv5vgY6pgGlhzt4L3HXgRMewsxKKaP6DhFHlZ9B4oHtsQGTWjW4ubKmBvqCvsfFI6Z0nlW35vnavPEAhMv3tNV%2BCdL13f8zzACQOihPClfbYitgtf0xj6CKXN8XhTW%2FUFYNdjY5MwrLMMvnwETFSBr3iqy9FmKphDq2UEavMSXZUUbFuGIzQo3o4zLGmKWCdVaFfh9436yUOVY6BK%2BR4mafczZj3CwKZ9t108hg&X-Amz-Signature=fbdf7c39d76886a09775f0d9988428e8649180a0966fbb64132af5440c39aae6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGF2GS3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIA30okMzK9Qfsp2iM%2FtV6WscOzblQ9wjHh1T%2BYXh7Ds5AiAFHXLTKSJk3t1aKd9l2HdGSX%2FkxFNteuigTbNY4ORgiCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCf6UnV933qBxGpnuKtwDBAXOIBKKSfrEsvGwtnv0g%2BiBhINadwVs4JKsxEgNEa%2B6MMoJ4f9cvid%2B5Ca9zdXpnEqJImTNQpudwN54X2oVxwSO%2FLvmn9M4a1t4A%2BHU5gHK%2Fu0flUutXo8gDUSWqCF%2FfEorKl5mb0gSrUhmeenP%2BQI9jyIv0aYH5oDZ%2BD%2F84Oa5GZOJ8iSZzC6bovfR0J2x2%2FkW7s6V3D6rzSzwjZO477TDsRPCUk%2FR%2FZGc4p5XZgM18dnhNwKWd643XCXfFPX5AN0jDyUTcCoqDkbdhzbvqfdYs1UnOcU7TJ0fmzjSYcRqdzHrv3okpLsKF6i0tSzUjeL7GiDAijNrjdYgqqHXE%2Fx5LT1cHnAthFsBPNDilJYiZVAsZ%2FnbtRkTGMqrz3a10PYp%2Bix08Pa38qUKumHlS9CG0b1To9uvYwDjJrtZ49r6H%2BRQeUul3zQJB7O7NpyXW2ZwyIQhB6JO0y1yC%2B0pEaFL2oOFIRz4%2BI6mGRAqSIHYxkI9%2Fv0ssWStvmDfUnZ%2FFQl0%2BVsCk%2FsfpycTx0oAnCVJw%2B%2BIGZrp0WCEcZOIUcHt544y6xxn2rOiI6pfrQu2Km4MFBeY5KXyyD7hrCo1J54tQqReGVhStfC2ik1QPE%2BpODYloNIb3P0WxQ4wtYv5vgY6pgGlhzt4L3HXgRMewsxKKaP6DhFHlZ9B4oHtsQGTWjW4ubKmBvqCvsfFI6Z0nlW35vnavPEAhMv3tNV%2BCdL13f8zzACQOihPClfbYitgtf0xj6CKXN8XhTW%2FUFYNdjY5MwrLMMvnwETFSBr3iqy9FmKphDq2UEavMSXZUUbFuGIzQo3o4zLGmKWCdVaFfh9436yUOVY6BK%2BR4mafczZj3CwKZ9t108hg&X-Amz-Signature=ced22aa9bb4ac7f2c0e4e1c744c3edcce430e03158d2e1aaf70570b50ea20402&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGF2GS3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIA30okMzK9Qfsp2iM%2FtV6WscOzblQ9wjHh1T%2BYXh7Ds5AiAFHXLTKSJk3t1aKd9l2HdGSX%2FkxFNteuigTbNY4ORgiCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCf6UnV933qBxGpnuKtwDBAXOIBKKSfrEsvGwtnv0g%2BiBhINadwVs4JKsxEgNEa%2B6MMoJ4f9cvid%2B5Ca9zdXpnEqJImTNQpudwN54X2oVxwSO%2FLvmn9M4a1t4A%2BHU5gHK%2Fu0flUutXo8gDUSWqCF%2FfEorKl5mb0gSrUhmeenP%2BQI9jyIv0aYH5oDZ%2BD%2F84Oa5GZOJ8iSZzC6bovfR0J2x2%2FkW7s6V3D6rzSzwjZO477TDsRPCUk%2FR%2FZGc4p5XZgM18dnhNwKWd643XCXfFPX5AN0jDyUTcCoqDkbdhzbvqfdYs1UnOcU7TJ0fmzjSYcRqdzHrv3okpLsKF6i0tSzUjeL7GiDAijNrjdYgqqHXE%2Fx5LT1cHnAthFsBPNDilJYiZVAsZ%2FnbtRkTGMqrz3a10PYp%2Bix08Pa38qUKumHlS9CG0b1To9uvYwDjJrtZ49r6H%2BRQeUul3zQJB7O7NpyXW2ZwyIQhB6JO0y1yC%2B0pEaFL2oOFIRz4%2BI6mGRAqSIHYxkI9%2Fv0ssWStvmDfUnZ%2FFQl0%2BVsCk%2FsfpycTx0oAnCVJw%2B%2BIGZrp0WCEcZOIUcHt544y6xxn2rOiI6pfrQu2Km4MFBeY5KXyyD7hrCo1J54tQqReGVhStfC2ik1QPE%2BpODYloNIb3P0WxQ4wtYv5vgY6pgGlhzt4L3HXgRMewsxKKaP6DhFHlZ9B4oHtsQGTWjW4ubKmBvqCvsfFI6Z0nlW35vnavPEAhMv3tNV%2BCdL13f8zzACQOihPClfbYitgtf0xj6CKXN8XhTW%2FUFYNdjY5MwrLMMvnwETFSBr3iqy9FmKphDq2UEavMSXZUUbFuGIzQo3o4zLGmKWCdVaFfh9436yUOVY6BK%2BR4mafczZj3CwKZ9t108hg&X-Amz-Signature=7db65e3c95e262a33465d1c9bc37d98abebce67da196d34d1ac34acc9a6e8c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
