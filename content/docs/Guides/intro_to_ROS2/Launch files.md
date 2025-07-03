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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JZNWI2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB8l68akfQFpmraciEsVGceVP%2B0qwNhT5Us9ERa5M32cAiEA4MtzjhyX9h3jzaMczKVJHQTNVW%2FJOBTFdG72qcvHDLEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAcQP4ptiQaf2VeS5yrcA%2Fo5z%2BVtjeGVNoxXIvJo%2B6yitvh9%2BDNlJPMzSUhWGQVWdwA3lM9c2PURsWep%2Bjhlc5Tyf%2FfJ8e4EUBP3A73w2X7mlzDnHzQMEC4zJFMietoGZzNMrtDYZ%2Fq4j%2FIoYGR0mXhNeFcUkAExIwk84RmMyXzuuTf8UwumKhC7OVja%2FxzpotXwrYVq%2B41bjrIGf6FEeizoRS3QO0r3js7H0aUz%2BvccVrCccW2lCqodOLQwu%2FexZ9exK0oAj0gc5GgPVJK%2Fn%2BOMM1bEGkMXA8oqVTNg78SF%2F8m%2Fvi5T4jNXFL23XGlXPV%2F6YAduGmP9Ib9MRK1yhxnIBqTaNNWDWj8%2B8I8fUIMUYey5A7ojEEesKvB8rptuIasav6rcHYt1%2FoeOk4e7ssRY6niNyn0eG4%2F7vbkhn%2BiQLHclqF%2BsBUU7N7ECKjt3lMiKzPY7zASlCs6rOS0Spxcec7xZTAHjbDVt%2BXFgkLL9%2FJFJKHsGVnGa24Lx9PUPP8NeNGVMikIkgRw%2FHVTLdpBQltyIN0xNlFgmB4IeDn8DrxASYnVuXP0y4KuWFeZ7zgjwf7rPgRbztfIKttv1pi8%2BSx4zTWFP0sDGNVAxxDcsRFEEFsNKH5IxjEJ1StspGBF3sgdFkh0OH5M0MPa7m8MGOqUB3WtOjL%2FBN7ifdGxjCbBeO4IHJbHM0xKuM3L46a9qPQSmePNfUPAdoBvCDwCCVr0o3O%2BSIljQCNJqbZ1NGXyFzf6P1tkP1t%2FdEPPAKd2zDhXOB783KDrdg5%2FXveJ%2FKczlflFaiyoc%2BByNLEunbg2Hu8Vyf2MbGpt7PX%2FEFzPWWUcE2jND1NasAMrI0ScSlu3d7rwqNawtuKwuruoOgETWu2IwUNYB&X-Amz-Signature=3cbd047cda1e63826c903f4349e49b9b4a9e50e2a785795676f628dcc664fdad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JZNWI2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB8l68akfQFpmraciEsVGceVP%2B0qwNhT5Us9ERa5M32cAiEA4MtzjhyX9h3jzaMczKVJHQTNVW%2FJOBTFdG72qcvHDLEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAcQP4ptiQaf2VeS5yrcA%2Fo5z%2BVtjeGVNoxXIvJo%2B6yitvh9%2BDNlJPMzSUhWGQVWdwA3lM9c2PURsWep%2Bjhlc5Tyf%2FfJ8e4EUBP3A73w2X7mlzDnHzQMEC4zJFMietoGZzNMrtDYZ%2Fq4j%2FIoYGR0mXhNeFcUkAExIwk84RmMyXzuuTf8UwumKhC7OVja%2FxzpotXwrYVq%2B41bjrIGf6FEeizoRS3QO0r3js7H0aUz%2BvccVrCccW2lCqodOLQwu%2FexZ9exK0oAj0gc5GgPVJK%2Fn%2BOMM1bEGkMXA8oqVTNg78SF%2F8m%2Fvi5T4jNXFL23XGlXPV%2F6YAduGmP9Ib9MRK1yhxnIBqTaNNWDWj8%2B8I8fUIMUYey5A7ojEEesKvB8rptuIasav6rcHYt1%2FoeOk4e7ssRY6niNyn0eG4%2F7vbkhn%2BiQLHclqF%2BsBUU7N7ECKjt3lMiKzPY7zASlCs6rOS0Spxcec7xZTAHjbDVt%2BXFgkLL9%2FJFJKHsGVnGa24Lx9PUPP8NeNGVMikIkgRw%2FHVTLdpBQltyIN0xNlFgmB4IeDn8DrxASYnVuXP0y4KuWFeZ7zgjwf7rPgRbztfIKttv1pi8%2BSx4zTWFP0sDGNVAxxDcsRFEEFsNKH5IxjEJ1StspGBF3sgdFkh0OH5M0MPa7m8MGOqUB3WtOjL%2FBN7ifdGxjCbBeO4IHJbHM0xKuM3L46a9qPQSmePNfUPAdoBvCDwCCVr0o3O%2BSIljQCNJqbZ1NGXyFzf6P1tkP1t%2FdEPPAKd2zDhXOB783KDrdg5%2FXveJ%2FKczlflFaiyoc%2BByNLEunbg2Hu8Vyf2MbGpt7PX%2FEFzPWWUcE2jND1NasAMrI0ScSlu3d7rwqNawtuKwuruoOgETWu2IwUNYB&X-Amz-Signature=bb7630a8cad2273aa9540992b121e5af13670effbc4a357ddace94f4d9f23802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JZNWI2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB8l68akfQFpmraciEsVGceVP%2B0qwNhT5Us9ERa5M32cAiEA4MtzjhyX9h3jzaMczKVJHQTNVW%2FJOBTFdG72qcvHDLEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAcQP4ptiQaf2VeS5yrcA%2Fo5z%2BVtjeGVNoxXIvJo%2B6yitvh9%2BDNlJPMzSUhWGQVWdwA3lM9c2PURsWep%2Bjhlc5Tyf%2FfJ8e4EUBP3A73w2X7mlzDnHzQMEC4zJFMietoGZzNMrtDYZ%2Fq4j%2FIoYGR0mXhNeFcUkAExIwk84RmMyXzuuTf8UwumKhC7OVja%2FxzpotXwrYVq%2B41bjrIGf6FEeizoRS3QO0r3js7H0aUz%2BvccVrCccW2lCqodOLQwu%2FexZ9exK0oAj0gc5GgPVJK%2Fn%2BOMM1bEGkMXA8oqVTNg78SF%2F8m%2Fvi5T4jNXFL23XGlXPV%2F6YAduGmP9Ib9MRK1yhxnIBqTaNNWDWj8%2B8I8fUIMUYey5A7ojEEesKvB8rptuIasav6rcHYt1%2FoeOk4e7ssRY6niNyn0eG4%2F7vbkhn%2BiQLHclqF%2BsBUU7N7ECKjt3lMiKzPY7zASlCs6rOS0Spxcec7xZTAHjbDVt%2BXFgkLL9%2FJFJKHsGVnGa24Lx9PUPP8NeNGVMikIkgRw%2FHVTLdpBQltyIN0xNlFgmB4IeDn8DrxASYnVuXP0y4KuWFeZ7zgjwf7rPgRbztfIKttv1pi8%2BSx4zTWFP0sDGNVAxxDcsRFEEFsNKH5IxjEJ1StspGBF3sgdFkh0OH5M0MPa7m8MGOqUB3WtOjL%2FBN7ifdGxjCbBeO4IHJbHM0xKuM3L46a9qPQSmePNfUPAdoBvCDwCCVr0o3O%2BSIljQCNJqbZ1NGXyFzf6P1tkP1t%2FdEPPAKd2zDhXOB783KDrdg5%2FXveJ%2FKczlflFaiyoc%2BByNLEunbg2Hu8Vyf2MbGpt7PX%2FEFzPWWUcE2jND1NasAMrI0ScSlu3d7rwqNawtuKwuruoOgETWu2IwUNYB&X-Amz-Signature=b18ca15e54657a76f4a6cccac31d20e4df9aa2653c0664850a04a99a13b4481e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
