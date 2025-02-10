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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AJRC7M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo%2FcppMOqeQqnFb0lhUzdlXzqEM%2FSRR1992JkR8PSYXAIhAPtXlUBc5BHH2XEIYQB1JNixoL55fDFNHnWUMjHP%2FpEpKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKYXZ0d7hZlOSzleIq3APpf50spgsa3YGuy9%2BxNLVeH0eiyGQ9BfXgXX8a0c1ejObHdEfF7zUmCdWNL6VJqT4Kl3NiClyzkJkusjL2RyWy%2BKgP5mRSsr8wLmrayuPUFs2Nh%2FViEpqgnAr%2F8QPXgK1M9rVNAMPxCDMasfoNo8MPoo5Axmqf9Yjv8TiUPycN%2FDK5LqU0PCGqn9a5z8CEXdDucPLdHYP%2BUfjtzPLXsfCXIdAjFARJQQpbPf87IPhuwyabZblENm6RdxgWGzAJgWs%2F%2FHs4oh0x2N%2F3AynVLrNSU2aOLpcqNTfnoGKxxUWJuaG8Dwcih2uwGv%2FUVs1U8eKafGbbdIj23z0ZGrOpseLROgbm5Ch376nz17iJ5kBsYaVltlmrg5agBSZcVqy0giwoAPi6dI5pgWjKfKwMcKiaXdmMdBnW1D5GTMfIkbe3ClToD1RKd3D%2FaxwZHNhyg%2Fmhcj%2FNOqMliE3AXh73p8RuuM%2Bs2iJHMxGMPhEfQ7cwOWP261oW9clnlt%2FqCODLFId20MTtBHmN9SuZKu7BreNTDSsHKaqzjGNICjzLwPHG4FaSgcS1V0WTIY5o1C2oZtjGWl852Vs6hw9uh2weJq31GC6M5Tz6v0gIfu9cnIyWR1fXFLymh8wlWqMi6jDZm6W9BjqkAcnIKi5c0ooDXg9B4%2FzywYre3tFytb%2FZQZx04YOBjbIOhTYa6GOaG%2F9w54ndEoCV2YlVt42ctfC284g1Aeo8C4T%2BDHxtG0UskFtcRIMjtFwzSVSlea9l20sUesw2VECG4F0RE%2BXdzAR0nhJENbXxb%2BmjCi2Hp3xBjleHUCcxPACkNUK8oIm6GwaJu3lh6bMv5qMxp4SkAQ%2BIlBr1Br2HVx7cAXiH&X-Amz-Signature=7929ed753eb9087821a56c990e74dd696bc0c5db2f26fb1e52ab3cf024fc475a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AJRC7M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo%2FcppMOqeQqnFb0lhUzdlXzqEM%2FSRR1992JkR8PSYXAIhAPtXlUBc5BHH2XEIYQB1JNixoL55fDFNHnWUMjHP%2FpEpKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKYXZ0d7hZlOSzleIq3APpf50spgsa3YGuy9%2BxNLVeH0eiyGQ9BfXgXX8a0c1ejObHdEfF7zUmCdWNL6VJqT4Kl3NiClyzkJkusjL2RyWy%2BKgP5mRSsr8wLmrayuPUFs2Nh%2FViEpqgnAr%2F8QPXgK1M9rVNAMPxCDMasfoNo8MPoo5Axmqf9Yjv8TiUPycN%2FDK5LqU0PCGqn9a5z8CEXdDucPLdHYP%2BUfjtzPLXsfCXIdAjFARJQQpbPf87IPhuwyabZblENm6RdxgWGzAJgWs%2F%2FHs4oh0x2N%2F3AynVLrNSU2aOLpcqNTfnoGKxxUWJuaG8Dwcih2uwGv%2FUVs1U8eKafGbbdIj23z0ZGrOpseLROgbm5Ch376nz17iJ5kBsYaVltlmrg5agBSZcVqy0giwoAPi6dI5pgWjKfKwMcKiaXdmMdBnW1D5GTMfIkbe3ClToD1RKd3D%2FaxwZHNhyg%2Fmhcj%2FNOqMliE3AXh73p8RuuM%2Bs2iJHMxGMPhEfQ7cwOWP261oW9clnlt%2FqCODLFId20MTtBHmN9SuZKu7BreNTDSsHKaqzjGNICjzLwPHG4FaSgcS1V0WTIY5o1C2oZtjGWl852Vs6hw9uh2weJq31GC6M5Tz6v0gIfu9cnIyWR1fXFLymh8wlWqMi6jDZm6W9BjqkAcnIKi5c0ooDXg9B4%2FzywYre3tFytb%2FZQZx04YOBjbIOhTYa6GOaG%2F9w54ndEoCV2YlVt42ctfC284g1Aeo8C4T%2BDHxtG0UskFtcRIMjtFwzSVSlea9l20sUesw2VECG4F0RE%2BXdzAR0nhJENbXxb%2BmjCi2Hp3xBjleHUCcxPACkNUK8oIm6GwaJu3lh6bMv5qMxp4SkAQ%2BIlBr1Br2HVx7cAXiH&X-Amz-Signature=3d21f9c439afd87fff844a06f99c423a26704bc799b8d13f286a8d2b887b1578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AJRC7M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo%2FcppMOqeQqnFb0lhUzdlXzqEM%2FSRR1992JkR8PSYXAIhAPtXlUBc5BHH2XEIYQB1JNixoL55fDFNHnWUMjHP%2FpEpKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKYXZ0d7hZlOSzleIq3APpf50spgsa3YGuy9%2BxNLVeH0eiyGQ9BfXgXX8a0c1ejObHdEfF7zUmCdWNL6VJqT4Kl3NiClyzkJkusjL2RyWy%2BKgP5mRSsr8wLmrayuPUFs2Nh%2FViEpqgnAr%2F8QPXgK1M9rVNAMPxCDMasfoNo8MPoo5Axmqf9Yjv8TiUPycN%2FDK5LqU0PCGqn9a5z8CEXdDucPLdHYP%2BUfjtzPLXsfCXIdAjFARJQQpbPf87IPhuwyabZblENm6RdxgWGzAJgWs%2F%2FHs4oh0x2N%2F3AynVLrNSU2aOLpcqNTfnoGKxxUWJuaG8Dwcih2uwGv%2FUVs1U8eKafGbbdIj23z0ZGrOpseLROgbm5Ch376nz17iJ5kBsYaVltlmrg5agBSZcVqy0giwoAPi6dI5pgWjKfKwMcKiaXdmMdBnW1D5GTMfIkbe3ClToD1RKd3D%2FaxwZHNhyg%2Fmhcj%2FNOqMliE3AXh73p8RuuM%2Bs2iJHMxGMPhEfQ7cwOWP261oW9clnlt%2FqCODLFId20MTtBHmN9SuZKu7BreNTDSsHKaqzjGNICjzLwPHG4FaSgcS1V0WTIY5o1C2oZtjGWl852Vs6hw9uh2weJq31GC6M5Tz6v0gIfu9cnIyWR1fXFLymh8wlWqMi6jDZm6W9BjqkAcnIKi5c0ooDXg9B4%2FzywYre3tFytb%2FZQZx04YOBjbIOhTYa6GOaG%2F9w54ndEoCV2YlVt42ctfC284g1Aeo8C4T%2BDHxtG0UskFtcRIMjtFwzSVSlea9l20sUesw2VECG4F0RE%2BXdzAR0nhJENbXxb%2BmjCi2Hp3xBjleHUCcxPACkNUK8oIm6GwaJu3lh6bMv5qMxp4SkAQ%2BIlBr1Br2HVx7cAXiH&X-Amz-Signature=6f83c68f38ccf4bf0a1eb6db71e5f3519888b9b8cfa77a5043291fc89097be3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
