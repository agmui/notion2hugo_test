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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMGQDUX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiiqi1BAnNFP7EA%2B6vkXEBIPlz3THYvwCeet%2F16u8Y2QIgY0revTxVszvXgzittYtUSwhMS2WMM5wJSkgweiCNk1EqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw7MiUinQLwo%2FTUcCrcAwc1TNJtYx1byWPTh8QzunSVdfB1DXQUBQeMf4hiMxfAZ9LWLrViFkQlBk1H8OzGbJTpCJHST8HI0cr9L4N6xwMOdEKk5fTglCS0VVZRQXn3i0jABGDCrwllivgecJHuDhEtj7gp%2BRC85zw%2FuC88j4qiveaV9h%2FSmvdPov7wc1kUSq%2BaHYDXQVWEkw%2FDht%2BfkZRL46sc5Dj92I3K7Ui1iyIqdHAHHMfZEvtLQN02teoOi6Yajc40JvbmCMF1zXSDGqwOjV9evDbb70n9HjoQWjIu%2BFqBRsq33WX1JJCMvFW75SrtP8clbgr6Pq4nwOr1pByA%2FVaNYcqxkld7RAXhEQDLuxvFfkK27W4SWTYfUFrQmEmocQX9aoRfv1KboIy4D4c6kOPLL9i%2FrGupROR%2BsoN9jMpKyeqXvhBMyupmW8MF6bg3ZTr34NgJMmog2MaUC6UMYqt14DnyRpkBifEYSuJ%2BH7U6%2BLTHB2NUvSp0TP%2BcDqMbDp%2BquHwT9ThRTN3NB3AVSUF8p%2F97MWLpLLfBwfh0A5EJuJRL%2F00EZogrob6QBxrQJnRgrq6c5Lf8%2BnTDNldRfipUle2cI13pBGE6JxEEOqT2UZQ5Qpo%2FTQUNiPBHIWM%2BihiBvUixuqswMJqy4cEGOqUBcwU%2BmfTXsPTuEomxtKKiffEkXYMTAFAQ62GUP7l6JrfVA8ZOzklyzst%2FfKVHNU1b4kyxBAWTUQAXlEZGfUz0eoGpfL0XbuJs7HnDdUgDYkzv3oW63IcNNiZgKepvPCd0lvUfqm%2FgTsNIhpMrOSW8uV3ugvkt6HBpsl%2BW3mwoBDZpPsMG0zRPJGH9GcN9KbLAip0oHR9L%2ByXLyzA%2F5cumV5I7ylaA&X-Amz-Signature=33d4b5f065aac2e8c73900f2a1cd43a2bbe2aa1f41ece1a3e4a95b5d532ccc37&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMGQDUX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiiqi1BAnNFP7EA%2B6vkXEBIPlz3THYvwCeet%2F16u8Y2QIgY0revTxVszvXgzittYtUSwhMS2WMM5wJSkgweiCNk1EqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw7MiUinQLwo%2FTUcCrcAwc1TNJtYx1byWPTh8QzunSVdfB1DXQUBQeMf4hiMxfAZ9LWLrViFkQlBk1H8OzGbJTpCJHST8HI0cr9L4N6xwMOdEKk5fTglCS0VVZRQXn3i0jABGDCrwllivgecJHuDhEtj7gp%2BRC85zw%2FuC88j4qiveaV9h%2FSmvdPov7wc1kUSq%2BaHYDXQVWEkw%2FDht%2BfkZRL46sc5Dj92I3K7Ui1iyIqdHAHHMfZEvtLQN02teoOi6Yajc40JvbmCMF1zXSDGqwOjV9evDbb70n9HjoQWjIu%2BFqBRsq33WX1JJCMvFW75SrtP8clbgr6Pq4nwOr1pByA%2FVaNYcqxkld7RAXhEQDLuxvFfkK27W4SWTYfUFrQmEmocQX9aoRfv1KboIy4D4c6kOPLL9i%2FrGupROR%2BsoN9jMpKyeqXvhBMyupmW8MF6bg3ZTr34NgJMmog2MaUC6UMYqt14DnyRpkBifEYSuJ%2BH7U6%2BLTHB2NUvSp0TP%2BcDqMbDp%2BquHwT9ThRTN3NB3AVSUF8p%2F97MWLpLLfBwfh0A5EJuJRL%2F00EZogrob6QBxrQJnRgrq6c5Lf8%2BnTDNldRfipUle2cI13pBGE6JxEEOqT2UZQ5Qpo%2FTQUNiPBHIWM%2BihiBvUixuqswMJqy4cEGOqUBcwU%2BmfTXsPTuEomxtKKiffEkXYMTAFAQ62GUP7l6JrfVA8ZOzklyzst%2FfKVHNU1b4kyxBAWTUQAXlEZGfUz0eoGpfL0XbuJs7HnDdUgDYkzv3oW63IcNNiZgKepvPCd0lvUfqm%2FgTsNIhpMrOSW8uV3ugvkt6HBpsl%2BW3mwoBDZpPsMG0zRPJGH9GcN9KbLAip0oHR9L%2ByXLyzA%2F5cumV5I7ylaA&X-Amz-Signature=02e9efcd0962abd43a939b598ab19e7dba1f10599ae3369c7a6a900c66558130&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMGQDUX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiiqi1BAnNFP7EA%2B6vkXEBIPlz3THYvwCeet%2F16u8Y2QIgY0revTxVszvXgzittYtUSwhMS2WMM5wJSkgweiCNk1EqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw7MiUinQLwo%2FTUcCrcAwc1TNJtYx1byWPTh8QzunSVdfB1DXQUBQeMf4hiMxfAZ9LWLrViFkQlBk1H8OzGbJTpCJHST8HI0cr9L4N6xwMOdEKk5fTglCS0VVZRQXn3i0jABGDCrwllivgecJHuDhEtj7gp%2BRC85zw%2FuC88j4qiveaV9h%2FSmvdPov7wc1kUSq%2BaHYDXQVWEkw%2FDht%2BfkZRL46sc5Dj92I3K7Ui1iyIqdHAHHMfZEvtLQN02teoOi6Yajc40JvbmCMF1zXSDGqwOjV9evDbb70n9HjoQWjIu%2BFqBRsq33WX1JJCMvFW75SrtP8clbgr6Pq4nwOr1pByA%2FVaNYcqxkld7RAXhEQDLuxvFfkK27W4SWTYfUFrQmEmocQX9aoRfv1KboIy4D4c6kOPLL9i%2FrGupROR%2BsoN9jMpKyeqXvhBMyupmW8MF6bg3ZTr34NgJMmog2MaUC6UMYqt14DnyRpkBifEYSuJ%2BH7U6%2BLTHB2NUvSp0TP%2BcDqMbDp%2BquHwT9ThRTN3NB3AVSUF8p%2F97MWLpLLfBwfh0A5EJuJRL%2F00EZogrob6QBxrQJnRgrq6c5Lf8%2BnTDNldRfipUle2cI13pBGE6JxEEOqT2UZQ5Qpo%2FTQUNiPBHIWM%2BihiBvUixuqswMJqy4cEGOqUBcwU%2BmfTXsPTuEomxtKKiffEkXYMTAFAQ62GUP7l6JrfVA8ZOzklyzst%2FfKVHNU1b4kyxBAWTUQAXlEZGfUz0eoGpfL0XbuJs7HnDdUgDYkzv3oW63IcNNiZgKepvPCd0lvUfqm%2FgTsNIhpMrOSW8uV3ugvkt6HBpsl%2BW3mwoBDZpPsMG0zRPJGH9GcN9KbLAip0oHR9L%2ByXLyzA%2F5cumV5I7ylaA&X-Amz-Signature=1d39df434e4f140f2da46510ec8b24a5feee53fafaba3259fc06132cc5420379&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
