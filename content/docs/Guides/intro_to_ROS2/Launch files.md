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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJLJAGY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCjTFsqxi4HMB2yUEXJpzMgK7akF0HVAbLetwjajyBqWgIgB4CbJCYEmnNkWhgbif2ItaFIedLAcILXriqPqyRc5KcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCphDFbPxC3OpGoYaircA88ytih8xuQabu0MC3Mlp252n1Scn8lissCwWqoo3f5oeWj9EipDBkYzQ4VZupF7POSwCSn1iF0%2BvljLSMJ3h2OH98Jl3FUAvMBqI05u41SIbKQB%2FneihGzhBCzrsrDbm8oRoR0WvLA%2Bq9P7cH%2FD%2FXYB4vXp7VJgiT8JLe1Ns0wh6qgaH3pSORp7yXUMT%2F1Y8qmZ00exgDv6HV91VYqz2U4e%2BTHIlpYQ5u30B0a5mNkbZQW0Ty%2FpneJxogFppzRANCtcEAgBwswdW1TOt6xDm9YN14SDn5foeS7rs4WZHtNcP1wBXpyaXUT5pjVAcmAgCz3ZfZul7T5VbwulphDi%2F%2B1I2IinWIMIp8SCcLlqzFPTAevM4BDSt%2FMJw%2Flh67ihCTBHsFDyJxIJaC8d4gr3lDOSpGyyNikDR8GQeuWDcIaTB2bRKbRNO1hkwd09Ixd508LJXBmz%2FZEDq2K6j35jG3Trq5dQI816LXHfGis11riO0nn8dIVng1AUrr262%2B4W1iK4hCmWGkdA3Vh6%2Fcf3mNmMNImOa51ScVsBhnvhepHK%2FNDStVGGMXjnbkU4%2FJXEFn0HKd1cgjCMoAR3eNEsOtmXnZOz3QZcbWyE5AX%2B7xZoVkR2xxvKkbA9yp8XMNzYtr8GOqUBT5FRpjFuwAK54vAFQ0GW6FsHWBlbzQL%2FXTFQXTxC2Krxj87P63qbSN8l1PwWNUPKMgq%2F8lnuB85muwd0z6wEFmfA8ggA06EFZ3HzEeR4pJKclyMlxy%2FhjFE62LuOaY0GW%2BaWqDGxwop%2B8fITXsmoJCqF3L63FPtH%2BLNLwygXyy%2FbMTPMICS%2FQnXtfJPKyhsq6CwIjGmS2mDJ3bxje6uxDbCG88is&X-Amz-Signature=f9a0cc1425845c7a82cf1d95e337fe0be374c63668c907d5a896b919d25edf97&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJLJAGY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCjTFsqxi4HMB2yUEXJpzMgK7akF0HVAbLetwjajyBqWgIgB4CbJCYEmnNkWhgbif2ItaFIedLAcILXriqPqyRc5KcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCphDFbPxC3OpGoYaircA88ytih8xuQabu0MC3Mlp252n1Scn8lissCwWqoo3f5oeWj9EipDBkYzQ4VZupF7POSwCSn1iF0%2BvljLSMJ3h2OH98Jl3FUAvMBqI05u41SIbKQB%2FneihGzhBCzrsrDbm8oRoR0WvLA%2Bq9P7cH%2FD%2FXYB4vXp7VJgiT8JLe1Ns0wh6qgaH3pSORp7yXUMT%2F1Y8qmZ00exgDv6HV91VYqz2U4e%2BTHIlpYQ5u30B0a5mNkbZQW0Ty%2FpneJxogFppzRANCtcEAgBwswdW1TOt6xDm9YN14SDn5foeS7rs4WZHtNcP1wBXpyaXUT5pjVAcmAgCz3ZfZul7T5VbwulphDi%2F%2B1I2IinWIMIp8SCcLlqzFPTAevM4BDSt%2FMJw%2Flh67ihCTBHsFDyJxIJaC8d4gr3lDOSpGyyNikDR8GQeuWDcIaTB2bRKbRNO1hkwd09Ixd508LJXBmz%2FZEDq2K6j35jG3Trq5dQI816LXHfGis11riO0nn8dIVng1AUrr262%2B4W1iK4hCmWGkdA3Vh6%2Fcf3mNmMNImOa51ScVsBhnvhepHK%2FNDStVGGMXjnbkU4%2FJXEFn0HKd1cgjCMoAR3eNEsOtmXnZOz3QZcbWyE5AX%2B7xZoVkR2xxvKkbA9yp8XMNzYtr8GOqUBT5FRpjFuwAK54vAFQ0GW6FsHWBlbzQL%2FXTFQXTxC2Krxj87P63qbSN8l1PwWNUPKMgq%2F8lnuB85muwd0z6wEFmfA8ggA06EFZ3HzEeR4pJKclyMlxy%2FhjFE62LuOaY0GW%2BaWqDGxwop%2B8fITXsmoJCqF3L63FPtH%2BLNLwygXyy%2FbMTPMICS%2FQnXtfJPKyhsq6CwIjGmS2mDJ3bxje6uxDbCG88is&X-Amz-Signature=60c56f2a6d3f8ffad1eb509fe8caab6c8287afdc67da23b715184ab5c9dbf045&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJLJAGY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCjTFsqxi4HMB2yUEXJpzMgK7akF0HVAbLetwjajyBqWgIgB4CbJCYEmnNkWhgbif2ItaFIedLAcILXriqPqyRc5KcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCphDFbPxC3OpGoYaircA88ytih8xuQabu0MC3Mlp252n1Scn8lissCwWqoo3f5oeWj9EipDBkYzQ4VZupF7POSwCSn1iF0%2BvljLSMJ3h2OH98Jl3FUAvMBqI05u41SIbKQB%2FneihGzhBCzrsrDbm8oRoR0WvLA%2Bq9P7cH%2FD%2FXYB4vXp7VJgiT8JLe1Ns0wh6qgaH3pSORp7yXUMT%2F1Y8qmZ00exgDv6HV91VYqz2U4e%2BTHIlpYQ5u30B0a5mNkbZQW0Ty%2FpneJxogFppzRANCtcEAgBwswdW1TOt6xDm9YN14SDn5foeS7rs4WZHtNcP1wBXpyaXUT5pjVAcmAgCz3ZfZul7T5VbwulphDi%2F%2B1I2IinWIMIp8SCcLlqzFPTAevM4BDSt%2FMJw%2Flh67ihCTBHsFDyJxIJaC8d4gr3lDOSpGyyNikDR8GQeuWDcIaTB2bRKbRNO1hkwd09Ixd508LJXBmz%2FZEDq2K6j35jG3Trq5dQI816LXHfGis11riO0nn8dIVng1AUrr262%2B4W1iK4hCmWGkdA3Vh6%2Fcf3mNmMNImOa51ScVsBhnvhepHK%2FNDStVGGMXjnbkU4%2FJXEFn0HKd1cgjCMoAR3eNEsOtmXnZOz3QZcbWyE5AX%2B7xZoVkR2xxvKkbA9yp8XMNzYtr8GOqUBT5FRpjFuwAK54vAFQ0GW6FsHWBlbzQL%2FXTFQXTxC2Krxj87P63qbSN8l1PwWNUPKMgq%2F8lnuB85muwd0z6wEFmfA8ggA06EFZ3HzEeR4pJKclyMlxy%2FhjFE62LuOaY0GW%2BaWqDGxwop%2B8fITXsmoJCqF3L63FPtH%2BLNLwygXyy%2FbMTPMICS%2FQnXtfJPKyhsq6CwIjGmS2mDJ3bxje6uxDbCG88is&X-Amz-Signature=14c0241091d0a9a5490cdfd5b11395fcfdb7f7299977a1515765c866b215a567&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
