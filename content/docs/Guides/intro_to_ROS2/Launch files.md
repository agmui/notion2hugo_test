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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWGGWLI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1x53eKQVRz5j0Taw7TIHwLQk%2F46b9rwFAuiPJykowaAiEA0%2FOUEwPFyiVThkj6Jc8mgnCMtEnpwaOk0H4TRANQ3qAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPvDveNbHOUsM4uyZircA9Fo3ZfFsBJpnj48TpFJ6uMfhiOcJy2F5EIO79NgqQFylCIOk8CnBMyNb6RbX%2BcfQsoE7nLXxTezJeVDUjubO%2Faa7nwQ3epkuDTwj7fdPVNwRfFfqdJ22IKHGbucbYVqI3oy8C9DcThL7dGUjPijsF%2FMwt277b0vay8P90zLRsa8has8%2FyosHFiTHw51OMIRpAtlQE3FdccSPwFxeb%2BNEU3zWSdCMraVPWB1%2BK%2Fmjb3KjCw57DoPJyUpZAKODLd4m%2FjCugYgdaXRHZA4gNm63uQ%2BiMiVBn7Rwb3Q%2FYK%2FcspUvFdA8cx5hQl0swmn7yNgCqY61fbpa%2Fz8WvazA%2Fw1VH7imNqFoqcD3QOYTWmPHel%2FkJ%2FP5zbet1OyHnIDA1zX%2BoeGXcALRSVBfAoY94kfVVelGCZ%2FXgotuauhbX5hTShEKrM1wBjg5o%2FLsmat0%2FN7jlxutCoPVZt9l%2BBNQJ%2BvpKruWN7Pzqhboz2Vsjr5uEMgwVGl1vpyelZjrxCOpDojWlhewZco3Uz0YA%2FHwcmsKZ8hGzaK3QVBnXpCQZWbWnMgxs20zskpjjy8l6FMPx7kLxopkzCknVjX%2B2fw3qRtPR5cke5%2BTTA4tUw4dNm9G9UAIHxCm5d7n38X1C2yMPOF078GOqUBPGa4%2FZAR7L25ooTlekOblaIvS6cKjItoVsboJMviKa5X4LeAKNRAlrc6btgzEgHt69SeD9Ii7u6P%2BHfHlc6s2Gd7uNfL7ehNbkjWLblRPu0S2iVtVVbr1K4opFZwvWUgs%2FC9WvQZT0B1XicTfe14Ljn4ZYPyHRymvNqpDqZO9jbYmyvaI1FnW4pmtpEca6HvSPVa79Jy3b0atwpj%2FBUNtes6%2FiVt&X-Amz-Signature=d057c76c73f5b35075c7433fde1528809efd5636347442bc14d0be7ccea4e7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWGGWLI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1x53eKQVRz5j0Taw7TIHwLQk%2F46b9rwFAuiPJykowaAiEA0%2FOUEwPFyiVThkj6Jc8mgnCMtEnpwaOk0H4TRANQ3qAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPvDveNbHOUsM4uyZircA9Fo3ZfFsBJpnj48TpFJ6uMfhiOcJy2F5EIO79NgqQFylCIOk8CnBMyNb6RbX%2BcfQsoE7nLXxTezJeVDUjubO%2Faa7nwQ3epkuDTwj7fdPVNwRfFfqdJ22IKHGbucbYVqI3oy8C9DcThL7dGUjPijsF%2FMwt277b0vay8P90zLRsa8has8%2FyosHFiTHw51OMIRpAtlQE3FdccSPwFxeb%2BNEU3zWSdCMraVPWB1%2BK%2Fmjb3KjCw57DoPJyUpZAKODLd4m%2FjCugYgdaXRHZA4gNm63uQ%2BiMiVBn7Rwb3Q%2FYK%2FcspUvFdA8cx5hQl0swmn7yNgCqY61fbpa%2Fz8WvazA%2Fw1VH7imNqFoqcD3QOYTWmPHel%2FkJ%2FP5zbet1OyHnIDA1zX%2BoeGXcALRSVBfAoY94kfVVelGCZ%2FXgotuauhbX5hTShEKrM1wBjg5o%2FLsmat0%2FN7jlxutCoPVZt9l%2BBNQJ%2BvpKruWN7Pzqhboz2Vsjr5uEMgwVGl1vpyelZjrxCOpDojWlhewZco3Uz0YA%2FHwcmsKZ8hGzaK3QVBnXpCQZWbWnMgxs20zskpjjy8l6FMPx7kLxopkzCknVjX%2B2fw3qRtPR5cke5%2BTTA4tUw4dNm9G9UAIHxCm5d7n38X1C2yMPOF078GOqUBPGa4%2FZAR7L25ooTlekOblaIvS6cKjItoVsboJMviKa5X4LeAKNRAlrc6btgzEgHt69SeD9Ii7u6P%2BHfHlc6s2Gd7uNfL7ehNbkjWLblRPu0S2iVtVVbr1K4opFZwvWUgs%2FC9WvQZT0B1XicTfe14Ljn4ZYPyHRymvNqpDqZO9jbYmyvaI1FnW4pmtpEca6HvSPVa79Jy3b0atwpj%2FBUNtes6%2FiVt&X-Amz-Signature=8203fdaf2c1e78537c5a28240a935ae9402e3f72e4a1fe48cecd37f701d6722d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWGGWLI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1x53eKQVRz5j0Taw7TIHwLQk%2F46b9rwFAuiPJykowaAiEA0%2FOUEwPFyiVThkj6Jc8mgnCMtEnpwaOk0H4TRANQ3qAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPvDveNbHOUsM4uyZircA9Fo3ZfFsBJpnj48TpFJ6uMfhiOcJy2F5EIO79NgqQFylCIOk8CnBMyNb6RbX%2BcfQsoE7nLXxTezJeVDUjubO%2Faa7nwQ3epkuDTwj7fdPVNwRfFfqdJ22IKHGbucbYVqI3oy8C9DcThL7dGUjPijsF%2FMwt277b0vay8P90zLRsa8has8%2FyosHFiTHw51OMIRpAtlQE3FdccSPwFxeb%2BNEU3zWSdCMraVPWB1%2BK%2Fmjb3KjCw57DoPJyUpZAKODLd4m%2FjCugYgdaXRHZA4gNm63uQ%2BiMiVBn7Rwb3Q%2FYK%2FcspUvFdA8cx5hQl0swmn7yNgCqY61fbpa%2Fz8WvazA%2Fw1VH7imNqFoqcD3QOYTWmPHel%2FkJ%2FP5zbet1OyHnIDA1zX%2BoeGXcALRSVBfAoY94kfVVelGCZ%2FXgotuauhbX5hTShEKrM1wBjg5o%2FLsmat0%2FN7jlxutCoPVZt9l%2BBNQJ%2BvpKruWN7Pzqhboz2Vsjr5uEMgwVGl1vpyelZjrxCOpDojWlhewZco3Uz0YA%2FHwcmsKZ8hGzaK3QVBnXpCQZWbWnMgxs20zskpjjy8l6FMPx7kLxopkzCknVjX%2B2fw3qRtPR5cke5%2BTTA4tUw4dNm9G9UAIHxCm5d7n38X1C2yMPOF078GOqUBPGa4%2FZAR7L25ooTlekOblaIvS6cKjItoVsboJMviKa5X4LeAKNRAlrc6btgzEgHt69SeD9Ii7u6P%2BHfHlc6s2Gd7uNfL7ehNbkjWLblRPu0S2iVtVVbr1K4opFZwvWUgs%2FC9WvQZT0B1XicTfe14Ljn4ZYPyHRymvNqpDqZO9jbYmyvaI1FnW4pmtpEca6HvSPVa79Jy3b0atwpj%2FBUNtes6%2FiVt&X-Amz-Signature=df018929999c6a061ac2ef3dbfd6b6434ac773b59aca6572c3cc246f77f1f5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
