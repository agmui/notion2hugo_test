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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCPC2K7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIES2pobSCT9T5%2BDHjwAYFcBvGzpn%2BNAofHJIvY6XsVyCAiBy%2Fw1yWKGR1L5SestJs2cKBic%2BGv4erHhfjd5QeYxFWCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rMI0HAoertcTyQkKtwDRLTnaDYKJCdyNaGA%2BpofdliT8IBmxqq%2FpPa7x8XXtUIt3%2Bnnw1XgQqZYwqroxTO%2FvsT%2BdfJy1Avu78TZqkqAaFX7mgirP6xzYDGkNr%2Bx4olv2CQXXzzvVr%2FrwF2LW5b0l5SKznCGRXSEbhprIo1pRjDODfNx6hdJnqtdsqfqMlSZ27YAn8JHpGWfZLz0AI6rf5iBrFE644%2BSQr6LJNpi1db8ZfHXC1OL%2BtqKlMVqeT8qvmFAPWB%2BQsDvKmV8bwYGshNKUDSaMqIIX7XmvLaIpsZgj8%2F7w%2FhmVfAHDwZnZOsHtU06lN1bDVHiyJSPCO9%2Br5m6rw0GZA1kJqUGp%2BZsAfsaxaGuhQjz5fxVcsT3KQrC9jcCtL7C3z%2B3zBg91mF%2FQYflqygyKqu3DDDacMdGEPb8k4Un1yiPL36%2BTiLLsP8l02WnyfjNtmx97HXY6jPEuhWGDVuBJh1NkJXOwyRDtsbE6nERUSXXXyQ8HJYA%2BVVUEztHaua3cA8myQz7bCggu%2FwQFA73gCdPvJKn4rXGUoCJyJTu7w6qGWiF%2BKWCXSrVE8o35gHxypA2J7qFEYhtQJ9gLRjq2reb4SLenuaqMBcackqy3TMbHiKap9yWY01PjY30c6NIUiNW0S4wk7P3wQY6pgH%2FQpt%2Fl95hQYPGghyed7ZS%2Bho6iwKT9ZlLWEK1nSXBAn3%2FT6c9eRqQ%2FQNttyXJ%2F%2BN3915iFxIU%2FqCEB03Cm5m0SwnAm94zqddSt%2FBTCjBbnfTKk2CnES2rEzwOT3NTDsLfeph0MVKr6%2BEgk%2FnCdnrwRu1cRjp2m4e9zzmxmQWiTBLGl474kZLbk0Z5Imn94zCUZOqVWhj51%2F1TpNUN9hIqOyP7Sdr%2F&X-Amz-Signature=87f0512d5ab89a25fe069a17235e7debbf361b89fbcb5cfd8013cf44c3cc71e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCPC2K7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIES2pobSCT9T5%2BDHjwAYFcBvGzpn%2BNAofHJIvY6XsVyCAiBy%2Fw1yWKGR1L5SestJs2cKBic%2BGv4erHhfjd5QeYxFWCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rMI0HAoertcTyQkKtwDRLTnaDYKJCdyNaGA%2BpofdliT8IBmxqq%2FpPa7x8XXtUIt3%2Bnnw1XgQqZYwqroxTO%2FvsT%2BdfJy1Avu78TZqkqAaFX7mgirP6xzYDGkNr%2Bx4olv2CQXXzzvVr%2FrwF2LW5b0l5SKznCGRXSEbhprIo1pRjDODfNx6hdJnqtdsqfqMlSZ27YAn8JHpGWfZLz0AI6rf5iBrFE644%2BSQr6LJNpi1db8ZfHXC1OL%2BtqKlMVqeT8qvmFAPWB%2BQsDvKmV8bwYGshNKUDSaMqIIX7XmvLaIpsZgj8%2F7w%2FhmVfAHDwZnZOsHtU06lN1bDVHiyJSPCO9%2Br5m6rw0GZA1kJqUGp%2BZsAfsaxaGuhQjz5fxVcsT3KQrC9jcCtL7C3z%2B3zBg91mF%2FQYflqygyKqu3DDDacMdGEPb8k4Un1yiPL36%2BTiLLsP8l02WnyfjNtmx97HXY6jPEuhWGDVuBJh1NkJXOwyRDtsbE6nERUSXXXyQ8HJYA%2BVVUEztHaua3cA8myQz7bCggu%2FwQFA73gCdPvJKn4rXGUoCJyJTu7w6qGWiF%2BKWCXSrVE8o35gHxypA2J7qFEYhtQJ9gLRjq2reb4SLenuaqMBcackqy3TMbHiKap9yWY01PjY30c6NIUiNW0S4wk7P3wQY6pgH%2FQpt%2Fl95hQYPGghyed7ZS%2Bho6iwKT9ZlLWEK1nSXBAn3%2FT6c9eRqQ%2FQNttyXJ%2F%2BN3915iFxIU%2FqCEB03Cm5m0SwnAm94zqddSt%2FBTCjBbnfTKk2CnES2rEzwOT3NTDsLfeph0MVKr6%2BEgk%2FnCdnrwRu1cRjp2m4e9zzmxmQWiTBLGl474kZLbk0Z5Imn94zCUZOqVWhj51%2F1TpNUN9hIqOyP7Sdr%2F&X-Amz-Signature=44a339999e02fd3688e1d675b26ee99f1f57b1c245c92a2ae7e920687c96a25d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCPC2K7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIES2pobSCT9T5%2BDHjwAYFcBvGzpn%2BNAofHJIvY6XsVyCAiBy%2Fw1yWKGR1L5SestJs2cKBic%2BGv4erHhfjd5QeYxFWCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rMI0HAoertcTyQkKtwDRLTnaDYKJCdyNaGA%2BpofdliT8IBmxqq%2FpPa7x8XXtUIt3%2Bnnw1XgQqZYwqroxTO%2FvsT%2BdfJy1Avu78TZqkqAaFX7mgirP6xzYDGkNr%2Bx4olv2CQXXzzvVr%2FrwF2LW5b0l5SKznCGRXSEbhprIo1pRjDODfNx6hdJnqtdsqfqMlSZ27YAn8JHpGWfZLz0AI6rf5iBrFE644%2BSQr6LJNpi1db8ZfHXC1OL%2BtqKlMVqeT8qvmFAPWB%2BQsDvKmV8bwYGshNKUDSaMqIIX7XmvLaIpsZgj8%2F7w%2FhmVfAHDwZnZOsHtU06lN1bDVHiyJSPCO9%2Br5m6rw0GZA1kJqUGp%2BZsAfsaxaGuhQjz5fxVcsT3KQrC9jcCtL7C3z%2B3zBg91mF%2FQYflqygyKqu3DDDacMdGEPb8k4Un1yiPL36%2BTiLLsP8l02WnyfjNtmx97HXY6jPEuhWGDVuBJh1NkJXOwyRDtsbE6nERUSXXXyQ8HJYA%2BVVUEztHaua3cA8myQz7bCggu%2FwQFA73gCdPvJKn4rXGUoCJyJTu7w6qGWiF%2BKWCXSrVE8o35gHxypA2J7qFEYhtQJ9gLRjq2reb4SLenuaqMBcackqy3TMbHiKap9yWY01PjY30c6NIUiNW0S4wk7P3wQY6pgH%2FQpt%2Fl95hQYPGghyed7ZS%2Bho6iwKT9ZlLWEK1nSXBAn3%2FT6c9eRqQ%2FQNttyXJ%2F%2BN3915iFxIU%2FqCEB03Cm5m0SwnAm94zqddSt%2FBTCjBbnfTKk2CnES2rEzwOT3NTDsLfeph0MVKr6%2BEgk%2FnCdnrwRu1cRjp2m4e9zzmxmQWiTBLGl474kZLbk0Z5Imn94zCUZOqVWhj51%2F1TpNUN9hIqOyP7Sdr%2F&X-Amz-Signature=1c34fbeeb92f4985fc3400dca07933388cc53dcb762a7c30900361376da2525c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
