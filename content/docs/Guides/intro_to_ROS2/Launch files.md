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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCYRNVG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGTUeoQZF8tLZswFIVmHJMZ2ifC4EfMitx6%2BkA%2BLCWLFAiEA4lHP23dQfHg9brOPBcxhlHCFWGG3bMfEx7oomcXADP4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvQDHwi%2F1boTaAajCrcA%2FOeOVmd8oqoFoOFtSpjpmCPPEr%2B%2BQ%2B%2BG04026PKvqCvpnCnZgGaGca4MrlE%2BLXk4sViY5oE3p0mTKQ8nYNr9YKGTZebx9WwIr3mlMmywfL0jv522fl2an3EJGlJb1BNNUEtEFWo%2BQkxwaRw9rHP3xjXNLjfgaVJXV8Xisq4uMBsF2t%2F9uU2D8XVggIjvLQIizfDctzgeEUJBeT9Eot2aXPyt9XslgXK17igVS43%2BQmoTR2elEXk6tn1%2FzcKS8TVb4iD95tzFwQNPFnFqfpa%2Bpgyan0A6smHgMq6JzpgKKatc0WT0PGTZUwgAlxHAVilHFwA3zHTBTgIahPcOoGcCBMYr9bs2X08sTfSo8UtzNpJ%2BIVx%2F3YCY61L6PDG3BhIGEojdBdDDK7xznoqKGsrWyfzoHqbm2pcU%2Baa2g6IclK6Z13jMdw%2BwIsuqKCL4twZLZVmBWhGLsHeIkwclj9kpSb7pCprEmEssVDhIpyw54XJC6BmXpk8ohjq23Y5Sh16i2KXFDSgr2lK%2FECPCF6QMeYOWL3haVRExN6SGolownbarMhPKQkNfG9dhz9RWfNzyqKa%2BMTp4wXGYBDa2jyoed0xyEGPuLcufXHB69BEl52u2EIELibaQUumGESIMICy4L8GOqUB%2F4l1Rqf1ocvOgeiybod9q1OTKPy6MNRjKDTbzqveWVK5EDm6c3t3DsPsIktHchuDtQPWOE1UObG2LUk0pISiAa3PBkGA6tcAyFn9b8a3Cc9swHYd%2FAO2KRqVuDorHSO9bMnbcd7ikEpTayKOUjO7McGsH%2B5ZDDdQu8Iz9mhIMWaK%2BsdNxbUgnRWDHWeoKH2QaMD0jN7WEtDhrOC9yOj7IjHx3qyK&X-Amz-Signature=480ba149f757687158e6237db2a8b3cd9d79c4a74572e04cc4b2684000addb0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCYRNVG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGTUeoQZF8tLZswFIVmHJMZ2ifC4EfMitx6%2BkA%2BLCWLFAiEA4lHP23dQfHg9brOPBcxhlHCFWGG3bMfEx7oomcXADP4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvQDHwi%2F1boTaAajCrcA%2FOeOVmd8oqoFoOFtSpjpmCPPEr%2B%2BQ%2B%2BG04026PKvqCvpnCnZgGaGca4MrlE%2BLXk4sViY5oE3p0mTKQ8nYNr9YKGTZebx9WwIr3mlMmywfL0jv522fl2an3EJGlJb1BNNUEtEFWo%2BQkxwaRw9rHP3xjXNLjfgaVJXV8Xisq4uMBsF2t%2F9uU2D8XVggIjvLQIizfDctzgeEUJBeT9Eot2aXPyt9XslgXK17igVS43%2BQmoTR2elEXk6tn1%2FzcKS8TVb4iD95tzFwQNPFnFqfpa%2Bpgyan0A6smHgMq6JzpgKKatc0WT0PGTZUwgAlxHAVilHFwA3zHTBTgIahPcOoGcCBMYr9bs2X08sTfSo8UtzNpJ%2BIVx%2F3YCY61L6PDG3BhIGEojdBdDDK7xznoqKGsrWyfzoHqbm2pcU%2Baa2g6IclK6Z13jMdw%2BwIsuqKCL4twZLZVmBWhGLsHeIkwclj9kpSb7pCprEmEssVDhIpyw54XJC6BmXpk8ohjq23Y5Sh16i2KXFDSgr2lK%2FECPCF6QMeYOWL3haVRExN6SGolownbarMhPKQkNfG9dhz9RWfNzyqKa%2BMTp4wXGYBDa2jyoed0xyEGPuLcufXHB69BEl52u2EIELibaQUumGESIMICy4L8GOqUB%2F4l1Rqf1ocvOgeiybod9q1OTKPy6MNRjKDTbzqveWVK5EDm6c3t3DsPsIktHchuDtQPWOE1UObG2LUk0pISiAa3PBkGA6tcAyFn9b8a3Cc9swHYd%2FAO2KRqVuDorHSO9bMnbcd7ikEpTayKOUjO7McGsH%2B5ZDDdQu8Iz9mhIMWaK%2BsdNxbUgnRWDHWeoKH2QaMD0jN7WEtDhrOC9yOj7IjHx3qyK&X-Amz-Signature=98e4c834c5a332aeabc2910b222a676acb330339a1928a13c951a3b1413ce28d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCYRNVG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGTUeoQZF8tLZswFIVmHJMZ2ifC4EfMitx6%2BkA%2BLCWLFAiEA4lHP23dQfHg9brOPBcxhlHCFWGG3bMfEx7oomcXADP4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvQDHwi%2F1boTaAajCrcA%2FOeOVmd8oqoFoOFtSpjpmCPPEr%2B%2BQ%2B%2BG04026PKvqCvpnCnZgGaGca4MrlE%2BLXk4sViY5oE3p0mTKQ8nYNr9YKGTZebx9WwIr3mlMmywfL0jv522fl2an3EJGlJb1BNNUEtEFWo%2BQkxwaRw9rHP3xjXNLjfgaVJXV8Xisq4uMBsF2t%2F9uU2D8XVggIjvLQIizfDctzgeEUJBeT9Eot2aXPyt9XslgXK17igVS43%2BQmoTR2elEXk6tn1%2FzcKS8TVb4iD95tzFwQNPFnFqfpa%2Bpgyan0A6smHgMq6JzpgKKatc0WT0PGTZUwgAlxHAVilHFwA3zHTBTgIahPcOoGcCBMYr9bs2X08sTfSo8UtzNpJ%2BIVx%2F3YCY61L6PDG3BhIGEojdBdDDK7xznoqKGsrWyfzoHqbm2pcU%2Baa2g6IclK6Z13jMdw%2BwIsuqKCL4twZLZVmBWhGLsHeIkwclj9kpSb7pCprEmEssVDhIpyw54XJC6BmXpk8ohjq23Y5Sh16i2KXFDSgr2lK%2FECPCF6QMeYOWL3haVRExN6SGolownbarMhPKQkNfG9dhz9RWfNzyqKa%2BMTp4wXGYBDa2jyoed0xyEGPuLcufXHB69BEl52u2EIELibaQUumGESIMICy4L8GOqUB%2F4l1Rqf1ocvOgeiybod9q1OTKPy6MNRjKDTbzqveWVK5EDm6c3t3DsPsIktHchuDtQPWOE1UObG2LUk0pISiAa3PBkGA6tcAyFn9b8a3Cc9swHYd%2FAO2KRqVuDorHSO9bMnbcd7ikEpTayKOUjO7McGsH%2B5ZDDdQu8Iz9mhIMWaK%2BsdNxbUgnRWDHWeoKH2QaMD0jN7WEtDhrOC9yOj7IjHx3qyK&X-Amz-Signature=b820536fd4916a3e4a1d21c4f966c5420fac62f730f71e1fb8342a72034360ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
