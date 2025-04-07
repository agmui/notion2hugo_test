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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHFXZPA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F4DsshQ1uJJpjDbaa4gyrtICyMEBp0%2F6Tbm4t2BATXAiEA6yOrFU9cjBijfyd%2BTnefGi2qBoJ9v9Pi7r7WNShP09gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKQEkBZrBQQD2Wvd%2FyrcA6zlSB3uY0dYr7u6oGz4%2Bp4j2J%2BqhR4W2MCREPsLfh1z8mi5kL4Yzd2j6hOa4nPWA403K8Bk3RDZq0mMSc3JpPFRvRCqm%2B8gggyJ6YI9J5islI7j1D1LJeqvXMX0ok5gx1sbGloe6iQhJXfKeXvWs65OOuBcLsAKqM1tLR2p2gsQaQSPPdarM2rlRL14J22OZVsF9aR7lkYajjJJec79adidc0yAG012kM9eY1ShgccRFgCgQSRLk3sao9rRbodRpiG%2BXTke5obcE5vympyHyyO%2BFn%2B2RdLOUu%2Bk20KVKBjFhjou7ObDVQAlwkSDGquHnIOhqL6suNXAIyfworqdPcw2XVmrZNX2MZjufL4%2BHhVomVf7YZm0PEnDkLRkUBJDlPPw4LE3thjSpzZ1eEO%2BQWC%2B0hw1tDEDtAvJK%2FMed2UKQ5%2BpTstoVgiZUjlBOurI8kbelK0rpvHWiXeSaVzglkZkZrn4V2mgYdy2%2BUeW2TPja%2FNwP1DTW0wYSmHs0Ac6efhM9zesjBfnKIGttluXxX65pAiwwjMelaH3Ein5oTRPF3ltxnSVHRoGMkL65HOFsSGQJD%2FETD%2B5xNXqwxEe6f1QnBpz3pw90l0bw03bcVnPcNwvIDDdYPQMAimGMLzSzb8GOqUBOmQQ0SoGwuwBFEe5f4XrwDKswQbpnDEM5PYp%2FvBPU0vhqFe1g6V1Ti1FnRn%2B22psrWE1rQKm6B8nb9K4tWFPttcJAsyDrrudd1vNwBwUlm5GUz951JFaavX6iLMZW3%2BP%2BQzWiyzq%2FiYiZc1Mkb166VJfPqZPsH5xOZB8HZ%2FmjYH%2FDuXSO6nsaDuGV4QdsVgOU5C5LvcAdBwnmQl8kvtTPYtRzbGx&X-Amz-Signature=e30140123725817322fc187e1aea56c017b0fe2c7b98a7aa738db6f0bb1bebfa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHFXZPA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F4DsshQ1uJJpjDbaa4gyrtICyMEBp0%2F6Tbm4t2BATXAiEA6yOrFU9cjBijfyd%2BTnefGi2qBoJ9v9Pi7r7WNShP09gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKQEkBZrBQQD2Wvd%2FyrcA6zlSB3uY0dYr7u6oGz4%2Bp4j2J%2BqhR4W2MCREPsLfh1z8mi5kL4Yzd2j6hOa4nPWA403K8Bk3RDZq0mMSc3JpPFRvRCqm%2B8gggyJ6YI9J5islI7j1D1LJeqvXMX0ok5gx1sbGloe6iQhJXfKeXvWs65OOuBcLsAKqM1tLR2p2gsQaQSPPdarM2rlRL14J22OZVsF9aR7lkYajjJJec79adidc0yAG012kM9eY1ShgccRFgCgQSRLk3sao9rRbodRpiG%2BXTke5obcE5vympyHyyO%2BFn%2B2RdLOUu%2Bk20KVKBjFhjou7ObDVQAlwkSDGquHnIOhqL6suNXAIyfworqdPcw2XVmrZNX2MZjufL4%2BHhVomVf7YZm0PEnDkLRkUBJDlPPw4LE3thjSpzZ1eEO%2BQWC%2B0hw1tDEDtAvJK%2FMed2UKQ5%2BpTstoVgiZUjlBOurI8kbelK0rpvHWiXeSaVzglkZkZrn4V2mgYdy2%2BUeW2TPja%2FNwP1DTW0wYSmHs0Ac6efhM9zesjBfnKIGttluXxX65pAiwwjMelaH3Ein5oTRPF3ltxnSVHRoGMkL65HOFsSGQJD%2FETD%2B5xNXqwxEe6f1QnBpz3pw90l0bw03bcVnPcNwvIDDdYPQMAimGMLzSzb8GOqUBOmQQ0SoGwuwBFEe5f4XrwDKswQbpnDEM5PYp%2FvBPU0vhqFe1g6V1Ti1FnRn%2B22psrWE1rQKm6B8nb9K4tWFPttcJAsyDrrudd1vNwBwUlm5GUz951JFaavX6iLMZW3%2BP%2BQzWiyzq%2FiYiZc1Mkb166VJfPqZPsH5xOZB8HZ%2FmjYH%2FDuXSO6nsaDuGV4QdsVgOU5C5LvcAdBwnmQl8kvtTPYtRzbGx&X-Amz-Signature=7e7eb4474347415784003e3eec107662fc703cfccae5371c4071469e70da6c05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHFXZPA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F4DsshQ1uJJpjDbaa4gyrtICyMEBp0%2F6Tbm4t2BATXAiEA6yOrFU9cjBijfyd%2BTnefGi2qBoJ9v9Pi7r7WNShP09gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKQEkBZrBQQD2Wvd%2FyrcA6zlSB3uY0dYr7u6oGz4%2Bp4j2J%2BqhR4W2MCREPsLfh1z8mi5kL4Yzd2j6hOa4nPWA403K8Bk3RDZq0mMSc3JpPFRvRCqm%2B8gggyJ6YI9J5islI7j1D1LJeqvXMX0ok5gx1sbGloe6iQhJXfKeXvWs65OOuBcLsAKqM1tLR2p2gsQaQSPPdarM2rlRL14J22OZVsF9aR7lkYajjJJec79adidc0yAG012kM9eY1ShgccRFgCgQSRLk3sao9rRbodRpiG%2BXTke5obcE5vympyHyyO%2BFn%2B2RdLOUu%2Bk20KVKBjFhjou7ObDVQAlwkSDGquHnIOhqL6suNXAIyfworqdPcw2XVmrZNX2MZjufL4%2BHhVomVf7YZm0PEnDkLRkUBJDlPPw4LE3thjSpzZ1eEO%2BQWC%2B0hw1tDEDtAvJK%2FMed2UKQ5%2BpTstoVgiZUjlBOurI8kbelK0rpvHWiXeSaVzglkZkZrn4V2mgYdy2%2BUeW2TPja%2FNwP1DTW0wYSmHs0Ac6efhM9zesjBfnKIGttluXxX65pAiwwjMelaH3Ein5oTRPF3ltxnSVHRoGMkL65HOFsSGQJD%2FETD%2B5xNXqwxEe6f1QnBpz3pw90l0bw03bcVnPcNwvIDDdYPQMAimGMLzSzb8GOqUBOmQQ0SoGwuwBFEe5f4XrwDKswQbpnDEM5PYp%2FvBPU0vhqFe1g6V1Ti1FnRn%2B22psrWE1rQKm6B8nb9K4tWFPttcJAsyDrrudd1vNwBwUlm5GUz951JFaavX6iLMZW3%2BP%2BQzWiyzq%2FiYiZc1Mkb166VJfPqZPsH5xOZB8HZ%2FmjYH%2FDuXSO6nsaDuGV4QdsVgOU5C5LvcAdBwnmQl8kvtTPYtRzbGx&X-Amz-Signature=c953d35289a75a9e258dd86264d80be6d457e9a00b878a3cb5eb81087c55a7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
