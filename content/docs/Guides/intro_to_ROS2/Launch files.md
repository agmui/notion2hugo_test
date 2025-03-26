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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZED55C4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExWty96FXLkqPBCcNojh69ZFsWv010PF7CZsktNBhOMAiEAocU23DlIt8cZb9lYyj4t%2FkkXlP4QCzMyucgPnEAw9cgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDb5K4ue54forKmaOyrcA9AkG3QBA2CKrpfWYFS97aRUoL%2FoJFaQucu9xriNtGC3cxzMrs5MvsqRS7Dn1TpVJKZdbN2rgzEX7POPULoUFBNoGkabxR7rlz40l%2B6eDMHQi2dabMFa6hPJ3rr3l8HodurO%2FL8yI86JKr7M2Km4cCXs5ouQyHaqjoJFRucechPo8QGF%2BEe0UhT3vY2UIsEUkd5lWfsuoFNMT7xVuYfXLl6Ytt8iPI7Dy216fMiBwbn%2Fh8DXDnDXxD1jS9mFSo%2FBw9cCo3dHHK8QExZIvd3gWXkpwGMTkGnlJQ0f36a0W2xkYvx7k4rsUtXMRrscaSPsvc3YoAYXysUOiPFX%2Fro9C02b5xPhcULHzh4LIovmJ0aGsz63U7TbHTLfNxklWlYBEA3NhDcEdsDmpbMCq1ZojNoL7kUA5msMnZGZISbYTimfUbFFve%2B4%2B%2BEiTRzixEIfWWoJPNoNEhsUymeLjqm7EotRq7Glquwf%2F9U3SjRQgLxaUR3kvAyvI2%2B7NFdhZ7WROZJolxGS5AA5ICnFjg1EkJVtgFTNcr4Yzs5dDEzZJr%2FygR7TnjSbc%2F7uAQsjffAmm2p7VCfsvwvnPLMtnbsPpW%2F5OED%2BXlCZgFEZkSZpE4IbyQlgYgosJc3EME6jMM75j78GOqUBT6rfNrjplr3D58lSLvyjYGsC%2B%2BTIic4R01%2BPxFdozu7Sv0ozYz95VNpzAjY6QSc2pYgjsFfZwGA3zBLzfVKd4E9TDXjlP67i7ZD%2BXXhjWWwjoON0YrKD0Om8muRJiCkjIQwL%2BMwuAGyIS%2BBSsAjsKtJGeGeYDr2RjazB3Z%2F%2BMAcW4IzCbimqjTsLIZh1qfSSEqAQnUnXhU855THxIQju6sqUiMTz&X-Amz-Signature=209faf923faf3e87ff1cedf2047b472678ae6522a9889ca83974912ef48e8d47&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZED55C4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExWty96FXLkqPBCcNojh69ZFsWv010PF7CZsktNBhOMAiEAocU23DlIt8cZb9lYyj4t%2FkkXlP4QCzMyucgPnEAw9cgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDb5K4ue54forKmaOyrcA9AkG3QBA2CKrpfWYFS97aRUoL%2FoJFaQucu9xriNtGC3cxzMrs5MvsqRS7Dn1TpVJKZdbN2rgzEX7POPULoUFBNoGkabxR7rlz40l%2B6eDMHQi2dabMFa6hPJ3rr3l8HodurO%2FL8yI86JKr7M2Km4cCXs5ouQyHaqjoJFRucechPo8QGF%2BEe0UhT3vY2UIsEUkd5lWfsuoFNMT7xVuYfXLl6Ytt8iPI7Dy216fMiBwbn%2Fh8DXDnDXxD1jS9mFSo%2FBw9cCo3dHHK8QExZIvd3gWXkpwGMTkGnlJQ0f36a0W2xkYvx7k4rsUtXMRrscaSPsvc3YoAYXysUOiPFX%2Fro9C02b5xPhcULHzh4LIovmJ0aGsz63U7TbHTLfNxklWlYBEA3NhDcEdsDmpbMCq1ZojNoL7kUA5msMnZGZISbYTimfUbFFve%2B4%2B%2BEiTRzixEIfWWoJPNoNEhsUymeLjqm7EotRq7Glquwf%2F9U3SjRQgLxaUR3kvAyvI2%2B7NFdhZ7WROZJolxGS5AA5ICnFjg1EkJVtgFTNcr4Yzs5dDEzZJr%2FygR7TnjSbc%2F7uAQsjffAmm2p7VCfsvwvnPLMtnbsPpW%2F5OED%2BXlCZgFEZkSZpE4IbyQlgYgosJc3EME6jMM75j78GOqUBT6rfNrjplr3D58lSLvyjYGsC%2B%2BTIic4R01%2BPxFdozu7Sv0ozYz95VNpzAjY6QSc2pYgjsFfZwGA3zBLzfVKd4E9TDXjlP67i7ZD%2BXXhjWWwjoON0YrKD0Om8muRJiCkjIQwL%2BMwuAGyIS%2BBSsAjsKtJGeGeYDr2RjazB3Z%2F%2BMAcW4IzCbimqjTsLIZh1qfSSEqAQnUnXhU855THxIQju6sqUiMTz&X-Amz-Signature=209adecd6332d76cb278e1ed6fd8ffae491887b0afe1ecdcd6913c4aab6d5b37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZED55C4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExWty96FXLkqPBCcNojh69ZFsWv010PF7CZsktNBhOMAiEAocU23DlIt8cZb9lYyj4t%2FkkXlP4QCzMyucgPnEAw9cgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDb5K4ue54forKmaOyrcA9AkG3QBA2CKrpfWYFS97aRUoL%2FoJFaQucu9xriNtGC3cxzMrs5MvsqRS7Dn1TpVJKZdbN2rgzEX7POPULoUFBNoGkabxR7rlz40l%2B6eDMHQi2dabMFa6hPJ3rr3l8HodurO%2FL8yI86JKr7M2Km4cCXs5ouQyHaqjoJFRucechPo8QGF%2BEe0UhT3vY2UIsEUkd5lWfsuoFNMT7xVuYfXLl6Ytt8iPI7Dy216fMiBwbn%2Fh8DXDnDXxD1jS9mFSo%2FBw9cCo3dHHK8QExZIvd3gWXkpwGMTkGnlJQ0f36a0W2xkYvx7k4rsUtXMRrscaSPsvc3YoAYXysUOiPFX%2Fro9C02b5xPhcULHzh4LIovmJ0aGsz63U7TbHTLfNxklWlYBEA3NhDcEdsDmpbMCq1ZojNoL7kUA5msMnZGZISbYTimfUbFFve%2B4%2B%2BEiTRzixEIfWWoJPNoNEhsUymeLjqm7EotRq7Glquwf%2F9U3SjRQgLxaUR3kvAyvI2%2B7NFdhZ7WROZJolxGS5AA5ICnFjg1EkJVtgFTNcr4Yzs5dDEzZJr%2FygR7TnjSbc%2F7uAQsjffAmm2p7VCfsvwvnPLMtnbsPpW%2F5OED%2BXlCZgFEZkSZpE4IbyQlgYgosJc3EME6jMM75j78GOqUBT6rfNrjplr3D58lSLvyjYGsC%2B%2BTIic4R01%2BPxFdozu7Sv0ozYz95VNpzAjY6QSc2pYgjsFfZwGA3zBLzfVKd4E9TDXjlP67i7ZD%2BXXhjWWwjoON0YrKD0Om8muRJiCkjIQwL%2BMwuAGyIS%2BBSsAjsKtJGeGeYDr2RjazB3Z%2F%2BMAcW4IzCbimqjTsLIZh1qfSSEqAQnUnXhU855THxIQju6sqUiMTz&X-Amz-Signature=e05bfa2a027847f54fa5d8b0f1d8d47d981326cad6c6fc21ec80c661c3dc2e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
