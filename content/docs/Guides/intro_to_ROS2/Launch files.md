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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663552C6HT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCgudaWsOp70GDQhkxWAc9YuWVhwVCBxuDQ5xrJmvTJNAIhAOuBKvhVDjR39PUhGHLlKdpWtkWrWetcOz4DTWvnNBNEKv8DCDsQABoMNjM3NDIzMTgzODA1IgytimdlWEahCaWewHwq3ANLwPd6373v1pUmvyRJeuHWjV%2Bb4OZnQlyRZU9TLaBjVuBCktAWrK6JVipOjxAA8nU1vF6QYTW1c8WwPQy9wwhalHrt6kYUsmYyX1uqM4VOk9aKLk4JNegcBIQ6mVAdM5qPStEiA0ZPddbgg5Y99ivItlzXwSQONOSt2IkHTHZNie%2Bbq0P%2FuNSWfHR6YPJ8XmI%2Bn6OQFia4Ie1uedectoPnWF45XcaqKd7SscVVsWWKugPvYY39m%2FCkmig1qeNcr44SVQNdgy4rf%2FBUVCO4JjrOl52pDi35EexoQTJjJIw%2BK9gxNpoBgrcFwgGmWpfiPCWh2fnZHKQoI8mmPB4T8qEO7zNhra7eLxk6gjKASlbsm9nVkWM6d8QWpYBke%2FaMi%2Bydvulfamw%2FcRopvQNFu6vqCJobAXW7OxV1XJIpmG%2BgkuM7Lnl7IHBisatqI%2F%2B5%2BojPhqm%2Fm6qMpKfy0xxE13xLGUAQORh7WCVf741PRidzpzE3vZthUoZqlRsBbToq8yXJPNoXVsqxorQFKYZcMiNT2OCLYRTT8eENnofEEMbbVQpAunEjtQyJ6ZnYbKZDhm4kqR7gIOVPZwMdJTZ0Nz7wdY8FZcJmrkq%2FIPj6XmmbgMVCK6XV6%2BGU06eW8DDvnc%2FBBjqkAcHptx90s%2BE7FVTke95SiU0%2FI9JP1A%2BHpAsw9lBmUyO%2FjaHixD3cSE4GR019mVSDWKiimpMnNZhYl%2Bz2UliDUZFRdrJJ2MAiTEq7O0AWQZOgrX1An5ewaKojGwIi7X2n%2BVNnSrdCPfpesm9vAQv8pc7AtN9AKFwpGxFiNyBOjRxBf03L16vIkwZcNQ5MBYp4vvrMOh0iOIo2AU1HmKqyd2t66cq%2F&X-Amz-Signature=45a6fb4a4ed27e86985bfc22d12cbcc9d039b69197d3462446fe1b620397cd95&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663552C6HT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCgudaWsOp70GDQhkxWAc9YuWVhwVCBxuDQ5xrJmvTJNAIhAOuBKvhVDjR39PUhGHLlKdpWtkWrWetcOz4DTWvnNBNEKv8DCDsQABoMNjM3NDIzMTgzODA1IgytimdlWEahCaWewHwq3ANLwPd6373v1pUmvyRJeuHWjV%2Bb4OZnQlyRZU9TLaBjVuBCktAWrK6JVipOjxAA8nU1vF6QYTW1c8WwPQy9wwhalHrt6kYUsmYyX1uqM4VOk9aKLk4JNegcBIQ6mVAdM5qPStEiA0ZPddbgg5Y99ivItlzXwSQONOSt2IkHTHZNie%2Bbq0P%2FuNSWfHR6YPJ8XmI%2Bn6OQFia4Ie1uedectoPnWF45XcaqKd7SscVVsWWKugPvYY39m%2FCkmig1qeNcr44SVQNdgy4rf%2FBUVCO4JjrOl52pDi35EexoQTJjJIw%2BK9gxNpoBgrcFwgGmWpfiPCWh2fnZHKQoI8mmPB4T8qEO7zNhra7eLxk6gjKASlbsm9nVkWM6d8QWpYBke%2FaMi%2Bydvulfamw%2FcRopvQNFu6vqCJobAXW7OxV1XJIpmG%2BgkuM7Lnl7IHBisatqI%2F%2B5%2BojPhqm%2Fm6qMpKfy0xxE13xLGUAQORh7WCVf741PRidzpzE3vZthUoZqlRsBbToq8yXJPNoXVsqxorQFKYZcMiNT2OCLYRTT8eENnofEEMbbVQpAunEjtQyJ6ZnYbKZDhm4kqR7gIOVPZwMdJTZ0Nz7wdY8FZcJmrkq%2FIPj6XmmbgMVCK6XV6%2BGU06eW8DDvnc%2FBBjqkAcHptx90s%2BE7FVTke95SiU0%2FI9JP1A%2BHpAsw9lBmUyO%2FjaHixD3cSE4GR019mVSDWKiimpMnNZhYl%2Bz2UliDUZFRdrJJ2MAiTEq7O0AWQZOgrX1An5ewaKojGwIi7X2n%2BVNnSrdCPfpesm9vAQv8pc7AtN9AKFwpGxFiNyBOjRxBf03L16vIkwZcNQ5MBYp4vvrMOh0iOIo2AU1HmKqyd2t66cq%2F&X-Amz-Signature=5c20c3ad81456a625ad4728f488bdbbafb2b133230e808002dcef01ffa098298&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663552C6HT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCgudaWsOp70GDQhkxWAc9YuWVhwVCBxuDQ5xrJmvTJNAIhAOuBKvhVDjR39PUhGHLlKdpWtkWrWetcOz4DTWvnNBNEKv8DCDsQABoMNjM3NDIzMTgzODA1IgytimdlWEahCaWewHwq3ANLwPd6373v1pUmvyRJeuHWjV%2Bb4OZnQlyRZU9TLaBjVuBCktAWrK6JVipOjxAA8nU1vF6QYTW1c8WwPQy9wwhalHrt6kYUsmYyX1uqM4VOk9aKLk4JNegcBIQ6mVAdM5qPStEiA0ZPddbgg5Y99ivItlzXwSQONOSt2IkHTHZNie%2Bbq0P%2FuNSWfHR6YPJ8XmI%2Bn6OQFia4Ie1uedectoPnWF45XcaqKd7SscVVsWWKugPvYY39m%2FCkmig1qeNcr44SVQNdgy4rf%2FBUVCO4JjrOl52pDi35EexoQTJjJIw%2BK9gxNpoBgrcFwgGmWpfiPCWh2fnZHKQoI8mmPB4T8qEO7zNhra7eLxk6gjKASlbsm9nVkWM6d8QWpYBke%2FaMi%2Bydvulfamw%2FcRopvQNFu6vqCJobAXW7OxV1XJIpmG%2BgkuM7Lnl7IHBisatqI%2F%2B5%2BojPhqm%2Fm6qMpKfy0xxE13xLGUAQORh7WCVf741PRidzpzE3vZthUoZqlRsBbToq8yXJPNoXVsqxorQFKYZcMiNT2OCLYRTT8eENnofEEMbbVQpAunEjtQyJ6ZnYbKZDhm4kqR7gIOVPZwMdJTZ0Nz7wdY8FZcJmrkq%2FIPj6XmmbgMVCK6XV6%2BGU06eW8DDvnc%2FBBjqkAcHptx90s%2BE7FVTke95SiU0%2FI9JP1A%2BHpAsw9lBmUyO%2FjaHixD3cSE4GR019mVSDWKiimpMnNZhYl%2Bz2UliDUZFRdrJJ2MAiTEq7O0AWQZOgrX1An5ewaKojGwIi7X2n%2BVNnSrdCPfpesm9vAQv8pc7AtN9AKFwpGxFiNyBOjRxBf03L16vIkwZcNQ5MBYp4vvrMOh0iOIo2AU1HmKqyd2t66cq%2F&X-Amz-Signature=8e5a23e27cac679518f79a46770e3ff347edb63bbde611891b2a968760eaa07b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
