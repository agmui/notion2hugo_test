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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJZZHUB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2%2B32k%2F6XnafyXK5ac6%2BStYII175SvG2CaTKLKIlfyMAiBFx85h7Eyaa8xl%2B02PPGJIXKNTPUVqUqe8FZ54o5fPaSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDF2qkJ7x%2FLJN2XTiKtwDnTaz%2BxTfo4M7mWdyNetl%2FWWisMEz7SskMih8nlopFm9axGJtMBXWVFfXLaORKv8fMJPx6E4mhFIkMe%2BHJIbKbkEukf2Cvwqtzv2pnLO0fkHpj01qq2amKvA3u3CoksuiLQ8ofOfh3CHXuYv6WITY2qztItJOukTfzcVCCWD1FbP9YjMbkYVr6YskUkK1SiDHqs2RSzrGP498l%2BoMjkDO0hYHFaDkxPHh1QVdDWBUyG8DygCjUa5HSD0%2FCDXUtoDzbB6l8gTooVJeICk%2BztXyP8gH%2Br3040NF6nGYZTs29HwjfEtDLUBBYb64GhR%2BzJc%2BY0nqwaKr0lDXKa8kvvPeCFPGc%2F7pkIaNc7%2FT7sIdZUSa4izhiOSXPQ3uURPO6gkpKRvZTy6jhsvruCbtQUrfEflPjf%2FmDIhCfhCk0PqowpGQ9wboTYPBd5GYHqbaWzt5WazeM90GtjBBJJQAd1Ct2P%2FAtANXTdej3W%2BZ2WTjvTkCv452ysPECyyUoAUMt1GcJX6OVW0LeFbhcIVcg1%2F4qFqLBG7ZujtJO3Ug%2FtaxyrK0lQVRArBfBreJ7ILaPqLlVwFmKKHiQS60Mbli5Ia8D2%2FQ7msjplMEg3G6eER4ZPrtmVT88AN9Yddz4PAwzbHkvQY6pgEd4OaztOczaVa4cB0N1e6JXe3FeU3C%2B9%2Bk4MPVtj7lPrL0e64SxoN2WkysAdiuNH%2F7mmgndcKGyXrEb5F1yvamBzaGm2fKyHKTVK6TxSKa1de9vE%2BiloL%2FScgIMCgPtNN2aOHAqsY5lOCReBh1SFwDlPYl10JPd4tFrPnBylt%2FfFb5uZUnvdtiBeLTNo%2FV3w2D5AvKQiz2YrFZeWBTh20zDZb9ijzn&X-Amz-Signature=311c54c9682eaa6b45ce81500d2a026f7a2c8fbd8221fbfa204c73fcc18505ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJZZHUB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2%2B32k%2F6XnafyXK5ac6%2BStYII175SvG2CaTKLKIlfyMAiBFx85h7Eyaa8xl%2B02PPGJIXKNTPUVqUqe8FZ54o5fPaSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDF2qkJ7x%2FLJN2XTiKtwDnTaz%2BxTfo4M7mWdyNetl%2FWWisMEz7SskMih8nlopFm9axGJtMBXWVFfXLaORKv8fMJPx6E4mhFIkMe%2BHJIbKbkEukf2Cvwqtzv2pnLO0fkHpj01qq2amKvA3u3CoksuiLQ8ofOfh3CHXuYv6WITY2qztItJOukTfzcVCCWD1FbP9YjMbkYVr6YskUkK1SiDHqs2RSzrGP498l%2BoMjkDO0hYHFaDkxPHh1QVdDWBUyG8DygCjUa5HSD0%2FCDXUtoDzbB6l8gTooVJeICk%2BztXyP8gH%2Br3040NF6nGYZTs29HwjfEtDLUBBYb64GhR%2BzJc%2BY0nqwaKr0lDXKa8kvvPeCFPGc%2F7pkIaNc7%2FT7sIdZUSa4izhiOSXPQ3uURPO6gkpKRvZTy6jhsvruCbtQUrfEflPjf%2FmDIhCfhCk0PqowpGQ9wboTYPBd5GYHqbaWzt5WazeM90GtjBBJJQAd1Ct2P%2FAtANXTdej3W%2BZ2WTjvTkCv452ysPECyyUoAUMt1GcJX6OVW0LeFbhcIVcg1%2F4qFqLBG7ZujtJO3Ug%2FtaxyrK0lQVRArBfBreJ7ILaPqLlVwFmKKHiQS60Mbli5Ia8D2%2FQ7msjplMEg3G6eER4ZPrtmVT88AN9Yddz4PAwzbHkvQY6pgEd4OaztOczaVa4cB0N1e6JXe3FeU3C%2B9%2Bk4MPVtj7lPrL0e64SxoN2WkysAdiuNH%2F7mmgndcKGyXrEb5F1yvamBzaGm2fKyHKTVK6TxSKa1de9vE%2BiloL%2FScgIMCgPtNN2aOHAqsY5lOCReBh1SFwDlPYl10JPd4tFrPnBylt%2FfFb5uZUnvdtiBeLTNo%2FV3w2D5AvKQiz2YrFZeWBTh20zDZb9ijzn&X-Amz-Signature=f69530bd1d1ef5f86768c7e9a95a2e133d91ff79c32153beb88a60586f491367&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJZZHUB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2%2B32k%2F6XnafyXK5ac6%2BStYII175SvG2CaTKLKIlfyMAiBFx85h7Eyaa8xl%2B02PPGJIXKNTPUVqUqe8FZ54o5fPaSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDF2qkJ7x%2FLJN2XTiKtwDnTaz%2BxTfo4M7mWdyNetl%2FWWisMEz7SskMih8nlopFm9axGJtMBXWVFfXLaORKv8fMJPx6E4mhFIkMe%2BHJIbKbkEukf2Cvwqtzv2pnLO0fkHpj01qq2amKvA3u3CoksuiLQ8ofOfh3CHXuYv6WITY2qztItJOukTfzcVCCWD1FbP9YjMbkYVr6YskUkK1SiDHqs2RSzrGP498l%2BoMjkDO0hYHFaDkxPHh1QVdDWBUyG8DygCjUa5HSD0%2FCDXUtoDzbB6l8gTooVJeICk%2BztXyP8gH%2Br3040NF6nGYZTs29HwjfEtDLUBBYb64GhR%2BzJc%2BY0nqwaKr0lDXKa8kvvPeCFPGc%2F7pkIaNc7%2FT7sIdZUSa4izhiOSXPQ3uURPO6gkpKRvZTy6jhsvruCbtQUrfEflPjf%2FmDIhCfhCk0PqowpGQ9wboTYPBd5GYHqbaWzt5WazeM90GtjBBJJQAd1Ct2P%2FAtANXTdej3W%2BZ2WTjvTkCv452ysPECyyUoAUMt1GcJX6OVW0LeFbhcIVcg1%2F4qFqLBG7ZujtJO3Ug%2FtaxyrK0lQVRArBfBreJ7ILaPqLlVwFmKKHiQS60Mbli5Ia8D2%2FQ7msjplMEg3G6eER4ZPrtmVT88AN9Yddz4PAwzbHkvQY6pgEd4OaztOczaVa4cB0N1e6JXe3FeU3C%2B9%2Bk4MPVtj7lPrL0e64SxoN2WkysAdiuNH%2F7mmgndcKGyXrEb5F1yvamBzaGm2fKyHKTVK6TxSKa1de9vE%2BiloL%2FScgIMCgPtNN2aOHAqsY5lOCReBh1SFwDlPYl10JPd4tFrPnBylt%2FfFb5uZUnvdtiBeLTNo%2FV3w2D5AvKQiz2YrFZeWBTh20zDZb9ijzn&X-Amz-Signature=ec87dba7c002af545eda7b3aeb33e244beaf816c1caf5b8cc4cf52e980e0cebb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
