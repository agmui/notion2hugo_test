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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY2FESBB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHFVatERbNZPAm7TI8cfU%2FcPZtCL7ZFOs6t7Bkgk6itIAiAmIsxVoYFy%2Bo1egsAW3ZvBTcIESQfNASykPiW34EDF4iqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqA5yOjFS4HKWay%2BgKtwDT%2FPC2qw4784kW9%2F3sS2ry172bbvqyhq0MQlqzEYX2kJmMZeM%2Bwt%2BboLHgGmq%2Bcods%2FS4ZN%2Bbm7Q%2FA71%2FJOQ8OU2HBxrABLcVoHBxHvHtNDAlUhtO9JI3ulNYkdpCWrYVO%2FUPPn8sd1maFBnNRfycp2xgFheMWW9puaLAjwNxWvVGCLSodnNM1cP%2FR9Wgv5uxXloGkisChLiX9VY9uFqLU3FpOILvtkque5%2FgP3xp31%2FvnF36vicAejEwhuOz%2B1fZDfA9F%2FeN70brEdQ79bGN6dl0PFKRsPDv%2BT53tFXWyZf7woEJ9L8Z3cNFfUkIzb2pogsPSElSYCToT9mfxzkl3e6jUOb8YVIXxSFLt2Sd28MHlRPYKLFbX3XYdesMsfsqIZ%2BOlWkmjH1RwjJ8zHtGcMXnIMWh%2Boq4IjlP%2BodWpHWQLgDIae1xKk8xq8aLe5qySsRqkE4cSSY%2FADrv1GIFug2FWnliwc3uoFRToiVkA0He8yn%2BnzxEQ84NgO2datJM72SEFCf2ZRaJJT2qbXFVLZCjgp23LPkUjH53Ysfqz2wJnyogBdZKZ0982VxkkHbLAnWqY83hOi4oyyEhmiWiHOFE3RyqpcMaKdX4ZBY26ug%2FQq4auN7C4mCLsiQwlvHfwgY6pgEb7Qs4YrWHg7WONWbzfNF%2BflhwUFx9ziVOOBmMMrdwE4j8zySS%2FzGt58cUN1F5jLYS%2FYE4gAaji3wCPeDaEbbUVZht8Io7SrSN5GMg89giEE4Xtis5xxdkd3GGUzdAwrkggnNOu7%2FJuan230yBLjgiJKMy%2B%2BuL%2FNUZDYTHWFs1wZcajh4sFIua78dVP2882zQadBGjfNMoq53nlsdoqgs%2B0WpeQa7t&X-Amz-Signature=5a22486bba4f31907deb7b302ea36edadcc690c901144b00b958a8b6f0b1f0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY2FESBB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHFVatERbNZPAm7TI8cfU%2FcPZtCL7ZFOs6t7Bkgk6itIAiAmIsxVoYFy%2Bo1egsAW3ZvBTcIESQfNASykPiW34EDF4iqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqA5yOjFS4HKWay%2BgKtwDT%2FPC2qw4784kW9%2F3sS2ry172bbvqyhq0MQlqzEYX2kJmMZeM%2Bwt%2BboLHgGmq%2Bcods%2FS4ZN%2Bbm7Q%2FA71%2FJOQ8OU2HBxrABLcVoHBxHvHtNDAlUhtO9JI3ulNYkdpCWrYVO%2FUPPn8sd1maFBnNRfycp2xgFheMWW9puaLAjwNxWvVGCLSodnNM1cP%2FR9Wgv5uxXloGkisChLiX9VY9uFqLU3FpOILvtkque5%2FgP3xp31%2FvnF36vicAejEwhuOz%2B1fZDfA9F%2FeN70brEdQ79bGN6dl0PFKRsPDv%2BT53tFXWyZf7woEJ9L8Z3cNFfUkIzb2pogsPSElSYCToT9mfxzkl3e6jUOb8YVIXxSFLt2Sd28MHlRPYKLFbX3XYdesMsfsqIZ%2BOlWkmjH1RwjJ8zHtGcMXnIMWh%2Boq4IjlP%2BodWpHWQLgDIae1xKk8xq8aLe5qySsRqkE4cSSY%2FADrv1GIFug2FWnliwc3uoFRToiVkA0He8yn%2BnzxEQ84NgO2datJM72SEFCf2ZRaJJT2qbXFVLZCjgp23LPkUjH53Ysfqz2wJnyogBdZKZ0982VxkkHbLAnWqY83hOi4oyyEhmiWiHOFE3RyqpcMaKdX4ZBY26ug%2FQq4auN7C4mCLsiQwlvHfwgY6pgEb7Qs4YrWHg7WONWbzfNF%2BflhwUFx9ziVOOBmMMrdwE4j8zySS%2FzGt58cUN1F5jLYS%2FYE4gAaji3wCPeDaEbbUVZht8Io7SrSN5GMg89giEE4Xtis5xxdkd3GGUzdAwrkggnNOu7%2FJuan230yBLjgiJKMy%2B%2BuL%2FNUZDYTHWFs1wZcajh4sFIua78dVP2882zQadBGjfNMoq53nlsdoqgs%2B0WpeQa7t&X-Amz-Signature=59558a13f00de53a46bb2970ee0c020ecbd79793a493bb1530a07b19a84a5a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY2FESBB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHFVatERbNZPAm7TI8cfU%2FcPZtCL7ZFOs6t7Bkgk6itIAiAmIsxVoYFy%2Bo1egsAW3ZvBTcIESQfNASykPiW34EDF4iqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqA5yOjFS4HKWay%2BgKtwDT%2FPC2qw4784kW9%2F3sS2ry172bbvqyhq0MQlqzEYX2kJmMZeM%2Bwt%2BboLHgGmq%2Bcods%2FS4ZN%2Bbm7Q%2FA71%2FJOQ8OU2HBxrABLcVoHBxHvHtNDAlUhtO9JI3ulNYkdpCWrYVO%2FUPPn8sd1maFBnNRfycp2xgFheMWW9puaLAjwNxWvVGCLSodnNM1cP%2FR9Wgv5uxXloGkisChLiX9VY9uFqLU3FpOILvtkque5%2FgP3xp31%2FvnF36vicAejEwhuOz%2B1fZDfA9F%2FeN70brEdQ79bGN6dl0PFKRsPDv%2BT53tFXWyZf7woEJ9L8Z3cNFfUkIzb2pogsPSElSYCToT9mfxzkl3e6jUOb8YVIXxSFLt2Sd28MHlRPYKLFbX3XYdesMsfsqIZ%2BOlWkmjH1RwjJ8zHtGcMXnIMWh%2Boq4IjlP%2BodWpHWQLgDIae1xKk8xq8aLe5qySsRqkE4cSSY%2FADrv1GIFug2FWnliwc3uoFRToiVkA0He8yn%2BnzxEQ84NgO2datJM72SEFCf2ZRaJJT2qbXFVLZCjgp23LPkUjH53Ysfqz2wJnyogBdZKZ0982VxkkHbLAnWqY83hOi4oyyEhmiWiHOFE3RyqpcMaKdX4ZBY26ug%2FQq4auN7C4mCLsiQwlvHfwgY6pgEb7Qs4YrWHg7WONWbzfNF%2BflhwUFx9ziVOOBmMMrdwE4j8zySS%2FzGt58cUN1F5jLYS%2FYE4gAaji3wCPeDaEbbUVZht8Io7SrSN5GMg89giEE4Xtis5xxdkd3GGUzdAwrkggnNOu7%2FJuan230yBLjgiJKMy%2B%2BuL%2FNUZDYTHWFs1wZcajh4sFIua78dVP2882zQadBGjfNMoq53nlsdoqgs%2B0WpeQa7t&X-Amz-Signature=c66f3f5722573c18175f02f71505716847a64f2458b010c717c974b7546212ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
