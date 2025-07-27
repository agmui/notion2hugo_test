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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655H3W2ZK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICTD7ZyV0Jn3tggcVvz2wIbN34%2B%2B5A70fPZ6rwwFoa1CAiEA5oSjSXfHt6STsuFHg3L071%2B4y1f%2BCP%2F25RshLKDyEboq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCMgSgwXalJSId8DUCrcAyT9%2FW4BC54zv%2B9fIoioc8VPbRF3VNpyJa27gVMyPSi34BGVGOzkHvXf1BB5oj2wCWcnr2vUJHNLB4BviSqj6bc1vd%2FGb%2FYMU93Q1iu18pDRzFuS2l2K7mDpWAEodfjVmXpYnqPM6D80qFpP3tXlIGr12uKvvT%2FnljWZyNNzr6MbOHKtTw%2BfAdnorsvGEQ%2FzoxQ3h6sSmcQuPSfUczZUgrORmnsHL8uZQftkua1EmxkyhQDZ5OFGY67KtlRfn4YDvTcTz9rwtgqxHggVfi6OgEkIwHnjQzv6vxNSUWBA4Tnvs6ZSsTd09%2Byd5rCRrN0hbg2erqMjqxgYSrEgr%2Fn8A1NeCOztPnJfvYNJxetFT8%2F05Pv3LoH4kfCqTKE7stZF2VlBhd1F%2BdrlDzPlbR0pU%2BiBn1EPAFlcwzH8V%2F0SS9RIFjLj5fTmmXM58mHb%2FT%2F6q5NYyhUsFkghdIy7ALOaMOuvYxKry%2BMMEloekza8lYYEZEBPbqWQ%2Bc56U9vAHIw6dMvuYCEPPJ9wqaOgmKuGKd0zlOB5czYSuxjWVEds2fEaDBJj2gf4WDgxvp0GDSxH%2Fgu7QERu4beuEMZP51PLCwTXVdS3ERRzUAeA4NnUtrON%2BiFV0BIx9dXgwuXpMO66lsQGOqUBtC3qFH%2FgtWTKCVbwlJXZMQtoeBE48exBbV42%2Fvyha7%2F8m84cmhlbcDZWbHTF%2BYRELndynzg8vL0DOwoUNGofwYmTq3aHmzkE6y8XG73Vk5%2FyubrvG%2FXLdVwha3y7w5DEvmoAas3N1qs%2FZKPgjqi4UAizQEfbFeJvNFqBMQkKtDLCY4ihcugguprL2VEDh6KGghcj0%2Fn7tuZCinU5Y1GoAoZo32Q5&X-Amz-Signature=8d5b7770b30d837c0fdf7b390ccb00bd700dfd53430f0d48bab521f7621f1da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655H3W2ZK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICTD7ZyV0Jn3tggcVvz2wIbN34%2B%2B5A70fPZ6rwwFoa1CAiEA5oSjSXfHt6STsuFHg3L071%2B4y1f%2BCP%2F25RshLKDyEboq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCMgSgwXalJSId8DUCrcAyT9%2FW4BC54zv%2B9fIoioc8VPbRF3VNpyJa27gVMyPSi34BGVGOzkHvXf1BB5oj2wCWcnr2vUJHNLB4BviSqj6bc1vd%2FGb%2FYMU93Q1iu18pDRzFuS2l2K7mDpWAEodfjVmXpYnqPM6D80qFpP3tXlIGr12uKvvT%2FnljWZyNNzr6MbOHKtTw%2BfAdnorsvGEQ%2FzoxQ3h6sSmcQuPSfUczZUgrORmnsHL8uZQftkua1EmxkyhQDZ5OFGY67KtlRfn4YDvTcTz9rwtgqxHggVfi6OgEkIwHnjQzv6vxNSUWBA4Tnvs6ZSsTd09%2Byd5rCRrN0hbg2erqMjqxgYSrEgr%2Fn8A1NeCOztPnJfvYNJxetFT8%2F05Pv3LoH4kfCqTKE7stZF2VlBhd1F%2BdrlDzPlbR0pU%2BiBn1EPAFlcwzH8V%2F0SS9RIFjLj5fTmmXM58mHb%2FT%2F6q5NYyhUsFkghdIy7ALOaMOuvYxKry%2BMMEloekza8lYYEZEBPbqWQ%2Bc56U9vAHIw6dMvuYCEPPJ9wqaOgmKuGKd0zlOB5czYSuxjWVEds2fEaDBJj2gf4WDgxvp0GDSxH%2Fgu7QERu4beuEMZP51PLCwTXVdS3ERRzUAeA4NnUtrON%2BiFV0BIx9dXgwuXpMO66lsQGOqUBtC3qFH%2FgtWTKCVbwlJXZMQtoeBE48exBbV42%2Fvyha7%2F8m84cmhlbcDZWbHTF%2BYRELndynzg8vL0DOwoUNGofwYmTq3aHmzkE6y8XG73Vk5%2FyubrvG%2FXLdVwha3y7w5DEvmoAas3N1qs%2FZKPgjqi4UAizQEfbFeJvNFqBMQkKtDLCY4ihcugguprL2VEDh6KGghcj0%2Fn7tuZCinU5Y1GoAoZo32Q5&X-Amz-Signature=e0fd57d35006cd594ee54f65353b42b249467d2f1b2267a378babd22c3818c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655H3W2ZK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICTD7ZyV0Jn3tggcVvz2wIbN34%2B%2B5A70fPZ6rwwFoa1CAiEA5oSjSXfHt6STsuFHg3L071%2B4y1f%2BCP%2F25RshLKDyEboq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCMgSgwXalJSId8DUCrcAyT9%2FW4BC54zv%2B9fIoioc8VPbRF3VNpyJa27gVMyPSi34BGVGOzkHvXf1BB5oj2wCWcnr2vUJHNLB4BviSqj6bc1vd%2FGb%2FYMU93Q1iu18pDRzFuS2l2K7mDpWAEodfjVmXpYnqPM6D80qFpP3tXlIGr12uKvvT%2FnljWZyNNzr6MbOHKtTw%2BfAdnorsvGEQ%2FzoxQ3h6sSmcQuPSfUczZUgrORmnsHL8uZQftkua1EmxkyhQDZ5OFGY67KtlRfn4YDvTcTz9rwtgqxHggVfi6OgEkIwHnjQzv6vxNSUWBA4Tnvs6ZSsTd09%2Byd5rCRrN0hbg2erqMjqxgYSrEgr%2Fn8A1NeCOztPnJfvYNJxetFT8%2F05Pv3LoH4kfCqTKE7stZF2VlBhd1F%2BdrlDzPlbR0pU%2BiBn1EPAFlcwzH8V%2F0SS9RIFjLj5fTmmXM58mHb%2FT%2F6q5NYyhUsFkghdIy7ALOaMOuvYxKry%2BMMEloekza8lYYEZEBPbqWQ%2Bc56U9vAHIw6dMvuYCEPPJ9wqaOgmKuGKd0zlOB5czYSuxjWVEds2fEaDBJj2gf4WDgxvp0GDSxH%2Fgu7QERu4beuEMZP51PLCwTXVdS3ERRzUAeA4NnUtrON%2BiFV0BIx9dXgwuXpMO66lsQGOqUBtC3qFH%2FgtWTKCVbwlJXZMQtoeBE48exBbV42%2Fvyha7%2F8m84cmhlbcDZWbHTF%2BYRELndynzg8vL0DOwoUNGofwYmTq3aHmzkE6y8XG73Vk5%2FyubrvG%2FXLdVwha3y7w5DEvmoAas3N1qs%2FZKPgjqi4UAizQEfbFeJvNFqBMQkKtDLCY4ihcugguprL2VEDh6KGghcj0%2Fn7tuZCinU5Y1GoAoZo32Q5&X-Amz-Signature=88a1f9d33c5d3bbed28734ca69b45a388036c64e94b8fe070a041a66e5f1d573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
