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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466342OS22M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClO5lrQr3%2BJee2bWPdbCeatyX83wNglhq5w2JlMxYDOAiEAyj4%2F54v3EnAPh%2Ffs9tAkNH%2FspiTzE9%2BxAecSLERfLoYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAM%2BzKeBVj7Wx4HavyrcAwqv844QO6ophkH%2BDnIm%2BCyaWOkf2SBexLIwCL4y%2FuhFW69%2BpJHHGuKu0kdrQvL9aHVgQ8UDeTFTpBgM2V%2BoXCrDsQ4a3eKMxS32kIi4dujjNzaw53PsG2jFDG2IiSqPB78Z8ewqk0mqiHr7945VA0T%2F%2Fd0%2FkopARQGAWlKu60erduHgGRtWXsEl%2Bl68lB0mYE0xOOWpbJPs%2FVLyakqZjzopk%2FuFO%2FNuDR7t%2BNr7Lh%2F5yQjjtlNuBJq9Xoe8GvhswdXl4RIZAeJtJ8KDK0YJCEeXfSdQQl9HTwEHYMB0Dhb3qbkkzpn0GAmxJyi2zKEF9Me4XnGBDeU6LG8iv%2FkLdGSN3HbN1RxICcgdJ84%2FX1o6hE2sTKXytyn1ZWIwqdZ9QuH3WkzVDLB63cxg%2F65owhvOvPUlTDz8aoffQwwFN9x6%2BZOr%2B%2BLKWvZWJzpi2efQbM2iAezUtS9mxLsWLBREYens5qeDgZRcWHKGqQ2VRq8UO1o%2F0KtdJ6YuNzIm9hGvifVj0Ju7EVqS7y%2FAHuuXUHlnjEe1J1A4KErh2J%2B0L5v6K9xfbZKCi7EWxR6cnFZx1qiMjo5WbXlJNIabG%2BM6%2FkVMhg6Xe%2B5MRnFhubBIqLSMj%2B%2BsUilZoAwsnt%2BHMM6DiMoGOqUBXTuc9nqgxNKPjZEJo9ETAiK2eQfaNyR24m4CCSi0wV3p8c8umV9F%2FrK19C%2BrL6e%2FVwvEKXIkQF47UfX%2BqWMAXLSX63MOEu3KlzjEDppG47WQUB%2Fd6gq0AbrXG00uN8e3aZzd2PCF2Ln0DN1cRJrO1Ntjmu6Py9i8kfJbzNiwweiZcwrxUooUGoLGxD%2BE%2B73Ze2L6o7jdWU0uvwIaR5kliKa8U%2FyA&X-Amz-Signature=82f6bf5d51f08ad2c9e87b3e4603474f683778d908702a6508a06259838c269c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466342OS22M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClO5lrQr3%2BJee2bWPdbCeatyX83wNglhq5w2JlMxYDOAiEAyj4%2F54v3EnAPh%2Ffs9tAkNH%2FspiTzE9%2BxAecSLERfLoYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAM%2BzKeBVj7Wx4HavyrcAwqv844QO6ophkH%2BDnIm%2BCyaWOkf2SBexLIwCL4y%2FuhFW69%2BpJHHGuKu0kdrQvL9aHVgQ8UDeTFTpBgM2V%2BoXCrDsQ4a3eKMxS32kIi4dujjNzaw53PsG2jFDG2IiSqPB78Z8ewqk0mqiHr7945VA0T%2F%2Fd0%2FkopARQGAWlKu60erduHgGRtWXsEl%2Bl68lB0mYE0xOOWpbJPs%2FVLyakqZjzopk%2FuFO%2FNuDR7t%2BNr7Lh%2F5yQjjtlNuBJq9Xoe8GvhswdXl4RIZAeJtJ8KDK0YJCEeXfSdQQl9HTwEHYMB0Dhb3qbkkzpn0GAmxJyi2zKEF9Me4XnGBDeU6LG8iv%2FkLdGSN3HbN1RxICcgdJ84%2FX1o6hE2sTKXytyn1ZWIwqdZ9QuH3WkzVDLB63cxg%2F65owhvOvPUlTDz8aoffQwwFN9x6%2BZOr%2B%2BLKWvZWJzpi2efQbM2iAezUtS9mxLsWLBREYens5qeDgZRcWHKGqQ2VRq8UO1o%2F0KtdJ6YuNzIm9hGvifVj0Ju7EVqS7y%2FAHuuXUHlnjEe1J1A4KErh2J%2B0L5v6K9xfbZKCi7EWxR6cnFZx1qiMjo5WbXlJNIabG%2BM6%2FkVMhg6Xe%2B5MRnFhubBIqLSMj%2B%2BsUilZoAwsnt%2BHMM6DiMoGOqUBXTuc9nqgxNKPjZEJo9ETAiK2eQfaNyR24m4CCSi0wV3p8c8umV9F%2FrK19C%2BrL6e%2FVwvEKXIkQF47UfX%2BqWMAXLSX63MOEu3KlzjEDppG47WQUB%2Fd6gq0AbrXG00uN8e3aZzd2PCF2Ln0DN1cRJrO1Ntjmu6Py9i8kfJbzNiwweiZcwrxUooUGoLGxD%2BE%2B73Ze2L6o7jdWU0uvwIaR5kliKa8U%2FyA&X-Amz-Signature=d631f935b34663d7400c02fddd4218db5e8fd276a989cd924d8c808eb7c0b884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466342OS22M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClO5lrQr3%2BJee2bWPdbCeatyX83wNglhq5w2JlMxYDOAiEAyj4%2F54v3EnAPh%2Ffs9tAkNH%2FspiTzE9%2BxAecSLERfLoYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAM%2BzKeBVj7Wx4HavyrcAwqv844QO6ophkH%2BDnIm%2BCyaWOkf2SBexLIwCL4y%2FuhFW69%2BpJHHGuKu0kdrQvL9aHVgQ8UDeTFTpBgM2V%2BoXCrDsQ4a3eKMxS32kIi4dujjNzaw53PsG2jFDG2IiSqPB78Z8ewqk0mqiHr7945VA0T%2F%2Fd0%2FkopARQGAWlKu60erduHgGRtWXsEl%2Bl68lB0mYE0xOOWpbJPs%2FVLyakqZjzopk%2FuFO%2FNuDR7t%2BNr7Lh%2F5yQjjtlNuBJq9Xoe8GvhswdXl4RIZAeJtJ8KDK0YJCEeXfSdQQl9HTwEHYMB0Dhb3qbkkzpn0GAmxJyi2zKEF9Me4XnGBDeU6LG8iv%2FkLdGSN3HbN1RxICcgdJ84%2FX1o6hE2sTKXytyn1ZWIwqdZ9QuH3WkzVDLB63cxg%2F65owhvOvPUlTDz8aoffQwwFN9x6%2BZOr%2B%2BLKWvZWJzpi2efQbM2iAezUtS9mxLsWLBREYens5qeDgZRcWHKGqQ2VRq8UO1o%2F0KtdJ6YuNzIm9hGvifVj0Ju7EVqS7y%2FAHuuXUHlnjEe1J1A4KErh2J%2B0L5v6K9xfbZKCi7EWxR6cnFZx1qiMjo5WbXlJNIabG%2BM6%2FkVMhg6Xe%2B5MRnFhubBIqLSMj%2B%2BsUilZoAwsnt%2BHMM6DiMoGOqUBXTuc9nqgxNKPjZEJo9ETAiK2eQfaNyR24m4CCSi0wV3p8c8umV9F%2FrK19C%2BrL6e%2FVwvEKXIkQF47UfX%2BqWMAXLSX63MOEu3KlzjEDppG47WQUB%2Fd6gq0AbrXG00uN8e3aZzd2PCF2Ln0DN1cRJrO1Ntjmu6Py9i8kfJbzNiwweiZcwrxUooUGoLGxD%2BE%2B73Ze2L6o7jdWU0uvwIaR5kliKa8U%2FyA&X-Amz-Signature=f12cd5e8f8441ce69b4885a2922189bfc879e8f49e43f08e7262f0a37d160a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
