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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73RFG2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC37bJsAGUKu0tvs9v1Ai0PEvqit0HRJGpFK5lWHeiM%2BgIgLOaBIc2Nf1E9zbjUYshIMUuO1KuIp2h7YindBKR4oTsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx3uPxnyhhjgp1mCCrcA1Cm4H3qt28bX%2FIOPpLUWwOx46dUqpEyKQYjNfMqo62uFDHdledMSDiu9d8bw3y29ULsHHF9%2BmbsP%2FDFyWv%2FpzXgfyIGLgQhmfL9o3JV6mzDyOlLV9sFtDpOOST6X32CliOh3cZ8y05k6XfMYGysSuRdAaEhe4TupEHNzLt8OGwt1s6DRHoyY9qmizFAdIoBy550xp7%2BJnoqfRwFbXKsJSnzP07LolnV%2B9PAEBbFVtuScJ6rJUhTVxhqfLNL64OILVPtvN1XkONE42e1BuE%2BjMc4KffBP%2ByZm0xnycx1n%2BEzjciT9TKS3MHS%2BcwbhnCDkFsjgt5%2B70%2FqCYV9B7FbNFz%2FC94WwHDIfP%2ByDtDGQ2P4nQonetzAKyPoQa3wzQzKj8l4i9ToLP0J%2BiaAAZAy4bTW4T3v6%2F7PK8lFNk7nSjBq3VdQ1ZUf2dz808Zv7BvvjV14yYJO1GFElxXqnHK8FlHp%2BFhOB%2FzHJUWCxcewpWW7gZaTJ1NeaFux2Z%2FuWEc887GRsNtk3PjmJSrLO5JT2ETCA%2F36L0cmygDfYJqciWHnoagDljONcxop0oOpdj9q4aeYKN4GlDxbKUz2VqZQyXQgnojG4qbap%2Bmot%2FAQfPtJCCJ%2F96Emy%2FV5oPghMN%2FW%2Br8GOqUBfvGHzU%2BOcBmKLKQ7MPcpsGCn%2FPHcHrhy04YI4hU7dcSxEK1UvF1R%2BDO9DAKTM%2BLQjQeoPXz%2FB1tTNJCMp8g4eP%2BFxc1jMVIPn7QJb11sNqff7JEQEnExWN2GEnvZwSRPlaXepDZQ%2BC5mNpGJ7OUJqiFrjxoJVsqpVzKGUtx32fwx4cd%2BYDsz7juJGJ6hy%2Bco%2Bu9LWvdMQK7BK%2B%2BEUnmWo2S%2B5Yzo&X-Amz-Signature=346c6b4d7f392fd06302e62eb69696de5e4a14f313a55ed82eaec6d63ca13928&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73RFG2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC37bJsAGUKu0tvs9v1Ai0PEvqit0HRJGpFK5lWHeiM%2BgIgLOaBIc2Nf1E9zbjUYshIMUuO1KuIp2h7YindBKR4oTsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx3uPxnyhhjgp1mCCrcA1Cm4H3qt28bX%2FIOPpLUWwOx46dUqpEyKQYjNfMqo62uFDHdledMSDiu9d8bw3y29ULsHHF9%2BmbsP%2FDFyWv%2FpzXgfyIGLgQhmfL9o3JV6mzDyOlLV9sFtDpOOST6X32CliOh3cZ8y05k6XfMYGysSuRdAaEhe4TupEHNzLt8OGwt1s6DRHoyY9qmizFAdIoBy550xp7%2BJnoqfRwFbXKsJSnzP07LolnV%2B9PAEBbFVtuScJ6rJUhTVxhqfLNL64OILVPtvN1XkONE42e1BuE%2BjMc4KffBP%2ByZm0xnycx1n%2BEzjciT9TKS3MHS%2BcwbhnCDkFsjgt5%2B70%2FqCYV9B7FbNFz%2FC94WwHDIfP%2ByDtDGQ2P4nQonetzAKyPoQa3wzQzKj8l4i9ToLP0J%2BiaAAZAy4bTW4T3v6%2F7PK8lFNk7nSjBq3VdQ1ZUf2dz808Zv7BvvjV14yYJO1GFElxXqnHK8FlHp%2BFhOB%2FzHJUWCxcewpWW7gZaTJ1NeaFux2Z%2FuWEc887GRsNtk3PjmJSrLO5JT2ETCA%2F36L0cmygDfYJqciWHnoagDljONcxop0oOpdj9q4aeYKN4GlDxbKUz2VqZQyXQgnojG4qbap%2Bmot%2FAQfPtJCCJ%2F96Emy%2FV5oPghMN%2FW%2Br8GOqUBfvGHzU%2BOcBmKLKQ7MPcpsGCn%2FPHcHrhy04YI4hU7dcSxEK1UvF1R%2BDO9DAKTM%2BLQjQeoPXz%2FB1tTNJCMp8g4eP%2BFxc1jMVIPn7QJb11sNqff7JEQEnExWN2GEnvZwSRPlaXepDZQ%2BC5mNpGJ7OUJqiFrjxoJVsqpVzKGUtx32fwx4cd%2BYDsz7juJGJ6hy%2Bco%2Bu9LWvdMQK7BK%2B%2BEUnmWo2S%2B5Yzo&X-Amz-Signature=9c6b7d38094c24a09d8fb3dd3724e736f389c7172cc62cecff38f27a1b4a7c08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73RFG2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC37bJsAGUKu0tvs9v1Ai0PEvqit0HRJGpFK5lWHeiM%2BgIgLOaBIc2Nf1E9zbjUYshIMUuO1KuIp2h7YindBKR4oTsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx3uPxnyhhjgp1mCCrcA1Cm4H3qt28bX%2FIOPpLUWwOx46dUqpEyKQYjNfMqo62uFDHdledMSDiu9d8bw3y29ULsHHF9%2BmbsP%2FDFyWv%2FpzXgfyIGLgQhmfL9o3JV6mzDyOlLV9sFtDpOOST6X32CliOh3cZ8y05k6XfMYGysSuRdAaEhe4TupEHNzLt8OGwt1s6DRHoyY9qmizFAdIoBy550xp7%2BJnoqfRwFbXKsJSnzP07LolnV%2B9PAEBbFVtuScJ6rJUhTVxhqfLNL64OILVPtvN1XkONE42e1BuE%2BjMc4KffBP%2ByZm0xnycx1n%2BEzjciT9TKS3MHS%2BcwbhnCDkFsjgt5%2B70%2FqCYV9B7FbNFz%2FC94WwHDIfP%2ByDtDGQ2P4nQonetzAKyPoQa3wzQzKj8l4i9ToLP0J%2BiaAAZAy4bTW4T3v6%2F7PK8lFNk7nSjBq3VdQ1ZUf2dz808Zv7BvvjV14yYJO1GFElxXqnHK8FlHp%2BFhOB%2FzHJUWCxcewpWW7gZaTJ1NeaFux2Z%2FuWEc887GRsNtk3PjmJSrLO5JT2ETCA%2F36L0cmygDfYJqciWHnoagDljONcxop0oOpdj9q4aeYKN4GlDxbKUz2VqZQyXQgnojG4qbap%2Bmot%2FAQfPtJCCJ%2F96Emy%2FV5oPghMN%2FW%2Br8GOqUBfvGHzU%2BOcBmKLKQ7MPcpsGCn%2FPHcHrhy04YI4hU7dcSxEK1UvF1R%2BDO9DAKTM%2BLQjQeoPXz%2FB1tTNJCMp8g4eP%2BFxc1jMVIPn7QJb11sNqff7JEQEnExWN2GEnvZwSRPlaXepDZQ%2BC5mNpGJ7OUJqiFrjxoJVsqpVzKGUtx32fwx4cd%2BYDsz7juJGJ6hy%2Bco%2Bu9LWvdMQK7BK%2B%2BEUnmWo2S%2B5Yzo&X-Amz-Signature=9e9c8bd7e3f3a7c9bcb88f202c6a775ff8655b4f1947d66db2fa2ce8e2720971&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
