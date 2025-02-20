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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V22SVNVQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo0mW5V8Q297Nm1D6ocFq5ebRG5ZVtbNXRW5kOcl7esAiAA0Joxy5TFQLRs2tI%2B5mh1sRtL2CweluFQx4%2B04hcHLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8RikujcN6YFKix%2BKtwD9Jt%2F08yP0EzncbKKXftBJyviV87t6LpjofkvK8lKxJiwWsypmYMW2XniGvXl2jus7PsX2Qluo3JBAiAHR0thLLWWQg8n%2F7p2dVut2FRxUpTkRAU4WYRGvGf2TjmH2laysvVX%2F5RRzgMjIYHl4TV6dQlUGTFpQSuBLyAdEYh7F2Gg41907I6JhbzckV2glvaepGjxLRRxqqUZmDlHIwT4K8ayDDpH6N8Db%2Bw8v7je7TSKdM98r2GKbAsJ1pw4zSRXJriMGN1cuGu6H6zGx5DUWuCBTJ49VhbD5KaWtAHsFuJStya89tgoNtrOAhIRYeAyBo1dyhB7cP1%2BAD0QZdUb6Pjq%2BHYKkgjjokyJLZLmILiptYFNZamkRJBAoookvXf1D4YeWYZQLUaFfRjK0KJJGTKLtTupwolbucJdx4GtyMoBpeJUDMSerfPnaaf2tVX4xKs34oj6EkUpQiLk5MWSP8ELOoSrMHcXng6B3Dx6ecF1OkH2LQyPdCBGv15p6WHwd3yvQ%2B5RndYIge3YrDHMEUlV2saGCBWAnEDot2HfHsEteCgE7H5zO10g%2B%2F8CQlgX8diFozLDwqPDiBOi%2B5VO4dOwSVwFIGebgrZGL5FrtG6hewP88roIatubkjEw1dLdvQY6pgFbWYb3ErRIAqquoIZquCk%2FhHvNMy%2BAigeDSg%2FWk71j%2BMYJP%2B5Zosyz9GWGV12h7neal4x3M5EglOu%2FxSmqvVjJkutwyTRsj7%2BN0OAjQMcY5gnnRFANEumeM6OnMyljjcB%2FPQZmaxnA%2BLJAgfRBI%2B%2By9JY0UabLEmMPxr0RVB5zZOdzNAA7IdsOm%2FCZ2vHwuGsqZKj4lL70sRa5gBejLE9yGQy8m60x&X-Amz-Signature=aa64e6ed5a3d0c3c362b2f218f244ff2460d5358ab07948d17661e1ce63abae5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V22SVNVQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo0mW5V8Q297Nm1D6ocFq5ebRG5ZVtbNXRW5kOcl7esAiAA0Joxy5TFQLRs2tI%2B5mh1sRtL2CweluFQx4%2B04hcHLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8RikujcN6YFKix%2BKtwD9Jt%2F08yP0EzncbKKXftBJyviV87t6LpjofkvK8lKxJiwWsypmYMW2XniGvXl2jus7PsX2Qluo3JBAiAHR0thLLWWQg8n%2F7p2dVut2FRxUpTkRAU4WYRGvGf2TjmH2laysvVX%2F5RRzgMjIYHl4TV6dQlUGTFpQSuBLyAdEYh7F2Gg41907I6JhbzckV2glvaepGjxLRRxqqUZmDlHIwT4K8ayDDpH6N8Db%2Bw8v7je7TSKdM98r2GKbAsJ1pw4zSRXJriMGN1cuGu6H6zGx5DUWuCBTJ49VhbD5KaWtAHsFuJStya89tgoNtrOAhIRYeAyBo1dyhB7cP1%2BAD0QZdUb6Pjq%2BHYKkgjjokyJLZLmILiptYFNZamkRJBAoookvXf1D4YeWYZQLUaFfRjK0KJJGTKLtTupwolbucJdx4GtyMoBpeJUDMSerfPnaaf2tVX4xKs34oj6EkUpQiLk5MWSP8ELOoSrMHcXng6B3Dx6ecF1OkH2LQyPdCBGv15p6WHwd3yvQ%2B5RndYIge3YrDHMEUlV2saGCBWAnEDot2HfHsEteCgE7H5zO10g%2B%2F8CQlgX8diFozLDwqPDiBOi%2B5VO4dOwSVwFIGebgrZGL5FrtG6hewP88roIatubkjEw1dLdvQY6pgFbWYb3ErRIAqquoIZquCk%2FhHvNMy%2BAigeDSg%2FWk71j%2BMYJP%2B5Zosyz9GWGV12h7neal4x3M5EglOu%2FxSmqvVjJkutwyTRsj7%2BN0OAjQMcY5gnnRFANEumeM6OnMyljjcB%2FPQZmaxnA%2BLJAgfRBI%2B%2By9JY0UabLEmMPxr0RVB5zZOdzNAA7IdsOm%2FCZ2vHwuGsqZKj4lL70sRa5gBejLE9yGQy8m60x&X-Amz-Signature=b9505b6a83a0ce0935f1ea760e5cd90717cadc623d6e24bb2230bbe5877de612&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V22SVNVQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo0mW5V8Q297Nm1D6ocFq5ebRG5ZVtbNXRW5kOcl7esAiAA0Joxy5TFQLRs2tI%2B5mh1sRtL2CweluFQx4%2B04hcHLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8RikujcN6YFKix%2BKtwD9Jt%2F08yP0EzncbKKXftBJyviV87t6LpjofkvK8lKxJiwWsypmYMW2XniGvXl2jus7PsX2Qluo3JBAiAHR0thLLWWQg8n%2F7p2dVut2FRxUpTkRAU4WYRGvGf2TjmH2laysvVX%2F5RRzgMjIYHl4TV6dQlUGTFpQSuBLyAdEYh7F2Gg41907I6JhbzckV2glvaepGjxLRRxqqUZmDlHIwT4K8ayDDpH6N8Db%2Bw8v7je7TSKdM98r2GKbAsJ1pw4zSRXJriMGN1cuGu6H6zGx5DUWuCBTJ49VhbD5KaWtAHsFuJStya89tgoNtrOAhIRYeAyBo1dyhB7cP1%2BAD0QZdUb6Pjq%2BHYKkgjjokyJLZLmILiptYFNZamkRJBAoookvXf1D4YeWYZQLUaFfRjK0KJJGTKLtTupwolbucJdx4GtyMoBpeJUDMSerfPnaaf2tVX4xKs34oj6EkUpQiLk5MWSP8ELOoSrMHcXng6B3Dx6ecF1OkH2LQyPdCBGv15p6WHwd3yvQ%2B5RndYIge3YrDHMEUlV2saGCBWAnEDot2HfHsEteCgE7H5zO10g%2B%2F8CQlgX8diFozLDwqPDiBOi%2B5VO4dOwSVwFIGebgrZGL5FrtG6hewP88roIatubkjEw1dLdvQY6pgFbWYb3ErRIAqquoIZquCk%2FhHvNMy%2BAigeDSg%2FWk71j%2BMYJP%2B5Zosyz9GWGV12h7neal4x3M5EglOu%2FxSmqvVjJkutwyTRsj7%2BN0OAjQMcY5gnnRFANEumeM6OnMyljjcB%2FPQZmaxnA%2BLJAgfRBI%2B%2By9JY0UabLEmMPxr0RVB5zZOdzNAA7IdsOm%2FCZ2vHwuGsqZKj4lL70sRa5gBejLE9yGQy8m60x&X-Amz-Signature=729d2ff4e377698c35a5d5075228f59bf528256bc5c5562551e1047f53386b85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
