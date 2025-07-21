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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTXR3TK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKTZ3OOQ5I%2BN3umfemqT7lTlNhUA9dZY%2BxSf5KKKRLAwIgFWqx4kG%2BOEhhAHmzQXa79FIWSlqt6ccut43ie2ffUYwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEONL%2By1bcnyQ6l6yrcA2u59Pke7YcvOQ5XE33Wfbw%2FOtLkMs%2B8zAQuUusMakB7lbKlWW6deqLD7hElifcKml8mYwnb1x3ZLSGvnaBlnXsF%2Bvud%2BczZQC5db5IFMg9dWYrySus1KgSm4u2seLS3bAGg2U1ca%2BxBYRqODtF6c7cup8znC0DWhvrlW6gPq8hKHNjY4NwJudSV7rRUajK9Q2qunyWPp1t7PvHlFHmbroutMIsbS25ix249srW2SAY5TBscmCSv1Y%2BKlhIysyoswIORIT1Ysie5JRsrf0vt%2B%2F7Vp9sS1hH9%2F%2BM2n14H2lA3MCT6dSu6Tm3ukEGdv0Bh3P1g3KqIBIhhATLMNsLTNZj0Y%2FIZhZMc3Tq4fwpH7MtKSIFbdaSCwJVhW5qsG9c1cBVjKYyoRnb82Tg%2F%2FNBAyEqap1tDmlIziS8lmpAwl9exw1Obe5m%2BWqLR%2FT%2FhQUZDe7RD1ON5Z0SMKp8Wg1irBxenYy5ThYiAulxKzvMZlX89Cf6byWrUqGGNDtW1QFZqc9DR4xC19k%2BmBy%2BX%2BMWI5VxOonXcQwg0ylmd3Vf53EHh6g4k1zP2PHsds8CLUQiFb%2FQSiOEaOVCmnIFkOnx0jySB10ai%2BBAHNI2CPzM9wXEGe0htjv5bUbJSHkUmMOf5%2BMMGOqUBT2BJVM5vtRSMgFh2R33wg2czZ2IlJ%2F6L2ffeJJDBCMdBd1Lk%2F2A4CR%2B2oZ9dnUK%2FZAEymV%2BaAYuGPT3nGbJNx2SCpO4yGei2g8SvFT1a84X0bWJteo%2FvE80c%2FGyH2lkkStXwZ7Y4uUEZqdD%2B3HmKNKOXsCyNc2%2FL4jr3liDOzcXD3vjVJL72Doui2gqPzThz1DMLO1U3nSEVZXcqqG45bNvB3Eos&X-Amz-Signature=98836004e1d70f26cd0f0e0e9de59b63a192d261c169966e5092cead8e5f4a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTXR3TK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKTZ3OOQ5I%2BN3umfemqT7lTlNhUA9dZY%2BxSf5KKKRLAwIgFWqx4kG%2BOEhhAHmzQXa79FIWSlqt6ccut43ie2ffUYwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEONL%2By1bcnyQ6l6yrcA2u59Pke7YcvOQ5XE33Wfbw%2FOtLkMs%2B8zAQuUusMakB7lbKlWW6deqLD7hElifcKml8mYwnb1x3ZLSGvnaBlnXsF%2Bvud%2BczZQC5db5IFMg9dWYrySus1KgSm4u2seLS3bAGg2U1ca%2BxBYRqODtF6c7cup8znC0DWhvrlW6gPq8hKHNjY4NwJudSV7rRUajK9Q2qunyWPp1t7PvHlFHmbroutMIsbS25ix249srW2SAY5TBscmCSv1Y%2BKlhIysyoswIORIT1Ysie5JRsrf0vt%2B%2F7Vp9sS1hH9%2F%2BM2n14H2lA3MCT6dSu6Tm3ukEGdv0Bh3P1g3KqIBIhhATLMNsLTNZj0Y%2FIZhZMc3Tq4fwpH7MtKSIFbdaSCwJVhW5qsG9c1cBVjKYyoRnb82Tg%2F%2FNBAyEqap1tDmlIziS8lmpAwl9exw1Obe5m%2BWqLR%2FT%2FhQUZDe7RD1ON5Z0SMKp8Wg1irBxenYy5ThYiAulxKzvMZlX89Cf6byWrUqGGNDtW1QFZqc9DR4xC19k%2BmBy%2BX%2BMWI5VxOonXcQwg0ylmd3Vf53EHh6g4k1zP2PHsds8CLUQiFb%2FQSiOEaOVCmnIFkOnx0jySB10ai%2BBAHNI2CPzM9wXEGe0htjv5bUbJSHkUmMOf5%2BMMGOqUBT2BJVM5vtRSMgFh2R33wg2czZ2IlJ%2F6L2ffeJJDBCMdBd1Lk%2F2A4CR%2B2oZ9dnUK%2FZAEymV%2BaAYuGPT3nGbJNx2SCpO4yGei2g8SvFT1a84X0bWJteo%2FvE80c%2FGyH2lkkStXwZ7Y4uUEZqdD%2B3HmKNKOXsCyNc2%2FL4jr3liDOzcXD3vjVJL72Doui2gqPzThz1DMLO1U3nSEVZXcqqG45bNvB3Eos&X-Amz-Signature=3672f19552a8fa875d6deca05f316b6f64f93b890f4e490eed652d5f85290c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTXR3TK%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKTZ3OOQ5I%2BN3umfemqT7lTlNhUA9dZY%2BxSf5KKKRLAwIgFWqx4kG%2BOEhhAHmzQXa79FIWSlqt6ccut43ie2ffUYwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEONL%2By1bcnyQ6l6yrcA2u59Pke7YcvOQ5XE33Wfbw%2FOtLkMs%2B8zAQuUusMakB7lbKlWW6deqLD7hElifcKml8mYwnb1x3ZLSGvnaBlnXsF%2Bvud%2BczZQC5db5IFMg9dWYrySus1KgSm4u2seLS3bAGg2U1ca%2BxBYRqODtF6c7cup8znC0DWhvrlW6gPq8hKHNjY4NwJudSV7rRUajK9Q2qunyWPp1t7PvHlFHmbroutMIsbS25ix249srW2SAY5TBscmCSv1Y%2BKlhIysyoswIORIT1Ysie5JRsrf0vt%2B%2F7Vp9sS1hH9%2F%2BM2n14H2lA3MCT6dSu6Tm3ukEGdv0Bh3P1g3KqIBIhhATLMNsLTNZj0Y%2FIZhZMc3Tq4fwpH7MtKSIFbdaSCwJVhW5qsG9c1cBVjKYyoRnb82Tg%2F%2FNBAyEqap1tDmlIziS8lmpAwl9exw1Obe5m%2BWqLR%2FT%2FhQUZDe7RD1ON5Z0SMKp8Wg1irBxenYy5ThYiAulxKzvMZlX89Cf6byWrUqGGNDtW1QFZqc9DR4xC19k%2BmBy%2BX%2BMWI5VxOonXcQwg0ylmd3Vf53EHh6g4k1zP2PHsds8CLUQiFb%2FQSiOEaOVCmnIFkOnx0jySB10ai%2BBAHNI2CPzM9wXEGe0htjv5bUbJSHkUmMOf5%2BMMGOqUBT2BJVM5vtRSMgFh2R33wg2czZ2IlJ%2F6L2ffeJJDBCMdBd1Lk%2F2A4CR%2B2oZ9dnUK%2FZAEymV%2BaAYuGPT3nGbJNx2SCpO4yGei2g8SvFT1a84X0bWJteo%2FvE80c%2FGyH2lkkStXwZ7Y4uUEZqdD%2B3HmKNKOXsCyNc2%2FL4jr3liDOzcXD3vjVJL72Doui2gqPzThz1DMLO1U3nSEVZXcqqG45bNvB3Eos&X-Amz-Signature=7c1c487b0bd9a2364ee56a120d8bd144ea8578e9163ec9a365a0adad47f1ea67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
