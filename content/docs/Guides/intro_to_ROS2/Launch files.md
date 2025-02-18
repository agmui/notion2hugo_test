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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SXI67N%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDC3R2UMnbjVDqts7Ukiz2Q5NQZdEysVyxuztGIcmMWtAIhANTRlX8Xi19TvbsnGR1o5a8mypr7n9fYpI4LtWIAC9gMKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG0XyFiqvLswN37hEq3APyGgHWPfwOZx92VvQCKqesbAq%2FU1Tj641YbP74I8LSb9xZoQRnJq8wiRcQuI0VEKaWlNDu%2BEmNTnpTc3sIxQ0azKphoEN9JHQjapWz4jcs%2BqcLNvY9%2B3DohCR2k%2B%2BiAdxx3SrRPS2cGnh27sIs%2BaiMWtYmB%2FpjL%2FWWyhj5Vt2BMufiw13ePKTTS6ZuxOzpjw4QzaGHI2GNgxDd5kIgBwucElxkRiKaCxCXS0wk73ikg62GLjBjvVsSuh2mj7IjIIaRl9ksgBE0BGvp%2B5UuCiL5dgW9AQ%2Bl0db%2FTKHlgGwlt4pqcGFWTIduYmKq0CYozjZ4QLxF5TYNLJeFz2dUlnoO2oD%2BxLsD0KAooNB8y1SZClDiC0fM%2B3mMo31BZETjvSZ9bQ1jqfXAxhR%2BOhBR%2FLbuXCzra3%2FYPDuvdPBNnEnyxFKYhSF3kRAjGvJ2l%2B1XB3BpgMTnj%2FLLBaPD7fzU%2FUSyTx%2BZVvOsD8DXsfH9e%2Fu7BQwGpSdFlwmkvYbJXZa%2B9hziVZwryJ0Jg5XvddY4p5ETi9F9JmPDvmLFRWZvEW2qsAlETlz1WftK4p2zD%2F6ercEReBp%2FLH8cpyfh7Ua2Jb%2FUkdzyN8Fwqn27cEcB80jT0BWkNTbiOe6tnjyUbzDr2dO9BjqkAUKrj2iCyTK7Ax0Odm2spqVHbGAluTlBuY1eVKgXvA%2Bel8Gxwo2dQo%2FEWw%2BdZhLdx%2FvM4fgkND6ZdHaQg3eCR11QXe%2B6sLBo1GWvX3FajpzUV1I6QT451U8tCWn6k3pVMamspBEWrSeBhw5xNjxxaVklj%2F3B0voyodOgAoV59LPyETDQ6ag89ZSn7RmKaprWb%2Fkcmvz%2FMY4R089Kvnpb4SIb6BHm&X-Amz-Signature=0a73cc0c3d4a80b3597fdb0fe4235ce567baf1e9e350b740c211bc2e1ee0a198&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SXI67N%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDC3R2UMnbjVDqts7Ukiz2Q5NQZdEysVyxuztGIcmMWtAIhANTRlX8Xi19TvbsnGR1o5a8mypr7n9fYpI4LtWIAC9gMKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG0XyFiqvLswN37hEq3APyGgHWPfwOZx92VvQCKqesbAq%2FU1Tj641YbP74I8LSb9xZoQRnJq8wiRcQuI0VEKaWlNDu%2BEmNTnpTc3sIxQ0azKphoEN9JHQjapWz4jcs%2BqcLNvY9%2B3DohCR2k%2B%2BiAdxx3SrRPS2cGnh27sIs%2BaiMWtYmB%2FpjL%2FWWyhj5Vt2BMufiw13ePKTTS6ZuxOzpjw4QzaGHI2GNgxDd5kIgBwucElxkRiKaCxCXS0wk73ikg62GLjBjvVsSuh2mj7IjIIaRl9ksgBE0BGvp%2B5UuCiL5dgW9AQ%2Bl0db%2FTKHlgGwlt4pqcGFWTIduYmKq0CYozjZ4QLxF5TYNLJeFz2dUlnoO2oD%2BxLsD0KAooNB8y1SZClDiC0fM%2B3mMo31BZETjvSZ9bQ1jqfXAxhR%2BOhBR%2FLbuXCzra3%2FYPDuvdPBNnEnyxFKYhSF3kRAjGvJ2l%2B1XB3BpgMTnj%2FLLBaPD7fzU%2FUSyTx%2BZVvOsD8DXsfH9e%2Fu7BQwGpSdFlwmkvYbJXZa%2B9hziVZwryJ0Jg5XvddY4p5ETi9F9JmPDvmLFRWZvEW2qsAlETlz1WftK4p2zD%2F6ercEReBp%2FLH8cpyfh7Ua2Jb%2FUkdzyN8Fwqn27cEcB80jT0BWkNTbiOe6tnjyUbzDr2dO9BjqkAUKrj2iCyTK7Ax0Odm2spqVHbGAluTlBuY1eVKgXvA%2Bel8Gxwo2dQo%2FEWw%2BdZhLdx%2FvM4fgkND6ZdHaQg3eCR11QXe%2B6sLBo1GWvX3FajpzUV1I6QT451U8tCWn6k3pVMamspBEWrSeBhw5xNjxxaVklj%2F3B0voyodOgAoV59LPyETDQ6ag89ZSn7RmKaprWb%2Fkcmvz%2FMY4R089Kvnpb4SIb6BHm&X-Amz-Signature=73c1b24c36951604c247bd70871ee46fb36b421ae9ea991482bc930c35142998&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SXI67N%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDC3R2UMnbjVDqts7Ukiz2Q5NQZdEysVyxuztGIcmMWtAIhANTRlX8Xi19TvbsnGR1o5a8mypr7n9fYpI4LtWIAC9gMKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG0XyFiqvLswN37hEq3APyGgHWPfwOZx92VvQCKqesbAq%2FU1Tj641YbP74I8LSb9xZoQRnJq8wiRcQuI0VEKaWlNDu%2BEmNTnpTc3sIxQ0azKphoEN9JHQjapWz4jcs%2BqcLNvY9%2B3DohCR2k%2B%2BiAdxx3SrRPS2cGnh27sIs%2BaiMWtYmB%2FpjL%2FWWyhj5Vt2BMufiw13ePKTTS6ZuxOzpjw4QzaGHI2GNgxDd5kIgBwucElxkRiKaCxCXS0wk73ikg62GLjBjvVsSuh2mj7IjIIaRl9ksgBE0BGvp%2B5UuCiL5dgW9AQ%2Bl0db%2FTKHlgGwlt4pqcGFWTIduYmKq0CYozjZ4QLxF5TYNLJeFz2dUlnoO2oD%2BxLsD0KAooNB8y1SZClDiC0fM%2B3mMo31BZETjvSZ9bQ1jqfXAxhR%2BOhBR%2FLbuXCzra3%2FYPDuvdPBNnEnyxFKYhSF3kRAjGvJ2l%2B1XB3BpgMTnj%2FLLBaPD7fzU%2FUSyTx%2BZVvOsD8DXsfH9e%2Fu7BQwGpSdFlwmkvYbJXZa%2B9hziVZwryJ0Jg5XvddY4p5ETi9F9JmPDvmLFRWZvEW2qsAlETlz1WftK4p2zD%2F6ercEReBp%2FLH8cpyfh7Ua2Jb%2FUkdzyN8Fwqn27cEcB80jT0BWkNTbiOe6tnjyUbzDr2dO9BjqkAUKrj2iCyTK7Ax0Odm2spqVHbGAluTlBuY1eVKgXvA%2Bel8Gxwo2dQo%2FEWw%2BdZhLdx%2FvM4fgkND6ZdHaQg3eCR11QXe%2B6sLBo1GWvX3FajpzUV1I6QT451U8tCWn6k3pVMamspBEWrSeBhw5xNjxxaVklj%2F3B0voyodOgAoV59LPyETDQ6ag89ZSn7RmKaprWb%2Fkcmvz%2FMY4R089Kvnpb4SIb6BHm&X-Amz-Signature=3e6b2170fcbba7d5ca993d55a597a9050e43d6876b6861480bf2fb43283d82ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
