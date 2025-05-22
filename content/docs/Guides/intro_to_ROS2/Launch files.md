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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALZGLSH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvNpls9%2BsGxPm1L9Ze%2FlK%2Ff012Tnl%2BjbWu6OoifYx5%2FAiBREHNIXA2HTLUkefrLsBpGCtr0oQR%2BzAbtcG3mdkSXOiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKRp6e4wDqC%2BaEk0fKtwDoclfT3GlfROyivNH60pbzqf%2FQovRDYD%2FSrIrLGydfw0HZsjtESY2e86SBj3zGNzMmlStlPnAa8pvrRD8e%2BYc9J12JLl1F0w6PbLzN7OA3%2BLFp2idSUZpq%2FBFOmCXV1Q753kr0jT7OrSH9BystswC4KNAtZu31YAxlDTji3O0L75NT15i4sJjcXm8TIfRXHIJSVZ8A01rcaZw2j4G4dU31T9%2FlFOQWyitba1CUt9JnMYvW7Tfj0eIcWKAONhI1g4LlmejLIBK76BBdngZ3Qbyirlrw09B2dUgOL2hppXrekLVXhuuMs7HGno4G16LnDorl8wcyyuxGxxxJh9%2BhbpkRHH%2FhzK1EBvmUGnz3Lp7%2BfirW4qRdpUsapOsCrAFeA24Sza4T0gx1e%2B7jCK0haaDd764wWyTlV0LuBGEkZ%2BvEbui1iSX7iEUInsI38pxenatnzjd7OAcg55ss0wzSMXudOkuhxwzewULQ6i1vnaEr%2FwUbiUN5HEnxMBohMvYJWqLSMLZ03nTxK0K76soZC7%2BWHaJXsbp4LY8IMBv9WblBs9TsIY34b6iRKWac7zH3hBX3nQiL88y8PVVBBWP8kgZCb2RJnoODWiJb%2BKjBNlxCzegdC2czXTDVjOXpE4w9uG8wQY6pgESD0hZt1Cu9q3ItBg3%2BAtY3m22VzvV0DF63QAmRZYu9nxLUs2i2L%2FX7x4W1sN3cNayCDAGUHyouzDqQj4GJ%2FnFMX2qtZL7L0E6fceJZZXIFha2XKuhZrx%2FfKYm0y18l%2Bu1xOXLAGHYfUgxc54PRTJDDbXgqOrecKhhrdjOGsHFmVnF4hyQXWRtxsqJ9MEXi7XFY3PQEQRgerVBEOXD6Nlp6FG1LFKE&X-Amz-Signature=9221d7dff86c8fa68394cab56a9399c76eb5f0472e9fc32173ae3e33ab5f934d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALZGLSH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvNpls9%2BsGxPm1L9Ze%2FlK%2Ff012Tnl%2BjbWu6OoifYx5%2FAiBREHNIXA2HTLUkefrLsBpGCtr0oQR%2BzAbtcG3mdkSXOiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKRp6e4wDqC%2BaEk0fKtwDoclfT3GlfROyivNH60pbzqf%2FQovRDYD%2FSrIrLGydfw0HZsjtESY2e86SBj3zGNzMmlStlPnAa8pvrRD8e%2BYc9J12JLl1F0w6PbLzN7OA3%2BLFp2idSUZpq%2FBFOmCXV1Q753kr0jT7OrSH9BystswC4KNAtZu31YAxlDTji3O0L75NT15i4sJjcXm8TIfRXHIJSVZ8A01rcaZw2j4G4dU31T9%2FlFOQWyitba1CUt9JnMYvW7Tfj0eIcWKAONhI1g4LlmejLIBK76BBdngZ3Qbyirlrw09B2dUgOL2hppXrekLVXhuuMs7HGno4G16LnDorl8wcyyuxGxxxJh9%2BhbpkRHH%2FhzK1EBvmUGnz3Lp7%2BfirW4qRdpUsapOsCrAFeA24Sza4T0gx1e%2B7jCK0haaDd764wWyTlV0LuBGEkZ%2BvEbui1iSX7iEUInsI38pxenatnzjd7OAcg55ss0wzSMXudOkuhxwzewULQ6i1vnaEr%2FwUbiUN5HEnxMBohMvYJWqLSMLZ03nTxK0K76soZC7%2BWHaJXsbp4LY8IMBv9WblBs9TsIY34b6iRKWac7zH3hBX3nQiL88y8PVVBBWP8kgZCb2RJnoODWiJb%2BKjBNlxCzegdC2czXTDVjOXpE4w9uG8wQY6pgESD0hZt1Cu9q3ItBg3%2BAtY3m22VzvV0DF63QAmRZYu9nxLUs2i2L%2FX7x4W1sN3cNayCDAGUHyouzDqQj4GJ%2FnFMX2qtZL7L0E6fceJZZXIFha2XKuhZrx%2FfKYm0y18l%2Bu1xOXLAGHYfUgxc54PRTJDDbXgqOrecKhhrdjOGsHFmVnF4hyQXWRtxsqJ9MEXi7XFY3PQEQRgerVBEOXD6Nlp6FG1LFKE&X-Amz-Signature=75df302ec28905e86e0b6903413eee472bf77518968c79f9bee3fe5d26514c50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALZGLSH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEvNpls9%2BsGxPm1L9Ze%2FlK%2Ff012Tnl%2BjbWu6OoifYx5%2FAiBREHNIXA2HTLUkefrLsBpGCtr0oQR%2BzAbtcG3mdkSXOiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKRp6e4wDqC%2BaEk0fKtwDoclfT3GlfROyivNH60pbzqf%2FQovRDYD%2FSrIrLGydfw0HZsjtESY2e86SBj3zGNzMmlStlPnAa8pvrRD8e%2BYc9J12JLl1F0w6PbLzN7OA3%2BLFp2idSUZpq%2FBFOmCXV1Q753kr0jT7OrSH9BystswC4KNAtZu31YAxlDTji3O0L75NT15i4sJjcXm8TIfRXHIJSVZ8A01rcaZw2j4G4dU31T9%2FlFOQWyitba1CUt9JnMYvW7Tfj0eIcWKAONhI1g4LlmejLIBK76BBdngZ3Qbyirlrw09B2dUgOL2hppXrekLVXhuuMs7HGno4G16LnDorl8wcyyuxGxxxJh9%2BhbpkRHH%2FhzK1EBvmUGnz3Lp7%2BfirW4qRdpUsapOsCrAFeA24Sza4T0gx1e%2B7jCK0haaDd764wWyTlV0LuBGEkZ%2BvEbui1iSX7iEUInsI38pxenatnzjd7OAcg55ss0wzSMXudOkuhxwzewULQ6i1vnaEr%2FwUbiUN5HEnxMBohMvYJWqLSMLZ03nTxK0K76soZC7%2BWHaJXsbp4LY8IMBv9WblBs9TsIY34b6iRKWac7zH3hBX3nQiL88y8PVVBBWP8kgZCb2RJnoODWiJb%2BKjBNlxCzegdC2czXTDVjOXpE4w9uG8wQY6pgESD0hZt1Cu9q3ItBg3%2BAtY3m22VzvV0DF63QAmRZYu9nxLUs2i2L%2FX7x4W1sN3cNayCDAGUHyouzDqQj4GJ%2FnFMX2qtZL7L0E6fceJZZXIFha2XKuhZrx%2FfKYm0y18l%2Bu1xOXLAGHYfUgxc54PRTJDDbXgqOrecKhhrdjOGsHFmVnF4hyQXWRtxsqJ9MEXi7XFY3PQEQRgerVBEOXD6Nlp6FG1LFKE&X-Amz-Signature=99b66e9416fc93f22eb9664971c31e3c8d4f7624b7c60455955c16033b1f05f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
