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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPCS5UH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC9pAvgkT3Qhs5B0vjwrc0%2B9q4Ybv0wxdJl%2BQX%2FAVQ9XAIhAI7VhhV0niYG0ajti%2BrfO5GmXXesaJnyJTdhFc3fVv%2ByKv8DCE4QABoMNjM3NDIzMTgzODA1IgzN5PfSLe7bwbeuRk0q3AMbagvhWTNdRTY0%2FGQGkziuJgT4DsCDJw8tXYUz3djid6BtJNGxHiTpL%2B7AQszkrgsiBfBfANxLouuIKPgMqzgfonFiUZYz%2FZtNpPe2UJgUfY3%2BQbtk0ofUEaL0A%2BepBsT8OUDA6RWBpd2XdmTdR9OnSNQvVNssrL3szOvqSLN%2FjTT%2BPr1XfEkJEtQgBKgkz4RoPFUhTQinm%2BGh0I8Zc6myFM2lGCd2iOz4oRCp4lIiaCZ6Uv92fb4dVxOG62OdwGIvK8m7G70We9XsoXIdNvEvApTkHddxTz478plkLQSwxdg2PaHR5NGWlHsiDO5wvS48mYxq5H0flarGF0NxWp%2FEawEedP0u%2BthXYktzm8WmYv2Ln7cwWrhZIpJHD%2BrsJ6DSwn%2BiEHgv%2FLqzJqMC5D65SutjI0oWvKB6ls3gQ0wqOF7a5oElB8cdfcH21k8cBTRZuM%2FuVQGB8NOnorP9Hpl%2FL0tsqBPZcguFtlw1g7iMivctD69sqIQ7V10Lp6tY3fD03W8a0HZXLLjQakIqc6BPkG8eGYj88lmA1%2BcWUKjbhOdG%2BbXQPWKJXYpew%2BmdhzVBib8I17F9jxd6qot15bUvUvDY56%2B1i7wMSdv%2F8ZIQOIloN68Ud%2F%2BdVXW6xTCc9cO9BjqkAc3scA6gUPyk0bPFsBeD1%2BS%2FJqhvJY7%2FjoTuOwUZd2PLluyKS3muQVlT9CpxI6uztU6wRT%2BWvQDolYTpXPgjQ5WBFMxNkCtmwGBX7evadjtUwcfhSdSRAHT3BB8poOIewt9yscuquJbQ%2Btw%2BRRONMITqlWi8ahCUlZbU%2BpfBPGTJvf0N9FbxJjCDhpikCBx82TW6zhkBYxqF%2BfYkMKV7nTGZui1H&X-Amz-Signature=29e6b845c875f74193c7695e882c113e02f681803c123ff71feacd9892773715&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPCS5UH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC9pAvgkT3Qhs5B0vjwrc0%2B9q4Ybv0wxdJl%2BQX%2FAVQ9XAIhAI7VhhV0niYG0ajti%2BrfO5GmXXesaJnyJTdhFc3fVv%2ByKv8DCE4QABoMNjM3NDIzMTgzODA1IgzN5PfSLe7bwbeuRk0q3AMbagvhWTNdRTY0%2FGQGkziuJgT4DsCDJw8tXYUz3djid6BtJNGxHiTpL%2B7AQszkrgsiBfBfANxLouuIKPgMqzgfonFiUZYz%2FZtNpPe2UJgUfY3%2BQbtk0ofUEaL0A%2BepBsT8OUDA6RWBpd2XdmTdR9OnSNQvVNssrL3szOvqSLN%2FjTT%2BPr1XfEkJEtQgBKgkz4RoPFUhTQinm%2BGh0I8Zc6myFM2lGCd2iOz4oRCp4lIiaCZ6Uv92fb4dVxOG62OdwGIvK8m7G70We9XsoXIdNvEvApTkHddxTz478plkLQSwxdg2PaHR5NGWlHsiDO5wvS48mYxq5H0flarGF0NxWp%2FEawEedP0u%2BthXYktzm8WmYv2Ln7cwWrhZIpJHD%2BrsJ6DSwn%2BiEHgv%2FLqzJqMC5D65SutjI0oWvKB6ls3gQ0wqOF7a5oElB8cdfcH21k8cBTRZuM%2FuVQGB8NOnorP9Hpl%2FL0tsqBPZcguFtlw1g7iMivctD69sqIQ7V10Lp6tY3fD03W8a0HZXLLjQakIqc6BPkG8eGYj88lmA1%2BcWUKjbhOdG%2BbXQPWKJXYpew%2BmdhzVBib8I17F9jxd6qot15bUvUvDY56%2B1i7wMSdv%2F8ZIQOIloN68Ud%2F%2BdVXW6xTCc9cO9BjqkAc3scA6gUPyk0bPFsBeD1%2BS%2FJqhvJY7%2FjoTuOwUZd2PLluyKS3muQVlT9CpxI6uztU6wRT%2BWvQDolYTpXPgjQ5WBFMxNkCtmwGBX7evadjtUwcfhSdSRAHT3BB8poOIewt9yscuquJbQ%2Btw%2BRRONMITqlWi8ahCUlZbU%2BpfBPGTJvf0N9FbxJjCDhpikCBx82TW6zhkBYxqF%2BfYkMKV7nTGZui1H&X-Amz-Signature=ea6f7fd3a4feb1fab9138f9b92a536d1c41a33605caebe85f2708c8cd44ae47e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPCS5UH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC9pAvgkT3Qhs5B0vjwrc0%2B9q4Ybv0wxdJl%2BQX%2FAVQ9XAIhAI7VhhV0niYG0ajti%2BrfO5GmXXesaJnyJTdhFc3fVv%2ByKv8DCE4QABoMNjM3NDIzMTgzODA1IgzN5PfSLe7bwbeuRk0q3AMbagvhWTNdRTY0%2FGQGkziuJgT4DsCDJw8tXYUz3djid6BtJNGxHiTpL%2B7AQszkrgsiBfBfANxLouuIKPgMqzgfonFiUZYz%2FZtNpPe2UJgUfY3%2BQbtk0ofUEaL0A%2BepBsT8OUDA6RWBpd2XdmTdR9OnSNQvVNssrL3szOvqSLN%2FjTT%2BPr1XfEkJEtQgBKgkz4RoPFUhTQinm%2BGh0I8Zc6myFM2lGCd2iOz4oRCp4lIiaCZ6Uv92fb4dVxOG62OdwGIvK8m7G70We9XsoXIdNvEvApTkHddxTz478plkLQSwxdg2PaHR5NGWlHsiDO5wvS48mYxq5H0flarGF0NxWp%2FEawEedP0u%2BthXYktzm8WmYv2Ln7cwWrhZIpJHD%2BrsJ6DSwn%2BiEHgv%2FLqzJqMC5D65SutjI0oWvKB6ls3gQ0wqOF7a5oElB8cdfcH21k8cBTRZuM%2FuVQGB8NOnorP9Hpl%2FL0tsqBPZcguFtlw1g7iMivctD69sqIQ7V10Lp6tY3fD03W8a0HZXLLjQakIqc6BPkG8eGYj88lmA1%2BcWUKjbhOdG%2BbXQPWKJXYpew%2BmdhzVBib8I17F9jxd6qot15bUvUvDY56%2B1i7wMSdv%2F8ZIQOIloN68Ud%2F%2BdVXW6xTCc9cO9BjqkAc3scA6gUPyk0bPFsBeD1%2BS%2FJqhvJY7%2FjoTuOwUZd2PLluyKS3muQVlT9CpxI6uztU6wRT%2BWvQDolYTpXPgjQ5WBFMxNkCtmwGBX7evadjtUwcfhSdSRAHT3BB8poOIewt9yscuquJbQ%2Btw%2BRRONMITqlWi8ahCUlZbU%2BpfBPGTJvf0N9FbxJjCDhpikCBx82TW6zhkBYxqF%2BfYkMKV7nTGZui1H&X-Amz-Signature=a8058cc9c5c33230fcc3d878919cea9e7e840522c98a530339f5f3ca2219d629&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
