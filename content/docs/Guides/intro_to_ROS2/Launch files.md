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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIUBHEY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6MJ90Zro0ckdGx69kT8au20vin4nFOPqUmla9zCmEQAIhALpBWCGLyMQ63W5xFmBGR5tAu3p8ZvdEO%2BDCUyywz%2FtcKv8DCBsQABoMNjM3NDIzMTgzODA1IgzUdb15tJoZ22l%2FXNYq3AMPI4hJcHXurxrndu7HS%2BPeIij09EWNtJys9iNpSwTjbXB%2BPg%2BTqsNZJ6hqSt4Gcec8yklwG2ywj%2BADot5SIqpXQDNYlR70ZksoSWZT5dxwaagbfEzTkAdSaSQqh6Vf2szfjbG7YXeRz8gteQruSYpuPV1F0JsRk6yfjnzI2ufeyGiRjfb8dN5uPxjZ84bKPUKh9bNkL6A6l%2FwZ3fnRENfqvQGdXATRNfZTFk5mAsXWnEbipQQrMT8w2E4hiv4qgzQlhx2%2F9FADrkwu4MKzmZyF0l6wRAlbhNso1V%2FVCwmvj%2FReeFHkze4OkXxF3xHmw%2FlLHlUpwZKkHmamQZIt9khsrt94zQpljdZSlhO8pxUHruQMJqeyqf7b7FEI1rm7n7TnirTToDIGTwpNQUfj9bcLmQiNi2Xk96Fwx63UimBvcbyeo5HMZNU0n50MbAZIeXwgl4XshakKKTpKOFs5tHhRG30RlxPglBtPMsh71%2BAmSAgUZFzXfN7gLbtckOLYctR7r4Zdwe5zJ5Z5zHnrTKr8HYgxlXygEeJ81W4X%2Bxf9BuZUGEgirWuGFjOgIkDch65rFuvHBPxrruU49YTCpI2BkzQf2yBMJ4PF9kwMbRAZoez6U%2BkzZy90nSsu1jCw5s%2FDBjqkASv0sSDsaN5bW1Aa8mCVNldadzdDRanFx8T4SWW%2FbQkVLPynl%2BK%2ByRLUrohVOwD9qhmy4Y6IQI%2BbXDirxBJDUnC1mdNe6fgWjF8kzfNdT3H2%2FXt2W%2FPPsKBQHel%2BAqos6K51CbXlcMSxAsnhypBTMfrinRGL%2BMDaMF9Seu3%2FJbbwGjG3LlzL7fKF7A3O0h1%2BWlzNyZ8%2BXgY3%2BSBUOZ0ll4rugaIt&X-Amz-Signature=3ae56e0ec11a1381230b928955ecc7266442e5f4ab752d04028d3d18ed5e0597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIUBHEY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6MJ90Zro0ckdGx69kT8au20vin4nFOPqUmla9zCmEQAIhALpBWCGLyMQ63W5xFmBGR5tAu3p8ZvdEO%2BDCUyywz%2FtcKv8DCBsQABoMNjM3NDIzMTgzODA1IgzUdb15tJoZ22l%2FXNYq3AMPI4hJcHXurxrndu7HS%2BPeIij09EWNtJys9iNpSwTjbXB%2BPg%2BTqsNZJ6hqSt4Gcec8yklwG2ywj%2BADot5SIqpXQDNYlR70ZksoSWZT5dxwaagbfEzTkAdSaSQqh6Vf2szfjbG7YXeRz8gteQruSYpuPV1F0JsRk6yfjnzI2ufeyGiRjfb8dN5uPxjZ84bKPUKh9bNkL6A6l%2FwZ3fnRENfqvQGdXATRNfZTFk5mAsXWnEbipQQrMT8w2E4hiv4qgzQlhx2%2F9FADrkwu4MKzmZyF0l6wRAlbhNso1V%2FVCwmvj%2FReeFHkze4OkXxF3xHmw%2FlLHlUpwZKkHmamQZIt9khsrt94zQpljdZSlhO8pxUHruQMJqeyqf7b7FEI1rm7n7TnirTToDIGTwpNQUfj9bcLmQiNi2Xk96Fwx63UimBvcbyeo5HMZNU0n50MbAZIeXwgl4XshakKKTpKOFs5tHhRG30RlxPglBtPMsh71%2BAmSAgUZFzXfN7gLbtckOLYctR7r4Zdwe5zJ5Z5zHnrTKr8HYgxlXygEeJ81W4X%2Bxf9BuZUGEgirWuGFjOgIkDch65rFuvHBPxrruU49YTCpI2BkzQf2yBMJ4PF9kwMbRAZoez6U%2BkzZy90nSsu1jCw5s%2FDBjqkASv0sSDsaN5bW1Aa8mCVNldadzdDRanFx8T4SWW%2FbQkVLPynl%2BK%2ByRLUrohVOwD9qhmy4Y6IQI%2BbXDirxBJDUnC1mdNe6fgWjF8kzfNdT3H2%2FXt2W%2FPPsKBQHel%2BAqos6K51CbXlcMSxAsnhypBTMfrinRGL%2BMDaMF9Seu3%2FJbbwGjG3LlzL7fKF7A3O0h1%2BWlzNyZ8%2BXgY3%2BSBUOZ0ll4rugaIt&X-Amz-Signature=04219ef3ad21b18ff41a6f8462a0ebf8f730937a671b55d8f56864873f93bac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIUBHEY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6MJ90Zro0ckdGx69kT8au20vin4nFOPqUmla9zCmEQAIhALpBWCGLyMQ63W5xFmBGR5tAu3p8ZvdEO%2BDCUyywz%2FtcKv8DCBsQABoMNjM3NDIzMTgzODA1IgzUdb15tJoZ22l%2FXNYq3AMPI4hJcHXurxrndu7HS%2BPeIij09EWNtJys9iNpSwTjbXB%2BPg%2BTqsNZJ6hqSt4Gcec8yklwG2ywj%2BADot5SIqpXQDNYlR70ZksoSWZT5dxwaagbfEzTkAdSaSQqh6Vf2szfjbG7YXeRz8gteQruSYpuPV1F0JsRk6yfjnzI2ufeyGiRjfb8dN5uPxjZ84bKPUKh9bNkL6A6l%2FwZ3fnRENfqvQGdXATRNfZTFk5mAsXWnEbipQQrMT8w2E4hiv4qgzQlhx2%2F9FADrkwu4MKzmZyF0l6wRAlbhNso1V%2FVCwmvj%2FReeFHkze4OkXxF3xHmw%2FlLHlUpwZKkHmamQZIt9khsrt94zQpljdZSlhO8pxUHruQMJqeyqf7b7FEI1rm7n7TnirTToDIGTwpNQUfj9bcLmQiNi2Xk96Fwx63UimBvcbyeo5HMZNU0n50MbAZIeXwgl4XshakKKTpKOFs5tHhRG30RlxPglBtPMsh71%2BAmSAgUZFzXfN7gLbtckOLYctR7r4Zdwe5zJ5Z5zHnrTKr8HYgxlXygEeJ81W4X%2Bxf9BuZUGEgirWuGFjOgIkDch65rFuvHBPxrruU49YTCpI2BkzQf2yBMJ4PF9kwMbRAZoez6U%2BkzZy90nSsu1jCw5s%2FDBjqkASv0sSDsaN5bW1Aa8mCVNldadzdDRanFx8T4SWW%2FbQkVLPynl%2BK%2ByRLUrohVOwD9qhmy4Y6IQI%2BbXDirxBJDUnC1mdNe6fgWjF8kzfNdT3H2%2FXt2W%2FPPsKBQHel%2BAqos6K51CbXlcMSxAsnhypBTMfrinRGL%2BMDaMF9Seu3%2FJbbwGjG3LlzL7fKF7A3O0h1%2BWlzNyZ8%2BXgY3%2BSBUOZ0ll4rugaIt&X-Amz-Signature=5fe70169895c71e36b66d5c7e911451cc896183eab37d6e18d47ec1686131fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
