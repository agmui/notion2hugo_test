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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3J2JIRK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkZQUSaU9LfCNExHUN%2F3Fp8d03vKOekP0%2Bh9h8jYp2cAiEA3wC3gS%2F9Jf36vNcE8aUWGXyrrBin04MOdQiZcSeqc0Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHTcwizPYF3Y7PHC%2FCrcA5C2JoXth%2FchBh9RYIDURjXlelRmo%2BCvh7MRoKgynzeGn7ZV85HxMDyKOJrz0mEApDsX%2BSZRNqE%2FUeLXkuK35%2BUR9g8DtygXTzagwYI8WoyWYxHcfEbhwFQbldkbB0ocjrFvO4m9LTK%2FaPneQYsLvWgPVVg7yWR33fx7Nf%2F1OdJxoneu3XqoruOWA3Uvq4eEwGgAtuJmhHuXYqcxZqx8ILXNV0ndr%2FqGnUR2GMQu7mqwiJgJcsvKwr24JzxhPHd8Ng0PViXek21GTiqkCJUOaZAQpes%2FWGGpwVGLlxEt1qsCG0toe3rHiRzKyB9jVv26UNfqlgHOOr5oBpU7J%2FzSQh1Nfof1LIf3%2BdlH0Rq1NuVEx6lz0th5X74k3jaPgz8%2BQvZEEkAVY45xP05etiwJssX0%2B86tnKFLyQfnKb959gNw7XQPJ8k%2FqXWPY3Z%2BabvGjE1IJ9V45GLevuRHIjb2a%2Fsf%2B2%2Fgb6dswASiozefzJInJ8lhLar%2F%2F1MtxviDPgVF9CM0sjiIkc3zoiGFHFPIjnSxdp3tpUfBdWaKy8Htbb%2FMq53IJjbkv0MiDWuceYOK1x%2FUuhRxfOMkTn0Bsi7z50nuiM6R8eRTZwDnPNmaQhGQhDe7Cj34sXIFR5N8MLyx9MAGOqUB1bpeRzXf7124MRPdknaB%2F5%2BPew6oEBqcTnzYo9bDpHeXWyR5nAq%2BpOfUSNPxPhFGcnnt7rzu1nAdCvjIAq3cF4%2BXhhLQD6uqQ7k%2B95dWXlLzbobMuhj9mGVcwFOj2YpChVDOR4PZZkxeLQ8u%2FXioUlvSRa9ho81gBl5AYM%2FCexlO1SRPOVKUxmTEqsCUVWNIk%2BxXZvPoJ15ILzM8NLkRKZHjHXGj&X-Amz-Signature=d6097cb285c35de36a4573192f18420d07f7e85fe96793a0c2968165e5e3977c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3J2JIRK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkZQUSaU9LfCNExHUN%2F3Fp8d03vKOekP0%2Bh9h8jYp2cAiEA3wC3gS%2F9Jf36vNcE8aUWGXyrrBin04MOdQiZcSeqc0Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHTcwizPYF3Y7PHC%2FCrcA5C2JoXth%2FchBh9RYIDURjXlelRmo%2BCvh7MRoKgynzeGn7ZV85HxMDyKOJrz0mEApDsX%2BSZRNqE%2FUeLXkuK35%2BUR9g8DtygXTzagwYI8WoyWYxHcfEbhwFQbldkbB0ocjrFvO4m9LTK%2FaPneQYsLvWgPVVg7yWR33fx7Nf%2F1OdJxoneu3XqoruOWA3Uvq4eEwGgAtuJmhHuXYqcxZqx8ILXNV0ndr%2FqGnUR2GMQu7mqwiJgJcsvKwr24JzxhPHd8Ng0PViXek21GTiqkCJUOaZAQpes%2FWGGpwVGLlxEt1qsCG0toe3rHiRzKyB9jVv26UNfqlgHOOr5oBpU7J%2FzSQh1Nfof1LIf3%2BdlH0Rq1NuVEx6lz0th5X74k3jaPgz8%2BQvZEEkAVY45xP05etiwJssX0%2B86tnKFLyQfnKb959gNw7XQPJ8k%2FqXWPY3Z%2BabvGjE1IJ9V45GLevuRHIjb2a%2Fsf%2B2%2Fgb6dswASiozefzJInJ8lhLar%2F%2F1MtxviDPgVF9CM0sjiIkc3zoiGFHFPIjnSxdp3tpUfBdWaKy8Htbb%2FMq53IJjbkv0MiDWuceYOK1x%2FUuhRxfOMkTn0Bsi7z50nuiM6R8eRTZwDnPNmaQhGQhDe7Cj34sXIFR5N8MLyx9MAGOqUB1bpeRzXf7124MRPdknaB%2F5%2BPew6oEBqcTnzYo9bDpHeXWyR5nAq%2BpOfUSNPxPhFGcnnt7rzu1nAdCvjIAq3cF4%2BXhhLQD6uqQ7k%2B95dWXlLzbobMuhj9mGVcwFOj2YpChVDOR4PZZkxeLQ8u%2FXioUlvSRa9ho81gBl5AYM%2FCexlO1SRPOVKUxmTEqsCUVWNIk%2BxXZvPoJ15ILzM8NLkRKZHjHXGj&X-Amz-Signature=46fe1548419d2b4165ec5265ea17dc7fbfed936400c026d223d669d79c7e65fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3J2JIRK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkZQUSaU9LfCNExHUN%2F3Fp8d03vKOekP0%2Bh9h8jYp2cAiEA3wC3gS%2F9Jf36vNcE8aUWGXyrrBin04MOdQiZcSeqc0Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHTcwizPYF3Y7PHC%2FCrcA5C2JoXth%2FchBh9RYIDURjXlelRmo%2BCvh7MRoKgynzeGn7ZV85HxMDyKOJrz0mEApDsX%2BSZRNqE%2FUeLXkuK35%2BUR9g8DtygXTzagwYI8WoyWYxHcfEbhwFQbldkbB0ocjrFvO4m9LTK%2FaPneQYsLvWgPVVg7yWR33fx7Nf%2F1OdJxoneu3XqoruOWA3Uvq4eEwGgAtuJmhHuXYqcxZqx8ILXNV0ndr%2FqGnUR2GMQu7mqwiJgJcsvKwr24JzxhPHd8Ng0PViXek21GTiqkCJUOaZAQpes%2FWGGpwVGLlxEt1qsCG0toe3rHiRzKyB9jVv26UNfqlgHOOr5oBpU7J%2FzSQh1Nfof1LIf3%2BdlH0Rq1NuVEx6lz0th5X74k3jaPgz8%2BQvZEEkAVY45xP05etiwJssX0%2B86tnKFLyQfnKb959gNw7XQPJ8k%2FqXWPY3Z%2BabvGjE1IJ9V45GLevuRHIjb2a%2Fsf%2B2%2Fgb6dswASiozefzJInJ8lhLar%2F%2F1MtxviDPgVF9CM0sjiIkc3zoiGFHFPIjnSxdp3tpUfBdWaKy8Htbb%2FMq53IJjbkv0MiDWuceYOK1x%2FUuhRxfOMkTn0Bsi7z50nuiM6R8eRTZwDnPNmaQhGQhDe7Cj34sXIFR5N8MLyx9MAGOqUB1bpeRzXf7124MRPdknaB%2F5%2BPew6oEBqcTnzYo9bDpHeXWyR5nAq%2BpOfUSNPxPhFGcnnt7rzu1nAdCvjIAq3cF4%2BXhhLQD6uqQ7k%2B95dWXlLzbobMuhj9mGVcwFOj2YpChVDOR4PZZkxeLQ8u%2FXioUlvSRa9ho81gBl5AYM%2FCexlO1SRPOVKUxmTEqsCUVWNIk%2BxXZvPoJ15ILzM8NLkRKZHjHXGj&X-Amz-Signature=60d8294bd9887cdfda971d14eaf2da22a87e8a29ede4ac213d7430bd5d16bbd9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
