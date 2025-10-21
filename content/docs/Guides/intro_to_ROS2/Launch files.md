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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGH6BZE%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGAz4mn2BAXCvDfGBkU2dLqPBfTQG%2BAi8F%2FAF%2FUONmlGAiEA518Cr%2Bg3Nr7S%2BI%2BenV67YsUlXOaAQOwtNx1cKPn3At8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoEmbjNTH8CwPWwGyrcA7ng0%2BQBjeAMvwD%2F8VVp1mpeTHJj1XAodcv9fxXI4Zx8ZDLn06UpBC107miQivpeLVbYri0m%2B4NB78Vd8tj8q0uEqMWZtQZJ0eQuQpsssfjoEWocDip8cNHiUypaLBCVaFDA2hNeNMbmKAbFomcTALKQAip2Q0qs8E0P9P0alvSxi4%2B6Wee%2BqOEaIOpaPB4pkU1%2B3G52rOUIs3mtrEJPBoIE6oNUTo%2FgsX8xBJKtwntQbOD5tPGKpVIlvnXEkA0lqXgTkkEI6dSZaBPnfsL0E70a3GIg2GmpyC5csZRkSD3j12WjTkCnFuSjo2aq0pTzhWrkdAIUKONOf9mvAeYYs%2BUJADtCwHFmuP0dyLvkdFd0x8llxt%2FEE8ox96jw7DlsNwtP6lGe8BbQBH6Zl3Xahy%2BD0bd9sZc5F2iLuvl5vNf2uynQvXJDPCZRc0djONsqCgGZwfDA5hnUmMguSMQ0JK5LWGyd5uatVz0aJI7okbmbTpo%2BvhgSNtCFolPX%2B0s0G0%2F%2Ft9olcUbUlQLXPfJEly3chd04fxsU1PqEIs2U3yKru5sLVyWx44VpVDCiLXStGc0rgI5kEzIwbAISDHHztupkLt4oUKJavtKBx%2Fq%2FnrZ02B8x1QqycdW%2BYZUKMJat28cGOqUBgeK5io4jwbdaBsYY4xr%2Fi%2BlUjy9qy%2F4LybD5TIXYT9mpjazD2hZXidGta%2BUAfhPCI4j9PPNsvmZOVN3J7SPiq4E%2BQA8%2FYuupPqx4JLf1YEpS5jov5tMBPU7vBJt1PgQkBwgN2hdoolWCXtI5KmFUBObETLLwhQY1UoEi3%2BS%2FVcNdc26iPVF9VFyp2x9keZKnA5cWS0XBa63KRskDv93nPAZL3YSH&X-Amz-Signature=5af750ce6d6037c5f1288c1cca3a35bda2f592b06ca8813e825bedfa48635211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGH6BZE%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGAz4mn2BAXCvDfGBkU2dLqPBfTQG%2BAi8F%2FAF%2FUONmlGAiEA518Cr%2Bg3Nr7S%2BI%2BenV67YsUlXOaAQOwtNx1cKPn3At8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoEmbjNTH8CwPWwGyrcA7ng0%2BQBjeAMvwD%2F8VVp1mpeTHJj1XAodcv9fxXI4Zx8ZDLn06UpBC107miQivpeLVbYri0m%2B4NB78Vd8tj8q0uEqMWZtQZJ0eQuQpsssfjoEWocDip8cNHiUypaLBCVaFDA2hNeNMbmKAbFomcTALKQAip2Q0qs8E0P9P0alvSxi4%2B6Wee%2BqOEaIOpaPB4pkU1%2B3G52rOUIs3mtrEJPBoIE6oNUTo%2FgsX8xBJKtwntQbOD5tPGKpVIlvnXEkA0lqXgTkkEI6dSZaBPnfsL0E70a3GIg2GmpyC5csZRkSD3j12WjTkCnFuSjo2aq0pTzhWrkdAIUKONOf9mvAeYYs%2BUJADtCwHFmuP0dyLvkdFd0x8llxt%2FEE8ox96jw7DlsNwtP6lGe8BbQBH6Zl3Xahy%2BD0bd9sZc5F2iLuvl5vNf2uynQvXJDPCZRc0djONsqCgGZwfDA5hnUmMguSMQ0JK5LWGyd5uatVz0aJI7okbmbTpo%2BvhgSNtCFolPX%2B0s0G0%2F%2Ft9olcUbUlQLXPfJEly3chd04fxsU1PqEIs2U3yKru5sLVyWx44VpVDCiLXStGc0rgI5kEzIwbAISDHHztupkLt4oUKJavtKBx%2Fq%2FnrZ02B8x1QqycdW%2BYZUKMJat28cGOqUBgeK5io4jwbdaBsYY4xr%2Fi%2BlUjy9qy%2F4LybD5TIXYT9mpjazD2hZXidGta%2BUAfhPCI4j9PPNsvmZOVN3J7SPiq4E%2BQA8%2FYuupPqx4JLf1YEpS5jov5tMBPU7vBJt1PgQkBwgN2hdoolWCXtI5KmFUBObETLLwhQY1UoEi3%2BS%2FVcNdc26iPVF9VFyp2x9keZKnA5cWS0XBa63KRskDv93nPAZL3YSH&X-Amz-Signature=9d30f3795bd598989c9c606341b98d974d3e106154fba704e6a624532a943f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGH6BZE%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGAz4mn2BAXCvDfGBkU2dLqPBfTQG%2BAi8F%2FAF%2FUONmlGAiEA518Cr%2Bg3Nr7S%2BI%2BenV67YsUlXOaAQOwtNx1cKPn3At8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoEmbjNTH8CwPWwGyrcA7ng0%2BQBjeAMvwD%2F8VVp1mpeTHJj1XAodcv9fxXI4Zx8ZDLn06UpBC107miQivpeLVbYri0m%2B4NB78Vd8tj8q0uEqMWZtQZJ0eQuQpsssfjoEWocDip8cNHiUypaLBCVaFDA2hNeNMbmKAbFomcTALKQAip2Q0qs8E0P9P0alvSxi4%2B6Wee%2BqOEaIOpaPB4pkU1%2B3G52rOUIs3mtrEJPBoIE6oNUTo%2FgsX8xBJKtwntQbOD5tPGKpVIlvnXEkA0lqXgTkkEI6dSZaBPnfsL0E70a3GIg2GmpyC5csZRkSD3j12WjTkCnFuSjo2aq0pTzhWrkdAIUKONOf9mvAeYYs%2BUJADtCwHFmuP0dyLvkdFd0x8llxt%2FEE8ox96jw7DlsNwtP6lGe8BbQBH6Zl3Xahy%2BD0bd9sZc5F2iLuvl5vNf2uynQvXJDPCZRc0djONsqCgGZwfDA5hnUmMguSMQ0JK5LWGyd5uatVz0aJI7okbmbTpo%2BvhgSNtCFolPX%2B0s0G0%2F%2Ft9olcUbUlQLXPfJEly3chd04fxsU1PqEIs2U3yKru5sLVyWx44VpVDCiLXStGc0rgI5kEzIwbAISDHHztupkLt4oUKJavtKBx%2Fq%2FnrZ02B8x1QqycdW%2BYZUKMJat28cGOqUBgeK5io4jwbdaBsYY4xr%2Fi%2BlUjy9qy%2F4LybD5TIXYT9mpjazD2hZXidGta%2BUAfhPCI4j9PPNsvmZOVN3J7SPiq4E%2BQA8%2FYuupPqx4JLf1YEpS5jov5tMBPU7vBJt1PgQkBwgN2hdoolWCXtI5KmFUBObETLLwhQY1UoEi3%2BS%2FVcNdc26iPVF9VFyp2x9keZKnA5cWS0XBa63KRskDv93nPAZL3YSH&X-Amz-Signature=35b29e64b676827a75decbe00e47cc6c6457252bba4a155398fbd132f15d414b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
