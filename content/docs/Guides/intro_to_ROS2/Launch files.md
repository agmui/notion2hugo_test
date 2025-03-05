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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWNPO3F%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGeE89UP4tox9DXtVXmTkwV7anDTTP8FYfjX3ABgCiDgIgMyo2JyxXjPBGnYIoieRkvVBzDWAtfMT74bA9RiewMQcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2hA1qqYzydxxpgQircA0gJN0Y1QoX1dFtW5Q%2FfzmxCm5AZuqH4uXgb%2BpS6hGyEE%2Brp2%2FppRG6Np0%2FYU7ZWNeqL2clgVGxSgcbaSHFqI3G40qze6%2FY0%2FNvktxLu0mxRmt3wgJtvcoXj%2FeAjuil4NBG150PjDAUWzFGX3C1pqRWGITf7J66MKmWlswt4diDNfZt5gdalukwYtbSCLyv1CKG9J0tdWDC6ONMq9YC4kjKJnGRnSVsnN6csL4nJVEdof2F1OEK3MrO7wd%2FUUh%2BvYRCfoLznldA5juncC%2BaziVVdzoCihmRiVEXZEns%2FkNVGwyE0DJnKcDoXvuoIGD6NbgJP0VFo0exciDbQ627rKkK8unK6ZJ9gassUwgWeIPyhV3o778cgtMkpgVRNzlwhyE2naGOoCN73DRjpIO5cCnhd0iWThyklhhIaa3bnI%2BW8FaFi0VgShYD1kCvAZanTLi2tYgjsA7112jBRmjJ6D7rHvNQnUIHm1C4ZDD8TXevTKkUIdueWFOnaRQW9Fm38Ptry0fq1c5a%2FjAytsXrVRzrHWVH9da03OvuQGLNU2dtZ5pVXHQcKwnYc7PoQvZsUGslXwcto9AoriJDxXQVkf1pagHWLpPcyoFPJbn5djrfPVgyLz1vsqvl67PMgMM2Jn74GOqUBGF67TVgR7MrTr8q8Z%2FUEX4WfcjT2O88HrSQ5D7WvQbjYJUkQbtDjdtEUYutWU3F8nfIXHvYA2ojhjQW4pF3SM37vA4u%2Fb%2BXlLl7l%2Bw6pSHDMDhJPVp8M8K70kpx30nA1s06lJu1lj4XkzjSG1Q4N%2BzNqCFrjirS%2BZ4ppUUTCgnYlyXq7MEVAXLNux4wgYFMAiPJbR2MNRqvu%2ByndAiEx0070yKG8&X-Amz-Signature=0018d462ad34a11ce5edfdacb36d18d387a945abf31705616d81780f5b83fe85&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWNPO3F%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGeE89UP4tox9DXtVXmTkwV7anDTTP8FYfjX3ABgCiDgIgMyo2JyxXjPBGnYIoieRkvVBzDWAtfMT74bA9RiewMQcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2hA1qqYzydxxpgQircA0gJN0Y1QoX1dFtW5Q%2FfzmxCm5AZuqH4uXgb%2BpS6hGyEE%2Brp2%2FppRG6Np0%2FYU7ZWNeqL2clgVGxSgcbaSHFqI3G40qze6%2FY0%2FNvktxLu0mxRmt3wgJtvcoXj%2FeAjuil4NBG150PjDAUWzFGX3C1pqRWGITf7J66MKmWlswt4diDNfZt5gdalukwYtbSCLyv1CKG9J0tdWDC6ONMq9YC4kjKJnGRnSVsnN6csL4nJVEdof2F1OEK3MrO7wd%2FUUh%2BvYRCfoLznldA5juncC%2BaziVVdzoCihmRiVEXZEns%2FkNVGwyE0DJnKcDoXvuoIGD6NbgJP0VFo0exciDbQ627rKkK8unK6ZJ9gassUwgWeIPyhV3o778cgtMkpgVRNzlwhyE2naGOoCN73DRjpIO5cCnhd0iWThyklhhIaa3bnI%2BW8FaFi0VgShYD1kCvAZanTLi2tYgjsA7112jBRmjJ6D7rHvNQnUIHm1C4ZDD8TXevTKkUIdueWFOnaRQW9Fm38Ptry0fq1c5a%2FjAytsXrVRzrHWVH9da03OvuQGLNU2dtZ5pVXHQcKwnYc7PoQvZsUGslXwcto9AoriJDxXQVkf1pagHWLpPcyoFPJbn5djrfPVgyLz1vsqvl67PMgMM2Jn74GOqUBGF67TVgR7MrTr8q8Z%2FUEX4WfcjT2O88HrSQ5D7WvQbjYJUkQbtDjdtEUYutWU3F8nfIXHvYA2ojhjQW4pF3SM37vA4u%2Fb%2BXlLl7l%2Bw6pSHDMDhJPVp8M8K70kpx30nA1s06lJu1lj4XkzjSG1Q4N%2BzNqCFrjirS%2BZ4ppUUTCgnYlyXq7MEVAXLNux4wgYFMAiPJbR2MNRqvu%2ByndAiEx0070yKG8&X-Amz-Signature=0b826a62f876d1f75a288dd5ddf7142082cb1d69805d4c83fd979bc2170c21c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWNPO3F%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGeE89UP4tox9DXtVXmTkwV7anDTTP8FYfjX3ABgCiDgIgMyo2JyxXjPBGnYIoieRkvVBzDWAtfMT74bA9RiewMQcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2hA1qqYzydxxpgQircA0gJN0Y1QoX1dFtW5Q%2FfzmxCm5AZuqH4uXgb%2BpS6hGyEE%2Brp2%2FppRG6Np0%2FYU7ZWNeqL2clgVGxSgcbaSHFqI3G40qze6%2FY0%2FNvktxLu0mxRmt3wgJtvcoXj%2FeAjuil4NBG150PjDAUWzFGX3C1pqRWGITf7J66MKmWlswt4diDNfZt5gdalukwYtbSCLyv1CKG9J0tdWDC6ONMq9YC4kjKJnGRnSVsnN6csL4nJVEdof2F1OEK3MrO7wd%2FUUh%2BvYRCfoLznldA5juncC%2BaziVVdzoCihmRiVEXZEns%2FkNVGwyE0DJnKcDoXvuoIGD6NbgJP0VFo0exciDbQ627rKkK8unK6ZJ9gassUwgWeIPyhV3o778cgtMkpgVRNzlwhyE2naGOoCN73DRjpIO5cCnhd0iWThyklhhIaa3bnI%2BW8FaFi0VgShYD1kCvAZanTLi2tYgjsA7112jBRmjJ6D7rHvNQnUIHm1C4ZDD8TXevTKkUIdueWFOnaRQW9Fm38Ptry0fq1c5a%2FjAytsXrVRzrHWVH9da03OvuQGLNU2dtZ5pVXHQcKwnYc7PoQvZsUGslXwcto9AoriJDxXQVkf1pagHWLpPcyoFPJbn5djrfPVgyLz1vsqvl67PMgMM2Jn74GOqUBGF67TVgR7MrTr8q8Z%2FUEX4WfcjT2O88HrSQ5D7WvQbjYJUkQbtDjdtEUYutWU3F8nfIXHvYA2ojhjQW4pF3SM37vA4u%2Fb%2BXlLl7l%2Bw6pSHDMDhJPVp8M8K70kpx30nA1s06lJu1lj4XkzjSG1Q4N%2BzNqCFrjirS%2BZ4ppUUTCgnYlyXq7MEVAXLNux4wgYFMAiPJbR2MNRqvu%2ByndAiEx0070yKG8&X-Amz-Signature=705baa85b3d608eb3fda1f9716066c484cfbd289aafac074708066df74e91000&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
