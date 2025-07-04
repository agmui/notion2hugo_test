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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCTR56H%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDSZODpqrcW83ioQAop20DepEpTLmOKnl95i%2FmRMmDbQAIgEJjJipMWMF2HeYlt96l9NdQBiIY%2B%2B9RGoNPCPLei38wq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIM8bERU093JazKgsircA7pYRhwBJ3pD%2ForeXChQIh58CxtupmBrucnd%2BPFSr7%2BZes9cKdCpISgsiQCDL0Ct4f0uewpE9Qw%2FBr0lFJ%2BFRMIcb6s4e%2Bz%2F0lMezjC4Hn9NBcmLk9OMyKJ2PPQRF4unCnk6kh%2B%2Fs5TohHTnL%2B8wEoH%2BrzlcNwyI7a%2BXrdHx9wT8V6iqLgHLkTB4W%2BZtAzUMY9NZHYvIkpGqFmw0lwcOwmd6O%2FKOxIjc%2BF6fRR0%2Fn32K3X8YlmdRTv4NOn4ZvkhueW%2Frh1YsAQLZxlG9YC2pLWyyPEpMrq7NZL8ALJOR%2FyjI4l2dOeN0t%2BKoSraFM0j%2Blt1FCFsXpzA%2FhBunzefXdQ%2B1tJi3ef4tCo%2BcEGa8RNNjeXekPmEtGG0%2BL8n4sppdnnsn%2BZqfcMxWbv%2BXyTwomdYpOtFR6xdSZFwSGG1Ar9HINpzFZHP%2Bc5t6%2F2VQIwof39pGv42IjEBGv%2BPiQyDCmq6jv9jmTT50fH2Bm55KcTCAb4ghY9i5%2BM5ph%2Bj2yJpuV9iOfTKHB0rMU7eJQVWT7n5lPUCqRiEn8l4PE6QVc8YTg9UJ5rDsefb%2FU%2B2zFzR%2B7ooVy3LpXbE1M3HA%2F9sNBV5PR63DjQZqU8oqu%2BMwhji4itXEw%2FVCYp1I26QHMIThncMGOqUB1GxLHQHGF7KweZWUfvchkBn%2F%2BKiSiRgpHdmExu%2F4naHbvHTLqXqRrJJorHi0TuOADxtSs%2FkRh46gmCUcscQVD20EPk9cVulXctuR0FTwwC5mtPyUjlNpfLl1WhZgNtOqVOzoZT33lcEx8K4xK%2BwMxMoW07LYRTYJG7uhbzRLgonII7N1waOBcTfKWpDHc0BphP%2FIaQWbFmudblHKTTB8R0Ru0fJF&X-Amz-Signature=14a06ef05a15a7bf152ca9bcc03f9a336ed9d784710b9c9ede8f8056ad9a3e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCTR56H%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDSZODpqrcW83ioQAop20DepEpTLmOKnl95i%2FmRMmDbQAIgEJjJipMWMF2HeYlt96l9NdQBiIY%2B%2B9RGoNPCPLei38wq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIM8bERU093JazKgsircA7pYRhwBJ3pD%2ForeXChQIh58CxtupmBrucnd%2BPFSr7%2BZes9cKdCpISgsiQCDL0Ct4f0uewpE9Qw%2FBr0lFJ%2BFRMIcb6s4e%2Bz%2F0lMezjC4Hn9NBcmLk9OMyKJ2PPQRF4unCnk6kh%2B%2Fs5TohHTnL%2B8wEoH%2BrzlcNwyI7a%2BXrdHx9wT8V6iqLgHLkTB4W%2BZtAzUMY9NZHYvIkpGqFmw0lwcOwmd6O%2FKOxIjc%2BF6fRR0%2Fn32K3X8YlmdRTv4NOn4ZvkhueW%2Frh1YsAQLZxlG9YC2pLWyyPEpMrq7NZL8ALJOR%2FyjI4l2dOeN0t%2BKoSraFM0j%2Blt1FCFsXpzA%2FhBunzefXdQ%2B1tJi3ef4tCo%2BcEGa8RNNjeXekPmEtGG0%2BL8n4sppdnnsn%2BZqfcMxWbv%2BXyTwomdYpOtFR6xdSZFwSGG1Ar9HINpzFZHP%2Bc5t6%2F2VQIwof39pGv42IjEBGv%2BPiQyDCmq6jv9jmTT50fH2Bm55KcTCAb4ghY9i5%2BM5ph%2Bj2yJpuV9iOfTKHB0rMU7eJQVWT7n5lPUCqRiEn8l4PE6QVc8YTg9UJ5rDsefb%2FU%2B2zFzR%2B7ooVy3LpXbE1M3HA%2F9sNBV5PR63DjQZqU8oqu%2BMwhji4itXEw%2FVCYp1I26QHMIThncMGOqUB1GxLHQHGF7KweZWUfvchkBn%2F%2BKiSiRgpHdmExu%2F4naHbvHTLqXqRrJJorHi0TuOADxtSs%2FkRh46gmCUcscQVD20EPk9cVulXctuR0FTwwC5mtPyUjlNpfLl1WhZgNtOqVOzoZT33lcEx8K4xK%2BwMxMoW07LYRTYJG7uhbzRLgonII7N1waOBcTfKWpDHc0BphP%2FIaQWbFmudblHKTTB8R0Ru0fJF&X-Amz-Signature=5aac9c260ad2ec6b0c9b315ad2ddd78b7c674ec39fcc8183886ca1f8f290703c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCTR56H%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDSZODpqrcW83ioQAop20DepEpTLmOKnl95i%2FmRMmDbQAIgEJjJipMWMF2HeYlt96l9NdQBiIY%2B%2B9RGoNPCPLei38wq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIM8bERU093JazKgsircA7pYRhwBJ3pD%2ForeXChQIh58CxtupmBrucnd%2BPFSr7%2BZes9cKdCpISgsiQCDL0Ct4f0uewpE9Qw%2FBr0lFJ%2BFRMIcb6s4e%2Bz%2F0lMezjC4Hn9NBcmLk9OMyKJ2PPQRF4unCnk6kh%2B%2Fs5TohHTnL%2B8wEoH%2BrzlcNwyI7a%2BXrdHx9wT8V6iqLgHLkTB4W%2BZtAzUMY9NZHYvIkpGqFmw0lwcOwmd6O%2FKOxIjc%2BF6fRR0%2Fn32K3X8YlmdRTv4NOn4ZvkhueW%2Frh1YsAQLZxlG9YC2pLWyyPEpMrq7NZL8ALJOR%2FyjI4l2dOeN0t%2BKoSraFM0j%2Blt1FCFsXpzA%2FhBunzefXdQ%2B1tJi3ef4tCo%2BcEGa8RNNjeXekPmEtGG0%2BL8n4sppdnnsn%2BZqfcMxWbv%2BXyTwomdYpOtFR6xdSZFwSGG1Ar9HINpzFZHP%2Bc5t6%2F2VQIwof39pGv42IjEBGv%2BPiQyDCmq6jv9jmTT50fH2Bm55KcTCAb4ghY9i5%2BM5ph%2Bj2yJpuV9iOfTKHB0rMU7eJQVWT7n5lPUCqRiEn8l4PE6QVc8YTg9UJ5rDsefb%2FU%2B2zFzR%2B7ooVy3LpXbE1M3HA%2F9sNBV5PR63DjQZqU8oqu%2BMwhji4itXEw%2FVCYp1I26QHMIThncMGOqUB1GxLHQHGF7KweZWUfvchkBn%2F%2BKiSiRgpHdmExu%2F4naHbvHTLqXqRrJJorHi0TuOADxtSs%2FkRh46gmCUcscQVD20EPk9cVulXctuR0FTwwC5mtPyUjlNpfLl1WhZgNtOqVOzoZT33lcEx8K4xK%2BwMxMoW07LYRTYJG7uhbzRLgonII7N1waOBcTfKWpDHc0BphP%2FIaQWbFmudblHKTTB8R0Ru0fJF&X-Amz-Signature=39079797b9f93c2f620d6a6f98ad8770775aaddfdcd0b7ceb8b669cb702a7949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
