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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGITN3W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4modrwQVoQrAkTvAiXqjs7iiEiS%2FY67p2tOJFuzF%2BCAiAZOTcA4q67HEa%2F0PEr0%2FZVf3vWzW%2FVlDs8sgTUwiN2MiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGB7yUP%2FW3e65mN0UKtwDQl7KCVsz3OaYheWxvB4IQnp74n2Y81DhB4lawN0jCjUZdGDHvA7pcDcJwVULyHdp24s6bWy6OD6g74EncAWt%2BKE7fWRWqO8QGua8YLsCl%2FnJbSxiQb76RIiRpL90PRsdVQQa1%2BNIdN%2BoGgRD9sgjmuP6XnMIhPhQSjrLYx%2F8vZm25TDvCEEnGde5h2jaULc9CsmFLQTSYITSnlloIdgGnwUMEbZXcBwCqQ4Ak26%2FhwzcXrU9susy7cfDm56%2FLBFF393%2B0Htz9dIy%2Fed%2BGfuTlhE%2BwiuTfp1%2BfoRayJAMyoNWinryhHenicsaj8oiw%2Brn2n2ge3dtO03mxEmboaL7dL0ssmoNyzObtoIXqDRRzvycIjoDF2e4u17SywBI%2FE68XKXZ3oUg3IXyafdAD%2FMLYF%2BsUgjSNFTFwhD1F77%2FR7KZPehVxL9aUm4L2r3%2BnBcSUABDyqQqw8Qgge6Ul7JQ%2FJTfx9AfEJ6wGzCcCXIT7V%2B%2BUnbp2o0Kg6p3%2FmaVNItZdr28kHOMfzC2YJ3ndrEOvTLl6V8x9TJ77qDbvwcxEn6uh9AbtEwHIbY1ChUlbQSTpdhtYtlsAryZ7AGVnxdT2L%2B4956wBHgCynceXil3rzGsQjEJYYzeucfJjIgwjLqdvgY6pgGTrZe41YxytXiVoEabyBFeqB4vkA78IXUZbpayv5gQmvUIHmqzbk0b%2Bt3ioy6T%2FWOuvitHJchKMy2uN7RCEy3jI%2BHVkBDY748dPBaQ4B%2F1AQLQbFWUgepaotiRGnJ5CuMo%2BVsNO1YlsEM8rZokkRyBN2YOTND95VL%2Fv2iDZ4QXUp03lRcupoFdF2z0SgS9bUozg%2BdXolf7TkV4dxw39h2JTJIzAYNP&X-Amz-Signature=468bdf2a9be7313219917658fdd707446a4069fb1774845060ec958a4d9dcab7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGITN3W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4modrwQVoQrAkTvAiXqjs7iiEiS%2FY67p2tOJFuzF%2BCAiAZOTcA4q67HEa%2F0PEr0%2FZVf3vWzW%2FVlDs8sgTUwiN2MiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGB7yUP%2FW3e65mN0UKtwDQl7KCVsz3OaYheWxvB4IQnp74n2Y81DhB4lawN0jCjUZdGDHvA7pcDcJwVULyHdp24s6bWy6OD6g74EncAWt%2BKE7fWRWqO8QGua8YLsCl%2FnJbSxiQb76RIiRpL90PRsdVQQa1%2BNIdN%2BoGgRD9sgjmuP6XnMIhPhQSjrLYx%2F8vZm25TDvCEEnGde5h2jaULc9CsmFLQTSYITSnlloIdgGnwUMEbZXcBwCqQ4Ak26%2FhwzcXrU9susy7cfDm56%2FLBFF393%2B0Htz9dIy%2Fed%2BGfuTlhE%2BwiuTfp1%2BfoRayJAMyoNWinryhHenicsaj8oiw%2Brn2n2ge3dtO03mxEmboaL7dL0ssmoNyzObtoIXqDRRzvycIjoDF2e4u17SywBI%2FE68XKXZ3oUg3IXyafdAD%2FMLYF%2BsUgjSNFTFwhD1F77%2FR7KZPehVxL9aUm4L2r3%2BnBcSUABDyqQqw8Qgge6Ul7JQ%2FJTfx9AfEJ6wGzCcCXIT7V%2B%2BUnbp2o0Kg6p3%2FmaVNItZdr28kHOMfzC2YJ3ndrEOvTLl6V8x9TJ77qDbvwcxEn6uh9AbtEwHIbY1ChUlbQSTpdhtYtlsAryZ7AGVnxdT2L%2B4956wBHgCynceXil3rzGsQjEJYYzeucfJjIgwjLqdvgY6pgGTrZe41YxytXiVoEabyBFeqB4vkA78IXUZbpayv5gQmvUIHmqzbk0b%2Bt3ioy6T%2FWOuvitHJchKMy2uN7RCEy3jI%2BHVkBDY748dPBaQ4B%2F1AQLQbFWUgepaotiRGnJ5CuMo%2BVsNO1YlsEM8rZokkRyBN2YOTND95VL%2Fv2iDZ4QXUp03lRcupoFdF2z0SgS9bUozg%2BdXolf7TkV4dxw39h2JTJIzAYNP&X-Amz-Signature=46d401e2c0abe987974fa463ce69e26d9972f83e73555cc6545d4a9ed5970c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGITN3W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4modrwQVoQrAkTvAiXqjs7iiEiS%2FY67p2tOJFuzF%2BCAiAZOTcA4q67HEa%2F0PEr0%2FZVf3vWzW%2FVlDs8sgTUwiN2MiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGB7yUP%2FW3e65mN0UKtwDQl7KCVsz3OaYheWxvB4IQnp74n2Y81DhB4lawN0jCjUZdGDHvA7pcDcJwVULyHdp24s6bWy6OD6g74EncAWt%2BKE7fWRWqO8QGua8YLsCl%2FnJbSxiQb76RIiRpL90PRsdVQQa1%2BNIdN%2BoGgRD9sgjmuP6XnMIhPhQSjrLYx%2F8vZm25TDvCEEnGde5h2jaULc9CsmFLQTSYITSnlloIdgGnwUMEbZXcBwCqQ4Ak26%2FhwzcXrU9susy7cfDm56%2FLBFF393%2B0Htz9dIy%2Fed%2BGfuTlhE%2BwiuTfp1%2BfoRayJAMyoNWinryhHenicsaj8oiw%2Brn2n2ge3dtO03mxEmboaL7dL0ssmoNyzObtoIXqDRRzvycIjoDF2e4u17SywBI%2FE68XKXZ3oUg3IXyafdAD%2FMLYF%2BsUgjSNFTFwhD1F77%2FR7KZPehVxL9aUm4L2r3%2BnBcSUABDyqQqw8Qgge6Ul7JQ%2FJTfx9AfEJ6wGzCcCXIT7V%2B%2BUnbp2o0Kg6p3%2FmaVNItZdr28kHOMfzC2YJ3ndrEOvTLl6V8x9TJ77qDbvwcxEn6uh9AbtEwHIbY1ChUlbQSTpdhtYtlsAryZ7AGVnxdT2L%2B4956wBHgCynceXil3rzGsQjEJYYzeucfJjIgwjLqdvgY6pgGTrZe41YxytXiVoEabyBFeqB4vkA78IXUZbpayv5gQmvUIHmqzbk0b%2Bt3ioy6T%2FWOuvitHJchKMy2uN7RCEy3jI%2BHVkBDY748dPBaQ4B%2F1AQLQbFWUgepaotiRGnJ5CuMo%2BVsNO1YlsEM8rZokkRyBN2YOTND95VL%2Fv2iDZ4QXUp03lRcupoFdF2z0SgS9bUozg%2BdXolf7TkV4dxw39h2JTJIzAYNP&X-Amz-Signature=6e653e16116a4ee9d693b26f336ad00e81d92029c9ad054cb4104eefc3431af4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
