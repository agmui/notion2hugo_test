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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHFRQ2S%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDT3wkpcV%2F6q6Nx1zjEoZmY0RaQNatwP4BZ%2F83%2FqBJFwwIhAKdZKWHVFfh6ptQODp7XVi3ASskrv2ZeatDK4bV%2B55K4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6o%2BxI3Yk5fg5eTBcq3AN854iafhmCSqhjkJVpz05yLGcqy%2B7RzrbFr3j9VMD7hycnBGHn0SCbfX%2FxYUS2zOZXMthbnIY4Tlk2D2ixeP0pH3lZod8j1U7KzINcrXQ5ggXz5YbarTVDH38J8xXOy2bAGJMb0rzmh3uh6YKRpFXK%2FeVy8joNw%2BFWffs7omK0PVWENHOUcdkLgt0VFPhsUPO0gPWn8seTUffJypcxr7n%2BS08%2BqZS4rD%2FwQdeHHvXJitgQTeq%2BWts392Nyl%2B294LblclODojeUEUS4pjDmHAjkryvtqrTMjHsvYQn7vVvdQutbNE3zHD%2BetBdP%2FJzz43kU%2FaR3DfYGc6TV3neGoQowPp2RpMPYDodiW03ZtckZSBUmAfhZSe%2FkL3bxX35Ft77cXYt6C6oEUuGrUx3PppAxitt8EB2AsqZbC2Nx52TQ7FdUmA8ubkFhHyDCUd1YxOrpuRpu3F%2B8DeVctH5jd117M%2F4AnBpONv5Jw3%2BrNsmc1BfY8LoFC7BYCuFxYrKdzkEoEepq1EE1%2BWF46jZGv8rcSzLZnCpbJ29Ibu0%2FfJPCltJCLio7ovyP%2BCn1vkrHWfCG3NV6iYy7mMqs0KRuVRY0%2FzY34dms%2FwPEACslr2lyOIGZR3mo5d0tnydkMTCa8Ju9BjqkASPrslNsavu6WE5gChLtv9XnXXXKRpCkmGcFt1oJjZhdSBrcO5JYXWXH0hmljSxjoDE703uI8t3m1jak9GOmwJtddaB35PNbWCob8NmDo%2FSezVjNDQnA4H7hCOl6ZuN061uR32NoNCton%2FL7K%2FaiHXK7Ko5lcv%2BzezpiFNozcz0LK97O%2B5uSTWYrCsI0dqP9fWHGB219%2BHukdXmtglcdNKzemG6M&X-Amz-Signature=283682dbf957bc70d305d911ba300ccdd5db8535541c1c2293dca805967b0d65&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHFRQ2S%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDT3wkpcV%2F6q6Nx1zjEoZmY0RaQNatwP4BZ%2F83%2FqBJFwwIhAKdZKWHVFfh6ptQODp7XVi3ASskrv2ZeatDK4bV%2B55K4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6o%2BxI3Yk5fg5eTBcq3AN854iafhmCSqhjkJVpz05yLGcqy%2B7RzrbFr3j9VMD7hycnBGHn0SCbfX%2FxYUS2zOZXMthbnIY4Tlk2D2ixeP0pH3lZod8j1U7KzINcrXQ5ggXz5YbarTVDH38J8xXOy2bAGJMb0rzmh3uh6YKRpFXK%2FeVy8joNw%2BFWffs7omK0PVWENHOUcdkLgt0VFPhsUPO0gPWn8seTUffJypcxr7n%2BS08%2BqZS4rD%2FwQdeHHvXJitgQTeq%2BWts392Nyl%2B294LblclODojeUEUS4pjDmHAjkryvtqrTMjHsvYQn7vVvdQutbNE3zHD%2BetBdP%2FJzz43kU%2FaR3DfYGc6TV3neGoQowPp2RpMPYDodiW03ZtckZSBUmAfhZSe%2FkL3bxX35Ft77cXYt6C6oEUuGrUx3PppAxitt8EB2AsqZbC2Nx52TQ7FdUmA8ubkFhHyDCUd1YxOrpuRpu3F%2B8DeVctH5jd117M%2F4AnBpONv5Jw3%2BrNsmc1BfY8LoFC7BYCuFxYrKdzkEoEepq1EE1%2BWF46jZGv8rcSzLZnCpbJ29Ibu0%2FfJPCltJCLio7ovyP%2BCn1vkrHWfCG3NV6iYy7mMqs0KRuVRY0%2FzY34dms%2FwPEACslr2lyOIGZR3mo5d0tnydkMTCa8Ju9BjqkASPrslNsavu6WE5gChLtv9XnXXXKRpCkmGcFt1oJjZhdSBrcO5JYXWXH0hmljSxjoDE703uI8t3m1jak9GOmwJtddaB35PNbWCob8NmDo%2FSezVjNDQnA4H7hCOl6ZuN061uR32NoNCton%2FL7K%2FaiHXK7Ko5lcv%2BzezpiFNozcz0LK97O%2B5uSTWYrCsI0dqP9fWHGB219%2BHukdXmtglcdNKzemG6M&X-Amz-Signature=a8705c01a2eb85240d7d23851763d0231cfbb74d3d3c249c7f17997f94c76881&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHFRQ2S%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDT3wkpcV%2F6q6Nx1zjEoZmY0RaQNatwP4BZ%2F83%2FqBJFwwIhAKdZKWHVFfh6ptQODp7XVi3ASskrv2ZeatDK4bV%2B55K4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6o%2BxI3Yk5fg5eTBcq3AN854iafhmCSqhjkJVpz05yLGcqy%2B7RzrbFr3j9VMD7hycnBGHn0SCbfX%2FxYUS2zOZXMthbnIY4Tlk2D2ixeP0pH3lZod8j1U7KzINcrXQ5ggXz5YbarTVDH38J8xXOy2bAGJMb0rzmh3uh6YKRpFXK%2FeVy8joNw%2BFWffs7omK0PVWENHOUcdkLgt0VFPhsUPO0gPWn8seTUffJypcxr7n%2BS08%2BqZS4rD%2FwQdeHHvXJitgQTeq%2BWts392Nyl%2B294LblclODojeUEUS4pjDmHAjkryvtqrTMjHsvYQn7vVvdQutbNE3zHD%2BetBdP%2FJzz43kU%2FaR3DfYGc6TV3neGoQowPp2RpMPYDodiW03ZtckZSBUmAfhZSe%2FkL3bxX35Ft77cXYt6C6oEUuGrUx3PppAxitt8EB2AsqZbC2Nx52TQ7FdUmA8ubkFhHyDCUd1YxOrpuRpu3F%2B8DeVctH5jd117M%2F4AnBpONv5Jw3%2BrNsmc1BfY8LoFC7BYCuFxYrKdzkEoEepq1EE1%2BWF46jZGv8rcSzLZnCpbJ29Ibu0%2FfJPCltJCLio7ovyP%2BCn1vkrHWfCG3NV6iYy7mMqs0KRuVRY0%2FzY34dms%2FwPEACslr2lyOIGZR3mo5d0tnydkMTCa8Ju9BjqkASPrslNsavu6WE5gChLtv9XnXXXKRpCkmGcFt1oJjZhdSBrcO5JYXWXH0hmljSxjoDE703uI8t3m1jak9GOmwJtddaB35PNbWCob8NmDo%2FSezVjNDQnA4H7hCOl6ZuN061uR32NoNCton%2FL7K%2FaiHXK7Ko5lcv%2BzezpiFNozcz0LK97O%2B5uSTWYrCsI0dqP9fWHGB219%2BHukdXmtglcdNKzemG6M&X-Amz-Signature=7f4d74559eb2b95795fbeee61b7d3fa384e7db98228ab225b7d260be524713b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
