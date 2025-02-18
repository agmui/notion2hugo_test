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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJOSIPY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCJ959mpFinVsyJ5GlXIMOw3bQhJYgi%2B6YBVfq%2Bk1OZ1QIgUIPP0WlfUVriEZlj3KmD6K0Luuyw0pgNCr7fWwifPAgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSDLfvju2UzndvoWyrcAxQJW0TfOTLwCmA%2F3HcjvqI9yxUYkFQia2apZHW%2BuZJAY8rZHqgAGJp5s8K%2BGo0scn0CdZx2XJqi7QFqgHcXIuQjHuAdZEJL70GHcepbrc40JlALoA5BRc%2BD0vtSSYeC%2BQE5LSH5Y4eOt3TSjHvKhOl%2F2LEPksVre%2FNUmvtgByNm1GFdzGLRE4A2m0Hm6W4sRmsztHuY8SBavy893E32UGaFo3Q7R3%2BvEwUWEZzBVEfWLMS5VOqOCt1L41eijndFHVWfSwoQ26KIURkrP4bNTSjNmE3s7qrAZ2DR9jM0suzBxWycf5S9b70IXzWHYrrPWuAAY52pqPWpnN2EztOicHVX7RwqYH5RXFxf%2Bp%2FqqdFw1RSnWlpuSI79utFH8T5sKE3HY%2FKIivGmWsRn3zR82SJ%2B4YKXuqslUxPziYed4RU17CdCMuA6xD6L7xKWhNf40mE2%2F2Fst4GsOqgSb6BfI2nMkmu9dHurx7Gyd31nsvJ3uJa8d4ztf9uvC4VDQGobKrENr2qOeg71pqNpm7e7ttlEPEtmQ6BK%2FekRn9ZJ381FBHKRFfFceu9Mni%2FNNARbRdl4P%2BBlxGxnJDHNHJBUX3yqvafB03BFIsBDdEdGvM26OR%2B7IyQnFiT0u2feMKiM0L0GOqUBINkZf0ba65R8Jt8udZbwvw79%2BhXCjxKf4FnLJo15yHKipEdnQrgvS%2BWjO4UcpoiQLbIv%2FJTNfKUEZ%2B74LiYfzYDqoIeJ0XGl1mb6oNcNxVS8%2BHzPse0XBA8NP3zTGHDUESQjLfUMYw8fHjYZt12eZt%2BBfTG6c7yiBsQjXFr7b1lUDYoCguCrNgti%2FCR2U71%2BSwW5%2Fval9h%2BmrBxRlk5%2B2OUhxaCy&X-Amz-Signature=073b20c8718a9f472fdea383af7cbba85841fceee8261f8bf6419aa1f735c5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJOSIPY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCJ959mpFinVsyJ5GlXIMOw3bQhJYgi%2B6YBVfq%2Bk1OZ1QIgUIPP0WlfUVriEZlj3KmD6K0Luuyw0pgNCr7fWwifPAgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSDLfvju2UzndvoWyrcAxQJW0TfOTLwCmA%2F3HcjvqI9yxUYkFQia2apZHW%2BuZJAY8rZHqgAGJp5s8K%2BGo0scn0CdZx2XJqi7QFqgHcXIuQjHuAdZEJL70GHcepbrc40JlALoA5BRc%2BD0vtSSYeC%2BQE5LSH5Y4eOt3TSjHvKhOl%2F2LEPksVre%2FNUmvtgByNm1GFdzGLRE4A2m0Hm6W4sRmsztHuY8SBavy893E32UGaFo3Q7R3%2BvEwUWEZzBVEfWLMS5VOqOCt1L41eijndFHVWfSwoQ26KIURkrP4bNTSjNmE3s7qrAZ2DR9jM0suzBxWycf5S9b70IXzWHYrrPWuAAY52pqPWpnN2EztOicHVX7RwqYH5RXFxf%2Bp%2FqqdFw1RSnWlpuSI79utFH8T5sKE3HY%2FKIivGmWsRn3zR82SJ%2B4YKXuqslUxPziYed4RU17CdCMuA6xD6L7xKWhNf40mE2%2F2Fst4GsOqgSb6BfI2nMkmu9dHurx7Gyd31nsvJ3uJa8d4ztf9uvC4VDQGobKrENr2qOeg71pqNpm7e7ttlEPEtmQ6BK%2FekRn9ZJ381FBHKRFfFceu9Mni%2FNNARbRdl4P%2BBlxGxnJDHNHJBUX3yqvafB03BFIsBDdEdGvM26OR%2B7IyQnFiT0u2feMKiM0L0GOqUBINkZf0ba65R8Jt8udZbwvw79%2BhXCjxKf4FnLJo15yHKipEdnQrgvS%2BWjO4UcpoiQLbIv%2FJTNfKUEZ%2B74LiYfzYDqoIeJ0XGl1mb6oNcNxVS8%2BHzPse0XBA8NP3zTGHDUESQjLfUMYw8fHjYZt12eZt%2BBfTG6c7yiBsQjXFr7b1lUDYoCguCrNgti%2FCR2U71%2BSwW5%2Fval9h%2BmrBxRlk5%2B2OUhxaCy&X-Amz-Signature=4100240c0d1935836ed1b4b5ee775596e84bb69f94cfea110bc24e51412e57c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJOSIPY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCJ959mpFinVsyJ5GlXIMOw3bQhJYgi%2B6YBVfq%2Bk1OZ1QIgUIPP0WlfUVriEZlj3KmD6K0Luuyw0pgNCr7fWwifPAgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSDLfvju2UzndvoWyrcAxQJW0TfOTLwCmA%2F3HcjvqI9yxUYkFQia2apZHW%2BuZJAY8rZHqgAGJp5s8K%2BGo0scn0CdZx2XJqi7QFqgHcXIuQjHuAdZEJL70GHcepbrc40JlALoA5BRc%2BD0vtSSYeC%2BQE5LSH5Y4eOt3TSjHvKhOl%2F2LEPksVre%2FNUmvtgByNm1GFdzGLRE4A2m0Hm6W4sRmsztHuY8SBavy893E32UGaFo3Q7R3%2BvEwUWEZzBVEfWLMS5VOqOCt1L41eijndFHVWfSwoQ26KIURkrP4bNTSjNmE3s7qrAZ2DR9jM0suzBxWycf5S9b70IXzWHYrrPWuAAY52pqPWpnN2EztOicHVX7RwqYH5RXFxf%2Bp%2FqqdFw1RSnWlpuSI79utFH8T5sKE3HY%2FKIivGmWsRn3zR82SJ%2B4YKXuqslUxPziYed4RU17CdCMuA6xD6L7xKWhNf40mE2%2F2Fst4GsOqgSb6BfI2nMkmu9dHurx7Gyd31nsvJ3uJa8d4ztf9uvC4VDQGobKrENr2qOeg71pqNpm7e7ttlEPEtmQ6BK%2FekRn9ZJ381FBHKRFfFceu9Mni%2FNNARbRdl4P%2BBlxGxnJDHNHJBUX3yqvafB03BFIsBDdEdGvM26OR%2B7IyQnFiT0u2feMKiM0L0GOqUBINkZf0ba65R8Jt8udZbwvw79%2BhXCjxKf4FnLJo15yHKipEdnQrgvS%2BWjO4UcpoiQLbIv%2FJTNfKUEZ%2B74LiYfzYDqoIeJ0XGl1mb6oNcNxVS8%2BHzPse0XBA8NP3zTGHDUESQjLfUMYw8fHjYZt12eZt%2BBfTG6c7yiBsQjXFr7b1lUDYoCguCrNgti%2FCR2U71%2BSwW5%2Fval9h%2BmrBxRlk5%2B2OUhxaCy&X-Amz-Signature=16e5b39a8964e866157a5bf61f2c1e1a9f56633ec37298e9f0986c7694bc6c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
