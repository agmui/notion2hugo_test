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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2C2ZKA4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDZONhGiJ1pT%2FLJRBj6OSwqgP7a3wP4yZLgMmW6T%2F23OgIhAJb6wuL3bEgck7wvwB1D22LlpfZID3%2BWhmbRqrsfhA4zKv8DCDsQABoMNjM3NDIzMTgzODA1IgzMPBirtmJuF4XjG%2B0q3AMBx%2BrKZJfhJgxT8Ag16PyJ4SVxek7X5vProYZr8mYcc93Ok0JGCT0WxdfsDSG2ElBVYE8SW5LX95Gv%2FUZfZ7py5XvWLJ%2BKGb1penKadtt59pmZ%2BTnATkj%2Ffxy8r069Lus8qhgu7Z1lNiK9u0I%2BfrWgGvmuKOjGXfoA5X0So5SlGgvmzIHZIS8G19OZGhb8Vbh3dmPQVuEA%2FPW25kz5Thw9eraB9tl%2F31pb8EjoWJ7nvpoQP3KNHNYhD2ubnd1qlzTg%2Fzsicp2yDiTBVqdw4U9POfOoQvgL8QOnHMBj%2BnrDKfjfIDVhYwms8Z%2FcwAKXEWljSAn8UhMiAL%2FmLOmwI9z6%2FuFZxagEZHd9HHtEqyePZFcIrTIkAa8Qc088XO7PBkXQ7JBjeHkG52sIL7B5j%2FzRSFzvUcOpLKujJjw1q8bS2e70NRL9nx2lI1O1rcEGKg%2F8VOCQtY7H70lOLG2zh5Dg3aBHj6goPq1kbsejLX0QTuq0u8Gwu%2BhIYe7Rr8ulthQByya3HTX3nSlQZW8g0s5wBIE92%2FU%2FgbpfvqQrfatwhUZh04wnSKXrslSJl%2FSWx1LPpY%2FYr0phiR9MI%2BlBuJUOT0OAl90iVnGa4mHNrmJYYK%2FuQAt7vfattMPFODDe04vEBjqkAUXQTiqhsp14S4EImCt8o5d14u0ryEvJA7X%2Bm8J9OYk1XXBIv8cDXnwgTv%2BfQXeUB0GQY1RwHpP%2B9443kjgubOKyjBoIHeKuT4j%2F0wDbFBGC4Uaivs9aKRaDX7QNIDhawgx8iVpp8AUNqa7woR7%2FUiwfPiPMneKEvs5r%2BT34ibPpMTlvRKcdzlEy4Q2EOL4Nvh0d0dN62hXjrvbjC3N8sWXjs86A&X-Amz-Signature=75e2682239db7304721e39db6d5dfd315bd48a2953918f8952b80b233dfbb8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2C2ZKA4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDZONhGiJ1pT%2FLJRBj6OSwqgP7a3wP4yZLgMmW6T%2F23OgIhAJb6wuL3bEgck7wvwB1D22LlpfZID3%2BWhmbRqrsfhA4zKv8DCDsQABoMNjM3NDIzMTgzODA1IgzMPBirtmJuF4XjG%2B0q3AMBx%2BrKZJfhJgxT8Ag16PyJ4SVxek7X5vProYZr8mYcc93Ok0JGCT0WxdfsDSG2ElBVYE8SW5LX95Gv%2FUZfZ7py5XvWLJ%2BKGb1penKadtt59pmZ%2BTnATkj%2Ffxy8r069Lus8qhgu7Z1lNiK9u0I%2BfrWgGvmuKOjGXfoA5X0So5SlGgvmzIHZIS8G19OZGhb8Vbh3dmPQVuEA%2FPW25kz5Thw9eraB9tl%2F31pb8EjoWJ7nvpoQP3KNHNYhD2ubnd1qlzTg%2Fzsicp2yDiTBVqdw4U9POfOoQvgL8QOnHMBj%2BnrDKfjfIDVhYwms8Z%2FcwAKXEWljSAn8UhMiAL%2FmLOmwI9z6%2FuFZxagEZHd9HHtEqyePZFcIrTIkAa8Qc088XO7PBkXQ7JBjeHkG52sIL7B5j%2FzRSFzvUcOpLKujJjw1q8bS2e70NRL9nx2lI1O1rcEGKg%2F8VOCQtY7H70lOLG2zh5Dg3aBHj6goPq1kbsejLX0QTuq0u8Gwu%2BhIYe7Rr8ulthQByya3HTX3nSlQZW8g0s5wBIE92%2FU%2FgbpfvqQrfatwhUZh04wnSKXrslSJl%2FSWx1LPpY%2FYr0phiR9MI%2BlBuJUOT0OAl90iVnGa4mHNrmJYYK%2FuQAt7vfattMPFODDe04vEBjqkAUXQTiqhsp14S4EImCt8o5d14u0ryEvJA7X%2Bm8J9OYk1XXBIv8cDXnwgTv%2BfQXeUB0GQY1RwHpP%2B9443kjgubOKyjBoIHeKuT4j%2F0wDbFBGC4Uaivs9aKRaDX7QNIDhawgx8iVpp8AUNqa7woR7%2FUiwfPiPMneKEvs5r%2BT34ibPpMTlvRKcdzlEy4Q2EOL4Nvh0d0dN62hXjrvbjC3N8sWXjs86A&X-Amz-Signature=7ffba089a7050d0b0176ccf837a011aef7fe426a1628d6540dc5931202bdefcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2C2ZKA4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDZONhGiJ1pT%2FLJRBj6OSwqgP7a3wP4yZLgMmW6T%2F23OgIhAJb6wuL3bEgck7wvwB1D22LlpfZID3%2BWhmbRqrsfhA4zKv8DCDsQABoMNjM3NDIzMTgzODA1IgzMPBirtmJuF4XjG%2B0q3AMBx%2BrKZJfhJgxT8Ag16PyJ4SVxek7X5vProYZr8mYcc93Ok0JGCT0WxdfsDSG2ElBVYE8SW5LX95Gv%2FUZfZ7py5XvWLJ%2BKGb1penKadtt59pmZ%2BTnATkj%2Ffxy8r069Lus8qhgu7Z1lNiK9u0I%2BfrWgGvmuKOjGXfoA5X0So5SlGgvmzIHZIS8G19OZGhb8Vbh3dmPQVuEA%2FPW25kz5Thw9eraB9tl%2F31pb8EjoWJ7nvpoQP3KNHNYhD2ubnd1qlzTg%2Fzsicp2yDiTBVqdw4U9POfOoQvgL8QOnHMBj%2BnrDKfjfIDVhYwms8Z%2FcwAKXEWljSAn8UhMiAL%2FmLOmwI9z6%2FuFZxagEZHd9HHtEqyePZFcIrTIkAa8Qc088XO7PBkXQ7JBjeHkG52sIL7B5j%2FzRSFzvUcOpLKujJjw1q8bS2e70NRL9nx2lI1O1rcEGKg%2F8VOCQtY7H70lOLG2zh5Dg3aBHj6goPq1kbsejLX0QTuq0u8Gwu%2BhIYe7Rr8ulthQByya3HTX3nSlQZW8g0s5wBIE92%2FU%2FgbpfvqQrfatwhUZh04wnSKXrslSJl%2FSWx1LPpY%2FYr0phiR9MI%2BlBuJUOT0OAl90iVnGa4mHNrmJYYK%2FuQAt7vfattMPFODDe04vEBjqkAUXQTiqhsp14S4EImCt8o5d14u0ryEvJA7X%2Bm8J9OYk1XXBIv8cDXnwgTv%2BfQXeUB0GQY1RwHpP%2B9443kjgubOKyjBoIHeKuT4j%2F0wDbFBGC4Uaivs9aKRaDX7QNIDhawgx8iVpp8AUNqa7woR7%2FUiwfPiPMneKEvs5r%2BT34ibPpMTlvRKcdzlEy4Q2EOL4Nvh0d0dN62hXjrvbjC3N8sWXjs86A&X-Amz-Signature=338ae0f9806dccfcb95a23ef328c78a909a9e78aa0281bc8cb537ab5c3ccf061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
