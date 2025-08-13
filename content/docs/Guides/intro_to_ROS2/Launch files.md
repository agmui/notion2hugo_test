---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5Z2C5C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPaO4NRLTd0NOlkLZB687d0xM%2B%2FF21nmFOLSd120EZwAiEA4np5zigNeK5xKZtZWyd24hntF0Ia9itk8YSHxRw2Lb0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLiZaiB25ZJty%2F5tircAxNb%2B9RULdlfGaTSd6zVwM94ZRui4t0FypDbkHDzyUF%2Fh5UKNXNn7VHQ%2F9dWydP51BOQ6D4IerL%2F00V3tp0D2HkRsgBceRPbEXrXGl%2BHXVVShSRGh3seH%2BKcPluk6Pzbiszp97Xdf2Wile8SJXe6WoMo23GG3yo5ClBJt015U1S3yyq69gpz6zJGtlwQALsyEFM3zoif4JGAHNBRK6viaBZWYliiY4upT2k%2Fua3iytBn0M8bXpseIdEbCBvf%2Fl9Qyw2E%2FG3s5k3x9MMg2wmi3Op5clC6mg9dszROOIIOJW6PWQ%2FyFULdJsrFO9flR536rK9RCzXVk6RWPVJfhhQY8BKZkN12X3u%2F2%2FBC0Z3LQiokmAMDwJoLCA4Qwp89MAc%2FzlVjYIH6L2WuoTvD0CtpLn3bj4IAfCuP1nbmTdahNKJWAL4matS%2ByhOFo02zqcTC0e%2FhBUNphjlz8C54%2BCQCuONi8ff7F7eKReAmOCwaeolfzsPtiDy5t17QbZvRFrW2X0ifUW2R6lVsautE3kZd8KplOU6kUR8Qlln00nVskpLJHA2cn8KIbP1E45yCchCoiB06Eccq6iX6PABEfddCNg9pumLKB7u7CM6wJL0BzqIEt9XKYiWDShva8PlHML%2FF88QGOqUB31Xtn2juvwqZ6Bn4tkHxRriWFvmcSGVvKle9QxIliPYYdhv5DRcFsz7u0p8kX7CSe9tmI3kgj1IbjRuTVCHjtxkGx7lH1Fxfn4ujc6ZLKeUpnfl2xL4qKzPuNusAkoX5BRN5vSgQ%2B%2F9sH2IqK5FAUY2yJyUhzVguMFEJKe7qSyw6YsaLZqb%2FUtez%2FxKvedy6uJbMDtHAviUDtKMN36zg7tbvdPa8&X-Amz-Signature=75c2aef46201f2e9026b74a384bdf40f62a45243bc402396a4405c312b6c1494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5Z2C5C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPaO4NRLTd0NOlkLZB687d0xM%2B%2FF21nmFOLSd120EZwAiEA4np5zigNeK5xKZtZWyd24hntF0Ia9itk8YSHxRw2Lb0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLiZaiB25ZJty%2F5tircAxNb%2B9RULdlfGaTSd6zVwM94ZRui4t0FypDbkHDzyUF%2Fh5UKNXNn7VHQ%2F9dWydP51BOQ6D4IerL%2F00V3tp0D2HkRsgBceRPbEXrXGl%2BHXVVShSRGh3seH%2BKcPluk6Pzbiszp97Xdf2Wile8SJXe6WoMo23GG3yo5ClBJt015U1S3yyq69gpz6zJGtlwQALsyEFM3zoif4JGAHNBRK6viaBZWYliiY4upT2k%2Fua3iytBn0M8bXpseIdEbCBvf%2Fl9Qyw2E%2FG3s5k3x9MMg2wmi3Op5clC6mg9dszROOIIOJW6PWQ%2FyFULdJsrFO9flR536rK9RCzXVk6RWPVJfhhQY8BKZkN12X3u%2F2%2FBC0Z3LQiokmAMDwJoLCA4Qwp89MAc%2FzlVjYIH6L2WuoTvD0CtpLn3bj4IAfCuP1nbmTdahNKJWAL4matS%2ByhOFo02zqcTC0e%2FhBUNphjlz8C54%2BCQCuONi8ff7F7eKReAmOCwaeolfzsPtiDy5t17QbZvRFrW2X0ifUW2R6lVsautE3kZd8KplOU6kUR8Qlln00nVskpLJHA2cn8KIbP1E45yCchCoiB06Eccq6iX6PABEfddCNg9pumLKB7u7CM6wJL0BzqIEt9XKYiWDShva8PlHML%2FF88QGOqUB31Xtn2juvwqZ6Bn4tkHxRriWFvmcSGVvKle9QxIliPYYdhv5DRcFsz7u0p8kX7CSe9tmI3kgj1IbjRuTVCHjtxkGx7lH1Fxfn4ujc6ZLKeUpnfl2xL4qKzPuNusAkoX5BRN5vSgQ%2B%2F9sH2IqK5FAUY2yJyUhzVguMFEJKe7qSyw6YsaLZqb%2FUtez%2FxKvedy6uJbMDtHAviUDtKMN36zg7tbvdPa8&X-Amz-Signature=135b9a1fc51ab334f46645272b03d1de0b88a4a8390635a020b5fae57844220e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5Z2C5C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPaO4NRLTd0NOlkLZB687d0xM%2B%2FF21nmFOLSd120EZwAiEA4np5zigNeK5xKZtZWyd24hntF0Ia9itk8YSHxRw2Lb0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLiZaiB25ZJty%2F5tircAxNb%2B9RULdlfGaTSd6zVwM94ZRui4t0FypDbkHDzyUF%2Fh5UKNXNn7VHQ%2F9dWydP51BOQ6D4IerL%2F00V3tp0D2HkRsgBceRPbEXrXGl%2BHXVVShSRGh3seH%2BKcPluk6Pzbiszp97Xdf2Wile8SJXe6WoMo23GG3yo5ClBJt015U1S3yyq69gpz6zJGtlwQALsyEFM3zoif4JGAHNBRK6viaBZWYliiY4upT2k%2Fua3iytBn0M8bXpseIdEbCBvf%2Fl9Qyw2E%2FG3s5k3x9MMg2wmi3Op5clC6mg9dszROOIIOJW6PWQ%2FyFULdJsrFO9flR536rK9RCzXVk6RWPVJfhhQY8BKZkN12X3u%2F2%2FBC0Z3LQiokmAMDwJoLCA4Qwp89MAc%2FzlVjYIH6L2WuoTvD0CtpLn3bj4IAfCuP1nbmTdahNKJWAL4matS%2ByhOFo02zqcTC0e%2FhBUNphjlz8C54%2BCQCuONi8ff7F7eKReAmOCwaeolfzsPtiDy5t17QbZvRFrW2X0ifUW2R6lVsautE3kZd8KplOU6kUR8Qlln00nVskpLJHA2cn8KIbP1E45yCchCoiB06Eccq6iX6PABEfddCNg9pumLKB7u7CM6wJL0BzqIEt9XKYiWDShva8PlHML%2FF88QGOqUB31Xtn2juvwqZ6Bn4tkHxRriWFvmcSGVvKle9QxIliPYYdhv5DRcFsz7u0p8kX7CSe9tmI3kgj1IbjRuTVCHjtxkGx7lH1Fxfn4ujc6ZLKeUpnfl2xL4qKzPuNusAkoX5BRN5vSgQ%2B%2F9sH2IqK5FAUY2yJyUhzVguMFEJKe7qSyw6YsaLZqb%2FUtez%2FxKvedy6uJbMDtHAviUDtKMN36zg7tbvdPa8&X-Amz-Signature=b26601d6cc2e8de3d5d3be27dce15f92889c4c58682f381f7171f88b3d4790d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
