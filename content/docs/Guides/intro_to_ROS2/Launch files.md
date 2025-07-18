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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6G4OGR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDnhq6h3F%2FsMYJEH9gxON%2FNOoCYlT2sU8gi%2Fo0qElw5hQIgQnOdrfLtvMtTKXgRJ5DUQvbnZqEA9lIqDF6jQ6TMdU4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIf3Q%2FBtZbItMg5CrcA6FdqEfqql49wbkwzEF%2FiYMBjZonhce3txSSe4oidRhHc7Q3xJRb8tt8zR1kkL5doOuKMrlU26JR%2FTtvOf5ct6yPTKWNckT178eBbY%2BtoX9ouJd22Vu6QWmmgDERZrXYhYsZIgHJXf%2BDQrIqF21mBZoflRnsVEhPpP9kB56AK2GNEVT7MtLOifgfYHy8c9G79XBcvSw8bZTg7KUVXnx4L4PoIHs2QViNsJO437fYTwplLq1UiPcoPZ3oXHEURzJggyvCVUYakPVR0IOx25kz49%2FQKhx55mxpaDoYeZLz5Gufn%2Bm1rJ6BNjAGUTc01d1n9vHn7rZX%2FkYfmeC5RRt%2BtbTqZ0MyP0WtjCON2mhJ3%2BVZFFVanAF1hTfmeq%2FoTjd%2FZGXS%2FC%2BQL3dCR6H8te8fhteDSNo95IQPBGZcV%2FLWQsm%2BoWR5GhYhs6sMDrD4SZwOF2jsra42bxTlpbqjLM6JeF44uRAPpgZ9b0xSek38KBT1EKzWAv1CIYJu0zmOucsJKj8FwHHPPYm5MXxZMauBkM6LeXnNaBt7LrDCUxjuXxewh%2Be5hcmUtc4w0J2vI5AYkBDzNn8FQ9xbIWKzSGQPLZqn1%2F5Eb1NAA2zj3RyYA9vxQHjKvVbf5uaEpBFrMO3P6MMGOqUB6ban%2FfA9UvoHInlyQEelsos81h6d%2B8YEjHXtG7TokQSAF4PpcUCZbwhUf5OS32GUMPribI%2Ft8TM9Fe%2F%2BfYybegVOpMcQB7eYX0Xild6nAWH5VvH4m09zxTnRIGgW2y2M3Ko7%2FCzn6zuCmXy0NPgoLTA1tjFJAqNJsbe3Ub8biRxkK92ipHNKz7abYoNdXHLxlcKUIi6tnhv6aDn0aezQboU3POub&X-Amz-Signature=7a0775a979cf4aa2ad3fe97469038d4530e94443ab35ae103c8723d3e9fbbc30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6G4OGR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDnhq6h3F%2FsMYJEH9gxON%2FNOoCYlT2sU8gi%2Fo0qElw5hQIgQnOdrfLtvMtTKXgRJ5DUQvbnZqEA9lIqDF6jQ6TMdU4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIf3Q%2FBtZbItMg5CrcA6FdqEfqql49wbkwzEF%2FiYMBjZonhce3txSSe4oidRhHc7Q3xJRb8tt8zR1kkL5doOuKMrlU26JR%2FTtvOf5ct6yPTKWNckT178eBbY%2BtoX9ouJd22Vu6QWmmgDERZrXYhYsZIgHJXf%2BDQrIqF21mBZoflRnsVEhPpP9kB56AK2GNEVT7MtLOifgfYHy8c9G79XBcvSw8bZTg7KUVXnx4L4PoIHs2QViNsJO437fYTwplLq1UiPcoPZ3oXHEURzJggyvCVUYakPVR0IOx25kz49%2FQKhx55mxpaDoYeZLz5Gufn%2Bm1rJ6BNjAGUTc01d1n9vHn7rZX%2FkYfmeC5RRt%2BtbTqZ0MyP0WtjCON2mhJ3%2BVZFFVanAF1hTfmeq%2FoTjd%2FZGXS%2FC%2BQL3dCR6H8te8fhteDSNo95IQPBGZcV%2FLWQsm%2BoWR5GhYhs6sMDrD4SZwOF2jsra42bxTlpbqjLM6JeF44uRAPpgZ9b0xSek38KBT1EKzWAv1CIYJu0zmOucsJKj8FwHHPPYm5MXxZMauBkM6LeXnNaBt7LrDCUxjuXxewh%2Be5hcmUtc4w0J2vI5AYkBDzNn8FQ9xbIWKzSGQPLZqn1%2F5Eb1NAA2zj3RyYA9vxQHjKvVbf5uaEpBFrMO3P6MMGOqUB6ban%2FfA9UvoHInlyQEelsos81h6d%2B8YEjHXtG7TokQSAF4PpcUCZbwhUf5OS32GUMPribI%2Ft8TM9Fe%2F%2BfYybegVOpMcQB7eYX0Xild6nAWH5VvH4m09zxTnRIGgW2y2M3Ko7%2FCzn6zuCmXy0NPgoLTA1tjFJAqNJsbe3Ub8biRxkK92ipHNKz7abYoNdXHLxlcKUIi6tnhv6aDn0aezQboU3POub&X-Amz-Signature=c83c1b8684ddb85dd8a55b4d077e07f499be0cd9b0daae4f143fdc21d92dc9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6G4OGR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDnhq6h3F%2FsMYJEH9gxON%2FNOoCYlT2sU8gi%2Fo0qElw5hQIgQnOdrfLtvMtTKXgRJ5DUQvbnZqEA9lIqDF6jQ6TMdU4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIf3Q%2FBtZbItMg5CrcA6FdqEfqql49wbkwzEF%2FiYMBjZonhce3txSSe4oidRhHc7Q3xJRb8tt8zR1kkL5doOuKMrlU26JR%2FTtvOf5ct6yPTKWNckT178eBbY%2BtoX9ouJd22Vu6QWmmgDERZrXYhYsZIgHJXf%2BDQrIqF21mBZoflRnsVEhPpP9kB56AK2GNEVT7MtLOifgfYHy8c9G79XBcvSw8bZTg7KUVXnx4L4PoIHs2QViNsJO437fYTwplLq1UiPcoPZ3oXHEURzJggyvCVUYakPVR0IOx25kz49%2FQKhx55mxpaDoYeZLz5Gufn%2Bm1rJ6BNjAGUTc01d1n9vHn7rZX%2FkYfmeC5RRt%2BtbTqZ0MyP0WtjCON2mhJ3%2BVZFFVanAF1hTfmeq%2FoTjd%2FZGXS%2FC%2BQL3dCR6H8te8fhteDSNo95IQPBGZcV%2FLWQsm%2BoWR5GhYhs6sMDrD4SZwOF2jsra42bxTlpbqjLM6JeF44uRAPpgZ9b0xSek38KBT1EKzWAv1CIYJu0zmOucsJKj8FwHHPPYm5MXxZMauBkM6LeXnNaBt7LrDCUxjuXxewh%2Be5hcmUtc4w0J2vI5AYkBDzNn8FQ9xbIWKzSGQPLZqn1%2F5Eb1NAA2zj3RyYA9vxQHjKvVbf5uaEpBFrMO3P6MMGOqUB6ban%2FfA9UvoHInlyQEelsos81h6d%2B8YEjHXtG7TokQSAF4PpcUCZbwhUf5OS32GUMPribI%2Ft8TM9Fe%2F%2BfYybegVOpMcQB7eYX0Xild6nAWH5VvH4m09zxTnRIGgW2y2M3Ko7%2FCzn6zuCmXy0NPgoLTA1tjFJAqNJsbe3Ub8biRxkK92ipHNKz7abYoNdXHLxlcKUIi6tnhv6aDn0aezQboU3POub&X-Amz-Signature=0f3849a33087465bd7b4f782a2e15978ef8b612a07da7ca55d3c1a5934381b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
