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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLCJ53X%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnl8NTcUl1ozt4ApvVTrZJu9u8lEIhn9si7v0RBTqaNAIgCWmEhVU3Iv44DOe%2Bzo%2BxCYzktp%2FIXI8pq3JaasL3GKMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDEetxfLlD6oxsKZCSrcA61PHPwBIGCmGh6HGSYLlO4w7Q5FQa6SfdsnbXg3PGkiU2O4uK7thDfYOG%2FgE5q3%2FBYWvuddwOzBMgnkDr28yLrVylatBVZ0pnxYFBMp1%2FnZn%2BTQ%2BaVejvN95yjw%2FVMmzlF%2BlbWxif98LkOgRNCuaMf5HodrZOZZZpz%2BXS1e6PIB67UJUpIJnnNwvb4jhoxEmJZa8xYANUimBAgR7DWJW1Vkouc5yYUNSiK7HgoioCt41T8gfPM7%2BYRO%2B5vhx92LltlYEC7ikBvC1Ej1ITYFNUvC26iB4L%2BxjOw7R4WhFqRWwZ3oNbt6Ic4A58JuxEoijXscOskxz8EqsCmaqg2MLDd5aBxtljmOx48itsiKok93%2B1sbyIloPe5eMOYNmURnM6Bjq1l1sKHLC6f%2BAP3NgW%2FGchF4uCW2IIYvif3lg%2FsO8bFFP%2FtS%2BshJE8HkNwmKIDp%2BqLh8JNGXiJ5jccvl0NphdyDseJaewqvpREk9cpyYV48qdAdaZwYwQHBAeMfL3zJjTblKs5S%2BsASOt%2FggiG6SOaw0HeZxa9V77jQ1fo5ur18TBYUhp%2FR9F9fzSKZryu6GDVqlbklIqZk%2BRGCwoKmoUXVR3ducSer9AdUP1JqPBQstFCA5SN897KguMJ7mqr4GOqUBKtQu3jMXg2FcVeUSBq2ki6iEnQd7gvMOlNv19nn6zT8aXhkDDY9Nn91OsVw4LXwxB3CY%2B7J4NU7ZlmnJXaR7mihOHCbKsihbzGIaQ039vAtKGNAxosiLSaJ9rhH%2FazrDZs5IbQ32p8K9jGKEvL9U44vRQTdTfiPWryv4UwlIGpyjYAmmpzNPJnzNXpAbde5M2Mzcc28xY8Reg8sU0uGmxgjjymN4&X-Amz-Signature=6a582b0092718dcd8f31d36510bfcc8e64515af9130077ac41bb44b3fddb9b41&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLCJ53X%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnl8NTcUl1ozt4ApvVTrZJu9u8lEIhn9si7v0RBTqaNAIgCWmEhVU3Iv44DOe%2Bzo%2BxCYzktp%2FIXI8pq3JaasL3GKMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDEetxfLlD6oxsKZCSrcA61PHPwBIGCmGh6HGSYLlO4w7Q5FQa6SfdsnbXg3PGkiU2O4uK7thDfYOG%2FgE5q3%2FBYWvuddwOzBMgnkDr28yLrVylatBVZ0pnxYFBMp1%2FnZn%2BTQ%2BaVejvN95yjw%2FVMmzlF%2BlbWxif98LkOgRNCuaMf5HodrZOZZZpz%2BXS1e6PIB67UJUpIJnnNwvb4jhoxEmJZa8xYANUimBAgR7DWJW1Vkouc5yYUNSiK7HgoioCt41T8gfPM7%2BYRO%2B5vhx92LltlYEC7ikBvC1Ej1ITYFNUvC26iB4L%2BxjOw7R4WhFqRWwZ3oNbt6Ic4A58JuxEoijXscOskxz8EqsCmaqg2MLDd5aBxtljmOx48itsiKok93%2B1sbyIloPe5eMOYNmURnM6Bjq1l1sKHLC6f%2BAP3NgW%2FGchF4uCW2IIYvif3lg%2FsO8bFFP%2FtS%2BshJE8HkNwmKIDp%2BqLh8JNGXiJ5jccvl0NphdyDseJaewqvpREk9cpyYV48qdAdaZwYwQHBAeMfL3zJjTblKs5S%2BsASOt%2FggiG6SOaw0HeZxa9V77jQ1fo5ur18TBYUhp%2FR9F9fzSKZryu6GDVqlbklIqZk%2BRGCwoKmoUXVR3ducSer9AdUP1JqPBQstFCA5SN897KguMJ7mqr4GOqUBKtQu3jMXg2FcVeUSBq2ki6iEnQd7gvMOlNv19nn6zT8aXhkDDY9Nn91OsVw4LXwxB3CY%2B7J4NU7ZlmnJXaR7mihOHCbKsihbzGIaQ039vAtKGNAxosiLSaJ9rhH%2FazrDZs5IbQ32p8K9jGKEvL9U44vRQTdTfiPWryv4UwlIGpyjYAmmpzNPJnzNXpAbde5M2Mzcc28xY8Reg8sU0uGmxgjjymN4&X-Amz-Signature=8465d38c9173ceabd1e15cbed7e2bedc058201715ade4d27fba971fd8f6a5516&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLCJ53X%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnl8NTcUl1ozt4ApvVTrZJu9u8lEIhn9si7v0RBTqaNAIgCWmEhVU3Iv44DOe%2Bzo%2BxCYzktp%2FIXI8pq3JaasL3GKMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDEetxfLlD6oxsKZCSrcA61PHPwBIGCmGh6HGSYLlO4w7Q5FQa6SfdsnbXg3PGkiU2O4uK7thDfYOG%2FgE5q3%2FBYWvuddwOzBMgnkDr28yLrVylatBVZ0pnxYFBMp1%2FnZn%2BTQ%2BaVejvN95yjw%2FVMmzlF%2BlbWxif98LkOgRNCuaMf5HodrZOZZZpz%2BXS1e6PIB67UJUpIJnnNwvb4jhoxEmJZa8xYANUimBAgR7DWJW1Vkouc5yYUNSiK7HgoioCt41T8gfPM7%2BYRO%2B5vhx92LltlYEC7ikBvC1Ej1ITYFNUvC26iB4L%2BxjOw7R4WhFqRWwZ3oNbt6Ic4A58JuxEoijXscOskxz8EqsCmaqg2MLDd5aBxtljmOx48itsiKok93%2B1sbyIloPe5eMOYNmURnM6Bjq1l1sKHLC6f%2BAP3NgW%2FGchF4uCW2IIYvif3lg%2FsO8bFFP%2FtS%2BshJE8HkNwmKIDp%2BqLh8JNGXiJ5jccvl0NphdyDseJaewqvpREk9cpyYV48qdAdaZwYwQHBAeMfL3zJjTblKs5S%2BsASOt%2FggiG6SOaw0HeZxa9V77jQ1fo5ur18TBYUhp%2FR9F9fzSKZryu6GDVqlbklIqZk%2BRGCwoKmoUXVR3ducSer9AdUP1JqPBQstFCA5SN897KguMJ7mqr4GOqUBKtQu3jMXg2FcVeUSBq2ki6iEnQd7gvMOlNv19nn6zT8aXhkDDY9Nn91OsVw4LXwxB3CY%2B7J4NU7ZlmnJXaR7mihOHCbKsihbzGIaQ039vAtKGNAxosiLSaJ9rhH%2FazrDZs5IbQ32p8K9jGKEvL9U44vRQTdTfiPWryv4UwlIGpyjYAmmpzNPJnzNXpAbde5M2Mzcc28xY8Reg8sU0uGmxgjjymN4&X-Amz-Signature=e27e229eb2c74ba48ae32bdb3c332b4a9d67cb2594694999b6b205d2513045c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
