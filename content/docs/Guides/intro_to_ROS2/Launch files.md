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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDDXS4R%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFexh6LTSiLJVORMh%2FKpY32%2F%2FfsRk6P840Gm01%2BKzZCIAiAfF3LapK%2FYWS9gDxU7LGcAJfXLOyrv%2FNIu56hjjxRMyiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbFD%2F4TGnpumm7quBKtwDg7G5RxaMCxX2BqQbi%2BCpyYoA1gwbZRAHX6nHw%2BKWFGlKD7hda3tv%2BxWpwDeqiS%2B8NEogwyGmjbcGVC4grIWN002pFW%2BMCwAUyEgoNae%2FxIJgwZl%2BWxnq2gtuxC9vN7lY9Q%2B76%2FgYBkG5d%2FgWMH2rzc%2BheZm9IzAYHep9mRGHLCrlddrCK6gq611Zoy5s52YWlh8JTO%2BdBTvDdIwj%2BLe66liNJuPa8QnxCR6SLWYizp4fkMUYpuddybWDzSIiWg5p0IPy18queLhfzAmJ0vWK3ShO2SO9GctYRbaEgiltYL3RP4aERulHracjMhyu1vuAN0RBgOlleuUitteNGFSOPXnmNVitPd0wDJyHGMqcBRe6aBo7bMmvndWnKZ1mGLgYeADL3%2BmHIO2%2BJCwgLHL91XODwhxSCd9I%2Bcr%2FrriwLpaowj2p461SjZQFrcDxAgOGgyZWTBYB6CPZtMaLg1JPXx1IGpKMRKWYwLTfIWDIcQXLmj55tZXi8YLZ7ajRtVDxwtw2lgUa1ZbcGxuQNe1DitE%2BSRSTzRDZSp0O3U6JAIT4LrIjcqA2EOpOqeWGz93zgqXnpc3MbgNQ9LK1ki6olPa79Kenxrmzrs8aZW2faw1JR4MyiQgwi9N%2B5bowlc2vxAY6pgH9JThLzhl3ITBQ1bp7wjVFzPgFEAVT3qv0Gt8LWpUEjpTuWByxt62D4fwcNq4Fkz6HbDWr%2B%2Fv60XRBUqW%2F7S6DjGFhOOb7H%2BWmDoN6YpHgoG6PfheCf3etCtd0CcL%2Fd%2BSUI7Gyuoza0kQVJtRaHOgwVpwoZLy2xLAMnbqOZ4xEeoAbNsK4Jfnm88KAUct7DMMc1c9q%2BTY%2B4Y6eS0eDVqPNuHCoWBys&X-Amz-Signature=402b3dc9170750280543e822bd7e7bc84ff980066f2a1987dcbb11dc022ef62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDDXS4R%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFexh6LTSiLJVORMh%2FKpY32%2F%2FfsRk6P840Gm01%2BKzZCIAiAfF3LapK%2FYWS9gDxU7LGcAJfXLOyrv%2FNIu56hjjxRMyiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbFD%2F4TGnpumm7quBKtwDg7G5RxaMCxX2BqQbi%2BCpyYoA1gwbZRAHX6nHw%2BKWFGlKD7hda3tv%2BxWpwDeqiS%2B8NEogwyGmjbcGVC4grIWN002pFW%2BMCwAUyEgoNae%2FxIJgwZl%2BWxnq2gtuxC9vN7lY9Q%2B76%2FgYBkG5d%2FgWMH2rzc%2BheZm9IzAYHep9mRGHLCrlddrCK6gq611Zoy5s52YWlh8JTO%2BdBTvDdIwj%2BLe66liNJuPa8QnxCR6SLWYizp4fkMUYpuddybWDzSIiWg5p0IPy18queLhfzAmJ0vWK3ShO2SO9GctYRbaEgiltYL3RP4aERulHracjMhyu1vuAN0RBgOlleuUitteNGFSOPXnmNVitPd0wDJyHGMqcBRe6aBo7bMmvndWnKZ1mGLgYeADL3%2BmHIO2%2BJCwgLHL91XODwhxSCd9I%2Bcr%2FrriwLpaowj2p461SjZQFrcDxAgOGgyZWTBYB6CPZtMaLg1JPXx1IGpKMRKWYwLTfIWDIcQXLmj55tZXi8YLZ7ajRtVDxwtw2lgUa1ZbcGxuQNe1DitE%2BSRSTzRDZSp0O3U6JAIT4LrIjcqA2EOpOqeWGz93zgqXnpc3MbgNQ9LK1ki6olPa79Kenxrmzrs8aZW2faw1JR4MyiQgwi9N%2B5bowlc2vxAY6pgH9JThLzhl3ITBQ1bp7wjVFzPgFEAVT3qv0Gt8LWpUEjpTuWByxt62D4fwcNq4Fkz6HbDWr%2B%2Fv60XRBUqW%2F7S6DjGFhOOb7H%2BWmDoN6YpHgoG6PfheCf3etCtd0CcL%2Fd%2BSUI7Gyuoza0kQVJtRaHOgwVpwoZLy2xLAMnbqOZ4xEeoAbNsK4Jfnm88KAUct7DMMc1c9q%2BTY%2B4Y6eS0eDVqPNuHCoWBys&X-Amz-Signature=3ae9862f033454d18f53a18b7394075678c67e267cea28bc7df578e348685173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDDXS4R%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFexh6LTSiLJVORMh%2FKpY32%2F%2FfsRk6P840Gm01%2BKzZCIAiAfF3LapK%2FYWS9gDxU7LGcAJfXLOyrv%2FNIu56hjjxRMyiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbFD%2F4TGnpumm7quBKtwDg7G5RxaMCxX2BqQbi%2BCpyYoA1gwbZRAHX6nHw%2BKWFGlKD7hda3tv%2BxWpwDeqiS%2B8NEogwyGmjbcGVC4grIWN002pFW%2BMCwAUyEgoNae%2FxIJgwZl%2BWxnq2gtuxC9vN7lY9Q%2B76%2FgYBkG5d%2FgWMH2rzc%2BheZm9IzAYHep9mRGHLCrlddrCK6gq611Zoy5s52YWlh8JTO%2BdBTvDdIwj%2BLe66liNJuPa8QnxCR6SLWYizp4fkMUYpuddybWDzSIiWg5p0IPy18queLhfzAmJ0vWK3ShO2SO9GctYRbaEgiltYL3RP4aERulHracjMhyu1vuAN0RBgOlleuUitteNGFSOPXnmNVitPd0wDJyHGMqcBRe6aBo7bMmvndWnKZ1mGLgYeADL3%2BmHIO2%2BJCwgLHL91XODwhxSCd9I%2Bcr%2FrriwLpaowj2p461SjZQFrcDxAgOGgyZWTBYB6CPZtMaLg1JPXx1IGpKMRKWYwLTfIWDIcQXLmj55tZXi8YLZ7ajRtVDxwtw2lgUa1ZbcGxuQNe1DitE%2BSRSTzRDZSp0O3U6JAIT4LrIjcqA2EOpOqeWGz93zgqXnpc3MbgNQ9LK1ki6olPa79Kenxrmzrs8aZW2faw1JR4MyiQgwi9N%2B5bowlc2vxAY6pgH9JThLzhl3ITBQ1bp7wjVFzPgFEAVT3qv0Gt8LWpUEjpTuWByxt62D4fwcNq4Fkz6HbDWr%2B%2Fv60XRBUqW%2F7S6DjGFhOOb7H%2BWmDoN6YpHgoG6PfheCf3etCtd0CcL%2Fd%2BSUI7Gyuoza0kQVJtRaHOgwVpwoZLy2xLAMnbqOZ4xEeoAbNsK4Jfnm88KAUct7DMMc1c9q%2BTY%2B4Y6eS0eDVqPNuHCoWBys&X-Amz-Signature=279c8fd874b0bec3f58ce0c6030aac4132b5bf0697ab6bde001426340c156380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
