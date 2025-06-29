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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQD5EU2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYjtLnTWTHrji77r7sNoWHSXipdUynTvcfVzY8L3BWGQIhALWbiGyMEJLkZ81OJzMdF5Scrp6kF3pvkOW%2BxzyXqtj2KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyycB6%2BXS3XJ6Gcz6wq3AO7IbaJwnW7Ntu3AeJgTZT%2FRbqbq2XmiigW1qup9a3xqjRuRon%2FxE0QqQsZjAJaO0V0X3ev9mhDsj4NRSMUZVz0sqmVbbLNbiL114RbzDB7%2BSGx9XeDztPpebEPWfupQnL%2FgMAXMgMzAqK%2FfD3dtzh2NrlkP1A%2FblZRRmvY24MgNVLhM6KZo32phTbB4Avl%2FS7zs3YMbz6qqjMxePgoIwvsQDCTrFHmK%2FGBEDhhX2oGV2sZ%2B%2BCs6J9Ho6Hjf8fTVziEXX9b3Jfh4Sz97U0%2BatGQUS585rSOAiYYkyRO132aYBiJRlg8eWusaSeXM41sb96iTlNu04kSpowgCXPN%2F0%2FehP9d%2BuY3KmK2ntvqHQiTGFs5%2B38yuPYURGnSLj6wUSb5rF7ObJPWjO5V0XkxMXvelf%2FDhW0Z%2FsXjueeo%2F6H0bqAD%2BxWNHGNDlPVvaRw2osiPYdUA242pRU8zFrW6DWxP37XWcuFoqX2l2NlDec543vA93U%2F2E84neEg32CD%2BeB6qQFiCHvuxlT1XSncWxGMNu5QuEMBnbFpivJUUIYytMvWFzkMoSnCEVoQB6O%2BRUopT73p98ClalhHMkJS%2FlBmSWbmtnS3sV3Lsv7goBvylr7FVrA%2FUs8EUaKUxzDDgjoLDBjqkAQPySRB6qtTzcggar9IofTr%2FZH%2BdFARETNrghl75sB87cca8nLC8lkeCECMurA0Zl2gvBUB60OljAQ%2B4sv1mM4365CxJbnTeFM3I6EBJJPkQ3NmNmEP%2FML%2BcyBkvoyAuiHy1NLybtZyEgnD7A7QmtP9HwZg%2FHXzo6ZgWsKUTLQl7FM96SE6%2BQY%2BfXgTs0o2FPvmR5rSPw1zxQtF%2F2owysM7fnxzS&X-Amz-Signature=3b4074816a8fa5d5385b49b5811284461c3aae89251fa7e6bff1bfd698401b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQD5EU2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYjtLnTWTHrji77r7sNoWHSXipdUynTvcfVzY8L3BWGQIhALWbiGyMEJLkZ81OJzMdF5Scrp6kF3pvkOW%2BxzyXqtj2KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyycB6%2BXS3XJ6Gcz6wq3AO7IbaJwnW7Ntu3AeJgTZT%2FRbqbq2XmiigW1qup9a3xqjRuRon%2FxE0QqQsZjAJaO0V0X3ev9mhDsj4NRSMUZVz0sqmVbbLNbiL114RbzDB7%2BSGx9XeDztPpebEPWfupQnL%2FgMAXMgMzAqK%2FfD3dtzh2NrlkP1A%2FblZRRmvY24MgNVLhM6KZo32phTbB4Avl%2FS7zs3YMbz6qqjMxePgoIwvsQDCTrFHmK%2FGBEDhhX2oGV2sZ%2B%2BCs6J9Ho6Hjf8fTVziEXX9b3Jfh4Sz97U0%2BatGQUS585rSOAiYYkyRO132aYBiJRlg8eWusaSeXM41sb96iTlNu04kSpowgCXPN%2F0%2FehP9d%2BuY3KmK2ntvqHQiTGFs5%2B38yuPYURGnSLj6wUSb5rF7ObJPWjO5V0XkxMXvelf%2FDhW0Z%2FsXjueeo%2F6H0bqAD%2BxWNHGNDlPVvaRw2osiPYdUA242pRU8zFrW6DWxP37XWcuFoqX2l2NlDec543vA93U%2F2E84neEg32CD%2BeB6qQFiCHvuxlT1XSncWxGMNu5QuEMBnbFpivJUUIYytMvWFzkMoSnCEVoQB6O%2BRUopT73p98ClalhHMkJS%2FlBmSWbmtnS3sV3Lsv7goBvylr7FVrA%2FUs8EUaKUxzDDgjoLDBjqkAQPySRB6qtTzcggar9IofTr%2FZH%2BdFARETNrghl75sB87cca8nLC8lkeCECMurA0Zl2gvBUB60OljAQ%2B4sv1mM4365CxJbnTeFM3I6EBJJPkQ3NmNmEP%2FML%2BcyBkvoyAuiHy1NLybtZyEgnD7A7QmtP9HwZg%2FHXzo6ZgWsKUTLQl7FM96SE6%2BQY%2BfXgTs0o2FPvmR5rSPw1zxQtF%2F2owysM7fnxzS&X-Amz-Signature=e90cc8e55f7caa90ab188de8d2a9401d26854a3d9844056aa40bc91711b53ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQD5EU2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYjtLnTWTHrji77r7sNoWHSXipdUynTvcfVzY8L3BWGQIhALWbiGyMEJLkZ81OJzMdF5Scrp6kF3pvkOW%2BxzyXqtj2KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyycB6%2BXS3XJ6Gcz6wq3AO7IbaJwnW7Ntu3AeJgTZT%2FRbqbq2XmiigW1qup9a3xqjRuRon%2FxE0QqQsZjAJaO0V0X3ev9mhDsj4NRSMUZVz0sqmVbbLNbiL114RbzDB7%2BSGx9XeDztPpebEPWfupQnL%2FgMAXMgMzAqK%2FfD3dtzh2NrlkP1A%2FblZRRmvY24MgNVLhM6KZo32phTbB4Avl%2FS7zs3YMbz6qqjMxePgoIwvsQDCTrFHmK%2FGBEDhhX2oGV2sZ%2B%2BCs6J9Ho6Hjf8fTVziEXX9b3Jfh4Sz97U0%2BatGQUS585rSOAiYYkyRO132aYBiJRlg8eWusaSeXM41sb96iTlNu04kSpowgCXPN%2F0%2FehP9d%2BuY3KmK2ntvqHQiTGFs5%2B38yuPYURGnSLj6wUSb5rF7ObJPWjO5V0XkxMXvelf%2FDhW0Z%2FsXjueeo%2F6H0bqAD%2BxWNHGNDlPVvaRw2osiPYdUA242pRU8zFrW6DWxP37XWcuFoqX2l2NlDec543vA93U%2F2E84neEg32CD%2BeB6qQFiCHvuxlT1XSncWxGMNu5QuEMBnbFpivJUUIYytMvWFzkMoSnCEVoQB6O%2BRUopT73p98ClalhHMkJS%2FlBmSWbmtnS3sV3Lsv7goBvylr7FVrA%2FUs8EUaKUxzDDgjoLDBjqkAQPySRB6qtTzcggar9IofTr%2FZH%2BdFARETNrghl75sB87cca8nLC8lkeCECMurA0Zl2gvBUB60OljAQ%2B4sv1mM4365CxJbnTeFM3I6EBJJPkQ3NmNmEP%2FML%2BcyBkvoyAuiHy1NLybtZyEgnD7A7QmtP9HwZg%2FHXzo6ZgWsKUTLQl7FM96SE6%2BQY%2BfXgTs0o2FPvmR5rSPw1zxQtF%2F2owysM7fnxzS&X-Amz-Signature=970d383c6a2025499187c86c26e08f4095dea2a55eac4a3e8e14a6e8aadc7339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
