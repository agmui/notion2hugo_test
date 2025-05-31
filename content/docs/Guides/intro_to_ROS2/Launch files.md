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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MSHDBD5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7elL2pt%2B7vBmMbduMlzU%2FHdkjY8HoQTzA4B4KycDZuAIhAPslFuSzLOYhP9GA8M8t1k7m5s2kchxS3XhyKlupBcDuKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWv%2Fqj4gtpQO6BW5Aq3APzGWtnZ7w50EdxV80Jou93lzf0VKOQBYso0Ff5Dh16Jyi83sX1%2Bc39mIcA6fOatYgDk2TGwvktaOv2mP1CrHO9WpnXnUHSbgGCNg84%2BZBBqj2rA%2Bj%2BaZyHiU%2FJRtFPOUYxx69ycE3YOm8NDHknism5c6teUch%2Bcg3JrZ8yaujUQwtvBJt0DXxbLmI1HfceyCZoWcO4iAg47rrKDq2O0a0mw7yICJxUG7LjXUBIRwtOvKkHbxaDShFecCRKjhm98m1h68NT5BBxwYGQOTxccDC%2Fe1Y9hIfhW1poJIwjsaH45vfr%2F1MBvvQofO0qAagA0uWejTjt%2BnzyxrvJ1bH%2BS9hl7Hl8ggFAs%2BoCDbZY6QSp5Mz%2FUaB52weIGC5Thv3ldWq4slzvB2HxumqcDlefrm7Y%2B7ns3Y%2F8dF6wwoo3mXoEFu1rRyQs9qdKoi6PmNZePiNikhlkP2%2BCjZK5Gni6Kn2cvxHmOH3DYsPYJqHrztalVikBdtXS9fSIXur%2F%2Fc2Y6D8S85fYTr%2FBrCRBs0ww6dstT2q22Qs1PxVOECiDJB%2FI3SwhaBJEkDQOcbpx1VHj9Ea8Waz6Rh3o85D6ogu7jEBlXkC7dtslvqADSGbcH%2BMzGdAGKedRfpD2RZ5y%2FzCojerBBjqkAVauP%2FTzCmwuClZe9JK8I6ioNGnyYv%2FpBc7OZJZvrwYuUx7tCILtWegf%2Fmm9JmVuqG8TfbPTtpuSfN9wSHKoYoF2KBNorOK0B0I8U6P0i0TfdB6cLV7iW0TwCnzM2f04Ves%2BP4%2FxIZJ4tmbGGLi9Gis02CV3hkfJ0A5do3YmIXAbC8NoY1AjTgsnUgN2VYt9xihvq8uXSJkab%2B8L21wCquQBmgk4&X-Amz-Signature=5217060f59a02728668ad37897002392348307557d9dbf2f13c3fb56548103a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MSHDBD5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7elL2pt%2B7vBmMbduMlzU%2FHdkjY8HoQTzA4B4KycDZuAIhAPslFuSzLOYhP9GA8M8t1k7m5s2kchxS3XhyKlupBcDuKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWv%2Fqj4gtpQO6BW5Aq3APzGWtnZ7w50EdxV80Jou93lzf0VKOQBYso0Ff5Dh16Jyi83sX1%2Bc39mIcA6fOatYgDk2TGwvktaOv2mP1CrHO9WpnXnUHSbgGCNg84%2BZBBqj2rA%2Bj%2BaZyHiU%2FJRtFPOUYxx69ycE3YOm8NDHknism5c6teUch%2Bcg3JrZ8yaujUQwtvBJt0DXxbLmI1HfceyCZoWcO4iAg47rrKDq2O0a0mw7yICJxUG7LjXUBIRwtOvKkHbxaDShFecCRKjhm98m1h68NT5BBxwYGQOTxccDC%2Fe1Y9hIfhW1poJIwjsaH45vfr%2F1MBvvQofO0qAagA0uWejTjt%2BnzyxrvJ1bH%2BS9hl7Hl8ggFAs%2BoCDbZY6QSp5Mz%2FUaB52weIGC5Thv3ldWq4slzvB2HxumqcDlefrm7Y%2B7ns3Y%2F8dF6wwoo3mXoEFu1rRyQs9qdKoi6PmNZePiNikhlkP2%2BCjZK5Gni6Kn2cvxHmOH3DYsPYJqHrztalVikBdtXS9fSIXur%2F%2Fc2Y6D8S85fYTr%2FBrCRBs0ww6dstT2q22Qs1PxVOECiDJB%2FI3SwhaBJEkDQOcbpx1VHj9Ea8Waz6Rh3o85D6ogu7jEBlXkC7dtslvqADSGbcH%2BMzGdAGKedRfpD2RZ5y%2FzCojerBBjqkAVauP%2FTzCmwuClZe9JK8I6ioNGnyYv%2FpBc7OZJZvrwYuUx7tCILtWegf%2Fmm9JmVuqG8TfbPTtpuSfN9wSHKoYoF2KBNorOK0B0I8U6P0i0TfdB6cLV7iW0TwCnzM2f04Ves%2BP4%2FxIZJ4tmbGGLi9Gis02CV3hkfJ0A5do3YmIXAbC8NoY1AjTgsnUgN2VYt9xihvq8uXSJkab%2B8L21wCquQBmgk4&X-Amz-Signature=86e950a6570d601230de5d5be263cc7cc221e8cb767bc3e9ceee2ff4439704a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MSHDBD5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7elL2pt%2B7vBmMbduMlzU%2FHdkjY8HoQTzA4B4KycDZuAIhAPslFuSzLOYhP9GA8M8t1k7m5s2kchxS3XhyKlupBcDuKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWv%2Fqj4gtpQO6BW5Aq3APzGWtnZ7w50EdxV80Jou93lzf0VKOQBYso0Ff5Dh16Jyi83sX1%2Bc39mIcA6fOatYgDk2TGwvktaOv2mP1CrHO9WpnXnUHSbgGCNg84%2BZBBqj2rA%2Bj%2BaZyHiU%2FJRtFPOUYxx69ycE3YOm8NDHknism5c6teUch%2Bcg3JrZ8yaujUQwtvBJt0DXxbLmI1HfceyCZoWcO4iAg47rrKDq2O0a0mw7yICJxUG7LjXUBIRwtOvKkHbxaDShFecCRKjhm98m1h68NT5BBxwYGQOTxccDC%2Fe1Y9hIfhW1poJIwjsaH45vfr%2F1MBvvQofO0qAagA0uWejTjt%2BnzyxrvJ1bH%2BS9hl7Hl8ggFAs%2BoCDbZY6QSp5Mz%2FUaB52weIGC5Thv3ldWq4slzvB2HxumqcDlefrm7Y%2B7ns3Y%2F8dF6wwoo3mXoEFu1rRyQs9qdKoi6PmNZePiNikhlkP2%2BCjZK5Gni6Kn2cvxHmOH3DYsPYJqHrztalVikBdtXS9fSIXur%2F%2Fc2Y6D8S85fYTr%2FBrCRBs0ww6dstT2q22Qs1PxVOECiDJB%2FI3SwhaBJEkDQOcbpx1VHj9Ea8Waz6Rh3o85D6ogu7jEBlXkC7dtslvqADSGbcH%2BMzGdAGKedRfpD2RZ5y%2FzCojerBBjqkAVauP%2FTzCmwuClZe9JK8I6ioNGnyYv%2FpBc7OZJZvrwYuUx7tCILtWegf%2Fmm9JmVuqG8TfbPTtpuSfN9wSHKoYoF2KBNorOK0B0I8U6P0i0TfdB6cLV7iW0TwCnzM2f04Ves%2BP4%2FxIZJ4tmbGGLi9Gis02CV3hkfJ0A5do3YmIXAbC8NoY1AjTgsnUgN2VYt9xihvq8uXSJkab%2B8L21wCquQBmgk4&X-Amz-Signature=158b311a0c737a1227af521a91cc2490598668979ccc8e23bbe075cbab0b75a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
