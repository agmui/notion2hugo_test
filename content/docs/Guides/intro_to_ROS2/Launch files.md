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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G6W6ISZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZd%2FjFdI%2Fte0Pb4N%2BDgyeSHAMPO4gVyyHMdPa7Qc8eoAIgKTUOKok0YXuWgiOrmaWIVFWybeiUs4fvphn2tiG4Q2QqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0%2FPaKP1K76J1LtoCrcA9fcTZEto80q0ng%2Bh7CSHwUcPdCb8WN7TkPsZk00dMJII1TwQl5K%2BCUBuZdqPwnw%2BoKank8YtTbW2nnB1qoIDf%2FC8jZUGAHLy6QpK4nQNsoctMdfrpkLVFP5SJR1AEG6N5lzJq6Ar%2FTA3MiGg6hB80%2FNnyIN7WbXiuTrnLPo%2B1mFmgOxP9v5LvTVxGH8pWkpKKOJS%2F7cWBfdzSw1Sk0Ukxb5MfUZUUmPOEErhB6LjkKYRKVPd%2FdAg9VOpgdD3eI%2FlbGSnBzrEfrfS46PuvDww293ezFPSbN8naiR6DCIF5%2FBhSMxhKw3Zv1bfadr2cNkiyKJ%2FtmzGjHAcj3TJQw3w%2BkUBMNsU%2B3OBU0vlNS2kyfmFvpj0Avbhs0CF%2B8HZ95%2BSOaVVdzoB0bjVxLUPm3eqcIY%2BRJlUkhp7iZJ1Bfr1djs5eB%2FpywokJyBMspcSsI2X8AZgHp5Or2v%2BevghDktF%2BvDTRXUL5EF%2BLVD5fP5nArq4htDn4O4m5H7ktL9HmXjxIkd4F8qn0w7JkAoEPE5Vm5RoO%2BcF1YBvBXyn2GnjFNIeIBr03Ga9BA6wolm7G%2BbWCVzHAurkk476w5jnHELmmkSe0ll11oDWaqgaY7y3%2BY1ebCYWn%2FK4TxVHuESMOjX270GOqUBsjNcXOppcf9ExsAWJiioVQIeBkOciehVlS6O5BZXJIMEec873%2BtQaWlh8YLwZR%2FPYoV2VfeTSv3B9EDGD6KV4XwA2O8gSci3s9yttZi5SEkp1gpRFgfej4fAFLdT88TdUr9wtIngiRJ%2BDwwRJLX8%2Bip8dEcfKqbV2QXRlM7OesEg4HY0faCD1T0dmK0GBJoefvrlDQJi3gEeN554wpKmsCbcHprI&X-Amz-Signature=690791c465cf2bd19c6dbd9a9cc2914cb765a0510a1d78efc6f8c7493dc4f611&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G6W6ISZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZd%2FjFdI%2Fte0Pb4N%2BDgyeSHAMPO4gVyyHMdPa7Qc8eoAIgKTUOKok0YXuWgiOrmaWIVFWybeiUs4fvphn2tiG4Q2QqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0%2FPaKP1K76J1LtoCrcA9fcTZEto80q0ng%2Bh7CSHwUcPdCb8WN7TkPsZk00dMJII1TwQl5K%2BCUBuZdqPwnw%2BoKank8YtTbW2nnB1qoIDf%2FC8jZUGAHLy6QpK4nQNsoctMdfrpkLVFP5SJR1AEG6N5lzJq6Ar%2FTA3MiGg6hB80%2FNnyIN7WbXiuTrnLPo%2B1mFmgOxP9v5LvTVxGH8pWkpKKOJS%2F7cWBfdzSw1Sk0Ukxb5MfUZUUmPOEErhB6LjkKYRKVPd%2FdAg9VOpgdD3eI%2FlbGSnBzrEfrfS46PuvDww293ezFPSbN8naiR6DCIF5%2FBhSMxhKw3Zv1bfadr2cNkiyKJ%2FtmzGjHAcj3TJQw3w%2BkUBMNsU%2B3OBU0vlNS2kyfmFvpj0Avbhs0CF%2B8HZ95%2BSOaVVdzoB0bjVxLUPm3eqcIY%2BRJlUkhp7iZJ1Bfr1djs5eB%2FpywokJyBMspcSsI2X8AZgHp5Or2v%2BevghDktF%2BvDTRXUL5EF%2BLVD5fP5nArq4htDn4O4m5H7ktL9HmXjxIkd4F8qn0w7JkAoEPE5Vm5RoO%2BcF1YBvBXyn2GnjFNIeIBr03Ga9BA6wolm7G%2BbWCVzHAurkk476w5jnHELmmkSe0ll11oDWaqgaY7y3%2BY1ebCYWn%2FK4TxVHuESMOjX270GOqUBsjNcXOppcf9ExsAWJiioVQIeBkOciehVlS6O5BZXJIMEec873%2BtQaWlh8YLwZR%2FPYoV2VfeTSv3B9EDGD6KV4XwA2O8gSci3s9yttZi5SEkp1gpRFgfej4fAFLdT88TdUr9wtIngiRJ%2BDwwRJLX8%2Bip8dEcfKqbV2QXRlM7OesEg4HY0faCD1T0dmK0GBJoefvrlDQJi3gEeN554wpKmsCbcHprI&X-Amz-Signature=056332fe5c8154ce94ac575d6e7797ccdb4c5a7c78b3559677fc57ca931dcbc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G6W6ISZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZd%2FjFdI%2Fte0Pb4N%2BDgyeSHAMPO4gVyyHMdPa7Qc8eoAIgKTUOKok0YXuWgiOrmaWIVFWybeiUs4fvphn2tiG4Q2QqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0%2FPaKP1K76J1LtoCrcA9fcTZEto80q0ng%2Bh7CSHwUcPdCb8WN7TkPsZk00dMJII1TwQl5K%2BCUBuZdqPwnw%2BoKank8YtTbW2nnB1qoIDf%2FC8jZUGAHLy6QpK4nQNsoctMdfrpkLVFP5SJR1AEG6N5lzJq6Ar%2FTA3MiGg6hB80%2FNnyIN7WbXiuTrnLPo%2B1mFmgOxP9v5LvTVxGH8pWkpKKOJS%2F7cWBfdzSw1Sk0Ukxb5MfUZUUmPOEErhB6LjkKYRKVPd%2FdAg9VOpgdD3eI%2FlbGSnBzrEfrfS46PuvDww293ezFPSbN8naiR6DCIF5%2FBhSMxhKw3Zv1bfadr2cNkiyKJ%2FtmzGjHAcj3TJQw3w%2BkUBMNsU%2B3OBU0vlNS2kyfmFvpj0Avbhs0CF%2B8HZ95%2BSOaVVdzoB0bjVxLUPm3eqcIY%2BRJlUkhp7iZJ1Bfr1djs5eB%2FpywokJyBMspcSsI2X8AZgHp5Or2v%2BevghDktF%2BvDTRXUL5EF%2BLVD5fP5nArq4htDn4O4m5H7ktL9HmXjxIkd4F8qn0w7JkAoEPE5Vm5RoO%2BcF1YBvBXyn2GnjFNIeIBr03Ga9BA6wolm7G%2BbWCVzHAurkk476w5jnHELmmkSe0ll11oDWaqgaY7y3%2BY1ebCYWn%2FK4TxVHuESMOjX270GOqUBsjNcXOppcf9ExsAWJiioVQIeBkOciehVlS6O5BZXJIMEec873%2BtQaWlh8YLwZR%2FPYoV2VfeTSv3B9EDGD6KV4XwA2O8gSci3s9yttZi5SEkp1gpRFgfej4fAFLdT88TdUr9wtIngiRJ%2BDwwRJLX8%2Bip8dEcfKqbV2QXRlM7OesEg4HY0faCD1T0dmK0GBJoefvrlDQJi3gEeN554wpKmsCbcHprI&X-Amz-Signature=62156db0258508588321fa8d8b4cea913ebfd8dd90568d1ab0338e46ce77b925&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
