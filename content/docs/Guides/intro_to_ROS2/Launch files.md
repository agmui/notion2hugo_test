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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFY57II%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCywJZ8ivBsBTuOQdj3vJMtBk1B7iwJqfwdO3ZKnWVuxgIhAJqg2cv%2FVxYQ7K8mm%2BvmYZDZB1KMg9N21JPC3Q3khVyuKv8DCDEQABoMNjM3NDIzMTgzODA1IgxZWSczGqCmiTntdlAq3AO28ni3R8NP3F4amU%2F84QM2rWv0znH6AC%2FGeQNu%2BovsAly036Yh4xAcVhg%2Fg%2FVUAd%2FIEiI1GJpB2v8DO0dG35f7Q%2BeXhvG6cM5d1C0PgNjuBsSWzCIcC9eqwK5n2pyKi6vcgY%2FjExJFEf2cVLasZ7RT438irOsEXsbTGTYHq9N4F%2BkJUSB8XzQQxfvOAoPJByf2FgrTOXp45%2BcVTXA6Wv6Nh2i02Ij17JFtG8QH2j%2Fb5Fcx2B%2BsB%2FVtAVfwNShS3XEQHCk1SuXvgGa4AOEaPYe2wbPUKlZnTmy0XU4JktoKWSiQK2u2TkMSgW0ipFW7bI3qA%2Bi8qAMHHLA%2BnXGM8bPZ%2Fp1G%2BP5OdDnK8djSKb9uKhOUWSIgTJXdaycD3YAiCNoOcm3qehDslWYrUStOtUYJnUzw8t5XhIEZr%2B7t%2Bikl%2Fk4ZCGRAWknc8h3i1ZxiNTfo1z96TyAW47PytIUa7YY%2BmOtQm6fI2XMy7xEMedj02kGTj61XqAVNmWZwiEBEN6k4y0%2FSnAo1KHtkxSYets8mBbkI4xjXPIJ%2Bhd%2Fa4FGIVT0Q19no67rXu4k2NfFH%2BGsdtc%2Bf7jMDUB0Ry8U0OmzfqTt%2F3MsXrOMgbD4HuNFwGbXDmiqQLbZ1Sw5RtDCdsYnEBjqkASs4QTnRgj08xgrzieNZDIfmHxgDEHMd1nkZXeWwv8WOqVdgJxACo9DqweCCQS8kMNwDdNHmHMVs1J%2FN7WDQi0fdfDRHjpaKWpopF62ig4S710tRtR60G3s9Z9CDsX7JUNdHn3%2FA%2BCwC%2BR7S6OrUZBSuVq0IgPcoPToiNvf1nA0o6029IDDZR0aSUPXl5d6qv7F2m6JaFt8i4%2FdmnBiozSo6BCID&X-Amz-Signature=54d4b3dd6dacf321cbb7b5a97a19971b838c2e31881ef9d28c04d5786c9fec2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFY57II%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCywJZ8ivBsBTuOQdj3vJMtBk1B7iwJqfwdO3ZKnWVuxgIhAJqg2cv%2FVxYQ7K8mm%2BvmYZDZB1KMg9N21JPC3Q3khVyuKv8DCDEQABoMNjM3NDIzMTgzODA1IgxZWSczGqCmiTntdlAq3AO28ni3R8NP3F4amU%2F84QM2rWv0znH6AC%2FGeQNu%2BovsAly036Yh4xAcVhg%2Fg%2FVUAd%2FIEiI1GJpB2v8DO0dG35f7Q%2BeXhvG6cM5d1C0PgNjuBsSWzCIcC9eqwK5n2pyKi6vcgY%2FjExJFEf2cVLasZ7RT438irOsEXsbTGTYHq9N4F%2BkJUSB8XzQQxfvOAoPJByf2FgrTOXp45%2BcVTXA6Wv6Nh2i02Ij17JFtG8QH2j%2Fb5Fcx2B%2BsB%2FVtAVfwNShS3XEQHCk1SuXvgGa4AOEaPYe2wbPUKlZnTmy0XU4JktoKWSiQK2u2TkMSgW0ipFW7bI3qA%2Bi8qAMHHLA%2BnXGM8bPZ%2Fp1G%2BP5OdDnK8djSKb9uKhOUWSIgTJXdaycD3YAiCNoOcm3qehDslWYrUStOtUYJnUzw8t5XhIEZr%2B7t%2Bikl%2Fk4ZCGRAWknc8h3i1ZxiNTfo1z96TyAW47PytIUa7YY%2BmOtQm6fI2XMy7xEMedj02kGTj61XqAVNmWZwiEBEN6k4y0%2FSnAo1KHtkxSYets8mBbkI4xjXPIJ%2Bhd%2Fa4FGIVT0Q19no67rXu4k2NfFH%2BGsdtc%2Bf7jMDUB0Ry8U0OmzfqTt%2F3MsXrOMgbD4HuNFwGbXDmiqQLbZ1Sw5RtDCdsYnEBjqkASs4QTnRgj08xgrzieNZDIfmHxgDEHMd1nkZXeWwv8WOqVdgJxACo9DqweCCQS8kMNwDdNHmHMVs1J%2FN7WDQi0fdfDRHjpaKWpopF62ig4S710tRtR60G3s9Z9CDsX7JUNdHn3%2FA%2BCwC%2BR7S6OrUZBSuVq0IgPcoPToiNvf1nA0o6029IDDZR0aSUPXl5d6qv7F2m6JaFt8i4%2FdmnBiozSo6BCID&X-Amz-Signature=57da6c60d707c1112b61967d5aed872fac05bf14f1a41b206e39a7fa37a8d62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFY57II%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCywJZ8ivBsBTuOQdj3vJMtBk1B7iwJqfwdO3ZKnWVuxgIhAJqg2cv%2FVxYQ7K8mm%2BvmYZDZB1KMg9N21JPC3Q3khVyuKv8DCDEQABoMNjM3NDIzMTgzODA1IgxZWSczGqCmiTntdlAq3AO28ni3R8NP3F4amU%2F84QM2rWv0znH6AC%2FGeQNu%2BovsAly036Yh4xAcVhg%2Fg%2FVUAd%2FIEiI1GJpB2v8DO0dG35f7Q%2BeXhvG6cM5d1C0PgNjuBsSWzCIcC9eqwK5n2pyKi6vcgY%2FjExJFEf2cVLasZ7RT438irOsEXsbTGTYHq9N4F%2BkJUSB8XzQQxfvOAoPJByf2FgrTOXp45%2BcVTXA6Wv6Nh2i02Ij17JFtG8QH2j%2Fb5Fcx2B%2BsB%2FVtAVfwNShS3XEQHCk1SuXvgGa4AOEaPYe2wbPUKlZnTmy0XU4JktoKWSiQK2u2TkMSgW0ipFW7bI3qA%2Bi8qAMHHLA%2BnXGM8bPZ%2Fp1G%2BP5OdDnK8djSKb9uKhOUWSIgTJXdaycD3YAiCNoOcm3qehDslWYrUStOtUYJnUzw8t5XhIEZr%2B7t%2Bikl%2Fk4ZCGRAWknc8h3i1ZxiNTfo1z96TyAW47PytIUa7YY%2BmOtQm6fI2XMy7xEMedj02kGTj61XqAVNmWZwiEBEN6k4y0%2FSnAo1KHtkxSYets8mBbkI4xjXPIJ%2Bhd%2Fa4FGIVT0Q19no67rXu4k2NfFH%2BGsdtc%2Bf7jMDUB0Ry8U0OmzfqTt%2F3MsXrOMgbD4HuNFwGbXDmiqQLbZ1Sw5RtDCdsYnEBjqkASs4QTnRgj08xgrzieNZDIfmHxgDEHMd1nkZXeWwv8WOqVdgJxACo9DqweCCQS8kMNwDdNHmHMVs1J%2FN7WDQi0fdfDRHjpaKWpopF62ig4S710tRtR60G3s9Z9CDsX7JUNdHn3%2FA%2BCwC%2BR7S6OrUZBSuVq0IgPcoPToiNvf1nA0o6029IDDZR0aSUPXl5d6qv7F2m6JaFt8i4%2FdmnBiozSo6BCID&X-Amz-Signature=46c9cd62d03cc5a73779a571a6d44487a46a6784be0b95863f8019885225babf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
