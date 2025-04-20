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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPE77RP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEUgh8X8eVamgoF63NE9EKNlssThdKAhKAZg3B6f5INZAiBt%2FNkmEuDS%2B6ealAs4%2B2nZJ8%2FFaqgjMURM%2Fj2mQqjQqiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2BeVDeWWrbVsIHQ1KtwD5Qkmdc1JqaUNfRZ7LbRI3bVYz%2Fy1tWLbPiT%2B2M9cM1WTeRWBsKa0uwi%2BCDTKJkvCGFgMbw1SSvEijpG1Soy0d3jxJBPRi%2BLyUflL1OClsYG7P7jmKw%2F5eWOI49%2FcyDyNNTgGdx%2BF1qqR8rJYgjNpAVvFMmDvyW0gAU1g%2FlqhEEaiAzHX9dJ0XEZUoUefVrRipmFBflhylv4EKttMrbOHuh8aQl%2Fs54a27K6C5UnSiKSNw%2FLAzOMUQFvAGONZ3hdGx68zLUSVdc4kBMLGC5FF9iDCUK2%2B9oLwrVjc7uhKhEw4XJKdD9bqBvenO48xpDP0HdOnUx71un8ua0PygsRVA2Fm6n4YWYCoc9pT%2BdvX0ZLM%2FSQ2madoydMjZRGLflLz%2F38f0nStG15qwbLf6KDkQGwoq1IN263PCXDrt%2BaDUXpeY00nQBptn8HEK7xt%2FaybMR4PGWP5z3sJ35DeSFCVaECvZKrTo%2FeQmkxQ3yz5ag3WDZXazK6Yy4Ma1Zyh5ui56hpqOMluQFgjeoqPYAuO7V7hXZvSbTrCIt2j5GTyGPIZ7unJ4gziaCD%2FQ9lBYTDtbx7UAM8jQvsSQSfp%2Bsv6gmOhSdqvaIg55D8OIyUgntCafzpxdCn5a7VSS1Uw26OSwAY6pgHcmc2By%2BdvLcxFrmPXbMonumydDP8hLiUTGjU84xAakZ7UtSj5KQ2SWZDLexCp9cSJu47J62pleJgPQ8wAIkuD5CIE3cfpRt0QifaRpPAaMFBkEkISavDeHc86USNEiuSkFN9jQ%2B55iF970o0ZzebTHdNQfhCwOsf%2BPRvBf6DJp1Tycrd2w4A9kSmbB6wv4GHTwhPXAnOmvSHhX8HZMuPbX26ZB3kT&X-Amz-Signature=9d1ed9528d353235c71267032a24f2c60cc6f655f01e230dfbae0dd5b9c8e492&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPE77RP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEUgh8X8eVamgoF63NE9EKNlssThdKAhKAZg3B6f5INZAiBt%2FNkmEuDS%2B6ealAs4%2B2nZJ8%2FFaqgjMURM%2Fj2mQqjQqiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2BeVDeWWrbVsIHQ1KtwD5Qkmdc1JqaUNfRZ7LbRI3bVYz%2Fy1tWLbPiT%2B2M9cM1WTeRWBsKa0uwi%2BCDTKJkvCGFgMbw1SSvEijpG1Soy0d3jxJBPRi%2BLyUflL1OClsYG7P7jmKw%2F5eWOI49%2FcyDyNNTgGdx%2BF1qqR8rJYgjNpAVvFMmDvyW0gAU1g%2FlqhEEaiAzHX9dJ0XEZUoUefVrRipmFBflhylv4EKttMrbOHuh8aQl%2Fs54a27K6C5UnSiKSNw%2FLAzOMUQFvAGONZ3hdGx68zLUSVdc4kBMLGC5FF9iDCUK2%2B9oLwrVjc7uhKhEw4XJKdD9bqBvenO48xpDP0HdOnUx71un8ua0PygsRVA2Fm6n4YWYCoc9pT%2BdvX0ZLM%2FSQ2madoydMjZRGLflLz%2F38f0nStG15qwbLf6KDkQGwoq1IN263PCXDrt%2BaDUXpeY00nQBptn8HEK7xt%2FaybMR4PGWP5z3sJ35DeSFCVaECvZKrTo%2FeQmkxQ3yz5ag3WDZXazK6Yy4Ma1Zyh5ui56hpqOMluQFgjeoqPYAuO7V7hXZvSbTrCIt2j5GTyGPIZ7unJ4gziaCD%2FQ9lBYTDtbx7UAM8jQvsSQSfp%2Bsv6gmOhSdqvaIg55D8OIyUgntCafzpxdCn5a7VSS1Uw26OSwAY6pgHcmc2By%2BdvLcxFrmPXbMonumydDP8hLiUTGjU84xAakZ7UtSj5KQ2SWZDLexCp9cSJu47J62pleJgPQ8wAIkuD5CIE3cfpRt0QifaRpPAaMFBkEkISavDeHc86USNEiuSkFN9jQ%2B55iF970o0ZzebTHdNQfhCwOsf%2BPRvBf6DJp1Tycrd2w4A9kSmbB6wv4GHTwhPXAnOmvSHhX8HZMuPbX26ZB3kT&X-Amz-Signature=5b5696c87fcc2b9e0f366038c610fbd4f83d38348802094057a0353ea53de016&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPE77RP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEUgh8X8eVamgoF63NE9EKNlssThdKAhKAZg3B6f5INZAiBt%2FNkmEuDS%2B6ealAs4%2B2nZJ8%2FFaqgjMURM%2Fj2mQqjQqiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2BeVDeWWrbVsIHQ1KtwD5Qkmdc1JqaUNfRZ7LbRI3bVYz%2Fy1tWLbPiT%2B2M9cM1WTeRWBsKa0uwi%2BCDTKJkvCGFgMbw1SSvEijpG1Soy0d3jxJBPRi%2BLyUflL1OClsYG7P7jmKw%2F5eWOI49%2FcyDyNNTgGdx%2BF1qqR8rJYgjNpAVvFMmDvyW0gAU1g%2FlqhEEaiAzHX9dJ0XEZUoUefVrRipmFBflhylv4EKttMrbOHuh8aQl%2Fs54a27K6C5UnSiKSNw%2FLAzOMUQFvAGONZ3hdGx68zLUSVdc4kBMLGC5FF9iDCUK2%2B9oLwrVjc7uhKhEw4XJKdD9bqBvenO48xpDP0HdOnUx71un8ua0PygsRVA2Fm6n4YWYCoc9pT%2BdvX0ZLM%2FSQ2madoydMjZRGLflLz%2F38f0nStG15qwbLf6KDkQGwoq1IN263PCXDrt%2BaDUXpeY00nQBptn8HEK7xt%2FaybMR4PGWP5z3sJ35DeSFCVaECvZKrTo%2FeQmkxQ3yz5ag3WDZXazK6Yy4Ma1Zyh5ui56hpqOMluQFgjeoqPYAuO7V7hXZvSbTrCIt2j5GTyGPIZ7unJ4gziaCD%2FQ9lBYTDtbx7UAM8jQvsSQSfp%2Bsv6gmOhSdqvaIg55D8OIyUgntCafzpxdCn5a7VSS1Uw26OSwAY6pgHcmc2By%2BdvLcxFrmPXbMonumydDP8hLiUTGjU84xAakZ7UtSj5KQ2SWZDLexCp9cSJu47J62pleJgPQ8wAIkuD5CIE3cfpRt0QifaRpPAaMFBkEkISavDeHc86USNEiuSkFN9jQ%2B55iF970o0ZzebTHdNQfhCwOsf%2BPRvBf6DJp1Tycrd2w4A9kSmbB6wv4GHTwhPXAnOmvSHhX8HZMuPbX26ZB3kT&X-Amz-Signature=38f5a8a9224a2bce8e3a57b3b8cab1c50679564afa7eed414f1da2913cf544dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
