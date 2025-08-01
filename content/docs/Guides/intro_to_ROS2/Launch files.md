---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWIUBDYM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtyXQDZP9PSuCwkqP438wTYsOKlJZKAjPmv2kYQITKewIhAIl5USzpGZO92hMk5sP7HJHlDmDX8R7xaryQTuDhhFfKKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWaw%2FSZqfi6xCHLFEq3AMRvzsBLXGtHcBHCnyYNJ8uVeIFW%2FGTdv3lAtiiD6bNqmJfDezQT6Ch2WLoy0lP5fHsbBHO9zY13mopBFEpGUkSyrM2WharhKJ7H%2Bp3QrjdlbNu899zxUzpHK0Axmu2wA%2BbIzSM81WmbPnHommHWntqL%2BM4tu5WVUPvS17QoMvnP6vp4ya8Kxt6zkVOeG%2BWxy4MxlUKrXxpDDdArYPu7ZxE%2F1o2O1wQOT6Oc3%2FMtjDqXdfwOtbPd9AbqdoptJQEM20LoT96LEhivl5DBsE8NstZTbTg6SDiU1ffJW9rJo3zk2jLub8IRn6VEyAw%2BmkAsId0Wu62yhPgS2H671fxgEnkokftgqJ9ml0orTF6wm4bH3mZ97V2mBfAUVAatjETe1pb6z%2F35H912S1opFHqZjSeeDEifWkAHcAcQQO%2Bqzxp%2FUbFsBT4MyNi5NUsamKD%2FEQPbEzZrwexlRpatFsEYoJFUWSB5eihJ5Snud7%2FXYZ1wmEzWPtwzYtt6qOTkmBOl%2Fy2rNnjB6dvCN3txxutx7VQ4zp%2FB8PCG0Du7C7gtI4McE7N2VsDxEnwUnaNj40rl8nv0elmrANFW7WRKraPvtlx%2BQhf25lrwRv1xvJK9ZjEL1hMrIPVFqqHAjJzGjDD%2BrPEBjqkAaW6KzOzbUE1QfdHCI13CzIE7qozX5PnZ3TePAWyd%2BrE%2B1F6YRDXaBv4%2BwUFnMymcWeBQMKUmySfeCDeyDyA9K%2Byt9AOKzbRDiWcJxqVhjCm4PTq09D8bV2aXN3LHdJ2QHqObOTYE%2FQjWeK%2BIaqEnHbsBEF4Frc56ehnsFel9D4BDxhNjI%2BSvkVAtdG%2FMucQl8uwGdWMZ1KVhAy6C2qAEuKt%2FD0c&X-Amz-Signature=234ceb0fee6df61efc8b33c7c21a252743b68e076f45d9eeeb1d6ebdaac4398c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWIUBDYM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtyXQDZP9PSuCwkqP438wTYsOKlJZKAjPmv2kYQITKewIhAIl5USzpGZO92hMk5sP7HJHlDmDX8R7xaryQTuDhhFfKKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWaw%2FSZqfi6xCHLFEq3AMRvzsBLXGtHcBHCnyYNJ8uVeIFW%2FGTdv3lAtiiD6bNqmJfDezQT6Ch2WLoy0lP5fHsbBHO9zY13mopBFEpGUkSyrM2WharhKJ7H%2Bp3QrjdlbNu899zxUzpHK0Axmu2wA%2BbIzSM81WmbPnHommHWntqL%2BM4tu5WVUPvS17QoMvnP6vp4ya8Kxt6zkVOeG%2BWxy4MxlUKrXxpDDdArYPu7ZxE%2F1o2O1wQOT6Oc3%2FMtjDqXdfwOtbPd9AbqdoptJQEM20LoT96LEhivl5DBsE8NstZTbTg6SDiU1ffJW9rJo3zk2jLub8IRn6VEyAw%2BmkAsId0Wu62yhPgS2H671fxgEnkokftgqJ9ml0orTF6wm4bH3mZ97V2mBfAUVAatjETe1pb6z%2F35H912S1opFHqZjSeeDEifWkAHcAcQQO%2Bqzxp%2FUbFsBT4MyNi5NUsamKD%2FEQPbEzZrwexlRpatFsEYoJFUWSB5eihJ5Snud7%2FXYZ1wmEzWPtwzYtt6qOTkmBOl%2Fy2rNnjB6dvCN3txxutx7VQ4zp%2FB8PCG0Du7C7gtI4McE7N2VsDxEnwUnaNj40rl8nv0elmrANFW7WRKraPvtlx%2BQhf25lrwRv1xvJK9ZjEL1hMrIPVFqqHAjJzGjDD%2BrPEBjqkAaW6KzOzbUE1QfdHCI13CzIE7qozX5PnZ3TePAWyd%2BrE%2B1F6YRDXaBv4%2BwUFnMymcWeBQMKUmySfeCDeyDyA9K%2Byt9AOKzbRDiWcJxqVhjCm4PTq09D8bV2aXN3LHdJ2QHqObOTYE%2FQjWeK%2BIaqEnHbsBEF4Frc56ehnsFel9D4BDxhNjI%2BSvkVAtdG%2FMucQl8uwGdWMZ1KVhAy6C2qAEuKt%2FD0c&X-Amz-Signature=ad277b72d3d689851310fcf32645aa8087be2cde8ebe238fb9376270ecb74c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWIUBDYM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtyXQDZP9PSuCwkqP438wTYsOKlJZKAjPmv2kYQITKewIhAIl5USzpGZO92hMk5sP7HJHlDmDX8R7xaryQTuDhhFfKKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWaw%2FSZqfi6xCHLFEq3AMRvzsBLXGtHcBHCnyYNJ8uVeIFW%2FGTdv3lAtiiD6bNqmJfDezQT6Ch2WLoy0lP5fHsbBHO9zY13mopBFEpGUkSyrM2WharhKJ7H%2Bp3QrjdlbNu899zxUzpHK0Axmu2wA%2BbIzSM81WmbPnHommHWntqL%2BM4tu5WVUPvS17QoMvnP6vp4ya8Kxt6zkVOeG%2BWxy4MxlUKrXxpDDdArYPu7ZxE%2F1o2O1wQOT6Oc3%2FMtjDqXdfwOtbPd9AbqdoptJQEM20LoT96LEhivl5DBsE8NstZTbTg6SDiU1ffJW9rJo3zk2jLub8IRn6VEyAw%2BmkAsId0Wu62yhPgS2H671fxgEnkokftgqJ9ml0orTF6wm4bH3mZ97V2mBfAUVAatjETe1pb6z%2F35H912S1opFHqZjSeeDEifWkAHcAcQQO%2Bqzxp%2FUbFsBT4MyNi5NUsamKD%2FEQPbEzZrwexlRpatFsEYoJFUWSB5eihJ5Snud7%2FXYZ1wmEzWPtwzYtt6qOTkmBOl%2Fy2rNnjB6dvCN3txxutx7VQ4zp%2FB8PCG0Du7C7gtI4McE7N2VsDxEnwUnaNj40rl8nv0elmrANFW7WRKraPvtlx%2BQhf25lrwRv1xvJK9ZjEL1hMrIPVFqqHAjJzGjDD%2BrPEBjqkAaW6KzOzbUE1QfdHCI13CzIE7qozX5PnZ3TePAWyd%2BrE%2B1F6YRDXaBv4%2BwUFnMymcWeBQMKUmySfeCDeyDyA9K%2Byt9AOKzbRDiWcJxqVhjCm4PTq09D8bV2aXN3LHdJ2QHqObOTYE%2FQjWeK%2BIaqEnHbsBEF4Frc56ehnsFel9D4BDxhNjI%2BSvkVAtdG%2FMucQl8uwGdWMZ1KVhAy6C2qAEuKt%2FD0c&X-Amz-Signature=bcc7547e593a68b5d60270cc5e374cc38b836f5ae1a7a991397234e1188e1df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
