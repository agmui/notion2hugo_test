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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOAYQTR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8wGrfr%2BDcwbJPxyuOSOgW5EoHxE7ZT6QbzsBduSnD5gIhAO7qRVi9vhgLJMwOZ539LOThQG%2BOueknG1%2BU4PGZcTcaKv8DCD4QABoMNjM3NDIzMTgzODA1Igx398qeYqQybgQY254q3AMhC3OADnDIglemMSxmLhty0QVPr3mZypUXewTZgtwho%2FnAvIQTRYD6OqUpdbBqFGqXhNebIm9PdvYdeGaYaPIjBS%2BBHrkZt60SMuWv5jKu%2FhKCpHL9RrL6wWB3hdzzwBI3KzmJtlblgMmps8bqigNAS1HLP9pFROFCu%2FB6ezrszWvYh%2Bxf%2BXi5eJzUV8izpRO0lVH22PO7vC4n7Gy3XcOMWSSCe05Oq1Em3KWQFAavAacKCBltpbbqSq9F%2BuZYg%2B9xNGkssZAwMVSu5RUgrKz3ne2Fw2eiwj3lgirtYouS4tXuHuxeAw1haxL%2BBXc2BX1wp63AragH02sKDQwPa%2F6zrkJ9LHOY3BvW%2Bb8LuVOgEJOV3nvpO6bbTUb1aDG9uj%2BDz0PW%2BHx8HJIxQojYpXNr5ryhpWFwtjQ3LP1YDejFoJE92DCqcoBtJD3WX67Q0y0YrzhUEIsEOV89pWVGhVYjdmwLm2JDr3cA8pOBaNCEQGBeQCQqyJMnvhaxwvUznr%2BS8pQHVSyGEY93jkAOoH12a8E00Hgo%2Fa7gO4J06ZCEdd1F0e%2Bv2VBfH%2FMdWkvJmpcS8Aas%2B1lOT7apxcwosW6d831Sbo%2BdYkLIUckCUDbhrHwlqY41w1COU2PbezCb296%2BBjqkAWzF6WpRdiMjCsxhReaMCyMMWGXBIKjG18VypsBB4U%2B6GSf8Fq9h02YEEbqSCFF320mUDm91lqGiolsPXxn9swTgfUVXlucVYPLxV2s%2BfOcw948Yq1ZTRh5uHpT4S2RMvPQ6Xet8IwMMtTgpr0PF%2FkiBTl29lmm4o7mkOP0pq57%2Bx%2FsCrnRI5BoFpVFy8O7%2Bv%2FXhwjXfsm4mxsSec5zYR9f8lfWP&X-Amz-Signature=6330236768df363283959c2469a9ca61b6d2a77a7a3977b208a60bb67352fac0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOAYQTR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8wGrfr%2BDcwbJPxyuOSOgW5EoHxE7ZT6QbzsBduSnD5gIhAO7qRVi9vhgLJMwOZ539LOThQG%2BOueknG1%2BU4PGZcTcaKv8DCD4QABoMNjM3NDIzMTgzODA1Igx398qeYqQybgQY254q3AMhC3OADnDIglemMSxmLhty0QVPr3mZypUXewTZgtwho%2FnAvIQTRYD6OqUpdbBqFGqXhNebIm9PdvYdeGaYaPIjBS%2BBHrkZt60SMuWv5jKu%2FhKCpHL9RrL6wWB3hdzzwBI3KzmJtlblgMmps8bqigNAS1HLP9pFROFCu%2FB6ezrszWvYh%2Bxf%2BXi5eJzUV8izpRO0lVH22PO7vC4n7Gy3XcOMWSSCe05Oq1Em3KWQFAavAacKCBltpbbqSq9F%2BuZYg%2B9xNGkssZAwMVSu5RUgrKz3ne2Fw2eiwj3lgirtYouS4tXuHuxeAw1haxL%2BBXc2BX1wp63AragH02sKDQwPa%2F6zrkJ9LHOY3BvW%2Bb8LuVOgEJOV3nvpO6bbTUb1aDG9uj%2BDz0PW%2BHx8HJIxQojYpXNr5ryhpWFwtjQ3LP1YDejFoJE92DCqcoBtJD3WX67Q0y0YrzhUEIsEOV89pWVGhVYjdmwLm2JDr3cA8pOBaNCEQGBeQCQqyJMnvhaxwvUznr%2BS8pQHVSyGEY93jkAOoH12a8E00Hgo%2Fa7gO4J06ZCEdd1F0e%2Bv2VBfH%2FMdWkvJmpcS8Aas%2B1lOT7apxcwosW6d831Sbo%2BdYkLIUckCUDbhrHwlqY41w1COU2PbezCb296%2BBjqkAWzF6WpRdiMjCsxhReaMCyMMWGXBIKjG18VypsBB4U%2B6GSf8Fq9h02YEEbqSCFF320mUDm91lqGiolsPXxn9swTgfUVXlucVYPLxV2s%2BfOcw948Yq1ZTRh5uHpT4S2RMvPQ6Xet8IwMMtTgpr0PF%2FkiBTl29lmm4o7mkOP0pq57%2Bx%2FsCrnRI5BoFpVFy8O7%2Bv%2FXhwjXfsm4mxsSec5zYR9f8lfWP&X-Amz-Signature=32ffd6e76a94d611947f051fb7569656c7ed4ff65d17c002a7978339ff4afdd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOAYQTR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8wGrfr%2BDcwbJPxyuOSOgW5EoHxE7ZT6QbzsBduSnD5gIhAO7qRVi9vhgLJMwOZ539LOThQG%2BOueknG1%2BU4PGZcTcaKv8DCD4QABoMNjM3NDIzMTgzODA1Igx398qeYqQybgQY254q3AMhC3OADnDIglemMSxmLhty0QVPr3mZypUXewTZgtwho%2FnAvIQTRYD6OqUpdbBqFGqXhNebIm9PdvYdeGaYaPIjBS%2BBHrkZt60SMuWv5jKu%2FhKCpHL9RrL6wWB3hdzzwBI3KzmJtlblgMmps8bqigNAS1HLP9pFROFCu%2FB6ezrszWvYh%2Bxf%2BXi5eJzUV8izpRO0lVH22PO7vC4n7Gy3XcOMWSSCe05Oq1Em3KWQFAavAacKCBltpbbqSq9F%2BuZYg%2B9xNGkssZAwMVSu5RUgrKz3ne2Fw2eiwj3lgirtYouS4tXuHuxeAw1haxL%2BBXc2BX1wp63AragH02sKDQwPa%2F6zrkJ9LHOY3BvW%2Bb8LuVOgEJOV3nvpO6bbTUb1aDG9uj%2BDz0PW%2BHx8HJIxQojYpXNr5ryhpWFwtjQ3LP1YDejFoJE92DCqcoBtJD3WX67Q0y0YrzhUEIsEOV89pWVGhVYjdmwLm2JDr3cA8pOBaNCEQGBeQCQqyJMnvhaxwvUznr%2BS8pQHVSyGEY93jkAOoH12a8E00Hgo%2Fa7gO4J06ZCEdd1F0e%2Bv2VBfH%2FMdWkvJmpcS8Aas%2B1lOT7apxcwosW6d831Sbo%2BdYkLIUckCUDbhrHwlqY41w1COU2PbezCb296%2BBjqkAWzF6WpRdiMjCsxhReaMCyMMWGXBIKjG18VypsBB4U%2B6GSf8Fq9h02YEEbqSCFF320mUDm91lqGiolsPXxn9swTgfUVXlucVYPLxV2s%2BfOcw948Yq1ZTRh5uHpT4S2RMvPQ6Xet8IwMMtTgpr0PF%2FkiBTl29lmm4o7mkOP0pq57%2Bx%2FsCrnRI5BoFpVFy8O7%2Bv%2FXhwjXfsm4mxsSec5zYR9f8lfWP&X-Amz-Signature=5e8b1b4bd245f7651687984fee439d1ffc08a8c53abbf17bd3746d9389539d00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
