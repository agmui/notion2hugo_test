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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNHETLN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEUQB4J%2BO62zbJzwzbWEPN9na5HrM87K%2F6rOGEPnwFUTAiBel781hMsjuELi7Cc7YP6zrT8xDCprUnIjfqO3vJltfiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa7XOyp8vjJoJWRiYKtwDKJVWtxK4Bgupd6gcNOfiyRycMKsw%2Biu2up6ZhvsLgNzxcKA4Xkjr4sNychXFGVVuogDMpGwNjIIyca4G%2F4TwoOtppfJbFl0zTkMmsOb%2FKVz%2Fpdnwnb0ZVncbjVqlbtZhV5CFR7WhZHVRtY3UuUgEorKVijKBuzpuA6F16KAw4p%2B1HnOvJzXfhGKdNLk125qJWwqmIylSW%2FSZe7ZLr8ivKjTHc%2FitkeyKwA3DZ2TbQMMXryds0xBNVUK0uP9gDrBEl6Jcg8xYH%2BI8e4M7MKfioKcesQXmg78BzMjBpkI2wO63FZywj45C6jKoc4IF7FzLQQEKTdzne6z8%2BmqMC%2FEyGMYrme4oc6PXyb0VDZ7SiVhZ1%2FZRnrcEfIBqefjZXwl55SuZYBUJe7CP%2FskGqvOf5Sj%2BNwyUclTu0bDhXqA3cF2mA%2BLs3vQccIhiM6rE9hxJuhUqtaj%2FH07U%2B3Abpjh3E4S6SEjPl%2Fa89%2BeVxMfbTuvZIimiRWvWnFM9eghApFPpY9Hvs3mAPAwJLOyE8kskA6tckgAjYHIq1J0uUw7CmiFJpPFYyFaTE4FH5Ek4mYREbQn8zGQH0P7HECcHavnYaabRHtNfBnRlaHz%2BYRJhEv4jp9yktnKejxmQeaowhIenvwY6pgFGz%2BMTotZLTaSBVeD2JWrW1G9Da7FI13l5t%2BeKKo3%2BwTlvPAER7yeD62aN%2Ba%2Bzbv%2BR%2FPOOnHeU60NX4jds8JTLOg%2BhWNbFhkR3%2BnRntCxpoPsHgL5drLqSk1PnKgetea0Qy4S7Zwp8YoJRd47G0azDjkHuP7be6T19VJ%2F%2Bl037cdprUwbd4amE%2FDuLjd837cWc15km%2BC32mg%2BJwDYq5L%2B3MgH%2FWTbK&X-Amz-Signature=c4268f98dcd90b797e24f77f1394407994068b51582921315db585b3651000af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNHETLN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEUQB4J%2BO62zbJzwzbWEPN9na5HrM87K%2F6rOGEPnwFUTAiBel781hMsjuELi7Cc7YP6zrT8xDCprUnIjfqO3vJltfiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa7XOyp8vjJoJWRiYKtwDKJVWtxK4Bgupd6gcNOfiyRycMKsw%2Biu2up6ZhvsLgNzxcKA4Xkjr4sNychXFGVVuogDMpGwNjIIyca4G%2F4TwoOtppfJbFl0zTkMmsOb%2FKVz%2Fpdnwnb0ZVncbjVqlbtZhV5CFR7WhZHVRtY3UuUgEorKVijKBuzpuA6F16KAw4p%2B1HnOvJzXfhGKdNLk125qJWwqmIylSW%2FSZe7ZLr8ivKjTHc%2FitkeyKwA3DZ2TbQMMXryds0xBNVUK0uP9gDrBEl6Jcg8xYH%2BI8e4M7MKfioKcesQXmg78BzMjBpkI2wO63FZywj45C6jKoc4IF7FzLQQEKTdzne6z8%2BmqMC%2FEyGMYrme4oc6PXyb0VDZ7SiVhZ1%2FZRnrcEfIBqefjZXwl55SuZYBUJe7CP%2FskGqvOf5Sj%2BNwyUclTu0bDhXqA3cF2mA%2BLs3vQccIhiM6rE9hxJuhUqtaj%2FH07U%2B3Abpjh3E4S6SEjPl%2Fa89%2BeVxMfbTuvZIimiRWvWnFM9eghApFPpY9Hvs3mAPAwJLOyE8kskA6tckgAjYHIq1J0uUw7CmiFJpPFYyFaTE4FH5Ek4mYREbQn8zGQH0P7HECcHavnYaabRHtNfBnRlaHz%2BYRJhEv4jp9yktnKejxmQeaowhIenvwY6pgFGz%2BMTotZLTaSBVeD2JWrW1G9Da7FI13l5t%2BeKKo3%2BwTlvPAER7yeD62aN%2Ba%2Bzbv%2BR%2FPOOnHeU60NX4jds8JTLOg%2BhWNbFhkR3%2BnRntCxpoPsHgL5drLqSk1PnKgetea0Qy4S7Zwp8YoJRd47G0azDjkHuP7be6T19VJ%2F%2Bl037cdprUwbd4amE%2FDuLjd837cWc15km%2BC32mg%2BJwDYq5L%2B3MgH%2FWTbK&X-Amz-Signature=aa64d2767d565712f770bf8a7c716ae24cced8e4f93a390177e663401bc38e79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNHETLN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEUQB4J%2BO62zbJzwzbWEPN9na5HrM87K%2F6rOGEPnwFUTAiBel781hMsjuELi7Cc7YP6zrT8xDCprUnIjfqO3vJltfiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa7XOyp8vjJoJWRiYKtwDKJVWtxK4Bgupd6gcNOfiyRycMKsw%2Biu2up6ZhvsLgNzxcKA4Xkjr4sNychXFGVVuogDMpGwNjIIyca4G%2F4TwoOtppfJbFl0zTkMmsOb%2FKVz%2Fpdnwnb0ZVncbjVqlbtZhV5CFR7WhZHVRtY3UuUgEorKVijKBuzpuA6F16KAw4p%2B1HnOvJzXfhGKdNLk125qJWwqmIylSW%2FSZe7ZLr8ivKjTHc%2FitkeyKwA3DZ2TbQMMXryds0xBNVUK0uP9gDrBEl6Jcg8xYH%2BI8e4M7MKfioKcesQXmg78BzMjBpkI2wO63FZywj45C6jKoc4IF7FzLQQEKTdzne6z8%2BmqMC%2FEyGMYrme4oc6PXyb0VDZ7SiVhZ1%2FZRnrcEfIBqefjZXwl55SuZYBUJe7CP%2FskGqvOf5Sj%2BNwyUclTu0bDhXqA3cF2mA%2BLs3vQccIhiM6rE9hxJuhUqtaj%2FH07U%2B3Abpjh3E4S6SEjPl%2Fa89%2BeVxMfbTuvZIimiRWvWnFM9eghApFPpY9Hvs3mAPAwJLOyE8kskA6tckgAjYHIq1J0uUw7CmiFJpPFYyFaTE4FH5Ek4mYREbQn8zGQH0P7HECcHavnYaabRHtNfBnRlaHz%2BYRJhEv4jp9yktnKejxmQeaowhIenvwY6pgFGz%2BMTotZLTaSBVeD2JWrW1G9Da7FI13l5t%2BeKKo3%2BwTlvPAER7yeD62aN%2Ba%2Bzbv%2BR%2FPOOnHeU60NX4jds8JTLOg%2BhWNbFhkR3%2BnRntCxpoPsHgL5drLqSk1PnKgetea0Qy4S7Zwp8YoJRd47G0azDjkHuP7be6T19VJ%2F%2Bl037cdprUwbd4amE%2FDuLjd837cWc15km%2BC32mg%2BJwDYq5L%2B3MgH%2FWTbK&X-Amz-Signature=96a3e5552ed382bb1e846af402a0a3d358f24289a6b6c78f2c1a9a203647f300&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
