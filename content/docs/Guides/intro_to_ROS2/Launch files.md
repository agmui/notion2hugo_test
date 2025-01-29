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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GCTC46%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXzP63ZWyhDY10c929Tfrw0Py4NTBTSv%2BtHlLUdGSGlgIhAOYCfP8nH686dYWzckpMp4jhHOmLzsN0hyYhAMhM6kxyKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLjPjUpQEgzNE4j7gq3AOtlMsMhEaPOuNCH%2F%2F12ZujGM%2BjRrJ4Q4jM68RRdVNtLOW7zenjuYCsFWhS2QbG%2BdyOuJ1Vsn%2FnRre%2FjNCZ3x86%2BxSFFipaw7hJekobjVgFijVCg41hKUXdI4CuGeiQe5sV1ksmz5%2FNZb5bCsIH4QrHbGkKvFKupaVh3xwGdP8mdBn%2FvN%2FwH4knJMzjQ03pIoY7CO%2FOmRvjFK1KOSAZGIEy5W%2F4JwYreN%2F7EUfof7NZBZJ6JyV7Y%2B30OPVNGWtizCuUHowDFYGvi3fWSWdV9b4RjKULyXDyBeUMaSXcjHWved4Fw6zFRnm52P9TVTUR9424grp%2Fcl%2BCiGtw1ltlCZZZjPrAHMacOiaM1w%2F5KycBtJqXNwyIMynfmHir9KSjVHDmwaCu%2BIp9AR4EeFgCA8q44YF%2FvJpznHBq9XqhGEbSjR1lALQ434izarxzdHzQDKptW%2BvYJZ4vKefsb%2B7pCSPkziXmVWuRCf4eyg%2BRTjYs%2BMEeGfW%2BKZg0BLhCZiH%2FITxVG%2BQsswsp4S%2BYWlBxGPv3uO5sSdw6EO1Xc9IDV2S%2BY8AH%2B30oyMGIGS0ewPdvg7YCbgmLgHdri1ouE08AQVg8w2b9H5glhrXtT%2FCnLsGYfTQ0jzof9dx5PsFLsjCq5ee8BjqkAZGrimN2fGoXUa3MCIRHHcRAdRxnUZ8YM8LZYaRHsed1gw8vGbC4t4Nu8OQG9E64OZcUBf7kSz%2F%2BpCnQtjTqWRxU%2BE6CLK66qFokpFwL3JTb2RZY%2FB%2F3NnKQYKgPrhEgjxFxaDDPQ5dcQnsTpmHemLMGohHIbgL958AOpA%2BzeX6gc9%2FKr11AgtQ3KN%2Fqsaxu%2Fg0eis5%2F%2BRggCaFPMZ18DiyVphCc&X-Amz-Signature=784922c3265df83399b2b8b0d99e7a5d2813b14161a7fd29b4ed8d1e8e1dfdff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GCTC46%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXzP63ZWyhDY10c929Tfrw0Py4NTBTSv%2BtHlLUdGSGlgIhAOYCfP8nH686dYWzckpMp4jhHOmLzsN0hyYhAMhM6kxyKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLjPjUpQEgzNE4j7gq3AOtlMsMhEaPOuNCH%2F%2F12ZujGM%2BjRrJ4Q4jM68RRdVNtLOW7zenjuYCsFWhS2QbG%2BdyOuJ1Vsn%2FnRre%2FjNCZ3x86%2BxSFFipaw7hJekobjVgFijVCg41hKUXdI4CuGeiQe5sV1ksmz5%2FNZb5bCsIH4QrHbGkKvFKupaVh3xwGdP8mdBn%2FvN%2FwH4knJMzjQ03pIoY7CO%2FOmRvjFK1KOSAZGIEy5W%2F4JwYreN%2F7EUfof7NZBZJ6JyV7Y%2B30OPVNGWtizCuUHowDFYGvi3fWSWdV9b4RjKULyXDyBeUMaSXcjHWved4Fw6zFRnm52P9TVTUR9424grp%2Fcl%2BCiGtw1ltlCZZZjPrAHMacOiaM1w%2F5KycBtJqXNwyIMynfmHir9KSjVHDmwaCu%2BIp9AR4EeFgCA8q44YF%2FvJpznHBq9XqhGEbSjR1lALQ434izarxzdHzQDKptW%2BvYJZ4vKefsb%2B7pCSPkziXmVWuRCf4eyg%2BRTjYs%2BMEeGfW%2BKZg0BLhCZiH%2FITxVG%2BQsswsp4S%2BYWlBxGPv3uO5sSdw6EO1Xc9IDV2S%2BY8AH%2B30oyMGIGS0ewPdvg7YCbgmLgHdri1ouE08AQVg8w2b9H5glhrXtT%2FCnLsGYfTQ0jzof9dx5PsFLsjCq5ee8BjqkAZGrimN2fGoXUa3MCIRHHcRAdRxnUZ8YM8LZYaRHsed1gw8vGbC4t4Nu8OQG9E64OZcUBf7kSz%2F%2BpCnQtjTqWRxU%2BE6CLK66qFokpFwL3JTb2RZY%2FB%2F3NnKQYKgPrhEgjxFxaDDPQ5dcQnsTpmHemLMGohHIbgL958AOpA%2BzeX6gc9%2FKr11AgtQ3KN%2Fqsaxu%2Fg0eis5%2F%2BRggCaFPMZ18DiyVphCc&X-Amz-Signature=b40145f9e24534274714eaf267b49397c11e9da087361be25d4fd8b1e8b12ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GCTC46%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXzP63ZWyhDY10c929Tfrw0Py4NTBTSv%2BtHlLUdGSGlgIhAOYCfP8nH686dYWzckpMp4jhHOmLzsN0hyYhAMhM6kxyKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLjPjUpQEgzNE4j7gq3AOtlMsMhEaPOuNCH%2F%2F12ZujGM%2BjRrJ4Q4jM68RRdVNtLOW7zenjuYCsFWhS2QbG%2BdyOuJ1Vsn%2FnRre%2FjNCZ3x86%2BxSFFipaw7hJekobjVgFijVCg41hKUXdI4CuGeiQe5sV1ksmz5%2FNZb5bCsIH4QrHbGkKvFKupaVh3xwGdP8mdBn%2FvN%2FwH4knJMzjQ03pIoY7CO%2FOmRvjFK1KOSAZGIEy5W%2F4JwYreN%2F7EUfof7NZBZJ6JyV7Y%2B30OPVNGWtizCuUHowDFYGvi3fWSWdV9b4RjKULyXDyBeUMaSXcjHWved4Fw6zFRnm52P9TVTUR9424grp%2Fcl%2BCiGtw1ltlCZZZjPrAHMacOiaM1w%2F5KycBtJqXNwyIMynfmHir9KSjVHDmwaCu%2BIp9AR4EeFgCA8q44YF%2FvJpznHBq9XqhGEbSjR1lALQ434izarxzdHzQDKptW%2BvYJZ4vKefsb%2B7pCSPkziXmVWuRCf4eyg%2BRTjYs%2BMEeGfW%2BKZg0BLhCZiH%2FITxVG%2BQsswsp4S%2BYWlBxGPv3uO5sSdw6EO1Xc9IDV2S%2BY8AH%2B30oyMGIGS0ewPdvg7YCbgmLgHdri1ouE08AQVg8w2b9H5glhrXtT%2FCnLsGYfTQ0jzof9dx5PsFLsjCq5ee8BjqkAZGrimN2fGoXUa3MCIRHHcRAdRxnUZ8YM8LZYaRHsed1gw8vGbC4t4Nu8OQG9E64OZcUBf7kSz%2F%2BpCnQtjTqWRxU%2BE6CLK66qFokpFwL3JTb2RZY%2FB%2F3NnKQYKgPrhEgjxFxaDDPQ5dcQnsTpmHemLMGohHIbgL958AOpA%2BzeX6gc9%2FKr11AgtQ3KN%2Fqsaxu%2Fg0eis5%2F%2BRggCaFPMZ18DiyVphCc&X-Amz-Signature=001bfeb3cf8b07e5f16c7e6d4fde70173307a4756214de3c4ab525b60577eb69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
