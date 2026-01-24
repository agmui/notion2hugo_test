---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGD7427%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGc%2Br1S7zTrn%2BwN%2B1y2jLD6aY8gABA%2Bgth8%2Bei0aDFZxAiEA%2B4nljADdEX1ikKQ%2BkHNUQqwLlXrKBHNlXtc3456%2B3iUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKKJPmCVxwPGNOdrgSrcA3AArYkXeK4d%2BUhkjmcdZ0PjQfrmeuuh4S8vCD7Tt8zSM5JbwRhLdhVw7N%2B8O0D1Y38b7tgRHLOiy7CsZyVKsn0D47x8Tn5lU8xydwksRck4mVtQ2f8dIrPkRUsz8tulHtsYb3kaEs5j2m2HaAQxnCxV8B%2BlhV81PHSOIkzXmQmaO1hy4KPlr50upMS6Opc5wQKAIB6YaxAuSpLiEvZ6Vrv8oS1zpq8k6Z2f2sOlULheDp2LA0R0K9q%2BWTfdkj%2FYB%2FKyijd5%2FhiIj8Rip99HJklJMPOGzl8zeMENXgps3QPWduiS2fl0FJeMnBZcSeSADfzlUd%2BjbVns%2FJMil4%2BBAEBAijZv047hgvxfa3AQLXQ%2FFPgqww3R7dGGkQmiNQMlFn3EyZAvenmFv7LOhxIx0wdTChrrs5Ak%2BHEZlgCjujFASlYI0s3LgEb7R%2FpwLpTRfk%2F0CrZshun3mdt8zjIoz5IywmI2otPty6IGmHQN3e2N7G7csHO5pkmymhYPkf%2F1SISG%2FP0wnfII6SkQJatcebsHSiduYdsjNUsHVFkPNx6JbvY5dE42BTBv4ZtWMIlHadhbaylVyXN%2B47MR%2BPqJBrwP2WUNrS%2FrSf7%2BVHlRVyGDnwEe8rBWk1ipL2RSMOer0MsGOqUB2xp8PrQX7VMXuEkO01JohjvNgq%2F0jMG76%2F2qsnwu2siR6C1bk9pOR0BQ5h7weGnW7hSXW7XDw5Vpo85oxAK9QMTrdESMguhcMQJbu%2BYJPQgJ89ij6DwHi%2FwdFWC1rCNi%2BiSemcJA%2BxICH14yEKGdM2g0cNhVOFq7TWs78LMBl1KaVm8%2FxP5Qo2NkUeCuNNOgyRj%2B1e6fb1t06%2FN9HK3c%2FhyYO7o6&X-Amz-Signature=7ce4656b3823d4d08da09df37731cbc303aa14d81681ad54897af13d02d3f1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGD7427%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGc%2Br1S7zTrn%2BwN%2B1y2jLD6aY8gABA%2Bgth8%2Bei0aDFZxAiEA%2B4nljADdEX1ikKQ%2BkHNUQqwLlXrKBHNlXtc3456%2B3iUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKKJPmCVxwPGNOdrgSrcA3AArYkXeK4d%2BUhkjmcdZ0PjQfrmeuuh4S8vCD7Tt8zSM5JbwRhLdhVw7N%2B8O0D1Y38b7tgRHLOiy7CsZyVKsn0D47x8Tn5lU8xydwksRck4mVtQ2f8dIrPkRUsz8tulHtsYb3kaEs5j2m2HaAQxnCxV8B%2BlhV81PHSOIkzXmQmaO1hy4KPlr50upMS6Opc5wQKAIB6YaxAuSpLiEvZ6Vrv8oS1zpq8k6Z2f2sOlULheDp2LA0R0K9q%2BWTfdkj%2FYB%2FKyijd5%2FhiIj8Rip99HJklJMPOGzl8zeMENXgps3QPWduiS2fl0FJeMnBZcSeSADfzlUd%2BjbVns%2FJMil4%2BBAEBAijZv047hgvxfa3AQLXQ%2FFPgqww3R7dGGkQmiNQMlFn3EyZAvenmFv7LOhxIx0wdTChrrs5Ak%2BHEZlgCjujFASlYI0s3LgEb7R%2FpwLpTRfk%2F0CrZshun3mdt8zjIoz5IywmI2otPty6IGmHQN3e2N7G7csHO5pkmymhYPkf%2F1SISG%2FP0wnfII6SkQJatcebsHSiduYdsjNUsHVFkPNx6JbvY5dE42BTBv4ZtWMIlHadhbaylVyXN%2B47MR%2BPqJBrwP2WUNrS%2FrSf7%2BVHlRVyGDnwEe8rBWk1ipL2RSMOer0MsGOqUB2xp8PrQX7VMXuEkO01JohjvNgq%2F0jMG76%2F2qsnwu2siR6C1bk9pOR0BQ5h7weGnW7hSXW7XDw5Vpo85oxAK9QMTrdESMguhcMQJbu%2BYJPQgJ89ij6DwHi%2FwdFWC1rCNi%2BiSemcJA%2BxICH14yEKGdM2g0cNhVOFq7TWs78LMBl1KaVm8%2FxP5Qo2NkUeCuNNOgyRj%2B1e6fb1t06%2FN9HK3c%2FhyYO7o6&X-Amz-Signature=bb43c9e1f208594e109355ca0f2d8b980406ffeedf240041b27f9fa65196aa3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGD7427%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGc%2Br1S7zTrn%2BwN%2B1y2jLD6aY8gABA%2Bgth8%2Bei0aDFZxAiEA%2B4nljADdEX1ikKQ%2BkHNUQqwLlXrKBHNlXtc3456%2B3iUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKKJPmCVxwPGNOdrgSrcA3AArYkXeK4d%2BUhkjmcdZ0PjQfrmeuuh4S8vCD7Tt8zSM5JbwRhLdhVw7N%2B8O0D1Y38b7tgRHLOiy7CsZyVKsn0D47x8Tn5lU8xydwksRck4mVtQ2f8dIrPkRUsz8tulHtsYb3kaEs5j2m2HaAQxnCxV8B%2BlhV81PHSOIkzXmQmaO1hy4KPlr50upMS6Opc5wQKAIB6YaxAuSpLiEvZ6Vrv8oS1zpq8k6Z2f2sOlULheDp2LA0R0K9q%2BWTfdkj%2FYB%2FKyijd5%2FhiIj8Rip99HJklJMPOGzl8zeMENXgps3QPWduiS2fl0FJeMnBZcSeSADfzlUd%2BjbVns%2FJMil4%2BBAEBAijZv047hgvxfa3AQLXQ%2FFPgqww3R7dGGkQmiNQMlFn3EyZAvenmFv7LOhxIx0wdTChrrs5Ak%2BHEZlgCjujFASlYI0s3LgEb7R%2FpwLpTRfk%2F0CrZshun3mdt8zjIoz5IywmI2otPty6IGmHQN3e2N7G7csHO5pkmymhYPkf%2F1SISG%2FP0wnfII6SkQJatcebsHSiduYdsjNUsHVFkPNx6JbvY5dE42BTBv4ZtWMIlHadhbaylVyXN%2B47MR%2BPqJBrwP2WUNrS%2FrSf7%2BVHlRVyGDnwEe8rBWk1ipL2RSMOer0MsGOqUB2xp8PrQX7VMXuEkO01JohjvNgq%2F0jMG76%2F2qsnwu2siR6C1bk9pOR0BQ5h7weGnW7hSXW7XDw5Vpo85oxAK9QMTrdESMguhcMQJbu%2BYJPQgJ89ij6DwHi%2FwdFWC1rCNi%2BiSemcJA%2BxICH14yEKGdM2g0cNhVOFq7TWs78LMBl1KaVm8%2FxP5Qo2NkUeCuNNOgyRj%2B1e6fb1t06%2FN9HK3c%2FhyYO7o6&X-Amz-Signature=99f48c25ad18e4a95dfece38a215824b8eb81c85292cb267e0b3593fc6e8a8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
