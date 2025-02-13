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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZQSDZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIBkYFHp24Okpu7OkknNhHI6oHgK4II9kychQQ4AjJOAiAkKju8qBjOYD1mCWgyXnfZ2IpKmTy%2B8k8fscreNVJRQCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMjB4GgAVCaSkWfUjqKtwDRzNwaUmA0t%2F4D97o9gtBargW9CC%2BF%2Fy98ILT%2Br8%2FNqteSPgQ9ZprY56YAfreHirOqnpqhM%2FTydZ1kf8GE9xGBTpfsabmmy0jCA8sj0QkqLqFNrvD5DnlVyHt10qoHM%2BquZMSSFgsdPJmC9tF5chAuDmMwyo%2FOkCkK2Onk8AUTgptKLlEPfleQp1Yj4g2HgFAAJBAAXlsCMyi%2F26%2Fco5jey%2F%2FNghZRQ%2Fq%2FkDp6%2FLmu%2B68qktM7uuhCgRMJEZHGdcqjI90t7qrEQxjjCLoQbVJNI8h5E%2FnsiF9brfl%2FM%2B2kE3oPSzOQOLIymSZGwDTdWnxG%2BriuAo17gi8L8oY8UtKXv5bhKS8TTMEPdgYllzJnUTFk4moAEfcDkgIr0Tw4m%2BudFR5z932IUaMi7wYfHdgCVx6I4V4wXdikz%2FALK9k6sHJ%2FSSsUpTa%2FyHkzq%2B56eFOLG7wC8dBOwI%2BlVQj1GzsMN0V%2F8Uh8P8l93TvTB3%2FCsopxshtjE58Ib36vS8xU7c%2Fo04CbQGzTRoe90RpHF0nDdytNbv1AF6EwS5MZhQNeXft1JI%2FwQjDTag%2B%2BxX%2FEVDWPdwtKjN5HWsh%2BsmCLA2ZSDNpMXDsG8VMp7KmASia3%2FwLZbRQtf8NsEhVBF0wwOa2vQY6pgENGAPDJp%2BtZk5muSyi0Zp2IpdHmnagAKuegMlbVVXtWLGQfOZRWAptuGGVVRwqVm4mpAYgV0uhivOBfaC8pwU4qgbWuuf9htrPZKCSVPFHE%2FBWyH6eKwyl1woXaCeO7tPIm3HyL3JCo4peFqQHwh9EfpGpj9TwXFz5rm44RyqRksbBkZ8KK8b3uomFAIOxJFnAEIsYDF0z5fgHAfUGFG1pRLvyRxtT&X-Amz-Signature=4c3c9e31f65974879b358cfc052965af9de4e814d71fa97d5aab65ef387096fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZQSDZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIBkYFHp24Okpu7OkknNhHI6oHgK4II9kychQQ4AjJOAiAkKju8qBjOYD1mCWgyXnfZ2IpKmTy%2B8k8fscreNVJRQCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMjB4GgAVCaSkWfUjqKtwDRzNwaUmA0t%2F4D97o9gtBargW9CC%2BF%2Fy98ILT%2Br8%2FNqteSPgQ9ZprY56YAfreHirOqnpqhM%2FTydZ1kf8GE9xGBTpfsabmmy0jCA8sj0QkqLqFNrvD5DnlVyHt10qoHM%2BquZMSSFgsdPJmC9tF5chAuDmMwyo%2FOkCkK2Onk8AUTgptKLlEPfleQp1Yj4g2HgFAAJBAAXlsCMyi%2F26%2Fco5jey%2F%2FNghZRQ%2Fq%2FkDp6%2FLmu%2B68qktM7uuhCgRMJEZHGdcqjI90t7qrEQxjjCLoQbVJNI8h5E%2FnsiF9brfl%2FM%2B2kE3oPSzOQOLIymSZGwDTdWnxG%2BriuAo17gi8L8oY8UtKXv5bhKS8TTMEPdgYllzJnUTFk4moAEfcDkgIr0Tw4m%2BudFR5z932IUaMi7wYfHdgCVx6I4V4wXdikz%2FALK9k6sHJ%2FSSsUpTa%2FyHkzq%2B56eFOLG7wC8dBOwI%2BlVQj1GzsMN0V%2F8Uh8P8l93TvTB3%2FCsopxshtjE58Ib36vS8xU7c%2Fo04CbQGzTRoe90RpHF0nDdytNbv1AF6EwS5MZhQNeXft1JI%2FwQjDTag%2B%2BxX%2FEVDWPdwtKjN5HWsh%2BsmCLA2ZSDNpMXDsG8VMp7KmASia3%2FwLZbRQtf8NsEhVBF0wwOa2vQY6pgENGAPDJp%2BtZk5muSyi0Zp2IpdHmnagAKuegMlbVVXtWLGQfOZRWAptuGGVVRwqVm4mpAYgV0uhivOBfaC8pwU4qgbWuuf9htrPZKCSVPFHE%2FBWyH6eKwyl1woXaCeO7tPIm3HyL3JCo4peFqQHwh9EfpGpj9TwXFz5rm44RyqRksbBkZ8KK8b3uomFAIOxJFnAEIsYDF0z5fgHAfUGFG1pRLvyRxtT&X-Amz-Signature=180f030451322bcf93712ac3d6f070e09741019fd802ee2e2ca3923ff80b621a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZQSDZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIBkYFHp24Okpu7OkknNhHI6oHgK4II9kychQQ4AjJOAiAkKju8qBjOYD1mCWgyXnfZ2IpKmTy%2B8k8fscreNVJRQCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMjB4GgAVCaSkWfUjqKtwDRzNwaUmA0t%2F4D97o9gtBargW9CC%2BF%2Fy98ILT%2Br8%2FNqteSPgQ9ZprY56YAfreHirOqnpqhM%2FTydZ1kf8GE9xGBTpfsabmmy0jCA8sj0QkqLqFNrvD5DnlVyHt10qoHM%2BquZMSSFgsdPJmC9tF5chAuDmMwyo%2FOkCkK2Onk8AUTgptKLlEPfleQp1Yj4g2HgFAAJBAAXlsCMyi%2F26%2Fco5jey%2F%2FNghZRQ%2Fq%2FkDp6%2FLmu%2B68qktM7uuhCgRMJEZHGdcqjI90t7qrEQxjjCLoQbVJNI8h5E%2FnsiF9brfl%2FM%2B2kE3oPSzOQOLIymSZGwDTdWnxG%2BriuAo17gi8L8oY8UtKXv5bhKS8TTMEPdgYllzJnUTFk4moAEfcDkgIr0Tw4m%2BudFR5z932IUaMi7wYfHdgCVx6I4V4wXdikz%2FALK9k6sHJ%2FSSsUpTa%2FyHkzq%2B56eFOLG7wC8dBOwI%2BlVQj1GzsMN0V%2F8Uh8P8l93TvTB3%2FCsopxshtjE58Ib36vS8xU7c%2Fo04CbQGzTRoe90RpHF0nDdytNbv1AF6EwS5MZhQNeXft1JI%2FwQjDTag%2B%2BxX%2FEVDWPdwtKjN5HWsh%2BsmCLA2ZSDNpMXDsG8VMp7KmASia3%2FwLZbRQtf8NsEhVBF0wwOa2vQY6pgENGAPDJp%2BtZk5muSyi0Zp2IpdHmnagAKuegMlbVVXtWLGQfOZRWAptuGGVVRwqVm4mpAYgV0uhivOBfaC8pwU4qgbWuuf9htrPZKCSVPFHE%2FBWyH6eKwyl1woXaCeO7tPIm3HyL3JCo4peFqQHwh9EfpGpj9TwXFz5rm44RyqRksbBkZ8KK8b3uomFAIOxJFnAEIsYDF0z5fgHAfUGFG1pRLvyRxtT&X-Amz-Signature=4f78977f459fc587e08a9d7ba5f09135ba138fbb7b0053362d075068c4dbeaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
