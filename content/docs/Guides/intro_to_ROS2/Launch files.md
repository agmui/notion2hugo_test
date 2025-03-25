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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXPEYWL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhHu9Hk3fdnLy%2BruYh9LFBDQLPZmV%2FRUgPJXhDV6BnlAiBlLlHJh%2B7Fpr%2BczlvS8WVe%2BYt7ZVu0g%2B%2BJ0zXaXxfdwCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMHAh1VZhCn%2BjW3c6GKtwDnY6ztkRC7Ss82R9QdJPR72BQmSoDVq7aEONNK2OtwgYOiUlnnEL6T2qS3eCVZKuvEoTlf2ZjPZZ6vX9Bk%2FrnDbtsQvd0upbJqX1O8gC7W0Qhhetde%2BSfEDYI5Wo5teIhXyKWtf84UE1lpTKlFwzVU17AV1YSH6KD4WAfwLYLM7n2LBi5EUfSbYcJTCWWnwCRWFCEyzx%2Flq4aDohoR31Axczg1Vb7Fv8N6KtpaFYxZc0oEUrOJyhdxisFSTrpmcoDd%2BG7F0cNSmLHkihOljQKY6AgoE3Ng3b%2BHiKoKEIdMzlvQ5breaMUjS1UW4TOMqE3vheToR%2BY8ywm%2BHRo7haCSgh7UnUtWe2HKXi4CQ4DSp3ryoQNRdR2XpEWVvPSJONaVf3O7YhX%2BQwl%2FK5BBSzYF7ibL%2F675k1TTTILhFPnh2LMcGl3HQ0u2Xw2IN3HVI%2BAc%2Bj2dWIGTUkbxko4iRwmpWJzKwM7q60COPa6f1xbLYQmNyOuy3zOYeaxeATbxqjIH8HDiPWrWMUEeLmgLTLBG7FE10x3WAxxEsamV0y8WD%2FVRx%2B8vdHJDUCXT9aliwaP2QBvypldXAS3S%2B%2F%2BAZgkwbSqruzEcTCc0WGYpHtGRmAwqL2psFIWBlr0VekwqcSLvwY6pgHc3gE9IYVKv3nauh6eHqLKZ6JnuIOKJb4S2R9c11ebLpBAROk2x9tfeS1hvqlztR%2FrSpZqpfbgQeTIB5gBXa2h49qaoxqM3Xyl3a5KD6VaOtFY%2FdR7wKND0cO0hf9LVMo7%2BcFf43WU2ZXZLFkT4UUmT7M%2Bj%2BfBJjX5qSIRqV5EwiKnNPchYiuEsvTj%2BdXwB7c%2FI2qMXuU1DCtwODQ2BlQpp5JxYD0p&X-Amz-Signature=af1201f9291b38a52249d71e89c57d71ecf564557a333cfd1f779813d925aefe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXPEYWL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhHu9Hk3fdnLy%2BruYh9LFBDQLPZmV%2FRUgPJXhDV6BnlAiBlLlHJh%2B7Fpr%2BczlvS8WVe%2BYt7ZVu0g%2B%2BJ0zXaXxfdwCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMHAh1VZhCn%2BjW3c6GKtwDnY6ztkRC7Ss82R9QdJPR72BQmSoDVq7aEONNK2OtwgYOiUlnnEL6T2qS3eCVZKuvEoTlf2ZjPZZ6vX9Bk%2FrnDbtsQvd0upbJqX1O8gC7W0Qhhetde%2BSfEDYI5Wo5teIhXyKWtf84UE1lpTKlFwzVU17AV1YSH6KD4WAfwLYLM7n2LBi5EUfSbYcJTCWWnwCRWFCEyzx%2Flq4aDohoR31Axczg1Vb7Fv8N6KtpaFYxZc0oEUrOJyhdxisFSTrpmcoDd%2BG7F0cNSmLHkihOljQKY6AgoE3Ng3b%2BHiKoKEIdMzlvQ5breaMUjS1UW4TOMqE3vheToR%2BY8ywm%2BHRo7haCSgh7UnUtWe2HKXi4CQ4DSp3ryoQNRdR2XpEWVvPSJONaVf3O7YhX%2BQwl%2FK5BBSzYF7ibL%2F675k1TTTILhFPnh2LMcGl3HQ0u2Xw2IN3HVI%2BAc%2Bj2dWIGTUkbxko4iRwmpWJzKwM7q60COPa6f1xbLYQmNyOuy3zOYeaxeATbxqjIH8HDiPWrWMUEeLmgLTLBG7FE10x3WAxxEsamV0y8WD%2FVRx%2B8vdHJDUCXT9aliwaP2QBvypldXAS3S%2B%2F%2BAZgkwbSqruzEcTCc0WGYpHtGRmAwqL2psFIWBlr0VekwqcSLvwY6pgHc3gE9IYVKv3nauh6eHqLKZ6JnuIOKJb4S2R9c11ebLpBAROk2x9tfeS1hvqlztR%2FrSpZqpfbgQeTIB5gBXa2h49qaoxqM3Xyl3a5KD6VaOtFY%2FdR7wKND0cO0hf9LVMo7%2BcFf43WU2ZXZLFkT4UUmT7M%2Bj%2BfBJjX5qSIRqV5EwiKnNPchYiuEsvTj%2BdXwB7c%2FI2qMXuU1DCtwODQ2BlQpp5JxYD0p&X-Amz-Signature=907c8f3712fba18d39d4c593f083a0ec4d133126f6df67a1b6469943e0a9d400&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXPEYWL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhHu9Hk3fdnLy%2BruYh9LFBDQLPZmV%2FRUgPJXhDV6BnlAiBlLlHJh%2B7Fpr%2BczlvS8WVe%2BYt7ZVu0g%2B%2BJ0zXaXxfdwCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMHAh1VZhCn%2BjW3c6GKtwDnY6ztkRC7Ss82R9QdJPR72BQmSoDVq7aEONNK2OtwgYOiUlnnEL6T2qS3eCVZKuvEoTlf2ZjPZZ6vX9Bk%2FrnDbtsQvd0upbJqX1O8gC7W0Qhhetde%2BSfEDYI5Wo5teIhXyKWtf84UE1lpTKlFwzVU17AV1YSH6KD4WAfwLYLM7n2LBi5EUfSbYcJTCWWnwCRWFCEyzx%2Flq4aDohoR31Axczg1Vb7Fv8N6KtpaFYxZc0oEUrOJyhdxisFSTrpmcoDd%2BG7F0cNSmLHkihOljQKY6AgoE3Ng3b%2BHiKoKEIdMzlvQ5breaMUjS1UW4TOMqE3vheToR%2BY8ywm%2BHRo7haCSgh7UnUtWe2HKXi4CQ4DSp3ryoQNRdR2XpEWVvPSJONaVf3O7YhX%2BQwl%2FK5BBSzYF7ibL%2F675k1TTTILhFPnh2LMcGl3HQ0u2Xw2IN3HVI%2BAc%2Bj2dWIGTUkbxko4iRwmpWJzKwM7q60COPa6f1xbLYQmNyOuy3zOYeaxeATbxqjIH8HDiPWrWMUEeLmgLTLBG7FE10x3WAxxEsamV0y8WD%2FVRx%2B8vdHJDUCXT9aliwaP2QBvypldXAS3S%2B%2F%2BAZgkwbSqruzEcTCc0WGYpHtGRmAwqL2psFIWBlr0VekwqcSLvwY6pgHc3gE9IYVKv3nauh6eHqLKZ6JnuIOKJb4S2R9c11ebLpBAROk2x9tfeS1hvqlztR%2FrSpZqpfbgQeTIB5gBXa2h49qaoxqM3Xyl3a5KD6VaOtFY%2FdR7wKND0cO0hf9LVMo7%2BcFf43WU2ZXZLFkT4UUmT7M%2Bj%2BfBJjX5qSIRqV5EwiKnNPchYiuEsvTj%2BdXwB7c%2FI2qMXuU1DCtwODQ2BlQpp5JxYD0p&X-Amz-Signature=2b75dfcc2be940e777015dee3b53963ed6d04bf224cca71c8c5dd048c1820a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
