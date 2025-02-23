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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E4OGSQ4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3xAPSNE7OL5GNavVIAYO0CGyuPUS%2FCyN%2BUZuHJH5RkAIgLU2gHluiB4lG6LdqDgkDh25tKGIyEwCTtkHw8ySwFzgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdSaiR6yZA3xVNooCrcA5xOi7Xrgndjzo8GkpvVQz8Hu7Mk2xyxTjtlhzERipGSLY5ss7Bb0CA4%2F%2FE8TrQFaqjexng8CucbLlqYCOrS184hjmXz2EYqg2ehkAIrx4wBCZ2lccn77S8uwDA1G7%2FJrvOafgkTHybkIG7u%2BjV3sa58gXqTvhqW41r7GIj2M%2FY7etcfGrM6zVgrsT5thoS6d5ImGsbc7Ft%2BUoa5gPSG5Fzqbd%2BVtnCctfSHxUTQMzdL9EQ2%2BJXuOOd7g%2Bg2SU%2Fo9ymxn%2BvhMP5HnX2VE9ETEp6%2BPHYcEmAjEzuMfMqY5wcTqNI2sHGWgGhcodaITauHv8oO%2F4DeM9fHzFT5Fma13rZMxahUB2KG8o2YijLHvwKU0VHogSbnm74MKi25N5dgVVPjVyjp5UtugKWrG1UZw%2FKZNZodMFRQn5s0x6VTxXvoBPwTRsbutYZzKky%2BnXEx7JLlS7bxdfdjAi0Ywgrbx5MGPVAxc8lCf9hWpIBANse0%2BVaIuNA37QMUz8IFwe9oPsx2NRe4invVABzyhRScsx%2F33yKhEF2vOykj8IbEMhR6F6T4ny04cHK5XPNG4OvIdcLwngzMlPnxwCVJEnITxYi85Dbs%2BbT8UshhB3oaNtXEBlqVay1IuvRaCsyTMJO%2B6b0GOqUBNe%2BPTCG%2BCOOllPSa9jvbMiJ7WfQcE4Jlf6LHXFDW3axTwWTm1%2FzhD4fbAQiUquCyJTFtR3A31%2FkiLkmSLom7aedhGtbuF58D6GP8Ttytl5bZ%2Bsj2%2Bde3aQzOpIL%2ByjYv62kAOu%2B7Kg8J9B5TUtzISp9oZb45%2BmYNr%2FbxPbtzP%2FLDDInSNUgz5NQkyn7izbSASjA1dkANdie0nuU7no0tRIB%2B7Zrj&X-Amz-Signature=f14bf90e87d2bb89928eaf7ad38b51528166bb5730df5949bda4fe18d17ef37e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E4OGSQ4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3xAPSNE7OL5GNavVIAYO0CGyuPUS%2FCyN%2BUZuHJH5RkAIgLU2gHluiB4lG6LdqDgkDh25tKGIyEwCTtkHw8ySwFzgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdSaiR6yZA3xVNooCrcA5xOi7Xrgndjzo8GkpvVQz8Hu7Mk2xyxTjtlhzERipGSLY5ss7Bb0CA4%2F%2FE8TrQFaqjexng8CucbLlqYCOrS184hjmXz2EYqg2ehkAIrx4wBCZ2lccn77S8uwDA1G7%2FJrvOafgkTHybkIG7u%2BjV3sa58gXqTvhqW41r7GIj2M%2FY7etcfGrM6zVgrsT5thoS6d5ImGsbc7Ft%2BUoa5gPSG5Fzqbd%2BVtnCctfSHxUTQMzdL9EQ2%2BJXuOOd7g%2Bg2SU%2Fo9ymxn%2BvhMP5HnX2VE9ETEp6%2BPHYcEmAjEzuMfMqY5wcTqNI2sHGWgGhcodaITauHv8oO%2F4DeM9fHzFT5Fma13rZMxahUB2KG8o2YijLHvwKU0VHogSbnm74MKi25N5dgVVPjVyjp5UtugKWrG1UZw%2FKZNZodMFRQn5s0x6VTxXvoBPwTRsbutYZzKky%2BnXEx7JLlS7bxdfdjAi0Ywgrbx5MGPVAxc8lCf9hWpIBANse0%2BVaIuNA37QMUz8IFwe9oPsx2NRe4invVABzyhRScsx%2F33yKhEF2vOykj8IbEMhR6F6T4ny04cHK5XPNG4OvIdcLwngzMlPnxwCVJEnITxYi85Dbs%2BbT8UshhB3oaNtXEBlqVay1IuvRaCsyTMJO%2B6b0GOqUBNe%2BPTCG%2BCOOllPSa9jvbMiJ7WfQcE4Jlf6LHXFDW3axTwWTm1%2FzhD4fbAQiUquCyJTFtR3A31%2FkiLkmSLom7aedhGtbuF58D6GP8Ttytl5bZ%2Bsj2%2Bde3aQzOpIL%2ByjYv62kAOu%2B7Kg8J9B5TUtzISp9oZb45%2BmYNr%2FbxPbtzP%2FLDDInSNUgz5NQkyn7izbSASjA1dkANdie0nuU7no0tRIB%2B7Zrj&X-Amz-Signature=5ea66b13dc7127cbcb6957a4c75a105ae1f8acf7a03690b24ae83510abbe0023&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E4OGSQ4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3xAPSNE7OL5GNavVIAYO0CGyuPUS%2FCyN%2BUZuHJH5RkAIgLU2gHluiB4lG6LdqDgkDh25tKGIyEwCTtkHw8ySwFzgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdSaiR6yZA3xVNooCrcA5xOi7Xrgndjzo8GkpvVQz8Hu7Mk2xyxTjtlhzERipGSLY5ss7Bb0CA4%2F%2FE8TrQFaqjexng8CucbLlqYCOrS184hjmXz2EYqg2ehkAIrx4wBCZ2lccn77S8uwDA1G7%2FJrvOafgkTHybkIG7u%2BjV3sa58gXqTvhqW41r7GIj2M%2FY7etcfGrM6zVgrsT5thoS6d5ImGsbc7Ft%2BUoa5gPSG5Fzqbd%2BVtnCctfSHxUTQMzdL9EQ2%2BJXuOOd7g%2Bg2SU%2Fo9ymxn%2BvhMP5HnX2VE9ETEp6%2BPHYcEmAjEzuMfMqY5wcTqNI2sHGWgGhcodaITauHv8oO%2F4DeM9fHzFT5Fma13rZMxahUB2KG8o2YijLHvwKU0VHogSbnm74MKi25N5dgVVPjVyjp5UtugKWrG1UZw%2FKZNZodMFRQn5s0x6VTxXvoBPwTRsbutYZzKky%2BnXEx7JLlS7bxdfdjAi0Ywgrbx5MGPVAxc8lCf9hWpIBANse0%2BVaIuNA37QMUz8IFwe9oPsx2NRe4invVABzyhRScsx%2F33yKhEF2vOykj8IbEMhR6F6T4ny04cHK5XPNG4OvIdcLwngzMlPnxwCVJEnITxYi85Dbs%2BbT8UshhB3oaNtXEBlqVay1IuvRaCsyTMJO%2B6b0GOqUBNe%2BPTCG%2BCOOllPSa9jvbMiJ7WfQcE4Jlf6LHXFDW3axTwWTm1%2FzhD4fbAQiUquCyJTFtR3A31%2FkiLkmSLom7aedhGtbuF58D6GP8Ttytl5bZ%2Bsj2%2Bde3aQzOpIL%2ByjYv62kAOu%2B7Kg8J9B5TUtzISp9oZb45%2BmYNr%2FbxPbtzP%2FLDDInSNUgz5NQkyn7izbSASjA1dkANdie0nuU7no0tRIB%2B7Zrj&X-Amz-Signature=c974bbce674442bc871cf963be0559e7df1b5759667344750fa82f9fbc82495e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
