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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MJQYLJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsxdiRYs%2FGbHnPYLUJ8HbHbq9dJA6Cyekp4arIKhApqgIhAJ9ME4LTjZ%2FA3VtrT2kq1vw1WpK4Q9TyhekMI4q%2FOc9PKv8DCFAQABoMNjM3NDIzMTgzODA1Igy5Itq9a1TZoroCfV4q3AMplqKiIgfCCq3dB7j8OoC9UCkKsQJuhC261qKcN0whi%2BM4pf5puh8%2FI9oOLILL1lMOPYzKFKDM3C%2FVWdPKO%2FPfHS8lBKgucMnPtQEeUdgvKfBYw2bypWJLEnmbK8NFvE7YcCC7Yr40E6udDgZUiUJ2m32TXh42uas%2BMo2%2B6B%2F3bbuTDcmqb7Gvm%2FHaAvljrYX2W6Mu%2Fb9bVyYZ7lQyPExmNRfxKSEK4OcJL6HmQs4hZ7Syea6lwbfLMp0YJDBX0XSPBSLgZIxNkhvyciOo%2BCLHk1izgW5X%2BSa3BiBZgnjvE1QPj9HKuthcvAmOVUUaG5C6qP0kL0ZVg358e5r6skps3c52VRjuXwK0%2BCk%2Bu0rExLLLRZvgzTalCJDPmzwZeSq2ZwRGNK8CPD%2Fxc%2BkzJKWwYKAtUXWDWhMDnJI7usQQ1FK6VmAzECn4meT921kZpKGp%2BB88c7DjA3bv5bQJ8KbGCmee79xRNxDwZOZw7xe6dl2aVCpulebobq9b%2FcG2NUxiiEANbk6wERn%2BGHiQmYyUzTSQVj3PjOQkWS4wplWdjYRBYrXMKvljJtx4pvh1ujHcBnJYwViY%2Fl10uW6b0L%2F%2FKND8TRcEdFwNGTJcIreimBooG38ylpqMV2mt6DCJ%2Fq2%2BBjqkASP6bnYGKwCy4xqQBT2s%2FnZEtKvwg%2BsZeG8zYRsgmA8yrxOSmqqChfn4BV6bpL19mTExPmc117xi8hG%2FIBW2VaIiUxLRwde7kCdTlJldYCiN1HM8KvDeu5FC1dtPj3WZ15YyjCW7%2FLnnwFGGMyEmjpKj3e1iTXdMRrOrMNspGyMFXhtp8JL23Tamqo5nGNOnZGnS%2Bpgal1X4B1Su%2F6VL%2BBlnWECS&X-Amz-Signature=4e42365660ea054eb05688beba2d76583ae74a3c4860578552711c30fe42c296&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MJQYLJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsxdiRYs%2FGbHnPYLUJ8HbHbq9dJA6Cyekp4arIKhApqgIhAJ9ME4LTjZ%2FA3VtrT2kq1vw1WpK4Q9TyhekMI4q%2FOc9PKv8DCFAQABoMNjM3NDIzMTgzODA1Igy5Itq9a1TZoroCfV4q3AMplqKiIgfCCq3dB7j8OoC9UCkKsQJuhC261qKcN0whi%2BM4pf5puh8%2FI9oOLILL1lMOPYzKFKDM3C%2FVWdPKO%2FPfHS8lBKgucMnPtQEeUdgvKfBYw2bypWJLEnmbK8NFvE7YcCC7Yr40E6udDgZUiUJ2m32TXh42uas%2BMo2%2B6B%2F3bbuTDcmqb7Gvm%2FHaAvljrYX2W6Mu%2Fb9bVyYZ7lQyPExmNRfxKSEK4OcJL6HmQs4hZ7Syea6lwbfLMp0YJDBX0XSPBSLgZIxNkhvyciOo%2BCLHk1izgW5X%2BSa3BiBZgnjvE1QPj9HKuthcvAmOVUUaG5C6qP0kL0ZVg358e5r6skps3c52VRjuXwK0%2BCk%2Bu0rExLLLRZvgzTalCJDPmzwZeSq2ZwRGNK8CPD%2Fxc%2BkzJKWwYKAtUXWDWhMDnJI7usQQ1FK6VmAzECn4meT921kZpKGp%2BB88c7DjA3bv5bQJ8KbGCmee79xRNxDwZOZw7xe6dl2aVCpulebobq9b%2FcG2NUxiiEANbk6wERn%2BGHiQmYyUzTSQVj3PjOQkWS4wplWdjYRBYrXMKvljJtx4pvh1ujHcBnJYwViY%2Fl10uW6b0L%2F%2FKND8TRcEdFwNGTJcIreimBooG38ylpqMV2mt6DCJ%2Fq2%2BBjqkASP6bnYGKwCy4xqQBT2s%2FnZEtKvwg%2BsZeG8zYRsgmA8yrxOSmqqChfn4BV6bpL19mTExPmc117xi8hG%2FIBW2VaIiUxLRwde7kCdTlJldYCiN1HM8KvDeu5FC1dtPj3WZ15YyjCW7%2FLnnwFGGMyEmjpKj3e1iTXdMRrOrMNspGyMFXhtp8JL23Tamqo5nGNOnZGnS%2Bpgal1X4B1Su%2F6VL%2BBlnWECS&X-Amz-Signature=c0a162a273e3cb14ab37e000fc63197a78ddf4d39e8628936f7a27a819613b35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MJQYLJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsxdiRYs%2FGbHnPYLUJ8HbHbq9dJA6Cyekp4arIKhApqgIhAJ9ME4LTjZ%2FA3VtrT2kq1vw1WpK4Q9TyhekMI4q%2FOc9PKv8DCFAQABoMNjM3NDIzMTgzODA1Igy5Itq9a1TZoroCfV4q3AMplqKiIgfCCq3dB7j8OoC9UCkKsQJuhC261qKcN0whi%2BM4pf5puh8%2FI9oOLILL1lMOPYzKFKDM3C%2FVWdPKO%2FPfHS8lBKgucMnPtQEeUdgvKfBYw2bypWJLEnmbK8NFvE7YcCC7Yr40E6udDgZUiUJ2m32TXh42uas%2BMo2%2B6B%2F3bbuTDcmqb7Gvm%2FHaAvljrYX2W6Mu%2Fb9bVyYZ7lQyPExmNRfxKSEK4OcJL6HmQs4hZ7Syea6lwbfLMp0YJDBX0XSPBSLgZIxNkhvyciOo%2BCLHk1izgW5X%2BSa3BiBZgnjvE1QPj9HKuthcvAmOVUUaG5C6qP0kL0ZVg358e5r6skps3c52VRjuXwK0%2BCk%2Bu0rExLLLRZvgzTalCJDPmzwZeSq2ZwRGNK8CPD%2Fxc%2BkzJKWwYKAtUXWDWhMDnJI7usQQ1FK6VmAzECn4meT921kZpKGp%2BB88c7DjA3bv5bQJ8KbGCmee79xRNxDwZOZw7xe6dl2aVCpulebobq9b%2FcG2NUxiiEANbk6wERn%2BGHiQmYyUzTSQVj3PjOQkWS4wplWdjYRBYrXMKvljJtx4pvh1ujHcBnJYwViY%2Fl10uW6b0L%2F%2FKND8TRcEdFwNGTJcIreimBooG38ylpqMV2mt6DCJ%2Fq2%2BBjqkASP6bnYGKwCy4xqQBT2s%2FnZEtKvwg%2BsZeG8zYRsgmA8yrxOSmqqChfn4BV6bpL19mTExPmc117xi8hG%2FIBW2VaIiUxLRwde7kCdTlJldYCiN1HM8KvDeu5FC1dtPj3WZ15YyjCW7%2FLnnwFGGMyEmjpKj3e1iTXdMRrOrMNspGyMFXhtp8JL23Tamqo5nGNOnZGnS%2Bpgal1X4B1Su%2F6VL%2BBlnWECS&X-Amz-Signature=03af2e18e362f8595036892a0b4dbdba0463e31544fbc92e4282638c4a61d238&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
