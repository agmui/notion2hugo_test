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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZKKNF6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBEx49dYU3M8xtVZnS3Q90mWN2yCCnTYQ9SG2dxcrPjWAiApcrzOxIbNS6vbq18Su2v9h2o%2BKFkczHI5uD%2FBsd3BJyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMjuma44zTfUM4UA1AKtwDjJ33uJtHmEjJSv09D64GyUpAEKcZW77KmfSOnmKKmQlqvkWlZKNllnQkVtYCyeU65DF7x7ACsx0jRLwxgUDdc%2B%2F00u3AjH2dnsji%2Bhe%2BlKl2IyuHQDwdyPgvDOBv1ROSJ06IxsZpACm7nkf%2FngFV%2FTBKL2CDPUISnf8BFEIjC5Kw%2FBRxhPcGn2yM%2BE%2FynIZrCfDAvB1QqQ8Iz9qF3CBge0Ndan%2B9KAISzjc5CNbn54C11Rb43fyMe9w36y71gxkGaOk54rO%2Fr9G%2Fxyz6p75mU2hTc2ZVpqJTIfCijWnensfcOe8G1f540p%2BpVkuRKDvblcH38osk2HLgxuepBZeA9kcl%2BkU7i6SveHCgS0PD7b8sbsAjCTFXs4N8WTamwu4Ha8vB%2FgdQVcsiCOUGy9GvkpGqPBnQY9Cg%2FdHDICv1D98HxHNWQdiG0CRHJ3ft6JjHVBIlFWMU0OF6zUXe%2BlCG1s93k4Fai4jvwzWwkdiJBYhstTCJlfdNik5%2Brt4OXhVLy4Z7oAL2nT7r2h2YNPoHTAzlrhhwt8LqDg9lngI26FifTCX0ltbMbUy%2F4dilSTH3KhMQtF%2F7TBZLIyrvdh90be10O9Klq%2Fnl9uVgeUdSLUasSAsyFmkVcreOxWAwzum7vQY6pgGRAro7NYCdYUQrzyX8TuSq6m2Om6Tm5Ix9BYeBiAfpIkAx%2BW5QIdgYfqWbmCka41vc70pevPfuNXvFVJQz4b0P9ZSCLouwXTeICsOXHP2w3G5FwXxB1VNzX%2FNKW1ph2EmgY2CzNtKMfAPWKlsCqPX6jWFhuZlDpBrwVvq%2Bprth%2Fmna7%2FhvwPAzEOr6duCDvv0rpoM0gDsSEvM4jsZlFLVCYCxNzLD1&X-Amz-Signature=03e82b9619480c333717ee3a85fe3fdb38334cfc898b7edc39090d2f6cb9e12d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZKKNF6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBEx49dYU3M8xtVZnS3Q90mWN2yCCnTYQ9SG2dxcrPjWAiApcrzOxIbNS6vbq18Su2v9h2o%2BKFkczHI5uD%2FBsd3BJyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMjuma44zTfUM4UA1AKtwDjJ33uJtHmEjJSv09D64GyUpAEKcZW77KmfSOnmKKmQlqvkWlZKNllnQkVtYCyeU65DF7x7ACsx0jRLwxgUDdc%2B%2F00u3AjH2dnsji%2Bhe%2BlKl2IyuHQDwdyPgvDOBv1ROSJ06IxsZpACm7nkf%2FngFV%2FTBKL2CDPUISnf8BFEIjC5Kw%2FBRxhPcGn2yM%2BE%2FynIZrCfDAvB1QqQ8Iz9qF3CBge0Ndan%2B9KAISzjc5CNbn54C11Rb43fyMe9w36y71gxkGaOk54rO%2Fr9G%2Fxyz6p75mU2hTc2ZVpqJTIfCijWnensfcOe8G1f540p%2BpVkuRKDvblcH38osk2HLgxuepBZeA9kcl%2BkU7i6SveHCgS0PD7b8sbsAjCTFXs4N8WTamwu4Ha8vB%2FgdQVcsiCOUGy9GvkpGqPBnQY9Cg%2FdHDICv1D98HxHNWQdiG0CRHJ3ft6JjHVBIlFWMU0OF6zUXe%2BlCG1s93k4Fai4jvwzWwkdiJBYhstTCJlfdNik5%2Brt4OXhVLy4Z7oAL2nT7r2h2YNPoHTAzlrhhwt8LqDg9lngI26FifTCX0ltbMbUy%2F4dilSTH3KhMQtF%2F7TBZLIyrvdh90be10O9Klq%2Fnl9uVgeUdSLUasSAsyFmkVcreOxWAwzum7vQY6pgGRAro7NYCdYUQrzyX8TuSq6m2Om6Tm5Ix9BYeBiAfpIkAx%2BW5QIdgYfqWbmCka41vc70pevPfuNXvFVJQz4b0P9ZSCLouwXTeICsOXHP2w3G5FwXxB1VNzX%2FNKW1ph2EmgY2CzNtKMfAPWKlsCqPX6jWFhuZlDpBrwVvq%2Bprth%2Fmna7%2FhvwPAzEOr6duCDvv0rpoM0gDsSEvM4jsZlFLVCYCxNzLD1&X-Amz-Signature=2717b1c84b74601a457c9802908a4076fbe1f5f3aa0f892fcae88ab2dd65fcaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZKKNF6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBEx49dYU3M8xtVZnS3Q90mWN2yCCnTYQ9SG2dxcrPjWAiApcrzOxIbNS6vbq18Su2v9h2o%2BKFkczHI5uD%2FBsd3BJyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMjuma44zTfUM4UA1AKtwDjJ33uJtHmEjJSv09D64GyUpAEKcZW77KmfSOnmKKmQlqvkWlZKNllnQkVtYCyeU65DF7x7ACsx0jRLwxgUDdc%2B%2F00u3AjH2dnsji%2Bhe%2BlKl2IyuHQDwdyPgvDOBv1ROSJ06IxsZpACm7nkf%2FngFV%2FTBKL2CDPUISnf8BFEIjC5Kw%2FBRxhPcGn2yM%2BE%2FynIZrCfDAvB1QqQ8Iz9qF3CBge0Ndan%2B9KAISzjc5CNbn54C11Rb43fyMe9w36y71gxkGaOk54rO%2Fr9G%2Fxyz6p75mU2hTc2ZVpqJTIfCijWnensfcOe8G1f540p%2BpVkuRKDvblcH38osk2HLgxuepBZeA9kcl%2BkU7i6SveHCgS0PD7b8sbsAjCTFXs4N8WTamwu4Ha8vB%2FgdQVcsiCOUGy9GvkpGqPBnQY9Cg%2FdHDICv1D98HxHNWQdiG0CRHJ3ft6JjHVBIlFWMU0OF6zUXe%2BlCG1s93k4Fai4jvwzWwkdiJBYhstTCJlfdNik5%2Brt4OXhVLy4Z7oAL2nT7r2h2YNPoHTAzlrhhwt8LqDg9lngI26FifTCX0ltbMbUy%2F4dilSTH3KhMQtF%2F7TBZLIyrvdh90be10O9Klq%2Fnl9uVgeUdSLUasSAsyFmkVcreOxWAwzum7vQY6pgGRAro7NYCdYUQrzyX8TuSq6m2Om6Tm5Ix9BYeBiAfpIkAx%2BW5QIdgYfqWbmCka41vc70pevPfuNXvFVJQz4b0P9ZSCLouwXTeICsOXHP2w3G5FwXxB1VNzX%2FNKW1ph2EmgY2CzNtKMfAPWKlsCqPX6jWFhuZlDpBrwVvq%2Bprth%2Fmna7%2FhvwPAzEOr6duCDvv0rpoM0gDsSEvM4jsZlFLVCYCxNzLD1&X-Amz-Signature=aaea352bced0a8cde1f18d4056b91c9e35812fc113c61fa174f15f4f40ce4457&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
