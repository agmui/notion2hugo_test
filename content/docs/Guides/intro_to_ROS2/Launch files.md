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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWO4G7W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIB5S%2FXs%2BfkpC%2BiuhobrWpcve8vcdFv2Djsu4eaL51oGiAiAMHruHF5qpLvmJCqPgYiYCM8ec%2BoXaShKNPJLoDMZuOir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMLeztM1d08RVGXuhPKtwD8nNhv5SaMLsfM6xt3BQPoUSWzPSYvsx8HaRWew7MHqg92fx28j5REW03lPnlmdWLseXgoZUjcx0Scu0X9yYkKkFPZrdXRTUGzqoC%2B7E1AK0fCm5sDI%2F4AYzgYfWNKvldrTfyQxN7SNzZVkZO5RJVmz5uMNov%2FYSJOm6PlJvd8KmS%2Ffb3hFMN0trZ7DRDycwn7x1gyTbebJXJ5i28Q1hfit9nETR%2F08QO1HsJ4wRzvK5Sc3baFLxGp4%2FyOcvmiYX6MP6aVgdYeIqfl8A1Tze4gW6s53ulp1JHk%2BEh6QrFwXTaSYk6Vrzi76viUrAKSulZCJSbanCmc70O06vxtVoYQB0h%2F3By4pPfPHdAxKVlhJQk6hIxwACxVwHCQk9QN1ZrBzpL%2BIfDqNHhcQYqKgL%2Fku7vYApWC55MJC%2BZKA6Hb64du%2Foqh9ZoL2FgPfKqHg%2F9VU%2Bvqn4362V5Y8Zlc1CKgzaqwvw0NRooKAJM4IEdn4OT4M%2FfYScue1kU%2FnM%2BtNUBZfoVjfWiX6mrSOiCwVEBBjvTunBfoWfXL8dd7%2FLib46WhHn5C6wK27qGeBXSMo%2BceE29k%2FIGQhrIjL5BT%2B5pxs%2Ba665YCPhmn24iKgOu83LEiY%2FtgW4oJWONL%2FUwoOHjwwY6pgHFUXKnwGCoj8Jyx4Idbpoho1ORxFLIz7hJCNnM2wS4tnyEBrVnpoH8Ya5Ra63OYhnrhi6LsXMEW54UPH9gi7u6wKLoa1G2vDvD0zFGczv1yzHu1uOy0msANtIeJ7M7AaED%2BDGO0zfS7ZQ6UHgV5rW%2BruFaqyAaiRMsLp01IrNFHAFtUqOx%2FhXeyB1Rr%2Fi6J61SIAKRt9C7QgfIZNbLbvsK4rwrScn7&X-Amz-Signature=b8eeaf0404f7ca7a314a56e17514c937e59d83033e08bf15ea1f34f54611b0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWO4G7W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIB5S%2FXs%2BfkpC%2BiuhobrWpcve8vcdFv2Djsu4eaL51oGiAiAMHruHF5qpLvmJCqPgYiYCM8ec%2BoXaShKNPJLoDMZuOir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMLeztM1d08RVGXuhPKtwD8nNhv5SaMLsfM6xt3BQPoUSWzPSYvsx8HaRWew7MHqg92fx28j5REW03lPnlmdWLseXgoZUjcx0Scu0X9yYkKkFPZrdXRTUGzqoC%2B7E1AK0fCm5sDI%2F4AYzgYfWNKvldrTfyQxN7SNzZVkZO5RJVmz5uMNov%2FYSJOm6PlJvd8KmS%2Ffb3hFMN0trZ7DRDycwn7x1gyTbebJXJ5i28Q1hfit9nETR%2F08QO1HsJ4wRzvK5Sc3baFLxGp4%2FyOcvmiYX6MP6aVgdYeIqfl8A1Tze4gW6s53ulp1JHk%2BEh6QrFwXTaSYk6Vrzi76viUrAKSulZCJSbanCmc70O06vxtVoYQB0h%2F3By4pPfPHdAxKVlhJQk6hIxwACxVwHCQk9QN1ZrBzpL%2BIfDqNHhcQYqKgL%2Fku7vYApWC55MJC%2BZKA6Hb64du%2Foqh9ZoL2FgPfKqHg%2F9VU%2Bvqn4362V5Y8Zlc1CKgzaqwvw0NRooKAJM4IEdn4OT4M%2FfYScue1kU%2FnM%2BtNUBZfoVjfWiX6mrSOiCwVEBBjvTunBfoWfXL8dd7%2FLib46WhHn5C6wK27qGeBXSMo%2BceE29k%2FIGQhrIjL5BT%2B5pxs%2Ba665YCPhmn24iKgOu83LEiY%2FtgW4oJWONL%2FUwoOHjwwY6pgHFUXKnwGCoj8Jyx4Idbpoho1ORxFLIz7hJCNnM2wS4tnyEBrVnpoH8Ya5Ra63OYhnrhi6LsXMEW54UPH9gi7u6wKLoa1G2vDvD0zFGczv1yzHu1uOy0msANtIeJ7M7AaED%2BDGO0zfS7ZQ6UHgV5rW%2BruFaqyAaiRMsLp01IrNFHAFtUqOx%2FhXeyB1Rr%2Fi6J61SIAKRt9C7QgfIZNbLbvsK4rwrScn7&X-Amz-Signature=44485201cff8f7ae7a9868fc07fc2ee285d51db5cd7a6e9112757f6cc47cf0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWO4G7W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIB5S%2FXs%2BfkpC%2BiuhobrWpcve8vcdFv2Djsu4eaL51oGiAiAMHruHF5qpLvmJCqPgYiYCM8ec%2BoXaShKNPJLoDMZuOir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMLeztM1d08RVGXuhPKtwD8nNhv5SaMLsfM6xt3BQPoUSWzPSYvsx8HaRWew7MHqg92fx28j5REW03lPnlmdWLseXgoZUjcx0Scu0X9yYkKkFPZrdXRTUGzqoC%2B7E1AK0fCm5sDI%2F4AYzgYfWNKvldrTfyQxN7SNzZVkZO5RJVmz5uMNov%2FYSJOm6PlJvd8KmS%2Ffb3hFMN0trZ7DRDycwn7x1gyTbebJXJ5i28Q1hfit9nETR%2F08QO1HsJ4wRzvK5Sc3baFLxGp4%2FyOcvmiYX6MP6aVgdYeIqfl8A1Tze4gW6s53ulp1JHk%2BEh6QrFwXTaSYk6Vrzi76viUrAKSulZCJSbanCmc70O06vxtVoYQB0h%2F3By4pPfPHdAxKVlhJQk6hIxwACxVwHCQk9QN1ZrBzpL%2BIfDqNHhcQYqKgL%2Fku7vYApWC55MJC%2BZKA6Hb64du%2Foqh9ZoL2FgPfKqHg%2F9VU%2Bvqn4362V5Y8Zlc1CKgzaqwvw0NRooKAJM4IEdn4OT4M%2FfYScue1kU%2FnM%2BtNUBZfoVjfWiX6mrSOiCwVEBBjvTunBfoWfXL8dd7%2FLib46WhHn5C6wK27qGeBXSMo%2BceE29k%2FIGQhrIjL5BT%2B5pxs%2Ba665YCPhmn24iKgOu83LEiY%2FtgW4oJWONL%2FUwoOHjwwY6pgHFUXKnwGCoj8Jyx4Idbpoho1ORxFLIz7hJCNnM2wS4tnyEBrVnpoH8Ya5Ra63OYhnrhi6LsXMEW54UPH9gi7u6wKLoa1G2vDvD0zFGczv1yzHu1uOy0msANtIeJ7M7AaED%2BDGO0zfS7ZQ6UHgV5rW%2BruFaqyAaiRMsLp01IrNFHAFtUqOx%2FhXeyB1Rr%2Fi6J61SIAKRt9C7QgfIZNbLbvsK4rwrScn7&X-Amz-Signature=8549c488107048ad37e1eaf96ac9b874721481c46b0ef50676c02ff6d722707c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
