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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHY2VB7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH66AUnimE%2B%2BA%2BXFiIhlcQCE6Gsf1%2BYzPOH0irF%2BEW6QAiAmlunoXaqXHrlvyvmNXdpHaiudeugR%2FOWtBQ9yipPh4Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMcfnB1HpvjMeRU%2F7YKtwDnBHu40pV1i2evHIPrM43cmwCMpVs0SOMpSw9TPaQ1YT0ErSPxV3qi5DoNClJ6SzttiOOZui7t1KMtjwWGgPzXF0Jfig8KKW7COQlAbH8%2BYSixiki6aU1RVR8y2EZ%2FouW0uMFEqug4zRtN0gnYkBpFrcgp604VKBma3jFPAvv6NTLqVlMmVE3YCqdQ1wDdzz%2BhXTHTQ0Uj8fRuJyilKdBiV7M2fhytCS0lwTCLQFN%2B6Q3NskH%2BKDU7khzvWUB5mjGxhiClqUpDKzuZT1bN2t9HDoC7agwV569i6d%2FqgYrW%2BV0nWec7sWYbgVI3%2F0Qqiq7lseGSKM7IIZJDaQNCHbBBHYoOTSVX0gomgFPcZLkJ4VR4B9KGvz2wzs8vNX4DkWSCE3otY7SiM8lN5TJXzndHVsq90qGClht0ucokdZsMvOGAoyljO2VjgilLMN7jzN5DIEKyW6eVktsH0tkWvIozGV%2FPxEZp6TWTcz%2FiT92qP9OPCgfsbEDCN6xqRagWbFj8EQfml46KKqekbVGUc3pkreizvezyMeDGu%2Bpb8UIShfRw2%2FeAp5LcPuxYB5PdbP8U8j9rTIL2UPFwyr0dnDdVNV5aJhBzORfES97lxy%2F%2F%2FGpBdnbPW7G4rQykvcw1uejvgY6pgGZSge50g%2BqW1cFuYLkjMmQsu42hoW2%2BR0IIpy%2FBeeihS7P1rhXHCn9y4KES8qR6%2F%2FzNXl8%2FCqJC1RHrEW8Swhdgkr8e%2FAbJjKk5%2BegM9Iw%2FfxkWB7YOvddlTRVJc96FADlXSjTfKOuNc3e3iwTvYn7DF6tpWl3Bg1gZQ7mHnOj7XjNDPQ8CCwwW5tbfwoohLw3U2deY7yvpsAAoONrelrC7ihVWuM%2B&X-Amz-Signature=9a8529ec22bb97a366afaff0871472af4317b71e8a12fc6d58729ce7051bfc07&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHY2VB7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH66AUnimE%2B%2BA%2BXFiIhlcQCE6Gsf1%2BYzPOH0irF%2BEW6QAiAmlunoXaqXHrlvyvmNXdpHaiudeugR%2FOWtBQ9yipPh4Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMcfnB1HpvjMeRU%2F7YKtwDnBHu40pV1i2evHIPrM43cmwCMpVs0SOMpSw9TPaQ1YT0ErSPxV3qi5DoNClJ6SzttiOOZui7t1KMtjwWGgPzXF0Jfig8KKW7COQlAbH8%2BYSixiki6aU1RVR8y2EZ%2FouW0uMFEqug4zRtN0gnYkBpFrcgp604VKBma3jFPAvv6NTLqVlMmVE3YCqdQ1wDdzz%2BhXTHTQ0Uj8fRuJyilKdBiV7M2fhytCS0lwTCLQFN%2B6Q3NskH%2BKDU7khzvWUB5mjGxhiClqUpDKzuZT1bN2t9HDoC7agwV569i6d%2FqgYrW%2BV0nWec7sWYbgVI3%2F0Qqiq7lseGSKM7IIZJDaQNCHbBBHYoOTSVX0gomgFPcZLkJ4VR4B9KGvz2wzs8vNX4DkWSCE3otY7SiM8lN5TJXzndHVsq90qGClht0ucokdZsMvOGAoyljO2VjgilLMN7jzN5DIEKyW6eVktsH0tkWvIozGV%2FPxEZp6TWTcz%2FiT92qP9OPCgfsbEDCN6xqRagWbFj8EQfml46KKqekbVGUc3pkreizvezyMeDGu%2Bpb8UIShfRw2%2FeAp5LcPuxYB5PdbP8U8j9rTIL2UPFwyr0dnDdVNV5aJhBzORfES97lxy%2F%2F%2FGpBdnbPW7G4rQykvcw1uejvgY6pgGZSge50g%2BqW1cFuYLkjMmQsu42hoW2%2BR0IIpy%2FBeeihS7P1rhXHCn9y4KES8qR6%2F%2FzNXl8%2FCqJC1RHrEW8Swhdgkr8e%2FAbJjKk5%2BegM9Iw%2FfxkWB7YOvddlTRVJc96FADlXSjTfKOuNc3e3iwTvYn7DF6tpWl3Bg1gZQ7mHnOj7XjNDPQ8CCwwW5tbfwoohLw3U2deY7yvpsAAoONrelrC7ihVWuM%2B&X-Amz-Signature=fb43c81c5b6e3d5f07ec2d3678a5ca3d3ee9fb75fd4532513cbc58a24103f1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHY2VB7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH66AUnimE%2B%2BA%2BXFiIhlcQCE6Gsf1%2BYzPOH0irF%2BEW6QAiAmlunoXaqXHrlvyvmNXdpHaiudeugR%2FOWtBQ9yipPh4Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMcfnB1HpvjMeRU%2F7YKtwDnBHu40pV1i2evHIPrM43cmwCMpVs0SOMpSw9TPaQ1YT0ErSPxV3qi5DoNClJ6SzttiOOZui7t1KMtjwWGgPzXF0Jfig8KKW7COQlAbH8%2BYSixiki6aU1RVR8y2EZ%2FouW0uMFEqug4zRtN0gnYkBpFrcgp604VKBma3jFPAvv6NTLqVlMmVE3YCqdQ1wDdzz%2BhXTHTQ0Uj8fRuJyilKdBiV7M2fhytCS0lwTCLQFN%2B6Q3NskH%2BKDU7khzvWUB5mjGxhiClqUpDKzuZT1bN2t9HDoC7agwV569i6d%2FqgYrW%2BV0nWec7sWYbgVI3%2F0Qqiq7lseGSKM7IIZJDaQNCHbBBHYoOTSVX0gomgFPcZLkJ4VR4B9KGvz2wzs8vNX4DkWSCE3otY7SiM8lN5TJXzndHVsq90qGClht0ucokdZsMvOGAoyljO2VjgilLMN7jzN5DIEKyW6eVktsH0tkWvIozGV%2FPxEZp6TWTcz%2FiT92qP9OPCgfsbEDCN6xqRagWbFj8EQfml46KKqekbVGUc3pkreizvezyMeDGu%2Bpb8UIShfRw2%2FeAp5LcPuxYB5PdbP8U8j9rTIL2UPFwyr0dnDdVNV5aJhBzORfES97lxy%2F%2F%2FGpBdnbPW7G4rQykvcw1uejvgY6pgGZSge50g%2BqW1cFuYLkjMmQsu42hoW2%2BR0IIpy%2FBeeihS7P1rhXHCn9y4KES8qR6%2F%2FzNXl8%2FCqJC1RHrEW8Swhdgkr8e%2FAbJjKk5%2BegM9Iw%2FfxkWB7YOvddlTRVJc96FADlXSjTfKOuNc3e3iwTvYn7DF6tpWl3Bg1gZQ7mHnOj7XjNDPQ8CCwwW5tbfwoohLw3U2deY7yvpsAAoONrelrC7ihVWuM%2B&X-Amz-Signature=cde21239d05b81f1ff04ebcf93e308245502ac94b7db96b1225084e6093b9289&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
