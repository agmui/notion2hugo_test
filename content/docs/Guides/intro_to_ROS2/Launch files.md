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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZDHAZ2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF6q3LdifRGVSGxYLgIeyZZxFUDeJLRjcG67GKv8D0lAAiEAyIW3APepzAAN8Dq5jGe49egqSdFN8IGewij2rTFNk4wqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLve3Gc0UYEMvJGUvCrcAylMcm6s90NDazVEJ6NRpRso1sxmP1dsKb%2F0Wt6wYoZTuapqb7DTVvLhkzLNZqWwk3tLuLCwRyEgRLnLbx4T%2Bs82qJHmcFYKuEsr6cPHR%2FWfejt%2Fl5MbMmLqlyrizgT%2Bu470BmjhjCTN3%2F%2Fjp2YaQ71n6nK7iQTnF%2BAvNkhMb7pWylyjd0ulmoRbO%2F2zHJaQ50zPdSlhMt3mIqHR7cIBYK1D%2Bx8A7WHPBRjMWTjQcAc4J0CWLQhERFbQ22Cymp9VZTBhqo1K7nOXF4foVj2FGbXUCcUEFRwfLgyOtbrXTLjeDIIv2Ksr5dM8grnNdgkExERdwMBU1nMwnwQXtzn3p%2BWZL%2FgkaeMNF4iixiJj91o27O398J0m2QsA0WiUQ4e47bn5%2FD8s5nz1m4TnqoJyGKPp6SKNXkrhNuApIkrFOBdzn8z9t43b4ZP6XwMOOJf16QhmQnxazZ%2FBq3j%2FQ9d9QdmTj3kOn2nokg3KqdJ0nBd%2BeiVwk0e3ZDxC4SWi%2BpWnDbEGnzm%2FUDENqoPGyTkECPlTNE5Lyii16GAHki8PCw%2FMOqHm3bYgvzB62I5ehsojoyjP3oEUQnRwxFudc9e2Uv2CvGFvk610hfMnA6Mle7ugS7Sz4ugvCL6fOJCQMLv%2Bxb4GOqUBR%2F7QeeQKN8nvfQAgmFNQbfNEhbpmzgbuiHRaKXyWrJfLuuuPaYsx7j9I6mdVR7lgZNuCkiV4WUAulbRkIdpke7Np4eHniftCNgoyQyoHJ10c%2BOtRIVrLzRJC0Q0i8WNNPofv4BR%2Fhttco8BVlB3yWQZ26%2B7d0cZc643U8jELE8ctFTrqszM%2BVDRgNCzxUoY0rPEupWH1o0%2BArRXSZ4E8A0raoWxt&X-Amz-Signature=86c3ea25a96d312a15c522c92e8461f4a47381fc360cbb03b7b977bd9686bb48&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZDHAZ2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF6q3LdifRGVSGxYLgIeyZZxFUDeJLRjcG67GKv8D0lAAiEAyIW3APepzAAN8Dq5jGe49egqSdFN8IGewij2rTFNk4wqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLve3Gc0UYEMvJGUvCrcAylMcm6s90NDazVEJ6NRpRso1sxmP1dsKb%2F0Wt6wYoZTuapqb7DTVvLhkzLNZqWwk3tLuLCwRyEgRLnLbx4T%2Bs82qJHmcFYKuEsr6cPHR%2FWfejt%2Fl5MbMmLqlyrizgT%2Bu470BmjhjCTN3%2F%2Fjp2YaQ71n6nK7iQTnF%2BAvNkhMb7pWylyjd0ulmoRbO%2F2zHJaQ50zPdSlhMt3mIqHR7cIBYK1D%2Bx8A7WHPBRjMWTjQcAc4J0CWLQhERFbQ22Cymp9VZTBhqo1K7nOXF4foVj2FGbXUCcUEFRwfLgyOtbrXTLjeDIIv2Ksr5dM8grnNdgkExERdwMBU1nMwnwQXtzn3p%2BWZL%2FgkaeMNF4iixiJj91o27O398J0m2QsA0WiUQ4e47bn5%2FD8s5nz1m4TnqoJyGKPp6SKNXkrhNuApIkrFOBdzn8z9t43b4ZP6XwMOOJf16QhmQnxazZ%2FBq3j%2FQ9d9QdmTj3kOn2nokg3KqdJ0nBd%2BeiVwk0e3ZDxC4SWi%2BpWnDbEGnzm%2FUDENqoPGyTkECPlTNE5Lyii16GAHki8PCw%2FMOqHm3bYgvzB62I5ehsojoyjP3oEUQnRwxFudc9e2Uv2CvGFvk610hfMnA6Mle7ugS7Sz4ugvCL6fOJCQMLv%2Bxb4GOqUBR%2F7QeeQKN8nvfQAgmFNQbfNEhbpmzgbuiHRaKXyWrJfLuuuPaYsx7j9I6mdVR7lgZNuCkiV4WUAulbRkIdpke7Np4eHniftCNgoyQyoHJ10c%2BOtRIVrLzRJC0Q0i8WNNPofv4BR%2Fhttco8BVlB3yWQZ26%2B7d0cZc643U8jELE8ctFTrqszM%2BVDRgNCzxUoY0rPEupWH1o0%2BArRXSZ4E8A0raoWxt&X-Amz-Signature=0347f7d07e983e21533f966ebd3e7b46a3e0709ebaea0a5142fd2195caa18807&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WZDHAZ2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF6q3LdifRGVSGxYLgIeyZZxFUDeJLRjcG67GKv8D0lAAiEAyIW3APepzAAN8Dq5jGe49egqSdFN8IGewij2rTFNk4wqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLve3Gc0UYEMvJGUvCrcAylMcm6s90NDazVEJ6NRpRso1sxmP1dsKb%2F0Wt6wYoZTuapqb7DTVvLhkzLNZqWwk3tLuLCwRyEgRLnLbx4T%2Bs82qJHmcFYKuEsr6cPHR%2FWfejt%2Fl5MbMmLqlyrizgT%2Bu470BmjhjCTN3%2F%2Fjp2YaQ71n6nK7iQTnF%2BAvNkhMb7pWylyjd0ulmoRbO%2F2zHJaQ50zPdSlhMt3mIqHR7cIBYK1D%2Bx8A7WHPBRjMWTjQcAc4J0CWLQhERFbQ22Cymp9VZTBhqo1K7nOXF4foVj2FGbXUCcUEFRwfLgyOtbrXTLjeDIIv2Ksr5dM8grnNdgkExERdwMBU1nMwnwQXtzn3p%2BWZL%2FgkaeMNF4iixiJj91o27O398J0m2QsA0WiUQ4e47bn5%2FD8s5nz1m4TnqoJyGKPp6SKNXkrhNuApIkrFOBdzn8z9t43b4ZP6XwMOOJf16QhmQnxazZ%2FBq3j%2FQ9d9QdmTj3kOn2nokg3KqdJ0nBd%2BeiVwk0e3ZDxC4SWi%2BpWnDbEGnzm%2FUDENqoPGyTkECPlTNE5Lyii16GAHki8PCw%2FMOqHm3bYgvzB62I5ehsojoyjP3oEUQnRwxFudc9e2Uv2CvGFvk610hfMnA6Mle7ugS7Sz4ugvCL6fOJCQMLv%2Bxb4GOqUBR%2F7QeeQKN8nvfQAgmFNQbfNEhbpmzgbuiHRaKXyWrJfLuuuPaYsx7j9I6mdVR7lgZNuCkiV4WUAulbRkIdpke7Np4eHniftCNgoyQyoHJ10c%2BOtRIVrLzRJC0Q0i8WNNPofv4BR%2Fhttco8BVlB3yWQZ26%2B7d0cZc643U8jELE8ctFTrqszM%2BVDRgNCzxUoY0rPEupWH1o0%2BArRXSZ4E8A0raoWxt&X-Amz-Signature=2c22bf885b5f431eb469f8cf775c5c46710ca05c75b293fb6952409aab901dce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
