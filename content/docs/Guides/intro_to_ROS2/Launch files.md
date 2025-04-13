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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGX753C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaJkIJTBFAOU6SzT%2F7%2FXWnQ6N6aPXr905j2UTcMWL9gwIhANDNHDtZjuGR6ndorQYf3tahKHTVIqXUgZ%2FKDsQP74WFKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6vtKveaV8fKdOobIq3ANvwTSxN%2Bh0LRBWwkLfIZqwBV3Oblyr4V%2FLqvAXInQ07ZZQ22f4wjudiEdfCoY%2B2YUs2Slo5nlMrMYbkp%2BArE5F8d%2F50rzd0PiiUmWoQjE4xRGHnOSxE1VRONxF4TUKJ9fV18l6l%2B6MMsI8PiQ1vUKtlTKy45rhLHX1xdMpDMgqk4pINZmQt7XJ5Saq07Z%2B8I0VegiJ3buQhGIeFapJYEjocYD9ty2bkIqb0HWmBaoLZCTjLpz9EAgkDk0lGdo0Ww6D%2B6HRs1aSPFSJjas0G6vESMc9iqHyFqyn9D3AqmBBQGEUlbGGj%2FpXep9x5maUYVFp7cG1TBaNNStJw2usgr0aCXhvMT9qtTzsMpmH9vAMGODUCPRaPCYURVqABck7gsXWJuEue7CSGnSld0pwhiusFJNDFC7Jg7oSUFgRKERHW0bc8UbYBB61e7JvBqWvFWoQqZ1w5fc%2F%2FOmUUvBTFiKkvs00RBrCjWf5yHRXPZsc0cZohjiwlLRhExTXvzyh%2BTwvkO1QGSCfmd7UEfb4EEkLfV2UUxq3GeAT2NOOJcXm5j5Qg24Gb8zTgfIigRTN3eGZRsy5zSz1P170zqm0N440Rag0igsqV%2BbSNTDbHkxwrAXX4fslWLjd3%2FgykzCMseu%2FBjqkATF7oSy6r%2BHkf6PrMZIHIgMDymeSH6EFuSna0yfGr3sZo%2BzqRno62dJryR%2F%2BCL2ALrwc84g5V303bAiHIcmPFc75u0DK4NBvuIrFBHEDMZvt2ss2h%2FVBsYLlwz4DWGuc32QgkjbTUd8%2FevYbffwEz2ACJ4%2BXzg0yfS1CEZ%2BfOxmdTYnC2uq3yXlQyvGH%2FUUR722FEewyZFGv35a1JU8E7j%2FzEVRd&X-Amz-Signature=6a91754cc257f80e3433c91a575783569a9bdcba6b8e8f19b1db87f354a11b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGX753C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaJkIJTBFAOU6SzT%2F7%2FXWnQ6N6aPXr905j2UTcMWL9gwIhANDNHDtZjuGR6ndorQYf3tahKHTVIqXUgZ%2FKDsQP74WFKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6vtKveaV8fKdOobIq3ANvwTSxN%2Bh0LRBWwkLfIZqwBV3Oblyr4V%2FLqvAXInQ07ZZQ22f4wjudiEdfCoY%2B2YUs2Slo5nlMrMYbkp%2BArE5F8d%2F50rzd0PiiUmWoQjE4xRGHnOSxE1VRONxF4TUKJ9fV18l6l%2B6MMsI8PiQ1vUKtlTKy45rhLHX1xdMpDMgqk4pINZmQt7XJ5Saq07Z%2B8I0VegiJ3buQhGIeFapJYEjocYD9ty2bkIqb0HWmBaoLZCTjLpz9EAgkDk0lGdo0Ww6D%2B6HRs1aSPFSJjas0G6vESMc9iqHyFqyn9D3AqmBBQGEUlbGGj%2FpXep9x5maUYVFp7cG1TBaNNStJw2usgr0aCXhvMT9qtTzsMpmH9vAMGODUCPRaPCYURVqABck7gsXWJuEue7CSGnSld0pwhiusFJNDFC7Jg7oSUFgRKERHW0bc8UbYBB61e7JvBqWvFWoQqZ1w5fc%2F%2FOmUUvBTFiKkvs00RBrCjWf5yHRXPZsc0cZohjiwlLRhExTXvzyh%2BTwvkO1QGSCfmd7UEfb4EEkLfV2UUxq3GeAT2NOOJcXm5j5Qg24Gb8zTgfIigRTN3eGZRsy5zSz1P170zqm0N440Rag0igsqV%2BbSNTDbHkxwrAXX4fslWLjd3%2FgykzCMseu%2FBjqkATF7oSy6r%2BHkf6PrMZIHIgMDymeSH6EFuSna0yfGr3sZo%2BzqRno62dJryR%2F%2BCL2ALrwc84g5V303bAiHIcmPFc75u0DK4NBvuIrFBHEDMZvt2ss2h%2FVBsYLlwz4DWGuc32QgkjbTUd8%2FevYbffwEz2ACJ4%2BXzg0yfS1CEZ%2BfOxmdTYnC2uq3yXlQyvGH%2FUUR722FEewyZFGv35a1JU8E7j%2FzEVRd&X-Amz-Signature=b226c5ea1145916d7e7bfddb177ccb8d753883d8b6921533f043baaf37d7d182&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGX753C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaJkIJTBFAOU6SzT%2F7%2FXWnQ6N6aPXr905j2UTcMWL9gwIhANDNHDtZjuGR6ndorQYf3tahKHTVIqXUgZ%2FKDsQP74WFKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6vtKveaV8fKdOobIq3ANvwTSxN%2Bh0LRBWwkLfIZqwBV3Oblyr4V%2FLqvAXInQ07ZZQ22f4wjudiEdfCoY%2B2YUs2Slo5nlMrMYbkp%2BArE5F8d%2F50rzd0PiiUmWoQjE4xRGHnOSxE1VRONxF4TUKJ9fV18l6l%2B6MMsI8PiQ1vUKtlTKy45rhLHX1xdMpDMgqk4pINZmQt7XJ5Saq07Z%2B8I0VegiJ3buQhGIeFapJYEjocYD9ty2bkIqb0HWmBaoLZCTjLpz9EAgkDk0lGdo0Ww6D%2B6HRs1aSPFSJjas0G6vESMc9iqHyFqyn9D3AqmBBQGEUlbGGj%2FpXep9x5maUYVFp7cG1TBaNNStJw2usgr0aCXhvMT9qtTzsMpmH9vAMGODUCPRaPCYURVqABck7gsXWJuEue7CSGnSld0pwhiusFJNDFC7Jg7oSUFgRKERHW0bc8UbYBB61e7JvBqWvFWoQqZ1w5fc%2F%2FOmUUvBTFiKkvs00RBrCjWf5yHRXPZsc0cZohjiwlLRhExTXvzyh%2BTwvkO1QGSCfmd7UEfb4EEkLfV2UUxq3GeAT2NOOJcXm5j5Qg24Gb8zTgfIigRTN3eGZRsy5zSz1P170zqm0N440Rag0igsqV%2BbSNTDbHkxwrAXX4fslWLjd3%2FgykzCMseu%2FBjqkATF7oSy6r%2BHkf6PrMZIHIgMDymeSH6EFuSna0yfGr3sZo%2BzqRno62dJryR%2F%2BCL2ALrwc84g5V303bAiHIcmPFc75u0DK4NBvuIrFBHEDMZvt2ss2h%2FVBsYLlwz4DWGuc32QgkjbTUd8%2FevYbffwEz2ACJ4%2BXzg0yfS1CEZ%2BfOxmdTYnC2uq3yXlQyvGH%2FUUR722FEewyZFGv35a1JU8E7j%2FzEVRd&X-Amz-Signature=6f663762380c3fc002ca642726742ac1c93b48c001b5905ec8cb430e8e2151ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
