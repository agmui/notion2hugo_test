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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHBVQVP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHG2ac%2FWbd1pMYj98Fat9vTWF34X7wRI8o66XXC9XJuoAiBM1e%2BUh4XmoJglap6Ul6OM7c4hKVquerssPKB4SnlHRCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMET2Z3W2ftaimJmurKtwD0WZTDXwUTJreUlV6N%2Bwq%2F8dx%2F%2BDI%2FA162qCAFbv%2BcP1MJCCzlhGTeLjybAMuzfsLSIoWVlqZRkntniy00rzzR46qzv04mCToHx0TVKWVjxPBeVW2tlQeDX%2BkkSJ1M2eCp17omUFaDdCizX%2FVpWy%2FdVf9rb3A1we5%2FDnsIM0MBUR%2FIGJIFAzviYVHreb5ObRTeQ6C6Wh34lRiiGSkinvYiB3SngAkXmv4s%2F4XUH28y2QnZa2ioYWwNlovhWjDpDQv%2Bf9AqiTmbsrcIlnM%2BvFE43Bri2A4KD1FeebtATqjXgBZbCCRXTrJ%2FRSkOdYVzsOMggkLjthQtmg%2FrE9oHf2ukBPLrByliNO7d5DbMm42eGuUY1OPJvDjrT3NqopF3blUAGX0uFp0Nw1qLZw8Wkx9ULvFPavxQPlAPZIlr9lYZV2pGV9DXqCBst0t1tBcUmyO%2FLyy6izeh57BLH7ei43EjVl6CQb%2BSI0PSamCSuynEshoqt6cX%2Bf9EEcOhx%2FORi1A%2FaYiAHd9NhebWy8L3Ivn%2BXYDucjal0Vdl12ptTiCfahzyA9I4N6JnTPed1MYdQLcwQlmACck%2FpyLrPjca8ZzskpDUhVd70jmJrL04Y28mrAXrHw5incoTY3zp%2BIw9ej1vQY6pgE6kTRd352XylmSgi9TxpbDTIjpcmjpKovIgeaQCCbsSKbv1DIUzJAa4NwCRpadn%2BNt2txrZq5xEfj9PrgLGkyykL1B766jlS4etOPIjEOS6Iig0rqBVwpARJNtrdNrUoMa713ZliXHkKW3y9SlPCUNoEhUM42J9qVQ4C%2FiKdYny08CCSodzn3%2BiHs9YAFw%2BXbd87zT%2B8pOZ7ok%2BxIPZ0MKbmv2TdKg&X-Amz-Signature=01a00c0f79e8136aec4030c0dfbc516268b1ada8e7b1d4b4392e284994569d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHBVQVP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHG2ac%2FWbd1pMYj98Fat9vTWF34X7wRI8o66XXC9XJuoAiBM1e%2BUh4XmoJglap6Ul6OM7c4hKVquerssPKB4SnlHRCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMET2Z3W2ftaimJmurKtwD0WZTDXwUTJreUlV6N%2Bwq%2F8dx%2F%2BDI%2FA162qCAFbv%2BcP1MJCCzlhGTeLjybAMuzfsLSIoWVlqZRkntniy00rzzR46qzv04mCToHx0TVKWVjxPBeVW2tlQeDX%2BkkSJ1M2eCp17omUFaDdCizX%2FVpWy%2FdVf9rb3A1we5%2FDnsIM0MBUR%2FIGJIFAzviYVHreb5ObRTeQ6C6Wh34lRiiGSkinvYiB3SngAkXmv4s%2F4XUH28y2QnZa2ioYWwNlovhWjDpDQv%2Bf9AqiTmbsrcIlnM%2BvFE43Bri2A4KD1FeebtATqjXgBZbCCRXTrJ%2FRSkOdYVzsOMggkLjthQtmg%2FrE9oHf2ukBPLrByliNO7d5DbMm42eGuUY1OPJvDjrT3NqopF3blUAGX0uFp0Nw1qLZw8Wkx9ULvFPavxQPlAPZIlr9lYZV2pGV9DXqCBst0t1tBcUmyO%2FLyy6izeh57BLH7ei43EjVl6CQb%2BSI0PSamCSuynEshoqt6cX%2Bf9EEcOhx%2FORi1A%2FaYiAHd9NhebWy8L3Ivn%2BXYDucjal0Vdl12ptTiCfahzyA9I4N6JnTPed1MYdQLcwQlmACck%2FpyLrPjca8ZzskpDUhVd70jmJrL04Y28mrAXrHw5incoTY3zp%2BIw9ej1vQY6pgE6kTRd352XylmSgi9TxpbDTIjpcmjpKovIgeaQCCbsSKbv1DIUzJAa4NwCRpadn%2BNt2txrZq5xEfj9PrgLGkyykL1B766jlS4etOPIjEOS6Iig0rqBVwpARJNtrdNrUoMa713ZliXHkKW3y9SlPCUNoEhUM42J9qVQ4C%2FiKdYny08CCSodzn3%2BiHs9YAFw%2BXbd87zT%2B8pOZ7ok%2BxIPZ0MKbmv2TdKg&X-Amz-Signature=f8e9192f5d37ea0b4448fd2e3b83e9e72d2eaac86b385e7922d48b74e905ce90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHBVQVP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHG2ac%2FWbd1pMYj98Fat9vTWF34X7wRI8o66XXC9XJuoAiBM1e%2BUh4XmoJglap6Ul6OM7c4hKVquerssPKB4SnlHRCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMET2Z3W2ftaimJmurKtwD0WZTDXwUTJreUlV6N%2Bwq%2F8dx%2F%2BDI%2FA162qCAFbv%2BcP1MJCCzlhGTeLjybAMuzfsLSIoWVlqZRkntniy00rzzR46qzv04mCToHx0TVKWVjxPBeVW2tlQeDX%2BkkSJ1M2eCp17omUFaDdCizX%2FVpWy%2FdVf9rb3A1we5%2FDnsIM0MBUR%2FIGJIFAzviYVHreb5ObRTeQ6C6Wh34lRiiGSkinvYiB3SngAkXmv4s%2F4XUH28y2QnZa2ioYWwNlovhWjDpDQv%2Bf9AqiTmbsrcIlnM%2BvFE43Bri2A4KD1FeebtATqjXgBZbCCRXTrJ%2FRSkOdYVzsOMggkLjthQtmg%2FrE9oHf2ukBPLrByliNO7d5DbMm42eGuUY1OPJvDjrT3NqopF3blUAGX0uFp0Nw1qLZw8Wkx9ULvFPavxQPlAPZIlr9lYZV2pGV9DXqCBst0t1tBcUmyO%2FLyy6izeh57BLH7ei43EjVl6CQb%2BSI0PSamCSuynEshoqt6cX%2Bf9EEcOhx%2FORi1A%2FaYiAHd9NhebWy8L3Ivn%2BXYDucjal0Vdl12ptTiCfahzyA9I4N6JnTPed1MYdQLcwQlmACck%2FpyLrPjca8ZzskpDUhVd70jmJrL04Y28mrAXrHw5incoTY3zp%2BIw9ej1vQY6pgE6kTRd352XylmSgi9TxpbDTIjpcmjpKovIgeaQCCbsSKbv1DIUzJAa4NwCRpadn%2BNt2txrZq5xEfj9PrgLGkyykL1B766jlS4etOPIjEOS6Iig0rqBVwpARJNtrdNrUoMa713ZliXHkKW3y9SlPCUNoEhUM42J9qVQ4C%2FiKdYny08CCSodzn3%2BiHs9YAFw%2BXbd87zT%2B8pOZ7ok%2BxIPZ0MKbmv2TdKg&X-Amz-Signature=b8e112dc190ff91c63fe71816774bc1787fe2ddf9a3278e0a954380f24bf999c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
