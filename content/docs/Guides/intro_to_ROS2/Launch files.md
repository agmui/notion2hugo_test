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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URFHWGC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBOH55P%2FJ%2FpZ%2BSU1Vi4%2BMPDwhRjTcL2AosggRLPeVuRDAiEA9mGngpk1vf9NHzu6XNRSlYuK8uFs1h9xZ8qMLO81t2IqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDap2BH6%2BdVbp%2B%2FBCrcA92gjew%2BK2czd5fYyMFpdNFe91Yt%2BMF2Vk8Pr%2F30eK1sbH76fYSeAPg4eRVUF1aYPVUrZNz5nq1lGUYZqr4sttQUBVsPEHXwBz7Ykpzv5t3UjLAjRFj9injKydG9X%2F%2BeMlUCNX%2F5jhNOM0LBOEHxVOgKP8Q4aYXifTpWJLqQ1E7oIYaNPOvW%2FcMDeJdeKC%2F5%2FQzUkocR6Hd2GQS83kspKAPgrq0VgJ8tgW%2Fm24IwStb%2B24pzxJIOTw8KlKFkkrjaC6MtyHS035fENj3mfBmKg7pmeoHPmSPYpif0JmiQP0Ew8L1lxW6dJ0i7pAONsC4NP6O3%2B%2Fa%2FVf0I84I%2BrblVHaz36uFpH8xxuCmwnwrUL8aO6VJyfZOByw5Fnk2WlCPBl4klVCh4te2NWA%2FTYBw%2BDpEWvHPrhhVrFlS1g2TiJrh28LsqmhKuWUcCxbnae66Ew0tV%2BCrtGT4CpDI9Bwt7BKBAyeTy1IcFzTNA%2B6pKJoIUK2U4kF7j55UizzRvob%2Br9cbxrcwvMdnigRVKRaWMltL%2B%2BbASYu1CH9eUCv4JBaetXEY2tuSwAPw83FtLxkqFO6ZViGPCTtMM4fiQpk5VCslsxjr9QaeOUaPfM2f8XPTVsgbyZbAd4031T27oMKrMpsAGOqUBy7tNE2lYnPdo686S0af5wXwnK5JcpTrpP3pYg%2Fuf2kmUUPTlmHyh3BdOZjcqAYzJQd0ROtCBATVaGxYHdhjOXn9XjOo8WOYXXRpdcKml8OzD5X6Mw4%2FOEVraS%2FAG5zk5dAm2d2EfURQV8JkuBsIQ5vhnPkQaitrNJBQCSww2KHIyDBlcYyDFjwRpVUS2vttFsV7RiMH1Tr3j7w6%2FncUFS27YOwuj&X-Amz-Signature=37de2563bae3e3b7db4b2ca46b795dbd92adc9e6c1e7ed73b5c7dcd4853a7b87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URFHWGC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBOH55P%2FJ%2FpZ%2BSU1Vi4%2BMPDwhRjTcL2AosggRLPeVuRDAiEA9mGngpk1vf9NHzu6XNRSlYuK8uFs1h9xZ8qMLO81t2IqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDap2BH6%2BdVbp%2B%2FBCrcA92gjew%2BK2czd5fYyMFpdNFe91Yt%2BMF2Vk8Pr%2F30eK1sbH76fYSeAPg4eRVUF1aYPVUrZNz5nq1lGUYZqr4sttQUBVsPEHXwBz7Ykpzv5t3UjLAjRFj9injKydG9X%2F%2BeMlUCNX%2F5jhNOM0LBOEHxVOgKP8Q4aYXifTpWJLqQ1E7oIYaNPOvW%2FcMDeJdeKC%2F5%2FQzUkocR6Hd2GQS83kspKAPgrq0VgJ8tgW%2Fm24IwStb%2B24pzxJIOTw8KlKFkkrjaC6MtyHS035fENj3mfBmKg7pmeoHPmSPYpif0JmiQP0Ew8L1lxW6dJ0i7pAONsC4NP6O3%2B%2Fa%2FVf0I84I%2BrblVHaz36uFpH8xxuCmwnwrUL8aO6VJyfZOByw5Fnk2WlCPBl4klVCh4te2NWA%2FTYBw%2BDpEWvHPrhhVrFlS1g2TiJrh28LsqmhKuWUcCxbnae66Ew0tV%2BCrtGT4CpDI9Bwt7BKBAyeTy1IcFzTNA%2B6pKJoIUK2U4kF7j55UizzRvob%2Br9cbxrcwvMdnigRVKRaWMltL%2B%2BbASYu1CH9eUCv4JBaetXEY2tuSwAPw83FtLxkqFO6ZViGPCTtMM4fiQpk5VCslsxjr9QaeOUaPfM2f8XPTVsgbyZbAd4031T27oMKrMpsAGOqUBy7tNE2lYnPdo686S0af5wXwnK5JcpTrpP3pYg%2Fuf2kmUUPTlmHyh3BdOZjcqAYzJQd0ROtCBATVaGxYHdhjOXn9XjOo8WOYXXRpdcKml8OzD5X6Mw4%2FOEVraS%2FAG5zk5dAm2d2EfURQV8JkuBsIQ5vhnPkQaitrNJBQCSww2KHIyDBlcYyDFjwRpVUS2vttFsV7RiMH1Tr3j7w6%2FncUFS27YOwuj&X-Amz-Signature=7c6c5827fcce929b8a4423ab3f7f18bbd60069e7474e08d54431178daa46dbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URFHWGC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBOH55P%2FJ%2FpZ%2BSU1Vi4%2BMPDwhRjTcL2AosggRLPeVuRDAiEA9mGngpk1vf9NHzu6XNRSlYuK8uFs1h9xZ8qMLO81t2IqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDap2BH6%2BdVbp%2B%2FBCrcA92gjew%2BK2czd5fYyMFpdNFe91Yt%2BMF2Vk8Pr%2F30eK1sbH76fYSeAPg4eRVUF1aYPVUrZNz5nq1lGUYZqr4sttQUBVsPEHXwBz7Ykpzv5t3UjLAjRFj9injKydG9X%2F%2BeMlUCNX%2F5jhNOM0LBOEHxVOgKP8Q4aYXifTpWJLqQ1E7oIYaNPOvW%2FcMDeJdeKC%2F5%2FQzUkocR6Hd2GQS83kspKAPgrq0VgJ8tgW%2Fm24IwStb%2B24pzxJIOTw8KlKFkkrjaC6MtyHS035fENj3mfBmKg7pmeoHPmSPYpif0JmiQP0Ew8L1lxW6dJ0i7pAONsC4NP6O3%2B%2Fa%2FVf0I84I%2BrblVHaz36uFpH8xxuCmwnwrUL8aO6VJyfZOByw5Fnk2WlCPBl4klVCh4te2NWA%2FTYBw%2BDpEWvHPrhhVrFlS1g2TiJrh28LsqmhKuWUcCxbnae66Ew0tV%2BCrtGT4CpDI9Bwt7BKBAyeTy1IcFzTNA%2B6pKJoIUK2U4kF7j55UizzRvob%2Br9cbxrcwvMdnigRVKRaWMltL%2B%2BbASYu1CH9eUCv4JBaetXEY2tuSwAPw83FtLxkqFO6ZViGPCTtMM4fiQpk5VCslsxjr9QaeOUaPfM2f8XPTVsgbyZbAd4031T27oMKrMpsAGOqUBy7tNE2lYnPdo686S0af5wXwnK5JcpTrpP3pYg%2Fuf2kmUUPTlmHyh3BdOZjcqAYzJQd0ROtCBATVaGxYHdhjOXn9XjOo8WOYXXRpdcKml8OzD5X6Mw4%2FOEVraS%2FAG5zk5dAm2d2EfURQV8JkuBsIQ5vhnPkQaitrNJBQCSww2KHIyDBlcYyDFjwRpVUS2vttFsV7RiMH1Tr3j7w6%2FncUFS27YOwuj&X-Amz-Signature=c79234800c79c18e3f4dc8a26e5f75ead64b801c1ab18ddc5af8fabcaa0e7243&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
