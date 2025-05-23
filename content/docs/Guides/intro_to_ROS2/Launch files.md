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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632X7ORDE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCsHP%2BGUWgoUVgdwYnkeAf6oHefSUBZfNyjGleJux%2FK0gIhAPKhUC0o9EljBSQc6M541nn6GJpytskbGAwfZ554EYxRKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf93h2K%2Bab5bBn6NMq3AMNQCxyQ8Z8W7Tm496qwAHD6p6uxgujDIs8iwzNgOoNGtpC9iSyu0Xd0Pxkbe2QbxELbkG4QRg2zRAWvMVj56NKzML2p%2Ff4FrKkgPbfTo3FmffvqvsMCrQPoi%2By47YymJNGMGzNmeE7ODPN11MbKrNF59XFLoIJ1iNJ%2Fak0HQUqIcXHeZ79sSkC1dXOQL43oMefZnMGDyyxFejWJWcz73LD1WP3Ketv1%2BmYqKrcyN81nPTmsmZL7UrMZjGco4O7bQQu%2FIbZHaIxq56Q9leYcTwVnw%2BFym%2BfLxBs%2FKq6A0qX6MYyGyS3XzJhVDeSHIgdqSE9B1if7BXn5bhRl7%2F7eHO5tQsukMZZwTIeFM%2B8K9GAYJ1ccoG7yxK%2F9j1HXN6IbQ%2BIZlk2YRt7dXjy%2Bw%2FP5%2FpR4nZxGegw0cWxQaiE0xxbm4xmqlUsvrPx7J6RxerT19NFBQQkZh%2FNL7SamozMKmu39tje5nYv6Ly8uMNfMSA2B%2BnhagPAdhcjtygtuAc8K79wScRSnKrCwh1IqPolYlP%2Fdg11B2AQR3z7LQET9L49in2nlu%2BptzZVkFxliG2R4mfgkTbXqLvWNy9eP6zGzI9N6jAUwVmZBGDa27UxYPPxFGRL9HfOLx3eqG8AvDCPosPBBjqkAbD%2Fh5roeLx%2F8x2Q7K%2Fk7SfWrB5ARUHBgL2aDw2n%2Bv5yMdU9S9tl2jmfTPequeDzYOAM2pvFAwAi1d0p1uUfj%2FKMQVd2heOJ9cOiq28YO%2B%2FYYNJHJ8RHv%2FUPWDNPXoBRUx8GhBhpgP5CW%2BAY1pDa5%2BYIzbvmtk02s7U8XL%2BLVqoHxbC72ZIbMOvBrWtOKj8tiI2Ux6gffYlo95ddaqmAE%2FZkYIo7&X-Amz-Signature=017379d37980a57ec77b86a8caeb13066aa707e61cacb6ce2ee3117013d8299d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632X7ORDE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCsHP%2BGUWgoUVgdwYnkeAf6oHefSUBZfNyjGleJux%2FK0gIhAPKhUC0o9EljBSQc6M541nn6GJpytskbGAwfZ554EYxRKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf93h2K%2Bab5bBn6NMq3AMNQCxyQ8Z8W7Tm496qwAHD6p6uxgujDIs8iwzNgOoNGtpC9iSyu0Xd0Pxkbe2QbxELbkG4QRg2zRAWvMVj56NKzML2p%2Ff4FrKkgPbfTo3FmffvqvsMCrQPoi%2By47YymJNGMGzNmeE7ODPN11MbKrNF59XFLoIJ1iNJ%2Fak0HQUqIcXHeZ79sSkC1dXOQL43oMefZnMGDyyxFejWJWcz73LD1WP3Ketv1%2BmYqKrcyN81nPTmsmZL7UrMZjGco4O7bQQu%2FIbZHaIxq56Q9leYcTwVnw%2BFym%2BfLxBs%2FKq6A0qX6MYyGyS3XzJhVDeSHIgdqSE9B1if7BXn5bhRl7%2F7eHO5tQsukMZZwTIeFM%2B8K9GAYJ1ccoG7yxK%2F9j1HXN6IbQ%2BIZlk2YRt7dXjy%2Bw%2FP5%2FpR4nZxGegw0cWxQaiE0xxbm4xmqlUsvrPx7J6RxerT19NFBQQkZh%2FNL7SamozMKmu39tje5nYv6Ly8uMNfMSA2B%2BnhagPAdhcjtygtuAc8K79wScRSnKrCwh1IqPolYlP%2Fdg11B2AQR3z7LQET9L49in2nlu%2BptzZVkFxliG2R4mfgkTbXqLvWNy9eP6zGzI9N6jAUwVmZBGDa27UxYPPxFGRL9HfOLx3eqG8AvDCPosPBBjqkAbD%2Fh5roeLx%2F8x2Q7K%2Fk7SfWrB5ARUHBgL2aDw2n%2Bv5yMdU9S9tl2jmfTPequeDzYOAM2pvFAwAi1d0p1uUfj%2FKMQVd2heOJ9cOiq28YO%2B%2FYYNJHJ8RHv%2FUPWDNPXoBRUx8GhBhpgP5CW%2BAY1pDa5%2BYIzbvmtk02s7U8XL%2BLVqoHxbC72ZIbMOvBrWtOKj8tiI2Ux6gffYlo95ddaqmAE%2FZkYIo7&X-Amz-Signature=2e7fb8cef052de2d46d6f43a01286ab9b086683b14f377efe66fd19bd4c04fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632X7ORDE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCsHP%2BGUWgoUVgdwYnkeAf6oHefSUBZfNyjGleJux%2FK0gIhAPKhUC0o9EljBSQc6M541nn6GJpytskbGAwfZ554EYxRKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf93h2K%2Bab5bBn6NMq3AMNQCxyQ8Z8W7Tm496qwAHD6p6uxgujDIs8iwzNgOoNGtpC9iSyu0Xd0Pxkbe2QbxELbkG4QRg2zRAWvMVj56NKzML2p%2Ff4FrKkgPbfTo3FmffvqvsMCrQPoi%2By47YymJNGMGzNmeE7ODPN11MbKrNF59XFLoIJ1iNJ%2Fak0HQUqIcXHeZ79sSkC1dXOQL43oMefZnMGDyyxFejWJWcz73LD1WP3Ketv1%2BmYqKrcyN81nPTmsmZL7UrMZjGco4O7bQQu%2FIbZHaIxq56Q9leYcTwVnw%2BFym%2BfLxBs%2FKq6A0qX6MYyGyS3XzJhVDeSHIgdqSE9B1if7BXn5bhRl7%2F7eHO5tQsukMZZwTIeFM%2B8K9GAYJ1ccoG7yxK%2F9j1HXN6IbQ%2BIZlk2YRt7dXjy%2Bw%2FP5%2FpR4nZxGegw0cWxQaiE0xxbm4xmqlUsvrPx7J6RxerT19NFBQQkZh%2FNL7SamozMKmu39tje5nYv6Ly8uMNfMSA2B%2BnhagPAdhcjtygtuAc8K79wScRSnKrCwh1IqPolYlP%2Fdg11B2AQR3z7LQET9L49in2nlu%2BptzZVkFxliG2R4mfgkTbXqLvWNy9eP6zGzI9N6jAUwVmZBGDa27UxYPPxFGRL9HfOLx3eqG8AvDCPosPBBjqkAbD%2Fh5roeLx%2F8x2Q7K%2Fk7SfWrB5ARUHBgL2aDw2n%2Bv5yMdU9S9tl2jmfTPequeDzYOAM2pvFAwAi1d0p1uUfj%2FKMQVd2heOJ9cOiq28YO%2B%2FYYNJHJ8RHv%2FUPWDNPXoBRUx8GhBhpgP5CW%2BAY1pDa5%2BYIzbvmtk02s7U8XL%2BLVqoHxbC72ZIbMOvBrWtOKj8tiI2Ux6gffYlo95ddaqmAE%2FZkYIo7&X-Amz-Signature=8d6cc6d51efa73c28eb6eab317adfb7e3389bed81732bf828ff18e9b7261f8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
