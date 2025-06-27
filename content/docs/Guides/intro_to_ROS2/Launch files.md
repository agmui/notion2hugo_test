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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJFY74N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHRdjCnK9tVrqj59wGrIa7DHUgkZ0YhZoL%2F64weaFXK8AiBS9Qz4ZihQi5jJvE%2B58zQN2w3mtNJgllXZCwgePCRehSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMtyIfVFDY7UWaiaxIKtwDfhhCgmdPa443ZXYNMT6hDRJDBv%2BQ3PF6%2FsHSw0ilohnn5cIJ5k8KCgyav8a3U6RpwyPyFhvBl0HLg5H3GCNwH9uGkhAFUPLWsEggJ0bOPd6NwddQw1KUJ1cZa209Jt7xZnBJYgStClXdU6shvAc9mApd9QhZ5%2BRaTf2UwX%2BBbDZc%2B%2FBEX9L4jk%2FgQb%2FV2PyZWmveLt9CwP2Dl9ZEUdOH5y%2F6F0H7x81U%2FRhAlxwsDexY5bC9I%2BiM4aNev33MBMh6DpvyXi%2FLmNxdokS3jtde7HZelfGKK5G8FBYWqix2jKzj4MCQFgwnxuY4%2F4kpHinqYiBqe%2FI1z9gGYa8g2df7DDOFXH6n0BAchzK1HwNcYi2cLeWWckIM88sa5v1zzK9%2B%2Fg5a4EQ%2FCFKaerU2SSb5p%2BrAmIh44yb11XFXHyeKWyV9ncYX5ANqiA2vyHeZjViiBVylKvGLKre4wA84PzOTNthvdHZ4SolBMzuu6VJY63dksqHq2CB1LXMAjQfz3XNGtfm1mnJUD1mm6%2FDwKoGXGQF4ySfVcKC657FdMORssIweqK9%2F9VNyWIInvFuaSybbZL61FImT%2B4WvDlCC6Dx8SJ9OXkyY9ZZapEQFH1W7y2qs0BoqMtKEbD5PFDIw%2Fsr3wgY6pgGb2KUwZ8z2xsL084%2B%2Bla9l%2Fr4XylVLKERk%2FsORA3MSXJspr3tE1yishRs08%2FWfrMlDwIQsnS4E7nYoDuf7BhADwvs0jFl3WK7KE%2FIOIS3ckaDZI%2FK64cUjVLRkZtJOWJAhspz5GRsOPNngCJsb8biZ%2BOP4SVTScFsueECKR9prxAvHq1seNirpbnyGctvOqTAdt1pcyTXDpHgbt7SiFT17ie2J7nrd&X-Amz-Signature=212dcad041ea3222498f920883a11a1f742f1909d2372f1c7d9a71db88940c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJFY74N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHRdjCnK9tVrqj59wGrIa7DHUgkZ0YhZoL%2F64weaFXK8AiBS9Qz4ZihQi5jJvE%2B58zQN2w3mtNJgllXZCwgePCRehSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMtyIfVFDY7UWaiaxIKtwDfhhCgmdPa443ZXYNMT6hDRJDBv%2BQ3PF6%2FsHSw0ilohnn5cIJ5k8KCgyav8a3U6RpwyPyFhvBl0HLg5H3GCNwH9uGkhAFUPLWsEggJ0bOPd6NwddQw1KUJ1cZa209Jt7xZnBJYgStClXdU6shvAc9mApd9QhZ5%2BRaTf2UwX%2BBbDZc%2B%2FBEX9L4jk%2FgQb%2FV2PyZWmveLt9CwP2Dl9ZEUdOH5y%2F6F0H7x81U%2FRhAlxwsDexY5bC9I%2BiM4aNev33MBMh6DpvyXi%2FLmNxdokS3jtde7HZelfGKK5G8FBYWqix2jKzj4MCQFgwnxuY4%2F4kpHinqYiBqe%2FI1z9gGYa8g2df7DDOFXH6n0BAchzK1HwNcYi2cLeWWckIM88sa5v1zzK9%2B%2Fg5a4EQ%2FCFKaerU2SSb5p%2BrAmIh44yb11XFXHyeKWyV9ncYX5ANqiA2vyHeZjViiBVylKvGLKre4wA84PzOTNthvdHZ4SolBMzuu6VJY63dksqHq2CB1LXMAjQfz3XNGtfm1mnJUD1mm6%2FDwKoGXGQF4ySfVcKC657FdMORssIweqK9%2F9VNyWIInvFuaSybbZL61FImT%2B4WvDlCC6Dx8SJ9OXkyY9ZZapEQFH1W7y2qs0BoqMtKEbD5PFDIw%2Fsr3wgY6pgGb2KUwZ8z2xsL084%2B%2Bla9l%2Fr4XylVLKERk%2FsORA3MSXJspr3tE1yishRs08%2FWfrMlDwIQsnS4E7nYoDuf7BhADwvs0jFl3WK7KE%2FIOIS3ckaDZI%2FK64cUjVLRkZtJOWJAhspz5GRsOPNngCJsb8biZ%2BOP4SVTScFsueECKR9prxAvHq1seNirpbnyGctvOqTAdt1pcyTXDpHgbt7SiFT17ie2J7nrd&X-Amz-Signature=70d689db50cdb49177c2ec8b07c1f65f07f6d807292fabbb22bc96621da7bc0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJFY74N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHRdjCnK9tVrqj59wGrIa7DHUgkZ0YhZoL%2F64weaFXK8AiBS9Qz4ZihQi5jJvE%2B58zQN2w3mtNJgllXZCwgePCRehSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMtyIfVFDY7UWaiaxIKtwDfhhCgmdPa443ZXYNMT6hDRJDBv%2BQ3PF6%2FsHSw0ilohnn5cIJ5k8KCgyav8a3U6RpwyPyFhvBl0HLg5H3GCNwH9uGkhAFUPLWsEggJ0bOPd6NwddQw1KUJ1cZa209Jt7xZnBJYgStClXdU6shvAc9mApd9QhZ5%2BRaTf2UwX%2BBbDZc%2B%2FBEX9L4jk%2FgQb%2FV2PyZWmveLt9CwP2Dl9ZEUdOH5y%2F6F0H7x81U%2FRhAlxwsDexY5bC9I%2BiM4aNev33MBMh6DpvyXi%2FLmNxdokS3jtde7HZelfGKK5G8FBYWqix2jKzj4MCQFgwnxuY4%2F4kpHinqYiBqe%2FI1z9gGYa8g2df7DDOFXH6n0BAchzK1HwNcYi2cLeWWckIM88sa5v1zzK9%2B%2Fg5a4EQ%2FCFKaerU2SSb5p%2BrAmIh44yb11XFXHyeKWyV9ncYX5ANqiA2vyHeZjViiBVylKvGLKre4wA84PzOTNthvdHZ4SolBMzuu6VJY63dksqHq2CB1LXMAjQfz3XNGtfm1mnJUD1mm6%2FDwKoGXGQF4ySfVcKC657FdMORssIweqK9%2F9VNyWIInvFuaSybbZL61FImT%2B4WvDlCC6Dx8SJ9OXkyY9ZZapEQFH1W7y2qs0BoqMtKEbD5PFDIw%2Fsr3wgY6pgGb2KUwZ8z2xsL084%2B%2Bla9l%2Fr4XylVLKERk%2FsORA3MSXJspr3tE1yishRs08%2FWfrMlDwIQsnS4E7nYoDuf7BhADwvs0jFl3WK7KE%2FIOIS3ckaDZI%2FK64cUjVLRkZtJOWJAhspz5GRsOPNngCJsb8biZ%2BOP4SVTScFsueECKR9prxAvHq1seNirpbnyGctvOqTAdt1pcyTXDpHgbt7SiFT17ie2J7nrd&X-Amz-Signature=9fc7fa0f9617b3987fd04fa39af198d984d05c8cabbd391fd06dfea56ac3eb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
