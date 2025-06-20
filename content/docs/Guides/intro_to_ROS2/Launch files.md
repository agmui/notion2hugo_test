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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G63OTMD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtqZrg51t%2BzVgJnItvLYTLmBjpybj8gqcjCIJ9xb54MAiEAtedMmVhwDaveQgXrc41QhGUTm1SNSFvDI2HoyF7893kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD30AGpE1vWefTfWmCrcA%2FrYjatTfqRqNDBnDbsTd9Hr%2BvSau4Rz1otkSLOwj5sCuErllBYRI7bfbmeuRkBQA96cbsCamqFLFZUTzXlF8uESorGJxp62i%2B4%2FSlB%2BHDcievVSA%2FL%2FZWYERd6jHDvRxt9mT28gcZBMb93i7LIk5SwOFadAstiMR6QvkNK%2BC3o4C0M%2F6REknaeXSNBiYvXMwleaDqYSJw%2Bn2%2F%2BUo6%2BIbilcOJpKzJprMgNPTrD4ygTs8fBfknwEexkc1mjka9GLZdbKBvTs6Tx%2BmKSY58FZvaSOsW%2B18QbbtDYK7gY68lefeABPcoYSoMJt6hnx1vuIitaawgh1OP9zSxM%2FIKYfjW9ifsk%2Fx4uJy2zUSaEDynCLMCwLM5J4UAaogzGsvJR85Ot5iwtWiUDNpNm6YT43IRTUB1iGunIeRgQ3wkLZWKwMhZs1JB%2BMgBcLAHOw%2Be7tWi6qMDCk%2B%2BsyhhN8QXYky2QtY9O3VhRFI2vQRbAX5CgKkyAZEVlex%2Fx19QuRxGW1XeBFPkkkhC7LOqf%2F1B1DKJh9%2FQ4E04wJokJLhLxevjeQ9LQohn%2FrHnuRvG%2BV%2BsoP%2BH3UCOKr0McxN6uqsHEgVAAxrECjx2Tl39cQvMQj2w2aFC0vsN%2BpftRGoLU8MMq908IGOqUBcnyr7fzXFYxJp60Q9JW8qb2nV50vkre7blR3%2BGck8%2F%2Fd6E4VI%2BWW8rRYhlAItwLQwZvjmbB38ioJEwNcDOD4RriK%2BsdFSmFLkPA6ZVTR4610NBl1xuNFgsdMTQ7F9g6yh%2FQbUyXY1vJH5aCkQQq4mR3LGY4jJpKGpLYA3p9YSINJcqEcOL1LLSlbv9Oq8yJ%2BZjPkpJ4Kak42AihQWc2yxoYMywWy&X-Amz-Signature=9efa7977f6384b69a9c56887f811413a0eed7ed6f4b04a876ac1f1acec068028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G63OTMD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtqZrg51t%2BzVgJnItvLYTLmBjpybj8gqcjCIJ9xb54MAiEAtedMmVhwDaveQgXrc41QhGUTm1SNSFvDI2HoyF7893kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD30AGpE1vWefTfWmCrcA%2FrYjatTfqRqNDBnDbsTd9Hr%2BvSau4Rz1otkSLOwj5sCuErllBYRI7bfbmeuRkBQA96cbsCamqFLFZUTzXlF8uESorGJxp62i%2B4%2FSlB%2BHDcievVSA%2FL%2FZWYERd6jHDvRxt9mT28gcZBMb93i7LIk5SwOFadAstiMR6QvkNK%2BC3o4C0M%2F6REknaeXSNBiYvXMwleaDqYSJw%2Bn2%2F%2BUo6%2BIbilcOJpKzJprMgNPTrD4ygTs8fBfknwEexkc1mjka9GLZdbKBvTs6Tx%2BmKSY58FZvaSOsW%2B18QbbtDYK7gY68lefeABPcoYSoMJt6hnx1vuIitaawgh1OP9zSxM%2FIKYfjW9ifsk%2Fx4uJy2zUSaEDynCLMCwLM5J4UAaogzGsvJR85Ot5iwtWiUDNpNm6YT43IRTUB1iGunIeRgQ3wkLZWKwMhZs1JB%2BMgBcLAHOw%2Be7tWi6qMDCk%2B%2BsyhhN8QXYky2QtY9O3VhRFI2vQRbAX5CgKkyAZEVlex%2Fx19QuRxGW1XeBFPkkkhC7LOqf%2F1B1DKJh9%2FQ4E04wJokJLhLxevjeQ9LQohn%2FrHnuRvG%2BV%2BsoP%2BH3UCOKr0McxN6uqsHEgVAAxrECjx2Tl39cQvMQj2w2aFC0vsN%2BpftRGoLU8MMq908IGOqUBcnyr7fzXFYxJp60Q9JW8qb2nV50vkre7blR3%2BGck8%2F%2Fd6E4VI%2BWW8rRYhlAItwLQwZvjmbB38ioJEwNcDOD4RriK%2BsdFSmFLkPA6ZVTR4610NBl1xuNFgsdMTQ7F9g6yh%2FQbUyXY1vJH5aCkQQq4mR3LGY4jJpKGpLYA3p9YSINJcqEcOL1LLSlbv9Oq8yJ%2BZjPkpJ4Kak42AihQWc2yxoYMywWy&X-Amz-Signature=06fbdf47a514e4bcb0e5c2b890af6947a0f12b6585213c5ccc2a93bdac1b7a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G63OTMD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtqZrg51t%2BzVgJnItvLYTLmBjpybj8gqcjCIJ9xb54MAiEAtedMmVhwDaveQgXrc41QhGUTm1SNSFvDI2HoyF7893kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD30AGpE1vWefTfWmCrcA%2FrYjatTfqRqNDBnDbsTd9Hr%2BvSau4Rz1otkSLOwj5sCuErllBYRI7bfbmeuRkBQA96cbsCamqFLFZUTzXlF8uESorGJxp62i%2B4%2FSlB%2BHDcievVSA%2FL%2FZWYERd6jHDvRxt9mT28gcZBMb93i7LIk5SwOFadAstiMR6QvkNK%2BC3o4C0M%2F6REknaeXSNBiYvXMwleaDqYSJw%2Bn2%2F%2BUo6%2BIbilcOJpKzJprMgNPTrD4ygTs8fBfknwEexkc1mjka9GLZdbKBvTs6Tx%2BmKSY58FZvaSOsW%2B18QbbtDYK7gY68lefeABPcoYSoMJt6hnx1vuIitaawgh1OP9zSxM%2FIKYfjW9ifsk%2Fx4uJy2zUSaEDynCLMCwLM5J4UAaogzGsvJR85Ot5iwtWiUDNpNm6YT43IRTUB1iGunIeRgQ3wkLZWKwMhZs1JB%2BMgBcLAHOw%2Be7tWi6qMDCk%2B%2BsyhhN8QXYky2QtY9O3VhRFI2vQRbAX5CgKkyAZEVlex%2Fx19QuRxGW1XeBFPkkkhC7LOqf%2F1B1DKJh9%2FQ4E04wJokJLhLxevjeQ9LQohn%2FrHnuRvG%2BV%2BsoP%2BH3UCOKr0McxN6uqsHEgVAAxrECjx2Tl39cQvMQj2w2aFC0vsN%2BpftRGoLU8MMq908IGOqUBcnyr7fzXFYxJp60Q9JW8qb2nV50vkre7blR3%2BGck8%2F%2Fd6E4VI%2BWW8rRYhlAItwLQwZvjmbB38ioJEwNcDOD4RriK%2BsdFSmFLkPA6ZVTR4610NBl1xuNFgsdMTQ7F9g6yh%2FQbUyXY1vJH5aCkQQq4mR3LGY4jJpKGpLYA3p9YSINJcqEcOL1LLSlbv9Oq8yJ%2BZjPkpJ4Kak42AihQWc2yxoYMywWy&X-Amz-Signature=2e1c68ea1aea305e0369c04795fbf27c6471335806300033d98d269585b7026c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
