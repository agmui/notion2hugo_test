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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2RPWAD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8v1NX3pBO%2F3NTj%2FWEYgyfNFgwdUReQL1GXgE782kfzAiAo9nMjVtjXP6Qqx2ptE2J6kMh3XdZk9FN%2FwGj3w07EhiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRx3HW%2BiTtaa%2Fyf4OKtwD%2BxUj2BJ8TlGR5BYxwVlDXEI1RVAaYPmXzGGIWpNrmcsxiHW3Bsv9ARz6hv6g9TFWMAFCjtSVvHSB49rIaJ%2FPtGBN1DJP4s3RN5arEbvm1k7Fs1ODIeaT26VzMpkZL5jSPIMGEw7w8wvu5RpLJMYOZq%2BS2CGxeMeXQzOJzuwUsbW2sYu0k%2FQeXVO%2FbiqnNcKR3mtmrxW%2B4ZzdrYYdAumJrTAVODJ555Dip78u3fdPvKODJdw%2FBaYCNO7dGMra3QP9sEOdKLWLJUALn4IcZd1GM06wsw1jzp7s0rx72tqvEoEBNXkUVAWudk9ZafDO6ztFn%2FBucdzZUqQMnvOo3Q3VBK1ZqiDq0bY%2B7X%2B3JQeod5Ai7AagYvfEFT1nqNFJzxYr7EfBKnZpTKln9JtdwQY9kHZFdjKQ8WkOAuV1bakZAGS1OOTvcrBWipMJ0aJ8EQPe8F1nbJXkcr00OExUviJ0P0QqBwU99SLMnSxYTbfBnXaAz%2F7nn%2BQyBglmUZb4Y6Pe%2FnMIXOnEdhOKzoQipslNNjVhSAfYva9YuFaJPf0iIZ5sWCSvx%2BG2srYMxEAxxZDHKSM%2BduzvH1ceoGlizr3AkPBXftDekSvFTTd%2FTFuSUJ6jSTihzbSOoavjH7YwgeSDvwY6pgGmO1ueOfW0Y7U%2BFb2VFGKcHpmdiy9exmGPcbBGODf009UE6MqweQnRWWszbgZ1Ms%2F1%2F%2BwxS%2ByHLioDzMAgy%2B1oNUjD70Hw6imHErFS4DSrjVzR1rggAlTYPkxsoXZJc7RNWuBNHCAO0Y7qKI7Flwjbd73NtuN6h1UOuCx%2FDtttZfOtMAuAAg91Ff0nQ2qVdJXIJeymgUskq72jvwQbhUoz6EOThAp3&X-Amz-Signature=2270607d5f913c20deda2f9607720343cd53f30af13f30943a6e52ce1a2c7721&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2RPWAD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8v1NX3pBO%2F3NTj%2FWEYgyfNFgwdUReQL1GXgE782kfzAiAo9nMjVtjXP6Qqx2ptE2J6kMh3XdZk9FN%2FwGj3w07EhiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRx3HW%2BiTtaa%2Fyf4OKtwD%2BxUj2BJ8TlGR5BYxwVlDXEI1RVAaYPmXzGGIWpNrmcsxiHW3Bsv9ARz6hv6g9TFWMAFCjtSVvHSB49rIaJ%2FPtGBN1DJP4s3RN5arEbvm1k7Fs1ODIeaT26VzMpkZL5jSPIMGEw7w8wvu5RpLJMYOZq%2BS2CGxeMeXQzOJzuwUsbW2sYu0k%2FQeXVO%2FbiqnNcKR3mtmrxW%2B4ZzdrYYdAumJrTAVODJ555Dip78u3fdPvKODJdw%2FBaYCNO7dGMra3QP9sEOdKLWLJUALn4IcZd1GM06wsw1jzp7s0rx72tqvEoEBNXkUVAWudk9ZafDO6ztFn%2FBucdzZUqQMnvOo3Q3VBK1ZqiDq0bY%2B7X%2B3JQeod5Ai7AagYvfEFT1nqNFJzxYr7EfBKnZpTKln9JtdwQY9kHZFdjKQ8WkOAuV1bakZAGS1OOTvcrBWipMJ0aJ8EQPe8F1nbJXkcr00OExUviJ0P0QqBwU99SLMnSxYTbfBnXaAz%2F7nn%2BQyBglmUZb4Y6Pe%2FnMIXOnEdhOKzoQipslNNjVhSAfYva9YuFaJPf0iIZ5sWCSvx%2BG2srYMxEAxxZDHKSM%2BduzvH1ceoGlizr3AkPBXftDekSvFTTd%2FTFuSUJ6jSTihzbSOoavjH7YwgeSDvwY6pgGmO1ueOfW0Y7U%2BFb2VFGKcHpmdiy9exmGPcbBGODf009UE6MqweQnRWWszbgZ1Ms%2F1%2F%2BwxS%2ByHLioDzMAgy%2B1oNUjD70Hw6imHErFS4DSrjVzR1rggAlTYPkxsoXZJc7RNWuBNHCAO0Y7qKI7Flwjbd73NtuN6h1UOuCx%2FDtttZfOtMAuAAg91Ff0nQ2qVdJXIJeymgUskq72jvwQbhUoz6EOThAp3&X-Amz-Signature=a679af1b5312c92b6b24906cd3c94f1d27871ec3a445ae5d81ddca682c4d3962&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2RPWAD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8v1NX3pBO%2F3NTj%2FWEYgyfNFgwdUReQL1GXgE782kfzAiAo9nMjVtjXP6Qqx2ptE2J6kMh3XdZk9FN%2FwGj3w07EhiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRx3HW%2BiTtaa%2Fyf4OKtwD%2BxUj2BJ8TlGR5BYxwVlDXEI1RVAaYPmXzGGIWpNrmcsxiHW3Bsv9ARz6hv6g9TFWMAFCjtSVvHSB49rIaJ%2FPtGBN1DJP4s3RN5arEbvm1k7Fs1ODIeaT26VzMpkZL5jSPIMGEw7w8wvu5RpLJMYOZq%2BS2CGxeMeXQzOJzuwUsbW2sYu0k%2FQeXVO%2FbiqnNcKR3mtmrxW%2B4ZzdrYYdAumJrTAVODJ555Dip78u3fdPvKODJdw%2FBaYCNO7dGMra3QP9sEOdKLWLJUALn4IcZd1GM06wsw1jzp7s0rx72tqvEoEBNXkUVAWudk9ZafDO6ztFn%2FBucdzZUqQMnvOo3Q3VBK1ZqiDq0bY%2B7X%2B3JQeod5Ai7AagYvfEFT1nqNFJzxYr7EfBKnZpTKln9JtdwQY9kHZFdjKQ8WkOAuV1bakZAGS1OOTvcrBWipMJ0aJ8EQPe8F1nbJXkcr00OExUviJ0P0QqBwU99SLMnSxYTbfBnXaAz%2F7nn%2BQyBglmUZb4Y6Pe%2FnMIXOnEdhOKzoQipslNNjVhSAfYva9YuFaJPf0iIZ5sWCSvx%2BG2srYMxEAxxZDHKSM%2BduzvH1ceoGlizr3AkPBXftDekSvFTTd%2FTFuSUJ6jSTihzbSOoavjH7YwgeSDvwY6pgGmO1ueOfW0Y7U%2BFb2VFGKcHpmdiy9exmGPcbBGODf009UE6MqweQnRWWszbgZ1Ms%2F1%2F%2BwxS%2ByHLioDzMAgy%2B1oNUjD70Hw6imHErFS4DSrjVzR1rggAlTYPkxsoXZJc7RNWuBNHCAO0Y7qKI7Flwjbd73NtuN6h1UOuCx%2FDtttZfOtMAuAAg91Ff0nQ2qVdJXIJeymgUskq72jvwQbhUoz6EOThAp3&X-Amz-Signature=0f3aef0e3d8b8a1caab9fc9a67216c7451dd999f24b086e12ce1da9e95a2c724&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
