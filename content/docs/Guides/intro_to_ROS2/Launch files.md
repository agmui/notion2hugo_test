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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4OI2P5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWwBiQY%2F%2Bb3yr2EnG6UAG3x8ug%2FcZW0t4SGPAComaGgAiEA8H9YA9hEDM2fHJk%2BqUgXQxsxZQZtXn93Ebl5jsFWYZgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHHmPakOyEBH66UWCrcA865JvMG60oKwKK%2BvMzjOQV0Ewi0ttaBX%2Fj53F6AAlakrjcbWr8UCxIUCL4LH%2B1UA8tCBPBo6F6ux4lnBsVmjG%2FtPauFjeLyAY7vpIfrJhRD%2ByJgcHzi%2FZ21qmd6JHgIpQAje8OTgH2zftfRAiAlc%2FZhWWroGydK3LIaGJfVV3Bullvz%2BeO%2Ff3kYNgbhiRUhzitLFXBA838QzxlS3YxRusGrHOOxaD6hZfZYQMtTLBUZclbUxP55UvETsEZYJOez7lekwwMQHkjf5S7B8sDRmTFOnMeQjlYXF2yi6n8rNioBElTfeDeOYq5GnPDwAtquVQM6QAP5y%2FPvHfHQgLlZFTtWlZNd2CrOxqiM9JbeBZ%2Fu4uWEiHIPhkA6yexx%2F%2Fu148SWSK7bF%2FBoVhoMEUA1OJGH3Nvxrg%2BXn0gofx%2FMfME1DBF9vbSSXwDNAvYqrTbKGoi%2BKcLy%2FPZrOBysJbH%2BZ2OCLi%2FWmV5phgu%2BIM8%2FJpx0BKYiZCuKMwbZg9k9qfdF6fbhXLKalBzQ0WrzKX%2BwZc9i5NB55ku7RvUwGwdElmqx9a%2FMXHzgRbmTxnSaCMmDyCgk%2FwJ3IwVGknqfFQ48g8Ba2WxJVA1f7NfyCa2XpCml0Bbz%2BPslNKt455ANMICfqL0GOqUBG6IMtf9qy1sOnMRAoTjlmaaHpyHQ5H0JBFbbp3vruBlXlgTQQA7fpCYM8B44w5JpWBug96j4adW4%2B28oHIOFs8OFUZnw%2FG3io0dgXcwOLwMU9UcuZkkpMOFSzV6IK8MJfJ2x%2FxywIXz7aiqsCV19opR3VEm9RZtoGJdL%2Fzl2dgT%2BNZyC3k56tDqv0WUv1LUHHjn59D9SR3h9SjleMTAwc4t08oms&X-Amz-Signature=11f8de57f93ed676b25ba976c9769c9d93de8670ce44a4d08c7db47323f0cffa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4OI2P5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWwBiQY%2F%2Bb3yr2EnG6UAG3x8ug%2FcZW0t4SGPAComaGgAiEA8H9YA9hEDM2fHJk%2BqUgXQxsxZQZtXn93Ebl5jsFWYZgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHHmPakOyEBH66UWCrcA865JvMG60oKwKK%2BvMzjOQV0Ewi0ttaBX%2Fj53F6AAlakrjcbWr8UCxIUCL4LH%2B1UA8tCBPBo6F6ux4lnBsVmjG%2FtPauFjeLyAY7vpIfrJhRD%2ByJgcHzi%2FZ21qmd6JHgIpQAje8OTgH2zftfRAiAlc%2FZhWWroGydK3LIaGJfVV3Bullvz%2BeO%2Ff3kYNgbhiRUhzitLFXBA838QzxlS3YxRusGrHOOxaD6hZfZYQMtTLBUZclbUxP55UvETsEZYJOez7lekwwMQHkjf5S7B8sDRmTFOnMeQjlYXF2yi6n8rNioBElTfeDeOYq5GnPDwAtquVQM6QAP5y%2FPvHfHQgLlZFTtWlZNd2CrOxqiM9JbeBZ%2Fu4uWEiHIPhkA6yexx%2F%2Fu148SWSK7bF%2FBoVhoMEUA1OJGH3Nvxrg%2BXn0gofx%2FMfME1DBF9vbSSXwDNAvYqrTbKGoi%2BKcLy%2FPZrOBysJbH%2BZ2OCLi%2FWmV5phgu%2BIM8%2FJpx0BKYiZCuKMwbZg9k9qfdF6fbhXLKalBzQ0WrzKX%2BwZc9i5NB55ku7RvUwGwdElmqx9a%2FMXHzgRbmTxnSaCMmDyCgk%2FwJ3IwVGknqfFQ48g8Ba2WxJVA1f7NfyCa2XpCml0Bbz%2BPslNKt455ANMICfqL0GOqUBG6IMtf9qy1sOnMRAoTjlmaaHpyHQ5H0JBFbbp3vruBlXlgTQQA7fpCYM8B44w5JpWBug96j4adW4%2B28oHIOFs8OFUZnw%2FG3io0dgXcwOLwMU9UcuZkkpMOFSzV6IK8MJfJ2x%2FxywIXz7aiqsCV19opR3VEm9RZtoGJdL%2Fzl2dgT%2BNZyC3k56tDqv0WUv1LUHHjn59D9SR3h9SjleMTAwc4t08oms&X-Amz-Signature=abd98939cdf8a795ab71b5419a32e4b0ea87a89ce397620629192f2ce83b3afc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4OI2P5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWwBiQY%2F%2Bb3yr2EnG6UAG3x8ug%2FcZW0t4SGPAComaGgAiEA8H9YA9hEDM2fHJk%2BqUgXQxsxZQZtXn93Ebl5jsFWYZgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHHmPakOyEBH66UWCrcA865JvMG60oKwKK%2BvMzjOQV0Ewi0ttaBX%2Fj53F6AAlakrjcbWr8UCxIUCL4LH%2B1UA8tCBPBo6F6ux4lnBsVmjG%2FtPauFjeLyAY7vpIfrJhRD%2ByJgcHzi%2FZ21qmd6JHgIpQAje8OTgH2zftfRAiAlc%2FZhWWroGydK3LIaGJfVV3Bullvz%2BeO%2Ff3kYNgbhiRUhzitLFXBA838QzxlS3YxRusGrHOOxaD6hZfZYQMtTLBUZclbUxP55UvETsEZYJOez7lekwwMQHkjf5S7B8sDRmTFOnMeQjlYXF2yi6n8rNioBElTfeDeOYq5GnPDwAtquVQM6QAP5y%2FPvHfHQgLlZFTtWlZNd2CrOxqiM9JbeBZ%2Fu4uWEiHIPhkA6yexx%2F%2Fu148SWSK7bF%2FBoVhoMEUA1OJGH3Nvxrg%2BXn0gofx%2FMfME1DBF9vbSSXwDNAvYqrTbKGoi%2BKcLy%2FPZrOBysJbH%2BZ2OCLi%2FWmV5phgu%2BIM8%2FJpx0BKYiZCuKMwbZg9k9qfdF6fbhXLKalBzQ0WrzKX%2BwZc9i5NB55ku7RvUwGwdElmqx9a%2FMXHzgRbmTxnSaCMmDyCgk%2FwJ3IwVGknqfFQ48g8Ba2WxJVA1f7NfyCa2XpCml0Bbz%2BPslNKt455ANMICfqL0GOqUBG6IMtf9qy1sOnMRAoTjlmaaHpyHQ5H0JBFbbp3vruBlXlgTQQA7fpCYM8B44w5JpWBug96j4adW4%2B28oHIOFs8OFUZnw%2FG3io0dgXcwOLwMU9UcuZkkpMOFSzV6IK8MJfJ2x%2FxywIXz7aiqsCV19opR3VEm9RZtoGJdL%2Fzl2dgT%2BNZyC3k56tDqv0WUv1LUHHjn59D9SR3h9SjleMTAwc4t08oms&X-Amz-Signature=ae3c40a37cb8c6ae0e2736a8694320d997a71606154ad00c39746ef05d8bc240&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
