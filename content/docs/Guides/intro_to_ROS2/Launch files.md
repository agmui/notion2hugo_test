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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUNSO3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEjsCf%2F%2FT7V8NyazW13rdmeFB0DwfYK0uPeKvQFjinzvAiEAzOv40CSiAG2PMM8W7lJ7E%2BRQLg22hRDrqADeAHtuIPEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgvKpNbn3eWW%2Bxu7SrcA2BKrNtMwGtB2%2FzCJ8KZGU10BBg61%2FWjas%2BusK%2Bo404%2FbL07%2BAYp%2BpMDw8rT%2Bt3zzm5rCwi7H%2FwTb9MrsKuaaN67ucQ7ZEf%2F%2B2%2BdhVqN7o0cNq8WYwrBIs%2BuMvRWdJfggDkKp0MuqCEyDzdR1rgTX4sSq8nrH%2BytYQzchdbmdrm8l5VsMGgAQ0d99tUljFK4M0gz7hmFNIbQ6oaW0xZNs48yYaHNPO%2BtUox3ZfIXXiNgHTXCmNUguI2KJR9ATFCEOJjbpY%2FSpLumuBQNjTi31VUKai1vy092GGxxEvuOJ9QBh0HjkSF7j9hfqG%2FKziFNvPuSiyXEEx5Q0plQ33HdJwJJRXlW8dPEBarpbq5p%2BT12HzBcGzfWqN87Fs46CKny2EKY%2BEdzkA7v8a8COxXPY%2BSzb9JNMRXc%2BUQY0H%2Fqz0u89l%2Fk7DqfKUGPk77Mzxf%2FzUUFPtcwFvtZDI4Cytb%2FXfI5mRZdxextMw0lb9GHpKkftpJhNzW%2Fs9vV%2BMg2HNkAz2UZW2%2FseDWnjhuDEEupSnXLnwIwOWTCX6xGU1Z3ChI5lkiXfqj0w73MnTlfwWPQZIuxM%2Bm3rcbLhTY46t3Oie7FMT6lb6prvb%2Fu2cWi9SoA8OAV3gIbt6w8eBxoMODvo78GOqUBnuRiIGo6KG5fWzvqv6qYV7zYvBzQPqzo8tBfl%2FK9s3oi5NP8GJV8alSgZWEI1qHlBmoEEANdMY6mCZXmyABHSoTA%2FTJLG2jT4CNFbVm%2Fraf%2BkVxHBsK4x5NdpVn4LWnCpjoZ6BlhVVVbwKjkKZMikNfQ712naQVZC58%2Bd4tzfRlosMJb5fVdVrU9oQk%2F3A2sWCaO2LgLeLmnbxEM5ckhBkIYM%2Fg9&X-Amz-Signature=0604027ad3318126034acebcaabb838928e66e6069f302be4e62c944d81b6584&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUNSO3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEjsCf%2F%2FT7V8NyazW13rdmeFB0DwfYK0uPeKvQFjinzvAiEAzOv40CSiAG2PMM8W7lJ7E%2BRQLg22hRDrqADeAHtuIPEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgvKpNbn3eWW%2Bxu7SrcA2BKrNtMwGtB2%2FzCJ8KZGU10BBg61%2FWjas%2BusK%2Bo404%2FbL07%2BAYp%2BpMDw8rT%2Bt3zzm5rCwi7H%2FwTb9MrsKuaaN67ucQ7ZEf%2F%2B2%2BdhVqN7o0cNq8WYwrBIs%2BuMvRWdJfggDkKp0MuqCEyDzdR1rgTX4sSq8nrH%2BytYQzchdbmdrm8l5VsMGgAQ0d99tUljFK4M0gz7hmFNIbQ6oaW0xZNs48yYaHNPO%2BtUox3ZfIXXiNgHTXCmNUguI2KJR9ATFCEOJjbpY%2FSpLumuBQNjTi31VUKai1vy092GGxxEvuOJ9QBh0HjkSF7j9hfqG%2FKziFNvPuSiyXEEx5Q0plQ33HdJwJJRXlW8dPEBarpbq5p%2BT12HzBcGzfWqN87Fs46CKny2EKY%2BEdzkA7v8a8COxXPY%2BSzb9JNMRXc%2BUQY0H%2Fqz0u89l%2Fk7DqfKUGPk77Mzxf%2FzUUFPtcwFvtZDI4Cytb%2FXfI5mRZdxextMw0lb9GHpKkftpJhNzW%2Fs9vV%2BMg2HNkAz2UZW2%2FseDWnjhuDEEupSnXLnwIwOWTCX6xGU1Z3ChI5lkiXfqj0w73MnTlfwWPQZIuxM%2Bm3rcbLhTY46t3Oie7FMT6lb6prvb%2Fu2cWi9SoA8OAV3gIbt6w8eBxoMODvo78GOqUBnuRiIGo6KG5fWzvqv6qYV7zYvBzQPqzo8tBfl%2FK9s3oi5NP8GJV8alSgZWEI1qHlBmoEEANdMY6mCZXmyABHSoTA%2FTJLG2jT4CNFbVm%2Fraf%2BkVxHBsK4x5NdpVn4LWnCpjoZ6BlhVVVbwKjkKZMikNfQ712naQVZC58%2Bd4tzfRlosMJb5fVdVrU9oQk%2F3A2sWCaO2LgLeLmnbxEM5ckhBkIYM%2Fg9&X-Amz-Signature=0eb2140bb36ac5c1b531349eccae2307a2e746d1e1fa1a3a3b70f62c64355878&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OUNSO3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEjsCf%2F%2FT7V8NyazW13rdmeFB0DwfYK0uPeKvQFjinzvAiEAzOv40CSiAG2PMM8W7lJ7E%2BRQLg22hRDrqADeAHtuIPEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgvKpNbn3eWW%2Bxu7SrcA2BKrNtMwGtB2%2FzCJ8KZGU10BBg61%2FWjas%2BusK%2Bo404%2FbL07%2BAYp%2BpMDw8rT%2Bt3zzm5rCwi7H%2FwTb9MrsKuaaN67ucQ7ZEf%2F%2B2%2BdhVqN7o0cNq8WYwrBIs%2BuMvRWdJfggDkKp0MuqCEyDzdR1rgTX4sSq8nrH%2BytYQzchdbmdrm8l5VsMGgAQ0d99tUljFK4M0gz7hmFNIbQ6oaW0xZNs48yYaHNPO%2BtUox3ZfIXXiNgHTXCmNUguI2KJR9ATFCEOJjbpY%2FSpLumuBQNjTi31VUKai1vy092GGxxEvuOJ9QBh0HjkSF7j9hfqG%2FKziFNvPuSiyXEEx5Q0plQ33HdJwJJRXlW8dPEBarpbq5p%2BT12HzBcGzfWqN87Fs46CKny2EKY%2BEdzkA7v8a8COxXPY%2BSzb9JNMRXc%2BUQY0H%2Fqz0u89l%2Fk7DqfKUGPk77Mzxf%2FzUUFPtcwFvtZDI4Cytb%2FXfI5mRZdxextMw0lb9GHpKkftpJhNzW%2Fs9vV%2BMg2HNkAz2UZW2%2FseDWnjhuDEEupSnXLnwIwOWTCX6xGU1Z3ChI5lkiXfqj0w73MnTlfwWPQZIuxM%2Bm3rcbLhTY46t3Oie7FMT6lb6prvb%2Fu2cWi9SoA8OAV3gIbt6w8eBxoMODvo78GOqUBnuRiIGo6KG5fWzvqv6qYV7zYvBzQPqzo8tBfl%2FK9s3oi5NP8GJV8alSgZWEI1qHlBmoEEANdMY6mCZXmyABHSoTA%2FTJLG2jT4CNFbVm%2Fraf%2BkVxHBsK4x5NdpVn4LWnCpjoZ6BlhVVVbwKjkKZMikNfQ712naQVZC58%2Bd4tzfRlosMJb5fVdVrU9oQk%2F3A2sWCaO2LgLeLmnbxEM5ckhBkIYM%2Fg9&X-Amz-Signature=a38f7b52dd3d8444c01fee86c5bd628ba91394f1ece3fef2efe280b2a5f62ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
