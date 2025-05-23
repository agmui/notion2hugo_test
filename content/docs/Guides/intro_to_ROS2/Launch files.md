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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORPQRNV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICnyKOnaAsGtns%2FjkIlUiul1xLY6TXbH1TPqyoFbWXPmAiBl9DdfbhtuCD76WQu56Nh1OEruIylySf8NgT%2BhESO%2FkCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5bO3YTihFe9q59s7KtwDKMFW6qVYUhLXg7Zt3UKO74J%2F1CoAPSG0liHIvh5Nw5zkw11ESOwRm3G6SmPhek33f2lTVXUelATmWd7dJCiptiBIE%2F3Jyw4WpJoMOP3mJhA02Xz2EvlrnlyhFh83O5QPeSmXeYfXAL%2FwARjN9tLOUlwv%2BTWq7vSOz%2FpeooIHwjYacNIRAR2w%2FJffptzXg3j9LPRAOt1NreT3YNVsEKyv5Hr6frG5yKb%2FJunGhKqdY%2F2oOf215sQACl0a3%2FaVK7vxxT1SxXaDWs56hS6bM1%2FKAX5RkxEc1LSRe%2B8WDsYz5AKMDULKfVSKFGQiQ9pP%2BiBBBWy37kq9r6DXNCG8fYD93YkYzKy98k%2FT2VigP3A6zquxBbBn4v1YGnZTDYqbqkEuyq2bzWHD6ukO%2FNixMzNuKPEq%2FVih%2Fpe3O1ZG%2Fg9pGqom6LHRXhaJEm%2BhhzAeLbWHfn%2ByfPDIb9b2SkfnSb31ng0IdessdNEqWu5ZigLmAW0jlu5INLdurqCTUTRTAwNVfLsGpfpg32Mg83MPnVlMYLwX9fm%2Fsv4cxHlUI4OgWP%2BAaUHaiVwC569REKjNmJUnIVrqkDlUL6HCmKzwRTG3MxIZHb6%2F7B7yab8oPND81v%2FJrOSdycoAr2oscmYw0cK%2FwQY6pgGLQpaQaFS%2FWPVCh2ULINdSQ1xSTrjKqiWtBQ7oZ4MaKj8VCzGSnHi0jdpCVjfUkd2ZNioEA8V%2Fbc7bh9slSEnplyYVAl79ynjp%2F7ugpn8I0F3vccQkJA9kFf63TCNfnH8jihe%2FKp0VQCv18ihQD%2FNrP0ZHcosRbXtA71oaXP0qixMqsJRspfTMD0FPTzNan24mnTrejRkuS0D7bbrZIFnGgrXLwoqS&X-Amz-Signature=84e1c551d53e18afa1c05f1a3e86903fbb0db6ce083598ea25ce8fdd448355da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORPQRNV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICnyKOnaAsGtns%2FjkIlUiul1xLY6TXbH1TPqyoFbWXPmAiBl9DdfbhtuCD76WQu56Nh1OEruIylySf8NgT%2BhESO%2FkCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5bO3YTihFe9q59s7KtwDKMFW6qVYUhLXg7Zt3UKO74J%2F1CoAPSG0liHIvh5Nw5zkw11ESOwRm3G6SmPhek33f2lTVXUelATmWd7dJCiptiBIE%2F3Jyw4WpJoMOP3mJhA02Xz2EvlrnlyhFh83O5QPeSmXeYfXAL%2FwARjN9tLOUlwv%2BTWq7vSOz%2FpeooIHwjYacNIRAR2w%2FJffptzXg3j9LPRAOt1NreT3YNVsEKyv5Hr6frG5yKb%2FJunGhKqdY%2F2oOf215sQACl0a3%2FaVK7vxxT1SxXaDWs56hS6bM1%2FKAX5RkxEc1LSRe%2B8WDsYz5AKMDULKfVSKFGQiQ9pP%2BiBBBWy37kq9r6DXNCG8fYD93YkYzKy98k%2FT2VigP3A6zquxBbBn4v1YGnZTDYqbqkEuyq2bzWHD6ukO%2FNixMzNuKPEq%2FVih%2Fpe3O1ZG%2Fg9pGqom6LHRXhaJEm%2BhhzAeLbWHfn%2ByfPDIb9b2SkfnSb31ng0IdessdNEqWu5ZigLmAW0jlu5INLdurqCTUTRTAwNVfLsGpfpg32Mg83MPnVlMYLwX9fm%2Fsv4cxHlUI4OgWP%2BAaUHaiVwC569REKjNmJUnIVrqkDlUL6HCmKzwRTG3MxIZHb6%2F7B7yab8oPND81v%2FJrOSdycoAr2oscmYw0cK%2FwQY6pgGLQpaQaFS%2FWPVCh2ULINdSQ1xSTrjKqiWtBQ7oZ4MaKj8VCzGSnHi0jdpCVjfUkd2ZNioEA8V%2Fbc7bh9slSEnplyYVAl79ynjp%2F7ugpn8I0F3vccQkJA9kFf63TCNfnH8jihe%2FKp0VQCv18ihQD%2FNrP0ZHcosRbXtA71oaXP0qixMqsJRspfTMD0FPTzNan24mnTrejRkuS0D7bbrZIFnGgrXLwoqS&X-Amz-Signature=cfb2e6f3a2d94aea19033b42d51c99378bf4d7f915e6285e2d0424e4e83f06c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORPQRNV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICnyKOnaAsGtns%2FjkIlUiul1xLY6TXbH1TPqyoFbWXPmAiBl9DdfbhtuCD76WQu56Nh1OEruIylySf8NgT%2BhESO%2FkCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5bO3YTihFe9q59s7KtwDKMFW6qVYUhLXg7Zt3UKO74J%2F1CoAPSG0liHIvh5Nw5zkw11ESOwRm3G6SmPhek33f2lTVXUelATmWd7dJCiptiBIE%2F3Jyw4WpJoMOP3mJhA02Xz2EvlrnlyhFh83O5QPeSmXeYfXAL%2FwARjN9tLOUlwv%2BTWq7vSOz%2FpeooIHwjYacNIRAR2w%2FJffptzXg3j9LPRAOt1NreT3YNVsEKyv5Hr6frG5yKb%2FJunGhKqdY%2F2oOf215sQACl0a3%2FaVK7vxxT1SxXaDWs56hS6bM1%2FKAX5RkxEc1LSRe%2B8WDsYz5AKMDULKfVSKFGQiQ9pP%2BiBBBWy37kq9r6DXNCG8fYD93YkYzKy98k%2FT2VigP3A6zquxBbBn4v1YGnZTDYqbqkEuyq2bzWHD6ukO%2FNixMzNuKPEq%2FVih%2Fpe3O1ZG%2Fg9pGqom6LHRXhaJEm%2BhhzAeLbWHfn%2ByfPDIb9b2SkfnSb31ng0IdessdNEqWu5ZigLmAW0jlu5INLdurqCTUTRTAwNVfLsGpfpg32Mg83MPnVlMYLwX9fm%2Fsv4cxHlUI4OgWP%2BAaUHaiVwC569REKjNmJUnIVrqkDlUL6HCmKzwRTG3MxIZHb6%2F7B7yab8oPND81v%2FJrOSdycoAr2oscmYw0cK%2FwQY6pgGLQpaQaFS%2FWPVCh2ULINdSQ1xSTrjKqiWtBQ7oZ4MaKj8VCzGSnHi0jdpCVjfUkd2ZNioEA8V%2Fbc7bh9slSEnplyYVAl79ynjp%2F7ugpn8I0F3vccQkJA9kFf63TCNfnH8jihe%2FKp0VQCv18ihQD%2FNrP0ZHcosRbXtA71oaXP0qixMqsJRspfTMD0FPTzNan24mnTrejRkuS0D7bbrZIFnGgrXLwoqS&X-Amz-Signature=1138e923b66065b72118c1c538d5a42b75f7bd52082759be3d0fa7ce7b610b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
