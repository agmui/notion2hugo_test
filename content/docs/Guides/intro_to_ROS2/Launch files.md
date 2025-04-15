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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3CYZBV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg4%2FkTDRcaGqJ92Q1qELEUk3YuUnCExNDWARzxxQNLfAiEAsh34Ze0F7CkEmSIlcutf97iUQ2uSAv32NosTsZ%2BdAdcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMhWhuFVlRQ0L4djpircA2hMLzrIxmG%2FqQRIDkU8LQ5xPz9wqCq770ayzrAcTF6tppuK6gPYdoRCntk7%2BLrHOcvquj4L%2F%2Br0ouz8svPAF42%2FCU5x3XQ1XAvG07XqRXrL9b2LrQKUD4rKW18SCgBB28NNaV1rjLOuU8NZdzuXWv3iVawYScOto%2BZDiub5tIA%2B4UlTEhoEkoAVb%2FtPbIWBXUwuCnrPDLKvkeuNUjSxz8QkuA%2FrR8O22xNKPwKNjWd77X%2BCnQxj7%2FhtTsKE3Rt0Jy7ihqkl%2FooormUGLvgP7JpxwgrwitgR26zjHHb1Mts9DWc1%2BVTSh4PQmYS%2BII4ilRjqPL7sctzcQFFwiv6PgzUsdgoAyI6ubXbzQwBIUTRqbFjI7xdK5qRJv%2FC52J5zLgfiRPjUd6nWZhu9sJRUIT7TVJqsRcUxDRheFpT6vB9XREoMkaGs2Opb4jbuguXZmN3u03OiFG5HXBSWnmMwAoX0%2BeSOAHmDTnqG8NKIrf%2FFWXU5NTsDB2CzA23Y61IcNQPwu%2FQpdgnyuKUBBG7oVT3%2FXs%2BRLOuQ8mXyiiS5WK1zRIcuXXAxNNqdJAgVQi%2FPO9pzhIgdWD9Nrf9KSFthekSGxA4Pq7ZJ6CFHoQtJtwDtpiMgemrbCMvTTyvQMLPx%2BL8GOqUBmX%2FlL34BQS9S%2FHaA63vtwiiSKY1OBL28oU8eQI5PE5KBeCxYvEtjrVSQk3Xlx8jndov6Ub3pj3hf7u7zJiU6wJYFVr0bU%2BEhwDZyNbW1GYHUUeJiZaFXgihVer64LwKcwl%2FPPAHJt1bdKyJFj23hENoZmWX%2F%2FQj2xlUtLKVBy8cen1s%2F4fmEz66I9ybneN51iS%2F%2FkE3iBB%2F09pMbXlvu%2B%2BmuAVCR&X-Amz-Signature=79f980be4adfc09f840dcd297b0208124edede649e826da395522bf37bcb9c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3CYZBV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg4%2FkTDRcaGqJ92Q1qELEUk3YuUnCExNDWARzxxQNLfAiEAsh34Ze0F7CkEmSIlcutf97iUQ2uSAv32NosTsZ%2BdAdcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMhWhuFVlRQ0L4djpircA2hMLzrIxmG%2FqQRIDkU8LQ5xPz9wqCq770ayzrAcTF6tppuK6gPYdoRCntk7%2BLrHOcvquj4L%2F%2Br0ouz8svPAF42%2FCU5x3XQ1XAvG07XqRXrL9b2LrQKUD4rKW18SCgBB28NNaV1rjLOuU8NZdzuXWv3iVawYScOto%2BZDiub5tIA%2B4UlTEhoEkoAVb%2FtPbIWBXUwuCnrPDLKvkeuNUjSxz8QkuA%2FrR8O22xNKPwKNjWd77X%2BCnQxj7%2FhtTsKE3Rt0Jy7ihqkl%2FooormUGLvgP7JpxwgrwitgR26zjHHb1Mts9DWc1%2BVTSh4PQmYS%2BII4ilRjqPL7sctzcQFFwiv6PgzUsdgoAyI6ubXbzQwBIUTRqbFjI7xdK5qRJv%2FC52J5zLgfiRPjUd6nWZhu9sJRUIT7TVJqsRcUxDRheFpT6vB9XREoMkaGs2Opb4jbuguXZmN3u03OiFG5HXBSWnmMwAoX0%2BeSOAHmDTnqG8NKIrf%2FFWXU5NTsDB2CzA23Y61IcNQPwu%2FQpdgnyuKUBBG7oVT3%2FXs%2BRLOuQ8mXyiiS5WK1zRIcuXXAxNNqdJAgVQi%2FPO9pzhIgdWD9Nrf9KSFthekSGxA4Pq7ZJ6CFHoQtJtwDtpiMgemrbCMvTTyvQMLPx%2BL8GOqUBmX%2FlL34BQS9S%2FHaA63vtwiiSKY1OBL28oU8eQI5PE5KBeCxYvEtjrVSQk3Xlx8jndov6Ub3pj3hf7u7zJiU6wJYFVr0bU%2BEhwDZyNbW1GYHUUeJiZaFXgihVer64LwKcwl%2FPPAHJt1bdKyJFj23hENoZmWX%2F%2FQj2xlUtLKVBy8cen1s%2F4fmEz66I9ybneN51iS%2F%2FkE3iBB%2F09pMbXlvu%2B%2BmuAVCR&X-Amz-Signature=2b279a7960bb6869b4dfe5f44222c0d25926692f000b620e0e7acb2d01821d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3CYZBV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg4%2FkTDRcaGqJ92Q1qELEUk3YuUnCExNDWARzxxQNLfAiEAsh34Ze0F7CkEmSIlcutf97iUQ2uSAv32NosTsZ%2BdAdcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMhWhuFVlRQ0L4djpircA2hMLzrIxmG%2FqQRIDkU8LQ5xPz9wqCq770ayzrAcTF6tppuK6gPYdoRCntk7%2BLrHOcvquj4L%2F%2Br0ouz8svPAF42%2FCU5x3XQ1XAvG07XqRXrL9b2LrQKUD4rKW18SCgBB28NNaV1rjLOuU8NZdzuXWv3iVawYScOto%2BZDiub5tIA%2B4UlTEhoEkoAVb%2FtPbIWBXUwuCnrPDLKvkeuNUjSxz8QkuA%2FrR8O22xNKPwKNjWd77X%2BCnQxj7%2FhtTsKE3Rt0Jy7ihqkl%2FooormUGLvgP7JpxwgrwitgR26zjHHb1Mts9DWc1%2BVTSh4PQmYS%2BII4ilRjqPL7sctzcQFFwiv6PgzUsdgoAyI6ubXbzQwBIUTRqbFjI7xdK5qRJv%2FC52J5zLgfiRPjUd6nWZhu9sJRUIT7TVJqsRcUxDRheFpT6vB9XREoMkaGs2Opb4jbuguXZmN3u03OiFG5HXBSWnmMwAoX0%2BeSOAHmDTnqG8NKIrf%2FFWXU5NTsDB2CzA23Y61IcNQPwu%2FQpdgnyuKUBBG7oVT3%2FXs%2BRLOuQ8mXyiiS5WK1zRIcuXXAxNNqdJAgVQi%2FPO9pzhIgdWD9Nrf9KSFthekSGxA4Pq7ZJ6CFHoQtJtwDtpiMgemrbCMvTTyvQMLPx%2BL8GOqUBmX%2FlL34BQS9S%2FHaA63vtwiiSKY1OBL28oU8eQI5PE5KBeCxYvEtjrVSQk3Xlx8jndov6Ub3pj3hf7u7zJiU6wJYFVr0bU%2BEhwDZyNbW1GYHUUeJiZaFXgihVer64LwKcwl%2FPPAHJt1bdKyJFj23hENoZmWX%2F%2FQj2xlUtLKVBy8cen1s%2F4fmEz66I9ybneN51iS%2F%2FkE3iBB%2F09pMbXlvu%2B%2BmuAVCR&X-Amz-Signature=019f4a1abd631c2d0f43079f1e22daacb0daa579c959b2f0612d5edfc3ced987&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
