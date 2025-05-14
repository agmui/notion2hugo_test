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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREISZ52%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFd6gxOSylEpiIDj3V1rSPnrq1HH0Z1pHYRIBQ%2F2BtD3AiA0KPvEtEcCnsR51YCDNp6aTtJjwzGqNpuPkiHQuV1S7SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVtYnQ2jualzaYFiKtwDBwPkHoftJHWlsp%2BekWTAevgyvLAfE%2BYpftErFYz4G4Oux7iuvez%2BCcPbgICx9JZUtegu9zWeN8aMx8LUudcEvO5wYgoyDTI4GHNP9w%2BMPDMXM74jfNzrZ6jhEvuhTGUqmS6lJpmV5edCbEGyvhaXWpf4SBzyTulOfYAh9g6FO7%2FmAOtQRj2aVALuCN6kjs6UBZAfBOhjAjZc01FqAPgPhT%2Bty1dYEQTJNe1VJJuP%2FEQrwn1i7N%2FynJRiA5lwpmvLW%2B7JHM9XKeWxyj2QcVwx46nzEzIxt72qTClpLlarnhMFPTo1gZL6k9%2BEeHfsZ%2BJyGYHWWd96rk46jk3VU4FYsPnowyh0X8Pw8gr7%2FKbCAIPSXAYfvr2k7OunajQpghTJ1u5VQDJtBr4JEAXeqpITxIc1aDKh20pj3CEUax1SEFni5vX%2FVAQH5TuGSxWW9zXqpN3r5zbGFjdtriN5eXHrMOStNDjgbn768rj0CKqT1X9uEafc%2FT2VhS4nnqvlh5uDD877Q8R5zFejDtOL4CpiaYtDe%2FTsZceVJVlifO68G7IzbptIR8RLyz2gMidf4Yfi0IhdPXobqXl%2FZYhTVKbzPZF90bgTwQVvHnKzpOU%2BD5kD1%2Fks8lkRDsYl6QYwoL6PwQY6pgHEJtcGwH2gPhxyUrbVzpgXkrcfsu05ALBa%2BxqUEFdUtg4xYZunlTsRQ1hjAfqn1Eu4%2BA1Jog8PGEZbUwbfViOflF8KjlS2i49bFt4ljDZkYrJrh4%2BENEevSSwX8W7QjXHd1rgOyeYHs7s0iSezp2V2EZ1i1TFhP2ct4AdHan2pa0P5HcKIi1su%2Fc70OYCNm8BtrVkWXZwG5phxBCvu0HhWYP3jGAAh&X-Amz-Signature=4baed1c6125d88c890dd00db19dd7ead05c07632c04cf6f3ac10ee8321aa7dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREISZ52%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFd6gxOSylEpiIDj3V1rSPnrq1HH0Z1pHYRIBQ%2F2BtD3AiA0KPvEtEcCnsR51YCDNp6aTtJjwzGqNpuPkiHQuV1S7SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVtYnQ2jualzaYFiKtwDBwPkHoftJHWlsp%2BekWTAevgyvLAfE%2BYpftErFYz4G4Oux7iuvez%2BCcPbgICx9JZUtegu9zWeN8aMx8LUudcEvO5wYgoyDTI4GHNP9w%2BMPDMXM74jfNzrZ6jhEvuhTGUqmS6lJpmV5edCbEGyvhaXWpf4SBzyTulOfYAh9g6FO7%2FmAOtQRj2aVALuCN6kjs6UBZAfBOhjAjZc01FqAPgPhT%2Bty1dYEQTJNe1VJJuP%2FEQrwn1i7N%2FynJRiA5lwpmvLW%2B7JHM9XKeWxyj2QcVwx46nzEzIxt72qTClpLlarnhMFPTo1gZL6k9%2BEeHfsZ%2BJyGYHWWd96rk46jk3VU4FYsPnowyh0X8Pw8gr7%2FKbCAIPSXAYfvr2k7OunajQpghTJ1u5VQDJtBr4JEAXeqpITxIc1aDKh20pj3CEUax1SEFni5vX%2FVAQH5TuGSxWW9zXqpN3r5zbGFjdtriN5eXHrMOStNDjgbn768rj0CKqT1X9uEafc%2FT2VhS4nnqvlh5uDD877Q8R5zFejDtOL4CpiaYtDe%2FTsZceVJVlifO68G7IzbptIR8RLyz2gMidf4Yfi0IhdPXobqXl%2FZYhTVKbzPZF90bgTwQVvHnKzpOU%2BD5kD1%2Fks8lkRDsYl6QYwoL6PwQY6pgHEJtcGwH2gPhxyUrbVzpgXkrcfsu05ALBa%2BxqUEFdUtg4xYZunlTsRQ1hjAfqn1Eu4%2BA1Jog8PGEZbUwbfViOflF8KjlS2i49bFt4ljDZkYrJrh4%2BENEevSSwX8W7QjXHd1rgOyeYHs7s0iSezp2V2EZ1i1TFhP2ct4AdHan2pa0P5HcKIi1su%2Fc70OYCNm8BtrVkWXZwG5phxBCvu0HhWYP3jGAAh&X-Amz-Signature=390aded1dce9cd80527657d05bb9042ffd33ad6f44aa31455a41fd869213e688&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREISZ52%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFd6gxOSylEpiIDj3V1rSPnrq1HH0Z1pHYRIBQ%2F2BtD3AiA0KPvEtEcCnsR51YCDNp6aTtJjwzGqNpuPkiHQuV1S7SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVtYnQ2jualzaYFiKtwDBwPkHoftJHWlsp%2BekWTAevgyvLAfE%2BYpftErFYz4G4Oux7iuvez%2BCcPbgICx9JZUtegu9zWeN8aMx8LUudcEvO5wYgoyDTI4GHNP9w%2BMPDMXM74jfNzrZ6jhEvuhTGUqmS6lJpmV5edCbEGyvhaXWpf4SBzyTulOfYAh9g6FO7%2FmAOtQRj2aVALuCN6kjs6UBZAfBOhjAjZc01FqAPgPhT%2Bty1dYEQTJNe1VJJuP%2FEQrwn1i7N%2FynJRiA5lwpmvLW%2B7JHM9XKeWxyj2QcVwx46nzEzIxt72qTClpLlarnhMFPTo1gZL6k9%2BEeHfsZ%2BJyGYHWWd96rk46jk3VU4FYsPnowyh0X8Pw8gr7%2FKbCAIPSXAYfvr2k7OunajQpghTJ1u5VQDJtBr4JEAXeqpITxIc1aDKh20pj3CEUax1SEFni5vX%2FVAQH5TuGSxWW9zXqpN3r5zbGFjdtriN5eXHrMOStNDjgbn768rj0CKqT1X9uEafc%2FT2VhS4nnqvlh5uDD877Q8R5zFejDtOL4CpiaYtDe%2FTsZceVJVlifO68G7IzbptIR8RLyz2gMidf4Yfi0IhdPXobqXl%2FZYhTVKbzPZF90bgTwQVvHnKzpOU%2BD5kD1%2Fks8lkRDsYl6QYwoL6PwQY6pgHEJtcGwH2gPhxyUrbVzpgXkrcfsu05ALBa%2BxqUEFdUtg4xYZunlTsRQ1hjAfqn1Eu4%2BA1Jog8PGEZbUwbfViOflF8KjlS2i49bFt4ljDZkYrJrh4%2BENEevSSwX8W7QjXHd1rgOyeYHs7s0iSezp2V2EZ1i1TFhP2ct4AdHan2pa0P5HcKIi1su%2Fc70OYCNm8BtrVkWXZwG5phxBCvu0HhWYP3jGAAh&X-Amz-Signature=6303de5ef29da52cee8b35711c6bd06902975f6264f4bf4ce6f44ec7f6cbc2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
