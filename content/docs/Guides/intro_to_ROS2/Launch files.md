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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKCECPK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5G5JV0%2F54Z0RLSk4bynHsLEJQp035CC4hJULQsj5HNAIgc%2BodcY4hHIutJ6yYY1U6da%2FRuuQ8uoMggA%2FS6h1QD3YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD2%2F%2Ff7ZIyHS7D%2FwyrcAzwuw6%2BZmA4%2FmDooF3zviou4Y6ExfyOy67CA5z0FO%2FfvApvcM7JdfusBCF9G6kset2pLh1W3WnLReXj1fDRVlwQ5%2FB2IgV2MxN8qyn8Tgd3t382UJy4qm%2FgAR%2Ffz%2FqMc2HZ8zHHrYsq2vw0qv5WWC7yhiyZhFnMOsSy9M4v%2FRk0UoaZdxO0dAzcBFXCDf3QLpOVWb6SsSCKIjOrPbpoyIsNKl38VTy2zoTzz4K2NxZLg2FIX%2F0Ui0xW0izzjIgKfC2FRGmOhOds%2BW6XqC7yzpx9VbCkWNLMoo4R4gRBO9GfIad3CV7bKkDUW2LcjpOP7f6M0LbhAs11CujpIOyRYzthNfNX69ZyZ0k%2B%2BlevKTB16WIpUSFo%2BlFfQpNpmtsBqzxe2hR9oZtdVbThnE0RfqlrJpbNvPDstAhvQMYpXQXu5L8zMBjoQH93pm5GWJwWm5uL9rFXVa%2F59fdLTpeDxBA0k980AKHVFObLskWk20H7OiznkHj6bJWSK8Hm16iTAAUWbwhrMuRx0Bq%2Bb2YW3%2Bljf6kQliW0QSLo1WTfbetP6TfLql4VgCEJsOJ7f3AHBexqKNP3PnLsfjkoldkxiHjDQGsjnZo1l7RUiJYAh%2Bn8B17RSoCDPDYoqMwuZMIyBhMMGOqUBkHABEljUIxsqZFA4lV677OsrjfKKJSDOnOjL5XhBDfJ7XGPafLAA4ihqwMMCiReGBfnm4YxNGdz8m8H1lNDX%2BEVL5NexcWkndflaIRTs931vQWdFcz%2F6f7Oih1u3HptsOy6S3YXLJxK5OIB92AMkKE8JMF6qfK1ALjJq%2BqloYegIj0WNj9l72MqcH3VSGV%2BG%2BxEyF2c8nyg88NDxYn9hgIsmkqBa&X-Amz-Signature=4bc960683f4840cf2daf146c910d38aade1d1109e0e92709f2e641c99d963ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKCECPK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5G5JV0%2F54Z0RLSk4bynHsLEJQp035CC4hJULQsj5HNAIgc%2BodcY4hHIutJ6yYY1U6da%2FRuuQ8uoMggA%2FS6h1QD3YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD2%2F%2Ff7ZIyHS7D%2FwyrcAzwuw6%2BZmA4%2FmDooF3zviou4Y6ExfyOy67CA5z0FO%2FfvApvcM7JdfusBCF9G6kset2pLh1W3WnLReXj1fDRVlwQ5%2FB2IgV2MxN8qyn8Tgd3t382UJy4qm%2FgAR%2Ffz%2FqMc2HZ8zHHrYsq2vw0qv5WWC7yhiyZhFnMOsSy9M4v%2FRk0UoaZdxO0dAzcBFXCDf3QLpOVWb6SsSCKIjOrPbpoyIsNKl38VTy2zoTzz4K2NxZLg2FIX%2F0Ui0xW0izzjIgKfC2FRGmOhOds%2BW6XqC7yzpx9VbCkWNLMoo4R4gRBO9GfIad3CV7bKkDUW2LcjpOP7f6M0LbhAs11CujpIOyRYzthNfNX69ZyZ0k%2B%2BlevKTB16WIpUSFo%2BlFfQpNpmtsBqzxe2hR9oZtdVbThnE0RfqlrJpbNvPDstAhvQMYpXQXu5L8zMBjoQH93pm5GWJwWm5uL9rFXVa%2F59fdLTpeDxBA0k980AKHVFObLskWk20H7OiznkHj6bJWSK8Hm16iTAAUWbwhrMuRx0Bq%2Bb2YW3%2Bljf6kQliW0QSLo1WTfbetP6TfLql4VgCEJsOJ7f3AHBexqKNP3PnLsfjkoldkxiHjDQGsjnZo1l7RUiJYAh%2Bn8B17RSoCDPDYoqMwuZMIyBhMMGOqUBkHABEljUIxsqZFA4lV677OsrjfKKJSDOnOjL5XhBDfJ7XGPafLAA4ihqwMMCiReGBfnm4YxNGdz8m8H1lNDX%2BEVL5NexcWkndflaIRTs931vQWdFcz%2F6f7Oih1u3HptsOy6S3YXLJxK5OIB92AMkKE8JMF6qfK1ALjJq%2BqloYegIj0WNj9l72MqcH3VSGV%2BG%2BxEyF2c8nyg88NDxYn9hgIsmkqBa&X-Amz-Signature=7298c72110d144e458db5b05111b25aecd1d087272bf1cbb104a2fedf136f4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKCECPK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5G5JV0%2F54Z0RLSk4bynHsLEJQp035CC4hJULQsj5HNAIgc%2BodcY4hHIutJ6yYY1U6da%2FRuuQ8uoMggA%2FS6h1QD3YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD2%2F%2Ff7ZIyHS7D%2FwyrcAzwuw6%2BZmA4%2FmDooF3zviou4Y6ExfyOy67CA5z0FO%2FfvApvcM7JdfusBCF9G6kset2pLh1W3WnLReXj1fDRVlwQ5%2FB2IgV2MxN8qyn8Tgd3t382UJy4qm%2FgAR%2Ffz%2FqMc2HZ8zHHrYsq2vw0qv5WWC7yhiyZhFnMOsSy9M4v%2FRk0UoaZdxO0dAzcBFXCDf3QLpOVWb6SsSCKIjOrPbpoyIsNKl38VTy2zoTzz4K2NxZLg2FIX%2F0Ui0xW0izzjIgKfC2FRGmOhOds%2BW6XqC7yzpx9VbCkWNLMoo4R4gRBO9GfIad3CV7bKkDUW2LcjpOP7f6M0LbhAs11CujpIOyRYzthNfNX69ZyZ0k%2B%2BlevKTB16WIpUSFo%2BlFfQpNpmtsBqzxe2hR9oZtdVbThnE0RfqlrJpbNvPDstAhvQMYpXQXu5L8zMBjoQH93pm5GWJwWm5uL9rFXVa%2F59fdLTpeDxBA0k980AKHVFObLskWk20H7OiznkHj6bJWSK8Hm16iTAAUWbwhrMuRx0Bq%2Bb2YW3%2Bljf6kQliW0QSLo1WTfbetP6TfLql4VgCEJsOJ7f3AHBexqKNP3PnLsfjkoldkxiHjDQGsjnZo1l7RUiJYAh%2Bn8B17RSoCDPDYoqMwuZMIyBhMMGOqUBkHABEljUIxsqZFA4lV677OsrjfKKJSDOnOjL5XhBDfJ7XGPafLAA4ihqwMMCiReGBfnm4YxNGdz8m8H1lNDX%2BEVL5NexcWkndflaIRTs931vQWdFcz%2F6f7Oih1u3HptsOy6S3YXLJxK5OIB92AMkKE8JMF6qfK1ALjJq%2BqloYegIj0WNj9l72MqcH3VSGV%2BG%2BxEyF2c8nyg88NDxYn9hgIsmkqBa&X-Amz-Signature=f4f02f349f06f7d01386b3bfe01b5315efc979c04bec9a8a825a31bc62f59f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
