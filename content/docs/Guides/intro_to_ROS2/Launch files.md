---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJP4WP7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMniGsRQbu2%2FBG4CQlvbM4hZq2vWO25O77zp6Aac62eAiEA4dj9Z0vcMqqDJjd96UvYjIacS3%2FvZWxGwvdvyC42R%2BAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMlyKBnXjmEpMeTMircA6nSyZBgqUxPJMNKvJ0KFANWS8ytS%2BE0G9lzMjp4Yxugb58J%2FoE0vURDE7OxspQD1r56frq1GOUA0XwRH3dTSkoa1Z0kzi8pvwrD%2Fj%2FEpodW4HZy%2BdsSGtp4XSRa3o3G2Im6wWZwwjYF5%2Bk34KGNh4zVEFazPFQHrsoL0nC2kpp6YUOJOOuHr6nCoRHXXFOLYRqBE7Ehz15Ms4mWqR8zd9lWh0GKqXBm81MCDR4sJ0CJnkTWScXgqUPI%2BYgVNevz7mVeKzBGBs29GzjZ9p%2BLr9MDppcS4TGMV8ThOe2R00tDZmWmBbj8zZXexjLlNj1Er1EQQKQSEAJMIz54nPfRVQwxHXVnXJLBLJaglQTfj6LYRFol%2FnYKlHy86%2FKNIQUQXjboeQP630aFreTFpMgPQ8SWHR5NUqTlzPEBV3ALdyuSa80q2XsdlRMSFTVB%2BNiEPKuFFJ8rBu%2Fx4IXTPVDh%2BQMoAlzX6p5plMQ2aFIkn0j1QWysnL2Vj2SQJgzAzB8xmogGhsTCLxwfbXpYVTpBZeakDo26O6DqyIbwRbF3nc4gUI1TKCem9rZ7P321LXSWHGQUFylB9Myvn51ktHXbpPW5Kt82P5HEvdWuKL8hKdMi%2FA1NRLaPIZ8r4epjMMHo3MQGOqUB9AfCWIai8doiPDXSYAZNJz71TZbW87dZBP%2FpoU74XNF9EN3DkMJlUAPnpZ9LLJAqQOtv1R6FHWPO2%2BmGy%2FdGt%2FsnZLcdT9reJ4uSSA0Pmm4eDa6%2BAjXMwGtKzXNJb1P5ZOJ3cXRobdcriWZ48LBu3UTcR%2FmHyjn8OhEYbUscMGDGEJH6xCFXxmCQySKLbeU9bYfujGIoV%2B8uQsZo11emtd6h94Ky&X-Amz-Signature=38d5d568ab4aa82224fddfc63f7c0374512482f4fa4dc745c3d6ffc463fe51a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJP4WP7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMniGsRQbu2%2FBG4CQlvbM4hZq2vWO25O77zp6Aac62eAiEA4dj9Z0vcMqqDJjd96UvYjIacS3%2FvZWxGwvdvyC42R%2BAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMlyKBnXjmEpMeTMircA6nSyZBgqUxPJMNKvJ0KFANWS8ytS%2BE0G9lzMjp4Yxugb58J%2FoE0vURDE7OxspQD1r56frq1GOUA0XwRH3dTSkoa1Z0kzi8pvwrD%2Fj%2FEpodW4HZy%2BdsSGtp4XSRa3o3G2Im6wWZwwjYF5%2Bk34KGNh4zVEFazPFQHrsoL0nC2kpp6YUOJOOuHr6nCoRHXXFOLYRqBE7Ehz15Ms4mWqR8zd9lWh0GKqXBm81MCDR4sJ0CJnkTWScXgqUPI%2BYgVNevz7mVeKzBGBs29GzjZ9p%2BLr9MDppcS4TGMV8ThOe2R00tDZmWmBbj8zZXexjLlNj1Er1EQQKQSEAJMIz54nPfRVQwxHXVnXJLBLJaglQTfj6LYRFol%2FnYKlHy86%2FKNIQUQXjboeQP630aFreTFpMgPQ8SWHR5NUqTlzPEBV3ALdyuSa80q2XsdlRMSFTVB%2BNiEPKuFFJ8rBu%2Fx4IXTPVDh%2BQMoAlzX6p5plMQ2aFIkn0j1QWysnL2Vj2SQJgzAzB8xmogGhsTCLxwfbXpYVTpBZeakDo26O6DqyIbwRbF3nc4gUI1TKCem9rZ7P321LXSWHGQUFylB9Myvn51ktHXbpPW5Kt82P5HEvdWuKL8hKdMi%2FA1NRLaPIZ8r4epjMMHo3MQGOqUB9AfCWIai8doiPDXSYAZNJz71TZbW87dZBP%2FpoU74XNF9EN3DkMJlUAPnpZ9LLJAqQOtv1R6FHWPO2%2BmGy%2FdGt%2FsnZLcdT9reJ4uSSA0Pmm4eDa6%2BAjXMwGtKzXNJb1P5ZOJ3cXRobdcriWZ48LBu3UTcR%2FmHyjn8OhEYbUscMGDGEJH6xCFXxmCQySKLbeU9bYfujGIoV%2B8uQsZo11emtd6h94Ky&X-Amz-Signature=e58d385f168326182c7c779e3c72fea582ef96a8c47001c1ee1bb3da33b5abbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJP4WP7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMniGsRQbu2%2FBG4CQlvbM4hZq2vWO25O77zp6Aac62eAiEA4dj9Z0vcMqqDJjd96UvYjIacS3%2FvZWxGwvdvyC42R%2BAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMlyKBnXjmEpMeTMircA6nSyZBgqUxPJMNKvJ0KFANWS8ytS%2BE0G9lzMjp4Yxugb58J%2FoE0vURDE7OxspQD1r56frq1GOUA0XwRH3dTSkoa1Z0kzi8pvwrD%2Fj%2FEpodW4HZy%2BdsSGtp4XSRa3o3G2Im6wWZwwjYF5%2Bk34KGNh4zVEFazPFQHrsoL0nC2kpp6YUOJOOuHr6nCoRHXXFOLYRqBE7Ehz15Ms4mWqR8zd9lWh0GKqXBm81MCDR4sJ0CJnkTWScXgqUPI%2BYgVNevz7mVeKzBGBs29GzjZ9p%2BLr9MDppcS4TGMV8ThOe2R00tDZmWmBbj8zZXexjLlNj1Er1EQQKQSEAJMIz54nPfRVQwxHXVnXJLBLJaglQTfj6LYRFol%2FnYKlHy86%2FKNIQUQXjboeQP630aFreTFpMgPQ8SWHR5NUqTlzPEBV3ALdyuSa80q2XsdlRMSFTVB%2BNiEPKuFFJ8rBu%2Fx4IXTPVDh%2BQMoAlzX6p5plMQ2aFIkn0j1QWysnL2Vj2SQJgzAzB8xmogGhsTCLxwfbXpYVTpBZeakDo26O6DqyIbwRbF3nc4gUI1TKCem9rZ7P321LXSWHGQUFylB9Myvn51ktHXbpPW5Kt82P5HEvdWuKL8hKdMi%2FA1NRLaPIZ8r4epjMMHo3MQGOqUB9AfCWIai8doiPDXSYAZNJz71TZbW87dZBP%2FpoU74XNF9EN3DkMJlUAPnpZ9LLJAqQOtv1R6FHWPO2%2BmGy%2FdGt%2FsnZLcdT9reJ4uSSA0Pmm4eDa6%2BAjXMwGtKzXNJb1P5ZOJ3cXRobdcriWZ48LBu3UTcR%2FmHyjn8OhEYbUscMGDGEJH6xCFXxmCQySKLbeU9bYfujGIoV%2B8uQsZo11emtd6h94Ky&X-Amz-Signature=ebc7540777e8fd28ccb1985829e66b89e2c99487305164b0d148ed113b6aafc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
