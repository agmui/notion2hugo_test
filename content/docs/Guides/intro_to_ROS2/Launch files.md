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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIQJHAH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEQAmrLw5gfLT1liIrowrAl6do0n3Lc67LS%2BViS9RLoCAiEAgj0VNtCB0pXxYggxU2X%2BNIbpRwfkh%2FtLQ%2F3S%2BzkmXT4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDB3HyScU1rJh5gFjtCrcA1tdr%2B9b92rCreng1pvjIu3Igj2lpki62S8SbmqRJQlksuLfvRTB7gSPrdiFY1hWFv0wOZ6xqnsrSAF9yOacpz2fImm31bIjeay5DsklNnBuh%2F4JKYxnJNiMD%2Bs7AeBtClJwTsvDzpKqMMJsEa7%2BMWGqCoaPRc4hW6af57vluCqkSMTlIvc9nErO6eyS7EigXv8J5F3ZbWQEYQIzqYR3XiSi8SuIBaSk5rekNjlFZulv%2FwRfzCVCmugxt9IqQ8oUPBqrak4l889uWiHXYStOgRUkrEJ4QczgELLkQAgFBewZYhE7i%2Fpgr0Xj86NW3ReG7j0a7jX3NExO90CigWkjp3qkH97lRUZ1fs9nFvi2ynEAi8cwBagQM387QuEnNRz2z6mUmMPtQ%2FSXyw5KqXCVzsfwNQzS2c4KTBqx%2BmhrOpTpnsvK2CHOejMpSG4ctINo1e5eNrlPKjsaJidqr26P6sWzU4pqEnZFd%2BvYZYAD4%2FuZkkKYH5abFuYCvHxZyOrn4mHWSUMGoFTh02mu7SScpYw9OSaKh0olTcKTZ4NL05OBhzHkEGjp8qVXutyqLqjPUxduIUeHhB6B7yMCZpOHxW6%2BfA0kNZM423%2Fb75Nwfqu0F9nvMPe2e7k6iMJAMJvIwMIGOqUBxsO0TbHuS39KK1NFh1SoykdfiN7e8jVy1QGSm5rT%2FQPrK2iq2fzpUKb4CEhF6mcNAR9cu2nicu0WSNfLiFGRc92%2Bpa%2Bie02Zw%2FZsjxM5zjGueijf4eJPcPaWyLFAvFn2%2BlA0KBTZ8sJucbakOYqgohmRSYf16OWzAg4bv8G5OqFvtcRxhUdu4NWcpk1NkH3swK%2B745IzHSENk4z4H8DdvACZD6ow&X-Amz-Signature=bc5fbf94ba26195c9bf3b1ddc43d62864a430bd5e75058bfd1b76546c4f032b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIQJHAH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEQAmrLw5gfLT1liIrowrAl6do0n3Lc67LS%2BViS9RLoCAiEAgj0VNtCB0pXxYggxU2X%2BNIbpRwfkh%2FtLQ%2F3S%2BzkmXT4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDB3HyScU1rJh5gFjtCrcA1tdr%2B9b92rCreng1pvjIu3Igj2lpki62S8SbmqRJQlksuLfvRTB7gSPrdiFY1hWFv0wOZ6xqnsrSAF9yOacpz2fImm31bIjeay5DsklNnBuh%2F4JKYxnJNiMD%2Bs7AeBtClJwTsvDzpKqMMJsEa7%2BMWGqCoaPRc4hW6af57vluCqkSMTlIvc9nErO6eyS7EigXv8J5F3ZbWQEYQIzqYR3XiSi8SuIBaSk5rekNjlFZulv%2FwRfzCVCmugxt9IqQ8oUPBqrak4l889uWiHXYStOgRUkrEJ4QczgELLkQAgFBewZYhE7i%2Fpgr0Xj86NW3ReG7j0a7jX3NExO90CigWkjp3qkH97lRUZ1fs9nFvi2ynEAi8cwBagQM387QuEnNRz2z6mUmMPtQ%2FSXyw5KqXCVzsfwNQzS2c4KTBqx%2BmhrOpTpnsvK2CHOejMpSG4ctINo1e5eNrlPKjsaJidqr26P6sWzU4pqEnZFd%2BvYZYAD4%2FuZkkKYH5abFuYCvHxZyOrn4mHWSUMGoFTh02mu7SScpYw9OSaKh0olTcKTZ4NL05OBhzHkEGjp8qVXutyqLqjPUxduIUeHhB6B7yMCZpOHxW6%2BfA0kNZM423%2Fb75Nwfqu0F9nvMPe2e7k6iMJAMJvIwMIGOqUBxsO0TbHuS39KK1NFh1SoykdfiN7e8jVy1QGSm5rT%2FQPrK2iq2fzpUKb4CEhF6mcNAR9cu2nicu0WSNfLiFGRc92%2Bpa%2Bie02Zw%2FZsjxM5zjGueijf4eJPcPaWyLFAvFn2%2BlA0KBTZ8sJucbakOYqgohmRSYf16OWzAg4bv8G5OqFvtcRxhUdu4NWcpk1NkH3swK%2B745IzHSENk4z4H8DdvACZD6ow&X-Amz-Signature=a65deb30c28f9aeca7c8cf3e6a454dbf1e87e2da7aeeecfa7aa0fc37bbc6d32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIQJHAH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEQAmrLw5gfLT1liIrowrAl6do0n3Lc67LS%2BViS9RLoCAiEAgj0VNtCB0pXxYggxU2X%2BNIbpRwfkh%2FtLQ%2F3S%2BzkmXT4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDB3HyScU1rJh5gFjtCrcA1tdr%2B9b92rCreng1pvjIu3Igj2lpki62S8SbmqRJQlksuLfvRTB7gSPrdiFY1hWFv0wOZ6xqnsrSAF9yOacpz2fImm31bIjeay5DsklNnBuh%2F4JKYxnJNiMD%2Bs7AeBtClJwTsvDzpKqMMJsEa7%2BMWGqCoaPRc4hW6af57vluCqkSMTlIvc9nErO6eyS7EigXv8J5F3ZbWQEYQIzqYR3XiSi8SuIBaSk5rekNjlFZulv%2FwRfzCVCmugxt9IqQ8oUPBqrak4l889uWiHXYStOgRUkrEJ4QczgELLkQAgFBewZYhE7i%2Fpgr0Xj86NW3ReG7j0a7jX3NExO90CigWkjp3qkH97lRUZ1fs9nFvi2ynEAi8cwBagQM387QuEnNRz2z6mUmMPtQ%2FSXyw5KqXCVzsfwNQzS2c4KTBqx%2BmhrOpTpnsvK2CHOejMpSG4ctINo1e5eNrlPKjsaJidqr26P6sWzU4pqEnZFd%2BvYZYAD4%2FuZkkKYH5abFuYCvHxZyOrn4mHWSUMGoFTh02mu7SScpYw9OSaKh0olTcKTZ4NL05OBhzHkEGjp8qVXutyqLqjPUxduIUeHhB6B7yMCZpOHxW6%2BfA0kNZM423%2Fb75Nwfqu0F9nvMPe2e7k6iMJAMJvIwMIGOqUBxsO0TbHuS39KK1NFh1SoykdfiN7e8jVy1QGSm5rT%2FQPrK2iq2fzpUKb4CEhF6mcNAR9cu2nicu0WSNfLiFGRc92%2Bpa%2Bie02Zw%2FZsjxM5zjGueijf4eJPcPaWyLFAvFn2%2BlA0KBTZ8sJucbakOYqgohmRSYf16OWzAg4bv8G5OqFvtcRxhUdu4NWcpk1NkH3swK%2B745IzHSENk4z4H8DdvACZD6ow&X-Amz-Signature=bd1a6e32ebaf69df1932533e8ae0d227f3a63c6d0f273879320811658a097aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
