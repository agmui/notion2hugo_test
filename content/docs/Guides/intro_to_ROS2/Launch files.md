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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZYRVWT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIyma%2FUb%2BJlaIpz9dmQinZyBn70%2B2KriohgMDVW85aXAiEArFtQFj%2Bvz8XQyTVyl5GrZ%2Fce4b%2Bi24WzyR3xNcXmtesqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmr6CtR4TGLZs62RircA%2B3raNGPTAj1Ep01nI9QiY0kPM5XMdPb%2B0oMyJwWHjJOECtk2Gvy%2BD7pGWUSsNPykuuXKHTt09sjSqbjm7sqYVzpqG0XrDk%2FlIzc0wZdo%2FpYR29tWp62C2EOcrYcCALVrgz%2BLyMutdO4OC6nfvTE0bS%2FhBkGuOv5NVdh%2BMQwgvcsVxg30t%2Bx6f7QSE869JheglBkBERoXZwsjI03brbWlNGAkNDDmX3TvWm6dY7%2FccaWO%2BNAzeAF%2F66zypN26CQc7jaDwLvY2bA2omNm7l9jcPfachD496Z45l0hpHVxWRJqsBC78IioEXJ3PkWwJwsSqAR8i8y2anBfUB4iJlM8okzKroCFI1MwZQ3Gm44MRRGzOIB51r6T7RQEM1fFssMNYk4I5%2F%2F%2BbOYKRLlva13pAOAIRqlyl8Suk%2FUZIIt6%2Fp7jOSn9co%2FfE61mfYpC2%2FFHp7uCkD%2BbVKN5ZxIuOrxAvVPZc0jZViN5dFbkeKCUArIw93EgOeL3GauWozenyo26szZy%2F%2BT0wftZ7peQhxXMpRxiaY7NJEGj0CbVYbv0XJ9aAKxtR%2F1OgIzcFOpYbYyk%2BiBVdVx1ALDvMKDgZeS6TlN69ZG%2FETfVFh61XgKYpZy22pat46gwXhPq43rHMKidmsIGOqUB3DntvbiwwAt2g7%2FCO55BV3L73Co9po5n4ipARWBIdugMYYDRLIwdWiyYSWYp4lc3q6IQCx0Vllvl%2FfdN9Ah9Nt9TKbIWEIRqHvD0VVUaK8YaGky9Quc%2Bfr4bdGD18bYLLcRfrby6brbw9b125TtKYVx5QvX4ASRVa47cUHHnJYNn6Iwiq0YhqbxE798KvRBQGvCxJkZ0ihRzk8ypUtAJJ%2FDr11dl&X-Amz-Signature=98f37a1ee156cda3dc793a01ff7d0132cb32012ef95949eccdf455264c741196&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZYRVWT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIyma%2FUb%2BJlaIpz9dmQinZyBn70%2B2KriohgMDVW85aXAiEArFtQFj%2Bvz8XQyTVyl5GrZ%2Fce4b%2Bi24WzyR3xNcXmtesqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmr6CtR4TGLZs62RircA%2B3raNGPTAj1Ep01nI9QiY0kPM5XMdPb%2B0oMyJwWHjJOECtk2Gvy%2BD7pGWUSsNPykuuXKHTt09sjSqbjm7sqYVzpqG0XrDk%2FlIzc0wZdo%2FpYR29tWp62C2EOcrYcCALVrgz%2BLyMutdO4OC6nfvTE0bS%2FhBkGuOv5NVdh%2BMQwgvcsVxg30t%2Bx6f7QSE869JheglBkBERoXZwsjI03brbWlNGAkNDDmX3TvWm6dY7%2FccaWO%2BNAzeAF%2F66zypN26CQc7jaDwLvY2bA2omNm7l9jcPfachD496Z45l0hpHVxWRJqsBC78IioEXJ3PkWwJwsSqAR8i8y2anBfUB4iJlM8okzKroCFI1MwZQ3Gm44MRRGzOIB51r6T7RQEM1fFssMNYk4I5%2F%2F%2BbOYKRLlva13pAOAIRqlyl8Suk%2FUZIIt6%2Fp7jOSn9co%2FfE61mfYpC2%2FFHp7uCkD%2BbVKN5ZxIuOrxAvVPZc0jZViN5dFbkeKCUArIw93EgOeL3GauWozenyo26szZy%2F%2BT0wftZ7peQhxXMpRxiaY7NJEGj0CbVYbv0XJ9aAKxtR%2F1OgIzcFOpYbYyk%2BiBVdVx1ALDvMKDgZeS6TlN69ZG%2FETfVFh61XgKYpZy22pat46gwXhPq43rHMKidmsIGOqUB3DntvbiwwAt2g7%2FCO55BV3L73Co9po5n4ipARWBIdugMYYDRLIwdWiyYSWYp4lc3q6IQCx0Vllvl%2FfdN9Ah9Nt9TKbIWEIRqHvD0VVUaK8YaGky9Quc%2Bfr4bdGD18bYLLcRfrby6brbw9b125TtKYVx5QvX4ASRVa47cUHHnJYNn6Iwiq0YhqbxE798KvRBQGvCxJkZ0ihRzk8ypUtAJJ%2FDr11dl&X-Amz-Signature=460d32d3011ec2b0c54ce1aa82c5ebdec2ad61149207545b5513fc8f79b3d10c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZYRVWT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIyma%2FUb%2BJlaIpz9dmQinZyBn70%2B2KriohgMDVW85aXAiEArFtQFj%2Bvz8XQyTVyl5GrZ%2Fce4b%2Bi24WzyR3xNcXmtesqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmr6CtR4TGLZs62RircA%2B3raNGPTAj1Ep01nI9QiY0kPM5XMdPb%2B0oMyJwWHjJOECtk2Gvy%2BD7pGWUSsNPykuuXKHTt09sjSqbjm7sqYVzpqG0XrDk%2FlIzc0wZdo%2FpYR29tWp62C2EOcrYcCALVrgz%2BLyMutdO4OC6nfvTE0bS%2FhBkGuOv5NVdh%2BMQwgvcsVxg30t%2Bx6f7QSE869JheglBkBERoXZwsjI03brbWlNGAkNDDmX3TvWm6dY7%2FccaWO%2BNAzeAF%2F66zypN26CQc7jaDwLvY2bA2omNm7l9jcPfachD496Z45l0hpHVxWRJqsBC78IioEXJ3PkWwJwsSqAR8i8y2anBfUB4iJlM8okzKroCFI1MwZQ3Gm44MRRGzOIB51r6T7RQEM1fFssMNYk4I5%2F%2F%2BbOYKRLlva13pAOAIRqlyl8Suk%2FUZIIt6%2Fp7jOSn9co%2FfE61mfYpC2%2FFHp7uCkD%2BbVKN5ZxIuOrxAvVPZc0jZViN5dFbkeKCUArIw93EgOeL3GauWozenyo26szZy%2F%2BT0wftZ7peQhxXMpRxiaY7NJEGj0CbVYbv0XJ9aAKxtR%2F1OgIzcFOpYbYyk%2BiBVdVx1ALDvMKDgZeS6TlN69ZG%2FETfVFh61XgKYpZy22pat46gwXhPq43rHMKidmsIGOqUB3DntvbiwwAt2g7%2FCO55BV3L73Co9po5n4ipARWBIdugMYYDRLIwdWiyYSWYp4lc3q6IQCx0Vllvl%2FfdN9Ah9Nt9TKbIWEIRqHvD0VVUaK8YaGky9Quc%2Bfr4bdGD18bYLLcRfrby6brbw9b125TtKYVx5QvX4ASRVa47cUHHnJYNn6Iwiq0YhqbxE798KvRBQGvCxJkZ0ihRzk8ypUtAJJ%2FDr11dl&X-Amz-Signature=17e1e4be194d8c95942547a101004ed66bb821866c2173350cd2e4ea6cb1cfb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
