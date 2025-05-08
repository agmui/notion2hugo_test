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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI63JDAU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXM%2BOskExUca1WN8ilVVuLyQpS8NwDa2BlU75AJyNSAiEAjVe9ekUtgT7JwKWCwiRxuJkRS2MNXgGglQBk9XPl8eMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMYhO6HHmHsfnbq0XircAw7Du2I4oayYgepts1hm5nvzZZix7vQCIbVPU%2FtVMR1rpLsdqb%2BIOnn7se06v%2FE8iMDZ9Rt6uq8LDKU5pETA9LTIvbKd2bUJv7VC8NyeYEQM8zfLomuQpOzwFl2X186fhPqt1jtrbajIOcoqmGBgo8O4B8odZMKvlAbZ4e%2BVLrV4hza5MkcvxbytTF11TaJl7XXWcchNOWRH9WO6RrX%2FX6%2FJaBpBImF67R2uVcGHUCNTmNDTmQ%2FkyMA4FxkFlEH78CoKC7fymrjoynHNGzHiyMrZqy0NRgdCSQiZ2WY4po1LAehgrxEoWtSbjUrq24SztX8O%2Fi8g%2Bh5Pgwdf3hM9WEQJal%2BQ2lGGdsqa7vsGk0OPtKA7Gxsosb6U9aBA40%2BmHW6teN5OfYjRLvOBZUlNuvnTNp1n5qB3ickL2wm%2FVvB0lMBM6EIVwoqcDiY6b9ufZjFsRBavwYrPG8s9bPLwtqVMT3zW4djY%2F%2Bv36AcTlbOJ%2BTPC1D4V9Wr8AToq%2FmxtwFdiwWT5NehWaFn8npQGDpBdJnePDLqrczK%2F2Yapwv3pzdw8Yph8GF3Owt3VXy1XfS8qpJf8xdSVuWhfoe%2B2NlDoisTjHB5duMkqekBb9u7wws3SnHIU5lt6Lxx7MPyK8sAGOqUBr9qPjn%2BMvd92a4O9W9XXHrrJ6Ud12szyE9E%2BOMLedlpJiYAohI0KezfhQRkMsE%2FRvqqZoknbVHfWn7sfo8I6ITzNjInSOaoLUoR2nRk0WUGbC6PLJ7uVXg6k3ngy3Jgvjbps7qIjlDOYfa4ObMw1He%2FReqWVIUt1CPU6gnOe07BeWkRNJNQmO8hK5xdyCVqMfgrL4UEpRhgfJK44RzG96LqaVa5P&X-Amz-Signature=df7847ced8ce5d7bc51573f538ff612cb7e286075e8df2ca5179820d891843df&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI63JDAU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXM%2BOskExUca1WN8ilVVuLyQpS8NwDa2BlU75AJyNSAiEAjVe9ekUtgT7JwKWCwiRxuJkRS2MNXgGglQBk9XPl8eMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMYhO6HHmHsfnbq0XircAw7Du2I4oayYgepts1hm5nvzZZix7vQCIbVPU%2FtVMR1rpLsdqb%2BIOnn7se06v%2FE8iMDZ9Rt6uq8LDKU5pETA9LTIvbKd2bUJv7VC8NyeYEQM8zfLomuQpOzwFl2X186fhPqt1jtrbajIOcoqmGBgo8O4B8odZMKvlAbZ4e%2BVLrV4hza5MkcvxbytTF11TaJl7XXWcchNOWRH9WO6RrX%2FX6%2FJaBpBImF67R2uVcGHUCNTmNDTmQ%2FkyMA4FxkFlEH78CoKC7fymrjoynHNGzHiyMrZqy0NRgdCSQiZ2WY4po1LAehgrxEoWtSbjUrq24SztX8O%2Fi8g%2Bh5Pgwdf3hM9WEQJal%2BQ2lGGdsqa7vsGk0OPtKA7Gxsosb6U9aBA40%2BmHW6teN5OfYjRLvOBZUlNuvnTNp1n5qB3ickL2wm%2FVvB0lMBM6EIVwoqcDiY6b9ufZjFsRBavwYrPG8s9bPLwtqVMT3zW4djY%2F%2Bv36AcTlbOJ%2BTPC1D4V9Wr8AToq%2FmxtwFdiwWT5NehWaFn8npQGDpBdJnePDLqrczK%2F2Yapwv3pzdw8Yph8GF3Owt3VXy1XfS8qpJf8xdSVuWhfoe%2B2NlDoisTjHB5duMkqekBb9u7wws3SnHIU5lt6Lxx7MPyK8sAGOqUBr9qPjn%2BMvd92a4O9W9XXHrrJ6Ud12szyE9E%2BOMLedlpJiYAohI0KezfhQRkMsE%2FRvqqZoknbVHfWn7sfo8I6ITzNjInSOaoLUoR2nRk0WUGbC6PLJ7uVXg6k3ngy3Jgvjbps7qIjlDOYfa4ObMw1He%2FReqWVIUt1CPU6gnOe07BeWkRNJNQmO8hK5xdyCVqMfgrL4UEpRhgfJK44RzG96LqaVa5P&X-Amz-Signature=b1b48cfe51e76bc9e27ef64585d4122c8ca467083b7e1234967f8330fbe612a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI63JDAU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXM%2BOskExUca1WN8ilVVuLyQpS8NwDa2BlU75AJyNSAiEAjVe9ekUtgT7JwKWCwiRxuJkRS2MNXgGglQBk9XPl8eMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMYhO6HHmHsfnbq0XircAw7Du2I4oayYgepts1hm5nvzZZix7vQCIbVPU%2FtVMR1rpLsdqb%2BIOnn7se06v%2FE8iMDZ9Rt6uq8LDKU5pETA9LTIvbKd2bUJv7VC8NyeYEQM8zfLomuQpOzwFl2X186fhPqt1jtrbajIOcoqmGBgo8O4B8odZMKvlAbZ4e%2BVLrV4hza5MkcvxbytTF11TaJl7XXWcchNOWRH9WO6RrX%2FX6%2FJaBpBImF67R2uVcGHUCNTmNDTmQ%2FkyMA4FxkFlEH78CoKC7fymrjoynHNGzHiyMrZqy0NRgdCSQiZ2WY4po1LAehgrxEoWtSbjUrq24SztX8O%2Fi8g%2Bh5Pgwdf3hM9WEQJal%2BQ2lGGdsqa7vsGk0OPtKA7Gxsosb6U9aBA40%2BmHW6teN5OfYjRLvOBZUlNuvnTNp1n5qB3ickL2wm%2FVvB0lMBM6EIVwoqcDiY6b9ufZjFsRBavwYrPG8s9bPLwtqVMT3zW4djY%2F%2Bv36AcTlbOJ%2BTPC1D4V9Wr8AToq%2FmxtwFdiwWT5NehWaFn8npQGDpBdJnePDLqrczK%2F2Yapwv3pzdw8Yph8GF3Owt3VXy1XfS8qpJf8xdSVuWhfoe%2B2NlDoisTjHB5duMkqekBb9u7wws3SnHIU5lt6Lxx7MPyK8sAGOqUBr9qPjn%2BMvd92a4O9W9XXHrrJ6Ud12szyE9E%2BOMLedlpJiYAohI0KezfhQRkMsE%2FRvqqZoknbVHfWn7sfo8I6ITzNjInSOaoLUoR2nRk0WUGbC6PLJ7uVXg6k3ngy3Jgvjbps7qIjlDOYfa4ObMw1He%2FReqWVIUt1CPU6gnOe07BeWkRNJNQmO8hK5xdyCVqMfgrL4UEpRhgfJK44RzG96LqaVa5P&X-Amz-Signature=dc1ca7ccbb197286582ccf5a0b3c3c1a19f823c52e35a9f734e0578483ec5750&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
