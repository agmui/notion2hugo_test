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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5JKPKS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlsUya3PJjLAZFuYKLtkw3sk4ppemjgg2hcY5HFyxOSAiEA%2FRD6E01Kjn9%2BCEtdw0bEWuZ15xbbA7gFEeMKETi%2BE3Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEFlCM3sm2FBJJeDFSrcA249sA%2BKAh0QPW3PovjuILf2oTSkSNRYPHGjhkOjRx5rY6p2fvXt2eUqeo%2F3aLiWxjAsQFJ6%2FMAgidhKpHCTBfkx%2FezPBS4inxpYfttF4MznWBedD1bfHziJxZG1jHIIJHnVdECMsH1LuKxUs%2FPOUvX8tam8uJHJFwbKJE2z4amf3CaFd1JPZmaJCgnZWGACGNhSYlZoTE2OlreVDYZ9dZGwX%2Fm8ZxvGeE8d699KDZ9h2QU5QrbRVsdV6f49dyXAhPQtt9oW%2Fn1sbevjQvzcylaK1CDx8XbqasK6oW9yyEIgd0FIBJiSOy4%2FgQ0FrVH2A5s7%2B0n6HtH4t4vxNr%2FG9sEvlAUSaqV1ps9CtJT3Yajt5BcqWfmmmeJevAAL9BSUO14AVgr3EtMFFo1Wh3MAghiK6x4L14wvKv9%2Be%2BL5B9z2xJ34%2Byo9dDItTcEkxnpTwAuQZvft4wzh6cOzsZcTarW%2B5tg%2FntyF%2BgytVCOlk%2Bz%2BR16zFPic8lXQHzGo7EC%2BEsdaRhoIIqTGm3w8kePT4pJ6BNKZXiUIrTOzb3%2B9VhvZkWZhzC2GFVOfUehb24lgD1%2BeqsjIyh886iM5G66f66VVHnLLn1QcrxQgK2m4semjbI8BSK%2FA23BOQFqWMOKPoMEGOqUBq848WuyyYAoLelyO1xSJ0c8p8SlM7zSzqYpuIW72aK2bxlnIw4NgBFfSD%2FJP8BaXwdoLpXAOaSkmLTH7H0eeXsDt3l55O4FIaoYBbrbj8qjy5FqdtezJnMPjxIAxDUj8QuQmsig7b4CYWDYlMgaAl%2BObTQkSZgc9gNwo5KdcJP22BnLoZN8ZVjnhn5p%2BTiknBBjdJYXJcRpdBMQooMFh%2FePCmFqw&X-Amz-Signature=5023e4fab4f15b36eb26b14b43ac72647fc1a08c7b8ac6c5f1d3e9a36e4e715f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5JKPKS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlsUya3PJjLAZFuYKLtkw3sk4ppemjgg2hcY5HFyxOSAiEA%2FRD6E01Kjn9%2BCEtdw0bEWuZ15xbbA7gFEeMKETi%2BE3Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEFlCM3sm2FBJJeDFSrcA249sA%2BKAh0QPW3PovjuILf2oTSkSNRYPHGjhkOjRx5rY6p2fvXt2eUqeo%2F3aLiWxjAsQFJ6%2FMAgidhKpHCTBfkx%2FezPBS4inxpYfttF4MznWBedD1bfHziJxZG1jHIIJHnVdECMsH1LuKxUs%2FPOUvX8tam8uJHJFwbKJE2z4amf3CaFd1JPZmaJCgnZWGACGNhSYlZoTE2OlreVDYZ9dZGwX%2Fm8ZxvGeE8d699KDZ9h2QU5QrbRVsdV6f49dyXAhPQtt9oW%2Fn1sbevjQvzcylaK1CDx8XbqasK6oW9yyEIgd0FIBJiSOy4%2FgQ0FrVH2A5s7%2B0n6HtH4t4vxNr%2FG9sEvlAUSaqV1ps9CtJT3Yajt5BcqWfmmmeJevAAL9BSUO14AVgr3EtMFFo1Wh3MAghiK6x4L14wvKv9%2Be%2BL5B9z2xJ34%2Byo9dDItTcEkxnpTwAuQZvft4wzh6cOzsZcTarW%2B5tg%2FntyF%2BgytVCOlk%2Bz%2BR16zFPic8lXQHzGo7EC%2BEsdaRhoIIqTGm3w8kePT4pJ6BNKZXiUIrTOzb3%2B9VhvZkWZhzC2GFVOfUehb24lgD1%2BeqsjIyh886iM5G66f66VVHnLLn1QcrxQgK2m4semjbI8BSK%2FA23BOQFqWMOKPoMEGOqUBq848WuyyYAoLelyO1xSJ0c8p8SlM7zSzqYpuIW72aK2bxlnIw4NgBFfSD%2FJP8BaXwdoLpXAOaSkmLTH7H0eeXsDt3l55O4FIaoYBbrbj8qjy5FqdtezJnMPjxIAxDUj8QuQmsig7b4CYWDYlMgaAl%2BObTQkSZgc9gNwo5KdcJP22BnLoZN8ZVjnhn5p%2BTiknBBjdJYXJcRpdBMQooMFh%2FePCmFqw&X-Amz-Signature=3af222333f4106bda44a6bba9189ae6a28890f15adc33677bfebf181ccd39de2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5JKPKS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlsUya3PJjLAZFuYKLtkw3sk4ppemjgg2hcY5HFyxOSAiEA%2FRD6E01Kjn9%2BCEtdw0bEWuZ15xbbA7gFEeMKETi%2BE3Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEFlCM3sm2FBJJeDFSrcA249sA%2BKAh0QPW3PovjuILf2oTSkSNRYPHGjhkOjRx5rY6p2fvXt2eUqeo%2F3aLiWxjAsQFJ6%2FMAgidhKpHCTBfkx%2FezPBS4inxpYfttF4MznWBedD1bfHziJxZG1jHIIJHnVdECMsH1LuKxUs%2FPOUvX8tam8uJHJFwbKJE2z4amf3CaFd1JPZmaJCgnZWGACGNhSYlZoTE2OlreVDYZ9dZGwX%2Fm8ZxvGeE8d699KDZ9h2QU5QrbRVsdV6f49dyXAhPQtt9oW%2Fn1sbevjQvzcylaK1CDx8XbqasK6oW9yyEIgd0FIBJiSOy4%2FgQ0FrVH2A5s7%2B0n6HtH4t4vxNr%2FG9sEvlAUSaqV1ps9CtJT3Yajt5BcqWfmmmeJevAAL9BSUO14AVgr3EtMFFo1Wh3MAghiK6x4L14wvKv9%2Be%2BL5B9z2xJ34%2Byo9dDItTcEkxnpTwAuQZvft4wzh6cOzsZcTarW%2B5tg%2FntyF%2BgytVCOlk%2Bz%2BR16zFPic8lXQHzGo7EC%2BEsdaRhoIIqTGm3w8kePT4pJ6BNKZXiUIrTOzb3%2B9VhvZkWZhzC2GFVOfUehb24lgD1%2BeqsjIyh886iM5G66f66VVHnLLn1QcrxQgK2m4semjbI8BSK%2FA23BOQFqWMOKPoMEGOqUBq848WuyyYAoLelyO1xSJ0c8p8SlM7zSzqYpuIW72aK2bxlnIw4NgBFfSD%2FJP8BaXwdoLpXAOaSkmLTH7H0eeXsDt3l55O4FIaoYBbrbj8qjy5FqdtezJnMPjxIAxDUj8QuQmsig7b4CYWDYlMgaAl%2BObTQkSZgc9gNwo5KdcJP22BnLoZN8ZVjnhn5p%2BTiknBBjdJYXJcRpdBMQooMFh%2FePCmFqw&X-Amz-Signature=ea9384ceea1b3741963295048567a37f9679ce7558b092c165eed2ead287b598&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
