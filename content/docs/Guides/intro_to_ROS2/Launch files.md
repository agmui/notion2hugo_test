---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FODMMH2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCglLoNPxiSxGEpyKLbLMXmKwnTrodgcfPgjUo%2BGDR4dAIgIpbe12u6Nb9J%2BjfqXvVTKFJWbIByitDeXxpP8gx4Aqcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCQPY%2FHpIrZoA4m17SrcA0m8BKyHCQs3oNo66BlBXzlj4sYCJt3wA%2BAsSHTQSsaJdcbj%2B6jBuIvx4hq5nxec1DeaaNRIuTKeyYELV6xv37N83ntXxlaE%2Bdxh1%2Bny0oNBg%2Bvl6a3eaRaRrXEcspYATmzY7Ny8umUDW5sR4N6nEfj3AqfmVWRTfDImg5OqdGfLJ58L5H1JvG0pzQYiqD%2BNdUJ3OdOVz6fSBjtUFwwMLQ%2Fw0%2F94omhbMeyBcHWtHDJKp%2FMKgxloHumJyqVwegI4%2B%2BGukVMBWHOay5Vln1JpHT7TXhOglFSbI8yKrTqsZutNzCeclBG2vdtRcJk1l61lJ2m1vRBW9Fxjxny%2B1uJ6wo7%2FVJGjYdS%2B4bj9VEwpWe%2BUX2BRIin7p6Iq24gB2DexUiEEBegmt1uWUQMf5eGVyTCnUyJ8U%2Fb7VDJCXJUw2VWRg1PjGLl5Ps00m3rM2R6NRdITGK0PYZSeN9qH1HE6nDYbqsG%2FHewb1oKrCj3RwqV0TLiDTl%2F%2Bdhj9DwSPcwbFiS1ytplkxT8x3S6hUUfM22WEo%2BCINQuV%2Fw7dove18CsawwIYHdb2flPBlgkXWQdSm%2F3aoQl4MRjPRRn3GHGq6U2N4kMx4XoF3P2theBARUX7NhmBp0So6NQvQtrFMJfukMQGOqUBix2AwZMb1NyPGMojnGyNO9O39AHmA0Xllw6NrM9XPVd2I5mWYuJrcMDSFcgGwSH32x0Xdow11N3wNv8gzh1crMADc3nhcpqzKzPdXV8rzJyiLQ6tv3aQO%2BzRUbO5taQqAN5uNE9PnSvMk8G6PCfUkueUFM05l2ioYqB1AXV0xXZkegVOghDsAhGnapqMrcuslrM8XSGHervY6W1wcjTHBJd5xoAc&X-Amz-Signature=2d6ba32634d8b8c3f2df57ab841bfd173926244d4f0e113eba99562f145cf6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FODMMH2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCglLoNPxiSxGEpyKLbLMXmKwnTrodgcfPgjUo%2BGDR4dAIgIpbe12u6Nb9J%2BjfqXvVTKFJWbIByitDeXxpP8gx4Aqcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCQPY%2FHpIrZoA4m17SrcA0m8BKyHCQs3oNo66BlBXzlj4sYCJt3wA%2BAsSHTQSsaJdcbj%2B6jBuIvx4hq5nxec1DeaaNRIuTKeyYELV6xv37N83ntXxlaE%2Bdxh1%2Bny0oNBg%2Bvl6a3eaRaRrXEcspYATmzY7Ny8umUDW5sR4N6nEfj3AqfmVWRTfDImg5OqdGfLJ58L5H1JvG0pzQYiqD%2BNdUJ3OdOVz6fSBjtUFwwMLQ%2Fw0%2F94omhbMeyBcHWtHDJKp%2FMKgxloHumJyqVwegI4%2B%2BGukVMBWHOay5Vln1JpHT7TXhOglFSbI8yKrTqsZutNzCeclBG2vdtRcJk1l61lJ2m1vRBW9Fxjxny%2B1uJ6wo7%2FVJGjYdS%2B4bj9VEwpWe%2BUX2BRIin7p6Iq24gB2DexUiEEBegmt1uWUQMf5eGVyTCnUyJ8U%2Fb7VDJCXJUw2VWRg1PjGLl5Ps00m3rM2R6NRdITGK0PYZSeN9qH1HE6nDYbqsG%2FHewb1oKrCj3RwqV0TLiDTl%2F%2Bdhj9DwSPcwbFiS1ytplkxT8x3S6hUUfM22WEo%2BCINQuV%2Fw7dove18CsawwIYHdb2flPBlgkXWQdSm%2F3aoQl4MRjPRRn3GHGq6U2N4kMx4XoF3P2theBARUX7NhmBp0So6NQvQtrFMJfukMQGOqUBix2AwZMb1NyPGMojnGyNO9O39AHmA0Xllw6NrM9XPVd2I5mWYuJrcMDSFcgGwSH32x0Xdow11N3wNv8gzh1crMADc3nhcpqzKzPdXV8rzJyiLQ6tv3aQO%2BzRUbO5taQqAN5uNE9PnSvMk8G6PCfUkueUFM05l2ioYqB1AXV0xXZkegVOghDsAhGnapqMrcuslrM8XSGHervY6W1wcjTHBJd5xoAc&X-Amz-Signature=569399d9b99f1d09349b4e120a902c782a71976c70c953f8871d0ed494fc8505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FODMMH2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCglLoNPxiSxGEpyKLbLMXmKwnTrodgcfPgjUo%2BGDR4dAIgIpbe12u6Nb9J%2BjfqXvVTKFJWbIByitDeXxpP8gx4Aqcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCQPY%2FHpIrZoA4m17SrcA0m8BKyHCQs3oNo66BlBXzlj4sYCJt3wA%2BAsSHTQSsaJdcbj%2B6jBuIvx4hq5nxec1DeaaNRIuTKeyYELV6xv37N83ntXxlaE%2Bdxh1%2Bny0oNBg%2Bvl6a3eaRaRrXEcspYATmzY7Ny8umUDW5sR4N6nEfj3AqfmVWRTfDImg5OqdGfLJ58L5H1JvG0pzQYiqD%2BNdUJ3OdOVz6fSBjtUFwwMLQ%2Fw0%2F94omhbMeyBcHWtHDJKp%2FMKgxloHumJyqVwegI4%2B%2BGukVMBWHOay5Vln1JpHT7TXhOglFSbI8yKrTqsZutNzCeclBG2vdtRcJk1l61lJ2m1vRBW9Fxjxny%2B1uJ6wo7%2FVJGjYdS%2B4bj9VEwpWe%2BUX2BRIin7p6Iq24gB2DexUiEEBegmt1uWUQMf5eGVyTCnUyJ8U%2Fb7VDJCXJUw2VWRg1PjGLl5Ps00m3rM2R6NRdITGK0PYZSeN9qH1HE6nDYbqsG%2FHewb1oKrCj3RwqV0TLiDTl%2F%2Bdhj9DwSPcwbFiS1ytplkxT8x3S6hUUfM22WEo%2BCINQuV%2Fw7dove18CsawwIYHdb2flPBlgkXWQdSm%2F3aoQl4MRjPRRn3GHGq6U2N4kMx4XoF3P2theBARUX7NhmBp0So6NQvQtrFMJfukMQGOqUBix2AwZMb1NyPGMojnGyNO9O39AHmA0Xllw6NrM9XPVd2I5mWYuJrcMDSFcgGwSH32x0Xdow11N3wNv8gzh1crMADc3nhcpqzKzPdXV8rzJyiLQ6tv3aQO%2BzRUbO5taQqAN5uNE9PnSvMk8G6PCfUkueUFM05l2ioYqB1AXV0xXZkegVOghDsAhGnapqMrcuslrM8XSGHervY6W1wcjTHBJd5xoAc&X-Amz-Signature=d6b02decf5c6ce79f1820f873c76ffbaf522aa76cd6c90cff96d9af9902a4e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
