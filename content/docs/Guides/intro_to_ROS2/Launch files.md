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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTGLIZSF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx0tuaBTEBmMuJ1Vuv7jG96wnkRIwvfm4NCNl%2F9jsDqAiBCCIGqxUIPIIkR4JIO%2BbQdChTi0mlXex77adHIlmYupCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMGPjirtrOA8Q6e65IKtwDJBAXSV9E2GQUf9luStK5KbC3cXxy9QlNxydCuOHquk4hDaxIXdn%2BBK8KSnCrzCxU3Es1tZJhkmiLPB%2BsRIKoCNp6YXLHugzGpN6z%2FNbNWactWACNj0bkYjDPb9t3Q5VWjkTj%2F7raONjhGQVoqLmRfdSpZOX%2Fyz2ijQamlEIeLmzRDoLlsGMMsfHxi1wWafd8OfKZhL8RoosnFr4lKA3n%2B27Rll%2BVX7G0RYEoaULsaJlzOM2%2B5MlSzaG7qYEcTIwxKWbG0RSuYQ0TlIFbCO6YE0lTXQS4Yiiv7ZwWGdkTsmE2EwbNS2v7KqsfY0bqdzoNB47tzMW0IlC1x%2BI7aGhAWd3YWAHVGpNZAe0ooorC1ohTiufKi0eCwHWJMXecaMEA8oIRVdwMv4G11VyqTOKfO5rw1kLCr7mcUCPdkIN7yPsbnMO%2BN0WbolPwxWYh%2Bkgy%2Fpw1ZOpP%2BT2nhLhDuYDTIQfu6Rsf1FOdD2PZTvgmAVX8eONFsJ6N5u9q%2Fu9dnPoXwOW6ZreF5NBUFuGtxZ9JJW2M%2Fvuw1X1AXpoE8R4WdXP14%2FLJp%2BZJwFvB5BGtQaVA66v8Jk%2BcDQYRwvfcf3KDz2f5B9gHM3RcAcP%2FOqXGZwRJQa2w1ZszRC1AwbAwqO%2FCvwY6pgGzQOCE6SdMco9YGSKoBF6hPgvGbnfyVEjpelYoN2cE0Ul%2BteLV%2FwIExAgIlg%2B1tqfu9Dnij9eDnGVlK4CuTZGSnzAt%2BNtQOd3SGs8025PcjTFq5nQLLZ%2FfXveRkNN9PxmJynWoohWf1ixrxjcmhesLRiZ%2BCtHwljyFQyqIn8ESWG%2FmO%2BiAh%2BrsML0dwUqIW3yRdOklijE1TbnYUdSgSy7oEWxH5oaK&X-Amz-Signature=1a5087ab638a265e787615b1dfb27ef264d7fa68a44c915fe321e1d9815042af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTGLIZSF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx0tuaBTEBmMuJ1Vuv7jG96wnkRIwvfm4NCNl%2F9jsDqAiBCCIGqxUIPIIkR4JIO%2BbQdChTi0mlXex77adHIlmYupCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMGPjirtrOA8Q6e65IKtwDJBAXSV9E2GQUf9luStK5KbC3cXxy9QlNxydCuOHquk4hDaxIXdn%2BBK8KSnCrzCxU3Es1tZJhkmiLPB%2BsRIKoCNp6YXLHugzGpN6z%2FNbNWactWACNj0bkYjDPb9t3Q5VWjkTj%2F7raONjhGQVoqLmRfdSpZOX%2Fyz2ijQamlEIeLmzRDoLlsGMMsfHxi1wWafd8OfKZhL8RoosnFr4lKA3n%2B27Rll%2BVX7G0RYEoaULsaJlzOM2%2B5MlSzaG7qYEcTIwxKWbG0RSuYQ0TlIFbCO6YE0lTXQS4Yiiv7ZwWGdkTsmE2EwbNS2v7KqsfY0bqdzoNB47tzMW0IlC1x%2BI7aGhAWd3YWAHVGpNZAe0ooorC1ohTiufKi0eCwHWJMXecaMEA8oIRVdwMv4G11VyqTOKfO5rw1kLCr7mcUCPdkIN7yPsbnMO%2BN0WbolPwxWYh%2Bkgy%2Fpw1ZOpP%2BT2nhLhDuYDTIQfu6Rsf1FOdD2PZTvgmAVX8eONFsJ6N5u9q%2Fu9dnPoXwOW6ZreF5NBUFuGtxZ9JJW2M%2Fvuw1X1AXpoE8R4WdXP14%2FLJp%2BZJwFvB5BGtQaVA66v8Jk%2BcDQYRwvfcf3KDz2f5B9gHM3RcAcP%2FOqXGZwRJQa2w1ZszRC1AwbAwqO%2FCvwY6pgGzQOCE6SdMco9YGSKoBF6hPgvGbnfyVEjpelYoN2cE0Ul%2BteLV%2FwIExAgIlg%2B1tqfu9Dnij9eDnGVlK4CuTZGSnzAt%2BNtQOd3SGs8025PcjTFq5nQLLZ%2FfXveRkNN9PxmJynWoohWf1ixrxjcmhesLRiZ%2BCtHwljyFQyqIn8ESWG%2FmO%2BiAh%2BrsML0dwUqIW3yRdOklijE1TbnYUdSgSy7oEWxH5oaK&X-Amz-Signature=6f9ec5e4a5126a4dbf339bfb5b94b9b08363ef85df5f527399ef957a92de1a83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTGLIZSF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx0tuaBTEBmMuJ1Vuv7jG96wnkRIwvfm4NCNl%2F9jsDqAiBCCIGqxUIPIIkR4JIO%2BbQdChTi0mlXex77adHIlmYupCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMGPjirtrOA8Q6e65IKtwDJBAXSV9E2GQUf9luStK5KbC3cXxy9QlNxydCuOHquk4hDaxIXdn%2BBK8KSnCrzCxU3Es1tZJhkmiLPB%2BsRIKoCNp6YXLHugzGpN6z%2FNbNWactWACNj0bkYjDPb9t3Q5VWjkTj%2F7raONjhGQVoqLmRfdSpZOX%2Fyz2ijQamlEIeLmzRDoLlsGMMsfHxi1wWafd8OfKZhL8RoosnFr4lKA3n%2B27Rll%2BVX7G0RYEoaULsaJlzOM2%2B5MlSzaG7qYEcTIwxKWbG0RSuYQ0TlIFbCO6YE0lTXQS4Yiiv7ZwWGdkTsmE2EwbNS2v7KqsfY0bqdzoNB47tzMW0IlC1x%2BI7aGhAWd3YWAHVGpNZAe0ooorC1ohTiufKi0eCwHWJMXecaMEA8oIRVdwMv4G11VyqTOKfO5rw1kLCr7mcUCPdkIN7yPsbnMO%2BN0WbolPwxWYh%2Bkgy%2Fpw1ZOpP%2BT2nhLhDuYDTIQfu6Rsf1FOdD2PZTvgmAVX8eONFsJ6N5u9q%2Fu9dnPoXwOW6ZreF5NBUFuGtxZ9JJW2M%2Fvuw1X1AXpoE8R4WdXP14%2FLJp%2BZJwFvB5BGtQaVA66v8Jk%2BcDQYRwvfcf3KDz2f5B9gHM3RcAcP%2FOqXGZwRJQa2w1ZszRC1AwbAwqO%2FCvwY6pgGzQOCE6SdMco9YGSKoBF6hPgvGbnfyVEjpelYoN2cE0Ul%2BteLV%2FwIExAgIlg%2B1tqfu9Dnij9eDnGVlK4CuTZGSnzAt%2BNtQOd3SGs8025PcjTFq5nQLLZ%2FfXveRkNN9PxmJynWoohWf1ixrxjcmhesLRiZ%2BCtHwljyFQyqIn8ESWG%2FmO%2BiAh%2BrsML0dwUqIW3yRdOklijE1TbnYUdSgSy7oEWxH5oaK&X-Amz-Signature=2a8c54b058a7a1c01cb82fe8e1714d58fd108112cc61b219f6d4e62a5d39fdf2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
