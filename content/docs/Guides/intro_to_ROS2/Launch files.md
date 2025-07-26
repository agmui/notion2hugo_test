---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GNIJF7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHtJijyl7P9fn28hKkjD7h65LpW20rZtwnyYrdDbZefcAiEAl3Yv5fbUn4qkQAgmVQTSJ%2FZ%2BoM2SNVdxDc7yxq6%2B%2Fccq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN0WyGHVa2jKR8m3kCrcA3OtrpuKrGvaAK2XWlmZXgLGics9JwWaXCGmZocuN91kJSDlBoyNCl7ChfSMHf5aTMww0Tsd3wnLAcwCLDw0cGtqkaNp3rRYngBmaPBIzayENJ2O4h3sLCHC%2FRsbZwazQpPAc4edXlZJRVypTLzdskvGU7Q8i7inuE2G1jOJhGLbyG%2B60p%2BgzxFo0rONeRH5fZ3AJ73BEI4wS0XCS6wZ9mLoqXbdB3Q%2BtQ0PI63AhbRyEygR%2Bi01FWwsf3NqFvMusYtEQTjvLMDNCbU2StYQkbwPCY1SN%2BgfEB3Of86z9gfRj%2Fh6TfkLMnzNZea%2BS4dyXj4U44QgCF3Wyanrpcy0T%2FrANbrg%2FYquc8rCg3BNd1J1HvmE3Or6OqCbfrSW0FngUYQdf4XvqQT4qO91VoEkYB7VXbPuOwgtYj8suXu7VfABvziUuzmJfSHCaR%2BNUCvrN4KvVvVqBv9OpD%2FuQQPJEwX3J1SGCIsHlQkkS%2BdAJ0Fo9feJeSL17e2V8v%2FXpAqy5CaVcdoH%2FrogzpWe4xtyu5NCe8f4NPyhx84QHzCYAVPT0XpWNTQEPE0Umu264oV4xQm5ON%2BCqWB%2FbxDXq73GOM9MrhijiMlkxP6xwViZJ7tVobSKJhwzZiAd4eaIMJSHksQGOqUBHJzWAONWSIBCQCr1yz9EpQJxCWFm5GbHDIlidaUwg64%2Fo0qI8lKfqg91m1SXwg8YRLszI7RFaUB%2F9ypUtvNnKzsxO8EjJ11DMDQX4bVhuh%2Fxs%2FyM5je4GrlFy%2BOI%2FL1E3rqq3j%2BLU0wzV4puJxfxx5ibqmTDo1n7Tb3UHaUhXyn%2FIOkgNDYdmfGQd%2FZoRuLHQSCdzRzjwMDTmVIG7SFaUo7m6p1r&X-Amz-Signature=0a84728f4b7c35cc588c6bc018a33f415b1ba49059b33b2fc166d5a94c8714a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GNIJF7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHtJijyl7P9fn28hKkjD7h65LpW20rZtwnyYrdDbZefcAiEAl3Yv5fbUn4qkQAgmVQTSJ%2FZ%2BoM2SNVdxDc7yxq6%2B%2Fccq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN0WyGHVa2jKR8m3kCrcA3OtrpuKrGvaAK2XWlmZXgLGics9JwWaXCGmZocuN91kJSDlBoyNCl7ChfSMHf5aTMww0Tsd3wnLAcwCLDw0cGtqkaNp3rRYngBmaPBIzayENJ2O4h3sLCHC%2FRsbZwazQpPAc4edXlZJRVypTLzdskvGU7Q8i7inuE2G1jOJhGLbyG%2B60p%2BgzxFo0rONeRH5fZ3AJ73BEI4wS0XCS6wZ9mLoqXbdB3Q%2BtQ0PI63AhbRyEygR%2Bi01FWwsf3NqFvMusYtEQTjvLMDNCbU2StYQkbwPCY1SN%2BgfEB3Of86z9gfRj%2Fh6TfkLMnzNZea%2BS4dyXj4U44QgCF3Wyanrpcy0T%2FrANbrg%2FYquc8rCg3BNd1J1HvmE3Or6OqCbfrSW0FngUYQdf4XvqQT4qO91VoEkYB7VXbPuOwgtYj8suXu7VfABvziUuzmJfSHCaR%2BNUCvrN4KvVvVqBv9OpD%2FuQQPJEwX3J1SGCIsHlQkkS%2BdAJ0Fo9feJeSL17e2V8v%2FXpAqy5CaVcdoH%2FrogzpWe4xtyu5NCe8f4NPyhx84QHzCYAVPT0XpWNTQEPE0Umu264oV4xQm5ON%2BCqWB%2FbxDXq73GOM9MrhijiMlkxP6xwViZJ7tVobSKJhwzZiAd4eaIMJSHksQGOqUBHJzWAONWSIBCQCr1yz9EpQJxCWFm5GbHDIlidaUwg64%2Fo0qI8lKfqg91m1SXwg8YRLszI7RFaUB%2F9ypUtvNnKzsxO8EjJ11DMDQX4bVhuh%2Fxs%2FyM5je4GrlFy%2BOI%2FL1E3rqq3j%2BLU0wzV4puJxfxx5ibqmTDo1n7Tb3UHaUhXyn%2FIOkgNDYdmfGQd%2FZoRuLHQSCdzRzjwMDTmVIG7SFaUo7m6p1r&X-Amz-Signature=e11006212d70592cd6db6c5ec9162def27b91dcb8df4184070d6fc1e57d32a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GNIJF7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHtJijyl7P9fn28hKkjD7h65LpW20rZtwnyYrdDbZefcAiEAl3Yv5fbUn4qkQAgmVQTSJ%2FZ%2BoM2SNVdxDc7yxq6%2B%2Fccq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN0WyGHVa2jKR8m3kCrcA3OtrpuKrGvaAK2XWlmZXgLGics9JwWaXCGmZocuN91kJSDlBoyNCl7ChfSMHf5aTMww0Tsd3wnLAcwCLDw0cGtqkaNp3rRYngBmaPBIzayENJ2O4h3sLCHC%2FRsbZwazQpPAc4edXlZJRVypTLzdskvGU7Q8i7inuE2G1jOJhGLbyG%2B60p%2BgzxFo0rONeRH5fZ3AJ73BEI4wS0XCS6wZ9mLoqXbdB3Q%2BtQ0PI63AhbRyEygR%2Bi01FWwsf3NqFvMusYtEQTjvLMDNCbU2StYQkbwPCY1SN%2BgfEB3Of86z9gfRj%2Fh6TfkLMnzNZea%2BS4dyXj4U44QgCF3Wyanrpcy0T%2FrANbrg%2FYquc8rCg3BNd1J1HvmE3Or6OqCbfrSW0FngUYQdf4XvqQT4qO91VoEkYB7VXbPuOwgtYj8suXu7VfABvziUuzmJfSHCaR%2BNUCvrN4KvVvVqBv9OpD%2FuQQPJEwX3J1SGCIsHlQkkS%2BdAJ0Fo9feJeSL17e2V8v%2FXpAqy5CaVcdoH%2FrogzpWe4xtyu5NCe8f4NPyhx84QHzCYAVPT0XpWNTQEPE0Umu264oV4xQm5ON%2BCqWB%2FbxDXq73GOM9MrhijiMlkxP6xwViZJ7tVobSKJhwzZiAd4eaIMJSHksQGOqUBHJzWAONWSIBCQCr1yz9EpQJxCWFm5GbHDIlidaUwg64%2Fo0qI8lKfqg91m1SXwg8YRLszI7RFaUB%2F9ypUtvNnKzsxO8EjJ11DMDQX4bVhuh%2Fxs%2FyM5je4GrlFy%2BOI%2FL1E3rqq3j%2BLU0wzV4puJxfxx5ibqmTDo1n7Tb3UHaUhXyn%2FIOkgNDYdmfGQd%2FZoRuLHQSCdzRzjwMDTmVIG7SFaUo7m6p1r&X-Amz-Signature=a94ed56732147531d4f4f74def7fc37973d7b5be3cb37703187b706bb983b6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
