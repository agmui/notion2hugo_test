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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWUBLN3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1kGgscuzDin75V0DMcIOPlWPKNzsNyemdvLWREhGYQIhAO5AdBOjjnG%2BGVTFuyBf8sDdtDcEZJUlw0qAwSDEGWEXKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX9lAOA8qmzN%2B%2FR1cq3AO%2FKTsPusP%2BuaQu95Fp6OVi9BLo%2F7XxJvDS%2Bh8QtqdX9zNVTIhuDOyYvl9J6sqNia%2BLOdRix2sNirFCjcA4C33YwxZP8YJMO%2FkJyFdxUESFS9Ml%2FibWdZw67hrIgdbIoSjPEGZ8y61GiEVd955TKflyvlIWVBgwloIUocfbwBbopHmpskoTZR6stycrYb5XxunDRIX7kVK1KQN1w08lUnoXL1scIEN3NnMbetwWiesWflklFGF0Wn6Y4JhhwYR%2BlJLhVl9NdhSQ7BI9lxE%2Bk7FTehu%2FiT2lPPa38tVO%2F3Gu3OvYQ7XaW1uqN7KgT1%2FuKdL951Kdiqwvt5U2AXzuy4whWZf4MJdvAV2lwhEI4ZPYFPmPt1s2x49UpzKqU8Pnms1d8HMZryV8eQ6XPBfzQNYbIm8sYUSKmsz0PsWwGksQvkouOeJ4mHt0YC1pOtCI0WVDhj2T%2FrY%2BmkH2YXc9k98Wu9MziAhdN3Rridr%2F7Ar9EMm0WnDkRPshckInunQfP%2FsXM%2FcfGEE8dXiFp%2FQXPeVccxxy1Tt6CbJ3P74R0N2DrIaMVJAjjuaObkFSKXkNpPHF8otIQjA6fVWhI%2BsnmXjdXihwixsPgUL%2Fc3b3aHtoxZzvfErKtLLmTcCTfjC3veK9BjqkAf7i0qJgG1ADtsaAsaqS9nMB618u%2FlNtJjnlrM7YmGefpvcVpmQowy2MzCnmbCj9p3c2rfotDPCiYcb32ukmV%2F4%2BeLSMyGarvqeDh4dxK4NMryptYk6L4EQovzk2wl4dlAGWhg29gaE%2B%2FcMGcJDKA2yPzo68G3tFiwRoP7%2F8pZ4q3Sx1lmCCWPcNs6rh9T%2FJF0r%2FbCoyfVH%2FafI7XXGazoS1aQ%2B7&X-Amz-Signature=a6fa838a2a954c263cf33d9e7830dd684e840c835241d2b495bef19033aa95af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWUBLN3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1kGgscuzDin75V0DMcIOPlWPKNzsNyemdvLWREhGYQIhAO5AdBOjjnG%2BGVTFuyBf8sDdtDcEZJUlw0qAwSDEGWEXKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX9lAOA8qmzN%2B%2FR1cq3AO%2FKTsPusP%2BuaQu95Fp6OVi9BLo%2F7XxJvDS%2Bh8QtqdX9zNVTIhuDOyYvl9J6sqNia%2BLOdRix2sNirFCjcA4C33YwxZP8YJMO%2FkJyFdxUESFS9Ml%2FibWdZw67hrIgdbIoSjPEGZ8y61GiEVd955TKflyvlIWVBgwloIUocfbwBbopHmpskoTZR6stycrYb5XxunDRIX7kVK1KQN1w08lUnoXL1scIEN3NnMbetwWiesWflklFGF0Wn6Y4JhhwYR%2BlJLhVl9NdhSQ7BI9lxE%2Bk7FTehu%2FiT2lPPa38tVO%2F3Gu3OvYQ7XaW1uqN7KgT1%2FuKdL951Kdiqwvt5U2AXzuy4whWZf4MJdvAV2lwhEI4ZPYFPmPt1s2x49UpzKqU8Pnms1d8HMZryV8eQ6XPBfzQNYbIm8sYUSKmsz0PsWwGksQvkouOeJ4mHt0YC1pOtCI0WVDhj2T%2FrY%2BmkH2YXc9k98Wu9MziAhdN3Rridr%2F7Ar9EMm0WnDkRPshckInunQfP%2FsXM%2FcfGEE8dXiFp%2FQXPeVccxxy1Tt6CbJ3P74R0N2DrIaMVJAjjuaObkFSKXkNpPHF8otIQjA6fVWhI%2BsnmXjdXihwixsPgUL%2Fc3b3aHtoxZzvfErKtLLmTcCTfjC3veK9BjqkAf7i0qJgG1ADtsaAsaqS9nMB618u%2FlNtJjnlrM7YmGefpvcVpmQowy2MzCnmbCj9p3c2rfotDPCiYcb32ukmV%2F4%2BeLSMyGarvqeDh4dxK4NMryptYk6L4EQovzk2wl4dlAGWhg29gaE%2B%2FcMGcJDKA2yPzo68G3tFiwRoP7%2F8pZ4q3Sx1lmCCWPcNs6rh9T%2FJF0r%2FbCoyfVH%2FafI7XXGazoS1aQ%2B7&X-Amz-Signature=e91abad2c443ef787fdf0892ac98cd7e1ae39d42532bde5142044e34cbe05103&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWUBLN3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1kGgscuzDin75V0DMcIOPlWPKNzsNyemdvLWREhGYQIhAO5AdBOjjnG%2BGVTFuyBf8sDdtDcEZJUlw0qAwSDEGWEXKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX9lAOA8qmzN%2B%2FR1cq3AO%2FKTsPusP%2BuaQu95Fp6OVi9BLo%2F7XxJvDS%2Bh8QtqdX9zNVTIhuDOyYvl9J6sqNia%2BLOdRix2sNirFCjcA4C33YwxZP8YJMO%2FkJyFdxUESFS9Ml%2FibWdZw67hrIgdbIoSjPEGZ8y61GiEVd955TKflyvlIWVBgwloIUocfbwBbopHmpskoTZR6stycrYb5XxunDRIX7kVK1KQN1w08lUnoXL1scIEN3NnMbetwWiesWflklFGF0Wn6Y4JhhwYR%2BlJLhVl9NdhSQ7BI9lxE%2Bk7FTehu%2FiT2lPPa38tVO%2F3Gu3OvYQ7XaW1uqN7KgT1%2FuKdL951Kdiqwvt5U2AXzuy4whWZf4MJdvAV2lwhEI4ZPYFPmPt1s2x49UpzKqU8Pnms1d8HMZryV8eQ6XPBfzQNYbIm8sYUSKmsz0PsWwGksQvkouOeJ4mHt0YC1pOtCI0WVDhj2T%2FrY%2BmkH2YXc9k98Wu9MziAhdN3Rridr%2F7Ar9EMm0WnDkRPshckInunQfP%2FsXM%2FcfGEE8dXiFp%2FQXPeVccxxy1Tt6CbJ3P74R0N2DrIaMVJAjjuaObkFSKXkNpPHF8otIQjA6fVWhI%2BsnmXjdXihwixsPgUL%2Fc3b3aHtoxZzvfErKtLLmTcCTfjC3veK9BjqkAf7i0qJgG1ADtsaAsaqS9nMB618u%2FlNtJjnlrM7YmGefpvcVpmQowy2MzCnmbCj9p3c2rfotDPCiYcb32ukmV%2F4%2BeLSMyGarvqeDh4dxK4NMryptYk6L4EQovzk2wl4dlAGWhg29gaE%2B%2FcMGcJDKA2yPzo68G3tFiwRoP7%2F8pZ4q3Sx1lmCCWPcNs6rh9T%2FJF0r%2FbCoyfVH%2FafI7XXGazoS1aQ%2B7&X-Amz-Signature=ad6ac8cd8a016acba2836258071c1dbb28860be5ddb399c76ee6799d898bba35&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
