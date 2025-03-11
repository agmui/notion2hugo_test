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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LHIPWF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDUpnedP3bJ5UOl8tb2L6DEXxJnZ07ymKRa8lkyl%2FFpswIgJRI3qLMhfbpFbRZHWc7tAq1NUCGQ94G2TcRSrhPV9jsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdFJGxs9%2BOl%2FOzJtircA15BBFm40V%2BIMSi1eOVG8RS2sX3PxXVUEuloxIGDbvjrlDirkD2hwD2YFRXgwyL2Yubn75%2FCi3tYPvbHGmN%2FLEkGV52YSOIdR%2BeQ69eo6BjnVgtJMdbVAqxhsbjXtirFH8Z8DKiD%2FWKcXQJH8OTE5vJUqYPdRQj5mFZgh8oTk4v0QkzJkQgZMfwL5zEErXBdmZVXoD%2BjnRLvVY1Xzt%2B%2FoAG%2FvJbuFIYqCe1bshzv2JlzxzKbeQeO%2B%2Bx1ioOSt4vzFxYVn6L0VyPxqYHzXcXe6d3zdnj8rBsM92q1lJqm1j2%2FRzPwLuFHoQ7VUx8jaeRwF2wnxX7c4Xv1Ai1foCR9Ij6MVxqjj1NGnMmE4gIQgOygmNQsqT5ZMUI6DmYqbWtlE3EZsItzEx9Sb5t5SadF09STS5FZvFLeKLWw2Mxc%2F9zIgR0tAEat%2FAmNrGqGFO08S2id8USYlMP0K%2FtihQQUr%2BKvMI%2B8tSSMFThXztgaQTULQTI93oMDqwGTe50J6d8u9bLZkrqbWPxCckiZN8BQOefjoWMB9u4ZPN2V2754e2qhie7oW%2F02zBmd7vUAKXP4Zz3elYh7NaxMqW5TrL1ZQHh99yRrPAPZVieOpXEsykVNA9YwNS7f9M%2Bya4zcMMLRv74GOqUBXvQoSc3DZoTy4PIh1250iHQClH9LUu9bk%2FsC2m4bjStsbPhN7o7sZgkgv%2Fys5Z7Maesk8QZLnXruGWZ1m3xE0XO56BTHB0K2H%2F8hbyO%2FyzoFQIlGhAppSx7QTfxJ%2Fi0Ua%2BQXXV7Ta9DhGtaXsw%2BfTS%2BE1GsuZ41veFF9gr1QgRUjeJKx6XYdn24kHO19mdUri4sD%2BWaz4HAbdJibrRqcLhVfW%2BTM&X-Amz-Signature=ff675fea42c7648db8efd30f05b81f80249757033a2d5fa275eefc0257eb344b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LHIPWF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDUpnedP3bJ5UOl8tb2L6DEXxJnZ07ymKRa8lkyl%2FFpswIgJRI3qLMhfbpFbRZHWc7tAq1NUCGQ94G2TcRSrhPV9jsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdFJGxs9%2BOl%2FOzJtircA15BBFm40V%2BIMSi1eOVG8RS2sX3PxXVUEuloxIGDbvjrlDirkD2hwD2YFRXgwyL2Yubn75%2FCi3tYPvbHGmN%2FLEkGV52YSOIdR%2BeQ69eo6BjnVgtJMdbVAqxhsbjXtirFH8Z8DKiD%2FWKcXQJH8OTE5vJUqYPdRQj5mFZgh8oTk4v0QkzJkQgZMfwL5zEErXBdmZVXoD%2BjnRLvVY1Xzt%2B%2FoAG%2FvJbuFIYqCe1bshzv2JlzxzKbeQeO%2B%2Bx1ioOSt4vzFxYVn6L0VyPxqYHzXcXe6d3zdnj8rBsM92q1lJqm1j2%2FRzPwLuFHoQ7VUx8jaeRwF2wnxX7c4Xv1Ai1foCR9Ij6MVxqjj1NGnMmE4gIQgOygmNQsqT5ZMUI6DmYqbWtlE3EZsItzEx9Sb5t5SadF09STS5FZvFLeKLWw2Mxc%2F9zIgR0tAEat%2FAmNrGqGFO08S2id8USYlMP0K%2FtihQQUr%2BKvMI%2B8tSSMFThXztgaQTULQTI93oMDqwGTe50J6d8u9bLZkrqbWPxCckiZN8BQOefjoWMB9u4ZPN2V2754e2qhie7oW%2F02zBmd7vUAKXP4Zz3elYh7NaxMqW5TrL1ZQHh99yRrPAPZVieOpXEsykVNA9YwNS7f9M%2Bya4zcMMLRv74GOqUBXvQoSc3DZoTy4PIh1250iHQClH9LUu9bk%2FsC2m4bjStsbPhN7o7sZgkgv%2Fys5Z7Maesk8QZLnXruGWZ1m3xE0XO56BTHB0K2H%2F8hbyO%2FyzoFQIlGhAppSx7QTfxJ%2Fi0Ua%2BQXXV7Ta9DhGtaXsw%2BfTS%2BE1GsuZ41veFF9gr1QgRUjeJKx6XYdn24kHO19mdUri4sD%2BWaz4HAbdJibrRqcLhVfW%2BTM&X-Amz-Signature=42ab91597cbac9e7a3342ecb2c0aabf4b7623b4e876a929e4de7f1b1ee4bb5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LHIPWF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDUpnedP3bJ5UOl8tb2L6DEXxJnZ07ymKRa8lkyl%2FFpswIgJRI3qLMhfbpFbRZHWc7tAq1NUCGQ94G2TcRSrhPV9jsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdFJGxs9%2BOl%2FOzJtircA15BBFm40V%2BIMSi1eOVG8RS2sX3PxXVUEuloxIGDbvjrlDirkD2hwD2YFRXgwyL2Yubn75%2FCi3tYPvbHGmN%2FLEkGV52YSOIdR%2BeQ69eo6BjnVgtJMdbVAqxhsbjXtirFH8Z8DKiD%2FWKcXQJH8OTE5vJUqYPdRQj5mFZgh8oTk4v0QkzJkQgZMfwL5zEErXBdmZVXoD%2BjnRLvVY1Xzt%2B%2FoAG%2FvJbuFIYqCe1bshzv2JlzxzKbeQeO%2B%2Bx1ioOSt4vzFxYVn6L0VyPxqYHzXcXe6d3zdnj8rBsM92q1lJqm1j2%2FRzPwLuFHoQ7VUx8jaeRwF2wnxX7c4Xv1Ai1foCR9Ij6MVxqjj1NGnMmE4gIQgOygmNQsqT5ZMUI6DmYqbWtlE3EZsItzEx9Sb5t5SadF09STS5FZvFLeKLWw2Mxc%2F9zIgR0tAEat%2FAmNrGqGFO08S2id8USYlMP0K%2FtihQQUr%2BKvMI%2B8tSSMFThXztgaQTULQTI93oMDqwGTe50J6d8u9bLZkrqbWPxCckiZN8BQOefjoWMB9u4ZPN2V2754e2qhie7oW%2F02zBmd7vUAKXP4Zz3elYh7NaxMqW5TrL1ZQHh99yRrPAPZVieOpXEsykVNA9YwNS7f9M%2Bya4zcMMLRv74GOqUBXvQoSc3DZoTy4PIh1250iHQClH9LUu9bk%2FsC2m4bjStsbPhN7o7sZgkgv%2Fys5Z7Maesk8QZLnXruGWZ1m3xE0XO56BTHB0K2H%2F8hbyO%2FyzoFQIlGhAppSx7QTfxJ%2Fi0Ua%2BQXXV7Ta9DhGtaXsw%2BfTS%2BE1GsuZ41veFF9gr1QgRUjeJKx6XYdn24kHO19mdUri4sD%2BWaz4HAbdJibrRqcLhVfW%2BTM&X-Amz-Signature=2ae0606c9d773c764ccff3295f37a70c2a6163213846988ed5d56745abf8501c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
