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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZI3EA4W%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBMxXHGKyU9mysq6ucPS6Mt%2BvXJdFcBSE2%2B%2Fm37l2p5xAiEA%2FFEyLi6pgDehk702TfcPxNuT1l1mF5haM4fZiaQsefwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyu%2BkFUaq5ElGpQiircA6%2BKzyaQ1qKjxMGdTMluZtT7FUC%2BZDMaQi1%2F580hi53cG33dcFLn3dxTjmJbJijK7cMpZwjDf9i46J4x2HJNoWFfirywk5t6Lv2DhCU5k8HZYRhJyUFck%2BcrJzRkrZGsOTjYJv1ucTYsZ6pNEdo0fRZ10skUQ1YWlgNnCik4%2FyuYPbGTAdHDeopLQfmTfCia3JOpYYS3hB5sy2QP9h1kzT%2FBUPTd8s%2FMBbUJU94zavzcXDQwxDH8NPNLkf4E7RBWH0ppLv5641iSedVjY5N8WWEteuO1hYE6p0pTNc3%2FeKN2zHA4VaOByFCAVKYUF0VifKnpJ9wuxIoCGuYR9kvDYkzozuq0yT4rvLTJf5A%2FDpAS2uabpVtK41AIouGC1B6j1umoSfhT7%2FTaX1myw0pD0SsjhxQBLSq6mShLPGOX5TsjQNm9V15g6vuDs3YeCSsVLTp17Nmok12123TJvjquZhp2Aj6GmDZcNQSylJw8xErP5qfuWgfb2e%2FB0y%2BP%2B4oHT7xzGBF9%2BjvVPHQ9y1bnOyBLJEkcn1HeynBYDcxs8De980oXMUhk6TWBU1EULkFKuJABdEFS2Mzra8ZUVIpbQjaIkaAWKSxivxkqQHT2kS%2FAZFmhmuE5BYreyfzSMPH1jr4GOqUBsHqURZudn3gtkr2KcXV8fHCGjuimxXQ4x53XuxiQj7tX%2FOnA2bhS%2F81q0C7rb%2Bsbgj0aZeKePfyUVyIKSi05viNylf6ULNjJ3Z74QvwR8lQ0AzP%2Fybw9gdjDznP2UQRcLO7AfFLva7Y6ZUO75NSQMZCa9DzB7V1zbJIU8Czvtip62LNkF%2Foe6L3c7oqFm06vHl1y8XPuBoaYu8h4CRTOt5Px72b8&X-Amz-Signature=b5d9804dc439f8983a690a54a6968e173964530fdaa8a1ad92db21e99430aa76&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZI3EA4W%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBMxXHGKyU9mysq6ucPS6Mt%2BvXJdFcBSE2%2B%2Fm37l2p5xAiEA%2FFEyLi6pgDehk702TfcPxNuT1l1mF5haM4fZiaQsefwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyu%2BkFUaq5ElGpQiircA6%2BKzyaQ1qKjxMGdTMluZtT7FUC%2BZDMaQi1%2F580hi53cG33dcFLn3dxTjmJbJijK7cMpZwjDf9i46J4x2HJNoWFfirywk5t6Lv2DhCU5k8HZYRhJyUFck%2BcrJzRkrZGsOTjYJv1ucTYsZ6pNEdo0fRZ10skUQ1YWlgNnCik4%2FyuYPbGTAdHDeopLQfmTfCia3JOpYYS3hB5sy2QP9h1kzT%2FBUPTd8s%2FMBbUJU94zavzcXDQwxDH8NPNLkf4E7RBWH0ppLv5641iSedVjY5N8WWEteuO1hYE6p0pTNc3%2FeKN2zHA4VaOByFCAVKYUF0VifKnpJ9wuxIoCGuYR9kvDYkzozuq0yT4rvLTJf5A%2FDpAS2uabpVtK41AIouGC1B6j1umoSfhT7%2FTaX1myw0pD0SsjhxQBLSq6mShLPGOX5TsjQNm9V15g6vuDs3YeCSsVLTp17Nmok12123TJvjquZhp2Aj6GmDZcNQSylJw8xErP5qfuWgfb2e%2FB0y%2BP%2B4oHT7xzGBF9%2BjvVPHQ9y1bnOyBLJEkcn1HeynBYDcxs8De980oXMUhk6TWBU1EULkFKuJABdEFS2Mzra8ZUVIpbQjaIkaAWKSxivxkqQHT2kS%2FAZFmhmuE5BYreyfzSMPH1jr4GOqUBsHqURZudn3gtkr2KcXV8fHCGjuimxXQ4x53XuxiQj7tX%2FOnA2bhS%2F81q0C7rb%2Bsbgj0aZeKePfyUVyIKSi05viNylf6ULNjJ3Z74QvwR8lQ0AzP%2Fybw9gdjDznP2UQRcLO7AfFLva7Y6ZUO75NSQMZCa9DzB7V1zbJIU8Czvtip62LNkF%2Foe6L3c7oqFm06vHl1y8XPuBoaYu8h4CRTOt5Px72b8&X-Amz-Signature=fee4e1fa8965bf12d67d9cfbfbba19fe95dec81ad36787eaa1e98bd299959c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZI3EA4W%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBMxXHGKyU9mysq6ucPS6Mt%2BvXJdFcBSE2%2B%2Fm37l2p5xAiEA%2FFEyLi6pgDehk702TfcPxNuT1l1mF5haM4fZiaQsefwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyu%2BkFUaq5ElGpQiircA6%2BKzyaQ1qKjxMGdTMluZtT7FUC%2BZDMaQi1%2F580hi53cG33dcFLn3dxTjmJbJijK7cMpZwjDf9i46J4x2HJNoWFfirywk5t6Lv2DhCU5k8HZYRhJyUFck%2BcrJzRkrZGsOTjYJv1ucTYsZ6pNEdo0fRZ10skUQ1YWlgNnCik4%2FyuYPbGTAdHDeopLQfmTfCia3JOpYYS3hB5sy2QP9h1kzT%2FBUPTd8s%2FMBbUJU94zavzcXDQwxDH8NPNLkf4E7RBWH0ppLv5641iSedVjY5N8WWEteuO1hYE6p0pTNc3%2FeKN2zHA4VaOByFCAVKYUF0VifKnpJ9wuxIoCGuYR9kvDYkzozuq0yT4rvLTJf5A%2FDpAS2uabpVtK41AIouGC1B6j1umoSfhT7%2FTaX1myw0pD0SsjhxQBLSq6mShLPGOX5TsjQNm9V15g6vuDs3YeCSsVLTp17Nmok12123TJvjquZhp2Aj6GmDZcNQSylJw8xErP5qfuWgfb2e%2FB0y%2BP%2B4oHT7xzGBF9%2BjvVPHQ9y1bnOyBLJEkcn1HeynBYDcxs8De980oXMUhk6TWBU1EULkFKuJABdEFS2Mzra8ZUVIpbQjaIkaAWKSxivxkqQHT2kS%2FAZFmhmuE5BYreyfzSMPH1jr4GOqUBsHqURZudn3gtkr2KcXV8fHCGjuimxXQ4x53XuxiQj7tX%2FOnA2bhS%2F81q0C7rb%2Bsbgj0aZeKePfyUVyIKSi05viNylf6ULNjJ3Z74QvwR8lQ0AzP%2Fybw9gdjDznP2UQRcLO7AfFLva7Y6ZUO75NSQMZCa9DzB7V1zbJIU8Czvtip62LNkF%2Foe6L3c7oqFm06vHl1y8XPuBoaYu8h4CRTOt5Px72b8&X-Amz-Signature=2cf6b0abd9b120563b3461e647531d4063f7a85796fd00274ffa7baa7cabe9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
