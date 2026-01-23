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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPE7QUP%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDIhACiEdqD43zhchaO5dCN6oa0iamhODiW9Do2VetGCAIgBhLhBZrROyjuxWCbVDYaWiQWcCdA9uwCR6LZMzcoiRoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNapbtXMvJiA5bkLGSrcA7H5Fo37NSaq%2BkjTxrHao19MrynpXqMjQUroU0Otc2fQYc7C6bEXki8KkodFOcqiwoeLO3roJtrWoUMdz1Sgqf%2FKCx8yTZ3KfeigctlDHp8FxeBQqo7dU8wuO1vcvtI63ebrkyCMAViaH1hPv5updJtRpfSqZkRZG6jCF%2FrO7%2F71FSPmIlfUtlpCgiAxDncc2KRFEBR4KQBlJsXU0PTNbIFXAUUNH1GSuWlVcl%2FUNZU8f36Jg6nDV8RRQV8vNvAY1LJNTWyNJKmwPpYQ6TCJ2OgG1TE8ea5iBWu2uQTIcSFvDTnpCaPVbU0EXVMMPhRLlQlMhGt0fM8AH5E15uYpCr7RDsSrPZ%2FUeXWUQENtAS%2BAHBAHo3a29VSFVvG53wGDVlXvYaFKAg26%2FpiJnaq%2BaklqNy2Q69cQYOj64C6x6wIOnIfWCsw1BPpS29SSe36PM%2BdhlRx87pqXyrWt3zLvAc6xVqPbfi8Plo8OiUMrsk09p%2F4wqpCdZ0i6skH2x3a6jd32D7XWO97d5K%2BXYTXBvROZftPc1qFNAlYKEx54Qp5iAhCdkdPvJFHzkznxAewx830aAExB1McFigROsizRtuPvvn8MmMjsHQy%2FY%2FRZJIZHUvS6Y8nYHwpbS%2F9LMPaKy8sGOqUBvykcGdjDnt2Eu50i0Ef%2FbeffC782bAUgx7er3HsT%2BwWdIrCggnqhIfMlM5DiZgePnYyYX%2FioRoTmtlZWj%2BmThgInXr2E%2BqLkxZ6HBDrocoltJzbnDxOtABBlSQ5wz0G9bzOXr15tQlKvwH24en64qMl26yUa%2Br4slUBMIxexrIK7zgQMlHShiWlSn7fA%2FPBemVSz6j97TGTXp8Vi9uui2Sfmbt%2B0&X-Amz-Signature=c74d420c2a0763743d5f3de8d1642919697da04089c113069e6e8eddcef63f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPE7QUP%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDIhACiEdqD43zhchaO5dCN6oa0iamhODiW9Do2VetGCAIgBhLhBZrROyjuxWCbVDYaWiQWcCdA9uwCR6LZMzcoiRoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNapbtXMvJiA5bkLGSrcA7H5Fo37NSaq%2BkjTxrHao19MrynpXqMjQUroU0Otc2fQYc7C6bEXki8KkodFOcqiwoeLO3roJtrWoUMdz1Sgqf%2FKCx8yTZ3KfeigctlDHp8FxeBQqo7dU8wuO1vcvtI63ebrkyCMAViaH1hPv5updJtRpfSqZkRZG6jCF%2FrO7%2F71FSPmIlfUtlpCgiAxDncc2KRFEBR4KQBlJsXU0PTNbIFXAUUNH1GSuWlVcl%2FUNZU8f36Jg6nDV8RRQV8vNvAY1LJNTWyNJKmwPpYQ6TCJ2OgG1TE8ea5iBWu2uQTIcSFvDTnpCaPVbU0EXVMMPhRLlQlMhGt0fM8AH5E15uYpCr7RDsSrPZ%2FUeXWUQENtAS%2BAHBAHo3a29VSFVvG53wGDVlXvYaFKAg26%2FpiJnaq%2BaklqNy2Q69cQYOj64C6x6wIOnIfWCsw1BPpS29SSe36PM%2BdhlRx87pqXyrWt3zLvAc6xVqPbfi8Plo8OiUMrsk09p%2F4wqpCdZ0i6skH2x3a6jd32D7XWO97d5K%2BXYTXBvROZftPc1qFNAlYKEx54Qp5iAhCdkdPvJFHzkznxAewx830aAExB1McFigROsizRtuPvvn8MmMjsHQy%2FY%2FRZJIZHUvS6Y8nYHwpbS%2F9LMPaKy8sGOqUBvykcGdjDnt2Eu50i0Ef%2FbeffC782bAUgx7er3HsT%2BwWdIrCggnqhIfMlM5DiZgePnYyYX%2FioRoTmtlZWj%2BmThgInXr2E%2BqLkxZ6HBDrocoltJzbnDxOtABBlSQ5wz0G9bzOXr15tQlKvwH24en64qMl26yUa%2Br4slUBMIxexrIK7zgQMlHShiWlSn7fA%2FPBemVSz6j97TGTXp8Vi9uui2Sfmbt%2B0&X-Amz-Signature=dafbbc4e36488b8ce8e443ea1b4b2e7420551de0f6139760583e5203de9950c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPE7QUP%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDIhACiEdqD43zhchaO5dCN6oa0iamhODiW9Do2VetGCAIgBhLhBZrROyjuxWCbVDYaWiQWcCdA9uwCR6LZMzcoiRoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNapbtXMvJiA5bkLGSrcA7H5Fo37NSaq%2BkjTxrHao19MrynpXqMjQUroU0Otc2fQYc7C6bEXki8KkodFOcqiwoeLO3roJtrWoUMdz1Sgqf%2FKCx8yTZ3KfeigctlDHp8FxeBQqo7dU8wuO1vcvtI63ebrkyCMAViaH1hPv5updJtRpfSqZkRZG6jCF%2FrO7%2F71FSPmIlfUtlpCgiAxDncc2KRFEBR4KQBlJsXU0PTNbIFXAUUNH1GSuWlVcl%2FUNZU8f36Jg6nDV8RRQV8vNvAY1LJNTWyNJKmwPpYQ6TCJ2OgG1TE8ea5iBWu2uQTIcSFvDTnpCaPVbU0EXVMMPhRLlQlMhGt0fM8AH5E15uYpCr7RDsSrPZ%2FUeXWUQENtAS%2BAHBAHo3a29VSFVvG53wGDVlXvYaFKAg26%2FpiJnaq%2BaklqNy2Q69cQYOj64C6x6wIOnIfWCsw1BPpS29SSe36PM%2BdhlRx87pqXyrWt3zLvAc6xVqPbfi8Plo8OiUMrsk09p%2F4wqpCdZ0i6skH2x3a6jd32D7XWO97d5K%2BXYTXBvROZftPc1qFNAlYKEx54Qp5iAhCdkdPvJFHzkznxAewx830aAExB1McFigROsizRtuPvvn8MmMjsHQy%2FY%2FRZJIZHUvS6Y8nYHwpbS%2F9LMPaKy8sGOqUBvykcGdjDnt2Eu50i0Ef%2FbeffC782bAUgx7er3HsT%2BwWdIrCggnqhIfMlM5DiZgePnYyYX%2FioRoTmtlZWj%2BmThgInXr2E%2BqLkxZ6HBDrocoltJzbnDxOtABBlSQ5wz0G9bzOXr15tQlKvwH24en64qMl26yUa%2Br4slUBMIxexrIK7zgQMlHShiWlSn7fA%2FPBemVSz6j97TGTXp8Vi9uui2Sfmbt%2B0&X-Amz-Signature=3a84fc5695dddc0391daa63d2fa23d7bd2cb8958fccfe81bafda18bf646e9f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
