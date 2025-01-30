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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZQC5OF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FxC%2B5tKbNFo7uSALWzXRDc1O7Oa9eWg2odffFZgGE9AIhAN3Cyj4x4%2F0lffubPb9dvaHoqNhFEItfB9hsyQ3gghJ9KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfDiN8xxBWDJN3ht4q3AN4vGDvxfy%2FLm9J3jJNEIs0tmh2290V7p6hCIMJEsubwjJWv1QgKi0a1JZ9cUdyjLykhALdjUxfkzr02Xqlce20iJM6FMkaSD5svADzJSdu6qKWbuOPjVz%2Bied720bgQf5aw1qcf8akR%2BGxKMWH3ALhakLdCjnvBpiJcoAxioDZrxk4Wz9C0jy5Ak4RLL8D%2F%2F6%2F6FEyhlvkq2dy8wXtGPkbApnAVCNxQL6HgfWNejnPmE76mN7hUdVwac%2F7LNFuWjxftuYsWTWh07XvcOQ3TFmuugYphB%2F7%2BGA8hmendmKw10Ura1nRD6CaTyD7jDfL1pzYf62AwztD2GyQrV%2FLFnrYGdPEDIdavA6mRrUlSets%2FPwg6jPOEcU%2BziZYe5uGqZPp6xt1Dpb8S701RRUbWcDxq8fwkn7HXQWLIeSvpqiODLnR9RsneNb05wlfQAD5aVliTmHoVysBAlk9KimFzD60G%2Fd5OI8PIec9q5u3ISfzjwLiFtjLfitJYKk1t4MjSb7vfquMMrfkQXZ%2BqcPEhDdyqR8aLdqaDlYF%2BQK9JoTml3zyfJoD6Cs1qBiQkzULlwIZED%2FzJJbq9p220ywtg0bLpBLDY%2Fk4T2UlDm5SS879JTvZZIspdHbMUfUSiTCXmO68BjqkAeWos3edFAkNGYPtmepuyS0R8S4bFOAsqQS5fVNME%2B9nBqUrUKK2o3ykDeJhPI3LPAqYoIGMp%2Bih5Gi8aBU%2BMneWayIwZ%2FavtkyBV4sDHa%2Bt7cGqIAxZk3QU%2BSJnCypNUnQHqAaM19%2Fq0sNzCXgY41qOq5jaLPUs2qvU662YQlj39JJn%2BOLDBeCkpqPif7FcI6V%2FSAmBxDrQNnT4xAVDAAWOOnMq&X-Amz-Signature=22fca24938c95ebc2c97a2cd0cfd3b7caa45394810f1da1ff3ecc56746ac746e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZQC5OF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FxC%2B5tKbNFo7uSALWzXRDc1O7Oa9eWg2odffFZgGE9AIhAN3Cyj4x4%2F0lffubPb9dvaHoqNhFEItfB9hsyQ3gghJ9KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfDiN8xxBWDJN3ht4q3AN4vGDvxfy%2FLm9J3jJNEIs0tmh2290V7p6hCIMJEsubwjJWv1QgKi0a1JZ9cUdyjLykhALdjUxfkzr02Xqlce20iJM6FMkaSD5svADzJSdu6qKWbuOPjVz%2Bied720bgQf5aw1qcf8akR%2BGxKMWH3ALhakLdCjnvBpiJcoAxioDZrxk4Wz9C0jy5Ak4RLL8D%2F%2F6%2F6FEyhlvkq2dy8wXtGPkbApnAVCNxQL6HgfWNejnPmE76mN7hUdVwac%2F7LNFuWjxftuYsWTWh07XvcOQ3TFmuugYphB%2F7%2BGA8hmendmKw10Ura1nRD6CaTyD7jDfL1pzYf62AwztD2GyQrV%2FLFnrYGdPEDIdavA6mRrUlSets%2FPwg6jPOEcU%2BziZYe5uGqZPp6xt1Dpb8S701RRUbWcDxq8fwkn7HXQWLIeSvpqiODLnR9RsneNb05wlfQAD5aVliTmHoVysBAlk9KimFzD60G%2Fd5OI8PIec9q5u3ISfzjwLiFtjLfitJYKk1t4MjSb7vfquMMrfkQXZ%2BqcPEhDdyqR8aLdqaDlYF%2BQK9JoTml3zyfJoD6Cs1qBiQkzULlwIZED%2FzJJbq9p220ywtg0bLpBLDY%2Fk4T2UlDm5SS879JTvZZIspdHbMUfUSiTCXmO68BjqkAeWos3edFAkNGYPtmepuyS0R8S4bFOAsqQS5fVNME%2B9nBqUrUKK2o3ykDeJhPI3LPAqYoIGMp%2Bih5Gi8aBU%2BMneWayIwZ%2FavtkyBV4sDHa%2Bt7cGqIAxZk3QU%2BSJnCypNUnQHqAaM19%2Fq0sNzCXgY41qOq5jaLPUs2qvU662YQlj39JJn%2BOLDBeCkpqPif7FcI6V%2FSAmBxDrQNnT4xAVDAAWOOnMq&X-Amz-Signature=2226fe95abf53270d330effd71bdad03918f033c88661cf54d7fac59d4234ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZQC5OF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FxC%2B5tKbNFo7uSALWzXRDc1O7Oa9eWg2odffFZgGE9AIhAN3Cyj4x4%2F0lffubPb9dvaHoqNhFEItfB9hsyQ3gghJ9KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfDiN8xxBWDJN3ht4q3AN4vGDvxfy%2FLm9J3jJNEIs0tmh2290V7p6hCIMJEsubwjJWv1QgKi0a1JZ9cUdyjLykhALdjUxfkzr02Xqlce20iJM6FMkaSD5svADzJSdu6qKWbuOPjVz%2Bied720bgQf5aw1qcf8akR%2BGxKMWH3ALhakLdCjnvBpiJcoAxioDZrxk4Wz9C0jy5Ak4RLL8D%2F%2F6%2F6FEyhlvkq2dy8wXtGPkbApnAVCNxQL6HgfWNejnPmE76mN7hUdVwac%2F7LNFuWjxftuYsWTWh07XvcOQ3TFmuugYphB%2F7%2BGA8hmendmKw10Ura1nRD6CaTyD7jDfL1pzYf62AwztD2GyQrV%2FLFnrYGdPEDIdavA6mRrUlSets%2FPwg6jPOEcU%2BziZYe5uGqZPp6xt1Dpb8S701RRUbWcDxq8fwkn7HXQWLIeSvpqiODLnR9RsneNb05wlfQAD5aVliTmHoVysBAlk9KimFzD60G%2Fd5OI8PIec9q5u3ISfzjwLiFtjLfitJYKk1t4MjSb7vfquMMrfkQXZ%2BqcPEhDdyqR8aLdqaDlYF%2BQK9JoTml3zyfJoD6Cs1qBiQkzULlwIZED%2FzJJbq9p220ywtg0bLpBLDY%2Fk4T2UlDm5SS879JTvZZIspdHbMUfUSiTCXmO68BjqkAeWos3edFAkNGYPtmepuyS0R8S4bFOAsqQS5fVNME%2B9nBqUrUKK2o3ykDeJhPI3LPAqYoIGMp%2Bih5Gi8aBU%2BMneWayIwZ%2FavtkyBV4sDHa%2Bt7cGqIAxZk3QU%2BSJnCypNUnQHqAaM19%2Fq0sNzCXgY41qOq5jaLPUs2qvU662YQlj39JJn%2BOLDBeCkpqPif7FcI6V%2FSAmBxDrQNnT4xAVDAAWOOnMq&X-Amz-Signature=b994a0a1b1e58e99f3c8972fc78ad3546151ce520362a082e782a99c881f2755&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
