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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3YVGY6A%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIES5PmMNe%2F5l1nksEVUJI3YovnRMEpix%2BPHNXk32dugIhAPMpMFj3FCXV7wFGqFXXKElaH82%2ByvURNThbynH1mE8lKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMwgHyUi%2F5QVapdgIq3AMPM5Yz7xp7yGUIeD%2FP%2BCIHF1pzfFmsMq6UTGd7XZpKTZ3B%2BDHvQACl6a0a5iMH%2BBbfX4u0SWfPI%2BQGxSaM8AeHhR3EKZDZp7cSOr3jf8botfLCLDAN1CRcbRxdFg0zqP9Be26hZzK%2FOqMoxmJ2OhFUFxjSwtB1mj0ReDQtJ5oPu0Rov898EXofdE9%2FMB0CnJceYDxbTomc1eojWfbN5i8cilazxm2P8xZtPQZlyKE0KFqmNs9Y7foKEfGBMGZ%2BYGraacGALSEbzTGKnepG7I8LKi5nmmiCS3fr23siggPs22wQVDzrFCNkmOtvbIhUTmQzgaTQ1ykmBsCHMbr%2BzdxIwygQIsDlDS%2FUR2bQyhUOpzhQpwiYEJkIsm57aCg%2BxN3r9iT7CprsXL%2F6E29nQX76UYqgb9%2FcWDzPh%2BIXKkFpXEJRrsVSpgO8LsqsQUeFbeD0CiMrIt9ARa7Ktp9fuuy5KjAG6FmishYo4PauoffqsQv7jQxyMk8kjP918jHFV5v1nU3y8zNDeci9UWDu51jYTsjPSzrDuz8vhz8gN3cxN0ZBP18KVB06MWoLlzAfsbeBBfQXOxfQqJOn4cTCD8WmXe6WeEmPcN%2B0B734jfHQVDO94FOEntD1p4uMSDCJjt69BjqkAcJ6NPCqLT60SeWY6osSUbrRgRwOh1MhN6%2F8Mopq2YMYVyPVnYwgt5gOQI02xa2nhBVWnQcAhgL%2F%2FYtn%2BuMxiOX41%2FVASvF45fkgU%2FC2u1J4TYpNFk%2F2%2FeHMKc9b4VK%2BCMGITo0rsNkVBiL%2FsRg54pIYfZO2l1ZBxfBOxEAG2TVoKWpkq%2Fv7xthrvoE%2BznL5efSpYJEG61AKiLDJAhXuEDk0cQzP&X-Amz-Signature=8ed5f2768ad549c18307994e0c8de27347444ece0110f705ed35b37f721c3d01&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3YVGY6A%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIES5PmMNe%2F5l1nksEVUJI3YovnRMEpix%2BPHNXk32dugIhAPMpMFj3FCXV7wFGqFXXKElaH82%2ByvURNThbynH1mE8lKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMwgHyUi%2F5QVapdgIq3AMPM5Yz7xp7yGUIeD%2FP%2BCIHF1pzfFmsMq6UTGd7XZpKTZ3B%2BDHvQACl6a0a5iMH%2BBbfX4u0SWfPI%2BQGxSaM8AeHhR3EKZDZp7cSOr3jf8botfLCLDAN1CRcbRxdFg0zqP9Be26hZzK%2FOqMoxmJ2OhFUFxjSwtB1mj0ReDQtJ5oPu0Rov898EXofdE9%2FMB0CnJceYDxbTomc1eojWfbN5i8cilazxm2P8xZtPQZlyKE0KFqmNs9Y7foKEfGBMGZ%2BYGraacGALSEbzTGKnepG7I8LKi5nmmiCS3fr23siggPs22wQVDzrFCNkmOtvbIhUTmQzgaTQ1ykmBsCHMbr%2BzdxIwygQIsDlDS%2FUR2bQyhUOpzhQpwiYEJkIsm57aCg%2BxN3r9iT7CprsXL%2F6E29nQX76UYqgb9%2FcWDzPh%2BIXKkFpXEJRrsVSpgO8LsqsQUeFbeD0CiMrIt9ARa7Ktp9fuuy5KjAG6FmishYo4PauoffqsQv7jQxyMk8kjP918jHFV5v1nU3y8zNDeci9UWDu51jYTsjPSzrDuz8vhz8gN3cxN0ZBP18KVB06MWoLlzAfsbeBBfQXOxfQqJOn4cTCD8WmXe6WeEmPcN%2B0B734jfHQVDO94FOEntD1p4uMSDCJjt69BjqkAcJ6NPCqLT60SeWY6osSUbrRgRwOh1MhN6%2F8Mopq2YMYVyPVnYwgt5gOQI02xa2nhBVWnQcAhgL%2F%2FYtn%2BuMxiOX41%2FVASvF45fkgU%2FC2u1J4TYpNFk%2F2%2FeHMKc9b4VK%2BCMGITo0rsNkVBiL%2FsRg54pIYfZO2l1ZBxfBOxEAG2TVoKWpkq%2Fv7xthrvoE%2BznL5efSpYJEG61AKiLDJAhXuEDk0cQzP&X-Amz-Signature=699c4bfee945150cb67dc049f65039c70e25a6f993453ddd019045443dff3dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3YVGY6A%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIES5PmMNe%2F5l1nksEVUJI3YovnRMEpix%2BPHNXk32dugIhAPMpMFj3FCXV7wFGqFXXKElaH82%2ByvURNThbynH1mE8lKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMwgHyUi%2F5QVapdgIq3AMPM5Yz7xp7yGUIeD%2FP%2BCIHF1pzfFmsMq6UTGd7XZpKTZ3B%2BDHvQACl6a0a5iMH%2BBbfX4u0SWfPI%2BQGxSaM8AeHhR3EKZDZp7cSOr3jf8botfLCLDAN1CRcbRxdFg0zqP9Be26hZzK%2FOqMoxmJ2OhFUFxjSwtB1mj0ReDQtJ5oPu0Rov898EXofdE9%2FMB0CnJceYDxbTomc1eojWfbN5i8cilazxm2P8xZtPQZlyKE0KFqmNs9Y7foKEfGBMGZ%2BYGraacGALSEbzTGKnepG7I8LKi5nmmiCS3fr23siggPs22wQVDzrFCNkmOtvbIhUTmQzgaTQ1ykmBsCHMbr%2BzdxIwygQIsDlDS%2FUR2bQyhUOpzhQpwiYEJkIsm57aCg%2BxN3r9iT7CprsXL%2F6E29nQX76UYqgb9%2FcWDzPh%2BIXKkFpXEJRrsVSpgO8LsqsQUeFbeD0CiMrIt9ARa7Ktp9fuuy5KjAG6FmishYo4PauoffqsQv7jQxyMk8kjP918jHFV5v1nU3y8zNDeci9UWDu51jYTsjPSzrDuz8vhz8gN3cxN0ZBP18KVB06MWoLlzAfsbeBBfQXOxfQqJOn4cTCD8WmXe6WeEmPcN%2B0B734jfHQVDO94FOEntD1p4uMSDCJjt69BjqkAcJ6NPCqLT60SeWY6osSUbrRgRwOh1MhN6%2F8Mopq2YMYVyPVnYwgt5gOQI02xa2nhBVWnQcAhgL%2F%2FYtn%2BuMxiOX41%2FVASvF45fkgU%2FC2u1J4TYpNFk%2F2%2FeHMKc9b4VK%2BCMGITo0rsNkVBiL%2FsRg54pIYfZO2l1ZBxfBOxEAG2TVoKWpkq%2Fv7xthrvoE%2BznL5efSpYJEG61AKiLDJAhXuEDk0cQzP&X-Amz-Signature=698a7436f6b5d1f82a2141db068d34d8b56d9a0fc33f23ce83577197f6e19b63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
