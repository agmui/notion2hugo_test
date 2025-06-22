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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDVOYKV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBUB71Z4L7GrGypJ67%2Bh2laxh%2FeA0WH%2F%2BJ1DcyU7O3UqAiEA6KZRRjr2xY6k%2B2S9bvfS2RflGtiyBV33KBuDVcePA4kqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC3QoiTL0H3XFgBRircAw3Y74vz74jn%2BWSjMXs3iTsmbWQBhTP6JpH5rljgGT2KZrbqsDRo7ixUwF0SskPf%2BYpswV3A8Lq1ihjiny5U9JMrvnjk0fpc%2BWyNCBkdf8p9MS8BAGY4FbnsqWAvBqeiCT8OklOOTIk0e%2FfALyKcA4YsE1PdOvep5jWTRpC5BE3os02A%2BLM5zRJwt%2FeLWOQP%2Fq1EishXOolsq3TM5nUGyPqDzB%2FEP41PXoR%2F1qIWUa9dRqPHFJ8YPNevbCzJUKirKeayT7VDceeBijV8DVj8DnNEeOTNanqOhhrZJkQKjz9ytsq%2FuMJus4J0%2BVD9BsNIZeYMu%2BH5DZ4lLsXfk0e8zJWjL4sFeaw4emzO5jWVGTcihBlzdKiPl2VIHl4ouHGlAnJfPGREF%2FjglX8JSZyBnS1bKpHGnY4THpWj%2Bv8GH8HN012UES22Gx%2FDxJMQFR3lJGnq6Me7ypx4Pt5rtA%2BQ15CM8iGFuAdUbTbf8%2BvziM76HgzFYuwOXQTkFhqTMWvtD%2FfYGaPTPwbRrl6A7i7YQMT7o0mmZe3fE1Ehi5%2F1WW8hSLPrKmDnDnxS4xJE09DWtfX0nsH1yEb9YGt9EmfiV8OGakFQnW4QT53rI5WWNKQU%2BwWX7dvLdHdCt27IMIOY4MIGOqUB2pn7FteQViHdHOf7oqraz%2FyYPE%2FQBc7QkSThfhQWU9J2CYr6Jq9Qha0jqZTm4iEaN7s2pJcznGX6igYokCqZ9LJncToAc3E5xWD73uu%2BcQfvDyfjbXEZKVKTmPRp6SKQixCrjY0wVcfg1H7ynEXh1dOcljDSWDqw4oXIllG0cwknP1Xy2Xsm0QodPEcHrLEtWZOoUX4UBUElWXsJjb75GFWisnvh&X-Amz-Signature=46f662b5e0a70648a4e8143a6de39facba73b279097cc3628224f40541b7c854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDVOYKV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBUB71Z4L7GrGypJ67%2Bh2laxh%2FeA0WH%2F%2BJ1DcyU7O3UqAiEA6KZRRjr2xY6k%2B2S9bvfS2RflGtiyBV33KBuDVcePA4kqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC3QoiTL0H3XFgBRircAw3Y74vz74jn%2BWSjMXs3iTsmbWQBhTP6JpH5rljgGT2KZrbqsDRo7ixUwF0SskPf%2BYpswV3A8Lq1ihjiny5U9JMrvnjk0fpc%2BWyNCBkdf8p9MS8BAGY4FbnsqWAvBqeiCT8OklOOTIk0e%2FfALyKcA4YsE1PdOvep5jWTRpC5BE3os02A%2BLM5zRJwt%2FeLWOQP%2Fq1EishXOolsq3TM5nUGyPqDzB%2FEP41PXoR%2F1qIWUa9dRqPHFJ8YPNevbCzJUKirKeayT7VDceeBijV8DVj8DnNEeOTNanqOhhrZJkQKjz9ytsq%2FuMJus4J0%2BVD9BsNIZeYMu%2BH5DZ4lLsXfk0e8zJWjL4sFeaw4emzO5jWVGTcihBlzdKiPl2VIHl4ouHGlAnJfPGREF%2FjglX8JSZyBnS1bKpHGnY4THpWj%2Bv8GH8HN012UES22Gx%2FDxJMQFR3lJGnq6Me7ypx4Pt5rtA%2BQ15CM8iGFuAdUbTbf8%2BvziM76HgzFYuwOXQTkFhqTMWvtD%2FfYGaPTPwbRrl6A7i7YQMT7o0mmZe3fE1Ehi5%2F1WW8hSLPrKmDnDnxS4xJE09DWtfX0nsH1yEb9YGt9EmfiV8OGakFQnW4QT53rI5WWNKQU%2BwWX7dvLdHdCt27IMIOY4MIGOqUB2pn7FteQViHdHOf7oqraz%2FyYPE%2FQBc7QkSThfhQWU9J2CYr6Jq9Qha0jqZTm4iEaN7s2pJcznGX6igYokCqZ9LJncToAc3E5xWD73uu%2BcQfvDyfjbXEZKVKTmPRp6SKQixCrjY0wVcfg1H7ynEXh1dOcljDSWDqw4oXIllG0cwknP1Xy2Xsm0QodPEcHrLEtWZOoUX4UBUElWXsJjb75GFWisnvh&X-Amz-Signature=005679ccc9e241b0abd65ad3e79f1a24ad382f1d656e65132de641478b56abc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDVOYKV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBUB71Z4L7GrGypJ67%2Bh2laxh%2FeA0WH%2F%2BJ1DcyU7O3UqAiEA6KZRRjr2xY6k%2B2S9bvfS2RflGtiyBV33KBuDVcePA4kqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC3QoiTL0H3XFgBRircAw3Y74vz74jn%2BWSjMXs3iTsmbWQBhTP6JpH5rljgGT2KZrbqsDRo7ixUwF0SskPf%2BYpswV3A8Lq1ihjiny5U9JMrvnjk0fpc%2BWyNCBkdf8p9MS8BAGY4FbnsqWAvBqeiCT8OklOOTIk0e%2FfALyKcA4YsE1PdOvep5jWTRpC5BE3os02A%2BLM5zRJwt%2FeLWOQP%2Fq1EishXOolsq3TM5nUGyPqDzB%2FEP41PXoR%2F1qIWUa9dRqPHFJ8YPNevbCzJUKirKeayT7VDceeBijV8DVj8DnNEeOTNanqOhhrZJkQKjz9ytsq%2FuMJus4J0%2BVD9BsNIZeYMu%2BH5DZ4lLsXfk0e8zJWjL4sFeaw4emzO5jWVGTcihBlzdKiPl2VIHl4ouHGlAnJfPGREF%2FjglX8JSZyBnS1bKpHGnY4THpWj%2Bv8GH8HN012UES22Gx%2FDxJMQFR3lJGnq6Me7ypx4Pt5rtA%2BQ15CM8iGFuAdUbTbf8%2BvziM76HgzFYuwOXQTkFhqTMWvtD%2FfYGaPTPwbRrl6A7i7YQMT7o0mmZe3fE1Ehi5%2F1WW8hSLPrKmDnDnxS4xJE09DWtfX0nsH1yEb9YGt9EmfiV8OGakFQnW4QT53rI5WWNKQU%2BwWX7dvLdHdCt27IMIOY4MIGOqUB2pn7FteQViHdHOf7oqraz%2FyYPE%2FQBc7QkSThfhQWU9J2CYr6Jq9Qha0jqZTm4iEaN7s2pJcznGX6igYokCqZ9LJncToAc3E5xWD73uu%2BcQfvDyfjbXEZKVKTmPRp6SKQixCrjY0wVcfg1H7ynEXh1dOcljDSWDqw4oXIllG0cwknP1Xy2Xsm0QodPEcHrLEtWZOoUX4UBUElWXsJjb75GFWisnvh&X-Amz-Signature=e7f9c2cfdc36f8bd6e72fac780462bdd826a89e63a833a037d4fdee5d2818c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
