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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566PJVMZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBPn8HTx2dZKXu1vranv0VV%2FuVNVx1o67adhRu%2BBFqQSAiBGj1Dd5QDk0yDeKkqx%2F08s7QRVtEXt6RdaopPHLeBo1Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM5qv6Qw4kFa0oAIFjKtwDB%2Frv2eLbNfUIjK8MGllGBOAw1MN6hVmvHgm7dzTXmCLx97c%2FijP3DCn29j96%2FNCR9rQd%2FuuwSnxOvE57MxAmoJ8w%2F%2BsPcCt9PVmioxNP3RZuuzBN8z6GW%2Fm7%2FjoCzkPStMJzFJgd681XjcnsapEueRDJ68mRocW8S3AdEAxK0kqYFrxov1yQbQ1FdtbliIQBrplIctS0I8RroRruoWneG%2FxTR2%2BZ8EaAOmMzG2yEEyS%2FfvXLA5L30E7Fj9klSTIKtV1mgjTtMAgjTeBqqQU9zjbQi1RFql1owuHuYJBvWstBZMfcKFKUKAYQqRujVRp2hOjF0lcY%2FNf67locE6dTXLeyJBoDS%2Fmr8wzce3uJwXET3IhVKUfgPw8PhFSn9RBp3BmbL4QzAeNROyFxgGGuiS%2BCIvfxCSBF0lksF4Cyr6HuYXRyZVO%2FH5gfEPDhizj7kVaLx08HUn2uMmdhNJE%2BAKaF%2BOb1yDvkiqBWgrm5XOJ0XXkHquVHO9%2FH0nRFUJ8kDCVr%2BzPmEJXz0WqPkGiZKZ1mrd5x3AVEO367Il32Y%2BGieQE1be9ArfBGKnOYc4XTYq9AO%2FcfafMzhxiLPLINfxDUGWI4zworSS%2FaCRY7JH2uyMQXVqMllVSKvFsw%2Be3BvQY6pgHIjeGrysjJ%2BIt%2FXPSamVZVmSjSFM3nqC%2Fv8wfGUgjlZnxzwi9pVYNGF%2FPwU1DLo3Nj%2FXa1o8qiMT2rarSzjYY8jWIVc6%2FIMsfD6KfrhqcMg4nRG6th%2Bvb8%2FXjPW0OCRafR%2FODh8j8nmSa6zy5RVxRLzF2iWVVa6E0icMjOxPwoppfsvhq0qVy%2B12dgXoblN3fs%2FEFg4g9OYNDWGdSZ9LvgO%2BSieh2%2B&X-Amz-Signature=bcda1fff652f400fb9b31f5c96f6e9f39d887159815aab4a85edc989eaec8365&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566PJVMZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBPn8HTx2dZKXu1vranv0VV%2FuVNVx1o67adhRu%2BBFqQSAiBGj1Dd5QDk0yDeKkqx%2F08s7QRVtEXt6RdaopPHLeBo1Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM5qv6Qw4kFa0oAIFjKtwDB%2Frv2eLbNfUIjK8MGllGBOAw1MN6hVmvHgm7dzTXmCLx97c%2FijP3DCn29j96%2FNCR9rQd%2FuuwSnxOvE57MxAmoJ8w%2F%2BsPcCt9PVmioxNP3RZuuzBN8z6GW%2Fm7%2FjoCzkPStMJzFJgd681XjcnsapEueRDJ68mRocW8S3AdEAxK0kqYFrxov1yQbQ1FdtbliIQBrplIctS0I8RroRruoWneG%2FxTR2%2BZ8EaAOmMzG2yEEyS%2FfvXLA5L30E7Fj9klSTIKtV1mgjTtMAgjTeBqqQU9zjbQi1RFql1owuHuYJBvWstBZMfcKFKUKAYQqRujVRp2hOjF0lcY%2FNf67locE6dTXLeyJBoDS%2Fmr8wzce3uJwXET3IhVKUfgPw8PhFSn9RBp3BmbL4QzAeNROyFxgGGuiS%2BCIvfxCSBF0lksF4Cyr6HuYXRyZVO%2FH5gfEPDhizj7kVaLx08HUn2uMmdhNJE%2BAKaF%2BOb1yDvkiqBWgrm5XOJ0XXkHquVHO9%2FH0nRFUJ8kDCVr%2BzPmEJXz0WqPkGiZKZ1mrd5x3AVEO367Il32Y%2BGieQE1be9ArfBGKnOYc4XTYq9AO%2FcfafMzhxiLPLINfxDUGWI4zworSS%2FaCRY7JH2uyMQXVqMllVSKvFsw%2Be3BvQY6pgHIjeGrysjJ%2BIt%2FXPSamVZVmSjSFM3nqC%2Fv8wfGUgjlZnxzwi9pVYNGF%2FPwU1DLo3Nj%2FXa1o8qiMT2rarSzjYY8jWIVc6%2FIMsfD6KfrhqcMg4nRG6th%2Bvb8%2FXjPW0OCRafR%2FODh8j8nmSa6zy5RVxRLzF2iWVVa6E0icMjOxPwoppfsvhq0qVy%2B12dgXoblN3fs%2FEFg4g9OYNDWGdSZ9LvgO%2BSieh2%2B&X-Amz-Signature=94912c063d4a27ce3df87592c30512864dbf7fbdceedce7b112bdf93c1061fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566PJVMZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBPn8HTx2dZKXu1vranv0VV%2FuVNVx1o67adhRu%2BBFqQSAiBGj1Dd5QDk0yDeKkqx%2F08s7QRVtEXt6RdaopPHLeBo1Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM5qv6Qw4kFa0oAIFjKtwDB%2Frv2eLbNfUIjK8MGllGBOAw1MN6hVmvHgm7dzTXmCLx97c%2FijP3DCn29j96%2FNCR9rQd%2FuuwSnxOvE57MxAmoJ8w%2F%2BsPcCt9PVmioxNP3RZuuzBN8z6GW%2Fm7%2FjoCzkPStMJzFJgd681XjcnsapEueRDJ68mRocW8S3AdEAxK0kqYFrxov1yQbQ1FdtbliIQBrplIctS0I8RroRruoWneG%2FxTR2%2BZ8EaAOmMzG2yEEyS%2FfvXLA5L30E7Fj9klSTIKtV1mgjTtMAgjTeBqqQU9zjbQi1RFql1owuHuYJBvWstBZMfcKFKUKAYQqRujVRp2hOjF0lcY%2FNf67locE6dTXLeyJBoDS%2Fmr8wzce3uJwXET3IhVKUfgPw8PhFSn9RBp3BmbL4QzAeNROyFxgGGuiS%2BCIvfxCSBF0lksF4Cyr6HuYXRyZVO%2FH5gfEPDhizj7kVaLx08HUn2uMmdhNJE%2BAKaF%2BOb1yDvkiqBWgrm5XOJ0XXkHquVHO9%2FH0nRFUJ8kDCVr%2BzPmEJXz0WqPkGiZKZ1mrd5x3AVEO367Il32Y%2BGieQE1be9ArfBGKnOYc4XTYq9AO%2FcfafMzhxiLPLINfxDUGWI4zworSS%2FaCRY7JH2uyMQXVqMllVSKvFsw%2Be3BvQY6pgHIjeGrysjJ%2BIt%2FXPSamVZVmSjSFM3nqC%2Fv8wfGUgjlZnxzwi9pVYNGF%2FPwU1DLo3Nj%2FXa1o8qiMT2rarSzjYY8jWIVc6%2FIMsfD6KfrhqcMg4nRG6th%2Bvb8%2FXjPW0OCRafR%2FODh8j8nmSa6zy5RVxRLzF2iWVVa6E0icMjOxPwoppfsvhq0qVy%2B12dgXoblN3fs%2FEFg4g9OYNDWGdSZ9LvgO%2BSieh2%2B&X-Amz-Signature=11f2483d0d102547bfb0d8586125af42fd99840a5662f8ddaf3405355803e74e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
