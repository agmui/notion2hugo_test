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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXMKPPP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2zDmFZ5HxXq56ofLxkZWUMMxxxc3ojLhJGfewBbncwIgOGWL2AZJ4Ck%2BCxJQocgDg3Lo5PAp3apUmMWnBeXwco8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONrf9GmcfIghBgu1SrcA7fRzSzA7%2Bwhar2ZjArNUhl0h4ykhYpUchI1BKRymGeTpg9GL8l7cpeyXJt%2BQMPIxxbZpif5GyguY25GayyROi1EWNSWkgHFblFEtEnBRffB%2Ftpo1PrEY%2BwppewdoRUA8oAQavoh0KHmQ1ZkhFKujOCRLRmmmp1yEua9gYD68cYuHW73gVmYN4c6U9xSOJVuATm44ln4ORCBaJdKg4k%2BhCKFy4Se%2BqsMtMv45D9vwDKtoEODg1gnPyqRKuLZjuCRaL5Km8e4iHMCm09U7hJA1TIk54NUTq8RTEHmIUXoP6hNEqn0HcvCpN7C89yVLbWMj119UCZCZ6P8KmhgQk%2F2Aeb0fMONvGVWlUr3K82V%2FOLHTainY1MbJlL%2BDLAvBizRPQ6mWcMhJarFQNYM9Ygiv0eWxiG6x5ha63JDa08EsTKu5j%2FqQ41wTaXCSAezwm7%2BaFKYogEa2vF1Mx8yYUHrGWX%2BAUpHB537nFU7WlUkeAScPw0%2F9z2D%2BR8qSCKB3zp1c1hK9tUvT9XrBhyUBv7gko2IAuz7n1ph2T1f%2FS%2BAlG2aR6xA%2FuecFp0xGmjIQNpmIp87TrcxxBWUrRb5IGJaFcoonrF3CIVy4rWHm8y0csMwA5DvphdkU4owQQctMLjtmMIGOqUBVreB7kcAnOjk471Cd3U4z%2FHhxZE5g5XUahEt0H4ukbsHXqhHroeZaoD92AUKshvAZzdC0dPjDKKjSIpv92RSwoUkNuPduprrtmlkbcPyxtMm8vgRn%2FHnvtMcc1bq3mvt9V4YAOvIX6k3aNFuRUWlraTPRX%2Fjmp8NRdfOjUeHa3vQqtKztJF6RI4hf%2BjXwCYX4n%2BxKQR5QUUSiB3EO%2F0sPyV6FGOF&X-Amz-Signature=ff488c87402c3b10c677e94efc2ac0d97cd20dc1c7cf3ca574591e3d2823be2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXMKPPP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2zDmFZ5HxXq56ofLxkZWUMMxxxc3ojLhJGfewBbncwIgOGWL2AZJ4Ck%2BCxJQocgDg3Lo5PAp3apUmMWnBeXwco8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONrf9GmcfIghBgu1SrcA7fRzSzA7%2Bwhar2ZjArNUhl0h4ykhYpUchI1BKRymGeTpg9GL8l7cpeyXJt%2BQMPIxxbZpif5GyguY25GayyROi1EWNSWkgHFblFEtEnBRffB%2Ftpo1PrEY%2BwppewdoRUA8oAQavoh0KHmQ1ZkhFKujOCRLRmmmp1yEua9gYD68cYuHW73gVmYN4c6U9xSOJVuATm44ln4ORCBaJdKg4k%2BhCKFy4Se%2BqsMtMv45D9vwDKtoEODg1gnPyqRKuLZjuCRaL5Km8e4iHMCm09U7hJA1TIk54NUTq8RTEHmIUXoP6hNEqn0HcvCpN7C89yVLbWMj119UCZCZ6P8KmhgQk%2F2Aeb0fMONvGVWlUr3K82V%2FOLHTainY1MbJlL%2BDLAvBizRPQ6mWcMhJarFQNYM9Ygiv0eWxiG6x5ha63JDa08EsTKu5j%2FqQ41wTaXCSAezwm7%2BaFKYogEa2vF1Mx8yYUHrGWX%2BAUpHB537nFU7WlUkeAScPw0%2F9z2D%2BR8qSCKB3zp1c1hK9tUvT9XrBhyUBv7gko2IAuz7n1ph2T1f%2FS%2BAlG2aR6xA%2FuecFp0xGmjIQNpmIp87TrcxxBWUrRb5IGJaFcoonrF3CIVy4rWHm8y0csMwA5DvphdkU4owQQctMLjtmMIGOqUBVreB7kcAnOjk471Cd3U4z%2FHhxZE5g5XUahEt0H4ukbsHXqhHroeZaoD92AUKshvAZzdC0dPjDKKjSIpv92RSwoUkNuPduprrtmlkbcPyxtMm8vgRn%2FHnvtMcc1bq3mvt9V4YAOvIX6k3aNFuRUWlraTPRX%2Fjmp8NRdfOjUeHa3vQqtKztJF6RI4hf%2BjXwCYX4n%2BxKQR5QUUSiB3EO%2F0sPyV6FGOF&X-Amz-Signature=c575092f76d0b1e30c014d511565da57a56f3dfc9b747ba9e4afc52373ff5049&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXMKPPP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2zDmFZ5HxXq56ofLxkZWUMMxxxc3ojLhJGfewBbncwIgOGWL2AZJ4Ck%2BCxJQocgDg3Lo5PAp3apUmMWnBeXwco8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONrf9GmcfIghBgu1SrcA7fRzSzA7%2Bwhar2ZjArNUhl0h4ykhYpUchI1BKRymGeTpg9GL8l7cpeyXJt%2BQMPIxxbZpif5GyguY25GayyROi1EWNSWkgHFblFEtEnBRffB%2Ftpo1PrEY%2BwppewdoRUA8oAQavoh0KHmQ1ZkhFKujOCRLRmmmp1yEua9gYD68cYuHW73gVmYN4c6U9xSOJVuATm44ln4ORCBaJdKg4k%2BhCKFy4Se%2BqsMtMv45D9vwDKtoEODg1gnPyqRKuLZjuCRaL5Km8e4iHMCm09U7hJA1TIk54NUTq8RTEHmIUXoP6hNEqn0HcvCpN7C89yVLbWMj119UCZCZ6P8KmhgQk%2F2Aeb0fMONvGVWlUr3K82V%2FOLHTainY1MbJlL%2BDLAvBizRPQ6mWcMhJarFQNYM9Ygiv0eWxiG6x5ha63JDa08EsTKu5j%2FqQ41wTaXCSAezwm7%2BaFKYogEa2vF1Mx8yYUHrGWX%2BAUpHB537nFU7WlUkeAScPw0%2F9z2D%2BR8qSCKB3zp1c1hK9tUvT9XrBhyUBv7gko2IAuz7n1ph2T1f%2FS%2BAlG2aR6xA%2FuecFp0xGmjIQNpmIp87TrcxxBWUrRb5IGJaFcoonrF3CIVy4rWHm8y0csMwA5DvphdkU4owQQctMLjtmMIGOqUBVreB7kcAnOjk471Cd3U4z%2FHhxZE5g5XUahEt0H4ukbsHXqhHroeZaoD92AUKshvAZzdC0dPjDKKjSIpv92RSwoUkNuPduprrtmlkbcPyxtMm8vgRn%2FHnvtMcc1bq3mvt9V4YAOvIX6k3aNFuRUWlraTPRX%2Fjmp8NRdfOjUeHa3vQqtKztJF6RI4hf%2BjXwCYX4n%2BxKQR5QUUSiB3EO%2F0sPyV6FGOF&X-Amz-Signature=e69f9fa007c01b297a9cc3dd32861055932927019ce774ecd1713aedc6430f61&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
