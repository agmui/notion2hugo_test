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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKIL2VY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fc5UOudwmJOeFR0zlca6ZSW%2Bbx%2F%2BpoEtAH%2FpCSGcx3QIgLBARYba9IE7slkRGugd6tKtHAn5qEqRPbHWrZ0XbhWwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDORKoTwHx8tC936IDircAy%2BZlEIq9EKtZ0VfisN2rxMfzGU0oQH4mATXSAArT3%2FJacOYqqXfImZuO4pec%2Blt1hVagknfO42sfZY6djEXvcvJRO6EmDtRtOCayZq57Aqlvfw0%2FhiaSrzpermT0x7rjUf6b0waWk%2BxdhElz0TEUAUzrUr3kNNcBCRzDNpdkm%2BAbpyWEqnNOetRYbJzf70lstbSMzc620smGrh%2FnxpI%2B9VWy0w%2FkOSHJMAaGY27xiiOhdwjwi7D7qLkr0AQK6yXnc9mmdqVHLzUGMFBCDfSMQnjsj9cbQS5VGnKBLj4cAseuEonZybdosTg7zEqbZogBg6Psfp1gSs7J%2BqF3uxzJjaBC45pCim%2Bbcqq3NNyMjfXEN%2Fu1EggJiDZh8DfQeUNsqkMNKhJmwt1328OWA%2FEwUfHojSXNPvpgTcHUhlDqd0qKhssZlS9FTKI3m0LULJ8GqcGUoSlgyD1YYWK51OtZ5ATFvYqw%2BIDeSr6HsLIdbM7Q%2BJr%2FqSsr8UPU0XnxNkPFaZS8vRzWuj07HHLrv7V98nJdc9KCXsXzlZuzKxaJmyKqV3sWa1L1Io9q%2Bz2WmxEGgbxinWDq%2BnVGDOEkxYKFaihZZKdBXoHAo5K7VTuBuFw4DWjm3y1PaYKKg4lMLSXpcEGOqUBIlyXKlvSGpoZzjNO%2BsR8UwWfLuYnsDQaKneoygEug7MjRRcxlZ8aXwix2JbLyTqCONizjVTnQ2%2F2S1%2FY0nHTVqVHljL88LXl6CkpueNokqghZDMcC3hW3TJelzcHUbJ6oBf7fvS%2F2NUQIsN0Xplyl4VOR4OL8zTKBIjqr7sfFSzRkT0s3YhwhgbXL1ZE0GeQZe7WIjuRCDwbnkUax6ZZshJUgTvC&X-Amz-Signature=897108e734028419f6b40b72c51e1913235b0249c9415511c69d21af963e3c34&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKIL2VY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fc5UOudwmJOeFR0zlca6ZSW%2Bbx%2F%2BpoEtAH%2FpCSGcx3QIgLBARYba9IE7slkRGugd6tKtHAn5qEqRPbHWrZ0XbhWwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDORKoTwHx8tC936IDircAy%2BZlEIq9EKtZ0VfisN2rxMfzGU0oQH4mATXSAArT3%2FJacOYqqXfImZuO4pec%2Blt1hVagknfO42sfZY6djEXvcvJRO6EmDtRtOCayZq57Aqlvfw0%2FhiaSrzpermT0x7rjUf6b0waWk%2BxdhElz0TEUAUzrUr3kNNcBCRzDNpdkm%2BAbpyWEqnNOetRYbJzf70lstbSMzc620smGrh%2FnxpI%2B9VWy0w%2FkOSHJMAaGY27xiiOhdwjwi7D7qLkr0AQK6yXnc9mmdqVHLzUGMFBCDfSMQnjsj9cbQS5VGnKBLj4cAseuEonZybdosTg7zEqbZogBg6Psfp1gSs7J%2BqF3uxzJjaBC45pCim%2Bbcqq3NNyMjfXEN%2Fu1EggJiDZh8DfQeUNsqkMNKhJmwt1328OWA%2FEwUfHojSXNPvpgTcHUhlDqd0qKhssZlS9FTKI3m0LULJ8GqcGUoSlgyD1YYWK51OtZ5ATFvYqw%2BIDeSr6HsLIdbM7Q%2BJr%2FqSsr8UPU0XnxNkPFaZS8vRzWuj07HHLrv7V98nJdc9KCXsXzlZuzKxaJmyKqV3sWa1L1Io9q%2Bz2WmxEGgbxinWDq%2BnVGDOEkxYKFaihZZKdBXoHAo5K7VTuBuFw4DWjm3y1PaYKKg4lMLSXpcEGOqUBIlyXKlvSGpoZzjNO%2BsR8UwWfLuYnsDQaKneoygEug7MjRRcxlZ8aXwix2JbLyTqCONizjVTnQ2%2F2S1%2FY0nHTVqVHljL88LXl6CkpueNokqghZDMcC3hW3TJelzcHUbJ6oBf7fvS%2F2NUQIsN0Xplyl4VOR4OL8zTKBIjqr7sfFSzRkT0s3YhwhgbXL1ZE0GeQZe7WIjuRCDwbnkUax6ZZshJUgTvC&X-Amz-Signature=2ac642bf57427d45d5dce23fef2d057309b347b9168d533375e7b6041b6ec1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKIL2VY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fc5UOudwmJOeFR0zlca6ZSW%2Bbx%2F%2BpoEtAH%2FpCSGcx3QIgLBARYba9IE7slkRGugd6tKtHAn5qEqRPbHWrZ0XbhWwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDORKoTwHx8tC936IDircAy%2BZlEIq9EKtZ0VfisN2rxMfzGU0oQH4mATXSAArT3%2FJacOYqqXfImZuO4pec%2Blt1hVagknfO42sfZY6djEXvcvJRO6EmDtRtOCayZq57Aqlvfw0%2FhiaSrzpermT0x7rjUf6b0waWk%2BxdhElz0TEUAUzrUr3kNNcBCRzDNpdkm%2BAbpyWEqnNOetRYbJzf70lstbSMzc620smGrh%2FnxpI%2B9VWy0w%2FkOSHJMAaGY27xiiOhdwjwi7D7qLkr0AQK6yXnc9mmdqVHLzUGMFBCDfSMQnjsj9cbQS5VGnKBLj4cAseuEonZybdosTg7zEqbZogBg6Psfp1gSs7J%2BqF3uxzJjaBC45pCim%2Bbcqq3NNyMjfXEN%2Fu1EggJiDZh8DfQeUNsqkMNKhJmwt1328OWA%2FEwUfHojSXNPvpgTcHUhlDqd0qKhssZlS9FTKI3m0LULJ8GqcGUoSlgyD1YYWK51OtZ5ATFvYqw%2BIDeSr6HsLIdbM7Q%2BJr%2FqSsr8UPU0XnxNkPFaZS8vRzWuj07HHLrv7V98nJdc9KCXsXzlZuzKxaJmyKqV3sWa1L1Io9q%2Bz2WmxEGgbxinWDq%2BnVGDOEkxYKFaihZZKdBXoHAo5K7VTuBuFw4DWjm3y1PaYKKg4lMLSXpcEGOqUBIlyXKlvSGpoZzjNO%2BsR8UwWfLuYnsDQaKneoygEug7MjRRcxlZ8aXwix2JbLyTqCONizjVTnQ2%2F2S1%2FY0nHTVqVHljL88LXl6CkpueNokqghZDMcC3hW3TJelzcHUbJ6oBf7fvS%2F2NUQIsN0Xplyl4VOR4OL8zTKBIjqr7sfFSzRkT0s3YhwhgbXL1ZE0GeQZe7WIjuRCDwbnkUax6ZZshJUgTvC&X-Amz-Signature=23d919d16d29521d50b68e02fc352761b89c3bc28e296d06b12ee761b0e6892d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
