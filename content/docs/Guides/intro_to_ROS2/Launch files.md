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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZ2KVWD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr8%2BVL9bN1FxMA6sys4mTaBSOOIe7%2BfxGJAeWDX5ISFAiBALhsH8DizLTdNvJg23CgmRwuRrkP5L4KDvep0ZZy%2BIyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM5LtmYyBraIXa%2BqOrKtwDfvXcQvPhU%2Fy1NsD2JYNZuUyJXGJhN4QIxM7AdynlD9hgCxveilGl6bBH06p%2BiNuunjuNWWJ%2F3vF39dNfoKMLqRxK4IrJ5gpMe356M10ceDDAfnsrP750arTsNGS1yQHApNUZYxMiz1IUuz%2FDviuyH0xmVDhlmlRJm%2FxkD8sbgZ%2B6Y8SxrtPrAyCcjXQd%2Bpiz24skfk0Or8CGFt0NVsTZ9u95v9UMIGhkytGfJnwP1mL4NI1vpoXYmSdA2bFJ%2F1RKwRFde4Yl7ETNqVQTRdsd4IFytpGVOwf4PaXWM5Rj1qxXTBldBbCTEGwGAN5duC%2FQ9J5DqS5jKJUsE%2BpPx8Ys0NtPto8%2FAnik5LisqfBmMOpP8AissY%2B98QA%2Fe%2FhuvKVLHDaZiVWtIK%2Fyyvv71LI74jpsn%2FjE0R9S%2FFAErIRjkBYbS5ueHKedhQZS8oe3D6XU6heYjT1JEpLwkzUh0iamZOX9YmIU%2FR%2B3KTbKcvBYg7ATZLsbOLo9U7EcJ7%2BNifPoc4kA20xrGRKLwfxu2pPi4xNa4yFaXqZlB2JM72iraxLqSkYVaI5%2FXMQVCFAng%2BxZRXqU8cjfm7W%2F9CZeB4Oa0r3YFTtO91TR0HOpt5srXdBLTihHFAA%2F5MZhkBcw0NikvgY6pgGeAkT6bywX931ltKc%2BERcxhbdZyvW73m4qZQUvpzGLhMsVCdtRbZzBwen8kSntsLMZDWpI6pOqvYmXtpmfr6Ho6V5W93ldYz5IJo5P9xPpQd6AUPHkI5XCDDkwLhhs5JJIGRSm6XLS0tCysslxZgM6rwd%2FWqgr%2Fa3kUQ3lPOf8JZkKMKtzOrLQ62tUlid2%2BebV1goz7kXPJnVL1gr7AjHAzxGcMXOJ&X-Amz-Signature=5b7a5d4ed3929bb325c525a3cf754957b3c9789442edb17125489ce627203af2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZ2KVWD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr8%2BVL9bN1FxMA6sys4mTaBSOOIe7%2BfxGJAeWDX5ISFAiBALhsH8DizLTdNvJg23CgmRwuRrkP5L4KDvep0ZZy%2BIyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM5LtmYyBraIXa%2BqOrKtwDfvXcQvPhU%2Fy1NsD2JYNZuUyJXGJhN4QIxM7AdynlD9hgCxveilGl6bBH06p%2BiNuunjuNWWJ%2F3vF39dNfoKMLqRxK4IrJ5gpMe356M10ceDDAfnsrP750arTsNGS1yQHApNUZYxMiz1IUuz%2FDviuyH0xmVDhlmlRJm%2FxkD8sbgZ%2B6Y8SxrtPrAyCcjXQd%2Bpiz24skfk0Or8CGFt0NVsTZ9u95v9UMIGhkytGfJnwP1mL4NI1vpoXYmSdA2bFJ%2F1RKwRFde4Yl7ETNqVQTRdsd4IFytpGVOwf4PaXWM5Rj1qxXTBldBbCTEGwGAN5duC%2FQ9J5DqS5jKJUsE%2BpPx8Ys0NtPto8%2FAnik5LisqfBmMOpP8AissY%2B98QA%2Fe%2FhuvKVLHDaZiVWtIK%2Fyyvv71LI74jpsn%2FjE0R9S%2FFAErIRjkBYbS5ueHKedhQZS8oe3D6XU6heYjT1JEpLwkzUh0iamZOX9YmIU%2FR%2B3KTbKcvBYg7ATZLsbOLo9U7EcJ7%2BNifPoc4kA20xrGRKLwfxu2pPi4xNa4yFaXqZlB2JM72iraxLqSkYVaI5%2FXMQVCFAng%2BxZRXqU8cjfm7W%2F9CZeB4Oa0r3YFTtO91TR0HOpt5srXdBLTihHFAA%2F5MZhkBcw0NikvgY6pgGeAkT6bywX931ltKc%2BERcxhbdZyvW73m4qZQUvpzGLhMsVCdtRbZzBwen8kSntsLMZDWpI6pOqvYmXtpmfr6Ho6V5W93ldYz5IJo5P9xPpQd6AUPHkI5XCDDkwLhhs5JJIGRSm6XLS0tCysslxZgM6rwd%2FWqgr%2Fa3kUQ3lPOf8JZkKMKtzOrLQ62tUlid2%2BebV1goz7kXPJnVL1gr7AjHAzxGcMXOJ&X-Amz-Signature=fd28b0f447274efc549d4329b2a66cb9c941e5e206befefa5adbfff9092cbc55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZ2KVWD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr8%2BVL9bN1FxMA6sys4mTaBSOOIe7%2BfxGJAeWDX5ISFAiBALhsH8DizLTdNvJg23CgmRwuRrkP5L4KDvep0ZZy%2BIyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM5LtmYyBraIXa%2BqOrKtwDfvXcQvPhU%2Fy1NsD2JYNZuUyJXGJhN4QIxM7AdynlD9hgCxveilGl6bBH06p%2BiNuunjuNWWJ%2F3vF39dNfoKMLqRxK4IrJ5gpMe356M10ceDDAfnsrP750arTsNGS1yQHApNUZYxMiz1IUuz%2FDviuyH0xmVDhlmlRJm%2FxkD8sbgZ%2B6Y8SxrtPrAyCcjXQd%2Bpiz24skfk0Or8CGFt0NVsTZ9u95v9UMIGhkytGfJnwP1mL4NI1vpoXYmSdA2bFJ%2F1RKwRFde4Yl7ETNqVQTRdsd4IFytpGVOwf4PaXWM5Rj1qxXTBldBbCTEGwGAN5duC%2FQ9J5DqS5jKJUsE%2BpPx8Ys0NtPto8%2FAnik5LisqfBmMOpP8AissY%2B98QA%2Fe%2FhuvKVLHDaZiVWtIK%2Fyyvv71LI74jpsn%2FjE0R9S%2FFAErIRjkBYbS5ueHKedhQZS8oe3D6XU6heYjT1JEpLwkzUh0iamZOX9YmIU%2FR%2B3KTbKcvBYg7ATZLsbOLo9U7EcJ7%2BNifPoc4kA20xrGRKLwfxu2pPi4xNa4yFaXqZlB2JM72iraxLqSkYVaI5%2FXMQVCFAng%2BxZRXqU8cjfm7W%2F9CZeB4Oa0r3YFTtO91TR0HOpt5srXdBLTihHFAA%2F5MZhkBcw0NikvgY6pgGeAkT6bywX931ltKc%2BERcxhbdZyvW73m4qZQUvpzGLhMsVCdtRbZzBwen8kSntsLMZDWpI6pOqvYmXtpmfr6Ho6V5W93ldYz5IJo5P9xPpQd6AUPHkI5XCDDkwLhhs5JJIGRSm6XLS0tCysslxZgM6rwd%2FWqgr%2Fa3kUQ3lPOf8JZkKMKtzOrLQ62tUlid2%2BebV1goz7kXPJnVL1gr7AjHAzxGcMXOJ&X-Amz-Signature=dece00df3a3f5c01067b15ca06eaea7458e289538624f8a8b1ed79d356f01a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
