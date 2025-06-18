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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6QEWHY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGfK%2BxSvxjEfl3q5zGwa5fTnXxgo2zhcFuj6Wnsv7NLAiEAvTpW9Qy%2FNlYZlkkc0LfrNPj6JqMV1tKNIn3IzSqKWRwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz7RdaasTj%2FClWFWircA1xlDTY1RRDBXgJXLoaFDngElOV45s78%2FEwwQtol5v8p42caMgvuarR6jNcmKSRv99zhB7SWRDOn9Yi1RuDdKsy3RUeNQYgCu3YP%2FrbnJVwGdtqkWLvHYg%2FwfQmqIGBO2s5tj7UGcfXBAiFFil7J20V8niiZ%2B7PKwiNt4tSLpR1%2FvpF0Mc%2F4UhzFY2BDgFXNoZRrsPWzdpap9aIhcygUfjXH7FJg%2Fab0TSVU00W7b1wM2WC7J6K5r15skyg5imJ1SblBDWdVMDIyIzk3GPG%2BNaCOvyD1rz%2F8GqkPE2r%2Ff1MePgieCwPTxx5Bum5%2FqJgshXY%2BS3%2BtmRlApeR1RG1J4tz%2BdGaN8d%2FP2rkE2OsYH72fkk48wZvqLdGcyJVweSbTI1sG51iRdednhxIxrfZngB1E6JGbzCBd1tfA6QsJFH2bB8tEHz9SFFDZwcew6FnSpy9VswA0Dw4%2BKY8vZjZerG8XhZ%2FvuovQC6RemD3bTEJjhjORZUxrzwjFwthAuRjWuKxmNDEuCLfyZa3c%2BUw1xZH8u8SjgvEn%2BRxGf2h%2Bh463oDwFE7CY9utfeM%2FLt2DNIgQjjbmgGMxGxIDEpqFhE72ruwfmvjC4totkchTKz8xhy2akKyrXND7uRqLDMKyjycIGOqUBdRUkcFrCp8bJX9cHm1BgkgQoulYK8Ak19c2AU0WmkEojB%2B4F8mCKPFXUGX8fKQ90L7kBPdUVS6tNclqmbapaVTao9lbvJWwlPYNf3SKw4HCRfVAfGeycB5Vy8obN%2BPtKKPUNtRFKCA3iSiySftZqdzT7Vf8TFQxsN8MRGYTMgvkHKVxUuesEiaaM38CLJTmH3E6qZAK16CbRUMWxpbrWI1oplYMy&X-Amz-Signature=174f178ec2a1ce5bb85cc828083b6af1c4ee6b625d50d3413fc26d6934ef5b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6QEWHY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGfK%2BxSvxjEfl3q5zGwa5fTnXxgo2zhcFuj6Wnsv7NLAiEAvTpW9Qy%2FNlYZlkkc0LfrNPj6JqMV1tKNIn3IzSqKWRwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz7RdaasTj%2FClWFWircA1xlDTY1RRDBXgJXLoaFDngElOV45s78%2FEwwQtol5v8p42caMgvuarR6jNcmKSRv99zhB7SWRDOn9Yi1RuDdKsy3RUeNQYgCu3YP%2FrbnJVwGdtqkWLvHYg%2FwfQmqIGBO2s5tj7UGcfXBAiFFil7J20V8niiZ%2B7PKwiNt4tSLpR1%2FvpF0Mc%2F4UhzFY2BDgFXNoZRrsPWzdpap9aIhcygUfjXH7FJg%2Fab0TSVU00W7b1wM2WC7J6K5r15skyg5imJ1SblBDWdVMDIyIzk3GPG%2BNaCOvyD1rz%2F8GqkPE2r%2Ff1MePgieCwPTxx5Bum5%2FqJgshXY%2BS3%2BtmRlApeR1RG1J4tz%2BdGaN8d%2FP2rkE2OsYH72fkk48wZvqLdGcyJVweSbTI1sG51iRdednhxIxrfZngB1E6JGbzCBd1tfA6QsJFH2bB8tEHz9SFFDZwcew6FnSpy9VswA0Dw4%2BKY8vZjZerG8XhZ%2FvuovQC6RemD3bTEJjhjORZUxrzwjFwthAuRjWuKxmNDEuCLfyZa3c%2BUw1xZH8u8SjgvEn%2BRxGf2h%2Bh463oDwFE7CY9utfeM%2FLt2DNIgQjjbmgGMxGxIDEpqFhE72ruwfmvjC4totkchTKz8xhy2akKyrXND7uRqLDMKyjycIGOqUBdRUkcFrCp8bJX9cHm1BgkgQoulYK8Ak19c2AU0WmkEojB%2B4F8mCKPFXUGX8fKQ90L7kBPdUVS6tNclqmbapaVTao9lbvJWwlPYNf3SKw4HCRfVAfGeycB5Vy8obN%2BPtKKPUNtRFKCA3iSiySftZqdzT7Vf8TFQxsN8MRGYTMgvkHKVxUuesEiaaM38CLJTmH3E6qZAK16CbRUMWxpbrWI1oplYMy&X-Amz-Signature=c60b6e059f11b34b39c597ab4bc29ab73c9f3da3d5f1bb944fc4f747cb9ecd49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6QEWHY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGfK%2BxSvxjEfl3q5zGwa5fTnXxgo2zhcFuj6Wnsv7NLAiEAvTpW9Qy%2FNlYZlkkc0LfrNPj6JqMV1tKNIn3IzSqKWRwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz7RdaasTj%2FClWFWircA1xlDTY1RRDBXgJXLoaFDngElOV45s78%2FEwwQtol5v8p42caMgvuarR6jNcmKSRv99zhB7SWRDOn9Yi1RuDdKsy3RUeNQYgCu3YP%2FrbnJVwGdtqkWLvHYg%2FwfQmqIGBO2s5tj7UGcfXBAiFFil7J20V8niiZ%2B7PKwiNt4tSLpR1%2FvpF0Mc%2F4UhzFY2BDgFXNoZRrsPWzdpap9aIhcygUfjXH7FJg%2Fab0TSVU00W7b1wM2WC7J6K5r15skyg5imJ1SblBDWdVMDIyIzk3GPG%2BNaCOvyD1rz%2F8GqkPE2r%2Ff1MePgieCwPTxx5Bum5%2FqJgshXY%2BS3%2BtmRlApeR1RG1J4tz%2BdGaN8d%2FP2rkE2OsYH72fkk48wZvqLdGcyJVweSbTI1sG51iRdednhxIxrfZngB1E6JGbzCBd1tfA6QsJFH2bB8tEHz9SFFDZwcew6FnSpy9VswA0Dw4%2BKY8vZjZerG8XhZ%2FvuovQC6RemD3bTEJjhjORZUxrzwjFwthAuRjWuKxmNDEuCLfyZa3c%2BUw1xZH8u8SjgvEn%2BRxGf2h%2Bh463oDwFE7CY9utfeM%2FLt2DNIgQjjbmgGMxGxIDEpqFhE72ruwfmvjC4totkchTKz8xhy2akKyrXND7uRqLDMKyjycIGOqUBdRUkcFrCp8bJX9cHm1BgkgQoulYK8Ak19c2AU0WmkEojB%2B4F8mCKPFXUGX8fKQ90L7kBPdUVS6tNclqmbapaVTao9lbvJWwlPYNf3SKw4HCRfVAfGeycB5Vy8obN%2BPtKKPUNtRFKCA3iSiySftZqdzT7Vf8TFQxsN8MRGYTMgvkHKVxUuesEiaaM38CLJTmH3E6qZAK16CbRUMWxpbrWI1oplYMy&X-Amz-Signature=ed2eb4b97173a435c87cc8c319806b5bbd1800a2dc01e3065967792fe9790c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
