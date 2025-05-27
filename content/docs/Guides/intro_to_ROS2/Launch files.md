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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DBKO3M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD987xB%2FlGAuW5byN502utW2mCze2Cywd5zNrxk0lUOvgIhANiFKPR%2FhcI8TZpcLSzJx657QXgmK%2BSyRb030aUkAPvFKv8DCFYQABoMNjM3NDIzMTgzODA1IgyI0aqZvQKF4%2BIAc%2Bsq3ANHRvRmN1hIfeC8OA6pt%2BdxnYRcsMxXJDbFMdsSyUcii0p3K%2FWN%2BEwgSbf078Hrhk8uB0OlSjco4r3h%2BTBbyKoFpPGWKmYt0aGLStnQ%2BEKc6xv3HCn4aNqFCVYRS0RTzx7IaW9jvV71OU2qfy9f5sVQK%2BQsuoqHVh1XQ9BQe%2Fd4ytWJO2wr1RK6Et1zuBVRyZXLH1LuPFFoXlYxIpyON5Lvwonl7KdHJwbY9CpP78HCE2omuZ0ewfNDYSBG2fAwhtfLnYeG6Cgkz%2BsCU5MCpy6puHgfdHM%2F%2BqiMaq2BmAGgOpX0W0NJuyxFO31saTuuDF5AN58Eshun0XLIH2PDtEL1HubjP2wdaj7psrFec5tF6tMLWgOtYEjPbxgYupEiZRa6xA6vBtNHmHZb13YR0GOP6KNHGgwxEOFmZF4eg955TMx%2B1U9%2Bcq2FrH%2BE8GZNA6CUWNd90WrKArbrLVlvqfK7oOcavNUWNGNCDMElGDWklspRFAbQe2Bva79K3EOnJ4GIy%2FZBnT%2BYDx5f4rv1%2FL7gvXFlCVz8wejvx9nMGdRY%2B%2F43kG5jkaqoe83hp1RL4k1tUtoM6YXFNSX7%2B%2BWLmfoY02P2m0sPCg70sRYjyiP%2BkNx3ouU%2FN91GAmF8hDDfkNXBBjqkAZLWt5UiceQJnshnXGJSj9dBoKd37Dr%2B43FvlCEw9o0aBzFr5CojC%2BeCAsI53ozuNppjCjMEJdIBnsBxL5uVz4uHZ6vDAQLWmTgqoGM%2BOAZnbaC1BWBUtj8wLfD6kYARyv1l3ZigUtrLLQTkOof%2BokE4ggZY6CoS0LBD3Dwi6C%2FoOTlKrQc1I3Qj1PjGJSI3Rr7JQq80%2Boc3cGz0MiV9bC270mz5&X-Amz-Signature=737780697609156ef4f2e3af728c80d6fe744591c637d2477ae0f2644ba28bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DBKO3M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD987xB%2FlGAuW5byN502utW2mCze2Cywd5zNrxk0lUOvgIhANiFKPR%2FhcI8TZpcLSzJx657QXgmK%2BSyRb030aUkAPvFKv8DCFYQABoMNjM3NDIzMTgzODA1IgyI0aqZvQKF4%2BIAc%2Bsq3ANHRvRmN1hIfeC8OA6pt%2BdxnYRcsMxXJDbFMdsSyUcii0p3K%2FWN%2BEwgSbf078Hrhk8uB0OlSjco4r3h%2BTBbyKoFpPGWKmYt0aGLStnQ%2BEKc6xv3HCn4aNqFCVYRS0RTzx7IaW9jvV71OU2qfy9f5sVQK%2BQsuoqHVh1XQ9BQe%2Fd4ytWJO2wr1RK6Et1zuBVRyZXLH1LuPFFoXlYxIpyON5Lvwonl7KdHJwbY9CpP78HCE2omuZ0ewfNDYSBG2fAwhtfLnYeG6Cgkz%2BsCU5MCpy6puHgfdHM%2F%2BqiMaq2BmAGgOpX0W0NJuyxFO31saTuuDF5AN58Eshun0XLIH2PDtEL1HubjP2wdaj7psrFec5tF6tMLWgOtYEjPbxgYupEiZRa6xA6vBtNHmHZb13YR0GOP6KNHGgwxEOFmZF4eg955TMx%2B1U9%2Bcq2FrH%2BE8GZNA6CUWNd90WrKArbrLVlvqfK7oOcavNUWNGNCDMElGDWklspRFAbQe2Bva79K3EOnJ4GIy%2FZBnT%2BYDx5f4rv1%2FL7gvXFlCVz8wejvx9nMGdRY%2B%2F43kG5jkaqoe83hp1RL4k1tUtoM6YXFNSX7%2B%2BWLmfoY02P2m0sPCg70sRYjyiP%2BkNx3ouU%2FN91GAmF8hDDfkNXBBjqkAZLWt5UiceQJnshnXGJSj9dBoKd37Dr%2B43FvlCEw9o0aBzFr5CojC%2BeCAsI53ozuNppjCjMEJdIBnsBxL5uVz4uHZ6vDAQLWmTgqoGM%2BOAZnbaC1BWBUtj8wLfD6kYARyv1l3ZigUtrLLQTkOof%2BokE4ggZY6CoS0LBD3Dwi6C%2FoOTlKrQc1I3Qj1PjGJSI3Rr7JQq80%2Boc3cGz0MiV9bC270mz5&X-Amz-Signature=7dd92c716971a9ea9ed4ab00953e1fd871066c6bbc8bf2df2387a57c6467e7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DBKO3M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD987xB%2FlGAuW5byN502utW2mCze2Cywd5zNrxk0lUOvgIhANiFKPR%2FhcI8TZpcLSzJx657QXgmK%2BSyRb030aUkAPvFKv8DCFYQABoMNjM3NDIzMTgzODA1IgyI0aqZvQKF4%2BIAc%2Bsq3ANHRvRmN1hIfeC8OA6pt%2BdxnYRcsMxXJDbFMdsSyUcii0p3K%2FWN%2BEwgSbf078Hrhk8uB0OlSjco4r3h%2BTBbyKoFpPGWKmYt0aGLStnQ%2BEKc6xv3HCn4aNqFCVYRS0RTzx7IaW9jvV71OU2qfy9f5sVQK%2BQsuoqHVh1XQ9BQe%2Fd4ytWJO2wr1RK6Et1zuBVRyZXLH1LuPFFoXlYxIpyON5Lvwonl7KdHJwbY9CpP78HCE2omuZ0ewfNDYSBG2fAwhtfLnYeG6Cgkz%2BsCU5MCpy6puHgfdHM%2F%2BqiMaq2BmAGgOpX0W0NJuyxFO31saTuuDF5AN58Eshun0XLIH2PDtEL1HubjP2wdaj7psrFec5tF6tMLWgOtYEjPbxgYupEiZRa6xA6vBtNHmHZb13YR0GOP6KNHGgwxEOFmZF4eg955TMx%2B1U9%2Bcq2FrH%2BE8GZNA6CUWNd90WrKArbrLVlvqfK7oOcavNUWNGNCDMElGDWklspRFAbQe2Bva79K3EOnJ4GIy%2FZBnT%2BYDx5f4rv1%2FL7gvXFlCVz8wejvx9nMGdRY%2B%2F43kG5jkaqoe83hp1RL4k1tUtoM6YXFNSX7%2B%2BWLmfoY02P2m0sPCg70sRYjyiP%2BkNx3ouU%2FN91GAmF8hDDfkNXBBjqkAZLWt5UiceQJnshnXGJSj9dBoKd37Dr%2B43FvlCEw9o0aBzFr5CojC%2BeCAsI53ozuNppjCjMEJdIBnsBxL5uVz4uHZ6vDAQLWmTgqoGM%2BOAZnbaC1BWBUtj8wLfD6kYARyv1l3ZigUtrLLQTkOof%2BokE4ggZY6CoS0LBD3Dwi6C%2FoOTlKrQc1I3Qj1PjGJSI3Rr7JQq80%2Boc3cGz0MiV9bC270mz5&X-Amz-Signature=5986c05aa0bf9b083525bb15bc214e9e2b32648ebf7533545591a5dfc3465911&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
