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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TI5DBD3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG58Oxt0s9oKeU7WCFwcRX0GaFvbQCpsmIePiLtR82ykAiEA2Y2WFsh5GykLBcLXfG9VoymLoVNBiCp9iaBta%2B%2FOJJgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe0vch1QUvUProjPircA3rKkn0t%2FbWhjF3ONUf98ygmPYQi%2FhYL311zKy2Wkc76EL8YeDXqRotGz3ww5jipxHpZq1O0Wcr3Hv6Fv5CJto5Ef2ZoGR57OyMu9qb0LX973hUBSV34NyN%2BldP%2Be8irbz%2BydWS%2BPZLir7%2BbNAk3s%2Bh0uIIhfkYhoqKkxD61KT7E%2FP2MY8hUTcRCNa51uujesMi2jygbsGz4tKw2pnqPGWqjR0HaixPs0TUMAHrf8K4e85c62naUQYMXfx%2BW5qKUxzAI2B1ro%2FosC72OFkbenIhrwu2DID%2BFnZY3AoCJwVWlsjodcAXQzeo37191LkYSiG01%2FQERkUdxbdEU4A3QatY5L1wu7qIMdSKAkc4G95MPDRwVQ07b9wtHsFIQpVZAfbgpDCZuhBa84vbA396OW5T7xUJRWOBC73hA%2Fqe3pHgiwVoYwfAZfgZ8AGnjnkV7uCGv79tRUOkZ%2Bhfel5hvIcZ3BuRnob59zFJgYJnBQU64WakGTO8aXASp%2FfT7mNJRRFZNbipiAHY%2B7piwV%2Bx6tvYhbZTEjr3cIFGIDGTlb69pvMB9UKD3fciWZ0slZ24YeIoaap%2FJv0il1em4gSzt%2BQOvu%2Bak8G7S6CGLuosL07sv9HodrILA%2BYiUabOjMI6wgr8GOqUBp0P5yW5QA%2FWNhp9ZBhouRi%2Bro83kiwFU9SOHTPb%2BsFQ9UnsOAhq6qRMg7ebuZDLKG684eZmKUdRHAeFn7gMyuy5QPyuCCC6H0yFKvTIXIXynhts0wVSZoPF8pMh23yguqKI9V8b5REx7HYUZTCPSNfZEY7WgLlLkU3BmxbFeQ2I0vnHvjJjKOhTt6Cfp3J9byZ8A4%2BA%2BN0QLppiGXBpibTFJnwbO&X-Amz-Signature=1c542e9bd80a17aece13d0bc21c35a1f2e8eb974d3a7f893995fa562b136b024&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TI5DBD3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG58Oxt0s9oKeU7WCFwcRX0GaFvbQCpsmIePiLtR82ykAiEA2Y2WFsh5GykLBcLXfG9VoymLoVNBiCp9iaBta%2B%2FOJJgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe0vch1QUvUProjPircA3rKkn0t%2FbWhjF3ONUf98ygmPYQi%2FhYL311zKy2Wkc76EL8YeDXqRotGz3ww5jipxHpZq1O0Wcr3Hv6Fv5CJto5Ef2ZoGR57OyMu9qb0LX973hUBSV34NyN%2BldP%2Be8irbz%2BydWS%2BPZLir7%2BbNAk3s%2Bh0uIIhfkYhoqKkxD61KT7E%2FP2MY8hUTcRCNa51uujesMi2jygbsGz4tKw2pnqPGWqjR0HaixPs0TUMAHrf8K4e85c62naUQYMXfx%2BW5qKUxzAI2B1ro%2FosC72OFkbenIhrwu2DID%2BFnZY3AoCJwVWlsjodcAXQzeo37191LkYSiG01%2FQERkUdxbdEU4A3QatY5L1wu7qIMdSKAkc4G95MPDRwVQ07b9wtHsFIQpVZAfbgpDCZuhBa84vbA396OW5T7xUJRWOBC73hA%2Fqe3pHgiwVoYwfAZfgZ8AGnjnkV7uCGv79tRUOkZ%2Bhfel5hvIcZ3BuRnob59zFJgYJnBQU64WakGTO8aXASp%2FfT7mNJRRFZNbipiAHY%2B7piwV%2Bx6tvYhbZTEjr3cIFGIDGTlb69pvMB9UKD3fciWZ0slZ24YeIoaap%2FJv0il1em4gSzt%2BQOvu%2Bak8G7S6CGLuosL07sv9HodrILA%2BYiUabOjMI6wgr8GOqUBp0P5yW5QA%2FWNhp9ZBhouRi%2Bro83kiwFU9SOHTPb%2BsFQ9UnsOAhq6qRMg7ebuZDLKG684eZmKUdRHAeFn7gMyuy5QPyuCCC6H0yFKvTIXIXynhts0wVSZoPF8pMh23yguqKI9V8b5REx7HYUZTCPSNfZEY7WgLlLkU3BmxbFeQ2I0vnHvjJjKOhTt6Cfp3J9byZ8A4%2BA%2BN0QLppiGXBpibTFJnwbO&X-Amz-Signature=a339417801dd223a84004ba86a9f4223a883d04849a83679c09b64780e422587&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TI5DBD3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG58Oxt0s9oKeU7WCFwcRX0GaFvbQCpsmIePiLtR82ykAiEA2Y2WFsh5GykLBcLXfG9VoymLoVNBiCp9iaBta%2B%2FOJJgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe0vch1QUvUProjPircA3rKkn0t%2FbWhjF3ONUf98ygmPYQi%2FhYL311zKy2Wkc76EL8YeDXqRotGz3ww5jipxHpZq1O0Wcr3Hv6Fv5CJto5Ef2ZoGR57OyMu9qb0LX973hUBSV34NyN%2BldP%2Be8irbz%2BydWS%2BPZLir7%2BbNAk3s%2Bh0uIIhfkYhoqKkxD61KT7E%2FP2MY8hUTcRCNa51uujesMi2jygbsGz4tKw2pnqPGWqjR0HaixPs0TUMAHrf8K4e85c62naUQYMXfx%2BW5qKUxzAI2B1ro%2FosC72OFkbenIhrwu2DID%2BFnZY3AoCJwVWlsjodcAXQzeo37191LkYSiG01%2FQERkUdxbdEU4A3QatY5L1wu7qIMdSKAkc4G95MPDRwVQ07b9wtHsFIQpVZAfbgpDCZuhBa84vbA396OW5T7xUJRWOBC73hA%2Fqe3pHgiwVoYwfAZfgZ8AGnjnkV7uCGv79tRUOkZ%2Bhfel5hvIcZ3BuRnob59zFJgYJnBQU64WakGTO8aXASp%2FfT7mNJRRFZNbipiAHY%2B7piwV%2Bx6tvYhbZTEjr3cIFGIDGTlb69pvMB9UKD3fciWZ0slZ24YeIoaap%2FJv0il1em4gSzt%2BQOvu%2Bak8G7S6CGLuosL07sv9HodrILA%2BYiUabOjMI6wgr8GOqUBp0P5yW5QA%2FWNhp9ZBhouRi%2Bro83kiwFU9SOHTPb%2BsFQ9UnsOAhq6qRMg7ebuZDLKG684eZmKUdRHAeFn7gMyuy5QPyuCCC6H0yFKvTIXIXynhts0wVSZoPF8pMh23yguqKI9V8b5REx7HYUZTCPSNfZEY7WgLlLkU3BmxbFeQ2I0vnHvjJjKOhTt6Cfp3J9byZ8A4%2BA%2BN0QLppiGXBpibTFJnwbO&X-Amz-Signature=6b3f2613195d51a002d2a1abd8035787430c4f32a21b89141ed08aeec053aa9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
