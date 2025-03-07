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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HFH2HH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDpjKz7ywj7UBWZvbJ8V7Qy3a7I1zs6rGTpObnfLtvybAiEAma3a8q0qyjZzdxp7%2FL5KX%2F4w71iCrLRoiacOAmh0Lbgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDN%2B3PoTW04F%2FMeruhircA1vqGWK7wZKVaBod5QkMigyoAnK7ecBp8HSotI9mDSnhSrMWGMdR6%2Fr7QYUWhQmPvXkizRKDJ8gnakTq9kwi0%2F08J3EqCPpiF9UAfBN0s0bErxIAgJjiw2KbDioBfr9kq%2BX5TlmD%2BlG7RrkyjdWfkGxla4HXu9AssBx84TfdB%2FcJ%2Fu4HawLAIkJ5L4hCb5uFHYXuR6mU1OL34FunipwX44e%2BWxxVLXentB96MsUEu1uxTCUDETzfrIpvaPAF%2FUyBWSOWFk%2F%2FeCMKz8N3QG9w6xZCn11Pu1mlUoX%2Fhf3yd7flj3nJDct40xrXB%2BA64BQrgo558XTKV3E3KbvzsG%2FLPghAwcLFH9CYyWuKOKSOOI%2F15A9W5Z6vQPHxOZfpqfSwvGO4zxrnlDISBtUFi9U6dcxLmwDCE2fGoXNpVhs4FBeYlbnEIRNjfiuNpEKUFOZTLXtPyOBCt%2BBDbJjQD9eZvnrZDr2dO9bhmLu%2BAXaB894Hg837hqKBRq1ASK6QbvehwMSKqEkYh4zkar99ZqdGLWwEK25A%2BvGXxyUIGBKMOXDrKsULydLsP%2BIWSli9kuc%2FQVhq4nB3x5Tlo5ReQSdO5xU9MpVmlD1D%2F9tUNtrHXBDKdGilLBD6b9yZ1QQdMMPfrL4GOqUBW202%2FU8sY%2BE6CLB9WoXcBlNx2KzwPCFL2TROaM15xFd51htykmHPpCEqXUr1dRg76KGCE5JRKCSnjCU5LQons1iAXPPG3crEmgK4O%2B1eB59Ztc1qyiElu1qgjK3wq7UWlVzQUyzfljtXZeH8%2Bzvv%2FG6XE0m%2BkbogJX1tOPm7hf1%2B%2FTPi0%2Bsfqa43QSqwHjymkMiCfv28ojhsiR35qYQ9QnKjEQAm&X-Amz-Signature=f5364fcfeacf170a365cb011219f30dd984fb244b5ebe0f10e5b372f7e41f722&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HFH2HH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDpjKz7ywj7UBWZvbJ8V7Qy3a7I1zs6rGTpObnfLtvybAiEAma3a8q0qyjZzdxp7%2FL5KX%2F4w71iCrLRoiacOAmh0Lbgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDN%2B3PoTW04F%2FMeruhircA1vqGWK7wZKVaBod5QkMigyoAnK7ecBp8HSotI9mDSnhSrMWGMdR6%2Fr7QYUWhQmPvXkizRKDJ8gnakTq9kwi0%2F08J3EqCPpiF9UAfBN0s0bErxIAgJjiw2KbDioBfr9kq%2BX5TlmD%2BlG7RrkyjdWfkGxla4HXu9AssBx84TfdB%2FcJ%2Fu4HawLAIkJ5L4hCb5uFHYXuR6mU1OL34FunipwX44e%2BWxxVLXentB96MsUEu1uxTCUDETzfrIpvaPAF%2FUyBWSOWFk%2F%2FeCMKz8N3QG9w6xZCn11Pu1mlUoX%2Fhf3yd7flj3nJDct40xrXB%2BA64BQrgo558XTKV3E3KbvzsG%2FLPghAwcLFH9CYyWuKOKSOOI%2F15A9W5Z6vQPHxOZfpqfSwvGO4zxrnlDISBtUFi9U6dcxLmwDCE2fGoXNpVhs4FBeYlbnEIRNjfiuNpEKUFOZTLXtPyOBCt%2BBDbJjQD9eZvnrZDr2dO9bhmLu%2BAXaB894Hg837hqKBRq1ASK6QbvehwMSKqEkYh4zkar99ZqdGLWwEK25A%2BvGXxyUIGBKMOXDrKsULydLsP%2BIWSli9kuc%2FQVhq4nB3x5Tlo5ReQSdO5xU9MpVmlD1D%2F9tUNtrHXBDKdGilLBD6b9yZ1QQdMMPfrL4GOqUBW202%2FU8sY%2BE6CLB9WoXcBlNx2KzwPCFL2TROaM15xFd51htykmHPpCEqXUr1dRg76KGCE5JRKCSnjCU5LQons1iAXPPG3crEmgK4O%2B1eB59Ztc1qyiElu1qgjK3wq7UWlVzQUyzfljtXZeH8%2Bzvv%2FG6XE0m%2BkbogJX1tOPm7hf1%2B%2FTPi0%2Bsfqa43QSqwHjymkMiCfv28ojhsiR35qYQ9QnKjEQAm&X-Amz-Signature=c48322da07bc7021c8de9698c69ef359bb2fcdfe06ecbad70ad01fc124eda660&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HFH2HH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDpjKz7ywj7UBWZvbJ8V7Qy3a7I1zs6rGTpObnfLtvybAiEAma3a8q0qyjZzdxp7%2FL5KX%2F4w71iCrLRoiacOAmh0Lbgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDN%2B3PoTW04F%2FMeruhircA1vqGWK7wZKVaBod5QkMigyoAnK7ecBp8HSotI9mDSnhSrMWGMdR6%2Fr7QYUWhQmPvXkizRKDJ8gnakTq9kwi0%2F08J3EqCPpiF9UAfBN0s0bErxIAgJjiw2KbDioBfr9kq%2BX5TlmD%2BlG7RrkyjdWfkGxla4HXu9AssBx84TfdB%2FcJ%2Fu4HawLAIkJ5L4hCb5uFHYXuR6mU1OL34FunipwX44e%2BWxxVLXentB96MsUEu1uxTCUDETzfrIpvaPAF%2FUyBWSOWFk%2F%2FeCMKz8N3QG9w6xZCn11Pu1mlUoX%2Fhf3yd7flj3nJDct40xrXB%2BA64BQrgo558XTKV3E3KbvzsG%2FLPghAwcLFH9CYyWuKOKSOOI%2F15A9W5Z6vQPHxOZfpqfSwvGO4zxrnlDISBtUFi9U6dcxLmwDCE2fGoXNpVhs4FBeYlbnEIRNjfiuNpEKUFOZTLXtPyOBCt%2BBDbJjQD9eZvnrZDr2dO9bhmLu%2BAXaB894Hg837hqKBRq1ASK6QbvehwMSKqEkYh4zkar99ZqdGLWwEK25A%2BvGXxyUIGBKMOXDrKsULydLsP%2BIWSli9kuc%2FQVhq4nB3x5Tlo5ReQSdO5xU9MpVmlD1D%2F9tUNtrHXBDKdGilLBD6b9yZ1QQdMMPfrL4GOqUBW202%2FU8sY%2BE6CLB9WoXcBlNx2KzwPCFL2TROaM15xFd51htykmHPpCEqXUr1dRg76KGCE5JRKCSnjCU5LQons1iAXPPG3crEmgK4O%2B1eB59Ztc1qyiElu1qgjK3wq7UWlVzQUyzfljtXZeH8%2Bzvv%2FG6XE0m%2BkbogJX1tOPm7hf1%2B%2FTPi0%2Bsfqa43QSqwHjymkMiCfv28ojhsiR35qYQ9QnKjEQAm&X-Amz-Signature=1f84f7086665b45c9d5a792e9712c19ba0dcdfaa30809e489ff49c626f652cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
