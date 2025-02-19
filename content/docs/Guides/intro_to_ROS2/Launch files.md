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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WD4M34M%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKs8bJJy51V8v1X%2F%2F35Wx5D6FgrvEipW8TZA4keOSt7AiAnAEOj%2BEKDezS6pvtfepiWm3Mp%2F4d5YEgrpGuXFxfieSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVALdysCyFc5Lx%2BIrKtwDKw1eh9%2FL8vlJHuRGeoS7EuNRF8mpMb4L%2BsPtdDWKlUmO0ZkMwPdut7VSpsPM49J2WCESbpL2ysPqqQRmMApuSGYKd9wvT5o%2F1NcRRN9Yo4cDLywq83%2F3RP3OJpDmO1ZLXZ3grgW8eKAbSIzRVnIFeLLoed34iFf6F58SWoP5gzX4cSJcJPn8BVEaimkHSg9Omp4xlU3db5BlLilaKs3AdsMUIdIPPCjHCnrs%2BGNPVchdGAuPN9FzrckIjk0Fj2UuO%2FuS%2B2e2UUIXQ34u%2FE0TMJ9dKvP44hlNNhpEXlUGCDVFAaBbnonn4Tdvx%2BhSQZDvDtVIEOJb8wc67TfGZ3xqsaHthPz5m5xtw4ZawUe7X62Mrf21IC7ddkI9lsaKB8mjhoWMcE7mFhPldDshh2Kr%2Bgdg0nRXoU66MtTp98W%2FwXBuEuSItIsRt34bhWg51TB8YI9JvNTvvIMcxtQ2BnO7%2FFAGUOuL7GhTnCP3TSG6pv7IR%2BWqPQXueIg3AdN048vYVzOb4hXMH9PzBKtXjoU95lE4dhh8OvqpxRgXl3nBQFC34OoHPXTIjSuDcm9CEzHW4bnRhzEcyczB%2FwCBddhMic3F42%2F7IcyHowUBToN76sENMgFoTfnrFbF5cs0wp7XYvQY6pgHwokEBJ%2F9Qp5rht6UOkDEYf2O8yEXT0SAtwc6NYgmzzQOJ%2FRoPHDs798TpUwRXipFE5UX2zTAJijCnBxurcp2sqBSXetA9KXVkHZqHsOZVAmWGcXADxsQrtGonjzEzclvUVgqzufXDXd3N3vldS5a0zJFCMAfedqPxIEvW6tj7B%2Fc1Y3HMsyYmi%2F3StJ2ADCS7aQEyQQNYuwfWwGBc2FE9Pt2Ya1Ft&X-Amz-Signature=c5a4f9bf62faa69abd2144a6c507e523548bd80acd4927fa08eed17b7f734d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WD4M34M%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKs8bJJy51V8v1X%2F%2F35Wx5D6FgrvEipW8TZA4keOSt7AiAnAEOj%2BEKDezS6pvtfepiWm3Mp%2F4d5YEgrpGuXFxfieSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVALdysCyFc5Lx%2BIrKtwDKw1eh9%2FL8vlJHuRGeoS7EuNRF8mpMb4L%2BsPtdDWKlUmO0ZkMwPdut7VSpsPM49J2WCESbpL2ysPqqQRmMApuSGYKd9wvT5o%2F1NcRRN9Yo4cDLywq83%2F3RP3OJpDmO1ZLXZ3grgW8eKAbSIzRVnIFeLLoed34iFf6F58SWoP5gzX4cSJcJPn8BVEaimkHSg9Omp4xlU3db5BlLilaKs3AdsMUIdIPPCjHCnrs%2BGNPVchdGAuPN9FzrckIjk0Fj2UuO%2FuS%2B2e2UUIXQ34u%2FE0TMJ9dKvP44hlNNhpEXlUGCDVFAaBbnonn4Tdvx%2BhSQZDvDtVIEOJb8wc67TfGZ3xqsaHthPz5m5xtw4ZawUe7X62Mrf21IC7ddkI9lsaKB8mjhoWMcE7mFhPldDshh2Kr%2Bgdg0nRXoU66MtTp98W%2FwXBuEuSItIsRt34bhWg51TB8YI9JvNTvvIMcxtQ2BnO7%2FFAGUOuL7GhTnCP3TSG6pv7IR%2BWqPQXueIg3AdN048vYVzOb4hXMH9PzBKtXjoU95lE4dhh8OvqpxRgXl3nBQFC34OoHPXTIjSuDcm9CEzHW4bnRhzEcyczB%2FwCBddhMic3F42%2F7IcyHowUBToN76sENMgFoTfnrFbF5cs0wp7XYvQY6pgHwokEBJ%2F9Qp5rht6UOkDEYf2O8yEXT0SAtwc6NYgmzzQOJ%2FRoPHDs798TpUwRXipFE5UX2zTAJijCnBxurcp2sqBSXetA9KXVkHZqHsOZVAmWGcXADxsQrtGonjzEzclvUVgqzufXDXd3N3vldS5a0zJFCMAfedqPxIEvW6tj7B%2Fc1Y3HMsyYmi%2F3StJ2ADCS7aQEyQQNYuwfWwGBc2FE9Pt2Ya1Ft&X-Amz-Signature=4e772daf57fe6c708fdeca154b5d077babe78a31ab87cb48b3972ed4f8f07ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WD4M34M%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKs8bJJy51V8v1X%2F%2F35Wx5D6FgrvEipW8TZA4keOSt7AiAnAEOj%2BEKDezS6pvtfepiWm3Mp%2F4d5YEgrpGuXFxfieSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVALdysCyFc5Lx%2BIrKtwDKw1eh9%2FL8vlJHuRGeoS7EuNRF8mpMb4L%2BsPtdDWKlUmO0ZkMwPdut7VSpsPM49J2WCESbpL2ysPqqQRmMApuSGYKd9wvT5o%2F1NcRRN9Yo4cDLywq83%2F3RP3OJpDmO1ZLXZ3grgW8eKAbSIzRVnIFeLLoed34iFf6F58SWoP5gzX4cSJcJPn8BVEaimkHSg9Omp4xlU3db5BlLilaKs3AdsMUIdIPPCjHCnrs%2BGNPVchdGAuPN9FzrckIjk0Fj2UuO%2FuS%2B2e2UUIXQ34u%2FE0TMJ9dKvP44hlNNhpEXlUGCDVFAaBbnonn4Tdvx%2BhSQZDvDtVIEOJb8wc67TfGZ3xqsaHthPz5m5xtw4ZawUe7X62Mrf21IC7ddkI9lsaKB8mjhoWMcE7mFhPldDshh2Kr%2Bgdg0nRXoU66MtTp98W%2FwXBuEuSItIsRt34bhWg51TB8YI9JvNTvvIMcxtQ2BnO7%2FFAGUOuL7GhTnCP3TSG6pv7IR%2BWqPQXueIg3AdN048vYVzOb4hXMH9PzBKtXjoU95lE4dhh8OvqpxRgXl3nBQFC34OoHPXTIjSuDcm9CEzHW4bnRhzEcyczB%2FwCBddhMic3F42%2F7IcyHowUBToN76sENMgFoTfnrFbF5cs0wp7XYvQY6pgHwokEBJ%2F9Qp5rht6UOkDEYf2O8yEXT0SAtwc6NYgmzzQOJ%2FRoPHDs798TpUwRXipFE5UX2zTAJijCnBxurcp2sqBSXetA9KXVkHZqHsOZVAmWGcXADxsQrtGonjzEzclvUVgqzufXDXd3N3vldS5a0zJFCMAfedqPxIEvW6tj7B%2Fc1Y3HMsyYmi%2F3StJ2ADCS7aQEyQQNYuwfWwGBc2FE9Pt2Ya1Ft&X-Amz-Signature=a06719b874f26091c8d1da5c52ca6dcc97ac329da8078ce3c96c46f596bb8a50&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
