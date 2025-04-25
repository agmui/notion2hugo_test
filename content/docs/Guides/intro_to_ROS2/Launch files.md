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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L64MQZA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0QcpfJX33HuiyjQoyAarPee1p2n4PSJRGl9Q5FCHmMAiEA690uFFlq7tr%2Fkuf%2BIKGjZ1C1yZ0vCNiyWDbz3Cdq1Ecq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFE9l8YlO8WTnxme%2FCrcAwxxAUZV56ksVbydnlH%2BIASVzklnwr6TlDB7hykGhFEJdXNMO3YKS9AeAJqfqpFx%2BDTT0aAaA5P2srf10XuNoHCXgwL0D6DPLIIl9zjfaSPP33K1rcuB%2FWLyx0PG2ma2NYH4Q6OWVV2SIfAycy57Z2S6yWCFo4GDlwjuz1LtT1T0AUQrZfK2nMBUCplvMk3xPW%2FsaQuzkTm%2FZV43rR3xz9Mxn6YJY2t12u%2BwPp3K1UNtUkjhLhrLm9OJ11TV8616KVGTsn2TcP7OuzdfR6l0%2Bws5oOJ7rMAT5aa6t%2FX8Lc7%2BclBb7VQWns5Nu%2BnE4lA6HcSgNFcGdt5%2ByUWupepULc8jHLSTf%2FYshRcSu5nOkZ6vw9MzkpUI%2BSorCsN5MMqui3FkxPApiDYNLvtWPc%2BmsljGDtnM%2Fq%2BUfiDeVcR9KCZI7Bl7k61enxwBEWErGndSYyDxyOF%2FvfHl3blZdm5Lk942BeWvxv5GM41XWuZi45jDTJCUBHU3RIUrWOvZ8Hcr5iftKCb5A%2B1nKb42bwXWcNNTNH%2BCwwpd45OrFz5rICFliJjM%2FNVVhwp4EuRqlCAVfVJ896PetD%2FmZ%2Fwvn1X%2BkZjpoMlIWrz5Fz4IpMmWfa251xny9vQvymxPl2y1MIbSr8AGOqUBibL5RX0aL0ltacwWfPhx3kD43hhxZpNeHtn4A35cFIY2hM2RiJS8l2NgpZS37pd8%2F0YJ%2Bhk3i6BidvxDP2%2BqyQeyc1ZVk6TJocXvfSzwFhRr3Kf7uBiS%2BrYH7WIvXJfxdbOkwCVbE9VDCOivUuOIiSgAWFjlttgI9m%2FdIQ0nNcuHSF4hjnFVINEgvmHI4tCzHaltyjNtnHxGkn5eZSJ9s60h0mWm&X-Amz-Signature=e1cae0909679ff2993cf8091e084446d4989d541fe0c96d9b229ceb258afee78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L64MQZA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0QcpfJX33HuiyjQoyAarPee1p2n4PSJRGl9Q5FCHmMAiEA690uFFlq7tr%2Fkuf%2BIKGjZ1C1yZ0vCNiyWDbz3Cdq1Ecq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFE9l8YlO8WTnxme%2FCrcAwxxAUZV56ksVbydnlH%2BIASVzklnwr6TlDB7hykGhFEJdXNMO3YKS9AeAJqfqpFx%2BDTT0aAaA5P2srf10XuNoHCXgwL0D6DPLIIl9zjfaSPP33K1rcuB%2FWLyx0PG2ma2NYH4Q6OWVV2SIfAycy57Z2S6yWCFo4GDlwjuz1LtT1T0AUQrZfK2nMBUCplvMk3xPW%2FsaQuzkTm%2FZV43rR3xz9Mxn6YJY2t12u%2BwPp3K1UNtUkjhLhrLm9OJ11TV8616KVGTsn2TcP7OuzdfR6l0%2Bws5oOJ7rMAT5aa6t%2FX8Lc7%2BclBb7VQWns5Nu%2BnE4lA6HcSgNFcGdt5%2ByUWupepULc8jHLSTf%2FYshRcSu5nOkZ6vw9MzkpUI%2BSorCsN5MMqui3FkxPApiDYNLvtWPc%2BmsljGDtnM%2Fq%2BUfiDeVcR9KCZI7Bl7k61enxwBEWErGndSYyDxyOF%2FvfHl3blZdm5Lk942BeWvxv5GM41XWuZi45jDTJCUBHU3RIUrWOvZ8Hcr5iftKCb5A%2B1nKb42bwXWcNNTNH%2BCwwpd45OrFz5rICFliJjM%2FNVVhwp4EuRqlCAVfVJ896PetD%2FmZ%2Fwvn1X%2BkZjpoMlIWrz5Fz4IpMmWfa251xny9vQvymxPl2y1MIbSr8AGOqUBibL5RX0aL0ltacwWfPhx3kD43hhxZpNeHtn4A35cFIY2hM2RiJS8l2NgpZS37pd8%2F0YJ%2Bhk3i6BidvxDP2%2BqyQeyc1ZVk6TJocXvfSzwFhRr3Kf7uBiS%2BrYH7WIvXJfxdbOkwCVbE9VDCOivUuOIiSgAWFjlttgI9m%2FdIQ0nNcuHSF4hjnFVINEgvmHI4tCzHaltyjNtnHxGkn5eZSJ9s60h0mWm&X-Amz-Signature=bda62345df66ac59afca51250f00fcdb5827ba84b3c69eafc9054908b250fe9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L64MQZA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0QcpfJX33HuiyjQoyAarPee1p2n4PSJRGl9Q5FCHmMAiEA690uFFlq7tr%2Fkuf%2BIKGjZ1C1yZ0vCNiyWDbz3Cdq1Ecq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFE9l8YlO8WTnxme%2FCrcAwxxAUZV56ksVbydnlH%2BIASVzklnwr6TlDB7hykGhFEJdXNMO3YKS9AeAJqfqpFx%2BDTT0aAaA5P2srf10XuNoHCXgwL0D6DPLIIl9zjfaSPP33K1rcuB%2FWLyx0PG2ma2NYH4Q6OWVV2SIfAycy57Z2S6yWCFo4GDlwjuz1LtT1T0AUQrZfK2nMBUCplvMk3xPW%2FsaQuzkTm%2FZV43rR3xz9Mxn6YJY2t12u%2BwPp3K1UNtUkjhLhrLm9OJ11TV8616KVGTsn2TcP7OuzdfR6l0%2Bws5oOJ7rMAT5aa6t%2FX8Lc7%2BclBb7VQWns5Nu%2BnE4lA6HcSgNFcGdt5%2ByUWupepULc8jHLSTf%2FYshRcSu5nOkZ6vw9MzkpUI%2BSorCsN5MMqui3FkxPApiDYNLvtWPc%2BmsljGDtnM%2Fq%2BUfiDeVcR9KCZI7Bl7k61enxwBEWErGndSYyDxyOF%2FvfHl3blZdm5Lk942BeWvxv5GM41XWuZi45jDTJCUBHU3RIUrWOvZ8Hcr5iftKCb5A%2B1nKb42bwXWcNNTNH%2BCwwpd45OrFz5rICFliJjM%2FNVVhwp4EuRqlCAVfVJ896PetD%2FmZ%2Fwvn1X%2BkZjpoMlIWrz5Fz4IpMmWfa251xny9vQvymxPl2y1MIbSr8AGOqUBibL5RX0aL0ltacwWfPhx3kD43hhxZpNeHtn4A35cFIY2hM2RiJS8l2NgpZS37pd8%2F0YJ%2Bhk3i6BidvxDP2%2BqyQeyc1ZVk6TJocXvfSzwFhRr3Kf7uBiS%2BrYH7WIvXJfxdbOkwCVbE9VDCOivUuOIiSgAWFjlttgI9m%2FdIQ0nNcuHSF4hjnFVINEgvmHI4tCzHaltyjNtnHxGkn5eZSJ9s60h0mWm&X-Amz-Signature=28508130fb10fef2d8c6a526596a3ac4902c7b440638f008fb8db6048c9f75ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
