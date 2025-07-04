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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CG6HP5C%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDnyl6xhnI0AZtSWM%2FxbO5Lbvu%2BmY1B1%2BN2LB1zQricPQIhAJrpbLkWtZiiZk1Ag1OzDCAza%2FoEXS66U6HhOlZc%2Bym2Kv8DCCkQABoMNjM3NDIzMTgzODA1Igw1lWYi0oAk4gO%2By6sq3AN7I5%2FnfYZThJWZU6NV%2F4NyoTB0bkWvCf3qJERmAO0DA%2FQSU99NjZzHq9aoQMNtRvwgElkqmpwFvU6eUXNuhzM0WlD5GKKZ1gKA6SZaLGu7Q5qC0XJNnR%2FSsWP%2FMxZf1PGXuWyaaOVU57zlDWBImfT%2BM5AObAu443hmuRncYiUcOeAXr%2BUQCpnH53oiRCDwATSJdObVIWumybiLM5l3Tgukn4sdUlRO2hV33BrJQAhYA7zc9xet48ucLX1EWHbxLGJ%2FSEr1e5Fm4gR7zc6jZ9krtVVgGdAFnpsb6lWddoi3LgWwDBZ%2FFIS5HGSeJKRGR6OGaHbOeBLrHVpuziQPqNKqfextfIKUY6H2lV4bCDI9lgAe5HlhIAvhJOfSszNALLhbsANRTJilk%2Fp0KbelSh6EsfCrXvkcT%2BsHdgmJQhdKKa9JW9WrIBI1wIe2Yp%2FoQOHomXoLPRVnuU31m7anxHtG%2FN3r%2Byhm00WV6I3Uf5NYT2%2BPk1AYgiq%2F7ErKoyqKLVTeLDcjLHfRaXAdiZx37l6SMEKKK1QoqsA3JCdUgPsIzVc2k2BagfzODx2Q%2F%2BA%2FYEd2TxJ2Y7FCUvLEIY9B6CTaEAPSF%2B4Kk%2BK3Ap5JYe92Cw7AV6orFUasfVAG6DC1jZ7DBjqkATy7MOzG1JcOP8%2F9FtWkdkrdMPaAflDDQgW1KndDk6%2BFyA8cvm%2BvEVUXgA%2BcEkat17il9bSk4cn30GvM19kqXZyb4FWDfF%2BqWIoZG7wEZzjF%2BNQmT9LKGWBiTAlPbLMT8Na6MbQmc%2FOmzLQIjSGZpDX%2B8h%2BePVq%2FkiR%2BPRGj8zfeOoRe0riZdzUPQgZ2ieetfaQnEjd1Ey3uF3VZjCtZopJcErF5&X-Amz-Signature=a0a3e129841244170136cfc5689ef87c72976299a6bd86113b28ab4ced1df9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CG6HP5C%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDnyl6xhnI0AZtSWM%2FxbO5Lbvu%2BmY1B1%2BN2LB1zQricPQIhAJrpbLkWtZiiZk1Ag1OzDCAza%2FoEXS66U6HhOlZc%2Bym2Kv8DCCkQABoMNjM3NDIzMTgzODA1Igw1lWYi0oAk4gO%2By6sq3AN7I5%2FnfYZThJWZU6NV%2F4NyoTB0bkWvCf3qJERmAO0DA%2FQSU99NjZzHq9aoQMNtRvwgElkqmpwFvU6eUXNuhzM0WlD5GKKZ1gKA6SZaLGu7Q5qC0XJNnR%2FSsWP%2FMxZf1PGXuWyaaOVU57zlDWBImfT%2BM5AObAu443hmuRncYiUcOeAXr%2BUQCpnH53oiRCDwATSJdObVIWumybiLM5l3Tgukn4sdUlRO2hV33BrJQAhYA7zc9xet48ucLX1EWHbxLGJ%2FSEr1e5Fm4gR7zc6jZ9krtVVgGdAFnpsb6lWddoi3LgWwDBZ%2FFIS5HGSeJKRGR6OGaHbOeBLrHVpuziQPqNKqfextfIKUY6H2lV4bCDI9lgAe5HlhIAvhJOfSszNALLhbsANRTJilk%2Fp0KbelSh6EsfCrXvkcT%2BsHdgmJQhdKKa9JW9WrIBI1wIe2Yp%2FoQOHomXoLPRVnuU31m7anxHtG%2FN3r%2Byhm00WV6I3Uf5NYT2%2BPk1AYgiq%2F7ErKoyqKLVTeLDcjLHfRaXAdiZx37l6SMEKKK1QoqsA3JCdUgPsIzVc2k2BagfzODx2Q%2F%2BA%2FYEd2TxJ2Y7FCUvLEIY9B6CTaEAPSF%2B4Kk%2BK3Ap5JYe92Cw7AV6orFUasfVAG6DC1jZ7DBjqkATy7MOzG1JcOP8%2F9FtWkdkrdMPaAflDDQgW1KndDk6%2BFyA8cvm%2BvEVUXgA%2BcEkat17il9bSk4cn30GvM19kqXZyb4FWDfF%2BqWIoZG7wEZzjF%2BNQmT9LKGWBiTAlPbLMT8Na6MbQmc%2FOmzLQIjSGZpDX%2B8h%2BePVq%2FkiR%2BPRGj8zfeOoRe0riZdzUPQgZ2ieetfaQnEjd1Ey3uF3VZjCtZopJcErF5&X-Amz-Signature=7978b5986f19f96fd9e44d9b2e918dbe2aba23c4ec9d4287d2338e56f4172d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CG6HP5C%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDnyl6xhnI0AZtSWM%2FxbO5Lbvu%2BmY1B1%2BN2LB1zQricPQIhAJrpbLkWtZiiZk1Ag1OzDCAza%2FoEXS66U6HhOlZc%2Bym2Kv8DCCkQABoMNjM3NDIzMTgzODA1Igw1lWYi0oAk4gO%2By6sq3AN7I5%2FnfYZThJWZU6NV%2F4NyoTB0bkWvCf3qJERmAO0DA%2FQSU99NjZzHq9aoQMNtRvwgElkqmpwFvU6eUXNuhzM0WlD5GKKZ1gKA6SZaLGu7Q5qC0XJNnR%2FSsWP%2FMxZf1PGXuWyaaOVU57zlDWBImfT%2BM5AObAu443hmuRncYiUcOeAXr%2BUQCpnH53oiRCDwATSJdObVIWumybiLM5l3Tgukn4sdUlRO2hV33BrJQAhYA7zc9xet48ucLX1EWHbxLGJ%2FSEr1e5Fm4gR7zc6jZ9krtVVgGdAFnpsb6lWddoi3LgWwDBZ%2FFIS5HGSeJKRGR6OGaHbOeBLrHVpuziQPqNKqfextfIKUY6H2lV4bCDI9lgAe5HlhIAvhJOfSszNALLhbsANRTJilk%2Fp0KbelSh6EsfCrXvkcT%2BsHdgmJQhdKKa9JW9WrIBI1wIe2Yp%2FoQOHomXoLPRVnuU31m7anxHtG%2FN3r%2Byhm00WV6I3Uf5NYT2%2BPk1AYgiq%2F7ErKoyqKLVTeLDcjLHfRaXAdiZx37l6SMEKKK1QoqsA3JCdUgPsIzVc2k2BagfzODx2Q%2F%2BA%2FYEd2TxJ2Y7FCUvLEIY9B6CTaEAPSF%2B4Kk%2BK3Ap5JYe92Cw7AV6orFUasfVAG6DC1jZ7DBjqkATy7MOzG1JcOP8%2F9FtWkdkrdMPaAflDDQgW1KndDk6%2BFyA8cvm%2BvEVUXgA%2BcEkat17il9bSk4cn30GvM19kqXZyb4FWDfF%2BqWIoZG7wEZzjF%2BNQmT9LKGWBiTAlPbLMT8Na6MbQmc%2FOmzLQIjSGZpDX%2B8h%2BePVq%2FkiR%2BPRGj8zfeOoRe0riZdzUPQgZ2ieetfaQnEjd1Ey3uF3VZjCtZopJcErF5&X-Amz-Signature=08436634d1860e363e6f697f4e76118f36f94e51a711c98739386fd4b097d83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
