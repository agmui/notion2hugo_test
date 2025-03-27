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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMU3AF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg1LzakEFSRU4xKkrlPsDzD%2FCrMyx6%2FxZs9ysPCDuk%2BwIhANh1LGeMmZAXqfNxUxOOC4w%2BQtNxbvY0DHigbxrqOBTSKv8DCD4QABoMNjM3NDIzMTgzODA1IgwQFk%2BjVyFZ7m8KPKgq3AMNK%2Bd%2B0Mua7qcAs2CZRPCGTtaFjLZkFL4ZLJvz595dm81pEBl65lYqbUyZxySyD9OaBeRbr%2BpYa824dbQ0rv3VTbDbItffReGZkOkseIOzeqmmuG7JZPkd6YlxyhtLqJIvPku3QqalClh0hqaG%2FP%2FEMGtl1QQ5rRIcLGpCBkcXKoKtXclNJQq7KTAcH1i8oqW9r9kfNCIovMnkpweUxY75xAvJlgnAUB%2FG1O%2BWPeWHptZqd%2FpIKuTB2vFz9BURa2EjeM0V6FgCZ3tQx1%2BWeimG1ixT66tvJWfBcxfat92ahLfX59FwPmS91F2%2BfGmJPammfiiJz%2BHUpvwd1cmykJJblsHDUWpBQp9NbL2uZGAYVSmuF8sYnMPaeiS1V0Ji5C0m7WQk%2FMb2KLloAKYSOsj7j5jqiCBwie4MHo%2BSKk4N3XImjsrDe1HC%2BLTUpK7abJ9loRPKn8S9zWrpFTt8GrJSVICQmh%2F42i1BgxckXEGlrG%2FY0fP05hpUQX3SP7Eejt94no9dC1pEGyTlsRLqjZVByWCh3nMTenhMWtgKM5h8i351620ASfOAeWhOUSqNI%2FE1Uz8JmaWaAwCZk8kPs5dLsKiN2BO4UADvulZ0anfNnm1CJgdrg41pTBmf%2FjC0ppO%2FBjqkAZ%2BKUG4NZbr3tNw7A%2BkqyAN%2FiTLDuKPCTMq%2Bbq2pocofORy1PSo787j93dJTCsKaras9MrP25JbJQWM6d5GClRjqjS1g%2BwmX2sHYJpN1tiQcW0VkwtyqtZq9u5X1zDTR5vLTw0AJkDQn%2BHMdPLUs%2F3yvaii0SiE3uaNRHICzMubkRfLOO6FdOTFs5HthYH9dEEJVdj7J1YHQuYzFdpfnIuJVd20S&X-Amz-Signature=451ac6bd6114a38a4fd45e3c4b1cf3a5518569c275318babd3037dcb4fba589d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMU3AF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg1LzakEFSRU4xKkrlPsDzD%2FCrMyx6%2FxZs9ysPCDuk%2BwIhANh1LGeMmZAXqfNxUxOOC4w%2BQtNxbvY0DHigbxrqOBTSKv8DCD4QABoMNjM3NDIzMTgzODA1IgwQFk%2BjVyFZ7m8KPKgq3AMNK%2Bd%2B0Mua7qcAs2CZRPCGTtaFjLZkFL4ZLJvz595dm81pEBl65lYqbUyZxySyD9OaBeRbr%2BpYa824dbQ0rv3VTbDbItffReGZkOkseIOzeqmmuG7JZPkd6YlxyhtLqJIvPku3QqalClh0hqaG%2FP%2FEMGtl1QQ5rRIcLGpCBkcXKoKtXclNJQq7KTAcH1i8oqW9r9kfNCIovMnkpweUxY75xAvJlgnAUB%2FG1O%2BWPeWHptZqd%2FpIKuTB2vFz9BURa2EjeM0V6FgCZ3tQx1%2BWeimG1ixT66tvJWfBcxfat92ahLfX59FwPmS91F2%2BfGmJPammfiiJz%2BHUpvwd1cmykJJblsHDUWpBQp9NbL2uZGAYVSmuF8sYnMPaeiS1V0Ji5C0m7WQk%2FMb2KLloAKYSOsj7j5jqiCBwie4MHo%2BSKk4N3XImjsrDe1HC%2BLTUpK7abJ9loRPKn8S9zWrpFTt8GrJSVICQmh%2F42i1BgxckXEGlrG%2FY0fP05hpUQX3SP7Eejt94no9dC1pEGyTlsRLqjZVByWCh3nMTenhMWtgKM5h8i351620ASfOAeWhOUSqNI%2FE1Uz8JmaWaAwCZk8kPs5dLsKiN2BO4UADvulZ0anfNnm1CJgdrg41pTBmf%2FjC0ppO%2FBjqkAZ%2BKUG4NZbr3tNw7A%2BkqyAN%2FiTLDuKPCTMq%2Bbq2pocofORy1PSo787j93dJTCsKaras9MrP25JbJQWM6d5GClRjqjS1g%2BwmX2sHYJpN1tiQcW0VkwtyqtZq9u5X1zDTR5vLTw0AJkDQn%2BHMdPLUs%2F3yvaii0SiE3uaNRHICzMubkRfLOO6FdOTFs5HthYH9dEEJVdj7J1YHQuYzFdpfnIuJVd20S&X-Amz-Signature=d848e3bc903b2ead8e44a66cdd1649a8cad54bc910d26c3a0334f1af1abde373&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDMU3AF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg1LzakEFSRU4xKkrlPsDzD%2FCrMyx6%2FxZs9ysPCDuk%2BwIhANh1LGeMmZAXqfNxUxOOC4w%2BQtNxbvY0DHigbxrqOBTSKv8DCD4QABoMNjM3NDIzMTgzODA1IgwQFk%2BjVyFZ7m8KPKgq3AMNK%2Bd%2B0Mua7qcAs2CZRPCGTtaFjLZkFL4ZLJvz595dm81pEBl65lYqbUyZxySyD9OaBeRbr%2BpYa824dbQ0rv3VTbDbItffReGZkOkseIOzeqmmuG7JZPkd6YlxyhtLqJIvPku3QqalClh0hqaG%2FP%2FEMGtl1QQ5rRIcLGpCBkcXKoKtXclNJQq7KTAcH1i8oqW9r9kfNCIovMnkpweUxY75xAvJlgnAUB%2FG1O%2BWPeWHptZqd%2FpIKuTB2vFz9BURa2EjeM0V6FgCZ3tQx1%2BWeimG1ixT66tvJWfBcxfat92ahLfX59FwPmS91F2%2BfGmJPammfiiJz%2BHUpvwd1cmykJJblsHDUWpBQp9NbL2uZGAYVSmuF8sYnMPaeiS1V0Ji5C0m7WQk%2FMb2KLloAKYSOsj7j5jqiCBwie4MHo%2BSKk4N3XImjsrDe1HC%2BLTUpK7abJ9loRPKn8S9zWrpFTt8GrJSVICQmh%2F42i1BgxckXEGlrG%2FY0fP05hpUQX3SP7Eejt94no9dC1pEGyTlsRLqjZVByWCh3nMTenhMWtgKM5h8i351620ASfOAeWhOUSqNI%2FE1Uz8JmaWaAwCZk8kPs5dLsKiN2BO4UADvulZ0anfNnm1CJgdrg41pTBmf%2FjC0ppO%2FBjqkAZ%2BKUG4NZbr3tNw7A%2BkqyAN%2FiTLDuKPCTMq%2Bbq2pocofORy1PSo787j93dJTCsKaras9MrP25JbJQWM6d5GClRjqjS1g%2BwmX2sHYJpN1tiQcW0VkwtyqtZq9u5X1zDTR5vLTw0AJkDQn%2BHMdPLUs%2F3yvaii0SiE3uaNRHICzMubkRfLOO6FdOTFs5HthYH9dEEJVdj7J1YHQuYzFdpfnIuJVd20S&X-Amz-Signature=0b5d60f6b2e5f739d2f2c0c93d5d5092416a6001a3ad4aff746dfec9c71eeb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
