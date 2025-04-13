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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRZMKVY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCqr%2Bu5Y7u8WJM8%2FPGhIaFnIoa7mX%2BdhBoCAQopcqlU6AIhAJi%2FNmQuDnyAjpHG0QT%2BxRhma85ifIjrAWgWj0ShXchpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWaXS7LiPIQUd9sp0q3APo%2BphsHC8bnjqDMY%2FzxfIG3xpI7IsmsrovmKh4ezE6Vo%2BhYq5e9ILAocWzJas%2BxhFEwOMERfA2mfnzRk1UhXhFSuVjcRI8LVHLj%2Box6LxrhYX737DcliB6aWHQHCC%2BMRaJZNzsRnt6e%2B%2FV0dmv5YfoOB1SyUUeQKuTawJANC3zLQS3CFpo%2FyEJTfX6QzAfSMLWlHo8uFRbvCphiGSgUJ69vhOhCDcjNoEqNk1BHiwgWfyH8Rjo1B0slZytjqtoIzMnzCcGcJryTViSzuabs46HCyryvqNqV9%2FBcfRsZoDUNYYcFe6TKujaBeE6wIlqhhkbEDnQrw90sh1i2JQvxNw4Bmml5iKp1Y6X9rZ87YasZ7P35ka8YGwKYFx2i%2Fm3ySpQ3E4WE%2B5WqB940B1Nw21BZQMwgDo5eZUdWce1i0Q%2BgMHk3Pk8xpeC1rS3qvmIiOY9Ezrsf0NxJAUktB70CsivzT5QmFShXv1sp%2FzPVXBFNRPCDoA1FvJ%2FSQuSpgmbHqFwr3X8T7XzGkrdurQEV4BymQ7MAP5yUTc9IBG6UprMPAZ%2BgtN3XiQe5fwQYbECv%2F%2Bhpees3nLNqX5NrcZSGjoV0ig3rZ4GapB3rZEZWQuiXcEibqsQMsMMW7v8%2FTDvve6%2FBjqkAcwUP%2FHUAMxiSlLyoZ6MGj9lfwzaYu5TkRjwyiU2azKXThNT5jKvksolofd5YWq2hZd0ESZi4B%2FTt6NemBUm92b6PYHidsjvAqVWA%2Fwgy%2BWmSziVS8kpZ3mvuHUFI7ekrQUQg0Fhxg1cskupH65%2B2FbStd4nlCUip7tbZlwA8Pe7NCrzsfEnoaSi6RIvQdZBY14QGXDlLxV9xSYwpYPhNGyDWa0N&X-Amz-Signature=fb11f2b2d365b8c82650ec9376fc44219f6f8296cc0bf6a8ed80542a38364d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRZMKVY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCqr%2Bu5Y7u8WJM8%2FPGhIaFnIoa7mX%2BdhBoCAQopcqlU6AIhAJi%2FNmQuDnyAjpHG0QT%2BxRhma85ifIjrAWgWj0ShXchpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWaXS7LiPIQUd9sp0q3APo%2BphsHC8bnjqDMY%2FzxfIG3xpI7IsmsrovmKh4ezE6Vo%2BhYq5e9ILAocWzJas%2BxhFEwOMERfA2mfnzRk1UhXhFSuVjcRI8LVHLj%2Box6LxrhYX737DcliB6aWHQHCC%2BMRaJZNzsRnt6e%2B%2FV0dmv5YfoOB1SyUUeQKuTawJANC3zLQS3CFpo%2FyEJTfX6QzAfSMLWlHo8uFRbvCphiGSgUJ69vhOhCDcjNoEqNk1BHiwgWfyH8Rjo1B0slZytjqtoIzMnzCcGcJryTViSzuabs46HCyryvqNqV9%2FBcfRsZoDUNYYcFe6TKujaBeE6wIlqhhkbEDnQrw90sh1i2JQvxNw4Bmml5iKp1Y6X9rZ87YasZ7P35ka8YGwKYFx2i%2Fm3ySpQ3E4WE%2B5WqB940B1Nw21BZQMwgDo5eZUdWce1i0Q%2BgMHk3Pk8xpeC1rS3qvmIiOY9Ezrsf0NxJAUktB70CsivzT5QmFShXv1sp%2FzPVXBFNRPCDoA1FvJ%2FSQuSpgmbHqFwr3X8T7XzGkrdurQEV4BymQ7MAP5yUTc9IBG6UprMPAZ%2BgtN3XiQe5fwQYbECv%2F%2Bhpees3nLNqX5NrcZSGjoV0ig3rZ4GapB3rZEZWQuiXcEibqsQMsMMW7v8%2FTDvve6%2FBjqkAcwUP%2FHUAMxiSlLyoZ6MGj9lfwzaYu5TkRjwyiU2azKXThNT5jKvksolofd5YWq2hZd0ESZi4B%2FTt6NemBUm92b6PYHidsjvAqVWA%2Fwgy%2BWmSziVS8kpZ3mvuHUFI7ekrQUQg0Fhxg1cskupH65%2B2FbStd4nlCUip7tbZlwA8Pe7NCrzsfEnoaSi6RIvQdZBY14QGXDlLxV9xSYwpYPhNGyDWa0N&X-Amz-Signature=d242bcb334df4ca7c294af32f31418425cc87f2e2dee65a53e5d3b66991997ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRZMKVY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCqr%2Bu5Y7u8WJM8%2FPGhIaFnIoa7mX%2BdhBoCAQopcqlU6AIhAJi%2FNmQuDnyAjpHG0QT%2BxRhma85ifIjrAWgWj0ShXchpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWaXS7LiPIQUd9sp0q3APo%2BphsHC8bnjqDMY%2FzxfIG3xpI7IsmsrovmKh4ezE6Vo%2BhYq5e9ILAocWzJas%2BxhFEwOMERfA2mfnzRk1UhXhFSuVjcRI8LVHLj%2Box6LxrhYX737DcliB6aWHQHCC%2BMRaJZNzsRnt6e%2B%2FV0dmv5YfoOB1SyUUeQKuTawJANC3zLQS3CFpo%2FyEJTfX6QzAfSMLWlHo8uFRbvCphiGSgUJ69vhOhCDcjNoEqNk1BHiwgWfyH8Rjo1B0slZytjqtoIzMnzCcGcJryTViSzuabs46HCyryvqNqV9%2FBcfRsZoDUNYYcFe6TKujaBeE6wIlqhhkbEDnQrw90sh1i2JQvxNw4Bmml5iKp1Y6X9rZ87YasZ7P35ka8YGwKYFx2i%2Fm3ySpQ3E4WE%2B5WqB940B1Nw21BZQMwgDo5eZUdWce1i0Q%2BgMHk3Pk8xpeC1rS3qvmIiOY9Ezrsf0NxJAUktB70CsivzT5QmFShXv1sp%2FzPVXBFNRPCDoA1FvJ%2FSQuSpgmbHqFwr3X8T7XzGkrdurQEV4BymQ7MAP5yUTc9IBG6UprMPAZ%2BgtN3XiQe5fwQYbECv%2F%2Bhpees3nLNqX5NrcZSGjoV0ig3rZ4GapB3rZEZWQuiXcEibqsQMsMMW7v8%2FTDvve6%2FBjqkAcwUP%2FHUAMxiSlLyoZ6MGj9lfwzaYu5TkRjwyiU2azKXThNT5jKvksolofd5YWq2hZd0ESZi4B%2FTt6NemBUm92b6PYHidsjvAqVWA%2Fwgy%2BWmSziVS8kpZ3mvuHUFI7ekrQUQg0Fhxg1cskupH65%2B2FbStd4nlCUip7tbZlwA8Pe7NCrzsfEnoaSi6RIvQdZBY14QGXDlLxV9xSYwpYPhNGyDWa0N&X-Amz-Signature=4a44606c53fb5d1b1c86826148a342e833c9e260dc872ffa0a8196d676a4ca04&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
