---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Y7T6CG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEPh9zpjpjVurnxbAklC6x0jQ44xaoRCFIXbUE4U9y%2BUAiEAl3s7XBPbnXN2ZphBvdVuACSCf0tA1g5PL7XmGbcRVj0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFovhoZLtJBwMfAC1yrcA8NzgBthyRcK%2FntQfjuVFBSi8ce14PC94NjA%2Bocchg6KiDSqCcQJAtDw0jLoxyn2wR8NjHX7d9cADDjxiHFAUpCNbTC1cFvY640%2FGlnS%2BIttdK1LjoeYnJ1q90ZhIASe2p9N1qvTevOgN4nz3UGGt5d1dfin2wZJWEjtcSAtJd8R0YCiX7DGLgrXW7p1xcuJn4IMFWtlUycMujvYm2ksilRNjEaZYj%2FFDve5uwB%2FLrsvUqpHkL83uPt6cNtl7oYLrpDdfHG83NypEMNUR7pzJokdk%2FIJCbL86AjA1r%2B4X9s%2BYNA3dh3edUcVpK2nUbBs2e9gZ0nMlskvTOosN0fMRFBMMVzKBDUiQVCi2rltQuo8wOoGOL246bTik3ETlWodLOq36Gc4tlv72v%2FV0TBOXci%2FlbcVcJCROHp7SGmQm%2By4ySNO2SkCnQaVwzV6q%2FeP6tP37TTN1neXX3xrynepMZZxXidiOou0BM8cC5cWWELMLs9V3rePM8LtDm7yFh74tPoHd63EdQt6dAAHMs9mlbluMtl2EKargUgEAfViFmTUzKd6y%2FOq23iTD80X8dpjEkGMlDMRgugn5LleGCddA9XZi4gb4oYnMR58P1%2FF0CMHlUoqKeg9Geb7uZeuMIT7ncQGOqUBUdcjE7mPdqcFFWAtyeXVph91VCb2Ps3xwdvBaDLL%2BTa1sRYLHyYCP6tX8Zf4XuSfbptJqW3ciQn%2Fi%2Bs9KbOAoOc%2B6uhZ0IslY3h09H3Nqt5jiB%2Fc2XWj6ZCIRdTpXARatxmMRVjdcd1%2FYpoxyZuBaW281Bp6lEEYR7%2BmV7Z4cus%2FpAa3nV780H4k%2BxtkBYpJ3puHnJ8TwNZyza5PJDfzNZWDkFp%2B&X-Amz-Signature=a140977a1e456443bf3bcabfbde5f6b55b3ab7c15d0f040d597263b2b2719837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Y7T6CG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEPh9zpjpjVurnxbAklC6x0jQ44xaoRCFIXbUE4U9y%2BUAiEAl3s7XBPbnXN2ZphBvdVuACSCf0tA1g5PL7XmGbcRVj0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFovhoZLtJBwMfAC1yrcA8NzgBthyRcK%2FntQfjuVFBSi8ce14PC94NjA%2Bocchg6KiDSqCcQJAtDw0jLoxyn2wR8NjHX7d9cADDjxiHFAUpCNbTC1cFvY640%2FGlnS%2BIttdK1LjoeYnJ1q90ZhIASe2p9N1qvTevOgN4nz3UGGt5d1dfin2wZJWEjtcSAtJd8R0YCiX7DGLgrXW7p1xcuJn4IMFWtlUycMujvYm2ksilRNjEaZYj%2FFDve5uwB%2FLrsvUqpHkL83uPt6cNtl7oYLrpDdfHG83NypEMNUR7pzJokdk%2FIJCbL86AjA1r%2B4X9s%2BYNA3dh3edUcVpK2nUbBs2e9gZ0nMlskvTOosN0fMRFBMMVzKBDUiQVCi2rltQuo8wOoGOL246bTik3ETlWodLOq36Gc4tlv72v%2FV0TBOXci%2FlbcVcJCROHp7SGmQm%2By4ySNO2SkCnQaVwzV6q%2FeP6tP37TTN1neXX3xrynepMZZxXidiOou0BM8cC5cWWELMLs9V3rePM8LtDm7yFh74tPoHd63EdQt6dAAHMs9mlbluMtl2EKargUgEAfViFmTUzKd6y%2FOq23iTD80X8dpjEkGMlDMRgugn5LleGCddA9XZi4gb4oYnMR58P1%2FF0CMHlUoqKeg9Geb7uZeuMIT7ncQGOqUBUdcjE7mPdqcFFWAtyeXVph91VCb2Ps3xwdvBaDLL%2BTa1sRYLHyYCP6tX8Zf4XuSfbptJqW3ciQn%2Fi%2Bs9KbOAoOc%2B6uhZ0IslY3h09H3Nqt5jiB%2Fc2XWj6ZCIRdTpXARatxmMRVjdcd1%2FYpoxyZuBaW281Bp6lEEYR7%2BmV7Z4cus%2FpAa3nV780H4k%2BxtkBYpJ3puHnJ8TwNZyza5PJDfzNZWDkFp%2B&X-Amz-Signature=c1ef6cce45220ad46424482a0392383d194eb5da797da4f41e6513b6746a3492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Y7T6CG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEPh9zpjpjVurnxbAklC6x0jQ44xaoRCFIXbUE4U9y%2BUAiEAl3s7XBPbnXN2ZphBvdVuACSCf0tA1g5PL7XmGbcRVj0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFovhoZLtJBwMfAC1yrcA8NzgBthyRcK%2FntQfjuVFBSi8ce14PC94NjA%2Bocchg6KiDSqCcQJAtDw0jLoxyn2wR8NjHX7d9cADDjxiHFAUpCNbTC1cFvY640%2FGlnS%2BIttdK1LjoeYnJ1q90ZhIASe2p9N1qvTevOgN4nz3UGGt5d1dfin2wZJWEjtcSAtJd8R0YCiX7DGLgrXW7p1xcuJn4IMFWtlUycMujvYm2ksilRNjEaZYj%2FFDve5uwB%2FLrsvUqpHkL83uPt6cNtl7oYLrpDdfHG83NypEMNUR7pzJokdk%2FIJCbL86AjA1r%2B4X9s%2BYNA3dh3edUcVpK2nUbBs2e9gZ0nMlskvTOosN0fMRFBMMVzKBDUiQVCi2rltQuo8wOoGOL246bTik3ETlWodLOq36Gc4tlv72v%2FV0TBOXci%2FlbcVcJCROHp7SGmQm%2By4ySNO2SkCnQaVwzV6q%2FeP6tP37TTN1neXX3xrynepMZZxXidiOou0BM8cC5cWWELMLs9V3rePM8LtDm7yFh74tPoHd63EdQt6dAAHMs9mlbluMtl2EKargUgEAfViFmTUzKd6y%2FOq23iTD80X8dpjEkGMlDMRgugn5LleGCddA9XZi4gb4oYnMR58P1%2FF0CMHlUoqKeg9Geb7uZeuMIT7ncQGOqUBUdcjE7mPdqcFFWAtyeXVph91VCb2Ps3xwdvBaDLL%2BTa1sRYLHyYCP6tX8Zf4XuSfbptJqW3ciQn%2Fi%2Bs9KbOAoOc%2B6uhZ0IslY3h09H3Nqt5jiB%2Fc2XWj6ZCIRdTpXARatxmMRVjdcd1%2FYpoxyZuBaW281Bp6lEEYR7%2BmV7Z4cus%2FpAa3nV780H4k%2BxtkBYpJ3puHnJ8TwNZyza5PJDfzNZWDkFp%2B&X-Amz-Signature=6ff7550a649bb283efa80f955ea5552d5571ee12d82649c430997656c83adae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
