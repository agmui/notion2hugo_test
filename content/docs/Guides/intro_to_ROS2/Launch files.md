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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243YT3D2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BpelK21FDuEheg8Fd8S%2BdptzYrj0EzwjqdVwGW2JOEwIgOx3CLsHLTCjj%2Fn0fcpLpe9VkLFDWGCvBkYhC5RrGGKwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7VEZF3QwPJxNd%2F4SrcA3u9nz7xIEk5QYezufxulyXsAdkC3cDagtBmPTxtr878h0aVI819wCIao5eSkXCrcdZKrU3nvvDIHK5CSDYfF3pUsPzTsxCSn9M%2BYD76OXS%2BkykZInYLKZPmnUCEj76jy0cOUWS%2Fk4QHKQTdP1NDcQby2c0eWF2XoKliNtgJJR9g90KC%2BmFS3%2B1yDmc81u5mdftRDJJke5O1zehGkUateWberWW7cwU%2FDZD2jn4skEjwBlZZUh8E6%2BhBVwWiux5ZpkJ%2BeiC%2FCnD7JTatzEfS65TXM1o5zyv51nLMZ%2BMqPCZegi3jsdALTBPb6zj2JMr3sLpGERLQG1Kg8aNcSiwE5%2F2imAxD3w%2ByI276renN1BhbXZoIu7matqmmLRrueaY3vi2LjL3WQxF5ZyI0B5Ooaa938cSLJeewRJb4L2J4wFQx72mhvBJZZ8fiTcmuzx1HpppE6oeORUOAMonkLPGRbm5CJ7XUgGP7eyVIjiHmJdSC54%2BF3tLvg0oDF2bdMquvze3IzTwQ0p1MvO4IQ7U3n4CS0bhEJBdZJrAwhKIY%2BbF3UeG7q7BWEr9G8HZL%2BtSfjJq%2BhZMk22%2F8vgLsOxd8XVfF0erQsTxMd%2FsAsHrQjw1NtBcynYWlONJ5q5M9MN65zb8GOqUBlyiKUcN78fWb6eXZC5jAgPiQSk7NfIJ3oaZvOFf4RWTCOVvQgoIL75hNF4%2FrVWOIKzkuK7p6XftIvwEpqmcAmn90Jkigz%2BRpQNKCIr5n9d%2FJVP9nSC071wkmiUv8SL6iZrrj46tDy36J1N6cyLs3%2FKtJZEsvdQYVLwdlgd%2FEpEgUwZi7bdjCA86hvrFayO9GOUiD0pKyfkOYLX4OgZ7RMpa3X6Xk&X-Amz-Signature=9045c0e62b5e5ff879391c161433e88dbf90a075f862be45bec18b96304e32ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243YT3D2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BpelK21FDuEheg8Fd8S%2BdptzYrj0EzwjqdVwGW2JOEwIgOx3CLsHLTCjj%2Fn0fcpLpe9VkLFDWGCvBkYhC5RrGGKwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7VEZF3QwPJxNd%2F4SrcA3u9nz7xIEk5QYezufxulyXsAdkC3cDagtBmPTxtr878h0aVI819wCIao5eSkXCrcdZKrU3nvvDIHK5CSDYfF3pUsPzTsxCSn9M%2BYD76OXS%2BkykZInYLKZPmnUCEj76jy0cOUWS%2Fk4QHKQTdP1NDcQby2c0eWF2XoKliNtgJJR9g90KC%2BmFS3%2B1yDmc81u5mdftRDJJke5O1zehGkUateWberWW7cwU%2FDZD2jn4skEjwBlZZUh8E6%2BhBVwWiux5ZpkJ%2BeiC%2FCnD7JTatzEfS65TXM1o5zyv51nLMZ%2BMqPCZegi3jsdALTBPb6zj2JMr3sLpGERLQG1Kg8aNcSiwE5%2F2imAxD3w%2ByI276renN1BhbXZoIu7matqmmLRrueaY3vi2LjL3WQxF5ZyI0B5Ooaa938cSLJeewRJb4L2J4wFQx72mhvBJZZ8fiTcmuzx1HpppE6oeORUOAMonkLPGRbm5CJ7XUgGP7eyVIjiHmJdSC54%2BF3tLvg0oDF2bdMquvze3IzTwQ0p1MvO4IQ7U3n4CS0bhEJBdZJrAwhKIY%2BbF3UeG7q7BWEr9G8HZL%2BtSfjJq%2BhZMk22%2F8vgLsOxd8XVfF0erQsTxMd%2FsAsHrQjw1NtBcynYWlONJ5q5M9MN65zb8GOqUBlyiKUcN78fWb6eXZC5jAgPiQSk7NfIJ3oaZvOFf4RWTCOVvQgoIL75hNF4%2FrVWOIKzkuK7p6XftIvwEpqmcAmn90Jkigz%2BRpQNKCIr5n9d%2FJVP9nSC071wkmiUv8SL6iZrrj46tDy36J1N6cyLs3%2FKtJZEsvdQYVLwdlgd%2FEpEgUwZi7bdjCA86hvrFayO9GOUiD0pKyfkOYLX4OgZ7RMpa3X6Xk&X-Amz-Signature=35b701d22751128eb5906bb0a0cb8db0c749ff5277302160f1bac6c7abcc0bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243YT3D2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BpelK21FDuEheg8Fd8S%2BdptzYrj0EzwjqdVwGW2JOEwIgOx3CLsHLTCjj%2Fn0fcpLpe9VkLFDWGCvBkYhC5RrGGKwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL7VEZF3QwPJxNd%2F4SrcA3u9nz7xIEk5QYezufxulyXsAdkC3cDagtBmPTxtr878h0aVI819wCIao5eSkXCrcdZKrU3nvvDIHK5CSDYfF3pUsPzTsxCSn9M%2BYD76OXS%2BkykZInYLKZPmnUCEj76jy0cOUWS%2Fk4QHKQTdP1NDcQby2c0eWF2XoKliNtgJJR9g90KC%2BmFS3%2B1yDmc81u5mdftRDJJke5O1zehGkUateWberWW7cwU%2FDZD2jn4skEjwBlZZUh8E6%2BhBVwWiux5ZpkJ%2BeiC%2FCnD7JTatzEfS65TXM1o5zyv51nLMZ%2BMqPCZegi3jsdALTBPb6zj2JMr3sLpGERLQG1Kg8aNcSiwE5%2F2imAxD3w%2ByI276renN1BhbXZoIu7matqmmLRrueaY3vi2LjL3WQxF5ZyI0B5Ooaa938cSLJeewRJb4L2J4wFQx72mhvBJZZ8fiTcmuzx1HpppE6oeORUOAMonkLPGRbm5CJ7XUgGP7eyVIjiHmJdSC54%2BF3tLvg0oDF2bdMquvze3IzTwQ0p1MvO4IQ7U3n4CS0bhEJBdZJrAwhKIY%2BbF3UeG7q7BWEr9G8HZL%2BtSfjJq%2BhZMk22%2F8vgLsOxd8XVfF0erQsTxMd%2FsAsHrQjw1NtBcynYWlONJ5q5M9MN65zb8GOqUBlyiKUcN78fWb6eXZC5jAgPiQSk7NfIJ3oaZvOFf4RWTCOVvQgoIL75hNF4%2FrVWOIKzkuK7p6XftIvwEpqmcAmn90Jkigz%2BRpQNKCIr5n9d%2FJVP9nSC071wkmiUv8SL6iZrrj46tDy36J1N6cyLs3%2FKtJZEsvdQYVLwdlgd%2FEpEgUwZi7bdjCA86hvrFayO9GOUiD0pKyfkOYLX4OgZ7RMpa3X6Xk&X-Amz-Signature=7d39444789f75b8dd9cc373d6f4face876a5acfe649e1f921b808e88145abd52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
