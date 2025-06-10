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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q26V7IJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAot%2BzPd9GcUG6IBACUBJ%2FNY5pfIVLKjr7VbFYY5JMLPAiEA1Vqwzo4q1oOL9yR157te%2BqwNDEhFteaWox1cOxsmxGwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkwTcJLdx5dYaBKWircA3BOTOot1JOVvviZFrdmfxU0IbUhjx41lAFoZ0LXPbXgRsVG8F5W79mhDdSjXoQTjcwIJRMGqA4W4NsGvkHIyLqP9l1XbejunCGKd%2FekQoBv7rFz9Bkp9DPcsBPXSG3FPbVEQ7KiSPNfAFXPZvrbs46Y4tcNujQIVH0wYb3MPDbLVvR4FwtOzvBBj6QLll2KliVwPiKb%2FfYbQNdvkzfrwqCVWLLKyHRAOX5wp1S7VPoWtR6RrkYsyzjFxAoiwuYQSMPbyi0m5WdsgEgVX%2FjuHp7hgcNagpQ4DaitiyHKw60A9uedlUrjLRV2x8S9eJMFooBGUE41VWHWoMN0MtDKIaDteFg%2F%2Fdp84YgrgJ67OlBDQuah42vkwUqnfxtf2AZCAxt9PnoQOFoDNf9qhdaKxz7Afqzjx3OT2mfzWdaUniWeKn1CduvWY8bIr%2F7Qvvvsvv8n7qA3lBXENHr2wvvuPdBR64dpuqqtdyQ11cUuX4i60Yhf4MfQ2A9TB6syQpX7KSox9TvO8nZOJcxnLZ4gZeT1M%2BI%2FihIiccQ4rPsIzclBUd75X3rVAEt1ivA%2F8rZfhIP3ZLQFPG25AS37Z0NivwTfmeyescx8sFF5R1ZFfyEt1XpVY5suRtd7j0%2FzMLezosIGOqUBBEdR2cB8ePB5OGwKC6ckHo6GI4lUek0FJcAXdD0Je4Zx0tBreRKxdMdk9SYiu07ltUJfeFIZThqRpHoEDnsiEaeujusPl05G7j3Wfj61VMGEOefV1OjPsN83qF2cS%2Fa7P4o8%2BPjpiXqlbu3Lp2y4yQKxnsXli4wuBeJDvMtv82VWqZQ4iHrK2bcrFSubObEg%2B%2FOeop3P8OQo8rK%2FX6DEPKHIJXl7&X-Amz-Signature=4aa6124a19492d79d664b0c1c9babfab7789c9058c0796df8a9af886ee4de9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q26V7IJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAot%2BzPd9GcUG6IBACUBJ%2FNY5pfIVLKjr7VbFYY5JMLPAiEA1Vqwzo4q1oOL9yR157te%2BqwNDEhFteaWox1cOxsmxGwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkwTcJLdx5dYaBKWircA3BOTOot1JOVvviZFrdmfxU0IbUhjx41lAFoZ0LXPbXgRsVG8F5W79mhDdSjXoQTjcwIJRMGqA4W4NsGvkHIyLqP9l1XbejunCGKd%2FekQoBv7rFz9Bkp9DPcsBPXSG3FPbVEQ7KiSPNfAFXPZvrbs46Y4tcNujQIVH0wYb3MPDbLVvR4FwtOzvBBj6QLll2KliVwPiKb%2FfYbQNdvkzfrwqCVWLLKyHRAOX5wp1S7VPoWtR6RrkYsyzjFxAoiwuYQSMPbyi0m5WdsgEgVX%2FjuHp7hgcNagpQ4DaitiyHKw60A9uedlUrjLRV2x8S9eJMFooBGUE41VWHWoMN0MtDKIaDteFg%2F%2Fdp84YgrgJ67OlBDQuah42vkwUqnfxtf2AZCAxt9PnoQOFoDNf9qhdaKxz7Afqzjx3OT2mfzWdaUniWeKn1CduvWY8bIr%2F7Qvvvsvv8n7qA3lBXENHr2wvvuPdBR64dpuqqtdyQ11cUuX4i60Yhf4MfQ2A9TB6syQpX7KSox9TvO8nZOJcxnLZ4gZeT1M%2BI%2FihIiccQ4rPsIzclBUd75X3rVAEt1ivA%2F8rZfhIP3ZLQFPG25AS37Z0NivwTfmeyescx8sFF5R1ZFfyEt1XpVY5suRtd7j0%2FzMLezosIGOqUBBEdR2cB8ePB5OGwKC6ckHo6GI4lUek0FJcAXdD0Je4Zx0tBreRKxdMdk9SYiu07ltUJfeFIZThqRpHoEDnsiEaeujusPl05G7j3Wfj61VMGEOefV1OjPsN83qF2cS%2Fa7P4o8%2BPjpiXqlbu3Lp2y4yQKxnsXli4wuBeJDvMtv82VWqZQ4iHrK2bcrFSubObEg%2B%2FOeop3P8OQo8rK%2FX6DEPKHIJXl7&X-Amz-Signature=e3f12bb11612d89ec909fadd497fe83d5ebb31d857893cfc4665964ec71003d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q26V7IJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAot%2BzPd9GcUG6IBACUBJ%2FNY5pfIVLKjr7VbFYY5JMLPAiEA1Vqwzo4q1oOL9yR157te%2BqwNDEhFteaWox1cOxsmxGwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkwTcJLdx5dYaBKWircA3BOTOot1JOVvviZFrdmfxU0IbUhjx41lAFoZ0LXPbXgRsVG8F5W79mhDdSjXoQTjcwIJRMGqA4W4NsGvkHIyLqP9l1XbejunCGKd%2FekQoBv7rFz9Bkp9DPcsBPXSG3FPbVEQ7KiSPNfAFXPZvrbs46Y4tcNujQIVH0wYb3MPDbLVvR4FwtOzvBBj6QLll2KliVwPiKb%2FfYbQNdvkzfrwqCVWLLKyHRAOX5wp1S7VPoWtR6RrkYsyzjFxAoiwuYQSMPbyi0m5WdsgEgVX%2FjuHp7hgcNagpQ4DaitiyHKw60A9uedlUrjLRV2x8S9eJMFooBGUE41VWHWoMN0MtDKIaDteFg%2F%2Fdp84YgrgJ67OlBDQuah42vkwUqnfxtf2AZCAxt9PnoQOFoDNf9qhdaKxz7Afqzjx3OT2mfzWdaUniWeKn1CduvWY8bIr%2F7Qvvvsvv8n7qA3lBXENHr2wvvuPdBR64dpuqqtdyQ11cUuX4i60Yhf4MfQ2A9TB6syQpX7KSox9TvO8nZOJcxnLZ4gZeT1M%2BI%2FihIiccQ4rPsIzclBUd75X3rVAEt1ivA%2F8rZfhIP3ZLQFPG25AS37Z0NivwTfmeyescx8sFF5R1ZFfyEt1XpVY5suRtd7j0%2FzMLezosIGOqUBBEdR2cB8ePB5OGwKC6ckHo6GI4lUek0FJcAXdD0Je4Zx0tBreRKxdMdk9SYiu07ltUJfeFIZThqRpHoEDnsiEaeujusPl05G7j3Wfj61VMGEOefV1OjPsN83qF2cS%2Fa7P4o8%2BPjpiXqlbu3Lp2y4yQKxnsXli4wuBeJDvMtv82VWqZQ4iHrK2bcrFSubObEg%2B%2FOeop3P8OQo8rK%2FX6DEPKHIJXl7&X-Amz-Signature=4d91f02322462fafb9e8ecc5389830e5136c112d04364956f1244a9ea40af9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
