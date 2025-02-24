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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D5HJMNQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOy2TpWOkLcLXLWhRiRqrjonx8dwQbIQCXOihrYrtDGAiEAx16%2FMhf7oeGQPzApdK%2BJ6LnBRQ32Mty4wC9f8yL3g%2Fgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDE%2BLcAFDbrjohiCpqircAy49mVLOwziL%2BUyqiwQfamieWbDr%2FP6Iqeo5MAgherLLAtEiiy2kZsbdbi61vIBYhBrt9utcUxSKhuVcE6qvC2ABdjPbAWZR6IxF4O%2BiPgJw3p5h%2BDKYadlYbLZLErWgFDTZamSiRGBsW9z%2BSNtKD129svtenAF6nH9LbPP%2F13syfC29IOS7Ql33OXROPYck5UxAOe3gZzXP2SELOqhZ262KcnMHzH9%2BKb8VM27JYGEsxGcuPXT8Id028CcX8pFvq7PkQO581Ya%2Fo8cCeMcI8VCcg4AQsk63c7LktoJO57mwB3BfKZPxDHj6M6nPC3zAzgelvkyTPgMaD3EBSAwhil0%2FjS7B4IJPHeds4vjqUUPrDUsKc6MLzfpsNvAy0jo41pIyquSY1Hp8YeGj6oY14CXcsZbtq06vvNNDvYlfweJM2qJZzQPSNOriur9d0fy7jInvN36Eb4gtKrpqGtaeDql4wELF8uzW%2F6dW8mHRR%2BGZ95H1fo5k81wM5pjJZ4eqP%2BLaIUF4bfoiOS9pyi01VpMpBNFEHP01Ih0YKSufKnfSIl8wSxqvhmbAcDBHv5TybV5lGZ1%2BunXhaBVlT8dYQkQWaIa5%2B%2Bpd%2BUiUEvDzf23Ak7CT5d5BKl2agrqdMK%2Bd8r0GOqUBGzu9I2eaID%2BYsiVzxdB3aNQmlEhQBRhR4kFGdzhv%2BQpOirMjmjLBGmmCzqTynEZbF9eOHBQW7kqW8Xbi4dVp2awPm2%2Bw9NHlwDwXYaIV%2BvEiuC5dlaD9zvh7O95BjGdw%2BVUPZ7pLeFTDm56c90unOUe%2Bab0hqn64vMFxLVPCgZxf9nki8YuMS4AHOZJze9TlPCxXJJFHnfmWveORyA2V%2F7X9Swz0&X-Amz-Signature=9e87f81b7a99eb9ce1f550a32f98d89cfe558d1818ca919a86ec65dfadc72b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D5HJMNQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOy2TpWOkLcLXLWhRiRqrjonx8dwQbIQCXOihrYrtDGAiEAx16%2FMhf7oeGQPzApdK%2BJ6LnBRQ32Mty4wC9f8yL3g%2Fgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDE%2BLcAFDbrjohiCpqircAy49mVLOwziL%2BUyqiwQfamieWbDr%2FP6Iqeo5MAgherLLAtEiiy2kZsbdbi61vIBYhBrt9utcUxSKhuVcE6qvC2ABdjPbAWZR6IxF4O%2BiPgJw3p5h%2BDKYadlYbLZLErWgFDTZamSiRGBsW9z%2BSNtKD129svtenAF6nH9LbPP%2F13syfC29IOS7Ql33OXROPYck5UxAOe3gZzXP2SELOqhZ262KcnMHzH9%2BKb8VM27JYGEsxGcuPXT8Id028CcX8pFvq7PkQO581Ya%2Fo8cCeMcI8VCcg4AQsk63c7LktoJO57mwB3BfKZPxDHj6M6nPC3zAzgelvkyTPgMaD3EBSAwhil0%2FjS7B4IJPHeds4vjqUUPrDUsKc6MLzfpsNvAy0jo41pIyquSY1Hp8YeGj6oY14CXcsZbtq06vvNNDvYlfweJM2qJZzQPSNOriur9d0fy7jInvN36Eb4gtKrpqGtaeDql4wELF8uzW%2F6dW8mHRR%2BGZ95H1fo5k81wM5pjJZ4eqP%2BLaIUF4bfoiOS9pyi01VpMpBNFEHP01Ih0YKSufKnfSIl8wSxqvhmbAcDBHv5TybV5lGZ1%2BunXhaBVlT8dYQkQWaIa5%2B%2Bpd%2BUiUEvDzf23Ak7CT5d5BKl2agrqdMK%2Bd8r0GOqUBGzu9I2eaID%2BYsiVzxdB3aNQmlEhQBRhR4kFGdzhv%2BQpOirMjmjLBGmmCzqTynEZbF9eOHBQW7kqW8Xbi4dVp2awPm2%2Bw9NHlwDwXYaIV%2BvEiuC5dlaD9zvh7O95BjGdw%2BVUPZ7pLeFTDm56c90unOUe%2Bab0hqn64vMFxLVPCgZxf9nki8YuMS4AHOZJze9TlPCxXJJFHnfmWveORyA2V%2F7X9Swz0&X-Amz-Signature=521a64baf15d7f788ab051fba02b9dc5b44b4ee7a188341658b0e16b56aee8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D5HJMNQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOy2TpWOkLcLXLWhRiRqrjonx8dwQbIQCXOihrYrtDGAiEAx16%2FMhf7oeGQPzApdK%2BJ6LnBRQ32Mty4wC9f8yL3g%2Fgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDE%2BLcAFDbrjohiCpqircAy49mVLOwziL%2BUyqiwQfamieWbDr%2FP6Iqeo5MAgherLLAtEiiy2kZsbdbi61vIBYhBrt9utcUxSKhuVcE6qvC2ABdjPbAWZR6IxF4O%2BiPgJw3p5h%2BDKYadlYbLZLErWgFDTZamSiRGBsW9z%2BSNtKD129svtenAF6nH9LbPP%2F13syfC29IOS7Ql33OXROPYck5UxAOe3gZzXP2SELOqhZ262KcnMHzH9%2BKb8VM27JYGEsxGcuPXT8Id028CcX8pFvq7PkQO581Ya%2Fo8cCeMcI8VCcg4AQsk63c7LktoJO57mwB3BfKZPxDHj6M6nPC3zAzgelvkyTPgMaD3EBSAwhil0%2FjS7B4IJPHeds4vjqUUPrDUsKc6MLzfpsNvAy0jo41pIyquSY1Hp8YeGj6oY14CXcsZbtq06vvNNDvYlfweJM2qJZzQPSNOriur9d0fy7jInvN36Eb4gtKrpqGtaeDql4wELF8uzW%2F6dW8mHRR%2BGZ95H1fo5k81wM5pjJZ4eqP%2BLaIUF4bfoiOS9pyi01VpMpBNFEHP01Ih0YKSufKnfSIl8wSxqvhmbAcDBHv5TybV5lGZ1%2BunXhaBVlT8dYQkQWaIa5%2B%2Bpd%2BUiUEvDzf23Ak7CT5d5BKl2agrqdMK%2Bd8r0GOqUBGzu9I2eaID%2BYsiVzxdB3aNQmlEhQBRhR4kFGdzhv%2BQpOirMjmjLBGmmCzqTynEZbF9eOHBQW7kqW8Xbi4dVp2awPm2%2Bw9NHlwDwXYaIV%2BvEiuC5dlaD9zvh7O95BjGdw%2BVUPZ7pLeFTDm56c90unOUe%2Bab0hqn64vMFxLVPCgZxf9nki8YuMS4AHOZJze9TlPCxXJJFHnfmWveORyA2V%2F7X9Swz0&X-Amz-Signature=5efa00f212b7a25f61a04728096a4c68c79fd5e8d4d8177a88107b2c5f46c7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
