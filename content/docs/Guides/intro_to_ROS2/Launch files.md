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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V265VR5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNnSmAdA9DPc5BNkNGbLHVJbcmsxPttRFHmyVjvXLVNwIhAJdvYBVqmQJJfy2ZKO1IALpLD9fJLe6UyOnqua%2BZO2tYKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMXEijGoo6ndloEYq3APY9yPqDibElKt%2Fonw0DXk2zgEQv%2Bpp73IhZ8D1ie9e32j5%2FccukyrfhaSeOTG1DSFqmuhTdITcrimjUHbRMYD5eaTbu7zu27hDVmcldGn7fRtNSMOjGirhRyLI509Liryg5OlqFmYjvYUunWvzLdzRYInf1ZEyXL8WdoFr%2Fxp3Vxq7PL2Tj6FWHrBq8QaCjPwKUFYuyX%2BNaQdkoZ4Jx7OH0acIBU5RH%2FdiylEHtytC06f%2BDdbWMfa0podO%2Bza8lubbqdBwNBscicNaN3ai3itvGhC6WFVevGXWxX%2Br1ggWrKu%2B4yPTKtf6zgCFrEqztNbzDswlEeMsHGpeSQkN25DsQiy9z55j%2Bj45La%2BweKOTCqSSeCSx%2BieLi%2BZPNFY7DfAME1NQUqiQSFiHfCfbqTsI95WNvuNv5%2FIHeiK5%2FcN7ro5j8G0ahZOUW3M%2FVxsmt0eLBCvzpkCd%2Btm7nta4dLHU6K7wvkoiOEyLa4QsKVRyvTD3VsQbYuBwvHbJX%2B74W1LDgVWJDiy8ZVXfFAmJe%2FfGXqrEWLT59D9u5Vcsh1vK3jGv7CSoTSkMDj2oXx87bD%2F3yIwyRGO%2BYfRgIBySPw9NYsOj4Kad7QjAc29bJZCeysr2yLlkQ%2F2mWICg8TD8ose%2BBjqkAZpnZYvIoI6y3hMpCaqv7jramvtWeMQRMKkDeg9c7qh03iqgBW5xOB7yha5U3uIueA%2FzxWeSDD8%2BzU7ib1Bnm3bVtxrRo8bXq5xtyeSFD8hQRcxwnAvC4NeI2OT5tscK5PHAwBi0OJrB%2FqEJHTGFIsAtzfH5wlR22rKH5iPnEdl27fA6Azi1SmJL%2FS25KQWdbCVpnyaq5AqBU4DTwfNV%2BJIGJymf&X-Amz-Signature=0f43626206c4807634521364e452594713eee38ceadf7a8db9b7340bea0d1c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V265VR5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNnSmAdA9DPc5BNkNGbLHVJbcmsxPttRFHmyVjvXLVNwIhAJdvYBVqmQJJfy2ZKO1IALpLD9fJLe6UyOnqua%2BZO2tYKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMXEijGoo6ndloEYq3APY9yPqDibElKt%2Fonw0DXk2zgEQv%2Bpp73IhZ8D1ie9e32j5%2FccukyrfhaSeOTG1DSFqmuhTdITcrimjUHbRMYD5eaTbu7zu27hDVmcldGn7fRtNSMOjGirhRyLI509Liryg5OlqFmYjvYUunWvzLdzRYInf1ZEyXL8WdoFr%2Fxp3Vxq7PL2Tj6FWHrBq8QaCjPwKUFYuyX%2BNaQdkoZ4Jx7OH0acIBU5RH%2FdiylEHtytC06f%2BDdbWMfa0podO%2Bza8lubbqdBwNBscicNaN3ai3itvGhC6WFVevGXWxX%2Br1ggWrKu%2B4yPTKtf6zgCFrEqztNbzDswlEeMsHGpeSQkN25DsQiy9z55j%2Bj45La%2BweKOTCqSSeCSx%2BieLi%2BZPNFY7DfAME1NQUqiQSFiHfCfbqTsI95WNvuNv5%2FIHeiK5%2FcN7ro5j8G0ahZOUW3M%2FVxsmt0eLBCvzpkCd%2Btm7nta4dLHU6K7wvkoiOEyLa4QsKVRyvTD3VsQbYuBwvHbJX%2B74W1LDgVWJDiy8ZVXfFAmJe%2FfGXqrEWLT59D9u5Vcsh1vK3jGv7CSoTSkMDj2oXx87bD%2F3yIwyRGO%2BYfRgIBySPw9NYsOj4Kad7QjAc29bJZCeysr2yLlkQ%2F2mWICg8TD8ose%2BBjqkAZpnZYvIoI6y3hMpCaqv7jramvtWeMQRMKkDeg9c7qh03iqgBW5xOB7yha5U3uIueA%2FzxWeSDD8%2BzU7ib1Bnm3bVtxrRo8bXq5xtyeSFD8hQRcxwnAvC4NeI2OT5tscK5PHAwBi0OJrB%2FqEJHTGFIsAtzfH5wlR22rKH5iPnEdl27fA6Azi1SmJL%2FS25KQWdbCVpnyaq5AqBU4DTwfNV%2BJIGJymf&X-Amz-Signature=c27c84957dd29b11c918828fbd7f7e934a3ea1dec3b782c29518d224c8bceea1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V265VR5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNnSmAdA9DPc5BNkNGbLHVJbcmsxPttRFHmyVjvXLVNwIhAJdvYBVqmQJJfy2ZKO1IALpLD9fJLe6UyOnqua%2BZO2tYKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCMXEijGoo6ndloEYq3APY9yPqDibElKt%2Fonw0DXk2zgEQv%2Bpp73IhZ8D1ie9e32j5%2FccukyrfhaSeOTG1DSFqmuhTdITcrimjUHbRMYD5eaTbu7zu27hDVmcldGn7fRtNSMOjGirhRyLI509Liryg5OlqFmYjvYUunWvzLdzRYInf1ZEyXL8WdoFr%2Fxp3Vxq7PL2Tj6FWHrBq8QaCjPwKUFYuyX%2BNaQdkoZ4Jx7OH0acIBU5RH%2FdiylEHtytC06f%2BDdbWMfa0podO%2Bza8lubbqdBwNBscicNaN3ai3itvGhC6WFVevGXWxX%2Br1ggWrKu%2B4yPTKtf6zgCFrEqztNbzDswlEeMsHGpeSQkN25DsQiy9z55j%2Bj45La%2BweKOTCqSSeCSx%2BieLi%2BZPNFY7DfAME1NQUqiQSFiHfCfbqTsI95WNvuNv5%2FIHeiK5%2FcN7ro5j8G0ahZOUW3M%2FVxsmt0eLBCvzpkCd%2Btm7nta4dLHU6K7wvkoiOEyLa4QsKVRyvTD3VsQbYuBwvHbJX%2B74W1LDgVWJDiy8ZVXfFAmJe%2FfGXqrEWLT59D9u5Vcsh1vK3jGv7CSoTSkMDj2oXx87bD%2F3yIwyRGO%2BYfRgIBySPw9NYsOj4Kad7QjAc29bJZCeysr2yLlkQ%2F2mWICg8TD8ose%2BBjqkAZpnZYvIoI6y3hMpCaqv7jramvtWeMQRMKkDeg9c7qh03iqgBW5xOB7yha5U3uIueA%2FzxWeSDD8%2BzU7ib1Bnm3bVtxrRo8bXq5xtyeSFD8hQRcxwnAvC4NeI2OT5tscK5PHAwBi0OJrB%2FqEJHTGFIsAtzfH5wlR22rKH5iPnEdl27fA6Azi1SmJL%2FS25KQWdbCVpnyaq5AqBU4DTwfNV%2BJIGJymf&X-Amz-Signature=da4709cdeb0aaf4fda20f7b4eb8e35006d4279f63d3726f5caf8dca3e745a9da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
