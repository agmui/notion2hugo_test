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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWLYPC3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfQYWEjqC6Hz3P%2B2zD9vMXpptTCSAU0gIY4mdTx944uAiEAlV86D%2BuAQ7G8SVnKo5RqEInnLIiO77hZGtQk36s5vHYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOMk1rj%2FdciQD7LgUircAxiJG6fDI0w77AwmvCSSjIBj%2Fnvl2G%2BDZW7LUTxUIYLjb0YP2wBzV68XcbQGMdNnyccNiCR5SIldmIL90EtkT2CsELApkeg6gY3%2BdetcROkeOHIVe73nOc7bAbRK%2F8IUtsC1frVOlPiDgUTq6BlQ4h%2Fpt3XYvmzQ8UUOpveMCxAD9Uy2REQT4FjroHLVtmWbMuHKFbG820FWsI0zyKz2p8DuOUTxGnynnaG5GbT9c%2Fy1hvRQkISQYVYd4EZLLHB9YQ1oEeC%2Bx3tTaPwc76s8pdRHWlGtX2%2Fb%2FnzW5T97ORT%2BvolldMueK70%2BsUx2%2FT9k3XB21jcA5IYZjTA%2BikIDzdHP%2F8BjjVPREo8w4XLyMaku3m95XV88zWwCXtj%2F8Kds8uPqyZ1wkKvp8AsKlxSZWL2sGssB5ZJObTYxTBEPRQLVWF7adIANJTv4LZPBQomPTZURFy280Gk4RfoT28efKJ2iTtJu2EOof2Bes7V%2FcB1ccZ8snRkwHoD6rYkAmmBmPGv7ObCxFFlYAJ5E9dwqDwwQedMShnQKYM8iODlcR3uJwXwjK72GfSZFzg7YT6U67WkcVqp%2FLTXXLXYj%2FlKNKyTQv9L5cp%2BSb2ZD6xbh0OgvuPyqck1E8SDcy4v8MP%2BPnsEGOqUBxIzo3q13FvNVWUkI1rUCwGkwDnVXooLmvb3PoW%2FfwdV6lttgpFqcX1djIDXf0h8TsFM%2FoFUNtn3BUNkf8O%2BuxB%2B62e%2BQ6Jvcq8iJ6MdjK2XUg4aeTjyNaurzGNUGsbWEo%2B2MLI3DwHfDminNDF5iweCu5N0r%2F5AxqFwIaLtOofB9wUsxqR%2F5lFwZjcE5F3Xwjuoa%2FtAwthqp3j3YuawwGsMTOfab&X-Amz-Signature=8f795cf544e3a232853e18c2cd2a5ed940adc949fd50248685ede04b86f60116&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWLYPC3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfQYWEjqC6Hz3P%2B2zD9vMXpptTCSAU0gIY4mdTx944uAiEAlV86D%2BuAQ7G8SVnKo5RqEInnLIiO77hZGtQk36s5vHYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOMk1rj%2FdciQD7LgUircAxiJG6fDI0w77AwmvCSSjIBj%2Fnvl2G%2BDZW7LUTxUIYLjb0YP2wBzV68XcbQGMdNnyccNiCR5SIldmIL90EtkT2CsELApkeg6gY3%2BdetcROkeOHIVe73nOc7bAbRK%2F8IUtsC1frVOlPiDgUTq6BlQ4h%2Fpt3XYvmzQ8UUOpveMCxAD9Uy2REQT4FjroHLVtmWbMuHKFbG820FWsI0zyKz2p8DuOUTxGnynnaG5GbT9c%2Fy1hvRQkISQYVYd4EZLLHB9YQ1oEeC%2Bx3tTaPwc76s8pdRHWlGtX2%2Fb%2FnzW5T97ORT%2BvolldMueK70%2BsUx2%2FT9k3XB21jcA5IYZjTA%2BikIDzdHP%2F8BjjVPREo8w4XLyMaku3m95XV88zWwCXtj%2F8Kds8uPqyZ1wkKvp8AsKlxSZWL2sGssB5ZJObTYxTBEPRQLVWF7adIANJTv4LZPBQomPTZURFy280Gk4RfoT28efKJ2iTtJu2EOof2Bes7V%2FcB1ccZ8snRkwHoD6rYkAmmBmPGv7ObCxFFlYAJ5E9dwqDwwQedMShnQKYM8iODlcR3uJwXwjK72GfSZFzg7YT6U67WkcVqp%2FLTXXLXYj%2FlKNKyTQv9L5cp%2BSb2ZD6xbh0OgvuPyqck1E8SDcy4v8MP%2BPnsEGOqUBxIzo3q13FvNVWUkI1rUCwGkwDnVXooLmvb3PoW%2FfwdV6lttgpFqcX1djIDXf0h8TsFM%2FoFUNtn3BUNkf8O%2BuxB%2B62e%2BQ6Jvcq8iJ6MdjK2XUg4aeTjyNaurzGNUGsbWEo%2B2MLI3DwHfDminNDF5iweCu5N0r%2F5AxqFwIaLtOofB9wUsxqR%2F5lFwZjcE5F3Xwjuoa%2FtAwthqp3j3YuawwGsMTOfab&X-Amz-Signature=5a078f256fb6ddb997af36c768f6eff8f4d0126a4fd72fa44d13df09b37b3347&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWLYPC3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfQYWEjqC6Hz3P%2B2zD9vMXpptTCSAU0gIY4mdTx944uAiEAlV86D%2BuAQ7G8SVnKo5RqEInnLIiO77hZGtQk36s5vHYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOMk1rj%2FdciQD7LgUircAxiJG6fDI0w77AwmvCSSjIBj%2Fnvl2G%2BDZW7LUTxUIYLjb0YP2wBzV68XcbQGMdNnyccNiCR5SIldmIL90EtkT2CsELApkeg6gY3%2BdetcROkeOHIVe73nOc7bAbRK%2F8IUtsC1frVOlPiDgUTq6BlQ4h%2Fpt3XYvmzQ8UUOpveMCxAD9Uy2REQT4FjroHLVtmWbMuHKFbG820FWsI0zyKz2p8DuOUTxGnynnaG5GbT9c%2Fy1hvRQkISQYVYd4EZLLHB9YQ1oEeC%2Bx3tTaPwc76s8pdRHWlGtX2%2Fb%2FnzW5T97ORT%2BvolldMueK70%2BsUx2%2FT9k3XB21jcA5IYZjTA%2BikIDzdHP%2F8BjjVPREo8w4XLyMaku3m95XV88zWwCXtj%2F8Kds8uPqyZ1wkKvp8AsKlxSZWL2sGssB5ZJObTYxTBEPRQLVWF7adIANJTv4LZPBQomPTZURFy280Gk4RfoT28efKJ2iTtJu2EOof2Bes7V%2FcB1ccZ8snRkwHoD6rYkAmmBmPGv7ObCxFFlYAJ5E9dwqDwwQedMShnQKYM8iODlcR3uJwXwjK72GfSZFzg7YT6U67WkcVqp%2FLTXXLXYj%2FlKNKyTQv9L5cp%2BSb2ZD6xbh0OgvuPyqck1E8SDcy4v8MP%2BPnsEGOqUBxIzo3q13FvNVWUkI1rUCwGkwDnVXooLmvb3PoW%2FfwdV6lttgpFqcX1djIDXf0h8TsFM%2FoFUNtn3BUNkf8O%2BuxB%2B62e%2BQ6Jvcq8iJ6MdjK2XUg4aeTjyNaurzGNUGsbWEo%2B2MLI3DwHfDminNDF5iweCu5N0r%2F5AxqFwIaLtOofB9wUsxqR%2F5lFwZjcE5F3Xwjuoa%2FtAwthqp3j3YuawwGsMTOfab&X-Amz-Signature=38cd22738970f14edd8ee5029dcceba5b676554986b4b50dc4d715802d6530fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
