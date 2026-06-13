---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UXROA4%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID1Q7agOPljAPvJfRt1vF8EIGqsrzlpY8RhjE0WvWvMRAiEA1CmwCLWMvR6xOoIs0%2B1ZdHsGin%2Bz2daz%2BxGcWctxQvoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOPDIeW0ZMJtGCYXcyrcAz7tA6x4TD0gJaYa9RX2FvWXZxc%2FxHUZOQ2UFARSDvgdP%2B8%2B8oVKkOxhJBRJgLsjDVInNKeEQDTwoMmD9CKo%2FLw9xcH1OzmrQ9FsrpjepxzMIn4NNd1zp8Ex%2FQFsFCCo0WL51sitxnv47f9nkYcIdt2hwkriuFzs78Dwk0kM2htU8UFSNVX2CbNegn%2BoDPGyObgaC0lNGAldun4rSfyv6cU61fobUvIHOHhAfNAWPID4tkcAl%2B2gP9aarmNhBt5XTqModed8Qeqauc2vnewHrEdjkV51fWrE1%2B0xyLcEOCHvdFSTX%2FYJDzar4OJfRl9fmT4AqlrWbZ3UBKiWKavq8gYpsLF6YFPEQuGybyVsrHA%2BpGVQreotTu85XIiq7da3WEmKvmwT3Y4SJvMzyXEOUcXPISWq3NBUZG1yVUZEIKUYtTzrJZQg4htOHvafz4O2cpy1k4GzcjpPSq5I2SboP3nugaAkSwRjmwv8R9Jat2KTagOnnj7whEC%2B4aoMbfYZJ7pTEcMKa6qM3iN0YvX8vqOds9ngOqiYOYSvbbRpZg0K%2F5bbMNf4vw%2Bisv9gQiGiFoHJq5xPP%2BpajFjbJvCr5Pnar8KXYNEaWMEuKo76kCb2rLU2X9n3dnIuQYPYMJX8stEGOqUBO1AjOgHNkdw3pbV44WOCj%2FbZQ%2Fi4f76U1nlh6vCnM7YU26MfTr0XqvCDSNaIJyvm%2FMo8%2BD%2F6nD9Nhgp3AEOrz8RGV4RGp1uUSAurmrXJ%2FMWUO5ardHbhGCWEeP9kTVb%2BUrmPFh0nXrM4PITjwhTNpe3gKSTYZe%2B3VuhZqbRUKwJow9h99ZpJqNGEDQooXIirmqDauiUDRc6sCApXW0p94bs2s9PM&X-Amz-Signature=b04172a9ae540a4ecc04d87cc136198a91d40958769201cc237d7c330d338ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UXROA4%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID1Q7agOPljAPvJfRt1vF8EIGqsrzlpY8RhjE0WvWvMRAiEA1CmwCLWMvR6xOoIs0%2B1ZdHsGin%2Bz2daz%2BxGcWctxQvoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOPDIeW0ZMJtGCYXcyrcAz7tA6x4TD0gJaYa9RX2FvWXZxc%2FxHUZOQ2UFARSDvgdP%2B8%2B8oVKkOxhJBRJgLsjDVInNKeEQDTwoMmD9CKo%2FLw9xcH1OzmrQ9FsrpjepxzMIn4NNd1zp8Ex%2FQFsFCCo0WL51sitxnv47f9nkYcIdt2hwkriuFzs78Dwk0kM2htU8UFSNVX2CbNegn%2BoDPGyObgaC0lNGAldun4rSfyv6cU61fobUvIHOHhAfNAWPID4tkcAl%2B2gP9aarmNhBt5XTqModed8Qeqauc2vnewHrEdjkV51fWrE1%2B0xyLcEOCHvdFSTX%2FYJDzar4OJfRl9fmT4AqlrWbZ3UBKiWKavq8gYpsLF6YFPEQuGybyVsrHA%2BpGVQreotTu85XIiq7da3WEmKvmwT3Y4SJvMzyXEOUcXPISWq3NBUZG1yVUZEIKUYtTzrJZQg4htOHvafz4O2cpy1k4GzcjpPSq5I2SboP3nugaAkSwRjmwv8R9Jat2KTagOnnj7whEC%2B4aoMbfYZJ7pTEcMKa6qM3iN0YvX8vqOds9ngOqiYOYSvbbRpZg0K%2F5bbMNf4vw%2Bisv9gQiGiFoHJq5xPP%2BpajFjbJvCr5Pnar8KXYNEaWMEuKo76kCb2rLU2X9n3dnIuQYPYMJX8stEGOqUBO1AjOgHNkdw3pbV44WOCj%2FbZQ%2Fi4f76U1nlh6vCnM7YU26MfTr0XqvCDSNaIJyvm%2FMo8%2BD%2F6nD9Nhgp3AEOrz8RGV4RGp1uUSAurmrXJ%2FMWUO5ardHbhGCWEeP9kTVb%2BUrmPFh0nXrM4PITjwhTNpe3gKSTYZe%2B3VuhZqbRUKwJow9h99ZpJqNGEDQooXIirmqDauiUDRc6sCApXW0p94bs2s9PM&X-Amz-Signature=ec5a2b762fae75af3f4fd9639698be57396b92fd3a1c622ed502dfdbaddd44e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UXROA4%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID1Q7agOPljAPvJfRt1vF8EIGqsrzlpY8RhjE0WvWvMRAiEA1CmwCLWMvR6xOoIs0%2B1ZdHsGin%2Bz2daz%2BxGcWctxQvoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOPDIeW0ZMJtGCYXcyrcAz7tA6x4TD0gJaYa9RX2FvWXZxc%2FxHUZOQ2UFARSDvgdP%2B8%2B8oVKkOxhJBRJgLsjDVInNKeEQDTwoMmD9CKo%2FLw9xcH1OzmrQ9FsrpjepxzMIn4NNd1zp8Ex%2FQFsFCCo0WL51sitxnv47f9nkYcIdt2hwkriuFzs78Dwk0kM2htU8UFSNVX2CbNegn%2BoDPGyObgaC0lNGAldun4rSfyv6cU61fobUvIHOHhAfNAWPID4tkcAl%2B2gP9aarmNhBt5XTqModed8Qeqauc2vnewHrEdjkV51fWrE1%2B0xyLcEOCHvdFSTX%2FYJDzar4OJfRl9fmT4AqlrWbZ3UBKiWKavq8gYpsLF6YFPEQuGybyVsrHA%2BpGVQreotTu85XIiq7da3WEmKvmwT3Y4SJvMzyXEOUcXPISWq3NBUZG1yVUZEIKUYtTzrJZQg4htOHvafz4O2cpy1k4GzcjpPSq5I2SboP3nugaAkSwRjmwv8R9Jat2KTagOnnj7whEC%2B4aoMbfYZJ7pTEcMKa6qM3iN0YvX8vqOds9ngOqiYOYSvbbRpZg0K%2F5bbMNf4vw%2Bisv9gQiGiFoHJq5xPP%2BpajFjbJvCr5Pnar8KXYNEaWMEuKo76kCb2rLU2X9n3dnIuQYPYMJX8stEGOqUBO1AjOgHNkdw3pbV44WOCj%2FbZQ%2Fi4f76U1nlh6vCnM7YU26MfTr0XqvCDSNaIJyvm%2FMo8%2BD%2F6nD9Nhgp3AEOrz8RGV4RGp1uUSAurmrXJ%2FMWUO5ardHbhGCWEeP9kTVb%2BUrmPFh0nXrM4PITjwhTNpe3gKSTYZe%2B3VuhZqbRUKwJow9h99ZpJqNGEDQooXIirmqDauiUDRc6sCApXW0p94bs2s9PM&X-Amz-Signature=9a4b5d9164002e15554900a1315c05eac867c8fafc20208d2d4d3655f58ea983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
