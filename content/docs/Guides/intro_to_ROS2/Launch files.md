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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSREIF5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2F5A7E%2F6ZNkq8bOG72wO9w26M2u87mnMPq3iJYC5fCAIgNvKOz4quU3G6besBVftMFUDQguqA42s%2BjRKV2bK4afkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bw8GfwG9JfMQd7wCrcA0VvupWsBBS26GoyC%2BBibY7ByEcMXvVPnP0RV%2Fnj1z5LC5qKGrLDgCr%2BTWkpunoHowae%2BurpXP9RAzzYfszOya2%2BlNf4SKBL1LRwpkiU0yjEKFfzSu8NR2zY55lkQ9GzLsgwo2%2BGq%2B%2BYj8ky0WDKIo80qPfuPebaVuYe6rAUwvb2V1BwCN2Um9%2Fipz8JlDRTX1MMa8psLn7m8%2Ffg7ApaZlVItu0hMum07fFMkP8K9ZiIiAfbmHABno1j1hXZLt6SymdyOBCD3IYjsEy9RnvNqgYlRLehWdShpa4VLshj7HhpT8uZ%2FT9IO6HbHa4gbVwu9VsBeDq%2BHwrUXh6Jf%2B5%2BA7u0dZMDNfqklR7sWtlqrkEwi2zSgLlRKtRiKhFDcgxePslNcvCge6MYT%2Bzup9%2BkDxh%2BaAeWIjr9eDkttsJDRzHCLl2%2FWpZTo1KM4pncz2bnP5T6rw5TK3m7qbDYbkWq2L3BHK3DdpruXjUieFIEZfGhjk5E3RnAk6IDtEF8rBc7ju1EjZXaH3duKeMC%2BMVNhsrN%2FtjEeeDWB3Aw%2FNsTinLWU%2B8SxmX6wNu4p6Soaw3v2Yyeb9o8PwQxW5vh9oYP6ELsUlLxcazXmddSJKOy3AmjxtI4498Au7%2BBM3VyMIrNwMMGOqUBha1dQ2fbk5TnxFbhRHYsMIRTxJR5MNrMlHdCtW0N5BrnUlMVXidPDTpb%2FI8mPgv0EuM4y1Yqigqsh%2BOgts8dm2MRSCf9g5ZB6RixTDmi0tmbHsqjJLt2TWYuFFT%2FRTSlp8wZzUVIpl3XL86Y4J5d%2BN3hzH%2BAKiuCLFS3b4c8wmu2K9b4WLPu5vL1LQeHY%2BJDnhO4eDnsXPr%2Bu4oA4PaYWA0zmOUq&X-Amz-Signature=7fe25079d81299dc8a136d322c974cc2533780e6102b41409a79ca062e037357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSREIF5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2F5A7E%2F6ZNkq8bOG72wO9w26M2u87mnMPq3iJYC5fCAIgNvKOz4quU3G6besBVftMFUDQguqA42s%2BjRKV2bK4afkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bw8GfwG9JfMQd7wCrcA0VvupWsBBS26GoyC%2BBibY7ByEcMXvVPnP0RV%2Fnj1z5LC5qKGrLDgCr%2BTWkpunoHowae%2BurpXP9RAzzYfszOya2%2BlNf4SKBL1LRwpkiU0yjEKFfzSu8NR2zY55lkQ9GzLsgwo2%2BGq%2B%2BYj8ky0WDKIo80qPfuPebaVuYe6rAUwvb2V1BwCN2Um9%2Fipz8JlDRTX1MMa8psLn7m8%2Ffg7ApaZlVItu0hMum07fFMkP8K9ZiIiAfbmHABno1j1hXZLt6SymdyOBCD3IYjsEy9RnvNqgYlRLehWdShpa4VLshj7HhpT8uZ%2FT9IO6HbHa4gbVwu9VsBeDq%2BHwrUXh6Jf%2B5%2BA7u0dZMDNfqklR7sWtlqrkEwi2zSgLlRKtRiKhFDcgxePslNcvCge6MYT%2Bzup9%2BkDxh%2BaAeWIjr9eDkttsJDRzHCLl2%2FWpZTo1KM4pncz2bnP5T6rw5TK3m7qbDYbkWq2L3BHK3DdpruXjUieFIEZfGhjk5E3RnAk6IDtEF8rBc7ju1EjZXaH3duKeMC%2BMVNhsrN%2FtjEeeDWB3Aw%2FNsTinLWU%2B8SxmX6wNu4p6Soaw3v2Yyeb9o8PwQxW5vh9oYP6ELsUlLxcazXmddSJKOy3AmjxtI4498Au7%2BBM3VyMIrNwMMGOqUBha1dQ2fbk5TnxFbhRHYsMIRTxJR5MNrMlHdCtW0N5BrnUlMVXidPDTpb%2FI8mPgv0EuM4y1Yqigqsh%2BOgts8dm2MRSCf9g5ZB6RixTDmi0tmbHsqjJLt2TWYuFFT%2FRTSlp8wZzUVIpl3XL86Y4J5d%2BN3hzH%2BAKiuCLFS3b4c8wmu2K9b4WLPu5vL1LQeHY%2BJDnhO4eDnsXPr%2Bu4oA4PaYWA0zmOUq&X-Amz-Signature=bb2b5b9198e0c9ad088fcd6781b0e4ef02600444d4a7c41ae9dbe08d91b255e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSREIF5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2F5A7E%2F6ZNkq8bOG72wO9w26M2u87mnMPq3iJYC5fCAIgNvKOz4quU3G6besBVftMFUDQguqA42s%2BjRKV2bK4afkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bw8GfwG9JfMQd7wCrcA0VvupWsBBS26GoyC%2BBibY7ByEcMXvVPnP0RV%2Fnj1z5LC5qKGrLDgCr%2BTWkpunoHowae%2BurpXP9RAzzYfszOya2%2BlNf4SKBL1LRwpkiU0yjEKFfzSu8NR2zY55lkQ9GzLsgwo2%2BGq%2B%2BYj8ky0WDKIo80qPfuPebaVuYe6rAUwvb2V1BwCN2Um9%2Fipz8JlDRTX1MMa8psLn7m8%2Ffg7ApaZlVItu0hMum07fFMkP8K9ZiIiAfbmHABno1j1hXZLt6SymdyOBCD3IYjsEy9RnvNqgYlRLehWdShpa4VLshj7HhpT8uZ%2FT9IO6HbHa4gbVwu9VsBeDq%2BHwrUXh6Jf%2B5%2BA7u0dZMDNfqklR7sWtlqrkEwi2zSgLlRKtRiKhFDcgxePslNcvCge6MYT%2Bzup9%2BkDxh%2BaAeWIjr9eDkttsJDRzHCLl2%2FWpZTo1KM4pncz2bnP5T6rw5TK3m7qbDYbkWq2L3BHK3DdpruXjUieFIEZfGhjk5E3RnAk6IDtEF8rBc7ju1EjZXaH3duKeMC%2BMVNhsrN%2FtjEeeDWB3Aw%2FNsTinLWU%2B8SxmX6wNu4p6Soaw3v2Yyeb9o8PwQxW5vh9oYP6ELsUlLxcazXmddSJKOy3AmjxtI4498Au7%2BBM3VyMIrNwMMGOqUBha1dQ2fbk5TnxFbhRHYsMIRTxJR5MNrMlHdCtW0N5BrnUlMVXidPDTpb%2FI8mPgv0EuM4y1Yqigqsh%2BOgts8dm2MRSCf9g5ZB6RixTDmi0tmbHsqjJLt2TWYuFFT%2FRTSlp8wZzUVIpl3XL86Y4J5d%2BN3hzH%2BAKiuCLFS3b4c8wmu2K9b4WLPu5vL1LQeHY%2BJDnhO4eDnsXPr%2Bu4oA4PaYWA0zmOUq&X-Amz-Signature=652b584dc4c1f7dbf9b1852f94ce7624d786b2145cbed92e9abcf1e9232eb0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
