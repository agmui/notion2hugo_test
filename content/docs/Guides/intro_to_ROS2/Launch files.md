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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKQ2R4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3hJbB0hwjZUCR%2FKVF3iUK3n6IsBlxfW32n%2FH6JogjNwIhAK93eB0UcoO3BvzKdwhXf5pFIF%2FUizmwVB8qGsxXirIgKv8DCHsQABoMNjM3NDIzMTgzODA1IgzYCwPPq9gqSmIo6tQq3AMgi3ljx75EnAFiCR3BT3pUsJFas6Uk17OOQQgMRrqt8e8ntHLPIBY2%2Fx792EqMQoIs77A19UTqJ6U8gbmivldmJOm5C1UL%2BSM96YOjGbi3kkk0Lhaw3D39M8QQWY6pIz144bhL%2FCyyINDcyZCMRe1KfjBUXOkE6yN%2FWCnhKVZRLaDCXGe1T0KZdtu%2FZdqLrFxizNbLBpP%2B0Fqe%2FJAe7AQAZpa19rSS22KRWutgeJzhPqeTbTGwCvqPG%2FYrLfvc5hZaRi5yb%2BnjyA4F9Vvu7bPvJtkxEcvdwYvg0g5Kmv5ylgtcWURhAdrqFSB%2BmLA6QB5Kmm1%2FxmebF%2BsyLJPPBoTbVaovX8lt5lf6v1PsijlFSLiZxR5C8Snf0RJjiN7q156WPcXDApshG%2FwSORfME94PBbD7qPVTWIu7M3kDqd3sMdhcEo%2BqfHIPhg6YVTZa%2Bu1HdKrErtPj3V3436uk3robosLDVwExw5r4gpyd7fOUou%2BEYPXIYJGLAbI%2B2hvMRBdePzAWBGFzSOtoeCRgpD5mBMWWigFNg9WxRcWxggpWRD1UJh4eM5wJerQNLiHnw8AdPuN2jw0OY14iSLRqe7NgesdMEKFUSD4nXT3MMjSZvHRZZrE54%2FgsQGvd8jCWwqjBBjqkAZDinPzpnkw4BkcP%2FYcppGX49T2yrBInjd1MtmkKB47duUbmXjRhXlTl2Ph39g%2BbI25RGjf59prgQcrZO4t0MkSLoxT%2BFJp3SOtNQb%2Ff88LH%2FLP6iM97nSP%2BYRNMOekld5tWYV0Jxc15QvKSgr2Uvl8HhLNx4m8vW30HsfCphuFLt0GTOvlm5Y7Ef%2Fmvdirkw3lw9ATJg%2FESYIdh%2FMJrcpKEEmo1&X-Amz-Signature=2641375b2f68a8dee440b7939445d03adad9aa75055a9f8d5da01ef8cbb38ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKQ2R4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3hJbB0hwjZUCR%2FKVF3iUK3n6IsBlxfW32n%2FH6JogjNwIhAK93eB0UcoO3BvzKdwhXf5pFIF%2FUizmwVB8qGsxXirIgKv8DCHsQABoMNjM3NDIzMTgzODA1IgzYCwPPq9gqSmIo6tQq3AMgi3ljx75EnAFiCR3BT3pUsJFas6Uk17OOQQgMRrqt8e8ntHLPIBY2%2Fx792EqMQoIs77A19UTqJ6U8gbmivldmJOm5C1UL%2BSM96YOjGbi3kkk0Lhaw3D39M8QQWY6pIz144bhL%2FCyyINDcyZCMRe1KfjBUXOkE6yN%2FWCnhKVZRLaDCXGe1T0KZdtu%2FZdqLrFxizNbLBpP%2B0Fqe%2FJAe7AQAZpa19rSS22KRWutgeJzhPqeTbTGwCvqPG%2FYrLfvc5hZaRi5yb%2BnjyA4F9Vvu7bPvJtkxEcvdwYvg0g5Kmv5ylgtcWURhAdrqFSB%2BmLA6QB5Kmm1%2FxmebF%2BsyLJPPBoTbVaovX8lt5lf6v1PsijlFSLiZxR5C8Snf0RJjiN7q156WPcXDApshG%2FwSORfME94PBbD7qPVTWIu7M3kDqd3sMdhcEo%2BqfHIPhg6YVTZa%2Bu1HdKrErtPj3V3436uk3robosLDVwExw5r4gpyd7fOUou%2BEYPXIYJGLAbI%2B2hvMRBdePzAWBGFzSOtoeCRgpD5mBMWWigFNg9WxRcWxggpWRD1UJh4eM5wJerQNLiHnw8AdPuN2jw0OY14iSLRqe7NgesdMEKFUSD4nXT3MMjSZvHRZZrE54%2FgsQGvd8jCWwqjBBjqkAZDinPzpnkw4BkcP%2FYcppGX49T2yrBInjd1MtmkKB47duUbmXjRhXlTl2Ph39g%2BbI25RGjf59prgQcrZO4t0MkSLoxT%2BFJp3SOtNQb%2Ff88LH%2FLP6iM97nSP%2BYRNMOekld5tWYV0Jxc15QvKSgr2Uvl8HhLNx4m8vW30HsfCphuFLt0GTOvlm5Y7Ef%2Fmvdirkw3lw9ATJg%2FESYIdh%2FMJrcpKEEmo1&X-Amz-Signature=68b9787daf6b2b9760a49056f99f63781e556a88c386253970fb8249c765d00f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAKQ2R4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3hJbB0hwjZUCR%2FKVF3iUK3n6IsBlxfW32n%2FH6JogjNwIhAK93eB0UcoO3BvzKdwhXf5pFIF%2FUizmwVB8qGsxXirIgKv8DCHsQABoMNjM3NDIzMTgzODA1IgzYCwPPq9gqSmIo6tQq3AMgi3ljx75EnAFiCR3BT3pUsJFas6Uk17OOQQgMRrqt8e8ntHLPIBY2%2Fx792EqMQoIs77A19UTqJ6U8gbmivldmJOm5C1UL%2BSM96YOjGbi3kkk0Lhaw3D39M8QQWY6pIz144bhL%2FCyyINDcyZCMRe1KfjBUXOkE6yN%2FWCnhKVZRLaDCXGe1T0KZdtu%2FZdqLrFxizNbLBpP%2B0Fqe%2FJAe7AQAZpa19rSS22KRWutgeJzhPqeTbTGwCvqPG%2FYrLfvc5hZaRi5yb%2BnjyA4F9Vvu7bPvJtkxEcvdwYvg0g5Kmv5ylgtcWURhAdrqFSB%2BmLA6QB5Kmm1%2FxmebF%2BsyLJPPBoTbVaovX8lt5lf6v1PsijlFSLiZxR5C8Snf0RJjiN7q156WPcXDApshG%2FwSORfME94PBbD7qPVTWIu7M3kDqd3sMdhcEo%2BqfHIPhg6YVTZa%2Bu1HdKrErtPj3V3436uk3robosLDVwExw5r4gpyd7fOUou%2BEYPXIYJGLAbI%2B2hvMRBdePzAWBGFzSOtoeCRgpD5mBMWWigFNg9WxRcWxggpWRD1UJh4eM5wJerQNLiHnw8AdPuN2jw0OY14iSLRqe7NgesdMEKFUSD4nXT3MMjSZvHRZZrE54%2FgsQGvd8jCWwqjBBjqkAZDinPzpnkw4BkcP%2FYcppGX49T2yrBInjd1MtmkKB47duUbmXjRhXlTl2Ph39g%2BbI25RGjf59prgQcrZO4t0MkSLoxT%2BFJp3SOtNQb%2Ff88LH%2FLP6iM97nSP%2BYRNMOekld5tWYV0Jxc15QvKSgr2Uvl8HhLNx4m8vW30HsfCphuFLt0GTOvlm5Y7Ef%2Fmvdirkw3lw9ATJg%2FESYIdh%2FMJrcpKEEmo1&X-Amz-Signature=af1b2f991abed66faa9b070f61c83da14f23c5ab42b26b393266aaf3efbad954&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
