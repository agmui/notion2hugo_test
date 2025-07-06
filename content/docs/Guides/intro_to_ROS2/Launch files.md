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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBKXOCY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEqrrO4I6DUcmo9bSE2%2BkhmiQBNST7os3lsmtZPslyNSAiEA%2B8%2Fz1KB5pIgOuAilHJQDhZ%2FknFOa%2FRekOM60RLS%2BRRgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDONU12DbqYZ%2Fzm%2B3fCrcA0ljzWhNBcwnYZEKoM6HgargDAJydISBSOq2q8ndIKuIzSopNEPj2OZGoqvaI%2FgzaAhVde85MQc1VBdJoUQ6Lv49fO2DzmzRbbNPazU9JOLsieWlJG%2BYlgLGe857v8x1Zt2u9G5ppcHR8mHhXP4qvwBk3Q5jHhW3OTO8LIy2HLo8KitOvA%2FNEOoocyo1t0OeMJ2hDhxAnMqkb1lX%2BCWeLgu3dGq2vFgWdEz8AfItBLKl%2BXLZ8wIH7Z7wJ5pnBF9OYehJ4zX45JwdfyTT0Br8XikoFpR2U5S5KcN%2FDTuEApRWy4Od8FA%2BariikjfLMzqiI4wejQQTFAtixn0uCCWpmXnL6QSXCKBoAHxs4GybPxMjN18Gfdzwp4l6MLG2CPmJKXEqGetjJ53tsets0eyD9c7Y%2F7qE8SMRwktOKLXOy5YfLxYvPuKVEmuMjMVSMbrDpAqdUH6P3bZ56BQkxhel0zgC4NRQRQoyuDqGEeOUCWfX3hPBS7cFCGlec7YuiCuzG5r1aiPtwZ7LkEnV2eUKKK82UrtoCfDP8PH%2FT8iexNH88gCTNv95JhSNw6QuitfYzgE%2FsE3BEfvY86YeNioNOF4O69maydEd5pw8xQ4I%2FGqfmdhY5PQBahIfzJa2MPPmqsMGOqUB1mqH39Qs7s%2FOF9tWk6xRCNxtXGrr6%2BmoYllpKTak4Wzb2335RUnikrcQ3vvFKdLystbFhZ0dr93Y3VkpoRwLya3267MxL5U5HBZtIPbVdF1LU4raRdC%2BUd2lfMFCcABP9PNBGfHPkhhDn8eSzMqWs7DWXdTsw%2FYFF%2FW2rwmmrfY5v7jO6vtEr2DM7RVdH0UKMbD34CW%2BuBFtICr0PlH8QxE6znOR&X-Amz-Signature=fc864564ff2b09b783c566511ceb3885c3e9ad82db323c68f8361fd1f85e4a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBKXOCY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEqrrO4I6DUcmo9bSE2%2BkhmiQBNST7os3lsmtZPslyNSAiEA%2B8%2Fz1KB5pIgOuAilHJQDhZ%2FknFOa%2FRekOM60RLS%2BRRgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDONU12DbqYZ%2Fzm%2B3fCrcA0ljzWhNBcwnYZEKoM6HgargDAJydISBSOq2q8ndIKuIzSopNEPj2OZGoqvaI%2FgzaAhVde85MQc1VBdJoUQ6Lv49fO2DzmzRbbNPazU9JOLsieWlJG%2BYlgLGe857v8x1Zt2u9G5ppcHR8mHhXP4qvwBk3Q5jHhW3OTO8LIy2HLo8KitOvA%2FNEOoocyo1t0OeMJ2hDhxAnMqkb1lX%2BCWeLgu3dGq2vFgWdEz8AfItBLKl%2BXLZ8wIH7Z7wJ5pnBF9OYehJ4zX45JwdfyTT0Br8XikoFpR2U5S5KcN%2FDTuEApRWy4Od8FA%2BariikjfLMzqiI4wejQQTFAtixn0uCCWpmXnL6QSXCKBoAHxs4GybPxMjN18Gfdzwp4l6MLG2CPmJKXEqGetjJ53tsets0eyD9c7Y%2F7qE8SMRwktOKLXOy5YfLxYvPuKVEmuMjMVSMbrDpAqdUH6P3bZ56BQkxhel0zgC4NRQRQoyuDqGEeOUCWfX3hPBS7cFCGlec7YuiCuzG5r1aiPtwZ7LkEnV2eUKKK82UrtoCfDP8PH%2FT8iexNH88gCTNv95JhSNw6QuitfYzgE%2FsE3BEfvY86YeNioNOF4O69maydEd5pw8xQ4I%2FGqfmdhY5PQBahIfzJa2MPPmqsMGOqUB1mqH39Qs7s%2FOF9tWk6xRCNxtXGrr6%2BmoYllpKTak4Wzb2335RUnikrcQ3vvFKdLystbFhZ0dr93Y3VkpoRwLya3267MxL5U5HBZtIPbVdF1LU4raRdC%2BUd2lfMFCcABP9PNBGfHPkhhDn8eSzMqWs7DWXdTsw%2FYFF%2FW2rwmmrfY5v7jO6vtEr2DM7RVdH0UKMbD34CW%2BuBFtICr0PlH8QxE6znOR&X-Amz-Signature=47a1b0a68bc14ef8a694f45909550cc483f39905b2d5fed7c34c4abde2be05f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBKXOCY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEqrrO4I6DUcmo9bSE2%2BkhmiQBNST7os3lsmtZPslyNSAiEA%2B8%2Fz1KB5pIgOuAilHJQDhZ%2FknFOa%2FRekOM60RLS%2BRRgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDONU12DbqYZ%2Fzm%2B3fCrcA0ljzWhNBcwnYZEKoM6HgargDAJydISBSOq2q8ndIKuIzSopNEPj2OZGoqvaI%2FgzaAhVde85MQc1VBdJoUQ6Lv49fO2DzmzRbbNPazU9JOLsieWlJG%2BYlgLGe857v8x1Zt2u9G5ppcHR8mHhXP4qvwBk3Q5jHhW3OTO8LIy2HLo8KitOvA%2FNEOoocyo1t0OeMJ2hDhxAnMqkb1lX%2BCWeLgu3dGq2vFgWdEz8AfItBLKl%2BXLZ8wIH7Z7wJ5pnBF9OYehJ4zX45JwdfyTT0Br8XikoFpR2U5S5KcN%2FDTuEApRWy4Od8FA%2BariikjfLMzqiI4wejQQTFAtixn0uCCWpmXnL6QSXCKBoAHxs4GybPxMjN18Gfdzwp4l6MLG2CPmJKXEqGetjJ53tsets0eyD9c7Y%2F7qE8SMRwktOKLXOy5YfLxYvPuKVEmuMjMVSMbrDpAqdUH6P3bZ56BQkxhel0zgC4NRQRQoyuDqGEeOUCWfX3hPBS7cFCGlec7YuiCuzG5r1aiPtwZ7LkEnV2eUKKK82UrtoCfDP8PH%2FT8iexNH88gCTNv95JhSNw6QuitfYzgE%2FsE3BEfvY86YeNioNOF4O69maydEd5pw8xQ4I%2FGqfmdhY5PQBahIfzJa2MPPmqsMGOqUB1mqH39Qs7s%2FOF9tWk6xRCNxtXGrr6%2BmoYllpKTak4Wzb2335RUnikrcQ3vvFKdLystbFhZ0dr93Y3VkpoRwLya3267MxL5U5HBZtIPbVdF1LU4raRdC%2BUd2lfMFCcABP9PNBGfHPkhhDn8eSzMqWs7DWXdTsw%2FYFF%2FW2rwmmrfY5v7jO6vtEr2DM7RVdH0UKMbD34CW%2BuBFtICr0PlH8QxE6znOR&X-Amz-Signature=3096c5ba2f2bd505397b5bbc43a135be20946cd2a2ab207b14f878d7b54946bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
