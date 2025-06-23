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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUGHVCN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDklvDAiSJjGj%2Br8Jk1POcrDORUnEZfDEgGwNTzgObcfQIhAKXcFylXQ1NcS4HPJ%2FLMzM1sIjaQ1eHzTJcOMxo0vEuUKv8DCBoQABoMNjM3NDIzMTgzODA1Igwq05nyaillYIDM9XYq3AMjjEFayLNTpZgRwoKzdDC5Z9hAvSZRU5QPzgTPeglCRSlmApPaTbpwHG1MUAIXfo73%2BPLrVdzz5%2FMBrvSLAJmykRu2Lswyzv8HL6dwG2boa7WNC%2F2I3BXVFLkMFBAmlvLZLl7VJgzMpbSNGzcnTexwsJoxtpo4eRQN8edlGFss6%2Fj7bY5GvUONyIfRrtMaxU1Jmy0W9b%2FKKREHPDdt3Gv9xLsCHn4eE%2F7pWAotWXuWlqXpuo7JXqgd3rTozwqgW2Gutux78knTTV2U4zry6iqbFgiLSmLwPpjqSjH8mHQxEIa4bdCgfRKadVBEZxa%2FGy8AH2sgrMI0InodQbj%2Fd4o703w%2BdywtELLkOCNVYWwycXVv%2FU21qDNC6jJyrFT%2FU8lkQIpZQeCIlaVDsifqEpXN3LnkMFPLnjyffAZQwyaWMBi37ewPKcfOtBcBPScPwXHacyEp%2F57HEmh3XZNmquo8mZ%2FWYC6SV4rvsWxm3uVVrYZQH7LJBqxrp7sGdpxwzx2otjR9Ag%2F%2FvUUr67mGZGNUskBV7IAWWfb0GGhxNzlXy%2FS9LkCUwn5co1PCjDSaCpziD1JvRiHTVAy%2FX3C24Hg3a123En2GiBH4LF0NWdyzHl9vGGbdydjxHPlLxjDSiObCBjqkASOjxNuW4HSyk7avmuCZHTRH76GxVqNnMKQfXuCOvsangyLDQhQgnwQuBpvf0rF%2FZucA1av%2FOwmFqjCvzzm0VeSeDkVd73Qt%2B1lQ5eH89zdgwDN4HgtzbecINrPKGr6W27RNr35RmEzl5izmIPIupyC60if6Smqg2ZLYK9lI0oWOvad0K1w4q1uhJ0iLmdyCvdzOBng1UGgrcWG2k9Pbg%2B5u8xtz&X-Amz-Signature=44af1ee7de92be8d381ee7daa0c244b094daeec343f6da352ebd018d4f26a6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUGHVCN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDklvDAiSJjGj%2Br8Jk1POcrDORUnEZfDEgGwNTzgObcfQIhAKXcFylXQ1NcS4HPJ%2FLMzM1sIjaQ1eHzTJcOMxo0vEuUKv8DCBoQABoMNjM3NDIzMTgzODA1Igwq05nyaillYIDM9XYq3AMjjEFayLNTpZgRwoKzdDC5Z9hAvSZRU5QPzgTPeglCRSlmApPaTbpwHG1MUAIXfo73%2BPLrVdzz5%2FMBrvSLAJmykRu2Lswyzv8HL6dwG2boa7WNC%2F2I3BXVFLkMFBAmlvLZLl7VJgzMpbSNGzcnTexwsJoxtpo4eRQN8edlGFss6%2Fj7bY5GvUONyIfRrtMaxU1Jmy0W9b%2FKKREHPDdt3Gv9xLsCHn4eE%2F7pWAotWXuWlqXpuo7JXqgd3rTozwqgW2Gutux78knTTV2U4zry6iqbFgiLSmLwPpjqSjH8mHQxEIa4bdCgfRKadVBEZxa%2FGy8AH2sgrMI0InodQbj%2Fd4o703w%2BdywtELLkOCNVYWwycXVv%2FU21qDNC6jJyrFT%2FU8lkQIpZQeCIlaVDsifqEpXN3LnkMFPLnjyffAZQwyaWMBi37ewPKcfOtBcBPScPwXHacyEp%2F57HEmh3XZNmquo8mZ%2FWYC6SV4rvsWxm3uVVrYZQH7LJBqxrp7sGdpxwzx2otjR9Ag%2F%2FvUUr67mGZGNUskBV7IAWWfb0GGhxNzlXy%2FS9LkCUwn5co1PCjDSaCpziD1JvRiHTVAy%2FX3C24Hg3a123En2GiBH4LF0NWdyzHl9vGGbdydjxHPlLxjDSiObCBjqkASOjxNuW4HSyk7avmuCZHTRH76GxVqNnMKQfXuCOvsangyLDQhQgnwQuBpvf0rF%2FZucA1av%2FOwmFqjCvzzm0VeSeDkVd73Qt%2B1lQ5eH89zdgwDN4HgtzbecINrPKGr6W27RNr35RmEzl5izmIPIupyC60if6Smqg2ZLYK9lI0oWOvad0K1w4q1uhJ0iLmdyCvdzOBng1UGgrcWG2k9Pbg%2B5u8xtz&X-Amz-Signature=8dc792016400fd76cf0b03a5784085bc4b65f940f3376ed947ea278166dff529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUGHVCN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDklvDAiSJjGj%2Br8Jk1POcrDORUnEZfDEgGwNTzgObcfQIhAKXcFylXQ1NcS4HPJ%2FLMzM1sIjaQ1eHzTJcOMxo0vEuUKv8DCBoQABoMNjM3NDIzMTgzODA1Igwq05nyaillYIDM9XYq3AMjjEFayLNTpZgRwoKzdDC5Z9hAvSZRU5QPzgTPeglCRSlmApPaTbpwHG1MUAIXfo73%2BPLrVdzz5%2FMBrvSLAJmykRu2Lswyzv8HL6dwG2boa7WNC%2F2I3BXVFLkMFBAmlvLZLl7VJgzMpbSNGzcnTexwsJoxtpo4eRQN8edlGFss6%2Fj7bY5GvUONyIfRrtMaxU1Jmy0W9b%2FKKREHPDdt3Gv9xLsCHn4eE%2F7pWAotWXuWlqXpuo7JXqgd3rTozwqgW2Gutux78knTTV2U4zry6iqbFgiLSmLwPpjqSjH8mHQxEIa4bdCgfRKadVBEZxa%2FGy8AH2sgrMI0InodQbj%2Fd4o703w%2BdywtELLkOCNVYWwycXVv%2FU21qDNC6jJyrFT%2FU8lkQIpZQeCIlaVDsifqEpXN3LnkMFPLnjyffAZQwyaWMBi37ewPKcfOtBcBPScPwXHacyEp%2F57HEmh3XZNmquo8mZ%2FWYC6SV4rvsWxm3uVVrYZQH7LJBqxrp7sGdpxwzx2otjR9Ag%2F%2FvUUr67mGZGNUskBV7IAWWfb0GGhxNzlXy%2FS9LkCUwn5co1PCjDSaCpziD1JvRiHTVAy%2FX3C24Hg3a123En2GiBH4LF0NWdyzHl9vGGbdydjxHPlLxjDSiObCBjqkASOjxNuW4HSyk7avmuCZHTRH76GxVqNnMKQfXuCOvsangyLDQhQgnwQuBpvf0rF%2FZucA1av%2FOwmFqjCvzzm0VeSeDkVd73Qt%2B1lQ5eH89zdgwDN4HgtzbecINrPKGr6W27RNr35RmEzl5izmIPIupyC60if6Smqg2ZLYK9lI0oWOvad0K1w4q1uhJ0iLmdyCvdzOBng1UGgrcWG2k9Pbg%2B5u8xtz&X-Amz-Signature=d0ccb38199813435cab8a7aecec161613ca8869c918bf17da9886da388b31c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
