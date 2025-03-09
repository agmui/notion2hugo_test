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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4HIC6U%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCNituVqEePj3jOT0IlOqPcuDpT%2FEap7pN%2BLWJMogbCHQIgZZCXcpOJQNVlmiUKSHjM8yVZaD3HK9wo64rYgUZh3%2Bgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOZFscZ6fbRVfobEkSrcAyP7FYPoTouBsIHs0aCcQi7lV3nCCEAdHCo1BY68GKRWx6nsv0ld5EuN5obf3NbdbIIuFUciJo8yHI1RT6OJpz%2FQmc49AqJLex82ei1BSBFQX59hFA2rE1pOpLU%2B2mTKElsLsm13vUzfuLsi2VfUlWSQ057KdRHHa%2BX7mSxJBZovP9i1KnlggSy3bEgNvqjlbqNy6EtJjckOCDrHHL8%2BVad2uUa6dE2OsfyMVyuo3w7f%2BvsnXWStVbuotO5KsduNo%2Bgz0E8Y0Gq9jhSJIvxFgzERpjFszGQCqGBfxlasklddVd6RK9Qnwsma1Wasdpt6y%2B2UxzJD9r357XPYG18W1L4Seel6yiud336MZmS8NiMaMCfVrW7nqyzZLQxRFK19N5PsmbVi0JZPrPhhkt1TTy6zG0W20YDSMGUiPCBgnOza4VBFmLAQ%2BVNBxnZg5KQ7KbqjTIn7gRiJyaQ3qNg%2F8dgNceizeQQ%2FfQlyPBeAWqGLcDv4esW1rJICmuC5wlCbwU4EGFcwxjEKXnHUoek6OSLPku9nFPSNVlR6J3NWd2N5EK%2BphIeTLimGH%2B7E9xWtO6NtIhFdt91ST6o1E6DITL32CflLvKVTkGw%2BBP4%2FZ8kPG0%2Bef5f7grpCV5x7MO7gt74GOqUBsc1887KHi0jxeF16eua5hbpi%2BjG0QMfRU2oHgfh%2FTNscKkysoBK%2BYWHo3K2d2xxxcbiJkeNUYx%2BAkVvLMHAPIdZVA%2FVK00IK8%2Fn%2BllxYvSxhuitdnZwicSZI9coGkhZlpjTWdPc%2BKdRQuj7luitQT6%2FaMWVOG3sugRckMIYPBAr2jXe2xH%2FCXsnPpag04aM1xmJheBHxXQYV71GXQtTXu6dMSCeP&X-Amz-Signature=7a65c6891bdd4e5373ab24d4d46ab68c011ecd60743c36fa864aa39afa50f37a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4HIC6U%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCNituVqEePj3jOT0IlOqPcuDpT%2FEap7pN%2BLWJMogbCHQIgZZCXcpOJQNVlmiUKSHjM8yVZaD3HK9wo64rYgUZh3%2Bgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOZFscZ6fbRVfobEkSrcAyP7FYPoTouBsIHs0aCcQi7lV3nCCEAdHCo1BY68GKRWx6nsv0ld5EuN5obf3NbdbIIuFUciJo8yHI1RT6OJpz%2FQmc49AqJLex82ei1BSBFQX59hFA2rE1pOpLU%2B2mTKElsLsm13vUzfuLsi2VfUlWSQ057KdRHHa%2BX7mSxJBZovP9i1KnlggSy3bEgNvqjlbqNy6EtJjckOCDrHHL8%2BVad2uUa6dE2OsfyMVyuo3w7f%2BvsnXWStVbuotO5KsduNo%2Bgz0E8Y0Gq9jhSJIvxFgzERpjFszGQCqGBfxlasklddVd6RK9Qnwsma1Wasdpt6y%2B2UxzJD9r357XPYG18W1L4Seel6yiud336MZmS8NiMaMCfVrW7nqyzZLQxRFK19N5PsmbVi0JZPrPhhkt1TTy6zG0W20YDSMGUiPCBgnOza4VBFmLAQ%2BVNBxnZg5KQ7KbqjTIn7gRiJyaQ3qNg%2F8dgNceizeQQ%2FfQlyPBeAWqGLcDv4esW1rJICmuC5wlCbwU4EGFcwxjEKXnHUoek6OSLPku9nFPSNVlR6J3NWd2N5EK%2BphIeTLimGH%2B7E9xWtO6NtIhFdt91ST6o1E6DITL32CflLvKVTkGw%2BBP4%2FZ8kPG0%2Bef5f7grpCV5x7MO7gt74GOqUBsc1887KHi0jxeF16eua5hbpi%2BjG0QMfRU2oHgfh%2FTNscKkysoBK%2BYWHo3K2d2xxxcbiJkeNUYx%2BAkVvLMHAPIdZVA%2FVK00IK8%2Fn%2BllxYvSxhuitdnZwicSZI9coGkhZlpjTWdPc%2BKdRQuj7luitQT6%2FaMWVOG3sugRckMIYPBAr2jXe2xH%2FCXsnPpag04aM1xmJheBHxXQYV71GXQtTXu6dMSCeP&X-Amz-Signature=624bd97305c2b9dc6b1d4588354962c4fa2149426b2fd49a921b8cc1795e36ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4HIC6U%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCNituVqEePj3jOT0IlOqPcuDpT%2FEap7pN%2BLWJMogbCHQIgZZCXcpOJQNVlmiUKSHjM8yVZaD3HK9wo64rYgUZh3%2Bgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOZFscZ6fbRVfobEkSrcAyP7FYPoTouBsIHs0aCcQi7lV3nCCEAdHCo1BY68GKRWx6nsv0ld5EuN5obf3NbdbIIuFUciJo8yHI1RT6OJpz%2FQmc49AqJLex82ei1BSBFQX59hFA2rE1pOpLU%2B2mTKElsLsm13vUzfuLsi2VfUlWSQ057KdRHHa%2BX7mSxJBZovP9i1KnlggSy3bEgNvqjlbqNy6EtJjckOCDrHHL8%2BVad2uUa6dE2OsfyMVyuo3w7f%2BvsnXWStVbuotO5KsduNo%2Bgz0E8Y0Gq9jhSJIvxFgzERpjFszGQCqGBfxlasklddVd6RK9Qnwsma1Wasdpt6y%2B2UxzJD9r357XPYG18W1L4Seel6yiud336MZmS8NiMaMCfVrW7nqyzZLQxRFK19N5PsmbVi0JZPrPhhkt1TTy6zG0W20YDSMGUiPCBgnOza4VBFmLAQ%2BVNBxnZg5KQ7KbqjTIn7gRiJyaQ3qNg%2F8dgNceizeQQ%2FfQlyPBeAWqGLcDv4esW1rJICmuC5wlCbwU4EGFcwxjEKXnHUoek6OSLPku9nFPSNVlR6J3NWd2N5EK%2BphIeTLimGH%2B7E9xWtO6NtIhFdt91ST6o1E6DITL32CflLvKVTkGw%2BBP4%2FZ8kPG0%2Bef5f7grpCV5x7MO7gt74GOqUBsc1887KHi0jxeF16eua5hbpi%2BjG0QMfRU2oHgfh%2FTNscKkysoBK%2BYWHo3K2d2xxxcbiJkeNUYx%2BAkVvLMHAPIdZVA%2FVK00IK8%2Fn%2BllxYvSxhuitdnZwicSZI9coGkhZlpjTWdPc%2BKdRQuj7luitQT6%2FaMWVOG3sugRckMIYPBAr2jXe2xH%2FCXsnPpag04aM1xmJheBHxXQYV71GXQtTXu6dMSCeP&X-Amz-Signature=d56b8a8d59ea9858e25b4f9a8bab92ed0d1c144c9046fbcdbe4f1b3fee667742&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
