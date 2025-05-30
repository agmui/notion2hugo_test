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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEVKMW7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5bmmAOeK1G23V11BHnpdAl70FAgztRbTkU7qM%2B4DmSAIgSmemCkKHzHFnyUAgrpJQqg8CHKXgSF4NmqHNcLqYCFMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNft9zf7EyPzv8VOdCrcA1Qhk4DP%2FLmH9RGUdqIpecnkCqGlcDdzYk7C%2Frx%2BavRXJx1%2BEQyREC5TApyiVCJxbAYC4K4QcJvDkbwVl3teTKF1C1%2FifKUS1%2F0mqYGA%2FqqWNj8sCBCxuK4LgqBMPGJNPa686NVuXsSHcYdXMHUvIJ3fXEme%2BkbAnVZ2E%2Fcw%2BRwBvK%2FS2EnNLF4e3M9fBNMiuqE6tUfqNhetezKhO9GxH8m0heYjfSjQQWo%2F%2F%2FOFiqJqmjm9KawIC128g6AKoFAd0nNdOdbsD60e8YLSiPdJbFrYM6mjzFumno%2FLZBPCZPn8VBMwyMQ8YvGFhgQJbB66a%2BqHAgFjBMpdAb%2FPuCQrjwDIlVQ2oNtstuYaV748LZMa4%2BXKKQVwvw57%2B%2F8sKeVmrNw6%2FfM10i2es5i%2FSMx9gHOqdWCpRxIvsYlXXjEEBBNMCCi5anQhVZKrcdwaEbowETGrco9QJ2w%2BKHOS%2BUn901HPkxumyCaCOlmwNbl1ydHPJ5C1N0hZRHDeEqvnFXZxiwiinSFQwWRmKxIHtaloR1HXgSuEFMvI%2FZjah2tMDXFRuSG688ASWqIBTvU5v%2FhSkj941Zjo2lqCCxvE2Mh5k3d8KdX1QkNnLbdwIxY4hlZ10SnUDIb%2Fh7ql1ZlKMP7%2B5MEGOqUBTvYavz4IyZp3990YXZdKY%2F6mr2hW5Fy8yrPVVSmUfQvknBMBNesmKHz%2BQyuk5Q4RW5FBYKFavAQaps7cLXdnPXJrpMnvjW4nFfGH2kVkncaAuLK1RjravfPZfU%2FmXL0CqcwrHlkGQQJIjo3kwWLnymGXlNweYsY%2BNQGxG9BMBeQ4PfxiH3u%2FZ7YB1QrsdASoSxc6c9ezD0xSZLeSjvSATpGfMxqY&X-Amz-Signature=5cca6c032613ded7309a8e74509ad5163abcf05af6f7b5cb5f7bc3feb6ebcdf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEVKMW7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5bmmAOeK1G23V11BHnpdAl70FAgztRbTkU7qM%2B4DmSAIgSmemCkKHzHFnyUAgrpJQqg8CHKXgSF4NmqHNcLqYCFMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNft9zf7EyPzv8VOdCrcA1Qhk4DP%2FLmH9RGUdqIpecnkCqGlcDdzYk7C%2Frx%2BavRXJx1%2BEQyREC5TApyiVCJxbAYC4K4QcJvDkbwVl3teTKF1C1%2FifKUS1%2F0mqYGA%2FqqWNj8sCBCxuK4LgqBMPGJNPa686NVuXsSHcYdXMHUvIJ3fXEme%2BkbAnVZ2E%2Fcw%2BRwBvK%2FS2EnNLF4e3M9fBNMiuqE6tUfqNhetezKhO9GxH8m0heYjfSjQQWo%2F%2F%2FOFiqJqmjm9KawIC128g6AKoFAd0nNdOdbsD60e8YLSiPdJbFrYM6mjzFumno%2FLZBPCZPn8VBMwyMQ8YvGFhgQJbB66a%2BqHAgFjBMpdAb%2FPuCQrjwDIlVQ2oNtstuYaV748LZMa4%2BXKKQVwvw57%2B%2F8sKeVmrNw6%2FfM10i2es5i%2FSMx9gHOqdWCpRxIvsYlXXjEEBBNMCCi5anQhVZKrcdwaEbowETGrco9QJ2w%2BKHOS%2BUn901HPkxumyCaCOlmwNbl1ydHPJ5C1N0hZRHDeEqvnFXZxiwiinSFQwWRmKxIHtaloR1HXgSuEFMvI%2FZjah2tMDXFRuSG688ASWqIBTvU5v%2FhSkj941Zjo2lqCCxvE2Mh5k3d8KdX1QkNnLbdwIxY4hlZ10SnUDIb%2Fh7ql1ZlKMP7%2B5MEGOqUBTvYavz4IyZp3990YXZdKY%2F6mr2hW5Fy8yrPVVSmUfQvknBMBNesmKHz%2BQyuk5Q4RW5FBYKFavAQaps7cLXdnPXJrpMnvjW4nFfGH2kVkncaAuLK1RjravfPZfU%2FmXL0CqcwrHlkGQQJIjo3kwWLnymGXlNweYsY%2BNQGxG9BMBeQ4PfxiH3u%2FZ7YB1QrsdASoSxc6c9ezD0xSZLeSjvSATpGfMxqY&X-Amz-Signature=410f59f4f8022d8da2e98f7af3ca08783ed43c7ac24086c6bfe89f11cbc4e8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEVKMW7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5bmmAOeK1G23V11BHnpdAl70FAgztRbTkU7qM%2B4DmSAIgSmemCkKHzHFnyUAgrpJQqg8CHKXgSF4NmqHNcLqYCFMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNft9zf7EyPzv8VOdCrcA1Qhk4DP%2FLmH9RGUdqIpecnkCqGlcDdzYk7C%2Frx%2BavRXJx1%2BEQyREC5TApyiVCJxbAYC4K4QcJvDkbwVl3teTKF1C1%2FifKUS1%2F0mqYGA%2FqqWNj8sCBCxuK4LgqBMPGJNPa686NVuXsSHcYdXMHUvIJ3fXEme%2BkbAnVZ2E%2Fcw%2BRwBvK%2FS2EnNLF4e3M9fBNMiuqE6tUfqNhetezKhO9GxH8m0heYjfSjQQWo%2F%2F%2FOFiqJqmjm9KawIC128g6AKoFAd0nNdOdbsD60e8YLSiPdJbFrYM6mjzFumno%2FLZBPCZPn8VBMwyMQ8YvGFhgQJbB66a%2BqHAgFjBMpdAb%2FPuCQrjwDIlVQ2oNtstuYaV748LZMa4%2BXKKQVwvw57%2B%2F8sKeVmrNw6%2FfM10i2es5i%2FSMx9gHOqdWCpRxIvsYlXXjEEBBNMCCi5anQhVZKrcdwaEbowETGrco9QJ2w%2BKHOS%2BUn901HPkxumyCaCOlmwNbl1ydHPJ5C1N0hZRHDeEqvnFXZxiwiinSFQwWRmKxIHtaloR1HXgSuEFMvI%2FZjah2tMDXFRuSG688ASWqIBTvU5v%2FhSkj941Zjo2lqCCxvE2Mh5k3d8KdX1QkNnLbdwIxY4hlZ10SnUDIb%2Fh7ql1ZlKMP7%2B5MEGOqUBTvYavz4IyZp3990YXZdKY%2F6mr2hW5Fy8yrPVVSmUfQvknBMBNesmKHz%2BQyuk5Q4RW5FBYKFavAQaps7cLXdnPXJrpMnvjW4nFfGH2kVkncaAuLK1RjravfPZfU%2FmXL0CqcwrHlkGQQJIjo3kwWLnymGXlNweYsY%2BNQGxG9BMBeQ4PfxiH3u%2FZ7YB1QrsdASoSxc6c9ezD0xSZLeSjvSATpGfMxqY&X-Amz-Signature=4975d0effde7974fbb4d62139bb10c27472957d73e1ae3dde85e2da5d3908176&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
