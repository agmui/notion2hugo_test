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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7FNSO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbJMJuoX8O%2BlCgzRKH%2BNMeb8IOeePbDKxTLq6wrCsTwAiEA2HLI5rBFd5YWyUcgItNW1530CPc07QK42uN%2ByO4gf1wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGp80PWpwL7F0xRX4SrcAx7%2BtJ2OPKqV53gs%2F%2BPES2bEyGQfAC%2FqXL8%2FLaUmkSp1wF58QtxoT4x2akjdkfJ3TKLwrXdX8Qlpm4VbRr5YBk4IXQjsPpoV5BQWX4LM3NrDzPqCMajWo9DNWihx7409w9ir1dFhP0gKrESmTmnHRULzMmDdzjSFxdTBVnjIywkXIirV74PU6EHSMAUmi4OltrfkR8bewo4D%2F6dk7%2BbrZAC%2Fi1k9y%2BHtGYe9vou11gHM%2FPd%2FCIq95MSWjlexRU61fFyO%2BoiJKPzQzBSIdQqhbcORaCBuObkHbKWio%2FaBulFRcTTx9RiSqZc63dvlPxcDJzeBOJXi6AK6xqguat0UU%2F%2BzRb%2FqTmueFk6Z8ziwaTSwys2iU7mb13tBtVC4y%2FnsWp0dmJnArM9E8NU6nw5PckNdtDdlEoUsZxFlaqrWflwnT8WAwSb0bIWXHK11%2FaRoNIzhwULIg7vh5SQl23flP3oywrV%2Fw%2FRC4Ufl2If0y89iAcvYFG%2FYWYm1PTDefqvDjpBRsZZ6dLH46Ahtv5dIvFapT1czfugI8X3GkU5xAaj%2FUDvNHxZWxvCRsRabddl5MHl3dzO2I7hqlccpY%2B28pjSwS0UYaA%2BuHM%2FSnV6iFdxCSQhm2KfyZTp1aR8PMPvstsAGOqUB6RfI%2FtwrJHEHRy7UUIUxNus6ImCh%2Bqz1S2rFEdTpVfohrdgKAJrqkEC%2BkxX%2F6KkVY%2Ftb9gHJBPS%2BZrYR4TRJSOvUJZ%2FQ6QLWYKX23elzT0nlAPCGHXRgSRPkOOt%2B5BgER7XPB4%2F6%2BtyF7mGW5TX15hZ4tpFIlJUb4GhEiPDW60NxlpNzLzBchyj5ClMRsZMnDRQ%2BqnNgDNJP%2BgQlbsdVcy%2Bh5kBD&X-Amz-Signature=bae40832a679aaa734f6e733d859bfdc36ecb6a88854ae6210ec095b05ba4d90&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7FNSO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbJMJuoX8O%2BlCgzRKH%2BNMeb8IOeePbDKxTLq6wrCsTwAiEA2HLI5rBFd5YWyUcgItNW1530CPc07QK42uN%2ByO4gf1wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGp80PWpwL7F0xRX4SrcAx7%2BtJ2OPKqV53gs%2F%2BPES2bEyGQfAC%2FqXL8%2FLaUmkSp1wF58QtxoT4x2akjdkfJ3TKLwrXdX8Qlpm4VbRr5YBk4IXQjsPpoV5BQWX4LM3NrDzPqCMajWo9DNWihx7409w9ir1dFhP0gKrESmTmnHRULzMmDdzjSFxdTBVnjIywkXIirV74PU6EHSMAUmi4OltrfkR8bewo4D%2F6dk7%2BbrZAC%2Fi1k9y%2BHtGYe9vou11gHM%2FPd%2FCIq95MSWjlexRU61fFyO%2BoiJKPzQzBSIdQqhbcORaCBuObkHbKWio%2FaBulFRcTTx9RiSqZc63dvlPxcDJzeBOJXi6AK6xqguat0UU%2F%2BzRb%2FqTmueFk6Z8ziwaTSwys2iU7mb13tBtVC4y%2FnsWp0dmJnArM9E8NU6nw5PckNdtDdlEoUsZxFlaqrWflwnT8WAwSb0bIWXHK11%2FaRoNIzhwULIg7vh5SQl23flP3oywrV%2Fw%2FRC4Ufl2If0y89iAcvYFG%2FYWYm1PTDefqvDjpBRsZZ6dLH46Ahtv5dIvFapT1czfugI8X3GkU5xAaj%2FUDvNHxZWxvCRsRabddl5MHl3dzO2I7hqlccpY%2B28pjSwS0UYaA%2BuHM%2FSnV6iFdxCSQhm2KfyZTp1aR8PMPvstsAGOqUB6RfI%2FtwrJHEHRy7UUIUxNus6ImCh%2Bqz1S2rFEdTpVfohrdgKAJrqkEC%2BkxX%2F6KkVY%2Ftb9gHJBPS%2BZrYR4TRJSOvUJZ%2FQ6QLWYKX23elzT0nlAPCGHXRgSRPkOOt%2B5BgER7XPB4%2F6%2BtyF7mGW5TX15hZ4tpFIlJUb4GhEiPDW60NxlpNzLzBchyj5ClMRsZMnDRQ%2BqnNgDNJP%2BgQlbsdVcy%2Bh5kBD&X-Amz-Signature=6ea704baa76c70b2737a786b1583012bb1fa786f2f40f94f4a1b3c12ae4fbda7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MS7FNSO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbJMJuoX8O%2BlCgzRKH%2BNMeb8IOeePbDKxTLq6wrCsTwAiEA2HLI5rBFd5YWyUcgItNW1530CPc07QK42uN%2ByO4gf1wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGp80PWpwL7F0xRX4SrcAx7%2BtJ2OPKqV53gs%2F%2BPES2bEyGQfAC%2FqXL8%2FLaUmkSp1wF58QtxoT4x2akjdkfJ3TKLwrXdX8Qlpm4VbRr5YBk4IXQjsPpoV5BQWX4LM3NrDzPqCMajWo9DNWihx7409w9ir1dFhP0gKrESmTmnHRULzMmDdzjSFxdTBVnjIywkXIirV74PU6EHSMAUmi4OltrfkR8bewo4D%2F6dk7%2BbrZAC%2Fi1k9y%2BHtGYe9vou11gHM%2FPd%2FCIq95MSWjlexRU61fFyO%2BoiJKPzQzBSIdQqhbcORaCBuObkHbKWio%2FaBulFRcTTx9RiSqZc63dvlPxcDJzeBOJXi6AK6xqguat0UU%2F%2BzRb%2FqTmueFk6Z8ziwaTSwys2iU7mb13tBtVC4y%2FnsWp0dmJnArM9E8NU6nw5PckNdtDdlEoUsZxFlaqrWflwnT8WAwSb0bIWXHK11%2FaRoNIzhwULIg7vh5SQl23flP3oywrV%2Fw%2FRC4Ufl2If0y89iAcvYFG%2FYWYm1PTDefqvDjpBRsZZ6dLH46Ahtv5dIvFapT1czfugI8X3GkU5xAaj%2FUDvNHxZWxvCRsRabddl5MHl3dzO2I7hqlccpY%2B28pjSwS0UYaA%2BuHM%2FSnV6iFdxCSQhm2KfyZTp1aR8PMPvstsAGOqUB6RfI%2FtwrJHEHRy7UUIUxNus6ImCh%2Bqz1S2rFEdTpVfohrdgKAJrqkEC%2BkxX%2F6KkVY%2Ftb9gHJBPS%2BZrYR4TRJSOvUJZ%2FQ6QLWYKX23elzT0nlAPCGHXRgSRPkOOt%2B5BgER7XPB4%2F6%2BtyF7mGW5TX15hZ4tpFIlJUb4GhEiPDW60NxlpNzLzBchyj5ClMRsZMnDRQ%2BqnNgDNJP%2BgQlbsdVcy%2Bh5kBD&X-Amz-Signature=87dd1536f787ba64a853ea9daac8dedaa34d17a0c818d284bdcd2d60bad94692&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
