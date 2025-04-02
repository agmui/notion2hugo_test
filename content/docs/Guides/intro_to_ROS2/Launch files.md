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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4AR2TF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICKRZKL8WdqNSAoP5MzJiYWkFXixparJ5ar9Dn9phq7%2FAiADBcFZcwg2KxM3iLl6rx3cHbOCHd3ahmhE2vZbgua5eCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbVDD6rQ9Xv9JAeevKtwDaO8CLQMJuwN0huoT5adzRHWvVDnZC8IEvkBm5ZtPZ1n8o4t8mNgmMSYlf98%2BbqasvKR9EtluzvzpuQPR58hOY2NhF%2BhzvodJLjKhZSTHs9f6096%2Fd3Y2zBT5%2B25BYz36bBE%2BXG0eDPVspmyejqmcwo8ljb42wG0cDODOrtG8WaN07Q0qx%2Fnpui3juy8eKfSlo3PuM2Htpz0IetC2A%2FdD3IF%2BrTnfMHnJE0eheyrqGF3KAwlRKXDAhWschOq2fmxprVOpZj1xQgv6ovubPgqMEP7RRCCni9BdbEbNdTxUOr8VPo2LHZ0FIAViolrEZ3eGOI6xjKqagK7uweFICFH8XMSGCP3oq0aHXd6y3siOmHhJC4QXMl%2FUmLQCeM5sKH6XN1%2FygonhGGUww2kTTh%2Bw2XApSDMfiylCpNMgAdpgTM8QpPSQYrF%2F17VmoKbkxxytqv36KiZq92CR9%2FPJaZGjOAT9hShL%2BGI6RdueT9CmjF7mMVfoDGvCMq5Z542RhqPn%2F%2F1lXDhVpZWEDbdU4DC41yKn7ooD1wCXd2keAO2p9D%2BRwyNBVMeDyCi4HIKPxCQ%2FYVfL4%2BTthXvtyEdmDu4rD1ZJJKz%2F%2FI4UrdkpN1twsYMwqAVCLL8VUvB7DY0w6YqzvwY6pgH3meDASGVx5MoWt9MvdRUvd1HyqxkrZLYXgdXDobe69ePKxgYEfcsMguD5km5CMI3aO%2FyUDsJe8WyNN8ojFxeL8fkGzcXf9%2FwLuf5CgfZ4HvgcklWVrTdjuxVcXc%2BN0XarqM2ZAkUIQHY5PMPvBNsbcu%2BdI7h9JrTsC3AqMd6EtbZRlf1z63ovLsB2QqKDNvGeDlD8%2BpFdStRoA2uMX6%2BfKy7VmqYk&X-Amz-Signature=331efe353548e8e358cba3ff43ad57b82cf8d455cbfebb143523f2a249157527&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4AR2TF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICKRZKL8WdqNSAoP5MzJiYWkFXixparJ5ar9Dn9phq7%2FAiADBcFZcwg2KxM3iLl6rx3cHbOCHd3ahmhE2vZbgua5eCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbVDD6rQ9Xv9JAeevKtwDaO8CLQMJuwN0huoT5adzRHWvVDnZC8IEvkBm5ZtPZ1n8o4t8mNgmMSYlf98%2BbqasvKR9EtluzvzpuQPR58hOY2NhF%2BhzvodJLjKhZSTHs9f6096%2Fd3Y2zBT5%2B25BYz36bBE%2BXG0eDPVspmyejqmcwo8ljb42wG0cDODOrtG8WaN07Q0qx%2Fnpui3juy8eKfSlo3PuM2Htpz0IetC2A%2FdD3IF%2BrTnfMHnJE0eheyrqGF3KAwlRKXDAhWschOq2fmxprVOpZj1xQgv6ovubPgqMEP7RRCCni9BdbEbNdTxUOr8VPo2LHZ0FIAViolrEZ3eGOI6xjKqagK7uweFICFH8XMSGCP3oq0aHXd6y3siOmHhJC4QXMl%2FUmLQCeM5sKH6XN1%2FygonhGGUww2kTTh%2Bw2XApSDMfiylCpNMgAdpgTM8QpPSQYrF%2F17VmoKbkxxytqv36KiZq92CR9%2FPJaZGjOAT9hShL%2BGI6RdueT9CmjF7mMVfoDGvCMq5Z542RhqPn%2F%2F1lXDhVpZWEDbdU4DC41yKn7ooD1wCXd2keAO2p9D%2BRwyNBVMeDyCi4HIKPxCQ%2FYVfL4%2BTthXvtyEdmDu4rD1ZJJKz%2F%2FI4UrdkpN1twsYMwqAVCLL8VUvB7DY0w6YqzvwY6pgH3meDASGVx5MoWt9MvdRUvd1HyqxkrZLYXgdXDobe69ePKxgYEfcsMguD5km5CMI3aO%2FyUDsJe8WyNN8ojFxeL8fkGzcXf9%2FwLuf5CgfZ4HvgcklWVrTdjuxVcXc%2BN0XarqM2ZAkUIQHY5PMPvBNsbcu%2BdI7h9JrTsC3AqMd6EtbZRlf1z63ovLsB2QqKDNvGeDlD8%2BpFdStRoA2uMX6%2BfKy7VmqYk&X-Amz-Signature=96578ed1478f51d7aabebeb7039ee1466a584a8e85acd6f05098486d1c0e6dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4AR2TF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICKRZKL8WdqNSAoP5MzJiYWkFXixparJ5ar9Dn9phq7%2FAiADBcFZcwg2KxM3iLl6rx3cHbOCHd3ahmhE2vZbgua5eCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbVDD6rQ9Xv9JAeevKtwDaO8CLQMJuwN0huoT5adzRHWvVDnZC8IEvkBm5ZtPZ1n8o4t8mNgmMSYlf98%2BbqasvKR9EtluzvzpuQPR58hOY2NhF%2BhzvodJLjKhZSTHs9f6096%2Fd3Y2zBT5%2B25BYz36bBE%2BXG0eDPVspmyejqmcwo8ljb42wG0cDODOrtG8WaN07Q0qx%2Fnpui3juy8eKfSlo3PuM2Htpz0IetC2A%2FdD3IF%2BrTnfMHnJE0eheyrqGF3KAwlRKXDAhWschOq2fmxprVOpZj1xQgv6ovubPgqMEP7RRCCni9BdbEbNdTxUOr8VPo2LHZ0FIAViolrEZ3eGOI6xjKqagK7uweFICFH8XMSGCP3oq0aHXd6y3siOmHhJC4QXMl%2FUmLQCeM5sKH6XN1%2FygonhGGUww2kTTh%2Bw2XApSDMfiylCpNMgAdpgTM8QpPSQYrF%2F17VmoKbkxxytqv36KiZq92CR9%2FPJaZGjOAT9hShL%2BGI6RdueT9CmjF7mMVfoDGvCMq5Z542RhqPn%2F%2F1lXDhVpZWEDbdU4DC41yKn7ooD1wCXd2keAO2p9D%2BRwyNBVMeDyCi4HIKPxCQ%2FYVfL4%2BTthXvtyEdmDu4rD1ZJJKz%2F%2FI4UrdkpN1twsYMwqAVCLL8VUvB7DY0w6YqzvwY6pgH3meDASGVx5MoWt9MvdRUvd1HyqxkrZLYXgdXDobe69ePKxgYEfcsMguD5km5CMI3aO%2FyUDsJe8WyNN8ojFxeL8fkGzcXf9%2FwLuf5CgfZ4HvgcklWVrTdjuxVcXc%2BN0XarqM2ZAkUIQHY5PMPvBNsbcu%2BdI7h9JrTsC3AqMd6EtbZRlf1z63ovLsB2QqKDNvGeDlD8%2BpFdStRoA2uMX6%2BfKy7VmqYk&X-Amz-Signature=4c4a2d3e0ae9e810fe7ede09b3c0c503b3cc4168b3ab8c97fd23f4afb4de5d57&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
