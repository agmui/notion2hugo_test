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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HR32QG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG1AxgDnJTPulck82qiuRY0Ow5Mj6kTXA0KZv9RfQVhcAiEA29Iw7xlzHibGRQkrLSnq6umciqo6bAxeZ6KPAykkku4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLJPIpm4a%2BUYNthITyrcA5qdKaKUE4n8m8kZVPhZCym8ZmjR5wszf%2FvFklflihhojDHnxKv9gpF8cqGrWq2X61Ei6XNvt3mdr9nnTfCF4d5XxDZkaJqvNCT5DhRwz1G7JGo840%2FcF3j9Xt4mlkyOlXext7Kv%2B5mmKFmIS9QfLG%2BOrMVrZBPDknUdQ5yF%2FUH7m9E8g4McbIhtafZc%2B6r060B%2B97sbpnCBN%2B4zDzSpbGJph6UI9AKgj2nbapTu7toWnImkTvA%2FMavXo8IbLjdXSXSBsW0mIpb9lo5fMAXmjYLB4zCkvQjbDv1rpUHqvNSYiyPvE7lfTVxCRzUnXgrcmPsTS%2FHsIjqCLeo1xOfOdVZ2oTV8l3i7I%2FPWwijgHQhgAVL3ppG2udf0l8TJnNEuhEF8wjAiX5YGLxORFpMTFKpsBaOxz64H2n5oY2I0UeVCEUK0ghlQMHvPyvIvo8F5LuK78kPdWT9Yml9Q4sxWYD68qYIJMbtKGxtagWSl8yRca7UL7w3x6VH45gNK8CM3Uzjxmxex3QonNFHRoXQV4ANlmn30f5Cwd7%2FmuLgr2ghnXB9qZmvBiuXB0CbHxpCzf7QpLfPUNScG3LsAAmAFYRFQafl5kBjeDFpucuL5wXRrDM6NxjHznSvx4dkKMMuI%2FL0GOqUB6K7djfYxJvAPlSe9RDuD9tSbHPQc1fx8Vh0QgihKvACOOncx%2FDRNmB%2FUpZH9DGG44R5LIFPZUjR1HaeXm0rLR69JPfYqJw%2B2cQ2F6wApM9FdnY0%2FfOUnZ9nBpc7KUCCc1ol3hKRtd4nBlwFE0Li3COi3yE3%2Fu5K6Jtr7e8%2BkDGqxlTPGc5GaA2XT9J6AIo6POOMqQ134phTjMMa%2B%2Bcvc0cnAVH%2F6&X-Amz-Signature=2a1172bd2bc3f99ebf12e41d54e3497614c1cd88a85f0edcb823361b480e7183&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HR32QG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG1AxgDnJTPulck82qiuRY0Ow5Mj6kTXA0KZv9RfQVhcAiEA29Iw7xlzHibGRQkrLSnq6umciqo6bAxeZ6KPAykkku4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLJPIpm4a%2BUYNthITyrcA5qdKaKUE4n8m8kZVPhZCym8ZmjR5wszf%2FvFklflihhojDHnxKv9gpF8cqGrWq2X61Ei6XNvt3mdr9nnTfCF4d5XxDZkaJqvNCT5DhRwz1G7JGo840%2FcF3j9Xt4mlkyOlXext7Kv%2B5mmKFmIS9QfLG%2BOrMVrZBPDknUdQ5yF%2FUH7m9E8g4McbIhtafZc%2B6r060B%2B97sbpnCBN%2B4zDzSpbGJph6UI9AKgj2nbapTu7toWnImkTvA%2FMavXo8IbLjdXSXSBsW0mIpb9lo5fMAXmjYLB4zCkvQjbDv1rpUHqvNSYiyPvE7lfTVxCRzUnXgrcmPsTS%2FHsIjqCLeo1xOfOdVZ2oTV8l3i7I%2FPWwijgHQhgAVL3ppG2udf0l8TJnNEuhEF8wjAiX5YGLxORFpMTFKpsBaOxz64H2n5oY2I0UeVCEUK0ghlQMHvPyvIvo8F5LuK78kPdWT9Yml9Q4sxWYD68qYIJMbtKGxtagWSl8yRca7UL7w3x6VH45gNK8CM3Uzjxmxex3QonNFHRoXQV4ANlmn30f5Cwd7%2FmuLgr2ghnXB9qZmvBiuXB0CbHxpCzf7QpLfPUNScG3LsAAmAFYRFQafl5kBjeDFpucuL5wXRrDM6NxjHznSvx4dkKMMuI%2FL0GOqUB6K7djfYxJvAPlSe9RDuD9tSbHPQc1fx8Vh0QgihKvACOOncx%2FDRNmB%2FUpZH9DGG44R5LIFPZUjR1HaeXm0rLR69JPfYqJw%2B2cQ2F6wApM9FdnY0%2FfOUnZ9nBpc7KUCCc1ol3hKRtd4nBlwFE0Li3COi3yE3%2Fu5K6Jtr7e8%2BkDGqxlTPGc5GaA2XT9J6AIo6POOMqQ134phTjMMa%2B%2Bcvc0cnAVH%2F6&X-Amz-Signature=21ffba112498578c67ede2c2f100ba1ab569c0593c4c05ce7c1d6b23899be6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HR32QG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIG1AxgDnJTPulck82qiuRY0Ow5Mj6kTXA0KZv9RfQVhcAiEA29Iw7xlzHibGRQkrLSnq6umciqo6bAxeZ6KPAykkku4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLJPIpm4a%2BUYNthITyrcA5qdKaKUE4n8m8kZVPhZCym8ZmjR5wszf%2FvFklflihhojDHnxKv9gpF8cqGrWq2X61Ei6XNvt3mdr9nnTfCF4d5XxDZkaJqvNCT5DhRwz1G7JGo840%2FcF3j9Xt4mlkyOlXext7Kv%2B5mmKFmIS9QfLG%2BOrMVrZBPDknUdQ5yF%2FUH7m9E8g4McbIhtafZc%2B6r060B%2B97sbpnCBN%2B4zDzSpbGJph6UI9AKgj2nbapTu7toWnImkTvA%2FMavXo8IbLjdXSXSBsW0mIpb9lo5fMAXmjYLB4zCkvQjbDv1rpUHqvNSYiyPvE7lfTVxCRzUnXgrcmPsTS%2FHsIjqCLeo1xOfOdVZ2oTV8l3i7I%2FPWwijgHQhgAVL3ppG2udf0l8TJnNEuhEF8wjAiX5YGLxORFpMTFKpsBaOxz64H2n5oY2I0UeVCEUK0ghlQMHvPyvIvo8F5LuK78kPdWT9Yml9Q4sxWYD68qYIJMbtKGxtagWSl8yRca7UL7w3x6VH45gNK8CM3Uzjxmxex3QonNFHRoXQV4ANlmn30f5Cwd7%2FmuLgr2ghnXB9qZmvBiuXB0CbHxpCzf7QpLfPUNScG3LsAAmAFYRFQafl5kBjeDFpucuL5wXRrDM6NxjHznSvx4dkKMMuI%2FL0GOqUB6K7djfYxJvAPlSe9RDuD9tSbHPQc1fx8Vh0QgihKvACOOncx%2FDRNmB%2FUpZH9DGG44R5LIFPZUjR1HaeXm0rLR69JPfYqJw%2B2cQ2F6wApM9FdnY0%2FfOUnZ9nBpc7KUCCc1ol3hKRtd4nBlwFE0Li3COi3yE3%2Fu5K6Jtr7e8%2BkDGqxlTPGc5GaA2XT9J6AIo6POOMqQ134phTjMMa%2B%2Bcvc0cnAVH%2F6&X-Amz-Signature=6fce286552721ca0cf49ebb93d3ac84f9a13e67fed5de4d0ca89c8c572338e94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
