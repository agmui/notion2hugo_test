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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XEPCYUS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf6eHqiU1FWvdtVoD2aIanlimaTeb3Pkkri%2FZdLU8xCwIhAKn5k3fbf63NusA0BVqJeoLMXbnOdbfJCrtcPXCNiVlFKv8DCF4QABoMNjM3NDIzMTgzODA1IgzV4L%2FsL9QY%2F31nDcEq3AP5Cdp2NJm8kaUuXWPxWfzfryypQrxaGOdEhIQWeqYI%2BeGD7OEkQ%2BTAkyQs6NFsVujCnAYbp36byrtLE5Xzgi%2B1pQ9cVcKXR7rRPtSo7fhfxbngbKx23ZzodFWomNBQ2d%2BYF1x4eD3es%2B6kHlBVFOdXe1sBIoPmKMWoUKSIuqQ4nBcxohNGPwAWEfYVBn38%2F%2BWTMFPmnP1VwlMY3fDmPrIkLf5COKfYF4kjAhTxg3glrjXgQAigTvYxQywPFQH2iXd4HygEYx8KjplA1pkR3t1naodJZuW2Aec1BffzWEKn%2FEdI%2BB1sdk0zbQPWTTUwyQUz4okP74FNRGlfhkr%2F4P8Tw7Yvg6Wlr76YFRf%2FJw0WALiFsjg6Gmqfr6AexVlYgrY3hBcQK8%2FxzxjJ6bdL6tFV%2BJNaZzBlt4AEyKGAqCBHg6WABkTZSht6CkizZZb%2FrojXjgCGTzOtV13Q5T3CeY%2BkSt%2BVyYNhDQP24kTpO59O%2F7brw3zpVftXL5Fw06oDddGn2FOthjgrIbggTqgJr8DZ81eQgWsq8Ee1P2HILJ2kDn9har3TP1%2BIixHbe7PCYn51p8I1qmVDGnipZqmMvuN3MlaA9cTjsYSiSjvHbXlEkZaPxVJwIP56XZS03TCIsZq%2FBjqkAdDvFY1wsIbQrOUTHf3XcQoiRIt7d8wYf9DaQ%2FnyU4k5enNzr8R9tlMb4HFgR2YBUApT0c3g%2BMQ0BPeJ0aQOBlp%2BTv6rPTzoAszEWKeWqFdnux9MRaAgkcGGTD7Nu22sqfvrkfnM13sTLYXfTyd2q1i452e%2FhoA2IdFtUEdHnoKU2lW9%2FjgAB%2BsxqMvWFCjVvJLIigLr3b7Yhjq0C7%2BpVNpBhjT5&X-Amz-Signature=8a4bfae2deac481f5e890967f939a60a3b7339eeab507a7c3a38f4ea97d24aef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XEPCYUS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf6eHqiU1FWvdtVoD2aIanlimaTeb3Pkkri%2FZdLU8xCwIhAKn5k3fbf63NusA0BVqJeoLMXbnOdbfJCrtcPXCNiVlFKv8DCF4QABoMNjM3NDIzMTgzODA1IgzV4L%2FsL9QY%2F31nDcEq3AP5Cdp2NJm8kaUuXWPxWfzfryypQrxaGOdEhIQWeqYI%2BeGD7OEkQ%2BTAkyQs6NFsVujCnAYbp36byrtLE5Xzgi%2B1pQ9cVcKXR7rRPtSo7fhfxbngbKx23ZzodFWomNBQ2d%2BYF1x4eD3es%2B6kHlBVFOdXe1sBIoPmKMWoUKSIuqQ4nBcxohNGPwAWEfYVBn38%2F%2BWTMFPmnP1VwlMY3fDmPrIkLf5COKfYF4kjAhTxg3glrjXgQAigTvYxQywPFQH2iXd4HygEYx8KjplA1pkR3t1naodJZuW2Aec1BffzWEKn%2FEdI%2BB1sdk0zbQPWTTUwyQUz4okP74FNRGlfhkr%2F4P8Tw7Yvg6Wlr76YFRf%2FJw0WALiFsjg6Gmqfr6AexVlYgrY3hBcQK8%2FxzxjJ6bdL6tFV%2BJNaZzBlt4AEyKGAqCBHg6WABkTZSht6CkizZZb%2FrojXjgCGTzOtV13Q5T3CeY%2BkSt%2BVyYNhDQP24kTpO59O%2F7brw3zpVftXL5Fw06oDddGn2FOthjgrIbggTqgJr8DZ81eQgWsq8Ee1P2HILJ2kDn9har3TP1%2BIixHbe7PCYn51p8I1qmVDGnipZqmMvuN3MlaA9cTjsYSiSjvHbXlEkZaPxVJwIP56XZS03TCIsZq%2FBjqkAdDvFY1wsIbQrOUTHf3XcQoiRIt7d8wYf9DaQ%2FnyU4k5enNzr8R9tlMb4HFgR2YBUApT0c3g%2BMQ0BPeJ0aQOBlp%2BTv6rPTzoAszEWKeWqFdnux9MRaAgkcGGTD7Nu22sqfvrkfnM13sTLYXfTyd2q1i452e%2FhoA2IdFtUEdHnoKU2lW9%2FjgAB%2BsxqMvWFCjVvJLIigLr3b7Yhjq0C7%2BpVNpBhjT5&X-Amz-Signature=a2a8cc299dca4920f5ba67f1706a360519b093d826e708ca0540852097fd5dad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XEPCYUS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf6eHqiU1FWvdtVoD2aIanlimaTeb3Pkkri%2FZdLU8xCwIhAKn5k3fbf63NusA0BVqJeoLMXbnOdbfJCrtcPXCNiVlFKv8DCF4QABoMNjM3NDIzMTgzODA1IgzV4L%2FsL9QY%2F31nDcEq3AP5Cdp2NJm8kaUuXWPxWfzfryypQrxaGOdEhIQWeqYI%2BeGD7OEkQ%2BTAkyQs6NFsVujCnAYbp36byrtLE5Xzgi%2B1pQ9cVcKXR7rRPtSo7fhfxbngbKx23ZzodFWomNBQ2d%2BYF1x4eD3es%2B6kHlBVFOdXe1sBIoPmKMWoUKSIuqQ4nBcxohNGPwAWEfYVBn38%2F%2BWTMFPmnP1VwlMY3fDmPrIkLf5COKfYF4kjAhTxg3glrjXgQAigTvYxQywPFQH2iXd4HygEYx8KjplA1pkR3t1naodJZuW2Aec1BffzWEKn%2FEdI%2BB1sdk0zbQPWTTUwyQUz4okP74FNRGlfhkr%2F4P8Tw7Yvg6Wlr76YFRf%2FJw0WALiFsjg6Gmqfr6AexVlYgrY3hBcQK8%2FxzxjJ6bdL6tFV%2BJNaZzBlt4AEyKGAqCBHg6WABkTZSht6CkizZZb%2FrojXjgCGTzOtV13Q5T3CeY%2BkSt%2BVyYNhDQP24kTpO59O%2F7brw3zpVftXL5Fw06oDddGn2FOthjgrIbggTqgJr8DZ81eQgWsq8Ee1P2HILJ2kDn9har3TP1%2BIixHbe7PCYn51p8I1qmVDGnipZqmMvuN3MlaA9cTjsYSiSjvHbXlEkZaPxVJwIP56XZS03TCIsZq%2FBjqkAdDvFY1wsIbQrOUTHf3XcQoiRIt7d8wYf9DaQ%2FnyU4k5enNzr8R9tlMb4HFgR2YBUApT0c3g%2BMQ0BPeJ0aQOBlp%2BTv6rPTzoAszEWKeWqFdnux9MRaAgkcGGTD7Nu22sqfvrkfnM13sTLYXfTyd2q1i452e%2FhoA2IdFtUEdHnoKU2lW9%2FjgAB%2BsxqMvWFCjVvJLIigLr3b7Yhjq0C7%2BpVNpBhjT5&X-Amz-Signature=0e01626705e8182a082fbce022137220a6845e68aba6421a6e251dd59a331da5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
