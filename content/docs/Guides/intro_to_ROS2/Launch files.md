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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCJ6BZB%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChBwTxBzJl%2FGplSc%2BAgvIjquD387y22D8dKPM9Ako92wIhAKF1Gf6hz5cw244jPejr9p8gPZ%2BjE278TFE2XdIaFb8tKv8DCCIQABoMNjM3NDIzMTgzODA1IgyheWasyH4zEYo9cLUq3AMLkeWxAh5dtjk%2BCgR7L6SProm1q9yq91WpzQks6KgU66f%2BousNc1u8UywuJ%2FYHSSJsqAWqh68ImMSfYJOmNkUQCqqqc1NuyN66AlVHGnT7LFqD6AIpPmvSoKual2zJNkzTNY9X%2Fk7GonVm46dBI1QH72Lvm4cXuBYEsAMz6cS32sOmNTsgj8bif4NlxLs3e0y0tw7u2J0FMWkk5PWd5S7ZgcQJWf4ASp%2BgRZiLHRar%2FhZbwTjpFtAow%2FYkd1VdyXSyQaAFNGQXasJQqaDVYN%2F%2BELNXemmRST%2BStXfDnWMuKnC1%2Btk2MFqVEBJhoxgMvPjDwik4dyGCRH7AytzMe%2BqQk27wxWY1qlO40iF3vP1hSkOthgTOcWGuYBb6py9EL3QUc%2FKiXtWG07O11sFgCUZAoMy6HLx0B%2BmgF4ZlP0E1QosnQoFHciuwZ72tEh9ujAUtEpIS3ta1kbNFNKp%2BQZUz6T6mKXnA9bzEDatR%2Bf9r3yoP3aCE4KXr%2BbRNoVBsGBrPMfCrf6BbPSE%2FgUJYFxsBys0Pxsk29CX5ZllZPd7mimlM5MZVufwrihKoHoYY1OAvWMgXv2sSVMGyhjBxxbj5drPgTaHO0wzjjOelCLzBSm6ZqoMpp4AxNaroQTDni9nFBjqkATa8tng47jQdrXVEdomsJDYKZ3WYZS9Qmh%2B4snlhVpu3NXSB%2BhIAua3uuSzJE59Dam5ExkyK3pUp65JhEyUVoI5KB5o%2Fic0unHrBDdqJ%2FuXq%2FkZ03aLIktyZpBfBnNJI%2BUxjpwky9D0BH68YFIMRZLAMWU6D2CB1GrEd1P%2B7s%2FaqNMXKV6q0%2BKZDfJ7nU%2B55f4GlAGPsIZ1Wpv0cY%2FGt2363B0Ds&X-Amz-Signature=ac614efe9ccb2c91b6f9dd445c2eadc9cb919ecb369c854519ec4c13e9550682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCJ6BZB%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChBwTxBzJl%2FGplSc%2BAgvIjquD387y22D8dKPM9Ako92wIhAKF1Gf6hz5cw244jPejr9p8gPZ%2BjE278TFE2XdIaFb8tKv8DCCIQABoMNjM3NDIzMTgzODA1IgyheWasyH4zEYo9cLUq3AMLkeWxAh5dtjk%2BCgR7L6SProm1q9yq91WpzQks6KgU66f%2BousNc1u8UywuJ%2FYHSSJsqAWqh68ImMSfYJOmNkUQCqqqc1NuyN66AlVHGnT7LFqD6AIpPmvSoKual2zJNkzTNY9X%2Fk7GonVm46dBI1QH72Lvm4cXuBYEsAMz6cS32sOmNTsgj8bif4NlxLs3e0y0tw7u2J0FMWkk5PWd5S7ZgcQJWf4ASp%2BgRZiLHRar%2FhZbwTjpFtAow%2FYkd1VdyXSyQaAFNGQXasJQqaDVYN%2F%2BELNXemmRST%2BStXfDnWMuKnC1%2Btk2MFqVEBJhoxgMvPjDwik4dyGCRH7AytzMe%2BqQk27wxWY1qlO40iF3vP1hSkOthgTOcWGuYBb6py9EL3QUc%2FKiXtWG07O11sFgCUZAoMy6HLx0B%2BmgF4ZlP0E1QosnQoFHciuwZ72tEh9ujAUtEpIS3ta1kbNFNKp%2BQZUz6T6mKXnA9bzEDatR%2Bf9r3yoP3aCE4KXr%2BbRNoVBsGBrPMfCrf6BbPSE%2FgUJYFxsBys0Pxsk29CX5ZllZPd7mimlM5MZVufwrihKoHoYY1OAvWMgXv2sSVMGyhjBxxbj5drPgTaHO0wzjjOelCLzBSm6ZqoMpp4AxNaroQTDni9nFBjqkATa8tng47jQdrXVEdomsJDYKZ3WYZS9Qmh%2B4snlhVpu3NXSB%2BhIAua3uuSzJE59Dam5ExkyK3pUp65JhEyUVoI5KB5o%2Fic0unHrBDdqJ%2FuXq%2FkZ03aLIktyZpBfBnNJI%2BUxjpwky9D0BH68YFIMRZLAMWU6D2CB1GrEd1P%2B7s%2FaqNMXKV6q0%2BKZDfJ7nU%2B55f4GlAGPsIZ1Wpv0cY%2FGt2363B0Ds&X-Amz-Signature=b996e695ffdc21ee0c1a5f442a027fb9193c3fd9938d6752e6f890e9ee5bf7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCJ6BZB%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChBwTxBzJl%2FGplSc%2BAgvIjquD387y22D8dKPM9Ako92wIhAKF1Gf6hz5cw244jPejr9p8gPZ%2BjE278TFE2XdIaFb8tKv8DCCIQABoMNjM3NDIzMTgzODA1IgyheWasyH4zEYo9cLUq3AMLkeWxAh5dtjk%2BCgR7L6SProm1q9yq91WpzQks6KgU66f%2BousNc1u8UywuJ%2FYHSSJsqAWqh68ImMSfYJOmNkUQCqqqc1NuyN66AlVHGnT7LFqD6AIpPmvSoKual2zJNkzTNY9X%2Fk7GonVm46dBI1QH72Lvm4cXuBYEsAMz6cS32sOmNTsgj8bif4NlxLs3e0y0tw7u2J0FMWkk5PWd5S7ZgcQJWf4ASp%2BgRZiLHRar%2FhZbwTjpFtAow%2FYkd1VdyXSyQaAFNGQXasJQqaDVYN%2F%2BELNXemmRST%2BStXfDnWMuKnC1%2Btk2MFqVEBJhoxgMvPjDwik4dyGCRH7AytzMe%2BqQk27wxWY1qlO40iF3vP1hSkOthgTOcWGuYBb6py9EL3QUc%2FKiXtWG07O11sFgCUZAoMy6HLx0B%2BmgF4ZlP0E1QosnQoFHciuwZ72tEh9ujAUtEpIS3ta1kbNFNKp%2BQZUz6T6mKXnA9bzEDatR%2Bf9r3yoP3aCE4KXr%2BbRNoVBsGBrPMfCrf6BbPSE%2FgUJYFxsBys0Pxsk29CX5ZllZPd7mimlM5MZVufwrihKoHoYY1OAvWMgXv2sSVMGyhjBxxbj5drPgTaHO0wzjjOelCLzBSm6ZqoMpp4AxNaroQTDni9nFBjqkATa8tng47jQdrXVEdomsJDYKZ3WYZS9Qmh%2B4snlhVpu3NXSB%2BhIAua3uuSzJE59Dam5ExkyK3pUp65JhEyUVoI5KB5o%2Fic0unHrBDdqJ%2FuXq%2FkZ03aLIktyZpBfBnNJI%2BUxjpwky9D0BH68YFIMRZLAMWU6D2CB1GrEd1P%2B7s%2FaqNMXKV6q0%2BKZDfJ7nU%2B55f4GlAGPsIZ1Wpv0cY%2FGt2363B0Ds&X-Amz-Signature=a068e4017cde3647e867a6f7ed4d0468b3fa59179764a50bb99eae5b6760e578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
