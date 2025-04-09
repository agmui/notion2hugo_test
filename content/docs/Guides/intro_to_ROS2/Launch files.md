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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JIHSSJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCK4E5ciVPcJ9xRMwZ0tHzOKQ929mubUTLVcQROTxtVmQIhAJIWYT1JzqRkgV5YUfJqJHzvrTWWvmHFce30fEwP5Fr%2BKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywEsri7v8HD5A5Q7sq3AMxER0nvayzMf%2BtiKE7WvL4QgzbWsjwAcU%2BTzzG0Y1wPM%2BVquv3QDEI8rKv9CSvKc8b6X4hlaS4V5Hw4nQwKCituNmMgvAoNzNqQ64ZXhAgjkzgQtKEMFVtqRfbc42AFumMMG2a9e%2F3pJBMHE9Wv4j62tomkz6usFeHJpsVE6KLuEYmm0z3Ggl9i2zul4lw%2Fa%2FgpoiW04ff5ctT8HntUNrRMH2mqpxcCYRGmpeVJ9643t%2F0IRjwqGSc5dEYghWFVSrdP5FyZTPi%2B5C1KTn7EPaRKBHldHNjdrukX8%2BQSAnZEirZ9qNjsV%2BhcxVQycGfKi7Ll3t3LFiXYYzpQRBif9FhPLbNw8wZg%2FZJcfJc9LlKQOYGpV8kiygzDHr%2B5aklf3aCqX%2BdkIWipRe6fls6zdqEfQlMboQijNQRf5vJ%2BI1St7vEpcvMwVAhBDJElBy4Nsf%2Bw7FbL19aAqxg5oolnuWyDBt9yF0IAI8%2F77X6%2BGfjnReOR6SWHT12JmwreqhKkeZsEOQ87jEMsv9cyGbYmO5GNTd5zyYsJT966j%2FCLD%2FihH6C1VQYmwNi%2Bxv3ACk9%2BlrliDlogh9a7hdAviyBZFMs1UAo7mFRX%2FDe3Vy2CYM5OsG%2Bm577h6GdwCrE%2FTCj%2FNi%2FBjqkAafCHK71%2FLHy%2FpLlYeZGH5msxrfXjHXKRMv5UrpEuVpLXz0%2BF8R3ZFxLh2%2F9%2F7WtODTthS1qpfrYu%2BJjeW7cdsCwd%2B8eCjullSCVbIj1Ig6v4iteasIDs3PsRRETREUOtyGXzeKOgFkgxNCWBZe1J7T3ZjbQG%2FT8OoMQkS74WXnCMzhDqV7hpo7n4YQnWOjsaOSZ2LfRgnZtYgnSRgDp6B%2BrB99L&X-Amz-Signature=8c0ef10ca3959ffaeba4a68b688d7a50f09325730a5689e6890a51fbfb73c267&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JIHSSJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCK4E5ciVPcJ9xRMwZ0tHzOKQ929mubUTLVcQROTxtVmQIhAJIWYT1JzqRkgV5YUfJqJHzvrTWWvmHFce30fEwP5Fr%2BKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywEsri7v8HD5A5Q7sq3AMxER0nvayzMf%2BtiKE7WvL4QgzbWsjwAcU%2BTzzG0Y1wPM%2BVquv3QDEI8rKv9CSvKc8b6X4hlaS4V5Hw4nQwKCituNmMgvAoNzNqQ64ZXhAgjkzgQtKEMFVtqRfbc42AFumMMG2a9e%2F3pJBMHE9Wv4j62tomkz6usFeHJpsVE6KLuEYmm0z3Ggl9i2zul4lw%2Fa%2FgpoiW04ff5ctT8HntUNrRMH2mqpxcCYRGmpeVJ9643t%2F0IRjwqGSc5dEYghWFVSrdP5FyZTPi%2B5C1KTn7EPaRKBHldHNjdrukX8%2BQSAnZEirZ9qNjsV%2BhcxVQycGfKi7Ll3t3LFiXYYzpQRBif9FhPLbNw8wZg%2FZJcfJc9LlKQOYGpV8kiygzDHr%2B5aklf3aCqX%2BdkIWipRe6fls6zdqEfQlMboQijNQRf5vJ%2BI1St7vEpcvMwVAhBDJElBy4Nsf%2Bw7FbL19aAqxg5oolnuWyDBt9yF0IAI8%2F77X6%2BGfjnReOR6SWHT12JmwreqhKkeZsEOQ87jEMsv9cyGbYmO5GNTd5zyYsJT966j%2FCLD%2FihH6C1VQYmwNi%2Bxv3ACk9%2BlrliDlogh9a7hdAviyBZFMs1UAo7mFRX%2FDe3Vy2CYM5OsG%2Bm577h6GdwCrE%2FTCj%2FNi%2FBjqkAafCHK71%2FLHy%2FpLlYeZGH5msxrfXjHXKRMv5UrpEuVpLXz0%2BF8R3ZFxLh2%2F9%2F7WtODTthS1qpfrYu%2BJjeW7cdsCwd%2B8eCjullSCVbIj1Ig6v4iteasIDs3PsRRETREUOtyGXzeKOgFkgxNCWBZe1J7T3ZjbQG%2FT8OoMQkS74WXnCMzhDqV7hpo7n4YQnWOjsaOSZ2LfRgnZtYgnSRgDp6B%2BrB99L&X-Amz-Signature=201a7c318d61c73451b0abee847d8562ab4be30e5232b4bb4f92fd02eb6fc0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JIHSSJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCK4E5ciVPcJ9xRMwZ0tHzOKQ929mubUTLVcQROTxtVmQIhAJIWYT1JzqRkgV5YUfJqJHzvrTWWvmHFce30fEwP5Fr%2BKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywEsri7v8HD5A5Q7sq3AMxER0nvayzMf%2BtiKE7WvL4QgzbWsjwAcU%2BTzzG0Y1wPM%2BVquv3QDEI8rKv9CSvKc8b6X4hlaS4V5Hw4nQwKCituNmMgvAoNzNqQ64ZXhAgjkzgQtKEMFVtqRfbc42AFumMMG2a9e%2F3pJBMHE9Wv4j62tomkz6usFeHJpsVE6KLuEYmm0z3Ggl9i2zul4lw%2Fa%2FgpoiW04ff5ctT8HntUNrRMH2mqpxcCYRGmpeVJ9643t%2F0IRjwqGSc5dEYghWFVSrdP5FyZTPi%2B5C1KTn7EPaRKBHldHNjdrukX8%2BQSAnZEirZ9qNjsV%2BhcxVQycGfKi7Ll3t3LFiXYYzpQRBif9FhPLbNw8wZg%2FZJcfJc9LlKQOYGpV8kiygzDHr%2B5aklf3aCqX%2BdkIWipRe6fls6zdqEfQlMboQijNQRf5vJ%2BI1St7vEpcvMwVAhBDJElBy4Nsf%2Bw7FbL19aAqxg5oolnuWyDBt9yF0IAI8%2F77X6%2BGfjnReOR6SWHT12JmwreqhKkeZsEOQ87jEMsv9cyGbYmO5GNTd5zyYsJT966j%2FCLD%2FihH6C1VQYmwNi%2Bxv3ACk9%2BlrliDlogh9a7hdAviyBZFMs1UAo7mFRX%2FDe3Vy2CYM5OsG%2Bm577h6GdwCrE%2FTCj%2FNi%2FBjqkAafCHK71%2FLHy%2FpLlYeZGH5msxrfXjHXKRMv5UrpEuVpLXz0%2BF8R3ZFxLh2%2F9%2F7WtODTthS1qpfrYu%2BJjeW7cdsCwd%2B8eCjullSCVbIj1Ig6v4iteasIDs3PsRRETREUOtyGXzeKOgFkgxNCWBZe1J7T3ZjbQG%2FT8OoMQkS74WXnCMzhDqV7hpo7n4YQnWOjsaOSZ2LfRgnZtYgnSRgDp6B%2BrB99L&X-Amz-Signature=009fd7ae1d6920d1f2e278060ef023c035d43904a95caeea2174644a602c2530&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
