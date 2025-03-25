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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRLQTSZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7w7y1zCr%2FnFKOYcqmi5bqfXs6jaoShMg0Wv8c0msXHAiEAqBkY9oAVKAx8VGwKSXDbEFI4iS9KhvHqRMxlzn%2FQWjYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDy%2Bk9af9J9HrsIcGSrcA1b2G5QtZFnnKv13bEHAgvSOQXy53Tn2EF2HE82hvpGHfVnNGuDBpJ5d0o61JuAZVfg4xinqItnpkmaUNmB0gadjVh0rN36TAKEHJik8KSbNZZs%2BmEfcpSezEp0FDggKPAx7RxPISbwoc%2FjeJB912aoJMYMNuWsuqSGuT037n4V%2BeU2OaZ2mtlhGqAgwTwAV1FxlXbm22Nti3SBeuRmlqPo0YFaFIZTPGb6z1ERJNXV%2F1BMy1gva2ggsb68uuvQ%2BM0Q71QE9sPAwzIxxRupXtioAETWFldsRvHuYyXMJ9VM81PI1f3ga1%2FAh7iNh5nz%2Fgw6bg9FKrFqUyXTdR3JYAS1syCCvaH6lfTPj%2FEi%2FAQETMslyYbzMFj%2Fsp4frZhdbFN0OSOBUwk%2FtW3ierRcY0fajQPhXlGpoTR0kUvEn6U9Yw%2FAP4QjNTlni1%2FruYQ1nBQWoaa0xAkuIvHV5N9x%2BjR3eYtiDiH9Carbga4PUv14%2Fo%2FpcImcM3xOSPPCFSWJ6sEduGfkyLeykVm5fcMgB7Tx9ZaUpqeRVARZh6uiuS0EOtq3tevsQt%2Bjku%2B3yR9rwoPhKjeABveNP0ba7WdOJ02N14DW5DzIpLtNtqENiVxkZA4eO8Dne6QAhGMyLMKiFi78GOqUBFLDkp57EP4Aim70lQCygjvKN%2BK1cB97ZxuH6fp1x4iQy%2Fvr5MvwPbtSNIlog8XPnff%2FxvZFrDRnAzBonV8v%2B8d0f%2F%2Byv4BTfPAhBAoznw1KkMweBxjRsfduIMXYG%2FoQWOdyePV6by%2BFTVqh5SEo55pdqVxTb9H8Fz7La2NyQHmlhSnhldLSNhZ37%2BQZThXJ6KXmM1%2Fs1OKd7vD9WgORPgcnBQVgR&X-Amz-Signature=b9fb5409e072576d4996edc876b9ff735abe28d6a6985693c21213ff1f8d5df5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRLQTSZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7w7y1zCr%2FnFKOYcqmi5bqfXs6jaoShMg0Wv8c0msXHAiEAqBkY9oAVKAx8VGwKSXDbEFI4iS9KhvHqRMxlzn%2FQWjYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDy%2Bk9af9J9HrsIcGSrcA1b2G5QtZFnnKv13bEHAgvSOQXy53Tn2EF2HE82hvpGHfVnNGuDBpJ5d0o61JuAZVfg4xinqItnpkmaUNmB0gadjVh0rN36TAKEHJik8KSbNZZs%2BmEfcpSezEp0FDggKPAx7RxPISbwoc%2FjeJB912aoJMYMNuWsuqSGuT037n4V%2BeU2OaZ2mtlhGqAgwTwAV1FxlXbm22Nti3SBeuRmlqPo0YFaFIZTPGb6z1ERJNXV%2F1BMy1gva2ggsb68uuvQ%2BM0Q71QE9sPAwzIxxRupXtioAETWFldsRvHuYyXMJ9VM81PI1f3ga1%2FAh7iNh5nz%2Fgw6bg9FKrFqUyXTdR3JYAS1syCCvaH6lfTPj%2FEi%2FAQETMslyYbzMFj%2Fsp4frZhdbFN0OSOBUwk%2FtW3ierRcY0fajQPhXlGpoTR0kUvEn6U9Yw%2FAP4QjNTlni1%2FruYQ1nBQWoaa0xAkuIvHV5N9x%2BjR3eYtiDiH9Carbga4PUv14%2Fo%2FpcImcM3xOSPPCFSWJ6sEduGfkyLeykVm5fcMgB7Tx9ZaUpqeRVARZh6uiuS0EOtq3tevsQt%2Bjku%2B3yR9rwoPhKjeABveNP0ba7WdOJ02N14DW5DzIpLtNtqENiVxkZA4eO8Dne6QAhGMyLMKiFi78GOqUBFLDkp57EP4Aim70lQCygjvKN%2BK1cB97ZxuH6fp1x4iQy%2Fvr5MvwPbtSNIlog8XPnff%2FxvZFrDRnAzBonV8v%2B8d0f%2F%2Byv4BTfPAhBAoznw1KkMweBxjRsfduIMXYG%2FoQWOdyePV6by%2BFTVqh5SEo55pdqVxTb9H8Fz7La2NyQHmlhSnhldLSNhZ37%2BQZThXJ6KXmM1%2Fs1OKd7vD9WgORPgcnBQVgR&X-Amz-Signature=593d12941f09d8ae439d226c8034a6ae5466ef0abd8b90d8bb38beed71a6bfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRLQTSZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7w7y1zCr%2FnFKOYcqmi5bqfXs6jaoShMg0Wv8c0msXHAiEAqBkY9oAVKAx8VGwKSXDbEFI4iS9KhvHqRMxlzn%2FQWjYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDy%2Bk9af9J9HrsIcGSrcA1b2G5QtZFnnKv13bEHAgvSOQXy53Tn2EF2HE82hvpGHfVnNGuDBpJ5d0o61JuAZVfg4xinqItnpkmaUNmB0gadjVh0rN36TAKEHJik8KSbNZZs%2BmEfcpSezEp0FDggKPAx7RxPISbwoc%2FjeJB912aoJMYMNuWsuqSGuT037n4V%2BeU2OaZ2mtlhGqAgwTwAV1FxlXbm22Nti3SBeuRmlqPo0YFaFIZTPGb6z1ERJNXV%2F1BMy1gva2ggsb68uuvQ%2BM0Q71QE9sPAwzIxxRupXtioAETWFldsRvHuYyXMJ9VM81PI1f3ga1%2FAh7iNh5nz%2Fgw6bg9FKrFqUyXTdR3JYAS1syCCvaH6lfTPj%2FEi%2FAQETMslyYbzMFj%2Fsp4frZhdbFN0OSOBUwk%2FtW3ierRcY0fajQPhXlGpoTR0kUvEn6U9Yw%2FAP4QjNTlni1%2FruYQ1nBQWoaa0xAkuIvHV5N9x%2BjR3eYtiDiH9Carbga4PUv14%2Fo%2FpcImcM3xOSPPCFSWJ6sEduGfkyLeykVm5fcMgB7Tx9ZaUpqeRVARZh6uiuS0EOtq3tevsQt%2Bjku%2B3yR9rwoPhKjeABveNP0ba7WdOJ02N14DW5DzIpLtNtqENiVxkZA4eO8Dne6QAhGMyLMKiFi78GOqUBFLDkp57EP4Aim70lQCygjvKN%2BK1cB97ZxuH6fp1x4iQy%2Fvr5MvwPbtSNIlog8XPnff%2FxvZFrDRnAzBonV8v%2B8d0f%2F%2Byv4BTfPAhBAoznw1KkMweBxjRsfduIMXYG%2FoQWOdyePV6by%2BFTVqh5SEo55pdqVxTb9H8Fz7La2NyQHmlhSnhldLSNhZ37%2BQZThXJ6KXmM1%2Fs1OKd7vD9WgORPgcnBQVgR&X-Amz-Signature=aa1b79dc862c4fa1be92711ca5392821ee3a086541fc77d13b8f4d1ff36dff5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
