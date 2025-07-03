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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PTI4N7P%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDaHm1enZdOmMpnQkvkl57zmSQqIvcQPYCZrZnWQvZ%2FkAIhAPar2jocmaviS8KxfDLryQs8Cj7NH6ijYpDydJkng4jvKv8DCB4QABoMNjM3NDIzMTgzODA1Igx8z3Qc2hIRKkX33k0q3APkooL2sOOSYMHBdWPfKjgVfsGeCgwt1PxNZt8Xnpmx3iyPIchKcBsK8oPf1h1ZnKCRNPksmDhGEeldX2ZFfp23H6%2FN0g2jSW7UTNDwYd3qgM6aF0GTThMcy3L56DpajlJLJZDUkYR3ahsIg744dOpSNM1hNGQiN2LkiUPR9ndWYOIamLH6enA94xc7MSD7Upbm2WFU5a7e%2Ff%2BA%2FNrFImquvt5xYcPgM%2B46idVn7lCpg%2FaXLIKYoxw9nqQc8C26BBzh4hHmCtiGC1AjJcwm%2BiuoY8JJt1ZYhxS%2F2r3aZagBJfuUKUQUi7zrjdQbvQjOiTOvLS0qlHDQOMICv3uQhWmzuhr9uxP1WCEWLSniz2XfTdmBj4Ig4FzDYPyj7pNoT5oDs5yyNpgqnTL3PYLmY0yQq3Fpnd4eDYWe6MiA82XcE6ebGZKHvty9oAMvvdTOCh9LsxZgkK6X0VBorEk%2BTT4MQo5UN2gWRRGGesqmPU4sTjDLSFVY%2B%2B81ruft5A1mvwLHdjSqRtAHaSn3kW7w%2B82mkOqNdVhoxZAyA8ijNLt4XV2EIvuk%2FNvU6UsVfoyIayZuKjy%2BlgpySCi08PEq%2BtfXxO1nt9MOc2CdxW6L826zAGoHpY%2B8irWw3exX2TDm5JvDBjqkAYwCulGneBj7PSThy9eVA4ifLCyLqRw6CyrMIjpQJMcKBOk4v2AC3zBbl88lYQGxzI2v42V3aO8pZOwhXXfo%2F8quIrCIaefW3SqERvIY%2BXvCMa2ualKZSpKlIECvNkMGNxK97PeZteqZ9WwDv5dn%2F2dRf3kxEH33t9BJiYjPc%2Bi90juGU965CK0EV636ga6g40nBYaOCG%2BzKKe7TUWRcDcFCP7U8&X-Amz-Signature=b3bea436914f735e91f694a5b9f08fb5463b18d6821855ddc66d547cd1954fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PTI4N7P%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDaHm1enZdOmMpnQkvkl57zmSQqIvcQPYCZrZnWQvZ%2FkAIhAPar2jocmaviS8KxfDLryQs8Cj7NH6ijYpDydJkng4jvKv8DCB4QABoMNjM3NDIzMTgzODA1Igx8z3Qc2hIRKkX33k0q3APkooL2sOOSYMHBdWPfKjgVfsGeCgwt1PxNZt8Xnpmx3iyPIchKcBsK8oPf1h1ZnKCRNPksmDhGEeldX2ZFfp23H6%2FN0g2jSW7UTNDwYd3qgM6aF0GTThMcy3L56DpajlJLJZDUkYR3ahsIg744dOpSNM1hNGQiN2LkiUPR9ndWYOIamLH6enA94xc7MSD7Upbm2WFU5a7e%2Ff%2BA%2FNrFImquvt5xYcPgM%2B46idVn7lCpg%2FaXLIKYoxw9nqQc8C26BBzh4hHmCtiGC1AjJcwm%2BiuoY8JJt1ZYhxS%2F2r3aZagBJfuUKUQUi7zrjdQbvQjOiTOvLS0qlHDQOMICv3uQhWmzuhr9uxP1WCEWLSniz2XfTdmBj4Ig4FzDYPyj7pNoT5oDs5yyNpgqnTL3PYLmY0yQq3Fpnd4eDYWe6MiA82XcE6ebGZKHvty9oAMvvdTOCh9LsxZgkK6X0VBorEk%2BTT4MQo5UN2gWRRGGesqmPU4sTjDLSFVY%2B%2B81ruft5A1mvwLHdjSqRtAHaSn3kW7w%2B82mkOqNdVhoxZAyA8ijNLt4XV2EIvuk%2FNvU6UsVfoyIayZuKjy%2BlgpySCi08PEq%2BtfXxO1nt9MOc2CdxW6L826zAGoHpY%2B8irWw3exX2TDm5JvDBjqkAYwCulGneBj7PSThy9eVA4ifLCyLqRw6CyrMIjpQJMcKBOk4v2AC3zBbl88lYQGxzI2v42V3aO8pZOwhXXfo%2F8quIrCIaefW3SqERvIY%2BXvCMa2ualKZSpKlIECvNkMGNxK97PeZteqZ9WwDv5dn%2F2dRf3kxEH33t9BJiYjPc%2Bi90juGU965CK0EV636ga6g40nBYaOCG%2BzKKe7TUWRcDcFCP7U8&X-Amz-Signature=646e755a4a34053ace39ab6129793bf30f2111c2082ac4d1b41d4ebb8175f05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PTI4N7P%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDaHm1enZdOmMpnQkvkl57zmSQqIvcQPYCZrZnWQvZ%2FkAIhAPar2jocmaviS8KxfDLryQs8Cj7NH6ijYpDydJkng4jvKv8DCB4QABoMNjM3NDIzMTgzODA1Igx8z3Qc2hIRKkX33k0q3APkooL2sOOSYMHBdWPfKjgVfsGeCgwt1PxNZt8Xnpmx3iyPIchKcBsK8oPf1h1ZnKCRNPksmDhGEeldX2ZFfp23H6%2FN0g2jSW7UTNDwYd3qgM6aF0GTThMcy3L56DpajlJLJZDUkYR3ahsIg744dOpSNM1hNGQiN2LkiUPR9ndWYOIamLH6enA94xc7MSD7Upbm2WFU5a7e%2Ff%2BA%2FNrFImquvt5xYcPgM%2B46idVn7lCpg%2FaXLIKYoxw9nqQc8C26BBzh4hHmCtiGC1AjJcwm%2BiuoY8JJt1ZYhxS%2F2r3aZagBJfuUKUQUi7zrjdQbvQjOiTOvLS0qlHDQOMICv3uQhWmzuhr9uxP1WCEWLSniz2XfTdmBj4Ig4FzDYPyj7pNoT5oDs5yyNpgqnTL3PYLmY0yQq3Fpnd4eDYWe6MiA82XcE6ebGZKHvty9oAMvvdTOCh9LsxZgkK6X0VBorEk%2BTT4MQo5UN2gWRRGGesqmPU4sTjDLSFVY%2B%2B81ruft5A1mvwLHdjSqRtAHaSn3kW7w%2B82mkOqNdVhoxZAyA8ijNLt4XV2EIvuk%2FNvU6UsVfoyIayZuKjy%2BlgpySCi08PEq%2BtfXxO1nt9MOc2CdxW6L826zAGoHpY%2B8irWw3exX2TDm5JvDBjqkAYwCulGneBj7PSThy9eVA4ifLCyLqRw6CyrMIjpQJMcKBOk4v2AC3zBbl88lYQGxzI2v42V3aO8pZOwhXXfo%2F8quIrCIaefW3SqERvIY%2BXvCMa2ualKZSpKlIECvNkMGNxK97PeZteqZ9WwDv5dn%2F2dRf3kxEH33t9BJiYjPc%2Bi90juGU965CK0EV636ga6g40nBYaOCG%2BzKKe7TUWRcDcFCP7U8&X-Amz-Signature=018d7ec7f8a5534285189ea597ee9521895fde42067b12ff5d673031512c5881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
