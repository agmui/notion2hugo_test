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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGJ33J2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCcNeufmytcQ1JdSaC%2F5hzZQ7O9CQ0Q5%2Fj1xyuc1uUZywIhAK2mpGIpZ90cxtE%2BPFovtDyMf54aBDcBw4r6ObTNiySFKv8DCCMQABoMNjM3NDIzMTgzODA1IgwTD7INDrXx0T0aCvwq3ANdJK488CVlQs3y0OA%2FUACzimGsFJErGTIWmX%2FBEk8Br0Fo6VZ0HV%2FzY%2Bqnr4sh93%2B%2B7IuhBDzpR2FP10gpdzbKTASAH%2B1btvP0w%2BEp5PRDKh7E%2Fq9Clc7FNZJQxFyGJ3zfUF2APn%2BdGb843g82upRdA6T7JK6gwMZmPA33644BPgjT%2F3j6ryAcI7VrtNMzqme4%2BLE3uMQnzeQcHQzi5Up%2FRzYs1Xal4d319%2BjhvnA%2FoDANUh%2Bkffyn7aIWfLTcH%2FcULnXFYiN4jw82LWIhXV3hqPz3zRJ7HC2qFtz5gxJvE1rqcdrdCo0ZUhn%2BoRwHOhZuUwlWxlmS2b6J1krVyvUkXcja%2FipE2XasBPFVUc09IfaWWipjNjv7yDjqB94X1wG0siXRY6w7Y%2BHjaBFblIsqFr8P6sgd957cqC85XNeueOtFFrb7dL4yn%2F3niV6Z0GhlqKz5EZdVLyB9Iuhc8H6Jgq0JG2WxuptkfSPcDE59mFkJXcMa4vSx1HjDbk%2Fe9A2KR9ov7HKtONw1vUDiZnegA1YfuNnVT6Gndku5HrnV2O%2FFefvNviYx1wRh7jLYV%2BYZRPQRQT1kRlge%2F15LAKNgRzS3hZaMO7oPohIVmISCJ9y%2B7v%2FwDAR%2FggG7WjCNzNHDBjqkAb6Pj1YW3Zl8F9gw0JawQiM19Ky60CbJjd2QIW6JoaUqXvGrlh8dNZVVvu4uk6LMtLKZqEzjnfpR02uAFbXPbeP%2FBSWUbpLP%2Fil7A1vxxc%2FDVMMUdm%2FF71j2VzfbAdDhD8LV%2BHlMsaD4NjSKibHtbp%2FtrfwjjLi41NVJyFo7zKEZ2ohP9kqA2x3op4B7ugpE6ceH56KnGLxzCKZP%2BREARS%2Fo5Dxp&X-Amz-Signature=fb5cb27f5d09c84d92df21c94fd08fa991e6729043a31d1e93d97404aaa8d940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGJ33J2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCcNeufmytcQ1JdSaC%2F5hzZQ7O9CQ0Q5%2Fj1xyuc1uUZywIhAK2mpGIpZ90cxtE%2BPFovtDyMf54aBDcBw4r6ObTNiySFKv8DCCMQABoMNjM3NDIzMTgzODA1IgwTD7INDrXx0T0aCvwq3ANdJK488CVlQs3y0OA%2FUACzimGsFJErGTIWmX%2FBEk8Br0Fo6VZ0HV%2FzY%2Bqnr4sh93%2B%2B7IuhBDzpR2FP10gpdzbKTASAH%2B1btvP0w%2BEp5PRDKh7E%2Fq9Clc7FNZJQxFyGJ3zfUF2APn%2BdGb843g82upRdA6T7JK6gwMZmPA33644BPgjT%2F3j6ryAcI7VrtNMzqme4%2BLE3uMQnzeQcHQzi5Up%2FRzYs1Xal4d319%2BjhvnA%2FoDANUh%2Bkffyn7aIWfLTcH%2FcULnXFYiN4jw82LWIhXV3hqPz3zRJ7HC2qFtz5gxJvE1rqcdrdCo0ZUhn%2BoRwHOhZuUwlWxlmS2b6J1krVyvUkXcja%2FipE2XasBPFVUc09IfaWWipjNjv7yDjqB94X1wG0siXRY6w7Y%2BHjaBFblIsqFr8P6sgd957cqC85XNeueOtFFrb7dL4yn%2F3niV6Z0GhlqKz5EZdVLyB9Iuhc8H6Jgq0JG2WxuptkfSPcDE59mFkJXcMa4vSx1HjDbk%2Fe9A2KR9ov7HKtONw1vUDiZnegA1YfuNnVT6Gndku5HrnV2O%2FFefvNviYx1wRh7jLYV%2BYZRPQRQT1kRlge%2F15LAKNgRzS3hZaMO7oPohIVmISCJ9y%2B7v%2FwDAR%2FggG7WjCNzNHDBjqkAb6Pj1YW3Zl8F9gw0JawQiM19Ky60CbJjd2QIW6JoaUqXvGrlh8dNZVVvu4uk6LMtLKZqEzjnfpR02uAFbXPbeP%2FBSWUbpLP%2Fil7A1vxxc%2FDVMMUdm%2FF71j2VzfbAdDhD8LV%2BHlMsaD4NjSKibHtbp%2FtrfwjjLi41NVJyFo7zKEZ2ohP9kqA2x3op4B7ugpE6ceH56KnGLxzCKZP%2BREARS%2Fo5Dxp&X-Amz-Signature=4f5ad989f50d656e10cba7a8f3e875c4983354cefb5a5ff1287f91947ff564cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGJ33J2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCcNeufmytcQ1JdSaC%2F5hzZQ7O9CQ0Q5%2Fj1xyuc1uUZywIhAK2mpGIpZ90cxtE%2BPFovtDyMf54aBDcBw4r6ObTNiySFKv8DCCMQABoMNjM3NDIzMTgzODA1IgwTD7INDrXx0T0aCvwq3ANdJK488CVlQs3y0OA%2FUACzimGsFJErGTIWmX%2FBEk8Br0Fo6VZ0HV%2FzY%2Bqnr4sh93%2B%2B7IuhBDzpR2FP10gpdzbKTASAH%2B1btvP0w%2BEp5PRDKh7E%2Fq9Clc7FNZJQxFyGJ3zfUF2APn%2BdGb843g82upRdA6T7JK6gwMZmPA33644BPgjT%2F3j6ryAcI7VrtNMzqme4%2BLE3uMQnzeQcHQzi5Up%2FRzYs1Xal4d319%2BjhvnA%2FoDANUh%2Bkffyn7aIWfLTcH%2FcULnXFYiN4jw82LWIhXV3hqPz3zRJ7HC2qFtz5gxJvE1rqcdrdCo0ZUhn%2BoRwHOhZuUwlWxlmS2b6J1krVyvUkXcja%2FipE2XasBPFVUc09IfaWWipjNjv7yDjqB94X1wG0siXRY6w7Y%2BHjaBFblIsqFr8P6sgd957cqC85XNeueOtFFrb7dL4yn%2F3niV6Z0GhlqKz5EZdVLyB9Iuhc8H6Jgq0JG2WxuptkfSPcDE59mFkJXcMa4vSx1HjDbk%2Fe9A2KR9ov7HKtONw1vUDiZnegA1YfuNnVT6Gndku5HrnV2O%2FFefvNviYx1wRh7jLYV%2BYZRPQRQT1kRlge%2F15LAKNgRzS3hZaMO7oPohIVmISCJ9y%2B7v%2FwDAR%2FggG7WjCNzNHDBjqkAb6Pj1YW3Zl8F9gw0JawQiM19Ky60CbJjd2QIW6JoaUqXvGrlh8dNZVVvu4uk6LMtLKZqEzjnfpR02uAFbXPbeP%2FBSWUbpLP%2Fil7A1vxxc%2FDVMMUdm%2FF71j2VzfbAdDhD8LV%2BHlMsaD4NjSKibHtbp%2FtrfwjjLi41NVJyFo7zKEZ2ohP9kqA2x3op4B7ugpE6ceH56KnGLxzCKZP%2BREARS%2Fo5Dxp&X-Amz-Signature=61ec17dc4cbc55a84ceb22540a31cc24f29985dbbf5dc8866565dc14e46229c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
