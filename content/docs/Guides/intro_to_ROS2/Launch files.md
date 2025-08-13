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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJ64SEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5YdXh5RcQ7tUdzmrAXhRFemqu1vrgTl7trMHnJ8A1QIhALW5ztnKcMa2xNvDOJOpr6mPh14PNxhquU3%2FELaXy8O9Kv8DCCgQABoMNjM3NDIzMTgzODA1Igy8vMKpHWbpKl4Vc5sq3APugYsPXinpCEyNTh90yWCXD37rxwg7fDnXynKlQkBHWO7XuK8cGxneBnt0%2F3SJIy5mL%2FewhQx8j0It1siWIaul9L9j3p0oasEKVJ29CiNQPkx%2FDo1AyBPRRyuzrgTpat%2BaOruOapbuzL0YUEUkeBO72aCyw2kdqJA1hNskUk6EmthYH%2Bm0sl1LXIWLM7%2FI2OqcEwbTazcVq5ZR0s5eeqBltoB6hSRSFdqiDF%2FQhXHzL97rRSyodbTyK0KYHlpp4jXtx1hJU8f3Z3aUVF0Im8PPLHAnTTsk%2FFTqmpQUN6yRxvOn5W2NlTt1sVFJ628qie8S%2BPGmorlabhTRwXKK7UfE4158T0%2B3%2BSl3Xels0kUQLpdc0LGO%2F9B35BV%2FfqsacOFPXMiy40X%2FF8A1xIZhBx8Cob1DFxdcYqMPWvoV%2FTB%2FOWop5HJ3rlQBGCL5I3bTuwORHGMfhBoWMueIof4aQ2BhPs97Fav4zChT434%2Bvq963ryMeEwy9PkJuZTo264AwO6t7nzROG1sWaeaEscHQWhGzR19NhkoVGG3ChrhctTRpVL%2FHr3Ul6rROsHVYzSWdqDe5B4euacO0G%2BaN7HyjWJptwoKO8%2FikzZhX8Uk%2F9%2ByGLubm0ghcDMaL%2B%2BIkTCr%2BfDEBjqkAS5JY7pIOR2e7o2tmWn00L70qvufRfdzwtxPlnzvHQsK1MU3gCcBfoA6imlczYLVtQZffxQW3LVpZ51EegBZij9cLijwtZ5cYkp06CYyrF8GanijiH5YiQL2O0WMAUl1CViW1gKBmUhA9tZnapI%2FQGTajeaBXZcqzXoa7rZ76zQ5obCzh9XLjhJwQ0b0qqfjL6s39jbVqKNF5NaigFfG9qeTlHu%2F&X-Amz-Signature=3c35d818ddb84e848033bb7afb767092a6b10a5ecb98b34eb584134cb49bbc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJ64SEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5YdXh5RcQ7tUdzmrAXhRFemqu1vrgTl7trMHnJ8A1QIhALW5ztnKcMa2xNvDOJOpr6mPh14PNxhquU3%2FELaXy8O9Kv8DCCgQABoMNjM3NDIzMTgzODA1Igy8vMKpHWbpKl4Vc5sq3APugYsPXinpCEyNTh90yWCXD37rxwg7fDnXynKlQkBHWO7XuK8cGxneBnt0%2F3SJIy5mL%2FewhQx8j0It1siWIaul9L9j3p0oasEKVJ29CiNQPkx%2FDo1AyBPRRyuzrgTpat%2BaOruOapbuzL0YUEUkeBO72aCyw2kdqJA1hNskUk6EmthYH%2Bm0sl1LXIWLM7%2FI2OqcEwbTazcVq5ZR0s5eeqBltoB6hSRSFdqiDF%2FQhXHzL97rRSyodbTyK0KYHlpp4jXtx1hJU8f3Z3aUVF0Im8PPLHAnTTsk%2FFTqmpQUN6yRxvOn5W2NlTt1sVFJ628qie8S%2BPGmorlabhTRwXKK7UfE4158T0%2B3%2BSl3Xels0kUQLpdc0LGO%2F9B35BV%2FfqsacOFPXMiy40X%2FF8A1xIZhBx8Cob1DFxdcYqMPWvoV%2FTB%2FOWop5HJ3rlQBGCL5I3bTuwORHGMfhBoWMueIof4aQ2BhPs97Fav4zChT434%2Bvq963ryMeEwy9PkJuZTo264AwO6t7nzROG1sWaeaEscHQWhGzR19NhkoVGG3ChrhctTRpVL%2FHr3Ul6rROsHVYzSWdqDe5B4euacO0G%2BaN7HyjWJptwoKO8%2FikzZhX8Uk%2F9%2ByGLubm0ghcDMaL%2B%2BIkTCr%2BfDEBjqkAS5JY7pIOR2e7o2tmWn00L70qvufRfdzwtxPlnzvHQsK1MU3gCcBfoA6imlczYLVtQZffxQW3LVpZ51EegBZij9cLijwtZ5cYkp06CYyrF8GanijiH5YiQL2O0WMAUl1CViW1gKBmUhA9tZnapI%2FQGTajeaBXZcqzXoa7rZ76zQ5obCzh9XLjhJwQ0b0qqfjL6s39jbVqKNF5NaigFfG9qeTlHu%2F&X-Amz-Signature=387274230b06590b5dbe9b61a544b88cecdaf32c6d39178fed4b6c849722a9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJ64SEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5YdXh5RcQ7tUdzmrAXhRFemqu1vrgTl7trMHnJ8A1QIhALW5ztnKcMa2xNvDOJOpr6mPh14PNxhquU3%2FELaXy8O9Kv8DCCgQABoMNjM3NDIzMTgzODA1Igy8vMKpHWbpKl4Vc5sq3APugYsPXinpCEyNTh90yWCXD37rxwg7fDnXynKlQkBHWO7XuK8cGxneBnt0%2F3SJIy5mL%2FewhQx8j0It1siWIaul9L9j3p0oasEKVJ29CiNQPkx%2FDo1AyBPRRyuzrgTpat%2BaOruOapbuzL0YUEUkeBO72aCyw2kdqJA1hNskUk6EmthYH%2Bm0sl1LXIWLM7%2FI2OqcEwbTazcVq5ZR0s5eeqBltoB6hSRSFdqiDF%2FQhXHzL97rRSyodbTyK0KYHlpp4jXtx1hJU8f3Z3aUVF0Im8PPLHAnTTsk%2FFTqmpQUN6yRxvOn5W2NlTt1sVFJ628qie8S%2BPGmorlabhTRwXKK7UfE4158T0%2B3%2BSl3Xels0kUQLpdc0LGO%2F9B35BV%2FfqsacOFPXMiy40X%2FF8A1xIZhBx8Cob1DFxdcYqMPWvoV%2FTB%2FOWop5HJ3rlQBGCL5I3bTuwORHGMfhBoWMueIof4aQ2BhPs97Fav4zChT434%2Bvq963ryMeEwy9PkJuZTo264AwO6t7nzROG1sWaeaEscHQWhGzR19NhkoVGG3ChrhctTRpVL%2FHr3Ul6rROsHVYzSWdqDe5B4euacO0G%2BaN7HyjWJptwoKO8%2FikzZhX8Uk%2F9%2ByGLubm0ghcDMaL%2B%2BIkTCr%2BfDEBjqkAS5JY7pIOR2e7o2tmWn00L70qvufRfdzwtxPlnzvHQsK1MU3gCcBfoA6imlczYLVtQZffxQW3LVpZ51EegBZij9cLijwtZ5cYkp06CYyrF8GanijiH5YiQL2O0WMAUl1CViW1gKBmUhA9tZnapI%2FQGTajeaBXZcqzXoa7rZ76zQ5obCzh9XLjhJwQ0b0qqfjL6s39jbVqKNF5NaigFfG9qeTlHu%2F&X-Amz-Signature=7d5f244dcdeebf5429e0dccc2461b621e52dc2fb3e9319559c0295ccb739719c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
