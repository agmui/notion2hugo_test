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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPFB6T4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEQfBlMCkFzHYegyGnr3fmS82KENCuesmdshlT1Y71TAIhAPVg9CEl4Cx3Ek2qr9Ist8Mty6lyy4FZRjwrwv0nRhNXKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCMrduqiHusntLPbcq3ANSkL0nQP8r4lbbEGkjwhuijBsqWOH7EYzf1yEZPeOEprMmGSgyQAMGLZY8AOfYaTyf6ehmQP1pV9TZOkTmdKFcTplOSjctJORNh0WP1m%2BboPjz8NMP1zJbWXQGt7M8i5TmXSfDlw%2F14NFiV8c0an2HKwSz4mxzBKbDQPjJa29tQyqBtDnCbqG0oEPAMdmzwmmGr6dMw50hhSRJP7mMGY8rwWEAtMu5Xqwi0iYfWB8tKLofPL75ZksO2Wl5EZ%2BY09MzFptpK1AeKKmyFKFUrvRRiAa6rsPAf4z56MQzP4%2Fk7HsNeZ7mdJADzpC7N0XRLwvEJFLHvVfp7ZSoi6mHcKQ7bYldPk4Tm%2BezGTLuoeewkA3mHiXRneD51pQiX25vqgEkIJQYI9wNyNtfW9Nr66U4oSzzEdH3snZt9FHMLBDc0ewoL4%2FbIrivCkZjmsfZCiMckngtbTqcxRJs%2BWetUQLxOOzY53FITChSKguFAnd6dlf%2BIYTYayMvGehWVWgkSCanxALCrt3%2BbvODwiVQybngS%2Bsr7R%2BfMVxkUxeFZJgxIX%2BEMoadLd09pSQQCs1hRUxuvQ0cUi4DA%2FuwgsrWvZrJM3QOEEPbOT2hCnc9M9k3KreXAx9ecedMkWIh8jCDsf3ABjqkAVgrE5rvyMg%2BYm96Ntzs0AewdlTiwsThyq8nVf86glR0vG%2BJF9r3MJleHo%2BKabG5UI80w3mlbrF6bE%2BL4pCfd59e9yp901zY4lMF2BHbBzvskv%2BKjDLPDUkzr7RfOGPSLiwNMv8irBsSxzi68dbLH%2FbW7EhdOvGzjeU7XSIwyg5BxAFjm4l9PYPNvACiAhBCo4249T7wTJ%2B49SiCxQFbP1aK%2Bh1q&X-Amz-Signature=9a221e13aa10dc9fa7d80f4ac8606ee7d0bdaf4ea3fa4646b3dc592955ed5073&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPFB6T4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEQfBlMCkFzHYegyGnr3fmS82KENCuesmdshlT1Y71TAIhAPVg9CEl4Cx3Ek2qr9Ist8Mty6lyy4FZRjwrwv0nRhNXKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCMrduqiHusntLPbcq3ANSkL0nQP8r4lbbEGkjwhuijBsqWOH7EYzf1yEZPeOEprMmGSgyQAMGLZY8AOfYaTyf6ehmQP1pV9TZOkTmdKFcTplOSjctJORNh0WP1m%2BboPjz8NMP1zJbWXQGt7M8i5TmXSfDlw%2F14NFiV8c0an2HKwSz4mxzBKbDQPjJa29tQyqBtDnCbqG0oEPAMdmzwmmGr6dMw50hhSRJP7mMGY8rwWEAtMu5Xqwi0iYfWB8tKLofPL75ZksO2Wl5EZ%2BY09MzFptpK1AeKKmyFKFUrvRRiAa6rsPAf4z56MQzP4%2Fk7HsNeZ7mdJADzpC7N0XRLwvEJFLHvVfp7ZSoi6mHcKQ7bYldPk4Tm%2BezGTLuoeewkA3mHiXRneD51pQiX25vqgEkIJQYI9wNyNtfW9Nr66U4oSzzEdH3snZt9FHMLBDc0ewoL4%2FbIrivCkZjmsfZCiMckngtbTqcxRJs%2BWetUQLxOOzY53FITChSKguFAnd6dlf%2BIYTYayMvGehWVWgkSCanxALCrt3%2BbvODwiVQybngS%2Bsr7R%2BfMVxkUxeFZJgxIX%2BEMoadLd09pSQQCs1hRUxuvQ0cUi4DA%2FuwgsrWvZrJM3QOEEPbOT2hCnc9M9k3KreXAx9ecedMkWIh8jCDsf3ABjqkAVgrE5rvyMg%2BYm96Ntzs0AewdlTiwsThyq8nVf86glR0vG%2BJF9r3MJleHo%2BKabG5UI80w3mlbrF6bE%2BL4pCfd59e9yp901zY4lMF2BHbBzvskv%2BKjDLPDUkzr7RfOGPSLiwNMv8irBsSxzi68dbLH%2FbW7EhdOvGzjeU7XSIwyg5BxAFjm4l9PYPNvACiAhBCo4249T7wTJ%2B49SiCxQFbP1aK%2Bh1q&X-Amz-Signature=d6be288d38f96a1d0046911b087d268d553e5a58dbd9102bc423cf367c731bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPFB6T4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEQfBlMCkFzHYegyGnr3fmS82KENCuesmdshlT1Y71TAIhAPVg9CEl4Cx3Ek2qr9Ist8Mty6lyy4FZRjwrwv0nRhNXKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCMrduqiHusntLPbcq3ANSkL0nQP8r4lbbEGkjwhuijBsqWOH7EYzf1yEZPeOEprMmGSgyQAMGLZY8AOfYaTyf6ehmQP1pV9TZOkTmdKFcTplOSjctJORNh0WP1m%2BboPjz8NMP1zJbWXQGt7M8i5TmXSfDlw%2F14NFiV8c0an2HKwSz4mxzBKbDQPjJa29tQyqBtDnCbqG0oEPAMdmzwmmGr6dMw50hhSRJP7mMGY8rwWEAtMu5Xqwi0iYfWB8tKLofPL75ZksO2Wl5EZ%2BY09MzFptpK1AeKKmyFKFUrvRRiAa6rsPAf4z56MQzP4%2Fk7HsNeZ7mdJADzpC7N0XRLwvEJFLHvVfp7ZSoi6mHcKQ7bYldPk4Tm%2BezGTLuoeewkA3mHiXRneD51pQiX25vqgEkIJQYI9wNyNtfW9Nr66U4oSzzEdH3snZt9FHMLBDc0ewoL4%2FbIrivCkZjmsfZCiMckngtbTqcxRJs%2BWetUQLxOOzY53FITChSKguFAnd6dlf%2BIYTYayMvGehWVWgkSCanxALCrt3%2BbvODwiVQybngS%2Bsr7R%2BfMVxkUxeFZJgxIX%2BEMoadLd09pSQQCs1hRUxuvQ0cUi4DA%2FuwgsrWvZrJM3QOEEPbOT2hCnc9M9k3KreXAx9ecedMkWIh8jCDsf3ABjqkAVgrE5rvyMg%2BYm96Ntzs0AewdlTiwsThyq8nVf86glR0vG%2BJF9r3MJleHo%2BKabG5UI80w3mlbrF6bE%2BL4pCfd59e9yp901zY4lMF2BHbBzvskv%2BKjDLPDUkzr7RfOGPSLiwNMv8irBsSxzi68dbLH%2FbW7EhdOvGzjeU7XSIwyg5BxAFjm4l9PYPNvACiAhBCo4249T7wTJ%2B49SiCxQFbP1aK%2Bh1q&X-Amz-Signature=339ef618643d1420f05e54c3a19c14cbd2050e176602cda8c3a897ed922ce62c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
