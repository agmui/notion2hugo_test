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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57ZOGXG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDFuBPaByKa7Z8jEggZL3l3p7VT%2FoVzy3duZLMmFld85QIhAOHq9RjzYSXNpkdlSl%2FfpKenqO6EKTWehXybNevzQ3LgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzA04PWzXVxFZnQwzUq3AOTUfiKrGPwKlmgdCiBWg8GWxRy2JJW%2FEGJ5gAYXk%2FOsGT9N6U%2BOJW54v43fDDs9%2Fod80zcTI2kbkTyvtH1kuZYzrbCa8klK0%2FXNYOsLm1BnpctIvqmZnI4WF7pn%2FyJSOuiffwT0ymtHFSBbAewF7aP5O9Be3rzOcI7JbdEzKw575oksebtmEzUfOXsGCz%2FZP1YuIALe7GNzl122FBJhpSZrysLA%2BvblQAH%2FPbgrN6F3ZA8Br%2BrSXsWDw8txK1i4vv7RyY7n1cibDrUNEWHikQyPc3wtnB5zXacHRok4y89tfaEACpkx18GM7aYpRCEsYLIMygSC4MC5Z8GSR2wYiONUAqnb2kiUweZVnzIkLQSBVtdxpjORe%2Bgfv31nGIhEjOL5ridfbeO5P8XeyJszgA%2F2z2%2FJzGgqjZYEUQydd37G%2FOX9%2FQRbuLegqGHQbB4Gopwtn%2FaXZlOqZ2HMkc2%2BF%2BPD%2BXxizoaEg2J7gUvB2SOslShofA0Gzgz%2BVPwIzemNIRk527xgz6CHrMgN3%2F9F8u2fzzHFp3%2B1Wxi0bJoEpL9qB7p7SdSwtHbfGGlTypp8kUBdHaLLBBRKWbcXS%2FqwtDhzBBhfOzaBGqBK%2FDwdDBRh6H7BBpmkB0Dfw8BUjCx7v%2B9BjqkARgGYcjuDnjL09CgVNQYqdvVqBQwjaHz0fft9XXQUw1oSpYR6mfWi2RMfDrHxwppL%2B6q042VrGNxm6Siydhr1rX4T7c7LaEn20ZcR%2BKQtLFqWPOCktj9GBcSodyI6BAipp80nPQ%2Fn2gkQDFO6ytl%2FLYHqWBMoZvdUHAJMQH5ztADxsuLKvaarBwSemGBnYI6WSh9oniCQksSN5wy%2BYiBatV%2F3mNi&X-Amz-Signature=ad2a3708df5b4ea85df6e12c2c293b0d4881fd10cdcb1542f714e6ce0b42d9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57ZOGXG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDFuBPaByKa7Z8jEggZL3l3p7VT%2FoVzy3duZLMmFld85QIhAOHq9RjzYSXNpkdlSl%2FfpKenqO6EKTWehXybNevzQ3LgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzA04PWzXVxFZnQwzUq3AOTUfiKrGPwKlmgdCiBWg8GWxRy2JJW%2FEGJ5gAYXk%2FOsGT9N6U%2BOJW54v43fDDs9%2Fod80zcTI2kbkTyvtH1kuZYzrbCa8klK0%2FXNYOsLm1BnpctIvqmZnI4WF7pn%2FyJSOuiffwT0ymtHFSBbAewF7aP5O9Be3rzOcI7JbdEzKw575oksebtmEzUfOXsGCz%2FZP1YuIALe7GNzl122FBJhpSZrysLA%2BvblQAH%2FPbgrN6F3ZA8Br%2BrSXsWDw8txK1i4vv7RyY7n1cibDrUNEWHikQyPc3wtnB5zXacHRok4y89tfaEACpkx18GM7aYpRCEsYLIMygSC4MC5Z8GSR2wYiONUAqnb2kiUweZVnzIkLQSBVtdxpjORe%2Bgfv31nGIhEjOL5ridfbeO5P8XeyJszgA%2F2z2%2FJzGgqjZYEUQydd37G%2FOX9%2FQRbuLegqGHQbB4Gopwtn%2FaXZlOqZ2HMkc2%2BF%2BPD%2BXxizoaEg2J7gUvB2SOslShofA0Gzgz%2BVPwIzemNIRk527xgz6CHrMgN3%2F9F8u2fzzHFp3%2B1Wxi0bJoEpL9qB7p7SdSwtHbfGGlTypp8kUBdHaLLBBRKWbcXS%2FqwtDhzBBhfOzaBGqBK%2FDwdDBRh6H7BBpmkB0Dfw8BUjCx7v%2B9BjqkARgGYcjuDnjL09CgVNQYqdvVqBQwjaHz0fft9XXQUw1oSpYR6mfWi2RMfDrHxwppL%2B6q042VrGNxm6Siydhr1rX4T7c7LaEn20ZcR%2BKQtLFqWPOCktj9GBcSodyI6BAipp80nPQ%2Fn2gkQDFO6ytl%2FLYHqWBMoZvdUHAJMQH5ztADxsuLKvaarBwSemGBnYI6WSh9oniCQksSN5wy%2BYiBatV%2F3mNi&X-Amz-Signature=708c94cfd1091ab806f2a08466223dea2a8a38e10d95a91c2a726147d02757a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57ZOGXG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDFuBPaByKa7Z8jEggZL3l3p7VT%2FoVzy3duZLMmFld85QIhAOHq9RjzYSXNpkdlSl%2FfpKenqO6EKTWehXybNevzQ3LgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzA04PWzXVxFZnQwzUq3AOTUfiKrGPwKlmgdCiBWg8GWxRy2JJW%2FEGJ5gAYXk%2FOsGT9N6U%2BOJW54v43fDDs9%2Fod80zcTI2kbkTyvtH1kuZYzrbCa8klK0%2FXNYOsLm1BnpctIvqmZnI4WF7pn%2FyJSOuiffwT0ymtHFSBbAewF7aP5O9Be3rzOcI7JbdEzKw575oksebtmEzUfOXsGCz%2FZP1YuIALe7GNzl122FBJhpSZrysLA%2BvblQAH%2FPbgrN6F3ZA8Br%2BrSXsWDw8txK1i4vv7RyY7n1cibDrUNEWHikQyPc3wtnB5zXacHRok4y89tfaEACpkx18GM7aYpRCEsYLIMygSC4MC5Z8GSR2wYiONUAqnb2kiUweZVnzIkLQSBVtdxpjORe%2Bgfv31nGIhEjOL5ridfbeO5P8XeyJszgA%2F2z2%2FJzGgqjZYEUQydd37G%2FOX9%2FQRbuLegqGHQbB4Gopwtn%2FaXZlOqZ2HMkc2%2BF%2BPD%2BXxizoaEg2J7gUvB2SOslShofA0Gzgz%2BVPwIzemNIRk527xgz6CHrMgN3%2F9F8u2fzzHFp3%2B1Wxi0bJoEpL9qB7p7SdSwtHbfGGlTypp8kUBdHaLLBBRKWbcXS%2FqwtDhzBBhfOzaBGqBK%2FDwdDBRh6H7BBpmkB0Dfw8BUjCx7v%2B9BjqkARgGYcjuDnjL09CgVNQYqdvVqBQwjaHz0fft9XXQUw1oSpYR6mfWi2RMfDrHxwppL%2B6q042VrGNxm6Siydhr1rX4T7c7LaEn20ZcR%2BKQtLFqWPOCktj9GBcSodyI6BAipp80nPQ%2Fn2gkQDFO6ytl%2FLYHqWBMoZvdUHAJMQH5ztADxsuLKvaarBwSemGBnYI6WSh9oniCQksSN5wy%2BYiBatV%2F3mNi&X-Amz-Signature=091526a2c89d55cc1ac5cc8e1d80764a2078c291180d63a4635e6867556877a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
