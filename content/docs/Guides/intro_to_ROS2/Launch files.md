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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEBBMNE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDECKqSOmOQcd6D5wH1dI2%2FaOIVwiBlKySYBhKHLirdSgIhAMBZ0qN9qQGUiFZyC2QTikrlfy%2BQykq5M6O8hJ4TXwDXKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77%2FWcrTvYTXgV6x4q3ANcC4H%2FryHKu3RA%2FjnIT3qXHkf5ZRos2JDjSeMaWrmsQH1TnKMwLHYlX5P8bnqhPZfOTwz1LupoT7kVv422gCrhynhvPmU7XbzZVKE5aW1P5mdIL2jsMOICXKoHOUYTgrpMy0Bf%2BzmJ20lqD%2Fm3BOCMNw8CTQ%2BeNVYc2ehcPMC9zGHUPyBl1SvT3yp2RuhEM%2B%2F7agOMap1w3RcqabKxw%2BHVpj2UtsKNi3e0j529bImPAoYis2te9eHeQw253ddQl%2FI51I6tWLlpWiQDgKNpoMoUabI8YTJaxZScUQqLhxeMUDEl2UfE5%2Fx7eMt5l%2BePJMkMiNfuNrwSUQGBPSJD8ZlcmnpZmh5bwL6zWz3qduteeI092oajnHsB7uLnLy3ONqqq28kCHaplzx%2BR5LN7v3DNnPROanE%2FtFhIcB4j6kw%2FTFtQbB%2BzeONJw%2Bfx8hwQ8RsMBwQqHqelQV%2Bj5%2FJh8Edrc9Xk2ncYiJLu6tp%2F41Hkhl%2BnENypWydMTKa9%2BckbdCr16j%2B0ClohTq8EHzeWCRuI%2F9TARTxboZRQXvU1r1hzoFNX%2BNvMXBnmpxPL%2BkmiTQqlOOq92ETscRFHK2s%2FDezDpRefDPz90dgI5RI8xkpvbWNL8EFmQRh2WMjUCjCEqN7CBjqkAf1tcrhXkqcNGgxY7EXiHrUQFjjsBSplEmhtXVG4cSuphh7b1PywMldmriUlYpsIF1twCCUnt9RHUvWvj2lQfHa4S1Ox5wZdarF0iV%2FlKnZMLVZ7ph%2B%2FFMqvXrJjTdv7rpNDvdWotxgpMgv3pTN4B7v0LckPN4P622DjPXpHn7wiXNDtogqeSEtYVFeEgkeHnJwD1av%2B9jfGXIAF1e8ESthWXN6C&X-Amz-Signature=3e2b3e5a48968768f60de03d3869d96524661ac5b17a131c9a804e1e00b48ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEBBMNE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDECKqSOmOQcd6D5wH1dI2%2FaOIVwiBlKySYBhKHLirdSgIhAMBZ0qN9qQGUiFZyC2QTikrlfy%2BQykq5M6O8hJ4TXwDXKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77%2FWcrTvYTXgV6x4q3ANcC4H%2FryHKu3RA%2FjnIT3qXHkf5ZRos2JDjSeMaWrmsQH1TnKMwLHYlX5P8bnqhPZfOTwz1LupoT7kVv422gCrhynhvPmU7XbzZVKE5aW1P5mdIL2jsMOICXKoHOUYTgrpMy0Bf%2BzmJ20lqD%2Fm3BOCMNw8CTQ%2BeNVYc2ehcPMC9zGHUPyBl1SvT3yp2RuhEM%2B%2F7agOMap1w3RcqabKxw%2BHVpj2UtsKNi3e0j529bImPAoYis2te9eHeQw253ddQl%2FI51I6tWLlpWiQDgKNpoMoUabI8YTJaxZScUQqLhxeMUDEl2UfE5%2Fx7eMt5l%2BePJMkMiNfuNrwSUQGBPSJD8ZlcmnpZmh5bwL6zWz3qduteeI092oajnHsB7uLnLy3ONqqq28kCHaplzx%2BR5LN7v3DNnPROanE%2FtFhIcB4j6kw%2FTFtQbB%2BzeONJw%2Bfx8hwQ8RsMBwQqHqelQV%2Bj5%2FJh8Edrc9Xk2ncYiJLu6tp%2F41Hkhl%2BnENypWydMTKa9%2BckbdCr16j%2B0ClohTq8EHzeWCRuI%2F9TARTxboZRQXvU1r1hzoFNX%2BNvMXBnmpxPL%2BkmiTQqlOOq92ETscRFHK2s%2FDezDpRefDPz90dgI5RI8xkpvbWNL8EFmQRh2WMjUCjCEqN7CBjqkAf1tcrhXkqcNGgxY7EXiHrUQFjjsBSplEmhtXVG4cSuphh7b1PywMldmriUlYpsIF1twCCUnt9RHUvWvj2lQfHa4S1Ox5wZdarF0iV%2FlKnZMLVZ7ph%2B%2FFMqvXrJjTdv7rpNDvdWotxgpMgv3pTN4B7v0LckPN4P622DjPXpHn7wiXNDtogqeSEtYVFeEgkeHnJwD1av%2B9jfGXIAF1e8ESthWXN6C&X-Amz-Signature=0c6631e8d535f2f96edd1b63a61527320f7ef520c2c710236989acdc482ee2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEBBMNE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDECKqSOmOQcd6D5wH1dI2%2FaOIVwiBlKySYBhKHLirdSgIhAMBZ0qN9qQGUiFZyC2QTikrlfy%2BQykq5M6O8hJ4TXwDXKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77%2FWcrTvYTXgV6x4q3ANcC4H%2FryHKu3RA%2FjnIT3qXHkf5ZRos2JDjSeMaWrmsQH1TnKMwLHYlX5P8bnqhPZfOTwz1LupoT7kVv422gCrhynhvPmU7XbzZVKE5aW1P5mdIL2jsMOICXKoHOUYTgrpMy0Bf%2BzmJ20lqD%2Fm3BOCMNw8CTQ%2BeNVYc2ehcPMC9zGHUPyBl1SvT3yp2RuhEM%2B%2F7agOMap1w3RcqabKxw%2BHVpj2UtsKNi3e0j529bImPAoYis2te9eHeQw253ddQl%2FI51I6tWLlpWiQDgKNpoMoUabI8YTJaxZScUQqLhxeMUDEl2UfE5%2Fx7eMt5l%2BePJMkMiNfuNrwSUQGBPSJD8ZlcmnpZmh5bwL6zWz3qduteeI092oajnHsB7uLnLy3ONqqq28kCHaplzx%2BR5LN7v3DNnPROanE%2FtFhIcB4j6kw%2FTFtQbB%2BzeONJw%2Bfx8hwQ8RsMBwQqHqelQV%2Bj5%2FJh8Edrc9Xk2ncYiJLu6tp%2F41Hkhl%2BnENypWydMTKa9%2BckbdCr16j%2B0ClohTq8EHzeWCRuI%2F9TARTxboZRQXvU1r1hzoFNX%2BNvMXBnmpxPL%2BkmiTQqlOOq92ETscRFHK2s%2FDezDpRefDPz90dgI5RI8xkpvbWNL8EFmQRh2WMjUCjCEqN7CBjqkAf1tcrhXkqcNGgxY7EXiHrUQFjjsBSplEmhtXVG4cSuphh7b1PywMldmriUlYpsIF1twCCUnt9RHUvWvj2lQfHa4S1Ox5wZdarF0iV%2FlKnZMLVZ7ph%2B%2FFMqvXrJjTdv7rpNDvdWotxgpMgv3pTN4B7v0LckPN4P622DjPXpHn7wiXNDtogqeSEtYVFeEgkeHnJwD1av%2B9jfGXIAF1e8ESthWXN6C&X-Amz-Signature=5c528e4b8df05aa5f18f2e233dbd8f83819bfb514341c5615be45fdf3bae655a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
