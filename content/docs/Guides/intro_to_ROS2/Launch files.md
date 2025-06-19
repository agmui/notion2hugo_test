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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2T2LBAL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE3E06PWr5fwPNPsiUq7D0vCTAaNbgHbWF%2BUaA9nzsWgIhAM0Xaw3JBCrfrqE7X8QJ99oZ8iHKLgpNaqWLRPDlwV5yKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt5%2BfL6J7gntGjna4q3AOk82v6A3nu5Xfrxlj5y1Hr35A7KHEGww4uNDgU%2BezxWKqvOOnTFxC38MNN160pYrQfTjuGIsFhwGrFlp1LbF8oYfylXS2eGIYWWy4IbCH6ue%2FlT30HSTHHSUu0mf8YoeITB5JA0WpLNYgiHlnRl1RDUpU5dJUqckuXj8xykfDNn7Lgpnxb0ZK8VSiLeFFs1XymhqPCyO9O%2By62XcpQ5gT7A%2B7JqgPGcXo%2BwmK4ejcaGIIo8TW1Eb2KarcTBhBZTbUcW9RTj6t542DO1YetOzCNHNQpy4vw3HNie%2BHv95nax9jZCLQGDiTiSRqTd4qwHsPbu46kYxu%2FwAlOGmWr6VwIo8CdqwG%2FDN0MqZIr4jnbo4lS4WlwZBjwNlq5Kri1FKbnctwc0twN%2BCqmvstlq1oDjSlLtAbol%2FU4lcjHGaooKJgxgLPpWi136P6Pc1jqJ%2FHlfUejaGM5UGMqX%2BID1KQLrbXXFxnmaA%2FqrPsiD5wlPg9egZRjPpCRtq%2FGWX7Nzo54bADes8GDeGGNu6HC1xvBB%2BirqnWvElkXNzJDn8HEH4tuIbPeTBeaXfARPTVmV8FAU69hD3a2KjdlesK6y7ZPqe2VUn2ihW6Pbvzp01m7s%2F5LC2GI2xIDp3u1QDCYhM7CBjqkAaZA542ND6kjDsvZ22%2FOv%2F6zzVw30InLpinzYgTxMK0zzz9s3PUrR75%2FzzkLHFtJpAHXTZD6Hmvpe6QWjH6Z2MfmwNTTUAGUZHMkxI3Hv%2BKZS5Hqu4Qs8UrKxkc8Nmh8tYWZtLMIcOQMT1fefzPYhzCEKsIeZJWMed16%2F9h2uuabgyuvdsvIzDanM81jQWa7HH%2B4rXQghzResh1vzyFk%2Fd1NkPhz&X-Amz-Signature=6351607cf175a79356e2bbe65727622b45029d8f1f4728eb5bfcbe55698fb1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2T2LBAL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE3E06PWr5fwPNPsiUq7D0vCTAaNbgHbWF%2BUaA9nzsWgIhAM0Xaw3JBCrfrqE7X8QJ99oZ8iHKLgpNaqWLRPDlwV5yKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt5%2BfL6J7gntGjna4q3AOk82v6A3nu5Xfrxlj5y1Hr35A7KHEGww4uNDgU%2BezxWKqvOOnTFxC38MNN160pYrQfTjuGIsFhwGrFlp1LbF8oYfylXS2eGIYWWy4IbCH6ue%2FlT30HSTHHSUu0mf8YoeITB5JA0WpLNYgiHlnRl1RDUpU5dJUqckuXj8xykfDNn7Lgpnxb0ZK8VSiLeFFs1XymhqPCyO9O%2By62XcpQ5gT7A%2B7JqgPGcXo%2BwmK4ejcaGIIo8TW1Eb2KarcTBhBZTbUcW9RTj6t542DO1YetOzCNHNQpy4vw3HNie%2BHv95nax9jZCLQGDiTiSRqTd4qwHsPbu46kYxu%2FwAlOGmWr6VwIo8CdqwG%2FDN0MqZIr4jnbo4lS4WlwZBjwNlq5Kri1FKbnctwc0twN%2BCqmvstlq1oDjSlLtAbol%2FU4lcjHGaooKJgxgLPpWi136P6Pc1jqJ%2FHlfUejaGM5UGMqX%2BID1KQLrbXXFxnmaA%2FqrPsiD5wlPg9egZRjPpCRtq%2FGWX7Nzo54bADes8GDeGGNu6HC1xvBB%2BirqnWvElkXNzJDn8HEH4tuIbPeTBeaXfARPTVmV8FAU69hD3a2KjdlesK6y7ZPqe2VUn2ihW6Pbvzp01m7s%2F5LC2GI2xIDp3u1QDCYhM7CBjqkAaZA542ND6kjDsvZ22%2FOv%2F6zzVw30InLpinzYgTxMK0zzz9s3PUrR75%2FzzkLHFtJpAHXTZD6Hmvpe6QWjH6Z2MfmwNTTUAGUZHMkxI3Hv%2BKZS5Hqu4Qs8UrKxkc8Nmh8tYWZtLMIcOQMT1fefzPYhzCEKsIeZJWMed16%2F9h2uuabgyuvdsvIzDanM81jQWa7HH%2B4rXQghzResh1vzyFk%2Fd1NkPhz&X-Amz-Signature=7c6d0195f322476143562431e7f505fa3d5b1c0a478c0eef5f54d4797b3bd541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2T2LBAL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE3E06PWr5fwPNPsiUq7D0vCTAaNbgHbWF%2BUaA9nzsWgIhAM0Xaw3JBCrfrqE7X8QJ99oZ8iHKLgpNaqWLRPDlwV5yKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt5%2BfL6J7gntGjna4q3AOk82v6A3nu5Xfrxlj5y1Hr35A7KHEGww4uNDgU%2BezxWKqvOOnTFxC38MNN160pYrQfTjuGIsFhwGrFlp1LbF8oYfylXS2eGIYWWy4IbCH6ue%2FlT30HSTHHSUu0mf8YoeITB5JA0WpLNYgiHlnRl1RDUpU5dJUqckuXj8xykfDNn7Lgpnxb0ZK8VSiLeFFs1XymhqPCyO9O%2By62XcpQ5gT7A%2B7JqgPGcXo%2BwmK4ejcaGIIo8TW1Eb2KarcTBhBZTbUcW9RTj6t542DO1YetOzCNHNQpy4vw3HNie%2BHv95nax9jZCLQGDiTiSRqTd4qwHsPbu46kYxu%2FwAlOGmWr6VwIo8CdqwG%2FDN0MqZIr4jnbo4lS4WlwZBjwNlq5Kri1FKbnctwc0twN%2BCqmvstlq1oDjSlLtAbol%2FU4lcjHGaooKJgxgLPpWi136P6Pc1jqJ%2FHlfUejaGM5UGMqX%2BID1KQLrbXXFxnmaA%2FqrPsiD5wlPg9egZRjPpCRtq%2FGWX7Nzo54bADes8GDeGGNu6HC1xvBB%2BirqnWvElkXNzJDn8HEH4tuIbPeTBeaXfARPTVmV8FAU69hD3a2KjdlesK6y7ZPqe2VUn2ihW6Pbvzp01m7s%2F5LC2GI2xIDp3u1QDCYhM7CBjqkAaZA542ND6kjDsvZ22%2FOv%2F6zzVw30InLpinzYgTxMK0zzz9s3PUrR75%2FzzkLHFtJpAHXTZD6Hmvpe6QWjH6Z2MfmwNTTUAGUZHMkxI3Hv%2BKZS5Hqu4Qs8UrKxkc8Nmh8tYWZtLMIcOQMT1fefzPYhzCEKsIeZJWMed16%2F9h2uuabgyuvdsvIzDanM81jQWa7HH%2B4rXQghzResh1vzyFk%2Fd1NkPhz&X-Amz-Signature=44f0b56643b77f785814bdddb83e84beaec1dafd2224e7162abaf0834b23116c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
