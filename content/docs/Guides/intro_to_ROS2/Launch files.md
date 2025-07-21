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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D5MX66I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv5KS%2B1QvAVM8F8y9RlTpZ3IDocH2rKdc%2BsKPqdgHABQIhALsZ9iQ%2F1AQk4AQW6bfvmKxOxyyfN2WR2eHKQPbApkY9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwASPtZbzv3a0Lu6Ecq3AMJ8izYet86sfVii7rAR1q4ktgn4O8XGzqL%2Byj%2BJZXmCMmvIMlqv52mViTMxTo0gJMU7ehyPvqhVO0CKWvTK4a%2FtH7scVoDudVybKb2nUkJQbq%2FYtsJ2vva9i1HYC8gq1Sf2kmPsf7NauI4sLz%2FJYgcxGlXFUIu%2FWaN9%2BaOUzDCt8gP0vpROLQOW%2FAiQVQDwHom7Upks2Rb4m1fudw5wx%2Fq6F4%2F5CWlN%2BEr7GxkPa6x4RWbxNiYtSyG5qDrG5uNVZU28aLsq1NgUDuK2hOuRIjCtcQ8xczR9NmrMFK7HXnNTfhX8aqVIweApq%2FdUmGQGv3gCjnrf9eIrxg8T8l1y%2BEaU%2FDPcLfp1suJiYzlrAPq8TLFcwPUmgwHYvac0PQ9RPQ7JaihS92oxChwdinyaqSMbk1101hvu5r5HJ57R9nJ6dxQbVqw5%2FixM2pK5bb%2Bw%2BZMzqjcgsi8RVt366%2B4LyDaF51HalwPbAKVZZ4iphxcN6Wt%2F2hoBnDS4Ms3sQQhYQ7dWnDhjm5AKl%2FtWP6BUTgjVhFPRydUSiEscQNdDzUbtcKTnUAYstlVOzwHuPOibKMj4iakYRUBuGSuZbM3U7Hi8HadwP85hcWx2wouFprVndNjBAIQVcE4v14nsTCQj%2FrDBjqkASVp%2FEA43e3oUKX33Ki0hXS2Cxbp0hPQkv4Sj8RWwHAXrsqs6KFgTAkFQpJt%2Bq%2FvJEZPPeujipj6ET5YdxuxsnkZ7cxNn7Ckycd06C6br9etL3hYH0XqFBVXBj98W%2Bsbzq8OYMDe4aJIpxJtGKdAoBXZ7hy4nrXY%2BiTdA%2FFmMT80qcjh%2Blq2fHkCTuL5eoUXGZuVxfXxJox%2BhXWpbJu7IW6CmkvD&X-Amz-Signature=b3039578a547e808e46c10966ed23a89031795b2327cbafbd582b03ebe3d9651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D5MX66I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv5KS%2B1QvAVM8F8y9RlTpZ3IDocH2rKdc%2BsKPqdgHABQIhALsZ9iQ%2F1AQk4AQW6bfvmKxOxyyfN2WR2eHKQPbApkY9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwASPtZbzv3a0Lu6Ecq3AMJ8izYet86sfVii7rAR1q4ktgn4O8XGzqL%2Byj%2BJZXmCMmvIMlqv52mViTMxTo0gJMU7ehyPvqhVO0CKWvTK4a%2FtH7scVoDudVybKb2nUkJQbq%2FYtsJ2vva9i1HYC8gq1Sf2kmPsf7NauI4sLz%2FJYgcxGlXFUIu%2FWaN9%2BaOUzDCt8gP0vpROLQOW%2FAiQVQDwHom7Upks2Rb4m1fudw5wx%2Fq6F4%2F5CWlN%2BEr7GxkPa6x4RWbxNiYtSyG5qDrG5uNVZU28aLsq1NgUDuK2hOuRIjCtcQ8xczR9NmrMFK7HXnNTfhX8aqVIweApq%2FdUmGQGv3gCjnrf9eIrxg8T8l1y%2BEaU%2FDPcLfp1suJiYzlrAPq8TLFcwPUmgwHYvac0PQ9RPQ7JaihS92oxChwdinyaqSMbk1101hvu5r5HJ57R9nJ6dxQbVqw5%2FixM2pK5bb%2Bw%2BZMzqjcgsi8RVt366%2B4LyDaF51HalwPbAKVZZ4iphxcN6Wt%2F2hoBnDS4Ms3sQQhYQ7dWnDhjm5AKl%2FtWP6BUTgjVhFPRydUSiEscQNdDzUbtcKTnUAYstlVOzwHuPOibKMj4iakYRUBuGSuZbM3U7Hi8HadwP85hcWx2wouFprVndNjBAIQVcE4v14nsTCQj%2FrDBjqkASVp%2FEA43e3oUKX33Ki0hXS2Cxbp0hPQkv4Sj8RWwHAXrsqs6KFgTAkFQpJt%2Bq%2FvJEZPPeujipj6ET5YdxuxsnkZ7cxNn7Ckycd06C6br9etL3hYH0XqFBVXBj98W%2Bsbzq8OYMDe4aJIpxJtGKdAoBXZ7hy4nrXY%2BiTdA%2FFmMT80qcjh%2Blq2fHkCTuL5eoUXGZuVxfXxJox%2BhXWpbJu7IW6CmkvD&X-Amz-Signature=77ee4d037a691392655cc6b725b2907525022c7ebe22301c863bef702ed7387c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D5MX66I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv5KS%2B1QvAVM8F8y9RlTpZ3IDocH2rKdc%2BsKPqdgHABQIhALsZ9iQ%2F1AQk4AQW6bfvmKxOxyyfN2WR2eHKQPbApkY9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwASPtZbzv3a0Lu6Ecq3AMJ8izYet86sfVii7rAR1q4ktgn4O8XGzqL%2Byj%2BJZXmCMmvIMlqv52mViTMxTo0gJMU7ehyPvqhVO0CKWvTK4a%2FtH7scVoDudVybKb2nUkJQbq%2FYtsJ2vva9i1HYC8gq1Sf2kmPsf7NauI4sLz%2FJYgcxGlXFUIu%2FWaN9%2BaOUzDCt8gP0vpROLQOW%2FAiQVQDwHom7Upks2Rb4m1fudw5wx%2Fq6F4%2F5CWlN%2BEr7GxkPa6x4RWbxNiYtSyG5qDrG5uNVZU28aLsq1NgUDuK2hOuRIjCtcQ8xczR9NmrMFK7HXnNTfhX8aqVIweApq%2FdUmGQGv3gCjnrf9eIrxg8T8l1y%2BEaU%2FDPcLfp1suJiYzlrAPq8TLFcwPUmgwHYvac0PQ9RPQ7JaihS92oxChwdinyaqSMbk1101hvu5r5HJ57R9nJ6dxQbVqw5%2FixM2pK5bb%2Bw%2BZMzqjcgsi8RVt366%2B4LyDaF51HalwPbAKVZZ4iphxcN6Wt%2F2hoBnDS4Ms3sQQhYQ7dWnDhjm5AKl%2FtWP6BUTgjVhFPRydUSiEscQNdDzUbtcKTnUAYstlVOzwHuPOibKMj4iakYRUBuGSuZbM3U7Hi8HadwP85hcWx2wouFprVndNjBAIQVcE4v14nsTCQj%2FrDBjqkASVp%2FEA43e3oUKX33Ki0hXS2Cxbp0hPQkv4Sj8RWwHAXrsqs6KFgTAkFQpJt%2Bq%2FvJEZPPeujipj6ET5YdxuxsnkZ7cxNn7Ckycd06C6br9etL3hYH0XqFBVXBj98W%2Bsbzq8OYMDe4aJIpxJtGKdAoBXZ7hy4nrXY%2BiTdA%2FFmMT80qcjh%2Blq2fHkCTuL5eoUXGZuVxfXxJox%2BhXWpbJu7IW6CmkvD&X-Amz-Signature=6fb3981ecde06d0ddeaf57b8f6e21697403766002e25f3291a325418614c9e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
