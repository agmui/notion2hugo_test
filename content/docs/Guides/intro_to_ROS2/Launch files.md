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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5GFOIB%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCbNHQVRbL%2F%2F1SQRUiEGkYsAO5l4JIev2UOaoruB7tZ9AIgNtoQLwNQBDeiDi4WIPGGxc2%2B8SD4Y6%2FicZH2Qb0iWvIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEA%2BL%2B9%2BRLT4HjSyqSrcA45Hoo2By55F0Slb6SiZVIw0SNuCH4GxjojCUGbPCSchEA20OPoQyNKQkqQ6p3Lrq1i1%2BsQ%2BhFJFDfzfnJidwxbDi6WCCtxxNPyduQ8qnbRv91BDcuOR%2BX6P4WIxrI20275OJ38maJNJ6KcEREkKBXZ2FEpAPk7t%2BZcFxV94m3D9j6FS%2Fc8y%2Fg7v7aciVlf5wE68Un1Hz2wdz2rc7mVUzL%2FTnhysWLuV0GcpvyBpDp0S5KOZvQV6qtEra4i%2BP4tG%2BXTFHyoxsmomLQfJY45Kp%2FNtrHiXq2E8KDGpTSs%2FXURZnfmB%2FiG67tZO3VD6fmEQiTetKUMHwPdvtWFRcCtlQlN9bNcF8Z02UexeImeiQuhnbjaDc6DELRHZZlKph4lsXQBRtiJgFUC3BlG4t%2FpTzV%2Fq3a%2BAXkI9c3Qeol9QTuTutM6SPm2XF8UrLpoFoSclax6oPEkMOa68Cm5Lgr7Un5dv0IxEmtoesZEmNI7O7GoqU1k8EioQySCYFRASEnvjymB0Zoi3oVQQPZ2%2BmEAfAAECY4pDpAutK%2FkfWw8RNM%2Bjn9UoEm0g8iwQg%2BJiQ%2F4IUtmyGfmAxMECYMX2vH5sr3eO9CnkilR3kd46sC2DZiIJUbarWI1P%2BvejYHD6MPP6lMgGOqUBsJmfoEsEZX2CAI2bFwnGKIOwdfSSJHwl7nhggHn6BjjsSmWDgePz%2FLlrAOq6Wa20eieBoBPUFSa6E0bhIHUiIi%2B9exiSlvLospZbQ%2Fjyv6pEhEZ%2B5jXc7lqi48AgHzR4CS9NcsE4z9oT%2BkvNVzhjFOTgHhRnVDXGS1dPsiwShSYfkSTzYD1yOsWBhCsy%2BVVlPOcQ20CjpVWX1hkd0grsrJqIDWMJ&X-Amz-Signature=3ef640be583ffef24baf5bd53d4ef58304f3b9d09d8c276a7c56a2ee56a02cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5GFOIB%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCbNHQVRbL%2F%2F1SQRUiEGkYsAO5l4JIev2UOaoruB7tZ9AIgNtoQLwNQBDeiDi4WIPGGxc2%2B8SD4Y6%2FicZH2Qb0iWvIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEA%2BL%2B9%2BRLT4HjSyqSrcA45Hoo2By55F0Slb6SiZVIw0SNuCH4GxjojCUGbPCSchEA20OPoQyNKQkqQ6p3Lrq1i1%2BsQ%2BhFJFDfzfnJidwxbDi6WCCtxxNPyduQ8qnbRv91BDcuOR%2BX6P4WIxrI20275OJ38maJNJ6KcEREkKBXZ2FEpAPk7t%2BZcFxV94m3D9j6FS%2Fc8y%2Fg7v7aciVlf5wE68Un1Hz2wdz2rc7mVUzL%2FTnhysWLuV0GcpvyBpDp0S5KOZvQV6qtEra4i%2BP4tG%2BXTFHyoxsmomLQfJY45Kp%2FNtrHiXq2E8KDGpTSs%2FXURZnfmB%2FiG67tZO3VD6fmEQiTetKUMHwPdvtWFRcCtlQlN9bNcF8Z02UexeImeiQuhnbjaDc6DELRHZZlKph4lsXQBRtiJgFUC3BlG4t%2FpTzV%2Fq3a%2BAXkI9c3Qeol9QTuTutM6SPm2XF8UrLpoFoSclax6oPEkMOa68Cm5Lgr7Un5dv0IxEmtoesZEmNI7O7GoqU1k8EioQySCYFRASEnvjymB0Zoi3oVQQPZ2%2BmEAfAAECY4pDpAutK%2FkfWw8RNM%2Bjn9UoEm0g8iwQg%2BJiQ%2F4IUtmyGfmAxMECYMX2vH5sr3eO9CnkilR3kd46sC2DZiIJUbarWI1P%2BvejYHD6MPP6lMgGOqUBsJmfoEsEZX2CAI2bFwnGKIOwdfSSJHwl7nhggHn6BjjsSmWDgePz%2FLlrAOq6Wa20eieBoBPUFSa6E0bhIHUiIi%2B9exiSlvLospZbQ%2Fjyv6pEhEZ%2B5jXc7lqi48AgHzR4CS9NcsE4z9oT%2BkvNVzhjFOTgHhRnVDXGS1dPsiwShSYfkSTzYD1yOsWBhCsy%2BVVlPOcQ20CjpVWX1hkd0grsrJqIDWMJ&X-Amz-Signature=e29512ff6228557362e8c92118f44da98edc6ebe82bb852921819bc72dd3e0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5GFOIB%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCbNHQVRbL%2F%2F1SQRUiEGkYsAO5l4JIev2UOaoruB7tZ9AIgNtoQLwNQBDeiDi4WIPGGxc2%2B8SD4Y6%2FicZH2Qb0iWvIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEA%2BL%2B9%2BRLT4HjSyqSrcA45Hoo2By55F0Slb6SiZVIw0SNuCH4GxjojCUGbPCSchEA20OPoQyNKQkqQ6p3Lrq1i1%2BsQ%2BhFJFDfzfnJidwxbDi6WCCtxxNPyduQ8qnbRv91BDcuOR%2BX6P4WIxrI20275OJ38maJNJ6KcEREkKBXZ2FEpAPk7t%2BZcFxV94m3D9j6FS%2Fc8y%2Fg7v7aciVlf5wE68Un1Hz2wdz2rc7mVUzL%2FTnhysWLuV0GcpvyBpDp0S5KOZvQV6qtEra4i%2BP4tG%2BXTFHyoxsmomLQfJY45Kp%2FNtrHiXq2E8KDGpTSs%2FXURZnfmB%2FiG67tZO3VD6fmEQiTetKUMHwPdvtWFRcCtlQlN9bNcF8Z02UexeImeiQuhnbjaDc6DELRHZZlKph4lsXQBRtiJgFUC3BlG4t%2FpTzV%2Fq3a%2BAXkI9c3Qeol9QTuTutM6SPm2XF8UrLpoFoSclax6oPEkMOa68Cm5Lgr7Un5dv0IxEmtoesZEmNI7O7GoqU1k8EioQySCYFRASEnvjymB0Zoi3oVQQPZ2%2BmEAfAAECY4pDpAutK%2FkfWw8RNM%2Bjn9UoEm0g8iwQg%2BJiQ%2F4IUtmyGfmAxMECYMX2vH5sr3eO9CnkilR3kd46sC2DZiIJUbarWI1P%2BvejYHD6MPP6lMgGOqUBsJmfoEsEZX2CAI2bFwnGKIOwdfSSJHwl7nhggHn6BjjsSmWDgePz%2FLlrAOq6Wa20eieBoBPUFSa6E0bhIHUiIi%2B9exiSlvLospZbQ%2Fjyv6pEhEZ%2B5jXc7lqi48AgHzR4CS9NcsE4z9oT%2BkvNVzhjFOTgHhRnVDXGS1dPsiwShSYfkSTzYD1yOsWBhCsy%2BVVlPOcQ20CjpVWX1hkd0grsrJqIDWMJ&X-Amz-Signature=980034e8ecf92e3c9c8ddd8c13732a7fd167400c634c10438082cb7c04e5443a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
