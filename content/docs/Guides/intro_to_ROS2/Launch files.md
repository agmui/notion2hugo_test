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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSKEMRP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDB%2Fn7D9M4inqKZnqRGne3mOv6jJliJmtNxHQsVChpbbwIgAWPhHXJ6OjP2JAAfAFRzZF7RgG3rjRfx6eouY%2Bz6MjAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLaEgY4MmC8OTDkuyCrcA6g4H00AlZWO4QVvBajZjCVLHyTSp9Gmb1DqHXm16IsgnfUc9H7%2BY6Jd1AA0yha7jprOe3YDOqZKp6auX0FdichOkekV%2B9aEpKaAEGGQ6%2BDPyhqA7GU9O6PZHku4skxyVp1xJcljXBMjawWfqHSpfal0KnirtPtZWyS6XNYaIrpMjTlyWVxUkRsItFVOzW%2BtJzQ78%2BeBG4nM0WCbKK%2FEADp0kEVGfdrwBwCgbgTXZIC%2FbR8SSfsXgx7%2FedeDcYOCHyEdrHkenyh1%2FfjbQEyf79Gwj%2BUKADkAqEvC9YDIHuTPRgWR5obLdVuWHKRByII8z%2F1XXRpfyVxWciRzqU0NITwb4UhmdjlTxcJ7Fvnk%2BCDO6xTqUP4JcDxAvZP9hkS6JsYMzNrTfoqdAo%2B9xJWmYWEa4RRuxfaPYV9f06xBmqBT5zjgXvWrp8gMeN%2FD3aJRCdn4s0qkBgF6n7EarvC728ULEGpYQPqdTz7aDKi7X94qbRWV2E1cH%2Fiftr0U%2BmXYtfnnjjh%2FICSS4bDV16SfQukbBkAlATgf9%2FCjuPZ2C1HaJFeZriGfW4ETdVVvMW8AEsehPoegSjDa%2Bgr9uz1beOcYhtkinEgugJ1xrvSPbfbtYi7jqM5XmsKGPnHxMKu1%2B8EGOqUBl%2Bf%2F8dW%2Fmsb29YIIlIXeHH%2BwNg4LTGKd2j1UFlxOTDptfflwzzUqgfVVVzuWZDthz2syS9pGchQ01z44jQMDOTZ9%2BwMlWKHUvcTV7qh5ASdX27nwdGPPazKg68CulMhfzkxIRbEXI7en6JW%2FH2HZ%2BgF%2Fw0GSZIiO39QcBIHYppQMHt7rL%2B1UVmvbxRw9P%2BVO9umCYcgFF0XLOimgChYjCLMcW2ia&X-Amz-Signature=f7c55d6259c96752490c85aafe6b0308e40bbeac9dc6094be1801000a0adbc44&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSKEMRP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDB%2Fn7D9M4inqKZnqRGne3mOv6jJliJmtNxHQsVChpbbwIgAWPhHXJ6OjP2JAAfAFRzZF7RgG3rjRfx6eouY%2Bz6MjAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLaEgY4MmC8OTDkuyCrcA6g4H00AlZWO4QVvBajZjCVLHyTSp9Gmb1DqHXm16IsgnfUc9H7%2BY6Jd1AA0yha7jprOe3YDOqZKp6auX0FdichOkekV%2B9aEpKaAEGGQ6%2BDPyhqA7GU9O6PZHku4skxyVp1xJcljXBMjawWfqHSpfal0KnirtPtZWyS6XNYaIrpMjTlyWVxUkRsItFVOzW%2BtJzQ78%2BeBG4nM0WCbKK%2FEADp0kEVGfdrwBwCgbgTXZIC%2FbR8SSfsXgx7%2FedeDcYOCHyEdrHkenyh1%2FfjbQEyf79Gwj%2BUKADkAqEvC9YDIHuTPRgWR5obLdVuWHKRByII8z%2F1XXRpfyVxWciRzqU0NITwb4UhmdjlTxcJ7Fvnk%2BCDO6xTqUP4JcDxAvZP9hkS6JsYMzNrTfoqdAo%2B9xJWmYWEa4RRuxfaPYV9f06xBmqBT5zjgXvWrp8gMeN%2FD3aJRCdn4s0qkBgF6n7EarvC728ULEGpYQPqdTz7aDKi7X94qbRWV2E1cH%2Fiftr0U%2BmXYtfnnjjh%2FICSS4bDV16SfQukbBkAlATgf9%2FCjuPZ2C1HaJFeZriGfW4ETdVVvMW8AEsehPoegSjDa%2Bgr9uz1beOcYhtkinEgugJ1xrvSPbfbtYi7jqM5XmsKGPnHxMKu1%2B8EGOqUBl%2Bf%2F8dW%2Fmsb29YIIlIXeHH%2BwNg4LTGKd2j1UFlxOTDptfflwzzUqgfVVVzuWZDthz2syS9pGchQ01z44jQMDOTZ9%2BwMlWKHUvcTV7qh5ASdX27nwdGPPazKg68CulMhfzkxIRbEXI7en6JW%2FH2HZ%2BgF%2Fw0GSZIiO39QcBIHYppQMHt7rL%2B1UVmvbxRw9P%2BVO9umCYcgFF0XLOimgChYjCLMcW2ia&X-Amz-Signature=da64301df53bd4acc32dc7b84b1e2b1f951fd36f317e3ee6525f27712148ee57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSKEMRP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDB%2Fn7D9M4inqKZnqRGne3mOv6jJliJmtNxHQsVChpbbwIgAWPhHXJ6OjP2JAAfAFRzZF7RgG3rjRfx6eouY%2Bz6MjAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLaEgY4MmC8OTDkuyCrcA6g4H00AlZWO4QVvBajZjCVLHyTSp9Gmb1DqHXm16IsgnfUc9H7%2BY6Jd1AA0yha7jprOe3YDOqZKp6auX0FdichOkekV%2B9aEpKaAEGGQ6%2BDPyhqA7GU9O6PZHku4skxyVp1xJcljXBMjawWfqHSpfal0KnirtPtZWyS6XNYaIrpMjTlyWVxUkRsItFVOzW%2BtJzQ78%2BeBG4nM0WCbKK%2FEADp0kEVGfdrwBwCgbgTXZIC%2FbR8SSfsXgx7%2FedeDcYOCHyEdrHkenyh1%2FfjbQEyf79Gwj%2BUKADkAqEvC9YDIHuTPRgWR5obLdVuWHKRByII8z%2F1XXRpfyVxWciRzqU0NITwb4UhmdjlTxcJ7Fvnk%2BCDO6xTqUP4JcDxAvZP9hkS6JsYMzNrTfoqdAo%2B9xJWmYWEa4RRuxfaPYV9f06xBmqBT5zjgXvWrp8gMeN%2FD3aJRCdn4s0qkBgF6n7EarvC728ULEGpYQPqdTz7aDKi7X94qbRWV2E1cH%2Fiftr0U%2BmXYtfnnjjh%2FICSS4bDV16SfQukbBkAlATgf9%2FCjuPZ2C1HaJFeZriGfW4ETdVVvMW8AEsehPoegSjDa%2Bgr9uz1beOcYhtkinEgugJ1xrvSPbfbtYi7jqM5XmsKGPnHxMKu1%2B8EGOqUBl%2Bf%2F8dW%2Fmsb29YIIlIXeHH%2BwNg4LTGKd2j1UFlxOTDptfflwzzUqgfVVVzuWZDthz2syS9pGchQ01z44jQMDOTZ9%2BwMlWKHUvcTV7qh5ASdX27nwdGPPazKg68CulMhfzkxIRbEXI7en6JW%2FH2HZ%2BgF%2Fw0GSZIiO39QcBIHYppQMHt7rL%2B1UVmvbxRw9P%2BVO9umCYcgFF0XLOimgChYjCLMcW2ia&X-Amz-Signature=dd6b22b2e71b796e9514fb2bb5970750b1bedb1e9118e66c3396eaf9eed63ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
