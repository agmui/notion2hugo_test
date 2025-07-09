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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXEYL3O%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfg%2FSy841LWi8RFxwOA4xauAmjRPtCErI0%2Fz0RAuqv2AiEA3qRhLWxvz8H7HwVpkcaiKb1su5ftjFYBzHwLobDNDzsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA%2FjsWpX%2FlMh%2ForyyrcA4RW%2BlxWzBPb8eQ5gajauThsM0hQkV6Nk5Y06sx%2FZtEstdM3DMFITE2r%2BXToXN1QgnviZhy%2FgQTrYsJwEZgfCL9tea8J4aZJNHzJ%2Btg5okN4OFTNFiBECwagKbQhIBwZH8vIsLjkCPsjDjTdTtg5Q4IEhBwhuQOaQ6SRB6m1OHm40kocBVNnN2K94iKZM32OrOFFZQjW5boMOPbU6tU6mMnUFXRJnMQtz9sMsAqHa7%2FgWt0bSAepixROPm232gyH2WI2BLx7OhCKAuWwiPuW0Ew3SeNNQUqlmWDE1Gbpp54jukZbotiCDVwW9TCTSxrUItw8sRWVvGMYTyCFFA87MAItN39Q7U63Mk4qDHKVAcqU69ZaVaLIFLeraCgj3At3aB8Bw9m16r4fM6WP8nGRj1a6yZFpZffWg5dHEvqfPaarJzjq2J%2BwhSm0CEd59YyIOAM7EmtWZhQvaAW8GFbosWYHFs23ZhJsM5y325n2DdVDKKoIBUVbiEoqHkHxV4uFVwx0DmIEz6H0MsZCErt4TIJ0o%2F69h96mI2g5mBicOhRLFJm6xXYBBVYFu6zhZAHlMpmM6HgUDT7d21CQIo5rPgIwWloYZiwf63SFKrF%2BAF9YCHnxGdPZxpoMk%2Fs1MPKYusMGOqUB%2BgIlAPNT6iloxmGVIvkwVT%2F%2BsWDaa3QIPFSLCROAZoCUWOzkrrqhV%2BvJjwMyaRz1ekYn20OoMnqc38nhJHY%2FDD1HFGaf95BBNL7z9NHixvad1hO%2Bx7BqaPmz2Eaq%2F82jVBEcQ57UyQQ8wVv4A2eGY511TbUmNaLdFASpsca4cW51OwseZfC4UcqLLnQf1D7R%2B2rKf7FbsAfk%2FtuvHrEoJ9eD4bB3&X-Amz-Signature=51891ef41c400ea7c3bd3bab389a12ee4fa83826dbbb9757be2a3e82ef598320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXEYL3O%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfg%2FSy841LWi8RFxwOA4xauAmjRPtCErI0%2Fz0RAuqv2AiEA3qRhLWxvz8H7HwVpkcaiKb1su5ftjFYBzHwLobDNDzsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA%2FjsWpX%2FlMh%2ForyyrcA4RW%2BlxWzBPb8eQ5gajauThsM0hQkV6Nk5Y06sx%2FZtEstdM3DMFITE2r%2BXToXN1QgnviZhy%2FgQTrYsJwEZgfCL9tea8J4aZJNHzJ%2Btg5okN4OFTNFiBECwagKbQhIBwZH8vIsLjkCPsjDjTdTtg5Q4IEhBwhuQOaQ6SRB6m1OHm40kocBVNnN2K94iKZM32OrOFFZQjW5boMOPbU6tU6mMnUFXRJnMQtz9sMsAqHa7%2FgWt0bSAepixROPm232gyH2WI2BLx7OhCKAuWwiPuW0Ew3SeNNQUqlmWDE1Gbpp54jukZbotiCDVwW9TCTSxrUItw8sRWVvGMYTyCFFA87MAItN39Q7U63Mk4qDHKVAcqU69ZaVaLIFLeraCgj3At3aB8Bw9m16r4fM6WP8nGRj1a6yZFpZffWg5dHEvqfPaarJzjq2J%2BwhSm0CEd59YyIOAM7EmtWZhQvaAW8GFbosWYHFs23ZhJsM5y325n2DdVDKKoIBUVbiEoqHkHxV4uFVwx0DmIEz6H0MsZCErt4TIJ0o%2F69h96mI2g5mBicOhRLFJm6xXYBBVYFu6zhZAHlMpmM6HgUDT7d21CQIo5rPgIwWloYZiwf63SFKrF%2BAF9YCHnxGdPZxpoMk%2Fs1MPKYusMGOqUB%2BgIlAPNT6iloxmGVIvkwVT%2F%2BsWDaa3QIPFSLCROAZoCUWOzkrrqhV%2BvJjwMyaRz1ekYn20OoMnqc38nhJHY%2FDD1HFGaf95BBNL7z9NHixvad1hO%2Bx7BqaPmz2Eaq%2F82jVBEcQ57UyQQ8wVv4A2eGY511TbUmNaLdFASpsca4cW51OwseZfC4UcqLLnQf1D7R%2B2rKf7FbsAfk%2FtuvHrEoJ9eD4bB3&X-Amz-Signature=480aa845b73571f2dd0cc3b1097c624a2ad8810bd2072c481411427c28f72ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXEYL3O%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfg%2FSy841LWi8RFxwOA4xauAmjRPtCErI0%2Fz0RAuqv2AiEA3qRhLWxvz8H7HwVpkcaiKb1su5ftjFYBzHwLobDNDzsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA%2FjsWpX%2FlMh%2ForyyrcA4RW%2BlxWzBPb8eQ5gajauThsM0hQkV6Nk5Y06sx%2FZtEstdM3DMFITE2r%2BXToXN1QgnviZhy%2FgQTrYsJwEZgfCL9tea8J4aZJNHzJ%2Btg5okN4OFTNFiBECwagKbQhIBwZH8vIsLjkCPsjDjTdTtg5Q4IEhBwhuQOaQ6SRB6m1OHm40kocBVNnN2K94iKZM32OrOFFZQjW5boMOPbU6tU6mMnUFXRJnMQtz9sMsAqHa7%2FgWt0bSAepixROPm232gyH2WI2BLx7OhCKAuWwiPuW0Ew3SeNNQUqlmWDE1Gbpp54jukZbotiCDVwW9TCTSxrUItw8sRWVvGMYTyCFFA87MAItN39Q7U63Mk4qDHKVAcqU69ZaVaLIFLeraCgj3At3aB8Bw9m16r4fM6WP8nGRj1a6yZFpZffWg5dHEvqfPaarJzjq2J%2BwhSm0CEd59YyIOAM7EmtWZhQvaAW8GFbosWYHFs23ZhJsM5y325n2DdVDKKoIBUVbiEoqHkHxV4uFVwx0DmIEz6H0MsZCErt4TIJ0o%2F69h96mI2g5mBicOhRLFJm6xXYBBVYFu6zhZAHlMpmM6HgUDT7d21CQIo5rPgIwWloYZiwf63SFKrF%2BAF9YCHnxGdPZxpoMk%2Fs1MPKYusMGOqUB%2BgIlAPNT6iloxmGVIvkwVT%2F%2BsWDaa3QIPFSLCROAZoCUWOzkrrqhV%2BvJjwMyaRz1ekYn20OoMnqc38nhJHY%2FDD1HFGaf95BBNL7z9NHixvad1hO%2Bx7BqaPmz2Eaq%2F82jVBEcQ57UyQQ8wVv4A2eGY511TbUmNaLdFASpsca4cW51OwseZfC4UcqLLnQf1D7R%2B2rKf7FbsAfk%2FtuvHrEoJ9eD4bB3&X-Amz-Signature=02dee6208a665c399f092e77e11f4f1eed5ca08fd6e88bbdadd754d8b9f1ef54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
