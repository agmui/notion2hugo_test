---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGA64DX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0B4P%2FYXU3Rt7A9jRlXSGKQc%2Bb6u3%2BY4TM2z2FxgA14gIgVW2aCpGg36%2BQrevli5T%2BrVUWRjabw3WD4%2BjNTEIMDlgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWbPjHaYewo2QcyVSrcAzZLQllBpFrbkMcKY%2BdB0Ra6R%2BXIDnTY%2BQQ%2F%2FxQ4vS8x1Opp8GJto9TX8OfKsxwTOOcpGzW1mbS2UCckYWvA%2F4jcsIXxSJOoRdYyX9Ma9Y4PYTVQ00C%2B8qCKZPQ9m56%2FbDCEKx%2BECpaPWr2sVQyJnC6fjNDK6t8MlUywDvwyi%2F6NdmU5DbVChC5%2BAasdH4Hy6WPNDxJZQtmdBSyL2boDelbcd91z2369ZgK1o8CrseDO%2FRpBgg3zf9QXEXEbZd57%2FOK%2BMo6szye5NP2K%2FZePbEIIqTzOFrGx8sxj9nnVyOarXdQ3S8ItKZx%2FBa5blpiN2vvPn9agtp95M%2B37OzfpsB4Uo0R%2F%2F5tJAhfC%2FlfMcNjKooAY%2F6C0H9KRQoppB5WQOmhiJ58Rk4A%2BQgUIdPfpl2pb7jb2r%2B3o9cgHYC%2Bm1vgGypsSBrUpt%2BtsKLLDZIRxQguaLkWFHoE64%2FV5H8O%2Bhva0CjIUG%2F9ewPsBxQPl4tLYmYpWU1UAYz2JP%2FVh3aMwfftLAI8WrMi5AzIO1NpK6rrsiCpdAz2eJDCeFUqzvT7X6iON%2B4m2GVUPntrlcBsM6rBX35XeS80CLM%2BL9oMff47zfuh30fAcZMdGC2FzW6HBHEbLMscZG5Tyx7znMKfStcQGOqUBr4kU0hs29SrVXOrCpoCljlDRMl3%2B96LPBlSLq%2F3p5UprP%2F9WygQn3%2BL1NDOdq3hyzaSB0In8WDwxEdSTjSK1cfqVxjdwYhMJtzNkBsrNM1cBJw9s%2F1%2BfjRXm7IqzqUrNkogq0KeYiU6eWW8SzkO%2BUo%2BEj3dq2RUlHNrnmeay1d7gRt1NwoGPcgLPTLCRDkZDUzOj%2FtJqU85GV1C2GFEGMo4MNMrC&X-Amz-Signature=c0514fddc42dd8c99895f10103c12f25bfb0e855f7e59c81119c6389b067d7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGA64DX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0B4P%2FYXU3Rt7A9jRlXSGKQc%2Bb6u3%2BY4TM2z2FxgA14gIgVW2aCpGg36%2BQrevli5T%2BrVUWRjabw3WD4%2BjNTEIMDlgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWbPjHaYewo2QcyVSrcAzZLQllBpFrbkMcKY%2BdB0Ra6R%2BXIDnTY%2BQQ%2F%2FxQ4vS8x1Opp8GJto9TX8OfKsxwTOOcpGzW1mbS2UCckYWvA%2F4jcsIXxSJOoRdYyX9Ma9Y4PYTVQ00C%2B8qCKZPQ9m56%2FbDCEKx%2BECpaPWr2sVQyJnC6fjNDK6t8MlUywDvwyi%2F6NdmU5DbVChC5%2BAasdH4Hy6WPNDxJZQtmdBSyL2boDelbcd91z2369ZgK1o8CrseDO%2FRpBgg3zf9QXEXEbZd57%2FOK%2BMo6szye5NP2K%2FZePbEIIqTzOFrGx8sxj9nnVyOarXdQ3S8ItKZx%2FBa5blpiN2vvPn9agtp95M%2B37OzfpsB4Uo0R%2F%2F5tJAhfC%2FlfMcNjKooAY%2F6C0H9KRQoppB5WQOmhiJ58Rk4A%2BQgUIdPfpl2pb7jb2r%2B3o9cgHYC%2Bm1vgGypsSBrUpt%2BtsKLLDZIRxQguaLkWFHoE64%2FV5H8O%2Bhva0CjIUG%2F9ewPsBxQPl4tLYmYpWU1UAYz2JP%2FVh3aMwfftLAI8WrMi5AzIO1NpK6rrsiCpdAz2eJDCeFUqzvT7X6iON%2B4m2GVUPntrlcBsM6rBX35XeS80CLM%2BL9oMff47zfuh30fAcZMdGC2FzW6HBHEbLMscZG5Tyx7znMKfStcQGOqUBr4kU0hs29SrVXOrCpoCljlDRMl3%2B96LPBlSLq%2F3p5UprP%2F9WygQn3%2BL1NDOdq3hyzaSB0In8WDwxEdSTjSK1cfqVxjdwYhMJtzNkBsrNM1cBJw9s%2F1%2BfjRXm7IqzqUrNkogq0KeYiU6eWW8SzkO%2BUo%2BEj3dq2RUlHNrnmeay1d7gRt1NwoGPcgLPTLCRDkZDUzOj%2FtJqU85GV1C2GFEGMo4MNMrC&X-Amz-Signature=725e4e3db3249dba72d37aff0b49d98b78791a966670d8b4513746011e3ff072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGA64DX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0B4P%2FYXU3Rt7A9jRlXSGKQc%2Bb6u3%2BY4TM2z2FxgA14gIgVW2aCpGg36%2BQrevli5T%2BrVUWRjabw3WD4%2BjNTEIMDlgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWbPjHaYewo2QcyVSrcAzZLQllBpFrbkMcKY%2BdB0Ra6R%2BXIDnTY%2BQQ%2F%2FxQ4vS8x1Opp8GJto9TX8OfKsxwTOOcpGzW1mbS2UCckYWvA%2F4jcsIXxSJOoRdYyX9Ma9Y4PYTVQ00C%2B8qCKZPQ9m56%2FbDCEKx%2BECpaPWr2sVQyJnC6fjNDK6t8MlUywDvwyi%2F6NdmU5DbVChC5%2BAasdH4Hy6WPNDxJZQtmdBSyL2boDelbcd91z2369ZgK1o8CrseDO%2FRpBgg3zf9QXEXEbZd57%2FOK%2BMo6szye5NP2K%2FZePbEIIqTzOFrGx8sxj9nnVyOarXdQ3S8ItKZx%2FBa5blpiN2vvPn9agtp95M%2B37OzfpsB4Uo0R%2F%2F5tJAhfC%2FlfMcNjKooAY%2F6C0H9KRQoppB5WQOmhiJ58Rk4A%2BQgUIdPfpl2pb7jb2r%2B3o9cgHYC%2Bm1vgGypsSBrUpt%2BtsKLLDZIRxQguaLkWFHoE64%2FV5H8O%2Bhva0CjIUG%2F9ewPsBxQPl4tLYmYpWU1UAYz2JP%2FVh3aMwfftLAI8WrMi5AzIO1NpK6rrsiCpdAz2eJDCeFUqzvT7X6iON%2B4m2GVUPntrlcBsM6rBX35XeS80CLM%2BL9oMff47zfuh30fAcZMdGC2FzW6HBHEbLMscZG5Tyx7znMKfStcQGOqUBr4kU0hs29SrVXOrCpoCljlDRMl3%2B96LPBlSLq%2F3p5UprP%2F9WygQn3%2BL1NDOdq3hyzaSB0In8WDwxEdSTjSK1cfqVxjdwYhMJtzNkBsrNM1cBJw9s%2F1%2BfjRXm7IqzqUrNkogq0KeYiU6eWW8SzkO%2BUo%2BEj3dq2RUlHNrnmeay1d7gRt1NwoGPcgLPTLCRDkZDUzOj%2FtJqU85GV1C2GFEGMo4MNMrC&X-Amz-Signature=3aa43f86d14407d2a222b144c1f6e136a2e5077bfd93e087ce96da989fdf1a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
