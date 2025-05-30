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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7SUBBO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bh013DzQsWvVr6pdpSz1NF0tDuxzykfcq5thmrirG6QIhAJQaxX5MN7re33gqJ5zZa4cEDFaE%2F%2BkYbuZTOqWJB7RtKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFBpmptgyHOcNbfNEq3APnkuylXqJ9%2BozW0Oa98k74vIHfu%2FLdFPG8Y078AJ2NlJXsOjenopZscvrFDv1%2BjJouLWHOD%2FxdnPC6ft3KRSDenhwCL40KwWSnep%2Fl2%2FfatZ%2F7tevXVMkLlcnCErBPEY6NH1UysmUc%2FT3hGcTbt8wEwckzYwmNjM%2FR01dLnDORCMS3FsVSr7jIvxNvH6Q2KufKRiLLVLvRaNh6mnSRA2ocvqMF437BAfziKnIwTY5S3htJsGT0b3hZ8sfLe2%2BGVfrWh1n71Wgwr3VrHSwRS9DzaXIyFM6g05FD7L5UAyRnZGdITkhDvuKL%2BTrRUN%2FENqzM8lPFQU8q0zdKIdTH2GwV%2FM5ekqEBz1bWq1PeO1wrFS4GgwjNjJMTWj5jexwDlje2OtCngX9GGBas5ylzkofIczxgqIGSoDhIlWjCr0j%2BaW2uTFRCivoe87nUB4b7otOSXNLu1AUK0zKKO0%2BsBNR%2FQmbdLZ6Mtw%2BxqiPP%2FL4ZdZ85gIfsCxTLw8uPEvDTnysGXpur2hXIQbIjh5qx1fpkKY87guyuEnqkZPjtygdbzrFupuK0NpbmmJOBhG2hdocJFkiG0eudAzhW9XFLglgCbmBH%2FJePbDclGi5ll%2Fjx%2FsQF42r4bBb4Jqm0YDCk3uPBBjqkAeHVKA6ZBsd1rNdPCUe89C4shkKEDhZFcAXlN0O3HXITqjnCOyqDT%2Fp1VIboN7bxjLtruYdoLAQly1NpGox%2FWwhwlOK9zDI0lCsYLjJw6EvUE3PlSFVbpF9eeAMRCiiy357tkkNfJs5LDzuLhNXrINQvxWDVDo3QHoaj4SKkrYAg96ZL1dQXfJDarDv%2BQ6yAP7kFHAt5r2NBt9moRCdKDdpi1zz1&X-Amz-Signature=190bfbb977f329c3c64ee638dbd78a9f4bd4c8807793a512dc117d7fb2f7c5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7SUBBO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bh013DzQsWvVr6pdpSz1NF0tDuxzykfcq5thmrirG6QIhAJQaxX5MN7re33gqJ5zZa4cEDFaE%2F%2BkYbuZTOqWJB7RtKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFBpmptgyHOcNbfNEq3APnkuylXqJ9%2BozW0Oa98k74vIHfu%2FLdFPG8Y078AJ2NlJXsOjenopZscvrFDv1%2BjJouLWHOD%2FxdnPC6ft3KRSDenhwCL40KwWSnep%2Fl2%2FfatZ%2F7tevXVMkLlcnCErBPEY6NH1UysmUc%2FT3hGcTbt8wEwckzYwmNjM%2FR01dLnDORCMS3FsVSr7jIvxNvH6Q2KufKRiLLVLvRaNh6mnSRA2ocvqMF437BAfziKnIwTY5S3htJsGT0b3hZ8sfLe2%2BGVfrWh1n71Wgwr3VrHSwRS9DzaXIyFM6g05FD7L5UAyRnZGdITkhDvuKL%2BTrRUN%2FENqzM8lPFQU8q0zdKIdTH2GwV%2FM5ekqEBz1bWq1PeO1wrFS4GgwjNjJMTWj5jexwDlje2OtCngX9GGBas5ylzkofIczxgqIGSoDhIlWjCr0j%2BaW2uTFRCivoe87nUB4b7otOSXNLu1AUK0zKKO0%2BsBNR%2FQmbdLZ6Mtw%2BxqiPP%2FL4ZdZ85gIfsCxTLw8uPEvDTnysGXpur2hXIQbIjh5qx1fpkKY87guyuEnqkZPjtygdbzrFupuK0NpbmmJOBhG2hdocJFkiG0eudAzhW9XFLglgCbmBH%2FJePbDclGi5ll%2Fjx%2FsQF42r4bBb4Jqm0YDCk3uPBBjqkAeHVKA6ZBsd1rNdPCUe89C4shkKEDhZFcAXlN0O3HXITqjnCOyqDT%2Fp1VIboN7bxjLtruYdoLAQly1NpGox%2FWwhwlOK9zDI0lCsYLjJw6EvUE3PlSFVbpF9eeAMRCiiy357tkkNfJs5LDzuLhNXrINQvxWDVDo3QHoaj4SKkrYAg96ZL1dQXfJDarDv%2BQ6yAP7kFHAt5r2NBt9moRCdKDdpi1zz1&X-Amz-Signature=f5eff67ec8cd7b820c1f00066287bd0c5c2269ffc6dd57826e1d73cec01a9ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7SUBBO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bh013DzQsWvVr6pdpSz1NF0tDuxzykfcq5thmrirG6QIhAJQaxX5MN7re33gqJ5zZa4cEDFaE%2F%2BkYbuZTOqWJB7RtKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFBpmptgyHOcNbfNEq3APnkuylXqJ9%2BozW0Oa98k74vIHfu%2FLdFPG8Y078AJ2NlJXsOjenopZscvrFDv1%2BjJouLWHOD%2FxdnPC6ft3KRSDenhwCL40KwWSnep%2Fl2%2FfatZ%2F7tevXVMkLlcnCErBPEY6NH1UysmUc%2FT3hGcTbt8wEwckzYwmNjM%2FR01dLnDORCMS3FsVSr7jIvxNvH6Q2KufKRiLLVLvRaNh6mnSRA2ocvqMF437BAfziKnIwTY5S3htJsGT0b3hZ8sfLe2%2BGVfrWh1n71Wgwr3VrHSwRS9DzaXIyFM6g05FD7L5UAyRnZGdITkhDvuKL%2BTrRUN%2FENqzM8lPFQU8q0zdKIdTH2GwV%2FM5ekqEBz1bWq1PeO1wrFS4GgwjNjJMTWj5jexwDlje2OtCngX9GGBas5ylzkofIczxgqIGSoDhIlWjCr0j%2BaW2uTFRCivoe87nUB4b7otOSXNLu1AUK0zKKO0%2BsBNR%2FQmbdLZ6Mtw%2BxqiPP%2FL4ZdZ85gIfsCxTLw8uPEvDTnysGXpur2hXIQbIjh5qx1fpkKY87guyuEnqkZPjtygdbzrFupuK0NpbmmJOBhG2hdocJFkiG0eudAzhW9XFLglgCbmBH%2FJePbDclGi5ll%2Fjx%2FsQF42r4bBb4Jqm0YDCk3uPBBjqkAeHVKA6ZBsd1rNdPCUe89C4shkKEDhZFcAXlN0O3HXITqjnCOyqDT%2Fp1VIboN7bxjLtruYdoLAQly1NpGox%2FWwhwlOK9zDI0lCsYLjJw6EvUE3PlSFVbpF9eeAMRCiiy357tkkNfJs5LDzuLhNXrINQvxWDVDo3QHoaj4SKkrYAg96ZL1dQXfJDarDv%2BQ6yAP7kFHAt5r2NBt9moRCdKDdpi1zz1&X-Amz-Signature=ba13cc7bb2af49080dca7d3a13be4e26a30ef5ced1e198750d66d387ab70d289&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
