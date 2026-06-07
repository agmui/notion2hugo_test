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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLT7ZX7%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJlh%2BJ9UubxCGz8btUCZ64kAAZzC5eLcOPvF56qVJoQIhAKLkXsziWMUp5DU0%2BVuDdujjbFhPHO%2FEPZo%2BS9rtMpHOKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw84lsDU%2FXecU2E2iUq3AMS1FSCt4bx2nWnIGH6ujX0OGApgU3XMoGuvmN9X7fYdG86ia43dBjgfmgB%2BisW6pV%2BpQYba7479f6hZ8118jzsjnlvF9Owfvsl%2BPKFwoaFyTuIazaTUT9fSIGvS8ufEhaXIRgjYWtkxBYNWhiWaVR11zdBMI86vAqKlkZR14t%2FyWryy8j3Wv2QYb4QUZs9427LjdQd4mn0fNjaL3w3xdDBPQYa7ZnoWPemY5Qzh31YSu3XjQ6mOIkQg6Ya9Fsb%2B6mcQj4PS%2F58BsshF7An2S3LlkU4W1XLOuFYsbkuF4yE%2F6U35IPCMad5tdXLVsTpwuT9RQl9FB%2BK%2FQvX%2BUlz8w1ORS7oGQjbz4rK2uuA97G7QagEmHwz9sBXkD3U%2BCJPFR9C%2BQM%2F%2FaHWhSQqqC7BV3CnSc5WpQiN7udAlYf1WT6L9WtGW0wHkmulVCwNCgdCEfmQCugd1WDtvnNC7pqERefrBRH%2FqI4tnhsKVq2f9ACffPFt%2FrozSpUKDmr5MsqsAIHSoXnTr%2BtkxT%2BdKda6zi3KHalZobm%2FIRyUl7hfefT76fCb4ws1iFBI%2BFBpie6VFDvLMofibt7S6bftR7b7wIychj9UDIC8gibXUkX1lUCj86Ejz8%2B2pt%2F18zWZtDCh0pPRBjqkAQQWkZG8h7IJtuGhC1k%2BHC0hII86bolV1ha6DPlMdQQrq2YZtKGd0gBN20rdEsC%2BbROBsZVtrTMy%2BKRSagnid0R4mkBBdx2pkI6MmnzP%2BRt5qNoLSLirRMWbMV6ubcmusC9SZJebgFopjBhTxOPMVIf5874y0M%2FnbuefcKdky0ihWDJuJDatQ2lMXWdRoKOBMagIF%2FNax46lqRkcrqsQpEA2%2FLrE&X-Amz-Signature=bafc78070b213ed6e7c4afd13deba05ed60d57d9dd052160bcc5a97dfabf7c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLT7ZX7%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJlh%2BJ9UubxCGz8btUCZ64kAAZzC5eLcOPvF56qVJoQIhAKLkXsziWMUp5DU0%2BVuDdujjbFhPHO%2FEPZo%2BS9rtMpHOKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw84lsDU%2FXecU2E2iUq3AMS1FSCt4bx2nWnIGH6ujX0OGApgU3XMoGuvmN9X7fYdG86ia43dBjgfmgB%2BisW6pV%2BpQYba7479f6hZ8118jzsjnlvF9Owfvsl%2BPKFwoaFyTuIazaTUT9fSIGvS8ufEhaXIRgjYWtkxBYNWhiWaVR11zdBMI86vAqKlkZR14t%2FyWryy8j3Wv2QYb4QUZs9427LjdQd4mn0fNjaL3w3xdDBPQYa7ZnoWPemY5Qzh31YSu3XjQ6mOIkQg6Ya9Fsb%2B6mcQj4PS%2F58BsshF7An2S3LlkU4W1XLOuFYsbkuF4yE%2F6U35IPCMad5tdXLVsTpwuT9RQl9FB%2BK%2FQvX%2BUlz8w1ORS7oGQjbz4rK2uuA97G7QagEmHwz9sBXkD3U%2BCJPFR9C%2BQM%2F%2FaHWhSQqqC7BV3CnSc5WpQiN7udAlYf1WT6L9WtGW0wHkmulVCwNCgdCEfmQCugd1WDtvnNC7pqERefrBRH%2FqI4tnhsKVq2f9ACffPFt%2FrozSpUKDmr5MsqsAIHSoXnTr%2BtkxT%2BdKda6zi3KHalZobm%2FIRyUl7hfefT76fCb4ws1iFBI%2BFBpie6VFDvLMofibt7S6bftR7b7wIychj9UDIC8gibXUkX1lUCj86Ejz8%2B2pt%2F18zWZtDCh0pPRBjqkAQQWkZG8h7IJtuGhC1k%2BHC0hII86bolV1ha6DPlMdQQrq2YZtKGd0gBN20rdEsC%2BbROBsZVtrTMy%2BKRSagnid0R4mkBBdx2pkI6MmnzP%2BRt5qNoLSLirRMWbMV6ubcmusC9SZJebgFopjBhTxOPMVIf5874y0M%2FnbuefcKdky0ihWDJuJDatQ2lMXWdRoKOBMagIF%2FNax46lqRkcrqsQpEA2%2FLrE&X-Amz-Signature=f6d753b57a528c9bca5b26be44c01ea68bb0d65c87dd3d8397225e9ad4d18f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLT7ZX7%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJlh%2BJ9UubxCGz8btUCZ64kAAZzC5eLcOPvF56qVJoQIhAKLkXsziWMUp5DU0%2BVuDdujjbFhPHO%2FEPZo%2BS9rtMpHOKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw84lsDU%2FXecU2E2iUq3AMS1FSCt4bx2nWnIGH6ujX0OGApgU3XMoGuvmN9X7fYdG86ia43dBjgfmgB%2BisW6pV%2BpQYba7479f6hZ8118jzsjnlvF9Owfvsl%2BPKFwoaFyTuIazaTUT9fSIGvS8ufEhaXIRgjYWtkxBYNWhiWaVR11zdBMI86vAqKlkZR14t%2FyWryy8j3Wv2QYb4QUZs9427LjdQd4mn0fNjaL3w3xdDBPQYa7ZnoWPemY5Qzh31YSu3XjQ6mOIkQg6Ya9Fsb%2B6mcQj4PS%2F58BsshF7An2S3LlkU4W1XLOuFYsbkuF4yE%2F6U35IPCMad5tdXLVsTpwuT9RQl9FB%2BK%2FQvX%2BUlz8w1ORS7oGQjbz4rK2uuA97G7QagEmHwz9sBXkD3U%2BCJPFR9C%2BQM%2F%2FaHWhSQqqC7BV3CnSc5WpQiN7udAlYf1WT6L9WtGW0wHkmulVCwNCgdCEfmQCugd1WDtvnNC7pqERefrBRH%2FqI4tnhsKVq2f9ACffPFt%2FrozSpUKDmr5MsqsAIHSoXnTr%2BtkxT%2BdKda6zi3KHalZobm%2FIRyUl7hfefT76fCb4ws1iFBI%2BFBpie6VFDvLMofibt7S6bftR7b7wIychj9UDIC8gibXUkX1lUCj86Ejz8%2B2pt%2F18zWZtDCh0pPRBjqkAQQWkZG8h7IJtuGhC1k%2BHC0hII86bolV1ha6DPlMdQQrq2YZtKGd0gBN20rdEsC%2BbROBsZVtrTMy%2BKRSagnid0R4mkBBdx2pkI6MmnzP%2BRt5qNoLSLirRMWbMV6ubcmusC9SZJebgFopjBhTxOPMVIf5874y0M%2FnbuefcKdky0ihWDJuJDatQ2lMXWdRoKOBMagIF%2FNax46lqRkcrqsQpEA2%2FLrE&X-Amz-Signature=6db1b1fec2e5eb5d14ef1750840501e74df874bda7f5e97434984126a312b334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
