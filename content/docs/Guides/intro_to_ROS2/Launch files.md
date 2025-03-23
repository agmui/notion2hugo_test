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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6NCSBW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDLyCj7Mdy11SjCMfzrwV2P4nsHcgPGtSWWjAceFkO3VQIgajt4OhBxSmORBiO%2Bg2sEvTUC8xvL6XZyyB06ebMehB8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOKA%2FIqZI2jGXFE1yrcA6Zgb9WlmDT6fPfMakEZAG2l9B2mZvinsD3GhNL1PHCRifom2%2BtZ%2BXImpJHohOszfjXDECQmzQbRgsGovmPbsekxB5OjWRPnxliyhVtd%2F5EiYkH7qO%2FdTPwrYpgJ%2BHI6LXZYUcu%2BVEI0r8UcE4QVUCmyZK0vsxe55BbS1Wa1lbMC8FL%2BYYcsTed6Upm2h2nHwHc2rh5u8AcUviWHstj5OBq%2FsqBx0MZv%2FK353%2FTPhlunqr5HUKvRMvfXTl6edWkdPeGSxA4%2F5U%2FX5FXjSd6aHOevqIu3PmRM3yD4pEDEYCa2TtJEMKw%2FN%2FJNjjnPOO5omJhK%2BAziveLV0MlWXlR%2F14dm1nTl9b3GZRJcl4Brkxwo5hXoZsnWw0FeZcB6B9%2FjcRXZN%2FxngRyxCV4t1PQsj7eJvywfqIYLwPBJpi9n2ny01zKNEa1dRSsOaIvVNNNaniv68pPSQvk5IjHXEWTIwpDYpRlF9Zbf54l7mfwj3bPMXOyKl6bTetCcNz1tk2vLcOKHqxw9SjduSAjteZIUHZ2YOxaOQ80gxm%2BnNQqnM9bYtcr3hbn6Dgzy9qu7CA5cllIVlVle49%2BLGOLuxUkWThHGjBhROA4sIEE5B9ZCOwVYixq2Ru%2BPUeDrN8FRMI70%2Fr4GOqUBoZKqp1kfvwW3aajErq0pX0OJMGEI9QtXPrrNcWl6GWVbYk1CPIcAIYdhVDLfnS3aXqKLVu6DC9p316bt%2BYSaA7%2F2klESw%2FNYoz5%2BfeInUCvB5Hx9xTlNO3hpDtT%2F%2F%2BeoMR6HMCOCNmhkZs4Xvl6VIz7OncALGTQQc%2F0S%2B6Lv0FOGZ%2B8WGkv%2BWiQv78jMl1389ITBhRig9fvEnilQq7T73IpKIdqy&X-Amz-Signature=ac8e93ef97151bff721b74abe459b17bd87e2b5f52fa40e9c8887de8bbdf73fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6NCSBW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDLyCj7Mdy11SjCMfzrwV2P4nsHcgPGtSWWjAceFkO3VQIgajt4OhBxSmORBiO%2Bg2sEvTUC8xvL6XZyyB06ebMehB8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOKA%2FIqZI2jGXFE1yrcA6Zgb9WlmDT6fPfMakEZAG2l9B2mZvinsD3GhNL1PHCRifom2%2BtZ%2BXImpJHohOszfjXDECQmzQbRgsGovmPbsekxB5OjWRPnxliyhVtd%2F5EiYkH7qO%2FdTPwrYpgJ%2BHI6LXZYUcu%2BVEI0r8UcE4QVUCmyZK0vsxe55BbS1Wa1lbMC8FL%2BYYcsTed6Upm2h2nHwHc2rh5u8AcUviWHstj5OBq%2FsqBx0MZv%2FK353%2FTPhlunqr5HUKvRMvfXTl6edWkdPeGSxA4%2F5U%2FX5FXjSd6aHOevqIu3PmRM3yD4pEDEYCa2TtJEMKw%2FN%2FJNjjnPOO5omJhK%2BAziveLV0MlWXlR%2F14dm1nTl9b3GZRJcl4Brkxwo5hXoZsnWw0FeZcB6B9%2FjcRXZN%2FxngRyxCV4t1PQsj7eJvywfqIYLwPBJpi9n2ny01zKNEa1dRSsOaIvVNNNaniv68pPSQvk5IjHXEWTIwpDYpRlF9Zbf54l7mfwj3bPMXOyKl6bTetCcNz1tk2vLcOKHqxw9SjduSAjteZIUHZ2YOxaOQ80gxm%2BnNQqnM9bYtcr3hbn6Dgzy9qu7CA5cllIVlVle49%2BLGOLuxUkWThHGjBhROA4sIEE5B9ZCOwVYixq2Ru%2BPUeDrN8FRMI70%2Fr4GOqUBoZKqp1kfvwW3aajErq0pX0OJMGEI9QtXPrrNcWl6GWVbYk1CPIcAIYdhVDLfnS3aXqKLVu6DC9p316bt%2BYSaA7%2F2klESw%2FNYoz5%2BfeInUCvB5Hx9xTlNO3hpDtT%2F%2F%2BeoMR6HMCOCNmhkZs4Xvl6VIz7OncALGTQQc%2F0S%2B6Lv0FOGZ%2B8WGkv%2BWiQv78jMl1389ITBhRig9fvEnilQq7T73IpKIdqy&X-Amz-Signature=a6a55159b9f5c29ef883971ec01ad3b0718faceee9e8666da453bf139851ceeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6NCSBW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDLyCj7Mdy11SjCMfzrwV2P4nsHcgPGtSWWjAceFkO3VQIgajt4OhBxSmORBiO%2Bg2sEvTUC8xvL6XZyyB06ebMehB8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOKA%2FIqZI2jGXFE1yrcA6Zgb9WlmDT6fPfMakEZAG2l9B2mZvinsD3GhNL1PHCRifom2%2BtZ%2BXImpJHohOszfjXDECQmzQbRgsGovmPbsekxB5OjWRPnxliyhVtd%2F5EiYkH7qO%2FdTPwrYpgJ%2BHI6LXZYUcu%2BVEI0r8UcE4QVUCmyZK0vsxe55BbS1Wa1lbMC8FL%2BYYcsTed6Upm2h2nHwHc2rh5u8AcUviWHstj5OBq%2FsqBx0MZv%2FK353%2FTPhlunqr5HUKvRMvfXTl6edWkdPeGSxA4%2F5U%2FX5FXjSd6aHOevqIu3PmRM3yD4pEDEYCa2TtJEMKw%2FN%2FJNjjnPOO5omJhK%2BAziveLV0MlWXlR%2F14dm1nTl9b3GZRJcl4Brkxwo5hXoZsnWw0FeZcB6B9%2FjcRXZN%2FxngRyxCV4t1PQsj7eJvywfqIYLwPBJpi9n2ny01zKNEa1dRSsOaIvVNNNaniv68pPSQvk5IjHXEWTIwpDYpRlF9Zbf54l7mfwj3bPMXOyKl6bTetCcNz1tk2vLcOKHqxw9SjduSAjteZIUHZ2YOxaOQ80gxm%2BnNQqnM9bYtcr3hbn6Dgzy9qu7CA5cllIVlVle49%2BLGOLuxUkWThHGjBhROA4sIEE5B9ZCOwVYixq2Ru%2BPUeDrN8FRMI70%2Fr4GOqUBoZKqp1kfvwW3aajErq0pX0OJMGEI9QtXPrrNcWl6GWVbYk1CPIcAIYdhVDLfnS3aXqKLVu6DC9p316bt%2BYSaA7%2F2klESw%2FNYoz5%2BfeInUCvB5Hx9xTlNO3hpDtT%2F%2F%2BeoMR6HMCOCNmhkZs4Xvl6VIz7OncALGTQQc%2F0S%2B6Lv0FOGZ%2B8WGkv%2BWiQv78jMl1389ITBhRig9fvEnilQq7T73IpKIdqy&X-Amz-Signature=016e2e2920f2ac43bd834483aea2cb9c976c0dcc40c9cd46a6d6e8b9d9077387&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
