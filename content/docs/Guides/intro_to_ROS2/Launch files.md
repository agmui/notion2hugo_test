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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7ZLBRP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcEA%2F9HY860AKZfNnrfZ2EqsUM3v7YfHFhvl7Gu50vZQIhALMnvof09KJvXwplr0vSXtV00gmjZOF48eNE7e9TBEteKv8DCGQQABoMNjM3NDIzMTgzODA1IgwTISjImSCQB5M0L4Iq3APEPiNe54jqnElx8knZSqTvt4ZNoTTj13ipX8lWXf9Aao09bJ6WHPOViUpcVtLK61t17vWJgg1GgC4WCWCvzVwRQK5Tk6QWjjFuDkwpVfBYKpqpzunXjlOUrYeBBW8W%2BrC2KwL%2B76oz4OTUB%2Ftit6GME4MCefnYILAA%2FZvoaGIthomW01MC4Pir%2BnnMLWr%2BWC00%2BUeFaadiCdxK2fFkYXLedhr2IcRw%2BvjS14BgES1kEtKj5eJCqRxJrDFkCgmozmy46iA2YM%2B3V6MIloXOcxsWPMXuQPb0mzf9ONbRoQ%2Fx7WGn0aDnk5DGhppwYXJhIiHIicFu3XZr6l7H8WbziuVi3l3KV9gJdizpJV6BSxfpwMX588nu6czjxEa%2BgyTiQ8kLEbMO3BomiQ0oCO1N4oSkl1n18JCOevAkK8H6RD%2FIimGl2NusQs7blt8OgvusOBMbjHwGXmd9bhH1uw97KasmFr4ZpdtwG4Rz%2BP8R3w2EcgjmpeJOfP%2F9Exg2GwLf8ObZYwMnvuE0xOj%2FSPA%2F3S1jNVf%2FtopDoLmVvuIINSMViDakhkhclkvSP0rWhzhfiBIiyl6HXBn1cJ6znqOm1c0KdldY2d3pb7net41qKRJTNsgHsoANRvCyG205HTC%2B2Zu%2FBjqkASiVnmkKJE4rKucPWH0RGdRYyZZ3CTnR6tH%2F0LIxSX6njb7tAWX3G7LvGXzMdaB7QPC3EehCG5Ia1s9ew2T%2FjsR7s8HBIwbuO1eIazmEwmr1ostc4mvkeW4diV8sLObr83rGbsfhqkXqjvP%2FsPCYlsoCLopL82dJIDnCEbHfLFaJxDo3C3pk9KzVCgbY8tC4Ll2SRvRmGVtCS%2Bz9CADyVuR6kGlZ&X-Amz-Signature=607e8cf4e336f81f5a3aff55c32953861d1652d111c4eca0b0363ab411dceb52&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7ZLBRP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcEA%2F9HY860AKZfNnrfZ2EqsUM3v7YfHFhvl7Gu50vZQIhALMnvof09KJvXwplr0vSXtV00gmjZOF48eNE7e9TBEteKv8DCGQQABoMNjM3NDIzMTgzODA1IgwTISjImSCQB5M0L4Iq3APEPiNe54jqnElx8knZSqTvt4ZNoTTj13ipX8lWXf9Aao09bJ6WHPOViUpcVtLK61t17vWJgg1GgC4WCWCvzVwRQK5Tk6QWjjFuDkwpVfBYKpqpzunXjlOUrYeBBW8W%2BrC2KwL%2B76oz4OTUB%2Ftit6GME4MCefnYILAA%2FZvoaGIthomW01MC4Pir%2BnnMLWr%2BWC00%2BUeFaadiCdxK2fFkYXLedhr2IcRw%2BvjS14BgES1kEtKj5eJCqRxJrDFkCgmozmy46iA2YM%2B3V6MIloXOcxsWPMXuQPb0mzf9ONbRoQ%2Fx7WGn0aDnk5DGhppwYXJhIiHIicFu3XZr6l7H8WbziuVi3l3KV9gJdizpJV6BSxfpwMX588nu6czjxEa%2BgyTiQ8kLEbMO3BomiQ0oCO1N4oSkl1n18JCOevAkK8H6RD%2FIimGl2NusQs7blt8OgvusOBMbjHwGXmd9bhH1uw97KasmFr4ZpdtwG4Rz%2BP8R3w2EcgjmpeJOfP%2F9Exg2GwLf8ObZYwMnvuE0xOj%2FSPA%2F3S1jNVf%2FtopDoLmVvuIINSMViDakhkhclkvSP0rWhzhfiBIiyl6HXBn1cJ6znqOm1c0KdldY2d3pb7net41qKRJTNsgHsoANRvCyG205HTC%2B2Zu%2FBjqkASiVnmkKJE4rKucPWH0RGdRYyZZ3CTnR6tH%2F0LIxSX6njb7tAWX3G7LvGXzMdaB7QPC3EehCG5Ia1s9ew2T%2FjsR7s8HBIwbuO1eIazmEwmr1ostc4mvkeW4diV8sLObr83rGbsfhqkXqjvP%2FsPCYlsoCLopL82dJIDnCEbHfLFaJxDo3C3pk9KzVCgbY8tC4Ll2SRvRmGVtCS%2Bz9CADyVuR6kGlZ&X-Amz-Signature=d9205fa1659e114df2d7b71fec94ffab3463efe7b58df0b3c43471922c7a7e69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7ZLBRP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcEA%2F9HY860AKZfNnrfZ2EqsUM3v7YfHFhvl7Gu50vZQIhALMnvof09KJvXwplr0vSXtV00gmjZOF48eNE7e9TBEteKv8DCGQQABoMNjM3NDIzMTgzODA1IgwTISjImSCQB5M0L4Iq3APEPiNe54jqnElx8knZSqTvt4ZNoTTj13ipX8lWXf9Aao09bJ6WHPOViUpcVtLK61t17vWJgg1GgC4WCWCvzVwRQK5Tk6QWjjFuDkwpVfBYKpqpzunXjlOUrYeBBW8W%2BrC2KwL%2B76oz4OTUB%2Ftit6GME4MCefnYILAA%2FZvoaGIthomW01MC4Pir%2BnnMLWr%2BWC00%2BUeFaadiCdxK2fFkYXLedhr2IcRw%2BvjS14BgES1kEtKj5eJCqRxJrDFkCgmozmy46iA2YM%2B3V6MIloXOcxsWPMXuQPb0mzf9ONbRoQ%2Fx7WGn0aDnk5DGhppwYXJhIiHIicFu3XZr6l7H8WbziuVi3l3KV9gJdizpJV6BSxfpwMX588nu6czjxEa%2BgyTiQ8kLEbMO3BomiQ0oCO1N4oSkl1n18JCOevAkK8H6RD%2FIimGl2NusQs7blt8OgvusOBMbjHwGXmd9bhH1uw97KasmFr4ZpdtwG4Rz%2BP8R3w2EcgjmpeJOfP%2F9Exg2GwLf8ObZYwMnvuE0xOj%2FSPA%2F3S1jNVf%2FtopDoLmVvuIINSMViDakhkhclkvSP0rWhzhfiBIiyl6HXBn1cJ6znqOm1c0KdldY2d3pb7net41qKRJTNsgHsoANRvCyG205HTC%2B2Zu%2FBjqkASiVnmkKJE4rKucPWH0RGdRYyZZ3CTnR6tH%2F0LIxSX6njb7tAWX3G7LvGXzMdaB7QPC3EehCG5Ia1s9ew2T%2FjsR7s8HBIwbuO1eIazmEwmr1ostc4mvkeW4diV8sLObr83rGbsfhqkXqjvP%2FsPCYlsoCLopL82dJIDnCEbHfLFaJxDo3C3pk9KzVCgbY8tC4Ll2SRvRmGVtCS%2Bz9CADyVuR6kGlZ&X-Amz-Signature=da839b127fafb388c6b54cc7b6deb0410a66368fd4825be08b8d55493e8fc6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
