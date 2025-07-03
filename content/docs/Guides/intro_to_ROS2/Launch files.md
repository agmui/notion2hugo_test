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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKOPR3V%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFIDqzK9XMV2Kli9QcnMApUzM8BwtvP7Zr502YV62eztAiAvHl9OhcO%2FAI%2BgL9nEr%2FvzhhLJpQuz28UFbLJRvdKc%2Byr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM%2B3FTe5LhZpirMIbYKtwDnj2ZwI26zTjLTM%2BiJbKzr%2FmE8r1xvVIJvuEGGlhXLwpOY73xvDUZmTdPIgVA6U0NkhOF0bF4QIwNngle0AzNaBZD0lfPdk7UMy5dO4FEAJxMmWvzrZ6I5FrzBzXKt70%2BeC6pOb0Kn8NcnA5MdSrXlDKmJfebwMloHqbd%2BcAT75CgFIc1qs%2FaKFKxrXC8ZKfCoQv%2F4od62MAYDxjBhGonDkZTdqZR7Uga1RtWII70xWKSbgtKvrEGXa17jAM1IYr06kljfF8T%2B%2FhYMVDagaffDLmvrBnECdpZ1ShQucMfXUgt4m6kH88CLRG7%2FHGGPfYjpGD%2F1bQWDv0%2B1Sm147oPmS1bskYv7IK5mpeZgHMpQDNoyVDRjjq4FEnvF9K5F%2BDEiIzb89AnHPVO3w135B1qBI991iJ0xCjliuVXH6m%2Fikd%2BCM%2FXp1GHgZNrots1r6%2BWTHyc%2Fnxzqji9B5xqFPTFXpG6KMFGHtsxGkOIFupj0T%2F0LeuIlCm5mkSBQ8tnK5824OWoqEb5qe%2B5wWzQ0XZFM4Xw%2F3h5n7i2CvfhmKK%2BNegcNx7S2fbYwlIvZUdHfMO8EwSQ7vvrpSg3h5VX7lgJxsluI8229RigtjppMguwRB4nRHL4hF15cyGkqTYwx9uYwwY6pgFdFc5%2BGetVnltd6bFIoCJ68QLcRB1FwUvQqxc3KarAB6m1MQCo4zYV7VDlPnGIiR8Xae%2BkeNF%2BfFZ81y0H8lN70%2BG7ZLzCOOlGX%2FcPtL%2FHysFV9UXKcqRQVCY%2FMaqS1L1GxL%2F6jmJQZ5yeaakwSQxeSoviwCR3WVohi5QX2ESCNKzCf7L%2FwMPfiN21%2BkADY3MI%2BIEFPwobriiMpv6H9PtVx3JNiEs9&X-Amz-Signature=3c52c2c143d10f168b0b6bd91c5170c2f53015e09727e7c28aec37f34d9f09de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKOPR3V%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFIDqzK9XMV2Kli9QcnMApUzM8BwtvP7Zr502YV62eztAiAvHl9OhcO%2FAI%2BgL9nEr%2FvzhhLJpQuz28UFbLJRvdKc%2Byr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM%2B3FTe5LhZpirMIbYKtwDnj2ZwI26zTjLTM%2BiJbKzr%2FmE8r1xvVIJvuEGGlhXLwpOY73xvDUZmTdPIgVA6U0NkhOF0bF4QIwNngle0AzNaBZD0lfPdk7UMy5dO4FEAJxMmWvzrZ6I5FrzBzXKt70%2BeC6pOb0Kn8NcnA5MdSrXlDKmJfebwMloHqbd%2BcAT75CgFIc1qs%2FaKFKxrXC8ZKfCoQv%2F4od62MAYDxjBhGonDkZTdqZR7Uga1RtWII70xWKSbgtKvrEGXa17jAM1IYr06kljfF8T%2B%2FhYMVDagaffDLmvrBnECdpZ1ShQucMfXUgt4m6kH88CLRG7%2FHGGPfYjpGD%2F1bQWDv0%2B1Sm147oPmS1bskYv7IK5mpeZgHMpQDNoyVDRjjq4FEnvF9K5F%2BDEiIzb89AnHPVO3w135B1qBI991iJ0xCjliuVXH6m%2Fikd%2BCM%2FXp1GHgZNrots1r6%2BWTHyc%2Fnxzqji9B5xqFPTFXpG6KMFGHtsxGkOIFupj0T%2F0LeuIlCm5mkSBQ8tnK5824OWoqEb5qe%2B5wWzQ0XZFM4Xw%2F3h5n7i2CvfhmKK%2BNegcNx7S2fbYwlIvZUdHfMO8EwSQ7vvrpSg3h5VX7lgJxsluI8229RigtjppMguwRB4nRHL4hF15cyGkqTYwx9uYwwY6pgFdFc5%2BGetVnltd6bFIoCJ68QLcRB1FwUvQqxc3KarAB6m1MQCo4zYV7VDlPnGIiR8Xae%2BkeNF%2BfFZ81y0H8lN70%2BG7ZLzCOOlGX%2FcPtL%2FHysFV9UXKcqRQVCY%2FMaqS1L1GxL%2F6jmJQZ5yeaakwSQxeSoviwCR3WVohi5QX2ESCNKzCf7L%2FwMPfiN21%2BkADY3MI%2BIEFPwobriiMpv6H9PtVx3JNiEs9&X-Amz-Signature=d676113b865c295c7eda67716b8410a23a958dd288670ae315c9eae7afac719e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKOPR3V%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFIDqzK9XMV2Kli9QcnMApUzM8BwtvP7Zr502YV62eztAiAvHl9OhcO%2FAI%2BgL9nEr%2FvzhhLJpQuz28UFbLJRvdKc%2Byr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM%2B3FTe5LhZpirMIbYKtwDnj2ZwI26zTjLTM%2BiJbKzr%2FmE8r1xvVIJvuEGGlhXLwpOY73xvDUZmTdPIgVA6U0NkhOF0bF4QIwNngle0AzNaBZD0lfPdk7UMy5dO4FEAJxMmWvzrZ6I5FrzBzXKt70%2BeC6pOb0Kn8NcnA5MdSrXlDKmJfebwMloHqbd%2BcAT75CgFIc1qs%2FaKFKxrXC8ZKfCoQv%2F4od62MAYDxjBhGonDkZTdqZR7Uga1RtWII70xWKSbgtKvrEGXa17jAM1IYr06kljfF8T%2B%2FhYMVDagaffDLmvrBnECdpZ1ShQucMfXUgt4m6kH88CLRG7%2FHGGPfYjpGD%2F1bQWDv0%2B1Sm147oPmS1bskYv7IK5mpeZgHMpQDNoyVDRjjq4FEnvF9K5F%2BDEiIzb89AnHPVO3w135B1qBI991iJ0xCjliuVXH6m%2Fikd%2BCM%2FXp1GHgZNrots1r6%2BWTHyc%2Fnxzqji9B5xqFPTFXpG6KMFGHtsxGkOIFupj0T%2F0LeuIlCm5mkSBQ8tnK5824OWoqEb5qe%2B5wWzQ0XZFM4Xw%2F3h5n7i2CvfhmKK%2BNegcNx7S2fbYwlIvZUdHfMO8EwSQ7vvrpSg3h5VX7lgJxsluI8229RigtjppMguwRB4nRHL4hF15cyGkqTYwx9uYwwY6pgFdFc5%2BGetVnltd6bFIoCJ68QLcRB1FwUvQqxc3KarAB6m1MQCo4zYV7VDlPnGIiR8Xae%2BkeNF%2BfFZ81y0H8lN70%2BG7ZLzCOOlGX%2FcPtL%2FHysFV9UXKcqRQVCY%2FMaqS1L1GxL%2F6jmJQZ5yeaakwSQxeSoviwCR3WVohi5QX2ESCNKzCf7L%2FwMPfiN21%2BkADY3MI%2BIEFPwobriiMpv6H9PtVx3JNiEs9&X-Amz-Signature=87bffe0e721a5a5b6a307d48f065b89630ec9e8e53cac192e09eecea666811a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
