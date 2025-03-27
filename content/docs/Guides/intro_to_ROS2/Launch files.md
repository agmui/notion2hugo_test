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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYRZYKL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpFuVDgBjCORu%2FvbKwis5yKWvSdqOd7rU6Xditxfx0mQIgeJbmzxOMMjXdZQYTtnCFY6xxs%2BiWj9mc5I1jJwqiP3cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIalEOKugFM45DPc%2BircA01M90RmCjTnPx2xBeLP%2Bw%2FLq6vTzfMjsipi6x3e8CfA2zV%2FdkUM68QuSzM0lmL1rbgcdZSAw3Ys5pRjYAT%2B4WcJM3RQ5A83oZiTzhvSYDQ1R6NKywenspRbPjsCfa8ZgOlByLurOoorQpsuJGRDUPbmV1KQlgC5dLywZuH6u4y0%2BUr2mLF1G%2B1LbeNwjILOzWBCn9fUOtxJXaKuFbqZCQFr%2BeRTLRnfotHTmGPc5y4Ej6l208Ekzv6VO4xrSvZVPZBD4rBUCaq%2BwEb5cBEKClM0Cf%2BEZVCcp9Errah9HMkxXQTg16JiLGqMQ0CDk7D6F2UjblDc1D56fN4q9YJD88aKELsrhqq7fqjsMM9%2BpFm%2FFm9Eji%2FhQkJkuznVZSb0QXQfFyQPZzFQkHjKX1yMTGeoPNruevaOSez%2BUOZEZFOlSq5uLp2kONrsWuDpAWLQDxBAGb%2FJhvlpHhq%2B%2Fwvh%2BCG552jej5czVT2SXMD08vXcBWbxA4Wc%2FwweApRFaDizNvn%2BwilKy%2FxDwCuS8nFPSfDoTXIGLs9joiPvZgqefMHuMwKYmPqI%2FWR3%2FBBgc%2BFGbUtl7zTeyIFByEcB46s8PTqyIUDrQNIDT4Ob0w2k6paIxgkBlO2a%2F84KDr91MPqJk78GOqUBtI9D2UK2yWjWbq9k9WtQnS4C2ItvnnJrULFbcliWLASSnPP5p27MUwSQtligI0waBpZG7sd%2FThZ5yIp9YKhEXz6HsI0xLODOLoXlEj2V0QkYKrwzoAq49F%2FAX8loBFhDYZwSK94FFdRiiX5%2BGPFhiN28ylve%2BlZg49KUl02OzPAwkfbvcGA4iOMiSWGpt7vFpV2JH1OAec9IymdSRKfBCSkZGBtj&X-Amz-Signature=2ac399f4eb95113b099f0b8bc707811ba679a53871a598e6be78b718a90f5489&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYRZYKL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpFuVDgBjCORu%2FvbKwis5yKWvSdqOd7rU6Xditxfx0mQIgeJbmzxOMMjXdZQYTtnCFY6xxs%2BiWj9mc5I1jJwqiP3cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIalEOKugFM45DPc%2BircA01M90RmCjTnPx2xBeLP%2Bw%2FLq6vTzfMjsipi6x3e8CfA2zV%2FdkUM68QuSzM0lmL1rbgcdZSAw3Ys5pRjYAT%2B4WcJM3RQ5A83oZiTzhvSYDQ1R6NKywenspRbPjsCfa8ZgOlByLurOoorQpsuJGRDUPbmV1KQlgC5dLywZuH6u4y0%2BUr2mLF1G%2B1LbeNwjILOzWBCn9fUOtxJXaKuFbqZCQFr%2BeRTLRnfotHTmGPc5y4Ej6l208Ekzv6VO4xrSvZVPZBD4rBUCaq%2BwEb5cBEKClM0Cf%2BEZVCcp9Errah9HMkxXQTg16JiLGqMQ0CDk7D6F2UjblDc1D56fN4q9YJD88aKELsrhqq7fqjsMM9%2BpFm%2FFm9Eji%2FhQkJkuznVZSb0QXQfFyQPZzFQkHjKX1yMTGeoPNruevaOSez%2BUOZEZFOlSq5uLp2kONrsWuDpAWLQDxBAGb%2FJhvlpHhq%2B%2Fwvh%2BCG552jej5czVT2SXMD08vXcBWbxA4Wc%2FwweApRFaDizNvn%2BwilKy%2FxDwCuS8nFPSfDoTXIGLs9joiPvZgqefMHuMwKYmPqI%2FWR3%2FBBgc%2BFGbUtl7zTeyIFByEcB46s8PTqyIUDrQNIDT4Ob0w2k6paIxgkBlO2a%2F84KDr91MPqJk78GOqUBtI9D2UK2yWjWbq9k9WtQnS4C2ItvnnJrULFbcliWLASSnPP5p27MUwSQtligI0waBpZG7sd%2FThZ5yIp9YKhEXz6HsI0xLODOLoXlEj2V0QkYKrwzoAq49F%2FAX8loBFhDYZwSK94FFdRiiX5%2BGPFhiN28ylve%2BlZg49KUl02OzPAwkfbvcGA4iOMiSWGpt7vFpV2JH1OAec9IymdSRKfBCSkZGBtj&X-Amz-Signature=7a3d9bcb5143f73119818b5b52e95ee88091d81600670da941cbb24c2fe7f6f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYRZYKL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpFuVDgBjCORu%2FvbKwis5yKWvSdqOd7rU6Xditxfx0mQIgeJbmzxOMMjXdZQYTtnCFY6xxs%2BiWj9mc5I1jJwqiP3cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIalEOKugFM45DPc%2BircA01M90RmCjTnPx2xBeLP%2Bw%2FLq6vTzfMjsipi6x3e8CfA2zV%2FdkUM68QuSzM0lmL1rbgcdZSAw3Ys5pRjYAT%2B4WcJM3RQ5A83oZiTzhvSYDQ1R6NKywenspRbPjsCfa8ZgOlByLurOoorQpsuJGRDUPbmV1KQlgC5dLywZuH6u4y0%2BUr2mLF1G%2B1LbeNwjILOzWBCn9fUOtxJXaKuFbqZCQFr%2BeRTLRnfotHTmGPc5y4Ej6l208Ekzv6VO4xrSvZVPZBD4rBUCaq%2BwEb5cBEKClM0Cf%2BEZVCcp9Errah9HMkxXQTg16JiLGqMQ0CDk7D6F2UjblDc1D56fN4q9YJD88aKELsrhqq7fqjsMM9%2BpFm%2FFm9Eji%2FhQkJkuznVZSb0QXQfFyQPZzFQkHjKX1yMTGeoPNruevaOSez%2BUOZEZFOlSq5uLp2kONrsWuDpAWLQDxBAGb%2FJhvlpHhq%2B%2Fwvh%2BCG552jej5czVT2SXMD08vXcBWbxA4Wc%2FwweApRFaDizNvn%2BwilKy%2FxDwCuS8nFPSfDoTXIGLs9joiPvZgqefMHuMwKYmPqI%2FWR3%2FBBgc%2BFGbUtl7zTeyIFByEcB46s8PTqyIUDrQNIDT4Ob0w2k6paIxgkBlO2a%2F84KDr91MPqJk78GOqUBtI9D2UK2yWjWbq9k9WtQnS4C2ItvnnJrULFbcliWLASSnPP5p27MUwSQtligI0waBpZG7sd%2FThZ5yIp9YKhEXz6HsI0xLODOLoXlEj2V0QkYKrwzoAq49F%2FAX8loBFhDYZwSK94FFdRiiX5%2BGPFhiN28ylve%2BlZg49KUl02OzPAwkfbvcGA4iOMiSWGpt7vFpV2JH1OAec9IymdSRKfBCSkZGBtj&X-Amz-Signature=c4374c8378ed54bc298b646cc501bcf0eaca8f86f1fe96be888ba7f0e3860ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
