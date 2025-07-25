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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SREBE4XZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDRidz66UdheBhv9sTTBjYrJp6o8IpdDFZyPNyD6yxkswIgBbkykU4qrgZvyBjAuYAejpOUdIkqpcvBPEk31Vp5Bd8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM4cAsXen%2FsXzRArRCrcAwEGI9YQ89DmIsoS0iLd705V1oV8y1coOt8fX2GmbX8HSlGfgE8KohfFAS2arMVZvQwGNjwbE%2Feao9oTM9M1mC7yTzC8zj%2F9MI3dIGRimOdbu9AWXI6hljC31d53TgJHtFoZ1zk%2FiKMJlogCMflB97uAKjG%2B7biJG2OFBvmwWW3s4yuuzDs2i1SJxKSS4XWHpBBmJIsHT0HZH0rSkx%2FV8B7BfSko0HHj9GzNQWLgFS4IwDQ5RYilZdGCI05kXL9s%2FML6ntpVOjuzP2HROHAESq3WhLEVB4pulXnWBci6jn7G3kQStZJFr9TsPOHZSSBnkE5wAXx4EHTpEKSO9dtMoYVaMyTjr%2Brou7p6Y40tgAP3qzefO%2BEEwSHk%2B1Bo8xvzJW4jrHHRa%2F3OrKdlOD15duiERGwID7Cm7T9kBHMZGH9uB4AWw1Sq8uSL02XWml7WMysPlbhEgGVi8XHkA8BNx6AlrUwAyisz9SAIPiPqqF9ySmSYJH%2F%2BRE5lr0vYKHFsZtzEz54Cn8ORx0vAa6SZeeAicEdSc24bL4Uo9o2B4nEIqLrVaKWZYzsSJhuLjsQmcgNv7Nt1hW2io%2BfzbWj7gBq%2F0YzG0Ol8Z%2BzgqMs6TSPEt1EvlUu7F2O%2BmfxqMJCrj8QGOqUBT51y%2Bkqgqzq0EdLBwJSGwI51%2BJVifJtSfpmfjeSs29QMiPe%2FT245XVvHrKwVmsHGK%2FwWSxxl%2FNBexiXgVMLLaSQxLx36nHM7xN82tuj0JgZSyafWN27a5qiBSEOA8JLtzMlEsbQyyE%2BWunwPXc8euBjBuAxgWoc7YXQY78lHUao0YhMdCk2QQBNdHAsyqgtMFZMv7bOp0J%2B5QykF1sKhl8a0Tc%2F1&X-Amz-Signature=53fa872430d2bd0081cf6030e3ed405dce293b64006e6b2e5b388e9e9a9f9d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SREBE4XZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDRidz66UdheBhv9sTTBjYrJp6o8IpdDFZyPNyD6yxkswIgBbkykU4qrgZvyBjAuYAejpOUdIkqpcvBPEk31Vp5Bd8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM4cAsXen%2FsXzRArRCrcAwEGI9YQ89DmIsoS0iLd705V1oV8y1coOt8fX2GmbX8HSlGfgE8KohfFAS2arMVZvQwGNjwbE%2Feao9oTM9M1mC7yTzC8zj%2F9MI3dIGRimOdbu9AWXI6hljC31d53TgJHtFoZ1zk%2FiKMJlogCMflB97uAKjG%2B7biJG2OFBvmwWW3s4yuuzDs2i1SJxKSS4XWHpBBmJIsHT0HZH0rSkx%2FV8B7BfSko0HHj9GzNQWLgFS4IwDQ5RYilZdGCI05kXL9s%2FML6ntpVOjuzP2HROHAESq3WhLEVB4pulXnWBci6jn7G3kQStZJFr9TsPOHZSSBnkE5wAXx4EHTpEKSO9dtMoYVaMyTjr%2Brou7p6Y40tgAP3qzefO%2BEEwSHk%2B1Bo8xvzJW4jrHHRa%2F3OrKdlOD15duiERGwID7Cm7T9kBHMZGH9uB4AWw1Sq8uSL02XWml7WMysPlbhEgGVi8XHkA8BNx6AlrUwAyisz9SAIPiPqqF9ySmSYJH%2F%2BRE5lr0vYKHFsZtzEz54Cn8ORx0vAa6SZeeAicEdSc24bL4Uo9o2B4nEIqLrVaKWZYzsSJhuLjsQmcgNv7Nt1hW2io%2BfzbWj7gBq%2F0YzG0Ol8Z%2BzgqMs6TSPEt1EvlUu7F2O%2BmfxqMJCrj8QGOqUBT51y%2Bkqgqzq0EdLBwJSGwI51%2BJVifJtSfpmfjeSs29QMiPe%2FT245XVvHrKwVmsHGK%2FwWSxxl%2FNBexiXgVMLLaSQxLx36nHM7xN82tuj0JgZSyafWN27a5qiBSEOA8JLtzMlEsbQyyE%2BWunwPXc8euBjBuAxgWoc7YXQY78lHUao0YhMdCk2QQBNdHAsyqgtMFZMv7bOp0J%2B5QykF1sKhl8a0Tc%2F1&X-Amz-Signature=d365845109bb6abfa966909e23efa78f88086d15d05b74df880e7764b3105738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SREBE4XZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDRidz66UdheBhv9sTTBjYrJp6o8IpdDFZyPNyD6yxkswIgBbkykU4qrgZvyBjAuYAejpOUdIkqpcvBPEk31Vp5Bd8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM4cAsXen%2FsXzRArRCrcAwEGI9YQ89DmIsoS0iLd705V1oV8y1coOt8fX2GmbX8HSlGfgE8KohfFAS2arMVZvQwGNjwbE%2Feao9oTM9M1mC7yTzC8zj%2F9MI3dIGRimOdbu9AWXI6hljC31d53TgJHtFoZ1zk%2FiKMJlogCMflB97uAKjG%2B7biJG2OFBvmwWW3s4yuuzDs2i1SJxKSS4XWHpBBmJIsHT0HZH0rSkx%2FV8B7BfSko0HHj9GzNQWLgFS4IwDQ5RYilZdGCI05kXL9s%2FML6ntpVOjuzP2HROHAESq3WhLEVB4pulXnWBci6jn7G3kQStZJFr9TsPOHZSSBnkE5wAXx4EHTpEKSO9dtMoYVaMyTjr%2Brou7p6Y40tgAP3qzefO%2BEEwSHk%2B1Bo8xvzJW4jrHHRa%2F3OrKdlOD15duiERGwID7Cm7T9kBHMZGH9uB4AWw1Sq8uSL02XWml7WMysPlbhEgGVi8XHkA8BNx6AlrUwAyisz9SAIPiPqqF9ySmSYJH%2F%2BRE5lr0vYKHFsZtzEz54Cn8ORx0vAa6SZeeAicEdSc24bL4Uo9o2B4nEIqLrVaKWZYzsSJhuLjsQmcgNv7Nt1hW2io%2BfzbWj7gBq%2F0YzG0Ol8Z%2BzgqMs6TSPEt1EvlUu7F2O%2BmfxqMJCrj8QGOqUBT51y%2Bkqgqzq0EdLBwJSGwI51%2BJVifJtSfpmfjeSs29QMiPe%2FT245XVvHrKwVmsHGK%2FwWSxxl%2FNBexiXgVMLLaSQxLx36nHM7xN82tuj0JgZSyafWN27a5qiBSEOA8JLtzMlEsbQyyE%2BWunwPXc8euBjBuAxgWoc7YXQY78lHUao0YhMdCk2QQBNdHAsyqgtMFZMv7bOp0J%2B5QykF1sKhl8a0Tc%2F1&X-Amz-Signature=7ad89f129855a95e6b9961b23f3f434a02d834543e2f9cc99da948439bc28495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
