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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2YSVYY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBDa1ZFLJmaavB%2BVb9vFFy0ADKUmtApnPXupqLz2xM1fAiBpH54s4HPsoRofWkGVtt51SiITO2aDM81vn2Och%2FK6WiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbUqc8XH1eyJH%2FykKtwDBkvclmmrUxmG8HRFD%2FrkrlErpf6dKu4KDg%2Fveg%2FEgWt4654I0w24mHdo3%2FOLEqLD3Mg%2FSU6orOSfcW5X8ft7wwJ2wgRoPDt77yua7iOHlFLLs1h7yaIPtOfMvXERggoBQObQixLCcQ64%2BzXbLirUicdquAnr2HvKxcj41W1gNbJtCe4z6KbXU4vzyCVuw1sadBeEm7TEyYsOFM9w%2Bv%2BAfDxDAzUDRNmEZBzoZvBn0AASf3ypDYUBNV%2BtBAy%2Bjup0t8EZU7k3tAOYEcDlGVQrEi2hAL052eSTKJLoNhGe61aWN5mS9Ih2DEif1ccXWkfGe41ipk2YQiW%2B1TuKvg2e5Q8A9F4Uzf2yzkt5v6jTu6KWNJa72W5HB2AuHa9MEXzi5wh03l6%2FmHZHcdop9KexSHDQxks8E08tsCvwBhQYVTy%2Bs%2BEZA4q%2Bb7kyM9kth4kFI9g19c%2BVjLApqRUC7WbBmFIA9NrbrYg8bAq533rjPSmPSs2TCLooxBwNIyjkKGm%2B%2F54l288rza1TKQHy6nBWbvXUeerQw2O50dzxr25jBJAHmMa3jA3kh6HNWthZXAEQYA%2BWc9HPQ9tTYx7PqU%2FU5aQoaPkV%2BVzMfmtny2wERebe%2BAJbPhTO%2Fme41DMwt7avvwY6pgGVwVtGeGUxEJ9VsX3xe0GKVsaCm06lS4uUfK7JXnJdEIBNfu8aUo2uixfEr%2BTj63P5gc75D4Y8RkSUUPEG1huMKxk7IbFeN%2BYVfn7jUS%2F0hlZNs2Rmy5lnYuqBZvTlIVVDzQeE94ulNUSkWTJ8SiMZuV9VgKcvEY8I9MMib0J%2BG03QmwaOmqnweePAxWoWoOfWPrCyZgGjh8amy1C2lkiGD%2F%2FXOIky&X-Amz-Signature=6d892c69ebe3eb421c6c837d650399fc9a669e48f9d1111abb9b8201993ae208&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2YSVYY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBDa1ZFLJmaavB%2BVb9vFFy0ADKUmtApnPXupqLz2xM1fAiBpH54s4HPsoRofWkGVtt51SiITO2aDM81vn2Och%2FK6WiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbUqc8XH1eyJH%2FykKtwDBkvclmmrUxmG8HRFD%2FrkrlErpf6dKu4KDg%2Fveg%2FEgWt4654I0w24mHdo3%2FOLEqLD3Mg%2FSU6orOSfcW5X8ft7wwJ2wgRoPDt77yua7iOHlFLLs1h7yaIPtOfMvXERggoBQObQixLCcQ64%2BzXbLirUicdquAnr2HvKxcj41W1gNbJtCe4z6KbXU4vzyCVuw1sadBeEm7TEyYsOFM9w%2Bv%2BAfDxDAzUDRNmEZBzoZvBn0AASf3ypDYUBNV%2BtBAy%2Bjup0t8EZU7k3tAOYEcDlGVQrEi2hAL052eSTKJLoNhGe61aWN5mS9Ih2DEif1ccXWkfGe41ipk2YQiW%2B1TuKvg2e5Q8A9F4Uzf2yzkt5v6jTu6KWNJa72W5HB2AuHa9MEXzi5wh03l6%2FmHZHcdop9KexSHDQxks8E08tsCvwBhQYVTy%2Bs%2BEZA4q%2Bb7kyM9kth4kFI9g19c%2BVjLApqRUC7WbBmFIA9NrbrYg8bAq533rjPSmPSs2TCLooxBwNIyjkKGm%2B%2F54l288rza1TKQHy6nBWbvXUeerQw2O50dzxr25jBJAHmMa3jA3kh6HNWthZXAEQYA%2BWc9HPQ9tTYx7PqU%2FU5aQoaPkV%2BVzMfmtny2wERebe%2BAJbPhTO%2Fme41DMwt7avvwY6pgGVwVtGeGUxEJ9VsX3xe0GKVsaCm06lS4uUfK7JXnJdEIBNfu8aUo2uixfEr%2BTj63P5gc75D4Y8RkSUUPEG1huMKxk7IbFeN%2BYVfn7jUS%2F0hlZNs2Rmy5lnYuqBZvTlIVVDzQeE94ulNUSkWTJ8SiMZuV9VgKcvEY8I9MMib0J%2BG03QmwaOmqnweePAxWoWoOfWPrCyZgGjh8amy1C2lkiGD%2F%2FXOIky&X-Amz-Signature=674fd50b8b53b835fda88046b983f166471264d349953890d416e82c9e558577&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2YSVYY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBDa1ZFLJmaavB%2BVb9vFFy0ADKUmtApnPXupqLz2xM1fAiBpH54s4HPsoRofWkGVtt51SiITO2aDM81vn2Och%2FK6WiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbUqc8XH1eyJH%2FykKtwDBkvclmmrUxmG8HRFD%2FrkrlErpf6dKu4KDg%2Fveg%2FEgWt4654I0w24mHdo3%2FOLEqLD3Mg%2FSU6orOSfcW5X8ft7wwJ2wgRoPDt77yua7iOHlFLLs1h7yaIPtOfMvXERggoBQObQixLCcQ64%2BzXbLirUicdquAnr2HvKxcj41W1gNbJtCe4z6KbXU4vzyCVuw1sadBeEm7TEyYsOFM9w%2Bv%2BAfDxDAzUDRNmEZBzoZvBn0AASf3ypDYUBNV%2BtBAy%2Bjup0t8EZU7k3tAOYEcDlGVQrEi2hAL052eSTKJLoNhGe61aWN5mS9Ih2DEif1ccXWkfGe41ipk2YQiW%2B1TuKvg2e5Q8A9F4Uzf2yzkt5v6jTu6KWNJa72W5HB2AuHa9MEXzi5wh03l6%2FmHZHcdop9KexSHDQxks8E08tsCvwBhQYVTy%2Bs%2BEZA4q%2Bb7kyM9kth4kFI9g19c%2BVjLApqRUC7WbBmFIA9NrbrYg8bAq533rjPSmPSs2TCLooxBwNIyjkKGm%2B%2F54l288rza1TKQHy6nBWbvXUeerQw2O50dzxr25jBJAHmMa3jA3kh6HNWthZXAEQYA%2BWc9HPQ9tTYx7PqU%2FU5aQoaPkV%2BVzMfmtny2wERebe%2BAJbPhTO%2Fme41DMwt7avvwY6pgGVwVtGeGUxEJ9VsX3xe0GKVsaCm06lS4uUfK7JXnJdEIBNfu8aUo2uixfEr%2BTj63P5gc75D4Y8RkSUUPEG1huMKxk7IbFeN%2BYVfn7jUS%2F0hlZNs2Rmy5lnYuqBZvTlIVVDzQeE94ulNUSkWTJ8SiMZuV9VgKcvEY8I9MMib0J%2BG03QmwaOmqnweePAxWoWoOfWPrCyZgGjh8amy1C2lkiGD%2F%2FXOIky&X-Amz-Signature=d8bd2c3eb9710aac849631ebcd712c1696309c6015f999b702e793a147ad4447&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
