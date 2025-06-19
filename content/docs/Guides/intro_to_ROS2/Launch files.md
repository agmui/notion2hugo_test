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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL35STR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRr3JUuXidSGAqHiFup2tFaNLZUue3kmD1Cu9p2F9vKAiEA%2BYExSQlYfgalq%2Bn4DMo5UyDUxCfYmGdLC7qe4rdv9egqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5Qln4t06RuwZ0t%2FCrcAzGtTpyFWKsaFTmQ1rJUDrllw2vK%2FaLX3ps2%2Fsd95Cy5rJuF5YGk6AMlGMxKRd1mxC4MyqJ7bKNCbzI1sWSJMaG7zHpJBQmAwwqGTorL3CPO8nY6p84rZJWZ2YCLRwmXGRFZJKLHU0iQbSgx8z8LqCtORzPLJ%2B0Tj00I2A4ur3n4L9ytuYo4kYoCO%2Feu8uB0jMDoKuOxTOks9yxsBoxyKoGJzdDP6uBeDbRrtGGrAqo1W2CjDSCTc9dd6C%2B7YNqi7aUsDVVXpFAFwRkMXw%2BvFPQ%2BAd37GHz4swtah%2FF9PYN1tMEKT3bE7Xjsn7UnAH5nIv2rqjXxzNdR3cH9TiyvJTvnbIoY9YZeWXMQ0dS4KEvBIUqL6%2Ffryt7l9VFZ29jVnwfwbY%2Fw5t%2FTdqYMEqLEO3ccv8r%2BBrvJZa8noKtrSMsDYAiKyIKMHnU5j9Y388pYxegE1KzdIbID8nxWpIioLutMETw5EBjIxLHY6%2F62Bb3VbIEXQzfj4zHC382imUjbgLAlwcXx%2BiII735sKxQUqSfVCzj4pawOiQRxW8L1mkEdVwBOfv2blVdSfKz7SmKL2lu121cufipbn9iZ0%2BGFOV9Zzjd3inL6uNE8zCa%2FsYeqN43N0ZO8eHlqFaZ9MPuzzsIGOqUBqkj93h5rj%2F2VPncsNaQXE6sCYcsC7H7END6x70fcEBcpiRmjBmN6N3teFLrOe4c2Moa0b%2F1tDqmJ3TOVKKhtcaN8lR5jLmA9Sk%2FbCyT0%2FtXe20tUrCLW5Mo16iHz3gdJu7PrB8dUwaLSpTTNBM2UpWUnQeE9sbI3z4g0PiPkhOXkyh53UzsDoIxEqVO1y0vcJDZiArVUnGHvKC3InZHRP2AuVKx6&X-Amz-Signature=9430ba9b0e7ea777744262b4776f50bc9f0867a74377da91564a728ac4714760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL35STR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRr3JUuXidSGAqHiFup2tFaNLZUue3kmD1Cu9p2F9vKAiEA%2BYExSQlYfgalq%2Bn4DMo5UyDUxCfYmGdLC7qe4rdv9egqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5Qln4t06RuwZ0t%2FCrcAzGtTpyFWKsaFTmQ1rJUDrllw2vK%2FaLX3ps2%2Fsd95Cy5rJuF5YGk6AMlGMxKRd1mxC4MyqJ7bKNCbzI1sWSJMaG7zHpJBQmAwwqGTorL3CPO8nY6p84rZJWZ2YCLRwmXGRFZJKLHU0iQbSgx8z8LqCtORzPLJ%2B0Tj00I2A4ur3n4L9ytuYo4kYoCO%2Feu8uB0jMDoKuOxTOks9yxsBoxyKoGJzdDP6uBeDbRrtGGrAqo1W2CjDSCTc9dd6C%2B7YNqi7aUsDVVXpFAFwRkMXw%2BvFPQ%2BAd37GHz4swtah%2FF9PYN1tMEKT3bE7Xjsn7UnAH5nIv2rqjXxzNdR3cH9TiyvJTvnbIoY9YZeWXMQ0dS4KEvBIUqL6%2Ffryt7l9VFZ29jVnwfwbY%2Fw5t%2FTdqYMEqLEO3ccv8r%2BBrvJZa8noKtrSMsDYAiKyIKMHnU5j9Y388pYxegE1KzdIbID8nxWpIioLutMETw5EBjIxLHY6%2F62Bb3VbIEXQzfj4zHC382imUjbgLAlwcXx%2BiII735sKxQUqSfVCzj4pawOiQRxW8L1mkEdVwBOfv2blVdSfKz7SmKL2lu121cufipbn9iZ0%2BGFOV9Zzjd3inL6uNE8zCa%2FsYeqN43N0ZO8eHlqFaZ9MPuzzsIGOqUBqkj93h5rj%2F2VPncsNaQXE6sCYcsC7H7END6x70fcEBcpiRmjBmN6N3teFLrOe4c2Moa0b%2F1tDqmJ3TOVKKhtcaN8lR5jLmA9Sk%2FbCyT0%2FtXe20tUrCLW5Mo16iHz3gdJu7PrB8dUwaLSpTTNBM2UpWUnQeE9sbI3z4g0PiPkhOXkyh53UzsDoIxEqVO1y0vcJDZiArVUnGHvKC3InZHRP2AuVKx6&X-Amz-Signature=95cb5936bfc8e785c48efd27f8e4d7f4f7669f870f7de28dff2cc0f7ad38fb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL35STR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRr3JUuXidSGAqHiFup2tFaNLZUue3kmD1Cu9p2F9vKAiEA%2BYExSQlYfgalq%2Bn4DMo5UyDUxCfYmGdLC7qe4rdv9egqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5Qln4t06RuwZ0t%2FCrcAzGtTpyFWKsaFTmQ1rJUDrllw2vK%2FaLX3ps2%2Fsd95Cy5rJuF5YGk6AMlGMxKRd1mxC4MyqJ7bKNCbzI1sWSJMaG7zHpJBQmAwwqGTorL3CPO8nY6p84rZJWZ2YCLRwmXGRFZJKLHU0iQbSgx8z8LqCtORzPLJ%2B0Tj00I2A4ur3n4L9ytuYo4kYoCO%2Feu8uB0jMDoKuOxTOks9yxsBoxyKoGJzdDP6uBeDbRrtGGrAqo1W2CjDSCTc9dd6C%2B7YNqi7aUsDVVXpFAFwRkMXw%2BvFPQ%2BAd37GHz4swtah%2FF9PYN1tMEKT3bE7Xjsn7UnAH5nIv2rqjXxzNdR3cH9TiyvJTvnbIoY9YZeWXMQ0dS4KEvBIUqL6%2Ffryt7l9VFZ29jVnwfwbY%2Fw5t%2FTdqYMEqLEO3ccv8r%2BBrvJZa8noKtrSMsDYAiKyIKMHnU5j9Y388pYxegE1KzdIbID8nxWpIioLutMETw5EBjIxLHY6%2F62Bb3VbIEXQzfj4zHC382imUjbgLAlwcXx%2BiII735sKxQUqSfVCzj4pawOiQRxW8L1mkEdVwBOfv2blVdSfKz7SmKL2lu121cufipbn9iZ0%2BGFOV9Zzjd3inL6uNE8zCa%2FsYeqN43N0ZO8eHlqFaZ9MPuzzsIGOqUBqkj93h5rj%2F2VPncsNaQXE6sCYcsC7H7END6x70fcEBcpiRmjBmN6N3teFLrOe4c2Moa0b%2F1tDqmJ3TOVKKhtcaN8lR5jLmA9Sk%2FbCyT0%2FtXe20tUrCLW5Mo16iHz3gdJu7PrB8dUwaLSpTTNBM2UpWUnQeE9sbI3z4g0PiPkhOXkyh53UzsDoIxEqVO1y0vcJDZiArVUnGHvKC3InZHRP2AuVKx6&X-Amz-Signature=112ad4f43762a617631f787263902f18e7f24b475e656acac3dc9e72f5cccff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
