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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5BGRF7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIK4WxuPF0EXa2p35WsWgpy%2FK7R%2BmCPLrCSEs6wNun%2FgIgG0HkzJvAXXItKkT%2Feg8TYqYsofG8X6b5aTZVLaVBUZYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTR1371n%2FlFzMeioCrcA9ovAuL9T2k3m2nCZD5r8%2FJ77td76bXy66L2Hhd3FjNO%2F5FkBQcDXovjLw%2FNFi9RhlAHOFpJrqR8pK48wOw3%2BzS%2BNpxq7KNHeA5xi%2BmqjY3lgM88Q3gHGR5bXUDapWmjWZDx4qgXJYWAufyAq1zk4wVuC8MTg%2B6qNvmEr6yxe%2FaHi5ZE32t2vlNM19Hgajx6qdlXKBlAqw%2BFf1Pl6zErXfphcmY4ZX8UlBl1YptSHdMkP2GoJJgurvHpQkYT249bSsnupMalInCCpUt4%2BBRGjPOdkvcPQgUQTpc6RTQnon2Ks%2F3zGCaOgsu6ut%2BtWQtLjQd%2FF1u%2FL0cxVifWLZR2W8j%2BOY4m3AAVQW0obZLlMmu%2FQJatybn%2BvGgSCq6Tttp1sKAazzUTQt%2FIxBB7nfoUI7X119DD3ZvcvEyayt1aT%2FTy%2BVygsHE6rLaOxusYUy1uVFgUy5CHCKf21XY09FWMtT78NK2yBafFULAnOan32qMWY%2FUv4IJwBgmmNJQ6CnX7AVJYRtIhwVETMspRGQnoNRg9cYOHxdDXQPutVHI9IMY97GL6XfkGo1p25D9uUcUF2TM7LgJV22V5iJT2Fu4vYu6J67PyLzQzr9nLfS9Sl2ISusKFxJwD1Wy4XiLDMNrjob0GOqUBv7nbvvDaSjHtbkEJPvxbO0YtH6mvYkaKOoQM6DhrE%2BquXjMs1vI5BDN11ujvJqT91ycVqmjay5lBssHozOUyL%2FFEAggBiFSZ37mN%2FIiPn7nnb3oWpFBNwgCMIIa6PX5%2BPdZvgfQ8bfcbbJN90b66neCnEPIoxzr%2BDDYG9v2eYx%2FL8Q%2FeeUHdGEfkJxMyFqNtAWrpX1LJsccI6voC8KpreD9TYlXD&X-Amz-Signature=e149335be6360af6b7f070087db695a7cb90b16557a319c3cbf72e17b471910a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5BGRF7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIK4WxuPF0EXa2p35WsWgpy%2FK7R%2BmCPLrCSEs6wNun%2FgIgG0HkzJvAXXItKkT%2Feg8TYqYsofG8X6b5aTZVLaVBUZYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTR1371n%2FlFzMeioCrcA9ovAuL9T2k3m2nCZD5r8%2FJ77td76bXy66L2Hhd3FjNO%2F5FkBQcDXovjLw%2FNFi9RhlAHOFpJrqR8pK48wOw3%2BzS%2BNpxq7KNHeA5xi%2BmqjY3lgM88Q3gHGR5bXUDapWmjWZDx4qgXJYWAufyAq1zk4wVuC8MTg%2B6qNvmEr6yxe%2FaHi5ZE32t2vlNM19Hgajx6qdlXKBlAqw%2BFf1Pl6zErXfphcmY4ZX8UlBl1YptSHdMkP2GoJJgurvHpQkYT249bSsnupMalInCCpUt4%2BBRGjPOdkvcPQgUQTpc6RTQnon2Ks%2F3zGCaOgsu6ut%2BtWQtLjQd%2FF1u%2FL0cxVifWLZR2W8j%2BOY4m3AAVQW0obZLlMmu%2FQJatybn%2BvGgSCq6Tttp1sKAazzUTQt%2FIxBB7nfoUI7X119DD3ZvcvEyayt1aT%2FTy%2BVygsHE6rLaOxusYUy1uVFgUy5CHCKf21XY09FWMtT78NK2yBafFULAnOan32qMWY%2FUv4IJwBgmmNJQ6CnX7AVJYRtIhwVETMspRGQnoNRg9cYOHxdDXQPutVHI9IMY97GL6XfkGo1p25D9uUcUF2TM7LgJV22V5iJT2Fu4vYu6J67PyLzQzr9nLfS9Sl2ISusKFxJwD1Wy4XiLDMNrjob0GOqUBv7nbvvDaSjHtbkEJPvxbO0YtH6mvYkaKOoQM6DhrE%2BquXjMs1vI5BDN11ujvJqT91ycVqmjay5lBssHozOUyL%2FFEAggBiFSZ37mN%2FIiPn7nnb3oWpFBNwgCMIIa6PX5%2BPdZvgfQ8bfcbbJN90b66neCnEPIoxzr%2BDDYG9v2eYx%2FL8Q%2FeeUHdGEfkJxMyFqNtAWrpX1LJsccI6voC8KpreD9TYlXD&X-Amz-Signature=9e83102ed799489d86a0f6e7e526deb0734b25de6206195f886106d150be42a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5BGRF7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIK4WxuPF0EXa2p35WsWgpy%2FK7R%2BmCPLrCSEs6wNun%2FgIgG0HkzJvAXXItKkT%2Feg8TYqYsofG8X6b5aTZVLaVBUZYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTR1371n%2FlFzMeioCrcA9ovAuL9T2k3m2nCZD5r8%2FJ77td76bXy66L2Hhd3FjNO%2F5FkBQcDXovjLw%2FNFi9RhlAHOFpJrqR8pK48wOw3%2BzS%2BNpxq7KNHeA5xi%2BmqjY3lgM88Q3gHGR5bXUDapWmjWZDx4qgXJYWAufyAq1zk4wVuC8MTg%2B6qNvmEr6yxe%2FaHi5ZE32t2vlNM19Hgajx6qdlXKBlAqw%2BFf1Pl6zErXfphcmY4ZX8UlBl1YptSHdMkP2GoJJgurvHpQkYT249bSsnupMalInCCpUt4%2BBRGjPOdkvcPQgUQTpc6RTQnon2Ks%2F3zGCaOgsu6ut%2BtWQtLjQd%2FF1u%2FL0cxVifWLZR2W8j%2BOY4m3AAVQW0obZLlMmu%2FQJatybn%2BvGgSCq6Tttp1sKAazzUTQt%2FIxBB7nfoUI7X119DD3ZvcvEyayt1aT%2FTy%2BVygsHE6rLaOxusYUy1uVFgUy5CHCKf21XY09FWMtT78NK2yBafFULAnOan32qMWY%2FUv4IJwBgmmNJQ6CnX7AVJYRtIhwVETMspRGQnoNRg9cYOHxdDXQPutVHI9IMY97GL6XfkGo1p25D9uUcUF2TM7LgJV22V5iJT2Fu4vYu6J67PyLzQzr9nLfS9Sl2ISusKFxJwD1Wy4XiLDMNrjob0GOqUBv7nbvvDaSjHtbkEJPvxbO0YtH6mvYkaKOoQM6DhrE%2BquXjMs1vI5BDN11ujvJqT91ycVqmjay5lBssHozOUyL%2FFEAggBiFSZ37mN%2FIiPn7nnb3oWpFBNwgCMIIa6PX5%2BPdZvgfQ8bfcbbJN90b66neCnEPIoxzr%2BDDYG9v2eYx%2FL8Q%2FeeUHdGEfkJxMyFqNtAWrpX1LJsccI6voC8KpreD9TYlXD&X-Amz-Signature=ae5034b1d2a2be4c76ff00e1dfd116a9c6c669b29f16a765c860190745d57da1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
