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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQ6ZMBI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVJOEEHYwR8xjIfxKxDXekjgGyt2ooip14nBLECmixgIhANq%2FKvT%2BKK6Ky0m%2FxAVN%2FdXnPoXAoj1KG4sgERvp7s6HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP6tKcL53uJuovUr0q3APF63EcUXs%2FQEDPGiBLynAtOwJHa8J5TjAniqo%2B%2BmWKt8L4VIlm8X0GJIW7T3zfJOdvMU5yFaBpRVt%2BCt%2BkxtnSvCTJ%2FOAegegoo1UFMed6SuC1RVk2zO97Nj2%2Fk9Mlh%2BxxRC%2BOun7e2LvF5tcEVwtxO%2FVqYY6FmnsMXr6vLS36oCi7dQP83i9DgV6jRnjo2pbvFvPy1iS3w%2Fn3lUn9i0si0%2Byfz9X0XkTTa%2FxFhAereBQQ5opasGaGmsmAFwkdKy4yi46Q7j4QHfwLi8VXb1r7T5cE5rW3a1G02ITVtk81TfcZsSC7KcNKe2lrMSedLQej5qloUcBIbJwTp%2FjDQ2yGo8ITyN3MPj6zwkOVmD2IHs%2BGx8sSzdzh8n7YfvRqhlKux5u3kcfBoj0ybb%2FBjctRv2aXN1TQAXvanlOfePfxJZfC0RTR8Va9LoyctqmRq%2Fbz6qjSW3W9GHNjvKyO%2FWEMtSQw0vz9YwyimTfGMduZOz1GzqAT%2Fq7KY1qZZFOzadpgzCG9c1%2BvmXLnLpZN0Vdo2f7tlbQ3NA9BChzixQBwxedJ2%2BK1Q32Q%2BwC7dCBnbT3KAeRaaR4kq1vod9tYtbUcsQRUWuxb6%2FO24QpT6q%2FGD0Qik5iZinaWelyhVjDq7ezBBjqkAfEc0AREJcgiqi65S5VVDF355VfjNHKpQqQwUBAE6M7Ph2XgOFOO%2BJYs%2FT16VbeoJkNpm2boMUimpTdLXFDnnvAiLtXII3RCfWJFmUuC6l6ykjm8KeunwqWqpjIpJzvkHLYTEX30d5YWfuvdHek2PPUb7K242%2BMHoGh4deUQAMKhgotwU%2B%2BqanuTKy1nyIUql73v9VtP0T%2F7%2BP1i6HpN%2BOBDD5sY&X-Amz-Signature=39bd1484f5745cd944b53ddefcba40b488b41fe512c7fe67d11cca75d2e8fa5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQ6ZMBI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVJOEEHYwR8xjIfxKxDXekjgGyt2ooip14nBLECmixgIhANq%2FKvT%2BKK6Ky0m%2FxAVN%2FdXnPoXAoj1KG4sgERvp7s6HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP6tKcL53uJuovUr0q3APF63EcUXs%2FQEDPGiBLynAtOwJHa8J5TjAniqo%2B%2BmWKt8L4VIlm8X0GJIW7T3zfJOdvMU5yFaBpRVt%2BCt%2BkxtnSvCTJ%2FOAegegoo1UFMed6SuC1RVk2zO97Nj2%2Fk9Mlh%2BxxRC%2BOun7e2LvF5tcEVwtxO%2FVqYY6FmnsMXr6vLS36oCi7dQP83i9DgV6jRnjo2pbvFvPy1iS3w%2Fn3lUn9i0si0%2Byfz9X0XkTTa%2FxFhAereBQQ5opasGaGmsmAFwkdKy4yi46Q7j4QHfwLi8VXb1r7T5cE5rW3a1G02ITVtk81TfcZsSC7KcNKe2lrMSedLQej5qloUcBIbJwTp%2FjDQ2yGo8ITyN3MPj6zwkOVmD2IHs%2BGx8sSzdzh8n7YfvRqhlKux5u3kcfBoj0ybb%2FBjctRv2aXN1TQAXvanlOfePfxJZfC0RTR8Va9LoyctqmRq%2Fbz6qjSW3W9GHNjvKyO%2FWEMtSQw0vz9YwyimTfGMduZOz1GzqAT%2Fq7KY1qZZFOzadpgzCG9c1%2BvmXLnLpZN0Vdo2f7tlbQ3NA9BChzixQBwxedJ2%2BK1Q32Q%2BwC7dCBnbT3KAeRaaR4kq1vod9tYtbUcsQRUWuxb6%2FO24QpT6q%2FGD0Qik5iZinaWelyhVjDq7ezBBjqkAfEc0AREJcgiqi65S5VVDF355VfjNHKpQqQwUBAE6M7Ph2XgOFOO%2BJYs%2FT16VbeoJkNpm2boMUimpTdLXFDnnvAiLtXII3RCfWJFmUuC6l6ykjm8KeunwqWqpjIpJzvkHLYTEX30d5YWfuvdHek2PPUb7K242%2BMHoGh4deUQAMKhgotwU%2B%2BqanuTKy1nyIUql73v9VtP0T%2F7%2BP1i6HpN%2BOBDD5sY&X-Amz-Signature=c63f329f9afbbcc7d71616f3c968d10b75e23374a75313efa3a2b9af5cbce6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQ6ZMBI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVJOEEHYwR8xjIfxKxDXekjgGyt2ooip14nBLECmixgIhANq%2FKvT%2BKK6Ky0m%2FxAVN%2FdXnPoXAoj1KG4sgERvp7s6HKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP6tKcL53uJuovUr0q3APF63EcUXs%2FQEDPGiBLynAtOwJHa8J5TjAniqo%2B%2BmWKt8L4VIlm8X0GJIW7T3zfJOdvMU5yFaBpRVt%2BCt%2BkxtnSvCTJ%2FOAegegoo1UFMed6SuC1RVk2zO97Nj2%2Fk9Mlh%2BxxRC%2BOun7e2LvF5tcEVwtxO%2FVqYY6FmnsMXr6vLS36oCi7dQP83i9DgV6jRnjo2pbvFvPy1iS3w%2Fn3lUn9i0si0%2Byfz9X0XkTTa%2FxFhAereBQQ5opasGaGmsmAFwkdKy4yi46Q7j4QHfwLi8VXb1r7T5cE5rW3a1G02ITVtk81TfcZsSC7KcNKe2lrMSedLQej5qloUcBIbJwTp%2FjDQ2yGo8ITyN3MPj6zwkOVmD2IHs%2BGx8sSzdzh8n7YfvRqhlKux5u3kcfBoj0ybb%2FBjctRv2aXN1TQAXvanlOfePfxJZfC0RTR8Va9LoyctqmRq%2Fbz6qjSW3W9GHNjvKyO%2FWEMtSQw0vz9YwyimTfGMduZOz1GzqAT%2Fq7KY1qZZFOzadpgzCG9c1%2BvmXLnLpZN0Vdo2f7tlbQ3NA9BChzixQBwxedJ2%2BK1Q32Q%2BwC7dCBnbT3KAeRaaR4kq1vod9tYtbUcsQRUWuxb6%2FO24QpT6q%2FGD0Qik5iZinaWelyhVjDq7ezBBjqkAfEc0AREJcgiqi65S5VVDF355VfjNHKpQqQwUBAE6M7Ph2XgOFOO%2BJYs%2FT16VbeoJkNpm2boMUimpTdLXFDnnvAiLtXII3RCfWJFmUuC6l6ykjm8KeunwqWqpjIpJzvkHLYTEX30d5YWfuvdHek2PPUb7K242%2BMHoGh4deUQAMKhgotwU%2B%2BqanuTKy1nyIUql73v9VtP0T%2F7%2BP1i6HpN%2BOBDD5sY&X-Amz-Signature=259fafc6247a0220246ab64808a84856290eab1365d28621cba04ab8eaa3d3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
